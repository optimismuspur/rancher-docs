"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[87554],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},99008:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"NGINX",weight:270,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/create-nodes-lb/nginx","/rancher/v2.x/en/installation/resources/advanced/helm2/create-nodes-lb/nginx/"]},s=void 0,c={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nginx",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nginx",title:"NGINX",description:"NGINX will be configured as Layer 4 load balancer (TCP) that forwards connections to one of your Rancher nodes.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nginx.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nginx",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nginx",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nginx.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"NGINX",weight:270,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/create-nodes-lb/nginx","/rancher/v2.x/en/installation/resources/advanced/helm2/create-nodes-lb/nginx/"]},sidebar:"tutorialSidebar",previous:{title:"1. Create Nodes and Load Balancer",permalink:"/v2.0-v2.4/pages-for-subheaders/helm2-create-nodes-lb"},next:{title:"Amazon NLB",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nlb"}},p={},d=[{value:"Install NGINX",id:"install-nginx",level:2},{value:"Create NGINX Configuration",id:"create-nginx-configuration",level:2},{value:"Option - Run NGINX as Docker container",id:"option---run-nginx-as-docker-container",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NGINX will be configured as Layer 4 load balancer (TCP) that forwards connections to one of your Rancher nodes."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:"),"\nIn this configuration, the load balancer is positioned in front of your nodes. The load balancer can be any host capable of running NGINX."),(0,o.kt)("p",{parentName:"blockquote"},"One caveat: do not use one of your Rancher nodes as the load balancer.")),(0,o.kt)("h2",{id:"install-nginx"},"Install NGINX"),(0,o.kt)("p",null,"Start by installing NGINX on the node you want to use as a load balancer. NGINX has packages available for all known operating systems. The versions tested are ",(0,o.kt)("inlineCode",{parentName:"p"},"1.14")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"1.15"),". For help installing NGINX, refer to their ",(0,o.kt)("a",{parentName:"p",href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/install/"},"install documentation"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"stream")," module is required, which is present when using the official NGINX packages. Please refer to your OS documentation on how to install and enable the NGINX ",(0,o.kt)("inlineCode",{parentName:"p"},"stream")," module on your operating system."),(0,o.kt)("h2",{id:"create-nginx-configuration"},"Create NGINX Configuration"),(0,o.kt)("p",null,"After installing NGINX, you need to update the NGINX configuration file, ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx.conf"),", with the IP addresses for your nodes."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy and paste the code sample below into your favorite text editor. Save it as ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx.conf"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx.conf"),", replace both occurrences (port 80 and port 443) of ",(0,o.kt)("inlineCode",{parentName:"p"},"<IP_NODE_1>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<IP_NODE_2>"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"<IP_NODE_3>")," with the IPs of your ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/helm2-create-nodes-lb"},"nodes"),"."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/tcp-udp-load-balancer/"},"NGINX Documentation: TCP and UDP Load Balancing")," for all configuration options.")),(0,o.kt)("figcaption",null,"Example NGINX config"),"``` worker_processes 4; worker_rlimit_nofile 40000;",(0,o.kt)("p",{parentName:"li"},"events {\nworker_connections 8192;\n}"),(0,o.kt)("p",{parentName:"li"},"stream {\nupstream rancher_servers_http {\nleast_conn;\nserver <IP_NODE_1>:80 max_fails=3 fail_timeout=5s;\nserver <IP_NODE_2>:80 max_fails=3 fail_timeout=5s;\nserver <IP_NODE_3>:80 max_fails=3 fail_timeout=5s;\n}\nserver {\nlisten     80;\nproxy_pass rancher_servers_http;\n}"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"upstream rancher_servers_https {\n    least_conn;\n    server <IP_NODE_1>:443 max_fails=3 fail_timeout=5s;\n    server <IP_NODE_2>:443 max_fails=3 fail_timeout=5s;\n    server <IP_NODE_3>:443 max_fails=3 fail_timeout=5s;\n}\nserver {\n    listen     443;\n    proxy_pass rancher_servers_https;\n}\n")),(0,o.kt)("p",{parentName:"li"},"}"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},""))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx.conf")," to your load balancer at the following path: ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Load the updates to your NGINX configuration by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# nginx -s reload\n")))),(0,o.kt)("h2",{id:"option---run-nginx-as-docker-container"},"Option - Run NGINX as Docker container"),(0,o.kt)("p",null,"Instead of installing NGINX as a package on the operating system, you can rather run it as a Docker container. Save the edited ",(0,o.kt)("strong",{parentName:"p"},"Example NGINX config")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx.conf")," and run the following command to launch the NGINX container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /etc/nginx.conf:/etc/nginx/nginx.conf \\\n  nginx:1.14\n")))}m.isMDXComponent=!0}}]);