"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7323],{87308:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=t(74848),i=t(28453);const o={},s="Data Scope and Data Chain",r={id:"developer/micro-page/amis/data",title:"Data Scope and Data Chain",description:"Basic Concepts: Data Scope and Data Chain",source:"@site/docs/developer/micro-page/amis/2_data.md",sourceDirName:"developer/micro-page/amis",slug:"/developer/micro-page/amis/data",permalink:"/developer/micro-page/amis/data",draft:!1,unlisted:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/micro-page/amis/2_data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"developer",previous:{title:"Configuration and Components",permalink:"/developer/micro-page/amis/base_config"},next:{title:"Template Rendering",permalink:"/developer/micro-page/amis/tpl"}},c={},d=[{value:"Basic Concepts: Data Scope and Data Chain",id:"basic-concepts-data-scope-and-data-chain",level:2},{value:"Components with Data Scope",id:"components-with-data-scope",level:2},{value:"1. Initializing the Data Scope",id:"1-initializing-the-data-scope",level:2},{value:"Component Initialization Interface",id:"component-initialization-interface",level:3},{value:"Explicit Data Property Configuration",id:"explicit-data-property-configuration",level:3},{value:"2. Updating the Data Scope",id:"2-updating-the-data-scope",level:2},{value:"3. Updating the Data Chain",id:"3-updating-the-data-chain",level:2},{value:"4. Others",id:"4-others",level:2},{value:"URL Parameters",id:"url-parameters",level:3}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"data-scope-and-data-chain",children:"Data Scope and Data Chain"}),"\n",(0,a.jsx)(n.h2,{id:"basic-concepts-data-scope-and-data-chain",children:"Basic Concepts: Data Scope and Data Chain"}),"\n",(0,a.jsxs)(n.p,{children:["The concepts of ",(0,a.jsx)(n.strong,{children:"Data Scope and Data Chain"})," are among the most important in AMIS. They ensure consistency and predictability in data interaction and management between components. It can be likened to the concept of scope in programming, where the data scope of a parent component is visible to its child components, similar to how variables are visible within their scope. Here is a simplified explanation:"]}),"\n",(0,a.jsx)(n.p,{children:"In AMIS, components are organized into a tree-like structure, and each component can have its own data scope. A data scope can be understood as a container for storing data, determining which data is available in specific parts of the component tree."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"amis-data-scope-data-link",src:t(33492).A+"",width:"512",height:"350"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Reference document: ",(0,a.jsx)(n.a,{href:"https://aisuda.bce.baidu.com/amis/zh-CN/docs/concepts/datascope-and-datachain",children:"AMIS Data Scope, Data Chain"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"components-with-data-scope",children:"Components with Data Scope"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"App"}),"\n",(0,a.jsx)(n.li,{children:"Combo"}),"\n",(0,a.jsx)(n.li,{children:"Cards"}),"\n",(0,a.jsx)(n.li,{children:"Chart"}),"\n",(0,a.jsx)(n.li,{children:"CRUD"}),"\n",(0,a.jsx)(n.li,{children:"CRUD2"}),"\n",(0,a.jsx)(n.li,{children:"Dialog"}),"\n",(0,a.jsx)(n.li,{children:"Drawer"}),"\n",(0,a.jsx)(n.li,{children:"List"}),"\n",(0,a.jsx)(n.li,{children:"Page"}),"\n",(0,a.jsx)(n.li,{children:"PaginationWrapper"}),"\n",(0,a.jsx)(n.li,{children:"Service"}),"\n",(0,a.jsx)(n.li,{children:"Wizard"}),"\n",(0,a.jsx)(n.li,{children:"InputArray"}),"\n",(0,a.jsx)(n.li,{children:"Table"}),"\n",(0,a.jsx)(n.li,{children:"Table2"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"1-initializing-the-data-scope",children:"1. Initializing the Data Scope"}),"\n",(0,a.jsx)(n.p,{children:"The data scope can be initialized in two main ways:"}),"\n",(0,a.jsx)(n.h3,{id:"component-initialization-interface",children:"Component Initialization Interface"}),"\n",(0,a.jsxs)(n.p,{children:["Assign an ",(0,a.jsx)(n.strong,{children:"initApi property"})," to the component, instructing AMIS to fetch data from a specified endpoint and populate the component's data scope with the response.\nComponents can obtain basic data through the specified initApi, assuming we have an API endpoint: /amis/api/initData"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "type": "page",\n  "initApi": "/amis/api/initData",\n  "body": "Hello ${text}"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"References:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Page component: ",(0,a.jsx)(n.a,{href:"https://aisuda.bce.baidu.com/amis/zh-CN/components/page#%E9%A1%B5%E9%9D%A2%E5%88%9D%E5%A7%8B%E5%8C%96%E8%AF%B7%E6%B1%82",children:"Page Component, Initialize Data"})]}),"\n",(0,a.jsxs)(n.li,{children:["API: ",(0,a.jsx)(n.a,{href:"https://aisuda.bce.baidu.com/amis/zh-CN/docs/types/api?page=1",children:"AMIS API"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"explicit-data-property-configuration",children:"Explicit Data Property Configuration"}),"\n",(0,a.jsx)(n.p,{children:"Static data comes from the data configured when defining the component.\nFor example, when defining a Page component, the data property can define data to be used by child components"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "type": "page",\n  "body": [\n    {\n      "type": "tpl",\n      "tpl": "I am ${name}, ${age} years old",\n      "id": "u:3a18f25bc36b"\n    }\n  ],\n  "data": {\n    "age": 18,\n    "name": "Li Gang"\n  },\n  "id": "u:randomid"\n}\n'})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["When both ",(0,a.jsx)(n.strong,{children:"initialization interface"})," and ",(0,a.jsx)(n.strong,{children:"data property"})," are configured, the data scope will merge the data property values and the data returned by the initialization interface."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"2-updating-the-data-scope",children:"2. Updating the Data Scope"}),"\n",(0,a.jsx)(n.p,{children:"Certain interactions or behaviors of some components will update the current component's data scope:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "type": "page",\n  "body": {\n    "type": "form",\n    "api": "/amis/api/mock2/form/saveForm",\n    "body": [\n      {\n        "type": "input-text",\n        "name": "name",\n        "label": "Name:"\n      },\n      {\n        "type": "input-text",\n        "name": "age",\n        "label": "Age:"\n      },\n      {\n        "type": "static-tpl",\n        "tpl": "The generated id is: ${id}"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"The /api/saveForm interface will save the data submitted by the current form and return the id generated by the backend service to the frontend, in the following format;"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "status": 0,\n  "msg": "Saved successfully",\n  "data": {\n    "id": 1\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["At this point, AMIS will ",(0,a.jsx)(n.strong,{children:"merge"})," the data with the current form component's data scope, and the static-tpl component in the form will display the id as 1."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Components with similar features include Formula, etc."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"3-updating-the-data-chain",children:"3. Updating the Data Chain"}),"\n",(0,a.jsxs)(n.p,{children:["In AMIS, updates to the top-level data scope trigger synchronous updates of child components with data scopes to ensure data consistency. However, such comprehensive updates may bring unnecessary performance overhead. For example, updating only the top-level ",(0,a.jsx)(n.code,{children:"name"})," variable would cause all child components to refresh. To optimize this process, AMIS by default detects changes in two levels of data scope (direct upper and upper-upper) to decide whether to update the current layer's data. There are two potential issues with this mechanism:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Unnecessary Updates"}),": The current component may not need to respond to changes in the upper-level data, making the refresh operation redundant."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Insufficient Updates"}),": The current component may need to respond to changes in higher-level data, but the default detection mechanism cannot obtain the latest value."]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["Introducing the ",(0,a.jsx)(n.code,{children:"trackExpression"})," Property"]}),(0,a.jsxs)(n.p,{children:["To address these issues, starting from version 3.2.0, AMIS introduced the ",(0,a.jsx)(n.code,{children:"trackExpression"})," property, allowing developers to actively configure the upper-level data that the component needs to pay attention to. Thus, we can:"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Set ",(0,a.jsx)(n.code,{children:"trackExpression"})," to ",(0,a.jsx)(n.code,{children:'"none"'})," to indicate that the current component does not track any data changes."]}),"\n",(0,a.jsxs)(n.li,{children:["Set ",(0,a.jsx)(n.code,{children:"trackExpression"})," to ",(0,a.jsx)(n.code,{children:'"${xxxVariable}"'})," to specify that the current component's data chain should be updated when ",(0,a.jsx)(n.code,{children:"xxxVariable"})," changes."]}),"\n"]}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"trackExpression"})," supports complex expression syntax, allowing monitoring of multiple variables (such as ",(0,a.jsx)(n.code,{children:'"${xxx1},${xxx2}"'}),") or writing conditional expressions (such as ",(0,a.jsx)(n.code,{children:'"${xxx ? xxx : yyy}"'}),"). AMIS will decide whether to update the data chain based on the result of the expression calculation."]}),(0,a.jsx)(n.p,{children:"Considerations:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Avoid using random functions or the current time in expressions, which would lead to different results each time and thus unnecessary updates to the data chain."}),"\n",(0,a.jsxs)(n.li,{children:["If the variable is an array or object, it is recommended to convert it to a JSON string (such as ",(0,a.jsx)(n.code,{children:"${xxxObject | json}"}),") to improve the accuracy of change detection."]}),"\n",(0,a.jsxs)(n.li,{children:["Since ",(0,a.jsx)(n.code,{children:"trackExpression"})," is used to monitor upper-level data, it should not reference the current layer's data variables in the expression."]}),"\n"]})]}),"\n",(0,a.jsx)(n.h2,{id:"4-others",children:"4. Others"}),"\n",(0,a.jsx)(n.h3,{id:"url-parameters",children:"URL Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["Query parameters in the URL will enter the top-level data scope. For example, if the micro-page is on the page ",(0,a.jsx)(n.a,{href:"https://abcd.com/yyyyy?bookId=29891",children:"https://abcd.com/yyyyy?bookId=29891"}),", then bookId will be at the top of the data scope. (The top-level data scope also means that all components can use the bookId variable.)"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},33492:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/amis-data-scope-data-link-a106be1c0ff0cd121036261f315a1ae4.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(96540);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);