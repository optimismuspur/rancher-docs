"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[24468],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=u(t),f=o,d=g["".concat(l,".").concat(f)]||g[f]||p[f]||i;return t?n.createElement(d,a(a({ref:r},s),{},{components:t})):n.createElement(d,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},69456:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={title:"\u9879\u76ee\u5de5\u5177\uff1aLogging\uff0cMonitoring \u548c\u53ef\u89c6\u5316",weight:2525},l=void 0,u={unversionedId:"reference-guides/rancher-project-tools",id:"reference-guides/rancher-project-tools",title:"\u9879\u76ee\u5de5\u5177\uff1aLogging\uff0cMonitoring \u548c\u53ef\u89c6\u5316",description:"Rancher \u5305\u542b Kubernetes \u4e2d\u672a\u5305\u542b\u7684\u5404\u79cd\u5de5\u5177\u6765\u534f\u52a9\u4f60\u8fdb\u884c DevOps \u64cd\u4f5c\u3002Rancher \u53ef\u4ee5\u4e0e\u5916\u90e8\u670d\u52a1\u96c6\u6210\uff0c\u8ba9\u4f60\u7684\u96c6\u7fa4\u66f4\u9ad8\u6548\u5730\u8fd0\u884c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/rancher-project-tools.md",sourceDirName:"reference-guides",slug:"/reference-guides/rancher-project-tools",permalink:"/zh/reference-guides/rancher-project-tools",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/rancher-project-tools.md",tags:[],version:"current",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"\u9879\u76ee\u5de5\u5177\uff1aLogging\uff0cMonitoring \u548c\u53ef\u89c6\u5316",weight:2525},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u7fa4\u5de5\u5177\uff1aLogging\uff0cMonitoring \u548c\u53ef\u89c6\u5316",permalink:"/zh/reference-guides/rancher-cluster-tools"},next:{title:"\u7cfb\u7edf\u5de5\u5177",permalink:"/zh/reference-guides/system-tools"}},s={},p=[{value:"Notifiers \u548c\u544a\u8b66",id:"notifiers-\u548c\u544a\u8b66",level:2},{value:"Logging",id:"logging",level:2},{value:"Monitoring",id:"monitoring",level:2}],g={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher \u5305\u542b Kubernetes \u4e2d\u672a\u5305\u542b\u7684\u5404\u79cd\u5de5\u5177\u6765\u534f\u52a9\u4f60\u8fdb\u884c DevOps \u64cd\u4f5c\u3002Rancher \u53ef\u4ee5\u4e0e\u5916\u90e8\u670d\u52a1\u96c6\u6210\uff0c\u8ba9\u4f60\u7684\u96c6\u7fa4\u66f4\u9ad8\u6548\u5730\u8fd0\u884c\u3002"),(0,i.kt)("h2",{id:"notifiers-\u548c\u544a\u8b66"},"Notifiers \u548c\u544a\u8b66"),(0,i.kt)("p",null,"\u901a\u77e5\u5668\u548c\u544a\u8b66\u662f\u4e24\u4e2a\u534f\u540c\u5de5\u4f5c\u7684\u529f\u80fd\uff0c\u5b83\u4eec\u53ef\u4ee5\u5c06 Rancher \u7cfb\u7edf\u4e2d\u7684\u4e8b\u4ef6\u544a\u77e5\u4f60\u3002\u5728\u542f\u7528\u5b83\u4eec\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u5148\u5b89\u88c5\u76d1\u63a7\u5e94\u7528\u3002"),(0,i.kt)("p",null,"\u901a\u77e5\u5668\u662f\u901a\u77e5\u4f60\u544a\u8b66\u4e8b\u4ef6\u7684\u670d\u52a1\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u901a\u77e5\u5668\u6765\u5411\u6700\u9002\u5408\u91c7\u53d6\u7ea0\u6b63\u63aa\u65bd\u7684\u5458\u5de5\u53d1\u9001\u544a\u8b66\u901a\u77e5\u3002\u652f\u6301\u4f7f\u7528 Slack\u3001\u7535\u5b50\u90ae\u4ef6\u3001PagerDuty\u3001\u5fae\u4fe1\u548c webhook \u53d1\u9001\u901a\u77e5\u3002"),(0,i.kt)("p",null,"\u544a\u8b66\u662f\u89e6\u53d1\u8fd9\u4e9b\u901a\u77e5\u7684\u89c4\u5219\u3002\u5728\u63a5\u6536\u544a\u8b66\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u5728 Rancher \u4e2d\u914d\u7f6e\u4e00\u4e2a\u6216\u591a\u4e2a\u901a\u77e5\u5668\u3002\u4f60\u53ef\u4ee5\u5728\u96c6\u7fa4\u6216\u9879\u76ee\u7ea7\u522b\u8bbe\u7f6e\u544a\u8b66\u8303\u56f4\u3002"),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"Logging \u652f\u6301\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u548c\u5206\u6790\u96c6\u7fa4\u7684\u72b6\u6001"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u4f60\u7684\u73af\u5883\u4e2d\u53d1\u73b0\u8d8b\u52bf"),(0,i.kt)("li",{parentName:"ul"},"\u5c06\u65e5\u5fd7\u4fdd\u5b58\u5230\u96c6\u7fa4\u5916\u90e8\u7684\u5b89\u5168\u4f4d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"\u968f\u65f6\u4e86\u89e3\u5bb9\u5668\u5d29\u6e83\u3001pod \u9a71\u9010\u6216\u8282\u70b9\u6b7b\u4ea1\u7b49\u4e8b\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u8f7b\u677e\u5730\u8c03\u8bd5\u548c\u89e3\u51b3\u95ee\u9898")),(0,i.kt)("p",null,"Rancher \u53ef\u4ee5\u4e0e Elasticsearch\u3001splunk\u3001kafka\u3001syslog \u548c fluentd \u96c6\u6210\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/logging"},"Logging"),"\u3002"),(0,i.kt)("h2",{id:"monitoring"},"Monitoring"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher\uff0c\u901a\u8fc7\u4e1a\u754c\u9886\u5148\u5e76\u5f00\u6e90\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," \u6765\u76d1\u63a7\u96c6\u7fa4\u8282\u70b9\u3001Kubernetes \u7ec4\u4ef6\u548c\u8f6f\u4ef6\u90e8\u7f72\u7684\u72b6\u6001\u548c\u8fdb\u7a0b\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/monitoring-and-alerting"},"Monitoring"),"\u3002"))}f.isMDXComponent=!0}}]);