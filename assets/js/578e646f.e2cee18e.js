"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[82161],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(r),m=o,d=h["".concat(c,".").concat(m)]||h[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},69435:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"Dockershim",weight:300},c=void 0,u={unversionedId:"faq/dockershim",id:"faq/dockershim",title:"Dockershim",description:"The Dockershim is the CRI compliant layer between the Kubelet and the Docker daemon. As part of the Kubernetes 1.20 release, the deprecation of the in-tree Dockershim was announced. Removal is currently scheduled for Kubernetes 1.24. For more information on the deprecation and its timelines, see the Kubernetes Dockershim Deprecation FAQ.",source:"@site/docs/faq/dockershim.md",sourceDirName:"faq",slug:"/faq/dockershim",permalink:"/faq/dockershim",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/faq/dockershim.md",tags:[],version:"current",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Dockershim",weight:300},sidebar:"tutorialSidebar",previous:{title:"Installing and Configuring kubectl",permalink:"/faq/install-and-configure-kubectl"},next:{title:"Technical",permalink:"/faq/technical-items"}},l={},p=[{value:"FAQ",id:"faq",level:3}],h={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Dockershim is the CRI compliant layer between the Kubelet and the Docker daemon. As part of the Kubernetes 1.20 release, the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/"},"deprecation of the in-tree Dockershim was announced"),". Removal is currently scheduled for Kubernetes 1.24. For more information on the deprecation and its timelines, see the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2020/12/02/dockershim-faq/#when-will-dockershim-be-removed"},"Kubernetes Dockershim Deprecation FAQ"),"."),(0,a.kt)("p",null,"RKE clusters, starting with Kubernetes 1.21, now support the external Dockershim to continue leveraging Docker as the CRI runtime. We now implement the upstream open source community Dockershim announced by ",(0,a.kt)("a",{parentName:"p",href:"https://www.mirantis.com/blog/mirantis-to-take-over-support-of-kubernetes-dockershim-2/"},"Mirantis and Docker")," to ensure RKE clusters can continue to leverage Docker."),(0,a.kt)("p",null,"To enable the external Dockershim, configure the following option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"enable_cri_dockerd: true\n")),(0,a.kt)("p",null,"For users looking to use another container runtime, Rancher has the edge-focused K3s and datacenter-focused RKE2 Kubernetes distributions that use containerd as the default runtime. Imported RKE2 and K3s Kubernetes clusters can then be upgraded and managed through Rancher even after the removal of in-tree Dockershim in Kubernetes 1.24."),(0,a.kt)("h3",{id:"faq"},"FAQ"),(0,a.kt)("br",null),(0,a.kt)("p",null,"Q. Do I have to upgrade Rancher to get Rancher\u2019s support of the upstream Dockershim?"),(0,a.kt)("p",null,"The upstream support of Dockershim begins for RKE in Kubernetes 1.21. You will need to be on Rancher 2.6 or above to have support for RKE with Kubernetes 1.21. See our ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/all-supported-versions/rancher-v2.6.0/"},"support matrix")," for details."),(0,a.kt)("br",null),(0,a.kt)("p",null,"Q. I am currently on RKE with Kubernetes 1.20. Do I need to upgrade to RKE with Kubernetes 1.21 sooner to avoid being out of support for Dockershim?"),(0,a.kt)("p",null,"A. The version of Dockershim in RKE with Kubernetes 1.20 will continue to work and is not scheduled for removal upstream until Kubernetes 1.24. It will only emit a warning of its future deprecation, which Rancher has mitigated in RKE with Kubernetes 1.21. You can plan your upgrade to Kubernetes 1.21 as you would normally, but should consider enabling the external Dockershim by Kubernetes 1.22. The external Dockershim will need to be enabled before upgrading to Kubernetes 1.24, at which point the existing implementation will be removed."),(0,a.kt)("p",null,"For more information on the deprecation and its timeline, see the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2020/12/02/dockershim-faq/#when-will-dockershim-be-removed"},"Kubernetes Dockershim Deprecation FAQ"),"."),(0,a.kt)("br",null),(0,a.kt)("p",null,"Q: What are my other options if I don\u2019t want to depend on the Dockershim?"),(0,a.kt)("p",null,"A: You can use a runtime like containerd with Kubernetes that does not require Dockershim support. RKE2 or K3s are two options for doing this."),(0,a.kt)("br",null),(0,a.kt)("p",null,"Q: If I am already using RKE1 and want to switch to RKE2, what are my migration options?"),(0,a.kt)("p",null,"A: Rancher is exploring the possibility of an in-place upgrade path. Alternatively you can always migrate workloads from one cluster to another using kubectl."),(0,a.kt)("br",null))}m.isMDXComponent=!0}}]);