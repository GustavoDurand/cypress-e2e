(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function v(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ja="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ia(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ja});
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;ma=qa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=la;
function y(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.na=b.prototype}
function sa(){this.H=!1;this.j=null;this.h=void 0;this.g=1;this.u=this.o=0;this.S=this.i=null}
function ta(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
sa.prototype.M=function(a){this.h=a};
function ua(a,b){a.i={oc:b,zc:!0};a.g=a.o||a.u}
sa.prototype.return=function(a){this.i={return:a};this.g=this.u};
function A(a,b,c){a.g=c;return{value:b}}
sa.prototype.B=function(a){this.g=a};
function va(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function wa(a){a.o=0;var b=a.i.oc;a.i=null;return b}
function xa(a){var b=a.S.splice(0)[0];(b=a.i=a.i||b)?b.zc?a.g=a.o||a.u:void 0!=b.B&&a.u<b.B?(a.g=b.B,a.i=null):a.g=a.u:a.g=0}
function ya(a){this.g=new sa;this.h=a}
function za(a,b){ta(a.g);var c=a.g.j;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.g.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.H=!1,e;var f=e.value}catch(g){return a.g.j=null,ua(a.g,g),Ba(a)}a.g.j=null;d.call(a.g,f);return Ba(a)}
function Ba(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.H=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,ua(a.g,c)}a.g.H=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.zc)throw b.oc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){ta(a.g);a.g.j?b=Aa(a,a.g.j.next,b,a.g.M):(a.g.M(b),b=Ba(a));return b};
this.throw=function(b){ta(a.g);a.g.j?b=Aa(a,a.g.j["throw"],b,a.g.M):(ua(a.g,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Da(new Ca(new ya(a)))}
function Ea(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:ra?function(b,c){try{return ra(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.H=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=fa.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.gb),reject:g(this.o)}};
b.prototype.gb=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ib(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.za(g):this.u(g)}};
b.prototype.za=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.wb(h,g):this.u(g)};
b.prototype.o=function(g){this.M(2,g)};
b.prototype.u=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.hb();this.S()};
b.prototype.hb=function(){var g=this;e(function(){if(g.oa()){var h=fa.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.oa=function(){if(this.H)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.S=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.ib=function(g){var h=this.j();g.zb(h.resolve,h.reject)};
b.prototype.wb=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,n){return"function"==typeof q?function(t){try{l(q(t))}catch(u){m(u)}}:n}
var l,m,p=new b(function(q,n){l=q;m=n});
this.zb(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.zb=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).zb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(t){return function(u){q[t]=u;n--;0==n&&l(q)}}
var q=[],n=0;do q.push(void 0),n++,d(k.value).zb(p(q.length-1),m),k=h.next();while(!k.done)})};
return b});
v("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ia(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ia(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&ia(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.g)?delete k[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ia(h[0],l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
v("Object.setPrototypeOf",function(a){return a||ra});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ha(this,b,"includes").indexOf(b,c||0)}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
v("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Sa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ta(a,b,c){Ta=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qa:Sa;return Ta.apply(null,arguments)}
function Ua(){return Date.now()}
function E(a,b){a=a.split(".");var c=C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Va(a,b){function c(){}
c.prototype=b.prototype;a.na=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.oe=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Va(Xa,Error);Xa.prototype.name="CustomError";function Ya(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.j=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function Za(){}
function $a(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var ab=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},bb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function cb(a,b){b=ab(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function jb(a){var b=kb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=mb(a[c]);return b}
var nb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ob(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<nb.length;f++)c=nb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var pb;function qb(){if(void 0===pb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(c){C.console&&C.console.error(c.message)}pb=a}else pb=a}return pb}
;function rb(){}
function sb(a){return new rb(tb,a)}
var tb={};sb("");function ub(a){this.g=a}
ub.prototype.toString=function(){return this.g+""};
var vb={};var wb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},xb=/&/g,yb=/</g,zb=/>/g,Ab=/"/g,Bb=/'/g,Cb=/\x00/g,Db=/[\x00&<>"']/;function Eb(a){this.g=a}
Eb.prototype.toString=function(){return this.g.toString()};
var Fb={},Gb=new Eb("about:invalid#zClosurez",Fb);var Hb,Ib=D("CLOSURE_FLAGS"),Jb=Ib&&Ib[610401301];Hb=null!=Jb?Jb:!1;function Kb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Lb,Rb=C.navigator;Lb=Rb?Rb.userAgentData||null:null;function Sb(a){return Hb?Lb?Lb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Kb().indexOf(a)}
;function Tb(){return Hb?!!Lb&&0<Lb.brands.length:!1}
function Ub(){return Tb()?!1:F("Trident")||F("MSIE")}
function Vb(){return Tb()?Sb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Tb()?0:F("Edge"))||F("Silk")}
;function Wb(a){this.g=a}
Wb.prototype.toString=function(){return this.g.toString()};function Xb(a){Db.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(xb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(yb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(zb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Ab,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Bb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Cb,"&#0;")));return a}
;var Yb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zb(a){return a?decodeURI(a):a}
function $b(a){return Zb(a.match(Yb)[3]||null)}
function ac(a){var b=a.match(Yb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function bc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)bc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function cc(a){var b=[],c;for(c in a)bc(c,a[c],b);return b.join("&")}
var dc=/#|$/;function ec(a,b){var c=a.search(dc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function fc(a){C.setTimeout(function(){throw a;},0)}
;function gc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function hc(a){hc[" "](a);return a}
hc[" "]=function(){};var ic=Tb()?!1:F("Opera"),jc=Ub(),kc=F("Edge"),lc=F("Gecko")&&!(-1!=Kb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),mc=-1!=Kb().toLowerCase().indexOf("webkit")&&!F("Edge");function nc(){var a=C.document;return a?a.documentMode:void 0}
var oc;a:{var pc="",qc=function(){var a=Kb();if(lc)return/rv:([^\);]+)(\)|;)/.exec(a);if(kc)return/Edge\/([\d\.]+)/.exec(a);if(jc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(mc)return/WebKit\/(\S+)/.exec(a);if(ic)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
qc&&(pc=qc?qc[1]:"");if(jc){var rc=nc();if(null!=rc&&rc>parseFloat(pc)){oc=String(rc);break a}}oc=pc}var wc=oc,xc;if(C.document&&jc){var yc=nc();xc=yc?yc:parseInt(wc,10)||void 0}else xc=void 0;var zc=xc;var Ac=gc()||F("iPod"),Bc=F("iPad");!F("Android")||Vb();Vb();var Cc=F("Safari")&&!(Vb()||(Tb()?0:F("Coast"))||(Tb()?0:F("Opera"))||(Tb()?0:F("Edge"))||(Tb()?Sb("Microsoft Edge"):F("Edg/"))||(Tb()?Sb("Opera"):F("OPR"))||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(gc()||F("iPad")||F("iPod"));var Dc={},Ec=null;
function Fc(a,b){La(a);void 0===b&&(b=0);if(!Ec){Ec={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Dc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Ec[h]&&(Ec[h]=g)}}}b=Dc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Gc="undefined"!==typeof Uint8Array,Hc=!jc&&"function"===typeof btoa;function Ic(a){return Array.prototype.slice.call(a)}
;var Jc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,x(Object.values({be:1,Zd:2,Yd:4,ee:8,de:16,ce:32,Rd:64,fe:128,Wd:256,Vd:512,ae:1024})));var Kc=Jc?function(a,b){a[Jc]|=b}:function(a,b){void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Lc(a){var b=H(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Ic(a)),Mc(a,b|1))}
var Nc=Jc?function(a,b){a[Jc]&=~b}:function(a,b){void 0!==a.ga&&(a.ga&=~b)},H=Jc?function(a){return a[Jc]|0}:function(a){return a.ga|0},Oc=Jc?function(a){return a[Jc]}:function(a){return a.ga},Mc=Jc?function(a,b){a[Jc]=b}:function(a,b){void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Pc(){var a=[];Kc(a,1);return a}
function Qc(a,b){Mc(b,(a|0)&-255)}
function Rc(a,b){Mc(b,(a|34)&-221)}
function Sc(a){a=a>>11&1023;return 0===a?536870912:a}
;var Tc={};function Uc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Wc,Xc,Yc=[];Mc(Yc,55);Xc=Object.freeze(Yc);function Zc(a){if(a&2)throw Error();}
;function $c(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function ad(){var a=Error();$c(a,"incident");fc(a)}
function bd(){var a=Error();$c(a,"warning");return a}
;function cd(a){return a.displayName||a.name||"unknown type name"}
function dd(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ka(a)+": "+a);return!!a}
var ed=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function fd(a){return"number"===typeof a&&Number.isFinite(a)||!!a&&"string"===typeof a&&isFinite(a)}
function gd(a){if(!fd(a))throw bd();var b=typeof a;("number"===b?Number.isFinite(a):"string"!==b?0:ed.test(a))||ad();"string"===typeof a?fd(a):fd(a);return a}
function hd(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function id(a){return null==a||"string"===typeof a?a:void 0}
function jd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+cd(b)+" but got "+(a&&cd(a.constructor)));return a}
function kd(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Yb===Tc)return a;if(d){var e=d=H(a);0===e&&(e|=c&32);e|=c&2;e!==d&&Mc(a,e);return new b(a)}}
;var od;function I(a,b,c){null==a&&(a=od);od=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-2095105|(b&1023)<<11)}else{if(!Array.isArray(a))throw Error();d=H(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(Uc(g)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(pd(c,b,g),e=1023);d=d&-2095105|(e&1023)<<11;break a}}b&&(g=+!!(d&512)-1,b=Math.max(b,e-g),1024<b&&(pd(c,g,{}),d|=256,b=1023),d=d&-2095105|(b&1023)<<11)}}Mc(a,d);return a}
function pd(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function qd(a,b){return rd(b)}
function rd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)&&Gc&&null!=a&&a instanceof Uint8Array){if(Hc){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Fc(a);return a}}return a}
;function sd(a,b,c){a=Ic(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function td(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&H(a)&1?void 0:f&&H(a)&2?a:ud(a,b,c,void 0!==d,e,f);else if(Uc(a)){var g={},h;for(h in a)g[h]=td(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function ud(a,b,c,d,e,f){var g=d||c?H(a):0;d=d?!!(g&32):void 0;a=Ic(a);for(var h=0;h<a.length;h++)a[h]=td(a[h],b,c,d,e,f);c&&c(g,a);return a}
function vd(a){return a.Yb===Tc?a.toJSON():rd(a)}
;function wd(a,b,c){c=void 0===c?Rc:c;if(null!=a){if(Gc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=H(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(Mc(a,d|34),d&4&&Object.freeze(a),a):ud(a,wd,d&4?Rc:c,!0,!1,!0)}a.Yb===Tc&&(c=a.s,d=Oc(c),a=d&2?a:xd(a,c,d,!0));return a}}
function xd(a,b,c,d){a=a.constructor;b=yd(b,c,d);H(b);od=b;b=new a(b);od=void 0;return b}
function yd(a,b,c){var d=c||b&2?Rc:Qc,e=!!(b&32);a=sd(a,b,function(f){return wd(f,e,d)});
Kc(a,32|(c?2:0));return a}
;function zd(a,b){a=a.s;return Ad(a,Oc(a),b)}
function Ad(a,b,c,d){if(-1===c)return null;if(c>=Sc(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function Bd(a,b,c){var d=a.s,e=Oc(d);Zc(e);Cd(d,e,b,c);return a}
function Cd(a,b,c,d,e){Uc(d);var f=Sc(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Mc(a,e)}else a[c+(+!!(b&512)-1)]=d,b&256&&(a=a[a.length-1],c in a&&delete a[c])}
function Dd(a,b,c,d){var e=b&2,f=Ad(a,b,c);Array.isArray(f)||(f=Xc);var g=!(d&2),h=!(d&1);d=!!(b&32);var k=H(f);0!==k||!d||e||g?k&1||(k|=1,Mc(f,k)):(k|=33,Mc(f,k));e?(k&2||Kc(f,34),h&&Object.freeze(f)):(e=k&2,h&&e?(f=Ic(f),e=1,d&&!g&&(e|=32),Mc(f,e),Cd(a,b,c,f)):g&&k&32&&!e&&Nc(f,32));return f}
function Ed(a,b,c,d){a=a.s;var e=Oc(a);Zc(e);(c=Fd(a,e,c))&&c!==b&&null!=d&&Cd(a,e,c);Cd(a,e,b,d)}
function Gd(a,b,c){a=a.s;return Fd(a,Oc(a),b)===c?c:-1}
function Fd(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=Ad(a,b,f)&&(0!==d&&Cd(a,b,d),d=f)}return d}
function Hd(a,b,c){var d=void 0===d?!1:d;var e=a.s;var f=Oc(e),g=Ad(e,f,c,d);b=kd(g,b,f);b!==g&&null!=b&&Cd(e,f,c,b,d);e=b;if(null==e)return e;a=a.s;f=Oc(a);if(!(f&2)){g=e;b=g.s;var h=Oc(b);g=h&2?xd(g,b,h,!1):g;g!==e&&(e=g,Cd(a,f,c,e,d))}return e}
function Id(a,b,c,d){d=void 0===d?!1:d;var e=H(a),f=e|5;b=b?f|8:f&-9;b=c?b|16:b&-17;e!=b&&(Object.isFrozen(a)&&(a=Ic(a)),Mc(a,b),!d&&b&2&&Object.freeze(a));return a}
function J(a,b,c,d){null!=d?jd(d,b):d=void 0;return Bd(a,c,d)}
function Jd(a,b,c,d,e){null!=e?jd(e,b):e=void 0;Ed(a,c,d,e)}
function Kd(a,b,c,d){a=a.s;var e=Oc(a);Zc(e);var f=!!(e&2),g=Dd(a,e,b,1);if(g!==Xc&&H(g)&4){if(f)f=H(g),g=Ic(g),Mc(g,f),Cd(a,e,b,g);else{f=Object.isFrozen(g);var h=H(g);var k=h&-33;f||h&2?(g=Ic(g),Mc(g,k&-3),Cd(a,e,b,g)):h!==k&&Mc(g,k)}b=g}else{h=!!(e&2);k=!!(H(g)&2);f=g;!h&&k&&(g=Ic(g));k=k||void 0;h=e|(k?2:0);for(var l=!1,m=0,p=0;m<g.length;m++){var q=kd(g[m],c,h);if(null!=q){var n=!!(H(q.s)&2);k=k||n;l=l||!n;g[p++]=q}}p<m&&(g.length=p);g=Id(g,!k,!l,!0);f!==g&&Cd(a,e,b,g);b=g}c=null!=d?jd(d,c):
new c;b.push(c);H(c.s)&2?Nc(b,8):Nc(b,16)}
function Ld(a,b){var c=void 0===c?"":c;a=id(zd(a,b));return null!=a?a:c}
function Md(a,b){b=Gd(a,Nd,b);return id(zd(a,b))}
function Od(a,b,c){if(null!=c){if("number"!==typeof c)throw bd();Number.isFinite(c)||ad()}Bd(a,b,c)}
function Pd(a,b,c){Bd(a,b,null==c?c:gd(c))}
function K(a,b,c){return Bd(a,b,hd(c))}
function Qd(a,b,c){null!=c&&(Number.isFinite(c)||ad());return Bd(a,b,c)}
;function L(a,b,c){this.s=I(a,b,c)}
L.prototype.toJSON=function(){if(Wc)var a=Rd(this,this.s,!1);else a=ud(this.s,vd,void 0,void 0,!1,!1),a=Rd(this,a,!0);return a};
function Sd(a){Wc=!0;try{return JSON.stringify(a.toJSON(),qd)}finally{Wc=!1}}
L.prototype.clone=function(){var a=this.s;return xd(this,a,Oc(a),!1)};
L.prototype.Yb=Tc;L.prototype.toString=function(){return Rd(this,this.s,!1).toString()};
function Rd(a,b,c){var d=a.constructor.ma,e=Oc(c?a.s:b),f=Sc(e);e=!1;if(d){if(!c){b=Ic(b);var g;if(b.length&&Uc(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=Oc(a.s);a=Sc(f);f=+!!(f&512)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var m=g[k];null==m?g[k]=c?Xc:Pc():c&&m!==Xc&&Lc(m)}else h||(m=void 0,g.length&&Uc(m=g[g.length-1])?h=m:g.push(h={})),m=h[k],null==h[k]?h[k]=c?Xc:Pc():c&&m!==Xc&&Lc(m)}d=b.length;if(!d)return b;var p;
if(Uc(h=b[d-1])){a:{var q=h;g={};c=!1;for(var n in q)a=q[n],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[n]=a:c=!0;if(c){for(var t in g){q=g;break a}q=null}}q!=h&&(p=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var u=!0}if(!p&&!u)return b;var z;e?z=b:z=Array.prototype.slice.call(b,0,d);b=z;e&&(b.length=d);q&&b.push(q);return b}
;var Td=window;sb("csi.gstatic.com");sb("googleads.g.doubleclick.net");sb("partner.googleadservices.com");sb("pubads.g.doubleclick.net");sb("securepubads.g.doubleclick.net");sb("tpc.googlesyndication.com");function Ud(a,b){this.width=a;this.height=b}
r=Ud.prototype;r.clone=function(){return new Ud(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.Sb=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Vd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Wd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Xd(a){var b=D("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Yd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Zd[c])c=Zd[c];else{c=String(c);if(!Zd[c]){var f=/function\s+([^\(]+)/m.exec(c);Zd[c]=f?f[1]:"[Anonymous]"}c=Zd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Yd(a,b){b||(b={});b[$d(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[$d(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Yd(a,b));return c}
function $d(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Zd={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var ae="function"===typeof URL;function be(){throw Error("unknown trace type");}
;var ce={Ud:0,Xd:1,Sd:2,Td:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function de(a,b){b=Error.call(this,a+" cannot be used with intent "+ce[b]);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.type=a;this.name="TypeCannotBeUsedWithIntentError"}
y(de,Error);
function ee(a,b){a.removeAttribute("srcdoc");if(b instanceof ub)throw new de("TrustedResourceUrl",3);var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Eb)b instanceof Eb&&b.constructor===Eb?b=b.g:(Ka(b),b="type_error:SafeUrl");else{b:if(ae){try{var e=new URL(b)}catch(f){c="https:";
break b}c=e.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function fe(a){this.pd=a}
function ge(a){return new fe(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var he=[ge("data"),ge("http"),ge("https"),ge("mailto"),ge("ftp"),new fe(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function ie(a,b){b=void 0===b?he:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof fe&&d.pd(a))return new Eb(a,Fb)}}
function je(a){var b=void 0===b?he:b;return ie(a,b)||Gb}
;function ke(a){var b=le;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function me(){var a=[];ke(function(b){a.push(b)});
return a}
var le={Gd:"allow-forms",Hd:"allow-modals",Id:"allow-orientation-lock",Jd:"allow-pointer-lock",Kd:"allow-popups",Ld:"allow-popups-to-escape-sandbox",Md:"allow-presentation",Nd:"allow-same-origin",Od:"allow-scripts",Pd:"allow-top-navigation",Qd:"allow-top-navigation-by-user-activation"},ne=$a(function(){return me()});
function oe(){var a=pe(),b={};bb(ne(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function pe(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var qe=(new Date).getTime();function re(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function se(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var q=g,n=0;64>n;n+=4)q[n/4]=p[n]<<24|p[n+1]<<16|p[n+2]<<8|p[n+3];for(n=16;80>n;n++)p=q[n-3]^q[n-8]^q[n-14]^q[n-16],q[n]=(p<<1|p>>>31)&4294967295;p=e[0];var t=e[1],u=e[2],z=e[3],G=e[4];for(n=0;80>n;n++){if(40>n)if(20>n){var R=z^t&(u^z);var P=1518500249}else R=t^u^z,P=1859775393;else 60>n?(R=t&u|z&(t|u),P=2400959708):(R=t^u^z,P=3395469782);R=((p<<5|p>>>27)&4294967295)+R+G+P+q[n]&4294967295;G=z;z=u;u=(t<<30|t>>>2)&4294967295;t=p;p=R}e[0]=e[0]+p&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var n=[],t=0,u=p.length;t<u;++t)n.push(p.charCodeAt(t));p=n}q||(q=p.length);n=0;if(0==l)for(;n+64<q;)b(p.slice(n,n+64)),n+=64,m+=64;for(;n<q;)if(f[l++]=p[n++],m++,64==l)for(l=0,b(f);n+64<q;)b(p.slice(n,n+64)),n+=64,m+=64}
function d(){var p=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var n=63;56<=n;n--)f[n]=q&255,q>>>=8;b(f);for(n=q=0;5>n;n++)for(var t=24;0<=t;t-=8)p[q++]=e[n]>>t&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Yc:function(){for(var p=d(),q="",n=0;n<p.length;n++)q+="0123456789ABCDEF".charAt(Math.floor(p[n]/16))+"0123456789ABCDEF".charAt(p[n]%16);return q}}}
;function te(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,ue(re(d),a,c||null)].join(" "):null}
function ue(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],bb(d,function(h){e.push(h)}),ve(e.join(" "));
var f=[],g=[];bb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];bb(d,function(h){e.push(h)});
a=ve(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ve(a){var b=se();b.update(a);return b.Yc().toLowerCase()}
;var we={};function xe(a){this.g=a||{cookie:""}}
r=xe.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.Sb())return!0;this.set("TESTCOOKIESENABLED","1",{Vb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.we;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Vb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=wb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Vb:0,path:b,domain:c});return d};
r.Sb=function(){return!this.g.cookie};
r.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=wb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ye=new xe("undefined"==typeof document?null:document);function ze(a){return!!we.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Ae(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new xe(document)).get(b));return a?te(a,c,d):null}
function Be(a){var b=void 0===b?!1:b;var c=re(String(C.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;ze(e)&&(f=f||C.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new xe(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");ze(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
C.__SAPISID:C.__APISID,e||"undefined"===typeof document||(e=new xe(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?te(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&ze(b)&&((b=Ae("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Ae("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var Ce="undefined"!==typeof TextEncoder?new TextEncoder:null,De=Ce?function(a){return Ce.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function Ee(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Fe(){this.Ja=this.Ja;this.oa=this.oa}
Fe.prototype.Ja=!1;Fe.prototype.dispose=function(){this.Ja||(this.Ja=!0,this.sa())};
Fe.prototype.sa=function(){if(this.oa)for(;this.oa.length;)this.oa.shift()()};function Je(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Je.prototype.stopPropagation=function(){this.i=!0};
Je.prototype.preventDefault=function(){this.defaultPrevented=!0};var Ke=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Le(a,b){Je.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Va(Le,Je);var Me={2:"touch",3:"pen",4:"mouse"};
Le.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(lc){a:{try{hc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Me[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&Le.na.preventDefault.call(this)};
Le.prototype.stopPropagation=function(){Le.na.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
Le.prototype.preventDefault=function(){Le.na.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ne="closure_listenable_"+(1E6*Math.random()|0);var Oe=0;function Pe(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Db=e;this.key=++Oe;this.tb=this.yb=!1}
function Qe(a){a.tb=!0;a.listener=null;a.proxy=null;a.src=null;a.Db=null}
;function Re(a){this.src=a;this.listeners={};this.g=0}
Re.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=Se(a,b,d,e);-1<g?(b=a[g],c||(b.yb=!1)):(b=new Pe(b,this.src,f,!!d,e),b.yb=c,a.push(b));return b};
Re.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Se(e,b,c,d);return-1<b?(Qe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function Te(a,b){var c=b.type;c in a.listeners&&cb(a.listeners[c],b)&&(Qe(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function Se(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.tb&&f.listener==b&&f.capture==!!c&&f.Db==d)return e}return-1}
;var Ue="closure_lm_"+(1E6*Math.random()|0),Ve={},We=0;function Xe(a,b,c,d,e){if(d&&d.once)Ye(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Xe(a,b[f],c,d,e);else c=Ze(c),a&&a[Ne]?a.Na(b,c,Ma(d)?!!d.capture:!!d,e):$e(a,b,c,!1,d,e)}
function $e(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ma(e)?!!e.capture:!!e,h=af(a);h||(a[Ue]=h=new Re(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=bf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ke||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(cf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");We++}}
function bf(){function a(c){return b.call(a.src,a.listener,c)}
var b=df;return a}
function Ye(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ye(a,b[f],c,d,e);else c=Ze(c),a&&a[Ne]?a.g.add(String(b),c,!0,Ma(d)?!!d.capture:!!d,e):$e(a,b,c,!0,d,e)}
function ef(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ef(a,b[f],c,d,e);else(d=Ma(d)?!!d.capture:!!d,c=Ze(c),a&&a[Ne])?a.g.remove(String(b),c,d,e):a&&(a=af(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Se(b,c,d,e)),(c=-1<a?b[a]:null)&&ff(c))}
function ff(a){if("number"!==typeof a&&a&&!a.tb){var b=a.src;if(b&&b[Ne])Te(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(cf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);We--;(c=af(b))?(Te(c,a),0==c.g&&(c.src=null,b[Ue]=null)):Qe(a)}}}
function cf(a){return a in Ve?Ve[a]:Ve[a]="on"+a}
function df(a,b){if(a.tb)a=!0;else{b=new Le(b,this);var c=a.listener,d=a.Db||a.src;a.yb&&ff(a);a=c.call(d,b)}return a}
function af(a){a=a[Ue];return a instanceof Re?a:null}
var gf="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ze(a){if("function"===typeof a)return a;a[gf]||(a[gf]=function(b){return a.handleEvent(b)});
return a[gf]}
;function hf(){Fe.call(this);this.g=new Re(this);this.M=this;this.u=null}
Va(hf,Fe);hf.prototype[Ne]=!0;hf.prototype.addEventListener=function(a,b,c,d){Xe(this,a,b,c,d)};
hf.prototype.removeEventListener=function(a,b,c,d){ef(this,a,b,c,d)};
function jf(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.M;c=b.type||b;"string"===typeof b?b=new Je(b,a):b instanceof Je?b.target=b.target||a:(e=b,b=new Je(c,a),ob(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=kf(g,c,!0,b)&&e}b.i||(g=b.g=a,e=kf(g,c,!0,b)&&e,b.i||(e=kf(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=kf(g,c,!1,b)&&e}
hf.prototype.sa=function(){hf.na.sa.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Qe(d[e]);delete a.listeners[c];a.g--}}this.u=null};
hf.prototype.Na=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function kf(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.tb&&g.capture==c){var h=g.listener,k=g.Db||g.src;g.yb&&Te(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function lf(a){hf.call(this);var b=this;this.H=this.i=0;this.ha=null!=a?a:{qa:function(e,f){return setTimeout(e,f)},
ba:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.j=function(){return B(function(e){return A(e,mf(b),0)})};
window.addEventListener("offline",this.j);window.addEventListener("online",this.j);this.H||nf(this)}
y(lf,hf);function of(){var a=pf;lf.g||(lf.g=new lf(a));return lf.g}
lf.prototype.dispose=function(){window.removeEventListener("offline",this.j);window.removeEventListener("online",this.j);this.ha.ba(this.H);delete lf.g};
lf.prototype.ca=function(){return this.h};
function nf(a){a.H=a.ha.qa(function(){var b;return B(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.B(3):A(c,mf(a),3):A(c,mf(a),3);nf(a);c.g=0})},3E4)}
function mf(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,va(h,2,3),d&&(a.i=a.ha.qa(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.S=[h.i];h.o=0;h.u=0;a.o=void 0;a.i&&(a.ha.ba(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?jf(a,"networkstatus-online"):jf(a,"networkstatus-offline"));c(g);xa(h);break;case 2:wa(h),g=!1,h.B(3)}})})}
;function qf(){this.data=[];this.g=-1}
qf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
qf.prototype.get=function(a){return!!this.data[a]};
function rf(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function sf(a){this.s=I(a)}
y(sf,L);function tf(a){this.s=I(a)}
y(tf,L);function uf(a,b){return K(a,2,b)}
function vf(a,b){return K(a,3,b)}
function wf(a,b){return K(a,4,b)}
function xf(a,b){return K(a,5,b)}
function yf(a,b){return K(a,9,b)}
function zf(a,b){var c=a.s,d=Oc(c);Zc(d);if(null!=b){var e=!1,f=!0;if(!(H(b)&2)){e=!0;for(var g=0;g<b.length;g++){var h=b[g];jd(h,sf);h=!!(H(h.s)&2);e=e&&!h;f=f&&h}}b=Id(b,e,f)}null==b&&(b=void 0);Cd(c,d,10,b);return a}
function Af(a,b){return Bd(a,11,null==b?b:dd(b))}
function Bf(a,b){return K(a,1,b)}
function Cf(a,b){return Bd(a,7,null==b?b:dd(b))}
tf.ma=[10,6];var Df="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Ef(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Ff(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Gf(){var a=window;if(!Ff(a))return null;var b=Ef(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Df).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function Hf(a){var b;return Af(zf(xf(uf(Bf(wf(Cf(yf(vf(new tf,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new sf;d=K(d,1,c.brand);return K(d,2,c.version)}))||[]),a.wow64||!1)}
function If(){var a,b;return null!=(b=null==(a=Gf())?void 0:a.then(function(c){return Hf(c)}))?b:null}
;function Jf(a,b){this.i=a;this.j=b;this.h=0;this.g=null}
Jf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Kf(a,b){a.j(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var Lf;function Mf(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Vd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ta(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Ub()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.lc;c.lc=null;e()}};
return function(e){d.next={lc:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Nf(){this.h=this.g=null}
Nf.prototype.add=function(a,b){var c=Of.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
Nf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var Of=new Jf(function(){return new Pf},function(a){return a.reset()});
function Pf(){this.next=this.scope=this.g=null}
Pf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Pf.prototype.reset=function(){this.next=this.scope=this.g=null};var Qf,Rf=!1,Sf=new Nf;function Tf(a,b){Qf||Uf();Rf||(Qf(),Rf=!0);Sf.add(a,b)}
function Uf(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Qf=function(){a.then(Vf)}}else Qf=function(){var b=Vf;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Tb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Lf||(Lf=Mf()),Lf(b)):C.setImmediate(b)}}
function Vf(){for(var a;a=Sf.remove();){try{a.g.call(a.scope)}catch(b){fc(b)}Kf(Of,a)}Rf=!1}
;function Wf(a,b){this.g=a[C.Symbol.iterator]();this.h=b}
Wf.prototype[Symbol.iterator]=function(){return this};
Wf.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function Xf(a,b){return new Wf(a,b)}
;function Yf(){this.blockSize=-1}
;function Zf(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
Va(Zf,Yf);Zf.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.j=this.h=0};
function $f(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
Zf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.h;d<b;){if(0==f)for(;d<=c;)$f(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){$f(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){$f(this,e);f=0;break}}this.h=f;this.j+=b}};
Zf.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;$f(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function ag(){}
ag.prototype.next=function(){return bg};
var bg={done:!0,value:void 0};function cg(a){return{value:a,done:!1}}
ag.prototype.ia=function(){return this};function dg(a){if(a instanceof eg||a instanceof fg||a instanceof gg)return a;if("function"==typeof a.next)return new eg(function(){return a});
if("function"==typeof a[Symbol.iterator])return new eg(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ia)return new eg(function(){return a.ia()});
throw Error("Not an iterator or iterable.");}
function eg(a){this.h=a}
eg.prototype.ia=function(){return new fg(this.h())};
eg.prototype[Symbol.iterator]=function(){return new gg(this.h())};
eg.prototype.g=function(){return new gg(this.h())};
function fg(a){this.h=a}
y(fg,ag);fg.prototype.next=function(){return this.h.next()};
fg.prototype[Symbol.iterator]=function(){return new gg(this.h)};
fg.prototype.g=function(){return new gg(this.h)};
function gg(a){eg.call(this,function(){return a});
this.i=a}
y(gg,eg);gg.prototype.next=function(){return this.i.next()};function hg(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof hg)for(c=ig(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ig(a){jg(a);return a.g.concat()}
r=hg.prototype;r.has=function(a){return kg(this.h,a)};
r.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||lg;jg(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function lg(a,b){return a===b}
r.Sb=function(){return 0==this.size};
r.clear=function(){this.h={};this.i=this.size=this.g.length=0};
r.remove=function(a){return this.delete(a)};
r.delete=function(a){return kg(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&jg(this),!0):!1};
function jg(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];kg(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],kg(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
r.get=function(a,b){return kg(this.h,a)?this.h[a]:b};
r.set=function(a,b){kg(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
r.forEach=function(a,b){for(var c=ig(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new hg(this)};
r.keys=function(){return dg(this.ia(!0)).g()};
r.values=function(){return dg(this.ia(!1)).g()};
r.entries=function(){var a=this;return Xf(this.keys(),function(b){return[b,a.get(b)]})};
r.ia=function(a){jg(this);var b=0,c=this.i,d=this,e=new ag;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return bg;var f=d.g[b++];return cg(a?f:d.h[f])};
return e};
function kg(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var mg=C.JSON.stringify;function ng(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function og(a){this.g=0;this.H=void 0;this.j=this.h=this.i=null;this.o=this.u=!1;if(a!=Za)try{var b=this;a.call(void 0,function(c){pg(b,2,c)},function(c){pg(b,3,c)})}catch(c){pg(this,3,c)}}
function qg(){this.next=this.context=this.h=this.i=this.g=null;this.j=!1}
qg.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.j=!1};
var rg=new Jf(function(){return new qg},function(a){a.reset()});
function sg(a,b,c){var d=rg.get();d.i=a;d.h=b;d.context=c;return d}
og.prototype.then=function(a,b,c){return tg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
og.prototype.$goog_Thenable=!0;og.prototype.cancel=function(a){if(0==this.g){var b=new ug(a);Tf(function(){vg(this,b)},this)}};
function vg(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.j||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?vg(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):wg(c),xg(c,e,3,b)))}a.i=null}else pg(a,3,b)}
function yg(a,b){a.h||2!=a.g&&3!=a.g||zg(a);a.j?a.j.next=b:a.h=b;a.j=b}
function tg(a,b,c,d){var e=sg(null,null,null);e.g=new og(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ug?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;yg(a,e);return e.g}
og.prototype.S=function(a){this.g=0;pg(this,2,a)};
og.prototype.oa=function(a){this.g=0;pg(this,3,a)};
function pg(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.S,f=a.oa;if(d instanceof og){yg(d,sg(e||Za,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ma(d))try{var k=d.then;if("function"===typeof k){Ag(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.H=c,a.g=b,a.i=null,zg(a),3!=b||c instanceof ug||Bg(a,c))}}
function Ag(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function zg(a){a.u||(a.u=!0,Tf(a.M,a))}
function wg(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);return b}
og.prototype.M=function(){for(var a;a=wg(this);)xg(this,a,this.g,this.H);this.u=!1};
function xg(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Cg(b,c,d);else try{b.j?b.i.call(b.context):Cg(b,c,d)}catch(e){Dg.call(null,e)}Kf(rg,b)}
function Cg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Bg(a,b){a.o=!0;Tf(function(){a.o&&Dg.call(null,b)})}
var Dg=fc;function ug(a){Xa.call(this,a)}
Va(ug,Xa);ug.prototype.name="cancel";function M(a){Fe.call(this);this.o=1;this.i=[];this.j=0;this.g=[];this.h={};this.u=!!a}
Va(M,Fe);r=M.prototype;r.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.o;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.o=e+3;d.push(e);return e};
function Eg(a,b,c){var d=Fg;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.vb(a)}}
r.vb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.g[a+1]=function(){}):(c&&cb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
r.eb=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Gg(this.g[g+1],this.g[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f&&!this.Ja;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.vb(c)}}return 0!=e}return!1};
function Gg(a,b,c){Tf(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.vb,this),delete this.h[a])}else this.g.length=0,this.h={}};
r.sa=function(){M.na.sa.call(this);this.clear();this.i.length=0};function Hg(a){this.g=a}
Hg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,mg(b))};
Hg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Hg.prototype.remove=function(a){this.g.remove(a)};function Ig(a){this.g=a}
Va(Ig,Hg);function Jg(a){this.data=a}
function Kg(a){return void 0===a||a instanceof Jg?a:new Jg(a)}
Ig.prototype.set=function(a,b){Ig.na.set.call(this,a,Kg(b))};
Ig.prototype.h=function(a){a=Ig.na.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ig.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Lg(a){this.g=a}
Va(Lg,Ig);Lg.prototype.set=function(a,b,c){if(b=Kg(b)){if(c){if(c<Ua()){Lg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ua()}Lg.na.set.call(this,a,b)};
Lg.prototype.h=function(a){var b=Lg.na.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ua()||c&&c>Ua())Lg.prototype.remove.call(this,a);else return b}};function Mg(){}
;function Ng(){}
Va(Ng,Mg);Ng.prototype[Symbol.iterator]=function(){return dg(this.ia(!0)).g()};
Ng.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Og(a){this.g=a}
Va(Og,Ng);r=Og.prototype;r.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeItem(a)};
r.ia=function(a){var b=0,c=this.g,d=new ag;d.next=function(){if(b>=c.length)return bg;var e=c.key(b++);if(a)return cg(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return cg(e)};
return d};
r.clear=function(){this.g.clear()};
r.key=function(a){return this.g.key(a)};function Pg(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
Va(Pg,Og);function Qg(a,b){this.h=a;this.g=null;var c;if(c=jc)c=!(9<=Number(zc));if(c){Rg||(Rg=new hg);this.g=Rg.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),Rg.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Va(Qg,Ng);var Sg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Rg=null;function Tg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Sg[b]})}
r=Qg.prototype;r.set=function(a,b){this.g.setAttribute(Tg(a),b);Ug(this)};
r.get=function(a){a=this.g.getAttribute(Tg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeAttribute(Tg(a));Ug(this)};
r.ia=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new ag;d.next=function(){if(b>=c.length)return bg;var e=c[b++];if(a)return cg(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return cg(e)};
return d};
r.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ug(this)};
function Ug(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Vg(a,b){this.h=a;this.g=b+"::"}
Va(Vg,Ng);Vg.prototype.set=function(a,b){this.h.set(this.g+a,b)};
Vg.prototype.get=function(a){return this.h.get(this.g+a)};
Vg.prototype.remove=function(a){this.h.remove(this.g+a)};
Vg.prototype.ia=function(a){var b=this.h[Symbol.iterator](),c=this,d=new ag;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return cg(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},Wg="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.dc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Xg={Ta:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
pc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Yg={Ta:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
pc:function(a){return[].concat.apply([],a)}};
O.zd=function(){Wg?(O.Sa=Uint8Array,O.pa=Uint16Array,O.Nc=Int32Array,O.assign(O,Xg)):(O.Sa=Array,O.pa=Array,O.Nc=Array,O.assign(O,Yg))};
O.zd();var Zg=!0;try{new Uint8Array(1)}catch(a){Zg=!1}
function $g(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new O.Sa(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var ah={};ah=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var bh={},ch,dh=[],eh=0;256>eh;eh++){ch=eh;for(var fh=0;8>fh;fh++)ch=ch&1?3988292384^ch>>>1:ch>>>1;dh[eh]=ch}bh=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^dh[(a^b[d])&255];return a^-1};var gh={};gh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function hh(a){for(var b=a.length;0<=--b;)a[b]=0}
var ih=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],jh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],kh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],lh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],mh=Array(576);hh(mh);var nh=Array(60);hh(nh);var oh=Array(512);hh(oh);var ph=Array(256);hh(ph);var qh=Array(29);hh(qh);var rh=Array(30);hh(rh);function sh(a,b,c,d,e){this.Jc=a;this.cd=b;this.bd=c;this.Zc=d;this.td=e;this.uc=a&&a.length}
var th,uh,vh;function wh(a,b){this.nc=a;this.ab=0;this.Ea=b}
function xh(a,b){a.K[a.pending++]=b&255;a.K[a.pending++]=b>>>8&255}
function Th(a,b,c){a.O>16-c?(a.V|=b<<a.O&65535,xh(a,a.V),a.V=b>>16-a.O,a.O+=c-16):(a.V|=b<<a.O&65535,a.O+=c)}
function Uh(a,b,c){Th(a,c[2*b],c[2*b+1])}
function Vh(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Wh(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Vh(d[e]++,e))}
function Xh(a){var b;for(b=0;286>b;b++)a.X[2*b]=0;for(b=0;30>b;b++)a.Ka[2*b]=0;for(b=0;19>b;b++)a.R[2*b]=0;a.X[512]=1;a.xa=a.fb=0;a.da=a.matches=0}
function Yh(a){8<a.O?xh(a,a.V):0<a.O&&(a.K[a.pending++]=a.V);a.V=0;a.O=0}
function Zh(a,b,c){Yh(a);xh(a,c);xh(a,~c);O.Ta(a.K,a.window,b,c,a.pending);a.pending+=c}
function $h(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function ai(a,b,c){for(var d=a.L[c],e=c<<1;e<=a.wa;){e<a.wa&&$h(b,a.L[e+1],a.L[e],a.depth)&&e++;if($h(b,d,a.L[e],a.depth))break;a.L[c]=a.L[e];c=e;e<<=1}a.L[c]=d}
function bi(a,b,c){var d=0;if(0!==a.da){do{var e=a.K[a.nb+2*d]<<8|a.K[a.nb+2*d+1];var f=a.K[a.Ub+d];d++;if(0===e)Uh(a,f,b);else{var g=ph[f];Uh(a,g+256+1,b);var h=ih[g];0!==h&&(f-=qh[g],Th(a,f,h));e--;g=256>e?oh[e]:oh[256+(e>>>7)];Uh(a,g,c);h=jh[g];0!==h&&(e-=rh[g],Th(a,e,h))}}while(d<a.da)}Uh(a,256,b)}
function ci(a,b){var c=b.nc,d=b.Ea.Jc,e=b.Ea.uc,f=b.Ea.Zc,g,h=-1;a.wa=0;a.Wa=573;for(g=0;g<f;g++)0!==c[2*g]?(a.L[++a.wa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.wa;){var k=a.L[++a.wa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.xa--;e&&(a.fb-=d[2*k+1])}b.ab=h;for(g=a.wa>>1;1<=g;g--)ai(a,c,g);k=f;do g=a.L[1],a.L[1]=a.L[a.wa--],ai(a,c,1),d=a.L[1],a.L[--a.Wa]=g,a.L[--a.Wa]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.L[1]=k++,ai(a,c,1);while(2<=a.wa);a.L[--a.Wa]=
a.L[1];g=b.nc;k=b.ab;d=b.Ea.Jc;e=b.Ea.uc;f=b.Ea.cd;var l=b.Ea.bd,m=b.Ea.td,p,q=0;for(p=0;15>=p;p++)a.ra[p]=0;g[2*a.L[a.Wa]+1]=0;for(b=a.Wa+1;573>b;b++){var n=a.L[b];p=g[2*g[2*n+1]+1]+1;p>m&&(p=m,q++);g[2*n+1]=p;if(!(n>k)){a.ra[p]++;var t=0;n>=l&&(t=f[n-l]);var u=g[2*n];a.xa+=u*(p+t);e&&(a.fb+=u*(d[2*n+1]+t))}}if(0!==q){do{for(p=m-1;0===a.ra[p];)p--;a.ra[p]--;a.ra[p+1]+=2;a.ra[m]--;q-=2}while(0<q);for(p=m;0!==p;p--)for(n=a.ra[p];0!==n;)d=a.L[--b],d>k||(g[2*d+1]!==p&&(a.xa+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),n--)}Wh(c,h,a.ra)}
function di(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.R[2*l]+=g:0!==l?(l!==e&&a.R[2*l]++,a.R[32]++):10>=g?a.R[34]++:a.R[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function ei(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Uh(a,l,a.R);while(0!==--g)}else 0!==l?(l!==e&&(Uh(a,l,a.R),g--),Uh(a,16,a.R),Th(a,g-3,2)):10>=g?(Uh(a,17,a.R),Th(a,g-3,3)):(Uh(a,18,a.R),Th(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function fi(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.X[2*c])return 0;if(0!==a.X[18]||0!==a.X[20]||0!==a.X[26])return 1;for(c=32;256>c;c++)if(0!==a.X[2*c])return 1;return 0}
var gi=!1;function hi(a,b,c){a.K[a.nb+2*a.da]=b>>>8&255;a.K[a.nb+2*a.da+1]=b&255;a.K[a.Ub+a.da]=c&255;a.da++;0===b?a.X[2*c]++:(a.matches++,b--,a.X[2*(ph[c]+256+1)]++,a.Ka[2*(256>b?oh[b]:oh[256+(b>>>7)])]++);return a.da===a.qb-1}
;function ii(a,b){a.msg=gh[b];return b}
function ji(a){for(var b=a.length;0<=--b;)a[b]=0}
function ki(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(O.Ta(a.output,b.K,b.sb,c,a.bb),a.bb+=c,b.sb+=c,a.ec+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.sb=0))}
function Q(a,b){var c=0<=a.Z?a.Z:-1,d=a.l-a.Z,e=0;if(0<a.level){2===a.C.Pb&&(a.C.Pb=fi(a));ci(a,a.Fb);ci(a,a.Bb);di(a,a.X,a.Fb.ab);di(a,a.Ka,a.Bb.ab);ci(a,a.jc);for(e=18;3<=e&&0===a.R[2*lh[e]+1];e--);a.xa+=3*(e+1)+14;var f=a.xa+3+7>>>3;var g=a.fb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Th(a,b?1:0,3),Zh(a,c,d);else if(4===a.strategy||g===f)Th(a,2+(b?1:0),3),bi(a,mh,nh);else{Th(a,4+(b?1:0),3);c=a.Fb.ab+1;d=a.Bb.ab+1;e+=1;Th(a,c-257,5);Th(a,d-1,5);Th(a,e-4,4);for(f=0;f<e;f++)Th(a,a.R[2*lh[f]+
1],3);ei(a,a.X,c-1);ei(a,a.Ka,d-1);bi(a,a.X,a.Ka)}Xh(a);b&&Yh(a);a.Z=a.l;ki(a.C)}
function S(a,b){a.K[a.pending++]=b}
function li(a,b){a.K[a.pending++]=b>>>8&255;a.K[a.pending++]=b&255}
function mi(a,b){var c=a.Ac,d=a.l,e=a.aa,f=a.Bc,g=a.l>a.T-262?a.l-(a.T-262):0,h=a.window,k=a.Ga,l=a.la,m=a.l+258,p=h[d+e-1],q=h[d+e];a.aa>=a.sc&&(c>>=2);f>a.m&&(f=a.m);do{var n=b;if(h[n+e]===q&&h[n+e-1]===p&&h[n]===h[d]&&h[++n]===h[d+1]){d+=2;for(n++;h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&d<m;);n=258-(m-d);d=m-258;if(n>e){a.Za=b;e=n;if(n>=f)break;p=h[d+e-1];q=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.m?e:a.m}
function ni(a){var b=a.T,c;do{var d=a.Lc-a.m-a.l;if(a.l>=b+(b-262)){O.Ta(a.window,a.window,b,b,0);a.Za-=b;a.l-=b;a.Z-=b;var e=c=a.Eb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.la[--e],a.la[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.C.U)break;e=a.C;c=a.window;f=a.l+a.m;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,O.Ta(c,e.input,e.Qa,g,f),1===e.state.wrap?e.A=ah(e.A,c,g,f):2===e.state.wrap&&(e.A=bh(e.A,c,g,f)),e.Qa+=g,e.Ra+=g,c=g);a.m+=c;if(3<=a.m+a.Y)for(d=a.l-a.Y,a.D=a.window[d],a.D=
(a.D<<a.va^a.window[d+1])&a.ta;a.Y&&!(a.D=(a.D<<a.va^a.window[d+3-1])&a.ta,a.la[d&a.Ga]=a.head[a.D],a.head[a.D]=d,d++,a.Y--,3>a.m+a.Y););}while(262>a.m&&0!==a.C.U)}
function oi(a,b){for(var c;;){if(262>a.m){ni(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,c=a.la[a.l&a.Ga]=a.head[a.D],a.head[a.D]=a.l);0!==c&&a.l-c<=a.T-262&&(a.G=mi(a,c));if(3<=a.G)if(c=hi(a,a.l-a.Za,a.G-3),a.m-=a.G,a.G<=a.Wb&&3<=a.m){a.G--;do a.l++,a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,a.la[a.l&a.Ga]=a.head[a.D],a.head[a.D]=a.l;while(0!==--a.G);a.l++}else a.l+=a.G,a.G=0,a.D=a.window[a.l],a.D=(a.D<<a.va^a.window[a.l+1])&a.ta;else c=hi(a,0,a.window[a.l]),
a.m--,a.l++;if(c&&(Q(a,!1),0===a.C.F))return 1}a.Y=2>a.l?a.l:2;return 4===b?(Q(a,!0),0===a.C.F?3:4):a.da&&(Q(a,!1),0===a.C.F)?1:2}
function pi(a,b){for(var c,d;;){if(262>a.m){ni(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,c=a.la[a.l&a.Ga]=a.head[a.D],a.head[a.D]=a.l);a.aa=a.G;a.Ec=a.Za;a.G=2;0!==c&&a.aa<a.Wb&&a.l-c<=a.T-262&&(a.G=mi(a,c),5>=a.G&&(1===a.strategy||3===a.G&&4096<a.l-a.Za)&&(a.G=2));if(3<=a.aa&&a.G<=a.aa){d=a.l+a.m-3;c=hi(a,a.l-1-a.Ec,a.aa-3);a.m-=a.aa-1;a.aa-=2;do++a.l<=d&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,a.la[a.l&a.Ga]=a.head[a.D],a.head[a.D]=a.l);while(0!==
--a.aa);a.Oa=0;a.G=2;a.l++;if(c&&(Q(a,!1),0===a.C.F))return 1}else if(a.Oa){if((c=hi(a,0,a.window[a.l-1]))&&Q(a,!1),a.l++,a.m--,0===a.C.F)return 1}else a.Oa=1,a.l++,a.m--}a.Oa&&(hi(a,0,a.window[a.l-1]),a.Oa=0);a.Y=2>a.l?a.l:2;return 4===b?(Q(a,!0),0===a.C.F?3:4):a.da&&(Q(a,!1),0===a.C.F)?1:2}
function qi(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){ni(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.G=0;if(3<=a.m&&0<a.l&&(d=a.l-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.l+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.G=258-(e-d);a.G>a.m&&(a.G=a.m)}3<=a.G?(c=hi(a,1,a.G-3),a.m-=a.G,a.l+=a.G,a.G=0):(c=hi(a,0,a.window[a.l]),a.m--,a.l++);if(c&&(Q(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(Q(a,!0),0===a.C.F?3:4):a.da&&
(Q(a,!1),0===a.C.F)?1:2}
function ri(a,b){for(var c;;){if(0===a.m&&(ni(a),0===a.m)){if(0===b)return 1;break}a.G=0;c=hi(a,0,a.window[a.l]);a.m--;a.l++;if(c&&(Q(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(Q(a,!0),0===a.C.F?3:4):a.da&&(Q(a,!1),0===a.C.F)?1:2}
function si(a,b,c,d,e){this.fd=a;this.sd=b;this.vd=c;this.rd=d;this.dd=e}
var ti;ti=[new si(0,0,0,0,function(a,b){var c=65535;for(c>a.ea-5&&(c=a.ea-5);;){if(1>=a.m){ni(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.l+=a.m;a.m=0;var d=a.Z+c;if(0===a.l||a.l>=d)if(a.m=a.l-d,a.l=d,Q(a,!1),0===a.C.F)return 1;if(a.l-a.Z>=a.T-262&&(Q(a,!1),0===a.C.F))return 1}a.Y=0;if(4===b)return Q(a,!0),0===a.C.F?3:4;a.l>a.Z&&Q(a,!1);return 1}),
new si(4,4,8,4,oi),new si(4,5,16,8,oi),new si(4,6,32,32,oi),new si(4,4,16,16,pi),new si(8,16,32,32,pi),new si(8,16,128,128,pi),new si(8,32,128,256,pi),new si(32,128,258,1024,pi),new si(32,258,258,4096,pi)];
function ui(){this.C=null;this.status=0;this.K=null;this.wrap=this.pending=this.sb=this.ea=0;this.v=null;this.fa=0;this.method=8;this.Xa=-1;this.Ga=this.fc=this.T=0;this.window=null;this.Lc=0;this.head=this.la=null;this.Bc=this.sc=this.strategy=this.level=this.Wb=this.Ac=this.aa=this.m=this.Za=this.l=this.Oa=this.Ec=this.G=this.Z=this.va=this.ta=this.Qb=this.Eb=this.D=0;this.X=new O.pa(1146);this.Ka=new O.pa(122);this.R=new O.pa(78);ji(this.X);ji(this.Ka);ji(this.R);this.jc=this.Bb=this.Fb=null;this.ra=
new O.pa(16);this.L=new O.pa(573);ji(this.L);this.Wa=this.wa=0;this.depth=new O.pa(573);ji(this.depth);this.O=this.V=this.Y=this.matches=this.fb=this.xa=this.nb=this.da=this.qb=this.Ub=0}
function vi(a,b){if(!a||!a.state||5<b||0>b)return a?ii(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.U||666===c.status&&4!==b)return ii(a,0===a.F?-5:-2);c.C=a;var d=c.Xa;c.Xa=b;if(42===c.status)if(2===c.wrap)a.A=0,S(c,31),S(c,139),S(c,8),c.v?(S(c,(c.v.text?1:0)+(c.v.Ca?2:0)+(c.v.Ba?4:0)+(c.v.name?8:0)+(c.v.comment?16:0)),S(c,c.v.time&255),S(c,c.v.time>>8&255),S(c,c.v.time>>16&255),S(c,c.v.time>>24&255),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,c.v.ue&255),c.v.Ba&&c.v.Ba.length&&(S(c,
c.v.Ba.length&255),S(c,c.v.Ba.length>>8&255)),c.v.Ca&&(a.A=bh(a.A,c.K,c.pending,0)),c.fa=0,c.status=69):(S(c,0),S(c,0),S(c,0),S(c,0),S(c,0),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,3),c.status=113);else{var e=8+(c.fc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.l&&(e|=32);c.status=113;li(c,e+(31-e%31));0!==c.l&&(li(c,a.A>>>16),li(c,a.A&65535));a.A=1}if(69===c.status)if(c.v.Ba){for(e=c.pending;c.fa<(c.v.Ba.length&65535)&&(c.pending!==c.ea||(c.v.Ca&&c.pending>
e&&(a.A=bh(a.A,c.K,c.pending-e,e)),ki(a),e=c.pending,c.pending!==c.ea));)S(c,c.v.Ba[c.fa]&255),c.fa++;c.v.Ca&&c.pending>e&&(a.A=bh(a.A,c.K,c.pending-e,e));c.fa===c.v.Ba.length&&(c.fa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.v.name){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ca&&c.pending>e&&(a.A=bh(a.A,c.K,c.pending-e,e)),ki(a),e=c.pending,c.pending===c.ea)){var f=1;break}f=c.fa<c.v.name.length?c.v.name.charCodeAt(c.fa++)&255:0;S(c,f)}while(0!==f);c.v.Ca&&c.pending>e&&(a.A=bh(a.A,c.K,c.pending-
e,e));0===f&&(c.fa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.v.comment){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ca&&c.pending>e&&(a.A=bh(a.A,c.K,c.pending-e,e)),ki(a),e=c.pending,c.pending===c.ea)){f=1;break}f=c.fa<c.v.comment.length?c.v.comment.charCodeAt(c.fa++)&255:0;S(c,f)}while(0!==f);c.v.Ca&&c.pending>e&&(a.A=bh(a.A,c.K,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.v.Ca?(c.pending+2>c.ea&&ki(a),c.pending+2<=c.ea&&(S(c,a.A&255),S(c,a.A>>8&255),a.A=0,
c.status=113)):c.status=113);if(0!==c.pending){if(ki(a),0===a.F)return c.Xa=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return ii(a,-5);if(666===c.status&&0!==a.U)return ii(a,-5);if(0!==a.U||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?ri(c,b):3===c.strategy?qi(c,b):ti[c.level].dd(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Xa=-1),0;if(2===d&&(1===b?(Th(c,2,3),Uh(c,256,mh),16===c.O?(xh(c,c.V),c.V=0,c.O=0):8<=c.O&&(c.K[c.pending++]=c.V&255,c.V>>=8,c.O-=
8)):5!==b&&(Th(c,0,3),Zh(c,0,0),3===b&&(ji(c.head),0===c.m&&(c.l=0,c.Z=0,c.Y=0))),ki(a),0===a.F))return c.Xa=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(S(c,a.A&255),S(c,a.A>>8&255),S(c,a.A>>16&255),S(c,a.A>>24&255),S(c,a.Ra&255),S(c,a.Ra>>8&255),S(c,a.Ra>>16&255),S(c,a.Ra>>24&255)):(li(c,a.A>>>16),li(c,a.A&65535));ki(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var wi={};wi=function(){this.input=null;this.Ra=this.U=this.Qa=0;this.output=null;this.ec=this.F=this.bb=0;this.msg="";this.state=null;this.Pb=2;this.A=0};var xi=Object.prototype.toString;
function yi(a){if(!(this instanceof yi))return new yi(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,Ha:15,ud:8,strategy:0,Fa:""},a||{});a.raw&&0<a.Ha?a.Ha=-a.Ha:a.gd&&0<a.Ha&&16>a.Ha&&(a.Ha+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.C=new wi;this.C.F=0;var b=this.C;var c=a.level,d=a.method,e=a.Ha,f=a.ud,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=ii(b,-2);else{8===e&&(e=9);var k=new ui;
b.state=k;k.C=b;k.wrap=h;k.v=null;k.fc=e;k.T=1<<k.fc;k.Ga=k.T-1;k.Qb=f+7;k.Eb=1<<k.Qb;k.ta=k.Eb-1;k.va=~~((k.Qb+3-1)/3);k.window=new O.Sa(2*k.T);k.head=new O.pa(k.Eb);k.la=new O.pa(k.T);k.qb=1<<f+6;k.ea=4*k.qb;k.K=new O.Sa(k.ea);k.nb=1*k.qb;k.Ub=3*k.qb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Ra=b.ec=0;b.Pb=2;c=b.state;c.pending=0;c.sb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Xa=0;if(!gi){d=Array(16);for(f=g=0;28>f;f++)for(qh[f]=g,e=0;e<1<<ih[f];e++)ph[g++]=
f;ph[g-1]=f;for(f=g=0;16>f;f++)for(rh[f]=g,e=0;e<1<<jh[f];e++)oh[g++]=f;for(g>>=7;30>f;f++)for(rh[f]=g<<7,e=0;e<1<<jh[f]-7;e++)oh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)mh[2*e+1]=8,e++,d[8]++;for(;255>=e;)mh[2*e+1]=9,e++,d[9]++;for(;279>=e;)mh[2*e+1]=7,e++,d[7]++;for(;287>=e;)mh[2*e+1]=8,e++,d[8]++;Wh(mh,287,d);for(e=0;30>e;e++)nh[2*e+1]=5,nh[2*e]=Vh(e,5);th=new sh(mh,ih,257,286,15);uh=new sh(nh,jh,0,30,15);vh=new sh([],kh,0,19,7);gi=!0}c.Fb=new wh(c.X,th);c.Bb=new wh(c.Ka,uh);c.jc=new wh(c.R,
vh);c.V=0;c.O=0;Xh(c);c=0}else c=ii(b,-2);0===c&&(b=b.state,b.Lc=2*b.T,ji(b.head),b.Wb=ti[b.level].sd,b.sc=ti[b.level].fd,b.Bc=ti[b.level].vd,b.Ac=ti[b.level].rd,b.l=0,b.Z=0,b.m=0,b.Y=0,b.G=b.aa=2,b.Oa=0,b.D=0);b=c}}else b=-2;if(0!==b)throw Error(gh[b]);a.header&&(b=this.C)&&b.state&&2===b.state.wrap&&(b.state.v=a.header);if(a.ob){var l;"string"===typeof a.ob?l=$g(a.ob):"[object ArrayBuffer]"===xi.call(a.ob)?l=new Uint8Array(a.ob):l=a.ob;a=this.C;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.m)b=-2;else{1===b&&(a.A=ah(a.A,f,g,0));l.wrap=0;g>=l.T&&(0===b&&(ji(l.head),l.l=0,l.Z=0,l.Y=0),c=new O.Sa(l.T),O.Ta(c,f,g-l.T,l.T,0),f=c,g=l.T);c=a.U;d=a.Qa;e=a.input;a.U=g;a.Qa=0;a.input=f;for(ni(l);3<=l.m;){f=l.l;g=l.m-2;do l.D=(l.D<<l.va^l.window[f+3-1])&l.ta,l.la[f&l.Ga]=l.head[l.D],l.head[l.D]=f,f++;while(--g);l.l=f;l.m=2;ni(l)}l.l+=l.m;l.Z=l.l;l.Y=l.m;l.m=0;l.G=l.aa=2;l.Oa=0;a.Qa=d;a.input=e;a.U=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(gh[b]);this.le=!0}}
yi.prototype.push=function(a,b){var c=this.C,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=$g(a):"[object ArrayBuffer]"===xi.call(a)?c.input=new Uint8Array(a):c.input=a;c.Qa=0;c.U=c.input.length;do{0===c.F&&(c.output=new O.Sa(d),c.bb=0,c.F=d);a=vi(c,e);if(1!==a&&0!==a)return zi(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Fa){var f=O.dc(c.output,c.bb);b=f;f=f.length;if(65537>f&&(b.subarray&&Zg||!b.subarray))b=
String.fromCharCode.apply(null,O.dc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.dc(c.output,c.bb),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.C)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=ii(c,-2):(c.state=null,a=113===d?ii(c,-3):0)):a=-2,zi(this,a),this.ended=!0,0===a;2===e&&(zi(this,0),c.F=0);return!0};
function zi(a,b){0===b&&(a.result="string"===a.options.Fa?a.chunks.join(""):O.pc(a.chunks));a.chunks=[];a.err=b;a.msg=a.C.msg}
;function Ai(a){this.name=a}
;var Bi=new Ai("rawColdConfigGroup");var Ci=new Ai("rawHotConfigGroup");function Di(a){this.s=I(a)}
y(Di,L);Di.prototype.g=function(a){K(this,5,a)};function Ei(a){this.s=I(a)}
y(Ei,L);function Fi(a){this.s=I(a)}
y(Fi,L);Fi.ma=[2];function Gi(a){this.s=I(a)}
y(Gi,L);Gi.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=zd(this,36);return null!=b?b:a};
Gi.prototype.setHomeGroupInfo=function(a){return J(this,Fi,81,a)};
Gi.ma=[9,66,32,86,100,101];function Hi(a){this.s=I(a)}
y(Hi,L);Hi.prototype.getKey=function(){return Ld(this,1)};
Hi.prototype.ja=function(){return Ld(this,Gd(this,Ii,2))};
var Ii=[2,3,4,5,6];function Ji(a){this.s=I(a)}
y(Ji,L);Ji.ma=[15,26,28];function Ki(a){this.s=I(a)}
y(Ki,L);Ki.ma=[5];function Li(a){this.s=I(a)}
y(Li,L);function Mi(a){this.s=I(a)}
y(Mi,L);Mi.prototype.setSafetyMode=function(a){return Qd(this,5,a)};
Mi.ma=[12];function Ni(a){this.s=I(a)}
y(Ni,L);Ni.ma=[12];var Oi={ke:"WEB_DISPLAY_MODE_UNKNOWN",ge:"WEB_DISPLAY_MODE_BROWSER",ie:"WEB_DISPLAY_MODE_MINIMAL_UI",je:"WEB_DISPLAY_MODE_STANDALONE",he:"WEB_DISPLAY_MODE_FULLSCREEN"};function Pi(a){this.s=I(a)}
y(Pi,L);Pi.prototype.getKey=function(){return Ld(this,1)};
Pi.prototype.ja=function(){return Ld(this,2)};function Qi(a){this.s=I(a)}
y(Qi,L);Qi.ma=[4,5];function Ri(a){this.s=I(a)}
y(Ri,L);function Si(a){this.s=I(a)}
y(Si,L);var Ti=[2,3,4,5];function Ui(a){this.s=I(a)}
y(Ui,L);function Vi(a){this.s=I(a)}
y(Vi,L);function Wi(a){this.s=I(a)}
y(Wi,L);function Xi(a){this.s=I(a)}
y(Xi,L);Xi.ma=[10,17];function Yi(a){this.s=I(a)}
y(Yi,L);function Zi(a){this.s=I(a)}
y(Zi,L);function $i(a){this.s=I(a)}
y($i,L);function aj(a){this.s=I(a,486)}
y(aj,L);
var bj=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485];function cj(a){this.s=I(a)}
y(cj,L);function dj(a){this.s=I(a)}
y(dj,L);dj.prototype.getPlaylistId=function(){return Md(this,2)};
var Nd=[1,2];function ej(a){this.s=I(a)}
y(ej,L);ej.ma=[3];var fj=C.window,gj,hj,ij=(null==fj?void 0:null==(gj=fj.yt)?void 0:gj.config_)||(null==fj?void 0:null==(hj=fj.ytcfg)?void 0:hj.data_)||{};E("yt.config_",ij);function jj(){var a=arguments;1<a.length?ij[a[0]]=a[1]:1===a.length&&Object.assign(ij,a[0])}
function T(a,b){return a in ij?ij[a]:b}
function kj(){return T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function lj(){var a=ij.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var mj=[];function nj(a){mj.forEach(function(b){return b(a)})}
function oj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){pj(b)}}:a}
function pj(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),jj("ERRORS",b));nj(a)}
function qj(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=T("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),jj("ERRORS",f))}
;function U(a){a=T("EXPERIMENT_FLAGS",{})[a];return"string"===typeof a&&"false"===a?!1:!!a}
function V(a,b){a=T("EXPERIMENT_FLAGS",{})[a];return void 0===a&&void 0!==b?b:Number(a||0)}
function rj(){for(var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=T("EXPERIMENT_FLAGS",{});var e=w(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var sj=0;E("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++sj});var tj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function uj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in tj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
uj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
uj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
uj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=C.ytEventsEventsListeners||{};E("ytEventsEventsListeners",kb);var vj=C.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",vj);
function wj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ma(e[4])&&Ma(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function xj(a){a&&("string"==typeof a&&(a=[a]),bb(a,function(b){if(b in kb){var c=kb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?yj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[b]}}))}
var yj=$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function zj(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=wj(a,b,c,d);if(!e){e=++vj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new uj(h);if(!Wd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new uj(h);
h.currentTarget=a;return c.call(a,h)};
g=oj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),yj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);kb[e]=[a,b,c,g,d]}}}
;function Aj(a,b){"function"===typeof a&&(a=oj(a));return window.setTimeout(a,b)}
function Bj(a){"function"===typeof a&&(a=oj(a));return window.setInterval(a,250)}
;var Cj=/^[\w.]*$/,Dj={q:!0,search_query:!0};function Ej(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Fj(f[0]||""),h=Fj(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],m=String(Ej);k.args=[{key:l,value:f[1],query:a,method:Gj==m?"unchanged":m}];Dj.hasOwnProperty(l)||qj(k)}}return c}
var Gj=String(Ej);function Hj(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];bb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Ij(a){"?"==a.charAt(0)&&(a=a.substr(1));return Ej(a,"&")}
function Jj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ij(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=cc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Kj(a){if(!b)var b=window.location.href;var c=a.match(Yb)[1]||null,d=$b(a);c&&d?(a=a.match(Yb),b=b.match(Yb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?$b(b)==d&&(Number(b.match(Yb)[4]||null)||null)==(Number(a.match(Yb)[4]||null)||null):!0;return a}
function Fj(a){return a&&a.match(Cj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Lj(a){var b=Mj;a=void 0===a?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=qe;e.flash="0";a:{try{var f=b.g.top.location.href}catch(da){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Td:g;try{var h=g.history.length}catch(da){h=0}e.u_his=h;var k;e.u_h=null==(k=Td.screen)?void 0:k.height;var l;e.u_w=null==(l=Td.screen)?void 0:l.width;var m;e.u_ah=null==(m=Td.screen)?void 0:m.availHeight;var p;e.u_aw=
null==(p=Td.screen)?void 0:p.availWidth;var q;e.u_cd=null==(q=Td.screen)?void 0:q.colorDepth}catch(da){}h=b.g;try{var n=h.screenX;var t=h.screenY}catch(da){}try{var u=h.outerWidth;var z=h.outerHeight}catch(da){}try{var G=h.innerWidth;var R=h.innerHeight}catch(da){}try{var P=h.screenLeft;var Fa=h.screenTop}catch(da){}try{G=h.innerWidth,R=h.innerHeight}catch(da){}try{var Vc=h.screen.availWidth;var Ra=h.screen.availTop}catch(da){}n=[P,Fa,n,t,Vc,Ra,u,z,G,R];t=b.g.top;try{var Ga=(t||window).document,ea=
"CSS1Compat"==Ga.compatMode?Ga.documentElement:Ga.body;var na=(new Ud(ea.clientWidth,ea.clientHeight)).round()}catch(da){na=new Ud(-12245933,-12245933)}Ga=na;na={};var oa=void 0===oa?C:oa;ea=new qf;"SVGElement"in oa&&"createElementNS"in oa.document&&ea.set(0);t=oe();t["allow-top-navigation-by-user-activation"]&&ea.set(1);t["allow-popups-to-escape-sandbox"]&&ea.set(2);oa.crypto&&oa.crypto.subtle&&ea.set(3);"TextDecoder"in oa&&"TextEncoder"in oa&&ea.set(4);oa=rf(ea);na.bc=oa;na.bih=Ga.height;na.biw=
Ga.width;na.brdim=n.join();b=b.h;b=(na.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,na.wgl=!!Td.WebGLRenderingContext,na);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Mj=new function(){var a=window.document;this.g=window;this.h=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Hj(Lj(a))});Ua();var Nj="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Oj(){if(!Nj)return null;var a=Nj();return"open"in a?a:null}
;var Pj="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(Pj);var Qj={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Rj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(Pj)),Sj=!1;
function Tj(a,b){b=void 0===b?{}:b;var c=Kj(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in Qj){var f=T(Qj[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=T("VISITOR_DATA"));!f||!c&&$b(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===T("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&T("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==T("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");c&&T("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in
b&&delete b["X-Goog-Visitor-Id"];if(c||!$b(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!$b(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&$b(a)||(b["X-YouTube-Ad-Signals"]=Hj(Lj()));return b}
function Uj(a){var b=window.location.search,c=$b(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Kj(a)&&(c=document.location.hostname);var d=Zb(a.match(Yb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ij(b),f={};bb(Rj,function(g){e[g]&&(f[g]=e[g])});
return Jj(a,f||{},!1)}
function Vj(a,b){var c=b.format||"JSON";a=Wj(a,b);var d=Xj(a,b),e=!1,f=Yj(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)m=Zj(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Aj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Wj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Jj(a,b||{},!0);return a}
function Xj(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=T("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||$b(a)&&!b.withCredentials&&$b(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Ij(e),ob(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):cc(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!Sj&&a&&"POST"!=b.method&&(Sj=!0,pj(Error("AJAX request with postData should use POST")));return e}
function Zj(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,qj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ak(a):null)e={},bb(a.getElementsByTagName("*"),function(g){e[g.tagName]=bk(g)})}d&&ck(e);
return e}
function ck(a){if(Ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=qb();d=e?e.createHTML(d):d;a[c]=new Wb(d)}else ck(a[b])}}
function ak(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function bk(a){var b="";bb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function dk(a,b){b.method="POST";b.postParams||(b.postParams={});return Vj(a,b)}
function Yj(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&oj(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=Oj();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;U("debug_forward_web_query_parameters")&&(a=Uj(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Tj(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var ek=[{Xb:function(a){return"Cannot read property '"+a.key+"'"},
Jb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Xb:function(a){return"Cannot call '"+a.key+"'"},
Jb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Xb:function(a){return a.key+" is not defined"},
Jb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var gk={Da:[],Aa:[{mb:fk,weight:500}]};function fk(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function hk(){this.Aa=[];this.Da=[]}
var ik;function jk(){if(!ik){var a=ik=new hk;a.Da.length=0;a.Aa.length=0;gk.Da&&a.Da.push.apply(a.Da,gk.Da);gk.Aa&&a.Aa.push.apply(a.Aa,gk.Aa)}return ik}
;var kk=new M;function lk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=mk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=mk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=mk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function mk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function nk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=ok(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=lk(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?ok(f+".ve",g,h,k):0;d+=f;d+=ok(e,a[e],b,c);if(500<d)break}}else c[b]=pk(a),d+=c[b].length;else c[b]=pk(a),d+=c[b].length;return d}
function ok(a,b,c,d){c+="."+a;a=pk(b);d[c]=a;return c.length+a.length}
function pk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function qk(){}
;function rk(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function sk(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;E("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var tk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},uk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},vk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},wk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function xk(){var a=C.navigator;return a?a.connection:void 0}
;function yk(a){var b=Ea.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(yk,Error);function zk(){try{return Ak(),!0}catch(a){return!1}}
function Ak(){if(void 0!==T("DATASYNC_ID"))return T("DATASYNC_ID");throw new yk("Datasync ID not set","unknown");}
;function Bk(){}
function Ck(a,b){return pf.Ia(a,0,b)}
Bk.prototype.qa=function(a,b){return this.Ia(a,1,b)};
Bk.prototype.jb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Dk=V("web_emulated_idle_callback_delay",300),Ek=1E3/60-3,Fk=[8,5,4,3,2,1,0];
function Gk(a){a=void 0===a?{}:a;Fe.call(this);this.h=[];this.i={};this.hb=this.g=0;this.gb=this.o=!1;this.M=[];this.S=this.ib=!1;for(var b=w(Fk),c=b.next();!c.done;c=b.next())this.h[c.value]=[];this.j=0;this.Sc=a.timeout||1;this.H=Ek;this.u=0;this.wb=this.wd.bind(this);this.Rc=this.Bd.bind(this);this.Oc=this.Tc.bind(this);this.Pc=this.hd.bind(this);this.Qc=this.xd.bind(this);this.hc=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!U("disable_scheduler_requestIdleCallback");(this.za=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.wb)}
y(Gk,Fe);r=Gk.prototype;r.jb=function(a){var b=Ua();Hk(a);a=Ua()-b;this.o||(this.H-=a)};
r.Ia=function(a,b,c){++this.hb;if(10===b)return this.jb(a),this.hb;var d=this.hb;this.i[d]=a;this.o&&!c?this.M.push({id:d,priority:b}):(this.h[b].push(d),this.gb||this.o||(0!==this.g&&Ik(this)!==this.u&&Jk(this),this.start()));return d};
r.ba=function(a){delete this.i[a]};
function Kk(a){a.M.length=0;for(var b=5;0<=b;b--)a.h[b].length=0;a.h[8].length=0;a.i={};Jk(a)}
function Ik(a){if(a.h[8].length){if(a.S)return 4;if(!document.hidden&&a.za)return 3}for(var b=5;b>=a.j;b--)if(0<a.h[b].length)return 0<b?!document.hidden&&a.za?3:2:1;return 0}
function Lk(a){var b=D("yt.logging.errors.log");b&&b(a)}
function Hk(a){try{a()}catch(b){Lk(b)}}
function Mk(a){for(var b=w(Fk),c=b.next();!c.done;c=b.next())if(a.h[c.value].length)return!0;return!1}
r.hd=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ib=!0;Nk(this,b);this.ib=!1};
r.Bd=function(){Nk(this)};
r.Tc=function(){Ok(this)};
r.xd=function(a){this.S=!0;var b=Ik(this);4===b&&b!==this.u&&(Jk(this),this.start());Nk(this,void 0,a);this.S=!1};
r.wd=function(){document.hidden||Ok(this);this.g&&(Jk(this),this.start())};
function Ok(a){Jk(a);a.o=!0;for(var b=Ua(),c=a.h[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&Hk(e)}Pk(a);a.o=!1;Mk(a)&&a.start();b=Ua()-b;a.H-=b}
function Pk(a){for(var b=0,c=a.M.length;b<c;b++){var d=a.M[b];a.h[d.priority].push(d.id)}a.M.length=0}
function Nk(a,b,c){a.S&&4===a.u&&a.g||Jk(a);a.o=!0;b=Ua()+(b||a.H);for(var d=a.h[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(l){Lk(l)}}for(d=a.h[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&Hk(e);d=a.ib?0:1;d=a.j>d?a.j:d;if(!(Ua()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.h[f];g.length;){var h=g.shift(),k=c.i[h];delete c.i[h];if(k){c=k;break a}}c=null}c&&Hk(c)}while(c&&Ua()<b)}a.o=!1;Pk(a);a.H=Ek;Mk(a)&&a.start()}
r.start=function(){this.gb=!1;if(0===this.g)switch(this.u=Ik(this),this.u){case 1:var a=this.Pc;this.g=this.hc?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Dk);break;case 2:this.g=window.setTimeout(this.Rc,this.Sc);break;case 3:this.g=window.requestAnimationFrame(this.Qc);break;case 4:this.g=window.setTimeout(this.Oc,0)}};
function Jk(a){if(a.g){switch(a.u){case 1:var b=a.g;a.hc?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
r.sa=function(){Kk(this);Jk(this);this.za&&document.removeEventListener("visibilitychange",this.wb);Fe.prototype.sa.call(this)};var Qk=D("yt.scheduler.instance.timerIdMap_")||{},Rk=V("kevlar_tuner_scheduler_soft_state_timer_ms",800),Sk=0,Tk=0;function Uk(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.Ja)a=new Gk(T("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function Vk(){Wk();var a=D("ytglobal.schedulerInstanceInstance_");a&&(Ee(a),E("ytglobal.schedulerInstanceInstance_",null))}
function Wk(){Kk(Uk());for(var a in Qk)Qk.hasOwnProperty(a)&&delete Qk[Number(a)]}
function Xk(a,b,c){if(!c)return c=void 0===c,-Uk().Ia(a,b,c);var d=window.setTimeout(function(){var e=Uk().Ia(a,b);Qk[d]=e},c);
return d}
function Yk(a){Uk().jb(a)}
function Zk(a){var b=Uk();if(0>a)b.ba(-a);else{var c=Qk[a];c?(b.ba(c),delete Qk[a]):window.clearTimeout(a)}}
function $k(){al()}
function al(){window.clearTimeout(Sk);Uk().start()}
function bl(){var a=Uk();Jk(a);a.gb=!0;window.clearTimeout(Sk);Sk=window.setTimeout($k,Rk)}
function cl(){window.clearTimeout(Tk);Tk=window.setTimeout(function(){dl(0)},Rk)}
function dl(a){cl();var b=Uk();b.j=a;b.start()}
function el(a){cl();var b=Uk();b.j>a&&(b.j=a,b.start())}
function fl(){window.clearTimeout(Tk);var a=Uk();a.j=0;a.start()}
;function gl(){Bk.apply(this,arguments)}
y(gl,Bk);function hl(){gl.g||(gl.g=new gl);return gl.g}
gl.prototype.Ia=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Aj(a,c||0)};
gl.prototype.ba=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
gl.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var pf=hl();
U("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",Vk),E("yt.scheduler.instance.addJob",Xk),E("yt.scheduler.instance.addImmediateJob",Yk),E("yt.scheduler.instance.cancelJob",Zk),E("yt.scheduler.instance.cancelAllJobs",Wk),E("yt.scheduler.instance.start",al),E("yt.scheduler.instance.pause",bl),E("yt.scheduler.instance.setPriorityThreshold",dl),E("yt.scheduler.instance.enablePriorityThreshold",el),E("yt.scheduler.instance.clearPriorityThreshold",fl),E("yt.scheduler.initialized",
!0));function il(a){var b=new Pg;if(b.g)try{b.g.setItem("__sak","1");b.g.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new Vg(b,a):b:null)||(a=new Qg(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new Lg(a):null;this.h=document.domain||window.location.hostname}
il.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(mg(b))}catch(f){return}else e=escape(b);b=this.h;ye.set(""+a,e,{Vb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
il.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=ye.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
il.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;ye.remove(""+a,"/",void 0===b?"youtube.com":b)};var jl=function(){var a;return function(){a||(a=new il("ytidb"));return a}}();
function kl(){var a;return null==(a=jl())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var ll=[],ml=!1;function nl(a){ml||(ll.push({type:"ERROR",payload:a}),10<ll.length&&ll.shift())}
function ol(a,b){ml||(ll.push({type:"EVENT",eventType:a,payload:b}),10<ll.length&&ll.shift())}
;function pl(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function ql(a){return a.substr(0,a.indexOf(":"))||a}
;var rl=Ac||Bc;var sl={},tl=(sl.AUTH_INVALID="No user identifier specified.",sl.EXPLICIT_ABORT="Transaction was explicitly aborted.",sl.IDB_NOT_SUPPORTED="IndexedDB is not supported.",sl.MISSING_INDEX="Index not created.",sl.MISSING_OBJECT_STORES="Object stores not created.",sl.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",sl.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",sl.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
sl.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",sl.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",sl.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",sl.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",sl),ul={},vl=(ul.AUTH_INVALID="ERROR",ul.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",ul.EXPLICIT_ABORT="IGNORED",ul.IDB_NOT_SUPPORTED="ERROR",ul.MISSING_INDEX=
"WARNING",ul.MISSING_OBJECT_STORES="ERROR",ul.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",ul.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",ul.QUOTA_EXCEEDED="WARNING",ul.QUOTA_MAYBE_EXCEEDED="WARNING",ul.UNKNOWN_ABORT="WARNING",ul.INCOMPATIBLE_DB_VERSION="WARNING",ul),wl={},xl=(wl.AUTH_INVALID=!1,wl.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,wl.EXPLICIT_ABORT=!1,wl.IDB_NOT_SUPPORTED=!1,wl.MISSING_INDEX=!1,wl.MISSING_OBJECT_STORES=!1,wl.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,wl.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,wl.QUOTA_EXCEEDED=!1,wl.QUOTA_MAYBE_EXCEEDED=!0,wl.UNKNOWN_ABORT=!0,wl.INCOMPATIBLE_DB_VERSION=!1,wl);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?tl[a]:c;d=void 0===d?vl[a]:d;e=void 0===e?xl[a]:e;yk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
y(X,yk);function yl(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},tl.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,yl.prototype)}
y(yl,X);function zl(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,zl.prototype)}
y(zl,Error);var Al=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Bl(a,b,c,d){b=ql(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(Cc&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof zl)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Al.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",te:e.name})];e.level="WARNING";return e}
function Cl(a,b,c){var d=kl();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Dl(a){if(!a)throw Error();throw a;}
function El(a){return a}
function Fl(a){this.g=a}
function Gl(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Gl.resolve=function(a){return new Gl(new Fl(function(b,c){a instanceof Gl?a.then(b,c):b(a)}))};
Gl.reject=function(a){return new Gl(new Fl(function(b,c){c(a)}))};
Gl.prototype.then=function(a,b){var c=this,d=null!=a?a:El,e=null!=b?b:Dl;return new Gl(new Fl(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){Hl(c,c,d,f,g)}),c.h.push(function(){Il(c,c,e,f,g)})):"FULFILLED"===c.state.status?Hl(c,c,d,f,g):"REJECTED"===c.state.status&&Il(c,c,e,f,g)}))};
function Jl(a,b){a.then(void 0,b)}
function Hl(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Gl?Kl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Il(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Gl?Kl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Kl(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Gl?Kl(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ll(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ml(a){return new Promise(function(b,c){Ll(a,b,c)})}
function Nl(a){return new Gl(new Fl(function(b,c){Ll(a,b,c)}))}
;function Ol(a,b){return new Gl(new Fl(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Pl=window,Y=Pl.ytcsi&&Pl.ytcsi.now?Pl.ytcsi.now:Pl.performance&&Pl.performance.timing&&Pl.performance.now&&Pl.performance.timing.navigationStart?function(){return Pl.performance.timing.navigationStart+Pl.performance.now()}:function(){return(new Date).getTime()};function Ql(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.h=!1}
r=Ql.prototype;r.add=function(a,b,c){return Rl(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return Rl(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function Sl(a,b,c){a=a.g.createObjectStore(b,c);return new Tl(a)}
r.delete=function(a,b){return Rl(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return Rl(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function Ul(a,b,c){return Rl(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return Nl(d.g.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function Rl(a,b,c,d){var e,f,g,h,k,l,m,p,q,n,t,u;return B(function(z){switch(z.g){case 1:var G={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){z.B(4);break}g++;k=Math.round(Y());va(z,5);l=a.g.transaction(b,e.mode);G=new Vl(l);G=Wl(G,d);return A(z,G,7);case 7:return m=z.h,p=Math.round(Y()),Xl(a,k,p,g,void 0,b.join(),e),z.return(m);case 5:q=wa(z);n=Math.round(Y());t=Bl(q,a.g.name,b.join(),a.g.version);
if((u=t instanceof X&&!t.g)||g>=f)Xl(a,k,n,g,t,b.join(),e),h=t;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function Xl(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&ol("QUOTA_EXCEEDED",{dbName:ql(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),ol("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),Yl(a,!1,d,f,b,g.tag),nl(e)):Yl(a,!0,d,f,b,g.tag)}
function Yl(a,b,c,d,e,f){ol("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.g.name};
function Tl(a){this.g=a}
r=Tl.prototype;r.add=function(a,b){return Nl(this.g.add(a,b))};
r.autoIncrement=function(){return this.g.autoIncrement};
r.clear=function(){return Nl(this.g.clear()).then(function(){})};
function Zl(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function $l(a,b){return am(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?$l(this,a):Nl(this.g.delete(a))};
r.get=function(a){return Nl(this.g.get(a))};
r.index=function(a){try{return new bm(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new zl(a,this.g.name);throw b;}};
r.getName=function(){return this.g.name};
r.keyPath=function(){return this.g.keyPath};
function am(a,b,c){a=a.g.openCursor(b.query,b.direction);return cm(a).then(function(d){return Ol(d,c)})}
function Vl(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function Wl(a,b){var c=new Promise(function(d,e){try{Jl(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
Vl.prototype.abort=function(){this.g.abort();this.h=!0;throw new X("EXPLICIT_ABORT");};
Vl.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new Tl(a),this.i.set(a,b));return b};
function bm(a){this.g=a}
r=bm.prototype;r.delete=function(a){return dm(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
r.get=function(a){return Nl(this.g.get(a))};
r.getKey=function(a){return Nl(this.g.getKey(a))};
r.keyPath=function(){return this.g.keyPath};
r.unique=function(){return this.g.unique};
function dm(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return cm(a).then(function(d){return Ol(d,c)})}
function em(a,b){this.request=a;this.cursor=b}
function cm(a){return Nl(a).then(function(b){return b?new em(a,b):null})}
r=em.prototype;r.advance=function(a){this.cursor.advance(a);return cm(this.request)};
r.continue=function(a){this.cursor.continue(a);return cm(this.request)};
r.delete=function(){return Nl(this.cursor.delete()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.ja=function(){return this.cursor.value};
r.update=function(a){return Nl(this.cursor.update(a))};function fm(a,b,c){return new Promise(function(d,e){function f(){q||(q=new Ql(g.result,{closed:p}));return q}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Vc,k=c.Wc,l=c.Ad,m=c.upgrade,p=c.closed,q;g.addEventListener("upgradeneeded",function(n){try{if(null===n.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");n.dataLoss&&"none"!==n.dataLoss&&ol("IDB_DATA_CORRUPTED",{reason:n.dataLossMessage||"unknown reason",dbName:ql(a)});var t=f(),u=new Vl(g.transaction);m&&
m(t,function(z){return n.oldVersion<z&&n.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var n=g.result;k&&n.addEventListener("versionchange",function(){k(f())});
n.addEventListener("close",function(){ol("IDB_UNEXPECTEDLY_CLOSED",{dbName:ql(a),dbVersion:n.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function gm(a,b,c){c=void 0===c?{}:c;return fm(a,b,c)}
function hm(a,b){b=void 0===b?{}:b;var c,d,e,f;return B(function(g){if(1==g.g)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Vc)&&c.addEventListener("blocked",function(){e()}),A(g,Ml(c),4);
if(2!=g.g)g.g=0,g.o=0;else throw f=wa(g),Bl(f,a,"",-1);})}
;function im(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.j=0}
im.prototype.h=function(a,b,c){c=void 0===c?{}:c;return gm(a,b,c)};
im.prototype.delete=function(a){a=void 0===a?{}:a;return hm(this.name,a)};
function jm(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function km(a,b){if(!b)throw Cl("openWithToken",ql(a.name));return lm(a)}
function lm(a){function b(){var f,g,h,k,l,m,p,q,n,t;return B(function(u){switch(u.g){case 1:return g=null!=(f=Error().stack)?f:"",va(u,2),A(u,a.h(a.name,a.options.version,d),4);case 4:h=u.h;for(var z=a.options,G=[],R=w(Object.keys(z.cb)),P=R.next();!P.done;P=R.next()){P=P.value;var Fa=z.cb[P],Vc=void 0===Fa.yd?Number.MAX_VALUE:Fa.yd;!(h.g.version>=Fa.kb)||h.g.version>=Vc||h.g.objectStoreNames.contains(P)||G.push(P)}k=G;if(0===k.length){u.B(5);break}l=Object.keys(a.options.cb);m=h.objectStoreNames();
if(a.o<V("ytidb_reopen_db_retries",0))return a.o++,h.close(),nl(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());if(!(a.j<V("ytidb_remake_db_retries",1))){u.B(6);break}a.j++;return A(u,a.delete(),7);case 7:return nl(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());case 6:throw new yl(m,l);case 5:return u.return(h);case 2:p=wa(u);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){u.B(8);break}return A(u,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:q=u.h;n=q.g.version;if(void 0!==a.options.version&&n>a.options.version+1)throw q.close(),a.i=!1,jm(a,n);return u.return(q);case 8:throw c(),p instanceof Error&&!U("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Bl(p,a.name,"",null!=(t=a.options.version)?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw jm(a);if(a.g)return a.g;var d={Wc:function(f){f.close()},
closed:c,Ad:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var mm=new im("YtIdbMeta",{cb:{databases:{kb:1}},upgrade:function(a,b){b(1)&&Sl(a,"databases",{keyPath:"actualName"})}});
function nm(a,b){var c;return B(function(d){if(1==d.g)return A(d,km(mm,b),2);c=d.h;return d.return(Rl(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Nl(f.g.put(a,void 0)).then(function(){})})}))})}
function om(a,b){var c;return B(function(d){if(1==d.g)return a?A(d,km(mm,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function pm(a,b){var c,d;return B(function(e){return 1==e.g?(c=[],A(e,km(mm,b),2)):3!=e.g?(d=e.h,A(e,Rl(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return am(f.objectStore("databases"),{},function(g){a(g.ja())&&c.push(g.ja());return g.continue()})}),3)):e.return(c)})}
function qm(a){return pm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var rm,bn=new function(){}(new function(){});
function cn(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=kl();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=rl)f=/WebKit\/([0-9]+)/.exec(Kb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Kb()),f=!(f&&602<=parseInt(f[1],10)));if(f||kc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,nm(d,bn),4);case 4:return A(e,om("yt-idb-test-do-not-use",bn),5);case 5:return e.return(!0);case 2:return wa(e),e.return(!1)}})}
function dn(){if(void 0!==rm)return rm;ml=!0;return rm=cn().then(function(a){ml=!1;var b;if(null!=(b=jl())&&b.g){var c;b={hasSucceededOnce:(null==(c=kl())?void 0:c.hasSucceededOnce)||a};var d;null==(d=jl())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function en(){return D("ytglobal.idbToken_")||void 0}
function fn(){var a=en();return a?Promise.resolve(a):dn().then(function(b){(b=b?bn:void 0)&&E("ytglobal.idbToken_",b);return b})}
;new ng;function gn(a){if(!zk())throw a=new X("AUTH_INVALID",{dbName:a}),nl(a),a;var b=Ak();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function hn(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",A(m,fn(),2);case 2:g=m.h;if(!g)throw h=Cl("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),nl(h),h;pl(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:gn(a);va(m,3);return A(m,nm(k,g),5);case 5:return A(m,gm(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=wa(m),va(m,7),A(m,om(k.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:wa(m);case 8:throw l;}})}
function jn(a,b,c){c=void 0===c?{}:c;return hn(a,b,!1,c)}
function kn(a,b,c){c=void 0===c?{}:c;return hn(a,b,!0,c)}
function ln(a,b){b=void 0===b?{}:b;var c,d;return B(function(e){if(1==e.g)return A(e,fn(),2);if(3!=e.g){c=e.h;if(!c)return e.return();pl(a);d=gn(a);return A(e,hm(d.actualName,b),3)}return A(e,om(d.actualName,c),0)})}
function mn(a,b,c){a=a.map(function(d){return B(function(e){return 1==e.g?A(e,hm(d.actualName,b),2):A(e,om(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function nn(){var a=void 0===a?{}:a;var b,c;return B(function(d){if(1==d.g)return A(d,fn(),2);if(3!=d.g){b=d.h;if(!b)return d.return();pl("LogsDatabaseV2");return A(d,qm(b),3)}c=d.h;return A(d,mn(c,a,b),0)})}
function on(a,b){b=void 0===b?{}:b;var c;return B(function(d){if(1==d.g)return A(d,fn(),2);if(3!=d.g){c=d.h;if(!c)return d.return();pl(a);return A(d,hm(a,b),3)}return A(d,om(a,c),0)})}
;function pn(a,b){im.call(this,a,b);this.options=b;pl(a)}
y(pn,im);function qn(a,b){var c;return function(){c||(c=new pn(a,b));return c}}
pn.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ob?kn:jn)(a,b,Object.assign({},c))};
pn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ob?on:ln)(this.name,a)};
function rn(a,b){return qn(a,b)}
;var sn={},tn=rn("ytGcfConfig",{cb:(sn.coldConfigStore={kb:1},sn.hotConfigStore={kb:1},sn),Ob:!1,upgrade:function(a,b){b(1)&&(Zl(Sl(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Zl(Sl(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function un(a){return km(tn(),a)}
function vn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},A(g,un(c),2);case 2:return e=g.h,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,Ul(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function wn(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},A(h,un(d),2);case 2:return f=h.h,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,Ul(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function xn(a){var b,c;return B(function(d){return 1==d.g?A(d,un(a),2):3!=d.g?(b=d.h,c=void 0,A(d,Rl(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return dm(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
function yn(a){var b,c;return B(function(d){return 1==d.g?A(d,un(a),2):3!=d.g?(b=d.h,c=void 0,A(d,Rl(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return dm(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
;function zn(){Fe.call(this);this.h=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.h=[].concat(x(a)),this.g=a):(this.g=[],E("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(zn,Fe);zn.prototype.sa=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.h.length=0;Fe.prototype.sa.call(this)};function An(){this.h=0;this.i=new zn}
function Bn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!U("start_client_gcf")){g.B(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.g(b);d=en();if(!d){g.B(3);break}if(c){g.B(4);break}return A(g,yn(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return A(g,vn(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function Cn(a,b,c){var d,e,f,g;return B(function(h){if(1==h.g){if(!U("start_client_gcf"))return h.B(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=en())?c?h.B(4):A(h,xn(d),5):h.B(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return A(h,wn(c,b,g,d),0)})}
An.prototype.g=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function Dn(){return"INNERTUBE_API_KEY"in ij&&"INNERTUBE_API_VERSION"in ij}
function En(){return{jd:T("INNERTUBE_API_KEY"),kd:T("INNERTUBE_API_VERSION"),Rb:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),vc:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),ld:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),wc:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),yc:T("INNERTUBE_CONTEXT_HL"),xc:T("INNERTUBE_CONTEXT_GL"),md:T("INNERTUBE_HOST_OVERRIDE")||"",od:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),nd:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Fn(a){var b={client:{hl:a.yc,gl:a.xc,clientName:a.vc,clientVersion:a.wc,configInfo:a.Rb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=rj();0<c.length&&(b.request={internalExperimentFlags:c});Gn(a,void 0,b);Hn(void 0,b);In(void 0,b);Jn(a,void 0,b);Kn(void 0,b);U("start_client_gcf")&&Ln(void 0,b);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&
(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(Ij(T("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Gn(a,b,c){a=a.vc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Hd(b,Ei,96)||new Ei;var d=rk();d=Object.keys(Oi).indexOf(d);d=-1===d?null:d;null!==d&&Qd(c,3,d);J(b,Ei,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=rk())}
function Hn(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=Hd(a,Ki,7)||new Ki,K(b,4,c),J(a,Ki,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function In(a,b){var c;if(U("web_log_memory_total_kbytes")&&(null==(c=C.navigator)?0:c.deviceMemory)){var d;c=null==(d=C.navigator)?void 0:d.deviceMemory;a?Pd(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Jn(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Hd(b,Di,62))?d:new Di;K(c,6,a.appInstallData);J(b,Di,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Kn(a,b){a:{var c=xk();if(c){var d=tk[c.type||"unknown"]||"CONN_UNKNOWN";c=tk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?Qd(a,61,uk[d]):b&&(b.client.connectionType=d));U("web_log_effective_connection_type")&&(d=xk(),d=null!=d&&d.effectiveType?wk.hasOwnProperty(d.effectiveType)?wk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?Qd(a,94,vk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Mn(a,b,c){c=void 0===c?{}:c;var d={};T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.ne||T("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().me;else{qk.g||(qk.g=new qk);a={};if(c=Be([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(T("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in ij||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in ij&&(a["X-Goog-PageId"]=T("DELEGATED_SESSION_ID"));U("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Ln(a,b){if(!An.g){var c=new An;An.g=c}c=An.g;var d=Y()-c.h;if(0!==c.h&&d<V("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=Hd(a,Di,62))?g:new Di;K(b,1,c);K(b,3,d);b.g(e);J(a,Di,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var Nn=D("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.vb;M.prototype.publish=M.prototype.eb;M.prototype.clear=M.prototype.clear;E("ytPubsub2Pubsub2Instance",Nn);E("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);function On(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={Ae:a,ze:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Pn=V("max_body_size_to_compress",5E5),Qn=V("min_body_size_to_compress",500),Rn=!0,Sn=0,Tn=0,Un=V("compression_performance_threshold_lr",250),Vn=V("slow_compressions_before_abandon_count",4);
function Wn(a,b,c,d){var e=Y(),f={startTime:e,ticks:{},infos:{}};if(Rn)try{try{var g=(new Blob(b.split(""))).size}catch(q){qj(q),g=null}if(null==g||!(g>Pn||g<Qn)){var h=De(b);var k=k||{};k.gd=!0;var l=new yi(k);l.push(h,!0);if(l.err)throw l.msg||gh[l.err];var m=l.result;var p=Y();f.ticks.gelc=p;Tn++;U("disable_compression_due_to_performance_degredation")&&p-e>=Un&&(Sn++,U("abandon_compression_after_N_slow_zips")?Tn===V("compression_disable_point")&&Sn>Vn&&(Rn=!1):Rn=!1);U("gel_compression_csi_killswitch")||
!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||On("gel_compression",f,{sampleRate:.1});c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=m;c.postParams=void 0}d(a,c)}catch(q){qj(q),d(a,c)}else d(a,c)}
;function Xn(a){a=Object.assign({},a);delete a.Authorization;var b=Be();if(b){var c=new Zf;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=Fc(c.digest(),3)}return a}
;var Yn;function Zn(){Yn||(Yn=new il("yt.innertube"));return Yn}
function $n(a,b,c,d){if(d)return null;d=Zn().get("nextId",!0)||1;var e=Zn().get("requests",!0)||{};e[d]={method:a,request:b,authState:Xn(c),requestTime:Math.round(Y())};Zn().set("nextId",d+1,86400,!0);Zn().set("requests",e,86400,!0);return d}
function ao(a){var b=Zn().get("requests",!0)||{};delete b[a];Zn().set("requests",b,86400,!0)}
function bo(a){var b=Zn().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=Xn(Mn(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),co(a,d.method,e,{}));delete b[c]}}Zn().set("requests",b,86400,!0)}}
;function eo(a){this.xb=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Va=function(){};
this.now=Date.now;this.pb=!1;var b;this.Kc=null!=(b=a.Kc)?b:100;var c;this.Ic=null!=(c=a.Ic)?c:1;var d;this.Gc=null!=(d=a.Gc)?d:2592E6;var e;this.Fc=null!=(e=a.Fc)?e:12E4;var f;this.Hc=null!=(f=a.Hc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.Cb=!!a.Cb;var h;this.Ab=null!=(h=a.Ab)?h:.1;var k;this.Kb=null!=(k=a.Kb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Va&&(this.Va=a.Va);a.pb&&(this.pb=a.pb);a.xb&&(this.xb=a.xb);this.J=a.J;this.ha=a.ha;this.N=a.N;this.P=a.P;this.ya=a.ya;this.ac=
a.ac;this.Zb=a.Zb;fo(this)&&(!this.J||this.J("networkless_logging"))&&go(this)}
function go(a){fo(a)&&!a.pb&&(a.g=!0,a.Cb&&Math.random()<=a.Ab&&a.N.Xc(a.I),ho(a),a.P.ca()&&a.ub(),a.P.Na(a.ac,a.ub.bind(a)),a.P.Na(a.Zb,a.kc.bind(a)))}
r=eo.prototype;r.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(fo(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.I).then(function(e){d.id=e;c.P.ca()&&io(c,d)}).catch(function(e){io(c,d);
jo(c,e)})}else this.ya(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(fo(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.P.ca()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(1==k.g)return A(k,d.N.set(e,d.I).catch(function(l){jo(d,l)}),2);
f(g,h);k.g=0})}}this.ya(a,b,e.skipRetry)}else this.N.set(e,this.I).catch(function(g){d.ya(a,b,e.skipRetry);
jo(d,g)})}else this.ya(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(fo(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Ua(d.id,c.I):e=!0;c.P.Pa&&c.J&&c.J("vss_network_hint")&&c.P.Pa(!0);f(g,h)};
this.ya(d.url,d.options);this.N.set(d,this.I).then(function(g){d.id=g;e&&c.N.Ua(d.id,c.I)}).catch(function(g){jo(c,g)})}else this.ya(a,b)};
r.ub=function(){var a=this;if(!fo(this))throw Error("IndexedDB is not supported: throttleSend");this.h||(this.h=this.ha.qa(function(){var b;return B(function(c){if(1==c.g)return A(c,a.N.qc("NEW",a.I),2);if(3!=c.g)return b=c.h,b?A(c,io(a,b),3):(a.kc(),c.return());a.h&&(a.h=0,a.ub());c.g=0})},this.Kc))};
r.kc=function(){this.ha.ba(this.h);this.h=0};
function io(a,b){var c;return B(function(d){switch(d.g){case 1:if(!fo(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return A(d,a.N.qd(b.id,a.I),3);case 3:(c=d.h)||a.Va(Error("The request cannot be found in the database."));case 2:if(ko(a,b,a.Gc)){d.B(4);break}a.Va(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return A(d,a.N.Ua(b.id,a.I),5);case 5:return d.return();case 4:b.skipRetry||(b=lo(a,b));if(!b){d.B(0);
break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return A(d,a.N.Ua(b.id,a.I),8);case 8:a.ya(b.url,b.options,!!b.skipRetry),d.g=0}})}
function lo(a,b){if(!fo(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.g){case 1:g=mo(f);(h=no(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Kb)){m.B(2);break}if(!a.P.Nb){m.B(3);break}return A(m,a.P.Nb(),3);case 3:if(a.P.ca()){m.B(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.B(6);
break}return A(m,a.N.cc(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Kb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.B(8);break}return b.sendCount<a.Ic?A(m,a.N.cc(b.id,a.I,!0,h?!1:void 0),12):A(m,a.N.Ua(b.id,a.I),8);case 12:a.ha.qa(function(){a.P.ca()&&a.ub()},a.Hc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):A(h,a.N.Ua(b.id,a.I),2);a.P.Pa&&a.J&&a.J("vss_network_hint")&&a.P.Pa(!0);d(e,f);h.g=0})};
return b}
function ko(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function ho(a){if(!fo(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.N.qc("QUEUED",a.I).then(function(b){b&&!ko(a,b,a.Fc)?a.ha.qa(function(){return B(function(c){if(1==c.g)return void 0===b.id?c.B(2):A(c,a.N.cc(b.id,a.I),2);ho(a);c.g=0})}):a.P.ca()&&a.ub()})}
function jo(a,b){a.Mc&&!a.P.ca()?a.Mc(b):a.handleError(b)}
function fo(a){return!!a.I||a.xb}
function mo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function no(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var oo;
function po(){if(oo)return oo();var a={};oo=rn("LogsDatabaseV2",{cb:(a.LogsRequestsStore={kb:2},a),Ob:!1,upgrade:function(b,c,d){c(2)&&Sl(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),Zl(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return oo()}
;function qo(a){return km(po(),a)}
function ro(a,b){var c,d,e,f;return B(function(g){if(1==g.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,qo(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,Ul(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=Y();so(c);return g.return(f)})}
function to(a,b){var c,d,e,f,g,h,k;return B(function(l){if(1==l.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(l,qo(b),2);if(3!=l.g)return d=l.h,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k=void 0,A(l,Rl(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(m){return dm(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.ja()&&(k=p.ja(),"NEW"===a&&(k.status="QUEUED",
p.update(k)))})}),3);
c.ticks.tc=Y();so(c);return l.return(k)})}
function uo(a,b){var c;return B(function(d){if(1==d.g)return A(d,qo(b),2);c=d.h;return d.return(Rl(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Nl(f.g.put(g,void 0)).then(function(){return g})})}))})}
function vo(a,b,c,d){c=void 0===c?!0:c;var e;return B(function(f){if(1==f.g)return A(f,qo(b),2);e=f.h;return f.return(Rl(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Nl(h.g.put(k,void 0)).then(function(){return k})):Gl.resolve(void 0)})}))})}
function wo(a,b){var c;return B(function(d){if(1==d.g)return A(d,qo(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function xo(a){var b,c;return B(function(d){if(1==d.g)return A(d,qo(a),2);b=d.h;c=Y()-2592E6;return A(d,Rl(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return am(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function yo(){B(function(a){return A(a,nn(),0)})}
function so(a){U("nwl_csi_killswitch")||On("networkless_performance",a,{sampleRate:1})}
;var zo={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,
cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485};var Ao={},Bo=rn("ServiceWorkerLogsDatabase",{cb:(Ao.SWHealthLog={kb:1},Ao),Ob:!0,upgrade:function(a,b){b(1)&&Zl(Sl(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Co(a){return km(Bo(),a)}
function Do(a){var b,c;B(function(d){if(1==d.g)return A(d,Co(a),2);b=d.h;c=Y()-2592E6;return A(d,Rl(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return am(e.objectStore("SWHealthLog"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Eo(a){var b;return B(function(c){if(1==c.g)return A(c,Co(a),2);b=c.h;return A(c,b.clear("SWHealthLog"),0)})}
;var Fo={},Go=0;function Ho(a){var b=new Image,c=""+Go++;Fo[c]=b;b.onload=b.onerror=function(){delete Fo[c]};
b.src=a}
;function Io(){this.g=new Map;this.h=!1}
function Jo(){if(!Io.g){var a=D("yt.networkRequestMonitor.instance")||new Io;E("yt.networkRequestMonitor.instance",a);Io.g=a}return Io.g}
Io.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Io.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
Io.prototype.removeParams=function(a){return a.split("?")[0]};
Io.prototype.removeParams=Io.prototype.removeParams;Io.prototype.isEndpointCFR=Io.prototype.isEndpointCFR;Io.prototype.requestComplete=Io.prototype.requestComplete;Io.getInstance=Jo;var Ko;function Lo(){Ko||(Ko=new il("yt.offline"));return Ko}
function Mo(a){if(U("offline_error_handling")){var b=Lo().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Lo().set("errors",b,2592E3,!0)}}
;function Z(){hf.call(this);var a=this;this.i=!1;this.h=of();this.h.Na("networkstatus-online",function(){if(a.i&&U("offline_error_handling")){var b=Lo().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new yk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;pj(d)}Lo().set("errors",{},2592E3,!0)}}})}
y(Z,hf);function No(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;E("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
r=Z.prototype;r.ca=function(){return this.h.ca()};
r.Pa=function(a){this.h.h=a};
r.ed=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
r.ad=function(){this.i=!0};
r.Na=function(a,b){return this.h.Na(a,b)};
r.Nb=function(a){a=mf(this.h,a);a.then(function(b){U("use_cfr_monitor")&&Jo().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Nb;Z.prototype.listen=Z.prototype.Na;Z.prototype.enableErrorFlushing=Z.prototype.ad;Z.prototype.getWindowStatus=Z.prototype.ed;Z.prototype.networkStatusHint=Z.prototype.Pa;Z.prototype.isNetworkAvailable=Z.prototype.ca;Z.getInstance=No;function Oo(a){a=void 0===a?{}:a;hf.call(this);var b=this;this.h=this.o=0;this.i=No();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.Mb?(this.Mb=a.Mb,c("networkstatus-online",function(){Po(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Po(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){jf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){jf(b,"publicytnetworkstatus-offline")})))}
y(Oo,hf);Oo.prototype.ca=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Oo.prototype.Pa=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Oo.prototype.Nb=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return U("skip_network_check_if_cfr")&&Jo().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Pa((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ca())})):c?d.return(c(a)):d.return(!0)})};
function Po(a,b){a.Mb?a.h?(pf.ba(a.o),a.o=pf.qa(function(){a.j!==b&&(jf(a,b),a.j=b,a.h=Y())},a.Mb-(Y()-a.h))):(jf(a,b),a.j=b,a.h=Y()):jf(a,b)}
;var Qo;function Ro(){var a=eo.call;Qo||(Qo=new Oo({re:!0,qe:!0}));a.call(eo,this,{N:{Xc:xo,Ua:wo,qc:to,qd:uo,cc:vo,set:ro},P:Qo,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;qj(new yk(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else pj(b)},
Va:qj,ya:So,now:Y,Mc:Mo,ha:hl(),ac:"publicytnetworkstatus-online",Zb:"publicytnetworkstatus-offline",Cb:!0,Ab:.1,Kb:V("potential_esf_error_limit",10),J:U,pb:!(zk()&&"www.youtube-nocookie.com"!==$b(document.location.toString()))});this.i=new ng;U("networkless_immediately_drop_all_requests")&&yo();on("LogsDatabaseV2")}
y(Ro,eo);function To(){var a=D("yt.networklessRequestController.instance");a||(a=new Ro,E("yt.networklessRequestController.instance",a),U("networkless_logging")&&fn().then(function(b){a.I=b;go(a);a.i.resolve();a.Cb&&Math.random()<=a.Ab&&a.I&&Do(a.I);U("networkless_immediately_drop_sw_health_store")&&Uo(a)}));
return a}
Ro.prototype.writeThenSend=function(a,b){b||(b={});zk()||(this.g=!1);eo.prototype.writeThenSend.call(this,a,b)};
Ro.prototype.sendThenWrite=function(a,b,c){b||(b={});zk()||(this.g=!1);eo.prototype.sendThenWrite.call(this,a,b,c)};
Ro.prototype.sendAndWrite=function(a,b){b||(b={});zk()||(this.g=!1);eo.prototype.sendAndWrite.call(this,a,b)};
Ro.prototype.awaitInitialization=function(){return this.i.promise};
function Uo(a){var b;B(function(c){if(!a.I)throw b=Cl("clearSWHealthLogsDb"),b;return c.return(Eo(a.I).catch(function(d){a.handleError(d)}))})}
function So(a,b,c){b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&Vo(a,b);if(U("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;var g=void 0===g?!1:g;if(a)if(e)Yj(a,void 0,"POST",e);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Yj(a,void 0,"GET",
"",void 0,void 0,f,g);else{b:{try{var h=new Ya({url:a});if(h.i&&h.h||h.j){var k=Zb(a.match(Yb)[5]||null);var l=!(!k||!k.endsWith("/aclk")||"1"!==ec(a,"ri"));break b}}catch(p){}l=!1}if(l){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var m=!0;break b}}catch(p){}m=!1}c=m?!0:!1}else c=!1;c||Ho(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Wn(a,b.postBody,b,Vj)):Wn(a,JSON.stringify(b.postParams),b,dk):
Vj(a,b)}
function Vo(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Jo().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Jo().requestComplete(a,!0);d(e,f)}}
;var Wo=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};E("ytNetworklessLoggingInitializationOptions",Wo);function Xo(a){var b=this;this.config_=null;a?this.config_=a:Dn()&&(this.config_=En());Ck(function(){bo(b)},5E3)}
Xo.prototype.isReady=function(){!this.config_&&Dn()&&(this.config_=En());return!!this.config_};
function co(a,b,c,d){function e(t){t=void 0===t?!1:t;var u;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(u=$n(b,c,l,k)),u)){var z=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(P,Fa){ao(u);z(P,Fa)};
c.onFetchSuccess=function(P,Fa){ao(u);G(P,Fa)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?To().writeThenSend(n,g):To().sendAndWrite(n,g);
else if(d.compress)if(g.postBody){var R=g.postBody;"string"!==typeof R&&(R=JSON.stringify(g.postBody));Wn(n,R,g,Vj)}else Wn(n,JSON.stringify(g.postParams),g,dk);else U("web_all_payloads_via_jspb")?Vj(n,g):dk(n,g)}catch(P){if("InvalidAccessError"==P.name)u&&(ao(u),u=0),qj(Error("An extension is blocking network request."));else throw P;}u&&Ck(function(){bo(a)},5E3)}
!T("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&qj(new yk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new yk("innertube xhrclient not ready",b,c,d);pj(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.md)&&(h=f);var k=a.config_.od||!1,l=Mn(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.kd+"/"+b,p={alt:"json"},q=a.config_.nd&&f;q=q&&f.startsWith("Bearer");q||(p.key=a.config_.jd);var n=Jj(""+h+m,p||{},!0);D("ytNetworklessLoggingInitializationOptions")&&
Wo.isNwlInitialized?dn().then(function(t){e(t)}):e(!1)}
;function Yo(){var a=D("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Zo=C.ytPubsubPubsubInstance||new M,$o=C.ytPubsubPubsubSubscribedKeys||{},ap=C.ytPubsubPubsubTopicToKeys||{},bp=C.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.vb;M.prototype.publish=M.prototype.eb;M.prototype.clear=M.prototype.clear;E("ytPubsubPubsubInstance",Zo);E("ytPubsubPubsubTopicToKeys",ap);E("ytPubsubPubsubIsSynchronous",bp);E("ytPubsubPubsubSubscribedKeys",$o);var cp=Symbol("injectionDeps");function dp(){this.key=An}
function ep(){this.h=new Map;this.g=new Map}
ep.prototype.resolve=function(a){return a instanceof dp?fp(this,a.key,[],!0):fp(this,a,[])};
function fp(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Ed)var e=d.Ed;else if(d.Dd)e=d[cp]?gp(a,d[cp],c):[],e=d.Dd.apply(d,x(e));else if(d.Cd){e=d.Cd;var f=e[cp]?gp(a,e[cp],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ye||a.g.set(b,e);return e}
function gp(a,b,c){return b?b.map(function(d){return d instanceof dp?fp(a,d.key,c,!0):fp(a,d,c)}):[]}
;var hp;function ip(){hp||(hp=new ep);return hp}
;var jp=window;function kp(){var a,b;return"h5vcc"in jp&&(null==(a=jp.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=jp.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in jp&&jp.performance.mark&&jp.performance.measure?2:0}
function lp(a){switch(kp()){case 1:jp.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:jp.performance.mark(a+"-start");break;case 0:break;default:be()}}
function mp(a){switch(kp()){case 1:jp.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";jp.performance.mark(c);jp.performance.measure(a,b,c);break;case 0:break;default:be()}}
;var np=U("web_enable_lifecycle_monitoring")&&0!==kp(),op=U("web_enable_lifecycle_monitoring");function pp(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?hl():d;this.j=c;this.h=d;this.i=new ng;this.g=a;for(a={La:0};a.La<this.g.length;a={rb:a.rb,La:a.La},a.La++)a.rb=this.g[a.La],c=function(e){return function(){e.rb.Tb();b.g[e.La].Lb=!0;b.g.every(function(f){return!0===f.Lb})&&b.i.resolve()}}(a),d=this.h.Ia(c,qp(this,a.rb)),this.g[a.La]=Object.assign({},a.rb,{Tb:c,
jobId:d})}
function rp(a){var b=Array.from(a.g.keys()).sort(function(d,e){return qp(a,a.g[e])-qp(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.Lb||(a.h.ba(c.jobId),a.h.Ia(c.Tb,10))}
pp.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.Lb||this.h.ba(b.jobId),b.Lb=!0;this.i.resolve()};
function qp(a,b){var c;return null!=(c=b.priority)?c:a.j}
;function sp(a){this.state=a;this.i=[];this.o=void 0;this.H={};np&&lp(this.state)}
sp.prototype.install=function(a){this.i.push(a);return this};
function tp(a){np&&mp(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Fa}):d.from===a.state&&"none"===d.Fa});
if(b){a.h&&(rp(a.h),a.h=void 0);op&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";np&&lp(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(up(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function up(a,b){var c=b.filter(function(e){return 10===vp(a,e)}),d=b.filter(function(e){return 10!==vp(a,e)});
return a.H.xe?function(){var e=Ea.apply(0,arguments);return B(function(f){if(1==f.g)return A(f,a.oa.apply(a,[c].concat(x(e))),2);a.u.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Ea.apply(0,arguments);
a.za.apply(a,[c].concat(x(e)));a.u.apply(a,[d].concat(x(e)))}}
sp.prototype.za=function(a){for(var b=Ea.apply(1,arguments),c=hl(),d=w(a),e=d.next(),f={};!e.done;f={Ya:f.Ya},e=d.next())f.Ya=e.value,c.jb(function(g){return function(){wp(g.Ya.name);g.Ya.mb.apply(g.Ya,x(b));xp(g.Ya.name)}}(f))};
sp.prototype.oa=function(a){var b=Ea.apply(1,arguments),c,d,e,f,g;return B(function(h){1==h.g&&(c=hl(),d=w(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.B(0);f.Ma=e.value;f.lb=void 0;g=function(k){return function(){wp(k.Ma.name);var l=k.Ma.mb.apply(k.Ma,x(b));"function"===typeof(null==l?void 0:l.then)?k.lb=l.then(function(){xp(k.Ma.name)}):xp(k.Ma.name)}}(f);
c.jb(g);return f.lb?A(h,f.lb,3):h.B(3)}f={Ma:f.Ma,lb:f.lb};e=d.next();return h.B(2)})};
sp.prototype.u=function(a){var b=Ea.apply(1,arguments),c=this,d=a.map(function(e){return{Tb:function(){wp(e.name);e.mb.apply(e,x(b));xp(e.name)},
priority:vp(c,e)}});
d.length&&(this.h=new pp(d))};
function vp(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function wp(a){np&&a&&lp(a)}
function xp(a){np&&a&&mp(a)}
fa.Object.defineProperties(sp.prototype,{j:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function yp(a){sp.call(this,void 0===a?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Fa:"application_navigating",action:this.M},{from:"application_navigating",Fa:"none",action:this.S},{from:"application_navigating",Fa:"application_navigating",action:function(){}},
{from:"none",Fa:"none",action:function(){}}]}
var zp;y(yp,sp);yp.prototype.M=function(a,b){var c=this;this.g=Ck(function(){"application_navigating"===c.j&&tp(c)},5E3);
a(null==b?void 0:b.event)};
yp.prototype.S=function(a,b){this.g&&(pf.ba(this.g),this.g=null);a(null==b?void 0:b.event)};
function Ap(){zp||(zp=new yp);return zp}
;var Bp=void 0,Cp=void 0;function Dp(){this.store={};this.g={}}
Dp.prototype.storePayload=function(a,b){a=Ep(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
Dp.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Fp(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
Dp.prototype.extractMatchingEntries=function(a){a=Fp(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
Dp.prototype.getSequenceCount=function(a){a=Fp(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function Fp(a,b){var c=Ep(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Ep(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Gp(b.auth,g[0])){var h=b.isJspb;Gp(void 0===h?"undefined":h?"true":"false",g[1])&&Gp(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Gp(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function Gp(a,b){return void 0===a||"undefined"===a?!0:a===b}
Dp.prototype.getSequenceCount=Dp.prototype.getSequenceCount;Dp.prototype.extractMatchingEntries=Dp.prototype.extractMatchingEntries;Dp.prototype.smartExtractMatchingEntries=Dp.prototype.smartExtractMatchingEntries;Dp.prototype.storePayload=Dp.prototype.storePayload;function Ep(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var Hp=V("initial_gel_batch_timeout",2E3),Ip=V("gel_queue_timeout_max_ms",6E4),Jp=Math.pow(2,16)-1,Kp=V("gel_min_batch_size",5),Lp=void 0;function Mp(){this.j=this.g=this.h=0;this.i=!1}
var Np=new Mp,Op=new Mp,Pp=new Mp,Qp=new Mp,Rp,Sp=!0,Tp=1,Up=new Map,Vp=C.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Vp);var Wp=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};E("ytLoggingTransportTokensToJspbCttTargetIds_",Wp);var Xp={};function Yp(){var a=D("yt.logging.ims");a||(a=new Dp,E("yt.logging.ims",a));return a}
function Zp(a,b){if("log_event"===a.endpoint){$p(a);var c=aq(a),d=bq(a.payload)||"",e=cq(d),f=200;if(e){if(!1===e.enabled&&!U("web_payload_policy_disabled_killswitch"))return;f=dq(e.tier);if(400===f){eq(a,b);return}}Xp[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};Yp().storePayload(e,a.payload);fq(b,c,!1,e,gq(d))}}
function hq(a,b,c){if("log_event"===b.endpoint){$p(void 0,b);var d=aq(b,!0),e=cq(a),f=200;if(e){if(!1===e.enabled&&!U("web_payload_policy_disabled_killswitch"))return;f=dq(e.tier);if(400===f){iq(a,b,c);return}}Xp[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};Yp().storePayload(e,b.payload.toJSON());fq(c,d,!0,e,gq(a))}}
function fq(a,b,c,d,e){function f(){jq({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(Lp=new a);a=V("tvhtml5_logging_max_batch_ads_fork")||V("web_logging_max_batch")||100;var g=Y(),h=kq(c,d.tier),k=h.j;e&&(h.i=!0);e=0;d&&(e=Yp().getSequenceCount(d));1E3<=e?f():e>=a?Rp||(Rp=lq(function(){f();Rp=void 0},0)):10<=g-k&&(mq(c,d.tier),h.j=g)}
function eq(a,b){if("log_event"===a.endpoint){$p(a);var c=aq(a),d=new Map;d.set(c,[a.payload]);var e=bq(a.payload)||"";b&&(Lp=new b);return new og(function(f,g){Lp&&Lp.isReady()?nq(d,Lp,f,g,{bypassNetworkless:!0},!0,gq(e)):f()})}}
function iq(a,b,c){if("log_event"===b.endpoint){$p(void 0,b);var d=aq(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(Lp=new c);return new og(function(f){Lp&&Lp.isReady()?oq(e,Lp,f,{bypassNetworkless:!0},!0,gq(a)):f()})}}
function aq(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new dj;c.videoId?Ed(d,1,Nd,hd(c.videoId)):c.playlistId&&Ed(d,2,Nd,hd(c.playlistId));Wp[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Vp[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function jq(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new og(function(e,f){var g=kq(c,d),h=g.i;g.i=!1;pq(g.h);pq(g.g);g.g=0;Lp&&Lp.isReady()?void 0===d&&U("enable_web_tiered_gel")?qq(e,f,a,b,c,300,h):qq(e,f,a,b,c,d,h):(mq(c,d),e())})}
function qq(a,b,c,d,e,f,g){var h=Lp;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},p={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=U("enable_web_tiered_gel")?Yp().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Yp().extractMatchingEntries(p),k.set(d,b),oq(k,h,a,c,!1,g)):(k=U("enable_web_tiered_gel")?Yp().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Yp().extractMatchingEntries(p),l.set(d,k),nq(l,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(Xp));for(d=b.next();!d.done;d=b.next())l=d.value,f=U("enable_web_tiered_gel")?Yp().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Yp().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<f.length&&k.set(l,f),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Xp[l];oq(k,h,a,c,!1,g)}else{k=w(Object.keys(Xp));for(d=k.next();!d.done;d=k.next())m=d.value,p=U("enable_web_tiered_gel")?Yp().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Yp().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),0<p.length&&l.set(m,p),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Xp[m];nq(l,h,a,b,c,!1,g)}}
function mq(a,b){function c(){jq({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=kq(a,b),e=d===Qp||d===Pp?5E3:Ip;U("web_gel_timeout_cap")&&!d.g&&(e=lq(function(){c()},e),d.g=e);
pq(d.h);e=T("LOGGING_BATCH_TIMEOUT",V("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Sp&&(e=Hp);e=lq(function(){0<V("gel_min_batch_size")?Yp().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Kp&&c():c()},e);
d.h=e}
function nq(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(Y()),k=a.size,l=rq(g);a=w(a);var m=a.next();for(g={};!m.done;g={Gb:g.Gb,batchRequest:g.batchRequest,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,Ib:g.Ib,Hb:g.Hb},m=a.next()){var p=w(m.value);m=p.next().value;p=p.next().value;g.batchRequest=mb({context:Fn(b.config_||En())});if(!La(p)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=Vp[m])&&sq(g.batchRequest,m,p);delete Vp[m];g.dangerousLogToVisitorSession=
"visitorOnlyApprovedKey"===m;tq(g.batchRequest,h,g.dangerousLogToVisitorSession);uq(e);g.Ib=function(q){U("start_client_gcf")&&pf.qa(function(){return B(function(n){return A(n,vq(q),0)})});
k--;k||c()};
g.Gb=0;g.Hb=function(q){return function(){q.Gb++;if(e.bypassNetworkless&&1===q.Gb)try{co(b,l,q.batchRequest,wq({writeThenSend:!0},q.dangerousLogToVisitorSession,q.Ib,q.Hb,f)),Sp=!1}catch(n){pj(n),d()}k--;k||c()}}(g);
try{co(b,l,g.batchRequest,wq(e,g.dangerousLogToVisitorSession,g.Ib,g.Hb,f)),Sp=!1}catch(q){pj(q),d()}}}
function oq(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(Y()),h={value:a.size},k=new Map([].concat(x(a)));k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value).next().value,p=a.get(m);l=new ej;var q=b.config_||En(),n=new Ni,t=new Gi;K(t,1,q.yc);K(t,2,q.xc);Qd(t,16,q.ld);K(t,17,q.wc);if(q.Rb){var u=q.Rb,z=new Di;u.coldConfigData&&K(z,1,u.coldConfigData);u.appInstallData&&K(z,6,u.appInstallData);u.coldHashData&&K(z,3,u.coldHashData);u.hotHashData&&z.g(u.hotHashData);J(t,Di,62,z)}if((u=C.devicePixelRatio)&&
1!=u){if(null!=u&&"number"!==typeof u)throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);Bd(t,65,u)}u=T("EXPERIMENTS_TOKEN","");""!==u&&K(t,54,u);u=rj();if(0<u.length){z=new Ji;for(var G=0;G<u.length;G++){var R=new Hi;K(R,1,u[G].key);Ed(R,2,Ii,hd(u[G].value));Kd(z,15,Hi,R)}J(n,Ji,5,z)}Gn(q,t);Hn(n);In(t);Jn(q,t);Kn(t);U("start_client_gcf")&&Ln(t);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(q=new Mi,K(q,3,T("DELEGATED_SESSION_ID")));!U("fill_delegate_context_in_gel_killswitch")&&
(q=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(u=Hd(n,Mi,3)||new Mi,q=K(u,18,q),J(n,Mi,3,q));q=t;u=w(Object.entries(Ij(T("DEVICE",""))));for(z=u.next();!z.done;z=u.next())G=w(z.value),z=G.next().value,G=G.next().value,"cbrand"===z?K(q,12,G):"cmodel"===z?K(q,13,G):"cbr"===z?K(q,87,G):"cbrver"===z?K(q,88,G):"cos"===z?K(q,18,G):"cosver"===z?K(q,19,G):"cplatform"===z&&Qd(q,42,sk(G));J(n,Gi,1,t);J(l,Ni,1,n);if(t=Wp[m])a:{if(Md(t,1))n=1;else if(t.getPlaylistId())n=2;else break a;J(l,dj,4,t);
t=Hd(l,Ni,1)||new Ni;q=Hd(t,Mi,3)||new Mi;u=new Li;K(u,2,m);Qd(u,1,n);Kd(q,12,Li,u);J(t,Mi,3,q)}delete Wp[m];m="visitorOnlyApprovedKey"===m;xq()||Pd(l,2,g);!m&&(n=T("EVENT_ID"))&&(t=yq(),q=new cj,K(q,1,n),Pd(q,2,t),J(l,cj,5,q));uq(d);if(U("jspb_serialize_with_worker")&&(Cp||((n=T("WORKER_SERIALIZATION_URL"))?((n=n.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?(n=(t=qb())?t.createScriptURL(n):n,n=new ub(n,vb)):n=null,Cp=n):Cp=null),t=Cp||void 0,Bp||void 0===t||(n=Worker,t instanceof ub&&
t.constructor===ub?t=t.g:(Ka(t),t="type_error:TrustedResourceUrl"),Bp=new n(t,void 0)),(n=Bp)&&d.writeThenSend)){Up.set(Tp,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:m,requestsOutstanding:h});n.postMessage({op:"gelBatchToSerialize",batchRequest:l.toJSON(),clientEvents:p,key:Tp});Tp++;break}if(p){n=[];for(t=0;t<p.length;t++)try{n.push(new aj(p[t]))}catch(P){pj(new yk("Transport failed to deserialize "+String(p[t])))}p=n}else p=[];p=w(p);for(n=
p.next();!n.done;n=p.next())Kd(l,3,aj,n.value);p={startTime:Y(),ticks:{},infos:{}};l=Sd(l);p.ticks.geljspc=Y();U("log_jspb_serialize_latency")&&On("gel_jspb_serialize",p,{sampleRate:.1});zq(l,b,c,d,e,f,m,h)}}
function zq(a,b,c,d,e,f,g,h){d=void 0===d?{}:d;h=void 0===h?{value:0}:h;f=rq(f);d=wq(d,g,function(k){U("start_client_gcf")&&pf.qa(function(){return B(function(l){return A(l,vq(k),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;co(b,f,"",d);Sp=!1}
function uq(a){U("always_send_and_write")&&(a.writeThenSend=!1)}
function wq(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,pe:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};xq()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function tq(a,b,c){xq()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&(c=yq(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function yq(){var a=T("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Jp/2));a++;a>Jp&&(a=1);jj("BATCH_CLIENT_COUNTER",a);return a}
function sq(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function $p(a,b){if(D("yt.logging.transport.enableScrapingForTest")){var c=D("yt.logging.transport.scrapedPayloadsForTesting"),d=D("yt.logging.transport.payloadToScrape");b&&(b=D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}E("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function xq(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function lq(a,b){return U("transport_use_scheduler")?U("logging_avoid_blocking_during_navigation")||U("lr_logging_avoid_blocking_during_navigation")?Ck(function(){if("none"===Ap().j)a();else{var c={};Ap().install((c.none={mb:a},c))}},b):Ck(a,b):Aj(a,b)}
function pq(a){U("transport_use_scheduler")?pf.ba(a):window.clearTimeout(a)}
function vq(a){var b,c,d,e,f,g,h,k,l,m;return B(function(p){if(1==p.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var q=d?d[Ci.name]:void 0;e=q;g=null==(f=d)?void 0:f.hotHashData;q=d?d[Bi.name]:void 0;h=q;l=null==(k=d)?void 0:k.coldHashData;return(m=ip().resolve(new dp))?g?e?A(p,Bn(m,g,e),2):A(p,Bn(m,g),2):p.B(2):p.return()}return l?h?A(p,Cn(m,l,h),0):A(p,Cn(m,l),0):p.B(0)})}
function kq(a,b){b=void 0===b?200:b;return a?300===b?Qp:Op:300===b?Pp:Np}
function cq(a){if(U("enable_web_tiered_gel")){a=zo[a||""];var b,c;if(null==ip().resolve(new dp))var d=void 0;else{var e=null!=(d=D("yt.gcf.config.hotConfigGroup"))?d:null;d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function bq(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,zo[b])return b}
function dq(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function gq(a){return"gelDebuggingEvent"===a}
function rq(a){return(void 0===a?0:a)&&U("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var Aq=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Aq);
function Bq(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Yo();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!U("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:Cq(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete Aq[d.sequenceGroup]);(d.sendIsolatedPayload?eq:Zp)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function Dq(a){jq(void 0,void 0,void 0===a?!1:a)}
function Cq(a){Aq[a]=a in Aq?Aq[a]+1:0;return Aq[a]}
;var Eq=[];function Fq(a,b,c){c=void 0===c?{}:c;var d=Xo;T("ytLoggingEventsDefaultDisabled",!1)&&Xo===Xo&&(d=null);U("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=Yo(),c.timestamp=Y()),Eq.push({Cc:a,payload:b,options:c})):Bq(a,b,d,c)}
;var Gq=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Gq);function Hq(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;T("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:Xo;c=void 0===c?{}:c;var e=Math.round(c.timestamp||Y());Pd(b,1,e<Number.MAX_SAFE_INTEGER?e:0);e=new $i;if(c.lact)Pd(e,1,isFinite(c.lact)?c.lact:-1);else if(c.timestamp)Pd(e,1,-1);else{var f=Yo();Pd(e,1,isFinite(f)?f:-1)}if(c.sequenceGroup&&!U("web_gel_sequence_info_killswitch")){f=c.sequenceGroup;var g=Cq(f),h=new Zi;Pd(h,2,g);K(h,1,f);J(e,Zi,3,h);c.endOfSequence&&delete Gq[c.sequenceGroup]}J(b,
$i,33,e);(c.sendIsolatedPayload?iq:hq)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var Iq=new Set,Jq=0,Kq=0,Lq=0,Mq=[],Nq=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Oq(a){try{Iq.add(a.message)}catch(b){}Jq++}
function Pq(){for(var a=w(Nq),b=a.next();!b.done;b=a.next()){var c=Kb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function Qq(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:T("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=T("SERVER_NAME");b=T("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Vj(T("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Rq(){var a;return B(function(b){return(a=If())?b.return(a.then(function(c){c=Sd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Fc(d,3)})):b.return(Promise.resolve(null))})}
;var Sq={};function Tq(a){return Sq[a]||(Sq[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Uq={},Vq=[],Fg=new M,Wq={};function Xq(){for(var a=w(Vq),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Yq(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Tq(b)]:a.getAttribute("data-"+b):null;return c}
function Zq(a){Fg.eb.apply(Fg,arguments)}
;function $q(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function ar(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function br(a,b,c){cr||(cr={},dr=new Set,zj(window,"message",function(d){a:if(dr.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=cr[e.id];f&&d.origin===f.Uc&&(d=f.Fd,d.H=!0,d.H&&(bb(d.u,d.sendMessage,d),d.u.length=0),d.ic(e))}}));
a=String(ar(a,"host"));cr[c]={Fd:b,Uc:a};dr.add(a)}
var cr=null,dr=null;var er=window;
function fr(a,b,c){this.o=this.g=this.h=null;this.i=0;this.H=!1;this.u=[];this.j=null;this.S={};if(!a)throw Error("YouTube player element ID required.");this.id=Na(this);this.M=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?ac(a.src):"https://www.youtube.com"),this.h=new $q(b),c||(b=gr(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Na(this.g)),Uq[this.g.id]=this,window.postMessage){this.j=
new M;hr(this);b=ar(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Wq)Wq.hasOwnProperty(e)&&ir(this,e)}}
r=fr.prototype;r.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
r.getIframe=function(){return this.g};
r.ic=function(a){jr(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.j.subscribe(a,c);kr(this,a);return this};
function ir(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.M===b[0]&&kr(a,c)}}
r.destroy=function(){this.g&&this.g.id&&(Uq[this.g.id]=null);Ee(this.j);if(this.o){var a=this.g,b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);cr&&(cr[this.id]=null);this.h=null;a=this.g;for(var c in kb)kb[c][0]==a&&xj(c);this.o=this.g=null};
r.mc=function(){return{}};
function lr(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.H?a.sendMessage(b):a.u.push(b)}
function jr(a,b,c){a.j.Ja||(c={target:a,data:c},a.j.eb(b,c),Zq(a.M+"."+b,c))}
function gr(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+ar(a.h,"title"));(b=ar(a.h,"width"))&&c.setAttribute("width",b.toString());(b=ar(a.h,"height"))&&
c.setAttribute("height",b.toString());er.yt_embedsEnableIframeWithLazyLoad&&c.setAttribute("loading","lazy");var g=a.mc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&bb(["debugjs","debugcss"],function(k){var l=ec(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+ar(a.h,"host")+("/embed/"+ar(a.h,"videoId"))+"?"+cc(g);er.yt_embedsEnableUaChProbe?Rq().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=ie(l.href).toString();ee(c,je(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):er.yt_embedsEnableIframeSrcWithIntent?(ee(c,je(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
r.Dc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function hr(a){br(a.h,a,a.id);a.i=Bj(a.Dc.bind(a));zj(a.g,"load",function(){window.clearInterval(a.i);a.i=Bj(a.Dc.bind(a))})}
function kr(a,b){a.S[b]||(a.S[b]=!0,lr(a,"addEventListener",[b]))}
r.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[ac(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(sc){if(sc.name&&"SyntaxError"===sc.name){if(!(sc.message&&0<sc.message.indexOf("target origin ''"))){var e=void 0,f=sc;e=void 0===e?{}:e;e.name=T("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=T("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(U("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=Jq)){var m=void 0,p=void 0,q=f,n=e,t=Xd(q),u=t.message||"Unknown Error",
z=t.name||"UnknownError",G=t.stack||q.h||"Not available";if(G.startsWith(z+": "+u)){var R=G.split("\n");R.shift();G=R.join("\n")}var P=t.lineNumber||"Not available",Fa=t.fileName||"Not available",Vc=G,Ra=0;if(q.hasOwnProperty("args")&&q.args&&q.args.length)for(var Ga=0;Ga<q.args.length&&!(Ra=nk(q.args[Ga],"params."+Ga,n,Ra),500<=Ra);Ga++);else if(q.hasOwnProperty("params")&&q.params){var ea=q.params;if("object"===typeof q.params)for(p in ea){if(ea[p]){var na="params."+p,oa=pk(ea[p]);n[na]=oa;Ra+=
na.length+oa.length;if(500<Ra)break}}else n.params=pk(ea)}if(Mq.length)for(var da=0;da<Mq.length&&!(Ra=nk(Mq[da],"params.context."+da,n,Ra),500<=Ra);da++);navigator.vendor&&!n.hasOwnProperty("vendor")&&(n["device.vendor"]=navigator.vendor);var W={message:u,name:z,lineNumber:P,fileName:Fa,stack:Vc,params:n,sampleWeight:1},sm=Number(q.columnNumber);isNaN(sm)||(W.lineNumber=W.lineNumber+":"+sm);if("IGNORED"===q.level)m=0;else a:{for(var tm=jk(),um=w(tm.Da),yh=um.next();!yh.done;yh=um.next()){var vm=
yh.value;if(W.message&&W.message.match(vm.se)){m=vm.weight;break a}}for(var wm=w(tm.Aa),zh=wm.next();!zh.done;zh=wm.next()){var xm=zh.value;if(xm.mb(W)){m=xm.weight;break a}}m=1}W.sampleWeight=m;for(var ym=w(ek),Ah=ym.next();!Ah.done;Ah=ym.next()){var Bh=Ah.value;if(Bh.Jb[W.name])for(var zm=w(Bh.Jb[W.name]),Ch=zm.next();!Ch.done;Ch=zm.next()){var Am=Ch.value,Ge=W.message.match(Am.regexp);if(Ge){W.params["params.error.original"]=Ge[0];for(var Dh=Am.groups,Bm={},tc=0;tc<Dh.length;tc++)Bm[Dh[tc]]=Ge[tc+
1],W.params["params.error."+Dh[tc]]=Ge[tc+1];W.message=Bh.Xb(Bm);break}}}W.params||(W.params={});var Cm=jk();W.params["params.errorServiceSignature"]="msg="+Cm.Da.length+"&cb="+Cm.Aa.length;W.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(W.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));sb("sample").constructor!==rb&&(W.params["params.fconst"]="true");var ld=W;window.yterr&&"function"===typeof window.yterr&&window.yterr(ld);
if(0!==ld.sampleWeight&&!Iq.has(ld.message))if(h&&U("web_enable_error_204")){var Dm=ld;Qq(void 0===g?"ERROR":g,Dm);Oq(Dm)}else{var Eh=void 0,Fh=void 0,Em=void 0,Fm=void 0,Gh=void 0,N=ld,Mb=g;Mb=void 0===Mb?"ERROR":Mb;if("ERROR"===Mb){kk.eb("handleError",N);if(U("record_app_crashed_web")&&0===Lq&&1===N.sampleWeight)if(Lq++,U("errors_via_jspb")){var rr=new Yi;Gh=Qd(rr,1,1);if(!U("report_client_error_with_app_crash_ks")){var sr=new Xi,tr=new Wi,ur=new Vi,vr=new Ui;var wr=K(vr,1,N.message);var xr=J(ur,
Ui,3,wr);Fm=J(tr,Vi,5,xr);Em=J(sr,Wi,9,Fm);J(Gh,Xi,4,Em)}var Gm=U("jspb_sparse_encoded_pivot")?new aj([{}]):new aj;Jd(Gm,Yi,20,bj,Gh);Hq("appCrashed",Gm)}else{var Hm={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};U("report_client_error_with_app_crash_ks")||(Hm.systemHealth={crashData:{clientError:{logMessage:{message:N.message}}}});Fq("appCrashed",Hm)}Kq++}else"WARNING"===Mb&&kk.eb("handleWarning",N);if(U("kevlar_gel_error_routing"))a:{var md=Mb;if(U("errors_via_jspb")){if(Pq())Fh=void 0;else{var uc=new Ri;
K(uc,1,N.stack);N.fileName&&K(uc,4,N.fileName);var db=N.lineNumber&&N.lineNumber.split?N.lineNumber.split(":"):[];0!==db.length&&(1!==db.length||isNaN(Number(db[0]))?2!==db.length||isNaN(Number(db[0]))||isNaN(Number(db[1]))||(Od(uc,2,Number(db[0])),Od(uc,3,Number(db[1]))):Od(uc,2,Number(db[0])));var Nb=new Ui;K(Nb,1,N.message);K(Nb,3,N.name);Od(Nb,6,N.sampleWeight);"ERROR"===md?Qd(Nb,2,2):"WARNING"===md?Qd(Nb,2,1):Qd(Nb,2,0);var Hh=new Si;Bd(Hh,1,dd(!0));Jd(Hh,Ri,3,Ti,uc);var Ob=new Qi;K(Ob,3,window.location.href);
for(var Im=T("FEXP_EXPERIMENTS",[]),Ih=0;Ih<Im.length;Ih++){var yr=gd(Im[Ih]),Jm=Ob.s,zr=yr,Km=Oc(Jm);Zc(Km);Dd(Jm,Km,5,2).push(zr)}var Jh=kj();if(!lj()&&Jh)for(var Lm=w(Object.keys(Jh)),Pb=Lm.next();!Pb.done;Pb=Lm.next()){var Mm=Pb.value,Kh=new Pi;K(Kh,1,Mm);K(Kh,2,String(Jh[Mm]));Kd(Ob,4,Pi,Kh)}var Lh=N.params;if(Lh){var Nm=w(Object.keys(Lh));for(Pb=Nm.next();!Pb.done;Pb=Nm.next()){var Om=Pb.value,Mh=new Pi;K(Mh,1,"client."+Om);K(Mh,2,String(Lh[Om]));Kd(Ob,4,Pi,Mh)}}var Pm=T("SERVER_NAME"),Qm=T("SERVER_VERSION");
if(Pm&&Qm){var Nh=new Pi;K(Nh,1,"server.name");K(Nh,2,Pm);Kd(Ob,4,Pi,Nh);var Oh=new Pi;K(Oh,1,"server.version");K(Oh,2,Qm);Kd(Ob,4,Pi,Oh)}var He=new Vi;J(He,Qi,1,Ob);J(He,Si,2,Hh);J(He,Ui,3,Nb);Fh=He}var Rm=Fh;if(!Rm)break a;var Sm=U("jspb_sparse_encoded_pivot")?new aj([{}]):new aj;Jd(Sm,Vi,163,bj,Rm);Hq("clientError",Sm)}else{var Ja=void 0;Ja=void 0===Ja?{}:Ja;if(Pq())Eh=void 0;else{var nd={stackTrace:N.stack};N.fileName&&(nd.filename=N.fileName);var eb=N.lineNumber&&N.lineNumber.split?N.lineNumber.split(":"):
[];0!==eb.length&&(1!==eb.length||isNaN(Number(eb[0]))?2!==eb.length||isNaN(Number(eb[0]))||isNaN(Number(eb[1]))||(nd.lineNumber=Number(eb[0]),nd.columnNumber=Number(eb[1])):nd.lineNumber=Number(eb[0]));var Ph={level:"ERROR_LEVEL_UNKNOWN",message:N.message,errorClassName:N.name,sampleWeight:N.sampleWeight};"ERROR"===md?Ph.level="ERROR_LEVEL_ERROR":"WARNING"===md&&(Ph.level="ERROR_LEVEL_WARNNING");var Ar={isObfuscated:!0,browserStackInfo:nd};Ja.pageUrl=window.location.href;Ja.kvPairs=[];T("FEXP_EXPERIMENTS")&&
(Ja.experimentIds=T("FEXP_EXPERIMENTS"));var Qh=kj();if(!lj()&&Qh)for(var Tm=w(Object.keys(Qh)),Qb=Tm.next();!Qb.done;Qb=Tm.next()){var Um=Qb.value;Ja.kvPairs.push({key:Um,value:String(Qh[Um])})}var Rh=N.params;if(Rh){var Vm=w(Object.keys(Rh));for(Qb=Vm.next();!Qb.done;Qb=Vm.next()){var Wm=Qb.value;Ja.kvPairs.push({key:"client."+Wm,value:String(Rh[Wm])})}}var Xm=T("SERVER_NAME"),Ym=T("SERVER_VERSION");Xm&&Ym&&(Ja.kvPairs.push({key:"server.name",value:Xm}),Ja.kvPairs.push({key:"server.version",value:Ym}));
Eh={errorMetadata:Ja,stackTrace:Ar,logMessage:Ph}}var Zm=Eh;if(!Zm)break a;Fq("clientError",Zm)}if("ERROR"===md||U("errors_flush_gel_always_killswitch"))b:{if(U("web_fp_via_jspb")){var Ie=!0;Ie=void 0===Ie?!1:Ie;var $m=Eq;Eq=[];if($m)for(var an=w($m),Sh=an.next();!Sh.done;Sh=an.next()){var vc=Sh.value;Ie?Bq(vc.Cc,vc.payload,Xo,vc.options):Fq(vc.Cc,vc.payload,vc.options)}Dq(!0);if(!U("web_fp_via_jspb_and_json"))break b}Dq()}}U("suppress_error_204_logging")||Qq(Mb,N);Oq(N)}}}}}else throw sc;}else console&&
console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function mr(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function nr(a){return 0===a.search("get")||0===a.search("is")}
;function or(a,b){fr.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ka={};this.playerInfo={};this.videoTitle=""}
y(or,fr);r=or.prototype;r.mc=function(){var a=ar(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=ar(this.h,"embedConfig")){if(Ma(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.ic=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Ma(a))for(var c in a)a.hasOwnProperty(c)&&(this.ka[c]=a[c]);break;case "infoDelivery":pr(this,a);break;case "initialDelivery":Ma(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ka={},qr(this,a.apiInterface),pr(this,a));break;default:jr(this,b,a)}};
function pr(a,b){if(Ma(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+ar(a.h,"title"))))}}
function qr(a,b){bb(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:mr(c)?this[c]=function(){this.playerInfo={};
this.ka={};lr(this,c,arguments);return this}:nr(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){lr(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=ar(this.h,"host")+("/embed/"+ar(this.h,"videoId")),b=Number(ar(this.h,"width")),c=Number(ar(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Xb(a);d=Xb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
r.getOptions=function(a){return this.ka.namespaces?a?this.ka[a]?this.ka[a].options||[]:[]:this.ka.namespaces||[]:[]};
r.getOption=function(a,b){if(this.ka.namespaces&&a&&b&&this.ka[a])return this.ka[a][b]};
function Br(a){if("iframe"!==a.tagName.toLowerCase()){var b=Yq(a,"videoid");b&&(b={videoId:b,width:Yq(a,"width"),height:Yq(a,"height")},new or(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return Uq[a]});
E("YT.scan",Xq);E("YT.subscribe",function(a,b,c){Fg.subscribe(a,b,c);Wq[a]=!0;for(var d in Uq)Uq.hasOwnProperty(d)&&ir(Uq[d],a)});
E("YT.unsubscribe",function(a,b,c){Eg(a,b,c)});
E("YT.Player",or);fr.prototype.destroy=fr.prototype.destroy;fr.prototype.setSize=fr.prototype.setSize;fr.prototype.getIframe=fr.prototype.getIframe;fr.prototype.addEventListener=fr.prototype.addEventListener;or.prototype.getVideoEmbedCode=or.prototype.getVideoEmbedCode;or.prototype.getOptions=or.prototype.getOptions;or.prototype.getOption=or.prototype.getOption;
Vq.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=ab(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);bb(fb(a,b),Br)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Xq();var Cr=C.onYTReady;Cr&&Cr();var Dr=C.onYouTubeIframeAPIReady;Dr&&Dr();var Er=C.onYouTubePlayerAPIReady;Er&&Er();}).call(this);
