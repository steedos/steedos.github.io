(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{370:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(373),c=t(377),m=t(393),i=t(375);var o=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items,n=Object(l.a)().siteConfig.title,i="/"===a.permalink?n:"Blog";return r.a.createElement(c.a,{title:i,description:"Blog"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},t.map((function(e){var a=e.content;return r.a.createElement(m.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(o,{metadata:a})))))}},377:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(381),c=t(373),m=t(374),i=t(386),o=t(1),s=t(375),d=t(380),b=t(384),u=t(385),g=t(372),v=t.n(g),E=t(382),_=t(387),h=t(383),p=t(127),f=t.n(p),k=t(378);function N({activeBasePath:e,to:a,href:t,label:n,position:l,...c}){const i=Object(m.a)(a),d=Object(m.a)(e);return r.a.createElement(s.a,Object(o.a)({className:"navbar__item navbar__link"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:i,...e?{isActive:(e,a)=>a.pathname.startsWith(d)}:null},c),n)}var O=function(e){const{siteConfig:a={},isClient:t}=Object(c.a)(),{baseUrl:l,themeConfig:i={}}=a,{navbar:g={},disableDarkMode:p=!1}=i;let{title:O,logo:y={},links:j=[],hideOnScroll:w=!1}=g;const[C,x]=Object(n.useState)(!1),[M,D]=Object(n.useState)(!1),{isDarkTheme:L,setLightTheme:T,setDarkTheme:P}=Object(E.a)(),{navbarRef:S,isNavbarVisible:B}=Object(_.a)(w);Object(h.a)(C);const I=Object(n.useCallback)(()=>{x(!0)},[x]),A=Object(n.useCallback)(()=>{x(!1)},[x]),J=Object(n.useCallback)(e=>e.target.checked?P():T(),[T,P]);let R=y.href||l,F={};y.target?F={target:y.target}:Object(d.a)(R)||(F={rel:"noopener noreferrer",target:"_blank"});const H=y.srcDark&&L?y.srcDark:y.src,U=Object(m.a)(H),V=Object(k.d)();return V&&V.pathname.indexOf("/us/")>=0&&(j=g.links_us,O="Steedos",R="/docs/us/home"),r.a.createElement("nav",{ref:S,className:v()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":C,[f.a.navbarHideable]:w,[f.a.navbarHidden]:!B})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:I,onKeyDown:I},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(s.a,Object(o.a)({className:"navbar__brand",to:R},F),null!=y&&r.a.createElement("img",{key:t,className:"navbar__logo",src:U,alt:y.alt}),null!=O&&r.a.createElement("strong",{className:v()("navbar__title",{[f.a.hideLogoText]:M})},O)),j.filter(e=>"right"!==e.position).map((e,a)=>{return void 0!==e.items&&e.items.length>0?r.a.createElement("div",{class:"dropdown dropdown--hoverable"},r.a.createElement(N,Object(o.a)({},e,{key:a})),r.a.createElement("ul",{class:"dropdown__menu"},e.items.map((e,t)=>r.a.createElement(N,Object(o.a)({},e,{key:a+"-"+t}))))):r.a.createElement(N,Object(o.a)({},e,{key:a}))})),r.a.createElement("div",{className:"navbar__items navbar__items--right"},j.filter(e=>"right"===e.position).map((e,a)=>r.a.createElement(N,Object(o.a)({},e,{key:a}))),!p&&r.a.createElement(u.a,{className:f.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:L,onChange:J}),r.a.createElement(b.a,{handleSearchBarToggle:D,isSearchBarExpanded:M}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:A}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(s.a,Object(o.a)({className:"navbar__brand",onClick:A,to:R},F),null!=y&&r.a.createElement("img",{key:t,className:"navbar__logo",src:U,alt:y.alt}),null!=O&&r.a.createElement("strong",{className:"navbar__title"},O)),!p&&C&&r.a.createElement(u.a,{"aria-label":"Dark mode toggle in sidebar",checked:L,onChange:J})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},j.map((e,a)=>r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(N,Object(o.a)({className:"menu__link"},e,{onClick:A}))),void 0!==e.items&&e.items.length>0&&e.items.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:a+"-"+t},r.a.createElement(N,Object(o.a)({className:"menu__link",style:{paddingLeft:"3rem"}},e,{onClick:A})))))))))))},y=t(9),j=t(128),w=t.n(j);function C(e){var a=e.to,t=e.href,n=e.label,l=Object(y.a)(e,["to","href","label"]),c=Object(m.a)(a);return r.a.createElement(s.a,Object(o.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},l),n)}var x=function(e){var a=e.url,t=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:t,src:a})};var M=function(){var e=Object(c.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=t||{},l=n.copyright,i=n.links,o=void 0===i?[]:i,s=n.logo,d=void 0===s?{}:s,b=Object(m.a)(d.src);return t?r.a.createElement("footer",{className:v()("footer",{"footer--dark":"dark"===t.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((function(e,a){return r.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?r.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(C,e))}))):null)}))),(d||l)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:w.a.footerLogoLink},r.a.createElement(x,{alt:d.alt,url:b})):r.a.createElement(x,{alt:d.alt,url:b})),l))):null},D=t(436);t(129);a.a=function(e){var a=Object(c.a)().siteConfig,t=void 0===a?{}:a,n=t.favicon,o=t.title,s=t.themeConfig.image,d=t.url,b=(e.route,e.children),u=e.title,g=e.noFooter,v=e.description,E=e.image,_=e.keywords,h=e.permalink,p=e.version,f=u?u+" | "+o:o,k=E||s,N=d+Object(m.a)(k),y=Object(m.a)(n);return r.a.createElement(D.a,{iconPath:"/assets/icons"},r.a.createElement(i.a,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),f&&r.a.createElement("title",null,f),f&&r.a.createElement("meta",{property:"og:title",content:f}),n&&r.a.createElement("link",{rel:"shortcut icon",href:y}),v&&r.a.createElement("meta",{name:"description",content:v}),v&&r.a.createElement("meta",{property:"og:description",content:v}),p&&r.a.createElement("meta",{name:"docsearch:version",content:p}),_&&_.length&&r.a.createElement("meta",{name:"keywords",content:_.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:N}),k&&r.a.createElement("meta",{property:"twitter:image",content:N}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+f}),h&&r.a.createElement("meta",{property:"og:url",content:d+h}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(O,null),r.a.createElement("div",{className:"main-wrapper"},b),!g&&r.a.createElement(M,null)))}},393:function(e,a,t){"use strict";t(71);var n=t(0),r=t.n(n),l=t(372),c=t.n(l),m=t(371),i=t(375),o=t(400),s=t(130),d=t.n(s),b=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,l,s,u=e.children,g=e.frontMatter,v=e.metadata,E=e.truncated,_=e.isBlogPostPage,h=void 0!==_&&_,p=v.date,f=v.permalink,k=v.tags,N=g.author,O=g.title,y=g.author_url||g.authorURL,j=g.author_title||g.authorTitle,w=g.author_image_url||g.authorImageURL;return r.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(a=h?"h1":"h2",t=p.substring(0,10).split("-"),n=t[0],l=b[parseInt(t[1],10)-1],s=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:c()("margin-bottom--sm",d.a.blogPostTitle)},h?O:r.a.createElement(i.a,{to:f},O)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("time",{dateTime:p,className:d.a.blogPostDate},l," ",s,", ",n)),r.a.createElement("div",{className:"avatar margin-bottom--md"},w&&r.a.createElement("a",{className:"avatar__photo-link",href:y,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:w,alt:N})),r.a.createElement("div",{className:"avatar__intro"},N&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:y,target:"_blank",rel:"noreferrer noopener"},N)),r.a.createElement("small",{className:"avatar__subtitle"},j)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:o.a},u)),(k.length>0||E)&&r.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),k.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),E&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:v.permalink,"aria-label":"Read more about "+O},r.a.createElement("strong",null,"Read More")))))}}}]);