"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=i,u=d["".concat(c,".").concat(g)]||d[g]||m[g]||a;return n?o.createElement(u,r(r({ref:t},p),{},{components:n})):o.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},51208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const a={},r="Event Actions",s={unversionedId:"developer/micro-page/amis/event",id:"developer/micro-page/amis/event",title:"Event Actions",description:"In AMIS, events and actions are key to implementing complex UI interactions. They allow developers to listen for component events and respond with corresponding actions without worrying about component hierarchy. The capabilities of events and actions include, but are not limited to:",source:"@site/docs/developer/micro-page/amis/7_event.md",sourceDirName:"developer/micro-page/amis",slug:"/developer/micro-page/amis/event",permalink:"/developer/micro-page/amis/event",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/micro-page/amis/7_event.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"developer",previous:{title:"Linkage Mechanism",permalink:"/developer/micro-page/amis/linkage"},next:{title:"Custom Styles",permalink:"/developer/micro-page/amis/styles"}},c={},l=[{value:"Basic Usage",id:"basic-usage",level:3},{value:"Context",id:"context",level:3},{value:"Runtime Log",id:"runtime-log",level:3},{value:"Classification of Events and Actions",id:"classification-of-events-and-actions",level:3},{value:"Triggering General Actions",id:"triggering-general-actions",level:3},{value:"Triggering Component&#39;s Actions",id:"triggering-components-actions",level:3},{value:"Triggering Broadcast Actions",id:"triggering-broadcast-actions",level:3},{value:"Orchestration of Actions",id:"orchestration-of-actions",level:3},{value:"More Events",id:"more-events",level:3},{value:"More Actions",id:"more-actions",level:3}],p={toc:l},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"event-actions"},"Event Actions"),(0,i.kt)("p",null,"In AMIS, events and actions are key to implementing complex UI interactions. They allow developers to listen for component events and respond with corresponding actions without worrying about component hierarchy. The capabilities of events and actions include, but are not limited to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HTTP Requests"),": Sending HTTP requests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Popup Notifications"),": Executing popups, drawer openings, and Toast notifications."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Page Navigation"),": Implementing page link navigation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Browser Operations"),": Includes back, forward, refresh, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Component Refresh"),": Linkage refresh of form data, i.e., data reloaded."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Component State Control"),": Controlling the display/hide, enable/disable, and view/edit states of a specified component."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Component-Specific Actions"),": Executing proprietary actions of a specified component, such as submitting a form."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Component Data Update"),": Updating the data domain of a specified component."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Broadcast"),": Multiple components listen to the same event and respond differently."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"JS Scripts"),": Implementing required logic by writing JS code snippets, also supports executing actions within JS code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Logic Orchestration"),": Logical operations such as conditions, loops, exclusivity, parallelism, etc.")),(0,i.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"onEvent")," property can be used to bind renderer events to response actions. Within ",(0,i.kt)("strong",{parentName:"p"},"onEvent"),", configure the event and action mapping relationship, where ",(0,i.kt)("strong",{parentName:"p"},"actions")," is a collection of response actions corresponding to the event.\nThe event system is the cornerstone of implementing interactive logic in AMIS. It allows developers to listen to and respond to user actions or system-triggered events. This section will delve into AMIS's event system, including types of events, listening, and handling."),(0,i.kt)("p",null,"For example: Listen to the click event of a button and execute a toast action. The code is as follows:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Events usually carry parameters, which contain information related to the event. Here it is passed through args.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "page",\n  "body": [\n    {\n      "type": "button",\n      "label": "Toggle",\n      "onEvent": {\n        "click": {\n          "actions": [\n            {\n              "actionType": "toast",\n              "args": {\n                "msg": "I am a global message"\n              }\n            }\n          ]\n        }\n      },\n      "id": "u:e127ddcd70c4"\n    }\n  ],\n  "id": "u:94c822247387"\n}\n')),(0,i.kt)("h3",{id:"context"},"Context"),(0,i.kt)("p",null,"When executing actions, you can obtain the event object's data through ",(0,i.kt)("strong",{parentName:"p"},"${event.data}")," and the component's current data domain through ",(0,i.kt)("strong",{parentName:"p"},"${__rendererData}"),"."),(0,i.kt)("h3",{id:"runtime-log"},"Runtime Log"),(0,i.kt)("p",null,"View the runtime log in the browser console to see the process and result of the action execution."),(0,i.kt)("h3",{id:"classification-of-events-and-actions"},"Classification of Events and Actions"),(0,i.kt)("p",null,"Events include renderer events and broadcast events. Actions include general actions, component actions, broadcast actions, and custom actions, which can be specified by configuring ",(0,i.kt)("strong",{parentName:"p"},"actionType"),"."),(0,i.kt)("h3",{id:"triggering-general-actions"},"Triggering General Actions"),(0,i.kt)("p",null,"General actions include sending HTTP requests, jumping links, browser operations, popup notifications, copying, sending emails, refreshing, controlling display and hide, controlling enable and disable states, updating data, etc."),(0,i.kt)("h3",{id:"triggering-components-actions"},"Triggering Component's Actions"),(0,i.kt)("p",null,"Trigger specific component's actions by configuring ",(0,i.kt)("strong",{parentName:"p"},"componentId")," or ",(0,i.kt)("strong",{parentName:"p"},"componentName"),"."),(0,i.kt)("h3",{id:"triggering-broadcast-actions"},"Triggering Broadcast Actions"),(0,i.kt)("p",null,"Implement triggering a broadcast by configuring ",(0,i.kt)("strong",{parentName:"p"},"actionType: 'broadcast'"),"."),(0,i.kt)("h3",{id:"orchestration-of-actions"},"Orchestration of Actions"),(0,i.kt)("p",null,"Implement action orchestration by configuring different logical actions, supporting nesting."),(0,i.kt)("h3",{id:"more-events"},"More Events"),(0,i.kt)("p",null,'On the AMIS official website\'s "Components" page, you can find more events that each component can trigger.\nFor example, for the key-value pair component, you can find the corresponding component introduction page, then scroll to the "Event Table" section.\nYou can see there are add and delete events.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image.png",src:n(10443).Z,width:"1296",height:"586"})),(0,i.kt)("h3",{id:"more-actions"},"More Actions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Triggering General Actions: Can be found on the AMIS official website at ",(0,i.kt)("a",{parentName:"li",href:"https://aisuda.bce.baidu.com/amis/zh-CN/docs/concepts/event-action#%E8%A7%A6%E5%8F%91%E9%80%9A%E7%94%A8%E5%8A%A8%E4%BD%9C"},"amis event actions - triggering general actions"),"."),(0,i.kt)("li",{parentName:"ul"},"Component-Specific Actions: Can be found on the component detail page.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image.png",src:n(88250).Z,width:"1296",height:"586"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"References"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aisuda.bce.baidu.com/amis/zh-CN/docs/concepts/event-action"},"amis event actions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aisuda.bce.baidu.com/amis/zh-CN/docs/concepts/action"},"amis actions")))),(0,i.kt)("p",null,"Through this section, you should have a basic understanding of the AMIS event system. Mastering event listening and handling will enable you to build dynamic interfaces that respond to user operations. In the following chapters, we will explore how to combine the event system with other features of AMIS to implement more complex interaction logic."))}m.isMDXComponent=!0},88250:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/amis-more-actions-b8d965ba675ac3c87c746c15e0875cc0.png"},10443:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/amis-more-events-7c14ff5f3cd631ffd43b8ff3eedf5e63.png"}}]);