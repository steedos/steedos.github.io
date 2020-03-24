(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{300:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(397)),i={title:"Retrieve"},s={id:"us/help/workflow/instance_retrieve",title:"Retrieve",description:"Retrieve is to get back the intance that has been submitted or approved to reprocess.",source:"@site/../docs/us/help/workflow/instance_retrieve.md",permalink:"/us/help/workflow/instance_retrieve",sidebar:"Steedos Help",previous:{title:"Intance Forward",permalink:"/us/help/workflow/instance_forward"},next:{title:"How to reassign approvers",permalink:"/us/help/workflow/instance_reassign"}},c=[],p={rightToc:c},l="wrapper";function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(l,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Retrieve is to get back the intance that has been submitted or approved to reprocess."),Object(o.b)("p",null,"There are two types of people that can retrieve an instance: one is the creator of instance, the other is the approver of intance.\nNote: The intance can only be retrieved after the next step has not been processed or the next step is not the end of the processing steps. For example, a new intance has been submitted, if you want to modify this intance, but this intance has been approved by the next approver, this intance can not be retrieved."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'When you retrieve a new instance, you can find this intance in the "In Progress". (Note: this intance has not been approved by the next approver)\n![](/assets/us/workflow/In Progress.png)')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'When you want to retrieve an approved intance, you can find this intance in the "Outbox". (Note: this intance has not yet been processed by the next approver, or the next step is not the end step)\n',Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/assets/us/workflow/Outbox.png",alt:null})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Click on the instance you\'ve found, and click the button in the upper right corner of this instance. When you click the "retrieve" button, you will be asked to fill out the pop-up box for the reason for the retrieve. When you click "OK", you can find this instance in "Inbox", then you can reprocess this instance.'))),Object(o.b)("h4",{id:"remark"},"Remark"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The progress of retrieve will be displayed in approval history of the form.")))}u.isMDXComponent=!0},397:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),l=i(n),u=r,h=l[s+"."+u]||l[u]||p[u]||o;return n?a.a.createElement(h,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(h,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);