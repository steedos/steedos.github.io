(self.webpackChunk=self.webpackChunk||[]).push([[3233],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=o().createContext({}),c=function(e){var t=o().useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return o().createElement(a.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},d=o().forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return n?o().createElement(m,u(u({ref:t},a),{},{components:n})):o().createElement(m,u({ref:t},a))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,s[1]=u;for(var a=2;a<i;a++)s[a]=n[a];return o().createElement.apply(null,s)}return o().createElement.apply(null,n)}d.displayName="MDXCreateElement"},45120:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return a},toc:function(){return c},default:function(){return f}});var r=n(74034),o=n(79973),i=(n(67294),n(3905)),s=["components"],u={title:"Countersignature Node"},l=void 0,a={unversionedId:"us/help/workflow/flow_step_counter_sign",id:"us/help/workflow/flow_step_counter_sign",isDocsHomePage:!1,title:"Countersignature Node",description:"- Two or more users can approve the requests at the node. They must select \u201cApprove\u201d or \u201cReject\u201d.",source:"@site/../docs/us/help/workflow/flow_step_counter_sign.md",sourceDirName:"us/help/workflow",slug:"/us/help/workflow/flow_step_counter_sign",permalink:"/us/help/workflow/flow_step_counter_sign",version:"current",frontMatter:{title:"Countersignature Node"},sidebar:"Steedos Help",previous:{title:"Input Node",permalink:"/us/help/workflow/flow_step_input"},next:{title:"Condition node",permalink:"/us/help/workflow/flow_step_condition"}},c=[],p={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Two or more users can approve the requests at the node. They must select \u201cApprove\u201d or \u201cReject\u201d."),(0,i.kt)("li",{parentName:"ul"},"Even though someone select to reject the request, it will flow to next step according to flow settings. Next step approver will take all countersignature opinions into consideration and select following step."),(0,i.kt)("li",{parentName:"ul"},"Admins can specify a range and then the approver in previous step can select several users\uff08no more than two users in Standard version\uff09 to countersign the request in next step.")),(0,i.kt)("p",null,"Please refer to \u201c",(0,i.kt)("a",{parentName:"p",href:"/us/help/workflow/flow_step_user"},"Approver settings"),"\u201d for more details."),(0,i.kt)("h4",{id:"notice"},"Notice:"),(0,i.kt)("p",null,"Two countersignature nodes cannot be directly connected. Admins can add a node to summarize opinions between the two nodes. And then select approvers for the second countersignature node."))}f.isMDXComponent=!0}}]);