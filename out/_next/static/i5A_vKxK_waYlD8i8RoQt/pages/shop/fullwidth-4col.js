(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{P7bw:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("q1tI"),i=n.n(r),a=n("lmm/"),o=n("J+Fc"),c=i.a.createElement;function s(e){var t=e.curentView,n=e.getCurrentView,i=e.getCurrentSort,s=Object(r.useState)(t||o.b.DEFAULT_VIEW),u=s[0],l=s[1];return Object(r.useEffect)((function(){n&&n(u)}),[u]),c("div",{className:"shop-header"},c("div",{className:"shop-header__view"},c("div",{className:"shop-header__view__icon"},c("a",{href:"#",className:"grid"===u?"active":"",onClick:function(e){e.preventDefault(),l("grid")}},c("i",{className:"fas fa-th"})),c("a",{href:"#",className:"list"===u?"active":"",onClick:function(e){e.preventDefault(),l("list")}},c("i",{className:"fas fa-bars"}))),"grid"===u&&c("h5",{className:"shop-header__page"},"Shop Fullwidth 4 Columns")),c(a.a,{options:o.b.SORT_TYPES,getValue:i}))}},"YJY/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/fullwidth-4col",function(){return n("v12Y")}])},"fg+H":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("rePB"),i=n("q1tI"),a=n.n(i),o=n("/LDh"),c=n("TSYQ"),s=n.n(c),u=a.a.createElement;function l(e){var t,n,i=e.gridColClass,a=e.listColClass,c=e.fiveCol,l=e.view,f=(e.data,e.products);return u("div",{className:"shop-products"},"grid"===l?u("div",{className:"shop-products__grid"},f&&u("div",{className:"row"},null===f||void 0===f?void 0:null===(t=f.products)||void 0===t?void 0:t.map((function(e){return u("div",{key:e.id,className:s()(i,{"five-col":c})},u(o.a,{data:e}))})))):u("div",{className:"shop-products__list"},f&&u("div",{className:"row"},null===f||void 0===f?void 0:null===(n=f.products)||void 0===n?void 0:n.map((function(e,t){return u("div",{key:t,className:a},u(o.a,Object(r.a)({type:l,data:e},"type","list")))})))))}},"mK+b":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=function(e,t,n,r){var i=(t=t&&"all"===t.toLowerCase()?"":t)?e.filter((function(e){return e.category.toLowerCase()===t.toLowerCase()})):e;if(n&&"new"===n){var a=i.filter((function(e){return e.new}));return a.slice(0,r||a.length)}return i&&i.slice(0,r||i.length)},i=function(e,t,n){function r(t,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?-1:1;return e.slice(0,n||e.length).sort((function(e,t){return e[r]<t[r]?-1*i:e[r]>t[r]?1*i:0}))}return t&&"default"!==t?"az"===t?r(e,"name"):"za"===t?r(e,"name",!0):"lowToHigh"===t?r(e,"price"):"highToLow"===t?r(e,"price",!0):e.slice(0,n||e.length):e},a=function(e,t,n,r){return t&&!n?e.filter((function(e){return e.price>t})):!t&&n?e.filter((function(e){return e.price<n})):t||n?e.filter((function(e){return e.price>t&&e.price<n})):e},o=function(e,t){return t?e.filter((function(e){return e.brand.toLowerCase()===t.toLowerCase()})):e},c=function(e,t,n,c,s,u,l){var f;if(n){var d=r(e,n);if(s&&!u){var v=a(d,c,s);f=i(v,t)}else if(!s&&u){var p=o(d,u);f=i(p,t)}else if(s&&u){var h=o(d,u),m=a(d,c,s),g=h.filter((function(e){return m.some((function(t){return e.id===t.id}))}));f=i(g,t)}else f=i(d,t)}else f=i(e,t);return f.slice(0,l||e.length)}},v12Y:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("2vfM"),o=n("m9Y6"),c=n("mK+b"),s=n("6QH/"),u=n("iagI"),l=n("fg+H"),f=n("P7bw"),d=n("Npp4"),v=i.a.createElement;t.default=function(){var e=Object(r.useState)(0),t=e[0],n=e[1],i=Object(r.useState)(),p=i[0],h=i[1],m=Object(r.useState)(),g=m[0],w=m[1],b=Object(r.useState)(1),C=b[0],N=b[1],_=Object(r.useState)([]),S=_[0],O=_[1];return Object(r.useEffect)((function(){var e=Object(c.b)(u,g);O(e.slice(t,t+12))}),[t,g]),v(s.a,{title:"Shop Fullwidth 4 columns",container:"wide"},v(o.a,{title:"Shop"},v(o.b,{name:"Home"}),v(o.b,{name:"Shop",current:!0})),v("div",{className:"shop"},v("div",{className:"container-full-half"},v(f.a,{view:p,getCurrentSort:w,getCurrentView:function(e){return h(e)}}),v(l.a,{gridColClass:"col-12 col-sm-6 col-md-4 col-lg-3",listColClass:"col-12 col-lg-6",view:p,data:S}),v(a.a,{pageContainerClass:"paginator",totalRecords:u.length,pageLimit:12,pageNeighbours:2,setOffset:n,currentPage:C,setCurrentPage:N}))),v(d.a,null))}}},[["YJY/",0,2,1,4,3,5,6,7,8,9,10,11,12]]]);