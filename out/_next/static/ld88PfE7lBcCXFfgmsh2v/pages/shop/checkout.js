(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{Lxou:function(e,t,a){"use strict";a.r(t);var o=a("wx14"),n=a("rePB"),l=a("q1tI"),i=a.n(l),s=(a("YFqc"),a("/MKj")),c=a("GE9s"),r=a("nOHt"),u=a("FGyW"),d=a("6QH/"),m=a("m9Y6"),p=(a("Npp4"),a("kLkQ"),a("TVAx"),a("HhnA")),b=a("baJl"),v=a("/ANM"),h=a("UGp+"),_=a("KZYA"),f=a("x2Pk"),g=a("X8Wk"),y=a("uR58"),N=i.a.createElement;function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(){var e,t,a,n=Object(l.useContext)(y.a),O=n.lang,w=(n.dispatchLang,h.a().shape({phone:h.b().required("Telefon nomer bolmaly").min(8,"Minimum 8 simbol bolmaly").max(8,"Maxsimum 8 simbol bolmaly").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Dine san bolmaly!"),name:h.b().required("Hokman bolmaly").min(3,"Minimum 3 simbol bolmaly").max(50,"Maxsimum 50 simbol bolmaly")})),j=Object(c.d)({resolver:Object(_.a)(w)}),x=j.register,S=j.handleSubmit,T=j.formState.errors,P=(j.setError,Object(l.useState)()),E=P[0],M=P[1],q=Object(s.b)(),D=Object(s.c)(b.b),A=Object(s.c)(b.d),C=Object(r.useRouter)();function I(e){var t=0;return null===e||void 0===e||e.forEach((function(e){return t+=e.price*e.count})),t}console.log(D,"----sebetRedux");return N(d.a,{title:"Sharafyabi | Checkout"},N(m.a,{title:g.a[O].checkout_title},N(m.b,{name:g.a[O].home}),N(m.b,{name:g.a[O].shop}),N(m.b,{name:g.a[O].checkout_title,current:!0})),N("div",{className:"checkout"},N("div",{className:"container"},N("div",{className:"row"},N("div",{className:"col-12  col-lg-8"},N("form",null,N("div",{className:"checkout__form"},N("div",{className:"checkout__form__shipping"},N("h5",{className:"checkout-title"},g.a[O].shipping_address),N("div",{className:"row"},N("div",{className:"col-12"},N("div",{className:"input-validator"},N("label",null,"Name ",N("span",null,"*"),N("input",Object(o.a)({type:"text",name:"name",placeholder:"Name",className:(null===T||void 0===T?void 0:T.name)?"border_input":""},x("name")))),(null===T||void 0===T?void 0:T.name)&&N("span",{className:"input-error"},null===T||void 0===T?void 0:null===(e=T.name)||void 0===e?void 0:e.message))),N("div",{className:"col-12"},N("div",{className:"input-validator",style:{position:"relative"}},N("div",{className:(null===T||void 0===T?void 0:null===(t=T.phone)||void 0===t?void 0:t.message.length)>0?"input_993_error ml-2":"input_993 ml-2"},"+993"),N("label",null,"Phone ",N("span",null,"*"),N("input",Object(o.a)({type:"text",name:"phone"},x("phone"),{style:{paddingLeft:"3.5rem"},className:(null===T||void 0===T?void 0:T.phone)?"border_input":"",placeholder:"_ _   _ _ _ _ _ _"}))),(null===T||void 0===T?void 0:T.phone)&&N("span",{className:"input-error"},null===T||void 0===T?void 0:null===(a=T.phone)||void 0===a?void 0:a.message))),N("div",{className:"col-12"},N("div",{className:"input-validator"},N("label",null,"Address ",N("span",null),N("input",Object(o.a)({type:"text",name:"address"},x("address"),{placeholder:"Steet address"})))))))))),N("div",{className:"col-12 col-lg-4"},N("div",{className:"row"},N("div",{className:"col-12 col-md-6 col-lg-12 ml-auto"},N("div",{className:"checkout__total"},N("h5",{className:"checkout-title"},g.a[O].your_order),N("form",{className:"checkout__total__coupon"},N("h5",null,g.a[O].coupon_code),N("div",{className:"input-validator"},N("input",Object(o.a)({type:"text",placeholder:g.a[O].coupon_here,name:"coupon"},x("coupon"))),T.coupon&&N("span",{className:"input-error"},"Please provide your Coupon Code"))),N("div",{className:"checkout__total__price"},N("div",{className:"checkout__total__price__total-count"},N("table",null,N("tbody",null,N("tr",null,N("td",null,g.a[O].subTotal),N("td",null,I(D)," TMT")),N("tr",null,N("td",null,g.a[O].sum),N("td",null,I(D)," TMT")))))),N("button",{className:"btn -red",onClick:S((function(e){M(!0),e=k(k({},e),{},{user_id:null===A||void 0===A?void 0:A.id,products:D}),console.log(e,"---checkout"),Object(p.b)({url:"".concat(O,"/create-order"),data:e,action:function(e){e.success?(console.log("get_order ",e),localStorage.setItem("sebet",JSON.stringify([])),q(Object(v.e)({sebet:[]})),u.b.success("Zakazynyz kabul edildi!"),C.push("/"),M(!1)):(console.log("error_order ",e),u.b.error("Zakazynyz kabul edilmedi!"),M(!1))}})}))},E?N(f.a,{type:"button"}):N(i.a.Fragment,null,g.a[O].place_order))))))))))}},Npp4:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var o=a("q1tI"),n=a.n(o),l=a("HhnA"),i=a("OS56"),s=a.n(i),c=a("YFqc"),r=a.n(c),u=n.a.createElement;function d(){var e=Object(o.useState)([]),t=e[0],a=e[1];Object(o.useEffect)((function(){Object(l.a)({url:"tm/get-producers",token:"",action:function(e){var t;e.success&&a(null===e||void 0===e?void 0:null===(t=e.data)||void 0===t?void 0:t.rows)}})}),[]);return u("div",{className:"instagram-two"},u(s.a,{dots:!1,arrows:!1,slidesToShow:6,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1800,settings:{slidesToShow:5}},{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}}]},null===t||void 0===t?void 0:t.map((function(e){return u(r.a,{href:"/shop/products?search=&page=1&limit=20&category_id=&producer_id=[".concat(null===e||void 0===e?void 0:e.id,"]&min_price=&max_price=&recomended=&new_in_come=&sort_column=&sort_direction=")},u("a",{key:e.id,className:"slider-item",style:{width:"100%",height:"220px",display:"flex",justifyContent:"center",alignItems:"center"}},null!=(null===e||void 0===e?void 0:e.destination)?u("img",{src:"https://sharafyabi.com/".concat(null===e||void 0===e?void 0:e.destination,"-mini.webp"),alt:"image",style:{width:"70%",height:"150px"}}):u("img",{src:"/assets/images/instagram/InstagramTwo/1.png",alt:"image"})))}))))}},Z1mD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/checkout",function(){return a("Lxou")}])},m9Y6:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i}));var o=a("q1tI"),n=a.n(o).a.createElement,l=function(e){var t=e.name,a=e.current;return n("li",{className:a&&"active"},t)},i=function(e){var t=e.title,a=e.children;return n("div",{className:"breadcrumb"},n("div",{className:"container"},n("h2",null,t),n("ul",null,a)))}}},[["Z1mD",0,2,1,3,4,5,6,7,8,9,10,12,14]]]);