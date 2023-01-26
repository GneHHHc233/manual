[General]
loglevel = notify
bypass-system = true
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local
bypass-tun = 192.168.0.0/16,10.0.0.0/8,172.16.0.0/12
dns-server = 210.21.4.130,223.5.5.5,114.114.114,8.8.8.8,8.8.4.4
ipv6 = true

[Proxy]
# http proxy
ProxyHTTP = http, 1.2.3.4, 443, username, password

# https proxy
ProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com

# socks5 proxy
ProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false

# socks5 over tls proxy
ProxySOCKS5TLS = socks5-tls, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com

# shadowsocks proxy, simple-obfs supported
ProxySS = ss, 1.2.3.4, 8000, encrypt-method=chacha20-ietf-poly1305, password=abcd1234, udp-relay=false, obfs=http, obfs-host=www.google.com, obfs-uri=/

# vmess proxy, tls and websocket supported, pure tcp is not supported
ProxyVMess = vmess, 1.2.3.4, 8000, username=0233d11c-15a4-47d3-ade3-48ffca0ce119, udp-relay=false, ws=true, tls=true, ws-path=/v2, ws-headers=X-Header-1:value|X-Header-2:value, skip-cert-verify=true, sni=www.google.com, vmess-aead=true

# trojan proxy, trojan grpc is not supported
ProxyTrojan = trojan, 192.168.20.6, 443, password=password1, udp-relay=false, skip-cert-verify=true, sni=www.google.com

[Proxy Group]
🚀 节点选择 = select,ProxyHTTP,ProxyHTTPS,ProxySOCKS5,ProxySOCKS5TLS,ProxySS,ProxyVMess,ProxyTrojan
♻️ 自动选择 = url-test,ProxyHTTP,ProxyHTTPS,ProxySOCKS5,ProxySOCKS5TLS,ProxySS,ProxyVMess,ProxyTrojan
📲 电报信息 = select,🚀 节点选择,🎯 全球直连
🍎 苹果服务 = select,🚀 节点选择,🎯 全球直连,
🎯 全球直连 = select,DIRECT,🚀 节点选择
🛑 全球拦截 = select,REJECT,DIRECT
🐟 漏网之鱼 = select,🚀 节点选择,🎯 全球直连
🎯 国内流量 = select,🚀 节点选择,🎯 全球直连

[Rule]
PROCESS-NAME,v2ray,🎯 全球直连
PROCESS-NAME,xray,🎯 全球直连
PROCESS-NAME,clash,🎯 全球直连
PROCESS-NAME,naive,🎯 全球直连
PROCESS-NAME,trojan,🎯 全球直连
PROCESS-NAME,trojan-go,🎯 全球直连
PROCESS-NAME,ss-local,🎯 全球直连
PROCESS-NAME,privoxy,🎯 全球直连
PROCESS-NAME,leaf,🎯 全球直连
PROCESS-NAME,Thunder,🎯 全球直连
PROCESS-NAME,DownloadService,🎯 全球直连
PROCESS-NAME,qBittorrent,🎯 全球直连
PROCESS-NAME,Transmission,🎯 全球直连
PROCESS-NAME,fdm,🎯 全球直连
PROCESS-NAME,aria2c,🎯 全球直连
PROCESS-NAME,Folx,🎯 全球直连
PROCESS-NAME,NetTransport,🎯 全球直连
PROCESS-NAME,uTorrent,🎯 全球直连
PROCESS-NAME,WebTorrent,🎯 全球直连
DOMAIN-SET,https://raw.githubusercontent.com/Loyalsoldier/surge-rules/release/private.txt,🎯 全球直连
RULE-SET,SYSTEM,🎯 全球直连
DOMAIN-SET,https://raw.githubusercontent.com/Loyalsoldier/surge-rules/release/google.txt,🎯 全球直连
DOMAIN-SET,https://raw.githubusercontent.com/Loyalsoldier/surge-rules/release/direct.txt,🎯 全球直连
RULE-SET,https://raw.githubusercontent.com/Loyalsoldier/surge-rules/release/cncidr.txt,🎯 全球直连
RULE-SET,LAN,🎯 全球直连
ruleset,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyGFWlist.list,🚀 节点选择
DOMAIN-SET,https://raw.githubusercontent.com/Loyalsoldier/surge-rules/release/reject.txt,🛑 全球拦截
DOMAIN-SET,https://cdn.jsdelivr.net/gh/Loyalsoldier/surge-rules@release/reject.txt,🛑 全球拦截
ruleset,[]DOMAIN-KEYWORD,beetalk,📲 聊天软件
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Telegram.list,📲 聊天软件
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Whatsapp.list ,📲 聊天软件
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Line.list ,📲 聊天软件
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/KakaoTalk.list,📲 聊天软件
ruleset,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/GoogleFCM.list,📢 谷歌FCM
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Google.list,📢 谷歌FCM 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Other/GoogleIP.list,📢 谷歌FCM 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/GoogleCNProxyIP.list,📢 谷歌FCM 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/GoogleFCM.list,📢 谷歌FCM 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/GoogleCN.list,📢 谷歌FCM
ruleset,[]DOMAIN,dl.google.com,📢 谷歌FCM 
ruleset,[]DOMAIN-SUFFIX,googletraveladservices.com,📢 谷歌FCM
ruleset,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/LocalAreaNetwork.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/UnBan.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/BilibiliHMT.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Bilibili.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/IqiyiHMT.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Iqiyi.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/LeTV.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/TencentVideo.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Youku.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/CCTV.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/MGTVTV.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/PPTVPPLive.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/NetEaseMusic.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Ximalaya.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/ChinaMedia.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/CN.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/360.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/4399.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/58.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Alibaba.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Baidu.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Blizzard.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/ByteDance.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/ChinaNet.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/DiDi.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Douyu.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/HuaWei.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Iflytek.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/JD.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Kingsoft.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Meitu.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/MI.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/NetEase.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/PDD.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Sina.list,🎯 国内流量
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/SohuSogo.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Tencent.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Vip.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/Xunlei.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/YYeTs.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/PrivateTracker.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/TeamViewer.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/PublicDirectCDN.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Ruleset/AccelerateDirectSites.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/ChinaDomain.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/ChinaCompanyIp.list,🎯 国内流量 
ruleset,https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rules/ACL4SSR/Clash/Other/China.list,🎯 国内流量
ruleset,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaIp.list,🎯 国内流量
ruleset,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Download.list,🎯 国内流量





FINAL,🐟 漏网之鱼










