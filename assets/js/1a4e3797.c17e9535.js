"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[7920],{8374:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var n=a(7294),r=a(2263),c=a(8765),l=a(5742),s=a(9960),u=a(6550),o=a(412);var m=function(){const e=(0,u.k6)(),t=(0,u.TH)(),{siteConfig:{baseUrl:a}}=(0,r.Z)();return{searchValue:o.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}},h=a(22),i=a(8202),p=a(2539),d=a(726),f=a(1073),E=a(311),_=a(1029);function g(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,((e,a)=>Object.prototype.hasOwnProperty.call(t,a)?String(t[a]):e))}var I="searchQueryInput_CFBF",S="searchResultItem_U687",y="searchResultItemPath_uIbk",w="searchResultItemSummary_oZHr";function b(e){let{searchResult:{document:t,type:a,page:r,tokens:c,metadata:l}}=e;const u=0===a,o=2===a,m=(u?t.b:r.b).slice(),h=o?t.s:t.t;return u||m.push(r.t),n.createElement("article",{className:S},n.createElement("h2",null,n.createElement(s.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,p.C)(h,c):(0,d.o)(h,(0,f.m)(l,"t"),c,100)}})),m.length>0&&n.createElement("p",{className:y},m.join(" \u203a ")),o&&n.createElement("p",{className:w,dangerouslySetInnerHTML:{__html:(0,d.o)(t.t,(0,f.m)(l,"t"),c,100)}}))}var k=function(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),{searchValue:t,updateSearchPath:a}=m(),[s,u]=(0,n.useState)(t),[o,p]=(0,n.useState)(),[d,f]=(0,n.useState)(),S=(0,n.useMemo)((()=>s?g(_.Iz.search_results_for,{keyword:s}):_.Iz.search_the_documentation),[s]);(0,n.useEffect)((()=>{a(s),o&&(s?o(s,(e=>{f(e)})):f(void 0))}),[s,o]);const y=(0,n.useCallback)((e=>{u(e.target.value)}),[]);return(0,n.useEffect)((()=>{t&&t!==s&&u(t)}),[t]),(0,n.useEffect)((()=>{!async function(){const{wrappedIndexes:t,zhDictionary:a}=await(0,h.w)(e);p((()=>(0,i.v)(t,a,100)))}()}),[e]),n.createElement(c.Z,{title:S},n.createElement(l.Z,null,n.createElement("meta",{property:"robots",content:"noindex, follow"})),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("h1",null,S),n.createElement("input",{type:"search",name:"q",className:I,"aria-label":"Search",onChange:y,value:s,autoComplete:"off",autoFocus:!0}),!o&&s&&n.createElement("div",null,n.createElement(E.Z,null)),d&&(d.length>0?n.createElement("p",null,g(1===d.length?_.Iz.count_documents_found:_.Iz.count_documents_found_plural,{count:d.length})):n.createElement("p",null,_.Iz.no_documents_were_found)),n.createElement("section",null,d&&d.map((e=>n.createElement(b,{key:e.document.i,searchResult:e}))))))}}}]);