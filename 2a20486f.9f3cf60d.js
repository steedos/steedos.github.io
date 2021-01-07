(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),l=(n(0),n(440)),o={title:"Formulas of form field"},i={unversionedId:"us/help/workflow/form_formula",id:"us/help/workflow/form_formula",isDocsHomePage:!1,title:"Formulas of form field",description:"If the field formula is added, the system can automatically calculate the value of the field when applicants fill in the forms.",source:"@site/../docs/us/help/workflow/form_formula.md",slug:"/us/help/workflow/form_formula",permalink:"/us/help/workflow/form_formula",version:"current",sidebar:"Steedos Help",previous:{title:"Form tables",permalink:"/us/help/workflow/form_table"},next:{title:"Formula of form name",permalink:"/us/help/workflow/form_name_formula"}},c=[],p={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"If the field formula is added, the system can automatically calculate the value of the field when applicants fill in the forms."),Object(l.b)("h4",{id:"common-formulas"},"Common formulas"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Value of a field: {amount}")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Functions based on field values"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Add\uff1a{field A}+{field B}"),Object(l.b)("li",{parentName:"ul"},"Subtract\uff1a{field A}-{field B}"),Object(l.b)("li",{parentName:"ul"},"Multiply\uff1a{field A}*{ field B }"),Object(l.b)("li",{parentName:"ul"},"Divide\uff1a{field A}/{ field B }"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Functions based on numeric field in tables"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SUM: sum ({expense})"),Object(l.b)("li",{parentName:"ul"},"AVERAGE\uff1aaverage({expense})"),Object(l.b)("li",{parentName:"ul"},"COUNT\uff1acount({item})"),Object(l.b)("li",{parentName:"ul"},"MAXIUM\uff1amax({expense})"),Object(l.b)("li",{parentName:"ul"},"MINIUM\uff1amin({expense})"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"System variables based on applicants"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Name\uff1a{applicant.name}"),Object(l.b)("li",{parentName:"ul"},"Organization\uff08full path\uff09\uff1a{applicant.organization.fullname}"),Object(l.b)("li",{parentName:"ul"},"Organization\uff08name of the lowest organization\uff09\uff1a{applicant.organization.name}"),Object(l.b)("li",{parentName:"ul"},"Role name: {applicant.roles}"),Object(l.b)("li",{parentName:"ul"},"Mobile:{applicant.mobile}"),Object(l.b)("li",{parentName:"ul"},"Work phone:{applicant.work_phone}"),Object(l.b)("li",{parentName:"ul"},"Position: {applicant.position}"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"System variables based on name field in forms"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Organization\uff08full path)\uff1a{name}.organization.fullname"),Object(l.b)("li",{parentName:"ul"},"Organization\uff08name of the lowest organization\uff09\uff1a{name}.organization.name"),Object(l.b)("li",{parentName:"ul"},"Roles:{name}.roles"),Object(l.b)("li",{parentName:"ul"},"Name:{name}.name"),Object(l.b)("li",{parentName:"ul"},"Mobile:{name}.mobile"),Object(l.b)("li",{parentName:"ul"},"Work phone:{name}.work_phone"),Object(l.b)("li",{parentName:"ul"},"Position:{name}.position")))))}u.isMDXComponent=!0},440:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},m=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,s=m["".concat(o,".").concat(f)]||m[f]||b[f]||l;return n?r.a.createElement(s,i({ref:t},p,{components:n})):r.a.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);