(self.webpackChunk=self.webpackChunk||[]).push([[7643],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return f},kt:function(){return d}});var a=n(67294),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r().createContext({}),m=function(e){var t=r().useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=m(e.components);return r().createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},s=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=m(n),s=a,d=f["".concat(o,".").concat(s)]||f[s]||c[s]||l;return n?r().createElement(d,i(i({ref:t},p),{},{components:n})):r().createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r().createElement.apply(null,o)}return r().createElement.apply(null,n)}s.displayName="MDXCreateElement"},88938:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var a=n(74034),r=n(79973),l=(n(67294),n(3905)),o=["components"],i={title:"Formulas of form field"},u=void 0,p={unversionedId:"us/help/workflow/form_formula",id:"us/help/workflow/form_formula",isDocsHomePage:!1,title:"Formulas of form field",description:"If the field formula is added, the system can automatically calculate the value of the field when applicants fill in the forms.",source:"@site/../docs/us/help/workflow/form_formula.md",sourceDirName:"us/help/workflow",slug:"/us/help/workflow/form_formula",permalink:"/us/help/workflow/form_formula",version:"current",frontMatter:{title:"Formulas of form field"},sidebar:"Steedos Help",previous:{title:"Form tables",permalink:"/us/help/workflow/form_table"},next:{title:"Formula of form name",permalink:"/us/help/workflow/form_name_formula"}},m=[],f={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"If the field formula is added, the system can automatically calculate the value of the field when applicants fill in the forms."),(0,l.kt)("h4",{id:"common-formulas"},"Common formulas"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Value of a field: {amount}")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Functions based on field values"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Add\uff1a{field A}+{field B}"),(0,l.kt)("li",{parentName:"ul"},"Subtract\uff1a{field A}-{field B}"),(0,l.kt)("li",{parentName:"ul"},"Multiply\uff1a{field A}*{ field B }"),(0,l.kt)("li",{parentName:"ul"},"Divide\uff1a{field A}/{ field B }"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Functions based on numeric field in tables"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SUM: sum ({expense})"),(0,l.kt)("li",{parentName:"ul"},"AVERAGE\uff1aaverage({expense})"),(0,l.kt)("li",{parentName:"ul"},"COUNT\uff1acount({item})"),(0,l.kt)("li",{parentName:"ul"},"MAXIUM\uff1amax({expense})"),(0,l.kt)("li",{parentName:"ul"},"MINIUM\uff1amin({expense})"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"System variables based on applicants"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name\uff1a{applicant.name}"),(0,l.kt)("li",{parentName:"ul"},"Organization\uff08full path\uff09\uff1a{applicant.organization.fullname}"),(0,l.kt)("li",{parentName:"ul"},"Organization\uff08name of the lowest organization\uff09\uff1a{applicant.organization.name}"),(0,l.kt)("li",{parentName:"ul"},"Role name: {applicant.roles}"),(0,l.kt)("li",{parentName:"ul"},"Mobile:{applicant.mobile}"),(0,l.kt)("li",{parentName:"ul"},"Work phone:{applicant.work_phone}"),(0,l.kt)("li",{parentName:"ul"},"Position: {applicant.position}"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"System variables based on name field in forms"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Organization\uff08full path)\uff1a{name}.organization.fullname"),(0,l.kt)("li",{parentName:"ul"},"Organization\uff08name of the lowest organization\uff09\uff1a{name}.organization.name"),(0,l.kt)("li",{parentName:"ul"},"Roles:{name}.roles"),(0,l.kt)("li",{parentName:"ul"},"Name:{name}.name"),(0,l.kt)("li",{parentName:"ul"},"Mobile:{name}.mobile"),(0,l.kt)("li",{parentName:"ul"},"Work phone:{name}.work_phone"),(0,l.kt)("li",{parentName:"ul"},"Position:{name}.position")))))}c.isMDXComponent=!0}}]);