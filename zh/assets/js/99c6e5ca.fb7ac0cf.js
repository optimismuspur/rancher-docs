"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[4494],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},41876:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"Creating Catalog Apps",weight:400,aliases:["/rancher/v2.0-v2.4/en/tasks/global-configuration/catalog/customizing-charts/","/rancher/v2.0-v2.4/en/catalog/custom/creating","/rancher/v2.0-v2.4/en/catalog/custom","/rancher/v2.0-v2.4/en/catalog/creating-apps","/rancher/v2.0-v2.4/en/helm-charts/legacy-catalogs/creating-apps"]},s=void 0,p={unversionedId:"how-to-guides/new-user-guides/helm-charts-in-rancher/creating-apps",id:"version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/creating-apps",title:"Creating Catalog Apps",description:"Rancher's catalog service requires any custom catalogs to be structured in a specific format for the catalog service to be able to leverage it in Rancher.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/creating-apps.md",sourceDirName:"how-to-guides/new-user-guides/helm-charts-in-rancher",slug:"/how-to-guides/new-user-guides/helm-charts-in-rancher/creating-apps",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/creating-apps",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/creating-apps.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"Creating Catalog Apps",weight:400,aliases:["/rancher/v2.0-v2.4/en/tasks/global-configuration/catalog/customizing-charts/","/rancher/v2.0-v2.4/en/catalog/custom/creating","/rancher/v2.0-v2.4/en/catalog/custom","/rancher/v2.0-v2.4/en/catalog/creating-apps","/rancher/v2.0-v2.4/en/helm-charts/legacy-catalogs/creating-apps"]},sidebar:"tutorialSidebar",previous:{title:"Custom Catalog Configuration Reference",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/catalog-config"},next:{title:"Managing Catalog Apps",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/managing-apps"}},c={},u=[{value:"Helm Charts",id:"helm-charts",level:3},{value:"Rancher Charts",id:"rancher-charts",level:3},{value:"questions.yml",id:"questionsyml",level:3},{value:"Min/Max Rancher versions",id:"minmax-rancher-versions",level:3},{value:"Question Variable Reference",id:"question-variable-reference",level:3}],h={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher's catalog service requires any custom catalogs to be structured in a specific format for the catalog service to be able to leverage it in Rancher."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For a complete walkthrough of developing charts, see the ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/"},"Chart Template Developer's Guide")," in the official Helm documentation.")),(0,i.kt)("h1",{id:"chart-types"},"Chart Types"),(0,i.kt)("p",null,"Rancher supports two different types of charts: Helm charts and Rancher charts."),(0,i.kt)("h3",{id:"helm-charts"},"Helm Charts"),(0,i.kt)("p",null,"Native Helm charts include an application along with other software required to run it. When deploying native Helm charts, you'll learn the chart's parameters and then configure them using ",(0,i.kt)("strong",{parentName:"p"},"Answers"),", which are sets of key value pairs."),(0,i.kt)("p",null,"The Helm Stable and Helm Incubators are populated with native Helm charts. However, you can also use native Helm charts in Custom catalogs (although we recommend Rancher Charts)."),(0,i.kt)("h3",{id:"rancher-charts"},"Rancher Charts"),(0,i.kt)("p",null,"Rancher charts mirror native helm charts, although they add two files that enhance user experience: ",(0,i.kt)("inlineCode",{parentName:"p"},"app-readme.md")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"questions.yaml"),". Read more about them in ",(0,i.kt)("a",{parentName:"p",href:"#additional-files-for-rancher-charts"},"Additional Files for Rancher Charts.")),(0,i.kt)("p",null,"Advantages of Rancher charts include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enhanced revision tracking:")," While Helm supports versioned deployments, Rancher adds tracking and revision history to display changes between different versions of the chart."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Streamlined application launch:")," Rancher charts add simplified chart descriptions and configuration forms to make catalog application deployment easy. Rancher users need not read through the entire list of Helm variables to understand how to launch an application."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Application resource management:")," Rancher tracks all the resources created by a specific application. Users can easily navigate to and troubleshoot on a page listing all the workload objects used to power an application.")),(0,i.kt)("h1",{id:"chart-directory-structure"},"Chart Directory Structure"),(0,i.kt)("p",null,"The following table demonstrates the directory structure for a Rancher Chart. The ",(0,i.kt)("inlineCode",{parentName:"p"},"charts")," directory is the top level directory under the repository base. Adding the repository to Rancher will expose all charts contained within it. This information is helpful when customizing charts for a custom catalog. The ",(0,i.kt)("inlineCode",{parentName:"p"},"questions.yaml"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.yml")," files are specific to Rancher charts, but are optional for chart customization."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<Repository-Base>/\n \u2502\n \u251c\u2500\u2500 charts/\n \u2502   \u251c\u2500\u2500 <Application Name>/      # This directory name will be surfaced in the Rancher UI as the chart name\n \u2502   \u2502   \u251c\u2500\u2500 <App Version>/   # Each directory at this level provides different app versions that will be selectable within the chart in the Rancher UI\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 Chart.yaml   # Required Helm chart information file.\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 questions.yaml   # Form questions displayed within the Rancher UI. Questions display in Configuration Options.*\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 README.md         # Optional: Helm Readme file displayed within Rancher UI. This text displays in Detailed Descriptions.\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 requirements.yml  # Optional: YAML file listing dependencies for the chart.\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 values.yml        # Default configuration values for the chart.\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 templates/        # Directory containing templates that, when combined with values.yml, generates Kubernetes YAML.\n")),(0,i.kt)("h1",{id:"additional-files-for-rancher-charts"},"Additional Files for Rancher Charts"),(0,i.kt)("p",null,"Before you create your own custom catalog, you should have a basic understanding about how a Rancher chart differs from a native Helm chart. Rancher charts differ slightly from Helm charts in their directory structures. Rancher charts include two files that Helm charts do not."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"app-readme.md")),(0,i.kt)("p",{parentName:"li"},"  A file that provides descriptive text in the chart's UI header. The following image displays the difference between a Rancher chart (which includes ",(0,i.kt)("inlineCode",{parentName:"p"},"app-readme.md"),") and a native Helm chart (which does not)."),(0,i.kt)("figcaption",null,"Rancher Chart with ",(0,i.kt)("code",null,"app-readme.md")," (left) vs. Helm Chart without (right)"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"app-readme.md",src:a(54256).Z,width:"1529",height:"393"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"questions.yml")),(0,i.kt)("p",{parentName:"li"},"  A file that contains questions for a form. These form questions simplify deployment of a chart. Without it, you must configure the deployment using key value pairs, which is more difficult. The following image displays the difference between a Rancher chart (which includes ",(0,i.kt)("inlineCode",{parentName:"p"},"questions.yml"),") and a native Helm chart (which does not)."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<figcaption>Rancher Chart with <code>questions.yml</code> (left) vs. Helm Chart without (right)</figcaption>\n\n![questions.yml](/img/questions.png)\n")),(0,i.kt)("h3",{id:"questionsyml"},"questions.yml"),(0,i.kt)("p",null,"Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"questions.yml"),", most of the content will be around the questions to ask the end user, but there are some additional fields that can be set in this file."),(0,i.kt)("h3",{id:"minmax-rancher-versions"},"Min/Max Rancher versions"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.3.0")),(0,i.kt)("p",null,"For each chart, you can add the minimum and/or maximum Rancher version, which determines whether or not this chart is available to be deployed from Rancher."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Even though Rancher release versions are prefixed with a ",(0,i.kt)("inlineCode",{parentName:"p"},"v"),", there is ",(0,i.kt)("em",{parentName:"p"},"no")," prefix for the release version when using this option.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rancher_min_version: 2.3.0\nrancher_max_version: 2.3.99\n")),(0,i.kt)("h3",{id:"question-variable-reference"},"Question Variable Reference"),(0,i.kt)("p",null,"This reference contains variables that you can use in ",(0,i.kt)("inlineCode",{parentName:"p"},"questions.yml")," nested under ",(0,i.kt)("inlineCode",{parentName:"p"},"questions:"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"variable"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Define the variable name specified in the ",(0,i.kt)("inlineCode",{parentName:"td"},"values.yml")," file, using ",(0,i.kt)("inlineCode",{parentName:"td"},"foo.bar")," for nested objects.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"label"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Define the UI label.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"description"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the description of the variable.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Default to ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," if not specified (current supported types are string, multiline, boolean, int, enum, password, storageclass, hostname, pvc, and secret).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Define if the variable is required or not (true ","|"," false)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"default"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the default value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"group"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Group questions by input value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"min_length"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Min character length.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_length"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Max character length.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"min"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Min integer length.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Max integer length.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options"),(0,i.kt)("td",{parentName:"tr",align:null},"[]string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the options when the variable type is ",(0,i.kt)("inlineCode",{parentName:"td"},"enum"),", for example: options:",(0,i.kt)("br",null),' - "ClusterIP" ',(0,i.kt)("br",null),' - "NodePort" ',(0,i.kt)("br",null),' - "LoadBalancer"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"valid_chars"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Regular expression for input chars validation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"invalid_chars"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Regular expression for invalid input chars validation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"subquestions"),(0,i.kt)("td",{parentName:"tr",align:null},"[]subquestion"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Add an array of subquestions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"show_if"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Show current variable if conditional variable is true. For example ",(0,i.kt)("inlineCode",{parentName:"td"},'show_if: "serviceType=Nodeport"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"show","_","subquestion_if"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Show subquestions if is true or equal to one of the options. for example ",(0,i.kt)("inlineCode",{parentName:"td"},'show_subquestion_if: "true"'))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"subquestions[]")," cannot contain ",(0,i.kt)("inlineCode",{parentName:"p"},"subquestions")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"show_subquestions_if")," keys, but all other keys in the above table are supported.")),(0,i.kt)("h1",{id:"tutorial-example-custom-chart-creation"},"Tutorial: Example Custom Chart Creation"),(0,i.kt)("p",null,"For a tutorial on adding a custom Helm chart to a custom catalog, refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/tutorial"},"this page.")))}d.isMDXComponent=!0},54256:function(e,t,a){t.Z=a.p+"assets/images/app-readme-fe11446e19e14d7a30eb25b680f5fa53.png"}}]);