(window.webpackJsonp=window.webpackJsonp||[]).push([[270,46,250],{488:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(496),s=t(510),c=t(619),m=t(500);var i=function(e){const{metadata:a}=e,{previousPage:t,nextPage:l}=a;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.a.createElement(m.a,{className:"pagination-nav__link",to:l},r.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};a.default=function(e){const{metadata:a,items:t}=e,{siteConfig:{title:l}}=Object(n.a)(),m="/"===a.permalink?l:"Blog",{blogDescription:o}=a;return r.a.createElement(s.a,{title:m,description:o},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},t.map((({content:e})=>r.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.a.createElement(e,null)))),r.a.createElement(i,{metadata:a})))))}},511:function(e,a,t){"use strict";var l=t(1),r=t(0),n=t.n(r),s=t(499),c=t(500),m=t(496),i=t(515),o=t(512),d=t(505),g=t(516),v=t(507),E=t(508),b=t(509),x=t(49),u=t.n(x),h=t(513),p=t(502),N="right";a.a=function(){var e,a,t=Object(m.a)(),x=t.siteConfig,f=x.customFields.navbar_items_us,y=void 0===f?[]:f,_=x.themeConfig,k=_.navbar,w=(k=void 0===k?{}:k).title,j=void 0===w?"":w,O=k.items,C=void 0===O?[]:O,M=k.hideOnScroll,B=void 0!==M&&M,I=k.style,L=void 0===I?void 0:I,D=_.colorMode,S=(D=void 0===D?{}:D).disableSwitch,T=void 0!==S&&S,P=t.isClient,R=Object(r.useState)(!1),V=R[0],A=R[1],H=Object(r.useState)(!1),z=H[0],F=H[1],J=Object(d.a)(),W=J.isDarkTheme,G=J.setLightTheme,K=J.setDarkTheme,Q=Object(g.a)(B),U=Q.navbarRef,q=Q.isNavbarVisible,X=Object(b.a)(),Y=X.logoLink,Z=X.logoLinkProps,$=X.logoImageUrl,ee=X.logoAlt,ae=Object(p.useLocation)();ae&&ae.pathname.startsWith("/us")&&(C=y,Y="/us/"),Object(v.a)(V);var te=Object(r.useCallback)((function(){A(!0)}),[A]),le=Object(r.useCallback)((function(){A(!1)}),[A]),re=Object(r.useCallback)((function(e){return e.target.checked?K():G()}),[G,K]),ne=Object(E.a)();Object(r.useEffect)((function(){ne===E.b.desktop&&A(!1)}),[ne]);var se=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:N)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:N)}))}}(C),ce=se.leftItems,me=se.rightItems;return n.a.createElement("nav",{ref:U,className:Object(s.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===L,"navbar--primary":"primary"===L,"navbar-sidebar--show":V},e[u.a.navbarHideable]=B,e[u.a.navbarHidden]=!q,e))},n.a.createElement("div",{className:"navbar__inner"},n.a.createElement("div",{className:"navbar__items"},null!=C&&0!==C.length&&n.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:te,onKeyDown:te},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},n.a.createElement("title",null,"Menu"),n.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),n.a.createElement(c.a,Object(l.a)({className:"navbar__brand",to:Y},Z),null!=$&&n.a.createElement("img",{key:P,className:"navbar__logo",src:$,alt:ee}),null!=j&&n.a.createElement("strong",{className:Object(s.a)("navbar__title",(a={},a[u.a.hideLogoText]=z,a))},j)),ce.map((function(e,a){return n.a.createElement(h.a,Object(l.a)({},e,{key:a}))}))),n.a.createElement("div",{className:"navbar__items navbar__items--right"},me.map((function(e,a){return n.a.createElement(h.a,Object(l.a)({},e,{key:a}))})),!T&&n.a.createElement(o.a,{className:u.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:W,onChange:re}),n.a.createElement(i.a,{handleSearchBarToggle:F,isSearchBarExpanded:z}))),n.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:le}),n.a.createElement("div",{className:"navbar-sidebar"},n.a.createElement("div",{className:"navbar-sidebar__brand"},n.a.createElement(c.a,Object(l.a)({className:"navbar__brand",onClick:le,to:Y},Z),null!=$&&n.a.createElement("img",{key:P,className:"navbar__logo",src:$,alt:ee}),null!=j&&n.a.createElement("strong",{className:"navbar__title"},j)),!T&&V&&n.a.createElement(o.a,{"aria-label":"Dark mode toggle in sidebar",checked:W,onChange:re})),n.a.createElement("div",{className:"navbar-sidebar__items"},n.a.createElement("div",{className:"menu"},n.a.createElement("ul",{className:"menu__list"},C.map((function(e,a){return n.a.createElement(h.a,Object(l.a)({mobile:!0},e,{onClick:le,key:a}))})))))))}},514:function(e,a,t){"use strict";var l=t(0),r=t.n(l);class n extends r.a.Component{render(){return r.a.createElement("div",null,r.a.createElement("div",{className:"bg-white"},r.a.createElement("div",{className:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},r.a.createElement("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8"},r.a.createElement("div",{className:"xl:col-span-1"},r.a.createElement("img",{className:"h-10",src:"/img/logo_platform_white.png",alt:"\u534e\u708e\u9b54\u65b9"}),r.a.createElement("p",{className:"mt-8 text-gray-500 text-base leading-6"},"\u534e\u708e\u9b54\u65b9\u662f\u65b0\u4e00\u4ee3\u4f4e\u4ee3\u7801\u5e73\u53f0\uff0c\u57fa\u4e8e\u5546\u4e1a\u667a\u80fd\u548c\u6a21\u578b\u9a71\u52a8\uff0c\u53ef\u4ee5\u6309\u7167\u4e1a\u52a1\u90e8\u95e8\u7684\u9700\u6c42\uff0c\u8f7b\u677e\u4fbf\u6377\u5730\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u3001\u4e2a\u6027\u5316\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),r.a.createElement("div",{className:"mt-8 flex"},r.a.createElement("a",{href:"tel://4008201612",className:"text-gray-400 hover:text-gray-500"},r.a.createElement("span",{className:"sr-only"},"Phone"),r.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",class:"phone w-6 h-6"},r.a.createElement("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}))),r.a.createElement("a",{href:"https://github.com/steedos/steedos-platform/",className:"ml-6 text-gray-400 hover:text-gray-500"},r.a.createElement("span",{className:"sr-only"},"GitHub"),r.a.createElement("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24"},r.a.createElement("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"}))))),r.a.createElement("div",{class:"mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"},r.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},r.a.createElement("div",null,r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e73\u53f0"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",null,r.a.createElement("a",{href:"/platform/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5e73\u53f0\u6982\u89c8")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/platform/lowcode/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/platform/cases",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5ba2\u6237\u6848\u4f8b")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/pricing/platform",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u7248\u672c\u4e0e\u62a5\u4ef7")))),r.a.createElement("div",{className:"mt-12 md:mt-0"},r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e94\u7528\u5e02\u573a"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/products/contract/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5408\u540c\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/products/sales/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u9500\u552e\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/products/purchase/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u91c7\u8d2d\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/products/cost/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8d39\u63a7\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/products/workflow/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6d41\u7a0b\u7ba1\u7406"))))),r.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},r.a.createElement("div",null,r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u89c6\u9891\u6f14\u793a"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",null,r.a.createElement("a",{href:"/videos/steedos-digital-transformation/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6570\u5b57\u5316\u8f6c\u578b")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/videos/steedos-platform-features/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801\u5f00\u53d1")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/videos/lesson-object/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u96f6\u4ee3\u7801\u5f00\u53d1")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/videos/workflow/admin-contracts",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u81ea\u5b9a\u4e49\u6d41\u7a0b")))),r.a.createElement("div",{className:"mt-12 md:mt-0"},r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5173\u4e8e"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",null,r.a.createElement("a",{href:"/company/about-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5173\u4e8e\u6211\u4eec")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/company/customers",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6210\u529f\u6848\u4f8b")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/company/contact-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8054\u7cfb\u6211\u4eec")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"tel://4008201612",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"400-820-1612"))))))),r.a.createElement("div",{className:"mt-12 border-t border-gray-200 pt-8"},r.a.createElement("p",{className:"text-base leading-6 text-gray-500 xl:text-center"},"\xa9 2020 \u534e\u708e\u8f6f\u4ef6. \u4fdd\u7559\u6240\u6709\u6743\u5229."),r.a.createElement("nav",{class:"-mx-5 -my-2 flex flex-wrap justify-center","aria-label":"Footer"},r.a.createElement("div",{class:"px-3 py-2"},r.a.createElement("a",{href:"/cn",class:"text-base text-gray-500 hover:text-gray-900"},"\u4e2d\u6587")),r.a.createElement("div",{class:"px-3 py-2"},r.a.createElement("a",{href:"https://www.steedos.org/",class:"text-base text-gray-500 hover:text-gray-900"},"English"))),r.a.createElement("div",{className:"flex justify-center mt-10"},r.a.createElement("div",{className:"text-center mr-8"},r.a.createElement("img",{className:"h-36 w-36 mb-2",src:"/assets/github/platform/cn/QR_wechat_developers.jpg",title:"\u5f00\u53d1\u4eba\u5458\u5fae\u4fe1\u7fa4"}),r.a.createElement("div",null,"\u5f00\u53d1\u4eba\u5458\u5fae\u4fe1\u7fa4")),r.a.createElement("div",{className:"text-center mr-8"},r.a.createElement("img",{className:"h-36 w-36 mb-2",src:"/assets/github/platform/cn/business_consulting.jpg",title:"\u5546\u52a1\u54a8\u8be2"}),r.a.createElement("div",null,"\u5546\u52a1\u54a8\u8be2")),r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{className:"h-36 w-36 mb-2",src:"/assets/github/platform/cn/public_number.jpg",title:"\u5fae\u4fe1\u516c\u4f17\u53f7"}),r.a.createElement("div",null,"\u5fae\u4fe1\u516c\u4f17\u53f7")))))))}}a.a=n}}]);