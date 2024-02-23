"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1314],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>g});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),u=m(a),N=l,g=u["".concat(d,".").concat(N)]||u[N]||k[N]||r;return a?n.createElement(g,i(i({ref:e},o),{},{components:a})):n.createElement(g,i({ref:e},o))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[u]="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},3568:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));const r={title:"UI Metadata"},i=void 0,p={unversionedId:"developer/package/metadata/metadata-ui",id:"developer/package/metadata/metadata-ui",title:"UI Metadata",description:"Overview",source:"@site/docs/developer/package/metadata/metadata-ui.md",sourceDirName:"developer/package/metadata",slug:"/developer/package/metadata/metadata-ui",permalink:"/developer/package/metadata/metadata-ui",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/package/metadata/metadata-ui.md",tags:[],version:"current",frontMatter:{title:"UI Metadata"},sidebar:"developer",previous:{title:"Permission Metadata",permalink:"/developer/package/metadata/metadata-permissions"},next:{title:"Synchronize Metadata",permalink:"/developer/package/sync-metadata"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Applications",id:"applications",level:2},{value:"Tabs",id:"tabs",level:2},{value:"List Views",id:"list-views",level:2},{value:"Page Layouts",id:"page-layouts",level:2},{value:"Custom Buttons",id:"custom-buttons",level:2}],o={toc:m},u="wrapper";function k(t){let{components:e,...a}=t;return(0,l.kt)(u,(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Define ui-related metadata"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Applications"),(0,l.kt)("li",{parentName:"ul"},"Tabs"),(0,l.kt)("li",{parentName:"ul"},"List Views"),(0,l.kt)("li",{parentName:"ul"},"Page Layouts"),(0,l.kt)("li",{parentName:"ul"},"Custom Buttons")),(0,l.kt)("h2",{id:"applications"},"Applications"),(0,l.kt)("p",null,"Application.app.yml",(0,l.kt)("br",{parentName:"p"}),"\n","You can set the application's name, display name, application icon, and the objects and tabs displayed within the application."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Contract\ncode: contracts\ndescription: Manage contracts and payments.\nicon_slds: contract_line_item\nmobile: true\nmobile_objects:\n    - contracts\n    - finance_invoice\n    - finance_receive\n    - finance_receipt\n    - finance_payment\n    - contract_types\noauth2_enabled: false\noauth2_logout_enabled: false\nobjects:\n    - contracts\n    - finance_invoice\n    - finance_receive\n    - finance_receipt\n    - finance_payment\n    - contract_types\nsaml_enabled: false\nsaml_logout_enabled: false\nsort: 50\ntabs:\n    - contract_analysis\nvisible: true\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"API Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"icon_slds"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Icon")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"visible"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"textarea"),(0,l.kt)("td",{parentName:"tr",align:null},"Description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tabs"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Tabs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"objects"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Desktop Main Menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mobile_objects"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Mobile Main Menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_creator"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Display in desktop menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mobile"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Display in mobile menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"icon"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Old Version Icon")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sort"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Sort Order")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"External Link")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_use_ie"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Open with IE (Requires Steedos Desktop Client)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_use_iframe"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Open in iframe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_new_window"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Open in New Window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"on_click"),(0,l.kt)("td",{parentName:"tr",align:null},"textarea"),(0,l.kt)("td",{parentName:"tr",align:null},"Link Script")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_name"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Auth Domain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"API Key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oauth2_enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable OAuth2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oauth2_callback_url"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oauth2_scopes"),(0,l.kt)("td",{parentName:"tr",align:null},"select"),(0,l.kt)("td",{parentName:"tr",align:null},"Scopes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oauth2_logout_enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable Single Sign-out")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oauth2_logout_url"),(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"Single Sign-out URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oauth2_home_url"),(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"App Homepage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oauth2_logo"),(0,l.kt)("td",{parentName:"tr",align:null},"image"),(0,l.kt)("td",{parentName:"tr",align:null},"App Logo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oauth2_client_secret"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"App Secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"saml_enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable SAML")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"saml_entity_id"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Entity Id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"saml_issuer"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Issuer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"saml_idp_cert"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"IDP Cert")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"saml_acs_url"),(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"ACS Url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"saml_name_id_format"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"saml_logout_enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable Single Sign-out")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"saml_logout_url"),(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"Single Sign-out URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"saml_logout_block"),(0,l.kt)("td",{parentName:"tr",align:null},"select"),(0,l.kt)("td",{parentName:"tr",align:null},"Single Sign-out Binding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_system"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"System")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"from_code_id"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"from_code_id")))),(0,l.kt)("h2",{id:"tabs"},"Tabs"),(0,l.kt)("p",null,"Tab.tab.yml",(0,l.kt)("br",{parentName:"p"}),"\n","Tabs can be bound to an object or to a URL or a custom page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: contract_analysis\ndesktop: true\nicon: dashboard\nlabel: Contract Analysis\nmobile: true\npage: contract_analysis\ntype: page\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"label"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Display Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"API Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"icon"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Icon")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parent"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Parent Tab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"select"),(0,l.kt)("td",{parentName:"tr",align:null},"Type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mobile"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Display in mobile menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"desktop"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Display in desktop menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"frame_height"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Tab Frame Height")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"has_sidebar"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Display Sidebar Panel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"External Link")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_new_window"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Open in New Window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"action_overrides"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Action Override List Assigned to Tab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"textarea"),(0,l.kt)("td",{parentName:"tr",align:null},"Description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_system"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"System")))),(0,l.kt)("h2",{id:"list-views"},"List Views"),(0,l.kt)("p",null,"Listview.listview.yml",(0,l.kt)("br",{parentName:"p"}),"\n","Defines the list display of an object, including: displayed columns, filter conditions, sort rules, default search fields."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: all\nlabel: All Contracts\ncolumns:\n  - field: 'no'\n    width: '150'\n    wrap: true\n  - field: name\n    width: '220'\n    wrap: true\n  - field: contract_type\n    width: '150'\n    wrap: true\n  - field: amount\n    width: '150'\n    wrap: true\n  - field: signed_date\n    width: '150'\n    wrap: false\n  - field: owner\n    width: '150'\n    wrap: false\n  - field: created\n    width: '150'\n    wrap: false\nfilter_fields:\n  - contract_type\n  - signed_date\n  - othercompany\n  - instance_state\n  - owner\nfilter_scope: space\nfilters:\n  - is_default: true\n    field: instance_state\n    operation: <>\n    value:\n      - terminated\n    is_required: false\nshared: true\nshow_count: false\nsort:\n  - field_name: 'no'\n    order: desc\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"label"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Display Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"API Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"object_name"),(0,l.kt)("td",{parentName:"tr",align:null},"master_detail"),(0,l.kt)("td",{parentName:"tr",align:null},"Object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filter_scope"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Filter Scope")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shared"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Share View to Workspace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"show_count"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Display Entry Count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"select"),(0,l.kt)("td",{parentName:"tr",align:null},"View Type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scrolling_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"select"),(0,l.kt)("td",{parentName:"tr",align:null},"Scrollbar Style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns"),(0,l.kt)("td",{parentName:"tr",align:null},"grid"),(0,l.kt)("td",{parentName:"tr",align:null},"Displayed Columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns.$"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Displayed Column")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns.$.field"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns.$.width"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Width")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filter_fields"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Default Filter Fields")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sort"),(0,l.kt)("td",{parentName:"tr",align:null},"grid"),(0,l.kt)("td",{parentName:"tr",align:null},"Default Sort Rules")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sort.$"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Order")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sort.$.field_name"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Sort Field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sort.$.order"),(0,l.kt)("td",{parentName:"tr",align:null},"select"),(0,l.kt)("td",{parentName:"tr",align:null},"Sort Order")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filters"),(0,l.kt)("td",{parentName:"tr",align:null},"grid"),(0,l.kt)("td",{parentName:"tr",align:null},"Filters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filters.$"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Filter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filters.$.field"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filters.$.operation"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Operator")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filters.$.value"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filter_logic"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Filter Logic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mobile_columns"),(0,l.kt)("td",{parentName:"tr",align:null},"grid"),(0,l.kt)("td",{parentName:"tr",align:null},"Mobile Displayed Columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mobile_columns.$"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Mobile Displayed Column")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mobile_columns.$.field"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sort_no"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Sort Number")))),(0,l.kt)("h2",{id:"page-layouts"},"Page Layouts"),(0,l.kt)("p",null,"ObjectName.PageLayout.layout.yml",(0,l.kt)("br",{parentName:"p"}),"\n","Defines the record display of an object, including: profile, action buttons, displayed fields, related subtables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"name: customer\nbuttons:\n  - button_name: standard_new\n  - button_name: standard_edit\n  - button_name: standard_delete\nsections:\n  - section_name: base_info\n    fields:\n      - field_name: name\n      - field_name: address\n      - field_name: contact\n      - field_name: telephone\n      - field_name: email\n  - section_name: contract_info\n    fields:\n      - field_name: contract_no\n      - field_name: contract_type\n      - field_name: contract_start_date\n      - field_name: contract_end_date\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"label"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Display Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"API Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"object_name"),(0,l.kt)("td",{parentName:"tr",align:null},"master_detail"),(0,l.kt)("td",{parentName:"tr",align:null},"Object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buttons"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Action Buttons")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buttons.$"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buttons.$.button_name"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sections"),(0,l.kt)("td",{parentName:"tr",align:null},"grid"),(0,l.kt)("td",{parentName:"tr",align:null},"Layout Sections")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sections.$"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Section")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sections.$.section_name"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Section Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sections.$.fields"),(0,l.kt)("td",{parentName:"tr",align:null},"grid"),(0,l.kt)("td",{parentName:"tr",align:null},"Displayed Fields")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sections.$.fields.$"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Displayed Field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sections.$.fields.$.field_name"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Field")))),(0,l.kt)("h2",{id:"custom-buttons"},"Custom Buttons"),(0,l.kt)("p",null,"Button.button.yml",(0,l.kt)("br",{parentName:"p"}),"\n","Custom button definitions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: standard_new\nlabel: New\ntype: add\norder: 10\nicon: new_record\nvisible: true\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"label"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Display Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"API Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"select"),(0,l.kt)("td",{parentName:"tr",align:null},"Button Type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"order"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Display Order")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"icon"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Icon")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"visible"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Display")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"action"),(0,l.kt)("td",{parentName:"tr",align:null},"textarea"),(0,l.kt)("td",{parentName:"tr",align:null},"Button Action")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"permission_set"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Permission")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"related_list"),(0,l.kt)("td",{parentName:"tr",align:null},"lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Related List")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"textarea"),(0,l.kt)("td",{parentName:"tr",align:null},"Description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Button Group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_system"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"System")))),(0,l.kt)("hr",null))}k.isMDXComponent=!0}}]);