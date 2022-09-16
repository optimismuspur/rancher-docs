"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[11835],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},53914:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],s={title:"4. Set up the Istio Gateway",weight:5,aliases:["/rancher/v2.5/en/istio/setup/gateway","/rancher/v2.5/en/istio/v2.5/setup/gateway","/rancher/v2.x/en/istio/v2.5/setup/gateway/"]},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway",id:"version-2.5/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway",title:"4. Set up the Istio Gateway",description:"The gateway to each cluster can have its own port or load balancer, which is unrelated to a service mesh. By default, each Rancher-provisioned cluster has one NGINX ingress controller allowing traffic into the cluster.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway",permalink:"/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway.md",tags:[],version:"2.5",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"4. Set up the Istio Gateway",weight:5,aliases:["/rancher/v2.5/en/istio/setup/gateway","/rancher/v2.5/en/istio/v2.5/setup/gateway","/rancher/v2.x/en/istio/v2.5/setup/gateway/"]},sidebar:"tutorialSidebar",previous:{title:"3. Add Deployments and Services with the Istio Sidecar",permalink:"/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"},next:{title:"5. Set up Istio's Components for Traffic Management",permalink:"/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"}},p={},c=[{value:"Access the ProductPage Service from a Web Browser",id:"access-the-productpage-service-from-a-web-browser",level:3},{value:"Confirming that the Kubernetes Gateway Matches Istio&#39;s Ingress Controller",id:"confirming-that-the-kubernetes-gateway-matches-istios-ingress-controller",level:3},{value:"Next: Set up Istio&#39;s Components for Traffic Management",id:"next-set-up-istios-components-for-traffic-management",level:3}],d={toc:c};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The gateway to each cluster can have its own port or load balancer, which is unrelated to a service mesh. By default, each Rancher-provisioned cluster has one NGINX ingress controller allowing traffic into the cluster. "),(0,r.kt)("p",null,"You can use the Nginx Ingress controller with or without Istio installed. If this is the only gateway to your cluster, Istio will be able to route traffic from service to service, but Istio will not be able to receive traffic from outside the cluster."),(0,r.kt)("p",null,"To allow Istio to receive external traffic, you need to enable Istio's gateway, which works as a north-south proxy for external traffic. When you enable the Istio gateway, the result is that your cluster will have two Ingresses."),(0,r.kt)("p",null,"You will also need to set up a Kubernetes gateway for your services. This Kubernetes resource points to Istio's implementation of the ingress gateway to the cluster."),(0,r.kt)("p",null,"You can route traffic into the service mesh with a load balancer or use Istio's NodePort gateway. This section describes how to set up the NodePort gateway."),(0,r.kt)("p",null,"For more information on the Istio gateway, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/docs/reference/config/networking/v1alpha3/gateway/"},"Istio documentation.")," "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"In an Istio-enabled cluster, you can have two Ingresses: the default Nginx Ingress, and the default Istio controller.",src:a(74025).Z,width:"691",height:"572"})),(0,r.kt)("h1",{id:"enable-an-istio-gateway"},"Enable an Istio Gateway"),(0,r.kt)("p",null,"The ingress gateway is a Kubernetes service that will be deployed in your cluster. The Istio Gateway allows for more extensive customization and flexibility.  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Cluster Explorer"),", select ",(0,r.kt)("strong",{parentName:"li"},"Istio")," from the nav dropdown. "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Gateways")," in the side nav bar."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create from Yaml"),"."),(0,r.kt)("li",{parentName:"ol"},"Paste your Istio Gateway yaml, or ",(0,r.kt)("strong",{parentName:"li"},"Read from File"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The gateway is deployed, and will now route traffic with applied rules"),(0,r.kt)("h1",{id:"example-istio-gateway"},"Example Istio Gateway"),(0,r.kt)("p",null,"We add the BookInfo app deployments in services when going through the Workloads example. Next we add an Istio Gateway so that the app is accessible from outside your cluster."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Cluster Explorer"),", select ",(0,r.kt)("strong",{parentName:"li"},"Istio")," from the nav dropdown. "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Gateways")," in the side nav bar."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create from Yaml"),"."),(0,r.kt)("li",{parentName:"ol"},"Copy and paste the Gateway yaml provided below."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.istio.io/v1alpha3\nkind: Gateway\nmetadata:\n  name: bookinfo-gateway\nspec:\n  selector:\n    istio: ingressgateway # use istio default controller\n  servers:\n  - port:\n      number: 80\n      name: http\n      protocol: HTTP\n    hosts:\n    - "*"\n---\n')),(0,r.kt)("p",null,"Then to deploy the VirtualService that provides the traffic routing for the Gateway"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"VirtualService")," in the side nav bar."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create from Yaml"),"."),(0,r.kt)("li",{parentName:"ol"},"Copy and paste the VirtualService yaml provided below."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: bookinfo\nspec:\n  hosts:\n  - "*"\n  gateways:\n  - bookinfo-gateway\n  http:\n  - match:\n    - uri:\n        exact: /productpage\n    - uri:\n        prefix: /static\n    - uri:\n        exact: /login\n    - uri:\n        exact: /logout\n    - uri:\n        prefix: /api/v1/products\n    route:\n    - destination:\n        host: productpage\n        port:\n          number: 9080\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," You have configured your gateway resource so that Istio can receive traffic from outside the cluster."),(0,r.kt)("p",null,"Confirm that the resource exists by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get gateway -A\n")),(0,r.kt)("p",null,"The result should be something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME               AGE\nbookinfo-gateway   64m\n")),(0,r.kt)("h3",{id:"access-the-productpage-service-from-a-web-browser"},"Access the ProductPage Service from a Web Browser"),(0,r.kt)("p",null,"To test and see if the BookInfo app deployed correctly, the app can be viewed a web browser using the Istio controller IP and port, combined with the request name specified in your Kubernetes gateway resource:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://<IP of Istio controller>:<Port of istio controller>/productpage")),(0,r.kt)("p",null,"To get the ingress gateway URL and port,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Cluster Explorer"),", Click on ",(0,r.kt)("strong",{parentName:"li"},"Workloads > Overview"),". "),(0,r.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-system")," namespace. "),(0,r.kt)("li",{parentName:"ol"},"Within ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-system"),", there is a workload named ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-ingressgateway"),". Under the name of this workload, you should see links, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"80/tcp"),"."),(0,r.kt)("li",{parentName:"ol"},"Click one of those links. This should show you the URL of the ingress gateway in your web browser. Append ",(0,r.kt)("inlineCode",{parentName:"li"},"/productpage")," to the URL.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," You should see the BookInfo app in the web browser."),(0,r.kt)("p",null,"For help inspecting the Istio controller URL and ports, try the commands the ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/docs/tasks/traffic-management/ingress/ingress-control/#determining-the-ingress-ip-and-ports"},"Istio documentation.")),(0,r.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/docs/tasks/traffic-management/ingress/ingress-control/#troubleshooting"},"official Istio documentation")," suggests ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," commands to inspect the correct ingress host and ingress port for external requests."),(0,r.kt)("h3",{id:"confirming-that-the-kubernetes-gateway-matches-istios-ingress-controller"},"Confirming that the Kubernetes Gateway Matches Istio's Ingress Controller"),(0,r.kt)("p",null,"You can try the steps in this section to make sure the Kubernetes gateway is configured properly."),(0,r.kt)("p",null,"In the gateway resource, the selector refers to Istio's default ingress controller by its label, in which the key of the label is ",(0,r.kt)("inlineCode",{parentName:"p"},"istio")," and the value is ",(0,r.kt)("inlineCode",{parentName:"p"},"ingressgateway"),".  To make sure the label is appropriate for the gateway, do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Cluster Explorer"),", Click on ",(0,r.kt)("strong",{parentName:"li"},"Workloads > Overview"),". "),(0,r.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-system")," namespace. "),(0,r.kt)("li",{parentName:"ol"},"Within ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-system"),", there is a workload named ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-ingressgateway"),". Click the name of this workload and go to the ",(0,r.kt)("strong",{parentName:"li"},"Labels and Annotations")," section. You should see that it has the key ",(0,r.kt)("inlineCode",{parentName:"li"},"istio")," and the value ",(0,r.kt)("inlineCode",{parentName:"li"},"ingressgateway"),". This confirms that the selector in the Gateway resource matches Istio's default ingress controller.")),(0,r.kt)("h3",{id:"next-set-up-istios-components-for-traffic-management"},(0,r.kt)("a",{parentName:"h3",href:"/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},"Next: Set up Istio's Components for Traffic Management")))}h.isMDXComponent=!0},74025:function(e,t,a){t.Z=a.p+"assets/images/istio-ingress-3ca2b3bfa19fe1f0d38b74966b383ac0.svg"}}]);