(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"6QH/":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),s=t.n(n),o=t("8Kt/"),l=t.n(o),r=t("PmzM"),i=t("zlC1"),u=t("8fh6"),c=s.a.createElement;var d=s.a.createElement,m=Object(r.a)((function(e){return c(s.a.Fragment,null,c(u.a,e))}));function p(e){return d(s.a.Fragment,null,d(l.a,null,d("title",null,e.title||"Eliah | React")),d(m,{container:e.container}),e.children,d(i.a,null))}},"8fh6":function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var n=t("q1tI"),s=t.n(n),o=t("YFqc"),l=t.n(o),r=t("VOjt"),i=t("brf1"),u=t("kLkQ"),c=t("/MKj"),d=t("HhnA"),m=t("/ANM"),p=(t("X8Wk"),t("uR58")),v=s.a.createElement;function h(e){var a=e.hide,t=e.container,s=Object(n.useContext)(p.a),o=s.lang,h=(s.dispatchLang,Object(c.b)()),_=Object(n.useState)([]),b=(_[0],_[1],Object(n.useState)([])),g=(b[0],b[1]),f=Object(n.useState)([]),w=f[0];f[1];return Object(n.useEffect)((function(){Object(d.a)({url:"".concat(o,"/get-categories"),token:"",action:function(e){var a;e.success?(g(null===e||void 0===e?void 0:null===(a=e.data)||void 0===a?void 0:a.rows),h(Object(m.d)({categories:e.data.rows}))):console.log("error_category ",e)}})}),[o]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("sebet"));null==e?(localStorage.setItem("sebet",JSON.stringify(w)),h(Object(m.e)({sebet:w}))):h(Object(m.e)({sebet:e}))}),[]),v("div",{className:"menu -style-3 navbar1"},v("div",{className:Object(u.d)(t)},v("div",{className:"menu__wrapper"},v(l.a,{href:"/"},v("a",{className:"menu__wrapper__logo d-flex align-items-center text_dec"},v("img",{style:{height:"45px",width:"40px"},src:"/logo_white.svg",alt:"Logo"}),v("h3",{className:"logo_white"},"Sharafyabi"))),v(r.a,{className:"-white"}),v(i.a,{hide:a,white:!0,className:"-white"}))))}},Ncr8:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t("wx14"),s=t("q1tI"),o=t.n(s),l=t("/MKj"),r=t("GE9s"),i=t("YFqc"),u=t.n(i),c=t("nOHt"),d=(t("TSYQ"),t("6QH/"),t("HhnA")),m=t("UGp+"),p=t("KZYA"),v=t("q9EX"),h=t("8+Sn"),_=t("X8Wk"),b=t("uR58"),g=o.a.createElement;function f(){var e,a,t,o,i,f=Object(c.useRouter)(),w=Object(s.useContext)(b.a),N=w.lang,j=(w.dispatchLang,m.a().shape({full_name:m.b().required(_.a[N].required).min(3,_.a[N].name_min).max(50,_.a[N].name_max),phone:m.b().required(_.a[N].phone_required).min(8,_.a[N].phone_min).max(8,_.a[N].phone_max).matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,_.a[N].only_number),password:m.b().min(8,_.a[N].password_min).max(50,_.a[N].password_max).required(_.a[N].required).matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,_.a[N].password_regex)})),O=Object(r.d)({resolver:Object(p.a)(j)}),x=O.register,y=O.handleSubmit,k=O.formState.errors,S=O.setError,q=Object(l.b)();return g("div",{className:"d-flex justify-content-center align-items-center  auth_img",style:{backgroundImage:"url(/fon_auth.svg)",width:"100%",height:"100vh"}},g("div",{className:"auth_div1"},g("form",{onSubmit:y((function(e){console.log(e,"---register"),Object(d.b)({url:"user/ru/registration",data:e,action:function(e){var a,t,n;e.success?(q(Object(v.i)({token:e.data.token,data:e.data.data})),Object(h.b)("refresh_token",e.data.refresh_token),f.push("/")):(console.log("error_register ",e),S("phone",{type:"manual",message:null===e||void 0===e?void 0:null===(a=e.message)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:null===(n=t.error)||void 0===n?void 0:n.phone}))}})})),className:"auth_div2"},g(u.a,{href:"/"},g("img",{src:"/logo_green.png",style:{width:"40px"},className:"auth_img cursor_pointer"})),g(u.a,{href:"/"},g("h3",{className:"logo_green cursor_pointer mt-1"},"Sharafyabi")),g("div",{className:"checkout__form pt-3"},g("div",{className:"checkout__form__shipping"},g("div",{className:"row"},g("div",{className:"col-12"},g("div",{className:"input-validator"},g("label",null,_.a[N].name," ",g("span",null,"*"),g("input",Object(n.a)({type:"text",name:"full_name",placeholder:_.a[N].name},x("full_name"),{className:(null===k||void 0===k?void 0:k.full_name)?"border_input":""}))),(null===k||void 0===k?void 0:k.full_name)&&g("span",{className:"input-error"},null===k||void 0===k?void 0:null===(e=k.full_name)||void 0===e?void 0:e.message)),g("div",{className:"input-validator",style:{position:"relative"}},g("div",{className:(null===k||void 0===k?void 0:null===(a=k.phone)||void 0===a?void 0:null===(t=a.message)||void 0===t?void 0:t.length)>0?"input_993_error":"input_993"},"+993"),g("label",null,_.a[N].phone," ",g("span",null,"*"),g("input",Object(n.a)({type:"text",style:{paddingLeft:"3rem"},name:"phone",placeholder:"_ _  _ _ _ _ _ _",className:(null===k||void 0===k?void 0:k.phone)?"border_input":""},x("phone")))),(null===k||void 0===k?void 0:k.phone)&&g("span",{className:"input-error"},null===k||void 0===k?void 0:null===(o=k.phone)||void 0===o?void 0:o.message)),g("div",{className:"input-validator"},g("label",null,_.a[N].password," ",g("span",null,"*"),g("input",Object(n.a)({type:"password",name:"password",placeholder:_.a[N].password},x("password"),{className:(null===k||void 0===k?void 0:k.password)?"border_input":""}))),(null===k||void 0===k?void 0:k.password)&&g("span",{className:"input-error"},null===k||void 0===k?void 0:null===(i=k.password)||void 0===i?void 0:i.message)),g("div",{className:"w-100 d-flex justify-content-between align-items-center mt-3"},g(u.a,{href:"/auth/login"},g("span",{className:"span1"},_.a[N].have,g("br",null)," ",_.a[N].have_2)),g("button",{type:"submit",className:"btn btn_auth"},_.a[N].register)))))))))}},b2z8:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return t("Ncr8")}])}},[["b2z8",0,2,1,4,3,5,6,7]]]);