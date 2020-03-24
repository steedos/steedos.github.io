(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{176:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return m})),t.d(a,"default",(function(){return u}));var n=t(1),l=t(9),r=(t(0),t(397)),i={title:"Formulas of form field"},o={id:"us/help/workflow/form_formula",title:"Formulas of form field",description:"If the field formula is added, the system can automatically calculate the value of the field when applicants fill in the forms.",source:"@site/../docs/us/help/workflow/form_formula.md",permalink:"/us/help/workflow/form_formula",sidebar:"Steedos Help",previous:{title:"Form tables",permalink:"/us/help/workflow/form_table"},next:{title:"Formula of form name",permalink:"/us/help/workflow/form_name_formula"}},m=[],p={rightToc:m},c="wrapper";function u(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)(c,Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If the field formula is added, the system can automatically calculate the value of the field when applicants fill in the forms."),Object(r.b)("h4",{id:"common-formulas"},"Common formulas"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Value of a field: {amount}")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Functions based on field values"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Add\uff1a{field A}+{field B}"),Object(r.b)("li",{parentName:"ul"},"Subtract\uff1a{field A}-{field B}"),Object(r.b)("li",{parentName:"ul"},"Multiply\uff1a{field A}*{ field B }"),Object(r.b)("li",{parentName:"ul"},"Divide\uff1a{field A}/{ field B }"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Functions based on numeric field in tables"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"SUM: sum ({expense})"),Object(r.b)("li",{parentName:"ul"},"AVERAGE\uff1aaverage({expense})"),Object(r.b)("li",{parentName:"ul"},"COUNT\uff1acount({item})"),Object(r.b)("li",{parentName:"ul"},"MAXIUM\uff1amax({expense})"),Object(r.b)("li",{parentName:"ul"},"MINIUM\uff1amin({expense})"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"System variables based on applicants"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Name\uff1a{applicant.name}"),Object(r.b)("li",{parentName:"ul"},"Organization\uff08full path\uff09\uff1a{applicant.organization.fullname}"),Object(r.b)("li",{parentName:"ul"},"Organization\uff08name of the lowest organization\uff09\uff1a{applicant.organization.name}"),Object(r.b)("li",{parentName:"ul"},"Role name: {applicant.roles}"),Object(r.b)("li",{parentName:"ul"},"Mobile:{applicant.mobile}"),Object(r.b)("li",{parentName:"ul"},"Work phone:{applicant.work_phone}"),Object(r.b)("li",{parentName:"ul"},"Position: {applicant.position}"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"System variables based on name field in forms"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Organization\uff08full path)\uff1a{name}.organization.fullname"),Object(r.b)("li",{parentName:"ul"},"Organization\uff08name of the lowest organization\uff09\uff1a{name}.organization.name"),Object(r.b)("li",{parentName:"ul"},"Roles:{name}.roles"),Object(r.b)("li",{parentName:"ul"},"Name:{name}.name"),Object(r.b)("li",{parentName:"ul"},"Mobile:{name}.mobile"),Object(r.b)("li",{parentName:"ul"},"Work phone:{name}.work_phone"),Object(r.b)("li",{parentName:"ul"},"Position:{name}.position")))))}u.isMDXComponent=!0},397:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return u}));var n=t(0),l=t.n(n),r=l.a.createContext({}),i=function(e){var a=l.a.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):Object.assign({},a,e)),t},o=function(e){var a=i(e.components);return l.a.createElement(r.Provider,{value:a},e.children)};var m="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},c=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,m=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===a.indexOf(n)&&(t[n]=e[n]);return t}(e,["components","mdxType","originalType","parentName"]),c=i(t),u=n,b=c[o+"."+u]||c[u]||p[u]||r;return t?l.a.createElement(b,Object.assign({},{ref:a},m,{components:t})):l.a.createElement(b,Object.assign({},{ref:a},m))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);