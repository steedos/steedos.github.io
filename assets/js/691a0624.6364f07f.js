"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1914],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||n;return r?o.createElement(d,p(p({ref:t},l),{},{components:r})):o.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,p=new Array(n);p[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,p[1]=s;for(var c=2;c<n;c++)p[c]=r[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99459:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const n={sidebar_position:3},p="Approval Processes",s={unversionedId:"automation/approval-process",id:"automation/approval-process",title:"Approval Processes",description:"It\u2019s likely that you\u2019re familiar with process automation in the form of workflow rules. Approval processes take automation one step further, letting you specify a sequence of steps that are required to approve a record.",source:"@site/docs/automation/approval-process.md",sourceDirName:"automation",slug:"/automation/approval-process",permalink:"/automation/approval-process",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/automation/approval-process.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"platform",previous:{title:"Workflow Rules",permalink:"/automation/workflow-rules"},next:{title:"Approval King",permalink:"/automation/approval-king/"}},i={},c=[],l={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"approval-processes"},"Approval Processes"),(0,a.kt)("p",null,"It\u2019s likely that you\u2019re familiar with process automation in the form of workflow rules. Approval processes take automation one step further, letting you specify a sequence of steps that are required to approve a record."),(0,a.kt)("p",null,"An approval process automates how records are approved in Steedos. An approval process specifies each step of approval, including from whom to request approval and what to do at each point of the process."),(0,a.kt)("admonition",{title:"EXAMPLE",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Your org has a three-tier process for approving expenses. This approval process automatically assigns each request to right person in your org, based on the amount requested."),(0,a.kt)("p",{parentName:"admonition"},"If an expense record is submitted for approval, lock the record so that users can\u2019t edit it and change the status to Submitted."),(0,a.kt)("p",{parentName:"admonition"},"If the amount is $50 or less, approve the request. If the amount is greater than $50, send an approval request to the direct manager. If the amount is greater than $5,000 and the first approval request is approved, send an approval request to the vice president."),(0,a.kt)("p",{parentName:"admonition"},"If all approval requests are approved, change the status to Approved and unlock the record. If any approval requests are rejected, change the status to Rejected and unlock the record.")))}m.isMDXComponent=!0}}]);