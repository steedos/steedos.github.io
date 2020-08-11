(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{338:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),c=(n(0),n(375)),b={title:"Ubuntu \u90e8\u7f72"},o={id:"developer/deploy_ubuntu",title:"Ubuntu \u90e8\u7f72",description:"\u672c\u6559\u7a0b\u4ee5 [steedos-project-oa](https://github.com/steedos/steedos-project-oa) \u4e3a\u4f8b\uff0c\u6307\u5bfc\u4f60\u5982\u4f55\u5728 Ubuntu \u7cfb\u7edf\u4e2d\u90e8\u7f72\u548c\u8fd0\u884c\u57fa\u4e8e\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u7684\u9879\u76ee\u3002",source:"@site/../docs/developer/deploy_ubuntu.md",permalink:"/developer/deploy_ubuntu"},l=[{value:"\u5b89\u88c5 Ubuntu",id:"\u5b89\u88c5-ubuntu",children:[]},{value:"\u5b89\u88c5 git",id:"\u5b89\u88c5-git",children:[]},{value:"\u5b89\u88c5 node-v12.x",id:"\u5b89\u88c5-node-v12x",children:[]},{value:"\u5b89\u88c5 pm2",id:"\u5b89\u88c5-pm2",children:[]},{value:"\u5b89\u88c5 mongodb \u6570\u636e\u5e93",id:"\u5b89\u88c5-mongodb-\u6570\u636e\u5e93",children:[{value:"\u4f7f\u7528\u96c6\u7fa4\u6a21\u5f0f\u542f\u52a8\u6570\u636e\u5e93",id:"\u4f7f\u7528\u96c6\u7fa4\u6a21\u5f0f\u542f\u52a8\u6570\u636e\u5e93",children:[]}]},{value:"\u514b\u9686\u5e76\u542f\u52a8\u9879\u76ee",id:"\u514b\u9686\u5e76\u542f\u52a8\u9879\u76ee",children:[]},{value:"\u5b89\u88c5 code-server (\u53ef\u9009)",id:"\u5b89\u88c5-code-server-\u53ef\u9009",children:[{value:"\u4f7f\u7528 vs code \u63d0\u4ea4\u4ee3\u7801\u5230 git",id:"\u4f7f\u7528-vs-code-\u63d0\u4ea4\u4ee3\u7801\u5230-git",children:[]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u672c\u6559\u7a0b\u4ee5 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/steedos/steedos-project-oa"}),"steedos-project-oa")," \u4e3a\u4f8b\uff0c\u6307\u5bfc\u4f60\u5982\u4f55\u5728 Ubuntu \u7cfb\u7edf\u4e2d\u90e8\u7f72\u548c\u8fd0\u884c\u57fa\u4e8e\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u7684\u9879\u76ee\u3002"),Object(c.b)("p",null,"\u7cfb\u7edf\u57fa\u672c\u73af\u5883\u9700\u8981\u9700\u8981\u5b89\u88c5 mongodb\u3001git\u3001nodejs"),Object(c.b)("p",null,"\u5982\u679c\u9700\u8981\u8fdc\u7a0b\u5f00\u53d1\uff0c\u8fd8\u53ef\u4ee5\u90e8\u7f72\u5fae\u8f6f code-server\uff0c\u5b9e\u73b0\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c Visual Studio Code \u7f16\u8f91\u5668\u8fdb\u884c\u8fdc\u7a0b\u5f00\u53d1\u3002"),Object(c.b)("h2",{id:"\u5b89\u88c5-ubuntu"},"\u5b89\u88c5 Ubuntu"),Object(c.b)("p",null,"\u67e5\u770b ubuntu \u7248\u672c\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"steedos@ubuntu:~$ cat /etc/issue\nUbuntu 18.04.4 LTS \\n \\l\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u7cfb\u7edf\u7248\u672c\u6ca1\u6709\u7279\u522b\u8981\u6c42\uff0c\u8fd9\u91cc\u53ea\u63d0\u4f9b\u53c2\u8003")),Object(c.b)("h2",{id:"\u5b89\u88c5-git"},"\u5b89\u88c5 git"),Object(c.b)("p",null,"\u9996\u5148\uff0c\u786e\u8ba4\u4f60\u7684\u7cfb\u7edf\u662f\u5426\u5df2\u5b89\u88c5 git\uff0c\u53ef\u4ee5\u901a\u8fc7\u6267\u884c ",Object(c.b)("inlineCode",{parentName:"p"},"git --version")," \u6307\u4ee4\u67e5\u770b\u7248\u672c\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e0b\u8f93\u5165\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get update\nsudo apt-get install -y git\n")),Object(c.b)("h2",{id:"\u5b89\u88c5-node-v12x"},"\u5b89\u88c5 node-v12.x"),Object(c.b)("p",null,"\u6dfb\u52a0 node \u6e90\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -\n")),Object(c.b)("p",null,"\u5b89\u88c5 make\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get install -y gcc g++ make\n")),Object(c.b)("p",null,"\u5b89\u88c5 node\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get install -y nodejs\n")),Object(c.b)("p",null,"\u68c0\u6d4b\u662f\u5426\u5b89\u88c5\u6210\u529f\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"steedos@ubuntu:~$ node -v\nv12.17.0\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6253\u5370\u51fa\u7248\u672c\u53f7\u5373\u8868\u793a node \u5b89\u88c5\u6210\u529f")),Object(c.b)("h2",{id:"\u5b89\u88c5-pm2"},"\u5b89\u88c5 pm2"),Object(c.b)("p",null,"\u56fd\u5185\u7528\u6237\u914d\u7f6e",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.aliyun.com/mirror/NPM"}),"\u6dd8\u5b9d NPM \u955c\u50cf"),"\u4ee5\u63d0\u9ad8 NPM \u5305\u4e0b\u8f7d\u901f\u5ea6\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm config set registry https://registry.npm.taobao.org\nsudo npm install yarn -g\nyarn config set registry https://registry.npm.taobao.org\n")),Object(c.b)("p",null,"\u5b89\u88c5",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/"}),"pm2"),"\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo npm install pm2 -g\n")),Object(c.b)("h2",{id:"\u5b89\u88c5-mongodb-\u6570\u636e\u5e93"},"\u5b89\u88c5 mongodb \u6570\u636e\u5e93"),Object(c.b)("p",null,"\u6839\u636e\u5b98\u65b9\u5411\u5bfc\uff0c\u5b89\u88c5\u6700\u65b0\u7684",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/"}),"mongodb4.2")),Object(c.b)("h3",{id:"\u4f7f\u7528\u96c6\u7fa4\u6a21\u5f0f\u542f\u52a8\u6570\u636e\u5e93"},"\u4f7f\u7528\u96c6\u7fa4\u6a21\u5f0f\u542f\u52a8\u6570\u636e\u5e93"),Object(c.b)("p",null,"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"vim /etc/mongod.conf\n# \u627e\u5230replication\u90e8\u5206\uff0c\u53bb\u6389#\u5e76\u6dfb\u52a0\u4e00\u884c\u914d\u7f6e\nreplication:\n  replSetName: rsSteedos\n")),Object(c.b)("p",null,"\u4fdd\u5b58\u540e\u91cd\u542f\u6570\u636e\u5e93\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl restart mongod\n")),Object(c.b)("p",null,"\u521d\u59cb\u5316\u6570\u636e\u5e93\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u9996\u5148\u8fdb\u5165mongo\u63a7\u5236\u53f0\nmongo\n# \u6267\u884c\u521d\u59cb\u5316\u51fd\u6570\nrs.initiate()\n# \u67e5\u770b\u914d\u7f6e\nrs.conf()\n# \u67e5\u770b\u96c6\u7fa4\u72b6\u6001\uff0c\u786e\u4fddmembers\u91cc\u6709\u4e00\u4e2aprimary\uff0c\u5219\u8868\u793a\u914d\u7f6e\u6210\u529f\nrs.status()\n")),Object(c.b)("h2",{id:"\u514b\u9686\u5e76\u542f\u52a8\u9879\u76ee"},"\u514b\u9686\u5e76\u542f\u52a8\u9879\u76ee"),Object(c.b)("p",null,"\u8bbf\u95ee\u9879\u76ee\u4e3b\u9875\u3002\u4f8b\u5982\uff1a",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/steedos/steedos-project-oa"}),"https://github.com/steedos/steedos-project-oa")," \u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u534e\u708e\u63d0\u4f9b\u7684\u9879\u76ee\u6a21\u7248\uff0c\u5982\u9700\u4e2a\u6027\u5316\u5b9a\u5236\uff0c\u8bf7\u5728\u9879\u76ee\u4e3b\u9875\u53f3\u4e0a\u89d2\u70b9",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo"}),"Fork"),"\uff0c\u7136\u540e\u5c06 Fork \u5230\u4e2a\u4eba\u8d26\u6237\u4e0b\u7684\u9879\u76ee\u514b\u9686\u5230\u672c\u5730\uff0c\u4ee5\u4fbf\u63d0\u4ea4\u4fee\u6539\u3002")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ~\ngit clone https://github.com/steedos/steedos-project-oa\ncd steedos-project-oa\nyarn\ncp .env .env.local\npm2 start server.js\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u91cd\u542f\u670d\u52a1\uff1a",Object(c.b)("inlineCode",{parentName:"p"},"pm2 restart server.js"),"\n\u9879\u76ee\u8bbf\u95ee\u5730\u5740\u548c\u7aef\u53e3\u53ef\u5728\u914d\u7f6e\u6587\u4ef6.env.local \u4e2d\u67e5\u770b\u548c\u7f16\u8f91")),Object(c.b)("p",null,"\u9632\u706b\u5899\u5f00\u653e\u7aef\u53e3\u540e\u901a\u8fc7\u9879\u76ee\u7684 ROOT_URL \u5373\u53ef\u8bbf\u95ee\u9879\u76ee\u5982\uff1a",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://192.168.0.105:5080/"}),"https://192.168.0.105:5080/")),Object(c.b)("h2",{id:"\u5b89\u88c5-code-server-\u53ef\u9009"},"\u5b89\u88c5 code-server (\u53ef\u9009)"),Object(c.b)("p",null,"\u5b89\u88c5 code-server \u7684",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cdr/code-server"}),"\u6700\u65b0\u7248\u672c"),"\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ~\ncurl -SOL https://github.com/cdr/code-server/releases/download/v3.3.1/code-server_3.3.1_amd64.deb\nsudo dpkg -i code-server_3.3.1_amd64.deb\nsystemctl --user enable --now code-server\n# Now code-server is running at http://127.0.0.1:8080\n# Your password is in ~/.config/code-server/config.yaml\n")),Object(c.b)("p",null,"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff0cbind-addr \u4e3a",Object(c.b)("inlineCode",{parentName:"p"},"0.0.0.0"),"\uff0c\u5bc6\u7801\u4e5f\u53ef\u8c03\u6574\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"vim ~/.config/code-server/config.yaml\n\nbind-addr: 0.0.0.0:8080\nauth: password\npassword: 307f71d53ec2fd0995499cf4\ncert: true\n\n# \u4fdd\u5b58\u540e\u91cd\u542f\u670d\u52a1\nsystemctl --user restart code-server\n")),Object(c.b)("p",null,"\u6bd4\u5982\u670d\u52a1\u90e8\u7f72\u5728 192.168.0.105\uff0c\u90a3\u4e48\u6d4f\u89c8\u5668\u8bbf\u95ee ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://192.168.0.108:8080"}),"https://192.168.0.108:8080")," \u8f93\u5165\u5bc6\u7801\u5373\u53ef\u5728\u6d4f\u89c8\u5668\u4e2d\u7684 vs code \u8fdb\u884c\u8fdc\u7a0b\u5f00\u53d1"),Object(c.b)("h3",{id:"\u4f7f\u7528-vs-code-\u63d0\u4ea4\u4ee3\u7801\u5230-git"},"\u4f7f\u7528 vs code \u63d0\u4ea4\u4ee3\u7801\u5230 git"),Object(c.b)("p",null,"\u9996\u5148\u914d\u7f6e\u7528\u6237\u540d\u548c\u90ae\u4ef6\u7136\u540e\u9009\u4e2d\u9700\u8981\u63d0\u4ea4\u7684\u6587\u4ef6\u6682\u5b58\u4fee\u6539\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'git config --global user.name "your name"\ngit config --global user.email "your email"\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u53ea\u9700\u6267\u884c\u4e00\u6b21")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/ubuntu/git%E6%9A%82%E5%AD%98%E4%BF%AE%E6%94%B9.png",alt:"\u6682\u5b58\u4fee\u6539"}))),Object(c.b)("p",null,"\u5176\u6b21\u5199\u8bf4\u660e\u5e76\u63d0\u4ea4\u66f4\u6539\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/ubuntu/git%E6%8F%90%E4%BA%A4%E6%9B%B4%E6%94%B9.png",alt:"\u63d0\u4ea4\u66f4\u6539"}))),Object(c.b)("p",null,"\u5982\u679c\u6ca1\u6709 git \u5ba2\u6237\u7aef\u53ef\u9009\u62e9\u53d6\u6d88\u6253\u5f00 git \u5ba2\u6237\u7aef\uff0c\u5e76\u5728 vscode \u4e2d\u767b\u9646 git \u8d26\u53f7\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/ubuntu/git%E5%8F%96%E6%B6%88%E6%89%93%E5%BC%80%E5%AE%A2%E6%88%B7%E7%AB%AF.png",alt:"\u53d6\u6d88\u6253\u5f00\u5ba2\u6237\u7aef"})),"\n",Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/ubuntu/git%E8%BE%93%E5%85%A5%E7%94%A8%E6%88%B7%E5%90%8D.png",alt:"\u8f93\u5165\u7528\u6237\u540d"})),"\n",Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/ubuntu/git%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81.png",alt:"\u8f93\u5165\u5bc6\u7801"}))),Object(c.b)("p",null,"\u6700\u540e\u63a8\u9001\u66f4\u6539\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/ubuntu/git%E6%8E%A8%E9%80%81%E6%9B%B4%E6%94%B9.png",alt:"\u63a8\u9001\u66f4\u6539"}))),Object(c.b)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),Object(c.b)("p",null,"\u542f\u52a8 code-server \u670d\u52a1\u540e\u5173\u95ed\u4e86\u7ec8\u7aef\uff0ccode-server \u670d\u52a1\u8bbf\u95ee\u4e0d\u4e86\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u540e\u91cd\u542f\u670d\u52a1\u5668\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo loginctl enable-linger username\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6765\u6e90\uff1a ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cdr/code-server/issues/1673"}),"https://github.com/cdr/code-server/issues/1673"))))}p.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,O=u["".concat(b,".").concat(d)]||u[d]||i[d]||c;return n?r.a.createElement(O,o({ref:t},s,{components:n})):r.a.createElement(O,o({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var s=2;s<c;s++)b[s]=n[s];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);