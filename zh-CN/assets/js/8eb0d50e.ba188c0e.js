"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1030],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(r),p=o,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||c;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),o=r(6010),c=r(3438),i=r(9960),a=r(3919),l=r(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},r)}function m(e){let{href:t,icon:r,title:c,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:c},r," ",c),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:i},i))}function d(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const i=(0,c.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},7584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),c=r(2991);const i={},a="\u4f7f\u7528\u516c\u5f0f\u8ba1\u7b97\u5b57\u6bb5\u503c",l={unversionedId:"no-code/customize/formula/README",id:"no-code/customize/formula/README",title:"\u4f7f\u7528\u516c\u5f0f\u8ba1\u7b97\u5b57\u6bb5\u503c",description:"\u672c\u90e8\u5206\u91cd\u70b9\u4ecb\u7ecd\u516c\u5f0f\u5b57\u6bb5\u7684\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/no-code/customize/formula/README.md",sourceDirName:"no-code/customize/formula",slug:"/no-code/customize/formula/",permalink:"/zh-CN/no-code/customize/formula/",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/no-code/customize/formula/README.md",tags:[],version:"current",frontMatter:{},sidebar:"platform",previous:{title:"\u5bf9\u8c61\u5173\u7cfb\u5b57\u6bb5",permalink:"/zh-CN/no-code/customize/fields/relationship"},next:{title:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u516c\u5f0f",permalink:"/zh-CN/no-code/customize/formula/overview"}},s={},u=[],m={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f7f\u7528\u516c\u5f0f\u8ba1\u7b97\u5b57\u6bb5\u503c"},"\u4f7f\u7528\u516c\u5f0f\u8ba1\u7b97\u5b57\u6bb5\u503c"),(0,o.kt)("p",null,"\u672c\u90e8\u5206\u91cd\u70b9\u4ecb\u7ecd\u516c\u5f0f\u5b57\u6bb5\u7684\u4f7f\u7528\u3002"),(0,o.kt)(c.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);