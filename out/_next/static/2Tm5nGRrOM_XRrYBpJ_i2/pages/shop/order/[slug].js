(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"O/h5":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/order/[slug]",function(){return a("gQ1s")}])},gQ1s:function(t,e,a){"use strict";a.r(e);var l=a("nOHt"),n=a("YFqc"),c=a.n(n),o=(a("iagI"),a("mK+b"),a("bbVI"),a("Npp4"),a("6QH/")),s=a("m9Y6"),r=(a("AcOY"),a("q1tI")),i=a.n(r),u=a("HhnA"),d=a("baJl"),p=a("/MKj"),m=a("X8Wk"),v=a("uR58"),h=a("x2Pk"),_=i.a.createElement;e.default=function(){var t=Object(r.useContext)(v.a),e=t.lang,a=(t.dispatchLang,Object(r.useState)(!1)),n=a[0],i=a[1],b=Object(l.useRouter)().query.slug,w=Object(p.c)(d.c);console.log(b);var f=Object(r.useState)([]),g=f[0],y=f[1];return Object(r.useEffect)((function(){i(!0),Object(u.a)({url:"user/".concat(e,"/get-order/").concat(b),token:w,action:function(t){var e;t.success?(console.log("get_oreder_details ",t),y(null===t||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.rows),i(!1)):(console.log("error_order_detail ",t),i(!1))}})}),[b,e]),g?_(o.a,{title:"Sharafyabi - Order"},_(s.a,{title:"\u2116 ".concat(b)},_("div",{className:"d-flex w-100 justify-content-center"},_(c.a,{href:"/"},_("p",{className:"text_dec"},m.a[e].home)),_("span",{className:"ml-2 mr-2"},"/"),_(c.a,{href:"/shop/orders"},_("p",{className:"text_dec"},m.a[e].orders)),_("span",{className:"ml-2 mr-2"},"/"),_(s.b,{name:"\u2116 ".concat(b),current:!0}))),_("div",{className:"cart"},n?_(h.a,{type:"table"}):_("div",{className:"container"},_("div",{className:"cart__table"},_("div",{className:"cart__table__wrapper"},_("table",null,_("colgroup",null,_("col",{style:{width:"40%"}}),_("col",{style:{width:"20%"}}),_("col",{style:{width:"20%"}}),_("col",{style:{width:"20%"}})),_("thead",null,_("tr",null,_("th",null,m.a[e].product),_("th",null,m.a[e].price),_("th",null,m.a[e].qty),_("th",null,m.a[e].prod_sum))),_("tbody",null,null===g||void 0===g?void 0:g.map((function(t,e){return _("tr",{key:t.id},_("td",null,_("div",{className:"cart-product"},_("div",{className:"cart-product__image"},_("img",{src:"https://sharafyabi.com/".concat(null===t||void 0===t?void 0:t.destination,"-mini.webp"),alt:null===t||void 0===t?void 0:t.name})),_("div",{className:"cart-product__content"},_("h5",null,t.category_name.slice(0,40)),_(c.a,{href:"/shop/product/[slug]",as:"/shop/product/"+t.id},_("a",null,t.name))))),_("td",null,t.price," TMT  "),_("td",null,null===t||void 0===t?void 0:t.quantity),_("td",null,(null===t||void 0===t?void 0:t.price)*(null===t||void 0===t?void 0:t.quantity)," TMT"))}))))))))):null}}},[["O/h5",0,2,9,1,4,3,5,6,7,8,10,11,12,15,20]]]);