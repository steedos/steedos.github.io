(window.webpackJsonp=window.webpackJsonp||[]).push([[40,250,353],{408:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(412),c=t(416),s=t(23),i=t(429),m=t(1),o=t(6),d=t(419),u=t(495),b=t(426),g=t(427),v=t(428),E=t(498),h=t(420),f=t(455),x=t(93),p=t.n(x);var N=function e(a,t){return"link"===a.type?(l=a.href,r=t,(n=function(e){return e.endsWith("/")?e:e+"/"})(l)===n(r)):"category"===a.type&&a.items.some((function(a){return e(a,t)}));var l,r,n};function y(e){var a,t,n,c=e.item,s=e.onItemClick,i=e.collapsible,u=e.activePath,b=Object(o.a)(e,["item","onItemClick","collapsible","activePath"]),g=c.items,v=c.label,E=N(c,u),h=(t=E,n=Object(l.useRef)(t),Object(l.useEffect)((function(){n.current=t}),[t]),n.current),f=Object(l.useState)((function(){return!!i&&(!E&&c.collapsed)})),x=f[0],y=f[1];Object(l.useEffect)((function(){E&&!h&&x&&y(!1)}),[E,h,x]);var k=Object(l.useCallback)((function(e){e.preventDefault(),y((function(e){return!e}))}),[y]);return 0===g.length?null:r.a.createElement("li",{className:Object(d.a)("menu__list-item",{"menu__list-item--collapsed":x}),key:v},r.a.createElement("a",Object(m.a)({className:Object(d.a)("menu__link",(a={"menu__link--sublist":i,"menu__link--active":i&&E},a[p.a.menuLinkText]=!i,a)),onClick:i?k:void 0,href:i?"#!":void 0},b),v),r.a.createElement("ul",{className:"menu__list"},g.map((function(e){return r.a.createElement(_,{tabIndex:x?"-1":"0",key:e.label,item:e,onItemClick:s,collapsible:i,activePath:u})}))))}function k(e){var a=e.item,t=e.onItemClick,l=e.activePath,n=(e.collapsible,Object(o.a)(e,["item","onItemClick","activePath","collapsible"])),c=a.href,s=a.label,i=N(a,l);return r.a.createElement("li",{className:"menu__list-item",key:s},r.a.createElement(h.a,Object(m.a)({className:Object(d.a)("menu__link",{"menu__link--active":i}),to:c},Object(f.a)(c)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},n),s))}function _(e){switch(e.item.type){case"category":return r.a.createElement(y,e);case"link":default:return r.a.createElement(k,e)}}var j=function(e){var a,t,n=e.path,s=e.sidebar,i=e.sidebarCollapsible,o=void 0===i||i,f=Object(l.useState)(!1),x=f[0],N=f[1],y=Object(c.a)(),k=y.siteConfig,j=(k=void 0===k?{}:k).themeConfig,w=(j=void 0===j?{}:j).navbar,O=(w=void 0===w?{}:w).title,C=void 0===O?"":O,M=w.hideOnScroll,I=void 0!==M&&M,L=y.isClient,P=Object(v.a)(),S=P.logoLink,B=P.logoLinkProps,D=P.logoImageUrl,R=P.logoAlt,T=Object(u.a)().isAnnouncementBarClosed,W=Object(E.a)().scrollY;Object(b.a)(x);var A=Object(g.a)();return Object(l.useEffect)((function(){A===g.b.desktop&&N(!1)}),[A]),r.a.createElement("div",{className:Object(d.a)(p.a.sidebar,(a={},a[p.a.sidebarWithHideableNavbar]=I,a))},I&&r.a.createElement(h.a,Object(m.a)({tabIndex:-1,className:p.a.sidebarLogo,to:S},B),null!=D&&r.a.createElement("img",{key:L,src:D,alt:R}),null!=C&&r.a.createElement("strong",null,C)),r.a.createElement("div",{className:Object(d.a)("menu","menu--responsive",p.a.menu,(t={"menu--show":x},t[p.a.menuWithAnnouncementBar]=!T&&0===W,t))},r.a.createElement("button",{"aria-label":x?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){N(!x)}},x?r.a.createElement("span",{className:Object(d.a)(p.a.sidebarMenuIcon,p.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:p.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},s.map((function(e){return r.a.createElement(_,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),N(!1)},collapsible:o,activePath:n})})))))},w=t(489),O=t(492),C=t(422),M=t(441),I=t(98),L=t.n(I);function P(e){var a=e.version,t=e.isLast?[a,"latest"]:[a];return r.a.createElement(M.a,null,r.a.createElement("meta",{name:"docsearch:version",content:t.join(",")}))}function S(e){var a,t,l=e.currentDocRoute,s=e.versionMetadata,m=e.children,o=Object(c.a)(),d=o.siteConfig,u=o.isClient,b=s.permalinkToSidebar,g=s.docsSidebars,v=s.version,E=s.isLast,h=b[l.path],f=g[h];return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{version:v,isLast:E}),r.a.createElement(i.a,{key:u},r.a.createElement("div",{className:L.a.docPage},f&&r.a.createElement("div",{className:L.a.docSidebarContainer,role:"complementary"},r.a.createElement(j,{key:h,sidebar:f,path:l.path,sidebarCollapsible:null===(a=null===(t=d.themeConfig)||void 0===t?void 0:t.sidebarCollapsible)||void 0===a||a})),r.a.createElement("main",{className:L.a.docMainContainer},r.a.createElement(n.a,{components:w.a},m)))))}a.default=function(e){var a=e.route.routes,t=e.versionMetadata,l=e.location,n=a.find((function(e){return Object(C.matchPath)(l.pathname,e)}));return n?r.a.createElement(S,{currentDocRoute:n,versionMetadata:t},Object(s.a)(a)):r.a.createElement(O.default,e)}},430:function(e,a,t){"use strict";var l=t(1),r=t(0),n=t.n(r),c=t(419),s=t(420),i=t(416),m=t(435),o=t(431),d=t(424),u=t(436),b=t(426),g=t(427),v=t(428),E=t(49),h=t.n(E),f=t(432),x=t(422),p="right";a.a=function(){var e,a,t=Object(i.a)(),E=t.siteConfig,N=E.customFields.navbar_items_us,y=void 0===N?[]:N,k=E.themeConfig,_=k.navbar,j=(_=void 0===_?{}:_).title,w=void 0===j?"":j,O=_.items,C=void 0===O?[]:O,M=_.hideOnScroll,I=void 0!==M&&M,L=_.style,P=void 0===L?void 0:L,S=k.colorMode,B=(S=void 0===S?{}:S).disableSwitch,D=void 0!==B&&B,R=t.isClient,T=Object(r.useState)(!1),W=T[0],A=T[1],F=Object(r.useState)(!1),H=F[0],V=F[1],U=Object(d.a)(),z=U.isDarkTheme,J=U.setLightTheme,G=U.setDarkTheme,K=Object(u.a)(I),Y=K.navbarRef,q=K.isNavbarVisible,Q=Object(v.a)(),X=Q.logoLink,Z=Q.logoLinkProps,$=Q.logoImageUrl,ee=Q.logoAlt,ae=Object(x.useLocation)();ae&&ae.pathname.startsWith("/us")&&(C=y,X="/us/"),Object(b.a)(W);var te=Object(r.useCallback)((function(){A(!0)}),[A]),le=Object(r.useCallback)((function(){A(!1)}),[A]),re=Object(r.useCallback)((function(e){return e.target.checked?G():J()}),[J,G]),ne=Object(g.a)();Object(r.useEffect)((function(){ne===g.b.desktop&&A(!1)}),[ne]);var ce=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:p)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:p)}))}}(C),se=ce.leftItems,ie=ce.rightItems;return n.a.createElement("nav",{ref:Y,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===P,"navbar--primary":"primary"===P,"navbar-sidebar--show":W},e[h.a.navbarHideable]=I,e[h.a.navbarHidden]=!q,e))},n.a.createElement("div",{className:"navbar__inner"},n.a.createElement("div",{className:"navbar__items"},null!=C&&0!==C.length&&n.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:te,onKeyDown:te},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},n.a.createElement("title",null,"Menu"),n.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),n.a.createElement(s.a,Object(l.a)({className:"navbar__brand",to:X},Z),null!=$&&n.a.createElement("img",{key:R,className:"navbar__logo",src:$,alt:ee}),null!=w&&n.a.createElement("strong",{className:Object(c.a)("navbar__title",(a={},a[h.a.hideLogoText]=H,a))},w)),se.map((function(e,a){return n.a.createElement(f.a,Object(l.a)({},e,{key:a}))}))),n.a.createElement("div",{className:"navbar__items navbar__items--right"},ie.map((function(e,a){return n.a.createElement(f.a,Object(l.a)({},e,{key:a}))})),!D&&n.a.createElement(o.a,{className:h.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:z,onChange:re}),n.a.createElement(m.a,{handleSearchBarToggle:V,isSearchBarExpanded:H}))),n.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:le}),n.a.createElement("div",{className:"navbar-sidebar"},n.a.createElement("div",{className:"navbar-sidebar__brand"},n.a.createElement(s.a,Object(l.a)({className:"navbar__brand",onClick:le,to:X},Z),null!=$&&n.a.createElement("img",{key:R,className:"navbar__logo",src:$,alt:ee}),null!=w&&n.a.createElement("strong",{className:"navbar__title"},w)),!D&&W&&n.a.createElement(o.a,{"aria-label":"Dark mode toggle in sidebar",checked:z,onChange:re})),n.a.createElement("div",{className:"navbar-sidebar__items"},n.a.createElement("div",{className:"menu"},n.a.createElement("ul",{className:"menu__list"},C.map((function(e,a){return n.a.createElement(f.a,Object(l.a)({mobile:!0},e,{onClick:le,key:a}))})))))))}},433:function(e,a,t){"use strict";var l=t(0),r=t.n(l);class n extends r.a.Component{render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"relative bg-gray-600"},r.a.createElement("div",{className:"max-w-screen-xl mx-auto py-8 px-4 lg:py-8 lg:flex lg:items-center lg:justify-between"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"text-xl mb-4 leading-6 font-semibold uppercase tracking-wider text-gray-300"},"\u5bf9\u4e8e\u534e\u708e\u9b54\u65b9\u6709\u7591\u95ee\uff1f\uff1f"),r.a.createElement("div",{className:"my-6 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"},"\u5fae\u4fe1\u626b\u63cf\u4e8c\u7ef4\u7801\uff0c\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u4f1a\u4e3a\u60a8\u89e3\u7b54\u3002"),r.a.createElement("p",{className:"mt-3 mb-0 text-lg leading-7 text-gray-300"},"\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u62e5\u6709\u5341\u5e74\u4ee5\u4e0a\u7684\u7ba1\u7406\u8f6f\u4ef6\u5f00\u53d1\u7ecf\u9a8c\uff0c\u65e0\u8bba\u60a8\u8be2\u95ee\u6709\u5173\u534e\u708e\u9b54\u65b9\u7684\u529f\u80fd\u3001\u5b9a\u4ef7\u3001\u5b9e\u65bd\u6216\u4efb\u4f55\u5176\u4ed6\u65b9\u9762\u7684\u95ee\u9898\uff0c\u4ed6\u4eec\u90fd\u5c06\u968f\u65f6\u51c6\u5907\u4e3a\u60a8\u63d0\u4f9b\u5e2e\u52a9\u3002"),r.a.createElement("div",{className:"mt-3"},r.a.createElement("a",{href:"/form/trial",class:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-black bg-blue-300 hover:bg-blue-400 hover:text-black focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"},"\u9884\u7ea6\u4ea7\u54c1\u6f14\u793a"))),r.a.createElement("div",{className:"flex lg:flex-shrink-0"},r.a.createElement("img",{className:"h-48 w-48 mt-4",src:"/assets/contact_by_weixin.png"})))),r.a.createElement("div",{className:"bg-white"},r.a.createElement("div",{className:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},r.a.createElement("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8"},r.a.createElement("div",{className:"xl:col-span-1"},r.a.createElement("img",{className:"h-10",src:"/img/logo_platform_white.png",alt:"\u534e\u708e\u9b54\u65b9"}),r.a.createElement("p",{className:"mt-8 text-gray-500 text-base leading-6"},"\u534e\u708e\u9b54\u65b9\u662f\u65b0\u4e00\u4ee3\u4f4e\u4ee3\u7801\u5e73\u53f0\uff0c\u57fa\u4e8e\u5546\u4e1a\u667a\u80fd\u548c\u6a21\u578b\u9a71\u52a8\uff0c\u53ef\u4ee5\u6309\u7167\u4e1a\u52a1\u90e8\u95e8\u7684\u9700\u6c42\uff0c\u8f7b\u677e\u4fbf\u6377\u5730\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u3001\u4e2a\u6027\u5316\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),r.a.createElement("div",{className:"mt-8 flex"},r.a.createElement("a",{href:"tel://4008201612",className:"text-gray-400 hover:text-gray-500"},r.a.createElement("span",{className:"sr-only"},"Phone"),r.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",class:"phone w-6 h-6"},r.a.createElement("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}))),r.a.createElement("a",{href:"https://github.com/steedos/steedos-platform/",className:"ml-6 text-gray-400 hover:text-gray-500"},r.a.createElement("span",{className:"sr-only"},"GitHub"),r.a.createElement("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24"},r.a.createElement("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"}))))),r.a.createElement("div",{class:"mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"},r.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},r.a.createElement("div",null,r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e73\u53f0"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",null,r.a.createElement("a",{href:"/platform/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5e73\u53f0\u6982\u89c8")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/platform/lowcode/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/platform/cases",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5ba2\u6237\u6848\u4f8b")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/pricing/platform",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u7248\u672c\u4e0e\u62a5\u4ef7")))),r.a.createElement("div",{className:"mt-12 md:mt-0"},r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e94\u7528\u5e02\u573a"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/products/contract/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5408\u540c\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/products/sales/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u9500\u552e\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/products/purchase/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u91c7\u8d2d\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/products/cost/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8d39\u63a7\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/products/workflow/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6d41\u7a0b\u7ba1\u7406"))))),r.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},r.a.createElement("div",null,r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u89c6\u9891\u6f14\u793a"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",null,r.a.createElement("a",{href:"/videos/steedos-digital-transformation/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6570\u5b57\u5316\u8f6c\u578b")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/videos/steedos-platform-features/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801\u5f00\u53d1")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/videos/lesson-object/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u96f6\u4ee3\u7801\u5f00\u53d1")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/videos/workflow/admin-contracts",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u81ea\u5b9a\u4e49\u6d41\u7a0b")))),r.a.createElement("div",{className:"mt-12 md:mt-0"},r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5173\u4e8e"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",null,r.a.createElement("a",{href:"/company/about-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5173\u4e8e\u6211\u4eec")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/company/customers",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6210\u529f\u6848\u4f8b")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/company/contact-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8054\u7cfb\u6211\u4eec")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"tel://4008201612",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"400-820-1612"))))))),r.a.createElement("div",{className:"mt-12 border-t border-gray-200 pt-8"},r.a.createElement("p",{className:"text-base leading-6 text-gray-500 xl:text-center"},"\xa9 2020 \u534e\u708e\u8f6f\u4ef6. \u4fdd\u7559\u6240\u6709\u6743\u5229."),r.a.createElement("nav",{class:"-mx-5 -my-2 flex flex-wrap justify-center","aria-label":"Footer"},r.a.createElement("div",{class:"px-3 py-2"},r.a.createElement("a",{href:"/cn",class:"text-base text-gray-500 hover:text-gray-900"},"\u4e2d\u6587")),r.a.createElement("div",{class:"px-3 py-2"},r.a.createElement("a",{href:"/us",class:"text-base text-gray-500 hover:text-gray-900"},"English")))))))}}a.a=n},492:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(429);a.default=function(){return r.a.createElement(n.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);