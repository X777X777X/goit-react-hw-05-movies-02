"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[705],{971:function(n,t,r){r.d(t,{Hq:function(){return d},xc:function(){return x},Y5:function(){return f},Hx:function(){return l},Tg:function(){return s}});var e=r(861),a=r(757),i=r.n(a),o=r(924),c=r.p+"static/media/noImage.baba1a7394e8054d69cf.png",u=r(990);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"efeda743ab45883687fff04b1ed36428"};var p="https://image.tmdb.org/t/p/w500",s=function(){var n=(0,e.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o.Z.get("/trending/all/day?").then((function(n){return n.data.results.map((function(n){var t=n.id,r=n.title,e=n.poster_path;return{id:t,title:r,poster:p+e}}))})).catch((function(n){return{poster:u}})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o.Z.get("/search/movie?query=".concat(t)).then((function(n){return n.data.results.map((function(n){var t=n.id,r=n.title,e=n.poster_path;return{id:t,title:r,poster:p+e}}))})).catch((function(n){return{poster:u}})));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(n){return o.Z.get("/movie/".concat(n,"?")).then((function(n){var t=n.data,r=t.id,e=t.poster_path,a=t.title,i=t.release_date,o=t.vote_average,c=t.overview,u=t.genres;return{id:r,poster:p+e,title:a,releaseYear:new Date(i).getFullYear(),userScore:Math.round(10*o),overview:c,genres:u}})).catch((function(n){return{poster:u}}))},x=function(n){return o.Z.get("/movie/".concat(n,"/credits?")).then((function(n){return n.data.cast.map((function(n){var t=n.id,r=n.name,e=n.character,a=n.profile_path;return{id:t,name:r,character:e,photo:a?p+a:c}}))})).catch((function(n){return{poster:u}}))},l=function(n){return o.Z.get("/movie/".concat(n,"/reviews?")).then((function(n){return n.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}))})).catch((function(n){return{poster:u}}))}},736:function(n,t,r){r.r(t),r.d(t,{default:function(){return k}});var e,a,i,o,c,u,p=r(439),s=r(971),d=r(791),f=r(689),x=r(168),l=r(444),h=l.ZP.div(e||(e=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  background-color: #3fc50a5b;\n  margin: 20px 30px 30px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n"]))),g=l.ZP.ul(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding: 0;\n  transition-duration: 300ms;\n"]))),m=l.ZP.li(i||(i=(0,x.Z)(["\n  background: rgba(255, 255, 255, 0);\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  width: 100%;\n  max-width: 200px;\n  margin: 10px;\n  border-radius: 5px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  transition-duration: 300ms;\n"]))),v=l.ZP.img(o||(o=(0,x.Z)(["\n  padding: 0px;\n  margin: 0px;\n  height: 260px;\n  width: 100%;\n  display: block;\n"]))),b=l.ZP.div(c||(c=(0,x.Z)(["\n  padding: 5px;\n  margin: 0px;\n  font-size: 12px;\n  color: #080809;\n"]))),Z=l.ZP.h3(u||(u=(0,x.Z)(["\n  margin: 0px;\n"]))),w=r(184),k=function(){var n=(0,f.UO)("movieId").movieId,t=(0,d.useState)([]),r=(0,p.Z)(t,2),e=r[0],a=r[1];return(0,d.useEffect)((function(){(0,s.xc)(n).then(a)}),[n]),(0,w.jsx)(h,{children:e.length>0&&(0,w.jsx)(g,{children:e.map((function(n){var t=n.id,r=n.name,e=n.photo;return(0,w.jsxs)(m,{children:[(0,w.jsx)(v,{src:e,alt:r}),(0,w.jsx)(b,{children:(0,w.jsx)(Z,{children:r})})]},t)}))})})}},990:function(n,t,r){n.exports=r.p+"static/media/Error404.d5f34e7dd639acfc5456.jpeg"}}]);
//# sourceMappingURL=705.828e799c.chunk.js.map