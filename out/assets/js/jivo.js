!function(){"use strict";function e(){return document.currentScript?document.currentScript:document.querySelector("script[jv-id]")||document.querySelector("script[data-jv-id]")}
function t(e){return e&&e.match(/https?:\/\/(\S+\.com)\/(widget\.js|widget\/[A-Za-z0-9]+)/)}
function n(e){return e&&e.match(/^https?:\/\/(\S+)\/script\/widget\/([A-Za-z0-9]+)/)}
function o(e){return e&&e.match(/https?:\/\/(\S+)\/script\/geo-widget\/([A-Za-z0-9]+)/)}
function r(){var e=window.location&&window.location.protocol;return-1===["http","https"].indexOf(e||"")&&(e="https:"),e}
function i(){return window.jivo_config&&window.jivo_config.shard_id||"main"}
function a(e,t,n){var o;e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&(e.attachEvent("on"+t,(o=e,function(){n.call(o,window.event)}
)),e=null)}
function d(e){try{a(window,"scroll",e),a(document.body,"mousemove",e)}
catch(t){e&&e()}
}
function s(e,t,n){if(window.removeEventListener)e.removeEventListener(t,n,!1);else{if(!window.detachEvent)return!1;e.detachEvent("on"+t,(function(){n.call(e)}
))}
}
function l(e){try{s(window,"scroll",e),s(document.body,"mousemove",e)}
catch(e){console.warn(e)}
}
function c(){var e=navigator.userAgent.toLowerCase();return-1==e.search(/google/gi)&&-1==e.search(/\+http:\/\/yandex\.com\/bots/gi)&&-1==e.search(/\+http:\/\/www\.cloudflare\.com\/always-online/gi)&&-1==e.search(/linespider\//gi)}
function u(e,t,n,o,r){r&&r.error&&(r=r.error),r&&r instanceof Error||(r={}
),r.stack=r.stack||"empty",r.message="Bundle init error: "+e+" error.message: "+r.message,r.columnNumber=o,r.lineNumber=n,r.url=t,window.parent.__jivoOnError(r)}
var g="loader_loaded",f="no_widget_id_or_confighost",m="error_code_1015",v="widget_deleted",p="ie_loading_blocked";window.__jivoOnError=function(e){if(c())try{var t="//err.jivosite.com/widget",n="POST",o={widget:"true",widget_version:window.jivo_version,level:2,url:(d=window.location,d.protocol+"//"+d.host+d.pathname),lineNumber:e&&e.lineNumber,fileName:e&&e.fileName,column:e&&e.columnNumber,full_message:e&&e.stack,short_message:e&&e.message,shard:i()}
,a=new XMLHttpRequest;"withCredentials"in a?a.open(n,r()+t,!0):"undefined"!=typeof XDomainRequest&&(a=new XDomainRequest).open(n,t),a.setRequestHeader("Content-Type","application/json"),a.send(JSON.stringify(o))}
catch(e){}
var d}
,function(){var s=.1;window.__hasStorage=!1;try{localStorage.setItem("testLocalStorage","ok"),localStorage.removeItem("testLocalStorage"),window.__hasStorage=!0}
catch(e){}
function h(s,h,w,_){var b=s.console;if(b||(b={log:function(){}
,error:function(){}
}
),function(){if(s.google&&s.google.translate&&0==s.location.href.search(/(http(s?)).+\.translate\.goog/gi))return!1;return!!s.WebSocket}
()){if(void 0===s.jivo_magic_var){s.jivo_magic_var=!0;var y,S,j,C,I,E,L,T,N,O,A,k={hasStorage:s.__hasStorage,jivoLoaderVersion:w,loadScript:function(e,t){var n=t||h,o=n.getElementsByTagName("script")[0],r=n.createElement("script");pe(r),o.parentNode.insertBefore(r,o).src=e}
,currentLoaderVersionCache:_}
,B=navigator.userAgent.toLowerCase(),H=/iPhone|iPad|iPod|Android|Windows Phone/i.test(B),W=h.createElement("iframe"),x=h.createElement("div"),R=0,M=0,q=0,U=[],D=!1,J=ie(),X=JSON.parse('["AF","CG","CF","GW","ER","IR","IQ","KP","LR","LB","LY","ML","CU","PS","SO","SD","SY","ZW","YE"]')||null,P=JSON.parse('["127-129-12k-12i-12c-12h","12e-12i-12e-124-12c-12h","131-12e-12l-12m-124-12b-12c","124-12g-12o-129-12m-124-12g-12c-12h","127-124-12s-12c-12s","12g-124-12k-12c-12p-12n-124-12h-124","3n-12j-124-12d-12l","12g-129-12o-129-128-12k-12i-12h"]')||null;be("Initialization"),s.__jivoBundleOnLoad=function(e){clearTimeout(I),E=e;var t=((new Date).getTime()-L)/1e3;t>6&&ae("loadTime",t);ae("bundleLoaded",!0),ae("buildNumber",y.build_number),be("Bundle is loaded"),function(){C=h.body.lastChild,x.style&&(x.style.opacity="0",x.style.visibility="hidden",x.style.width=0,x.style.height=0,x.style.overflow="hidden");x.setAttribute("id","jivo-iframe-container"),x.appendChild(W),C?C.parentNode.insertBefore(x,C.nextSibling):h.body.appendChild(x);re()}
()}
,s.__jivoBundleInit=function(e){e.loaderContext=k,function(){E=null;var e=function(e){if(e){var t=e.querySelectorAll&&e.querySelectorAll(".js-jivo-bundle");return t&&t.length>0?t:e.getElementsByClassName("js-jivo-bundle")}
}
(ye());if(!e)throw b.error("Cannot get bundle script element"),new Error("Cannot get bundle script element");for(var t=0;t<e.length;t++)e[t].parentNode&&e[t].parentNode.removeChild(e[t]);e=null}
()}
,s.jivo_init=function(){R=0;var e=h.createEvent("Event");e.initEvent("jBeforeunload",!0,!0),s.dispatchEvent(e),ne()}
,s.jivo_destroy=function(){R=0;var e=h.createEvent("Event");e.initEvent("jBeforeunload",!0,!0),s.dispatchEvent(e),delete s.jivo_magic_var,setTimeout((function(){x.parentNode.removeChild(x)}
),10)}
,k.getHostURL=_e,k.store=J,k.setInStore=ae;var G,z=!1,V=function(e){try{e.blockedURI&&-1!==e.blockedURI.indexOf("jivosite")&&(z=!0,h.removeEventListener("securitypolicyviolation",V))}
catch(e){}
}
.bind(this);try{a(h,"securitypolicyviolation",V)}
catch(e){}
ce(),!(!(G=N)||!/^\d+$/.test(G)&&10!=G.length)||(N=null,T=null,b.error("Widget id is not valid.")),K(g,5),function(){(J=ie()).geoWidgetInfo.widgetId&&(N=J.geoWidgetInfo.widgetId,J=ie(),T=J.configHost);ae("isNewCode",D),k.store=J}
();var F=null,Z=!1;O&&(A=O.getAttribute("nonce"))&&(s.jivo_cspNonce=A),N&&T?(be("widgetId:",N,"configHost:",T),Y(le())):N&&T||(K(f,5),b.error("Failed to evaluate the widgetId or configHost"))}
}
else b.log("Not supported browser");function Y(e,t){if(U.push(e),++q>4){be("Config load limit is exceeded"),k.hasStorage&&localStorage.removeItem("jv_loader_info_"+N);var n=new Error("Config load limit is exceeded"),o="Config urls: "+U.join(";\r\n");try{n.stack=o}
catch(e){n=new Error("Config load limit is exceeded. "+o)}
s.__jivoOnError(n)}
else if(be("Loading config from",e),J.deletedInfo.widgetId&&J.deletedInfo.widgetId===N&&J.deletedInfo.resolveTime&&parseInt(J.deletedInfo.resolveTime)>=(new Date).getTime())b.error("This widget is permanently removed");else{var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4===i.readyState)if(200===i.status){var e=Ie(he(i));e?(be("Config is loaded",e),e.isDeleted?fe():t?(e.chat_mode=t.chat_mode,e.options=t.options,e.botmode=t.botmode,e.geoip=t.geoip,e.maintenance=!!t.maintenance,Q(e,null)):function(e,t){var n=new XMLHttpRequest;function o(){return!1}
n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status){var o=Ie(he(n));if(!o)throw new Error("Load widget status error");var r=n.getResponseHeader("X-BotMode"),i=n.getResponseHeader("X-GeoIP"),a=o.agents&&o.agents.length;be("Status is loaded",o,r,i,a),e.lastStatus=o,e.botmode="yes"===r?"yes":null,e.geoip=i||";;;",e.chat_mode=a?"online":"offline",e.options=o.premium?888:0,o.bots&&o.bots.length&&(e.bots=o.bots),e.maintenance=!!o.maintenance,t(o.config_updated_ts)}
else if(0!==n.status)throw e.botmode=null,e.geoip=";;;",e.chat_mode="offline",e.options=0,t(null),480==n.status&&be("Site is under maintenance, try again later."),new Error("Load widget status error: "+n.status)}
;var i="/configs/development/status.json",a=o()?i:r()+"//"+e.comet.host+"/widget/status/"+e.site_id+"/"+e.widget_id+"?rnd="+Math.random();n.open("GET",a,!0),n.send(null)}
(e,(function(t){Q(e,t)}
))):me(!0)}
else 0!==i.status&&me()}
,i.open("GET",e,!0),i.send(null)}
}
function $(e){var t={event:e,widget_id:N,t:(new Date).getTime(),param1:"53.14.0",shard:i()}
;if(c())try{var n=r()+!0?"//telemetry.jivosite.com/w?cb=loader":"//telemetry.dev.jivosite.com:2443/w";for(var o in t)n+="&"+o+"="+encodeURIComponent(t[o]);var a=new XMLHttpRequest;"withCredentials"in a?a.open("GET",n,!0):"undefined"!=typeof XDomainRequest&&(a=new XDomainRequest).open("GET",n),a.send()}
catch(e){}
}
function K(e,t){Math.random()<=.01*t&&$(e)}
function Q(e,t){if(be("checkConfig",e.config_updated_ts,t),e.isDeleted)fe();else if(function(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")}
()&&e.disable_widget_on_ie11)$(p);else{if(t&&e.config_updated_ts&&e.config_updated_ts!=t)return be("update configUpdatedTs in store",t),ae("configUpdatedTs",t),Y(le(),e);if(e.regions&&!J.isChatStarted){var n=function(e){var t,n,o=e.regions,r=ge(e.geoip);if(o){for(var i=Object.keys(o),a=0;a<i.length;a++)for(var d=o[i[a]],s=0;s<d.length;s++)if(1!=d.length||"default"!==d[s]){var l=ge(d[s]);if(r.country===l.country){if(r.region===l.region)return ue(i[a],d[s],e.geoip);n||l.region||(n=ue(i[a],d[s],e.geoip))}
}
else t=i[a];if(n)return n;if(t)return ue(t,"default",e.geoip)}
}
(e);if(n.widgetId!==N)return be("Wrong geo-widget widgetId",N),ae("geoWidgetInfo",n),N=n.widgetId,void Y(le())}
if((F=e.ab_segment)&&F.name&&F.host&&F.staticHost&&1!==e.site_id)if(be("AB-testing segmentation is enabled in config"),Z=function(e,t){var n=J.abTesting,o=!1;o=n&&n.name===e.name?n.match:function(e,t){if(be('Check for criteria match of test "'+e.name+'"'),e.device){if(!function(e){if("desktop"===e)return je()&&!Ce();if("mobile"===e)return Ce();if("all"===e)return je()||Ce();return!1}
(e.device))return be('Segment "'+e.name+'" is NOT matched. Criteria: device'),!1}
if(e.locale){if(!(e.locale===t.locale))return be('Segment "'+e.name+'" is NOT matched. Criteria: locale'),!1}
if(e.percentage){if(!(n=e.percentage,Math.random()<=.01*n))return be('Segment "'+e.name+'" is NOT matched. Criteria: percentage'),!1}
var n;return be('Segment "'+e.name+'" is matched!'),!0}
(e,t);return ae("abTesting",{name:e.name,match:o}
),o}
(F,e),Z){be("Ab-testing segment match! Segment:",F.name);var o="//"+F.host;be('Setting new base_url. Was: "'+e.base_url+'". New: "'+o+'".'),e.base_url=o}
else be("Ab-testing segment is NOT matched");else ae("abTesting",null),be("AB-testing segmentation is NOT enabled in config"),ae("configHost",T);!function(e){if(ae("log",!!e.logs),s.jivo_config=y=e,function(){if(y.host_blacklist)for(var e=y.host_blacklist.split(","),t=0;t<e.length;t++)if(s.location.host.indexOf(e[t].replace(" ",""))>=0)return!0;return!1}
())throw be("Host is blacklisted",s.location.host),new Error("Placing widget is forbidden on "+s.top.location.host);if(t=y.geoip.split(";")[0],X.indexOf(t)>=0)return b.log("[Jivo]: Service unavailable for country");if(!e.disable_stop_words&&function(){var e=!1,t=(d=P,d.map((function(e){return e.split("-").map((function(e){return String.fromCharCode(parseInt(e,32)-20)}
)).join("")}
))),n=h.querySelector('meta[name="description"]'),o=h.querySelector('meta[name="keywords"]'),r=h.title,i=n&&n.content?n.content:"",a=o&&o.content?o.content:"";var d;(we(r,t)||we(i,t)||we(a,t))&&(e=!0);return e}
())return $(m),void be("Init error, code 1015.");if(H&&y.disable_mobile)return void be("Mobile widget is disabled");var t;"complete"==h.readyState?ee():J.bundleLoaded&&J.buildNumber==y.build_number?"interactive"==h.readyState?ee():a(s,"DOMContentLoaded",ee):(ae("bundleLoaded",!1),a(s,"load",ee))}
(e)}
}
function ee(){be("Widget initialization"),function(){be("Iframe initialization"),W.src="javascript:void(0)",W.role="presentation",W.allow="autoplay",W.title="Jivochat",W.setAttribute("name","jivo_container"),W.setAttribute("id","jivo_container"),W.setAttribute("frameborder","no"),A&&W.setAttribute("nonce",A);s.atob&&"complete"!==h.readyState?a(s,"load",ne):ne();a(s,"message",(function(e){if(e&&e.data&&"object"==typeof e.data){var t=e.data;"in_node_webkit"==t.name&&(s.jivo_cobrowse={source:e.source,origin:e.origin}
),"iframe_url_changed"!=t.name&&"iframe_url_changed"!=t||re()}
else y&&1===y.logs&&b&&b.log&&b.log("Error receive postMessage, window message event is empty.")}
))}
()}
function te(){var e=_e();be("loadBundleAfterWait",e,k),l(te),oe(e)}
function ne(){var e=_e();if(!k.store.isChatStarted&&y.enable_bundle_wait){be("addWaitActions");try{d(te),setTimeout((function(){be("5s load",k.store),s.jivo_api||te()}
),5e3)}
catch(t){oe(e)}
}
else be("startLoadBundle",e),oe(e)}
function oe(e){be("Insertion of bundle code from",e);var t=ye(),n=h.createElement("script"),o=function(e){var t=y.bundle_folder?y.bundle_folder:"";return e+t+"/js/bundle_"+y.locale+".js?rand="+y.build_number}
(e);L=(new Date).getTime(),pe(n),n.className="js-jivo-bundle",n.src=r()+o,k.bundleSrc=o,n.onerror=function(){be("loadBundle errorBundle",e),h.getElementById("jcont")&&function(e,t,n){if(clearTimeout(I),++M>=5){if(be("Bundle load retries count is exceeded"),be("Bad csp is: "+z),z)return void b.error("Widget not loaded due CSP security policy.");var o=new Error("Bundle NOT loaded. Type: "+e+(t?". Host: "+t:"")+(n?". Status code: "+n:""));return void s.__jivoOnError(o)}
ne()}
("errorBundle",e)}
,t.appendChild(n)}
function re(){if(!(R++>3)){if(!E)return R--,ne();try{j=W.contentWindow.document}
catch(e){S=h.domain,W.src="javascript:var d=document.open();d.domain='"+S+"';void(0);",j=W.contentWindow.document}
var e='<meta name="google" content="notranslate"><meta http-equiv="X-UA-Compatible" content="IE=edge" />',t="";try{t="window.onerror = "+u.toString()+";"}
catch(e){}
var n=(y&&!y.disable_error_reporting?t:"")+E;if(!(navigator.userAgent.toLowerCase().indexOf("firefox")>-1)&&j.head&&j.body){j.body.class="notranslate",j.head.innerHTML=e;var o=h.createElement("script");o.type="text/javascript",A&&o.setAttribute("nonce",A),o.innerHTML=n,j.head.appendChild(o)}
else{var r='<body class="notranslate"></body>',i='<script type="text/javascript"'+(A?'nonce="'+A+'"':"")+">"+n+"<\/script>",a="<head>"+e+i+"</head>";j.write("<!doctype HTML>"+a+r),i=null,r=null,a=null}
j.close(),n=null}
}
function ie(){var e={isChatStarted:null,geoWidgetInfo:{widgetId:null,clientLocation:null,region:null}
,configHost:null,deletedInfo:{widgetId:null,resolveTime:null}
,abTesting:null,buildNumber:null,bundleLoaded:null,isNewCode:null,loadTime:null,log:null,configUpdatedTs:null}
;if(k.hasStorage&&(localStorage.removeItem("jv_loader_info"),N)){var t=Ie(localStorage.getItem("jv_loader_info_"+N));t&&de(t,e)}
return e}
function ae(e,t){if(J[e]=t,k.hasStorage&&N){var n={}
;de(J,n),localStorage.setItem("jv_loader_info_"+N,(o=n,s.MooTools&&void 0===JSON.stringify?JSON.encode(o):JSON.stringify(o)))}
var o}
function de(e,t){Object.keys(e).forEach((function(n){(function(e){if(se(e))return!0;if("object"==typeof e){for(var t=Object.keys(e),n=0;n<t.length;n++)if(!se(e[t[n]]))return!1;return!0}
}
)(e[n])||(t[n]=e[n])}
))}
function se(e){return null===e&&"object"==typeof e}
function le(){var e="";return be("getConfigUrl",J.configUpdatedTs),J.configUpdatedTs&&(e="?v="+J.configUpdatedTs),r()+T+"/script/widget/config/"+N+e}
function ce(){var r=function(e){if(e)return e.src;try{throw new Error("Get script URL")}
catch(e){var r=e.stack;if(r){var i=t(r),a=n(r),d=o(r);return i?i[0]:a?a[0]:d?d[0]:null}
}
}
(O=e());if(r&&r.match(/&lt;/))be("Invalid codeHost",r);else{var i,a=t(r),d=n(r),s=o(r);T||(a?(T="//"+a[1],D=!0):d?T="//"+d[1]:s&&(T="//"+s[1])),N||(d&&d[2]?(N=d[2],D=!1):s&&s[2]?(N=s[2],D=!1):(D=!0,O&&(N=O.getAttribute("jv-id")||O.getAttribute("data-jv-id")),N||(i=r&&r.match(/https?:\/\/\S+\/widget\/([A-Za-z0-9]+)/),N=i?i[1]:null))),be("getWidgetIdAndConfigHost",N,T)}
}
function ue(e,t,n){return{widgetId:e,region:t,clientLocation:n}
}
function ge(e){if("string"==typeof e&&""!==e){var t=e.split(";");return{country:t[0],region:t[1],city:t[2]}
}
}
function fe(){be("Widget was removed",N),ae("configHost",null),J.geoWidgetInfo.widgetId||J.isChatStarted?(ae("geoWidgetInfo",ue(null,null,null)),ae("isChatStarted",null),ve()):(ae("deletedInfo",{widgetId:N,resolveTime:((new Date).getTime()+6048e5).toString()}
),b.error("Widget "+N+" is permanently removed. Host: "+T),$(v))}
function me(e){be("Config loading error:",e?"parse":"request"),ae("geoWidgetInfo",ue(null,null,null)),ae("isChatStarted",null),ae("configHost",null),e||ve()}
function ve(){N=null,T=null,ce(),Y(le())}
function pe(e){if(e)return e.type="text/javascript",e.async=!0,e.charset="UTF-8",A&&e.setAttribute("nonce",A),e}
function he(e){return e.responseType&&"text"!==e.responseType?"document"===e.responseType?e.responseXML:e.response:e.responseText}
function we(e,t){for(var n=!1,o=0;o<t.length;o++){var r=t[o].toLowerCase(),i=new RegExp("([, .]|^)"+r+"([, .]|$)","gi");if(e.toLowerCase().search(i)>-1){n=!0;break}
}
return n}
function _e(){return y.base_url}
function be(){if(J.log){var e=Array.prototype.slice.call(arguments||[]);e.unshift("Loader:"),b.log.apply(b,e)}
}
function ye(){var e=h.head||h.getElementsByTagName("head")[0];if(!e)throw b.error("Cannot get document head element"),new Error("Cannot get document head element");return e}
function Se(e){return-1!==B.indexOf(e)}
function je(){return Se("chrome")&&!Se("opr/")&&"Google Inc."===s.navigator.vendor}
function Ce(){return!Se("windows")&&Se("android")}
function Ie(e){try{return s.MooTools&&void 0===JSON.parse?JSON.decode(e):JSON.parse(e)}
catch(e){return e.message="Config parse error: "+N+"\n\n"+e.message,s.__jivoOnError(e),null}
}
}
var w=h,_=null;if(window.__hasStorage){try{_=JSON.parse(localStorage.getItem("__jivoLoader"))}
catch(e){jivoLog("Loader cache parse error.")}
_&&_.version>s&&(w=new Function("window","document","broswerCacheLoaderVersion","currentLoaderVersionCache","("+_.code+")(window, document, broswerCacheLoaderVersion, currentLoaderVersionCache)"))}
try{w(window,document,s,_?_.version:s)}
catch(e){e.message=e.message?"Loader error. "+e.message:"Loader error",window.__jivoOnError(e),delete window.jivo_magic_var,(w=h)(window,document,s,s)}
}
()}
();