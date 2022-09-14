"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61681],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(n),k=a,f=g["".concat(s,".").concat(k)]||g[k]||c[k]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},90207:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Kafka",weight:400,aliases:["/rancher/v2.0-v2.4/en/tools/logging/kafka/","/rancher/v2.0-v2.4/en/cluster-admin/tools/logging/kafka","/rancher/v2.0-v2.4/en/logging/legacy/cluster-logging/kafka","/rancher/v2.0-v2.4/en/logging/v2.0.x-v2.4.x/cluster-logging/kafka","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/cluster-logging/kafka/"]},s=void 0,u={unversionedId:"explanations/integrations-in-rancher/cluster-logging/kafka",id:"version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/kafka",title:"Kafka",description:"If your organization uses Kafka, you can configure Rancher to send it Kubernetes logs.  Afterwards, you can log into your Kafka server to view logs.",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/kafka.md",sourceDirName:"explanations/integrations-in-rancher/cluster-logging",slug:"/explanations/integrations-in-rancher/cluster-logging/kafka",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/kafka",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/kafka.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Kafka",weight:400,aliases:["/rancher/v2.0-v2.4/en/tools/logging/kafka/","/rancher/v2.0-v2.4/en/cluster-admin/tools/logging/kafka","/rancher/v2.0-v2.4/en/logging/legacy/cluster-logging/kafka","/rancher/v2.0-v2.4/en/logging/v2.0.x-v2.4.x/cluster-logging/kafka","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/cluster-logging/kafka/"]},sidebar:"tutorialSidebar",previous:{title:"Fluentd",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/fluentd"},next:{title:"Splunk",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/splunk"}},p={},c=[{value:"Kafka Server Configuration",id:"kafka-server-configuration",level:2},{value:"<strong>Broker</strong> Endpoint Type",id:"broker-endpoint-type",level:2},{value:"SSL Configuration",id:"ssl-configuration",level:3},{value:"SASL configuration",id:"sasl-configuration",level:3}],g={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If your organization uses ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Kafka"),", you can configure Rancher to send it Kubernetes logs.  Afterwards, you can log into your Kafka server to view logs."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisite:")," You must have a Kafka server configured.")),(0,o.kt)("h2",{id:"kafka-server-configuration"},"Kafka Server Configuration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the type of ",(0,o.kt)("strong",{parentName:"li"},"Endpoint")," your Kafka server is using:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Zookeeper"),": Enter the IP address and port. By default, Zookeeper uses port ",(0,o.kt)("inlineCode",{parentName:"li"},"2181"),". Please note that a Zookeeper endpoint cannot enable TLS."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Broker"),": Click on ",(0,o.kt)("strong",{parentName:"li"},"Add Endpoint"),". For each Kafka broker, enter the IP address and port. By default, Kafka brokers use port ",(0,o.kt)("inlineCode",{parentName:"li"},"9092"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Topic")," field, enter the name of a Kafka ",(0,o.kt)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/#basic_ops_add_topic"},"topic")," that your Kubernetes cluster submits logs to.")),(0,o.kt)("h2",{id:"broker-endpoint-type"},(0,o.kt)("strong",{parentName:"h2"},"Broker")," Endpoint Type"),(0,o.kt)("h3",{id:"ssl-configuration"},"SSL Configuration"),(0,o.kt)("p",null,"If your Kafka cluster is using SSL for the ",(0,o.kt)("strong",{parentName:"p"},"Broker"),", you need to complete the ",(0,o.kt)("strong",{parentName:"p"},"SSL Configuration")," form."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Provide the ",(0,o.kt)("strong",{parentName:"p"},"Client Private Key")," and ",(0,o.kt)("strong",{parentName:"p"},"Client Certificate"),". You can either copy and paste them or upload them by using the ",(0,o.kt)("strong",{parentName:"p"},"Read from a file")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Provide the ",(0,o.kt)("strong",{parentName:"p"},"CA Certificate PEM"),". You can either copy and paste the certificate or upload it using the ",(0,o.kt)("strong",{parentName:"p"},"Read from a file")," button."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Kafka does not support self-signed certificates when client authentication is enabled. ")),(0,o.kt)("h3",{id:"sasl-configuration"},"SASL configuration"),(0,o.kt)("p",null,"If your Kafka cluster is using ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#security_sasl"},"SASL authentication")," for the Broker, you need to complete the ",(0,o.kt)("strong",{parentName:"p"},"SASL Configuration")," form."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the SASL ",(0,o.kt)("strong",{parentName:"p"},"Username")," and ",(0,o.kt)("strong",{parentName:"p"},"Password"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"SASL Type")," that your Kafka cluster is using."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If your Kafka is using ",(0,o.kt)("strong",{parentName:"p"},"Plain"),", please ensure your Kafka cluster is using SSL.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If your Kafka is using ",(0,o.kt)("strong",{parentName:"p"},"Scram"),", you need to select which ",(0,o.kt)("strong",{parentName:"p"},"Scram Mechanism")," Kafka is using."))))))}k.isMDXComponent=!0}}]);