(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{103:function(e,a,t){"use strict";t.r(a);t(13);var n=t(0),l=t.n(n),r=t(400),c=t(397);a.default=function(e){const{tags:a}=e,t={};Object.keys(a).forEach(e=>{const a=function(e){return e[0].toUpperCase()}(e);t[a]=t[a]||[],t[a].push(e)});const n=Object.entries(t).sort(([e],[a])=>e===a?0:e>a?1:-1).map(([e,t])=>l.a.createElement("div",{key:e},l.a.createElement("h3",null,e),t.map(e=>l.a.createElement(c.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")),l.a.createElement("hr",null))).filter(e=>null!=e);return l.a.createElement(r.a,{title:"Tags",description:"Blog Tags"},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--8 col--offset-2"},l.a.createElement("h1",null,"Tags"),l.a.createElement("div",{className:"margin-vert--lg"},n)))))}},400:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(405),c=t(395),s=t(398),m=t(414),i=t(1),o=t(399),b=t(396),d=t.n(b),E=t(397),u=t(408),g=t(409),v=t(401),_=t(413),h=t(406),p=t(410),k=t(95),f=t.n(k);function N({activeBasePath:e,to:a,href:t,label:n,activeClassName:r="navbar__link--active",...c}){const m=Object(s.a)(a),o=Object(s.a)(e);return l.a.createElement(E.a,Object(i.a)({},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{isNavLink:!0,activeClassName:r,to:m,...e?{isActive:(e,a)=>a.pathname.startsWith(o)}:null},c),n)}function w({items:e,position:a,className:t,...n}){const r=(e,a=!1)=>d()({"navbar__item navbar__link":!a,dropdown__link:a},e);return e?l.a.createElement("div",{className:d()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},l.a.createElement(N,Object(i.a)({className:r(t)},n,{onClick:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),n.label),l.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...a},t)=>l.a.createElement("li",{key:t},l.a.createElement(N,Object(i.a)({activeClassName:"dropdown__link--active",className:r(e,!0)},a)))))):l.a.createElement(N,Object(i.a)({className:r(t)},n))}function O({items:e,className:a,...t}){const n=(e,a=!1)=>d()("menu__link",{"menu__link--sublist":a},e);return e?l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(N,Object(i.a)({className:n(a,!0)},t),t.label),l.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...a},r)=>l.a.createElement("li",{className:"menu__list-item",key:r},l.a.createElement(N,Object(i.a)({activeClassName:"menu__link--active",className:n(e)},a,{onClick:t.onClick})))))):l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(N,Object(i.a)({className:n(a)},t)))}var j=function(){let{siteConfig:{themeConfig:{navbar:{title:e,links:a=[],links_us:t=[],hideOnScroll:r=!1}={},disableDarkMode:s=!1}},isClient:m}=Object(c.a)();const[b,k]=Object(n.useState)(!1),[N,j]=Object(n.useState)(!1),{isDarkTheme:y,setLightTheme:C,setDarkTheme:L}=Object(v.a)(),{navbarRef:x,isNavbarVisible:T}=Object(_.a)(r);let{logoLink:D,logoLinkProps:M,logoImageUrl:S,logoAlt:B}=Object(p.a)();Object(h.a)(b);const I=Object(n.useCallback)(()=>{k(!0)},[k]),A=Object(n.useCallback)(()=>{k(!1)},[k]),H=Object(n.useCallback)(e=>e.target.checked?L():C(),[C,L]),P=Object(o.d)();return P&&P.pathname.indexOf("/us")>=0&&(a=t,e="Steedos",D="/us/"),l.a.createElement("nav",{ref:x,className:d()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":b,[f.a.navbarHideable]:r,[f.a.navbarHidden]:!T})},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},null!=a&&0!==a.length&&l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:I,onKeyDown:I},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(E.a,Object(i.a)({className:"navbar__brand",to:D},M),null!=S&&l.a.createElement("img",{key:m,className:"navbar__logo",src:S,alt:B}),null!=e&&l.a.createElement("strong",{className:d()("navbar__title",{[f.a.hideLogoText]:N})},e)),a.filter(e=>"left"===e.position).map((e,a)=>l.a.createElement(w,Object(i.a)({},e,{key:a})))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},a.filter(e=>"right"===e.position).map((e,a)=>l.a.createElement(w,Object(i.a)({},e,{key:a}))),!s&&l.a.createElement(g.a,{className:f.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:H}),l.a.createElement(u.a,{handleSearchBarToggle:j,isSearchBarExpanded:N}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:A}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(E.a,Object(i.a)({className:"navbar__brand",onClick:A,to:D},M),null!=S&&l.a.createElement("img",{key:m,className:"navbar__logo",src:S,alt:B}),null!=e&&l.a.createElement("strong",{className:"navbar__title"},e)),!s&&b&&l.a.createElement(g.a,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:H})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},a.map((e,a)=>l.a.createElement(O,Object(i.a)({},e,{onClick:A,key:a}))))))))},y=t(96),C=t.n(y);function L({to:e,href:a,label:t,...n}){const r=Object(s.a)(e);return l.a.createElement(E.a,Object(i.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:r},n),t)}const x=({url:e,alt:a})=>l.a.createElement("img",{className:"footer__logo",alt:a,src:e});var T=function(){const e=Object(c.a)(),{siteConfig:a={}}=e,{themeConfig:t={}}=a,{footer:n}=t,{copyright:r,icp:m,icpURL:i,links:o=[],logo:b={}}=n||{},E=Object(s.a)(b.src);return n?l.a.createElement("footer",{className:d()("footer",{"footer--dark":"dark"===n.style})},l.a.createElement("div",{className:"container"},o&&o.length>0&&l.a.createElement("div",{className:"row footer__links"},o.map((e,a)=>l.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((e,a)=>e.html?l.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(L,e)))):null))),(b||r)&&l.a.createElement("div",{className:"text--center"},b&&b.src&&l.a.createElement("div",{className:"margin-bottom--sm"},b.href?l.a.createElement("a",{href:b.href,target:"_blank",rel:"noopener noreferrer",className:C.a.footerLogoLink},l.a.createElement(x,{alt:b.alt,url:E})):l.a.createElement(x,{alt:b.alt,url:E})),r,l.a.createElement("a",{href:i,target:"_blank",className:"footer__link-item"},m)))):null},D=t(503);t(97);a.a=function(e){const{siteConfig:a={}}=Object(c.a)(),{favicon:t,title:n,themeConfig:{image:i},url:o}=a,{route:b,children:d,title:E,noFooter:u,description:g,image:v,keywords:_,permalink:h,version:p}=e,k=E?`${E} | ${n}`:n,f=v||i,N=o+Object(s.a)(f),w=Object(s.a)(t);return l.a.createElement(D.a,{iconPath:"/assets/icons"},l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement("html",{lang:"en"}),l.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),k&&l.a.createElement("title",null,k),k&&l.a.createElement("meta",{property:"og:title",content:k}),t&&l.a.createElement("link",{rel:"shortcut icon",href:w}),g&&l.a.createElement("meta",{name:"description",content:g}),g&&l.a.createElement("meta",{property:"og:description",content:g}),p&&l.a.createElement("meta",{name:"docsearch:version",content:p}),_&&_.length&&l.a.createElement("meta",{name:"keywords",content:_.join(",")}),f&&l.a.createElement("meta",{property:"og:image",content:N}),f&&l.a.createElement("meta",{property:"twitter:image",content:N}),f&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),h&&l.a.createElement("meta",{property:"og:url",content:o+h}),l.a.createElement("meta",{name:"twitter:card",content:"summary"})),l.a.createElement(j,null),l.a.createElement("div",{className:"main-wrapper"},d),!u&&l.a.createElement(T,null)))}}}]);