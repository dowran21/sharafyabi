(this.webpackJsonpgamysh=this.webpackJsonpgamysh||[]).push([[8],{100:function(e,t,n){var a=n(79).GenIcon;e.exports.BiTrash=function(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"}},{tag:"path",attr:{d:"M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"}},{tag:"path",attr:{d:"M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"}}]})(e)}},107:function(e,t,n){"use strict";var a=n(81),r=n(3),c=n.n(r),i=n(10),o=n(12),s=n(0),l=n(29),u=n(14),d=n(95),f=n(98),b=n(97),h=n(96),p=n(2);function v(e){var t=["Bytes","KB","MB","GB","TB"];if(0===e)return"n/a";var n=parseInt(Math.floor(Math.log(e)/Math.log(1024)),10);return 0===n?"".concat(e," ").concat(t[n],")"):"".concat((e/Math.pow(1024,n)).toFixed(1)," ").concat(t[n])}t.a=function(e){var t=e.myDocument,n=e.token,r=e.url,j=e.visible,x=e.setUploadedImage,m=Object(s.useRef)(),g=Object(s.useState)([]),O=Object(o.a)(g,2),w=O[0],y=O[1],M=Object(s.useState)(0),N=Object(o.a)(M,2),k=N[0],E=N[1],z=Object(s.useState)(0),A=Object(o.a)(z,2),D=A[0],I=A[1],L=Object(s.useState)([]),C=Object(o.a)(L,2),H=C[0],V=C[1],_=Object(s.useState)(!1),S=Object(o.a)(_,2),T=S[0],B=S[1],G=function(){var e=Object(i.a)(c.a.mark((function e(){var a,i,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=new FormData,i=0;case 2:if(!(i<w.length)){e.next=10;break}return e.next=5,Object(d.a)(w[i].file,w[i].type);case 5:o=e.sent,a.append("picture",o);case 7:i++,e.next=2;break;case 10:s={onUploadProgress:function(e){E(Math.round(100*e.loaded/e.total))},headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(n)}},l.b.post(r,a,s).then((function(e){e&&(e.data.rows&&x({id:t.id,destination:e.data.rows.destination,image_id:e.data.rows.id}),B(!0),y([]),I(0),E(0),B({id:t.id,success:!1}),V([]),y([]))})).catch((function(e){y([]),I(0),B(!1),E(0),V([]),console.log(e)}));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){0!==w.length&&0!==D&&!0===j&&w.length===D&&G();var e=m;return function(){!1===j&&(y([]),I(0),B(!1),E(0),V([]),e.current&&(e.current.value=""))}}),[w,j]),Object(p.jsx)("div",{className:"flex flex-col justify-between w-full",children:Object(p.jsxs)("div",{className:"bg-white w-full shadow  border border-opacity-10 flex flex-col sm:flex-row justify-start items-center relative rounded-lg overflow-hidden py-2 sm:py-0",children:[t.destination?Object(p.jsx)("img",{src:"".concat("http://141.136.44.174:7010","/").concat(null===t||void 0===t?void 0:t.destination,"-big.webp"),className:"object-contain rounded-lg w-48 sm:w-28 sm:h-28",alt:"CTYPE"}):null,Object(p.jsxs)("div",{className:"flex flex-col justify-between py-1 items-center w-full h-20 sm:h-28",children:[Object(p.jsx)("div",{className:"relative flex flex-col h-full justify-between items-center w-full pt-2 sm:pt-5",children:Object(p.jsxs)("label",{htmlFor:"doc-".concat(t.id),className:" cursor-pointer active:bg-gray-50 flex flex-row justify-center items-center border-2 px-2 py-1 rounded-lg text-blue-500 border-blue-500 border-dashed w-30",children:[Object(p.jsx)(h.RiInboxUnarchiveLine,{className:"text-xl mr-2"}),Object(p.jsx)("p",{className:"font-medium text-sm flex flex-col items-center justify-center",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"}),Object(p.jsx)("input",{ref:m,id:"doc-".concat(t.id),type:"file",onChange:function(e){e.preventDefault();var t=Object.values(e.target.files);(function(e,t){return!(t.length+w.length>1)||(e.target.files=null,e.target.value="",u.b.error("".concat(1," suratdan artykma\xe7 \xfd\xfckl\xe4p bolanok!")),!1)})(e,t)&&function(e,t){for(var n="",a=0;a<t.length;a++)t[a].size>10482944&&(n+=t[a].name+" g\xf6wrimi i\u0148 k\xf6p ".concat(v(10482944)," bolmaly!\n"));return""===n||(e.target.files=null,e.target.value="",u.b.error(n),!1)}(e,t)&&(I(t.length),t.forEach((function(e){var t=new FileReader;t.readAsDataURL(e),t.onload=function(t){y((function(n){return[].concat(Object(a.a)(n),[{file:t.target.result,type:e.type}])})),V((function(t){return[].concat(Object(a.a)(t),[e.name])}))}})))},multiple:t.multiple,accept:t.mimetype_web,required:t.required,hidden:!0})]})}),Object(p.jsx)("div",{className:"w-full px-2 sm:mb-2",children:Object(p.jsxs)("div",{className:"relative flex flex-row justify-center items-center w-full pt-1",children:[Object(p.jsxs)("div",{className:"px-2 w-full",children:[Object(p.jsx)("div",{className:"text-xs font-light text-blue-600 w-full",children:H.join(", ")}),Object(p.jsx)("div",{className:"overflow-hidden w-full h-2 text-xs flex rounded bg-gray-300",children:Object(p.jsx)("div",{style:{width:"".concat(k,"%")},className:"".concat(!0===T&&100===k?"bg-green-400":"bg-blue-500 "," shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transform ease-in-out duration-200")})})]}),Object(p.jsxs)("div",{className:"relative flex flex-row justify-end items-center w-14 text-base -mt-2",children:[Object(p.jsx)(b.MdDone,{className:"".concat(!0===T&&100===k?"opacity-100":"opacity-0"," absolute top-0 -left-2 text-3xl text-green-500 mr-1 transform ease-in-out duration-500")}),Object(p.jsx)("div",{className:"".concat(!0!==T&&100!==k?"opacity-100":"opacity-0"," absolute top-0 -left-1   transform ease-in-out duration-500 font-medium text-blue-500 whitespace-nowrap"),children:"".concat(k," %")}),Object(p.jsx)(f.MdDeleteForever,{onClick:function(){E(0),B({id:t.id,success:!1}),V([]),y([]),m.current&&(m.current.value="")},className:"text-2xl text-gray-400 -mr-1 cursor-pointer z-30 hover:text-red-300 active:text-red-400"})]})]})})]})]})})}},294:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(81),c=n(9),i=n(85),o=n(83),s=n(82),l=n(0),u=n(86),d=n(107),f=n(2);var b=function(e){var t=e.visible,n=e.setUploadedImage,a=e.form,r=e.token,c=e.setCloseModal;return Object(f.jsx)(u.a,{size:"md",visible:t,setCloseModal:function(){return c()},title:"delete_image"===a?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438",children:Object(f.jsx)(d.a,{visible:!0,myDocument:{id:1},token:r,setUploadedImage:n,url:"api/admin/add-banner"})})},h=n(13),p=n(80),v=(n(16),n(14)),j=n(100);function x(e,t){switch(console.log(t),t.type){case"ADD_BANNER":return Object(c.a)(Object(c.a)({},e),{},{visible:!0});case"SET_CLOSE_MODAL":return Object(c.a)(Object(c.a)({},e),{},{visible:!1});case"SET_DATA":return Object(c.a)(Object(c.a)({},e),{},{data:t.payload});case"DELETE_IMAGE":return Object(c.a)(Object(c.a)({},e),{},{data:e.data.filter((function(e){return+e.id!==+t.payload}))});case"SET_UPLOADED_IMAGE":return Object(c.a)(Object(c.a)({},e),{},{data:[].concat(Object(r.a)(e.data),[{id:t.payload.image_id,destination:t.payload.destination}]),visible:!1});default:return Object(c.a)({},e)}}var m=function(e){var t=e.handleClick;return Object(f.jsx)("div",{className:"flex flex-row justify-between items-center",children:Object(f.jsx)(o.a,{tooltip:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u0430\u043d\u043d\u0435\u0440",handleClick:t,icon:Object(f.jsx)(s.IoMdAdd,{className:"text-2xl "})})})};t.default=function(){var e,t=Object(l.useReducer)(x,{data:[],visible:!1}),n=Object(a.a)(t,2),r=n[0],c=n[1],s=Object(h.c)((function(e){return e.auth.token})),u=Object(h.b)();return Object(l.useEffect)((function(){u(Object(p.a)({url:"api/admin/get-banners",token:s,action:function(e){e.success?c({type:"SET_DATA",payload:e.data.rows}):v.b.error("Something went wrong")}}))}),[]),Object(f.jsxs)(i.a,{header:Object(f.jsx)(m,{handleClick:function(){return c({type:"ADD_BANNER",payload:""})}}),children:[Object(f.jsx)(b,{visible:r.visible,setCloseModal:function(){return c({type:"SET_CLOSE_MODAL",payload:""})},token:s,setUploadedImage:function(e){return c({type:"SET_UPLOADED_IMAGE",payload:e})}}),Object(f.jsx)("div",{className:"w-full h-full px-6 overflow-y-auto",children:Object(f.jsx)("div",{className:"grid grid-cols-3 gap-8 py-10",children:null===(e=r.data)||void 0===e?void 0:e.map((function(e){return Object(f.jsxs)("div",{className:"flex flex-row relative justify-center items-center",children:[Object(f.jsx)("div",{className:"absolute right-0 top-0 rounded-full",children:Object(f.jsx)(o.a,{tooltip:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",handleClick:function(){return t=e.id,void u(Object(p.b)({url:"api/admin/delete-banner/".concat(t),token:s,action:function(e){c({Type:"DELETE_IMAGE",payload:t})}}));var t},icon:Object(f.jsx)(j.BiTrash,{className:"text-2xl "})})}),Object(f.jsx)("img",{className:"fill p-2 object-container",src:"".concat("http://141.136.44.174:7010","/").concat(e.destination,"-big.webp")})]},e.id)}))})})]})}},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var a=n(3),r=n.n(a),c=n(10),i=n(29),o=(n(14),function(e){var t=e.url,n=e.token,a=e.action;return Object(c.a)(r.a.mark((function e(){var c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get({url:t,token:n,withCredentials:!1});case 3:return c=e.sent,e.abrupt("return",a({success:!0,data:c.data}));case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",a({success:!1,message:null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o?void 0:o.data}));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))}),s=function(e){var t=e.url,n=e.token,a=e.action,o=e.data;return function(){var e=Object(c.a)(r.a.mark((function e(c){var s,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post({url:t,params:o,withCredentials:!1,token:n});case 3:return s=e.sent,e.abrupt("return",a({success:!0,data:s.data}));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",a({success:!1,message:null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l?void 0:l.data,error:null===e.t0||void 0===e.t0?void 0:e.t0.response}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(26);var r=n(19);function c(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},82:function(e,t,n){var a=n(79).GenIcon;e.exports.IoMdAdd=function(e){return a({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"}}]})(e)}},83:function(e,t,n){"use strict";var a=n(129),r=n.n(a),c=n(130),i=n.n(c),o=n(0),s=n(2);t.a=function(e){var t=e.icon,n=e.handleClick,a=e.tooltip,c=Object(o.useRef)();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{type:"button",ref:c,ripple:"light",onClick:n,className:"flex justify-center items-center w-10 h-10 mx-2 hover:text-white hover:bg-indigo-600 active:bg-white active:text-indigo-600 rounded-md focus:outline-none shadow-lg text-indigo-600 bg-white",children:t}),Object(s.jsx)(r.a,{placement:"top",ref:c,children:Object(s.jsx)(i.a,{children:a})})]})}},85:function(e,t,n){"use strict";var a=n(2);t.a=function(e){var t=e.children,n=e.header,r=e.footer;return Object(a.jsxs)("div",{className:"flex flex-col justify-between relative w-full h-full px-1 sm:px-4 py-2 overflow-y-hidden",children:[Object(a.jsx)("div",{className:"w-full",children:n}),Object(a.jsx)("div",{className:"relative w-full h-full shadow-lg rounded-2xl overflow-hidden bg-white max-h-87 2xl:max-h-90 4xl:max-h-90",children:t}),Object(a.jsx)("div",{className:"w-full",children:r})]})}},86:function(e,t,n){"use strict";var a=n(126),r=n.n(a),c=n(127),i=n.n(c),o=n(128),s=n.n(o),l=n(2);t.a=function(e){var t=e.visible,n=e.setCloseModal,a=e.size,c=e.title,o=e.children;return Object(l.jsxs)(r.a,{size:a,active:t,toggler:n,children:[Object(l.jsx)(i.a,{toggler:n,children:Object(l.jsx)("span",{className:"text-base md:text-xl",children:c})}),Object(l.jsx)(s.a,{children:o})]})}},95:function(e,t,n){"use strict";var a=n(3),r=n.n(a),c=n(10);function i(e){var t={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":".xlsx","application/vnd.ms-excel":".xlsx",".csv":".xlsx",csv:".xlsx","application/pdf":".pdf",".pdf":".pdf",pdf:".pdf","image/png":".png","image/jpeg":".jpeg","image/jpg":".jpg"};return t[e]?t[e]:""}var o=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,o,s,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"===typeof t){e.next=2;break}return e.abrupt("return",!1);case 2:for(a=atob(t.split(",")[1]),c=[],o=0;o<a.length;o++)c.push(a.charCodeAt(o));return s=new Blob([new Uint8Array(c)],{type:n}),r=s,u="IMAGE-"+Date.now(),r.lastModifiedDate=new Date,r.name=u,l=r,e.abrupt("return",new File([l],l.name+i(s.type),{type:s.type}));case 8:case"end":return e.stop()}var r,u}),e)})));return function(t,n){return e.apply(this,arguments)}}();t.a=o},96:function(e,t,n){var a=n(79).GenIcon;e.exports.RiInboxUnarchiveLine=function(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{fillRule:"nonzero",d:"M20 3l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3h16zm0 6H4v10h16V9zm-8 1l4 4h-3v4h-2v-4H8l4-4zm6.764-5H5.236l-.999 2h15.527l-1-2z"}}]}]})(e)}},97:function(e,t,n){var a=n(79).GenIcon;e.exports.MdDone=function(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}}]})(e)}},98:function(e,t,n){var a=n(79).GenIcon;e.exports.MdDeleteForever=function(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}}]})(e)}}}]);
//# sourceMappingURL=8.4a7c9806.chunk.js.map