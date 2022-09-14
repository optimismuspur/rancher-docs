"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[68205],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),k=r,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||i;return t?a.createElement(d,o(o({ref:n},p),{},{components:t})):a.createElement(d,o({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},21148:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],c={title:"\u914d\u7f6e",weight:3},s=void 0,l={unversionedId:"explanations/integrations-in-rancher/cis-scans/configuration-reference",id:"explanations/integrations-in-rancher/cis-scans/configuration-reference",title:"\u914d\u7f6e",description:"\u6b64\u914d\u7f6e\u53c2\u8003\u7528\u4e8e\u5e2e\u52a9\u4f60\u7ba1\u7406\u7531 rancher-cis-benchmark \u5e94\u7528\u521b\u5efa\u7684\u81ea\u5b9a\u4e49\u8d44\u6e90\u3002\u8fd9\u4e9b\u8d44\u6e90\u7528\u4e8e\u5728\u96c6\u7fa4\u4e0a\u6267\u884c CIS \u626b\u63cf\u3001\u8df3\u8fc7\u6d4b\u8bd5\u3001\u8bbe\u7f6e\u626b\u63cf\u4f7f\u7528\u7684\u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\u548c\u5176\u4ed6\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/explanations/integrations-in-rancher/cis-scans/configuration-reference.md",sourceDirName:"explanations/integrations-in-rancher/cis-scans",slug:"/explanations/integrations-in-rancher/cis-scans/configuration-reference",permalink:"/zh/explanations/integrations-in-rancher/cis-scans/configuration-reference",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/cis-scans/configuration-reference.md",tags:[],version:"current",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"\u914d\u7f6e",weight:3},sidebar:"tutorialSidebar",previous:{title:"CIS \u626b\u63cf",permalink:"/zh/pages-for-subheaders/cis-scans"},next:{title:"RBAC",permalink:"/zh/explanations/integrations-in-rancher/cis-scans/rbac-for-cis-scans"}},p={},m=[{value:"\u626b\u63cf",id:"\u626b\u63cf",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"Benchmark \u7248\u672c",id:"benchmark-\u7248\u672c",level:3}],u={toc:m};function k(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6b64\u914d\u7f6e\u53c2\u8003\u7528\u4e8e\u5e2e\u52a9\u4f60\u7ba1\u7406\u7531 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," \u5e94\u7528\u521b\u5efa\u7684\u81ea\u5b9a\u4e49\u8d44\u6e90\u3002\u8fd9\u4e9b\u8d44\u6e90\u7528\u4e8e\u5728\u96c6\u7fa4\u4e0a\u6267\u884c CIS \u626b\u63cf\u3001\u8df3\u8fc7\u6d4b\u8bd5\u3001\u8bbe\u7f6e\u626b\u63cf\u4f7f\u7528\u7684\u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\u548c\u5176\u4ed6\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u8981\u914d\u7f6e\u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u8f6c\u5230",(0,i.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u4eea\u8868\u677f\u3002\u8981\u914d\u7f6e CIS \u626b\u63cf\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u914d\u7f6e CIS \u626b\u63cf\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"CIS Benchmark"),"\u3002")),(0,i.kt)("h3",{id:"\u626b\u63cf"},"\u626b\u63cf"),(0,i.kt)("p",null,"\u626b\u63cf\u662f\u7528\u6765\u6839\u636e\u5b9a\u4e49\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5728\u96c6\u7fa4\u4e0a\u89e6\u53d1 CIS \u626b\u63cf\u7684\u3002\u626b\u63cf\u5b8c\u6210\u540e\u4f1a\u521b\u5efa\u4e00\u4efd\u62a5\u544a\u3002"),(0,i.kt)("p",null,"\u914d\u7f6e\u626b\u63cf\u65f6\uff0c\u4f60\u9700\u8981\u5b9a\u4e49\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"scanProfileName")," \u53c2\u6570\u4e00\u8d77\u4f7f\u7528\u7684\u626b\u63cf\u914d\u7f6e\u6587\u4ef6\u7684\u540d\u79f0\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a ClusterScan \u81ea\u5b9a\u4e49\u8d44\u6e90\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: cis.cattle.io/v1\nkind: ClusterScan\nmetadata:\n  name: rke-cis\nspec:\n  scanProfileName: rke-profile-hardened\n")),(0,i.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u5305\u542b CIS \u626b\u63cf\u7684\u914d\u7f6e\uff0c\u5305\u62ec\u8981\u4f7f\u7528\u7684 Benchmark \u6d4b\u8bd5\u7248\u672c\u4ee5\u53ca\u8981\u5728\u8be5 Benchmark \u6d4b\u8bd5\u4e2d\u8df3\u8fc7\u7684\u6d4b\u8bd5\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e9b ClusterScanProfile \u4f1a\u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," Chart \u7684\u4e00\u90e8\u5206\u8fdb\u884c\u5b89\u88c5\u3002\u5982\u679c\u7528\u6237\u7f16\u8f91\u4e86\u8fd9\u4e9b\u9ed8\u8ba4 Benchmark \u6216\u914d\u7f6e\u6587\u4ef6\uff0c\u5b83\u4eec\u4f1a\u5728\u4e0b\u4e00\u6b21 Chart \u66f4\u65b0\u65f6\u88ab\u91cd\u7f6e\u3002\u56e0\u6b64\uff0c\u5efa\u8bae\u7528\u6237\u4e0d\u8981\u7f16\u8f91\u9ed8\u8ba4\u7684 ClusterScanProfile\u3002"))),(0,i.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u514b\u9686 ClusterScanProfile \u6765\u521b\u5efa\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u8df3\u8fc7\u7684\u6d4b\u8bd5\u4f1a\u5217\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"skipTests")," \u53c2\u6570\u4e0b\u3002"),(0,i.kt)("p",null,"\u521b\u5efa\u65b0\u914d\u7f6e\u6587\u4ef6\u65f6\uff0c\u4f60\u8fd8\u9700\u8981\u547d\u540d\u914d\u7f6e\u6587\u4ef6\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ClusterScanProfile")," \u793a\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: cis.cattle.io/v1\nkind: ClusterScanProfile\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: clusterscan-operator\n    meta.helm.sh/release-namespace: cis-operator-system\n  labels:\n    app.kubernetes.io/managed-by: Helm\n  name: "<example-profile>"\nspec:\n  benchmarkVersion: cis-1.5\n  skipTests:\n    - "1.1.20"\n    - "1.1.21"\n')),(0,i.kt)("h3",{id:"benchmark-\u7248\u672c"},"Benchmark \u7248\u672c"),(0,i.kt)("p",null,"Benchmark \u7248\u672c\u662f\u6307\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-bench")," \u8fd0\u884c\u7684 Benchmark \u540d\u79f0\uff0c\u4ee5\u53ca\u8be5 Benchmark \u7684\u6709\u6548\u914d\u7f6e\u53c2\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ClusterScanBenchmark")," \u5b9a\u4e49\u4e86 CIS ",(0,i.kt)("inlineCode",{parentName:"p"},"BenchmarkVersion")," \u7684\u540d\u79f0\u548c\u6d4b\u8bd5\u914d\u7f6e\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"BenchmarkVersion")," \u540d\u79f0\u662f\u63d0\u4f9b\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-bench")," \u5de5\u5177\u7684\u53c2\u6570\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e9b ",(0,i.kt)("inlineCode",{parentName:"p"},"BenchmarkVersion")," \u540d\u79f0\u548c\u6d4b\u8bd5\u914d\u7f6e\u4f1a\u4f5c\u4e3a CIS \u626b\u63cf\u5e94\u7528\u7684\u4e00\u90e8\u5206\u8fdb\u884c\u6253\u5305\u3002\u542f\u7528\u6b64\u529f\u80fd\u540e\uff0c\u8fd9\u4e9b\u9ed8\u8ba4 BenchmarkVersion \u5c06\u81ea\u52a8\u5b89\u88c5\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u6765\u521b\u5efa ClusterScanProfile\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u7528\u6237\u7f16\u8f91\u4e86\u9ed8\u8ba4\u7684 BenchmarkVersion\uff0c\u5b83\u4eec\u4f1a\u5728\u4e0b\u4e00\u6b21 Chart \u66f4\u65b0\u65f6\u88ab\u91cd\u7f6e\u3002\u56e0\u6b64\uff0c\u4e0d\u5efa\u8bae\u7f16\u8f91\u9ed8\u8ba4\u7684 ClusterScanBenchmark\u3002"))),(0,i.kt)("p",null,"ClusterScanBenchmark \u7531\u4ee5\u4e0b\u5b57\u6bb5\u7ec4\u6210\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClusterProvider"),"\uff1a\u6b64 Benchmark \u9002\u7528\u7684\u96c6\u7fa4\u63d0\u4f9b\u5546\u540d\u79f0\uff0c\u4f8b\u5982\uff0cRKE\u3001EKS\u3001GKE\u3002\u5982\u679c\u6b64\u57fa\u51c6\u6d4b\u8bd5\u53ef\u4ee5\u5728\u4efb\u4f55\u96c6\u7fa4\u7c7b\u578b\u4e0a\u8fd0\u884c\uff0c\u5219\u7559\u7a7a\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MinKubernetesVersion"),"\uff1a\u96c6\u7fa4\u8fd0\u884c\u6b64 Benchmark \u6d4b\u8bd5\u6240\u9700\u7684\u6700\u4f4e kubernetes \u7248\u672c\u3002\u5982\u679c\u4e0d\u4f9d\u8d56\u7279\u5b9a\u7684 Kubernetes \u7248\u672c\uff0c\u5219\u7559\u7a7a\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MaxKubernetesVersion"),"\uff1a\u96c6\u7fa4\u8fd0\u884c\u6b64 Benchmark \u6d4b\u8bd5\u6240\u9700\u7684\u6700\u9ad8 Kubernetes \u7248\u672c\u3002\u5982\u679c\u4e0d\u4f9d\u8d56\u7279\u5b9a\u7684 Kubernetes \u7248\u672c\uff0c\u5219\u7559\u7a7a\u3002")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ClusterScanBenchmark")," \u793a\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: cis.cattle.io/v1\nkind: ClusterScanBenchmark\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: clusterscan-operator\n    meta.helm.sh/release-namespace: cis-operator-system\n  creationTimestamp: "2020-08-28T18:18:07Z"\n  generation: 1\n  labels:\n    app.kubernetes.io/managed-by: Helm\n  name: cis-1.5\n  resourceVersion: "203878"\n  selfLink: /apis/cis.cattle.io/v1/clusterscanbenchmarks/cis-1.5\n  uid: 309e543e-9102-4091-be91-08d7af7fb7a7\nspec:\n  clusterProvider: ""\n  minKubernetesVersion: 1.15.0\n')))}k.isMDXComponent=!0}}]);