"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[29354],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,h=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96425:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"Additional Steps for Project Network Isolation",weight:4,aliases:["/rancher/v2.5/en/istio/v2.5/configuration-reference/canal-and-project-network","/rancher/v2.x/en/istio/v2.5/configuration-reference/canal-and-project-network/"]},c=void 0,l={unversionedId:"explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation",id:"version-2.5/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation",title:"Additional Steps for Project Network Isolation",description:"In clusters where:",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation.md",sourceDirName:"explanations/integrations-in-rancher/istio/configuration-options",slug:"/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation",permalink:"/zh/v2.5/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation.md",tags:[],version:"2.5",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"Additional Steps for Project Network Isolation",weight:4,aliases:["/rancher/v2.5/en/istio/v2.5/configuration-reference/canal-and-project-network","/rancher/v2.x/en/istio/v2.5/configuration-reference/canal-and-project-network/"]},sidebar:"tutorialSidebar",previous:{title:"Additional Steps for Installing Istio on an RKE2 Cluster",permalink:"/zh/v2.5/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster"},next:{title:"Longhorn - Cloud native distributed block storage for Kubernetes",permalink:"/zh/v2.5/explanations/integrations-in-rancher/longhorn"}},p={},u=[],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In clusters where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You are using the Canal network plugin with Rancher before v2.5.8, or you are using Rancher v2.5.8+ with an any RKE network plug-in that supports the enforcement of Kubernetes network policies, such as Canal or the Cisco ACI plugin"),(0,i.kt)("li",{parentName:"ul"},"The Project Network Isolation option is enabled"),(0,i.kt)("li",{parentName:"ul"},"You install the Istio Ingress module")),(0,i.kt)("p",null,"The Istio Ingress Gateway pod won't be able to redirect ingress traffic to the workloads by default. This is because all the namespaces will be inaccessible from the namespace where Istio is installed. You have two options."),(0,i.kt)("p",null,"The first option is to add a new Network Policy in each of the namespaces where you intend to have ingress controlled by Istio. Your policy should include the following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- podSelector:\n    matchLabels:\n      app: istio-ingressgateway\n")),(0,i.kt)("p",null,"The second option is to move the ",(0,i.kt)("inlineCode",{parentName:"p"},"istio-system")," namespace to the ",(0,i.kt)("inlineCode",{parentName:"p"},"system")," project, which by default is excluded from the network isolation."))}d.isMDXComponent=!0}}]);