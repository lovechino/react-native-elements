"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[76558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),i=n(16550),u=n(91980),c=n(67392),s=n(50012);function m(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:m(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function v(e){var t,n,r,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,c=e.groupId,m=d(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:m})})),b=v[0],h=v[1],y=f({queryString:u,groupId:c}),g=y[0],w=y[1],E=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=E[0],T=E[1],C=function(){var e=null!=g?g:k;return p({value:e,tabValues:m})?e:null}();return(0,a.useEffect)((function(){C&&h(C)}),[C]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);h(e),w(e),T(e)}),[w,T,m]),tabValues:m}}var b=n(72389);const h="tabList__CuJ",y="tabItem_LNqP";function g(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],m=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==i&&(m(t),u(r))},p=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;n=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var o,l=s.indexOf(e.currentTarget)-1;n=null!=(o=s[l])?o:s[s.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:p,onClick:d},l,{className:(0,o.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function w(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function E(e){var t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function k(e){var t=(0,b.Z)();return a.createElement(E,(0,r.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>u});var r=n(67294),a=n(35742),o=n(14330),l=n(98576),i=n(61720),u=function(){return r.createElement(a.Z,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n        "))}},22365:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(63366),a=n(87462),o=n(67294),l=n(10407),i=n(86010),u=(n(95999),n(52263)),c=n(91262),s=n(66412);const m="playgroundContainer_TGbA",d="playgroundEditor_PvJ1",p="playgroundPreview_bb8I",f="toggleContainer_ZZiH",v="toggleIcon_OnrQ",b="showCode_O0Od";var h=n(72389),y=n(5434),g=["children","transformCode"];function w(){return o.createElement("div",null,"Loading...")}function E(e){var t=(0,h.Z)(),n=(0,o.useContext)(l.L2),r=n.code,i=n.language,u=n.theme,c=n.disabled,s=n.onChange;return o.createElement(l.uz,(0,a.Z)({key:String(t),code:r,language:i,theme:u,disabled:c,onChange:s},e,{className:d}))}function k(e){var t=e.showCode,n=e.preImports,r=void 0===n?"":n,a=(e.wrapper,o.useState(t)),u=a[0],s=a[1],m=function(){s((function(e){return!e}))};return o.createElement(o.Fragment,null,o.createElement("div",{className:p},o.createElement(c.Z,{fallback:o.createElement(w,null)},(function(){return o.createElement(o.Fragment,null,o.createElement(l.i5,null),o.createElement(l.IF,null),o.createElement("div",{className:f},o.createElement("div",{className:(0,i.Z)(v),onClick:m},o.createElement(y.xoN,null),o.createElement("span",{className:b},u?"Hide":"Show"," Code"))))}))),u&&o.createElement(E,{preImports:r,showCode:u}))}function T(e){var t=e.children,n=(e.transformCode,(0,r.Z)(e,g)),i=((0,u.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,s.p)());return o.createElement("div",{className:m},o.createElement(l.nu,(0,a.Z)({code:t.replace(/\n$/,""),theme:i},n),o.createElement(k,{showCode:n.showCode})))}},56922:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),a=n(32408),o=n(13925),l=n(53211),i=n(83279);const u=Object.assign({React:r,LinearGradient:i.Z},a,o,l,r)},24299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>f});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(37047),i=(n(74866),n(85162),n(96711)),u=n(47516),c=["components"],s={id:"tabview_item",title:"TabView.Item"},m=void 0,d={unversionedId:"components/tabview_item",id:"version-4.0.0-rc.7/components/tabview_item",title:"TabView.Item",description:"They are individual item of the parent Tab.",source:"@site/versioned_docs/version-4.0.0-rc.7/components/TabView.Item.mdx",sourceDirName:"components",slug:"/components/tabview_item",permalink:"/docs/components/tabview_item",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/components/TabView.Item.mdx",tags:[],version:"4.0.0-rc.7",frontMatter:{id:"tabview_item",title:"TabView.Item"},sidebar:"docs",previous:{title:"TabView",permalink:"/docs/components/tabview"},next:{title:"Text",permalink:"/docs/components/text"}},p={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],v={toc:f};function b(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.w,{mdxType:"IconsStyle"}),(0,o.kt)("p",null,"They are individual item of the parent Tab."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("div",{class:"row inline-flex-center"},(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Import")),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"import { TabView } from '@rneui/themed';")),(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Theme Key"," ",(0,o.kt)("a",{href:"../customizing#using-themeprovider"},(0,o.kt)(u.Fs0,{mdxType:"BiInfoCircle"})))),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"TabViewItem"))),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")))}b.isMDXComponent=!0}}]);