(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"+jos":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.list=void 0;e.list={viewBox:"0 0 1792 1792",children:[{name:"path",attribs:{d:"M256 1312v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM256 928v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM256 544v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM1792 1312v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM256 160v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM1792 928v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM1792 544v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM1792 160v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5z"}}]}},P7bw:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n("q1tI"),r=n.n(i),a=n("lmm/"),o=n("6jqW"),c=n.n(o),u=n("iDRV"),s=n("+jos"),l=r.a.createElement,v={PRICE_POINTS:[0,100,200,500,1e3],SORT_TYPES:[{name:"Default",value:"default"},{name:"A to Z Sorting",value:"az"},{name:"Z to A Sorting",value:"za"},{name:"Low to High Price Sorting",value:"lowToHigh"},{name:"High to Low Price Sorting",value:"highToLow"}],DEFAULT_VIEW:"grid"};function h(t){var e=t.curentView,n=t.getCurrentView,r=t.getCurrentSort,o=t.query,h=t.category_id,d=t.producer_id,f=t.priceMin,q=t.priceMax,p=Object(i.useState)(e||v.DEFAULT_VIEW),g=p[0],m=p[1];return Object(i.useEffect)((function(){n&&n(g)}),[g]),l("div",{className:"shop-header"},l("div",{className:"shop-header__view"},l("div",{className:"shop-header__view__icon"},l("a",{href:"#",className:"grid"===g?"active1":"",onClick:function(t){t.preventDefault(),m("grid")}},l(c.a,{icon:u.th,size:21,className:"green1"})),l("a",{href:"#",className:"list"===g?"active1":"",onClick:function(t){t.preventDefault(),m("list")}},l(c.a,{icon:s.list,size:21,className:"green1"}))),"grid"===g&&l("h5",{className:"shop-header__page"})),l(a.a,{options:v.SORT_TYPES,getValue:r,query:o,category_id:h,producer_id:d,priceMin:f,priceMax:q}))}},"YJY/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/fullwidth-4col",function(){return n("v12Y")}])},"fg+H":function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var i=n("rePB"),r=n("q1tI"),a=n.n(r),o=n("/LDh"),c=n("TSYQ"),u=n.n(c),s=n("uR58"),l=(n("X8Wk"),a.a.createElement);function v(t){var e,n,a=t.gridColClass,c=t.listColClass,v=t.fiveCol,h=t.view,d=(t.data,t.products),f=Object(r.useContext)(s.a);f.lang,f.dispatchLang;return l("div",{className:"shop-products"},"grid"===h?l("div",{className:"shop-products__grid"},d&&l("div",{className:"row"},null===d||void 0===d?void 0:null===(e=d.products)||void 0===e?void 0:e.map((function(t){return l("div",{key:t.id,className:u()(a,{"five-col":v})},l(o.a,{data:t}))})))):l("div",{className:"shop-products__list"},d&&l("div",{className:"row"},null===d||void 0===d?void 0:null===(n=d.products)||void 0===n?void 0:n.map((function(t,e){return l("div",{key:e,className:c},l(o.a,Object(i.a)({type:h,data:t},"type","list")))})))))}},iDRV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.th=void 0;e.th={viewBox:"0 0 1792 1792",children:[{name:"path",attribs:{d:"M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM512 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1152 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM512 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1152 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1152 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z"}}]}},"mK+b":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var i=function(t,e,n,i){var r=(e=e&&"all"===e.toLowerCase()?"":e)?t.filter((function(t){return t.category.toLowerCase()===e.toLowerCase()})):t;if(n&&"new"===n){var a=r.filter((function(t){return t.new}));return a.slice(0,i||a.length)}return r&&r.slice(0,i||r.length)},r=function(t,e,n){function i(e,i){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?-1:1;return t.slice(0,n||t.length).sort((function(t,e){return t[i]<e[i]?-1*r:t[i]>e[i]?1*r:0}))}return e&&"default"!==e?"az"===e?i(t,"name"):"za"===e?i(t,"name",!0):"lowToHigh"===e?i(t,"price"):"highToLow"===e?i(t,"price",!0):t.slice(0,n||t.length):t},a=function(t,e,n,i){return e&&!n?t.filter((function(t){return t.price>e})):!e&&n?t.filter((function(t){return t.price<n})):e||n?t.filter((function(t){return t.price>e&&t.price<n})):t},o=function(t,e){return e?t.filter((function(t){return t.brand.toLowerCase()===e.toLowerCase()})):t},c=function(t,e,n,c,u,s,l){var v;if(n){var h=i(t,n);if(u&&!s){var d=a(h,c,u);v=r(d,e)}else if(!u&&s){var f=o(h,s);v=r(f,e)}else if(u&&s){var q=o(h,s),p=a(h,c,u),g=q.filter((function(t){return p.some((function(e){return t.id===e.id}))}));v=r(g,e)}else v=r(h,e)}else v=r(t,e);return v.slice(0,l||t.length)}},v12Y:function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),r=n.n(i),a=n("2vfM"),o=n("m9Y6"),c=n("mK+b"),u=n("6QH/"),s=n("iagI"),l=n("fg+H"),v=n("P7bw"),h=n("Npp4"),d=r.a.createElement;e.default=function(){var t=Object(i.useState)(0),e=t[0],n=t[1],r=Object(i.useState)(),f=r[0],q=r[1],p=Object(i.useState)(),g=p[0],m=p[1],w=Object(i.useState)(1),_=w[0],b=w[1],C=Object(i.useState)([]),M=C[0],z=C[1];return Object(i.useEffect)((function(){var t=Object(c.b)(s,g);z(t.slice(e,e+12))}),[e,g]),d(u.a,{title:"Shop Fullwidth 4 columns",container:"wide"},d(o.a,{title:"Shop"},d(o.b,{name:"Home"}),d(o.b,{name:"Shop",current:!0})),d("div",{className:"shop"},d("div",{className:"container-full-half"},d(v.a,{view:f,getCurrentSort:m,getCurrentView:function(t){return q(t)}}),d(l.a,{gridColClass:"col-12 col-sm-6 col-md-4 col-lg-3",listColClass:"col-12 col-lg-6",view:f,data:M}),d(a.a,{pageContainerClass:"paginator",totalRecords:s.length,pageLimit:12,pageNeighbours:2,setOffset:n,currentPage:_,setCurrentPage:b}))),d(h.a,null))}}},[["YJY/",0,2,1,3,4,6,5,7,8,9,11]]]);