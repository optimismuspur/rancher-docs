"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[56871],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80839:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"OPA Gatekeeper"},s=void 0,p={unversionedId:"explanations/integrations-in-rancher/opa-gatekeeper",id:"version-2.5/explanations/integrations-in-rancher/opa-gatekeeper",title:"OPA Gatekeeper",description:"To ensure consistency and compliance, every organization needs the ability to define and enforce policies in its environment in an automated way. OPA (Open Policy Agent) is a policy engine that facilitates policy-based control for cloud native environments. Rancher provides the ability to enable OPA Gatekeeper in Kubernetes clusters, and also installs a couple of built-in policy definitions, which are also called constraint templates.",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/opa-gatekeeper.md",sourceDirName:"explanations/integrations-in-rancher",slug:"/explanations/integrations-in-rancher/opa-gatekeeper",permalink:"/v2.5/explanations/integrations-in-rancher/opa-gatekeeper",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/opa-gatekeeper.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"9/23/2022",frontMatter:{title:"OPA Gatekeeper"},sidebar:"tutorialSidebar",previous:{title:"PromQL Expression Reference",permalink:"/v2.5/explanations/integrations-in-rancher/monitoring-and-alerting/promql-expressions"},next:{title:"FAQ",permalink:"/v2.5/faq"}},c={},u=[{value:"How the OPA Gatekeeper Integration Works",id:"how-the-opa-gatekeeper-integration-works",level:2},{value:"Enabling OPA Gatekeeper in a Cluster",id:"enabling-opa-gatekeeper-in-a-cluster",level:2},{value:"Enabling OPA Gatekeeper from Cluster Explorer",id:"enabling-opa-gatekeeper-from-cluster-explorer",level:3},{value:"Enabling OPA Gatekeeper from the Cluster Manager View",id:"enabling-opa-gatekeeper-from-the-cluster-manager-view",level:3},{value:"Constraint Templates",id:"constraint-templates",level:2},{value:"Creating and Configuring Constraints",id:"creating-and-configuring-constraints",level:2},{value:"Exempting Rancher&#39;s System Namespaces from Constraints",id:"exempting-ranchers-system-namespaces-from-constraints",level:3},{value:"Enforcing Constraints in your Cluster",id:"enforcing-constraints-in-your-cluster",level:2},{value:"Audit and Violations in your Cluster",id:"audit-and-violations-in-your-cluster",level:2},{value:"Disabling Gatekeeper",id:"disabling-gatekeeper",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To ensure consistency and compliance, every organization needs the ability to define and enforce policies in its environment in an automated way. ",(0,i.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/"},"OPA (Open Policy Agent)")," is a policy engine that facilitates policy-based control for cloud native environments. Rancher provides the ability to enable OPA Gatekeeper in Kubernetes clusters, and also installs a couple of built-in policy definitions, which are also called constraint templates."),(0,i.kt)("p",null,"OPA provides a high-level declarative language that lets you specify policy as code and ability to extend simple APIs to offload policy decision-making."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper"},"OPA Gatekeeper")," is a project that provides integration between OPA and Kubernetes. OPA Gatekeeper provides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An extensible, parameterized policy library."),(0,i.kt)("li",{parentName:"ul"},'Native Kubernetes CRDs for instantiating the policy library, also called \u201cconstraints."'),(0,i.kt)("li",{parentName:"ul"},'Native Kubernetes CRDs for extending the policy library, also called "constraint templates."'),(0,i.kt)("li",{parentName:"ul"},"Audit functionality.")),(0,i.kt)("p",null,"To read more about OPA, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/"},"official documentation.")),(0,i.kt)("h2",{id:"how-the-opa-gatekeeper-integration-works"},"How the OPA Gatekeeper Integration Works"),(0,i.kt)("p",null,"Kubernetes provides the ability to extend API server functionality via admission controller webhooks, which are invoked whenever a resource is created, updated or deleted. Gatekeeper is installed as a validating webhook and enforces policies defined by Kubernetes custom resource definitions. In addition to the admission control usage, Gatekeeper provides the capability to audit existing resources in Kubernetes clusters and mark current violations of enabled policies."),(0,i.kt)("p",null,"OPA Gatekeeper is made available via Rancher's Helm system chart, and it is installed in a namespace named ",(0,i.kt)("inlineCode",{parentName:"p"},"gatekeeper-system.")),(0,i.kt)("h2",{id:"enabling-opa-gatekeeper-in-a-cluster"},"Enabling OPA Gatekeeper in a Cluster"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In Rancher v2.5, the OPA Gatekeeper application was improved. The Rancher v2.4 feature can't be upgraded to the new version in Rancher v2.5. If you installed OPA Gatekeeper in Rancher v2.4, you will need to uninstall OPA Gatekeeper and its CRDs from the old UI, then reinstall it in Rancher v2.5. To uninstall the CRDs run the following command in the kubectl console ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl delete crd configs.config.gatekeeper.sh constrainttemplates.templates.gatekeeper.sh"),".")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisite:")," Only administrators and cluster owners can enable OPA Gatekeeper.")),(0,i.kt)("p",null,"OPA Gatekeeper can be installed from the new ",(0,i.kt)("strong",{parentName:"p"},"Cluster Explorer")," view in Rancher v2.5, or from the cluster manager view."),(0,i.kt)("h3",{id:"enabling-opa-gatekeeper-from-cluster-explorer"},"Enabling OPA Gatekeeper from Cluster Explorer"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the cluster view in the Rancher UI. Click ",(0,i.kt)("strong",{parentName:"li"},"Cluster Explorer.")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Apps")," in the top navigation bar."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"rancher-gatekeeper.")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Install."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," OPA Gatekeeper is deployed in your Kubernetes cluster."),(0,i.kt)("h3",{id:"enabling-opa-gatekeeper-from-the-cluster-manager-view"},"Enabling OPA Gatekeeper from the Cluster Manager View"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the cluster view in the Rancher UI."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Tools > OPA Gatekeeper.")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Install."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," OPA Gatekeeper is deployed in your Kubernetes cluster."),(0,i.kt)("h2",{id:"constraint-templates"},"Constraint Templates"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper#constraint-templates"},"Constraint templates")," are Kubernetes custom resources that define the schema and Rego logic of the OPA policy to be applied by Gatekeeper. For more information on the Rego policy language, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/policy-language/"},"official documentation.")),(0,i.kt)("p",null,"When OPA Gatekeeper is enabled, Rancher installs some templates by default."),(0,i.kt)("p",null,"To list the constraint templates installed in the cluster, go to the left side menu under OPA Gatekeeper and click on ",(0,i.kt)("strong",{parentName:"p"},"Templates.")),(0,i.kt)("p",null,"Rancher also provides the ability to create your own constraint templates by importing YAML definitions."),(0,i.kt)("h2",{id:"creating-and-configuring-constraints"},"Creating and Configuring Constraints"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper#constraints"},"Constraints")," are Kubernetes custom resources that define the scope of objects to which a specific constraint template applies to. The complete policy is defined by constraint templates and constraints together."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisites:")," OPA Gatekeeper must be enabled in the cluster.")),(0,i.kt)("p",null,"To list the constraints installed, go to the left side menu under OPA Gatekeeper, and click on ",(0,i.kt)("strong",{parentName:"p"},"Constraints.")),(0,i.kt)("p",null,"New constraints can be created from a constraint template."),(0,i.kt)("p",null,"Rancher provides the ability to create a constraint by using a convenient form that lets you input the various constraint fields."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Edit as yaml")," option is also available to configure the the constraint's yaml definition."),(0,i.kt)("h3",{id:"exempting-ranchers-system-namespaces-from-constraints"},"Exempting Rancher's System Namespaces from Constraints"),(0,i.kt)("p",null,"When a constraint is created, ensure that it does not apply to any Rancher or Kubernetes system namespaces. If the system namespaces are not excluded, then it is possible to see many resources under them marked as violations of the constraint."),(0,i.kt)("p",null,"To limit the scope of the constraint only to user namespaces, always specify these namespaces under the ",(0,i.kt)("strong",{parentName:"p"},"Match")," field of the constraint."),(0,i.kt)("p",null,"Also, the constraint may interfere with other Rancher functionality and deny system workloads from being deployed. To avoid this, exclude all Rancher-specific namespaces from your constraints."),(0,i.kt)("h2",{id:"enforcing-constraints-in-your-cluster"},"Enforcing Constraints in your Cluster"),(0,i.kt)("p",null,"When the ",(0,i.kt)("strong",{parentName:"p"},"Enforcement Action")," is ",(0,i.kt)("strong",{parentName:"p"},"Deny,")," the constraint is immediately enabled and will deny any requests that violate the policy defined. By default, the enforcement value is ",(0,i.kt)("strong",{parentName:"p"},"Deny.")),(0,i.kt)("p",null,"When the ",(0,i.kt)("strong",{parentName:"p"},"Enforcement Action")," is ",(0,i.kt)("strong",{parentName:"p"},"Dryrun,")," then any resources that violate the policy are only recorded under the constraint's status field."),(0,i.kt)("p",null,"To enforce constraints, create a constraint using the form. In the ",(0,i.kt)("strong",{parentName:"p"},"Enforcement Action")," field, choose ",(0,i.kt)("strong",{parentName:"p"},"Deny.")),(0,i.kt)("h2",{id:"audit-and-violations-in-your-cluster"},"Audit and Violations in your Cluster"),(0,i.kt)("p",null,"OPA Gatekeeper runs a periodic audit to check if any existing resource violates any enforced constraint. The audit-interval (default 300s) can be configured while installing Gatekeeper."),(0,i.kt)("p",null,"On the Gatekeeper page, any violations of the defined constraints are listed."),(0,i.kt)("p",null,"Also under ",(0,i.kt)("strong",{parentName:"p"},"Constraints,")," the number of violations of the constraint can be found."),(0,i.kt)("p",null,"The detail view of each constraint lists information about the resource that violated the constraint."),(0,i.kt)("h2",{id:"disabling-gatekeeper"},"Disabling Gatekeeper"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the cluster's Dashboard view"),(0,i.kt)("li",{parentName:"ol"},"On the left side menu, expand the cluster menu and click on ",(0,i.kt)("strong",{parentName:"li"},"OPA Gatekeeper.")),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"\u22ee"," > Disable"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Upon disabling OPA Gatekeeper, all constraint templates and constraints will also be deleted."))}m.isMDXComponent=!0}}]);