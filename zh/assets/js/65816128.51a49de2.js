"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[39386],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76099:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],c={title:"\u67b6\u6784",weight:1},l=void 0,s={unversionedId:"explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture",id:"explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture",title:"\u67b6\u6784",description:"Fleet \u53ef\u4ee5\u7ba1\u7406\u6765\u81ea Git \u7684\u539f\u59cb Kubernetes YAML\u3001Helm Chart\u3001Kustomize \u6216\u4e09\u8005\u7684\u4efb\u4f55\u7ec4\u5408\u7684\u90e8\u7f72\u3002\u65e0\u8bba\u6765\u6e90\u5982\u4f55\uff0c\u6240\u6709\u8d44\u6e90\u90fd\u4f1a\u52a8\u6001\u8f6c\u5316\u4e3a Helm Chart\uff0cHelm \u4f1a\u7528\u4f5c\u5f15\u64ce\u6765\u5c06\u6240\u6709\u8d44\u6e90\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\u3002\u8fd9\u7ed9\u4e86\u4f60\u9ad8\u5ea6\u7684\u63a7\u5236\u3001\u4e00\u81f4\u6027\u548c\u53ef\u5ba1\u8ba1\u6027\u3002Fleet \u4e0d\u4ec5\u5173\u6ce8\u6269\u5c55\u80fd\u529b\uff0c\u800c\u4e14\u8fd8\u63d0\u4f9b\u9ad8\u5ea6\u7684\u63a7\u5236\u548c\u53ef\u89c1\u6027\uff0c\u4ece\u800c\u8ba9\u7528\u6237\u51c6\u786e\u4e86\u89e3\u96c6\u7fa4\u4e0a\u5b89\u88c5\u7684\u5185\u5bb9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture.md",sourceDirName:"explanations/integrations-in-rancher/fleet-gitops-at-scale",slug:"/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture",permalink:"/zh/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture.md",tags:[],version:"current",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"\u67b6\u6784",weight:1},sidebar:"tutorialSidebar",previous:{title:"Fleet - \u5927\u89c4\u6a21\u7684 GitOps",permalink:"/zh/pages-for-subheaders/fleet-gitops-at-scale"},next:{title:"Windows \u652f\u6301",permalink:"/zh/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support"}},u={},p=[],f={toc:p};function d(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Fleet \u53ef\u4ee5\u7ba1\u7406\u6765\u81ea Git \u7684\u539f\u59cb Kubernetes YAML\u3001Helm Chart\u3001Kustomize \u6216\u4e09\u8005\u7684\u4efb\u4f55\u7ec4\u5408\u7684\u90e8\u7f72\u3002\u65e0\u8bba\u6765\u6e90\u5982\u4f55\uff0c\u6240\u6709\u8d44\u6e90\u90fd\u4f1a\u52a8\u6001\u8f6c\u5316\u4e3a Helm Chart\uff0cHelm \u4f1a\u7528\u4f5c\u5f15\u64ce\u6765\u5c06\u6240\u6709\u8d44\u6e90\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\u3002\u8fd9\u7ed9\u4e86\u4f60\u9ad8\u5ea6\u7684\u63a7\u5236\u3001\u4e00\u81f4\u6027\u548c\u53ef\u5ba1\u8ba1\u6027\u3002Fleet \u4e0d\u4ec5\u5173\u6ce8\u6269\u5c55\u80fd\u529b\uff0c\u800c\u4e14\u8fd8\u63d0\u4f9b\u9ad8\u5ea6\u7684\u63a7\u5236\u548c\u53ef\u89c1\u6027\uff0c\u4ece\u800c\u8ba9\u7528\u6237\u51c6\u786e\u4e86\u89e3\u96c6\u7fa4\u4e0a\u5b89\u88c5\u7684\u5185\u5bb9\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u67b6\u6784",src:r(14956).Z,width:"1366",height:"960"})))}d.isMDXComponent=!0},14956:function(e,t,r){t.Z=r.p+"assets/images/fleet-architecture-f708ce634648101dc98f451dcd59fe84.svg"}}]);