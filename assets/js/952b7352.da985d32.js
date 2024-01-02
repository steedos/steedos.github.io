"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7150],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(a),k=r,c=d["".concat(s,".").concat(k)]||d[k]||m[k]||l;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},77983:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"Process API",description:"\u6839\u636e\u6d41\u7a0b\u7684\u5143\u6570\u636e\u5b9a\u4e49\uff0c\u81ea\u52a8\u751f\u6210\u5ba1\u6279\u76f8\u5173API\u3002"},i=void 0,p={unversionedId:"developer/api/api-process",id:"developer/api/api-process",title:"Process API",description:"\u6839\u636e\u6d41\u7a0b\u7684\u5143\u6570\u636e\u5b9a\u4e49\uff0c\u81ea\u52a8\u751f\u6210\u5ba1\u6279\u76f8\u5173API\u3002",source:"@site/docs/developer/api/api-process.mdx",sourceDirName:"developer/api",slug:"/developer/api/api-process",permalink:"/developer/api/api-process",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/api/api-process.mdx",tags:[],version:"current",frontMatter:{title:"Process API",description:"\u6839\u636e\u6d41\u7a0b\u7684\u5143\u6570\u636e\u5b9a\u4e49\uff0c\u81ea\u52a8\u751f\u6210\u5ba1\u6279\u76f8\u5173API\u3002"},sidebar:"developer",previous:{title:"OpenAPI",permalink:"/developer/api/openapi"},next:{title:"Plugins",permalink:"/developer/plugins/"}},s={},o=[{value:"Interface Validation",id:"interface-validation",level:2},{value:"API List",id:"api-list",level:2},{value:"API Specifications",id:"api-specifications",level:2},{value:"Start Approval",id:"start-approval",level:3},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"Request Parameters",id:"request-parameters",level:4},{value:"Response",id:"response",level:4},{value:"Save Draft Approval Form",id:"save-draft-approval-form",level:3},{value:"URI",id:"uri-1",level:4},{value:"Method",id:"method-1",level:4},{value:"Request parameters.",id:"request-parameters-1",level:4},{value:"Response",id:"response-1",level:4},{value:"Submitting a Draft Application",id:"submitting-a-draft-application",level:3},{value:"URI",id:"uri-2",level:4},{value:"Method",id:"method-2",level:4},{value:"Request Parameters",id:"request-parameters-2",level:4},{value:"Response",id:"response-2",level:4},{value:"Submitting an Approval Application",id:"submitting-an-approval-application",level:3},{value:"URI",id:"uri-3",level:4},{value:"Method",id:"method-3",level:4},{value:"Request Parameters",id:"request-parameters-3",level:4},{value:"Response",id:"response-3",level:4}],u={toc:o},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Specifications for Low-code platform's workflow engine related API interfaces, including rules for request parameters and return values, are stipulated in this agreement."),(0,r.kt)("h2",{id:"interface-validation"},"Interface Validation"),(0,r.kt)("p",null,"To call the API interfaces, user authentication information must be added to the request headers. For details, please refer to  ",(0,r.kt)("a",{parentName:"p",href:"./api-validate"},"Interface Validation"),"."),(0,r.kt)("h2",{id:"api-list"},"API List"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Request Operation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Start Approval"),(0,r.kt)("td",{parentName:"tr",align:null},"POST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Save Approval as Draft"),(0,r.kt)("td",{parentName:"tr",align:null},"POST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submit Draft Application"),(0,r.kt)("td",{parentName:"tr",align:null},"POST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submit Approval Request"),(0,r.kt)("td",{parentName:"tr",align:null},"POST")))),(0,r.kt)("h2",{id:"api-specifications"},"API Specifications"),(0,r.kt)("p",null,"Below are the detailed specifications for each workflow API."),(0,r.kt)("h3",{id:"start-approval"},"Start Approval"),(0,r.kt)("p",null,"Create a new approval request in draft status."),(0,r.kt)("h4",{id:"uri"},"URI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"/api/workflow/v2/draft\n")),(0,r.kt)("h4",{id:"method"},"Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("p",null,"The following parameters are required when requesting this interface."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instance"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Approval Form Field Values")))),(0,r.kt)("p",null,"The 'instance' attribute is described as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"space"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Workspace ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flow"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Process ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"applicant"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Applicant ID")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "instance": {\n        "space": "hKdnwE55WcnWveYxS",\n        "flow": "BayiYu3sk2hv3M2HW",\n        "applicant": "62ede4f62161e377e35de58c"\n    }\n}\n')),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The format of the return value when the API interface request is successful is as follows:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instance"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Approval form field value")))),(0,r.kt)("p",null,"Where the instance property is described as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The successfully created application form ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"space"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Workspace ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flow"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Workflow ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flow_version"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Workflow version ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"form"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Form  ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"form_version"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Form version ID")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "instance": {\n        "_id": "zMiGNe2sJm9KuruvM",\n        "space": "hKdnwE55WcnWveYxS",\n        "flow": "BayiYu3sk2hv3M2HW",\n        "flow_version": "Nvc5wjsgHYkXnNHhk",\n        "form": "Pdq8neQvT7fv5aTyd",\n        "form_version": "thX4kKBAx6iCgciWD"\n    }\n}\n')),(0,r.kt)("p",null,"The instance returned in the response contains information about the successfully created approval record."),(0,r.kt)("h3",{id:"save-draft-approval-form"},"Save Draft Approval Form"),(0,r.kt)("h4",{id:"uri-1"},"URI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"/api/workflow/v2/instance/save\n")),(0,r.kt)("h4",{id:"method-1"},"Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"request-parameters-1"},"Request parameters."),(0,r.kt)("p",null,"The following parameters need to be passed when requesting this API."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instance"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Approval Form Field Values")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "instance": {\n        "_id": "zMiGNe2sJm9KuruvM",\n        "space": "hKdnwE55WcnWveYxS",\n        "flow": "BayiYu3sk2hv3M2HW",\n        "flow_version": "Nvc5wjsgHYkXnNHhk",\n        "form": "Pdq8neQvT7fv5aTyd",\n        "form_version": "thX4kKBAx6iCgciWD",\n        "applicant": "62ede4f62161e377e35de58c",\n        "applicant_name": "xxx",\n        "applicant_organization": "XypyNbzGCJbHMNyWv",\n        "applicant_organization_name": "xxx",\n        "applicant_organization_fullname": "xxx",\n        "code": "",\n        "traces": [\n            {\n                "_id": "7f316cb404fddf2098c8fd2d",\n                "approves": [\n                    {\n                        "_id": "97628d0b9a33b541816caeeb",\n                        "description": "",\n                        "values": {\n                            "field1": "xx",\n                            "field2": "xx",\n                            "field3": "xx"\n                        },\n                        "next_steps": [\n                            {\n                                "step": "e28faf97-a1c4-4bdd-90e5-1b43d42aa10b",\n                                "users": []\n                            }\n                        ]\n                    }\n                ]\n            }\n        ],\n        "submit_date": xxx\n    }\n}\n')),(0,r.kt)("h4",{id:"response-1"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The format of the successful API interface request response is as follows:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instance"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Was the operation successful?")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "instance": true\n}\n')),(0,r.kt)("h3",{id:"submitting-a-draft-application"},"Submitting a Draft Application"),(0,r.kt)("p",null,"Submit an application in draft status to the next step"),(0,r.kt)("h4",{id:"uri-2"},"URI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"/api/workflow/submit\n")),(0,r.kt)("h4",{id:"method-2"},"Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"request-parameters-2"},"Request Parameters"),(0,r.kt)("p",null,"The following parameters need to be passed when requesting this API."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Instances"),(0,r.kt)("td",{parentName:"tr",align:null},"object[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The content of the application form.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Instances": [{\n        "_id": "e6viWhvARgo4xSxBC",\n        "inbox_users": [],\n        "name": "Test",\n        "submitter": "62ede4f62161e377e35de58c",\n        "flow": "BayiYu3sk2hv3M2HW",\n        "applicant": "62ede4f62161e377e35de58c",\n        "traces": [{\n            "_id": "0aed02a8113d7e1a22d5a245",\n            "step": "Ryu58zkQKrFLdvWpw",\n            "approves": [{\n                "_id": "5865e212c0e80024005090f9",\n                "description": "",\n                "values": {\n                    "field1": "xxx",\n                    "field2": "xxx",\n                    "field3": "xxx"\n                },\n                "next_steps": [{\n                    "step": "e28faf97-a1c4-4bdd-90e5-1b43d42aa10b",\n                    "users": [\n                        "62ede4f62161e377e35de58c"\n                    ]\n                }]\n            }]\n        }]\n    }]\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The traces contains the signature history for each step, while approves contains the approval process within each signature history, which records detailed information about the approval form.")),(0,r.kt)("h4",{id:"response-2"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When this API interface is requested successfully, the format of the return value is as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result": [...]\n}\n')),(0,r.kt)("p",null,"The result returns an array of objects. The key-value information contained in this array is shown as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alerts"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Prompt messages")))),(0,r.kt)("p",null,"The alerts mainly prompts whether the process version has been upgraded."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When this API interface fails to request, the format of the return value is as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    errors: [{ errorMessage: "..." }]\n}\n')),(0,r.kt)("h3",{id:"submitting-an-approval-application"},"Submitting an Approval Application"),(0,r.kt)("p",null,"Submit an application in approval status to the next step."),(0,r.kt)("h4",{id:"uri-3"},"URI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"/api/workflow/engine\n")),(0,r.kt)("h4",{id:"method-3"},"Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"request-parameters-3"},"Request Parameters"),(0,r.kt)("p",null,"The following parameters need to be passed when requesting this API."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Approvals"),(0,r.kt)("td",{parentName:"tr",align:null},"object[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The content of the approval")))),(0,r.kt)("h4",{id:"response-3"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When this API interface is requested successfully, an empty object is returned.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When this API interface fails to request, the format of the return value is as follows:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    errors: [{ errorMessage: "..." }]\n}\n')))}m.isMDXComponent=!0}}]);