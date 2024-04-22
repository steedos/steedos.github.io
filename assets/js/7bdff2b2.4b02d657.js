"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1698],{64630:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=i(74848),s=i(28453);const o={title:"Push Notification",description:"Steedos\u652f\u6301\u5728\u7b2c\u4e09\u65b9\u5e94\u7528\u4e2d\u8c03\u7528\u63a5\u53e3\u6765\u53d1\u63a8\u9001\u901a\u77e5"},a=void 0,r={id:"developer/service/service-api/service-push",title:"Push Notification",description:"Steedos\u652f\u6301\u5728\u7b2c\u4e09\u65b9\u5e94\u7528\u4e2d\u8c03\u7528\u63a5\u53e3\u6765\u53d1\u63a8\u9001\u901a\u77e5",source:"@site/docs/developer/service/service-api/service-push.mdx",sourceDirName:"developer/service/service-api",slug:"/developer/service/service-api/service-push",permalink:"/developer/service/service-api/service-push",draft:!1,unlisted:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/service/service-api/service-push.mdx",tags:[],version:"current",frontMatter:{title:"Push Notification",description:"Steedos\u652f\u6301\u5728\u7b2c\u4e09\u65b9\u5e94\u7528\u4e2d\u8c03\u7528\u63a5\u53e3\u6765\u53d1\u63a8\u9001\u901a\u77e5"},sidebar:"developer",previous:{title:"GraphQL",permalink:"/developer/service/service-api/service-graphql"},next:{title:"SMS Notification",permalink:"/developer/service/service-api/service-sms"}},c={},l=[{value:"Calling GraphQL API",id:"calling-graphql-api",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Sending Push Notification can be achieved by simply calling the Steedos GraphQL API to insert notification data into the push_notifications object, which will then send the notification to Steedos mobile client, PC client, and browser client."}),"\n",(0,n.jsx)(t.h2,{id:"calling-graphql-api",children:"Calling GraphQL API"}),"\n",(0,n.jsx)(t.p,{children:"By calling the GraphQL API to insert a record into the push_notifications object, the system will automatically send a push notification."}),"\n",(0,n.jsx)(t.p,{children:"Here's a reference for the data that needs to be sent in the GraphQL API:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'mutation {\n  push_notifications__insert(doc:{ \n    name : "xxxxxxxxxxx",\n    body : "xxxxxxxxxxx",\n    owner_mobile : "xxxxxxxxxxx", \n    app_id : "xxxxxxxxxxxx", \n    badge: 1 \n  }){\n    name\n    _id\n  }\n}\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Name: The title displayed in the notification."}),"\n",(0,n.jsx)(t.li,{children:"Body: The body text of the notification message."}),"\n",(0,n.jsx)(t.li,{children:"Owner_mobile: The mobile number of the user in the Steedos system to whom the notification should be sent."}),"\n",(0,n.jsx)(t.li,{children:"App_id: Optional. This is the Id value of the third-party application created within Steedos project that is associated with the notification."}),"\n",(0,n.jsx)(t.li,{children:"Badge: Optional. The numerical value to display in the badge on the associated application, which is the value displayed on the top-right corner of the application icon."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Assuming the access address of Steedos project is ",(0,n.jsx)(t.a,{href:"https://huayan-test.steedos.cn",children:"https://huayan-test.steedos.cn"}),", the GraphQL API endpoint would be ",(0,n.jsx)(t.a,{href:"https://huayan-test.steedos.cn/graphql",children:"https://huayan-test.steedos.cn/graphql"}),". By calling this endpoint from a third-party system and sending the reference data mentioned above, the Steedos will automatically send the push notification."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(96540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);