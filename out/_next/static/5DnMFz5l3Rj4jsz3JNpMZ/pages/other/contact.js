(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"3/4X":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/other/contact",function(){return t("iGlX")}])},"6QH/":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),i=t.n(n),o=t("8Kt/"),s=t.n(o),l=t("PmzM"),r=t("zlC1"),c=t("8fh6"),m=i.a.createElement;var d=i.a.createElement,u=Object(l.a)((function(e){return m(i.a.Fragment,null,m(c.a,e))}));function p(e){return d(i.a.Fragment,null,d(s.a,null,d("title",null,e.title||"Eliah | React")),d(u,{container:e.container}),e.children,d(r.a,null))}},Npp4:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t("q1tI"),i=t.n(n),o=t("HhnA"),s=t("OS56"),l=t.n(s),r=i.a.createElement;function c(){var e=Object(n.useState)([]),a=e[0],t=e[1];Object(n.useEffect)((function(){Object(o.a)({url:"tm/get-producers",token:"",action:function(e){var a;e.success?t(null===e||void 0===e?void 0:null===(a=e.data)||void 0===a?void 0:a.rows):console.log("error_brends ",e)}})}),[]);return r("div",{className:"instagram-two"},r(l.a,{dots:!1,arrows:!1,slidesToShow:6,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1800,settings:{slidesToShow:5}},{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}}]},null===a||void 0===a?void 0:a.map((function(e){return r("a",{key:e.id,href:"/shop/products?search=&page=1&limit=20&category_id=&producer_id=[".concat(null===e||void 0===e?void 0:e.id,"]&min_price=&max_price=&recomended=&new_in_come=&sort_column=&sort_direction="),className:"slider-item"},null!=(null===e||void 0===e?void 0:e.destination)?r("img",{src:"https://sharafyabi.com/".concat(null===e||void 0===e?void 0:e.destination,"-mini.webp"),alt:"image"}):r("img",{src:"/assets/images/instagram/InstagramTwo/1.png",alt:"image"}))}))))}},XvoW:function(e){e.exports=JSON.parse('[{"iconClass":"fas fa-map-marker-alt","title":"Address","detail":"Ashgabat, Garashsyzlyk street, 30/1"},{"iconClass":"fas fa-phone-alt","title":"Phone","detail":"+993 12 57 57 81 (82) , +993 63 14 31 11"},{"iconClass":"far fa-envelope","title":"Email","detail":"order@sharafyabi.com"},{"iconClass":"far fa-clock","title":"Opentime","detail":"9:00 - 18:00"}]')},iGlX:function(e,a,t){"use strict";t.r(a);var n=t("wx14"),i=t("q1tI"),o=t.n(i),s=t("GE9s"),l=t("6QH/"),r=t("Npp4"),c=t("m9Y6"),m=t("TSYQ"),d=t.n(m),u=(t("YFqc"),o.a.createElement);function p(e){var a=e.iconClass,t=e.title,n=e.detail;return u("div",{className:"contact-info__item"},u("div",{className:"contact-info__item__icon"},u("i",{className:d()(a)})),u("div",{className:"contact-info__item__detail"},u("h3",null,t),u("p",null,n)))}var v=t("XvoW"),f=o.a.createElement;a.default=function(){var e=Object(s.d)({}),a=e.register,t=e.handleSubmit,i=e.formState.errors;e.setError;ymaps.ready((function(){var e=37.9026,a=58.36566;var t=new ymaps.Map("map",{center:[e,a],zoom:15});new ymaps.GeoObject({geometry:{type:"Point",coordinates:[e,a]}},{preset:"islands#blackStretchyIcon",draggable:!0});t.geoObjects.add(new ymaps.Placemark([e,a],{balloonContent:"Sharafyabi Online Shop"}))}));return f(l.a,{title:"Sharafyabi | Contact us"},f(c.a,{title:"Contact us"},f(c.b,{name:"Home"}),f(c.b,{name:"Contact us",current:!0})),f("div",{className:"contact"},f("div",{className:"container"},f("div",{className:"row"},f("div",{className:"col-12 col-md-6"},f("h3",{className:"contact-title"},"Contact info"),v&&v.map((function(e,a){return f(p,{key:a,iconClass:e.iconClass,title:e.title,detail:e.detail})}))),f("div",{className:"col-12 col-md-6"},f("h3",{className:"contact-title"},"Get in touch"),f("div",{className:"contact-form"},f("form",{onSubmit:t((function(e){return console.log(e)}))},f("div",{className:"input-validator"},f("input",Object(n.a)({type:"text",name:"name",placeholder:"Name"},a("name"))),i.name&&f("span",{className:"input-error"},"Please provide a name")),f("div",{className:"input-validator"},f("input",Object(n.a)({type:"text",name:"email",placeholder:"Email"},a("email"))),i.email&&f("span",{className:"input-error"},"Please provide an email")),f("div",{className:"input-validator"},f("textarea",{name:"message",id:"",cols:"30",rows:"3",placeholder:"Message"})),f("button",{className:"btn -dark"},"SEND MESSAGE")))),f("div",{className:"col-12"},f("div",{id:"map",style:{width:"100%",height:"450px"}}))))),f(r.a,null))}},m9Y6:function(e,a,t){"use strict";t.d(a,"b",(function(){return o})),t.d(a,"a",(function(){return s}));var n=t("q1tI"),i=t.n(n).a.createElement,o=function(e){var a=e.name,t=e.current;return i("li",{className:t&&"active"},a)},s=function(e){var a=e.title,t=e.children;return i("div",{className:"breadcrumb"},i("div",{className:"container"},i("h2",null,a),i("ul",null,t)))}}},[["3/4X",0,2,1,4,3,5,6,7,8,9,10]]]);