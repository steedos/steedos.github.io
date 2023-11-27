"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>S});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,S=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(S,o(o({ref:t},p),{},{components:n})):r.createElement(S,o({ref:t},p))}));function S(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"SMS Notification"},o=void 0,l={unversionedId:"developer/service/service-api/service-sms",id:"developer/service/service-api/service-sms",title:"SMS Notification",description:"Applying for SMS Service",source:"@site/docs/developer/service/service-api/service-sms.mdx",sourceDirName:"developer/service/service-api",slug:"/developer/service/service-api/service-sms",permalink:"/developer/service/service-api/service-sms",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/service/service-api/service-sms.mdx",tags:[],version:"current",frontMatter:{title:"SMS Notification"},sidebar:"developer",previous:{title:"Push Notification",permalink:"/developer/service/service-api/service-push"},next:{title:"Micro Page Builder",permalink:"/developer/micro-page/"}},s={},c=[{value:"Applying for SMS Service",id:"applying-for-sms-service",level:2},{value:"SMS Sending Configuration",id:"sms-sending-configuration",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"applying-for-sms-service"},"Applying for SMS Service"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Register an account: Sign up for Tencent Cloud at ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/"},"https://cloud.tencent.com/"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access the SMS service: Visit Tencent Cloud-Enterprise Application and Cloud Communication-Cloud Communication-SMS at ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/product/sms"},"https://cloud.tencent.com/product/sms"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Create a signature: Go to "Signature Management" under "Domestic SMS" and create a signature. Follow the instructions and provide the required information. For example, create the signature "Steedos". Once the signature is approved, you can see it in the signature management list.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Create a content template: Go to "Content Template Management" under "Domestic SMS" and create a content template. For Steedos service, the following content templates need to be created:'))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Template Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Template Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Verification Code-Login"),(0,a.kt)("td",{parentName:"tr",align:null},"Your verification code is: {1}. This code is valid for {2} minutes. Please do not share it with anyone else!")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System Notification-Password Modification"),(0,a.kt)("td",{parentName:"tr",align:null},"System Notification: Your login password has been modified.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Address Book Mobile Phone Modification"),(0,a.kt)("td",{parentName:"tr",align:null},"Your mobile phone number in the address book has been changed to {1}.")))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},'Create an application: In "Application Management-Application List", click on "Create Application" and create an application, for example, "Steedos".')),(0,a.kt)("h2",{id:"sms-sending-configuration"},"SMS Sending Configuration"),(0,a.kt)("p",null,"Edit .env or .env.local and add the following three environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"STEEDOS_SMS_QCLOUD_SDKAPPID=xxxxxxxxxxx \nSTEEDOS_SMS_QCLOUD_APPKEY=xxxxxxxxxxx\nSTEEDOS_SMS_QCLOUD_SIGNNAME=xxxxxxxxxxx   \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"STEEDOS_SMS_QCLOUD_SDKAPPID: Tencent Cloud SMS-Application Management-Application Steedos-SDK AppID"),(0,a.kt)("li",{parentName:"ul"},"STEEDOS_SMS_QCLOUD_APPKEY: Tencent Cloud SMS-Application Management-Application List-Steedos-App Key"),(0,a.kt)("li",{parentName:"ul"},"STEEDOS_SMS_QCLOUD_SIGNNAME: Tencent Cloud SMS-Signature Management-Steedos (Signature Content)")),(0,a.kt)("p",null,"For service version 2.1 and older versions, you need to modify the configuration file steedos-config.yml and add the following configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"sms:\n  qcloud:\n    smsqueue_interval: 1000 \n    sdkappid: ${STEEDOS_SMS_QCLOUD_SDKAPPID}\n    appkey: ${STEEDOS_SMS_QCLOUD_APPKEY}\n    signname: ${STEEDOS_SMS_QCLOUD_SIGNNAME}\n")),(0,a.kt)("p",null,"For service versions 2.2 and newer, adjustments need to be made to the configuration file, steedos.config.js. Please modify the file to reflect this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"require('dotenv-flow').config({\n    path: process.cwd(),\n    silent: true\n});\nmodule.exports = {\n    ......\n    started(broker) {\n        broker.createService(require(\"@steedos/service-enterprise\"));\n    },\n    settings: {\n        sms: {\n            qcloud: {\n                smsqueue_interval: 1000\n                sdkappid: process.env.STEEDOS_SMS_QCLOUD_SDKAPPID\n                appkey: process.env.STEEDOS_SMS_QCLOUD_APPKEY\n                signname: process.env.STEEDOS_SMS_QCLOUD_SIGNNAME\n            }\n        }\n    }\n};\n")))}u.isMDXComponent=!0}}]);