(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"+jos":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.list=void 0;e.list={viewBox:"0 0 1792 1792",children:[{name:"path",attribs:{d:"M256 1312v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM256 928v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM256 544v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM1792 1312v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM256 160v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM1792 928v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM1792 544v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM1792 160v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5z"}}]}},P7bw:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("q1tI"),a=n.n(r),i=n("lmm/"),o=n("uR58"),c=n("X8Wk"),s=n("6jqW"),u=n.n(s),l=n("iDRV"),v=n("+jos"),h=a.a.createElement;function d(t){var e=t.curentView,n=t.getCurrentView,a=t.getCurrentSort,s=t.query,d=t.category_id,f=t.producer_id,q=t.priceMin,p=t.priceMax,g=Object(r.useContext)(o.a),m=g.lang,w=(g.dispatchLang,{PRICE_POINTS:[0,100,200,500,1e3],SORT_TYPES:[{name:c.a[m].default,value:"default"},{name:c.a[m].a_z_sort,value:"az"},{name:c.a[m].z_a_sort,value:"za"},{name:c.a[m].low_sort,value:"lowToHigh"},{name:c.a[m].high_sort,value:"highToLow"}],DEFAULT_VIEW:"grid"}),_=Object(r.useState)(e||w.DEFAULT_VIEW),b=_[0],C=_[1];return Object(r.useEffect)((function(){n&&n(b)}),[b]),h("div",{className:"shop-header "},h("div",{className:"shop-header__view "},h("div",{className:"shop-header__view__icon "},h("a",{href:"#",className:"grid"===b?"active1":"",onClick:function(t){t.preventDefault(),C("grid")}},h(u.a,{icon:l.th,size:21,className:"green1"})),h("a",{href:"#",className:"list"===b?"active1":"",onClick:function(t){t.preventDefault(),C("list")}},h(u.a,{icon:v.list,size:21,className:"green1"}))),"grid"===b&&h("h5",{className:"shop-header__page"})),h(i.a,{options:w.SORT_TYPES,getValue:a,query:s,category_id:d,producer_id:f,priceMin:q,priceMax:p}))}},"YJY/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/fullwidth-4col",function(){return n("v12Y")}])},"fg+H":function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n("rePB"),a=n("q1tI"),i=n.n(a),o=n("/LDh"),c=n("TSYQ"),s=n.n(c),u=n("uR58"),l=(n("X8Wk"),i.a.createElement);function v(t){var e,n,i=t.gridColClass,c=t.listColClass,v=t.fiveCol,h=t.view,d=(t.data,t.products),f=Object(a.useContext)(u.a);f.lang,f.dispatchLang;return l("div",{className:"shop-products"},"grid"===h?l("div",{className:"shop-products__grid"},d&&l("div",{className:"row"},null===d||void 0===d?void 0:null===(e=d.products)||void 0===e?void 0:e.map((function(t){return l("div",{key:t.id,className:s()(i,{"five-col":v})},l(o.a,{data:t}))})))):l("div",{className:"shop-products__list"},d&&l("div",{className:"row"},null===d||void 0===d?void 0:null===(n=d.products)||void 0===n?void 0:n.map((function(t,e){return l("div",{key:e,className:c},l(o.a,Object(r.a)({type:h,data:t},"type","list")))})))))}},iDRV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.th=void 0;e.th={viewBox:"0 0 1792 1792",children:[{name:"path",attribs:{d:"M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM512 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1152 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM512 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1152 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1152 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z"}}]}},"mK+b":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c}));var r=function(t,e,n,r){var a=(e=e&&"all"===e.toLowerCase()?"":e)?t.filter((function(t){return t.category.toLowerCase()===e.toLowerCase()})):t;if(n&&"new"===n){var i=a.filter((function(t){return t.new}));return i.slice(0,r||i.length)}return a&&a.slice(0,r||a.length)},a=function(t,e,n){function r(e,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?-1:1;return t.slice(0,n||t.length).sort((function(t,e){return t[r]<e[r]?-1*a:t[r]>e[r]?1*a:0}))}return e&&"default"!==e?"az"===e?r(t,"name"):"za"===e?r(t,"name",!0):"lowToHigh"===e?r(t,"price"):"highToLow"===e?r(t,"price",!0):t.slice(0,n||t.length):t},i=function(t,e,n,r){return e&&!n?t.filter((function(t){return t.price>e})):!e&&n?t.filter((function(t){return t.price<n})):e||n?t.filter((function(t){return t.price>e&&t.price<n})):t},o=function(t,e){return e?t.filter((function(t){return t.brand.toLowerCase()===e.toLowerCase()})):t},c=function(t,e,n,c,s,u,l){var v;if(n){var h=r(t,n);if(s&&!u){var d=i(h,c,s);v=a(d,e)}else if(!s&&u){var f=o(h,u);v=a(f,e)}else if(s&&u){var q=o(h,u),p=i(h,c,s),g=q.filter((function(t){return p.some((function(e){return t.id===e.id}))}));v=a(g,e)}else v=a(h,e)}else v=a(t,e);return v.slice(0,l||t.length)}},v12Y:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),i=n("2vfM"),o=n("m9Y6"),c=n("mK+b"),s=n("6QH/"),u=n("iagI"),l=n("fg+H"),v=n("P7bw"),h=n("Npp4"),d=a.a.createElement;e.default=function(){var t=Object(r.useState)(0),e=t[0],n=t[1],a=Object(r.useState)(),f=a[0],q=a[1],p=Object(r.useState)(),g=p[0],m=p[1],w=Object(r.useState)(1),_=w[0],b=w[1],C=Object(r.useState)([]),z=C[0],M=C[1];return Object(r.useEffect)((function(){var t=Object(c.b)(u,g);M(t.slice(e,e+12))}),[e,g]),d(s.a,{title:"Shop Fullwidth 4 columns",container:"wide"},d(o.a,{title:"Shop"},d(o.b,{name:"Home"}),d(o.b,{name:"Shop",current:!0})),d("div",{className:"shop"},d("div",{className:"container-full-half"},d(v.a,{view:f,getCurrentSort:m,getCurrentView:function(t){return q(t)}}),d(l.a,{gridColClass:"col-12 col-sm-6 col-md-4 col-lg-3",listColClass:"col-12 col-lg-6",view:f,data:z}),d(i.a,{pageContainerClass:"paginator",totalRecords:u.length,pageLimit:12,pageNeighbours:2,setOffset:n,currentPage:_,setCurrentPage:b}))),d(h.a,null))}}},[["YJY/",0,2,1,4,3,5,6,7,8,9,10,11]]]);