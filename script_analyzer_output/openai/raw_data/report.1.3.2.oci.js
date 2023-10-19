SlardarLite.plugin.report=function(){"use strict";var x=function(){return(x=Object.assign||function(n){for(var t,r=1,i=arguments.length;r<i;r++)for(var e in t=arguments[r])Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n}).apply(this,arguments)};function q(n,t){var r="function"==typeof Symbol&&n[Symbol.iterator];if(!r)return n;var i,e,u=r.call(n),o=[];try{for(;(void 0===t||0<t--)&&!(i=u.next()).done;)o.push(i.value)}catch(n){e={error:n}}finally{try{i&&!i.done&&(r=u.return)&&r.call(u)}finally{if(e)throw e.error}}return o}function a(n,t,r){if(r||2===arguments.length)for(var i,e=0,u=t.length;e<u;e++)!i&&e in t||((i=i||Array.prototype.slice.call(t,0,e))[e]=t[e]);return n.concat(i||Array.prototype.slice.call(t))}var o=function(n){return Object.prototype.toString.call(n)};function c(n){return"[object Array]"===o(n)}var u=" > ",f=3,v=5,s=80;function d(n,t,r,i){if(void 0===t&&(t=0),void 0===r&&(r=0),void 0===i&&(i=[]),n&&t++<v){var e=function(r){if(!r||!r.tagName)return"";var i=r.tagName.toLowerCase();return r.id&&(i+="#"+r.id),r.className&&r.className.split(/\s+/).forEach(function(n){return i+="."+n}),["type","name","title","alt"].forEach(function(n){var t=r.getAttribute(n);t&&(i+="["+n+'="'+t+'"]')}),i}(n);if("html"!==e&&!(1<t&&r+i.length*f+e.length>=s))return i.unshift(e),d(n.parentNode,t,r+e.length,i)}return i.join(u)}function l(n,t){return n=n.config.plugins[t],"object"!=typeof(t=n)||null===t||c(t)?{}:n}function h(t,n){return t&&n&&n.some(function(n){return t.match(n)})}function m(n){var t=document.createElement("a");return t.href=n,{url:t.href,protocol:t.protocol,domain:t.hostname,query:t.search,hash:t.hash,path:t.pathname}}function p(n){return JSON.stringify({ev_type:"batch",list:n})}var w=10,y=1e3;var g=function(){return{}};function n(n){return n}function r(n){return"object"==typeof n&&null!==n}var t=Object.prototype;function b(n){return"[object Array]"===t.toString.call(n)}function _(n){return"function"==typeof n}function k(n){return"string"==typeof n}function E(n,t){if(b(n)&&0!==n.length)for(var r=0;r<n.length;){if(n[r]===t)return 1;r++}}function i(n){return b(n)&&n.length?function(n){for(var t=[],r=n.length,i=0;i<r;i++){var e=n[i];k(e)?t.push(e.replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1")):e&&e.source&&t.push(e.source)}return new RegExp(t.join("|"),"i")}(n):null}function j(u,o,c,f){return void 0===f&&(f=!0),function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];if(!u)return g;var r=u[o],i=c.apply(void 0,a([r],q(n),!1)),e=i;return _(e)&&f&&(e=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return i.apply(this,t)}catch(n){return _(r)&&r.apply(this,t)}}),u[o]=e,function(n){n||(e===u[o]?u[o]=r:i=r)}}}function R(i,n){var t=[];try{t=n.reduce(function(n,t){try{var r=t(i);"function"==typeof r&&n.push(r)}catch(n){}return n},[])}catch(n){}return function(n){return R(n,t)}}function T(n,t,r,i){return n.destroyAgent.set(t,r,i)}var S=function(u,o,c){return function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];if(!u)return g;var r=u[o],i=c.apply(void 0,a([r],q(n),!1)),e=i;return _(e)&&(e=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return i.apply(this,n)}),u[o]=e,function(){e===u[o]?u[o]=r:i=r}}},e=function(n){return Math.random()<Number(n)},O=function(n){function t(n){c=function(n,t){if(!b(n))return n;var r=n.indexOf(t);if(0<=r){t=n.slice();return t.splice(r,1),t}return n}(c,n),a||v()}var r,i,e,u,o,c=[],f=[],a=!1,v=(i=function(){return c.length},e=function(){a=!0,r&&r[0](),f.forEach(function(n){return n()}),f.length=0,r=void 0},-1===(u=n=void(o=0)===n?3e5:n)?g:function(){if(i())return o&&clearTimeout(o),void(o=0);0===o&&(o=setTimeout(e,u))});return{next:function(n){return R(n,c)},complete:function(n){f.push(n)},attach:function(n,t){r=[n,t]},subscribe:function(n){if(a)throw new Error("Observer is closed");return c.push(n),r&&r[1]&&r[1](n),v(),function(){return t(n)}},unsubscribe:t}},L=function(n,t,r){r=O(r);try{n(r.next,r.attach),t&&r.complete(t)}catch(n){}return[r.subscribe,r.unsubscribe]};function A(n,t){return n.initSubject(t)}function D(n,t,r){var t=q(t,2),i=t[0],t=t[1],e=n.privateSubject||{};return e[i]||(e[i]=L(t,function(){e[i]=void 0},r)),e[i]}var M=function(){return Date.now()};function H(){if("object"==typeof window&&r(window))return window}function N(){if("object"==typeof document&&r(document))return document}function C(){if(H()&&r(window.performance))return window.performance}function P(){if(H()&&_(window.MutationObserver))return window.MutationObserver}function I(){if(H()&&_(window.PerformanceObserver))return window.PerformanceObserver}function X(n){var t=N();if(!t||!n)return"";t=t.createElement("a");return t.href=n,t.href}function B(n){var t=N();if(!t||!n)return{url:n,protocol:"",domain:"",query:"",path:"",hash:""};t=t.createElement("a");t.href=n;n=t.pathname||"/";return"/"!==n[0]&&(n="/"+n),{url:t.href,protocol:t.protocol.slice(0,-1),domain:t.hostname,query:t.search.substring(1),path:n,hash:t.hash}}function U(){var n=H()&&H()&&window.location;return null==n?void 0:n.href}function F(t,n){void 0===n&&(n=!1);var r=J(t);return n&&(r.timestamp=M()),function(n){t.report(x(x({},n),{overrides:r}))}}function W(e){return function(r,n){function t(n){var t;n.viewId&&n.viewId!==(null===(t=e.config())||void 0===t?void 0:t.viewId)&&(r(i),i=x(x({},J(e)),z(n)))}var i=J(e);e.on("beforeConfig",t),n(function(){e.off("beforeConfig",t)})}}var z=function(n){return{pid:n.pid,view_id:n.viewId,url:U()}},J=function(n){var t=n.config(),t=z(t);return t.context=n.context?n.context.toString():{},t},$=function(n,t){var r=n&&new n(t);return[function(n,t){r&&n&&r.observe(n,t)},function(){return r&&r.disconnect()}]},G=function(n,t,r,i){var e,u=!_(t)||i&&n&&n.hidden?function(n){return n(0),0}:t,o=_(r)?r:g;return[function(n){e&&o(e),e=u(n)},u,o]},K=function(r){var n=r&&r.timing||void 0;return[n,function(){return r&&r.now?r.now():(Date.now?Date.now():+new Date)-(n&&n.navigationStart||0)},function(n){var t=(r||{}).getEntriesByType;return _(t)&&t.call(r,n)||[]},function(){var n=(r||{}).clearResourceTimings;_(n)&&n.call(r)},function(n){var t=(r||{}).getEntriesByName;return _(t)&&t.call(r,n)||[]}]};function V(i){return function(n,t){var r;i&&((r=[]).push(S(i,"open",rn)()),r.push(S(i,"setRequestHeader",en)()),r.push(S(i,"send",un)(n)),t(function(){r.forEach(function(n){return n()})}))}}function Y(i,e){return function(n,t){var r=e([n,t=void 0===t?{}:t]),t=i(n,t);return t.then(function(n){r(n)},function(){r(void 0)}),t}}function Q(n){var i=tn(n,xn);if(i&&e(i.sampleRate))return function(n,t){var r=i.origins;r.length&&Boolean(n.match(new RegExp(r.join("|"))))&&t(_n,yn+"-"+gn()+"-"+gn().substring(16)+"-"+bn)}}function Z(n,t){return!(!n||!t)&&(kn.test(n)||En.test(t))}function nn(n,t,c){var r=q(t,2),t=r[0],f=r[1],a=c.setTraceHeader,v=c.ignoreUrls,s=c.setContextAtReq;n.push(t[0](function(n){var t=q(n,4);t[0];n=t[1];t[2];var r=t[3];if(!n||jn(v,n))return g;a&&a(n,function(n,t){return r.setRequestHeader(n,t)});var i=s(),e=X(n),u=void 0,o=f()[0](function(n){e!==n.name||u||(u=n)});return function(n){var t=Tn(n,c);setTimeout(function(){u&&(t.response.timing=u),i&&i({ev_type:hn,payload:t}),o()},100)}}))}var tn=function(n,t){return r(n)?x(x({},t),n):!!n&&t},rn=function(i){return function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return n=q(t,2),this._method=n[0],this._url=n[1],i.apply(this,t)}},en=function(e){return function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];this._reqHeaders=this._reqHeaders||{};var r=q(n,2),i=r[0],r=r[1];return this._reqHeaders[i]=r,e&&e.apply(this,n)}},un=function(u,o){var t,c=(t=new RegExp("\\/monitor_web\\/collect|\\/monitor_browser\\/collect\\/batch","i"),function(n){return t.test(n)});return function(){for(var n,i,e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this._start=M(),this._data=null==t?void 0:t[0],c(this._url)||(n=o([this._method,this._url,this._start,this]),e=n,S(i=this,"onreadystatechange",function(r){return function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return 4===this.readyState&&e(i),r&&r.apply(this,n)}})()),u.apply(this,t)}},on=["fetch_0",function(n,t){var r,i=H();i&&fetch&&((r=[]).push(S(i,"fetch",Y)(n)),t(function(){r.forEach(function(n){return n()})}))}],cn=["resource"],fn=["longtask"],an=function(t,e,r){var i=t&&new t(function(n,i){n.getEntries?n.getEntries().forEach(function(n,t,r){return e(n,t,r,i)}):r&&r()});return[function(n){if(!t||!i)return r&&r();try{i.observe({entryTypes:n})}catch(n){return r&&r()}},function(n){if(!t||!i)return r&&r();try{i.observe({type:n,buffered:!0})}catch(n){return r&&r()}i.observe({type:n,buffered:!1})},function(){return i&&i.disconnect()}]},vn=function(n,t,r){n=q(an(n,t),3),t=n[0],n=n[2];return t(r),n},sn=["longtask_0",function(n,t){var r=I();r&&t(vn(r,n,fn))}],dn=["resource_0",function(n,t){var r=I();r&&t(vn(r,n,cn))}],pn="pageview",ln="session",hn="http",mn="performance",wn="action",yn="03",bn="01",_n="traceparent",xn={sampleRate:1,origins:[]},gn=function(){var n=window&&(window.crypto||window.msCrypto);if(void 0!==n&&n.getRandomValues){var t=new Uint16Array(8);n.getRandomValues(t);n=function(n){for(var t=n.toString(16);t.length<4;)t="0"+t;return t};return n(t[0])+n(t[1])+n(t[2])+n(t[3])+n(t[4])+n(t[5])+n(t[6])+n(t[7])}return"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g,function(){return(16*Math.random()|0).toString(16)})},kn=new RegExp("(cookie|auth|jwt|token|key|ticket|secret|credential|session|password)","i"),En=new RegExp("(bearer|session)","i"),jn=function(n,t){n=i(n||[]);return!!n&&n.test(t)},Rn=function(t){var r=!1;return function(n){r||(r=!0,t(n))}};var Tn=function(n,t){var r,i=n._method,e=n._reqHeaders,u=n._url,o=n._start,c=n._data,e={api:"xhr",request:{url:X(u),method:(i||"").toLowerCase(),headers:e&&(r=e,Object.keys(r).reduce(function(n,t){return Z(t,r[t])||(n[t.toLowerCase()]=r[t]),n},{})),timestamp:o},response:{status:n.status||0,is_custom_error:!1,timestamp:M()},duration:M()-o};"function"==typeof n.getAllResponseHeaders&&(e.response.headers=k(f=n.getAllResponseHeaders())&&f?f.split("\r\n").reduce(function(n,t){var r;return k(t)&&(t=(r=q(t.split(": "),2))[0],r=r[1],Z(t,r)||(n[t.toLowerCase()]=r)),n},{}):{});var o=e.response.status,f=t.collectBodyOnError,t=t.extraExtractor;try{var a=null==t?void 0:t(n.response,e);a&&(e.extra=a),a&&(e.response.is_custom_error=!0),f&&(a||400<=o)&&(e.request.body=c?""+c:void 0,e.response.body=n.response?""+n.response:void 0)}catch(n){}return e};function qn(n,t,r){t=null===(n=n.config())||void 0===n?void 0:n.plugins[t];return tn(t,r)}var Sn="ajax",On={autoWrap:!0,setContextAtReq:function(){return n},ignoreUrls:[],collectBodyOnError:!1};function Ln(n,t,a){var r=q(t,2),t=r[0],v=r[1],s=a.setTraceHeader,d=a.ignoreUrls,p=a.setContextAtReq,l=window.Headers,h=window.Request;h&&l&&n.push(t[0](function(n){var n=q(n,2),i=n[0],e=n[1],t=X(i instanceof h?i.url:i);if(!Hn(t)||jn(d,t))return g;s&&s(t,function(n,t){return Nn(n,t,i,e,h,l)});var u=p(),o=M(),c=void 0,f=v()[0](function(n){t!==n.name||c||(c=n)});return function(n){var t=Cn(i,e,n,h,l,a,o),r=Rn(function(n){c&&(n.response.timing=c),u&&u({ev_type:hn,payload:n}),f()});setTimeout(function(){r(t)},1e3)}}))}function An(n,t){return n instanceof t}function Dn(n,t,r){return t=t&&t.method||"get",(t=An(n,r)?n.method||t:t).toLowerCase()}function Mn(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];try{return n.reduce(function(r,n){return new t(n||{}).forEach(function(n,t){return!Z(t,n)&&(r[t]=n)}),r},{})}catch(n){return{}}}var Hn=function(n){if(!k(n))return!1;var t=q(n.split(":"),2),n=t[0];return!t[1]||"http"===n||"https"===n},Nn=function(n,t,r,i,e,u){An(r,e)?r.headers.set(n,t):i.headers instanceof u?i.headers.set(n,t):i.headers=x(x({},i.headers),((i={})[n]=t,i))},Cn=function(r,i,n,e,t,u,o){function c(){var n,t;a&&(f.request.body=null===(t=i,t=An(n=r,e)?n.body:null==t?void 0:t.body)||void 0===t?void 0:t.toString())}var f={api:"fetch",request:{method:Dn(r,i,e),timestamp:o,url:X(r instanceof e?r.url:r),headers:Mn(t,r.headers,i.headers)},response:{status:n&&n.status||0,is_custom_error:!1,timestamp:M()},duration:M()-o},a=u.collectBodyOnError,v=u.extraExtractor;if(n)try{f.response.headers=Mn(t,n.headers);try{v&&n.clone().json().then(function(n){n=v(n,f);n&&(f.extra=n,f.response.is_custom_error=!0,c())}).catch(g)}catch(n){}400<=n.status&&c()}catch(n){}else c();return f},Pn="fetch",In={autoWrap:!0,setContextAtReq:function(){return n},ignoreUrls:[],collectBodyOnError:!1};function Xn(n){return"hidden"===n.visibilityState}function Bn(n){return"complete"===n.readyState}var Un=["hidden_2",function(n,t){var r,i=H(),e=N();i&&e&&(r=function(){n(Xn(e))},addEventListener("visibilitychange",r,!0),t(function(){removeEventListener("visibilitychange",r,!0)},function(n){n(Xn(e))}))}],Fn=["load_1",function(n,t){var r,i,e=H(),u=N();e&&u&&(r=!1,i=function(){setTimeout(function(){n(),r=!0},0)},Bn(u)?i():e.addEventListener("load",i,!1),t(function(){e.removeEventListener("load",i,!1)},function(n){r&&n()}))}],Wn=["unload_0",function(n,t){var r,i,e,u,o,c=H();c&&(r=q((i=n,e=!1,[function(n){e||(e=!0,i&&i(n))}]),1)[0],o=function(){r()},(u=["unload","beforeunload","pagehide"]).forEach(function(n){c.addEventListener(n,o)}),t(function(){u.forEach(function(n){c.removeEventListener(n,o)})}))}],zn=["hash_0",function(n,t){var r,i=H();i&&(i.addEventListener("hashchange",r=function(){return n(location.href)},!0),t(function(){return i.removeEventListener("hashchange",r,!0)}))}],Jn=["history_0",function(n,t){var r,i,e,u=H()&&window.history;u&&(i=function(){return n(location.href)},(r=[]).push(j(u,"pushState",e=function(r){return function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{r.apply(u,n)}finally{i()}}})(),j(u,"replaceState",e)()),window.addEventListener("popstate",i,!0),r.push(function(){return window.removeEventListener("popstate",i,!0)}),t(function(){r.forEach(function(n){return n()})}))}],$n=function(r){return function(n){var t;return"hash"===r?(null===(t=B(n).hash)||void 0===t?void 0:t.replace(/^#/,""))||"/":B(n).path}},Gn=function(n,t){return n+"_"+t},Kn=function(i,n,t,e){var u=t,o=n;e&&e(n);return[function(n,t,r){"user_set"!==n&&t!==u?(u=t,o=null!=r?r:u,e&&e(o),i(n,o)):"user_set"===n&&t!==o&&(o=t,e&&e(o),i(n,o))},function(){n&&i("init",n)}]},Vn=function(r,n){var i=n;return[function(n,t){t!==i&&r(n,i=t)}]},Yn=function(r){return function(n,t){r({ev_type:pn,payload:{pid:t,source:n}})}},Qn=function(n){return"manual"===n},Zn="error_weight",nt="duration_apdex",tt="perf_apdex",rt=function(n,t){var r=n[0]+n[1]+n[2],i=n[0]/r;return n[2]/r>t.frustrating_threshold?2:i>t.satisfying_threshold||0===r?0:1},it=function(){var t=0,r=void 0;return[function(n){n?r&&(t+=M()-r,r=void 0):r=M()},function(){r&&(t+=M()-r);var n=t;return t=0,r=M(),n}]},et=function(e,u){return function(n,t){var r=n.payload;switch(n.ev_type){case mn:var i=r.name;r.isSupport&&e(t[tt],i,r.value);break;case wn:e(t[tt],"action",r.duration||0);break;case"js_error":u(t[Zn],0);break;case hn:r.response.is_custom_error||400<=r.response.status?u(t[Zn],1):(i=r.response.timing)&&e(t[nt],0,i.duration);break;case"resource_error":u(t[Zn],2);break;case"blank_screen":u(t[Zn],3);break;case"resource":e(t[nt],1,r.duration);break;case"performance_longtask":r.longtasks.forEach(function(n){e(t[nt],2,n.duration)})}}},ut=function(){function n(){e=[0,0,0],u={error_count:[0,0,0,0],duration_count:[0,0,0],perf_apdex:{}}}var e,u;n();return[function(n,t,r){var i=n&&n[t];!i||r<=0||(n=r<(i[0].threshold||0)?0:r>(i[1].threshold||0)?2:1,e[n]+=i[n].weight,"string"==typeof t?(r=Gn(t,n),i=u[tt][r],u[tt][r]=(i||0)+1):2==n&&(u.duration_count[t]+=1))},function(n,t){n&&(e[2]+=n[t],u.error_count[t]+=1)},function(){return[e,u]},n]},ot=function(){var e={start:M(),end:0,time_spent:0,is_bounced:!1,entry:"",exit:"",p_count:0,a_count:0};return[function(n,t){var r=q(n,3),i=r[0],n=r[1],r=r[2];e.end=M(),e.time_spent+=t&&t.time_spent||0,e.last_page=t,e.p_count+=1,e.rank=i,e.apdex=n,e.apdex_detail=r;r=N();r&&(e.is_bounced=!Bn(r))},function(n,t){e.time_spent+=n.time_spent,e.p_count+=1,e.exit=t},function(){e.a_count+=1},function(n){e.entry=n,e.exit=n},function(){return e}]},ct="pageview",ft={sendInit:!0,routeMode:"history",apdex:2};function at(t,n,r,i,e){var u,o=(f=q(e,2))[0],c=f[1],e=I(),f=C(),a=lt(n,0),v=ht(mt,r,i);if(!f||!e)return a.isSupport=!1,v(a),0;function s(n){n=n.startTime,a.value=n,v(a)}(f=(0,q(K(f),5)[4])(t)[0])?s(f):(i.push(vn(e,function(n){n.name===t&&s(n)},[yt])),i.push(c[0](function(){a.isBounced=!0,v(a)})),u=function(n){n&&(a.isSupport=!1,v(a))},i.push(function(){return o[1](u)}),o[0](u))}function vt(n,r){var i=["img","script","iframe","link","audio","video","source"],t=(n=q($(n,function(n){for(var t=0;t<n.length;t++)("childList"===n[t].type&&function n(t,r){for(var i=0;i<t.length;i++)if(E(r,t[i].nodeName.toLowerCase())||t[i].children&&n(t[i].children,r))return 1}(n[t].addedNodes,i)||"attributes"===n[t].type&&E(i,n[t].target.nodeName.toLowerCase()))&&r(n[t])}),2))[0];return[function(){return t(document,{attributes:!0,childList:!0,subtree:!0,attributeFilter:["href","src"]})},n[1]]}function st(n,t){var r=n.startTime,i=n.duration;n.start=r,n.end=r+i,t.push(n)}function dt(n,t,r,i){var e=(s=q(r,5))[0],u=s[1],o=s[2],c=s[3],f=s[4],a=lt(bt,0),v=ht(mt,n,t),r=C(),s=I(),d=void 0===(i=(n=i||{}).entries)?[]:i,p=n.observer;if(t.push(function(){p&&p.disconnect(),d.length=0}),!window||!XMLHttpRequest||!r||!s||s.supportedEntryTypes&&!E(s.supportedEntryTypes||[],fn[0]))return a.isSupport=!1,v(a),0;var l=(n=q(K(r),5))[0],h=n[1],m=n[4],r=(s=q(xt(h),3))[0],n=s[1],w=s[2],y=(c=q(Et(t,[e,u,o,c,P()],d)(w,h),2))[0],b=c[1];function _(n){a.value=n,v(a)}t.push(n),n=y[y.length-1],r(function(){return function(n){var t=m(wt)[0],t=kt((t?t.startTime:gt(l))||0,gt(l)||0,b(),h(),y);if(!t)return w(h()+1e3);n(t)}(_)},Math.max(b()+_t,n?n.end:0)),t.push(f[0](function(){a.isSupport=!1,v(a)}))}var pt={isSupport:!0,isPolyfill:!1,isBounced:!1,isCustom:!1,type:"perf"},lt=function(n,t){return x({name:n,value:t},pt)},ht=function(t,r,i){var e=!1;return function(n){i.length&&i.forEach(function(n){n()}),i.length=0,e||(e=!0,r&&r(t(n)))}},mt=function(n,t){return{ev_type:mn,payload:n,overrides:t}},wt="first-contentful-paint",yt="paint",bt="tti",_t=5e3,xt=function(t){function r(n){n<e||!i||(o(),u=window.setTimeout(i,n-t()),e=n)}var i,e=-1/0,u=void 0,o=function(){return window.clearTimeout(u)};return[function(n,t){i=n,r(t)},function(){o(),i=void 0},r]},gt=function(n){var t=n||{},n=t.domContentLoadedEventEnd,t=t.navigationStart;return n?n-(void 0===t?0:t):null},kt=function(n,t,r,i,e){if(i-r<_t)return null;e=0===e.length?n:e[e.length-1].end;return i-e<_t?null:Math.max(e,t)},Et=function(d,n,p){var n=q(n,5),l=n[0],h=n[1],m=n[2],w=n[3],y=n[4];return function(r,n){var i,e=[],u=[],t=q([i={},function(n,t){return i[n]=t},function(n){return delete i[n]}],3),o=t[0],c=t[1],f=t[2];p.forEach(function(n){n.entryType===fn[0]&&st(n,e)});var a=0;d.push(l[0](function(n){if("get"!==(q(n,1)[0]||"").toLowerCase())return g;var t=a+=1;return c(t,M()),function(){f(t)}})),d.push(h[0](function(n){var t=q(n,2),n=t[0],t=t[1];if(!window.Request||"get"!==Dn(n,t,window.Request))return g;var r=a+=1;return c(r,M()),function(){f(r)}}));var v=q(y&&vt(y,function(){return r(n()+_t)})||[],2),t=v[0],v=v[1];t&&t();function s(){return function(n,t,r){if(2<n.length)return r();for(var i=[],e=0;e<t.length;e++)i.push([t[e].start,0],[t[e].end,1]);for(e=0;e<n.length;e++)i.push([n[e],0]);i.sort(function(n,t){return n[0]-t[0]});for(var u=n.length,e=i.length-1;0<=e;e--){var o=q(i[e],2),c=o[0];switch(o[1]){case 0:u--;break;case 1:if(2<++u)return c}}return 0}(function(n){for(var t=Object.keys(n),r=[],i=0;i<t.length;i++){var e=n[t[i]];"number"==typeof e&&r.push(e)}return r}(o),u,n)}return v&&d.push(v),d.push(m[0](function(n){st(n,e);var t=n.startTime,n=n.duration;r(t+n+_t)})),d.push(w[0](function(n){var t=n.fetchStart,n=n.responseEnd;u.push({start:t,end:n}),r(s()+_t)})),d.push(function(){e.length=0,u.length=0}),[e,s]}};function jt(n,r,t){var i=(c=q(t,2))[0],e=c[1],u=N(),o=P(),c=(t=C())&&t.timing&&t.timing.navigationStart||void 0,f=lt(Rt,0),a=ht(mt,n,r);if(!u||!o||!c)return f.isSupport=!1,a(f),0;function v(){return d.push({time:M()-s,score:qt(u&&u.body,1,!1,Tt)})}var s=M(),d=[],t=function(){if(H()&&"requestAnimationFrame"in window)return window.requestAnimationFrame}(),n=function(){if(H()&&"cancelAnimationFrame"in window)return window.cancelAnimationFrame}(),p=q(G(u,t,n,!0),1)[0],o=(n=q($(o,function(){return p(v)}),2))[0],n=n[1],l=s-(c||0);o(u,{subtree:!0,childList:!0}),r.push(n),r.push(e[0](function(){f.isSupport=!1,a(f)})),r.push(i[0](function(){var n,t;n=window.setTimeout(function(){!function(n){void 0===n&&(n=0);var t=St(d);f.value=t?t+n:0,a(f),d.length=0}(l)},200),t=r,n&&t.push(function(){return clearTimeout(n)})}))}var Rt="fmp",Tt=["SCRIPT","STYLE","META","HEAD"],qt=function(n,r,t,i){if(!n||-1<i.indexOf(n.tagName))return 0;var e=n.children,e=[].slice.call(void 0===e?[]:e).reduceRight(function(n,t){return n+qt(t,r+1,0<n,i)},0);if(e<=0&&!t){if(!_(n.getBoundingClientRect))return 0;t=n.getBoundingClientRect()||{},n=t.top,t=t.height;if(n>window.innerHeight||t<=0)return 0}return e+1+.5*r},St=function(n){var t=q(void 0===n?[]:n),n=t[0],t=t.slice(1);return t&&t.reduce(function(n,t){var r=q(n,2),i=r[0],n=r[1],r=t.score-i.score;return[t,t.time>=i.time&&n.rate<r?{time:t.time,rate:r}:n]},[n,{time:null==n?void 0:n.time,rate:0}])[1].time||0},Ot="fmp",Lt={renderType:"CSR"};var At="mon.us.tiktokv.com",Dt="/monitor_browser/collect/batch/",Mt=function(n){var t={url:U(),timestamp:M(),sdk_version:"1.3.2",sdk_name:"SDK_LITE"};return x(x({},n),{extra:x(x({},t),n.extra||{})})},Ht=function(n,t){return void 0===t&&(t=Dt),(n&&0<=n.indexOf("//")?"":"https://")+n+t},Nt={build:function(n){return{ev_type:n.ev_type,payload:n.payload,common:x(x({},n.extra||{}),n.overrides||{})}}},Ct={};Ct[ct]=function(_){_.on("init",function(){var n,t,r,i,e,u,o,c,f,a,v,s,d,p,l,h,m,w,y,b=qn(_,ct,ft);b&&location&&(s=b.routeMode,n=b.apdex,f=_.report.bind(_),i=g,n&&(p=[],c=(a=q(function(i,t,n,r){var e=q(n,2),u=e[0],o=e[1],c=2===r.apdex,f=void 0,a=void 0,v=void 0,s=!1,d=q(ut(),4),p=d[0],l=d[1],h=d[2],m=d[3],n=q(ut(),4),e=n[0],r=n[1],w=n[2],y=n[3],d=q(ot(),5),b=d[0],_=d[1],x=d[2],g=d[3],k=d[4],n=q(it(),2),d=n[0],E=n[1];t.push(u[0](d)),c||t.push(o[0](function(){var n,t,r;s&&(n=(r=q(w(),2))[0],t=r[1],r=rt(n,v),b([r,n,t],T()),i({ev_type:ln,payload:k()}),y())}));var j=et(p,l),R=et(e,r),T=function(){var n=q(h(),2),t=n[0],n=n[1];return{start:f[0],pid:f[1],view_id:f[2],end:M(),time_spent:E(),apdex:t,rank:rt(t,v),detail:n}};return t.push(function(){s=!1}),[function(n,t){if(!f)return f=[M(),n,t],g(n),void(s=!(!v||!f));s&&(a=T(),_(a,n)),f=[M(),n,t],m()},function(n){s&&(j(n,v),c||(R(n,v),n.ev_type===wn&&x()))},function(n){s&&(n.payload.last=a),i(n)},function(n){if(!n)return t.forEach(function(n){return n()}),void(t.length=0);s=!(!(v=n)||!f)}]}(_.report.bind(_),p,[A(_,Un),A(_,Wn)],b),4))[0],t=a[1],e=a[2],r=a[3],f=e,i=c,_.on("send",t),p.push(function(){return _.off("send",t)}),_.on("start",function(){r(_.config().apdex)}),T(_,ct,ln,p)),u=q((a=f,o=e=[],c=Qn(s)?[]:[_.initSubject(zn),_.initSubject(Jn)],f=x(x({},b),{initPid:null===(p=_.config())||void 0===p?void 0:p.pid,onPidUpdate:function(n){var t=Gn(n,M());i(n,t),_.set({pid:n,viewId:t,actionId:void 0})}}),s=f.sendInit,b=f.initPid,d=f.routeMode,p=f.extractPid,f=f.onPidUpdate,l=Qn(d)?function(){return""}:$n(d),h=p||function(){},f=q(Kn(Yn(a),b||(a=location.href,null!==(b=h(a))&&void 0!==b?b:l(a)),l(location.href),f),2),m=f[0],f=f[1],Qn(d)||(v=q(Vn(function(n,t){return m(n,l(t),h(t))},""),1)[0],c.length&&c.forEach(function(n){return o.push(n[0](function(n){return v(d,n)}))})),s&&f(),[m.bind(null,"user_set")]),1)[0],D(_,["f_view_0",(w=_,function(n,t){var r=J(w);t(g,function(n){r&&n(r)})})],-1),y=function(){u(_.config().pid)},_.on("config",y),e.push(function(){return _.off("config",y)}),T(_,ct,pn,e),_.provide("sendPageview",u))})},Ct[Sn]=function(t){t.on("init",function(){var i,e,u,n=qn(t,Sn,On);n&&(i=[],e=x(x({},n),{setContextAtReq:function(){return F(t,!0)},setTraceHeader:Q(n.trace)}),u=function(){return A(t,dn)},e.autoWrap&&nn(i,[A(t,["xhr_0",V(XMLHttpRequest&&XMLHttpRequest.prototype)]),u],e),T(t,Sn,hn,i),t.provide("wrapXhr",function(t){function r(){var n=new t;return nn(i,[L(V(n)),u],e),n}return r.prototype=new t,["DONE","HEADERS_RECIEVED","LOADING","OPENED","UNSENT"].forEach(function(n){r[n]=t[n]}),r}))})},Ct[Pn]=function(r){r.on("init",function(){var n,i,e,t=qn(r,Pn,In);t&&(n=[],i=x(x({},t),{setContextAtReq:function(){return F(r,!0)},setTraceHeader:Q(t.trace)}),e=function(){return A(r,dn)},i.autoWrap&&Ln(n,[A(r,on),e],i),T(r,Pn,hn,n),r.provide("wrapFetch",function(t){var r=void 0;return Ln(n,[L(function(n){r=Y(t,n)}),e],i),r}))})},Ct.tti=function(t){t.on("init",function(){var n;qn(t,"tti",{})&&(n=[],dt(F(t),n,[A(t,["xhr_0",V(XMLHttpRequest&&XMLHttpRequest.prototype)]),A(t,on),A(t,sn),A(t,dn),D(t,["view_0",W(t)])],t.pp),T(t,"tti",mn,n))})},Ct.fmp=function(i){i.on("init",function(){var n,t,r=qn(i,Ot,Lt);r&&(n=[],t=A(i,Fn),"SSR"===r.renderType?at("first-paint",Ot,F(i),n,[A(i,Un),A(i,Wn)]):jt(F(i),n,[t,D(i,["view_0",W(i)])]),T(i,Ot,mn,n))})};function Pt(e){var n,r,i,u,t,o,c,f,a,v=Ht(e.config.domain||At,Dt),s=(i=(n={endpoint:v,transport:Ut}).transport,u=n.endpoint,t=n.size,o=void 0===t?w:t,c=void 0===(n=n.wait)?y:n,f=[],a=0,{getSize:function(){return o},getWait:function(){return c},setSize:function(n){o=n},setWait:function(n){c=n},getEndpoint:function(){return u},setEndpoint:function(n){u=n},send:function(n){f.push(n),f.length>=o&&d.call(this),clearTimeout(a),a=setTimeout(d.bind(this),c)},flush:function(){clearTimeout(a),d.call(this)},getBatchData:function(){return f.length?p(f):""},clear:function(){clearTimeout(a),f=[]},fail:function(n){r=n}});function d(){var t;f.length&&(t=this.getBatchData(),i.post({url:u,data:t,fail:function(n){r&&r(n,t)}}),f=[])}return addEventListener("beforeunload",function(){var n=s.getBatchData();n&&navigator.sendBeacon(v,n),s.clear()}),e.d=v,function(n,t){var r,i;void 0===t&&(t=e),(n=e.bs&&n?e.bs(n):n)&&(r=It(Xt(Bt(Mt(n)),t),t),i=function(){return s.send(Nt.build(r))},n.ev_type?i():n.p=function(n){var t=q(n,2),n=t[0],t=t[1];r.ev_type=n,r.payload=t,i()})}}var It=function(n,t){var r=t.config,t={};return t.bid=r.bid,t.pid=r.pid,t.view_id=r.viewId,t.user_id=r.userId,t.device_id=r.deviceId,t.session_id=r.sessionId,t.release=r.release,t.env=r.env,x(x({},n),{extra:x(x({},t),n.extra||{})})},Xt=function(n,t){var r=t.ctx,t=t.config.context,t=void 0===t?{}:t;return n.extra.context=r?x(x({},t),r.toString()):t,n},Bt=function(n){var t=navigator.connection;return t&&(n.extra.network_type=t.effectiveType),n},Ut={post:function(n){var t=new XMLHttpRequest;t.open("POST",n.url),t.send(n.data)},get:function(){}},Ft=/(cookie|auth|jwt|token|key|ticket|secret|credential|session|password|x-tt-token)/i,Wt=/(bearer|session)/i,zt=function(n,t){return!(!n||!t)&&(Ft.test(n)||Wt.test(t))};function Jt(n){return n.split("\r\n").reduce(function(n,t){return n.concat([t.split(": ")])},[]).reduce(function(n,t){var r=q(t,2),i=r[0],t=r[1],r=void 0===t?"":t;return i&&!zt(i,r)?x(x({},n),((t={})[i]=r,t)):n},{})}function $t(n){var t=(r=q(n,2))[0],n=r[1],r="<unknown>";try{r=d(n.target||n)}catch(n){}return{category:"ui."+(0===t?"click":"keypress"),message:r,type:"dom",timestamp:Date.now()}}var Gt,Kt="performance_longtask";function Vt(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return n.reduce(function(r,n){return"function"==typeof Headers&&new Headers(n||{}).forEach(function(n,t){return!zt(t,n)&&(r[t]=n)}),r},{})}var Yt=["xmlhttprequest","fetch","beacon"];return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(r,n){return t.reduce(function(n,t){return t(r,n)},n)}}(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(u,n){return n&&u.s(function(r){function i(n){var n=(t=q(n,2))[0],t=t[1];return(n=e[n])&&n(t,u)}var e=t.reduce(function(n,t){var r=q(t,2),t=r[0],r=r[1];return n[t]=r,n},{});n.u(function(t){if(!c(t))return r(t),void(t.c=function(n){n=i(n);n&&(t.p||r)(n)});var n=i(t);n&&r({ev_type:n[0],payload:n[1]})})})}}([1,function(n,t){var r=q(n,4),i=r[0],e=r[1],u=r[2],o=r[3],c=i.a,f=i.e,a=void 0===f?{}:f,v=i.v,s=i.r,d=i.status,n=i.response,r=l(t,"ajax"),f=r.ignoreUrls,r=r.collectBodyOnError;if(t.d!==v&&!h(v,f)){v=m(v),r=r&&400<=d||void 0;return["http",{api:"ajax",request:x(x({headers:a,method:c},v),{timestamp:e,body:r&&""+s}),response:{status:d||0,timing:o,timestamp:e+u,is_custom_error:!1,headers:Jt(i.getAllResponseHeaders()),body:r&&""+n},duration:u}]}}],[3,function(n){return["performance",x({type:"perf"},n)]}],[2,function(n,t){var r=q(n,2),i=r[0],n=r[1],e=(r=i).reason||r.detail&&r.detail.reason||r.error;r=e,/\[object (Error|Exception|DOMException)\]/.test(o(r))||r instanceof Error||"string"==typeof(e="[object Object]"===o(e)?{message:JSON.stringify(e)}:e)&&(e={message:e});var u,r=l(t,"jsError"),t=r.ignoreErrors,r=r.dedupe;if(e&&!h(e.message,t))return u=e,e=["message","name","fileName","lineNumber","columnNumber","stack","stacktrace","framesToPop"].reduce(function(n,t){return n[t]=u[t],n},{}),!1===r||!Gt||["stack","message"].some(function(n){return e[n]!==Gt[n]})?["js_error",{error:Gt=e,timestamp:i.timeStamp,breadcrumbs:n&&n.map($t)||[]}]:void 0}],[0,function(n,t){var r=q(n,4),i=r[0],e=r[1],u=r[2],o=r[3],n=m(u),r=l(t,"resourceError"),t=r.ignoreUrls,r=r.includeUrls;if(!(r&&!h(u,r)||h(u,t)))return["resource_error",x(x({type:i},n),{url:u,timing:o,timestamp:e})]}],[4,function(n){n=q(n,2);return["pageview",{pid:n[0],source:n[1]}]}],[5,function(n){n=q(n,1)[0];return["performance_timing",{timing:performance.timing,navigation_timing:performance.getEntriesByType("navigation")[0],isBounced:n}]}],[6,function(n,t){t=t.config.sample;return!((!t||!t.rules[Kt])&&Math.random()<.01)&&[Kt,{type:"perf",longtasks:n}]}],[7,function(n,t){var r=q(n,6),i=r[0],e=r[1],u=r[2],o=r[3],c=r[4],f=r[5],a=(p=i).url||p,v=e||{},s=v.method,d=v.headers,n=v.body,r=c||{},p=r.headers,e=r.status,v=void 0===e?0:e,c=r.body,e=l(t,"fetch"),r=e.ignoreUrls,e=e.collectBodyOnError;if(a.match(/^(https?:|\/)/)&&t.d!==a&&!h(a,r)){a=m(a),e=e&&400<=v||void 0,n=e&&""+(i.body||n),c=e&&""+c;return["http",{api:"fetch",request:x(x({headers:Vt(i.headers,d),method:(i.method||s||"get").toLowerCase()},a),{timestamp:u,body:n}),response:{status:v,timing:f,timestamp:u+o,is_custom_error:!1,headers:Vt(p),body:c},duration:o}]}}],[8,function(n,t){return!Yt.includes(n.initiatorType)&&!h(n.name,l(t,"resource").ignoreUrls)&&["resource",n]}],[9,function(n){n=q(n,3);return["blank_screen",{timestamp:n[0],score:n[1],screenshot:n[2]}]}]),function(e,n){var t=e.plugin.sample;return t?t(e,n):n&&e.s(function(t){var r=new e.$,i=0;n.u(function(n){i||(e.h("sample",!!e.config.sample)(e,r).u(t),i=1),r.n(n)})})},function(r,n){r.cached=[];function t(n,t){r.manual&&r.cached?n&&r.cached.push(n):i(n,t)}var i=Pt(r);r.sender=t,r.onload&&r.onload(),n&&n.u(t)})}();