"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[431],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2808:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const o={},r="Data Scope and Data Chain",p={unversionedId:"developer/micro-page/amis/data",id:"developer/micro-page/amis/data",title:"Data Scope and Data Chain",description:"Basic Concepts: Data Scope and Data Chain",source:"@site/docs/developer/micro-page/amis/2_data.md",sourceDirName:"developer/micro-page/amis",slug:"/developer/micro-page/amis/data",permalink:"/developer/micro-page/amis/data",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/micro-page/amis/2_data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"developer",previous:{title:"Configuration and Components",permalink:"/developer/micro-page/amis/base_config"},next:{title:"Template Rendering",permalink:"/developer/micro-page/amis/tpl"}},l={},s=[{value:"Basic Concepts: Data Scope and Data Chain",id:"basic-concepts-data-scope-and-data-chain",level:2},{value:"Components with Data Scope",id:"components-with-data-scope",level:2},{value:"1. Initializing the Data Scope",id:"1-initializing-the-data-scope",level:2},{value:"Component Initialization Interface",id:"component-initialization-interface",level:3},{value:"Explicit Data Property Configuration",id:"explicit-data-property-configuration",level:3},{value:"2. Updating the Data Scope",id:"2-updating-the-data-scope",level:2},{value:"3. Updating the Data Chain",id:"3-updating-the-data-chain",level:2},{value:"4. Others",id:"4-others",level:2},{value:"URL Parameters",id:"url-parameters",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-scope-and-data-chain"},"Data Scope and Data Chain"),(0,i.kt)("h2",{id:"basic-concepts-data-scope-and-data-chain"},"Basic Concepts: Data Scope and Data Chain"),(0,i.kt)("p",null,"The concepts of ",(0,i.kt)("strong",{parentName:"p"},"Data Scope and Data Chain")," are among the most important in AMIS. They ensure consistency and predictability in data interaction and management between components. It can be likened to the concept of scope in programming, where the data scope of a parent component is visible to its child components, similar to how variables are visible within their scope. Here is a simplified explanation:"),(0,i.kt)("p",null,"In AMIS, components are organized into a tree-like structure, and each component can have its own data scope. A data scope can be understood as a container for storing data, determining which data is available in specific parts of the component tree."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"amis-data-scope-data-link",src:a(1550).Z,width:"512",height:"350"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Reference document: ",(0,i.kt)("a",{parentName:"p",href:"https://aisuda.bce.baidu.com/amis/zh-CN/docs/concepts/datascope-and-datachain"},"AMIS Data Scope, Data Chain"))),(0,i.kt)("h2",{id:"components-with-data-scope"},"Components with Data Scope"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"App"),(0,i.kt)("li",{parentName:"ul"},"Combo"),(0,i.kt)("li",{parentName:"ul"},"Cards"),(0,i.kt)("li",{parentName:"ul"},"Chart"),(0,i.kt)("li",{parentName:"ul"},"CRUD"),(0,i.kt)("li",{parentName:"ul"},"CRUD2"),(0,i.kt)("li",{parentName:"ul"},"Dialog"),(0,i.kt)("li",{parentName:"ul"},"Drawer"),(0,i.kt)("li",{parentName:"ul"},"List"),(0,i.kt)("li",{parentName:"ul"},"Page"),(0,i.kt)("li",{parentName:"ul"},"PaginationWrapper"),(0,i.kt)("li",{parentName:"ul"},"Service"),(0,i.kt)("li",{parentName:"ul"},"Wizard"),(0,i.kt)("li",{parentName:"ul"},"InputArray"),(0,i.kt)("li",{parentName:"ul"},"Table"),(0,i.kt)("li",{parentName:"ul"},"Table2")),(0,i.kt)("h2",{id:"1-initializing-the-data-scope"},"1. Initializing the Data Scope"),(0,i.kt)("p",null,"The data scope can be initialized in two main ways:"),(0,i.kt)("h3",{id:"component-initialization-interface"},"Component Initialization Interface"),(0,i.kt)("p",null,"Assign an ",(0,i.kt)("strong",{parentName:"p"},"initApi property")," to the component, instructing AMIS to fetch data from a specified endpoint and populate the component's data scope with the response.\nComponents can obtain basic data through the specified initApi, assuming we have an API endpoint: /amis/api/initData"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "page",\n  "initApi": "/amis/api/initData",\n  "body": "Hello ${text}"\n}\n')),(0,i.kt)("p",null,"References:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Page component: ",(0,i.kt)("a",{parentName:"li",href:"https://aisuda.bce.baidu.com/amis/zh-CN/components/page#%E9%A1%B5%E9%9D%A2%E5%88%9D%E5%A7%8B%E5%8C%96%E8%AF%B7%E6%B1%82"},"Page Component, Initialize Data")),(0,i.kt)("li",{parentName:"ul"},"API: ",(0,i.kt)("a",{parentName:"li",href:"https://aisuda.bce.baidu.com/amis/zh-CN/docs/types/api?page=1"},"AMIS API"))),(0,i.kt)("h3",{id:"explicit-data-property-configuration"},"Explicit Data Property Configuration"),(0,i.kt)("p",null,"Static data comes from the data configured when defining the component.\nFor example, when defining a Page component, the data property can define data to be used by child components"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "page",\n  "body": [\n    {\n      "type": "tpl",\n      "tpl": "I am ${name}, ${age} years old",\n      "id": "u:3a18f25bc36b"\n    }\n  ],\n  "data": {\n    "age": 18,\n    "name": "Li Gang"\n  },\n  "id": "u:randomid"\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When both ",(0,i.kt)("strong",{parentName:"p"},"initialization interface")," and ",(0,i.kt)("strong",{parentName:"p"},"data property")," are configured, the data scope will merge the data property values and the data returned by the initialization interface.")),(0,i.kt)("h2",{id:"2-updating-the-data-scope"},"2. Updating the Data Scope"),(0,i.kt)("p",null,"Certain interactions or behaviors of some components will update the current component's data scope:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "page",\n  "body": {\n    "type": "form",\n    "api": "/amis/api/mock2/form/saveForm",\n    "body": [\n      {\n        "type": "input-text",\n        "name": "name",\n        "label": "Name:"\n      },\n      {\n        "type": "input-text",\n        "name": "age",\n        "label": "Age:"\n      },\n      {\n        "type": "static-tpl",\n        "tpl": "The generated id is: ${id}"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"The /api/saveForm interface will save the data submitted by the current form and return the id generated by the backend service to the frontend, in the following format;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 0,\n  "msg": "Saved successfully",\n  "data": {\n    "id": 1\n  }\n}\n')),(0,i.kt)("p",null,"At this point, AMIS will ",(0,i.kt)("strong",{parentName:"p"},"merge")," the data with the current form component's data scope, and the static-tpl component in the form will display the id as 1."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Components with similar features include Formula, etc.")),(0,i.kt)("h2",{id:"3-updating-the-data-chain"},"3. Updating the Data Chain"),(0,i.kt)("p",null,"In AMIS, updates to the top-level data scope trigger synchronous updates of child components with data scopes to ensure data consistency. However, such comprehensive updates may bring unnecessary performance overhead. For example, updating only the top-level ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," variable would cause all child components to refresh. To optimize this process, AMIS by default detects changes in two levels of data scope (direct upper and upper-upper) to decide whether to update the current layer's data. There are two potential issues with this mechanism:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Unnecessary Updates"),": The current component may not need to respond to changes in the upper-level data, making the refresh operation redundant."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Insufficient Updates"),": The current component may need to respond to changes in higher-level data, but the default detection mechanism cannot obtain the latest value.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Introducing the ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"trackExpression")," Property"),(0,i.kt)("p",{parentName:"admonition"},"To address these issues, starting from version 3.2.0, AMIS introduced the ",(0,i.kt)("inlineCode",{parentName:"p"},"trackExpression")," property, allowing developers to actively configure the upper-level data that the component needs to pay attention to. Thus, we can:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"trackExpression")," to ",(0,i.kt)("inlineCode",{parentName:"li"},'"none"')," to indicate that the current component does not track any data changes."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"trackExpression")," to ",(0,i.kt)("inlineCode",{parentName:"li"},'"${xxxVariable}"')," to specify that the current component's data chain should be updated when ",(0,i.kt)("inlineCode",{parentName:"li"},"xxxVariable")," changes.")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"trackExpression")," supports complex expression syntax, allowing monitoring of multiple variables (such as ",(0,i.kt)("inlineCode",{parentName:"p"},'"${xxx1},${xxx2}"'),") or writing conditional expressions (such as ",(0,i.kt)("inlineCode",{parentName:"p"},'"${xxx ? xxx : yyy}"'),"). AMIS will decide whether to update the data chain based on the result of the expression calculation."),(0,i.kt)("p",{parentName:"admonition"},"Considerations:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Avoid using random functions or the current time in expressions, which would lead to different results each time and thus unnecessary updates to the data chain."),(0,i.kt)("li",{parentName:"ul"},"If the variable is an array or object, it is recommended to convert it to a JSON string (such as ",(0,i.kt)("inlineCode",{parentName:"li"},"${xxxObject | json}"),") to improve the accuracy of change detection."),(0,i.kt)("li",{parentName:"ul"},"Since ",(0,i.kt)("inlineCode",{parentName:"li"},"trackExpression")," is used to monitor upper-level data, it should not reference the current layer's data variables in the expression."))),(0,i.kt)("h2",{id:"4-others"},"4. Others"),(0,i.kt)("h3",{id:"url-parameters"},"URL Parameters"),(0,i.kt)("p",null,"Query parameters in the URL will enter the top-level data scope. For example, if the micro-page is on the page ",(0,i.kt)("a",{parentName:"p",href:"https://abcd.com/yyyyy?bookId=29891"},"https://abcd.com/yyyyy?bookId=29891"),", then bookId will be at the top of the data scope. (The top-level data scope also means that all components can use the bookId variable.)"))}m.isMDXComponent=!0},1550:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/amis-data-scope-data-link-a106be1c0ff0cd121036261f315a1ae4.png"}}]);