(window.webpackJsonp=window.webpackJsonp||[]).push([[130,31,301],{186:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),s=t(389),n=t(406),c=t(381);a.default=function(e){const{metadata:a,items:t}=e,{allTagsPath:l,name:m,count:i}=a;return r.a.createElement(s.a,{title:`Posts tagged "${m}"`,description:`Blog | Tagged "${m}"`},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,i," ",function(e,a){return e>1?a+"s":a}(i,"post"),' tagged with "',m,'"'),r.a.createElement(c.a,{href:l},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},t.map(({content:e})=>r.a.createElement(n.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null))))))))}},390:function(e,a,t){"use strict";var l=t(1),r=t(0),s=t.n(r),n=t(382),c=t(381),m=t(378),i=t(393),o=t(391),g=t(384),d=t(395),x=t(386),E=t(387),b=t(388),h=t(49),v=t.n(h),N=t(394),u=t(383);a.a=function(){let{siteConfig:{customFields:{navbar_items_us:e=[]},themeConfig:{navbar:{title:a="",items:t=[],hideOnScroll:h=!1}={},colorMode:{disableSwitch:p=!1}={}}},isClient:y}=Object(m.a)();const[f,k]=Object(r.useState)(!1),[w,_]=Object(r.useState)(!1),{isDarkTheme:j,setLightTheme:O,setDarkTheme:C}=Object(g.a)(),{navbarRef:M,isNavbarVisible:T}=Object(d.a)(h);let{logoLink:I,logoLinkProps:L,logoImageUrl:B,logoAlt:S}=Object(b.a)();const D=Object(u.useLocation)();D&&D.pathname.indexOf("/us")>=0&&(t=e,I="/us/"),Object(x.a)(f);const V=Object(r.useCallback)(()=>{k(!0)},[k]),A=Object(r.useCallback)(()=>{k(!1)},[k]),P=Object(r.useCallback)(e=>e.target.checked?C():O(),[O,C]),H=Object(E.a)();Object(r.useEffect)(()=>{H===E.b.desktop&&k(!1)},[H]);const{leftItems:R,rightItems:z}=function(e){return{leftItems:e.filter(e=>{var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:"right")}),rightItems:e.filter(e=>{var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:"right")})}}(t);return s.a.createElement("nav",{ref:M,className:Object(n.a)("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":f,[v.a.navbarHideable]:h,[v.a.navbarHidden]:!T})},s.a.createElement("div",{className:"navbar__inner"},s.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&s.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:V,onKeyDown:V},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},s.a.createElement("title",null,"Menu"),s.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),s.a.createElement(c.a,Object(l.a)({className:"navbar__brand",to:I},L),null!=B&&s.a.createElement("img",{key:y,className:"navbar__logo",src:B,alt:S}),null!=a&&s.a.createElement("strong",{className:Object(n.a)("navbar__title",{[v.a.hideLogoText]:w})},a)),R.map((e,a)=>s.a.createElement(N.a,Object(l.a)({},e,{key:a})))),s.a.createElement("div",{className:"navbar__items navbar__items--right"},z.map((e,a)=>s.a.createElement(N.a,Object(l.a)({},e,{key:a}))),!p&&s.a.createElement(o.a,{className:v.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:j,onChange:P}),s.a.createElement(i.a,{handleSearchBarToggle:_,isSearchBarExpanded:w}))),s.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:A}),s.a.createElement("div",{className:"navbar-sidebar"},s.a.createElement("div",{className:"navbar-sidebar__brand"},s.a.createElement(c.a,Object(l.a)({className:"navbar__brand",onClick:A,to:I},L),null!=B&&s.a.createElement("img",{key:y,className:"navbar__logo",src:B,alt:S}),null!=a&&s.a.createElement("strong",{className:"navbar__title"},a)),!p&&f&&s.a.createElement(o.a,{"aria-label":"Dark mode toggle in sidebar",checked:j,onChange:P})),s.a.createElement("div",{className:"navbar-sidebar__items"},s.a.createElement("div",{className:"menu"},s.a.createElement("ul",{className:"menu__list"},t.map((e,a)=>s.a.createElement(N.a,Object(l.a)({mobile:!0},e,{onClick:A,key:a}))))))))}},392:function(e,a,t){"use strict";var l=t(4),r=t(0),s=t.n(r),n=function(e){function a(){return e.apply(this,arguments)||this}return Object(l.a)(a,e),a.prototype.render=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"relative bg-blue-800"},s.a.createElement("div",{className:"max-w-screen-xl mx-auto py-8 px-4 lg:py-12 lg:flex lg:items-center lg:justify-between"},s.a.createElement("div",{className:""},s.a.createElement("div",{className:"text-2xl mb-4 leading-6 font-semibold uppercase tracking-wider text-gray-300"},"\u5bf9\u4e8e\u534e\u708e\u9b54\u65b9\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u6709\u7591\u95ee\uff1f\uff1f"),s.a.createElement("div",{className:"my-6 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"},"\u5fae\u4fe1\u626b\u63cf\u4e8c\u7ef4\u7801\uff0c\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u4f1a\u4e3a\u60a8\u89e3\u7b54\u3002"),s.a.createElement("p",{className:"mt-3 mb-0 text-lg leading-7 text-gray-300"},"\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u62e5\u6709\u5341\u5e74\u4ee5\u4e0a\u7684\u7ba1\u7406\u8f6f\u4ef6\u5f00\u53d1\u7ecf\u9a8c\uff0c\u65e0\u8bba\u60a8\u8be2\u95ee\u6709\u5173\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u5e73\u53f0\u7684\u529f\u80fd\u3001\u5b9a\u4ef7\u3001\u5b9e\u65bd\u6216\u4efb\u4f55\u5176\u4ed6\u65b9\u9762\u7684\u95ee\u9898\uff0c\u4ed6\u4eec\u90fd\u5c06\u968f\u65f6\u51c6\u5907\u4e3a\u60a8\u63d0\u4f9b\u5e2e\u52a9\u3002")),s.a.createElement("div",{className:"flex lg:flex-shrink-0"},s.a.createElement("img",{className:"h-40 w-40 m-4",src:"/assets/contact_by_weixin.png"})))),s.a.createElement("div",{className:"bg-white"},s.a.createElement("div",{className:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},s.a.createElement("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8"},s.a.createElement("div",{className:"xl:col-span-1"},s.a.createElement("img",{className:"h-10",src:"/img/icon_blue.png",alt:"\u534e\u708e\u9b54\u65b9"}),s.a.createElement("p",{className:"mt-8 text-gray-500 text-base leading-6"},"\u534e\u708e\u9b54\u65b9\u662f\u65b0\u4e00\u4ee3\u4f4e\u4ee3\u7801\u5f00\u53d1\u5de5\u5177\uff0c\u57fa\u4e8e\u5546\u4e1a\u667a\u80fd\u548c\u6a21\u578b\u9a71\u52a8\uff0c\u53ea\u9700\u7f16\u5199\u5c11\u91cf\u4ee3\u7801\uff0c\u5c31\u80fd\u8f7b\u677e\u4fbf\u6377\u5730\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u7684\u4f01\u4e1a\u5e94\u7528\u3002"),s.a.createElement("div",{className:"mt-8 flex"},s.a.createElement("a",{href:"tel://4008201612",className:"text-gray-400 hover:text-gray-500"},s.a.createElement("span",{className:"sr-only"},"Phone"),s.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",class:"phone w-6 h-6"},s.a.createElement("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}))),s.a.createElement("a",{href:"https://github.com/steedos/",className:"ml-6 text-gray-400 hover:text-gray-500"},s.a.createElement("span",{className:"sr-only"},"GitHub"),s.a.createElement("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24"},s.a.createElement("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"}))))),s.a.createElement("div",{class:"mt-12 grid grid-cols-3 gap-8 xl:mt-0 xl:col-span-2"},s.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},s.a.createElement("div",null,s.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e73\u53f0"),s.a.createElement("ul",{className:"mt-4"},s.a.createElement("li",null,s.a.createElement("a",{href:"/platform/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5e73\u53f0\u6982\u89c8")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/platform/lowcode/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/platform/try",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8bd5\u7528")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/platform/pricing",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u7248\u672c\u4e0e\u62a5\u4ef7")))),s.a.createElement("div",{className:"mt-12 md:mt-0"},s.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e94\u7528\u6848\u4f8b"),s.a.createElement("ul",{className:"mt-4"},s.a.createElement("li",null,s.a.createElement("a",{href:"/oa/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u534f\u540c\u529e\u516c")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/products/contract/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5408\u540c\u7ba1\u7406")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/solutions/group/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u96c6\u56e2\u7ba1\u63a7")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/solutions/cost/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8d39\u63a7\u7ba1\u7406"))))),s.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},s.a.createElement("div",null,s.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5f00\u53d1\u4eba\u5458"),s.a.createElement("ul",{className:"mt-4"},s.a.createElement("li",null,s.a.createElement("a",{href:"/developer/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5feb\u901f\u5411\u5bfc")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/developer/deploy",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u672c\u5730\u90e8\u7f72")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/developer/object",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5f00\u53d1\u6587\u6863")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/developer/api",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u7cfb\u7edf\u96c6\u6210")))),s.a.createElement("div",{className:"mt-12 md:mt-0"},s.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u6280\u672f\u652f\u6301"),s.a.createElement("ul",{className:"mt-4"},s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"https://cn.steedos.com/",target:"_blank",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u767b\u5f55\u534e\u708e\u4e91")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/help/admin",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u7ba1\u7406\u5458\u5e2e\u52a9")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/help/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f7f\u7528\u5e2e\u52a9")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/help/download",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4e0b\u8f7d\u5ba2\u6237\u7aef"))))),s.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},s.a.createElement("div",null,s.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u89c6\u9891"),s.a.createElement("ul",{className:"mt-4"},s.a.createElement("li",null,s.a.createElement("a",{href:"/videos/steedos-digital-transformation/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6570\u5b57\u5316\u8f6c\u578b")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/videos/steedos-platform-features/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801\u5f00\u53d1")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/videos/lesson-object/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u96f6\u4ee3\u7801\u5f00\u53d1")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/videos/lesson-object-relationship/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5bf9\u8c61\u5173\u8054")))),s.a.createElement("div",{className:"mt-12 md:mt-0"},s.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5173\u4e8e"),s.a.createElement("ul",{className:"mt-4"},s.a.createElement("li",null,s.a.createElement("a",{href:"/company/about-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5173\u4e8e\u6211\u4eec")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/company/customers",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6210\u529f\u6848\u4f8b")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/company/contact-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8054\u7cfb\u6211\u4eec")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"tel://4008201612",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"400-820-1612"))))))),s.a.createElement("div",{className:"mt-12 border-t border-gray-200 pt-8"},s.a.createElement("p",{className:"text-base leading-6 text-gray-400 xl:text-center"},"\xa9 2020 \u534e\u708e\u8f6f\u4ef6. \u4fdd\u7559\u6240\u6709\u6743\u5229.")))))},a}(s.a.Component);a.a=n}}]);