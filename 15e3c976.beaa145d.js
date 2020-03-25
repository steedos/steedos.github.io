(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),c=(a(0),a(397)),i={title:"\u63d2\u5165"},p={id:"api/odata_add",title:"\u63d2\u5165",description:"\u901a\u8fc7\u5bf9\u8981\u53ea\u80fd\u589e\u6570\u636e\u7684\u5bf9\u8c61\u7684 URI \u6267\u884c HTTP POST \u8bf7\u6c42\u53ef\u521b\u5efa\u65b0\u8bb0\u5f55\u6216\u5b9e\u4f53\u3002 POST \u8bf7\u6c42\u4f7f\u7528 JSON \u683c\u5f0f\u5728\u5176\u6b63\u6587\u4e2d\u5305\u62ec\u65b0\u8bb0\u5f55\u3002\u670d\u52a1\u5668\u4f1a\u4e3a\u8bf7\u6c42\u4e2d\u672a\u6307\u5b9a\u7684\u4efb\u4f55\u5c5e\u6027\u6307\u6d3e\u9ed8\u8ba4\u503c\uff0c\u5e76\u8fd4\u56de\u6210\u529f\u521b\u5efa\u7684\u8bb0\u5f55\u3002",source:"@site/../docs/api/odata_add.md",permalink:"/api/odata_add",sidebar:"API",previous:{title:"\u8bfb\u53d6",permalink:"/api/odata_get"},next:{title:"\u66f4\u65b0",permalink:"/api/odata_edit"}},o=[{value:"\u63a5\u53e3\u4fe1\u606f",id:"\u63a5\u53e3\u4fe1\u606f",children:[]}],b={rightToc:o},l="wrapper";function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(l,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u901a\u8fc7\u5bf9\u8981\u53ea\u80fd\u589e\u6570\u636e\u7684\u5bf9\u8c61\u7684 URI \u6267\u884c HTTP POST \u8bf7\u6c42\u53ef\u521b\u5efa\u65b0\u8bb0\u5f55\u6216\u5b9e\u4f53\u3002 POST \u8bf7\u6c42\u4f7f\u7528 JSON \u683c\u5f0f\u5728\u5176\u6b63\u6587\u4e2d\u5305\u62ec\u65b0\u8bb0\u5f55\u3002\u670d\u52a1\u5668\u4f1a\u4e3a\u8bf7\u6c42\u4e2d\u672a\u6307\u5b9a\u7684\u4efb\u4f55\u5c5e\u6027\u6307\u6d3e\u9ed8\u8ba4\u503c\uff0c\u5e76\u8fd4\u56de\u6210\u529f\u521b\u5efa\u7684\u8bb0\u5f55\u3002"),Object(c.b)("h3",{id:"\u63a5\u53e3\u4fe1\u606f"},"\u63a5\u53e3\u4fe1\u606f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u6c42\u65b9\u6cd5\uff1aPOST")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u6c42\u63a5\u53e3\uff1a/api/odata/v4/#{spaceId}/#{object_name}")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u63a5\u53e3\u8bf4\u660e\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"spaceId\uff1a\u5de5\u4f5c\u533aID"),Object(c.b)("li",{parentName:"ul"},"object_name\uff1a\u521b\u5efa\u5bf9\u8c61\u7684\u5bf9\u8c61\u540d"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"body\u4ee5JSON\u5f62\u5f0f\u5b58\u50a8\u8bb0\u5f55"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"response\u8bf4\u660e\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u8fd4\u56de\u521b\u5efa\u6210\u529f\u7684\u8bb0\u5f55"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"HTTP \u8bf7\u6c42")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{})," curl\n   -X POST https://beta.steedos.com/api/odata/v4/Af8e****DqD3/contacts\n   -H 'Content-type': 'application/json'\n     {\n       name: '\u5f20\u4e09',\n       mobile: '18969565966',\n       company: \"\u4e0a\u6d77\u67d0\u67d0\u516c\u53f8\",\n       address: \"\u4e0a\u6d77\u5e02\u5f90\u6c47\u533a\u67d0\u67d0\u8857\u9053\"\n     }\n")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"HTTP \u54cd\u5e94")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),' HTTP/1.1 201 Created\n\n {\n     "@odata.id": "https://beta.steedos.com/api/odata/v4/Af8e****DqD3/contacts(\'hbysEccFT2fXjHtpd\')",\n     "@odata.etag": "W/\\"08D589720BBB3DB1\\"",\n     "@odata.editLink": "https://beta.steedos.com/api/odata/v4/Af8e****DqD3/contacts(\'hbysEccFT2fXjHtpd\')",\n     "_id": "hbysEccFT2fXjHtpd",\n     "name": "\u5f20\u4e09",\n     "mobile": "18969565966",\n     "company": "\u4e0a\u6d77\u67d0\u67d0\u516c\u53f8",\n     "address": "\u4e0a\u6d77\u5e02\u5f90\u6c47\u533a\u67d0\u67d0\u8857\u9053"\n    "owner": {\n        "_id": "hPgDcEd9vKQxwndQR",\n        "name": "\u7cfb\u7edf\u7ba1\u7406\u5458"\n    }\n     "created": "2018-03-29T08:50:35.092Z",\n     "modified": "2018-03-29T08:50:44.990Z",\n     "created_by": "qjcwDX3icX3KnZJhZ",\n     "modified_by": "qjcwDX3icX3KnZJhZ",\n     "score": 0\n }\n')))))}d.isMDXComponent=!0},397:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n),c=r.a.createContext({}),i=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},p=function(e){var t=i(e.components);return r.a.createElement(c.Provider,{value:t},e.children)};var o="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),l=i(a),d=n,m=l[p+"."+d]||l[d]||b[d]||c;return a?r.a.createElement(m,Object.assign({},{ref:t},o,{components:a})):r.a.createElement(m,Object.assign({},{ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=l;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p[o]="string"==typeof e?e:n,i[1]=p;for(var d=2;d<c;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}l.displayName="MDXCreateElement"}}]);