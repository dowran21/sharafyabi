(this.webpackJsonpgamysh=this.webpackJsonpgamysh||[]).push([[12],{107:function(e,t,a){"use strict";var c=a(131),l=a(2);t.a=function(e){var t=e.limit,a=e.setLimit,n=e.setPage,i=e.count,s=e.page;return Object(l.jsxs)("div",{className:"relative flex flex-row w-full justify-between px-2",children:[Object(l.jsx)("div",{}),Object(l.jsx)(c.a,{pageSize:t,current:s+1,className:"",total:i,showTotal:function(e,t){return Object(l.jsx)("div",{className:"hidden md:flex absolute top-0 left-2",children:"".concat(t[0]," - ").concat(t[1]," \u0438\u0437 ").concat(e)})},onChange:function(e){return n(e-1)}}),Object(l.jsxs)("select",{className:"focus:outline-none p-1",value:t,onChange:function(e){return a(e.target.value)},children:[Object(l.jsx)("option",{value:10,children:"10"}),Object(l.jsx)("option",{value:20,children:"20"}),Object(l.jsx)("option",{value:30,children:"30"}),Object(l.jsx)("option",{value:40,children:"40"}),Object(l.jsx)("option",{value:50,children:"50"})]})]})}},271:function(e,t,a){var c=a(79).GenIcon;e.exports.GoSearch=function(e){return c({tag:"svg",attr:{viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"}}]})(e)}},285:function(e,t,a){"use strict";a.r(t);var c=a(22),l=a(12),n=a(81),i=a(9),s=a(83),r=a(82),d=a(0);var o=function(e){var t=e.action,a=e.time,c=Object(d.useState)(0),n=Object(l.a)(c,2),i=n[0],s=n[1];return function(e){i&&clearTimeout(i),s(setTimeout((function(){t(e)}),a))}},u=a(271),b=a(2);var j=function(e){var t=e.placeholder,a=e.action,c=o({time:1500,action:function(e){return a(e)}});return Object(b.jsxs)("div",{className:"relative w-full",children:[Object(b.jsx)("div",{className:"absolute top-1 left-2 inset-y-0 flex items-center pl-1",children:Object(b.jsx)(u.GoSearch,{className:"text-xl text-indigo-600","aria-hidden":"true"})}),Object(b.jsx)("input",{className:"pr-4 pl-10 h-10 text-gray-700 rounded-2xl appearance-none w-full bg-white shadow-sm placeholder-gray-400 focus:shadow-inner text-sm focus:outline-none",onChange:function(e){return c(e.target.value)},type:"search",name:"search",id:"search",placeholder:t})]})},x=a(85),m=a(86),p=a(87),f=a(97),h=a(98),O=a(13),g=a(80),v=a(14),y=a(16),_=a(29),w=a(96);var N=function(e){return f.c().shape({name_tm:"sale"===e?f.d().nullable(!0):f.d().min(5,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(50,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),description_tm:"sale"===e?f.d().nullable(!0):f.d().min(10,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(50,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),name_ru:"sale"===e?f.d().nullable(!0):f.d().min(5,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(50,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),description_ru:"sale"===e?f.d().nullable(!0):f.d().min(10,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(50,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),name_en:"sale"===e?f.d().nullable(!0):f.d().min(5,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(50,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),description_en:"sale"===e?f.d().nullable(!0):f.d().min(10,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(50,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),price:"sale"===e?f.d().nullable(!0):f.b().min(0).max(1e5,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 1000000").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),stock:"sale"===e?f.d().nullable(!0):f.b().min(0).max(1e5,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 1000000").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),producer_id:"sale"===e?f.d().nullable(!0):f.b().min(1,"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043b\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043b\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),category_id:"sale"===e?f.d().nullable(!0):f.b().min(1,"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043b\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043b\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),product_id:"sale"===e?f.b().required():f.d().nullable(!0)})},S=function(e){var t,a,c,n,r,o,u,j,x,f,S,E,T,C=e.visible,M=e.values,D=e.form,A=e.token,k=e.setCloseModal,z=e.title,L=e.addedProduct,P=e.setUploadedImage,V=e.updateProduct,F=e.addSale,H=Object(d.useState)([]),I=Object(l.a)(H,2),R=I[0],U=I[1],B=Object(d.useState)([]),G=Object(l.a)(B,2),q=G[0],J=G[1],Y=Object(p.d)({resolver:Object(h.a)(N(D)),defaultValues:Object(i.a)({},M)}),K=Y.register,Q=Y.handleSubmit,W=Y.formState.errors,X=Y.watch,Z=Y.reset,$=Y.setValue,ee=Object(O.b)();Object(d.useEffect)((function(){"update"===D&&($("name_tm",M.name_tm),$("description_tm",M.description_tm),$("name_ru",M.name_ru),$("description_ru",M.description_ru),$("name_en",M.name_en),$("description_en",M.description_en),$("price",M.price),$("stock",M.stock),$("category_id",M.category_id),$("producer_id",M.producer_id)),"sale"===D&&($("product_id",M.id),$("discount_type_id",1),$("min_value",1))}),[D]);var te=Object(d.useState)(),ae=Object(l.a)(te,2),ce=ae[0],le=ae[1],ne=Object(d.useState)(),ie=Object(l.a)(ne,2),se=ie[0],re=ie[1],de=Object(d.useState)(!1),oe=Object(l.a)(de,2),ue=oe[0],be=oe[1],je=Object(d.useState)(!1),xe=Object(l.a)(je,2),me=xe[0],pe=xe[1];return Object(d.useEffect)((function(){ee(Object(g.a)({url:"api/admin/producers",token:A,action:function(e){e.success?U(e.data.rows):v.b.error("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430")}}))}),[]),Object(d.useEffect)((function(){ee(Object(g.a)({url:"api/admin/categories",token:A,action:function(e){e.success?J(e.data.rows):v.b.error("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430")}}))}),[]),Object(b.jsx)(m.a,{size:"lg",visible:C,title:z,setCloseModal:function(){k(),Z({}),le(null),pe(!1),re(null)},children:Object(b.jsxs)("form",{onSubmit:Q((function(e){console.log(e),be(!0),ee(Object(g.b)({url:"add"===D?"api/admin/add-product":"update"===D?"api/admin/update-product/".concat(M.id):"sale"===D?"api/admin/add-sale":"",token:A,data:e,action:function(e){if(e.success)if("add"===D&&L(e.data.rows),"update"===D&&(console.log("hello some update"),V(e.data.rows)),"sale"===D&&(console.log(e.data.rows),F(e.data.rows)),ce){var t="add"===D?e.data.rows.id:M.id,a=new FormData,c={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(A)}};a.append("picture",ce),_.b.post("api/admin/add-product-image/".concat(t),a,c).then((function(e){console.log(e.data),e&&(P({id:t,destination:e.data.rows.destination}),k(),Z({}))})).catch((function(e){v.b.error("\u041d\u0435 \u0441\u043c\u043e\u0433 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e")})),Z({}),le(null),pe(!1),re(null)}else k(),Z({}),le(null),pe(!1),re(null);else v.b.error("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430"),k(),Z({}),pe(!1),le(null),re(null)}})),be(!1),le(null)})),children:["sale"===D?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"relative w-full mt-2",children:[Object(b.jsx)("label",{children:"\u0421\u043a\u0438\u0434\u043a\u0430 (\u0432 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u0430\u0445)"}),Object(b.jsx)("input",Object(i.a)(Object(i.a)({type:"text"},K("discount_value")),{},{autoComplete:"false",className:"".concat(W.discount_value?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-10 w-full text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 50"})),Object(b.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(t=W.discount_value)||void 0===t?void 0:t.message})]}),Object(b.jsxs)("div",{className:"py-3 flex flex-col",children:[Object(b.jsx)("label",{className:"pl-2 pb-3",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"}),Object(b.jsx)("input",Object(i.a)(Object(i.a)({},K("start_date")),{},{type:"text",onFocus:function(e){e.currentTarget.type="date"},onBlur:function(e){return e.currentTarget.type="text"},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e",className:"ring-indigo-600 px-3 shadow-inner h-12 text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2"})),Object(b.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(a=W.start_date)||void 0===a?void 0:a.message})]}),Object(b.jsxs)("div",{className:"py-3 flex flex-col",children:[Object(b.jsx)("label",{className:"pl-2 pb-3",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"}),Object(b.jsx)("input",Object(i.a)(Object(i.a)({},K("end_date")),{},{type:"text",onFocus:function(e){e.currentTarget.type="date"},onBlur:function(e){return e.currentTarget.type="text"},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e",className:"ring-indigo-600 px-3 shadow-inner h-12 text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2"})),Object(b.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(c=W.end_date)||void 0===c?void 0:c.message})]})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"flex flex-row",children:[Object(b.jsxs)("div",{className:"w-1/3 px-2",children:[Object(b.jsxs)("div",{className:"relative w-full mb-6",children:[Object(b.jsx)("label",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u043d\u0430 \u0442\u0443\u0440\u043a\u043c\u0435\u043d\u0441\u043a\u043e\u043c"}),Object(b.jsx)("input",Object(i.a)(Object(i.a)({type:"text"},K("name_tm")),{},{autoComplete:"false",name:"name_tm",className:"".concat(W.name_tm?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-10 w-full text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"Max-Deluxe"})),Object(b.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(n=W.name_tm)||void 0===n?void 0:n.message})]}),Object(b.jsxs)("div",{className:"flex flex-col w-full relative mb-6 p-2",children:[Object(b.jsx)("label",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0442\u0443\u0440\u043a\u043c\u0435\u043d\u0441\u043a\u043e\u043c"}),Object(b.jsx)("textarea",Object(i.a)(Object(i.a)({type:"text"},K("description_tm")),{},{name:"description_tm",autoComplete:"false",className:"".concat(W.description_tm?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-24 text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c"})),Object(b.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(r=W.description_tm)||void 0===r?void 0:r.message})]})]}),Object(b.jsxs)("div",{className:"w-1/3 px-2",children:[Object(b.jsxs)("div",{className:"relative w-full mb-6",children:[Object(b.jsx)("label",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c"}),Object(b.jsx)("input",Object(i.a)(Object(i.a)({type:"text"},K("name_ru")),{},{autoComplete:"false",name:"name_ru",className:"".concat(W.name_ru?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-10 w-full text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"Max-Deluxe"})),Object(b.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(o=W.name_ru)||void 0===o?void 0:o.message})]}),Object(b.jsxs)("div",{className:"flex flex-col w-full relative mb-6 p-2",children:[Object(b.jsx)("label",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c"}),Object(b.jsx)("textarea",Object(i.a)(Object(i.a)({type:"text"},K("description_ru")),{},{name:"description_ru",autoComplete:"false",className:"".concat(W.description_ru?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-24 text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c"})),Object(b.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(u=W.description_ru)||void 0===u?void 0:u.message})]})]}),Object(b.jsxs)("div",{className:"w-1/3 px-2",children:[Object(b.jsxs)("div",{className:"relative w-full mb-6",children:[Object(b.jsx)("label",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c"}),Object(b.jsx)("input",Object(i.a)(Object(i.a)({type:"text"},K("name_en")),{},{autoComplete:"false",name:"name_en",className:"".concat(W.name_en?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-10 w-full text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"Max-Deluxe"})),Object(b.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(j=W.name_en)||void 0===j?void 0:j.message})]}),Object(b.jsxs)("div",{className:"flex flex-col w-full relative mb-6 p-2",children:[Object(b.jsx)("label",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c"}),Object(b.jsx)("textarea",Object(i.a)(Object(i.a)({type:"text"},K("description_en")),{},{name:"description_en",autoComplete:"false",className:"".concat(W.description_en?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-24 text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c"})),Object(b.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(x=W.description_en)||void 0===x?void 0:x.message})]})]})]}),Object(b.jsxs)("div",{className:"flex flex-row",children:[Object(b.jsx)("div",{className:"w-1/2 ",children:Object(b.jsxs)("div",{className:"flex flex-col",children:[Object(b.jsxs)("div",{className:"flex flex-col w-full relative mb-6 ",children:[Object(b.jsx)("label",{children:"\u0426\u0435\u043d\u0430"}),Object(b.jsx)("input",Object(i.a)(Object(i.a)({type:"text"},K("price")),{},{autoComplete:"false",name:"price",className:"".concat(W.price?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-10 w-full text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"150"})),Object(b.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(f=W.price)||void 0===f?void 0:f.message})]}),Object(b.jsxs)("div",{className:"flex flex-col w-full relative mb-6 ",children:[Object(b.jsx)("label",{children:"\u041e\u0441\u0442\u0430\u0442\u043e\u043a"}),Object(b.jsx)("input",Object(i.a)(Object(i.a)({type:"text"},K("stock")),{},{autoComplete:"false",name:"stock",className:"".concat(W.stock?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-10 w-full text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"150"})),Object(b.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(S=W.stock)||void 0===S?void 0:S.message})]}),Object(b.jsxs)("div",{className:"flex flex-col w-full relative mb-6 ",children:[Object(b.jsx)("label",{children:"\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f"}),Object(b.jsxs)("select",{value:X("producer_id"),onChange:function(e){return $("producer_id",e.target.value)},className:"px-3 py-2 placeholder-gray-400 text-gray-700 dark:text-gray-200  bg-white dark:bg-gray-700 rounded text-sm focus:outline-none  border-0 ring-1 ring-gray-300 dark:ring-gray-800 focus:ring-purple-700 dark:focus:ring-2 dark:focus:ring-gray-600 w-full cursor-pointer",children:[Object(b.jsx)("option",{value:0,children:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c"},0),R.length>0&&R.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(b.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(E=W.producer_id)||void 0===E?void 0:E.message})]}),Object(b.jsxs)("div",{className:"flex flex-col w-full relative mb-6 ",children:[Object(b.jsx)("label",{children:"\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"}),Object(b.jsxs)("select",{value:X("category_id"),onChange:function(e){return $("category_id",e.target.value)},className:"px-3 py-2 placeholder-gray-400 text-gray-700 dark:text-gray-200  bg-white dark:bg-gray-700 rounded text-sm focus:outline-none  border-0 ring-1 ring-gray-300 dark:ring-gray-800 focus:ring-purple-700 dark:focus:ring-2 dark:focus:ring-gray-600 w-full cursor-pointer",children:[Object(b.jsx)("option",{value:0,children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"},0),q.length>0&&q.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name_ru},e.id)}))]}),Object(b.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(T=W.category_id)||void 0===T?void 0:T.message})]})]})}),"add"===D||!(null===M||void 0===M?void 0:M.destination)||me?Object(b.jsxs)("div",{className:"w-1/2 flex flex-col justify-center items-center",children:[Object(b.jsxs)("div",{className:"p-2",children:[Object(b.jsx)("label",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b"}),Object(b.jsx)("input",{type:"file",name:"picture",className:"px-3 py-5",onChange:function(e){return function(e){le(e.target.files[0]),re(URL.createObjectURL(e.target.files[0]))}(e)}})]}),Object(b.jsx)("div",{className:"w-96 h-full",children:se?Object(b.jsx)("img",{className:"p-1 px-3 ",alt:"Hello world",src:se}):Object(b.jsx)(b.Fragment,{})})]}):"update"===D?Object(b.jsxs)("div",{className:"flex flex-row relative justify-center items-center w-96 h-full p-1 px-5",children:[Object(b.jsx)("div",{className:"absolute right-0 top-0 rounded-full",children:Object(b.jsx)(s.a,{tooltip:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",handleClick:function(){return pe(!0)},icon:Object(b.jsx)(w.BiTrash,{className:"text-2xl "})})}),Object(b.jsx)("img",{className:"object-contain rounded-md ",src:"".concat("http://45.93.136.141:7010","/").concat(null===M||void 0===M?void 0:M.destination,"-big.webp"),alt:"CTYPES"})]}):Object(b.jsx)(b.Fragment,{})]})]}),Object(b.jsx)("div",{className:"w-full flex justify-center items-center",children:Object(b.jsx)("button",{type:"submit",disabled:ue,className:"w-48 flex remove-button-bg justify-center items-center px-4 h-10 text-white transform ease-in-out duration-300 hover:scale-110 active:scale-100 font-semibold text-base rounded-full bg-green-500 hover:bg-green-400 active:bg-green-500 focus:outline-none shadow-md",children:ue?Object(b.jsx)(y.a,{loading:ue}):Object(b.jsx)(b.Fragment,{children:"add"===D?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c":"update"===D?"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c":"sale"===D?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043a\u0438\u0434\u043a\u0443":""})})})]})})},E=a(90),T=a(91),C=a(93),M=a(89),D=a(92),A=a(102),k=a(106),z=a(95),L=a(155),P=a(107);function V(e,t){switch(console.log(t),t.type){case"ADD_FORM":return Object(i.a)(Object(i.a)({},e),{},{visible:!0,form:"add",values:"",title:"\u0424\u043e\u0440\u043c\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f"});case"SET_CLOSE_MODAL":return Object(i.a)(Object(i.a)({},e),{},{visible:!1,form:""});case"SET_DATA":return Object(i.a)(Object(i.a)({},e),{},{data:t.payload.products,count:+t.payload.count,loading:!1});case"SET_LOADING":return Object(i.a)(Object(i.a)({},e),{},{loading:t.payload});case"UPDATE_FORM":return Object(i.a)(Object(i.a)({},e),{},{visible:!0,values:t.payload,form:"update",title:"\u0424\u043e\u0440\u043c\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"});case"ADD_PRODUCT":return Object(i.a)(Object(i.a)({},e),{},{data:[].concat(Object(n.a)(e.data),[t.payload])});case"SET_UPLOADED_IMAGE":return Object(i.a)(Object(i.a)({},e),{},{data:e.data.map((function(e){return e.id===t.payload.id&&(e.destination=t.payload.destination),e})),visible:!1});case"SALE_FORM":return Object(i.a)(Object(i.a)({},e),{},{form:"sale",visible:!0,title:"\u0424\u043e\u0440\u043c\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043a\u0438\u0434\u043a\u0438",values:t.payload});case"UPDATE_PRODUCT":return Object(i.a)(Object(i.a)({},e),{},{data:e.data.map((function(e){return e.id===+t.payload.id&&(e=t.payload),e}))});case"SET_LIMIT":return Object(i.a)(Object(i.a)({},e),{},{limit:t.payload,page:0,trigger:!e.trigger,loading:!0});case"SET_PAGE":return Object(i.a)(Object(i.a)({},e),{},{page:t.payload,trigger:!e.trigger,loading:!0});case"SET_SEACRH":return Object(i.a)(Object(i.a)({},e),{},{search:t.payload,trigger:!e.trigger,page:0,loading:!0});case"ADD_SALE":return Object(i.a)(Object(i.a)({},e),{},{data:e.data.map((function(e){return e.id===+t.payload.product_id&&(e.discount_id=t.payload.id,e.discount_value=t.payload.discount_value,e.low_val=t.payload.low,e.upper_val=t.payload.upper),e}))});default:return e}}var F=function(e){var t=e.handleClick,a=e.handleSearch;return Object(b.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[Object(b.jsx)(s.a,{tooltip:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442",handleClick:t,icon:Object(b.jsx)(r.IoMdAdd,{className:"text-2xl "})}),Object(b.jsx)("div",{className:"w-80",children:Object(b.jsx)(j,{action:function(e){return a(e)},placeholder:"\u041f\u043e\u0438\u0441\u043a"})})]})};t.default=function(){var e,t,a=Object(d.useReducer)(V,(e={visible:!1,form:"",title:"",data:[],page:0,limit:30,count:0,values:"",loading:!0},Object(c.a)(e,"limit",20),Object(c.a)(e,"search",""),e)),n=Object(l.a)(a,2),i=n[0],r=n[1],o=Object(O.b)(),u=Object(O.c)((function(e){return e.auth.token}));return Object(d.useEffect)((function(){o(Object(g.a)({url:"api/admin/products?page=".concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),token:u,action:function(e){e.success?r({type:"SET_DATA",payload:e.data.rows}):(v.b.error("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430"),r({type:"SET_LOADING",payload:!1}))}}))}),[i.trigger]),Object(b.jsxs)(x.a,{header:Object(b.jsx)(F,{handleClick:function(){return r({type:"ADD_FORM",payload:""})},handleSearch:function(e){return r({type:"SET_SEACRH",payload:e})}}),footer:Object(b.jsx)(P.a,{setPage:function(e){return r({type:"SET_PAGE",payload:e})},limit:+i.limit,count:+i.count,page:i.page,setLimit:function(e){return r({type:"SET_LIMIT",payload:e})}}),children:[Object(b.jsx)(S,{visible:i.visible,title:i.title,form:i.form,token:u,values:i.values,setCloseModal:function(){return r({type:"SET_CLOSE_MODAL",payload:""})},addedProduct:function(e){return r({type:"ADD_PRODUCT",payload:e})},setUploadedImage:function(e){return r({type:"SET_UPLOADED_IMAGE",payload:e})},updateProduct:function(e){return r({type:"UPDATE_PRODUCT",payload:e})},addSale:function(e){return r({type:"ADD_SALE",payload:e})}}),Object(b.jsx)(y.a,{loading:i.loading}),Object(b.jsx)("div",{className:"w-full h-full px-6 overflow-y-auto pb-20 ",children:Object(b.jsxs)(E.a,{children:[Object(b.jsx)(T.a,{children:Object(b.jsx)(C.a,{children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"ID"})}),Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u0418\u043c\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"})}),Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u0426\u0435\u043d\u0430"})}),Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u041e\u0441\u0442\u0430\u0442\u043e\u043a"})}),Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c"})}),Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"})}),Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f"})}),Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u0421\u043a\u0438\u0434\u043a\u0430"})}),Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"})})]})})}),Object(b.jsx)(D.a,{children:(null===(t=i.data)||void 0===t?void 0:t.length)>0?i.data.map((function(e){return Object(b.jsx)(C.a,{children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:"p-2",children:null===e||void 0===e?void 0:e.id})}),Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:"p-2",children:null===e||void 0===e?void 0:e.name_ru})}),Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:"p-2",children:null===e||void 0===e?void 0:e.price})}),Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:"p-2",children:null===e||void 0===e?void 0:e.stock})}),Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:"p-2",children:null===e||void 0===e?void 0:e.producer_name})}),Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:"p-2",children:null===e||void 0===e?void 0:e.category_name})}),Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:"p-2 flex justify-center items-center",children:(null===e||void 0===e?void 0:e.destination)?Object(b.jsx)("img",{className:"object-contain rounded-md w-28 h-28",src:"".concat("http://45.93.136.141:7010","/").concat(null===e||void 0===e?void 0:e.destination,"-big.webp"),alt:"CTYPES"}):Object(b.jsx)(A.BsImage,{className:"text-4xl text-gray-500 opacity-80"})})}),Object(b.jsx)(M.a,{children:Object(b.jsx)("div",{className:"p-2",children:(null===e||void 0===e?void 0:e.discount_id)?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:e.discount_value}),Object(b.jsxs)("p",{children:["\u043e\u0442 ",e.low_val.substring(0,10)]}),Object(b.jsxs)("p",{children:["\u0434\u043e ",e.upper_val.substring(0,10)]})]}):"No"})}),Object(b.jsx)(M.a,{children:Object(b.jsxs)("div",{className:"p-2 flex flex-row",children:[Object(b.jsx)(s.a,{tooltip:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",handleClick:function(){return r({type:"UPDATE_FORM",payload:e})},icon:Object(b.jsx)(z.BiEdit,{className:"text-2xl"})}),!(null===e||void 0===e?void 0:e.discount_id)&&Object(b.jsx)(s.a,{tooltip:"\u0421\u043a\u0438\u0434\u043a\u0438",handleClick:function(){return r({type:"SALE_FORM",payload:e})},icon:Object(b.jsx)(L.FcSalesPerformance,{className:"text-2xl"})})]})})]})},null===e||void 0===e?void 0:e.id)})):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("tr",{children:Object(b.jsx)("td",{colSpan:"10",children:Object(b.jsx)("div",{className:"flex w-full h-full py-20 justify-center items-center",children:Object(b.jsx)(k.a,{title:"\u041d\u0435\u0442 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432"})})})})})})]})})]})}},82:function(e,t,a){var c=a(79).GenIcon;e.exports.IoMdAdd=function(e){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"}}]})(e)}},95:function(e,t,a){var c=a(79).GenIcon;e.exports.BiEdit=function(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7,17.013l4.413-0.015l9.632-9.54c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414l-1.586-1.586\tc-0.756-0.756-2.075-0.752-2.825-0.003L7,12.583V17.013z M18.045,4.458l1.589,1.583l-1.597,1.582l-1.586-1.585L18.045,4.458z M9,13.417l6.03-5.973l1.586,1.586l-6.029,5.971L9,15.006V13.417z"}},{tag:"path",attr:{d:"M5,21h14c1.103,0,2-0.897,2-2v-8.668l-2,2V19H8.158c-0.026,0-0.053,0.01-0.079,0.01c-0.033,0-0.066-0.009-0.1-0.01H5V5\th6.847l2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z"}}]})(e)}},96:function(e,t,a){var c=a(79).GenIcon;e.exports.BiTrash=function(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"}},{tag:"path",attr:{d:"M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"}},{tag:"path",attr:{d:"M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"}}]})(e)}}}]);
//# sourceMappingURL=12.ae4b1845.chunk.js.map