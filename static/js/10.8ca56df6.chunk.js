"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[10],{10:function(n,r,t){t.r(r),t.d(r,{default:function(){return f}});var e=t(784),u=(t(791),t(184)),a=function(){return(0,u.jsx)("div",{children:"We don't have any reviews for this movie."})},i=function(n){var r=n.reviews;return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:r.map((function(n){return(0,u.jsxs)("li",{children:[(0,u.jsxs)("h2",{children:["Author: ",n.author]}),(0,u.jsx)("p",{children:n.content})]},n.id)}))})})},c=t(914),s=t(689),o=t(747),f=function(){var n=(0,s.UO)().movieid,r=(0,c.i)(o.Bt,n),t=r.data,f=r.isLoading,h=r.error;return h?(0,u.jsx)("p",{children:h.message}):(0,u.jsxs)("div",{children:[f&&(0,u.jsx)(e.a,{}),t&&(null===t||void 0===t?void 0:t.results.length)>0&&(0,u.jsx)(i,{reviews:t.results}),0===(null===t||void 0===t?void 0:t.results.length)&&(0,u.jsx)(a,{})]})}},914:function(n,r,t){t.d(r,{i:function(){return a}});var e=t(439),u=t(791),a=function(n,r){var t=(0,u.useState)(null),a=(0,e.Z)(t,2),i=a[0],c=a[1],s=(0,u.useState)(!1),o=(0,e.Z)(s,2),f=o[0],h=o[1],d=(0,u.useState)(null),l=(0,e.Z)(d,2),p=l[0],v=l[1];return(0,u.useEffect)((function(){n(r).then((function(n){c(n.data)})).catch((function(n){v(n)})).finally((function(){h(!1)}))}),[n,r]),{data:i,isLoading:f,error:p}}},747:function(n,r,t){t.d(r,{Bt:function(){return h},C5:function(){return d},Mc:function(){return o},vw:function(){return s},y:function(){return f}});var e=t(861),u=t(757),a=t.n(u),i=t(294);i.Z.defaults.baseURL="https://api.themoviedb.org";var c="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGJmZTU2ZDg0N2ExYWQwYmIxMDUyODQ3MDZlMzA3MCIsInN1YiI6IjY1Y2Y0ZmJkODczZjAwMDE4YTBkNzgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LyxEDpgpr0aMEr5KqtgGYBHZxsnQxzc-rTD-Lab__Ck",s=function(){var n=(0,e.Z)(a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("3/trending/all/day?language=en-US",{headers:{Authorization:c}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(a().mark((function n(r){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="3/movie/".concat(r),n.next=3,i.Z.get(t,{headers:{Authorization:c}});case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(r){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="3/movie/".concat(r,"/credits"),n.next=3,i.Z.get(t,{headers:{Authorization:c}});case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(a().mark((function n(r){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="3/movie/".concat(r,"/reviews"),n.next=3,i.Z.get(t,{headers:{Authorization:c}});case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(a().mark((function n(r){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="3/search/movie?query=".concat(r),n.next=3,i.Z.get(t,{headers:{Authorization:c}});case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=10.8ca56df6.chunk.js.map