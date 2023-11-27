"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6056],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?o.createElement(k,a(a({ref:t},p),{},{components:r})):o.createElement(k,a({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const l={},a="\u7b2c3\u8bfe: \u521b\u5efa\u81ea\u5b9a\u4e49\u5e94\u7528",i={unversionedId:"getting-started/tutorials/the-basics/app",id:"getting-started/tutorials/the-basics/app",title:"\u7b2c3\u8bfe: \u521b\u5efa\u81ea\u5b9a\u4e49\u5e94\u7528",description:"Steedos \u5141\u8bb8\u7528\u6237\u521b\u5efa\u81ea\u5b9a\u4e49\u5e94\u7528\u4ee5\u9002\u5e94\u4e0d\u540c\u7684\u4e1a\u52a1\u9700\u6c42\u3002\u81ea\u5b9a\u4e49\u5e94\u7528\u662f\u4e00\u7ec4\u903b\u8f91\u76f8\u5173\u7684\u5bf9\u8c61\u3001\u5b57\u6bb5\u3001\u529f\u80fd\u548c\u5e03\u5c40\u7684\u96c6\u5408\u3002\u672c\u6559\u7a0b\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u5728 Steedos \u4e2d\u521b\u5efa\u4e00\u4e2a Todos \u5e94\u7528\uff0c\u5e76\u5c06\u5176\u5173\u8054\u5230 Projects \u548c Todos \u5bf9\u8c61\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/getting-started/tutorials/the-basics/3.app.md",sourceDirName:"getting-started/tutorials/the-basics",slug:"/getting-started/tutorials/the-basics/app",permalink:"/zh-CN/getting-started/tutorials/the-basics/app",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/getting-started/tutorials/the-basics/3.app.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"platform",previous:{title:"\u7b2c2\u8bfe: \u5b9a\u4e49\u5bf9\u8c61\u5173\u7cfb",permalink:"/zh-CN/getting-started/tutorials/the-basics/relationship"},next:{title:"\u7b2c4\u8bfe: \u5de5\u4f5c\u6d41\u89c4\u5219",permalink:"/zh-CN/getting-started/tutorials/the-basics/workflow-rules"}},s={},c=[{value:"1. \u81ea\u5b9a\u4e49\u5e94\u7528\u7684\u6982\u5ff5",id:"1-\u81ea\u5b9a\u4e49\u5e94\u7528\u7684\u6982\u5ff5",level:2},{value:"2. \u89c4\u5212\u9879\u76ee\u7ba1\u7406\u5e94\u7528",id:"2-\u89c4\u5212\u9879\u76ee\u7ba1\u7406\u5e94\u7528",level:2},{value:"3. \u521b\u5efa Projects \u548c Todos \u5bf9\u8c61",id:"3-\u521b\u5efa-projects-\u548c-todos-\u5bf9\u8c61",level:2},{value:"4. \u5efa\u7acb\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u7cfb",id:"4-\u5efa\u7acb\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u7cfb",level:2},{value:"5. \u6dfb\u52a0\u9009\u9879\u5361",id:"5-\u6dfb\u52a0\u9009\u9879\u5361",level:2},{value:"\u914d\u7f6e\u9009\u9879\u5361",id:"\u914d\u7f6e\u9009\u9879\u5361",level:3},{value:"6. \u521b\u5efa Projects \u81ea\u5b9a\u4e49\u5e94\u7528",id:"6-\u521b\u5efa-projects-\u81ea\u5b9a\u4e49\u5e94\u7528",level:2},{value:"\u521b\u5efa\u5e94\u7528",id:"\u521b\u5efa\u5e94\u7528",level:3},{value:"7. \u8bbe\u7f6e\u5b89\u5168\u6027\u548c\u6743\u9650",id:"7-\u8bbe\u7f6e\u5b89\u5168\u6027\u548c\u6743\u9650",level:2},{value:"\u5b89\u5168\u6027",id:"\u5b89\u5168\u6027",level:3},{value:"8. \u6d4b\u8bd5\u5e94\u7528",id:"8-\u6d4b\u8bd5\u5e94\u7528",level:2},{value:"\u6d4b\u8bd5\u5e94\u7528",id:"\u6d4b\u8bd5\u5e94\u7528",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u7b2c3\u8bfe-\u521b\u5efa\u81ea\u5b9a\u4e49\u5e94\u7528"},"\u7b2c3\u8bfe: \u521b\u5efa\u81ea\u5b9a\u4e49\u5e94\u7528"),(0,n.kt)("p",null,"Steedos \u5141\u8bb8\u7528\u6237\u521b\u5efa\u81ea\u5b9a\u4e49\u5e94\u7528\u4ee5\u9002\u5e94\u4e0d\u540c\u7684\u4e1a\u52a1\u9700\u6c42\u3002\u81ea\u5b9a\u4e49\u5e94\u7528\u662f\u4e00\u7ec4\u903b\u8f91\u76f8\u5173\u7684\u5bf9\u8c61\u3001\u5b57\u6bb5\u3001\u529f\u80fd\u548c\u5e03\u5c40\u7684\u96c6\u5408\u3002\u672c\u6559\u7a0b\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u5728 Steedos \u4e2d\u521b\u5efa\u4e00\u4e2a Todos \u5e94\u7528\uff0c\u5e76\u5c06\u5176\u5173\u8054\u5230 Projects \u548c Todos \u5bf9\u8c61\u3002"),(0,n.kt)("h2",{id:"1-\u81ea\u5b9a\u4e49\u5e94\u7528\u7684\u6982\u5ff5"},"1. \u81ea\u5b9a\u4e49\u5e94\u7528\u7684\u6982\u5ff5"),(0,n.kt)("p",null,"\u5728 Steedos \u4e2d\uff0c\u81ea\u5b9a\u4e49\u5e94\u7528\u662f\u901a\u8fc7\u7ec4\u5408\u4e0d\u540c\u7684\u6807\u51c6\u6216\u81ea\u5b9a\u4e49\u5bf9\u8c61\u3001\u5b57\u6bb5\u3001\u62a5\u544a\u3001\u4eea\u8868\u677f\u548c\u5176\u4ed6\u5143\u7d20\u6765\u6784\u5efa\u7684\u3002\u5b83\u4eec\u4e3a\u7279\u5b9a\u7684\u4e1a\u52a1\u6d41\u7a0b\u63d0\u4f9b\u5b9a\u5236\u5316\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,n.kt)("h2",{id:"2-\u89c4\u5212\u9879\u76ee\u7ba1\u7406\u5e94\u7528"},"2. \u89c4\u5212\u9879\u76ee\u7ba1\u7406\u5e94\u7528"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u89c4\u5212\u60a8\u7684\u9879\u76ee\u7ba1\u7406\u5e94\u7528\u3002\u786e\u5b9a\u9700\u8981\u54ea\u4e9b\u5bf9\u8c61\u3001\u5b57\u6bb5\u3001\u62a5\u544a\u548c\u4eea\u8868\u677f\u3002\u5728\u6211\u4eec\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u4e24\u4e2a\u4e3b\u8981\u5bf9\u8c61\uff1aProjects \u548c Todos\u3002"),(0,n.kt)("h2",{id:"3-\u521b\u5efa-projects-\u548c-todos-\u5bf9\u8c61"},"3. \u521b\u5efa Projects \u548c Todos \u5bf9\u8c61"),(0,n.kt)("p",null,"\u5982\u4e4b\u524d\u6559\u7a0b\u6240\u8ff0\uff0c\u521b\u5efa Projects \u548c Todos \u5bf9\u8c61\uff0c\u5e76\u4e3a\u5b83\u4eec\u6dfb\u52a0\u5fc5\u8981\u7684\u5b57\u6bb5\u3002"),(0,n.kt)("h2",{id:"4-\u5efa\u7acb\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u7cfb"},"4. \u5efa\u7acb\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u7cfb"),(0,n.kt)("p",null,"\u4f7f\u7528\u67e5\u627e\u6216\u4e3b\u8868-\u5b50\u8868\u5173\u7cfb\u5c06 Todos \u5bf9\u8c61\u5173\u8054\u5230 Projects \u5bf9\u8c61\u3002\u8fd9\u6837\uff0c\u6bcf\u4e2a Todo \u90fd\u53ef\u4ee5\u5173\u8054\u5230\u7279\u5b9a\u7684\u9879\u76ee\u3002"),(0,n.kt)("h2",{id:"5-\u6dfb\u52a0\u9009\u9879\u5361"},"5. \u6dfb\u52a0\u9009\u9879\u5361"),(0,n.kt)("p",null,"\u4e3a\u60a8\u7684\u5e94\u7528\u521b\u5efa\u4e13\u5c5e\u9009\u9879\u5361\uff0c\u4ee5\u4fbf\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u5bfc\u822a\u3002"),(0,n.kt)("h3",{id:"\u914d\u7f6e\u9009\u9879\u5361"},"\u914d\u7f6e\u9009\u9879\u5361"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728\u8bbe\u7f6e\u4e2d\uff0c\u9009\u62e9\u201c\u9009\u9879\u5361\u201d\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4e3a Projects \u548c Todos \u6bcf\u4e2a\u5bf9\u8c61\u6dfb\u52a0\u4e00\u4e2a\u9009\u9879\u5361\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5b9a\u5236\u9009\u9879\u5361\u7684\u6807\u7b7e\u548c\u56fe\u6807\uff0c\u786e\u4fdd\u5b83\u4eec\u76f4\u89c2\u4e14\u6613\u4e8e\u7406\u89e3\u3002")),(0,n.kt)("h2",{id:"6-\u521b\u5efa-projects-\u81ea\u5b9a\u4e49\u5e94\u7528"},"6. \u521b\u5efa Projects \u81ea\u5b9a\u4e49\u5e94\u7528"),(0,n.kt)("p",null,"\u8fdb\u5165 Steedos \u8bbe\u7f6e\uff0c\u9009\u62e9\u201c\u5e94\u7528\u7a0b\u5e8f\u201d\u5e76\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u81ea\u5b9a\u4e49\u5e94\u7528\u3002"),(0,n.kt)("h3",{id:"\u521b\u5efa\u5e94\u7528"},"\u521b\u5efa\u5e94\u7528"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728\u201c\u5e94\u7528\u7a0b\u5e8f\u201d\u4e2d\uff0c\u9009\u62e9\u201c\u65b0\u5efa\u201d\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u81ea\u5b9a\u4e49\u5e94\u7528\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u547d\u540d\u60a8\u7684\u5e94\u7528\uff08\u4f8b\u5982\uff0c\u201cTodos\u201d\uff09\u5e76\u63d0\u4f9b\u63cf\u8ff0\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5e94\u7528\u7684\u4e3b\u56fe\u6807\u548c\u989c\u8272\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e4b\u524d\u521b\u5efa\u7684 Projects \u548c Todos \u9009\u9879\u5361\u4f5c\u4e3a\u5e94\u7528\u7684\u4e00\u90e8\u5206\u3002")),(0,n.kt)("h2",{id:"7-\u8bbe\u7f6e\u5b89\u5168\u6027\u548c\u6743\u9650"},"7. \u8bbe\u7f6e\u5b89\u5168\u6027\u548c\u6743\u9650"),(0,n.kt)("p",null,"\u786e\u4fdd\u6b63\u786e\u914d\u7f6e\u5e94\u7528\u7684\u5b89\u5168\u6027\u548c\u6743\u9650\uff0c\u4ee5\u4fbf\u4e0d\u540c\u7684\u7528\u6237\u6839\u636e\u4ed6\u4eec\u7684\u89d2\u8272\u8bbf\u95ee\u5e94\u7528\u3002"),(0,n.kt)("h3",{id:"\u5b89\u5168\u6027"},"\u5b89\u5168\u6027"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728\u201c\u7b80\u6863 & \u6743\u9650\u96c6\u201d\u4e2d\uff0c\u4e3a\u4e0d\u540c\u7684\u7b80\u6863\u8272\u548c\u6743\u9650\u96c6\u8bbe\u7f6e\u5e94\u7528\u8bbf\u95ee\u6743\u9650\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u53ea\u6709\u6388\u6743\u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u654f\u611f\u6570\u636e\u3002")),(0,n.kt)("h2",{id:"8-\u6d4b\u8bd5\u5e94\u7528"},"8. \u6d4b\u8bd5\u5e94\u7528"),(0,n.kt)("p",null,"\u5728\u90e8\u7f72\u5e94\u7528\u4e4b\u524d\uff0c\u8fdb\u884c\u5168\u9762\u7684\u6d4b\u8bd5\u4ee5\u786e\u4fdd\u4e00\u5207\u8fd0\u884c\u987a\u7545\u3002"),(0,n.kt)("h3",{id:"\u6d4b\u8bd5\u5e94\u7528"},"\u6d4b\u8bd5\u5e94\u7528"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u548c\u4fee\u6539 Projects \u548c Todos \u8bb0\u5f55\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u62a5\u544a\u548c\u4eea\u8868\u677f\u7684\u51c6\u786e\u6027\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u7528\u6237\u53cd\u9988\uff0c\u5e76\u6839\u636e\u9700\u8981\u8fdb\u884c\u8c03\u6574\u3002")),(0,n.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,n.kt)("p",null,"\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 Projects \u5e94\u7528\uff0c\u60a8\u53ef\u4ee5\u6709\u6548\u5730\u5229\u7528 Steedos \u7684\u5f3a\u5927\u529f\u80fd\u6765\u7ba1\u7406\u9879\u76ee\u548c\u76f8\u5173\u7684\u5f85\u529e\u4e8b\u9879\u3002\u81ea\u5b9a\u4e49\u5e94\u7528\u4e0d\u4ec5\u63d0\u9ad8\u4e86\u6570\u636e\u7ba1\u7406\u7684\u6548\u7387\uff0c\u8fd8\u901a\u8fc7\u63d0\u4f9b\u5b9a\u5236\u5316\u7684\u5de5\u5177\u548c\u89c6\u56fe\uff0c\u4f18\u5316\u4e86\u7528\u6237\u7684\u5de5\u4f5c\u6d41\u7a0b\u3002\u968f\u7740\u4e1a\u52a1\u7684\u53d1\u5c55\uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u6269\u5c55\u548c\u5b8c\u5584\u5e94\u7528\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u65ad\u53d8\u5316\u7684\u9700\u6c42\u3002"))}d.isMDXComponent=!0}}]);