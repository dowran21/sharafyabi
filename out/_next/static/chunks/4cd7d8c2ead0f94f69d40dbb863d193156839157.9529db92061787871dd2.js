(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{xFHe:function(e,t,n){!function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var o=r(t),a=r(n);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=["animationData","loop","autoplay","initialSegment","onComplete","onLoopComplete","onEnterFrame","onSegmentStart","onConfigReady","onDataReady","onDataFailed","onLoadedImages","onDOMLoaded","onDestroy","lottieRef","renderer","name","assetsPath","rendererSettings"],m=function(e,t){var r=e.animationData,i=e.loop,l=e.autoplay,f=e.initialSegment,m=e.onComplete,p=e.onLoopComplete,y=e.onEnterFrame,v=e.onSegmentStart,g=e.onConfigReady,b=e.onDataReady,S=e.onDataFailed,h=e.onLoadedImages,O=e.onDOMLoaded,w=e.onDestroy;e.lottieRef,e.renderer,e.name,e.assetsPath,e.rendererSettings;var A=s(e,d),P=c(n.useState(!1),2),D=P[0],j=P[1],E=n.useRef(),R=n.useRef(null);return n.useEffect((function(){!function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(R.current){null===(t=E.current)||void 0===t||t.destroy();var r=u(u(u({},e),n),{},{container:R.current});E.current=o.default.loadAnimation(r),j(!!E.current)}}()}),[r]),n.useEffect((function(){E.current&&(E.current.loop=!!i,i&&E.current.isPaused&&E.current.play())}),[i]),n.useEffect((function(){E.current&&(E.current.autoplay=!!l)}),[l]),n.useEffect((function(){E.current&&(f?Array.isArray(f)&&f.length&&((E.current.currentRawFrame<f[0]||E.current.currentRawFrame>f[1])&&(E.current.currentRawFrame=f[0]),E.current.setSegment(f[0],f[1])):E.current.resetSegments(!1))}),[f]),n.useEffect((function(){var e=[{name:"complete",handler:m},{name:"loopComplete",handler:p},{name:"enterFrame",handler:y},{name:"segmentStart",handler:v},{name:"config_ready",handler:g},{name:"data_ready",handler:b},{name:"data_failed",handler:S},{name:"loaded_images",handler:h},{name:"DOMLoaded",handler:O},{name:"destroy",handler:w}].filter((function(e){return null!=e.handler}));if(e.length){var t=e.map((function(e){var t;return null===(t=E.current)||void 0===t||t.addEventListener(e.name,e.handler),function(){var t;null===(t=E.current)||void 0===t||t.removeEventListener(e.name,e.handler)}}));return function(){t.forEach((function(e){return e()}))}}}),[m,p,y,v,g,b,S,h,O,w]),{View:a.default.createElement("div",u({style:t,ref:R},A)),play:function(){var e;null===(e=E.current)||void 0===e||e.play()},stop:function(){var e;null===(e=E.current)||void 0===e||e.stop()},pause:function(){var e;null===(e=E.current)||void 0===e||e.pause()},setSpeed:function(e){var t;null===(t=E.current)||void 0===t||t.setSpeed(e)},goToAndStop:function(e,t){var n;null===(n=E.current)||void 0===n||n.goToAndStop(e,t)},goToAndPlay:function(e,t){var n;null===(n=E.current)||void 0===n||n.goToAndPlay(e,t)},setDirection:function(e){var t;null===(t=E.current)||void 0===t||t.setDirection(e)},playSegments:function(e,t){var n;null===(n=E.current)||void 0===n||n.playSegments(e,t)},setSubframe:function(e){var t;null===(t=E.current)||void 0===t||t.setSubframe(e)},getDuration:function(e){var t;return null===(t=E.current)||void 0===t?void 0:t.getDuration(e)},destroy:function(){var e;null===(e=E.current)||void 0===e||e.destroy()},animationContainerRef:R,animationLoaded:D,animationItem:E.current}},p=function(e){var t=e.wrapperRef,r=e.animationItem,o=e.mode,a=e.actions;n.useEffect((function(){var e=t.current;if(e&&r)switch(r.stop(),o){case"scroll":return function(){var t=null,n=function(){var n=function(e){var t=e.getBoundingClientRect(),n=t.top,r=t.height;return(window.innerHeight-n)/(window.innerHeight+r)}(e),o=a.find((function(e){var t=e.visibility;return t&&n>=t[0]&&n<=t[1]}));if(o){if("seek"===o.type&&o.visibility&&2===o.frames.length){var i=o.frames[0]+Math.ceil((n-o.visibility[0])/(o.visibility[1]-o.visibility[0])*o.frames[1]);r.goToAndStop(i-r.firstFrame-1,!0)}"loop"===o.type&&(null===t?(r.playSegments(o.frames,!0),t=o.frames):t!==o.frames?(r.playSegments(o.frames,!0),t=o.frames):r.isPaused&&(r.playSegments(o.frames,!0),t=o.frames)),"play"===o.type&&r.isPaused&&(r.resetSegments(!0),r.play()),"stop"===o.type&&r.goToAndStop(o.frames[0]-r.firstFrame-1,!0)}};return document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)}}();case"cursor":return function(){var t=function(t,n){var o=t,i=n;if(-1!==o&&-1!==i){var u=function(e,t,n){var r=e.getBoundingClientRect(),o=r.top;return{x:(t-r.left)/r.width,y:(n-o)/r.height}}(e,o,i);o=u.x,i=u.y}var l=a.find((function(e){var t=e.position;return t&&Array.isArray(t.x)&&Array.isArray(t.y)?o>=t.x[0]&&o<=t.x[1]&&i>=t.y[0]&&i<=t.y[1]:!(!t||Number.isNaN(t.x)||Number.isNaN(t.y))&&o===t.x&&i===t.y}));if(l){if("seek"===l.type&&l.position&&Array.isArray(l.position.x)&&Array.isArray(l.position.y)&&2===l.frames.length){var s=(o-l.position.x[0])/(l.position.x[1]-l.position.x[0]),c=(i-l.position.y[0])/(l.position.y[1]-l.position.y[0]);r.playSegments(l.frames,!0),r.goToAndStop(Math.ceil((s+c)/2*(l.frames[1]-l.frames[0])),!0)}"loop"===l.type&&r.playSegments(l.frames,!0),"play"===l.type&&(r.isPaused&&r.resetSegments(!1),r.playSegments(l.frames)),"stop"===l.type&&r.goToAndStop(l.frames[0],!0)}},n=function(e){t(e.clientX,e.clientY)},o=function(){t(-1,-1)};return e.addEventListener("mousemove",n),e.addEventListener("mouseout",o),function(){e.removeEventListener("mousemove",n),e.removeEventListener("mouseout",o)}}()}}),[o,r])},y=function(e){var t=e.actions,n=e.mode,r=e.lottieObj,o=r.animationItem,a=r.View;return p({actions:t,animationItem:o,mode:n,wrapperRef:r.animationContainerRef}),a},v=["style","interactivity"],g=function(e){var t,r=e.style,o=e.interactivity,a=s(e,v),i=m(a,r),l=i.View,c=i.play,f=i.stop,d=i.pause,p=i.setSpeed,g=i.goToAndStop,b=i.goToAndPlay,S=i.setDirection,h=i.playSegments,O=i.setSubframe,w=i.getDuration,A=i.destroy,P=i.animationContainerRef,D=i.animationLoaded,j=i.animationItem;return n.useEffect((function(){e.lottieRef&&(e.lottieRef.current={play:c,stop:f,pause:d,setSpeed:p,goToAndPlay:b,goToAndStop:g,setDirection:S,playSegments:h,setSubframe:O,getDuration:w,destroy:A,animationContainerRef:P,animationLoaded:D,animationItem:j})}),[null===(t=e.lottieRef)||void 0===t?void 0:t.current]),o?y(u({lottieObj:{View:l,play:c,stop:f,pause:d,setSpeed:p,goToAndStop:g,goToAndPlay:b,setDirection:S,playSegments:h,setSubframe:O,getDuration:w,destroy:A,animationContainerRef:P,animationLoaded:D,animationItem:j}},o)):l},b=g,S=m;Object.defineProperty(e,"LottiePlayer",{enumerable:!0,get:function(){return o.default}}),e.Animator=b,e.default=g,e.useAnimator=S,e.useLottie=m,e.useLottieInteractivity=y,Object.defineProperty(e,"__esModule",{value:!0})}(t,n("lPHp"),n("q1tI"))}}]);