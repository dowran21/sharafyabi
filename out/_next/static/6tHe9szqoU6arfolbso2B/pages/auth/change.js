(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"7Dga":function(a,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return m}));var s=o("wx14"),n=o("q1tI"),t=o.n(n),i=o("YFqc"),l=o.n(i),d=o("GE9s"),r=(o("/MKj"),o("TSYQ"),o("6QH/"),o("UGp+")),c=o("KZYA"),u=t.a.createElement;function m(){var a,e,o=r.a().shape({password:r.b().min(8,"Minimum 8 simbol bolmaly").max(50,"Maxsimum 50 simbol bolmaly").required("Hokman bolmaly").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"In bolmanda 1 harp we 1 san bolmaly"),code:r.b().required("Hokman bolmaly")}),n=Object(d.d)({resolver:Object(c.a)(o)}),t=n.register,i=n.handleSubmit,m=n.formState.errors;n.setError;return u("div",{className:"d-flex justify-content-center align-items-center  auth_img",style:{backgroundImage:"url(/fon_auth.svg)",width:"100%",height:"100vh"}},u("div",{className:"auth_div1"},u("form",{onSubmit:i((function(a){console.log(a,"---change")})),className:"auth_div2"},u(l.a,{href:"/"},u("img",{src:"/logo_auth.png",style:{width:"100px"},className:"auth_img"})),u("div",{className:"checkout__form pt-3"},u("div",{className:"checkout__form__shipping"},u("div",{className:"row"},u("div",{className:"col-12"},u("div",{className:"input-validator"},u("label",null,"Sms code ",u("span",null,"*"),u("input",Object(s.a)({type:"code",name:"code",placeholder:"Code"},t("code"),{className:(null===m||void 0===m?void 0:m.code)?"border_input":""}))),(null===m||void 0===m?void 0:m.code)&&u("span",{className:"input-error"},null===m||void 0===m?void 0:null===(a=m.code)||void 0===a?void 0:a.message)),u("div",{className:"input-validator"},u("label",null,"Password ",u("span",null,"*"),u("input",Object(s.a)({type:"password",name:"password",placeholder:"New passowrd"},t("password"),{className:(null===m||void 0===m?void 0:m.password)?"border_input":""}))),(null===m||void 0===m?void 0:m.password)&&u("span",{className:"input-error"},null===m||void 0===m?void 0:null===(e=m.password)||void 0===e?void 0:e.message)),u("div",{className:"w-100 d-flex justify-content-center align-items-center mt-3"},u("button",{type:"submit",className:"btn btn_auth"},"Change")))))))))}},KFsh:function(a,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/change",function(){return o("7Dga")}])},yLpj:function(a,e){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(s){"object"===typeof window&&(o=window)}a.exports=o}},[["KFsh",0,2,1,3,4,6,5,7,8,9,14]]]);