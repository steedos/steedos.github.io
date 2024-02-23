"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=s,g=p["".concat(d,".").concat(h)]||p[h]||u[h]||a;return n?o.createElement(g,r(r({ref:t},c),{},{components:n})):o.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:s,r[1]=i;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(87462),s=(n(67294),n(3905));const a={title:"Node-Red"},r=void 0,i={unversionedId:"developer/integration/node-red",id:"developer/integration/node-red",title:"Node-Red",description:"Node-RED is a process-oriented programming tool that allows you to effortlessly connect IoT devices, APIs and online services together. It employs a browser-based editor which allows users to drag and drop different nodes onto a canvas, and connect them to create a flow. Node-RED also offers a plethora of nodes which enable users to easily interact with a diverse range of devices and services.https://Node-Red.org/\u3002",source:"@site/docs/developer/integration/node-red.mdx",sourceDirName:"developer/integration",slug:"/developer/integration/node-red",permalink:"/developer/integration/node-red",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/integration/node-red.mdx",tags:[],version:"current",frontMatter:{title:"Node-Red"},sidebar:"developer",previous:{title:"SSO API",permalink:"/developer/integration/api-jwt-sso"}},d={},l=[{value:"Integrating a Node-RED project",id:"integrating-a-node-red-project",level:2},{value:"Developing an application",id:"developing-an-application",level:3},{value:"Executing",id:"executing",level:3},{value:"Static Resource Storage",id:"static-resource-storage",level:3},{value:"Initialization Configuration",id:"initialization-configuration",level:3},{value:"Flow Designer",id:"flow-designer",level:2},{value:"Steedos Node",id:"steedos-node",level:2},{value:"steedos-event",id:"steedos-event",level:3},{value:"steedos-emit",id:"steedos-emit",level:3},{value:"steedos-call",id:"steedos-call",level:3},{value:"steedos-request",id:"steedos-request",level:3},{value:"steedos-response",id:"steedos-response",level:3},{value:"steedos-api-gw",id:"steedos-api-gw",level:3},{value:"steedos-instance",id:"steedos-instance",level:3},{value:"To invoke GraphQL",id:"to-invoke-graphql",level:2},{value:"To invoke ObjectQL",id:"to-invoke-objectql",level:2},{value:"Invoke using msg.call",id:"invoke-using-msgcall",level:3},{value:"Invoke using a broker",id:"invoke-using-a-broker",level:3},{value:"Trigger",id:"trigger",level:2}],c={toc:l},p="wrapper";function u(e){let{components:t,...a}=e;return(0,s.kt)(p,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Node-RED is a process-oriented programming tool that allows you to effortlessly connect IoT devices, APIs and online services together. It employs a browser-based editor which allows users to drag and drop different nodes onto a canvas, and connect them to create a flow. Node-RED also offers a plethora of nodes which enable users to easily interact with a diverse range of devices and services.",(0,s.kt)("a",{parentName:"p",href:"https://node-red.org/"},"https://Node-Red.org/"),"\u3002"),(0,s.kt)("h2",{id:"integrating-a-node-red-project"},"Integrating a Node-RED project"),(0,s.kt)("h3",{id:"developing-an-application"},"Developing an application"),(0,s.kt)("p",null,"Reference to\uff1a",(0,s.kt)("a",{parentName:"p",href:"https://gitlab.steedos.cn/steedos/steedos-project-template.git"},"steedos-project-template.git")),(0,s.kt)("h3",{id:"executing"},"Executing"),(0,s.kt)("p",null,"We can see the package.json file in the newly created node-red-app folder, which is an independent NPM project. To run the Node-Red project, we need to cd to that folder, execute yarn to install the project dependencies, and finally execute yarn start."),(0,s.kt)("p",null,"Once running successfully, the service can be accessed through the address with port 1880."),(0,s.kt)("h3",{id:"static-resource-storage"},"Static Resource Storage"),(0,s.kt)("p",null,' we need to store static resources, we can create a static resource directory under the node-red-app folder with a self-chosen file name. Here, we use "public" as an example. At the same time, add the following code to the setting.js file under the node-red-app folder\uff1a'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"httpStatic: path.join(__dirname, 'public'),\n    httpAdminRoot: \"/admin\"\n\n")),(0,s.kt)("p",null,"example\uff1a"),(0,s.kt)("p",null,'To access the stored resources, the URL only needs to be accessed using "/". The URL for the Node-Red control page has been changed to:',(0,s.kt)("a",{parentName:"p",href:"http://127.0.0.1:1880/admin"},"http://127.0.0.1:1880/admin")),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(89979).Z,width:"1089",height:"530"})),(0,s.kt)("h3",{id:"initialization-configuration"},"Initialization Configuration"),(0,s.kt)("p",null,"After running the Node-Red service, we can access the Node-Red by entering the address displayed on the console in a browser. Upon the first access to the service, we will see an initialization configuration wizard interface, where we can set up the account and password for accessing the Node-Red service, etc. We only need to follow the prompts to complete the configuration."),(0,s.kt)("p",null,'After completing the initialization configuration, we will be automatically redirected to the homepage named "Node-RED on Steedos". On this page, we can see a tutorial on how to customize Node-Red.'),(0,s.kt)("h2",{id:"flow-designer"},"Flow Designer"),(0,s.kt)("p",null,'On the homepage of the running Node-Red service, we can see a button named "Go to your Node-RED flow editor" on the right side. Clicking on it will open an editor named "Flow Builder". We can access the official Node-Red website tutorial at \xa0',(0,s.kt)("a",{parentName:"p",href:"https://node-red.org/docs/user-guide/"},"https://Node-Red.org/docs/user-guide/"),"\xa0 to learn how to configure, debug, and deploy flows in the editor."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(93359).Z,width:"1036",height:"627"})),(0,s.kt)("h2",{id:"steedos-node"},"Steedos Node"),(0,s.kt)("p",null,"We can use the aforementioned Flow Designer to configure the integration of existing business systems. If we need to connect mainstream business systems such as SAP, UFIDA, and Kingdee to integrate related businesses into Steedos, we can use a variety of nodes specially developed by us, which can easily realize various integration business requirements."),(0,s.kt)("h3",{id:"steedos-event"},"steedos-event"),(0,s.kt)("p",null,"Steedos Event refers to the function of event subscription and publication using the Steedos Event service in the Steedos platform. Through Steedos Event, we can subscribe to specific events, such as record creation, update or deletion events, in order to execute custom operations when the events occur. In Steedos Event, we need to specify the following parameters:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Broker"),"\xa0\uff1aa parameter used in Node-RED to specify the message broker used. In Node-RED, we can connect to Steedos projects by configuring the broker. Usually, NATS is used as the message broker. To configure the broker, we need to make corresponding configurations in the .env file under the Node-RED-app folder and reference it in Node-RED. For more details about NATS as a message broker, please refer to the following link:",(0,s.kt)("a",{parentName:"li",href:"https://moleculer.services/zh/docs/0.14/networking.html#NATS-Transporter%E3%80%82"},"https://moleculer.services/zh/docs/0.14/networking.html#NATS-Transporter\u3002")),(0,s.kt)("li",{parentName:"ul"},"Service\uff1aspecifies the name of the service used."),(0,s.kt)("li",{parentName:"ul"},"Name\uff1aspecifies the name of the node, such as the name of the node subscribing to events."),(0,s.kt)("li",{parentName:"ul"},"Topic\uff1aspecifies the topic or event name to subscribe to, such as creating records or updating records."),(0,s.kt)("li",{parentName:"ul"},"Group\uff1aspecifies the group where events are subscribed, which can be one or more groups separated by commas.")),(0,s.kt)("p",null,"By configuring these parameters, we can use Steedos Event in the Steedos platform to implement the function of event subscription and publication, so as to execute custom operations when events occur. For example, we can subscribe to record creation events, and send notifications to Slack or WeChat when events occur, or execute custom JavaScript code when events occur to achieve more complex operations."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(39725).Z,width:"506",height:"417"})),(0,s.kt)("h3",{id:"steedos-emit"},"steedos-emit"),(0,s.kt)("p",null,"Steedos Emit is a node within Node-RED, used for sending event messages to the Steedos project. This node requires the following parameters to be configured:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Broker: Specifies the name of the message broker being used;"),(0,s.kt)("li",{parentName:"ul"},"Name: Specifies the name of the node;"),(0,s.kt)("li",{parentName:"ul"},"Topic: Specifies the event topic/name, which can be overridden by msg.topic;"),(0,s.kt)("li",{parentName:"ul"},"Broadcast: Specifies whether the event should be broadcast, which can be overridden by msg.broadcast;"),(0,s.kt)("li",{parentName:"ul"},"Group: Specifies the group(s) to which the event belongs, with multiple group names separated by commas. This can be overridden by msg.group.")),(0,s.kt)("p",null,"By configuring these parameters, we can use the Steedos Emit node in Node-RED to send event messages to the Steedos project, enabling communication between different components."),(0,s.kt)("h3",{id:"steedos-call"},"steedos-call"),(0,s.kt)("p",null,"Steedos Call is a Node-RED node used for invoking the APIs provided by the Steedos platform. It can invoke the APIs of the Steedos platform by configuring Broker and Action. The value of Action can also be overridden by the msg.action property. Additionally, some JSON format options can be set in Options to better control the behavior of API invocation. For more information on the APIs provided by the Steedos platform, please refer to the API documentation of the Steedos platform. You can find more information about this in the steedos-template project."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(72702).Z,width:"1408",height:"680"})),(0,s.kt)("h3",{id:"steedos-request"},"steedos-request"),(0,s.kt)("p",null,"Steedos Request is a Node-RED node used for sending HTTP requests to the ObjectQL microservices and GraphQL microservices of the Steedos platform. This node requires the following parameters to be configured:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Broker: Message broker."),(0,s.kt)("li",{parentName:"ul"},"Service: Name of the microservice to be called."),(0,s.kt)("li",{parentName:"ul"},"Name: The name of the node, used to identify the node within Node-RED."),(0,s.kt)("li",{parentName:"ul"},"Action: The name of the operation to be performed, such as querying, creating, updating, or deleting objects. If the msg.action property is included in the message, it will override this parameter."),(0,s.kt)("li",{parentName:"ul"},'REST: This attribute can customize the API according to JSON values. The "method" is the request method and the "path" is the routing URL address.'),(0,s.kt)("li",{parentName:"ul"},'Trigger\uff1aThis attribute can customize the trigger according to JSON values. The "listenTo" is the object being listened to, and the "when" is the triggering timing. Detailed values can be found in the trigger section of the official documentation of the Steedos platform:',(0,s.kt)("a",{parentName:"li",href:"https://beta.steedos.cn/docs/developer/action-trigger"},"https://beta.steedos.cn/docs/developer/action-trigger"))),(0,s.kt)("p",null,"When the node receives input messages, it sends the data in the messages as parameters for the request to the Steedos platform and sends the response data as output messages to the next node. You can find more information about this in the steedos-template project."),(0,s.kt)("p",null,"For example, you can customize an API in Node-RED with Steedos Request."),(0,s.kt)("p",null,"The API Endpoint:",(0,s.kt)("a",{parentName:"p",href:"http://127.0.0.1:5000/service/api/example-service/hello/jack"},"http://127.0.0.1:5000/service/api/example-service/"),"+path"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(21422).Z,width:"516",height:"537"})," "),(0,s.kt)("p",null,"Example\uff1a"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(14992).Z,width:"513",height:"502"})," "),(0,s.kt)("h3",{id:"steedos-response"},"steedos-response"),(0,s.kt)("p",null,"Steedos Response is a Node-RED node used for sending response messages to the initiator of an HTTP request. This node requires the following parameters to be configured:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Name: The name of the node, used to identify the node within Node-RED.")),(0,s.kt)("p",null,"When the node receives input messages, it sends the data in the messages back to the initiator of the HTTP request as the response body. The options of the node can be configured to set the status code, HTTP headers, and content type of the response. This node is typically used in conjunction with the Steedos Request node to respond to requests from the ObjectQL microservices and GraphQL microservices of the Steedos platform. More details can be found in the steedos-template project."),(0,s.kt)("h3",{id:"steedos-api-gw"},"steedos-api-gw"),(0,s.kt)("p",null,"Steedos API Gateway (APIGW) is an open-source API gateway in Steedos that helps enterprises integrate multiple microservices into a unified API. "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Broker"),":refers to the message broker")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Name"),"\uff1aspecifies the name of the node")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Action"),": is the name of the operation to be performed"))),(0,s.kt)("p",null,"It provides a range of functionalities, such as API management, security authentication, traffic control, logging, and monitoring. In Steedos, APIGW is an independent service that can be configured through configuration files and used in conjunction with other services. This node requires the following parameters. More details can be found in the steedos-template project."),(0,s.kt)("h3",{id:"steedos-instance"},"steedos-instance"),(0,s.kt)("p",null,"Steedos Instance is a Node-RED node that allows you to inject a Steedos instance into the flow or global context. It enables you to perform various operations using the API of the Steedos platform, such as querying, creating, updating, and deleting data. "),(0,s.kt)("p",null,"Before using the Steedos Instance node, you need to create an application on the Steedos platform and configure its data model. Then, you need to specify the name of the application and the access token in the configuration of the Steedos Instance node. This way, when you call the Steedos instance in the flow or global context, it will automatically authenticate you with the credentials you provide and allow you to perform application-related operations. More details can be found in the steedos-template project."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(97006).Z,width:"492",height:"373"})," "),(0,s.kt)("h2",{id:"to-invoke-graphql"},"To invoke GraphQL"),(0,s.kt)("p",null,"use msg.call in your Node-RED flow."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'msg.call(\'api.graphql\', \n    {\n        query: `query {\n            space_users(filters: ["user", "=", "${msg.meta.user.userId}"]) {\n                name\n                organization\n            }\n        }`\n    }, \n    { meta: { } }\n).then((data) => {\n    msg.payload = data\n    node.send(msg)\n}).catch((err) => {\n    node.error(err, msg)\n})        \n')),(0,s.kt)("h2",{id:"to-invoke-objectql"},"To invoke ObjectQL"),(0,s.kt)("p",null,"There are two ways to invoke ObjectQL in Node-RED:"),(0,s.kt)("h3",{id:"invoke-using-msgcall"},"Invoke using msg.call"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'msg.call(\'objectql.find\',\n    {\n        "objectName": "space_users",\n        "query": {\n            // "fields": ["name", "orgranizations"],\n            "filters": ["user", "=", msg.meta.user.userId]\n        }\n    },\n    { meta: {} }\n).then((data) => {\n    msg.payload = data\n    node.send(msg)\n}).catch((err) => {\n    node.error(err, msg)\n})\n')),(0,s.kt)("h3",{id:"invoke-using-a-broker"},"Invoke using a broker"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'const broker = global.get(\'broker\');\n\nmsg.payload = await broker.call(\'objectql.find\', \n    {\n        "objectName": "space_users",\n        "query": {\n            "fields": ["name", "organizations"]\n        }\n    },\n    { meta: {} }\n)\n')),(0,s.kt)("h2",{id:"trigger"},"Trigger"),(0,s.kt)("p",null,"Example\uff1a"),(0,s.kt)("p",null," ",(0,s.kt)("img",{src:n(3476).Z,width:"1080",height:"370"})," "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n{\n"id": "7350d7b42b233ab6",\n"type": "steedos-request-action",\n"z": "c10017b236a162fd",\n"broker": "ce147b46c731d342",\n"service": "5ab5acead56ffaea",\n"name": "trigger",\n"topic": "space_users_triggers",\n"rest": "{}",\n"restType": "json",\n"trigger": "{\\"listenTo\\":\\"space_users\\",\\"when\\":[\\"beforeInsert\\",\\"beforeUpdate\\"]}",\n"triggerType": "json",\n"params": "{}",\n"paramsType": "json",\n"x": 100,\n"y": 120,\n"wires": [\n[\n"0441d3a1237dcd50",\n"6f988203ee0b8323"\n]\n]\n},\n{\n"id": "0441d3a1237dcd50",\n"type": "function",\n"z": "c10017b236a162fd",\n"name": "trigger",\n"func": "const doc = msg.payload.doc;\\nif ([doc.name](http://doc.name/) && doc.name.length < 2) {\\n   msg.error = { message: \\"\u59d3\u540d\u6700\u5c11\u4e24\u4f4d.\\" };\\n}\\n\\nreturn msg;",\n"outputs": 1,\n"noerr": 0,\n"initialize": "",\n"finalize": "",\n"libs": [],\n"x": 350,\n"y": 160,\n"wires": [\n[\n"dd4a70227645def5",\n"1a4631e22fdbdc5d"\n]\n]\n},\n{\n"id": "dd4a70227645def5",\n"type": "debug",\n"z": "c10017b236a162fd",\n"name": "debug 5",\n"active": true,\n"tosidebar": true,\n"console": false,\n"tostatus": false,\n"complete": "error",\n"targetType": "msg",\n"statusVal": "",\n"statusType": "auto",\n"x": 680,\n"y": 80,\n"wires": []\n},\n{\n"id": "1a4631e22fdbdc5d",\n"type": "steedos-response-action",\n"z": "c10017b236a162fd",\n"name": "",\n"x": 700,\n"y": 220,\n"wires": []\n},\n{\n"id": "6f988203ee0b8323",\n"type": "debug",\n"z": "c10017b236a162fd",\n"name": "debug 6",\n"active": true,\n"tosidebar": true,\n"console": false,\n"tostatus": false,\n"complete": "payload",\n"targetType": "msg",\n"statusVal": "",\n"statusType": "auto",\n"x": 340,\n"y": 60,\n"wires": []\n},\n{\n"id": "ce147b46c731d342",\n"type": "steedos-config",\n"name": "steedos",\n"transporter": "${TRANSPORTER}",\n"namespace": "steedos",\n"options": "{}",\n"optionsType": "json"\n},\n{\n"id": "5ab5acead56ffaea",\n"type": "steedos-service-config",\n"name": "example-nodered",\n"version": "",\n"settings": "{}",\n"rest": "",\n"settingsType": "json"\n}\n]\n')))}u.isMDXComponent=!0},72702:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node_red_emit-29955bd9294885f17cf2eed304685935.png"},39725:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node_red_event-78ce44ace55234ec2581600a0c05f267.png"},97006:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node_red_gw-e2e27700758235cdbfd1a6d5c0588bc3.png"},93359:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node_red_ini-bfe9945e10eab38eda565602e9ec69bb.png"},3476:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node_red_objectql-926400805a4e3413352d086203e3276b.png"},21422:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node_red_request-200f73b055c328df7566ad09c70e70dd.png"},14992:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node_red_request_ex-b4b5f1d2b81008d3e8d0b640b70f4d27.png"},89979:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node_red_run-9a6935e2c40d4f371de149c2a1bd4226.png"}}]);