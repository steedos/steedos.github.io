"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4941],{3905:(e,s,t)=>{t.d(s,{Zo:()=>d,kt:()=>h});var r=t(7294);function i(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function n(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?n(Object(t),!0).forEach((function(s){i(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function a(e,s){if(null==e)return{};var t,r,i=function(e,s){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],s.indexOf(t)>=0||(i[t]=e[t]);return i}(e,s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var s=r.useContext(l),t=s;return e&&(t="function"==typeof e?e(s):o(o({},s),e)),t},d=function(e){var s=c(e.components);return r.createElement(l.Provider,{value:s},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var s=e.children;return r.createElement(r.Fragment,{},s)}},m=r.forwardRef((function(e,s){var t=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||n;return t?r.createElement(h,o(o({ref:s},d),{},{components:t})):r.createElement(h,o({ref:s},d))}));function h(e,s){var t=arguments,i=s&&s.mdxType;if("string"==typeof e||i){var n=t.length,o=new Array(n);o[0]=m;var a={};for(var l in s)hasOwnProperty.call(s,l)&&(a[l]=s[l]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<n;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4977:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const n={title:"Control Who Sees What",sidebar_position:1},o=void 0,a={unversionedId:"admin/permissions/overview",id:"admin/permissions/overview",title:"Control Who Sees What",description:"Steedos data sharing lets you expose specific data sets to individuals and groups of users. Permission sets, permission set groups, and profiles provide object-level and field-level security by controlling access. Record-level sharing settings, user roles, and sharing rules control the individual records that users can view and edit.",source:"@site/docs/admin/permissions/overview.md",sourceDirName:"admin/permissions",slug:"/admin/permissions/overview",permalink:"/admin/permissions/overview",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/admin/permissions/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Control Who Sees What",sidebar_position:1},sidebar:"platform",previous:{title:"Manage Data Access",permalink:"/admin/permissions/"},next:{title:"Profiles",permalink:"/admin/permissions/profile"}},l={},c=[{value:"Object-Level Security (Permission Sets and Profiles)",id:"object-level-security-permission-sets-and-profiles",level:3},{value:"Field-Level Security (Permission Sets and Profiles)",id:"field-level-security-permission-sets-and-profiles",level:3},{value:"Record-Level Security (Sharing)",id:"record-level-security-sharing",level:3},{value:"Sharing rules",id:"sharing-rules",level:4},{value:"Restriction rules",id:"restriction-rules",level:4},{value:"Trigger managed permissions",id:"trigger-managed-permissions",level:4}],d={toc:c},u="wrapper";function p(e){let{components:s,...t}=e;return(0,i.kt)(u,(0,r.Z)({},d,t,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Steedos data sharing lets you expose specific data sets to individuals and groups of users. Permission sets, permission set groups, and profiles provide object-level and field-level security by controlling access. Record-level sharing settings, user roles, and sharing rules control the individual records that users can view and edit."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://console.steedos.cn/api/files/images/hiRT2YQZYjKPvqL6o",alt:"\u6743\u9650\u5f15\u64ce \u793a\u610f\u56fe",title:"\u6743\u9650\u5f15\u64ce \u793a\u610f\u56fe"})),(0,i.kt)("h3",{id:"object-level-security-permission-sets-and-profiles"},"Object-Level Security (Permission Sets and Profiles)"),(0,i.kt)("p",null,"Object-level security\u2014or object permissions\u2014provide the bluntest way to control data access. You can prevent a user from seeing, creating, editing, or deleting any instance of a particular object type, such as a lead or opportunity, by using object permissions. You can hide tabs and objects from selected users, so that they don\u2019t even know that type of data exists."),(0,i.kt)("p",null,"You can specify object permissions in permission sets and profiles. Permission sets and profiles are collections of settings and permissions that determine what a user can do in the application. The settings are similar to a group in a Windows network, where the members of the group have the same folder permissions and access to the same software."),(0,i.kt)("p",null,"Typically, profiles are defined by a user\u2019s job function, such as Steedos admin or sales representative. You can assign one profile to many users, but you can assign only one profile per user. You can use permission sets to grant more permissions and access settings to users. Now it\u2019s easier to manage users\u2019 permissions and access because you can assign multiple permission sets to a single user."),(0,i.kt)("h3",{id:"field-level-security-permission-sets-and-profiles"},"Field-Level Security (Permission Sets and Profiles)"),(0,i.kt)("p",null,"Sometimes you want users to have access to an object while limiting their access to individual fields in that object. Field-level security\u2014or field permissions\u2014control whether a user can see, edit, and delete the value for a particular field on an object. You can protect sensitive fields without hiding the entire object. You also can control field permissions in permission sets and profiles."),(0,i.kt)("p",null,"Field permissions control the visibility of fields in any part of the app, including related lists, list views, reports, and search results. To ensure that a user can\u2019t access a particular field, use field permissions. No other settings provide as much protection for a field. Page layouts only control the visibility of fields on detail and edit pages."),(0,i.kt)("h3",{id:"record-level-security-sharing"},"Record-Level Security (Sharing)"),(0,i.kt)("p",null,"After setting object- and field-level access permissions, you can configure access settings for records. Record-level security lets you give users access to some object records, but not others. Every record is owned by a user or a queue. The owner has full access to the record. In a hierarchy, users higher in the hierarchy always have the same access to users below them in the hierarchy. This access applies to records owned by users and records shared with them."),(0,i.kt)("h4",{id:"sharing-rules"},"Sharing rules"),(0,i.kt)("p",null,"With sharing rules you can make automatic exceptions to organization-wide sharing settings for sets of users. Use sharing rules to give these users access to records they don\u2019t own or can\u2019t normally see. Sharing rules, like role hierarchies, are only used to give more users access to records\u2014they can\u2019t be stricter than your organization-wide default settings."),(0,i.kt)("h4",{id:"restriction-rules"},"Restriction rules"),(0,i.kt)("p",null,"When a restriction rule is applied to a user, the data that they had read access to via your sharing settings is further scoped to only records matching the record criteria that you set. This behavior is similar to how you can filter results in a list view or report, except that it\u2019s permanent."),(0,i.kt)("h4",{id:"trigger-managed-permissions"},"Trigger managed permissions"),(0,i.kt)("p",null,"If sharing rules and manual sharing don\u2019t provide the required control, you can use trigger managed sharing. trigger managed sharing allows developers to programmatically share custom objects."))}p.isMDXComponent=!0}}]);