"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||r;return n?l.createElement(k,i(i({ref:t},s),{},{components:n})):l.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const r={},i="\u5217\u8868\u89c6\u56fe",p={unversionedId:"no-code/customize/listview",id:"no-code/customize/listview",title:"\u5217\u8868\u89c6\u56fe",description:"\u5217\u8868\u89c6\u56fe\u662f\u7528\u6765\u5b9a\u4e49\u524d\u53f0\u6570\u636e\u5217\u8868\u5c55\u793a\u7684\u6570\u636e\uff0c\u60a8\u53ef\u4ee5\u81ea\u5b9a\u4e49\u9700\u8981\u663e\u793a\u7684\u5b57\u6bb5\uff0c\u4ece\u4e0d\u540c\u7684\u7ef4\u5ea6\u5b9a\u4e49\u89c6\u56fe\u5c55\u793a\u4e0d\u4e00\u6837\u7684\u6570\u636e\uff0c\u8bbe\u5b9a\u7b5b\u9009\u6761\u4ef6\u548c\u6392\u5e8f\u89c4\u5219\u7b49\u53c2\u6570\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/no-code/customize/listview.md",sourceDirName:"no-code/customize",slug:"/no-code/customize/listview",permalink:"/zh-CN/no-code/customize/listview",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/no-code/customize/listview.md",tags:[],version:"current",frontMatter:{},sidebar:"platform",previous:{title:"\u5916\u90e8\u6570\u636e\u6e90",permalink:"/zh-CN/no-code/customize/external-datasources"},next:{title:"\u9875\u9762\u5e03\u5c40",permalink:"/zh-CN/no-code/customize/page-layout"}},o={},u=[{value:"\u5982\u4f55\u521b\u5efa\u5217\u8868\u89c6\u56fe",id:"\u5982\u4f55\u521b\u5efa\u5217\u8868\u89c6\u56fe",level:2},{value:"\u8c03\u6574\u663e\u793a\u7684\u5217",id:"\u8c03\u6574\u663e\u793a\u7684\u5217",level:3},{value:"\u8c03\u6574\u9ed8\u8ba4\u8fc7\u6ee4\u5b57\u6bb5",id:"\u8c03\u6574\u9ed8\u8ba4\u8fc7\u6ee4\u5b57\u6bb5",level:3},{value:"\u8c03\u6574\u9ed8\u8ba4\u6392\u5e8f\u89c4\u5219",id:"\u8c03\u6574\u9ed8\u8ba4\u6392\u5e8f\u89c4\u5219",level:3},{value:"\u8c03\u6574\u624b\u673a\u7aef\u663e\u793a\u7684\u5217",id:"\u8c03\u6574\u624b\u673a\u7aef\u663e\u793a\u7684\u5217",level:3},{value:"\u5982\u4f55\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6",id:"\u5982\u4f55\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6",level:3},{value:"\u5217\u8868\u89c6\u56fe\u5143\u6570\u636e",id:"\u5217\u8868\u89c6\u56fe\u5143\u6570\u636e",level:2},{value:"\u5b9a\u4e49\u5217\u8868\u89c6\u56fe",id:"\u5b9a\u4e49\u5217\u8868\u89c6\u56fe",level:3},{value:"\u8fc7\u6ee4\u6761\u4ef6",id:"\u8fc7\u6ee4\u6761\u4ef6",level:3},{value:"\u65e5\u5386\u89c6\u56fe",id:"\u65e5\u5386\u89c6\u56fe",level:2},{value:"\u57fa\u672c\u529f\u80fd",id:"\u57fa\u672c\u529f\u80fd",level:3},{value:"\u89c6\u56fe\u6a21\u5f0f",id:"\u89c6\u56fe\u6a21\u5f0f",level:3},{value:"\u8fc7\u6ee4\u6761\u4ef6",id:"\u8fc7\u6ee4\u6761\u4ef6-1",level:3},{value:"\u5206\u7ec4",id:"\u5206\u7ec4",level:3}],s={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5217\u8868\u89c6\u56fe"},"\u5217\u8868\u89c6\u56fe"),(0,a.kt)("p",null,"\u5217\u8868\u89c6\u56fe\u662f\u7528\u6765\u5b9a\u4e49\u524d\u53f0\u6570\u636e\u5217\u8868\u5c55\u793a\u7684\u6570\u636e\uff0c\u60a8\u53ef\u4ee5\u81ea\u5b9a\u4e49\u9700\u8981\u663e\u793a\u7684\u5b57\u6bb5\uff0c\u4ece\u4e0d\u540c\u7684\u7ef4\u5ea6\u5b9a\u4e49\u89c6\u56fe\u5c55\u793a\u4e0d\u4e00\u6837\u7684\u6570\u636e\uff0c\u8bbe\u5b9a\u7b5b\u9009\u6761\u4ef6\u548c\u6392\u5e8f\u89c4\u5219\u7b49\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\u201c\u62a5\u4ef7(offer)\u201d\u5bf9\u8c61\uff0c\u53ef\u4ee5\u5b9a\u4e49\u6240\u6709\u62a5\u4ef7\u3001\u6211\u7684\u62a5\u4ef7\u7b49\u591a\u4e2a\u89c6\u56fe\u3002 \u7528\u6237\u5728\u754c\u9762\u4e0a\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5feb\u6377\u7684\u5207\u6362\u5217\u8868\u89c6\u56fe\u3001\u6dfb\u52a0\u7b5b\u9009\u6761\u4ef6\u3001\u67e5\u627e\u6570\u636e\u3001\u65b0\u5efa\u89c6\u56fe\u7b49\u7b49\u3002"),(0,a.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa\u5217\u8868\u89c6\u56fe"},"\u5982\u4f55\u521b\u5efa\u5217\u8868\u89c6\u56fe"),(0,a.kt)("p",null,"\u65b0\u5efa\u7684\u5bf9\u8c61\u9ed8\u8ba4\u6709\u4e24\u4e2a\u5217\u8868\u89c6\u56fe\uff0c\u5206\u522b\u662f\uff1a\u6240\u6709\u548c\u6700\u8fd1\u67e5\u770b\u3002\u9ed8\u8ba4\u5c55\u793a\u7684\u6570\u636e\u53ea\u6709\u201c\u540d\u79f0\u201d\u4e00\u4e2a\u5b57\u6bb5\u3002\u5f53\u7528\u6237\u9700\u8981\u6dfb\u52a0\u65b0\u89c6\u56fe\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u8fdb\u5165\u5bf9\u8c61\u8be6\u60c5\u754c\u9762\u627e\u5230\u201c\u5217\u8868\u89c6\u56fe\u201d--\x3e\u201c\u65b0\u5efa\u201d\u5f39\u51fa\u201c\u65b0\u5efa \u5217\u8868\u89c6\u56fe\u201d\u7a97\u53e3\u3002\u586b\u5199\u5fc5\u586b\u9879\u663e\u793a\u540d\u79f0\u201c\u6240\u6709\u62a5\u4ef7\u201d\u3001API\u540d\u79f0\u201coffer_view\u201d\u3001\u5bf9\u8c61\u201c\u62a5\u4ef7\u201d\u3001\u8fc7\u6ee4\u8303\u56f4\u201c\u5de5\u4f5c\u533a\u201d\u3001\u5e76\u628a\u9700\u8981\u663e\u793a\u7684\u5217\u6dfb\u52a0\u4e0a\u53bb\uff0c\u8bbe\u7f6e\u5b83\u7684\u5bbd\u5ea6\u548c\u662f\u5426\u6362\u884c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u663e\u793a\u540d\u79f0"),"\uff1a\u6700\u7ec8\u89c6\u56fe\u5728\u754c\u9762\u4e2d\u5c55\u793a\u7684\u540d\u79f0\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"API\u540d\u79f0"),"\uff1a\u8be5\u540d\u79f0\u4f5c\u4e3aAPI\u540d\u79f0\u662f\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u53ea\u80fd\u5305\u542b\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\uff0c\u5fc5\u987b\u4ee5\u5b57\u6bcd\u5f00\u5934\uff0c\u4e0d\u80fd\u4ee5\u4e0b\u5212\u7ebf\u5b57\u7b26\u7ed3\u5c3e\u6216\u5305\u542b\u4e24\u4e2a\u8fde\u7eed\u7684\u4e0b\u5212\u7ebf\u5b57\u7b26\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5bf9\u8c61"),"\uff1a\u8be5\u89c6\u56fe\u6240\u5c5e\u7684\u5bf9\u8c61\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u5bf9\u8c61\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8fc7\u6ee4\u8303\u56f4"),"\uff1a\u6709\u201c\u5de5\u4f5c\u533a\u201d\u548c\u201c\u6211\u7684\u201d\u4e24\u4e2a\u8303\u56f4\u4f9b\u7528\u6237\u9009\u62e9\uff0c\u9ed8\u8ba4\u4e3a\u201c\u5de5\u4f5c\u533a\u201d\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u8c03\u6574\u4fee\u6539\u4e3a\u201c\u6211\u7684\u201d\uff0c\u4e24\u8005\u7684\u533a\u522b\u5728\u4e8e\u201c\u5de5\u4f5c\u533a\u201d\u4ee5\u5f53\u524d\u6574\u4e2a\u5de5\u4f5c\u533a\u4f5c\u4e3a\u6570\u636e\u67e5\u627e\u8303\u56f4\uff0c\u800c\u201c\u6211\u7684\u201d\u5219\u53ea\u663e\u793aowner\u4e3a\u5f53\u524d\u767b\u5f55\u7528\u6237\u7684\u76f8\u5173\u6570\u636e\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u663e\u793a\u6761\u76ee\u6570"),"\uff1a\u5728\u89c6\u56fe\u540d\u79f0\u53f3\u4fa7\u663e\u793a\u8be5\u89c6\u56fe\u4e00\u5171\u6709\u591a\u5c11\u6761\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u663e\u793a\u7684\u5217"),"\uff1a\u9009\u62e9\u60a8\u9700\u8981\u5c55\u793a\u7684\u5b57\u6bb5\uff0c\u5e76\u8bbe\u7f6e\u5b83\u7684\u5bbd\u5ea6\u548c\u662f\u5426\u6362\u884c\uff0c\u70b9\u51fb\u4e0b\u65b9\u7684\u201c\u65b0\u589e\u4e00\u884c\u201d\u53ef\u4ee5\u6dfb\u52a0\u65b0\u7684\u5b57\u6bb5\uff0c\u82e5\u6ca1\u6709\u52fe\u9009 \u201c\u662f\u5426\u6362\u884c\u201d\uff0c\u8868\u683c\u4e2d\u6587\u5b57\u5c06\u59cb\u7ec8\u663e\u793a\u4e3a\u5355\u884c\u4e14\u8d85\u51fa\u90e8\u5206\u663e\u793a\u7701\u7565\u53f7\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u8fc7\u6ee4\u7684\u5b57\u6bb5"),"\uff1a\u8fc7\u6ee4\u7528\u6237\u9009\u62e9\u7684\u5b57\u6bb5\u4e0d\u663e\u793a\u5728\u89c6\u56fe\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u6392\u5e8f\u89c4\u5219"),"\uff1a\u9009\u62e9\u60a8\u9700\u8981\u6392\u5e8f\u7684\u5b57\u6bb5\uff0c\u5e76\u6307\u5b9a\u6392\u5e8f\u65b9\u5f0f\uff08\u6b63\u5e8f\u6216\u8005\u5012\u5e8f\uff09\uff0c\u5982\u679c\u672a\u914d\u7f6e\uff0c\u5c06\u6309\u521b\u5efa\u65f6\u95f4\u5012\u5e8f\u6765\u663e\u793a\u5217\u8868\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u624b\u673a\u7aef\u663e\u793a\u7684\u5217"),"\uff1a\u9009\u62e9\u624b\u673a\u7aef\u9700\u8981\u5c55\u793a\u7684\u5b57\u6bb5\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6392\u5e8f\u53f7"),"\uff1a\u5404\u4e2a\u5217\u8868\u89c6\u56fe\u6309\u6392\u5e8f\u53f7\u7531\u5c0f\u5230\u5927\u663e\u793a\u5728\u5217\u8868\u5de6\u4e0a\u89d2\u7684\u5f39\u7a97\u4e2d\u3002")),(0,a.kt)("p",null,"\u201d\u6240\u6709\u201c\u5217\u8868\u89c6\u56fe\u5bf9\u5e94\u7684API\u540d\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"all")," , \u8be5\u89c6\u56fe\u4fd7\u79f0 ",(0,a.kt)("inlineCode",{parentName:"p"},"all \u89c6\u56fe")," \u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u6211\u4eec\u8fdb\u5165\u5bf9\u8c61\u5217\u8868\u9875\u65f6\uff0c\u5982\u679c\u6ca1\u6709\u65b0\u589e\u5217\u8868\u89c6\u56fe\u6216\u8005\u4fee\u6539\u5df2\u6709\u5217\u8868\u89c6\u56fe\u7684\u6392\u5e8f\u53f7, \u9ed8\u8ba4\u663e\u793a\u7684\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"all \u89c6\u56fe"),"\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u4e00\u4e2a\u201d\u76f8\u5173\u8868\u201c\u7c7b\u578b\u5b57\u6bb5\u5c55\u793a\u9009\u9879\u7684\u6a21\u5f0f\u662f\u5f39\u51fa\u7a97\u53e3\u67e5\u627e\u6a21\u5f0f\uff0c\u5f39\u51fa\u7a97\u53e3\u4e2d\u7684\u5217\u8868\u89c6\u56fe\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"all \u89c6\u56fe")," \uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u7ed9\u5bf9\u8c61\u914d\u7f6e\u4e86\u4e00\u4e2a\u201d\u4e3b\u8868\u5b50\u8868\u201c\u7c7b\u578b\u5b57\u6bb5\uff0c\u8be5\u5bf9\u8c61\u8be6\u7ec6\u8bb0\u5f55\u9875\u4e2d\u7684\u76f8\u5173\u5b50\u8868\u663e\u793a\u7684\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"all \u89c6\u56fe")," ,  \u5982\u679c\u7ed9\u5bf9\u8c61",(0,a.kt)("a",{parentName:"li",href:"page-layout"},"\u914d\u7f6e\u9875\u9762\u5e03\u5c40"),"\uff0c\u53ef\u4ee5\u65b0\u5efa\u4e00\u4e2a\u5f53\u524d\u76f8\u5173\u5b50\u8868\u663e\u793a\u7684\u5217\u8868\u89c6\u56fe\u3002")),(0,a.kt)("h3",{id:"\u8c03\u6574\u663e\u793a\u7684\u5217"},"\u8c03\u6574\u663e\u793a\u7684\u5217"),(0,a.kt)("p",null,"\u53ef\u4ee5\u8c03\u6574\u5728\u5217\u8868\u89c6\u56fe\u4e2d\u663e\u793a\u7684\u5217\u5b57\u6bb5\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u663e\u793a\u67d0\u5b57\u6bb5")),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u663e\u793a\u67d0\u5b57\u6bb5\uff0c\u5220\u9664\u8fd9\u4e00\u663e\u793a\u7684\u5217\u5373\u53ef\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8c03\u6574\u5b57\u6bb5\u663e\u793a\u987a\u5e8f")),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u8981\u8c03\u6574\u5217\u5b57\u6bb5\u7684\u663e\u793a\u5148\u540e\u987a\u5e8f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u589e\u52a0\u663e\u793a\u5b57\u6bb5")),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u8981\u589e\u52a0\u663e\u793a\u67d0\u5b57\u6bb5\uff0c\u5219\u70b9\u51fb\u201c+ \u65b0\u5efa\u201d\uff0c\u5e76\u5728\u65b0\u589e\u7684\u8fd9\u4e00\u884c\u9009\u62e9\u5b57\u6bb5\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5bbd\u5ea6\uff0c\u4e5f\u53ef\u4ee5\u62d6\u52a8\u8c03\u6574\u663e\u793a\u987a\u5e8f\u3002"),(0,a.kt)("h3",{id:"\u8c03\u6574\u9ed8\u8ba4\u8fc7\u6ee4\u5b57\u6bb5"},"\u8c03\u6574\u9ed8\u8ba4\u8fc7\u6ee4\u5b57\u6bb5"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u8fc7\u6ee4\u5b57\u6bb5\uff0c\u662f\u6307\u5217\u8868\u89c6\u56fe\u53f3\u4fa7\u8fc7\u6ee4\u5668\u754c\u9762\u4e2d\u7684\u9ed8\u8ba4\u663e\u793a\u5b57\u6bb5\u3002\u5c06\u5e38\u7528\u4e8e\u8fc7\u6ee4\u6570\u636e\u7684\u5b57\u6bb5\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u8fc7\u6ee4\u5b57\u6bb5\u540e\uff0c\u7528\u6237\u5373\u53ef\u5728\u89c6\u56fe\u4e2d\u66f4\u65b9\u4fbf\u5730\u8fdb\u884c\u8fc7\u6ee4\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u9009\u62e9\u591a\u4e2a\u8fc7\u6ee4\u5b57\u6bb5\uff0c\u62d6\u62c9\u8c03\u6574\u663e\u793a\u7684\u6b21\u5e8f\u3002"),(0,a.kt)("h3",{id:"\u8c03\u6574\u9ed8\u8ba4\u6392\u5e8f\u89c4\u5219"},"\u8c03\u6574\u9ed8\u8ba4\u6392\u5e8f\u89c4\u5219"),(0,a.kt)("p",null,"\u53ef\u4ee5\u8bbe\u7f6e\u6309\u591a\u4e2a\u5b57\u6bb5\u7684\u6b63\u5e8f\u6216\u5012\u53d9\u663e\u793a\u5217\u8868\u89c6\u56fe\u4e2d\u7684\u6570\u636e\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\u9ed8\u8ba4\u6392\u5e8f\u89c4\u5219\uff0c\u5c06\u6309\u521b\u5efa\u65f6\u95f4\u5012\u5e8f\u6765\u663e\u793a\u5217\u8868\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u65b0\u5efa\u591a\u6761\u6392\u5e8f\u89c4\u5219\uff0c\u5e76\u9009\u62e9\u5b57\u6bb5\u5373\u6392\u5e8f\u65b9\u5f0f\u3002\u901a\u8fc7\u62d6\u62c9\u884c\uff0c\u8c03\u6574\u591a\u4e2a\u89c4\u5219\u7684\u5148\u540e\u987a\u5e8f\u3002"),(0,a.kt)("h3",{id:"\u8c03\u6574\u624b\u673a\u7aef\u663e\u793a\u7684\u5217"},"\u8c03\u6574\u624b\u673a\u7aef\u663e\u793a\u7684\u5217"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u7279\u522b\u8bbe\u7f6e\u624b\u673a\u7aef\u663e\u793a\u7684\u5217\uff0c\u5219\u5728Steedos\u7684\u624b\u673a\u7aef\uff0c\u4f1a\u9ed8\u8ba4\u663e\u793a\u201c\u663e\u793a\u7684\u5217\u201d\u4e2d\u6700\u524d\u9762\u76844\u4e2a\u5b57\u6bb5\u3002\u4e5f\u53ef\u4ee5\u81ea\u4e3b\u8bbe\u7f6e\uff0c\u6765\u8c03\u6574\u5728\u624b\u673a\u7aef\u4e0a\u9700\u8981\u663e\u793a\u7684\u5b57\u6bb5\u3002"),(0,a.kt)("h3",{id:"\u5982\u4f55\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6"},"\u5982\u4f55\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6"),(0,a.kt)("p",null," \u5217\u8868\u89c6\u56fe\u7684\u8fc7\u6ee4\u6761\u4ef6\u5e76\u4e0d\u662f\u5728\u540e\u53f0\u5bf9\u8c61\u8bbe\u7f6e\u4e2d\u914d\u7f6e\uff0c\u800c\u662f\u5728\u524d\u53f0\u7528\u6237\u754c\u9762\u7684\u5bf9\u8c61\u5217\u8868\u89c6\u56fe\u53f3\u4fa7\u7684\u8fc7\u6ee4\u5668\u4e2d\u914d\u7f6e\uff0c\u4e0a\u8ff0\u622a\u5c4f\u52a8\u753b\u63cf\u8ff0\u4e86\u7ed9\u201c\u4efb\u52a1\u201d\u5bf9\u8c61\u7684\u81ea\u5b9a\u4e49\u5217\u8868\u89c6\u56fe\u201c\u7d27\u6025\u4efb\u52a1\u201d\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6\u5e76\u4fdd\u5b58\u4e3a\u5217\u8868\u89c6\u56fe\u9ed8\u8ba4\u8fc7\u6ee4\u6761\u4ef6\u7684\u8fc7\u7a0b\u3002"),(0,a.kt)("h2",{id:"\u5217\u8868\u89c6\u56fe\u5143\u6570\u636e"},"\u5217\u8868\u89c6\u56fe\u5143\u6570\u636e"),(0,a.kt)("p",null,"\u53ef\u89c6\u5316\u754c\u9762\u521b\u5efa\u7684\u5143\u6570\u636e\uff0c\u53ef\u4ee5\u540c\u6b65\u4e3a\u6e90\u7801\u3002\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728\u9879\u76ee\u4e2d\u7528\u6e90\u7801\u5b9a\u4e49\u5217\u8868\u89c6\u56fe\u3002"),(0,a.kt)("h3",{id:"\u5b9a\u4e49\u5217\u8868\u89c6\u56fe"},"\u5b9a\u4e49\u5217\u8868\u89c6\u56fe"),(0,a.kt)("p",null,"\u8981\u7528\u4ee3\u7801\u5f00\u53d1\u5bf9\u8c61\u4e0a\u81ea\u5b9a\u4e49\u5217\u8868\u89c6\u56fe\uff0c\u9700\u8981\u5148\u5728\u5bf9\u8c61\u5143\u6570\u636e\u6587\u4ef6\u5939\u4e2d\u65b0\u5efa listviews \u6587\u4ef6\u5939\u7528\u4e8e\u653e\u7f6e\u5217\u8868\u89c6\u56fe\u76f8\u5173\u5143\u6570\u636e\uff0c\u7136\u540e\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5217\u8868\u89c6\u56fe\u540d.listview.yml")," \u6587\u4ef6\u5e76\u8865\u5145\u5c5e\u6027\u5185\u5bb9\u3002\u4ee5\u4e0b\u793a\u4f8b\u63cf\u8ff0\u4e86\u7ed9\u4efb\u52a1\u5bf9\u8c61\u62d3\u5c55\u4e86\u4e00\u4e2a\u201d",(0,a.kt)("inlineCode",{parentName:"p"},"important_tasks"),"\u201c\u7684\u5217\u8868\u89c6\u56fe\u3002\u8be5\u5217\u8868\u89c6\u56fe\u53ea\u51fa\u793a\u88ab\u6807\u8bb0\u4e86\u201d\u91cd\u8981\u201c\u7684\u4efb\u52a1\u3002"),(0,a.kt)("p",null,"\u6587\u4ef6\u8def\u5f84\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"/steedos-packages/app-extend/main/default/objects/tasks/listviews/important_tasks.listview.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: important_tasks\ncolumns:\n  - field: name\n  - field: assignees\n  - field: important_tasks\nfilter_scope: space\nlabel: \u91cd\u8981\u4efb\u52a1\nshared: true\n# filters: [["important_tasks","=",true]]\nfilters: !<tag:yaml.org,2002:js/function> |-\n  function (){\n      return [["important","=",true]];\n  }\nsort:\n  - field_name: \'due_date\'\n    order: desc\n')),(0,a.kt)("p",null,"\u793a\u4f8b\u4e2d\u5c5e\u6027\u542b\u4e49\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," API \u540d\u79f0\uff1b"),(0,a.kt)("li",{parentName:"ul"},"columns: ",(0,a.kt)("inlineCode",{parentName:"li"},"array")," \u5217\u8868\u663e\u793a\u7684\u5b57\u6bb5\uff1b"),(0,a.kt)("li",{parentName:"ul"},"filter_scope: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\u8fc7\u6ee4\u8303\u56f4\uff1b"),(0,a.kt)("li",{parentName:"ul"},"label: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"  \u89c6\u56fe\u663e\u793a\u540d\u79f0\uff1b"),(0,a.kt)("li",{parentName:"ul"},"shared: ",(0,a.kt)("inlineCode",{parentName:"li"},"Boolean")," \u662f\u5426\u5171\u4eab\uff1b"),(0,a.kt)("li",{parentName:"ul"},"filters:  ",(0,a.kt)("inlineCode",{parentName:"li"},"array\u3001function"),"  \u8fc7\u6ee4\u6761\u4ef6\uff1b"),(0,a.kt)("li",{parentName:"ul"},"sort: ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),"  \u6392\u5e8f\u3002")),(0,a.kt)("h3",{id:"\u8fc7\u6ee4\u6761\u4ef6"},"\u8fc7\u6ee4\u6761\u4ef6"),(0,a.kt)("p",null,"\u4e0a\u9762\u201c\u5982\u4f55\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6\u201d\u90e8\u5206\u63cf\u8ff0\u4e86\u5982\u4f55\u5728\u524d\u53f0\u754c\u9762\u7ed9\u4e00\u4e2a\u5217\u8868\u89c6\u56fe\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6\uff0c\u8fc7\u6ee4\u6761\u4ef6\u6dfb\u52a0\u597d\u540e\u53ef\u4ee5\u901a\u8fc7\u4ee3\u7801\u540c\u6b65\u5de5\u5177\u3002"),(0,a.kt)("p",null,"\u4ece\u754c\u9762\u4e0a\u540c\u6b65\u4e0b\u6765\u7684\u8fc7\u6ee4\u6761\u4ef6\u683c\u5f0f\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"filters:\n  - field: start__c\n    operation: between\n    value: this_month\n")),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5bf9\u8c61\u6570\u7ec4\uff0c\u5b83\u53ea\u80fd\u6709\u4e00\u5c42\u8fc7\u6ee4\u6761\u4ef6\uff0c\u65e0\u6cd5\u5b9e\u73b0\u590d\u6742\u7684\u8fc7\u6ee4\u6761\u4ef6\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u4fee\u6539\u540c\u6b65\u8fc7\u6765\u7684\u8fc7\u6ee4\u6761\u4ef6\u6765\u5b9e\u73b0\u590d\u6742\u7684\u8fc7\u6ee4\u529f\u80fd\uff0c\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728\u4ee3\u7801\u4e2d\u7ed9\u5217\u8868\u89c6\u56fe\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6\u3002"),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u8fc7\u6ee4\u6761\u4ef6\u6211\u4eec\u4e00\u822c\u5728\u4ee3\u7801\u4e2d\u53ef\u4ee5\u7b80\u5199\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'filters: [["start__c", "between", "this_month"]]\n')),(0,a.kt)("h2",{id:"\u65e5\u5386\u89c6\u56fe"},"\u65e5\u5386\u89c6\u56fe"),(0,a.kt)("p",null,"\u5217\u8868\u89c6\u56fe\u652f\u6301\u4ee5\u65e5\u5386\u7684\u5f62\u5f0f\u5c55\u793a\uff0c\u53ea\u8981\u5728\u5143\u6570\u636e\u4ee3\u7801\u4e2d\u628a\u5b83\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," \u5c5e\u6027\u5b9a\u4e49\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"calendar")," \u5373\u53ef\u88ab\u8bc6\u522b\u4e3a\u201c\u65e5\u5386\u89c6\u56fe\u201d\u3002"),(0,a.kt)("h3",{id:"\u57fa\u672c\u529f\u80fd"},"\u57fa\u672c\u529f\u80fd"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u57fa\u672c\u529f\u80fd\u7684\u65e5\u5386\u89c6\u56fe\u5143\u6570\u636e\u5b9a\u4e49\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: calendar\ntype: calendar\nfilter_scope: space\nlabel: \u65e5\u5386\u89c6\u56fe\noptions:\n  startDateExpr: start__c\n  endDateExpr: end__c\n  textExpr: name\n  allDayExpr: is_all_day__c\n  title:\n    - name\n    - start__c\n    - end__c\n  currentView: day\n  firstDayOfWeek: 1\n  startDayHour: 8\n  endDayHour: 18\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: \u53ea\u80fd\u914d\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"calendar")," \u624d\u80fd\u88ab\u8bc6\u522b\u4e3a\u65e5\u5386\u89c6\u56fe"),(0,a.kt)("li",{parentName:"ul"},"options: \u65e5\u5386\u89c6\u56fe\u76f8\u5173\u53c2\u6570\uff0c\u8be6\u60c5\u8bf7\u53c2\u9605\u5176\u5b98\u7f51\u6587\u6863 ",(0,a.kt)("a",{parentName:"li",href:"https://js.devexpress.com/Documentation/Guide/UI_Components/Scheduler/Getting_Started_with_Scheduler/"},"DevExtreme JavaScript Scheduler"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"startDateExpr: \u8d77\u59cb\u65f6\u95f4\u5b57\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"endDateExpr: \u7ed3\u675f\u65f6\u95f4\u5b57\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"textExpr: \u540d\u79f0\u5b57\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"allDayExpr: \u5168\u5929\u4e8b\u4ef6\u5b57\u6bb5\uff0c\u5fc5\u987b\u4e3aboolean\u7c7b\u578b\u5b57\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"title: \u9f20\u6807\u653e\u7f6e\u5728\u76f8\u5173\u4e8b\u4ef6\u533a\u57df\u5185\u65f6\u8981\u663e\u793a\u54ea\u4e9b\u5b57\u6bb5\u7684\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"currentView: \u65e5\u5386\u89c6\u56fe\u9ed8\u8ba4\u6253\u5f00\u54ea\u79cd\u6a21\u5f0f\u7684\u89c6\u56fe\uff0cday, week, month, agenda"),(0,a.kt)("li",{parentName:"ul"},"firstDayOfWeek: \u4e00\u5468\u7684\u7b2c\u4e00\u5929\uff0c0\u8868\u793a\u5468\u65e5\uff0c1\u8868\u793a\u5468\u4e00\n-startDayHour: \u65e5\u5386\u4ece\u51e0\u70b9\u5f00\u59cb\u663e\u793a\u4e00\u5929\u7684\u65f6\u95f4\u7ebf\n-endDayHour: \u65e5\u5386\u4ece\u51e0\u70b9\u7ed3\u675f\u663e\u793a\u4e00\u5929\u7684\u65f6\u95f4\u7ebf")))),(0,a.kt)("h3",{id:"\u89c6\u56fe\u6a21\u5f0f"},"\u89c6\u56fe\u6a21\u5f0f"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728options\u914d\u7f6e\u4e2d\u6307\u5b9aviews\u5c5e\u6027\u6307\u5b9a\u8981\u663e\u793a\u54ea\u4e9b\u65e5\u5386\u89c6\u56fe\u6a21\u5f0f\uff0c\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u89c6\u56fe\u6a21\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65e5 day\uff1a\u6309\u5929\u663e\u793a\u65e5\u5386\u9762\u677f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5468 week\uff1a \u6309\u5468\u663e\u793a\u65e5\u5386\u9762\u677f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6708 month\uff1a \u6309\u6708\u663e\u793a\u65e5\u5386\u9762\u677f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5217\u8868 agenda\uff1a\u663e\u793a\u4e3a\u65e5\u7a0b\u5217\u8868\u3002")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u914d\u7f6e\u9ed8\u8ba4\u663e\u793a\u5468\u6a21\u5f0f\u89c6\u56fe\uff0c\u53ea\u5141\u8bb8\u5728\u201c\u65e5\u201d\u548c\u201c\u5468\u201d\u4e24\u4e2a\u6a21\u5f0f\u4e2d\u5207\u6362\u89c6\u56fe\u6a21\u5f0f\uff0c\u4e0d\u663e\u793a\u201c\u6708\u201d\u548c\u201c\u5217\u8868\u201d\u6a21\u5f0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: calendar\ntype: calendar\nfilter_scope: space\nlabel: \u65e5\u5386\u89c6\u56fe\noptions:\n  currentView: week\n  views:\n    - day\n    - month\n")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u914d\u7f6e\u989d\u5916\u4e3a\u65e5\u548c\u5468\u6a21\u5f0f\u89c6\u56fe\u914d\u7f6e\u53c2\u6570\uff0c\u76f8\u5173\u5c5e\u6027\u8bf4\u660e\u8bf7\u53c2\u9605\u5176\u5b98\u7f51 ",(0,a.kt)("a",{parentName:"p",href:"https://js.devexpress.com/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/"},"Scheduler View Types"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: calendar\ntype: calendar\nfilter_scope: space\nlabel: \u65e5\u5386\u89c6\u56fe\noptions:\n  views:\n    - type: day\n      maxAppointmentsPerCell: unlimited\n    - type: week\n      maxAppointmentsPerCell: unlimited\n    - month\n    - agenda\n")),(0,a.kt)("h3",{id:"\u8fc7\u6ee4\u6761\u4ef6-1"},"\u8fc7\u6ee4\u6761\u4ef6"),(0,a.kt)("p",null,"\u65e5\u5386\u89c6\u56fe\u4e0d\u652f\u6301\u5728\u754c\u9762\u4e0a\u914d\u7f6e\u8fc7\u6ee4\u6761\u4ef6\uff0c\u4f46\u662f\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u914d\u7f6e\uff0c\u5176\u529f\u80fd\u53ca\u89c4\u8303\u4e0e\u666e\u901a\u5217\u8868\u89c6\u56fe\u662f\u4e00\u6837\u7684\u3002"),(0,a.kt)("p",null,"\u7ed9\u65e5\u5386\u89c6\u56fe\u914d\u7f6e\u4ee5\u4e0b\u8fc7\u6ee4\u6761\u4ef6\u53ef\u4ee5\u5728\u89c6\u56fe\u4e2d\u53ea\u663e\u793a\u5f53\u524d\u767b\u5f55\u7528\u6237\u81ea\u5df1\u521b\u5efa\u7684\u4e1a\u52a1\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"filters:\n  - - owner\n    - '='\n    - '{userId}'\n")),(0,a.kt)("h3",{id:"\u5206\u7ec4"},"\u5206\u7ec4"),(0,a.kt)("p",null,"\u65e5\u5386\u89c6\u56fe\u8fd8\u652f\u6301\u6309\u5206\u7ec4\u6765\u663e\u793a\u65e5\u5386\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u53c2\u9605\u5176\u5b98\u7f51 ",(0,a.kt)("a",{parentName:"p",href:"https://js.devexpress.com/Documentation/Guide/UI_Components/Scheduler/Resources/Group_Appointments_by_Resources/"},"Group Appointments by Resources")," \u67e5\u770b\u8be6\u7ec6\u529f\u80fd\u8bf4\u660e\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u5217\u8868\u89c6\u56fe\u5143\u6570\u636e\u914d\u7f6e\u5185\u5bb9\u6f14\u793a\u4e86\u5982\u4f55\u5728Steedos\u4e2d\u5b9e\u73b0\u6309\u201c\u4f1a\u8bae\u5ba4\u201d\u6765\u5206\u7ec4\u663e\u793a\u65e5\u5386\u9762\u677f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: calendar_view\ntype: calendar\nlabel: \u65e5\u5386\u89c6\u56fe\nfilter_scope: space\nsort:\n  - - created\n    - desc\nfilters:\n  - - owner \n    - = \n    - '{userId}'\n  - or \n  - - staff__c\n    - = \n    - '{userId}'\noptions:\n  startDateExpr: start__c\n  endDateExpr: end__c\n  textExpr: name\n  views:\n    - type: day\n      maxAppointmentsPerCell: unlimited\n      groups:\n        - _room\n    - type: week\n      maxAppointmentsPerCell: unlimited\n    - month\n    - agenda\n  title:\n    - name\n    - meeting_room__c\n    - start__c\n    - end__c\n  currentView: day\n  firstDayOfWeek: 1\n  startDayHour: 8\n  endDayHour: 18\n  resources:\n    - fieldExpr: _room\n      valueExpr: _id\n      displayExpr: name\n      label: \u4f1a\u8bae\u5ba4\n      dataSource:\n        store:\n          type: odata\n          version: 4\n          url: \"/api/v4/meeting_room__c?$orderby=name\"\n          withCredentials: false\n")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u51e0\u4e2a\u5c5e\u6027\u914d\u7f6e\u662f\u5206\u7ec4\u76f8\u5173\u914d\u7f6e\u7684\u91cd\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"options.views")," \u5c5e\u6027\u4e2d\u660e\u786e\u6807\u8bb0\u201c\u65e5\u201d\u89c6\u56fe\u6309\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"_room")," \u7684\u6570\u636e\u6e90\u6765\u5206\u7ec4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"options.resources")," \u5c5e\u6027\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"_room")," \u7684\u6570\u636e\u6e90\uff0c\u5e76\u4e14\u8be5\u6570\u636e\u6e90\u4eceSteedos\u6807\u51c6\u7684 OData API \u63a5\u53e3\u4e2d\u83b7\u53d6\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"options.title")," \u5c5e\u6027\u4e2d\u989d\u5916\u628a\u5f53\u524d\u5bf9\u8c61\u7684\u5206\u7ec4\u5173\u8054\u5b57\u6bb5 \u201d\u6240\u5c5e\u4f1a\u8bae\u5ba4 meeting_room__c\u201c \u663e\u793a\u5728\u6807\u9898\u4e0a\u3002")))}c.isMDXComponent=!0}}]);