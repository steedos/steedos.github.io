(window.webpackJsonp=window.webpackJsonp||[]).push([[193,295],{367:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(373),m=t(383),s=t(400),c=t(374);var i=function(e){var a=e.metadata,t=a.previousPage,l=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.a.createElement(c.a,{className:"pagination-nav__link",to:l},r.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items,l=Object(n.a)().siteConfig.title,c="/"===a.permalink?l:"Blog",o=a.blogDescription;return r.a.createElement(m.a,{title:c,description:o},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},t.map((function(e){var a=e.content;return r.a.createElement(s.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(i,{metadata:a})))))}},384:function(e,a,t){"use strict";var l=t(1),r=t(0),n=t.n(r),m=t(376),s=t(374),c=t(373),i=t(387),o=t(385),g=t(378),d=t(389),E=t(379),v=t(380),b=t(381),u=t(49),h=t.n(u),x=t(388),p=t(375);a.a=function(){var e,a,t=Object(c.a)(),u=t.siteConfig,N=u.customFields.navbar_items_us,f=void 0===N?[]:N,y=u.themeConfig,_=y.navbar,k=(_=void 0===_?{}:_).title,w=void 0===k?"":k,j=_.items,O=void 0===j?[]:j,C=_.hideOnScroll,M=void 0!==C&&C,I=y.colorMode,T=(I=void 0===I?{}:I).disableSwitch,L=void 0!==T&&T,B=t.isClient,D=Object(r.useState)(!1),P=D[0],R=D[1],S=Object(r.useState)(!1),F=S[0],A=S[1],J=Object(g.a)(),V=J.isDarkTheme,z=J.setLightTheme,H=J.setDarkTheme,U=Object(d.a)(M),W=U.navbarRef,G=U.isNavbarVisible,K=Object(b.a)(),q=K.logoLink,Q=K.logoLinkProps,X=K.logoImageUrl,Y=K.logoAlt,Z=Object(p.useLocation)();Z&&Z.pathname.startsWith("/us")&&(O=f,q="/us/"),Object(E.a)(P);var $=Object(r.useCallback)((function(){R(!0)}),[R]),ee=Object(r.useCallback)((function(){R(!1)}),[R]),ae=Object(r.useCallback)((function(e){return e.target.checked?H():z()}),[z,H]),te=Object(v.a)();Object(r.useEffect)((function(){te===v.b.desktop&&R(!1)}),[te]);var le=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:"right")})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:"right")}))}}(O),re=le.leftItems,ne=le.rightItems;return n.a.createElement("nav",{ref:W,className:Object(m.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":P},e[h.a.navbarHideable]=M,e[h.a.navbarHidden]=!G,e))},n.a.createElement("div",{className:"navbar__inner"},n.a.createElement("div",{className:"navbar__items"},null!=O&&0!==O.length&&n.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:$,onKeyDown:$},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},n.a.createElement("title",null,"Menu"),n.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),n.a.createElement(s.a,Object(l.a)({className:"navbar__brand",to:q},Q),null!=X&&n.a.createElement("img",{key:B,className:"navbar__logo",src:X,alt:Y}),null!=w&&n.a.createElement("strong",{className:Object(m.a)("navbar__title",(a={},a[h.a.hideLogoText]=F,a))},w)),re.map((function(e,a){return n.a.createElement(x.a,Object(l.a)({},e,{key:a}))}))),n.a.createElement("div",{className:"navbar__items navbar__items--right"},ne.map((function(e,a){return n.a.createElement(x.a,Object(l.a)({},e,{key:a}))})),!L&&n.a.createElement(o.a,{className:h.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:V,onChange:ae}),n.a.createElement(i.a,{handleSearchBarToggle:A,isSearchBarExpanded:F}))),n.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:ee}),n.a.createElement("div",{className:"navbar-sidebar"},n.a.createElement("div",{className:"navbar-sidebar__brand"},n.a.createElement(s.a,Object(l.a)({className:"navbar__brand",onClick:ee,to:q},Q),null!=X&&n.a.createElement("img",{key:B,className:"navbar__logo",src:X,alt:Y}),null!=w&&n.a.createElement("strong",{className:"navbar__title"},w)),!L&&P&&n.a.createElement(o.a,{"aria-label":"Dark mode toggle in sidebar",checked:V,onChange:ae})),n.a.createElement("div",{className:"navbar-sidebar__items"},n.a.createElement("div",{className:"menu"},n.a.createElement("ul",{className:"menu__list"},O.map((function(e,a){return n.a.createElement(x.a,Object(l.a)({mobile:!0},e,{onClick:ee,key:a}))})))))))}},386:function(e,a,t){"use strict";var l=t(4),r=t(0),n=t.n(r),m=function(e){function a(){return e.apply(this,arguments)||this}return Object(l.a)(a,e),a.prototype.render=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"relative bg-blue-800"},n.a.createElement("div",{className:"max-w-screen-xl mx-auto py-8 px-4 lg:py-8 lg:flex lg:items-center lg:justify-between"},n.a.createElement("div",{className:""},n.a.createElement("div",{className:"text-2xl mb-4 leading-6 font-semibold uppercase tracking-wider text-gray-300"},"\u5bf9\u4e8e\u534e\u708e\u9b54\u65b9\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u6709\u7591\u95ee\uff1f\uff1f"),n.a.createElement("div",{className:"my-6 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"},"\u5fae\u4fe1\u626b\u63cf\u4e8c\u7ef4\u7801\uff0c\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u4f1a\u4e3a\u60a8\u89e3\u7b54\u3002"),n.a.createElement("p",{className:"mt-3 mb-0 text-lg leading-7 text-gray-300"},"\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u62e5\u6709\u5341\u5e74\u4ee5\u4e0a\u7684\u7ba1\u7406\u8f6f\u4ef6\u5f00\u53d1\u7ecf\u9a8c\uff0c\u65e0\u8bba\u60a8\u8be2\u95ee\u6709\u5173\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u5e73\u53f0\u7684\u529f\u80fd\u3001\u5b9a\u4ef7\u3001\u5b9e\u65bd\u6216\u4efb\u4f55\u5176\u4ed6\u65b9\u9762\u7684\u95ee\u9898\uff0c\u4ed6\u4eec\u90fd\u5c06\u968f\u65f6\u51c6\u5907\u4e3a\u60a8\u63d0\u4f9b\u5e2e\u52a9\u3002"),n.a.createElement("div",{className:"mt-3"},n.a.createElement("a",{href:"/form/trial",class:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-black bg-green-300 hover:bg-green-400 hover:text-black focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"},"\u9884\u7ea6\u4ea7\u54c1\u6f14\u793a"))),n.a.createElement("div",{className:"flex lg:flex-shrink-0"},n.a.createElement("img",{className:"h-48 w-48 mt-4",src:"/assets/contact_by_weixin.png"})))),n.a.createElement("div",{className:"bg-white"},n.a.createElement("div",{className:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},n.a.createElement("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8"},n.a.createElement("div",{className:"xl:col-span-1"},n.a.createElement("img",{className:"h-10",src:"/img/icon_blue.png",alt:"\u534e\u708e\u9b54\u65b9"}),n.a.createElement("p",{className:"mt-8 text-gray-500 text-base leading-6"},"\u534e\u708e\u9b54\u65b9\u662f\u65b0\u4e00\u4ee3\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff0c\u57fa\u4e8e\u5546\u4e1a\u667a\u80fd\u548c\u6a21\u578b\u9a71\u52a8\uff0c\u53ea\u9700\u7f16\u5199\u5c11\u91cf\u4ee3\u7801\uff0c\u5c31\u80fd\u8f7b\u677e\u4fbf\u6377\u5730\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u7684\u4f01\u4e1a\u5e94\u7528\u3002"),n.a.createElement("div",{className:"mt-8 flex"},n.a.createElement("a",{href:"tel://4008201612",className:"text-gray-400 hover:text-gray-500"},n.a.createElement("span",{className:"sr-only"},"Phone"),n.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",class:"phone w-6 h-6"},n.a.createElement("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}))),n.a.createElement("a",{href:"https://github.com/steedos/steedos-platform/",className:"ml-6 text-gray-400 hover:text-gray-500"},n.a.createElement("span",{className:"sr-only"},"GitHub"),n.a.createElement("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24"},n.a.createElement("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"}))))),n.a.createElement("div",{class:"mt-12 grid grid-cols-3 gap-8 xl:mt-0 xl:col-span-2"},n.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},n.a.createElement("div",null,n.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e73\u53f0"),n.a.createElement("ul",{className:"mt-4"},n.a.createElement("li",null,n.a.createElement("a",{href:"/platform/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5e73\u53f0\u6982\u89c8")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/platform/lowcode/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/platform/cases",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5ba2\u6237\u6848\u4f8b")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/platform/pricing",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u7248\u672c\u4e0e\u62a5\u4ef7")))),n.a.createElement("div",{className:"mt-12 md:mt-0"},n.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e94\u7528\u6848\u4f8b"),n.a.createElement("ul",{className:"mt-4"},n.a.createElement("li",null,n.a.createElement("a",{href:"/products/oa/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u534f\u540c\u529e\u516c")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/products/contract/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5408\u540c\u7ba1\u7406")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/solutions/group/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u96c6\u56e2\u7ba1\u63a7")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/solutions/cost/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8d39\u63a7\u7ba1\u7406"))))),n.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},n.a.createElement("div",null,n.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5f00\u53d1\u4eba\u5458"),n.a.createElement("ul",{className:"mt-4"},n.a.createElement("li",null,n.a.createElement("a",{href:"/developer/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5feb\u901f\u5411\u5bfc")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/developer/deploy",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u672c\u5730\u90e8\u7f72")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/developer/object",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5f00\u53d1\u6587\u6863")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/developer/api",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u7cfb\u7edf\u96c6\u6210")))),n.a.createElement("div",{className:"mt-12 md:mt-0"},n.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u6280\u672f\u652f\u6301"),n.a.createElement("ul",{className:"mt-4"},n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"https://cn.steedos.com/",target:"_blank",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u767b\u5f55\u534e\u708e\u4e91")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/help/admin",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u7ba1\u7406\u5458\u5e2e\u52a9")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/help/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f7f\u7528\u5e2e\u52a9")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/help/download",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4e0b\u8f7d\u5ba2\u6237\u7aef"))))),n.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},n.a.createElement("div",null,n.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u89c6\u9891"),n.a.createElement("ul",{className:"mt-4"},n.a.createElement("li",null,n.a.createElement("a",{href:"/videos/steedos-digital-transformation/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6570\u5b57\u5316\u8f6c\u578b")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/videos/steedos-platform-features/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801\u5f00\u53d1")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/videos/lesson-object/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u96f6\u4ee3\u7801\u5f00\u53d1")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/videos/lesson-object-relationship/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5bf9\u8c61\u5173\u8054")))),n.a.createElement("div",{className:"mt-12 md:mt-0"},n.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5173\u4e8e"),n.a.createElement("ul",{className:"mt-4"},n.a.createElement("li",null,n.a.createElement("a",{href:"/company/about-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5173\u4e8e\u6211\u4eec")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/company/customers",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6210\u529f\u6848\u4f8b")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/company/contact-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8054\u7cfb\u6211\u4eec")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"tel://4008201612",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"400-820-1612"))))))),n.a.createElement("div",{className:"mt-12 border-t border-gray-200 pt-8"},n.a.createElement("p",{className:"text-base leading-6 text-gray-400 xl:text-center"},"\xa9 2020 \u534e\u708e\u8f6f\u4ef6. \u4fdd\u7559\u6240\u6709\u6743\u5229.")))))},a}(n.a.Component);a.a=m},400:function(e,a,t){"use strict";var l=t(0),r=t.n(l),n=t(376),m=t(370),s=t(394),c=t(374),i=t(397),o=t(391),g=t(51),d=t.n(g),E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,l,g,v,b=e.children,u=e.frontMatter,h=e.metadata,x=e.truncated,p=e.isBlogPostPage,N=void 0!==p&&p,f=h.date,y=h.permalink,_=h.tags,k=h.readingTime,w=u.author,j=u.title,O=u.image,C=u.keywords,M=u.author_url||u.authorURL,I=u.author_title||u.authorTitle,T=u.author_image_url||u.authorImageURL,L=Object(o.a)(O,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,C&&C.length&&r.a.createElement("meta",{name:"keywords",content:C.join(",")}),O&&r.a.createElement("meta",{property:"og:image",content:L}),O&&r.a.createElement("meta",{property:"twitter:image",content:L}),O&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j})),r.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=f.substring(0,10).split("-"),l=t[0],g=E[parseInt(t[1],10)-1],v=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(n.a)("margin-bottom--sm",d.a.blogPostTitle)},N?j:r.a.createElement(c.a,{to:y},j)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:f,className:d.a.blogPostDate},g," ",v,", ",l," ",k&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(k)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},T&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:M,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:T,alt:w})),r.a.createElement("div",{className:"avatar__intro"},w&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:M,target:"_blank",rel:"noreferrer noopener"},w)),r.a.createElement("small",{className:"avatar__subtitle"},I)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:i.a},b)),(_.length>0||x)&&r.a.createElement("footer",{className:"row margin-vert--lg"},_.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),_.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),x&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:h.permalink,"aria-label":"Read more about "+j},r.a.createElement("strong",null,"Read More"))))))}}}]);