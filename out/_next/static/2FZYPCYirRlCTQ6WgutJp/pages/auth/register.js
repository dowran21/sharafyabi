(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"6QH/":function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var n=t("q1tI"),l=t.n(n),o=t("8Kt/"),s=t.n(o),i=t("PmzM"),r=t("zlC1"),u=t("8fh6"),c=l.a.createElement;var d=l.a.createElement,m=Object(i.a)((function(e){return c(l.a.Fragment,null,c(u.a,e))}));function v(e){return d(l.a.Fragment,null,d(s.a,null,d("title",null,e.title||"Eliah | React")),d(m,{container:e.container}),e.children,d(r.a,null))}},"8fh6":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),l=t.n(n),o=t("YFqc"),s=t.n(o),i=t("VOjt"),r=t("brf1"),u=t("kLkQ"),c=t("/MKj"),d=t("HhnA"),m=t("/ANM"),v=(t("X8Wk"),t("uR58")),b=l.a.createElement;function p(e){var a=e.hide,t=e.container,l=Object(n.useContext)(v.a),o=l.lang,p=(l.dispatchLang,Object(c.b)()),h=Object(n.useState)([]),g=(h[0],h[1],Object(n.useState)([])),_=(g[0],g[1]),f=Object(n.useState)([]),N=f[0];f[1];return Object(n.useEffect)((function(){Object(d.a)({url:"".concat(o,"/get-categories"),token:"",action:function(e){var a;e.success?(_(null===e||void 0===e?void 0:null===(a=e.data)||void 0===a?void 0:a.rows),p(Object(m.d)({categories:e.data.rows}))):console.log("error_category ",e)}})}),[o]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("sebet"));null==e?(localStorage.setItem("sebet",JSON.stringify(N)),p(Object(m.e)({sebet:N}))):p(Object(m.e)({sebet:e}))}),[]),b("div",{className:"menu -style-3 navbar1"},b("div",{className:Object(u.d)(t)},b("div",{className:"menu__wrapper"},b(s.a,{href:"/"},b("a",{className:"menu__wrapper__logo"},b("img",{style:{height:"45px",width:"140px"},src:"/logo-white.png",alt:"Logo"}))),b(i.a,{className:"-white"}),b(r.a,{hide:a,white:!0,className:"-white"}))))}},Ncr8:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var n=t("wx14"),l=t("q1tI"),o=t.n(l),s=t("/MKj"),i=t("GE9s"),r=t("YFqc"),u=t.n(r),c=t("nOHt"),d=(t("TSYQ"),t("6QH/"),t("HhnA")),m=t("UGp+"),v=t("KZYA"),b=t("q9EX"),p=t("8+Sn"),h=o.a.createElement;function g(){var e,a,t,l,o,r=Object(c.useRouter)(),g=m.a().shape({full_name:m.b().required("Hokman bolmaly").min(3,"Minimum 3 simbol bolmaly").max(50,"Maxsimum 50 simbol bolmaly"),phone:m.b().required("Telefon nomer bolmaly").min(8,"Minimum 8 simbol bolmaly").max(8,"Maxsimum 8 simbol bolmaly").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Dine san bolmaly!"),password:m.b().min(8,"Minimum 8 simbol bolmaly").max(50,"Maxsimum 50 simbol bolmaly").required("Hokman bolmaly").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"In bolmanda 1 harp we 1 san bolmaly")}),_=Object(i.d)({resolver:Object(v.a)(g)}),f=_.register,N=_.handleSubmit,w=_.formState.errors,j=_.setError,y=Object(s.b)();return h("div",{className:"d-flex justify-content-center align-items-center  auth_img",style:{backgroundImage:"url(/fon_auth.svg)",width:"100%",height:"100vh"}},h("div",{className:"auth_div1"},h("form",{onSubmit:N((function(e){console.log(e,"---register"),Object(d.b)({url:"user/ru/registration",data:e,action:function(e){var a,t,n;e.success?(console.log("get_register ",e),y(Object(b.i)({token:e.data.token,data:e.data.data})),Object(p.b)("refresh_token",e.data.refresh_token),r.push("/")):(console.log("error_register ",e),j("phone",{type:"manual",message:null===e||void 0===e?void 0:null===(a=e.message)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:null===(n=t.error)||void 0===n?void 0:n.phone}))}})})),className:"auth_div2"},h(u.a,{href:"/"},h("img",{src:"/logo_auth.png",style:{width:"100px"},className:"auth_img"})),h("div",{className:"checkout__form pt-3"},h("div",{className:"checkout__form__shipping"},h("div",{className:"row"},h("div",{className:"col-12"},h("div",{className:"input-validator"},h("label",null,"Name ",h("span",null,"*"),h("input",Object(n.a)({type:"text",name:"full_name",placeholder:"Name"},f("full_name"),{className:(null===w||void 0===w?void 0:w.full_name)?"border_input":""}))),(null===w||void 0===w?void 0:w.full_name)&&h("span",{className:"input-error"},null===w||void 0===w?void 0:null===(e=w.full_name)||void 0===e?void 0:e.message)),h("div",{className:"input-validator",style:{position:"relative"}},h("div",{className:(null===w||void 0===w?void 0:null===(a=w.phone)||void 0===a?void 0:null===(t=a.message)||void 0===t?void 0:t.length)>0?"input_993_error":"input_993"},"+993"),h("label",null,"Phone ",h("span",null,"*"),h("input",Object(n.a)({type:"text",style:{paddingLeft:"3rem"},name:"phone",placeholder:"_ _  _ _ _ _ _ _",className:(null===w||void 0===w?void 0:w.phone)?"border_input":""},f("phone")))),(null===w||void 0===w?void 0:w.phone)&&h("span",{className:"input-error"},null===w||void 0===w?void 0:null===(l=w.phone)||void 0===l?void 0:l.message)),h("div",{className:"input-validator"},h("label",null,"Password ",h("span",null,"*"),h("input",Object(n.a)({type:"password",name:"password",placeholder:"Passowrd"},f("password"),{className:(null===w||void 0===w?void 0:w.password)?"border_input":""}))),(null===w||void 0===w?void 0:w.password)&&h("span",{className:"input-error"},null===w||void 0===w?void 0:null===(o=w.password)||void 0===o?void 0:o.message)),h("div",{className:"w-100 d-flex justify-content-between align-items-center mt-3"},h(u.a,{href:"/auth/login"},h("span",{className:"span1"},"I have already ",h("br",null)," account")),h("button",{type:"submit",className:"btn btn_auth"},"Register")))))))))}},b2z8:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return t("Ncr8")}])}},[["b2z8",0,2,1,3,4,5,6,7]]]);