(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{361:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(1),r=n(9),i=(n(0),n(397)),a={title:"How to design a flow"},s={id:"us/help/workflow/flow_design",title:"How to design a flow",description:"Admins need to design the flow after having finished form designs.",source:"@site/../docs/us/help/workflow/flow_design.md",permalink:"/docs/us/help/workflow/flow_design",sidebar:"Steedos Help",previous:{title:"Form scripts",permalink:"/docs/us/help/workflow/form_scripts"},next:{title:"Flow permissions",permalink:"/docs/us/help/workflow/flow_permissions"}},l=[],c={rightToc:l},p="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(p,Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Admins need to design the flow after having finished form designs.\nIn Steedos Workflow, a node represents a step , and all nodes are connected with straight lines. A node can concatenate one or more nodes according to following approval process. The flowing nodes can be decided by assigned by approver or by conditions automatically."),Object(i.b)("h4",{id:"flow-design"},"Flow design"),Object(i.b)("p",null,"We set \u201cDaily Reimbursement\u201d as an example to demonstrate the flow design process. Detailed steps are listed below."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Login in Steedos, and then click \u201cWorkflow Designer\u201d in \u201cSettings\u201d."),Object(i.b)("li",{parentName:"ul"},"Select \u201cNo Category\u201d in pop-up interface and then click \u201cDaily Reimbursement\u201d."),Object(i.b)("li",{parentName:"ul"},"In the workflow interface, \u201cFlow Info\u201d, \u201cDraw\u201d, \u201cProperties\u201d are displayed in the panel at the right side.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Flow name and flow description can be modified in \u201cFlow Info\u201d."),Object(i.b)("li",{parentName:"ul"},"Click \u201cDraw\u201d to add different nodes, including \u201cApprove Request\u201d, \u201cCounterSign\u201d, \u201cProvide Input\u201d, \u201cCondition\u201d. Here is a brief introduction for different nodes.")))),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/assets/us/workflow/17.png",alt:null}))),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"- **Approve Request**: Approvers must select \u201cApprove\u201d or \u201cReject\u201d.\n- **CounterSign**: In the node, several users can approve applications. Then applications flow to next step automatically according to system conditions.\n- **Provide Input**\uff1aUsers can input comments or submit requests immediately, but can not select \u201cApprove\u201d or \u201cReject\u201d.\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Select one node in \u201cDraw\u201d and move it to the left panel of the page. "),Object(i.b)("li",{parentName:"ul"},"And then place the mouse cursor over this node. Next\uff0cclick \u201c+\u201d icon to add lines to connect nodes. "),Object(i.b)("li",{parentName:"ul"},"Of course\uff0cyou can click \u201c-\u201d to delete the lines. "),Object(i.b)("li",{parentName:"ul"},"Click the specific node and then \u201cFlow Info\u201d,  \u201cDraw\u201d\uff0c \u201cProperties\u201d and \u201cPermissions\u201d are displayed in the panel.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Properties"),": Admins can modify \u201cStep Name\u201d, \u201cAssign to\u201d and \u201cDeadline for the step\u201d in properties. For more details, please refer to \u201c",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/us/help/workflow/flow_step_user"}),"Approver settings"),"\u201d."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Permissions"),": Except for the start step, all fields are read-only by default. Admins can tick editable fields in the step according to actual situations."))),Object(i.b)("li",{parentName:"ul"},"Turn on the switch in \u201cWorkflow List\u201d to run the flow.")),Object(i.b)("h4",{id:"notice\uff1a"},"Notice\uff1a"),Object(i.b)("p",null,"Requests submitted before the modification of form and flow design will run according to previous settings. The requests submitted after modifications will flow in new steps."))}d.isMDXComponent=!0},397:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o),i=r.a.createContext({}),a=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=a(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),p=a(n),d=o,u=p[s+"."+d]||p[d]||c[d]||i;return n?r.a.createElement(u,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(u,Object.assign({},{ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);