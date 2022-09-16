"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[27063],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=r,h=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return t?o.createElement(h,a(a({ref:n},s),{},{components:t})):o.createElement(h,a({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66141:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],l={title:"Troubleshooting nginx-proxy",weight:3},c=void 0,p={unversionedId:"troubleshooting/kubernetes-components/troubleshooting-nginx-proxy",id:"troubleshooting/kubernetes-components/troubleshooting-nginx-proxy",title:"Troubleshooting nginx-proxy",description:"The nginx-proxy container is deployed on every node that does not have the controlplane role. It provides access to all the nodes with the controlplane role by dynamically generating the NGINX configuration based on available nodes with the controlplane role.",source:"@site/docs/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy.md",sourceDirName:"troubleshooting/kubernetes-components",slug:"/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy",permalink:"/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy.md",tags:[],version:"current",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Troubleshooting nginx-proxy",weight:3},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting Controlplane Nodes",permalink:"/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes"},next:{title:"Troubleshooting Worker Nodes and Generic Components",permalink:"/troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components"}},s={},u=[],d={toc:u};function g(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx-proxy")," container is deployed on every node that does not have the ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," role. It provides access to all the nodes with the ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," role by dynamically generating the NGINX configuration based on available nodes with the ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," role."),(0,i.kt)("h1",{id:"check-if-the-container-is-running"},"Check if the Container is Running"),(0,i.kt)("p",null,"The container is called ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx-proxy")," and should have status ",(0,i.kt)("inlineCode",{parentName:"p"},"Up"),". The duration shown after ",(0,i.kt)("inlineCode",{parentName:"p"},"Up")," is the time the container has been running."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker ps -a -f=name=nginx-proxy\n")),(0,i.kt)("p",null,"Example output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'docker ps -a -f=name=nginx-proxy\nCONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS              PORTS               NAMES\nc3e933687c0e        rancher/rke-tools:v0.1.15   "nginx-proxy CP_HO..."   3 hours ago         Up 3 hours                              nginx-proxy\n')),(0,i.kt)("h1",{id:"check-generated-nginx-configuration"},"Check Generated NGINX Configuration"),(0,i.kt)("p",null,"The generated configuration should include the IP addresses of the nodes with the ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," role. The configuration can be checked using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker exec nginx-proxy cat /etc/nginx/nginx.conf\n")),(0,i.kt)("p",null,"Example output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"error_log stderr notice;\n\nworker_processes auto;\nevents {\n  multi_accept on;\n  use epoll;\n  worker_connections 1024;\n}\n\nstream {\n        upstream kube_apiserver {\n            \n            server ip_of_controlplane_node1:6443;\n            \n            server ip_of_controlplane_node2:6443;\n            \n        }\n\n        server {\n            listen        6443;\n            proxy_pass    kube_apiserver;\n            proxy_timeout 30;\n            proxy_connect_timeout 2s;\n\n        }\n\n}\n")),(0,i.kt)("h1",{id:"nginx-proxy-container-logging"},"nginx-proxy Container Logging"),(0,i.kt)("p",null,"The logging of the containers can contain information on what the problem could be."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker logs nginx-proxy\n")))}g.isMDXComponent=!0}}]);