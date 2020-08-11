(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{349:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return p})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return b}));var r=o(1),n=o(6),c=(o(0),o(375)),a={title:"Docker \u90e8\u7f72"},p={id:"developer/deploy_docker",title:"Docker \u90e8\u7f72",description:"\u672c\u6559\u7a0b\u4ee5 [steedos-project-oa](https://github.com/steedos/steedos-project-oa)\u4e3a\u4f8b\uff0c\u6307\u5bfc\u4f60\u4f7f\u7528 [docker-compose](https://docs.docker.com/compose/install/) \u542f\u52a8\u9879\u76ee\u3002\r",source:"@site/../docs/developer/deploy_docker.md",permalink:"/developer/deploy_docker"},l=[{value:"\u4f7f\u7528 Docker Compose \u542f\u52a8\u670d\u52a1",id:"\u4f7f\u7528-docker-compose-\u542f\u52a8\u670d\u52a1",children:[]},{value:"docker-compose.yml \u6587\u4ef6\u89e3\u8bfb",id:"docker-composeyml-\u6587\u4ef6\u89e3\u8bfb",children:[]}],s={rightToc:l};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u672c\u6559\u7a0b\u4ee5 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/steedos/steedos-project-oa"}),"steedos-project-oa"),"\u4e3a\u4f8b\uff0c\u6307\u5bfc\u4f60\u4f7f\u7528 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"docker-compose")," \u542f\u52a8\u9879\u76ee\u3002"),Object(c.b)("h2",{id:"\u4f7f\u7528-docker-compose-\u542f\u52a8\u670d\u52a1"},"\u4f7f\u7528 Docker Compose \u542f\u52a8\u670d\u52a1"),Object(c.b)("p",null,"\u786e\u4fdd\u672c\u5730\u5df2\u5b89\u88c5",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/get-docker/"}),"docker"),"\u548c",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"docker-compose")),Object(c.b)("p",null,"\u4e0b\u8f7d\u793a\u4f8b\u6587\u4ef6",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/steedos/steedos-project-oa/blob/master/docker-compose.yml"}),"docker-compose.yml"),"(\u552f\u4e00\u9700\u8981\u7684\u6587\u4ef6)\u5230\u672c\u5730\u5e76\u7f16\u8f91:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7f16\u8f91 environment \u4e2d\u7684 ROOT_URL \u4ee5\u5339\u914d\u60a8\u7684\u57df\u540d\u6216 IP \u5730\u5740")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u914d\u7f6e environment \u7684\u76ee\u7684\u662f\u670d\u52a1\u4e8e",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.steedos.com/developer/steedos_config"}),"steedos-config.yml"))),Object(c.b)("p",null,"\u5230\u521a\u4e0b\u8f7d\u7684",Object(c.b)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u6587\u4ef6\u6240\u5728\u76ee\u5f55\u542f\u52a8\u670d\u52a1\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up -d\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8fd9\u5c06\u4f1a\u542f\u52a8\u4e00\u4e2a mongodb \u6570\u636e\u5e93\u670d\u52a1\u548c\u4e00\u4e2a node \u5e94\u7528\u670d\u52a1\uff0c\u542f\u52a8\u597d\u4e4b\u540e\u53ef\u4f7f\u7528\u914d\u7f6e\u7684 ROOT_URL \u5730\u5740\u8bbf\u95ee\u670d\u52a1")),Object(c.b)("p",null,"\u505c\u6b62\u670d\u52a1\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose stop\n")),Object(c.b)("h2",{id:"docker-composeyml-\u6587\u4ef6\u89e3\u8bfb"},"docker-compose.yml \u6587\u4ef6\u89e3\u8bfb"),Object(c.b)("p",null,"\u7cfb\u7edf\u4e2d\u4e0a\u4f20\u7684\u9644\u4ef6\u3001\u5934\u50cf\u7b49\u6587\u4ef6\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"./docker-volumes/steedos/storage")," \u4e0b\uff0c\u6570\u636e\u5e93\u6587\u4ef6\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"./docker-volumes/mongo/data/db")," \u4e0b\uff0c\u8fd9\u6837\u670d\u52a1\u505c\u6b62\u540e\u518d\u6b21\u542f\u52a8\u6570\u636e\u4e0d\u4f1a\u4e22\u5931"),Object(c.b)("p",null,"environment \u4e2d\u7684\u73af\u5883\u53d8\u91cf\u53ef\u6839\u636e\u9700\u8981\u53c2\u8003",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.steedos.com/developer/steedos_config"}),"steedos-config.yml"),"\u914d\u7f6e\u8c03\u6574"))}b.isMDXComponent=!0},375:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return u}));var r=o(0),n=o.n(r);function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):p({},t,{},e)),o},d=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var o=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(o),m=r,u=d["".concat(a,".").concat(m)]||d[m]||i[m]||c;return o?n.a.createElement(u,p({ref:t},s,{components:o})):n.a.createElement(u,p({ref:t},s))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=o.length,a=new Array(c);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<c;s++)a[s]=o[s];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);