"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5204],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35346:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Custom Objects",sidebar_position:1},i=void 0,s={unversionedId:"no-code/customize/object",id:"no-code/customize/object",title:"Custom Objects",description:"Building applications on the Steedos platform often requires the creation of one or more custom objects to store all necessary business data. Custom objects can be considered as tables in a database, containing a series of fields where you can store data.",source:"@site/docs/no-code/customize/object.md",sourceDirName:"no-code/customize",slug:"/no-code/customize/object",permalink:"/no-code/customize/object",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/no-code/customize/object.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Custom Objects",sidebar_position:1},sidebar:"platform",previous:{title:"Data Model and Management",permalink:"/no-code/customize/"},next:{title:"Field Types",permalink:"/no-code/customize/fields/"}},l={},c=[{value:"Objects, Fields, and Records",id:"objects-fields-and-records",level:2},{value:"Creating Custom Objects",id:"creating-custom-objects",level:2},{value:"Object Properties",id:"object-properties",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Building applications on the Steedos platform often requires the creation of one or more custom objects to store all necessary business data. Custom objects can be considered as tables in a database, containing a series of fields where you can store data."),(0,r.kt)("h2",{id:"objects-fields-and-records"},"Objects, Fields, and Records"),(0,r.kt)("p",null,"In Steedos, the organization of data and functionality is based on three core concepts: objects, fields, and records."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Objects"),' are similar to tables in a database and serve as containers for storing specific types of data. In Steedos, there are two types of objects: standard objects and custom objects. Standard objects are provided by default in Steedos, such as "Organization," "Person," and "Task." Custom objects allow you to store specific information based on business needs.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fields")," within an object are similar to columns in a database table. They define the type of data stored in the object. For example, a contact object might include fields such as name, email, and phone number. Steedos offers a variety of field types, including text, number, date, and picklist, to accommodate different data storage requirements.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Records")," are individual instances of data within an object, similar to rows in a database table. For example, a record of a contact object might represent one of your customers. Records contain information defined by the fields, such as the customer's name and contact details."))),(0,r.kt)("h2",{id:"creating-custom-objects"},"Creating Custom Objects"),(0,r.kt)("p",null,"Creating custom objects is the first step in defining the data model for your application. Below are the steps to create a custom object:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Enter Settings"),': Log in to your Steedos account and click the gear icon in the upper right corner to access "Settings".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Object Management"),': In the settings menu, select "Object Management" and click on "Objects".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create New Object"),': Start the creation process by clicking the "New Object" button on the page.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Define Object Properties"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Label"),": Enter the display name of the object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Object Name"),": Enter the unique name of the object, which will be used for APIs and development."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Record Name"),": Specify the name field and format (text or auto-number) for the record."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": Enter a description to explain the purpose and content of the object."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add Fields and Relationships"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"After saving the object definition, add fields to store the data for records."),(0,r.kt)("li",{parentName:"ul"},"Create relationship fields as needed to link to records of other objects."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configure Page Layouts"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Define the view and edit page layouts for records."),(0,r.kt)("li",{parentName:"ul"},"Select the fields and related lists to be included in the page layouts."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Set Security"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Determine which user profiles can access the new object."),(0,r.kt)("li",{parentName:"ul"},"Set field-level security to control access to specific fields."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Save and Test"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Save your custom object."),(0,r.kt)("li",{parentName:"ul"},"Create, view, and edit records in the application to test the object's configuration."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Review and Adjust"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Make necessary adjustments to the object based on test results and user feedback."),(0,r.kt)("li",{parentName:"ul"},"Ensure the object meets the needs of business processes.")))),(0,r.kt)("p",null,"By following these steps, you can successfully create custom objects in Steedos and use them as the foundation for building powerful business applications."),(0,r.kt)("h2",{id:"object-properties"},"Object Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Source"),(0,r.kt)("td",{parentName:"tr",align:null},"The data for this object will be saved to the specified data source; the default data source uses the MongoDB database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"This name will be displayed in the interface to represent the object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API Name"),(0,r.kt)("td",{parentName:"tr",align:null},"A unique identifier for the field, can only contain lowercase letters and numbers, must start with a letter, and cannot end with an underscore or contain two consecutive underscore characters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Icon"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose an appropriate icon for your object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Development Status"),(0,r.kt)("td",{parentName:"tr",align:null},'The development status of this object, "In Development" objects are only accessible to administrators, once the object\'s related functions are ready, you should set it to "Deployed".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Remarks"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter a description for this object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"External Data Source"),(0,r.kt)("td",{parentName:"tr",align:null},"Reference data from a third-party database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allow Attachments"),(0,r.kt)("td",{parentName:"tr",align:null},"This object can have attachments uploaded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allow Tasks"),(0,r.kt)("td",{parentName:"tr",align:null},"Business data in this object can have tasks added.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allow Notes"),(0,r.kt)("td",{parentName:"tr",align:null},"Business data in this object can have notes added.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allow Events"),(0,r.kt)("td",{parentName:"tr",align:null},"Business data in this object can have events added.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allow Object Process Configuration"),(0,r.kt)("td",{parentName:"tr",align:null},"Only business objects with this feature enabled will be displayed in the object process configuration menu.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allow Viewing Applications"),(0,r.kt)("td",{parentName:"tr",align:null},"Business data in this object can be approved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Track Field History"),(0,r.kt)("td",{parentName:"tr",align:null},"When this feature is enabled, the system will automatically record the modification history of this field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable Tree Structure for Record Display"),(0,r.kt)("td",{parentName:"tr",align:null},"When enabled, the lookup fields associated with this object will display their options in a tree structure.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable Popup Window Lookup Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"When enabled, the lookup fields associated with this object will display their options in a popup window.")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The record field history feature requires a professional license to use.")))}u.isMDXComponent=!0}}]);