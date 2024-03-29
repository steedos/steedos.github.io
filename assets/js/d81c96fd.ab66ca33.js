"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=p(n),u=r,f=l["".concat(c,".").concat(u)]||l[u]||d[u]||s;return n?o.createElement(f,a(a({ref:t},m),{},{components:n})):o.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const s={title:"Components Reference"},a=void 0,i={unversionedId:"developer/micro-page/components/README",id:"developer/micro-page/components/README",title:"Components Reference",description:"Amis native components",source:"@site/docs/developer/micro-page/components/README.mdx",sourceDirName:"developer/micro-page/components",slug:"/developer/micro-page/components/",permalink:"/developer/micro-page/components/",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/micro-page/components/README.mdx",tags:[],version:"current",frontMatter:{title:"Components Reference"},sidebar:"developer",previous:{title:"Custom Components",permalink:"/developer/micro-page/custom_components"},next:{title:"ObjectForm",permalink:"/developer/micro-page/components/object_form"}},c={},p=[{value:"Amis native components",id:"amis-native-components",level:2},{value:"steedos components",id:"steedos-components",level:2},{value:"Custom components",id:"custom-components",level:2}],m={toc:p},l="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"amis-native-components"},"Amis native components"),(0,r.kt)("p",null,"Amis has a variety of native components ",(0,r.kt)("a",{parentName:"p",href:"https://aisuda.bce.baidu.com/amis/zh-CN/components"},"Amis components"),"\u3002"),(0,r.kt)("h2",{id:"steedos-components"},"steedos components"),(0,r.kt)("p",null,"We have extended  components for Amis to quickly implement various interface capabilities of steedos."),(0,r.kt)("h2",{id:"custom-components"},"Custom components"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://aisuda.bce.baidu.com/amis/zh-CN/docs"},"Amis")," Amis provides a robust set of component functionality that can meet the UI interface needs of most business scenarios. "),(0,r.kt)("p",null,"However, if there are specific scenarios where custom components are more appropriate, they can be developed and integrated into the Amis designer using customized asset packages. This allows for the creation of any UI effect desired."),(0,r.kt)("p",null,"To configure the asset package address, simply set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"STEEDOS_PUBLIC_PAGE_ASSETURLS")," to the desired package address. Steedos will automatically load and integrate the relevant custom components into the Amis engine based on the resource package address specified in the asset package. These packages can be hosted anywhere that is accessible, including npm, unpkg.com, or other remote development environments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"STEEDOS_PUBLIC_PAGE_ASSETURLS=https://unpkg.com/@steedos-widgets/example@0.0.6/dist/assets.json\n")))}d.isMDXComponent=!0}}]);