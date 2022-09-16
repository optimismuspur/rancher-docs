"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[93441],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92961:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"Cluster Metrics",weight:3,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/monitoring/cluster-metrics","/rancher/v2.0-v2.4/en/cluster-admin/tools/monitoring/cluster-metrics","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/monitoring/cluster-monitoring/cluster-metrics","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/cluster-metrics","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/cluster-metrics/"]},l=void 0,c={unversionedId:"explanations/integrations-in-rancher/cluster-monitoring/cluster-metrics",id:"version-2.0-2.4/explanations/integrations-in-rancher/cluster-monitoring/cluster-metrics",title:"Cluster Metrics",description:"Available as of v2.2.0",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-monitoring/cluster-metrics.md",sourceDirName:"explanations/integrations-in-rancher/cluster-monitoring",slug:"/explanations/integrations-in-rancher/cluster-monitoring/cluster-metrics",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/cluster-metrics",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-monitoring/cluster-metrics.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"Cluster Metrics",weight:3,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/monitoring/cluster-metrics","/rancher/v2.0-v2.4/en/cluster-admin/tools/monitoring/cluster-metrics","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/monitoring/cluster-monitoring/cluster-metrics","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/cluster-metrics","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/cluster-metrics/"]},sidebar:"tutorialSidebar",previous:{title:"Integrating Rancher and Prometheus for Cluster Monitoring",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/cluster-monitoring"},next:{title:"Prometheus Custom Metrics Adapter",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/custom-metrics"}},p={},u=[{value:"Finding Node Metrics",id:"finding-node-metrics",level:2},{value:"Etcd Metrics",id:"etcd-metrics",level:3},{value:"Kubernetes Components Metrics",id:"kubernetes-components-metrics",level:3},{value:"Rancher Logging Metrics",id:"rancher-logging-metrics",level:2},{value:"Finding Workload Metrics",id:"finding-workload-metrics",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,i.kt)("p",null,"Cluster metrics display the hardware utilization for all nodes in your cluster, regardless of its role. They give you a global monitoring insight into the cluster."),(0,i.kt)("p",null,"Some of the biggest metrics to look out for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"CPU Utilization")),(0,i.kt)("p",{parentName:"li"},"  High load either indicates that your cluster is running efficiently or that you're running out of CPU resources.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Disk Utilization")),(0,i.kt)("p",{parentName:"li"},"  Be on the lookout for increased read and write rates on nodes nearing their disk capacity. This advice is especially true for etcd nodes, as running out of storage on an etcd node leads to cluster failure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Memory Utilization")),(0,i.kt)("p",{parentName:"li"},"  Deltas in memory utilization usually indicate a memory leak.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Load Average")),(0,i.kt)("p",{parentName:"li"},"   Generally, you want your load average to match your number of logical CPUs for the cluster. For example, if your cluster has 8 logical CPUs, the ideal load average would be 8 as well. If you load average is well under the number of logical CPUs for the cluster, you may want to reduce cluster resources. On the other hand, if your average is over 8, your cluster may need more resources."))),(0,i.kt)("h2",{id:"finding-node-metrics"},"Finding Node Metrics"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, navigate to the cluster that you want to view metrics.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Nodes")," in the navigation bar.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select a specific node and click on its name.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Node Metrics"),"."))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/expression#cluster-metrics"},(0,i.kt)("em",{parentName:"a"},"Get expressions for Cluster Metrics"))),(0,i.kt)("h3",{id:"etcd-metrics"},"Etcd Metrics"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Only supported for ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher launched Kubernetes clusters"),".")),(0,i.kt)("p",null,"Etcd metrics display the operations of the etcd database on each of your cluster nodes. After establishing a baseline of normal etcd operational metrics, observe them for abnormal deltas between metric refreshes, which indicate potential issues with etcd. Always address etcd issues immediately!"),(0,i.kt)("p",null,"You should also pay attention to the text at the top of the etcd metrics, which displays leader election statistics. This text indicates if etcd currently has a leader, which is the etcd instance that coordinates the other etcd instances in your cluster. A large increase in leader changes implies etcd is unstable. If you notice a change in leader election statistics, you should investigate them for issues."),(0,i.kt)("p",null,"Some of the biggest metrics to look out for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Etcd has a leader")),(0,i.kt)("p",{parentName:"li"},"  etcd is usually deployed on multiple nodes and elects a leader to coordinate its operations. If etcd does not have a leader, its operations are not being coordinated.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Number of leader changes")),(0,i.kt)("p",{parentName:"li"},"  If this statistic suddenly grows, it usually indicates network communication issues that constantly force the cluster to elect a new leader."))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/expression#etcd-metrics"},(0,i.kt)("em",{parentName:"a"},"Get expressions for Etcd Metrics"))),(0,i.kt)("h3",{id:"kubernetes-components-metrics"},"Kubernetes Components Metrics"),(0,i.kt)("p",null,"Kubernetes components metrics display data about the cluster's individual Kubernetes components. Primarily, it displays information about connections and latency for each component: the API server, controller manager, scheduler, and ingress controller."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," The metrics for the controller manager, scheduler and ingress controller are only supported for ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher launched Kubernetes clusters"),".")),(0,i.kt)("p",null,"When analyzing Kubernetes component metrics, don't be concerned about any single standalone metric in the charts and graphs that display. Rather, you should establish a baseline for metrics considered normal following a period of observation, e.g. the range of values that your components usually operate within and are considered normal. After you establish this baseline, be on the lookout for large deltas in the charts and graphs, as these big changes usually indicate a problem that you need to investigate."),(0,i.kt)("p",null,"Some of the more important component metrics to monitor are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"API Server Request Latency")),(0,i.kt)("p",{parentName:"li"},"  Increasing API response times indicate there's a generalized problem that requires investigation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"API Server Request Rate")),(0,i.kt)("p",{parentName:"li"},"  Rising API request rates usually coincide with increased API response times. Increased request rates also indicate a generalized problem requiring investigation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Scheduler Preemption Attempts")),(0,i.kt)("p",{parentName:"li"},"  If you see a spike in scheduler preemptions, it's an indication that you're running out of hardware resources, as Kubernetes is recognizing it doesn't have enough resources to run all your pods and is prioritizing the more important ones.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Scheduling Failed Pods")),(0,i.kt)("p",{parentName:"li"},"  Failed pods can have a variety of causes, such as unbound persistent volume claims, exhausted hardware resources, non-responsive nodes, etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ingress Controller Request Process Time")),(0,i.kt)("p",{parentName:"li"},"  How fast ingress is routing connections to your cluster services."))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/expression#kubernetes-components-metrics"},(0,i.kt)("em",{parentName:"a"},"Get expressions for Kubernetes Component Metrics"))),(0,i.kt)("h2",{id:"rancher-logging-metrics"},"Rancher Logging Metrics"),(0,i.kt)("p",null,"Although the Dashboard for a cluster primarily displays data sourced from Prometheus, it also displays information for cluster logging, provided that you have ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/cluster-logging"},"configured Rancher to use a logging service"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/expression#rancher-logging-metrics"},(0,i.kt)("em",{parentName:"a"},"Get expressions for Rancher Logging Metrics"))),(0,i.kt)("h2",{id:"finding-workload-metrics"},"Finding Workload Metrics"),(0,i.kt)("p",null,"Workload metrics display the hardware utilization for a Kubernetes workload. You can also view metrics for ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"deployments"),", ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"stateful sets")," and so on."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that you want to view workload metrics.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the main navigation bar, choose ",(0,i.kt)("strong",{parentName:"p"},"Resources > Workloads.")," In versions before v2.3.0, choose ",(0,i.kt)("strong",{parentName:"p"},"Workloads")," on the main navigation bar.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select a specific workload and click on its name.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Pods")," section, select a specific pod and click on its name."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View the Pod Metrics:")," Click on ",(0,i.kt)("strong",{parentName:"li"},"Pod Metrics"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View the Container Metrics:")," In the ",(0,i.kt)("strong",{parentName:"li"},"Containers")," section, select a specific container and click on its name. Click on ",(0,i.kt)("strong",{parentName:"li"},"Container Metrics"),".")))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/expression#workload-metrics"},(0,i.kt)("em",{parentName:"a"},"Get expressions for Workload Metrics"))))}d.isMDXComponent=!0}}]);