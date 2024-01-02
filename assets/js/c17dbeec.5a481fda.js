"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const r={sidebar_position:35,sidebar_label:"AMIS Low-Code Framework"},a="AMIS Frontend Low-Code Framework",s={unversionedId:"developer/micro-page/amis/README",id:"developer/micro-page/amis/README",title:"AMIS Frontend Low-Code Framework",description:"Introduction to AMIS",source:"@site/docs/developer/micro-page/amis/README.md",sourceDirName:"developer/micro-page/amis",slug:"/developer/micro-page/amis/",permalink:"/developer/micro-page/amis/",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/micro-page/amis/README.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,sidebar_label:"AMIS Low-Code Framework"},sidebar:"developer",previous:{title:"Quick Start",permalink:"/developer/micro-page/getting_start"},next:{title:"Configuration and Components",permalink:"/developer/micro-page/amis/base_config"}},l={},c=[{value:"Introduction to AMIS",id:"introduction-to-amis",level:2},{value:"Design Philosophy of AMIS",id:"design-philosophy-of-amis",level:3},{value:"Core Features of AMIS",id:"core-features-of-amis",level:3},{value:"Application Scenarios of AMIS",id:"application-scenarios-of-amis",level:3},{value:"Hands-on Practice",id:"hands-on-practice",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"amis-frontend-low-code-framework"},"AMIS Frontend Low-Code Framework"),(0,i.kt)("h2",{id:"introduction-to-amis"},"Introduction to AMIS"),(0,i.kt)("p",null,"AMIS is a low-code frontend framework based on JSON configuration, enabling developers to quickly build data-driven applications through declarative programming. It offers a rich component library and flexible interface layout options, allowing developers to define interfaces and interactions with simple JSON configurations, significantly improving development efficiency and reducing development costs."),(0,i.kt)("h3",{id:"design-philosophy-of-amis"},"Design Philosophy of AMIS"),(0,i.kt)("p",null,'The core design philosophy of AMIS is "simplifying frontend development," allowing developers to focus on business logic rather than interface details. By providing a declarative interface description language, AMIS makes the definition of interfaces and logic clearer and more concise. It aims to reduce the repetitive workload of coding and achieve rapid development through preset templates and components while maintaining a high degree of flexibility.'),(0,i.kt)("h3",{id:"core-features-of-amis"},"Core Features of AMIS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Declarative JSON Configuration"),": Use JSON configurations to define interfaces and logic instead of writing extensive code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rich Component Library"),": Includes a variety of components such as forms, tables, lists, and charts to meet most UI requirements."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flexible Data Binding and Transformation"),": Supports two-way data binding and can perform data transformation and formatting through built-in functions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Powerful Event and Action System"),": Allows defining actions triggered by events to implement complex interaction logic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Theme and Style Customization"),": Supports theme customization to easily change the application's appearance and style."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Extensibility and Plugins"),": Add new features and components through extensions and plugin mechanisms.")),(0,i.kt)("h3",{id:"application-scenarios-of-amis"},"Application Scenarios of AMIS"),(0,i.kt)("p",null,"AMIS is suitable for various application scenarios, especially for rapid development of enterprise-level applications, backend management systems, data visualization interfaces, and complex forms. It helps enterprises quickly build systems like CRM, ERP, CMS, and is also suitable for quickly creating prototypes and MVPs (Minimum Viable Products) to validate business hypotheses or for early-stage product feature demonstrations."),(0,i.kt)("h2",{id:"hands-on-practice"},"Hands-on Practice"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The code content is extensive; you can create a micro page to try using it.")),(0,i.kt)("p",null,"On the designer page, click the code button on the left to see the component JSON configuration."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(83660).Z,width:"939",height:"482"})),(0,i.kt)("br",null),(0,i.kt)("br",null))}m.isMDXComponent=!0},83660:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/design-tool-json-1b690767534815905b6cd13f6d8034b1.png"}}]);