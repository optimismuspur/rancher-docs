"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[51410],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),m=n,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return o?r.createElement(h,i(i({ref:t},c),{},{components:o})):r.createElement(h,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},76097:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=o(87462),n=o(63366),a=(o(67294),o(3905)),i=["components"],s={title:"Background Information on HPAs",weight:3027},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas",title:"Background Information on HPAs",description:"The Horizontal Pod Autoscaler (HPA) is a Kubernetes feature that allows you to configure your cluster to automatically scale the services it's running up or down. This section provides explanation on how HPA works with Kubernetes.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas.md",tags:[],version:"current",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Background Information on HPAs",weight:3027},sidebar:"tutorialSidebar",previous:{title:"The Horizontal Pod Autoscaler",permalink:"/pages-for-subheaders/horizontal-pod-autoscaler"},next:{title:"Managing HPAs with the Rancher UI",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui"}},c={},p=[{value:"Why Use Horizontal Pod Autoscaler?",id:"why-use-horizontal-pod-autoscaler",level:2},{value:"How HPA Works",id:"how-hpa-works",level:2},{value:"Horizontal Pod Autoscaler API Objects",id:"horizontal-pod-autoscaler-api-objects",level:2}],d={toc:p};function m(e){var t=e.components,s=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"},"Horizontal Pod Autoscaler")," (HPA) is a Kubernetes feature that allows you to configure your cluster to automatically scale the services it's running up or down. This section provides explanation on how HPA works with Kubernetes."),(0,a.kt)("h2",{id:"why-use-horizontal-pod-autoscaler"},"Why Use Horizontal Pod Autoscaler?"),(0,a.kt)("p",null,"Using HPA, you can automatically scale the number of pods within a replication controller, deployment, or replica set up or down. HPA automatically scales the number of pods that are running for maximum efficiency. Factors that affect the number of pods include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A minimum and maximum number of pods allowed to run, as defined by the user."),(0,a.kt)("li",{parentName:"ul"},"Observed CPU/memory use, as reported in resource metrics."),(0,a.kt)("li",{parentName:"ul"},"Custom metrics provided by third-party metrics application like Prometheus, Datadog, etc.")),(0,a.kt)("p",null,"HPA improves your services by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Releasing hardware resources that would otherwise be wasted by an excessive number of pods."),(0,a.kt)("li",{parentName:"ul"},"Increase/decrease performance as needed to accomplish service level agreements.")),(0,a.kt)("h2",{id:"how-hpa-works"},"How HPA Works"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HPA Schema",src:o(5276).Z,width:"1200",height:"862"})),(0,a.kt)("p",null,"HPA is implemented as a control loop, with a period controlled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," flags below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Flag"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--horizontal-pod-autoscaler-sync-period")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"30s")),(0,a.kt)("td",{parentName:"tr",align:null},"How often HPA audits resource/custom metrics in a deployment.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--horizontal-pod-autoscaler-downscale-delay")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"5m0s")),(0,a.kt)("td",{parentName:"tr",align:null},"Following completion of a downscale operation, how long HPA must wait before launching another downscale operations.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--horizontal-pod-autoscaler-upscale-delay")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"3m0s")),(0,a.kt)("td",{parentName:"tr",align:null},"Following completion of an upscale operation, how long HPA must wait before launching another upscale operation.")))),(0,a.kt)("p",null,"For full documentation on HPA, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"},"Kubernetes Documentation"),"."),(0,a.kt)("h2",{id:"horizontal-pod-autoscaler-api-objects"},"Horizontal Pod Autoscaler API Objects"),(0,a.kt)("p",null,"HPA is an API resource in the Kubernetes ",(0,a.kt)("inlineCode",{parentName:"p"},"autoscaling")," API group. The current stable version is ",(0,a.kt)("inlineCode",{parentName:"p"},"autoscaling/v1"),", which only includes support for CPU autoscaling. To get additional support for scaling based on memory and custom metrics, use the beta version instead: ",(0,a.kt)("inlineCode",{parentName:"p"},"autoscaling/v2beta1"),"."),(0,a.kt)("p",null,"For more information about the HPA API object, see the ",(0,a.kt)("a",{parentName:"p",href:"https://git.k8s.io/community/contributors/design-proposals/autoscaling/horizontal-pod-autoscaler.md#horizontalpodautoscaler-object"},"HPA GitHub Readme"),"."))}m.isMDXComponent=!0},5276:function(e,t,o){t.Z=o.p+"assets/images/horizontal-pod-autoscaler-73e94153b61adc40a276899a326addc9.jpg"}}]);