"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6088],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=n,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>h});var o=r(7294),n=r(6010),a=r(3438),i=r(9960),c=r(3919),s=r(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return o.createElement(i.Z,{href:t,className:(0,n.Z)("card padding--lg",l.cardContainer)},r)}function d(e){let{href:t,icon:r,title:a,description:i}=e;return o.createElement(u,{href:t},o.createElement("h2",{className:(0,n.Z)("text--truncate",l.cardTitle),title:a},r," ",a),i&&o.createElement("p",{className:(0,n.Z)("text--truncate",l.cardDescription),title:i},i))}function m(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?o.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,a.xz)(t.docId??void 0);return o.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(p,{item:t});case"category":return o.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,a.jA)();return o.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return o.createElement(y,e);const i=(0,a.MN)(t);return o.createElement("section",{className:(0,n.Z)("row",r)},i.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(f,{item:e})))))}},637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(7462),n=(r(7294),r(3905)),a=r(2991);const i={sidebar_position:1,sidebar_label:"Data Model and Management"},c="Set Up Your Data Your Way",s={unversionedId:"no-code/customize/README",id:"no-code/customize/README",title:"Set Up Your Data Your Way",description:"Optimize your Steedos data to fit the unique needs of your users. You can create your own objects with data that fits together in the ways that make the most sense for you.",source:"@site/docs/no-code/customize/README.md",sourceDirName:"no-code/customize",slug:"/no-code/customize/",permalink:"/no-code/customize/",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/no-code/customize/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Data Model and Management"},sidebar:"platform",previous:{title:"Tabs",permalink:"/no-code/application/tab"},next:{title:"Custom Objects",permalink:"/no-code/customize/object"}},l={},u=[{value:"Store Information That\u2019s Unique to Your Organization",id:"store-information-thats-unique-to-your-organization",level:2},{value:"Customize Fields",id:"customize-fields",level:2},{value:"Calculate Field Values with Formulas",id:"calculate-field-values-with-formulas",level:2}],d={toc:u},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"set-up-your-data-your-way"},"Set Up Your Data Your Way"),(0,n.kt)("p",null,"Optimize your Steedos data to fit the unique needs of your users. You can create your own objects with data that fits together in the ways that make the most sense for you."),(0,n.kt)("h2",{id:"store-information-thats-unique-to-your-organization"},"Store Information That\u2019s Unique to Your Organization"),(0,n.kt)("p",null,"Create custom objects to store information that\u2019s unique to your organization. "),(0,n.kt)("h2",{id:"customize-fields"},"Customize Fields"),(0,n.kt)("p",null,"Customize standard and custom fields to tailor your org to your own unique requirements."),(0,n.kt)("h2",{id:"calculate-field-values-with-formulas"},"Calculate Field Values with Formulas"),(0,n.kt)("p",null,"A formula is an algorithm that derives its value from other fields, expressions, or values. Formulas can help you automatically calculate the value of a field based on other fields."),(0,n.kt)(a.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);