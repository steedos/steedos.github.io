(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),i=(n(0),n(382)),o={title:"Form design"},l={id:"us/help/workflow/form_design",title:"Form design",description:"Admins can select corresponding fields to make forms according to the physical forms. User interfaces vary with field types. For instance, users can select one in several options when selection box is added by admins. User can only input numbers when \u201cNumber\u201d field is added. You can refer to \u201c[Form fields](form_fields.md)\u201d for more details.",source:"@site/../docs/us/help/workflow/form_design.md",permalink:"/us/help/workflow/form_design",sidebar:"Steedos Help",previous:{title:"Form categories",permalink:"/us/help/workflow/form_category"},next:{title:"Form fields",permalink:"/us/help/workflow/form_fields"}},c=[],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Admins can select corresponding fields to make forms according to the physical forms. User interfaces vary with field types. For instance, users can select one in several options when selection box is added by admins. User can only input numbers when \u201cNumber\u201d field is added. You can refer to \u201c",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/us/help/workflow/form_fields"}),"Form fields"),"\u201d for more details."),Object(i.b)("p",null,"The following steps illustrate how to design a \u201cReimbursement\u201d form."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click on \u201cAdd Workflow\u201d at the top of pop-up interface."),Object(i.b)("li",{parentName:"ul"},"Click on \u201cSettings\u201d and then click \u201cWorkflow Designer\u201d after having entered the workspace."),Object(i.b)("li",{parentName:"ul"},"Then enter the flow name \u201cReimbursement\u201d and click \u201cOK\u201d."),Object(i.b)("li",{parentName:"ul"},"Click on \u201cReimbursement\u201d in the corresponding category. The pop-up interface will be \u201cworkflow\u201d by default. Then click on \u201cForm\u201d at the top of the page to switch the interface."),Object(i.b)("li",{parentName:"ul"},"Add Fields.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Click on \u201cAdd Fields\u201d in \u201cForm\u201d page. Then select \u201cText\u201d under \u201cInput\u201d and move it to appropriate place in the left region of the page."),Object(i.b)("li",{parentName:"ul"},"Then select the previous \u201cText\u201d. Click on \u201cProperties\u201d and all properties of the \u201cText\u201d will be displayed. You can modify the properties if necessary. For instance, in the \u201cReimbursement\u201d form, we modify field name from \u201cText\u201d to \u201cOrganization\u201d. What\u2019s more, you can input \u201c(applicant.organization.fullname)\u201d in the formula box. After that, the system will find the organization automatically once an applicant submits a request. You can refer to \u201c",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/us/help/workflow/form_formula"}),"Field Formula"),"\u201d for more details.")))),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/assets/us/workflow/14.png",alt:null}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Then we should add more detailed information to the \u201cReimbursement\u201d form. So we add a \u201cTable\u201d field. The adding method is the same as adding a \u201cText\u201d field."),Object(i.b)("li",{parentName:"ul"},"Next, we can modify the properties of \u201ctable\u201d field. All properties of the \u201cTable\u201d will be displayed after clicking on \u201cProperties\u201d. For instance, we can modify the field name from \u201cTable\u201d to \u201cExpense Reports\u201d. Input \u201cplease enter the actual use of all invoices\u201d in description box."),Object(i.b)("li",{parentName:"ul"},"Then we can add \u201cExpense Category\u201d, \u201cAmount\u201d, \u201cDate\u201d and \u201cTotal Amounts\u201d in the \u201cExpense Report\u201d.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Expense Category",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It is a \u201cDrop-down\u201d field. We can modify its property. For instance, we can input several options in \u201cList Values\u201d box and select it as a required field."))),Object(i.b)("li",{parentName:"ul"},"Amount",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It is a \u201cNumber\u201d field. We can modify its property. For instance, we can input its decimal places and default value. Except for that, we can select whether it is a required and wide field."))),Object(i.b)("li",{parentName:"ul"},"Date",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Then we add a date filed and modify its field name to \u201cThe date when the expense is incurred \u201d. Next, select it as a required field."))),Object(i.b)("li",{parentName:"ul"},"Remarks",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It\u2019s a text filed and we modify its name to\u201cRemarks\u201d."))),Object(i.b)("li",{parentName:"ul"},"Total Amounts",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It\u2019s a number field and we modify its name to \u201cTotal Amounts\u201d. Next we input \u201csum ({Amount})\u201d in formula box. Then the system will automatically calculate the total amount when an applicant submits a reimbursement request."))))),Object(i.b)("li",{parentName:"ul"},"Click the \u201c-\u201d icon to delete the field."),Object(i.b)("li",{parentName:"ul"},"Drag the field to move its location."),Object(i.b)("li",{parentName:"ul"},"Save the form by click \u201cSave\u201d, and then click \u201cClose\u201d."),Object(i.b)("li",{parentName:"ul"},"Return to workflow designer interface. "),Object(i.b)("li",{parentName:"ul"},"Run the flow.")),Object(i.b)("p",null,"If steps above are finished, then initiators can submit reimbursement requests."))}p.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(f,l({ref:t},s,{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);