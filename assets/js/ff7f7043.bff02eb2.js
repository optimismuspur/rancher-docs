"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[39677],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),h=d(n),p=a,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||i;return n?r.createElement(m,s(s({ref:t},o),{},{components:n})):r.createElement(m,s({ref:t},o))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},93793:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],u={title:"Self-Assessment and Hardening Guides for Rancher v2.5",shortTitle:"Rancher v2.5 Guides",weight:1},l=void 0,d={unversionedId:"pages-for-subheaders/rancher-v2.5-hardening-guides",id:"version-2.5/pages-for-subheaders/rancher-v2.5-hardening-guides",title:"Self-Assessment and Hardening Guides for Rancher v2.5",description:"Rancher v2.5 introduced the capability to deploy Rancher on any Kubernetes cluster. For that reason, we now provide separate security hardening guides for Rancher deployments on each of Rancher's Kubernetes distributions.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/rancher-v2.5-hardening-guides.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rancher-v2.5-hardening-guides",permalink:"/v2.5/pages-for-subheaders/rancher-v2.5-hardening-guides",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/rancher-v2.5-hardening-guides.md",tags:[],version:"2.5",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Self-Assessment and Hardening Guides for Rancher v2.5",shortTitle:"Rancher v2.5 Guides",weight:1},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/v2.5/pages-for-subheaders/rancher-security"},next:{title:"Hardening Guide with CIS 1.6 Benchmark",permalink:"/v2.5/reference-guides/rancher-security/rancher-v2.5-hardening-guides/hardening-guide-with-cis-v1.6-benchmark"}},o={},c=[{value:"Rancher Kubernetes Distributions",id:"rancher-kubernetes-distributions",level:2},{value:"Hardening Guides and Benchmark Versions",id:"hardening-guides-and-benchmark-versions",level:2},{value:"RKE Guides",id:"rke-guides",level:3},{value:"RKE2 Guides",id:"rke2-guides",level:3},{value:"K3s Guides",id:"k3s-guides",level:3},{value:"Rancher with SELinux",id:"rancher-with-selinux",level:2}],h={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher v2.5 introduced the capability to deploy Rancher on any Kubernetes cluster. For that reason, we now provide separate security hardening guides for Rancher deployments on each of Rancher's Kubernetes distributions."),(0,i.kt)("h2",{id:"rancher-kubernetes-distributions"},"Rancher Kubernetes Distributions"),(0,i.kt)("p",null,"Rancher has the following Kubernetes distributions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/"},(0,i.kt)("strong",{parentName:"a"},"RKE,"))," Rancher Kubernetes Engine, is a CNCF-certified Kubernetes distribution that runs entirely within Docker containers. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/"},(0,i.kt)("strong",{parentName:"a"},"K3s,"))," is a fully conformant, lightweight Kubernetes distribution. It is easy to install, with half the memory of upstream Kubernetes, all in a binary of less than 100 MB."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.rke2.io/"},(0,i.kt)("strong",{parentName:"a"},"RKE2"))," is a fully conformant Kubernetes distribution that focuses on security and compliance within the U.S. Federal Government sector.")),(0,i.kt)("p",null,"To harden a Kubernetes cluster outside of Rancher's distributions, refer to your Kubernetes provider docs."),(0,i.kt)("h2",{id:"hardening-guides-and-benchmark-versions"},"Hardening Guides and Benchmark Versions"),(0,i.kt)("p",null,"These guides have been tested along with the Rancher v2.5 release. Each self-assessment guide is accompanied with a hardening guide and tested on a specific Kubernetes version and CIS benchmark version. If a CIS benchmark has not been validated for your Kubernetes version, you can choose to use the existing guides until a newer version is added."),(0,i.kt)("h3",{id:"rke-guides"},"RKE Guides"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"),(0,i.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Self Assessment Guide"),(0,i.kt)("th",{parentName:"tr",align:null},"Hardening Guides"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.15+"),(0,i.kt)("td",{parentName:"tr",align:null},"CIS v1.5"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.5/reference-guides/rancher-security/rancher-v2.5-hardening-guides/self-assessment-guide-with-cis-v1.5-benchmark"},"Link")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.5/reference-guides/rancher-security/rancher-v2.5-hardening-guides/hardening-guide-with-cis-v1.5-benchmark"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.18+"),(0,i.kt)("td",{parentName:"tr",align:null},"CIS v1.6"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.5/reference-guides/rancher-security/rancher-v2.5-hardening-guides/self-assessment-guide-with-cis-v1.6-benchmark"},"Link")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.5/reference-guides/rancher-security/rancher-v2.5-hardening-guides/hardening-guide-with-cis-v1.6-benchmark"},"Link"))))),(0,i.kt)("h3",{id:"rke2-guides"},"RKE2 Guides"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"),(0,i.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Self Assessment Guide"),(0,i.kt)("th",{parentName:"tr",align:null},"Hardening Guides"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.18"),(0,i.kt)("td",{parentName:"tr",align:null},"CIS v1.5"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.rke2.io/security/cis_self_assessment15/"},"Link")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.rke2.io/security/hardening_guide/"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.20"),(0,i.kt)("td",{parentName:"tr",align:null},"CIS v1.6"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.rke2.io/security/cis_self_assessment16/"},"Link")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.rke2.io/security/hardening_guide/"},"Link"))))),(0,i.kt)("h3",{id:"k3s-guides"},"K3s Guides"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"),(0,i.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Self Assessment Guide"),(0,i.kt)("th",{parentName:"tr",align:null},"Hardening Guide"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.17, v1.18, & v1.19"),(0,i.kt)("td",{parentName:"tr",align:null},"CIS v1.5"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://rancher.com/docs/k3s/latest/en/security/self_assessment/"},"Link")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://rancher.com/docs/k3s/latest/en/security/hardening_guide/"},"Link"))))),(0,i.kt)("h2",{id:"rancher-with-selinux"},"Rancher with SELinux"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.5.8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security-Enhanced_Linux"},"Security-Enhanced Linux (SELinux)")," is a security enhancement to Linux. After being historically used by government agencies, SELinux is now industry standard and is enabled by default on CentOS 7 and 8."),(0,i.kt)("p",null,"To use Rancher with SELinux, we recommend installing the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," RPM according to the instructions on ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/selinux-rpm#installing-the-rancher-selinux-rpm"},"this page.")))}p.isMDXComponent=!0}}]);