"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[42151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u7684\u5176\u4ed6\u6b65\u9aa4"},a=void 0,s={unversionedId:"integrations-in-rancher/istio/configuration-options/project-network-isolation",id:"version-2.6/integrations-in-rancher/istio/configuration-options/project-network-isolation",title:"\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u7684\u5176\u4ed6\u6b65\u9aa4",description:"\u5728\u96c6\u7fa4\u4e2d\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/integrations-in-rancher/istio/configuration-options/project-network-isolation.md",sourceDirName:"integrations-in-rancher/istio/configuration-options",slug:"/integrations-in-rancher/istio/configuration-options/project-network-isolation",permalink:"/zh/v2.6/integrations-in-rancher/istio/configuration-options/project-network-isolation",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/integrations-in-rancher/istio/configuration-options/project-network-isolation.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u7684\u5176\u4ed6\u6b65\u9aa4"},sidebar:"tutorialSidebar",previous:{title:"\u5728 RKE2 \u96c6\u7fa4\u4e0a\u5b89\u88c5 Istio \u7684\u5176\u4ed6\u6b65\u9aa4",permalink:"/zh/v2.6/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster"},next:{title:"Longhorn - Kubernetes \u7684\u4e91\u539f\u751f\u5206\u5e03\u5f0f\u5757\u5b58\u50a8",permalink:"/zh/v2.6/integrations-in-rancher/longhorn"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u96c6\u7fa4\u4e2d\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f60\u540c\u65f6\u4f7f\u7528\u4e86 Canal \u7f51\u7edc\u63d2\u4ef6\u4e0e Rancher 2.5.8 \u4e4b\u524d\u7248\u672c\uff0c\u6216\u8005\u540c\u65f6\u4f7f\u7528\u4e86 Rancher 2.5.8+ \u4ee5\u53ca\u4efb\u610f\u652f\u6301\u6267\u884c Kubernetes \u7f51\u7edc\u7b56\u7565\u7684 RKE \u7f51\u7edc\u63d2\u4ef6\uff08\u4f8b\u5982 Canal \u6216 Cisco ACI \u63d2\u4ef6\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u542f\u7528\u4e86\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u9009\u9879\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u4e86 Istio Ingress \u6a21\u5757\u3002")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cIstio Ingress Gateway pod \u65e0\u6cd5\u5c06\u5165\u53e3\u6d41\u91cf\u91cd\u5b9a\u5411\u5230\u5de5\u4f5c\u8d1f\u8f7d\u3002\u8fd9\u662f\u56e0\u4e3a\u5b89\u88c5\u4e86 Istio \u7684\u547d\u540d\u7a7a\u95f4\u65e0\u6cd5\u8bbf\u95ee\u6240\u6709\u547d\u540d\u7a7a\u95f4\u3002\u4e3a\u6b64\u4f60\u6709\u4e24\u4e2a\u9009\u9879\u3002"),(0,o.kt)("p",null,"\u7b2c\u4e00\u4e2a\u9009\u9879\u662f\u5728\u9700\u8981\u8ba9 Istio \u63a7\u5236\u5165\u53e3\u7684\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u7f51\u7edc\u7b56\u7565\u3002\u4f60\u7684\u7b56\u7565\u9700\u8981\u5305\u62ec\u4ee5\u4e0b\u51e0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- podSelector:\n    matchLabels:\n      app: istio-ingressgateway\n")),(0,o.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u9009\u9879\u662f\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"istio-system")," \u547d\u540d\u7a7a\u95f4\u79fb\u52a8\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"system")," \u9879\u76ee\u4e2d\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8be5\u9879\u76ee\u88ab\u6392\u9664\u5728\u7f51\u7edc\u9694\u79bb\u4e4b\u5916\u3002"))}u.isMDXComponent=!0}}]);