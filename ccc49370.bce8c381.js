(window.webpackJsonp=window.webpackJsonp||[]).push([[315,285],{449:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(469),s=t(522),c=t(460);var m=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},i=t(530);a.default=function(e){var a=e.content,t=a.frontMatter,l=a.metadata,c=l.title,o=l.description,g=l.nextItem,d=l.prevItem,v=l.editUrl,E=t.hide_table_of_contents;return r.a.createElement(n.a,{title:c,description:o},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(s.a,{frontMatter:t,metadata:l,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,v&&r.a.createElement("a",{href:v,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(g||d)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(m,{nextItem:g,prevItem:d}))),!E&&a.rightToc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(i.a,{headings:a.rightToc})))))}},470:function(e,a,t){"use strict";var l=t(1),r=t(0),n=t.n(r),s=t(459),c=t(460),m=t(456),i=t(474),o=t(471),g=t(465),d=t(475),v=t(466),E=t(467),u=t(468),b=t(49),h=t.n(b),x=t(472),p=t(461);const f="right";a.a=function(){let{siteConfig:{customFields:{navbar_items_us:e=[]},themeConfig:{navbar:{title:a="",items:t=[],hideOnScroll:b=!1,style:N}={},colorMode:{disableSwitch:y=!1}={}}},isClient:_}=Object(m.a)();const[k,w]=Object(r.useState)(!1),[O,j]=Object(r.useState)(!1),{isDarkTheme:C,setLightTheme:I,setDarkTheme:M}=Object(g.a)(),{navbarRef:L,isNavbarVisible:T}=Object(d.a)(b);let{logoLink:B,logoLinkProps:R,logoImageUrl:P,logoAlt:S}=Object(u.a)();const z=Object(p.useLocation)();z&&z.pathname.startsWith("/us")&&(t=e,B="/us/"),Object(v.a)(k);const A=Object(r.useCallback)((()=>{w(!0)}),[w]),D=Object(r.useCallback)((()=>{w(!1)}),[w]),F=Object(r.useCallback)((e=>e.target.checked?M():I()),[I,M]),J=Object(E.a)();Object(r.useEffect)((()=>{J===E.b.desktop&&w(!1)}),[J]);const{leftItems:U,rightItems:H}=function(e){return{leftItems:e.filter((e=>{var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:f)})),rightItems:e.filter((e=>{var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:f)}))}}(t);return n.a.createElement("nav",{ref:L,className:Object(s.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===N,"navbar--primary":"primary"===N,"navbar-sidebar--show":k,[h.a.navbarHideable]:b,[h.a.navbarHidden]:!T})},n.a.createElement("div",{className:"navbar__inner"},n.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&n.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:A,onKeyDown:A},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},n.a.createElement("title",null,"Menu"),n.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),n.a.createElement(c.a,Object(l.a)({className:"navbar__brand",to:B},R),null!=P&&n.a.createElement("img",{key:_,className:"navbar__logo",src:P,alt:S}),null!=a&&n.a.createElement("strong",{className:Object(s.a)("navbar__title",{[h.a.hideLogoText]:O})},a)),U.map(((e,a)=>n.a.createElement(x.a,Object(l.a)({},e,{key:a}))))),n.a.createElement("div",{className:"navbar__items navbar__items--right"},H.map(((e,a)=>n.a.createElement(x.a,Object(l.a)({},e,{key:a})))),!y&&n.a.createElement(o.a,{className:h.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:C,onChange:F}),n.a.createElement(i.a,{handleSearchBarToggle:j,isSearchBarExpanded:O}))),n.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:D}),n.a.createElement("div",{className:"navbar-sidebar"},n.a.createElement("div",{className:"navbar-sidebar__brand"},n.a.createElement(c.a,Object(l.a)({className:"navbar__brand",onClick:D,to:B},R),null!=P&&n.a.createElement("img",{key:_,className:"navbar__logo",src:P,alt:S}),null!=a&&n.a.createElement("strong",{className:"navbar__title"},a)),!y&&k&&n.a.createElement(o.a,{"aria-label":"Dark mode toggle in sidebar",checked:C,onChange:F})),n.a.createElement("div",{className:"navbar-sidebar__items"},n.a.createElement("div",{className:"menu"},n.a.createElement("ul",{className:"menu__list"},t.map(((e,a)=>n.a.createElement(x.a,Object(l.a)({mobile:!0},e,{onClick:D,key:a})))))))))}},473:function(e,a,t){"use strict";var l=t(0),r=t.n(l);class n extends r.a.Component{render(){return r.a.createElement("div",null,r.a.createElement("div",{className:"relative bg-gray-600"},r.a.createElement("div",{className:"max-w-screen-xl mx-auto py-8 px-4 lg:py-8 lg:flex lg:items-center lg:justify-between"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"text-xl mb-4 leading-6 font-semibold uppercase tracking-wider text-gray-300"},"\u5bf9\u4e8e\u534e\u708e\u9b54\u65b9\u6709\u7591\u95ee\uff1f\uff1f"),r.a.createElement("div",{className:"my-6 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"},"\u5fae\u4fe1\u626b\u63cf\u4e8c\u7ef4\u7801\uff0c\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u4f1a\u4e3a\u60a8\u89e3\u7b54\u3002"),r.a.createElement("p",{className:"mt-3 mb-0 text-lg leading-7 text-gray-300"},"\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u62e5\u6709\u5341\u5e74\u4ee5\u4e0a\u7684\u7ba1\u7406\u8f6f\u4ef6\u5f00\u53d1\u7ecf\u9a8c\uff0c\u65e0\u8bba\u60a8\u8be2\u95ee\u6709\u5173\u534e\u708e\u9b54\u65b9\u7684\u529f\u80fd\u3001\u5b9a\u4ef7\u3001\u5b9e\u65bd\u6216\u4efb\u4f55\u5176\u4ed6\u65b9\u9762\u7684\u95ee\u9898\uff0c\u4ed6\u4eec\u90fd\u5c06\u968f\u65f6\u51c6\u5907\u4e3a\u60a8\u63d0\u4f9b\u5e2e\u52a9\u3002"),r.a.createElement("div",{className:"mt-3"},r.a.createElement("a",{href:"/form/trial",class:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-black bg-blue-300 hover:bg-blue-400 hover:text-black focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"},"\u9884\u7ea6\u4ea7\u54c1\u6f14\u793a"))),r.a.createElement("div",{className:"flex lg:flex-shrink-0"},r.a.createElement("img",{className:"h-48 w-48 mt-4",src:"/assets/contact_by_weixin.png"})))),r.a.createElement("div",{className:"bg-white"},r.a.createElement("div",{className:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},r.a.createElement("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8"},r.a.createElement("div",{className:"xl:col-span-1"},r.a.createElement("img",{className:"h-10",src:"/img/logo_platform_white.png",alt:"\u534e\u708e\u9b54\u65b9"}),r.a.createElement("p",{className:"mt-8 text-gray-500 text-base leading-6"},"\u534e\u708e\u9b54\u65b9\u662f\u65b0\u4e00\u4ee3\u4f4e\u4ee3\u7801\u5e73\u53f0\uff0c\u57fa\u4e8e\u5546\u4e1a\u667a\u80fd\u548c\u6a21\u578b\u9a71\u52a8\uff0c\u53ef\u4ee5\u6309\u7167\u4e1a\u52a1\u90e8\u95e8\u7684\u9700\u6c42\uff0c\u8f7b\u677e\u4fbf\u6377\u5730\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u3001\u4e2a\u6027\u5316\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),r.a.createElement("div",{className:"mt-8 flex"},r.a.createElement("a",{href:"tel://4008201612",className:"text-gray-400 hover:text-gray-500"},r.a.createElement("span",{className:"sr-only"},"Phone"),r.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",class:"phone w-6 h-6"},r.a.createElement("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}))),r.a.createElement("a",{href:"https://github.com/steedos/steedos-platform/",className:"ml-6 text-gray-400 hover:text-gray-500"},r.a.createElement("span",{className:"sr-only"},"GitHub"),r.a.createElement("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24"},r.a.createElement("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"}))))),r.a.createElement("div",{class:"mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"},r.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},r.a.createElement("div",null,r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e73\u53f0"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",null,r.a.createElement("a",{href:"/platform/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5e73\u53f0\u6982\u89c8")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/platform/lowcode/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/platform/cases",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5ba2\u6237\u6848\u4f8b")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/pricing/platform",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u7248\u672c\u4e0e\u62a5\u4ef7")))),r.a.createElement("div",{className:"mt-12 md:mt-0"},r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e94\u7528\u5e02\u573a"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/products/contract/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5408\u540c\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/products/sales/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u9500\u552e\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/products/purchase/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u91c7\u8d2d\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/products/cost/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8d39\u63a7\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/products/workflow/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6d41\u7a0b\u7ba1\u7406"))))),r.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},r.a.createElement("div",null,r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u89c6\u9891\u6f14\u793a"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",null,r.a.createElement("a",{href:"/videos/steedos-digital-transformation/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6570\u5b57\u5316\u8f6c\u578b")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/videos/steedos-platform-features/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801\u5f00\u53d1")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/videos/lesson-object/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u96f6\u4ee3\u7801\u5f00\u53d1")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/videos/workflow/admin-contracts",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u81ea\u5b9a\u4e49\u6d41\u7a0b")))),r.a.createElement("div",{className:"mt-12 md:mt-0"},r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5173\u4e8e"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",null,r.a.createElement("a",{href:"/company/about-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5173\u4e8e\u6211\u4eec")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/company/customers",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6210\u529f\u6848\u4f8b")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/company/contact-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8054\u7cfb\u6211\u4eec")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"tel://4008201612",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"400-820-1612"))))))),r.a.createElement("div",{className:"mt-12 border-t border-gray-200 pt-8"},r.a.createElement("p",{className:"text-base leading-6 text-gray-500 xl:text-center"},"\xa9 2020 \u534e\u708e\u8f6f\u4ef6. \u4fdd\u7559\u6240\u6709\u6743\u5229."),r.a.createElement("nav",{class:"-mx-5 -my-2 flex flex-wrap justify-center","aria-label":"Footer"},r.a.createElement("div",{class:"px-3 py-2"},r.a.createElement("a",{href:"/cn",class:"text-base text-gray-500 hover:text-gray-900"},"\u4e2d\u6587")),r.a.createElement("div",{class:"px-3 py-2"},r.a.createElement("a",{href:"https://www.steedos.org/",class:"text-base text-gray-500 hover:text-gray-900"},"English")))))))}}a.a=n},522:function(e,a,t){"use strict";var l=t(0),r=t.n(l),n=t(459),s=t(451),c=t(482),m=t(460),i=t(528),o=t(481),g=t(52),d=t.n(g),v=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,l,g,E,u=e.children,b=e.frontMatter,h=e.metadata,x=e.truncated,p=e.isBlogPostPage,f=void 0!==p&&p,N=h.date,y=h.permalink,_=h.tags,k=h.readingTime,w=b.author,O=b.title,j=b.image,C=b.keywords,I=b.author_url||b.authorURL,M=b.author_title||b.authorTitle,L=b.author_image_url||b.authorImageURL,T=Object(o.a)(j,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,C&&C.length&&r.a.createElement("meta",{name:"keywords",content:C.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:T}),j&&r.a.createElement("meta",{property:"twitter:image",content:T}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+O})),r.a.createElement("article",{className:f?void 0:"margin-bottom--xl"},(a=f?"h1":"h2",t=N.substring(0,10).split("-"),l=t[0],g=v[parseInt(t[1],10)-1],E=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(n.a)("margin-bottom--sm",d.a.blogPostTitle)},f?O:r.a.createElement(m.a,{to:y},O)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:N,className:d.a.blogPostDate},g," ",E,", ",l," ",k&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(k)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},L&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:I,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:L,alt:w})),r.a.createElement("div",{className:"avatar__intro"},w&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:I,target:"_blank",rel:"noreferrer noopener"},w)),r.a.createElement("small",{className:"avatar__subtitle"},M)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(s.a,{components:i.a},u)),(_.length>0||x)&&r.a.createElement("footer",{className:"row margin-vert--lg"},_.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),_.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),x&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(m.a,{to:h.permalink,"aria-label":"Read more about "+O},r.a.createElement("strong",null,"Read More"))))))}},530:function(e,a,t){"use strict";var l=t(0),r=t.n(l);var n=function(e,a,t){var r=Object(l.useState)(void 0),n=r[0],s=r[1];Object(l.useEffect)((function(){var l,r;function c(){var c=function(){var e=0,a=null;for(l=document.getElementsByClassName("anchor");e<l.length&&!a;){var r=l[e],n=r.getBoundingClientRect().top;n>=0&&n<=t&&(a=r),e+=1}return a}();if(c){var m=0,i=!1;for(r=document.getElementsByClassName(e);m<r.length&&!i;){var o=r[m],g=o.href,d=decodeURIComponent(g.substring(g.indexOf("#")+1));c.id===d&&(n&&n.classList.remove(a),o.classList.add(a),s(o),i=!0),m+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}))},s=t(51),c=t.n(s),m="table-of-contents__link";function i(e){var a=e.headings,t=e.isChild;return a.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(i,{isChild:!0,headings:e.children}))}))):null}a.a=function(e){var a=e.headings;return n(m,"table-of-contents__link--active",100),r.a.createElement("div",{className:c.a.tableOfContents},r.a.createElement(i,{headings:a}))}}}]);