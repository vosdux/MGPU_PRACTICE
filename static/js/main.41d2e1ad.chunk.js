(this["webpackJsonpdrag-n-drop"]=this["webpackJsonpdrag-n-drop"]||[]).push([[0],{20:function(e,n,t){},21:function(e,n,t){},23:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var c,i=t(0),a=t.n(i),r=t(8),d=t.n(r),l=(t(20),t(15)),s=t(3),j=t(4),b=t(6),o=t(11),O=t(7),u=(t(21),t(2)),p=function(e){var n=e.children,t=e.className;return Object(u.jsx)("div",{className:"badge ".concat(t||""),children:n})};t(23);!function(e){e.right="right",e.left="left",e.initial="initial"}(c||(c={}));var f=[{name:"\u0424\u043b\u0435\u0448\u043a\u0438",id:"0"},{name:"\u0422\u0435\u043b\u0435\u043f\u043e\u0440\u0442\u0430\u0446\u0438\u044f",id:"1"},{name:"\u041e\u043f\u0442\u043e\u0432\u043e\u043b\u043e\u043a\u043e\u043d\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c",id:"2"},{name:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440",id:"3"}],h=["0","1","3"],g=["2"],m=function(e,n,t,c,i,a){var r=Object(o.a)(e),d=Object(o.a)(n),l=r.splice(t,1),s=Object(b.a)(l,1)[0];d.splice(c,0,s),i(r),a(d)},x=function(e,n,t,c){var i=Object(o.a)(e),a=i.splice(n,1),r=Object(b.a)(a,1)[0];console.log(r,"re"),console.log(i,"new"),i.splice(t,0,r),console.log(i,"nmew2"),c(i)},v=function(){var e=Object(i.useState)([]),n=Object(b.a)(e,2),t=n[0],a=n[1],r=Object(i.useState)([]),d=Object(b.a)(r,2),l=d[0],s=d[1],o=Object(i.useState)(f),v=Object(b.a)(o,2),P=v[0],N=v[1];return Object(u.jsx)("div",{className:"root",children:Object(u.jsxs)(O.a,{onDragEnd:function(e,n){if(e.destination){var i=e.destination.index,r=e.source.index,d=e.destination.droppableId,j=e.source.droppableId,b=e.draggableId;d===c.left&&(j===c.left?x(t,r,i,a):h.find((function(e){return e===b}))?m(P,t,r,i,N,a):alert("\u041d\u0435\u0432\u0435\u0440\u043d\u043e")),d===c.right&&(j===c.right?x(l,r,i,s):g.find((function(e){return e===b}))?m(P,l,r,i,N,s):alert("\u041d\u0435\u0432\u0435\u0440\u043d\u043e")),d===c.initial&&(j===c.initial&&x(P,r,i,N),j===c.right&&m(l,P,r,i,N,s),j===c.left&&m(t,P,r,i,N,a))}},children:[Object(u.jsxs)("div",{className:"columns",children:[Object(u.jsxs)("div",{className:"column",children:[Object(u.jsx)("p",{children:"\u0412\u043e\u043f\u0440\u043e\u0441 1"}),Object(u.jsx)(O.c,{droppableId:c.left,children:function(e,n){return Object(u.jsxs)("div",Object(j.a)(Object(j.a)({className:"dropable"},e.droppableProps),{},{ref:e.innerRef,children:[t.map((function(e,n){return Object(u.jsx)(O.b,{draggableId:e.id,index:n,children:function(n,t){return Object(u.jsx)("div",Object(j.a)(Object(j.a)(Object(j.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{style:Object(j.a)({},n.draggableProps.style),children:Object(u.jsx)(p,{className:"initial-item mb-10",children:e.name})}))}},e.id)})),e.placeholder]}))}})]}),Object(u.jsxs)("div",{className:"column",children:[Object(u.jsx)("p",{children:"\u0412\u043e\u043f\u0440\u043e\u0441 1"}),Object(u.jsx)(O.c,{droppableId:c.right,children:function(e,n){return Object(u.jsxs)("div",Object(j.a)(Object(j.a)({className:"dropable"},e.droppableProps),{},{ref:e.innerRef,children:[l.map((function(e,n){return Object(u.jsx)(O.b,{draggableId:e.id,index:n,children:function(n,t){return Object(u.jsx)("div",Object(j.a)(Object(j.a)(Object(j.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(u.jsx)(p,{className:"initial-item mb-10",children:e.name})}))}},e.id)})),e.placeholder]}))}})]})]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(O.c,{droppableId:c.initial,direction:"horizontal",children:function(e,n){return Object(u.jsxs)("div",Object(j.a)(Object(j.a)({className:"row"},e.droppableProps),{},{ref:e.innerRef,children:[P.map((function(e,n){return Object(u.jsx)(O.b,{draggableId:e.id,index:n,children:function(n,t){return Object(u.jsx)("div",Object(j.a)(Object(j.a)(Object(j.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{style:Object(j.a)({},n.draggableProps.style),children:Object(u.jsx)(p,{className:"initial-item",children:e.name})}))}},e.id)})),e.placeholder]}))}})})]})})};t(30);var P=function(){return Object(u.jsx)(l.a,{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{path:"/MGPU_PRACTICE",element:Object(u.jsx)(v,{})}),Object(u.jsx)(s.a,{path:"*",element:Object(u.jsx)(u.Fragment,{})})]})})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),a(e),r(e)}))};d.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),N()}},[[31,1,2]]]);
//# sourceMappingURL=main.41d2e1ad.chunk.js.map