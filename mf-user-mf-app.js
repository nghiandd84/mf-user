System.register(["react","react-dom"],(function(n,e){var t={},A={};return{setters:[function(n){t.default=n.default},function(n){A.default=n.default}],execute:function(){n(function(){var n={722:function(n,e,t){const A=t(905).R;e.s=function(n){if(n||(n=1),!t.y.meta||!t.y.meta.url)throw console.error("__system_context__",t.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");t.p=A(t.y.meta.url,n)}},905:function(n,e,t){e.R=function(n,e){const t=document.createElement("a");t.href=n;const A="/"===t.pathname[0]?t.pathname:"/"+t.pathname;let o=0,r=A.length;for(;o!==e&&r>=0;)"/"===A[--r]&&o++;if(o!==e)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+e+") is greater than the number of directories ("+o+") in the URL path "+n);const i=A.slice(0,r+1);return t.protocol+"//"+t.host+i};Number.isInteger},534:function(n,e,t){"use strict";var A=t(658),o=t.n(A),r=t(118),i=t.n(r)()(o());i.push([n.id,".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    -webkit-animation: App-logo-spin infinite 20s linear;\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.btn {\n  border-radius: 0.5rem;\n  font-weight: 500;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  margin-left: 2rem;\n  margin-right: 2rem;\n  padding: 0.75rem;\n}\n\n.btn--primary {\n  --tw-bg-opacity: 1;\n  background-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.btn--secondary {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n","",{version:3,sources:["webpack://./src/App.css","webpack://./node_modules/tailwindcss/lib/lib/substituteClassApplyAtRules.js"],names:[],mappings:"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE;IACE,oDAA4C;IAA5C,4CAA4C;EAC9C;AACF;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,qBAAa;EAAb,aAAa;EACb,8BAAsB;EAAtB,sBAAsB;EACtB,2BAAmB;EAAnB,mBAAmB;EACnB,+BAAuB;EAAvB,uBAAuB;EACvB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,+BAAuB;IAAvB,uBAAuB;EACzB;;EACA;IACE,iCAAyB;IAAzB,yBAAyB;EAC3B;AACF;;AAPA;EACE;IACE,+BAAuB;IAAvB,uBAAuB;EACzB;;EACA;IACE,iCAAyB;IAAzB,yBAAyB;EAC3B;AACF;;AAEA;ECrCA,qBAAmB;EAAnB,gBAAmB;EAAnB,eAAmB;EAAnB,mBAAmB;EAAnB,iBAAmB;EAAnB,kBAAmB;EAAnB,gBAAmB;ADuCnB;;AAEA;ECzCA,kBAAmB;EAAnB,yDAAmB;EAAnB,oBAAmB;EAAnB,kDAAmB;AD2CnB;;AAEA;EC7CA,kBAAmB;EAAnB,2DAAmB;EAAnB,oBAAmB;EAAnB,4CAAmB;AD+CnB",sourcesContent:[".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.btn {\n  @apply text-base font-medium rounded-lg p-3 mx-8;\n}\n\n.btn--primary {\n  @apply bg-red-500 text-white;\n}\n\n.btn--secondary {\n  @apply bg-gray-100 text-black;\n}\n","@tailwind base;\n@tailwind components;\n@tailwind utilities;"],sourceRoot:""}]),e.Z=i},869:function(n,e,t){"use strict";var A=t(658),o=t.n(A),r=t(118),i=t.n(r)()(o());i.push([n.id,"/*! tailwindcss v2.0.4 | MIT License | https://tailwindcss.com */\n\n/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n:root {\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their instrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n.bg-red-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(127, 29, 29, var(--tw-bg-opacity));\n}\n\n.table {\n  display: table;\n}\n\n* {\n  --tw-shadow: 0 0 #0000;\n}\n\n* {\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@media (min-width: 640px) {\n}\n\n@media (min-width: 768px) {\n}\n\n@media (min-width: 1024px) {\n}\n\n@media (min-width: 1280px) {\n}\n\n@media (min-width: 1536px) {\n}\n","",{version:3,sources:["webpack://./src/style.css","<no source>"],names:[],mappings:"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",sourcesContent:["@tailwind base;\n@tailwind utilities;\n@tailwind components;\n",null],sourceRoot:""}]),e.Z=i},118:function(n){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,A){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(A)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<n.length;a++){var s=[].concat(n[a]);A&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},658:function(n){"use strict";function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,A=new Array(e);t<e;t++)A[t]=n[t];return A}n.exports=function(n){var t,A,o=(A=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var t=[],A=!0,o=!1,r=void 0;try{for(var i,a=n[Symbol.iterator]();!(A=(i=a.next()).done)&&(t.push(i.value),!e||t.length!==e);A=!0);}catch(n){o=!0,r=n}finally{try{A||null==a.return||a.return()}finally{if(o)throw r}}return t}}(t,A)||function(n,t){if(n){if("string"==typeof n)return e(n,t);var A=Object.prototype.toString.call(n).slice(8,-1);return"Object"===A&&n.constructor&&(A=n.constructor.name),"Map"===A||"Set"===A?Array.from(n):"Arguments"===A||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)?e(n,t):void 0}}(t,A)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[1],i=o[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),c="/*# ".concat(s," */"),d=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[r].concat(d).concat([c]).join("\n")}return[r].join("\n")}},918:function(n,e,t){"use strict";var A,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),r=[];function i(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function a(n,e){for(var t={},A=[],o=0;o<n.length;o++){var a=n[o],s=e.base?a[0]+e.base:a[0],c=t[s]||0,d="".concat(s," ").concat(c);t[s]=c+1;var l=i(d),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(r[l].references++,r[l].updater(u)):r.push({identifier:d,updater:f(u,e),references:1}),A.push(d)}return A}function s(n){var e=document.createElement("style"),A=n.attributes||{};if(void 0===A.nonce){var r=t.nc;r&&(A.nonce=r)}if(Object.keys(A).forEach((function(n){e.setAttribute(n,A[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var c,d=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function l(n,e,t,A){var o=t?"":A.media?"@media ".concat(A.media," {").concat(A.css,"}"):A.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var r=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(r,i[e]):n.appendChild(r)}}function u(n,e,t){var A=t.css,o=t.media,r=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(A+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=A;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(A))}}var m=null,p=0;function f(n,e){var t,A,o;if(e.singleton){var r=p++;t=m||(m=s(e)),A=l.bind(null,t,r,!1),o=l.bind(null,t,r,!0)}else t=s(e),A=u.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return A(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;A(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===A&&(A=Boolean(window&&document&&document.all&&!window.atob)),A));var t=a(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var A=0;A<t.length;A++){var o=i(t[A]);r[o].references--}for(var s=a(n,e),c=0;c<t.length;c++){var d=i(t[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}t=s}}}},297:function(n){"use strict";n.exports=t},268:function(n){"use strict";n.exports=A}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var A=o[e]={id:e,exports:{}};return n[e](A,A.exports,r),A.exports}r.y=e,r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,{a:e}),e},r.d=function(n,e){for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.p="";var i={};return(0,r(722).s)(1),function(){"use strict";r.r(i),r.d(i,{bootstrap:function(){return v},mount:function(){return C},unmount:function(){return w}});var n=r(297),e=r(268);function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function A(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(n);e&&(A=A.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,A)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){A(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var s=null;try{s=require("react").createContext()}catch(t){}var c={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{}};function d(n,e){return n.rootComponent?Promise.resolve():n.loadRootComponent(e).then((function(e){n.rootComponent=e}))}function l(n,e){return new Promise((function(t,A){n.suppressComponentDidCatchWarning||!function(n){if(!(n&&"string"==typeof n.version&&n.version.indexOf(".")>=0))return!1;var e=n.version.slice(0,n.version.indexOf("."));try{return Number(e)>=16}catch(n){return!1}}(n.React)||n.errorBoundary||(n.rootComponent.prototype?n.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(e.name||e.appName||e.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(e.name||e.appName||e.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=function(n,e){return e.domElement?function(){return e.domElement}:e.domElementGetter?e.domElementGetter:n.domElementGetter?n.domElementGetter:function(n){var e=n.appName||n.name;if(!e)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var t="single-spa-application:".concat(e);return function(){var n=document.getElementById(t);return n||((n=document.createElement("div")).id=t,document.body.appendChild(n)),n}}(e)}(n,e);if("function"!=typeof o)throw new Error("single-spa-react: the domElementGetter for react application '".concat(e.appName||e.name,"' is not a function"));var r=f(n,e),i=function(n,e){var t=n(e);if(!t)throw new Error("single-spa-react: domElementGetter function for application '".concat(e.appName||e.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return t}(o,e);p({elementToRender:r,domElement:i,whenFinished:function(){t(this)},opts:n}),n.domElements[e.name]=i}))}function u(n,e){return Promise.resolve().then((function(){n.ReactDOM.unmountComponentAtNode(n.domElements[e.name]),delete n.domElements[e.name]}))}function m(n,e){return new Promise((function(t,A){p({elementToRender:f(n,e),domElement:n.domElements[e.name],whenFinished:function(){t(this)},opts:n})}))}function p(n){var e=n.opts,t=n.elementToRender,A=n.domElement,o=n.whenFinished;return["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(e.renderType)>=0?e.ReactDOM[e.renderType](A).render(t,o):"hydrate"===e.renderType?e.ReactDOM.hydrate(t,A,o):e.ReactDOM.render(t,A,o)}function f(n,e){var t=n.React.createElement(n.rootComponent,e),A=s?n.React.createElement(s.Provider,{value:e},t):t;return n.errorBoundary&&(n.errorBoundaryClass=n.errorBoundaryClass||function(n){function e(t){n.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},e.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return e.prototype=Object.create(n.React.Component.prototype),e.prototype.render=function(){return this.state.caughtError?n.errorBoundary(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},e.prototype.componentDidCatch=function(n,e){this.setState({caughtError:n,caughtErrorInfo:e})},e}(n),A=n.React.createElement(n.errorBoundaryClass,e,A)),A}var h=r.p+"6ce24c58023cc2f8fd88fe9d219db6c6.svg",b=r(918),g=r.n(b),y=r(869),E=(g()(y.Z,{insert:"head",singleton:!1}),y.Z.locals,r(534));g()(E.Z,{insert:"head",singleton:!1}),E.Z.locals;var B=function(n){if("object"!==t(n))throw new Error("single-spa-react requires a configuration object");var e=a(a({},c),n);if(!e.React)throw new Error("single-spa-react must be passed opts.React");if(!e.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!e.rootComponent&&!e.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(e.errorBoundary&&"function"!=typeof e.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!s&&e.React.createContext&&(s=e.React.createContext());var A={bootstrap:d.bind(null,e),mount:l.bind(null,e),unmount:u.bind(null,e)};return e.parcelCanUpdate&&(A.update=m.bind(null,e)),A}({React:n.default,ReactDOM:e.default,rootComponent:function(){return n.default.createElement("div",{className:"App"},n.default.createElement("h1",{className:"bg-red-900 text-white"},"Hello TailwindCss"),n.default.createElement("button",{className:"btn btn--secondary"},"Decline"),n.default.createElement("button",{className:"btn btn--primary"},"Accept"),n.default.createElement("header",{className:"App-header"},n.default.createElement("img",{src:h,className:"App-logo",alt:"logo"}),n.default.createElement("p",null,"Edit ",n.default.createElement("code",null,"src/App.tsx")," and save to reload"),n.default.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))},errorBoundary:function(n,e,t){return null}}),v=B.bootstrap,C=B.mount,w=B.unmount}(),i}())}}}));
//# sourceMappingURL=mf-user-mf-app.js.map