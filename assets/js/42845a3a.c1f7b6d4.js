"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={},o="ObjectQL",l={unversionedId:"developer/plugins/objectql",id:"developer/plugins/objectql",title:"ObjectQL",description:"ObjectQL is an object-oriented, cross-database query syntax. Functions written in ObjectQL syntax are compatible with different types of databases.",source:"@site/docs/developer/plugins/objectql.md",sourceDirName:"developer/plugins",slug:"/developer/plugins/objectql",permalink:"/developer/plugins/objectql",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/plugins/objectql.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"Overview",permalink:"/developer/plugins/overview"},next:{title:"Triggers",permalink:"/developer/plugins/trigger"}},s={},d=[{value:"Adding Data",id:"adding-data",level:2},{value:"insert",id:"insert",level:3},{value:"directInsert",id:"directinsert",level:3},{value:"Modifying Data",id:"modifying-data",level:2},{value:"update",id:"update",level:3},{value:"directUpdate",id:"directupdate",level:3},{value:"Deleting Data",id:"deleting-data",level:2},{value:"delete",id:"delete",level:3},{value:"directDelete",id:"directdelete",level:3},{value:"Finding Data",id:"finding-data",level:2},{value:"find",id:"find",level:3},{value:"find",id:"find-1",level:3},{value:"findOne",id:"findone",level:3},{value:"directFind",id:"directfind",level:3},{value:"aggregate",id:"aggregate",level:3},{value:"directAggregate",id:"directaggregate",level:3},{value:"toConfig",id:"toconfig",level:3},{value:"Query Filters",id:"query-filters",level:2},{value:"About the userSession Parameter",id:"about-the-usersession-parameter",level:2},{value:"About Functions with the direct Prefix",id:"about-functions-with-the-direct-prefix",level:2},{value:"Examples",id:"examples",level:2},{value:"Example of Using ObjectQL in Triggers",id:"example-of-using-objectql-in-triggers",level:3},{value:"Example of Using ObjectQL in a Router",id:"example-of-using-objectql-in-a-router",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"objectql"},"ObjectQL"),(0,i.kt)("p",null,"ObjectQL is an object-oriented, cross-database query syntax. Functions written in ObjectQL syntax are compatible with different types of databases."),(0,i.kt)("p",null,"When developing plugins, the core package ",(0,i.kt)("inlineCode",{parentName:"p"},"@steedos/objectql")," can be directly called to operate the database."),(0,i.kt)("h2",{id:"adding-data"},"Adding Data"),(0,i.kt)("p",null,"Supports adding single data and bulk data, with the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"direct")," indicating that the related operation is executed directly without triggering triggers."),(0,i.kt)("h3",{id:"insert"},"insert"),(0,i.kt)("p",null,"Adds a single record. This function triggers the configured trigger functions: ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeInsert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"afterInsert"),'. For adding special records like "tasks", notifications are sent to specified individuals.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"insert(doc, userSession?)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Parameters"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"doc"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Dictionary<any>")," The data you want to insert."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userSession"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosUserSession")," Current user's login information, optional; if ",(0,i.kt)("inlineCode",{parentName:"li"},"userSession")," is not provided, no permission check is performed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Return Value"),": Data after successful insertion.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { spaceId, userId } = this\nconst objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nvar now = new Date();\nconst doc = {\n    name: 'Xiao Mei',\n    space: spaceId,\n    owner: userId,\n    created_by: userId,\n    modified_by: userId,\n    created: now,\n    modified: now\n};\nconst result = await objectql.getObject(objectApiName).insert(doc);\nconsole.log('result==>',result)\n/*\nresult==> {\n    _id: '84SFjtKFfonskA6CS',\n    name: 'Xiao Mei',\n    space: 'M6x6ddKvpj9ddcYYm',\n    owner: '606d7baa3393516019dbfb39',\n    created_by: '606d7baa3393516019dbfb39',\n    modified_by: '606d7baa3393516019dbfb39',\n    created: 2021-10-27T08:14:47.158Z,\n    modified: 2021-10-27T08:14:47.158Z\n}\n*/\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"doc")," includes a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"_id"),", it is used; otherwise, an ",(0,i.kt)("inlineCode",{parentName:"p"},"_id")," is generated automatically."),(0,i.kt)("p",null,"Built-in tool function to generate ID: ",(0,i.kt)("inlineCode",{parentName:"p"},"objectql.getObject(objectApiName)._makeNewID()")),(0,i.kt)("p",null,"In trigger functions, ",(0,i.kt)("inlineCode",{parentName:"p"},"spaceId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"userId")," values can be obtained through ",(0,i.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Basic Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"Record name"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"space"),(0,i.kt)("td",{parentName:"tr",align:null},"Current workspace ID"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"owner"),(0,i.kt)("td",{parentName:"tr",align:null},"Record owner"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"created_by"),(0,i.kt)("td",{parentName:"tr",align:null},"Creator"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"modified_by"),(0,i.kt)("td",{parentName:"tr",align:null},"Modifier"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"created"),(0,i.kt)("td",{parentName:"tr",align:null},"Creation time"),(0,i.kt)("td",{parentName:"tr",align:null},"no (automatically maintained)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"modified"),(0,i.kt)("td",{parentName:"tr",align:null},"Modification time"),(0,i.kt)("td",{parentName:"tr",align:null},"no (automatically maintained)")))),(0,i.kt)("h3",{id:"directinsert"},"directInsert"),(0,i.kt)("p",null,"Adds a single record. Does not trigger the related trigger functions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"directInsert(doc, userSession?)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Parameters"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"doc"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Dictionary<any>")," The data you want to insert."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userSession"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosUserSession")," Current user's login information, optional; if ",(0,i.kt)("inlineCode",{parentName:"li"},"userSession")," is not provided, no permission check is performed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Return Value"),": Data after successful insertion.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { spaceId, userId } = this\nconst objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nvar now = new Date();\nconst doc = {\n    name: 'Da Ge',\n    space: spaceId,\n    owner: userId,\n    created_by: userId,\n    modified_by: userId,\n    created: now,\n    modified: now\n};\nawait objectql.getObject(objectApiName).directInsert(doc);\n")),(0,i.kt)("h2",{id:"modifying-data"},"Modifying Data"),(0,i.kt)("p",null,"Supports modifying single data and bulk data, with the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"direct")," indicating that the related operation is executed directly without triggering triggers."),(0,i.kt)("h3",{id:"update"},"update"),(0,i.kt)("p",null,"Updates a single record. This function triggers the configured trigger functions: ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeUpdate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"afterUpdate"),'. For updating special records like "tasks", notifications are sent to specified individuals.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"update(id, doc, userSession?)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Parameters"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": number | string The ID of the data you want to change."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"doc"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Dictionary<any>")," The data you want to update."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userSession"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosUserSession")," Current user's login information, optional; if ",(0,i.kt)("inlineCode",{parentName:"li"},"userSession")," is not provided, no permission check is performed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Return Value"),": Data after successful update.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst id = '84SFjtKFfonskA6CS';\nconst doc = {\n    name: \"San Mei\",\n};\nconst result = await objectql.getObject(objectApiName).update(id, doc);\nconsole.log('result==>', result)\n/*\nresult==> {\n    _id: '84SFjtKFfonskA6CS',\n    name: 'San Mei',\n    space: 'M6x6ddKvpj9ddcYYm',\n    owner: '606d7baa3393516019dbfb39',\n    created_by: '606d7baa3393516019dbfb39',\n    modified_by: '606d7baa3393516019dbfb39',\n    created: 2021-10-27T08:14:47.158Z,\n    modified: 2021-10-27T08:50:40.918Z\n}\n*/\n")),(0,i.kt)("h3",{id:"directupdate"},"directUpdate"),(0,i.kt)("p",null,"Updates a single record. Does not trigger the related trigger functions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"directUpdate(id, doc, userSession?)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Parameters"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": number | string The ID of the data you want to change."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"doc"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Dictionary<any>")," The data you want to update."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userSession"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosUserSession")," Current user's login information, optional; if ",(0,i.kt)("inlineCode",{parentName:"li"},"userSession")," is not provided, no permission check is performed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Return Value"),": Data after successful update.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst id = '84SFjtKFfonskA6CS';\nconst doc = {\n    name: \"San Mei-Wan Er\",\n};\nconst result = await objectql.getObject(objectApiName).directUpdate(id,doc);\nconsole.log('result==>',result)\n/* \nresult==> {\n    _id: '84SFjtKFfonskA6CS',\n    name: 'San Mei-Wan Er',\n    space: 'M6x6ddKvpj9ddcYYm',\n    owner: '606d7baa3393516019dbfb39',\n    created_by: '606d7baa3393516019dbfb39',\n    modified_by: '606d7baa3393516019dbfb39',\n    created: 2021-10-27T08:14:47.158Z,\n    modified: 2021-10-27T08:50:40.918Z\n} \n*/\n")),(0,i.kt)("h2",{id:"deleting-data"},"Deleting Data"),(0,i.kt)("p",null,"Supports deleting single data and bulk data, with the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"direct")," indicating that the related operation is executed directly without triggering triggers."),(0,i.kt)("h3",{id:"delete"},"delete"),(0,i.kt)("p",null,"Deletes a single record. This function triggers the configured trigger functions: ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeDelete"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"afterDelete"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"delete(id, userSession?)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Parameters"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": number | string The ID of the data you want to delete."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userSession"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosUserSession")," Current user's login information, optional; if ",(0,i.kt)("inlineCode",{parentName:"li"},"userSession")," is not provided, no permission check is performed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Return Value"),": Success: 1, Failure: throws an error message.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst id = '84SFjtKFfonskA6CS';\nconst result = await objectql.getObject(objectApiName).delete(id);\nconsole.log('result==>',result)\n// result==> 1\n")),(0,i.kt)("h3",{id:"directdelete"},"directDelete"),(0,i.kt)("p",null,"Deletes a single record. Does not trigger the related trigger functions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"directDelete(id, userSession?)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Parameters"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": number | string The ID of the data you want to delete."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userSession"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosUserSession")," Current user's login information, optional; if ",(0,i.kt)("inlineCode",{parentName:"li"},"userSession")," is not provided, no permission check is performed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Return Value"),": Success: 1, Failure: throws an error message.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst id = '9y3QTHCGKwhkTTibg';\nconst result = await objectql.getObject(objectApiName).directDelete(id);\nconsole.log('result==>',result)\n// result==> 1\n")),(0,i.kt)("h2",{id:"finding-data"},"Finding Data"),(0,i.kt)("p",null,"Provides five methods for finding data and one method for viewing object configuration details"),(0,i.kt)("h3",{id:"find"},"find"),(0,i.kt)("p",null,"Finds multiple records. This function triggers the configured trigger functions: ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeFind"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"afterFind"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"find(query, userSession?)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Parameters"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosQueryOptions")," Query data related parameters ","[json]",".")))),(0,i.kt)("h3",{id:"find-1"},"find"),(0,i.kt)("p",null,"Finds multiple records. This function triggers the configured trigger functions: ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeFind"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"afterFind"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"find(query, userSession?)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Parameters"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosQueryOptions")," Query data related parameters ","[json]",".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fields"),": Array of field names, optional. For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"['field1', 'field2']")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filters"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosQueryFilters")," array of query conditions, optional"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sort"),": string sorting rule, optional"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"top"),": number of records to return, optional"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skip"),": number of records to skip, often used for pagination, optional."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userSession"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosUserSession")," Current user's login information, optional; if ",(0,i.kt)("inlineCode",{parentName:"li"},"userSession")," is not provided, no permission check is performed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Return Value"),": Array of records. Returns an empty array ",(0,i.kt)("inlineCode",{parentName:"li"},"[]")," if no records are found.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst query = {\n    fields: ['name', 'created_by','created'],\n    filters: [['name','contains','Leader']],\n    sort: 'name desc'\n};\nconst result = await objectql.getObject(objectApiName).find(query);\nconsole.log('result==>',result)\n/* \nresult==> [\n  {\n    _id: '2iS93Hv8QNcxfMief',\n    name: 'Leader Li',\n    created: 2021-08-25T06:25:37.183Z,\n    created_by: '606d7baa3393516019dbfb39'\n  },\n  {\n    _id: 'zCETjWE6thjWqeyek',\n    name: 'Leader Zhang',\n    created: 2021-10-27T06:50:16.866Z,\n    created_by: '606d7baa3393516019dbfb39'\n  }\n]\n*/\n")),(0,i.kt)("h3",{id:"findone"},"findOne"),(0,i.kt)("p",null,"Finds a single record. This function triggers the configured trigger functions: ",(0,i.kt)("inlineCode",{parentName:"p"},"afterFindOne"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeFind"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"findOne(id, query, userSession?)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Parameters"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": number | string The ID of the record you want to find."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosQueryOptions")," Query data related parameters ","[json]",".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fields"),": Array of field names, optional. For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"['field1', 'field2']")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userSession"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosUserSession")," Current user's login information, optional; if ",(0,i.kt)("inlineCode",{parentName:"li"},"userSession")," is not provided, no permission check is performed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Return Value"),": Single record ","[json]",".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst id = 'ihJqoP3n4mwSDwGxw';\nconst query = {\n    fields: ['name', 'created_by','created'],\n};\nconst result = await objectql.getObject(objectApiName).findOne(id, query);\nconsole.log('result==>',result)\n/* \nresult==> {\n    _id: 'ihJqoP3n4mwSDwGxw',\n    name: 'Zhang San',\n    created: 2021-04-23T08:48:06.513Z,\n    created_by: '606d7baa3393516019dbfb39'\n}\n*/\n")),(0,i.kt)("h3",{id:"directfind"},"directFind"),(0,i.kt)("p",null,"Finds multiple records. Does not trigger related trigger functions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"directFind(query, userSession?)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Parameters"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosQueryOptions")," Query data related parameters ","[json]",".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fields"),": Array of field names, optional. For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"['field1', 'field2']")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filters"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosQueryFilters")," array of query conditions, optional"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sort"),": string sorting rule, optional"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"top"),": number of records to return, optional"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skip"),": number of records to skip, often used for pagination, optional."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userSession"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosUserSession")," Current user's login information, optional; if ",(0,i.kt)("inlineCode",{parentName:"li"},"userSession")," is not provided, no permission check is performed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Return Value"),": Array of records. Returns an empty array ",(0,i.kt)("inlineCode",{parentName:"li"},"[]")," if no records are found.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst query = {\n    fields: ['name', 'created_by','created'],\n    filters: [['name','contains','Leader']],\n    sort: 'name desc',\n    top: 1\n};\nconst result = await objectql.getObject(objectApiName).directFind(query);\nconsole.log('result==>',result)\n/* \nresult==> [\n  {\n    _id: '2iS93Hv8QNcxfMief',\n    name: 'Leader Li',\n    created: 2021-08-25T06:25:37.183Z,\n    created_by: '606d7baa3393516019dbfb39'\n  }\n]\n*/\n")),(0,i.kt)("h3",{id:"aggregate"},"aggregate"),(0,i.kt)("p",null,"Finds aggregate records. This function triggers the configured trigger functions: ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeAggregate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"afterAggregate"),"."),(0,i.kt)("p",null,"Aggregation: Aggregation operations process data records and return computed results. Aggregation combines values from multiple documents and can perform various operations on grouped data to return a single result."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"aggregate(query, externalPipeline, userSession?)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Parameters"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosQueryOptions")," Query data related parameters ","[json]",".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filters"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosQueryFilters")," array of query conditions, optional"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"externalPipeline"),": Array of MongoDB aggregation pipeline"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userSession"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosUserSession")," Current user's login information, optional; if ",(0,i.kt)("inlineCode",{parentName:"li"},"userSession")," is not provided, no permission check is performed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Return Value"),": Array of aggregate records.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Example 1:\nconst objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst query = {filters: [[\"name\",\"contains\",'Leader']]};\nconst externalPipeline = [{ $count: 'leaders_count'}];\nconst result = await objectql.getObject(objectApiName).aggregate(query, externalPipeline);\nconsole.log('result==>',result)\n// leaders_count: Number of contacts whose names contain \"Leader\".\n// result==> [ { leaders_count: 7 } ]\n\n// Example 2:\nconst objectql = require('@steedos/objectql');\nconst objectApiName = \"accounts\"; \nconst query = {filters: [[\"is_customer\",\"=\",true]]}; \nconst externalPipeline = [{ $group: {_id:'total', total: { '$sum': '$number_of_employees'}}}];\nconst result = await objectql.getObject(objectApiName).aggregate(query, externalPipeline);\nconsole.log('result==>',result)\n// total: Total number of employees in business partners that are customers.\n//result==> [ { _id: 'total', total: 450 } ]\n")),(0,i.kt)("h3",{id:"directaggregate"},"directAggregate"),(0,i.kt)("p",null,"Finds aggregate records. Does not trigger related trigger functions."),(0,i.kt)("p",null,"Aggregation: Aggregation operations process data records and return computed results. Aggregation combines values from multiple documents and can perform various operations on grouped data to return a single result."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"directAggregate(query, externalPipeline, userSession?)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Parameters"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosQueryOptions")," Query data related parameters ","[json]",".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filters"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosQueryFilters")," array of query conditions, optional"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"externalPipeline"),": Array of MongoDB aggregation pipeline"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userSession"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SteedosUserSession")," Current user's login information, optional; if ",(0,i.kt)("inlineCode",{parentName:"li"},"userSession")," is not provided, no permission check is performed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Return Value"),": Array of aggregate records.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\n// Example 1:\nconst objectql = require('@steedos/objectql');\n// contacts: Contact object\nconst objectApiName = \"contacts\";\n// filters: Names containing \"Leader\" in contacts\nconst query = {filters: [[\"name\",\"contains\",'Leader']]};\nconst externalPipeline = [{ $count: 'leaders_count'}];\nconst result = await objectql.getObject(objectApiName).directAggregate(query, externalPipeline);\nconsole.log('result==>',result)\n// leaders_count: Number of contacts whose names contain \"Leader\".\n// result==> [ { leaders_count: 7 } ]\n\n// Example 2:\nconst objectql = require('@steedos/objectql');\n// accounts: Business partner object\nconst objectApiName = \"accounts\"; \n// is_customer: Field name, whether the business partner is a customer\nconst query = {filters: [[\"is_customer\",\"=\",true]]}; \n// number_of_employees: Field name, number of employees\nconst externalPipeline = [{ $group: {_id:'total', total: { '$sum': '$number_of_employees'}}}];\nconst result = await objectql.getObject(objectApiName).directAggregate(query, externalPipeline);\nconsole.log('result==>',result)\n// total: Total number of employees in business partners that are customers.\n//result==> [ { _id: 'total', total: 450 } ]\n")),(0,i.kt)("h3",{id:"toconfig"},"toConfig"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"toConfig()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Return Value"),": Details of the object configuration.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contracts\";\nconst result = await objectql.getObject(objectApiName).toConfig();\n/* result:   \n{ \n  name: 'contracts', \n  fields: {\n    name:{\n      name: 'name',\n      label: 'Title',\n      type: 'text',\n      required: true,\n      ...\n    },\n    ...\n  },\n  version: 2,\n  list_views: {\n    all: {\n      name: 'all',\n      ...\n    }\n  },\n  actions: xxx,\n  triggers: xxx,\n  permission_set: xxx,\n  ...\n} \n*/\n")),(0,i.kt)("h2",{id:"query-filters"},"Query Filters"),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/protocol/api-records-filters"},"Filter Criteria Specification"),"."),(0,i.kt)("h2",{id:"about-the-usersession-parameter"},"About the userSession Parameter"),(0,i.kt)("p",null,"All the above functions can accept an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"userSession")," parameter, representing the current user's login information. If this parameter is provided, the related operation functions will only perform data operations for which the current logged-in user has permission."),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("strong",{parentName:"p"},"insert(doc, userSession?)")," function will directly execute data insertion operations without performing permission checks if ",(0,i.kt)("inlineCode",{parentName:"p"},"userSession")," is not provided. Conversely, if ",(0,i.kt)("inlineCode",{parentName:"p"},"userSession")," is provided, it will perform related permission checks, and the data insertion operation will only be executed if the current user has creation permissions for the current object."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"update(id, doc, userSession?)")," function is similar; if ",(0,i.kt)("inlineCode",{parentName:"p"},"userSession")," is not provided, it will directly execute data update operations without performing permission checks. Conversely, if ",(0,i.kt)("inlineCode",{parentName:"p"},"userSession")," is provided, it will perform related permission checks, and the data update operation will only be executed if the current user has edit permissions for the current object and the record to be edited."),(0,i.kt)("p",null,"Similarly, the ",(0,i.kt)("strong",{parentName:"p"},"find(query, userSession?)")," function will return all data satisfying the filter criteria without performing permission checks if ",(0,i.kt)("inlineCode",{parentName:"p"},"userSession")," is not provided. Conversely, if ",(0,i.kt)("inlineCode",{parentName:"p"},"userSession")," is provided, it will perform related permission checks and only return the data that the current logged-in user is authorized to view."),(0,i.kt)("h2",{id:"about-functions-with-the-direct-prefix"},"About Functions with the direct Prefix"),(0,i.kt)("p",null,"The above functions can be divided into two types: those named with the ",(0,i.kt)("inlineCode",{parentName:"p"},"direct")," prefix and those without the ",(0,i.kt)("inlineCode",{parentName:"p"},"direct")," prefix."),(0,i.kt)("p",null,"Functions named with the ",(0,i.kt)("inlineCode",{parentName:"p"},"direct")," prefix: Executing a ",(0,i.kt)("inlineCode",{parentName:"p"},"direct")," function means directly operating on database records, and it will not trigger related trigger functions, nor will it trigger any workflow rules, formula fields, or recalculations of roll-up summary fields."),(0,i.kt)("p",null,"Functions not named with the ",(0,i.kt)("inlineCode",{parentName:"p"},"direct")," prefix: After the completion of related operations like ",(0,i.kt)("strong",{parentName:"p"},"insert/update/find"),", etc., these will further trigger the execution of related trigger functions configured on that object, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeUpdate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"afterUpdate"),", etc.; then, they will trigger the execution of workflow rules that meet the conditions; subsequently, they will also trigger the recalculation of associated formula fields and roll-up summary fields."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Below are some examples of using ObjectQL functions in practical programming scenarios."),(0,i.kt)("h3",{id:"example-of-using-objectql-in-triggers"},"Example of Using ObjectQL in Triggers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const auth = require("@steedos/auth");\nconst generatHtml = (doc)=>{\n  ...\n}\nmodule.exports = {\n    listenTo: \'web_forms\',\n    afterInsert: async function () {\n        let doc = this.doc;\n        let generatedHtml = generatHtml(doc);\n        if(generatedHtml){\n            const object = this.getObject("web_forms");\n            const userSession = await auth.getSessionByUserId(this.userId);\n            await object.directUpdate(doc._id, {generated_html: generatedHtml}, userSession);\n        }\n    },\n    afterUpdate: async function () {\n        // Since there\'s no this.doc._id in afterUpdate, integrate previousDoc, and when editing a single field, also integrate other fields from previousDoc\n        let doc = Object.assign({}, this.previousDoc, this.doc);\n        let generatedHtml = generatHtml(doc);\n        if(generatedHtml){\n            const object = this.getObject("web_forms");\n            const userSession = await auth.getSessionByUserId(this.userId);\n            await object.directUpdate(doc._id, {generated_html: generatedHtml}, userSession);\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"example-of-using-objectql-in-a-router"},"Example of Using ObjectQL in a Router"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const express = require(\"express\");\nconst router = express.Router();\nconst core = require('@steedos/core');\nconst objectql = require('@steedos/objectql');\n\nrouter.post('/api/contracts/locked/:id', core.requireAuthentication, async function (req, res) {\n    const userSession = req.user;\n    const isSpaceAdmin = userSession.is_space_admin;\n    if(isSpaceAdmin){\n        const { id } = req.params;\n        await objectql.getObject(\"contracts\").update(id, {\n            locked: true\n        });\n        res.status(200).send({ message: 'Contract successfully archived', success: true });\n    }\n});\nexports.default = router;\n")))}c.isMDXComponent=!0}}]);