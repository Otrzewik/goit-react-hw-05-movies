"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[325],{126:function(t,e,n){n.d(e,{e:function(){return i}});var r=n(689),u=n(87),a=n(184),i=function(t){var e=t.movies,n=(0,r.TH)();return(0,a.jsx)("ul",{children:e.map((function(t){return(0,a.jsx)("li",{children:(0,a.jsx)(u.rU,{to:"/movies/".concat(t.id),state:{from:n},children:t.title?t.title:t.name})},t.id)}))})}},914:function(t,e,n){n.d(e,{i:function(){return a}});var r=n(439),u=n(791),a=function(t,e){var n=(0,u.useState)(null),a=(0,r.Z)(n,2),i=a[0],c=a[1],o=(0,u.useState)(!1),s=(0,r.Z)(o,2),f=s[0],l=s[1],h=(0,u.useState)(null),p=(0,r.Z)(h,2),v=p[0],d=p[1];return(0,u.useEffect)((function(){t(e).then((function(t){c(t.data)})).catch((function(t){d(t)})).finally((function(){l(!1)}))}),[t,e]),{data:i,isLoading:f,error:v}}},325:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(439),u=n(784),a=n(126),i="Searchbar_form__D-hp5",c=n(184),o=function(t){var e=t.handleSubmit;return(0,c.jsx)("div",{children:(0,c.jsxs)("form",{onSubmit:e,className:i,children:[(0,c.jsx)("input",{type:"text",name:"movie"}),(0,c.jsx)("button",{type:"submit",children:"Search"})]})})},s=n(914),f=n(87),l="Movies_Movies__0Dbry",h=n(747),p=function(){var t,e=(0,f.lr)(),n=(0,r.Z)(e,2),i=n[0],p=n[1],v=null!==(t=i.get("title"))&&void 0!==t?t:"",d=(0,s.i)(h.C5,v),m=d.data,x=d.isLoading,Z=d.error;return Z?(0,c.jsx)("div",{children:Z.message}):(0,c.jsxs)("div",{className:l,children:[(0,c.jsx)(o,{handleSubmit:function(t){t.preventDefault();var e=t.currentTarget.elements.movie.value;p({title:e})}}),x&&(0,c.jsx)(u.a,{}),m&&(0,c.jsx)(a.e,{movies:m.results})]})}},747:function(t,e,n){n.d(e,{Bt:function(){return l},C5:function(){return h},Mc:function(){return s},vw:function(){return o},y:function(){return f}});var r=n(861),u=n(757),a=n.n(u),i=n(294);i.Z.defaults.baseURL="https://api.themoviedb.org";var c="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGJmZTU2ZDg0N2ExYWQwYmIxMDUyODQ3MDZlMzA3MCIsInN1YiI6IjY1Y2Y0ZmJkODczZjAwMDE4YTBkNzgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LyxEDpgpr0aMEr5KqtgGYBHZxsnQxzc-rTD-Lab__Ck",o=function(){var t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("3/trending/all/day?language=en-US",{headers:{Authorization:c}});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="3/movie/".concat(e),t.next=3,i.Z.get(n,{headers:{Authorization:c}});case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="3/movie/".concat(e,"/credits"),t.next=3,i.Z.get(n,{headers:{Authorization:c}});case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="3/movie/".concat(e,"/reviews"),t.next=3,i.Z.get(n,{headers:{Authorization:c}});case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="3/search/movie?query=".concat(e),t.next=3,i.Z.get(n,{headers:{Authorization:c}});case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=325.938fad8e.chunk.js.map