(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"/j0s":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("q1tI"),r=n.n(i),a=n("TSYQ"),o=n.n(a),c=r.a.createElement;function s(t){var e=t.subTitle,n=t.className,i=t.description,r=t.align,a=t.spaceBottom,s=t.showSubTitle,l=t.children,u=t.hideDecoration,d=t.titleSize;return c("div",{className:"section-title -style1 ".concat(o()(n)),style:{textAlign:r,marginBottom:a||"3.125rem"}},s&&c("h5",null,e),c("h2",{style:{fontSize:d}},l),i&&c("p",null,i),!u&&c("img",{src:"/assets/images/introduction/IntroductionOne/content-deco.png",alt:"decoration"}))}},"6QH/":function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var i=n("q1tI"),r=n.n(i),a=n("8Kt/"),o=n.n(a),c=n("PmzM"),s=n("zlC1"),l=n("8fh6"),u=r.a.createElement;var d=r.a.createElement,v=Object(c.a)((function(t){return u(r.a.Fragment,null,u(l.a,t))}));function f(t){return d(r.a.Fragment,null,d(o.a,null,d("title",null,t.title||"Eliah | React")),d(v,{container:t.container}),t.children,d(s.a,null))}},AcOY:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("q1tI"),r=n.n(i),a=n("/j0s"),o=n("JRj/"),c=n("Igvv"),s=r.a.createElement;function l(t){var e=t.data,n={speed:500,slidesToShow:4,slidesToScroll:1,className:"product-slide__wrapper",prevArrow:s(o.b,null),nextArrow:s(o.a,null),responsive:[{breakpoint:1170,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]};return s("div",{className:"product-slide -style-2"},s("div",{className:"container"},s(a.a,{align:"center",hideDecoration:!0},"Related Products"),s(c.a,{data:e,sliderSettings:n})))}},Igvv:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("q1tI"),r=n.n(i),a=n("OS56"),o=n.n(a),c=n("/LDh"),s=r.a.createElement;function l(t){var e=t.data,n=t.sliderSettings;return s("div",{className:"product-slider"},s(o.a,n,e.map((function(t){return s("div",{key:t.id,className:"product-slide__item"},s(c.a,{data:t}))}))))}},Npp4:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("q1tI"),r=n.n(i),a=n("HhnA"),o=n("OS56"),c=n.n(o),s=r.a.createElement;function l(){var t=Object(i.useState)([]),e=t[0],n=t[1];Object(i.useEffect)((function(){Object(a.a)({url:"tm/get-producers",token:"",action:function(t){var e;t.success?n(null===t||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.rows):console.log("error_brends ",t)}})}),[]);return s("div",{className:"instagram-two"},s(c.a,{dots:!1,arrows:!1,slidesToShow:6,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1800,settings:{slidesToShow:5}},{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}}]},null===e||void 0===e?void 0:e.map((function(t){return s("a",{key:t.id,href:"/shop/products?producer_id=".concat(null===t||void 0===t?void 0:t.id),className:"slider-item"},null!=(null===t||void 0===t?void 0:t.destination)?s("img",{src:"http://141.136.44.174:7010/".concat(null===t||void 0===t?void 0:t.destination,"-mini.webp"),alt:"image"}):s("img",{src:"/assets/images/instagram/InstagramTwo/1.png",alt:"image"}))}))))}},"S7+s":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/product/[slug]",function(){return n("TfRW")}])},TfRW:function(t,e,n){"use strict";n.r(e);var i=n("nOHt"),r=(n("iagI"),n("mK+b"),n("bbVI")),a=(n("Npp4"),n("6QH/")),o=n("m9Y6"),c=n("AcOY"),s=n("q1tI"),l=n.n(s),u=n("HhnA"),d=l.a.createElement;e.default=function(){var t=Object(i.useRouter)().query.slug;console.log(t);var e=Object(s.useState)([]),n=e[0],l=e[1],v=Object(s.useState)([]),f=v[0],m=v[1],p=Object(s.useState)([]),g=p[0],b=p[1];Object(s.useEffect)((function(){Object(u.a)({url:"tm/get-product/".concat(t),token:"",action:function(t){var e;t.success?l(null===t||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.rows):console.log("error_detail ",t)}})}),[t]),Object(s.useEffect)((function(){b(null===n||void 0===n?void 0:n.id),Object(u.a)({url:"tm/get-products?page=1&limit=16&category_id=".concat(JSON.stringify(g)),token:"",action:function(t){var e,n;t.success?(console.log("get_4related",t),m(null===t||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:null===(n=e.rows)||void 0===n?void 0:n.products)):console.log("error_4related ",t)}})}),[n]);return n?d(a.a,{title:"Sharafyabi"},d(o.a,{title:"Product Detail"},d(o.b,{name:"Home"}),d(o.b,{name:"Shop"}),d(o.b,{name:null===n||void 0===n?void 0:n.name,current:!0})),d(r.a,{data:n,onReviewSubmit:function(t){console.log(t)}}),d(c.a,{data:f})):null}},bbVI:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("q1tI"),r=n.n(i),a=n("UQuY"),o=(n("OS56"),n("JRj/")),c=r.a.createElement;function s(t){var e=t.data,n=(c(o.b,null),c(o.a,null),Object(i.useState)()),r=(n[0],n[1],Object(i.useState)());r[0],r[1];return console.log(e,"--slide"),c("div",{className:"product-detail__slide-two"},c("img",{src:"http://141.136.44.174:7010/".concat(e.destination,"-mini.webp"),alt:"Product image"}))}var l=r.a.createElement;function u(t){var e=t.data,n=t.onReviewSubmit,r=Object(i.useState)(1),o=r[0],c=r[1];return console.log(e,"---single"),l("div",{className:"product-detail"},l("div",{className:"container"},l("div",{className:"product-detail__wrapper"},l("div",{className:"row"},l("div",{className:"col-12 col-md-6"},l(s,{data:e})),l("div",{className:"col-12 col-md-6"},l(a.a,{data:e,qty:o,setQty:c,onReviewSubmit:n}))))))}},m9Y6:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o}));var i=n("q1tI"),r=n.n(i).a.createElement,a=function(t){var e=t.name,n=t.current;return r("li",{className:n&&"active"},e)},o=function(t){var e=t.title,n=t.children;return r("div",{className:"breadcrumb"},r("div",{className:"container"},r("h2",null,e),r("ul",null,n)))}},"mK+b":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var i=function(t,e,n,i){var r=(e=e&&"all"===e.toLowerCase()?"":e)?t.filter((function(t){return t.category.toLowerCase()===e.toLowerCase()})):t;if(n&&"new"===n){var a=r.filter((function(t){return t.new}));return a.slice(0,i||a.length)}return r&&r.slice(0,i||r.length)},r=function(t,e,n){function i(e,i){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?-1:1;return t.slice(0,n||t.length).sort((function(t,e){return t[i]<e[i]?-1*r:t[i]>e[i]?1*r:0}))}return e&&"default"!==e?"az"===e?i(t,"name"):"za"===e?i(t,"name",!0):"lowToHigh"===e?i(t,"price"):"highToLow"===e?i(t,"price",!0):t.slice(0,n||t.length):t},a=function(t,e,n,i){return e&&!n?t.filter((function(t){return t.price>e})):!e&&n?t.filter((function(t){return t.price<n})):e||n?t.filter((function(t){return t.price>e&&t.price<n})):t},o=function(t,e){return e?t.filter((function(t){return t.brand.toLowerCase()===e.toLowerCase()})):t},c=function(t,e,n,c,s,l,u){var d;if(n){var v=i(t,n);if(s&&!l){var f=a(v,c,s);d=r(f,e)}else if(!s&&l){var m=o(v,l);d=r(m,e)}else if(s&&l){var p=o(v,l),g=a(v,c,s),b=p.filter((function(t){return g.some((function(e){return t.id===e.id}))}));d=r(b,e)}else d=r(v,e)}else d=r(t,e);return d.slice(0,u||t.length)}}},[["S7+s",0,2,1,3,4,6,5,7,8,9,10,11]]]);