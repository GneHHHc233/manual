"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[9093],{3905:function(e,o,n){n.d(o,{Zo:function(){return p},kt:function(){return m}});var c=n(7294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function I(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);o&&(c=c.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,c)}return n}function r(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?I(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function F(e,o){if(null==e)return{};var n,c,t=function(e,o){if(null==e)return{};var n,c,t={},I=Object.keys(e);for(c=0;c<I.length;c++)n=I[c],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(e);for(c=0;c<I.length;c++)n=I[c],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var S=c.createContext({}),l=function(e){var o=c.useContext(S),n=o;return e&&(n="function"==typeof e?e(o):r(r({},o),e)),n},p=function(e){var o=l(e.components);return c.createElement(S.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return c.createElement(c.Fragment,{},o)}},D=c.forwardRef((function(e,o){var n=e.components,t=e.mdxType,I=e.originalType,S=e.parentName,p=F(e,["components","mdxType","originalType","parentName"]),D=l(n),m=t,O=D["".concat(S,".").concat(m)]||D[m]||u[m]||I;return n?c.createElement(O,r(r({ref:o},p),{},{components:n})):c.createElement(O,r({ref:o},p))}));function m(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var I=n.length,r=new Array(I);r[0]=D;var F={};for(var S in o)hasOwnProperty.call(o,S)&&(F[S]=o[S]);F.originalType=e,F.mdxType="string"==typeof e?e:t,r[1]=F;for(var l=2;l<I;l++)r[l]=n[l];return c.createElement.apply(null,r)}return c.createElement.apply(null,n)}D.displayName="MDXCreateElement"},9747:function(e,o,n){n.r(o),n.d(o,{assets:function(){return p},contentTitle:function(){return S},default:function(){return m},frontMatter:function(){return F},metadata:function(){return l},toc:function(){return u}});var c=n(7462),t=n(3366),I=(n(7294),n(3905)),r=["components"],F={sidebar_position:2},S="Firewall bypassing",l={unversionedId:"profile-example/gfw",id:"profile-example/gfw",title:"Firewall bypassing",description:"Due to the complexity of the situation, the following examples are not guaranteed to solve all problems and are for reference only",source:"@site/docs/profile-example/gfw.md",sourceDirName:"profile-example",slug:"/profile-example/gfw",permalink:"/docs/profile-example/gfw",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-example/gfw.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Local Server",permalink:"/docs/profile-example/local_server"},next:{title:"ADBlock",permalink:"/docs/profile-example/adblock"}},p={},u=[],D={toc:u};function m(e){var o=e.components,n=(0,t.Z)(e,r);return(0,I.kt)("wrapper",(0,c.Z)({},D,n,{components:o,mdxType:"MDXLayout"}),(0,I.kt)("h1",{id:"firewall-bypassing"},"Firewall bypassing"),(0,I.kt)("p",null,"Due to the complexity of the situation, the following examples are not guaranteed to solve all problems and are for reference only"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-ini"},"[General]\nskip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local\ndns-server = 114.114.114.114, 223.5.5.5, system\nalways-real-ip = stun.l.google.com\n\n[Proxy]\nProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com\nProxySS = ss, 1.2.3.4, 8000, encrypt-method=chacha20-ietf-poly1305, password=abcd1234, udp-relay=false, obfs=http, obfs-host=www.google.com, obfs-uri=/\nProxyVMess = vmess, 1.2.3.4, 8000, username=0233d11c-15a4-47d3-ade3-48ffca0ce119, udp-relay=false, ws=true, tls=true, ws-path=/v2, ws-headers=X-Header-1:value|X-Header-2:value, skip-cert-verify=true, sni=www.google.com, vmess-aead=true\nProxyTrojan = trojan, 192.168.20.6, 443, password=password1, udp-relay=false, skip-cert-verify=true, sni=www.google.com\n\n[Proxy Group]\nSelectGroup = select, ProxyHTTPS, ProxySS, ProxyVMess, ProxyTrojan\n\n[Rule]\n# Apple\nDOMAIN-SUFFIX,appsto.re,SelectGroup\nDOMAIN-SUFFIX,s.mzstatic.com,SelectGroup\nDOMAIN,gspe1-ssl.ls.apple.com,SelectGroup\nDOMAIN,news-events.apple.com,SelectGroup\nDOMAIN,news-client.apple.com,SelectGroup\nDOMAIN-SUFFIX,itunes.apple.com,SelectGroup\nDOMAIN-SUFFIX,lookup-api.apple.com,SelectGroup\nDOMAIN-SUFFIX,lcdn-registration.apple.com,DIRECT\nDOMAIN-SUFFIX,mzstatic.com,DIRECT\n\n# Facebook\nDOMAIN-SUFFIX,cdninstagram.com,SelectGroup,force-remote-dns\nDOMAIN-SUFFIX,facebook.com,SelectGroup,force-remote-dns\nDOMAIN-SUFFIX,facebook.net,SelectGroup,force-remote-dns\nDOMAIN-SUFFIX,fb.com,SelectGroup,force-remote-dns\nDOMAIN-SUFFIX,fb.me,SelectGroup,force-remote-dns\nDOMAIN-SUFFIX,fbcdn.net,SelectGroup,force-remote-dns\nDOMAIN-SUFFIX,instagram.com,SelectGroup,force-remote-dns\nDOMAIN-SUFFIX,whatsapp.net,SelectGroup,force-remote-dns\nDOMAIN-SUFFIX,whatsapp.com,SelectGroup,force-remote-dns\n\n# Twitter\nDOMAIN-SUFFIX,t.co,SelectGroup,force-remote-dns\nDOMAIN-SUFFIX,twimg.com,SelectGroup,force-remote-dns\nDOMAIN-SUFFIX,twitter.com,SelectGroup,force-remote-dns\n\n# Google\nDOMAIN-SUFFIX,ampproject.com,SelectGroup\nDOMAIN-SUFFIX,ampproject.net,SelectGroup\nDOMAIN-SUFFIX,ampproject.org,SelectGroup\nDOMAIN-SUFFIX,android.com,SelectGroup\nDOMAIN-SUFFIX,blogspot.com,SelectGroup\nDOMAIN-SUFFIX,blogspot.hk,SelectGroup\nDOMAIN-SUFFIX,g.co,SelectGroup\nDOMAIN-SUFFIX,ggpht.com,SelectGroup\nDOMAIN-SUFFIX,goo.gl,SelectGroup\nDOMAIN-SUFFIX,googleusercontent.com,SelectGroup\nDOMAIN-SUFFIX,googlevideo.com,SelectGroup\nDOMAIN-SUFFIX,gstatic.com,SelectGroup\nDOMAIN-SUFFIX,gstatic.cn,SelectGroup\nDOMAIN-SUFFIX,gvt0.com,SelectGroup\nDOMAIN-SUFFIX,gvt1.com,SelectGroup\nDOMAIN-SUFFIX,gvt2.com,SelectGroup\nDOMAIN-SUFFIX,gvt3.com,SelectGroup\nDOMAIN-SUFFIX,youtu.be,SelectGroup\nDOMAIN-SUFFIX,youtube.com,SelectGroup,force-remote-dns\nDOMAIN-SUFFIX,youtube-nocookie.com,SelectGroup\nDOMAIN-SUFFIX,ytimg.com,SelectGroup\nDOMAIN,accounts.google.com,SelectGroup,force-remote-dns,enhanced-mode\nDOMAIN-SUFFIX,appspot.com,SelectGroup,force-remote-dns\nDOMAIN-SUFFIX,googleapis.cn,SelectGroup,force-remote-dns,enhanced-mode\nDOMAIN-SUFFIX,googleapis.com,SelectGroup,force-remote-dns,enhanced-mode\nDOMAIN-SUFFIX,googlesource.com,SelectGroup,force-remote-dns,enhanced-mode\nDOMAIN-SUFFIX,google.com,SelectGroup,force-remote-dns,enhanced-mode\nDOMAIN-SUFFIX,gmail.com,SelectGroup,force-remote-dns\nDOMAIN-KEYWORD,google,SelectGroup,force-remote-dns\n\n# Netflix\nDOMAIN-SUFFIX,netflix.com,SelectGroup\nDOMAIN-SUFFIX,netflix.net,SelectGroup\nDOMAIN-SUFFIX,nflxext.com,SelectGroup\nDOMAIN-SUFFIX,nflximg.com,SelectGroup\nDOMAIN-SUFFIX,nflximg.net,SelectGroup\nDOMAIN-SUFFIX,nflxso.net,SelectGroup\nDOMAIN-SUFFIX,nflxvideo.net,SelectGroup\n\n# BAT\nDOMAIN-SUFFIX,baidu.com,DIRECT\nDOMAIN-SUFFIX,baidupcs.com,DIRECT\nDOMAIN-SUFFIX,bdimg.com,DIRECT\nDOMAIN-SUFFIX,bdstatic.com,DIRECT\nDOMAIN-SUFFIX,alipay.com,DIRECT\nDOMAIN-SUFFIX,alipayobjects.com,DIRECT\nDOMAIN-SUFFIX,alicdn.com,DIRECT\nDOMAIN-SUFFIX,aliyun.com,DIRECT\nDOMAIN-SUFFIX,aliyuncs.com,DIRECT\nDOMAIN-SUFFIX,taobao.com,DIRECT\nDOMAIN-SUFFIX,tmall.com,DIRECT\nDOMAIN-SUFFIX,qq.com,DIRECT\nDOMAIN-SUFFIX,qqurl.com,DIRECT\n\n# China\nDOMAIN-SUFFIX,cn,DIRECT\nDOMAIN-SUFFIX,126.net,DIRECT\nDOMAIN-SUFFIX,163.com,DIRECT\nDOMAIN-SUFFIX,163.net,DIRECT\nDOMAIN-SUFFIX,amap.com,DIRECT\nDOMAIN-SUFFIX,autonavi.com,DIRECT\nDOMAIN-SUFFIX,ccgslb.com,DIRECT\nDOMAIN-SUFFIX,ccgslb.net,DIRECT\nDOMAIN-SUFFIX,cnbeta.com,DIRECT\nDOMAIN-SUFFIX,cnbetacdn.com,DIRECT\nDOMAIN-SUFFIX,douban.com,DIRECT\nDOMAIN-SUFFIX,doubanio.com,DIRECT\nDOMAIN-SUFFIX,gtimg.com,DIRECT\nDOMAIN-SUFFIX,hao123.com,DIRECT\nDOMAIN-SUFFIX,haosou.com,DIRECT\nDOMAIN-SUFFIX,ifeng.com,DIRECT\nDOMAIN-SUFFIX,iqiyi.com,DIRECT\nDOMAIN-SUFFIX,jd.com,DIRECT\nDOMAIN-SUFFIX,mi.com,DIRECT\nDOMAIN-SUFFIX,miui.com,DIRECT\nDOMAIN-SUFFIX,netease.com,DIRECT\nDOMAIN-SUFFIX,netease.im,DIRECT\nDOMAIN-SUFFIX,qdaily.com,DIRECT\nDOMAIN-SUFFIX,qhimg.com,DIRECT\nDOMAIN-SUFFIX,qihucdn.com,DIRECT\nDOMAIN-SUFFIX,qiniucdn.com,DIRECT\nDOMAIN-SUFFIX,qiniudn.com,DIRECT\nDOMAIN-SUFFIX,sogou.com,DIRECT\nDOMAIN-SUFFIX,sogoucdn.com,DIRECT\nDOMAIN-SUFFIX,sohu.com,DIRECT\nDOMAIN-SUFFIX,steamstatic.com,DIRECT\nDOMAIN-SUFFIX,suning.com,DIRECT\nDOMAIN-SUFFIX,tudou.com,DIRECT\nDOMAIN-SUFFIX,upaiyun.com,DIRECT\nDOMAIN-SUFFIX,clouddn.com,DIRECT\nDOMAIN-SUFFIX,upyun.com,DIRECT\nDOMAIN-SUFFIX,weibo.com,DIRECT\nDOMAIN-SUFFIX,youku.com,DIRECT\nDOMAIN-SUFFIX,xunlei.com,DIRECT\nDOMAIN-SUFFIX,zhihu.com,DIRECT\nDOMAIN-SUFFIX,zhimg.com,DIRECT\n\nDOMAIN,ip.bjango.com,DIRECT\n\n# Blocked\nDOMAIN-SUFFIX,9to5mac.com,SelectGroup\nDOMAIN-SUFFIX,abpchina.org,SelectGroup\nDOMAIN-SUFFIX,adblockplus.org,SelectGroup\nDOMAIN-SUFFIX,akamaihd.net,SelectGroup\nDOMAIN-SUFFIX,amazon.com,SelectGroup\nDOMAIN-SUFFIX,amazonaws.com,SelectGroup,enhanced-mode\nDOMAIN-SUFFIX,amplitude.com,SelectGroup\nDOMAIN-SUFFIX,angularjs.org,SelectGroup\nDOMAIN-SUFFIX,aol.com,SelectGroup\nDOMAIN-SUFFIX,aolcdn.com,SelectGroup\nDOMAIN-SUFFIX,arcgis.com,SelectGroup\nDOMAIN-SUFFIX,archive.org,SelectGroup\nDOMAIN-SUFFIX,aspnetcdn.com,SelectGroup\nDOMAIN-SUFFIX,att.com,SelectGroup\nDOMAIN-SUFFIX,awsstatic.com,SelectGroup\nDOMAIN-SUFFIX,azureedge.net,SelectGroup\nDOMAIN-SUFFIX,azurewebsites.net,SelectGroup\nDOMAIN-SUFFIX,bbc.com,SelectGroup\nDOMAIN-SUFFIX,bbc.co,SelectGroup\nDOMAIN-SUFFIX,bintray.com,SelectGroup,enhanced-mode\nDOMAIN-SUFFIX,bit.com,SelectGroup\nDOMAIN-SUFFIX,bit.ly,SelectGroup\nDOMAIN-SUFFIX,bitbucket.org,SelectGroup\nDOMAIN-SUFFIX,blog.com,SelectGroup\nDOMAIN-SUFFIX,blogcdn.com,SelectGroup\nDOMAIN-SUFFIX,blogger.com,SelectGroup\nDOMAIN-SUFFIX,blogsmithmedia.com,SelectGroup\nDOMAIN-SUFFIX,bloomberg.com,SelectGroup\nDOMAIN-SUFFIX,box.net,SelectGroup\nDOMAIN-SUFFIX,box.com,SelectGroup\nDOMAIN-SUFFIX,cachefly.net,SelectGroup\nDOMAIN-SUFFIX,chromium.org,SelectGroup\nDOMAIN-SUFFIX,cl.ly,SelectGroup\nDOMAIN-SUFFIX,cloudflare.com,SelectGroup\nDOMAIN-SUFFIX,cloudfront.net,SelectGroup\nDOMAIN-SUFFIX,cloudmagic.com,SelectGroup\nDOMAIN-SUFFIX,cnet.com,SelectGroup\nDOMAIN-SUFFIX,cocoapods.org,SelectGroup\nDOMAIN-SUFFIX,cocoapods.org,SelectGroup\nDOMAIN-SUFFIX,culturedcode.com,SelectGroup\nDOMAIN-SUFFIX,d.pr,SelectGroup\nDOMAIN-SUFFIX,dayone.me,SelectGroup\nDOMAIN-SUFFIX,digicert.com,SelectGroup\nDOMAIN-SUFFIX,discord.gg,SelectGroup\nDOMAIN-SUFFIX,discordapp.com,SelectGroup\nDOMAIN-SUFFIX,discordapp.net,SelectGroup\nDOMAIN-SUFFIX,disq.us,SelectGroup\nDOMAIN-SUFFIX,disqus.com,SelectGroup\nDOMAIN-SUFFIX,disquscdn.com,SelectGroup\nDOMAIN-SUFFIX,dnsimple.com,SelectGroup\nDOMAIN-SUFFIX,docker.com,SelectGroup\nDOMAIN-SUFFIX,dribbble.com,SelectGroup\nDOMAIN-SUFFIX,dropbox.com,SelectGroup\nDOMAIN-SUFFIX,dropboxapi.com,SelectGroup\nDOMAIN-SUFFIX,dropboxstatic.com,SelectGroup\nDOMAIN-SUFFIX,dropboxusercontent.com,SelectGroup\nDOMAIN-SUFFIX,droplr.com,SelectGroup\nDOMAIN-SUFFIX,duckduckgo.com,SelectGroup\nDOMAIN-SUFFIX,edgecastcdn.net,SelectGroup\nDOMAIN-SUFFIX,edgesuite.net,SelectGroup\nDOMAIN-SUFFIX,engadget.com,SelectGroup\nDOMAIN-SUFFIX,entrust.net,SelectGroup\nDOMAIN-SUFFIX,evernote.com,SelectGroup\nDOMAIN-SUFFIX,fabric.io,SelectGroup\nDOMAIN-SUFFIX,fastly.net,SelectGroup\nDOMAIN-SUFFIX,fc2.com,SelectGroup\nDOMAIN-SUFFIX,feedburner.com,SelectGroup\nDOMAIN-SUFFIX,feedly.com,SelectGroup\nDOMAIN-SUFFIX,feedsportal.com,SelectGroup\nDOMAIN-SUFFIX,flickr.com,SelectGroup\nDOMAIN-SUFFIX,gitbooks.io,SelectGroup\nDOMAIN-SUFFIX,git.io,SelectGroup\nDOMAIN-SUFFIX,github.com,SelectGroup,enhanced-mode\nDOMAIN-SUFFIX,github.io,SelectGroup\nDOMAIN-SUFFIX,githubapp.com,SelectGroup\nDOMAIN-SUFFIX,githubusercontent.com,SelectGroup,enhanced-mode\nDOMAIN-SUFFIX,globalsign.com,SelectGroup\nDOMAIN-SUFFIX,gmodules.com,SelectGroup\nDOMAIN-SUFFIX,godaddy.com,SelectGroup\nDOMAIN-SUFFIX,golang.org,SelectGroup\nDOMAIN-SUFFIX,goodreaders.com,SelectGroup\nDOMAIN-SUFFIX,goodreads.com,SelectGroup\nDOMAIN-SUFFIX,graphql.org,SelectGroup\nDOMAIN-SUFFIX,gravatar.com,SelectGroup\nDOMAIN-SUFFIX,gumroad.com,SelectGroup\nDOMAIN-SUFFIX,heroku.com,SelectGroup\nDOMAIN-SUFFIX,herokucdn.com,SelectGroup\nDOMAIN-SUFFIX,hotmail.com,SelectGroup\nDOMAIN-SUFFIX,ift.tt,SelectGroup\nDOMAIN-SUFFIX,ifttt.com,SelectGroup\nDOMAIN-SUFFIX,imageshack.us,SelectGroup\nDOMAIN-SUFFIX,img.ly,SelectGroup\nDOMAIN-SUFFIX,imgur.com,SelectGroup\nDOMAIN-SUFFIX,instapaper.com,SelectGroup\nDOMAIN-SUFFIX,ipfs.io,SelectGroup\nDOMAIN-SUFFIX,ipn.li,SelectGroup\nDOMAIN-SUFFIX,is.gd,SelectGroup\nDOMAIN-SUFFIX,j.mp,SelectGroup\nDOMAIN-SUFFIX,jshint.com,SelectGroup\nDOMAIN-SUFFIX,kat.cr,SelectGroup\nDOMAIN-SUFFIX,libsyn.com,SelectGroup\nDOMAIN-SUFFIX,licdn.com,SelectGroup\nDOMAIN-SUFFIX,linkedin.com,SelectGroup\nDOMAIN-SUFFIX,linode.com,SelectGroup\nDOMAIN-SUFFIX,lithium.com,SelectGroup\nDOMAIN-SUFFIX,littlehj.com,SelectGroup\nDOMAIN-SUFFIX,live.com,SelectGroup\nDOMAIN-SUFFIX,live.net,SelectGroup\nDOMAIN-SUFFIX,mathjax.org,SelectGroup\nDOMAIN-SUFFIX,medium.com,SelectGroup\nDOMAIN-SUFFIX,mega.co.nz,SelectGroup\nDOMAIN-SUFFIX,mega.nz,SelectGroup\nDOMAIN-SUFFIX,megaupload.com,SelectGroup\nDOMAIN-SUFFIX,mobile01.com,SelectGroup\nDOMAIN-SUFFIX,modmyi.com,SelectGroup\nDOMAIN-SUFFIX,name.com,SelectGroup\nDOMAIN-SUFFIX,nextmedia.com,SelectGroup\nDOMAIN-SUFFIX,nintendo.com,SelectGroup\nDOMAIN-SUFFIX,nyti.ms,SelectGroup\nDOMAIN-SUFFIX,nytimes.com,SelectGroup\nDOMAIN-SUFFIX,nytimg.com,SelectGroup\nDOMAIN-SUFFIX,nytstyle.com,SelectGroup\nDOMAIN-SUFFIX,nyt.com,SelectGroup\nDOMAIN-SUFFIX,omnigroup.com,SelectGroup\nDOMAIN-SUFFIX,onenote.com,SelectGroup\nDOMAIN-SUFFIX,openvpn.net,SelectGroup\nDOMAIN-SUFFIX,openwrt.org,SelectGroup\nDOMAIN-SUFFIX,ow.ly,SelectGroup\nDOMAIN-SUFFIX,pastebin.com,SelectGroup\nDOMAIN-SUFFIX,pandora.com,SelectGroup\nDOMAIN-SUFFIX,pinterest.com,SelectGroup\nDOMAIN-SUFFIX,pinimg.com,SelectGroup\nDOMAIN-SUFFIX,periscope.tv,SelectGroup\nDOMAIN-SUFFIX,pinboard.in,SelectGroup\nDOMAIN-SUFFIX,pixiv.net,SelectGroup\nDOMAIN-SUFFIX,pixiv.org,SelectGroup\nDOMAIN-SUFFIX,playpcesor.com,SelectGroup\nDOMAIN-SUFFIX,skype.com,SelectGroup\nDOMAIN-SUFFIX,slack.com,SelectGroup\nDOMAIN-SUFFIX,slack-edge.com,SelectGroup\nDOMAIN-SUFFIX,slack-msgs.com,SelectGroup\nDOMAIN-SUFFIX,smartmailcloud.com,SelectGroup\nDOMAIN-SUFFIX,sndcdn.com,SelectGroup\nDOMAIN-SUFFIX,soundcloud.com,SelectGroup\nDOMAIN-SUFFIX,sourceforge.net,SelectGroup,enhanced-mode\nDOMAIN-SUFFIX,sourceforge.io,SelectGroup,enhanced-mode\nDOMAIN-SUFFIX,speakerdeck.com,SelectGroup\nDOMAIN-SUFFIX,spotify.com,SelectGroup\nDOMAIN-SUFFIX,squarespace.com,SelectGroup\nDOMAIN-SUFFIX,sstatic.net,SelectGroup\nDOMAIN-SUFFIX,stackoverflow.com,SelectGroup\nDOMAIN-SUFFIX,staticflickr.com,SelectGroup\nDOMAIN-SUFFIX,steamcommunity.com,SelectGroup\nDOMAIN-SUFFIX,symauth.com,SelectGroup\nDOMAIN-SUFFIX,symcb.com,SelectGroup\nDOMAIN-SUFFIX,symcd.com,SelectGroup\nDOMAIN-SUFFIX,tapbots.com,SelectGroup\nDOMAIN-SUFFIX,tapbots.net,SelectGroup\nDOMAIN-SUFFIX,techcrunch.com,SelectGroup\nDOMAIN-SUFFIX,textnow.me,SelectGroup\nDOMAIN-SUFFIX,theinitium.com,SelectGroup\nDOMAIN-SUFFIX,telegram.org,SelectGroup\nDOMAIN-SUFFIX,telegram.me,SelectGroup\nDOMAIN-SUFFIX,telegra.ph,SelectGroup\nDOMAIN-SUFFIX,tdesktop.com,SelectGroup\nDOMAIN-SUFFIX,t.me,SelectGroup\nDOMAIN-SUFFIX,thepiratebay.org,SelectGroup\nDOMAIN-SUFFIX,tiny.cc,SelectGroup\nDOMAIN-SUFFIX,tinypic.com,SelectGroup\nDOMAIN-SUFFIX,tmblr.co,SelectGroup\nDOMAIN-SUFFIX,trello.com,SelectGroup\nDOMAIN-SUFFIX,trellocdn.com,SelectGroup\nDOMAIN-SUFFIX,tumblr.com,SelectGroup\nDOMAIN-SUFFIX,twitch.tv,SelectGroup\nDOMAIN-SUFFIX,txmblr.com,SelectGroup\nDOMAIN-SUFFIX,typekit.net,SelectGroup\nDOMAIN-SUFFIX,ubnt.com,SelectGroup\nDOMAIN-SUFFIX,urchin.com,SelectGroup\nDOMAIN-SUFFIX,v.gd,SelectGroup\nDOMAIN-SUFFIX,vimeo.com,SelectGroup\nDOMAIN-SUFFIX,vimeocdn.com,SelectGroup\nDOMAIN-SUFFIX,vine.co,SelectGroup\nDOMAIN-SUFFIX,vox-cdn.com,SelectGroup\nDOMAIN-SUFFIX,vsco.co,SelectGroup\nDOMAIN-SUFFIX,w3schools.com,SelectGroup\nDOMAIN-SUFFIX,weather.com,SelectGroup\nDOMAIN-SUFFIX,wikimedia.org,SelectGroup\nDOMAIN-SUFFIX,wikipedia.com,SelectGroup\nDOMAIN-SUFFIX,wikipedia.org,SelectGroup\nDOMAIN-SUFFIX,windows.net,SelectGroup\nDOMAIN-SUFFIX,wordpress.com,SelectGroup\nDOMAIN-SUFFIX,wp.com,SelectGroup\nDOMAIN-SUFFIX,wsj.com,SelectGroup\nDOMAIN-SUFFIX,wsj.net,SelectGroup\nDOMAIN-SUFFIX,yahoo.com,SelectGroup\nDOMAIN-SUFFIX,yahoo.net,SelectGroup\nDOMAIN-SUFFIX,yimg.com,SelectGroup\nDOMAIN-SUFFIX,ying.com,SelectGroup\n\n# Line\nDOMAIN-SUFFIX,scdn.co,SelectGroup,force-remote-dns\nDOMAIN-SUFFIX,line.naver.jp,SelectGroup,force-remote-dns\nDOMAIN-SUFFIX,line.me,SelectGroup\nDOMAIN-SUFFIX,line-apps.com,SelectGroup\nDOMAIN-SUFFIX,line-cdn.net,SelectGroup\nDOMAIN-SUFFIX,line-scdn.net,SelectGroup\n\n# Telegram\nIP-CIDR,91.108.56.0/22,SelectGroup,no-resolve\nIP-CIDR,91.108.4.0/22,SelectGroup,no-resolve\nIP-CIDR,91.108.8.0/22,SelectGroup,no-resolve\nIP-CIDR,109.239.140.0/24,SelectGroup,no-resolve\nIP-CIDR,149.154.160.0/20,SelectGroup,no-resolve\nIP-CIDR,149.154.164.0/22,SelectGroup,no-resolve\n\n# LAN\nDOMAIN-SUFFIX,local,DIRECT\nIP-CIDR,192.168.0.0/16,DIRECT\nIP-CIDR,10.0.0.0/8,DIRECT\nIP-CIDR,172.16.0.0/12,DIRECT\nIP-CIDR,127.0.0.0/8,DIRECT\nIP-CIDR,100.64.0.0/10,DIRECT\n\n# Final\nGEOIP,CN,DIRECT\nFINAL,SelectGroup\n")))}m.isMDXComponent=!0}}]);