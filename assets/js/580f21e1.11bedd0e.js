"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5971],{11999:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=i(74848),a=i(28453);const s={sidebar_position:20},o="Quick Start",r={id:"developer/micro-page/getting_start",title:"Quick Start",description:"In this section, we will introduce how to build a simple micro page (taking an application micro page as an example) and explain how to view the current data of components.",source:"@site/docs/developer/micro-page/getting_start.md",sourceDirName:"developer/micro-page",slug:"/developer/micro-page/getting_start",permalink:"/developer/micro-page/getting_start",draft:!1,unlisted:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/micro-page/getting_start.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"developer",previous:{title:"Overview",permalink:"/developer/micro-page/overview"},next:{title:"AMIS Low-Code Framework",permalink:"/developer/micro-page/amis/"}},c={},l=[{value:"Create a Micro Page",id:"create-a-micro-page",level:3},{value:"Designing the Micro Page",id:"designing-the-micro-page",level:3},{value:"1. Configure Sending HTTP Requests",id:"1-configure-sending-http-requests",level:4},{value:"2. Check if Data is Obtained",id:"2-check-if-data-is-obtained",level:4},{value:"3. Display Data Content Through Text Widget",id:"3-display-data-content-through-text-widget",level:4},{value:"4. Display Data Through Table Widget (table)",id:"4-display-data-through-table-widget-table",level:4},{value:"Enable Debugging",id:"enable-debugging",level:2},{value:"Display in the Application",id:"display-in-the-application",level:2},{value:"Creating Tabs",id:"creating-tabs",level:3},{value:"Configuring Permissions",id:"configuring-permissions",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsx)(t.p,{children:"In this section, we will introduce how to build a simple micro page (taking an application micro page as an example) and explain how to view the current data of components."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"In this example, you can build a custom page without writing any backend code"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"It will use the GraphQL interface to fetch data and display the content on the page through widgets."}),"\n",(0,n.jsx)(t.h3,{id:"create-a-micro-page",children:"Create a Micro Page"}),"\n",(0,n.jsx)(t.p,{children:'Goal: Create an "Application" micro page'}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Open the settings page, then select User Interface -> Micro Pages from the menu"}),"\n",(0,n.jsx)(t.li,{children:'Choose the type as "Application Page" and click the "Save" button'}),"\n",(0,n.jsx)(t.li,{children:"After saving, the webpage will automatically redirect to the details page of the newly created micro page"}),"\n",(0,n.jsx)(t.li,{children:'Click the "Designer" button in the upper right corner to enter the designer of the micro page.'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"gs-00.gif",src:i(11598).A+"",width:"1106",height:"583"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h3,{id:"designing-the-micro-page",children:"Designing the Micro Page"}),"\n",(0,n.jsx)(t.h4,{id:"1-configure-sending-http-requests",children:"1. Configure Sending HTTP Requests"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Drag and drop the Service from the left into the page designer"}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The purpose of using the Service component is to send a /graphql query HTTP request to the Steedos backend service, and then the result data of its request can be used by child components"}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'Select the Service component (be careful to select the outer layer of Service, not the "Content" component inside the Service)'}),"\n",(0,n.jsx)(t.li,{children:"Configure the content of the HTTP request to be sent"}),"\n",(0,n.jsx)(t.li,{children:"Choose the POST method and fill in the address: /graphql, set the format to json"}),"\n",(0,n.jsx)(t.li,{children:"Configure the query parameter of the /graphql method"}),"\n",(0,n.jsx)(t.li,{children:"Save and publish"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:'{\n  rows:project(filters: [], top: 5, skip: 0, sort: "created desc"){\n    _id,name,project_code,project_manager,status,deadline,account,open_tasks,open_issues, created\n  },\n  count:project__count(filters:[])\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"gs-01.gif",src:i(56487).A+"",width:"1106",height:"583"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h4,{id:"2-check-if-data-is-obtained",children:"2. Check if Data is Obtained"}),"\n",(0,n.jsx)(t.p,{children:"Goal: Check the HTTP request status and inspect the data domain of the component"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Here we will use the debugging method of amis, as documented: ",(0,n.jsx)(t.a,{href:"https://aisuda.bce.baidu.com/amis/en-US/docs/extend/debug#how-to-enable",children:"amis Debugging"}),". We will use the third method, adding amisDebug=1 to the URL"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Return to the detail record page of the micro page object, click to view to see the display content of the micro page:\nThis demonstrates how to check the current data of the widget in real-time"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"gs-02.gif",src:i(46176).A+"",width:"1106",height:"583"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h4,{id:"3-display-data-content-through-text-widget",children:"3. Display Data Content Through Text Widget"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Here we will use the amis template, see: ",(0,n.jsx)(t.a,{href:"https://aisuda.bce.baidu.com/amis/en-US/docs/concepts/template",children:"amis Template"})]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Change the text widget template in the designer, save and publish"}),"\n",(0,n.jsx)(t.li,{children:"Go back to the viewing page to check"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"gs-03.gif",src:i(17785).A+"",width:"988",height:"509"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h4,{id:"4-display-data-through-table-widget-table",children:"4. Display Data Through Table Widget (table)"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The data of each record obtained includes fields:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Project Name name"}),"\n",(0,n.jsx)(t.li,{children:"Project Code project_code"}),"\n",(0,n.jsx)(t.li,{children:"Creation Time created"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Drag and drop the table widget into the Service content. Note that it cannot be dropped into the root directory"}),"\n",(0,n.jsx)(t.li,{children:"Edit the column mapping, edit the data Source"}),"\n",(0,n.jsx)(t.li,{children:"Save and publish"}),"\n",(0,n.jsx)(t.li,{children:"Go back to the viewing page to check if it's normal"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"gs-04.gif",src:i(34642).A+"",width:"988",height:"509"})}),"\n",(0,n.jsx)(t.h2,{id:"enable-debugging",children:"Enable Debugging"}),"\n",(0,n.jsx)(t.p,{children:"amis has built-in debugging tools that allow you to view internal component logs and data, which is convenient for analyzing problems. It is currently displayed on the right side of the documentation."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Add amisDebug=1 to the URL query parameters of any micro page to enable it."}),"\n",(0,n.jsxs)(t.li,{children:["For example, change ",(0,n.jsx)(t.code,{children:"http://xxx.com/view"})," to ",(0,n.jsx)(t.code,{children:"http://xxx.com/view?amisDebug=1"})]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Reference document: ",(0,n.jsx)(t.a,{href:"https://aisuda.bce.baidu.com/amis/en-US/docs/extend/debug#how-to-enable",children:"amis Debugging Tool"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Enable Debugging",src:i(78799).A+"",width:"793",height:"511"})}),"\n",(0,n.jsx)(t.h2,{id:"display-in-the-application",children:"Display in the Application"}),"\n",(0,n.jsx)(t.p,{children:'Assuming we have designed and published the page, the following steps describe how to bind the "Application Page" type micro page to a tab and make it visible to the end-users.'}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'Enter the "Settings" application, click the "User Interface->Tabs" menu on the left, and then click the new button in the upper right corner to create a new tab.'}),"\n",(0,n.jsx)(t.li,{children:'When creating a new tab, select "Page" for the "Type", and then select the micro page we just published in the "Page" property to bind to the tab.'}),"\n",(0,n.jsx)(t.li,{children:'Click the "Applications->Applications" menu on the left side of the "Settings" application, create a new application or edit an existing one, and select the newly created tab in the application\'s tab properties.'}),"\n",(0,n.jsx)(t.li,{children:'Refresh the browser and click the grid in the upper left corner, then click to enter the newly created application in the pop-up "Application Launcher".'}),"\n",(0,n.jsx)(t.li,{children:"At this point, you can see the newly created tab in the top navigation bar. Clicking on this tab will take you to the custom page we designed earlier with amis."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"creating-tabs",children:"Creating Tabs"}),"\n",(0,n.jsx)(t.p,{children:"By creating tabs, you can display micro pages in custom applications. If you need to implement parameterized micro pages, you can create an external link type of tab and configure its link address to the micro page access address."}),"\n",(0,n.jsxs)(t.p,{children:["The micro page access address format is ",(0,n.jsx)(t.code,{children:"/app/${appApiName}/page/${pageApiName}[?dynamic parameters]"}),", the rules are as follows:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"appApiName is the API name of the application"}),"\n",(0,n.jsx)(t.li,{children:"pageApiName is the API name of the micro page"}),"\n",(0,n.jsxs)(t.li,{children:["The parameters after ? are optional and can be written according to the normal ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Query_string",children:"URL Query"})," method."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For example, if the external link is configured as ",(0,n.jsx)(t.code,{children:"/app/oa/page/oa_home?company_id=619383545b2e9a72ec0558b3"}),", it means that when you click on the tab, you open the micro page with the API name oa_home under the application with the API name oa, and pass in a parameter named company_id."]}),"\n",(0,n.jsxs)(t.p,{children:['With the formula script feature, we can dynamically pass the current logged-in user\'s "Subdivision" value to the micro page\'s "Belonging Company" parameter by configuring the external link address of the above tab as ',(0,n.jsx)(t.code,{children:"{{`/app/oa/page/oa_home?company_id=${global.user.company_id}`}}"}),"."]}),"\n",(0,n.jsx)(t.p,{children:'The above method is only suitable for micro pages of the "Application Page" type, and other types of micro pages do not have the ability to configure parameters for the page.'}),"\n",(0,n.jsx)(t.h3,{id:"configuring-permissions",children:"Configuring Permissions"}),"\n",(0,n.jsx)(t.p,{children:"After designing and publishing the micro page, we still need to configure access permissions for each micro page to make it visible to the end"})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},78799:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/amis-debug-1823a1c63735b6514fab2f0ddb3af0dd.gif"},11598:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/gs-00-97049735216e213e75b0474acdfe2002.gif"},56487:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/gs-01-641d6e9e5cf50b0f04ad2e860f999d0f.gif"},46176:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/gs-02-8ce685700cf657311ec8da98d1eefc84.gif"},17785:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/gs-03-2d0129086f445d02ea28140e00939cc7.gif"},34642:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/gs-04-acbb1d81e051d67482708176b386bd13.gif"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var n=i(96540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);