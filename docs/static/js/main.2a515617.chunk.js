(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(7),s=n.n(i),u=n(2),j=n(9),o=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(u.a)(n,2),i=r[0],s=r[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(j.a)(e))})),s(""))},children:[Object(a.jsx)("h2",{children:"Add Category"}),Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){s(e.target.value)}})]})},d=n(10),l=n(6),p=n.n(l),b=n(8),f=function(){var e=Object(b.a)(p.a.mark((function e(t){var n,a,c,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"xQnjXFKPiWqQKNK6qWeTp8LhMTVkXCnX",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=9&api_key=").concat("xQnjXFKPiWqQKNK6qWeTp8LhMTVkXCnX"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){e.id;var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:n,alt:t}),Object(a.jsx)("p",{children:t})]})},m=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){f(e).then((function(e){r({data:e,loading:!1})}))}),[e]),a}(t),r=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",t," "]}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(a.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(a.jsx)(h,Object(d.a)({},e),e.id)}))})]})},O=function(){var e=Object(c.useState)(["Dragon Ball"]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GiftExpertApp"}),Object(a.jsx)(o,{setCategories:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(m,{category:e},e)}))})]})};n(17);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2a515617.chunk.js.map