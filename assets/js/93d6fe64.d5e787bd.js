"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4994],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>v});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(v,s(s({ref:t},c),{},{components:o})):n.createElement(v,s({ref:t},c))}));function v(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5235:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const a={title:"Overview",sidebar_position:.1},s="What is Steedos DX Project?",i={unversionedId:"developer/setup/overview",id:"developer/setup/overview",title:"Overview",description:"Steedos DX Project is a workflow methodology for managing and developing Steedos applications, emphasizing a source-driven approach for more efficient version control and team collaboration. The Steedos DX project folder typically contains the following elements:",source:"@site/docs/developer/setup/overview.md",sourceDirName:"developer/setup",slug:"/developer/setup/overview",permalink:"/developer/setup/overview",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/setup/overview.md",tags:[],version:"current",sidebarPosition:.1,frontMatter:{title:"Overview",sidebar_position:.1},sidebar:"developer",previous:{title:"Setup Project",permalink:"/developer/setup/"},next:{title:"Sample Project on GitHub",permalink:"/developer/setup/sample-repository"}},l={},p=[{value:"Project Structure",id:"project-structure",level:2},{value:"steedos-packages",id:"steedos-packages",level:3},{value:"steedos-platform",id:"steedos-platform",level:3},{value:"package.json",id:"packagejson",level:3},{value:"Steedos DX Development Process",id:"steedos-dx-development-process",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-steedos-dx-project"},"What is Steedos DX Project?"),(0,r.kt)("p",null,"Steedos DX Project is a workflow methodology for managing and developing Steedos applications, emphasizing a source-driven approach for more efficient version control and team collaboration. The Steedos DX project folder typically contains the following elements:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Metadata"),": These encompass all non-coded configurations, such as object definitions, fields, layouts, processes, validation rules, etc.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source Code"),": This houses all source code for the application, including microservices, triggers, REST apis, visual components, micro pages, etc., organized within a structured directory for cleanliness and manageability.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resource Files"),": These might include static resources like images, style sheets, JavaScript files, etc., enhancing the user interface."))),(0,r.kt)("h2",{id:"project-structure"},"Project Structure"),(0,r.kt)("p",null,"A Steedos DX project has a specific project structure and source format. Source format uses a different set of files and file extensions from what the Metadata API uses. When you retrieve metadata from the org with the project retrieve start command, Steedos CLI stores it in source format in your project. When you deploy metadata, Steedos CLI converts it into the format that the Metadata API requires."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"my-project\n\u251c\u2500\u2500 steedos-packages\n\u2502   \u251c\u2500\u2500 package1\n\u2502   \u251c\u2500\u2500 package2\n\u2502   \u2514\u2500\u2500 package3\n\u251c\u2500\u2500 steedos-platform\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 moleculer.config.js\n")),(0,r.kt)("h3",{id:"steedos-packages"},"steedos-packages"),(0,r.kt)("p",null,"When you create your Steedos DX project, you can organize your metadata into logical groupings by creating multiple package directories locally. You can group similar code and source for an application or customization to better organize your team\u2019s repository. "),(0,r.kt)("h3",{id:"steedos-platform"},"steedos-platform"),(0,r.kt)("p",null,"To develop a package, you need to connect to a Steedos Platform deployment . Navigate to the 'steedos-platform' folder to launch a local Steedos Platform."),(0,r.kt)("h3",{id:"packagejson"},"package.json"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file is a fundamental element in virtually all projects that involve Node.js. It serves as a base source for defining various modules required in the project, among other configuration details. "),(0,r.kt)("h2",{id:"steedos-dx-development-process"},"Steedos DX Development Process"),(0,r.kt)("p",null,"This entire process underscores agile development, continuous integration, and continuous delivery, allowing teams to quickly respond to changes and improve delivery quality."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Environment Setup"),": Developers need to set up their development environment, involving the installation of the Steedos CLI, Visual Studio Code, and other necessary plugins.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pulling Source Code"),": Utilizing the Steedos CLI, developers pull the latest source code from the source repository.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Local Development and Debugging"),": Developers write and debug code in their local environments, using tools like the Nodejs Debugger for precision and robustness.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source Control"),": Changes should be regularly committed to a version control system (like Git), enabling the sharing of alterations and acquisition of code from team members.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Deployment and Testing"),": With the Steedos CLI, developers can deploy local changes to a test environment for further testing and validation.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code Review and Merging"),": Code reviews should be conducted before code is deployed to production. Once the code passes reviews and tests, it can be merged into the main branch and deployed to the production environment."))),(0,r.kt)("mermaid",{value:'graph TD\n  start["Start"] --\x3e setup["Set up Steedos DX environment"]\n  setup --\x3e init["Initialize project and version control"]\n  init --\x3e run["Run local development environment"]\n  run --\x3e develop["Develop new features"]\n  develop --\x3e testLocal["Local testing and debugging"]\n  testLocal --\x3e pushTest["Push code to the testing environment"]\n  pushTest --\x3e executeTest["Execute all tests in the testing environment"]\n  executeTest --\x3e review["Code review and quality checks"]\n  review --\x3e ready{"Ready to create a new version?"}\n  ready --\x3e yes{Yes}\n  ready --\x3e no{No}\n  no --\x3e continue["Continue development and testing"]\n  continue --\x3e ready\n  yes --\x3e beta["Create and release package beta version (npm)"]\n  beta --\x3e testBeta["Test new package version in the beta environment"]\n  testBeta --\x3e fix["Fix issues identified during beta testing"]\n  fix --\x3e releaseReady{"Ready for release?"}\n  releaseReady --\x3e releaseYes{Yes}\n  releaseReady --\x3e releaseNo{No}\n  releaseNo --\x3e fix\n  releaseYes --\x3e release["Release package (npm)"]\n  release --\x3e support["Package maintenance and customer support"]\n  support --\x3e endNode["End"]'}))}u.isMDXComponent=!0}}]);