(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0jMz":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ic_send_outline=void 0;a.ic_send_outline={viewBox:"0 0 24 24",children:[{name:"path",attribs:{d:"M0 0h24v24H0V0z",fill:"none"},children:[]},{name:"path",attribs:{d:"M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z"},children:[]}]}},"6QH/":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return le}));var n=t("q1tI"),i=t.n(n),r=t("8Kt/"),o=t.n(r),c=i.a.createElement,s=t("wx14"),l=t("YFqc"),u=t.n(l),d=t("FGyW"),m=t("/MKj"),p=t("baJl"),h=t("uR58"),_=t("X8Wk"),v=t("UGp+"),f=t("KZYA"),g=t("GE9s"),b=t("HhnA"),N=t("6jqW"),w=t.n(N),y=t("0jMz"),O=i.a.createElement;function x(){var e,a,t,i,r=Object(m.c)(p.a),o=Object(n.useContext)(h.a),c=o.lang,l=(o.dispatchLang,Object(n.useState)()),N=l[0],x=l[1],j=(Object(m.b)(),v.a().shape({})),k=Object(g.d)({resolver:Object(f.a)(j)}),C=k.register,E=k.handleSubmit,S=k.formState.errors,L=k.setValue,z=k.setError;return Object(n.useEffect)((function(){Object(b.a)({url:"".concat(c,"/get-shop-data"),token:"",action:function(e){var a;e.success?x(null===e||void 0===e?void 0:null===(a=e.data)||void 0===a?void 0:a.rows):console.log("error_moreadata ",e)}})}),[c]),O("div",{className:"footer-one"},O("div",{className:"container"},O("div",{className:"footer-one__header footerH1"},O("div",{className:"footer-one__header__logo"},O(u.a,{href:"/"},O("div",{className:"d-flex align-items-center"},O("a",null,O("img",{style:{width:"40px"},src:"/logo_green.png",alt:"Logo"})),O("h3",{className:"logo_green ml-2 cursor_pointer"},"Sharafyabi")))),O("div",{className:"d-flex flex-column justify-content-center align-items-center"},O("h4",{className:"mb-2"},_.a[c].be_aware),O("p",{className:"text-center",style:{lineHeight:"1.4rem"}}," ",_.a[c].subscribe," ",O("br",null)," ",_.a[c].subscribe_2," ")),O("div",{className:"mt-3 footerH2 "},O("div",{className:"checkout__form"},O("form",{className:"col-12 d-flex"},O("div",{className:"input-validator w_full",style:{position:"relative"}},O("div",{style:{paddingLeft:"1rem"},className:(null===S||void 0===S?void 0:null===(e=S.phone)||void 0===e?void 0:null===(a=e.message)||void 0===a?void 0:a.length)>0?"input_993_error":"input_993"},"+993"),O("label",null,_.a[c].phone," ",O("span",null,"*"),O("input",Object(s.a)({type:"text",style:{paddingLeft:"3.4rem"},className:(null===S||void 0===S?void 0:S.phone)?"border_input":"",name:"phone",placeholder:"_ _  _ _ _ _ _ _"},C("phone")))),(null===S||void 0===S?void 0:S.phone)&&O("span",{className:"input-error"},null===S||void 0===S?void 0:null===(t=S.phone)||void 0===t?void 0:t.message)),O("button",{className:"input-validator btn_subsription",onClick:E((function(e){Object(b.b)({url:"".concat(c,"/add-to-subscription"),data:e,action:function(e){var a,t,n;e.success?(d.b.success(_.a[c].subscribe_footer),L("phone","")):z("phone",{type:"manual",message:null===e||void 0===e?void 0:null===(a=e.message)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:null===(n=t.error)||void 0===n?void 0:n.phone})}})}))},O(w.a,{icon:y.ic_send_outline,size:18,className:"white1"}))),O("form",{className:"col-12 d-flex"},O("div",{className:"input-validator w_full",style:{position:"relative"}},O("label",null,_.a[c].email," ",O("span",null,"*"),O("input",Object(s.a)({type:"text",className:(null===S||void 0===S?void 0:S.email)?"border_input":"",name:"email",placeholder:_.a[c].email},C("email")))),(null===S||void 0===S?void 0:S.email)&&O("span",{className:"input-error"},null===S||void 0===S?void 0:null===(i=S.email)||void 0===i?void 0:i.message)),O("button",{className:"input-validator btn_subsription",onClick:E((function(e){Object(b.b)({url:"".concat(c,"/add-email-subscription"),data:e,action:function(e){var a,t,n;e.success?(d.b.success(_.a[c].subscribe_footer),L("email","")):z("email",{type:"manual",message:null===e||void 0===e?void 0:null===(a=e.message)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:null===(n=t.error)||void 0===n?void 0:n.email})}})}))},O(w.a,{icon:y.ic_send_outline,size:18,className:"white1"})))))),O("div",{className:"footer-one__body"},O("div",{className:"row"},O("div",{className:"col-12 col-md-6 col-lg-5"},O("div",{className:"footer__section -info"},O("h5",{className:"footer-title"},_.a[c].contact_info),O("p",null,_.a[c].address," ",O("span",null,null===N||void 0===N?void 0:N.address)),O("p",null,_.a[c].phone_3,"  ",O("a",{className:"text_dec",href:"tel:+99363143111"},"+993 ",null===N||void 0===N?void 0:N.phone2)),O("p",null,"Email: ",O("a",{className:"text_dec",href:"mailto:order@sharafyabi.com"},null===N||void 0===N?void 0:N.email)),O("p",null,_.a[c].open_time," ",O("span",null,_.a[c].week_1_6)," ",O("br",null),O("span",null,"9:00-18:00")))),O("div",{className:"col-12 col-md-6 col-lg-5 "},O("div",{className:"footer__section -links"},O("div",{className:"row bg-dark"},O("div",{className:"col-12 col-sm-6"},O("h5",{className:"footer-title"},_.a[c].categories),O("ul",null,null===r||void 0===r?void 0:r.slice(0,6).map((function(e){return O("li",{key:null===e||void 0===e?void 0:e.id,className:"line2"},O(u.a,{href:"/shop/products?search=&page=1&limit=20&main_category_id=".concat(e.id,"&category_id=&producer_id=&min_price=&max_price=&recomended=&new_in_come=&discounts=&sort_column=&sort_direction=")},O("a",{className:"line1"},null===e||void 0===e?void 0:e.name)))})))),(null===r||void 0===r?void 0:r.length)>5?O("div",{className:"col-12 col-sm-6 mt-3 margin_footer"},O("h5",{className:"footer-title"}),O("ul",null,null===r||void 0===r?void 0:r.slice(6,11).map((function(e){return O("li",{key:null===e||void 0===e?void 0:e.id,className:"line2"},O(u.a,{href:"/shop/products?search=&page=1&limit=20&main_category_id=".concat(e.id,"&category_id=&producer_id=&min_price=&max_price=&recomended=&new_in_come=&discounts=&sort_column=&sort_direction=")},O("a",{className:"line1"},null===e||void 0===e?void 0:e.name)))})))):null))),O("div",{className:"col-12 col-lg-2"},O("div",{className:"footer__section -links"},O("h5",{className:"footer-title"},_.a[c].links),O("ul",null,O("li",null,O(u.a,{href:"/"},O("a",null,_.a[c].home))),O("li",null,O(u.a,{href:"/shop/products?search=&page=1&limit=20&main_category_id=&category_id=&producer_id=&min_price=&max_price=&recomended=&new_in_come=&discounts=&sort_column=&sort_direction="},O("a",null,_.a[c].shop))),O("li",null,O(u.a,{href:"/other/brand"},O("a",null,_.a[c].brand))),O("li",null,O(u.a,{href:"/other/contact"},O("a",null,_.a[c].contact))),O("li",null,O(u.a,{href:"/other/about"},O("a",null,_.a[c].company))))))))),O("div",{className:"footer-one__footer"},O("div",{className:"container"},O("div",{className:"footer-one__footer__wrapper"},O("p",null,"\xa9 ",_.a[c].copyright," 2022"),O("ul",{className:"d-flex "},O("p",{className:"pr-2"},"Powered by "),O("li",null,O("a",{href:"https://takyk.com"},'"Bilermen nesil"')))))))}var j=t("TSYQ"),k=t.n(j),C=t("WFYs"),E=t("T8nL"),S=i.a.createElement;function L(e){e.disableSubmenu;var a=e.className,t=Object(m.c)(p.a),r=Object(n.useContext)(h.a),o=r.lang;r.dispatchLang;return S("div",{className:"navigator ".concat(k()(a))},S("ul",null,S(i.a.Fragment,null,S("li",null,S(u.a,{href:"/"},S("a",null,_.a[o].home))),S("li",{className:"relative"},S("a",null,_.a[o].categories,S("span",{className:"dropable-icon"},S(w.a,{icon:C.ic_keyboard_arrow_down,size:17,className:"white1"}))),S("ul",{className:"width1 dropdown-menu p-2 main_categ"},t.map((function(e){var a,t;return S("li",{key:null===e||void 0===e?void 0:e.id,className:"main_category line2"},S(u.a,{href:"/shop/products?search=&page=1&limit=20&main_category_id=".concat(e.id,"&category_id=&producer_id=&min_price=&max_price=&recomended=&new_in_come=&discounts=&sort_column=&sort_direction=")},S("div",{className:"d-flex align-items-center"},S(w.a,{icon:E.ic_keyboard_arrow_right,size:18,className:"black1"}),S("a",{className:"line1"},null===e||void 0===e?void 0:e.name))),(null===e||void 0===e?void 0:null===(a=e.sub)||void 0===a?void 0:a.length)>0?S("ul",{className:"dropdown-menu p-2 sub_category"},null===e||void 0===e?void 0:null===(t=e.sub)||void 0===t?void 0:t.map((function(a){return S("li",{key:null===a||void 0===a?void 0:a.id,className:"line2"},S(u.a,{href:"/shop/products?search=&page=1&limit=20&main_category_id=".concat(e.id,"&category_id=").concat(null===a||void 0===a?void 0:a.id,"&producer_id=&min_price=&max_price=&recomended=&new_in_come=&discounts=&sort_column=&sort_direction=")},S("div",{className:"d-flex align-items-center"},S(w.a,{icon:E.ic_keyboard_arrow_right,size:18,className:"black1"}),S("a",{className:"line1"},null===a||void 0===a?void 0:a.name))))}))):null)})))),S("li",null,S(u.a,{href:"/shop/products?search=&page=1&limit=20&main_category_id=&category_id=&producer_id=&min_price=&max_price=&recomended=&new_in_come=&discounts=&sort_column=&sort_direction="},S("a",null,_.a[o].shop))),S("li",null,S(u.a,{href:"/other/brand"},S("a",null,_.a[o].brand))),S("li",null,S(u.a,{href:"/other/contact"},S("a",null,_.a[o].contact))))))}var z=t("nOHt"),M=t("pQ8y");var H=i.a.createElement;function R(e){var a,t,i=e.showSearch,r=e.setShowSearch,o=Object(n.useContext)(h.a),c=o.lang,l=(o.dispatchLang,Object(g.d)({})),u=l.register,d=l.handleSubmit,m=(l.formState.errors,l.setError,Object(z.useRouter)()),p=Object(n.useRef)(null);return a=p,t=function(){r(!1)},Object(n.useEffect)((function(){function e(e){a.current&&!a.current.contains(e.target)&&t()}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[a]),H(M.a,{in:i,unmountOnExit:!0,timeout:200,classNames:"search-box"},H("div",{ref:p,className:"search-box"},H("form",{onSubmit:d((function(e){(null===e||void 0===e?void 0:e.search)&&m.push("/shop/products?search=".concat(null===e||void 0===e?void 0:e.search,"&page=1&limit=20&main_category_id=&category_id=&producer_id=&min_price=&max_price=&recomended=&new_in_come=&discounts=&sort_column=&sort_direction="))}))},H("input",Object(s.a)({type:"text",placeholder:"".concat(_.a[c].looking_for),name:"search"},u("search"))),H("button",null,H("img",{src:"/assets/images/header/search-icon.png",alt:"Search icon"})))))}var A=t("kLkQ"),F=t("wQtD"),P=i.a.createElement;var D=function(e){var a=Object(m.b)(),t=e.image,n=e.name,i=e.price,r=e.quantity,o=e.cartId,c=e.slug;return P("div",{className:"cart-item"},P("div",{className:"cart-item__image"},P("img",{src:""+t,alt:"Product image"})),P("div",{className:"cart-item__info"},P(u.a,{href:"/shop/product/[slug]",as:"/shop/product/"+c},P("a",null,n)),P("h5",null,Object(A.a)(i)),P("p",null,"Quantity: ",P("span",null,r))),P("a",{className:"cart-item__remove",href:"#",onClick:function(e){e.preventDefault(),a(Object(F.b)(o)),d.b.error("Product removed from card")}},P("i",{className:"fal fa-times"})))},T=t("A2gu"),I=t("6EID"),V=t("TVAx"),q=i.a.createElement;var Q=function(e){var a=e.showCart,t=e.setShowCart,n=Object(m.c)((function(e){return e.cartReducer}));return q(i.a.Fragment,null,q(T.a,{selector:"#cart-sidebar"},q(M.a,{in:a,unmountOnExit:!0,timeout:200,classNames:"cart-sidebar"},q("div",{className:"cart-items__wrapper"},q("h2",null,"Shopping cart"),0===n.length?q("h3",{className:"empty-noti"},"No product in cart"):q(i.a.Fragment,null,0!==n.length&&n.map((function(e){return q(D,{key:e.cartId,name:e.name,price:e.price,quantity:e.cartQuantity,cartId:e.cartId,slug:e.slug})})),q("div",{className:"cart-items__total"},q("div",{className:"cart-items__total__price"},q("h5",null,"Total"),q("span",null,Object(V.a)(n,!0))),q("div",{className:"cart-items__total__buttons"},q(I.a,{width:"100%",action:"/shop/cart",color:"dark",content:"View cart"}),q(I.a,{width:"100%",action:"/shop/checkout",color:"red",content:"Checkout"}))))))),a&&q(T.a,{selector:"#overlay"},q("div",{className:"overlay",onClick:function(){return t(!1)}})))},B=t("DrLS"),G=i.a.createElement;function J(){var e=Object(n.useContext)(h.a),a=e.lang,t=(e.dispatchLang,Object(m.c)(p.a)),r=Object(n.useState)(),o=r[0],c=r[1];return G("div",{className:"navigator-mobile"},G("ul",null,G(i.a.Fragment,null,G("li",null,G(u.a,{href:"/"},G("a",{className:"text_sm"},_.a[a].home))),G("li",{className:"relative text_sm"},G("a",{onClick:function(){c("home"!==o?"home":"")}},_.a[a].categories,G("span",{className:"dropable-icon"},G(w.a,"home"===o?{icon:B.ic_keyboard_arrow_up,size:19,className:"ml-2 black1"}:{icon:C.ic_keyboard_arrow_down,size:19,className:"ml-2 black1"}))),G(M.a,{in:"home"===o,unmountOnExit:!0,timeout:200,classNames:"dropdown-menu-mobile"},G("ul",{className:"dropdown-menu"},t.map((function(e){return G("li",{key:null===e||void 0===e?void 0:e.id},G(u.a,{href:"/shop/products?search=&page=1&limit=20&main_category_id=".concat(e.id,"&category_id=&producer_id=&min_price=&max_price=&recomended=&new_in_come=&discounts=&sort_column=&sort_direction=")},G("a",null,null===e||void 0===e?void 0:e.name)))}))))),G("li",null,G(u.a,{href:"/shop/products?search=&page=1&limit=20&main_category_id=&category_id=&producer_id=&min_price=&max_price=&recomended=&new_in_come=&discounts=&sort_column=&sort_direction="},G("a",{className:"text_sm"},_.a[a].shop))),G("li",null,G(u.a,{href:"/other/brand"},G("a",{className:"text_sm"},_.a[a].brand))),G("li",null,G(u.a,{href:"/other/contact"},G("a",{className:"text_sm"},_.a[a].contact))),G("li",null,G(u.a,{href:"/other/about"},G("a",{className:"text_sm"},_.a[a].company))))))}var K=t("cxSR"),U=t("Otqc"),W=t("OfHd"),Y=t("q9EX"),$=t("8+Sn"),X=i.a.createElement;function Z(e){var a,t=e.showMobileNav,r=e.setShowMobileNav,o=e.user,c=Object(g.d)({}),l=c.register,d=c.handleSubmit,p=(c.formState.errors,c.setError,Object(n.useContext)(h.a)),v=p.lang,f=p.dispatchLang,b=Object(m.b)(),N=Object(z.useRouter)();var y=Object(n.useState)(),O=y[0],x=y[1];return X(i.a.Fragment,null,X(T.a,{selector:"#nav-sidebar"},X(M.a,{in:t,unmountOnExit:!0,timeout:200,classNames:"cart-sidebar"},X("div",{className:"navigation-sidebar"},X("div",{className:"search-box"},X("form",{onSubmit:d((function(e){(null===e||void 0===e?void 0:e.search)&&N.push("/shop/products?search=".concat(null===e||void 0===e?void 0:e.search,"&page=1&limit=20&main_category_id=&category_id=&producer_id=&min_price=&max_price=&recomended=&new_in_come=&discounts=&sort_column=&sort_direction="))}))},X("input",Object(s.a)({type:"text",placeholder:"".concat(_.a[v].looking_for)},l("search"))),X("button",null,X("img",{src:"/assets/images/header/search-icon.png",alt:"Search icon"})))),X(J,null),X("div",{className:"navigation-sidebar__footer"},X("select",{className:"-borderless uppercase1",name:"lang",onChange:function(e){f({type:e.target.value})}},X("option",null,"Ru"),X("option",null,"En"),X("option",null,"Tm")),(null===o||void 0===o?void 0:null===(a=o.id)||void 0===a?void 0:a.length)>0?X("div",{className:"navigator-mobile"},X("ul",null,X("li",{className:"relative"},X(u.a,{href:""},X("a",{onClick:function(){x("home"!==O?"home":"")}},_.a[v].account,X("span",{className:"dropable-icon"},X(w.a,"home"===O?{icon:B.ic_keyboard_arrow_up,size:19,className:"ml-2 black1"}:{icon:C.ic_keyboard_arrow_down,size:19,className:"ml-2 black1"})))),X(M.a,{in:"home"===O,unmountOnExit:!0,timeout:200,classNames:"dropdown-menu-mobile"},X("ul",{className:"dropdown-menu"},X("li",null,X(u.a,{href:"/shop/orders"},X("a",{className:"d-flex align-items-center"},X(w.a,{icon:W.shopping_cart_ok,size:19,className:"mr-2 black1"}),_.a[v].account_orders)),X(u.a,{href:"/shop/informations"},X("a",{className:"d-flex align-items-center"},X(w.a,{icon:K.user_circle,size:19,className:"mr-2 black1"}),_.a[v].account_informations)),X("div",{onClick:function(){Object($.a)("refresh_token"),b(Object(Y.j)({}))}},X("a",{className:"d-flex align-items-center"},X(w.a,{icon:U.ic_logout,size:19,className:"mr-2 black1"}),_.a[v].log_out)))))))):X(u.a,{href:"/auth/login"},X("a",{className:"navigation-sidebar__footer__auth"},_.a[v].login)))))),t&&X(T.a,{selector:"#overlay"},X("div",{className:"overlay",onClick:function(){return r(!1)}})))}var ee=i.a.createElement;function ae(e){var a,t=Object(n.useContext)(h.a),r=t.lang,o=t.dispatchLang,c=(Object(z.useRouter)(),Object(m.b)()),s=Object(m.c)(p.b),l=Object(m.c)(p.d),d=(Object(m.c)((function(e){return e.cartReducer})),e.hide||""),v=Object(n.useState)(!1),f=v[0],g=v[1],b=Object(n.useState)(!1),N=b[0],y=b[1],O=Object(n.useState)(!1),x=O[0],j=O[1];return ee(i.a.Fragment,null,ee("div",{className:"menu__wrapper__functions ".concat(k()(e.className))},!d.includes("search")&&ee("a",{className:"menu-icon -search cursor_pointer",onClick:function(e){e.preventDefault(),g(!0)},style:{marginRight:d.includes("cart")&&0}},ee("img",{src:e.white?"/assets/images/header/search-icon-white.png":"/assets/images/header/search-icon.png",alt:"Search icon"})),!d.includes("cart")&&ee(i.a.Fragment,null,ee(u.a,{href:"/shop/wishlist"},ee("a",{className:"menu-icon -wishlist"},ee("img",{src:e.white?"/assets/images/header/wishlist-icon-white.png":"/assets/images/header/wishlist-icon.png",alt:"Wishlist icon"}))),ee("div",{className:"menu__cart"},ee(u.a,{href:"/shop/cart"},ee("a",{className:"menu-icon -cart"},ee("img",{src:e.white?"/assets/images/header/cart-icon-white.png":"/assets/images/header/cart-icon.png",alt:"Cart icon"}),ee("span",{className:"cart__quantity",style:{color:"white"}},(null===s||void 0===s?void 0:s.length)>0?null===s||void 0===s?void 0:s.length:0))),(null===l||void 0===l?void 0:null===(a=l.id)||void 0===a?void 0:a.length)>0?ee("div",{className:"navigator ml-3 mt-1 ".concat(k()(e.className)," login_hidden")},ee("ul",null,ee("li",{className:"relative text_sm"},ee("a",null,_.a[r].account,ee("span",{className:"dropable-icon"},ee(w.a,{icon:C.ic_keyboard_arrow_down,size:21,className:"white1"}))),ee("ul",{className:"dropdown-menu padding_dropdown"},ee("li",null,ee(u.a,{href:"/shop/orders"},ee("a",null,ee(w.a,{icon:W.shopping_cart_ok,size:19,className:"mr-2 black1"}),_.a[r].account_orders)),ee(u.a,{href:"/shop/informations"},ee("a",null,ee(w.a,{icon:K.user_circle,size:19,className:"mr-2 black1"}),_.a[r].account_informations)),ee("div",{onClick:function(){Object($.a)("refresh_token"),c(Object(Y.j)({}))}},ee("a",null,ee(w.a,{icon:U.ic_logout,size:19,className:"mr-2 black1"}),_.a[r].log_out))))))):ee(u.a,{href:"/auth/login"},ee("a",{className:"menu-icon -cart login_text ml-3 login_hidden"},_.a[r].login)),ee("div",{className:"navigator ml-3 mt-1 ".concat(k()(e.className)," login_hidden")},ee("ul",null,ee("li",{className:"relative"},ee("a",{className:"uppercase1 text_sm"},r,ee("span",{className:"dropable-icon"},ee(w.a,{icon:C.ic_keyboard_arrow_down,size:17,className:"white1"}))),ee("ul",{className:"dropdown-menu padding_dropdown1"},ee("li",{className:"p-0"},ee("div",{className:"lang_hover",onClick:function(e){e.preventDefault(),o({type:"Ru"})}},ee("img",{src:"/ru.png",className:"img_lang mr-2"}),ee("a",null,"\u0420\u0443\u0441\u0441\u043a\u0438\u0439")),ee("div",{className:"lang_hover",onClick:function(e){e.preventDefault(),o({type:"En"})}},ee("img",{src:"/en.png",className:"img_lang mr-2"}),ee("a",null,"English")),ee("div",{className:"lang_hover",onClick:function(e){e.preventDefault(),o({type:"Tm"})}},ee("img",{src:"/tm.png",className:"img_lang mr-2"}),ee("a",null,"T\xfcrkmen")))))))),ee("a",{href:"#",className:"menu-icon -navbar",onClick:function(e){e.preventDefault(),j(!x)}},ee("div",{className:"bar"}),ee("div",{className:"bar"}),ee("div",{className:"bar"})))),ee(R,{showSearch:f,setShowSearch:g}),ee(Q,{showCart:N,setShowCart:y}),ee(Z,{user:l,showMobileNav:x,setShowMobileNav:j}))}var te=t("/ANM"),ne=i.a.createElement;function ie(e){var a=e.hide,t=e.container,i=Object(n.useContext)(h.a),r=i.lang,o=(i.dispatchLang,Object(m.b)()),c=Object(n.useState)([]),s=(c[0],c[1]),l=Object(n.useState)([]),d=l[0];l[1];return Object(n.useEffect)((function(){Object(b.a)({url:"".concat(r,"/get-categories"),token:"",action:function(e){var a;e.success?(s(null===e||void 0===e?void 0:null===(a=e.data)||void 0===a?void 0:a.rows),o(Object(te.d)({categories:e.data.rows}))):console.log("error_category ",e)}})}),[r]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("sebet"));null==e?(localStorage.setItem("sebet",JSON.stringify(d)),o(Object(te.e)({sebet:d}))):o(Object(te.e)({sebet:e}))}),[]),ne("div",{className:"menu -style-3 navbar1"},ne("div",{className:Object(A.b)(t)},ne("div",{className:"menu__wrapper"},ne(u.a,{href:"/"},ne("a",{className:"menu__wrapper__logo d-flex align-items-center text_dec"},ne("img",{style:{height:"45px",width:"40px"},src:"/logo_white.svg",alt:"Logo"}),ne("h3",{className:"logo_white"},"Sharafyabi"))),ne(L,{className:"-white"}),ne(ae,{hide:a,white:!0,className:"-white"}))))}var re=i.a.createElement;var oe,ce=i.a.createElement,se=(oe=function(e){return re(i.a.Fragment,null,re(ie,e))},function(e){var a=Object(n.useRef)(null),t=Object(n.useState)(0),i=t[0],r=t[1],o=Object(n.useState)(0),s=o[0],l=o[1];function u(){r(window.scrollY)}return Object(n.useEffect)((function(){return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}}),[]),Object(n.useEffect)((function(){i>=a.current.offsetHeight?l(!0):l(!1)}),[i]),c("div",{ref:a,className:"header ".concat(s?"fixed":"")},c(oe,e))});function le(e){return ce(i.a.Fragment,null,ce(o.a,null,ce("title",null,e.title||"Sharafyabi - Online Shop")),ce(se,{container:e.container}),e.children,ce(x,null))}},A2gu:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("q1tI"),i=t("i8i4");function r(e){var a=e.children,t=e.selector,r=Object(n.useRef)(),o=Object(n.useState)(!1),c=o[0],s=o[1];return Object(n.useEffect)((function(){r.current=document.querySelector(t),s(!0)}),[t]),c?Object(i.createPortal)(a,r.current):null}},DrLS:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ic_keyboard_arrow_up=void 0;a.ic_keyboard_arrow_up={viewBox:"0 0 24 24",children:[{name:"path",attribs:{d:"M0 0h24v24H0z",fill:"none"},children:[]},{name:"path",attribs:{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"},children:[]}]}},OfHd:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.shopping_cart_ok=void 0;a.shopping_cart_ok={viewBox:"0 0 64 64",children:[{name:"g",attribs:{id:"SHOPPING_CART__x2F__OK_1_","enable-background":"new    "},children:[{name:"g",attribs:{id:"SHOPPING_CART__x2F__OK"},children:[{name:"g",attribs:{id:"SHOPPING_CART__x2F__OK"},children:[{name:"g",attribs:{},children:[{name:"g",attribs:{},children:[{name:"path",attribs:{d:"M51,30c7.18,0,13-5.82,13-13S58.18,4,51,4S38,9.82,38,17S43.82,30,51,30z M45,15c0.828,0,1.578,0.336,2.121,0.879\r\n\t\t\t\tL49,17.757l5.879-5.879C55.422,11.336,56.172,11,57,11c1.657,0,3,1.343,3,3c0,0.828-0.336,1.578-0.879,2.121l-8,8\r\n\t\t\t\tC50.578,24.664,49.828,25,49,25s-1.578-0.336-2.121-0.879l-4-4C42.336,19.578,42,18.828,42,18C42,16.343,43.343,15,45,15z M56,49\r\n\t\t\t\tH27.778l-1.497-4.279L52.2,42.993v-0.001c1.132-0.074,2.092-0.776,2.536-1.762l0,0l4.83-10.733\r\n\t\t\t\tc-2.246,1.427-4.866,2.303-7.686,2.457l-1.877,4.171l-25.779,1.719L18.679,23h17.495C35.423,21.146,35,19.124,35,17H16.578\r\n\t\t\t\tl-1.747-4.991l-0.011,0.004C14.411,10.844,13.309,10,12,10H3c-1.657,0-3,1.343-3,3s1.343,3,3,3h6.872l11.55,33H16\r\n\t\t\t\tc-3.314,0-6,2.686-6,6s2.686,6,6,6s6-2.686,6-6h28c0,3.314,2.686,6,6,6s6-2.686,6-6S59.314,49,56,49z"},children:[{name:"path",attribs:{d:"M51,30c7.18,0,13-5.82,13-13S58.18,4,51,4S38,9.82,38,17S43.82,30,51,30z M45,15c0.828,0,1.578,0.336,2.121,0.879\r\n\t\t\t\tL49,17.757l5.879-5.879C55.422,11.336,56.172,11,57,11c1.657,0,3,1.343,3,3c0,0.828-0.336,1.578-0.879,2.121l-8,8\r\n\t\t\t\tC50.578,24.664,49.828,25,49,25s-1.578-0.336-2.121-0.879l-4-4C42.336,19.578,42,18.828,42,18C42,16.343,43.343,15,45,15z M56,49\r\n\t\t\t\tH27.778l-1.497-4.279L52.2,42.993v-0.001c1.132-0.074,2.092-0.776,2.536-1.762l0,0l4.83-10.733\r\n\t\t\t\tc-2.246,1.427-4.866,2.303-7.686,2.457l-1.877,4.171l-25.779,1.719L18.679,23h17.495C35.423,21.146,35,19.124,35,17H16.578\r\n\t\t\t\tl-1.747-4.991l-0.011,0.004C14.411,10.844,13.309,10,12,10H3c-1.657,0-3,1.343-3,3s1.343,3,3,3h6.872l11.55,33H16\r\n\t\t\t\tc-3.314,0-6,2.686-6,6s2.686,6,6,6s6-2.686,6-6h28c0,3.314,2.686,6,6,6s6-2.686,6-6S59.314,49,56,49z"},children:[]}]}]}]}]}]}]}]}},Otqc:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ic_logout=void 0;a.ic_logout={viewBox:"0 0 24 24",children:[{name:"path",attribs:{d:"M0 0h24v24H0z",fill:"none"},children:[]},{name:"path",attribs:{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"},children:[]}]}},T8nL:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ic_keyboard_arrow_right=void 0;a.ic_keyboard_arrow_right={viewBox:"0 0 24 24",children:[{name:"path",attribs:{d:"M0 0h24v24H0V0z",fill:"none"},children:[]},{name:"path",attribs:{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"},children:[]}]}},TVAx:function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return r}));var n=t("kLkQ"),i=function(e,a){return e.find((function(e){return e.id===a}))},r=function(e,a){var t=0;return e.forEach((function(e){return t+=e.price*e.cartQuantity})),a?Object(n.a)(t):t}},WFYs:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ic_keyboard_arrow_down=void 0;a.ic_keyboard_arrow_down={viewBox:"0 0 24 24",children:[{name:"path",attribs:{d:"M0 0h24v24H0V0z",fill:"none"},children:[]},{name:"path",attribs:{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},children:[]}]}},baJl:function(e,a,t){"use strict";t.d(a,"c",(function(){return n})),t.d(a,"d",(function(){return i})),t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return o}));var n=function(e){return e.auth.token},i=function(e){return e.auth.user},r=function(e){return e.data.categories},o=function(e){return e.data.sebet}},cxSR:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.user_circle=void 0;a.user_circle={viewBox:"0 0 64 64",children:[{name:"g",attribs:{id:"USER_3_","enable-background":"new    "},children:[{name:"g",attribs:{id:"USER"},children:[{name:"g",attribs:{id:"USER"},children:[{name:"g",attribs:{},children:[{name:"g",attribs:{},children:[{name:"path",attribs:{d:"M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M51.253,49.43\r\n\t\t\t\tc-3.767-1.826-2.382-0.398-7.31-2.427c-5.041-2.073-6.235-2.749-6.235-2.749L37.664,39.5c0,0,1.888-1.422,2.477-5.917\r\n\t\t\t\tc1.178,0.338,1.578-1.372,1.642-2.464c0.069-1.055,0.696-4.346-0.745-4.052c0.295-2.197,0.527-4.183,0.421-5.235\r\n\t\t\t\tc-0.36-3.691-2.931-7.544-9.42-7.826c-5.517,0.282-9.098,4.138-9.46,7.829c-0.104,1.052,0.108,3.036,0.403,5.236\r\n\t\t\t\tc-1.441-0.297-0.821,2.999-0.758,4.054c0.07,1.092,0.46,2.809,1.641,2.469c0.587,4.495,2.475,5.93,2.475,5.93L26.293,44.3\r\n\t\t\t\tc0,0-1.195,0.724-6.236,2.796c-4.927,2.027-3.544,0.512-7.31,2.334C8.568,44.816,6,38.715,6,32C6,17.641,17.641,6,32,6\r\n\t\t\t\tc14.359,0,26,11.641,26,26C58,38.716,55.432,44.816,51.253,49.43z"},children:[{name:"path",attribs:{d:"M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M51.253,49.43\r\n\t\t\t\tc-3.767-1.826-2.382-0.398-7.31-2.427c-5.041-2.073-6.235-2.749-6.235-2.749L37.664,39.5c0,0,1.888-1.422,2.477-5.917\r\n\t\t\t\tc1.178,0.338,1.578-1.372,1.642-2.464c0.069-1.055,0.696-4.346-0.745-4.052c0.295-2.197,0.527-4.183,0.421-5.235\r\n\t\t\t\tc-0.36-3.691-2.931-7.544-9.42-7.826c-5.517,0.282-9.098,4.138-9.46,7.829c-0.104,1.052,0.108,3.036,0.403,5.236\r\n\t\t\t\tc-1.441-0.297-0.821,2.999-0.758,4.054c0.07,1.092,0.46,2.809,1.641,2.469c0.587,4.495,2.475,5.93,2.475,5.93L26.293,44.3\r\n\t\t\t\tc0,0-1.195,0.724-6.236,2.796c-4.927,2.027-3.544,0.512-7.31,2.334C8.568,44.816,6,38.715,6,32C6,17.641,17.641,6,32,6\r\n\t\t\t\tc14.359,0,26,11.641,26,26C58,38.716,55.432,44.816,51.253,49.43z"},children:[]}]}]}]}]}]}]}]}},kLkQ:function(e,a,t){"use strict";function n(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"USD",n=Number.parseFloat(e).toFixed(a);switch(t){case"USD":return"$".concat(n);default:return"".concat(n,"VND")}}function i(e){switch(e){case"wide":return"container-full-half";case"full":return"container-full";default:return"container"}}t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return i}))},pQ8y:function(e,a,t){"use strict";var n=t("wx14"),i=t("zLVn"),r=t("dI71");function o(e,a){return e.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var c=t("q1tI"),s=t.n(c),l=t("dRu9"),u=function(e,a){return e&&a&&a.split(" ").forEach((function(a){return n=a,void((t=e).classList?t.classList.remove(n):"string"===typeof t.className?t.className=o(t.className,n):t.setAttribute("class",o(t.className&&t.className.baseVal||"",n)));var t,n}))},d=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(a=e.call.apply(e,[this].concat(n))||this).appliedClasses={appear:{},enter:{},exit:{}},a.onEnter=function(e,t){var n=a.resolveArguments(e,t),i=n[0],r=n[1];a.removeClasses(i,"exit"),a.addClass(i,r?"appear":"enter","base"),a.props.onEnter&&a.props.onEnter(e,t)},a.onEntering=function(e,t){var n=a.resolveArguments(e,t),i=n[0],r=n[1]?"appear":"enter";a.addClass(i,r,"active"),a.props.onEntering&&a.props.onEntering(e,t)},a.onEntered=function(e,t){var n=a.resolveArguments(e,t),i=n[0],r=n[1]?"appear":"enter";a.removeClasses(i,r),a.addClass(i,r,"done"),a.props.onEntered&&a.props.onEntered(e,t)},a.onExit=function(e){var t=a.resolveArguments(e)[0];a.removeClasses(t,"appear"),a.removeClasses(t,"enter"),a.addClass(t,"exit","base"),a.props.onExit&&a.props.onExit(e)},a.onExiting=function(e){var t=a.resolveArguments(e)[0];a.addClass(t,"exit","active"),a.props.onExiting&&a.props.onExiting(e)},a.onExited=function(e){var t=a.resolveArguments(e)[0];a.removeClasses(t,"exit"),a.addClass(t,"exit","done"),a.props.onExited&&a.props.onExited(e)},a.resolveArguments=function(e,t){return a.props.nodeRef?[a.props.nodeRef.current,e]:[e,t]},a.getClassNames=function(e){var t=a.props.classNames,n="string"===typeof t,i=n?""+(n&&t?t+"-":"")+e:t[e];return{baseClassName:i,activeClassName:n?i+"-active":t[e+"Active"],doneClassName:n?i+"-done":t[e+"Done"]}},a}Object(r.a)(a,e);var t=a.prototype;return t.addClass=function(e,a,t){var n=this.getClassNames(a)[t+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===a&&"done"===t&&i&&(n+=" "+i),"active"===t&&e&&e.scrollTop,n&&(this.appliedClasses[a][t]=n,function(e,a){e&&a&&a.split(" ").forEach((function(a){return n=a,void((t=e).classList?t.classList.add(n):function(e,a){return e.classList?!!a&&e.classList.contains(a):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+a+" ")}(t,n)||("string"===typeof t.className?t.className=t.className+" "+n:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+n)));var t,n}))}(e,n))},t.removeClasses=function(e,a){var t=this.appliedClasses[a],n=t.base,i=t.active,r=t.done;this.appliedClasses[a]={},n&&u(e,n),i&&u(e,i),r&&u(e,r)},t.render=function(){var e=this.props,a=(e.classNames,Object(i.a)(e,["classNames"]));return(s.a.createElement(l.a,Object(n.a)({},a,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited})))},a}(s.a.Component);d.defaultProps={classNames:""},d.propTypes={};a.a=d},wQtD:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return r}));var n=t("g9Xf"),i=function(e,a,t){return{type:n.a.ADD_TO_CART,product:e,quantity:a,color:t}},r=function(e){return{type:n.a.REMOVE_FROM_CART,cartId:e}}}}]);