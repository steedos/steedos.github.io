(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{238:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return d}));var a=t(1),l=t(9),r=(t(0),t(371)),c={title:"\u4e1a\u52a1\u5bf9\u8c61\u5173\u8054"},o={id:"developer/guide_relationship",title:"\u4e1a\u52a1\u5bf9\u8c61\u5173\u8054",description:"## \u521b\u5efa\u4e1a\u52a1\u5bf9\u8c61\uff1a\u5408\u540c",source:"@site/../docs/developer/guide_relationship.md",permalink:"/docs/developer/guide_relationship",sidebar:"\u5f00\u53d1\u5e73\u53f0",previous:{title:"\u914d\u7f6e\u4e1a\u52a1\u5bf9\u8c61",permalink:"/docs/developer/guide_object"},next:{title:"\u89e6\u53d1\u5668",permalink:"/docs/developer/guide_trigger"}},u=[{value:"\u521b\u5efa\u4e1a\u52a1\u5bf9\u8c61\uff1a\u5408\u540c",id:"\u521b\u5efa\u4e1a\u52a1\u5bf9\u8c61\uff1a\u5408\u540c",children:[]},{value:"\u6dfb\u52a0\u5b57\u6bb5",id:"\u6dfb\u52a0\u5b57\u6bb5",children:[]},{value:"\u914d\u7f6e\u89c6\u56fe\uff1a\u6211\u7684\u5408\u540c\u3001\u6240\u6709\u5408\u540c",id:"\u914d\u7f6e\u89c6\u56fe\uff1a\u6211\u7684\u5408\u540c\u3001\u6240\u6709\u5408\u540c",children:[]},{value:"\u5b9a\u4e49\u6743\u9650",id:"\u5b9a\u4e49\u6743\u9650",children:[]},{value:"\u4fee\u6539\u9ed8\u8ba4\u5e94\u7528\uff1a\u53bb\u6389\u4e1a\u52a1\u4f19\u4f34",id:"\u4fee\u6539\u9ed8\u8ba4\u5e94\u7528\uff1a\u53bb\u6389\u4e1a\u52a1\u4f19\u4f34",children:[]},{value:"\u65b0\u5efa\u81ea\u5b9a\u4e49\u5e94\u7528\uff1a\u5408\u540c",id:"\u65b0\u5efa\u81ea\u5b9a\u4e49\u5e94\u7528\uff1a\u5408\u540c",children:[]},{value:"\u91cd\u542f\u670d\u52a1\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c",id:"\u91cd\u542f\u670d\u52a1\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c",children:[]}],s={rightToc:u},i="wrapper";function d(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)(i,Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u521b\u5efa\u4e1a\u52a1\u5bf9\u8c61\uff1a\u5408\u540c"},"\u521b\u5efa\u4e1a\u52a1\u5bf9\u8c61\uff1a\u5408\u540c"),Object(r.b)("p",null,"\u5728src\u9879\u76ee\u6e90\u7801\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3acontracts.object.yml\u6587\u4ef6\uff0c\u5f00\u5934\u914d\u7f6e\u4ee5\u4e0b\u5185\u5bb9\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"name: contracts\nlabel: \u5408\u540c\nicon: contract\n")),Object(r.b)("h2",{id:"\u6dfb\u52a0\u5b57\u6bb5"},"\u6dfb\u52a0\u5b57\u6bb5"),Object(r.b)("p",null,"\u5728contracts.object.yml\u4e2d\uff0c\u7ee7\u7eed\u914d\u7f6e\u6b64\u5bf9\u8c61\u5305\u542b\u7684\u5b57\u6bb5:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'fields:\n  name:\n    label: \u5408\u540c\u540d\u79f0\n    type: text\n    required: true\n    searchable: true\n    index: true\n    is_wide: true\n  "no":\n    type: autonumber\n    formula: "{YYYY}-{000} "\n    label: \u5408\u540c\u7f16\u53f7\n    sortable: true\n    filterable: true\n    omit: true\n    readonly: true\n  othercompany:\n    type: lookup\n    relatedList: true\n    label: \u4e1a\u52a1\u4f19\u4f34\n    searchable: true\n    reference_to: accounts\n    required: true\n  contract_type:\n    type: select\n    label: \u5206\u7c7b\n    required: true\n    options:\n      - label: \u4ea7\u54c1\u9500\u552e\n        value: \u4ea7\u54c1\u9500\u552e\n      - label: \u5f00\u53d1\u670d\u52a1\n        value: \u5f00\u53d1\u670d\u52a1\n      - label: \u9879\u76ee\u91c7\u8d2d\n        value: \u9879\u76ee\u91c7\u8d2d\n      - label: \u5176\u4ed6\u91c7\u8d2d\n        value: \u5176\u4ed6\u91c7\u8d2d\n  create_date:\n    label: \u767b\u8bb0\u65e5\u671f\n    type: date\n    sortable: true\n    filterable: true\n    defaultValue: "{now}"\n  bop:\n    type: select\n    label: \u6536\u652f\u7c7b\u522b\n    options:\n      - label: \u4ed8\u6b3e\u5408\u540c\n        value: \u4ed8\u6b3e\u5408\u540c\n      - label: \u6536\u6b3e\u5408\u540c\n        value: \u6536\u6b3e\u5408\u540c\n    allowedValues:\n      - \u4ed8\u6b3e\u5408\u540c\n      - \u6536\u6b3e\u5408\u540c\n    required: true\n    defaultValue: \u6536\u6b3e\u5408\u540c\n  subject:\n    type: textarea\n    label: \u5408\u540c\u4e3b\u8981\u5185\u5bb9\n    is_wide: true\n  amount:\n    label: \u5408\u540c\u91d1\u989d\n    type: number\n    scale: 2\n    required: true\n    sortable: true\n  signed_date:\n    label: \u7b7e\u8ba2\u65e5\u671f\n    type: date\n    sortable: true\n    filterable: true\n  start_date:\n    label: \u5f00\u59cb\u65e5\u671f\n    type: date\n    sortable: true\n    filterable: true\n  end_date:\n    label: \u7ed3\u675f\u65e5\u671f\n    type: date\n    sortable: true\n    filterable: true\n  remark:\n    label: \u5907\u6ce8\n    type: textarea\n    is_wide: true\n  contract_state:\n    type: select\n    label: \u5408\u540c\u72b6\u6001\n    searchable: true\n    options:\n      - label: \u5ba1\u6279\u4e2d\n        value: pending\n      - label: \u5df2\u6838\u51c6\n        value: approved\n      - label: \u5df2\u9a73\u56de\n        value: rejected\n      - label: \u5df2\u53d6\u6d88\n        value: terminated\n      - label: \u5df2\u7b7e\u8ba2\n        value: signed\n      - label: \u5df2\u5f52\u6863\n        value: archived\n      - label: \u5df2\u4f5c\u5e9f\n        value: droped\n      - label: \u5df2\u5b8c\u6210\n        value: completed\n  contract_fulfillment_state:\n    type: select\n    label: \u5408\u540c\u5c65\u884c\u72b6\u6001\n    searchable: true\n    options:\n      - label: \u5c65\u884c\u4e2d\n        value: \u5c65\u884c\u4e2d\n      - label: \u5c65\u884c\u5b8c\n        value: \u5c65\u884c\u5b8c\n      - label: \u5df2\u53d6\u6d88\n        value: \u5df2\u53d6\u6d88\n  paid_amount:\n    label: \u5df2\u652f\u4ed8\u603b\u91d1\u989d\n    type: number\n    scale: 2\n    sortable: true\n    defaultValue: 0\n  unpaid_amount:\n    label: \u672a\u652f\u4ed8\u4ed8\u6b3e\u603b\u91d1\u989d\n    type: number\n    scale: 2\n    sortable: true\n    defaultValue: 0\n  received_amount:\n    label: \u5df2\u6536\u6b3e\u603b\u91d1\u989d\n    type: number\n    scale: 2\n    sortable: true\n    defaultValue: 0\n  unreceived_amount:\n    label: \u672a\u6536\u6b3e\u603b\u91d1\u989d\n    type: number\n    scale: 2\n    sortable: true\n    defaultValue: 0\n')),Object(r.b)("h2",{id:"\u914d\u7f6e\u89c6\u56fe\uff1a\u6211\u7684\u5408\u540c\u3001\u6240\u6709\u5408\u540c"},"\u914d\u7f6e\u89c6\u56fe\uff1a\u6211\u7684\u5408\u540c\u3001\u6240\u6709\u5408\u540c"),Object(r.b)("p",null,"\u5728contracts.object.yml\u4e2d\uff0c\u7ee7\u7eed\u914d\u7f6e\u6b64\u5bf9\u8c61\u76842\u4e2a\u89c6\u56fe:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"list_views:\n  all:\n    label: \u6240\u6709\u5408\u540c\n    columns:\n      - field: create_date\n        width: 120\n        wrap: true\n      - field: name\n        width: 280\n        wrap: true\n      - field: othercompany\n        width: 200\n      - field: amount\n        width: 120\n      - field: contract_type\n        width: 120\n      - field: bop\n        width: 120\n      - field: start_date\n        width: 120\n      - field: end_date\n        width: 120\n      - field: owner\n        width: 120\n    filter_scope: space\n    filter_fields:\n      - contract_type\n      - signed_date\n      - othercompany\n      - contract_state\n    sort:\n      - - create_date\n        - desc\n  mine:\n    label: \u6211\u7684\u5408\u540c\n    filter_scope: mine\n    filter_fields:\n      - contract_type\n      - signed_date\n      - othercompany\n      - contract_state\n    sort:\n      - - create_date\n        - desc\n")),Object(r.b)("h2",{id:"\u5b9a\u4e49\u6743\u9650"},"\u5b9a\u4e49\u6743\u9650"),Object(r.b)("p",null,"\u5728contracts.object.yml\u4e2d\uff0c\u7ee7\u7eed\u914d\u7f6e\u6b64\u5bf9\u8c61\u7684\u6743\u9650\u96c6:\u666e\u901a\u7528\u6237\u53ea\u80fd\u67e5\u770b\u81ea\u5df1\u7684\u5408\u540c\uff0c\u5408\u540c\u7ba1\u7406\u5458\u548c\u7cfb\u7edf\u7ba1\u7406\u5458\u53ef\u4ee5\u67e5\u770b\u6240\u6709\u7684\u5408\u540c"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"\npermission_set:\n  user:\n    allowCreate: true\n    allowDelete: true\n    allowEdit: true\n    allowRead: true\n    modifyAllRecords: false\n    viewAllRecords: false \n  contract_manager:\n    allowCreate: true\n    allowEdit: true\n    allowDelete: true\n    allowRead: true\n    modifyAllRecords: true\n    viewAllRecords: true\n  admin:\n    allowCreate: true\n    allowDelete: true\n    allowEdit: true\n    allowRead: true\n    modifyAllRecords: true\n    viewAllRecords: true\n")),Object(r.b)("h2",{id:"\u4fee\u6539\u9ed8\u8ba4\u5e94\u7528\uff1a\u53bb\u6389\u4e1a\u52a1\u4f19\u4f34"},"\u4fee\u6539\u9ed8\u8ba4\u5e94\u7528\uff1a\u53bb\u6389\u4e1a\u52a1\u4f19\u4f34"),Object(r.b)("p",null,"\u4fee\u6539src\u4e0b\u7684oa.app.yml\uff08\u5373\u534e\u708e\u529e\u516c\uff09,\u5220\u9664\uff1a\u4e1a\u52a1\u4f19\u4f34 accounts"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sort: 100\nobjects: \n  - instances\n  - cms_posts\n  - announcements\n  - space_users\n  - tasks\n  - events\nmobile_objects: \n  - instances\n  - cms_posts\n  - announcements\n  - space_users\n  - tasks\n  - events\n")),Object(r.b)("h2",{id:"\u65b0\u5efa\u81ea\u5b9a\u4e49\u5e94\u7528\uff1a\u5408\u540c"},"\u65b0\u5efa\u81ea\u5b9a\u4e49\u5e94\u7528\uff1a\u5408\u540c"),Object(r.b)("p",null,"src\u4e0b\uff0c\u589e\u52a0\u6587\u4ef6contract.app.yml,\u589e\u52a0\uff1a\u4e1a\u52a1\u4f19\u4f34 accounts\u3001\u5408\u540c contracts"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"_id: contracts\nname: \u5408\u540c\ndescription: \u5408\u540c\u3001\u4e1a\u52a1\u4f19\u4f34\u3002\nicon_slds: approval\nis_creator: true\nsort: 200\nobjects: \n  - contracts\n  - accounts\nmobile_objects:\n  - contracts\n  - accounts\n")),Object(r.b)("h2",{id:"\u91cd\u542f\u670d\u52a1\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c"},"\u91cd\u542f\u670d\u52a1\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/guide_4.png",alt:"\u5408\u540c\u5e94\u7528"}))))}d.isMDXComponent=!0},371:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return d}));var a=t(0),l=t.n(a),r=l.a.createContext({}),c=function(e){var n=l.a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},o=function(e){var n=c(e.components);return l.a.createElement(r.Provider,{value:n},e.children)};var u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},i=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),i=c(t),d=a,b=i[o+"."+d]||i[d]||s[d]||r;return t?l.a.createElement(b,Object.assign({},{ref:n},u,{components:t})):l.a.createElement(b,Object.assign({},{ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=i;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,c[1]=o;for(var d=2;d<r;d++)c[d]=t[d];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,t)}i.displayName="MDXCreateElement"}}]);