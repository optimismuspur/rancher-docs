"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[63310],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,k=u["".concat(d,".").concat(m)]||u[m]||l[m]||o;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},41503:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Adding a Sidecar",weight:3029,aliases:["/rancher/v2.5/en/tasks/workloads/add-a-sidecar/","/rancher/v2.5/en/k8s-in-rancher/workloads/add-a-sidecar","/rancher/v2.x/en/k8s-in-rancher/workloads/add-a-sidecar/"]},d=void 0,p={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",title:"Adding a Sidecar",description:"A sidecar is a container that extends or enhances the main container in a pod. The main container and the sidecar share a pod, and therefore share the same network space and storage. You can add sidecars to existing workloads by using the Add a Sidecar option.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",permalink:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar.md",tags:[],version:"2.5",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Adding a Sidecar",weight:3029,aliases:["/rancher/v2.5/en/tasks/workloads/add-a-sidecar/","/rancher/v2.5/en/k8s-in-rancher/workloads/add-a-sidecar","/rancher/v2.x/en/k8s-in-rancher/workloads/add-a-sidecar/"]},sidebar:"tutorialSidebar",previous:{title:"Upgrading Workloads",permalink:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads"},next:{title:"The Horizontal Pod Autoscaler",permalink:"/zh/v2.5/pages-for-subheaders/horizontal-pod-autoscaler"}},c={},l=[{value:"Related Links",id:"related-links",level:2}],u={toc:l};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"sidecar")," is a container that extends or enhances the main container in a pod. The main container and the sidecar share a pod, and therefore share the same network space and storage. You can add sidecars to existing workloads by using the ",(0,o.kt)("strong",{parentName:"p"},"Add a Sidecar")," option."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, open the project running the workload you want to add a sidecar to.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Resources > Workloads."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find the workload that you want to extend. Select ",(0,o.kt)("strong",{parentName:"p"},"\u22ee"," icon (...) > Add a Sidecar"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for the sidecar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select a ",(0,o.kt)("strong",{parentName:"p"},"Sidecar Type"),". This option determines if the sidecar container is deployed before or after the main container is deployed."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Standard Container:")),(0,o.kt)("p",{parentName:"li"},"  The sidecar container is deployed after the main container.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Init Container:")),(0,o.kt)("p",{parentName:"li"},"  The sidecar container is deployed before the main container.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Docker Image")," field, enter the name of the Docker image that you want to deploy in support of the main container. During deployment, Rancher pulls this image from ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/explore/"},"Docker Hub"),". Enter the name exactly as it appears on Docker Hub.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the remaining options. You can read about them in ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"Deploying Workloads"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Launch"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The sidecar is deployed according to your parameters. Following its deployment, you can view the sidecar by selecting ",(0,o.kt)("strong",{parentName:"p"},"\u22ee"," icon (...) > Edit")," for the main deployment."),(0,o.kt)("h2",{id:"related-links"},"Related Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/"},"The Distributed System ToolKit: Patterns for Composite Containers"))))}m.isMDXComponent=!0}}]);