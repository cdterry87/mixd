(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f12153e"],{"0dfe":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",{attrs:{"is-reversed":!0},scopedSlots:t._u([{key:"content",fn:function(){return[t.ingredients?i("div",[i("h3",{staticClass:"title is-5"},[t._v("Ingredients:")]),i("ul",{staticClass:"mb-4"},t._l(t.ingredients,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e.measurement)+" "+t._s(e.name)+" ")])})),0)]):t._e(),t.result.strInstructions?i("div",[i("h3",{staticClass:"title is-5"},[t._v("Instructions:")]),i("p",{staticClass:"mb-4"},[t._v(" "+t._s(t.result.strInstructions)+" ")])]):t._e(),t.tags?i("div",[i("h3",{staticClass:"title is-5"},[t._v("Tags:")]),i("div",{staticClass:"tags are-medium mb-4"},t._l(t.tags,(function(e,n){return i("span",{key:n,staticClass:"tag is-info"},[t._v(" "+t._s(e)+" ")])})),0)]):t._e()]},proxy:!0},{key:"side",fn:function(){return[t.isLoading?t._e():i("Card",{attrs:{id:t.result[t.data.id],title:t.result[t.data.title],subtitle:t.result[t.data.subtitle],image:t.result[t.data.image]}}),i("div",{staticClass:"mt-4"},[i("Button",t._b({nativeOn:{click:function(e){return t.onFavoriteClick(e)}}},"Button",t.favoriteButton,!1)),i("Button",t._b({},"Button",t.favoritesLink,!1))],1)]},proxy:!0}])})},s=[],r=i("5530"),a=i("1da1"),u=(i("ac1f"),i("1276"),i("c740"),i("96cf"),i("2f62")),l=i("7424"),c=i("2a7d"),o=i("ae8d"),d=i("ebad"),f={name:"ViewPage",components:{Button:c["a"],Card:o["a"],Layout:d["a"]},props:{id:{type:String,required:!0}},data:function(){return{isLoading:!0,result:{}}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].getById(t.id,t.category);case 2:t.result=e.sent,t.isLoading=!1;case 4:case"end":return e.stop()}}),e)})))()},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(u["e"])("favorites",["favorites"])),Object(u["e"])("categories",["category"])),Object(u["d"])("categories",["data"])),{},{ingredients:function(){for(var t=[],e=1;e<=15;e++){var i="strIngredient".concat(e),n="strMeasure".concat(e);if(!this.result[i])break;t.push({measurement:this.result[n],name:this.result[i]})}return t},tags:function(){if(this.result.strTags)return this.result.strTags.split(",")},favoritesLink:function(){return{label:"Favorites",link:"/favorites",classes:"is-success is-fullwidth is-medium mt-4",icon:"fas fa-star"}},favoriteButton:function(){return{classes:"is-fullwidth is-medium ".concat(this.isFavorite?"is-danger":"is-info"),label:this.isFavorite?"Remove Favorite":"Add Favorite",icon:this.isFavorite?"fas fa-minus-circle":"fas fa-plus-circle"}},isFavorite:function(){var t=this,e=this.favorites[this.category].findIndex((function(e){return e.id===t.id}));return e>-1}}),methods:Object(r["a"])(Object(r["a"])({},Object(u["c"])("favorites",["addFavorite","removeFavorite"])),{},{onFavoriteClick:function(){this.isFavorite?this.removeFavorite(this.id):this.addFavorite(this.result)}})},v=f,h=i("2877"),g=Object(h["a"])(v,n,s,!1,null,null,null);e["default"]=g.exports},1276:function(t,e,i){"use strict";var n=i("d784"),s=i("44e7"),r=i("825a"),a=i("1d80"),u=i("4840"),l=i("8aa5"),c=i("50c4"),o=i("14c3"),d=i("9263"),f=i("9f7f"),v=f.UNSUPPORTED_Y,h=[].push,g=Math.min,p=4294967295;n("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(a(this)),r=void 0===i?p:i>>>0;if(0===r)return[];if(void 0===t)return[n];if(!s(t))return e.call(n,t,r);var u,l,c,o=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,g=new RegExp(t.source,f+"g");while(u=d.call(g,n)){if(l=g.lastIndex,l>v&&(o.push(n.slice(v,u.index)),u.length>1&&u.index<n.length&&h.apply(o,u.slice(1)),c=u[0].length,v=l,o.length>=r))break;g.lastIndex===u.index&&g.lastIndex++}return v===n.length?!c&&g.test("")||o.push(""):o.push(n.slice(v)),o.length>r?o.slice(0,r):o}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var s=a(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,s,i):n.call(String(s),e,i)},function(t,s){var a=i(n,t,this,s,n!==e);if(a.done)return a.value;var d=r(t),f=String(this),h=u(d,RegExp),m=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"g":"y"),_=new h(v?"^(?:"+d.source+")":d,b),x=void 0===s?p:s>>>0;if(0===x)return[];if(0===f.length)return null===o(_,f)?[f]:[];var k=0,y=0,w=[];while(y<f.length){_.lastIndex=v?0:y;var C,F=o(_,v?f.slice(y):f);if(null===F||(C=g(c(_.lastIndex+(v?y:0)),f.length))===k)y=l(f,y,m);else{if(w.push(f.slice(k,y)),w.length===x)return w;for(var O=1;O<=F.length-1;O++)if(w.push(F[O]),w.length===x)return w;y=k=C}}return w.push(f.slice(k)),w}]}),v)},"44e7":function(t,e,i){var n=i("861d"),s=i("c6b6"),r=i("b622"),a=r("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==s(t))}},"8aa5":function(t,e,i){"use strict";var n=i("6547").charAt;t.exports=function(t,e,i){return e+(i?n(t,e).length:1)}}}]);
//# sourceMappingURL=chunk-9f12153e.3e7fd24a.js.map