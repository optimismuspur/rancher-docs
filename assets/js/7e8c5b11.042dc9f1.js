"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[1188],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=i,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42089:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={title:"Pod Security Policies",weight:60},l=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies",title:"Pod Security Policies",description:"Pod Security Policies (or PSPs) are objects that control security-sensitive aspects of pod specification (like root privileges).",source:"@site/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies.md",tags:[],version:"current",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Pod Security Policies",weight:60},sidebar:"tutorialSidebar",previous:{title:"Cluster Templates",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates"},next:{title:"Configuring a Global Default Private Registry",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry"}},u={},p=[{value:"How PSPs Work",id:"how-psps-work",level:2},{value:"Default PSPs",id:"default-psps",level:2},{value:"Restricted-NoRoot",id:"restricted-noroot",level:3},{value:"Restricted",id:"restricted",level:3},{value:"Unrestricted",id:"unrestricted",level:3},{value:"Creating PSPs",id:"creating-psps",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Creating PSPs in the Rancher UI",id:"creating-psps-in-the-rancher-ui",level:3},{value:"Configuration",id:"configuration",level:2}],d={toc:p};function h(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Pod Security Policies")," (or PSPs) are objects that control security-sensitive aspects of pod specification (like root privileges)."),(0,o.kt)("p",null,"If a pod does not meet the conditions specified in the PSP, Kubernetes will not allow it to start, and Rancher will display an error message of ",(0,o.kt)("inlineCode",{parentName:"p"},"Pod <NAME> is forbidden: unable to validate..."),"."),(0,o.kt)("h2",{id:"how-psps-work"},"How PSPs Work"),(0,o.kt)("p",null,"You can assign PSPs at the cluster or project level."),(0,o.kt)("p",null,"PSPs work through inheritance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By default, PSPs assigned to a cluster are inherited by its projects, as well as any namespaces added to those projects."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Exception:")," Namespaces that are not assigned to projects do not inherit PSPs, regardless of whether the PSP is assigned to a cluster or project. Because these namespaces have no PSPs, workload deployments to these namespaces will fail, which is the default Kubernetes behavior."),(0,o.kt)("li",{parentName:"ul"},"You can override the default PSP by assigning a different PSP directly to the project.")),(0,o.kt)("p",null,"Any workloads that are already running in a cluster or project before a PSP is assigned will not be checked if it complies with the PSP. Workloads would need to be cloned or upgraded to see if they pass the PSP."),(0,o.kt)("p",null,"Read more about Pod Security Policies in the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/"},"Kubernetes documentation"),"."),(0,o.kt)("h2",{id:"default-psps"},"Default PSPs"),(0,o.kt)("p",null,"Rancher ships with three default Pod Security Policies (PSPs): the ",(0,o.kt)("inlineCode",{parentName:"p"},"restricted-noroot"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"restricted")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"unrestricted")," policies."),(0,o.kt)("h3",{id:"restricted-noroot"},"Restricted-NoRoot"),(0,o.kt)("p",null,"This policy is based on the Kubernetes ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/kubernetes/website/master/content/en/examples/policy/restricted-psp.yaml"},"example restricted policy"),". It significantly restricts what types of pods can be deployed to a cluster or project. This policy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prevents pods from running as a privileged user and prevents escalation of privileges."),(0,o.kt)("li",{parentName:"ul"},"Validates that server-required security mechanisms are in place, such as restricting what volumes can be mounted to only the core volume types and preventing root supplemental groups from being added.")),(0,o.kt)("h3",{id:"restricted"},"Restricted"),(0,o.kt)("p",null,"This policy is a relaxed version of the ",(0,o.kt)("inlineCode",{parentName:"p"},"restricted-noroot")," policy, with almost all the restrictions in place, except for the fact that it allows running containers as a privileged user."),(0,o.kt)("h3",{id:"unrestricted"},"Unrestricted"),(0,o.kt)("p",null,"This policy is equivalent to running Kubernetes with the PSP controller disabled. It has no restrictions on what pods can be deployed into a cluster or project."),(0,o.kt)("h2",{id:"creating-psps"},"Creating PSPs"),(0,o.kt)("p",null,"Using Rancher, you can create a Pod Security Policy using our GUI rather than creating a YAML file."),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Rancher can only assign PSPs for clusters that are ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"launched using RKE"),"."),(0,o.kt)("p",null,"You must enable PSPs at the cluster level before you can assign them to a project. This can be configured by ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/cluster-configuration"},"editing the cluster"),"."),(0,o.kt)("p",null,"It is a best practice to set PSP at the cluster level."),(0,o.kt)("p",null,"We recommend adding PSPs during cluster and project creation instead of adding it to an existing one."),(0,o.kt)("h3",{id:"creating-psps-in-the-rancher-ui"},"Creating PSPs in the Rancher UI"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Pod Security Policies"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Policy"),"."),(0,o.kt)("li",{parentName:"ol"},"Name the policy."),(0,o.kt)("li",{parentName:"ol"},"Complete each section of the form. Refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/"},"Kubernetes documentation")," for more information on what each policy does."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The Kubernetes documentation on PSPs is ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/"},"here"),"."))}h.isMDXComponent=!0}}]);