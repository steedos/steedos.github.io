(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{1055:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/object_baidu-8b23c98777266c888a05aba35d444f72.png"},1056:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/dashboard-b4c8e2ccd5d6a3a157f95a24d0f7ed9d.png"},1057:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/app_baidu-e344510dd506bf1eab31ae7f88ae215b.png"},415:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return i}));var r=n(1),a=n(6),b=(n(0),n(495)),c={title:"Web App \u63d2\u4ef6\u51fd\u6570"},o={unversionedId:"plugins/plugin_webapp_functions",id:"plugins/plugin_webapp_functions",isDocsHomePage:!1,title:"Web App \u63d2\u4ef6\u51fd\u6570",description:"\u6b64\u6559\u7a0b\u5c06\u5f15\u5bfc\u60a8\u4f7f\u7528\u57fa\u672c\u7684Steedos Web\u63d2\u4ef6\u51fd\u6570\u5b9e\u73b0\u4e30\u5bcc\u7684\u524d\u7aef\u7ec4\u4ef6\u529f\u80fd\u3002",source:"@site/../docs/plugins/plugin_webapp_functions.md",slug:"/plugins/plugin_webapp_functions",permalink:"/plugins/plugin_webapp_functions",version:"current",sidebar:"\u6587\u6863",previous:{title:"Web App \u63d2\u4ef6",permalink:"/plugins/plugin_webapp"},next:{title:"JsReport\u62a5\u8868",permalink:"/developer/report_jsreport"}},l=[{value:"\u63d2\u4ef6\u7c7b",id:"\u63d2\u4ef6\u7c7b",children:[{value:"registerPlugin",id:"registerplugin",children:[]}]},{value:"Registry",id:"registry",children:[{value:"registerObjectHomeComponent",id:"registerobjecthomecomponent",children:[]},{value:"registerObjectIFrameHomeComponent",id:"registerobjectiframehomecomponent",children:[]},{value:"registerDashboardComponent",id:"registerdashboardcomponent",children:[]},{value:"registerDashboardIFrameComponent",id:"registerdashboardiframecomponent",children:[]}]},{value:"\u5bfc\u51fa",id:"\u5bfc\u51fa",children:[]}],p={rightToc:l};function i(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u6b64\u6559\u7a0b\u5c06\u5f15\u5bfc\u60a8\u4f7f\u7528\u57fa\u672c\u7684Steedos Web\u63d2\u4ef6\u51fd\u6570\u5b9e\u73b0\u4e30\u5bcc\u7684\u524d\u7aef\u7ec4\u4ef6\u529f\u80fd\u3002"),Object(b.b)("h2",{id:"\u63d2\u4ef6\u7c7b"},"\u63d2\u4ef6\u7c7b"),Object(b.b)("p",null,"\u63d2\u4ef6\u7c7b\u4e2d\u53ef\u4ee5\u5b9a\u4e49initialize\u51fd\u6570\uff0c\u534e\u708e\u9b54\u65b9\u9879\u76ee\u4f1a\u901a\u8fc7\u8be5\u51fd\u6570\u6765\u201c\u521d\u59cb\u5316\u201d\u60a8\u7684\u63d2\u4ef6\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport { Provider } from 'react-redux';\nimport { Bootstrap } from '@steedos/react';\n\nclass HelloWorldPlugin {\n    initialize(registry, store) {\n        // \u8c03\u7528registry.registerObjectHomeComponent\u7b49\u5404\u79cd\u7ec4\u4ef6\u6ce8\u518c\u51fd\u6570\u6765\u91cd\u5199\u6216\u589e\u5f3aUI\u529f\u80fd\n    }\n}\n")),Object(b.b)("h3",{id:"registerplugin"},"registerPlugin"),Object(b.b)("p",null,"\u8be5\u51fd\u6570\u53ef\u4ee5\u5411\u534e\u708e\u9b54\u65b9\u9879\u76ee\u4e2d\u6ce8\u518c\u4e00\u4e2aWeb App\u63d2\u4ef6\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport { Provider } from 'react-redux';\nimport { Bootstrap } from '@steedos/react';\n\nclass HelloWorldPlugin {\n    initialize(registry, store) {\n        // \u8c03\u7528registry.registerObjectHomeComponent\u7b49\u5404\u79cd\u7ec4\u4ef6\u6ce8\u518c\u51fd\u6570\u6765\u91cd\u5199\u6216\u589e\u5f3aUI\u529f\u80fd\n    }\n}\n\nwindow.registerPlugin('com.steedos.xxx', new HelloWorldPlugin());\n")),Object(b.b)("h2",{id:"registry"},"Registry"),Object(b.b)("p",null,"Registry\u662f\u6bcf\u4e2a\u63d2\u4ef6\u6ce8\u518c\u540e\u7684\u5b9e\u4f8b\uff0c\u901a\u8fc7\u63d2\u4ef6\u7c7b\u7684\u201cinitialize\u201d\u56de\u8c03\u51fd\u6570\u4f20\u9012\u7ed9\u6bcf\u4e2a\u63d2\u4ef6\uff0c\u6211\u4eec\u4e3a\u6bcf\u4e2a\u5b9e\u4f8b\u63d0\u4f9b\u4e86\u5404\u79cd\u6ce8\u518c\u7ec4\u4ef6\u51fd\u6570\u6765\u91cd\u5199\u6216\u589e\u5f3a\u534e\u708e\u9b54\u65b9\u9879\u76ee\u7684UI\u754c\u9762\u3002"),Object(b.b)("h3",{id:"registerobjecthomecomponent"},"registerObjectHomeComponent"),Object(b.b)("p",null,"\u8be5\u51fd\u6570\u6ce8\u518c\u4e00\u4e2a\u7ec4\u4ef6\u663e\u793a\u4e3a\u67d0\u4e2a\u5bf9\u8c61\u7684\u9996\u9875\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const HelloWorldObjectHome = () => (\n    <Provider store={store}>\n        <Bootstrap>\n            <div>\n                Hello World!\n            </div>\n        </Bootstrap>\n    </Provider>\n);\nregistry.registerObjectHomeComponent(\n    'hello_world_object',\n    HelloWorldObjectHome\n);\n")),Object(b.b)("p",null,"\u8981\u60f3\u4ee5\u4e0a\u4ee3\u7801\u751f\u6548\uff0c\u8fd8\u9700\u8981\u5728\u9879\u76ee\u6839\u76ee\u5f55\u7684src\u6587\u4ef6\u5939\u4e0b\u914d\u7f6e\u4e00\u4e2ahello_world_object\u5bf9\u8c61\u3002"),Object(b.b)("p",null,"helloworld.object.yml:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"name: hello_world_object\nlabel: Hellow World\nicon: home\nhidden: true\nfields:\n  name:\n    label: name\n    type: text\n")),Object(b.b)("p",null,"\u4e14\u8be5\u5bf9\u8c61\u9700\u8981\u914d\u7f6e\u5230\u67d0\u4e2aapp\u7684objects\u5c5e\u6027\u4e2d\u624d\u80fd\u88ab\u770b\u5230\u3002"),Object(b.b)("p",null,"oa.app.yml:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"_id: oa\nname: \u534e\u708e\u529e\u516c\ndescription: '\u4e91\u529e\u516c\u5e73\u53f0\uff0c\u5b9e\u73b0\u5b9e\u65f6\u5728\u7ebf\u5ba1\u6279\u3002'\nicon_slds: groups\nis_creator: true\nsort: 100\nobjects: \n  - hello_world_object\n  - instances\n  - cms_posts\n  - announcements\n  - space_users\n  - tasks\n  - events\n")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u8be5\u51fd\u6570\u8fd0\u884c\u540e\u6548\u679c\u56fe\u5982\u4e0b\uff1a")),Object(b.b)("p",null,Object(b.b)("img",{alt:"Hello World Demo",src:n(587).default})),Object(b.b)("h3",{id:"registerobjectiframehomecomponent"},"registerObjectIFrameHomeComponent"),Object(b.b)("p",null,"\u8be5\u51fd\u6570\u6ce8\u518c\u4e00\u4e2aiframe\u7ec4\u4ef6\u663e\u793a\u4e3a\u67d0\u4e2a\u5bf9\u8c61\u7684\u9996\u9875\uff0c\u53ef\u4ee5\u914d\u7f6eiframe\u6307\u5411\u7684ip\u5730\u5740\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"registry.registerObjectIFrameHomeComponent(\n    'baidu',\n    \"https://www.baidu.com/\"\n);\n")),Object(b.b)("p",null,"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u597d\u5904\u662f\u5728\u4e00\u4e9b\u590d\u6742\u573a\u666f\u4e0b\u6709\u591a\u4e2a\u5bf9\u8c61\u9700\u8981\u914d\u7f6eiframe\u65f6\uff0c\u53ef\u4ee5\u628aurl\u89c4\u5219\u7edf\u4e00\u5230\u51fd\u6570\u4e2d\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"let getObjectIFrameHomeUrl = ()=>{\n    ...\n    return \"https://www.baidu.com/\";\n}\nregistry.registerObjectIFrameHomeComponent(\n    'baidu',\n    getObjectIFrameHomeUrl\n);\nregistry.registerObjectIFrameHomeComponent(\n    'zhihu',\n    getObjectIFrameHomeUrl\n);\n")),Object(b.b)("p",null,"\u8be5\u51fd\u6570\u8fd8\u652f\u6301\u4f20\u5165\u7b2c\u4e09\u4e2a\u53c2\u6570\u91cd\u5199\u6574\u4e2aiframe\u7ec4\u4ef6\u7684\u754c\u9762\uff0c\u6bd4\u5982\u5728iframe\u5916\u9762\u52a0\u5165\u4e2a\u6027\u5316\u754c\u9762\u5143\u7d20\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport store from \"../../stores/configureStore\";\nimport Bootstrap from '../bootstrap';\nimport { Provider } from 'react-redux';\nimport styled from 'styled-components';\n\nlet IFrameContainer = styled.div`\n    display: flex;\n    height: 100%;\n    width: 100%;\n`;\n\nlet IFrame = styled.iframe`\n    margin: 1rem 1rem 0 1rem;\n    flex: 1;\n    border-radius: .25rem .25rem 0 0;\n`;\n\n//props\u4e2d\u5df2\u4f20\u5165src\u5c5e\u6027\nconst CustomIFrame = ({ children, ...props }) => (\n    <Provider store={store}>\n        <Bootstrap>\n            <IFrameContainer>\n                // ...\u8fd9\u91cc\u5728iframe\u5916\u9762\u52a0\u5165\u4e2a\u6027\u5316\u5143\u7d20\n                <IFrame {...props}></IFrame>\n            </IFrameContainer>\n        </Bootstrap>\n    </Provider>\n);\n\nregistry.registerObjectIFrameHomeComponent(\n    'baidu',\n    \"https://www.baidu.com/\",\n    CustomIFrame\n);\n")),Object(b.b)("p",null,"\u8ddf",Object(b.b)("inlineCode",{parentName:"p"},"registerObjectHomeComponent"),"\u51fd\u6570\u4e00\u6837\uff0c\u8981\u60f3\u4ee5\u4e0a\u4ee3\u7801\u751f\u6548\uff0c\u8fd8\u9700\u8981\u5728\u9879\u76ee\u6839\u76ee\u5f55\u7684src\u6587\u4ef6\u5939\u4e0b\u914d\u7f6e\u4e00\u4e2aobject_iframe_demo\u5bf9\u8c61\uff0c\u4e14\u8be5\u5bf9\u8c61\u540c\u6837\u9700\u8981\u914d\u7f6e\u5230\u67d0\u4e2aapp\u7684objects\u5c5e\u6027\u4e2d\u624d\u80fd\u88ab\u770b\u5230\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u8be5\u51fd\u6570\u8fd0\u884c\u540e\u6548\u679c\u56fe\u5982\u4e0b\uff1a")),Object(b.b)("p",null,Object(b.b)("img",{alt:"Hello World Demo",src:n(1055).default})),Object(b.b)("h3",{id:"registerdashboardcomponent"},"registerDashboardComponent"),Object(b.b)("p",null,"\u8be5\u51fd\u6570\u6ce8\u518c\u4e00\u4e2a\u95e8\u6237\u7ec4\u4ef6\uff0c\u5e76\u4e14\u663e\u793a\u4e3a\u6307\u5b9aAPP\u7684\u4e3b\u9875\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const DashboardComponentDemo = () => (\n    <Provider store={store}>\n        <Bootstrap>\n            <div>\n                Web App \u63d2\u4ef6\u51fd\u6570 registerDashboardComponent\u6548\u679c\u6d4b\u8bd5!\n            </div>\n        </Bootstrap>\n    </Provider>\n);\nregistry.registerDashboardComponent(\n    ["oa", "crm", "contracts"],\n    DashboardComponentDemo\n);\n')),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4ee5\u4e0a\u4ee3\u7801\u4f1a\u628a",Object(b.b)("inlineCode",{parentName:"li"},"oa, crm, contracts"),"\u8fd9\u4e09\u4e2aAPP\u7684\u4e3b\u9875\u663e\u793a\u4e3aDashboardComponentDemo\u7ec4\u4ef6\u5b9a\u5236\u7684\u6548\u679c\u3002"),Object(b.b)("li",{parentName:"ul"},"\u9700\u8981\u6ce8\u610f\u7684\u662fAPP\u7684\u4e3b\u9875\u9664\u4e86\u53ef\u4ee5\u5728\u63d2\u4ef6\u4e2d\u8c03\u7528registerDashboardComponent\u6765\u5b9e\u73b0\u5916\uff0c\u53e6\u5916\u8fd8\u6709\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u914d\u7f6e\uff0c\u4e14\u5b83\u4eec\u7684\u4f18\u5148\u7ea7\u90fd\u66f4\u9ad8\uff0c\u4f18\u5148\u6b21\u5e8f\u4e3a\uff1a\u6570\u636e\u5e93\u4e2d\u5b9a\u4e49\u7684\u95e8\u6237\u914d\u7f6e\u3001\u9879\u76eesrc\u4e2dyml\u914d\u7f6e\u6587\u4ef6\u5b9a\u4e49\u7684\u95e8\u6237\u914d\u7f6e\u3001\u63d2\u4ef6\u4e2d\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u95e8\u6237\u914d\u7f6e\u3002")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u8be5\u51fd\u6570\u8fd0\u884c\u540e\u6548\u679c\u56fe\u5982\u4e0b\uff1a")),Object(b.b)("p",null,Object(b.b)("img",{alt:"Hello World Demo",src:n(1056).default})),Object(b.b)("h3",{id:"registerdashboardiframecomponent"},"registerDashboardIFrameComponent"),Object(b.b)("p",null,"\u8be5\u51fd\u6570\u6ce8\u518c\u4e00\u4e2aiframe\u7ec4\u4ef6\u663e\u793a\u4e3a\u67d0\u4e9bApp\u7684\u4e3b\u9875\uff0c\u53ef\u4ee5\u914d\u7f6eiframe\u6307\u5411\u7684ip\u5730\u5740\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'registry.registerDashboardIFrameComponent(\n    ["contracts"],\n    "https://www.baidu.com/"\n);\n')),Object(b.b)("p",null,"\u4e0e",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/plugins/plugin_webapp_functions#registerObjectIFrameHomeComponent"}),"registerObjectIFrameHomeComponent\u51fd\u6570"),"\u4e00\u6837\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4e5f\u652f\u6301\u4f20\u5165\u7b2c\u4e09\u4e2a\u53c2\u6570\u91cd\u5199\u6574\u4e2aiframe\u7ec4\u4ef6\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u8be5\u51fd\u6570\u8fd0\u884c\u540e\u6548\u679c\u56fe\u5982\u4e0b\uff1a")),Object(b.b)("p",null,Object(b.b)("img",{alt:"Hello World Demo",src:n(1057).default})),Object(b.b)("h2",{id:"\u5bfc\u51fa"},"\u5bfc\u51fa"),Object(b.b)("p",null,"\u6211\u4eec\u5728",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/Web/API/Window"}),"window"),"\u5bf9\u8c61\u4e0a\u5bfc\u51fa\u4e86\u8bb8\u591a\u5e93\u548c\u51fd\u6570\uff0c\u4f9b\u63d2\u4ef6\u4f7f\u7528\u3002\u4e3a\u4e86\u907f\u514d\u63d2\u4ef6\u81a8\u80c0\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/externals/"}),"Webpack externals"),"\u3002\u4ee5\u4e0b\u662f\u516c\u5f00\u7684\u5e93\u548c\u51fd\u6570\u5217\u8868:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Library"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Exported Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"react"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.React"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://reactjs.org/"}),"ReactJS"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"react-dom"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.ReactDOM"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://reactjs.org/react-dom.html"}),"ReactDOM"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"redux"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.Redux"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://redux.js.org/"}),"Redux"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"react-redux"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.ReactRedux"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/reactjs/react-redux"}),"React bindings for Redux"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"prop-types"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.PropTypes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/prop-types"}),"PropTypes"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"styled-components"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.StyledComponents"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/styled-components"}),"StyledComponents"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"redux-thunk"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.ReduxThunk"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/redux-thunk"}),"ReduxThunk"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"immer"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.Immer"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/immer"}),"Immer"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ts-odata-client"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.TSODataClient"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/ts-odata-client"}),"TSODataClient"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"node-fetch"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.NodeFetch"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/node-fetch"}),"NodeFetch"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@steedos/react"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.ReactSteedos"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Steedos react components and utility functions ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@steedos/react"}),"ReactSteedos"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@salesforce/design-system-react"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.ReactDesignSystem"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Salesforce react components and utility functions ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/design-system-react"}),"ReactDesignSystem"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@steedos/filters"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.SteedosFilters"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Steedos filters and utility functions ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@steedos/filters"}),"SteedosFilters"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"registerPlugin"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.registerPlugin"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/plugins/plugin_webapp_functions#registerplugin"}),"window.registerPlugin"))))))}i.isMDXComponent=!0},495:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=i(n),d=r,j=s["".concat(c,".").concat(d)]||s[d]||m[d]||b;return n?a.a.createElement(j,o({ref:t},p,{components:n})):a.a.createElement(j,o({ref:t},p))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<b;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},587:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/hello_world-2e5125d100489811440920d4f5424cff.png"}}]);