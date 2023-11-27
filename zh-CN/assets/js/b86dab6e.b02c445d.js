"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2621],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=l.createContext({}),k=function(e){var t=l.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=k(e.components);return l.createElement(m.Provider,{value:t},e.children)},N="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),N=k(a),s=n,c=N["".concat(m,".").concat(s)]||N[s]||o[s]||r;return a?l.createElement(c,i(i({ref:t},u),{},{components:a})):l.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=s;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[N]="string"==typeof e?e:n,i[1]=p;for(var k=2;k<r;k++)i[k]=a[k];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3721:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var l=a(7462),n=(a(7294),a(3905));const r={sidebar_position:2},i="\u5de5\u4f5c\u6d41\u89c4\u5219",p={unversionedId:"automation/workflow-rules",id:"automation/workflow-rules",title:"\u5de5\u4f5c\u6d41\u89c4\u5219",description:"\u5de5\u4f5c\u6d41\u89c4\u5219\u53ef\u8ba9\u60a8\u81ea\u52a8\u5316\u6807\u51c6\u5185\u90e8\u8fc7\u7a0b\u548c\u8fdb\u7a0b\uff0c\u4ee5\u5728\u8d35\u7ec4\u7ec7\u8303\u56f4\u5185\u8282\u7701\u65f6\u95f4\u3002\u5de5\u4f5c\u6d41\u89c4\u5219\u662f\u4e00\u7ec4\u5de5\u4f5c\u6d41\u6307\u793a\u7684\u4e3b\u8981\u5bb9\u5668\u3002\u8fd9\u4e9b\u6307\u793a\u59cb\u7ec8\u53ef\u4ee5\u7528\u201c\u5982\u679c/\u5219\u201d\u8bed\u53e5\u6982\u62ec\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/automation/workflow-rules.md",sourceDirName:"automation",slug:"/automation/workflow-rules",permalink:"/zh-CN/automation/workflow-rules",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/automation/workflow-rules.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"platform",previous:{title:"\u81ea\u52a8\u5316\u64cd\u4f5c",permalink:"/zh-CN/automation/automated-actions"},next:{title:"\u6279\u51c6\u8fc7\u7a0b",permalink:"/zh-CN/automation/approval-process"}},m={},k=[{value:"\u4ec0\u4e48\u662f\u5de5\u4f5c\u6d41\u89c4\u5219\uff1f",id:"\u4ec0\u4e48\u662f\u5de5\u4f5c\u6d41\u89c4\u5219",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u4f55\u65f6\u89e6\u53d1\uff1f",id:"\u4f55\u65f6\u89e6\u53d1",level:3},{value:"\u76f8\u5173\u672f\u8bed",id:"\u76f8\u5173\u672f\u8bed",level:3},{value:"\u521b\u5efa\u5de5\u4f5c\u6d41\u89c4\u5219",id:"\u521b\u5efa\u5de5\u4f5c\u6d41\u89c4\u5219",level:2},{value:"\u5411\u5de5\u4f5c\u6d41\u89c4\u5219\u6dfb\u52a0\u5373\u65f6\u64cd\u4f5c",id:"\u5411\u5de5\u4f5c\u6d41\u89c4\u5219\u6dfb\u52a0\u5373\u65f6\u64cd\u4f5c",level:3},{value:"\u5411\u5de5\u4f5c\u6d41\u89c4\u5219\u6dfb\u52a0\u4f9d\u8d56\u4e8e\u65f6\u95f4\u7684\u64cd\u4f5c",id:"\u5411\u5de5\u4f5c\u6d41\u89c4\u5219\u6dfb\u52a0\u4f9d\u8d56\u4e8e\u65f6\u95f4\u7684\u64cd\u4f5c",level:3},{value:"\u5de5\u4f5c\u6d41\u89c4\u5219\u793a\u4f8b",id:"\u5de5\u4f5c\u6d41\u89c4\u5219\u793a\u4f8b",level:2},{value:"\u81ea\u52a8\u542f\u7528\u65b0\u7528\u6237",id:"\u81ea\u52a8\u542f\u7528\u65b0\u7528\u6237",level:3},{value:"\u8bbe\u7f6e\u9ed8\u8ba4\u4e1a\u52a1\u673a\u4f1a\u540d\u79f0",id:"\u8bbe\u7f6e\u9ed8\u8ba4\u4e1a\u52a1\u673a\u4f1a\u540d\u79f0",level:3},{value:"\u4e3a\u4e2a\u6848\u8bbe\u7f6e\u76ee\u6807\u89e3\u51b3\u65e5\u671f",id:"\u4e3a\u4e2a\u6848\u8bbe\u7f6e\u76ee\u6807\u89e3\u51b3\u65e5\u671f",level:3},{value:"\u5019\u9009\u4eba\u63a5\u53d7\u4f5c\u4e1a\u65f6\u66f4\u65b0\u5e94\u7528\u7a0b\u5e8f\u8bb0\u5f55",id:"\u5019\u9009\u4eba\u63a5\u53d7\u4f5c\u4e1a\u65f6\u66f4\u65b0\u5e94\u7528\u7a0b\u5e8f\u8bb0\u5f55",level:3},{value:"\u8986\u76d6\u9ed8\u8ba4\u4e1a\u52a1\u673a\u4f1a\u7ed3\u675f\u65e5\u671f",id:"\u8986\u76d6\u9ed8\u8ba4\u4e1a\u52a1\u673a\u4f1a\u7ed3\u675f\u65e5\u671f",level:3},{value:"\u5728\u5408\u540c\u5230\u671f\u524d\u8ddf\u8fdb",id:"\u5728\u5408\u540c\u5230\u671f\u524d\u8ddf\u8fdb",level:3},{value:"\u5408\u540c\u6536\u6b3e\u9884\u8b66",id:"\u5408\u540c\u6536\u6b3e\u9884\u8b66",level:3}],u={toc:k},N="wrapper";function o(e){let{components:t,...a}=e;return(0,n.kt)(N,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5de5\u4f5c\u6d41\u89c4\u5219"},"\u5de5\u4f5c\u6d41\u89c4\u5219"),(0,n.kt)("p",null," \u5de5\u4f5c\u6d41\u89c4\u5219\u53ef\u8ba9\u60a8\u81ea\u52a8\u5316\u6807\u51c6\u5185\u90e8\u8fc7\u7a0b\u548c\u8fdb\u7a0b\uff0c\u4ee5\u5728\u8d35\u7ec4\u7ec7\u8303\u56f4\u5185\u8282\u7701\u65f6\u95f4\u3002\u5de5\u4f5c\u6d41\u89c4\u5219\u662f\u4e00\u7ec4\u5de5\u4f5c\u6d41\u6307\u793a\u7684\u4e3b\u8981\u5bb9\u5668\u3002\u8fd9\u4e9b\u6307\u793a\u59cb\u7ec8\u53ef\u4ee5\u7528\u201c\u5982\u679c/\u5219\u201d\u8bed\u53e5\u6982\u62ec\u3002"),(0,n.kt)("h2",{id:"\u4ec0\u4e48\u662f\u5de5\u4f5c\u6d41\u89c4\u5219"},"\u4ec0\u4e48\u662f\u5de5\u4f5c\u6d41\u89c4\u5219\uff1f"),(0,n.kt)("p",null,"\u4f8b\u5982\uff1a\u5982\u679c\u4e0b\u96e8\uff0c\u8bf7\u5e26\u96e8\u4f1e\u3002"),(0,n.kt)("p",null,"\u5de5\u4f5c\u6d41\u89c4\u5219\u53ef\u4ee5\u5206\u4e3a\u4e24\u4e2a\u4e3b\u8981\u7ec4\u6210\u90e8\u5206\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6761\u4ef6\uff1a\u201c\u5982\u679c/\u5219\u201d\u8bed\u53e5\u7684\u201c\u5982\u679c\u201d\u90e8\u5206\u3002\u6362\u8a00\u4e4b\uff0c\u8bb0\u5f55\u5185\u5bb9\u5fc5\u987b\u4e3a\u771f\uff0c\u624d\u80fd\u8ba9\u5de5\u4f5c\u6d41\u89c4\u5219\u6267\u884c\u5173\u8054\u64cd\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\uff1a\u201c\u5982\u679c/\u5219\u201d\u8bed\u53e5\u7684\u201c\u5219\u201d\u90e8\u5206\u3002\u6362\u8a00\u4e4b\uff0c\u5728\u8bb0\u5f55\u6ee1\u8db3\u6761\u4ef6\u65f6\u6267\u884c\u7684\u64cd\u4f5c\u3002")),(0,n.kt)("p",null,"\u5728\u4e0b\u96e8\u793a\u4f8b\u4e2d\uff0c\u6761\u4ef6\u662f\u201c\u5982\u679c\u4e0b\u96e8\u201d\uff0c\u5219\u64cd\u4f5c\u662f\u201c\u5e26\u96e8\u4f1e\u201d\u3002\u5982\u679c\u6761\u4ef6\u672a\u6ee1\u8db3\uff08\u672a\u4e0b\u96e8\uff09\uff0c\u5219\u4e0d\u4f1a\u6267\u884c\u64cd\u4f5c\uff08\u65e0\u9700\u5e26\u96e8\u4f1e\uff09\u3002"),(0,n.kt)("p",null,"\u5728\u8bb0\u5f55\u6ee1\u8db3\u5de5\u4f5c\u6d41\u89c4\u5219\u7684\u6240\u6709\u6761\u4ef6\u65f6\uff0c\u5219\u5c06\u4f1a\u6267\u884c\u89c4\u5219\u7684\u64cd\u4f5c\uff0c\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"automated-actions"},"\u6267\u884c\u81ea\u52a8\u64cd\u4f5c"),"\u6765\u4e86\u89e3Steedos\u76ee\u524d\u652f\u6301\u7684\u64cd\u4f5c\u3002"),(0,n.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5de5\u4f5c\u6d41\u89c4\u5219\u9002\u7528\u4e8e\u5355\u4e2a\u5bf9\u8c61\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5220\u9664\u81ea\u5b9a\u4e49\u5bf9\u8c61\u65f6\uff0c\u5c06\u540c\u65f6\u5220\u9664\u81ea\u5b9a\u4e49\u5bf9\u8c61\u4e0a\u7684\u5de5\u4f5c\u6d41\u89c4\u5219\uff08\u6682\u65f6\u672a\u5b9e\u73b0\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5e76\u4e0d\u4fdd\u8bc1\u5355\u4e2a\u64cd\u4f5c\u548c\u64cd\u4f5c\u7c7b\u578b\u6267\u884c\u7684\u987a\u5e8f\u3002\u9996\u5148\uff0c\u6267\u884c\u5b57\u6bb5\u66f4\u65b0\u64cd\u4f5c\uff0c\u7136\u540e\u662f\u5176\u4ed6\u64cd\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u65b0\u5efa\u6216\u7f16\u8f91\u5bf9\u8c61\u65f6\uff0c\u4f1a\u5148\u6267\u884c\u8be5\u5bf9\u8c61\u7684\u9a8c\u8bc1\u89c4\u5219\uff0c\u518d\u6267\u884c\u8be5\u5bf9\u8c61\u7684\u5de5\u4f5c\u6d41\u89c4\u5219\uff0c\u4f46\u662f\u5c31\u76ee\u524d\u6765\u8bf4\uff0c\u5de5\u4f5c\u6d41\u89c4\u5219\u4e2d\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982\u5b57\u6bb5\u66f4\u65b0\u5e76\u4e0d\u4f1a\u518d\u6b21\u89e6\u53d1\u9a8c\u8bc1\u89c4\u5219\u3002")),(0,n.kt)("h3",{id:"\u4f55\u65f6\u89e6\u53d1"},"\u4f55\u65f6\u89e6\u53d1\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u8bb0\u5f55\u6216\u521b\u5efa\u8bb0\u5f55\u65f6\u90fd\u53ef\u4ee5\u89e6\u53d1\u5de5\u4f5c\u6d41\u89c4\u5219\uff0c\u8fd9\u53d6\u51b3\u4e8e\u60a8\u7684\u89c4\u5219\u6761\u4ef6\u3002\u5728\u4fdd\u5b58\u8bb0\u5f55\u540e\u521b\u5efa\u7684\u89c4\u5219\u4e0d\u4f1a\u8ffd\u6eaf\u5730\u5f71\u54cd\u8fd9\u4e9b\u8bb0\u5f55\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4fee\u6539\u6216\u521b\u5efa\u8bb0\u5f55\u53ef\u80fd\u4f1a\u89e6\u53d1\u591a\u4e2a\u89c4\u5219\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u6d41\u89c4\u5219\u81ea\u52a8\u89e6\u53d1\u4e14\u7528\u6237\u4e0d\u53ef\u89c1\u3002")),(0,n.kt)("h3",{id:"\u76f8\u5173\u672f\u8bed"},"\u76f8\u5173\u672f\u8bed"),(0,n.kt)("p",null,"\u5f53\u63cf\u8ff0\u5de5\u4f5c\u6d41\u7279\u6027\u548c\u529f\u80fd\u65f6\uff0c\u4f7f\u7528\u4e86\u4ee5\u4e0b\u672f\u8bed\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u6d41\u89c4\u5219"),"\xa0\u6ee1\u8db3\u5176\u6307\u5b9a\u7684\u6761\u4ef6\u65f6\uff0c\u5de5\u4f5c\u6d41\u89c4\u5219\u5c06\u4f7f\u5de5\u4f5c\u6d41\u5f00\u59cb\u64cd\u4f5c\u3002\u60a8\u53ef\u4ee5\u914d\u7f6e\u5de5\u4f5c\u6d41\u64cd\u4f5c\uff0c\u4f7f\u5176\u5728\u67d0\u8bb0\u5f55\u7b26\u5408\u5de5\u4f5c\u6d41\u89c4\u5219\u4e2d\u7684\u6761\u4ef6\u65f6\u7acb\u5373\u6267\u884c\uff0c\u6216\u8bbe\u7f6e\u65f6\u95f4\u89e6\u53d1\u5668\uff0c\u4f7f\u5176\u5728\u7279\u5b9a\u65e5\u6267\u884c\u5de5\u4f5c\u6d41\u64cd\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u6d41\u64cd\u4f5c"),"\xa0\u5de5\u4f5c\u6d41\u64cd\u4f5c\u662f\u5728\u6ee1\u8db3\u5de5\u4f5c\u6d41\u89c4\u5219\u6761\u4ef6\u65f6\u89e6\u53d1\u7684\u76f8\u5173\u64cd\u4f5c\uff0cSteedos\u6682\u65f6\u53ea\u652f\u6301\u5b57\u6bb5\u66f4\u65b0\u8fd9\u4e00\u79cd\u64cd\u4f5c\uff0c\u672a\u6765\u53ef\u80fd\u4f1a\u6269\u5c55\u66f4\u591a\u64cd\u4f5c\u7c7b\u578b\uff0c\u6bd4\u5982\u53d1\u9001\u51fa\u7ad9\u6d88\u606f\u6216\u7535\u5b50\u90ae\u4ef6\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5b57\u6bb5\u66f4\u65b0"),"\xa0\u5b57\u6bb5\u66f4\u65b0\u662f\u4f7f\u7528\u65b0\u503c\u81ea\u52a8\u66f4\u65b0\u5b57\u6bb5\u7684\u64cd\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u51fa\u7ad9\u6d88\u606f"),"\xa0\u51fa\u7ad9\u6d88\u606f\u4f1a\u5c06\u4fe1\u606f\u53d1\u9001\u5230\u6307\u5b9a\u7aef\u70b9\uff0c\u4f8b\u5982\u5916\u90e8\u670d\u52a1\u3002")),(0,n.kt)("h2",{id:"\u521b\u5efa\u5de5\u4f5c\u6d41\u89c4\u5219"},"\u521b\u5efa\u5de5\u4f5c\u6d41\u89c4\u5219"),(0,n.kt)("p",null,"\u901a\u8fc7\u521b\u5efa\u5de5\u4f5c\u6d41\u89c4\u5219\u53ef\u4f7f\u8d35\u7ec4\u7ec7\u7684\u6807\u51c6\u8fc7\u7a0b\u5b9e\u73b0\u81ea\u52a8\u5316\uff0c\u53ef\u9009\u62e9\u89c4\u5219\u6d89\u53ca\u7684\u5bf9\u8c61\u5e76\u914d\u7f6e\u5176\u6761\u4ef6\u6765\u5f00\u59cb\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5de5\u4f5c\u6d41\u89c4\u5219\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u201c\u8bbe\u7f6e\u201d-\u201c\u6d41\u7a0b\u81ea\u52a8\u5316\u201d\u4e2d\u9009\u62e9\u201c\u5de5\u4f5c\u6d41\u89c4\u5219\u201d\uff0c\u70b9\u51fb\u65b0\u5efa\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u8981\u5e94\u7528\u8be5\u5de5\u4f5c\u6d41\u89c4\u5219\u7684\u5bf9\u8c61\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e3a\u5de5\u4f5c\u6d41\u89c4\u5219\u8f93\u5165API\u540d\u79f0\u548c\u663e\u793a\u540d\u79f0\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u542f\u7528\u8be5\u89c4\u5219\u8bf7\u52fe\u9009\u542f\u7528\u6309\u94ae\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u8bc4\u4f30\u6761\u4ef6\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u65b0\u5efa\u65f6"),"\uff1a\u5728\u6bcf\u6b21\u521b\u5efa\u8bb0\u5f55\u65f6\u8bc4\u4f30\u89c4\u5219\u6761\u4ef6\u3002\u5982\u679c\u6ee1\u8db3\u89c4\u5219\u6761\u4ef6\uff0c\u8fd0\u884c\u89c4\u5219\u3002\u5ffd\u7565\u73b0\u6709\u8bb0\u5f55\u7684\u6240\u6709\u66f4\u65b0\u3002\u4f7f\u7528\u6b64\u9009\u9879\u65f6\uff0c\u89c4\u5219\u5bf9\u6bcf\u4e2a\u8bb0\u5f55\u7684\u8fd0\u884c\u6b21\u6570\u4ece\u4e0d\u8d85\u8fc7\u4e00\u6b21\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u65b0\u5efa\u65f6\uff0c\u548c\u6bcf\u6b21\u7f16\u8f91\u65f6"),"\uff1a\u5728\u6bcf\u6b21\u521b\u5efa\u6216\u66f4\u65b0\u8bb0\u5f55\u65f6\u8bc4\u4f30\u89c4\u5219\u6761\u4ef6\u3002\u5982\u679c\u6ee1\u8db3\u89c4\u5219\u6761\u4ef6\uff0c\u8fd0\u884c\u89c4\u5219\u3002\u4f7f\u7528\u6b64\u9009\u9879\u65f6\uff0c\u53ea\u8981\u8bb0\u5f55\u6ee1\u8db3\u89c4\u5219\u6761\u4ef6\uff0c\u6bcf\u6b21\u7f16\u8f91\u8bb0\u5f55\u65f6\uff0c\u89c4\u5219\u90fd\u4f1a\u91cd\u590d\u8fd0\u884c\u3002\uff08\u5982\u679c\u60a8\u9009\u62e9\u6b64\u9009\u9879\uff0c\u5219\u65e0\u6cd5\u6dfb\u52a0\u4f9d\u8d56\u4e8e\u65f6\u95f4\u7684\u64cd\u4f5c\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u65b0\u5efa\u65f6\uff0c\u6216\u7f16\u8f91\u6570\u636e\u5bfc\u81f4\u6761\u4ef6\u6210\u7acb\uff1a"),"\uff08\u9ed8\u8ba4\uff09\u5728\u6bcf\u6b21\u521b\u5efa\u6216\u66f4\u65b0\u8bb0\u5f55\u65f6\u8bc4\u4f30\u89c4\u5219\u6761\u4ef6\u3002\u5bf9\u4e8e\u65b0\u8bb0\u5f55\uff0c\u5728\u6ee1\u8db3\u89c4\u5219\u6761\u4ef6\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u89c4\u5219\u3002\u5bf9\u4e8e\u66f4\u65b0\u7684\u8bb0\u5f55\uff0c\u4ec5\u5728\u5c06\u8bb0\u5f55\u4ece\u672a\u6ee1\u8db3\u89c4\u5219\u6761\u4ef6\u5230\u66f4\u6539\u4e3a\u6ee1\u8db3\u89c4\u5219\u6761\u4ef6\u7684\u60c5\u51b5\u4e0b\u6267\u884c\u89c4\u5219\u3002\u4f7f\u7528\u6b64\u9009\u9879\u65f6\uff0c\u89c4\u5219\u5bf9\u6bcf\u4e2a\u8bb0\u5f55\u53ef\u4ee5\u8fd0\u884c\u591a\u6b21\uff0c\u4f46\u662f\uff0c\u5982\u679c\u8bb0\u5f55\u7f16\u8f91\u4e0e\u89c4\u5219\u6761\u4ef6\u65e0\u5173\uff0c\u5219\u89c4\u5219\u4e0d\u8fd0\u884c\u3002")))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u4f8b\u5982\uff0c\u5047\u8bbe\u8981\u4f7f\u4e1a\u52a1\u673a\u4f1a\u8bb0\u5f55\u6ee1\u8db3\u89c4\u5219\u6761\u4ef6\uff0c\u4e1a\u52a1\u673a\u4f1a\u53ef\u80fd\u6027\u5fc5\u987b\u5927\u4e8e 50%\u3002\u5982\u679c\u521b\u5efa\u4e00\u4e2a\u53ef\u80fd\u6027\u4e3a 75% \u7684\u4e1a\u52a1\u673a\u4f1a\uff0c\u5219\u5de5\u4f5c\u6d41\u89c4\u5219\u8fd0\u884c\u3002\u5982\u679c\u7f16\u8f91\u8be5\u4e1a\u52a1\u673a\u4f1a\uff0c\u5c06\u53ef\u80fd\u6027\u66f4\u6539\u4e3a 25%\u621680%\uff0c\u5219\u6b64\u6b21\u7f16\u8f91\u4e0d\u4f1a\u5bfc\u81f4\u89c4\u5219\u8fd0\u884c\u3002\u5982\u679c\u968f\u540e\u7f16\u8f91\u8be5\u4e1a\u52a1\u673a\u4f1a\uff0c\u5c06\u53ef\u80fd\u6027\u4ece 25% \u66f4\u6539\u4e3a 75%\uff0c\u5219\u6b64\u6b21\u7f16\u8f91\u5bfc\u81f4\u89c4\u5219\u8fd0\u884c\u3002\u6700\u540e\u4e00\u6b21\u7f16\u8f91\u65f6\u89c4\u5219\u8fd0\u884c\u7684\u539f\u56e0\u662f\uff0c\u8bb0\u5f55\u4ece\u4e0d\u6ee1\u8db3\u89c4\u5219\u6761\u4ef6\u66f4\u6539\u4e3a\u6ee1\u8db3\u89c4\u5219\u6761\u4ef6\u3002")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e3a\u5de5\u4f5c\u6d41\u89c4\u5219\u8f93\u5165\u63cf\u8ff0\u3002")),(0,n.kt)("h3",{id:"\u5411\u5de5\u4f5c\u6d41\u89c4\u5219\u6dfb\u52a0\u5373\u65f6\u64cd\u4f5c"},"\u5411\u5de5\u4f5c\u6d41\u89c4\u5219\u6dfb\u52a0\u5373\u65f6\u64cd\u4f5c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8f93\u5165\u60a8\u7684\u89c4\u5219\u6761\u4ef6\uff1a\u8f93\u5165\u8bc4\u4f30\u7ed3\u679c\u4e3a\u201c\u771f\u201d\u6216\u201c\u5047\u201d\u503c\u7684\u516c\u5f0f\u3002\u5f53\u516c\u5f0f\u8fd4\u56de\u201c\u771f\u201d\u503c\u65f6\uff0c\u4f1a\u89e6\u53d1\u8be5\u5de5\u4f5c\u6d41\u89c4\u5219\u6267\u884c\u540e\u7eed\u8bbe\u7f6e\u7684\u64cd\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5411\u5de5\u4f5c\u6d41\u89c4\u5219\u6dfb\u52a0\u5373\u65f6\u64cd\u4f5c\uff0c\u5e76\u70b9\u51fb\u4fdd\u5b58\u3002")),(0,n.kt)("h3",{id:"\u5411\u5de5\u4f5c\u6d41\u89c4\u5219\u6dfb\u52a0\u4f9d\u8d56\u4e8e\u65f6\u95f4\u7684\u64cd\u4f5c"},"\u5411\u5de5\u4f5c\u6d41\u89c4\u5219\u6dfb\u52a0\u4f9d\u8d56\u4e8e\u65f6\u95f4\u7684\u64cd\u4f5c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728",(0,n.kt)("strong",{parentName:"li"},"\u4f9d\u8d56\u4e8e\u65f6\u95f4\u7684\u5de5\u4f5c\u6d41\u64cd\u4f5c"),"\u5206\u7ec4\u4e2d\u5411\u5de5\u4f5c\u6d41\u89c4\u5219\u6dfb\u52a0\u4f9d\u8d56\u4e8e\u65f6\u95f4\u7684\u64cd\u4f5c\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8f93\u5165\u60a8\u7684\u8fc7\u6ee4\u6761\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u7279\u5b9a\u65f6\u95f4\u6267\u884c\u4f9d\u8d56\u4e8e\u65f6\u95f4\u7684\u64cd\u4f5c\uff0c\u4f8b\u5982\u8bb0\u5f55\u7ed3\u675f\u65e5\u671f\u524d 10 \u5929\u3002\u8be5\u6307\u5b9a\u65f6\u95f4\u8fc7\u540e\uff0c\u5de5\u4f5c\u6d41\u89c4\u5219\u91cd\u65b0\u8bc4\u4f30\u8bb0\u5f55\uff0c\u4ee5\u786e\u4fdd\u4ecd\u7136\u7b26\u5408\u8fc7\u6ee4\u6761\u4ef6\u3002\u5982\u679c\u8bb0\u5f55\u7b26\u5408\u8fc7\u6ee4\u6761\u4ef6\uff0c\u5219\u5de5\u4f5c\u6d41\u89c4\u5219\u4f1a\u6267\u884c\u8fd9\u4e9b\u64cd\u4f5c\u3002"))),(0,n.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u65f6\u95f4\u89e6\u53d1\u5668",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u4e0e\u8bb0\u5f55\u76f8\u5173\u7684\u67d0\u65e5\u671f\uff08\u4f8b\u5982\u521b\u5efa\u6216\u4fee\u6539\u8bb0\u5f55\u7684\u65e5\u671f\uff09\u4e4b\u524d\u6216\u4e4b\u540e\u7684\u5929\u6570\u6216\u5c0f\u65f6\u6570\u3002\u5982\u679c\u5230\u8fbe\u8be5\u65f6\u95f4\u65f6\u5de5\u4f5c\u6d41\u89c4\u5219\u4ecd\u6709\u6548\uff0c\u5219\u65f6\u95f4\u89e6\u53d1\u5668\u5c06\u5f15\u53d1\u5de5\u4f5c\u6d41\u64cd\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u60a8\u521b\u5efa\u7684\u65f6\u95f4\u89e6\u53d1\u5668\u90e8\u5206\uff0c\u9009\u62e9\u4e00\u4e2a\u9009\u9879\u6765\u521b\u5efa\u64cd\u4f5c\u6216\u9009\u62e9\u73b0\u6709\u64cd\u4f5c\u3002")))))),(0,n.kt)("h2",{id:"\u5de5\u4f5c\u6d41\u89c4\u5219\u793a\u4f8b"},"\u5de5\u4f5c\u6d41\u89c4\u5219\u793a\u4f8b"),(0,n.kt)("p",null,"\u60f3\u8981\u5bfb\u627e\u65b9\u6cd5\u8ba9\u5de5\u4f5c\u6d41\u89c4\u5219\u5e2e\u52a9\u7b80\u5316\u4e1a\u52a1\uff1f\u89c2\u770b\u8fd9\u4e9b\u793a\u4f8b\u3002"),(0,n.kt)("h3",{id:"\u81ea\u52a8\u542f\u7528\u65b0\u7528\u6237"},"\u81ea\u52a8\u542f\u7528\u65b0\u7528\u6237"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5bf9\u8c61\uff1a"),"\xa0\u7528\u6237"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u63cf\u8ff0\uff1a"),"\xa0\u786e\u4fdd\u6bcf\u4e2a\u65b0\u7528\u6237\u4e3a\u542f\u7528\u72b6\u6001\uff0c\u4ee5\u4fbf\u7528\u6237\u53ef\u767b\u5f55\u5230Steedos\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8bc4\u4f30\u6761\u4ef6\uff1a"),"\xa0\u5f53\u8bb0\u5f55\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\u65f6\u9a8c\u8bc1\u89c4\u5219\uff1a\u65b0\u5efa\u65f6\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u89c4\u5219\u6761\u4ef6\uff1a"),"\xa0\u516c\u5f0f\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"active <> TRUE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5373\u65f6\u64cd\u4f5c\uff1a"),"\xa0\u5b57\u6bb5\u66f4\u65b0\uff1a\u5c06\u542f\u7528\u8bbe\u7f6e\u4e3a\u201c\u771f (True)\u201d\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u8981\u66f4\u65b0\u7684\u5bf9\u8c61\uff1a\u7528\u6237")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u8981\u66f4\u65b0\u7684\u5b57\u6bb5\uff1aactive")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u65b0\u5b57\u6bb5\u503c\u7c7b\u578b\uff1a\u7279\u5b9a\u503c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u6307\u5b9a\u65b0\u5b57\u6bb5\u503c\uff1a\u52fe\u9009\u52fe\u9009\u6846"))))),(0,n.kt)("h3",{id:"\u8bbe\u7f6e\u9ed8\u8ba4\u4e1a\u52a1\u673a\u4f1a\u540d\u79f0"},"\u8bbe\u7f6e\u9ed8\u8ba4\u4e1a\u52a1\u673a\u4f1a\u540d\u79f0"),(0,n.kt)("p",null,"\u4e00\u4e9b\u516c\u53f8\u7684\u4e1a\u52a1\u673a\u4f1a\u547d\u540d\u4e60\u60ef\u662f\u201c\u5ba2\u6237\u540d: \u4e1a\u52a1\u673a\u4f1a\u540d\u79f0\u201d\u3002\u8981\u5728\u8d35\u7ec4\u7ec7\u4e2d\u81ea\u52a8\u786e\u5b9a\u6bcf\u4e2a\u4e1a\u52a1\u673a\u4f1a\u7684\u9ed8\u8ba4\u540d\u79f0\uff0c\u8bf7\u521b\u5efa\u4e0b\u5217\u5de5\u4f5c\u6d41\u89c4\u5219\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5bf9\u8c61\uff1a"),"\xa0\u4e1a\u52a1\u673a\u4f1a"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u63cf\u8ff0\uff1a"),"\xa0\u5f3a\u5236\u4e1a\u52a1\u673a\u4f1a\u547d\u540d\u7ea6\u5b9a\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8bc4\u4f30\u6761\u4ef6\uff1a"),"\xa0\u5f53\u8bb0\u5f55\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\u65f6\u9a8c\u8bc1\u89c4\u5219\uff1a\u65b0\u5efa\u65f6\uff0c\u6216\u7f16\u8f91\u6570\u636e\u5bfc\u81f4\u6761\u4ef6\u6210\u7acb"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u89c4\u5219\u6761\u4ef6\uff1a"),"\xa0\u516c\u5f0f\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"NOT(CONTAINS( Name, Account.Name ))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5373\u65f6\u64cd\u4f5c\uff1a"),"\xa0\u5b57\u6bb5\u66f4\u65b0\uff1a\u5c06\u4e1a\u52a1\u673a\u4f1a\u540d\u79f0\u8bbe\u7f6e\u4e3a\u6307\u5b9a\u516c\u5f0f\u503c\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u8981\u66f4\u65b0\u7684\u5bf9\u8c61\uff1a\u4e1a\u52a1\u673a\u4f1a")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u8981\u66f4\u65b0\u7684\u5b57\u6bb5\uff1aName")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u65b0\u5b57\u6bb5\u503c\u7c7b\u578b\uff1a\u4f7f\u7528\u516c\u5f0f\u8bbe\u7f6e\u65b0\u503c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u516c\u5f0f\uff1a"),(0,n.kt)("inlineCode",{parentName:"li"},'Account.Name & ": " & Name'))))),(0,n.kt)("h3",{id:"\u4e3a\u4e2a\u6848\u8bbe\u7f6e\u76ee\u6807\u89e3\u51b3\u65e5\u671f"},"\u4e3a\u4e2a\u6848\u8bbe\u7f6e\u76ee\u6807\u89e3\u51b3\u65e5\u671f"),(0,n.kt)("p",null,"\u672c\u793a\u4f8b\u4f1a\u6839\u636e\u5173\u8054\u5ba2\u6237\u4e0a\u7684\u5b57\u6bb5\u503c\u8bbe\u7f6e\u4e2a\u6848\u89e3\u51b3\u65e5\u671f\u3002\u5c06\u4f1a\u628a\u5ba2\u6237\u5bf9\u8c61\u4e0a\u7684\u201c\u652f\u6301\u7ea7\u522b\u201d\u5b57\u6bb5\u8bbe\u7f6e\u4e3a\u81ea\u5b9a\u4e49\u9009\u9879\u5217\u8868\u5b57\u6bb5\uff0c\u5176\u4e2d\u5305\u542b 3 \u4e2a\u503c\uff1a\u57fa\u7840\u3001\u6807\u51c6\u548c\u9ad8\u7ea7\u3002\u6b64\u5916\uff0c\u4e2a\u6848\u5bf9\u8c61\u4e0a\u7684\u201c\u76ee\u6807\u89e3\u51b3\u65e5\u671f\u201d\u5b57\u6bb5\u4e5f\u662f\u81ea\u5b9a\u4e49\u65e5\u671f\u5b57\u6bb5\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528\u4e0b\u5217\u4e09\u4e2a\u5de5\u4f5c\u6d41\u89c4\u5219\u793a\u4f8b\uff0c\u4ee5\u6839\u636e\u76f8\u5173\u5ba2\u6237\u7684\u652f\u6301\u7ea7\u522b\u8bbe\u7f6e\u4e2a\u6848\u7684\u76ee\u6807\u89e3\u51b3\u65e5\u671f\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"a.\u8bbe\u7f6e\u57fa\u672c\u652f\u6301\u7684\u89e3\u51b3\u65e5\u671f")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5bf9\u8c61\uff1a"),"\xa0\u4e2a\u6848"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u63cf\u8ff0\uff1a"),"\xa0\u4e3a\u4eab\u53d7\u57fa\u672c\u652f\u6301\u7684\u5ba2\u6237\u8bbe\u7f6e\u4e2a\u6848\u76ee\u6807\u89e3\u51b3\u65e5\u671f\uff1a\u4ece\u73b0\u5728\u8d77 30 \u65e5\u5185\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8bc4\u4f30\u6761\u4ef6\uff1a"),"\xa0\u5f53\u8bb0\u5f55\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\u65f6\u9a8c\u8bc1\u89c4\u5219\uff1a\u65b0\u5efa\u65f6\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u89c4\u5219\u6761\u4ef6"),"\uff1a\u516c\u5f0f\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},'Account.Support_Level__c = "Basic"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5373\u65f6\u64cd\u4f5c"),"\uff1a\u5b57\u6bb5\u66f4\u65b0\uff1a\u8bbe\u7f6e\u76ee\u6807\u89e3\u51b3\u65e5\u671f\u4e3a\u6307\u5b9a\u516c\u5f0f\u503c\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u8981\u66f4\u65b0\u7684\u5bf9\u8c61\uff1a\u4e2a\u6848")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u8981\u66f4\u65b0\u7684\u5b57\u6bb5\uff1aClosed_Date__c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u65b0\u5b57\u6bb5\u503c\u7c7b\u578b\uff1a\u4f7f\u7528\u516c\u5f0f\u8bbe\u7f6e\u65b0\u503c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u516c\u5f0f\uff1a"),(0,n.kt)("inlineCode",{parentName:"li"},"Today() + 30"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"b.\u8bbe\u7f6e\u6807\u51c6\u652f\u6301\u7684\u89e3\u51b3\u65e5\u671f")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5bf9\u8c61\uff1a"),"\xa0\u4e2a\u6848"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u63cf\u8ff0\uff1a"),"\xa0\u4e3a\u4eab\u53d7\u6807\u51c6\u652f\u6301\u7684\u5ba2\u6237\u8bbe\u7f6e\u4e2a\u6848\u76ee\u6807\u89e3\u51b3\u65e5\u671f\uff1a\u4ece\u73b0\u5728\u8d77 14 \u65e5\u5185\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8bc4\u4f30\u6761\u4ef6\uff1a"),"\xa0\u5f53\u8bb0\u5f55\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\u65f6\u9a8c\u8bc1\u89c4\u5219\uff1a\u65b0\u5efa\u65f6\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u89c4\u5219\u6761\u4ef6\uff1a"),"\xa0\u516c\u5f0f\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},'Account.Support_Level__c = "Standard"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5373\u65f6\u64cd\u4f5c\uff1a"),"\xa0\u5b57\u6bb5\u66f4\u65b0\uff1a\u8bbe\u7f6e\u76ee\u6807\u89e3\u51b3\u65e5\u671f\u4e3a\u6307\u5b9a\u516c\u5f0f\u503c\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u8981\u66f4\u65b0\u7684\u5bf9\u8c61\uff1a\u4e2a\u6848")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u8981\u66f4\u65b0\u7684\u5b57\u6bb5\uff1aClosed_Date__c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u65b0\u5b57\u6bb5\u503c\u7c7b\u578b\uff1a\u4f7f\u7528\u516c\u5f0f\u8bbe\u7f6e\u65b0\u503c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u516c\u5f0f\uff1a"),(0,n.kt)("inlineCode",{parentName:"li"},"Today() + 14"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"c.\u8bbe\u7f6e\u9ad8\u7ea7\u652f\u6301\u7684\u89e3\u51b3\u65e5\u671f")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5bf9\u8c61\uff1a"),"\xa0\u4e2a\u6848"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u63cf\u8ff0\uff1a"),"\xa0\u4e3a\u4eab\u53d7\u9ad8\u7ea7\u652f\u6301\u7684\u5ba2\u6237\u8bbe\u7f6e\u4e2a\u6848\u76ee\u6807\u89e3\u51b3\u65e5\u671f\uff1a\u4ece\u73b0\u5728\u8d77 5 \u65e5\u5185\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8bc4\u4f30\u6761\u4ef6\uff1a"),"\xa0\u5f53\u8bb0\u5f55\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\u65f6\u9a8c\u8bc1\u89c4\u5219\uff1a\u65b0\u5efa\u65f6\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u89c4\u5219\u6761\u4ef6\uff1a"),"\xa0\u516c\u5f0f\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},'Account.Support_Level__c = "Premium"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5373\u65f6\u64cd\u4f5c\uff1a"),"\xa0\u5b57\u6bb5\u66f4\u65b0\uff1a\u8bbe\u7f6e\u76ee\u6807\u89e3\u51b3\u65e5\u671f\u4e3a\u6307\u5b9a\u516c\u5f0f\u503c\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u8981\u66f4\u65b0\u7684\u5bf9\u8c61\uff1a\u4e2a\u6848")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u8981\u66f4\u65b0\u7684\u5b57\u6bb5\uff1aClosed_Date__c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u65b0\u5b57\u6bb5\u503c\u7c7b\u578b\uff1a\u4f7f\u7528\u516c\u5f0f\u8bbe\u7f6e\u65b0\u503c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u516c\u5f0f\uff1a"),(0,n.kt)("inlineCode",{parentName:"li"},"Today() + 5"))))),(0,n.kt)("h3",{id:"\u5019\u9009\u4eba\u63a5\u53d7\u4f5c\u4e1a\u65f6\u66f4\u65b0\u5e94\u7528\u7a0b\u5e8f\u8bb0\u5f55"},"\u5019\u9009\u4eba\u63a5\u53d7\u4f5c\u4e1a\u65f6\u66f4\u65b0\u5e94\u7528\u7a0b\u5e8f\u8bb0\u5f55"),(0,n.kt)("p",null,"\u6b64\u5de5\u4f5c\u6d41\u89c4\u5219\u4f1a\u5728\u5019\u9009\u4eba\u63a5\u53d7\u4efb\u52a1\u65f6\u5173\u95ed\u5e94\u7528\u7a0b\u5e8f\u8bb0\u5f55\u3002\u5728\u4e3b\u8868/\u5b50\u8868\u5173\u7cfb\u4e2d\u7684\u5bf9\u8c61\u4e4b\u95f4\u652f\u6301\u8de8\u5bf9\u8c61\u5b57\u6bb5\u66f4\u65b0\u5230\u4e3b\u8bb0\u5f55\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5bf9\u8c61\uff1a"),"\xa0\u5019\u9009\u4eba"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u63cf\u8ff0\uff1a"),"\xa0\u5f53\u81ea\u5b9a\u4e49\u201c\u5019\u9009\u4eba\u201d\u5bf9\u8c61\u7684\u5019\u9009\u4eba\u72b6\u6001\u5b57\u6bb5\u66f4\u6539\u4e3a\u201c\u5df2\u63a5\u53d7\u201d\u65f6\uff0c\u4e3a\u81ea\u5b9a\u4e49\u201c\u5e94\u7528\u7a0b\u5e8f\u201d\u5bf9\u8c61\u5c06\u5e94\u7528\u7a0b\u5e8f\u72b6\u6001\u5b57\u6bb5\u66f4\u6539\u4e3a\u201c\u5df2\u5173\u95ed\u201d\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8bc4\u4f30\u6761\u4ef6\uff1a"),"\xa0\u5f53\u8bb0\u5f55\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\u65f6\u9a8c\u8bc1\u89c4\u5219\uff1a\u65b0\u5efa\u65f6\uff0c\u6216\u7f16\u8f91\u6570\u636e\u5bfc\u81f4\u6761\u4ef6\u6210\u7acb"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u89c4\u5219\u6761\u4ef6\uff1a"),"\xa0\u516c\u5f0f\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},'Status = "Accepted"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5373\u65f6\u64cd\u4f5c\uff1a"),"\xa0\u5b57\u6bb5\u66f4\u65b0\uff1a\u5728\u7236\u201c\u5e94\u7528\u7a0b\u5e8f\u201d\u8bb0\u5f55\u4e0a\u66f4\u6539\u5e94\u7528\u7a0b\u5e8f\u72b6\u6001\u5b57\u6bb5\u4e3a\u201c\u5df2\u5173\u95ed\u201d\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u8981\u66f4\u65b0\u7684\u5bf9\u8c61\uff1a\u5e94\u7528\u7a0b\u5e8f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u8981\u66f4\u65b0\u7684\u5b57\u6bb5\uff1aStatus")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u65b0\u5b57\u6bb5\u503c\u7c7b\u578b\uff1a\u7279\u5b9a\u503c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u6307\u5b9a\u65b0\u5b57\u6bb5\u503c\uff1a\u9009\u62e9\u6846\u4e2d\u9009\u62e9\u201c\u5df2\u5173\u95ed\u201d\u9009\u9879"))))),(0,n.kt)("h3",{id:"\u8986\u76d6\u9ed8\u8ba4\u4e1a\u52a1\u673a\u4f1a\u7ed3\u675f\u65e5\u671f"},"\u8986\u76d6\u9ed8\u8ba4\u4e1a\u52a1\u673a\u4f1a\u7ed3\u675f\u65e5\u671f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5bf9\u8c61\uff1a"),"\xa0\u4e1a\u52a1\u673a\u4f1a"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u63cf\u8ff0\uff1a"),"\xa0\u5c06\u9ed8\u8ba4\u7ed3\u675f\u65e5\u671f\u4ece\u8be5\u5b63\u5ea6\u7ed3\u675f\u6539\u5199\u4e3a\u4e1a\u52a1\u673a\u4f1a\u521b\u5efa\u540e\u7684 6 \u4e2a\u6708\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8bc4\u4f30\u6761\u4ef6\uff1a"),"\xa0\u5f53\u8bb0\u5f55\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\u65f6\u9a8c\u8bc1\u89c4\u5219\uff1a\u65b0\u5efa\u65f6"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u89c4\u5219\u6761\u4ef6"),"\uff1a\u516c\u5f0f\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"Closed = false")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5373\u65f6\u64cd\u4f5c"),"\uff1a\u5b57\u6bb5\u66f4\u65b0\uff1a\u4f7f\u7528\u6307\u5b9a\u516c\u5f0f\u5c06\u4e1a\u52a1\u673a\u4f1a\u5173\u95ed\u65e5\u671f\u8bbe\u7f6e\u4e3a\u521b\u5efa\u65e5\u671f\u4e4b\u540e\u516d\u4e2a\u6708\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u8981\u66f4\u65b0\u7684\u5bf9\u8c61\uff1a\u4e1a\u52a1\u673a\u4f1a")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u8981\u66f4\u65b0\u7684\u5b57\u6bb5\uff1aClose_Date")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u65b0\u5b57\u6bb5\u503c\u7c7b\u578b\uff1a\u4f7f\u7528\u516c\u5f0f\u8bbe\u7f6e\u65b0\u503c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u516c\u5f0f\uff1a"),(0,n.kt)("inlineCode",{parentName:"li"},"DATE( YEAR(TODAY()) , (MONTH(TODAY()) + 6), DAY(TODAY()))"))))),(0,n.kt)("h3",{id:"\u5728\u5408\u540c\u5230\u671f\u524d\u8ddf\u8fdb"},"\u5728\u5408\u540c\u5230\u671f\u524d\u8ddf\u8fdb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5bf9\u8c61\uff1a"),"\xa0\u5408\u540c"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u63cf\u8ff0\uff1a"),"\xa0\u5728\u5408\u540c\u7ed3\u675f\u65e5\u671f\u524d 20 \u65e5\u901a\u8fc7\u7535\u5b50\u90ae\u4ef6\u4e3a\u5c55\u671f\u7ba1\u7406\u5458\u53d1\u9001\u63d0\u9192\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8bc4\u4f30\u6761\u4ef6\uff1a"),"\xa0\u5f53\u8bb0\u5f55\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\u65f6\u9a8c\u8bc1\u89c4\u5219\uff1a\u88ab\u521b\u5efa\uff0c\u4ee5\u53ca\u88ab\u7f16\u8f91\u4ee5\u4fbf\u6ee1\u8db3\u540e\u7eed\u6807\u51c6\u7684\u4efb\u4f55\u65f6\u5019"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u89c4\u5219\u6761\u4ef6"),"\uff1a\u65e0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8fc7\u6ee4\u6761\u4ef6"),"\uff1a\u516c\u5f0f\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"[ ['Status', '=', 'Activated'] ]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5373\u65f6\u64cd\u4f5c"),"\uff1a\u65e0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4f9d\u8d56\u4e8e\u65f6\u95f4\u7684\u64cd\u4f5c"),"\uff1a\u5408\u540c\u524d 20 \u5929\uff1a\u7ed3\u675f\u65e5\u671f\u2014\u2014\u5de5\u4f5c\u6d41\u901a\u77e5\uff1a\u901a\u8fc7\u5de5\u4f5c\u6d41\u901a\u77e5\u4e3a\u5c55\u671f\u7ba1\u7406\u5458\u53d1\u9001\u63d0\u9192\uff0c\u4ee5\u786e\u8ba4\u5ba2\u6237\u662f\u5426\u613f\u610f\u5ef6\u671f\u3002")),(0,n.kt)("h3",{id:"\u5408\u540c\u6536\u6b3e\u9884\u8b66"},"\u5408\u540c\u6536\u6b3e\u9884\u8b66"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5bf9\u8c61\uff1a"),"\xa0\u5408\u540c\u6536\u6b3e\u8ba1\u5212"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u63cf\u8ff0\uff1a"),"\xa0\u4f9d\u636e\u6536\u6b3e\u8ba1\u5212\uff0c\u63d0\u524d10\u5929\u53d1\u9001\u7cfb\u7edf\u9884\u8b66\uff0c\u5e76\u540c\u65f6\u63a8\u9001\u7ed9\u8d22\u52a1\u7cfb\u7edf\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8bc4\u4f30\u6761\u4ef6\uff1a"),"\xa0\u5f53\u8bb0\u5f55\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\u65f6\u9a8c\u8bc1\u89c4\u5219\uff1a\u88ab\u521b\u5efa\uff0c\u4ee5\u53ca\u88ab\u7f16\u8f91\u4ee5\u4fbf\u6ee1\u8db3\u540e\u7eed\u6807\u51c6\u7684\u4efb\u4f55\u65f6\u5019"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u89c4\u5219\u6761\u4ef6"),"\uff1a\u65e0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8fc7\u6ee4\u6761\u4ef6"),"\uff1a\u516c\u5f0f\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"[ ['Status', '=', 'Activated'] ]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5373\u65f6\u64cd\u4f5c"),"\uff1a\u65e0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4f9d\u8d56\u4e8e\u65f6\u95f4\u7684\u64cd\u4f5c"),"\uff1a\u5408\u540c\u6536\u6b3e\u8ba1\u5212\u524d 10 \u5929\uff1a\u8ba1\u5212\u6536\u6b3e\u65e5\u671f\u2014\u2014\u5de5\u4f5c\u6d41\u901a\u77e5\uff1a\u901a\u8fc7\u5de5\u4f5c\u6d41\u901a\u77e5\u4e3a\u5c55\u671f\u7ba1\u7406\u5458\u53d1\u9001\u63d0\u9192\uff0c\u4ee5\u786e\u8ba4\u5ba2\u6237\u662f\u5426\u6309\u671f\u4ed8\u6b3e\uff1b\u53d1\u9001\u51fa\u7ad9\u6d88\u606f\u5c06\u6536\u6b3e\u63d0\u9192\u63a8\u9001\u7ed9\u8d22\u52a1\u7cfb\u7edf\u3002")))}o.isMDXComponent=!0}}]);