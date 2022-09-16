"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[21167],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),h=i,k=c["".concat(l,".").concat(h)]||c[h]||m[h]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},69216:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],p={title:"Example Repositories",weight:500,aliases:["/rancher/v2.5/en/tools/pipelines/quick-start-guide/","/rancher/v2.5/en/k8s-in-rancher/pipelines/example-repos","/rancher/v2.x/en/pipelines/example-repos/"]},l=void 0,s={unversionedId:"reference-guides/pipelines/example-repositories",id:"version-2.5/reference-guides/pipelines/example-repositories",title:"Example Repositories",description:"Rancher ships with several example repositories that you can use to familiarize yourself with pipelines. We recommend configuring and testing the example repository that most resembles your environment before using pipelines with your own repositories in a production environment. Use this example repository as a sandbox for repo configuration, build demonstration, etc. Rancher includes example repositories for:",source:"@site/versioned_docs/version-2.5/reference-guides/pipelines/example-repositories.md",sourceDirName:"reference-guides/pipelines",slug:"/reference-guides/pipelines/example-repositories",permalink:"/v2.5/reference-guides/pipelines/example-repositories",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/pipelines/example-repositories.md",tags:[],version:"2.5",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Example Repositories",weight:500,aliases:["/rancher/v2.5/en/tools/pipelines/quick-start-guide/","/rancher/v2.5/en/k8s-in-rancher/pipelines/example-repos","/rancher/v2.x/en/pipelines/example-repos/"]},sidebar:"tutorialSidebar",previous:{title:"Configuring Persistent Data for Pipeline Components",permalink:"/v2.5/reference-guides/pipelines/configure-persistent-data"},next:{title:"Example YAML File",permalink:"/v2.5/reference-guides/pipelines/example-yaml"}},u={},m=[{value:"1. Enable the Example Repositories",id:"1-enable-the-example-repositories",level:3},{value:"2. View the Example Pipeline",id:"2-view-the-example-pipeline",level:3},{value:"3. Run the Example Pipeline",id:"3-run-the-example-pipeline",level:3},{value:"What&#39;s Next?",id:"whats-next",level:3}],c={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rancher ships with several example repositories that you can use to familiarize yourself with pipelines. We recommend configuring and testing the example repository that most resembles your environment before using pipelines with your own repositories in a production environment. Use this example repository as a sandbox for repo configuration, build demonstration, etc. Rancher includes example repositories for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go"),(0,a.kt)("li",{parentName:"ul"},"Maven"),(0,a.kt)("li",{parentName:"ul"},"php")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," The example repositories are only available if you have not ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"},"configured a version control provider"),".")),(0,a.kt)("p",null,"To start using these example repositories,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#1-enable-the-example-repositories"},"Enable the example repositories")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#2-view-the-example-pipeline"},"View the example pipeline")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#3-run-the-example-pipeline"},"Run the example pipeline"))),(0,a.kt)("h3",{id:"1-enable-the-example-repositories"},"1. Enable the Example Repositories"),(0,a.kt)("p",null,"By default, the example pipeline repositories are disabled. Enable one (or more) to test out the pipeline feature and see how it works."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that you want to test out pipelines.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Resources > Pipelines."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Configure Repositories"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step Result:")," A list of example repositories displays."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Example repositories only display if you haven't fetched your own repos."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Enable")," for one of the example repos (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/rancher/pipeline-example-go.git"),"). Then click ",(0,a.kt)("strong",{parentName:"p"},"Done"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Results:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The example repository is enabled to work with a pipeline is available in the ",(0,a.kt)("strong",{parentName:"p"},"Pipeline")," tab.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The following workloads are deployed to a new namespace:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docker-registry")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jenkins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minio"))))),(0,a.kt)("h3",{id:"2-view-the-example-pipeline"},"2. View the Example Pipeline"),(0,a.kt)("p",null,"After enabling an example repository, review the pipeline to see how it is set up."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that you want to test out pipelines.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Resources > Pipelines."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the example repository, select the vertical ",(0,a.kt)("strong",{parentName:"p"},"\u22ee"),". There are two ways to view the pipeline:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rancher UI"),": Click on ",(0,a.kt)("strong",{parentName:"li"},"Edit Config")," to view the stages and steps of the pipeline."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"YAML"),": Click on View/Edit YAML to view the ",(0,a.kt)("inlineCode",{parentName:"li"},"./rancher-pipeline.yml")," file.")),(0,a.kt)("h3",{id:"3-run-the-example-pipeline"},"3. Run the Example Pipeline"),(0,a.kt)("p",null,"After enabling an example repository, run the pipeline to see how it works."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that you want to test out pipelines.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Resources > Pipelines."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the example repository, select the vertical ",(0,a.kt)("strong",{parentName:"p"},"\u22ee"," > Run"),"."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," When you run a pipeline the first time, it takes a few minutes to pull relevant images and provision necessary pipeline components.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The pipeline runs. You can see the results in the logs."),(0,a.kt)("h3",{id:"whats-next"},"What's Next?"),(0,a.kt)("p",null,"For detailed information about setting up your own pipeline for your repository, ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"},"configure a version control provider"),", enable a repository and finally configure your pipeline."))}h.isMDXComponent=!0}}]);