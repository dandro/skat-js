(self.webpackChunkskat_docs=self.webpackChunkskat_docs||[]).push([[623],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2171:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={sidebar_position:3},s={unversionedId:"references/templates",id:"references/templates",isDocsHomePage:!1,title:"Templates",description:"Create templates for common abstractions and leverage SKAT's power of automation to generate boilerplate code. This will",source:"@site/docs/references/templates.md",sourceDirName:"references",slug:"/references/templates",permalink:"/skat-js/docs/next/references/templates",editUrl:"https://github.com/dandro/skat-js/docs/references/templates.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Config",permalink:"/skat-js/docs/next/references/config"},next:{title:"CLI",permalink:"/skat-js/docs/next/references/cli"}},p=[{value:"Filenames &amp; Grouping",id:"filenames--grouping",children:[{value:"Grouping Examples",id:"grouping-examples",children:[]}]},{value:"Substitutions",id:"substitutions",children:[]}],u={toc:p};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create templates for common abstractions and leverage SKAT's power of automation to generate boilerplate code. This will\nincrease your team's productivity, help you enforce your standards and help on-board new team members."),(0,a.kt)("h2",{id:"filenames--grouping"},"Filenames & Grouping"),(0,a.kt)("p",null,"There is no real requirement for file names, so you can get creative and use the tool however it yields more value to\nyou and your team, however, a useful pattern to keep in mind could be would be to start the name with the ",(0,a.kt)("strong",{parentName:"p"},"abstraction\nlayer"),'\nfollowed by "group names". For example ',(0,a.kt)("inlineCode",{parentName:"p"},"component.view.js"),". This would allow you to group many templates under with\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"component")," prefix but if you only want the view you can be more specific and use ",(0,a.kt)("inlineCode",{parentName:"p"},"component.view"),"."),(0,a.kt)("h3",{id:"grouping-examples"},"Grouping Examples"),(0,a.kt)("h4",{id:"pure-component-group"},"Pure Component Group"),(0,a.kt)("p",null,"In our projects, to create a React component, we separate the view, types and stories into separate files and put it all\ntogether before exporting it in an index.js file. We can group our templates like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md",metastring:"title=Pure Component Group",title:"Pure",Component:!0,Group:!0},"pure-component.index.js\npure-component.view.js\npure-component.view.spec.js\npure-component.enhancer.js\npure-component.types.js\npure-component.styles.scss\n")),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"skat gen -w pure -n ComponentName")," to use the template group."),(0,a.kt)("h4",{id:"redux-reducer-group"},"Redux Reducer Group"),(0,a.kt)("p",null,"Redux Reducer must have a reducer file, a type file and an action file. For this we can group our templates like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md",metastring:"title=Redux Component Group",title:"Redux",Component:!0,Group:!0},"reducer.index.js\nreducer.reducer.js\nreducer.reducer.spec.js\nreducer.actions.js\nreducer.actions.spec.js\nreducer.types.js\n")),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"skat gen -w reducer -n ReducerName")," to use the template group."),(0,a.kt)("h2",{id:"substitutions"},"Substitutions"),(0,a.kt)("p",null,"Templates can have variables which will be substituted when copying the template. Simply put a name between dollar\nsigns. For example ",(0,a.kt)("inlineCode",{parentName:"p"},"function $NAME$() {")," and pass in the substitution in the CLI with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-s or --substitute")," command.\nThe value for the substitute cli argument is a ",(0,a.kt)("inlineCode",{parentName:"p"},"key:value")," pairs separated by ",(0,a.kt)("inlineCode",{parentName:"p"},","),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Substitutions",title:"Substitutions"},'skat gen -w component -n MySection -s "NAME:MySection, TITLE:This is my Section"\n')),(0,a.kt)("p",null,"This command will substitute ",(0,a.kt)("inlineCode",{parentName:"p"},"$NAME$")," for MySection and ",(0,a.kt)("inlineCode",{parentName:"p"},"$TITLE"),' for "This is my Section".'))}l.isMDXComponent=!0}}]);