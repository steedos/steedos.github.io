"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={title:"Push Notification",description:"Steedos\u652f\u6301\u5728\u7b2c\u4e09\u65b9\u5e94\u7528\u4e2d\u8c03\u7528\u63a5\u53e3\u6765\u53d1\u63a8\u9001\u901a\u77e5"},o=void 0,s={unversionedId:"developer/service/service-api/service-push",id:"developer/service/service-api/service-push",title:"Push Notification",description:"Steedos\u652f\u6301\u5728\u7b2c\u4e09\u65b9\u5e94\u7528\u4e2d\u8c03\u7528\u63a5\u53e3\u6765\u53d1\u63a8\u9001\u901a\u77e5",source:"@site/docs/developer/service/service-api/service-push.mdx",sourceDirName:"developer/service/service-api",slug:"/developer/service/service-api/service-push",permalink:"/developer/service/service-api/service-push",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/service/service-api/service-push.mdx",tags:[],version:"current",frontMatter:{title:"Push Notification",description:"Steedos\u652f\u6301\u5728\u7b2c\u4e09\u65b9\u5e94\u7528\u4e2d\u8c03\u7528\u63a5\u53e3\u6765\u53d1\u63a8\u9001\u901a\u77e5"},sidebar:"developer",previous:{title:"GraphQL",permalink:"/developer/service/service-api/service-graphql"},next:{title:"SMS Notification",permalink:"/developer/service/service-api/service-sms"}},c={},l=[{value:"Calling GraphQL API",id:"calling-graphql-api",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sending Push Notification can be achieved by simply calling the Steedos GraphQL API to insert notification data into the push_notifications object, which will then send the notification to Steedos mobile client, PC client, and browser client."),(0,i.kt)("h2",{id:"calling-graphql-api"},"Calling GraphQL API"),(0,i.kt)("p",null,"By calling the GraphQL API to insert a record into the push_notifications object, the system will automatically send a push notification."),(0,i.kt)("p",null,"Here's a reference for the data that needs to be sent in the GraphQL API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'mutation {\n  push_notifications__insert(doc:{ \n    name : "xxxxxxxxxxx",\n    body : "xxxxxxxxxxx",\n    owner_mobile : "xxxxxxxxxxx", \n    app_id : "xxxxxxxxxxxx", \n    badge: 1 \n  }){\n    name\n    _id\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: The title displayed in the notification."),(0,i.kt)("li",{parentName:"ul"},"Body: The body text of the notification message."),(0,i.kt)("li",{parentName:"ul"},"Owner_mobile: The mobile number of the user in the Steedos system to whom the notification should be sent."),(0,i.kt)("li",{parentName:"ul"},"App_id: Optional. This is the Id value of the third-party application created within Steedos project that is associated with the notification."),(0,i.kt)("li",{parentName:"ul"},"Badge: Optional. The numerical value to display in the badge on the associated application, which is the value displayed on the top-right corner of the application icon.")),(0,i.kt)("p",null,"Assuming the access address of Steedos project is ",(0,i.kt)("a",{parentName:"p",href:"https://huayan-test.steedos.cn"},"https://huayan-test.steedos.cn"),", the GraphQL API endpoint would be ",(0,i.kt)("a",{parentName:"p",href:"https://huayan-test.steedos.cn/graphql"},"https://huayan-test.steedos.cn/graphql"),". By calling this endpoint from a third-party system and sending the reference data mentioned above, the Steedos will automatically send the push notification."))}u.isMDXComponent=!0}}]);