(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{Phug:function(i,o,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/products",function(){return a("X/Eh")}])},"X/Eh":function(i,o,a){"use strict";a.r(o);var e=a("q1tI"),t=a.n(e),n=(a("/MKj"),a("2vfM")),r=a("nOHt"),p=a("m9Y6"),s=(a("mK+b"),a("6QH/")),c=(a("iagI"),a("fg+H")),d=a("P7bw"),l=a("Npp4"),x=a("JPSD"),u=a("HhnA"),_=a("X8Wk"),m=a("uR58"),k=a("x2Pk"),v=a("xFHe"),y=a.n(v),h=a("YLPl"),f=t.a.createElement;o.default=function(){var i=Object(e.useContext)(m.a),o=i.lang,a=(i.dispatchLang,Object(e.useState)(0)),v=(a[0],a[1]),g=Object(e.useState)(),E=g[0],S=g[1],D=Object(e.useState)(),A=(D[0],D[1]),V=Object(e.useState)(1),B=V[0],b=V[1],G=Object(e.useState)([]),O=(G[0],G[1],Object(e.useState)([])),w=O[0],j=O[1],N=Object(e.useState)(),P=N[0],F=N[1],M=Object(e.useState)([]),C=M[0],T=M[1],J=Object(e.useState)([]),X=J[0],q=J[1],H=Object(e.useState)(),L=H[0],R=H[1],Y=Object(e.useState)(),I=Y[0],K=Y[1],Q=Object(e.useState)(!0),W=Q[0],z=Q[1],U=Object(e.useState)([]),Z=U[0],$=U[1];Object(e.useEffect)((function(){Object(u.a)({url:"".concat(o,"/get-producers"),token:"",action:function(i){var o;i.success&&$(null===i||void 0===i?void 0:null===(o=i.data)||void 0===o?void 0:o.rows)}})}),[o]);var ii=Object(r.useRouter)(),oi=ii.query;return console.log(oi),Object(e.useEffect)((function(){var i,a,e,t,n;(null===oi||void 0===oi?void 0:null===(i=oi.main_category_id)||void 0===i?void 0:i.length)>0?F(JSON.parse(null===oi||void 0===oi?void 0:oi.main_category_id)):F(),(null===oi||void 0===oi?void 0:null===(a=oi.category_id)||void 0===a?void 0:a.length)>0?T(JSON.parse(null===oi||void 0===oi?void 0:oi.category_id)):T([]),(null===oi||void 0===oi?void 0:null===(e=oi.producer_id)||void 0===e?void 0:e.length)>0?q(JSON.parse(null===oi||void 0===oi?void 0:oi.producer_id)):q([]),(null===oi||void 0===oi?void 0:null===(t=oi.min_price)||void 0===t?void 0:t.length)>0?R(JSON.parse(null===oi||void 0===oi?void 0:oi.min_price)):R(),(null===oi||void 0===oi?void 0:null===(n=oi.max_price)||void 0===n?void 0:n.length)>0?K(JSON.parse(null===oi||void 0===oi?void 0:oi.max_price)):K(),z(!0),Object(u.a)({url:"".concat(o,"/get-products?search=").concat(null===oi||void 0===oi?void 0:oi.search,"&page=").concat(null===oi||void 0===oi?void 0:oi.page,"&limit=").concat(null===oi||void 0===oi?void 0:oi.limit,"&main_category_id=").concat(null===oi||void 0===oi?void 0:oi.main_category_id,"&category_id=").concat(null===oi||void 0===oi?void 0:oi.category_id,"&producer_id=").concat(oi.producer_id,"&min_price=").concat(null===oi||void 0===oi?void 0:oi.min_price,"&max_price=").concat(null===oi||void 0===oi?void 0:oi.max_price,"&recomended=").concat(null===oi||void 0===oi?void 0:oi.recomended,"&new_in_come=").concat(null===oi||void 0===oi?void 0:oi.new_in_come,"&discounts=").concat(null===oi||void 0===oi?void 0:oi.discounts,"&sort_column=").concat(null===oi||void 0===oi?void 0:oi.sort_column,"&sort_direction=").concat(null===oi||void 0===oi?void 0:oi.sort_direction),token:"",action:function(i){var o;i.success?(j(null===i||void 0===i?void 0:null===(o=i.data)||void 0===o?void 0:o.rows),z(!1)):console.log("error_products ",i)}})}),[oi,o]),Object(e.useEffect)((function(){console.log(oi),console.log(P,"---main_id"),console.log(C,"---cate_id"),console.log(X,"----producer_id"),console.log(L,"----max"),console.log(I,"----max"),console.log(w,"-----products")}),[w]),Object(e.useEffect)((function(){ii.push({pathname:"/shop/products",query:{search:null===oi||void 0===oi?void 0:oi.search,page:B,limit:20,main_category_id:null===oi||void 0===oi?void 0:oi.main_category_id,category_id:null===oi||void 0===oi?void 0:oi.category_id,producer_id:null===oi||void 0===oi?void 0:oi.producer_id,min_price:null===oi||void 0===oi?void 0:oi.min_price,max_price:null===oi||void 0===oi?void 0:oi.max_price,recomended:null===oi||void 0===oi?void 0:oi.recomended,new_in_come:null===oi||void 0===oi?void 0:oi.new_in_come,discounts:null===oi||void 0===oi?void 0:oi.discounts,sort_column:null===oi||void 0===oi?void 0:oi.sort_column,sort_direction:null===oi||void 0===oi?void 0:oi.sort_direction}})}),[B]),console.log(B),f(s.a,{title:"Sharafyabi | Shop",container:"wide"},f(p.a,{title:_.a[o].shop},f(p.b,{name:_.a[o].home}),f(p.b,{name:_.a[o].shop,current:!0})),f("div",{className:"shop -five-col"},f("div",{className:"container-full-half"},f("div",{className:"row"},f("div",{className:"col-12 col-md-4 col-lg-3 col-xl-2"},f(x.a,{main_category_id:P,setMain_category_id:F,category_id:C,setCategory_id:T,producer_id:X,setProducer_id:q,priceMin:L,setPriceMin:R,priceMax:I,setPriceMax:K,brends:Z,query:oi})),f("div",{className:"col-12 col-md-8 col-lg-9 col-xl-10"},f(d.a,{view:E,getCurrentSort:A,getCurrentView:function(i){return S(i)},query:oi,category_id:C,producer_id:X,priceMin:L,priceMax:I}),W?f(k.a,{type:"table"}):f(t.a.Fragment,null,0==(null===w||void 0===w?void 0:w.count)?f("div",{className:"no_product"},f("div",{style:{width:"200px",height:"200px"}},f(y.a,{animationData:h,loop:!0,autoplay:!0})),f("h1",{className:"mt-3"},_.a[o].no_product)):f(t.a.Fragment,null,f("h4",{className:"mb-3"},_.a[o].sum,":",null===w||void 0===w?void 0:w.count),f(c.a,{gridColClass:"col-12 col-sm-6 col-lg-4 col-xl-3",listColClass:"col-12 col-xl-6",view:E,products:w}),f(n.a,{pageContainerClass:"paginator",totalRecords:null===w||void 0===w?void 0:w.count,pageLimit:20,pageNeighbours:2,setOffset:v,currentPage:B,setCurrentPage:b}))))))),f(l.a,null))}},YLPl:function(i){i.exports=JSON.parse('{"v":"5.1.20","fr":25,"ip":0,"op":85,"w":800,"h":800,"nm":"loading-11","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"\u201c\u56fe\u5c42 5\u201d\u8f6e\u5ed3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":5,"s":[100],"e":[100]},{"t":11}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":5,"s":[45],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":11,"s":[0],"e":[-2]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":13,"s":[-2],"e":[0]},{"t":15}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":15,"s":[628,690,0],"e":[628,670,0],"to":[6.25,-0.95833331346512,0],"ti":[3.33333325386047,3.33333325386047,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":22,"s":[628,670,0],"e":[608,670,0],"to":[-3.33333325386047,-3.33333325386047,0],"ti":[4.33333349227905,-3.33333325386047,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":29,"s":[608,670,0],"e":[602,690,0],"to":[-4.33333349227905,3.33333325386047,0],"ti":[0,-6.66666650772095,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":36,"s":[602,690,0],"e":[608,710,0],"to":[0,6.66666650772095,0],"ti":[-4.33333349227905,-4.60416650772095,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":43,"s":[608,710,0],"e":[628,717.625,0],"to":[4.33333349227905,4.60416650772095,0],"ti":[-6.66666650772095,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":50,"s":[628,717.625,0],"e":[648,710,0],"to":[6.66666650772095,0,0],"ti":[-4.41666650772095,4.60416650772095,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":57,"s":[648,710,0],"e":[654.5,690,0],"to":[4.41666650772095,-4.60416650772095,0],"ti":[0,6.66666650772095,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":64,"s":[654.5,690,0],"e":[648,670,0],"to":[0,-6.66666650772095,0],"ti":[4.41666650772095,3.33333325386047,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":71,"s":[648,670,0],"e":[628,670,0],"to":[-4.41666650772095,-3.33333325386047,0],"ti":[3.33333325386047,-3.33333325386047,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":78,"s":[628,670,0],"e":[628,690,0],"to":[-3.33333325386047,3.33333325386047,0],"ti":[-6.5,-2.70833325386047,0]},{"t":85}],"ix":2},"a":{"a":0,"k":[628,690,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":5,"s":[0,0,100],"e":[100,100,100]},{"t":11}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,38.546],[-38.546,0],[0,-38.546],[38.546,0]],"o":[[0,-38.546],[38.546,0],[0,38.546],[-38.546,0]],"v":[[-87.881,-21.612],[-17.976,-91.517],[51.93,-21.612],[-17.976,48.293]],"c":true},"ix":2},"nm":"\u8def\u5f84 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[2.103,2.103],[0,0],[0,22.254],[44.683,0],[0,-44.683],[-44.682,0],[-13.646,10.495],[0,0],[-2.103,2.103]],"o":[[0,0],[14.539,-14.627],[0,-44.683],[-44.682,0],[0,44.683],[18.546,0],[0,0],[2.103,2.103],[2.103,-2.103]],"v":[[96.778,92.797],[39.401,35.42],[62.93,-21.612],[-17.976,-102.517],[-98.881,-21.612],[-17.976,59.293],[31.292,42.543],[89.162,100.413],[96.778,100.413]],"c":true},"ix":2},"nm":"\u8def\u5f84 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"\u5408\u5e76\u8def\u5f84 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.663000009574,0.74900004069,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[529.115,587.738],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"\u7ec4 1","np":4,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"\u6587\u4ef6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":5,"s":[45],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":11,"s":[0],"e":[-2]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":13,"s":[-2],"e":[0]},{"t":15}],"ix":10},"p":{"a":0,"k":[628,714,0],"ix":2},"a":{"a":0,"k":[628,714,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":5,"s":[0,0,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":11,"s":[100,100,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":13,"s":[100,100,100],"e":[100,100,100]},{"t":15}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.993,0],[0,0],[0,2.99],[-2.989,0],[0,0],[0,-2.993]],"o":[[0,0],[-2.989,0],[0,-2.993],[0,0],[2.993,0],[0,2.99]],"v":[[26.031,-2.993],[-135.548,-2.993],[-140.931,-8.377],[-135.548,-13.764],[26.031,-13.764],[31.419,-8.377]],"c":true},"ix":2},"nm":"\u8def\u5f84 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[2.394,0],[0,0],[0,2.99],[-2.994,0],[0,0],[0,-2.992]],"o":[[0,0],[-2.994,0],[0,-2.992],[0,0],[2.993,0],[0,2.99]],"v":[[-35.009,99.341],[-134.948,99.341],[-140.335,93.957],[-134.948,88.57],[-35.009,88.57],[-29.621,93.957]],"c":true},"ix":2},"nm":"\u8def\u5f84 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[2.994,0],[0,2.994],[0,0],[-2.993,0],[0,-2.993],[0,0]],"o":[[-2.993,0],[0,0],[0,-2.993],[2.994,0],[0,0],[0,2.994]],"v":[[-215.739,-58.647],[-221.125,-64.034],[-221.125,-250.746],[-215.739,-256.132],[-210.352,-250.746],[-210.352,-64.034]],"c":true},"ix":2},"nm":"\u8def\u5f84 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[2.993,0],[0,2.993],[0,0],[8.976,0],[0,0],[0,2.993],[-2.993,0],[0,0],[0,-14.962],[0,0]],"o":[[-2.992,0],[0,0],[0,-8.976],[0,0],[-2.993,0],[0,-2.993],[0,0],[14.962,0],[0,0],[0,2.394]],"v":[[215.737,17.955],[210.35,12.569],[210.35,-250.746],[194.193,-266.903],[-194.194,-266.903],[-199.581,-272.29],[-194.194,-277.677],[194.193,-277.677],[221.125,-250.746],[221.125,13.168]],"c":true},"ix":2},"nm":"\u8def\u5f84 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[2.994,0],[0,2.993],[0,0],[-2.993,0],[0,-2.993],[0,0]],"o":[[-2.993,0],[0,0],[0,-2.993],[2.994,0],[0,0],[0,2.993]],"v":[[-215.739,24.537],[-221.125,19.151],[-221.125,-13.164],[-215.739,-18.552],[-210.352,-13.164],[-210.352,19.151]],"c":true},"ix":2},"nm":"\u8def\u5f84 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[2.993,0],[0,0],[0,14.962],[0,0],[-2.993,0],[0,-2.994],[0,0],[-8.976,0],[0,0],[0,-2.993]],"o":[[0,0],[-14.962,0],[0,0],[0,-2.994],[2.994,0],[0,0],[0,8.98],[0,0],[2.993,0],[0,2.993]],"v":[[2.693,277.677],[-194.194,277.677],[-221.125,250.746],[-221.125,37.106],[-215.739,31.719],[-210.352,37.106],[-210.352,250.746],[-194.194,266.903],[2.693,266.903],[8.08,272.29]],"c":true},"ix":2},"nm":"\u8def\u5f84 6","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"\u5408\u5e76\u8def\u5f84 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.663000009574,0.74900004069,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[407.523,431.504],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"\u7ec4 1","np":8,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.394,0],[0,0],[0,2.993],[-2.993,0],[0,0],[0,-2.993]],"o":[[0,0],[-2.993,0],[0,-2.993],[0,0],[2.99,0],[0,2.993]],"v":[[4.192,5.386],[-4.189,5.386],[-9.576,-0.001],[-4.189,-5.387],[4.192,-5.387],[9.576,-0.001]],"c":true},"ix":2},"nm":"\u8def\u5f84 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.663000009574,0.74900004069,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[529.902,336.951],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"\u7ec4 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.993,0],[0,0],[0,2.993],[-2.989,0],[0,0],[0,-2.993]],"o":[[0,0],[-2.989,0],[0,-2.993],[0,0],[2.993,0],[0,2.993]],"v":[[15.558,5.386],[-15.561,5.386],[-20.945,-0.001],[-15.561,-5.387],[15.558,-5.387],[20.945,-0.001]],"c":true},"ix":2},"nm":"\u8def\u5f84 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.663000009574,0.74900004069,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[493.399,336.951],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"\u7ec4 3","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.592,0],[0,0],[0,2.993],[-2.993,0],[0,0],[0,-2.993]],"o":[[0,0],[-2.993,0],[0,-2.993],[0,0],[2.992,0],[0,2.993]],"v":[[91.86,5.386],[-91.86,5.386],[-97.246,-0.001],[-91.86,-5.387],[91.86,-5.387],[97.247,-0.001]],"c":true},"ix":2},"nm":"\u8def\u5f84 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.663000009574,0.74900004069,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[364.434,336.951],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"\u7ec4 4","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"\u7ebf","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[800.87,733.155],[795,733.155],[795,790.578],[800.87,790.578]],"c":true}],"e":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[800.87,733.155],[9,733.155],[9,790.578],[800.87,790.578]],"c":true}]},{"t":8}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"\u8499\u7248 1"}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.589,0],[0,0],[0,2.993],[-2.993,0],[0,0],[0,-2.989]],"o":[[0,0],[-2.993,0],[0,-2.989],[0,0],[2.993,0],[0,2.993]],"v":[[325.551,5.385],[-325.55,5.385],[-330.938,-0.002],[-325.55,-5.385],[325.551,-5.385],[330.938,-0.002]],"c":true},"ix":2},"nm":"\u8def\u5f84 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.663000009574,0.74900004069,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[409.276,757.654],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"\u7ec4 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.993,0],[0,0],[0,2.993],[-2.993,0],[0,0],[0,-2.989]],"o":[[0,0],[-2.993,0],[0,-2.989],[0,0],[2.993,0],[0,2.993]],"v":[[6.582,5.385],[-6.582,5.385],[-11.969,-0.002],[-6.582,-5.385],[6.582,-5.385],[11.969,-0.002]],"c":true},"ix":2},"nm":"\u8def\u5f84 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.663000009574,0.74900004069,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[773.127,757.654],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"\u7ec4 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.394,0],[0,0],[0,2.993],[-2.993,0],[0,0],[0,-2.989]],"o":[[0,0],[-2.993,0],[0,-2.989],[0,0],[2.993,0],[0,2.993]],"v":[[20.048,5.385],[-20.048,5.385],[-25.434,-0.002],[-20.048,-5.385],[20.048,-5.385],[25.434,-0.002]],"c":true},"ix":2},"nm":"\u8def\u5f84 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.663000009574,0.74900004069,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[40.338,757.654],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"\u7ec4 3","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"\u70b9\u7f00","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":8,"s":[0],"e":[100]},{"t":9}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":15,"s":[{"i":[[1.229,0],[0,1.301],[-1.301,0],[0,-1.302]],"o":[[-1.301,0],[0,-1.302],[1.301,0],[0,1.301]],"v":[[310.892,-151.785],[308.578,-154.098],[310.892,-156.412],[313.205,-154.098]],"c":true}],"e":[{"i":[[10.171,0],[0,10.77],[-10.773,0],[0,-10.774]],"o":[[-10.773,0],[0,-10.774],[10.771,0],[0,10.77]],"v":[[310.892,-134.949],[291.741,-154.098],[310.892,-173.248],[330.041,-154.098]],"c":true}]},{"t":18}],"ix":2},"nm":"\u5916\u5708","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":15,"s":[{"i":[[-1.377,0],[0,1.252],[1.251,0],[0,-1.251]],"o":[[1.376,0],[0,-1.251],[-1.251,0],[0,1.251]],"v":[[310.89,-151.803],[313.267,-154.18],[310.89,-156.432],[308.512,-154.054]],"c":true}],"e":[{"i":[[-6.585,0],[0,5.987],[5.983,0],[0,-5.986]],"o":[[6.582,0],[0,-5.982],[-5.985,0],[0,5.983]],"v":[[310.892,-143.328],[322.262,-154.699],[310.892,-165.468],[299.518,-154.098]],"c":true}]},{"t":18}],"ix":2},"nm":"\u5185\u5708","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":12,"s":[{"i":[[0,0],[0,0],[0.007,-0.016],[-0.016,-0.007],[0,0],[0,0],[-0.016,-0.007],[-0.007,0.016],[0,0],[0,0],[-0.007,0.016],[0.016,0.007],[0,0],[0,0],[0.016,0.007],[0.007,-0.016]],"o":[[0,0],[-0.016,-0.01],[-0.007,0.016],[0,0],[0,0],[-0.01,0.016],[0.016,0.01],[0,0],[0,0],[0.016,0.01],[0.007,-0.016],[0,0],[0,0],[0.01,-0.016],[-0.016,-0.007],[0.003,0]],"v":[[309.68,148.362],[309.608,148.33],[309.563,148.346],[309.579,148.392],[309.651,148.424],[309.621,148.493],[309.638,148.538],[309.683,148.522],[309.713,148.454],[309.778,148.483],[309.823,148.467],[309.807,148.421],[309.742,148.392],[309.768,148.33],[309.752,148.284],[309.706,148.301]],"c":true}],"e":[{"i":[[0,0],[0,0],[1.199,-2.989],[-2.993,-1.198],[0,0],[0,0],[-2.99,-1.195],[-1.198,2.989],[0,0],[0,0],[-1.198,2.993],[2.993,1.194],[0,0],[0,0],[2.989,1.198],[1.2,-2.993]],"o":[[0,0],[-2.993,-1.798],[-1.195,2.993],[0,0],[0,0],[-1.797,2.993],[2.993,1.798],[0,0],[0,0],[2.99,1.794],[1.196,-2.993],[0,0],[0,0],[1.799,-2.994],[-2.993,-1.196],[0.6,0]],"v":[[307.299,139.136],[294.134,133.153],[285.754,136.143],[288.747,144.523],[301.913,150.506],[296.528,163.074],[299.518,171.45],[307.898,168.462],[313.286,155.893],[325.254,161.279],[333.63,158.286],[330.637,149.911],[318.668,144.523],[323.455,133.153],[320.466,124.773],[312.086,127.766]],"c":true}]},{"t":15}],"ix":2},"nm":"X1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":9,"s":[{"i":[[-0.003,-0.002],[0,0],[0,0],[-0.005,-0.003],[-0.003,0.005],[0,0],[0,0],[-0.003,0.005],[0.005,0.003],[0,0],[0,0],[0.005,0.003],[0.003,-0.005],[0,0],[0,0],[0.003,-0.005]],"o":[[0,0],[0,0],[-0.002,0.004],[0.004,0.002],[0,0],[0,0],[0.004,0.002],[0.002,-0.004],[0,0],[0,0],[0.002,-0.004],[-0.004,-0.002],[0,0],[0,0],[-0.004,-0.002],[0,0.004]],"v":[[-316.598,-19.453],[-316.585,-19.447],[-316.592,-19.434],[-316.588,-19.423],[-316.578,-19.427],[-316.571,-19.44],[-316.557,-19.433],[-316.547,-19.436],[-316.551,-19.447],[-316.565,-19.454],[-316.558,-19.467],[-316.562,-19.478],[-316.572,-19.474],[-316.579,-19.461],[-316.592,-19.467],[-316.602,-19.464]],"c":true}],"e":[{"i":[[1.794,1.2],[0,0],[0,0],[2.99,1.797],[1.799,-2.99],[0,0],[0,0],[1.795,-2.993],[-2.993,-1.795],[0,0],[0,0],[-2.993,-1.798],[-1.794,2.99],[0,0],[0,0],[-1.794,2.99]],"o":[[0,0],[0,0],[1.195,-2.394],[-2.394,-1.196],[0,0],[0,0],[-2.394,-1.199],[-1.198,2.394],[0,0],[0,0],[-1.199,2.391],[2.395,1.195],[0,0],[0,0],[2.393,1.195],[0,-2.394]],"v":[[-300.715,-17.656],[-309.095,-21.843],[-304.902,-30.22],[-307.296,-36.805],[-313.882,-34.411],[-318.069,-26.032],[-327.046,-30.819],[-333.629,-28.426],[-331.234,-21.843],[-322.259,-17.056],[-326.447,-8.676],[-324.053,-2.094],[-317.471,-4.488],[-313.283,-12.867],[-304.902,-8.676],[-298.32,-11.07]],"c":true}]},{"t":12}],"ix":2},"nm":"X2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.752999997606,0.8,0.855000035903,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[398.545,209.784],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"\u7ec4 1","np":6,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0}],"markers":[]}')}},[["Phug",0,2,16,1,3,4,6,5,7,8,9,10,11,13,15]]]);