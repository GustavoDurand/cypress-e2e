"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[118],{91617:(t,e,r)=>{const n=new WeakMap;function o(t,e){return n.get(t)&&n.get(t).get(e)}function i(t,e,r){if(void 0===e)throw new TypeError;const n=o(e,r);return n&&n.get(t)}function s(t,e,r,i){if(i&&!["string","symbol"].includes(typeof i))throw new TypeError;(o(r,i)||function(t,e){const r=n.get(t)||new Map;n.set(t,r);const o=r.get(e)||new Map;return r.set(e,o),o}(r,i)).set(t,e)}function a(t,e,r){return i(t,e,r)?i(t,e,r):Object.getPrototypeOf(e)?a(t,Object.getPrototypeOf(e),r):void 0}const c={decorate:function(t,e,r,n){if(!Array.isArray(t)||0===t.length)throw new TypeError;return void 0!==r?function(t,e,r,n){return t.reverse().forEach((t=>{n=t(e,r,n)||n})),n}(t,e,r,n):"function"==typeof e?function(t,e){return t.reverse().forEach((t=>{const r=t(e);r&&(e=r)})),e}(t,e):void 0},defineMetadata:function(t,e,r,n){s(t,e,r,n)},getMetadata:function(t,e,r){return a(t,e,r)},getOwnMetadata:function(t,e,r){return i(t,e,r)},hasMetadata:function(t,e,r){return!!a(t,e,r)},hasOwnMetadata:function(t,e,r){return!!i(t,e,r)},metadata:function(t,e){return function(r,n){s(t,e,r,n)}}};Object.assign(Reflect,c)},828:(t,e,r)=>{r.d(e,{Qm:()=>a,cQ:()=>o,j:()=>s,lF:()=>i});var n=r(99528);const o=(0,n.Z_)("DefineAction"),i=(0,n.Z_)("ImmerReducer"),s=(0,n.Z_)("Reducer"),a=t=>{const e=(0,n.Z_)("Effect");if(t&&(t.ssr||t.payloadGetter)){const{payloadGetter:e,skipFirstClientDispatch:r}=Object.assign({payloadGetter:void 0,skipFirstClientDispatch:!0},t);return(t,o,i)=>((0,n.Ft)(t,{action:o,payloadGetter:e}),r&&(0,n.kP)(t,o),a()(t,o,i))}return e()}},84229:(t,e,r)=>{r.d(e,{W:()=>n,X:()=>o});const n=!1;let o;n&&(o=new Map)},99528:(t,e,r)=>{r.d(e,{Ft:()=>u,Z_:()=>a,Zp:()=>d,kP:()=>l,v7:()=>s});var n=r(37614);const o={DefineAction:n.JJ,Reducer:n.FU,ImmerReducer:n.Ts,Effect:n.yx},i=t=>{const e=(e,r)=>{const n=Reflect.getMetadata(t,e);return n&&Array.isArray(n)?n:r};return{get:e,add:(r,n)=>{const o=e(r);o?o.push(n):Reflect.defineMetadata(t,[n],r)}}};function s(t,e,r){const{get:n}=i(o[e]);return n(t,r)}function a(t){return()=>(e,r,n)=>{if("function"==typeof e||!r)throw new Error(`${t} can only be used to decorate properties.`);const{add:s}=i(o[t]);return s(e,r),n}}const{get:c,add:u}=i(n.yZ),{get:d,add:l}=i(n.Fq)},5499:(t,e,r)=>{r.d(e,{Y:()=>s});var n=r(43549),o=r(84229);const i=new Set,s=t=>{if("string"!=typeof t)throw new TypeError("Module name should be string");if(i.has(t)){if(!o.W)throw new Error(`Duplicated Module name: ${t}`);console.warn(`Duplicated Module name found: \`${t}\`. this warning may caused by two reasons:\n    1. You defined two modules with the same name passed. If so, you should check your definitions and avoid it.\n    2. We detected your code is running with HMR environment. If so, you can safely ignore this warning.`)}else i.add(t);return e=>(e.prototype.moduleName=t,(0,n.G)()(e))};o.W&&(s.removeModule=(t,e)=>{i.delete(t),o.X.set(t,e)})},87613:(t,e,r)=>{function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[U]}function i(t){var e;return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===W}(t)||Array.isArray(t)||!!t[z]||!!(null===(e=t.constructor)||void 0===e?void 0:e[z])||d(t)||l(t))}function s(t,e,r){void 0===r&&(r=!1),0===a(t)?(r?Object.keys:G)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function a(t){var e=t[U];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:d(t)?2:l(t)?3:0}function c(t,e){return 2===a(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function u(t,e,r){var n=a(t);2===n?t.set(e,r):3===n?t.add(r):t[e]=r}function d(t){return N&&t instanceof Map}function l(t){return B&&t instanceof Set}function f(t){return t.o||t.t}function p(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=K(t);delete e[U];for(var r=G(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function h(t,e){return void 0===e&&(e=!1),y(t)||o(t)||!i(t)||(a(t)>1&&(t.set=t.add=t.clear=t.delete=v),Object.freeze(t),e&&s(t,(function(t,e){return h(e,!0)}),!0)),t}function v(){n(2)}function y(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function m(t){var e=Q[t];return e||n(18,t),e}function g(){return C}function b(t,e){e&&(m("Patches"),t.u=[],t.s=[],t.v=e)}function w(t){S(t),t.p.forEach(R),t.p=null}function S(t){t===C&&(C=t.l)}function P(t){return C={p:[],l:C,h:t,m:!0,_:0}}function R(t){var e=t[U];0===e.i||1===e.i?e.j():e.g=!0}function O(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.O||m("ES5").S(e,t,o),o?(r[U].P&&(w(e),n(4)),i(t)&&(t=A(e,t),e.l||j(e,t)),e.u&&m("Patches").M(r[U].t,t,e.u,e.s)):t=A(e,r,[]),w(e),e.u&&e.v(e.u,e.s),t!==H?t:void 0}function A(t,e,r){if(y(e))return e;var n=e[U];if(!n)return s(e,(function(o,i){return D(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return j(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=p(n.k):n.o,i=o,a=!1;3===n.i&&(i=new Set(o),o.clear(),a=!0),s(i,(function(e,i){return D(t,n,o,e,i,r,a)})),j(t,o,!1),r&&t.u&&m("Patches").N(n,r,t.u,t.s)}return n.o}function D(t,e,r,n,s,a,d){if(o(s)){var l=A(t,s,a&&e&&3!==e.i&&!c(e.R,n)?a.concat(n):void 0);if(u(r,n,l),!o(l))return;t.m=!1}else d&&r.add(s);if(i(s)&&!y(s)){if(!t.h.D&&t._<1)return;A(t,s),e&&e.A.l||j(t,s)}}function j(t,e,r){void 0===r&&(r=!1),!t.l&&t.h.D&&t.m&&h(e,r)}function E(t,e){var r=t[U];return(r?f(r):t)[e]}function x(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function M(t){t.P||(t.P=!0,t.l&&M(t.l))}function T(t){t.o||(t.o=p(t.t))}function $(t,e,r){var n=d(e)?m("MapSet").F(e,r):l(e)?m("MapSet").T(e,r):t.O?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:g(),P:!1,I:!1,R:{},l:e,t,k:null,o:null,j:null,C:!1},o=n,i=J;r&&(o=[n],i=V);var s=Proxy.revocable(o,i),a=s.revoke,c=s.proxy;return n.k=c,n.j=a,c}(e,r):m("ES5").J(e,r);return(r?r.A:g()).p.push(n),n}function _(t){return o(t)||n(22,t),function t(e){if(!i(e))return e;var r,n=e[U],o=a(e);if(n){if(!n.P&&(n.i<4||!m("ES5").K(n)))return n.t;n.I=!0,r=k(e,o),n.I=!1}else r=k(e,o);return s(r,(function(e,o){n&&function(t,e){return 2===a(t)?t.get(e):t[e]}(n.t,e)===o||u(r,e,t(o))})),3===o?new Set(r):r}(t)}function k(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return p(t)}r.d(e,{D:()=>bt});var I,C,F="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),N="undefined"!=typeof Map,B="undefined"!=typeof Set,Z="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=F?Symbol.for("immer-nothing"):((I={})["immer-nothing"]=!0,I),z=F?Symbol.for("immer-draftable"):"__$immer_draftable",U=F?Symbol.for("immer-state"):"__$immer_state",W=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),G="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,K=Object.getOwnPropertyDescriptors||function(t){var e={};return G(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},Q={},J={get:function(t,e){if(e===U)return t;var r=f(t);if(!c(r,e))return function(t,e,r){var n,o=x(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!i(n)?n:n===E(t.t,e)?(T(t),t.o[e]=$(t.A.h,n,t)):n},has:function(t,e){return e in f(t)},ownKeys:function(t){return Reflect.ownKeys(f(t))},set:function(t,e,r){var n=x(f(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=E(f(t),e),i=null==o?void 0:o[U];if(i&&i.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}(r,o)&&(void 0!==r||c(t.t,e)))return!0;T(t),M(t)}return t.o[e]===r&&(void 0!==r||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return void 0!==E(t.t,e)||e in t.t?(t.R[e]=!1,T(t),M(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=f(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},V={};s(J,(function(t,e){V[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),V.deleteProperty=function(t,e){return V.set.call(this,t,e,void 0)},V.set=function(t,e,r){return J.set.call(this,t[0],e,r,t[0])};var X=function(){function t(t){var e=this;this.O=Z,this.D=!0,this.produce=function(t,r,o){if("function"==typeof t&&"function"!=typeof r){var s=r;r=t;var a=e;return function(t){var e=this;void 0===t&&(t=s);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return a.produce(t,(function(t){var n;return(n=r).call.apply(n,[e,t].concat(o))}))}}var c;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(t)){var u=P(e),d=$(e,t,void 0),l=!0;try{c=r(d),l=!1}finally{l?w(u):S(u)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(t){return b(u,o),O(t,u)}),(function(t){throw w(u),t})):(b(u,o),O(c,u))}if(!t||"object"!=typeof t){if(void 0===(c=r(t))&&(c=t),c===H&&(c=void 0),e.D&&h(c,!0),o){var f=[],p=[];m("Patches").M(t,c,f,p),o(f,p)}return c}n(21,t)},this.produceWithPatches=function(t,r){if("function"==typeof t)return function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.produceWithPatches(r,(function(e){return t.apply(void 0,[e].concat(o))}))};var n,o,i=e.produce(t,r,(function(t,e){n=t,o=e}));return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(t){return[t,n,o]})):[i,n,o]},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){i(t)||n(8),o(t)&&(t=_(t));var e=P(this),r=$(this,t,void 0);return r[U].C=!0,S(e),r},e.finishDraft=function(t,e){var r=(t&&t[U]).A;return b(r,e),O(void 0,r)},e.setAutoFreeze=function(t){this.D=t},e.setUseProxies=function(t){t&&!Z&&n(20),this.O=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}r>-1&&(e=e.slice(r+1));var i=m("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e)}))},t}(),L=new X,q=L.produce;L.produceWithPatches.bind(L),L.setAutoFreeze.bind(L),L.setUseProxies.bind(L),L.applyPatches.bind(L),L.createDraft.bind(L),L.finishDraft.bind(L);const Y=q;var tt=r(45809),et=r(98518),rt=r(55823),nt=r(55420),ot=r(84229),it=r(99528),st=r(58181),at=r(60552),ct=r(63681),ut=r(53892),dt=r(81219),lt=r(73146),ft=r(11580),pt=r(78223),ht=r(4389);var vt=r(37614);class yt{constructor(t,e=st.y,r=st.y){this.state$=new at.t(1),this.action$=new ct.x,this.isReady=!1,this.actionSub=new ut.w0,this.initAction={type:vt.XQ,payload:null,store:this},this.name=t,this.reducer=e,this.epic$=new dt.X(r)}get state(){return this.internalState}get ready(){return this.isReady}setup(t){this.internalState=t,this.state$.next(t),this.subscribeAction(),this.log(this.initAction),this.isReady=!0}addEpic(t){const{epic$:e}=this,r=e.getValue();return e.next(t((t=>{let e;return e=t instanceof ct.x?r(t):r(t.pipe((0,lt.B)())),e.pipe((0,ft.R)(this.action$.pipe((0,pt.Z)(null,null))))}))),()=>{this.epic$.next(r)}}dispatch(t){if(t.type===vt._j)return;if(t.store!==this)return void t.store.dispatch(t);const e=this.internalState,r=this.reducer(e,t);r!==e&&(this.internalState=r,this.state$.next(r)),this.log(t),this.action$.next(t)}log(t){t.type,vt.kQ}dispose(){this.actionSub.unsubscribe(),this.action$.complete(),this.state$.complete(),this.epic$.complete(),this.action$.unsubscribe(),this.epic$.unsubscribe()}subscribeAction(){this.actionSub=this.epic$.pipe((0,ht.w)((t=>t(this.action$).pipe((0,ft.R)(this.action$.pipe((0,pt.Z)(null,null))))))).subscribe({next:t=>{try{this.dispatch(t)}catch(t){console.error(t),this.action$.error(t)}},error:t=>{this.action$.closed||this.action$.error(t)}})}}const mt="undefined"==typeof globalThis?"undefined"==typeof window?r.g:window:globalThis,gt="defaultState";class bt{constructor(){this.actionStreams={},this.retryActionsCreator={},this.actionNames=[],this.restoredFromSSR=!1,this.createNoopAction=()=>this.noop(),this.terminate=()=>({type:vt.kQ,payload:null,store:this.store}),this.reset=()=>({type:vt.Si,payload:null,store:this.store});const t=this.combineReducers(),e=this.combineDefineActions(),r=this.combineEffects();this.store=new yt(this.moduleName,t,r);for(const t of e)this[t]=this.store.action$.pipe((0,et.h)((({type:e})=>e===t)),(0,rt.U)((({payload:t})=>t)));this.actions={reset:this.reset,terminate:this.terminate,noop:this.noop},this.dispatchers={reset:()=>{this.store.dispatch(this.reset())},terminate:()=>{this.store.dispatch(this.terminate())},noop:()=>{this.store.dispatch(this.noop())}};for(const t of this.actionNames){const e=e=>({type:t,payload:e,store:this.store});this.actions[t]=e,this.dispatchers[t]=t=>{this.store.dispatch(e(t))},this.actionStreams[t]=this.store.action$.pipe((0,et.h)((({type:e})=>e===t)),(0,rt.U)((({payload:t})=>t)))}if("undefined"!=typeof Proxy){const t=this;return new Proxy(this,{defineProperty(e,r,n){var o;if(r===gt)if(n.set){const e=n.set;n.set=function(r){var n;return t.internalDefaultState=r,t.store.ready||(t.store.setup(t.getDefaultState()),t.actionsToRetry=new Set((null===(n=mt[vt.Tm])||void 0===n?void 0:n[this.moduleName])||[]),t.actionsToSkip=new Set(t.restoredFromSSR&&(0,it.Zp)(t.constructor.prototype)||[])),e.call(this,r)}}else"value"in n&&(t.internalDefaultState=n.value,t.store.ready||(t.store.setup(t.getDefaultState()),t.actionsToRetry=new Set((null===(o=mt[vt.Tm])||void 0===o?void 0:o[t.moduleName])||[]),t.actionsToSkip=new Set(t.restoredFromSSR&&(0,it.Zp)(t.constructor.prototype)||[])));return Reflect.defineProperty(e,r,n)},set(e,r,n,o){var i;return r===gt&&(t.internalDefaultState=n,t.store.ready||(t.store.setup(t.getDefaultState()),t.actionsToRetry=new Set((null===(i=mt[vt.Tm])||void 0===i?void 0:i[t.moduleName])||[]),t.actionsToSkip=new Set(t.restoredFromSSR&&(0,it.Zp)(t.constructor.prototype)||[]))),Reflect.set(e,r,n,o)}})}Object.defineProperty(this,gt,{set:t=>{var e;this.internalDefaultState=t,this.store.ready||(this.store.setup(this.getDefaultState()),this.actionsToRetry=new Set((null===(e=mt[vt.Tm])||void 0===e?void 0:e[this.moduleName])||[]),this.actionsToSkip=new Set(this.restoredFromSSR&&(0,it.Zp)(this.constructor.prototype)||[]))},get:()=>this.getDefaultState()})}get state$(){return this.store.state$}get action$(){return this.store.action$}get state(){return this.store.state}getActions(){return this.actions}getAction$(){return this.actionStreams}retryOnClient(){return this.retryActionsCreator}noop(){return{type:vt._j,payload:null,store:this.store}}getDefaultState(){var t,e;return null!==(e=null!==(t=this.tryReadHmrState())&&void 0!==t?t:this.tryReadSSRState())&&void 0!==e?e:this.internalDefaultState}tryReadSSRState(){const t=mt[vt.ho];if(null==t?void 0:t[this.moduleName])return this.restoredFromSSR=!0,t[this.moduleName]}tryReadHmrState(){if(ot.W){const t=ot.X.get(this.moduleName);if(t){const e=t.state;return t.dispose(),e}}}combineEffects(){const t=(0,it.v7)(this.constructor.prototype,"Effect");return t&&0!==t.length?(this.actionNames.push(...t),e=>(0,tt.T)(...t.map((t=>{const r=this[t],n=e.pipe((0,et.h)((({type:e})=>e===t)),(0,et.h)(((e,r)=>{var n;return(!this.actionsToRetry.has(t)&&(null===(n=this.actionsToSkip)||void 0===n?void 0:n.has(t))?1:0)<=r})),(0,rt.U)((({payload:t})=>t)));return this.retryActionsCreator[t]=()=>({type:vt.Ai,payload:{module:this,name:t},store:this.store}),r.call(this,n)})))):t=>t.pipe((0,nt.l)())}combineReducers(){const t=(0,it.v7)(this.constructor.prototype,"Reducer",[]),e=(0,it.v7)(this.constructor.prototype,"ImmerReducer",[]);this.actionNames.push(...t,...e);const r=e.reduce(((t,e)=>(t[e]=this[e].bind(this),t)),{}),n=t.reduce(((t,e)=>(t[e]=this[e].bind(this),t)),{});return(t,e)=>{const{type:o}=e;return o===vt.Si?this.defaultState:n[o]?n[o](t,e.payload):r[o]?Y(t,(t=>r[o](t,e.payload))):t}}combineDefineActions(){const t=(0,it.v7)(this.constructor.prototype,"DefineAction",[]);return this.actionNames.push(...t),t}}},37614:(t,e,r)=>{r.d(e,{Ai:()=>l,FU:()=>o,Fq:()=>p,JJ:()=>s,Si:()=>d,Tm:()=>v,Ts:()=>i,XQ:()=>a,_j:()=>c,ho:()=>h,kQ:()=>u,yZ:()=>f,yx:()=>n});const n="E",o="R",i="IR",s="D",a="IA",c="N",u="T",d="RST",l="RT",f="SA",p="RS",h="SIGI_STATE",v="SIGI_RETRY"},70517:(t,e,r)=>{function n(t){return function(e,r,n){Reflect.getMetadata("design:paramtypes",e)[n]=t}}r.d(e,{t:()=>n})},43549:(t,e,r)=>{r.d(e,{G:()=>o});var n=r(18865);function o(t){return function(e){var r;n.n.addProvider({useClass:e,provide:e});for(const e of null!==(r=null==t?void 0:t.providers)&&void 0!==r?r:[])n.n.addProvider(e);return e}}},18865:(t,e,r)=>{r.d(e,{n:()=>a});var n=r(91747);class o{constructor(t){this.provider=t,"function"==typeof t?(this.name=t.name,this.token=t):(this.name=t.provide instanceof n.O?t.provide.toString():t.provide.name,this.token=t.provide)}toString(){return this.name}}class i{constructor(){this.providersMap=new Map}addProvider(t){var e;return this.providersMap.set(null!==(e=t.provide)&&void 0!==e?e:t,t),t}findProviderByToken(t){return this.providersMap.has(t)?this.providersMap.get(t):null}}class s{constructor(t=null){this.parent=t,this.provider=new i,this.resolvedProviders=new Map,this.providersCache=new Map}addProvider(t){return this.provider.addProvider(t)}addProviders(t){for(const e of t)this.provider.addProvider(e);return this}getInstance(t){return this.getInstanceInternal(t,!0)}resolveAndInstantiate(t){return this.getInstanceInternal(t,!1)}createChild(t){const e=new s(this);return e.addProviders(t),e}resolveReflectiveProvider(t){var e;let r=null;if(this.provider.findProviderByToken(null!==(e=t.provide)&&void 0!==e?e:t)){if(this.providersCache.has(t))return this.providersCache.get(t);r=new o(t),this.providersCache.set(t,r)}return r}getInstanceInternal(t,e){let r=this,n=null,i=null;const s=this.findDeps(t);for(;r;)if(i=r.resolveReflectiveProvider(t),i){if(r.resolvedProviders.has(i)){s?e&&(r===this||this.checkDependenciesClean(r,s))?n=r.resolvedProviders.get(i):(n=this.resolveByReflectiveProvider(i,e,this),e&&(this.provider.addProvider(t),this.providersCache.set(t,i),this.resolvedProviders.set(i,n))):n=e?r.resolvedProviders.get(i):this.resolveByReflectiveProvider(i,!1,this);break}if(n=r.resolveByReflectiveProvider(i,e,this),n){e&&(this.provider.addProvider(t),this.providersCache.set(t,i),this.resolvedProviders.set(i,n));break}r=r.parent}else r=r.parent;if(!n)throw i=new o(t),new TypeError(`No provider for ${i.name}!`);return n}resolveByReflectiveProvider(t,e=!0,r=this){var n;let o=null;const{provider:i,name:s}=t;if("function"==typeof i)o=new i(...(null!==(n=Reflect.getMetadata("design:paramtypes",i))&&void 0!==n?n:[]).map((t=>r.getInstanceInternal(r.findExisting(t),e))));else if("useValue"in i)o=i.useValue;else if("useClass"in i)o=r.getInstanceInternal(i.useClass,e);else if("useFactory"in i){let t=[];i.deps&&(t=i.deps.map((t=>r.getInstanceInternal(r.findExisting(t),e)))),o=i.useFactory(...t)}else"useExisting"in i&&(o=r.getInstanceInternal(this.findExisting(i.useExisting),e));if(!o)throw new TypeError(`Can not resolve ${s}, it's not a valid provider`);return o}findExisting(t){var e;let r=null,n=this;for(;n&&(r=n.provider.findProviderByToken(t),!r);)n=n.parent;if(!r)throw new TypeError(`No provider for ${null!==(e=t.name)&&void 0!==e?e:t.toString()}`);return r}findDeps(t){return"function"==typeof t?Reflect.getMetadata("design:paramtypes",t):t.useClass?Reflect.getMetadata("design:paramtypes",t.useClass):t.deps?t.deps:null}checkDependenciesClean(t,e){return e.every((e=>{const r=t.findExisting(e),n=r===this.findExisting(e),o=this.findDeps(r);return o?this.checkDependenciesClean(t,o)&&n:n}))}}const a=new class extends s{constructor(){super(...arguments),this.provider=new i}reset(){this.provider=new i,this.providersCache.clear(),this.resolvedProviders.clear()}}},91747:(t,e,r)=>{r.d(e,{O:()=>n});class n{constructor(t){this.desc=t}toString(){return this.desc}}},95372:(t,e,r)=>{r.d(e,{o:()=>b});var n=r(71030),o=r(28843),i=r(31738),s=r(63681),a=r(22403),c=r(87613),u=r(828),d=r(5499),l=r(91747),f=r(70517),p=r(28952),h=r(21249),v=r(55823);const y={provide:new l.O("History"),useValue:null},m={provide:new l.O("Router$"),useValue:null};let g=class extends c.D{constructor(t,e){super(),this.history=t,this.router$=e,this.defaultState=null}push(t,e){return this.getActions()._callHistory({method:"push",payloads:[t,e]})}go(t){return this.getActions()._callHistory({method:"go",payloads:[t]})}goBack(){return this.getActions()._callHistory({method:"goBack",payloads:[]})}goForward(){return this.getActions()._callHistory({method:"goForward",payloads:[]})}replace(t,e){return this.getActions()._callHistory({method:"replace",payloads:[t,e]})}_callHistory(t){return t.pipe((0,h.b)((({method:t,payloads:e})=>{this.history[t].apply(this.history,e)})),(0,v.U)((()=>this.noop())))}};(0,a.gn)([(0,u.Qm)(),(0,a.w6)("design:type",Function),(0,a.w6)("design:paramtypes",[p.y]),(0,a.w6)("design:returntype",void 0)],g.prototype,"_callHistory",null),g=(0,a.gn)([(0,d.Y)("@@Router"),(0,a.fM)(0,(0,f.t)(y.provide)),(0,a.fM)(1,(0,f.t)(m.provide)),(0,a.w6)("design:paramtypes",[Object,p.y])],g);const b=(0,i.memo)((({history:t,children:e})=>{const r=(0,i.useMemo)((()=>new s.x),[t]),a=(0,i.useMemo)((()=>[{provide:y.provide,useValue:t},{provide:m.provide,useValue:r}]),[t,r]);return(0,i.useEffect)((()=>t.listen(((t,e)=>{r.next({location:t,action:e})}))),[t,r]),(0,n.jsx)(o.yx,Object.assign({providers:a},{children:e}),void 0)}))},80824:(t,e,r)=>{r.d(e,{qj:()=>u,b7:()=>f,mp:()=>l});var n=r(31738),o=r(58181),i=r(30821),s=r(21249),a=r(28843);function c(t,e){if(t===e)return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;const r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;const o=Object.prototype.hasOwnProperty;for(const n of r)if(!o.call(e,n)||t[n]!==e[n])return!1;return!0}function u(t){return(0,a.fz)(t).dispatchers}function d(t,e,r,a=c){r=r||[];const u=(0,n.useRef)(),d=(0,n.useRef)(),l=(0,n.useRef)();a(d.current,r)||(l.current=null!=e?e:o.y,u.current=l.current(t.state)),d.current=r;const f=function(){const[,t]=(0,n.useReducer)((t=>t+1),0);return t}(),p=(0,n.useCallback)((t=>{const e=l.current(t);a(u.current,e)||(u.current=e,f())}),[]),h=(0,n.useCallback)((()=>t.state$.pipe((0,i.T)(1),(0,s.b)(p)).subscribe()),[t,p]),v=(0,n.useMemo)((()=>h()),[h]);return(0,n.useEffect)((()=>{const t=v.closed?h():v;return()=>{t.unsubscribe()}}),[v,h]),u.current}function l(t,e){const{store:r}=(0,a.fz)(t);return d(r,null==e?void 0:e.selector,null==e?void 0:e.dependencies,null==e?void 0:e.equalFn)}function f(t,e){const r=(0,a.fz)(t),{store:n}=r;return[d(n,null==e?void 0:e.selector,null==e?void 0:e.dependencies,null==e?void 0:e.equalFn),r.dispatchers]}},28843:(t,e,r)=>{r.d(e,{fz:()=>c,yx:()=>a});var n=r(71030),o=r(18865),i=r(31738);const s=(0,i.createContext)(o.n),a=(0,i.memo)((({providers:t=[],children:e})=>{const r=(0,i.useContext)(s),o=(0,i.useMemo)((()=>r.createChild(t)),[r,...t]);return(0,n.jsx)(s.Provider,Object.assign({value:o},{children:e}),void 0)}));function c(t){return(0,i.useContext)(s).getInstance(t)}},97516:(t,e,r)=>{r.d(e,{g:()=>o});var n=r(37614);function o(){var t,e;const r=null===(t=document.getElementById(n.ho))||void 0===t?void 0:t.textContent,o=null===(e=document.getElementById(n.Tm))||void 0===e?void 0:e.textContent;r&&(window[n.ho]=JSON.parse(r)),o&&(window[n.Tm]=JSON.parse(o))}}}]);