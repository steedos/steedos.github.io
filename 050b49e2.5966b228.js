(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{346:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(347),c=t(342),m=t(343),s=t(353),o=t(1),i=t(345),d=t(351),b=t(352),g=t(344),E=t.n(g),u=t(348),v=t(354),h=t(349),_=t(85),p=t.n(_);function f({to:e,href:a,label:t,position:n,...l}){const c=Object(m.a)(e);return r.a.createElement(i.a,Object(o.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:c},l),t)}var N=function(){const e=Object(c.a)(),{siteConfig:a={}}=e,{baseUrl:t,themeConfig:l={}}=a,{navbar:s={},disableDarkMode:g=!1}=l,{title:_,logo:N={},links:k=[],hideOnScroll:w=!1}=s,[j,O]=Object(n.useState)(!1),[y,C]=Object(n.useState)(!1),{isDarkTheme:x,setLightTheme:D,setDarkTheme:F}=Object(u.a)(),{navbarRef:L,isNavbarVisible:M}=Object(v.a)(w);Object(h.a)(j);const S=Object(n.useCallback)(()=>{O(!0)},[O]),T=Object(n.useCallback)(()=>{O(!1)},[O]),I=Object(n.useCallback)(e=>e.target.checked?F():D(),[D,F]),U=N.href||t,B=/http/.test(U)?{rel:"noopener noreferrer",target:"_blank"}:null,H=N.srcDark&&x?N.srcDark:N.src,$=Object(m.a)(H);return r.a.createElement("nav",{ref:L,className:E()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":j,[p.a.navbarHideable]:w,[p.a.navbarHidden]:!M})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:S,onKeyDown:S},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(i.a,Object(o.a)({className:"navbar__brand",to:U},B),null!=N&&r.a.createElement("img",{className:"navbar__logo",src:$,alt:N.alt}),null!=_&&r.a.createElement("strong",{className:y?p.a.hideLogoText:""},_)),k.filter(e=>"right"!==e.position).map((e,a)=>r.a.createElement(f,Object(o.a)({},e,{key:a})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},!g&&r.a.createElement(b.a,{className:p.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:x,onChange:I}),r.a.createElement(d.a,{handleSearchBarToggle:C,isSearchBarExpanded:y}),k.filter(e=>"right"===e.position).map((e,a)=>r.a.createElement(f,Object(o.a)({},e,{key:a}))))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:T}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(i.a,Object(o.a)({className:"navbar__brand",onClick:T,to:U},B),null!=N&&r.a.createElement("img",{className:"navbar__logo",src:$,alt:N.alt}),null!=_&&r.a.createElement("strong",null,_)),!g&&j&&r.a.createElement(b.a,{"aria-label":"Dark mode toggle in sidebar",checked:x,onChange:I})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},k.map((e,a)=>r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(f,Object(o.a)({className:"menu__link"},e,{onClick:T})))))))))},k=t(86),w=t.n(k);function j({to:e,href:a,label:t,...n}){const l=Object(m.a)(e);return r.a.createElement(i.a,Object(o.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:l},n),t)}const O=({url:e,alt:a})=>r.a.createElement("img",{className:"footer__logo",alt:a,src:e});var y=function(){const e=Object(c.a)(),{siteConfig:a={}}=e,{themeConfig:t={}}=a,{footer:n}=t,{copyright:l,links:s=[],logo:o={}}=n||{},i=Object(m.a)(o.src);return n?r.a.createElement("footer",{className:E()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((e,a)=>r.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,a)=>e.html?r.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(j,e)))):null))),(o||l)&&r.a.createElement("div",{className:"text--center"},o&&o.src&&r.a.createElement("div",{className:"margin-bottom--sm"},o.href?r.a.createElement("a",{href:o.href,target:"_blank",rel:"noopener noreferrer",className:w.a.footerLogoLink},r.a.createElement(O,{alt:o.alt,url:i})):r.a.createElement(O,{alt:o.alt,url:i})),l))):null},C=t(446);t(87);a.a=function(e){const{siteConfig:a={}}=Object(c.a)(),{favicon:t,title:n,themeConfig:{image:o},url:i}=a,{children:d,title:b,noFooter:g,description:E,image:u,keywords:v,permalink:h,version:_}=e,p=b?`${b} | ${n}`:n,f=u||o,k=i+Object(m.a)(f),w=Object(m.a)(t);return r.a.createElement(C.a,{iconPath:"/assets/sfds/icons"},r.a.createElement(s.a,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),p&&r.a.createElement("title",null,p),p&&r.a.createElement("meta",{property:"og:title",content:p}),t&&r.a.createElement("link",{rel:"shortcut icon",href:w}),E&&r.a.createElement("meta",{name:"description",content:E}),E&&r.a.createElement("meta",{property:"og:description",content:E}),_&&r.a.createElement("meta",{name:"docsearch:version",content:_}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),f&&r.a.createElement("meta",{property:"og:image",content:k}),f&&r.a.createElement("meta",{property:"twitter:image",content:k}),f&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${p}`}),h&&r.a.createElement("meta",{property:"og:url",content:i+h}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(N,null),r.a.createElement("div",{className:"main-wrapper"},d),!g&&r.a.createElement(y,null)))}},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(344),c=t.n(l),m=t(346),s=t(345),o=t(342),i=t(343),d=t(98),b=t.n(d);const g=[{title:r.a.createElement(r.a.Fragment,null,"\u4ec0\u4e48\u662f\u534e\u708e\u5e94\u7528\u5f15\u64ce?"),imageUrl:"img/undraw_building_blocks.svg",description:r.a.createElement(r.a.Fragment,null,"\u534e\u708e\u5e94\u7528\u5f15\u64ce\u662f\u4e00\u5957\u7ba1\u7406\u8f6f\u4ef6\u5f00\u53d1\u5de5\u5177\uff0c\u5f00\u53d1\u4eba\u5458\u53ea\u9700\u7f16\u5199\u4e1a\u52a1\u914d\u7f6e\u6587\u4ef6\uff0c\u63cf\u8ff0\u4e1a\u52a1\u5bf9\u8c61\uff0c\u5c31\u80fd\u751f\u6210\u5168\u529f\u80fd\u7684\u4e1a\u52a1\u7ba1\u7406\u7cfb\u7edf\u3002")},{title:r.a.createElement(r.a.Fragment,null,"\u534e\u708e\u5e94\u7528\u5f15\u64ce\u53ef\u4ee5\u505a\u4ec0\u4e48\uff1f"),imageUrl:"img/undraw_react.svg",description:r.a.createElement(r.a.Fragment,null,"\u5f00\u53d1\u4eba\u5458\u53ea\u9700\u7f16\u5199\u4e1a\u52a1\u914d\u7f6e\u6587\u4ef6\uff0c\u534e\u708e\u5e94\u7528\u5f15\u64ce\u81ea\u52a8\u751f\u6210\u624b\u673a\u3001\u5e73\u677f\u3001\u7535\u8111\u4e09\u5408\u4e00\u7684\u4e1a\u52a1\u53f0\u8d26\uff0c\u5305\u62ec\u7528\u6237\u767b\u5f55\u3001\u67e5\u8be2\u7edf\u8ba1\u3001\u6d41\u7a0b\u5ba1\u6279\u3001\u6743\u9650\u63a7\u5236\u7b49\u3002")},{title:r.a.createElement(r.a.Fragment,null,"\u9700\u6c42\u53d8\u66f4\u600e\u4e48\u529e\uff1f"),imageUrl:"img/undraw_programming.svg",description:r.a.createElement(r.a.Fragment,null,"\u5f53\u4e1a\u52a1\u9700\u6c42\u53d1\u751f\u53d8\u66f4\u65f6\uff0c\u5f00\u53d1\u4eba\u5458\u53ea\u9700\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff0c\u534e\u708e\u5e94\u7528\u5f15\u64ce\u4f1a\u91cd\u65b0\u7f16\u8bd1\u548c\u8fd0\u884c\uff0c\u4e1a\u52a1\u7cfb\u7edf\u754c\u9762\u4e0e\u529f\u80fd\u4e5f\u4f1a\u81ea\u52a8\u968f\u4e4b\u8c03\u6574\u3002")}];a.default=function(){const e=Object(o.a)(),{siteConfig:a={}}=e;return r.a.createElement(m.a,{title:a.title,description:a.tagline},r.a.createElement("header",{className:c()("hero hero--primary",b.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},"\u4e1a\u52a1\u5f00\u53d1\u5e73\u53f0"),r.a.createElement("p",{className:"hero__subtitle"},"\u534e\u708e\u7684\u5f00\u653e\u5f0f\u4e1a\u52a1\u5f00\u53d1\u5e73\u53f0\u652f\u6301\u4f60\u5927\u89c4\u6a21\u5f00\u5c55\u521b\u65b0\u3001\u5b9e\u73b0\u4e92\u8054\u548c\u6784\u5efa\u667a\u80fd\u3002"),r.a.createElement("div",{className:b.a.buttons},r.a.createElement(s.a,{className:c()("button button--secondary button--lg",b.a.getStarted),to:Object(i.a)("docs/developer/index")},"\u5feb\u901f\u5411\u5bfc")))),r.a.createElement("main",null,g&&g.length&&r.a.createElement("section",{className:b.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},g.map(({imageUrl:e,title:a,description:t},n)=>r.a.createElement("div",{key:n,className:c()("col col--4",b.a.feature)},e&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:b.a.featureImage,src:Object(i.a)(e),alt:a})),r.a.createElement("h3",null,a),r.a.createElement("p",null,t)))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3 padding-vert--lg"},r.a.createElement("h2",null,"\u5982\u4f55\u5feb\u901f\u5f00\u53d1\u5408\u540c\u7ba1\u7406\u7cfb\u7edf"),r.a.createElement("video",{width:"100%",height:"315",src:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/contracts-demo.mp4",controls:"controls"},"\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 video \u6807\u7b7e\u3002"),r.a.createElement("div",{className:"text--center padding-vert--lg"},r.a.createElement(s.a,{className:"button button--primary button--lg",to:Object(i.a)("docs/developer/index")},"\u4e86\u89e3\u66f4\u591a")))))))}}}]);