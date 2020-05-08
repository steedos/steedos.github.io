(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),o=(n(0),n(393)),i={title:"Web App Reference"},c={id:"plugins/plugin_webapp_reference",title:"Web App Reference",description:"## PluginClass\r",source:"@site/../docs/plugins/plugin_webapp_reference.md",permalink:"/plugins/plugin_webapp_reference"},l=[{value:"PluginClass",id:"pluginclass",children:[{value:"Example",id:"example",children:[]}]},{value:"Registry",id:"registry",children:[{value:"registerObjectHomeComponent",id:"registerobjecthomecomponent",children:[]}]},{value:"Exported Libraries and Functions",id:"exported-libraries-and-functions",children:[{value:"ReactSteedos",id:"reactsteedos",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"pluginclass"},"PluginClass"),Object(o.b)("p",null,"The PluginClass interface defines two methods used by the Steedos web app to ",Object(o.b)("inlineCode",{parentName:"p"},"initialize")," and ",Object(o.b)("inlineCode",{parentName:"p"},"uninitialize")," your plugin:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"class PluginClass {\n    /**\n    * initialize is called by the webapp when the plugin is first loaded.\n    * Receives the following:\n    * - registry - an instance of the registry tied to your plugin id\n    * - store - the Redux store of the web app.\n    */\n    initialize(registry, store)\n\n    /**\n    * uninitialize is called by the webapp if your plugin is uninstalled\n    */\n    uninitialize()\n}\n")),Object(o.b)("p",null,"Your plugin should implement this class and register it using the global ",Object(o.b)("inlineCode",{parentName:"p"},"registerPlugin")," method defined on the window by the webapp:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"window.registerPlugin('myplugin', new PluginClass());\n")),Object(o.b)("p",null,"Use the provided ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#registry"}),"registry")," to register components, post type overrides and callbacks. Use the store to access the global state of the web app, but note that you should use the registry to register any custom reducers your plugin might require."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"The entry point ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," of your application might contain:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import UserPopularity from './components/profile_popover/user_popularity';\nimport SomePost from './components/some_post';\nimport MenuIcon from './components/menu_icon';\nimport {openExampleModal} from './actions';\n\nclass PluginClass {\n    initialize(registry, store) {\n        registry.registerPopoverUserAttributesComponent(\n            UserPopularity,\n        );\n        registry.registerPostTypeComponent(\n            'custom_somepost',\n            SomePost,\n        );\n        registry.registerMainMenuAction(\n            'Plugin Menu Item',\n            () => store.dispatch(openExampleModal()),\n            mobile_icon: MenuIcon,\n        );\n    }\n\n    uninitialize() {\n        // No clean up required.\n    }\n}\n\nwindow.registerPlugin('myplugin', new PluginClass());\n")),Object(o.b)("p",null,"This will add a custom ",Object(o.b)("inlineCode",{parentName:"p"},"UserPopularity")," component to the profile popover, render a custom ",Object(o.b)("inlineCode",{parentName:"p"},"SomePost")," component for any post with the type ",Object(o.b)("inlineCode",{parentName:"p"},"custom_somepost"),", and insert a custom main menu item."),Object(o.b)("h2",{id:"registry"},"Registry"),Object(o.b)("p",null,"An instance of the plugin registry is passed to each plugin via the ",Object(o.b)("inlineCode",{parentName:"p"},"initialize")," callback."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"registerObjectHomeComponent(object_name, component)")),Object(o.b)("h3",{id:"registerobjecthomecomponent"},"registerObjectHomeComponent"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n    * Register a component that show a dashboard\n*/\nregisterObjectHomeComponent('dashboard', component)\n")),Object(o.b)("h2",{id:"exported-libraries-and-functions"},"Exported Libraries and Functions"),Object(o.b)("p",null,"The web app exports a number of libraries and functions on the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/Web/API/Window"}),"window")," object for plugins to use. To avoid bloating your plugin, we recommend depending on these using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/externals/"}),"Webpack externals")," or importing them manually from the window. Below is a list of the exposed libraries and functions:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Library"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Exported Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"react"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.React"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://reactjs.org/"}),"ReactJS"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"react-dom"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.ReactDOM"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://reactjs.org/react-dom.html"}),"ReactDOM"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"redux"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.Redux"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://redux.js.org/"}),"Redux"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"react-redux"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.ReactRedux"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/reactjs/react-redux"}),"React bindings for Redux"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"prop-types"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.PropTypes"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/prop-types"}),"PropTypes"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@steedos/react"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.ReactSteedos"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Steedos react components and utility functions")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@salesforce/design-system-react"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"window.ReactDesignSystem"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Salesforce react components and utility functions")))),Object(o.b)("h3",{id:"reactsteedos"},"ReactSteedos"),Object(o.b)("p",null,"Contains the following utility functions:"),Object(o.b)("h4",{id:"absoluteurlurl"},"absoluteUrl(url)"),Object(o.b)("p",null,"\u8fd4\u56de\u7edd\u5bf9\u8def\u5f84"),Object(o.b)("h4",{id:"usage-example"},"Usage Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const React = window.react;\nconst ReactSteedos = window['ReactSteedos']; // import the post utilities\nimport PropTypes from 'prop-types';\n\nexport default class DashboardComponent extends React.PureComponent {\n\n    // ...\n\n    render() {\n\n\n        return (\n            <ReactSteedos.Dashboard/>\n        );\n    }\n}\n")))}b.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(m,c({ref:t},p,{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);