(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{396:function(e,t,a){"use strict";a.r(t);a(432);var n=a(0),r=a.n(n),l=a(411),c=a(401),i=a(404),m=a(403);var o=function(e){var t=e.metadata;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous"),r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next"),r.a.createElement("h4",{className:"pagination-nav__link--label"},t.next.title," \xbb"))))};var s=function(e,t,a){var r=Object(n.useState)(void 0),l=r[0],c=r[1];Object(n.useEffect)((function(){var n=[],r=[];function i(){var i=function(){var e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){var r=n[e],l=r.getBoundingClientRect().top;l>=0&&l<=a&&(t=r),e+=1}return t}();if(i){var m=0,o=!1;for(r=document.getElementsByClassName(e);m<r.length&&!o;){var s=r[m],d=s.href,u=decodeURIComponent(d.substring(d.indexOf("#")+1));i.id===u&&(l&&l.classList.remove(t),s.classList.add(t),c(s),o=!0),m+=1}}}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}))},d=a(405),u=a(402),g=a.n(u),v=a(151),E=a.n(v),p="contents__link",h="contents__link--active",f=100;function b(e){var t=e.headings;return s(p,h,f),r.a.createElement("div",{className:"col col--3"},r.a.createElement("div",{className:E.a.tableOfContents},r.a.createElement(_,{headings:t})))}function _(e){var t=e.headings,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"contents contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:p,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(_,{isChild:!0,headings:e.children}))}))):null}t.default=function(e){var t=Object(c.a)().siteConfig,a=void 0===t?{}:t,n=a.url,m=a.title,s=e.content,u=s.metadata,v=u.description,p=u.title,h=u.permalink,f=u.editUrl,_=u.lastUpdatedAt,N=u.lastUpdatedBy,k=u.version,w=(u.sidebar,s.frontMatter),y=w.image,x=w.keywords,C=w.hide_title,L=w.hide_table_of_contents,M=n+Object(i.a)(y),O="url(/img/banner/default.png)";e.content.frontMatter.background&&(O=e.content.frontMatter.background.startsWith("/")||e.content.frontMatter.background.startsWith("http")?"url("+e.content.frontMatter.background+")":e.content.frontMatter.background);var I=Object(d.d)();return I&&I.pathname.indexOf("/us")>=0&&(m="Steedos"),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,p&&r.a.createElement("title",null,p," - ",m),v&&r.a.createElement("meta",{name:"description",content:v}),v&&r.a.createElement("meta",{property:"og:description",content:v}),x&&x.length&&r.a.createElement("meta",{name:"keywords",content:x.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:M}),y&&r.a.createElement("meta",{property:"twitter:image",content:M}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),h&&r.a.createElement("meta",{property:"og:url",content:n+h})),r.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n          .main-wrapper {\n            background: "+O+";  \n            background-repeat: no-repeat;\n            background-position: top;\n            background-size: contain;\n          }\n          @media (max-width: 996px) {\n            .main-wrapper {\n              background-size: auto;\n            }\n          }\n        "}}),r.a.createElement("div",{className:g()("padding-vert--lg",E.a.docItemWrapper)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:g()("col",E.a.docItemCol)},r.a.createElement("div",{className:E.a.docItemContainer},r.a.createElement("article",null,k&&r.a.createElement("span",{style:{verticalAlign:"top"},className:"badge badge--info"},"Version: ",k),!C&&r.a.createElement("header",null,r.a.createElement("h1",{className:E.a.docTitle},p)),r.a.createElement("div",{className:"markdown"},r.a.createElement(s,null))),(f||_||N)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},f&&r.a.createElement("a",{href:f,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(_||N)&&r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,"Last updated"," ",_&&r.a.createElement(r.a.Fragment,null,"on"," ",r.a.createElement("time",{dateTime:new Date(1e3*_).toISOString(),className:E.a.docLastUpdatedAt},new Date(1e3*_).toLocaleDateString()),N&&" "),N&&r.a.createElement(r.a.Fragment,null,"by ",r.a.createElement("strong",null,N)),!1))))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(o,{metadata:u})))),!L&&s.rightToc&&r.a.createElement(b,{headings:s.rightToc})))))}}}]);