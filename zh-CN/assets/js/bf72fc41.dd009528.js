"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),k=r,d=s["".concat(i,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(d,p(p({ref:t},c),{},{components:n})):a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:r,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},93:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={},p="\u8f6f\u4ef6\u5305\u53d1\u5e03",o={unversionedId:"developer/package/package-publish",id:"developer/package/package-publish",title:"\u8f6f\u4ef6\u5305\u53d1\u5e03",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer/package/package-publish.md",sourceDirName:"developer/package",slug:"/developer/package/package-publish",permalink:"/zh-CN/developer/package/package-publish",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer/package/package-publish.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"\u8f6f\u4ef6\u5305\u5b89\u88c5",permalink:"/zh-CN/developer/package/package-install"},next:{title:"\u5fae\u670d\u52a1\u8f6f\u4ef6\u5305",permalink:"/zh-CN/developer/service/"}},i={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"1. Steedos \u8f6f\u4ef6\u5305",id:"1-steedos-\u8f6f\u4ef6\u5305",level:3},{value:"2. npm",id:"2-npm",level:3},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u53d1\u5e03\u6d41\u7a0b",id:"\u53d1\u5e03\u6d41\u7a0b",level:2},{value:"1. \u914d\u7f6e <code>package.json</code> \u6587\u4ef6",id:"1-\u914d\u7f6e-packagejson-\u6587\u4ef6",level:3},{value:"2. \u767b\u5f55 npm \u8d26\u6237",id:"2-\u767b\u5f55-npm-\u8d26\u6237",level:3},{value:"3. \u53d1\u5e03\u60a8\u7684\u5305",id:"3-\u53d1\u5e03\u60a8\u7684\u5305",level:3},{value:"4. \u7248\u672c\u7ba1\u7406",id:"4-\u7248\u672c\u7ba1\u7406",level:3},{value:"\u53d1\u5e03\u79c1\u6709\u8f6f\u4ef6\u5305",id:"\u53d1\u5e03\u79c1\u6709\u8f6f\u4ef6\u5305",level:2},{value:"\u8bbe\u7f6e\u79c1\u6709\u5305",id:"\u8bbe\u7f6e\u79c1\u6709\u5305",level:3},{value:"\u53d1\u5e03\u5230 npm \u79c1\u6709\u4ed3\u5e93",id:"\u53d1\u5e03\u5230-npm-\u79c1\u6709\u4ed3\u5e93",level:3},{value:"\u6743\u9650\u7ba1\u7406",id:"\u6743\u9650\u7ba1\u7406",level:3}],c={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8f6f\u4ef6\u5305\u53d1\u5e03"},"\u8f6f\u4ef6\u5305\u53d1\u5e03"),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("p",null,"Steedos \u8f6f\u4ef6\u5305\u5141\u8bb8\u5f00\u53d1\u8005\u5c06\u5e94\u7528\u3001\u7ec4\u4ef6\u3001\u8d44\u6e90\u6253\u5305\uff0c\u4f7f\u5176\u53ef\u4ee5\u8f7b\u677e\u5730\u5728\u4e0d\u540c\u7684\u9879\u76ee\u548c\u56e2\u961f\u4e4b\u95f4\u5171\u4eab\u548c\u91cd\u7528\u3002\u8fd9\u4e9b\u5305\u662f\u57fa\u4e8e npm\uff08\u4e00\u4e2a\u6d41\u884c\u7684 JavaScript \u5305\u7ba1\u7406\u5668\uff09\u89c4\u8303\uff0c\u5229\u7528 npm \u53ef\u4ee5\u7ba1\u7406\u5305\u7684\u53d1\u5e03\u3001\u7248\u672c\u7ba1\u7406\u548c\u4f9d\u8d56\u5173\u7cfb\u3002"),(0,r.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,r.kt)("h3",{id:"1-steedos-\u8f6f\u4ef6\u5305"},"1. Steedos \u8f6f\u4ef6\u5305"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5b9a\u4e49"),"\uff1a\u4e00\u4e2a Steedos Package \u662f\u4e00\u4e2a\u5305\u542b\u6240\u6709\u5fc5\u8981\u6587\u4ef6\u548c\u8d44\u6e90\u7684\u8f6f\u4ef6\u5305\uff0c\u7528\u4e8e\u5728 Steedos \u5e73\u53f0\u4e0a\u5b9e\u73b0\u7279\u5b9a\u7684\u529f\u80fd\u6216\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"package.service.js"),": \u6bcf\u4e00\u4e2a Steedos \u8f6f\u4ef6\u5305\u5fc5\u987b\u5305\u542b\u4e00\u4e2a package.service.js \u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7ec4\u4ef6"),"\uff1a\u8f6f\u4ef6\u5305\u53ef\u4ee5\u5305\u542b\u4e00\u7cfb\u5217\u7ec4\u4ef6\uff0c\u5982\u5bf9\u8c61\u5b9a\u4e49\u3001\u89e6\u53d1\u5668\u3001\u89c6\u56fe\u3001\u6d41\u7a0b\u7b49\u3002")),(0,r.kt)("h3",{id:"2-npm"},"2. npm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5b9a\u4e49"),"\uff1anpm \u662f\u4e16\u754c\u4e0a\u6700\u5927\u7684\u8f6f\u4ef6\u5305\u6ce8\u518c\u548c\u7ba1\u7406\u7cfb\u7edf\uff0c\u4e3b\u8981\u7528\u4e8e JavaScript\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u529f\u80fd"),"\uff1a\u901a\u8fc7 npm\uff0c\u60a8\u53ef\u4ee5\u81ea\u52a8\u5904\u7406\u9879\u76ee\u7684\u4f9d\u8d56\u5173\u7cfb\u548c\u7248\u672c\u7ba1\u7406\uff0c\u53d1\u5e03\u7684\u5305\u53ef\u4ee5\u88ab\u516c\u5f00\u68c0\u7d22\u548c\u5b89\u88c5\u3002")),(0,r.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"\u5728\u53d1\u5e03\u60a8\u7684 Steedos Package \u4e4b\u524d\uff0c\u60a8\u9700\u8981\u51c6\u5907\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"npm \u8d26\u6237"),"\uff1a\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm \u5b98\u7f51")," \u521b\u5efa\u4e00\u4e2a\u8d26\u6237\u5e76\u9a8c\u8bc1\u60a8\u7684\u90ae\u7bb1\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u9879\u76ee\u6587\u4ef6"),"\uff1a\u6574\u7406\u60a8\u7684 Steedos \u9879\u76ee\uff0c\u786e\u4fdd\u6240\u6709\u6587\u4ef6\u90fd\u5df2\u51c6\u5907\u59a5\u5f53\uff0c\u5e76\u4e14\u9075\u5faa\u4e86 Steedos \u548c npm \u7684\u6700\u4f73\u5b9e\u8df5\u3002")),(0,r.kt)("h2",{id:"\u53d1\u5e03\u6d41\u7a0b"},"\u53d1\u5e03\u6d41\u7a0b"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u5c06\u60a8\u7684 Steedos Package \u53d1\u5e03\u5230 npm \u7684\u8be6\u7ec6\u6b65\u9aa4\uff1a"),(0,r.kt)("h3",{id:"1-\u914d\u7f6e-packagejson-\u6587\u4ef6"},"1. \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"h3"},"package.json")," \u6587\u4ef6"),(0,r.kt)("p",null,"\u5728\u60a8\u7684\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa\u6216\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\uff0c\u5b83\u662f\u60a8\u7684\u9879\u76ee\u7684\u8bf4\u660e\u4e66\uff0c\u5305\u542b\u5982\u4e0b\u4fe1\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "your-package-name",\n  "version": "1.0.0",\n  "description": "\u7b80\u77ed\u63cf\u8ff0\u60a8\u7684\u5305",\n  "main": "index.js",\n  "author": "Your Name <youremail@example.com>",\n  "homepage": "https://github.com/yourusername/your-package-name#readme"\n}\n')),(0,r.kt)("h3",{id:"2-\u767b\u5f55-npm-\u8d26\u6237"},"2. \u767b\u5f55 npm \u8d26\u6237"),(0,r.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u6216\u7ec8\u7aef\u4e2d\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5e76\u6309\u7167\u63d0\u793a\u8f93\u5165\u60a8\u7684\u51ed\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm login\n")),(0,r.kt)("h3",{id:"3-\u53d1\u5e03\u60a8\u7684\u5305"},"3. \u53d1\u5e03\u60a8\u7684\u5305"),(0,r.kt)("p",null,"\u786e\u4fdd\u5f53\u524d\u76ee\u5f55\u4e3a\u60a8\u7684\u9879\u76ee\u6839\u76ee\u5f55\uff0c\u7136\u540e\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm publish\n")),(0,r.kt)("p",null,"\u8fd9\u4f1a\u5c06\u60a8\u7684\u5305\u4e0a\u4f20\u5230 npm\u3002\u5982\u679c\u60a8\u7684\u5305\u662f\u516c\u5f00\u7684\uff0c\u90a3\u4e48\u73b0\u5728\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u8bbf\u95ee\u548c\u5b89\u88c5\u5b83\u3002\u5bf9\u4e8e\u79c1\u6709\u7684\u5305\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u4ed8\u8d39\u8ba2\u9605 npm \u7684\u79c1\u6709\u4ed3\u5e93\u670d\u52a1\u3002"),(0,r.kt)("h3",{id:"4-\u7248\u672c\u7ba1\u7406"},"4. \u7248\u672c\u7ba1\u7406"),(0,r.kt)("p",null,"\u6bcf\u6b21\u53d1\u5e03\u65f6\uff0c\u60a8\u90fd\u5e94\u8be5\u66f4\u65b0 package.json \u6587\u4ef6\u4e2d\u7684\u7248\u672c\u53f7\u3002\u9075\u5faa \u8bed\u4e49\u5316\u7248\u672c \u89c4\u5219\uff08\u5373\u4e3b\u7248\u672c\u53f7\u3001\u6b21\u7248\u672c\u53f7\u3001\u8865\u4e01\u7248\u672c\u53f7\uff09\u662f\u4e00\u4e2a\u597d\u4e60\u60ef\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u60a8\u7684 Steedos Package \u5e94\u8be5\u5df2\u6210\u529f\u53d1\u5e03\u5230 npm\uff0c\u5e76\u53ef\u5728Steedos\u5e73\u53f0\u4e2d\u5b89\u88c5\u3002\u8bb0\u4f4f\uff0c\u7ef4\u62a4\u4e00\u4e2a\u6e05\u6670\u7684\u6587\u6863\u548c\u66f4\u65b0\u65e5\u5fd7\u5bf9\u4e8e\u7ba1\u7406\u8f6f\u4ef6\u5305\u7248\u672c\u548c\u4e0e\u793e\u533a\u7684\u6c9f\u901a\u81f3\u5173\u91cd\u8981\u3002"),(0,r.kt)("h2",{id:"\u53d1\u5e03\u79c1\u6709\u8f6f\u4ef6\u5305"},"\u53d1\u5e03\u79c1\u6709\u8f6f\u4ef6\u5305"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u60a8\u7684 Steedos Package \u53ef\u80fd\u542b\u6709\u654f\u611f\u6216\u79c1\u6709\u7684\u4ee3\u7801\uff0c\u4e0d\u9002\u5408\u53d1\u5e03\u4e3a\u516c\u5f00\u7684 npm \u5305\u3002npm \u63d0\u4f9b\u4e86\u79c1\u6709\u5305\u7684\u529f\u80fd\uff0c\u8ba9\u60a8\u80fd\u591f\u63a7\u5236\u8c01\u53ef\u4ee5\u5b89\u88c5\u60a8\u7684\u8f6f\u4ef6\u5305\uff0c\u4fdd\u62a4\u60a8\u7684\u4ee3\u7801\u4e0d\u88ab\u672a\u7ecf\u6388\u6743\u7684\u7528\u6237\u8bbf\u95ee\u3002"),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u79c1\u6709\u5305"},"\u8bbe\u7f6e\u79c1\u6709\u5305"),(0,r.kt)("p",null,"\u8981\u5c06\u60a8\u7684 Steedos Package \u8bbe\u7f6e\u4e3a\u79c1\u6709\uff0c\u60a8\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u6216\u4fee\u6539\u4ee5\u4e0b\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "private": true\n}\n')),(0,r.kt)("p",null,"\u8fd9\u786e\u4fdd\u4e86\u60a8\u7684\u5305\u4e0d\u4f1a\u88ab\u516c\u5f00\u53d1\u5e03\u5230 npm\u3002\u4f46\u662f\uff0c\u4ec5\u4ec5\u8fd9\u6837\u8bbe\u7f6e\u662f\u4e0d\u591f\u7684\uff0c\u56e0\u4e3a\u8fd9\u6837\u5e76\u4e0d\u4f1a\u5c06\u60a8\u7684\u5305\u4e0a\u4f20\u5230 npm\u3002"),(0,r.kt)("h3",{id:"\u53d1\u5e03\u5230-npm-\u79c1\u6709\u4ed3\u5e93"},"\u53d1\u5e03\u5230 npm \u79c1\u6709\u4ed3\u5e93"),(0,r.kt)("p",null,"npm \u63d0\u4f9b\u4e86\u4ed8\u8d39\u7684\u79c1\u6709\u4ed3\u5e93\uff08npm Private Packages\uff09\u670d\u52a1\uff0c\u5141\u8bb8\u60a8\u53d1\u5e03\u79c1\u6709\u5305\u3002\u8981\u4f7f\u7528\u8fd9\u9879\u670d\u52a1\uff0c\u60a8\u9700\u8981\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8d2d\u4e70\u8ba2\u9605"),"\uff1a\u8bbf\u95ee npm \u5b98\u7f51\uff0c\u9009\u62e9\u9002\u5408\u7684\u8ba1\u5212\u5e76\u8d2d\u4e70\u79c1\u6709\u4ed3\u5e93\u670d\u52a1\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8ba4\u8bc1\u8d26\u6237"),"\uff1a\u5728\u60a8\u7684\u547d\u4ee4\u884c\u6216\u7ec8\u7aef\u4e2d\uff0c\u4f7f\u7528\u76f8\u540c\u7684 npm login \u547d\u4ee4\uff0c\u786e\u4fdd\u60a8\u767b\u5f55\u7684\u662f\u6709\u6743\u53d1\u5e03\u79c1\u6709\u5305\u7684\u8d26\u6237\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53d1\u5e03"),"\uff1a\u4e0e\u53d1\u5e03\u516c\u5f00\u5305\u76f8\u540c\uff0c\u60a8\u4f7f\u7528\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm publish\n")),(0,r.kt)("p",null,'\u4f46\u662f\uff0c\u56e0\u4e3a\u60a8\u7684 package.json \u6807\u8bb0\u4e86 "private": true\uff0cnpm \u4f1a\u5c06\u5176\u53d1\u5e03\u5230\u60a8\u7684\u79c1\u6709\u4ed3\u5e93\u800c\u975e\u516c\u5f00\u7d22\u5f15\u3002'),(0,r.kt)("h3",{id:"\u6743\u9650\u7ba1\u7406"},"\u6743\u9650\u7ba1\u7406"),(0,r.kt)("p",null,"\u79c1\u6709\u5305\u9700\u8981\u7ba1\u7406\u54ea\u4e9b\u7528\u6237\u6216\u56e2\u961f\u53ef\u4ee5\u8bbf\u95ee\u3002\u60a8\u53ef\u4ee5\u5728 npm \u5b98\u7f51\u7684\u4ed3\u5e93\u8bbe\u7f6e\u4e2d\u914d\u7f6e\u8fd9\u4e9b\u6743\u9650\uff0c\u786e\u4fdd\u53ea\u6709\u88ab\u6388\u6743\u7684\u6210\u5458\u53ef\u4ee5\u5b89\u88c5\u6216\u4fee\u6539\u60a8\u7684\u79c1\u6709\u5305\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u60a8\u53ef\u4ee5\u6210\u529f\u5730\u53d1\u5e03\u79c1\u6709\u8f6f\u4ef6\u5305\uff0c\u5e76\u63a7\u5236\u5bf9\u5176\u7684\u8bbf\u95ee\u3002\u8fd9\u4e3a\u542b\u6709\u654f\u611f\u4fe1\u606f\u3001\u79c1\u6709\u4ee3\u7801\u6216\u5185\u90e8\u5de5\u5177\u7684\u9879\u76ee\u63d0\u4f9b\u4e86\u5b89\u5168\u4fdd\u969c\u3002"))}m.isMDXComponent=!0}}]);