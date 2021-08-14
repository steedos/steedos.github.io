(self.webpackChunk=self.webpackChunk||[]).push([[7592],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return f},kt:function(){return m}});var n=o(67294),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r().createContext({}),c=function(e){var t=r().useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},f=function(e){var t=c(e.components);return r().createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},h=r().forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(o),h=n,m=f["".concat(s,".").concat(h)]||f[h]||u[h]||i;return o?r().createElement(m,a(a({ref:t},l),{},{components:o})):r().createElement(m,a({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=h;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var l=2;l<i;l++)s[l]=o[l];return r().createElement.apply(null,s)}return r().createElement.apply(null,o)}h.displayName="MDXCreateElement"},46669:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=o(74034),r=o(79973),i=(o(67294),o(3905)),s=["components"],a={title:"Flow Positions"},p=void 0,l={unversionedId:"us/help/workflow/admin_positions",id:"us/help/workflow/admin_positions",isDocsHomePage:!1,title:"Flow Positions",description:'The administrator needs to set "Flow Positions" and "Positions Users" when designing the approval process. Because the option in the "Role Name" is the "Flow Positions" set by the administrator when the "handler" type of a processing step of the approval process is the "Role of initiator";',source:"@site/../docs/us/help/workflow/admin_positions.md",sourceDirName:"us/help/workflow",slug:"/us/help/workflow/admin_positions",permalink:"/us/help/workflow/admin_positions",version:"current",frontMatter:{title:"Flow Positions"}},c=[{value:"Positions Users",id:"positions-users",children:[]},{value:"Note",id:"note",children:[]}],f={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'The administrator needs to set "Flow Positions" and "Positions Users" when designing the approval process. Because the option in the "Role Name" is the "Flow Positions" set by the administrator when the "handler" type of a processing step of the approval process is the "Role of initiator"; ',(0,i.kt)("br",null),'\nFor example, when "Department Manager", "Chief" is created in "Flow Positions", the "Role manager" option in the approval process includes "Department Manager", "Chief".\n',(0,i.kt)("img",{src:o(79755).Z})),(0,i.kt)("p",null," ",(0,i.kt)("img",{src:o(94126).Z}),'\nNote: For the design of the approval process, please refer to the "flow_design" help documentation.'),(0,i.kt)("h4",{id:"detailed-steps-for-flow-positions"},"Detailed steps for Flow Positions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'In the setup interface, click "workflow" and click "Flow Positions".'),(0,i.kt)("li",{parentName:"ul"},'Click the "Create" button in the upper right corner to pop up the pop-up box for the new job. After filling in the name of the new job in "Position Name", click the "Create" button to complete the approval.'),(0,i.kt)("li",{parentName:"ul"},'In the post list page, click on the post name on the right side of the "pen shape" button, "\xd7" button, you can modify the job, delete.')),(0,i.kt)("h3",{id:"positions-users"},"Positions Users"),(0,i.kt)("p",null,'"Positions Users" is similar to the position of an employee in a real job. Assuming "Position" is "department manager", "Positions Users" correspond to the department manager of the specific department, such as the "department manager" of the personnel department, the "department manager of the finance department", the "department manager" of the technical department.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(36932).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'in the figure you can see that each "Department Manager" position, the corresponding "jurisdiction" is the specific sector (such as: Technology, Finance, Ministry of Personnel), and "Positions Users" is appointed department manager The'),(0,i.kt)("li",{parentName:"ul"},"Note: The appointed department manager can also be multiplier.")),(0,i.kt)("h4",{id:"detailed-steps-for-positions-users"},"Detailed steps for Positions Users:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'set the interface, click on "workflow", click "Positions Users", then click the new, will pop up "Positions Users" pop-up box.\n\xa0',(0,i.kt)("img",{src:o(75797).Z})),(0,i.kt)("li",{parentName:"ul"},'Select an established approval position, such as "Department Manager", specify the post member (which can be multiple people), jurisdiction.'),(0,i.kt)("li",{parentName:"ul"},'Click the "Create" button to complete.'),(0,i.kt)("li",{parentName:"ul"},'In the post list page, click on the post name on the right side of the "pen shape" button, "\xd7" button, you can edit the job, modify.')),(0,i.kt)("h4",{id:"based-on-flow-positions-to-define-the-advantages-of-flow"},'Based on "Flow Positions" to define the advantages of flow:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Reduced the impact of staffing adjustments on process settings:\n\xa0If the department manager to replace, assuming that 10 flow are defined a step for this person to deal with, then you need to modify the 10 flow. And if the steps of the 10 flow is the approval of the post "department manager" to deal with, then there is no need to modify the flow of these 10 processes, only in the approval of the post set, the department\'s department manager for others.')),(0,i.kt)("h3",{id:"note"},"Note"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A user can correspond to multiple Flow Positions"),", for example, the same person, both the office manager and the company's office director."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A Flow Positions can also have multiple users"),', (corresponding to the same or different scope of approval for departments). For example, "Department Manager" of the post, the Ministry of Finance can be a member of the staff, the staff of the Ministry of Personnel is 2, so that the approval of the Ministry of Personnel process, sometimes need to choose one of the two department managers.')))}u.isMDXComponent=!0},79755:function(e,t,o){"use strict";t.Z=o.p+"assets/images/positions1-94f9891b37aed51e9fab8e69350390f4.png"},94126:function(e,t,o){"use strict";t.Z=o.p+"assets/images/positions2-4177bf1cd0f2a17311c923c9f3333048.png"},36932:function(e,t,o){"use strict";t.Z=o.p+"assets/images/positions3-0da21a0739fe3755bae92e1dc5567bd1.png"},75797:function(e,t,o){"use strict";t.Z=o.p+"assets/images/positions4-5b9f9cf1da5904c09f065e8f6207eeca.png"}}]);