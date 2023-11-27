"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,k=d["".concat(o,".").concat(u)]||d[u]||c[u]||l;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:20},p="\u52a8\u4f5c",i={unversionedId:"developer/service/moleculer/actions",id:"developer/service/moleculer/actions",title:"\u52a8\u4f5c",description:"\u52a8\u4f5c\u662f\u670d\u52a1\u7684\u53ef\u8c03\u7528/\u516c\u5171\u65b9\u6cd5\u3002\u52a8\u4f5c\u8c03\u7528\u4ee3\u8868\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\uff08RPC\uff09\u3002\u5b83\u5177\u6709\u8bf7\u6c42\u53c2\u6570\u5e76\u8fd4\u56de\u54cd\u5e94\uff0c\u5c31\u50cfHTTP\u8bf7\u6c42\u4e00\u6837\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer/service/moleculer/actions.md",sourceDirName:"developer/service/moleculer",slug:"/developer/service/moleculer/actions",permalink:"/zh-CN/developer/service/moleculer/actions",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer/service/moleculer/actions.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"developer",previous:{title:"Moleculer \u5fae\u670d\u52a1\u6846\u67b6",permalink:"/zh-CN/developer/service/moleculer/"},next:{title:"\u4e8b\u4ef6",permalink:"/zh-CN/developer/service/moleculer/events"}},o={},m=[{value:"\u8c03\u7528\u670d\u52a1",id:"\u8c03\u7528\u670d\u52a1",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:3},{value:"\u5143\u6570\u636e",id:"\u5143\u6570\u636e",level:3},{value:"\u6d41",id:"\u6d41",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],s={toc:m},d="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u52a8\u4f5c"},"\u52a8\u4f5c"),(0,r.kt)("p",null,"\u52a8\u4f5c\u662f\u670d\u52a1\u7684\u53ef\u8c03\u7528/\u516c\u5171\u65b9\u6cd5\u3002\u52a8\u4f5c\u8c03\u7528\u4ee3\u8868\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\uff08RPC\uff09\u3002\u5b83\u5177\u6709\u8bf7\u6c42\u53c2\u6570\u5e76\u8fd4\u56de\u54cd\u5e94\uff0c\u5c31\u50cfHTTP\u8bf7\u6c42\u4e00\u6837\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6709\u591a\u4e2a\u670d\u52a1\u5b9e\u4f8b\uff0c\u4ee3\u7406\u5c06\u5728\u5b9e\u4f8b\u4e4b\u95f4\u5bf9\u8bf7\u6c42\u8fdb\u884c\u8d1f\u8f7d\u5e73\u8861\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"action-balancing",src:n(9329).Z,width:"639",height:"422"})),(0,r.kt)("h2",{id:"\u8c03\u7528\u670d\u52a1"},"\u8c03\u7528\u670d\u52a1"),(0,r.kt)("p",null,"\u8981\u8c03\u7528\u670d\u52a1\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.call")," \u65b9\u6cd5\u3002\u4ee3\u7406\u5bfb\u627e\u5177\u6709\u7ed9\u5b9a\u52a8\u4f5c\u7684\u670d\u52a1\uff08\u548c\u8282\u70b9\uff09\u5e76\u8c03\u7528\u5b83\u3002\u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\u3002"),(0,r.kt)("h3",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const res = await broker.call(actionName, params, opts);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"actionName")," \u662f\u4e00\u4e2a\u70b9\u5206\u9694\u7684\u5b57\u7b26\u4e32\u3002\u5b83\u7684\u7b2c\u4e00\u90e8\u5206\u662f\u670d\u52a1\u540d\u79f0\uff0c\u800c\u7b2c\u4e8c\u90e8\u5206\u4ee3\u8868\u52a8\u4f5c\u540d\u79f0\u3002\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u6709\u4e00\u4e2a\u5e26\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," \u52a8\u4f5c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," \u670d\u52a1\uff0c\u60a8\u53ef\u4ee5\u8c03\u7528\u5b83\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"posts.create"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"params")," \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4f5c\u4e3a\u4e0a\u4e0b\u6587\u7684\u4e00\u90e8\u5206\u4f20\u9012\u7ed9\u52a8\u4f5c\u3002\u670d\u52a1\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.params")," \u8bbf\u95ee\u5b83\u3002",(0,r.kt)("em",{parentName:"p"},"\u8fd9\u662f\u53ef\u9009\u7684\u3002\u5982\u679c\u60a8\u4e0d\u5b9a\u4e49\uff0c\u5b83\u5c06\u662f ",(0,r.kt)("inlineCode",{parentName:"em"},"{}")),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"opts")," \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7528\u4e8e\u8bbe\u7f6e/\u8986\u76d6\u67d0\u4e9b\u8bf7\u6c42\u53c2\u6570\uff0c\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"timeout"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"retryCount"),"\u3002",(0,r.kt)("em",{parentName:"p"},"\u8fd9\u4e5f\u662f\u53ef\u9009\u7684\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53ef\u7528\u7684\u8c03\u7528\u9009\u9879\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timeout")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7684\u8d85\u65f6\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002\u5982\u679c\u8bf7\u6c42\u8d85\u65f6\u5e76\u4e14\u60a8\u6ca1\u6709\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"td"},"fallbackResponse"),"\uff0c\u4ee3\u7406\u5c06\u629b\u51fa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"td"},"RequestTimeout")," \u9519\u8bef\u3002\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," \u4ee5\u7981\u7528\u3002\u5982\u679c\u672a\u5b9a\u4e49\uff0c\u5c06\u4f7f\u7528\u4ee3\u7406\u9009\u9879\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"requestTimeout")," \u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retries")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7684\u91cd\u8bd5\u6b21\u6570\u3002\u5982\u679c\u8bf7\u6c42\u8d85\u65f6\uff0c\u4ee3\u7406\u5c06\u5c1d\u8bd5\u518d\u6b21\u8c03\u7528\u3002\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," \u4ee5\u7981\u7528\u3002\u5982\u679c\u672a\u5b9a\u4e49\uff0c\u5c06\u4f7f\u7528\u4ee3\u7406\u9009\u9879\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"retryPolicy.retries")," \u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fallbackResponse")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Any")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u8bf7\u6c42\u5931\u8d25\uff0c\u5219\u8fd4\u56de\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nodeID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807 nodeID\u3002\u5982\u679c\u8bbe\u7f6e\uff0c\u5b83\u5c06\u76f4\u63a5\u547c\u53eb\u6307\u5b9a\u7684\u8282\u70b9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"meta")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7684\u5143\u6570\u636e\u3002\u5728\u52a8\u4f5c\u5904\u7406\u7a0b\u5e8f\u4e2d\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"ctx.meta")," \u8bbf\u95ee\u3002\u5b83\u4e5f\u4f1a\u5728\u5d4c\u5957\u8c03\u7528\u4e2d\u88ab\u8f6c\u79fb\u548c\u5408\u5e76\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"parentCtx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Context")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7236 ",(0,r.kt)("inlineCode",{parentName:"td"},"Context")," \u5b9e\u4f8b\u3002\u7528\u5b83\u6765\u94fe\u63a5\u8c03\u7528\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"requestID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42ID\u6216\u5173\u8054ID\u3002\u7528\u4e8e\u8ffd\u8e2a\u3002")))),(0,r.kt)("h3",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u5e26\u53c2\u6570\u7684\u8c03\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const res = await broker.call("user.list");\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5e26\u53c2\u6570\u8c03\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const res = await broker.call("user.get", { id: 3 });\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5e26\u8c03\u7528\u9009\u9879\u7684\u8c03\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const res = await broker.call("user.recommendation", { limit: 5 }, {\n    timeout: 500,\n    retries: 3,\n    fallbackResponse: defaultRecommendation\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5e26\u6709\u627f\u8bfa\u9519\u8bef\u5904\u7406\u7684\u8c03\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'broker.call("posts.update", { id: 2, title: "Modified post title" })\n    .then(res => console.log("Post updated!"))\n    .catch(err => console.error("Unable to update Post!", err));    \n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u76f4\u63a5\u8c03\u7528\uff1a\u4ece\u201cnode-21\u201d\u8282\u70b9\u83b7\u53d6\u5065\u5eb7\u4fe1\u606f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const res = await broker.call("$node.health", null, { nodeID: "node-21" })\n')),(0,r.kt)("h3",{id:"\u5143\u6570\u636e"},"\u5143\u6570\u636e"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," \u5c5e\u6027\u5411\u670d\u52a1\u53d1\u9001\u5143\u4fe1\u606f\u3002\u5728\u52a8\u4f5c\u5904\u7406\u7a0b\u5e8f\u4e2d\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.meta")," \u8bbf\u95ee\u3002\u8bf7\u6ce8\u610f\uff0c\u5728\u5d4c\u5957\u8c03\u7528\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," \u4f1a\u5408\u5e76\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u7f16\u5199 REST API \u65f6\uff0c\u60a8\u53ef\u4ee5\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.meta.user")," \u83b7\u53d6\u5f53\u524d\u7528\u6237\u4f1a\u8bdd\u3002\u5982\u679c\u60a8\u60f3\u5728\u88ab\u8c03\u7528\u7684\u52a8\u4f5c\u4e2d\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.meta.user"),"\uff0c\u5219\u9700\u8981\u624b\u52a8\u4f20\u9012\u5b83\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const res = await this.broker.call('objectql.find', \n  {\n    objectName: 'accounts',\n    query: {\n      fields: ['name', 'owner'],                      \n      filters: ['owner', '=', ctx.meta.user.userId],  \n      sort: 'name desc'                               \n    },\n  },\n  {\n    meta:{\n        user: ctx.meta.user\n    }\n  }\n);\n")),(0,r.kt)("h2",{id:"\u6d41"},"\u6d41"),(0,r.kt)("p",null,"Moleculer \u652f\u6301 Node.js \u6d41\u4f5c\u4e3a\u8bf7\u6c42 ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," \u548c\u54cd\u5e94\u3002\u4f7f\u7528\u5b83\u6765\u4f20\u8f93\u4ece\u7f51\u5173\u6536\u5230\u7684\u6587\u4ef6\uff0c\u7f16\u7801/\u89e3\u7801\u6216\u538b\u7f29/\u89e3\u538b\u7f29\u6d41\u3002"),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5c06\u6587\u4ef6\u4f5c\u4e3a\u6d41\u53d1\u9001\u5230\u670d\u52a1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const stream = fs.createReadStream(fileName);\n\nbroker.call("storage.save", stream, { meta: { filename: "avatar-123.jpg" }});\n')),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"params")," \u5e94\u8be5\u662f\u4e00\u4e2a\u6d41\uff0c\u60a8\u4e0d\u80fd\u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," \u6dfb\u52a0\u4efb\u4f55\u989d\u5916\u7684\u53d8\u91cf\u3002\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," \u5c5e\u6027\u4f20\u8f93\u9644\u52a0\u6570\u636e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5728\u670d\u52a1\u4e2d\u63a5\u6536\u6d41")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n    name: "storage",\n    actions: {\n        save(ctx) {\n            // \u5c06\u63a5\u6536\u5230\u7684\u6d41\u4fdd\u5b58\u5230\u6587\u4ef6\n            const s = fs.createWriteStream(`/tmp/${ctx.meta.filename}`);\n            ctx.params.pipe(s);\n        }\n    }\n};\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5728\u670d\u52a1\u4e2d\u8fd4\u56de\u6d41\u4f5c\u4e3a\u54cd\u5e94")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n    name: "storage",\n    actions: {\n        get: {\n            params: {\n                filename: "string"\n            },\n            handler(ctx) {\n                return fs.createReadStream(`/tmp/${ctx.params.filename}`);\n            }\n        }\n    }\n};\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5728\u8c03\u7528\u65b9\u5904\u7406\u63a5\u6536\u5230\u7684\u6d41")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const filename = "avatar-123.jpg";\nbroker.call("storage.get", { filename })\n    .then(stream => {\n        const s = fs.createWriteStream(`./${filename}`);\n        stream.pipe(s);\n        s.on("close", () => broker.logger.info("File has been received"));\n    })\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AES \u7f16\u7801/\u89e3\u7801\u793a\u4f8b\u670d\u52a1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const crypto = require("crypto");\nconst password = "moleculer";\n\nmodule.exports = {\n    name: "aes",\n    actions: {\n        encrypt(ctx) {\n            const encrypt = crypto.createCipher("aes-256-ctr", password);\n            return ctx.params.pipe(encrypt);\n        },\n\n        decrypt(ctx) {\n            const decrypt = crypto.createDecipher("aes-256-ctr", password);\n            return ctx.params.pipe(decrypt);\n        }\n    }\n};\n')))}c.isMDXComponent=!0},9329:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/action-balancing-2a12314575631352233e6a52d63b43cf.gif"}}]);