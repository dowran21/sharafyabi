(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"3/4X":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/other/contact",function(){return a("iGlX")}])},"6QH/":function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a("q1tI"),i=a.n(n),o=a("8Kt/"),l=a.n(o),c=a("PmzM"),s=a("zlC1"),r=a("8fh6"),d=i.a.createElement;var u=i.a.createElement,m=Object(c.a)((function(e){return d(i.a.Fragment,null,d(r.a,e))}));function v(e){return u(i.a.Fragment,null,u(l.a,null,u("title",null,e.title||"Eliah | React")),u(m,{container:e.container}),e.children,u(s.a,null))}},"8fh6":function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a("q1tI"),i=a.n(n),o=a("YFqc"),l=a.n(o),c=a("VOjt"),s=a("brf1"),r=a("kLkQ"),d=a("/MKj"),u=a("HhnA"),m=a("/ANM"),v=(a("X8Wk"),a("uR58")),p=i.a.createElement;function h(e){var t=e.hide,a=e.container,i=Object(n.useContext)(v.a),o=i.lang,h=(i.dispatchLang,Object(d.b)()),f=Object(n.useState)([]),g=(f[0],f[1],Object(n.useState)([])),b=(g[0],g[1]),N=Object(n.useState)([]),w=N[0];N[1];return Object(n.useEffect)((function(){Object(u.a)({url:"".concat(o,"/get-categories"),token:"",action:function(e){var t;e.success?(b(null===e||void 0===e?void 0:null===(t=e.data)||void 0===t?void 0:t.rows),h(Object(m.d)({categories:e.data.rows}))):console.log("error_category ",e)}})}),[o]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("sebet"));null==e?(localStorage.setItem("sebet",JSON.stringify(w)),h(Object(m.e)({sebet:w}))):h(Object(m.e)({sebet:e}))}),[]),p("div",{className:"menu -style-3 navbar1"},p("div",{className:Object(r.d)(a)},p("div",{className:"menu__wrapper"},p(l.a,{href:"/"},p("a",{className:"menu__wrapper__logo d-flex align-items-center text_dec"},p("img",{style:{height:"45px",width:"40px"},src:"/logo_white.svg",alt:"Logo"}),p("h3",{className:"logo_white"},"Sharafyabi"))),p(c.a,{className:"-white"}),p(s.a,{hide:t,white:!0,className:"-white"}))))}},Npp4:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),i=a.n(n),o=a("HhnA"),l=a("OS56"),c=a.n(l),s=a("YFqc"),r=a.n(s),d=i.a.createElement;function u(){var e=Object(n.useState)([]),t=e[0],a=e[1];Object(n.useEffect)((function(){Object(o.a)({url:"tm/get-producers",token:"",action:function(e){var t;e.success&&a(null===e||void 0===e?void 0:null===(t=e.data)||void 0===t?void 0:t.rows)}})}),[]);var i={dots:!1,arrows:!1,slidesToShow:(null===t||void 0===t?void 0:t.length)>6?6:null===t||void 0===t?void 0:t.length,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1800,settings:{slidesToShow:(null===t||void 0===t?void 0:t.length)>5?5:null===t||void 0===t?void 0:t.length}},{breakpoint:1200,settings:{slidesToShow:(null===t||void 0===t?void 0:t.length)>4?4:null===t||void 0===t?void 0:t.length}},{breakpoint:992,settings:{slidesToShow:(null===t||void 0===t?void 0:t.length)>3?3:null===t||void 0===t?void 0:t.length}},{breakpoint:576,settings:{slidesToShow:(null===t||void 0===t?void 0:t.length)>2?2:null===t||void 0===t?void 0:t.length}}]};return d("div",{className:"instagram-two"},d(c.a,i,null===t||void 0===t?void 0:t.map((function(e){return d(r.a,{href:"/shop/products?search=&page=1&limit=20&category_id=&producer_id=[".concat(null===e||void 0===e?void 0:e.id,"]&min_price=&max_price=&recomended=&new_in_come=&sort_column=&sort_direction=")},null!=(null===e||void 0===e?void 0:e.destination)?d("a",{key:e.id,className:"slider-item",style:{width:"80%",height:"150px",backgroundImage:"url(https://sharafyabi.com/".concat(null===e||void 0===e?void 0:e.destination,"-mini.webp)"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}):d("a",{key:e.id,className:"slider-item",style:{width:"100%",height:"150px",background:"gray"}}))}))))}},XvoW:function(e){e.exports=JSON.parse("{}")},iGlX:function(e,t,a){"use strict";a.r(t);var n=a("wx14"),i=a("q1tI"),o=a.n(i),l=a("GE9s"),c=a("6QH/"),s=a("Npp4"),r=a("m9Y6"),d=a("TSYQ"),u=a.n(d),m=a("YFqc"),v=a.n(m),p=o.a.createElement;function h(e){var t=e.iconClass,a=e.title,n=e.detail;return p("div",{className:"contact-info__item"},p("div",{className:"contact-info__item__icon"},p("i",{className:u()(t)})),p("div",{className:"contact-info__item__detail"},p("h3",null,a),p("p",null,n)))}a("XvoW");var f=a("X8Wk"),g=a("uR58"),b=o.a.createElement;t.default=function(){var e=Object(i.useContext)(g.a),t=e.lang,a=(e.dispatchLang,Object(l.d)({})),o=a.register,d=a.handleSubmit,u=a.formState.errors,m=(a.setError,[{iconClass:"fas fa-map-marker-alt",title:"Address",detail:"Ashgabat, Garashsyzlyk street, 30/1"},{iconClass:"fas fa-phone-alt",title:"Phone",detail:"+993 12 57 57 81 (82) , +993 63 14 31 11"},{iconClass:"far fa-envelope",title:"Email",detail:"order@sharafyabi.com"},{iconClass:"far fa-clock",title:"Opentime",detail:"9:00 - 18:00"}]);ymaps.ready((function(){var e=37.9026,t=58.36566;var a=new ymaps.Map("map",{center:[e,t],zoom:15});new ymaps.GeoObject({geometry:{type:"Point",coordinates:[e,t]}},{preset:"islands#blackStretchyIcon",draggable:!0});a.geoObjects.add(new ymaps.Placemark([e,t],{balloonContent:"Sharafyabi Online Shop"}))}));return b(c.a,{title:"Sharafyabi | Contact us"},b(r.a,{title:f.a[t].contact},b("div",{className:"d-flex w-100 justify-content-center"},b(v.a,{href:"/"},b("p",{className:"text_dec"},f.a[t].home)),b("span",{className:"ml-2 mr-2"},"/"),b(r.b,{name:f.a[t].contact,current:!0}))),b("div",{className:"contact"},b("div",{className:"container"},b("div",{className:"row"},b("div",{className:"col-12 col-md-6"},b("h3",{className:"contact-title"},f.a[t].contact_info),m&&m.map((function(e,t){return b(h,{key:t,iconClass:e.iconClass,title:e.title,detail:e.detail})}))),b("div",{className:"col-12 col-md-6"},b("h3",{className:"contact-title"},f.a[t].get_in_touch),b("div",{className:"contact-form"},b("form",{onSubmit:d((function(e){return console.log(e)}))},b("div",{className:"input-validator"},b("input",Object(n.a)({type:"text",name:"name",placeholder:"Name"},o("name"))),u.name&&b("span",{className:"input-error"},"Please provide a name")),b("div",{className:"input-validator"},b("input",Object(n.a)({type:"text",name:"email",placeholder:"Email"},o("email"))),u.email&&b("span",{className:"input-error"},"Please provide an email")),b("div",{className:"input-validator"},b("textarea",{name:"message",id:"",cols:"30",rows:"3",placeholder:"Message"})),b("button",{className:"btn -dark"},f.a[t].send_message)))),b("div",{className:"col-12"},b("div",{id:"map",style:{width:"100%",height:"450px"}}))))),b(s.a,null))}},m9Y6:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n).a.createElement,o=function(e){var t=e.name,a=e.current;return i("li",{className:a&&"active"},t)},l=function(e){var t=e.title,a=e.children;return i("div",{className:"breadcrumb"},i("div",{className:"container"},i("h2",null,t),i("ul",null,a)))}}},[["3/4X",0,2,1,4,3,6,5,7,8]]]);