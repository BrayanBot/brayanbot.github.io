"use strict";(self.webpackChunkbrayanbot_dev=self.webpackChunkbrayanbot_dev||[]).push([[9713],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1370:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var o=n(3117),r=n(102),a=(n(7294),n(4137)),i=["components"],s={sidebar_position:3,description:"Our recommendations to how you should host BrayanBot"},l="Recomendations",u={unversionedId:"Setup/recommendations",id:"Setup/recommendations",title:"Recomendations",description:"Our recommendations to how you should host BrayanBot",source:"@site/docs/Setup/recommendations.md",sourceDirName:"Setup",slug:"/Setup/recommendations",permalink:"/docs/Setup/recommendations",draft:!1,editUrl:"https://github.com/brayanbot/brayanbot.dev/edit/dev/docs/Setup/recommendations.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Our recommendations to how you should host BrayanBot"},sidebar:"docs",previous:{title:"Pre Installation",permalink:"/docs/Setup/pre-installation"},next:{title:"Hosting on Linux",permalink:"/docs/Setup/Hosting/linux"}},c={},d=[{value:"Preface",id:"preface",level:2},{value:"Available Installation Methods",id:"available-installation-methods",level:2},{value:"Recommended Installation",id:"recommended-installation",level:2},{value:"Operating System",id:"operating-system",level:3},{value:"Specs",id:"specs",level:3},{value:"Machine",id:"machine",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recomendations"},"Recomendations"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"preface"},"Preface"),(0,a.kt)("p",null,"BrayanBot is an advanced discord bot utilizing the latest DiscordJS features (such as slash commands & buttons) and protesting the nature of low-quality, closed source Discord Bots while providing you with easy installation and simple customization, as well as extensibility via first or third party addons."),(0,a.kt)("p",null,"Not satisfied? It is also a bot template which you may use freely to shape your own bot."),(0,a.kt)("h2",{id:"available-installation-methods"},"Available Installation Methods"),(0,a.kt)("p",null,"Given the open-source, extensible and customizable nature as well as it's design principle to be easy to use; we offer various ways to get into hosting and using BrayanBot at the speed of sound."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Self-Hosted (Recommended)"),(0,a.kt)("li",{parentName:"ul"},"Hosting Provider"),(0,a.kt)("li",{parentName:"ul"},"Docker / Docker-Compose (Advanced)"),(0,a.kt)("li",{parentName:"ul"},"Using the official Pterodactyl Egg")),(0,a.kt)("p",null,"If you know your way around NodeJS and a node package manager (such as npm, Yarn or pnpm), you should consider self-hosting BrayanBot. We offer manual installation instructions, built-in installer and a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/BrayanBot/BrayanBot/blob/main/install/docker-linux.sh"},"Docker Installation Script")," for those wishing to self-host."),(0,a.kt)("p",null,"For easy scalability, you might consider ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/cli/"},"Docker")," or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose"},"Docker Compose"),". There is also a ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/brayanbot/brayanbot"},"Public Docker Image")," available for testing purposes."),(0,a.kt)("p",null,"If you are using a hosting provider, ",(0,a.kt)("a",{parentName:"p",href:"/docs/Setup/hosting/pterodactyl#using-a-provider-hosting-company"},"Using a Hosting Provider")," is where you should look. We also provide instructions for those using ",(0,a.kt)("a",{parentName:"p",href:"/docs/Setup/hosting/pterodactyl#installing-brayanbot-on-pterodactyl"},"Selfhosted Pterodactyl Panel")),(0,a.kt)("h2",{id:"recommended-installation"},"Recommended Installation"),(0,a.kt)("h3",{id:"operating-system"},"Operating System"),(0,a.kt)("p",null,"We recommend running BrayanBot on a Linux VPS or Dedicated server. A VPS running Debian or Ubuntu is ideal. You may try and successfully run BrayanBot on a Windows machine, but you will be more likely to face errors due to your Operating System on Windows than you would on Linux. Self-hosting on your personal computer running Windows is possible, but not recommended. We also recommend staying away from Discord Bot hosts, but they are preferred option over buying an entire VPS if you do not have one in your possession."),(0,a.kt)("h3",{id:"specs"},"Specs"),(0,a.kt)("p",null,"BrayanBot is quite lightweight and does not require an entire VPS or a Dedicated server to run on. If you are not running Docker, consider placing BrayanBOt in the corner of an already existing VPS or purchase Discord Bot Hosting for a reasonable price. The recommended specs for BrayanBot are"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"200mb ram"),(0,a.kt)("li",{parentName:"ul"},"1 Core"),(0,a.kt)("li",{parentName:"ul"},"500MB Storage")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Do keep in mind that those may be subjected to change based on the amount of users in your server and the number of addons you are running as well as the performance impact of those addons.")),(0,a.kt)("p",null,"The recommended dedicated hosts are"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(VPS) ",(0,a.kt)("a",{parentName:"li",href:"https://www.hetzner.com/"},"Hetzner")),(0,a.kt)("li",{parentName:"ul"},"(VPS/Bot Hosting) ",(0,a.kt)("a",{parentName:"li",href:"https://revivenode.com/"},"Revivenode")),(0,a.kt)("li",{parentName:"ul"},"(VPS) ",(0,a.kt)("a",{parentName:"li",href:"https://contabo.com/en/"},"Contabo")),(0,a.kt)("li",{parentName:"ul"},"(VPS/Bot Hosting) ",(0,a.kt)("a",{parentName:"li",href:"https://enviromc.host/"},"EnviroMC"))),(0,a.kt)("h3",{id:"machine"},"Machine"),(0,a.kt)("p",null,"A VPS or a small-scale Raspberry Pi ",(0,a.kt)("a",{parentName:"p",href:"/blog/raspberry-pi-installation"},"(See blog)")," are both great options if you're self-hosting BrayanBot, due to their low cost and low maintenance nature. You may also choose to run the bot on your own personal computer (using PM2), but you will need to keep in mind that the bot will use your system resources and may deduct from overall performance."))}m.isMDXComponent=!0}}]);