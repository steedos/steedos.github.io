"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2354],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(i),g=n,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return i?a.createElement(m,s(s({ref:t},c),{},{components:i})):a.createElement(m,s({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,s=new Array(o);s[0]=g;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:n,s[1]=r;for(var d=2;d<o;d++)s[d]=i[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}g.displayName="MDXCreateElement"},2913:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=i(7462),n=(i(7294),i(3905));const o={},s="Lesson 1: Creating Objects",r={unversionedId:"getting-started/tutorials/the-basics/object",id:"getting-started/tutorials/the-basics/object",title:"Lesson 1: Creating Objects",description:"Steedos offers powerful features that allow users to create and manage custom objects to meet specific business needs. Custom objects can be seen as tables in a database, storing data specific to an enterprise. This tutorial will detail how to create and use a custom object \u2014 the Todos object \u2014 in Steedos.",source:"@site/docs/getting-started/tutorials/the-basics/1.object.md",sourceDirName:"getting-started/tutorials/the-basics",slug:"/getting-started/tutorials/the-basics/object",permalink:"/getting-started/tutorials/the-basics/object",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/getting-started/tutorials/the-basics/1.object.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"platform",previous:{title:"The Basics",permalink:"/getting-started/tutorials/the-basics/"},next:{title:"Lesson 2: Defining Relationships",permalink:"/getting-started/tutorials/the-basics/relationship"}},l={},d=[{value:"1. Concept of Custom Objects",id:"1-concept-of-custom-objects",level:2},{value:"2. Creating the Todos Custom Object",id:"2-creating-the-todos-custom-object",level:2},{value:"Login and Navigation",id:"login-and-navigation",level:3},{value:"Creating the Object",id:"creating-the-object",level:3},{value:"3. Adding Fields",id:"3-adding-fields",level:2},{value:"System Fields",id:"system-fields",level:3},{value:"Modifying System Fields",id:"modifying-system-fields",level:3},{value:"Creating Custom Fields",id:"creating-custom-fields",level:3},{value:"4. Previewing the Object",id:"4-previewing-the-object",level:2},{value:"5. Customizing the User Interface",id:"5-customizing-the-user-interface",level:2},{value:"Configuring List Views",id:"configuring-list-views",level:3},{value:"Configuring Field Layout",id:"configuring-field-layout",level:3},{value:"Configuring Record Pages",id:"configuring-record-pages",level:3},{value:"6. Security and Access Permissions",id:"6-security-and-access-permissions",level:2},{value:"Setting Permissions",id:"setting-permissions",level:3},{value:"7. Testing and Validation",id:"7-testing-and-validation",level:2},{value:"Conducting Tests",id:"conducting-tests",level:3},{value:"8. Using and Managing the Todos Object",id:"8-using-and-managing-the-todos-object",level:2},{value:"Daily Use",id:"daily-use",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lesson-1-creating-objects"},"Lesson 1: Creating Objects"),(0,n.kt)("p",null,"Steedos offers powerful features that allow users to create and manage custom objects to meet specific business needs. Custom objects can be seen as tables in a database, storing data specific to an enterprise. This tutorial will detail how to create and use a custom object \u2014 the Todos object \u2014 in Steedos."),(0,n.kt)("h2",{id:"1-concept-of-custom-objects"},"1. Concept of Custom Objects"),(0,n.kt)("p",null,"In Steeedos, custom objects are specific types of database storage units that you can create based on business needs. They allow you to store organization-specific information, establish relationships not offered by standard Steedos objects, and manage data through customized configurations such as page layouts, fields, and record types."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Objects"),' are similar to tables in a database, serving as containers for storing specific types of data. In Steedos, objects are divided into two categories: standard objects and custom objects. Standard objects are provided by default in Steedos, such as "Organization," "Personnel," and "Task." Custom objects allow you to store specific information based on business needs, such as the Todo object this tutorial will guide you to create.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Fields")," within an object are similar to columns in a database table. They define the type of data stored in the object. For example, a Todo object might include fields for task title, due date, and status. Steedos offers a variety of field types, including text, number, date, and lookup tables, to meet different data storage needs.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Records")," are individual instances of data within an object, akin to rows in a database table. For example, a record in a Todo object might represent one of your tasks. Records contain information defined by the fields, such as the task's title and status."))),(0,n.kt)("h2",{id:"2-creating-the-todos-custom-object"},"2. Creating the Todos Custom Object"),(0,n.kt)("p",null,"The following steps will guide you in creating a Todos custom object in Steedos."),(0,n.kt)("h3",{id:"login-and-navigation"},"Login and Navigation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log in to Steedos."),(0,n.kt)("li",{parentName:"ol"},'On the main interface, click the "Settings" icon to enter the "Settings" app.')),(0,n.kt)("h3",{id:"creating-the-object"},"Creating the Object"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Select "Object Management" -> "Objects".'),(0,n.kt)("li",{parentName:"ol"},'Click "New".'),(0,n.kt)("li",{parentName:"ol"},'Fill in the display name of the object (e.g., "Todos").'),(0,n.kt)("li",{parentName:"ol"},'Enter a description, such as "Used to track personal tasks and to-do items".'),(0,n.kt)("li",{parentName:"ol"},"The API name is the table name in the database, which can be set to todos."),(0,n.kt)("li",{parentName:"ol"},"Choose feature switches, such as allowing attachments, tracking field modifications, etc."),(0,n.kt)("li",{parentName:"ol"},'After setting up, click "Confirm".')),(0,n.kt)("h2",{id:"3-adding-fields"},"3. Adding Fields"),(0,n.kt)("p",null,"After the custom object is created, the next step is to add fields to the object."),(0,n.kt)("h3",{id:"system-fields"},"System Fields"),(0,n.kt)("p",null,"After the Todo object is created, the system will automatically generate some system fields, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name"),(0,n.kt)("li",{parentName:"ul"},"Owner"),(0,n.kt)("li",{parentName:"ul"},"Creator, creation time"),(0,n.kt)("li",{parentName:"ul"},"Modifier, modification time")),(0,n.kt)("h3",{id:"modifying-system-fields"},"Modifying System Fields"),(0,n.kt)("p",null,"We can modify existing system fields, for example, modifying the name field to record the task title."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("inlineCode",{parentName:"li"},"Name")," field and click edit."),(0,n.kt)("li",{parentName:"ol"},'Modify the field display name to "Task Title" and save.')),(0,n.kt)("h3",{id:"creating-custom-fields"},"Creating Custom Fields"),(0,n.kt)("p",null,"We can define additional fields to store information."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'On the Todo object page, find "Fields" and click "New".'),(0,n.kt)("li",{parentName:"ol"},"Create the following fields:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'"Task Description" (Long Text Type, for describing the to-do item)'),(0,n.kt)("li",{parentName:"ul"},'"Due Date" (Date Type)'),(0,n.kt)("li",{parentName:"ul"},'"Status" (Dropdown, including "Not Started", "In Progress", "Completed")'))),(0,n.kt)("li",{parentName:"ol"},"Fill in a description for each field and save after setting.")),(0,n.kt)("h2",{id:"4-previewing-the-object"},"4. Previewing the Object"),(0,n.kt)("p",null,"Testing is key to ensuring the application works as expected."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"On the Todo object page, click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Preview")," button in the top right corner."),(0,n.kt)("li",{parentName:"ol"},"Try adding, editing, and deleting Todo records.")),(0,n.kt)("h2",{id:"5-customizing-the-user-interface"},"5. Customizing the User Interface"),(0,n.kt)("p",null,"After creating the custom object and fields, you can further configure field layout and user interface."),(0,n.kt)("h3",{id:"configuring-list-views"},"Configuring List Views"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'On the object\'s detail page, click "List View".'),(0,n.kt)("li",{parentName:"ol"},"Create new list views to categorize record viewing, such as to-do tasks and completed tasks list views."),(0,n.kt)("li",{parentName:"ol"},"Test the list views.")),(0,n.kt)("h3",{id:"configuring-field-layout"},"Configuring Field Layout"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'On the object\'s detail page, click "Field Layout".'),(0,n.kt)("li",{parentName:"ol"},"Arrange the field positions using drag and drop."),(0,n.kt)("li",{parentName:"ol"},"Save the field layout.")),(0,n.kt)("h3",{id:"configuring-record-pages"},"Configuring Record Pages"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'On the object\'s detail page, click "Object Pages".'),(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"Micro Pages")," to customize the record list page, record detail page, and record form."),(0,n.kt)("li",{parentName:"ol"},"Add components to the Todos object, such as related lists, reports, etc.")),(0,n.kt)("h2",{id:"6-security-and-access-permissions"},"6. Security and Access Permissions"),(0,n.kt)("p",null,"Ensure proper configuration of access permissions so that users can access the Todos object according to their roles and responsibilities."),(0,n.kt)("h3",{id:"setting-permissions"},"Setting Permissions"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'On the object\'s detail page, click "Object Permissions".'),(0,n.kt)("li",{parentName:"ol"},"Configure profiles and permission sets to assign access permissions to different users for the Todos object."),(0,n.kt)("li",{parentName:"ol"},"If different field visibility and required settings are needed for different profiles, configure page layouts.")),(0,n.kt)("h2",{id:"7-testing-and-validation"},"7. Testing and Validation"),(0,n.kt)("p",null,"After creating the custom object, test to ensure everything works as expected."),(0,n.kt)("h3",{id:"conducting-tests"},"Conducting Tests"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create several Todo records."),(0,n.kt)("li",{parentName:"ol"},"Test if fields are displayed correctly and functions work properly."),(0,n.kt)("li",{parentName:"ol"},"Try modifying and deleting records to confirm security settings are correct.")),(0,n.kt)("h2",{id:"8-using-and-managing-the-todos-object"},"8. Using and Managing the Todos Object"),(0,n.kt)("p",null,"Once the Todos object is created and tested, you can start using it to manage to-do tasks."),(0,n.kt)("h3",{id:"daily-use"},"Daily Use"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Users can add new Todo records, filling in the task name, due date, and status."),(0,n.kt)("li",{parentName:"ul"},"Use list views and reports to track and analyze to-do items.")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"By creating and using custom objects, such as Todos, Steedos provides you with a powerful tool to customize the management of your business data. Through this process, you not only understand the core functions of Steedos but also expand according to the specific needs of the organization. As you become more familiar with Steedos, you can continue to explore more advanced features and integrations, making your custom applications more powerful and efficient."))}p.isMDXComponent=!0}}]);