"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[264],{264:function(r,t,n){n.r(t),n.d(t,{default:function(){return o}});var e=n(184),a=function(r){var t=r.cast;return(0,e.jsx)("div",{children:(0,e.jsx)("ul",{children:t.slice(0,6).map((function(r){return(0,e.jsxs)("li",{children:[(0,e.jsx)("img",{src:"https://image.tmdb.org/t/p/w185/".concat(r.profile_path),alt:r.name}),(0,e.jsx)("p",{children:r.name}),(0,e.jsxs)("p",{children:["Character: ",r.character]})]},r.id)}))})})},u=n(784),c=n(914),i=n(689),s=n(747),o=function(){var r=(0,i.UO)().movieid,t=(0,c.i)(s.y,r),n=t.data,o=t.isLoading,f=t.error;return f?(0,e.jsx)("p",{children:f.message}):(0,e.jsxs)("div",{children:[o&&(0,e.jsx)(u.a,{}),n&&(0,e.jsx)(a,{cast:n.cast})]})}},914:function(r,t,n){n.d(t,{i:function(){return u}});var e=n(439),a=n(791),u=function(r,t){var n=(0,a.useState)(null),u=(0,e.Z)(n,2),c=u[0],i=u[1],s=(0,a.useState)(!1),o=(0,e.Z)(s,2),f=o[0],p=o[1],h=(0,a.useState)(null),d=(0,e.Z)(h,2),l=d[0],v=d[1];return(0,a.useEffect)((function(){r(t).then((function(r){i(r.data)})).catch((function(r){v(r)})).finally((function(){p(!1)}))}),[r,t]),{data:c,isLoading:f,error:l}}},747:function(r,t,n){n.d(t,{Bt:function(){return p},C5:function(){return h},Mc:function(){return o},vw:function(){return s},y:function(){return f}});var e=n(861),a=n(757),u=n.n(a),c=n(294);c.Z.defaults.baseURL="https://api.themoviedb.org";var i="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGJmZTU2ZDg0N2ExYWQwYmIxMDUyODQ3MDZlMzA3MCIsInN1YiI6IjY1Y2Y0ZmJkODczZjAwMDE4YTBkNzgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LyxEDpgpr0aMEr5KqtgGYBHZxsnQxzc-rTD-Lab__Ck",s=function(){var r=(0,e.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("3/trending/all/day?language=en-US",{headers:{Authorization:i}});case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="3/movie/".concat(t),r.next=3,c.Z.get(n,{headers:{Authorization:i}});case 3:return e=r.sent,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="3/movie/".concat(t,"/credits"),r.next=3,c.Z.get(n,{headers:{Authorization:i}});case 3:return e=r.sent,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="3/movie/".concat(t,"/reviews"),r.next=3,c.Z.get(n,{headers:{Authorization:i}});case 3:return e=r.sent,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="3/search/movie?query=".concat(t),r.next=3,c.Z.get(n,{headers:{Authorization:i}});case 3:return e=r.sent,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=264.3b4180b5.chunk.js.map