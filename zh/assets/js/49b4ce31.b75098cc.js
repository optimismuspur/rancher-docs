"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98430],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48941:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"\u542f\u7528 Monitoring",weight:1},s=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",title:"\u542f\u7528 Monitoring",description:"\u7ba1\u7406\u5458\u6216\u96c6\u7fa4\u6240\u6709\u8005\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Rancher \u6765\u90e8\u7f72 Prometheus\uff0c\u4ece\u800c\u76d1\u63a7 Kubernetes \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring.md",tags:[],version:"current",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"\u542f\u7528 Monitoring",weight:1},sidebar:"tutorialSidebar",previous:{title:"Monitoring \u6307\u5357",permalink:"/zh/pages-for-subheaders/monitoring-alerting-guides"},next:{title:"\u5378\u8f7d Monitoring",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring"}},u={},c=[{value:"\u5728\u4e0d\u4f7f\u7528 SSL \u7684\u60c5\u51b5\u4e0b\u542f\u7528 Monitoring",id:"\u5728\u4e0d\u4f7f\u7528-ssl-\u7684\u60c5\u51b5\u4e0b\u542f\u7528-monitoring",level:3},{value:"\u5728\u4f7f\u7528 SSL \u7684\u60c5\u51b5\u4e0b\u542f\u7528 Monitoring",id:"\u5728\u4f7f\u7528-ssl-\u7684\u60c5\u51b5\u4e0b\u542f\u7528-monitoring",level:3}],m={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u7ba1\u7406\u5458"),"\u6216",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#%E9%9B%86%E7%BE%A4%E8%A7%92%E8%89%B2"},"\u96c6\u7fa4\u6240\u6709\u8005"),"\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Rancher \u6765\u90e8\u7f72 Prometheus\uff0c\u4ece\u800c\u76d1\u63a7 Kubernetes \u96c6\u7fa4\u3002"),(0,i.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u65b0\u7684 monitoring \u5e94\u7528\u5728\u96c6\u7fa4\u5185\u542f\u7528\u76d1\u63a7\u548c\u544a\u8b66\u3002"),(0,i.kt)("p",null,"\u4e0d\u8bba\u662f\u5426\u4f7f\u7528 SSL\uff0c\u4f60\u90fd\u53ef\u4ee5\u542f\u7528 monitoring\u3002"),(0,i.kt)("h1",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u5141\u8bb8\u7aef\u53e3 9796 \u4e0a\u7684\u6d41\u91cf\uff0c\u56e0\u4e3a Prometheus \u5c06\u4ece\u8fd9\u91cc\u6293\u53d6\u6307\u6807\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u4f60\u7684\u96c6\u7fa4\u6ee1\u8db3\u8d44\u6e90\u8981\u6c42\u3002\u96c6\u7fa4\u5e94\u81f3\u5c11\u6709 1950Mi \u53ef\u7528\u5185\u5b58\u30012700m CPU \u548c 50Gi \u5b58\u50a8\u3002\u8981\u67e5\u770b\u8d44\u6e90\u9650\u5236\u548c\u8bf7\u6c42\u7684\u660e\u7ec6\uff0c\u8bf7\u67e5\u770b",(0,i.kt)("a",{parentName:"li",href:"/zh/reference-guides/monitoring-v2-configuration/helm-chart-options#%E9%85%8D%E7%BD%AE%E8%B5%84%E6%BA%90%E9%99%90%E5%88%B6%E5%92%8C%E8%AF%B7%E6%B1%82"},"\u6b64\u5904"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u4f7f\u7528 RancherOS \u6216 Flatcar Linux \u8282\u70b9\u7684 RKE \u96c6\u7fa4\u4e0a\u5b89\u88c5 monitoring \u65f6\uff0c\u8bf7\u5c06 etcd \u8282\u70b9\u8bc1\u4e66\u76ee\u5f55\u66f4\u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"/opt/rke/etc/kubernetes/ssl"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u96c6\u7fa4\u662f\u4f7f\u7528 RKE CLI \u914d\u7f6e\u7684\uff0c\u800c\u4e14\u5730\u5740\u8bbe\u7f6e\u4e3a\u4e3b\u673a\u540d\u800c\u4e0d\u662f IP \u5730\u5740\uff0c\u8bf7\u5728\u5b89\u88c5\u7684 Values \u914d\u7f6e\u6b65\u9aa4\u4e2d\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"rkeEtcd.clients.useLocalhost")," \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"\u3002YAML \u7247\u6bb5\u5982\u4e0b\u6240\u793a\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"rkeEtcd:\n  clients:\n    useLocalhost: true\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u8981\u8bbe\u7f6e Alertmanager\u3001Grafana \u6216 Ingress\uff0c\u5fc5\u987b\u901a\u8fc7 Helm chart \u90e8\u7f72\u4e0a\u7684\u8bbe\u7f6e\u6765\u5b8c\u6210\u3002\u5728\u90e8\u7f72\u4e4b\u5916\u521b\u5efa Ingress \u53ef\u80fd\u4f1a\u4ea7\u751f\u95ee\u9898\u3002"))),(0,i.kt)("h1",{id:"\u8bbe\u7f6e\u8d44\u6e90\u9650\u5236\u548c\u8bf7\u6c42"},"\u8bbe\u7f6e\u8d44\u6e90\u9650\u5236\u548c\u8bf7\u6c42"),(0,i.kt)("p",null,"\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," \u65f6\u53ef\u4ee5\u914d\u7f6e\u8d44\u6e90\u8bf7\u6c42\u548c\u9650\u5236\u3002\u8981\u4ece Rancher UI \u914d\u7f6e Prometheus \u8d44\u6e90\uff0c\u8bf7\u5355\u51fb\u5de6\u4e0a\u89d2\u7684",(0,i.kt)("strong",{parentName:"p"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a > \u76d1\u63a7"),"\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u9ed8\u8ba4\u9650\u5236\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/monitoring-v2-configuration/helm-chart-options#%E9%85%8D%E7%BD%AE%E8%B5%84%E6%BA%90%E9%99%90%E5%88%B6%E5%92%8C%E8%AF%B7%E6%B1%82"},"\u6b64\u9875\u9762"),"\u3002"),(0,i.kt)("h1",{id:"\u5b89\u88c5-monitoring-\u5e94\u7528"},"\u5b89\u88c5 Monitoring \u5e94\u7528"),(0,i.kt)("h3",{id:"\u5728\u4e0d\u4f7f\u7528-ssl-\u7684\u60c5\u51b5\u4e0b\u542f\u7528-monitoring"},"\u5728\u4e0d\u4f7f\u7528 SSL \u7684\u60c5\u51b5\u4e0b\u542f\u7528 Monitoring"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u5de5\u5177"),"\uff08\u5de6\u4e0b\u89d2\uff09\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb Monitoring \u7684",(0,i.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u5728 Values \u6b65\u9aa4\u4e2d\u4e3a Alerting\u3001Prometheus \u548c Grafana \u81ea\u5b9a\u4e49\u8bf7\u6c42\u3001\u9650\u5236\u7b49\u3002\u5982\u9700\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"li",href:"/zh/reference-guides/monitoring-v2-configuration/helm-chart-options"},"\u914d\u7f6e\u53c2\u8003"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aMonitoring \u5e94\u7528\u5df2\u90e8\u7f72\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u3002"),(0,i.kt)("h3",{id:"\u5728\u4f7f\u7528-ssl-\u7684\u60c5\u51b5\u4e0b\u542f\u7528-monitoring"},"\u5728\u4f7f\u7528 SSL \u7684\u60c5\u51b5\u4e0b\u542f\u7528 Monitoring"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6309\u7167",(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"\u6b64\u9875\u9762"),"\u4e0a\u7684\u6b65\u9aa4\u521b\u5efa\u5bc6\u6587\uff0c\u4ee5\u4fbf\u5c06 SSL \u7528\u4e8e\u544a\u8b66\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bc6\u6587\u5e94\u8be5\u521b\u5efa\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u3002\u5982\u679c\u5b83\u4e0d\u5b58\u5728\uff0c\u8bf7\u5148\u521b\u5efa\u5b83\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"ca"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"cert")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," \u6587\u4ef6\u6dfb\u52a0\u5230\u5bc6\u6587\u4e2d\u3002")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u542f\u7528 Monitoring \u4ee5\u4e0e SSL \u4e00\u8d77\u4f7f\u7528\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a > Chart"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Monitoring"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6839\u636e\u4f60\u662f\u5426\u5df2\u5b89\u88c5 Monitoring\uff0c\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u6216",(0,i.kt)("strong",{parentName:"li"},"\u66f4\u65b0"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9009\u4e2d",(0,i.kt)("strong",{parentName:"li"},"\u5728\u5b89\u88c5\u524d\u81ea\u5b9a\u4e49 Helm \u9009\u9879"),"\uff0c\u7136\u540e\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u4e0b\u4e00\u6b65"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Alerting"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u8865\u5145\u5bc6\u6587"),"\u5b57\u6bb5\u4e2d\uff0c\u6dfb\u52a0\u4e4b\u524d\u521b\u5efa\u7684\u5bc6\u6587\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aMonitoring \u5e94\u7528\u5df2\u90e8\u7f72\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager#%E5%9C%A8-rancher-ui-%E4%B8%AD%E5%88%9B%E5%BB%BA%E6%8E%A5%E6%94%B6%E5%99%A8"},"\u521b\u5efa\u63a5\u6536\u5668"),"\u65f6\uff0c\u542f\u7528 SSL \u7684\u63a5\u6536\u5668\uff08\u4f8b\u5982\u7535\u5b50\u90ae\u4ef6\u6216 webhook\uff09\u5c06\u5177\u6709 ",(0,i.kt)("strong",{parentName:"p"},"SSL"),"\uff0c\u5176\u4e2d\u5305\u542b ",(0,i.kt)("strong",{parentName:"p"},"CA \u6587\u4ef6\u8def\u5f84"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u8bc1\u4e66\u6587\u4ef6\u8def\u5f84"),"\u548c",(0,i.kt)("strong",{parentName:"p"},"\u5bc6\u94a5\u6587\u4ef6\u8def\u5f84"),"\u5b57\u6bb5\u3002\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"ca"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"cert")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," \u7684\u8def\u5f84\u586b\u5199\u8fd9\u4e9b\u5b57\u6bb5\u3002\u8def\u5f84\u7684\u683c\u5f0f\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/alertmanager/secrets/name-of-file-in-secret"),"\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u4ee5\u4e0b\u952e\u503c\u5bf9\u521b\u5efa\u4e86\u4e00\u4e2a\u5bc6\u6587\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"ca.crt=`base64-content`\ncert.pem=`base64-content`\nkey.pfx=`base64-content`\n")),(0,i.kt)("p",null,"\u5219",(0,i.kt)("strong",{parentName:"p"},"\u8bc1\u4e66\u6587\u4ef6\u8def\u5f84"),"\u9700\u8981\u8bbe\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/alertmanager/secrets/cert.pem"),"\u3002"))}g.isMDXComponent=!0}}]);