"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7411],{6020:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var r=s(74848),i=s(28453);const t={},d="ObjectQL",o={id:"developer/plugins/objectql",title:"ObjectQL",description:"ObjectQL is an object-oriented, cross-database query syntax. Functions written in ObjectQL syntax are compatible with different types of databases.",source:"@site/docs/developer/plugins/objectql.md",sourceDirName:"developer/plugins",slug:"/developer/plugins/objectql",permalink:"/developer/plugins/objectql",draft:!1,unlisted:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/plugins/objectql.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"Overview",permalink:"/developer/plugins/overview"},next:{title:"Triggers",permalink:"/developer/plugins/trigger"}},c={},l=[{value:"Adding Data",id:"adding-data",level:2},{value:"insert",id:"insert",level:3},{value:"directInsert",id:"directinsert",level:3},{value:"Modifying Data",id:"modifying-data",level:2},{value:"update",id:"update",level:3},{value:"directUpdate",id:"directupdate",level:3},{value:"Deleting Data",id:"deleting-data",level:2},{value:"delete",id:"delete",level:3},{value:"directDelete",id:"directdelete",level:3},{value:"Finding Data",id:"finding-data",level:2},{value:"find",id:"find",level:3},{value:"find",id:"find-1",level:3},{value:"findOne",id:"findone",level:3},{value:"directFind",id:"directfind",level:3},{value:"aggregate",id:"aggregate",level:3},{value:"directAggregate",id:"directaggregate",level:3},{value:"toConfig",id:"toconfig",level:3},{value:"About the userSession Parameter",id:"about-the-usersession-parameter",level:2},{value:"About Functions with the direct Prefix",id:"about-functions-with-the-direct-prefix",level:2},{value:"Examples",id:"examples",level:2},{value:"Example of Using ObjectQL in Triggers",id:"example-of-using-objectql-in-triggers",level:3},{value:"Example of Using ObjectQL in a Router",id:"example-of-using-objectql-in-a-router",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"objectql",children:"ObjectQL"}),"\n",(0,r.jsx)(n.p,{children:"ObjectQL is an object-oriented, cross-database query syntax. Functions written in ObjectQL syntax are compatible with different types of databases."}),"\n",(0,r.jsxs)(n.p,{children:["When developing plugins, the core package ",(0,r.jsx)(n.code,{children:"@steedos/objectql"})," can be directly called to operate the database."]}),"\n",(0,r.jsx)(n.h2,{id:"adding-data",children:"Adding Data"}),"\n",(0,r.jsxs)(n.p,{children:["Supports adding single data and bulk data, with the prefix ",(0,r.jsx)(n.code,{children:"direct"})," indicating that the related operation is executed directly without triggering triggers."]}),"\n",(0,r.jsx)(n.h3,{id:"insert",children:"insert"}),"\n",(0,r.jsxs)(n.p,{children:["Adds a single record. This function triggers the configured trigger functions: ",(0,r.jsx)(n.code,{children:"beforeInsert"}),", ",(0,r.jsx)(n.code,{children:"afterInsert"}),'. For adding special records like "tasks", notifications are sent to specified individuals.']}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": ",(0,r.jsx)(n.code,{children:"insert(doc, userSession?)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"doc"}),": ",(0,r.jsx)(n.code,{children:"Dictionary<any>"})," The data you want to insert."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"userSession"}),": ",(0,r.jsx)(n.code,{children:"SteedosUserSession"})," Current user's login information, optional; if ",(0,r.jsx)(n.code,{children:"userSession"})," is not provided, no permission check is performed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Return Value"}),": Data after successful insertion."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const { spaceId, userId } = this\nconst objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nvar now = new Date();\nconst doc = {\n    name: 'Xiao Mei',\n    space: spaceId,\n    owner: userId,\n    created_by: userId,\n    modified_by: userId,\n    created: now,\n    modified: now\n};\nconst result = await objectql.getObject(objectApiName).insert(doc);\nconsole.log('result==>',result)\n/*\nresult==> {\n    _id: '84SFjtKFfonskA6CS',\n    name: 'Xiao Mei',\n    space: 'M6x6ddKvpj9ddcYYm',\n    owner: '606d7baa3393516019dbfb39',\n    created_by: '606d7baa3393516019dbfb39',\n    modified_by: '606d7baa3393516019dbfb39',\n    created: 2021-10-27T08:14:47.158Z,\n    modified: 2021-10-27T08:14:47.158Z\n}\n*/\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"doc"})," includes a custom ",(0,r.jsx)(n.code,{children:"_id"}),", it is used; otherwise, an ",(0,r.jsx)(n.code,{children:"_id"})," is generated automatically."]}),"\n",(0,r.jsxs)(n.p,{children:["Built-in tool function to generate ID: ",(0,r.jsx)(n.code,{children:"objectql.getObject(objectApiName)._makeNewID()"})]}),"\n",(0,r.jsxs)(n.p,{children:["In trigger functions, ",(0,r.jsx)(n.code,{children:"spaceId"}),", ",(0,r.jsx)(n.code,{children:"userId"})," values can be obtained through ",(0,r.jsx)(n.code,{children:"this"}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Basic Property"}),(0,r.jsx)(n.th,{children:"Meaning"}),(0,r.jsx)(n.th,{children:"Required"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:"Record name"}),(0,r.jsx)(n.td,{children:"yes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"space"}),(0,r.jsx)(n.td,{children:"Current workspace ID"}),(0,r.jsx)(n.td,{children:"yes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"owner"}),(0,r.jsx)(n.td,{children:"Record owner"}),(0,r.jsx)(n.td,{children:"yes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"created_by"}),(0,r.jsx)(n.td,{children:"Creator"}),(0,r.jsx)(n.td,{children:"yes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modified_by"}),(0,r.jsx)(n.td,{children:"Modifier"}),(0,r.jsx)(n.td,{children:"yes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"created"}),(0,r.jsx)(n.td,{children:"Creation time"}),(0,r.jsx)(n.td,{children:"no (automatically maintained)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modified"}),(0,r.jsx)(n.td,{children:"Modification time"}),(0,r.jsx)(n.td,{children:"no (automatically maintained)"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"directinsert",children:"directInsert"}),"\n",(0,r.jsx)(n.p,{children:"Adds a single record. Does not trigger the related trigger functions."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": ",(0,r.jsx)(n.code,{children:"directInsert(doc, userSession?)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"doc"}),": ",(0,r.jsx)(n.code,{children:"Dictionary<any>"})," The data you want to insert."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"userSession"}),": ",(0,r.jsx)(n.code,{children:"SteedosUserSession"})," Current user's login information, optional; if ",(0,r.jsx)(n.code,{children:"userSession"})," is not provided, no permission check is performed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Return Value"}),": Data after successful insertion."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const { spaceId, userId } = this\nconst objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nvar now = new Date();\nconst doc = {\n    name: 'Da Ge',\n    space: spaceId,\n    owner: userId,\n    created_by: userId,\n    modified_by: userId,\n    created: now,\n    modified: now\n};\nawait objectql.getObject(objectApiName).directInsert(doc);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"modifying-data",children:"Modifying Data"}),"\n",(0,r.jsxs)(n.p,{children:["Supports modifying single data and bulk data, with the prefix ",(0,r.jsx)(n.code,{children:"direct"})," indicating that the related operation is executed directly without triggering triggers."]}),"\n",(0,r.jsx)(n.h3,{id:"update",children:"update"}),"\n",(0,r.jsxs)(n.p,{children:["Updates a single record. This function triggers the configured trigger functions: ",(0,r.jsx)(n.code,{children:"beforeUpdate"}),", ",(0,r.jsx)(n.code,{children:"afterUpdate"}),'. For updating special records like "tasks", notifications are sent to specified individuals.']}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": ",(0,r.jsx)(n.code,{children:"update(id, doc, userSession?)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"id"}),": number | string The ID of the data you want to change."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"doc"}),": ",(0,r.jsx)(n.code,{children:"Dictionary<any>"})," The data you want to update."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"userSession"}),": ",(0,r.jsx)(n.code,{children:"SteedosUserSession"})," Current user's login information, optional; if ",(0,r.jsx)(n.code,{children:"userSession"})," is not provided, no permission check is performed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Return Value"}),": Data after successful update."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst id = '84SFjtKFfonskA6CS';\nconst doc = {\n    name: \"San Mei\",\n};\nconst result = await objectql.getObject(objectApiName).update(id, doc);\nconsole.log('result==>', result)\n/*\nresult==> {\n    _id: '84SFjtKFfonskA6CS',\n    name: 'San Mei',\n    space: 'M6x6ddKvpj9ddcYYm',\n    owner: '606d7baa3393516019dbfb39',\n    created_by: '606d7baa3393516019dbfb39',\n    modified_by: '606d7baa3393516019dbfb39',\n    created: 2021-10-27T08:14:47.158Z,\n    modified: 2021-10-27T08:50:40.918Z\n}\n*/\n"})}),"\n",(0,r.jsx)(n.h3,{id:"directupdate",children:"directUpdate"}),"\n",(0,r.jsx)(n.p,{children:"Updates a single record. Does not trigger the related trigger functions."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": ",(0,r.jsx)(n.code,{children:"directUpdate(id, doc, userSession?)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"id"}),": number | string The ID of the data you want to change."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"doc"}),": ",(0,r.jsx)(n.code,{children:"Dictionary<any>"})," The data you want to update."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"userSession"}),": ",(0,r.jsx)(n.code,{children:"SteedosUserSession"})," Current user's login information, optional; if ",(0,r.jsx)(n.code,{children:"userSession"})," is not provided, no permission check is performed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Return Value"}),": Data after successful update."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst id = '84SFjtKFfonskA6CS';\nconst doc = {\n    name: \"San Mei-Wan Er\",\n};\nconst result = await objectql.getObject(objectApiName).directUpdate(id,doc);\nconsole.log('result==>',result)\n/* \nresult==> {\n    _id: '84SFjtKFfonskA6CS',\n    name: 'San Mei-Wan Er',\n    space: 'M6x6ddKvpj9ddcYYm',\n    owner: '606d7baa3393516019dbfb39',\n    created_by: '606d7baa3393516019dbfb39',\n    modified_by: '606d7baa3393516019dbfb39',\n    created: 2021-10-27T08:14:47.158Z,\n    modified: 2021-10-27T08:50:40.918Z\n} \n*/\n"})}),"\n",(0,r.jsx)(n.h2,{id:"deleting-data",children:"Deleting Data"}),"\n",(0,r.jsxs)(n.p,{children:["Supports deleting single data and bulk data, with the prefix ",(0,r.jsx)(n.code,{children:"direct"})," indicating that the related operation is executed directly without triggering triggers."]}),"\n",(0,r.jsx)(n.h3,{id:"delete",children:"delete"}),"\n",(0,r.jsxs)(n.p,{children:["Deletes a single record. This function triggers the configured trigger functions: ",(0,r.jsx)(n.code,{children:"beforeDelete"}),", ",(0,r.jsx)(n.code,{children:"afterDelete"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": ",(0,r.jsx)(n.code,{children:"delete(id, userSession?)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"id"}),": number | string The ID of the data you want to delete."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"userSession"}),": ",(0,r.jsx)(n.code,{children:"SteedosUserSession"})," Current user's login information, optional; if ",(0,r.jsx)(n.code,{children:"userSession"})," is not provided, no permission check is performed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Return Value"}),": Success: 1, Failure: throws an error message."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst id = '84SFjtKFfonskA6CS';\nconst result = await objectql.getObject(objectApiName).delete(id);\nconsole.log('result==>',result)\n// result==> 1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"directdelete",children:"directDelete"}),"\n",(0,r.jsx)(n.p,{children:"Deletes a single record. Does not trigger the related trigger functions."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": ",(0,r.jsx)(n.code,{children:"directDelete(id, userSession?)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"id"}),": number | string The ID of the data you want to delete."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"userSession"}),": ",(0,r.jsx)(n.code,{children:"SteedosUserSession"})," Current user's login information, optional; if ",(0,r.jsx)(n.code,{children:"userSession"})," is not provided, no permission check is performed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Return Value"}),": Success: 1, Failure: throws an error message."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst id = '9y3QTHCGKwhkTTibg';\nconst result = await objectql.getObject(objectApiName).directDelete(id);\nconsole.log('result==>',result)\n// result==> 1\n"})}),"\n",(0,r.jsx)(n.h2,{id:"finding-data",children:"Finding Data"}),"\n",(0,r.jsx)(n.p,{children:"Provides five methods for finding data and one method for viewing object configuration details"}),"\n",(0,r.jsx)(n.h3,{id:"find",children:"find"}),"\n",(0,r.jsxs)(n.p,{children:["Finds multiple records. This function triggers the configured trigger functions: ",(0,r.jsx)(n.code,{children:"beforeFind"}),", ",(0,r.jsx)(n.code,{children:"afterFind"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": ",(0,r.jsx)(n.code,{children:"find(query, userSession?)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"query"}),": ",(0,r.jsx)(n.code,{children:"SteedosQueryOptions"})," Query data related parameters [json]."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"find-1",children:"find"}),"\n",(0,r.jsxs)(n.p,{children:["Finds multiple records. This function triggers the configured trigger functions: ",(0,r.jsx)(n.code,{children:"beforeFind"}),", ",(0,r.jsx)(n.code,{children:"afterFind"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": ",(0,r.jsx)(n.code,{children:"find(query, userSession?)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"query"}),": ",(0,r.jsx)(n.code,{children:"SteedosQueryOptions"})," Query data related parameters [json].","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fields"}),": Array of field names, optional. For example: ",(0,r.jsx)(n.code,{children:"['field1', 'field2']"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"filters"}),": ",(0,r.jsx)(n.code,{children:"SteedosQueryFilters"})," array of query conditions, optional"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sort"}),": string sorting rule, optional"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"top"}),": number of records to return, optional"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"skip"}),": number of records to skip, often used for pagination, optional."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"userSession"}),": ",(0,r.jsx)(n.code,{children:"SteedosUserSession"})," Current user's login information, optional; if ",(0,r.jsx)(n.code,{children:"userSession"})," is not provided, no permission check is performed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Return Value"}),": Array of records. Returns an empty array ",(0,r.jsx)(n.code,{children:"[]"})," if no records are found."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst query = {\n    fields: ['name', 'created_by','created'],\n    filters: [['name','contains','Leader']],\n    sort: 'name desc'\n};\nconst result = await objectql.getObject(objectApiName).find(query);\nconsole.log('result==>',result)\n/* \nresult==> [\n  {\n    _id: '2iS93Hv8QNcxfMief',\n    name: 'Leader Li',\n    created: 2021-08-25T06:25:37.183Z,\n    created_by: '606d7baa3393516019dbfb39'\n  },\n  {\n    _id: 'zCETjWE6thjWqeyek',\n    name: 'Leader Zhang',\n    created: 2021-10-27T06:50:16.866Z,\n    created_by: '606d7baa3393516019dbfb39'\n  }\n]\n*/\n"})}),"\n",(0,r.jsx)(n.h3,{id:"findone",children:"findOne"}),"\n",(0,r.jsxs)(n.p,{children:["Finds a single record. This function triggers the configured trigger functions: ",(0,r.jsx)(n.code,{children:"afterFindOne"}),", ",(0,r.jsx)(n.code,{children:"beforeFind"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": ",(0,r.jsx)(n.code,{children:"findOne(id, query, userSession?)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"id"}),": number | string The ID of the record you want to find."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"query"}),": ",(0,r.jsx)(n.code,{children:"SteedosQueryOptions"})," Query data related parameters [json].","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fields"}),": Array of field names, optional. For example: ",(0,r.jsx)(n.code,{children:"['field1', 'field2']"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"userSession"}),": ",(0,r.jsx)(n.code,{children:"SteedosUserSession"})," Current user's login information, optional; if ",(0,r.jsx)(n.code,{children:"userSession"})," is not provided, no permission check is performed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Return Value"}),": Single record [json]."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst id = 'ihJqoP3n4mwSDwGxw';\nconst query = {\n    fields: ['name', 'created_by','created'],\n};\nconst result = await objectql.getObject(objectApiName).findOne(id, query);\nconsole.log('result==>',result)\n/* \nresult==> {\n    _id: 'ihJqoP3n4mwSDwGxw',\n    name: 'Zhang San',\n    created: 2021-04-23T08:48:06.513Z,\n    created_by: '606d7baa3393516019dbfb39'\n}\n*/\n"})}),"\n",(0,r.jsx)(n.h3,{id:"directfind",children:"directFind"}),"\n",(0,r.jsx)(n.p,{children:"Finds multiple records. Does not trigger related trigger functions."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": ",(0,r.jsx)(n.code,{children:"directFind(query, userSession?)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"query"}),": ",(0,r.jsx)(n.code,{children:"SteedosQueryOptions"})," Query data related parameters [json].","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fields"}),": Array of field names, optional. For example: ",(0,r.jsx)(n.code,{children:"['field1', 'field2']"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"filters"}),": ",(0,r.jsx)(n.code,{children:"SteedosQueryFilters"})," array of query conditions, optional"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sort"}),": string sorting rule, optional"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"top"}),": number of records to return, optional"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"skip"}),": number of records to skip, often used for pagination, optional."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"userSession"}),": ",(0,r.jsx)(n.code,{children:"SteedosUserSession"})," Current user's login information, optional; if ",(0,r.jsx)(n.code,{children:"userSession"})," is not provided, no permission check is performed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Return Value"}),": Array of records. Returns an empty array ",(0,r.jsx)(n.code,{children:"[]"})," if no records are found."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst query = {\n    fields: ['name', 'created_by','created'],\n    filters: [['name','contains','Leader']],\n    sort: 'name desc',\n    top: 1\n};\nconst result = await objectql.getObject(objectApiName).directFind(query);\nconsole.log('result==>',result)\n/* \nresult==> [\n  {\n    _id: '2iS93Hv8QNcxfMief',\n    name: 'Leader Li',\n    created: 2021-08-25T06:25:37.183Z,\n    created_by: '606d7baa3393516019dbfb39'\n  }\n]\n*/\n"})}),"\n",(0,r.jsx)(n.h3,{id:"aggregate",children:"aggregate"}),"\n",(0,r.jsxs)(n.p,{children:["Finds aggregate records. This function triggers the configured trigger functions: ",(0,r.jsx)(n.code,{children:"beforeAggregate"}),", ",(0,r.jsx)(n.code,{children:"afterAggregate"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Aggregation: Aggregation operations process data records and return computed results. Aggregation combines values from multiple documents and can perform various operations on grouped data to return a single result."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": ",(0,r.jsx)(n.code,{children:"aggregate(query, externalPipeline, userSession?)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"query"}),": ",(0,r.jsx)(n.code,{children:"SteedosQueryOptions"})," Query data related parameters [json].","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"filters"}),": ",(0,r.jsx)(n.code,{children:"SteedosQueryFilters"})," array of query conditions, optional"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"externalPipeline"}),": Array of MongoDB aggregation pipeline"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"userSession"}),": ",(0,r.jsx)(n.code,{children:"SteedosUserSession"})," Current user's login information, optional; if ",(0,r.jsx)(n.code,{children:"userSession"})," is not provided, no permission check is performed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Return Value"}),": Array of aggregate records."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// Example 1:\nconst objectql = require('@steedos/objectql');\nconst objectApiName = \"contacts\";\nconst query = {filters: [[\"name\",\"contains\",'Leader']]};\nconst externalPipeline = [{ $count: 'leaders_count'}];\nconst result = await objectql.getObject(objectApiName).aggregate(query, externalPipeline);\nconsole.log('result==>',result)\n// leaders_count: Number of contacts whose names contain \"Leader\".\n// result==> [ { leaders_count: 7 } ]\n\n// Example 2:\nconst objectql = require('@steedos/objectql');\nconst objectApiName = \"accounts\"; \nconst query = {filters: [[\"is_customer\",\"=\",true]]}; \nconst externalPipeline = [{ $group: {_id:'total', total: { '$sum': '$number_of_employees'}}}];\nconst result = await objectql.getObject(objectApiName).aggregate(query, externalPipeline);\nconsole.log('result==>',result)\n// total: Total number of employees in business partners that are customers.\n//result==> [ { _id: 'total', total: 450 } ]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"directaggregate",children:"directAggregate"}),"\n",(0,r.jsx)(n.p,{children:"Finds aggregate records. Does not trigger related trigger functions."}),"\n",(0,r.jsx)(n.p,{children:"Aggregation: Aggregation operations process data records and return computed results. Aggregation combines values from multiple documents and can perform various operations on grouped data to return a single result."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": ",(0,r.jsx)(n.code,{children:"directAggregate(query, externalPipeline, userSession?)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"query"}),": ",(0,r.jsx)(n.code,{children:"SteedosQueryOptions"})," Query data related parameters [json].","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"filters"}),": ",(0,r.jsx)(n.code,{children:"SteedosQueryFilters"})," array of query conditions, optional"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"externalPipeline"}),": Array of MongoDB aggregation pipeline"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"userSession"}),": ",(0,r.jsx)(n.code,{children:"SteedosUserSession"})," Current user's login information, optional; if ",(0,r.jsx)(n.code,{children:"userSession"})," is not provided, no permission check is performed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Return Value"}),": Array of aggregate records."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"\n// Example 1:\nconst objectql = require('@steedos/objectql');\n// contacts: Contact object\nconst objectApiName = \"contacts\";\n// filters: Names containing \"Leader\" in contacts\nconst query = {filters: [[\"name\",\"contains\",'Leader']]};\nconst externalPipeline = [{ $count: 'leaders_count'}];\nconst result = await objectql.getObject(objectApiName).directAggregate(query, externalPipeline);\nconsole.log('result==>',result)\n// leaders_count: Number of contacts whose names contain \"Leader\".\n// result==> [ { leaders_count: 7 } ]\n\n// Example 2:\nconst objectql = require('@steedos/objectql');\n// accounts: Business partner object\nconst objectApiName = \"accounts\"; \n// is_customer: Field name, whether the business partner is a customer\nconst query = {filters: [[\"is_customer\",\"=\",true]]}; \n// number_of_employees: Field name, number of employees\nconst externalPipeline = [{ $group: {_id:'total', total: { '$sum': '$number_of_employees'}}}];\nconst result = await objectql.getObject(objectApiName).directAggregate(query, externalPipeline);\nconsole.log('result==>',result)\n// total: Total number of employees in business partners that are customers.\n//result==> [ { _id: 'total', total: 450 } ]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"toconfig",children:"toConfig"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": ",(0,r.jsx)(n.code,{children:"toConfig()"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Return Value"}),": Details of the object configuration."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const objectql = require('@steedos/objectql');\nconst objectApiName = \"contracts\";\nconst result = await objectql.getObject(objectApiName).toConfig();\n/* result:   \n{ \n  name: 'contracts', \n  fields: {\n    name:{\n      name: 'name',\n      label: 'Title',\n      type: 'text',\n      required: true,\n      ...\n    },\n    ...\n  },\n  version: 2,\n  list_views: {\n    all: {\n      name: 'all',\n      ...\n    }\n  },\n  actions: xxx,\n  triggers: xxx,\n  permission_set: xxx,\n  ...\n} \n*/\n"})}),"\n",(0,r.jsx)(n.h2,{id:"about-the-usersession-parameter",children:"About the userSession Parameter"}),"\n",(0,r.jsxs)(n.p,{children:["All the above functions can accept an optional ",(0,r.jsx)(n.code,{children:"userSession"})," parameter, representing the current user's login information. If this parameter is provided, the related operation functions will only perform data operations for which the current logged-in user has permission."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, the ",(0,r.jsx)(n.strong,{children:"insert(doc, userSession?)"})," function will directly execute data insertion operations without performing permission checks if ",(0,r.jsx)(n.code,{children:"userSession"})," is not provided. Conversely, if ",(0,r.jsx)(n.code,{children:"userSession"})," is provided, it will perform related permission checks, and the data insertion operation will only be executed if the current user has creation permissions for the current object."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"update(id, doc, userSession?)"})," function is similar; if ",(0,r.jsx)(n.code,{children:"userSession"})," is not provided, it will directly execute data update operations without performing permission checks. Conversely, if ",(0,r.jsx)(n.code,{children:"userSession"})," is provided, it will perform related permission checks, and the data update operation will only be executed if the current user has edit permissions for the current object and the record to be edited."]}),"\n",(0,r.jsxs)(n.p,{children:["Similarly, the ",(0,r.jsx)(n.strong,{children:"find(query, userSession?)"})," function will return all data satisfying the filter criteria without performing permission checks if ",(0,r.jsx)(n.code,{children:"userSession"})," is not provided. Conversely, if ",(0,r.jsx)(n.code,{children:"userSession"})," is provided, it will perform related permission checks and only return the data that the current logged-in user is authorized to view."]}),"\n",(0,r.jsx)(n.h2,{id:"about-functions-with-the-direct-prefix",children:"About Functions with the direct Prefix"}),"\n",(0,r.jsxs)(n.p,{children:["The above functions can be divided into two types: those named with the ",(0,r.jsx)(n.code,{children:"direct"})," prefix and those without the ",(0,r.jsx)(n.code,{children:"direct"})," prefix."]}),"\n",(0,r.jsxs)(n.p,{children:["Functions named with the ",(0,r.jsx)(n.code,{children:"direct"})," prefix: Executing a ",(0,r.jsx)(n.code,{children:"direct"})," function means directly operating on database records, and it will not trigger related trigger functions, nor will it trigger any workflow rules, formula fields, or recalculations of roll-up summary fields."]}),"\n",(0,r.jsxs)(n.p,{children:["Functions not named with the ",(0,r.jsx)(n.code,{children:"direct"})," prefix: After the completion of related operations like ",(0,r.jsx)(n.strong,{children:"insert/update/find"}),", etc., these will further trigger the execution of related trigger functions configured on that object, such as ",(0,r.jsx)(n.code,{children:"beforeUpdate"}),", ",(0,r.jsx)(n.code,{children:"afterUpdate"}),", etc.; then, they will trigger the execution of workflow rules that meet the conditions; subsequently, they will also trigger the recalculation of associated formula fields and roll-up summary fields."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Below are some examples of using ObjectQL functions in practical programming scenarios."}),"\n",(0,r.jsx)(n.h3,{id:"example-of-using-objectql-in-triggers",children:"Example of Using ObjectQL in Triggers"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const auth = require("@steedos/auth");\nconst generatHtml = (doc)=>{\n  ...\n}\nmodule.exports = {\n    listenTo: \'web_forms\',\n    afterInsert: async function () {\n        let doc = this.doc;\n        let generatedHtml = generatHtml(doc);\n        if(generatedHtml){\n            const object = this.getObject("web_forms");\n            const userSession = await auth.getSessionByUserId(this.userId);\n            await object.directUpdate(doc._id, {generated_html: generatedHtml}, userSession);\n        }\n    },\n    afterUpdate: async function () {\n        // Since there\'s no this.doc._id in afterUpdate, integrate previousDoc, and when editing a single field, also integrate other fields from previousDoc\n        let doc = Object.assign({}, this.previousDoc, this.doc);\n        let generatedHtml = generatHtml(doc);\n        if(generatedHtml){\n            const object = this.getObject("web_forms");\n            const userSession = await auth.getSessionByUserId(this.userId);\n            await object.directUpdate(doc._id, {generated_html: generatedHtml}, userSession);\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"example-of-using-objectql-in-a-router",children:"Example of Using ObjectQL in a Router"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const express = require(\"express\");\nconst router = express.Router();\nconst core = require('@steedos/core');\nconst objectql = require('@steedos/objectql');\n\nrouter.post('/api/contracts/locked/:id', core.requireAuthentication, async function (req, res) {\n    const userSession = req.user;\n    const isSpaceAdmin = userSession.is_space_admin;\n    if(isSpaceAdmin){\n        const { id } = req.params;\n        await objectql.getObject(\"contracts\").update(id, {\n            locked: true\n        });\n        res.status(200).send({ message: 'Contract successfully archived', success: true });\n    }\n});\nexports.default = router;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var r=s(96540);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);