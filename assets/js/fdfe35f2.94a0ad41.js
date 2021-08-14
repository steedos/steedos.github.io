(self.webpackChunk=self.webpackChunk||[]).push([[5068],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return h}});var a=t(67294),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r().createContext({}),u=function(e){var n=r().useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r().createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r().createElement(r().Fragment,{},n)}},d=r().forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,h=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return t?r().createElement(h,o(o({ref:n},c),{},{components:t})):r().createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<l;c++)p[c]=t[c];return r().createElement.apply(null,p)}return r().createElement.apply(null,t)}d.displayName="MDXCreateElement"},14164:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=t(74034),r=t(79973),l=(t(67294),t(3905)),p=["components"],o={title:"GraphQL API",sidebar_label:"\u6982\u8ff0"},i=void 0,c={unversionedId:"developer/api/graphql",id:"developer/api/graphql",isDocsHomePage:!1,title:"GraphQL API",description:"\x3c!--",source:"@site/../docs/developer/api/graphql.md",sourceDirName:"developer/api",slug:"/developer/api/graphql",permalink:"/developer/api/graphql",version:"current",frontMatter:{title:"GraphQL API",sidebar_label:"\u6982\u8ff0"},sidebar:"\u6587\u6863",previous:{title:"\u6570\u636e\u5b57\u5178",permalink:"/developer/api/odata_metadata"},next:{title:"\u67e5\u8be2",permalink:"/developer/api/graphql_query"}},u=[{value:"URL\u8bbf\u95eeGraphQL",id:"url\u8bbf\u95eegraphql",children:[{value:"URL",id:"url",children:[]},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",children:[]}]},{value:"\u5ba2\u6237\u7aef\u8bbf\u95eeGraphQL",id:"\u5ba2\u6237\u7aef\u8bbf\u95eegraphql",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u6269\u5c55\u67e5\u8be2",id:"\u6269\u5c55\u67e5\u8be2",children:[]},{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e",children:[]}]}],s={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728Steedos\u4e2d\u914d\u7f6e\u5bf9\u8c61\u65f6\uff0c\u4f1a\u81ea\u52a8\u4e3a\u60a8\u751f\u6210",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL API"),"\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528GraphQL API\uff0c\u60a8\u53ef\u4ee5\u8981\u6c42\u6240\u9700\u7684\u786e\u5207\u4fe1\u606f\u3002\u8be6\u60c5\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL API"),"\u3002"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7URL\u8bbf\u95eeGraphQL\u63a5\u53e3\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5ba2\u6237\u7aef\u7684\u65b9\u5f0f\uff0c\u5177\u4f53\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("h2",{id:"url\u8bbf\u95eegraphql"},"URL\u8bbf\u95eeGraphQL"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u4ee5\u201cip\uff1alocalhost\u201d\uff0c\u201c\u7aef\u53e3\uff1a5000\u201d\u542f\u52a8\u670d\u52a1"),(0,l.kt)("h3",{id:"url"},"URL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"POST 'http://localhost:5000/graphql'\n")),(0,l.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,l.kt)("p",null,"\u4ee5 JSON \u683c\u5f0f\u4f20\u5165\u8bf7\u6c42\u53c2\u6570\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u4f20\u5165\u7684 GraphQL \u811a\u672c")))),(0,l.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},' curl \\\n   -X POST http://192.168.0.95:5080/graphql\n   -b Authorization : Bearer apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd\n   -d query : mutation{task__insert(data:{name:"Task One",space:"KCBjAEGRNQbfMBSpu"}){name,_id}}\n')),(0,l.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'{\n    "data": {\n        "tast__insert": {\n            "name": "Task One",\n            "_id": "60139a86a31008d9b075b74d"\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5ba2\u6237\u7aef\u8bbf\u95eegraphql"},"\u5ba2\u6237\u7aef\u8bbf\u95eeGraphQL"),(0,l.kt)("p",null,"\u5047\u8bbe\u60a8\u5df2\u7ecf\u4f7f\u7528\u7aef\u53e35000\u542f\u52a8\u4e86\u534e\u708e\u9b54\u65b9\u7684\u672c\u5730\u670d\u52a1\uff0c\u90a3\u4e48\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/graphql"),"\u6765\u8bbf\u95eeGraphQL\u5ba2\u6237\u7aef\u3002"),(0,l.kt)("p",null,"\u5728GraphQL\u5ba2\u6237\u7aef\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5728\u5de6\u4fa7\u9762\u677f\u4e2d\u8f93\u5165GraphQL\u811a\u672c\uff0c\u7136\u540e\u901a\u8fc7\u5355\u51fb\u9875\u9762\u9876\u90e8\u7684\u8fd0\u884c\u6309\u94ae\u6765\u8fd0\u884c\u5b83\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u53ef\u4ee5\u76f4\u63a5\u5728\u5ba2\u6237\u7aef\u4e0a\u8fd0\u884c\u7684\u793a\u4f8b\u3002"),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,"\u8be2\u95ee\u6240\u6709\u5e10\u6237\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"query{\n  contacts {\n    name,\n    amount\n  }\n}\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u60a8\u4e5f\u53ef\u4ee5\u7701\u7565\u8bf7\u6c42\u5934\u7684\u2018query\u2019\uff0c\u8fd4\u56de\u7ed3\u679c\u76f8\u540c\u3002"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"{\n  contacts {\n    name,\n    amount\n  }\n}\n")))),(0,l.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'{\n  "data": {\n    "accounts": [\n      {\n        "name": "Phase 2 Construction Contract",\n        "amount": 70000\n      },\n      {\n        "name": "2021 OA Project Maintenance Contract",\n        "amount": 89000\n      }\n    ]\n  }\n}\n')),(0,l.kt)("h3",{id:"\u6269\u5c55\u67e5\u8be2"},"\u6269\u5c55\u67e5\u8be2"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u5bf9\u8c61\u540d\u79f0\u548c\u62ec\u53f7\u4e4b\u540e\u5b9a\u4e49\u5b57\u6bb5\u7ed3\u6784\uff0c\u6269\u5c55\u5b57\u6bb5\u5e76\u67e5\u8be2\u76f8\u5173\u5b57\u6bb5\u503c\u3002"),(0,l.kt)("p",null,"\u5b57\u6bb5\u7ed3\u6784\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"query{\n  contracts {\n    name\n    amount\n    // highlight-start\n    othercompany{\n      name\n      owner{\n        name\n      }\n    }\n    // highlight-end\n  } \n}\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "contracts": [\n      {\n        "name": "Phase 2 Construction Contract",\n        "amount": 70000,\n        "othercompany": {\n          "name": "3M",\n          "owner": {\n            "name": "Litant"\n          }\n        }\n      },\n      {\n        "name": "2021 OA Project Maintenance Contract",\n        "amount": 89000\n      }\n    ]\n  }\n}\n')),(0,l.kt)("p",null,"\u8be6\u60c5\u89c1",(0,l.kt)("a",{parentName:"p",href:"/developer/api/graphql_query"},"\u901a\u8fc7GraphQL API\u67e5\u8be2\u6570\u636e"),"\u3002"),(0,l.kt)("h3",{id:"\u67e5\u8be2\u6570\u636e"},"\u67e5\u8be2\u6570\u636e"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7 GraphQL API \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"filters"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"fields"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"top"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"skip"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"sort"),"\u67e5\u8be2\u6570\u636e\u7684\u8bb0\u5f55\uff0c\u8be6\u89c1",(0,l.kt)("a",{parentName:"p",href:"/developer/api/graphql_query"},"\u901a\u8fc7GraphQL API\u67e5\u8be2\u6570\u636e")),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("p",null,"\u67e5\u8be2\u6240\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"status"),"\u5c5e\u6027\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Qualified"),"\u7684\u7ebf\u7d22\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'query{\n  leads(filters:[["status", "=", "Qualified"]], top:1,\n  sort:"name desc"){\n    name,\n    title,\n    status\n  }\n}\n')),(0,l.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'{\n  "data": {\n    "leads": [\n      {\n        "name": "Lead A",\n        "title": "GM",\n        "status": "Qualified"\n      }\n    ]\n  }\n}\n')),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 filters:\"status eq 'Qualified'\" \u66ff\u6362 filters:[",'["status", "=" "Qualified"]',"]\uff0c\u5b83\u662f\u4e00\u4e2a\u6807\u51c6\u7684",(0,l.kt)("a",{parentName:"p",href:"https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html#sec_SystemQueryOptionfilter"},"OData\u8fc7\u6ee4\u5b57\u7b26\u4e32"),"\u3002"))))}m.isMDXComponent=!0}}]);