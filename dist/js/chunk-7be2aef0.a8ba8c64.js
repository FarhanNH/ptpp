(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7be2aef0"],{"20f6":function(t,n,r){},"4b85":function(t,n,r){},a523:function(t,n,r){"use strict";r("20f6"),r("4b85");var a=r("e8f2"),e=r("d9f7");n["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:n,data:r,children:a}){let s;const{attrs:i}=r;return i&&(r.attrs={},s=Object.keys(i).filter(t=>{if("slot"===t)return!1;const n=i[t];return t.startsWith("data-")?(r.attrs[t]=n,!1):n||"string"===typeof n})),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,Object(e["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(s||[])}),a)}})},e8f2:function(t,n,r){"use strict";r.d(n,"a",(function(){return e}));var a=r("2b0e");function e(t){return a["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(n,{props:r,data:a,children:e}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:s}=a;if(s){a.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const n=s[t];return t.startsWith("data-")?(a.attrs[t]=n,!1):n||"string"===typeof n});t.length&&(a.staticClass+=" "+t.join(" "))}return r.id&&(a.domProps=a.domProps||{},a.domProps.id=r.id),n(r.tag,a,e)}})}}}]);
//# sourceMappingURL=chunk-7be2aef0.a8ba8c64.js.map