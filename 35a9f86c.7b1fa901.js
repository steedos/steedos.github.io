(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(397)),s={title:"Countersignature Node"},i={id:"us/help/workflow/flow_step_counter_sign",title:"Countersignature Node",description:"- Two or more users can approve the requests at the node. They must select \u201cApprove\u201d or \u201cReject\u201d.",source:"@site/../docs/us/help/workflow/flow_step_counter_sign.md",permalink:"/docs/us/help/workflow/flow_step_counter_sign",sidebar:"Steedos Help",previous:{title:"Input Node",permalink:"/docs/us/help/workflow/flow_step_input"},next:{title:"Condition node",permalink:"/docs/us/help/workflow/flow_step_condition"}},c=[],p={rightToc:c},l="wrapper";function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(l,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Two or more users can approve the requests at the node. They must select \u201cApprove\u201d or \u201cReject\u201d."),Object(a.b)("li",{parentName:"ul"},"Even though someone select to reject the request, it will flow to next step according to flow settings. Next step approver will take all countersignature opinions into consideration and select following step."),Object(a.b)("li",{parentName:"ul"},"Admins can specify a range and then the approver in previous step can select several users\uff08no more than two users in Standard version\uff09 to countersign the request in next step.")),Object(a.b)("p",null,"Please refer to \u201c",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/us/help/workflow/flow_step_user"}),"Approver settings"),"\u201d for more details."),Object(a.b)("h4",{id:"notice"},"Notice:"),Object(a.b)("p",null,"Two countersignature nodes cannot be directly connected. Admins can add a node to summarize opinions between the two nodes. And then select approvers for the second countersignature node."))}u.isMDXComponent=!0},397:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n(0),o=n.n(r),a=o.a.createContext({}),s=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=s(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),l=s(n),u=r,d=l[i+"."+u]||l[u]||p[u]||a;return n?o.a.createElement(d,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(d,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=l;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);