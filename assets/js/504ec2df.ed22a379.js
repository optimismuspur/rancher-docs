"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[43209],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||r;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86182:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),a=["components"],s={title:"Configuration Options",weight:3},l=void 0,c={unversionedId:"pages-for-subheaders/configuration-options",id:"pages-for-subheaders/configuration-options",title:"Configuration Options",description:"Egress Support",source:"@site/docs/pages-for-subheaders/configuration-options.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/configuration-options",permalink:"/pages-for-subheaders/configuration-options",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/configuration-options.md",tags:[],version:"current",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Configuration Options",weight:3},sidebar:"tutorialSidebar",previous:{title:"Disabling Istio",permalink:"/explanations/integrations-in-rancher/istio/disable-istio"},next:{title:"Enable Istio with Pod Security Policies",permalink:"/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies"}},p={},u=[{value:"Egress Support",id:"egress-support",level:3},{value:"Enabling Automatic Sidecar Injection",id:"enabling-automatic-sidecar-injection",level:3},{value:"Overlay File",id:"overlay-file",level:3},{value:"Selectors and Scrape Configs",id:"selectors-and-scrape-configs",level:3},{value:"Enable Istio with Pod Security Policies",id:"enable-istio-with-pod-security-policies",level:3},{value:"Additional Steps for Installing Istio on an RKE2 Cluster",id:"additional-steps-for-installing-istio-on-an-rke2-cluster",level:3},{value:"Additional Steps for Project Network Isolation",id:"additional-steps-for-project-network-isolation",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"egress-support"},"Egress Support"),(0,r.kt)("p",null,"By default the Egress gateway is disabled, but can be enabled on install or upgrade through the values.yaml or via the ",(0,r.kt)("a",{parentName:"p",href:"#overlay-file"},"overlay file"),"."),(0,r.kt)("h3",{id:"enabling-automatic-sidecar-injection"},"Enabling Automatic Sidecar Injection"),(0,r.kt)("p",null,"Automatic sidecar injection is disabled by default. To enable this, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"sidecarInjectorWebhook.enableNamespacesByDefault=true")," in the values.yaml on install or upgrade. This automatically enables Istio sidecar injection into all new namespaces that are deployed."),(0,r.kt)("h3",{id:"overlay-file"},"Overlay File"),(0,r.kt)("p",null,"An Overlay File is designed to support extensive configuration of your Istio installation. It allows you to make changes to any values available in the ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/reference/config/istio.operator.v1alpha1/"},"IstioOperator API"),". This will ensure you can customize the default installation to fit any scenario. "),(0,r.kt)("p",null,"The Overlay File will add configuration on top of the default installation that is provided from the Istio chart installation. This means you do not need to redefine the components that already defined for installation. "),(0,r.kt)("p",null,"For more information on Overlay Files, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/setup/install/istioctl/#configure-component-settings"},"Istio documentation.")),(0,r.kt)("h3",{id:"selectors-and-scrape-configs"},"Selectors and Scrape Configs"),(0,r.kt)("p",null,"The Monitoring app sets ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=false")," which enables monitoring across all namespaces by default. This ensures you can view traffic, metrics and graphs for resources deployed in a namespace with ",(0,r.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled")," label. "),(0,r.kt)("p",null,"If you would like to limit Prometheus to specific namespaces, set ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=true"),". Once you do this, you will need to add additional configuration to continue to monitor your resources."),(0,r.kt)("p",null,"For details, refer to ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},"this section.")),(0,r.kt)("h3",{id:"enable-istio-with-pod-security-policies"},"Enable Istio with Pod Security Policies"),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies"},"this section.")),(0,r.kt)("h3",{id:"additional-steps-for-installing-istio-on-an-rke2-cluster"},"Additional Steps for Installing Istio on an RKE2 Cluster"),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster"},"this section.")),(0,r.kt)("h3",{id:"additional-steps-for-project-network-isolation"},"Additional Steps for Project Network Isolation"),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation"},"this section.")))}f.isMDXComponent=!0}}]);