"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[271],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=l.createContext({}),s=function(e){var t=l.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return l.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},v=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),v=n,m=u["".concat(d,".").concat(v)]||u[v]||c[v]||o;return r?l.createElement(m,a(a({ref:t},p),{},{components:r})):l.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=v;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:n,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,r)}v.displayName="MDXCreateElement"},6873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var l=r(7462),n=(r(7294),r(3905));const o={title:"\u4ec0\u4e48\u662f Steedos DX?",sidebar_position:1},a="Steedos \u5f00\u53d1\u8005\u4f53\u9a8c\u5982\u4f55\u6539\u53d8\u60a8\u7684\u5de5\u4f5c\u65b9\u5f0f",i={unversionedId:"developer",id:"developer",title:"\u4ec0\u4e48\u662f Steedos DX?",description:"Steedos Developer Experience\uff08DX\uff09\u662f\u4e00\u79cd\u65b0\u7684\u7ba1\u7406\u548c\u5f00\u53d1 Steedos \u4f4e\u4ee3\u7801\u5e73\u53f0\u4e0a\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u5f0f\uff0c\u8d2f\u7a7f\u5b83\u4eec\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u3002\u5b83\u7ed3\u5408\u4e86\u4f4e\u4ee3\u7801\u5e73\u53f0\u7684\u6700\u4f73\u529f\u80fd\uff0c\u5b9e\u73b0\u4e86\u6e90\u4ee3\u7801\u9a71\u52a8\u7684\u5f00\u53d1\u3001\u5177\u6709\u6cbb\u7406\u7684\u56e2\u961f\u534f\u4f5c\u4ee5\u53ca\u5728 Steedos \u4e0a\u81ea\u5b9a\u4e49\u5e94\u7528\u5f00\u53d1\u7684\u65b0\u6c34\u5e73\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer.md",sourceDirName:".",slug:"/developer",permalink:"/zh-CN/developer",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u4ec0\u4e48\u662f Steedos DX?",sidebar_position:1},sidebar:"developer",next:{title:"\u8bbe\u7f6e\u9879\u76ee",permalink:"/zh-CN/developer/setup/"}},d={},s=[{value:"Steedos DX \u7684\u4eae\u70b9",id:"steedos-dx-\u7684\u4eae\u70b9",level:2},{value:"1. \u6e90\u4ee3\u7801\u9a71\u52a8\u7684\u5f00\u53d1",id:"1-\u6e90\u4ee3\u7801\u9a71\u52a8\u7684\u5f00\u53d1",level:3},{value:"2. \u56e2\u961f\u534f\u4f5c",id:"2-\u56e2\u961f\u534f\u4f5c",level:3},{value:"3. \u6301\u7eed\u96c6\u6210\u548c\u90e8\u7f72\uff08CI/CD\uff09",id:"3-\u6301\u7eed\u96c6\u6210\u548c\u90e8\u7f72cicd",level:3},{value:"4. \u73af\u5883\u7ba1\u7406",id:"4-\u73af\u5883\u7ba1\u7406",level:3},{value:"5. \u5305\u548c\u4f9d\u8d56\u6027\u7ba1\u7406",id:"5-\u5305\u548c\u4f9d\u8d56\u6027\u7ba1\u7406",level:3},{value:"6. \u6a21\u5757\u5316\u90e8\u7f72",id:"6-\u6a21\u5757\u5316\u90e8\u7f72",level:3},{value:"Steedos DX \u6e90\u7801\u9a71\u52a8\u5f00\u53d1",id:"steedos-dx-\u6e90\u7801\u9a71\u52a8\u5f00\u53d1",level:2},{value:"\u8bbe\u7f6e\u9879\u76ee",id:"\u8bbe\u7f6e\u9879\u76ee",level:3},{value:"\u8f6f\u4ef6\u5305\u5f00\u53d1",id:"\u8f6f\u4ef6\u5305\u5f00\u53d1",level:3},{value:"\u8f6f\u4ef6\u5305\u5fae\u670d\u52a1\u5f00\u53d1",id:"\u8f6f\u4ef6\u5305\u5fae\u670d\u52a1\u5f00\u53d1",level:3},{value:"\u5fae\u9875\u9762\u6784\u5efa\u5668",id:"\u5fae\u9875\u9762\u6784\u5efa\u5668",level:3},{value:"API \u96c6\u6210",id:"api-\u96c6\u6210",level:3}],p={toc:s},u="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,l.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"steedos-\u5f00\u53d1\u8005\u4f53\u9a8c\u5982\u4f55\u6539\u53d8\u60a8\u7684\u5de5\u4f5c\u65b9\u5f0f"},"Steedos \u5f00\u53d1\u8005\u4f53\u9a8c\u5982\u4f55\u6539\u53d8\u60a8\u7684\u5de5\u4f5c\u65b9\u5f0f"),(0,n.kt)("p",null,"Steedos Developer Experience\uff08DX\uff09\u662f\u4e00\u79cd\u65b0\u7684\u7ba1\u7406\u548c\u5f00\u53d1 Steedos \u4f4e\u4ee3\u7801\u5e73\u53f0\u4e0a\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u5f0f\uff0c\u8d2f\u7a7f\u5b83\u4eec\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u3002\u5b83\u7ed3\u5408\u4e86\u4f4e\u4ee3\u7801\u5e73\u53f0\u7684\u6700\u4f73\u529f\u80fd\uff0c\u5b9e\u73b0\u4e86\u6e90\u4ee3\u7801\u9a71\u52a8\u7684\u5f00\u53d1\u3001\u5177\u6709\u6cbb\u7406\u7684\u56e2\u961f\u534f\u4f5c\u4ee5\u53ca\u5728 Steedos \u4e0a\u81ea\u5b9a\u4e49\u5e94\u7528\u5f00\u53d1\u7684\u65b0\u6c34\u5e73\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Steedos DX",src:r(1345).Z,width:"3260",height:"1416"})),(0,n.kt)("h2",{id:"steedos-dx-\u7684\u4eae\u70b9"},"Steedos DX \u7684\u4eae\u70b9"),(0,n.kt)("h3",{id:"1-\u6e90\u4ee3\u7801\u9a71\u52a8\u7684\u5f00\u53d1"},"1. \u6e90\u4ee3\u7801\u9a71\u52a8\u7684\u5f00\u53d1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Git \u7b49\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u8ddf\u8e2a\u66f4\u6539\u548c\u5386\u53f2\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e3a\u7ec4\u7ec7\u7684\u5143\u6570\u636e\u63d0\u4f9b\u4e00\u4e2a\u771f\u5b9e\u7684\u6e90\u5934\uff0c\u786e\u4fdd\u8de8\u73af\u5883\u7684\u4e00\u81f4\u6027\u3002")),(0,n.kt)("h3",{id:"2-\u56e2\u961f\u534f\u4f5c"},"2. \u56e2\u961f\u534f\u4f5c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u5e76\u53d1\u5f00\u53d1\uff0c\u4fc3\u8fdb\u56e2\u961f\u5408\u4f5c\u548c\u5e73\u884c\u5de5\u4f5c\u6d41\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u9694\u79bb\u7684\u5f00\u53d1\u73af\u5883\u548c\u5bf9\u53d8\u66f4\u7684\u6e05\u6670\u4e86\u89e3\uff0c\u51cf\u5c11\u51b2\u7a81\u3002")),(0,n.kt)("h3",{id:"3-\u6301\u7eed\u96c6\u6210\u548c\u90e8\u7f72cicd"},"3. \u6301\u7eed\u96c6\u6210\u548c\u90e8\u7f72\uff08CI/CD\uff09"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0e\u6d41\u884c\u7684 CI/CD \u5de5\u5177\u96c6\u6210\uff0c\u5b9e\u73b0\u81ea\u52a8\u5316\u6d4b\u8bd5\u548c\u90e8\u7f72\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6301\u7eed\u7684\u53cd\u9988\u548c\u8fed\u4ee3\u6539\u8fdb\uff0c\u4fc3\u8fdb\u5065\u58ee\u7684\u5f00\u53d1\u5468\u671f\u3002")),(0,n.kt)("h3",{id:"4-\u73af\u5883\u7ba1\u7406"},"4. \u73af\u5883\u7ba1\u7406"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u4e0d\u540c\u7684 Steedos \u73af\u5883\u4e0a\u8fd0\u884c\u60a8\u7684\u5305\uff0c\u7528\u4e8e\u4e0d\u540c\u76ee\u7684\uff08\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u6682\u5b58\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u751f\u4ea7\u73af\u5883\u548c\u975e\u751f\u4ea7\u73af\u5883\u4e4b\u95f4\u7684\u9694\u79bb\u3002")),(0,n.kt)("h3",{id:"5-\u5305\u548c\u4f9d\u8d56\u6027\u7ba1\u7406"},"5. \u5305\u548c\u4f9d\u8d56\u6027\u7ba1\u7406"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c06\u5143\u6570\u636e\u548c\u8bbe\u7f6e\u7ec4\u7ec7\u5728\u6613\u4e8e\u7ba1\u7406\u548c\u90e8\u7f72\u7684\u903b\u8f91\u5355\u5143\uff08\u5305\uff09\u4e2d\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5e72\u51c0\u5730\u5904\u7406\u4f9d\u8d56\u5173\u7cfb\uff0c\u786e\u4fdd\u529f\u80fd\u534f\u8c03\u5de5\u4f5c\uff0c\u5e76\u5728\u5fc5\u8981\u65f6\u4e00\u8d77\u90e8\u7f72\u3002")),(0,n.kt)("h3",{id:"6-\u6a21\u5757\u5316\u90e8\u7f72"},"6. \u6a21\u5757\u5316\u90e8\u7f72"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u90e8\u7f72\u7279\u5b9a\u529f\u80fd\u6216\u66f4\u65b0\uff0c\u65e0\u9700\u8fdb\u884c\u5168\u9762\u90e8\u7f72\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u589e\u5f3a\u5bf9\u4e1a\u52a1\u9700\u6c42\u7684\u654f\u6377\u6027\u548c\u54cd\u5e94\u80fd\u529b\u3002")),(0,n.kt)("h2",{id:"steedos-dx-\u6e90\u7801\u9a71\u52a8\u5f00\u53d1"},"Steedos DX \u6e90\u7801\u9a71\u52a8\u5f00\u53d1"),(0,n.kt)("p",null,"Steedos DX \u6539\u53d8\u4e86\u4f4e\u4ee3\u7801\u5e94\u7528\u5f00\u53d1\u751f\u547d\u5468\u671f\u7ba1\u7406\u65b9\u6cd5\uff0c\u63d0\u4f9b\u4e86\u66f4\u52a0\u73b0\u4ee3\u5316\u3001\u6e90\u4ee3\u7801\u9a71\u52a8\u7684\u5f00\u53d1\u65b9\u5f0f\u3002\u5b83\u5305\u62ec\u4e86\u4e00\u6574\u5957\u5de5\u5177\uff0c\u4f7f\u5f00\u53d1\u8005\u80fd\u591f\u66f4\u9ad8\u6548\u5730\u534f\u4f5c\uff0c\u5e76\u4ee5\u66f4\u52a0\u6709\u7ec4\u7ec7\u3001\u66f4\u7b26\u5408\u6700\u4f73\u5b9e\u8df5\u7684\u65b9\u5f0f\u6784\u5efa Steedos \u5e94\u7528\u3002"),(0,n.kt)("h3",{id:"\u8bbe\u7f6e\u9879\u76ee"},(0,n.kt)("a",{parentName:"h3",href:"/developer/setup/"},"\u8bbe\u7f6e\u9879\u76ee")),(0,n.kt)("p",null,"Steedos Developer Experience (DX) \u662f\u4e00\u79cd\u5728 Steedos \u4f4e\u4ee3\u7801\u5e73\u53f0\u4e0a\u7ba1\u7406\u548c\u5f00\u53d1\u5e94\u7528\u7a0b\u5e8f\u7684\u65b0\u65b9\u6cd5\uff0c\u8d2f\u7a7f\u5e94\u7528\u7a0b\u5e8f\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u3002\u5b83\u6c47\u96c6\u4e86\u4f4e\u4ee3\u7801\u5e73\u53f0\u7684\u6700\u4f73\u529f\u80fd\uff0c\u5b9e\u73b0\u6e90\u7801\u9a71\u52a8\u7684\u5f00\u53d1\uff0c\u56e2\u961f\u534f\u4f5c\u4e0e\u6cbb\u7406\uff0c\u4ee5\u53ca\u5728 Steedos \u4e0a\u81ea\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u7684\u65b0\u6c34\u5e73\u3002"),(0,n.kt)("h3",{id:"\u8f6f\u4ef6\u5305\u5f00\u53d1"},(0,n.kt)("a",{parentName:"h3",href:"/developer/package/"},"\u8f6f\u4ef6\u5305\u5f00\u53d1")),(0,n.kt)("p",null,"Steedos \u8f6f\u4ef6\u5305\u5728\u76f4\u89c2\u7684\u5b50\u76ee\u5f55\u4e2d\u5b58\u50a8\u81ea\u5b9a\u4e49\u5bf9\u8c61\u548c\u81ea\u5b9a\u4e49\u5bf9\u8c61\u7ffb\u8bd1\u3002\u6e90\u683c\u5f0f\u4f7f\u60a8\u66f4\u5bb9\u6613\u627e\u5230\u60f3\u8981\u66f4\u6539\u6216\u66f4\u65b0\u7684\u5185\u5bb9\u3002\u800c\u4e14\u4f60\u53ef\u4ee5\u544a\u522b\u6df7\u4e71\u7684\u5408\u5e76\u3002"),(0,n.kt)("h3",{id:"\u8f6f\u4ef6\u5305\u5fae\u670d\u52a1\u5f00\u53d1"},(0,n.kt)("a",{parentName:"h3",href:"/developer/service/"},"\u8f6f\u4ef6\u5305\u5fae\u670d\u52a1\u5f00\u53d1")),(0,n.kt)("p",null,"Steedos \u5e73\u53f0\u57fa\u4e8e Moleculer \u5fae\u670d\u52a1\u67b6\u6784\uff0c\u6bcf\u4e2a\u8f6f\u4ef6\u5305\u90fd\u662f\u4e00\u4e2a ",(0,n.kt)("a",{parentName:"p",href:"https://moleculer.services/docs/0.14/services"},"Moleculer \u670d\u52a1"),"\u3002\u60a8\u53ef\u4ee5\u5728\u670d\u52a1\u4e2d\u5b9a\u4e49 REST API\u3001\u89e6\u53d1\u5668\u3001\u64cd\u4f5c\u3001\u65b9\u6cd5\uff0c\u5e76\u8ba2\u9605\u4e8b\u4ef6\u3002"),(0,n.kt)("h3",{id:"\u5fae\u9875\u9762\u6784\u5efa\u5668"},(0,n.kt)("a",{parentName:"h3",href:"/developer/micro-page/"},"\u5fae\u9875\u9762\u6784\u5efa\u5668")),(0,n.kt)("p",null,"\u6211\u4eec\u5411\u60a8\u4ecb\u7ecd ",(0,n.kt)("strong",{parentName:"p"},"Steedos \u5fae\u9875\u9762\u6784\u5efa\u5668"),"\uff0c\u8fd9\u662f\u4e00\u6b3e\u5f3a\u5927\u7684\u5fae\u9875\u9762\u5f00\u53d1\u5de5\u5177\u5305\uff0c\u690d\u6839\u4e8e\u767e\u5ea6 AMIS \u6280\u672f\u3002\u4e0e\u8457\u540d\u7684 Salesforce Lightning \u9875\u9762\u6784\u5efa\u5668\u76f8\u5ab2\u7f8e\uff0c\u8be5\u5e73\u53f0\u4fc3\u8fdb\u4e86\u81ea\u5b9a\u4e49\u9875\u9762\u548c\u7ec4\u4ef6\u7684\u521b\u5efa\uff0c\u5e76\u901a\u8fc7\u5176\u89c6\u89c9\u8bbe\u8ba1\u5de5\u5177\u53d8\u5f97\u66f4\u52a0\u5bb9\u6613\u3002"),(0,n.kt)("h3",{id:"api-\u96c6\u6210"},(0,n.kt)("a",{parentName:"h3",href:"/developer/api/"},"API \u96c6\u6210")),(0,n.kt)("p",null,"Steedos \u63d0\u4f9b\u4e86\u4e00\u5957\u4e30\u5bcc\u7684 API\uff0c\u5141\u8bb8\u4e0e\u5916\u90e8\u7cfb\u7edf\u548c\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u96c6\u6210\u3002\u8fd9\u786e\u4fdd\u4e86\u60a8\u7684 Steedos \u5b9e\u4f8b\u53ef\u4ee5\u4e0e\u60a8\u7684\u6574\u4e2a\u4f01\u4e1a\u6280\u672f\u6808\u65e0\u7f1d\u8fde\u63a5\u3002"))}c.isMDXComponent=!0},1345:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/steedos-dx-cc2690a2259fc468f9c9601a38d84f0b.png"}}]);