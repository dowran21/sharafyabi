(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{FVIX:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return _}));var a=t("q1tI"),r=t.n(a),o=t("/MKj"),c=t("GE9s"),i=t("FGyW"),s=t("HhnA"),u=t("X8Wk"),d=t("uR58"),l=t("UGp+"),h=t("KZYA"),m=t("baJl"),f=t("6jqW"),v=t.n(f),b=t("PuFY"),p=r.a.createElement;function _(e){var n=e.location,t=e.setLocations,r=Object(a.useContext)(d.a),f=r.lang,_=(r.dispatchLang,Object(o.c)(m.c)),w=l.a().shape({phone:l.b().required(u.a[f].phone_required).min(8,u.a[f].phone_min).max(8,u.a[f].phone_max).matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,u.a[f].only_number),full_name:l.b().required(u.a[f].required).min(3,u.a[f].name_min).max(50,u.a[f].name_max),password:l.b().min(8,u.a[f].password_min).max(50,u.a[f].password_max).required(u.a[f].required).matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,u.a[f].password_regex)}),V=Object(c.d)({resolver:Object(h.a)(w)});V.register,V.handleSubmit,V.formState.errors,V.getValues,V.setValue,V.setError;return p("div",{className:"address_box"},p("div",{className:"trash1 p-2"},p(v.a,{icon:b.trashcan,size:20,onClick:function(){Object(s.b)({url:"user/".concat(f,"/delete-location/").concat(null===n||void 0===n?void 0:n.id),token:_,action:function(e){e.success?(console.log("get_delete ",e),t((function(e){return e.filter((function(e){return e.id!=n.id}))})),i.b.success(u.a[f].success_info)):console.log("error_delete ",e)}})}})),p("h3",null,null===n||void 0===n?void 0:n.address),p("p",null,null===n||void 0===n?void 0:n.comment))}},PuFY:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.trashcan=void 0;n.trashcan={viewBox:"0 0 12 16",children:[{name:"path",attribs:{"fill-rule":"evenodd",d:"M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"},children:[]}],attribs:{}}},SKvl:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/location",function(){return t("FVIX")}])},baJl:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return r})),t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return c}));var a=function(e){return e.auth.token},r=function(e){return e.auth.user},o=function(e){return e.data.categories},c=function(e){return e.data.sebet}}},[["SKvl",2,1,0,3,5,6,7]]]);