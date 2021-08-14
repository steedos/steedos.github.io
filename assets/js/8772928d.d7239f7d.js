(self.webpackChunk=self.webpackChunk||[]).push([[7698],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return w}});var r=n(67294),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o().createContext({}),c=function(e){var t=o().useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o().createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},d=o().forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,w=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return n?o().createElement(w,s(s({ref:t},u),{},{components:n})):o().createElement(w,s({ref:t},u))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return o().createElement.apply(null,l)}return o().createElement.apply(null,n)}d.displayName="MDXCreateElement"},85108:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var r=n(74034),o=n(79973),i=(n(67294),n(3905)),l=["components"],s={title:"Flow permissions"},a=void 0,u={unversionedId:"us/help/workflow/flow_permissions",id:"us/help/workflow/flow_permissions",isDocsHomePage:!1,title:"Flow permissions",description:"Who can initiate requests?",source:"@site/../docs/us/help/workflow/flow_permissions.md",sourceDirName:"us/help/workflow",slug:"/us/help/workflow/flow_permissions",permalink:"/us/help/workflow/flow_permissions",version:"current",frontMatter:{title:"Flow permissions"},sidebar:"Steedos Help",previous:{title:"How to design a flow",permalink:"/us/help/workflow/flow_design"},next:{title:"Approval Node",permalink:"/us/help/workflow/flow_step_approve"}},c=[{value:"Who can initiate requests?",id:"who-can-initiate-requests",children:[]},{value:"Who can read all the requests?",id:"who-can-read-all-the-requests",children:[]},{value:"Who can read all the requests and delete a request?",id:"who-can-read-all-the-requests-and-delete-a-request",children:[]}],p={toc:c};function f(e){var t=e.components,s=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"who-can-initiate-requests"},"Who can initiate requests?"),(0,i.kt)("p",null,"Admins can set flow permissions. All users, users in specific organization or specific users can initiate requests according to permission settings.\nHere are the two methods to set flow permissions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method One")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click \u201cSettings\u201d => \u201cWorkflow Designer\u201d."),(0,i.kt)("li",{parentName:"ul"},"Select a flow in workflow list of a specific category."),(0,i.kt)("li",{parentName:"ul"},"Click \u201cInitiate Request\u201d => \u201cProperties\u201d."),(0,i.kt)("li",{parentName:"ul"},"Select the users who can initiate this request in department box and user box.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method Two")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click \u201cSettings\u201d => \u201cWorkflow Designer\u201d."),(0,i.kt)("li",{parentName:"ul"},"Select a flow in workflow list of a specific category."),(0,i.kt)("li",{parentName:"ul"},"Click \u201cFlow Info\u201d => \u201cSetting flow permissions\u201d."),(0,i.kt)("li",{parentName:"ul"},"Select departments and users who can initiate this request in the pop-up window.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(14953).Z})),(0,i.kt)("p",null,"Then users selected and in selected departments can initiate this request in Steedos Workflow."),(0,i.kt)("h3",{id:"who-can-read-all-the-requests"},"Who can read all the requests?"),(0,i.kt)("p",null,"Sometimes some users need to read all the requests even though they don\u2019t participate in the approval process. It is called \u201cmanagement permission\u201d. In Steedos Workflow, it can be realized by taking following steps. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click \u201cSettings\u201d => \u201cWorkflow Designer\u201d."),(0,i.kt)("li",{parentName:"ul"},"Select a flow in workflow list of a specific category."),(0,i.kt)("li",{parentName:"ul"},"Click \u201cFlow Info\u201d => \u201cSetting flow permissions\u201d."),(0,i.kt)("li",{parentName:"ul"},"Select departments and users who can read all the requests in the pop-up window.")),(0,i.kt)("h3",{id:"who-can-read-all-the-requests-and-delete-a-request"},"Who can read all the requests and delete a request?"),(0,i.kt)("p",null,"Sometimes some users need to read all the requests and delete some specific requests even though they don\u2019t participate in the approval process. In Steedos Workflow, it can be realized by taking following steps. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click \u201cSettings\u201d => \u201cWorkflow Designer\u201d."),(0,i.kt)("li",{parentName:"ul"},"Select a flow in workflow list of a specific category."),(0,i.kt)("li",{parentName:"ul"},"Click \u201cFlow Info\u201d => \u201cSetting flow permissions\u201d."),(0,i.kt)("li",{parentName:"ul"},"Select departments and users who can read all the requests and delete a request in the pop-up window.")))}f.isMDXComponent=!0},14953:function(e,t,n){"use strict";t.Z=n.p+"assets/images/18-8f8417c45cd71eff2eb01db4f050a80a.png"}}]);