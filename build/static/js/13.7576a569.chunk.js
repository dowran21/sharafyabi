(this.webpackJsonpgamysh=this.webpackJsonpgamysh||[]).push([[13],{267:function(e,t,a){var c=a(77).GenIcon;e.exports.GoSearch=function(e){return c({tag:"svg",attr:{viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"}}]})(e)}},276:function(e,t,a){"use strict";a.r(t);var c=a(12),l=a(79),n=a(9),s=a(80),i=a(83),r=a(0);var d=function(e){var t=e.action,a=e.time,l=Object(r.useState)(0),n=Object(c.a)(l,2),s=n[0],i=n[1];return function(e){s&&clearTimeout(s),i(setTimeout((function(){t(e)}),a))}},o=a(267),u=a(2);var b=function(e){var t=e.placeholder,a=e.action,c=d({time:1500,action:function(e){return a(e)}});return Object(u.jsxs)("div",{className:"relative w-full",children:[Object(u.jsx)("div",{className:"absolute top-1 left-2 inset-y-0 flex items-center pl-1",children:Object(u.jsx)(o.GoSearch,{className:"text-xl text-indigo-600","aria-hidden":"true"})}),Object(u.jsx)("input",{className:"pr-4 pl-10 h-10 text-gray-700 rounded-2xl appearance-none w-full bg-white shadow-sm placeholder-gray-400 focus:shadow-inner text-sm focus:outline-none",onChange:function(e){return c(e.target.value)},type:"search",name:"search",id:"search",placeholder:t})]})},j=a(81),m=a(91),x=a(84),p=a(95),f=a(96),h=a(13),O=a(78),g=a(14),v=a(16),y=a(29),w=a(94);var _=function(e){return p.c().shape({name_tm:"sale"===e?p.d().nullable(!0):p.d().min(5,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(50,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),description_tm:"sale"===e?p.d().nullable(!0):p.d().min(10,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(50,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),name_ru:"sale"===e?p.d().nullable(!0):p.d().min(5,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(50,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),description_ru:"sale"===e?p.d().nullable(!0):p.d().min(10,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(50,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),name_en:"sale"===e?p.d().nullable(!0):p.d().min(5,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(50,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),description_en:"sale"===e?p.d().nullable(!0):p.d().min(10,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(50,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),price:"sale"===e?p.d().nullable(!0):p.b().min(0).max(1e5,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 1000000").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),stock:"sale"===e?p.d().nullable(!0):p.b().min(0).max(1e5,"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 1000000").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),producer_id:"sale"===e?p.d().nullable(!0):p.b().min(1,"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043b\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043b\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),category_id:"sale"===e?p.d().nullable(!0):p.b().min(1,"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043b\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043b\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),product_id:"sale"===e?p.b().required():p.d().nullable(!0)})},N=function(e){var t,a,l,i,d,o,b,j,p,N,C,k,M,D,S=e.visible,z=e.values,T=e.form,E=e.token,A=e.setCloseModal,F=e.title,P=e.addedProduct,V=e.setUploadedImage,L=e.updateProduct,R=Object(r.useState)([]),U=Object(c.a)(R,2),H=U[0],I=U[1],q=Object(r.useState)([]),B=Object(c.a)(q,2),G=B[0],J=B[1],Y=Object(x.d)({resolver:Object(f.a)(_(T)),defaultValues:Object(n.a)({},z)}),K=Y.register,Q=Y.handleSubmit,W=Y.formState.errors,X=Y.watch,Z=Y.reset,$=Y.setValue,ee=Object(h.b)();Object(r.useEffect)((function(){"update"===T&&($("name_tm",z.name_tm),$("description_tm",z.description_tm),$("name_ru",z.name_ru),$("description_ru",z.description_ru),$("name_en",z.name_en),$("description_en",z.description_en),$("price",z.price),$("stock",z.stock),$("category_id",z.category_id),$("producer_id",z.producer_id)),"sale"===T&&($("product_id",z.id),$("discount_type_id",1))}),[T]);var te=Object(r.useState)(),ae=Object(c.a)(te,2),ce=ae[0],le=ae[1],ne=Object(r.useState)(),se=Object(c.a)(ne,2),ie=se[0],re=se[1],de=Object(r.useState)(!1),oe=Object(c.a)(de,2),ue=oe[0],be=oe[1],je=Object(r.useState)(!1),me=Object(c.a)(je,2),xe=me[0],pe=me[1];return Object(r.useEffect)((function(){ee(Object(O.a)({url:"api/admin/producers",token:E,action:function(e){e.success?I(e.data.rows):g.b.error("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430")}}))}),[]),Object(r.useEffect)((function(){ee(Object(O.a)({url:"api/admin/categories",token:E,action:function(e){e.success?J(e.data.rows):g.b.error("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430")}}))}),[]),Object(u.jsx)(m.a,{size:"lg",visible:S,title:F,setCloseModal:function(){A(),Z({}),le(null),pe(!1),re(null)},children:Object(u.jsxs)("form",{onSubmit:Q((function(e){console.log(e),be(!0),ee(Object(O.b)({url:"add"===T?"api/admin/add-product":"update"===T?"api/admin/update-product/".concat(z.id):"sale"===T?"api/admin/add-sale":"",token:E,data:e,action:function(e){if(e.success)if("add"===T&&P(e.data.rows),"update"===T&&(console.log("hello some update"),L(e.data.rows)),ce){var t="add"===T?e.data.rows.id:z.id,a=new FormData,c={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(E)}};a.append("picture",ce),y.b.post("api/admin/add-product-image/".concat(t),a,c).then((function(e){console.log(e.data),e&&(V({id:t,destination:e.data.rows.destination}),A(),Z({}))})).catch((function(e){g.b.error("\u041d\u0435 \u0441\u043c\u043e\u0433 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e")})),Z({}),le(null),pe(!1),re(null)}else A(),Z({}),le(null),pe(!1),re(null);else g.b.error("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430"),A(),Z({}),pe(!1),le(null),re(null)}})),be(!1),le(null)})),children:["sale"===T?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"relative w-full mt-2",children:[Object(u.jsx)("label",{children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(u.jsx)("input",Object(n.a)(Object(n.a)({type:"text"},K("min_value")),{},{autoComplete:"false",className:"".concat(W.min_value?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-10 w-full text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 1"})),Object(u.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(t=W.min_value)||void 0===t?void 0:t.message})]}),Object(u.jsxs)("div",{className:"relative w-full mt-2",children:[Object(u.jsx)("label",{children:"\u0421\u043a\u0438\u0434\u043a\u0430 (\u0432 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u0430\u0445)"}),Object(u.jsx)("input",Object(n.a)(Object(n.a)({type:"text"},K("discount_value")),{},{autoComplete:"false",className:"".concat(W.discount_value?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-10 w-full text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 50"})),Object(u.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(a=W.discount_value)||void 0===a?void 0:a.message})]}),Object(u.jsxs)("div",{className:"py-3 flex flex-col",children:[Object(u.jsx)("label",{className:"pl-2 pb-3",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"}),Object(u.jsx)("input",Object(n.a)(Object(n.a)({},K("start_date")),{},{type:"text",onFocus:function(e){e.currentTarget.type="date"},onBlur:function(e){return e.currentTarget.type="text"},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e",className:"ring-indigo-600 px-3 shadow-inner h-12 text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2"})),Object(u.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(l=W.start_date)||void 0===l?void 0:l.message})]}),Object(u.jsxs)("div",{className:"py-3 flex flex-col",children:[Object(u.jsx)("label",{className:"pl-2 pb-3",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"}),Object(u.jsx)("input",Object(n.a)(Object(n.a)({},K("end_date")),{},{type:"text",onFocus:function(e){e.currentTarget.type="date"},onBlur:function(e){return e.currentTarget.type="text"},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e",className:"ring-indigo-600 px-3 shadow-inner h-12 text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2"})),Object(u.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(i=W.end_date)||void 0===i?void 0:i.message})]})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"flex flex-row",children:[Object(u.jsxs)("div",{className:"w-1/3 px-2",children:[Object(u.jsxs)("div",{className:"relative w-full mb-6",children:[Object(u.jsx)("label",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u043d\u0430 \u0442\u0443\u0440\u043a\u043c\u0435\u043d\u0441\u043a\u043e\u043c"}),Object(u.jsx)("input",Object(n.a)(Object(n.a)({type:"text"},K("name_tm")),{},{autoComplete:"false",name:"name_tm",className:"".concat(W.name_tm?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-10 w-full text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"Max-Deluxe"})),Object(u.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(d=W.name_tm)||void 0===d?void 0:d.message})]}),Object(u.jsxs)("div",{className:"flex flex-col w-full relative mb-6 p-2",children:[Object(u.jsx)("label",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0442\u0443\u0440\u043a\u043c\u0435\u043d\u0441\u043a\u043e\u043c"}),Object(u.jsx)("textarea",Object(n.a)(Object(n.a)({type:"text"},K("description_tm")),{},{name:"description_tm",autoComplete:"false",className:"".concat(W.description_tm?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-24 text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c"})),Object(u.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(o=W.description_tm)||void 0===o?void 0:o.message})]})]}),Object(u.jsxs)("div",{className:"w-1/3 px-2",children:[Object(u.jsxs)("div",{className:"relative w-full mb-6",children:[Object(u.jsx)("label",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c"}),Object(u.jsx)("input",Object(n.a)(Object(n.a)({type:"text"},K("name_ru")),{},{autoComplete:"false",name:"name_ru",className:"".concat(W.name_ru?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-10 w-full text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"Max-Deluxe"})),Object(u.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(b=W.name_ru)||void 0===b?void 0:b.message})]}),Object(u.jsxs)("div",{className:"flex flex-col w-full relative mb-6 p-2",children:[Object(u.jsx)("label",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c"}),Object(u.jsx)("textarea",Object(n.a)(Object(n.a)({type:"text"},K("description_ru")),{},{name:"description_ru",autoComplete:"false",className:"".concat(W.description_ru?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-24 text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c"})),Object(u.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(j=W.description_ru)||void 0===j?void 0:j.message})]})]}),Object(u.jsxs)("div",{className:"w-1/3 px-2",children:[Object(u.jsxs)("div",{className:"relative w-full mb-6",children:[Object(u.jsx)("label",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c"}),Object(u.jsx)("input",Object(n.a)(Object(n.a)({type:"text"},K("name_en")),{},{autoComplete:"false",name:"name_en",className:"".concat(W.name_en?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-10 w-full text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"Max-Deluxe"})),Object(u.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(p=W.name_en)||void 0===p?void 0:p.message})]}),Object(u.jsxs)("div",{className:"flex flex-col w-full relative mb-6 p-2",children:[Object(u.jsx)("label",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c"}),Object(u.jsx)("textarea",Object(n.a)(Object(n.a)({type:"text"},K("description_en")),{},{name:"description_en",autoComplete:"false",className:"".concat(W.description_en?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-24 text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c"})),Object(u.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(N=W.description_en)||void 0===N?void 0:N.message})]})]})]}),Object(u.jsxs)("div",{className:"flex flex-row",children:[Object(u.jsx)("div",{className:"w-1/2 ",children:Object(u.jsxs)("div",{className:"flex flex-col",children:[Object(u.jsxs)("div",{className:"flex flex-col w-full relative mb-6 ",children:[Object(u.jsx)("label",{children:"\u0426\u0435\u043d\u0430"}),Object(u.jsx)("input",Object(n.a)(Object(n.a)({type:"text"},K("price")),{},{autoComplete:"false",name:"price",className:"".concat(W.price?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-10 w-full text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"150"})),Object(u.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(C=W.price)||void 0===C?void 0:C.message})]}),Object(u.jsxs)("div",{className:"flex flex-col w-full relative mb-6 ",children:[Object(u.jsx)("label",{children:"\u041e\u0441\u0442\u0430\u0442\u043e\u043a"}),Object(u.jsx)("input",Object(n.a)(Object(n.a)({type:"text"},K("stock")),{},{autoComplete:"false",name:"stock",className:"".concat(W.stock?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-10 w-full text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"150"})),Object(u.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(k=W.stock)||void 0===k?void 0:k.message})]}),Object(u.jsxs)("div",{className:"flex flex-col w-full relative mb-6 ",children:[Object(u.jsx)("label",{children:"\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f"}),Object(u.jsxs)("select",{value:X("producer_id"),onChange:function(e){return $("producer_id",e.target.value)},className:"px-3 py-2 placeholder-gray-400 text-gray-700 dark:text-gray-200  bg-white dark:bg-gray-700 rounded text-sm focus:outline-none  border-0 ring-1 ring-gray-300 dark:ring-gray-800 focus:ring-purple-700 dark:focus:ring-2 dark:focus:ring-gray-600 w-full cursor-pointer",children:[Object(u.jsx)("option",{value:0,children:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c"},0),H.length>0&&H.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(u.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(M=W.producer_id)||void 0===M?void 0:M.message})]}),Object(u.jsxs)("div",{className:"flex flex-col w-full relative mb-6 ",children:[Object(u.jsx)("label",{children:"\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"}),Object(u.jsxs)("select",{value:X("category_id"),onChange:function(e){return $("category_id",e.target.value)},className:"px-3 py-2 placeholder-gray-400 text-gray-700 dark:text-gray-200  bg-white dark:bg-gray-700 rounded text-sm focus:outline-none  border-0 ring-1 ring-gray-300 dark:ring-gray-800 focus:ring-purple-700 dark:focus:ring-2 dark:focus:ring-gray-600 w-full cursor-pointer",children:[Object(u.jsx)("option",{value:0,children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"},0),G.length>0&&G.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name_ru},e.id)}))]}),Object(u.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(D=W.category_id)||void 0===D?void 0:D.message})]})]})}),"add"===T||!(null===z||void 0===z?void 0:z.destination)||xe?Object(u.jsxs)("div",{className:"w-1/2 flex flex-col justify-center items-center",children:[Object(u.jsxs)("div",{className:"p-2",children:[Object(u.jsx)("label",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b"}),Object(u.jsx)("input",{type:"file",name:"picture",className:"px-3 py-5",onChange:function(e){return function(e){le(e.target.files[0]),re(URL.createObjectURL(e.target.files[0]))}(e)}})]}),Object(u.jsx)("div",{className:"w-96 h-full",children:ie?Object(u.jsx)("img",{className:"p-1 px-3 ",alt:"Hello world",src:ie}):Object(u.jsx)(u.Fragment,{})})]}):"update"===T?Object(u.jsxs)("div",{className:"flex flex-row relative justify-center items-center w-96 h-full p-1 px-5",children:[Object(u.jsx)("div",{className:"absolute right-0 top-0 rounded-full",children:Object(u.jsx)(s.a,{tooltip:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",handleClick:function(){return pe(!0)},icon:Object(u.jsx)(w.BiTrash,{className:"text-2xl "})})}),Object(u.jsx)("img",{className:"object-contain rounded-md ",src:"".concat("http://45.93.136.141:7010","/").concat(null===z||void 0===z?void 0:z.destination,"-big.webp"),alt:"CTYPES"})]}):Object(u.jsx)(u.Fragment,{})]})]}),Object(u.jsx)("div",{className:"w-full flex justify-center items-center",children:Object(u.jsx)("button",{type:"submit",disabled:ue,className:"w-48 flex remove-button-bg justify-center items-center px-4 h-10 text-white transform ease-in-out duration-300 hover:scale-110 active:scale-100 font-semibold text-base rounded-full bg-green-500 hover:bg-green-400 active:bg-green-500 focus:outline-none shadow-md",children:ue?Object(u.jsx)(v.a,{loading:ue}):Object(u.jsx)(u.Fragment,{children:"add"===T?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c":"update"===T?"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c":"sale"===T?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043a\u0438\u0434\u043a\u0443":""})})})]})})},C=a(87),k=a(88),M=a(90),D=a(86),S=a(89),z=a(100),T=a(117),E=a(93),A=a(151);function F(e,t){switch(console.log(t),t.type){case"ADD_FORM":return Object(n.a)(Object(n.a)({},e),{},{visible:!0,form:"add",values:"",title:"\u0424\u043e\u0440\u043c\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f"});case"SET_CLOSE_MODAL":return Object(n.a)(Object(n.a)({},e),{},{visible:!1,form:""});case"SET_DATA":return Object(n.a)(Object(n.a)({},e),{},{data:t.payload.products,count:t.payload.count,loading:!1});case"SET_LOADING":return Object(n.a)(Object(n.a)({},e),{},{loading:t.payload});case"UPDATE_FORM":return Object(n.a)(Object(n.a)({},e),{},{visible:!0,values:t.payload,form:"update",title:"\u0424\u043e\u0440\u043c\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"});case"ADD_PRODUCT":return Object(n.a)(Object(n.a)({},e),{},{data:[].concat(Object(l.a)(e.data),[t.payload])});case"SET_UPLOADED_IMAGE":return Object(n.a)(Object(n.a)({},e),{},{data:e.data.map((function(e){return e.id===t.payload.id&&(e.destination=t.payload.destination),e})),visible:!1});case"SALE_FORM":return Object(n.a)(Object(n.a)({},e),{},{form:"sale",visible:!0,title:"\u0424\u043e\u0440\u043c\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043a\u0438\u0434\u043a\u0438",values:t.payload});case"UPDATE_PRODUCT":return Object(n.a)(Object(n.a)({},e),{},{data:e.data.map((function(e){return e.id===+t.payload.id&&(e=t.payload),e}))});default:return e}}var P=function(e){var t=e.handleClick,a=e.handleSearch;return Object(u.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[Object(u.jsx)(s.a,{tooltip:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442",handleClick:t,icon:Object(u.jsx)(i.IoMdAdd,{className:"text-2xl "})}),Object(u.jsx)("div",{className:"w-80",children:Object(u.jsx)(b,{action:function(e){return a(e)},placeholder:"\u041f\u043e\u0438\u0441\u043a"})})]})};t.default=function(){var e,t=Object(r.useReducer)(F,{visible:!1,form:"",title:"",data:[],page:0,limit:30,count:0,values:"",loading:!0}),a=Object(c.a)(t,2),l=a[0],n=a[1],i=Object(h.b)(),d=Object(h.c)((function(e){return e.auth.token}));return Object(r.useEffect)((function(){i(Object(O.a)({url:"api/admin/products",token:d,action:function(e){e.success?n({type:"SET_DATA",payload:e.data.rows}):(g.b.error("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430"),n({type:"SET_LOADING",payload:!1}))}}))}),[]),Object(u.jsxs)(j.a,{header:Object(u.jsx)(P,{handleClick:function(){return n({type:"ADD_FORM",payload:""})}}),children:[Object(u.jsx)(N,{visible:l.visible,title:l.title,form:l.form,token:d,values:l.values,setCloseModal:function(){return n({type:"SET_CLOSE_MODAL",payload:""})},addedProduct:function(e){return n({type:"ADD_PRODUCT",payload:e})},setUploadedImage:function(e){return n({type:"SET_UPLOADED_IMAGE",payload:e})},updateProduct:function(e){return n({type:"UPDATE_PRODUCT",payload:e})}}),Object(u.jsx)(v.a,{loading:l.loading}),Object(u.jsx)("div",{className:"w-full h-full px-6 overflow-y-auto pb-20 ",children:Object(u.jsxs)(C.a,{children:[Object(u.jsx)(k.a,{children:Object(u.jsx)(M.a,{children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"ID"})}),Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u0418\u043c\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"})}),Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u0426\u0435\u043d\u0430"})}),Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u041e\u0441\u0442\u0430\u0442\u043e\u043a"})}),Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c"})}),Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"})}),Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f"})}),Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"})})]})})}),Object(u.jsx)(S.a,{children:(null===(e=l.data)||void 0===e?void 0:e.length)>0?l.data.map((function(e){return Object(u.jsx)(M.a,{children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:"p-2",children:null===e||void 0===e?void 0:e.id})}),Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:"p-2",children:null===e||void 0===e?void 0:e.name_ru})}),Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:"p-2",children:null===e||void 0===e?void 0:e.price})}),Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:"p-2",children:null===e||void 0===e?void 0:e.stock})}),Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:"p-2",children:null===e||void 0===e?void 0:e.producer_name})}),Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:"p-2",children:null===e||void 0===e?void 0:e.category_name})}),Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:"p-2 flex justify-center items-center",children:(null===e||void 0===e?void 0:e.destination)?Object(u.jsx)("img",{className:"object-contain rounded-md w-28 h-28",src:"".concat("http://45.93.136.141:7010","/").concat(null===e||void 0===e?void 0:e.destination,"-big.webp"),alt:"CTYPES"}):Object(u.jsx)(z.BsImage,{className:"text-4xl text-gray-500 opacity-80"})})}),Object(u.jsx)(D.a,{children:Object(u.jsxs)("div",{className:"p-2 flex flex-row",children:[Object(u.jsx)(s.a,{tooltip:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",handleClick:function(){return n({type:"UPDATE_FORM",payload:e})},icon:Object(u.jsx)(E.BiEdit,{className:"text-2xl"})}),Object(u.jsx)(s.a,{tooltip:"\u0421\u043a\u0438\u0434\u043a\u0438",handleClick:function(){return n({type:"SALE_FORM",payload:e})},icon:Object(u.jsx)(A.FcSalesPerformance,{className:"text-2xl"})})]})})]})},null===e||void 0===e?void 0:e.id)})):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("tr",{children:Object(u.jsx)("td",{colSpan:"10",children:Object(u.jsx)("div",{className:"flex w-full h-full py-20 justify-center items-center",children:Object(u.jsx)(T.a,{title:"\u041d\u0435\u0442 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432"})})})})})})]})})]})}},93:function(e,t,a){var c=a(77).GenIcon;e.exports.BiEdit=function(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7,17.013l4.413-0.015l9.632-9.54c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414l-1.586-1.586\tc-0.756-0.756-2.075-0.752-2.825-0.003L7,12.583V17.013z M18.045,4.458l1.589,1.583l-1.597,1.582l-1.586-1.585L18.045,4.458z M9,13.417l6.03-5.973l1.586,1.586l-6.029,5.971L9,15.006V13.417z"}},{tag:"path",attr:{d:"M5,21h14c1.103,0,2-0.897,2-2v-8.668l-2,2V19H8.158c-0.026,0-0.053,0.01-0.079,0.01c-0.033,0-0.066-0.009-0.1-0.01H5V5\th6.847l2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z"}}]})(e)}},94:function(e,t,a){var c=a(77).GenIcon;e.exports.BiTrash=function(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"}},{tag:"path",attr:{d:"M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"}},{tag:"path",attr:{d:"M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"}}]})(e)}}}]);
//# sourceMappingURL=13.7576a569.chunk.js.map