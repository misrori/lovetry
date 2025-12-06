var sp=e=>{throw TypeError(e)};var Vl=(e,t,n)=>t.has(e)||sp("Cannot "+n);var U=(e,t,n)=>(Vl(e,t,"read from private field"),n?n.call(e):t.get(e)),ve=(e,t,n)=>t.has(e)?sp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),ue=(e,t,n,r)=>(Vl(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),rt=(e,t,n)=>(Vl(e,t,"access private method"),n);var Cs=(e,t,n,r)=>({set _(i){ue(e,t,i,n)},get _(){return U(e,t,r)}});function Tv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sg={exports:{}},rl={},Dg={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ss=Symbol.for("react.element"),vv=Symbol.for("react.portal"),wv=Symbol.for("react.fragment"),Cv=Symbol.for("react.strict_mode"),xv=Symbol.for("react.profiler"),kv=Symbol.for("react.provider"),Av=Symbol.for("react.context"),Sv=Symbol.for("react.forward_ref"),Dv=Symbol.for("react.suspense"),_v=Symbol.for("react.memo"),Iv=Symbol.for("react.lazy"),up=Symbol.iterator;function Nv(e){return e===null||typeof e!="object"?null:(e=up&&e[up]||e["@@iterator"],typeof e=="function"?e:null)}var _g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ig=Object.assign,Ng={};function Na(e,t,n){this.props=e,this.context=t,this.refs=Ng,this.updater=n||_g}Na.prototype.isReactComponent={};Na.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Na.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lg(){}Lg.prototype=Na.prototype;function bf(e,t,n){this.props=e,this.context=t,this.refs=Ng,this.updater=n||_g}var Tf=bf.prototype=new Lg;Tf.constructor=bf;Ig(Tf,Na.prototype);Tf.isPureReactComponent=!0;var lp=Array.isArray,Og=Object.prototype.hasOwnProperty,vf={current:null},Rg={key:!0,ref:!0,__self:!0,__source:!0};function Pg(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Og.call(t,r)&&!Rg.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ss,type:e,key:a,ref:o,props:i,_owner:vf.current}}function Lv(e,t){return{$$typeof:ss,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function wf(e){return typeof e=="object"&&e!==null&&e.$$typeof===ss}function Ov(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var cp=/\/+/g;function $l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ov(""+e.key):t.toString(36)}function Xs(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ss:case vv:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+$l(o,0):r,lp(i)?(n="",e!=null&&(n=e.replace(cp,"$&/")+"/"),Xs(i,t,n,"",function(l){return l})):i!=null&&(wf(i)&&(i=Lv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cp,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",lp(e))for(var s=0;s<e.length;s++){a=e[s];var u=r+$l(a,s);o+=Xs(a,t,n,u,i)}else if(u=Nv(e),typeof u=="function")for(e=u.call(e),s=0;!(a=e.next()).done;)a=a.value,u=r+$l(a,s++),o+=Xs(a,t,n,u,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function xs(e,t,n){if(e==null)return e;var r=[],i=0;return Xs(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Rv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var bt={current:null},Js={transition:null},Pv={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:Js,ReactCurrentOwner:vf};function Fg(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:xs,forEach:function(e,t,n){xs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xs(e,function(){t++}),t},toArray:function(e){return xs(e,function(t){return t})||[]},only:function(e){if(!wf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=Na;me.Fragment=wv;me.Profiler=xv;me.PureComponent=bf;me.StrictMode=Cv;me.Suspense=Dv;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pv;me.act=Fg;me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ig({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=vf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Og.call(t,u)&&!Rg.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var l=0;l<u;l++)s[l]=arguments[l+2];r.children=s}return{$$typeof:ss,type:e.type,key:i,ref:a,props:r,_owner:o}};me.createContext=function(e){return e={$$typeof:Av,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kv,_context:e},e.Consumer=e};me.createElement=Pg;me.createFactory=function(e){var t=Pg.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:Sv,render:e}};me.isValidElement=wf;me.lazy=function(e){return{$$typeof:Iv,_payload:{_status:-1,_result:e},_init:Rv}};me.memo=function(e,t){return{$$typeof:_v,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=Js.transition;Js.transition={};try{e()}finally{Js.transition=t}};me.unstable_act=Fg;me.useCallback=function(e,t){return bt.current.useCallback(e,t)};me.useContext=function(e){return bt.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return bt.current.useDeferredValue(e)};me.useEffect=function(e,t){return bt.current.useEffect(e,t)};me.useId=function(){return bt.current.useId()};me.useImperativeHandle=function(e,t,n){return bt.current.useImperativeHandle(e,t,n)};me.useInsertionEffect=function(e,t){return bt.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return bt.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return bt.current.useMemo(e,t)};me.useReducer=function(e,t,n){return bt.current.useReducer(e,t,n)};me.useRef=function(e){return bt.current.useRef(e)};me.useState=function(e){return bt.current.useState(e)};me.useSyncExternalStore=function(e,t,n){return bt.current.useSyncExternalStore(e,t,n)};me.useTransition=function(){return bt.current.useTransition()};me.version="18.3.1";Dg.exports=me;var x=Dg.exports;const K=nl(x),Mg=Tv({__proto__:null,default:K},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=x,Mv=Symbol.for("react.element"),Bv=Symbol.for("react.fragment"),Uv=Object.prototype.hasOwnProperty,Hv=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jv={key:!0,ref:!0,__self:!0,__source:!0};function Bg(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Uv.call(t,r)&&!jv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Mv,type:e,key:a,ref:o,props:i,_owner:Hv.current}}rl.Fragment=Bv;rl.jsx=Bg;rl.jsxs=Bg;Sg.exports=rl;var _=Sg.exports,Ug={exports:{}},Yt={},Hg={exports:{}},jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,H){var w=F.length;F.push(H);e:for(;0<w;){var re=w-1>>>1,te=F[re];if(0<i(te,H))F[re]=H,F[w]=te,w=re;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],w=F.pop();if(w!==H){F[0]=w;e:for(var re=0,te=F.length,A=te>>>1;re<A;){var ae=2*(re+1)-1,Ce=F[ae],ye=ae+1,ge=F[ye];if(0>i(Ce,w))ye<te&&0>i(ge,Ce)?(F[re]=ge,F[ye]=w,re=ye):(F[re]=Ce,F[ae]=w,re=ae);else if(ye<te&&0>i(ge,w))F[re]=ge,F[ye]=w,re=ye;else break e}}return H}function i(F,H){var w=F.sortIndex-H.sortIndex;return w!==0?w:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],l=[],f=1,d=null,p=3,h=!1,g=!1,y=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(F){for(var H=n(l);H!==null;){if(H.callback===null)r(l);else if(H.startTime<=F)r(l),H.sortIndex=H.expirationTime,t(u,H);else break;H=n(l)}}function S(F){if(y=!1,b(F),!g)if(n(u)!==null)g=!0,ee(N);else{var H=n(l);H!==null&&ne(S,H.startTime-F)}}function N(F,H){g=!1,y&&(y=!1,m(M),M=-1),h=!0;var w=p;try{for(b(H),d=n(u);d!==null&&(!(d.expirationTime>H)||F&&!z());){var re=d.callback;if(typeof re=="function"){d.callback=null,p=d.priorityLevel;var te=re(d.expirationTime<=H);H=e.unstable_now(),typeof te=="function"?d.callback=te:d===n(u)&&r(u),b(H)}else r(u);d=n(u)}if(d!==null)var A=!0;else{var ae=n(l);ae!==null&&ne(S,ae.startTime-H),A=!1}return A}finally{d=null,p=w,h=!1}}var k=!1,O=null,M=-1,j=5,I=-1;function z(){return!(e.unstable_now()-I<j)}function B(){if(O!==null){var F=e.unstable_now();I=F;var H=!0;try{H=O(!0,F)}finally{H?J():(k=!1,O=null)}}else k=!1}var J;if(typeof E=="function")J=function(){E(B)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,X=Y.port2;Y.port1.onmessage=B,J=function(){X.postMessage(null)}}else J=function(){T(B,0)};function ee(F){O=F,k||(k=!0,J())}function ne(F,H){M=T(function(){F(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,ee(N))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(F){switch(p){case 1:case 2:case 3:var H=3;break;default:H=p}var w=p;p=H;try{return F()}finally{p=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var w=p;p=F;try{return H()}finally{p=w}},e.unstable_scheduleCallback=function(F,H,w){var re=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?re+w:re):w=re,F){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=w+te,F={id:f++,callback:H,priorityLevel:F,startTime:w,expirationTime:te,sortIndex:-1},w>re?(F.sortIndex=w,t(l,F),n(u)===null&&F===n(l)&&(y?(m(M),M=-1):y=!0,ne(S,w-re))):(F.sortIndex=te,t(u,F),g||h||(g=!0,ee(N))),F},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(F){var H=p;return function(){var w=p;p=H;try{return F.apply(this,arguments)}finally{p=w}}}})(jg);Hg.exports=jg;var zv=Hg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv=x,Wt=zv;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zg=new Set,No={};function Ni(e,t){ba(e,t),ba(e+"Capture",t)}function ba(e,t){for(No[e]=t,e=0;e<t.length;e++)zg.add(t[e])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=Object.prototype.hasOwnProperty,Yv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dp={},fp={};function Vv(e){return Yc.call(fp,e)?!0:Yc.call(dp,e)?!1:Yv.test(e)?fp[e]=!0:(dp[e]=!0,!1)}function $v(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qv(e,t,n,r){if(t===null||typeof t>"u"||$v(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Tt(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nt[e]=new Tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nt[t]=new Tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nt[e]=new Tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nt[e]=new Tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nt[e]=new Tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nt[e]=new Tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nt[e]=new Tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nt[e]=new Tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nt[e]=new Tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cf=/[\-:]([a-z])/g;function xf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cf,xf);nt[t]=new Tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cf,xf);nt[t]=new Tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cf,xf);nt[t]=new Tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nt[e]=new Tt(e,1,!1,e.toLowerCase(),null,!1,!1)});nt.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nt[e]=new Tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function kf(e,t,n,r){var i=nt.hasOwnProperty(t)?nt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qv(t,n,i,r)&&(n=null),r||i===null?Vv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var or=Wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ks=Symbol.for("react.element"),zi=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),Af=Symbol.for("react.strict_mode"),Vc=Symbol.for("react.profiler"),Wg=Symbol.for("react.provider"),Yg=Symbol.for("react.context"),Sf=Symbol.for("react.forward_ref"),$c=Symbol.for("react.suspense"),qc=Symbol.for("react.suspense_list"),Df=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),Vg=Symbol.for("react.offscreen"),hp=Symbol.iterator;function qa(e){return e===null||typeof e!="object"?null:(e=hp&&e[hp]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,ql;function so(e){if(ql===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ql=t&&t[1]||""}return`
`+ql+e}var Ql=!1;function Gl(e,t){if(!e||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?so(e):""}function Qv(e){switch(e.tag){case 5:return so(e.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return e=Gl(e.type,!1),e;case 11:return e=Gl(e.type.render,!1),e;case 1:return e=Gl(e.type,!0),e;default:return""}}function Qc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wi:return"Fragment";case zi:return"Portal";case Vc:return"Profiler";case Af:return"StrictMode";case $c:return"Suspense";case qc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yg:return(e.displayName||"Context")+".Consumer";case Wg:return(e._context.displayName||"Context")+".Provider";case Sf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Df:return t=e.displayName||null,t!==null?t:Qc(e.type)||"Memo";case wr:t=e._payload,e=e._init;try{return Qc(e(t))}catch{}}return null}function Gv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qc(t);case 8:return t===Af?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $g(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kv(e){var t=$g(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function As(e){e._valueTracker||(e._valueTracker=Kv(e))}function qg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$g(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Eu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gc(e,t){var n=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qg(e,t){t=t.checked,t!=null&&kf(e,"checked",t,!1)}function Kc(e,t){Qg(e,t);var n=Yr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xc(e,t.type,Yr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xc(e,t,n){(t!=="number"||Eu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var uo=Array.isArray;function ta(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(uo(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yr(n)}}function Gg(e,t){var n=Yr(t.value),r=Yr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ss,Xg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ss=Ss||document.createElement("div"),Ss.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ss.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xv=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(e){Xv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ho[t]=ho[e]})});function Jg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ho.hasOwnProperty(e)&&ho[e]?(""+t).trim():t+"px"}function Zg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Jv=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ed(e,t){if(t){if(Jv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function td(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nd=null;function _f(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rd=null,na=null,ra=null;function Ep(e){if(e=cs(e)){if(typeof rd!="function")throw Error($(280));var t=e.stateNode;t&&(t=ul(t),rd(e.stateNode,e.type,t))}}function e1(e){na?ra?ra.push(e):ra=[e]:na=e}function t1(){if(na){var e=na,t=ra;if(ra=na=null,Ep(e),t)for(e=0;e<t.length;e++)Ep(t[e])}}function n1(e,t){return e(t)}function r1(){}var Kl=!1;function i1(e,t,n){if(Kl)return e(t,n);Kl=!0;try{return n1(e,t,n)}finally{Kl=!1,(na!==null||ra!==null)&&(r1(),t1())}}function Oo(e,t){var n=e.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var id=!1;if(er)try{var Qa={};Object.defineProperty(Qa,"passive",{get:function(){id=!0}}),window.addEventListener("test",Qa,Qa),window.removeEventListener("test",Qa,Qa)}catch{id=!1}function Zv(e,t,n,r,i,a,o,s,u){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(f){this.onError(f)}}var po=!1,bu=null,Tu=!1,ad=null,ew={onError:function(e){po=!0,bu=e}};function tw(e,t,n,r,i,a,o,s,u){po=!1,bu=null,Zv.apply(ew,arguments)}function nw(e,t,n,r,i,a,o,s,u){if(tw.apply(this,arguments),po){if(po){var l=bu;po=!1,bu=null}else throw Error($(198));Tu||(Tu=!0,ad=l)}}function Li(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function a1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bp(e){if(Li(e)!==e)throw Error($(188))}function rw(e){var t=e.alternate;if(!t){if(t=Li(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return bp(i),e;if(a===r)return bp(i),t;a=a.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function o1(e){return e=rw(e),e!==null?s1(e):null}function s1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=s1(e);if(t!==null)return t;e=e.sibling}return null}var u1=Wt.unstable_scheduleCallback,Tp=Wt.unstable_cancelCallback,iw=Wt.unstable_shouldYield,aw=Wt.unstable_requestPaint,He=Wt.unstable_now,ow=Wt.unstable_getCurrentPriorityLevel,If=Wt.unstable_ImmediatePriority,l1=Wt.unstable_UserBlockingPriority,vu=Wt.unstable_NormalPriority,sw=Wt.unstable_LowPriority,c1=Wt.unstable_IdlePriority,il=null,Fn=null;function uw(e){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(il,e,void 0,(e.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:dw,lw=Math.log,cw=Math.LN2;function dw(e){return e>>>=0,e===0?32:31-(lw(e)/cw|0)|0}var Ds=64,_s=4194304;function lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=lo(s):(a&=o,a!==0&&(r=lo(a)))}else o=n&~i,o!==0?r=lo(o):a!==0&&(r=lo(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gn(t),i=1<<n,r|=e[n],t&=~i;return r}function fw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-gn(a),s=1<<o,u=i[o];u===-1?(!(s&n)||s&r)&&(i[o]=fw(s,t)):u<=t&&(e.expiredLanes|=s),a&=~s}}function od(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function d1(){var e=Ds;return Ds<<=1,!(Ds&4194240)&&(Ds=64),e}function Xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function us(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gn(t),e[t]=n}function pw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-gn(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Nf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var we=0;function f1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var h1,Lf,p1,m1,g1,sd=!1,Is=[],Pr=null,Fr=null,Mr=null,Ro=new Map,Po=new Map,xr=[],mw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vp(e,t){switch(e){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":Ro.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(t.pointerId)}}function Ga(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=cs(t),t!==null&&Lf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function gw(e,t,n,r,i){switch(t){case"focusin":return Pr=Ga(Pr,e,t,n,r,i),!0;case"dragenter":return Fr=Ga(Fr,e,t,n,r,i),!0;case"mouseover":return Mr=Ga(Mr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Ro.set(a,Ga(Ro.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Po.set(a,Ga(Po.get(a)||null,e,t,n,r,i)),!0}return!1}function y1(e){var t=di(e.target);if(t!==null){var n=Li(t);if(n!==null){if(t=n.tag,t===13){if(t=a1(n),t!==null){e.blockedOn=t,g1(e.priority,function(){p1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ud(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nd=r,n.target.dispatchEvent(r),nd=null}else return t=cs(n),t!==null&&Lf(t),e.blockedOn=n,!1;t.shift()}return!0}function wp(e,t,n){Zs(e)&&n.delete(t)}function yw(){sd=!1,Pr!==null&&Zs(Pr)&&(Pr=null),Fr!==null&&Zs(Fr)&&(Fr=null),Mr!==null&&Zs(Mr)&&(Mr=null),Ro.forEach(wp),Po.forEach(wp)}function Ka(e,t){e.blockedOn===t&&(e.blockedOn=null,sd||(sd=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,yw)))}function Fo(e){function t(i){return Ka(i,e)}if(0<Is.length){Ka(Is[0],e);for(var n=1;n<Is.length;n++){var r=Is[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pr!==null&&Ka(Pr,e),Fr!==null&&Ka(Fr,e),Mr!==null&&Ka(Mr,e),Ro.forEach(t),Po.forEach(t),n=0;n<xr.length;n++)r=xr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)y1(n),n.blockedOn===null&&xr.shift()}var ia=or.ReactCurrentBatchConfig,Cu=!0;function Ew(e,t,n,r){var i=we,a=ia.transition;ia.transition=null;try{we=1,Of(e,t,n,r)}finally{we=i,ia.transition=a}}function bw(e,t,n,r){var i=we,a=ia.transition;ia.transition=null;try{we=4,Of(e,t,n,r)}finally{we=i,ia.transition=a}}function Of(e,t,n,r){if(Cu){var i=ud(e,t,n,r);if(i===null)sc(e,t,r,xu,n),vp(e,r);else if(gw(i,e,t,n,r))r.stopPropagation();else if(vp(e,r),t&4&&-1<mw.indexOf(e)){for(;i!==null;){var a=cs(i);if(a!==null&&h1(a),a=ud(e,t,n,r),a===null&&sc(e,t,r,xu,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else sc(e,t,r,null,n)}}var xu=null;function ud(e,t,n,r){if(xu=null,e=_f(r),e=di(e),e!==null)if(t=Li(e),t===null)e=null;else if(n=t.tag,n===13){if(e=a1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xu=e,null}function E1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ow()){case If:return 1;case l1:return 4;case vu:case sw:return 16;case c1:return 536870912;default:return 16}default:return 16}}var Nr=null,Rf=null,eu=null;function b1(){if(eu)return eu;var e,t=Rf,n=t.length,r,i="value"in Nr?Nr.value:Nr.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return eu=i.slice(e,1<r?1-r:void 0)}function tu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ns(){return!0}function Cp(){return!1}function Vt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ns:Cp,this.isPropagationStopped=Cp,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ns)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ns)},persist:function(){},isPersistent:Ns}),t}var La={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pf=Vt(La),ls=Me({},La,{view:0,detail:0}),Tw=Vt(ls),Jl,Zl,Xa,al=Me({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ff,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xa&&(Xa&&e.type==="mousemove"?(Jl=e.screenX-Xa.screenX,Zl=e.screenY-Xa.screenY):Zl=Jl=0,Xa=e),Jl)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),xp=Vt(al),vw=Me({},al,{dataTransfer:0}),ww=Vt(vw),Cw=Me({},ls,{relatedTarget:0}),ec=Vt(Cw),xw=Me({},La,{animationName:0,elapsedTime:0,pseudoElement:0}),kw=Vt(xw),Aw=Me({},La,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sw=Vt(Aw),Dw=Me({},La,{data:0}),kp=Vt(Dw),_w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nw[e])?!!t[e]:!1}function Ff(){return Lw}var Ow=Me({},ls,{key:function(e){if(e.key){var t=_w[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Iw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ff,charCode:function(e){return e.type==="keypress"?tu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rw=Vt(Ow),Pw=Me({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ap=Vt(Pw),Fw=Me({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ff}),Mw=Vt(Fw),Bw=Me({},La,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uw=Vt(Bw),Hw=Me({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jw=Vt(Hw),zw=[9,13,27,32],Mf=er&&"CompositionEvent"in window,mo=null;er&&"documentMode"in document&&(mo=document.documentMode);var Ww=er&&"TextEvent"in window&&!mo,T1=er&&(!Mf||mo&&8<mo&&11>=mo),Sp=" ",Dp=!1;function v1(e,t){switch(e){case"keyup":return zw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yi=!1;function Yw(e,t){switch(e){case"compositionend":return w1(t);case"keypress":return t.which!==32?null:(Dp=!0,Sp);case"textInput":return e=t.data,e===Sp&&Dp?null:e;default:return null}}function Vw(e,t){if(Yi)return e==="compositionend"||!Mf&&v1(e,t)?(e=b1(),eu=Rf=Nr=null,Yi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return T1&&t.locale!=="ko"?null:t.data;default:return null}}var $w={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$w[e.type]:t==="textarea"}function C1(e,t,n,r){e1(r),t=ku(t,"onChange"),0<t.length&&(n=new Pf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var go=null,Mo=null;function qw(e){R1(e,0)}function ol(e){var t=qi(e);if(qg(t))return e}function Qw(e,t){if(e==="change")return t}var x1=!1;if(er){var tc;if(er){var nc="oninput"in document;if(!nc){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),nc=typeof Ip.oninput=="function"}tc=nc}else tc=!1;x1=tc&&(!document.documentMode||9<document.documentMode)}function Np(){go&&(go.detachEvent("onpropertychange",k1),Mo=go=null)}function k1(e){if(e.propertyName==="value"&&ol(Mo)){var t=[];C1(t,Mo,e,_f(e)),i1(qw,t)}}function Gw(e,t,n){e==="focusin"?(Np(),go=t,Mo=n,go.attachEvent("onpropertychange",k1)):e==="focusout"&&Np()}function Kw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(Mo)}function Xw(e,t){if(e==="click")return ol(t)}function Jw(e,t){if(e==="input"||e==="change")return ol(t)}function Zw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bn=typeof Object.is=="function"?Object.is:Zw;function Bo(e,t){if(bn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yc.call(t,i)||!bn(e[i],t[i]))return!1}return!0}function Lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Op(e,t){var n=Lp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lp(n)}}function A1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?A1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function S1(){for(var e=window,t=Eu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Eu(e.document)}return t}function Bf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function eC(e){var t=S1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&A1(n.ownerDocument.documentElement,n)){if(r!==null&&Bf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Op(n,a);var o=Op(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tC=er&&"documentMode"in document&&11>=document.documentMode,Vi=null,ld=null,yo=null,cd=!1;function Rp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cd||Vi==null||Vi!==Eu(r)||(r=Vi,"selectionStart"in r&&Bf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yo&&Bo(yo,r)||(yo=r,r=ku(ld,"onSelect"),0<r.length&&(t=new Pf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vi)))}function Ls(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $i={animationend:Ls("Animation","AnimationEnd"),animationiteration:Ls("Animation","AnimationIteration"),animationstart:Ls("Animation","AnimationStart"),transitionend:Ls("Transition","TransitionEnd")},rc={},D1={};er&&(D1=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function sl(e){if(rc[e])return rc[e];if(!$i[e])return e;var t=$i[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in D1)return rc[e]=t[n];return e}var _1=sl("animationend"),I1=sl("animationiteration"),N1=sl("animationstart"),L1=sl("transitionend"),O1=new Map,Pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(e,t){O1.set(e,t),Ni(t,[e])}for(var ic=0;ic<Pp.length;ic++){var ac=Pp[ic],nC=ac.toLowerCase(),rC=ac[0].toUpperCase()+ac.slice(1);Kr(nC,"on"+rC)}Kr(_1,"onAnimationEnd");Kr(I1,"onAnimationIteration");Kr(N1,"onAnimationStart");Kr("dblclick","onDoubleClick");Kr("focusin","onFocus");Kr("focusout","onBlur");Kr(L1,"onTransitionEnd");ba("onMouseEnter",["mouseout","mouseover"]);ba("onMouseLeave",["mouseout","mouseover"]);ba("onPointerEnter",["pointerout","pointerover"]);ba("onPointerLeave",["pointerout","pointerover"]);Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iC=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Fp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nw(r,t,void 0,e),e.currentTarget=null}function R1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,l=s.currentTarget;if(s=s.listener,u!==a&&i.isPropagationStopped())break e;Fp(i,s,l),a=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,l=s.currentTarget,s=s.listener,u!==a&&i.isPropagationStopped())break e;Fp(i,s,l),a=u}}}if(Tu)throw e=ad,Tu=!1,ad=null,e}function Ie(e,t){var n=t[md];n===void 0&&(n=t[md]=new Set);var r=e+"__bubble";n.has(r)||(P1(t,e,2,!1),n.add(r))}function oc(e,t,n){var r=0;t&&(r|=4),P1(n,e,r,t)}var Os="_reactListening"+Math.random().toString(36).slice(2);function Uo(e){if(!e[Os]){e[Os]=!0,zg.forEach(function(n){n!=="selectionchange"&&(iC.has(n)||oc(n,!1,e),oc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Os]||(t[Os]=!0,oc("selectionchange",!1,t))}}function P1(e,t,n,r){switch(E1(t)){case 1:var i=Ew;break;case 4:i=bw;break;default:i=Of}n=i.bind(null,t,n,e),i=void 0,!id||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function sc(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;s!==null;){if(o=di(s),o===null)return;if(u=o.tag,u===5||u===6){r=a=o;continue e}s=s.parentNode}}r=r.return}i1(function(){var l=a,f=_f(n),d=[];e:{var p=O1.get(e);if(p!==void 0){var h=Pf,g=e;switch(e){case"keypress":if(tu(n)===0)break e;case"keydown":case"keyup":h=Rw;break;case"focusin":g="focus",h=ec;break;case"focusout":g="blur",h=ec;break;case"beforeblur":case"afterblur":h=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=ww;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Mw;break;case _1:case I1:case N1:h=kw;break;case L1:h=Uw;break;case"scroll":h=Tw;break;case"wheel":h=jw;break;case"copy":case"cut":case"paste":h=Sw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ap}var y=(t&4)!==0,T=!y&&e==="scroll",m=y?p!==null?p+"Capture":null:p;y=[];for(var E=l,b;E!==null;){b=E;var S=b.stateNode;if(b.tag===5&&S!==null&&(b=S,m!==null&&(S=Oo(E,m),S!=null&&y.push(Ho(E,S,b)))),T)break;E=E.return}0<y.length&&(p=new h(p,g,null,n,f),d.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==nd&&(g=n.relatedTarget||n.fromElement)&&(di(g)||g[tr]))break e;if((h||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=l,g=g?di(g):null,g!==null&&(T=Li(g),g!==T||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=l),h!==g)){if(y=xp,S="onMouseLeave",m="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ap,S="onPointerLeave",m="onPointerEnter",E="pointer"),T=h==null?p:qi(h),b=g==null?p:qi(g),p=new y(S,E+"leave",h,n,f),p.target=T,p.relatedTarget=b,S=null,di(f)===l&&(y=new y(m,E+"enter",g,n,f),y.target=b,y.relatedTarget=T,S=y),T=S,h&&g)t:{for(y=h,m=g,E=0,b=y;b;b=Ui(b))E++;for(b=0,S=m;S;S=Ui(S))b++;for(;0<E-b;)y=Ui(y),E--;for(;0<b-E;)m=Ui(m),b--;for(;E--;){if(y===m||m!==null&&y===m.alternate)break t;y=Ui(y),m=Ui(m)}y=null}else y=null;h!==null&&Mp(d,p,h,y,!1),g!==null&&T!==null&&Mp(d,T,g,y,!0)}}e:{if(p=l?qi(l):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var N=Qw;else if(_p(p))if(x1)N=Jw;else{N=Kw;var k=Gw}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(N=Xw);if(N&&(N=N(e,l))){C1(d,N,n,f);break e}k&&k(e,p,l),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&Xc(p,"number",p.value)}switch(k=l?qi(l):window,e){case"focusin":(_p(k)||k.contentEditable==="true")&&(Vi=k,ld=l,yo=null);break;case"focusout":yo=ld=Vi=null;break;case"mousedown":cd=!0;break;case"contextmenu":case"mouseup":case"dragend":cd=!1,Rp(d,n,f);break;case"selectionchange":if(tC)break;case"keydown":case"keyup":Rp(d,n,f)}var O;if(Mf)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Yi?v1(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(T1&&n.locale!=="ko"&&(Yi||M!=="onCompositionStart"?M==="onCompositionEnd"&&Yi&&(O=b1()):(Nr=f,Rf="value"in Nr?Nr.value:Nr.textContent,Yi=!0)),k=ku(l,M),0<k.length&&(M=new kp(M,e,null,n,f),d.push({event:M,listeners:k}),O?M.data=O:(O=w1(n),O!==null&&(M.data=O)))),(O=Ww?Yw(e,n):Vw(e,n))&&(l=ku(l,"onBeforeInput"),0<l.length&&(f=new kp("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:l}),f.data=O))}R1(d,t)})}function Ho(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ku(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Oo(e,n),a!=null&&r.unshift(Ho(e,a,i)),a=Oo(e,t),a!=null&&r.push(Ho(e,a,i))),e=e.return}return r}function Ui(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mp(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,l=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&l!==null&&(s=l,i?(u=Oo(n,a),u!=null&&o.unshift(Ho(n,u,s))):i||(u=Oo(n,a),u!=null&&o.push(Ho(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var aC=/\r\n?/g,oC=/\u0000|\uFFFD/g;function Bp(e){return(typeof e=="string"?e:""+e).replace(aC,`
`).replace(oC,"")}function Rs(e,t,n){if(t=Bp(t),Bp(e)!==t&&n)throw Error($(425))}function Au(){}var dd=null,fd=null;function hd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pd=typeof setTimeout=="function"?setTimeout:void 0,sC=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,uC=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(e){return Up.resolve(null).then(e).catch(lC)}:pd;function lC(e){setTimeout(function(){throw e})}function uc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fo(t)}function Br(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Oa=Math.random().toString(36).slice(2),Rn="__reactFiber$"+Oa,jo="__reactProps$"+Oa,tr="__reactContainer$"+Oa,md="__reactEvents$"+Oa,cC="__reactListeners$"+Oa,dC="__reactHandles$"+Oa;function di(e){var t=e[Rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tr]||n[Rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hp(e);e!==null;){if(n=e[Rn])return n;e=Hp(e)}return t}e=n,n=e.parentNode}return null}function cs(e){return e=e[Rn]||e[tr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function ul(e){return e[jo]||null}var gd=[],Qi=-1;function Xr(e){return{current:e}}function Ne(e){0>Qi||(e.current=gd[Qi],gd[Qi]=null,Qi--)}function De(e,t){Qi++,gd[Qi]=e.current,e.current=t}var Vr={},lt=Xr(Vr),St=Xr(!1),xi=Vr;function Ta(e,t){var n=e.type.contextTypes;if(!n)return Vr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Dt(e){return e=e.childContextTypes,e!=null}function Su(){Ne(St),Ne(lt)}function jp(e,t,n){if(lt.current!==Vr)throw Error($(168));De(lt,t),De(St,n)}function F1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error($(108,Gv(e)||"Unknown",i));return Me({},n,r)}function Du(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vr,xi=lt.current,De(lt,e),De(St,St.current),!0}function zp(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=F1(e,t,xi),r.__reactInternalMemoizedMergedChildContext=e,Ne(St),Ne(lt),De(lt,e)):Ne(St),De(St,n)}var Qn=null,ll=!1,lc=!1;function M1(e){Qn===null?Qn=[e]:Qn.push(e)}function fC(e){ll=!0,M1(e)}function Jr(){if(!lc&&Qn!==null){lc=!0;var e=0,t=we;try{var n=Qn;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qn=null,ll=!1}catch(i){throw Qn!==null&&(Qn=Qn.slice(e+1)),u1(If,Jr),i}finally{we=t,lc=!1}}return null}var Gi=[],Ki=0,_u=null,Iu=0,Qt=[],Gt=0,ki=null,Xn=1,Jn="";function ui(e,t){Gi[Ki++]=Iu,Gi[Ki++]=_u,_u=e,Iu=t}function B1(e,t,n){Qt[Gt++]=Xn,Qt[Gt++]=Jn,Qt[Gt++]=ki,ki=e;var r=Xn;e=Jn;var i=32-gn(r)-1;r&=~(1<<i),n+=1;var a=32-gn(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xn=1<<32-gn(t)+i|n<<i|r,Jn=a+e}else Xn=1<<a|n<<i|r,Jn=e}function Uf(e){e.return!==null&&(ui(e,1),B1(e,1,0))}function Hf(e){for(;e===_u;)_u=Gi[--Ki],Gi[Ki]=null,Iu=Gi[--Ki],Gi[Ki]=null;for(;e===ki;)ki=Qt[--Gt],Qt[Gt]=null,Jn=Qt[--Gt],Qt[Gt]=null,Xn=Qt[--Gt],Qt[Gt]=null}var Ht=null,Ut=null,Re=!1,mn=null;function U1(e,t){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ht=e,Ut=Br(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ht=e,Ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ki!==null?{id:Xn,overflow:Jn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ht=e,Ut=null,!0):!1;default:return!1}}function yd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ed(e){if(Re){var t=Ut;if(t){var n=t;if(!Wp(e,t)){if(yd(e))throw Error($(418));t=Br(n.nextSibling);var r=Ht;t&&Wp(e,t)?U1(r,n):(e.flags=e.flags&-4097|2,Re=!1,Ht=e)}}else{if(yd(e))throw Error($(418));e.flags=e.flags&-4097|2,Re=!1,Ht=e}}}function Yp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ht=e}function Ps(e){if(e!==Ht)return!1;if(!Re)return Yp(e),Re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hd(e.type,e.memoizedProps)),t&&(t=Ut)){if(yd(e))throw H1(),Error($(418));for(;t;)U1(e,t),t=Br(t.nextSibling)}if(Yp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ut=Br(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ut=null}}else Ut=Ht?Br(e.stateNode.nextSibling):null;return!0}function H1(){for(var e=Ut;e;)e=Br(e.nextSibling)}function va(){Ut=Ht=null,Re=!1}function jf(e){mn===null?mn=[e]:mn.push(e)}var hC=or.ReactCurrentBatchConfig;function Ja(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function Fs(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vp(e){var t=e._init;return t(e._payload)}function j1(e){function t(m,E){if(e){var b=m.deletions;b===null?(m.deletions=[E],m.flags|=16):b.push(E)}}function n(m,E){if(!e)return null;for(;E!==null;)t(m,E),E=E.sibling;return null}function r(m,E){for(m=new Map;E!==null;)E.key!==null?m.set(E.key,E):m.set(E.index,E),E=E.sibling;return m}function i(m,E){return m=zr(m,E),m.index=0,m.sibling=null,m}function a(m,E,b){return m.index=b,e?(b=m.alternate,b!==null?(b=b.index,b<E?(m.flags|=2,E):b):(m.flags|=2,E)):(m.flags|=1048576,E)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,E,b,S){return E===null||E.tag!==6?(E=gc(b,m.mode,S),E.return=m,E):(E=i(E,b),E.return=m,E)}function u(m,E,b,S){var N=b.type;return N===Wi?f(m,E,b.props.children,S,b.key):E!==null&&(E.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===wr&&Vp(N)===E.type)?(S=i(E,b.props),S.ref=Ja(m,E,b),S.return=m,S):(S=uu(b.type,b.key,b.props,null,m.mode,S),S.ref=Ja(m,E,b),S.return=m,S)}function l(m,E,b,S){return E===null||E.tag!==4||E.stateNode.containerInfo!==b.containerInfo||E.stateNode.implementation!==b.implementation?(E=yc(b,m.mode,S),E.return=m,E):(E=i(E,b.children||[]),E.return=m,E)}function f(m,E,b,S,N){return E===null||E.tag!==7?(E=wi(b,m.mode,S,N),E.return=m,E):(E=i(E,b),E.return=m,E)}function d(m,E,b){if(typeof E=="string"&&E!==""||typeof E=="number")return E=gc(""+E,m.mode,b),E.return=m,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ks:return b=uu(E.type,E.key,E.props,null,m.mode,b),b.ref=Ja(m,null,E),b.return=m,b;case zi:return E=yc(E,m.mode,b),E.return=m,E;case wr:var S=E._init;return d(m,S(E._payload),b)}if(uo(E)||qa(E))return E=wi(E,m.mode,b,null),E.return=m,E;Fs(m,E)}return null}function p(m,E,b,S){var N=E!==null?E.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return N!==null?null:s(m,E,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ks:return b.key===N?u(m,E,b,S):null;case zi:return b.key===N?l(m,E,b,S):null;case wr:return N=b._init,p(m,E,N(b._payload),S)}if(uo(b)||qa(b))return N!==null?null:f(m,E,b,S,null);Fs(m,b)}return null}function h(m,E,b,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(b)||null,s(E,m,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ks:return m=m.get(S.key===null?b:S.key)||null,u(E,m,S,N);case zi:return m=m.get(S.key===null?b:S.key)||null,l(E,m,S,N);case wr:var k=S._init;return h(m,E,b,k(S._payload),N)}if(uo(S)||qa(S))return m=m.get(b)||null,f(E,m,S,N,null);Fs(E,S)}return null}function g(m,E,b,S){for(var N=null,k=null,O=E,M=E=0,j=null;O!==null&&M<b.length;M++){O.index>M?(j=O,O=null):j=O.sibling;var I=p(m,O,b[M],S);if(I===null){O===null&&(O=j);break}e&&O&&I.alternate===null&&t(m,O),E=a(I,E,M),k===null?N=I:k.sibling=I,k=I,O=j}if(M===b.length)return n(m,O),Re&&ui(m,M),N;if(O===null){for(;M<b.length;M++)O=d(m,b[M],S),O!==null&&(E=a(O,E,M),k===null?N=O:k.sibling=O,k=O);return Re&&ui(m,M),N}for(O=r(m,O);M<b.length;M++)j=h(O,m,M,b[M],S),j!==null&&(e&&j.alternate!==null&&O.delete(j.key===null?M:j.key),E=a(j,E,M),k===null?N=j:k.sibling=j,k=j);return e&&O.forEach(function(z){return t(m,z)}),Re&&ui(m,M),N}function y(m,E,b,S){var N=qa(b);if(typeof N!="function")throw Error($(150));if(b=N.call(b),b==null)throw Error($(151));for(var k=N=null,O=E,M=E=0,j=null,I=b.next();O!==null&&!I.done;M++,I=b.next()){O.index>M?(j=O,O=null):j=O.sibling;var z=p(m,O,I.value,S);if(z===null){O===null&&(O=j);break}e&&O&&z.alternate===null&&t(m,O),E=a(z,E,M),k===null?N=z:k.sibling=z,k=z,O=j}if(I.done)return n(m,O),Re&&ui(m,M),N;if(O===null){for(;!I.done;M++,I=b.next())I=d(m,I.value,S),I!==null&&(E=a(I,E,M),k===null?N=I:k.sibling=I,k=I);return Re&&ui(m,M),N}for(O=r(m,O);!I.done;M++,I=b.next())I=h(O,m,M,I.value,S),I!==null&&(e&&I.alternate!==null&&O.delete(I.key===null?M:I.key),E=a(I,E,M),k===null?N=I:k.sibling=I,k=I);return e&&O.forEach(function(B){return t(m,B)}),Re&&ui(m,M),N}function T(m,E,b,S){if(typeof b=="object"&&b!==null&&b.type===Wi&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ks:e:{for(var N=b.key,k=E;k!==null;){if(k.key===N){if(N=b.type,N===Wi){if(k.tag===7){n(m,k.sibling),E=i(k,b.props.children),E.return=m,m=E;break e}}else if(k.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===wr&&Vp(N)===k.type){n(m,k.sibling),E=i(k,b.props),E.ref=Ja(m,k,b),E.return=m,m=E;break e}n(m,k);break}else t(m,k);k=k.sibling}b.type===Wi?(E=wi(b.props.children,m.mode,S,b.key),E.return=m,m=E):(S=uu(b.type,b.key,b.props,null,m.mode,S),S.ref=Ja(m,E,b),S.return=m,m=S)}return o(m);case zi:e:{for(k=b.key;E!==null;){if(E.key===k)if(E.tag===4&&E.stateNode.containerInfo===b.containerInfo&&E.stateNode.implementation===b.implementation){n(m,E.sibling),E=i(E,b.children||[]),E.return=m,m=E;break e}else{n(m,E);break}else t(m,E);E=E.sibling}E=yc(b,m.mode,S),E.return=m,m=E}return o(m);case wr:return k=b._init,T(m,E,k(b._payload),S)}if(uo(b))return g(m,E,b,S);if(qa(b))return y(m,E,b,S);Fs(m,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,E!==null&&E.tag===6?(n(m,E.sibling),E=i(E,b),E.return=m,m=E):(n(m,E),E=gc(b,m.mode,S),E.return=m,m=E),o(m)):n(m,E)}return T}var wa=j1(!0),z1=j1(!1),Nu=Xr(null),Lu=null,Xi=null,zf=null;function Wf(){zf=Xi=Lu=null}function Yf(e){var t=Nu.current;Ne(Nu),e._currentValue=t}function bd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function aa(e,t){Lu=e,zf=Xi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(At=!0),e.firstContext=null)}function en(e){var t=e._currentValue;if(zf!==e)if(e={context:e,memoizedValue:t,next:null},Xi===null){if(Lu===null)throw Error($(308));Xi=e,Lu.dependencies={lanes:0,firstContext:e}}else Xi=Xi.next=e;return t}var fi=null;function Vf(e){fi===null?fi=[e]:fi.push(e)}function W1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Vf(t)):(n.next=i.next,i.next=n),t.interleaved=n,nr(e,r)}function nr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Cr=!1;function $f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ur(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,be&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nr(e,n)}return i=r.interleaved,i===null?(t.next=t,Vf(r)):(t.next=i.next,i.next=t),r.interleaved=t,nr(e,n)}function nu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nf(e,n)}}function $p(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ou(e,t,n,r){var i=e.updateQueue;Cr=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,l=u.next;u.next=null,o===null?a=l:o.next=l,o=u;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=l:s.next=l,f.lastBaseUpdate=u))}if(a!==null){var d=i.baseState;o=0,f=l=u=null,s=a;do{var p=s.lane,h=s.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,y=s;switch(p=t,h=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(h,d,p);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,p=typeof g=="function"?g.call(h,d,p):g,p==null)break e;d=Me({},d,p);break e;case 2:Cr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(l=f=h,u=d):f=f.next=h,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(u=d),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Si|=o,e.lanes=o,e.memoizedState=d}}function qp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var ds={},Mn=Xr(ds),zo=Xr(ds),Wo=Xr(ds);function hi(e){if(e===ds)throw Error($(174));return e}function qf(e,t){switch(De(Wo,t),De(zo,e),De(Mn,ds),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zc(t,e)}Ne(Mn),De(Mn,t)}function Ca(){Ne(Mn),Ne(zo),Ne(Wo)}function V1(e){hi(Wo.current);var t=hi(Mn.current),n=Zc(t,e.type);t!==n&&(De(zo,e),De(Mn,n))}function Qf(e){zo.current===e&&(Ne(Mn),Ne(zo))}var Pe=Xr(0);function Ru(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cc=[];function Gf(){for(var e=0;e<cc.length;e++)cc[e]._workInProgressVersionPrimary=null;cc.length=0}var ru=or.ReactCurrentDispatcher,dc=or.ReactCurrentBatchConfig,Ai=0,Fe=null,qe=null,Xe=null,Pu=!1,Eo=!1,Yo=0,pC=0;function it(){throw Error($(321))}function Kf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bn(e[n],t[n]))return!1;return!0}function Xf(e,t,n,r,i,a){if(Ai=a,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ru.current=e===null||e.memoizedState===null?EC:bC,e=n(r,i),Eo){a=0;do{if(Eo=!1,Yo=0,25<=a)throw Error($(301));a+=1,Xe=qe=null,t.updateQueue=null,ru.current=TC,e=n(r,i)}while(Eo)}if(ru.current=Fu,t=qe!==null&&qe.next!==null,Ai=0,Xe=qe=Fe=null,Pu=!1,t)throw Error($(300));return e}function Jf(){var e=Yo!==0;return Yo=0,e}function Dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Fe.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function tn(){if(qe===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=Xe===null?Fe.memoizedState:Xe.next;if(t!==null)Xe=t,qe=e;else{if(e===null)throw Error($(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Xe===null?Fe.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Vo(e,t){return typeof t=="function"?t(e):t}function fc(e){var t=tn(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=qe,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,u=null,l=a;do{var f=l.lane;if((Ai&f)===f)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:e(r,l.action);else{var d={lane:f,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(s=u=d,o=r):u=u.next=d,Fe.lanes|=f,Si|=f}l=l.next}while(l!==null&&l!==a);u===null?o=r:u.next=s,bn(r,t.memoizedState)||(At=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Fe.lanes|=a,Si|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hc(e){var t=tn(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);bn(a,t.memoizedState)||(At=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function $1(){}function q1(e,t){var n=Fe,r=tn(),i=t(),a=!bn(r.memoizedState,i);if(a&&(r.memoizedState=i,At=!0),r=r.queue,Zf(K1.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,$o(9,G1.bind(null,n,r,i,t),void 0,null),Ze===null)throw Error($(349));Ai&30||Q1(n,t,i)}return i}function Q1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function G1(e,t,n,r){t.value=n,t.getSnapshot=r,X1(t)&&J1(e)}function K1(e,t,n){return n(function(){X1(t)&&J1(e)})}function X1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bn(e,n)}catch{return!0}}function J1(e){var t=nr(e,1);t!==null&&yn(t,e,1,-1)}function Qp(e){var t=Dn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},t.queue=e,e=e.dispatch=yC.bind(null,Fe,e),[t.memoizedState,e]}function $o(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Z1(){return tn().memoizedState}function iu(e,t,n,r){var i=Dn();Fe.flags|=e,i.memoizedState=$o(1|t,n,void 0,r===void 0?null:r)}function cl(e,t,n,r){var i=tn();r=r===void 0?null:r;var a=void 0;if(qe!==null){var o=qe.memoizedState;if(a=o.destroy,r!==null&&Kf(r,o.deps)){i.memoizedState=$o(t,n,a,r);return}}Fe.flags|=e,i.memoizedState=$o(1|t,n,a,r)}function Gp(e,t){return iu(8390656,8,e,t)}function Zf(e,t){return cl(2048,8,e,t)}function ey(e,t){return cl(4,2,e,t)}function ty(e,t){return cl(4,4,e,t)}function ny(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ry(e,t,n){return n=n!=null?n.concat([e]):null,cl(4,4,ny.bind(null,t,e),n)}function eh(){}function iy(e,t){var n=tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ay(e,t){var n=tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function oy(e,t,n){return Ai&21?(bn(n,t)||(n=d1(),Fe.lanes|=n,Si|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,At=!0),e.memoizedState=n)}function mC(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=dc.transition;dc.transition={};try{e(!1),t()}finally{we=n,dc.transition=r}}function sy(){return tn().memoizedState}function gC(e,t,n){var r=jr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uy(e))ly(t,n);else if(n=W1(e,t,n,r),n!==null){var i=Et();yn(n,e,r,i),cy(n,t,r)}}function yC(e,t,n){var r=jr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uy(e))ly(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,bn(s,o)){var u=t.interleaved;u===null?(i.next=i,Vf(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=W1(e,t,i,r),n!==null&&(i=Et(),yn(n,e,r,i),cy(n,t,r))}}function uy(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function ly(e,t){Eo=Pu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cy(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nf(e,n)}}var Fu={readContext:en,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},EC={readContext:en,useCallback:function(e,t){return Dn().memoizedState=[e,t===void 0?null:t],e},useContext:en,useEffect:Gp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,iu(4194308,4,ny.bind(null,t,e),n)},useLayoutEffect:function(e,t){return iu(4194308,4,e,t)},useInsertionEffect:function(e,t){return iu(4,2,e,t)},useMemo:function(e,t){var n=Dn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Dn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gC.bind(null,Fe,e),[r.memoizedState,e]},useRef:function(e){var t=Dn();return e={current:e},t.memoizedState=e},useState:Qp,useDebugValue:eh,useDeferredValue:function(e){return Dn().memoizedState=e},useTransition:function(){var e=Qp(!1),t=e[0];return e=mC.bind(null,e[1]),Dn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Fe,i=Dn();if(Re){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Ze===null)throw Error($(349));Ai&30||Q1(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Gp(K1.bind(null,r,a,e),[e]),r.flags|=2048,$o(9,G1.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Dn(),t=Ze.identifierPrefix;if(Re){var n=Jn,r=Xn;n=(r&~(1<<32-gn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bC={readContext:en,useCallback:iy,useContext:en,useEffect:Zf,useImperativeHandle:ry,useInsertionEffect:ey,useLayoutEffect:ty,useMemo:ay,useReducer:fc,useRef:Z1,useState:function(){return fc(Vo)},useDebugValue:eh,useDeferredValue:function(e){var t=tn();return oy(t,qe.memoizedState,e)},useTransition:function(){var e=fc(Vo)[0],t=tn().memoizedState;return[e,t]},useMutableSource:$1,useSyncExternalStore:q1,useId:sy,unstable_isNewReconciler:!1},TC={readContext:en,useCallback:iy,useContext:en,useEffect:Zf,useImperativeHandle:ry,useInsertionEffect:ey,useLayoutEffect:ty,useMemo:ay,useReducer:hc,useRef:Z1,useState:function(){return hc(Vo)},useDebugValue:eh,useDeferredValue:function(e){var t=tn();return qe===null?t.memoizedState=e:oy(t,qe.memoizedState,e)},useTransition:function(){var e=hc(Vo)[0],t=tn().memoizedState;return[e,t]},useMutableSource:$1,useSyncExternalStore:q1,useId:sy,unstable_isNewReconciler:!1};function cn(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Td(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?Li(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Et(),i=jr(e),a=Zn(r,i);a.payload=t,n!=null&&(a.callback=n),t=Ur(e,a,i),t!==null&&(yn(t,e,i,r),nu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Et(),i=jr(e),a=Zn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ur(e,a,i),t!==null&&(yn(t,e,i,r),nu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Et(),r=jr(e),i=Zn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ur(e,i,r),t!==null&&(yn(t,e,r,n),nu(t,e,r))}};function Kp(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Bo(n,r)||!Bo(i,a):!0}function dy(e,t,n){var r=!1,i=Vr,a=t.contextType;return typeof a=="object"&&a!==null?a=en(a):(i=Dt(t)?xi:lt.current,r=t.contextTypes,a=(r=r!=null)?Ta(e,i):Vr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Xp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function vd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$f(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=en(a):(a=Dt(t)?xi:lt.current,i.context=Ta(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Td(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&dl.enqueueReplaceState(i,i.state,null),Ou(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function xa(e,t){try{var n="",r=t;do n+=Qv(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function pc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vC=typeof WeakMap=="function"?WeakMap:Map;function fy(e,t,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bu||(Bu=!0,Ld=r),wd(e,t)},n}function hy(e,t,n){n=Zn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){wd(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){wd(e,t),typeof r!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Jp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vC;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=PC.bind(null,e,t,n),t.then(e,e))}function Zp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function em(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zn(-1,1),t.tag=2,Ur(n,t,1))),n.lanes|=1),e)}var wC=or.ReactCurrentOwner,At=!1;function mt(e,t,n,r){t.child=e===null?z1(t,null,n,r):wa(t,e.child,n,r)}function tm(e,t,n,r,i){n=n.render;var a=t.ref;return aa(t,i),r=Xf(e,t,n,r,a,i),n=Jf(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rr(e,t,i)):(Re&&n&&Uf(t),t.flags|=1,mt(e,t,r,i),t.child)}function nm(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!uh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,py(e,t,a,r,i)):(e=uu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(o,r)&&e.ref===t.ref)return rr(e,t,i)}return t.flags|=1,e=zr(a,r),e.ref=t.ref,e.return=t,t.child=e}function py(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Bo(a,r)&&e.ref===t.ref)if(At=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(At=!0);else return t.lanes=e.lanes,rr(e,t,i)}return Cd(e,t,n,r,i)}function my(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(Zi,Mt),Mt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,De(Zi,Mt),Mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,De(Zi,Mt),Mt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,De(Zi,Mt),Mt|=r;return mt(e,t,i,n),t.child}function gy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cd(e,t,n,r,i){var a=Dt(n)?xi:lt.current;return a=Ta(t,a),aa(t,i),n=Xf(e,t,n,r,a,i),r=Jf(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rr(e,t,i)):(Re&&r&&Uf(t),t.flags|=1,mt(e,t,n,i),t.child)}function rm(e,t,n,r,i){if(Dt(n)){var a=!0;Du(t)}else a=!1;if(aa(t,i),t.stateNode===null)au(e,t),dy(t,n,r),vd(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=en(l):(l=Dt(n)?xi:lt.current,l=Ta(t,l));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==l)&&Xp(t,o,r,l),Cr=!1;var p=t.memoizedState;o.state=p,Ou(t,r,o,i),u=t.memoizedState,s!==r||p!==u||St.current||Cr?(typeof f=="function"&&(Td(t,n,f,r),u=t.memoizedState),(s=Cr||Kp(t,n,s,r,p,u,l))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=l,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Y1(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:cn(t.type,s),o.props=l,d=t.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=en(u):(u=Dt(n)?xi:lt.current,u=Ta(t,u));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||p!==u)&&Xp(t,o,r,u),Cr=!1,p=t.memoizedState,o.state=p,Ou(t,r,o,i);var g=t.memoizedState;s!==d||p!==g||St.current||Cr?(typeof h=="function"&&(Td(t,n,h,r),g=t.memoizedState),(l=Cr||Kp(t,n,l,r,p,g,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return xd(e,t,n,r,a,i)}function xd(e,t,n,r,i,a){gy(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&zp(t,n,!1),rr(e,t,a);r=t.stateNode,wC.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,s,a)):mt(e,t,s,a),t.memoizedState=r.state,i&&zp(t,n,!0),t.child}function yy(e){var t=e.stateNode;t.pendingContext?jp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jp(e,t.context,!1),qf(e,t.containerInfo)}function im(e,t,n,r,i){return va(),jf(i),t.flags|=256,mt(e,t,n,r),t.child}var kd={dehydrated:null,treeContext:null,retryLane:0};function Ad(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ey(e,t,n){var r=t.pendingProps,i=Pe.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),De(Pe,i&1),e===null)return Ed(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=pl(o,r,0,null),e=wi(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ad(n),t.memoizedState=kd,e):th(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return CC(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=zr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=zr(s,a):(a=wi(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Ad(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=kd,r}return a=e.child,e=a.sibling,r=zr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function th(e,t){return t=pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ms(e,t,n,r){return r!==null&&jf(r),wa(t,e.child,null,n),e=th(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function CC(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=pc(Error($(422))),Ms(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=pl({mode:"visible",children:r.children},i,0,null),a=wi(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&wa(t,e.child,null,o),t.child.memoizedState=Ad(o),t.memoizedState=kd,a);if(!(t.mode&1))return Ms(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error($(419)),r=pc(a,r,void 0),Ms(e,t,o,r)}if(s=(o&e.childLanes)!==0,At||s){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,nr(e,i),yn(r,e,i,-1))}return sh(),r=pc(Error($(421))),Ms(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=FC.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Ut=Br(i.nextSibling),Ht=t,Re=!0,mn=null,e!==null&&(Qt[Gt++]=Xn,Qt[Gt++]=Jn,Qt[Gt++]=ki,Xn=e.id,Jn=e.overflow,ki=t),t=th(t,r.children),t.flags|=4096,t)}function am(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bd(e.return,t,n)}function mc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function by(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(mt(e,t,r.children,n),r=Pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&am(e,n,t);else if(e.tag===19)am(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(De(Pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ru(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),mc(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ru(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}mc(t,!0,n,null,a);break;case"together":mc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function au(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Si|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=zr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xC(e,t,n){switch(t.tag){case 3:yy(t),va();break;case 5:V1(t);break;case 1:Dt(t.type)&&Du(t);break;case 4:qf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;De(Nu,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(De(Pe,Pe.current&1),t.flags|=128,null):n&t.child.childLanes?Ey(e,t,n):(De(Pe,Pe.current&1),e=rr(e,t,n),e!==null?e.sibling:null);De(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return by(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),De(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,my(e,t,n)}return rr(e,t,n)}var Ty,Sd,vy,wy;Ty=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sd=function(){};vy=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,hi(Mn.current);var a=null;switch(n){case"input":i=Gc(e,i),r=Gc(e,r),a=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),a=[];break;case"textarea":i=Jc(e,i),r=Jc(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Au)}ed(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var s=i[l];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(No.hasOwnProperty(l)?a||(a=[]):(a=a||[]).push(l,null));for(l in r){var u=r[l];if(s=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==s&&(u!=null||s!=null))if(l==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(No.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Ie("scroll",e),a||s===u||(a=[])):(a=a||[]).push(l,u))}n&&(a=a||[]).push("style",n);var l=a;(t.updateQueue=l)&&(t.flags|=4)}};wy=function(e,t,n,r){n!==r&&(t.flags|=4)};function Za(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kC(e,t,n){var r=t.pendingProps;switch(Hf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return Dt(t.type)&&Su(),at(t),null;case 3:return r=t.stateNode,Ca(),Ne(St),Ne(lt),Gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ps(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mn!==null&&(Pd(mn),mn=null))),Sd(e,t),at(t),null;case 5:Qf(t);var i=hi(Wo.current);if(n=t.type,e!==null&&t.stateNode!=null)vy(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return at(t),null}if(e=hi(Mn.current),Ps(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Rn]=t,r[jo]=a,e=(t.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<co.length;i++)Ie(co[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":pp(r,a),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ie("invalid",r);break;case"textarea":gp(r,a),Ie("invalid",r)}ed(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Rs(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Rs(r.textContent,s,e),i=["children",""+s]):No.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":As(r),mp(r,a,!0);break;case"textarea":As(r),yp(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Au)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Rn]=t,e[jo]=r,Ty(e,t,!1,!1),t.stateNode=e;e:{switch(o=td(n,r),n){case"dialog":Ie("cancel",e),Ie("close",e),i=r;break;case"iframe":case"object":case"embed":Ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<co.length;i++)Ie(co[i],e);i=r;break;case"source":Ie("error",e),i=r;break;case"img":case"image":case"link":Ie("error",e),Ie("load",e),i=r;break;case"details":Ie("toggle",e),i=r;break;case"input":pp(e,r),i=Gc(e,r),Ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Ie("invalid",e);break;case"textarea":gp(e,r),i=Jc(e,r),Ie("invalid",e);break;default:i=r}ed(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?Zg(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Xg(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Lo(e,u):typeof u=="number"&&Lo(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(No.hasOwnProperty(a)?u!=null&&a==="onScroll"&&Ie("scroll",e):u!=null&&kf(e,a,u,o))}switch(n){case"input":As(e),mp(e,r,!1);break;case"textarea":As(e),yp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ta(e,!!r.multiple,a,!1):r.defaultValue!=null&&ta(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Au)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return at(t),null;case 6:if(e&&t.stateNode!=null)wy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=hi(Wo.current),hi(Mn.current),Ps(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rn]=t,(a=r.nodeValue!==n)&&(e=Ht,e!==null))switch(e.tag){case 3:Rs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rs(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=t,t.stateNode=r}return at(t),null;case 13:if(Ne(Pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Re&&Ut!==null&&t.mode&1&&!(t.flags&128))H1(),va(),t.flags|=98560,a=!1;else if(a=Ps(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error($(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error($(317));a[Rn]=t}else va(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;at(t),a=!1}else mn!==null&&(Pd(mn),mn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Pe.current&1?Ge===0&&(Ge=3):sh())),t.updateQueue!==null&&(t.flags|=4),at(t),null);case 4:return Ca(),Sd(e,t),e===null&&Uo(t.stateNode.containerInfo),at(t),null;case 10:return Yf(t.type._context),at(t),null;case 17:return Dt(t.type)&&Su(),at(t),null;case 19:if(Ne(Pe),a=t.memoizedState,a===null)return at(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Za(a,!1);else{if(Ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ru(e),o!==null){for(t.flags|=128,Za(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return De(Pe,Pe.current&1|2),t.child}e=e.sibling}a.tail!==null&&He()>ka&&(t.flags|=128,r=!0,Za(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ru(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Za(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Re)return at(t),null}else 2*He()-a.renderingStartTime>ka&&n!==1073741824&&(t.flags|=128,r=!0,Za(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=He(),t.sibling=null,n=Pe.current,De(Pe,r?n&1|2:n&1),t):(at(t),null);case 22:case 23:return oh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Mt&1073741824&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function AC(e,t){switch(Hf(t),t.tag){case 1:return Dt(t.type)&&Su(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ca(),Ne(St),Ne(lt),Gf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qf(t),null;case 13:if(Ne(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Pe),null;case 4:return Ca(),null;case 10:return Yf(t.type._context),null;case 22:case 23:return oh(),null;case 24:return null;default:return null}}var Bs=!1,st=!1,SC=typeof WeakSet=="function"?WeakSet:Set,Z=null;function Ji(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(e,t,r)}else n.current=null}function Dd(e,t,n){try{n()}catch(r){Ue(e,t,r)}}var om=!1;function DC(e,t){if(dd=Cu,e=S1(),Bf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,l=0,f=0,d=e,p=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==a||r!==0&&d.nodeType!==3||(u=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===e)break t;if(p===n&&++l===i&&(s=o),p===a&&++f===r&&(u=o),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(fd={focusedElem:e,selectionRange:n},Cu=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,T=g.memoizedState,m=t.stateNode,E=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:cn(t.type,y),T);m.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(S){Ue(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return g=om,om=!1,g}function bo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Dd(t,n,a)}i=i.next}while(i!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function _d(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cy(e){var t=e.alternate;t!==null&&(e.alternate=null,Cy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rn],delete t[jo],delete t[md],delete t[cC],delete t[dC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xy(e){return e.tag===5||e.tag===3||e.tag===4}function sm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Id(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Au));else if(r!==4&&(e=e.child,e!==null))for(Id(e,t,n),e=e.sibling;e!==null;)Id(e,t,n),e=e.sibling}function Nd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nd(e,t,n),e=e.sibling;e!==null;)Nd(e,t,n),e=e.sibling}var et=null,pn=!1;function mr(e,t,n){for(n=n.child;n!==null;)ky(e,t,n),n=n.sibling}function ky(e,t,n){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(il,n)}catch{}switch(n.tag){case 5:st||Ji(n,t);case 6:var r=et,i=pn;et=null,mr(e,t,n),et=r,pn=i,et!==null&&(pn?(e=et,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(pn?(e=et,n=n.stateNode,e.nodeType===8?uc(e.parentNode,n):e.nodeType===1&&uc(e,n),Fo(e)):uc(et,n.stateNode));break;case 4:r=et,i=pn,et=n.stateNode.containerInfo,pn=!0,mr(e,t,n),et=r,pn=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Dd(n,t,o),i=i.next}while(i!==r)}mr(e,t,n);break;case 1:if(!st&&(Ji(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ue(n,t,s)}mr(e,t,n);break;case 21:mr(e,t,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,mr(e,t,n),st=r):mr(e,t,n);break;default:mr(e,t,n)}}function um(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new SC),t.forEach(function(r){var i=MC.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:et=s.stateNode,pn=!1;break e;case 3:et=s.stateNode.containerInfo,pn=!0;break e;case 4:et=s.stateNode.containerInfo,pn=!0;break e}s=s.return}if(et===null)throw Error($(160));ky(a,o,i),et=null,pn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){Ue(i,t,l)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ay(t,e),t=t.sibling}function Ay(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(un(t,e),Sn(e),r&4){try{bo(3,e,e.return),fl(3,e)}catch(y){Ue(e,e.return,y)}try{bo(5,e,e.return)}catch(y){Ue(e,e.return,y)}}break;case 1:un(t,e),Sn(e),r&512&&n!==null&&Ji(n,n.return);break;case 5:if(un(t,e),Sn(e),r&512&&n!==null&&Ji(n,n.return),e.flags&32){var i=e.stateNode;try{Lo(i,"")}catch(y){Ue(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Qg(i,a),td(s,o);var l=td(s,a);for(o=0;o<u.length;o+=2){var f=u[o],d=u[o+1];f==="style"?Zg(i,d):f==="dangerouslySetInnerHTML"?Xg(i,d):f==="children"?Lo(i,d):kf(i,f,d,l)}switch(s){case"input":Kc(i,a);break;case"textarea":Gg(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?ta(i,!!a.multiple,h,!1):p!==!!a.multiple&&(a.defaultValue!=null?ta(i,!!a.multiple,a.defaultValue,!0):ta(i,!!a.multiple,a.multiple?[]:"",!1))}i[jo]=a}catch(y){Ue(e,e.return,y)}}break;case 6:if(un(t,e),Sn(e),r&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){Ue(e,e.return,y)}}break;case 3:if(un(t,e),Sn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fo(t.containerInfo)}catch(y){Ue(e,e.return,y)}break;case 4:un(t,e),Sn(e);break;case 13:un(t,e),Sn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ih=He())),r&4&&um(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(st=(l=st)||f,un(t,e),st=l):un(t,e),Sn(e),r&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!f&&e.mode&1)for(Z=e,f=e.child;f!==null;){for(d=Z=f;Z!==null;){switch(p=Z,h=p.child,p.tag){case 0:case 11:case 14:case 15:bo(4,p,p.return);break;case 1:Ji(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){Ue(r,n,y)}}break;case 5:Ji(p,p.return);break;case 22:if(p.memoizedState!==null){cm(d);continue}}h!==null?(h.return=p,Z=h):cm(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,l?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,u=d.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Jg("display",o))}catch(y){Ue(e,e.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(y){Ue(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:un(t,e),Sn(e),r&4&&um(e);break;case 21:break;default:un(t,e),Sn(e)}}function Sn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xy(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Lo(i,""),r.flags&=-33);var a=sm(e);Nd(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=sm(e);Id(e,s,o);break;default:throw Error($(161))}}catch(u){Ue(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _C(e,t,n){Z=e,Sy(e)}function Sy(e,t,n){for(var r=(e.mode&1)!==0;Z!==null;){var i=Z,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Bs;if(!o){var s=i.alternate,u=s!==null&&s.memoizedState!==null||st;s=Bs;var l=st;if(Bs=o,(st=u)&&!l)for(Z=i;Z!==null;)o=Z,u=o.child,o.tag===22&&o.memoizedState!==null?dm(i):u!==null?(u.return=o,Z=u):dm(i);for(;a!==null;)Z=a,Sy(a),a=a.sibling;Z=i,Bs=s,st=l}lm(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Z=a):lm(e)}}function lm(e){for(;Z!==null;){var t=Z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:st||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:cn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&qp(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qp(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var l=t.alternate;if(l!==null){var f=l.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Fo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}st||t.flags&512&&_d(t)}catch(p){Ue(t,t.return,p)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function cm(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function dm(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(u){Ue(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Ue(t,i,u)}}var a=t.return;try{_d(t)}catch(u){Ue(t,a,u)}break;case 5:var o=t.return;try{_d(t)}catch(u){Ue(t,o,u)}}}catch(u){Ue(t,t.return,u)}if(t===e){Z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Z=s;break}Z=t.return}}var IC=Math.ceil,Mu=or.ReactCurrentDispatcher,nh=or.ReactCurrentOwner,Zt=or.ReactCurrentBatchConfig,be=0,Ze=null,$e=null,tt=0,Mt=0,Zi=Xr(0),Ge=0,qo=null,Si=0,hl=0,rh=0,To=null,kt=null,ih=0,ka=1/0,qn=null,Bu=!1,Ld=null,Hr=null,Us=!1,Lr=null,Uu=0,vo=0,Od=null,ou=-1,su=0;function Et(){return be&6?He():ou!==-1?ou:ou=He()}function jr(e){return e.mode&1?be&2&&tt!==0?tt&-tt:hC.transition!==null?(su===0&&(su=d1()),su):(e=we,e!==0||(e=window.event,e=e===void 0?16:E1(e.type)),e):1}function yn(e,t,n,r){if(50<vo)throw vo=0,Od=null,Error($(185));us(e,n,r),(!(be&2)||e!==Ze)&&(e===Ze&&(!(be&2)&&(hl|=n),Ge===4&&kr(e,tt)),_t(e,r),n===1&&be===0&&!(t.mode&1)&&(ka=He()+500,ll&&Jr()))}function _t(e,t){var n=e.callbackNode;hw(e,t);var r=wu(e,e===Ze?tt:0);if(r===0)n!==null&&Tp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tp(n),t===1)e.tag===0?fC(fm.bind(null,e)):M1(fm.bind(null,e)),uC(function(){!(be&6)&&Jr()}),n=null;else{switch(f1(r)){case 1:n=If;break;case 4:n=l1;break;case 16:n=vu;break;case 536870912:n=c1;break;default:n=vu}n=Py(n,Dy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dy(e,t){if(ou=-1,su=0,be&6)throw Error($(327));var n=e.callbackNode;if(oa()&&e.callbackNode!==n)return null;var r=wu(e,e===Ze?tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Hu(e,r);else{t=r;var i=be;be|=2;var a=Iy();(Ze!==e||tt!==t)&&(qn=null,ka=He()+500,vi(e,t));do try{OC();break}catch(s){_y(e,s)}while(!0);Wf(),Mu.current=a,be=i,$e!==null?t=0:(Ze=null,tt=0,t=Ge)}if(t!==0){if(t===2&&(i=od(e),i!==0&&(r=i,t=Rd(e,i))),t===1)throw n=qo,vi(e,0),kr(e,r),_t(e,He()),n;if(t===6)kr(e,r);else{if(i=e.current.alternate,!(r&30)&&!NC(i)&&(t=Hu(e,r),t===2&&(a=od(e),a!==0&&(r=a,t=Rd(e,a))),t===1))throw n=qo,vi(e,0),kr(e,r),_t(e,He()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:li(e,kt,qn);break;case 3:if(kr(e,r),(r&130023424)===r&&(t=ih+500-He(),10<t)){if(wu(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Et(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=pd(li.bind(null,e,kt,qn),t);break}li(e,kt,qn);break;case 4:if(kr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-gn(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IC(r/1960))-r,10<r){e.timeoutHandle=pd(li.bind(null,e,kt,qn),r);break}li(e,kt,qn);break;case 5:li(e,kt,qn);break;default:throw Error($(329))}}}return _t(e,He()),e.callbackNode===n?Dy.bind(null,e):null}function Rd(e,t){var n=To;return e.current.memoizedState.isDehydrated&&(vi(e,t).flags|=256),e=Hu(e,t),e!==2&&(t=kt,kt=n,t!==null&&Pd(t)),e}function Pd(e){kt===null?kt=e:kt.push.apply(kt,e)}function NC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!bn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kr(e,t){for(t&=~rh,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gn(t),r=1<<n;e[n]=-1,t&=~r}}function fm(e){if(be&6)throw Error($(327));oa();var t=wu(e,0);if(!(t&1))return _t(e,He()),null;var n=Hu(e,t);if(e.tag!==0&&n===2){var r=od(e);r!==0&&(t=r,n=Rd(e,r))}if(n===1)throw n=qo,vi(e,0),kr(e,t),_t(e,He()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,li(e,kt,qn),_t(e,He()),null}function ah(e,t){var n=be;be|=1;try{return e(t)}finally{be=n,be===0&&(ka=He()+500,ll&&Jr())}}function Di(e){Lr!==null&&Lr.tag===0&&!(be&6)&&oa();var t=be;be|=1;var n=Zt.transition,r=we;try{if(Zt.transition=null,we=1,e)return e()}finally{we=r,Zt.transition=n,be=t,!(be&6)&&Jr()}}function oh(){Mt=Zi.current,Ne(Zi)}function vi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sC(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Hf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Su();break;case 3:Ca(),Ne(St),Ne(lt),Gf();break;case 5:Qf(r);break;case 4:Ca();break;case 13:Ne(Pe);break;case 19:Ne(Pe);break;case 10:Yf(r.type._context);break;case 22:case 23:oh()}n=n.return}if(Ze=e,$e=e=zr(e.current,null),tt=Mt=t,Ge=0,qo=null,rh=hl=Si=0,kt=To=null,fi!==null){for(t=0;t<fi.length;t++)if(n=fi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}fi=null}return e}function _y(e,t){do{var n=$e;try{if(Wf(),ru.current=Fu,Pu){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pu=!1}if(Ai=0,Xe=qe=Fe=null,Eo=!1,Yo=0,nh.current=null,n===null||n.return===null){Ge=1,qo=t,$e=null;break}e:{var a=e,o=n.return,s=n,u=t;if(t=tt,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=Zp(o);if(h!==null){h.flags&=-257,em(h,o,s,a,t),h.mode&1&&Jp(a,l,t),t=h,u=l;var g=t.updateQueue;if(g===null){var y=new Set;y.add(u),t.updateQueue=y}else g.add(u);break e}else{if(!(t&1)){Jp(a,l,t),sh();break e}u=Error($(426))}}else if(Re&&s.mode&1){var T=Zp(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),em(T,o,s,a,t),jf(xa(u,s));break e}}a=u=xa(u,s),Ge!==4&&(Ge=2),To===null?To=[a]:To.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=fy(a,u,t);$p(a,m);break e;case 1:s=u;var E=a.type,b=a.stateNode;if(!(a.flags&128)&&(typeof E.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Hr===null||!Hr.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=hy(a,s,t);$p(a,S);break e}}a=a.return}while(a!==null)}Ly(n)}catch(N){t=N,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function Iy(){var e=Mu.current;return Mu.current=Fu,e===null?Fu:e}function sh(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Ze===null||!(Si&268435455)&&!(hl&268435455)||kr(Ze,tt)}function Hu(e,t){var n=be;be|=2;var r=Iy();(Ze!==e||tt!==t)&&(qn=null,vi(e,t));do try{LC();break}catch(i){_y(e,i)}while(!0);if(Wf(),be=n,Mu.current=r,$e!==null)throw Error($(261));return Ze=null,tt=0,Ge}function LC(){for(;$e!==null;)Ny($e)}function OC(){for(;$e!==null&&!iw();)Ny($e)}function Ny(e){var t=Ry(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?Ly(e):$e=t,nh.current=null}function Ly(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=AC(n,t),n!==null){n.flags&=32767,$e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,$e=null;return}}else if(n=kC(n,t,Mt),n!==null){$e=n;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Ge===0&&(Ge=5)}function li(e,t,n){var r=we,i=Zt.transition;try{Zt.transition=null,we=1,RC(e,t,n,r)}finally{Zt.transition=i,we=r}return null}function RC(e,t,n,r){do oa();while(Lr!==null);if(be&6)throw Error($(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(pw(e,a),e===Ze&&($e=Ze=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Us||(Us=!0,Py(vu,function(){return oa(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Zt.transition,Zt.transition=null;var o=we;we=1;var s=be;be|=4,nh.current=null,DC(e,n),Ay(n,e),eC(fd),Cu=!!dd,fd=dd=null,e.current=n,_C(n),aw(),be=s,we=o,Zt.transition=a}else e.current=n;if(Us&&(Us=!1,Lr=e,Uu=i),a=e.pendingLanes,a===0&&(Hr=null),uw(n.stateNode),_t(e,He()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bu)throw Bu=!1,e=Ld,Ld=null,e;return Uu&1&&e.tag!==0&&oa(),a=e.pendingLanes,a&1?e===Od?vo++:(vo=0,Od=e):vo=0,Jr(),null}function oa(){if(Lr!==null){var e=f1(Uu),t=Zt.transition,n=we;try{if(Zt.transition=null,we=16>e?16:e,Lr===null)var r=!1;else{if(e=Lr,Lr=null,Uu=0,be&6)throw Error($(331));var i=be;for(be|=4,Z=e.current;Z!==null;){var a=Z,o=a.child;if(Z.flags&16){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var l=s[u];for(Z=l;Z!==null;){var f=Z;switch(f.tag){case 0:case 11:case 15:bo(8,f,a)}var d=f.child;if(d!==null)d.return=f,Z=d;else for(;Z!==null;){f=Z;var p=f.sibling,h=f.return;if(Cy(f),f===l){Z=null;break}if(p!==null){p.return=h,Z=p;break}Z=h}}}var g=a.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var T=y.sibling;y.sibling=null,y=T}while(y!==null)}}Z=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,Z=o;else e:for(;Z!==null;){if(a=Z,a.flags&2048)switch(a.tag){case 0:case 11:case 15:bo(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,Z=m;break e}Z=a.return}}var E=e.current;for(Z=E;Z!==null;){o=Z;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,Z=b;else e:for(o=E;Z!==null;){if(s=Z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fl(9,s)}}catch(N){Ue(s,s.return,N)}if(s===o){Z=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,Z=S;break e}Z=s.return}}if(be=i,Jr(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(il,e)}catch{}r=!0}return r}finally{we=n,Zt.transition=t}}return!1}function hm(e,t,n){t=xa(n,t),t=fy(e,t,1),e=Ur(e,t,1),t=Et(),e!==null&&(us(e,1,t),_t(e,t))}function Ue(e,t,n){if(e.tag===3)hm(e,e,n);else for(;t!==null;){if(t.tag===3){hm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hr===null||!Hr.has(r))){e=xa(n,e),e=hy(t,e,1),t=Ur(t,e,1),e=Et(),t!==null&&(us(t,1,e),_t(t,e));break}}t=t.return}}function PC(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Et(),e.pingedLanes|=e.suspendedLanes&n,Ze===e&&(tt&n)===n&&(Ge===4||Ge===3&&(tt&130023424)===tt&&500>He()-ih?vi(e,0):rh|=n),_t(e,t)}function Oy(e,t){t===0&&(e.mode&1?(t=_s,_s<<=1,!(_s&130023424)&&(_s=4194304)):t=1);var n=Et();e=nr(e,t),e!==null&&(us(e,t,n),_t(e,n))}function FC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Oy(e,n)}function MC(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),Oy(e,n)}var Ry;Ry=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||St.current)At=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return At=!1,xC(e,t,n);At=!!(e.flags&131072)}else At=!1,Re&&t.flags&1048576&&B1(t,Iu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;au(e,t),e=t.pendingProps;var i=Ta(t,lt.current);aa(t,n),i=Xf(null,t,r,e,i,n);var a=Jf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Dt(r)?(a=!0,Du(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$f(t),i.updater=dl,t.stateNode=i,i._reactInternals=t,vd(t,r,e,n),t=xd(null,t,r,!0,a,n)):(t.tag=0,Re&&a&&Uf(t),mt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(au(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=UC(r),e=cn(r,e),i){case 0:t=Cd(null,t,r,e,n);break e;case 1:t=rm(null,t,r,e,n);break e;case 11:t=tm(null,t,r,e,n);break e;case 14:t=nm(null,t,r,cn(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:cn(r,i),Cd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:cn(r,i),rm(e,t,r,i,n);case 3:e:{if(yy(t),e===null)throw Error($(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Y1(e,t),Ou(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=xa(Error($(423)),t),t=im(e,t,r,n,i);break e}else if(r!==i){i=xa(Error($(424)),t),t=im(e,t,r,n,i);break e}else for(Ut=Br(t.stateNode.containerInfo.firstChild),Ht=t,Re=!0,mn=null,n=z1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(va(),r===i){t=rr(e,t,n);break e}mt(e,t,r,n)}t=t.child}return t;case 5:return V1(t),e===null&&Ed(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,hd(r,i)?o=null:a!==null&&hd(r,a)&&(t.flags|=32),gy(e,t),mt(e,t,o,n),t.child;case 6:return e===null&&Ed(t),null;case 13:return Ey(e,t,n);case 4:return qf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wa(t,null,r,n):mt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:cn(r,i),tm(e,t,r,i,n);case 7:return mt(e,t,t.pendingProps,n),t.child;case 8:return mt(e,t,t.pendingProps.children,n),t.child;case 12:return mt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,De(Nu,r._currentValue),r._currentValue=o,a!==null)if(bn(a.value,o)){if(a.children===i.children&&!St.current){t=rr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=Zn(-1,n&-n),u.tag=2;var l=a.updateQueue;if(l!==null){l=l.shared;var f=l.pending;f===null?u.next=u:(u.next=f.next,f.next=u),l.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),bd(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error($(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),bd(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}mt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,aa(t,n),i=en(i),r=r(i),t.flags|=1,mt(e,t,r,n),t.child;case 14:return r=t.type,i=cn(r,t.pendingProps),i=cn(r.type,i),nm(e,t,r,i,n);case 15:return py(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:cn(r,i),au(e,t),t.tag=1,Dt(r)?(e=!0,Du(t)):e=!1,aa(t,n),dy(t,r,i),vd(t,r,i,n),xd(null,t,r,!0,e,n);case 19:return by(e,t,n);case 22:return my(e,t,n)}throw Error($(156,t.tag))};function Py(e,t){return u1(e,t)}function BC(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,t,n,r){return new BC(e,t,n,r)}function uh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function UC(e){if(typeof e=="function")return uh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sf)return 11;if(e===Df)return 14}return 2}function zr(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function uu(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")uh(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wi:return wi(n.children,i,a,t);case Af:o=8,i|=8;break;case Vc:return e=Jt(12,n,t,i|2),e.elementType=Vc,e.lanes=a,e;case $c:return e=Jt(13,n,t,i),e.elementType=$c,e.lanes=a,e;case qc:return e=Jt(19,n,t,i),e.elementType=qc,e.lanes=a,e;case Vg:return pl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wg:o=10;break e;case Yg:o=9;break e;case Sf:o=11;break e;case Df:o=14;break e;case wr:o=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=Jt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function wi(e,t,n,r){return e=Jt(7,e,r,t),e.lanes=n,e}function pl(e,t,n,r){return e=Jt(22,e,r,t),e.elementType=Vg,e.lanes=n,e.stateNode={isHidden:!1},e}function gc(e,t,n){return e=Jt(6,e,null,t),e.lanes=n,e}function yc(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function HC(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lh(e,t,n,r,i,a,o,s,u){return e=new HC(e,t,n,s,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Jt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$f(a),e}function jC(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fy(e){if(!e)return Vr;e=e._reactInternals;e:{if(Li(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Dt(n))return F1(e,n,t)}return t}function My(e,t,n,r,i,a,o,s,u){return e=lh(n,r,!0,e,i,a,o,s,u),e.context=Fy(null),n=e.current,r=Et(),i=jr(n),a=Zn(r,i),a.callback=t??null,Ur(n,a,i),e.current.lanes=i,us(e,i,r),_t(e,r),e}function ml(e,t,n,r){var i=t.current,a=Et(),o=jr(i);return n=Fy(n),t.context===null?t.context=n:t.pendingContext=n,t=Zn(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ur(i,t,o),e!==null&&(yn(e,i,o,a),nu(e,i,o)),o}function ju(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ch(e,t){pm(e,t),(e=e.alternate)&&pm(e,t)}function zC(){return null}var By=typeof reportError=="function"?reportError:function(e){console.error(e)};function dh(e){this._internalRoot=e}gl.prototype.render=dh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));ml(e,t,null,null)};gl.prototype.unmount=dh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Di(function(){ml(null,e,null,null)}),t[tr]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=m1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xr.length&&t!==0&&t<xr[n].priority;n++);xr.splice(n,0,e),n===0&&y1(e)}};function fh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mm(){}function WC(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var l=ju(o);a.call(l)}}var o=My(t,r,e,0,null,!1,!1,"",mm);return e._reactRootContainer=o,e[tr]=o.current,Uo(e.nodeType===8?e.parentNode:e),Di(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var l=ju(u);s.call(l)}}var u=lh(e,0,!1,null,null,!1,!1,"",mm);return e._reactRootContainer=u,e[tr]=u.current,Uo(e.nodeType===8?e.parentNode:e),Di(function(){ml(t,u,n,r)}),u}function El(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var u=ju(o);s.call(u)}}ml(t,o,e,i)}else o=WC(n,t,e,i,r);return ju(o)}h1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lo(t.pendingLanes);n!==0&&(Nf(t,n|1),_t(t,He()),!(be&6)&&(ka=He()+500,Jr()))}break;case 13:Di(function(){var r=nr(e,1);if(r!==null){var i=Et();yn(r,e,1,i)}}),ch(e,1)}};Lf=function(e){if(e.tag===13){var t=nr(e,134217728);if(t!==null){var n=Et();yn(t,e,134217728,n)}ch(e,134217728)}};p1=function(e){if(e.tag===13){var t=jr(e),n=nr(e,t);if(n!==null){var r=Et();yn(n,e,t,r)}ch(e,t)}};m1=function(){return we};g1=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};rd=function(e,t,n){switch(t){case"input":if(Kc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ul(r);if(!i)throw Error($(90));qg(r),Kc(r,i)}}}break;case"textarea":Gg(e,n);break;case"select":t=n.value,t!=null&&ta(e,!!n.multiple,t,!1)}};n1=ah;r1=Di;var YC={usingClientEntryPoint:!1,Events:[cs,qi,ul,e1,t1,ah]},eo={findFiberByHostInstance:di,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VC={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=o1(e),e===null?null:e.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||zC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hs.isDisabled&&Hs.supportsFiber)try{il=Hs.inject(VC),Fn=Hs}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YC;Yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fh(t))throw Error($(200));return jC(e,t,null,n)};Yt.createRoot=function(e,t){if(!fh(e))throw Error($(299));var n=!1,r="",i=By;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,!1,r,i),e[tr]=t.current,Uo(e.nodeType===8?e.parentNode:e),new dh(t)};Yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=o1(t),e=e===null?null:e.stateNode,e};Yt.flushSync=function(e){return Di(e)};Yt.hydrate=function(e,t,n){if(!yl(t))throw Error($(200));return El(null,e,t,!0,n)};Yt.hydrateRoot=function(e,t,n){if(!fh(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=By;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=My(t,null,e,1,n??null,i,!1,a,o),e[tr]=t.current,Uo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new gl(t)};Yt.render=function(e,t,n){if(!yl(t))throw Error($(200));return El(null,e,t,!1,n)};Yt.unmountComponentAtNode=function(e){if(!yl(e))throw Error($(40));return e._reactRootContainer?(Di(function(){El(null,null,e,!1,function(){e._reactRootContainer=null,e[tr]=null})}),!0):!1};Yt.unstable_batchedUpdates=ah;Yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yl(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return El(e,t,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function Uy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uy)}catch(e){console.error(e)}}Uy(),Ug.exports=Yt;var fs=Ug.exports;const Hy=nl(fs);var jy,gm=fs;jy=gm.createRoot,gm.hydrateRoot;const $C=1,qC=1e6;let Ec=0;function QC(){return Ec=(Ec+1)%Number.MAX_SAFE_INTEGER,Ec.toString()}const bc=new Map,ym=e=>{if(bc.has(e))return;const t=setTimeout(()=>{bc.delete(e),wo({type:"REMOVE_TOAST",toastId:e})},qC);bc.set(e,t)},GC=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,$C)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?ym(n):e.toasts.forEach(r=>{ym(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},lu=[];let cu={toasts:[]};function wo(e){cu=GC(cu,e),lu.forEach(t=>{t(cu)})}function KC({...e}){const t=QC(),n=i=>wo({type:"UPDATE_TOAST",toast:{...i,id:t}}),r=()=>wo({type:"DISMISS_TOAST",toastId:t});return wo({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||r()}}}),{id:t,dismiss:r,update:n}}function XC(){const[e,t]=x.useState(cu);return x.useEffect(()=>(lu.push(t),()=>{const n=lu.indexOf(t);n>-1&&lu.splice(n,1)}),[e]),{...e,toast:KC,dismiss:n=>wo({type:"DISMISS_TOAST",toastId:n})}}function Qe(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function Em(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function zy(...e){return t=>{let n=!1;const r=e.map(i=>{const a=Em(i,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let i=0;i<r.length;i++){const a=r[i];typeof a=="function"?a():Em(e[i],null)}}}}function Tn(...e){return x.useCallback(zy(...e),e)}function bl(e,t=[]){let n=[];function r(a,o){const s=x.createContext(o),u=n.length;n=[...n,o];const l=d=>{var m;const{scope:p,children:h,...g}=d,y=((m=p==null?void 0:p[e])==null?void 0:m[u])||s,T=x.useMemo(()=>g,Object.values(g));return _.jsx(y.Provider,{value:T,children:h})};l.displayName=a+"Provider";function f(d,p){var y;const h=((y=p==null?void 0:p[e])==null?void 0:y[u])||s,g=x.useContext(h);if(g)return g;if(o!==void 0)return o;throw new Error(`\`${d}\` must be used within \`${a}\``)}return[l,f]}const i=()=>{const a=n.map(o=>x.createContext(o));return function(s){const u=(s==null?void 0:s[e])||a;return x.useMemo(()=>({[`__scope${e}`]:{...s,[e]:u}}),[s,u])}};return i.scopeName=e,[r,JC(i,...t)]}function JC(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(a){const o=r.reduce((s,{useScope:u,scopeName:l})=>{const d=u(a)[`__scope${l}`];return{...s,...d}},{});return x.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}function Fd(e){const t=ZC(e),n=x.forwardRef((r,i)=>{const{children:a,...o}=r,s=x.Children.toArray(a),u=s.find(tx);if(u){const l=u.props.children,f=s.map(d=>d===u?x.Children.count(l)>1?x.Children.only(null):x.isValidElement(l)?l.props.children:null:d);return _.jsx(t,{...o,ref:i,children:x.isValidElement(l)?x.cloneElement(l,void 0,f):null})}return _.jsx(t,{...o,ref:i,children:a})});return n.displayName=`${e}.Slot`,n}function ZC(e){const t=x.forwardRef((n,r)=>{const{children:i,...a}=n;if(x.isValidElement(i)){const o=rx(i),s=nx(a,i.props);return i.type!==x.Fragment&&(s.ref=r?zy(r,o):o),x.cloneElement(i,s)}return x.Children.count(i)>1?x.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Wy=Symbol("radix.slottable");function ex(e){const t=({children:n})=>_.jsx(_.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=Wy,t}function tx(e){return x.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Wy}function nx(e,t){const n={...t};for(const r in t){const i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...s)=>{const u=a(...s);return i(...s),u}:i&&(n[r]=i):r==="style"?n[r]={...i,...a}:r==="className"&&(n[r]=[i,a].filter(Boolean).join(" "))}return{...e,...n}}function rx(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function ix(e){const t=e+"CollectionProvider",[n,r]=bl(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),o=y=>{const{scope:T,children:m}=y,E=K.useRef(null),b=K.useRef(new Map).current;return _.jsx(i,{scope:T,itemMap:b,collectionRef:E,children:m})};o.displayName=t;const s=e+"CollectionSlot",u=Fd(s),l=K.forwardRef((y,T)=>{const{scope:m,children:E}=y,b=a(s,m),S=Tn(T,b.collectionRef);return _.jsx(u,{ref:S,children:E})});l.displayName=s;const f=e+"CollectionItemSlot",d="data-radix-collection-item",p=Fd(f),h=K.forwardRef((y,T)=>{const{scope:m,children:E,...b}=y,S=K.useRef(null),N=Tn(T,S),k=a(f,m);return K.useEffect(()=>(k.itemMap.set(S,{ref:S,...b}),()=>void k.itemMap.delete(S))),_.jsx(p,{[d]:"",ref:N,children:E})});h.displayName=f;function g(y){const T=a(e+"CollectionConsumer",y);return K.useCallback(()=>{const E=T.collectionRef.current;if(!E)return[];const b=Array.from(E.querySelectorAll(`[${d}]`));return Array.from(T.itemMap.values()).sort((k,O)=>b.indexOf(k.ref.current)-b.indexOf(O.ref.current))},[T.collectionRef,T.itemMap])}return[{Provider:o,Slot:l,ItemSlot:h},g,r]}var ax=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],It=ax.reduce((e,t)=>{const n=Fd(`Primitive.${t}`),r=x.forwardRef((i,a)=>{const{asChild:o,...s}=i,u=o?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),_.jsx(u,{...s,ref:a})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Yy(e,t){e&&fs.flushSync(()=>e.dispatchEvent(t))}function $r(e){const t=x.useRef(e);return x.useEffect(()=>{t.current=e}),x.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function ox(e,t=globalThis==null?void 0:globalThis.document){const n=$r(e);x.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var sx="DismissableLayer",Md="dismissableLayer.update",ux="dismissableLayer.pointerDownOutside",lx="dismissableLayer.focusOutside",bm,Vy=x.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),hh=x.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:a,onInteractOutside:o,onDismiss:s,...u}=e,l=x.useContext(Vy),[f,d]=x.useState(null),p=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,h]=x.useState({}),g=Tn(t,O=>d(O)),y=Array.from(l.layers),[T]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),m=y.indexOf(T),E=f?y.indexOf(f):-1,b=l.layersWithOutsidePointerEventsDisabled.size>0,S=E>=m,N=dx(O=>{const M=O.target,j=[...l.branches].some(I=>I.contains(M));!S||j||(i==null||i(O),o==null||o(O),O.defaultPrevented||s==null||s())},p),k=fx(O=>{const M=O.target;[...l.branches].some(I=>I.contains(M))||(a==null||a(O),o==null||o(O),O.defaultPrevented||s==null||s())},p);return ox(O=>{E===l.layers.size-1&&(r==null||r(O),!O.defaultPrevented&&s&&(O.preventDefault(),s()))},p),x.useEffect(()=>{if(f)return n&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(bm=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(f)),l.layers.add(f),Tm(),()=>{n&&l.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=bm)}},[f,p,n,l]),x.useEffect(()=>()=>{f&&(l.layers.delete(f),l.layersWithOutsidePointerEventsDisabled.delete(f),Tm())},[f,l]),x.useEffect(()=>{const O=()=>h({});return document.addEventListener(Md,O),()=>document.removeEventListener(Md,O)},[]),_.jsx(It.div,{...u,ref:g,style:{pointerEvents:b?S?"auto":"none":void 0,...e.style},onFocusCapture:Qe(e.onFocusCapture,k.onFocusCapture),onBlurCapture:Qe(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:Qe(e.onPointerDownCapture,N.onPointerDownCapture)})});hh.displayName=sx;var cx="DismissableLayerBranch",$y=x.forwardRef((e,t)=>{const n=x.useContext(Vy),r=x.useRef(null),i=Tn(t,r);return x.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),_.jsx(It.div,{...e,ref:i})});$y.displayName=cx;function dx(e,t=globalThis==null?void 0:globalThis.document){const n=$r(e),r=x.useRef(!1),i=x.useRef(()=>{});return x.useEffect(()=>{const a=s=>{if(s.target&&!r.current){let u=function(){qy(ux,n,l,{discrete:!0})};const l={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=u,t.addEventListener("click",i.current,{once:!0})):u()}else t.removeEventListener("click",i.current);r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",a),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function fx(e,t=globalThis==null?void 0:globalThis.document){const n=$r(e),r=x.useRef(!1);return x.useEffect(()=>{const i=a=>{a.target&&!r.current&&qy(lx,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Tm(){const e=new CustomEvent(Md);document.dispatchEvent(e)}function qy(e,t,n,{discrete:r}){const i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?Yy(i,a):i.dispatchEvent(a)}var hx=hh,px=$y,qr=globalThis!=null&&globalThis.document?x.useLayoutEffect:()=>{},mx="Portal",Qy=x.forwardRef((e,t)=>{var s;const{container:n,...r}=e,[i,a]=x.useState(!1);qr(()=>a(!0),[]);const o=n||i&&((s=globalThis==null?void 0:globalThis.document)==null?void 0:s.body);return o?Hy.createPortal(_.jsx(It.div,{...r,ref:t}),o):null});Qy.displayName=mx;function gx(e,t){return x.useReducer((n,r)=>t[n][r]??n,e)}var ph=e=>{const{present:t,children:n}=e,r=yx(t),i=typeof n=="function"?n({present:r.isPresent}):x.Children.only(n),a=Tn(r.ref,Ex(i));return typeof n=="function"||r.isPresent?x.cloneElement(i,{ref:a}):null};ph.displayName="Presence";function yx(e){const[t,n]=x.useState(),r=x.useRef(null),i=x.useRef(e),a=x.useRef("none"),o=e?"mounted":"unmounted",[s,u]=gx(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return x.useEffect(()=>{const l=js(r.current);a.current=s==="mounted"?l:"none"},[s]),qr(()=>{const l=r.current,f=i.current;if(f!==e){const p=a.current,h=js(l);e?u("MOUNT"):h==="none"||(l==null?void 0:l.display)==="none"?u("UNMOUNT"):u(f&&p!==h?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,u]),qr(()=>{if(t){let l;const f=t.ownerDocument.defaultView??window,d=h=>{const y=js(r.current).includes(h.animationName);if(h.target===t&&y&&(u("ANIMATION_END"),!i.current)){const T=t.style.animationFillMode;t.style.animationFillMode="forwards",l=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=T)})}},p=h=>{h.target===t&&(a.current=js(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{f.clearTimeout(l),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:x.useCallback(l=>{r.current=l?getComputedStyle(l):null,n(l)},[])}}function js(e){return(e==null?void 0:e.animationName)||"none"}function Ex(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var bx=Mg[" useInsertionEffect ".trim().toString()]||qr;function Tx({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[i,a,o]=vx({defaultProp:t,onChange:n}),s=e!==void 0,u=s?e:i;{const f=x.useRef(e!==void 0);x.useEffect(()=>{const d=f.current;d!==s&&console.warn(`${r} is changing from ${d?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=s},[s,r])}const l=x.useCallback(f=>{var d;if(s){const p=wx(f)?f(e):f;p!==e&&((d=o.current)==null||d.call(o,p))}else a(f)},[s,e,a,o]);return[u,l]}function vx({defaultProp:e,onChange:t}){const[n,r]=x.useState(e),i=x.useRef(n),a=x.useRef(t);return bx(()=>{a.current=t},[t]),x.useEffect(()=>{var o;i.current!==n&&((o=a.current)==null||o.call(a,n),i.current=n)},[n,i]),[n,r,a]}function wx(e){return typeof e=="function"}var Cx=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),xx="VisuallyHidden",Tl=x.forwardRef((e,t)=>_.jsx(It.span,{...e,ref:t,style:{...Cx,...e.style}}));Tl.displayName=xx;var kx=Tl,mh="ToastProvider",[gh,Ax,Sx]=ix("Toast"),[Gy,R5]=bl("Toast",[Sx]),[Dx,vl]=Gy(mh),Ky=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:a=50,children:o}=e,[s,u]=x.useState(null),[l,f]=x.useState(0),d=x.useRef(!1),p=x.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${mh}\`. Expected non-empty \`string\`.`),_.jsx(gh.Provider,{scope:t,children:_.jsx(Dx,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:a,toastCount:l,viewport:s,onViewportChange:u,onToastAdd:x.useCallback(()=>f(h=>h+1),[]),onToastRemove:x.useCallback(()=>f(h=>h-1),[]),isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:p,children:o})})};Ky.displayName=mh;var Xy="ToastViewport",_x=["F8"],Bd="toast.viewportPause",Ud="toast.viewportResume",Jy=x.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=_x,label:i="Notifications ({hotkey})",...a}=e,o=vl(Xy,n),s=Ax(n),u=x.useRef(null),l=x.useRef(null),f=x.useRef(null),d=x.useRef(null),p=Tn(t,d,o.onViewportChange),h=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=o.toastCount>0;x.useEffect(()=>{const T=m=>{var b;r.length!==0&&r.every(S=>m[S]||m.code===S)&&((b=d.current)==null||b.focus())};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[r]),x.useEffect(()=>{const T=u.current,m=d.current;if(g&&T&&m){const E=()=>{if(!o.isClosePausedRef.current){const k=new CustomEvent(Bd);m.dispatchEvent(k),o.isClosePausedRef.current=!0}},b=()=>{if(o.isClosePausedRef.current){const k=new CustomEvent(Ud);m.dispatchEvent(k),o.isClosePausedRef.current=!1}},S=k=>{!T.contains(k.relatedTarget)&&b()},N=()=>{T.contains(document.activeElement)||b()};return T.addEventListener("focusin",E),T.addEventListener("focusout",S),T.addEventListener("pointermove",E),T.addEventListener("pointerleave",N),window.addEventListener("blur",E),window.addEventListener("focus",b),()=>{T.removeEventListener("focusin",E),T.removeEventListener("focusout",S),T.removeEventListener("pointermove",E),T.removeEventListener("pointerleave",N),window.removeEventListener("blur",E),window.removeEventListener("focus",b)}}},[g,o.isClosePausedRef]);const y=x.useCallback(({tabbingDirection:T})=>{const E=s().map(b=>{const S=b.ref.current,N=[S,...zx(S)];return T==="forwards"?N:N.reverse()});return(T==="forwards"?E.reverse():E).flat()},[s]);return x.useEffect(()=>{const T=d.current;if(T){const m=E=>{var N,k,O;const b=E.altKey||E.ctrlKey||E.metaKey;if(E.key==="Tab"&&!b){const M=document.activeElement,j=E.shiftKey;if(E.target===T&&j){(N=l.current)==null||N.focus();return}const B=y({tabbingDirection:j?"backwards":"forwards"}),J=B.findIndex(Y=>Y===M);Tc(B.slice(J+1))?E.preventDefault():j?(k=l.current)==null||k.focus():(O=f.current)==null||O.focus()}};return T.addEventListener("keydown",m),()=>T.removeEventListener("keydown",m)}},[s,y]),_.jsxs(px,{ref:u,role:"region","aria-label":i.replace("{hotkey}",h),tabIndex:-1,style:{pointerEvents:g?void 0:"none"},children:[g&&_.jsx(Hd,{ref:l,onFocusFromOutsideViewport:()=>{const T=y({tabbingDirection:"forwards"});Tc(T)}}),_.jsx(gh.Slot,{scope:n,children:_.jsx(It.ol,{tabIndex:-1,...a,ref:p})}),g&&_.jsx(Hd,{ref:f,onFocusFromOutsideViewport:()=>{const T=y({tabbingDirection:"backwards"});Tc(T)}})]})});Jy.displayName=Xy;var Zy="ToastFocusProxy",Hd=x.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,a=vl(Zy,n);return _.jsx(Tl,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:o=>{var l;const s=o.relatedTarget;!((l=a.viewport)!=null&&l.contains(s))&&r()}})});Hd.displayName=Zy;var hs="Toast",Ix="toast.swipeStart",Nx="toast.swipeMove",Lx="toast.swipeCancel",Ox="toast.swipeEnd",eE=x.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:a,...o}=e,[s,u]=Tx({prop:r,defaultProp:i??!0,onChange:a,caller:hs});return _.jsx(ph,{present:n||s,children:_.jsx(Fx,{open:s,...o,ref:t,onClose:()=>u(!1),onPause:$r(e.onPause),onResume:$r(e.onResume),onSwipeStart:Qe(e.onSwipeStart,l=>{l.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Qe(e.onSwipeMove,l=>{const{x:f,y:d}=l.detail.delta;l.currentTarget.setAttribute("data-swipe","move"),l.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${f}px`),l.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${d}px`)}),onSwipeCancel:Qe(e.onSwipeCancel,l=>{l.currentTarget.setAttribute("data-swipe","cancel"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Qe(e.onSwipeEnd,l=>{const{x:f,y:d}=l.detail.delta;l.currentTarget.setAttribute("data-swipe","end"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),l.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${f}px`),l.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${d}px`),u(!1)})})})});eE.displayName=hs;var[Rx,Px]=Gy(hs,{onClose(){}}),Fx=x.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:a,onClose:o,onEscapeKeyDown:s,onPause:u,onResume:l,onSwipeStart:f,onSwipeMove:d,onSwipeCancel:p,onSwipeEnd:h,...g}=e,y=vl(hs,n),[T,m]=x.useState(null),E=Tn(t,Y=>m(Y)),b=x.useRef(null),S=x.useRef(null),N=i||y.duration,k=x.useRef(0),O=x.useRef(N),M=x.useRef(0),{onToastAdd:j,onToastRemove:I}=y,z=$r(()=>{var X;(T==null?void 0:T.contains(document.activeElement))&&((X=y.viewport)==null||X.focus()),o()}),B=x.useCallback(Y=>{!Y||Y===1/0||(window.clearTimeout(M.current),k.current=new Date().getTime(),M.current=window.setTimeout(z,Y))},[z]);x.useEffect(()=>{const Y=y.viewport;if(Y){const X=()=>{B(O.current),l==null||l()},ee=()=>{const ne=new Date().getTime()-k.current;O.current=O.current-ne,window.clearTimeout(M.current),u==null||u()};return Y.addEventListener(Bd,ee),Y.addEventListener(Ud,X),()=>{Y.removeEventListener(Bd,ee),Y.removeEventListener(Ud,X)}}},[y.viewport,N,u,l,B]),x.useEffect(()=>{a&&!y.isClosePausedRef.current&&B(N)},[a,N,y.isClosePausedRef,B]),x.useEffect(()=>(j(),()=>I()),[j,I]);const J=x.useMemo(()=>T?sE(T):null,[T]);return y.viewport?_.jsxs(_.Fragment,{children:[J&&_.jsx(Mx,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:J}),_.jsx(Rx,{scope:n,onClose:z,children:fs.createPortal(_.jsx(gh.ItemSlot,{scope:n,children:_.jsx(hx,{asChild:!0,onEscapeKeyDown:Qe(s,()=>{y.isFocusedToastEscapeKeyDownRef.current||z(),y.isFocusedToastEscapeKeyDownRef.current=!1}),children:_.jsx(It.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":a?"open":"closed","data-swipe-direction":y.swipeDirection,...g,ref:E,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:Qe(e.onKeyDown,Y=>{Y.key==="Escape"&&(s==null||s(Y.nativeEvent),Y.nativeEvent.defaultPrevented||(y.isFocusedToastEscapeKeyDownRef.current=!0,z()))}),onPointerDown:Qe(e.onPointerDown,Y=>{Y.button===0&&(b.current={x:Y.clientX,y:Y.clientY})}),onPointerMove:Qe(e.onPointerMove,Y=>{if(!b.current)return;const X=Y.clientX-b.current.x,ee=Y.clientY-b.current.y,ne=!!S.current,F=["left","right"].includes(y.swipeDirection),H=["left","up"].includes(y.swipeDirection)?Math.min:Math.max,w=F?H(0,X):0,re=F?0:H(0,ee),te=Y.pointerType==="touch"?10:2,A={x:w,y:re},ae={originalEvent:Y,delta:A};ne?(S.current=A,zs(Nx,d,ae,{discrete:!1})):vm(A,y.swipeDirection,te)?(S.current=A,zs(Ix,f,ae,{discrete:!1}),Y.target.setPointerCapture(Y.pointerId)):(Math.abs(X)>te||Math.abs(ee)>te)&&(b.current=null)}),onPointerUp:Qe(e.onPointerUp,Y=>{const X=S.current,ee=Y.target;if(ee.hasPointerCapture(Y.pointerId)&&ee.releasePointerCapture(Y.pointerId),S.current=null,b.current=null,X){const ne=Y.currentTarget,F={originalEvent:Y,delta:X};vm(X,y.swipeDirection,y.swipeThreshold)?zs(Ox,h,F,{discrete:!0}):zs(Lx,p,F,{discrete:!0}),ne.addEventListener("click",H=>H.preventDefault(),{once:!0})}})})})}),y.viewport)})]}):null}),Mx=e=>{const{__scopeToast:t,children:n,...r}=e,i=vl(hs,t),[a,o]=x.useState(!1),[s,u]=x.useState(!1);return Hx(()=>o(!0)),x.useEffect(()=>{const l=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(l)},[]),s?null:_.jsx(Qy,{asChild:!0,children:_.jsx(Tl,{...r,children:a&&_.jsxs(_.Fragment,{children:[i.label," ",n]})})})},Bx="ToastTitle",tE=x.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return _.jsx(It.div,{...r,ref:t})});tE.displayName=Bx;var Ux="ToastDescription",nE=x.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return _.jsx(It.div,{...r,ref:t})});nE.displayName=Ux;var rE="ToastAction",iE=x.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?_.jsx(oE,{altText:n,asChild:!0,children:_.jsx(yh,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${rE}\`. Expected non-empty \`string\`.`),null)});iE.displayName=rE;var aE="ToastClose",yh=x.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,i=Px(aE,n);return _.jsx(oE,{asChild:!0,children:_.jsx(It.button,{type:"button",...r,ref:t,onClick:Qe(e.onClick,i.onClose)})})});yh.displayName=aE;var oE=x.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...i}=e;return _.jsx(It.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:t})});function sE(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),jx(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",a=r.dataset.radixToastAnnounceExclude==="";if(!i)if(a){const o=r.dataset.radixToastAnnounceAlt;o&&t.push(o)}else t.push(...sE(r))}}),t}function zs(e,t,n,{discrete:r}){const i=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?Yy(i,a):i.dispatchEvent(a)}var vm=(e,t,n=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),a=r>i;return t==="left"||t==="right"?a&&r>n:!a&&i>n};function Hx(e=()=>{}){const t=$r(e);qr(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function jx(e){return e.nodeType===e.ELEMENT_NODE}function zx(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Tc(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var Wx=Ky,uE=Jy,lE=eE,cE=tE,dE=nE,fE=iE,hE=yh;function pE(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=pE(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function mE(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=pE(e))&&(r&&(r+=" "),r+=t);return r}const wm=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Cm=mE,Yx=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Cm(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:a}=t,o=Object.keys(i).map(l=>{const f=n==null?void 0:n[l],d=a==null?void 0:a[l];if(f===null)return null;const p=wm(f)||wm(d);return i[l][p]}),s=n&&Object.entries(n).reduce((l,f)=>{let[d,p]=f;return p===void 0||(l[d]=p),l},{}),u=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((l,f)=>{let{class:d,className:p,...h}=f;return Object.entries(h).every(g=>{let[y,T]=g;return Array.isArray(T)?T.includes({...a,...s}[y]):{...a,...s}[y]===T})?[...l,d,p]:l},[]);return Cm(e,o,u,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gE=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $x={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:o,...s},u)=>x.createElement("svg",{ref:u,...$x,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:gE("lucide",i),...s},[...o.map(([l,f])=>x.createElement(l,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=(e,t)=>{const n=x.forwardRef(({className:r,...i},a)=>x.createElement(qx,{ref:a,iconNode:t,className:gE(`lucide-${Vx(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=Zr("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=Zr("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=Zr("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=Zr("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=Zr("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=Zr("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=Zr("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=Zr("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Eh="-",Zx=e=>{const t=t2(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:o=>{const s=o.split(Eh);return s[0]===""&&s.length!==1&&s.shift(),EE(s,t)||e2(o)},getConflictingClassGroupIds:(o,s)=>{const u=n[o]||[];return s&&r[o]?[...u,...r[o]]:u}}},EE=(e,t)=>{var o;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?EE(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const a=e.join(Eh);return(o=t.validators.find(({validator:s})=>s(a)))==null?void 0:o.classGroupId},km=/^\[(.+)\]$/,e2=e=>{if(km.test(e)){const t=km.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},t2=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return r2(Object.entries(e.classGroups),n).forEach(([a,o])=>{zd(o,r,a,t)}),r},zd=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const a=i===""?t:Am(t,i);a.classGroupId=n;return}if(typeof i=="function"){if(n2(i)){zd(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([a,o])=>{zd(o,Am(t,a),n,r)})})},Am=(e,t)=>{let n=e;return t.split(Eh).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},n2=e=>e.isThemeGetter,r2=(e,t)=>t?e.map(([n,r])=>{const i=r.map(a=>typeof a=="string"?t+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([o,s])=>[t+o,s])):a);return[n,i]}):e,i2=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(a,o)=>{n.set(a,o),t++,t>e&&(t=0,r=n,n=new Map)};return{get(a){let o=n.get(a);if(o!==void 0)return o;if((o=r.get(a))!==void 0)return i(a,o),o},set(a,o){n.has(a)?n.set(a,o):i(a,o)}}},bE="!",a2=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],a=t.length,o=s=>{const u=[];let l=0,f=0,d;for(let T=0;T<s.length;T++){let m=s[T];if(l===0){if(m===i&&(r||s.slice(T,T+a)===t)){u.push(s.slice(f,T)),f=T+a;continue}if(m==="/"){d=T;continue}}m==="["?l++:m==="]"&&l--}const p=u.length===0?s:s.substring(f),h=p.startsWith(bE),g=h?p.substring(1):p,y=d&&d>f?d-f:void 0;return{modifiers:u,hasImportantModifier:h,baseClassName:g,maybePostfixModifierPosition:y}};return n?s=>n({className:s,parseClassName:o}):o},o2=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},s2=e=>({cache:i2(e.cacheSize),parseClassName:a2(e),...Zx(e)}),u2=/\s+/,l2=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,a=[],o=e.trim().split(u2);let s="";for(let u=o.length-1;u>=0;u-=1){const l=o[u],{modifiers:f,hasImportantModifier:d,baseClassName:p,maybePostfixModifierPosition:h}=n(l);let g=!!h,y=r(g?p.substring(0,h):p);if(!y){if(!g){s=l+(s.length>0?" "+s:s);continue}if(y=r(p),!y){s=l+(s.length>0?" "+s:s);continue}g=!1}const T=o2(f).join(":"),m=d?T+bE:T,E=m+y;if(a.includes(E))continue;a.push(E);const b=i(y,g);for(let S=0;S<b.length;++S){const N=b[S];a.push(m+N)}s=l+(s.length>0?" "+s:s)}return s};function c2(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=TE(t))&&(r&&(r+=" "),r+=n);return r}const TE=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=TE(e[r]))&&(n&&(n+=" "),n+=t);return n};function d2(e,...t){let n,r,i,a=o;function o(u){const l=t.reduce((f,d)=>d(f),e());return n=s2(l),r=n.cache.get,i=n.cache.set,a=s,s(u)}function s(u){const l=r(u);if(l)return l;const f=l2(u,n);return i(u,f),f}return function(){return a(c2.apply(null,arguments))}}const _e=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},vE=/^\[(?:([a-z-]+):)?(.+)\]$/i,f2=/^\d+\/\d+$/,h2=new Set(["px","full","screen"]),p2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,m2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,g2=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,y2=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,E2=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Vn=e=>sa(e)||h2.has(e)||f2.test(e),gr=e=>Ra(e,"length",A2),sa=e=>!!e&&!Number.isNaN(Number(e)),vc=e=>Ra(e,"number",sa),to=e=>!!e&&Number.isInteger(Number(e)),b2=e=>e.endsWith("%")&&sa(e.slice(0,-1)),ce=e=>vE.test(e),yr=e=>p2.test(e),T2=new Set(["length","size","percentage"]),v2=e=>Ra(e,T2,wE),w2=e=>Ra(e,"position",wE),C2=new Set(["image","url"]),x2=e=>Ra(e,C2,D2),k2=e=>Ra(e,"",S2),no=()=>!0,Ra=(e,t,n)=>{const r=vE.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},A2=e=>m2.test(e)&&!g2.test(e),wE=()=>!1,S2=e=>y2.test(e),D2=e=>E2.test(e),_2=()=>{const e=_e("colors"),t=_e("spacing"),n=_e("blur"),r=_e("brightness"),i=_e("borderColor"),a=_e("borderRadius"),o=_e("borderSpacing"),s=_e("borderWidth"),u=_e("contrast"),l=_e("grayscale"),f=_e("hueRotate"),d=_e("invert"),p=_e("gap"),h=_e("gradientColorStops"),g=_e("gradientColorStopPositions"),y=_e("inset"),T=_e("margin"),m=_e("opacity"),E=_e("padding"),b=_e("saturate"),S=_e("scale"),N=_e("sepia"),k=_e("skew"),O=_e("space"),M=_e("translate"),j=()=>["auto","contain","none"],I=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto",ce,t],B=()=>[ce,t],J=()=>["",Vn,gr],Y=()=>["auto",sa,ce],X=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ee=()=>["solid","dashed","dotted","double","none"],ne=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],F=()=>["start","end","center","between","around","evenly","stretch"],H=()=>["","0",ce],w=()=>["auto","avoid","all","avoid-page","page","left","right","column"],re=()=>[sa,ce];return{cacheSize:500,separator:":",theme:{colors:[no],spacing:[Vn,gr],blur:["none","",yr,ce],brightness:re(),borderColor:[e],borderRadius:["none","","full",yr,ce],borderSpacing:B(),borderWidth:J(),contrast:re(),grayscale:H(),hueRotate:re(),invert:H(),gap:B(),gradientColorStops:[e],gradientColorStopPositions:[b2,gr],inset:z(),margin:z(),opacity:re(),padding:B(),saturate:re(),scale:re(),sepia:H(),skew:re(),space:B(),translate:B()},classGroups:{aspect:[{aspect:["auto","square","video",ce]}],container:["container"],columns:[{columns:[yr]}],"break-after":[{"break-after":w()}],"break-before":[{"break-before":w()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...X(),ce]}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",to,ce]}],basis:[{basis:z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ce]}],grow:[{grow:H()}],shrink:[{shrink:H()}],order:[{order:["first","last","none",to,ce]}],"grid-cols":[{"grid-cols":[no]}],"col-start-end":[{col:["auto",{span:["full",to,ce]},ce]}],"col-start":[{"col-start":Y()}],"col-end":[{"col-end":Y()}],"grid-rows":[{"grid-rows":[no]}],"row-start-end":[{row:["auto",{span:[to,ce]},ce]}],"row-start":[{"row-start":Y()}],"row-end":[{"row-end":Y()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ce]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ce]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...F()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...F(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...F(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[E]}],px:[{px:[E]}],py:[{py:[E]}],ps:[{ps:[E]}],pe:[{pe:[E]}],pt:[{pt:[E]}],pr:[{pr:[E]}],pb:[{pb:[E]}],pl:[{pl:[E]}],m:[{m:[T]}],mx:[{mx:[T]}],my:[{my:[T]}],ms:[{ms:[T]}],me:[{me:[T]}],mt:[{mt:[T]}],mr:[{mr:[T]}],mb:[{mb:[T]}],ml:[{ml:[T]}],"space-x":[{"space-x":[O]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[O]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ce,t]}],"min-w":[{"min-w":[ce,t,"min","max","fit"]}],"max-w":[{"max-w":[ce,t,"none","full","min","max","fit","prose",{screen:[yr]},yr]}],h:[{h:[ce,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ce,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ce,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ce,t,"auto","min","max","fit"]}],"font-size":[{text:["base",yr,gr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",vc]}],"font-family":[{font:[no]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ce]}],"line-clamp":[{"line-clamp":["none",sa,vc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Vn,ce]}],"list-image":[{"list-image":["none",ce]}],"list-style-type":[{list:["none","disc","decimal",ce]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ee(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Vn,gr]}],"underline-offset":[{"underline-offset":["auto",Vn,ce]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ce]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ce]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...X(),w2]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",v2]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},x2]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...ee(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:ee()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...ee()]}],"outline-offset":[{"outline-offset":[Vn,ce]}],"outline-w":[{outline:[Vn,gr]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[Vn,gr]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",yr,k2]}],"shadow-color":[{shadow:[no]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":[...ne(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ne()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",yr,ce]}],grayscale:[{grayscale:[l]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[d]}],saturate:[{saturate:[b]}],sepia:[{sepia:[N]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[l]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[b]}],"backdrop-sepia":[{"backdrop-sepia":[N]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ce]}],duration:[{duration:re()}],ease:[{ease:["linear","in","out","in-out",ce]}],delay:[{delay:re()}],animate:[{animate:["none","spin","ping","pulse","bounce",ce]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[to,ce]}],"translate-x":[{"translate-x":[M]}],"translate-y":[{"translate-y":[M]}],"skew-x":[{"skew-x":[k]}],"skew-y":[{"skew-y":[k]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ce]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ce]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ce]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Vn,gr,vc]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},I2=d2(_2);function vn(...e){return I2(mE(e))}const N2=Wx,CE=x.forwardRef(({className:e,...t},n)=>_.jsx(uE,{ref:n,className:vn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));CE.displayName=uE.displayName;const L2=Yx("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),xE=x.forwardRef(({className:e,variant:t,...n},r)=>_.jsx(lE,{ref:r,className:vn(L2({variant:t}),e),...n}));xE.displayName=lE.displayName;const O2=x.forwardRef(({className:e,...t},n)=>_.jsx(fE,{ref:n,className:vn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));O2.displayName=fE.displayName;const kE=x.forwardRef(({className:e,...t},n)=>_.jsx(hE,{ref:n,className:vn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:_.jsx(yE,{className:"h-4 w-4"})}));kE.displayName=hE.displayName;const AE=x.forwardRef(({className:e,...t},n)=>_.jsx(cE,{ref:n,className:vn("text-sm font-semibold",e),...t}));AE.displayName=cE.displayName;const SE=x.forwardRef(({className:e,...t},n)=>_.jsx(dE,{ref:n,className:vn("text-sm opacity-90",e),...t}));SE.displayName=dE.displayName;function R2(){const{toasts:e}=XC();return _.jsxs(N2,{children:[e.map(function({id:t,title:n,description:r,action:i,...a}){return _.jsxs(xE,{...a,children:[_.jsxs("div",{className:"grid gap-1",children:[n&&_.jsx(AE,{children:n}),r&&_.jsx(SE,{children:r})]}),i,_.jsx(kE,{})]},t)}),_.jsx(CE,{})]})}var Sm=["light","dark"],P2="(prefers-color-scheme: dark)",F2=x.createContext(void 0),M2={setTheme:e=>{},themes:[]},B2=()=>{var e;return(e=x.useContext(F2))!=null?e:M2};x.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:a,value:o,attrs:s,nonce:u})=>{let l=a==="system",f=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${s.map(g=>`'${g}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,d=i?Sm.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(g,y=!1,T=!0)=>{let m=o?o[g]:g,E=y?g+"|| ''":`'${m}'`,b="";return i&&T&&!y&&Sm.includes(g)&&(b+=`d.style.colorScheme = '${g}';`),n==="class"?y||m?b+=`c.add(${E})`:b+="null":m&&(b+=`d[s](n,${E})`),b},h=e?`!function(){${f}${p(e)}}()`:r?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${l})){var t='${P2}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${p(o?"x[e]":"e",!0)}}${l?"":"else{"+p(a,!1,!1)+"}"}${d}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${p(o?"x[e]":"e",!0)}}else{${p(a,!1,!1)};}${d}}catch(t){}}();`;return x.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:h}})});var U2=e=>{switch(e){case"success":return z2;case"info":return Y2;case"warning":return W2;case"error":return V2;default:return null}},H2=Array(12).fill(0),j2=({visible:e,className:t})=>K.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},K.createElement("div",{className:"sonner-spinner"},H2.map((n,r)=>K.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),z2=K.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},K.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),W2=K.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},K.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Y2=K.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},K.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),V2=K.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},K.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),$2=K.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},K.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),K.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),q2=()=>{let[e,t]=K.useState(document.hidden);return K.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},Wd=1,Q2=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,i=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Wd++,a=this.toasts.find(s=>s.id===i),o=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),a?this.toasts=this.toasts.map(s=>s.id===i?(this.publish({...s,...e,id:i,title:n}),{...s,...e,id:i,dismissible:o,title:n}):s):this.addToast({title:n,...r,dismissible:o,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),i=n!==void 0,a,o=r.then(async u=>{if(a=["resolve",u],K.isValidElement(u))i=!1,this.create({id:n,type:"default",message:u});else if(K2(u)&&!u.ok){i=!1;let l=typeof t.error=="function"?await t.error(`HTTP error! status: ${u.status}`):t.error,f=typeof t.description=="function"?await t.description(`HTTP error! status: ${u.status}`):t.description;this.create({id:n,type:"error",message:l,description:f})}else if(t.success!==void 0){i=!1;let l=typeof t.success=="function"?await t.success(u):t.success,f=typeof t.description=="function"?await t.description(u):t.description;this.create({id:n,type:"success",message:l,description:f})}}).catch(async u=>{if(a=["reject",u],t.error!==void 0){i=!1;let l=typeof t.error=="function"?await t.error(u):t.error,f=typeof t.description=="function"?await t.description(u):t.description;this.create({id:n,type:"error",message:l,description:f})}}).finally(()=>{var u;i&&(this.dismiss(n),n=void 0),(u=t.finally)==null||u.call(t)}),s=()=>new Promise((u,l)=>o.then(()=>a[0]==="reject"?l(a[1]):u(a[1])).catch(l));return typeof n!="string"&&typeof n!="number"?{unwrap:s}:Object.assign(n,{unwrap:s})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||Wd++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},xt=new Q2,G2=(e,t)=>{let n=(t==null?void 0:t.id)||Wd++;return xt.addToast({title:e,...t,id:n}),n},K2=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",X2=G2,J2=()=>xt.toasts,Z2=()=>xt.getActiveToasts();Object.assign(X2,{success:xt.success,info:xt.info,warning:xt.warning,error:xt.error,custom:xt.custom,message:xt.message,promise:xt.promise,dismiss:xt.dismiss,loading:xt.loading},{getHistory:J2,getToasts:Z2});function ek(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}ek(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Ws(e){return e.label!==void 0}var tk=3,nk="32px",rk="16px",Dm=4e3,ik=356,ak=14,ok=20,sk=200;function ln(...e){return e.filter(Boolean).join(" ")}function uk(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var lk=e=>{var t,n,r,i,a,o,s,u,l,f,d;let{invert:p,toast:h,unstyled:g,interacting:y,setHeights:T,visibleToasts:m,heights:E,index:b,toasts:S,expanded:N,removeToast:k,defaultRichColors:O,closeButton:M,style:j,cancelButtonStyle:I,actionButtonStyle:z,className:B="",descriptionClassName:J="",duration:Y,position:X,gap:ee,loadingIcon:ne,expandByDefault:F,classNames:H,icons:w,closeButtonAriaLabel:re="Close toast",pauseWhenPageIsHidden:te}=e,[A,ae]=K.useState(null),[Ce,ye]=K.useState(null),[ge,ft]=K.useState(!1),[ht,vt]=K.useState(!1),[Lt,lr]=K.useState(!1),[kn,Fi]=K.useState(!1),[Mi,ri]=K.useState(!1),[Bi,ii]=K.useState(0),[Wn,$a]=K.useState(0),ai=K.useRef(h.duration||Y||Dm),ws=K.useRef(null),Yn=K.useRef(null),zl=b===0,Wl=b+1<=m,P=h.type,G=h.dismissible!==!1,oe=h.className||"",he=h.descriptionClassName||"",Te=K.useMemo(()=>E.findIndex(se=>se.toastId===h.id)||0,[E,h.id]),Ot=K.useMemo(()=>{var se;return(se=h.closeButton)!=null?se:M},[h.closeButton,M]),An=K.useMemo(()=>h.duration||Y||Dm,[h.duration,Y]),Rt=K.useRef(0),$t=K.useRef(0),cr=K.useRef(0),We=K.useRef(null),[dr,rn]=X.split("-"),ap=K.useMemo(()=>E.reduce((se,xe,Le)=>Le>=Te?se:se+xe.height,0),[E,Te]),op=q2(),Ev=h.invert||p,Yl=P==="loading";$t.current=K.useMemo(()=>Te*ee+ap,[Te,ap]),K.useEffect(()=>{ai.current=An},[An]),K.useEffect(()=>{ft(!0)},[]),K.useEffect(()=>{let se=Yn.current;if(se){let xe=se.getBoundingClientRect().height;return $a(xe),T(Le=>[{toastId:h.id,height:xe,position:h.position},...Le]),()=>T(Le=>Le.filter(an=>an.toastId!==h.id))}},[T,h.id]),K.useLayoutEffect(()=>{if(!ge)return;let se=Yn.current,xe=se.style.height;se.style.height="auto";let Le=se.getBoundingClientRect().height;se.style.height=xe,$a(Le),T(an=>an.find(on=>on.toastId===h.id)?an.map(on=>on.toastId===h.id?{...on,height:Le}:on):[{toastId:h.id,height:Le,position:h.position},...an])},[ge,h.title,h.description,T,h.id]);let fr=K.useCallback(()=>{vt(!0),ii($t.current),T(se=>se.filter(xe=>xe.toastId!==h.id)),setTimeout(()=>{k(h)},sk)},[h,k,T,$t]);K.useEffect(()=>{if(h.promise&&P==="loading"||h.duration===1/0||h.type==="loading")return;let se;return N||y||te&&op?(()=>{if(cr.current<Rt.current){let xe=new Date().getTime()-Rt.current;ai.current=ai.current-xe}cr.current=new Date().getTime()})():ai.current!==1/0&&(Rt.current=new Date().getTime(),se=setTimeout(()=>{var xe;(xe=h.onAutoClose)==null||xe.call(h,h),fr()},ai.current)),()=>clearTimeout(se)},[N,y,h,P,te,op,fr]),K.useEffect(()=>{h.delete&&fr()},[fr,h.delete]);function bv(){var se,xe,Le;return w!=null&&w.loading?K.createElement("div",{className:ln(H==null?void 0:H.loader,(se=h==null?void 0:h.classNames)==null?void 0:se.loader,"sonner-loader"),"data-visible":P==="loading"},w.loading):ne?K.createElement("div",{className:ln(H==null?void 0:H.loader,(xe=h==null?void 0:h.classNames)==null?void 0:xe.loader,"sonner-loader"),"data-visible":P==="loading"},ne):K.createElement(j2,{className:ln(H==null?void 0:H.loader,(Le=h==null?void 0:h.classNames)==null?void 0:Le.loader),visible:P==="loading"})}return K.createElement("li",{tabIndex:0,ref:Yn,className:ln(B,oe,H==null?void 0:H.toast,(t=h==null?void 0:h.classNames)==null?void 0:t.toast,H==null?void 0:H.default,H==null?void 0:H[P],(n=h==null?void 0:h.classNames)==null?void 0:n[P]),"data-sonner-toast":"","data-rich-colors":(r=h.richColors)!=null?r:O,"data-styled":!(h.jsx||h.unstyled||g),"data-mounted":ge,"data-promise":!!h.promise,"data-swiped":Mi,"data-removed":ht,"data-visible":Wl,"data-y-position":dr,"data-x-position":rn,"data-index":b,"data-front":zl,"data-swiping":Lt,"data-dismissible":G,"data-type":P,"data-invert":Ev,"data-swipe-out":kn,"data-swipe-direction":Ce,"data-expanded":!!(N||F&&ge),style:{"--index":b,"--toasts-before":b,"--z-index":S.length-b,"--offset":`${ht?Bi:$t.current}px`,"--initial-height":F?"auto":`${Wn}px`,...j,...h.style},onDragEnd:()=>{lr(!1),ae(null),We.current=null},onPointerDown:se=>{Yl||!G||(ws.current=new Date,ii($t.current),se.target.setPointerCapture(se.pointerId),se.target.tagName!=="BUTTON"&&(lr(!0),We.current={x:se.clientX,y:se.clientY}))},onPointerUp:()=>{var se,xe,Le,an;if(kn||!G)return;We.current=null;let on=Number(((se=Yn.current)==null?void 0:se.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),hr=Number(((xe=Yn.current)==null?void 0:xe.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),oi=new Date().getTime()-((Le=ws.current)==null?void 0:Le.getTime()),sn=A==="x"?on:hr,pr=Math.abs(sn)/oi;if(Math.abs(sn)>=ok||pr>.11){ii($t.current),(an=h.onDismiss)==null||an.call(h,h),ye(A==="x"?on>0?"right":"left":hr>0?"down":"up"),fr(),Fi(!0),ri(!1);return}lr(!1),ae(null)},onPointerMove:se=>{var xe,Le,an,on;if(!We.current||!G||((xe=window.getSelection())==null?void 0:xe.toString().length)>0)return;let hr=se.clientY-We.current.y,oi=se.clientX-We.current.x,sn=(Le=e.swipeDirections)!=null?Le:uk(X);!A&&(Math.abs(oi)>1||Math.abs(hr)>1)&&ae(Math.abs(oi)>Math.abs(hr)?"x":"y");let pr={x:0,y:0};A==="y"?(sn.includes("top")||sn.includes("bottom"))&&(sn.includes("top")&&hr<0||sn.includes("bottom")&&hr>0)&&(pr.y=hr):A==="x"&&(sn.includes("left")||sn.includes("right"))&&(sn.includes("left")&&oi<0||sn.includes("right")&&oi>0)&&(pr.x=oi),(Math.abs(pr.x)>0||Math.abs(pr.y)>0)&&ri(!0),(an=Yn.current)==null||an.style.setProperty("--swipe-amount-x",`${pr.x}px`),(on=Yn.current)==null||on.style.setProperty("--swipe-amount-y",`${pr.y}px`)}},Ot&&!h.jsx?K.createElement("button",{"aria-label":re,"data-disabled":Yl,"data-close-button":!0,onClick:Yl||!G?()=>{}:()=>{var se;fr(),(se=h.onDismiss)==null||se.call(h,h)},className:ln(H==null?void 0:H.closeButton,(i=h==null?void 0:h.classNames)==null?void 0:i.closeButton)},(a=w==null?void 0:w.close)!=null?a:$2):null,h.jsx||x.isValidElement(h.title)?h.jsx?h.jsx:typeof h.title=="function"?h.title():h.title:K.createElement(K.Fragment,null,P||h.icon||h.promise?K.createElement("div",{"data-icon":"",className:ln(H==null?void 0:H.icon,(o=h==null?void 0:h.classNames)==null?void 0:o.icon)},h.promise||h.type==="loading"&&!h.icon?h.icon||bv():null,h.type!=="loading"?h.icon||(w==null?void 0:w[P])||U2(P):null):null,K.createElement("div",{"data-content":"",className:ln(H==null?void 0:H.content,(s=h==null?void 0:h.classNames)==null?void 0:s.content)},K.createElement("div",{"data-title":"",className:ln(H==null?void 0:H.title,(u=h==null?void 0:h.classNames)==null?void 0:u.title)},typeof h.title=="function"?h.title():h.title),h.description?K.createElement("div",{"data-description":"",className:ln(J,he,H==null?void 0:H.description,(l=h==null?void 0:h.classNames)==null?void 0:l.description)},typeof h.description=="function"?h.description():h.description):null),x.isValidElement(h.cancel)?h.cancel:h.cancel&&Ws(h.cancel)?K.createElement("button",{"data-button":!0,"data-cancel":!0,style:h.cancelButtonStyle||I,onClick:se=>{var xe,Le;Ws(h.cancel)&&G&&((Le=(xe=h.cancel).onClick)==null||Le.call(xe,se),fr())},className:ln(H==null?void 0:H.cancelButton,(f=h==null?void 0:h.classNames)==null?void 0:f.cancelButton)},h.cancel.label):null,x.isValidElement(h.action)?h.action:h.action&&Ws(h.action)?K.createElement("button",{"data-button":!0,"data-action":!0,style:h.actionButtonStyle||z,onClick:se=>{var xe,Le;Ws(h.action)&&((Le=(xe=h.action).onClick)==null||Le.call(xe,se),!se.defaultPrevented&&fr())},className:ln(H==null?void 0:H.actionButton,(d=h==null?void 0:h.classNames)==null?void 0:d.actionButton)},h.action.label):null))};function _m(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function ck(e,t){let n={};return[e,t].forEach((r,i)=>{let a=i===1,o=a?"--mobile-offset":"--offset",s=a?rk:nk;function u(l){["top","right","bottom","left"].forEach(f=>{n[`${o}-${f}`]=typeof l=="number"?`${l}px`:l})}typeof r=="number"||typeof r=="string"?u(r):typeof r=="object"?["top","right","bottom","left"].forEach(l=>{r[l]===void 0?n[`${o}-${l}`]=s:n[`${o}-${l}`]=typeof r[l]=="number"?`${r[l]}px`:r[l]}):u(s)}),n}var dk=x.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:i=["altKey","KeyT"],expand:a,closeButton:o,className:s,offset:u,mobileOffset:l,theme:f="light",richColors:d,duration:p,style:h,visibleToasts:g=tk,toastOptions:y,dir:T=_m(),gap:m=ak,loadingIcon:E,icons:b,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:N}=e,[k,O]=K.useState([]),M=K.useMemo(()=>Array.from(new Set([r].concat(k.filter(te=>te.position).map(te=>te.position)))),[k,r]),[j,I]=K.useState([]),[z,B]=K.useState(!1),[J,Y]=K.useState(!1),[X,ee]=K.useState(f!=="system"?f:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),ne=K.useRef(null),F=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),H=K.useRef(null),w=K.useRef(!1),re=K.useCallback(te=>{O(A=>{var ae;return(ae=A.find(Ce=>Ce.id===te.id))!=null&&ae.delete||xt.dismiss(te.id),A.filter(({id:Ce})=>Ce!==te.id)})},[]);return K.useEffect(()=>xt.subscribe(te=>{if(te.dismiss){O(A=>A.map(ae=>ae.id===te.id?{...ae,delete:!0}:ae));return}setTimeout(()=>{Hy.flushSync(()=>{O(A=>{let ae=A.findIndex(Ce=>Ce.id===te.id);return ae!==-1?[...A.slice(0,ae),{...A[ae],...te},...A.slice(ae+1)]:[te,...A]})})})}),[]),K.useEffect(()=>{if(f!=="system"){ee(f);return}if(f==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ee("dark"):ee("light")),typeof window>"u")return;let te=window.matchMedia("(prefers-color-scheme: dark)");try{te.addEventListener("change",({matches:A})=>{ee(A?"dark":"light")})}catch{te.addListener(({matches:ae})=>{try{ee(ae?"dark":"light")}catch(Ce){console.error(Ce)}})}},[f]),K.useEffect(()=>{k.length<=1&&B(!1)},[k]),K.useEffect(()=>{let te=A=>{var ae,Ce;i.every(ye=>A[ye]||A.code===ye)&&(B(!0),(ae=ne.current)==null||ae.focus()),A.code==="Escape"&&(document.activeElement===ne.current||(Ce=ne.current)!=null&&Ce.contains(document.activeElement))&&B(!1)};return document.addEventListener("keydown",te),()=>document.removeEventListener("keydown",te)},[i]),K.useEffect(()=>{if(ne.current)return()=>{H.current&&(H.current.focus({preventScroll:!0}),H.current=null,w.current=!1)}},[ne.current]),K.createElement("section",{ref:t,"aria-label":`${S} ${F}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},M.map((te,A)=>{var ae;let[Ce,ye]=te.split("-");return k.length?K.createElement("ol",{key:te,dir:T==="auto"?_m():T,tabIndex:-1,ref:ne,className:s,"data-sonner-toaster":!0,"data-theme":X,"data-y-position":Ce,"data-lifted":z&&k.length>1&&!a,"data-x-position":ye,style:{"--front-toast-height":`${((ae=j[0])==null?void 0:ae.height)||0}px`,"--width":`${ik}px`,"--gap":`${m}px`,...h,...ck(u,l)},onBlur:ge=>{w.current&&!ge.currentTarget.contains(ge.relatedTarget)&&(w.current=!1,H.current&&(H.current.focus({preventScroll:!0}),H.current=null))},onFocus:ge=>{ge.target instanceof HTMLElement&&ge.target.dataset.dismissible==="false"||w.current||(w.current=!0,H.current=ge.relatedTarget)},onMouseEnter:()=>B(!0),onMouseMove:()=>B(!0),onMouseLeave:()=>{J||B(!1)},onDragEnd:()=>B(!1),onPointerDown:ge=>{ge.target instanceof HTMLElement&&ge.target.dataset.dismissible==="false"||Y(!0)},onPointerUp:()=>Y(!1)},k.filter(ge=>!ge.position&&A===0||ge.position===te).map((ge,ft)=>{var ht,vt;return K.createElement(lk,{key:ge.id,icons:b,index:ft,toast:ge,defaultRichColors:d,duration:(ht=y==null?void 0:y.duration)!=null?ht:p,className:y==null?void 0:y.className,descriptionClassName:y==null?void 0:y.descriptionClassName,invert:n,visibleToasts:g,closeButton:(vt=y==null?void 0:y.closeButton)!=null?vt:o,interacting:J,position:te,style:y==null?void 0:y.style,unstyled:y==null?void 0:y.unstyled,classNames:y==null?void 0:y.classNames,cancelButtonStyle:y==null?void 0:y.cancelButtonStyle,actionButtonStyle:y==null?void 0:y.actionButtonStyle,removeToast:re,toasts:k.filter(Lt=>Lt.position==ge.position),heights:j.filter(Lt=>Lt.position==ge.position),setHeights:I,expandByDefault:a,gap:m,loadingIcon:E,expanded:z,pauseWhenPageIsHidden:N,swipeDirections:e.swipeDirections})})):null}))});const fk=({...e})=>{const{theme:t="system"}=B2();return _.jsx(dk,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},hk=["top","right","bottom","left"],Qr=Math.min,Bt=Math.max,zu=Math.round,Ys=Math.floor,Bn=e=>({x:e,y:e}),pk={left:"right",right:"left",bottom:"top",top:"bottom"},mk={start:"end",end:"start"};function Yd(e,t,n){return Bt(e,Qr(t,n))}function ir(e,t){return typeof e=="function"?e(t):e}function ar(e){return e.split("-")[0]}function Pa(e){return e.split("-")[1]}function bh(e){return e==="x"?"y":"x"}function Th(e){return e==="y"?"height":"width"}const gk=new Set(["top","bottom"]);function Pn(e){return gk.has(ar(e))?"y":"x"}function vh(e){return bh(Pn(e))}function yk(e,t,n){n===void 0&&(n=!1);const r=Pa(e),i=vh(e),a=Th(i);let o=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(o=Wu(o)),[o,Wu(o)]}function Ek(e){const t=Wu(e);return[Vd(e),t,Vd(t)]}function Vd(e){return e.replace(/start|end/g,t=>mk[t])}const Im=["left","right"],Nm=["right","left"],bk=["top","bottom"],Tk=["bottom","top"];function vk(e,t,n){switch(e){case"top":case"bottom":return n?t?Nm:Im:t?Im:Nm;case"left":case"right":return t?bk:Tk;default:return[]}}function wk(e,t,n,r){const i=Pa(e);let a=vk(ar(e),n==="start",r);return i&&(a=a.map(o=>o+"-"+i),t&&(a=a.concat(a.map(Vd)))),a}function Wu(e){return e.replace(/left|right|bottom|top/g,t=>pk[t])}function Ck(e){return{top:0,right:0,bottom:0,left:0,...e}}function DE(e){return typeof e!="number"?Ck(e):{top:e,right:e,bottom:e,left:e}}function Yu(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Lm(e,t,n){let{reference:r,floating:i}=e;const a=Pn(t),o=vh(t),s=Th(o),u=ar(t),l=a==="y",f=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,p=r[s]/2-i[s]/2;let h;switch(u){case"top":h={x:f,y:r.y-i.height};break;case"bottom":h={x:f,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:d};break;case"left":h={x:r.x-i.width,y:d};break;default:h={x:r.x,y:r.y}}switch(Pa(t)){case"start":h[o]-=p*(n&&l?-1:1);break;case"end":h[o]+=p*(n&&l?-1:1);break}return h}const xk=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:a=[],platform:o}=n,s=a.filter(Boolean),u=await(o.isRTL==null?void 0:o.isRTL(t));let l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:f,y:d}=Lm(l,r,u),p=r,h={},g=0;for(let y=0;y<s.length;y++){const{name:T,fn:m}=s[y],{x:E,y:b,data:S,reset:N}=await m({x:f,y:d,initialPlacement:r,placement:p,strategy:i,middlewareData:h,rects:l,platform:o,elements:{reference:e,floating:t}});f=E??f,d=b??d,h={...h,[T]:{...h[T],...S}},N&&g<=50&&(g++,typeof N=="object"&&(N.placement&&(p=N.placement),N.rects&&(l=N.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):N.rects),{x:f,y:d}=Lm(l,p,u)),y=-1)}return{x:f,y:d,placement:p,strategy:i,middlewareData:h}};async function Qo(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:a,rects:o,elements:s,strategy:u}=e,{boundary:l="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:p=!1,padding:h=0}=ir(t,e),g=DE(h),T=s[p?d==="floating"?"reference":"floating":d],m=Yu(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(T)))==null||n?T:T.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(s.floating)),boundary:l,rootBoundary:f,strategy:u})),E=d==="floating"?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,b=await(a.getOffsetParent==null?void 0:a.getOffsetParent(s.floating)),S=await(a.isElement==null?void 0:a.isElement(b))?await(a.getScale==null?void 0:a.getScale(b))||{x:1,y:1}:{x:1,y:1},N=Yu(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:E,offsetParent:b,strategy:u}):E);return{top:(m.top-N.top+g.top)/S.y,bottom:(N.bottom-m.bottom+g.bottom)/S.y,left:(m.left-N.left+g.left)/S.x,right:(N.right-m.right+g.right)/S.x}}const kk=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:u}=t,{element:l,padding:f=0}=ir(e,t)||{};if(l==null)return{};const d=DE(f),p={x:n,y:r},h=vh(i),g=Th(h),y=await o.getDimensions(l),T=h==="y",m=T?"top":"left",E=T?"bottom":"right",b=T?"clientHeight":"clientWidth",S=a.reference[g]+a.reference[h]-p[h]-a.floating[g],N=p[h]-a.reference[h],k=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l));let O=k?k[b]:0;(!O||!await(o.isElement==null?void 0:o.isElement(k)))&&(O=s.floating[b]||a.floating[g]);const M=S/2-N/2,j=O/2-y[g]/2-1,I=Qr(d[m],j),z=Qr(d[E],j),B=I,J=O-y[g]-z,Y=O/2-y[g]/2+M,X=Yd(B,Y,J),ee=!u.arrow&&Pa(i)!=null&&Y!==X&&a.reference[g]/2-(Y<B?I:z)-y[g]/2<0,ne=ee?Y<B?Y-B:Y-J:0;return{[h]:p[h]+ne,data:{[h]:X,centerOffset:Y-X-ne,...ee&&{alignmentOffset:ne}},reset:ee}}}),Ak=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:a,rects:o,initialPlacement:s,platform:u,elements:l}=t,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...T}=ir(e,t);if((n=a.arrow)!=null&&n.alignmentOffset)return{};const m=ar(i),E=Pn(s),b=ar(s)===s,S=await(u.isRTL==null?void 0:u.isRTL(l.floating)),N=p||(b||!y?[Wu(s)]:Ek(s)),k=g!=="none";!p&&k&&N.push(...wk(s,y,g,S));const O=[s,...N],M=await Qo(t,T),j=[];let I=((r=a.flip)==null?void 0:r.overflows)||[];if(f&&j.push(M[m]),d){const Y=yk(i,o,S);j.push(M[Y[0]],M[Y[1]])}if(I=[...I,{placement:i,overflows:j}],!j.every(Y=>Y<=0)){var z,B;const Y=(((z=a.flip)==null?void 0:z.index)||0)+1,X=O[Y];if(X&&(!(d==="alignment"?E!==Pn(X):!1)||I.every(F=>F.overflows[0]>0&&Pn(F.placement)===E)))return{data:{index:Y,overflows:I},reset:{placement:X}};let ee=(B=I.filter(ne=>ne.overflows[0]<=0).sort((ne,F)=>ne.overflows[1]-F.overflows[1])[0])==null?void 0:B.placement;if(!ee)switch(h){case"bestFit":{var J;const ne=(J=I.filter(F=>{if(k){const H=Pn(F.placement);return H===E||H==="y"}return!0}).map(F=>[F.placement,F.overflows.filter(H=>H>0).reduce((H,w)=>H+w,0)]).sort((F,H)=>F[1]-H[1])[0])==null?void 0:J[0];ne&&(ee=ne);break}case"initialPlacement":ee=s;break}if(i!==ee)return{reset:{placement:ee}}}return{}}}};function Om(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Rm(e){return hk.some(t=>e[t]>=0)}const Sk=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=ir(e,t);switch(r){case"referenceHidden":{const a=await Qo(t,{...i,elementContext:"reference"}),o=Om(a,n.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:Rm(o)}}}case"escaped":{const a=await Qo(t,{...i,altBoundary:!0}),o=Om(a,n.floating);return{data:{escapedOffsets:o,escaped:Rm(o)}}}default:return{}}}}},_E=new Set(["left","top"]);async function Dk(e,t){const{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=ar(n),s=Pa(n),u=Pn(n)==="y",l=_E.has(o)?-1:1,f=a&&u?-1:1,d=ir(t,e);let{mainAxis:p,crossAxis:h,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof g=="number"&&(h=s==="end"?g*-1:g),u?{x:h*f,y:p*l}:{x:p*l,y:h*f}}const _k=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:a,placement:o,middlewareData:s}=t,u=await Dk(t,e);return o===((n=s.offset)==null?void 0:n.placement)&&(r=s.arrow)!=null&&r.alignmentOffset?{}:{x:i+u.x,y:a+u.y,data:{...u,placement:o}}}}},Ik=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:T=>{let{x:m,y:E}=T;return{x:m,y:E}}},...u}=ir(e,t),l={x:n,y:r},f=await Qo(t,u),d=Pn(ar(i)),p=bh(d);let h=l[p],g=l[d];if(a){const T=p==="y"?"top":"left",m=p==="y"?"bottom":"right",E=h+f[T],b=h-f[m];h=Yd(E,h,b)}if(o){const T=d==="y"?"top":"left",m=d==="y"?"bottom":"right",E=g+f[T],b=g-f[m];g=Yd(E,g,b)}const y=s.fn({...t,[p]:h,[d]:g});return{...y,data:{x:y.x-n,y:y.y-r,enabled:{[p]:a,[d]:o}}}}}},Nk=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:a,middlewareData:o}=t,{offset:s=0,mainAxis:u=!0,crossAxis:l=!0}=ir(e,t),f={x:n,y:r},d=Pn(i),p=bh(d);let h=f[p],g=f[d];const y=ir(s,t),T=typeof y=="number"?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(u){const b=p==="y"?"height":"width",S=a.reference[p]-a.floating[b]+T.mainAxis,N=a.reference[p]+a.reference[b]-T.mainAxis;h<S?h=S:h>N&&(h=N)}if(l){var m,E;const b=p==="y"?"width":"height",S=_E.has(ar(i)),N=a.reference[d]-a.floating[b]+(S&&((m=o.offset)==null?void 0:m[d])||0)+(S?0:T.crossAxis),k=a.reference[d]+a.reference[b]+(S?0:((E=o.offset)==null?void 0:E[d])||0)-(S?T.crossAxis:0);g<N?g=N:g>k&&(g=k)}return{[p]:h,[d]:g}}}},Lk=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:a,platform:o,elements:s}=t,{apply:u=()=>{},...l}=ir(e,t),f=await Qo(t,l),d=ar(i),p=Pa(i),h=Pn(i)==="y",{width:g,height:y}=a.floating;let T,m;d==="top"||d==="bottom"?(T=d,m=p===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?"start":"end")?"left":"right"):(m=d,T=p==="end"?"top":"bottom");const E=y-f.top-f.bottom,b=g-f.left-f.right,S=Qr(y-f[T],E),N=Qr(g-f[m],b),k=!t.middlewareData.shift;let O=S,M=N;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(M=b),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(O=E),k&&!p){const I=Bt(f.left,0),z=Bt(f.right,0),B=Bt(f.top,0),J=Bt(f.bottom,0);h?M=g-2*(I!==0||z!==0?I+z:Bt(f.left,f.right)):O=y-2*(B!==0||J!==0?B+J:Bt(f.top,f.bottom))}await u({...t,availableWidth:M,availableHeight:O});const j=await o.getDimensions(s.floating);return g!==j.width||y!==j.height?{reset:{rects:!0}}:{}}}};function wl(){return typeof window<"u"}function Fa(e){return IE(e)?(e.nodeName||"").toLowerCase():"#document"}function jt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Hn(e){var t;return(t=(IE(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function IE(e){return wl()?e instanceof Node||e instanceof jt(e).Node:!1}function wn(e){return wl()?e instanceof Element||e instanceof jt(e).Element:!1}function Un(e){return wl()?e instanceof HTMLElement||e instanceof jt(e).HTMLElement:!1}function Pm(e){return!wl()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof jt(e).ShadowRoot}const Ok=new Set(["inline","contents"]);function ps(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Cn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Ok.has(i)}const Rk=new Set(["table","td","th"]);function Pk(e){return Rk.has(Fa(e))}const Fk=[":popover-open",":modal"];function Cl(e){return Fk.some(t=>{try{return e.matches(t)}catch{return!1}})}const Mk=["transform","translate","scale","rotate","perspective"],Bk=["transform","translate","scale","rotate","perspective","filter"],Uk=["paint","layout","strict","content"];function wh(e){const t=Ch(),n=wn(e)?Cn(e):e;return Mk.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||Bk.some(r=>(n.willChange||"").includes(r))||Uk.some(r=>(n.contain||"").includes(r))}function Hk(e){let t=Gr(e);for(;Un(t)&&!Aa(t);){if(wh(t))return t;if(Cl(t))return null;t=Gr(t)}return null}function Ch(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const jk=new Set(["html","body","#document"]);function Aa(e){return jk.has(Fa(e))}function Cn(e){return jt(e).getComputedStyle(e)}function xl(e){return wn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Gr(e){if(Fa(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Pm(e)&&e.host||Hn(e);return Pm(t)?t.host:t}function NE(e){const t=Gr(e);return Aa(t)?e.ownerDocument?e.ownerDocument.body:e.body:Un(t)&&ps(t)?t:NE(t)}function Go(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=NE(e),a=i===((r=e.ownerDocument)==null?void 0:r.body),o=jt(i);if(a){const s=$d(o);return t.concat(o,o.visualViewport||[],ps(i)?i:[],s&&n?Go(s):[])}return t.concat(i,Go(i,[],n))}function $d(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function LE(e){const t=Cn(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Un(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=zu(n)!==a||zu(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function xh(e){return wn(e)?e:e.contextElement}function ua(e){const t=xh(e);if(!Un(t))return Bn(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:a}=LE(t);let o=(a?zu(n.width):n.width)/r,s=(a?zu(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const zk=Bn(0);function OE(e){const t=jt(e);return!Ch()||!t.visualViewport?zk:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Wk(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==jt(e)?!1:t}function _i(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),a=xh(e);let o=Bn(1);t&&(r?wn(r)&&(o=ua(r)):o=ua(e));const s=Wk(a,n,r)?OE(a):Bn(0);let u=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,f=i.width/o.x,d=i.height/o.y;if(a){const p=jt(a),h=r&&wn(r)?jt(r):r;let g=p,y=$d(g);for(;y&&r&&h!==g;){const T=ua(y),m=y.getBoundingClientRect(),E=Cn(y),b=m.left+(y.clientLeft+parseFloat(E.paddingLeft))*T.x,S=m.top+(y.clientTop+parseFloat(E.paddingTop))*T.y;u*=T.x,l*=T.y,f*=T.x,d*=T.y,u+=b,l+=S,g=jt(y),y=$d(g)}}return Yu({width:f,height:d,x:u,y:l})}function kh(e,t){const n=xl(e).scrollLeft;return t?t.left+n:_i(Hn(e)).left+n}function RE(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:kh(e,r)),a=r.top+t.scrollTop;return{x:i,y:a}}function Yk(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const a=i==="fixed",o=Hn(r),s=t?Cl(t.floating):!1;if(r===o||s&&a)return n;let u={scrollLeft:0,scrollTop:0},l=Bn(1);const f=Bn(0),d=Un(r);if((d||!d&&!a)&&((Fa(r)!=="body"||ps(o))&&(u=xl(r)),Un(r))){const h=_i(r);l=ua(r),f.x=h.x+r.clientLeft,f.y=h.y+r.clientTop}const p=o&&!d&&!a?RE(o,u,!0):Bn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-u.scrollLeft*l.x+f.x+p.x,y:n.y*l.y-u.scrollTop*l.y+f.y+p.y}}function Vk(e){return Array.from(e.getClientRects())}function $k(e){const t=Hn(e),n=xl(e),r=e.ownerDocument.body,i=Bt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Bt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+kh(e);const s=-n.scrollTop;return Cn(r).direction==="rtl"&&(o+=Bt(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function qk(e,t){const n=jt(e),r=Hn(e),i=n.visualViewport;let a=r.clientWidth,o=r.clientHeight,s=0,u=0;if(i){a=i.width,o=i.height;const l=Ch();(!l||l&&t==="fixed")&&(s=i.offsetLeft,u=i.offsetTop)}return{width:a,height:o,x:s,y:u}}const Qk=new Set(["absolute","fixed"]);function Gk(e,t){const n=_i(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Un(e)?ua(e):Bn(1),o=e.clientWidth*a.x,s=e.clientHeight*a.y,u=i*a.x,l=r*a.y;return{width:o,height:s,x:u,y:l}}function Fm(e,t,n){let r;if(t==="viewport")r=qk(e,n);else if(t==="document")r=$k(Hn(e));else if(wn(t))r=Gk(t,n);else{const i=OE(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Yu(r)}function PE(e,t){const n=Gr(e);return n===t||!wn(n)||Aa(n)?!1:Cn(n).position==="fixed"||PE(n,t)}function Kk(e,t){const n=t.get(e);if(n)return n;let r=Go(e,[],!1).filter(s=>wn(s)&&Fa(s)!=="body"),i=null;const a=Cn(e).position==="fixed";let o=a?Gr(e):e;for(;wn(o)&&!Aa(o);){const s=Cn(o),u=wh(o);!u&&s.position==="fixed"&&(i=null),(a?!u&&!i:!u&&s.position==="static"&&!!i&&Qk.has(i.position)||ps(o)&&!u&&PE(e,o))?r=r.filter(f=>f!==o):i=s,o=Gr(o)}return t.set(e,r),r}function Xk(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const o=[...n==="clippingAncestors"?Cl(t)?[]:Kk(t,this._c):[].concat(n),r],s=o[0],u=o.reduce((l,f)=>{const d=Fm(t,f,i);return l.top=Bt(d.top,l.top),l.right=Qr(d.right,l.right),l.bottom=Qr(d.bottom,l.bottom),l.left=Bt(d.left,l.left),l},Fm(t,s,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Jk(e){const{width:t,height:n}=LE(e);return{width:t,height:n}}function Zk(e,t,n){const r=Un(t),i=Hn(t),a=n==="fixed",o=_i(e,!0,a,t);let s={scrollLeft:0,scrollTop:0};const u=Bn(0);function l(){u.x=kh(i)}if(r||!r&&!a)if((Fa(t)!=="body"||ps(i))&&(s=xl(t)),r){const h=_i(t,!0,a,t);u.x=h.x+t.clientLeft,u.y=h.y+t.clientTop}else i&&l();a&&!r&&i&&l();const f=i&&!r&&!a?RE(i,s):Bn(0),d=o.left+s.scrollLeft-u.x-f.x,p=o.top+s.scrollTop-u.y-f.y;return{x:d,y:p,width:o.width,height:o.height}}function wc(e){return Cn(e).position==="static"}function Mm(e,t){if(!Un(e)||Cn(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Hn(e)===n&&(n=n.ownerDocument.body),n}function FE(e,t){const n=jt(e);if(Cl(e))return n;if(!Un(e)){let i=Gr(e);for(;i&&!Aa(i);){if(wn(i)&&!wc(i))return i;i=Gr(i)}return n}let r=Mm(e,t);for(;r&&Pk(r)&&wc(r);)r=Mm(r,t);return r&&Aa(r)&&wc(r)&&!wh(r)?n:r||Hk(e)||n}const eA=async function(e){const t=this.getOffsetParent||FE,n=this.getDimensions,r=await n(e.floating);return{reference:Zk(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function tA(e){return Cn(e).direction==="rtl"}const nA={convertOffsetParentRelativeRectToViewportRelativeRect:Yk,getDocumentElement:Hn,getClippingRect:Xk,getOffsetParent:FE,getElementRects:eA,getClientRects:Vk,getDimensions:Jk,getScale:ua,isElement:wn,isRTL:tA};function ME(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function rA(e,t){let n=null,r;const i=Hn(e);function a(){var s;clearTimeout(r),(s=n)==null||s.disconnect(),n=null}function o(s,u){s===void 0&&(s=!1),u===void 0&&(u=1),a();const l=e.getBoundingClientRect(),{left:f,top:d,width:p,height:h}=l;if(s||t(),!p||!h)return;const g=Ys(d),y=Ys(i.clientWidth-(f+p)),T=Ys(i.clientHeight-(d+h)),m=Ys(f),b={rootMargin:-g+"px "+-y+"px "+-T+"px "+-m+"px",threshold:Bt(0,Qr(1,u))||1};let S=!0;function N(k){const O=k[0].intersectionRatio;if(O!==u){if(!S)return o();O?o(!1,O):r=setTimeout(()=>{o(!1,1e-7)},1e3)}O===1&&!ME(l,e.getBoundingClientRect())&&o(),S=!1}try{n=new IntersectionObserver(N,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(N,b)}n.observe(e)}return o(!0),a}function iA(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,l=xh(e),f=i||a?[...l?Go(l):[],...Go(t)]:[];f.forEach(m=>{i&&m.addEventListener("scroll",n,{passive:!0}),a&&m.addEventListener("resize",n)});const d=l&&s?rA(l,n):null;let p=-1,h=null;o&&(h=new ResizeObserver(m=>{let[E]=m;E&&E.target===l&&h&&(h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var b;(b=h)==null||b.observe(t)})),n()}),l&&!u&&h.observe(l),h.observe(t));let g,y=u?_i(e):null;u&&T();function T(){const m=_i(e);y&&!ME(y,m)&&n(),y=m,g=requestAnimationFrame(T)}return n(),()=>{var m;f.forEach(E=>{i&&E.removeEventListener("scroll",n),a&&E.removeEventListener("resize",n)}),d==null||d(),(m=h)==null||m.disconnect(),h=null,u&&cancelAnimationFrame(g)}}const aA=_k,oA=Ik,sA=Ak,uA=Lk,lA=Sk,Bm=kk,cA=Nk,dA=(e,t,n)=>{const r=new Map,i={platform:nA,...n},a={...i.platform,_c:r};return xk(e,t,{...i,platform:a})};var fA=typeof document<"u",hA=function(){},du=fA?x.useLayoutEffect:hA;function Vu(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Vu(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const a=i[r];if(!(a==="_owner"&&e.$$typeof)&&!Vu(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function BE(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Um(e,t){const n=BE(e);return Math.round(t*n)/n}function Cc(e){const t=x.useRef(e);return du(()=>{t.current=e}),t}function pA(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:a,floating:o}={},transform:s=!0,whileElementsMounted:u,open:l}=e,[f,d]=x.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=x.useState(r);Vu(p,r)||h(r);const[g,y]=x.useState(null),[T,m]=x.useState(null),E=x.useCallback(F=>{F!==k.current&&(k.current=F,y(F))},[]),b=x.useCallback(F=>{F!==O.current&&(O.current=F,m(F))},[]),S=a||g,N=o||T,k=x.useRef(null),O=x.useRef(null),M=x.useRef(f),j=u!=null,I=Cc(u),z=Cc(i),B=Cc(l),J=x.useCallback(()=>{if(!k.current||!O.current)return;const F={placement:t,strategy:n,middleware:p};z.current&&(F.platform=z.current),dA(k.current,O.current,F).then(H=>{const w={...H,isPositioned:B.current!==!1};Y.current&&!Vu(M.current,w)&&(M.current=w,fs.flushSync(()=>{d(w)}))})},[p,t,n,z,B]);du(()=>{l===!1&&M.current.isPositioned&&(M.current.isPositioned=!1,d(F=>({...F,isPositioned:!1})))},[l]);const Y=x.useRef(!1);du(()=>(Y.current=!0,()=>{Y.current=!1}),[]),du(()=>{if(S&&(k.current=S),N&&(O.current=N),S&&N){if(I.current)return I.current(S,N,J);J()}},[S,N,J,I,j]);const X=x.useMemo(()=>({reference:k,floating:O,setReference:E,setFloating:b}),[E,b]),ee=x.useMemo(()=>({reference:S,floating:N}),[S,N]),ne=x.useMemo(()=>{const F={position:n,left:0,top:0};if(!ee.floating)return F;const H=Um(ee.floating,f.x),w=Um(ee.floating,f.y);return s?{...F,transform:"translate("+H+"px, "+w+"px)",...BE(ee.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:H,top:w}},[n,s,ee.floating,f.x,f.y]);return x.useMemo(()=>({...f,update:J,refs:X,elements:ee,floatingStyles:ne}),[f,J,X,ee,ne])}const mA=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Bm({element:r.current,padding:i}).fn(n):{}:r?Bm({element:r,padding:i}).fn(n):{}}}},gA=(e,t)=>({...aA(e),options:[e,t]}),yA=(e,t)=>({...oA(e),options:[e,t]}),EA=(e,t)=>({...cA(e),options:[e,t]}),bA=(e,t)=>({...sA(e),options:[e,t]}),TA=(e,t)=>({...uA(e),options:[e,t]}),vA=(e,t)=>({...lA(e),options:[e,t]}),wA=(e,t)=>({...mA(e),options:[e,t]});var CA="Arrow",UE=x.forwardRef((e,t)=>{const{children:n,width:r=10,height:i=5,...a}=e;return _.jsx(It.svg,{...a,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:_.jsx("polygon",{points:"0,0 30,0 15,10"})})});UE.displayName=CA;var xA=UE;function kA(e){const[t,n]=x.useState(void 0);return qr(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const a=i[0];let o,s;if("borderBoxSize"in a){const u=a.borderBoxSize,l=Array.isArray(u)?u[0]:u;o=l.inlineSize,s=l.blockSize}else o=e.offsetWidth,s=e.offsetHeight;n({width:o,height:s})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var HE="Popper",[jE,zE]=bl(HE),[P5,WE]=jE(HE),YE="PopperAnchor",VE=x.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,a=WE(YE,n),o=x.useRef(null),s=Tn(t,o);return x.useEffect(()=>{a.onAnchorChange((r==null?void 0:r.current)||o.current)}),r?null:_.jsx(It.div,{...i,ref:s})});VE.displayName=YE;var Ah="PopperContent",[AA,SA]=jE(Ah),$E=x.forwardRef((e,t)=>{var ge,ft,ht,vt,Lt,lr;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:a="center",alignOffset:o=0,arrowPadding:s=0,avoidCollisions:u=!0,collisionBoundary:l=[],collisionPadding:f=0,sticky:d="partial",hideWhenDetached:p=!1,updatePositionStrategy:h="optimized",onPlaced:g,...y}=e,T=WE(Ah,n),[m,E]=x.useState(null),b=Tn(t,kn=>E(kn)),[S,N]=x.useState(null),k=kA(S),O=(k==null?void 0:k.width)??0,M=(k==null?void 0:k.height)??0,j=r+(a!=="center"?"-"+a:""),I=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},z=Array.isArray(l)?l:[l],B=z.length>0,J={padding:I,boundary:z.filter(_A),altBoundary:B},{refs:Y,floatingStyles:X,placement:ee,isPositioned:ne,middlewareData:F}=pA({strategy:"fixed",placement:j,whileElementsMounted:(...kn)=>iA(...kn,{animationFrame:h==="always"}),elements:{reference:T.anchor},middleware:[gA({mainAxis:i+M,alignmentAxis:o}),u&&yA({mainAxis:!0,crossAxis:!1,limiter:d==="partial"?EA():void 0,...J}),u&&bA({...J}),TA({...J,apply:({elements:kn,rects:Fi,availableWidth:Mi,availableHeight:ri})=>{const{width:Bi,height:ii}=Fi.reference,Wn=kn.floating.style;Wn.setProperty("--radix-popper-available-width",`${Mi}px`),Wn.setProperty("--radix-popper-available-height",`${ri}px`),Wn.setProperty("--radix-popper-anchor-width",`${Bi}px`),Wn.setProperty("--radix-popper-anchor-height",`${ii}px`)}}),S&&wA({element:S,padding:s}),IA({arrowWidth:O,arrowHeight:M}),p&&vA({strategy:"referenceHidden",...J})]}),[H,w]=GE(ee),re=$r(g);qr(()=>{ne&&(re==null||re())},[ne,re]);const te=(ge=F.arrow)==null?void 0:ge.x,A=(ft=F.arrow)==null?void 0:ft.y,ae=((ht=F.arrow)==null?void 0:ht.centerOffset)!==0,[Ce,ye]=x.useState();return qr(()=>{m&&ye(window.getComputedStyle(m).zIndex)},[m]),_.jsx("div",{ref:Y.setFloating,"data-radix-popper-content-wrapper":"",style:{...X,transform:ne?X.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Ce,"--radix-popper-transform-origin":[(vt=F.transformOrigin)==null?void 0:vt.x,(Lt=F.transformOrigin)==null?void 0:Lt.y].join(" "),...((lr=F.hide)==null?void 0:lr.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:_.jsx(AA,{scope:n,placedSide:H,onArrowChange:N,arrowX:te,arrowY:A,shouldHideArrow:ae,children:_.jsx(It.div,{"data-side":H,"data-align":w,...y,ref:b,style:{...y.style,animation:ne?void 0:"none"}})})})});$E.displayName=Ah;var qE="PopperArrow",DA={top:"bottom",right:"left",bottom:"top",left:"right"},QE=x.forwardRef(function(t,n){const{__scopePopper:r,...i}=t,a=SA(qE,r),o=DA[a.placedSide];return _.jsx("span",{ref:a.onArrowChange,style:{position:"absolute",left:a.arrowX,top:a.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[a.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[a.placedSide],visibility:a.shouldHideArrow?"hidden":void 0},children:_.jsx(xA,{...i,ref:n,style:{...i.style,display:"block"}})})});QE.displayName=qE;function _A(e){return e!==null}var IA=e=>({name:"transformOrigin",options:e,fn(t){var T,m,E;const{placement:n,rects:r,middlewareData:i}=t,o=((T=i.arrow)==null?void 0:T.centerOffset)!==0,s=o?0:e.arrowWidth,u=o?0:e.arrowHeight,[l,f]=GE(n),d={start:"0%",center:"50%",end:"100%"}[f],p=(((m=i.arrow)==null?void 0:m.x)??0)+s/2,h=(((E=i.arrow)==null?void 0:E.y)??0)+u/2;let g="",y="";return l==="bottom"?(g=o?d:`${p}px`,y=`${-u}px`):l==="top"?(g=o?d:`${p}px`,y=`${r.floating.height+u}px`):l==="right"?(g=`${-u}px`,y=o?d:`${h}px`):l==="left"&&(g=`${r.floating.width+u}px`,y=o?d:`${h}px`),{data:{x:g,y}}}});function GE(e){const[t,n="center"]=e.split("-");return[t,n]}var NA=VE,LA=$E,OA=QE,[kl,F5]=bl("Tooltip",[zE]),Sh=zE(),KE="TooltipProvider",RA=700,Hm="tooltip.open",[PA,XE]=kl(KE),JE=e=>{const{__scopeTooltip:t,delayDuration:n=RA,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:a}=e,o=x.useRef(!0),s=x.useRef(!1),u=x.useRef(0);return x.useEffect(()=>{const l=u.current;return()=>window.clearTimeout(l)},[]),_.jsx(PA,{scope:t,isOpenDelayedRef:o,delayDuration:n,onOpen:x.useCallback(()=>{window.clearTimeout(u.current),o.current=!1},[]),onClose:x.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>o.current=!0,r)},[r]),isPointerInTransitRef:s,onPointerInTransitChange:x.useCallback(l=>{s.current=l},[]),disableHoverableContent:i,children:a})};JE.displayName=KE;var ZE="Tooltip",[M5,Al]=kl(ZE),qd="TooltipTrigger",FA=x.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Al(qd,n),a=XE(qd,n),o=Sh(n),s=x.useRef(null),u=Tn(t,s,i.onTriggerChange),l=x.useRef(!1),f=x.useRef(!1),d=x.useCallback(()=>l.current=!1,[]);return x.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),_.jsx(NA,{asChild:!0,...o,children:_.jsx(It.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:u,onPointerMove:Qe(e.onPointerMove,p=>{p.pointerType!=="touch"&&!f.current&&!a.isPointerInTransitRef.current&&(i.onTriggerEnter(),f.current=!0)}),onPointerLeave:Qe(e.onPointerLeave,()=>{i.onTriggerLeave(),f.current=!1}),onPointerDown:Qe(e.onPointerDown,()=>{i.open&&i.onClose(),l.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:Qe(e.onFocus,()=>{l.current||i.onOpen()}),onBlur:Qe(e.onBlur,i.onClose),onClick:Qe(e.onClick,i.onClose)})})});FA.displayName=qd;var MA="TooltipPortal",[B5,BA]=kl(MA,{forceMount:void 0}),Sa="TooltipContent",eb=x.forwardRef((e,t)=>{const n=BA(Sa,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...a}=e,o=Al(Sa,e.__scopeTooltip);return _.jsx(ph,{present:r||o.open,children:o.disableHoverableContent?_.jsx(tb,{side:i,...a,ref:t}):_.jsx(UA,{side:i,...a,ref:t})})}),UA=x.forwardRef((e,t)=>{const n=Al(Sa,e.__scopeTooltip),r=XE(Sa,e.__scopeTooltip),i=x.useRef(null),a=Tn(t,i),[o,s]=x.useState(null),{trigger:u,onClose:l}=n,f=i.current,{onPointerInTransitChange:d}=r,p=x.useCallback(()=>{s(null),d(!1)},[d]),h=x.useCallback((g,y)=>{const T=g.currentTarget,m={x:g.clientX,y:g.clientY},E=YA(m,T.getBoundingClientRect()),b=VA(m,E),S=$A(y.getBoundingClientRect()),N=QA([...b,...S]);s(N),d(!0)},[d]);return x.useEffect(()=>()=>p(),[p]),x.useEffect(()=>{if(u&&f){const g=T=>h(T,f),y=T=>h(T,u);return u.addEventListener("pointerleave",g),f.addEventListener("pointerleave",y),()=>{u.removeEventListener("pointerleave",g),f.removeEventListener("pointerleave",y)}}},[u,f,h,p]),x.useEffect(()=>{if(o){const g=y=>{const T=y.target,m={x:y.clientX,y:y.clientY},E=(u==null?void 0:u.contains(T))||(f==null?void 0:f.contains(T)),b=!qA(m,o);E?p():b&&(p(),l())};return document.addEventListener("pointermove",g),()=>document.removeEventListener("pointermove",g)}},[u,f,o,l,p]),_.jsx(tb,{...e,ref:a})}),[HA,jA]=kl(ZE,{isInside:!1}),zA=ex("TooltipContent"),tb=x.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:a,onPointerDownOutside:o,...s}=e,u=Al(Sa,n),l=Sh(n),{onClose:f}=u;return x.useEffect(()=>(document.addEventListener(Hm,f),()=>document.removeEventListener(Hm,f)),[f]),x.useEffect(()=>{if(u.trigger){const d=p=>{const h=p.target;h!=null&&h.contains(u.trigger)&&f()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[u.trigger,f]),_.jsx(hh,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:o,onFocusOutside:d=>d.preventDefault(),onDismiss:f,children:_.jsxs(LA,{"data-state":u.stateAttribute,...l,...s,ref:t,style:{...s.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[_.jsx(zA,{children:r}),_.jsx(HA,{scope:n,isInside:!0,children:_.jsx(kx,{id:u.contentId,role:"tooltip",children:i||r})})]})})});eb.displayName=Sa;var nb="TooltipArrow",WA=x.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Sh(n);return jA(nb,n).isInside?null:_.jsx(OA,{...i,...r,ref:t})});WA.displayName=nb;function YA(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(n,r,i,a)){case a:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function VA(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function $A(e){const{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}function qA(e,t){const{x:n,y:r}=e;let i=!1;for(let a=0,o=t.length-1;a<t.length;o=a++){const s=t[a],u=t[o],l=s.x,f=s.y,d=u.x,p=u.y;f>r!=p>r&&n<(d-l)*(r-f)/(p-f)+l&&(i=!i)}return i}function QA(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),GA(t)}function GA(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const i=e[r];for(;t.length>=2;){const a=t[t.length-1],o=t[t.length-2];if((a.x-o.x)*(i.y-o.y)>=(a.y-o.y)*(i.x-o.x))t.pop();else break}t.push(i)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;n.length>=2;){const a=n[n.length-1],o=n[n.length-2];if((a.x-o.x)*(i.y-o.y)>=(a.y-o.y)*(i.x-o.x))n.pop();else break}n.push(i)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var KA=JE,rb=eb;const XA=KA,JA=x.forwardRef(({className:e,sideOffset:t=4,...n},r)=>_.jsx(rb,{ref:r,sideOffset:t,className:vn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));JA.displayName=rb.displayName;var Sl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Dl=typeof window>"u"||"Deno"in globalThis;function dn(){}function ZA(e,t){return typeof e=="function"?e(t):e}function eS(e){return typeof e=="number"&&e>=0&&e!==1/0}function tS(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Qd(e,t){return typeof e=="function"?e(t):e}function nS(e,t){return typeof e=="function"?e(t):e}function jm(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:a,queryKey:o,stale:s}=e;if(o){if(r){if(t.queryHash!==Dh(o,t.options))return!1}else if(!Xo(t.queryKey,o))return!1}if(n!=="all"){const u=t.isActive();if(n==="active"&&!u||n==="inactive"&&u)return!1}return!(typeof s=="boolean"&&t.isStale()!==s||i&&i!==t.state.fetchStatus||a&&!a(t))}function zm(e,t){const{exact:n,status:r,predicate:i,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(n){if(Ko(t.options.mutationKey)!==Ko(a))return!1}else if(!Xo(t.options.mutationKey,a))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function Dh(e,t){return((t==null?void 0:t.queryKeyHashFn)||Ko)(e)}function Ko(e){return JSON.stringify(e,(t,n)=>Gd(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Xo(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>Xo(e[n],t[n])):!1}function ib(e,t){if(e===t)return e;const n=Wm(e)&&Wm(t);if(n||Gd(e)&&Gd(t)){const r=n?e:Object.keys(e),i=r.length,a=n?t:Object.keys(t),o=a.length,s=n?[]:{},u=new Set(r);let l=0;for(let f=0;f<o;f++){const d=n?f:a[f];(!n&&u.has(d)||n)&&e[d]===void 0&&t[d]===void 0?(s[d]=void 0,l++):(s[d]=ib(e[d],t[d]),s[d]===e[d]&&e[d]!==void 0&&l++)}return i===o&&l===i?e:s}return t}function Wm(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Gd(e){if(!Ym(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Ym(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Ym(e){return Object.prototype.toString.call(e)==="[object Object]"}function rS(e){return new Promise(t=>{setTimeout(t,e)})}function iS(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?ib(e,t):t}function aS(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function oS(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var _h=Symbol();function ab(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===_h?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var mi,Ar,da,bg,sS=(bg=class extends Sl{constructor(){super();ve(this,mi);ve(this,Ar);ve(this,da);ue(this,da,t=>{if(!Dl&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){U(this,Ar)||this.setEventListener(U(this,da))}onUnsubscribe(){var t;this.hasListeners()||((t=U(this,Ar))==null||t.call(this),ue(this,Ar,void 0))}setEventListener(t){var n;ue(this,da,t),(n=U(this,Ar))==null||n.call(this),ue(this,Ar,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){U(this,mi)!==t&&(ue(this,mi,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof U(this,mi)=="boolean"?U(this,mi):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},mi=new WeakMap,Ar=new WeakMap,da=new WeakMap,bg),ob=new sS,fa,Sr,ha,Tg,uS=(Tg=class extends Sl{constructor(){super();ve(this,fa,!0);ve(this,Sr);ve(this,ha);ue(this,ha,t=>{if(!Dl&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){U(this,Sr)||this.setEventListener(U(this,ha))}onUnsubscribe(){var t;this.hasListeners()||((t=U(this,Sr))==null||t.call(this),ue(this,Sr,void 0))}setEventListener(t){var n;ue(this,ha,t),(n=U(this,Sr))==null||n.call(this),ue(this,Sr,t(this.setOnline.bind(this)))}setOnline(t){U(this,fa)!==t&&(ue(this,fa,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return U(this,fa)}},fa=new WeakMap,Sr=new WeakMap,ha=new WeakMap,Tg),$u=new uS;function lS(){let e,t;const n=new Promise((i,a)=>{e=i,t=a});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}function cS(e){return Math.min(1e3*2**e,3e4)}function sb(e){return(e??"online")==="online"?$u.isOnline():!0}var ub=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function xc(e){return e instanceof ub}function lb(e){let t=!1,n=0,r=!1,i;const a=lS(),o=y=>{var T;r||(p(new ub(y)),(T=e.abort)==null||T.call(e))},s=()=>{t=!0},u=()=>{t=!1},l=()=>ob.isFocused()&&(e.networkMode==="always"||$u.isOnline())&&e.canRun(),f=()=>sb(e.networkMode)&&e.canRun(),d=y=>{var T;r||(r=!0,(T=e.onSuccess)==null||T.call(e,y),i==null||i(),a.resolve(y))},p=y=>{var T;r||(r=!0,(T=e.onError)==null||T.call(e,y),i==null||i(),a.reject(y))},h=()=>new Promise(y=>{var T;i=m=>{(r||l())&&y(m)},(T=e.onPause)==null||T.call(e)}).then(()=>{var y;i=void 0,r||(y=e.onContinue)==null||y.call(e)}),g=()=>{if(r)return;let y;const T=n===0?e.initialPromise:void 0;try{y=T??e.fn()}catch(m){y=Promise.reject(m)}Promise.resolve(y).then(d).catch(m=>{var k;if(r)return;const E=e.retry??(Dl?0:3),b=e.retryDelay??cS,S=typeof b=="function"?b(n,m):b,N=E===!0||typeof E=="number"&&n<E||typeof E=="function"&&E(n,m);if(t||!N){p(m);return}n++,(k=e.onFail)==null||k.call(e,n,m),rS(S).then(()=>l()?void 0:h()).then(()=>{t?p(m):g()})})};return{promise:a,cancel:o,continue:()=>(i==null||i(),a),cancelRetry:s,continueRetry:u,canStart:f,start:()=>(f()?g():h().then(g),a)}}var dS=e=>setTimeout(e,0);function fS(){let e=[],t=0,n=s=>{s()},r=s=>{s()},i=dS;const a=s=>{t?e.push(s):i(()=>{n(s)})},o=()=>{const s=e;e=[],s.length&&i(()=>{r(()=>{s.forEach(u=>{n(u)})})})};return{batch:s=>{let u;t++;try{u=s()}finally{t--,t||o()}return u},batchCalls:s=>(...u)=>{a(()=>{s(...u)})},schedule:a,setNotifyFunction:s=>{n=s},setBatchNotifyFunction:s=>{r=s},setScheduler:s=>{i=s}}}var gt=fS(),gi,vg,cb=(vg=class{constructor(){ve(this,gi)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),eS(this.gcTime)&&ue(this,gi,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Dl?1/0:5*60*1e3))}clearGcTimeout(){U(this,gi)&&(clearTimeout(U(this,gi)),ue(this,gi,void 0))}},gi=new WeakMap,vg),pa,yi,qt,Ei,ot,as,bi,fn,$n,wg,hS=(wg=class extends cb{constructor(t){super();ve(this,fn);ve(this,pa);ve(this,yi);ve(this,qt);ve(this,Ei);ve(this,ot);ve(this,as);ve(this,bi);ue(this,bi,!1),ue(this,as,t.defaultOptions),this.setOptions(t.options),this.observers=[],ue(this,Ei,t.client),ue(this,qt,U(this,Ei).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,ue(this,pa,mS(this.options)),this.state=t.state??U(this,pa),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=U(this,ot))==null?void 0:t.promise}setOptions(t){this.options={...U(this,as),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&U(this,qt).remove(this)}setData(t,n){const r=iS(this.state.data,t,this.options);return rt(this,fn,$n).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){rt(this,fn,$n).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,i;const n=(r=U(this,ot))==null?void 0:r.promise;return(i=U(this,ot))==null||i.cancel(t),n?n.then(dn).catch(dn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(U(this,pa))}isActive(){return this.observers.some(t=>nS(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===_h||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Qd(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!tS(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=U(this,ot))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=U(this,ot))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),U(this,qt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(U(this,ot)&&(U(this,bi)?U(this,ot).cancel({revert:!0}):U(this,ot).cancelRetry()),this.scheduleGc()),U(this,qt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||rt(this,fn,$n).call(this,{type:"invalidate"})}fetch(t,n){var l,f,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(U(this,ot))return U(this,ot).continueRetry(),U(this,ot).promise}if(t&&this.setOptions(t),!this.options.queryFn){const p=this.observers.find(h=>h.options.queryFn);p&&this.setOptions(p.options)}const r=new AbortController,i=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(ue(this,bi,!0),r.signal)})},a=()=>{const p=ab(this.options,n),g=(()=>{const y={client:U(this,Ei),queryKey:this.queryKey,meta:this.meta};return i(y),y})();return ue(this,bi,!1),this.options.persister?this.options.persister(p,g,this):p(g)},s=(()=>{const p={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:U(this,Ei),state:this.state,fetchFn:a};return i(p),p})();(l=this.options.behavior)==null||l.onFetch(s,this),ue(this,yi,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((f=s.fetchOptions)==null?void 0:f.meta))&&rt(this,fn,$n).call(this,{type:"fetch",meta:(d=s.fetchOptions)==null?void 0:d.meta});const u=p=>{var h,g,y,T;xc(p)&&p.silent||rt(this,fn,$n).call(this,{type:"error",error:p}),xc(p)||((g=(h=U(this,qt).config).onError)==null||g.call(h,p,this),(T=(y=U(this,qt).config).onSettled)==null||T.call(y,this.state.data,p,this)),this.scheduleGc()};return ue(this,ot,lb({initialPromise:n==null?void 0:n.initialPromise,fn:s.fetchFn,abort:r.abort.bind(r),onSuccess:p=>{var h,g,y,T;if(p===void 0){u(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(p)}catch(m){u(m);return}(g=(h=U(this,qt).config).onSuccess)==null||g.call(h,p,this),(T=(y=U(this,qt).config).onSettled)==null||T.call(y,p,this.state.error,this),this.scheduleGc()},onError:u,onFail:(p,h)=>{rt(this,fn,$n).call(this,{type:"failed",failureCount:p,error:h})},onPause:()=>{rt(this,fn,$n).call(this,{type:"pause"})},onContinue:()=>{rt(this,fn,$n).call(this,{type:"continue"})},retry:s.options.retry,retryDelay:s.options.retryDelay,networkMode:s.options.networkMode,canRun:()=>!0})),U(this,ot).start()}},pa=new WeakMap,yi=new WeakMap,qt=new WeakMap,Ei=new WeakMap,ot=new WeakMap,as=new WeakMap,bi=new WeakMap,fn=new WeakSet,$n=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...pS(r.data,this.options),fetchMeta:t.meta??null};case"success":return ue(this,yi,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return xc(i)&&i.revert&&U(this,yi)?{...U(this,yi),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),gt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),U(this,qt).notify({query:this,type:"updated",action:t})})},wg);function pS(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:sb(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function mS(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var In,Cg,gS=(Cg=class extends Sl{constructor(t={}){super();ve(this,In);this.config=t,ue(this,In,new Map)}build(t,n,r){const i=n.queryKey,a=n.queryHash??Dh(i,n);let o=this.get(a);return o||(o=new hS({client:t,queryKey:i,queryHash:a,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(o)),o}add(t){U(this,In).has(t.queryHash)||(U(this,In).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=U(this,In).get(t.queryHash);n&&(t.destroy(),n===t&&U(this,In).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){gt.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return U(this,In).get(t)}getAll(){return[...U(this,In).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>jm(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>jm(t,r)):n}notify(t){gt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){gt.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){gt.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},In=new WeakMap,Cg),Nn,pt,Ti,Ln,br,xg,yS=(xg=class extends cb{constructor(t){super();ve(this,Ln);ve(this,Nn);ve(this,pt);ve(this,Ti);this.mutationId=t.mutationId,ue(this,pt,t.mutationCache),ue(this,Nn,[]),this.state=t.state||ES(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){U(this,Nn).includes(t)||(U(this,Nn).push(t),this.clearGcTimeout(),U(this,pt).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){ue(this,Nn,U(this,Nn).filter(n=>n!==t)),this.scheduleGc(),U(this,pt).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){U(this,Nn).length||(this.state.status==="pending"?this.scheduleGc():U(this,pt).remove(this))}continue(){var t;return((t=U(this,Ti))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var a,o,s,u,l,f,d,p,h,g,y,T,m,E,b,S,N,k,O,M;const n=()=>{rt(this,Ln,br).call(this,{type:"continue"})};ue(this,Ti,lb({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(j,I)=>{rt(this,Ln,br).call(this,{type:"failed",failureCount:j,error:I})},onPause:()=>{rt(this,Ln,br).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>U(this,pt).canRun(this)}));const r=this.state.status==="pending",i=!U(this,Ti).canStart();try{if(r)n();else{rt(this,Ln,br).call(this,{type:"pending",variables:t,isPaused:i}),await((o=(a=U(this,pt).config).onMutate)==null?void 0:o.call(a,t,this));const I=await((u=(s=this.options).onMutate)==null?void 0:u.call(s,t));I!==this.state.context&&rt(this,Ln,br).call(this,{type:"pending",context:I,variables:t,isPaused:i})}const j=await U(this,Ti).start();return await((f=(l=U(this,pt).config).onSuccess)==null?void 0:f.call(l,j,t,this.state.context,this)),await((p=(d=this.options).onSuccess)==null?void 0:p.call(d,j,t,this.state.context)),await((g=(h=U(this,pt).config).onSettled)==null?void 0:g.call(h,j,null,this.state.variables,this.state.context,this)),await((T=(y=this.options).onSettled)==null?void 0:T.call(y,j,null,t,this.state.context)),rt(this,Ln,br).call(this,{type:"success",data:j}),j}catch(j){try{throw await((E=(m=U(this,pt).config).onError)==null?void 0:E.call(m,j,t,this.state.context,this)),await((S=(b=this.options).onError)==null?void 0:S.call(b,j,t,this.state.context)),await((k=(N=U(this,pt).config).onSettled)==null?void 0:k.call(N,void 0,j,this.state.variables,this.state.context,this)),await((M=(O=this.options).onSettled)==null?void 0:M.call(O,void 0,j,t,this.state.context)),j}finally{rt(this,Ln,br).call(this,{type:"error",error:j})}}finally{U(this,pt).runNext(this)}}},Nn=new WeakMap,pt=new WeakMap,Ti=new WeakMap,Ln=new WeakSet,br=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),gt.batch(()=>{U(this,Nn).forEach(r=>{r.onMutationUpdate(t)}),U(this,pt).notify({mutation:this,type:"updated",action:t})})},xg);function ES(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Gn,hn,os,kg,bS=(kg=class extends Sl{constructor(t={}){super();ve(this,Gn);ve(this,hn);ve(this,os);this.config=t,ue(this,Gn,new Set),ue(this,hn,new Map),ue(this,os,0)}build(t,n,r){const i=new yS({mutationCache:this,mutationId:++Cs(this,os)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){U(this,Gn).add(t);const n=Vs(t);if(typeof n=="string"){const r=U(this,hn).get(n);r?r.push(t):U(this,hn).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(U(this,Gn).delete(t)){const n=Vs(t);if(typeof n=="string"){const r=U(this,hn).get(n);if(r)if(r.length>1){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}else r[0]===t&&U(this,hn).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Vs(t);if(typeof n=="string"){const r=U(this,hn).get(n),i=r==null?void 0:r.find(a=>a.state.status==="pending");return!i||i===t}else return!0}runNext(t){var r;const n=Vs(t);if(typeof n=="string"){const i=(r=U(this,hn).get(n))==null?void 0:r.find(a=>a!==t&&a.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){gt.batch(()=>{U(this,Gn).forEach(t=>{this.notify({type:"removed",mutation:t})}),U(this,Gn).clear(),U(this,hn).clear()})}getAll(){return Array.from(U(this,Gn))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>zm(n,r))}findAll(t={}){return this.getAll().filter(n=>zm(t,n))}notify(t){gt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return gt.batch(()=>Promise.all(t.map(n=>n.continue().catch(dn))))}},Gn=new WeakMap,hn=new WeakMap,os=new WeakMap,kg);function Vs(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Vm(e){return{onFetch:(t,n)=>{var f,d,p,h,g;const r=t.options,i=(p=(d=(f=t.fetchOptions)==null?void 0:f.meta)==null?void 0:d.fetchMore)==null?void 0:p.direction,a=((h=t.state.data)==null?void 0:h.pages)||[],o=((g=t.state.data)==null?void 0:g.pageParams)||[];let s={pages:[],pageParams:[]},u=0;const l=async()=>{let y=!1;const T=b=>{Object.defineProperty(b,"signal",{enumerable:!0,get:()=>(t.signal.aborted?y=!0:t.signal.addEventListener("abort",()=>{y=!0}),t.signal)})},m=ab(t.options,t.fetchOptions),E=async(b,S,N)=>{if(y)return Promise.reject();if(S==null&&b.pages.length)return Promise.resolve(b);const O=(()=>{const z={client:t.client,queryKey:t.queryKey,pageParam:S,direction:N?"backward":"forward",meta:t.options.meta};return T(z),z})(),M=await m(O),{maxPages:j}=t.options,I=N?oS:aS;return{pages:I(b.pages,M,j),pageParams:I(b.pageParams,S,j)}};if(i&&a.length){const b=i==="backward",S=b?TS:$m,N={pages:a,pageParams:o},k=S(r,N);s=await E(N,k,b)}else{const b=e??a.length;do{const S=u===0?o[0]??r.initialPageParam:$m(r,s);if(u>0&&S==null)break;s=await E(s,S),u++}while(u<b)}return s};t.options.persister?t.fetchFn=()=>{var y,T;return(T=(y=t.options).persister)==null?void 0:T.call(y,l,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=l}}}function $m(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function TS(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var Be,Dr,_r,ma,ga,Ir,ya,Ea,Ag,vS=(Ag=class{constructor(e={}){ve(this,Be);ve(this,Dr);ve(this,_r);ve(this,ma);ve(this,ga);ve(this,Ir);ve(this,ya);ve(this,Ea);ue(this,Be,e.queryCache||new gS),ue(this,Dr,e.mutationCache||new bS),ue(this,_r,e.defaultOptions||{}),ue(this,ma,new Map),ue(this,ga,new Map),ue(this,Ir,0)}mount(){Cs(this,Ir)._++,U(this,Ir)===1&&(ue(this,ya,ob.subscribe(async e=>{e&&(await this.resumePausedMutations(),U(this,Be).onFocus())})),ue(this,Ea,$u.subscribe(async e=>{e&&(await this.resumePausedMutations(),U(this,Be).onOnline())})))}unmount(){var e,t;Cs(this,Ir)._--,U(this,Ir)===0&&((e=U(this,ya))==null||e.call(this),ue(this,ya,void 0),(t=U(this,Ea))==null||t.call(this),ue(this,Ea,void 0))}isFetching(e){return U(this,Be).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return U(this,Dr).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=U(this,Be).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=U(this,Be).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Qd(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return U(this,Be).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=U(this,Be).get(r.queryHash),a=i==null?void 0:i.state.data,o=ZA(t,a);if(o!==void 0)return U(this,Be).build(this,r).setData(o,{...n,manual:!0})}setQueriesData(e,t,n){return gt.batch(()=>U(this,Be).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=U(this,Be).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=U(this,Be);gt.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=U(this,Be);return gt.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=gt.batch(()=>U(this,Be).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(dn).catch(dn)}invalidateQueries(e,t={}){return gt.batch(()=>(U(this,Be).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=gt.batch(()=>U(this,Be).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let a=i.fetch(void 0,n);return n.throwOnError||(a=a.catch(dn)),i.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(r).then(dn)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=U(this,Be).build(this,t);return n.isStaleByTime(Qd(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(dn).catch(dn)}fetchInfiniteQuery(e){return e.behavior=Vm(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(dn).catch(dn)}ensureInfiniteQueryData(e){return e.behavior=Vm(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return $u.isOnline()?U(this,Dr).resumePausedMutations():Promise.resolve()}getQueryCache(){return U(this,Be)}getMutationCache(){return U(this,Dr)}getDefaultOptions(){return U(this,_r)}setDefaultOptions(e){ue(this,_r,e)}setQueryDefaults(e,t){U(this,ma).set(Ko(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...U(this,ma).values()],n={};return t.forEach(r=>{Xo(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){U(this,ga).set(Ko(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...U(this,ga).values()],n={};return t.forEach(r=>{Xo(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...U(this,_r).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Dh(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===_h&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...U(this,_r).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){U(this,Be).clear(),U(this,Dr).clear()}},Be=new WeakMap,Dr=new WeakMap,_r=new WeakMap,ma=new WeakMap,ga=new WeakMap,Ir=new WeakMap,ya=new WeakMap,Ea=new WeakMap,Ag),wS=x.createContext(void 0),CS=({client:e,children:t})=>(x.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),_.jsx(wS.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jo.apply(this,arguments)}var Or;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Or||(Or={}));const qm="popstate";function xS(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return Kd("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:qu(i)}return AS(t,n,null,e)}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function db(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kS(){return Math.random().toString(36).substr(2,8)}function Qm(e,t){return{usr:e.state,key:e.key,idx:t}}function Kd(e,t,n,r){return n===void 0&&(n=null),Jo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ma(t):t,{state:n,key:t&&t.key||r||kS()})}function qu(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ma(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function AS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=Or.Pop,u=null,l=f();l==null&&(l=0,o.replaceState(Jo({},o.state,{idx:l}),""));function f(){return(o.state||{idx:null}).idx}function d(){s=Or.Pop;let T=f(),m=T==null?null:T-l;l=T,u&&u({action:s,location:y.location,delta:m})}function p(T,m){s=Or.Push;let E=Kd(y.location,T,m);l=f()+1;let b=Qm(E,l),S=y.createHref(E);try{o.pushState(b,"",S)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(S)}a&&u&&u({action:s,location:y.location,delta:1})}function h(T,m){s=Or.Replace;let E=Kd(y.location,T,m);l=f();let b=Qm(E,l),S=y.createHref(E);o.replaceState(b,"",S),a&&u&&u({action:s,location:y.location,delta:0})}function g(T){let m=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof T=="string"?T:qu(T);return E=E.replace(/ $/,"%20"),ze(m,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,m)}let y={get action(){return s},get location(){return e(i,o)},listen(T){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(qm,d),u=T,()=>{i.removeEventListener(qm,d),u=null}},createHref(T){return t(i,T)},createURL:g,encodeLocation(T){let m=g(T);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:h,go(T){return o.go(T)}};return y}var Gm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Gm||(Gm={}));function SS(e,t,n){return n===void 0&&(n="/"),DS(e,t,n,!1)}function DS(e,t,n,r){let i=typeof t=="string"?Ma(t):t,a=Ih(i.pathname||"/",n);if(a==null)return null;let o=fb(e);_S(o);let s=null;for(let u=0;s==null&&u<o.length;++u){let l=HS(a);s=BS(o[u],l,r)}return s}function fb(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let u={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};u.relativePath.startsWith("/")&&(ze(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let l=Wr([r,u.relativePath]),f=n.concat(u);a.children&&a.children.length>0&&(ze(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),fb(a.children,t,f,l)),!(a.path==null&&!a.index)&&t.push({path:l,score:FS(l,a.index),routesMeta:f})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let u of hb(a.path))i(a,o,u)}),t}function hb(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=hb(r.join("/")),s=[];return s.push(...o.map(u=>u===""?a:[a,u].join("/"))),i&&s.push(...o),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function _S(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:MS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const IS=/^:[\w-]+$/,NS=3,LS=2,OS=1,RS=10,PS=-2,Km=e=>e==="*";function FS(e,t){let n=e.split("/"),r=n.length;return n.some(Km)&&(r+=PS),t&&(r+=LS),n.filter(i=>!Km(i)).reduce((i,a)=>i+(IS.test(a)?NS:a===""?OS:RS),r)}function MS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function BS(e,t,n){let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let u=r[s],l=s===r.length-1,f=a==="/"?t:t.slice(a.length)||"/",d=Xm({path:u.relativePath,caseSensitive:u.caseSensitive,end:l},f),p=u.route;if(!d&&l&&n&&!r[r.length-1].route.index&&(d=Xm({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Wr([a,d.pathname]),pathnameBase:YS(Wr([a,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(a=Wr([a,d.pathnameBase]))}return o}function Xm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=US(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((l,f,d)=>{let{paramName:p,isOptional:h}=f;if(p==="*"){let y=s[d]||"";o=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const g=s[d];return h&&!g?l[p]=void 0:l[p]=(g||"").replace(/%2F/g,"/"),l},{}),pathname:a,pathnameBase:o,pattern:e}}function US(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),db(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function HS(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return db(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ih(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function jS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ma(e):e;return{pathname:n?n.startsWith("/")?n:zS(n,t):t,search:VS(r),hash:$S(i)}}function zS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function WS(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Nh(e,t){let n=WS(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Lh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ma(e):(i=Jo({},e),ze(!i.pathname||!i.pathname.includes("?"),kc("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),kc("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),kc("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}s=d>=0?t[d]:"/"}let u=jS(i,s),l=o&&o!=="/"&&o.endsWith("/"),f=(a||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(l||f)&&(u.pathname+="/"),u}const Wr=e=>e.join("/").replace(/\/\/+/g,"/"),YS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),VS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$S=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pb=["post","put","patch","delete"];new Set(pb);const QS=["get",...pb];new Set(QS);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zo.apply(this,arguments)}const Oh=x.createContext(null),GS=x.createContext(null),ei=x.createContext(null),_l=x.createContext(null),sr=x.createContext({outlet:null,matches:[],isDataRoute:!1}),mb=x.createContext(null);function KS(e,t){let{relative:n}=t===void 0?{}:t;Ba()||ze(!1);let{basename:r,navigator:i}=x.useContext(ei),{hash:a,pathname:o,search:s}=yb(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Wr([r,o])),i.createHref({pathname:u,search:s,hash:a})}function Ba(){return x.useContext(_l)!=null}function ti(){return Ba()||ze(!1),x.useContext(_l).location}function gb(e){x.useContext(ei).static||x.useLayoutEffect(e)}function Rh(){let{isDataRoute:e}=x.useContext(sr);return e?cD():XS()}function XS(){Ba()||ze(!1);let e=x.useContext(Oh),{basename:t,future:n,navigator:r}=x.useContext(ei),{matches:i}=x.useContext(sr),{pathname:a}=ti(),o=JSON.stringify(Nh(i,n.v7_relativeSplatPath)),s=x.useRef(!1);return gb(()=>{s.current=!0}),x.useCallback(function(l,f){if(f===void 0&&(f={}),!s.current)return;if(typeof l=="number"){r.go(l);return}let d=Lh(l,JSON.parse(o),a,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Wr([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,o,a,e])}function JS(){let{matches:e}=x.useContext(sr),t=e[e.length-1];return t?t.params:{}}function yb(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=x.useContext(ei),{matches:i}=x.useContext(sr),{pathname:a}=ti(),o=JSON.stringify(Nh(i,r.v7_relativeSplatPath));return x.useMemo(()=>Lh(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function ZS(e,t){return eD(e,t)}function eD(e,t,n,r){Ba()||ze(!1);let{navigator:i}=x.useContext(ei),{matches:a}=x.useContext(sr),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let l=ti(),f;if(t){var d;let T=typeof t=="string"?Ma(t):t;u==="/"||(d=T.pathname)!=null&&d.startsWith(u)||ze(!1),f=T}else f=l;let p=f.pathname||"/",h=p;if(u!=="/"){let T=u.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(T.length).join("/")}let g=SS(e,{pathname:h}),y=aD(g&&g.map(T=>Object.assign({},T,{params:Object.assign({},s,T.params),pathname:Wr([u,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?u:Wr([u,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),a,n,r);return t&&y?x.createElement(_l.Provider,{value:{location:Zo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Or.Pop}},y):y}function tD(){let e=lD(),t=qS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,null)}const nD=x.createElement(tD,null);class rD extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(sr.Provider,{value:this.props.routeContext},x.createElement(mb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iD(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(Oh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(sr.Provider,{value:t},r)}function aD(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let f=o.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);f>=0||ze(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,l=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(l=f),d.route.id){let{loaderData:p,errors:h}=n,g=d.route.loader&&p[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||g){u=!0,l>=0?o=o.slice(0,l+1):o=[o[0]];break}}}return o.reduceRight((f,d,p)=>{let h,g=!1,y=null,T=null;n&&(h=s&&d.route.id?s[d.route.id]:void 0,y=d.route.errorElement||nD,u&&(l<0&&p===0?(g=!0,T=null):l===p&&(g=!0,T=d.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,p+1)),E=()=>{let b;return h?b=y:g?b=T:d.route.Component?b=x.createElement(d.route.Component,null):d.route.element?b=d.route.element:b=f,x.createElement(iD,{match:d,routeContext:{outlet:f,matches:m,isDataRoute:n!=null},children:b})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?x.createElement(rD,{location:n.location,revalidation:n.revalidation,component:y,error:h,children:E(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):E()},null)}var Eb=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Eb||{}),Qu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qu||{});function oD(e){let t=x.useContext(Oh);return t||ze(!1),t}function sD(e){let t=x.useContext(GS);return t||ze(!1),t}function uD(e){let t=x.useContext(sr);return t||ze(!1),t}function bb(e){let t=uD(),n=t.matches[t.matches.length-1];return n.route.id||ze(!1),n.route.id}function lD(){var e;let t=x.useContext(mb),n=sD(Qu.UseRouteError),r=bb(Qu.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function cD(){let{router:e}=oD(Eb.UseNavigateStable),t=bb(Qu.UseNavigateStable),n=x.useRef(!1);return gb(()=>{n.current=!0}),x.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Zo({fromRouteId:t},a)))},[e,t])}function dD(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function fD(e){let{to:t,replace:n,state:r,relative:i}=e;Ba()||ze(!1);let{future:a,static:o}=x.useContext(ei),{matches:s}=x.useContext(sr),{pathname:u}=ti(),l=Rh(),f=Lh(t,Nh(s,a.v7_relativeSplatPath),u,i==="path"),d=JSON.stringify(f);return x.useEffect(()=>l(JSON.parse(d),{replace:n,state:r,relative:i}),[l,d,i,n,r]),null}function fu(e){ze(!1)}function hD(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Or.Pop,navigator:a,static:o=!1,future:s}=e;Ba()&&ze(!1);let u=t.replace(/^\/*/,"/"),l=x.useMemo(()=>({basename:u,navigator:a,static:o,future:Zo({v7_relativeSplatPath:!1},s)}),[u,s,a,o]);typeof r=="string"&&(r=Ma(r));let{pathname:f="/",search:d="",hash:p="",state:h=null,key:g="default"}=r,y=x.useMemo(()=>{let T=Ih(f,u);return T==null?null:{location:{pathname:T,search:d,hash:p,state:h,key:g},navigationType:i}},[u,f,d,p,h,g,i]);return y==null?null:x.createElement(ei.Provider,{value:l},x.createElement(_l.Provider,{children:n,value:y}))}function pD(e){let{children:t,location:n}=e;return ZS(Xd(t),n)}new Promise(()=>{});function Xd(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let a=[...t,i];if(r.type===x.Fragment){n.push.apply(n,Xd(r.props.children,a));return}r.type!==fu&&ze(!1),!r.props.index||!r.props.children||ze(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Xd(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jd(){return Jd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jd.apply(this,arguments)}function mD(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function gD(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function yD(e,t){return e.button===0&&(!t||t==="_self")&&!gD(e)}function Zd(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function ED(e,t){let n=Zd(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(a=>{n.append(i,a)})}),n}const bD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],TD="6";try{window.__reactRouterVersion=TD}catch{}const vD="startTransition",Jm=Mg[vD];function wD(e){let{basename:t,children:n,future:r,window:i}=e,a=x.useRef();a.current==null&&(a.current=xS({window:i,v5Compat:!0}));let o=a.current,[s,u]=x.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},f=x.useCallback(d=>{l&&Jm?Jm(()=>u(d)):u(d)},[u,l]);return x.useLayoutEffect(()=>o.listen(f),[o,f]),x.useEffect(()=>dD(r),[r]),x.createElement(hD,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const CD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,es=x.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:u,to:l,preventScrollReset:f,viewTransition:d}=t,p=mD(t,bD),{basename:h}=x.useContext(ei),g,y=!1;if(typeof l=="string"&&xD.test(l)&&(g=l,CD))try{let b=new URL(window.location.href),S=l.startsWith("//")?new URL(b.protocol+l):new URL(l),N=Ih(S.pathname,h);S.origin===b.origin&&N!=null?l=N+S.search+S.hash:y=!0}catch{}let T=KS(l,{relative:i}),m=kD(l,{replace:o,state:s,target:u,preventScrollReset:f,relative:i,viewTransition:d});function E(b){r&&r(b),b.defaultPrevented||m(b)}return x.createElement("a",Jd({},p,{href:g||T,onClick:y||a?r:E,ref:n,target:u}))});var Zm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Zm||(Zm={}));var e0;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(e0||(e0={}));function kD(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=t===void 0?{}:t,u=Rh(),l=ti(),f=yb(e,{relative:o});return x.useCallback(d=>{if(yD(d,n)){d.preventDefault();let p=r!==void 0?r:qu(l)===qu(f);u(e,{replace:p,state:i,preventScrollReset:a,relative:o,viewTransition:s})}},[l,u,f,r,i,n,e,a,o,s])}function AD(e){let t=x.useRef(Zd(e)),n=x.useRef(!1),r=ti(),i=x.useMemo(()=>ED(r.search,n.current?null:t.current),[r.search]),a=Rh(),o=x.useCallback((s,u)=>{const l=Zd(typeof s=="function"?s(i):s);n.current=!0,a("?"+l,u)},[a,i]);return[i,o]}const SD=`# Introduction

# Course Overview

This course provides a comprehensive introduction to **Lakeflow Connect** as a scalable and simplified solution for ingesting data into Databricks from a variety of data sources.

# What You'll Learn

Throughout this course, you will:

- **Explore Lakeflow Connect Architecture**: Understand the different types of connectors (Standard and Managed) and how they fit into your data pipeline
- **Master Ingestion Techniques**: Learn batch, incremental batch, and streaming ingestion approaches
- **Leverage Delta Lake & Medallion Architecture**: Review key benefits and best practices for organizing your data lakehouse
- **Implement Practical Ingestion Patterns**: Gain hands-on experience with cloud object storage ingestion using CREATE TABLE AS (CTAS), COPY INTO, and Auto Loader
- **Work with Data Quality Features**: Append metadata columns, manage the rescued data column, and handle schema mismatches
- **Handle Semi-Structured Data**: Ingest and flatten JSON data effectively
- **Implement Enterprise Solutions**: Use Managed Connectors for enterprise-grade data ingestion
- **Explore Advanced Strategies**: Implement MERGE INTO operations and leverage the Databricks Marketplace

# Who Should Take This Course

- Data engineers looking to build scalable ingestion pipelines
- Professionals implementing Databricks data platforms
- Teams transitioning to a modern data lakehouse architecture
- Anyone working with data integration and ETL/ELT processes

# Prerequisites

- Basic understanding of SQL
- Familiarity with cloud storage concepts (S3, Azure Blob Storage, GCS)
- Basic knowledge of Databricks and data warehousing concepts
- Access to a Databricks workspace and cloud storage environment

# Course Structure

The course is organized into three main sections:

1. **Introduction to Data Engineering in Databricks** - Foundation concepts and environment setup
2. **Cloud Storage Ingestion with Lakeflow Connect Standard Connectors** - Core ingestion techniques
3. **Enterprise Data Ingestion and Alternative Strategies** - Advanced patterns and solutions

# What You'll Accomplish

By the end of this course, you will be able to:

✓ Design and implement data ingestion pipelines with Lakeflow Connect
✓ Choose the right ingestion method for different use cases (CTAS, COPY INTO, Auto Loader)
✓ Manage data quality through metadata columns and rescued data handling
✓ Ingest and process semi-structured data formats
✓ Implement enterprise-grade data ingestion with Managed Connectors
✓ Handle complex ingestion scenarios with MERGE INTO and Marketplace connectors

---
`,DD=`# Lakeflow Connect


# Introduction to Data Engineering in Databricks

## Data Engineering in Databricks

## What is Data Engineering?

Data engineering is the practice of designing, building, and maintaining systems that collect, store, and process data at scale. In the context of Databricks, data engineering involves:

- **Ingestion**: Getting data from various sources into your data lakehouse
- **Transformation**: Processing and preparing data for analysis
- **Storage**: Organizing data in optimized formats for performance
- **Pipeline Management**: Orchestrating workflows for reliable data processing



# What is Lakeflow Connect?
---

**Lakeflow Connect is Databricks' managed service for ingesting data from databases, SaaS systems, cloud storage, and streaming platforms into Delta Lake — using either batch or real-time change data capture.**

---

When we work with modern data platforms, one of the biggest challenges is **getting data into the system reliably**.
Different teams use dozens of tools — databases, SaaS applications, cloud storage, Kafka streams — and each of these sources produces data in very different shapes and speeds.

**Lakeflow Connect** is Databricks’ solution to this problem.
It is a **fully managed ingestion layer** that allows you to connect virtually any data source to the Databricks Lakehouse and bring that data in **quickly, securely, and continuously**, without writing complex pipelines.


---

# Why It Exists

In most companies, data ingestion is messy:

* Every data source requires different scripts or custom connectors
* Pipelines break whenever schemas change
* Incremental updates or CDC require heavy engineering work
* Scheduling, retries, and monitoring create operational overhead

Lakeflow Connect eliminates all of this by providing a **single, unified, and governed ingestion service**.

---

# How It Works

Lakeflow Connect supports the full ingestion lifecycle:

1. **Connect to a source**
   – This can be a database, a SaaS tool, an S3 bucket, or even Kafka.

2. **Configure ingestion mode**
   – Full batch sync
   – Incremental loads
   – Or real-time CDC for live updates

3. **Map the data to Delta tables**
   – Unity Catalog handles governance.
   – Schema enforcement and evolution are automatic.

4. **Let Databricks handle the heavy lifting**
   – Reliability, retries, monitoring, and scaling happen automatically.

The result: you always have *fresh*, *clean*, and *consistent* data in your Lakehouse.

---

# Key Features

## 1. Batch and Streaming Ingestion

Lakeflow Connect supports both traditional batch loads and modern streaming or CDC patterns.
This means you can capture database changes in near real-time without manual engineering.

###2. Automatic Schema Management

If new fields appear in a source system, Connect can automatically evolve your Delta table’s schema — or alert you, depending on your governance settings.

## 3. Fault-Tolerant and Reliable

You don’t need to build retry logic, deduplication, or failure workflows.
This is all baked into the service and powered by Delta Lake’s ACID transactions.

## 4. Unified Governance

Because it’s integrated with **Unity Catalog**, everything you ingest is secure, trackable, and versioned.

## 5. Visual Monitoring

You get dashboards showing ingestion status, throughput, latency, and data quality signals.

---

# Summary Table for Presentations

# What Lakeflow Connect Provides

| Feature                           | Description                                       |
| --------------------------------- | ------------------------------------------------- |
| **Fully managed ingestion**       | Databricks handles all operational complexity.    |
| **Batch & streaming support**     | Run full loads, incremental updates, or CDC.      |
| **Automatic schema handling**     | Manage schema drift without breaking pipelines.   |
| **Native Delta Lake integration** | Reliable storage with ACID guarantees.            |
| **Built-in monitoring**           | Logs, metrics, alerts, lineage.                   |
| **Strong governance**             | Unified with Unity Catalog security and auditing. |

---

# Sources Lakeflow Connect Can Ingest

| Category              | Examples                                                 |
| --------------------- | -------------------------------------------------------- |
| **Databases**         | MySQL, Postgres, SQL Server, Oracle, Snowflake, Redshift |
| **SaaS Systems**      | Salesforce, Workday, HubSpot, NetSuite, Zendesk          |
| **Cloud Storage**     | S3, ADLS, GCS, FTP/SFTP                                  |
| **Streaming Engines** | Kafka, Kinesis, Event Hubs                               |

---

# Closing Sentence 

Lakeflow Connect allows us to bring any data from any system into the Lakehouse efficiently, consistently, and with full governance — without writing custom pipelines or managing infrastructure.




## 🔧 Core Components of Lakeflow

Lakeflow is structured around three main components (plus some supporting tooling) that together cover the full data-pipeline lifecycle:

| Component                                                                   | Purpose / What it Does                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Lakeflow Connect**                                                        | Ingest data from diverse sources — databases (MySQL, Postgres, SQL Server, Oracle), enterprise apps (Salesforce, Workday, etc.), cloud storage, message buses, or local files — in either batch or streaming/CDC mode.
| **Lakeflow Spark Declarative Pipelines**                                    | A declarative framework (usable in SQL or Python) for building batch and streaming pipelines. Under the hood it's compatible with Spark / Structured Streaming APIs — allowing incremental ingestion, real-time processing, materialized views, streaming tables, etc.  |
| **Lakeflow Jobs**                                                           | Orchestration and workflow management: schedule and orchestrate pipelines, notebooks, queries, ML training, dashboards, etc. Supports triggering, branching, conditional execution, monitoring, and integrates with alerting/CI–CD workflows.                                       |
| **Governance & Monitoring (incl. via Unity Catalog / built-in monitoring)** | All data flowing through Lakeflow can be governed, catalogued, lineage-tracked, and observed — making sure pipelines remain compliant, debuggable, and maintainable.                                                                                                               |

---










`,_D=`# Delta Lake 

---

# Big Data Fun Analogy 

1️⃣ Data Lake → “The Wild Public Beach”

A Data Lake is like a giant public beach where anyone can throw anything into the water—clean, dirty, structured, or messy—without rules.


Technologies: AWS S3, Azure Data Lake Storage (ADLS), Google Cloud Storage (GCS), HDFS

2️⃣ Data Warehouse → “The Luxury Swimming Pool”

A Data Warehouse is like a clean, curated, expensive swimming pool where only well-prepared, neatly formatted people (data) are allowed to enter.

Technologies: Snowflake, Databricks Warehouse, Amazon Redshift, Google BigQuery, Azure Synapse

3️⃣ Delta Lake → “The Same Wild Beach, But Now with Lifeguards and Security Cameras”

Delta Lake is a Data Lake upgraded with guards, cameras, rules, and ACID protection so the water stays clean, organized, and trustworthy.


Technologies: Delta Lake (open source), Databricks Delta, Apache Hudi, Apache Iceberg.


4️⃣ Delta Table → “Your Reserved, Organized Swimming Lane in the Delta Lake”

A Delta Table is a structured, ACID-protected table stored inside the Delta Lake that behaves like a database table with versioning, reliability, and fast queries.

Ccreated using: Databricks Delta Tables, Apache Spark + Delta Lake, Unity Catalog Tables

---



# Why Delta Lake Became Industry Standard

Delta Lake is widely used because it:

* Works with ANY Spark environment (open-source, Databricks, AWS EMR, GCP, Azure)
* Open-source, Apache-licensed
* Extremely scalable
* Enables high-quality lakehouse architecture

Databricks originally created Delta Lake

---

# Delta Lake vs Data Warehouse

| Feature     | Data Lake       | Data Warehouse | Delta Lake      |
| ----------- | --------------- | -------------- | --------------- |
| Storage     | cheap, scalable | expensive      | cheap, scalable |
| Reliability | low             | high           | high            |
| ACID        | no              | yes            | yes             |
| Schema      | flexible        | strict         | strict+flexible |
| Performance | medium          | high           | high            |
| Streaming   | limited         | weak           | strong          |

Delta Lake gives you **the best of both worlds** → a *Lakehouse*.



Delta Lake is an **open-source storage layer** that brings **ACID transactions**, **schema enforcement**, **time travel**, and **reliable data management** to data lakes built on top of cloud object storage (e.g., S3, ADLS, GCS).

It solves the classic problems of raw data lakes (“data swamps”), where files can become inconsistent, corrupted, or hard to manage when many users/processes are writing to the same storage.

Below is a clear, structured explanation of what Delta Lake is and why it matters.

---

# Delta Lake — Simple Definition

**Delta Lake is an open-source technology that transforms a data lake into a reliable, high-performance data warehouse-like system.**
It sits *on top of* your cloud storage and adds transactional consistency, governance, and performance features.

---

# Why Delta Lake Was Created (The Problem)

Traditional data lakes (with Parquet/CSV/JSON) have serious limitations:

* ❌ No ACID transactions → concurrent writes can corrupt data
* ❌ No schema enforcement → inconsistent columns, missing fields
* ❌ No versioning → accidental deletes overwrite history
* ❌ Slow reads on large directories → too many small files
* ❌ Difficult to build reliable pipelines

These issues make data lakes cheap but *unreliable*.

---

# What Delta Lake Adds to a Data Lake

## 1. ACID Transactions

Guarantees **Atomicity, Consistency, Isolation, Durability**.

This means:

* Concurrent writes won’t corrupt data
* If a job fails, partial writes are rolled back
* Data is always consistent for readers
* Supports *streaming + batch* at the same time

---

## 2. Transaction Log (Delta Log)

Delta Lake maintains a ***transaction log*** in a folder called \`_delta_log\`.
It stores:

* Every commit
* Version history
* Schema updates
* Add/remove files
* Operational metadata

This log is the “brain” of Delta Lake.

---

## 3. Schema Enforcement

If you try to write bad data:

* Wrong column types
* Missing required columns

…Delta will **reject** the write.
This keeps your data lake clean and trustworthy.

You can also use:

* **Schema evolution** → automatically add new columns
* **Schema migration** → controlled updates to schema

---

## 4. Time Travel

You can query older versions of a table:

\`\`\`sql
SELECT * FROM myTable VERSION AS OF 5;
\`\`\`

or

\`\`\`sql
SELECT * FROM myTable TIMESTAMP AS OF '2025-01-01';
\`\`\`

This is invaluable for:

* Debugging data issues
* Auditing
* Reproducing ML experiments

---

## 5. **Performance Optimizations**

Delta Lake optimizes performance with:

* **Z-Ordering** (similar to multi-column indexing)
* **Data Skipping**
* **File Compaction / Optimize** (reduces small files)
* **Caching**
* **Columnar Parquet storage**

This makes Delta tables extremely fast, even at multi-TB scale.

---

## 6. Unifies Batch + Streaming

Delta Lake supports:

* **Streaming reads**
* **Streaming writes**
* **Batch updates**
  …on the same table, without conflicts.

This makes building *near-real-time pipelines* much easier.

---

# What Format Does Delta Lake Use?

Delta Lake stores data as:

* **Parquet files** (the actual data)
* **_delta_log** (the metadata/transaction log)

So the storage remains open and columnar.

---

# Delta Table = Parquet + Transaction Log

A Delta table is essentially:

\`\`\`sql
/my_table/
    part-0001.snappy.parquet
    part-0002.snappy.parquet
    ...
    _delta_log/
        0000000000000000.json
        0000000000000001.json
\`\`\`

This structure gives durability, governance, and reliability.



`,ID=`

# Ingestion modes

---

#  CTAS, COPY INTO, and Auto Loader in Databricks — What They Are and When to Use Them

In Databricks, there are three major ways to bring data into Delta tables:
**CTAS**, **COPY INTO**, and **Auto Loader**.
Each one solves a different problem, and understanding the differences helps you choose the right tool during ingestion.

Let’s look at them one by one.

---

# 1. CTAS (Create Table As Select)

**What it is:**
CTAS is a SQL command that creates a new table **from the results of a query**.

**In one sentence:**
👉 *CTAS is the easiest way to create a brand-new Delta table based on an existing dataset or a SQL query.*

**Example use case:**

* You read files from a Bronze table
* Apply transformations
* Write the result as a new Silver table

**Presentation Explanation:**
“CTAS lets me take any query, run it, and the result becomes a brand-new managed table. It’s perfect for initializing a table after transformations or preparing curated datasets.”

**SQL example:**

\`\`\`sql
CREATE TABLE sales_silver
AS SELECT * FROM sales_bronze WHERE amount > 0;
\`\`\`

---

# 2. COPY INTO

**What it is:**
COPY INTO is used to **load files from external storage** (such as S3, ADLS, GCS) into an existing Delta table.

**In one sentence:**
👉 *COPY INTO loads data from cloud storage into a Delta table in a reliable, idempotent way — and it only loads new files.*

**What makes COPY INTO special:**

* It tracks which files were already loaded
* You can run it repeatedly without duplicates
* Great for incremental file ingestion
* Perfect for scheduling in Lakeflow Jobs

**Typical file types:**
CSV, JSON, Parquet, Avro, ORC

**Presentation Explanation:**
“COPY INTO is designed for reliable batch file ingestion. It remembers which files have been processed, so even if I rerun it 100 times, it will only load files that are new.”

**SQL example:**

\`\`\`sql
COPY INTO my_table
FROM 's3://bucket/path/'
FILEFORMAT = PARQUET;
\`\`\`

---

# 3. Auto Loader (cloud_files)

**What it is:**
Auto Loader is a **streaming ingestion framework** that automatically detects and processes new files arriving in cloud storage.

**In one sentence:**
👉 *Auto Loader is for continuous, scalable, event-driven ingestion — perfect when new files arrive unpredictably or at high volume.*

**Key features:**

* Automatically detects new files using notifications or file listing
* Extremely scalable
* Works with streaming and batch
* Supports schema evolution (“schema drift”)
* Minimizes operational overhead

**Presentation Explanation:**
“Auto Loader is the smartest ingestion option in Databricks. Whenever a new file lands in cloud storage, Auto Loader picks it up automatically. It scales to millions of files and handles schema changes as the data evolves.”

**Example code (Python):**

\`\`\`python
df = spark.readStream.format("cloud_files") \\
    .option("cloud_files_format", "json") \\
    .load("s3://bucket/path")

df.writeStream \\
  .trigger(availableNow=True) \\
  .option("checkpointLocation", "/chk/") \\
  .table("my_delta_table")
\`\`\`

---

# Summary Table CTAS, COPY INTO, Auto Loader
| Feature               | CTAS                            | COPY INTO                      | Auto Loader                              |
| --------------------- | ------------------------------- | ------------------------------ | ---------------------------------------- |
| Purpose               | Create new table from a query   | Load files into a table        | Stream or incrementally ingest new files |
| Mode                  | Batch                           | Batch (incremental)            | Streaming + incremental                  |
| Creates table?        | Yes                             | No (loads into existing table) | No                                       |
| Detects new files?    | No                              | Yes (tracks loaded files)      | Yes (event-driven + scalable)            |
| Handles schema drift? | Limited                         | Basic                          | Advanced                                 |
| Best for              | Transformations, curated tables | Scheduled file ingestion       | High-volume continuous ingestion         |

---

# Closing line for your presentation

CTAS builds new tables from queries, COPY INTO reliably loads external files into existing tables, and Auto Loader provides a fully automated, scalable way to ingest new files as they arrive. Together, they give us a complete ingestion toolkit for any workload on Databricks.

---


# Choosing Ingestion Method
\`\`\`sql
Initial load or complete refresh?
├─ YES → Use CTAS
└─ NO
   Data arriving continuously?
   ├─ YES → Use Auto Loader
   └─ NO
      Regular batch arrivals?
      ├─ YES → Use COPY INTO
      └─ NO → Custom streaming solution
\`\`\`

# Choosing Connector Type
\`\`\`sql
Connecting to enterprise system?
├─ YES → Use Managed Connector
└─ NO
   Data in cloud storage?
   ├─ YES → Use Standard Connector
   └─ NO
      Is data available on Marketplace?
      ├─ YES → Subscribe to share
      └─ NO → Build custom solution
\`\`\`

# Choosing Update Strategy
\`\`\`sql
Need to handle updates and deletes?
├─ YES → Use MERGE INTO
└─ NO
   Need to track historical changes?
   ├─ YES → Implement SCD Type 2
   └─ NO
      Simple append only?
      └─ Use INSERT
\`\`\`

---`,ND=`

# SaaS Ingestion

This slide explains **how Databricks Lakeflow Connect ingests data from SaaS applications**—things like Salesforce, ServiceNow, Workday, or Google Analytics—into **Streaming Delta Tables** using a **serverless, fully managed pipeline**.

---

# 🌟 **High-Level Story**

The idea is:

> *Lakeflow Connect acts as a bridge between external SaaS systems and your Delta Lake. It securely retrieves data, transforms it, and continuously loads it into streaming Delta tables—all without you managing any infrastructure.*

---

# 🔍 Step-by-Step Explanation (Following the Numbered Icons)

## 1️⃣ Credentials (Unity Catalog)

* The ingestion process starts by retrieving **credentials** securely stored in **Unity Catalog**.
* These might be API keys, OAuth tokens, usernames, or passwords.
* You don’t hardcode or store credentials manually—Databricks retrieves them securely.

**In your speech:**
“Step one: Lakeflow retrieves the required credentials directly from Unity Catalog. This ensures everything is governed, secure, and centrally managed.”

---

## 2️⃣ Lakeflow Connect Calls the SaaS Service

* Using those credentials, Lakeflow Connect communicates with external SaaS applications:

  * Salesforce
  * ServiceNow
  * Workday
  * Google Analytics
  * Any other supported managed connector

It uses a **serverless job** called *Declarative Pipelines* to reach out to the external API or endpoint.

**In your speech:**
“Step two: Lakeflow Connect uses a serverless job to reach out to the SaaS system. It calls the API or endpoint, fetches the data, and handles connectivity, retries, and scaling automatically.”

---

## 3️⃣ Data Lands in Streaming Delta Tables

* After pulling the data, the service **transforms it** into Delta format.
* It then writes it into a **Streaming Delta Table**.
* This means the data is continuously updated—perfect for real-time dashboards, ML models, or downstream pipelines.

**In your speech:**
“Step three: the ingested data is transformed and stored into a Streaming Delta Table, so your lakehouse always has fresh, up-to-date SaaS data.”

---

# 🧠 Summary

So overall, Lakeflow Connect is a fully managed ingestion service.
It securely retrieves credentials from Unity Catalog, connects to external SaaS systems, and then streams that data directly into Delta tables using serverless declarative pipelines.
You don’t manage infrastructure, you don’t build custom connectors, and you get reliable, continuous data ingestion into the lakehouse.

---


`,LD=`
#  Database Ingestion

This slide explains how **Lakeflow Connect ingests data from traditional databases**—whether they are on-prem or running in the cloud—into **Streaming Delta Tables** inside Databricks.

The whole pipeline is fully managed, and it uses both classic compute and serverless compute behind the scenes.

---

# 🔍 Step-by-Step Walkthrough (Following the Numbered Icons)

## 1️⃣ Credentials – Stored in Unity Catalog

“Everything starts with credentials.
The ingestion pipeline securely retrieves the database credentials from Unity Catalog.
This ensures that authentication is centralized, governed, and not hard-coded by engineers.”

---

## 2️⃣ Connecting to the Traditional Database

Once Lakeflow retrieves the credentials, it uses a *Classic Compute Declarative Pipeline*—called the **Ingestion Gateway**—to connect to your actual database.
This can be any traditional system: Oracle, SQL Server, Postgres, MySQL, etc., whether on-prem or in the cloud.


“This gateway is responsible for performing the actual extraction from the database.”

---

## 3️⃣ Staging & State Management (Unity Catalog Volume)

After the data is extracted, Lakeflow Connect stores the state and staging files in a Unity Catalog Volume.
This is where Lakeflow tracks what has already been ingested—so it can support incremental loads, CDC, and recover from failures.


Think of this as the control room: where checkpoints, offsets, metadata, and intermediate files are stored.

---

## 4️⃣ Managed Ingestion – Serverless Declarative Pipeline

Then comes the serverless part.
A **Serverless Declarative Pipeline** takes the staged data, processes it, and writes it into **Streaming Delta Tables**.

This means:

* No clusters
* No infra to manage
* Scaling and retries handled automatically

This is the transformation + delivery stage.

---

## Final Output → Streaming Delta Tables

The end result is that your database is continuously synced into Delta Lake, using Streaming Delta Tables.
You get incremental, reliable, near-real-time ingestion without managing any infrastructure.

---

# 🧠 **Summary You Can Read Out Loud:**

So to summarize what this diagram shows:
Lakeflow Connect uses a combination of classic compute and serverless pipelines to securely pull data from traditional databases. It reads credentials from Unity Catalog, extracts the data, stores the ingestion state in Unity Catalog Volumes, and then a serverless pipeline delivers it into Streaming Delta Tables.

This gives you a fully managed, end-to-end ingestion process for enterprise databases—secure, reliable, and scalable.

---`,OD=`


# Summary

# LakeFlow & LakeFlow Connect

* LakeFlow is Databricks’ end-to-end data ingestion and data engineering framework designed to simplify how data moves into the Lakehouse.
* **LakeFlow Connect** provides **native connectors** that allow seamless ingestion from SaaS applications, databases, and streaming systems into the Databricks Lakehouse.
* It automates schema inference, schema evolution, and scalable ingestion without heavy engineering overhead.

---

# Autoloader

* **Autoloader** is a Databricks ingestion tool optimized for streaming and incremental file ingestion from cloud storage (e.g., S3, ADLS, GCS).
* Key features:

  * Automatic schema inference
  * Schema evolution (\`rescued_data\` column for unexpected fields)
  * Scalability for millions of files using cloud-native file notification services
  * Supports both **streaming** and **incremental batch** ingestion



# Ingestion Methods Covered

We reviewed several ingestion approaches in Databricks:

## 1. LakeFlow Connect

* High-level, automated ingestion from external systems
* Handles both batch and streaming pipelines
* Supports easy configuration and monitoring

## 2. Autoloader

* Best for **incremental file-based ingestion**
* Works with streaming and batch modes

## 3. COPY INTO

* Command-based ingestion for loading data **on demand** into Delta tables
* Easy for repeated loads or ad-hoc ingestion tasks
* Supports schema evolution and incremental logic

## 4. CTAS (CREATE TABLE AS SELECT)

* Not an ingestion tool, but used to **create new managed tables** based on existing data
* Useful when transforming or reorganizing data after ingestion
`,RD=`
# Practice Questions

---

## 1. What is the primary purpose of Lakeflow Connect in Databricks?

**A.** Manage cluster compute profiles

**B.** Simplify and accelerate data ingestion from various sources

**C.** Generate dashboards automatically

**D.** Replace Delta Live Tables

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Simplify and accelerate data ingestion**  
**Explanation:**  
Lakeflow Connect provides managed pipelines that connect to many data sources, handle authentication, schema drift, and ingestion logic while hiding infrastructure complexity.
</details>

---

## 2. What are the two main categories of connectors in Lakeflow Connect?

**A.** Manual connectors and Automated connectors

**B.** Streaming connectors and Batch connectors

**C.** Standard connectors and Managed connectors

**D.** Bronze connectors and Silver connectors

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: C — Standard and Managed Connectors**  
**Explanation:**  
Standard connectors read from cloud file storage (S3, ADLS, GCS).  
Managed connectors integrate with enterprise systems (Salesforce, Oracle, SAP, SaaS) using fully managed, zero-code ingestion.
</details>

---

## 3. Which three ingestion methods are common in Lakeflow Connect Standard Connectors?

**A.** MERGE INTO, DLT, COPY INTO

**B.** CTAS, COPY INTO, Auto Loader

**C.** Spark Streaming, DLT, Snowpipe

**D.** Unity Catalog, MLflow, Auto Loader

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — CTAS, COPY INTO, Auto Loader**  
**Explanation:**  
These are the three fundamental ingestion techniques used for initial loads (CTAS), incremental batch loads (COPY INTO), and continuous streaming ingestion (Auto Loader).
</details>

---

## 4. What is the primary goal of the Medallion Architecture?

**A.** Reduce cluster usage

**B.** Organize data into structured quality layers

**C.** Optimize SQL query cost

**D.** Replace data warehouses

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Organize data into structured quality layers**  
**Explanation:**  
The Bronze → Silver → Gold layering improves quality, reliability, lineage, and reusability across analytics and ML workloads.
</details>

---

## 5. What is the purpose of metadata columns added during ingestion?

**A.** Improve write throughput

**B.** Track ingestion time and file lineage

**C.** Reduce storage cost

**D.** Partition the data automatically

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Track ingestion time and file lineage**  
**Explanation:**  
Metadata such as \`_ingestion_timestamp\` and \`_source_file\` enables auditing, troubleshooting, and governance across ingestion pipelines.
</details>

---

## 6. What is the rescued data column used for?

**A.** Storing deleted records

**B.** Capturing malformed or schema-mismatched records

**C.** Tracking cluster crash logs

**D.** Holding checkpoint data

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Capturing malformed or mismatched records**  
**Explanation:**  
When a record doesn’t fit the schema, it is stored in the \`_rescued_data\` column rather than being dropped, preserving data integrity and supporting schema evolution.
</details>

---

## 7. How does Auto Loader differ from COPY INTO?

**A.** Auto Loader is only for batch workloads

**B.** COPY INTO supports schema evolution

**C.** Auto Loader supports continuous ingestion with automatic file discovery

**D.** COPY INTO uses serverless compute only

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: C — Auto Loader supports continuous ingestion and automatic discovery**  
**Explanation:**  
Auto Loader scales to millions of files, handles schema drift automatically, and is ideal for streaming or continuous ingestion. COPY INTO is best for incremental batch ingestion.
</details>

---

## 8. What is a major benefit of using Managed Connectors for enterprise ingestion?

**A.** They eliminate the need for Unity Catalog

**B.** They provide zero-code connection to systems like SAP, Salesforce, Oracle

**C.** They run only on classic compute

**D.** They bypass security controls for faster performance

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Zero-code ingestion for enterprise systems**  
**Explanation:**  
Managed Connectors provide built-in reliability, schema management, error handling, credential management, and external system integration with no coding required.
</details>

---

## 9. When should you use the Delta Lake MERGE INTO command?

**A.** When performing streaming ingestion from cloud storage

**B.** When needing to synchronize or upsert data

**C.** For schema evolution

**D.** For bulk initial table creation

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Synchronize or upsert data**  
**Explanation:**  
MERGE INTO is used for change data capture (CDC), Slowly Changing Dimensions (SCD), and upserting new or updated records into Delta tables.
</details>

---

## 10. What is the Databricks Marketplace used for?

**A.** Deploying clusters and jobs

**B.** Sharing notebooks with other users

**C.** Subscribing to external datasets and applications

**D.** Running ML models directly on partner platforms


<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: C — Subscribing to external datasets and apps**  
**Explanation:**  
The Marketplace provides third-party and open datasets that can be directly integrated into the Lakehouse, accelerating analytics and reducing ingestion overhead.
</details>

---

`,PD=`

# Labs

## Version: v3.0.3 Nov 2025

This is a high-level summary of all lab notebooks, what they contain, and what you must pay attention to while teaching.
Most notebooks only require running the cells and explaining the concepts, but a few have **important manual steps**.

---

# 1 — Exploring the Lab Environment

**What this notebook does:**

* Introduces the workspace, environment, and helper functions.
* Demonstrates basic metadata (default catalog, schema, tables, \`USE CATALOG\`, \`USE SCHEMA\`).
* Just lists the types of tables and shows what will be used.

**Your tasks:**

* ✔ Just run all cells.
* ✔ Explain what the environment looks like.
* ✔ No editing or manual intervention required.

---

# 2A — Data Ingestion with CREATE TABLE AS (CTAS) and COPY INTO

**What this notebook does:**

* Demonstrates CTAS ingestion.
* Demonstrates COPY INTO ingestion.
* Includes one file intentionally producing an error — this is expected.

**Your tasks:**

* ✔ Run all cells.
* ✔ Explain CTAS vs COPY INTO.
* ⚠ One step will fail on purpose — mention that it is intentional and part of the exercise.
* No manual uploads or edits needed.

---

# 2B — Create Streaming Tables with SQL using Auto Loader

**This one *requires special attention*.**

**Critical steps you must perform:**

1. ✔ **Switch to Labuser Compute** first.
2. ✔ Then **switch to SQL Warehouse compute** before running streaming SQL.
3. ✔ **Run the second classroom setup script while using SQL Warehouse.**
4. ✔ In the “Create a STREAMING TABLE using Databricks SQL” section,
   **replace the source labuser name** with yours if needed.
5. ⚠ **o001.csv file must be downloaded manually**

   * Download it
   * Upload it into the appropriate **volume**
   * Refresh the table to trigger the load

**Your tasks:**

* ⚠ Pay very close attention to compute switching.
* ✔ Demonstrate Auto Loader behavior (streaming ingestion).
* ✔ Run all cells after the manual CSV handling.

---

# 3 — Adding Metadata Columns During Ingestion

**What this notebook does:**

* Shows how to add metadata columns:
  \`_metadata.file_path\`, \`_metadata.file_modification_time\`, etc.

**Your tasks:**

* ✔ Run the cells.
* ✔ Explain why metadata columns matter in ingestion pipelines.
* No manual setup required.

---

# 4 — Handling CSV Ingestion with the Rescued Data Column

**What this notebook does:**

* Demonstrates schema evolution issues with CSV.
* Shows how the rescued data column (\`_rescued_data\`) collects malformed records.

**Your tasks:**

* ✔ Run all cells.
* ✔ Explain how rescued data helps avoid ingestion failures.
* No manual uploads or replacements required.

---

# 6 — Ingesting JSON Files with Databricks

**What this notebook does:**

* Demonstrates encoding/decoding in JSON.
* Shows how JSON ingestion works with Auto Loader or COPY INTO.

**Your tasks:**

* ✔ Run the cells.
* ✔ When showing encoding/decoding, **open the provided link in a new tab** to help students zoom in on the content.
* No manual steps required.

---

# 8 — Enterprise Data Ingestion with LakeFlow Connect

**What this notebook does:**

* Demonstrates enterprise-grade data ingestion through LakeFlow Connect.
* Uses a **simple demo link**.

**Your tasks:**

* ✔ Show the demo at:
  **[https://app.getreprise.com/launch/BXZY58n/](https://app.getreprise.com/launch/BXZY58n/)**
* ✔ Explain the concepts using the demo flow.
* No coding or cell changes required.

---

# Summary of Special Things to Pay Attention To

| Notebook | Special Action Required                                                                                                                  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **1**  | None — just run cells.                                                                                                                   |
| **2A**   | One intentional error — explain it.                                                                                                      |
| **2B**   | ⚠ Compute switching (Labuser → SQL Warehouse), ⚠ run classroom script on SQL Warehouse, ⚠ replace labuser, ⚠ manually upload \`o001.csv\`. |
| **3**    | None — run and explain.                                                                                                                  |
| **4**    | None — run and explain.                                                                                                                  |
| **6**    | Open encoding/decoding link in new tab.                                                                                                  |
| **8**    | Show LakeFlow Connect demo link.                                                                                                         |

---
`,FD=`# Introduction to Delta Lake

Delta Lake is an open-source storage layer that brings reliability to data lakes. It provides ACID transactions, scalable metadata handling, and unifies streaming and batch data processing.

## What is Delta Lake?

Delta Lake runs on top of your existing data lake and is fully compatible with Apache Spark APIs. It was originally developed at Databricks and open-sourced in 2019.

## The Problem with Data Lakes

Traditional data lakes face several challenges:

| Challenge | Description |
|-----------|-------------|
| **No ACID** | Partial writes can corrupt data |
| **No schema enforcement** | Bad data can slip in |
| **No versioning** | Can't query historical data |
| **Small files** | Performance degrades over time |

## How Delta Lake Solves These

### ACID Transactions

Delta Lake provides serializable isolation:

\`\`\`python
# Atomic writes - either all data is written or none
df.write.format("delta").save("/path/to/table")

# Concurrent writes are handled automatically
\`\`\`

### Schema Enforcement

Prevent bad data from corrupting your tables:

\`\`\`python
# This will fail if schema doesn't match
df_with_wrong_schema.write \\
    .format("delta") \\
    .mode("append") \\
    .save("/path/to/table")
# Error: Schema mismatch detected
\`\`\`

### Time Travel

Query any previous version of your data:

\`\`\`python
# Query data as of a specific version
df = spark.read \\
    .format("delta") \\
    .option("versionAsOf", 5) \\
    .load("/path/to/table")

# Or as of a timestamp
df = spark.read \\
    .format("delta") \\
    .option("timestampAsOf", "2024-01-01") \\
    .load("/path/to/table")
\`\`\`

### Unified Batch and Streaming

Same table for both batch and streaming:

\`\`\`python
# Batch write
df.write.format("delta").save(path)

# Streaming write to same table
stream_df.writeStream \\
    .format("delta") \\
    .start(path)

# Streaming read
spark.readStream \\
    .format("delta") \\
    .load(path)
\`\`\`

> "Delta Lake brings reliability and performance to your data lake."
`,MD=`# Key Features

Let's explore the key features that make Delta Lake powerful.

## Transaction Log

The transaction log is the heart of Delta Lake:

### How It Works

Every change is recorded in a JSON log file:

\`\`\`
_delta_log/
├── 00000000000000000000.json
├── 00000000000000000001.json
├── 00000000000000000002.json
└── 00000000000000000010.checkpoint.parquet
\`\`\`

### Log Contents

\`\`\`json
{
  "add": {
    "path": "part-00000.parquet",
    "partitionValues": {"date": "2024-01-15"},
    "size": 1234567,
    "modificationTime": 1705315200000,
    "dataChange": true
  }
}
\`\`\`

## Schema Evolution

Safely evolve your schema over time:

### Adding Columns

\`\`\`python
# Enable schema evolution
df.write \\
    .format("delta") \\
    .mode("append") \\
    .option("mergeSchema", "true") \\
    .save("/path/to/table")
\`\`\`

### Schema Enforcement

\`\`\`python
# Set table properties
spark.sql("""
    ALTER TABLE my_table 
    SET TBLPROPERTIES (
        'delta.columnMapping.mode' = 'name',
        'delta.minReaderVersion' = '2',
        'delta.minWriterVersion' = '5'
    )
""")
\`\`\`

## Data Compaction

Optimize small files:

### OPTIMIZE Command

\`\`\`python
from delta.tables import DeltaTable

# Compact all small files
spark.sql("OPTIMIZE delta.\`/path/to/table\`")

# Or with Python API
delta_table = DeltaTable.forPath(spark, "/path/to/table")
delta_table.optimize().executeCompaction()
\`\`\`

### Z-Ordering

Co-locate related data for faster queries:

\`\`\`python
# Z-order by frequently filtered columns
spark.sql("""
    OPTIMIZE delta.\`/path/to/table\`
    ZORDER BY (date, country)
""")
\`\`\`

## Data Skipping

Automatic query optimization:

\`\`\`python
# Delta Lake automatically skips files
# based on statistics (min/max values)

# This query only reads relevant files
df = spark.read.format("delta").load(path) \\
    .filter("date = '2024-01-15'") \\
    .filter("country = 'US'")
\`\`\`

## Vacuum

Clean up old files:

\`\`\`python
# Remove files older than 7 days (default)
spark.sql("VACUUM delta.\`/path/to/table\`")

# Remove files older than 24 hours
spark.sql("VACUUM delta.\`/path/to/table\` RETAIN 24 HOURS")

# Python API
delta_table.vacuum(24)  # hours
\`\`\`

> ⚠️ **Warning:** Files removed by VACUUM cannot be used for time travel.
`,BD=`# ACID Transactions

Delta Lake provides full ACID transaction support.

## What is ACID?

| Property | Description |
|----------|-------------|
| **Atomicity** | All or nothing - partial failures are rolled back |
| **Consistency** | Data always in a valid state |
| **Isolation** | Concurrent operations don't interfere |
| **Durability** | Committed changes persist |

## Atomicity

### Atomic Writes

\`\`\`python
# This is atomic - either all succeeds or all fails
df.write \\
    .format("delta") \\
    .mode("append") \\
    .save("/path/to/table")

# If any partition fails, the entire write is rolled back
\`\`\`

### Atomic Operations

\`\`\`python
from delta.tables import DeltaTable

delta_table = DeltaTable.forPath(spark, "/path/to/table")

# Atomic delete
delta_table.delete("date < '2023-01-01'")

# Atomic update
delta_table.update(
    condition="country = 'US'",
    set={"region": "'North America'"}
)
\`\`\`

## Isolation Levels

Delta Lake provides **serializable** isolation:

### Concurrent Reads

Multiple readers can access data simultaneously:

\`\`\`python
# Reader 1 sees consistent snapshot at version 10
df1 = spark.read.format("delta").load(path)

# Reader 2 sees same consistent snapshot
df2 = spark.read.format("delta").load(path)

# Even if a write happens in between!
\`\`\`

### Concurrent Writes

Writes are serialized automatically:

\`\`\`python
# Writer 1 starts
df1.write.format("delta").mode("append").save(path)

# Writer 2 starts (conflicts detected and handled)
df2.write.format("delta").mode("append").save(path)

# Both succeed without data corruption
\`\`\`

## MERGE Operation

Powerful upsert capability:

\`\`\`python
from delta.tables import DeltaTable

delta_table = DeltaTable.forPath(spark, "/path/to/target")

# MERGE (upsert)
delta_table.alias("target") \\
    .merge(
        updates_df.alias("source"),
        "target.id = source.id"
    ) \\
    .whenMatchedUpdate(set={
        "value": "source.value",
        "updated_at": "current_timestamp()"
    }) \\
    .whenNotMatchedInsert(values={
        "id": "source.id",
        "value": "source.value",
        "created_at": "current_timestamp()"
    }) \\
    .execute()
\`\`\`

### Conditional Updates

\`\`\`python
delta_table.alias("t") \\
    .merge(source.alias("s"), "t.id = s.id") \\
    .whenMatchedUpdate(
        condition="s.value > t.value",  # Only update if source is greater
        set={"value": "s.value"}
    ) \\
    .whenMatchedDelete(
        condition="s.deleted = true"  # Delete if flagged
    ) \\
    .whenNotMatchedInsert(values={
        "id": "s.id",
        "value": "s.value"
    }) \\
    .execute()
\`\`\`
`,UD=`# Time Travel

Query historical versions of your data with Time Travel.

## How Time Travel Works

Delta Lake maintains a complete history through:

1. **Transaction Log** - Records all changes
2. **Data Files** - Preserved until VACUUM
3. **Checkpoints** - Periodic snapshots of state

## Querying Historical Data

### By Version Number

\`\`\`python
# Read a specific version
df = spark.read \\
    .format("delta") \\
    .option("versionAsOf", 10) \\
    .load("/path/to/table")

# SQL syntax
spark.sql("""
    SELECT * FROM delta.\`/path/to/table\` VERSION AS OF 10
""")

# Or using @
spark.sql("""
    SELECT * FROM delta.\`/path/to/table\`@v10
""")
\`\`\`

### By Timestamp

\`\`\`python
# Read data as it was at a specific time
df = spark.read \\
    .format("delta") \\
    .option("timestampAsOf", "2024-01-15 10:30:00") \\
    .load("/path/to/table")

# SQL syntax
spark.sql("""
    SELECT * FROM delta.\`/path/to/table\` 
    TIMESTAMP AS OF '2024-01-15 10:30:00'
""")
\`\`\`

## Viewing History

### DESCRIBE HISTORY

\`\`\`python
from delta.tables import DeltaTable

delta_table = DeltaTable.forPath(spark, "/path/to/table")
history = delta_table.history()
history.show()

# SQL
spark.sql("DESCRIBE HISTORY delta.\`/path/to/table\`").show()
\`\`\`

**Output:**

| version | timestamp | operation | operationParameters |
|---------|-----------|-----------|---------------------|
| 10 | 2024-01-15 | MERGE | {predicate: ...} |
| 9 | 2024-01-14 | DELETE | {predicate: ...} |
| 8 | 2024-01-13 | WRITE | {mode: Append} |

## Use Cases

### Audit Trail

\`\`\`python
# See who changed what and when
history = delta_table.history(100)  # Last 100 operations
history.select(
    "version", "timestamp", "operation", 
    "operationParameters", "userMetadata"
).show(truncate=False)
\`\`\`

### Data Recovery

\`\`\`python
# Oops! Accidentally deleted all data
delta_table.delete()  # This was a mistake!

# Restore from previous version
df_recovered = spark.read \\
    .format("delta") \\
    .option("versionAsOf", 9) \\
    .load(path)

# Overwrite with recovered data
df_recovered.write \\
    .format("delta") \\
    .mode("overwrite") \\
    .save(path)
\`\`\`

### RESTORE Command

\`\`\`python
# Simpler restoration
spark.sql("""
    RESTORE TABLE delta.\`/path/to/table\` TO VERSION AS OF 9
""")

# Or by timestamp
spark.sql("""
    RESTORE TABLE delta.\`/path/to/table\` 
    TO TIMESTAMP AS OF '2024-01-14'
""")
\`\`\`

### Comparing Versions

\`\`\`python
# Compare two versions
df_old = spark.read.format("delta").option("versionAsOf", 5).load(path)
df_new = spark.read.format("delta").load(path)

# Find differences
new_records = df_new.subtract(df_old)
deleted_records = df_old.subtract(df_new)
\`\`\`

## Retention Settings

Control how long history is kept:

\`\`\`python
# Set retention period (default: 30 days)
spark.sql("""
    ALTER TABLE delta.\`/path/to/table\`
    SET TBLPROPERTIES ('delta.logRetentionDuration' = 'interval 90 days')
""")

# Deleted file retention (default: 7 days)
spark.sql("""
    ALTER TABLE delta.\`/path/to/table\`
    SET TBLPROPERTIES ('delta.deletedFileRetentionDuration' = 'interval 14 days')
""")
\`\`\`

> 💡 **Tip:** Longer retention means more storage but better time travel capabilities.
`,HD=`# Quiz

Test your Delta Lake knowledge!

## Question 1: Transaction Log

What file format does Delta Lake use for its transaction log?

**Options:**
- A) CSV
- B) JSON
- C) Parquet only
- D) Avro

> **Answer:** B) JSON - The transaction log uses JSON files with periodic Parquet checkpoints.

---

## Question 2: VACUUM

What happens after running \`VACUUM RETAIN 0 HOURS\`?

**Options:**
- A) All data is deleted
- B) Time travel is disabled permanently
- C) Only the current version's files remain
- D) The table is dropped

> **Answer:** C) Only the current version's files remain - historical data files are removed.

---

## Question 3: Schema Evolution

Which option enables schema evolution in Delta Lake?

**Options:**
- A) \`.option("schemaEvolution", "true")\`
- B) \`.option("mergeSchema", "true")\`
- C) \`.option("autoSchema", "true")\`
- D) It's always enabled

> **Answer:** B) \`.option("mergeSchema", "true")\`

---

## Question 4: MERGE

What does MERGE provide that UPDATE doesn't?

**Options:**
- A) Faster performance
- B) Insert new rows that don't match
- C) Delete rows
- D) Better compression

> **Answer:** B) Insert new rows that don't match - MERGE supports matched and not matched clauses.

---

## Question 5: Time Travel

How does Delta Lake enable time travel?

**Options:**
- A) By keeping all files forever
- B) Through the transaction log and preserved data files
- C) By using a separate history database
- D) Through Spark's built-in versioning

> **Answer:** B) Through the transaction log and preserved data files.
`,jD=`# Intro
We’re going to look at how Databricks Lakeflow Jobs helps us turn individual notebooks and SQL queries into reliable, automated data pipelines. I’ll start by explaining what a Lakeflow Job is and how it’s made up of smaller tasks, each responsible for a clear step like ingesting, transforming, or validating data. Then we’ll talk about the different compute options these jobs can run on—from interactive clusters for exploration, to job clusters and serverless for production, and SQL warehouses for BI workloads—so you know which one to choose in each scenario. Finally, we’ll see how schedules and triggers let us run these jobs automatically, either on a time-based schedule or as soon as new data arrives, so our pipelines stay fresh without manual effort.

Bullet version for your slide/notes:
- Goal of the session  
  - I will show how Lakeflow Jobs turns code and queries into automated, production-ready pipelines.  
- What a job is  
  - Lakeflow Job = end-to-end workflow made of smaller tasks (ingest, transform, validate, publish).  
- Where jobs run  
  - Interactive clusters for dev/exploration.  
  - Job clusters and serverless for production workloads and cost efficiency.  
  - SQL warehouses for SQL/BI and dashboards.  
- When jobs run  
  - Use schedules (time-based) and triggers (data-based) so jobs run automatically instead of manually.
- Flow of the job
  - Conditions, loops, and parameters

`,zD=`
# Lakeflow Jobs

- Lakeflow Jobs = Databricks’ built‑in orchestrator for data + analytics + ML workflows.  
- Used to automate ETL, ML pipelines, and reports on a schedule or based on events.  
- Think: “control center” that decides what runs, in which order, and when.

- “Think of a Lakeflow Job as the full pipeline: what runs, in what order, and when.”  
- “Each task is one concrete step: ingest, transform, validate, train, or publish.”  
- “Schedules and triggers turn our pipelines from ‘click‑to‑run’ into fully automated production workflows.”  
- “With branching, loops, and retries, Lakeflow Jobs can handle complex, real‑world data workflows reliably.”  

“Lakeflow Jobs is how we schedule and orchestrate end‑to‑end pipelines on the Databricks lakehouse.”

***

# Core concepts to explain 🎓

- Job  
  - The whole workflow definition (top‑level object).  
  - Can be 1 simple task or hundreds with dependencies.  
  - Visual DAG view helps show order and branches.

- Task  
  - Single step inside the job.  
  - Types: Notebook, SQL, Python script, pipeline, etc.  
  - Each task does one thing: ingest, transform, validate, train model, etc.

- Trigger / Schedule  
  - Defines when/how the job runs.  
  - Examples: every day at 6 AM, every 15 minutes, manual run, event‑based.

***

# Quick table for your slide 📊

| Concept | Short definition | Example you can say |
|--------|------------------|---------------------|
| Job | End‑to‑end workflow container | “Daily revenue pipeline” |
| Task | Individual step in the workflow | Ingest → Transform → Validate |
| Trigger | When the job runs | “Every day at 06:00” |

***

# Deeper points (for more advanced audience) 🧠

- Control flow  
  - Supports dependencies, branching (if/else), loops (for each), retries.  
  - Use case: only run “publish to BI” task if data quality checks pass.

- Integration  
  - Orchestrates ETL jobs, ML training/inference, streaming, BI refresh.  
  - Works with notebooks, SQL warehouses, external tools (like dbt) via tasks.

- Operations & monitoring  
  - UI to see history, statuses, logs per task.  
  - Alerts/notifications on failure or SLA breach (email, webhooks, etc.).  
  - System tables for analyzing job performance and costs.

***




# Common task configuration options in Lakeflow Jobs 🧩

Use this as a mental checklist when you create or edit any task:

- **Task type**  
  - Notebook, SQL query, Python script, pipeline, dbt, etc.  
  - Determines what code/artifact the task will run.

- **Cluster / compute**  
  - Choose compute type: job cluster, serverless, SQL warehouse, or shared cluster.  
  - Set size, autoscaling, runtime version, and any libraries needed.

- **Dependencies (task order)**  
  - Define which tasks must finish before this one starts.  
  - Used to build the DAG: e.g., “Transform depends on Ingest,” “Publish depends on QA.”

- **Parameters / inputs**  
  - Base parameters for notebooks, scripts, or SQL (e.g., dates, paths, environment flags).  
  - Can be overridden per job run to reuse the same task with different inputs.

- **Timeouts and retries**  
  - Max run time (timeout) to avoid hung tasks.  
  - Number of retries and delay between retries for robustness.

- **Error handling and behavior**  
  - What happens if this task fails: stop the job, continue, or run specific “on‑failure” tasks.  
  - Optional conditional logic (only run if previous task succeeded/failed).

- **Notifications / alerts (often job-level but relevant)**  
  - Who gets notified on success, failure, or timeout.  
  - Email, webhook, or chat integration.

`,WD=`
# Job schedules and triggers

Schedules and triggers control **when** your Lakeflow Job runs. Instead of always starting manually, you set rules so the job fires automatically.

***

# Main trigger types 🔔

- **Scheduled (time‑based)**  
  - Run the job at specific times: daily at 6 AM, every hour, every Monday, etc.  
  - Uses cron‑like syntax or simple repeating intervals.  
  - Good for batch ETL or reports with predictable timing.

- **Table update (event‑based)**  
  - Job starts automatically when one or more Unity Catalog tables are updated.  
  - You pick: run after *any* table updates, or only when *all* selected tables are updated.  
  - Great for real‑time pipelines where you want to process data as soon as it lands, not on a fixed schedule.  
  - Advanced options: minimum time between triggers, wait after last change (to avoid too‑frequent runs or partial data).

- **File arrival (event‑based)**  
  - Job runs when new files appear in a monitored Unity Catalog storage location.  
  - No more guessing when files land; the job triggers immediately.  
  - Also supports minimum time between triggers and wait after last change.

- **Continuous**  
  - Job runs nonstop in a loop.  
  - Useful for streaming workloads or continuous data ingestion.

- **Manual**  
  - No automatic trigger; you or an external tool (like Airflow, API call) starts the job on demand.

***

# Key teaching points 🎯

- "Scheduled triggers = time‑based; event triggers (table update, file arrival) = data‑based."  
- "Event triggers eliminate wasted compute from running jobs when data isn't ready yet."  
- "With table update triggers, your pipeline runs the moment fresh data lands, making insights faster and fresher."  
- "You can combine multiple triggers on one job, or have multiple jobs with different triggers for different scenarios."

***

# Quick comparison table 📊

| Trigger type | When it fires | Best use case |
|--------------|---------------|---------------|
| Scheduled | At fixed times (cron) | Batch ETL, nightly reports |
| Table update | When Unity Catalog tables change | Real‑time downstream processing |
| File arrival | When new files land in storage | Ingest as files arrive |
| Continuous | Always running (loop) | Streaming pipelines |
| Manual | On‑demand or external orchestrator | Dev/testing, ad‑hoc runs |

---

`,YD=`
# Practise Questions
## 1. What is the main purpose of a Lakeflow Job in Databricks?

**A.** Storing raw data in Unity Catalog  

**B.** Orchestrating and automating end-to-end data and AI workflows  

**C.** Managing user permissions and access control  

**D.** Replacing all notebooks with SQL-only pipelines  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Orchestrating and automating end-to-end data and AI workflows**  
**Explanation:**  
A Lakeflow Job coordinates multiple tasks (notebooks, SQL, scripts, pipelines) and runs them in the right order on a schedule or trigger to implement full pipelines.
</details>

***

## 2. In a Lakeflow Job, what is a task?

**A.** A full application deployed on a cluster  

**B.** A single step in the workflow, such as running a notebook or SQL query  

**C.** A separate Databricks workspace  

**D.** A Delta table with metadata  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — A single step in the workflow**  
**Explanation:**  
Tasks represent individual units of work inside a job, for example ingest, transform, validate, or publish, and are connected to form the job’s DAG.
</details>

***

## 3. Which compute type is best suited for ad-hoc analysis and development, not for cost-efficient production jobs?

**A.** Job clusters  

**B.** Serverless  

**C.** Interactive (all-purpose) clusters  

**D.** SQL Warehouse  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: C — Interactive (all-purpose) clusters**  
**Explanation:**  
Interactive clusters are shared and ideal for exploration and development, but keeping them running continuously is usually not cost-efficient for production workloads.
</details>

***

## 4. Why are job clusters often preferred over interactive clusters for production Lakeflow Jobs?

**A.** They support only SQL workloads  

**B.** They automatically terminate when the job finishes  

**C.** They cannot scale automatically  

**D.** They are required for Unity Catalog access  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — They automatically terminate when the job finishes**  
**Explanation:**  
Job clusters are created for a specific run and shut down afterwards, which reduces idle time and typically lowers compute cost for production pipelines.
</details>

***

## 5. What is a key benefit of using serverless compute for Lakeflow Jobs?

**A.** Manual cluster sizing and capacity planning  

**B.** No support for autoscaling  

**C.** Fully managed infrastructure with faster startup and lower operational overhead  

**D.** It disables monitoring to save costs  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: C — Fully managed infrastructure with faster startup and lower operational overhead**  
**Explanation:**  
Serverless lets Databricks manage the infrastructure, providing quick startup, autoscaling, and simplified operations, which can reduce total cost of ownership.
</details>

***

## 6. What is a key characteristic of SQL Warehouse as a compute option in Databricks?

**A.** It only runs Python code  

**B.** It is optimized for high-concurrency SQL and BI workloads  

**C.** It cannot be used by Lakeflow Jobs  

**D.** It does not support autoscaling  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Optimized for high-concurrency SQL and BI workloads**  
**Explanation:**  
SQL Warehouses are purpose-built for SQL queries, dashboards, and BI, offering concurrency, autoscaling, and features like intelligent workload management.
</details>

***

## 7. What is the main difference between a schedule and a trigger in Lakeflow Jobs?

**A.** Schedules are manual; triggers are automatic  

**B.** Schedules are time-based; triggers can be time- or event-based  

**C.** Schedules only apply to development jobs  

**D.** Triggers can only be used with SQL tasks  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Schedules are time-based; triggers can be time- or event-based**  
**Explanation:**  
Schedules run jobs at specific times, while triggers can fire based on time or data events, such as table updates or new files.
</details>

***

## 8. Which scenario is best suited for a table-update trigger in Lakeflow Jobs?

**A.** Running a job every Monday at 8 AM  

**B.** Running a job whenever any cluster becomes idle  

**C.** Running a job as soon as upstream Delta tables receive new data  

**D.** Running a job when a user opens a notebook  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: C — Running a job as soon as upstream Delta tables receive new data**  
**Explanation:**  
Table-update triggers fire when Unity Catalog tables change, ideal for reactive pipelines that must process data immediately after it lands.
</details>

***

## 9. Which configuration option helps make a Lakeflow Job more resilient to transient failures?

**A.** Using only interactive clusters  

**B.** Setting retries and retry intervals on tasks  

**C.** Disabling all error handling  

**D.** Removing dependencies between tasks  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — Setting retries and retry intervals on tasks**  
**Explanation:**  
Configuring retries and delays allows tasks to recover from temporary issues such as brief network or service interruptions.
</details>

***

## 10. In a Lakeflow Job, how are dependencies between tasks typically represented and managed?

**A.** As SQL foreign-key constraints  

**B.** As a directed acyclic graph (DAG) showing which tasks run after others  

**C.** As a single linear execution list with no branching  

**D.** As cluster tags in the workspace  

<details>
<summary><strong>Answer</strong></summary>

✔ **Correct: B — As a directed acyclic graph (DAG)**  
**Explanation:**  
Lakeflow Jobs visualize task dependencies as a DAG, letting you define branches, order, and conditions that control how the workflow executes.
</details>

---`,VD=`# Labs
## Version: v3.2.2 Nov 2025

---

# 1. Creating a Job Using the Lakeflow Job UI

## Purpose

Create a Lakeflow job manually from scratch, add tasks, and fix a common configuration error.


## Environment

* ✔ Select **Labuser...**.

## Steps

1. **Create a new job from empty (blank)**.

   * Job name and parameters are provided in the notebook description.
2. **Add a new task** using notebook **1.1 — Creating Orders Table**.
3. **Add a SQL query task** — ⚠ this will cause an error:

   * The task type is SQL
   * But the file is actually an **IPython notebook**
4. **Fix the error:**

   * ✔ *Recommended*: Change the task type to **Notebook**
   * OR copy SQL code into a new SQL Query editor (not preferred)
5. **Run the two SQL queries at the bottom** of the notebook to validate the job.
6. **Return to the main notebook (1demo)** and run the final two SQL queries to confirm tables exist.

---

# 3. Automating Workloads with Scheduling and Triggering

## Purpose

Add tasks, set schedule & triggers, configure parameters, and demonstrate file-triggered job runs.



### Setup

* Run the **starter job** to create the initial two tasks (same as Demo 1).

## Steps

1. **Add a new task**:

   * Notebook: **3.1 — Creating Customer Tables**
   * Type: Notebook
2. **Inspect and explain scheduling options.**
3. **Create a volume** (trigger storage location):

   * Run cell that prints the volume path
4. **Copy-paste the printed path into Job → Scheduling → Trigger location**
5. **Return to the “Ingesting Customer” task** and add **two parameters**:

   * \`catalog\`
   * \`schema\`
6. **Run the cell that copies new customer data into the volume**

   * This triggers the job automatically
7. **Monitor the job run** and confirm execution.
8. **Run final SQL queries** to check the tables.

---

# 4. Adding Dependencies, Conditions, and For Loop Tasks

## Purpose

Show how to build complex jobs:

* Task dependencies
* Conditional branching (if/else)
* Parameterized for-loop tasks


## Setup

* Run the starter script

## Steps

### 1. Set Dependencies

* Notebook **Customers Orders Report**
  must depend on:

  * ✔ Ingesting Orders
  * ✔ Ingesting Customers

### 2. Add If–Else Condition

* Evaluate whether \`CustomerSalesSummary\` contains duplicates
* Set condition for the branching:

  * If duplicates → execute “Drop Duplicates” notebook
  * Else → execute “Transform Customer Sales” notebook

### 3. Add Two Notebook Tasks

* **Drop Customer Duplicates** (run only if duplicates = TRUE)
* **Transform Customer Sales** (run if duplicates = FALSE)
* Set:

  * Condition = **none failed**
  * Correct dependencies

### 4. Add a For-Loop Task

* A notebook will run once per state in a **three-item list**
* Provide the state via the **task parameter**
* Input value = the iterator value

### 5. Run the job

* After completion, run the four SQL queries to show final results.

---

# 6. Error Handling, Retries, and Dashboard Tasks

## Purpose

Demonstrate:

* Task retries
* Correcting code in failed runs
* Running only the failed task
* Creating a dashboard
* Adding a dashboard refresh task


### Setup

* Run the starter job

---

### 1. Add New Task: Transforming Customer Order Data

* Notebook: 6.1 — Transforming Customer Order...
* ✔ Untick the **Retries**  
* Run the job

  * ⚠ **This job will fail on purpose**

---

### 2. Fix the Error

* Open **6.1 notebook**
* Comment out the incorrect function
* Uncomment or paste the correct version
* **Re-run only this one failed task**

  * Emphasize that **you do not need to rerun the entire job**, only the failed task.

---

### 3. Dashboard Creation

* Create a new dashboard (from input)
* Click **Edit Draft**
* ✔ **Publish the dashboard** (critical step)

---

### 4. Add Dashboard Refresh Task

* Add a new task to the job: **Refresh Retail Dashboard**
* Task type: **Dashboard**
* Select the dashboard you just published
* Add the **two required dependencies**
* Run the job

---

# **🎯 Summary of Critical Points**

| Demo  | Special Attention                                                                                                         |
| ----- | ------------------------------------------------------------------------------------------------------------------------- |
| **1** | SQL task uses notebook → change type to Notebook                                                                          |
| **3** | Add “Ingesting Customer” task, set parameters, create volume, set trigger path                                            |
| **4** | Set dependencies → add if/else → add loop task with parameters                                                            |
| **6** | Job fails intentionally → fix notebook → rerun only failed task → create & publish dashboard → add dashboard refresh task |

---`,$D=`

“In this module you’ve seen how Lakeflow Jobs turns individual notebooks, SQL queries and scripts into automated, production-ready workflows. A job is built from tasks, where each task does one clear step such as ingesting, transforming, validating or publishing data, and the tasks are connected in a DAG to control the order and logic.

We also looked at the different compute options these jobs can run on: interactive clusters for development and exploration, job clusters and serverless for cost‑efficient production workloads, and SQL warehouses for high‑concurrency SQL and BI. Finally, we discussed how schedules and triggers decide when a job runs—either on a fixed time pattern or automatically when new data arrives—so that pipelines stay fresh and reliable without manual intervention.”
`,qD=`# Introduction

## What is DevOps?

DevOps is a set of practices and cultural philosophies that **combine software development (Dev) and IT operations (Ops)**. Its goal is to shorten the development lifecycle, improve code quality, and enable **continuous delivery of reliable software**. In data engineering, DevOps ensures that data pipelines, workflows, and analytics platforms are **scalable, maintainable, and reproducible**.


> “DevOps is about breaking the wall between development and operations. For data engineering, it means our pipelines are reliable, reproducible, and easy to deploy.”

---

## Why DevOps Matters in Data Engineering

* Ensures **consistent deployment** of pipelines and models
* Supports **automated testing and validation** of data transformations
* Enables **version control and collaboration** for code and configurations
* Provides **monitoring, logging, and alerting** for production pipelines
* Reduces **manual errors** and increases operational efficiency


> “Without DevOps, data pipelines can break silently, or deployments become a manual, error-prone process. DevOps brings reliability and speed to data engineering.”

---

## Core Principles of DevOps

* **Automation** – Automate testing, deployment, and infrastructure provisioning
* **Continuous Integration / Continuous Deployment (CI/CD)** – Build pipelines that automatically test and deploy code
* **Collaboration** – Development, data engineering, and operations teams work together
* **Monitoring and Feedback** – Continuous feedback loops to detect issues early
* **Infrastructure as Code (IaC)** – Define infrastructure declaratively for consistency and repeatability


> “DevOps principles ensure that our data engineering work is not only functional but also robust, repeatable, and scalable across teams and environments.”

---

## DevOps in the Databricks Context

In Databricks, DevOps practices translate to:

* Version-controlling notebooks and modules with Git
* Using CI/CD pipelines to validate and deploy notebooks, jobs, and workflows
* Managing cluster and job configurations with Terraform (IaC)
* Implementing automated testing and data quality checks
* Logging and monitoring production jobs with Databricks dashboards and metrics


> “In Databricks, DevOps means our notebooks, jobs, and clusters are managed just like software, with version control, testing, deployment pipelines, and monitoring.”
`,QD=`# SWE Best Practices

## Coding Practices

Good coding practices ensure readability, maintainability, and scalability. Focus on writing modular code, following naming conventions, avoiding hardcoded values, and implementing clear structure. In Databricks, develop logic in notebooks for exploration, then refactor into Python modules for production.


> “Clean, modular code makes pipelines easier to debug and scale. In Databricks, we experiment in notebooks but productionize using Python modules.”

---

## Documentation

Documentation ensures that others—and future you—can understand how the system works. Use docstrings, markdown cells in notebooks, and README files in Repos. Describe assumptions, data sources, input/output, and key logic.


> “Documentation is part of the deliverable. Code without explanation becomes a maintenance problem.”

---

## Automated Testing

Testing guarantees data pipeline reliability. Use unit tests for business logic, integration tests for pipeline flows, and mocks for external dependencies. Databricks supports pytest execution with Jobs, Workflows, and Git-integrated Repos.


> “Automated tests catch regressions early. In data engineering, bad data can silently break downstream systems, so tests are essential.”

---

## Version Control

Version control (Git) tracks code changes and allows collaboration. Use branches for features, pull requests for reviews, and tags for releases. Databricks Repos integrates directly with GitHub, GitLab, and Azure DevOps.


> “With Git, every change is traceable and reversible. This is critical for reliable, production-grade pipelines.”

---

## Continuous Integration (CI)

CI automatically validates code when it’s pushed to a branch. It runs linting, tests, quality checks, and type checks before code is merged. For Databricks, you typically use GitHub Actions, GitLab CI, or Azure DevOps pipelines.


> “CI provides immediate feedback. If something breaks, we catch it before it reaches production.”

---

## Continuous Deployment (CD)

CD automates pushing validated code into environments such as dev, staging, and production. For Databricks, deployment may include notebooks, wheel files, cluster configurations, and workflows via Databricks CLI, Terraform, or REST API.


> “CD ensures consistent deployments. No more ‘it works on my machine’—the deployment is automated and reproducible.”

---

## Isolated Environments

Use isolated environments to ensure dependency consistency. Virtual environments, Conda, or job-scoped libraries prevent version conflicts. Databricks supports cluster-scoped libraries and pip installations inside notebooks for controlled environments.


> “Reproducibility is key. Isolated environments guarantee that the code behaves the same everywhere.”

---

## Infrastructure as Code (IaC)

IaC describes infrastructure (jobs, clusters, permissions) as code. Terraform is the standard for Databricks resources. Everything becomes versioned, reviewable, and reproducible.


> “IaC lets us treat infrastructure like software. One command can recreate an entire environment.”

---

## Secrets Management

Credentials should never be in code or notebooks. Use Databricks Secrets, environment variables, or integrations with Azure Key Vault / AWS Secrets Manager.


> “Secrets must be stored securely. With Databricks Secrets, we avoid leaking tokens or passwords.”

---

## Data Quality Checks

Data quality validation ensures reliability. Use Great Expectations, Delta Live Tables expectations, or custom validation logic.


> “Data engineering best practices include ensuring the data itself is correct, not just the code.”

---

## Logging and Monitoring

Logging helps track execution details, failures, and metrics. Databricks provides cluster logs, job logs, and task-level metrics. Add custom logging inside Python modules for better observability.


> “Monitoring helps us quickly detect failures and understand performance.”

---

## Error Handling and Retry Logic

Data pipelines must be resilient. Use try/except blocks, idempotent operations, and retry settings in Databricks Workflows.


> “Reliable systems expect failures. Retry logic and helpful error messages are essential.”

---

## Notebook-Driven vs. Code-Driven Development

Notebooks are ideal for prototyping, but production code belongs in versioned Python modules. Databricks Repos lets you import modules into notebooks easily.


> “We explore in notebooks, but we ship production code through modules.”

`,GD=`# DevOps Lifecycle

![devops lifecyle](https://iboon.io/wp-content/uploads/2025/02/DevOps-Life-Cycle-1-980x613.jpg)

## Plan

The planning phase is the **first step** in the DevOps lifecycle. Here, teams define project requirements, user stories, features, and priorities. The goal is to align development and operations on what needs to be built, why, and how it will be measured.

During the lecture:

> “Planning sets the roadmap. Clear goals and requirements reduce miscommunication and make the next steps smoother.”

---

## Code

In the coding phase, developers **write the application or pipeline logic**. Code should be clean, modular, and testable. Version control systems like Git are used to track changes and support collaboration. In data engineering, this could include notebooks, Python modules, SQL scripts, or Spark jobs.

During the lecture:

> “Code is the foundation. Writing readable, modular, and version-controlled code ensures maintainability and collaboration.”

---

## Build

The build phase transforms source code into **deployable artifacts**. This can include compiling code, packaging Python modules into wheel files, or preparing Docker images. The build process ensures that all dependencies are correctly included.

During the lecture:

> “Building is like packaging a gift. We prepare everything needed so the software can run in production without surprises.”

---

## Test

Testing validates that the code works as expected. This includes **unit tests, integration tests, and end-to-end tests**. Automated tests run on CI pipelines to catch bugs early, preventing faulty code from reaching production.

During the lecture:

> “Testing is our safety net. Automated tests catch errors early, ensuring reliable deployments.”

---

## Release

The release phase prepares the software for deployment. It involves **packaging, staging, and verifying** the application. Release processes enforce quality gates and approvals to make sure the code is production-ready.

During the lecture:

> “Releasing is the checkpoint before production. It ensures that only validated, high-quality code moves forward.”

---

## Deploy

Deployment moves the application to **production or staging environments**. In data engineering, this may include deploying notebooks, Python modules, workflows, or cluster configurations in Databricks. Automation is key here to reduce manual errors.

During the lecture:

> “Deployment brings the software to life. Automation ensures consistency and repeatability.”

---

## Operate

The operation phase involves **running and maintaining** the software in production. Teams monitor performance, handle errors, and ensure that pipelines and applications run reliably and efficiently.

During the lecture:

> “Operation keeps our systems running smoothly. Without proper operation, even perfect code can fail.”

---

## Monitor

Monitoring collects **metrics, logs, and feedback** about the system’s performance and user experience. Monitoring informs the team about failures, slowdowns, or unexpected behavior, closing the feedback loop for continuous improvement.

During the lecture:

> “Monitoring tells us what’s happening in production. Insights from monitoring drive improvements in the next cycle.”
`,KD=`# Continuous Integration (CI)

## What is Continuous Integration?

Continuous Integration (CI) is the practice of **automatically validating code changes** by frequently integrating them into a shared repository. Every commit triggers automated processes such as building, testing, and code quality checks to ensure that the new code does not break existing functionality. In data engineering, CI helps maintain reliable pipelines and keeps transformations consistent.

During the lecture:

> “CI ensures that every code change is tested immediately. It stops errors from reaching production and keeps our data pipelines stable.”

---

## Planning in CI

Planning for CI involves **defining the tests, checks, and automation steps** that should run whenever new code is committed. This includes:

* Deciding which **unit tests** and **integration tests** to execute
* Determining code quality checks (linters, formatting)
* Identifying the environments for CI runs (dev, staging)
* Setting triggers for CI pipelines (commits, pull requests)

During the lecture:

> “Good planning ensures that the right tests run automatically for every commit, preventing surprises later.”

---

## Unit Testing with PySpark

Unit tests verify **small, individual pieces of logic** in isolation. In PySpark, unit tests focus on transformations, data cleaning functions, or business rules. Typical approaches include:

* Using **pytest** or **unittest**
* Creating **sample DataFrames** with representative test data
* Testing transformations by comparing actual vs. expected results
* Mocking external dependencies (databases, APIs)

Example:

\`\`\`python
import pytest
from pyspark.sql import SparkSession
from my_module import transform_data

spark = SparkSession.builder.getOrCreate()

def test_transform_data():
    input_df = spark.createDataFrame([(1, "a"), (2, "b")], ["id", "value"])
    expected_df = spark.createDataFrame([(1, "A"), (2, "B")], ["id", "value"])
    result_df = transform_data(input_df)
    assert result_df.collect() == expected_df.collect()
\`\`\`

During the lecture:

> “Unit tests in PySpark allow us to verify each transformation independently, ensuring our logic is correct before integration.”

---

## Integration Testing with DLT and Workflows

Integration tests validate **full pipelines or workflows** rather than single functions. In Databricks:

* **Delta Live Tables (DLT)**: Test the end-to-end flow from raw tables to transformed tables. Verify data correctness and table dependencies.
* **Workflows**: Test how multiple notebooks or jobs execute together. Ensure data flows correctly between tasks and that scheduling works as expected.

Example steps:

* Run the full pipeline in a test environment
* Validate outputs against expected results or constraints
* Test failure handling, retries, and logging

During the lecture:

> “Integration tests ensure the whole pipeline works as expected. Unit tests check the pieces, integration tests check the assembly.”

---

## Version Control with Git

Git provides **version control** to track all code changes and enable collaboration. In CI:

* Every commit or pull request triggers the CI pipeline
* Branching strategies (feature branches, main branch) allow isolated development
* Pull requests enforce code review and automated test execution
* Tags or releases mark stable pipeline versions

In Databricks, Git integration lets you:

* Connect notebooks or Repos to GitHub, GitLab, or Azure DevOps
* Automatically trigger CI pipelines on changes
* Maintain history of all transformations and jobs

During the lecture:

> “Git is the backbone of CI. Every change is tracked, tested, and reviewed, so our pipelines remain stable and auditable.”

`,XD=`
# Continuous Deployment (CD)

## What is Continuous Deployment (CD)?

Continuous Deployment (CD) is the practice of **automatically deploying validated code and assets to production or staging environments** after passing CI checks. CD ensures that pipelines, notebooks, and modules are **reliably released** without manual intervention.

During the lecture:

> “CD automates deployment so that tested code flows seamlessly from development into production, reducing human error and speeding up delivery.”

---

## Deploying Databricks Assets Overview

Databricks assets include:

* **Notebooks** – code for transformations, analyses, or reporting
* **Python modules / Wheels** – reusable production code
* **Jobs / Workflows** – scheduled or triggered pipelines
* **Clusters and Configurations** – compute resources and environment settings

Deploying assets ensures that **all components of a project** are correctly moved into the target environment. CD pipelines handle this by packaging, validating, and deploying assets automatically.

During the lecture:

> “Deploying Databricks assets means we move not just code, but all jobs, notebooks, libraries, and configurations needed for a pipeline to run.”

---

## Databricks Asset Bundles (DAB)

**Databricks Asset Bundles (DAB)** are a way to **package all project assets together** in a consistent, versioned bundle. This includes:

* Notebooks
* Python modules
* Jobs / Workflows
* Libraries

How it works:

1. **Bundle Creation** – Collect all project assets into a structured bundle.
2. **Versioning** – Assign versions to bundles for reproducibility.
3. **Deployment** – Push the bundle to a Databricks workspace (dev, staging, production).
4. **Integration** – Works with Git and CI/CD pipelines to automate deployments.

Benefits:

* Ensures consistent deployment of all project components
* Supports rollback to previous bundle versions
* Makes multi-environment deployment predictable and automated

During the lecture:

> “DAB lets us treat all project assets as a single, deployable unit. This ensures nothing is missed and deployments are repeatable.”

---

## Deploying a Project with CD and DAB

1. **CI Stage** – Validate code with unit and integration tests.
2. **Package Stage** – Create a Databricks Asset Bundle containing notebooks, modules, jobs, and libraries.
3. **CD Pipeline** – Automatically deploy the bundle to the target environment.
4. **Verification** – Run smoke tests or validation jobs in the target environment.
5. **Monitoring** – Track deployment success, errors, and performance metrics.

During the lecture:

> “With Databricks Asset Bundles, every tested commit can be deployed reliably. CI/CD pipelines ensure deployments are safe, repeatable, and version-controlled.”
`,JD=`# Databricks Asset Bundles (DAB)

## What is a DAB?

A **Databricks Asset Bundle (DAB)** is a **packaged collection of all assets in a Databricks project** that can be deployed together in a workspace. This allows teams to move notebooks, Python modules, jobs, libraries, and other configuration files as a **single, versioned, and deployable unit**.

During the lecture:

> “Think of DAB as a project suitcase. Everything needed for a pipeline—code, notebooks, jobs, and libraries—is packed together so it can be deployed reliably.”

---

## How DAB Works

1. **Bundle Creation** – Collect all project assets in a structured format.
2. **Versioning** – Assign a version to the bundle so deployments are reproducible.
3. **Deployment** – Deploy the bundle to a Databricks workspace (dev, staging, prod) using automation pipelines.
4. **Integration** – Works with CI/CD pipelines and version control (Git) to ensure changes flow smoothly from development to production.

---

## Benefits of Using DAB

* **Consistency** – All related assets are deployed together; nothing is missed.
* **Reproducibility** – Versioned bundles allow rollback to previous stable versions.
* **Automation** – Integrates with CI/CD pipelines for smooth deployment.
* **Scalability** – Supports multi-environment deployments (dev → staging → prod) reliably.

During the lecture:

> “DAB ensures that your project is deployed exactly as intended, without missing any dependencies or configuration. It’s essential for production-grade data engineering pipelines.”

---`,ZD=`
# Labs

This module consists of two main parts:

* **Continuous Integration (CI)** — the primary focus
* **Continuous Development / Deployment (CD)** — a shorter final section

---

# 2.1 — Modularizing PySpark Code


Prepare the lab environment and demonstrate how to refactor PySpark notebooks into modular, reusable functions.


✔ Run the **classroom setup** to create required catalogs.
✔ Use **Labuser…** compute.


1. **Run the setup script**

   * Creates catalogs, schemas, and all required assets.
2. **Open the provided notebook** and review the initial “non-modular” code.
3. **Explain typical problems** with non-modular notebooks:

   * Hard-coded logic
   * Inconsistent structure
   * Difficult to test and maintain
4. **Run the provided modularized version**

   * Shows all logic separated into **functions**.
   * Explain:

     * Function for reading data
     * Function for transformations
     * Function for writes
5. **Execute all cells**

   * No edits required.
6. **Highlight the key takeaway:**
   CI workflows depend on **clean, modular, testable** code.

---

# 2.3 — Project Setup Exploration


Explore the project structure created during setup: catalogs, schemas, and initial data.


✔ Make sure setup already executed in Demo 2.1.


1. **Browse the workspace folder** created for the project.
2. **Inspect the catalogs** (dev, stage, prod) to confirm they were created.
3. **Navigate volumes → CSV files** to see the raw data.
4. **Explain the basic CI project structure**:

   * Source code
   * Tests folder
   * Data assets
   * Configurations
5. **Nothing to modify** — this is a quick exploration lab.

---

# 2.4 — Creating and Executing Unit Tests


Create Python unit tests with pytest and run them.
Introduce the concept of expected failures.



1. **Open the tests folder** in the project.
2. **Create/inspect the test file** with multiple test functions.
3. **Explain pytest basics:**

   * Tests must start with \`test_...\`
   * Assertions describe expected behavior
4. **Run tests using pytest**

   * One of the tests is **intentionally failing**
   * Explain:

     * Why it fails
     * This is normal and demonstrates real CI behavior


# 2.6 — Performing Integration Tests


Run integration tests that validate the pipeline end-to-end and inspect results.


✔ Use the existing project + pipeline.


1. **Open the integration test notebook/pipeline.**
2. **Run the pipeline as provided.**
3. **Explain how integration tests differ from unit tests:**

   * They run against actual tables & data.
4. **Examine results in the pipeline UI:**

   * Number of rows processed
   * DAG structure
   * Table changes
5. **Optional:**

   * You *can* change the source/target from \`prod\` to \`dev\` or \`stage\`,
   * BUT doing so may cause configuration conflicts — so better **avoid** unless needed.
6. **Explain test logic:**

   * Tests validate row counts
   * Tests confirm schema behavior
7. **Show where test output appears** in the pipeline run summary.

---

# 3.1 — Deploying Databricks Assets


Deploy a Databricks job, run it, inspect the result, and review SDK-based deployment scripts.


✔ All previous CI labs completed.


1. **Create a new Databricks Job**

   * Use instructions in the notebook.
2. **Attach the correct notebook or pipeline asset.**
3. **Run the job once.**
4. **Explain the output:**

   * Job run history
   * Task execution
   * Logs
   * Table outputs
5. **Return to the “classroom setup” cell**

   * Demonstrate the **Databricks SDK** code that performs automated deployment.
   * You don’t need to modify — only explain how the SDK deploys:

     * Jobs
     * Pipelines
     * Configurations
6. **Finish by summarizing CI/CD connection:**

   * CI → test + validate code
   * CD → deploy assets automatically

`,e_=`# Intro

## What Are Declarative Pipelines?

LakeFlow Spark **Declarative Pipelines** are a higher-level way of defining data transformations in Databricks LakeFlow.
Instead of writing step-by-step procedural Spark code, you describe **what** the data pipeline should do, and LakeFlow handles **how** it gets executed efficiently.


Declarative Pipelines let you focus on your business logic rather than Spark boilerplate. You describe the *intended state* of your tables, and Databricks generates the optimized execution plan automatically.`,t_=`# LakeFlow Spark Declarative Pipelines

## What Are Declarative Pipelines?

LakeFlow Spark **Declarative Pipelines** are a higher-level way of defining data transformations in Databricks LakeFlow.
Instead of writing step-by-step procedural Spark code, you describe **what** the data pipeline should do, and LakeFlow handles **how** it gets executed efficiently.


Declarative Pipelines let you focus on your business logic rather than Spark boilerplate. You describe the *intended state* of your tables, and Databricks generates the optimized execution plan automatically.

## Why Declarative Instead of Procedural?

Declarative Pipelines follow the same idea as SQL: you tell the system what output you want, not how to compute it line-by-line.


* “Declarative Pipelines reduce the amount of Spark code we need to maintain.”
* “They make data engineering more accessible because the complexity is abstracted away.”
* “Optimization is automatic — LakeFlow ensures efficient execution under the hood.”
* “It’s easier to version, test, and document declarative definitions than long procedural Spark jobs.”

## Key Concepts of Spark Declarative Pipelines

## 1.Pipeline as a Specification

You define a pipeline using a specification file (YAML or JSON-like syntax), describing:

* Inputs (tables, streams, files)
* Transformations (SQL expressions, mappings)
* Targets (Delta tables or other sinks)
* Constraints or quality checks

During class, you can say:

> “Think of the pipeline file as a contract: it declares what the pipeline does. LakeFlow takes this contract and builds the orchestration automatically.”

## 2. Built-In Optimization

LakeFlow automatically:

* Pushes filters and projections down
* Handles partitioning and parallelism
* Decides execution strategies
* Applies Spark and Delta Lake optimizations


This is similar to what Catalyst does for SQL, but now at the pipeline level.

## 3. Integrated Data Quality and Governance

Declarative Pipelines support:

* Schema enforcement
* Schema evolution
* Expectations (data quality rules)

This aligns naturally with Unity Catalog governance.

### 4. Automatic Lineage Tracking

Because the pipeline is fully declared, Databricks can:

* Build lineage automatically
* Improve observability
* Provide end-to-end traceability

## Example Use Case (To Say During the Lecture)

Imagine you want to ingest sales data, clean it, calculate metrics, and load it into a Delta table. With Declarative Pipelines, you only write a few lines describing the transformations. No need for Spark session setup, joins written in Python, or writing out tables manually.

## When Should We Use Declarative Pipelines?

Use them when:

* You want predictable, repeatable data pipelines
* Workflows are primarily SQL-based
* You want simplicity and maintainability
* Your pipeline is part of a larger LakeFlow orchestration
* Governance and lineage are important

Avoid them when:

* You need highly custom, algorithmic Spark logic
* The transformation can’t be easily expressed in SQL or declarative syntax
`,n_=`# Streaming Tables, MV, Views

## Streaming Table

A Streaming Table is continuously and incrementally updated as new data arrives. It is designed for real-time or near–real-time data processing.


> “A Streaming Table behaves like a live pipeline. As soon as new data comes in, the table updates automatically without manual batch runs.”

Key points:

* Incremental, continuous processing
* Built on Structured Streaming
* Automatically maintains checkpoints and state
* Ideal for real-time dashboards and pipelines

## Materialized View

A Materialized View stores the physical results of a query and automatically refreshes when underlying data changes.


> “A Materialized View is like a precomputed snapshot. Databricks keeps it fresh so queries run extremely fast.”

Key points:

* Physically stores data
* Automatically refreshed
* Great for performance-critical reporting
* Works well for aggregates and joins

## View (Simple View)

A View is just a saved SQL query. It does not store data; instead, Databricks recomputes the query every time you read it.


> “A simple View is a logical layer. It’s just a SQL definition, not a stored dataset.”

Key points:

* No stored results
* Always recomputed
* Lightweight and flexible
* Good for abstraction and reusable logic

## Temporary View

A Temporary View is similar to a simple View but exists only within the current Spark session.


> “A Temporary View is like a scratchpad. It only lives while your session is active. When your cluster shuts down, the view disappears.”

Key points:

* Exists only for the duration of the session
* Not stored in the metastore or Unity Catalog
* Useful for quick exploration or intermediate steps
* Not visible across different clusters or users

`,r_=`# Data Quality Expectations

## What Are Data Quality Expectations?

Data quality expectations are rules that describe what “good” data looks like inside a declarative pipeline.
In Spark Declarative Pipelines, you define these expectations directly in the pipeline specification, and LakeFlow automatically validates them during execution.


> “Expectations are guardrails. They make sure the data entering or leaving each step of the pipeline actually meets the rules we define. If something is wrong, the pipeline will warn us, fail, or quarantine the bad data.”

---

## Why Data Quality Expectations Matter

You can highlight these points:

* Ensure reliability of downstream analytics
* Prevent bad data from silently polluting production tables
* Catch schema drifts or unexpected values early
* Help with observability and debugging

---

## Types of Expectations You Can Define

### 1. Column-Level Expectations

Rules applied to individual columns.

Examples:

* Column must not be null
* Value must be within a range
* Email must match a regex pattern
* Date must be after a specific timestamp

You can say:

> “Column-level expectations are the most common. Think of them as rules about what a specific column is allowed to contain.”

---

### 2. Row-Level Expectations

Rules that validate entire records.

Examples:

* A row is valid only if \`quantity > 0 AND price > 0\`
* A record must have all required fields
* A combined business rule, e.g., \`end_date > start_date\`

---

### 3. Schema Expectations

Rules that ensure the expected structure of the data.

Examples:

* Required columns must exist
* Column types must match the declared schema
* No unexpected columns should appear

This is important when ingesting data from external or semi-structured sources.

---

### 4. Uniqueness and Key Integrity Expectations

Used to enforce primary key–like behavior.

Examples:

* \`order_id\` must be unique
* (\`customer_id\`, \`order_date\`) must be unique
* Foreign key relationships (soft validation)

---

### 5. Data Freshness Expectations

Ensure that the data is up to date.

Examples:

* Ingested data must not be older than 24 hours
* A pipeline must receive new data at least once per day

You can say:

> “Freshness expectations protect us from stale data. If yesterday’s data doesn’t arrive today, the pipeline can alert you.”

---

### 6. Volume Expectations

Ensure expected amounts of data arrive.

Examples:

* At least 1,000 rows per batch
* No sudden drop or spike in data volume

Useful for detecting upstream system failures.

---

## What Happens When Expectations Fail?

Declarative pipelines allow different actions:

* **Warn:** Continue pipeline but record a warning
* **Drop:** Remove invalid rows
* **Fail:** Stop the pipeline execution
* **Quarantine:** Move bad records to a separate table for inspection


> “You get to choose how strict the pipeline should be. Some rules should fail the job immediately; others should just warn and let the pipeline continue.”

---

## Why This Fits Perfectly Into Declarative Pipelines

Declarative pipelines make expectations first-class citizens, meaning:

* Expectations live in the pipeline spec
* They are version-controlled
* They appear in lineage and observability dashboards
* They apply automatically on every run


> “The beauty of declarative pipelines is that data quality rules are part of the pipeline definition itself. No more hidden logic in notebooks.”
`,i_=`# Stream Joins

## Streaming Table Joined to a Static Table

A **stream–static join** is the simplest type of streaming join.
Here, one side is continuously arriving data (the stream), while the other is a fixed table (the static dataset).

During the lecture, you can say:

> “When we join a streaming table to a static table, Spark treats the static table as a broadcastable lookup table. The stream keeps arriving, and for every incoming record we perform a fast, deterministic lookup.”

How it works:

* The static table is loaded once at the beginning of the query.
* Spark may broadcast it to all executors for performance.
* Every new streaming record is matched against the static table.
* No watermarking or time-window logic is needed because the static table does not change.

Use cases:

* Enriching streaming events with reference data
* Adding dimensions (like product names, regions, categories)
* Fast lookups with high throughput

Key thing to highlight:

> “A stream-static join is always deterministic. There is no state growth over time because the static side does not change.”

---

## Streaming Table Joined to a Streaming Table using a Materialized View

A **stream–stream join** normally requires state, watermarks, and time constraints.
But when one of the streams is turned into a **materialized view**, Databricks simplifies the logic.

Explain it like this:

> “If one of the streams is materialized into a materialized view, Spark treats that materialized view almost like a slowly-changing lookup table. The materialized view stays fresh, so the streaming table can join against it without holding huge amounts of state.”

How it works:

* The second stream is ingested and made queryable as a materialized view
* The materialized view is automatically refreshed as new data arrives
* The streaming table performs a join against that maintained view
* Reduced need for complex watermarks or long retention windows
* Databricks avoids growing unbounded join state

Why it works:

* The materialized view provides **consistent, up-to-date snapshots**
* Streaming join logic becomes more similar to a stream–static join
* The MV hides the fact that the data originally came from a stream

Use cases:

* When one stream is high-velocity and the other represents more stable dimensions or facts
* When you want simplified semantics but still need “fresh” data
* Incremental joins where one side should behave like a maintained table

During the lecture, you can say:

> “Materialized views turn a fast-moving stream into something that behaves like a stable table. This reduces complexity and makes joins efficient.”

---

## Streaming to Streaming Join (Incremental Stream-to-Stream Join)

This is the most complex case.
Both inputs are unbounded streams, and both are continuously producing new data.

Explain it like this:

> “A true stream-to-stream join requires Spark to maintain state from both sides. The join isn't instantaneous because each stream may deliver matching records at different times.”

How it works:

* Spark buffers state for both sides of the join
* Records are matched when corresponding keys arrive
* Watermarks control how long Spark keeps unmatched records
* Any data that arrives earlier or later than expected may be dropped depending on watermark configuration

Characteristics:

* Uses event-time semantics
* Requires specifying time conditions (e.g., within 10 minutes)
* Requires watermarks on both sides
* Stateful and memory-intensive

Typical join conditions:

* Time-bounded joins:

  * e.g., \`streamA.event_time = streamB.event_time\`
  * or \`streamA.time BETWEEN streamB.time - 5 minutes AND streamB.time + 5 minutes\`
* Key-based joins with temporal constraints

During the lecture, say:

> “With two streams, we cannot assume they arrive at the same time. Spark must hold data in memory, buffer records, and release them when the watermark says it’s safe. This is what makes stream-stream joins more complex.”

Use cases:

* Matching events across two systems
* User activity stream joined with clickstream events
* Fraud detection patterns
* IoT sensor correlation

Key difference:

> “Stream-stream joins require time and watermark logic. Any mismatch or late data can cause records to be dropped.”
`,a_=`# Change Data Capture (CDC)

## What Is CDC?

Change Data Capture (CDC) is a technique for identifying and processing **only the data that has changed** in a source system, rather than repeatedly reading the full dataset.
Databricks uses CDC patterns—especially with Delta Lake—to efficiently update tables with inserts, updates, and deletes.

During the lecture, you can say:

> “CDC lets us keep tables fresh by processing only what changed. Instead of reloading everything every day, we just apply inserts, updates, and deletes incrementally.”

---

## Why CDC Matters

* Reduces compute cost
* Supports near–real-time synchronization
* Enables scalable data warehousing
* Makes historical tracking possible
* Integrates cleanly with Delta’s MERGE INTO operations

---

# Types of CDC Processing / Slowly Changing Dimensions (SCD)

CDC and SCD often appear together because they both describe **how we update target tables** when source data changes.
The two most important types in Databricks workflows are **SCD Type 1** and **SCD Type 2**.

---

## SCD Type 1 — Overwrite the Record with the Latest Value

Type 1 is the simplest.
You **do not keep history**.
When a change happens, you overwrite the old value with the new one.

During the lecture:

> “SCD Type 1 means we only care about the current picture. We don’t track history—if today the customer changes their address, the old address is gone.”

How it works:

* Use Delta MERGE INTO
* Match on a primary key
* Overwrite changed fields
* Insert new records
* Delete when needed

Example behavior:

* Old value: \`customer_name = “John Doe”\`
* New value: \`customer_name = “John Smith”\`
* Table now contains only “John Smith”

Use cases:

* Dimensions where history is irrelevant (product color, status text)
* Small lookup tables
* Real-time reference enrichment

---

## SCD Type 2 — Keep Historical Versions

Type 2 stores **each version of a record** over time.
You do not overwrite the old row—you create a new row for the new state.

During the lecture:

> “SCD Type 2 is like version control for your data. Every time something changes, we keep the old record and create a new one with a new valid time.”

How it works:

* The old record gets an end date, or an \`is_current = false\` flag
* A new record is inserted with the updated values
* Both records remain in the table

Common fields:

* \`start_date\`
* \`end_date\` (null for active record)
* \`is_current\` (true/false)

Example:

\`\`\`
customer_id | name        | start_date | end_date   | is_current
-----------------------------------------------------------------
1           | John Doe    | 2022-01-01 | 2023-04-10 | false
1           | John Smith  | 2023-04-10 | null       | true
\`\`\`

Use cases:

* Customer details
* Employee records
* Product prices
* Regulatory/audit requirements

---

# Other Important CDC Techniques

## Inserts Only CDC

Some systems send CDC where only *new records* are published (e.g., Kafka append-only topics).
You must infer changes using keys or timestamps.

## Log-Based CDC

Reads changes directly from the source system’s transaction logs.
Examples:

* MySQL binlog
* PostgreSQL WAL
* SQL Server CDC
* Databricks Auto Loader’s “file notification logs”

Benefits:

* Fast, scalable, no impact on source system

## Soft Deletes

Record stays in the table but is marked as deleted using a boolean flag or a status value.
Useful for logical consistency without physically removing data.

## Hard Deletes

Record is physically removed from the table.
Databricks handles this easily using Delta’s \`DELETE\` command or MERGE logic.

---

# CDC in Delta Lake / Declarative Pipelines

Declarative Pipelines in Databricks use CDC internally when you define:

* MERGE operations
* Upserts
* Incremental processing
* Auto Loader with schema evolution

It means Spark takes your incremental changes and applies them to target tables according to the SCD rules you choose.

During the lecture, say:

> “Whether you want to overwrite changes or track history, CDC plus Delta MERGE gives you reliable and scalable updates to any table.”
`,o_=`# Labs
## Version: v3.0.5 Nov 27, 2025

---
# **1. Required Course Setup & Creating a Pipeline**

## **Purpose**

Set up the lab environment, explain traditional pipelines, and create your first Databricks pipeline.

## **Environment**

* ✔ Attach **Lab User Compute**
* ✔ Run all setup cells

## **Steps**

1. **Run all notebook cells** in
   ***“1 — Required Course Setup and Creating a Pipeline”***
   (no modifications needed)

2. **Explain traditional pipelines:**

   * Notebook-driven, manual jobs
   * Hard to maintain, scale, and orchestrate
   * No built-in lineage or DAG
   * Declarative pipelines solve these issues

3. **Create the first pipeline**:

   * **Name:** \`my_create_etl_pipeline\`
   * Select the provided notebook as the source
   * Select Lab User Compute as the cluster
   * Create → Run the pipeline
   * Review DAG, tasks, and tables

4. **Verify Pipeline Editor is enabled**

   * Workspace Settings → Spark Pipelines
   * ✔ Usually already enabled

5. **Try creating a Declarative Pipeline via the UI**

   * Workflows → Pipelines → Create Pipeline
   * Choose **Declarative (UI)**
   * Proceed until **“Add existing assets”**
   * **Stop and close** — do NOT create this second pipeline
   * Only demonstrate the UI workflow

---

# **2. Developing a Simple Pipeline**

## **Purpose**

Create a pipeline from the source folder, configure it correctly, run dry run and incremental runs.

## **Environment**

* Folder: **Developing Simple Pipeline**

## **Steps**

1. **Create a new pipeline from source**

   * Workflows → Pipelines → Create → **From source**
   * Select folder: **Developing Simple Pipeline**

2. **Open Settings and explain all configuration fields**:

   * Name, Target schema, Storage location
   * Source location
   * Cluster
   * Notification options
   * Channel (Preview/GA)

3. **Add configuration key-value pair**
   Under **Configuration → Add**:

   * **Key:** \`source\`
   * **Value:** \`dbacademyops.<lab_username>\`

   → This is the ingestion source for the pipeline.

4. **Run a Dry Run**

   * Validates DAG
   * No tables are created
   * Ensures definitions are correct

5. **Run the pipeline**

   * Explore DAG
   * Explore bronze/silver tables
   * Review tasks and run output

6. **Run the pipeline again**

   * No new files → **0 new rows**
   * Show how the run history reflects this

7. **Add new data**

   * Go back to the notebook
   * Run the cell that copies new files into the source volume

8. **Run the pipeline again**

   * New rows are ingested
   * Review results in both bronze and silver

9. **Check table history**

   * Table: **Orders Bronze Demo 2** (streaming table)
   * Start **Shared SQL Warehouse**
   * Run \`DESCRIBE HISTORY\` to show versioning

---

# **3. Adding Data Quality Expectations Project**

## **Purpose**

Introduce and demonstrate data expectations inside a declarative pipeline.

## **Environment**

* Run classroom setup
* Notebook contains the full declarative pipeline code

## **Steps**

1. **Run all setup cells** in the notebook.

2. **Create the declarative pipeline**

   * Run the Python code provided (DAB definition)
   * Pipeline appears in Pipeline Editor

3. **Open the pipeline in the Spark Declarative Editor**

   * View DAG
   * Show expectation settings

4. **Run the pipeline**

   * Observe expectations on orders data
   * Some rows are dropped (invalid values)
   * Some rows fail constraints but remain (allowed failures)

5. **Explore results**

   * Open **orders_silver**
   * Show rows with invalid \`notification\` or invalid \`date\`
   * Explain the expectation behavior

6. **Close the pipeline** after demonstration

---

# **5. Deploying a Pipeline to Production**

## **Purpose**

Introduce production pipeline execution, event logs, and versioned history.

## **Environment**

* Notebook: **Demo 5**

## **Steps**

1. **Open the explain files**

   * \`orders.pipeline.explain\`
   * \`status.pipeline.sql.explain\`

   → These show how the production pipeline is defined.

2. **Save the event log**

   * Run cells that write the pipeline’s event log to a table
   * Show where event logs live inside the system

3. **Run the pipeline**

   * Trigger the production execution
   * Wait until completion

4. **Return to the main notebook**

   * Run the cell that lands new data into the volume

5. **Run the pipeline again**

   * New data is consumed
   * New event log entries are created

6. **Explain the logs and history**

   * Open event log table
   * Show entries for:

     * TASK_START
     * TASK_END
     * FLOW_DEFINITION
     * DATA_WRITTEN
   * Review \`DESCRIBE HISTORY\` for production tables

---

# **6. Change Data Capture (CDC) with Auto-CDC & Slowly Changing Dimensions (SCD)**

## **Purpose**

Demonstrate automatic CDC handling in pipelines including SCD Type 1/2 behavior.

## **Environment**

* Run classroom setup
* Notebook contains CDC pipeline code

## **Steps**

1. **Run classroom setup cells**

2. **Create the CDC pipeline**

   * Use the notebook code to generate the pipeline

3. **Run the pipeline**

   * Explain:

     * What CDC is
     * How changes propagate
     * Difference between Type 1 (overwrite) and Type 2 (history)

4. **Add new data to the source volume**

   * Run the provided notebook cell

5. **Run the pipeline again**

   * Observe how changes are handled in the SCD table
   * Show:

     * Overwrites
     * New versions (for SCD Type 2)

6. **Run SQL queries**

   * Inspect customer/order history
   * Validate SCD behavior
   * Show versioning of affected rows

`,s_=`# Introduction to Python

Python is a versatile, high-level programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python has become one of the most popular programming languages in the world.

## Why Learn Python?

Python is widely used across many domains:

- **Web Development** - Frameworks like Django and Flask
- **Data Science** - Libraries like Pandas, NumPy, and Matplotlib
- **Machine Learning** - TensorFlow, PyTorch, and scikit-learn
- **Automation** - Scripts for everyday tasks
- **Scientific Computing** - Research and analysis

## Key Features

Python offers several advantages that make it an excellent choice for beginners and experts alike:

### Readable Syntax

Python's syntax is clean and intuitive. Here's a simple example:

\`\`\`python
# A simple Python program
def greet(name):
    return f"Hello, {name}!"

message = greet("World")
print(message)  # Output: Hello, World!
\`\`\`

### Dynamic Typing

Python is dynamically typed, meaning you don't need to declare variable types:

\`\`\`python
x = 10        # x is an integer
x = "hello"   # now x is a string
x = [1, 2, 3] # now x is a list
\`\`\`

### Rich Standard Library

Python comes with a comprehensive standard library that provides modules for:

- File I/O
- System calls
- Internet protocols
- Data compression
- And much more!

## Getting Started

To start coding in Python, you'll need to:

1. Install Python from [python.org](https://python.org)
2. Choose a code editor (VS Code, PyCharm, etc.)
3. Write your first program!

> "Python is a language that lets you work quickly and integrate systems more effectively." — Python.org
`,u_=`# Python Basics

Let's dive into the fundamental building blocks of Python programming.

## Variables and Data Types

Python supports several built-in data types:

### Numbers

\`\`\`python
# Integers
age = 25
year = 2024

# Floats
price = 19.99
temperature = -3.5

# Complex numbers
complex_num = 3 + 4j
\`\`\`

### Strings

Strings in Python are immutable sequences of characters:

\`\`\`python
# String declaration
name = "Alice"
message = 'Hello, World!'

# Multi-line strings
poem = """
Roses are red,
Violets are blue,
Python is awesome,
And so are you!
"""

# String operations
full_name = "John" + " " + "Doe"  # Concatenation
repeated = "Ha" * 3  # "HaHaHa"
\`\`\`

### Lists

Lists are ordered, mutable collections:

\`\`\`python
# Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# List operations
fruits.append("orange")    # Add item
fruits.remove("banana")    # Remove item
first = fruits[0]          # Access by index
sliced = fruits[1:3]       # Slicing
\`\`\`

## Control Flow

### Conditional Statements

\`\`\`python
age = 18

if age < 13:
    print("Child")
elif age < 20:
    print("Teenager")
else:
    print("Adult")
\`\`\`

### Loops

\`\`\`python
# For loop
for fruit in fruits:
    print(fruit)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# Range
for i in range(10):
    print(i)
\`\`\`

## Functions

Functions help organize and reuse code:

\`\`\`python
def calculate_area(length, width):
    """Calculate the area of a rectangle."""
    return length * width

# Function call
area = calculate_area(5, 3)
print(f"Area: {area}")  # Area: 15
\`\`\`

### Default Parameters

\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))           # Hello, Alice!
print(greet("Bob", "Hi"))       # Hi, Bob!
\`\`\`
`,l_=`# Advanced Topics

Now let's explore more advanced Python concepts.

## Object-Oriented Programming

Python fully supports OOP with classes and objects:

### Classes and Objects

\`\`\`python
class Dog:
    # Class attribute
    species = "Canis familiaris"
    
    def __init__(self, name, age):
        # Instance attributes
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} says Woof!"
    
    def describe(self):
        return f"{self.name} is {self.age} years old"

# Creating objects
buddy = Dog("Buddy", 3)
max_dog = Dog("Max", 5)

print(buddy.bark())      # Buddy says Woof!
print(max_dog.describe()) # Max is 5 years old
\`\`\`

### Inheritance

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        raise NotImplementedError

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

cat = Cat("Whiskers")
dog = Dog("Rex")

print(cat.speak())  # Whiskers says Meow!
print(dog.speak())  # Rex says Woof!
\`\`\`

## Decorators

Decorators modify the behavior of functions:

\`\`\`python
def timer(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end-start:.2f}s")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
    return "Done!"

slow_function()  # slow_function took 1.00s
\`\`\`

## Context Managers

Context managers handle resource management:

\`\`\`python
# File handling with context manager
with open("file.txt", "w") as f:
    f.write("Hello, World!")

# Custom context manager
class DatabaseConnection:
    def __enter__(self):
        print("Opening connection")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Closing connection")

with DatabaseConnection() as db:
    print("Working with database")
\`\`\`

## List Comprehensions

Concise way to create lists:

\`\`\`python
# Traditional approach
squares = []
for x in range(10):
    squares.append(x**2)

# List comprehension
squares = [x**2 for x in range(10)]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]

# Dictionary comprehension
word_lengths = {word: len(word) for word in ["hello", "world"]}
\`\`\`
`,c_=`# Examples

Let's look at some practical Python examples.

## Example 1: File Processing

Reading and processing a CSV file:

\`\`\`python
import csv

def process_sales_data(filename):
    """Process sales data from a CSV file."""
    total_sales = 0
    products = {}
    
    with open(filename, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            product = row['product']
            amount = float(row['amount'])
            
            total_sales += amount
            products[product] = products.get(product, 0) + amount
    
    return {
        'total': total_sales,
        'by_product': products
    }

# Usage
results = process_sales_data('sales.csv')
print(f"Total Sales: \${results['total']:.2f}")
\`\`\`

## Example 2: Web Scraping

Simple web scraping with requests and BeautifulSoup:

\`\`\`python
import requests
from bs4 import BeautifulSoup

def get_headlines(url):
    """Fetch headlines from a news website."""
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    headlines = []
    for h2 in soup.find_all('h2', class_='headline'):
        headlines.append(h2.text.strip())
    
    return headlines

# Usage
news = get_headlines('https://example-news.com')
for headline in news[:5]:
    print(f"• {headline}")
\`\`\`

## Example 3: REST API

Building a simple REST API with Flask:

\`\`\`python
from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data
tasks = [
    {'id': 1, 'title': 'Learn Python', 'done': False},
    {'id': 2, 'title': 'Build an API', 'done': False}
]

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/tasks', methods=['POST'])
def create_task():
    task = {
        'id': len(tasks) + 1,
        'title': request.json['title'],
        'done': False
    }
    tasks.append(task)
    return jsonify(task), 201

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

## Example 4: Data Analysis

Analyzing data with Pandas:

\`\`\`python
import pandas as pd
import matplotlib.pyplot as plt

# Load data
df = pd.read_csv('data.csv')

# Basic statistics
print(df.describe())

# Group by and aggregate
summary = df.groupby('category').agg({
    'sales': 'sum',
    'quantity': 'mean'
})

# Visualization
df.plot(kind='bar', x='month', y='sales')
plt.title('Monthly Sales')
plt.savefig('sales_chart.png')
\`\`\`

## Example 5: Async Programming

Asynchronous HTTP requests:

\`\`\`python
import asyncio
import aiohttp

async def fetch_url(session, url):
    async with session.get(url) as response:
        return await response.text()

async def fetch_all(urls):
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_url(session, url) for url in urls]
        return await asyncio.gather(*tasks)

# Usage
urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
]

results = asyncio.run(fetch_all(urls))
\`\`\`
`,d_=`# Quiz

Test your knowledge with these questions!

## Question 1: Variables

What will be the output of the following code?

\`\`\`python
x = [1, 2, 3]
y = x
y.append(4)
print(x)
\`\`\`

**Options:**
- A) \`[1, 2, 3]\`
- B) \`[1, 2, 3, 4]\`
- C) \`[4]\`
- D) Error

> **Answer:** B) \`[1, 2, 3, 4]\` - Lists are mutable and \`y = x\` creates a reference, not a copy.

---

## Question 2: Functions

What is the output?

\`\`\`python
def modify(lst, val):
    lst.append(val)
    val = val + 10

numbers = [1, 2]
x = 5
modify(numbers, x)
print(numbers, x)
\`\`\`

**Options:**
- A) \`[1, 2, 5] 15\`
- B) \`[1, 2, 5] 5\`
- C) \`[1, 2] 5\`
- D) \`[1, 2] 15\`

> **Answer:** B) \`[1, 2, 5] 5\` - Lists are passed by reference, integers are passed by value.

---

## Question 3: List Comprehension

Which list comprehension produces \`[0, 4, 16]\`?

**Options:**
- A) \`[x**2 for x in range(5) if x % 2 == 0]\`
- B) \`[x*2 for x in range(5)]\`
- C) \`[x**2 for x in range(5)]\`
- D) \`[x for x in range(5) if x % 2 == 0]\`

> **Answer:** A) \`[x**2 for x in range(5) if x % 2 == 0]\` - Squares of even numbers 0, 2, 4.

---

## Question 4: Dictionaries

What will this code print?

\`\`\`python
d = {'a': 1, 'b': 2}
d['c'] = d.get('c', 0) + 3
print(d['c'])
\`\`\`

**Options:**
- A) \`None\`
- B) \`0\`
- C) \`3\`
- D) Error

> **Answer:** C) \`3\` - \`get()\` returns 0 (default) since 'c' doesn't exist, then adds 3.

---

## Question 5: Classes

What is printed?

\`\`\`python
class Counter:
    count = 0
    
    def __init__(self):
        Counter.count += 1

a = Counter()
b = Counter()
c = Counter()
print(Counter.count)
\`\`\`

**Options:**
- A) \`0\`
- B) \`1\`
- C) \`3\`
- D) Error

> **Answer:** C) \`3\` - \`count\` is a class attribute shared by all instances.
`,f_=`# Introduction to Apache Spark

Apache Spark is a unified analytics engine for large-scale data processing. It provides high-level APIs in Java, Scala, Python, and R.

## What is Apache Spark?

Spark was developed at UC Berkeley's AMPLab in 2009 and later donated to the Apache Software Foundation. It has become the go-to framework for big data processing.

## Key Features

### Speed

Spark runs workloads up to **100x faster** than Hadoop MapReduce in memory:

- In-memory computing
- Optimized execution engine
- DAG (Directed Acyclic Graph) execution

### Ease of Use

Write applications quickly in Java, Scala, Python, or R:

\`\`\`python
# Simple Spark example
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("example").getOrCreate()
df = spark.read.json("data.json")
df.show()
\`\`\`

### Generality

Spark provides a stack of libraries:

| Library | Purpose |
|---------|---------|
| **Spark SQL** | Structured data processing |
| **MLlib** | Machine learning |
| **GraphX** | Graph processing |
| **Spark Streaming** | Real-time data processing |

### Runs Everywhere

Spark runs on:

- Hadoop YARN
- Apache Mesos
- Kubernetes
- Standalone mode
- Cloud platforms (AWS, Azure, GCP)

## Spark vs. Hadoop MapReduce

| Feature | Spark | MapReduce |
|---------|-------|-----------|
| Speed | 100x faster (memory) | Slower (disk-based) |
| Ease of use | High-level APIs | Low-level |
| Real-time | Yes (Streaming) | Batch only |
| Caching | In-memory | Disk |

> "Apache Spark is a lightning-fast unified analytics engine for big data and machine learning."
`,h_=`# Architecture

Understanding Spark's architecture is crucial for writing efficient applications.

## Cluster Overview

A Spark cluster consists of several components:

### Driver Program

The driver program runs your main() function and creates the SparkContext:

\`\`\`python
from pyspark.sql import SparkSession

# The SparkSession is created in the driver
spark = SparkSession.builder \\
    .appName("MyApp") \\
    .master("yarn") \\
    .config("spark.executor.memory", "4g") \\
    .getOrCreate()
\`\`\`

### Cluster Manager

Manages resources across the cluster:

- **Standalone** - Simple built-in manager
- **YARN** - Hadoop's resource manager
- **Mesos** - General cluster manager
- **Kubernetes** - Container orchestration

### Executors

Worker processes that run tasks:

\`\`\`
Driver Program
      │
      ▼
Cluster Manager
      │
      ├──► Executor 1 (Worker Node)
      │      ├── Task
      │      └── Task
      │
      └──► Executor 2 (Worker Node)
             ├── Task
             └── Task
\`\`\`

## Spark Execution Model


### Jobs, Stages, and Tasks

1. **Job** - A complete computation triggered by an action
2. **Stage** - A set of tasks that can run in parallel
3. **Task** - A unit of work sent to an executor

\`\`\`python
# This creates a job with multiple stages
result = df \\
    .filter(df.age > 21) \\      # Stage 1
    .groupBy("country") \\       # Shuffle (stage boundary)
    .count() \\                  # Stage 2
    .collect()                   # Action triggers job
\`\`\`

## Memory Management

### Storage Memory

Used for caching RDDs and DataFrames:

\`\`\`python
# Cache a DataFrame in memory
df.cache()

# Or with specific storage level
from pyspark import StorageLevel
df.persist(StorageLevel.MEMORY_AND_DISK)
\`\`\`

### Execution Memory

Used for computation (joins, sorts, aggregations).

## Configuration

Key configurations for performance:

\`\`\`python
spark = SparkSession.builder \\
    .config("spark.executor.memory", "8g") \\
    .config("spark.executor.cores", "4") \\
    .config("spark.sql.shuffle.partitions", "200") \\
    .config("spark.default.parallelism", "100") \\
    .getOrCreate()
\`\`\`
`,p_=`# RDD Operations

RDDs (Resilient Distributed Datasets) are Spark's fundamental data structure.

## Creating RDDs

### From Collections

\`\`\`python
# Parallelize a Python collection
data = [1, 2, 3, 4, 5]
rdd = spark.sparkContext.parallelize(data)
\`\`\`

### From External Storage

\`\`\`python
# From a text file
text_rdd = spark.sparkContext.textFile("hdfs://path/to/file.txt")

# From multiple files
all_logs = spark.sparkContext.textFile("logs/*.txt")
\`\`\`

## Transformations

Transformations are **lazy** - they don't execute until an action is called.

### map()

Apply a function to each element:

\`\`\`python
numbers = spark.sparkContext.parallelize([1, 2, 3, 4])
squared = numbers.map(lambda x: x ** 2)
# Result: [1, 4, 9, 16]
\`\`\`

### filter()

Select elements matching a condition:

\`\`\`python
even = numbers.filter(lambda x: x % 2 == 0)
# Result: [2, 4]
\`\`\`

### flatMap()

Map then flatten results:

\`\`\`python
sentences = spark.sparkContext.parallelize(["hello world", "spark is fast"])
words = sentences.flatMap(lambda s: s.split(" "))
# Result: ["hello", "world", "spark", "is", "fast"]
\`\`\`

### reduceByKey()

Aggregate values by key:

\`\`\`python
pairs = spark.sparkContext.parallelize([
    ("a", 1), ("b", 2), ("a", 3), ("b", 4)
])
sums = pairs.reduceByKey(lambda x, y: x + y)
# Result: [("a", 4), ("b", 6)]
\`\`\`

## Actions

Actions trigger computation and return results.

### collect()

Return all elements to the driver:

\`\`\`python
result = rdd.collect()  # Returns Python list
\`\`\`

### count()

Count the number of elements:

\`\`\`python
total = rdd.count()
\`\`\`

### reduce()

Aggregate all elements:

\`\`\`python
sum_all = numbers.reduce(lambda x, y: x + y)
# Result: 10
\`\`\`

### take()

Return first n elements:

\`\`\`python
first_three = rdd.take(3)
\`\`\`

## Word Count Example

Classic MapReduce example:

\`\`\`python
# Word count in Spark
text = spark.sparkContext.textFile("book.txt")

word_counts = text \\
    .flatMap(lambda line: line.split(" ")) \\
    .map(lambda word: (word.lower(), 1)) \\
    .reduceByKey(lambda a, b: a + b) \\
    .sortBy(lambda x: x[1], ascending=False)

top_words = word_counts.take(10)
for word, count in top_words:
    print(f"{word}: {count}")
\`\`\`
`,m_=`# DataFrames

DataFrames are the preferred API for structured data in Spark.

## Creating DataFrames

### From Files

\`\`\`python
# JSON
df = spark.read.json("data.json")

# CSV
df = spark.read \\
    .option("header", "true") \\
    .option("inferSchema", "true") \\
    .csv("data.csv")

# Parquet
df = spark.read.parquet("data.parquet")
\`\`\`

### From RDD

\`\`\`python
from pyspark.sql import Row

rdd = spark.sparkContext.parallelize([
    Row(name="Alice", age=25),
    Row(name="Bob", age=30)
])
df = spark.createDataFrame(rdd)
\`\`\`

## DataFrame Operations

### Select and Filter

\`\`\`python
# Select columns
df.select("name", "age")

# Filter rows
df.filter(df.age > 21)
df.where("age > 21")

# Chain operations
result = df \\
    .select("name", "age", "country") \\
    .filter(df.age >= 18) \\
    .orderBy(df.age.desc())
\`\`\`

### Aggregations

\`\`\`python
from pyspark.sql import functions as F

# Group by and aggregate
df.groupBy("country").agg(
    F.count("*").alias("count"),
    F.avg("age").alias("avg_age"),
    F.max("salary").alias("max_salary")
)

# Multiple aggregations
df.groupBy("department", "year").agg(
    F.sum("revenue").alias("total_revenue"),
    F.countDistinct("customer_id").alias("unique_customers")
)
\`\`\`

### Joins

\`\`\`python
# Inner join
df1.join(df2, df1.id == df2.id, "inner")

# Left outer join
df1.join(df2, "id", "left")

# Multiple conditions
df1.join(
    df2,
    (df1.id == df2.id) & (df1.date == df2.date),
    "left"
)
\`\`\`

## Spark SQL

Use SQL queries on DataFrames:

\`\`\`python
# Register as temporary view
df.createOrReplaceTempView("people")

# Run SQL query
result = spark.sql("""
    SELECT country, 
           COUNT(*) as population,
           AVG(age) as avg_age
    FROM people
    WHERE age >= 18
    GROUP BY country
    HAVING COUNT(*) > 1000
    ORDER BY population DESC
""")
\`\`\`

## Window Functions

Powerful analytical functions:

\`\`\`python
from pyspark.sql.window import Window

# Define window
window = Window.partitionBy("department").orderBy(F.desc("salary"))

# Add rank column
df_ranked = df.withColumn(
    "rank",
    F.rank().over(window)
)

# Running total
window_running = Window.partitionBy("customer") \\
    .orderBy("date") \\
    .rowsBetween(Window.unboundedPreceding, Window.currentRow)

df_with_total = df.withColumn(
    "running_total",
    F.sum("amount").over(window_running)
)
\`\`\`

## Performance Tips

1. **Use broadcast for small tables:**
\`\`\`python
from pyspark.sql.functions import broadcast
result = large_df.join(broadcast(small_df), "id")
\`\`\`

2. **Repartition wisely:**
\`\`\`python
df.repartition(200, "key_column")
\`\`\`

3. **Cache intermediate results:**
\`\`\`python
df.cache()
\`\`\`
`,g_=`# Quiz

Test your Spark knowledge!

## Question 1: RDD Transformations

Which of these is a transformation (not an action)?

**Options:**
- A) \`collect()\`
- B) \`count()\`
- C) \`map()\`
- D) \`reduce()\`

> **Answer:** C) \`map()\` - Transformations are lazy and return new RDDs.

---

## Question 2: Caching

What happens when you call \`df.cache()\`?

**Options:**
- A) Data is immediately written to disk
- B) Data is marked for caching on first action
- C) A new DataFrame is created
- D) The computation runs immediately

> **Answer:** B) Data is marked for caching on first action - caching is lazy.

---

## Question 3: Partitions

After \`rdd.repartition(100)\`, how many partitions will the RDD have?

**Options:**
- A) Depends on the cluster size
- B) Exactly 100
- C) At least 100
- D) At most 100

> **Answer:** B) Exactly 100 - repartition creates exactly the specified number.

---

## Question 4: Shuffles

Which operation causes a shuffle?

**Options:**
- A) \`map()\`
- B) \`filter()\`
- C) \`groupByKey()\`
- D) \`flatMap()\`

> **Answer:** C) \`groupByKey()\` - grouping requires shuffling data across partitions.

---

## Question 5: Broadcast Variables

When should you use broadcast variables?

**Options:**
- A) For large datasets that need to be distributed
- B) For small read-only data shared across tasks
- C) For mutable shared state
- D) For writing data to HDFS

> **Answer:** B) For small read-only data shared across tasks.
`,y_="Data Ingestion with Lakeflow Connect",E_="Learn how to efficiently ingest data using Lakeflow Connect.",b_="🔺",T_=4,v_={title:y_,description:E_,icon:b_,order:T_},w_="Delta Lake",C_="Learn about ACID transactions on data lakes",x_="🔺",k_=3,A_={title:w_,description:C_,icon:x_,order:k_},S_="Deploy Workloads with Lakeflow Jobs",D_="Learn how to deploy and manage workloads using Lakeflow Jobs.",__="🔺",I_=5,N_={title:S_,description:D_,icon:__,order:I_},L_="Devops Fundamentals",O_="Learn the fundamentals of DevOps practices and tools.",R_="🔺",P_=7,F_={title:L_,description:O_,icon:R_,order:P_},M_="Lakeflow Spark Declarative Pipelines",B_="Learn how to build Spark declarative data pipelines using Lakeflow with Spark.",U_="🔺",H_=6,j_={title:M_,description:B_,icon:U_,order:H_},z_="Python Introduction",W_="Learn the fundamentals of Python programming",Y_="🐍",V_=1,$_={title:z_,description:W_,icon:Y_,order:V_},q_="Apache Spark",Q_="Master distributed data processing with Spark",G_="⚡",K_=2,X_={title:q_,description:Q_,icon:G_,order:K_},J_=Object.assign({"./courses/data-Ingestion-with-lakeflow-connect/01-intro.md":SD,"./courses/data-Ingestion-with-lakeflow-connect/02-full_course.md":DD,"./courses/data-Ingestion-with-lakeflow-connect/03-delta-lake.md":_D,"./courses/data-Ingestion-with-lakeflow-connect/04-ingestion_modes.md":ID,"./courses/data-Ingestion-with-lakeflow-connect/05-sas-ingestion.md":ND,"./courses/data-Ingestion-with-lakeflow-connect/06-database-ingestion.md":LD,"./courses/data-Ingestion-with-lakeflow-connect/07-summary.md":OD,"./courses/data-Ingestion-with-lakeflow-connect/08-questions_answers.md":RD,"./courses/data-Ingestion-with-lakeflow-connect/09-labs.md":PD,"./courses/delta-lake-intro/01-introduction.md":FD,"./courses/delta-lake-intro/02-features.md":MD,"./courses/delta-lake-intro/03-acid.md":BD,"./courses/delta-lake-intro/04-time-travel.md":UD,"./courses/delta-lake-intro/05-quiz.md":HD,"./courses/deploy-workloads-with lakeflow-jobs/01-intro.md":jD,"./courses/deploy-workloads-with lakeflow-jobs/02-lakeflow_job.md":zD,"./courses/deploy-workloads-with lakeflow-jobs/03-schedules_trigers.md":WD,"./courses/deploy-workloads-with lakeflow-jobs/04-questions_answers.md":YD,"./courses/deploy-workloads-with lakeflow-jobs/05-labs.md":VD,"./courses/deploy-workloads-with lakeflow-jobs/summary.md":$D,"./courses/devops-fundamentals/01-intro.md":qD,"./courses/devops-fundamentals/02-swe-best-practice.md":QD,"./courses/devops-fundamentals/03-devops-life-cycle.md":GD,"./courses/devops-fundamentals/04-CI.md":KD,"./courses/devops-fundamentals/05-CD.md":XD,"./courses/devops-fundamentals/06-dab.md":JD,"./courses/devops-fundamentals/07-labs.md":ZD,"./courses/lakeflow-spark-declerative-pipelines/01-intro.md":e_,"./courses/lakeflow-spark-declerative-pipelines/02-lakeflow_spark_dp.md":t_,"./courses/lakeflow-spark-declerative-pipelines/03-dataset-types.md":n_,"./courses/lakeflow-spark-declerative-pipelines/04-data_quality_expectations.md":r_,"./courses/lakeflow-spark-declerative-pipelines/05-joins.md":i_,"./courses/lakeflow-spark-declerative-pipelines/06-cdc.md":a_,"./courses/lakeflow-spark-declerative-pipelines/07-labs.md":o_,"./courses/python-intro/01-introduction.md":s_,"./courses/python-intro/02-basics.md":u_,"./courses/python-intro/03-advanced.md":l_,"./courses/python-intro/04-examples.md":c_,"./courses/python-intro/05-quiz.md":d_,"./courses/spark-intro/01-introduction.md":f_,"./courses/spark-intro/02-architecture.md":h_,"./courses/spark-intro/03-rdd.md":p_,"./courses/spark-intro/04-dataframes.md":m_,"./courses/spark-intro/05-quiz.md":g_}),Z_=Object.assign({"./courses/data-Ingestion-with-lakeflow-connect/_meta.json":v_,"./courses/delta-lake-intro/_meta.json":A_,"./courses/deploy-workloads-with lakeflow-jobs/_meta.json":N_,"./courses/devops-fundamentals/_meta.json":F_,"./courses/lakeflow-spark-declerative-pipelines/_meta.json":j_,"./courses/python-intro/_meta.json":$_,"./courses/spark-intro/_meta.json":X_});function e3(e){const t=e.match(/^#\s+(.+)$/m);return t?t[1].trim():"Untitled"}function t3(e){const t=e.match(/\.\/courses\/([^/]+)\/(\d+)-(.+)\.md$/);return t?{courseId:t[1],fileName:t[3],order:parseInt(t[2],10)}:null}function n3(){const e=new Map;for(const[t,n]of Object.entries(Z_)){const r=t.match(/\.\/courses\/([^/]+)\/_meta\.json$/);if(!r)continue;const i=r[1],a=n;e.set(i,{id:i,title:a.title,description:a.description,icon:a.icon,order:a.order||0,tabs:[]})}for(const[t,n]of Object.entries(J_)){const r=t3(t);if(!r)continue;const{courseId:i,fileName:a,order:o}=r;e.has(i)||e.set(i,{id:i,title:i.replace(/-/g," ").replace(/\b\w/g,l=>l.toUpperCase()),description:"",icon:"📚",order:999,tabs:[]});const s=e.get(i),u=e3(n);s.tabs.push({id:a,title:u,content:n,order:o})}for(const t of e.values())t.tabs.sort((n,r)=>n.order-r.order);return Array.from(e.values()).sort((t,n)=>t.order-n.order)}const Gu=n3();function r3(e){return Gu.find(t=>t.id===e)}function i3(){return _.jsxs("div",{className:"min-h-screen bg-background",children:[_.jsxs("header",{className:"relative overflow-hidden",children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"}),_.jsx("div",{className:"relative max-w-6xl mx-auto px-6 py-20 lg:py-32",children:_.jsxs("div",{className:"text-center animate-fade-in",children:[_.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6",children:[_.jsx(Jx,{className:"w-4 h-4"}),"Interactive Learning Platform"]}),_.jsxs("h1",{className:"text-4xl lg:text-6xl font-bold text-foreground mb-6",children:["Master"," ",_.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent",children:"Data Engineering"})]}),_.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl mx-auto mb-10",children:"Explore comprehensive courses on Python, Apache Spark, and Delta Lake. Learn at your own pace with interactive content and hands-on examples."}),_.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[_.jsxs(es,{to:`/course/${Gu[0].id}`,className:"inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors",children:["Start Learning",_.jsx(xm,{className:"w-4 h-4"})]}),_.jsx("a",{href:"#courses",className:"inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors",children:"Browse Courses"})]})]})})]}),_.jsxs("section",{id:"courses",className:"max-w-6xl mx-auto px-6 py-20",children:[_.jsxs("div",{className:"text-center mb-12",children:[_.jsx("h2",{className:"text-3xl font-bold text-foreground mb-4",children:"Available Courses"}),_.jsx("p",{className:"text-muted-foreground max-w-xl mx-auto",children:"Choose from our curated selection of data engineering courses designed for both beginners and experienced developers."})]}),_.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:Gu.map((e,t)=>_.jsxs(es,{to:`/course/${e.id}`,className:"group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-fade-in",style:{animationDelay:`${t*100}ms`},children:[_.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"}),_.jsxs("div",{className:"relative",children:[_.jsx("div",{className:"w-14 h-14 rounded-xl bg-muted flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform",children:e.icon}),_.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors",children:e.title}),_.jsx("p",{className:"text-muted-foreground mb-4",children:e.description}),_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("span",{className:"text-sm text-muted-foreground",children:[e.tabs.length," lessons"]}),_.jsxs("span",{className:"inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity",children:["Start Course",_.jsx(xm,{className:"w-4 h-4"})]})]})]})]},e.id))})]}),_.jsx("section",{className:"bg-muted/30 border-y border-border",children:_.jsx("div",{className:"max-w-6xl mx-auto px-6 py-20",children:_.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4",children:_.jsx(jd,{className:"w-6 h-6 text-primary"})}),_.jsx("h3",{className:"text-lg font-semibold text-foreground mb-2",children:"Interactive Content"}),_.jsx("p",{className:"text-muted-foreground text-sm",children:"Learn with beautifully rendered Markdown content, code examples, and quizzes."})]}),_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4",children:_.jsx("svg",{className:"w-6 h-6 text-accent",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h7"})})}),_.jsx("h3",{className:"text-lg font-semibold text-foreground mb-2",children:"Smart Navigation"}),_.jsx("p",{className:"text-muted-foreground text-sm",children:"Auto-generated table of contents with smooth scrolling to any section."})]}),_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4",children:_.jsx("svg",{className:"w-6 h-6 text-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})}),_.jsx("h3",{className:"text-lg font-semibold text-foreground mb-2",children:"Easy to Extend"}),_.jsx("p",{className:"text-muted-foreground text-sm",children:"Add new courses by simply creating folders with Markdown files."})]})]})})}),_.jsx("footer",{className:"max-w-6xl mx-auto px-6 py-8",children:_.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx(jd,{className:"w-5 h-5 text-primary"}),_.jsx("span",{className:"font-medium text-foreground",children:"Course Viewer"})]}),_.jsx("p",{children:"Interactive Markdown-based learning platform"})]})})]})}function a3(){const e=ti(),[t,n]=x.useState(!1);return _.jsxs(_.Fragment,{children:[_.jsx("button",{onClick:()=>n(!t),className:"lg:hidden fixed top-4 left-4 z-50 p-2 bg-sidebar-bg text-sidebar-foreground rounded-lg shadow-lg",children:t?_.jsx(yE,{className:"w-5 h-5"}):_.jsx(Xx,{className:"w-5 h-5"})}),t&&_.jsx("div",{className:"lg:hidden fixed inset-0 bg-black/50 z-40",onClick:()=>n(!1)}),_.jsxs("aside",{className:vn("fixed lg:sticky top-0 left-0 z-40 w-72 h-screen bg-sidebar-bg border-r border-sidebar-border flex flex-col transition-transform duration-300",t?"translate-x-0":"-translate-x-full lg:translate-x-0"),children:[_.jsx("div",{className:"p-6 border-b border-sidebar-border",children:_.jsxs(es,{to:"/",className:"flex items-center gap-3 text-sidebar-foreground hover:text-white transition-colors",onClick:()=>n(!1),children:[_.jsx("div",{className:"w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center",children:_.jsx(jd,{className:"w-5 h-5 text-primary"})}),_.jsxs("div",{children:[_.jsx("h1",{className:"font-bold text-lg",children:"Course Viewer"}),_.jsx("p",{className:"text-xs text-sidebar-muted",children:"Interactive Learning"})]})]})}),_.jsx("nav",{className:"flex-1 overflow-y-auto p-4 scrollbar-thin",children:_.jsxs("div",{className:"space-y-2",children:[_.jsx("p",{className:"text-xs font-semibold text-sidebar-muted uppercase tracking-wider px-3 mb-3",children:"Courses"}),Gu.map(r=>{const i=e.pathname.startsWith(`/course/${r.id}`);return _.jsxs(es,{to:`/course/${r.id}`,onClick:()=>n(!1),className:vn("flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",i?"bg-sidebar-hover text-white":"text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-hover/50"),children:[_.jsx("span",{className:"text-xl",children:r.icon}),_.jsxs("div",{className:"flex-1 min-w-0",children:[_.jsx("p",{className:"font-medium truncate",children:r.title}),_.jsxs("p",{className:"text-xs text-sidebar-muted truncate",children:[r.tabs.length," lessons"]})]}),i&&_.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-primary"})]},r.id)})]})}),_.jsx("div",{className:"p-4 border-t border-sidebar-border",children:_.jsx("div",{className:"px-3 py-2 rounded-lg bg-sidebar-hover/50",children:_.jsxs("p",{className:"text-xs text-sidebar-muted",children:["Add courses in ",_.jsx("code",{className:"text-sidebar-foreground/70",children:"src/content/courses/"})," with _meta.json and numbered .md files"]})})})]})]})}function o3({tabs:e,activeTab:t,onTabChange:n}){return _.jsx("div",{className:"border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-10",children:_.jsx("nav",{className:"flex overflow-x-auto scrollbar-thin",children:e.map(r=>_.jsx("button",{onClick:()=>n(r.id),className:vn("tab-item whitespace-nowrap flex-shrink-0",t===r.id&&"tab-item-active"),children:r.title},r.id))})})}function s3(e){const t=/^(#{1,4})\s+(.+)$/gm,n=[];let r;for(;(r=t.exec(e))!==null;){const i=r[1].length,a=r[2].trim(),o=a.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");n.push({id:o,text:a,level:i})}return n}function u3({content:e}){const[t,n]=x.useState([]),[r,i]=x.useState("");x.useEffect(()=>{n(s3(e))},[e]),x.useEffect(()=>{const o=new IntersectionObserver(s=>{s.forEach(u=>{u.isIntersecting&&i(u.target.id)})},{rootMargin:"-80px 0px -80% 0px"});return t.forEach(({id:s})=>{const u=document.getElementById(s);u&&o.observe(u)}),()=>o.disconnect()},[t]);const a=o=>{const s=document.getElementById(o);s&&s.scrollIntoView({behavior:"smooth",block:"start"})};return t.length===0?null:_.jsx("div",{className:"hidden xl:block w-64 flex-shrink-0",children:_.jsxs("div",{className:"sticky top-20 p-4",children:[_.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-foreground mb-4",children:[_.jsx(Kx,{className:"w-4 h-4"}),_.jsx("span",{children:"On this page"})]}),_.jsx("nav",{className:"space-y-1",children:t.map(o=>_.jsx("button",{onClick:()=>a(o.id),className:vn("block w-full text-left text-sm py-1 transition-colors",o.level===1&&"font-medium",o.level===2&&"pl-0",o.level===3&&"pl-4",o.level===4&&"pl-6",r===o.id?"text-primary font-medium":"text-muted-foreground hover:text-foreground"),children:o.text},o.id))})]})})}function t0(e){const t=[],n=String(e||"");let r=n.indexOf(","),i=0,a=!1;for(;!a;){r===-1&&(r=n.length,a=!0);const o=n.slice(i,r).trim();(o||!a)&&t.push(o),i=r+1,r=n.indexOf(",",i)}return t}function Tb(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const l3=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,c3=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,d3={};function n0(e,t){return(d3.jsx?c3:l3).test(e)}const f3=/[ \t\n\f\r]/g;function h3(e){return typeof e=="object"?e.type==="text"?r0(e.value):!1:r0(e)}function r0(e){return e.replace(f3,"")===""}let ms=class{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}};ms.prototype.normal={};ms.prototype.property={};ms.prototype.space=void 0;function vb(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new ms(n,r,t)}function ts(e){return e.toLowerCase()}let Nt=class{constructor(t,n){this.attribute=n,this.property=t}};Nt.prototype.attribute="";Nt.prototype.booleanish=!1;Nt.prototype.boolean=!1;Nt.prototype.commaOrSpaceSeparated=!1;Nt.prototype.commaSeparated=!1;Nt.prototype.defined=!1;Nt.prototype.mustUseProperty=!1;Nt.prototype.number=!1;Nt.prototype.overloadedBoolean=!1;Nt.prototype.property="";Nt.prototype.spaceSeparated=!1;Nt.prototype.space=void 0;let p3=0;const de=Oi(),Ye=Oi(),ef=Oi(),q=Oi(),Ae=Oi(),la=Oi(),Pt=Oi();function Oi(){return 2**++p3}const tf=Object.freeze(Object.defineProperty({__proto__:null,boolean:de,booleanish:Ye,commaOrSpaceSeparated:Pt,commaSeparated:la,number:q,overloadedBoolean:ef,spaceSeparated:Ae},Symbol.toStringTag,{value:"Module"})),Ac=Object.keys(tf);let Ph=class extends Nt{constructor(t,n,r,i){let a=-1;if(super(t,n),i0(this,"space",i),typeof r=="number")for(;++a<Ac.length;){const o=Ac[a];i0(this,Ac[a],(r&tf[o])===tf[o])}}};Ph.prototype.defined=!0;function i0(e,t,n){n&&(e[t]=n)}function Ua(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const a=new Ph(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[ts(r)]=r,n[ts(a.attribute)]=r}return new ms(t,n,e.space)}const wb=Ua({properties:{ariaActiveDescendant:null,ariaAtomic:Ye,ariaAutoComplete:null,ariaBusy:Ye,ariaChecked:Ye,ariaColCount:q,ariaColIndex:q,ariaColSpan:q,ariaControls:Ae,ariaCurrent:null,ariaDescribedBy:Ae,ariaDetails:null,ariaDisabled:Ye,ariaDropEffect:Ae,ariaErrorMessage:null,ariaExpanded:Ye,ariaFlowTo:Ae,ariaGrabbed:Ye,ariaHasPopup:null,ariaHidden:Ye,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ae,ariaLevel:q,ariaLive:null,ariaModal:Ye,ariaMultiLine:Ye,ariaMultiSelectable:Ye,ariaOrientation:null,ariaOwns:Ae,ariaPlaceholder:null,ariaPosInSet:q,ariaPressed:Ye,ariaReadOnly:Ye,ariaRelevant:null,ariaRequired:Ye,ariaRoleDescription:Ae,ariaRowCount:q,ariaRowIndex:q,ariaRowSpan:q,ariaSelected:Ye,ariaSetSize:q,ariaSort:null,ariaValueMax:q,ariaValueMin:q,ariaValueNow:q,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Cb(e,t){return t in e?e[t]:t}function xb(e,t){return Cb(e,t.toLowerCase())}const m3=Ua({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:la,acceptCharset:Ae,accessKey:Ae,action:null,allow:null,allowFullScreen:de,allowPaymentRequest:de,allowUserMedia:de,alt:null,as:null,async:de,autoCapitalize:null,autoComplete:Ae,autoFocus:de,autoPlay:de,blocking:Ae,capture:null,charSet:null,checked:de,cite:null,className:Ae,cols:q,colSpan:null,content:null,contentEditable:Ye,controls:de,controlsList:Ae,coords:q|la,crossOrigin:null,data:null,dateTime:null,decoding:null,default:de,defer:de,dir:null,dirName:null,disabled:de,download:ef,draggable:Ye,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:de,formTarget:null,headers:Ae,height:q,hidden:ef,high:q,href:null,hrefLang:null,htmlFor:Ae,httpEquiv:Ae,id:null,imageSizes:null,imageSrcSet:null,inert:de,inputMode:null,integrity:null,is:null,isMap:de,itemId:null,itemProp:Ae,itemRef:Ae,itemScope:de,itemType:Ae,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:de,low:q,manifest:null,max:null,maxLength:q,media:null,method:null,min:null,minLength:q,multiple:de,muted:de,name:null,nonce:null,noModule:de,noValidate:de,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:de,optimum:q,pattern:null,ping:Ae,placeholder:null,playsInline:de,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:de,referrerPolicy:null,rel:Ae,required:de,reversed:de,rows:q,rowSpan:q,sandbox:Ae,scope:null,scoped:de,seamless:de,selected:de,shadowRootClonable:de,shadowRootDelegatesFocus:de,shadowRootMode:null,shape:null,size:q,sizes:null,slot:null,span:q,spellCheck:Ye,src:null,srcDoc:null,srcLang:null,srcSet:null,start:q,step:null,style:null,tabIndex:q,target:null,title:null,translate:null,type:null,typeMustMatch:de,useMap:null,value:Ye,width:q,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ae,axis:null,background:null,bgColor:null,border:q,borderColor:null,bottomMargin:q,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:de,declare:de,event:null,face:null,frame:null,frameBorder:null,hSpace:q,leftMargin:q,link:null,longDesc:null,lowSrc:null,marginHeight:q,marginWidth:q,noResize:de,noHref:de,noShade:de,noWrap:de,object:null,profile:null,prompt:null,rev:null,rightMargin:q,rules:null,scheme:null,scrolling:Ye,standby:null,summary:null,text:null,topMargin:q,valueType:null,version:null,vAlign:null,vLink:null,vSpace:q,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:de,disableRemotePlayback:de,prefix:null,property:null,results:q,security:null,unselectable:null},space:"html",transform:xb}),g3=Ua({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Pt,accentHeight:q,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:q,amplitude:q,arabicForm:null,ascent:q,attributeName:null,attributeType:null,azimuth:q,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:q,by:null,calcMode:null,capHeight:q,className:Ae,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:q,diffuseConstant:q,direction:null,display:null,dur:null,divisor:q,dominantBaseline:null,download:de,dx:null,dy:null,edgeMode:null,editable:null,elevation:q,enableBackground:null,end:null,event:null,exponent:q,externalResourcesRequired:null,fill:null,fillOpacity:q,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:la,g2:la,glyphName:la,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:q,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:q,horizOriginX:q,horizOriginY:q,id:null,ideographic:q,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:q,k:q,k1:q,k2:q,k3:q,k4:q,kernelMatrix:Pt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:q,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:q,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:q,overlineThickness:q,paintOrder:null,panose1:null,path:null,pathLength:q,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ae,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:q,pointsAtY:q,pointsAtZ:q,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Pt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Pt,rev:Pt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Pt,requiredFeatures:Pt,requiredFonts:Pt,requiredFormats:Pt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:q,specularExponent:q,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:q,strikethroughThickness:q,string:null,stroke:null,strokeDashArray:Pt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:q,strokeOpacity:q,strokeWidth:null,style:null,surfaceScale:q,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Pt,tabIndex:q,tableValues:null,target:null,targetX:q,targetY:q,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Pt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:q,underlineThickness:q,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:q,values:null,vAlphabetic:q,vMathematical:q,vectorEffect:null,vHanging:q,vIdeographic:q,version:null,vertAdvY:q,vertOriginX:q,vertOriginY:q,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:q,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Cb}),kb=Ua({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Ab=Ua({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:xb}),Sb=Ua({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),y3={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},E3=/[A-Z]/g,a0=/-[a-z]/g,b3=/^data[-\w.:]+$/i;function Fh(e,t){const n=ts(t);let r=t,i=Nt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&b3.test(t)){if(t.charAt(4)==="-"){const a=t.slice(5).replace(a0,v3);r="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=t.slice(4);if(!a0.test(a)){let o=a.replace(E3,T3);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}i=Ph}return new i(r,t)}function T3(e){return"-"+e.toLowerCase()}function v3(e){return e.charAt(1).toUpperCase()}const Il=vb([wb,m3,kb,Ab,Sb],"html"),Ha=vb([wb,g3,kb,Ab,Sb],"svg");function o0(e){const t=String(e||"").trim();return t?t.split(/[ \t\n\r\f]+/g):[]}function Db(e){return e.join(" ").trim()}var Mh={},s0=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,w3=/\n/g,C3=/^\s*/,x3=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,k3=/^:\s*/,A3=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,S3=/^[;\s]*/,D3=/^\s+|\s+$/g,_3=`
`,u0="/",l0="*",ci="",I3="comment",N3="declaration";function L3(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var y=g.match(w3);y&&(n+=y.length);var T=g.lastIndexOf(_3);r=~T?g.length-T:r+g.length}function a(){var g={line:n,column:r};return function(y){return y.position=new o(g),l(),y}}function o(g){this.start=g,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function s(g){var y=new Error(t.source+":"+n+":"+r+": "+g);if(y.reason=g,y.filename=t.source,y.line=n,y.column=r,y.source=e,!t.silent)throw y}function u(g){var y=g.exec(e);if(y){var T=y[0];return i(T),e=e.slice(T.length),y}}function l(){u(C3)}function f(g){var y;for(g=g||[];y=d();)y!==!1&&g.push(y);return g}function d(){var g=a();if(!(u0!=e.charAt(0)||l0!=e.charAt(1))){for(var y=2;ci!=e.charAt(y)&&(l0!=e.charAt(y)||u0!=e.charAt(y+1));)++y;if(y+=2,ci===e.charAt(y-1))return s("End of comment missing");var T=e.slice(2,y-2);return r+=2,i(T),e=e.slice(y),r+=2,g({type:I3,comment:T})}}function p(){var g=a(),y=u(x3);if(y){if(d(),!u(k3))return s("property missing ':'");var T=u(A3),m=g({type:N3,property:c0(y[0].replace(s0,ci)),value:T?c0(T[0].replace(s0,ci)):ci});return u(S3),m}}function h(){var g=[];f(g);for(var y;y=p();)y!==!1&&(g.push(y),f(g));return g}return l(),h()}function c0(e){return e?e.replace(D3,ci):ci}var O3=L3,R3=yu&&yu.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Mh,"__esModule",{value:!0});Mh.default=F3;const P3=R3(O3);function F3(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,P3.default)(e),i=typeof t=="function";return r.forEach(a=>{if(a.type!=="declaration")return;const{property:o,value:s}=a;i?t(o,s,a):s&&(n=n||{},n[o]=s)}),n}var Nl={};Object.defineProperty(Nl,"__esModule",{value:!0});Nl.camelCase=void 0;var M3=/^--[a-zA-Z0-9_-]+$/,B3=/-([a-z])/g,U3=/^[^-]+$/,H3=/^-(webkit|moz|ms|o|khtml)-/,j3=/^-(ms)-/,z3=function(e){return!e||U3.test(e)||M3.test(e)},W3=function(e,t){return t.toUpperCase()},d0=function(e,t){return"".concat(t,"-")},Y3=function(e,t){return t===void 0&&(t={}),z3(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(j3,d0):e=e.replace(H3,d0),e.replace(B3,W3))};Nl.camelCase=Y3;var V3=yu&&yu.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},$3=V3(Mh),q3=Nl;function nf(e,t){var n={};return!e||typeof e!="string"||(0,$3.default)(e,function(r,i){r&&i&&(n[(0,q3.camelCase)(r,t)]=i)}),n}nf.default=nf;var Q3=nf;const G3=nl(Q3),Ll=_b("end"),jn=_b("start");function _b(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function K3(e){const t=jn(e),n=Ll(e);if(t&&n)return{start:t,end:n}}function Co(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?f0(e.position):"start"in e||"end"in e?f0(e):"line"in e||"column"in e?rf(e):""}function rf(e){return h0(e&&e.line)+":"+h0(e&&e.column)}function f0(e){return rf(e&&e.start)+"-"+rf(e&&e.end)}function h0(e){return e&&typeof e=="number"?e:1}class ct extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",a={},o=!1;if(n&&("line"in n&&"column"in n?a={place:n}:"start"in n&&"end"in n?a={place:n}:"type"in n?a={ancestors:[n],place:n.position}:a={...n}),typeof t=="string"?i=t:!a.cause&&t&&(o=!0,i=t.message,a.cause=t),!a.ruleId&&!a.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?a.ruleId=r:(a.source=r.slice(0,u),a.ruleId=r.slice(u+1))}if(!a.place&&a.ancestors&&a.ancestors){const u=a.ancestors[a.ancestors.length-1];u&&(a.place=u.position)}const s=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=s?s.line:void 0,this.name=Co(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=o&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ct.prototype.file="";ct.prototype.name="";ct.prototype.reason="";ct.prototype.message="";ct.prototype.stack="";ct.prototype.column=void 0;ct.prototype.line=void 0;ct.prototype.ancestors=void 0;ct.prototype.cause=void 0;ct.prototype.fatal=void 0;ct.prototype.place=void 0;ct.prototype.ruleId=void 0;ct.prototype.source=void 0;const Bh={}.hasOwnProperty,X3=new Map,J3=/[A-Z]/g,Z3=new Set(["table","tbody","thead","tfoot","tr"]),eI=new Set(["td","th"]),Ib="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function tI(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=lI(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=uI(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Ha:Il,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=Nb(i,e,void 0);return a&&typeof a!="string"?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Nb(e,t,n){if(t.type==="element")return nI(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return rI(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return aI(e,t,n);if(t.type==="mdxjsEsm")return iI(e,t);if(t.type==="root")return oI(e,t,n);if(t.type==="text")return sI(e,t)}function nI(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Ha,e.schema=i),e.ancestors.push(t);const a=Ob(e,t.tagName,!1),o=cI(e,t);let s=Hh(e,t);return Z3.has(t.tagName)&&(s=s.filter(function(u){return typeof u=="string"?!h3(u):!0})),Lb(e,o,a,t),Uh(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function rI(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}ns(e,t.position)}function iI(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ns(e,t.position)}function aI(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Ha,e.schema=i),e.ancestors.push(t);const a=t.name===null?e.Fragment:Ob(e,t.name,!0),o=dI(e,t),s=Hh(e,t);return Lb(e,o,a,t),Uh(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function oI(e,t,n){const r={};return Uh(r,Hh(e,t)),e.create(t,e.Fragment,r,n)}function sI(e,t){return t.value}function Lb(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Uh(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function uI(e,t,n){return r;function r(i,a,o,s){const l=Array.isArray(o.children)?n:t;return s?l(a,o,s):l(a,o)}}function lI(e,t){return n;function n(r,i,a,o){const s=Array.isArray(a.children),u=jn(r);return t(i,a,o,s,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function cI(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Bh.call(t.properties,i)){const a=fI(e,i,t.properties[i]);if(a){const[o,s]=a;e.tableCellAlignToStyle&&o==="align"&&typeof s=="string"&&eI.has(t.tagName)?r=s:n[o]=s}}if(r){const a=n.style||(n.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function dI(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const a=r.data.estree.body[0];a.type;const o=a.expression;o.type;const s=o.properties[0];s.type,Object.assign(n,e.evaluater.evaluateExpression(s.argument))}else ns(e,t.position);else{const i=r.name;let a;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,a=e.evaluater.evaluateExpression(s.expression)}else ns(e,t.position);else a=r.value===null?!0:r.value;n[i]=a}return n}function Hh(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:X3;for(;++r<t.children.length;){const a=t.children[r];let o;if(e.passKeys){const u=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(u){const l=i.get(u)||0;o=u+"-"+l,i.set(u,l+1)}}const s=Nb(e,a,o);s!==void 0&&n.push(s)}return n}function fI(e,t,n){const r=Fh(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Tb(n):Db(n)),r.property==="style"){let i=typeof n=="object"?n:hI(e,String(n));return e.stylePropertyNameCase==="css"&&(i=pI(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?y3[r.property]||r.property:r.attribute,n]}}function hI(e,t){try{return G3(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new ct("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Ib+"#cannot-parse-style-attribute",i}}function Ob(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let a=-1,o;for(;++a<i.length;){const s=n0(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};o=o?{type:"MemberExpression",object:o,property:s,computed:!!(a&&s.type==="Literal"),optional:!1}:s}r=o}else r=n0(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Bh.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);ns(e)}function ns(e,t){const n=new ct("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Ib+"#cannot-handle-mdx-estrees-without-createevaluater",n}function pI(e){const t={};let n;for(n in e)Bh.call(e,n)&&(t[mI(n)]=e[n]);return t}function mI(e){let t=e.replace(J3,gI);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function gI(e){return"-"+e.toLowerCase()}const Sc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},yI={};function jh(e,t){const n=yI,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Rb(e,r,i)}function Rb(e,t,n){if(EI(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return p0(e.children,t,n)}return Array.isArray(e)?p0(e,t,n):""}function p0(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Rb(e[i],t,n);return r.join("")}function EI(e){return!!(e&&typeof e=="object")}const m0=document.createElement("i");function zh(e){const t="&"+e+";";m0.innerHTML=t;const n=m0.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function zt(e,t,n,r){const i=e.length;let a=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function Kt(e,t){return e.length>0?(zt(e,e.length,0,t),e):t}const g0={}.hasOwnProperty;function Pb(e){const t={};let n=-1;for(;++n<e.length;)bI(t,e[n]);return t}function bI(e,t){let n;for(n in t){const i=(g0.call(e,n)?e[n]:void 0)||(e[n]={}),a=t[n];let o;if(a)for(o in a){g0.call(i,o)||(i[o]=[]);const s=a[o];TI(i[o],Array.isArray(s)?s:s?[s]:[])}}}function TI(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);zt(e,0,0,r)}function Fb(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function En(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const yt=ni(/[A-Za-z]/),ut=ni(/[\dA-Za-z]/),vI=ni(/[#-'*+\--9=?A-Z^-~]/);function Ku(e){return e!==null&&(e<32||e===127)}const af=ni(/\d/),wI=ni(/[\dA-Fa-f]/),CI=ni(/[!-/:-@[-`{-~]/);function ie(e){return e!==null&&e<-2}function ke(e){return e!==null&&(e<0||e===32)}function pe(e){return e===-2||e===-1||e===32}const Ol=ni(new RegExp("\\p{P}|\\p{S}","u")),Ii=ni(/\s/);function ni(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function ja(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const a=e.charCodeAt(n);let o="";if(a===37&&ut(e.charCodeAt(n+1))&&ut(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){const s=e.charCodeAt(n+1);a<56320&&s>56319&&s<57344?(o=String.fromCharCode(a,s),i=1):o="�"}else o=String.fromCharCode(a);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Ee(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let a=0;return o;function o(u){return pe(u)?(e.enter(n),s(u)):t(u)}function s(u){return pe(u)&&a++<i?(e.consume(u),s):(e.exit(n),t(u))}}const xI={tokenize:kI};function kI(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),Ee(e,t,"linePrefix")}function i(s){return e.enter("paragraph"),a(s)}function a(s){const u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,o(s)}function o(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return ie(s)?(e.consume(s),e.exit("chunkText"),a):(e.consume(s),o)}}const AI={tokenize:SI},y0={tokenize:DI};function SI(e){const t=this,n=[];let r=0,i,a,o;return s;function s(b){if(r<n.length){const S=n[r];return t.containerState=S[1],e.attempt(S[0].continuation,u,l)(b)}return l(b)}function u(b){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&E();const S=t.events.length;let N=S,k;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){k=t.events[N][1].end;break}m(r);let O=S;for(;O<t.events.length;)t.events[O][1].end={...k},O++;return zt(t.events,N+1,0,t.events.slice(S)),t.events.length=O,l(b)}return s(b)}function l(b){if(r===n.length){if(!i)return p(b);if(i.currentConstruct&&i.currentConstruct.concrete)return g(b);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(y0,f,d)(b)}function f(b){return i&&E(),m(r),p(b)}function d(b){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,g(b)}function p(b){return t.containerState={},e.attempt(y0,h,g)(b)}function h(b){return r++,n.push([t.currentConstruct,t.containerState]),p(b)}function g(b){if(b===null){i&&E(),m(0),e.consume(b);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),y(b)}function y(b){if(b===null){T(e.exit("chunkFlow"),!0),m(0),e.consume(b);return}return ie(b)?(e.consume(b),T(e.exit("chunkFlow")),r=0,t.interrupt=void 0,s):(e.consume(b),y)}function T(b,S){const N=t.sliceStream(b);if(S&&N.push(null),b.previous=a,a&&(a.next=b),a=b,i.defineSkip(b.start),i.write(N),t.parser.lazy[b.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<o&&(!i.events[k][1].end||i.events[k][1].end.offset>o))return;const O=t.events.length;let M=O,j,I;for(;M--;)if(t.events[M][0]==="exit"&&t.events[M][1].type==="chunkFlow"){if(j){I=t.events[M][1].end;break}j=!0}for(m(r),k=O;k<t.events.length;)t.events[k][1].end={...I},k++;zt(t.events,M+1,0,t.events.slice(O)),t.events.length=k}}function m(b){let S=n.length;for(;S-- >b;){const N=n[S];t.containerState=N[1],N[0].exit.call(t,e)}n.length=b}function E(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function DI(e,t,n){return Ee(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Da(e){if(e===null||ke(e)||Ii(e))return 1;if(Ol(e))return 2}function Rl(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}const of={name:"attention",resolveAll:_I,tokenize:II};function _I(e,t){let n=-1,r,i,a,o,s,u,l,f;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d={...e[r][1].end},p={...e[n][1].start};E0(d,-u),E0(p,u),o={type:u>1?"strongSequence":"emphasisSequence",start:d,end:{...e[r][1].end}},s={type:u>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:p},a={type:u>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:u>1?"strong":"emphasis",start:{...o.start},end:{...s.end}},e[r][1].end={...o.start},e[n][1].start={...s.end},l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=Kt(l,[["enter",e[r][1],t],["exit",e[r][1],t]])),l=Kt(l,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",a,t]]),l=Kt(l,Rl(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=Kt(l,[["exit",a,t],["enter",s,t],["exit",s,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(f=2,l=Kt(l,[["enter",e[n][1],t],["exit",e[n][1],t]])):f=0,zt(e,r-1,n-r+3,l),n=r+l.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function II(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Da(r);let a;return o;function o(u){return a=u,e.enter("attentionSequence"),s(u)}function s(u){if(u===a)return e.consume(u),s;const l=e.exit("attentionSequence"),f=Da(u),d=!f||f===2&&i||n.includes(u),p=!i||i===2&&f||n.includes(r);return l._open=!!(a===42?d:d&&(i||!p)),l._close=!!(a===42?p:p&&(f||!d)),t(u)}}function E0(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const NI={name:"autolink",tokenize:LI};function LI(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(h){return yt(h)?(e.consume(h),o):h===64?n(h):l(h)}function o(h){return h===43||h===45||h===46||ut(h)?(r=1,s(h)):l(h)}function s(h){return h===58?(e.consume(h),r=0,u):(h===43||h===45||h===46||ut(h))&&r++<32?(e.consume(h),s):(r=0,l(h))}function u(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||Ku(h)?n(h):(e.consume(h),u)}function l(h){return h===64?(e.consume(h),f):vI(h)?(e.consume(h),l):n(h)}function f(h){return ut(h)?d(h):n(h)}function d(h){return h===46?(e.consume(h),r=0,f):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):p(h)}function p(h){if((h===45||ut(h))&&r++<63){const g=h===45?p:d;return e.consume(h),g}return n(h)}}const gs={partial:!0,tokenize:OI};function OI(e,t,n){return r;function r(a){return pe(a)?Ee(e,i,"linePrefix")(a):i(a)}function i(a){return a===null||ie(a)?t(a):n(a)}}const Mb={continuation:{tokenize:PI},exit:FI,name:"blockQuote",tokenize:RI};function RI(e,t,n){const r=this;return i;function i(o){if(o===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),a}return n(o)}function a(o){return pe(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function PI(e,t,n){const r=this;return i;function i(o){return pe(o)?Ee(e,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return e.attempt(Mb,t,n)(o)}}function FI(e){e.exit("blockQuote")}const Bb={name:"characterEscape",tokenize:MI};function MI(e,t,n){return r;function r(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),i}function i(a){return CI(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(a)}}const Ub={name:"characterReference",tokenize:BI};function BI(e,t,n){const r=this;let i=0,a,o;return s;function s(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),u}function u(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),l):(e.enter("characterReferenceValue"),a=31,o=ut,f(d))}function l(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,o=wI,f):(e.enter("characterReferenceValue"),a=7,o=af,f(d))}function f(d){if(d===59&&i){const p=e.exit("characterReferenceValue");return o===ut&&!zh(r.sliceSerialize(p))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(d)&&i++<a?(e.consume(d),f):n(d)}}const b0={partial:!0,tokenize:HI},T0={concrete:!0,name:"codeFenced",tokenize:UI};function UI(e,t,n){const r=this,i={partial:!0,tokenize:N};let a=0,o=0,s;return u;function u(k){return l(k)}function l(k){const O=r.events[r.events.length-1];return a=O&&O[1].type==="linePrefix"?O[2].sliceSerialize(O[1],!0).length:0,s=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(k)}function f(k){return k===s?(o++,e.consume(k),f):o<3?n(k):(e.exit("codeFencedFenceSequence"),pe(k)?Ee(e,d,"whitespace")(k):d(k))}function d(k){return k===null||ie(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(b0,y,S)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(k))}function p(k){return k===null||ie(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(k)):pe(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Ee(e,h,"whitespace")(k)):k===96&&k===s?n(k):(e.consume(k),p)}function h(k){return k===null||ie(k)?d(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(k))}function g(k){return k===null||ie(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(k)):k===96&&k===s?n(k):(e.consume(k),g)}function y(k){return e.attempt(i,S,T)(k)}function T(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),m}function m(k){return a>0&&pe(k)?Ee(e,E,"linePrefix",a+1)(k):E(k)}function E(k){return k===null||ie(k)?e.check(b0,y,S)(k):(e.enter("codeFlowValue"),b(k))}function b(k){return k===null||ie(k)?(e.exit("codeFlowValue"),E(k)):(e.consume(k),b)}function S(k){return e.exit("codeFenced"),t(k)}function N(k,O,M){let j=0;return I;function I(X){return k.enter("lineEnding"),k.consume(X),k.exit("lineEnding"),z}function z(X){return k.enter("codeFencedFence"),pe(X)?Ee(k,B,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(X):B(X)}function B(X){return X===s?(k.enter("codeFencedFenceSequence"),J(X)):M(X)}function J(X){return X===s?(j++,k.consume(X),J):j>=o?(k.exit("codeFencedFenceSequence"),pe(X)?Ee(k,Y,"whitespace")(X):Y(X)):M(X)}function Y(X){return X===null||ie(X)?(k.exit("codeFencedFence"),O(X)):M(X)}}}function HI(e,t,n){const r=this;return i;function i(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}const Dc={name:"codeIndented",tokenize:zI},jI={partial:!0,tokenize:WI};function zI(e,t,n){const r=this;return i;function i(l){return e.enter("codeIndented"),Ee(e,a,"linePrefix",5)(l)}function a(l){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?o(l):n(l)}function o(l){return l===null?u(l):ie(l)?e.attempt(jI,o,u)(l):(e.enter("codeFlowValue"),s(l))}function s(l){return l===null||ie(l)?(e.exit("codeFlowValue"),o(l)):(e.consume(l),s)}function u(l){return e.exit("codeIndented"),t(l)}}function WI(e,t,n){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):ie(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):Ee(e,a,"linePrefix",5)(o)}function a(o){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(o):ie(o)?i(o):n(o)}}const YI={name:"codeText",previous:$I,resolve:VI,tokenize:qI};function VI(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function $I(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function qI(e,t,n){let r=0,i,a;return o;function o(d){return e.enter("codeText"),e.enter("codeTextSequence"),s(d)}function s(d){return d===96?(e.consume(d),r++,s):(e.exit("codeTextSequence"),u(d))}function u(d){return d===null?n(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),u):d===96?(a=e.enter("codeTextSequence"),i=0,f(d)):ie(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),u):(e.enter("codeTextData"),l(d))}function l(d){return d===null||d===32||d===96||ie(d)?(e.exit("codeTextData"),u(d)):(e.consume(d),l)}function f(d){return d===96?(e.consume(d),i++,f):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(a.type="codeTextData",l(d))}}class QI{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ro(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ro(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ro(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ro(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ro(this.left,n.reverse())}}}function ro(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Hb(e){const t={};let n=-1,r,i,a,o,s,u,l;const f=new QI(e);for(;++n<f.length;){for(;n in t;)n=t[n];if(r=f.get(n),n&&r[1].type==="chunkFlow"&&f.get(n-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,a=0,a<u.length&&u[a][1].type==="lineEndingBlank"&&(a+=2),a<u.length&&u[a][1].type==="content"))for(;++a<u.length&&u[a][1].type!=="content";)u[a][1].type==="chunkText"&&(u[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,GI(f,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=f.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},s=f.slice(i,n),s.unshift(r),f.splice(i,n-i+1,s))}}return zt(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!l}function GI(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const a=[];let o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const s=o.events,u=[],l={};let f,d,p=-1,h=n,g=0,y=0;const T=[y];for(;h;){for(;e.get(++i)[1]!==h;);a.push(i),h._tokenizer||(f=r.sliceStream(h),h.next||f.push(null),d&&o.defineSkip(h.start),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(f),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=h,h=h.next}for(h=n;++p<s.length;)s[p][0]==="exit"&&s[p-1][0]==="enter"&&s[p][1].type===s[p-1][1].type&&s[p][1].start.line!==s[p][1].end.line&&(y=p+1,T.push(y),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(o.events=[],h?(h._tokenizer=void 0,h.previous=void 0):T.pop(),p=T.length;p--;){const m=s.slice(T[p],T[p+1]),E=a.pop();u.push([E,E+m.length-1]),e.splice(E,2,m)}for(u.reverse(),p=-1;++p<u.length;)l[g+u[p][0]]=g+u[p][1],g+=u[p][1]-u[p][0]-1;return l}const KI={resolve:JI,tokenize:ZI},XI={partial:!0,tokenize:eN};function JI(e){return Hb(e),e}function ZI(e,t){let n;return r;function r(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(s)}function i(s){return s===null?a(s):ie(s)?e.check(XI,o,a)(s):(e.consume(s),i)}function a(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function o(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function eN(e,t,n){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),Ee(e,a,"linePrefix")}function a(o){if(o===null||ie(o))return n(o);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function jb(e,t,n,r,i,a,o,s,u){const l=u||Number.POSITIVE_INFINITY;let f=0;return d;function d(m){return m===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(m),e.exit(a),p):m===null||m===32||m===41||Ku(m)?n(m):(e.enter(r),e.enter(o),e.enter(s),e.enter("chunkString",{contentType:"string"}),y(m))}function p(m){return m===62?(e.enter(a),e.consume(m),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),h(m))}function h(m){return m===62?(e.exit("chunkString"),e.exit(s),p(m)):m===null||m===60||ie(m)?n(m):(e.consume(m),m===92?g:h)}function g(m){return m===60||m===62||m===92?(e.consume(m),h):h(m)}function y(m){return!f&&(m===null||m===41||ke(m))?(e.exit("chunkString"),e.exit(s),e.exit(o),e.exit(r),t(m)):f<l&&m===40?(e.consume(m),f++,y):m===41?(e.consume(m),f--,y):m===null||m===32||m===40||Ku(m)?n(m):(e.consume(m),m===92?T:y)}function T(m){return m===40||m===41||m===92?(e.consume(m),y):y(m)}}function zb(e,t,n,r,i,a){const o=this;let s=0,u;return l;function l(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(a),f}function f(h){return s>999||h===null||h===91||h===93&&!u||h===94&&!s&&"_hiddenFootnoteSupport"in o.parser.constructs?n(h):h===93?(e.exit(a),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):ie(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===null||h===91||h===93||ie(h)||s++>999?(e.exit("chunkString"),f(h)):(e.consume(h),u||(u=!pe(h)),h===92?p:d)}function p(h){return h===91||h===92||h===93?(e.consume(h),s++,d):d(h)}}function Wb(e,t,n,r,i,a){let o;return s;function s(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),o=p===40?41:p,u):n(p)}function u(p){return p===o?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(a),l(p))}function l(p){return p===o?(e.exit(a),u(o)):p===null?n(p):ie(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),Ee(e,l,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===o||p===null||ie(p)?(e.exit("chunkString"),l(p)):(e.consume(p),p===92?d:f)}function d(p){return p===o||p===92?(e.consume(p),f):f(p)}}function xo(e,t){let n;return r;function r(i){return ie(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):pe(i)?Ee(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const tN={name:"definition",tokenize:rN},nN={partial:!0,tokenize:iN};function rN(e,t,n){const r=this;let i;return a;function a(h){return e.enter("definition"),o(h)}function o(h){return zb.call(r,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function s(h){return i=En(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),u):n(h)}function u(h){return ke(h)?xo(e,l)(h):l(h)}function l(h){return jb(e,f,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function f(h){return e.attempt(nN,d,d)(h)}function d(h){return pe(h)?Ee(e,p,"whitespace")(h):p(h)}function p(h){return h===null||ie(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function iN(e,t,n){return r;function r(s){return ke(s)?xo(e,i)(s):n(s)}function i(s){return Wb(e,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function a(s){return pe(s)?Ee(e,o,"whitespace")(s):o(s)}function o(s){return s===null||ie(s)?t(s):n(s)}}const aN={name:"hardBreakEscape",tokenize:oN};function oN(e,t,n){return r;function r(a){return e.enter("hardBreakEscape"),e.consume(a),i}function i(a){return ie(a)?(e.exit("hardBreakEscape"),t(a)):n(a)}}const sN={name:"headingAtx",resolve:uN,tokenize:lN};function uN(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},a={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},zt(e,r,n-r+1,[["enter",i,t],["enter",a,t],["exit",a,t],["exit",i,t]])),e}function lN(e,t,n){let r=0;return i;function i(f){return e.enter("atxHeading"),a(f)}function a(f){return e.enter("atxHeadingSequence"),o(f)}function o(f){return f===35&&r++<6?(e.consume(f),o):f===null||ke(f)?(e.exit("atxHeadingSequence"),s(f)):n(f)}function s(f){return f===35?(e.enter("atxHeadingSequence"),u(f)):f===null||ie(f)?(e.exit("atxHeading"),t(f)):pe(f)?Ee(e,s,"whitespace")(f):(e.enter("atxHeadingText"),l(f))}function u(f){return f===35?(e.consume(f),u):(e.exit("atxHeadingSequence"),s(f))}function l(f){return f===null||f===35||ke(f)?(e.exit("atxHeadingText"),s(f)):(e.consume(f),l)}}const cN=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],v0=["pre","script","style","textarea"],dN={concrete:!0,name:"htmlFlow",resolveTo:pN,tokenize:mN},fN={partial:!0,tokenize:yN},hN={partial:!0,tokenize:gN};function pN(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function mN(e,t,n){const r=this;let i,a,o,s,u;return l;function l(A){return f(A)}function f(A){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(A),d}function d(A){return A===33?(e.consume(A),p):A===47?(e.consume(A),a=!0,y):A===63?(e.consume(A),i=3,r.interrupt?t:w):yt(A)?(e.consume(A),o=String.fromCharCode(A),T):n(A)}function p(A){return A===45?(e.consume(A),i=2,h):A===91?(e.consume(A),i=5,s=0,g):yt(A)?(e.consume(A),i=4,r.interrupt?t:w):n(A)}function h(A){return A===45?(e.consume(A),r.interrupt?t:w):n(A)}function g(A){const ae="CDATA[";return A===ae.charCodeAt(s++)?(e.consume(A),s===ae.length?r.interrupt?t:B:g):n(A)}function y(A){return yt(A)?(e.consume(A),o=String.fromCharCode(A),T):n(A)}function T(A){if(A===null||A===47||A===62||ke(A)){const ae=A===47,Ce=o.toLowerCase();return!ae&&!a&&v0.includes(Ce)?(i=1,r.interrupt?t(A):B(A)):cN.includes(o.toLowerCase())?(i=6,ae?(e.consume(A),m):r.interrupt?t(A):B(A)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(A):a?E(A):b(A))}return A===45||ut(A)?(e.consume(A),o+=String.fromCharCode(A),T):n(A)}function m(A){return A===62?(e.consume(A),r.interrupt?t:B):n(A)}function E(A){return pe(A)?(e.consume(A),E):I(A)}function b(A){return A===47?(e.consume(A),I):A===58||A===95||yt(A)?(e.consume(A),S):pe(A)?(e.consume(A),b):I(A)}function S(A){return A===45||A===46||A===58||A===95||ut(A)?(e.consume(A),S):N(A)}function N(A){return A===61?(e.consume(A),k):pe(A)?(e.consume(A),N):b(A)}function k(A){return A===null||A===60||A===61||A===62||A===96?n(A):A===34||A===39?(e.consume(A),u=A,O):pe(A)?(e.consume(A),k):M(A)}function O(A){return A===u?(e.consume(A),u=null,j):A===null||ie(A)?n(A):(e.consume(A),O)}function M(A){return A===null||A===34||A===39||A===47||A===60||A===61||A===62||A===96||ke(A)?N(A):(e.consume(A),M)}function j(A){return A===47||A===62||pe(A)?b(A):n(A)}function I(A){return A===62?(e.consume(A),z):n(A)}function z(A){return A===null||ie(A)?B(A):pe(A)?(e.consume(A),z):n(A)}function B(A){return A===45&&i===2?(e.consume(A),ee):A===60&&i===1?(e.consume(A),ne):A===62&&i===4?(e.consume(A),re):A===63&&i===3?(e.consume(A),w):A===93&&i===5?(e.consume(A),H):ie(A)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(fN,te,J)(A)):A===null||ie(A)?(e.exit("htmlFlowData"),J(A)):(e.consume(A),B)}function J(A){return e.check(hN,Y,te)(A)}function Y(A){return e.enter("lineEnding"),e.consume(A),e.exit("lineEnding"),X}function X(A){return A===null||ie(A)?J(A):(e.enter("htmlFlowData"),B(A))}function ee(A){return A===45?(e.consume(A),w):B(A)}function ne(A){return A===47?(e.consume(A),o="",F):B(A)}function F(A){if(A===62){const ae=o.toLowerCase();return v0.includes(ae)?(e.consume(A),re):B(A)}return yt(A)&&o.length<8?(e.consume(A),o+=String.fromCharCode(A),F):B(A)}function H(A){return A===93?(e.consume(A),w):B(A)}function w(A){return A===62?(e.consume(A),re):A===45&&i===2?(e.consume(A),w):B(A)}function re(A){return A===null||ie(A)?(e.exit("htmlFlowData"),te(A)):(e.consume(A),re)}function te(A){return e.exit("htmlFlow"),t(A)}}function gN(e,t,n){const r=this;return i;function i(o){return ie(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a):n(o)}function a(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function yN(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(gs,t,n)}}const EN={name:"htmlText",tokenize:bN};function bN(e,t,n){const r=this;let i,a,o;return s;function s(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),u}function u(w){return w===33?(e.consume(w),l):w===47?(e.consume(w),N):w===63?(e.consume(w),b):yt(w)?(e.consume(w),M):n(w)}function l(w){return w===45?(e.consume(w),f):w===91?(e.consume(w),a=0,g):yt(w)?(e.consume(w),E):n(w)}function f(w){return w===45?(e.consume(w),h):n(w)}function d(w){return w===null?n(w):w===45?(e.consume(w),p):ie(w)?(o=d,ne(w)):(e.consume(w),d)}function p(w){return w===45?(e.consume(w),h):d(w)}function h(w){return w===62?ee(w):w===45?p(w):d(w)}function g(w){const re="CDATA[";return w===re.charCodeAt(a++)?(e.consume(w),a===re.length?y:g):n(w)}function y(w){return w===null?n(w):w===93?(e.consume(w),T):ie(w)?(o=y,ne(w)):(e.consume(w),y)}function T(w){return w===93?(e.consume(w),m):y(w)}function m(w){return w===62?ee(w):w===93?(e.consume(w),m):y(w)}function E(w){return w===null||w===62?ee(w):ie(w)?(o=E,ne(w)):(e.consume(w),E)}function b(w){return w===null?n(w):w===63?(e.consume(w),S):ie(w)?(o=b,ne(w)):(e.consume(w),b)}function S(w){return w===62?ee(w):b(w)}function N(w){return yt(w)?(e.consume(w),k):n(w)}function k(w){return w===45||ut(w)?(e.consume(w),k):O(w)}function O(w){return ie(w)?(o=O,ne(w)):pe(w)?(e.consume(w),O):ee(w)}function M(w){return w===45||ut(w)?(e.consume(w),M):w===47||w===62||ke(w)?j(w):n(w)}function j(w){return w===47?(e.consume(w),ee):w===58||w===95||yt(w)?(e.consume(w),I):ie(w)?(o=j,ne(w)):pe(w)?(e.consume(w),j):ee(w)}function I(w){return w===45||w===46||w===58||w===95||ut(w)?(e.consume(w),I):z(w)}function z(w){return w===61?(e.consume(w),B):ie(w)?(o=z,ne(w)):pe(w)?(e.consume(w),z):j(w)}function B(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),i=w,J):ie(w)?(o=B,ne(w)):pe(w)?(e.consume(w),B):(e.consume(w),Y)}function J(w){return w===i?(e.consume(w),i=void 0,X):w===null?n(w):ie(w)?(o=J,ne(w)):(e.consume(w),J)}function Y(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===47||w===62||ke(w)?j(w):(e.consume(w),Y)}function X(w){return w===47||w===62||ke(w)?j(w):n(w)}function ee(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}function ne(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),F}function F(w){return pe(w)?Ee(e,H,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):H(w)}function H(w){return e.enter("htmlTextData"),o(w)}}const Wh={name:"labelEnd",resolveAll:CN,resolveTo:xN,tokenize:kN},TN={tokenize:AN},vN={tokenize:SN},wN={tokenize:DN};function CN(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&zt(e,0,e.length,n),e}function xN(e,t){let n=e.length,r=0,i,a,o,s;for(;n--;)if(i=e[n][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);const u={type:e[a][1].type==="labelLink"?"link":"image",start:{...e[a][1].start},end:{...e[e.length-1][1].end}},l={type:"label",start:{...e[a][1].start},end:{...e[o][1].end}},f={type:"labelText",start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return s=[["enter",u,t],["enter",l,t]],s=Kt(s,e.slice(a+1,a+r+3)),s=Kt(s,[["enter",f,t]]),s=Kt(s,Rl(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),s=Kt(s,[["exit",f,t],e[o-2],e[o-1],["exit",l,t]]),s=Kt(s,e.slice(o+1)),s=Kt(s,[["exit",u,t]]),zt(e,a,e.length,s),e}function kN(e,t,n){const r=this;let i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){a=r.events[i][1];break}return s;function s(p){return a?a._inactive?d(p):(o=r.parser.defined.includes(En(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),u):n(p)}function u(p){return p===40?e.attempt(TN,f,o?f:d)(p):p===91?e.attempt(vN,f,o?l:d)(p):o?f(p):d(p)}function l(p){return e.attempt(wN,f,d)(p)}function f(p){return t(p)}function d(p){return a._balanced=!0,n(p)}}function AN(e,t,n){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),i}function i(d){return ke(d)?xo(e,a)(d):a(d)}function a(d){return d===41?f(d):jb(e,o,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function o(d){return ke(d)?xo(e,u)(d):f(d)}function s(d){return n(d)}function u(d){return d===34||d===39||d===40?Wb(e,l,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):f(d)}function l(d){return ke(d)?xo(e,f)(d):f(d)}function f(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),t):n(d)}}function SN(e,t,n){const r=this;return i;function i(s){return zb.call(r,e,a,o,"reference","referenceMarker","referenceString")(s)}function a(s){return r.parser.defined.includes(En(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function o(s){return n(s)}}function DN(e,t,n){return r;function r(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),i}function i(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),t):n(a)}}const _N={name:"labelStartImage",resolveAll:Wh.resolveAll,tokenize:IN};function IN(e,t,n){const r=this;return i;function i(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),a}function a(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),o):n(s)}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const NN={name:"labelStartLink",resolveAll:Wh.resolveAll,tokenize:LN};function LN(e,t,n){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}const _c={name:"lineEnding",tokenize:ON};function ON(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Ee(e,t,"linePrefix")}}const hu={name:"thematicBreak",tokenize:RN};function RN(e,t,n){let r=0,i;return a;function a(l){return e.enter("thematicBreak"),o(l)}function o(l){return i=l,s(l)}function s(l){return l===i?(e.enter("thematicBreakSequence"),u(l)):r>=3&&(l===null||ie(l))?(e.exit("thematicBreak"),t(l)):n(l)}function u(l){return l===i?(e.consume(l),r++,u):(e.exit("thematicBreakSequence"),pe(l)?Ee(e,s,"whitespace")(l):s(l))}}const Ct={continuation:{tokenize:BN},exit:HN,name:"list",tokenize:MN},PN={partial:!0,tokenize:jN},FN={partial:!0,tokenize:UN};function MN(e,t,n){const r=this,i=r.events[r.events.length-1];let a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(h){const g=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:af(h)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(hu,n,l)(h):l(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(h)}return n(h)}function u(h){return af(h)&&++o<10?(e.consume(h),u):(!r.interrupt||o<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),l(h)):n(h)}function l(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(gs,r.interrupt?n:f,e.attempt(PN,p,d))}function f(h){return r.containerState.initialBlankLine=!0,a++,p(h)}function d(h){return pe(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),p):n(h)}function p(h){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function BN(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(gs,i,a);function i(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Ee(e,t,"listItemIndent",r.containerState.size+1)(s)}function a(s){return r.containerState.furtherBlankLines||!pe(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(FN,t,o)(s))}function o(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,Ee(e,e.attempt(Ct,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function UN(e,t,n){const r=this;return Ee(e,i,"listItemIndent",r.containerState.size+1);function i(a){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(a):n(a)}}function HN(e){e.exit(this.containerState.type)}function jN(e,t,n){const r=this;return Ee(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){const o=r.events[r.events.length-1];return!pe(a)&&o&&o[1].type==="listItemPrefixWhitespace"?t(a):n(a)}}const w0={name:"setextUnderline",resolveTo:zN,tokenize:WN};function zN(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!a&&e[n][1].type==="definition"&&(a=n);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",a?(e.splice(i,0,["enter",o,t]),e.splice(a+1,0,["exit",e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function WN(e,t,n){const r=this;let i;return a;function a(l){let f=r.events.length,d;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){d=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),i=l,o(l)):n(l)}function o(l){return e.enter("setextHeadingLineSequence"),s(l)}function s(l){return l===i?(e.consume(l),s):(e.exit("setextHeadingLineSequence"),pe(l)?Ee(e,u,"lineSuffix")(l):u(l))}function u(l){return l===null||ie(l)?(e.exit("setextHeadingLine"),t(l)):n(l)}}const YN={tokenize:VN};function VN(e){const t=this,n=e.attempt(gs,r,e.attempt(this.parser.constructs.flowInitial,i,Ee(e,e.attempt(this.parser.constructs.flow,i,e.attempt(KI,i)),"linePrefix")));return n;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const $N={resolveAll:Vb()},qN=Yb("string"),QN=Yb("text");function Yb(e){return{resolveAll:Vb(e==="text"?GN:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],a=n.attempt(i,o,s);return o;function o(f){return l(f)?a(f):s(f)}function s(f){if(f===null){n.consume(f);return}return n.enter("data"),n.consume(f),u}function u(f){return l(f)?(n.exit("data"),a(f)):(n.consume(f),u)}function l(f){if(f===null)return!0;const d=i[f];let p=-1;if(d)for(;++p<d.length;){const h=d[p];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Vb(e){return t;function t(n,r){let i=-1,a;for(;++i<=n.length;)a===void 0?n[i]&&n[i][1].type==="data"&&(a=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==a+2&&(n[a][1].end=n[i-1][1].end,n.splice(a+2,i-a-2),i=a+2),a=void 0);return e?e(n,r):n}}function GN(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let a=i.length,o=-1,s=0,u;for(;a--;){const l=i[a];if(typeof l=="string"){for(o=l.length;l.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(l===-2)u=!0,s++;else if(l!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){const l={type:n===e.length||u||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...l.start},r.start.offset===r.end.offset?Object.assign(r,l):(e.splice(n,0,["enter",l,t],["exit",l,t]),n+=2)}n++}return e}const KN={42:Ct,43:Ct,45:Ct,48:Ct,49:Ct,50:Ct,51:Ct,52:Ct,53:Ct,54:Ct,55:Ct,56:Ct,57:Ct,62:Mb},XN={91:tN},JN={[-2]:Dc,[-1]:Dc,32:Dc},ZN={35:sN,42:hu,45:[w0,hu],60:dN,61:w0,95:hu,96:T0,126:T0},eL={38:Ub,92:Bb},tL={[-5]:_c,[-4]:_c,[-3]:_c,33:_N,38:Ub,42:of,60:[NI,EN],91:NN,92:[aN,Bb],93:Wh,95:of,96:YI},nL={null:[of,$N]},rL={null:[42,95]},iL={null:[]},aL=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:rL,contentInitial:XN,disable:iL,document:KN,flow:ZN,flowInitial:JN,insideSpan:nL,string:eL,text:tL},Symbol.toStringTag,{value:"Module"}));function oL(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},a=[];let o=[],s=[];const u={attempt:O(N),check:O(k),consume:E,enter:b,exit:S,interrupt:O(k,{interrupt:!0})},l={code:null,containerState:{},defineSkip:y,events:[],now:g,parser:e,previous:null,sliceSerialize:p,sliceStream:h,write:d};let f=t.tokenize.call(l,u);return t.resolveAll&&a.push(t),l;function d(z){return o=Kt(o,z),T(),o[o.length-1]!==null?[]:(M(t,0),l.events=Rl(a,l.events,l),l.events)}function p(z,B){return uL(h(z),B)}function h(z){return sL(o,z)}function g(){const{_bufferIndex:z,_index:B,line:J,column:Y,offset:X}=r;return{_bufferIndex:z,_index:B,line:J,column:Y,offset:X}}function y(z){i[z.line]=z.column,I()}function T(){let z;for(;r._index<o.length;){const B=o[r._index];if(typeof B=="string")for(z=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===z&&r._bufferIndex<B.length;)m(B.charCodeAt(r._bufferIndex));else m(B)}}function m(z){f=f(z)}function E(z){ie(z)?(r.line++,r.column=1,r.offset+=z===-3?2:1,I()):z!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=z}function b(z,B){const J=B||{};return J.type=z,J.start=g(),l.events.push(["enter",J,l]),s.push(J),J}function S(z){const B=s.pop();return B.end=g(),l.events.push(["exit",B,l]),B}function N(z,B){M(z,B.from)}function k(z,B){B.restore()}function O(z,B){return J;function J(Y,X,ee){let ne,F,H,w;return Array.isArray(Y)?te(Y):"tokenize"in Y?te([Y]):re(Y);function re(ye){return ge;function ge(ft){const ht=ft!==null&&ye[ft],vt=ft!==null&&ye.null,Lt=[...Array.isArray(ht)?ht:ht?[ht]:[],...Array.isArray(vt)?vt:vt?[vt]:[]];return te(Lt)(ft)}}function te(ye){return ne=ye,F=0,ye.length===0?ee:A(ye[F])}function A(ye){return ge;function ge(ft){return w=j(),H=ye,ye.partial||(l.currentConstruct=ye),ye.name&&l.parser.constructs.disable.null.includes(ye.name)?Ce():ye.tokenize.call(B?Object.assign(Object.create(l),B):l,u,ae,Ce)(ft)}}function ae(ye){return z(H,w),X}function Ce(ye){return w.restore(),++F<ne.length?A(ne[F]):ee}}}function M(z,B){z.resolveAll&&!a.includes(z)&&a.push(z),z.resolve&&zt(l.events,B,l.events.length-B,z.resolve(l.events.slice(B),l)),z.resolveTo&&(l.events=z.resolveTo(l.events,l))}function j(){const z=g(),B=l.previous,J=l.currentConstruct,Y=l.events.length,X=Array.from(s);return{from:Y,restore:ee};function ee(){r=z,l.previous=B,l.currentConstruct=J,l.events.length=Y,s=X,I()}}function I(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function sL(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex;let o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){const s=o[0];typeof s=="string"?o[0]=s.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function uL(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const a=e[n];let o;if(typeof a=="string")o=a;else switch(a){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join("")}function lL(e){const r={constructs:Pb([aL,...(e||{}).extensions||[]]),content:i(xI),defined:[],document:i(AI),flow:i(YN),lazy:{},string:i(qN),text:i(QN)};return r;function i(a){return o;function o(s){return oL(r,a,s)}}}function cL(e){for(;!Hb(e););return e}const C0=/[\0\t\n\r]/g;function dL(){let e=1,t="",n=!0,r;return i;function i(a,o,s){const u=[];let l,f,d,p,h;for(a=t+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a)),d=0,t="",n&&(a.charCodeAt(0)===65279&&d++,n=void 0);d<a.length;){if(C0.lastIndex=d,l=C0.exec(a),p=l&&l.index!==void 0?l.index:a.length,h=a.charCodeAt(p),!l){t=a.slice(d);break}if(h===10&&d===p&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),d<p&&(u.push(a.slice(d,p)),e+=p-d),h){case 0:{u.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,u.push(-2);e++<f;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}d=p+1}return s&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}const fL=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function hL(e){return e.replace(fL,pL)}function pL(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),a=i===120||i===88;return Fb(n.slice(a?2:1),a?16:10)}return zh(n)||e}const $b={}.hasOwnProperty;function mL(e,t,n){return typeof t!="string"&&(n=t,t=void 0),gL(n)(cL(lL(n).document().write(dL()(e,t,!0))))}function gL(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(Wn),autolinkProtocol:j,autolinkEmail:j,atxHeading:a(Mi),blockQuote:a(vt),characterEscape:j,characterReference:j,codeFenced:a(Lt),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(Lt,o),codeText:a(lr,o),codeTextData:j,data:j,codeFlowValue:j,definition:a(kn),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(Fi),hardBreakEscape:a(ri),hardBreakTrailing:a(ri),htmlFlow:a(Bi,o),htmlFlowData:j,htmlText:a(Bi,o),htmlTextData:j,image:a(ii),label:o,link:a(Wn),listItem:a(ai),listItemValue:p,listOrdered:a($a,d),listUnordered:a($a),paragraph:a(ws),reference:A,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(Mi),strong:a(Yn),thematicBreak:a(Wl)},exit:{atxHeading:u(),atxHeadingSequence:N,autolink:u(),autolinkEmail:ht,autolinkProtocol:ft,blockQuote:u(),characterEscapeValue:I,characterReferenceMarkerHexadecimal:Ce,characterReferenceMarkerNumeric:Ce,characterReferenceValue:ye,characterReference:ge,codeFenced:u(T),codeFencedFence:y,codeFencedFenceInfo:h,codeFencedFenceMeta:g,codeFlowValue:I,codeIndented:u(m),codeText:u(X),codeTextData:I,data:I,definition:u(),definitionDestinationString:S,definitionLabelString:E,definitionTitleString:b,emphasis:u(),hardBreakEscape:u(B),hardBreakTrailing:u(B),htmlFlow:u(J),htmlFlowData:I,htmlText:u(Y),htmlTextData:I,image:u(ne),label:H,labelText:F,lineEnding:z,link:u(ee),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:ae,resourceDestinationString:w,resourceTitleString:re,resource:te,setextHeading:u(M),setextHeadingLineSequence:O,setextHeadingText:k,strong:u(),thematicBreak:u()}};qb(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(P){let G={type:"root",children:[]};const oe={stack:[G],tokenStack:[],config:t,enter:s,exit:l,buffer:o,resume:f,data:n},he=[];let Te=-1;for(;++Te<P.length;)if(P[Te][1].type==="listOrdered"||P[Te][1].type==="listUnordered")if(P[Te][0]==="enter")he.push(Te);else{const Ot=he.pop();Te=i(P,Ot,Te)}for(Te=-1;++Te<P.length;){const Ot=t[P[Te][0]];$b.call(Ot,P[Te][1].type)&&Ot[P[Te][1].type].call(Object.assign({sliceSerialize:P[Te][2].sliceSerialize},oe),P[Te][1])}if(oe.tokenStack.length>0){const Ot=oe.tokenStack[oe.tokenStack.length-1];(Ot[1]||x0).call(oe,void 0,Ot[0])}for(G.position={start:Er(P.length>0?P[0][1].start:{line:1,column:1,offset:0}),end:Er(P.length>0?P[P.length-2][1].end:{line:1,column:1,offset:0})},Te=-1;++Te<t.transforms.length;)G=t.transforms[Te](G)||G;return G}function i(P,G,oe){let he=G-1,Te=-1,Ot=!1,An,Rt,$t,cr;for(;++he<=oe;){const We=P[he];switch(We[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{We[0]==="enter"?Te++:Te--,cr=void 0;break}case"lineEndingBlank":{We[0]==="enter"&&(An&&!cr&&!Te&&!$t&&($t=he),cr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:cr=void 0}if(!Te&&We[0]==="enter"&&We[1].type==="listItemPrefix"||Te===-1&&We[0]==="exit"&&(We[1].type==="listUnordered"||We[1].type==="listOrdered")){if(An){let dr=he;for(Rt=void 0;dr--;){const rn=P[dr];if(rn[1].type==="lineEnding"||rn[1].type==="lineEndingBlank"){if(rn[0]==="exit")continue;Rt&&(P[Rt][1].type="lineEndingBlank",Ot=!0),rn[1].type="lineEnding",Rt=dr}else if(!(rn[1].type==="linePrefix"||rn[1].type==="blockQuotePrefix"||rn[1].type==="blockQuotePrefixWhitespace"||rn[1].type==="blockQuoteMarker"||rn[1].type==="listItemIndent"))break}$t&&(!Rt||$t<Rt)&&(An._spread=!0),An.end=Object.assign({},Rt?P[Rt][1].start:We[1].end),P.splice(Rt||he,0,["exit",An,We[2]]),he++,oe++}if(We[1].type==="listItemPrefix"){const dr={type:"listItem",_spread:!1,start:Object.assign({},We[1].start),end:void 0};An=dr,P.splice(he,0,["enter",dr,We[2]]),he++,oe++,$t=void 0,cr=!0}}}return P[G][1]._spread=Ot,oe}function a(P,G){return oe;function oe(he){s.call(this,P(he),he),G&&G.call(this,he)}}function o(){this.stack.push({type:"fragment",children:[]})}function s(P,G,oe){this.stack[this.stack.length-1].children.push(P),this.stack.push(P),this.tokenStack.push([G,oe||void 0]),P.position={start:Er(G.start),end:void 0}}function u(P){return G;function G(oe){P&&P.call(this,oe),l.call(this,oe)}}function l(P,G){const oe=this.stack.pop(),he=this.tokenStack.pop();if(he)he[0].type!==P.type&&(G?G.call(this,P,he[0]):(he[1]||x0).call(this,P,he[0]));else throw new Error("Cannot close `"+P.type+"` ("+Co({start:P.start,end:P.end})+"): it’s not open");oe.position.end=Er(P.end)}function f(){return jh(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function p(P){if(this.data.expectingFirstListItemValue){const G=this.stack[this.stack.length-2];G.start=Number.parseInt(this.sliceSerialize(P),10),this.data.expectingFirstListItemValue=void 0}}function h(){const P=this.resume(),G=this.stack[this.stack.length-1];G.lang=P}function g(){const P=this.resume(),G=this.stack[this.stack.length-1];G.meta=P}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function T(){const P=this.resume(),G=this.stack[this.stack.length-1];G.value=P.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const P=this.resume(),G=this.stack[this.stack.length-1];G.value=P.replace(/(\r?\n|\r)$/g,"")}function E(P){const G=this.resume(),oe=this.stack[this.stack.length-1];oe.label=G,oe.identifier=En(this.sliceSerialize(P)).toLowerCase()}function b(){const P=this.resume(),G=this.stack[this.stack.length-1];G.title=P}function S(){const P=this.resume(),G=this.stack[this.stack.length-1];G.url=P}function N(P){const G=this.stack[this.stack.length-1];if(!G.depth){const oe=this.sliceSerialize(P).length;G.depth=oe}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function O(P){const G=this.stack[this.stack.length-1];G.depth=this.sliceSerialize(P).codePointAt(0)===61?1:2}function M(){this.data.setextHeadingSlurpLineEnding=void 0}function j(P){const oe=this.stack[this.stack.length-1].children;let he=oe[oe.length-1];(!he||he.type!=="text")&&(he=zl(),he.position={start:Er(P.start),end:void 0},oe.push(he)),this.stack.push(he)}function I(P){const G=this.stack.pop();G.value+=this.sliceSerialize(P),G.position.end=Er(P.end)}function z(P){const G=this.stack[this.stack.length-1];if(this.data.atHardBreak){const oe=G.children[G.children.length-1];oe.position.end=Er(P.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(G.type)&&(j.call(this,P),I.call(this,P))}function B(){this.data.atHardBreak=!0}function J(){const P=this.resume(),G=this.stack[this.stack.length-1];G.value=P}function Y(){const P=this.resume(),G=this.stack[this.stack.length-1];G.value=P}function X(){const P=this.resume(),G=this.stack[this.stack.length-1];G.value=P}function ee(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const G=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=G,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function ne(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const G=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=G,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function F(P){const G=this.sliceSerialize(P),oe=this.stack[this.stack.length-2];oe.label=hL(G),oe.identifier=En(G).toLowerCase()}function H(){const P=this.stack[this.stack.length-1],G=this.resume(),oe=this.stack[this.stack.length-1];if(this.data.inReference=!0,oe.type==="link"){const he=P.children;oe.children=he}else oe.alt=G}function w(){const P=this.resume(),G=this.stack[this.stack.length-1];G.url=P}function re(){const P=this.resume(),G=this.stack[this.stack.length-1];G.title=P}function te(){this.data.inReference=void 0}function A(){this.data.referenceType="collapsed"}function ae(P){const G=this.resume(),oe=this.stack[this.stack.length-1];oe.label=G,oe.identifier=En(this.sliceSerialize(P)).toLowerCase(),this.data.referenceType="full"}function Ce(P){this.data.characterReferenceType=P.type}function ye(P){const G=this.sliceSerialize(P),oe=this.data.characterReferenceType;let he;oe?(he=Fb(G,oe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):he=zh(G);const Te=this.stack[this.stack.length-1];Te.value+=he}function ge(P){const G=this.stack.pop();G.position.end=Er(P.end)}function ft(P){I.call(this,P);const G=this.stack[this.stack.length-1];G.url=this.sliceSerialize(P)}function ht(P){I.call(this,P);const G=this.stack[this.stack.length-1];G.url="mailto:"+this.sliceSerialize(P)}function vt(){return{type:"blockquote",children:[]}}function Lt(){return{type:"code",lang:null,meta:null,value:""}}function lr(){return{type:"inlineCode",value:""}}function kn(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Fi(){return{type:"emphasis",children:[]}}function Mi(){return{type:"heading",depth:0,children:[]}}function ri(){return{type:"break"}}function Bi(){return{type:"html",value:""}}function ii(){return{type:"image",title:null,url:"",alt:null}}function Wn(){return{type:"link",title:null,url:"",children:[]}}function $a(P){return{type:"list",ordered:P.type==="listOrdered",start:null,spread:P._spread,children:[]}}function ai(P){return{type:"listItem",spread:P._spread,checked:null,children:[]}}function ws(){return{type:"paragraph",children:[]}}function Yn(){return{type:"strong",children:[]}}function zl(){return{type:"text",value:""}}function Wl(){return{type:"thematicBreak"}}}function Er(e){return{line:e.line,column:e.column,offset:e.offset}}function qb(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?qb(e,r):yL(e,r)}}function yL(e,t){let n;for(n in t)if($b.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function x0(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Co({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Co({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Co({start:t.start,end:t.end})+") is still open")}function EL(e){const t=this;t.parser=n;function n(r){return mL(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function bL(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function TL(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function vL(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let a={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(t,a),a}function wL(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function CL(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function xL(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=ja(r.toLowerCase()),a=e.footnoteOrder.indexOf(r);let o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);const u={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,u);const l={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,l),e.applyData(t,l)}function kL(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function AL(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Qb(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function SL(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Qb(e,t);const i={src:ja(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function DL(e,t){const n={src:ja(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function _L(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function IL(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Qb(e,t);const i={href:ja(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function NL(e,t){const n={href:ja(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function LL(e,t,n){const r=e.all(t),i=n?OL(n):Gb(t),a={},o=[];if(typeof t.checked=="boolean"){const f=r[0];let d;f&&f.type==="element"&&f.tagName==="p"?d=f:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const f=r[s];(i||s!==0||f.type!=="element"||f.tagName!=="p")&&o.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?o.push(...f.children):o.push(f)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&o.push({type:"text",value:`
`});const l={type:"element",tagName:"li",properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function OL(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Gb(n[r])}return t}function Gb(e){const t=e.spread;return t??e.children.length>1}function RL(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const a={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function PL(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function FL(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function ML(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function BL(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],o),i.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=jn(t.children[1]),u=Ll(t.children[t.children.length-1]);s&&u&&(o.position={start:s,end:u}),i.push(o)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function UL(e,t,n){const r=n?n.children:void 0,a=(r?r.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,s=o?o.length:t.children.length;let u=-1;const l=[];for(;++u<s;){const d=t.children[u],p={},h=o?o[u]:void 0;h&&(p.align=h);let g={type:"element",tagName:a,properties:p,children:[]};d&&(g.children=e.all(d),e.patch(d,g),g=e.applyData(d,g)),l.push(g)}const f={type:"element",tagName:"tr",properties:{},children:e.wrap(l,!0)};return e.patch(t,f),e.applyData(t,f)}function HL(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const k0=9,A0=32;function jL(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const a=[];for(;r;)a.push(S0(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(S0(t.slice(i),i>0,!1)),a.join("")}function S0(e,t,n){let r=0,i=e.length;if(t){let a=e.codePointAt(r);for(;a===k0||a===A0;)r++,a=e.codePointAt(r)}if(n){let a=e.codePointAt(i-1);for(;a===k0||a===A0;)i--,a=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function zL(e,t){const n={type:"text",value:jL(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function WL(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const YL={blockquote:bL,break:TL,code:vL,delete:wL,emphasis:CL,footnoteReference:xL,heading:kL,html:AL,imageReference:SL,image:DL,inlineCode:_L,linkReference:IL,link:NL,listItem:LL,list:RL,paragraph:PL,root:FL,strong:ML,table:BL,tableCell:HL,tableRow:UL,text:zL,thematicBreak:WL,toml:$s,yaml:$s,definition:$s,footnoteDefinition:$s};function $s(){}const Kb=-1,Pl=0,ko=1,Xu=2,Yh=3,Vh=4,$h=5,qh=6,Xb=7,Jb=8,D0=typeof self=="object"?self:globalThis,VL=(e,t)=>{const n=(i,a)=>(e.set(a,i),i),r=i=>{if(e.has(i))return e.get(i);const[a,o]=t[i];switch(a){case Pl:case Kb:return n(o,i);case ko:{const s=n([],i);for(const u of o)s.push(r(u));return s}case Xu:{const s=n({},i);for(const[u,l]of o)s[r(u)]=r(l);return s}case Yh:return n(new Date(o),i);case Vh:{const{source:s,flags:u}=o;return n(new RegExp(s,u),i)}case $h:{const s=n(new Map,i);for(const[u,l]of o)s.set(r(u),r(l));return s}case qh:{const s=n(new Set,i);for(const u of o)s.add(r(u));return s}case Xb:{const{name:s,message:u}=o;return n(new D0[s](u),i)}case Jb:return n(BigInt(o),i);case"BigInt":return n(Object(BigInt(o)),i);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:s}=new Uint8Array(o);return n(new DataView(s),o)}}return n(new D0[a](o),i)};return r},_0=e=>VL(new Map,e)(0),Hi="",{toString:$L}={},{keys:qL}=Object,io=e=>{const t=typeof e;if(t!=="object"||!e)return[Pl,t];const n=$L.call(e).slice(8,-1);switch(n){case"Array":return[ko,Hi];case"Object":return[Xu,Hi];case"Date":return[Yh,Hi];case"RegExp":return[Vh,Hi];case"Map":return[$h,Hi];case"Set":return[qh,Hi];case"DataView":return[ko,n]}return n.includes("Array")?[ko,n]:n.includes("Error")?[Xb,n]:[Xu,n]},qs=([e,t])=>e===Pl&&(t==="function"||t==="symbol"),QL=(e,t,n,r)=>{const i=(o,s)=>{const u=r.push(o)-1;return n.set(s,u),u},a=o=>{if(n.has(o))return n.get(o);let[s,u]=io(o);switch(s){case Pl:{let f=o;switch(u){case"bigint":s=Jb,f=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);f=null;break;case"undefined":return i([Kb],o)}return i([s,f],o)}case ko:{if(u){let p=o;return u==="DataView"?p=new Uint8Array(o.buffer):u==="ArrayBuffer"&&(p=new Uint8Array(o)),i([u,[...p]],o)}const f=[],d=i([s,f],o);for(const p of o)f.push(a(p));return d}case Xu:{if(u)switch(u){case"BigInt":return i([u,o.toString()],o);case"Boolean":case"Number":case"String":return i([u,o.valueOf()],o)}if(t&&"toJSON"in o)return a(o.toJSON());const f=[],d=i([s,f],o);for(const p of qL(o))(e||!qs(io(o[p])))&&f.push([a(p),a(o[p])]);return d}case Yh:return i([s,o.toISOString()],o);case Vh:{const{source:f,flags:d}=o;return i([s,{source:f,flags:d}],o)}case $h:{const f=[],d=i([s,f],o);for(const[p,h]of o)(e||!(qs(io(p))||qs(io(h))))&&f.push([a(p),a(h)]);return d}case qh:{const f=[],d=i([s,f],o);for(const p of o)(e||!qs(io(p)))&&f.push(a(p));return d}}const{message:l}=o;return i([s,{name:u,message:l}],o)};return a},I0=(e,{json:t,lossy:n}={})=>{const r=[];return QL(!(t||n),!!t,new Map,r)(e),r},_a=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?_0(I0(e,t)):structuredClone(e):(e,t)=>_0(I0(e,t));function GL(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function KL(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function XL(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||GL,r=e.options.footnoteBackLabel||KL,i=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let u=-1;for(;++u<e.footnoteOrder.length;){const l=e.footnoteById.get(e.footnoteOrder[u]);if(!l)continue;const f=e.all(l),d=String(l.identifier).toUpperCase(),p=ja(d.toLowerCase());let h=0;const g=[],y=e.footnoteCounts.get(d);for(;y!==void 0&&++h<=y;){g.length>0&&g.push({type:"text",value:" "});let E=typeof n=="string"?n:n(u,h);typeof E=="string"&&(E={type:"text",value:E}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,h),className:["data-footnote-backref"]},children:Array.isArray(E)?E:[E]})}const T=f[f.length-1];if(T&&T.type==="element"&&T.tagName==="p"){const E=T.children[T.children.length-1];E&&E.type==="text"?E.value+=" ":T.children.push({type:"text",value:" "}),T.children.push(...g)}else f.push(...g);const m={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(f,!0)};e.patch(l,m),s.push(m)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{..._a(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const Fl=function(e){if(e==null)return t6;if(typeof e=="function")return Ml(e);if(typeof e=="object")return Array.isArray(e)?JL(e):ZL(e);if(typeof e=="string")return e6(e);throw new Error("Expected function, string, or object as test")};function JL(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Fl(e[n]);return Ml(r);function r(...i){let a=-1;for(;++a<t.length;)if(t[a].apply(this,i))return!0;return!1}}function ZL(e){const t=e;return Ml(n);function n(r){const i=r;let a;for(a in e)if(i[a]!==t[a])return!1;return!0}}function e6(e){return Ml(t);function t(n){return n&&n.type===e}}function Ml(e){return t;function t(n,r,i){return!!(n6(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function t6(){return!0}function n6(e){return e!==null&&typeof e=="object"&&"type"in e}const Zb=[],r6=!0,sf=!1,i6="skip";function eT(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const a=Fl(i),o=r?-1:1;s(e,void 0,[])();function s(u,l,f){const d=u&&typeof u=="object"?u:{};if(typeof d.type=="string"){const h=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(u.type+(h?"<"+h+">":""))+")"})}return p;function p(){let h=Zb,g,y,T;if((!t||a(u,l,f[f.length-1]||void 0))&&(h=a6(n(u,f)),h[0]===sf))return h;if("children"in u&&u.children){const m=u;if(m.children&&h[0]!==i6)for(y=(r?m.children.length:-1)+o,T=f.concat(m);y>-1&&y<m.children.length;){const E=m.children[y];if(g=s(E,y,T)(),g[0]===sf)return g;y=typeof g[1]=="number"?g[1]:y+o}}return h}}}function a6(e){return Array.isArray(e)?e:typeof e=="number"?[r6,e]:e==null?Zb:[e]}function ys(e,t,n,r){let i,a,o;typeof t=="function"&&typeof n!="function"?(a=void 0,o=t,i=n):(a=t,o=n,i=r),eT(e,a,s,i);function s(u,l){const f=l[l.length-1],d=f?f.children.indexOf(u):void 0;return o(u,d,f)}}const uf={}.hasOwnProperty,o6={};function s6(e,t){const n=t||o6,r=new Map,i=new Map,a=new Map,o={...YL,...n.handlers},s={all:l,applyData:l6,definitionById:r,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:o,one:u,options:n,patch:u6,wrap:d6};return ys(e,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const d=f.type==="definition"?r:i,p=String(f.identifier).toUpperCase();d.has(p)||d.set(p,f)}}),s;function u(f,d){const p=f.type,h=s.handlers[p];if(uf.call(s.handlers,p)&&h)return h(s,f,d);if(s.options.passThrough&&s.options.passThrough.includes(p)){if("children"in f){const{children:y,...T}=f,m=_a(T);return m.children=s.all(f),m}return _a(f)}return(s.options.unknownHandler||c6)(s,f,d)}function l(f){const d=[];if("children"in f){const p=f.children;let h=-1;for(;++h<p.length;){const g=s.one(p[h],f);if(g){if(h&&p[h-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=N0(g.value)),!Array.isArray(g)&&g.type==="element")){const y=g.children[0];y&&y.type==="text"&&(y.value=N0(y.value))}Array.isArray(g)?d.push(...g):d.push(g)}}}return d}}function u6(e,t){e.position&&(t.position=K3(e))}function l6(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,a=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o}}n.type==="element"&&a&&Object.assign(n.properties,_a(a)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function c6(e,t){const n=t.data||{},r="value"in t&&!(uf.call(n,"hProperties")||uf.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function d6(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function N0(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function L0(e,t){const n=s6(e,t),r=n.one(e,void 0),i=XL(n),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&a.children.push({type:"text",value:`
`},i),a}function f6(e,t){return e&&"run"in e?async function(n,r){const i=L0(n,{file:r,...t});await e.run(i,r)}:function(n,r){return L0(n,{file:r,...e||t})}}function O0(e){if(e)throw e}var pu=Object.prototype.hasOwnProperty,tT=Object.prototype.toString,R0=Object.defineProperty,P0=Object.getOwnPropertyDescriptor,F0=function(t){return typeof Array.isArray=="function"?Array.isArray(t):tT.call(t)==="[object Array]"},M0=function(t){if(!t||tT.call(t)!=="[object Object]")return!1;var n=pu.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&pu.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||pu.call(t,i)},B0=function(t,n){R0&&n.name==="__proto__"?R0(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},U0=function(t,n){if(n==="__proto__")if(pu.call(t,n)){if(P0)return P0(t,n).value}else return;return t[n]},h6=function e(){var t,n,r,i,a,o,s=arguments[0],u=1,l=arguments.length,f=!1;for(typeof s=="boolean"&&(f=s,s=arguments[1]||{},u=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});u<l;++u)if(t=arguments[u],t!=null)for(n in t)r=U0(s,n),i=U0(t,n),s!==i&&(f&&i&&(M0(i)||(a=F0(i)))?(a?(a=!1,o=r&&F0(r)?r:[]):o=r&&M0(r)?r:{},B0(s,{name:n,newValue:e(f,o,i)})):typeof i<"u"&&B0(s,{name:n,newValue:i}));return s};const Ic=nl(h6);function lf(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function p6(){const e=[],t={run:n,use:r};return t;function n(...i){let a=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);s(null,...i);function s(u,...l){const f=e[++a];let d=-1;if(u){o(u);return}for(;++d<i.length;)(l[d]===null||l[d]===void 0)&&(l[d]=i[d]);i=l,f?m6(f,s)(...l):o(null,...l)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function m6(e,t){let n;return r;function r(...o){const s=e.length>o.length;let u;s&&o.push(i);try{u=e.apply(this,o)}catch(l){const f=l;if(s&&n)throw f;return i(f)}s||(u&&u.then&&typeof u.then=="function"?u.then(a,i):u instanceof Error?i(u):a(u))}function i(o,...s){n||(n=!0,t(o,...s))}function a(o){i(null,o)}}const _n={basename:g6,dirname:y6,extname:E6,join:b6,sep:"/"};function g6(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Es(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function y6(e){if(Es(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function E6(e){Es(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){const s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function b6(...e){let t=-1,n;for(;++t<e.length;)Es(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":T6(n)}function T6(e){Es(e);const t=e.codePointAt(0)===47;let n=v6(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function v6(e,t){let n="",r=0,i=-1,a=0,o=-1,s,u;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else{if(s===47)break;s=47}if(s===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),i=o,a=0;continue}}else if(n.length>0){n="",r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function Es(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const w6={cwd:C6};function C6(){return"/"}function cf(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function x6(e){if(typeof e=="string")e=new URL(e);else if(!cf(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return k6(e)}function k6(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Nc=["history","path","basename","stem","extname","dirname"];class nT{constructor(t){let n;t?cf(t)?n={path:t}:typeof t=="string"||A6(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":w6.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Nc.length;){const a=Nc[r];a in n&&n[a]!==void 0&&n[a]!==null&&(this[a]=a==="history"?[...n[a]]:n[a])}let i;for(i in n)Nc.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?_n.basename(this.path):void 0}set basename(t){Oc(t,"basename"),Lc(t,"basename"),this.path=_n.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?_n.dirname(this.path):void 0}set dirname(t){H0(this.basename,"dirname"),this.path=_n.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?_n.extname(this.path):void 0}set extname(t){if(Lc(t,"extname"),H0(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=_n.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){cf(t)&&(t=x6(t)),Oc(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?_n.basename(this.path,this.extname):void 0}set stem(t){Oc(t,"stem"),Lc(t,"stem"),this.path=_n.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new ct(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Lc(e,t){if(e&&e.includes(_n.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+_n.sep+"`")}function Oc(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function H0(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function A6(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const S6=function(e){const r=this.constructor.prototype,i=r[e],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,r),a},D6={}.hasOwnProperty;class Qh extends S6{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=p6()}copy(){const t=new Qh;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ic(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Fc("data",this.frozen),this.namespace[t]=n,this):D6.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Fc("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Qs(t),r=this.parser||this.Parser;return Rc("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Rc("process",this.parser||this.Parser),Pc("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(a,o){const s=Qs(t),u=r.parse(s);r.run(u,s,function(f,d,p){if(f||!d||!p)return l(f);const h=d,g=r.stringify(h,p);N6(g)?p.value=g:p.result=g,l(f,p)});function l(f,d){f||!d?o(f):a?a(d):n(void 0,d)}}}processSync(t){let n=!1,r;return this.freeze(),Rc("processSync",this.parser||this.Parser),Pc("processSync",this.compiler||this.Compiler),this.process(t,i),z0("processSync","process",n),r;function i(a,o){n=!0,O0(a),r=o}}run(t,n,r){j0(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?a(void 0,r):new Promise(a);function a(o,s){const u=Qs(n);i.run(t,u,l);function l(f,d,p){const h=d||t;f?s(f):o?o(h):r(void 0,h,p)}}}runSync(t,n){let r=!1,i;return this.run(t,n,a),z0("runSync","run",r),i;function a(o,s){O0(o),i=s,r=!0}}stringify(t,n){this.freeze();const r=Qs(n),i=this.compiler||this.Compiler;return Pc("stringify",i),j0(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Fc("use",this.frozen),t!=null)if(typeof t=="function")u(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function a(l){if(typeof l=="function")u(l,[]);else if(typeof l=="object")if(Array.isArray(l)){const[f,...d]=l;u(f,d)}else o(l);else throw new TypeError("Expected usable value, not `"+l+"`")}function o(l){if(!("plugins"in l)&&!("settings"in l))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(l.plugins),l.settings&&(i.settings=Ic(!0,i.settings,l.settings))}function s(l){let f=-1;if(l!=null)if(Array.isArray(l))for(;++f<l.length;){const d=l[f];a(d)}else throw new TypeError("Expected a list of plugins, not `"+l+"`")}function u(l,f){let d=-1,p=-1;for(;++d<r.length;)if(r[d][0]===l){p=d;break}if(p===-1)r.push([l,...f]);else if(f.length>0){let[h,...g]=f;const y=r[p][1];lf(y)&&lf(h)&&(h=Ic(!0,y,h)),r[p]=[l,h,...g]}}}}const _6=new Qh().freeze();function Rc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Pc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Fc(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function j0(e){if(!lf(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function z0(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Qs(e){return I6(e)?e:new nT(e)}function I6(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function N6(e){return typeof e=="string"||L6(e)}function L6(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const O6="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",W0=[],Y0={allowDangerousHtml:!0},R6=/^(https?|ircs?|mailto|xmpp)$/i,P6=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function F6(e){const t=M6(e),n=B6(e);return U6(t.runSync(t.parse(n),n),e)}function M6(e){const t=e.rehypePlugins||W0,n=e.remarkPlugins||W0,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Y0}:Y0;return _6().use(EL).use(n).use(f6,r).use(t)}function B6(e){const t=e.children||"",n=new nT;return typeof t=="string"&&(n.value=t),n}function U6(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,u=t.urlTransform||H6;for(const f of P6)Object.hasOwn(t,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+O6+f.id,void 0);return ys(e,l),tI(e,{Fragment:_.Fragment,components:i,ignoreInvalidStyle:!0,jsx:_.jsx,jsxs:_.jsxs,passKeys:!0,passNode:!0});function l(f,d,p){if(f.type==="raw"&&p&&typeof d=="number")return o?p.children.splice(d,1):p.children[d]={type:"text",value:f.value},d;if(f.type==="element"){let h;for(h in Sc)if(Object.hasOwn(Sc,h)&&Object.hasOwn(f.properties,h)){const g=f.properties[h],y=Sc[h];(y===null||y.includes(f.tagName))&&(f.properties[h]=u(String(g||""),h,f))}}if(f.type==="element"){let h=n?!n.includes(f.tagName):a?a.includes(f.tagName):!1;if(!h&&r&&typeof d=="number"&&(h=!r(f,d,p)),h&&p&&typeof d=="number")return s&&f.children?p.children.splice(d,1,...f.children):p.children.splice(d,1),d}}}function H6(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||R6.test(e.slice(0,t))?e:""}function V0(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function j6(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function z6(e,t,n){const i=Fl((n||{}).ignore||[]),a=W6(t);let o=-1;for(;++o<a.length;)eT(e,"text",s);function s(l,f){let d=-1,p;for(;++d<f.length;){const h=f[d],g=p?p.children:void 0;if(i(h,g?g.indexOf(h):void 0,p))return;p=h}if(p)return u(l,f)}function u(l,f){const d=f[f.length-1],p=a[o][0],h=a[o][1];let g=0;const T=d.children.indexOf(l);let m=!1,E=[];p.lastIndex=0;let b=p.exec(l.value);for(;b;){const S=b.index,N={index:b.index,input:b.input,stack:[...f,l]};let k=h(...b,N);if(typeof k=="string"&&(k=k.length>0?{type:"text",value:k}:void 0),k===!1?p.lastIndex=S+1:(g!==S&&E.push({type:"text",value:l.value.slice(g,S)}),Array.isArray(k)?E.push(...k):k&&E.push(k),g=S+b[0].length,m=!0),!p.global)break;b=p.exec(l.value)}return m?(g<l.value.length&&E.push({type:"text",value:l.value.slice(g)}),d.children.splice(T,1,...E)):E=[l],T+E.length}}function W6(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([Y6(i[0]),V6(i[1])])}return t}function Y6(e){return typeof e=="string"?new RegExp(j6(e),"g"):e}function V6(e){return typeof e=="function"?e:function(){return e}}const Mc="phrasing",Bc=["autolink","link","image","label"];function $6(){return{transforms:[Z6],enter:{literalAutolink:Q6,literalAutolinkEmail:Uc,literalAutolinkHttp:Uc,literalAutolinkWww:Uc},exit:{literalAutolink:J6,literalAutolinkEmail:X6,literalAutolinkHttp:G6,literalAutolinkWww:K6}}}function q6(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Mc,notInConstruct:Bc},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Mc,notInConstruct:Bc},{character:":",before:"[ps]",after:"\\/",inConstruct:Mc,notInConstruct:Bc}]}}function Q6(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Uc(e){this.config.enter.autolinkProtocol.call(this,e)}function G6(e){this.config.exit.autolinkProtocol.call(this,e)}function K6(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function X6(e){this.config.exit.autolinkEmail.call(this,e)}function J6(e){this.exit(e)}function Z6(e){z6(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,eO],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),tO]],{ignore:["link","linkReference"]})}function eO(e,t,n,r,i){let a="";if(!rT(i)||(/^w/i.test(t)&&(n=t+n,t="",a="http://"),!nO(n)))return!1;const o=rO(n+r);if(!o[0])return!1;const s={type:"link",title:null,url:a+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[s,{type:"text",value:o[1]}]:s}function tO(e,t,n,r){return!rT(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function nO(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function rO(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=V0(e,"(");let a=V0(e,")");for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),a++;return[e,n]}function rT(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||Ii(n)||Ol(n))&&(!t||n!==47)}iT.peek=fO;function iO(){this.buffer()}function aO(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function oO(){this.buffer()}function sO(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function uO(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=En(this.sliceSerialize(e)).toLowerCase(),n.label=t}function lO(e){this.exit(e)}function cO(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=En(this.sliceSerialize(e)).toLowerCase(),n.label=t}function dO(e){this.exit(e)}function fO(){return"["}function iT(e,t,n,r){const i=n.createTracker(r);let a=i.move("[^");const o=n.enter("footnoteReference"),s=n.enter("reference");return a+=i.move(n.safe(n.associationId(e),{after:"]",before:a})),s(),o(),a+=i.move("]"),a}function hO(){return{enter:{gfmFootnoteCallString:iO,gfmFootnoteCall:aO,gfmFootnoteDefinitionLabelString:oO,gfmFootnoteDefinition:sO},exit:{gfmFootnoteCallString:uO,gfmFootnoteCall:lO,gfmFootnoteDefinitionLabelString:cO,gfmFootnoteDefinition:dO}}}function pO(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:iT},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,a,o){const s=a.createTracker(o);let u=s.move("[^");const l=a.enter("footnoteDefinition"),f=a.enter("label");return u+=s.move(a.safe(a.associationId(r),{before:u,after:"]"})),f(),u+=s.move("]:"),r.children&&r.children.length>0&&(s.shift(4),u+=s.move((t?`
`:" ")+a.indentLines(a.containerFlow(r,s.current()),t?aT:mO))),l(),u}}function mO(e,t,n){return t===0?e:aT(e,t,n)}function aT(e,t,n){return(n?"":"    ")+e}const gO=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];oT.peek=vO;function yO(){return{canContainEols:["delete"],enter:{strikethrough:bO},exit:{strikethrough:TO}}}function EO(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:gO}],handlers:{delete:oT}}}function bO(e){this.enter({type:"delete",children:[]},e)}function TO(e){this.exit(e)}function oT(e,t,n,r){const i=n.createTracker(r),a=n.enter("strikethrough");let o=i.move("~~");return o+=n.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),a(),o}function vO(){return"~"}function wO(e){return e.length}function CO(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||wO,a=[],o=[],s=[],u=[];let l=0,f=-1;for(;++f<e.length;){const y=[],T=[];let m=-1;for(e[f].length>l&&(l=e[f].length);++m<e[f].length;){const E=xO(e[f][m]);if(n.alignDelimiters!==!1){const b=i(E);T[m]=b,(u[m]===void 0||b>u[m])&&(u[m]=b)}y.push(E)}o[f]=y,s[f]=T}let d=-1;if(typeof r=="object"&&"length"in r)for(;++d<l;)a[d]=$0(r[d]);else{const y=$0(r);for(;++d<l;)a[d]=y}d=-1;const p=[],h=[];for(;++d<l;){const y=a[d];let T="",m="";y===99?(T=":",m=":"):y===108?T=":":y===114&&(m=":");let E=n.alignDelimiters===!1?1:Math.max(1,u[d]-T.length-m.length);const b=T+"-".repeat(E)+m;n.alignDelimiters!==!1&&(E=T.length+E+m.length,E>u[d]&&(u[d]=E),h[d]=E),p[d]=b}o.splice(1,0,p),s.splice(1,0,h),f=-1;const g=[];for(;++f<o.length;){const y=o[f],T=s[f];d=-1;const m=[];for(;++d<l;){const E=y[d]||"";let b="",S="";if(n.alignDelimiters!==!1){const N=u[d]-(T[d]||0),k=a[d];k===114?b=" ".repeat(N):k===99?N%2?(b=" ".repeat(N/2+.5),S=" ".repeat(N/2-.5)):(b=" ".repeat(N/2),S=b):S=" ".repeat(N)}n.delimiterStart!==!1&&!d&&m.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&E==="")&&(n.delimiterStart!==!1||d)&&m.push(" "),n.alignDelimiters!==!1&&m.push(b),m.push(E),n.alignDelimiters!==!1&&m.push(S),n.padding!==!1&&m.push(" "),(n.delimiterEnd!==!1||d!==l-1)&&m.push("|")}g.push(n.delimiterEnd===!1?m.join("").replace(/ +$/,""):m.join(""))}return g.join(`
`)}function xO(e){return e==null?"":String(e)}function $0(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}const q0={}.hasOwnProperty;function sT(e,t){const n=t||{};function r(i,...a){let o=r.invalid;const s=r.handlers;if(i&&q0.call(i,e)){const u=String(i[e]);o=q0.call(s,u)?s[u]:r.unknown}if(o)return o.call(this,i,...a)}return r.handlers=n.handlers||{},r.invalid=n.invalid,r.unknown=n.unknown,r}function kO(e,t,n,r){const i=n.enter("blockquote"),a=n.createTracker(r);a.move("> "),a.shift(2);const o=n.indentLines(n.containerFlow(e,a.current()),AO);return i(),o}function AO(e,t,n){return">"+(n?"":" ")+e}function SO(e,t){return Q0(e,t.inConstruct,!0)&&!Q0(e,t.notInConstruct,!1)}function Q0(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function G0(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&SO(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function DO(e,t){const n=String(e);let r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function _O(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function IO(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function NO(e,t,n,r){const i=IO(n),a=e.value||"",o=i==="`"?"GraveAccent":"Tilde";if(_O(e,n)){const d=n.enter("codeIndented"),p=n.indentLines(a,LO);return d(),p}const s=n.createTracker(r),u=i.repeat(Math.max(DO(a,i)+1,3)),l=n.enter("codeFenced");let f=s.move(u);if(e.lang){const d=n.enter(`codeFencedLang${o}`);f+=s.move(n.safe(e.lang,{before:f,after:" ",encode:["`"],...s.current()})),d()}if(e.lang&&e.meta){const d=n.enter(`codeFencedMeta${o}`);f+=s.move(" "),f+=s.move(n.safe(e.meta,{before:f,after:`
`,encode:["`"],...s.current()})),d()}return f+=s.move(`
`),a&&(f+=s.move(a+`
`)),f+=s.move(u),l(),f}function LO(e,t,n){return(n?"":"    ")+e}function Gh(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function OO(e,t,n,r){const i=Gh(n),a=i==='"'?"Quote":"Apostrophe",o=n.enter("definition");let s=n.enter("label");const u=n.createTracker(r);let l=u.move("[");return l+=u.move(n.safe(n.associationId(e),{before:l,after:"]",...u.current()})),l+=u.move("]: "),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),l+=u.move("<"),l+=u.move(n.safe(e.url,{before:l,after:">",...u.current()})),l+=u.move(">")):(s=n.enter("destinationRaw"),l+=u.move(n.safe(e.url,{before:l,after:e.title?" ":`
`,...u.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=u.move(" "+i),l+=u.move(n.safe(e.title,{before:l,after:i,...u.current()})),l+=u.move(i),s()),o(),l}function RO(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function rs(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Ju(e,t,n){const r=Da(e),i=Da(t);return r===void 0?i===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}uT.peek=PO;function uT(e,t,n,r){const i=RO(n),a=n.enter("emphasis"),o=n.createTracker(r),s=o.move(i);let u=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()}));const l=u.charCodeAt(0),f=Ju(r.before.charCodeAt(r.before.length-1),l,i);f.inside&&(u=rs(l)+u.slice(1));const d=u.charCodeAt(u.length-1),p=Ju(r.after.charCodeAt(0),d,i);p.inside&&(u=u.slice(0,-1)+rs(d));const h=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:p.outside,before:f.outside},s+u+h}function PO(e,t,n){return n.options.emphasis||"*"}function FO(e,t){let n=!1;return ys(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,sf}),!!((!e.depth||e.depth<3)&&jh(e)&&(t.options.setext||n))}function MO(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(FO(e,n)){const f=n.enter("headingSetext"),d=n.enter("phrasing"),p=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return d(),f(),p+`
`+(i===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}const o="#".repeat(i),s=n.enter("headingAtx"),u=n.enter("phrasing");a.move(o+" ");let l=n.containerPhrasing(e,{before:"# ",after:`
`,...a.current()});return/^[\t ]/.test(l)&&(l=rs(l.charCodeAt(0))+l.slice(1)),l=l?o+" "+l:o,n.options.closeAtx&&(l+=" "+o),u(),s(),l}lT.peek=BO;function lT(e){return e.value||""}function BO(){return"<"}cT.peek=UO;function cT(e,t,n,r){const i=Gh(n),a=i==='"'?"Quote":"Apostrophe",o=n.enter("image");let s=n.enter("label");const u=n.createTracker(r);let l=u.move("![");return l+=u.move(n.safe(e.alt,{before:l,after:"]",...u.current()})),l+=u.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),l+=u.move("<"),l+=u.move(n.safe(e.url,{before:l,after:">",...u.current()})),l+=u.move(">")):(s=n.enter("destinationRaw"),l+=u.move(n.safe(e.url,{before:l,after:e.title?" ":")",...u.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=u.move(" "+i),l+=u.move(n.safe(e.title,{before:l,after:i,...u.current()})),l+=u.move(i),s()),l+=u.move(")"),o(),l}function UO(){return"!"}dT.peek=HO;function dT(e,t,n,r){const i=e.referenceType,a=n.enter("imageReference");let o=n.enter("label");const s=n.createTracker(r);let u=s.move("![");const l=n.safe(e.alt,{before:u,after:"]",...s.current()});u+=s.move(l+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const d=n.safe(n.associationId(e),{before:u,after:"]",...s.current()});return o(),n.stack=f,a(),i==="full"||!l||l!==d?u+=s.move(d+"]"):i==="shortcut"?u=u.slice(0,-1):u+=s.move("]"),u}function HO(){return"!"}fT.peek=jO;function fT(e,t,n){let r=e.value||"",i="`",a=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++a<n.unsafe.length;){const o=n.unsafe[a],s=n.compilePattern(o);let u;if(o.atBreak)for(;u=s.exec(r);){let l=u.index;r.charCodeAt(l)===10&&r.charCodeAt(l-1)===13&&l--,r=r.slice(0,l)+" "+r.slice(u.index+1)}}return i+r+i}function jO(){return"`"}function hT(e,t){const n=jh(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}pT.peek=zO;function pT(e,t,n,r){const i=Gh(n),a=i==='"'?"Quote":"Apostrophe",o=n.createTracker(r);let s,u;if(hT(e,n)){const f=n.stack;n.stack=[],s=n.enter("autolink");let d=o.move("<");return d+=o.move(n.containerPhrasing(e,{before:d,after:">",...o.current()})),d+=o.move(">"),s(),n.stack=f,d}s=n.enter("link"),u=n.enter("label");let l=o.move("[");return l+=o.move(n.containerPhrasing(e,{before:l,after:"](",...o.current()})),l+=o.move("]("),u(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(u=n.enter("destinationLiteral"),l+=o.move("<"),l+=o.move(n.safe(e.url,{before:l,after:">",...o.current()})),l+=o.move(">")):(u=n.enter("destinationRaw"),l+=o.move(n.safe(e.url,{before:l,after:e.title?" ":")",...o.current()}))),u(),e.title&&(u=n.enter(`title${a}`),l+=o.move(" "+i),l+=o.move(n.safe(e.title,{before:l,after:i,...o.current()})),l+=o.move(i),u()),l+=o.move(")"),s(),l}function zO(e,t,n){return hT(e,n)?"<":"["}mT.peek=WO;function mT(e,t,n,r){const i=e.referenceType,a=n.enter("linkReference");let o=n.enter("label");const s=n.createTracker(r);let u=s.move("[");const l=n.containerPhrasing(e,{before:u,after:"]",...s.current()});u+=s.move(l+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const d=n.safe(n.associationId(e),{before:u,after:"]",...s.current()});return o(),n.stack=f,a(),i==="full"||!l||l!==d?u+=s.move(d+"]"):i==="shortcut"?u=u.slice(0,-1):u+=s.move("]"),u}function WO(){return"["}function Kh(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function YO(e){const t=Kh(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function VO(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function gT(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function $O(e,t,n,r){const i=n.enter("list"),a=n.bulletCurrent;let o=e.ordered?VO(n):Kh(n);const s=e.ordered?o==="."?")":".":YO(n);let u=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&f&&(!f.children||!f.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(u=!0),gT(n)===o&&f){let d=-1;for(;++d<e.children.length;){const p=e.children[d];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){u=!0;break}}}}u&&(o=s),n.bulletCurrent=o;const l=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),l}function qO(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function QO(e,t,n,r){const i=qO(n);let a=n.bulletCurrent||Kh(n);t&&t.type==="list"&&t.ordered&&(a=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);const s=n.createTracker(r);s.move(a+" ".repeat(o-a.length)),s.shift(o);const u=n.enter("listItem"),l=n.indentLines(n.containerFlow(e,s.current()),f);return u(),l;function f(d,p,h){return p?(h?"":" ".repeat(o))+d:(h?a:a+" ".repeat(o-a.length))+d}}function GO(e,t,n,r){const i=n.enter("paragraph"),a=n.enter("phrasing"),o=n.containerPhrasing(e,r);return a(),i(),o}const KO=Fl(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function XO(e,t,n,r){return(e.children.some(function(o){return KO(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function JO(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}yT.peek=ZO;function yT(e,t,n,r){const i=JO(n),a=n.enter("strong"),o=n.createTracker(r),s=o.move(i+i);let u=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()}));const l=u.charCodeAt(0),f=Ju(r.before.charCodeAt(r.before.length-1),l,i);f.inside&&(u=rs(l)+u.slice(1));const d=u.charCodeAt(u.length-1),p=Ju(r.after.charCodeAt(0),d,i);p.inside&&(u=u.slice(0,-1)+rs(d));const h=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:p.outside,before:f.outside},s+u+h}function ZO(e,t,n){return n.options.strong||"*"}function e4(e,t,n,r){return n.safe(e.value,r)}function t4(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function n4(e,t,n){const r=(gT(n)+(n.options.ruleSpaces?" ":"")).repeat(t4(n));return n.options.ruleSpaces?r.slice(0,-1):r}const ET={blockquote:kO,break:G0,code:NO,definition:OO,emphasis:uT,hardBreak:G0,heading:MO,html:lT,image:cT,imageReference:dT,inlineCode:fT,link:pT,linkReference:mT,list:$O,listItem:QO,paragraph:GO,root:XO,strong:yT,text:e4,thematicBreak:n4};function r4(){return{enter:{table:i4,tableData:K0,tableHeader:K0,tableRow:o4},exit:{codeText:s4,table:a4,tableData:Hc,tableHeader:Hc,tableRow:Hc}}}function i4(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function a4(e){this.exit(e),this.data.inTable=void 0}function o4(e){this.enter({type:"tableRow",children:[]},e)}function Hc(e){this.exit(e)}function K0(e){this.enter({type:"tableCell",children:[]},e)}function s4(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,u4));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function u4(e,t){return t==="|"?t:e}function l4(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:o,tableCell:u,tableRow:s}};function o(h,g,y,T){return l(f(h,y,T),h.align)}function s(h,g,y,T){const m=d(h,y,T),E=l([m]);return E.slice(0,E.indexOf(`
`))}function u(h,g,y,T){const m=y.enter("tableCell"),E=y.enter("phrasing"),b=y.containerPhrasing(h,{...T,before:a,after:a});return E(),m(),b}function l(h,g){return CO(h,{align:g,alignDelimiters:r,padding:n,stringLength:i})}function f(h,g,y){const T=h.children;let m=-1;const E=[],b=g.enter("table");for(;++m<T.length;)E[m]=d(T[m],g,y);return b(),E}function d(h,g,y){const T=h.children;let m=-1;const E=[],b=g.enter("tableRow");for(;++m<T.length;)E[m]=u(T[m],h,g,y);return b(),E}function p(h,g,y){let T=ET.inlineCode(h,g,y);return y.stack.includes("tableCell")&&(T=T.replace(/\|/g,"\\$&")),T}}function c4(){return{exit:{taskListCheckValueChecked:X0,taskListCheckValueUnchecked:X0,paragraph:f4}}}function d4(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:h4}}}function X0(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function f4(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let a=-1,o;for(;++a<i.length;){const s=i[a];if(s.type==="paragraph"){o=s;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function h4(e,t,n,r){const i=e.children[0],a=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",s=n.createTracker(r);a&&s.move(o);let u=ET.listItem(e,t,n,{...r,...s.current()});return a&&(u=u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),u;function l(f){return f+o}}function p4(){return[$6(),hO(),yO(),r4(),c4()]}function m4(e){return{extensions:[q6(),pO(e),EO(),l4(e),d4()]}}const g4={tokenize:w4,partial:!0},bT={tokenize:C4,partial:!0},TT={tokenize:x4,partial:!0},vT={tokenize:k4,partial:!0},y4={tokenize:A4,partial:!0},wT={name:"wwwAutolink",tokenize:T4,previous:xT},CT={name:"protocolAutolink",tokenize:v4,previous:kT},ur={name:"emailAutolink",tokenize:b4,previous:AT},zn={};function E4(){return{text:zn}}let si=48;for(;si<123;)zn[si]=ur,si++,si===58?si=65:si===91&&(si=97);zn[43]=ur;zn[45]=ur;zn[46]=ur;zn[95]=ur;zn[72]=[ur,CT];zn[104]=[ur,CT];zn[87]=[ur,wT];zn[119]=[ur,wT];function b4(e,t,n){const r=this;let i,a;return o;function o(d){return!df(d)||!AT.call(r,r.previous)||Xh(r.events)?n(d):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),s(d))}function s(d){return df(d)?(e.consume(d),s):d===64?(e.consume(d),u):n(d)}function u(d){return d===46?e.check(y4,f,l)(d):d===45||d===95||ut(d)?(a=!0,e.consume(d),u):f(d)}function l(d){return e.consume(d),i=!0,u}function f(d){return a&&i&&yt(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(d)):n(d)}}function T4(e,t,n){const r=this;return i;function i(o){return o!==87&&o!==119||!xT.call(r,r.previous)||Xh(r.events)?n(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(g4,e.attempt(bT,e.attempt(TT,a),n),n)(o))}function a(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(o)}}function v4(e,t,n){const r=this;let i="",a=!1;return o;function o(d){return(d===72||d===104)&&kT.call(r,r.previous)&&!Xh(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(d),e.consume(d),s):n(d)}function s(d){if(yt(d)&&i.length<5)return i+=String.fromCodePoint(d),e.consume(d),s;if(d===58){const p=i.toLowerCase();if(p==="http"||p==="https")return e.consume(d),u}return n(d)}function u(d){return d===47?(e.consume(d),a?l:(a=!0,u)):n(d)}function l(d){return d===null||Ku(d)||ke(d)||Ii(d)||Ol(d)?n(d):e.attempt(bT,e.attempt(TT,f),n)(d)}function f(d){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(d)}}function w4(e,t,n){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),a):n(o)}function a(o){return o===null?n(o):t(o)}}function C4(e,t,n){let r,i,a;return o;function o(l){return l===46||l===95?e.check(vT,u,s)(l):l===null||ke(l)||Ii(l)||l!==45&&Ol(l)?u(l):(a=!0,e.consume(l),o)}function s(l){return l===95?r=!0:(i=r,r=void 0),e.consume(l),o}function u(l){return i||r||!a?n(l):t(l)}}function x4(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(vT,t,a)(o):o===null||ke(o)||Ii(o)?t(o):(e.consume(o),i)}function a(o){return o===41&&r++,e.consume(o),i}}function k4(e,t,n){return r;function r(s){return s===33||s===34||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===63||s===95||s===126?(e.consume(s),r):s===38?(e.consume(s),a):s===93?(e.consume(s),i):s===60||s===null||ke(s)||Ii(s)?t(s):n(s)}function i(s){return s===null||s===40||s===91||ke(s)||Ii(s)?t(s):r(s)}function a(s){return yt(s)?o(s):n(s)}function o(s){return s===59?(e.consume(s),r):yt(s)?(e.consume(s),o):n(s)}}function A4(e,t,n){return r;function r(a){return e.consume(a),i}function i(a){return ut(a)?n(a):t(a)}}function xT(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ke(e)}function kT(e){return!yt(e)}function AT(e){return!(e===47||df(e))}function df(e){return e===43||e===45||e===46||e===95||ut(e)}function Xh(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const S4={tokenize:P4,partial:!0};function D4(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:L4,continuation:{tokenize:O4},exit:R4}},text:{91:{name:"gfmFootnoteCall",tokenize:N4},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:_4,resolveTo:I4}}}}function _4(e,t,n){const r=this;let i=r.events.length;const a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;i--;){const u=r.events[i][1];if(u.type==="labelImage"){o=u;break}if(u.type==="gfmFootnoteCall"||u.type==="labelLink"||u.type==="label"||u.type==="image"||u.type==="link")break}return s;function s(u){if(!o||!o._balanced)return n(u);const l=En(r.sliceSerialize({start:o.end,end:r.now()}));return l.codePointAt(0)!==94||!a.includes(l.slice(1))?n(u):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),t(u))}}function I4(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const a={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",a,t],["enter",o,t],["exit",o,t],["exit",a,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...s),e}function N4(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a=0,o;return s;function s(d){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),u}function u(d){return d!==94?n(d):(e.enter("gfmFootnoteCallMarker"),e.consume(d),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",l)}function l(d){if(a>999||d===93&&!o||d===null||d===91||ke(d))return n(d);if(d===93){e.exit("chunkString");const p=e.exit("gfmFootnoteCallString");return i.includes(En(r.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(d)}return ke(d)||(o=!0),a++,e.consume(d),d===92?f:l}function f(d){return d===91||d===92||d===93?(e.consume(d),a++,l):l(d)}}function L4(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a,o=0,s;return u;function u(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),l}function l(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):n(g)}function f(g){if(o>999||g===93&&!s||g===null||g===91||ke(g))return n(g);if(g===93){e.exit("chunkString");const y=e.exit("gfmFootnoteDefinitionLabelString");return a=En(r.sliceSerialize(y)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return ke(g)||(s=!0),o++,e.consume(g),g===92?d:f}function d(g){return g===91||g===92||g===93?(e.consume(g),o++,f):f(g)}function p(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),i.includes(a)||i.push(a),Ee(e,h,"gfmFootnoteDefinitionWhitespace")):n(g)}function h(g){return t(g)}}function O4(e,t,n){return e.check(gs,t,e.attempt(S4,t,n))}function R4(e){e.exit("gfmFootnoteDefinition")}function P4(e,t,n){const r=this;return Ee(e,i,"gfmFootnoteDefinitionIndent",5);function i(a){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?t(a):n(a)}}function F4(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:a,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,s){let u=-1;for(;++u<o.length;)if(o[u][0]==="enter"&&o[u][1].type==="strikethroughSequenceTemporary"&&o[u][1]._close){let l=u;for(;l--;)if(o[l][0]==="exit"&&o[l][1].type==="strikethroughSequenceTemporary"&&o[l][1]._open&&o[u][1].end.offset-o[u][1].start.offset===o[l][1].end.offset-o[l][1].start.offset){o[u][1].type="strikethroughSequence",o[l][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},o[l][1].start),end:Object.assign({},o[u][1].end)},d={type:"strikethroughText",start:Object.assign({},o[l][1].end),end:Object.assign({},o[u][1].start)},p=[["enter",f,s],["enter",o[l][1],s],["exit",o[l][1],s],["enter",d,s]],h=s.parser.constructs.insideSpan.null;h&&zt(p,p.length,0,Rl(h,o.slice(l+1,u),s)),zt(p,p.length,0,[["exit",d,s],["enter",o[u][1],s],["exit",o[u][1],s],["exit",f,s]]),zt(o,l-1,u-l+3,p),u=l+p.length-2;break}}for(u=-1;++u<o.length;)o[u][1].type==="strikethroughSequenceTemporary"&&(o[u][1].type="data");return o}function a(o,s,u){const l=this.previous,f=this.events;let d=0;return p;function p(g){return l===126&&f[f.length-1][1].type!=="characterEscape"?u(g):(o.enter("strikethroughSequenceTemporary"),h(g))}function h(g){const y=Da(l);if(g===126)return d>1?u(g):(o.consume(g),d++,h);if(d<2&&!n)return u(g);const T=o.exit("strikethroughSequenceTemporary"),m=Da(g);return T._open=!m||m===2&&!!y,T._close=!y||y===2&&!!m,s(g)}}}class M4{constructor(){this.map=[]}add(t,n,r){B4(this,t,n,r)}consume(t){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const a of i)t.push(a);i=r.pop()}this.map.length=0}}function B4(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function U4(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const a=r.length-1;r[a]=r[a]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function H4(){return{flow:{null:{name:"table",tokenize:j4,resolveAll:z4}}}}function j4(e,t,n){const r=this;let i=0,a=0,o;return s;function s(I){let z=r.events.length-1;for(;z>-1;){const Y=r.events[z][1].type;if(Y==="lineEnding"||Y==="linePrefix")z--;else break}const B=z>-1?r.events[z][1].type:null,J=B==="tableHead"||B==="tableRow"?k:u;return J===k&&r.parser.lazy[r.now().line]?n(I):J(I)}function u(I){return e.enter("tableHead"),e.enter("tableRow"),l(I)}function l(I){return I===124||(o=!0,a+=1),f(I)}function f(I){return I===null?n(I):ie(I)?a>1?(a=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(I),e.exit("lineEnding"),h):n(I):pe(I)?Ee(e,f,"whitespace")(I):(a+=1,o&&(o=!1,i+=1),I===124?(e.enter("tableCellDivider"),e.consume(I),e.exit("tableCellDivider"),o=!0,f):(e.enter("data"),d(I)))}function d(I){return I===null||I===124||ke(I)?(e.exit("data"),f(I)):(e.consume(I),I===92?p:d)}function p(I){return I===92||I===124?(e.consume(I),d):d(I)}function h(I){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(I):(e.enter("tableDelimiterRow"),o=!1,pe(I)?Ee(e,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(I):g(I))}function g(I){return I===45||I===58?T(I):I===124?(o=!0,e.enter("tableCellDivider"),e.consume(I),e.exit("tableCellDivider"),y):N(I)}function y(I){return pe(I)?Ee(e,T,"whitespace")(I):T(I)}function T(I){return I===58?(a+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(I),e.exit("tableDelimiterMarker"),m):I===45?(a+=1,m(I)):I===null||ie(I)?S(I):N(I)}function m(I){return I===45?(e.enter("tableDelimiterFiller"),E(I)):N(I)}function E(I){return I===45?(e.consume(I),E):I===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(I),e.exit("tableDelimiterMarker"),b):(e.exit("tableDelimiterFiller"),b(I))}function b(I){return pe(I)?Ee(e,S,"whitespace")(I):S(I)}function S(I){return I===124?g(I):I===null||ie(I)?!o||i!==a?N(I):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(I)):N(I)}function N(I){return n(I)}function k(I){return e.enter("tableRow"),O(I)}function O(I){return I===124?(e.enter("tableCellDivider"),e.consume(I),e.exit("tableCellDivider"),O):I===null||ie(I)?(e.exit("tableRow"),t(I)):pe(I)?Ee(e,O,"whitespace")(I):(e.enter("data"),M(I))}function M(I){return I===null||I===124||ke(I)?(e.exit("data"),O(I)):(e.consume(I),I===92?j:M)}function j(I){return I===92||I===124?(e.consume(I),M):M(I)}}function z4(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,u=0,l,f,d;const p=new M4;for(;++n<e.length;){const h=e[n],g=h[1];h[0]==="enter"?g.type==="tableHead"?(s=!1,u!==0&&(J0(p,t,u,l,f),f=void 0,u=0),l={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},p.add(n,0,[["enter",l,t]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,f={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},p.add(n,0,[["enter",f,t]])),i=g.type==="tableDelimiterRow"?2:f?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=Gs(p,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):g.type==="tableCellDivider"&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=Gs(p,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):g.type==="tableHead"?(s=!0,u=n):g.type==="tableRow"||g.type==="tableDelimiterRow"?(u=n,a[1]!==0?(o[0]=o[1],d=Gs(p,t,a,i,n,d)):o[1]!==0&&(d=Gs(p,t,o,i,n,d)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(o[3]=n)}for(u!==0&&J0(p,t,u,l,f),p.consume(t.events),n=-1;++n<t.events.length;){const h=t.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=U4(t.events,n))}return e}function Gs(e,t,n,r,i,a){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",s="tableContent";n[0]!==0&&(a.end=Object.assign({},ji(t.events,n[0])),e.add(n[0],0,[["exit",a,t]]));const u=ji(t.events,n[1]);if(a={type:o,start:Object.assign({},u),end:Object.assign({},u)},e.add(n[1],0,[["enter",a,t]]),n[2]!==0){const l=ji(t.events,n[2]),f=ji(t.events,n[3]),d={type:s,start:Object.assign({},l),end:Object.assign({},f)};if(e.add(n[2],0,[["enter",d,t]]),r!==2){const p=t.events[n[2]],h=t.events[n[3]];if(p[1].end=Object.assign({},h[1].end),p[1].type="chunkText",p[1].contentType="text",n[3]>n[2]+1){const g=n[2]+1,y=n[3]-n[2]-1;e.add(g,y,[])}}e.add(n[3]+1,0,[["exit",d,t]])}return i!==void 0&&(a.end=Object.assign({},ji(t.events,i)),e.add(i,0,[["exit",a,t]]),a=void 0),a}function J0(e,t,n,r,i){const a=[],o=ji(t.events,n);i&&(i.end=Object.assign({},o),a.push(["exit",i,t])),r.end=Object.assign({},o),a.push(["exit",r,t]),e.add(n+1,0,a)}function ji(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const W4={name:"tasklistCheck",tokenize:V4};function Y4(){return{text:{91:W4}}}function V4(e,t,n){const r=this;return i;function i(u){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(u):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(u),e.exit("taskListCheckMarker"),a)}function a(u){return ke(u)?(e.enter("taskListCheckValueUnchecked"),e.consume(u),e.exit("taskListCheckValueUnchecked"),o):u===88||u===120?(e.enter("taskListCheckValueChecked"),e.consume(u),e.exit("taskListCheckValueChecked"),o):n(u)}function o(u){return u===93?(e.enter("taskListCheckMarker"),e.consume(u),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),s):n(u)}function s(u){return ie(u)?t(u):pe(u)?e.check({tokenize:$4},t,n)(u):n(u)}}function $4(e,t,n){return Ee(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function q4(e){return Pb([E4(),D4(),F4(e),H4(),Y4()])}const Q4={};function G4(e){const t=this,n=e||Q4,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),a=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(q4(n)),a.push(p4()),o.push(m4(n))}const K4=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,X4=Object.hasOwnProperty;class J4{constructor(){this.occurrences,this.reset()}slug(t,n){const r=this;let i=Z4(t,n===!0);const a=i;for(;X4.call(r.occurrences,i);)r.occurrences[a]++,i=a+"-"+r.occurrences[a];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function Z4(e,t){return typeof e!="string"?"":(t||(e=e.toLowerCase()),e.replace(K4,"").replace(/ /g,"-"))}function eR(e){const t=e.type==="element"?e.tagName.toLowerCase():"",n=t.length===2&&t.charCodeAt(0)===104?t.charCodeAt(1):0;return n>48&&n<55?n-48:void 0}function tR(e){return"children"in e?ST(e):"value"in e?e.value:""}function nR(e){return e.type==="text"?e.value:"children"in e?ST(e):""}function ST(e){let t=-1;const n=[];for(;++t<e.children.length;)n[t]=nR(e.children[t]);return n.join("")}const rR={},Z0=new J4;function iR(e){const n=(e||rR).prefix||"";return function(r){Z0.reset(),ys(r,"element",function(i){eR(i)&&!i.properties.id&&(i.properties.id=n+Z0.slug(tR(i)))})}}const eg=/[#.]/g;function aR(e,t){const n=e||"",r={};let i=0,a,o;for(;i<n.length;){eg.lastIndex=i;const s=eg.exec(n),u=n.slice(i,s?s.index:n.length);u&&(a?a==="#"?r.id=u:Array.isArray(r.className)?r.className.push(u):r.className=[u]:o=u,i+=u.length),s&&(a=s[0],i++)}return{type:"element",tagName:o||t||"div",properties:r,children:[]}}function DT(e,t,n){const r=n?lR(n):void 0;function i(a,o,...s){let u;if(a==null){u={type:"root",children:[]};const l=o;s.unshift(l)}else{u=aR(a,t);const l=u.tagName.toLowerCase(),f=r?r.get(l):void 0;if(u.tagName=f||l,oR(o))s.unshift(o);else for(const[d,p]of Object.entries(o))sR(e,u.properties,d,p)}for(const l of s)ff(u.children,l);return u.type==="element"&&u.tagName==="template"&&(u.content={type:"root",children:u.children},u.children=[]),u}return i}function oR(e){if(e===null||typeof e!="object"||Array.isArray(e))return!0;if(typeof e.type!="string")return!1;const t=e,n=Object.keys(e);for(const r of n){const i=t[r];if(i&&typeof i=="object"){if(!Array.isArray(i))return!0;const a=i;for(const o of a)if(typeof o!="number"&&typeof o!="string")return!0}}return!!("children"in e&&Array.isArray(e.children))}function sR(e,t,n,r){const i=Fh(e,n);let a;if(r!=null){if(typeof r=="number"){if(Number.isNaN(r))return;a=r}else typeof r=="boolean"?a=r:typeof r=="string"?i.spaceSeparated?a=o0(r):i.commaSeparated?a=t0(r):i.commaOrSpaceSeparated?a=o0(t0(r).join(" ")):a=tg(i,i.property,r):Array.isArray(r)?a=[...r]:a=i.property==="style"?uR(r):String(r);if(Array.isArray(a)){const o=[];for(const s of a)o.push(tg(i,i.property,s));a=o}i.property==="className"&&Array.isArray(t.className)&&(a=t.className.concat(a)),t[i.property]=a}}function ff(e,t){if(t!=null)if(typeof t=="number"||typeof t=="string")e.push({type:"text",value:String(t)});else if(Array.isArray(t))for(const n of t)ff(e,n);else if(typeof t=="object"&&"type"in t)t.type==="root"?ff(e,t.children):e.push(t);else throw new Error("Expected node, nodes, or string, got `"+t+"`")}function tg(e,t,n){if(typeof n=="string"){if(e.number&&n&&!Number.isNaN(Number(n)))return Number(n);if((e.boolean||e.overloadedBoolean)&&(n===""||ts(n)===ts(t)))return!0}return n}function uR(e){const t=[];for(const[n,r]of Object.entries(e))t.push([n,r].join(": "));return t.join("; ")}function lR(e){const t=new Map;for(const n of e)t.set(n.toLowerCase(),n);return t}const cR=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],dR=DT(Il,"div"),fR=DT(Ha,"g",cR);function hR(e){const t=String(e),n=[];return{toOffset:i,toPoint:r};function r(a){if(typeof a=="number"&&a>-1&&a<=t.length){let o=0;for(;;){let s=n[o];if(s===void 0){const u=ng(t,n[o-1]);s=u===-1?t.length+1:u+1,n[o]=s}if(s>a)return{line:o+1,column:a-(o>0?n[o-1]:0)+1,offset:a};o++}}}function i(a){if(a&&typeof a.line=="number"&&typeof a.column=="number"&&!Number.isNaN(a.line)&&!Number.isNaN(a.column)){for(;n.length<a.line;){const s=n[n.length-1],u=ng(t,s),l=u===-1?t.length+1:u+1;if(s===l)break;n.push(l)}const o=(a.line>1?n[a.line-2]:0)+a.column-1;if(o<n[a.line-1])return o}}}function ng(e,t){const n=e.indexOf("\r",t),r=e.indexOf(`
`,t);return r===-1?n:n===-1||n+1===r?r:n<r?n:r}const pi={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},_T={}.hasOwnProperty,pR=Object.prototype;function mR(e,t){const n=t||{};return Jh({file:n.file||void 0,location:!1,schema:n.space==="svg"?Ha:Il,verbose:n.verbose||!1},e)}function Jh(e,t){let n;switch(t.nodeName){case"#comment":{const r=t;return n={type:"comment",value:r.data},mu(e,r,n),n}case"#document":case"#document-fragment":{const r=t,i="mode"in r?r.mode==="quirks"||r.mode==="limited-quirks":!1;if(n={type:"root",children:IT(e,t.childNodes),data:{quirksMode:i}},e.file&&e.location){const a=String(e.file),o=hR(a),s=o.toPoint(0),u=o.toPoint(a.length);n.position={start:s,end:u}}return n}case"#documentType":{const r=t;return n={type:"doctype"},mu(e,r,n),n}case"#text":{const r=t;return n={type:"text",value:r.value},mu(e,r,n),n}default:return n=gR(e,t),n}}function IT(e,t){let n=-1;const r=[];for(;++n<t.length;){const i=Jh(e,t[n]);r.push(i)}return r}function gR(e,t){const n=e.schema;e.schema=t.namespaceURI===pi.svg?Ha:Il;let r=-1;const i={};for(;++r<t.attrs.length;){const s=t.attrs[r],u=(s.prefix?s.prefix+":":"")+s.name;_T.call(pR,u)||(i[u]=s.value)}const o=(e.schema.space==="svg"?fR:dR)(t.tagName,i,IT(e,t.childNodes));if(mu(e,t,o),o.tagName==="template"){const s=t,u=s.sourceCodeLocation,l=u&&u.startTag&&ea(u.startTag),f=u&&u.endTag&&ea(u.endTag),d=Jh(e,s.content);l&&f&&e.file&&(d.position={start:l.end,end:f.start}),o.content=d}return e.schema=n,o}function mu(e,t,n){if("sourceCodeLocation"in t&&t.sourceCodeLocation&&e.file){const r=yR(e,n,t.sourceCodeLocation);r&&(e.location=!0,n.position=r)}}function yR(e,t,n){const r=ea(n);if(t.type==="element"){const i=t.children[t.children.length-1];if(r&&!n.endTag&&i&&i.position&&i.position.end&&(r.end=Object.assign({},i.position.end)),e.verbose){const a={};let o;if(n.attrs)for(o in n.attrs)_T.call(n.attrs,o)&&(a[Fh(e.schema,o).property]=ea(n.attrs[o]));n.startTag;const s=ea(n.startTag),u=n.endTag?ea(n.endTag):void 0,l={opening:s};u&&(l.closing=u),l.properties=a,t.data={position:l}}}return r}function ea(e){const t=rg({line:e.startLine,column:e.startCol,offset:e.startOffset}),n=rg({line:e.endLine,column:e.endCol,offset:e.endOffset});return t||n?{start:t,end:n}:void 0}function rg(e){return e.line&&e.column?e:void 0}class bs{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}}bs.prototype.property={};bs.prototype.normal={};bs.prototype.space=null;function NT(e,t){const n={},r={};let i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new bs(n,r,t)}function hf(e){return e.toLowerCase()}class nn{constructor(t,n){this.property=t,this.attribute=n}}nn.prototype.space=null;nn.prototype.boolean=!1;nn.prototype.booleanish=!1;nn.prototype.overloadedBoolean=!1;nn.prototype.number=!1;nn.prototype.commaSeparated=!1;nn.prototype.spaceSeparated=!1;nn.prototype.commaOrSpaceSeparated=!1;nn.prototype.mustUseProperty=!1;nn.prototype.defined=!1;let ER=0;const le=Ri(),Ve=Ri(),LT=Ri(),Q=Ri(),Se=Ri(),ca=Ri(),Ft=Ri();function Ri(){return 2**++ER}const pf=Object.freeze(Object.defineProperty({__proto__:null,boolean:le,booleanish:Ve,commaOrSpaceSeparated:Ft,commaSeparated:ca,number:Q,overloadedBoolean:LT,spaceSeparated:Se},Symbol.toStringTag,{value:"Module"})),jc=Object.keys(pf);class Zh extends nn{constructor(t,n,r,i){let a=-1;if(super(t,n),ig(this,"space",i),typeof r=="number")for(;++a<jc.length;){const o=jc[a];ig(this,jc[a],(r&pf[o])===pf[o])}}}Zh.prototype.defined=!0;function ig(e,t,n){n&&(e[t]=n)}const bR={}.hasOwnProperty;function za(e){const t={},n={};let r;for(r in e.properties)if(bR.call(e.properties,r)){const i=e.properties[r],a=new Zh(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[hf(r)]=r,n[hf(a.attribute)]=r}return new bs(t,n,e.space)}const OT=za({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),RT=za({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function PT(e,t){return t in e?e[t]:t}function FT(e,t){return PT(e,t.toLowerCase())}const MT=za({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:FT,properties:{xmlns:null,xmlnsXLink:null}}),BT=za({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:Ve,ariaAutoComplete:null,ariaBusy:Ve,ariaChecked:Ve,ariaColCount:Q,ariaColIndex:Q,ariaColSpan:Q,ariaControls:Se,ariaCurrent:null,ariaDescribedBy:Se,ariaDetails:null,ariaDisabled:Ve,ariaDropEffect:Se,ariaErrorMessage:null,ariaExpanded:Ve,ariaFlowTo:Se,ariaGrabbed:Ve,ariaHasPopup:null,ariaHidden:Ve,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Se,ariaLevel:Q,ariaLive:null,ariaModal:Ve,ariaMultiLine:Ve,ariaMultiSelectable:Ve,ariaOrientation:null,ariaOwns:Se,ariaPlaceholder:null,ariaPosInSet:Q,ariaPressed:Ve,ariaReadOnly:Ve,ariaRelevant:null,ariaRequired:Ve,ariaRoleDescription:Se,ariaRowCount:Q,ariaRowIndex:Q,ariaRowSpan:Q,ariaSelected:Ve,ariaSetSize:Q,ariaSort:null,ariaValueMax:Q,ariaValueMin:Q,ariaValueNow:Q,ariaValueText:null,role:null}}),TR=za({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:FT,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ca,acceptCharset:Se,accessKey:Se,action:null,allow:null,allowFullScreen:le,allowPaymentRequest:le,allowUserMedia:le,alt:null,as:null,async:le,autoCapitalize:null,autoComplete:Se,autoFocus:le,autoPlay:le,blocking:Se,capture:null,charSet:null,checked:le,cite:null,className:Se,cols:Q,colSpan:null,content:null,contentEditable:Ve,controls:le,controlsList:Se,coords:Q|ca,crossOrigin:null,data:null,dateTime:null,decoding:null,default:le,defer:le,dir:null,dirName:null,disabled:le,download:LT,draggable:Ve,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:le,formTarget:null,headers:Se,height:Q,hidden:le,high:Q,href:null,hrefLang:null,htmlFor:Se,httpEquiv:Se,id:null,imageSizes:null,imageSrcSet:null,inert:le,inputMode:null,integrity:null,is:null,isMap:le,itemId:null,itemProp:Se,itemRef:Se,itemScope:le,itemType:Se,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:le,low:Q,manifest:null,max:null,maxLength:Q,media:null,method:null,min:null,minLength:Q,multiple:le,muted:le,name:null,nonce:null,noModule:le,noValidate:le,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:le,optimum:Q,pattern:null,ping:Se,placeholder:null,playsInline:le,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:le,referrerPolicy:null,rel:Se,required:le,reversed:le,rows:Q,rowSpan:Q,sandbox:Se,scope:null,scoped:le,seamless:le,selected:le,shadowRootClonable:le,shadowRootDelegatesFocus:le,shadowRootMode:null,shape:null,size:Q,sizes:null,slot:null,span:Q,spellCheck:Ve,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Q,step:null,style:null,tabIndex:Q,target:null,title:null,translate:null,type:null,typeMustMatch:le,useMap:null,value:Ve,width:Q,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Se,axis:null,background:null,bgColor:null,border:Q,borderColor:null,bottomMargin:Q,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:le,declare:le,event:null,face:null,frame:null,frameBorder:null,hSpace:Q,leftMargin:Q,link:null,longDesc:null,lowSrc:null,marginHeight:Q,marginWidth:Q,noResize:le,noHref:le,noShade:le,noWrap:le,object:null,profile:null,prompt:null,rev:null,rightMargin:Q,rules:null,scheme:null,scrolling:Ve,standby:null,summary:null,text:null,topMargin:Q,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Q,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:le,disableRemotePlayback:le,prefix:null,property:null,results:Q,security:null,unselectable:null}}),vR=za({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:PT,properties:{about:Ft,accentHeight:Q,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Q,amplitude:Q,arabicForm:null,ascent:Q,attributeName:null,attributeType:null,azimuth:Q,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Q,by:null,calcMode:null,capHeight:Q,className:Se,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Q,diffuseConstant:Q,direction:null,display:null,dur:null,divisor:Q,dominantBaseline:null,download:le,dx:null,dy:null,edgeMode:null,editable:null,elevation:Q,enableBackground:null,end:null,event:null,exponent:Q,externalResourcesRequired:null,fill:null,fillOpacity:Q,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ca,g2:ca,glyphName:ca,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Q,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Q,horizOriginX:Q,horizOriginY:Q,id:null,ideographic:Q,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Q,k:Q,k1:Q,k2:Q,k3:Q,k4:Q,kernelMatrix:Ft,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Q,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Q,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Q,overlineThickness:Q,paintOrder:null,panose1:null,path:null,pathLength:Q,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Se,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Q,pointsAtY:Q,pointsAtZ:Q,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ft,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ft,rev:Ft,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ft,requiredFeatures:Ft,requiredFonts:Ft,requiredFormats:Ft,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Q,specularExponent:Q,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Q,strikethroughThickness:Q,string:null,stroke:null,strokeDashArray:Ft,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Q,strokeOpacity:Q,strokeWidth:null,style:null,surfaceScale:Q,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ft,tabIndex:Q,tableValues:null,target:null,targetX:Q,targetY:Q,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ft,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Q,underlineThickness:Q,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Q,values:null,vAlphabetic:Q,vMathematical:Q,vectorEffect:null,vHanging:Q,vIdeographic:Q,version:null,vertAdvY:Q,vertOriginX:Q,vertOriginY:Q,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Q,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),wR=/^data[-\w.:]+$/i,ag=/-[a-z]/g,CR=/[A-Z]/g;function xR(e,t){const n=hf(t);let r=t,i=nn;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&wR.test(t)){if(t.charAt(4)==="-"){const a=t.slice(5).replace(ag,AR);r="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=t.slice(4);if(!ag.test(a)){let o=a.replace(CR,kR);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}i=Zh}return new i(r,t)}function kR(e){return"-"+e.toLowerCase()}function AR(e){return e.charAt(1).toUpperCase()}const SR=NT([RT,OT,MT,BT,TR],"html"),UT=NT([RT,OT,MT,BT,vR],"svg"),DR={},_R={}.hasOwnProperty,HT=sT("type",{handlers:{root:NR,element:FR,text:RR,comment:PR,doctype:OR}});function IR(e,t){const r=(t||DR).space;return HT(e,r==="svg"?UT:SR)}function NR(e,t){const n={nodeName:"#document",mode:(e.data||{}).quirksMode?"quirks":"no-quirks",childNodes:[]};return n.childNodes=ep(e.children,n,t),Wa(e,n),n}function LR(e,t){const n={nodeName:"#document-fragment",childNodes:[]};return n.childNodes=ep(e.children,n,t),Wa(e,n),n}function OR(e){const t={nodeName:"#documentType",name:"html",publicId:"",systemId:"",parentNode:null};return Wa(e,t),t}function RR(e){const t={nodeName:"#text",value:e.value,parentNode:null};return Wa(e,t),t}function PR(e){const t={nodeName:"#comment",data:e.value,parentNode:null};return Wa(e,t),t}function FR(e,t){const n=t;let r=n;e.type==="element"&&e.tagName.toLowerCase()==="svg"&&n.space==="html"&&(r=UT);const i=[];let a;if(e.properties){for(a in e.properties)if(a!=="children"&&_R.call(e.properties,a)){const u=MR(r,a,e.properties[a]);u&&i.push(u)}}const o=r.space,s={nodeName:e.tagName,tagName:e.tagName,attrs:i,namespaceURI:pi[o],childNodes:[],parentNode:null};return s.childNodes=ep(e.children,s,r),Wa(e,s),e.tagName==="template"&&e.content&&(s.content=LR(e.content,r)),s}function MR(e,t,n){const r=xR(e,t);if(n===!1||n===null||n===void 0||typeof n=="number"&&Number.isNaN(n)||!n&&r.boolean)return;Array.isArray(n)&&(n=r.commaSeparated?Tb(n):Db(n));const i={name:r.attribute,value:n===!0?"":String(n)};if(r.space&&r.space!=="html"&&r.space!=="svg"){const a=i.name.indexOf(":");a<0?i.prefix="":(i.name=i.name.slice(a+1),i.prefix=r.attribute.slice(0,a)),i.namespace=pi[r.space]}return i}function ep(e,t,n){let r=-1;const i=[];if(e)for(;++r<e.length;){const a=HT(e[r],n);a.parentNode=t,i.push(a)}return i}function Wa(e,t){const n=e.position;n&&n.start&&n.end&&(n.start.offset,n.end.offset,t.sourceCodeLocation={startLine:n.start.line,startCol:n.start.column,startOffset:n.start.offset,endLine:n.end.line,endCol:n.end.column,endOffset:n.end.offset})}const BR=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"],UR=new Set([65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),Oe="�";var v;(function(e){e[e.EOF=-1]="EOF",e[e.NULL=0]="NULL",e[e.TABULATION=9]="TABULATION",e[e.CARRIAGE_RETURN=13]="CARRIAGE_RETURN",e[e.LINE_FEED=10]="LINE_FEED",e[e.FORM_FEED=12]="FORM_FEED",e[e.SPACE=32]="SPACE",e[e.EXCLAMATION_MARK=33]="EXCLAMATION_MARK",e[e.QUOTATION_MARK=34]="QUOTATION_MARK",e[e.AMPERSAND=38]="AMPERSAND",e[e.APOSTROPHE=39]="APOSTROPHE",e[e.HYPHEN_MINUS=45]="HYPHEN_MINUS",e[e.SOLIDUS=47]="SOLIDUS",e[e.DIGIT_0=48]="DIGIT_0",e[e.DIGIT_9=57]="DIGIT_9",e[e.SEMICOLON=59]="SEMICOLON",e[e.LESS_THAN_SIGN=60]="LESS_THAN_SIGN",e[e.EQUALS_SIGN=61]="EQUALS_SIGN",e[e.GREATER_THAN_SIGN=62]="GREATER_THAN_SIGN",e[e.QUESTION_MARK=63]="QUESTION_MARK",e[e.LATIN_CAPITAL_A=65]="LATIN_CAPITAL_A",e[e.LATIN_CAPITAL_Z=90]="LATIN_CAPITAL_Z",e[e.RIGHT_SQUARE_BRACKET=93]="RIGHT_SQUARE_BRACKET",e[e.GRAVE_ACCENT=96]="GRAVE_ACCENT",e[e.LATIN_SMALL_A=97]="LATIN_SMALL_A",e[e.LATIN_SMALL_Z=122]="LATIN_SMALL_Z"})(v||(v={}));const wt={DASH_DASH:"--",CDATA_START:"[CDATA[",DOCTYPE:"doctype",SCRIPT:"script",PUBLIC:"public",SYSTEM:"system"};function jT(e){return e>=55296&&e<=57343}function HR(e){return e>=56320&&e<=57343}function jR(e,t){return(e-55296)*1024+9216+t}function zT(e){return e!==32&&e!==10&&e!==13&&e!==9&&e!==12&&e>=1&&e<=31||e>=127&&e<=159}function WT(e){return e>=64976&&e<=65007||UR.has(e)}var R;(function(e){e.controlCharacterInInputStream="control-character-in-input-stream",e.noncharacterInInputStream="noncharacter-in-input-stream",e.surrogateInInputStream="surrogate-in-input-stream",e.nonVoidHtmlElementStartTagWithTrailingSolidus="non-void-html-element-start-tag-with-trailing-solidus",e.endTagWithAttributes="end-tag-with-attributes",e.endTagWithTrailingSolidus="end-tag-with-trailing-solidus",e.unexpectedSolidusInTag="unexpected-solidus-in-tag",e.unexpectedNullCharacter="unexpected-null-character",e.unexpectedQuestionMarkInsteadOfTagName="unexpected-question-mark-instead-of-tag-name",e.invalidFirstCharacterOfTagName="invalid-first-character-of-tag-name",e.unexpectedEqualsSignBeforeAttributeName="unexpected-equals-sign-before-attribute-name",e.missingEndTagName="missing-end-tag-name",e.unexpectedCharacterInAttributeName="unexpected-character-in-attribute-name",e.unknownNamedCharacterReference="unknown-named-character-reference",e.missingSemicolonAfterCharacterReference="missing-semicolon-after-character-reference",e.unexpectedCharacterAfterDoctypeSystemIdentifier="unexpected-character-after-doctype-system-identifier",e.unexpectedCharacterInUnquotedAttributeValue="unexpected-character-in-unquoted-attribute-value",e.eofBeforeTagName="eof-before-tag-name",e.eofInTag="eof-in-tag",e.missingAttributeValue="missing-attribute-value",e.missingWhitespaceBetweenAttributes="missing-whitespace-between-attributes",e.missingWhitespaceAfterDoctypePublicKeyword="missing-whitespace-after-doctype-public-keyword",e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers="missing-whitespace-between-doctype-public-and-system-identifiers",e.missingWhitespaceAfterDoctypeSystemKeyword="missing-whitespace-after-doctype-system-keyword",e.missingQuoteBeforeDoctypePublicIdentifier="missing-quote-before-doctype-public-identifier",e.missingQuoteBeforeDoctypeSystemIdentifier="missing-quote-before-doctype-system-identifier",e.missingDoctypePublicIdentifier="missing-doctype-public-identifier",e.missingDoctypeSystemIdentifier="missing-doctype-system-identifier",e.abruptDoctypePublicIdentifier="abrupt-doctype-public-identifier",e.abruptDoctypeSystemIdentifier="abrupt-doctype-system-identifier",e.cdataInHtmlContent="cdata-in-html-content",e.incorrectlyOpenedComment="incorrectly-opened-comment",e.eofInScriptHtmlCommentLikeText="eof-in-script-html-comment-like-text",e.eofInDoctype="eof-in-doctype",e.nestedComment="nested-comment",e.abruptClosingOfEmptyComment="abrupt-closing-of-empty-comment",e.eofInComment="eof-in-comment",e.incorrectlyClosedComment="incorrectly-closed-comment",e.eofInCdata="eof-in-cdata",e.absenceOfDigitsInNumericCharacterReference="absence-of-digits-in-numeric-character-reference",e.nullCharacterReference="null-character-reference",e.surrogateCharacterReference="surrogate-character-reference",e.characterReferenceOutsideUnicodeRange="character-reference-outside-unicode-range",e.controlCharacterReference="control-character-reference",e.noncharacterCharacterReference="noncharacter-character-reference",e.missingWhitespaceBeforeDoctypeName="missing-whitespace-before-doctype-name",e.missingDoctypeName="missing-doctype-name",e.invalidCharacterSequenceAfterDoctypeName="invalid-character-sequence-after-doctype-name",e.duplicateAttribute="duplicate-attribute",e.nonConformingDoctype="non-conforming-doctype",e.missingDoctype="missing-doctype",e.misplacedDoctype="misplaced-doctype",e.endTagWithoutMatchingOpenElement="end-tag-without-matching-open-element",e.closingOfElementWithOpenChildElements="closing-of-element-with-open-child-elements",e.disallowedContentInNoscriptInHead="disallowed-content-in-noscript-in-head",e.openElementsLeftAfterEof="open-elements-left-after-eof",e.abandonedHeadElementChild="abandoned-head-element-child",e.misplacedStartTagForHeadElement="misplaced-start-tag-for-head-element",e.nestedNoscriptInHead="nested-noscript-in-head",e.eofInElementThatCanContainOnlyText="eof-in-element-that-can-contain-only-text"})(R||(R={}));const zR=65536;class WR{constructor(t){this.handler=t,this.html="",this.pos=-1,this.lastGapPos=-2,this.gapStack=[],this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,this.bufferWaterline=zR,this.isEol=!1,this.lineStartPos=0,this.droppedBufferSize=0,this.line=1,this.lastErrOffset=-1}get col(){return this.pos-this.lineStartPos+ +(this.lastGapPos!==this.pos)}get offset(){return this.droppedBufferSize+this.pos}getError(t,n){const{line:r,col:i,offset:a}=this,o=i+n,s=a+n;return{code:t,startLine:r,endLine:r,startCol:o,endCol:o,startOffset:s,endOffset:s}}_err(t){this.handler.onParseError&&this.lastErrOffset!==this.offset&&(this.lastErrOffset=this.offset,this.handler.onParseError(this.getError(t,0)))}_addGap(){this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos}_processSurrogate(t){if(this.pos!==this.html.length-1){const n=this.html.charCodeAt(this.pos+1);if(HR(n))return this.pos++,this._addGap(),jR(t,n)}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,v.EOF;return this._err(R.surrogateInInputStream),t}willDropParsedChunk(){return this.pos>this.bufferWaterline}dropParsedChunk(){this.willDropParsedChunk()&&(this.html=this.html.substring(this.pos),this.lineStartPos-=this.pos,this.droppedBufferSize+=this.pos,this.pos=0,this.lastGapPos=-2,this.gapStack.length=0)}write(t,n){this.html.length>0?this.html+=t:this.html=t,this.endOfChunkHit=!1,this.lastChunkWritten=n}insertHtmlAtCurrentPos(t){this.html=this.html.substring(0,this.pos+1)+t+this.html.substring(this.pos+1),this.endOfChunkHit=!1}startsWith(t,n){if(this.pos+t.length>this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,!1;if(n)return this.html.startsWith(t,this.pos);for(let r=0;r<t.length;r++)if((this.html.charCodeAt(this.pos+r)|32)!==t.charCodeAt(r))return!1;return!0}peek(t){const n=this.pos+t;if(n>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,v.EOF;const r=this.html.charCodeAt(n);return r===v.CARRIAGE_RETURN?v.LINE_FEED:r}advance(){if(this.pos++,this.isEol&&(this.isEol=!1,this.line++,this.lineStartPos=this.pos),this.pos>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,v.EOF;let t=this.html.charCodeAt(this.pos);return t===v.CARRIAGE_RETURN?(this.isEol=!0,this.skipNextNewLine=!0,v.LINE_FEED):t===v.LINE_FEED&&(this.isEol=!0,this.skipNextNewLine)?(this.line--,this.skipNextNewLine=!1,this._addGap(),this.advance()):(this.skipNextNewLine=!1,jT(t)&&(t=this._processSurrogate(t)),this.handler.onParseError===null||t>31&&t<127||t===v.LINE_FEED||t===v.CARRIAGE_RETURN||t>159&&t<64976||this._checkForProblematicCharacters(t),t)}_checkForProblematicCharacters(t){zT(t)?this._err(R.controlCharacterInInputStream):WT(t)&&this._err(R.noncharacterInInputStream)}retreat(t){for(this.pos-=t;this.pos<this.lastGapPos;)this.lastGapPos=this.gapStack.pop(),this.pos--;this.isEol=!1}}var fe;(function(e){e[e.CHARACTER=0]="CHARACTER",e[e.NULL_CHARACTER=1]="NULL_CHARACTER",e[e.WHITESPACE_CHARACTER=2]="WHITESPACE_CHARACTER",e[e.START_TAG=3]="START_TAG",e[e.END_TAG=4]="END_TAG",e[e.COMMENT=5]="COMMENT",e[e.DOCTYPE=6]="DOCTYPE",e[e.EOF=7]="EOF",e[e.HIBERNATION=8]="HIBERNATION"})(fe||(fe={}));function YT(e,t){for(let n=e.attrs.length-1;n>=0;n--)if(e.attrs[n].name===t)return e.attrs[n].value;return null}const YR=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),VR=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function $R(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=VR.get(e))!==null&&t!==void 0?t:e}var Je;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(Je||(Je={}));const qR=32;var Rr;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Rr||(Rr={}));function mf(e){return e>=Je.ZERO&&e<=Je.NINE}function QR(e){return e>=Je.UPPER_A&&e<=Je.UPPER_F||e>=Je.LOWER_A&&e<=Je.LOWER_F}function GR(e){return e>=Je.UPPER_A&&e<=Je.UPPER_Z||e>=Je.LOWER_A&&e<=Je.LOWER_Z||mf(e)}function KR(e){return e===Je.EQUALS||GR(e)}var Ke;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(Ke||(Ke={}));var Kn;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Kn||(Kn={}));class XR{constructor(t,n,r){this.decodeTree=t,this.emitCodePoint=n,this.errors=r,this.state=Ke.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Kn.Strict}startEntity(t){this.decodeMode=t,this.state=Ke.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,n){switch(this.state){case Ke.EntityStart:return t.charCodeAt(n)===Je.NUM?(this.state=Ke.NumericStart,this.consumed+=1,this.stateNumericStart(t,n+1)):(this.state=Ke.NamedEntity,this.stateNamedEntity(t,n));case Ke.NumericStart:return this.stateNumericStart(t,n);case Ke.NumericDecimal:return this.stateNumericDecimal(t,n);case Ke.NumericHex:return this.stateNumericHex(t,n);case Ke.NamedEntity:return this.stateNamedEntity(t,n)}}stateNumericStart(t,n){return n>=t.length?-1:(t.charCodeAt(n)|qR)===Je.LOWER_X?(this.state=Ke.NumericHex,this.consumed+=1,this.stateNumericHex(t,n+1)):(this.state=Ke.NumericDecimal,this.stateNumericDecimal(t,n))}addToNumericResult(t,n,r,i){if(n!==r){const a=r-n;this.result=this.result*Math.pow(i,a)+Number.parseInt(t.substr(n,a),i),this.consumed+=a}}stateNumericHex(t,n){const r=n;for(;n<t.length;){const i=t.charCodeAt(n);if(mf(i)||QR(i))n+=1;else return this.addToNumericResult(t,r,n,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(t,r,n,16),-1}stateNumericDecimal(t,n){const r=n;for(;n<t.length;){const i=t.charCodeAt(n);if(mf(i))n+=1;else return this.addToNumericResult(t,r,n,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(t,r,n,10),-1}emitNumericEntity(t,n){var r;if(this.consumed<=n)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===Je.SEMI)this.consumed+=1;else if(this.decodeMode===Kn.Strict)return 0;return this.emitCodePoint($R(this.result),this.consumed),this.errors&&(t!==Je.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,n){const{decodeTree:r}=this;let i=r[this.treeIndex],a=(i&Rr.VALUE_LENGTH)>>14;for(;n<t.length;n++,this.excess++){const o=t.charCodeAt(n);if(this.treeIndex=JR(r,i,this.treeIndex+Math.max(1,a),o),this.treeIndex<0)return this.result===0||this.decodeMode===Kn.Attribute&&(a===0||KR(o))?0:this.emitNotTerminatedNamedEntity();if(i=r[this.treeIndex],a=(i&Rr.VALUE_LENGTH)>>14,a!==0){if(o===Je.SEMI)return this.emitNamedEntityData(this.treeIndex,a,this.consumed+this.excess);this.decodeMode!==Kn.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:n,decodeTree:r}=this,i=(r[n]&Rr.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,i,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,n,r){const{decodeTree:i}=this;return this.emitCodePoint(n===1?i[t]&~Rr.VALUE_LENGTH:i[t+1],r),n===3&&this.emitCodePoint(i[t+2],r),r}end(){var t;switch(this.state){case Ke.NamedEntity:return this.result!==0&&(this.decodeMode!==Kn.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Ke.NumericDecimal:return this.emitNumericEntity(0,2);case Ke.NumericHex:return this.emitNumericEntity(0,3);case Ke.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Ke.EntityStart:return 0}}}function JR(e,t,n,r){const i=(t&Rr.BRANCH_LENGTH)>>7,a=t&Rr.JUMP_TABLE;if(i===0)return a!==0&&r===a?n:-1;if(a){const u=r-a;return u<0||u>=i?-1:e[n+u]-1}let o=n,s=o+i-1;for(;o<=s;){const u=o+s>>>1,l=e[u];if(l<r)o=u+1;else if(l>r)s=u-1;else return e[u+i]}return-1}var W;(function(e){e.HTML="http://www.w3.org/1999/xhtml",e.MATHML="http://www.w3.org/1998/Math/MathML",e.SVG="http://www.w3.org/2000/svg",e.XLINK="http://www.w3.org/1999/xlink",e.XML="http://www.w3.org/XML/1998/namespace",e.XMLNS="http://www.w3.org/2000/xmlns/"})(W||(W={}));var Ci;(function(e){e.TYPE="type",e.ACTION="action",e.ENCODING="encoding",e.PROMPT="prompt",e.NAME="name",e.COLOR="color",e.FACE="face",e.SIZE="size"})(Ci||(Ci={}));var Xt;(function(e){e.NO_QUIRKS="no-quirks",e.QUIRKS="quirks",e.LIMITED_QUIRKS="limited-quirks"})(Xt||(Xt={}));var L;(function(e){e.A="a",e.ADDRESS="address",e.ANNOTATION_XML="annotation-xml",e.APPLET="applet",e.AREA="area",e.ARTICLE="article",e.ASIDE="aside",e.B="b",e.BASE="base",e.BASEFONT="basefont",e.BGSOUND="bgsound",e.BIG="big",e.BLOCKQUOTE="blockquote",e.BODY="body",e.BR="br",e.BUTTON="button",e.CAPTION="caption",e.CENTER="center",e.CODE="code",e.COL="col",e.COLGROUP="colgroup",e.DD="dd",e.DESC="desc",e.DETAILS="details",e.DIALOG="dialog",e.DIR="dir",e.DIV="div",e.DL="dl",e.DT="dt",e.EM="em",e.EMBED="embed",e.FIELDSET="fieldset",e.FIGCAPTION="figcaption",e.FIGURE="figure",e.FONT="font",e.FOOTER="footer",e.FOREIGN_OBJECT="foreignObject",e.FORM="form",e.FRAME="frame",e.FRAMESET="frameset",e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e.H6="h6",e.HEAD="head",e.HEADER="header",e.HGROUP="hgroup",e.HR="hr",e.HTML="html",e.I="i",e.IMG="img",e.IMAGE="image",e.INPUT="input",e.IFRAME="iframe",e.KEYGEN="keygen",e.LABEL="label",e.LI="li",e.LINK="link",e.LISTING="listing",e.MAIN="main",e.MALIGNMARK="malignmark",e.MARQUEE="marquee",e.MATH="math",e.MENU="menu",e.META="meta",e.MGLYPH="mglyph",e.MI="mi",e.MO="mo",e.MN="mn",e.MS="ms",e.MTEXT="mtext",e.NAV="nav",e.NOBR="nobr",e.NOFRAMES="noframes",e.NOEMBED="noembed",e.NOSCRIPT="noscript",e.OBJECT="object",e.OL="ol",e.OPTGROUP="optgroup",e.OPTION="option",e.P="p",e.PARAM="param",e.PLAINTEXT="plaintext",e.PRE="pre",e.RB="rb",e.RP="rp",e.RT="rt",e.RTC="rtc",e.RUBY="ruby",e.S="s",e.SCRIPT="script",e.SEARCH="search",e.SECTION="section",e.SELECT="select",e.SOURCE="source",e.SMALL="small",e.SPAN="span",e.STRIKE="strike",e.STRONG="strong",e.STYLE="style",e.SUB="sub",e.SUMMARY="summary",e.SUP="sup",e.TABLE="table",e.TBODY="tbody",e.TEMPLATE="template",e.TEXTAREA="textarea",e.TFOOT="tfoot",e.TD="td",e.TH="th",e.THEAD="thead",e.TITLE="title",e.TR="tr",e.TRACK="track",e.TT="tt",e.U="u",e.UL="ul",e.SVG="svg",e.VAR="var",e.WBR="wbr",e.XMP="xmp"})(L||(L={}));var c;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.A=1]="A",e[e.ADDRESS=2]="ADDRESS",e[e.ANNOTATION_XML=3]="ANNOTATION_XML",e[e.APPLET=4]="APPLET",e[e.AREA=5]="AREA",e[e.ARTICLE=6]="ARTICLE",e[e.ASIDE=7]="ASIDE",e[e.B=8]="B",e[e.BASE=9]="BASE",e[e.BASEFONT=10]="BASEFONT",e[e.BGSOUND=11]="BGSOUND",e[e.BIG=12]="BIG",e[e.BLOCKQUOTE=13]="BLOCKQUOTE",e[e.BODY=14]="BODY",e[e.BR=15]="BR",e[e.BUTTON=16]="BUTTON",e[e.CAPTION=17]="CAPTION",e[e.CENTER=18]="CENTER",e[e.CODE=19]="CODE",e[e.COL=20]="COL",e[e.COLGROUP=21]="COLGROUP",e[e.DD=22]="DD",e[e.DESC=23]="DESC",e[e.DETAILS=24]="DETAILS",e[e.DIALOG=25]="DIALOG",e[e.DIR=26]="DIR",e[e.DIV=27]="DIV",e[e.DL=28]="DL",e[e.DT=29]="DT",e[e.EM=30]="EM",e[e.EMBED=31]="EMBED",e[e.FIELDSET=32]="FIELDSET",e[e.FIGCAPTION=33]="FIGCAPTION",e[e.FIGURE=34]="FIGURE",e[e.FONT=35]="FONT",e[e.FOOTER=36]="FOOTER",e[e.FOREIGN_OBJECT=37]="FOREIGN_OBJECT",e[e.FORM=38]="FORM",e[e.FRAME=39]="FRAME",e[e.FRAMESET=40]="FRAMESET",e[e.H1=41]="H1",e[e.H2=42]="H2",e[e.H3=43]="H3",e[e.H4=44]="H4",e[e.H5=45]="H5",e[e.H6=46]="H6",e[e.HEAD=47]="HEAD",e[e.HEADER=48]="HEADER",e[e.HGROUP=49]="HGROUP",e[e.HR=50]="HR",e[e.HTML=51]="HTML",e[e.I=52]="I",e[e.IMG=53]="IMG",e[e.IMAGE=54]="IMAGE",e[e.INPUT=55]="INPUT",e[e.IFRAME=56]="IFRAME",e[e.KEYGEN=57]="KEYGEN",e[e.LABEL=58]="LABEL",e[e.LI=59]="LI",e[e.LINK=60]="LINK",e[e.LISTING=61]="LISTING",e[e.MAIN=62]="MAIN",e[e.MALIGNMARK=63]="MALIGNMARK",e[e.MARQUEE=64]="MARQUEE",e[e.MATH=65]="MATH",e[e.MENU=66]="MENU",e[e.META=67]="META",e[e.MGLYPH=68]="MGLYPH",e[e.MI=69]="MI",e[e.MO=70]="MO",e[e.MN=71]="MN",e[e.MS=72]="MS",e[e.MTEXT=73]="MTEXT",e[e.NAV=74]="NAV",e[e.NOBR=75]="NOBR",e[e.NOFRAMES=76]="NOFRAMES",e[e.NOEMBED=77]="NOEMBED",e[e.NOSCRIPT=78]="NOSCRIPT",e[e.OBJECT=79]="OBJECT",e[e.OL=80]="OL",e[e.OPTGROUP=81]="OPTGROUP",e[e.OPTION=82]="OPTION",e[e.P=83]="P",e[e.PARAM=84]="PARAM",e[e.PLAINTEXT=85]="PLAINTEXT",e[e.PRE=86]="PRE",e[e.RB=87]="RB",e[e.RP=88]="RP",e[e.RT=89]="RT",e[e.RTC=90]="RTC",e[e.RUBY=91]="RUBY",e[e.S=92]="S",e[e.SCRIPT=93]="SCRIPT",e[e.SEARCH=94]="SEARCH",e[e.SECTION=95]="SECTION",e[e.SELECT=96]="SELECT",e[e.SOURCE=97]="SOURCE",e[e.SMALL=98]="SMALL",e[e.SPAN=99]="SPAN",e[e.STRIKE=100]="STRIKE",e[e.STRONG=101]="STRONG",e[e.STYLE=102]="STYLE",e[e.SUB=103]="SUB",e[e.SUMMARY=104]="SUMMARY",e[e.SUP=105]="SUP",e[e.TABLE=106]="TABLE",e[e.TBODY=107]="TBODY",e[e.TEMPLATE=108]="TEMPLATE",e[e.TEXTAREA=109]="TEXTAREA",e[e.TFOOT=110]="TFOOT",e[e.TD=111]="TD",e[e.TH=112]="TH",e[e.THEAD=113]="THEAD",e[e.TITLE=114]="TITLE",e[e.TR=115]="TR",e[e.TRACK=116]="TRACK",e[e.TT=117]="TT",e[e.U=118]="U",e[e.UL=119]="UL",e[e.SVG=120]="SVG",e[e.VAR=121]="VAR",e[e.WBR=122]="WBR",e[e.XMP=123]="XMP"})(c||(c={}));const ZR=new Map([[L.A,c.A],[L.ADDRESS,c.ADDRESS],[L.ANNOTATION_XML,c.ANNOTATION_XML],[L.APPLET,c.APPLET],[L.AREA,c.AREA],[L.ARTICLE,c.ARTICLE],[L.ASIDE,c.ASIDE],[L.B,c.B],[L.BASE,c.BASE],[L.BASEFONT,c.BASEFONT],[L.BGSOUND,c.BGSOUND],[L.BIG,c.BIG],[L.BLOCKQUOTE,c.BLOCKQUOTE],[L.BODY,c.BODY],[L.BR,c.BR],[L.BUTTON,c.BUTTON],[L.CAPTION,c.CAPTION],[L.CENTER,c.CENTER],[L.CODE,c.CODE],[L.COL,c.COL],[L.COLGROUP,c.COLGROUP],[L.DD,c.DD],[L.DESC,c.DESC],[L.DETAILS,c.DETAILS],[L.DIALOG,c.DIALOG],[L.DIR,c.DIR],[L.DIV,c.DIV],[L.DL,c.DL],[L.DT,c.DT],[L.EM,c.EM],[L.EMBED,c.EMBED],[L.FIELDSET,c.FIELDSET],[L.FIGCAPTION,c.FIGCAPTION],[L.FIGURE,c.FIGURE],[L.FONT,c.FONT],[L.FOOTER,c.FOOTER],[L.FOREIGN_OBJECT,c.FOREIGN_OBJECT],[L.FORM,c.FORM],[L.FRAME,c.FRAME],[L.FRAMESET,c.FRAMESET],[L.H1,c.H1],[L.H2,c.H2],[L.H3,c.H3],[L.H4,c.H4],[L.H5,c.H5],[L.H6,c.H6],[L.HEAD,c.HEAD],[L.HEADER,c.HEADER],[L.HGROUP,c.HGROUP],[L.HR,c.HR],[L.HTML,c.HTML],[L.I,c.I],[L.IMG,c.IMG],[L.IMAGE,c.IMAGE],[L.INPUT,c.INPUT],[L.IFRAME,c.IFRAME],[L.KEYGEN,c.KEYGEN],[L.LABEL,c.LABEL],[L.LI,c.LI],[L.LINK,c.LINK],[L.LISTING,c.LISTING],[L.MAIN,c.MAIN],[L.MALIGNMARK,c.MALIGNMARK],[L.MARQUEE,c.MARQUEE],[L.MATH,c.MATH],[L.MENU,c.MENU],[L.META,c.META],[L.MGLYPH,c.MGLYPH],[L.MI,c.MI],[L.MO,c.MO],[L.MN,c.MN],[L.MS,c.MS],[L.MTEXT,c.MTEXT],[L.NAV,c.NAV],[L.NOBR,c.NOBR],[L.NOFRAMES,c.NOFRAMES],[L.NOEMBED,c.NOEMBED],[L.NOSCRIPT,c.NOSCRIPT],[L.OBJECT,c.OBJECT],[L.OL,c.OL],[L.OPTGROUP,c.OPTGROUP],[L.OPTION,c.OPTION],[L.P,c.P],[L.PARAM,c.PARAM],[L.PLAINTEXT,c.PLAINTEXT],[L.PRE,c.PRE],[L.RB,c.RB],[L.RP,c.RP],[L.RT,c.RT],[L.RTC,c.RTC],[L.RUBY,c.RUBY],[L.S,c.S],[L.SCRIPT,c.SCRIPT],[L.SEARCH,c.SEARCH],[L.SECTION,c.SECTION],[L.SELECT,c.SELECT],[L.SOURCE,c.SOURCE],[L.SMALL,c.SMALL],[L.SPAN,c.SPAN],[L.STRIKE,c.STRIKE],[L.STRONG,c.STRONG],[L.STYLE,c.STYLE],[L.SUB,c.SUB],[L.SUMMARY,c.SUMMARY],[L.SUP,c.SUP],[L.TABLE,c.TABLE],[L.TBODY,c.TBODY],[L.TEMPLATE,c.TEMPLATE],[L.TEXTAREA,c.TEXTAREA],[L.TFOOT,c.TFOOT],[L.TD,c.TD],[L.TH,c.TH],[L.THEAD,c.THEAD],[L.TITLE,c.TITLE],[L.TR,c.TR],[L.TRACK,c.TRACK],[L.TT,c.TT],[L.U,c.U],[L.UL,c.UL],[L.SVG,c.SVG],[L.VAR,c.VAR],[L.WBR,c.WBR],[L.XMP,c.XMP]]);function Ya(e){var t;return(t=ZR.get(e))!==null&&t!==void 0?t:c.UNKNOWN}const V=c,eP={[W.HTML]:new Set([V.ADDRESS,V.APPLET,V.AREA,V.ARTICLE,V.ASIDE,V.BASE,V.BASEFONT,V.BGSOUND,V.BLOCKQUOTE,V.BODY,V.BR,V.BUTTON,V.CAPTION,V.CENTER,V.COL,V.COLGROUP,V.DD,V.DETAILS,V.DIR,V.DIV,V.DL,V.DT,V.EMBED,V.FIELDSET,V.FIGCAPTION,V.FIGURE,V.FOOTER,V.FORM,V.FRAME,V.FRAMESET,V.H1,V.H2,V.H3,V.H4,V.H5,V.H6,V.HEAD,V.HEADER,V.HGROUP,V.HR,V.HTML,V.IFRAME,V.IMG,V.INPUT,V.LI,V.LINK,V.LISTING,V.MAIN,V.MARQUEE,V.MENU,V.META,V.NAV,V.NOEMBED,V.NOFRAMES,V.NOSCRIPT,V.OBJECT,V.OL,V.P,V.PARAM,V.PLAINTEXT,V.PRE,V.SCRIPT,V.SECTION,V.SELECT,V.SOURCE,V.STYLE,V.SUMMARY,V.TABLE,V.TBODY,V.TD,V.TEMPLATE,V.TEXTAREA,V.TFOOT,V.TH,V.THEAD,V.TITLE,V.TR,V.TRACK,V.UL,V.WBR,V.XMP]),[W.MATHML]:new Set([V.MI,V.MO,V.MN,V.MS,V.MTEXT,V.ANNOTATION_XML]),[W.SVG]:new Set([V.TITLE,V.FOREIGN_OBJECT,V.DESC]),[W.XLINK]:new Set,[W.XML]:new Set,[W.XMLNS]:new Set},gf=new Set([V.H1,V.H2,V.H3,V.H4,V.H5,V.H6]);L.STYLE,L.SCRIPT,L.XMP,L.IFRAME,L.NOEMBED,L.NOFRAMES,L.PLAINTEXT;var C;(function(e){e[e.DATA=0]="DATA",e[e.RCDATA=1]="RCDATA",e[e.RAWTEXT=2]="RAWTEXT",e[e.SCRIPT_DATA=3]="SCRIPT_DATA",e[e.PLAINTEXT=4]="PLAINTEXT",e[e.TAG_OPEN=5]="TAG_OPEN",e[e.END_TAG_OPEN=6]="END_TAG_OPEN",e[e.TAG_NAME=7]="TAG_NAME",e[e.RCDATA_LESS_THAN_SIGN=8]="RCDATA_LESS_THAN_SIGN",e[e.RCDATA_END_TAG_OPEN=9]="RCDATA_END_TAG_OPEN",e[e.RCDATA_END_TAG_NAME=10]="RCDATA_END_TAG_NAME",e[e.RAWTEXT_LESS_THAN_SIGN=11]="RAWTEXT_LESS_THAN_SIGN",e[e.RAWTEXT_END_TAG_OPEN=12]="RAWTEXT_END_TAG_OPEN",e[e.RAWTEXT_END_TAG_NAME=13]="RAWTEXT_END_TAG_NAME",e[e.SCRIPT_DATA_LESS_THAN_SIGN=14]="SCRIPT_DATA_LESS_THAN_SIGN",e[e.SCRIPT_DATA_END_TAG_OPEN=15]="SCRIPT_DATA_END_TAG_OPEN",e[e.SCRIPT_DATA_END_TAG_NAME=16]="SCRIPT_DATA_END_TAG_NAME",e[e.SCRIPT_DATA_ESCAPE_START=17]="SCRIPT_DATA_ESCAPE_START",e[e.SCRIPT_DATA_ESCAPE_START_DASH=18]="SCRIPT_DATA_ESCAPE_START_DASH",e[e.SCRIPT_DATA_ESCAPED=19]="SCRIPT_DATA_ESCAPED",e[e.SCRIPT_DATA_ESCAPED_DASH=20]="SCRIPT_DATA_ESCAPED_DASH",e[e.SCRIPT_DATA_ESCAPED_DASH_DASH=21]="SCRIPT_DATA_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN=22]="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN=23]="SCRIPT_DATA_ESCAPED_END_TAG_OPEN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME=24]="SCRIPT_DATA_ESCAPED_END_TAG_NAME",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START=25]="SCRIPT_DATA_DOUBLE_ESCAPE_START",e[e.SCRIPT_DATA_DOUBLE_ESCAPED=26]="SCRIPT_DATA_DOUBLE_ESCAPED",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH=27]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH=28]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN=29]="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END=30]="SCRIPT_DATA_DOUBLE_ESCAPE_END",e[e.BEFORE_ATTRIBUTE_NAME=31]="BEFORE_ATTRIBUTE_NAME",e[e.ATTRIBUTE_NAME=32]="ATTRIBUTE_NAME",e[e.AFTER_ATTRIBUTE_NAME=33]="AFTER_ATTRIBUTE_NAME",e[e.BEFORE_ATTRIBUTE_VALUE=34]="BEFORE_ATTRIBUTE_VALUE",e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED=35]="ATTRIBUTE_VALUE_DOUBLE_QUOTED",e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED=36]="ATTRIBUTE_VALUE_SINGLE_QUOTED",e[e.ATTRIBUTE_VALUE_UNQUOTED=37]="ATTRIBUTE_VALUE_UNQUOTED",e[e.AFTER_ATTRIBUTE_VALUE_QUOTED=38]="AFTER_ATTRIBUTE_VALUE_QUOTED",e[e.SELF_CLOSING_START_TAG=39]="SELF_CLOSING_START_TAG",e[e.BOGUS_COMMENT=40]="BOGUS_COMMENT",e[e.MARKUP_DECLARATION_OPEN=41]="MARKUP_DECLARATION_OPEN",e[e.COMMENT_START=42]="COMMENT_START",e[e.COMMENT_START_DASH=43]="COMMENT_START_DASH",e[e.COMMENT=44]="COMMENT",e[e.COMMENT_LESS_THAN_SIGN=45]="COMMENT_LESS_THAN_SIGN",e[e.COMMENT_LESS_THAN_SIGN_BANG=46]="COMMENT_LESS_THAN_SIGN_BANG",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH=47]="COMMENT_LESS_THAN_SIGN_BANG_DASH",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH=48]="COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH",e[e.COMMENT_END_DASH=49]="COMMENT_END_DASH",e[e.COMMENT_END=50]="COMMENT_END",e[e.COMMENT_END_BANG=51]="COMMENT_END_BANG",e[e.DOCTYPE=52]="DOCTYPE",e[e.BEFORE_DOCTYPE_NAME=53]="BEFORE_DOCTYPE_NAME",e[e.DOCTYPE_NAME=54]="DOCTYPE_NAME",e[e.AFTER_DOCTYPE_NAME=55]="AFTER_DOCTYPE_NAME",e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD=56]="AFTER_DOCTYPE_PUBLIC_KEYWORD",e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER=57]="BEFORE_DOCTYPE_PUBLIC_IDENTIFIER",e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED=58]="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED=59]="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER=60]="AFTER_DOCTYPE_PUBLIC_IDENTIFIER",e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS=61]="BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS",e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD=62]="AFTER_DOCTYPE_SYSTEM_KEYWORD",e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER=63]="BEFORE_DOCTYPE_SYSTEM_IDENTIFIER",e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED=64]="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED=65]="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER=66]="AFTER_DOCTYPE_SYSTEM_IDENTIFIER",e[e.BOGUS_DOCTYPE=67]="BOGUS_DOCTYPE",e[e.CDATA_SECTION=68]="CDATA_SECTION",e[e.CDATA_SECTION_BRACKET=69]="CDATA_SECTION_BRACKET",e[e.CDATA_SECTION_END=70]="CDATA_SECTION_END",e[e.CHARACTER_REFERENCE=71]="CHARACTER_REFERENCE",e[e.AMBIGUOUS_AMPERSAND=72]="AMBIGUOUS_AMPERSAND"})(C||(C={}));const je={DATA:C.DATA,RCDATA:C.RCDATA,RAWTEXT:C.RAWTEXT,SCRIPT_DATA:C.SCRIPT_DATA,PLAINTEXT:C.PLAINTEXT,CDATA_SECTION:C.CDATA_SECTION};function tP(e){return e>=v.DIGIT_0&&e<=v.DIGIT_9}function fo(e){return e>=v.LATIN_CAPITAL_A&&e<=v.LATIN_CAPITAL_Z}function nP(e){return e>=v.LATIN_SMALL_A&&e<=v.LATIN_SMALL_Z}function Tr(e){return nP(e)||fo(e)}function og(e){return Tr(e)||tP(e)}function Ks(e){return e+32}function VT(e){return e===v.SPACE||e===v.LINE_FEED||e===v.TABULATION||e===v.FORM_FEED}function sg(e){return VT(e)||e===v.SOLIDUS||e===v.GREATER_THAN_SIGN}function rP(e){return e===v.NULL?R.nullCharacterReference:e>1114111?R.characterReferenceOutsideUnicodeRange:jT(e)?R.surrogateCharacterReference:WT(e)?R.noncharacterCharacterReference:zT(e)||e===v.CARRIAGE_RETURN?R.controlCharacterReference:null}class iP{constructor(t,n){this.options=t,this.handler=n,this.paused=!1,this.inLoop=!1,this.inForeignNode=!1,this.lastStartTagName="",this.active=!1,this.state=C.DATA,this.returnState=C.DATA,this.entityStartPos=0,this.consumedAfterSnapshot=-1,this.currentCharacterToken=null,this.currentToken=null,this.currentAttr={name:"",value:""},this.preprocessor=new WR(n),this.currentLocation=this.getCurrentLocation(-1),this.entityDecoder=new XR(YR,(r,i)=>{this.preprocessor.pos=this.entityStartPos+i-1,this._flushCodePointConsumedAsCharacterReference(r)},n.onParseError?{missingSemicolonAfterCharacterReference:()=>{this._err(R.missingSemicolonAfterCharacterReference,1)},absenceOfDigitsInNumericCharacterReference:r=>{this._err(R.absenceOfDigitsInNumericCharacterReference,this.entityStartPos-this.preprocessor.pos+r)},validateNumericCharacterReference:r=>{const i=rP(r);i&&this._err(i,1)}}:void 0)}_err(t,n=0){var r,i;(i=(r=this.handler).onParseError)===null||i===void 0||i.call(r,this.preprocessor.getError(t,n))}getCurrentLocation(t){return this.options.sourceCodeLocationInfo?{startLine:this.preprocessor.line,startCol:this.preprocessor.col-t,startOffset:this.preprocessor.offset-t,endLine:-1,endCol:-1,endOffset:-1}:null}_runParsingLoop(){if(!this.inLoop){for(this.inLoop=!0;this.active&&!this.paused;){this.consumedAfterSnapshot=0;const t=this._consume();this._ensureHibernation()||this._callState(t)}this.inLoop=!1}}pause(){this.paused=!0}resume(t){if(!this.paused)throw new Error("Parser was already resumed");this.paused=!1,!this.inLoop&&(this._runParsingLoop(),this.paused||t==null||t())}write(t,n,r){this.active=!0,this.preprocessor.write(t,n),this._runParsingLoop(),this.paused||r==null||r()}insertHtmlAtCurrentPos(t){this.active=!0,this.preprocessor.insertHtmlAtCurrentPos(t),this._runParsingLoop()}_ensureHibernation(){return this.preprocessor.endOfChunkHit?(this.preprocessor.retreat(this.consumedAfterSnapshot),this.consumedAfterSnapshot=0,this.active=!1,!0):!1}_consume(){return this.consumedAfterSnapshot++,this.preprocessor.advance()}_advanceBy(t){this.consumedAfterSnapshot+=t;for(let n=0;n<t;n++)this.preprocessor.advance()}_consumeSequenceIfMatch(t,n){return this.preprocessor.startsWith(t,n)?(this._advanceBy(t.length-1),!0):!1}_createStartTagToken(){this.currentToken={type:fe.START_TAG,tagName:"",tagID:c.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(1)}}_createEndTagToken(){this.currentToken={type:fe.END_TAG,tagName:"",tagID:c.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(2)}}_createCommentToken(t){this.currentToken={type:fe.COMMENT,data:"",location:this.getCurrentLocation(t)}}_createDoctypeToken(t){this.currentToken={type:fe.DOCTYPE,name:t,forceQuirks:!1,publicId:null,systemId:null,location:this.currentLocation}}_createCharacterToken(t,n){this.currentCharacterToken={type:t,chars:n,location:this.currentLocation}}_createAttr(t){this.currentAttr={name:t,value:""},this.currentLocation=this.getCurrentLocation(0)}_leaveAttrName(){var t,n;const r=this.currentToken;if(YT(r,this.currentAttr.name)===null){if(r.attrs.push(this.currentAttr),r.location&&this.currentLocation){const i=(t=(n=r.location).attrs)!==null&&t!==void 0?t:n.attrs=Object.create(null);i[this.currentAttr.name]=this.currentLocation,this._leaveAttrValue()}}else this._err(R.duplicateAttribute)}_leaveAttrValue(){this.currentLocation&&(this.currentLocation.endLine=this.preprocessor.line,this.currentLocation.endCol=this.preprocessor.col,this.currentLocation.endOffset=this.preprocessor.offset)}prepareToken(t){this._emitCurrentCharacterToken(t.location),this.currentToken=null,t.location&&(t.location.endLine=this.preprocessor.line,t.location.endCol=this.preprocessor.col+1,t.location.endOffset=this.preprocessor.offset+1),this.currentLocation=this.getCurrentLocation(-1)}emitCurrentTagToken(){const t=this.currentToken;this.prepareToken(t),t.tagID=Ya(t.tagName),t.type===fe.START_TAG?(this.lastStartTagName=t.tagName,this.handler.onStartTag(t)):(t.attrs.length>0&&this._err(R.endTagWithAttributes),t.selfClosing&&this._err(R.endTagWithTrailingSolidus),this.handler.onEndTag(t)),this.preprocessor.dropParsedChunk()}emitCurrentComment(t){this.prepareToken(t),this.handler.onComment(t),this.preprocessor.dropParsedChunk()}emitCurrentDoctype(t){this.prepareToken(t),this.handler.onDoctype(t),this.preprocessor.dropParsedChunk()}_emitCurrentCharacterToken(t){if(this.currentCharacterToken){switch(t&&this.currentCharacterToken.location&&(this.currentCharacterToken.location.endLine=t.startLine,this.currentCharacterToken.location.endCol=t.startCol,this.currentCharacterToken.location.endOffset=t.startOffset),this.currentCharacterToken.type){case fe.CHARACTER:{this.handler.onCharacter(this.currentCharacterToken);break}case fe.NULL_CHARACTER:{this.handler.onNullCharacter(this.currentCharacterToken);break}case fe.WHITESPACE_CHARACTER:{this.handler.onWhitespaceCharacter(this.currentCharacterToken);break}}this.currentCharacterToken=null}}_emitEOFToken(){const t=this.getCurrentLocation(0);t&&(t.endLine=t.startLine,t.endCol=t.startCol,t.endOffset=t.startOffset),this._emitCurrentCharacterToken(t),this.handler.onEof({type:fe.EOF,location:t}),this.active=!1}_appendCharToCurrentCharacterToken(t,n){if(this.currentCharacterToken)if(this.currentCharacterToken.type===t){this.currentCharacterToken.chars+=n;return}else this.currentLocation=this.getCurrentLocation(0),this._emitCurrentCharacterToken(this.currentLocation),this.preprocessor.dropParsedChunk();this._createCharacterToken(t,n)}_emitCodePoint(t){const n=VT(t)?fe.WHITESPACE_CHARACTER:t===v.NULL?fe.NULL_CHARACTER:fe.CHARACTER;this._appendCharToCurrentCharacterToken(n,String.fromCodePoint(t))}_emitChars(t){this._appendCharToCurrentCharacterToken(fe.CHARACTER,t)}_startCharacterReference(){this.returnState=this.state,this.state=C.CHARACTER_REFERENCE,this.entityStartPos=this.preprocessor.pos,this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute()?Kn.Attribute:Kn.Legacy)}_isCharacterReferenceInAttribute(){return this.returnState===C.ATTRIBUTE_VALUE_DOUBLE_QUOTED||this.returnState===C.ATTRIBUTE_VALUE_SINGLE_QUOTED||this.returnState===C.ATTRIBUTE_VALUE_UNQUOTED}_flushCodePointConsumedAsCharacterReference(t){this._isCharacterReferenceInAttribute()?this.currentAttr.value+=String.fromCodePoint(t):this._emitCodePoint(t)}_callState(t){switch(this.state){case C.DATA:{this._stateData(t);break}case C.RCDATA:{this._stateRcdata(t);break}case C.RAWTEXT:{this._stateRawtext(t);break}case C.SCRIPT_DATA:{this._stateScriptData(t);break}case C.PLAINTEXT:{this._statePlaintext(t);break}case C.TAG_OPEN:{this._stateTagOpen(t);break}case C.END_TAG_OPEN:{this._stateEndTagOpen(t);break}case C.TAG_NAME:{this._stateTagName(t);break}case C.RCDATA_LESS_THAN_SIGN:{this._stateRcdataLessThanSign(t);break}case C.RCDATA_END_TAG_OPEN:{this._stateRcdataEndTagOpen(t);break}case C.RCDATA_END_TAG_NAME:{this._stateRcdataEndTagName(t);break}case C.RAWTEXT_LESS_THAN_SIGN:{this._stateRawtextLessThanSign(t);break}case C.RAWTEXT_END_TAG_OPEN:{this._stateRawtextEndTagOpen(t);break}case C.RAWTEXT_END_TAG_NAME:{this._stateRawtextEndTagName(t);break}case C.SCRIPT_DATA_LESS_THAN_SIGN:{this._stateScriptDataLessThanSign(t);break}case C.SCRIPT_DATA_END_TAG_OPEN:{this._stateScriptDataEndTagOpen(t);break}case C.SCRIPT_DATA_END_TAG_NAME:{this._stateScriptDataEndTagName(t);break}case C.SCRIPT_DATA_ESCAPE_START:{this._stateScriptDataEscapeStart(t);break}case C.SCRIPT_DATA_ESCAPE_START_DASH:{this._stateScriptDataEscapeStartDash(t);break}case C.SCRIPT_DATA_ESCAPED:{this._stateScriptDataEscaped(t);break}case C.SCRIPT_DATA_ESCAPED_DASH:{this._stateScriptDataEscapedDash(t);break}case C.SCRIPT_DATA_ESCAPED_DASH_DASH:{this._stateScriptDataEscapedDashDash(t);break}case C.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataEscapedLessThanSign(t);break}case C.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:{this._stateScriptDataEscapedEndTagOpen(t);break}case C.SCRIPT_DATA_ESCAPED_END_TAG_NAME:{this._stateScriptDataEscapedEndTagName(t);break}case C.SCRIPT_DATA_DOUBLE_ESCAPE_START:{this._stateScriptDataDoubleEscapeStart(t);break}case C.SCRIPT_DATA_DOUBLE_ESCAPED:{this._stateScriptDataDoubleEscaped(t);break}case C.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:{this._stateScriptDataDoubleEscapedDash(t);break}case C.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:{this._stateScriptDataDoubleEscapedDashDash(t);break}case C.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataDoubleEscapedLessThanSign(t);break}case C.SCRIPT_DATA_DOUBLE_ESCAPE_END:{this._stateScriptDataDoubleEscapeEnd(t);break}case C.BEFORE_ATTRIBUTE_NAME:{this._stateBeforeAttributeName(t);break}case C.ATTRIBUTE_NAME:{this._stateAttributeName(t);break}case C.AFTER_ATTRIBUTE_NAME:{this._stateAfterAttributeName(t);break}case C.BEFORE_ATTRIBUTE_VALUE:{this._stateBeforeAttributeValue(t);break}case C.ATTRIBUTE_VALUE_DOUBLE_QUOTED:{this._stateAttributeValueDoubleQuoted(t);break}case C.ATTRIBUTE_VALUE_SINGLE_QUOTED:{this._stateAttributeValueSingleQuoted(t);break}case C.ATTRIBUTE_VALUE_UNQUOTED:{this._stateAttributeValueUnquoted(t);break}case C.AFTER_ATTRIBUTE_VALUE_QUOTED:{this._stateAfterAttributeValueQuoted(t);break}case C.SELF_CLOSING_START_TAG:{this._stateSelfClosingStartTag(t);break}case C.BOGUS_COMMENT:{this._stateBogusComment(t);break}case C.MARKUP_DECLARATION_OPEN:{this._stateMarkupDeclarationOpen(t);break}case C.COMMENT_START:{this._stateCommentStart(t);break}case C.COMMENT_START_DASH:{this._stateCommentStartDash(t);break}case C.COMMENT:{this._stateComment(t);break}case C.COMMENT_LESS_THAN_SIGN:{this._stateCommentLessThanSign(t);break}case C.COMMENT_LESS_THAN_SIGN_BANG:{this._stateCommentLessThanSignBang(t);break}case C.COMMENT_LESS_THAN_SIGN_BANG_DASH:{this._stateCommentLessThanSignBangDash(t);break}case C.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:{this._stateCommentLessThanSignBangDashDash(t);break}case C.COMMENT_END_DASH:{this._stateCommentEndDash(t);break}case C.COMMENT_END:{this._stateCommentEnd(t);break}case C.COMMENT_END_BANG:{this._stateCommentEndBang(t);break}case C.DOCTYPE:{this._stateDoctype(t);break}case C.BEFORE_DOCTYPE_NAME:{this._stateBeforeDoctypeName(t);break}case C.DOCTYPE_NAME:{this._stateDoctypeName(t);break}case C.AFTER_DOCTYPE_NAME:{this._stateAfterDoctypeName(t);break}case C.AFTER_DOCTYPE_PUBLIC_KEYWORD:{this._stateAfterDoctypePublicKeyword(t);break}case C.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateBeforeDoctypePublicIdentifier(t);break}case C.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypePublicIdentifierDoubleQuoted(t);break}case C.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypePublicIdentifierSingleQuoted(t);break}case C.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateAfterDoctypePublicIdentifier(t);break}case C.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:{this._stateBetweenDoctypePublicAndSystemIdentifiers(t);break}case C.AFTER_DOCTYPE_SYSTEM_KEYWORD:{this._stateAfterDoctypeSystemKeyword(t);break}case C.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateBeforeDoctypeSystemIdentifier(t);break}case C.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypeSystemIdentifierDoubleQuoted(t);break}case C.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypeSystemIdentifierSingleQuoted(t);break}case C.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateAfterDoctypeSystemIdentifier(t);break}case C.BOGUS_DOCTYPE:{this._stateBogusDoctype(t);break}case C.CDATA_SECTION:{this._stateCdataSection(t);break}case C.CDATA_SECTION_BRACKET:{this._stateCdataSectionBracket(t);break}case C.CDATA_SECTION_END:{this._stateCdataSectionEnd(t);break}case C.CHARACTER_REFERENCE:{this._stateCharacterReference();break}case C.AMBIGUOUS_AMPERSAND:{this._stateAmbiguousAmpersand(t);break}default:throw new Error("Unknown state")}}_stateData(t){switch(t){case v.LESS_THAN_SIGN:{this.state=C.TAG_OPEN;break}case v.AMPERSAND:{this._startCharacterReference();break}case v.NULL:{this._err(R.unexpectedNullCharacter),this._emitCodePoint(t);break}case v.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRcdata(t){switch(t){case v.AMPERSAND:{this._startCharacterReference();break}case v.LESS_THAN_SIGN:{this.state=C.RCDATA_LESS_THAN_SIGN;break}case v.NULL:{this._err(R.unexpectedNullCharacter),this._emitChars(Oe);break}case v.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRawtext(t){switch(t){case v.LESS_THAN_SIGN:{this.state=C.RAWTEXT_LESS_THAN_SIGN;break}case v.NULL:{this._err(R.unexpectedNullCharacter),this._emitChars(Oe);break}case v.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptData(t){switch(t){case v.LESS_THAN_SIGN:{this.state=C.SCRIPT_DATA_LESS_THAN_SIGN;break}case v.NULL:{this._err(R.unexpectedNullCharacter),this._emitChars(Oe);break}case v.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_statePlaintext(t){switch(t){case v.NULL:{this._err(R.unexpectedNullCharacter),this._emitChars(Oe);break}case v.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateTagOpen(t){if(Tr(t))this._createStartTagToken(),this.state=C.TAG_NAME,this._stateTagName(t);else switch(t){case v.EXCLAMATION_MARK:{this.state=C.MARKUP_DECLARATION_OPEN;break}case v.SOLIDUS:{this.state=C.END_TAG_OPEN;break}case v.QUESTION_MARK:{this._err(R.unexpectedQuestionMarkInsteadOfTagName),this._createCommentToken(1),this.state=C.BOGUS_COMMENT,this._stateBogusComment(t);break}case v.EOF:{this._err(R.eofBeforeTagName),this._emitChars("<"),this._emitEOFToken();break}default:this._err(R.invalidFirstCharacterOfTagName),this._emitChars("<"),this.state=C.DATA,this._stateData(t)}}_stateEndTagOpen(t){if(Tr(t))this._createEndTagToken(),this.state=C.TAG_NAME,this._stateTagName(t);else switch(t){case v.GREATER_THAN_SIGN:{this._err(R.missingEndTagName),this.state=C.DATA;break}case v.EOF:{this._err(R.eofBeforeTagName),this._emitChars("</"),this._emitEOFToken();break}default:this._err(R.invalidFirstCharacterOfTagName),this._createCommentToken(2),this.state=C.BOGUS_COMMENT,this._stateBogusComment(t)}}_stateTagName(t){const n=this.currentToken;switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:{this.state=C.BEFORE_ATTRIBUTE_NAME;break}case v.SOLIDUS:{this.state=C.SELF_CLOSING_START_TAG;break}case v.GREATER_THAN_SIGN:{this.state=C.DATA,this.emitCurrentTagToken();break}case v.NULL:{this._err(R.unexpectedNullCharacter),n.tagName+=Oe;break}case v.EOF:{this._err(R.eofInTag),this._emitEOFToken();break}default:n.tagName+=String.fromCodePoint(fo(t)?Ks(t):t)}}_stateRcdataLessThanSign(t){t===v.SOLIDUS?this.state=C.RCDATA_END_TAG_OPEN:(this._emitChars("<"),this.state=C.RCDATA,this._stateRcdata(t))}_stateRcdataEndTagOpen(t){Tr(t)?(this.state=C.RCDATA_END_TAG_NAME,this._stateRcdataEndTagName(t)):(this._emitChars("</"),this.state=C.RCDATA,this._stateRcdata(t))}handleSpecialEndTag(t){if(!this.preprocessor.startsWith(this.lastStartTagName,!1))return!this._ensureHibernation();this._createEndTagToken();const n=this.currentToken;switch(n.tagName=this.lastStartTagName,this.preprocessor.peek(this.lastStartTagName.length)){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:return this._advanceBy(this.lastStartTagName.length),this.state=C.BEFORE_ATTRIBUTE_NAME,!1;case v.SOLIDUS:return this._advanceBy(this.lastStartTagName.length),this.state=C.SELF_CLOSING_START_TAG,!1;case v.GREATER_THAN_SIGN:return this._advanceBy(this.lastStartTagName.length),this.emitCurrentTagToken(),this.state=C.DATA,!1;default:return!this._ensureHibernation()}}_stateRcdataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=C.RCDATA,this._stateRcdata(t))}_stateRawtextLessThanSign(t){t===v.SOLIDUS?this.state=C.RAWTEXT_END_TAG_OPEN:(this._emitChars("<"),this.state=C.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagOpen(t){Tr(t)?(this.state=C.RAWTEXT_END_TAG_NAME,this._stateRawtextEndTagName(t)):(this._emitChars("</"),this.state=C.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=C.RAWTEXT,this._stateRawtext(t))}_stateScriptDataLessThanSign(t){switch(t){case v.SOLIDUS:{this.state=C.SCRIPT_DATA_END_TAG_OPEN;break}case v.EXCLAMATION_MARK:{this.state=C.SCRIPT_DATA_ESCAPE_START,this._emitChars("<!");break}default:this._emitChars("<"),this.state=C.SCRIPT_DATA,this._stateScriptData(t)}}_stateScriptDataEndTagOpen(t){Tr(t)?(this.state=C.SCRIPT_DATA_END_TAG_NAME,this._stateScriptDataEndTagName(t)):(this._emitChars("</"),this.state=C.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=C.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStart(t){t===v.HYPHEN_MINUS?(this.state=C.SCRIPT_DATA_ESCAPE_START_DASH,this._emitChars("-")):(this.state=C.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStartDash(t){t===v.HYPHEN_MINUS?(this.state=C.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-")):(this.state=C.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscaped(t){switch(t){case v.HYPHEN_MINUS:{this.state=C.SCRIPT_DATA_ESCAPED_DASH,this._emitChars("-");break}case v.LESS_THAN_SIGN:{this.state=C.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case v.NULL:{this._err(R.unexpectedNullCharacter),this._emitChars(Oe);break}case v.EOF:{this._err(R.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataEscapedDash(t){switch(t){case v.HYPHEN_MINUS:{this.state=C.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-");break}case v.LESS_THAN_SIGN:{this.state=C.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case v.NULL:{this._err(R.unexpectedNullCharacter),this.state=C.SCRIPT_DATA_ESCAPED,this._emitChars(Oe);break}case v.EOF:{this._err(R.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=C.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedDashDash(t){switch(t){case v.HYPHEN_MINUS:{this._emitChars("-");break}case v.LESS_THAN_SIGN:{this.state=C.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case v.GREATER_THAN_SIGN:{this.state=C.SCRIPT_DATA,this._emitChars(">");break}case v.NULL:{this._err(R.unexpectedNullCharacter),this.state=C.SCRIPT_DATA_ESCAPED,this._emitChars(Oe);break}case v.EOF:{this._err(R.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=C.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedLessThanSign(t){t===v.SOLIDUS?this.state=C.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:Tr(t)?(this._emitChars("<"),this.state=C.SCRIPT_DATA_DOUBLE_ESCAPE_START,this._stateScriptDataDoubleEscapeStart(t)):(this._emitChars("<"),this.state=C.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagOpen(t){Tr(t)?(this.state=C.SCRIPT_DATA_ESCAPED_END_TAG_NAME,this._stateScriptDataEscapedEndTagName(t)):(this._emitChars("</"),this.state=C.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=C.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscapeStart(t){if(this.preprocessor.startsWith(wt.SCRIPT,!1)&&sg(this.preprocessor.peek(wt.SCRIPT.length))){this._emitCodePoint(t);for(let n=0;n<wt.SCRIPT.length;n++)this._emitCodePoint(this._consume());this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED}else this._ensureHibernation()||(this.state=C.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscaped(t){switch(t){case v.HYPHEN_MINUS:{this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED_DASH,this._emitChars("-");break}case v.LESS_THAN_SIGN:{this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case v.NULL:{this._err(R.unexpectedNullCharacter),this._emitChars(Oe);break}case v.EOF:{this._err(R.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDash(t){switch(t){case v.HYPHEN_MINUS:{this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH,this._emitChars("-");break}case v.LESS_THAN_SIGN:{this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case v.NULL:{this._err(R.unexpectedNullCharacter),this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(Oe);break}case v.EOF:{this._err(R.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDashDash(t){switch(t){case v.HYPHEN_MINUS:{this._emitChars("-");break}case v.LESS_THAN_SIGN:{this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case v.GREATER_THAN_SIGN:{this.state=C.SCRIPT_DATA,this._emitChars(">");break}case v.NULL:{this._err(R.unexpectedNullCharacter),this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(Oe);break}case v.EOF:{this._err(R.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedLessThanSign(t){t===v.SOLIDUS?(this.state=C.SCRIPT_DATA_DOUBLE_ESCAPE_END,this._emitChars("/")):(this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateScriptDataDoubleEscapeEnd(t){if(this.preprocessor.startsWith(wt.SCRIPT,!1)&&sg(this.preprocessor.peek(wt.SCRIPT.length))){this._emitCodePoint(t);for(let n=0;n<wt.SCRIPT.length;n++)this._emitCodePoint(this._consume());this.state=C.SCRIPT_DATA_ESCAPED}else this._ensureHibernation()||(this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateBeforeAttributeName(t){switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:break;case v.SOLIDUS:case v.GREATER_THAN_SIGN:case v.EOF:{this.state=C.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case v.EQUALS_SIGN:{this._err(R.unexpectedEqualsSignBeforeAttributeName),this._createAttr("="),this.state=C.ATTRIBUTE_NAME;break}default:this._createAttr(""),this.state=C.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateAttributeName(t){switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:case v.SOLIDUS:case v.GREATER_THAN_SIGN:case v.EOF:{this._leaveAttrName(),this.state=C.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case v.EQUALS_SIGN:{this._leaveAttrName(),this.state=C.BEFORE_ATTRIBUTE_VALUE;break}case v.QUOTATION_MARK:case v.APOSTROPHE:case v.LESS_THAN_SIGN:{this._err(R.unexpectedCharacterInAttributeName),this.currentAttr.name+=String.fromCodePoint(t);break}case v.NULL:{this._err(R.unexpectedNullCharacter),this.currentAttr.name+=Oe;break}default:this.currentAttr.name+=String.fromCodePoint(fo(t)?Ks(t):t)}}_stateAfterAttributeName(t){switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:break;case v.SOLIDUS:{this.state=C.SELF_CLOSING_START_TAG;break}case v.EQUALS_SIGN:{this.state=C.BEFORE_ATTRIBUTE_VALUE;break}case v.GREATER_THAN_SIGN:{this.state=C.DATA,this.emitCurrentTagToken();break}case v.EOF:{this._err(R.eofInTag),this._emitEOFToken();break}default:this._createAttr(""),this.state=C.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateBeforeAttributeValue(t){switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:break;case v.QUOTATION_MARK:{this.state=C.ATTRIBUTE_VALUE_DOUBLE_QUOTED;break}case v.APOSTROPHE:{this.state=C.ATTRIBUTE_VALUE_SINGLE_QUOTED;break}case v.GREATER_THAN_SIGN:{this._err(R.missingAttributeValue),this.state=C.DATA,this.emitCurrentTagToken();break}default:this.state=C.ATTRIBUTE_VALUE_UNQUOTED,this._stateAttributeValueUnquoted(t)}}_stateAttributeValueDoubleQuoted(t){switch(t){case v.QUOTATION_MARK:{this.state=C.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case v.AMPERSAND:{this._startCharacterReference();break}case v.NULL:{this._err(R.unexpectedNullCharacter),this.currentAttr.value+=Oe;break}case v.EOF:{this._err(R.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueSingleQuoted(t){switch(t){case v.APOSTROPHE:{this.state=C.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case v.AMPERSAND:{this._startCharacterReference();break}case v.NULL:{this._err(R.unexpectedNullCharacter),this.currentAttr.value+=Oe;break}case v.EOF:{this._err(R.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueUnquoted(t){switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:{this._leaveAttrValue(),this.state=C.BEFORE_ATTRIBUTE_NAME;break}case v.AMPERSAND:{this._startCharacterReference();break}case v.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=C.DATA,this.emitCurrentTagToken();break}case v.NULL:{this._err(R.unexpectedNullCharacter),this.currentAttr.value+=Oe;break}case v.QUOTATION_MARK:case v.APOSTROPHE:case v.LESS_THAN_SIGN:case v.EQUALS_SIGN:case v.GRAVE_ACCENT:{this._err(R.unexpectedCharacterInUnquotedAttributeValue),this.currentAttr.value+=String.fromCodePoint(t);break}case v.EOF:{this._err(R.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAfterAttributeValueQuoted(t){switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:{this._leaveAttrValue(),this.state=C.BEFORE_ATTRIBUTE_NAME;break}case v.SOLIDUS:{this._leaveAttrValue(),this.state=C.SELF_CLOSING_START_TAG;break}case v.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=C.DATA,this.emitCurrentTagToken();break}case v.EOF:{this._err(R.eofInTag),this._emitEOFToken();break}default:this._err(R.missingWhitespaceBetweenAttributes),this.state=C.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateSelfClosingStartTag(t){switch(t){case v.GREATER_THAN_SIGN:{const n=this.currentToken;n.selfClosing=!0,this.state=C.DATA,this.emitCurrentTagToken();break}case v.EOF:{this._err(R.eofInTag),this._emitEOFToken();break}default:this._err(R.unexpectedSolidusInTag),this.state=C.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateBogusComment(t){const n=this.currentToken;switch(t){case v.GREATER_THAN_SIGN:{this.state=C.DATA,this.emitCurrentComment(n);break}case v.EOF:{this.emitCurrentComment(n),this._emitEOFToken();break}case v.NULL:{this._err(R.unexpectedNullCharacter),n.data+=Oe;break}default:n.data+=String.fromCodePoint(t)}}_stateMarkupDeclarationOpen(t){this._consumeSequenceIfMatch(wt.DASH_DASH,!0)?(this._createCommentToken(wt.DASH_DASH.length+1),this.state=C.COMMENT_START):this._consumeSequenceIfMatch(wt.DOCTYPE,!1)?(this.currentLocation=this.getCurrentLocation(wt.DOCTYPE.length+1),this.state=C.DOCTYPE):this._consumeSequenceIfMatch(wt.CDATA_START,!0)?this.inForeignNode?this.state=C.CDATA_SECTION:(this._err(R.cdataInHtmlContent),this._createCommentToken(wt.CDATA_START.length+1),this.currentToken.data="[CDATA[",this.state=C.BOGUS_COMMENT):this._ensureHibernation()||(this._err(R.incorrectlyOpenedComment),this._createCommentToken(2),this.state=C.BOGUS_COMMENT,this._stateBogusComment(t))}_stateCommentStart(t){switch(t){case v.HYPHEN_MINUS:{this.state=C.COMMENT_START_DASH;break}case v.GREATER_THAN_SIGN:{this._err(R.abruptClosingOfEmptyComment),this.state=C.DATA;const n=this.currentToken;this.emitCurrentComment(n);break}default:this.state=C.COMMENT,this._stateComment(t)}}_stateCommentStartDash(t){const n=this.currentToken;switch(t){case v.HYPHEN_MINUS:{this.state=C.COMMENT_END;break}case v.GREATER_THAN_SIGN:{this._err(R.abruptClosingOfEmptyComment),this.state=C.DATA,this.emitCurrentComment(n);break}case v.EOF:{this._err(R.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="-",this.state=C.COMMENT,this._stateComment(t)}}_stateComment(t){const n=this.currentToken;switch(t){case v.HYPHEN_MINUS:{this.state=C.COMMENT_END_DASH;break}case v.LESS_THAN_SIGN:{n.data+="<",this.state=C.COMMENT_LESS_THAN_SIGN;break}case v.NULL:{this._err(R.unexpectedNullCharacter),n.data+=Oe;break}case v.EOF:{this._err(R.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+=String.fromCodePoint(t)}}_stateCommentLessThanSign(t){const n=this.currentToken;switch(t){case v.EXCLAMATION_MARK:{n.data+="!",this.state=C.COMMENT_LESS_THAN_SIGN_BANG;break}case v.LESS_THAN_SIGN:{n.data+="<";break}default:this.state=C.COMMENT,this._stateComment(t)}}_stateCommentLessThanSignBang(t){t===v.HYPHEN_MINUS?this.state=C.COMMENT_LESS_THAN_SIGN_BANG_DASH:(this.state=C.COMMENT,this._stateComment(t))}_stateCommentLessThanSignBangDash(t){t===v.HYPHEN_MINUS?this.state=C.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:(this.state=C.COMMENT_END_DASH,this._stateCommentEndDash(t))}_stateCommentLessThanSignBangDashDash(t){t!==v.GREATER_THAN_SIGN&&t!==v.EOF&&this._err(R.nestedComment),this.state=C.COMMENT_END,this._stateCommentEnd(t)}_stateCommentEndDash(t){const n=this.currentToken;switch(t){case v.HYPHEN_MINUS:{this.state=C.COMMENT_END;break}case v.EOF:{this._err(R.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="-",this.state=C.COMMENT,this._stateComment(t)}}_stateCommentEnd(t){const n=this.currentToken;switch(t){case v.GREATER_THAN_SIGN:{this.state=C.DATA,this.emitCurrentComment(n);break}case v.EXCLAMATION_MARK:{this.state=C.COMMENT_END_BANG;break}case v.HYPHEN_MINUS:{n.data+="-";break}case v.EOF:{this._err(R.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="--",this.state=C.COMMENT,this._stateComment(t)}}_stateCommentEndBang(t){const n=this.currentToken;switch(t){case v.HYPHEN_MINUS:{n.data+="--!",this.state=C.COMMENT_END_DASH;break}case v.GREATER_THAN_SIGN:{this._err(R.incorrectlyClosedComment),this.state=C.DATA,this.emitCurrentComment(n);break}case v.EOF:{this._err(R.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="--!",this.state=C.COMMENT,this._stateComment(t)}}_stateDoctype(t){switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:{this.state=C.BEFORE_DOCTYPE_NAME;break}case v.GREATER_THAN_SIGN:{this.state=C.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t);break}case v.EOF:{this._err(R.eofInDoctype),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.missingWhitespaceBeforeDoctypeName),this.state=C.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t)}}_stateBeforeDoctypeName(t){if(fo(t))this._createDoctypeToken(String.fromCharCode(Ks(t))),this.state=C.DOCTYPE_NAME;else switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:break;case v.NULL:{this._err(R.unexpectedNullCharacter),this._createDoctypeToken(Oe),this.state=C.DOCTYPE_NAME;break}case v.GREATER_THAN_SIGN:{this._err(R.missingDoctypeName),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=C.DATA;break}case v.EOF:{this._err(R.eofInDoctype),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._createDoctypeToken(String.fromCodePoint(t)),this.state=C.DOCTYPE_NAME}}_stateDoctypeName(t){const n=this.currentToken;switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:{this.state=C.AFTER_DOCTYPE_NAME;break}case v.GREATER_THAN_SIGN:{this.state=C.DATA,this.emitCurrentDoctype(n);break}case v.NULL:{this._err(R.unexpectedNullCharacter),n.name+=Oe;break}case v.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.name+=String.fromCodePoint(fo(t)?Ks(t):t)}}_stateAfterDoctypeName(t){const n=this.currentToken;switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:break;case v.GREATER_THAN_SIGN:{this.state=C.DATA,this.emitCurrentDoctype(n);break}case v.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._consumeSequenceIfMatch(wt.PUBLIC,!1)?this.state=C.AFTER_DOCTYPE_PUBLIC_KEYWORD:this._consumeSequenceIfMatch(wt.SYSTEM,!1)?this.state=C.AFTER_DOCTYPE_SYSTEM_KEYWORD:this._ensureHibernation()||(this._err(R.invalidCharacterSequenceAfterDoctypeName),n.forceQuirks=!0,this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t))}}_stateAfterDoctypePublicKeyword(t){const n=this.currentToken;switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:{this.state=C.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;break}case v.QUOTATION_MARK:{this._err(R.missingWhitespaceAfterDoctypePublicKeyword),n.publicId="",this.state=C.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case v.APOSTROPHE:{this._err(R.missingWhitespaceAfterDoctypePublicKeyword),n.publicId="",this.state=C.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case v.GREATER_THAN_SIGN:{this._err(R.missingDoctypePublicIdentifier),n.forceQuirks=!0,this.state=C.DATA,this.emitCurrentDoctype(n);break}case v.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.missingQuoteBeforeDoctypePublicIdentifier),n.forceQuirks=!0,this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypePublicIdentifier(t){const n=this.currentToken;switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:break;case v.QUOTATION_MARK:{n.publicId="",this.state=C.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case v.APOSTROPHE:{n.publicId="",this.state=C.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case v.GREATER_THAN_SIGN:{this._err(R.missingDoctypePublicIdentifier),n.forceQuirks=!0,this.state=C.DATA,this.emitCurrentDoctype(n);break}case v.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.missingQuoteBeforeDoctypePublicIdentifier),n.forceQuirks=!0,this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypePublicIdentifierDoubleQuoted(t){const n=this.currentToken;switch(t){case v.QUOTATION_MARK:{this.state=C.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case v.NULL:{this._err(R.unexpectedNullCharacter),n.publicId+=Oe;break}case v.GREATER_THAN_SIGN:{this._err(R.abruptDoctypePublicIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=C.DATA;break}case v.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.publicId+=String.fromCodePoint(t)}}_stateDoctypePublicIdentifierSingleQuoted(t){const n=this.currentToken;switch(t){case v.APOSTROPHE:{this.state=C.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case v.NULL:{this._err(R.unexpectedNullCharacter),n.publicId+=Oe;break}case v.GREATER_THAN_SIGN:{this._err(R.abruptDoctypePublicIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=C.DATA;break}case v.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.publicId+=String.fromCodePoint(t)}}_stateAfterDoctypePublicIdentifier(t){const n=this.currentToken;switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:{this.state=C.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;break}case v.GREATER_THAN_SIGN:{this.state=C.DATA,this.emitCurrentDoctype(n);break}case v.QUOTATION_MARK:{this._err(R.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),n.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case v.APOSTROPHE:{this._err(R.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),n.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case v.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBetweenDoctypePublicAndSystemIdentifiers(t){const n=this.currentToken;switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:break;case v.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=C.DATA;break}case v.QUOTATION_MARK:{n.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case v.APOSTROPHE:{n.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case v.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateAfterDoctypeSystemKeyword(t){const n=this.currentToken;switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:{this.state=C.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;break}case v.QUOTATION_MARK:{this._err(R.missingWhitespaceAfterDoctypeSystemKeyword),n.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case v.APOSTROPHE:{this._err(R.missingWhitespaceAfterDoctypeSystemKeyword),n.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case v.GREATER_THAN_SIGN:{this._err(R.missingDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=C.DATA,this.emitCurrentDoctype(n);break}case v.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypeSystemIdentifier(t){const n=this.currentToken;switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:break;case v.QUOTATION_MARK:{n.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case v.APOSTROPHE:{n.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case v.GREATER_THAN_SIGN:{this._err(R.missingDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=C.DATA,this.emitCurrentDoctype(n);break}case v.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypeSystemIdentifierDoubleQuoted(t){const n=this.currentToken;switch(t){case v.QUOTATION_MARK:{this.state=C.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case v.NULL:{this._err(R.unexpectedNullCharacter),n.systemId+=Oe;break}case v.GREATER_THAN_SIGN:{this._err(R.abruptDoctypeSystemIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=C.DATA;break}case v.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.systemId+=String.fromCodePoint(t)}}_stateDoctypeSystemIdentifierSingleQuoted(t){const n=this.currentToken;switch(t){case v.APOSTROPHE:{this.state=C.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case v.NULL:{this._err(R.unexpectedNullCharacter),n.systemId+=Oe;break}case v.GREATER_THAN_SIGN:{this._err(R.abruptDoctypeSystemIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=C.DATA;break}case v.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.systemId+=String.fromCodePoint(t)}}_stateAfterDoctypeSystemIdentifier(t){const n=this.currentToken;switch(t){case v.SPACE:case v.LINE_FEED:case v.TABULATION:case v.FORM_FEED:break;case v.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=C.DATA;break}case v.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.unexpectedCharacterAfterDoctypeSystemIdentifier),this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBogusDoctype(t){const n=this.currentToken;switch(t){case v.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=C.DATA;break}case v.NULL:{this._err(R.unexpectedNullCharacter);break}case v.EOF:{this.emitCurrentDoctype(n),this._emitEOFToken();break}}}_stateCdataSection(t){switch(t){case v.RIGHT_SQUARE_BRACKET:{this.state=C.CDATA_SECTION_BRACKET;break}case v.EOF:{this._err(R.eofInCdata),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateCdataSectionBracket(t){t===v.RIGHT_SQUARE_BRACKET?this.state=C.CDATA_SECTION_END:(this._emitChars("]"),this.state=C.CDATA_SECTION,this._stateCdataSection(t))}_stateCdataSectionEnd(t){switch(t){case v.GREATER_THAN_SIGN:{this.state=C.DATA;break}case v.RIGHT_SQUARE_BRACKET:{this._emitChars("]");break}default:this._emitChars("]]"),this.state=C.CDATA_SECTION,this._stateCdataSection(t)}}_stateCharacterReference(){let t=this.entityDecoder.write(this.preprocessor.html,this.preprocessor.pos);if(t<0)if(this.preprocessor.lastChunkWritten)t=this.entityDecoder.end();else{this.active=!1,this.preprocessor.pos=this.preprocessor.html.length-1,this.consumedAfterSnapshot=0,this.preprocessor.endOfChunkHit=!0;return}t===0?(this.preprocessor.pos=this.entityStartPos,this._flushCodePointConsumedAsCharacterReference(v.AMPERSAND),this.state=!this._isCharacterReferenceInAttribute()&&og(this.preprocessor.peek(1))?C.AMBIGUOUS_AMPERSAND:this.returnState):this.state=this.returnState}_stateAmbiguousAmpersand(t){og(t)?this._flushCodePointConsumedAsCharacterReference(t):(t===v.SEMICOLON&&this._err(R.unknownNamedCharacterReference),this.state=this.returnState,this._callState(t))}}const $T=new Set([c.DD,c.DT,c.LI,c.OPTGROUP,c.OPTION,c.P,c.RB,c.RP,c.RT,c.RTC]),ug=new Set([...$T,c.CAPTION,c.COLGROUP,c.TBODY,c.TD,c.TFOOT,c.TH,c.THEAD,c.TR]),Zu=new Set([c.APPLET,c.CAPTION,c.HTML,c.MARQUEE,c.OBJECT,c.TABLE,c.TD,c.TEMPLATE,c.TH]),aP=new Set([...Zu,c.OL,c.UL]),oP=new Set([...Zu,c.BUTTON]),lg=new Set([c.ANNOTATION_XML,c.MI,c.MN,c.MO,c.MS,c.MTEXT]),cg=new Set([c.DESC,c.FOREIGN_OBJECT,c.TITLE]),sP=new Set([c.TR,c.TEMPLATE,c.HTML]),uP=new Set([c.TBODY,c.TFOOT,c.THEAD,c.TEMPLATE,c.HTML]),lP=new Set([c.TABLE,c.TEMPLATE,c.HTML]),cP=new Set([c.TD,c.TH]);class dP{get currentTmplContentOrNode(){return this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):this.current}constructor(t,n,r){this.treeAdapter=n,this.handler=r,this.items=[],this.tagIDs=[],this.stackTop=-1,this.tmplCount=0,this.currentTagId=c.UNKNOWN,this.current=t}_indexOf(t){return this.items.lastIndexOf(t,this.stackTop)}_isInTemplate(){return this.currentTagId===c.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===W.HTML}_updateCurrentElement(){this.current=this.items[this.stackTop],this.currentTagId=this.tagIDs[this.stackTop]}push(t,n){this.stackTop++,this.items[this.stackTop]=t,this.current=t,this.tagIDs[this.stackTop]=n,this.currentTagId=n,this._isInTemplate()&&this.tmplCount++,this.handler.onItemPush(t,n,!0)}pop(){const t=this.current;this.tmplCount>0&&this._isInTemplate()&&this.tmplCount--,this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!0)}replace(t,n){const r=this._indexOf(t);this.items[r]=n,r===this.stackTop&&(this.current=n)}insertAfter(t,n,r){const i=this._indexOf(t)+1;this.items.splice(i,0,n),this.tagIDs.splice(i,0,r),this.stackTop++,i===this.stackTop&&this._updateCurrentElement(),this.current&&this.currentTagId!==void 0&&this.handler.onItemPush(this.current,this.currentTagId,i===this.stackTop)}popUntilTagNamePopped(t){let n=this.stackTop+1;do n=this.tagIDs.lastIndexOf(t,n-1);while(n>0&&this.treeAdapter.getNamespaceURI(this.items[n])!==W.HTML);this.shortenToLength(Math.max(n,0))}shortenToLength(t){for(;this.stackTop>=t;){const n=this.current;this.tmplCount>0&&this._isInTemplate()&&(this.tmplCount-=1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(n,this.stackTop<t)}}popUntilElementPopped(t){const n=this._indexOf(t);this.shortenToLength(Math.max(n,0))}popUntilPopped(t,n){const r=this._indexOfTagNames(t,n);this.shortenToLength(Math.max(r,0))}popUntilNumberedHeaderPopped(){this.popUntilPopped(gf,W.HTML)}popUntilTableCellPopped(){this.popUntilPopped(cP,W.HTML)}popAllUpToHtmlElement(){this.tmplCount=0,this.shortenToLength(1)}_indexOfTagNames(t,n){for(let r=this.stackTop;r>=0;r--)if(t.has(this.tagIDs[r])&&this.treeAdapter.getNamespaceURI(this.items[r])===n)return r;return-1}clearBackTo(t,n){const r=this._indexOfTagNames(t,n);this.shortenToLength(r+1)}clearBackToTableContext(){this.clearBackTo(lP,W.HTML)}clearBackToTableBodyContext(){this.clearBackTo(uP,W.HTML)}clearBackToTableRowContext(){this.clearBackTo(sP,W.HTML)}remove(t){const n=this._indexOf(t);n>=0&&(n===this.stackTop?this.pop():(this.items.splice(n,1),this.tagIDs.splice(n,1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!1)))}tryPeekProperlyNestedBodyElement(){return this.stackTop>=1&&this.tagIDs[1]===c.BODY?this.items[1]:null}contains(t){return this._indexOf(t)>-1}getCommonAncestor(t){const n=this._indexOf(t)-1;return n>=0?this.items[n]:null}isRootHtmlElementCurrent(){return this.stackTop===0&&this.tagIDs[0]===c.HTML}hasInDynamicScope(t,n){for(let r=this.stackTop;r>=0;r--){const i=this.tagIDs[r];switch(this.treeAdapter.getNamespaceURI(this.items[r])){case W.HTML:{if(i===t)return!0;if(n.has(i))return!1;break}case W.SVG:{if(cg.has(i))return!1;break}case W.MATHML:{if(lg.has(i))return!1;break}}}return!0}hasInScope(t){return this.hasInDynamicScope(t,Zu)}hasInListItemScope(t){return this.hasInDynamicScope(t,aP)}hasInButtonScope(t){return this.hasInDynamicScope(t,oP)}hasNumberedHeaderInScope(){for(let t=this.stackTop;t>=0;t--){const n=this.tagIDs[t];switch(this.treeAdapter.getNamespaceURI(this.items[t])){case W.HTML:{if(gf.has(n))return!0;if(Zu.has(n))return!1;break}case W.SVG:{if(cg.has(n))return!1;break}case W.MATHML:{if(lg.has(n))return!1;break}}}return!0}hasInTableScope(t){for(let n=this.stackTop;n>=0;n--)if(this.treeAdapter.getNamespaceURI(this.items[n])===W.HTML)switch(this.tagIDs[n]){case t:return!0;case c.TABLE:case c.HTML:return!1}return!0}hasTableBodyContextInTableScope(){for(let t=this.stackTop;t>=0;t--)if(this.treeAdapter.getNamespaceURI(this.items[t])===W.HTML)switch(this.tagIDs[t]){case c.TBODY:case c.THEAD:case c.TFOOT:return!0;case c.TABLE:case c.HTML:return!1}return!0}hasInSelectScope(t){for(let n=this.stackTop;n>=0;n--)if(this.treeAdapter.getNamespaceURI(this.items[n])===W.HTML)switch(this.tagIDs[n]){case t:return!0;case c.OPTION:case c.OPTGROUP:break;default:return!1}return!0}generateImpliedEndTags(){for(;this.currentTagId!==void 0&&$T.has(this.currentTagId);)this.pop()}generateImpliedEndTagsThoroughly(){for(;this.currentTagId!==void 0&&ug.has(this.currentTagId);)this.pop()}generateImpliedEndTagsWithExclusion(t){for(;this.currentTagId!==void 0&&this.currentTagId!==t&&ug.has(this.currentTagId);)this.pop()}}const zc=3;var On;(function(e){e[e.Marker=0]="Marker",e[e.Element=1]="Element"})(On||(On={}));const dg={type:On.Marker};class fP{constructor(t){this.treeAdapter=t,this.entries=[],this.bookmark=null}_getNoahArkConditionCandidates(t,n){const r=[],i=n.length,a=this.treeAdapter.getTagName(t),o=this.treeAdapter.getNamespaceURI(t);for(let s=0;s<this.entries.length;s++){const u=this.entries[s];if(u.type===On.Marker)break;const{element:l}=u;if(this.treeAdapter.getTagName(l)===a&&this.treeAdapter.getNamespaceURI(l)===o){const f=this.treeAdapter.getAttrList(l);f.length===i&&r.push({idx:s,attrs:f})}}return r}_ensureNoahArkCondition(t){if(this.entries.length<zc)return;const n=this.treeAdapter.getAttrList(t),r=this._getNoahArkConditionCandidates(t,n);if(r.length<zc)return;const i=new Map(n.map(o=>[o.name,o.value]));let a=0;for(let o=0;o<r.length;o++){const s=r[o];s.attrs.every(u=>i.get(u.name)===u.value)&&(a+=1,a>=zc&&this.entries.splice(s.idx,1))}}insertMarker(){this.entries.unshift(dg)}pushElement(t,n){this._ensureNoahArkCondition(t),this.entries.unshift({type:On.Element,element:t,token:n})}insertElementAfterBookmark(t,n){const r=this.entries.indexOf(this.bookmark);this.entries.splice(r,0,{type:On.Element,element:t,token:n})}removeEntry(t){const n=this.entries.indexOf(t);n!==-1&&this.entries.splice(n,1)}clearToLastMarker(){const t=this.entries.indexOf(dg);t===-1?this.entries.length=0:this.entries.splice(0,t+1)}getElementEntryInScopeWithTagName(t){const n=this.entries.find(r=>r.type===On.Marker||this.treeAdapter.getTagName(r.element)===t);return n&&n.type===On.Element?n:null}getElementEntry(t){return this.entries.find(n=>n.type===On.Element&&n.element===t)}}const vr={createDocument(){return{nodeName:"#document",mode:Xt.NO_QUIRKS,childNodes:[]}},createDocumentFragment(){return{nodeName:"#document-fragment",childNodes:[]}},createElement(e,t,n){return{nodeName:e,tagName:e,attrs:n,namespaceURI:t,childNodes:[],parentNode:null}},createCommentNode(e){return{nodeName:"#comment",data:e,parentNode:null}},createTextNode(e){return{nodeName:"#text",value:e,parentNode:null}},appendChild(e,t){e.childNodes.push(t),t.parentNode=e},insertBefore(e,t,n){const r=e.childNodes.indexOf(n);e.childNodes.splice(r,0,t),t.parentNode=e},setTemplateContent(e,t){e.content=t},getTemplateContent(e){return e.content},setDocumentType(e,t,n,r){const i=e.childNodes.find(a=>a.nodeName==="#documentType");if(i)i.name=t,i.publicId=n,i.systemId=r;else{const a={nodeName:"#documentType",name:t,publicId:n,systemId:r,parentNode:null};vr.appendChild(e,a)}},setDocumentMode(e,t){e.mode=t},getDocumentMode(e){return e.mode},detachNode(e){if(e.parentNode){const t=e.parentNode.childNodes.indexOf(e);e.parentNode.childNodes.splice(t,1),e.parentNode=null}},insertText(e,t){if(e.childNodes.length>0){const n=e.childNodes[e.childNodes.length-1];if(vr.isTextNode(n)){n.value+=t;return}}vr.appendChild(e,vr.createTextNode(t))},insertTextBefore(e,t,n){const r=e.childNodes[e.childNodes.indexOf(n)-1];r&&vr.isTextNode(r)?r.value+=t:vr.insertBefore(e,vr.createTextNode(t),n)},adoptAttributes(e,t){const n=new Set(e.attrs.map(r=>r.name));for(let r=0;r<t.length;r++)n.has(t[r].name)||e.attrs.push(t[r])},getFirstChild(e){return e.childNodes[0]},getChildNodes(e){return e.childNodes},getParentNode(e){return e.parentNode},getAttrList(e){return e.attrs},getTagName(e){return e.tagName},getNamespaceURI(e){return e.namespaceURI},getTextNodeContent(e){return e.value},getCommentNodeContent(e){return e.data},getDocumentTypeNodeName(e){return e.name},getDocumentTypeNodePublicId(e){return e.publicId},getDocumentTypeNodeSystemId(e){return e.systemId},isTextNode(e){return e.nodeName==="#text"},isCommentNode(e){return e.nodeName==="#comment"},isDocumentTypeNode(e){return e.nodeName==="#documentType"},isElementNode(e){return Object.prototype.hasOwnProperty.call(e,"tagName")},setNodeSourceCodeLocation(e,t){e.sourceCodeLocation=t},getNodeSourceCodeLocation(e){return e.sourceCodeLocation},updateNodeSourceCodeLocation(e,t){e.sourceCodeLocation={...e.sourceCodeLocation,...t}}},qT="html",hP="about:legacy-compat",pP="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",QT=["+//silmaril//dtd html pro v0r11 19970101//","-//as//dtd html 3.0 aswedit + extensions//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//sq//dtd html 2.0 hotmetal + extensions//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"],mP=[...QT,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"],gP=new Set(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),GT=["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"],yP=[...GT,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"];function fg(e,t){return t.some(n=>e.startsWith(n))}function EP(e){return e.name===qT&&e.publicId===null&&(e.systemId===null||e.systemId===hP)}function bP(e){if(e.name!==qT)return Xt.QUIRKS;const{systemId:t}=e;if(t&&t.toLowerCase()===pP)return Xt.QUIRKS;let{publicId:n}=e;if(n!==null){if(n=n.toLowerCase(),gP.has(n))return Xt.QUIRKS;let r=t===null?mP:QT;if(fg(n,r))return Xt.QUIRKS;if(r=t===null?GT:yP,fg(n,r))return Xt.LIMITED_QUIRKS}return Xt.NO_QUIRKS}const hg={TEXT_HTML:"text/html",APPLICATION_XML:"application/xhtml+xml"},TP="definitionurl",vP="definitionURL",wP=new Map(["attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(e=>[e.toLowerCase(),e])),CP=new Map([["xlink:actuate",{prefix:"xlink",name:"actuate",namespace:W.XLINK}],["xlink:arcrole",{prefix:"xlink",name:"arcrole",namespace:W.XLINK}],["xlink:href",{prefix:"xlink",name:"href",namespace:W.XLINK}],["xlink:role",{prefix:"xlink",name:"role",namespace:W.XLINK}],["xlink:show",{prefix:"xlink",name:"show",namespace:W.XLINK}],["xlink:title",{prefix:"xlink",name:"title",namespace:W.XLINK}],["xlink:type",{prefix:"xlink",name:"type",namespace:W.XLINK}],["xml:lang",{prefix:"xml",name:"lang",namespace:W.XML}],["xml:space",{prefix:"xml",name:"space",namespace:W.XML}],["xmlns",{prefix:"",name:"xmlns",namespace:W.XMLNS}],["xmlns:xlink",{prefix:"xmlns",name:"xlink",namespace:W.XMLNS}]]),xP=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(e=>[e.toLowerCase(),e])),kP=new Set([c.B,c.BIG,c.BLOCKQUOTE,c.BODY,c.BR,c.CENTER,c.CODE,c.DD,c.DIV,c.DL,c.DT,c.EM,c.EMBED,c.H1,c.H2,c.H3,c.H4,c.H5,c.H6,c.HEAD,c.HR,c.I,c.IMG,c.LI,c.LISTING,c.MENU,c.META,c.NOBR,c.OL,c.P,c.PRE,c.RUBY,c.S,c.SMALL,c.SPAN,c.STRONG,c.STRIKE,c.SUB,c.SUP,c.TABLE,c.TT,c.U,c.UL,c.VAR]);function AP(e){const t=e.tagID;return t===c.FONT&&e.attrs.some(({name:r})=>r===Ci.COLOR||r===Ci.SIZE||r===Ci.FACE)||kP.has(t)}function KT(e){for(let t=0;t<e.attrs.length;t++)if(e.attrs[t].name===TP){e.attrs[t].name=vP;break}}function XT(e){for(let t=0;t<e.attrs.length;t++){const n=wP.get(e.attrs[t].name);n!=null&&(e.attrs[t].name=n)}}function tp(e){for(let t=0;t<e.attrs.length;t++){const n=CP.get(e.attrs[t].name);n&&(e.attrs[t].prefix=n.prefix,e.attrs[t].name=n.name,e.attrs[t].namespace=n.namespace)}}function SP(e){const t=xP.get(e.tagName);t!=null&&(e.tagName=t,e.tagID=Ya(e.tagName))}function DP(e,t){return t===W.MATHML&&(e===c.MI||e===c.MO||e===c.MN||e===c.MS||e===c.MTEXT)}function _P(e,t,n){if(t===W.MATHML&&e===c.ANNOTATION_XML){for(let r=0;r<n.length;r++)if(n[r].name===Ci.ENCODING){const i=n[r].value.toLowerCase();return i===hg.TEXT_HTML||i===hg.APPLICATION_XML}}return t===W.SVG&&(e===c.FOREIGN_OBJECT||e===c.DESC||e===c.TITLE)}function IP(e,t,n,r){return(!r||r===W.HTML)&&_P(e,t,n)||(!r||r===W.MATHML)&&DP(e,t)}const NP="hidden",LP=8,OP=3;var D;(function(e){e[e.INITIAL=0]="INITIAL",e[e.BEFORE_HTML=1]="BEFORE_HTML",e[e.BEFORE_HEAD=2]="BEFORE_HEAD",e[e.IN_HEAD=3]="IN_HEAD",e[e.IN_HEAD_NO_SCRIPT=4]="IN_HEAD_NO_SCRIPT",e[e.AFTER_HEAD=5]="AFTER_HEAD",e[e.IN_BODY=6]="IN_BODY",e[e.TEXT=7]="TEXT",e[e.IN_TABLE=8]="IN_TABLE",e[e.IN_TABLE_TEXT=9]="IN_TABLE_TEXT",e[e.IN_CAPTION=10]="IN_CAPTION",e[e.IN_COLUMN_GROUP=11]="IN_COLUMN_GROUP",e[e.IN_TABLE_BODY=12]="IN_TABLE_BODY",e[e.IN_ROW=13]="IN_ROW",e[e.IN_CELL=14]="IN_CELL",e[e.IN_SELECT=15]="IN_SELECT",e[e.IN_SELECT_IN_TABLE=16]="IN_SELECT_IN_TABLE",e[e.IN_TEMPLATE=17]="IN_TEMPLATE",e[e.AFTER_BODY=18]="AFTER_BODY",e[e.IN_FRAMESET=19]="IN_FRAMESET",e[e.AFTER_FRAMESET=20]="AFTER_FRAMESET",e[e.AFTER_AFTER_BODY=21]="AFTER_AFTER_BODY",e[e.AFTER_AFTER_FRAMESET=22]="AFTER_AFTER_FRAMESET"})(D||(D={}));const RP={startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1},JT=new Set([c.TABLE,c.TBODY,c.TFOOT,c.THEAD,c.TR]),pg={scriptingEnabled:!0,sourceCodeLocationInfo:!1,treeAdapter:vr,onParseError:null};class mg{constructor(t,n,r=null,i=null){this.fragmentContext=r,this.scriptHandler=i,this.currentToken=null,this.stopped=!1,this.insertionMode=D.INITIAL,this.originalInsertionMode=D.INITIAL,this.headElement=null,this.formElement=null,this.currentNotInHTML=!1,this.tmplInsertionModeStack=[],this.pendingCharacterTokens=[],this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,this.skipNextNewLine=!1,this.fosterParentingEnabled=!1,this.options={...pg,...t},this.treeAdapter=this.options.treeAdapter,this.onParseError=this.options.onParseError,this.onParseError&&(this.options.sourceCodeLocationInfo=!0),this.document=n??this.treeAdapter.createDocument(),this.tokenizer=new iP(this.options,this),this.activeFormattingElements=new fP(this.treeAdapter),this.fragmentContextID=r?Ya(this.treeAdapter.getTagName(r)):c.UNKNOWN,this._setContextModes(r??this.document,this.fragmentContextID),this.openElements=new dP(this.document,this.treeAdapter,this)}static parse(t,n){const r=new this(n);return r.tokenizer.write(t,!0),r.document}static getFragmentParser(t,n){const r={...pg,...n};t??(t=r.treeAdapter.createElement(L.TEMPLATE,W.HTML,[]));const i=r.treeAdapter.createElement("documentmock",W.HTML,[]),a=new this(r,i,t);return a.fragmentContextID===c.TEMPLATE&&a.tmplInsertionModeStack.unshift(D.IN_TEMPLATE),a._initTokenizerForFragmentParsing(),a._insertFakeRootElement(),a._resetInsertionMode(),a._findFormInFragmentContext(),a}getFragment(){const t=this.treeAdapter.getFirstChild(this.document),n=this.treeAdapter.createDocumentFragment();return this._adoptNodes(t,n),n}_err(t,n,r){var i;if(!this.onParseError)return;const a=(i=t.location)!==null&&i!==void 0?i:RP,o={code:n,startLine:a.startLine,startCol:a.startCol,startOffset:a.startOffset,endLine:r?a.startLine:a.endLine,endCol:r?a.startCol:a.endCol,endOffset:r?a.startOffset:a.endOffset};this.onParseError(o)}onItemPush(t,n,r){var i,a;(a=(i=this.treeAdapter).onItemPush)===null||a===void 0||a.call(i,t),r&&this.openElements.stackTop>0&&this._setContextModes(t,n)}onItemPop(t,n){var r,i;if(this.options.sourceCodeLocationInfo&&this._setEndLocation(t,this.currentToken),(i=(r=this.treeAdapter).onItemPop)===null||i===void 0||i.call(r,t,this.openElements.current),n){let a,o;this.openElements.stackTop===0&&this.fragmentContext?(a=this.fragmentContext,o=this.fragmentContextID):{current:a,currentTagId:o}=this.openElements,this._setContextModes(a,o)}}_setContextModes(t,n){const r=t===this.document||t&&this.treeAdapter.getNamespaceURI(t)===W.HTML;this.currentNotInHTML=!r,this.tokenizer.inForeignNode=!r&&t!==void 0&&n!==void 0&&!this._isIntegrationPoint(n,t)}_switchToTextParsing(t,n){this._insertElement(t,W.HTML),this.tokenizer.state=n,this.originalInsertionMode=this.insertionMode,this.insertionMode=D.TEXT}switchToPlaintextParsing(){this.insertionMode=D.TEXT,this.originalInsertionMode=D.IN_BODY,this.tokenizer.state=je.PLAINTEXT}_getAdjustedCurrentElement(){return this.openElements.stackTop===0&&this.fragmentContext?this.fragmentContext:this.openElements.current}_findFormInFragmentContext(){let t=this.fragmentContext;for(;t;){if(this.treeAdapter.getTagName(t)===L.FORM){this.formElement=t;break}t=this.treeAdapter.getParentNode(t)}}_initTokenizerForFragmentParsing(){if(!(!this.fragmentContext||this.treeAdapter.getNamespaceURI(this.fragmentContext)!==W.HTML))switch(this.fragmentContextID){case c.TITLE:case c.TEXTAREA:{this.tokenizer.state=je.RCDATA;break}case c.STYLE:case c.XMP:case c.IFRAME:case c.NOEMBED:case c.NOFRAMES:case c.NOSCRIPT:{this.tokenizer.state=je.RAWTEXT;break}case c.SCRIPT:{this.tokenizer.state=je.SCRIPT_DATA;break}case c.PLAINTEXT:{this.tokenizer.state=je.PLAINTEXT;break}}}_setDocumentType(t){const n=t.name||"",r=t.publicId||"",i=t.systemId||"";if(this.treeAdapter.setDocumentType(this.document,n,r,i),t.location){const o=this.treeAdapter.getChildNodes(this.document).find(s=>this.treeAdapter.isDocumentTypeNode(s));o&&this.treeAdapter.setNodeSourceCodeLocation(o,t.location)}}_attachElementToTree(t,n){if(this.options.sourceCodeLocationInfo){const r=n&&{...n,startTag:n};this.treeAdapter.setNodeSourceCodeLocation(t,r)}if(this._shouldFosterParentOnInsertion())this._fosterParentElement(t);else{const r=this.openElements.currentTmplContentOrNode;this.treeAdapter.appendChild(r??this.document,t)}}_appendElement(t,n){const r=this.treeAdapter.createElement(t.tagName,n,t.attrs);this._attachElementToTree(r,t.location)}_insertElement(t,n){const r=this.treeAdapter.createElement(t.tagName,n,t.attrs);this._attachElementToTree(r,t.location),this.openElements.push(r,t.tagID)}_insertFakeElement(t,n){const r=this.treeAdapter.createElement(t,W.HTML,[]);this._attachElementToTree(r,null),this.openElements.push(r,n)}_insertTemplate(t){const n=this.treeAdapter.createElement(t.tagName,W.HTML,t.attrs),r=this.treeAdapter.createDocumentFragment();this.treeAdapter.setTemplateContent(n,r),this._attachElementToTree(n,t.location),this.openElements.push(n,t.tagID),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(r,null)}_insertFakeRootElement(){const t=this.treeAdapter.createElement(L.HTML,W.HTML,[]);this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(t,null),this.treeAdapter.appendChild(this.openElements.current,t),this.openElements.push(t,c.HTML)}_appendCommentNode(t,n){const r=this.treeAdapter.createCommentNode(t.data);this.treeAdapter.appendChild(n,r),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(r,t.location)}_insertCharacters(t){let n,r;if(this._shouldFosterParentOnInsertion()?({parent:n,beforeElement:r}=this._findFosterParentingLocation(),r?this.treeAdapter.insertTextBefore(n,t.chars,r):this.treeAdapter.insertText(n,t.chars)):(n=this.openElements.currentTmplContentOrNode,this.treeAdapter.insertText(n,t.chars)),!t.location)return;const i=this.treeAdapter.getChildNodes(n),a=r?i.lastIndexOf(r):i.length,o=i[a-1];if(this.treeAdapter.getNodeSourceCodeLocation(o)){const{endLine:u,endCol:l,endOffset:f}=t.location;this.treeAdapter.updateNodeSourceCodeLocation(o,{endLine:u,endCol:l,endOffset:f})}else this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(o,t.location)}_adoptNodes(t,n){for(let r=this.treeAdapter.getFirstChild(t);r;r=this.treeAdapter.getFirstChild(t))this.treeAdapter.detachNode(r),this.treeAdapter.appendChild(n,r)}_setEndLocation(t,n){if(this.treeAdapter.getNodeSourceCodeLocation(t)&&n.location){const r=n.location,i=this.treeAdapter.getTagName(t),a=n.type===fe.END_TAG&&i===n.tagName?{endTag:{...r},endLine:r.endLine,endCol:r.endCol,endOffset:r.endOffset}:{endLine:r.startLine,endCol:r.startCol,endOffset:r.startOffset};this.treeAdapter.updateNodeSourceCodeLocation(t,a)}}shouldProcessStartTagTokenInForeignContent(t){if(!this.currentNotInHTML)return!1;let n,r;return this.openElements.stackTop===0&&this.fragmentContext?(n=this.fragmentContext,r=this.fragmentContextID):{current:n,currentTagId:r}=this.openElements,t.tagID===c.SVG&&this.treeAdapter.getTagName(n)===L.ANNOTATION_XML&&this.treeAdapter.getNamespaceURI(n)===W.MATHML?!1:this.tokenizer.inForeignNode||(t.tagID===c.MGLYPH||t.tagID===c.MALIGNMARK)&&r!==void 0&&!this._isIntegrationPoint(r,n,W.HTML)}_processToken(t){switch(t.type){case fe.CHARACTER:{this.onCharacter(t);break}case fe.NULL_CHARACTER:{this.onNullCharacter(t);break}case fe.COMMENT:{this.onComment(t);break}case fe.DOCTYPE:{this.onDoctype(t);break}case fe.START_TAG:{this._processStartTag(t);break}case fe.END_TAG:{this.onEndTag(t);break}case fe.EOF:{this.onEof(t);break}case fe.WHITESPACE_CHARACTER:{this.onWhitespaceCharacter(t);break}}}_isIntegrationPoint(t,n,r){const i=this.treeAdapter.getNamespaceURI(n),a=this.treeAdapter.getAttrList(n);return IP(t,i,a,r)}_reconstructActiveFormattingElements(){const t=this.activeFormattingElements.entries.length;if(t){const n=this.activeFormattingElements.entries.findIndex(i=>i.type===On.Marker||this.openElements.contains(i.element)),r=n===-1?t-1:n-1;for(let i=r;i>=0;i--){const a=this.activeFormattingElements.entries[i];this._insertElement(a.token,this.treeAdapter.getNamespaceURI(a.element)),a.element=this.openElements.current}}}_closeTableCell(){this.openElements.generateImpliedEndTags(),this.openElements.popUntilTableCellPopped(),this.activeFormattingElements.clearToLastMarker(),this.insertionMode=D.IN_ROW}_closePElement(){this.openElements.generateImpliedEndTagsWithExclusion(c.P),this.openElements.popUntilTagNamePopped(c.P)}_resetInsertionMode(){for(let t=this.openElements.stackTop;t>=0;t--)switch(t===0&&this.fragmentContext?this.fragmentContextID:this.openElements.tagIDs[t]){case c.TR:{this.insertionMode=D.IN_ROW;return}case c.TBODY:case c.THEAD:case c.TFOOT:{this.insertionMode=D.IN_TABLE_BODY;return}case c.CAPTION:{this.insertionMode=D.IN_CAPTION;return}case c.COLGROUP:{this.insertionMode=D.IN_COLUMN_GROUP;return}case c.TABLE:{this.insertionMode=D.IN_TABLE;return}case c.BODY:{this.insertionMode=D.IN_BODY;return}case c.FRAMESET:{this.insertionMode=D.IN_FRAMESET;return}case c.SELECT:{this._resetInsertionModeForSelect(t);return}case c.TEMPLATE:{this.insertionMode=this.tmplInsertionModeStack[0];return}case c.HTML:{this.insertionMode=this.headElement?D.AFTER_HEAD:D.BEFORE_HEAD;return}case c.TD:case c.TH:{if(t>0){this.insertionMode=D.IN_CELL;return}break}case c.HEAD:{if(t>0){this.insertionMode=D.IN_HEAD;return}break}}this.insertionMode=D.IN_BODY}_resetInsertionModeForSelect(t){if(t>0)for(let n=t-1;n>0;n--){const r=this.openElements.tagIDs[n];if(r===c.TEMPLATE)break;if(r===c.TABLE){this.insertionMode=D.IN_SELECT_IN_TABLE;return}}this.insertionMode=D.IN_SELECT}_isElementCausesFosterParenting(t){return JT.has(t)}_shouldFosterParentOnInsertion(){return this.fosterParentingEnabled&&this.openElements.currentTagId!==void 0&&this._isElementCausesFosterParenting(this.openElements.currentTagId)}_findFosterParentingLocation(){for(let t=this.openElements.stackTop;t>=0;t--){const n=this.openElements.items[t];switch(this.openElements.tagIDs[t]){case c.TEMPLATE:{if(this.treeAdapter.getNamespaceURI(n)===W.HTML)return{parent:this.treeAdapter.getTemplateContent(n),beforeElement:null};break}case c.TABLE:{const r=this.treeAdapter.getParentNode(n);return r?{parent:r,beforeElement:n}:{parent:this.openElements.items[t-1],beforeElement:null}}}}return{parent:this.openElements.items[0],beforeElement:null}}_fosterParentElement(t){const n=this._findFosterParentingLocation();n.beforeElement?this.treeAdapter.insertBefore(n.parent,t,n.beforeElement):this.treeAdapter.appendChild(n.parent,t)}_isSpecialElement(t,n){const r=this.treeAdapter.getNamespaceURI(t);return eP[r].has(n)}onCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){c5(this,t);return}switch(this.insertionMode){case D.INITIAL:{ao(this,t);break}case D.BEFORE_HTML:{Ao(this,t);break}case D.BEFORE_HEAD:{So(this,t);break}case D.IN_HEAD:{Do(this,t);break}case D.IN_HEAD_NO_SCRIPT:{_o(this,t);break}case D.AFTER_HEAD:{Io(this,t);break}case D.IN_BODY:case D.IN_CAPTION:case D.IN_CELL:case D.IN_TEMPLATE:{ev(this,t);break}case D.TEXT:case D.IN_SELECT:case D.IN_SELECT_IN_TABLE:{this._insertCharacters(t);break}case D.IN_TABLE:case D.IN_TABLE_BODY:case D.IN_ROW:{Wc(this,t);break}case D.IN_TABLE_TEXT:{ov(this,t);break}case D.IN_COLUMN_GROUP:{el(this,t);break}case D.AFTER_BODY:{tl(this,t);break}case D.AFTER_AFTER_BODY:{gu(this,t);break}}}onNullCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){l5(this,t);return}switch(this.insertionMode){case D.INITIAL:{ao(this,t);break}case D.BEFORE_HTML:{Ao(this,t);break}case D.BEFORE_HEAD:{So(this,t);break}case D.IN_HEAD:{Do(this,t);break}case D.IN_HEAD_NO_SCRIPT:{_o(this,t);break}case D.AFTER_HEAD:{Io(this,t);break}case D.TEXT:{this._insertCharacters(t);break}case D.IN_TABLE:case D.IN_TABLE_BODY:case D.IN_ROW:{Wc(this,t);break}case D.IN_COLUMN_GROUP:{el(this,t);break}case D.AFTER_BODY:{tl(this,t);break}case D.AFTER_AFTER_BODY:{gu(this,t);break}}}onComment(t){if(this.skipNextNewLine=!1,this.currentNotInHTML){yf(this,t);return}switch(this.insertionMode){case D.INITIAL:case D.BEFORE_HTML:case D.BEFORE_HEAD:case D.IN_HEAD:case D.IN_HEAD_NO_SCRIPT:case D.AFTER_HEAD:case D.IN_BODY:case D.IN_TABLE:case D.IN_CAPTION:case D.IN_COLUMN_GROUP:case D.IN_TABLE_BODY:case D.IN_ROW:case D.IN_CELL:case D.IN_SELECT:case D.IN_SELECT_IN_TABLE:case D.IN_TEMPLATE:case D.IN_FRAMESET:case D.AFTER_FRAMESET:{yf(this,t);break}case D.IN_TABLE_TEXT:{oo(this,t);break}case D.AFTER_BODY:{jP(this,t);break}case D.AFTER_AFTER_BODY:case D.AFTER_AFTER_FRAMESET:{zP(this,t);break}}}onDoctype(t){switch(this.skipNextNewLine=!1,this.insertionMode){case D.INITIAL:{WP(this,t);break}case D.BEFORE_HEAD:case D.IN_HEAD:case D.IN_HEAD_NO_SCRIPT:case D.AFTER_HEAD:{this._err(t,R.misplacedDoctype);break}case D.IN_TABLE_TEXT:{oo(this,t);break}}}onStartTag(t){this.skipNextNewLine=!1,this.currentToken=t,this._processStartTag(t),t.selfClosing&&!t.ackSelfClosing&&this._err(t,R.nonVoidHtmlElementStartTagWithTrailingSolidus)}_processStartTag(t){this.shouldProcessStartTagTokenInForeignContent(t)?d5(this,t):this._startTagOutsideForeignContent(t)}_startTagOutsideForeignContent(t){switch(this.insertionMode){case D.INITIAL:{ao(this,t);break}case D.BEFORE_HTML:{YP(this,t);break}case D.BEFORE_HEAD:{$P(this,t);break}case D.IN_HEAD:{xn(this,t);break}case D.IN_HEAD_NO_SCRIPT:{GP(this,t);break}case D.AFTER_HEAD:{XP(this,t);break}case D.IN_BODY:{dt(this,t);break}case D.IN_TABLE:{Ia(this,t);break}case D.IN_TABLE_TEXT:{oo(this,t);break}case D.IN_CAPTION:{qF(this,t);break}case D.IN_COLUMN_GROUP:{ip(this,t);break}case D.IN_TABLE_BODY:{Hl(this,t);break}case D.IN_ROW:{jl(this,t);break}case D.IN_CELL:{KF(this,t);break}case D.IN_SELECT:{lv(this,t);break}case D.IN_SELECT_IN_TABLE:{JF(this,t);break}case D.IN_TEMPLATE:{e5(this,t);break}case D.AFTER_BODY:{n5(this,t);break}case D.IN_FRAMESET:{r5(this,t);break}case D.AFTER_FRAMESET:{a5(this,t);break}case D.AFTER_AFTER_BODY:{s5(this,t);break}case D.AFTER_AFTER_FRAMESET:{u5(this,t);break}}}onEndTag(t){this.skipNextNewLine=!1,this.currentToken=t,this.currentNotInHTML?f5(this,t):this._endTagOutsideForeignContent(t)}_endTagOutsideForeignContent(t){switch(this.insertionMode){case D.INITIAL:{ao(this,t);break}case D.BEFORE_HTML:{VP(this,t);break}case D.BEFORE_HEAD:{qP(this,t);break}case D.IN_HEAD:{QP(this,t);break}case D.IN_HEAD_NO_SCRIPT:{KP(this,t);break}case D.AFTER_HEAD:{JP(this,t);break}case D.IN_BODY:{Ul(this,t);break}case D.TEXT:{MF(this,t);break}case D.IN_TABLE:{is(this,t);break}case D.IN_TABLE_TEXT:{oo(this,t);break}case D.IN_CAPTION:{QF(this,t);break}case D.IN_COLUMN_GROUP:{GF(this,t);break}case D.IN_TABLE_BODY:{Ef(this,t);break}case D.IN_ROW:{uv(this,t);break}case D.IN_CELL:{XF(this,t);break}case D.IN_SELECT:{cv(this,t);break}case D.IN_SELECT_IN_TABLE:{ZF(this,t);break}case D.IN_TEMPLATE:{t5(this,t);break}case D.AFTER_BODY:{fv(this,t);break}case D.IN_FRAMESET:{i5(this,t);break}case D.AFTER_FRAMESET:{o5(this,t);break}case D.AFTER_AFTER_BODY:{gu(this,t);break}}}onEof(t){switch(this.insertionMode){case D.INITIAL:{ao(this,t);break}case D.BEFORE_HTML:{Ao(this,t);break}case D.BEFORE_HEAD:{So(this,t);break}case D.IN_HEAD:{Do(this,t);break}case D.IN_HEAD_NO_SCRIPT:{_o(this,t);break}case D.AFTER_HEAD:{Io(this,t);break}case D.IN_BODY:case D.IN_TABLE:case D.IN_CAPTION:case D.IN_COLUMN_GROUP:case D.IN_TABLE_BODY:case D.IN_ROW:case D.IN_CELL:case D.IN_SELECT:case D.IN_SELECT_IN_TABLE:{iv(this,t);break}case D.TEXT:{BF(this,t);break}case D.IN_TABLE_TEXT:{oo(this,t);break}case D.IN_TEMPLATE:{dv(this,t);break}case D.AFTER_BODY:case D.IN_FRAMESET:case D.AFTER_FRAMESET:case D.AFTER_AFTER_BODY:case D.AFTER_AFTER_FRAMESET:{rp(this,t);break}}}onWhitespaceCharacter(t){if(this.skipNextNewLine&&(this.skipNextNewLine=!1,t.chars.charCodeAt(0)===v.LINE_FEED)){if(t.chars.length===1)return;t.chars=t.chars.substr(1)}if(this.tokenizer.inForeignNode){this._insertCharacters(t);return}switch(this.insertionMode){case D.IN_HEAD:case D.IN_HEAD_NO_SCRIPT:case D.AFTER_HEAD:case D.TEXT:case D.IN_COLUMN_GROUP:case D.IN_SELECT:case D.IN_SELECT_IN_TABLE:case D.IN_FRAMESET:case D.AFTER_FRAMESET:{this._insertCharacters(t);break}case D.IN_BODY:case D.IN_CAPTION:case D.IN_CELL:case D.IN_TEMPLATE:case D.AFTER_BODY:case D.AFTER_AFTER_BODY:case D.AFTER_AFTER_FRAMESET:{ZT(this,t);break}case D.IN_TABLE:case D.IN_TABLE_BODY:case D.IN_ROW:{Wc(this,t);break}case D.IN_TABLE_TEXT:{av(this,t);break}}}}function PP(e,t){let n=e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);return n?e.openElements.contains(n.element)?e.openElements.hasInScope(t.tagID)||(n=null):(e.activeFormattingElements.removeEntry(n),n=null):rv(e,t),n}function FP(e,t){let n=null,r=e.openElements.stackTop;for(;r>=0;r--){const i=e.openElements.items[r];if(i===t.element)break;e._isSpecialElement(i,e.openElements.tagIDs[r])&&(n=i)}return n||(e.openElements.shortenToLength(Math.max(r,0)),e.activeFormattingElements.removeEntry(t)),n}function MP(e,t,n){let r=t,i=e.openElements.getCommonAncestor(t);for(let a=0,o=i;o!==n;a++,o=i){i=e.openElements.getCommonAncestor(o);const s=e.activeFormattingElements.getElementEntry(o),u=s&&a>=OP;!s||u?(u&&e.activeFormattingElements.removeEntry(s),e.openElements.remove(o)):(o=BP(e,s),r===t&&(e.activeFormattingElements.bookmark=s),e.treeAdapter.detachNode(r),e.treeAdapter.appendChild(o,r),r=o)}return r}function BP(e,t){const n=e.treeAdapter.getNamespaceURI(t.element),r=e.treeAdapter.createElement(t.token.tagName,n,t.token.attrs);return e.openElements.replace(t.element,r),t.element=r,r}function UP(e,t,n){const r=e.treeAdapter.getTagName(t),i=Ya(r);if(e._isElementCausesFosterParenting(i))e._fosterParentElement(n);else{const a=e.treeAdapter.getNamespaceURI(t);i===c.TEMPLATE&&a===W.HTML&&(t=e.treeAdapter.getTemplateContent(t)),e.treeAdapter.appendChild(t,n)}}function HP(e,t,n){const r=e.treeAdapter.getNamespaceURI(n.element),{token:i}=n,a=e.treeAdapter.createElement(i.tagName,r,i.attrs);e._adoptNodes(t,a),e.treeAdapter.appendChild(t,a),e.activeFormattingElements.insertElementAfterBookmark(a,i),e.activeFormattingElements.removeEntry(n),e.openElements.remove(n.element),e.openElements.insertAfter(t,a,i.tagID)}function np(e,t){for(let n=0;n<LP;n++){const r=PP(e,t);if(!r)break;const i=FP(e,r);if(!i)break;e.activeFormattingElements.bookmark=r;const a=MP(e,i,r.element),o=e.openElements.getCommonAncestor(r.element);e.treeAdapter.detachNode(a),o&&UP(e,o,a),HP(e,i,r)}}function yf(e,t){e._appendCommentNode(t,e.openElements.currentTmplContentOrNode)}function jP(e,t){e._appendCommentNode(t,e.openElements.items[0])}function zP(e,t){e._appendCommentNode(t,e.document)}function rp(e,t){if(e.stopped=!0,t.location){const n=e.fragmentContext?0:2;for(let r=e.openElements.stackTop;r>=n;r--)e._setEndLocation(e.openElements.items[r],t);if(!e.fragmentContext&&e.openElements.stackTop>=0){const r=e.openElements.items[0],i=e.treeAdapter.getNodeSourceCodeLocation(r);if(i&&!i.endTag&&(e._setEndLocation(r,t),e.openElements.stackTop>=1)){const a=e.openElements.items[1],o=e.treeAdapter.getNodeSourceCodeLocation(a);o&&!o.endTag&&e._setEndLocation(a,t)}}}}function WP(e,t){e._setDocumentType(t);const n=t.forceQuirks?Xt.QUIRKS:bP(t);EP(t)||e._err(t,R.nonConformingDoctype),e.treeAdapter.setDocumentMode(e.document,n),e.insertionMode=D.BEFORE_HTML}function ao(e,t){e._err(t,R.missingDoctype,!0),e.treeAdapter.setDocumentMode(e.document,Xt.QUIRKS),e.insertionMode=D.BEFORE_HTML,e._processToken(t)}function YP(e,t){t.tagID===c.HTML?(e._insertElement(t,W.HTML),e.insertionMode=D.BEFORE_HEAD):Ao(e,t)}function VP(e,t){const n=t.tagID;(n===c.HTML||n===c.HEAD||n===c.BODY||n===c.BR)&&Ao(e,t)}function Ao(e,t){e._insertFakeRootElement(),e.insertionMode=D.BEFORE_HEAD,e._processToken(t)}function $P(e,t){switch(t.tagID){case c.HTML:{dt(e,t);break}case c.HEAD:{e._insertElement(t,W.HTML),e.headElement=e.openElements.current,e.insertionMode=D.IN_HEAD;break}default:So(e,t)}}function qP(e,t){const n=t.tagID;n===c.HEAD||n===c.BODY||n===c.HTML||n===c.BR?So(e,t):e._err(t,R.endTagWithoutMatchingOpenElement)}function So(e,t){e._insertFakeElement(L.HEAD,c.HEAD),e.headElement=e.openElements.current,e.insertionMode=D.IN_HEAD,e._processToken(t)}function xn(e,t){switch(t.tagID){case c.HTML:{dt(e,t);break}case c.BASE:case c.BASEFONT:case c.BGSOUND:case c.LINK:case c.META:{e._appendElement(t,W.HTML),t.ackSelfClosing=!0;break}case c.TITLE:{e._switchToTextParsing(t,je.RCDATA);break}case c.NOSCRIPT:{e.options.scriptingEnabled?e._switchToTextParsing(t,je.RAWTEXT):(e._insertElement(t,W.HTML),e.insertionMode=D.IN_HEAD_NO_SCRIPT);break}case c.NOFRAMES:case c.STYLE:{e._switchToTextParsing(t,je.RAWTEXT);break}case c.SCRIPT:{e._switchToTextParsing(t,je.SCRIPT_DATA);break}case c.TEMPLATE:{e._insertTemplate(t),e.activeFormattingElements.insertMarker(),e.framesetOk=!1,e.insertionMode=D.IN_TEMPLATE,e.tmplInsertionModeStack.unshift(D.IN_TEMPLATE);break}case c.HEAD:{e._err(t,R.misplacedStartTagForHeadElement);break}default:Do(e,t)}}function QP(e,t){switch(t.tagID){case c.HEAD:{e.openElements.pop(),e.insertionMode=D.AFTER_HEAD;break}case c.BODY:case c.BR:case c.HTML:{Do(e,t);break}case c.TEMPLATE:{Pi(e,t);break}default:e._err(t,R.endTagWithoutMatchingOpenElement)}}function Pi(e,t){e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),e.openElements.currentTagId!==c.TEMPLATE&&e._err(t,R.closingOfElementWithOpenChildElements),e.openElements.popUntilTagNamePopped(c.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode()):e._err(t,R.endTagWithoutMatchingOpenElement)}function Do(e,t){e.openElements.pop(),e.insertionMode=D.AFTER_HEAD,e._processToken(t)}function GP(e,t){switch(t.tagID){case c.HTML:{dt(e,t);break}case c.BASEFONT:case c.BGSOUND:case c.HEAD:case c.LINK:case c.META:case c.NOFRAMES:case c.STYLE:{xn(e,t);break}case c.NOSCRIPT:{e._err(t,R.nestedNoscriptInHead);break}default:_o(e,t)}}function KP(e,t){switch(t.tagID){case c.NOSCRIPT:{e.openElements.pop(),e.insertionMode=D.IN_HEAD;break}case c.BR:{_o(e,t);break}default:e._err(t,R.endTagWithoutMatchingOpenElement)}}function _o(e,t){const n=t.type===fe.EOF?R.openElementsLeftAfterEof:R.disallowedContentInNoscriptInHead;e._err(t,n),e.openElements.pop(),e.insertionMode=D.IN_HEAD,e._processToken(t)}function XP(e,t){switch(t.tagID){case c.HTML:{dt(e,t);break}case c.BODY:{e._insertElement(t,W.HTML),e.framesetOk=!1,e.insertionMode=D.IN_BODY;break}case c.FRAMESET:{e._insertElement(t,W.HTML),e.insertionMode=D.IN_FRAMESET;break}case c.BASE:case c.BASEFONT:case c.BGSOUND:case c.LINK:case c.META:case c.NOFRAMES:case c.SCRIPT:case c.STYLE:case c.TEMPLATE:case c.TITLE:{e._err(t,R.abandonedHeadElementChild),e.openElements.push(e.headElement,c.HEAD),xn(e,t),e.openElements.remove(e.headElement);break}case c.HEAD:{e._err(t,R.misplacedStartTagForHeadElement);break}default:Io(e,t)}}function JP(e,t){switch(t.tagID){case c.BODY:case c.HTML:case c.BR:{Io(e,t);break}case c.TEMPLATE:{Pi(e,t);break}default:e._err(t,R.endTagWithoutMatchingOpenElement)}}function Io(e,t){e._insertFakeElement(L.BODY,c.BODY),e.insertionMode=D.IN_BODY,Bl(e,t)}function Bl(e,t){switch(t.type){case fe.CHARACTER:{ev(e,t);break}case fe.WHITESPACE_CHARACTER:{ZT(e,t);break}case fe.COMMENT:{yf(e,t);break}case fe.START_TAG:{dt(e,t);break}case fe.END_TAG:{Ul(e,t);break}case fe.EOF:{iv(e,t);break}}}function ZT(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t)}function ev(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t),e.framesetOk=!1}function ZP(e,t){e.openElements.tmplCount===0&&e.treeAdapter.adoptAttributes(e.openElements.items[0],t.attrs)}function eF(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();n&&e.openElements.tmplCount===0&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(n,t.attrs))}function tF(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();e.framesetOk&&n&&(e.treeAdapter.detachNode(n),e.openElements.popAllUpToHtmlElement(),e._insertElement(t,W.HTML),e.insertionMode=D.IN_FRAMESET)}function nF(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,W.HTML)}function rF(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e.openElements.currentTagId!==void 0&&gf.has(e.openElements.currentTagId)&&e.openElements.pop(),e._insertElement(t,W.HTML)}function iF(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,W.HTML),e.skipNextNewLine=!0,e.framesetOk=!1}function aF(e,t){const n=e.openElements.tmplCount>0;(!e.formElement||n)&&(e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,W.HTML),n||(e.formElement=e.openElements.current))}function oF(e,t){e.framesetOk=!1;const n=t.tagID;for(let r=e.openElements.stackTop;r>=0;r--){const i=e.openElements.tagIDs[r];if(n===c.LI&&i===c.LI||(n===c.DD||n===c.DT)&&(i===c.DD||i===c.DT)){e.openElements.generateImpliedEndTagsWithExclusion(i),e.openElements.popUntilTagNamePopped(i);break}if(i!==c.ADDRESS&&i!==c.DIV&&i!==c.P&&e._isSpecialElement(e.openElements.items[r],i))break}e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,W.HTML)}function sF(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,W.HTML),e.tokenizer.state=je.PLAINTEXT}function uF(e,t){e.openElements.hasInScope(c.BUTTON)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(c.BUTTON)),e._reconstructActiveFormattingElements(),e._insertElement(t,W.HTML),e.framesetOk=!1}function lF(e,t){const n=e.activeFormattingElements.getElementEntryInScopeWithTagName(L.A);n&&(np(e,t),e.openElements.remove(n.element),e.activeFormattingElements.removeEntry(n)),e._reconstructActiveFormattingElements(),e._insertElement(t,W.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function cF(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,W.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function dF(e,t){e._reconstructActiveFormattingElements(),e.openElements.hasInScope(c.NOBR)&&(np(e,t),e._reconstructActiveFormattingElements()),e._insertElement(t,W.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function fF(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,W.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1}function hF(e,t){e.treeAdapter.getDocumentMode(e.document)!==Xt.QUIRKS&&e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,W.HTML),e.framesetOk=!1,e.insertionMode=D.IN_TABLE}function tv(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,W.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function nv(e){const t=YT(e,Ci.TYPE);return t!=null&&t.toLowerCase()===NP}function pF(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,W.HTML),nv(t)||(e.framesetOk=!1),t.ackSelfClosing=!0}function mF(e,t){e._appendElement(t,W.HTML),t.ackSelfClosing=!0}function gF(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._appendElement(t,W.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function yF(e,t){t.tagName=L.IMG,t.tagID=c.IMG,tv(e,t)}function EF(e,t){e._insertElement(t,W.HTML),e.skipNextNewLine=!0,e.tokenizer.state=je.RCDATA,e.originalInsertionMode=e.insertionMode,e.framesetOk=!1,e.insertionMode=D.TEXT}function bF(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._reconstructActiveFormattingElements(),e.framesetOk=!1,e._switchToTextParsing(t,je.RAWTEXT)}function TF(e,t){e.framesetOk=!1,e._switchToTextParsing(t,je.RAWTEXT)}function gg(e,t){e._switchToTextParsing(t,je.RAWTEXT)}function vF(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,W.HTML),e.framesetOk=!1,e.insertionMode=e.insertionMode===D.IN_TABLE||e.insertionMode===D.IN_CAPTION||e.insertionMode===D.IN_TABLE_BODY||e.insertionMode===D.IN_ROW||e.insertionMode===D.IN_CELL?D.IN_SELECT_IN_TABLE:D.IN_SELECT}function wF(e,t){e.openElements.currentTagId===c.OPTION&&e.openElements.pop(),e._reconstructActiveFormattingElements(),e._insertElement(t,W.HTML)}function CF(e,t){e.openElements.hasInScope(c.RUBY)&&e.openElements.generateImpliedEndTags(),e._insertElement(t,W.HTML)}function xF(e,t){e.openElements.hasInScope(c.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(c.RTC),e._insertElement(t,W.HTML)}function kF(e,t){e._reconstructActiveFormattingElements(),KT(t),tp(t),t.selfClosing?e._appendElement(t,W.MATHML):e._insertElement(t,W.MATHML),t.ackSelfClosing=!0}function AF(e,t){e._reconstructActiveFormattingElements(),XT(t),tp(t),t.selfClosing?e._appendElement(t,W.SVG):e._insertElement(t,W.SVG),t.ackSelfClosing=!0}function yg(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,W.HTML)}function dt(e,t){switch(t.tagID){case c.I:case c.S:case c.B:case c.U:case c.EM:case c.TT:case c.BIG:case c.CODE:case c.FONT:case c.SMALL:case c.STRIKE:case c.STRONG:{cF(e,t);break}case c.A:{lF(e,t);break}case c.H1:case c.H2:case c.H3:case c.H4:case c.H5:case c.H6:{rF(e,t);break}case c.P:case c.DL:case c.OL:case c.UL:case c.DIV:case c.DIR:case c.NAV:case c.MAIN:case c.MENU:case c.ASIDE:case c.CENTER:case c.FIGURE:case c.FOOTER:case c.HEADER:case c.HGROUP:case c.DIALOG:case c.DETAILS:case c.ADDRESS:case c.ARTICLE:case c.SEARCH:case c.SECTION:case c.SUMMARY:case c.FIELDSET:case c.BLOCKQUOTE:case c.FIGCAPTION:{nF(e,t);break}case c.LI:case c.DD:case c.DT:{oF(e,t);break}case c.BR:case c.IMG:case c.WBR:case c.AREA:case c.EMBED:case c.KEYGEN:{tv(e,t);break}case c.HR:{gF(e,t);break}case c.RB:case c.RTC:{CF(e,t);break}case c.RT:case c.RP:{xF(e,t);break}case c.PRE:case c.LISTING:{iF(e,t);break}case c.XMP:{bF(e,t);break}case c.SVG:{AF(e,t);break}case c.HTML:{ZP(e,t);break}case c.BASE:case c.LINK:case c.META:case c.STYLE:case c.TITLE:case c.SCRIPT:case c.BGSOUND:case c.BASEFONT:case c.TEMPLATE:{xn(e,t);break}case c.BODY:{eF(e,t);break}case c.FORM:{aF(e,t);break}case c.NOBR:{dF(e,t);break}case c.MATH:{kF(e,t);break}case c.TABLE:{hF(e,t);break}case c.INPUT:{pF(e,t);break}case c.PARAM:case c.TRACK:case c.SOURCE:{mF(e,t);break}case c.IMAGE:{yF(e,t);break}case c.BUTTON:{uF(e,t);break}case c.APPLET:case c.OBJECT:case c.MARQUEE:{fF(e,t);break}case c.IFRAME:{TF(e,t);break}case c.SELECT:{vF(e,t);break}case c.OPTION:case c.OPTGROUP:{wF(e,t);break}case c.NOEMBED:case c.NOFRAMES:{gg(e,t);break}case c.FRAMESET:{tF(e,t);break}case c.TEXTAREA:{EF(e,t);break}case c.NOSCRIPT:{e.options.scriptingEnabled?gg(e,t):yg(e,t);break}case c.PLAINTEXT:{sF(e,t);break}case c.COL:case c.TH:case c.TD:case c.TR:case c.HEAD:case c.FRAME:case c.TBODY:case c.TFOOT:case c.THEAD:case c.CAPTION:case c.COLGROUP:break;default:yg(e,t)}}function SF(e,t){if(e.openElements.hasInScope(c.BODY)&&(e.insertionMode=D.AFTER_BODY,e.options.sourceCodeLocationInfo)){const n=e.openElements.tryPeekProperlyNestedBodyElement();n&&e._setEndLocation(n,t)}}function DF(e,t){e.openElements.hasInScope(c.BODY)&&(e.insertionMode=D.AFTER_BODY,fv(e,t))}function _F(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n))}function IF(e){const t=e.openElements.tmplCount>0,{formElement:n}=e;t||(e.formElement=null),(n||t)&&e.openElements.hasInScope(c.FORM)&&(e.openElements.generateImpliedEndTags(),t?e.openElements.popUntilTagNamePopped(c.FORM):n&&e.openElements.remove(n))}function NF(e){e.openElements.hasInButtonScope(c.P)||e._insertFakeElement(L.P,c.P),e._closePElement()}function LF(e){e.openElements.hasInListItemScope(c.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(c.LI),e.openElements.popUntilTagNamePopped(c.LI))}function OF(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTagsWithExclusion(n),e.openElements.popUntilTagNamePopped(n))}function RF(e){e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilNumberedHeaderPopped())}function PF(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker())}function FF(e){e._reconstructActiveFormattingElements(),e._insertFakeElement(L.BR,c.BR),e.openElements.pop(),e.framesetOk=!1}function rv(e,t){const n=t.tagName,r=t.tagID;for(let i=e.openElements.stackTop;i>0;i--){const a=e.openElements.items[i],o=e.openElements.tagIDs[i];if(r===o&&(r!==c.UNKNOWN||e.treeAdapter.getTagName(a)===n)){e.openElements.generateImpliedEndTagsWithExclusion(r),e.openElements.stackTop>=i&&e.openElements.shortenToLength(i);break}if(e._isSpecialElement(a,o))break}}function Ul(e,t){switch(t.tagID){case c.A:case c.B:case c.I:case c.S:case c.U:case c.EM:case c.TT:case c.BIG:case c.CODE:case c.FONT:case c.NOBR:case c.SMALL:case c.STRIKE:case c.STRONG:{np(e,t);break}case c.P:{NF(e);break}case c.DL:case c.UL:case c.OL:case c.DIR:case c.DIV:case c.NAV:case c.PRE:case c.MAIN:case c.MENU:case c.ASIDE:case c.BUTTON:case c.CENTER:case c.FIGURE:case c.FOOTER:case c.HEADER:case c.HGROUP:case c.DIALOG:case c.ADDRESS:case c.ARTICLE:case c.DETAILS:case c.SEARCH:case c.SECTION:case c.SUMMARY:case c.LISTING:case c.FIELDSET:case c.BLOCKQUOTE:case c.FIGCAPTION:{_F(e,t);break}case c.LI:{LF(e);break}case c.DD:case c.DT:{OF(e,t);break}case c.H1:case c.H2:case c.H3:case c.H4:case c.H5:case c.H6:{RF(e);break}case c.BR:{FF(e);break}case c.BODY:{SF(e,t);break}case c.HTML:{DF(e,t);break}case c.FORM:{IF(e);break}case c.APPLET:case c.OBJECT:case c.MARQUEE:{PF(e,t);break}case c.TEMPLATE:{Pi(e,t);break}default:rv(e,t)}}function iv(e,t){e.tmplInsertionModeStack.length>0?dv(e,t):rp(e,t)}function MF(e,t){var n;t.tagID===c.SCRIPT&&((n=e.scriptHandler)===null||n===void 0||n.call(e,e.openElements.current)),e.openElements.pop(),e.insertionMode=e.originalInsertionMode}function BF(e,t){e._err(t,R.eofInElementThatCanContainOnlyText),e.openElements.pop(),e.insertionMode=e.originalInsertionMode,e.onEof(t)}function Wc(e,t){if(e.openElements.currentTagId!==void 0&&JT.has(e.openElements.currentTagId))switch(e.pendingCharacterTokens.length=0,e.hasNonWhitespacePendingCharacterToken=!1,e.originalInsertionMode=e.insertionMode,e.insertionMode=D.IN_TABLE_TEXT,t.type){case fe.CHARACTER:{ov(e,t);break}case fe.WHITESPACE_CHARACTER:{av(e,t);break}}else Ts(e,t)}function UF(e,t){e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),e._insertElement(t,W.HTML),e.insertionMode=D.IN_CAPTION}function HF(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,W.HTML),e.insertionMode=D.IN_COLUMN_GROUP}function jF(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(L.COLGROUP,c.COLGROUP),e.insertionMode=D.IN_COLUMN_GROUP,ip(e,t)}function zF(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,W.HTML),e.insertionMode=D.IN_TABLE_BODY}function WF(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(L.TBODY,c.TBODY),e.insertionMode=D.IN_TABLE_BODY,Hl(e,t)}function YF(e,t){e.openElements.hasInTableScope(c.TABLE)&&(e.openElements.popUntilTagNamePopped(c.TABLE),e._resetInsertionMode(),e._processStartTag(t))}function VF(e,t){nv(t)?e._appendElement(t,W.HTML):Ts(e,t),t.ackSelfClosing=!0}function $F(e,t){!e.formElement&&e.openElements.tmplCount===0&&(e._insertElement(t,W.HTML),e.formElement=e.openElements.current,e.openElements.pop())}function Ia(e,t){switch(t.tagID){case c.TD:case c.TH:case c.TR:{WF(e,t);break}case c.STYLE:case c.SCRIPT:case c.TEMPLATE:{xn(e,t);break}case c.COL:{jF(e,t);break}case c.FORM:{$F(e,t);break}case c.TABLE:{YF(e,t);break}case c.TBODY:case c.TFOOT:case c.THEAD:{zF(e,t);break}case c.INPUT:{VF(e,t);break}case c.CAPTION:{UF(e,t);break}case c.COLGROUP:{HF(e,t);break}default:Ts(e,t)}}function is(e,t){switch(t.tagID){case c.TABLE:{e.openElements.hasInTableScope(c.TABLE)&&(e.openElements.popUntilTagNamePopped(c.TABLE),e._resetInsertionMode());break}case c.TEMPLATE:{Pi(e,t);break}case c.BODY:case c.CAPTION:case c.COL:case c.COLGROUP:case c.HTML:case c.TBODY:case c.TD:case c.TFOOT:case c.TH:case c.THEAD:case c.TR:break;default:Ts(e,t)}}function Ts(e,t){const n=e.fosterParentingEnabled;e.fosterParentingEnabled=!0,Bl(e,t),e.fosterParentingEnabled=n}function av(e,t){e.pendingCharacterTokens.push(t)}function ov(e,t){e.pendingCharacterTokens.push(t),e.hasNonWhitespacePendingCharacterToken=!0}function oo(e,t){let n=0;if(e.hasNonWhitespacePendingCharacterToken)for(;n<e.pendingCharacterTokens.length;n++)Ts(e,e.pendingCharacterTokens[n]);else for(;n<e.pendingCharacterTokens.length;n++)e._insertCharacters(e.pendingCharacterTokens[n]);e.insertionMode=e.originalInsertionMode,e._processToken(t)}const sv=new Set([c.CAPTION,c.COL,c.COLGROUP,c.TBODY,c.TD,c.TFOOT,c.TH,c.THEAD,c.TR]);function qF(e,t){const n=t.tagID;sv.has(n)?e.openElements.hasInTableScope(c.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(c.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=D.IN_TABLE,Ia(e,t)):dt(e,t)}function QF(e,t){const n=t.tagID;switch(n){case c.CAPTION:case c.TABLE:{e.openElements.hasInTableScope(c.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(c.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=D.IN_TABLE,n===c.TABLE&&is(e,t));break}case c.BODY:case c.COL:case c.COLGROUP:case c.HTML:case c.TBODY:case c.TD:case c.TFOOT:case c.TH:case c.THEAD:case c.TR:break;default:Ul(e,t)}}function ip(e,t){switch(t.tagID){case c.HTML:{dt(e,t);break}case c.COL:{e._appendElement(t,W.HTML),t.ackSelfClosing=!0;break}case c.TEMPLATE:{xn(e,t);break}default:el(e,t)}}function GF(e,t){switch(t.tagID){case c.COLGROUP:{e.openElements.currentTagId===c.COLGROUP&&(e.openElements.pop(),e.insertionMode=D.IN_TABLE);break}case c.TEMPLATE:{Pi(e,t);break}case c.COL:break;default:el(e,t)}}function el(e,t){e.openElements.currentTagId===c.COLGROUP&&(e.openElements.pop(),e.insertionMode=D.IN_TABLE,e._processToken(t))}function Hl(e,t){switch(t.tagID){case c.TR:{e.openElements.clearBackToTableBodyContext(),e._insertElement(t,W.HTML),e.insertionMode=D.IN_ROW;break}case c.TH:case c.TD:{e.openElements.clearBackToTableBodyContext(),e._insertFakeElement(L.TR,c.TR),e.insertionMode=D.IN_ROW,jl(e,t);break}case c.CAPTION:case c.COL:case c.COLGROUP:case c.TBODY:case c.TFOOT:case c.THEAD:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=D.IN_TABLE,Ia(e,t));break}default:Ia(e,t)}}function Ef(e,t){const n=t.tagID;switch(t.tagID){case c.TBODY:case c.TFOOT:case c.THEAD:{e.openElements.hasInTableScope(n)&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=D.IN_TABLE);break}case c.TABLE:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=D.IN_TABLE,is(e,t));break}case c.BODY:case c.CAPTION:case c.COL:case c.COLGROUP:case c.HTML:case c.TD:case c.TH:case c.TR:break;default:is(e,t)}}function jl(e,t){switch(t.tagID){case c.TH:case c.TD:{e.openElements.clearBackToTableRowContext(),e._insertElement(t,W.HTML),e.insertionMode=D.IN_CELL,e.activeFormattingElements.insertMarker();break}case c.CAPTION:case c.COL:case c.COLGROUP:case c.TBODY:case c.TFOOT:case c.THEAD:case c.TR:{e.openElements.hasInTableScope(c.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=D.IN_TABLE_BODY,Hl(e,t));break}default:Ia(e,t)}}function uv(e,t){switch(t.tagID){case c.TR:{e.openElements.hasInTableScope(c.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=D.IN_TABLE_BODY);break}case c.TABLE:{e.openElements.hasInTableScope(c.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=D.IN_TABLE_BODY,Ef(e,t));break}case c.TBODY:case c.TFOOT:case c.THEAD:{(e.openElements.hasInTableScope(t.tagID)||e.openElements.hasInTableScope(c.TR))&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=D.IN_TABLE_BODY,Ef(e,t));break}case c.BODY:case c.CAPTION:case c.COL:case c.COLGROUP:case c.HTML:case c.TD:case c.TH:break;default:is(e,t)}}function KF(e,t){const n=t.tagID;sv.has(n)?(e.openElements.hasInTableScope(c.TD)||e.openElements.hasInTableScope(c.TH))&&(e._closeTableCell(),jl(e,t)):dt(e,t)}function XF(e,t){const n=t.tagID;switch(n){case c.TD:case c.TH:{e.openElements.hasInTableScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=D.IN_ROW);break}case c.TABLE:case c.TBODY:case c.TFOOT:case c.THEAD:case c.TR:{e.openElements.hasInTableScope(n)&&(e._closeTableCell(),uv(e,t));break}case c.BODY:case c.CAPTION:case c.COL:case c.COLGROUP:case c.HTML:break;default:Ul(e,t)}}function lv(e,t){switch(t.tagID){case c.HTML:{dt(e,t);break}case c.OPTION:{e.openElements.currentTagId===c.OPTION&&e.openElements.pop(),e._insertElement(t,W.HTML);break}case c.OPTGROUP:{e.openElements.currentTagId===c.OPTION&&e.openElements.pop(),e.openElements.currentTagId===c.OPTGROUP&&e.openElements.pop(),e._insertElement(t,W.HTML);break}case c.HR:{e.openElements.currentTagId===c.OPTION&&e.openElements.pop(),e.openElements.currentTagId===c.OPTGROUP&&e.openElements.pop(),e._appendElement(t,W.HTML),t.ackSelfClosing=!0;break}case c.INPUT:case c.KEYGEN:case c.TEXTAREA:case c.SELECT:{e.openElements.hasInSelectScope(c.SELECT)&&(e.openElements.popUntilTagNamePopped(c.SELECT),e._resetInsertionMode(),t.tagID!==c.SELECT&&e._processStartTag(t));break}case c.SCRIPT:case c.TEMPLATE:{xn(e,t);break}}}function cv(e,t){switch(t.tagID){case c.OPTGROUP:{e.openElements.stackTop>0&&e.openElements.currentTagId===c.OPTION&&e.openElements.tagIDs[e.openElements.stackTop-1]===c.OPTGROUP&&e.openElements.pop(),e.openElements.currentTagId===c.OPTGROUP&&e.openElements.pop();break}case c.OPTION:{e.openElements.currentTagId===c.OPTION&&e.openElements.pop();break}case c.SELECT:{e.openElements.hasInSelectScope(c.SELECT)&&(e.openElements.popUntilTagNamePopped(c.SELECT),e._resetInsertionMode());break}case c.TEMPLATE:{Pi(e,t);break}}}function JF(e,t){const n=t.tagID;n===c.CAPTION||n===c.TABLE||n===c.TBODY||n===c.TFOOT||n===c.THEAD||n===c.TR||n===c.TD||n===c.TH?(e.openElements.popUntilTagNamePopped(c.SELECT),e._resetInsertionMode(),e._processStartTag(t)):lv(e,t)}function ZF(e,t){const n=t.tagID;n===c.CAPTION||n===c.TABLE||n===c.TBODY||n===c.TFOOT||n===c.THEAD||n===c.TR||n===c.TD||n===c.TH?e.openElements.hasInTableScope(n)&&(e.openElements.popUntilTagNamePopped(c.SELECT),e._resetInsertionMode(),e.onEndTag(t)):cv(e,t)}function e5(e,t){switch(t.tagID){case c.BASE:case c.BASEFONT:case c.BGSOUND:case c.LINK:case c.META:case c.NOFRAMES:case c.SCRIPT:case c.STYLE:case c.TEMPLATE:case c.TITLE:{xn(e,t);break}case c.CAPTION:case c.COLGROUP:case c.TBODY:case c.TFOOT:case c.THEAD:{e.tmplInsertionModeStack[0]=D.IN_TABLE,e.insertionMode=D.IN_TABLE,Ia(e,t);break}case c.COL:{e.tmplInsertionModeStack[0]=D.IN_COLUMN_GROUP,e.insertionMode=D.IN_COLUMN_GROUP,ip(e,t);break}case c.TR:{e.tmplInsertionModeStack[0]=D.IN_TABLE_BODY,e.insertionMode=D.IN_TABLE_BODY,Hl(e,t);break}case c.TD:case c.TH:{e.tmplInsertionModeStack[0]=D.IN_ROW,e.insertionMode=D.IN_ROW,jl(e,t);break}default:e.tmplInsertionModeStack[0]=D.IN_BODY,e.insertionMode=D.IN_BODY,dt(e,t)}}function t5(e,t){t.tagID===c.TEMPLATE&&Pi(e,t)}function dv(e,t){e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(c.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode(),e.onEof(t)):rp(e,t)}function n5(e,t){t.tagID===c.HTML?dt(e,t):tl(e,t)}function fv(e,t){var n;if(t.tagID===c.HTML){if(e.fragmentContext||(e.insertionMode=D.AFTER_AFTER_BODY),e.options.sourceCodeLocationInfo&&e.openElements.tagIDs[0]===c.HTML){e._setEndLocation(e.openElements.items[0],t);const r=e.openElements.items[1];r&&!(!((n=e.treeAdapter.getNodeSourceCodeLocation(r))===null||n===void 0)&&n.endTag)&&e._setEndLocation(r,t)}}else tl(e,t)}function tl(e,t){e.insertionMode=D.IN_BODY,Bl(e,t)}function r5(e,t){switch(t.tagID){case c.HTML:{dt(e,t);break}case c.FRAMESET:{e._insertElement(t,W.HTML);break}case c.FRAME:{e._appendElement(t,W.HTML),t.ackSelfClosing=!0;break}case c.NOFRAMES:{xn(e,t);break}}}function i5(e,t){t.tagID===c.FRAMESET&&!e.openElements.isRootHtmlElementCurrent()&&(e.openElements.pop(),!e.fragmentContext&&e.openElements.currentTagId!==c.FRAMESET&&(e.insertionMode=D.AFTER_FRAMESET))}function a5(e,t){switch(t.tagID){case c.HTML:{dt(e,t);break}case c.NOFRAMES:{xn(e,t);break}}}function o5(e,t){t.tagID===c.HTML&&(e.insertionMode=D.AFTER_AFTER_FRAMESET)}function s5(e,t){t.tagID===c.HTML?dt(e,t):gu(e,t)}function gu(e,t){e.insertionMode=D.IN_BODY,Bl(e,t)}function u5(e,t){switch(t.tagID){case c.HTML:{dt(e,t);break}case c.NOFRAMES:{xn(e,t);break}}}function l5(e,t){t.chars=Oe,e._insertCharacters(t)}function c5(e,t){e._insertCharacters(t),e.framesetOk=!1}function hv(e){for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==W.HTML&&e.openElements.currentTagId!==void 0&&!e._isIntegrationPoint(e.openElements.currentTagId,e.openElements.current);)e.openElements.pop()}function d5(e,t){if(AP(t))hv(e),e._startTagOutsideForeignContent(t);else{const n=e._getAdjustedCurrentElement(),r=e.treeAdapter.getNamespaceURI(n);r===W.MATHML?KT(t):r===W.SVG&&(SP(t),XT(t)),tp(t),t.selfClosing?e._appendElement(t,r):e._insertElement(t,r),t.ackSelfClosing=!0}}function f5(e,t){if(t.tagID===c.P||t.tagID===c.BR){hv(e),e._endTagOutsideForeignContent(t);return}for(let n=e.openElements.stackTop;n>0;n--){const r=e.openElements.items[n];if(e.treeAdapter.getNamespaceURI(r)===W.HTML){e._endTagOutsideForeignContent(t);break}const i=e.treeAdapter.getTagName(r);if(i.toLowerCase()===t.tagName){t.tagName=i,e.openElements.shortenToLength(n);break}}}L.AREA,L.BASE,L.BASEFONT,L.BGSOUND,L.BR,L.COL,L.EMBED,L.FRAME,L.HR,L.IMG,L.INPUT,L.KEYGEN,L.LINK,L.META,L.PARAM,L.SOURCE,L.TRACK,L.WBR;const h5=/<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi,p5=new Set(["mdxFlowExpression","mdxJsxFlowElement","mdxJsxTextElement","mdxTextExpression","mdxjsEsm"]),Eg={sourceCodeLocationInfo:!0,scriptingEnabled:!1};function pv(e,t){const n=x5(e),r=sT("type",{handlers:{root:m5,element:g5,text:y5,comment:gv,doctype:E5,raw:T5},unknown:v5}),i={parser:n?new mg(Eg):mg.getFragmentParser(void 0,Eg),handle(s){r(s,i)},stitches:!1,options:t||{}};r(e,i),Va(i,jn());const a=n?i.parser.document:i.parser.getFragment(),o=mR(a,{file:i.options.file});return i.stitches&&ys(o,"comment",function(s,u,l){const f=s;if(f.value.stitch&&l&&u!==void 0){const d=l.children;return d[u]=f.value.stitch,u}}),o.type==="root"&&o.children.length===1&&o.children[0].type===e.type?o.children[0]:o}function mv(e,t){let n=-1;if(e)for(;++n<e.length;)t.handle(e[n])}function m5(e,t){mv(e.children,t)}function g5(e,t){w5(e,t),mv(e.children,t),C5(e,t)}function y5(e,t){t.parser.tokenizer.state>4&&(t.parser.tokenizer.state=0);const n={type:fe.CHARACTER,chars:e.value,location:vs(e)};Va(t,jn(e)),t.parser.currentToken=n,t.parser._processToken(t.parser.currentToken)}function E5(e,t){const n={type:fe.DOCTYPE,name:"html",forceQuirks:!1,publicId:"",systemId:"",location:vs(e)};Va(t,jn(e)),t.parser.currentToken=n,t.parser._processToken(t.parser.currentToken)}function b5(e,t){t.stitches=!0;const n=k5(e);if("children"in e&&"children"in n){const r=pv({type:"root",children:e.children},t.options);n.children=r.children}gv({type:"comment",value:{stitch:n}},t)}function gv(e,t){const n=e.value,r={type:fe.COMMENT,data:n,location:vs(e)};Va(t,jn(e)),t.parser.currentToken=r,t.parser._processToken(t.parser.currentToken)}function T5(e,t){if(t.parser.tokenizer.preprocessor.html="",t.parser.tokenizer.preprocessor.pos=-1,t.parser.tokenizer.preprocessor.lastGapPos=-2,t.parser.tokenizer.preprocessor.gapStack=[],t.parser.tokenizer.preprocessor.skipNextNewLine=!1,t.parser.tokenizer.preprocessor.lastChunkWritten=!1,t.parser.tokenizer.preprocessor.endOfChunkHit=!1,t.parser.tokenizer.preprocessor.isEol=!1,yv(t,jn(e)),t.parser.tokenizer.write(t.options.tagfilter?e.value.replace(h5,"&lt;$1$2"):e.value,!1),t.parser.tokenizer._runParsingLoop(),t.parser.tokenizer.state===72||t.parser.tokenizer.state===78){t.parser.tokenizer.preprocessor.lastChunkWritten=!0;const n=t.parser.tokenizer._consume();t.parser.tokenizer._callState(n)}}function v5(e,t){const n=e;if(t.options.passThrough&&t.options.passThrough.includes(n.type))b5(n,t);else{let r="";throw p5.has(n.type)&&(r=". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"),new Error("Cannot compile `"+n.type+"` node"+r)}}function Va(e,t){yv(e,t);const n=e.parser.tokenizer.currentCharacterToken;n&&n.location&&(n.location.endLine=e.parser.tokenizer.preprocessor.line,n.location.endCol=e.parser.tokenizer.preprocessor.col+1,n.location.endOffset=e.parser.tokenizer.preprocessor.offset+1,e.parser.currentToken=n,e.parser._processToken(e.parser.currentToken)),e.parser.tokenizer.paused=!1,e.parser.tokenizer.inLoop=!1,e.parser.tokenizer.active=!1,e.parser.tokenizer.returnState=je.DATA,e.parser.tokenizer.charRefCode=-1,e.parser.tokenizer.consumedAfterSnapshot=-1,e.parser.tokenizer.currentLocation=null,e.parser.tokenizer.currentCharacterToken=null,e.parser.tokenizer.currentToken=null,e.parser.tokenizer.currentAttr={name:"",value:""}}function yv(e,t){if(t&&t.offset!==void 0){const n={startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:-1,endCol:-1,endOffset:-1};e.parser.tokenizer.preprocessor.lineStartPos=-t.column+1,e.parser.tokenizer.preprocessor.droppedBufferSize=t.offset,e.parser.tokenizer.preprocessor.line=t.line,e.parser.tokenizer.currentLocation=n}}function w5(e,t){const n=e.tagName.toLowerCase();if(t.parser.tokenizer.state===je.PLAINTEXT)return;Va(t,jn(e));const r=t.parser.openElements.current;let i="namespaceURI"in r?r.namespaceURI:pi.html;i===pi.html&&n==="svg"&&(i=pi.svg);const a=IR({...e,children:[]},{space:i===pi.svg?"svg":"html"}),o={type:fe.START_TAG,tagName:n,tagID:Ya(n),selfClosing:!1,ackSelfClosing:!1,attrs:"attrs"in a?a.attrs:[],location:vs(e)};t.parser.currentToken=o,t.parser._processToken(t.parser.currentToken),t.parser.tokenizer.lastStartTagName=n}function C5(e,t){const n=e.tagName.toLowerCase();if(!t.parser.tokenizer.inForeignNode&&BR.includes(n)||t.parser.tokenizer.state===je.PLAINTEXT)return;Va(t,Ll(e));const r={type:fe.END_TAG,tagName:n,tagID:Ya(n),selfClosing:!1,ackSelfClosing:!1,attrs:[],location:vs(e)};t.parser.currentToken=r,t.parser._processToken(t.parser.currentToken),n===t.parser.tokenizer.lastStartTagName&&(t.parser.tokenizer.state===je.RCDATA||t.parser.tokenizer.state===je.RAWTEXT||t.parser.tokenizer.state===je.SCRIPT_DATA)&&(t.parser.tokenizer.state=je.DATA)}function x5(e){const t=e.type==="root"?e.children[0]:e;return!!(t&&(t.type==="doctype"||t.type==="element"&&t.tagName.toLowerCase()==="html"))}function vs(e){const t=jn(e)||{line:void 0,column:void 0,offset:void 0},n=Ll(e)||{line:void 0,column:void 0,offset:void 0};return{startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:n.line,endCol:n.column,endOffset:n.offset}}function k5(e){return"children"in e?_a({...e,children:[]}):_a(e)}function A5(e){return function(t,n){return pv(t,{...e,file:n})}}const S5={h1:({children:e,...t})=>_.jsx("h1",{...t,className:"text-3xl font-bold mt-8 mb-4 text-foreground scroll-mt-20",children:e}),h2:({children:e,...t})=>_.jsx("h2",{...t,className:"text-2xl font-semibold mt-8 mb-3 text-foreground scroll-mt-20 pb-2 border-b border-border",children:e}),h3:({children:e,...t})=>_.jsx("h3",{...t,className:"text-xl font-semibold mt-6 mb-2 text-foreground scroll-mt-20",children:e}),h4:({children:e,...t})=>_.jsx("h4",{...t,className:"text-lg font-medium mt-4 mb-2 text-foreground scroll-mt-20",children:e}),p:({children:e})=>_.jsx("p",{className:"my-4 text-foreground/90 leading-7",children:e}),a:({href:e,children:t})=>_.jsx("a",{href:e,className:"text-primary hover:text-primary/80 underline underline-offset-2 transition-colors",target:"_blank",rel:"noopener noreferrer",children:t}),strong:({children:e})=>_.jsx("strong",{className:"font-semibold text-foreground",children:e}),em:({children:e})=>_.jsx("em",{className:"italic",children:e}),ul:({children:e})=>_.jsx("ul",{className:"my-4 ml-6 list-disc space-y-2",children:e}),ol:({children:e})=>_.jsx("ol",{className:"my-4 ml-6 list-decimal space-y-2",children:e}),li:({children:e})=>_.jsx("li",{className:"text-foreground/90 leading-7",children:e}),blockquote:({children:e})=>_.jsx("blockquote",{className:"my-6 pl-4 border-l-4 border-primary/50 italic text-muted-foreground bg-muted/30 py-2 pr-4 rounded-r-lg",children:e}),code:({className:e,children:t,...n})=>!/language-(\w+)/.exec(e||"")&&!e?_.jsx("code",{className:"bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-accent",children:t}):_.jsx("code",{className:"text-sm font-mono text-sidebar-foreground leading-relaxed",...n,children:t}),pre:({children:e})=>_.jsx("pre",{className:"my-6 p-4 bg-sidebar-bg rounded-lg overflow-x-auto border border-sidebar-border",children:e}),hr:()=>_.jsx("hr",{className:"my-8 border-border"}),table:({children:e})=>_.jsx("div",{className:"my-6 overflow-x-auto",children:_.jsx("table",{className:"w-full border-collapse",children:e})}),th:({children:e})=>_.jsx("th",{className:"border border-border bg-muted px-4 py-2 text-left font-semibold",children:e}),td:({children:e})=>_.jsx("td",{className:"border border-border px-4 py-2",children:e})};function D5({content:e}){return _.jsx("div",{className:"prose-course animate-fade-in",children:_.jsx(F6,{remarkPlugins:[G4],rehypePlugins:[iR,A5],components:S5,children:e})})}function _5(){var s;const{courseId:e}=JS(),[t,n]=AD(),r=e?r3(e):void 0,i=t.get("tab")||((s=r==null?void 0:r.tabs[0])==null?void 0:s.id)||"",a=r==null?void 0:r.tabs.find(u=>u.id===i);if(x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[i]),!r)return _.jsx(fD,{to:"/",replace:!0});const o=u=>{n({tab:u})};return _.jsxs("div",{className:"flex min-h-screen bg-background",children:[_.jsx(a3,{}),_.jsxs("div",{className:"flex-1 flex flex-col min-w-0",children:[_.jsxs("div",{className:"border-b border-border px-6 py-3 flex items-center gap-2 text-sm",children:[_.jsx(es,{to:"/",className:"text-muted-foreground hover:text-foreground transition-colors",children:_.jsx(Gx,{className:"w-4 h-4"})}),_.jsx(Qx,{className:"w-4 h-4 text-muted-foreground"}),_.jsx("span",{className:"text-muted-foreground",children:r.icon}),_.jsx("span",{className:"font-medium text-foreground",children:r.title})]}),_.jsx(o3,{tabs:r.tabs,activeTab:i,onTabChange:o}),_.jsxs("div",{className:"flex-1 flex",children:[_.jsx("main",{className:"flex-1 px-6 lg:px-12 py-8 max-w-4xl",children:a&&_.jsx(D5,{content:a.content})}),a&&_.jsx(u3,{content:a.content})]})]})]})}const I5=()=>{const e=ti();return x.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),_.jsx("div",{className:"flex min-h-screen items-center justify-center bg-muted",children:_.jsxs("div",{className:"text-center",children:[_.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),_.jsx("p",{className:"mb-4 text-xl text-muted-foreground",children:"Oops! Page not found"}),_.jsx("a",{href:"/",className:"text-primary underline hover:text-primary/90",children:"Return to Home"})]})})},N5=new vS,L5=()=>_.jsx(CS,{client:N5,children:_.jsxs(XA,{children:[_.jsx(R2,{}),_.jsx(fk,{}),_.jsx(wD,{children:_.jsxs(pD,{children:[_.jsx(fu,{path:"/",element:_.jsx(i3,{})}),_.jsx(fu,{path:"/course/:courseId",element:_.jsx(_5,{})}),_.jsx(fu,{path:"*",element:_.jsx(I5,{})})]})})]})});jy(document.getElementById("root")).render(_.jsx(L5,{}));
