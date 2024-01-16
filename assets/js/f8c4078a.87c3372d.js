"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},l="Template Rendering",o={unversionedId:"developer/micro-page/amis/tpl",id:"developer/micro-page/amis/tpl",title:"Template Rendering",description:"Welcome to the AMIS documentation. In this section, we will explore the template rendering feature in AMIS, which is a function borrowed from other template engines, aimed at providing flexibility in rendering text and data structures.",source:"@site/docs/developer/micro-page/amis/3_tpl.md",sourceDirName:"developer/micro-page/amis",slug:"/developer/micro-page/amis/tpl",permalink:"/developer/micro-page/amis/tpl",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/micro-page/amis/3_tpl.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"developer",previous:{title:"Data Scope and Data Chain",permalink:"/developer/micro-page/amis/data"},next:{title:"Data Mapping",permalink:"/developer/micro-page/amis/data_mapping"}},p={},s=[{value:"Template Strings: A Combination of Simplicity and Power",id:"template-strings-a-combination-of-simplicity-and-power",level:3},{value:"Template Strings",id:"template-strings",level:3},{value:"Rendering HTML with Template Strings",id:"rendering-html-with-template-strings",level:3},{value:"Expressions",id:"expressions",level:3},{value:"JavaScript Template Engine",id:"javascript-template-engine",level:3},{value:"Filters",id:"filters",level:2},{value:"Filter Parameters",id:"filter-parameters",level:3},{value:"Filter List Documentation",id:"filter-list-documentation",level:2}],m={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"template-rendering"},"Template Rendering"),(0,r.kt)("p",null,"Welcome to the AMIS documentation. In this section, we will explore the template rendering feature in AMIS, which is a function borrowed from other template engines, aimed at providing flexibility in rendering text and data structures."),(0,r.kt)("h3",{id:"template-strings-a-combination-of-simplicity-and-power"},"Template Strings: A Combination of Simplicity and Power"),(0,r.kt)("p",null,"AMIS supports template strings, allowing you to embed variables directly into the text. Here's how to output simple text:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "page",\n  "data": {\n    "text": "World!"\n  },\n  "body": "Hello ${text}"\n}\n')),(0,r.kt)("p",null,"The output will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Hello World!\n")),(0,r.kt)("h3",{id:"template-strings"},"Template Strings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When parsing template strings, if the $ character is encountered, AMIS will attempt to parse the variable and replace the template variable.\nFor example, if the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," variable is ",(0,r.kt)("inlineCode",{parentName:"li"},"Rick"),", and the template is ",(0,r.kt)("inlineCode",{parentName:"li"},"my name is ${name}"),", then the final template will be parsed as ",(0,r.kt)("inlineCode",{parentName:"li"},"my name is Rick"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "page",\n  "data": {\n    "name": "Rick"\n  },\n  "body": "my name is ${name}"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supports chained value access: AMIS supports using ",(0,r.kt)("strong",{parentName:"li"},".")," for chained value access, meaning you can access properties within nested objects. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "page",\n  "data": {\n    "name": "rick",\n    "company": {\n      "name": "baidu",\n      "department": "it"\n    }\n  },\n  "body": {\n    "type": "tpl",\n    "tpl": "my name is ${name}, I work for ${company.name}"\n  }\n}\n')),(0,r.kt)("h3",{id:"rendering-html-with-template-strings"},"Rendering HTML with Template Strings"),(0,r.kt)("p",null,"To render HTML, use the same data mapping syntax: ",(0,r.kt)("strong",{parentName:"p"},"${xxx}"),". If the variable itself contains HTML, apply the ",(0,r.kt)("strong",{parentName:"p"},"raw")," filter for correct rendering."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "text": "<b>World!</b>"\n  },\n  "type": "page",\n  "body": "<h1>Hello</h1> <span>${text|raw}</span>"\n}\n')),(0,r.kt)("h3",{id:"expressions"},"Expressions"),(0,r.kt)("p",null,"Supports simple expressions and formula calls. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "tpl",\n  "tpl": "${xxx == 1 ? \'One\' : \'Others\'}"\n}\n')),(0,r.kt)("p",null,"See the expressions chapter for details."),(0,r.kt)("h3",{id:"javascript-template-engine"},"JavaScript Template Engine"),(0,r.kt)("p",null,"AMIS also supports the JavaScript template engine, internally using lodash template. Note the difference in accessing data scope variables: use ",(0,r.kt)("strong",{parentName:"p"},"data.xxx")," instead of ",(0,r.kt)("strong",{parentName:"p"},"${xxx}"),". This engine treats the data scope as the current code execution context, requiring ",(0,r.kt)("strong",{parentName:"p"},"data.xxx")," to retrieve values."),(0,r.kt)("p",null,"The syntax is similar to EJS, ",(0,r.kt)("strong",{parentName:"p"},"<% ... %>")," indicates JavaScript statements. Familiarity with JavaScript makes page rendering a breeze. Additionally, several JavaScript methods are available, such as ",(0,r.kt)("strong",{parentName:"p"},"formatDate"),", ",(0,r.kt)("strong",{parentName:"p"},"formatTimeStamp"),", ",(0,r.kt)("strong",{parentName:"p"},"formatNumber"),", and ",(0,r.kt)("strong",{parentName:"p"},"countDown"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Template strings and the JavaScript template engine cannot be used interchangeably. For example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "tpl",\n  "tpl": "${data.xxx === \'a\'}" // Wrong!\n}\n{\n  "type": "tpl",\n  "tpl": "${xxx === \'a\'}" // Correct\n}\n'))),(0,r.kt)("h2",{id:"filters"},"Filters"),(0,r.kt)("p",null,"Data filters are an extension of the data mapping feature, allowing for additional processing of retrieved data."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Basic Usage"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"${xxx |filter1 }"),", for example ",(0,r.kt)("inlineCode",{parentName:"li"},"{name|trim}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Filter Chaining"),": Multiple filters can be chained, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"${xxx | filter1 | filter2 | ...}"),", to implement complex data processing flows."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Function Call Syntax"),": It is recommended to use function call syntax for data filtering, for example, replacing ",(0,r.kt)("inlineCode",{parentName:"li"},"${xxx | html}")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"${html(xxx)}"),". Of course, nested calls like ",(0,r.kt)("inlineCode",{parentName:"li"},"${trim(html(xxx))}")," are possible.")),(0,r.kt)("h3",{id:"filter-parameters"},"Filter Parameters"),(0,r.kt)("p",null,"Filters can have parameters written into them:\n",(0,r.kt)("inlineCode",{parentName:"p"},"${variable | filter:parameter1:parameter2:.....}"),"\nIf I want to convert the input time to a specific format, I need to specify parameters such as: YYYY-MM-DD"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "page",\n  "data": {\n    "now": 1586865590\n  },\n  "body": {\n    "type": "tpl",\n    "tpl": "now is ${now|date:YYYY-MM-DD}"\n  }\n}\n')),(0,r.kt)("p",null,"Of course, you can also use multiple filters with multiple parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"${xxx [|filter1[:arg1][:arg2]...[|filter2...]] }\n")),(0,r.kt)("h2",{id:"filter-list-documentation"},"Filter List Documentation"),(0,r.kt)("p",null,"There are many filters:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"html, raw, json, toJson, toInt, toFloat, date, now, toDate, dateModify, fromNow, number, trim, percent, round, truncate, url_encode, url_decode, default, split, join, sortBy, topAndOther, unique, first, last, nth, pick, objectToArray, plus, minus, times, division, sum, abs, duration, bytes, asArray, lowerCase, upperCase, substring, base64Encode, base64Decode, isTrue, isFalse, isMatch, notMatch, isEquals, notEquals, map, filter")),(0,r.kt)("p",null,"For more details, see ",(0,r.kt)("a",{parentName:"p",href:"https://aisuda.bce.baidu.com/amis/zh-CN/docs/concepts/data-mapping#%E8%BF%87%E6%BB%A4%E5%99%A8"},"AMIS Official Website - Filters")))}d.isMDXComponent=!0}}]);