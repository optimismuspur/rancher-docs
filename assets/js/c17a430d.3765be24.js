"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[36425],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return d}});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(i),d=n,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return i?a.createElement(m,r(r({ref:t},c),{},{components:i})):a.createElement(m,r({ref:t},c))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var u=2;u<o;u++)r[u]=i[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},82166:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=i(87462),n=i(63366),o=(i(67294),i(3905)),r=["components"],s={title:"Istio",weight:14,aliases:["/rancher/v2.5/en/dashboard/istio","/rancher/v2.x/en/istio/","/rancher/v2.x/en/istio/v2.5/"]},l=void 0,u={unversionedId:"pages-for-subheaders/istio",id:"version-2.5/pages-for-subheaders/istio",title:"Istio",description:"Istio is an open-source tool that makes it easier for DevOps teams to observe, secure, control, and troubleshoot the traffic within a complex network of microservices.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/istio.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/istio",permalink:"/v2.5/pages-for-subheaders/istio",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/istio.md",tags:[],version:"2.5",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Istio",weight:14,aliases:["/rancher/v2.5/en/dashboard/istio","/rancher/v2.x/en/istio/","/rancher/v2.x/en/istio/v2.5/"]},sidebar:"tutorialSidebar",previous:{title:"Using Fleet Behind a Proxy",permalink:"/v2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy"},next:{title:"CPU and Memory Allocations",permalink:"/v2.5/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"}},c={},p=[{value:"What&#39;s New in Rancher v2.5",id:"whats-new-in-rancher-v25",level:2},{value:"Tools Bundled with Istio",id:"tools-bundled-with-istio",level:2},{value:"Kiali",id:"kiali",level:3},{value:"Jaeger",id:"jaeger",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup Guide",id:"setup-guide",level:2},{value:"Remove Istio",id:"remove-istio",level:2},{value:"Migrate From Previous Istio Version",id:"migrate-from-previous-istio-version",level:2},{value:"Accessing Visualizations",id:"accessing-visualizations",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Multiple Ingresses",id:"multiple-ingresses",level:3},{value:"Egress Support",id:"egress-support",level:3},{value:"Additional Steps for Installing Istio on an RKE2 Cluster",id:"additional-steps-for-installing-istio-on-an-rke2-cluster",level:2}],h={toc:p};function d(e){var t=e.components,s=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio")," is an open-source tool that makes it easier for DevOps teams to observe, secure, control, and troubleshoot the traffic within a complex network of microservices."),(0,o.kt)("p",null,"As a network of microservices changes and grows, the interactions between them can become increasingly difficult to manage and understand. In such a situation, it is useful to have a service mesh as a separate infrastructure layer. Istio's service mesh lets you manipulate traffic between microservices without changing the microservices directly."),(0,o.kt)("p",null,"Our integration of Istio is designed so that a Rancher operator, such as an administrator or cluster owner, can deliver Istio to a team of developers. Then developers can use Istio to enforce security policies, troubleshoot problems, or manage traffic for green/blue deployments, canary deployments, or A/B testing."),(0,o.kt)("p",null,"This core service mesh provides features that include but are not limited to the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Traffic Management")," such as ingress and egress routing, circuit breaking, mirroring."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security")," with resources to authenticate and authorize traffic and users, mTLS included."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Observability")," of logs, metrics, and distributed traffic flows.")),(0,o.kt)("p",null,"After ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/istio-setup-guide"},"setting up istio")," you can leverage Istio's control plane functionality through the Cluster Explorer, ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"istioctl"),"."),(0,o.kt)("p",null,"Istio needs to be set up by a ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-admin")," before it can be used in a project."),(0,o.kt)("h2",{id:"whats-new-in-rancher-v25"},"What's New in Rancher v2.5"),(0,o.kt)("p",null,"The overall architecture of Istio has been simplified. A single component, Istiod, has been created by combining Pilot, Citadel, Galley and the sidecar injector. Node Agent functionality has also been merged into istio-agent."),(0,o.kt)("p",null,"Addons that were previously installed by Istio (cert-manager, Grafana, Jaeger, Kiali, Prometheus, Zipkin) will now need to be installed separately. Istio will support installation of integrations that are from the Istio Project and will maintain compatibility with those that are not."),(0,o.kt)("p",null,"A Prometheus integration will still be available through an installation of ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/monitoring-and-alerting"},"Rancher Monitoring"),", or by installing your own Prometheus operator. Rancher's Istio chart will also install Kiali by default to ensure you can get a full picture of your microservices out of the box."),(0,o.kt)("p",null,"Istio has migrated away from Helm as a way to install Istio and now provides installation through the istioctl binary or Istio Operator. To ensure the easiest interaction with Istio, Rancher's Istio will maintain a Helm chart that utilizes the istioctl binary to manage your Istio installation."),(0,o.kt)("p",null,"This Helm chart will be available via the Apps and Marketplace in the UI. A user that has access to the Rancher Chart's catalog will need to set up Istio before it can be used in the project."),(0,o.kt)("h2",{id:"tools-bundled-with-istio"},"Tools Bundled with Istio"),(0,o.kt)("p",null,"Our ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio")," installer wraps the istioctl binary commands in a handy Helm chart, including an overlay file option to allow complex customization."),(0,o.kt)("p",null,"It also includes the following:"),(0,o.kt)("h3",{id:"kiali"},"Kiali"),(0,o.kt)("p",null,"Kiali is a comprehensive visualization aid used for graphing traffic flow throughout the service mesh. It allows you to see how they are connected, including the traffic rates and latencies between them."),(0,o.kt)("p",null,"You can check the health of the service mesh, or drill down to see the incoming and outgoing requests to a single component."),(0,o.kt)("h3",{id:"jaeger"},"Jaeger"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Bundled as of v2.5.4")),(0,o.kt)("p",null,"Our Istio installer includes a quick-start, all-in-one installation of ",(0,o.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"Jaeger,")," a tool used for tracing distributed systems."),(0,o.kt)("p",null,"Note that this is not a production-qualified deployment of Jaeger. This deployment uses an in-memory storage component, while a persistent storage component is recommended for production. For more information on which deployment strategy you may need, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/latest/operator/#production-strategy"},"Jaeger documentation.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before enabling Istio, we recommend that you confirm that your Rancher worker nodes have enough ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},"CPU and memory")," to run all of the components of Istio."),(0,o.kt)("p",null,"If you are installing Istio on RKE2 cluster, some additional steps are required. For details, see ",(0,o.kt)("a",{parentName:"p",href:"#additional-steps-for-installing-istio-on-an-rke2-cluster"},"this section.")),(0,o.kt)("h2",{id:"setup-guide"},"Setup Guide"),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/istio-setup-guide"},"setup guide")," for instructions on how to set up Istio and use it in a project."),(0,o.kt)("h2",{id:"remove-istio"},"Remove Istio"),(0,o.kt)("p",null,"To remove Istio components from a cluster, namespace, or workload, refer to the section on ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/istio/disable-istio"},"uninstalling Istio.")),(0,o.kt)("h2",{id:"migrate-from-previous-istio-version"},"Migrate From Previous Istio Version"),(0,o.kt)("p",null,"There is no upgrade path for Istio versions less than 1.7.x. To successfully install Istio in the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer"),", you will need to disable your existing Istio in the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Manager"),"."),(0,o.kt)("p",null,"If you have a significant amount of additional Istio CRDs you might consider manually migrating CRDs that are supported in both versions of Istio. You can do this by running ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get <resource> -n istio-system -o yaml"),", save the output yaml and re-apply in the new version."),(0,o.kt)("p",null,"Another option is to manually uninstall istio resources one at a time, but leave the resources that are supported in both versions of Istio and that will not be installed by the newest version. This method is more likely to result in issues installing the new version, but could be a good option depending on your situation."),(0,o.kt)("h2",{id:"accessing-visualizations"},"Accessing Visualizations"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"By default, only cluster-admins have access to Kiali. For instructions on how to allow admin, edit or views roles to access them, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/istio/rbac-for-istio"},"this section."))),(0,o.kt)("p",null,"After Istio is set up in a cluster, Grafana, Prometheus,and Kiali are available in the Rancher UI."),(0,o.kt)("p",null,"To access the Grafana and Prometheus visualizations, from the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer")," navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Monitoring")," app overview page, and click on ",(0,o.kt)("strong",{parentName:"p"},"Grafana")," or ",(0,o.kt)("strong",{parentName:"p"},"Prometheus")),(0,o.kt)("p",null,"To access the Kiali visualization, from the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer")," navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Istio")," app overview page, and click on ",(0,o.kt)("strong",{parentName:"p"},"Kiali"),". From here you can access the ",(0,o.kt)("strong",{parentName:"p"},"Traffic Graph")," tab or the ",(0,o.kt)("strong",{parentName:"p"},"Traffic Metrics")," tab to see network visualizations and metrics."),(0,o.kt)("p",null,"By default, all namespace will picked up by prometheus and make data available for Kiali graphs. Refer to ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},"selector/scrape config setup")," if you would like to use a different configuration for prometheus data scraping."),(0,o.kt)("p",null,"Your access to the visualizations depend on your role. Grafana and Prometheus are only available for ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-admin")," roles. The Kiali UI is available only to ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-admin")," by default, but ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-admin")," can allow other roles to access them by editing the Istio values.yaml."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"Istio installs a service mesh that uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/learn/service-mesh"},"Envoy")," sidecar proxies to intercept traffic to each workload. These sidecars intercept and manage service-to-service communication, allowing fine-grained observation and control over traffic within the cluster."),(0,o.kt)("p",null,"Only workloads that have the Istio sidecar injected can be tracked and controlled by Istio."),(0,o.kt)("p",null,"When a namespace has Istio enabled, new workloads deployed in the namespace will automatically have the Istio sidecar. You need to manually enable Istio in preexisting workloads."),(0,o.kt)("p",null,"For more information on the Istio sidecar, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/kubernetes/additional-setup/sidecar-injection/"},"Istio sidecare-injection docs")," and for more information on Istio's architecture, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/ops/deployment/architecture/"},"Istio Architecture docs")),(0,o.kt)("h3",{id:"multiple-ingresses"},"Multiple Ingresses"),(0,o.kt)("p",null,"By default, each Rancher-provisioned cluster has one NGINX ingress controller allowing traffic into the cluster. Istio also installs an ingress gateway by default into the ",(0,o.kt)("inlineCode",{parentName:"p"},"istio-system")," namespace.  The result is that your cluster will have two ingresses in your cluster."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"In an Istio-enabled cluster, you can have two ingresses: the default Nginx ingress, and the default Istio controller.",src:i(74025).Z,width:"691",height:"572"})),(0,o.kt)("p",null," Additional Istio Ingress gateways can be enabled via the ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/configuration-options#overlay-file"},"overlay file"),"."),(0,o.kt)("h3",{id:"egress-support"},"Egress Support"),(0,o.kt)("p",null,"By default the Egress gateway is disabled, but can be enabled on install or upgrade through the values.yaml or via the ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/configuration-options#overlay-file"},"overlay file"),"."),(0,o.kt)("h2",{id:"additional-steps-for-installing-istio-on-an-rke2-cluster"},"Additional Steps for Installing Istio on an RKE2 Cluster"),(0,o.kt)("p",null,"To install Istio on an RKE2 cluster, follow the steps in ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster"},"this section.")))}d.isMDXComponent=!0},74025:function(e,t,i){t.Z=i.p+"assets/images/istio-ingress-3ca2b3bfa19fe1f0d38b74966b383ac0.svg"}}]);