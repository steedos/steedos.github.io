(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(1),r=(n(0),n(301));const c={title:"\u63d2\u5165"},p=[{value:"\u63a5\u53e3\u4fe1\u606f",id:"\u63a5\u53e3\u4fe1\u606f",children:[]}],i={rightToc:p},o="wrapper";function b({components:e,...t}){return Object(r.b)(o,Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u901a\u8fc7\u5bf9\u8981\u53ea\u80fd\u589e\u6570\u636e\u7684\u5bf9\u8c61\u7684 URI \u6267\u884c HTTP POST \u8bf7\u6c42\u53ef\u521b\u5efa\u65b0\u8bb0\u5f55\u6216\u5b9e\u4f53\u3002 POST \u8bf7\u6c42\u4f7f\u7528 JSON \u683c\u5f0f\u5728\u5176\u6b63\u6587\u4e2d\u5305\u62ec\u65b0\u8bb0\u5f55\u3002\u670d\u52a1\u5668\u4f1a\u4e3a\u8bf7\u6c42\u4e2d\u672a\u6307\u5b9a\u7684\u4efb\u4f55\u5c5e\u6027\u6307\u6d3e\u9ed8\u8ba4\u503c\uff0c\u5e76\u8fd4\u56de\u6210\u529f\u521b\u5efa\u7684\u8bb0\u5f55\u3002"),Object(r.b)("h3",{id:"\u63a5\u53e3\u4fe1\u606f"},"\u63a5\u53e3\u4fe1\u606f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u8bf7\u6c42\u65b9\u6cd5\uff1aPOST")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u8bf7\u6c42\u63a5\u53e3\uff1a/api/odata/v4/#{spaceId}/#{object_name}")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u63a5\u53e3\u8bf4\u660e\uff1a"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"spaceId\uff1a\u5de5\u4f5c\u533aID"),Object(r.b)("li",{parentName:"ul"},"object_name\uff1a\u521b\u5efa\u5bf9\u8c61\u7684\u5bf9\u8c61\u540d"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e\uff1a"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"body\u4ee5JSON\u5f62\u5f0f\u5b58\u50a8\u8bb0\u5f55"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"response\u8bf4\u660e\uff1a"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u8fd4\u56de\u521b\u5efa\u6210\u529f\u7684\u8bb0\u5f55"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"HTTP \u8bf7\u6c42")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{})," curl\n   -X POST https://beta.steedos.com/api/odata/v4/Af8e****DqD3/contacts\n   -H 'Content-type': 'application/json'\n     {\n       name: '\u5f20\u4e09',\n       mobile: '18969565966',\n       company: \"\u4e0a\u6d77\u67d0\u67d0\u516c\u53f8\",\n       address: \"\u4e0a\u6d77\u5e02\u5f90\u6c47\u533a\u67d0\u67d0\u8857\u9053\"\n     }\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"HTTP \u54cd\u5e94")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),' HTTP/1.1 201 Created\n\n {\n     "@odata.id": "https://beta.steedos.com/api/odata/v4/Af8e****DqD3/contacts(\'hbysEccFT2fXjHtpd\')",\n     "@odata.etag": "W/\\"08D589720BBB3DB1\\"",\n     "@odata.editLink": "https://beta.steedos.com/api/odata/v4/Af8e****DqD3/contacts(\'hbysEccFT2fXjHtpd\')",\n     "_id": "hbysEccFT2fXjHtpd",\n     "name": "\u5f20\u4e09",\n     "mobile": "18969565966",\n     "company": "\u4e0a\u6d77\u67d0\u67d0\u516c\u53f8",\n     "address": "\u4e0a\u6d77\u5e02\u5f90\u6c47\u533a\u67d0\u67d0\u8857\u9053"\n    "owner": {\n        "_id": "hPgDcEd9vKQxwndQR",\n        "name": "\u7cfb\u7edf\u7ba1\u7406\u5458"\n    }\n     "created": "2018-03-29T08:50:35.092Z",\n     "modified": "2018-03-29T08:50:44.990Z",\n     "created_by": "qjcwDX3icX3KnZJhZ",\n     "modified_by": "qjcwDX3icX3KnZJhZ",\n     "score": 0\n }\n')))))}b.isMDXComponent=!0},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a),c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)};var o="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,d=l[i+"."+m]||l[m]||b[m]||c;return n?r.a.createElement(d,Object.assign({},{ref:t},o,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,p=new Array(c);p[0]=l;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i[o]="string"==typeof e?e:a,p[1]=i;for(var m=2;m<c;m++)p[m]=n[m];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);