(window.webpackJsonp=window.webpackJsonp||[]).push([[30,316],{367:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(370),c=t(372),i=t(21),o=t(377),s=t(1),m=t(373),u=t.n(m),d=t(374),b=t(382),v=t(375),f=t(392),E=t(83),g=t.n(E);function h(e){var a=e.item,t=e.onItemClick,r=e.collapsible,c=a.items,i=a.href,o=a.label,m=a.type,d=Object(n.useState)(a.collapsed),b=d[0],E=d[1],g=Object(n.useState)(null),p=g[0],k=g[1];a.collapsed!==p&&(k(a.collapsed),E(a.collapsed));var _=Object(n.useCallback)((function(e){e.preventDefault(),E((function(e){return!e}))}));switch(m){case"category":return c.length>0&&l.a.createElement("li",{className:u()("menu__list-item",{"menu__list-item--collapsed":b}),key:o},l.a.createElement("a",{className:u()("menu__link",{"menu__link--sublist":r,"menu__link--active":r&&!a.collapsed}),href:"#!",onClick:r?_:void 0},o),l.a.createElement("ul",{className:"menu__list"},c.map((function(e){return l.a.createElement(h,{key:e.label,item:e,onItemClick:t,collapsible:r})}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:o},l.a.createElement(v.a,Object(s.a)({className:"menu__link",to:i},Object(f.a)(i)?{activeClassName:"menu__link--active",exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"}),o))}}var p=function(e){var a=Object(n.useState)(!1),t=a[0],r=a[1],i=Object(c.a)().siteConfig,o=(i=void 0===i?{}:i).themeConfig.navbar,s=((o=void 0===o?{}:o).title,o.logo),m=void 0===s?{}:s,v=(Object(d.a)(m.src),e.docsSidebars),f=e.path,E=e.sidebar,p=e.sidebarCollapsible;if(Object(b.a)(t),!E)return null;var k=v[E];if(!k)throw new Error('Cannot find the sidebar "'+E+'" in the sidebar config!');return p&&k.forEach((function(e){return function e(a,t){var n=a.items,l=a.href;switch(a.type){case"category":var r=n.map((function(a){return e(a,t)})).filter((function(e){return e})).length>0;return a.collapsed=!r,r;case"link":default:return l===t}}(e,f)})),l.a.createElement("div",{className:g.a.sidebar},l.a.createElement("div",{className:g.a.sidebarLogo},null!=E&&l.a.createElement("strong",null,E)),l.a.createElement("div",{className:u()("menu","menu--responsive",g.a.menu,{"menu--show":t})},l.a.createElement("div",{class:" menu__button"},l.a.createElement("span",null,E),l.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu",className:"button button--link button--sm",type:"button",onClick:function(){r(!t)}},t?l.a.createElement("svg",{className:"{styles.sidebarMenuIcon}",xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 24 24",role:"img",focusable:"false"},l.a.createElement("title",null,"Close"),l.a.createElement("path",{d:"M14.3 11.7l6-6c.3-.3.3-.7 0-1l-.9-1c-.3-.2-.7-.2-1 0l-6 6.1c-.2.2-.5.2-.7 0l-6-6.1c-.3-.3-.7-.3-1 0l-1 1c-.2.2-.2.7 0 .9l6.1 6.1c.2.2.2.4 0 .6l-6.1 6.1c-.3.3-.3.7 0 1l1 1c.2.2.7.2.9 0l6.1-6.1c.2-.2.4-.2.6 0l6.1 6.1c.2.2.7.2.9 0l1-1c.3-.3.3-.7 0-1l-6-6c-.2-.2-.2-.5 0-.7z"})):l.a.createElement("svg",{className:"{styles.sidebarMenuIcon}",xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 24 24",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{d:"M22 8.2l-9.5 9.6c-.3.2-.7.2-1 0L2 8.2c-.2-.3-.2-.7 0-1l1-1c.3-.3.8-.3 1.1 0l7.4 7.5c.3.3.7.3 1 0l7.4-7.5c.3-.2.8-.2 1.1 0l1 1c.2.3.2.7 0 1z"})))),l.a.createElement("ul",{className:"menu__list"},k.map((function(e){return l.a.createElement(h,{key:e.label,item:e,onItemClick:function(){r(!1)},collapsible:p})})))))},k=t(404),_=t(408),N=t(376),O=t(87),j=t.n(O);a.default=function(e){var a=e.route,t=e.docsMetadata,n=e.location,s=a.routes.find((function(e){return Object(N.b)(n.pathname,e)}))||{},m=t.permalinkToSidebar,u=t.docsSidebars,d=t.version,b=m[s.path],v=Object(c.a)(),f=v.siteConfig,E=(f=void 0===f?{}:f).themeConfig,g=void 0===E?{}:E,h=v.isClient,O=g.sidebarCollapsible,w=void 0===O||O;return 0===Object.keys(s).length?l.a.createElement(_.default,e):l.a.createElement(o.a,{version:d,key:h},l.a.createElement("div",{className:j.a.docPage},b&&l.a.createElement("div",{className:j.a.docSidebarContainer},l.a.createElement(p,{docsSidebars:u,path:s.path,sidebar:b,sidebarCollapsible:w})),l.a.createElement("main",{className:j.a.docMainContainer},l.a.createElement(r.a,{components:k.a},Object(i.a)(a.routes)))))}},377:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(381),c=t(372),i=t(374),o=t(391),s=t(1),m=t(6),u=t(376),d=t(373),b=t.n(d),v=t(375),f=t(385),E=t(386),g=t(378),h=t(390),p=t(382),k=t(387),_=t(50),N=t.n(_);function O(e){var a=e.activeBasePath,t=e.to,n=e.href,r=e.label,c=e.activeClassName,o=void 0===c?"navbar__link--active":c,u=Object(m.a)(e,["activeBasePath","to","href","label","activeClassName"]),d=Object(i.a)(t),b=Object(i.a)(a);return l.a.createElement(v.a,Object(s.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:n}:Object.assign({isNavLink:!0,activeClassName:o,to:d},a?{isActive:function(e,a){return a.pathname.startsWith(b)}}:null),u),r)}function j(e){var a=e.items,t=e.position,n=e.className,r=Object(m.a)(e,["items","position","className"]),c=function(e,a){return void 0===a&&(a=!1),b()({"navbar__item navbar__link":!a,dropdown__link:a},e)};return a?l.a.createElement("div",{className:b()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},l.a.createElement(O,Object(s.a)({className:c(n)},r,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),r.label),l.a.createElement("ul",{className:"dropdown__menu"},a.map((function(e,a){var t=e.className,n=Object(m.a)(e,["className"]);return l.a.createElement("li",{key:a},l.a.createElement(O,Object(s.a)({activeClassName:"dropdown__link--active",className:c(t,!0)},n)))})))):l.a.createElement(O,Object(s.a)({className:c(n)},r))}function w(e){var a=e.items,t=e.className,n=Object(m.a)(e,["items","className"]),r=function(e,a){return void 0===a&&(a=!1),b()("menu__link",{"menu__link--sublist":a},e)};return a?l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(O,Object(s.a)({className:r(t,!0)},n),n.label),l.a.createElement("ul",{className:"menu__list"},a.map((function(e,a){var t=e.className,c=Object(m.a)(e,["className"]);return l.a.createElement("li",{className:"menu__list-item",key:a},l.a.createElement(O,Object(s.a)({activeClassName:"menu__link--active",className:r(t)},c,{onClick:n.onClick})))})))):l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(O,Object(s.a)({className:r(t)},n)))}var y=function(){var e,a,t=Object(c.a)(),r=t.siteConfig.themeConfig,i=r.navbar,o=(i=void 0===i?{}:i).title,m=i.links,d=void 0===m?[]:m,_=i.links_us,O=void 0===_?[]:_,y=i.hideOnScroll,C=void 0!==y&&y,L=r.disableDarkMode,S=void 0!==L&&L,M=t.isClient,x=Object(n.useState)(!1),B=x[0],T=x[1],D=Object(n.useState)(!1),I=D[0],P=D[1],R=Object(g.a)(),W=R.isDarkTheme,A=R.setLightTheme,F=R.setDarkTheme,H=Object(h.a)(C),U=H.navbarRef,$=H.isNavbarVisible,z=Object(k.a)(),J=z.logoLink,K=z.logoLinkProps,V=z.logoImageUrl,q=z.logoAlt;Object(p.a)(B);var G=Object(n.useCallback)((function(){T(!0)}),[T]),Q=Object(n.useCallback)((function(){T(!1)}),[T]),X=Object(n.useCallback)((function(e){return e.target.checked?F():A()}),[A,F]),Y=Object(u.d)();return Y&&Y.pathname.indexOf("/us")>=0&&(d=O,o="Steedos",J="/us/"),l.a.createElement("nav",{ref:U,className:b()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":B},e[N.a.navbarHideable]=C,e[N.a.navbarHidden]=!$,e))},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},null!=d&&0!==d.length&&l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:G,onKeyDown:G},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(v.a,Object(s.a)({className:"navbar__brand",to:J},K),null!=V&&l.a.createElement("img",{key:M,className:"navbar__logo",src:V,alt:q}),null!=o&&l.a.createElement("strong",{className:b()("navbar__title",(a={},a[N.a.hideLogoText]=I,a))},o)),d.filter((function(e){return"left"===e.position})).map((function(e,a){return l.a.createElement(j,Object(s.a)({},e,{key:a}))}))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},d.filter((function(e){return"right"===e.position})).map((function(e,a){return l.a.createElement(j,Object(s.a)({},e,{key:a}))})),!S&&l.a.createElement(E.a,{className:N.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:W,onChange:X}),l.a.createElement(f.a,{handleSearchBarToggle:P,isSearchBarExpanded:I}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Q}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(v.a,Object(s.a)({className:"navbar__brand",onClick:Q,to:J},K),null!=V&&l.a.createElement("img",{key:M,className:"navbar__logo",src:V,alt:q}),null!=o&&l.a.createElement("strong",{className:"navbar__title"},o)),!S&&B&&l.a.createElement(E.a,{"aria-label":"Dark mode toggle in sidebar",checked:W,onChange:X})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},d.map((function(e,a){return l.a.createElement(w,Object(s.a)({},e,{onClick:Q,key:a}))})))))))},C=t(51),L=t.n(C);function S(e){var a=e.to,t=e.href,n=e.label,r=Object(m.a)(e,["to","href","label"]),c=Object(i.a)(a);return l.a.createElement(v.a,Object(s.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},r),n)}var M=function(e){var a=e.url,t=e.alt;return l.a.createElement("img",{className:"footer__logo",alt:t,src:a})};var x=function(){var e=Object(c.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=t||{},r=n.copyright,o=n.icp,s=n.icpURL,m=n.links,u=void 0===m?[]:m,d=n.logo,v=void 0===d?{}:d,f=Object(i.a)(v.src);return t?l.a.createElement("footer",{className:b()("footer",{"footer--dark":"dark"===t.style})},l.a.createElement("div",{className:"container"},u&&u.length>0&&l.a.createElement("div",{className:"row footer__links"},u.map((function(e,a){return l.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?l.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(S,e))}))):null)}))),(v||r)&&l.a.createElement("div",{className:"text--center"},v&&v.src&&l.a.createElement("div",{className:"margin-bottom--sm"},v.href?l.a.createElement("a",{href:v.href,target:"_blank",rel:"noopener noreferrer",className:L.a.footerLogoLink},l.a.createElement(M,{alt:v.alt,url:f})):l.a.createElement(M,{alt:v.alt,url:f})),r,l.a.createElement("a",{href:s,target:"_blank",className:"footer__link-item"},o)))):null},B=t(481);t(52);a.a=function(e){const{siteConfig:a={}}=Object(c.a)(),{favicon:t,title:n,themeConfig:{image:s},url:m}=a,{route:u,children:d,title:b,noFooter:v,description:f,image:E,keywords:g,permalink:h,version:p}=e,k=b?`${b} | ${n}`:n,_=E||s,N=m+Object(i.a)(_),O=Object(i.a)(t);return l.a.createElement(B.a,{iconPath:"/assets/icons"},l.a.createElement(o.a,null,l.a.createElement(r.a,null,l.a.createElement("html",{lang:"en"}),l.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),k&&l.a.createElement("title",null,k),k&&l.a.createElement("meta",{property:"og:title",content:k}),t&&l.a.createElement("link",{rel:"shortcut icon",href:O}),f&&l.a.createElement("meta",{name:"description",content:f}),f&&l.a.createElement("meta",{property:"og:description",content:f}),p&&l.a.createElement("meta",{name:"docsearch:version",content:p}),g&&g.length&&l.a.createElement("meta",{name:"keywords",content:g.join(",")}),_&&l.a.createElement("meta",{property:"og:image",content:N}),_&&l.a.createElement("meta",{property:"twitter:image",content:N}),_&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),h&&l.a.createElement("meta",{property:"og:url",content:m+h}),l.a.createElement("meta",{name:"twitter:card",content:"summary"})),l.a.createElement(y,null),l.a.createElement("div",{className:"main-wrapper"},d),!v&&l.a.createElement(x,null)))}},395:function(e,a,t){"use strict";var n=t(1),l=t(0),r=t.n(l),c=t(373),i=t.n(c),o=t(405),s=t(398),m=t(396),u=t.n(m),d=t(397),b=t.n(d),v=t(372),f=t(378),E=t(53),g=t.n(E),h=/{([\d,-]+)}/,p=/title=".*"/;a.a=function(e){var a=e.children,t=e.className,c=e.metastring,m=Object(v.a)().siteConfig.themeConfig.prism,d=void 0===m?{}:m,E=Object(l.useState)(!1),k=E[0],_=E[1],N=Object(l.useState)(!1),O=N[0],j=N[1];Object(l.useEffect)((function(){j(!0)}),[]);var w=Object(l.useRef)(null),y=Object(l.useRef)(null),C=[],L="",S=Object(f.a)().isDarkTheme,M=d.theme||s.a,x=d.darkTheme||M,B=S?x:M;if(c&&h.test(c)){var T=c.match(h)[1];C=b.a.parse(T).filter((function(e){return e>0}))}c&&p.test(c)&&(L=c.match(p)[0].split("title=")[1].replace(/"+/g,"")),Object(l.useEffect)((function(){var e;return y.current&&(e=new u.a(y.current,{target:function(){return w.current}})),function(){e&&e.destroy()}}),[y.current,w.current]);var D=t&&t.replace(/language-/,"");!D&&d.defaultLanguage&&(D=d.defaultLanguage);var I=function(){window.getSelection().empty(),_(!0),setTimeout((function(){return _(!1)}),2e3)};return r.a.createElement(o.a,Object(n.a)({},o.b,{key:O,theme:B,code:a.replace(/\n$/,""),language:D}),(function(e){var a,t,l=e.className,c=e.style,o=e.tokens,s=e.getLineProps,m=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,L&&r.a.createElement("div",{style:c,className:g.a.codeBlockTitle},L),r.a.createElement("div",{className:g.a.codeBlockContent},r.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:i()(g.a.copyButton,(a={},a[g.a.copyButtonWithTitle]=L,a)),onClick:I},k?"Copied":"Copy"),r.a.createElement("pre",{className:i()(l,g.a.codeBlock,(t={},t[g.a.codeBlockWithTitle]=L,t))},r.a.createElement("div",{ref:w,className:g.a.codeBlockLines,style:c},o.map((function(e,a){1===e.length&&""===e[0].content&&(e[0].content="\n");var t=s({line:e,key:a});return C.includes(a+1)&&(t.className=t.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(n.a)({key:a},t),e.map((function(e,a){return r.a.createElement("span",Object(n.a)({key:a},m({token:e,key:a})))})))}))))))}))}},408:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(377);a.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);