"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[77690],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Dockershim"},o=void 0,l={unversionedId:"getting-started/installation-and-upgrade/installation-requirements/dockershim",id:"getting-started/installation-and-upgrade/installation-requirements/dockershim",title:"Dockershim",description:"Dockershim \u662f Kubelet \u548c Docker Daemon \u4e4b\u95f4\u7684 CRI \u517c\u5bb9\u5c42\u3002Kubernetes 1.20 \u7248\u672c\u5ba3\u5e03\u4e86\u79fb\u9664\u6811\u5185 Dockershim\u3002\u6709\u5173\u6b64\u79fb\u9664\u7684\u66f4\u591a\u4fe1\u606f\u4ee5\u53ca\u65f6\u95f4\u7ebf\uff0c\u8bf7\u53c2\u89c1 Kubernetes Dockershim \u5f03\u7528\u76f8\u5173\u7684\u5e38\u89c1\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/installation-requirements/dockershim.md",sourceDirName:"getting-started/installation-and-upgrade/installation-requirements",slug:"/getting-started/installation-and-upgrade/installation-requirements/dockershim",permalink:"/zh/getting-started/installation-and-upgrade/installation-requirements/dockershim",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/installation-requirements/dockershim.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"Dockershim"},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5 Docker",permalink:"/zh/getting-started/installation-and-upgrade/installation-requirements/install-docker"},next:{title:"\u7aef\u53e3\u8981\u6c42",permalink:"/zh/getting-started/installation-and-upgrade/installation-requirements/port-requirements"}},s={},c=[{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dockershim \u662f Kubelet \u548c Docker Daemon \u4e4b\u95f4\u7684 CRI \u517c\u5bb9\u5c42\u3002Kubernetes 1.20 \u7248\u672c\u5ba3\u5e03\u4e86",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/"},"\u79fb\u9664\u6811\u5185 Dockershim"),"\u3002\u6709\u5173\u6b64\u79fb\u9664\u7684\u66f4\u591a\u4fe1\u606f\u4ee5\u53ca\u65f6\u95f4\u7ebf\uff0c\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2020/12/02/dockershim-faq/#when-will-dockershim-be-removed"},"Kubernetes Dockershim \u5f03\u7528\u76f8\u5173\u7684\u5e38\u89c1\u95ee\u9898"),"\u3002"),(0,a.kt)("p",null,"RKE \u96c6\u7fa4\u73b0\u5728\u652f\u6301\u5916\u90e8 Dockershim\uff0c\u6765\u8ba9\u7528\u6237\u7ee7\u7eed\u4f7f\u7528 Docker \u4f5c\u4e3a CRI \u8fd0\u884c\u65f6\u3002\u73b0\u5728\uff0c\u6211\u4eec\u901a\u8fc7\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.mirantis.com/blog/mirantis-to-take-over-support-of-kubernetes-dockershim-2/"},"Mirantis \u548c Docker ")," \u6765\u786e\u4fdd RKE \u96c6\u7fa4\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528 Docker\uff0c\u4ece\u800c\u5b9e\u73b0\u4e0a\u6e38\u5f00\u6e90\u793e\u533a\u7684\u5916\u90e8 Dockershim\u3002"),(0,a.kt)("p",null,"RKE2 \u548c K3s \u96c6\u7fa4\u4f7f\u7528\u5d4c\u5165\u7684 containerd \u4f5c\u4e3a\u5bb9\u5668\u8fd0\u884c\u65f6\uff0c\u56e0\u6b64\u4e0d\u53d7\u5f71\u54cd\u3002"),(0,a.kt)("p",null,"\u8981\u5728 1.24 \u4e4b\u524d\u7684 RKE \u7248\u672c\u4e2d\u542f\u7528\u5916\u90e8 Dockershim\uff0c\u8bf7\u914d\u7f6e\u4ee5\u4e0b\u9009\u9879\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"enable_cri_dockerd: true\n")),(0,a.kt)("p",null,"\u4ece 1.24 \u7248\u672c\u5f00\u59cb\uff0c\u4ee5\u4e0a\u9ed8\u8ba4\u4e3a true\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u5176\u4ed6\u5bb9\u5668\u8fd0\u884c\u65f6\uff0cRancher \u4e5f\u63d0\u4f9b\u4f7f\u7528 Containerd \u4f5c\u4e3a\u9ed8\u8ba4\u8fd0\u884c\u65f6\u7684\uff0c\u4ee5\u8fb9\u7f18\u4e3a\u4e2d\u5fc3\u7684 K3s\uff0c\u548c\u4ee5\u6570\u636e\u4e2d\u5fc3\u4e3a\u4e2d\u5fc3\u7684 RKE2 Kubernetes \u53d1\u884c\u7248\u3002\u7136\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u901a\u8fc7 Rancher \u5bf9\u5bfc\u5165\u7684 RKE2 \u548c K3s Kubernetes \u96c6\u7fa4\u8fdb\u884c\u5347\u7ea7\u548c\u7ba1\u7406\u3002"),(0,a.kt)("h3",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("br",null),(0,a.kt)("p",null,"Q\uff1a\u662f\u5426\u5fc5\u987b\u5347\u7ea7 Rancher \u624d\u80fd\u83b7\u5f97 Rancher \u5bf9\u4e0a\u6e38\u5916\u90e8 Dockershim \u66ff\u6362\u7684\u652f\u6301\uff1f"),(0,a.kt)("p",null,"A\uff1a\u5bf9\u4e8e RKE\uff0cDockershim ",(0,a.kt)("inlineCode",{parentName:"p"},"cri_dockerd")," \u66ff\u6362\u7684\u4e0a\u6e38\u652f\u6301\u4ece Kubernetes 1.21 \u5f00\u59cb\u3002\u4f60\u9700\u8981\u4f7f\u7528\u652f\u6301 RKE 1.21 \u7684 Rancher \u7248\u672c\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1\u6211\u4eec\u7684\u652f\u6301\u77e9\u9635\u3002"),(0,a.kt)("br",null),(0,a.kt)("p",null,"Q\uff1a\u6211\u76ee\u524d\u7684 RKE \u4f7f\u7528 Kubernetes 1.23\u3002\u5982\u679c\u4e0a\u6e38\u6700\u7ec8\u5728 1.24 \u4e2d\u5220\u9664 Dockershim\uff0c\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f"),(0,a.kt)("p",null,"A\uff1aRKE \u4e2d\u5e26\u6709 Kubernetes \u7684 Dockershim \u7248\u672c\u5c06\u7ee7\u7eed\u5de5\u4f5c\u5230 1.23\u3002\u6709\u5173\u65f6\u95f4\u7ebf\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2020/12/02/dockershim-faq/#when-will-dockershim-be-removed"},"Kubernetes Dockershim \u5f03\u7528\u76f8\u5173\u7684\u5e38\u89c1\u95ee\u9898"),"\u3002\u4ece 1.24 \u5f00\u59cb\uff0cRKE \u5c06\u9ed8\u8ba4\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"cri_dockerd")," \u5e76\u5728\u4e4b\u540e\u7684\u7248\u672c\u4e2d\u7ee7\u7eed\u542f\u7528\u3002"),(0,a.kt)("br",null),(0,a.kt)("p",null,"Q: \u5982\u679c\u6211\u4e0d\u60f3\u518d\u4f9d\u8d56 Dockershim \u6216 cri_dockerd\uff0c\u6211\u8fd8\u6709\u4ec0\u4e48\u9009\u62e9\uff1f"),(0,a.kt)("p",null,"A: \u4f60\u53ef\u4ee5\u4e3a Kubernetes \u4f7f\u7528\u4e0d\u9700\u8981 Dockershim \u652f\u6301\u7684\u8fd0\u884c\u65f6\uff0c\u5982 Containerd\u3002RKE2 \u548c K3s \u5c31\u662f\u5176\u4e2d\u7684\u4e24\u4e2a\u9009\u9879\u3002"),(0,a.kt)("br",null),(0,a.kt)("p",null,"Q: \u5982\u679c\u6211\u76ee\u524d\u4f7f\u7528 RKE1\uff0c\u4f46\u60f3\u5207\u6362\u5230 RKE2\uff0c\u6211\u53ef\u4ee5\u600e\u6837\u8fdb\u884c\u8fc1\u79fb\uff1f"),(0,a.kt)("p",null,"A: \u4f60\u53ef\u4ee5\u6784\u5efa\u4e00\u4e2a\u65b0\u96c6\u7fa4\uff0c\u7136\u540e\u5c06\u5de5\u4f5c\u8d1f\u8f7d\u8fc1\u79fb\u5230\u4f7f\u7528 Containerd \u7684\u65b0 RKE2 \u96c6\u7fa4\u3002Rancher \u4e5f\u5728\u63a2\u7d22\u5c31\u5730\u5347\u7ea7\u8def\u5f84\u7684\u53ef\u80fd\u6027\u3002"),(0,a.kt)("br",null))}p.isMDXComponent=!0}}]);