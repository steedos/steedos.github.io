"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5422],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=d(r),u=a,f=c["".concat(s,".").concat(u)]||c[u]||p[u]||i;return r?n.createElement(f,o(o({ref:t},g),{},{components:r})):n.createElement(f,o({ref:t},g))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={title:"Triggers",sidebar_position:40},o=void 0,l={unversionedId:"developer/service/action-trigger",id:"developer/service/action-trigger",title:"Triggers",description:"By writing triggers, you can automatically trigger a piece of server-side code before and after record creation, deletion, and changes, achieving personalized data validation and processing.",source:"@site/docs/developer/service/action-trigger.mdx",sourceDirName:"developer/service",slug:"/developer/service/action-trigger",permalink:"/developer/service/action-trigger",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/service/action-trigger.mdx",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Triggers",sidebar_position:40},sidebar:"developer",previous:{title:"REST API",permalink:"/developer/service/action-api"},next:{title:"ObjectQL",permalink:"/developer/service/objectql"}},s={},d=[{value:"Defining Triggers",id:"defining-triggers",level:2},{value:"Trigger Parameter",id:"trigger-parameter",level:2},{value:"Listening Objects",id:"listening-objects",level:3},{value:"Trigger Before Event",id:"trigger-before-event",level:3},{value:"Trigger After Event",id:"trigger-after-event",level:3},{value:"Trigger Execution",id:"trigger-execution",level:2}],g={toc:d},c="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By writing triggers, you can automatically trigger a piece of server-side code before and after record creation, deletion, and changes, achieving personalized data validation and processing."),(0,a.kt)("h2",{id:"defining-triggers"},"Defining Triggers"),(0,a.kt)("p",null,"In a microservice, you can define an action and add a trigger parameter to it, which is equivalent to defining this action as a trigger."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"actions: {\n    spaceUsersBeforeUpdate: {\n        trigger: { \n            listenTo: 'space_users', \n            when: ['beforeInsert', 'beforeUpdate']\n        },\n        async handler(ctx) {\n            this.broker.logger.debug('spaceUsersBeforeUpdate', ctx)\n        }   \n    }\n}\n")),(0,a.kt)("h2",{id:"trigger-parameter"},"Trigger Parameter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    trigger: { \n        listenTo: 'space_users', \n        when: ['beforeInsert', 'beforeUpdate']\n    },\n")),(0,a.kt)("h3",{id:"listening-objects"},"Listening Objects"),(0,a.kt)("p",null,"The listenTo parameter is used to specify the objects to which the trigger should be applied. This parameter is used to define the listening objects of the trigger, and indicates that the trigger should only be activated when the specified objects are affected by record creation, deletion, or changes. In other words, it allows the trigger to listen to specific objects and perform corresponding data validation and processing based on the changes made to those objects."),(0,a.kt)("h3",{id:"trigger-before-event"},"Trigger Before Event"),(0,a.kt)("p",null,"A trigger before the event can be used to validate whether the data input by the user is correct. If there is an issue, an error message will be thrown and fed back to the front-end operation page. Additionally, it can also be used in conjunction with permission control to verify the current operation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"beforeInsert"),(0,a.kt)("li",{parentName:"ul"},"beforeUpdate"),(0,a.kt)("li",{parentName:"ul"},"beforeDelete"),(0,a.kt)("li",{parentName:"ul"},"beforeFind")),(0,a.kt)("h3",{id:"trigger-after-event"},"Trigger After Event"),(0,a.kt)("p",null,"A trigger after the event can be used to execute associated events, such as sending notifications to specified personnel after a task has been created."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"afterFind"),(0,a.kt)("li",{parentName:"ul"},"afterInsert"),(0,a.kt)("li",{parentName:"ul"},"afterUpdate"),(0,a.kt)("li",{parentName:"ul"},"afterDelete")),(0,a.kt)("h2",{id:"trigger-execution"},"Trigger Execution"),(0,a.kt)("p",null,'In the trigger execution function, you can use "ctx.params" to obtain the following variables.'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isInsert"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns true if this trigger is triggered by an insert operation (from the Steedos user interface, service, or API).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isUpdate"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns true if this trigger is triggered by an update operation (from the Steedos user interface, service, or API).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isDelete"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns true if this trigger is triggered by a delete operation (from the Steedos user interface, service, or API).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isFind"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns true if this trigger is triggered by a query operation (from the Steedos user interface, service, or API).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isBefore"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns true if this trigger is triggered before any record operation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isAfter"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns true if this trigger is triggered after all record operations.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"The unique identifier of the record ","[string]",".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"doc"),(0,a.kt)("td",{parentName:"tr",align:null},"The record content that needs to be added/modified ","[json]",".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"previousDoc"),(0,a.kt)("td",{parentName:"tr",align:null},"The record before modifying/deleting ","[json]",", exists when afterUpdate or afterDelete is triggered.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userId"),(0,a.kt)("td",{parentName:"tr",align:null},"The unique identifier of the current user ","[string]",".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spaceId"),(0,a.kt)("td",{parentName:"tr",align:null},"The current workspace ","[string]",".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"objectName"),(0,a.kt)("td",{parentName:"tr",align:null},"The current object name ","[string]",".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"Query data-related parameters ","[json]",", exists when beforeFind is triggered.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},"Query result, exists when afterFind is triggered.")))))}p.isMDXComponent=!0}}]);