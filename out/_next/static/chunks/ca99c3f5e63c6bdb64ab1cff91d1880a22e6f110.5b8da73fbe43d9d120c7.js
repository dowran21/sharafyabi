(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+poQ":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n),o=(a("X8Wk"),a("uR58")),s=a("vwd4"),r=i.a.createElement;function l(e){var t=e.spaceBottom,a=Object(n.useContext)(o.a);a.lang,a.dispatchLang;return r("div",{className:"benefits",style:{marginBottom:t||"6.25rem"}},r("div",{className:"container"},r("div",{className:"row"},s.map((function(e,t){return r("div",{key:t,className:"col-12 col-sm-6 col-lg-3"},r("div",{className:"benefits__item"},r("div",{className:"benefits__item__icon"},r("img",{src:e.image,alt:e.name})),r("div",{className:"benefits__item__content"},r("h5",null,e.name),r("p",null,e.content))))})))))}},"/j0s":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n),o=a("TSYQ"),s=a.n(o),r=i.a.createElement;function l(e){var t=e.subTitle,a=e.className,n=e.description,i=e.align,o=e.spaceBottom,l=e.showSubTitle,c=e.children,d=e.hideDecoration,u=e.titleSize;return r("div",{className:"section-title -style1 ".concat(s()(a)),style:{textAlign:i,marginBottom:o||"3.125rem"}},l&&r("h5",null,t),r("h2",{style:{fontSize:u}},c),n&&r("p",null,n),!d&&r("img",{src:"/assets/images/introduction/IntroductionOne/content-deco.png",alt:"decoration"}))}},"1eQg":function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a("wx14"),i=a("rePB"),o=a("q1tI"),s=a.n(o),r=a("OS56"),l=a.n(r),c=a("TSYQ"),d=a.n(c),u=a("GXNE"),m=s.a.createElement;function v(e){var t,a=e.showDots,s=e.showArrows,r=e.reverseLayout,c=e.children,v=e.data,h=Object(o.useRef)(null),g=Object(o.useRef)(null),f=Object(o.useState)(0),p=f[0],b=f[1],w=(t={slideToShow:1,arrows:!1,swipeToSlide:!0},Object(i.a)(t,"arrows",!1),Object(i.a)(t,"dots",a),Object(i.a)(t,"dotsClass",a&&"slider-dots"),Object(i.a)(t,"customPaging",a&&function(e){return m("div",{className:"slider-dot"})}),Object(i.a)(t,"afterChange",(function(e){b(e)})),t);return m("div",null,m("div",{className:"testimonial-slider"},m("div",{className:"row"},m("div",{className:"col-12 col-md-6 ".concat(d()({"order-2":r}))},m("div",{className:"slide-nav"},m(l.a,Object(n.a)({ref:h},{slideToShow:1,rows:2,slidesPerRow:4,arrow:!1}),v.map((function(e,t){return m("div",{key:t,className:"".concat(d()({active:p===t})," slide-nav__item"),onClick:function(){b(t),g.current.slickGoTo(t)}},m("img",{src:e.image,alt:"Customer avatar"}))}))))),m("div",{className:"col-12 col-md-6 ".concat(d()({"order-1":r}))},m("div",{className:"slide-for"},m(l.a,Object(n.a)({ref:g},w),v.map((function(e,t){return m("div",{key:t,className:"slide-for__item"},c,m("div",{className:"slide-for__item__header"},m("div",{className:"quote-icon"},m("i",{className:"fas fa-quote-right"})),m("div",{className:"customer__info"},m("h3",null,e.name),m("h5",null,e.city)),m(u.a,{currentRate:e.rate})),m("p",{className:"slide-for__item__content"},e.review))}))),s&&m("div",{className:"testimonial-one__slider-control"},m("a",{href:"#",onClick:function(e){e.preventDefault(),g.current.slickPrev()}},m("i",{className:"far fa-angle-left"}),"Prev"),m("a",{href:"#",onClick:function(e){e.preventDefault(),g.current.slickNext()}},"Next",m("i",{className:"far fa-angle-right"}))))))))}},"6QH/":function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a("q1tI"),i=a.n(n),o=a("8Kt/"),s=a.n(o),r=a("PmzM"),l=a("zlC1"),c=a("8fh6"),d=i.a.createElement;var u=i.a.createElement,m=Object(r.a)((function(e){return d(i.a.Fragment,null,d(c.a,e))}));function v(e){return u(i.a.Fragment,null,u(s.a,null,u("title",null,e.title||"Eliah | React")),u(m,{container:e.container}),e.children,u(l.a,null))}},"8fh6":function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a("q1tI"),i=a.n(n),o=a("YFqc"),s=a.n(o),r=a("VOjt"),l=a("brf1"),c=a("kLkQ"),d=a("/MKj"),u=a("HhnA"),m=a("/ANM"),v=(a("X8Wk"),a("uR58")),h=i.a.createElement;function g(e){var t=e.hide,a=e.container,i=Object(n.useContext)(v.a),o=i.lang,g=(i.dispatchLang,Object(d.b)()),f=Object(n.useState)([]),p=(f[0],f[1],Object(n.useState)([])),b=(p[0],p[1]),w=Object(n.useState)([]),y=w[0];w[1];return Object(n.useEffect)((function(){Object(u.a)({url:"".concat(o,"/get-categories"),token:"",action:function(e){var t;e.success?(b(null===e||void 0===e?void 0:null===(t=e.data)||void 0===t?void 0:t.rows),g(Object(m.d)({categories:e.data.rows}))):console.log("error_category ",e)}})}),[o]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("sebet"));null==e?(localStorage.setItem("sebet",JSON.stringify(y)),g(Object(m.e)({sebet:y}))):g(Object(m.e)({sebet:e}))}),[]),h("div",{className:"menu -style-3 navbar1"},h("div",{className:Object(c.d)(a)},h("div",{className:"menu__wrapper"},h(s.a,{href:"/"},h("a",{className:"menu__wrapper__logo d-flex align-items-center text_dec"},h("img",{style:{height:"45px",width:"40px"},src:"/logo_white.svg",alt:"Logo"}),h("h3",{className:"logo_white"},"Sharafyabi"))),h(r.a,{className:"-white"}),h(l.a,{hide:t,white:!0,className:"-white"}))))}},"9S/V":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n),o=a("/j0s"),s=a("1eQg"),r=i.a.createElement;function l(e){var t=e.data,a=e.style;return r("div",{className:"testimonial",style:a},r("div",{className:"container"},r(o.a,{showSubTitle:!0,align:"center",subTitle:"Testimonial"},"What people say?"),r(s.a,{data:t,showArrows:!0})))}},"9cws":function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/images/testimonial/TestimonialOne/1.png","name":"Alexander Ball","city":"New York","review":"I love my lash tint! I don\'t have extremely blonde lashes, but I do like that they can be even darker than they are. It makes my eyes stand out more and I love the way it looks! Now, I just need to add on a bit of mascara for length and I am set.","rate":4},{"id":2,"image":"/assets/images/testimonial/TestimonialOne/2.png","name":"Izabel Watt","city":"Michigan","review":"I love my lash tint! I don\'t have extremely blonde lashes, but I do like that they can be even darker than they are. It makes my eyes stand out more and I love the way it looks! Now, I just need to add on a bit of mascara for length and I am set.","rate":4},{"id":3,"image":"/assets/images/testimonial/TestimonialOne/3.png","name":"Rachel Regan","city":"Sydney","review":"I love my lash tint! I don\'t have extremely blonde lashes, but I do like that they can be even darker than they are. It makes my eyes stand out more and I love the way it looks! Now, I just need to add on a bit of mascara for length and I am set.","rate":4},{"id":4,"image":"/assets/images/testimonial/TestimonialOne/4.png","name":"Malika Kenny","city":"Ha Noi","review":"I love my lash tint! I don\'t have extremely blonde lashes, but I do like that they can be even darker than they are. It makes my eyes stand out more and I love the way it looks! Now, I just need to add on a bit of mascara for length and I am set.","rate":4},{"id":5,"image":"/assets/images/testimonial/TestimonialOne/5.png","name":"Javier Bender","city":"Tokyo","review":"I love my lash tint! I don\'t have extremely blonde lashes, but I do like that they can be even darker than they are. It makes my eyes stand out more and I love the way it looks! Now, I just need to add on a bit of mascara for length and I am set.","rate":4},{"id":6,"image":"/assets/images/testimonial/TestimonialOne/6.png","name":"Paul Brookes","city":"Berlin","review":"I love my lash tint! I don\'t have extremely blonde lashes, but I do like that they can be even darker than they are. It makes my eyes stand out more and I love the way it looks! Now, I just need to add on a bit of mascara for length and I am set.","rate":4},{"id":7,"image":"/assets/images/testimonial/TestimonialOne/7.png","name":"Bilaal Gunn","city":"Denver","review":"I love my lash tint! I don\'t have extremely blonde lashes, but I do like that they can be even darker than they are. It makes my eyes stand out more and I love the way it looks! Now, I just need to add on a bit of mascara for length and I am set.","rate":4},{"id":8,"image":"/assets/images/testimonial/TestimonialOne/8.png","name":"Musab O\'Sullivan","city":"Paris","review":"I love my lash tint! I don\'t have extremely blonde lashes, but I do like that they can be even darker than they are. It makes my eyes stand out more and I love the way it looks! Now, I just need to add on a bit of mascara for length and I am set.","rate":4}]')},"At+n":function(e){e.exports=JSON.parse('{"subTitle":{"main":"About","span":"Eliah"},"title":{"main":"When You Look Good","span":"You Feel Good"},"description":"The top three occupations in the Beauty salons Industry Group are Hairdressers, hairstylists, & cosmetologists, Manicurists and pedicurists, Receptionists & information clerks, Supervisors of personal care and service workers, and Skincare specialists.","btn":{"content":"Appointment","color":"white"}}')},GXNE:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),i=a.n(n).a.createElement;function o(e){for(var t=e.currentRate,a=[],n=0;n<5;n++)n>=t?a.push(i("i",{key:n,className:"far fa-star"})):a.push(i("i",{key:n,className:"fas fa-star"}));return i("div",{className:"rate"},a)}},"JRj/":function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return u}));var n=a("wx14"),i=a("zLVn");function o(e,t){if(null==e)return{};var a,n,o=Object(i.a)(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=a("q1tI"),r=["currentSlide","slideCount"],l=["currentSlide","slideCount"],c=a.n(s).a.createElement,d=function(e){e.currentSlide,e.slideCount;var t=o(e,r);return c("a",Object(n.a)({},t,{href:"#"}),c("i",{className:"far fa-angle-left"}))},u=function(e){e.currentSlide,e.slideCount;var t=o(e,l);return c("a",Object(n.a)({},t,{href:"#"}),c("i",{className:"far fa-angle-right"}))}},N9oT:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("q1tI"),i=a.n(n),o=a("TSYQ"),s=a.n(o),r=a("6EID"),l=a("bMKh"),c=i.a.createElement;function d(e){var t=Object(n.useState)(!1),a=t[0],o=t[1],d=e.poster,u=e.height,m=e.width,v=e.src,h=e.className;return u=u||1080,c(i.a.Fragment,null,c("div",{className:"video-frame ".concat(s()(h)),style:{height:u,width:m||16*u/9}},c("div",{className:"video-frame__poster"},c("img",{src:d,alt:"Video poster"})),c(r.a,{action:"#",color:"white",height:"50px",width:"50px",className:"-round",onClick:function(e){e.preventDefault(),o(!0)},content:c("i",{className:"fas fa-play"})}),c("a",null)),c(l.a,{showModal:a,setShowModal:o,height:400,width:700},c("iframe",{src:v,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))}var u=i.a.createElement;function m(e){var t=e.data,a=e.style,i=Object(n.useState)(t[0].name),o=i[0],s=i[1],r=Object(n.useState)(t[0].videoPoster),l=r[0],c=r[1],m=Object(n.useState)(t[0].videoSrc),v=m[0],h=m[1];return u("div",{className:"introduction-two",style:a},u(d,{poster:l,height:500,src:v}),u("div",{className:"introduction-two__content"},u("div",{className:"container"},t.map((function(e,t){return u("div",{onMouseOver:function(){s(e.name),c(e.videoPoster),h(e.videoSrc)},key:t,className:"introduction-two__content__item ".concat(o===e.name?"active":"")},!e.description&&u("span",null,"0",t+1,"."),u("a",{href:"#",onClick:function(e){return e.preventDefault()}},e.name),u("p",null,e.description&&e.description))})))))}},Npp4:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),i=a.n(n),o=a("HhnA"),s=a("OS56"),r=a.n(s),l=a("YFqc"),c=a.n(l),d=i.a.createElement;function u(){var e=Object(n.useState)([]),t=e[0],a=e[1];Object(n.useEffect)((function(){Object(o.a)({url:"tm/get-producers",token:"",action:function(e){var t;e.success&&a(null===e||void 0===e?void 0:null===(t=e.data)||void 0===t?void 0:t.rows)}})}),[]);var i={dots:!1,arrows:!1,slidesToShow:(null===t||void 0===t?void 0:t.length)>6?6:null===t||void 0===t?void 0:t.length,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1800,settings:{slidesToShow:(null===t||void 0===t?void 0:t.length)>5?5:null===t||void 0===t?void 0:t.length}},{breakpoint:1200,settings:{slidesToShow:(null===t||void 0===t?void 0:t.length)>4?4:null===t||void 0===t?void 0:t.length}},{breakpoint:992,settings:{slidesToShow:(null===t||void 0===t?void 0:t.length)>3?3:null===t||void 0===t?void 0:t.length}},{breakpoint:576,settings:{slidesToShow:(null===t||void 0===t?void 0:t.length)>2?2:null===t||void 0===t?void 0:t.length}}]};return d("div",{className:"instagram-two"},d(r.a,i,null===t||void 0===t?void 0:t.map((function(e){return d(c.a,{href:"/shop/products?search=&page=1&limit=20&category_id=&producer_id=[".concat(null===e||void 0===e?void 0:e.id,"]&min_price=&max_price=&recomended=&new_in_come=&sort_column=&sort_direction=")},null!=(null===e||void 0===e?void 0:e.destination)?d("a",{key:e.id,className:"slider-item",style:{width:"80%",height:"150px",backgroundImage:"url(https://sharafyabi.com/".concat(null===e||void 0===e?void 0:e.destination,"-mini.webp)"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}):d("a",{key:e.id,className:"slider-item",style:{width:"100%",height:"150px",background:"gray"}}))}))))}},"YFk/":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),i=a.n(n),o=a("patp"),s=a.n(o),r=a("6EID"),l=a("/j0s"),c=i.a.createElement;function d(e){var t=e.data,a=Object(n.useRef)(null),i=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=new s.a(a.current),t=new s.a(i.current);return function(){e.disable(),t.disable()}}),[]),c("div",{className:"introduction-one"},c("div",{className:"container"},c("div",{className:"row align-items-center"},c("div",{className:"col-12 col-md-6"},c("div",{className:"introduction-one__image"},c("div",{className:"introduction-one__image__detail"},c("img",{src:"/assets/images/introduction/IntroductionOne/img1.png",alt:"background"}),c("img",{src:"/assets/images/introduction/IntroductionOne/img2.png",alt:"background"})),c("div",{className:"wrapper"},c("div",{className:"introduction-one__image__background"},c("div",{className:"background__item"},c("div",{ref:a,className:"wrapper"},c("img",{"data-depth":"0.5",src:"/assets/images/introduction/IntroductionOne/bg1.png",alt:"background"}))),c("div",{className:"background__item"},c("div",{ref:i,className:"wrapper"},c("img",{"data-depth":"0.3","data-invert-x":!0,"data-invert-y":!0,src:"/assets/images/introduction/IntroductionOne/bg2.png",alt:"background"}))))))),c("div",{className:"col-12 col-md-6"},c("div",{className:"introduction-one__content"},c("h5",null,t.subTitle.main," ",c("span",null,t.subTitle.span)),c(l.a,{spaceBottom:"1.875em"},t.title.main,c("br",null),t.title.span),c("p",null,t.description),c(r.a,{color:t.btn.color,content:t.btn.content,action:"#"}))))))}},bMKh:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n),o=a("pQ8y"),s=a("A2gu"),r=i.a.createElement;function l(e){var t=e.showModal,a=e.setShowModal,n=e.height,l=e.width;return r(i.a.Fragment,null,r(s.a,{selector:"#modal"},r(o.a,{in:t,unmountOnExit:!0,timeout:200,classNames:"cart-sidebar"},r("div",{className:"modal",style:{height:n,width:l}},r("div",{className:"modal__wrapper"},e.children)))),t&&r(s.a,{selector:"#overlay"},r("div",{className:"overlay",onClick:function(e){a(!1)}})))}},m9Y6:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return s}));var n=a("q1tI"),i=a.n(n).a.createElement,o=function(e){var t=e.name,a=e.current;return i("li",{className:a&&"active"},t)},s=function(e){var t=e.title,a=e.children;return i("div",{className:"breadcrumb"},i("div",{className:"container"},i("h2",null,t),i("ul",null,a)))}},sIik:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),i=a.n(n),o=a("OS56"),s=a.n(o),r=a("6EID"),l=a("JRj/"),c=i.a.createElement;function d(){var e={dots:!1,infinite:!1,speed:500,slidesToShow:6,slidesToScroll:1,prevArrow:c(l.b,null),nextArrow:c(l.a,null),responsive:[{breakpoint:1200,settings:{slidesToShow:5}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}}]};return c("div",{className:"introduction-nine"},c("div",{className:"introduction-nine__logos"},c("div",{className:"container"},c(s.a,e,Array.from(Array(7),(function(e,t){return c("div",{key:t,className:"slide__item"},c("img",{src:""+"/assets/images/introduction/IntroductionNine/".concat(t+1,".png"),alt:"Brand item"}))}))))),c("div",{className:"container"},c("div",{className:"introduction-nine__content"},c("h3",null,"New items are ",c("br",null),"released weekly."),c(r.a,{action:"#",color:"white",content:"ALL NEW ITEMS"}))))}},tXed:function(e){e.exports=JSON.parse('[{"name":"2006","description":"Supro was born","videoPoster":"/assets/images/introduction/IntroductionTwo/1.png","videoSrc":"https://www.youtube.com/embed/80e0QHPYRG4"},{"name":"2010","description":"We went international, lauching in Lodon and the US.","videoPoster":"/assets/images/introduction/IntroductionTwo/2.png","videoSrc":"https://www.youtube.com/embed/xn7jfVWWSio"},{"name":"2015","description":"We hit 1 mil followers on Facebook Opened Sydney office","videoPoster":"/assets/images/introduction/IntroductionTwo/3.png","videoSrc":"https://www.youtube.com/embed/K3M-czGNUCg"},{"name":"2020","description":"1000+ employees and we launched Supro Premium","videoPoster":"/assets/images/introduction/IntroductionTwo/4.png","videoSrc":"https://www.youtube.com/embed/hoPiGLf0ICA"}]')},vwd4:function(e){e.exports=JSON.parse('[{"image":"/assets/images/benefits/1.png","name":"Free Shipping","content":"Free shipping on all order"},{"image":"/assets/images/benefits/2.png","name":"Valuable Gifts","content":"Free gift after every 10 order"},{"image":"/assets/images/benefits/3.png","name":"All Day Support","content":"Call us: +993 63 14 31 11"},{"image":"/assets/images/benefits/4.png","name":"Seasonal Sale","content":"Discounts up to 50% on all"}]')}}]);