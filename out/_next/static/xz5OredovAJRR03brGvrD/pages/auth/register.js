(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"/ANM":function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"d",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"e",(function(){return s}));var a="SET_CATEGORY",r=function(e){return{type:a,payload:e}},o="SET_FILTER_ID",i="SET_SEBET",s=function(e){return{type:i,payload:e}}},"/GRZ":function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},KQm4:function(e,n,t){"use strict";function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,"a",(function(){return r}))},Ncr8:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return b}));var a=t("wx14"),r=t("q1tI"),o=t.n(r),i=t("/MKj"),s=t("GE9s"),u=t("YFqc"),l=t.n(u),d=t("nOHt"),c=t("HhnA"),_=t("UGp+"),p=t("KZYA"),m=t("q9EX"),f=t("8+Sn"),v=t("X8Wk"),h=t("uR58"),E=o.a.createElement;function b(){var e,n,t,o,u,b=Object(d.useRouter)(),T=Object(r.useContext)(h.a),R=T.lang,g=(T.dispatchLang,_.a().shape({full_name:_.b().required(v.a[R].required).min(3,v.a[R].name_min).max(50,v.a[R].name_max),phone:_.b().required(v.a[R].phone_required).min(8,v.a[R].phone_min).max(8,v.a[R].phone_max).matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,v.a[R].only_number),password:_.b().min(8,v.a[R].password_min).max(50,v.a[R].password_max).required(v.a[R].required).matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,v.a[R].password_regex)})),A=Object(s.d)({resolver:Object(p.a)(g)}),y=A.register,N=A.handleSubmit,O=A.formState.errors,w=A.setError,S=Object(i.b)();return E("div",{className:"d-flex justify-content-center align-items-center  auth_img",style:{backgroundImage:"url(/fon_auth.svg)",width:"100%",height:"100vh"}},E("div",{className:"auth_div1"},E("form",{onSubmit:N((function(e){console.log(e,"---register"),Object(c.b)({url:"user/ru/registration",data:e,action:function(e){var n,t,a;e.success?(S(Object(m.i)({token:e.data.token,data:e.data.data})),Object(f.b)("refresh_token",e.data.refresh_token),b.push("/")):(console.log("error_register ",e),w("phone",{type:"manual",message:null===e||void 0===e?void 0:null===(n=e.message)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:null===(a=t.error)||void 0===a?void 0:a.phone}))}})})),className:"auth_div2"},E(l.a,{href:"/"},E("img",{src:"/logo_green.png",style:{width:"40px"},className:"auth_img cursor_pointer"})),E(l.a,{href:"/"},E("h3",{className:"logo_green cursor_pointer mt-1"},"Sharafyabi")),E("div",{className:"checkout__form pt-3"},E("div",{className:"checkout__form__shipping"},E("div",{className:"row"},E("div",{className:"col-12"},E("div",{className:"input-validator"},E("label",null,v.a[R].name," ",E("span",null,"*"),E("input",Object(a.a)({type:"text",name:"full_name",placeholder:v.a[R].name},y("full_name"),{className:(null===O||void 0===O?void 0:O.full_name)?"border_input":""}))),(null===O||void 0===O?void 0:O.full_name)&&E("span",{className:"input-error"},null===O||void 0===O?void 0:null===(e=O.full_name)||void 0===e?void 0:e.message)),E("div",{className:"input-validator",style:{position:"relative"}},E("div",{className:(null===O||void 0===O?void 0:null===(n=O.phone)||void 0===n?void 0:null===(t=n.message)||void 0===t?void 0:t.length)>0?"input_993_error":"input_993"},"+993"),E("label",null,v.a[R].phone," ",E("span",null,"*"),E("input",Object(a.a)({type:"text",style:{paddingLeft:"3rem"},name:"phone",placeholder:"_ _  _ _ _ _ _ _",className:(null===O||void 0===O?void 0:O.phone)?"border_input":""},y("phone")))),(null===O||void 0===O?void 0:O.phone)&&E("span",{className:"input-error"},null===O||void 0===O?void 0:null===(o=O.phone)||void 0===o?void 0:o.message)),E("div",{className:"input-validator"},E("label",null,v.a[R].password," ",E("span",null,"*"),E("input",Object(a.a)({type:"password",name:"password",placeholder:v.a[R].password},y("password"),{className:(null===O||void 0===O?void 0:O.password)?"border_input":""}))),(null===O||void 0===O?void 0:O.password)&&E("span",{className:"input-error"},null===O||void 0===O?void 0:null===(u=O.password)||void 0===u?void 0:u.message)),E("div",{className:"w-100 d-flex justify-content-end mt-n3"},E(l.a,{href:"/auth/forgot"},E("span",{className:"span1"},v.a[R].forgot_password))),E("div",{className:"w-100 d-flex justify-content-between align-items-center mt-3"},E(l.a,{href:"/auth/login"},E("span",{className:"span1"},v.a[R].have,E("br",null)," ",v.a[R].have_2)),E("button",{type:"submit",className:"btn btn_auth"},v.a[R].register)))))))))}},b2z8:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return t("Ncr8")}])},g9Xf:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"b",(function(){return o}));var a={ADD_TO_CART:"ADD_TO_CART",REMOVE_FROM_CART:"REMOVE_FROM_CART",REMOVE_ALL_FROM_CART:"REMOVE_ALL_FROM_CART",DECREASE_QUANTITY_CART:"DECREASE_QUANTITY_CART",INCREASE_QUANTITY_CART:"INCREASE_QUANTITY_CART"},r={ADD_TO_WISHLIST:"ADD_TO_WISHLIST",REMOVE_FROM_WISHLIST:"REMOVE_FROM_WISHLIST"},o={SET_FILTER_CATEGORY:"SET_FILTER_CATEGORY",SET_FILTER_PRICE_RANGE:"SET_FILTER_PRICE_RANGE",SET_FILTER_BRAND:"SET_FILTER_BRAND",RESET_FILTER:"RESET_FILTER"}},i2R6:function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}},wx14:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return a}))},zLVn:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return a}))}},[["b2z8",2,1,0,4,3,5,6,8,9,11]]]);