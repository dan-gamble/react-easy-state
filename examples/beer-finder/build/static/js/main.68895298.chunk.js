(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return y}),n.d(t,"a",function(){return g});var r=n(120),a=n(110),o=n(111),c=n(122),i=n(7),u=n(11),s=n(121),l=n(36),p=n(119),f=n(15),m=n(13),b="undefined"!==typeof window,d=b?window:"undefined"!==typeof e?e:void 0,h="function"===typeof f.useState,O=!1,v=Symbol("owner component"),j={};function y(e){var t,n=!(e.prototype&&e.prototype.isReactComponent);n&&h?t=Object(f.memo)(function(t){var n=Object(f.useMemo)(function(){var t=Object(f.useState)(),n=Object(p.a)(t,2)[1];return Object(m.c)(e,{scheduler:function(){return n(j)},lazy:!0})},[]);Object(f.useEffect)(function(){return function(){return Object(m.e)(n)}},[]),O=!0;try{return n(t)}finally{O=!1}}):t=function(t){function p(e,t){var n;return Object(a.a)(this,p),(n=Object(c.a)(this,Object(i.a)(p).call(this,e,t))).state=n.state||{},n.state[v]=Object(l.a)(Object(l.a)(n)),n.render=Object(m.c)(n.render,{scheduler:function(){return n.setState(j)},lazy:!0}),n}return Object(s.a)(p,t),Object(o.a)(p,[{key:"render",value:function(){return n?e(this.props,this.context):Object(u.a)(Object(i.a)(p.prototype),"render",this).call(this)}},{key:"shouldComponentUpdate",value:function(e,t){var n=this.props,r=this.state;if(Object(u.a)(Object(i.a)(p.prototype),"shouldComponentUpdate",this))return Object(u.a)(Object(i.a)(p.prototype),"shouldComponentUpdate",this).call(this,e,t);if(r!==t)return!0;var a=Object.keys(n),o=Object.keys(e);return o.length!==a.length||o.some(function(t){return n[t]!==e[t]})}},{key:"componentWillUnmount",value:function(){Object(u.a)(Object(i.a)(p.prototype),"componentWillUnmount",this)&&Object(u.a)(Object(i.a)(p.prototype),"componentWillUnmount",this).call(this),Object(m.e)(this.render)}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(Object(u.a)(Object(i.a)(p),"deriveStoresFromProps",this)){var n,a=function(e){var t=e[v];return Object.keys(t).map(function(e){return t[e]}).filter(m.a).map(m.d)}(t);(n=Object(u.a)(Object(i.a)(p),"deriveStoresFromProps",this)).call.apply(n,[this,e].concat(Object(r.a)(a)))}return Object(u.a)(Object(i.a)(p),"getDerivedStateFromProps",this)?Object(u.a)(Object(i.a)(p),"getDerivedStateFromProps",this).call(this,e,t):null}}]),p}(n?f.Component:e);if(t.displayName=e.displayName||e.name,n)for(var b=Object.keys(e),d=0;d<b.length;d++){var y=b[d];t[y]=e[y]}return t}function g(e){return h&&O?Object(f.useMemo)(function(){return Object(m.b)(e)},[]):Object(m.b)(e)}var E=n(133)("react-".concat(b?"dom":"native")).unstable_batchedUpdates;var w=new Map;function k(e){if("function"!==typeof e)return e;var t=w.get(e);return t||(t=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(e,t,n){var r;return E(function(){return r=e.apply(t,n)}),r}(e,this,n)},w.set(e,t)),t}function P(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(this,n.map(k))}}if(d&&(d.setTimeout=P(d.setTimeout),d.setInterval=P(d.setInterval),d.requestAnimationFrame&&(d.requestAnimationFrame=P(d.requestAnimationFrame)),d.requestIdleCallback&&(d.requestIdleCallback=P(d.requestIdleCallback)),Promise.prototype.then=P(Promise.prototype.then),Promise.prototype.catch=P(Promise.prototype.catch),d.EventTarget&&(EventTarget.prototype.addEventListener=P(EventTarget.prototype.addEventListener),EventTarget.prototype.removeEventListener=P(EventTarget.prototype.removeEventListener)),d.WebSocket)){["onopen","onmessage","onerror","onclose"].forEach(function(e){return function(e,t){var n=Object.getOwnPropertyDescriptor(e,t);if(n){var r=Object.assign({},n,{set:function(e){return n.set.call(this,k(e))}});Object.defineProperty(e,t,r)}}(d.WebSocket.prototype,e)})}}).call(this,n(32))},123:function(e,t,n){e.exports=n(323)},128:function(e,t,n){},133:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=133},323:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(35),c=n.n(o),i=(n(128),n(12)),u=n(112),s=n.n(u),l=n(115),p=n.n(l),f=n(31),m=n.n(f),b=n(47),d=n(114),h=30,O=n.n(d).a.create({baseURL:"https://api.punkapi.com/v2"});function v(e){return j.apply(this,arguments)}function j(){return(j=Object(b.a)(m.a.mark(function e(t){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/beers",{params:{food:t||void 0,per_page:h}});case 2:return n=e.sent,(r=n.data).forEach(y),e.abrupt("return",r);case 6:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function y(e){e.image_url&&-1===e.image_url.indexOf("keg.png")||(e.image_url="http://www.patternpictures.com/wp-content/uploads/2015/11/PP07301706-Close-up-of-draft-beer-foam.jpg")}var g=Object(i.a)({beers:[],fetchBeers:function(){var e=Object(b.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g.isLoading=!0,e.next=3,v(t);case 3:g.beers=e.sent,g.isLoading=!1;case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}),E=g,w=Object(i.b)(function(){return a.a.createElement("div",{className:"searchbar"},a.a.createElement(s.a,{onRequestSearch:E.fetchBeers,placeholder:"Add some food ...",autoFocus:!0}),E.isLoading&&a.a.createElement(p.a,null))}),k=n(116),P=n.n(k),S=n(117),C=n.n(S),F=n(118),U=n.n(F),L=Object(i.b)(function(e){var t=e.name,n=e.description,r=e.image_url,o=e.food_pairing,c=Object(i.a)({details:!1});return a.a.createElement(P.a,{onClick:function(){return c.details=!c.details},className:"beer"},!c.details&&a.a.createElement(C.a,{image:r,className:"media"}),a.a.createElement(U.a,null,a.a.createElement("h3",null,t),c.details?a.a.createElement("p",null,n):a.a.createElement("ul",null,o.map(function(e){return a.a.createElement("li",{key:e},e)}))))}),N=Object(i.b)(function(){return a.a.createElement("div",{className:"beerlist"},E.beers.length?E.beers.map(function(e){return a.a.createElement(L,Object.assign({key:e.name},e))}):a.a.createElement("h3",null,"No matching beers found!"))});c.a.render(a.a.createElement(function(){return a.a.createElement(r.Fragment,null,a.a.createElement(w,null),a.a.createElement(N,null))},null),document.getElementById("root"))}},[[123,2,1]]]);
//# sourceMappingURL=main.68895298.chunk.js.map