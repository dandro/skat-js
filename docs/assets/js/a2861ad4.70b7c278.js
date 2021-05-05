(self.webpackChunkskat_docs=self.webpackChunkskat_docs||[]).push([[90],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5234:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o={sidebar_position:4},l={unversionedId:"references/cli",id:"version-1.0.0/references/cli",isDocsHomePage:!1,title:"CLI",description:"Init",source:"@site/versioned_docs/version-1.0.0/references/cli.md",sourceDirName:"references",slug:"/references/cli",permalink:"/skat-js/docs/references/cli",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.0.0/references/cli.md",version:"1.0.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Templates",permalink:"/skat-js/docs/references/templates"}},s=[{value:"Init",id:"init",children:[{value:"-h | --help",id:"-h----help",children:[]}]},{value:"Gen",id:"gen",children:[{value:"-w | --what",id:"-w----what",children:[]},{value:"-n | --name",id:"-n----name",children:[]},{value:"-s | --substitutions",id:"-s----substitutions",children:[]},{value:"-m | --as-module",id:"-m----as-module",children:[]},{value:"-o | --output",id:"-o----output",children:[]},{value:"-h | --help",id:"-h----help-1",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"init"},"Init"),(0,r.kt)("p",null,"Use the init command to create a .skatrc configuration file for your project."),(0,r.kt)("h3",{id:"-h----help"},"-h | --help"),(0,r.kt)("p",null,"Display all options for this command with their descriptions. This is only the cli help so if you are looking for more\nhelp you may want to come back to the documentation."),(0,r.kt)("h2",{id:"gen"},"Gen"),(0,r.kt)("p",null,"The gen command is used to create code from the templates. It supports the following options."),(0,r.kt)("h3",{id:"-w----what"},"-w | --what"),(0,r.kt)("p",null,"What do you want to generate? This will match templates that start with this value. If you have the following templates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="cli what"',title:'"cli','what"':!0},"feature.component.js\nfeature.reducer.js\n")),(0,r.kt)("p",null,"You can run ",(0,r.kt)("inlineCode",{parentName:"p"},"skat gen -w fe")," and it will match on both templates."),(0,r.kt)("h3",{id:"-n----name"},"-n | --name"),(0,r.kt)("p",null,"What is the name of the generated code? This name will be used as the name of the file or directory create."),(0,r.kt)("h3",{id:"-s----substitutions"},"-s | --substitutions"),(0,r.kt)("p",null,"Accepts a string of ",(0,r.kt)("inlineCode",{parentName:"p"},",")," separated ",(0,r.kt)("inlineCode",{parentName:"p"},"key:value")," pairs. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," appears between dollar signs within the content of\ntemplates matched, it will be replaced with the value provided. For example, if your template\ncontains ",(0,r.kt)("inlineCode",{parentName:"p"},"function $my-function-name$() {}"),"\nthen you can call SKAT with ",(0,r.kt)("inlineCode",{parentName:"p"},'-s "my-function-name:main"')," and the resulting file will have ",(0,r.kt)("inlineCode",{parentName:"p"},"function main() {}")," in it."),(0,r.kt)("p",null,"You can also have many substitutions for one command. For example ",(0,r.kt)("inlineCode",{parentName:"p"},'-s "ONE:first, TWO:second"'),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The substitution will apply to all matches in the template content. If you have $NAME$ 3 times, all 3 instances will be\nchanged."))),(0,r.kt)("h3",{id:"-m----as-module"},"-m | --as-module"),(0,r.kt)("p",null,"Use this option to create a directory with all matching templates inside. If we have the following templates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="cli templates"',title:'"cli','templates"':!0},"feature.component.js\nfeature.reducer.js\n")),(0,r.kt)("p",null,"Our configuration output mapping is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:"title=.skatrc",title:".skatrc"},'{\n    "output": {\n        "feature": "./modules"\n    }\n}\n')),(0,r.kt)("p",null,"Now, we run ",(0,r.kt)("inlineCode",{parentName:"p"},"skat gen -w feature -n MyFeature")," SKAT will produce:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="cli -m"',title:'"cli','-m"':!0},"modules/\n    MyFeature/\n        component.js\n        reducer.js\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: When we use ",(0,r.kt)("inlineCode",{parentName:"p"},"as-module")," the name is not appended to the resulting filename.")),(0,r.kt)("h3",{id:"-o----output"},"-o | --output"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-o")," arg to override the configuration. This will ignore every other output mapping and place all files\ngenerated in the path provided."),(0,r.kt)("p",null,"The value must be a valid relative path to the root of the project specified in the config file."),(0,r.kt)("h3",{id:"-h----help-1"},"-h | --help"),(0,r.kt)("p",null,"Display all options for this command with their descriptions. This is only the cli help so if you are looking for more\nhelp you may want to come back to the documentation."))}p.isMDXComponent=!0}}]);