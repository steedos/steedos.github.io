(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{295:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(1),a=t(6),l=(t(0),t(335)),o={title:"\u914d\u7f6e\u4e1a\u52a1\u5bf9\u8c61"},i={id:"developer/guide_object",title:"\u914d\u7f6e\u4e1a\u52a1\u5bf9\u8c61",description:"\u6a21\u677f\u9879\u76ee\u5185\u7f6e\u4e86\u51e0\u4e2a [\u4e1a\u52a1\u5bf9\u8c61](object.md) \u63cf\u8ff0\u6587\u4ef6\uff0c\u4ee5 .object.yml \u7ed3\u5c3e\u3002\r",source:"@site/../docs/developer/guide_object.md",permalink:"/docs/developer/guide_object",editUrl:"https://github.com/steedos/steedos-website/edit/master/website/../docs/developer/guide_object.md",sidebar:"\u5f00\u53d1",previous:{title:"\u521b\u5efa\u9879\u76ee",permalink:"/docs/developer/guide_create"},next:{title:"\u914d\u7f6e\u5e94\u7528",permalink:"/docs/developer/guide_app"}},c=[{value:"accounts.object.yml",id:"accountsobjectyml",children:[]}],s={rightToc:c},u="wrapper";function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(u,Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u6a21\u677f\u9879\u76ee\u5185\u7f6e\u4e86\u51e0\u4e2a ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/object"}),"\u4e1a\u52a1\u5bf9\u8c61")," \u63cf\u8ff0\u6587\u4ef6\uff0c\u4ee5 .object.yml \u7ed3\u5c3e\u3002"),Object(l.b)("p",null,"Steedos \u7684\u795e\u5947\u4e4b\u5904\u6b63\u5728\u4e8e\u6b64\uff0c\u4f60\u53ea\u9700\u8981\u4fee\u6539\u4e1a\u52a1\u5bf9\u8c61\u914d\u7f6e\u6587\u4ef6\u5e76\u91cd\u65b0\u542f\u52a8\u670d\u52a1\uff0c\u6574\u4e2a\u7cfb\u7edf\u7684\u529f\u80fd\u90fd\u4f1a\u81ea\u52a8\u968f\u4e4b\u53d8\u5316\u3002"),Object(l.b)("p",null,"\u5982\u679c\u4f60\u4e0d\u9700\u8981\u76f8\u5173\u7684\u4e1a\u52a1\u5bf9\u8c61\uff0c\u76f4\u63a5\u5220\u9664\u5373\u53ef\u3002"),Object(l.b)("h2",{id:"accountsobjectyml"},"accounts.object.yml"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"name: accounts\nlabel: \u5355\u4f4d\nicon: account\nenable_files: true\nenable_search: true\nenable_tasks: true\nenable_notes: false\nenable_api: true\nenable_share: true\nenable_chatter: true\nfields:\n  name:\n    label: \u540d\u79f0\n    type: text\n    defaultValue: ''\n    description: ''\n    inlineHelpText: ''\n    searchable: true\n    required: true\n    sortable: true\n  credit_code:\n    type: text\n    label: \u7edf\u4e00\u793e\u4f1a\u4fe1\u7528\u4ee3\u7801\n    inlineHelpText: '\u7cfb\u7edf\u6309\u7167\u6b64\u5b57\u6bb5\u6821\u9a8c\u91cd\u590d\uff0c\u907f\u514d\u91cd\u590d\u5f55\u5165\u5355\u4f4d\u4fe1\u606f\u3002'\n    required: true\n  owner:\n    label: \u8d23\u4efb\u4eba\n    omit: false\n    readonly: false\n    hidden: false\n    type: lookup\n    reference_to: users\n  priority:\n    label: \u4f18\u5148\u7ea7\n    type: select\n    sortable: true\n    options:\n      - label: \u9ad8\n        value: high\n      - label: \u4e2d\n        value: normal\n      - label: \u4f4e\n        value: low\n    filterable: true\n  registered_capital:\n    type: currency\n    label: \u6ce8\u518c\u8d44\u91d1\n    scale: 2\n  website:\n    type: url\n    label: \u7f51\u5740\n  phone:\n    type: text\n    label: \u7535\u8bdd\n    defaultValue: ''\n  email:\n    type: text\n    label: \u90ae\u7bb1\n  description:\n    label: \u5907\u6ce8\n    type: textarea\n    is_wide: true\n    name: description\nlist_views:\n  all:\n    label: \u6240\u6709\u5355\u4f4d\n    columns:\n      - name\n      - priority\n      - owner\n      - modified\n    filter_scope: space\n  recent:\n    label: \u6700\u8fd1\u67e5\u770b\n    columns:\n      - name\n      - priority\n      - owner\n      - modified\n    filter_scope: space\n  mine:\n    label: \u6211\u7684\u5355\u4f4d\n    columns:\n      - name\n      - priority\n      - owner\n      - modified\n    filter_scope: mine\npermission_set:\n  user:\n    allowCreate: false\n    allowDelete: false\n    allowEdit: false\n    allowRead: true\n    modifyAllRecords: false\n    viewAllRecords: false\n  admin:\n    allowCreate: true\n    allowDelete: true\n    allowEdit: true\n    allowRead: true\n    modifyAllRecords: true\n    viewAllRecords: true\n")))}p.isMDXComponent=!0},335:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r),l=a.a.createContext({}),o=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=o(e.components);return a.a.createElement(l.Provider,{value:n},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),u=o(t),p=r,d=u[i+"."+p]||u[p]||s[p]||l;return t?a.a.createElement(d,Object.assign({},{ref:n},c,{components:t})):a.a.createElement(d,Object.assign({},{ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);