"use strict";(self.webpackChunkmarvel_ip=self.webpackChunkmarvel_ip||[]).push([[590],{8971:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",c=n.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",a=n(184),s=function(){return(0,a.jsxs)("div",{className:"app__banner",children:[(0,a.jsx)("img",{src:r,alt:"Avengers"}),(0,a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,a.jsx)("br",{}),"Stay tuned!"]}),(0,a.jsx)("img",{src:c,alt:"Avengers logo"})]})}},8519:function(t,e,n){var r=n(184);e.Z=function(){return(0,r.jsx)("h2",{style:{textAlign:"center",color:"#fff"},children:"Error"})}},1748:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var r=n(4270),c=n(8971),a=n(3433),s=n(9439),i=n(2791),o=n(1087),u=n(6983),l=n(5660),m=n(4304),p=n(8519),f=n(2602),d=n(184),h=function(t,e,n){switch(t){case"waiting":return(0,d.jsx)(f.Z,{});case"loading":return n?(0,d.jsx)(e,{}):(0,d.jsx)(f.Z,{});case"confirmed":return(0,d.jsx)(e,{});case"error":return(0,d.jsx)(p.Z,{});default:throw new Error("Unexpected procces state")}},v=function(){var t=(0,i.useState)([]),e=(0,s.Z)(t,2),n=e[0],r=e[1],c=(0,i.useState)(1e3),p=(0,s.Z)(c,2),f=p[0],v=p[1],g=(0,i.useState)(!1),x=(0,s.Z)(g,2),Z=x[0],b=x[1],j=(0,i.useState)(!1),w=(0,s.Z)(j,2),_=w[0],k=w[1],C=(0,m.Z)(),y=C.getAllComics,N=C.marvelProcess,P=C.setMarvelProcess;(0,i.useEffect)((function(){A(f,!0)}),[]);var A=function(t,e){b(!e),y(t).then(E).then((function(){return P("confirmed")}))},E=function(t){var e=!1;t.length<8&&(e=!0),r((function(e){return[].concat((0,a.Z)(e),(0,a.Z)(t))})),b((function(t){return!1})),v((function(t){return t+8})),k((function(t){return e}))};return(0,d.jsxs)("div",{className:"comics__list",children:[h(N,(function(){return function(t){var e=t.map((function(t){return(0,d.jsx)(u.Z,{timeout:300,classNames:"comics__item",children:(0,d.jsx)("li",{className:"comics__item",children:(0,d.jsxs)(o.rU,{to:"".concat(t.id),children:[(0,d.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),(0,d.jsx)("div",{className:"comics__item-name",children:t.title}),(0,d.jsx)("div",{className:"comics__item-price",children:t.price})]})},t.id)},t.id)}));return(0,d.jsx)(l.Z,{className:"comics__grid",children:e})}(n)}),Z),(0,d.jsx)("button",{className:"button button__main button__long",disabled:Z,style:{display:_?"none":"block"},onClick:function(){return A(f)},children:(0,d.jsx)("div",{className:"inner",children:"load more"})})]})},g=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.q,{children:[(0,d.jsx)("meta",{name:"description",content:"Page with list of our comics"}),(0,d.jsx)("title",{children:"Comics page"})]}),(0,d.jsx)(c.Z,{}),(0,d.jsx)(v,{})]})}},4304:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(4165),c=n(5861),a=n(9439),s=n(2791),i=function(){var t=function(){var t=(0,s.useState)("waiting"),e=(0,a.Z)(t,2),n=e[0],i=e[1],o=(0,s.useCallback)(function(){var t=(0,c.Z)((0,r.Z)().mark((function t(e){var n,c,a,s,o,u=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",c=u.length>2&&void 0!==u[2]?u[2]:null,a=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},i("loading"),t.prev=4,t.next=7,fetch(e,{method:n,body:c,headers:a});case 7:if((s=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(s.status));case 10:return t.next=12,s.json();case 12:return o=t.sent,t.abrupt("return",o);case 16:throw t.prev=16,t.t0=t.catch(4),i("error"),t.t0;case 20:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{request:o,clearError:(0,s.useCallback)((function(){i("loading")}),[]),marvelProcess:n,setMarvelProcess:i}}(),e=t.request,n=t.clearError,i=t.marvelProcess,o=t.setMarvelProcess,u="https://gateway.marvel.com:443/v1/public/",l="apikey=".concat("ec3f10ca275810236916969d3610c976"),m=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var n,c,a=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,e("".concat(u,"characters?limit=9&offset=").concat(n,"&").concat(l));case 3:return c=t.sent,t.abrupt("return",c.data.results.map(d));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(n){var c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters?name=").concat(n,"&").concat(l));case 2:return c=t.sent,t.abrupt("return",c.data.results.map(d));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(n){var c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters/").concat(n,"?").concat(l));case 2:return c=t.sent,t.abrupt("return",d(c.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(t){return{id:t.id,name:t.name,description:"".concat(t.description?(e=t.description,e.length>=200&&(e=e.slice(0,197)+"..."),e):"This character has not description"),thumbnail:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension),homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items.length>10?t.comics.items.slice(0,10):t.comics.items};var e},h=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var n,c,a=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1e3,t.next=3,e("".concat(u,"comics?limit=8&offset=").concat(n,"&").concat(l));case 3:return c=t.sent,t.abrupt("return",c.data.results.map(g));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(n){var c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"comics/").concat(n,"?").concat(l));case 2:return c=t.sent,t.abrupt("return",g(c.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(t){var e;return{id:t.id,title:t.title,description:t.description||"There is no description",thumbnail:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension),pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{marvelProcess:i,setMarvelProcess:o,getAllCharacters:m,getCharacterByName:p,getCharacter:f,getAllComics:h,getComic:v,clearError:n}}}}]);
//# sourceMappingURL=590.1050c6d3.chunk.js.map