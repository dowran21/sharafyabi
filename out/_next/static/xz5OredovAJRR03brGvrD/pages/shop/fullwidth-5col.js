(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"+jos":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.list=void 0;e.list={viewBox:"0 0 1792 1792",children:[{name:"path",attribs:{d:"M256 1312v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM256 928v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM256 544v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM1792 1312v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM256 160v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM1792 928v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM1792 544v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM1792 160v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5z"}}]}},P7bw:function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));var i=a("q1tI"),n=a.n(i),s=a("lmm/"),r=a("uR58"),o=a("X8Wk"),c=a("6jqW"),l=a.n(c),u=a("iDRV"),v=a("+jos"),d=n.a.createElement;function h(t){var e=t.curentView,a=t.getCurrentView,n=t.getCurrentSort,c=t.query,h=t.category_id,q=t.producer_id,p=t.priceMin,f=t.priceMax,m=Object(i.useContext)(r.a),_=m.lang,g=(m.dispatchLang,{PRICE_POINTS:[0,100,200,500,1e3],SORT_TYPES:[{name:o.a[_].default,value:"default"},{name:o.a[_].a_z_sort,value:"az"},{name:o.a[_].z_a_sort,value:"za"},{name:o.a[_].low_sort,value:"lowToHigh"},{name:o.a[_].high_sort,value:"highToLow"}],DEFAULT_VIEW:"grid"}),w=Object(i.useState)(e||g.DEFAULT_VIEW),b=w[0],M=w[1];return Object(i.useEffect)((function(){a&&a(b)}),[b]),d("div",{className:"shop-header "},d("div",{className:"shop-header__view "},d("div",{className:"shop-header__view__icon "},d("a",{href:"#",className:"grid"===b?"active1":"",onClick:function(t){t.preventDefault(),M("grid")}},d(l.a,{icon:u.th,size:21,className:"green1"})),d("a",{href:"#",className:"list"===b?"active1":"",onClick:function(t){t.preventDefault(),M("list")}},d(l.a,{icon:v.list,size:21,className:"green1"}))),"grid"===b&&d("h5",{className:"shop-header__page"})),d(s.a,{options:g.SORT_TYPES,getValue:n,query:c,category_id:h,producer_id:q,priceMin:p,priceMax:f}))}},e6f2:function(t,e,a){"use strict";a.r(e);var i=a("q1tI"),n=a.n(i),s=a("2vfM"),r=a("m9Y6"),o=a("mK+b"),c=a("6QH/"),l=a("iagI"),u=a("fg+H"),v=a("P7bw"),d=a("Npp4"),h=n.a.createElement;e.default=function(){var t=Object(i.useState)(0),e=t[0],a=t[1],n=Object(i.useState)(),q=n[0],p=n[1],f=Object(i.useState)(),m=f[0],_=f[1],g=Object(i.useState)(1),w=g[0],b=g[1],M=Object(i.useState)([]),z=M[0],N=M[1];return Object(i.useEffect)((function(){var t=Object(o.a)(l,m);N(t.slice(e,e+12))}),[e,m]),h(c.default,{title:"Shop Fullwidth 5 columns",container:"wide"},h(r.a,{title:"Shop"},h(r.b,{name:"Home"}),h(r.b,{name:"Shop",current:!0})),h("div",{className:"shop -five-col"},h("div",{className:"container-full-half"},h(v.a,{view:q,getCurrentSort:_,getCurrentView:function(t){return p(t)}}),h(u.a,{fiveCol:!0,listColClass:"col-12 col-lg-6",view:q,data:z}),h(s.a,{pageContainerClass:"paginator",totalRecords:l.length,pageLimit:12,pageNeighbours:2,setOffset:a,currentPage:w,setCurrentPage:b}))),h(d.default,null))}},"fg+H":function(t,e,a){"use strict";a.d(e,"a",(function(){return v}));var i=a("rePB"),n=a("q1tI"),s=a.n(n),r=a("/LDh"),o=a("TSYQ"),c=a.n(o),l=a("uR58"),u=(a("X8Wk"),s.a.createElement);function v(t){var e,a,s=t.gridColClass,o=t.listColClass,v=t.fiveCol,d=t.view,h=(t.data,t.products),q=Object(n.useContext)(l.a);q.lang,q.dispatchLang;return u("div",{className:"shop-products"},"grid"===d?u("div",{className:"shop-products__grid cards1"},h&&u("div",{className:"row"},null===h||void 0===h?void 0:null===(e=h.products)||void 0===e?void 0:e.map((function(t){return u("div",{key:t.id,className:c()(s,{"five-col":v})},u(r.a,{data:t}))})))):u("div",{className:"shop-products__list"},h&&u("div",{className:"row"},null===h||void 0===h?void 0:null===(a=h.products)||void 0===a?void 0:a.map((function(t,e){return u("div",{key:e,className:o},u(r.a,Object(i.a)({type:d,data:t},"type","list")))})))))}},iDRV:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.th=void 0;e.th={viewBox:"0 0 1792 1792",children:[{name:"path",attribs:{d:"M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM512 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1152 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM512 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1152 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1152 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z"}}]}},t3xE:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/fullwidth-5col",function(){return a("e6f2")}])}},[["t3xE",2,1,10,0,4,3,5,7,6,8,9,11,13,12,15,16,17,14,18,19,20]]]);