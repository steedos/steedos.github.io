"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=l,c=d["".concat(u,".").concat(k)]||d[k]||m[k]||a;return n?r.createElement(c,o(o({ref:t},s),{},{components:n})):r.createElement(c,o({ref:t},s))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={},o="\u5916\u90e8\u6570\u636e\u6e90",i={unversionedId:"integration/external-datasources",id:"integration/external-datasources",title:"\u5916\u90e8\u6570\u636e\u6e90",description:"Steedos\u4f7f\u7528 mongodb \u6570\u636e\u5e93\u4f5c\u4e3a\u9ed8\u8ba4\u6570\u636e\u6e90\uff0c\u652f\u6301\u76f4\u63a5\u8fde\u63a5\u7b2c\u4e09\u65b9\u7cfb\u7edf\u7684\u6570\u636e\u6e90\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/integration/external-datasources.md",sourceDirName:"integration",slug:"/integration/external-datasources",permalink:"/zh-CN/integration/external-datasources",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/integration/external-datasources.md",tags:[],version:"current",frontMatter:{},sidebar:"platform",previous:{title:"\u6269\u5c55Steedos\u529f\u80fd",permalink:"/zh-CN/integration"},next:{title:"Node-Red",permalink:"/zh-CN/integration/node-red"}},u={},p=[{value:"\u8fde\u63a5\u5916\u90e8\u6570\u636e\u6e90\u53ef\u4ee5\u505a\u4ec0\u4e48\uff1f",id:"\u8fde\u63a5\u5916\u90e8\u6570\u636e\u6e90\u53ef\u4ee5\u505a\u4ec0\u4e48",level:2},{value:"\u914d\u7f6e\u5916\u90e8\u6570\u636e\u6e90",id:"\u914d\u7f6e\u5916\u90e8\u6570\u636e\u6e90",level:2},{value:"MongoDB",id:"mongodb",level:3},{value:"MySQL",id:"mysql",level:3},{value:"SQL Server",id:"sql-server",level:3},{value:"PostgreSQL",id:"postgresql",level:3},{value:"Oracle",id:"oracle",level:3},{value:"\u914d\u7f6e\u5916\u90e8\u6570\u636e\u6e90\u5bf9\u8c61",id:"\u914d\u7f6e\u5916\u90e8\u6570\u636e\u6e90\u5bf9\u8c61",level:2},{value:"\u914d\u7f6e\u5bf9\u8c61",id:"\u914d\u7f6e\u5bf9\u8c61",level:3},{value:"\u914d\u7f6e\u5bf9\u8c61\u5b57\u6bb5",id:"\u914d\u7f6e\u5bf9\u8c61\u5b57\u6bb5",level:3},{value:"\u542f\u7528\u5bf9\u8c61",id:"\u542f\u7528\u5bf9\u8c61",level:3},{value:"\u9884\u89c8\u6d4b\u8bd5",id:"\u9884\u89c8\u6d4b\u8bd5",level:3},{value:"\u5728\u5e94\u7528\u4e2d\u5c55\u793a\u5916\u90e8\u6570\u636e\u6e90\u5bf9\u8c61",id:"\u5728\u5e94\u7528\u4e2d\u5c55\u793a\u5916\u90e8\u6570\u636e\u6e90\u5bf9\u8c61",level:2}],s={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5916\u90e8\u6570\u636e\u6e90"},"\u5916\u90e8\u6570\u636e\u6e90"),(0,l.kt)("p",null,"Steedos\u4f7f\u7528 mongodb \u6570\u636e\u5e93\u4f5c\u4e3a\u9ed8\u8ba4\u6570\u636e\u6e90\uff0c\u652f\u6301\u76f4\u63a5\u8fde\u63a5\u7b2c\u4e09\u65b9\u7cfb\u7edf\u7684\u6570\u636e\u6e90\u3002"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u6b64\u529f\u80fd\u9700\u8981\u4f01\u4e1a\u7248\u6388\u6743\u624d\u80fd\u4f7f\u7528\u3002")),(0,l.kt)("p",null,"Steedos\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"mongodb")," \u6570\u636e\u5e93\u4f5c\u4e3a\u9ed8\u8ba4\u6570\u636e\u6e90\uff0c\u8be5\u9ed8\u8ba4\u6570\u636e\u6e90\u662f\u5fc5\u987b\u7684\uff0c\u800c\u4e14\u65e0\u6cd5\u4f7f\u7528\u5176\u4ed6\u6570\u636e\u5e93\u4f5c\u4e3a\u9ed8\u8ba4\u6570\u636e\u6e90\u3002"),(0,l.kt)("p",null,"\u8003\u8651\u5728\u5f88\u591a\u573a\u666f\u4e0b\u6211\u4eec\u4f1a\u9700\u8981\u8fde\u63a5\u7b2c\u4e09\u65b9\u7cfb\u7edf\u7684\u6570\u636e\u6e90\uff0c\u4ee5\u5728Steedos\u4e0a\u5c55\u793a\u3001\u7edf\u8ba1\u751a\u81f3\u7ef4\u62a4\u8fd9\u4e9b\u7b2c\u4e09\u65b9\u6570\u636e\u6e90\u4e0a\u7684\u6570\u636e\uff0c\u6240\u4ee5\u6211\u4eec\u505a\u4e86\u5927\u91cf\u5f00\u53d1\u6765\u8ba9Steedos\u652f\u6301\u76f4\u63a5\u8fde\u63a5\u5404\u79cd\u7c7b\u578b\u7684\u5916\u90e8\u6570\u636e\u6e90\u3002"),(0,l.kt)("h2",{id:"\u8fde\u63a5\u5916\u90e8\u6570\u636e\u6e90\u53ef\u4ee5\u505a\u4ec0\u4e48"},"\u8fde\u63a5\u5916\u90e8\u6570\u636e\u6e90\u53ef\u4ee5\u505a\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,"\u5728Steedos\u4e0a\u8fde\u63a5\u4e86\u5916\u90e8\u6570\u636e\u6e90\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u6309\u8fd9\u4e9b\u5916\u90e8\u6570\u636e\u6e90\u4e0a\u7684\u5404\u4e2a\u8868\u7ed3\u6784\u6765\u914d\u7f6e\u5176\u5bf9\u5e94\u7684Steedos\u5916\u90e8\u6570\u636e\u6e90\u5bf9\u8c61\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u50cf\u4f7f\u7528\u9ed8\u8ba4\u6570\u636e\u6e90\u5bf9\u8c61\u4e00\u6837\u4f7f\u7528\u8fd9\u4e9b\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u5728\u9ed8\u8ba4\u6570\u636e\u6e90\u5bf9\u8c61\u4e0a\u6709\u7684\u529f\u80fd\u5927\u90e8\u5206\u5728\u5916\u90e8\u6570\u636e\u6e90\u5bf9\u8c61\u4e0a\u4e5f\u6709\uff0c\u76ee\u524d\u5df2\u77e5\u7684\u533a\u522b\u6709\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u529f\u80fd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u6570\u636e\u6e90"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5916\u90e8\u6570\u636e\u6e90"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5bf9\u8c61\u6743\u9650"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b8c\u5168\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6709\u9650\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5185\u7f6e\u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5168\u90e8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5b57\u6bb5\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6240\u6709"),(0,l.kt)("td",{parentName:"tr",align:null},"\u90e8\u5206")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8\u6570\u636e\u6e90\u53ea\u652f\u6301\u6709\u9650\u7684\u5bf9\u8c61\u6743\u9650\u529f\u80fd\uff0c\u6bd4\u5982\u4e0d\u652f\u6301\u914d\u7f6e\u67d0\u4e9b\u7528\u6237\u53ea\u80fd\u770b\u5230\u5c5e\u6027\u81ea\u5df1\u7684\u8bb0\u5f55\uff0c\u800c\u7ba1\u7406\u5458\u53ef\u4ee5\u770b\u5230\u6240\u6709\u8bb0\u5f55\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8\u6570\u636e\u6e90\u6ca1\u6709\u4efb\u4f55\u57fa\u7840\u5b57\u6bb5\u53ca\u5176\u529f\u80fd\uff0c\u6bd4\u5982\u6240\u6709\u8005\u3001\u521b\u5efa\u4eba\u3001\u521b\u5efa\u65f6\u95f4\u3001\u4e3b\u5206\u90e8\u7b49\uff1b\u5982\u679c\u9700\u8981\u53ea\u80fd\u989d\u5916\u5728\u5bf9\u5e94\u7684\u5bf9\u8c61\u4e0a\u65b0\u5efa\u76f8\u5173\u5b57\u6bb5\u5e76\u5b9e\u73b0\u76f8\u5173\u529f\u80fd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8\u6570\u636e\u6e90\u53ea\u652f\u6301\u90e8\u5206\u5b57\u6bb5\u7c7b\u578b\uff0c\u6bd4\u5982\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e0d\u652f\u6301\u6570\u7ec4\u7c7b\u578b\u5b57\u6bb5\u3002")),(0,l.kt)("h2",{id:"\u914d\u7f6e\u5916\u90e8\u6570\u636e\u6e90"},"\u914d\u7f6e\u5916\u90e8\u6570\u636e\u6e90"),(0,l.kt)("p",null,"\u8981\u60f3\u8fde\u63a5\u5916\u90e8\u6570\u636e\u6e90\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u5728\u201d\u8bbe\u7f6e\u201c\u5e94\u7528\u7684\u201d\u5bf9\u8c61\u8bbe\u7f6e\u2192\u5916\u90e8\u6570\u636e\u6e90\u201c\u754c\u9762\u914d\u7f6e\u5bf9\u5e94\u7684\u5916\u90e8\u6570\u636e\u6e90\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u914d\u7f6e\u8fde\u63a5\u5c5e\u6027\u65f6\uff0c\u201d\u8fde\u63a5\u6570\u636e\u5e93\u7684URL\u201c\u4e0e\u201d\u5176\u4ed6\u8fde\u63a5\u9009\u9879\u201c\u4e8c\u8005\u9009\u586b\u4e00\u4e2a\u5373\u53ef\u4e0d\u7528\u90fd\u586b\u5199\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u52fe\u9009\u201cDebug\u201d\u5c5e\u6027\u65f6\uff0c\u8be5\u6570\u636e\u6e90\u4e0b\u6240\u6709\u8bf7\u6c42\u7684SQL\u8bed\u53e5\u90fd\u5c06\u5728\u670d\u52a1\u7aef\u63a7\u5236\u53f0\u8f93\u51fa\u65e5\u5fd7\u7528\u4e8e\u8c03\u8bd5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5728\u8be5\u5916\u90e8\u6570\u636e\u6e90\u8bb0\u5f55\u8be6\u7ec6\u754c\u9762\u53f3\u4e0a\u89d2\u70b9\u51fb\u201c\u6d4b\u8bd5\u8fde\u63a5\u201d\u6309\u94ae\u6765\u6d4b\u8bd5\u914d\u7f6e\u7684\u53c2\u6570\u662f\u5426\u6b63\u786e\uff0c\u5f53\u63d0\u793a\u8fde\u63a5\u6210\u529f\u5373\u8868\u793a\u914d\u7f6e\u751f\u6548\u4e86\u3002")),(0,l.kt)("alert",{type:"info"},"\u201cDebug\u201d\u5f00\u5173\u662f\u7528\u4e8e\u8c03\u8bd5\u76ee\u7684\uff0c\u5982\u679c\u662f\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6253\u5f00\u8be5\u5f00\u5173\uff0c\u8c03\u8bd5\u5b8c\u6210\u540e\u8bf7\u4e0d\u8981\u5fd8\u8bb0\u628a\u5b83\u5173\u95ed\u3002"),(0,l.kt)("h3",{id:"mongodb"},"MongoDB"),(0,l.kt)("p",null,"\u8fde\u63a5\u6570\u636e\u5e93\u7684URL\uff1a\u5f53\u5728\u5f00\u53d1\u73af\u5883\u672a\u914d\u7f6e\u5bc6\u7801\u65f6\uff0c\u683c\u5f0f\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"mongodb://127.0.0.1:27017/steedos"),"\uff0c\u751f\u4ea7\u73af\u5883\u4f1a\u914d\u7f6e\u5bc6\u7801\uff0c\u5176\u683c\u5f0f\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"mongodb://userUsername:userPassword@127.0.0.1:27017/steedos?replicaSet=rs0")),(0,l.kt)("p",null,"\u5176\u4ed6\u8fde\u63a5\u9009\u9879\uff1a\u6309\u5b9e\u9645\u914d\u7f6e\u586b\u4e0a\u76f8\u5173\u5185\u5bb9\u5373\u53ef\u3002"),(0,l.kt)("h3",{id:"mysql"},"MySQL"),(0,l.kt)("p",null,"\u8fde\u63a5\u6570\u636e\u5e93\u7684URL\uff1a\u5176\u683c\u5f0f\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"mysql://userUsername:userPassword@192.168.0.33:13306/driver-test")),(0,l.kt)("p",null,"\u5176\u4ed6\u8fde\u63a5\u9009\u9879\uff1a\u6309\u5b9e\u9645\u914d\u7f6e\u586b\u4e0a\u76f8\u5173\u5185\u5bb9\u5373\u53ef\u3002"),(0,l.kt)("h3",{id:"sql-server"},"SQL Server"),(0,l.kt)("p",null,"\u8fde\u63a5\u6570\u636e\u5e93\u7684URL\uff1a\u5176\u683c\u5f0f\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"mssql://userUsername:userPassword@192.168.0.135:1433/driver-test")),(0,l.kt)("p",null,"\u5176\u4ed6\u8fde\u63a5\u9009\u9879\uff1a\u6309\u5b9e\u9645\u914d\u7f6e\u586b\u4e0a\u76f8\u5173\u5185\u5bb9\u5373\u53ef\u3002"),(0,l.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,l.kt)("p",null,"\u8fde\u63a5\u6570\u636e\u5e93\u7684URL\uff1a\u5176\u683c\u5f0f\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"postgresql://userUsername:userPassword@192.168.0.194:5432/test ")),(0,l.kt)("p",null,"\u5176\u4ed6\u8fde\u63a5\u9009\u9879\uff1a\u6309\u5b9e\u9645\u914d\u7f6e\u586b\u4e0a\u76f8\u5173\u5185\u5bb9\u5373\u53ef\u3002"),(0,l.kt)("h3",{id:"oracle"},"Oracle"),(0,l.kt)("p",null,"\u656c\u8bf7\u671f\u5f85\u3002\u3002\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e\u5916\u90e8\u6570\u636e\u6e90\u5bf9\u8c61"},"\u914d\u7f6e\u5916\u90e8\u6570\u636e\u6e90\u5bf9\u8c61"),(0,l.kt)("p",null,"\u5916\u90e8\u6570\u636e\u6e90\u914d\u7f6e\u597d\u540e\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u53ef\u4ee5\u5728\u8be5\u6570\u636e\u6e90\u8be6\u7ec6\u754c\u9762\u5e95\u90e8\u627e\u5230\u5bf9\u8c61\u5b50\u8868\uff0c\u7136\u540e\u6309\u7167\u8be5\u6570\u636e\u6e90\u4e0b\u8ba1\u5212\u8981\u5728Steedos\u4e0a\u8bbf\u95ee\u7684\u8868\u7684\u8868\u7ed3\u6784\u5206\u522b\u521b\u5efa\u5bf9\u5e94\u7684\u5bf9\u8c61\u53ca\u5b57\u6bb5\u3002"),(0,l.kt)("h3",{id:"\u914d\u7f6e\u5bf9\u8c61"},"\u914d\u7f6e\u5bf9\u8c61"),(0,l.kt)("p",null,"\u8ddf\u914d\u7f6e\u9ed8\u8ba4\u6570\u636e\u6e90\u4e0b\u7684\u5bf9\u8c61\u65b9\u5f0f\u662f\u4e00\u6837\u7684\uff0c\u4e0d\u8fc7\u5728\u5bf9\u8c61\u4e0a\u9700\u8981\u628a\u201c\u6570\u636e\u6e90\u201d\u9009\u9879\u914d\u7f6e\u4e3a\u6b63\u786e\u7684\u5916\u90e8\u6570\u636e\u6e90\uff0c\u800c\u4e0d\u662f\u9009\u62e9\u9ed8\u8ba4\u6570\u636e\u6e90\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\u9274\u4e8eSteedos\u7684\u5bf9\u8c61\u201cAPI\u540d\u79f0\u201d\u6709\u81ea\u5df1\u7684\u547d\u540d\u89c4\u8303\uff0c\u5f88\u53ef\u80fd\u65e0\u6cd5\u628a\u201cAPI\u540d\u79f0\u201d\u914d\u7f6e\u6210\u6570\u636e\u6e90\u4e0a\u5bf9\u5e94\u7684\u5b9e\u9645\u7684\u8868\u540d\u79f0\uff0c\u8fd9\u65f6\u53ef\u4ee5\u989d\u5916\u5728\u5bf9\u8c61\u7684\u201c\u5916\u90e8\u6570\u636e\u6e90\u201d\u680f\u4e0b\u7684\u201c\u6570\u636e\u5e93\u8868\u540d\u79f0\u201d\u5c5e\u6027\u6846\u4e2d\u8f93\u5165\u5b9e\u9645\u7684\u8868\u540d\u79f0\u6765\u914d\u7f6e\u8868\u540d\u3002"),(0,l.kt)("h3",{id:"\u914d\u7f6e\u5bf9\u8c61\u5b57\u6bb5"},"\u914d\u7f6e\u5bf9\u8c61\u5b57\u6bb5"),(0,l.kt)("p",null,"\u8ddf\u914d\u7f6e\u9ed8\u8ba4\u6570\u636e\u6e90\u4e0b\u7684\u5bf9\u8c61\u5b57\u6bb5\u65b9\u5f0f\u662f\u4e00\u6837\u7684\uff0c\u5728\u5bf9\u8c61\u8be6\u7ec6\u754c\u9762\u7684\u201c\u5bf9\u8c61\u5b57\u6bb5\u201d\u5b50\u8868\u4e0a\u6309\u8be5\u5bf9\u8c61\u7684\u5b9e\u9645\u5b57\u6bb5\u60c5\u51b5\u4f9d\u6b21\u65b0\u5efa\u76f8\u5173\u5b57\u6bb5\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u5176\u4e2d\u201c\u5916\u90e8\u6570\u636e\u6e90\u201d\u680f\u4e0b\u76f8\u5173\u5c5e\u6027\u9700\u8981\u914d\u7f6e\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u5b57\u6bb5\u540d\uff1a\u5f53\u8be5\u5b57\u6bb5\u4e0b\u7684\u201c\u5b57\u6bb5\u540d\u201d\u5c5e\u6027\u586b\u5199\u7684\u540d\u79f0\u4e0e\u8be5\u5916\u90e8\u6570\u636e\u6e90\u4e0a\u5bf9\u5e94\u7684\u8868\u4e2d\u5b57\u6bb5\u540d\u4e0d\u4e00\u81f4\u7684\u65f6\u5019\uff0c\u5fc5\u987b\u5728\u8fd9\u91cc\u586b\u5165\u5bf9\u5e94\u8868\u4e2d\u7684\u5b9e\u9645\u5b57\u6bb5\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u952e\uff1a\u5f53\u67d0\u4e2a\u5b57\u6bb5\u5728\u5176\u5916\u90e8\u6570\u636e\u6e90\u4e0a\u5bf9\u5e94\u7684\u8868\u4e2d\u88ab\u914d\u7f6e\u4e3a\u4e3b\u952e\u65f6\uff0c\u8fd9\u91cc\u9700\u8981\u5bf9\u5e94\u7684\u52fe\u9009\u4e3a\u4e3b\u952e\u5b57\u6bb5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u589e\uff1a\u5f53\u67d0\u4e2a\u5b57\u6bb5\u5728\u5176\u5916\u90e8\u6570\u636e\u6e90\u4e0a\u5bf9\u5e94\u7684\u8868\u4e2d\u88ab\u914d\u7f6e\u4e3a\u81ea\u589e\u5b57\u6bb5\u65f6\uff0c\u8fd9\u91cc\u9700\u8981\u5bf9\u5e94\u7684\u52fe\u9009\u4e3a\u81ea\u589e\u5b57\u6bb5\u3002")),(0,l.kt)("alert",{type:"tip"},"\u5728Steedos\u4e2d\uff0c\u6240\u6709\u7684\u5916\u90e8\u6570\u636e\u6e90\u5bf9\u8c61\u90fd\u5fc5\u987b\u8981\u914d\u7f6e\u4e3b\u952e\u5b57\u6bb5\uff0c\u5426\u5219\u65e0\u6cd5\u542f\u7528\u8be5\u5bf9\u8c61\u3002"),(0,l.kt)("h3",{id:"\u542f\u7528\u5bf9\u8c61"},"\u542f\u7528\u5bf9\u8c61"),(0,l.kt)("p",null,"\u5728\u6309\u4e0a\u8ff0\u6b65\u9aa4\u914d\u7f6e\u597d\u5916\u90e8\u6570\u636e\u6e90\u5bf9\u8c61\u53ca\u5176\u5b57\u6bb5\u540e\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u518d\u6b21\u7f16\u8f91\u8be5\u5bf9\u8c61\uff0c\u628a\u5176\u4e2d\u7684\u201c\u542f\u7528\u201d\u52fe\u9009\u6846\u52fe\u9009\u4e0a\u7136\u540e\u4fdd\u5b58\u6765\u542f\u7528\u8be5\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u53ea\u6709\u542f\u7528\u6210\u529f\u7684\u5bf9\u8c61\u624d\u80fd\u6b63\u5e38\u52a0\u8f7d\u5230Steedos\uff0c\u5982\u679c\u60a8\u5728\u542f\u7528\u5bf9\u8c61\u65f6\u9047\u5230\u9519\u8bef\u63d0\u793a\uff0c\u8bf7\u6309\u76f8\u5173\u63d0\u793a\u4fee\u6b63\u8be5\u5bf9\u8c61\u6216\u5176\u5b57\u6bb5\u914d\u7f6e\u3002"),(0,l.kt)("h3",{id:"\u9884\u89c8\u6d4b\u8bd5"},"\u9884\u89c8\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u8ddf\u9ed8\u8ba4\u6570\u636e\u6e90\u4e0b\u7684\u5bf9\u8c61\u4e00\u6837\uff0c\u5916\u90e8\u6570\u636e\u6e90\u5bf9\u8c61\u542f\u7528\u6210\u529f\u540e\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u70b9\u51fb\u8be5\u5bf9\u8c61\u914d\u7f6e\u754c\u9762\u53f3\u4e0a\u89d2\u7684\u9884\u89c8\u6309\u94ae\u6765\u67e5\u770b\u548c\u6d4b\u8bd5\u8be5\u5bf9\u8c61\u7684\u76f8\u5173\u529f\u80fd\u3002"),(0,l.kt)("h2",{id:"\u5728\u5e94\u7528\u4e2d\u5c55\u793a\u5916\u90e8\u6570\u636e\u6e90\u5bf9\u8c61"},"\u5728\u5e94\u7528\u4e2d\u5c55\u793a\u5916\u90e8\u6570\u636e\u6e90\u5bf9\u8c61"),(0,l.kt)("p",null,"\u4e0e\u9ed8\u8ba4\u6570\u636e\u6e90\u4e0a\u7684\u5bf9\u8c61\u4e00\u6837\uff0c\u53ef\u4ee5\u628a\u5bf9\u8c61\u4f5c\u4e3a\u83dc\u5355\u52a0\u5230\u67d0\u4e2a\u5e94\u7528\u4e2d\uff0c\u6574\u4e2a\u914d\u7f6e\u8fc7\u7a0b\u53ca\u529f\u80fd\u4e0a\u5b8c\u5168\u6ca1\u6709\u4efb\u4f55\u533a\u522b\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u5728\u201c\u8bbe\u7f6e\u201d\u5e94\u7528\u4e2d\u8fdb\u5165\u201c\u7528\u6237\u754c\u9762\u2192\u9009\u9879\u5361\u201d\uff0c\u7136\u540e\u65b0\u5efa\u5bf9\u5e94\u7684\u9009\u9879\u5361\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a\u9009\u62e9\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u5176\u4ed6\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\uff1a\u4ece\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9\u8be5\u9009\u9879\u5361\u5173\u8054\u7684\u5916\u90e8\u6570\u636e\u6e90\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u663e\u793a\u5728\u624b\u673a\u83dc\u5355\u4e2d\uff1a\u9700\u8981\u663e\u793a\u5728\u624b\u673a\u83dc\u5355\u4e2d\u7684\u8bdd\u8bf7\u52fe\u9009\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u663e\u793a\u5728\u684c\u9762\u83dc\u5355\u4e2d\uff1a\u9700\u8981\u663e\u793a\u5728\u684c\u9762\u83dc\u5355\u4e2d\u7684\u8bdd\u8bf7\u52fe\u9009\u3002")),(0,l.kt)("p",null,"\u7136\u540e\u518d\u8fdb\u5165\u201c\u8bbe\u7f6e\u201d\u5e94\u7528\u7684\u201c\u5e94\u7528\u7a0b\u5e8f\u2192\u5e94\u7528\u7a0b\u5e8f\u201d\u754c\u9762\uff0c\u65b0\u5efa\u4e00\u4e2a\u65b0\u5e94\u7528\u6216\u8005\u9009\u62e9\u5df2\u6709\u5e94\u7528\uff0c\u7136\u540e\u5728\u5e94\u7528\u7684\u201c\u9009\u9879\u5361\u201d\u5c5e\u6027\u4e2d\u9009\u62e9\u521a\u8bbe\u7f6e\u7684\u51e0\u4e2a\u9009\u9879\u5361\u3002"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u5b8c\u6210\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u5728\u76f8\u5173\u5e94\u7528\u4e2d\u770b\u5230\u4e0a\u9762\u914d\u7f6e\u8fc7\u7684\u5916\u90e8\u6570\u636e\u6e90\u5bf9\u8c61\u4e86\u3002"))}m.isMDXComponent=!0}}]);