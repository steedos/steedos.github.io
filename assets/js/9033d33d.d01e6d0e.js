"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5180],{40034:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=s(74848),n=s(28453);const o={sidebar_position:3},a="Object Relationships",r={id:"no-code/customize/object-relationship",title:"Object Relationships",description:"Steedos's robust data model allows you to build complex data structures by defining relationships between objects. These relationships are the foundation for connecting various data points and sharing data across the entire platform.",source:"@site/docs/no-code/customize/object-relationship.md",sourceDirName:"no-code/customize",slug:"/no-code/customize/object-relationship",permalink:"/no-code/customize/object-relationship",draft:!1,unlisted:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/no-code/customize/object-relationship.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"platform",previous:{title:"Using Date/Time Values",permalink:"/no-code/customize/formula/datetime"},next:{title:"Custom Button",permalink:"/no-code/customize/button"}},l={},c=[{value:"Supported Object Relationships",id:"supported-object-relationships",level:2},{value:"Lookup Relationships",id:"lookup-relationships",level:5},{value:"Master-Detail Relationships",id:"master-detail-relationships",level:5},{value:"Many-to-Many Relationships",id:"many-to-many-relationships",level:5},{value:"Configuring Object Relationships",id:"configuring-object-relationships",level:3}];function d(e){const t={h1:"h1",h2:"h2",h3:"h3",h5:"h5",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"object-relationships",children:"Object Relationships"}),"\n",(0,i.jsx)(t.p,{children:"Steedos's robust data model allows you to build complex data structures by defining relationships between objects. These relationships are the foundation for connecting various data points and sharing data across the entire platform."}),"\n",(0,i.jsx)(t.h2,{id:"supported-object-relationships",children:"Supported Object Relationships"}),"\n",(0,i.jsx)(t.p,{children:"Object relationships define how different objects (or data tables) are connected. In Steedos, you can set up three main types of relationships: Lookup Relationships, Master-Detail Relationships, and Many-to-Many Relationships through Junction Objects."}),"\n",(0,i.jsx)(t.h5,{id:"lookup-relationships",children:"Lookup Relationships"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Description"}),": A lookup relationship is the simplest type of relationship between two objects, similar to a foreign key relationship in a database."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Usage"}),": Use when two objects are related but not strictly dependent on each other. For example, a contact may be associated with an account but can also exist independently."]}),"\n"]}),"\n",(0,i.jsx)(t.h5,{id:"master-detail-relationships",children:"Master-Detail Relationships"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Description"}),": A master-detail relationship is stricter, where the lifecycle of the detail object depends on the master object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Usage"}),": Used when the deletion of the master object should also result in the deletion of all related detail objects. For instance, order items depend on the order."]}),"\n"]}),"\n",(0,i.jsx)(t.h5,{id:"many-to-many-relationships",children:"Many-to-Many Relationships"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Description"}),": By defining relationship fields as array-type fields, a many-to-many relationship can be established between two objects."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Usage"}),': Array-type fields can bind multiple records simultaneously. For example, create a "assignees" field for a task, configure it as multi-select, so that one task can be assigned to multiple assignees. Each assignee will also have their own task list.']}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"configuring-object-relationships",children:"Configuring Object Relationships"}),"\n",(0,i.jsx)(t.p,{children:"By creating Lookup Relationship fields and Master-Detail Relationship fields, you can set up relationships between objects."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Create Relationship Field"}),": In the object's field settings, choose to add a new field and select the type of relationship."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Set Relationship Properties"}),": Depending on the type of relationship, configure necessary properties, such as related objects, cascade delete rules, etc."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Update Page Layouts"}),": Ensure the new relationship field is added to the page layouts of the related objects."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Set Permissions"}),": Update user profiles and permission sets as needed to access the new relationship fields."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"By correctly configuring object relationships, you can ensure data integrity, optimize user experience, and make reports and dashboards more powerful."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var i=s(96540);const n={},o=i.createContext(n);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);