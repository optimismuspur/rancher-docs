"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[68750],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=l(n),m=o,p=g["".concat(s,".").concat(m)]||g[m]||d[m]||a;return n?r.createElement(p,i(i({ref:t},c),{},{components:n})):r.createElement(p,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},89941:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={title:"Alertmanager Configuration",weight:1},s=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",id:"version-2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",title:"Alertmanager Configuration",description:"It is usually not necessary to directly edit the Alertmanager custom resource. For most use cases, you will only need to edit the Receivers and Routes to configure notifications.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration",slug:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager.md",tags:[],version:"2.5",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Alertmanager Configuration",weight:1},sidebar:"tutorialSidebar",previous:{title:"Advanced Configuration",permalink:"/zh/v2.5/pages-for-subheaders/advanced-configuration"},next:{title:"Prometheus Configuration",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus"}},c={},d=[{value:"About the Alertmanager Custom Resource",id:"about-the-alertmanager-custom-resource",level:2},{value:"Deeply Nested Routes",id:"deeply-nested-routes",level:3},{value:"Multiple Alertmanager Replicas",id:"multiple-alertmanager-replicas",level:3}],g={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It is usually not necessary to directly edit the Alertmanager custom resource. For most use cases, you will only need to edit the Receivers and Routes to configure notifications."),(0,a.kt)("p",null,"When Receivers and Routes are updated, the monitoring application will automatically update the Alertmanager custom resource to be consistent with those changes."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This section assumes familiarity with how monitoring components work together. For more information about Alertmanager, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works#how-alertmanager-works"},"this section."))),(0,a.kt)("h2",{id:"about-the-alertmanager-custom-resource"},"About the Alertmanager Custom Resource"),(0,a.kt)("p",null,"By default, Rancher Monitoring deploys a single Alertmanager onto a cluster that uses a default Alertmanager Config Secret."),(0,a.kt)("p",null,"You may want to edit the Alertmanager custom resource if you would like to take advantage of advanced options that are not exposed in the Rancher UI forms, such as the ability to create a routing tree structure that is more than two levels deep."),(0,a.kt)("p",null,"It is also possible to create more than one Alertmanager in a cluster, which may be useful if you want to implement namespace-scoped monitoring. In this case, you should manage the Alertmanager custom resources  using the same underlying Alertmanager Config Secret."),(0,a.kt)("h3",{id:"deeply-nested-routes"},"Deeply Nested Routes"),(0,a.kt)("p",null,"While the Rancher UI only supports a routing tree that is two levels deep, you can configure more deeply nested routing structures by editing the Alertmanager YAML."),(0,a.kt)("h3",{id:"multiple-alertmanager-replicas"},"Multiple Alertmanager Replicas"),(0,a.kt)("p",null,"As part of the chart deployment options, you can opt to increase the number of replicas of the Alertmanager deployed onto your cluster. The replicas can all be managed using the same underlying Alertmanager Config Secret."),(0,a.kt)("p",null,"This Secret should be updated or modified any time you want to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add in new notifiers or receivers"),(0,a.kt)("li",{parentName:"ul"},"Change the alerts that should be sent to specific notifiers or receivers"),(0,a.kt)("li",{parentName:"ul"},"Change the group of alerts that are sent out")),(0,a.kt)("p",null,"By default, you can either choose to supply an existing Alertmanager Config Secret (i.e. any Secret in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace) or allow Rancher Monitoring to deploy a default Alertmanager Config Secret onto your cluster."),(0,a.kt)("p",null,"By default, the Alertmanager Config Secret created by Rancher will never be modified or deleted on an upgrade or uninstall of the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," chart. This restriction prevents users from losing or overwriting their alerting configuration when executing operations on the chart."),(0,a.kt)("p",null,"For more information on what fields can be specified in the Alertmanager Config Secret, please look at the ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"Prometheus Alertmanager docs.")),(0,a.kt)("p",null,"The full spec for the Alertmanager configuration file and what it takes in can be found ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#configuration-file"},"here.")))}m.isMDXComponent=!0}}]);