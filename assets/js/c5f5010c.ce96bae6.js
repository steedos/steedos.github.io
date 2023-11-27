"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8479],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var r=i(7294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,s=function(e,t){if(null==e)return{};var i,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var a=r.createContext({}),c=function(e){var t=r.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,s=e.mdxType,n=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(i),m=s,f=p["".concat(a,".").concat(m)]||p[m]||u[m]||n;return i?r.createElement(f,o(o({ref:t},d),{},{components:i})):r.createElement(f,o({ref:t},d))}));function f(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=i.length,o=new Array(n);o[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:s,o[1]=l;for(var c=2;c<n;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},1192:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=i(7462),s=(i(7294),i(3905));const n={sidebar_position:6},o="Field Permissions",l={unversionedId:"admin/permissions/field-permissions",id:"admin/permissions/field-permissions",title:"Field Permissions",description:"Field permissions specify the access level for each field in an object.",source:"@site/docs/admin/permissions/field-permissions.md",sourceDirName:"admin/permissions",slug:"/admin/permissions/field-permissions",permalink:"/admin/permissions/field-permissions",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/admin/permissions/field-permissions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"platform",previous:{title:"Object Permissions",permalink:"/admin/permissions/object-permissions"},next:{title:"Application Permissions",permalink:"/admin/permissions/app-permissions"}},a={},c=[{value:"What Determines Field Access?",id:"what-determines-field-access",level:2},{value:"Field-Level Security",id:"field-level-security",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,s.kt)(p,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"field-permissions"},"Field Permissions"),(0,s.kt)("p",null,"Field permissions specify the access level for each field in an object. "),(0,s.kt)("h2",{id:"what-determines-field-access"},"What Determines Field Access?"),(0,s.kt)("p",null,"Several factors control whether users can view and edit specific fields in Steedos. You can control users\u2019 access to fields at the record type, user, or field level."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Page layouts\u2014Set whether fields are visible, required, editable, or read only for a particular record type."),(0,s.kt)("li",{parentName:"ul"},"Field-level security\u2014Further restrict users\u2019 access to fields by setting whether those fields are visible, editable, or read only. These settings override field properties set in the page layout if the field-level security setting is more restrictive."),(0,s.kt)("li",{parentName:"ul"},"Permissions\u2014Some user permissions override both page layouts and field-level security settings. For example, users with the \u201cEdit Read Only Fields\u201d permission can always edit read-only fields regardless of any other settings."),(0,s.kt)("li",{parentName:"ul"},"Object required fields\u2014Override field-level security or any less-restrictive settings on page layouts by making a custom field universally required."),(0,s.kt)("li",{parentName:"ul"},"Lookup and system fields\u2014If you enable the Require permission to view record names in lookup fields setting, you restrict who can view record names in lookup and system fields. Users must have Read access to these records or the View All Lookup Record Names permission to view this data.")),(0,s.kt)("h2",{id:"field-level-security"},"Field-Level Security"),(0,s.kt)("p",null,"Field-level security settings let you restrict users\u2019 access to view and edit specific fields."),(0,s.kt)("p",null,"Page layouts and field-level security settings determine which fields a user sees. The most restrictive field access settings of the two always applies. For example, you can have a field that\u2019s required in a page layout but is read-only in the field-level security settings. The field-level security overrides the page layout, so the field remains read-only."))}u.isMDXComponent=!0}}]);