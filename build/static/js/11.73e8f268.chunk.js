(this.webpackJsonpgamysh=this.webpackJsonpgamysh||[]).push([[11],{104:function(e,t,a){var n=a(77).GenIcon;e.exports.RiInboxUnarchiveLine=function(e){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{fillRule:"nonzero",d:"M20 3l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3h16zm0 6H4v10h16V9zm-8 1l4 4h-3v4h-2v-4H8l4-4zm6.764-5H5.236l-.999 2h15.527l-1-2z"}}]}]})(e)}},105:function(e,t,a){var n=a(77).GenIcon;e.exports.MdDone=function(e){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}}]})(e)}},106:function(e,t,a){var n=a(77).GenIcon;e.exports.MdDeleteForever=function(e){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}}]})(e)}},107:function(e,t,a){"use strict";var n=a(79),c=a(3),r=a.n(c),l=a(10),i=a(12),s=a(0),o=a(29),d=a(14);function u(e){var t={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":".xlsx","application/vnd.ms-excel":".xlsx",".csv":".xlsx",csv:".xlsx","application/pdf":".pdf",".pdf":".pdf",pdf:".pdf","image/png":".png","image/jpeg":".jpeg","image/jpg":".jpg"};return t[e]?t[e]:""}var j=function(){var e=Object(l.a)(r.a.mark((function e(t,a){var n,c,l,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"===typeof t){e.next=2;break}return e.abrupt("return",!1);case 2:for(n=atob(t.split(",")[1]),c=[],l=0;l<n.length;l++)c.push(n.charCodeAt(l));return i=new Blob([new Uint8Array(c)],{type:a}),r=i,o="IMAGE-"+Date.now(),r.lastModifiedDate=new Date,r.name=o,s=r,e.abrupt("return",new File([s],s.name+u(i.type),{type:i.type}));case 8:case"end":return e.stop()}var r,o}),e)})));return function(t,a){return e.apply(this,arguments)}}(),b=j,f=a(106),x=a(105),m=a(104),p=a(2);function h(e){var t=["Bytes","KB","MB","GB","TB"];if(0===e)return"n/a";var a=parseInt(Math.floor(Math.log(e)/Math.log(1024)),10);return 0===a?"".concat(e," ").concat(t[a],")"):"".concat((e/Math.pow(1024,a)).toFixed(1)," ").concat(t[a])}t.a=function(e){var t=e.myDocument,a=e.token,c=e.url,u=e.visible,j=e.setUploadedImage,v=Object(s.useRef)(),O=Object(s.useState)([]),g=Object(i.a)(O,2),w=g[0],y=g[1],M=Object(s.useState)(0),N=Object(i.a)(M,2),D=N[0],E=N[1],A=Object(s.useState)(0),_=Object(i.a)(A,2),k=_[0],S=_[1],z=Object(s.useState)([]),L=Object(i.a)(z,2),C=L[0],I=L[1],B=Object(s.useState)(!1),R=Object(i.a)(B,2),T=R[0],F=R[1],U=function(){var e=Object(l.a)(r.a.mark((function e(){var n,l,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new FormData,l=0;case 2:if(!(l<w.length)){e.next=10;break}return e.next=5,b(w[l].file,w[l].type);case 5:i=e.sent,n.append("picture",i);case 7:l++,e.next=2;break;case 10:s={onUploadProgress:function(e){E(Math.round(100*e.loaded/e.total))},headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(a)}},o.b.post(c,n,s).then((function(e){e&&(e.data.rows&&(j({id:t.id,destination:null}),j({id:t.id,destination:e.data.rows.destination})),F(!0),y([]),S(0),E(0),F({id:t.id,success:!1}),I([]),y([]))})).catch((function(e){y([]),S(0),F(!1),E(0),I([]),console.log(e)}));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){0!==w.length&&0!==k&&!0===u&&w.length===k&&U();var e=v;return function(){!1===u&&(y([]),S(0),F(!1),E(0),I([]),e.current&&(e.current.value=""))}}),[w,u]),Object(p.jsx)("div",{className:"flex flex-col justify-between w-full",children:Object(p.jsxs)("div",{className:"bg-white w-full shadow  border border-opacity-10 flex flex-col sm:flex-row justify-start items-center relative rounded-lg overflow-hidden py-2 sm:py-0",children:[t.destination?Object(p.jsx)("img",{src:"".concat("http://45.93.136.141:7010","/").concat(null===t||void 0===t?void 0:t.destination,"-big.webp"),className:"object-contain rounded-lg w-48 sm:w-28 sm:h-28",alt:"CTYPE"}):null,Object(p.jsxs)("div",{className:"flex flex-col justify-between py-1 items-center w-full h-20 sm:h-28",children:[Object(p.jsx)("div",{className:"relative flex flex-col h-full justify-between items-center w-full pt-2 sm:pt-5",children:Object(p.jsxs)("label",{htmlFor:"doc-".concat(t.id),className:" cursor-pointer active:bg-gray-50 flex flex-row justify-center items-center border-2 px-2 py-1 rounded-lg text-blue-500 border-blue-500 border-dashed w-30",children:[Object(p.jsx)(m.RiInboxUnarchiveLine,{className:"text-xl mr-2"}),Object(p.jsx)("p",{className:"font-medium text-sm flex flex-col items-center justify-center",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"}),Object(p.jsx)("input",{ref:v,id:"doc-".concat(t.id),type:"file",onChange:function(e){e.preventDefault();var t=Object.values(e.target.files);(function(e,t){return!(t.length+w.length>1)||(e.target.files=null,e.target.value="",d.b.error("".concat(1," suratdan artykma\xe7 \xfd\xfckl\xe4p bolanok!")),!1)})(e,t)&&function(e,t){for(var a="",n=0;n<t.length;n++)t[n].size>10482944&&(a+=t[n].name+" g\xf6wrimi i\u0148 k\xf6p ".concat(h(10482944)," bolmaly!\n"));return""===a||(e.target.files=null,e.target.value="",d.b.error(a),!1)}(e,t)&&(S(t.length),t.forEach((function(e){var t=new FileReader;t.readAsDataURL(e),t.onload=function(t){y((function(a){return[].concat(Object(n.a)(a),[{file:t.target.result,type:e.type}])})),I((function(t){return[].concat(Object(n.a)(t),[e.name])}))}})))},multiple:t.multiple,accept:t.mimetype_web,required:t.required,hidden:!0})]})}),Object(p.jsx)("div",{className:"w-full px-2 sm:mb-2",children:Object(p.jsxs)("div",{className:"relative flex flex-row justify-center items-center w-full pt-1",children:[Object(p.jsxs)("div",{className:"px-2 w-full",children:[Object(p.jsx)("div",{className:"text-xs font-light text-blue-600 w-full",children:C.join(", ")}),Object(p.jsx)("div",{className:"overflow-hidden w-full h-2 text-xs flex rounded bg-gray-300",children:Object(p.jsx)("div",{style:{width:"".concat(D,"%")},className:"".concat(!0===T&&100===D?"bg-green-400":"bg-blue-500 "," shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transform ease-in-out duration-200")})})]}),Object(p.jsxs)("div",{className:"relative flex flex-row justify-end items-center w-14 text-base -mt-2",children:[Object(p.jsx)(x.MdDone,{className:"".concat(!0===T&&100===D?"opacity-100":"opacity-0"," absolute top-0 -left-2 text-3xl text-green-500 mr-1 transform ease-in-out duration-500")}),Object(p.jsx)("div",{className:"".concat(!0!==T&&100!==D?"opacity-100":"opacity-0"," absolute top-0 -left-1   transform ease-in-out duration-500 font-medium text-blue-500 whitespace-nowrap"),children:"".concat(D," %")}),Object(p.jsx)(f.MdDeleteForever,{onClick:function(){E(0),F({id:t.id,success:!1}),I([]),y([]),v.current&&(v.current.value="")},className:"text-2xl text-gray-400 -mr-1 cursor-pointer z-30 hover:text-red-300 active:text-red-400"})]})]})})]})]})})}},127:function(e,t,a){var n=a(77).GenIcon;e.exports.BiImageAdd=function(e){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4,5h13v7h2V5c0-1.103-0.897-2-2-2H4C2.897,3,2,3.897,2,5v12c0,1.103,0.897,2,2,2h8v-2H4V5z"}},{tag:"path",attr:{d:"M8 11L5 15 16 15 12 9 9 13z"}},{tag:"path",attr:{d:"M19 14L17 14 17 17 14 17 14 19 17 19 17 22 19 22 19 19 22 19 22 17 19 17z"}}]})(e)}},278:function(e,t,a){"use strict";a.r(t);var n=a(12),c=a(79),r=a(9),l=a(81),i=a(80),s=a(83),o=a(0),d=a(84),u=a(91),j=a(95),b=a(96),f=a(13),x=a(78),m=a(14),p=a(107),h=a(16),v=a(2);var O=function(e){return j.c().shape({name:"image_upload"===e?j.d().nullable(!0):j.d().min(3,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430").max(50,"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 50 \u0441\u0438\u043c\u0432\u043e\u043b\u0430")})},g=function(e){var t,a=e.visible,c=e.title,l=e.setCloseModal,i=e.form,s=e.addProducer,j=e.token,g=e.values,w=e.setUploadedImage,y=Object(d.d)({resolver:Object(b.a)(O(i))}),M=y.register,N=y.handleSubmit,D=y.formState.errors,E=y.reset;console.log(g);var A=Object(f.b)(),_=Object(o.useState)(!1),k=Object(n.a)(_,2),S=k[0],z=k[1];return Object(v.jsx)(u.a,{size:"md",setCloseModal:function(){l(),E({enabled:!1})},visible:a,title:c,children:"add"===i?Object(v.jsxs)("form",{onSubmit:N((function(e){z(!0),"add"===i&&A(Object(x.b)({url:"api/admin/add-producer",data:e,token:j,action:function(e){e.success?(m.b.success("Hey yu have added"),console.log(e.data.rows),z(!0),l(),s(e.data.rows)):m.b.error("Something went wrong")}})),z(!1)})),children:[Object(v.jsxs)("div",{className:"relative w-full mb-6",children:[Object(v.jsx)("label",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u0440\u0435\u043d\u0434\u0430"}),Object(v.jsx)("input",Object(r.a)(Object(r.a)({type:"text"},M("name")),{},{autoComplete:"false",className:"".concat(D.name?"border-2 border-red-300 ring-red-100":"ring-indigo-600"," px-3 shadow-inner h-10 w-full text-base bg-gray-50 rounded-md z-20 focus:bg-white focus:outline-none focus:ring-2 "),placeholder:"Max-Deluxe"})),Object(v.jsx)("p",{className:"absolute bottom-0 left-0 -mb-4 text-xs font-medium text-red-400",children:null===(t=D.name)||void 0===t?void 0:t.message})]}),Object(v.jsx)("div",{className:"w-full flex justify-center items-center absolute -bottom-6",children:Object(v.jsx)("button",{type:"submit",disabled:S,className:"w-50 flex remove-button-bg justify-center items-center px-4 h-10 text-white transform ease-in-out duration-300 hover:scale-110 active:scale-100 font-semibold text-base rounded-full bg-green-500 hover:bg-green-400 active:bg-green-500 focus:outline-none shadow-md",children:S?Object(v.jsx)(h.a,{loading:S}):Object(v.jsx)("div",{children:"update"===i?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})})]}):"image_upload"===i?Object(v.jsx)("div",{className:"w-96",children:Object(v.jsx)(p.a,{visible:!0,myDocument:g,token:j,setUploadedImage:w,url:"/api/admin/add-producer-image/".concat(null===g||void 0===g?void 0:g.id)})}):Object(v.jsx)("div",{})})},w=a(87),y=a(88),M=a(90),N=a(86),D=a(89),E=a(117),A=a(93),_=a(100),k=a(127);function S(e,t){switch(t.type){case"ADD_FORM":return Object(r.a)(Object(r.a)({},e),{},{visible:!0,form:"add",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f"});case"SET_CLOSE_MODAL":return Object(r.a)(Object(r.a)({},e),{},{visible:!1});case"SET_DATA":return Object(r.a)(Object(r.a)({},e),{},{loading:!1,data:t.payload});case"SET_IMAGE_FORM":return Object(r.a)(Object(r.a)({},e),{},{visible:!0,form:"image_upload",values:t.payload,title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e"});case"SET_UPLOADED_IMAGE":return Object(r.a)(Object(r.a)({},e),{},{data:e.data.map((function(e){return e.id===t.payload.id&&(e.destination=t.payload.destination),e})),visible:!1});case"ADD_PRODUCER":return Object(r.a)(Object(r.a)({},e),{},{data:[].concat(Object(c.a)(e.data),[t.payload])});default:return e}}var z=function(e){var t=e.handleClick;return Object(v.jsx)("div",{className:"flex flex-row justify-between items-center",children:Object(v.jsx)(i.a,{tooltip:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f",handleClick:t,icon:Object(v.jsx)(s.IoMdAdd,{className:"text-2xl "})})})};t.default=function(){var e=Object(o.useReducer)(S,{visible:!1,form:"",data:[],loading:!1,title:""}),t=Object(n.a)(e,2),a=t[0],c=t[1],s=Object(f.c)((function(e){return e.auth.token})),d=Object(f.b)();return Object(o.useEffect)((function(){d(Object(x.a)({url:"api/admin/producers",token:s,action:function(e){e.success?(console.log(e.data.rows),c({type:"SET_DATA",payload:e.data.rows})):m.b.error("Something went wrong")}}))}),[]),Object(v.jsxs)(l.a,{header:Object(v.jsx)(z,{handleClick:function(){return c({type:"ADD_FORM",payload:{}})}}),children:[Object(v.jsx)(g,{visible:a.visible,token:s,values:a.values,form:a.form,setCloseModal:function(){return c({type:"SET_CLOSE_MODAL",payload:{}})},title:a.title,setUploadedImage:function(e){return c({type:"SET_UPLOADED_IMAGE",payload:e})},addProducer:function(e){return c({type:"ADD_PRODUCER",payload:e})}}),Object(v.jsx)(h.a,{loading:a.loading}),Object(v.jsx)("div",{className:"w-full h-full px-6 overflow-y-auto pb-20 ",children:Object(v.jsxs)(w.a,{children:[Object(v.jsx)(y.a,{children:Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(M.a,{children:[Object(v.jsx)(N.a,{children:Object(v.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u041d\u043e\u043c\u0435\u0440"})}),Object(v.jsx)(N.a,{children:Object(v.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c"})}),Object(v.jsx)(N.a,{children:Object(v.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-center items-center ",children:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f"})}),Object(v.jsx)(N.a,{children:Object(v.jsx)("div",{className:" px-2 py-4 font-medium flex flex-row justify-start items-center ",children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"})})]})})}),Object(v.jsx)(D.a,{children:a.data.length>0?a.data.map((function(e){return Object(v.jsx)(M.a,{children:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(N.a,{children:Object(v.jsx)("div",{className:"p-2",children:null===e||void 0===e?void 0:e.id})}),Object(v.jsx)(N.a,{children:Object(v.jsx)("div",{className:"p-2",children:null===e||void 0===e?void 0:e.name})}),Object(v.jsx)(N.a,{children:Object(v.jsx)("div",{className:"p-2 flex justify-center items-center",children:(null===e||void 0===e?void 0:e.destination)?Object(v.jsx)("img",{className:"object-contain rounded-md w-28 h-28",src:"".concat("http://45.93.136.141:7010","/").concat(null===e||void 0===e?void 0:e.destination,"-big.webp"),alt:"producer_image"}):Object(v.jsx)(_.BsImage,{className:"text-4xl text-gray-500 opacity-80"})})}),Object(v.jsx)(N.a,{children:Object(v.jsxs)("div",{className:"p-2 flex flex-row",children:[Object(v.jsx)(i.a,{tooltip:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",handleClick:function(){return c({type:"SET_UPDATE_FORM",payload:Object(r.a)({},e)})},icon:Object(v.jsx)(A.BiEdit,{className:"text-2xl"})}),Object(v.jsx)(i.a,{tooltip:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",handleClick:function(){return c({type:"SET_IMAGE_FORM",payload:e})},icon:Object(v.jsx)(k.BiImageAdd,{className:"text-2xl"})})]})})]})},e.id)})):Object(v.jsx)("tr",{children:Object(v.jsx)("td",{colSpan:"10",children:Object(v.jsx)("div",{className:"flex w-full h-full py-20 justify-center items-center",children:Object(v.jsx)(E.a,{title:"\u041d\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439"})})})})})]})})]})}},93:function(e,t,a){var n=a(77).GenIcon;e.exports.BiEdit=function(e){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7,17.013l4.413-0.015l9.632-9.54c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414l-1.586-1.586\tc-0.756-0.756-2.075-0.752-2.825-0.003L7,12.583V17.013z M18.045,4.458l1.589,1.583l-1.597,1.582l-1.586-1.585L18.045,4.458z M9,13.417l6.03-5.973l1.586,1.586l-6.029,5.971L9,15.006V13.417z"}},{tag:"path",attr:{d:"M5,21h14c1.103,0,2-0.897,2-2v-8.668l-2,2V19H8.158c-0.026,0-0.053,0.01-0.079,0.01c-0.033,0-0.066-0.009-0.1-0.01H5V5\th6.847l2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z"}}]})(e)}}}]);
//# sourceMappingURL=11.73e8f268.chunk.js.map