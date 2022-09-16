"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[23345],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},68056:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"UI for Istio Virtual Services and Destination Rules",weight:2},s=void 0,u={unversionedId:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features",id:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features",title:"UI for Istio Virtual Services and Destination Rules",description:"This feature enables a UI that lets you create, read, update and delete virtual services and destination rules, which are traffic management features of Istio.",source:"@site/docs/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features",slug:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features",permalink:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features.md",tags:[],version:"current",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"UI for Istio Virtual Services and Destination Rules",weight:2},sidebar:"tutorialSidebar",previous:{title:"Allow Unsupported Storage Drivers",permalink:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers"},next:{title:"Continuous Delivery",permalink:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery"}},c={},p=[{value:"About this Feature",id:"about-this-feature",level:2}],d={toc:p};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This feature enables a UI that lets you create, read, update and delete virtual services and destination rules, which are traffic management features of Istio."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisite:")," Turning on this feature does not enable Istio. A cluster administrator needs to ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/istio-setup-guide"},"enable Istio for the cluster")," in order to use the feature.")),(0,i.kt)("p",null,"To enable or disable this feature, refer to the instructions on ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/enable-experimental-features"},"the main page about enabling experimental features.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment Variable Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Available as of"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"istio-virtual-service-ui")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Experimental"),(0,i.kt)("td",{parentName:"tr",align:null},"v2.3.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"istio-virtual-service-ui")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"GA"),(0,i.kt)("td",{parentName:"tr",align:null},"v2.3.2")))),(0,i.kt)("h2",{id:"about-this-feature"},"About this Feature"),(0,i.kt)("p",null,"A central advantage of Istio's traffic management features is that they allow dynamic request routing, which is useful for canary deployments, blue/green deployments, or A/B testing."),(0,i.kt)("p",null,"When enabled, this feature turns on a page that lets you configure some traffic management features of Istio using the Rancher UI. Without this feature, you need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to manage traffic with Istio."),(0,i.kt)("p",null,"The feature enables two UI tabs: one tab for ",(0,i.kt)("strong",{parentName:"p"},"Virtual Services")," and another for ",(0,i.kt)("strong",{parentName:"p"},"Destination Rules"),". "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Virtual services")," intercept and direct traffic to your Kubernetes services, allowing you to direct percentages of traffic from a request to different services. You can use them to define a set of routing rules to apply when a host is addressed. For details, refer to the ",(0,i.kt)("a",{parentName:"li",href:"https://istio.io/docs/reference/config/networking/v1alpha3/virtual-service/"},"Istio documentation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Destination rules")," serve as the single source of truth about which service versions are available to receive traffic from virtual services. You can use these resources to define policies that apply to traffic that is intended for a service after routing has occurred. For details, refer to the ",(0,i.kt)("a",{parentName:"li",href:"https://istio.io/docs/reference/config/networking/v1alpha3/destination-rule"},"Istio documentation."))),(0,i.kt)("p",null,"To see these tabs,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the cluster where Istio is installed and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,i.kt)("strong",{parentName:"li"},"Istio"),"."),(0,i.kt)("li",{parentName:"ol"},"You will see tabs for ",(0,i.kt)("strong",{parentName:"li"},"Kiali")," and ",(0,i.kt)("strong",{parentName:"li"},"Jaeger"),". From the left navigation bar, you can view and configure ",(0,i.kt)("strong",{parentName:"li"},"Virtual Services")," and ",(0,i.kt)("strong",{parentName:"li"},"Destination Rules"),".")))}f.isMDXComponent=!0}}]);