(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2vfM":function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function u(e,t){return e(t={exports:{}},t.exports),t.exports}var p=u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,g=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,d=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.fundamental"):60117,h=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function C(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case p:case a:case c:case i:case g:return e;default:switch(e=e&&e.$$typeof){case l:case f:case s:return e;default:return t}}case d:case y:case o:return t}}}function P(e){return C(e)===p}t.typeOf=C,t.AsyncMode=u,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=s,t.Element=n,t.ForwardRef=f,t.Fragment=a,t.Lazy=d,t.Memo=y,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=g,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===p||e===c||e===i||e===g||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===s||e.$$typeof===l||e.$$typeof===f||e.$$typeof===b||e.$$typeof===h||e.$$typeof===v)},t.isAsyncMode=function(e){return P(e)||C(e)===u},t.isConcurrentMode=P,t.isContextConsumer=function(e){return C(e)===l},t.isContextProvider=function(e){return C(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return C(e)===f},t.isFragment=function(e){return C(e)===a},t.isLazy=function(e){return C(e)===d},t.isMemo=function(e){return C(e)===y},t.isPortal=function(e){return C(e)===o},t.isProfiler=function(e){return C(e)===c},t.isStrictMode=function(e){return C(e)===i},t.isSuspense=function(e){return C(e)===g}}));l(p);p.typeOf,p.AsyncMode,p.ConcurrentMode,p.ContextConsumer,p.ContextProvider,p.Element,p.ForwardRef,p.Fragment,p.Lazy,p.Memo,p.Portal,p.Profiler,p.StrictMode,p.Suspense,p.isValidElementType,p.isAsyncMode,p.isConcurrentMode,p.isContextConsumer,p.isContextProvider,p.isElement,p.isForwardRef,p.isFragment,p.isLazy,p.isMemo,p.isPortal,p.isProfiler,p.isStrictMode,p.isSuspense;var f=u((function(e,t){0}));l(f);f.typeOf,f.AsyncMode,f.ConcurrentMode,f.ContextConsumer,f.ContextProvider,f.Element,f.ForwardRef,f.Fragment,f.Lazy,f.Memo,f.Portal,f.Profiler,f.StrictMode,f.Suspense,f.isValidElementType,f.isAsyncMode,f.isConcurrentMode,f.isContextConsumer,f.isContextProvider,f.isElement,f.isForwardRef,f.isFragment,f.isLazy,f.isMemo,f.isPortal,f.isProfiler,f.isStrictMode,f.isSuspense,u((function(e){e.exports=p}));var g=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;function d(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}})()&&Object.assign;var b="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function h(e,t,r,n,o){}h.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function v(){}function C(){}C.resetWarningCache=v;var P=u((function(e){e.exports=function(){function e(e,t,r,n,o,a){if(a!==b){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:C,resetWarningCache:v};return r.PropTypes=r,r}()})),O=P.number,j=P.string,S=P.func,x=P.oneOfType,w=P.node;!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".react-hooks-paginator {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 1rem 0; }\n  .react-hooks-paginator .page-item {\n    list-style: none; }\n    .react-hooks-paginator .page-item:first-child .page-link {\n      margin-left: 0;\n      border-top-left-radius: 3px;\n      border-bottom-left-radius: 3px; }\n    .react-hooks-paginator .page-item:last-child .page-link {\n      border-top-right-radius: 3px;\n      border-bottom-right-radius: 3px; }\n    .react-hooks-paginator .page-item:hover .page-link, .react-hooks-paginator .page-item.active .page-link {\n      background-color: #3895d3;\n      border-color: #3895d3;\n      color: #fff; }\n  .react-hooks-paginator .page-link {\n    border: 1px solid #dee2e6;\n    color: #4a4a4a;\n    margin-left: -1px;\n    outline: none;\n    padding: 0.5rem 0.75rem;\n    text-decoration: none;\n    transition: all 0.2s; }\n");var k="LEFT",E="RIGHT",M=function(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e,o=[];n<=t;)o.push(n),n+=r;return o};function T(e){var t=c(Object(n.useState)((function(){return function(){var t=e.totalRecords,r=void 0===t?null:t,n=e.pageLimit,o=void 0===n?20:n,a=e.pageNeighbours,i=void 0===a?0:a;return{pageLimit:o="number"===typeof o?o:20,totalRecords:r="number"===typeof r?r:0,pageNeighbours:i="number"===typeof i?Math.max(0,Math.min(i,2)):0,totalPages:Math.ceil(r/o)}}()})),2),r=t[0],l=t[1],u=Object(n.useRef)(!0),p=Object(n.useCallback)((function(t){var n=Math.max(1,Math.min(t,r.totalPages));e.setCurrentPage(n)}),[r.totalPages,e.pageLimit]);Object(n.useEffect)((function(){p(1)}),[p]),Object(n.useEffect)((function(){e.setOffset((e.currentPage-1)*e.pageLimit)}),[e.currentPage]),Object(n.useEffect)((function(){if(u.current)u.current=!1;else{var t=e.totalRecords,n=Math.ceil(t/r.pageLimit);l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{totalRecords:e.totalRecords,totalPages:n}))}}),[e.totalRecords]);var f=Object(n.useCallback)((function(t){t.preventDefault(),p(e.currentPage-2*r.pageNeighbours-1)}),[e.currentPage]),g=Object(n.useCallback)((function(t){t.preventDefault(),p(e.currentPage+2*r.pageNeighbours+1)}),[e.currentPage,r.pageNeighbours]),m=Object(n.useCallback)((function(){var t=r.totalPages,n=e.currentPage,o=r.pageNeighbours,a=2*r.pageNeighbours+3;if(t>a+2){var i=[],c=n-o,l=n+o,u=t-1,p=c>2?c:2,f=l<u?l:u,g=a-(i=M(p,f)).length-1,m=p>2,y=f<u,d=k,b=E;if(m&&!y){var h=M(p-g,p-1);i=[d].concat(s(h),s(i))}else if(!m&&y){var v=M(f+1,f+g);i=[].concat(s(i),s(v),[b])}else m&&y&&(i=[d].concat(s(i),[b]));return[1].concat(s(i),[t])}return M(1,t)}),[r.totalPages,e.currentPage,r.pageNeighbours]);if(!r.totalRecords)return null;if(1===r.totalPages)return null;var y=e.currentPage,d=m();return o.a.createElement("ul",{className:e.pageContainerClass},d.map((function(t,r){return t===k?o.a.createElement("li",{className:e.pageItemClass,key:r},o.a.createElement("button",{className:e.pagePrevClass,onClick:f},e.pagePrevText)):t===E?o.a.createElement("li",{className:e.pageItemClass,key:r},o.a.createElement("button",{className:e.pageNextClass,onClick:g},e.pageNextText)):o.a.createElement("li",{className:"".concat(e.pageItemClass," ").concat(y===t?e.pageActiveClass:null),key:r},o.a.createElement("button",{className:e.pageLinkClass,onClick:function(e){return function(e,t){t.preventDefault(),p(e)}(t,e)}},t))})))}T.defaultProps={pageContainerClass:"react-hooks-paginator",pageActiveClass:"active",pageItemClass:"page-item",pageLinkClass:"page-link",pageNextText:"Next \xbb",pagePrevText:"\xab Prev",pagePrevClass:"page-link",pageNextClass:"page-link"},T.propTypes={currentPage:O,pageActiveClass:j,pageNextText:x([j,w]),pagePrevText:x([j,w]),pagePrevClass:j,pageNextClass:j,pageContainerClass:j,pageItemClass:j,pageLimit:O,pageLinkClass:j,pageNeighbours:O,setCurrentPage:S,setOffset:S,totalRecords:O.isRequired},t.a=T}}]);