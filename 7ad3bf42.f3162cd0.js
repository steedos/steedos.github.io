(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{262:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return c}));var n=r(1),a=r(9),i=(r(0),r(397)),o={title:"\u6570\u636e\u5b57\u5178"},p={id:"api/odata_metadata",title:"\u6570\u636e\u5b57\u5178",description:"OData\u670d\u52a1\u662f\u4e00\u79cd\u81ea\u63cf\u8ff0\u670d\u52a1\uff0c\u5b83\u516c\u5f00\u5b9a\u4e49\u5b9e\u4f53\u96c6\uff0c\u5173\u7cfb\uff0c\u5b9e\u4f53\u7c7b\u578b\u548c\u64cd\u4f5c\u7684\u5143\u6570\u636e",source:"@site/../docs/api/odata_metadata.md",permalink:"/docs/api/odata_metadata",sidebar:"\u534e\u708e\u5f00\u53d1\u5e73\u53f0 API",previous:{title:"\u81ea\u5b9a\u4e49\u51fd\u6570",permalink:"/docs/api/odata_functions"},next:{title:"GraphQL \u7b80\u4ecb",permalink:"/docs/api/graphql"}},d=[{value:"\u63a5\u53e3\u4fe1\u606f",id:"\u63a5\u53e3\u4fe1\u606f",children:[]}],m={rightToc:d},y="wrapper";function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)(y,Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"OData\u670d\u52a1\u662f\u4e00\u79cd\u81ea\u63cf\u8ff0\u670d\u52a1\uff0c\u5b83\u516c\u5f00\u5b9a\u4e49\u5b9e\u4f53\u96c6\uff0c\u5173\u7cfb\uff0c\u5b9e\u4f53\u7c7b\u578b\u548c\u64cd\u4f5c\u7684\u5143\u6570\u636e\n\u83b7\u53d6\u5bf9\u8c61\u7684\u6570\u636e\u7ed3\u6784\u63a5\u53e3\u3002"),Object(i.b)("h3",{id:"\u63a5\u53e3\u4fe1\u606f"},"\u63a5\u53e3\u4fe1\u606f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8bf7\u6c42\u5730\u5740\uff1a/api/v4/$metadata")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8bf7\u6c42\u65b9\u6cd5\uff1aGET")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u63a5\u53e3\u8bf4\u660e\uff1a"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"spaceId\uff1a\u5de5\u4f5c\u533aID"),Object(i.b)("li",{parentName:"ul"},"$metadata\uff1a\u56fa\u5b9a\u503c"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8fd4\u56de\u503c\uff1a\u670d\u52a1\u7aef\u6570\u636e\u7ed3\u6784\u6587\u6863")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u793a\u4f8b\u5982\u4e0b\uff1a\n- HTTP \u8bf7\u6c42"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'       ```\n        url \n          -X GET https://beta.steedos.com/api/odata/v4/Af8e****DqD3/$metadata\n       ```\n    - HTTP \u54cd\u5e94\n        ```\n        \u76f8\u5173\u5c5e\u6027\u4ecb\u7ecd\n          EntityType:\u8868(\u5bf9\u8c61)\u7684\u5c5e\u6027\n          Property\uff1a\u8868\u7684\u5b57\u6bb5\u3002\u5305\u542b\u5b57\u6bb5\u540d\uff0c\u5b57\u6bb5\u7c7b\u578b\u3002\n          NavigationProperty\uff1a\u5173\u8054\u5c5e\u6027\u3002\u5305\u542b\u5173\u8054\u8868\uff0c\u5173\u8054\u5b57\u6bb5\u3002\n        <?xml version="1.0" encoding="UTF-8"?>\n        <edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx" Version="4.0">\n')),Object(i.b)("p",{parentName:"li"}," \t<edmx:DataServices>"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' <Schema xmlns="http://docs.oasis-open.org/odata/ns/edm" Namespace="SteedosEntities">\n     <EntityType Name="object_recent_viewed">\n         <Key>\n             <PropertyRef Name="_id"/>\n         </Key>\n         <Property Name="_id" Type="Edm.String" Nullable="false"/>\n         <Property Name="record" Type="Edm.String"/>\n         <Property Name="space" Type="Edm.String"/>\n         <Property Name="owner" Type="Edm.String"/>\n         <Property Name="created" Type="Edm.DateTimeOffset" Precision="8"/>\n         <Property Name="created_by" Type="Edm.String"/>\n         <Property Name="modified" Type="Edm.DateTimeOffset" Precision="8"/>\n         <Property Name="modified_by" Type="Edm.String"/>\n         <Property Name="is_deleted" Type="Edm.Boolean"/>\n         <Property Name="sharing" Type="Edm.String"/>\n         <NavigationProperty Name="space_expand" Type="SteedosEntities.spaces" Partner="object_recent_viewed">\n             <ReferentialConstraint Property="space" ReferencedProperty="_id"/>\n   \n         </NavigationProperty>\n         <NavigationProperty Name="owner_expand" Type="SteedosEntities.users" Partner="object_recent_viewed">\n             <ReferentialConstraint Property="owner" ReferencedProperty="_id"/>\n         </NavigationProperty>\n         <NavigationProperty Name="created_by_expand" Type="SteedosEntities.users" Partner="object_recent_viewed">\n             <ReferentialConstraint Property="created_by" ReferencedProperty="_id"/>\n         </NavigationProperty>\n         <NavigationProperty Name="modified_by_expand" Type="SteedosEntities.users" Partner="object_recent_viewed">\n             <ReferentialConstraint Property="modified_by" ReferencedProperty="_id"/>\n         </NavigationProperty>\n     </EntityType>\n     ......\n     <EntityType Name="object_listviews">\n         <Key>\n             <PropertyRef Name="_id"/>\n         </Key>\n         <Property Name="_id" Type="Edm.String" Nullable="false"/>\n         <Property Name="name" Type="Edm.String" Nullable="false"/>\n         <Property Name="object_name" Type="Edm.String" Nullable="false"/>\n         <Property Name="filter_scope" Type="Edm.String" Nullable="false"/>\n         <Property Name="columns" Type="Edm.String"/>\n         <Property Name="shared" Type="Edm.Boolean"/>\n         <Property Name="filters" Type="Edm.String"/>\n         <Property Name="filters.$" Type="Edm.String"/>\n         <Property Name="filter_logic" Type="Edm.String"/>\n         <Property Name="is_default" Type="Edm.Boolean"/>\n         <Property Name="owner" Type="Edm.String"/>\n         <Property Name="space" Type="Edm.String"/>\n         <Property Name="created" Type="Edm.DateTimeOffset" Precision="8"/>\n         <Property Name="created_by" Type="Edm.String"/>\n         <Property Name="modified" Type="Edm.DateTimeOffset" Precision="8"/>\n         <Property Name="modified_by" Type="Edm.String"/>\n         <Property Name="is_deleted" Type="Edm.Boolean"/>\n         <Property Name="sharing" Type="Edm.String"/>\n         <NavigationProperty Name="object_name_expand" Type="SteedosEntities.objects" Partner="object_listviews">\n             <ReferentialConstraint Property="object_name" ReferencedProperty="_id"/>\n         </NavigationProperty>\n         <NavigationProperty Name="owner_expand" Type="SteedosEntities.users" Partner="object_listviews">\n             <ReferentialConstraint Property="owner" ReferencedProperty="_id"/>\n         </NavigationProperty>\n         <NavigationProperty Name="space_expand" Type="SteedosEntities.spaces" Partner="object_listviews">\n             <ReferentialConstraint Property="space" ReferencedProperty="_id"/>\n         </NavigationProperty>\n         <NavigationProperty Name="created_by_expand" Type="SteedosEntities.users" Partner="object_listviews">\n             <ReferentialConstraint Property="created_by" ReferencedProperty="_id"/>\n         </NavigationProperty>\n         <NavigationProperty Name="modified_by_expand" Type="SteedosEntities.users" Partner="object_listviews">\n             <ReferentialConstraint Property="modified_by" ReferencedProperty="_id"/>\n         </NavigationProperty>\n     </EntityType>\n')))))}c.isMDXComponent=!0},397:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return c}));var n=r(0),a=r.n(n),i=a.a.createContext({}),o=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},p=function(e){var t=o(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),y=o(r),c=n,s=y[p+"."+c]||y[c]||m[c]||i;return r?a.a.createElement(s,Object.assign({},{ref:t},d,{components:r})):a.a.createElement(s,Object.assign({},{ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=y;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[d]="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);