"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Lesson 4: Workflow Rules",l={unversionedId:"getting-started/tutorials/the-basics/workflow-rules",id:"getting-started/tutorials/the-basics/workflow-rules",title:"Lesson 4: Workflow Rules",description:"In this section, we will delve into the automation features of Steedos, exploring how to use workflow rules to automate tasks. We will go through a practical case \u2013 creating a workflow rule that sends reminders to assignees (Assignees) when a task (such as the Todos object) is created, modified, or deleted.",source:"@site/docs/getting-started/tutorials/the-basics/4.workflow-rules.md",sourceDirName:"getting-started/tutorials/the-basics",slug:"/getting-started/tutorials/the-basics/workflow-rules",permalink:"/getting-started/tutorials/the-basics/workflow-rules",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/getting-started/tutorials/the-basics/4.workflow-rules.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"platform",previous:{title:"Lesson 3: Creating Application",permalink:"/getting-started/tutorials/the-basics/app"},next:{title:"User Guide",permalink:"/getting-started/user/"}},s={},c=[{value:"Objectives",id:"objectives",level:2},{value:"<strong>Introduction to Workflow Rules</strong>",id:"introduction-to-workflow-rules",level:2},{value:"<strong>Definition and Importance</strong>",id:"definition-and-importance",level:3},{value:"<strong>Features</strong>",id:"features",level:3},{value:"<strong>Comparison Between Workflow Rules and Triggers</strong>",id:"comparison-between-workflow-rules-and-triggers",level:3},{value:"<strong>Application Scenarios</strong>",id:"application-scenarios",level:3},{value:"<strong>Steps to Create a Workflow Rule</strong>",id:"steps-to-create-a-workflow-rule",level:2},{value:"<strong>Practical Case: Task Reminder Workflow Rule</strong>",id:"practical-case-task-reminder-workflow-rule",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Post-Lesson Exercise",id:"post-lesson-exercise",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lesson-4-workflow-rules"},"Lesson 4: Workflow Rules"),(0,r.kt)("p",null,"In this section, we will delve into the automation features of Steedos, exploring how to use workflow rules to automate tasks. We will go through a practical case \u2013 creating a workflow rule that sends reminders to assignees (",(0,r.kt)("inlineCode",{parentName:"p"},"Assignees"),") when a task (such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Todos")," object) is created, modified, or deleted."),(0,r.kt)("h2",{id:"objectives"},"Objectives"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understand the basic concepts and applications of workflow rules."),(0,r.kt)("li",{parentName:"ul"},"Learn how to create and manage workflow rules in Steedos."),(0,r.kt)("li",{parentName:"ul"},"Master the skills of automating task notifications using workflow rules.")),(0,r.kt)("h2",{id:"introduction-to-workflow-rules"},(0,r.kt)("strong",{parentName:"h2"},"Introduction to Workflow Rules")),(0,r.kt)("p",null,"Workflow rules in Steedos are a powerful automation tool that allows users to automatically perform predefined actions based on specific conditions. These rules are key to improving efficiency, ensuring data consistency, and automating repetitive tasks."),(0,r.kt)("h3",{id:"definition-and-importance"},(0,r.kt)("strong",{parentName:"h3"},"Definition and Importance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Definition"),": Workflow rules are business logic based on a set of conditions, triggering one or multiple actions, such as updating fields, sending emails, creating tasks, etc., when these conditions are met."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Importance"),": They greatly simplify daily tasks, reduce the need for manual handling, and ensure the accuracy and consistency of business processes.")),(0,r.kt)("h3",{id:"features"},(0,r.kt)("strong",{parentName:"h3"},"Features")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automating Tasks"),": Automatically perform common business tasks, such as data updates, record creation, and sending notifications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Condition-Based Triggers"),": Triggered based on changes in record fields, specific dates, or even results of formulas."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Action Execution"),": Perform various actions, including sending email notifications, updating fields of records, or creating new records.")),(0,r.kt)("h3",{id:"comparison-between-workflow-rules-and-triggers"},(0,r.kt)("strong",{parentName:"h3"},"Comparison Between Workflow Rules and Triggers")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Workflow Rules")," are relatively simple and suitable for direct condition-action models."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Triggers")," are more appropriate for complex business logic that requires coding.")),(0,r.kt)("h3",{id:"application-scenarios"},(0,r.kt)("strong",{parentName:"h3"},"Application Scenarios")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Management"),": Such as automatically updating the status or fields of records."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Notifications and Reminders"),": Such as automatically sending reminder emails to relevant personnel before task deadlines."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Business Rule Execution"),": Such as automatically assigning tasks or resources based on specific conditions.")),(0,r.kt)("p",null,"Workflow rules are the cornerstone of automation in Steedos, applicable to a variety of business scenarios, from simple data updates to complex business logic processing. Understanding and mastering workflow rules are crucial for effectively using the Steedos platform."),(0,r.kt)("h2",{id:"steps-to-create-a-workflow-rule"},(0,r.kt)("strong",{parentName:"h2"},"Steps to Create a Workflow Rule")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choose the object and start creating the rule."),(0,r.kt)("li",{parentName:"ul"},"Define the trigger conditions."),(0,r.kt)("li",{parentName:"ul"},"Set up actions (such as sending emails, creating tasks, etc.).")),(0,r.kt)("h2",{id:"practical-case-task-reminder-workflow-rule"},(0,r.kt)("strong",{parentName:"h2"},"Practical Case: Task Reminder Workflow Rule")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scenario Description"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When tasks of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Todos")," object are created or modified, it is necessary to send reminder emails to the assignees."),(0,r.kt)("li",{parentName:"ul"},"Note that standard workflow rules do not support triggering on record deletion."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Practical Steps"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Enter Settings"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Access the ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," area from the Steedos main interface."),(0,r.kt)("li",{parentName:"ul"},"Create the ",(0,r.kt)("inlineCode",{parentName:"li"},"Todos")," object."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a New Workflow Rule"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"Workflow Rules")," section, select ",(0,r.kt)("inlineCode",{parentName:"li"},"New"),"."),(0,r.kt)("li",{parentName:"ul"},"Choose the ",(0,r.kt)("inlineCode",{parentName:"li"},"Todos")," object."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Set Rule Conditions"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rule Name: For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"Todo Assignment Notification"),"."),(0,r.kt)("li",{parentName:"ul"},"API Name: For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"todo_assignment_notification"),"."),(0,r.kt)("li",{parentName:"ul"},"Evaluation Criteria: Choose \u201ccreated, and every time editing results in the conditions being met\u201d."),(0,r.kt)("li",{parentName:"ul"},"Rule Condition: Use the formula ",(0,r.kt)("inlineCode",{parentName:"li"},"TRUE"),", meaning any creation or editing operation will trigger the rule."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add Notification Action"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check ",(0,r.kt)("inlineCode",{parentName:"li"},"Workflow Notification"),", click ",(0,r.kt)("inlineCode",{parentName:"li"},"New")," to create a new workflow notification."),(0,r.kt)("li",{parentName:"ul"},"API Name: For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"todo_assignment_notification"),"."),(0,r.kt)("li",{parentName:"ul"},"Display Name: For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"Todo Assignment Notification"),"."),(0,r.kt)("li",{parentName:"ul"},"Choose the ",(0,r.kt)("inlineCode",{parentName:"li"},"Todos")," object."),(0,r.kt)("li",{parentName:"ul"},"Set the notification title formula: ",(0,r.kt)("inlineCode",{parentName:"li"},'"You have a new task"'),"."),(0,r.kt)("li",{parentName:"ul"},"Set the notification body formula: ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),"."),(0,r.kt)("li",{parentName:"ul"},"Choose the assigned user, click ",(0,r.kt)("inlineCode",{parentName:"li"},"User field on the object"),", select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Assignees")," field as the message recipient."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Save and Activate the Rule"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"Immediate Actions")," of the workflow rule, select the newly created ",(0,r.kt)("inlineCode",{parentName:"li"},"Workflow Notification"),"."),(0,r.kt)("li",{parentName:"ul"},"Enable the workflow rule."),(0,r.kt)("li",{parentName:"ul"},"Save after confirming the settings."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Test the Rule"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Test in the development environment if the message is sent correctly when creating and modifying ",(0,r.kt)("inlineCode",{parentName:"li"},"Todos")," records.")))))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Through this lesson, you will be able to understand and apply workflow rules in Steedos to enhance the automation and efficiency of business processes. Remember that practical operation is the best way to learn, so it is strongly recommended to practice the content of this lesson in a development environment."),(0,r.kt)("h2",{id:"post-lesson-exercise"},"Post-Lesson Exercise"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Todos")," task in the development environment and observe whether the expected email reminder is received."),(0,r.kt)("li",{parentName:"ul"},"Try modifying the workflow rule, adding new conditions, such as triggering the reminder only when the assignee is not yourself.")))}m.isMDXComponent=!0}}]);