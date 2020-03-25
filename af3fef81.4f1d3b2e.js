(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{307:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return s}));var a=t(1),r=t(9),c=(t(0),t(397)),l={title:"Web App \u63d2\u4ef6"},p={id:"plugins/plugin_webapp",title:"Web App \u63d2\u4ef6",description:"\u6b64\u6559\u7a0b\u5c06\u5f15\u5bfc\u60a8\u521b\u5efa\u4e00\u4e2a\u57fa\u672c\u7684Steedos Web\u63d2\u4ef6\u3002\r",source:"@site/../docs/plugins/plugin_webapp.md",permalink:"/plugins/plugin_webapp",sidebar:"\u5f00\u53d1\u5e73\u53f0",previous:{title:"\u670d\u52a1\u7aef\u63d2\u4ef6",permalink:"/plugins/plugin_server"},next:{title:"\u63d2\u4ef6\u914d\u7f6e",permalink:"/plugins/plugin_config"}},o=[{value:"\u521b\u5efa\u63d2\u4ef6",id:"\u521b\u5efa\u63d2\u4ef6",children:[]},{value:"\u521d\u59cb\u5316\u63d2\u4ef6",id:"\u521d\u59cb\u5316\u63d2\u4ef6",children:[]},{value:"\u5b89\u88c5\u4f9d\u8d56\u5305",id:"\u5b89\u88c5\u4f9d\u8d56\u5305",children:[]},{value:"\u914d\u7f6e webpack",id:"\u914d\u7f6e-webpack",children:[]},{value:"\u521b\u5efa\u5165\u53e3\u6587\u4ef6",id:"\u521b\u5efa\u5165\u53e3\u6587\u4ef6",children:[]},{value:"\u6253\u5305 Webapp",id:"\u6253\u5305-webapp",children:[]},{value:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6",id:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"\u63d2\u4ef6\u6d4b\u8bd5",id:"\u63d2\u4ef6\u6d4b\u8bd5",children:[]}],i={rightToc:o},b="wrapper";function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)(b,Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u6b64\u6559\u7a0b\u5c06\u5f15\u5bfc\u60a8\u521b\u5efa\u4e00\u4e2a\u57fa\u672c\u7684Steedos Web\u63d2\u4ef6\u3002"),Object(c.b)("h2",{id:"\u521b\u5efa\u63d2\u4ef6"},"\u521b\u5efa\u63d2\u4ef6"),Object(c.b)("p",null,"\u521b\u5efa\u5e76\u8df3\u8f6c\u5230webapp\u6587\u4ef6\u5939\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mkdir webapp\ncd webapp\n")),Object(c.b)("h2",{id:"\u521d\u59cb\u5316\u63d2\u4ef6"},"\u521d\u59cb\u5316\u63d2\u4ef6"),Object(c.b)("p",null,"\u521b\u5efa\u4e00\u4e2a package.json \u6587\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"yarn init\n")),Object(c.b)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56\u5305"},"\u5b89\u88c5\u4f9d\u8d56\u5305"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add --dev  @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli\nyarn add react\n")),Object(c.b)("h2",{id:"\u914d\u7f6e-webpack"},"\u914d\u7f6e webpack"),Object(c.b)("p",null,"\u521b\u5efa\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"/webpack.config.js"),"\u6587\u4ef6\uff0c\u914d\u7f6ewebpack"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var path = require('path');\n\nmodule.exports = {\n    entry: [\n        './src/index.jsx',\n    ],\n    resolve: {\n        modules: [\n            'src',\n            'node_modules',\n        ],\n        extensions: ['*', '.js', '.jsx'],\n    },\n    module: {\n        rules: [\n            {\n                test: /\\.(js|jsx)$/,\n                exclude: /node_modules/,\n                use: {\n                    loader: 'babel-loader',\n                    options: {\n                        presets: ['@babel/preset-react',\n                            [\n                                \"@babel/preset-env\",\n                                {\n                                    \"modules\": \"commonjs\",\n                                    \"targets\": {\n                                        \"node\": \"current\"\n                                    }\n                                }\n                            ]\n                        ],\n                    },\n                },\n            },\n        ],\n    },\n    externals: {\n        react: 'React',\n    },\n    output: {\n        path: path.join(__dirname, '/dist'),\n        publicPath: '/',\n        filename: 'main.js',\n    },\n};\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6ce8\u610f ",Object(c.b)("inlineCode",{parentName:"p"},"react")," \u88ab\u6307\u5b9a\u4e3a\u5916\u90e8\u5305. \u8fd9\u6837\u4f60\u53ef\u4ee5\u5728\u672c\u5730\u6d4b\u8bd5\u4ee3\u7801 (e.g. with ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://jestjs.io/"}),"jest")," and snapshots) \uff0c\u4f46\u662f\u5fc5\u4e0d\u4f1a\u5f71\u54cd\u5230 Steedos \u6253\u5305\u7684react\u7248\u672c\u3002")),Object(c.b)("h2",{id:"\u521b\u5efa\u5165\u53e3\u6587\u4ef6"},"\u521b\u5efa\u5165\u53e3\u6587\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mkdir webapp\ntouch webapp/index.jsx\n")),Object(c.b)("p",null,"\u7f16\u8f91 ",Object(c.b)("inlineCode",{parentName:"p"},"src/index.jsx"),"\uff0c\u5199\u5165\u4ee5\u4e0b\u5185\u5bb9:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\n\n// Courtesy of https://feathericons.com/\nconst Icon = () => <i className='icon fa fa-plug'/>;\n\nclass HelloWorldPlugin {\n    initialize(registry, store) {\n        registry.registerChannelHeaderButtonAction(\n            // icon - JSX element to use as the button's icon\n            <Icon />,\n            // action - a function called when the button is clicked, passed the channel and channel member as arguments\n            // null,\n            () => {\n                alert(\"Hello World!\");\n            },\n            // dropdown_text - string or JSX element shown for the dropdown button description\n            \"Hello World\",\n        );\n    }\n}\n\nwindow.registerPlugin('com.steedos.plugin-hello-world', new HelloWorldPlugin());\n")),Object(c.b)("h2",{id:"\u6253\u5305-webapp"},"\u6253\u5305 Webapp"),Object(c.b)("p",null,"\u751f\u6210\u6253\u5305\u6587\u4ef6\uff0c\u4ee5\u4fbf\u5b89\u88c5\u5230\u9879\u76ee\u4e2d\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn webpack --mode=production\n")),Object(c.b)("h2",{id:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6"},"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6"),Object(c.b)("p",null,"\u521b\u5efa\u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6 plugin.config.yml"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"webapp:\n  main: webapp/dist/main.js\n")),Object(c.b)("h2",{id:"\u63d2\u4ef6\u6d4b\u8bd5"},"\u63d2\u4ef6\u6d4b\u8bd5"),Object(c.b)("p",null,"\u91cd\u65b0\u542f\u52a8 Steedos\u670d\u52a1\uff0c\u6d4b\u8bd5\u63d2\u4ef6\u6548\u679c\u3002"))}s.isMDXComponent=!0},397:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return s}));var a=t(0),r=t.n(a),c=r.a.createContext({}),l=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},p=function(e){var n=l(e.components);return r.a.createElement(c.Provider,{value:n},e.children)};var o="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,o=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),b=l(t),s=a,u=b[p+"."+s]||b[s]||i[s]||c;return t?r.a.createElement(u,Object.assign({},{ref:n},o,{components:t})):r.a.createElement(u,Object.assign({},{ref:n},o))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=b;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[o]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<c;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);