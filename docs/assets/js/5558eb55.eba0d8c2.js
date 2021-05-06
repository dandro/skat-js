(self.webpackChunkskat_docs=self.webpackChunkskat_docs||[]).push([[139],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8531:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={sidebar_position:1},c={unversionedId:"quick-start",id:"version-1.0.0/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"The following guide will get you up and running quick and easy, however, it is not an in-depth explanation of the tool. For more information check the references documentation.",source:"@site/versioned_docs/version-1.0.0/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.0.0/quick-start.md",version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-1.0.0/tutorialSidebar",next:{title:"Reference - Overview",permalink:"/docs/references/overview"}},s=[{value:"Create Config",id:"create-config",children:[]},{value:"Create Templates",id:"create-templates",children:[]},{value:"Generate Code",id:"generate-code",children:[]}],l={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following guide will get you up and running quick and easy, however, it is not an in-depth explanation of the tool. For more information check the ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/overview"},"references")," documentation. "),(0,a.kt)("h2",{id:"create-config"},"Create Config"),(0,a.kt)("p",null,"For the tool to work it needs to know where the templates are and what the rules in your project are. For this we create\na ",(0,a.kt)("inlineCode",{parentName:"p"},".skatrc")," in the root of the project. To do so just run the following command and answer a few questions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zsh"},"skat init\n")),(0,a.kt)("h2",{id:"create-templates"},"Create Templates"),(0,a.kt)("p",null,"Create a new file and save it to .skat/templates/component.js."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=.skat/templates/component.js",title:".skat/templates/component.js"},"export default function $NAME$() {\n    return (\n        <section>\n            <h2>Template variables also support some transformations, like</h2>\n            <ul>\n                <li>$NAME:toTitle$ as title case</li>\n                <li>$NAME:toLower$ as lower case</li>\n                <li>$NAME:toUpper$ as upper case</li>\n            </ul>\n        </section>\n    );\n}\n")),(0,a.kt)("h2",{id:"generate-code"},"Generate Code"),(0,a.kt)("p",null,"Open the terminal and call SKAT with the following arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zsh"},'skat gen -w component -n section-component -m -s "NAME:Section"\n')),(0,a.kt)("p",null,"And that's it! This should have created a directory and it should now contain a section-component directory with the\ntemplate we just created."))}u.isMDXComponent=!0}}]);