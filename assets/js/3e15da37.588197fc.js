"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8377],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,p=m["".concat(l,".").concat(f)]||m[f]||d[f]||a;return r?n.createElement(p,i(i({ref:t},u),{},{components:r})):n.createElement(p,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),o=r(6010),a=r(3438),i=r(9960),c=r(3919),l=r(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},r)}function m(e){let{href:t,icon:r,title:a,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:a},r," ",a),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:i},i))}function d(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(p,{item:e})))))}},273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),a=r(2991);const i={},c="Calculate Field Values with Formulas",l={unversionedId:"no-code/customize/formula/README",id:"no-code/customize/formula/README",title:"Calculate Field Values with Formulas",description:"A formula is an algorithm that derives its value from other fields, expressions, or values. Formulas can help you automatically calculate the value of a field based on other fields.",source:"@site/docs/no-code/customize/formula/README.md",sourceDirName:"no-code/customize/formula",slug:"/no-code/customize/formula/",permalink:"/no-code/customize/formula/",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/no-code/customize/formula/README.md",tags:[],version:"current",frontMatter:{},sidebar:"platform",previous:{title:"Object Relationship Fields",permalink:"/no-code/customize/fields/relationship"},next:{title:"Formula Overview",permalink:"/no-code/customize/formula/overview"}},s={},u=[],m={toc:u},d="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"calculate-field-values-with-formulas"},"Calculate Field Values with Formulas"),(0,o.kt)("p",null,"A formula is an algorithm that derives its value from other fields, expressions, or values. Formulas can help you automatically calculate the value of a field based on other fields."),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);