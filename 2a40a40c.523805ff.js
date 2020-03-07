(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{145:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return l})),a.d(n,"metadata",(function(){return i})),a.d(n,"rightToc",(function(){return o})),a.d(n,"default",(function(){return b}));var t=a(1),r=a(6),c=(a(0),a(341)),l={title:"\u8eab\u4efd\u9a8c\u8bc1"},i={id:"api/odata_auth",title:"\u8eab\u4efd\u9a8c\u8bc1",description:"\u6709\u591a\u79cd\u65b9\u5f0f\u53ef\u4ee5\u548c Steedos API \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\r",source:"@site/../docs/api/odata_auth.md",permalink:"/docs/api/odata_auth",sidebar:"API",previous:{title:"OData \u7b80\u4ecb",permalink:"/docs/api/odata"},next:{title:"\u67e5\u8be2",permalink:"/docs/api/odata_query"}},o=[{value:"\u83b7\u53d6 Token",id:"\u83b7\u53d6-token",children:[{value:"URL",id:"url",children:[]},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",children:[]},{value:"Body \u8fd4\u56de\u7ed3\u679c",id:"body-\u8fd4\u56de\u7ed3\u679c",children:[]},{value:"Header \u8fd4\u56de\u7ed3\u679c",id:"header-\u8fd4\u56de\u7ed3\u679c",children:[]},{value:"Cookie \u8fd4\u56de\u7ed3\u679c",id:"cookie-\u8fd4\u56de\u7ed3\u679c",children:[]}]},{value:"\u9a8c\u8bc1\u767b\u5f55\u72b6\u6001",id:"\u9a8c\u8bc1\u767b\u5f55\u72b6\u6001",children:[{value:"URL",id:"url-1",children:[]},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-1",children:[]},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",children:[]}]},{value:"\u6ce8\u9500",id:"\u6ce8\u9500",children:[{value:"URL",id:"url-2",children:[]},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-2",children:[]},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-1",children:[]}]}],d={rightToc:o},p="wrapper";function b(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(p,Object(t.a)({},d,a,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u6709\u591a\u79cd\u65b9\u5f0f\u53ef\u4ee5\u548c Steedos API \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002"),Object(c.b)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u9700\u786e\u8ba4 Steedos\u670d\u52a1 \u8fd0\u884c\u4e8e ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"http://localhost:5000"}),"http://localhost:5000")," \u3002"),Object(c.b)("h2",{id:"\u83b7\u53d6-token"},"\u83b7\u53d6 Token"),Object(c.b)("p",null,"\u8c03\u7528\u7528\u6237\u767b\u5f55\u63a5\u53e3\uff0c\u83b7\u53d6\u7528\u6237\u767b\u5f55Token"),Object(c.b)("h3",{id:"url"},"URL"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"POST 'http://localhost:5000/api/v4/users/login' \n")),Object(c.b)("h3",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),Object(c.b)("p",null,"\u4ee5JSON\u683c\u5f0f\u4f20\u5165\u8bf7\u6c42\u53c2\u6570\u3002\n|Param      |Required  |Type   |Description               |\n|:--------  |:-------  |:----- |-----                     |\n|username   |true      |string |\u53ef\u4f20\u5165\u7528\u6237\u540d\u3001\u90ae\u7bb1\u6216\u624b\u673a\u53f7\u3002   |\n|password   |true      |string |\u7528\u6237\u5bc6\u7801\u3002                  |\n|spaceId    |false     |string |\u9700\u8981\u767b\u5f55\u7684\u5de5\u4f5c\u533aId\uff0c\u5982\u679c\u4e0d\u4f20\u5165\uff0c\u81ea\u52a8\u9009\u4e2d\u7b2c\u4e00\u4e2a\u5de5\u4f5c\u533a\u3002           |"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n    "username": "jack",\n    "password": "iloveu",\n    "spaceId": "i6thCRrKWYmdjxpzt"\n}\n')),Object(c.b)("h3",{id:"body-\u8fd4\u56de\u7ed3\u679c"},"Body \u8fd4\u56de\u7ed3\u679c"),Object(c.b)("p",null,"\u5982\u679c\u767b\u5f55\u6210\u529f\uff0cBody\u8fd4\u56de userContext \u5bf9\u8c61\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),'userId: dL4KFkLSqqGAozZ6C     # \u7528\u6237Id\nspaceId: i6thCRrKWYmdjxpzt    # \u5f53\u524d\u5de5\u4f5c\u533aId\nname: Jack Zhuang             # \u7528\u6237\u59d3\u540d\nusername: jack                # \u7528\u6237\u540d\nmobile: 1865201314            # \u7528\u6237\u624b\u673a\u53f7\nemail: 1865201314@qq.com      # \u7528\u6237\u90ae\u7bb1\nutcOffset: 8                  # \u65f6\u533a\u5dee\uff0c\u4ee5\u5c0f\u65f6\u4e3a\u5355\u4f4d\uff0c\u5317\u4eac\u65f6\u95f4\u4e3a8\nroles:  ["role_name"]         # \u7528\u6237\u5c5e\u4e8e\u7684\u6240\u6709\u6743\u9650\u7ec4\nspace:\n  _id: i6thCRrKWYmdjxpzt      # \u5f53\u524d\u5de5\u4f5c\u533aId\n  name: Apple                 # \u5f53\u524d\u5de5\u4f5c\u533a\u540d\u79f0\nis_space_admin: true          # \u662f\u5426\u662f\u5f53\u524d\u5de5\u4f5c\u533a\u7ba1\u7406\u5458\nspaces: [space]               # \u6570\u7ec4\uff0c\u7528\u6237\u6240\u5c5e\u7684\u6240\u6709\u5de5\u4f5c\u533a \ncompany:                   \n  _id: i6thCRrKWYmdjxpzt      # \u7528\u6237\u6240\u5c5e\u4e3b\u5355\u4f4d \n  name: Apple China           # \u7528\u6237\u6240\u5c5e\u4e3b\u5355\u4f4d\u540d\u79f0\n  organization: xxx           # \u7528\u6237\u6240\u5c5e\u4e3b\u5355\u4f4d\u5173\u8054\u7ec4\u7ec7id\ncompanies: [company]          # \u6570\u7ec4\uff0c\u7528\u6237\u6240\u5c5e\u7684\u6240\u6709\u5355\u4f4d\ncompany_id: "xxx"             # \u7528\u6237\u6240\u5c5e\u4e3b\u5355\u4f4did\u503c\ncompany_ids: ["xxx"]          # \u6570\u7ec4\uff0c\u7528\u6237\u6240\u5c5e\u7684\u6240\u6709\u5355\u4f4did\u503c\norganization:\n  _id: i6thCRrKWYmdjxpzt\n  name: Sales                 # \u7528\u6237\u6240\u5c5e\u90e8\u95e8\n  fullname: Apple China/Sales # \u7528\u6237\u6240\u5c5e\u90e8\u95e8\u7684\u5168\u79f0\n  company_id: xxx             # \u7528\u6237\u6240\u5c5e\u90e8\u95e8\u5173\u8054\u5355\u4f4did\norganizations: [organization] # \u6570\u7ec4\uff0c\u7528\u6237\u6240\u5c5e\u7684\u6240\u6709\u90e8\u95e8\n')),Object(c.b)("h3",{id:"header-\u8fd4\u56de\u7ed3\u679c"},"Header \u8fd4\u56de\u7ed3\u679c"),Object(c.b)("p",null,"Header\u8fd4\u56deX-Space-Token\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-shell"}),"X-Space-Token: i6thCRrKWYmdjxpzt,392mkylUmFyNTRLR3aSTbsyM287On8bTULh-GDO1sH_\n")),Object(c.b)("h3",{id:"cookie-\u8fd4\u56de\u7ed3\u679c"},"Cookie \u8fd4\u56de\u7ed3\u679c"),Object(c.b)("p",null,"\u5982\u679c\u4ece\u6d4f\u89c8\u5668\u767b\u5f55\uff0c\u81ea\u52a8\u4e3a\u6d4f\u89c8\u5668\u8bbe\u7f6e\u4ee5\u4e0bCookie\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-shell"}),"X-User-Id: dL4KFkLSqqGAozZ6C\nX-Auth-Token: 392mkylUmFyNTRLR3aSTbsyM287On8bTULh-GDO1sH_\nX-Space-Id: i6thCRrKWYmdjxpzt\nX-Space-Token: i6thCRrKWYmdjxpzt,392mkylUmFyNTRLR3aSTbsyM287On8bTULh-GDO1sH_\n")),Object(c.b)("h2",{id:"\u9a8c\u8bc1\u767b\u5f55\u72b6\u6001"},"\u9a8c\u8bc1\u767b\u5f55\u72b6\u6001"),Object(c.b)("p",null,"\u8fd9\u91cc\u6d4b\u8bd5\u8c03\u7528validate\u63a5\u53e3\uff0c\u9a8c\u8bc1\u7528\u6237\u662f\u5426\u767b\u5f55\uff0c\u5982\u679c\u7528\u6237\u5df2\u767b\u5f55\uff0c\u5219\u8fd4\u56de\u7528\u6237\u57fa\u672c\u4fe1\u606f\u3002"),Object(c.b)("h3",{id:"url-1"},"URL"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"POST 'http://localhost:5000/api/v4/users/validate' \n")),Object(c.b)("h3",{id:"\u8bf7\u6c42\u53c2\u6570-1"},"\u8bf7\u6c42\u53c2\u6570"),Object(c.b)("p",null,"\u901a\u8fc7Header\u4f20\u5165X-Space-Token\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-shell"}),"Authorization: Bearer i6thCRrKWYmdjxpzt,392mkylUmFyNTRLR3aSTbsyM287On8bTULh-GDO1sH_\n")),Object(c.b)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),Object(c.b)("p",null,"\u5982\u679c\u5f53\u524d\u7528\u6237\u5df2\u767b\u5f55\uff0c\u5219\u8fd4\u56deuserContext\u3002"),Object(c.b)("h2",{id:"\u6ce8\u9500"},"\u6ce8\u9500"),Object(c.b)("p",null,"\u6ce8\u9500\u5f53\u524d\u767b\u5f55\u7684\u7528\u6237\u3002"),Object(c.b)("h3",{id:"url-2"},"URL"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"POST 'http://localhost:5000/accounts/logout' \n")),Object(c.b)("h3",{id:"\u8bf7\u6c42\u53c2\u6570-2"},"\u8bf7\u6c42\u53c2\u6570"),Object(c.b)("p",null,"\u65e0"),Object(c.b)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-1"},"\u8fd4\u56de\u7ed3\u679c"),Object(c.b)("p",null,"\u65e0"))}b.isMDXComponent=!0},341:function(e,n,a){"use strict";a.d(n,"a",(function(){return i})),a.d(n,"b",(function(){return b}));var t=a(0),r=a.n(t),c=r.a.createContext({}),l=function(e){var n=r.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):Object.assign({},n,e)),a},i=function(e){var n=l(e.components);return r.a.createElement(c.Provider,{value:n},e.children)};var o="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(t.forwardRef)((function(e,n){var a=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,o=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(a[t]=e[t]);return a}(e,["components","mdxType","originalType","parentName"]),p=l(a),b=t,u=p[i+"."+b]||p[b]||d[b]||c;return a?r.a.createElement(u,Object.assign({},{ref:n},o,{components:a})):r.a.createElement(u,Object.assign({},{ref:n},o))}));function b(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=a.length,l=new Array(c);l[0]=p;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[o]="string"==typeof e?e:t,l[1]=i;for(var b=2;b<c;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);