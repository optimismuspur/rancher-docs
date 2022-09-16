"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[69775],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(n),k=o,d=g["".concat(s,".").concat(k)]||g[k]||c[k]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},98533:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Splunk",weight:300,aliases:["/rancher/v2.0-v2.4/en/tasks/logging/splunk/","/rancher/v2.0-v2.4/en/tools/logging/splunk/","/rancher/v2.0-v2.4/en/cluster-admin/tools/logging/splunk","/rancher/v2.0-v2.4/en/logging/legacy/cluster-logging/splunk","/rancher/v2.0-v2.4/en/logging/v2.0.x-v2.4.x/cluster-logging/splunk","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/cluster-logging/splunk/","/rancher/v2.x/en/cluster-admin/tools/logging/splunk"]},s=void 0,u={unversionedId:"explanations/integrations-in-rancher/cluster-logging/splunk",id:"version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/splunk",title:"Splunk",description:"If your organization uses Splunk, you can configure Rancher to send it Kubernetes logs. Afterwards, you can log into your Splunk server to view logs.",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/splunk.md",sourceDirName:"explanations/integrations-in-rancher/cluster-logging",slug:"/explanations/integrations-in-rancher/cluster-logging/splunk",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/splunk",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/splunk.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Splunk",weight:300,aliases:["/rancher/v2.0-v2.4/en/tasks/logging/splunk/","/rancher/v2.0-v2.4/en/tools/logging/splunk/","/rancher/v2.0-v2.4/en/cluster-admin/tools/logging/splunk","/rancher/v2.0-v2.4/en/logging/legacy/cluster-logging/splunk","/rancher/v2.0-v2.4/en/logging/v2.0.x-v2.4.x/cluster-logging/splunk","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/cluster-logging/splunk/","/rancher/v2.x/en/cluster-admin/tools/logging/splunk"]},sidebar:"tutorialSidebar",previous:{title:"Kafka",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/kafka"},next:{title:"Syslog",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/syslog"}},p={},c=[{value:"Splunk Configuration",id:"splunk-configuration",level:2},{value:"SSL Configuration",id:"ssl-configuration",level:2},{value:"Viewing Logs",id:"viewing-logs",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],g={toc:c};function k(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If your organization uses ",(0,a.kt)("a",{parentName:"p",href:"https://www.splunk.com/"},"Splunk"),", you can configure Rancher to send it Kubernetes logs. Afterwards, you can log into your Splunk server to view logs."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Configure HTTP event collection for your Splunk Server (Splunk Enterprise or Splunk Cloud)."),(0,a.kt)("li",{parentName:"ul"},"Either create a new token or copy an existing token.")),(0,a.kt)("p",{parentName:"blockquote"},"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"http://docs.splunk.com/Documentation/Splunk/7.1.2/Data/UsetheHTTPEventCollector#About_Event_Collector_tokens"},"Splunk Documentation"),".")),(0,a.kt)("h2",{id:"splunk-configuration"},"Splunk Configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Endpoint")," field, enter the IP address and port for you Splunk instance (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://splunk-server:8088"),")"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Splunk usually uses port ",(0,a.kt)("inlineCode",{parentName:"li"},"8088"),". If you're using Splunk Cloud, you'll need to work with ",(0,a.kt)("a",{parentName:"li",href:"https://www.splunk.com/en_us/support-and-services.html"},"Splunk support")," to get an endpoint URL."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the ",(0,a.kt)("strong",{parentName:"p"},"Token")," you obtained while completing the prerequisites (i.e., when you created a token in Splunk).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Source")," field, enter the name of the token as entered in Splunk.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Optional:")," Provide one or more ",(0,a.kt)("a",{parentName:"p",href:"http://docs.splunk.com/Documentation/Splunk/7.1.2/Indexer/Aboutindexesandindexers"},"index")," that's allowed for your token."))),(0,a.kt)("h2",{id:"ssl-configuration"},"SSL Configuration"),(0,a.kt)("p",null,"If your instance of Splunk uses SSL, your ",(0,a.kt)("strong",{parentName:"p"},"Endpoint")," will need to begin with ",(0,a.kt)("inlineCode",{parentName:"p"},"https://"),". With the correct endpoint, the ",(0,a.kt)("strong",{parentName:"p"},"SSL Configuration")," form is enabled and ready to be completed."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provide the ",(0,a.kt)("strong",{parentName:"p"},"Client Private Key")," and ",(0,a.kt)("strong",{parentName:"p"},"Client Certificate"),". You can either copy and paste them or upload them by using the ",(0,a.kt)("strong",{parentName:"p"},"Read from a file")," button."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can use either a self-signed certificate or one provided by a certificate authority.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can generate a self-signed certificate using an openssl command. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n'))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter your ",(0,a.kt)("strong",{parentName:"p"},"Client Key Password"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select whether or not you want to verify your SSL."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you are using a self-signed certificate, select ",(0,a.kt)("strong",{parentName:"li"},"Enabled - Input trusted server certificate"),", provide the ",(0,a.kt)("strong",{parentName:"li"},"CA Certificate PEM"),". You can copy and paste the certificate or upload it using the ",(0,a.kt)("strong",{parentName:"li"},"Read from a file")," button.  "),(0,a.kt)("li",{parentName:"ul"},"If you are using a certificate from a certificate authority, select ",(0,a.kt)("strong",{parentName:"li"},"Enabled - Input trusted server certificate"),". You do not need to provide a ",(0,a.kt)("strong",{parentName:"li"},"CA Certificate PEM"),".")))),(0,a.kt)("h2",{id:"viewing-logs"},"Viewing Logs"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log into your Splunk server.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Search & Reporting"),". The number of ",(0,a.kt)("strong",{parentName:"p"},"Indexed Events")," listed should be increasing.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Data Summary and select the Sources tab.\n",(0,a.kt)("img",{alt:"View Logs",src:n(21292).Z,width:"796",height:"185"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To view the actual logs, click on the source that you declared earlier.\n",(0,a.kt)("img",{alt:"View Logs",src:n(81531).Z,width:"1246",height:"891"})))),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"You can use curl to see if ",(0,a.kt)("strong",{parentName:"p"},"HEC")," is listening for HTTP event data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ curl http://splunk-server:8088/services/collector/event \\\n    -H 'Authorization: Splunk 8da70994-b1b0-4a79-b154-bfaae8f93432' \\\n    -d '{\"event\": \"hello world\"}'\n")),(0,a.kt)("p",null,"If Splunk is configured correctly, you should receive ",(0,a.kt)("strong",{parentName:"p"},"json")," data returning ",(0,a.kt)("inlineCode",{parentName:"p"},"success code 0"),". You should be able\nto send logging data to HEC."),(0,a.kt)("p",null,"If you received an error, check your configuration in Splunk and Rancher."))}k.isMDXComponent=!0},21292:function(e,t,n){t.Z=n.p+"assets/images/splunk4-a4b0b1ac0091808af1b5f24c111d944f.jpg"},81531:function(e,t,n){t.Z=n.p+"assets/images/splunk5-d27f8ece5e6362fb1d226edaa930b288.jpg"}}]);