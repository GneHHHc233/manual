"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[1758],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4884:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:3},l="Assign dns server for specified domain",c={unversionedId:"profile-format/host/server",id:"profile-format/host/server",title:"Assign dns server for specified domain",description:"Sample",source:"@site/docs/profile-format/host/server.md",sourceDirName:"profile-format/host",slug:"/profile-format/host/server",permalink:"/docs/profile-format/host/server",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/host/server.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Domain alias",permalink:"/docs/profile-format/host/alias"},next:{title:"[Proxy]",permalink:"/docs/profile-format/proxy/"}},p={},u=[{value:"Sample",id:"sample",level:2}],f={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"assign-dns-server-for-specified-domain"},"Assign dns server for specified domain"),(0,i.kt)("h2",{id:"sample"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="DNS query will be sent to 8.8.8.8"',title:'"DNS',query:!0,will:!0,be:!0,sent:!0,to:!0,'8.8.8.8"':!0},"bar.com = server:8.8.8.8\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="DNS query will be sent to system DNS server"',title:'"DNS',query:!0,will:!0,be:!0,sent:!0,to:!0,system:!0,DNS:!0,'server"':!0},"bar.com = server:system\n")))}m.isMDXComponent=!0}}]);