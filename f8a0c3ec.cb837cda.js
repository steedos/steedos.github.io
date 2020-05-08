(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{375:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),i=(n(0),n(393)),a={title:"Input permissions"},l={id:"us/help/workflow/flow_step_permissions",title:"Input permissions",description:"Users involved in the flow can read the whole information of the requests. But input and modification permissions vary with nodes. Admins can take following steps to set input permissions.",source:"@site/../docs/us/help/workflow/flow_step_permissions.md",permalink:"/us/help/workflow/flow_step_permissions",sidebar:"Steedos Help",previous:{title:"Approver settings",permalink:"/us/help/workflow/flow_step_user"},next:{title:"Enable the flow",permalink:"/us/help/workflow/flow_state"}},s=[],c={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Users involved in the flow can read the whole information of the requests. But input and modification permissions vary with nodes. Admins can take following steps to set input permissions."),Object(i.b)("h4",{id:"input-permission-settings"},"Input Permission Settings."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click \u201cSettings\u201d => \u201cWorkflow Designer\u201d."),Object(i.b)("li",{parentName:"ul"},"Select a flow in workflow list of a specific category."),Object(i.b)("li",{parentName:"ul"},"Then select a node in the flow."),Object(i.b)("li",{parentName:"ul"},"Click \u201cPermissions\u201d in the panel in right side."),Object(i.b)("li",{parentName:"ul"},"Then tick the editable fields according to actual situations.")),Object(i.b)("h4",{id:"notice\uff1a"},"Notice\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In \u201cInitiate Request\u201d node, all fields are editable by default. You can also tick the fields to modify permissions."),Object(i.b)("li",{parentName:"ul"},"Fields not ticked are read-only when the request flow to the node. In other word, ticked fields can be edited and modified.")))}p.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||i;return n?o.a.createElement(m,l({ref:t},c,{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);