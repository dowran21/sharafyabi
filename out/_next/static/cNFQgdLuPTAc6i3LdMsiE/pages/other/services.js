(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"/j0s":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var i=t("q1tI"),s=t.n(i),n=t("TSYQ"),r=t.n(n),c=s.a.createElement;function o(e){var a=e.subTitle,t=e.className,i=e.description,s=e.align,n=e.spaceBottom,o=e.showSubTitle,l=e.children,u=e.hideDecoration,m=e.titleSize;return c("div",{className:"section-title -style1 ".concat(r()(t)),style:{textAlign:s,marginBottom:n||"3.125rem"}},o&&c("h5",null,a),c("h2",{style:{fontSize:m}},l),i&&c("p",null,i),!u&&c("img",{src:"/assets/images/introduction/IntroductionOne/content-deco.png",alt:"decoration"}))}},"6QH/":function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var i=t("q1tI"),s=t.n(i),n=t("8Kt/"),r=t.n(n),c=t("PmzM"),o=t("zlC1"),l=t("8fh6"),u=s.a.createElement;var m=s.a.createElement,d=Object(c.a)((function(e){return u(s.a.Fragment,null,u(l.a,e))}));function g(e){return m(s.a.Fragment,null,m(r.a,null,m("title",null,e.title||"Eliah | React")),m(d,{container:e.container}),e.children,m(o.a,null))}},"8fh6":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var i=t("q1tI"),s=t.n(i),n=t("YFqc"),r=t.n(n),c=t("VOjt"),o=t("brf1"),l=t("kLkQ"),u=t("/MKj"),m=t("HhnA"),d=t("/ANM"),g=(t("X8Wk"),t("uR58")),v=s.a.createElement;function p(e){var a=e.hide,t=e.container,s=Object(i.useContext)(g.a),n=s.lang,p=(s.dispatchLang,Object(u.b)()),f=Object(i.useState)([]),_=(f[0],f[1],Object(i.useState)([])),b=(_[0],_[1]),h=Object(i.useState)([]),N=h[0];h[1];return Object(i.useEffect)((function(){Object(m.a)({url:"".concat(n,"/get-categories"),token:"",action:function(e){var a;e.success?(b(null===e||void 0===e?void 0:null===(a=e.data)||void 0===a?void 0:a.rows),p(Object(d.d)({categories:e.data.rows}))):console.log("error_category ",e)}})}),[n]),Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("sebet"));null==e?(localStorage.setItem("sebet",JSON.stringify(N)),p(Object(d.e)({sebet:N}))):p(Object(d.e)({sebet:e}))}),[]),v("div",{className:"menu -style-3 navbar1"},v("div",{className:Object(l.d)(t)},v("div",{className:"menu__wrapper"},v(r.a,{href:"/"},v("a",{className:"menu__wrapper__logo d-flex align-items-center text_dec"},v("img",{style:{height:"45px",width:"40px"},src:"/logo_white.svg",alt:"Logo"}),v("h3",{className:"logo_white"},"Sharafyabi"))),v(c.a,{className:"-white"}),v(o.a,{hide:a,white:!0,className:"-white"}))))}},IQn2:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var i=t("q1tI"),s=t.n(i),n=t("GE9s"),r=t("/j0s"),c=s.a.createElement;function o(){var e=Object(n.d)({mode:"onChange"}),a=e.register,t=e.handleSubmit,i=(e.watch,e.errors);return c("div",{className:"cta -style-1",style:{backgroundImage:'url("/assets/images/cta/CTAOne/1.png")'}},c("div",{className:"container"},c("div",{className:"row"},c("div",{className:"col-12 col-md-6 mx-auto"},c("div",{className:"cta__form"},c(r.a,{align:"center",spaceBottom:"1.875em"},"Book Service"),c("form",{onSubmit:t((function(e){console.log(e)})),className:"cta__form__detail"},c("div",{className:"input-validator"},c("input",{type:"text",placeholder:"Your name",name:"name",ref:a({required:!0})}),i.name&&c("span",{className:"input-error"},"Please provide a valid name")),c("div",{className:"input-validator"},c("input",{type:"text",placeholder:"Your phone",name:"phone",ref:a({required:!0})}),i.phone&&c("span",{className:"input-error"},"Please provide a valid phone number")),c("div",{className:"input-validator"},c("select",{name:"service",ref:a({required:!0}),className:"customed-select",defaultValue:""},c("option",{value:"",hidden:!0},"Choose a services"),["Spa","Salon","Nail"].map((function(e,a){return c("option",{key:a,value:e},e)}))),i.service&&c("span",{className:"input-error"},"Please choose a service")),c("div",{className:"input-validator"},c("select",{name:"date",ref:a({required:!0}),className:"customed-select",defaultValue:""},c("option",{value:"",hidden:!0},"Choose a services"),["Yesterday","Today","Tomorow"].map((function(e,a){return c("option",{key:a,value:e},e)}))),i.date&&c("span",{className:"input-error"},"Please choose a date")),c("button",{className:"btn -light-red"},"Appoitment")))))))}},Rxw4:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var i=t("q1tI"),s=t.n(i),n=t("6QH/"),r=t("m9Y6"),c=t("IQn2"),o=t("patp"),l=t.n(o),u=t("6EID"),m=t("TSYQ"),d=t.n(m),g=s.a.createElement;function v(e){var a=e.bigImgSrc,t=e.smallImgSrc,n=(e.description,e.order),r=e.reverse,c=Object(i.useRef)(null),o=Object(i.useRef)(null);Object(i.useEffect)((function(){var e=new l.a(c.current),a=new l.a(o.current);return function(){e.disable(),a.disable()}}),[]);var m=function(e){return r?g(s.a.Fragment,null,e," ",g("i",{className:"fas fa-check",style:{marginLeft:5/15+"em"}})):g(s.a.Fragment,null,g("i",{className:"fas fa-check",style:{marginRight:5/15+"em"}})," ",e)};return g("div",{className:"services__item ".concat(d()({"-reverse":r}))},g("div",{className:"container"},g("div",{className:"row"},g("div",{className:"col-12 col-md-6 ".concat(d()({"order-md-2":r}))},g("div",{className:"services__item__image"},g("div",{className:"services__item__image__background"},g("img",{src:"/assets/images/introduction/IntroductionThree/bg.png",alt:"background"})),g("div",{className:"services__item__image__detail"},g("div",{className:"image__item"},g("div",{ref:c,className:"wrapper"},g("img",{"data-depth":"0.3",src:a,alt:"image"}))),g("div",{className:"image__item"},g("div",{ref:o,className:"wrapper"},g("img",{"data-depth":"0.2","data-invert-x":!0,"data-invert-y":!0,src:t,alt:"image"})))))),g("div",{className:"col-12 col-md-6 ".concat(d()({"order-md-1":r}))},g("div",{className:"services__item__content"},g("div",{className:"services__item__order"},r?g("h3",null,".",n):g("h3",null,n,".")),g("h2",{className:"services__item__title"},"Body treatment"),g("p",{className:"services__item__description"},"Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis pendisse ultrices gravida. Risus commodo viverra lacus vel facilisis."),g("ul",null,g("li",null,m("Lorem ipsum dolor sit amet, consectetur.")),g("li",null,m("Adipiscing elit, sed do eiusmod tempor.")),g("li",null,m("Incididunt ut labore et dolore magna aliqua.")),g("li",null,m("Quis ipsum suspendisse ultrices gravida."))),g(u.a,{color:"white",action:"#",content:"Read more"}))))))}var p=t("kLkQ"),f=t("pi35"),_=s.a.createElement;function b(){return _(n.a,{title:"Services"},_(r.a,{title:"Services"},_(r.b,{name:"Home"}),_(r.b,{name:"Services",current:!0})),f&&f.map((function(e,a){return _(v,{key:a,bigImgSrc:""+e.bigImgSrc,smallImgSrc:""+e.smallImgSrc,title:e.title,order:Object(p.c)(a+1),reverse:a%2===1})})),_(c.a,null))}},m9Y6:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return r}));var i=t("q1tI"),s=t.n(i).a.createElement,n=function(e){var a=e.name,t=e.current;return s("li",{className:t&&"active"},a)},r=function(e){var a=e.title,t=e.children;return s("div",{className:"breadcrumb"},s("div",{className:"container"},s("h2",null,a),s("ul",null,t)))}},"n+zJ":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/other/services",function(){return t("Rxw4")}])},pi35:function(e){e.exports=JSON.parse('[{"title":"Body treatment","description":"Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis pendisse ultrices gravida. Risus commodo viverra lacus vel facilisis.","bigImgSrc":"/assets/images/contact/1_1.png","smallImgSrc":"/assets/images/contact/1.png"},{"title":"Professinal makeup","description":"Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis pendisse ultrices gravida. Risus commodo viverra lacus vel facilisis.","bigImgSrc":"/assets/images/contact/2_1.png","smallImgSrc":"/assets/images/contact/2.png"},{"title":"Maincure & pedicure","description":"Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis pendisse ultrices gravida. Risus commodo viverra lacus vel facilisis.","bigImgSrc":"/assets/images/contact/3_1.png","smallImgSrc":"/assets/images/contact/3.png"},{"title":"Hair cut & Coloring","description":"Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis pendisse ultrices gravida. Risus commodo viverra lacus vel facilisis.","bigImgSrc":"/assets/images/contact/4_1.png","smallImgSrc":"/assets/images/contact/4.png"}]')}},[["n+zJ",0,2,1,4,3,5,6,7,14]]]);