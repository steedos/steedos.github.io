(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{369:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(377),c=t(393),i=t(375);var m=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Previous Post"),r.a.createElement("div",{className:"pagination-nav__link--label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Next Post"),r.a.createElement("div",{className:"pagination-nav__link--label"},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=a.frontMatter,n=a.metadata,i=n.title,o=n.description,s=n.nextItem,u=n.prevItem,v=n.editUrl;return r.a.createElement(l.a,{title:i,description:o},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(c.a,{frontMatter:t,metadata:n,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,v&&r.a.createElement("a",{href:v,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(s||u)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(m,{nextItem:s,prevItem:u}))))))}},377:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(381),c=t(372),i=t(374),m=t(391),o=t(1),s=t(6),u=t(376),v=t(373),d=t.n(v),b=t(375),g=t(385),E=t(386),f=t(378),p=t(390),_=t(382),h=t(387),N=t(50),k=t.n(N);function O(e){var a=e.activeBasePath,t=e.to,n=e.href,l=e.label,c=e.activeClassName,m=void 0===c?"navbar__link--active":c,u=Object(s.a)(e,["activeBasePath","to","href","label","activeClassName"]),v=Object(i.a)(t),d=Object(i.a)(a);return r.a.createElement(b.a,Object(o.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:n}:Object.assign({isNavLink:!0,activeClassName:m,to:v},a?{isActive:function(e,a){return a.pathname.startsWith(d)}}:null),u),l)}function j(e){var a=e.items,t=e.position,n=e.className,l=Object(s.a)(e,["items","position","className"]),c=function(e,a){return void 0===a&&(a=!1),d()({"navbar__item navbar__link":!a,dropdown__link:a},e)};return a?r.a.createElement("div",{className:d()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},r.a.createElement(O,Object(o.a)({className:c(n)},l,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),l.label),r.a.createElement("ul",{className:"dropdown__menu"},a.map((function(e,a){var t=e.className,n=Object(s.a)(e,["className"]);return r.a.createElement("li",{key:a},r.a.createElement(O,Object(o.a)({activeClassName:"dropdown__link--active",className:c(t,!0)},n)))})))):r.a.createElement(O,Object(o.a)({className:c(n)},l))}function y(e){var a=e.items,t=e.className,n=Object(s.a)(e,["items","className"]),l=function(e,a){return void 0===a&&(a=!1),d()("menu__link",{"menu__link--sublist":a},e)};return a?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(O,Object(o.a)({className:l(t,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},a.map((function(e,a){var t=e.className,c=Object(s.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(O,Object(o.a)({activeClassName:"menu__link--active",className:l(t)},c,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(O,Object(o.a)({className:l(t)},n)))}var w=function(){var e,a,t=Object(c.a)(),l=t.siteConfig.themeConfig,i=l.navbar,m=(i=void 0===i?{}:i).title,s=i.links,v=void 0===s?[]:s,N=i.links_us,O=void 0===N?[]:N,w=i.hideOnScroll,C=void 0!==w&&w,x=l.disableDarkMode,L=void 0!==x&&x,T=t.isClient,M=Object(n.useState)(!1),B=M[0],P=M[1],I=Object(n.useState)(!1),D=I[0],S=I[1],R=Object(f.a)(),A=R.isDarkTheme,F=R.setLightTheme,J=R.setDarkTheme,U=Object(p.a)(C),W=U.navbarRef,q=U.isNavbarVisible,z=Object(h.a)(),H=z.logoLink,$=z.logoLinkProps,K=z.logoImageUrl,V=z.logoAlt;Object(_.a)(B);var Y=Object(n.useCallback)((function(){P(!0)}),[P]),G=Object(n.useCallback)((function(){P(!1)}),[P]),Q=Object(n.useCallback)((function(e){return e.target.checked?J():F()}),[F,J]),X=Object(u.d)();return X&&X.pathname.indexOf("/us")>=0&&(v=O,m="Steedos",H="/us/"),r.a.createElement("nav",{ref:W,className:d()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":B},e[k.a.navbarHideable]=C,e[k.a.navbarHidden]=!q,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=v&&0!==v.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:Y,onKeyDown:Y},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(b.a,Object(o.a)({className:"navbar__brand",to:H},$),null!=K&&r.a.createElement("img",{key:T,className:"navbar__logo",src:K,alt:V}),null!=m&&r.a.createElement("strong",{className:d()("navbar__title",(a={},a[k.a.hideLogoText]=D,a))},m)),v.filter((function(e){return"left"===e.position})).map((function(e,a){return r.a.createElement(j,Object(o.a)({},e,{key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},v.filter((function(e){return"right"===e.position})).map((function(e,a){return r.a.createElement(j,Object(o.a)({},e,{key:a}))})),!L&&r.a.createElement(E.a,{className:k.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:A,onChange:Q}),r.a.createElement(g.a,{handleSearchBarToggle:S,isSearchBarExpanded:D}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:G}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(b.a,Object(o.a)({className:"navbar__brand",onClick:G,to:H},$),null!=K&&r.a.createElement("img",{key:T,className:"navbar__logo",src:K,alt:V}),null!=m&&r.a.createElement("strong",{className:"navbar__title"},m)),!L&&B&&r.a.createElement(E.a,{"aria-label":"Dark mode toggle in sidebar",checked:A,onChange:Q})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},v.map((function(e,a){return r.a.createElement(y,Object(o.a)({},e,{onClick:G,key:a}))})))))))},C=t(51),x=t.n(C);function L(e){var a=e.to,t=e.href,n=e.label,l=Object(s.a)(e,["to","href","label"]),c=Object(i.a)(a);return r.a.createElement(b.a,Object(o.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},l),n)}var T=function(e){var a=e.url,t=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:t,src:a})};var M=function(){var e=Object(c.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=t||{},l=n.copyright,m=n.icp,o=n.icpURL,s=n.links,u=void 0===s?[]:s,v=n.logo,b=void 0===v?{}:v,g=Object(i.a)(b.src);return t?r.a.createElement("footer",{className:d()("footer",{"footer--dark":"dark"===t.style})},r.a.createElement("div",{className:"container"},u&&u.length>0&&r.a.createElement("div",{className:"row footer__links"},u.map((function(e,a){return r.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?r.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(L,e))}))):null)}))),(b||l)&&r.a.createElement("div",{className:"text--center"},b&&b.src&&r.a.createElement("div",{className:"margin-bottom--sm"},b.href?r.a.createElement("a",{href:b.href,target:"_blank",rel:"noopener noreferrer",className:x.a.footerLogoLink},r.a.createElement(T,{alt:b.alt,url:g})):r.a.createElement(T,{alt:b.alt,url:g})),l,r.a.createElement("a",{href:o,target:"_blank",className:"footer__link-item"},m)))):null},B=t(481);t(52);a.a=function(e){const{siteConfig:a={}}=Object(c.a)(),{favicon:t,title:n,themeConfig:{image:o},url:s}=a,{route:u,children:v,title:d,noFooter:b,description:g,image:E,keywords:f,permalink:p,version:_}=e,h=d?`${d} | ${n}`:n,N=E||o,k=s+Object(i.a)(N),O=Object(i.a)(t);return r.a.createElement(B.a,{iconPath:"/assets/icons"},r.a.createElement(m.a,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),h&&r.a.createElement("title",null,h),h&&r.a.createElement("meta",{property:"og:title",content:h}),t&&r.a.createElement("link",{rel:"shortcut icon",href:O}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),_&&r.a.createElement("meta",{name:"docsearch:version",content:_}),f&&f.length&&r.a.createElement("meta",{name:"keywords",content:f.join(",")}),N&&r.a.createElement("meta",{property:"og:image",content:k}),N&&r.a.createElement("meta",{property:"twitter:image",content:k}),N&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+h}),p&&r.a.createElement("meta",{property:"og:url",content:s+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(w,null),r.a.createElement("div",{className:"main-wrapper"},v),!b&&r.a.createElement(M,null)))}},393:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(373),c=t.n(l),i=t(370),m=t(375),o=t(404),s=t(54),u=t.n(s),v=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,l,s,d=e.children,b=e.frontMatter,g=e.metadata,E=e.truncated,f=e.isBlogPostPage,p=void 0!==f&&f,_=g.date,h=g.permalink,N=g.tags,k=g.readingTime,O=b.author,j=b.title,y=b.author_url||b.authorURL,w=b.author_title||b.authorTitle,C=b.author_image_url||b.authorImageURL;return r.a.createElement("article",{className:p?void 0:"margin-bottom--xl"},(a=p?"h1":"h2",t=_.substring(0,10).split("-"),n=t[0],l=v[parseInt(t[1],10)-1],s=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},p?j:r.a.createElement(m.a,{to:h},j)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:_,className:u.a.blogPostDate},l," ",s,", ",n," ",k&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(k)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},C&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:y,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:C,alt:O})),r.a.createElement("div",{className:"avatar__intro"},O&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:y,target:"_blank",rel:"noreferrer noopener"},O)),r.a.createElement("small",{className:"avatar__subtitle"},w)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(i.a,{components:o.a},d)),(N.length>0||E)&&r.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),N.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),E&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(m.a,{to:g.permalink,"aria-label":"Read more about "+j},r.a.createElement("strong",null,"Read More")))))}},395:function(e,a,t){"use strict";var n=t(1),r=t(0),l=t.n(r),c=t(373),i=t.n(c),m=t(405),o=t(398),s=t(396),u=t.n(s),v=t(397),d=t.n(v),b=t(372),g=t(378),E=t(53),f=t.n(E),p=/{([\d,-]+)}/,_=/title=".*"/;a.a=function(e){var a=e.children,t=e.className,c=e.metastring,s=Object(b.a)().siteConfig.themeConfig.prism,v=void 0===s?{}:s,E=Object(r.useState)(!1),h=E[0],N=E[1],k=Object(r.useState)(!1),O=k[0],j=k[1];Object(r.useEffect)((function(){j(!0)}),[]);var y=Object(r.useRef)(null),w=Object(r.useRef)(null),C=[],x="",L=Object(g.a)().isDarkTheme,T=v.theme||o.a,M=v.darkTheme||T,B=L?M:T;if(c&&p.test(c)){var P=c.match(p)[1];C=d.a.parse(P).filter((function(e){return e>0}))}c&&_.test(c)&&(x=c.match(_)[0].split("title=")[1].replace(/"+/g,"")),Object(r.useEffect)((function(){var e;return w.current&&(e=new u.a(w.current,{target:function(){return y.current}})),function(){e&&e.destroy()}}),[w.current,y.current]);var I=t&&t.replace(/language-/,"");!I&&v.defaultLanguage&&(I=v.defaultLanguage);var D=function(){window.getSelection().empty(),N(!0),setTimeout((function(){return N(!1)}),2e3)};return l.a.createElement(m.a,Object(n.a)({},m.b,{key:O,theme:B,code:a.replace(/\n$/,""),language:I}),(function(e){var a,t,r=e.className,c=e.style,m=e.tokens,o=e.getLineProps,s=e.getTokenProps;return l.a.createElement(l.a.Fragment,null,x&&l.a.createElement("div",{style:c,className:f.a.codeBlockTitle},x),l.a.createElement("div",{className:f.a.codeBlockContent},l.a.createElement("button",{ref:w,type:"button","aria-label":"Copy code to clipboard",className:i()(f.a.copyButton,(a={},a[f.a.copyButtonWithTitle]=x,a)),onClick:D},h?"Copied":"Copy"),l.a.createElement("pre",{className:i()(r,f.a.codeBlock,(t={},t[f.a.codeBlockWithTitle]=x,t))},l.a.createElement("div",{ref:y,className:f.a.codeBlockLines,style:c},m.map((function(e,a){1===e.length&&""===e[0].content&&(e[0].content="\n");var t=o({line:e,key:a});return C.includes(a+1)&&(t.className=t.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:a},t),e.map((function(e,a){return l.a.createElement("span",Object(n.a)({key:a},s({token:e,key:a})))})))}))))))}))}}}]);