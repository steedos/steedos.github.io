(window.webpackJsonp=window.webpackJsonp||[]).push([[24,272],{401:function(e,a,t){"use strict";t.r(a);t(23);var l=t(0),n=t.n(l),r=t(403),c=t(404),s=t(62),i=t(409),o=t(1),m=t(405),u=t.n(m),b=t(407),d=t(416),E=t(406),h=t(412),g=t(152),v=t.n(g);const p=24;function _({item:e,onItemClick:a,collapsible:t}){const{items:r,href:c,label:s,type:i}=e,[m,b]=Object(l.useState)(e.collapsed),[d,g]=Object(l.useState)(null);e.collapsed!==d&&(g(e.collapsed),b(e.collapsed));const v=Object(l.useCallback)(e=>{e.preventDefault(),b(e=>!e)});switch(i){case"category":return r.length>0&&n.a.createElement("li",{className:u()("menu__list-item",{"menu__list-item--collapsed":m}),key:s},n.a.createElement("a",{className:u()("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&!e.collapsed}),href:"#!",onClick:t?v:void 0},s),n.a.createElement("ul",{className:"menu__list"},r.map(e=>n.a.createElement(_,{key:e.label,item:e,onItemClick:a,collapsible:t}))));case"link":default:return n.a.createElement("li",{className:"menu__list-item",key:s},n.a.createElement(E.a,Object(o.a)({className:"menu__link",to:c},Object(h.a)(c)?{activeClassName:"menu__link--active",exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"}),s))}}var f=function(e){const[a,t]=Object(l.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:r,logo:s={}}={}}}={}}=Object(c.a)(),i=Object(b.a)(s.src),{docsSidebars:o,path:m,sidebar:E,sidebarCollapsible:h}=e;if(Object(d.a)(a),!E)return null;const g=o[E];if(!g)throw new Error(`Cannot find the sidebar "${E}" in the sidebar config!`);return h&&g.forEach(e=>(function e(a,t){const{items:l,href:n,type:r}=a;switch(r){case"category":{const n=l.map(a=>e(a,t)).filter(e=>e).length>0;return a.collapsed=!n,n}case"link":default:return n===t}})(e,m)),n.a.createElement("div",{className:v.a.sidebar},n.a.createElement("div",{className:v.a.sidebarLogo},null!=s&&n.a.createElement("img",{src:i,alt:s.alt}),null!=r&&n.a.createElement("strong",null,r)),n.a.createElement("div",{className:u()("menu","menu--responsive",v.a.menu,{"menu--show":a})},n.a.createElement("div",{class:" menu__button"},n.a.createElement("span",null,E),n.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--link button--sm",type:"button",onClick:()=>{t(!a)}},a?n.a.createElement("svg",{className:"{styles.sidebarMenuIcon}",xmlns:"http://www.w3.org/2000/svg",height:p,width:p,viewBox:"0 0 24 24",role:"img",focusable:"false"},n.a.createElement("title",null,"Close"),n.a.createElement("path",{d:"M14.3 11.7l6-6c.3-.3.3-.7 0-1l-.9-1c-.3-.2-.7-.2-1 0l-6 6.1c-.2.2-.5.2-.7 0l-6-6.1c-.3-.3-.7-.3-1 0l-1 1c-.2.2-.2.7 0 .9l6.1 6.1c.2.2.2.4 0 .6l-6.1 6.1c-.3.3-.3.7 0 1l1 1c.2.2.7.2.9 0l6.1-6.1c.2-.2.4-.2.6 0l6.1 6.1c.2.2.7.2.9 0l1-1c.3-.3.3-.7 0-1l-6-6c-.2-.2-.2-.5 0-.7z"})):n.a.createElement("svg",{className:"{styles.sidebarMenuIcon}",xmlns:"http://www.w3.org/2000/svg",height:p,width:p,viewBox:"0 0 24 24",role:"img",focusable:"false"},n.a.createElement("title",null,"Menu"),n.a.createElement("path",{d:"M22 8.2l-9.5 9.6c-.3.2-.7.2-1 0L2 8.2c-.2-.3-.2-.7 0-1l1-1c.3-.3.8-.3 1.1 0l7.4 7.5c.3.3.7.3 1 0l7.4-7.5c.3-.2.8-.2 1.1 0l1 1c.2.3.2.7 0 1z"})))),n.a.createElement("ul",{className:"menu__list"},g.map(e=>n.a.createElement(_,{key:e.label,item:e,onItemClick:()=>{t(!1)},collapsible:h})))))},k=t(430),N=t(434),w=t(408),O=t(157),j=t.n(O);a.default=function(e){const{route:a,docsMetadata:t,location:l}=e,o=a.routes.find(e=>Object(w.b)(l.pathname,e))||{},{permalinkToSidebar:m,docsSidebars:u,version:b}=t,d=m[o.path],{siteConfig:{themeConfig:E={}}={},isClient:h}=Object(c.a)(),{sidebarCollapsible:g=!0}=E;return 0===Object.keys(o).length?n.a.createElement(N.default,e):n.a.createElement(i.a,{version:b,key:h},n.a.createElement("div",{className:j.a.docPage},d&&n.a.createElement("div",{className:j.a.docSidebarContainer},n.a.createElement(f,{docsSidebars:u,path:o.path,sidebar:d,sidebarCollapsible:g})),n.a.createElement("main",{className:j.a.docMainContainer},n.a.createElement(r.a,{components:k.a},Object(s.a)(a.routes)))))}},409:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(414),c=t(404),s=t(407),i=t(422),o=t(1),m=t(406),u=t(412),b=t(418),d=t(419),E=t(405),h=t.n(E),g=t(415),v=t(423),p=t(416),_=t(127),f=t.n(_),k=t(408);function N({activeBasePath:e,to:a,href:t,label:l,position:r,...c}){const i=Object(s.a)(a),u=Object(s.a)(e);return n.a.createElement(m.a,Object(o.a)({className:"navbar__item navbar__link"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:i,...e?{isActive:(e,a)=>a.pathname.startsWith(u)}:null},c),l)}var w=function(e){const{siteConfig:a={},isClient:t}=Object(c.a)(),{baseUrl:r,themeConfig:i={}}=a,{navbar:E={},disableDarkMode:_=!1}=i;let{title:w,logo:O={},links:j=[],hideOnScroll:y=!1}=E;const[C,S]=Object(l.useState)(!1),[x,M]=Object(l.useState)(!1),{isDarkTheme:L,setLightTheme:D,setDarkTheme:I}=Object(g.a)(),{navbarRef:B,isNavbarVisible:T}=Object(v.a)(y);Object(p.a)(C);const P=Object(l.useCallback)(()=>{S(!0)},[S]),F=Object(l.useCallback)(()=>{S(!1)},[S]),$=Object(l.useCallback)(e=>e.target.checked?I():D(),[D,I]);let A=O.href||r,H={};O.target?H={target:O.target}:Object(u.a)(A)||(H={rel:"noopener noreferrer",target:"_blank"});const W=O.srcDark&&L?O.srcDark:O.src,z=Object(s.a)(W),J=Object(k.d)();return J&&J.pathname.indexOf("/us")>=0&&(j=E.links_us,w="Steedos",A="/us/"),n.a.createElement("nav",{ref:B,className:h()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":C,[f.a.navbarHideable]:y,[f.a.navbarHidden]:!T})},n.a.createElement("div",{className:"navbar__inner"},n.a.createElement("div",{className:"navbar__items"},n.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:P,onKeyDown:P},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},n.a.createElement("title",null,"Menu"),n.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),n.a.createElement(m.a,Object(o.a)({className:"navbar__brand",to:A},H),null!=O&&n.a.createElement("img",{key:t,className:"navbar__logo",src:z,alt:O.alt}),null!=w&&n.a.createElement("strong",{className:h()("navbar__title",{[f.a.hideLogoText]:x})},w)),j.filter(e=>"right"!==e.position).map((e,a)=>{return void 0!==e.items&&e.items.length>0?n.a.createElement("div",{class:"dropdown dropdown--hoverable"},n.a.createElement(N,Object(o.a)({},e,{key:a})),n.a.createElement("ul",{class:"dropdown__menu"},e.items.map((e,t)=>n.a.createElement("li",null,n.a.createElement(N,Object(o.a)({},e,{key:a+"-"+t})))))):n.a.createElement(N,Object(o.a)({},e,{key:a}))})),n.a.createElement("div",{className:"navbar__items navbar__items--right"},j.filter(e=>"right"===e.position).map((e,a)=>n.a.createElement(N,Object(o.a)({},e,{key:a}))),!_&&n.a.createElement(d.a,{className:f.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:L,onChange:$}),!C&&n.a.createElement(b.a,{handleSearchBarToggle:M,isSearchBarExpanded:x}))),n.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:F}),n.a.createElement("div",{className:"navbar-sidebar"},n.a.createElement("div",{className:"navbar-sidebar__brand"},n.a.createElement(m.a,Object(o.a)({className:"navbar__brand",onClick:F,to:A},H),null!=O&&n.a.createElement("img",{key:t,className:"navbar__logo",src:z,alt:O.alt}),null!=w&&n.a.createElement("strong",{className:"navbar__title"},w)),!_&&C&&n.a.createElement(d.a,{"aria-label":"Dark mode toggle in sidebar",checked:L,onChange:$}),n.a.createElement(b.a,{handleSearchBarToggle:M,isSearchBarExpanded:x})),n.a.createElement("div",{className:"navbar-sidebar__items"},n.a.createElement("div",{className:"menu"},n.a.createElement("ul",{className:"menu__list"},j.map((e,a)=>n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"menu__list-item",key:a},n.a.createElement(N,Object(o.a)({className:"menu__link"},e,{onClick:F}))),void 0!==e.items&&e.items.length>0&&e.items.map((e,t)=>n.a.createElement("li",{className:"menu__list-item",key:a+"-"+t},n.a.createElement(N,Object(o.a)({className:"menu__link",style:{paddingLeft:"3rem"}},e,{onClick:F})))))))))))},O=t(9),j=t(128),y=t.n(j);function C(e){var a=e.to,t=e.href,l=e.label,r=Object(O.a)(e,["to","href","label"]),c=Object(s.a)(a);return n.a.createElement(m.a,Object(o.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},r),l)}var S=function(e){var a=e.url,t=e.alt;return n.a.createElement("img",{className:"footer__logo",alt:t,src:a})};var x=function(){var e=Object(c.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,l=t||{},r=l.copyright,i=l.links,o=void 0===i?[]:i,m=l.logo,u=void 0===m?{}:m,b=Object(s.a)(u.src);return t?n.a.createElement("footer",{className:h()("footer",{"footer--dark":"dark"===t.style})},n.a.createElement("div",{className:"container"},o&&o.length>0&&n.a.createElement("div",{className:"row footer__links"},o.map((function(e,a){return n.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?n.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(C,e))}))):null)}))),(u||r)&&n.a.createElement("div",{className:"text--center"},u&&u.src&&n.a.createElement("div",{className:"margin-bottom--sm"},u.href?n.a.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:y.a.footerLogoLink},n.a.createElement(S,{alt:u.alt,url:b})):n.a.createElement(S,{alt:u.alt,url:b})),r))):null},M=t(520);t(129);a.a=function(e){const{siteConfig:a={}}=Object(c.a)(),{favicon:t,title:l,themeConfig:{image:o},url:m}=a,{route:u,children:b,title:d,noFooter:E,description:h,image:g,keywords:v,permalink:p,version:_}=e,f=d?`${d} | ${l}`:l,k=g||o,N=m+Object(s.a)(k),O=Object(s.a)(t);return n.a.createElement(M.a,{iconPath:"/assets/icons"},n.a.createElement(i.a,null,n.a.createElement(r.a,null,n.a.createElement("html",{lang:"en"}),n.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),n.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),f&&n.a.createElement("title",null,f),f&&n.a.createElement("meta",{property:"og:title",content:f}),t&&n.a.createElement("link",{rel:"shortcut icon",href:O}),h&&n.a.createElement("meta",{name:"description",content:h}),h&&n.a.createElement("meta",{property:"og:description",content:h}),_&&n.a.createElement("meta",{name:"docsearch:version",content:_}),v&&v.length&&n.a.createElement("meta",{name:"keywords",content:v.join(",")}),k&&n.a.createElement("meta",{property:"og:image",content:N}),k&&n.a.createElement("meta",{property:"twitter:image",content:N}),k&&n.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${f}`}),p&&n.a.createElement("meta",{property:"og:url",content:m+p}),n.a.createElement("meta",{name:"twitter:card",content:"summary"})),n.a.createElement(w,null),n.a.createElement("div",{className:"main-wrapper"},b),!E&&n.a.createElement(x,null)))}},434:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(409);a.default=function(){return n.a.createElement(r.a,{title:"Page Not Found"},n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--6 col--offset-3"},n.a.createElement("h1",{className:"hero__title"},"Page Not Found"),n.a.createElement("p",null,"We could not find what you were looking for."),n.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);