var Mg=Object.defineProperty;var Bg=(e,t,n)=>t in e?Mg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var At=(e,t,n)=>(Bg(e,typeof t!="symbol"?t+"":t,n),n);function Vg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qo={},qg={get exports(){return Qo},set exports(e){Qo=e}},Ki={},$={},Ug={get exports(){return $},set exports(e){$=e}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=Symbol.for("react.element"),Hg=Symbol.for("react.portal"),Wg=Symbol.for("react.fragment"),Yg=Symbol.for("react.strict_mode"),Gg=Symbol.for("react.profiler"),Kg=Symbol.for("react.provider"),Qg=Symbol.for("react.context"),Xg=Symbol.for("react.forward_ref"),Zg=Symbol.for("react.suspense"),Jg=Symbol.for("react.memo"),ev=Symbol.for("react.lazy"),ed=Symbol.iterator;function tv(e){return e===null||typeof e!="object"?null:(e=ed&&e[ed]||e["@@iterator"],typeof e=="function"?e:null)}var df={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hf=Object.assign,ff={};function ao(e,t,n){this.props=e,this.context=t,this.refs=ff,this.updater=n||df}ao.prototype.isReactComponent={};ao.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ao.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mf(){}mf.prototype=ao.prototype;function wu(e,t,n){this.props=e,this.context=t,this.refs=ff,this.updater=n||df}var Fu=wu.prototype=new mf;Fu.constructor=wu;hf(Fu,ao.prototype);Fu.isPureReactComponent=!0;var td=Array.isArray,pf=Object.prototype.hasOwnProperty,Su={current:null},gf={key:!0,ref:!0,__self:!0,__source:!0};function vf(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)pf.call(t,r)&&!gf.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:vl,type:e,key:i,ref:a,props:l,_owner:Su.current}}function nv(e,t){return{$$typeof:vl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xu(e){return typeof e=="object"&&e!==null&&e.$$typeof===vl}function rv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var nd=/\/+/g;function $a(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rv(""+e.key):t.toString(36)}function ti(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case vl:case Hg:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+$a(a,0):r,td(l)?(n="",e!=null&&(n=e.replace(nd,"$&/")+"/"),ti(l,t,n,"",function(d){return d})):l!=null&&(xu(l)&&(l=nv(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(nd,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",td(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+$a(i,s);a+=ti(i,t,n,u,l)}else if(u=tv(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+$a(i,s++),a+=ti(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Pl(e,t,n){if(e==null)return e;var r=[],l=0;return ti(e,r,"","",function(i){return t.call(n,i,l++)}),r}function ov(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var nt={current:null},ni={transition:null},lv={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:ni,ReactCurrentOwner:Su};ee.Children={map:Pl,forEach:function(e,t,n){Pl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pl(e,function(){t++}),t},toArray:function(e){return Pl(e,function(t){return t})||[]},only:function(e){if(!xu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=ao;ee.Fragment=Wg;ee.Profiler=Gg;ee.PureComponent=wu;ee.StrictMode=Yg;ee.Suspense=Zg;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lv;ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hf({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Su.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)pf.call(t,u)&&!gf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:vl,type:e.type,key:l,ref:i,props:r,_owner:a}};ee.createContext=function(e){return e={$$typeof:Qg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kg,_context:e},e.Consumer=e};ee.createElement=vf;ee.createFactory=function(e){var t=vf.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:Xg,render:e}};ee.isValidElement=xu;ee.lazy=function(e){return{$$typeof:ev,_payload:{_status:-1,_result:e},_init:ov}};ee.memo=function(e,t){return{$$typeof:Jg,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=ni.transition;ni.transition={};try{e()}finally{ni.transition=t}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(e,t){return nt.current.useCallback(e,t)};ee.useContext=function(e){return nt.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return nt.current.useDeferredValue(e)};ee.useEffect=function(e,t){return nt.current.useEffect(e,t)};ee.useId=function(){return nt.current.useId()};ee.useImperativeHandle=function(e,t,n){return nt.current.useImperativeHandle(e,t,n)};ee.useInsertionEffect=function(e,t){return nt.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return nt.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return nt.current.useMemo(e,t)};ee.useReducer=function(e,t,n){return nt.current.useReducer(e,t,n)};ee.useRef=function(e){return nt.current.useRef(e)};ee.useState=function(e){return nt.current.useState(e)};ee.useSyncExternalStore=function(e,t,n){return nt.current.useSyncExternalStore(e,t,n)};ee.useTransition=function(){return nt.current.useTransition()};ee.version="18.2.0";(function(e){e.exports=ee})(Ug);const et=zg($),us=Vg({__proto__:null,default:et},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv=$,av=Symbol.for("react.element"),sv=Symbol.for("react.fragment"),uv=Object.prototype.hasOwnProperty,cv=iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dv={key:!0,ref:!0,__self:!0,__source:!0};function yf(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)uv.call(t,r)&&!dv.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:av,type:e,key:i,ref:a,props:l,_owner:cv.current}}Ki.Fragment=sv;Ki.jsx=yf;Ki.jsxs=yf;(function(e){e.exports=Ki})(qg);const Ee=Qo.Fragment,o=Qo.jsx,c=Qo.jsxs;var cs={},ds={},hv={get exports(){return ds},set exports(e){ds=e}},bt={},hs={},fv={get exports(){return hs},set exports(e){hs=e}},bf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,B){var j=A.length;A.push(B);e:for(;0<j;){var U=j-1>>>1,K=A[U];if(0<l(K,B))A[U]=B,A[j]=K,j=U;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var B=A[0],j=A.pop();if(j!==B){A[0]=j;e:for(var U=0,K=A.length,ht=K>>>1;U<ht;){var le=2*(U+1)-1,ze=A[le],Ce=le+1,Ie=A[Ce];if(0>l(ze,j))Ce<K&&0>l(Ie,ze)?(A[U]=Ie,A[Ce]=j,U=Ce):(A[U]=ze,A[le]=j,U=le);else if(Ce<K&&0>l(Ie,j))A[U]=Ie,A[Ce]=j,U=Ce;else break e}}return B}function l(A,B){var j=A.sortIndex-B.sortIndex;return j!==0?j:A.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],m=1,p=null,v=3,x=!1,T=!1,E=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(A){for(var B=n(d);B!==null;){if(B.callback===null)r(d);else if(B.startTime<=A)r(d),B.sortIndex=B.expirationTime,t(u,B);else break;B=n(d)}}function y(A){if(E=!1,f(A),!T)if(n(u)!==null)T=!0,be(w);else{var B=n(d);B!==null&&Ve(y,B.startTime-A)}}function w(A,B){T=!1,E&&(E=!1,g(k),k=-1),x=!0;var j=v;try{for(f(B),p=n(u);p!==null&&(!(p.expirationTime>B)||A&&!H());){var U=p.callback;if(typeof U=="function"){p.callback=null,v=p.priorityLevel;var K=U(p.expirationTime<=B);B=e.unstable_now(),typeof K=="function"?p.callback=K:p===n(u)&&r(u),f(B)}else r(u);p=n(u)}if(p!==null)var ht=!0;else{var le=n(d);le!==null&&Ve(y,le.startTime-B),ht=!1}return ht}finally{p=null,v=j,x=!1}}var F=!1,C=null,k=-1,L=5,O=-1;function H(){return!(e.unstable_now()-O<L)}function te(){if(C!==null){var A=e.unstable_now();O=A;var B=!0;try{B=C(!0,A)}finally{B?oe():(F=!1,C=null)}}else F=!1}var oe;if(typeof h=="function")oe=function(){h(te)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,me=ye.port2;ye.port1.onmessage=te,oe=function(){me.postMessage(null)}}else oe=function(){b(te,0)};function be(A){C=A,F||(F=!0,oe())}function Ve(A,B){k=b(function(){A(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){T||x||(T=!0,be(w))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(A){switch(v){case 1:case 2:case 3:var B=3;break;default:B=v}var j=v;v=B;try{return A()}finally{v=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,B){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var j=v;v=A;try{return B()}finally{v=j}},e.unstable_scheduleCallback=function(A,B,j){var U=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?U+j:U):j=U,A){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=j+K,A={id:m++,callback:B,priorityLevel:A,startTime:j,expirationTime:K,sortIndex:-1},j>U?(A.sortIndex=j,t(d,A),n(u)===null&&A===n(d)&&(E?(g(k),k=-1):E=!0,Ve(y,j-U))):(A.sortIndex=K,t(u,A),T||x||(T=!0,be(w))),A},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(A){var B=v;return function(){var j=v;v=B;try{return A.apply(this,arguments)}finally{v=j}}}})(bf);(function(e){e.exports=bf})(fv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf=$,yt=hs;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ff=new Set,Xo={};function dr(e,t){Zr(e,t),Zr(e+"Capture",t)}function Zr(e,t){for(Xo[e]=t,e=0;e<t.length;e++)Ff.add(t[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fs=Object.prototype.hasOwnProperty,mv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rd={},od={};function pv(e){return fs.call(od,e)?!0:fs.call(rd,e)?!1:mv.test(e)?od[e]=!0:(rd[e]=!0,!1)}function gv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vv(e,t,n,r){if(t===null||typeof t>"u"||gv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function rt(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];We[t]=new rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Eu=/[\-:]([a-z])/g;function Cu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Eu,Cu);We[t]=new rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Eu,Cu);We[t]=new rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Eu,Cu);We[t]=new rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new rt(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ku(e,t,n,r){var l=We.hasOwnProperty(t)?We[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vv(t,n,l,r)&&(n=null),r||l===null?pv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mn=wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dl=Symbol.for("react.element"),kr=Symbol.for("react.portal"),Tr=Symbol.for("react.fragment"),Tu=Symbol.for("react.strict_mode"),ms=Symbol.for("react.profiler"),Sf=Symbol.for("react.provider"),xf=Symbol.for("react.context"),Ru=Symbol.for("react.forward_ref"),ps=Symbol.for("react.suspense"),gs=Symbol.for("react.suspense_list"),Nu=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),Ef=Symbol.for("react.offscreen"),ld=Symbol.iterator;function So(e){return e===null||typeof e!="object"?null:(e=ld&&e[ld]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Oa;function Po(e){if(Oa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oa=t&&t[1]||""}return`
`+Oa+e}var Aa=!1;function Pa(e,t){if(!e||Aa)return"";Aa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,s=i.length-1;1<=a&&0<=s&&l[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==i[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Aa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Po(e):""}function yv(e){switch(e.tag){case 5:return Po(e.type);case 16:return Po("Lazy");case 13:return Po("Suspense");case 19:return Po("SuspenseList");case 0:case 2:case 15:return e=Pa(e.type,!1),e;case 11:return e=Pa(e.type.render,!1),e;case 1:return e=Pa(e.type,!0),e;default:return""}}function vs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tr:return"Fragment";case kr:return"Portal";case ms:return"Profiler";case Tu:return"StrictMode";case ps:return"Suspense";case gs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xf:return(e.displayName||"Context")+".Consumer";case Sf:return(e._context.displayName||"Context")+".Provider";case Ru:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nu:return t=e.displayName||null,t!==null?t:vs(e.type)||"Memo";case Fn:t=e._payload,e=e._init;try{return vs(e(t))}catch{}}return null}function bv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vs(t);case 8:return t===Tu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function In(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wv(e){var t=Cf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Il(e){e._valueTracker||(e._valueTracker=wv(e))}function kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ys(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function id(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=In(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tf(e,t){t=t.checked,t!=null&&ku(e,"checked",t,!1)}function bs(e,t){Tf(e,t);var n=In(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ws(e,t.type,n):t.hasOwnProperty("defaultValue")&&ws(e,t.type,In(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ad(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ws(e,t,n){(t!=="number"||gi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Do=Array.isArray;function qr(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+In(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Fs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Do(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:In(n)}}function Rf(e,t){var n=In(t.value),r=In(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ud(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ss(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _l,Lf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_l=_l||document.createElement("div"),_l.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_l.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fv=["Webkit","ms","Moz","O"];Object.keys(Bo).forEach(function(e){Fv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bo[t]=Bo[e]})});function $f(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bo.hasOwnProperty(e)&&Bo[e]?(""+t).trim():t+"px"}function Of(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=$f(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Sv=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xs(e,t){if(t){if(Sv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Es(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cs=null;function Lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ks=null,Ur=null,Hr=null;function cd(e){if(e=wl(e)){if(typeof ks!="function")throw Error(D(280));var t=e.stateNode;t&&(t=ea(t),ks(e.stateNode,e.type,t))}}function Af(e){Ur?Hr?Hr.push(e):Hr=[e]:Ur=e}function Pf(){if(Ur){var e=Ur,t=Hr;if(Hr=Ur=null,cd(e),t)for(e=0;e<t.length;e++)cd(t[e])}}function Df(e,t){return e(t)}function If(){}var Da=!1;function _f(e,t,n){if(Da)return e(t,n);Da=!0;try{return Df(e,t,n)}finally{Da=!1,(Ur!==null||Hr!==null)&&(If(),Pf())}}function Jo(e,t){var n=e.stateNode;if(n===null)return null;var r=ea(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Ts=!1;if(sn)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Ts=!1}function xv(e,t,n,r,l,i,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var Vo=!1,vi=null,yi=!1,Rs=null,Ev={onError:function(e){Vo=!0,vi=e}};function Cv(e,t,n,r,l,i,a,s,u){Vo=!1,vi=null,xv.apply(Ev,arguments)}function kv(e,t,n,r,l,i,a,s,u){if(Cv.apply(this,arguments),Vo){if(Vo){var d=vi;Vo=!1,vi=null}else throw Error(D(198));yi||(yi=!0,Rs=d)}}function hr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dd(e){if(hr(e)!==e)throw Error(D(188))}function Tv(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return dd(l),e;if(i===r)return dd(l),t;i=i.sibling}throw Error(D(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=i;break}if(s===r){a=!0,r=l,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=l;break}if(s===r){a=!0,r=i,n=l;break}s=s.sibling}if(!a)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Mf(e){return e=Tv(e),e!==null?Bf(e):null}function Bf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bf(e);if(t!==null)return t;e=e.sibling}return null}var Vf=yt.unstable_scheduleCallback,hd=yt.unstable_cancelCallback,Rv=yt.unstable_shouldYield,Nv=yt.unstable_requestPaint,Re=yt.unstable_now,Lv=yt.unstable_getCurrentPriorityLevel,$u=yt.unstable_ImmediatePriority,zf=yt.unstable_UserBlockingPriority,bi=yt.unstable_NormalPriority,$v=yt.unstable_LowPriority,qf=yt.unstable_IdlePriority,Qi=null,Kt=null;function Ov(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Qi,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:Dv,Av=Math.log,Pv=Math.LN2;function Dv(e){return e>>>=0,e===0?32:31-(Av(e)/Pv|0)|0}var jl=64,Ml=4194304;function Io(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=Io(s):(i&=a,i!==0&&(r=Io(i)))}else a=n&~l,a!==0?r=Io(a):i!==0&&(r=Io(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Bt(t),l=1<<n,r|=e[n],t&=~l;return r}function Iv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _v(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Bt(i),s=1<<a,u=l[a];u===-1?(!(s&n)||s&r)&&(l[a]=Iv(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Ns(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uf(){var e=jl;return jl<<=1,!(jl&4194240)&&(jl=64),e}function Ia(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bt(t),e[t]=n}function jv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Bt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Ou(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Bt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var ue=0;function Hf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wf,Au,Yf,Gf,Kf,Ls=!1,Bl=[],Rn=null,Nn=null,Ln=null,el=new Map,tl=new Map,xn=[],Mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":el.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(t.pointerId)}}function Eo(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=wl(t),t!==null&&Au(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Bv(e,t,n,r,l){switch(t){case"focusin":return Rn=Eo(Rn,e,t,n,r,l),!0;case"dragenter":return Nn=Eo(Nn,e,t,n,r,l),!0;case"mouseover":return Ln=Eo(Ln,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return el.set(i,Eo(el.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,tl.set(i,Eo(tl.get(i)||null,e,t,n,r,l)),!0}return!1}function Qf(e){var t=er(e.target);if(t!==null){var n=hr(t);if(n!==null){if(t=n.tag,t===13){if(t=jf(n),t!==null){e.blockedOn=t,Kf(e.priority,function(){Yf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$s(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cs=r,n.target.dispatchEvent(r),Cs=null}else return t=wl(n),t!==null&&Au(t),e.blockedOn=n,!1;t.shift()}return!0}function md(e,t,n){ri(e)&&n.delete(t)}function Vv(){Ls=!1,Rn!==null&&ri(Rn)&&(Rn=null),Nn!==null&&ri(Nn)&&(Nn=null),Ln!==null&&ri(Ln)&&(Ln=null),el.forEach(md),tl.forEach(md)}function Co(e,t){e.blockedOn===t&&(e.blockedOn=null,Ls||(Ls=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,Vv)))}function nl(e){function t(l){return Co(l,e)}if(0<Bl.length){Co(Bl[0],e);for(var n=1;n<Bl.length;n++){var r=Bl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&Co(Rn,e),Nn!==null&&Co(Nn,e),Ln!==null&&Co(Ln,e),el.forEach(t),tl.forEach(t),n=0;n<xn.length;n++)r=xn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xn.length&&(n=xn[0],n.blockedOn===null);)Qf(n),n.blockedOn===null&&xn.shift()}var Wr=mn.ReactCurrentBatchConfig,Fi=!0;function zv(e,t,n,r){var l=ue,i=Wr.transition;Wr.transition=null;try{ue=1,Pu(e,t,n,r)}finally{ue=l,Wr.transition=i}}function qv(e,t,n,r){var l=ue,i=Wr.transition;Wr.transition=null;try{ue=4,Pu(e,t,n,r)}finally{ue=l,Wr.transition=i}}function Pu(e,t,n,r){if(Fi){var l=$s(e,t,n,r);if(l===null)Wa(e,t,r,Si,n),fd(e,r);else if(Bv(l,e,t,n,r))r.stopPropagation();else if(fd(e,r),t&4&&-1<Mv.indexOf(e)){for(;l!==null;){var i=wl(l);if(i!==null&&Wf(i),i=$s(e,t,n,r),i===null&&Wa(e,t,r,Si,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Wa(e,t,r,null,n)}}var Si=null;function $s(e,t,n,r){if(Si=null,e=Lu(r),e=er(e),e!==null)if(t=hr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Si=e,null}function Xf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lv()){case $u:return 1;case zf:return 4;case bi:case $v:return 16;case qf:return 536870912;default:return 16}default:return 16}}var Cn=null,Du=null,oi=null;function Zf(){if(oi)return oi;var e,t=Du,n=t.length,r,l="value"in Cn?Cn.value:Cn.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return oi=l.slice(e,1<r?1-r:void 0)}function li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vl(){return!0}function pd(){return!1}function wt(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vl:pd,this.isPropagationStopped=pd,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),t}var so={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Iu=wt(so),bl=xe({},so,{view:0,detail:0}),Uv=wt(bl),_a,ja,ko,Xi=xe({},bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ko&&(ko&&e.type==="mousemove"?(_a=e.screenX-ko.screenX,ja=e.screenY-ko.screenY):ja=_a=0,ko=e),_a)},movementY:function(e){return"movementY"in e?e.movementY:ja}}),gd=wt(Xi),Hv=xe({},Xi,{dataTransfer:0}),Wv=wt(Hv),Yv=xe({},bl,{relatedTarget:0}),Ma=wt(Yv),Gv=xe({},so,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=wt(Gv),Qv=xe({},so,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xv=wt(Qv),Zv=xe({},so,{data:0}),vd=wt(Zv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ny(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ty[e])?!!t[e]:!1}function _u(){return ny}var ry=xe({},bl,{key:function(e){if(e.key){var t=Jv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ey[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oy=wt(ry),ly=xe({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=wt(ly),iy=xe({},bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),ay=wt(iy),sy=xe({},so,{propertyName:0,elapsedTime:0,pseudoElement:0}),uy=wt(sy),cy=xe({},Xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=wt(cy),hy=[9,13,27,32],ju=sn&&"CompositionEvent"in window,zo=null;sn&&"documentMode"in document&&(zo=document.documentMode);var fy=sn&&"TextEvent"in window&&!zo,Jf=sn&&(!ju||zo&&8<zo&&11>=zo),bd=String.fromCharCode(32),wd=!1;function em(e,t){switch(e){case"keyup":return hy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rr=!1;function my(e,t){switch(e){case"compositionend":return tm(t);case"keypress":return t.which!==32?null:(wd=!0,bd);case"textInput":return e=t.data,e===bd&&wd?null:e;default:return null}}function py(e,t){if(Rr)return e==="compositionend"||!ju&&em(e,t)?(e=Zf(),oi=Du=Cn=null,Rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jf&&t.locale!=="ko"?null:t.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gy[e.type]:t==="textarea"}function nm(e,t,n,r){Af(r),t=xi(t,"onChange"),0<t.length&&(n=new Iu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qo=null,rl=null;function vy(e){fm(e,0)}function Zi(e){var t=$r(e);if(kf(t))return e}function yy(e,t){if(e==="change")return t}var rm=!1;if(sn){var Ba;if(sn){var Va="oninput"in document;if(!Va){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),Va=typeof Sd.oninput=="function"}Ba=Va}else Ba=!1;rm=Ba&&(!document.documentMode||9<document.documentMode)}function xd(){qo&&(qo.detachEvent("onpropertychange",om),rl=qo=null)}function om(e){if(e.propertyName==="value"&&Zi(rl)){var t=[];nm(t,rl,e,Lu(e)),_f(vy,t)}}function by(e,t,n){e==="focusin"?(xd(),qo=t,rl=n,qo.attachEvent("onpropertychange",om)):e==="focusout"&&xd()}function wy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zi(rl)}function Fy(e,t){if(e==="click")return Zi(t)}function Sy(e,t){if(e==="input"||e==="change")return Zi(t)}function xy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:xy;function ol(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!fs.call(t,l)||!zt(e[l],t[l]))return!1}return!0}function Ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cd(e,t){var n=Ed(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ed(n)}}function lm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function im(){for(var e=window,t=gi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gi(e.document)}return t}function Mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ey(e){var t=im(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lm(n.ownerDocument.documentElement,n)){if(r!==null&&Mu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Cd(n,i);var a=Cd(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cy=sn&&"documentMode"in document&&11>=document.documentMode,Nr=null,Os=null,Uo=null,As=!1;function kd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;As||Nr==null||Nr!==gi(r)||(r=Nr,"selectionStart"in r&&Mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Uo&&ol(Uo,r)||(Uo=r,r=xi(Os,"onSelect"),0<r.length&&(t=new Iu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function zl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lr={animationend:zl("Animation","AnimationEnd"),animationiteration:zl("Animation","AnimationIteration"),animationstart:zl("Animation","AnimationStart"),transitionend:zl("Transition","TransitionEnd")},za={},am={};sn&&(am=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Ji(e){if(za[e])return za[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in am)return za[e]=t[n];return e}var sm=Ji("animationend"),um=Ji("animationiteration"),cm=Ji("animationstart"),dm=Ji("transitionend"),hm=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,t){hm.set(e,t),dr(t,[e])}for(var qa=0;qa<Td.length;qa++){var Ua=Td[qa],ky=Ua.toLowerCase(),Ty=Ua[0].toUpperCase()+Ua.slice(1);Vn(ky,"on"+Ty)}Vn(sm,"onAnimationEnd");Vn(um,"onAnimationIteration");Vn(cm,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(dm,"onTransitionEnd");Zr("onMouseEnter",["mouseout","mouseover"]);Zr("onMouseLeave",["mouseout","mouseover"]);Zr("onPointerEnter",["pointerout","pointerover"]);Zr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ry=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function Rd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,kv(r,t,void 0,e),e.currentTarget=null}function fm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;Rd(l,s,d),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;Rd(l,s,d),i=u}}}if(yi)throw e=Rs,yi=!1,Rs=null,e}function ge(e,t){var n=t[js];n===void 0&&(n=t[js]=new Set);var r=e+"__bubble";n.has(r)||(mm(t,e,2,!1),n.add(r))}function Ha(e,t,n){var r=0;t&&(r|=4),mm(n,e,r,t)}var ql="_reactListening"+Math.random().toString(36).slice(2);function ll(e){if(!e[ql]){e[ql]=!0,Ff.forEach(function(n){n!=="selectionchange"&&(Ry.has(n)||Ha(n,!1,e),Ha(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ql]||(t[ql]=!0,Ha("selectionchange",!1,t))}}function mm(e,t,n,r){switch(Xf(t)){case 1:var l=zv;break;case 4:l=qv;break;default:l=Pu}n=l.bind(null,t,n,e),l=void 0,!Ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Wa(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=er(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}_f(function(){var d=i,m=Lu(n),p=[];e:{var v=hm.get(e);if(v!==void 0){var x=Iu,T=e;switch(e){case"keypress":if(li(n)===0)break e;case"keydown":case"keyup":x=oy;break;case"focusin":T="focus",x=Ma;break;case"focusout":T="blur",x=Ma;break;case"beforeblur":case"afterblur":x=Ma;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=ay;break;case sm:case um:case cm:x=Kv;break;case dm:x=uy;break;case"scroll":x=Uv;break;case"wheel":x=dy;break;case"copy":case"cut":case"paste":x=Xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=yd}var E=(t&4)!==0,b=!E&&e==="scroll",g=E?v!==null?v+"Capture":null:v;E=[];for(var h=d,f;h!==null;){f=h;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,g!==null&&(y=Jo(h,g),y!=null&&E.push(il(h,y,f)))),b)break;h=h.return}0<E.length&&(v=new x(v,T,null,n,m),p.push({event:v,listeners:E}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&n!==Cs&&(T=n.relatedTarget||n.fromElement)&&(er(T)||T[un]))break e;if((x||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,x?(T=n.relatedTarget||n.toElement,x=d,T=T?er(T):null,T!==null&&(b=hr(T),T!==b||T.tag!==5&&T.tag!==6)&&(T=null)):(x=null,T=d),x!==T)){if(E=gd,y="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(E=yd,y="onPointerLeave",g="onPointerEnter",h="pointer"),b=x==null?v:$r(x),f=T==null?v:$r(T),v=new E(y,h+"leave",x,n,m),v.target=b,v.relatedTarget=f,y=null,er(m)===d&&(E=new E(g,h+"enter",T,n,m),E.target=f,E.relatedTarget=b,y=E),b=y,x&&T)t:{for(E=x,g=T,h=0,f=E;f;f=wr(f))h++;for(f=0,y=g;y;y=wr(y))f++;for(;0<h-f;)E=wr(E),h--;for(;0<f-h;)g=wr(g),f--;for(;h--;){if(E===g||g!==null&&E===g.alternate)break t;E=wr(E),g=wr(g)}E=null}else E=null;x!==null&&Nd(p,v,x,E,!1),T!==null&&b!==null&&Nd(p,b,T,E,!0)}}e:{if(v=d?$r(d):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var w=yy;else if(Fd(v))if(rm)w=Sy;else{w=wy;var F=by}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(w=Fy);if(w&&(w=w(e,d))){nm(p,w,n,m);break e}F&&F(e,v,d),e==="focusout"&&(F=v._wrapperState)&&F.controlled&&v.type==="number"&&ws(v,"number",v.value)}switch(F=d?$r(d):window,e){case"focusin":(Fd(F)||F.contentEditable==="true")&&(Nr=F,Os=d,Uo=null);break;case"focusout":Uo=Os=Nr=null;break;case"mousedown":As=!0;break;case"contextmenu":case"mouseup":case"dragend":As=!1,kd(p,n,m);break;case"selectionchange":if(Cy)break;case"keydown":case"keyup":kd(p,n,m)}var C;if(ju)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Rr?em(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Jf&&n.locale!=="ko"&&(Rr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Rr&&(C=Zf()):(Cn=m,Du="value"in Cn?Cn.value:Cn.textContent,Rr=!0)),F=xi(d,k),0<F.length&&(k=new vd(k,e,null,n,m),p.push({event:k,listeners:F}),C?k.data=C:(C=tm(n),C!==null&&(k.data=C)))),(C=fy?my(e,n):py(e,n))&&(d=xi(d,"onBeforeInput"),0<d.length&&(m=new vd("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:d}),m.data=C))}fm(p,t)})}function il(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Jo(e,n),i!=null&&r.unshift(il(e,i,l)),i=Jo(e,t),i!=null&&r.push(il(e,i,l))),e=e.return}return r}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nd(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Jo(n,i),u!=null&&a.unshift(il(n,u,s))):l||(u=Jo(n,i),u!=null&&a.push(il(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ny=/\r\n?/g,Ly=/\u0000|\uFFFD/g;function Ld(e){return(typeof e=="string"?e:""+e).replace(Ny,`
`).replace(Ly,"")}function Ul(e,t,n){if(t=Ld(t),Ld(e)!==t&&n)throw Error(D(425))}function Ei(){}var Ps=null,Ds=null;function Is(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _s=typeof setTimeout=="function"?setTimeout:void 0,$y=typeof clearTimeout=="function"?clearTimeout:void 0,$d=typeof Promise=="function"?Promise:void 0,Oy=typeof queueMicrotask=="function"?queueMicrotask:typeof $d<"u"?function(e){return $d.resolve(null).then(e).catch(Ay)}:_s;function Ay(e){setTimeout(function(){throw e})}function Ya(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),nl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);nl(t)}function $n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var uo=Math.random().toString(36).slice(2),Gt="__reactFiber$"+uo,al="__reactProps$"+uo,un="__reactContainer$"+uo,js="__reactEvents$"+uo,Py="__reactListeners$"+uo,Dy="__reactHandles$"+uo;function er(e){var t=e[Gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[un]||n[Gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Od(e);e!==null;){if(n=e[Gt])return n;e=Od(e)}return t}e=n,n=e.parentNode}return null}function wl(e){return e=e[Gt]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function ea(e){return e[al]||null}var Ms=[],Or=-1;function zn(e){return{current:e}}function ve(e){0>Or||(e.current=Ms[Or],Ms[Or]=null,Or--)}function de(e,t){Or++,Ms[Or]=e.current,e.current=t}var _n={},Xe=zn(_n),st=zn(!1),ir=_n;function Jr(e,t){var n=e.type.contextTypes;if(!n)return _n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ut(e){return e=e.childContextTypes,e!=null}function Ci(){ve(st),ve(Xe)}function Ad(e,t,n){if(Xe.current!==_n)throw Error(D(168));de(Xe,t),de(st,n)}function pm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(D(108,bv(e)||"Unknown",l));return xe({},n,r)}function ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_n,ir=Xe.current,de(Xe,e),de(st,st.current),!0}function Pd(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=pm(e,t,ir),r.__reactInternalMemoizedMergedChildContext=e,ve(st),ve(Xe),de(Xe,e)):ve(st),de(st,n)}var nn=null,ta=!1,Ga=!1;function gm(e){nn===null?nn=[e]:nn.push(e)}function Iy(e){ta=!0,gm(e)}function qn(){if(!Ga&&nn!==null){Ga=!0;var e=0,t=ue;try{var n=nn;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nn=null,ta=!1}catch(l){throw nn!==null&&(nn=nn.slice(e+1)),Vf($u,qn),l}finally{ue=t,Ga=!1}}return null}var Ar=[],Pr=0,Ti=null,Ri=0,St=[],xt=0,ar=null,rn=1,on="";function Zn(e,t){Ar[Pr++]=Ri,Ar[Pr++]=Ti,Ti=e,Ri=t}function vm(e,t,n){St[xt++]=rn,St[xt++]=on,St[xt++]=ar,ar=e;var r=rn;e=on;var l=32-Bt(r)-1;r&=~(1<<l),n+=1;var i=32-Bt(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,rn=1<<32-Bt(t)+l|n<<l|r,on=i+e}else rn=1<<i|n<<l|r,on=e}function Bu(e){e.return!==null&&(Zn(e,1),vm(e,1,0))}function Vu(e){for(;e===Ti;)Ti=Ar[--Pr],Ar[Pr]=null,Ri=Ar[--Pr],Ar[Pr]=null;for(;e===ar;)ar=St[--xt],St[xt]=null,on=St[--xt],St[xt]=null,rn=St[--xt],St[xt]=null}var gt=null,pt=null,we=!1,jt=null;function ym(e,t){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Dd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gt=e,pt=$n(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gt=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ar!==null?{id:rn,overflow:on}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,gt=e,pt=null,!0):!1;default:return!1}}function Bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vs(e){if(we){var t=pt;if(t){var n=t;if(!Dd(e,t)){if(Bs(e))throw Error(D(418));t=$n(n.nextSibling);var r=gt;t&&Dd(e,t)?ym(r,n):(e.flags=e.flags&-4097|2,we=!1,gt=e)}}else{if(Bs(e))throw Error(D(418));e.flags=e.flags&-4097|2,we=!1,gt=e}}}function Id(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function Hl(e){if(e!==gt)return!1;if(!we)return Id(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Is(e.type,e.memoizedProps)),t&&(t=pt)){if(Bs(e))throw bm(),Error(D(418));for(;t;)ym(e,t),t=$n(t.nextSibling)}if(Id(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=$n(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=gt?$n(e.stateNode.nextSibling):null;return!0}function bm(){for(var e=pt;e;)e=$n(e.nextSibling)}function eo(){pt=gt=null,we=!1}function zu(e){jt===null?jt=[e]:jt.push(e)}var _y=mn.ReactCurrentBatchConfig;function It(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ni=zn(null),Li=null,Dr=null,qu=null;function Uu(){qu=Dr=Li=null}function Hu(e){var t=Ni.current;ve(Ni),e._currentValue=t}function zs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yr(e,t){Li=e,qu=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(qu!==e)if(e={context:e,memoizedValue:t,next:null},Dr===null){if(Li===null)throw Error(D(308));Dr=e,Li.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return t}var tr=null;function Wu(e){tr===null?tr=[e]:tr.push(e)}function wm(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Wu(t)):(n.next=l.next,l.next=n),t.interleaved=n,cn(e,r)}function cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Sn=!1;function Yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function On(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,cn(e,n)}return l=r.interleaved,l===null?(t.next=t,Wu(r)):(t.next=l.next,l.next=t),r.interleaved=t,cn(e,n)}function ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ou(e,n)}}function _d(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $i(e,t,n,r){var l=e.updateQueue;Sn=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?i=d:a.next=d,a=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==a&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=u))}if(i!==null){var p=l.baseState;a=0,m=d=u=null,s=i;do{var v=s.lane,x=s.eventTime;if((r&v)===v){m!==null&&(m=m.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var T=e,E=s;switch(v=t,x=n,E.tag){case 1:if(T=E.payload,typeof T=="function"){p=T.call(x,p,v);break e}p=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=E.payload,v=typeof T=="function"?T.call(x,p,v):T,v==null)break e;p=xe({},p,v);break e;case 2:Sn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=l.effects,v===null?l.effects=[s]:v.push(s))}else x={eventTime:x,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=x,u=p):m=m.next=x,a|=v;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;v=s,s=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(1);if(m===null&&(u=p),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);ur|=a,e.lanes=a,e.memoizedState=p}}function jd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(D(191,l));l.call(r)}}}var Sm=new wf.Component().refs;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var na={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tt(),l=Pn(e),i=ln(r,l);i.payload=t,n!=null&&(i.callback=n),t=On(e,i,l),t!==null&&(Vt(t,e,l,r),ii(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tt(),l=Pn(e),i=ln(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=On(e,i,l),t!==null&&(Vt(t,e,l,r),ii(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tt(),r=Pn(e),l=ln(n,r);l.tag=2,t!=null&&(l.callback=t),t=On(e,l,r),t!==null&&(Vt(t,e,r,n),ii(t,e,r))}};function Md(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ol(n,r)||!ol(l,i):!0}function xm(e,t,n){var r=!1,l=_n,i=t.contextType;return typeof i=="object"&&i!==null?i=kt(i):(l=ut(t)?ir:Xe.current,r=t.contextTypes,i=(r=r!=null)?Jr(e,l):_n),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=na,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Bd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&na.enqueueReplaceState(t,t.state,null)}function Us(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=Sm,Yu(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=kt(i):(i=ut(t)?ir:Xe.current,l.context=Jr(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(qs(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&na.enqueueReplaceState(l,l.state,null),$i(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function To(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=l.refs;s===Sm&&(s=l.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Wl(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vd(e){var t=e._init;return t(e._payload)}function Em(e){function t(g,h){if(e){var f=g.deletions;f===null?(g.deletions=[h],g.flags|=16):f.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function l(g,h){return g=Dn(g,h),g.index=0,g.sibling=null,g}function i(g,h,f){return g.index=f,e?(f=g.alternate,f!==null?(f=f.index,f<h?(g.flags|=2,h):f):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,f,y){return h===null||h.tag!==6?(h=ts(f,g.mode,y),h.return=g,h):(h=l(h,f),h.return=g,h)}function u(g,h,f,y){var w=f.type;return w===Tr?m(g,h,f.props.children,y,f.key):h!==null&&(h.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Fn&&Vd(w)===h.type)?(y=l(h,f.props),y.ref=To(g,h,f),y.return=g,y):(y=hi(f.type,f.key,f.props,null,g.mode,y),y.ref=To(g,h,f),y.return=g,y)}function d(g,h,f,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==f.containerInfo||h.stateNode.implementation!==f.implementation?(h=ns(f,g.mode,y),h.return=g,h):(h=l(h,f.children||[]),h.return=g,h)}function m(g,h,f,y,w){return h===null||h.tag!==7?(h=lr(f,g.mode,y,w),h.return=g,h):(h=l(h,f),h.return=g,h)}function p(g,h,f){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ts(""+h,g.mode,f),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Dl:return f=hi(h.type,h.key,h.props,null,g.mode,f),f.ref=To(g,null,h),f.return=g,f;case kr:return h=ns(h,g.mode,f),h.return=g,h;case Fn:var y=h._init;return p(g,y(h._payload),f)}if(Do(h)||So(h))return h=lr(h,g.mode,f,null),h.return=g,h;Wl(g,h)}return null}function v(g,h,f,y){var w=h!==null?h.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return w!==null?null:s(g,h,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Dl:return f.key===w?u(g,h,f,y):null;case kr:return f.key===w?d(g,h,f,y):null;case Fn:return w=f._init,v(g,h,w(f._payload),y)}if(Do(f)||So(f))return w!==null?null:m(g,h,f,y,null);Wl(g,f)}return null}function x(g,h,f,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(f)||null,s(h,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Dl:return g=g.get(y.key===null?f:y.key)||null,u(h,g,y,w);case kr:return g=g.get(y.key===null?f:y.key)||null,d(h,g,y,w);case Fn:var F=y._init;return x(g,h,f,F(y._payload),w)}if(Do(y)||So(y))return g=g.get(f)||null,m(h,g,y,w,null);Wl(h,y)}return null}function T(g,h,f,y){for(var w=null,F=null,C=h,k=h=0,L=null;C!==null&&k<f.length;k++){C.index>k?(L=C,C=null):L=C.sibling;var O=v(g,C,f[k],y);if(O===null){C===null&&(C=L);break}e&&C&&O.alternate===null&&t(g,C),h=i(O,h,k),F===null?w=O:F.sibling=O,F=O,C=L}if(k===f.length)return n(g,C),we&&Zn(g,k),w;if(C===null){for(;k<f.length;k++)C=p(g,f[k],y),C!==null&&(h=i(C,h,k),F===null?w=C:F.sibling=C,F=C);return we&&Zn(g,k),w}for(C=r(g,C);k<f.length;k++)L=x(C,g,k,f[k],y),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?k:L.key),h=i(L,h,k),F===null?w=L:F.sibling=L,F=L);return e&&C.forEach(function(H){return t(g,H)}),we&&Zn(g,k),w}function E(g,h,f,y){var w=So(f);if(typeof w!="function")throw Error(D(150));if(f=w.call(f),f==null)throw Error(D(151));for(var F=w=null,C=h,k=h=0,L=null,O=f.next();C!==null&&!O.done;k++,O=f.next()){C.index>k?(L=C,C=null):L=C.sibling;var H=v(g,C,O.value,y);if(H===null){C===null&&(C=L);break}e&&C&&H.alternate===null&&t(g,C),h=i(H,h,k),F===null?w=H:F.sibling=H,F=H,C=L}if(O.done)return n(g,C),we&&Zn(g,k),w;if(C===null){for(;!O.done;k++,O=f.next())O=p(g,O.value,y),O!==null&&(h=i(O,h,k),F===null?w=O:F.sibling=O,F=O);return we&&Zn(g,k),w}for(C=r(g,C);!O.done;k++,O=f.next())O=x(C,g,k,O.value,y),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?k:O.key),h=i(O,h,k),F===null?w=O:F.sibling=O,F=O);return e&&C.forEach(function(te){return t(g,te)}),we&&Zn(g,k),w}function b(g,h,f,y){if(typeof f=="object"&&f!==null&&f.type===Tr&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Dl:e:{for(var w=f.key,F=h;F!==null;){if(F.key===w){if(w=f.type,w===Tr){if(F.tag===7){n(g,F.sibling),h=l(F,f.props.children),h.return=g,g=h;break e}}else if(F.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Fn&&Vd(w)===F.type){n(g,F.sibling),h=l(F,f.props),h.ref=To(g,F,f),h.return=g,g=h;break e}n(g,F);break}else t(g,F);F=F.sibling}f.type===Tr?(h=lr(f.props.children,g.mode,y,f.key),h.return=g,g=h):(y=hi(f.type,f.key,f.props,null,g.mode,y),y.ref=To(g,h,f),y.return=g,g=y)}return a(g);case kr:e:{for(F=f.key;h!==null;){if(h.key===F)if(h.tag===4&&h.stateNode.containerInfo===f.containerInfo&&h.stateNode.implementation===f.implementation){n(g,h.sibling),h=l(h,f.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=ns(f,g.mode,y),h.return=g,g=h}return a(g);case Fn:return F=f._init,b(g,h,F(f._payload),y)}if(Do(f))return T(g,h,f,y);if(So(f))return E(g,h,f,y);Wl(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,h!==null&&h.tag===6?(n(g,h.sibling),h=l(h,f),h.return=g,g=h):(n(g,h),h=ts(f,g.mode,y),h.return=g,g=h),a(g)):n(g,h)}return b}var to=Em(!0),Cm=Em(!1),Fl={},Qt=zn(Fl),sl=zn(Fl),ul=zn(Fl);function nr(e){if(e===Fl)throw Error(D(174));return e}function Gu(e,t){switch(de(ul,t),de(sl,e),de(Qt,Fl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ss(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ss(t,e)}ve(Qt),de(Qt,t)}function no(){ve(Qt),ve(sl),ve(ul)}function km(e){nr(ul.current);var t=nr(Qt.current),n=Ss(t,e.type);t!==n&&(de(sl,e),de(Qt,n))}function Ku(e){sl.current===e&&(ve(Qt),ve(sl))}var Fe=zn(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ka=[];function Qu(){for(var e=0;e<Ka.length;e++)Ka[e]._workInProgressVersionPrimary=null;Ka.length=0}var ai=mn.ReactCurrentDispatcher,Qa=mn.ReactCurrentBatchConfig,sr=0,Se=null,Pe=null,je=null,Ai=!1,Ho=!1,cl=0,jy=0;function Ge(){throw Error(D(321))}function Xu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Zu(e,t,n,r,l,i){if(sr=i,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=e===null||e.memoizedState===null?zy:qy,e=n(r,l),Ho){i=0;do{if(Ho=!1,cl=0,25<=i)throw Error(D(301));i+=1,je=Pe=null,t.updateQueue=null,ai.current=Uy,e=n(r,l)}while(Ho)}if(ai.current=Pi,t=Pe!==null&&Pe.next!==null,sr=0,je=Pe=Se=null,Ai=!1,t)throw Error(D(300));return e}function Ju(){var e=cl!==0;return cl=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Se.memoizedState=je=e:je=je.next=e,je}function Tt(){if(Pe===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=je===null?Se.memoizedState:je.next;if(t!==null)je=t,Pe=e;else{if(e===null)throw Error(D(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},je===null?Se.memoizedState=je=e:je=je.next=e}return je}function dl(e,t){return typeof t=="function"?t(e):t}function Xa(e){var t=Tt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=Pe,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=a=null,u=null,d=i;do{var m=d.lane;if((sr&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=p,a=r):u=u.next=p,Se.lanes|=m,ur|=m}d=d.next}while(d!==null&&d!==i);u===null?a=r:u.next=s,zt(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,Se.lanes|=i,ur|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Za(e){var t=Tt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);zt(i,t.memoizedState)||(at=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Tm(){}function Rm(e,t){var n=Se,r=Tt(),l=t(),i=!zt(r.memoizedState,l);if(i&&(r.memoizedState=l,at=!0),r=r.queue,ec($m.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,hl(9,Lm.bind(null,n,r,l,t),void 0,null),Me===null)throw Error(D(349));sr&30||Nm(n,t,l)}return l}function Nm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lm(e,t,n,r){t.value=n,t.getSnapshot=r,Om(t)&&Am(e)}function $m(e,t,n){return n(function(){Om(t)&&Am(e)})}function Om(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function Am(e){var t=cn(e,1);t!==null&&Vt(t,e,1,-1)}function zd(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:e},t.queue=e,e=e.dispatch=Vy.bind(null,Se,e),[t.memoizedState,e]}function hl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pm(){return Tt().memoizedState}function si(e,t,n,r){var l=Ht();Se.flags|=e,l.memoizedState=hl(1|t,n,void 0,r===void 0?null:r)}function ra(e,t,n,r){var l=Tt();r=r===void 0?null:r;var i=void 0;if(Pe!==null){var a=Pe.memoizedState;if(i=a.destroy,r!==null&&Xu(r,a.deps)){l.memoizedState=hl(t,n,i,r);return}}Se.flags|=e,l.memoizedState=hl(1|t,n,i,r)}function qd(e,t){return si(8390656,8,e,t)}function ec(e,t){return ra(2048,8,e,t)}function Dm(e,t){return ra(4,2,e,t)}function Im(e,t){return ra(4,4,e,t)}function _m(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jm(e,t,n){return n=n!=null?n.concat([e]):null,ra(4,4,_m.bind(null,t,e),n)}function tc(){}function Mm(e,t){var n=Tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bm(e,t){var n=Tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vm(e,t,n){return sr&21?(zt(n,t)||(n=Uf(),Se.lanes|=n,ur|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function My(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=Qa.transition;Qa.transition={};try{e(!1),t()}finally{ue=n,Qa.transition=r}}function zm(){return Tt().memoizedState}function By(e,t,n){var r=Pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qm(e))Um(t,n);else if(n=wm(e,t,n,r),n!==null){var l=tt();Vt(n,e,r,l),Hm(n,t,r)}}function Vy(e,t,n){var r=Pn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qm(e))Um(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(l.hasEagerState=!0,l.eagerState=s,zt(s,a)){var u=t.interleaved;u===null?(l.next=l,Wu(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=wm(e,t,l,r),n!==null&&(l=tt(),Vt(n,e,r,l),Hm(n,t,r))}}function qm(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Um(e,t){Ho=Ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ou(e,n)}}var Pi={readContext:kt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},zy={readContext:kt,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:qd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,si(4194308,4,_m.bind(null,t,e),n)},useLayoutEffect:function(e,t){return si(4194308,4,e,t)},useInsertionEffect:function(e,t){return si(4,2,e,t)},useMemo:function(e,t){var n=Ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=By.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:zd,useDebugValue:tc,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=zd(!1),t=e[0];return e=My.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Se,l=Ht();if(we){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Me===null)throw Error(D(349));sr&30||Nm(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,qd($m.bind(null,r,i,e),[e]),r.flags|=2048,hl(9,Lm.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ht(),t=Me.identifierPrefix;if(we){var n=on,r=rn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qy={readContext:kt,useCallback:Mm,useContext:kt,useEffect:ec,useImperativeHandle:jm,useInsertionEffect:Dm,useLayoutEffect:Im,useMemo:Bm,useReducer:Xa,useRef:Pm,useState:function(){return Xa(dl)},useDebugValue:tc,useDeferredValue:function(e){var t=Tt();return Vm(t,Pe.memoizedState,e)},useTransition:function(){var e=Xa(dl)[0],t=Tt().memoizedState;return[e,t]},useMutableSource:Tm,useSyncExternalStore:Rm,useId:zm,unstable_isNewReconciler:!1},Uy={readContext:kt,useCallback:Mm,useContext:kt,useEffect:ec,useImperativeHandle:jm,useInsertionEffect:Dm,useLayoutEffect:Im,useMemo:Bm,useReducer:Za,useRef:Pm,useState:function(){return Za(dl)},useDebugValue:tc,useDeferredValue:function(e){var t=Tt();return Pe===null?t.memoizedState=e:Vm(t,Pe.memoizedState,e)},useTransition:function(){var e=Za(dl)[0],t=Tt().memoizedState;return[e,t]},useMutableSource:Tm,useSyncExternalStore:Rm,useId:zm,unstable_isNewReconciler:!1};function ro(e,t){try{var n="",r=t;do n+=yv(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Ja(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hy=typeof WeakMap=="function"?WeakMap:Map;function Wm(e,t,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ii||(Ii=!0,tu=r),Hs(e,t)},n}function Ym(e,t,n){n=ln(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Hs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hs(e,t),typeof r!="function"&&(An===null?An=new Set([this]):An.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ud(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hy;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=lb.bind(null,e,t,n),t.then(e,e))}function Hd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wd(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ln(-1,1),t.tag=2,On(n,t,1))),n.lanes|=1),e)}var Wy=mn.ReactCurrentOwner,at=!1;function Je(e,t,n,r){t.child=e===null?Cm(t,null,n,r):to(t,e.child,n,r)}function Yd(e,t,n,r,l){n=n.render;var i=t.ref;return Yr(t,l),r=Zu(e,t,n,r,i,l),n=Ju(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,dn(e,t,l)):(we&&n&&Bu(t),t.flags|=1,Je(e,t,r,l),t.child)}function Gd(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!uc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Gm(e,t,i,r,l)):(e=hi(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ol,n(a,r)&&e.ref===t.ref)return dn(e,t,l)}return t.flags|=1,e=Dn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Gm(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(ol(i,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,dn(e,t,l)}return Ws(e,t,n,r,l)}function Km(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(_r,ft),ft|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(_r,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,de(_r,ft),ft|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,de(_r,ft),ft|=r;return Je(e,t,l,n),t.child}function Qm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ws(e,t,n,r,l){var i=ut(n)?ir:Xe.current;return i=Jr(t,i),Yr(t,l),n=Zu(e,t,n,r,i,l),r=Ju(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,dn(e,t,l)):(we&&r&&Bu(t),t.flags|=1,Je(e,t,n,l),t.child)}function Kd(e,t,n,r,l){if(ut(n)){var i=!0;ki(t)}else i=!1;if(Yr(t,l),t.stateNode===null)ui(e,t),xm(t,n,r),Us(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=kt(d):(d=ut(n)?ir:Xe.current,d=Jr(t,d));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Bd(t,a,r,d),Sn=!1;var v=t.memoizedState;a.state=v,$i(t,r,a,l),u=t.memoizedState,s!==r||v!==u||st.current||Sn?(typeof m=="function"&&(qs(t,n,m,r),u=t.memoizedState),(s=Sn||Md(t,n,s,r,v,u,d))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Fm(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:It(t.type,s),a.props=d,p=t.pendingProps,v=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=kt(u):(u=ut(n)?ir:Xe.current,u=Jr(t,u));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||v!==u)&&Bd(t,a,r,u),Sn=!1,v=t.memoizedState,a.state=v,$i(t,r,a,l);var T=t.memoizedState;s!==p||v!==T||st.current||Sn?(typeof x=="function"&&(qs(t,n,x,r),T=t.memoizedState),(d=Sn||Md(t,n,d,r,v,T,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,T,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,T,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=T),a.props=r,a.state=T,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Ys(e,t,n,r,i,l)}function Ys(e,t,n,r,l,i){Qm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Pd(t,n,!1),dn(e,t,i);r=t.stateNode,Wy.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=to(t,e.child,null,i),t.child=to(t,null,s,i)):Je(e,t,s,i),t.memoizedState=r.state,l&&Pd(t,n,!0),t.child}function Xm(e){var t=e.stateNode;t.pendingContext?Ad(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ad(e,t.context,!1),Gu(e,t.containerInfo)}function Qd(e,t,n,r,l){return eo(),zu(l),t.flags|=256,Je(e,t,n,r),t.child}var Gs={dehydrated:null,treeContext:null,retryLane:0};function Ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zm(e,t,n){var r=t.pendingProps,l=Fe.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),de(Fe,l&1),e===null)return Vs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ia(a,r,0,null),e=lr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ks(n),t.memoizedState=Gs,e):nc(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Yy(e,t,a,r,s,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Dn(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Dn(s,i):(i=lr(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ks(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Gs,r}return i=e.child,e=i.sibling,r=Dn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function nc(e,t){return t=ia({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yl(e,t,n,r){return r!==null&&zu(r),to(t,e.child,null,n),e=nc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yy(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Ja(Error(D(422))),Yl(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=ia({mode:"visible",children:r.children},l,0,null),i=lr(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&to(t,e.child,null,a),t.child.memoizedState=Ks(a),t.memoizedState=Gs,i);if(!(t.mode&1))return Yl(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(D(419)),r=Ja(i,r,void 0),Yl(e,t,a,r)}if(s=(a&e.childLanes)!==0,at||s){if(r=Me,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,cn(e,l),Vt(r,e,l,-1))}return sc(),r=Ja(Error(D(421))),Yl(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=ib.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,pt=$n(l.nextSibling),gt=t,we=!0,jt=null,e!==null&&(St[xt++]=rn,St[xt++]=on,St[xt++]=ar,rn=e.id,on=e.overflow,ar=t),t=nc(t,r.children),t.flags|=4096,t)}function Xd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zs(e.return,t,n)}function es(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Jm(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Je(e,t,r.children,n),r=Fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xd(e,n,t);else if(e.tag===19)Xd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(Fe,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Oi(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),es(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Oi(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}es(t,!0,n,null,i);break;case"together":es(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ui(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ur|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gy(e,t,n){switch(t.tag){case 3:Xm(t),eo();break;case 5:km(t);break;case 1:ut(t.type)&&ki(t);break;case 4:Gu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;de(Ni,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(Fe,Fe.current&1),t.flags|=128,null):n&t.child.childLanes?Zm(e,t,n):(de(Fe,Fe.current&1),e=dn(e,t,n),e!==null?e.sibling:null);de(Fe,Fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jm(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),de(Fe,Fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Km(e,t,n)}return dn(e,t,n)}var ep,Qs,tp,np;ep=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qs=function(){};tp=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,nr(Qt.current);var i=null;switch(n){case"input":l=ys(e,l),r=ys(e,r),i=[];break;case"select":l=xe({},l,{value:void 0}),r=xe({},r,{value:void 0}),i=[];break;case"textarea":l=Fs(e,l),r=Fs(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ei)}xs(n,r);var a;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Xo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&ge("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};np=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ro(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ky(e,t,n){var r=t.pendingProps;switch(Vu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return ut(t.type)&&Ci(),Ke(t),null;case 3:return r=t.stateNode,no(),ve(st),ve(Xe),Qu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jt!==null&&(ou(jt),jt=null))),Qs(e,t),Ke(t),null;case 5:Ku(t);var l=nr(ul.current);if(n=t.type,e!==null&&t.stateNode!=null)tp(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Ke(t),null}if(e=nr(Qt.current),Hl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Gt]=t,r[al]=i,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(l=0;l<_o.length;l++)ge(_o[l],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":id(r,i),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ge("invalid",r);break;case"textarea":sd(r,i),ge("invalid",r)}xs(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ul(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ul(r.textContent,s,e),l=["children",""+s]):Xo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":Il(r),ad(r,i,!0);break;case"textarea":Il(r),ud(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ei)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Gt]=t,e[al]=r,ep(e,t,!1,!1),t.stateNode=e;e:{switch(a=Es(n,r),n){case"dialog":ge("cancel",e),ge("close",e),l=r;break;case"iframe":case"object":case"embed":ge("load",e),l=r;break;case"video":case"audio":for(l=0;l<_o.length;l++)ge(_o[l],e);l=r;break;case"source":ge("error",e),l=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),l=r;break;case"details":ge("toggle",e),l=r;break;case"input":id(e,r),l=ys(e,r),ge("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=xe({},r,{value:void 0}),ge("invalid",e);break;case"textarea":sd(e,r),l=Fs(e,r),ge("invalid",e);break;default:l=r}xs(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Of(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Lf(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zo(e,u):typeof u=="number"&&Zo(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ge("scroll",e):u!=null&&ku(e,i,u,a))}switch(n){case"input":Il(e),ad(e,r,!1);break;case"textarea":Il(e),ud(e);break;case"option":r.value!=null&&e.setAttribute("value",""+In(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qr(e,!!r.multiple,i,!1):r.defaultValue!=null&&qr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ei)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)np(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=nr(ul.current),nr(Qt.current),Hl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Gt]=t,(i=r.nodeValue!==n)&&(e=gt,e!==null))switch(e.tag){case 3:Ul(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ul(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gt]=t,t.stateNode=r}return Ke(t),null;case 13:if(ve(Fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&pt!==null&&t.mode&1&&!(t.flags&128))bm(),eo(),t.flags|=98560,i=!1;else if(i=Hl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(D(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(D(317));i[Gt]=t}else eo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),i=!1}else jt!==null&&(ou(jt),jt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Fe.current&1?De===0&&(De=3):sc())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return no(),Qs(e,t),e===null&&ll(t.stateNode.containerInfo),Ke(t),null;case 10:return Hu(t.type._context),Ke(t),null;case 17:return ut(t.type)&&Ci(),Ke(t),null;case 19:if(ve(Fe),i=t.memoizedState,i===null)return Ke(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Ro(i,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Oi(e),a!==null){for(t.flags|=128,Ro(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(Fe,Fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Re()>oo&&(t.flags|=128,r=!0,Ro(i,!1),t.lanes=4194304)}else{if(!r)if(e=Oi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ro(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!we)return Ke(t),null}else 2*Re()-i.renderingStartTime>oo&&n!==1073741824&&(t.flags|=128,r=!0,Ro(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Re(),t.sibling=null,n=Fe.current,de(Fe,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return ac(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function Qy(e,t){switch(Vu(t),t.tag){case 1:return ut(t.type)&&Ci(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return no(),ve(st),ve(Xe),Qu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ku(t),null;case 13:if(ve(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));eo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Fe),null;case 4:return no(),null;case 10:return Hu(t.type._context),null;case 22:case 23:return ac(),null;case 24:return null;default:return null}}var Gl=!1,Qe=!1,Xy=typeof WeakSet=="function"?WeakSet:Set,V=null;function Ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Xs(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Zd=!1;function Zy(e,t){if(Ps=Fi,e=im(),Mu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,m=0,p=e,v=null;t:for(;;){for(var x;p!==n||l!==0&&p.nodeType!==3||(s=a+l),p!==i||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(x=p.firstChild)!==null;)v=p,p=x;for(;;){if(p===e)break t;if(v===n&&++d===l&&(s=a),v===i&&++m===r&&(u=a),(x=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ds={focusedElem:e,selectionRange:n},Fi=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var T=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var E=T.memoizedProps,b=T.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?E:It(t.type,E),b);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(y){Te(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return T=Zd,Zd=!1,T}function Wo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Xs(t,n,i)}l=l.next}while(l!==r)}}function oa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rp(e){var t=e.alternate;t!==null&&(e.alternate=null,rp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gt],delete t[al],delete t[js],delete t[Py],delete t[Dy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function op(e){return e.tag===5||e.tag===3||e.tag===4}function Jd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Js(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ei));else if(r!==4&&(e=e.child,e!==null))for(Js(e,t,n),e=e.sibling;e!==null;)Js(e,t,n),e=e.sibling}function eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(eu(e,t,n),e=e.sibling;e!==null;)eu(e,t,n),e=e.sibling}var Ue=null,_t=!1;function bn(e,t,n){for(n=n.child;n!==null;)lp(e,t,n),n=n.sibling}function lp(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Qi,n)}catch{}switch(n.tag){case 5:Qe||Ir(n,t);case 6:var r=Ue,l=_t;Ue=null,bn(e,t,n),Ue=r,_t=l,Ue!==null&&(_t?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(_t?(e=Ue,n=n.stateNode,e.nodeType===8?Ya(e.parentNode,n):e.nodeType===1&&Ya(e,n),nl(e)):Ya(Ue,n.stateNode));break;case 4:r=Ue,l=_t,Ue=n.stateNode.containerInfo,_t=!0,bn(e,t,n),Ue=r,_t=l;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Xs(n,t,a),l=l.next}while(l!==r)}bn(e,t,n);break;case 1:if(!Qe&&(Ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Te(n,t,s)}bn(e,t,n);break;case 21:bn(e,t,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,bn(e,t,n),Qe=r):bn(e,t,n);break;default:bn(e,t,n)}}function eh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xy),t.forEach(function(r){var l=ab.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ue=s.stateNode,_t=!1;break e;case 3:Ue=s.stateNode.containerInfo,_t=!0;break e;case 4:Ue=s.stateNode.containerInfo,_t=!0;break e}s=s.return}if(Ue===null)throw Error(D(160));lp(i,a,l),Ue=null,_t=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){Te(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ip(t,e),t=t.sibling}function ip(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(t,e),Ut(e),r&4){try{Wo(3,e,e.return),oa(3,e)}catch(E){Te(e,e.return,E)}try{Wo(5,e,e.return)}catch(E){Te(e,e.return,E)}}break;case 1:Pt(t,e),Ut(e),r&512&&n!==null&&Ir(n,n.return);break;case 5:if(Pt(t,e),Ut(e),r&512&&n!==null&&Ir(n,n.return),e.flags&32){var l=e.stateNode;try{Zo(l,"")}catch(E){Te(e,e.return,E)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Tf(l,i),Es(s,a);var d=Es(s,i);for(a=0;a<u.length;a+=2){var m=u[a],p=u[a+1];m==="style"?Of(l,p):m==="dangerouslySetInnerHTML"?Lf(l,p):m==="children"?Zo(l,p):ku(l,m,p,d)}switch(s){case"input":bs(l,i);break;case"textarea":Rf(l,i);break;case"select":var v=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?qr(l,!!i.multiple,x,!1):v!==!!i.multiple&&(i.defaultValue!=null?qr(l,!!i.multiple,i.defaultValue,!0):qr(l,!!i.multiple,i.multiple?[]:"",!1))}l[al]=i}catch(E){Te(e,e.return,E)}}break;case 6:if(Pt(t,e),Ut(e),r&4){if(e.stateNode===null)throw Error(D(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(E){Te(e,e.return,E)}}break;case 3:if(Pt(t,e),Ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nl(t.containerInfo)}catch(E){Te(e,e.return,E)}break;case 4:Pt(t,e),Ut(e);break;case 13:Pt(t,e),Ut(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(lc=Re())),r&4&&eh(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(d=Qe)||m,Pt(t,e),Qe=d):Pt(t,e),Ut(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(V=e,m=e.child;m!==null;){for(p=V=m;V!==null;){switch(v=V,x=v.child,v.tag){case 0:case 11:case 14:case 15:Wo(4,v,v.return);break;case 1:Ir(v,v.return);var T=v.stateNode;if(typeof T.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,T.props=t.memoizedProps,T.state=t.memoizedState,T.componentWillUnmount()}catch(E){Te(r,n,E)}}break;case 5:Ir(v,v.return);break;case 22:if(v.memoizedState!==null){nh(p);continue}}x!==null?(x.return=v,V=x):nh(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,u=p.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=$f("display",a))}catch(E){Te(e,e.return,E)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(E){Te(e,e.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Pt(t,e),Ut(e),r&4&&eh(e);break;case 21:break;default:Pt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(op(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Zo(l,""),r.flags&=-33);var i=Jd(e);eu(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Jd(e);Js(e,s,a);break;default:throw Error(D(161))}}catch(u){Te(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jy(e,t,n){V=e,ap(e)}function ap(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var l=V,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Gl;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||Qe;s=Gl;var d=Qe;if(Gl=a,(Qe=u)&&!d)for(V=l;V!==null;)a=V,u=a.child,a.tag===22&&a.memoizedState!==null?rh(l):u!==null?(u.return=a,V=u):rh(l);for(;i!==null;)V=i,ap(i),i=i.sibling;V=l,Gl=s,Qe=d}th(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,V=i):th(e)}}function th(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Qe||oa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:It(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&jd(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jd(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&nl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Qe||t.flags&512&&Zs(t)}catch(v){Te(t,t.return,v)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function nh(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function rh(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oa(4,t)}catch(u){Te(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Te(t,l,u)}}var i=t.return;try{Zs(t)}catch(u){Te(t,i,u)}break;case 5:var a=t.return;try{Zs(t)}catch(u){Te(t,a,u)}}}catch(u){Te(t,t.return,u)}if(t===e){V=null;break}var s=t.sibling;if(s!==null){s.return=t.return,V=s;break}V=t.return}}var eb=Math.ceil,Di=mn.ReactCurrentDispatcher,rc=mn.ReactCurrentOwner,Ct=mn.ReactCurrentBatchConfig,re=0,Me=null,Le=null,He=0,ft=0,_r=zn(0),De=0,fl=null,ur=0,la=0,oc=0,Yo=null,it=null,lc=0,oo=1/0,Jt=null,Ii=!1,tu=null,An=null,Kl=!1,kn=null,_i=0,Go=0,nu=null,ci=-1,di=0;function tt(){return re&6?Re():ci!==-1?ci:ci=Re()}function Pn(e){return e.mode&1?re&2&&He!==0?He&-He:_y.transition!==null?(di===0&&(di=Uf()),di):(e=ue,e!==0||(e=window.event,e=e===void 0?16:Xf(e.type)),e):1}function Vt(e,t,n,r){if(50<Go)throw Go=0,nu=null,Error(D(185));yl(e,n,r),(!(re&2)||e!==Me)&&(e===Me&&(!(re&2)&&(la|=n),De===4&&En(e,He)),ct(e,r),n===1&&re===0&&!(t.mode&1)&&(oo=Re()+500,ta&&qn()))}function ct(e,t){var n=e.callbackNode;_v(e,t);var r=wi(e,e===Me?He:0);if(r===0)n!==null&&hd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hd(n),t===1)e.tag===0?Iy(oh.bind(null,e)):gm(oh.bind(null,e)),Oy(function(){!(re&6)&&qn()}),n=null;else{switch(Hf(r)){case 1:n=$u;break;case 4:n=zf;break;case 16:n=bi;break;case 536870912:n=qf;break;default:n=bi}n=pp(n,sp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sp(e,t){if(ci=-1,di=0,re&6)throw Error(D(327));var n=e.callbackNode;if(Gr()&&e.callbackNode!==n)return null;var r=wi(e,e===Me?He:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ji(e,r);else{t=r;var l=re;re|=2;var i=cp();(Me!==e||He!==t)&&(Jt=null,oo=Re()+500,or(e,t));do try{rb();break}catch(s){up(e,s)}while(1);Uu(),Di.current=i,re=l,Le!==null?t=0:(Me=null,He=0,t=De)}if(t!==0){if(t===2&&(l=Ns(e),l!==0&&(r=l,t=ru(e,l))),t===1)throw n=fl,or(e,0),En(e,r),ct(e,Re()),n;if(t===6)En(e,r);else{if(l=e.current.alternate,!(r&30)&&!tb(l)&&(t=ji(e,r),t===2&&(i=Ns(e),i!==0&&(r=i,t=ru(e,i))),t===1))throw n=fl,or(e,0),En(e,r),ct(e,Re()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:Jn(e,it,Jt);break;case 3:if(En(e,r),(r&130023424)===r&&(t=lc+500-Re(),10<t)){if(wi(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){tt(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=_s(Jn.bind(null,e,it,Jt),t);break}Jn(e,it,Jt);break;case 4:if(En(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Bt(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eb(r/1960))-r,10<r){e.timeoutHandle=_s(Jn.bind(null,e,it,Jt),r);break}Jn(e,it,Jt);break;case 5:Jn(e,it,Jt);break;default:throw Error(D(329))}}}return ct(e,Re()),e.callbackNode===n?sp.bind(null,e):null}function ru(e,t){var n=Yo;return e.current.memoizedState.isDehydrated&&(or(e,t).flags|=256),e=ji(e,t),e!==2&&(t=it,it=n,t!==null&&ou(t)),e}function ou(e){it===null?it=e:it.push.apply(it,e)}function tb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!zt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function En(e,t){for(t&=~oc,t&=~la,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Bt(t),r=1<<n;e[n]=-1,t&=~r}}function oh(e){if(re&6)throw Error(D(327));Gr();var t=wi(e,0);if(!(t&1))return ct(e,Re()),null;var n=ji(e,t);if(e.tag!==0&&n===2){var r=Ns(e);r!==0&&(t=r,n=ru(e,r))}if(n===1)throw n=fl,or(e,0),En(e,t),ct(e,Re()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jn(e,it,Jt),ct(e,Re()),null}function ic(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(oo=Re()+500,ta&&qn())}}function cr(e){kn!==null&&kn.tag===0&&!(re&6)&&Gr();var t=re;re|=1;var n=Ct.transition,r=ue;try{if(Ct.transition=null,ue=1,e)return e()}finally{ue=r,Ct.transition=n,re=t,!(re&6)&&qn()}}function ac(){ft=_r.current,ve(_r)}function or(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$y(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Vu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ci();break;case 3:no(),ve(st),ve(Xe),Qu();break;case 5:Ku(r);break;case 4:no();break;case 13:ve(Fe);break;case 19:ve(Fe);break;case 10:Hu(r.type._context);break;case 22:case 23:ac()}n=n.return}if(Me=e,Le=e=Dn(e.current,null),He=ft=t,De=0,fl=null,oc=la=ur=0,it=Yo=null,tr!==null){for(t=0;t<tr.length;t++)if(n=tr[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}tr=null}return e}function up(e,t){do{var n=Le;try{if(Uu(),ai.current=Pi,Ai){for(var r=Se.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Ai=!1}if(sr=0,je=Pe=Se=null,Ho=!1,cl=0,rc.current=null,n===null||n.return===null){De=1,fl=t,Le=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=He,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=s,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=Hd(a);if(x!==null){x.flags&=-257,Wd(x,a,s,i,t),x.mode&1&&Ud(i,d,t),t=x,u=d;var T=t.updateQueue;if(T===null){var E=new Set;E.add(u),t.updateQueue=E}else T.add(u);break e}else{if(!(t&1)){Ud(i,d,t),sc();break e}u=Error(D(426))}}else if(we&&s.mode&1){var b=Hd(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Wd(b,a,s,i,t),zu(ro(u,s));break e}}i=u=ro(u,s),De!==4&&(De=2),Yo===null?Yo=[i]:Yo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Wm(i,u,t);_d(i,g);break e;case 1:s=u;var h=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(An===null||!An.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Ym(i,s,t);_d(i,y);break e}}i=i.return}while(i!==null)}hp(n)}catch(w){t=w,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(1)}function cp(){var e=Di.current;return Di.current=Pi,e===null?Pi:e}function sc(){(De===0||De===3||De===2)&&(De=4),Me===null||!(ur&268435455)&&!(la&268435455)||En(Me,He)}function ji(e,t){var n=re;re|=2;var r=cp();(Me!==e||He!==t)&&(Jt=null,or(e,t));do try{nb();break}catch(l){up(e,l)}while(1);if(Uu(),re=n,Di.current=r,Le!==null)throw Error(D(261));return Me=null,He=0,De}function nb(){for(;Le!==null;)dp(Le)}function rb(){for(;Le!==null&&!Rv();)dp(Le)}function dp(e){var t=mp(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?hp(e):Le=t,rc.current=null}function hp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qy(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Le=null;return}}else if(n=Ky(n,t,ft),n!==null){Le=n;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);De===0&&(De=5)}function Jn(e,t,n){var r=ue,l=Ct.transition;try{Ct.transition=null,ue=1,ob(e,t,n,r)}finally{Ct.transition=l,ue=r}return null}function ob(e,t,n,r){do Gr();while(kn!==null);if(re&6)throw Error(D(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(jv(e,i),e===Me&&(Le=Me=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Kl||(Kl=!0,pp(bi,function(){return Gr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ct.transition,Ct.transition=null;var a=ue;ue=1;var s=re;re|=4,rc.current=null,Zy(e,n),ip(n,e),Ey(Ds),Fi=!!Ps,Ds=Ps=null,e.current=n,Jy(n),Nv(),re=s,ue=a,Ct.transition=i}else e.current=n;if(Kl&&(Kl=!1,kn=e,_i=l),i=e.pendingLanes,i===0&&(An=null),Ov(n.stateNode),ct(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ii)throw Ii=!1,e=tu,tu=null,e;return _i&1&&e.tag!==0&&Gr(),i=e.pendingLanes,i&1?e===nu?Go++:(Go=0,nu=e):Go=0,qn(),null}function Gr(){if(kn!==null){var e=Hf(_i),t=Ct.transition,n=ue;try{if(Ct.transition=null,ue=16>e?16:e,kn===null)var r=!1;else{if(e=kn,kn=null,_i=0,re&6)throw Error(D(331));var l=re;for(re|=4,V=e.current;V!==null;){var i=V,a=i.child;if(V.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(V=d;V!==null;){var m=V;switch(m.tag){case 0:case 11:case 15:Wo(8,m,i)}var p=m.child;if(p!==null)p.return=m,V=p;else for(;V!==null;){m=V;var v=m.sibling,x=m.return;if(rp(m),m===d){V=null;break}if(v!==null){v.return=x,V=v;break}V=x}}}var T=i.alternate;if(T!==null){var E=T.child;if(E!==null){T.child=null;do{var b=E.sibling;E.sibling=null,E=b}while(E!==null)}}V=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,V=a;else e:for(;V!==null;){if(i=V,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Wo(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,V=g;break e}V=i.return}}var h=e.current;for(V=h;V!==null;){a=V;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,V=f;else e:for(a=h;V!==null;){if(s=V,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:oa(9,s)}}catch(w){Te(s,s.return,w)}if(s===a){V=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,V=y;break e}V=s.return}}if(re=l,qn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Qi,e)}catch{}r=!0}return r}finally{ue=n,Ct.transition=t}}return!1}function lh(e,t,n){t=ro(n,t),t=Wm(e,t,1),e=On(e,t,1),t=tt(),e!==null&&(yl(e,1,t),ct(e,t))}function Te(e,t,n){if(e.tag===3)lh(e,e,n);else for(;t!==null;){if(t.tag===3){lh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))){e=ro(n,e),e=Ym(t,e,1),t=On(t,e,1),e=tt(),t!==null&&(yl(t,1,e),ct(t,e));break}}t=t.return}}function lb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(He&n)===n&&(De===4||De===3&&(He&130023424)===He&&500>Re()-lc?or(e,0):oc|=n),ct(e,t)}function fp(e,t){t===0&&(e.mode&1?(t=Ml,Ml<<=1,!(Ml&130023424)&&(Ml=4194304)):t=1);var n=tt();e=cn(e,t),e!==null&&(yl(e,t,n),ct(e,n))}function ib(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fp(e,n)}function ab(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),fp(e,n)}var mp;mp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,Gy(e,t,n);at=!!(e.flags&131072)}else at=!1,we&&t.flags&1048576&&vm(t,Ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ui(e,t),e=t.pendingProps;var l=Jr(t,Xe.current);Yr(t,n),l=Zu(null,t,r,e,l,n);var i=Ju();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(r)?(i=!0,ki(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Yu(t),l.updater=na,t.stateNode=l,l._reactInternals=t,Us(t,r,e,n),t=Ys(null,t,r,!0,i,n)):(t.tag=0,we&&i&&Bu(t),Je(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ui(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=ub(r),e=It(r,e),l){case 0:t=Ws(null,t,r,e,n);break e;case 1:t=Kd(null,t,r,e,n);break e;case 11:t=Yd(null,t,r,e,n);break e;case 14:t=Gd(null,t,r,It(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:It(r,l),Ws(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:It(r,l),Kd(e,t,r,l,n);case 3:e:{if(Xm(t),e===null)throw Error(D(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Fm(e,t),$i(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=ro(Error(D(423)),t),t=Qd(e,t,r,n,l);break e}else if(r!==l){l=ro(Error(D(424)),t),t=Qd(e,t,r,n,l);break e}else for(pt=$n(t.stateNode.containerInfo.firstChild),gt=t,we=!0,jt=null,n=Cm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(eo(),r===l){t=dn(e,t,n);break e}Je(e,t,r,n)}t=t.child}return t;case 5:return km(t),e===null&&Vs(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,Is(r,l)?a=null:i!==null&&Is(r,i)&&(t.flags|=32),Qm(e,t),Je(e,t,a,n),t.child;case 6:return e===null&&Vs(t),null;case 13:return Zm(e,t,n);case 4:return Gu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=to(t,null,r,n):Je(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:It(r,l),Yd(e,t,r,l,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,de(Ni,r._currentValue),r._currentValue=a,i!==null)if(zt(i.value,a)){if(i.children===l.children&&!st.current){t=dn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=ln(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),zs(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(D(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),zs(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Je(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Yr(t,n),l=kt(l),r=r(l),t.flags|=1,Je(e,t,r,n),t.child;case 14:return r=t.type,l=It(r,t.pendingProps),l=It(r.type,l),Gd(e,t,r,l,n);case 15:return Gm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:It(r,l),ui(e,t),t.tag=1,ut(r)?(e=!0,ki(t)):e=!1,Yr(t,n),xm(t,r,l),Us(t,r,l,n),Ys(null,t,r,!0,e,n);case 19:return Jm(e,t,n);case 22:return Km(e,t,n)}throw Error(D(156,t.tag))};function pp(e,t){return Vf(e,t)}function sb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,n,r){return new sb(e,t,n,r)}function uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ub(e){if(typeof e=="function")return uc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ru)return 11;if(e===Nu)return 14}return 2}function Dn(e,t){var n=e.alternate;return n===null?(n=Et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function hi(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")uc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Tr:return lr(n.children,l,i,t);case Tu:a=8,l|=8;break;case ms:return e=Et(12,n,t,l|2),e.elementType=ms,e.lanes=i,e;case ps:return e=Et(13,n,t,l),e.elementType=ps,e.lanes=i,e;case gs:return e=Et(19,n,t,l),e.elementType=gs,e.lanes=i,e;case Ef:return ia(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sf:a=10;break e;case xf:a=9;break e;case Ru:a=11;break e;case Nu:a=14;break e;case Fn:a=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=Et(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function lr(e,t,n,r){return e=Et(7,e,r,t),e.lanes=n,e}function ia(e,t,n,r){return e=Et(22,e,r,t),e.elementType=Ef,e.lanes=n,e.stateNode={isHidden:!1},e}function ts(e,t,n){return e=Et(6,e,null,t),e.lanes=n,e}function ns(e,t,n){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cb(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ia(0),this.expirationTimes=Ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ia(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function cc(e,t,n,r,l,i,a,s,u){return e=new cb(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yu(i),e}function db(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gp(e){if(!e)return _n;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(ut(n))return pm(e,n,t)}return t}function vp(e,t,n,r,l,i,a,s,u){return e=cc(n,r,!0,e,l,i,a,s,u),e.context=gp(null),n=e.current,r=tt(),l=Pn(n),i=ln(r,l),i.callback=t??null,On(n,i,l),e.current.lanes=l,yl(e,l,r),ct(e,r),e}function aa(e,t,n,r){var l=t.current,i=tt(),a=Pn(l);return n=gp(n),t.context===null?t.context=n:t.pendingContext=n,t=ln(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=On(l,t,a),e!==null&&(Vt(e,l,a,i),ii(e,l,a)),a}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ih(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dc(e,t){ih(e,t),(e=e.alternate)&&ih(e,t)}function hb(){return null}var yp=typeof reportError=="function"?reportError:function(e){console.error(e)};function hc(e){this._internalRoot=e}sa.prototype.render=hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));aa(e,t,null,null)};sa.prototype.unmount=hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){aa(null,e,null,null)}),t[un]=null}};function sa(e){this._internalRoot=e}sa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xn.length&&t!==0&&t<xn[n].priority;n++);xn.splice(n,0,e),n===0&&Qf(e)}};function fc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ah(){}function fb(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=Mi(a);i.call(d)}}var a=vp(t,r,e,0,null,!1,!1,"",ah);return e._reactRootContainer=a,e[un]=a.current,ll(e.nodeType===8?e.parentNode:e),cr(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=Mi(u);s.call(d)}}var u=cc(e,0,!1,null,null,!1,!1,"",ah);return e._reactRootContainer=u,e[un]=u.current,ll(e.nodeType===8?e.parentNode:e),cr(function(){aa(t,u,n,r)}),u}function ca(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var s=l;l=function(){var u=Mi(a);s.call(u)}}aa(t,a,e,l)}else a=fb(n,t,e,l,r);return Mi(a)}Wf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Io(t.pendingLanes);n!==0&&(Ou(t,n|1),ct(t,Re()),!(re&6)&&(oo=Re()+500,qn()))}break;case 13:cr(function(){var r=cn(e,1);if(r!==null){var l=tt();Vt(r,e,1,l)}}),dc(e,1)}};Au=function(e){if(e.tag===13){var t=cn(e,134217728);if(t!==null){var n=tt();Vt(t,e,134217728,n)}dc(e,134217728)}};Yf=function(e){if(e.tag===13){var t=Pn(e),n=cn(e,t);if(n!==null){var r=tt();Vt(n,e,t,r)}dc(e,t)}};Gf=function(){return ue};Kf=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};ks=function(e,t,n){switch(t){case"input":if(bs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ea(r);if(!l)throw Error(D(90));kf(r),bs(r,l)}}}break;case"textarea":Rf(e,n);break;case"select":t=n.value,t!=null&&qr(e,!!n.multiple,t,!1)}};Df=ic;If=cr;var mb={usingClientEntryPoint:!1,Events:[wl,$r,ea,Af,Pf,ic]},No={findFiberByHostInstance:er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pb={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mf(e),e===null?null:e.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||hb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Qi=Ql.inject(pb),Kt=Ql}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mb;bt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fc(t))throw Error(D(200));return db(e,t,null,n)};bt.createRoot=function(e,t){if(!fc(e))throw Error(D(299));var n=!1,r="",l=yp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=cc(e,1,!1,null,null,n,!1,r,l),e[un]=t.current,ll(e.nodeType===8?e.parentNode:e),new hc(t)};bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Mf(t),e=e===null?null:e.stateNode,e};bt.flushSync=function(e){return cr(e)};bt.hydrate=function(e,t,n){if(!ua(t))throw Error(D(200));return ca(null,e,t,!0,n)};bt.hydrateRoot=function(e,t,n){if(!fc(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=yp;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=vp(t,null,e,1,n??null,l,!1,i,a),e[un]=t.current,ll(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new sa(t)};bt.render=function(e,t,n){if(!ua(t))throw Error(D(200));return ca(null,e,t,!1,n)};bt.unmountComponentAtNode=function(e){if(!ua(e))throw Error(D(40));return e._reactRootContainer?(cr(function(){ca(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};bt.unstable_batchedUpdates=ic;bt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ua(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return ca(e,t,n,!1,r)};bt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=bt})(hv);var sh=ds;cs.createRoot=sh.createRoot,cs.hydrateRoot=sh.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne.apply(this,arguments)}var Ne;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ne||(Ne={}));const uh="popstate";function gb(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:a,hash:s}=r.location;return ml("",{pathname:i,search:a,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:hn(l)}return yb(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function vb(){return Math.random().toString(36).substr(2,8)}function ch(e,t){return{usr:e.state,key:e.key,idx:t}}function ml(e,t,n,r){return n===void 0&&(n=null),ne({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pn(t):t,{state:n,key:t&&t.key||r||vb()})}function hn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function pn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function yb(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,a=l.history,s=Ne.Pop,u=null,d=m();d==null&&(d=0,a.replaceState(ne({},a.state,{idx:d}),""));function m(){return(a.state||{idx:null}).idx}function p(){s=Ne.Pop;let b=m(),g=b==null?null:b-d;d=b,u&&u({action:s,location:E.location,delta:g})}function v(b,g){s=Ne.Push;let h=ml(E.location,b,g);n&&n(h,b),d=m()+1;let f=ch(h,d),y=E.createHref(h);try{a.pushState(f,"",y)}catch{l.location.assign(y)}i&&u&&u({action:s,location:E.location,delta:1})}function x(b,g){s=Ne.Replace;let h=ml(E.location,b,g);n&&n(h,b),d=m();let f=ch(h,d),y=E.createHref(h);a.replaceState(f,"",y),i&&u&&u({action:s,location:E.location,delta:0})}function T(b){let g=l.location.origin!=="null"?l.location.origin:l.location.href,h=typeof b=="string"?b:hn(b);return X(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let E={get action(){return s},get location(){return e(l,a)},listen(b){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(uh,p),u=b,()=>{l.removeEventListener(uh,p),u=null}},createHref(b){return t(l,b)},createURL:T,encodeLocation(b){let g=T(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:v,replace:x,go(b){return a.go(b)}};return E}var Ae;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ae||(Ae={}));const bb=new Set(["lazy","caseSensitive","path","id","index","children"]);function wb(e){return e.index===!0}function bp(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((l,i)=>{let a=[...n,i],s=typeof l.id=="string"?l.id:a.join("-");if(X(l.index!==!0||!l.children,"Cannot specify children on an index route"),X(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),wb(l)){let u=ne({},l,{hasErrorBoundary:t(l),id:s});return r[s]=u,u}else{let u=ne({},l,{id:s,hasErrorBoundary:t(l),children:void 0});return r[s]=u,l.children&&(u.children=bp(l.children,t,a,r)),u}})}function jr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?pn(t):t,l=Sl(r.pathname||"/",n);if(l==null)return null;let i=wp(e);Fb(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=Lb(i[s],Ab(l));return a}function wp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,a,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(X(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=an([r,u.relativePath]),m=n.concat(u);i.children&&i.children.length>0&&(X(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),wp(i.children,t,m,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:Rb(d,i.index),routesMeta:m})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,a);else for(let u of Fp(i.path))l(i,a,u)}),t}function Fp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let a=Fp(r.join("/")),s=[];return s.push(...a.map(u=>u===""?i:[i,u].join("/"))),l&&s.push(...a),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function Fb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Nb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Sb=/^:\w+$/,xb=3,Eb=2,Cb=1,kb=10,Tb=-2,dh=e=>e==="*";function Rb(e,t){let n=e.split("/"),r=n.length;return n.some(dh)&&(r+=Tb),t&&(r+=Eb),n.filter(l=>!dh(l)).reduce((l,i)=>l+(Sb.test(i)?xb:i===""?Cb:kb),r)}function Nb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Lb(e,t){let{routesMeta:n}=e,r={},l="/",i=[];for(let a=0;a<n.length;++a){let s=n[a],u=a===n.length-1,d=l==="/"?t:t.slice(l.length)||"/",m=$b({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},d);if(!m)return null;Object.assign(r,m.params);let p=s.route;i.push({params:r,pathname:an([l,m.pathname]),pathnameBase:_b(an([l,m.pathnameBase])),route:p}),m.pathnameBase!=="/"&&(l=an([l,m.pathnameBase]))}return i}function $b(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ob(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],a=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((d,m,p)=>{if(m==="*"){let v=s[p]||"";a=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}return d[m]=Pb(s[p]||"",m),d},{}),pathname:i,pathnameBase:a,pattern:e}}function Ob(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),lo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Ab(e){try{return decodeURI(e)}catch(t){return lo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Pb(e,t){try{return decodeURIComponent(e)}catch(n){return lo(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Sl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Db(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?pn(e):e;return{pathname:n?n.startsWith("/")?n:Ib(n,t):t,search:jb(r),hash:Mb(l)}}function Ib(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function rs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function da(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function mc(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=pn(e):(l=ne({},e),X(!l.pathname||!l.pathname.includes("?"),rs("?","pathname","search",l)),X(!l.pathname||!l.pathname.includes("#"),rs("#","pathname","hash",l)),X(!l.search||!l.search.includes("#"),rs("#","search","hash",l)));let i=e===""||l.pathname==="",a=i?"/":l.pathname,s;if(r||a==null)s=n;else{let p=t.length-1;if(a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),p-=1;l.pathname=v.join("/")}s=p>=0?t[p]:"/"}let u=Db(l,s),d=a&&a!=="/"&&a.endsWith("/"),m=(i||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||m)&&(u.pathname+="/"),u}const an=e=>e.join("/").replace(/\/\/+/g,"/"),_b=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),jb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Mb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class pc{constructor(t,n,r,l){l===void 0&&(l=!1),this.status=t,this.statusText=n||"",this.internal=l,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Sp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const xp=["post","put","patch","delete"],Bb=new Set(xp),Vb=["get",...xp],zb=new Set(Vb),qb=new Set([301,302,303,307,308]),Ub=new Set([307,308]),os={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Hb={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},hh={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ep=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wb=!Cp,Yb=e=>!!e.hasErrorBoundary;function Gb(e){X(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||Yb,n={},r=bp(e.routes,t,void 0,n),l,i=ne({v7_normalizeFormMethod:!1},e.future),a=null,s=new Set,u=null,d=null,m=null,p=e.hydrationData!=null,v=jr(r,e.history.location,e.basename),x=null;if(v==null){let R=Wt(404,{pathname:e.history.location.pathname}),{matches:N,route:P}=bh(r);v=N,x={[P.id]:R}}let T=!v.some(R=>R.route.lazy)&&(!v.some(R=>R.route.loader)||e.hydrationData!=null),E,b={historyAction:e.history.action,location:e.history.location,matches:v,initialized:T,navigation:os,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||x,fetchers:new Map,blockers:new Map},g=Ne.Pop,h=!1,f,y=!1,w=!1,F=[],C=[],k=new Map,L=0,O=-1,H=new Map,te=new Set,oe=new Map,ye=new Map,me=new Map,be=!1;function Ve(){return a=e.history.listen(R=>{let{action:N,location:P,delta:z}=R;if(be){be=!1;return}lo(me.size===0||z!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let q=Xc({currentLocation:b.location,nextLocation:P,historyAction:N});if(q&&z!=null){be=!0,e.history.go(z*-1),Al(q,{state:"blocked",location:P,proceed(){Al(q,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),e.history.go(z)},reset(){yo(q),j({blockers:new Map(E.state.blockers)})}});return}return le(N,P)}),b.initialized||le(Ne.Pop,b.location),E}function A(){a&&a(),s.clear(),f&&f.abort(),b.fetchers.forEach((R,N)=>Ca(N)),b.blockers.forEach((R,N)=>yo(N))}function B(R){return s.add(R),()=>s.delete(R)}function j(R){b=ne({},b,R),s.forEach(N=>N(b))}function U(R,N){var P,z;let q=b.actionData!=null&&b.navigation.formMethod!=null&&en(b.navigation.formMethod)&&b.navigation.state==="loading"&&((P=R.state)==null?void 0:P._isRedirect)!==!0,Y;N.actionData?Object.keys(N.actionData).length>0?Y=N.actionData:Y=null:q?Y=b.actionData:Y=null;let G=N.loaderData?yh(b.loaderData,N.loaderData,N.matches||[],N.errors):b.loaderData;for(let[W]of me)yo(W);let Q=h===!0||b.navigation.formMethod!=null&&en(b.navigation.formMethod)&&((z=R.state)==null?void 0:z._isRedirect)!==!0;l&&(r=l,l=void 0),j(ne({},N,{actionData:Y,loaderData:G,historyAction:g,location:R,initialized:!0,navigation:os,revalidation:"idle",restoreScrollPosition:Zc(R,N.matches||b.matches),preventScrollReset:Q,blockers:new Map(b.blockers)})),y||g===Ne.Pop||(g===Ne.Push?e.history.push(R,R.state):g===Ne.Replace&&e.history.replace(R,R.state)),g=Ne.Pop,h=!1,y=!1,w=!1,F=[],C=[]}async function K(R,N){if(typeof R=="number"){e.history.go(R);return}let{path:P,submission:z,error:q}=fh(R,i,N),Y=b.location,G=ml(b.location,P,N&&N.state);G=ne({},G,e.history.encodeLocation(G));let Q=N&&N.replace!=null?N.replace:void 0,W=Ne.Push;Q===!0?W=Ne.Replace:Q===!1||z!=null&&en(z.formMethod)&&z.formAction===b.location.pathname+b.location.search&&(W=Ne.Replace);let ce=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0,ie=Xc({currentLocation:Y,nextLocation:G,historyAction:W});if(ie){Al(ie,{state:"blocked",location:G,proceed(){Al(ie,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),K(R,N)},reset(){yo(ie),j({blockers:new Map(b.blockers)})}});return}return await le(W,G,{submission:z,pendingError:q,preventScrollReset:ce,replace:N&&N.replace})}function ht(){if(Kn(),j({revalidation:"loading"}),b.navigation.state!=="submitting"){if(b.navigation.state==="idle"){le(b.historyAction,b.location,{startUninterruptedRevalidation:!0});return}le(g||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation})}}async function le(R,N,P){f&&f.abort(),f=null,g=R,y=(P&&P.startUninterruptedRevalidation)===!0,Pg(b.location,b.matches),h=(P&&P.preventScrollReset)===!0;let z=l||r,q=P&&P.overrideNavigation,Y=jr(z,N,e.basename);if(!Y){let _e=Wt(404,{pathname:N.pathname}),{matches:qe,route:$t}=bh(z);ka(),U(N,{matches:qe,loaderData:{},errors:{[$t.id]:_e}});return}if(Jb(b.location,N)&&!(P&&P.submission&&en(P.submission.formMethod))){U(N,{matches:Y});return}f=new AbortController;let G=$o(e.history,N,f.signal,P&&P.submission),Q,W;if(P&&P.pendingError)W={[Mr(Y).route.id]:P.pendingError};else if(P&&P.submission&&en(P.submission.formMethod)){let _e=await ze(G,N,P.submission,Y,{replace:P.replace});if(_e.shortCircuited)return;Q=_e.pendingActionData,W=_e.pendingActionError,q=ne({state:"loading",location:N},P.submission),G=new Request(G.url,{signal:G.signal})}let{shortCircuited:ce,loaderData:ie,errors:Lt}=await Ce(G,N,Y,q,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,Q,W);ce||(f=null,U(N,ne({matches:Y},Q?{actionData:Q}:{},{loaderData:ie,errors:Lt})))}async function ze(R,N,P,z,q){Kn();let Y=ne({state:"submitting",location:N},P);j({navigation:Y});let G,Q=lu(z,N);if(!Q.route.action&&!Q.route.lazy)G={type:Ae.error,error:Wt(405,{method:R.method,pathname:N.pathname,routeId:Q.route.id})};else if(G=await Lo("action",R,Q,z,n,t,E.basename),R.signal.aborted)return{shortCircuited:!0};if(Kr(G)){let W;return q&&q.replace!=null?W=q.replace:W=G.location===b.location.pathname+b.location.search,await qt(b,G,{submission:P,replace:W}),{shortCircuited:!0}}if(Ko(G)){let W=Mr(z,Q.route.id);return(q&&q.replace)!==!0&&(g=Ne.Push),{pendingActionData:{},pendingActionError:{[W.route.id]:G.error}}}if(rr(G))throw Wt(400,{type:"defer-action"});return{pendingActionData:{[Q.route.id]:G.data}}}async function Ce(R,N,P,z,q,Y,G,Q,W){let ce=z;ce||(ce=ne({state:"loading",location:N,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},q));let ie=q||Y?q||Y:ce.formMethod&&ce.formAction&&ce.formData&&ce.formEncType?{formMethod:ce.formMethod,formAction:ce.formAction,formData:ce.formData,formEncType:ce.formEncType}:void 0,Lt=l||r,[_e,qe]=mh(e.history,b,P,ie,N,w,F,C,oe,Lt,e.basename,Q,W);if(ka(Ye=>!(P&&P.some(Ot=>Ot.route.id===Ye))||_e&&_e.some(Ot=>Ot.route.id===Ye)),_e.length===0&&qe.length===0)return U(N,ne({matches:P,loaderData:{},errors:W||null},Q?{actionData:Q}:{})),{shortCircuited:!0};if(!y){qe.forEach(Ot=>{let Qn=b.fetchers.get(Ot.key),Fo={state:"loading",data:Qn&&Qn.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};b.fetchers.set(Ot.key,Fo)});let Ye=Q||b.actionData;j(ne({navigation:ce},Ye?Object.keys(Ye).length===0?{actionData:null}:{actionData:Ye}:{},qe.length>0?{fetchers:new Map(b.fetchers)}:{}))}O=++L,qe.forEach(Ye=>k.set(Ye.key,f));let{results:$t,loaderResults:bo,fetcherResults:Ta}=await $l(b.matches,P,_e,qe,R);if(R.signal.aborted)return{shortCircuited:!0};qe.forEach(Ye=>k.delete(Ye.key));let wo=wh($t);if(wo)return await qt(b,wo,{replace:G}),{shortCircuited:!0};let{loaderData:br,errors:Ra}=vh(b,P,_e,bo,W,qe,Ta,ye);ye.forEach((Ye,Ot)=>{Ye.subscribe(Qn=>{(Qn||Ye.done)&&ye.delete(Ot)})}),$g();let Na=Qc(O);return ne({loaderData:br,errors:Ra},Na||qe.length>0?{fetchers:new Map(b.fetchers)}:{})}function Ie(R){return b.fetchers.get(R)||Hb}function Gn(R,N,P,z){if(Wb)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");k.has(R)&&Ol(R);let Y=jr(l||r,P,e.basename);if(!Y){Ea(R,N,Wt(404,{pathname:P}));return}let{path:G,submission:Q}=fh(P,i,z,!0),W=lu(Y,G);if(h=(z&&z.preventScrollReset)===!0,Q&&en(Q.formMethod)){Ll(R,N,G,W,Y,Q);return}oe.set(R,{routeId:N,path:G}),vo(R,N,G,W,Y,Q)}async function Ll(R,N,P,z,q,Y){if(Kn(),oe.delete(R),!z.route.action&&!z.route.lazy){let Zt=Wt(405,{method:Y.formMethod,pathname:P,routeId:N});Ea(R,N,Zt);return}let G=b.fetchers.get(R),Q=ne({state:"submitting"},Y,{data:G&&G.data," _hasFetcherDoneAnything ":!0});b.fetchers.set(R,Q),j({fetchers:new Map(b.fetchers)});let W=new AbortController,ce=$o(e.history,P,W.signal,Y);k.set(R,W);let ie=await Lo("action",ce,z,q,n,t,E.basename);if(ce.signal.aborted){k.get(R)===W&&k.delete(R);return}if(Kr(ie)){k.delete(R),te.add(R);let Zt=ne({state:"loading"},Y,{data:void 0," _hasFetcherDoneAnything ":!0});return b.fetchers.set(R,Zt),j({fetchers:new Map(b.fetchers)}),qt(b,ie,{submission:Y,isFetchActionRedirect:!0})}if(Ko(ie)){Ea(R,N,ie.error);return}if(rr(ie))throw Wt(400,{type:"defer-action"});let Lt=b.navigation.location||b.location,_e=$o(e.history,Lt,W.signal),qe=l||r,$t=b.navigation.state!=="idle"?jr(qe,b.navigation.location,e.basename):b.matches;X($t,"Didn't find any matches after fetcher action");let bo=++L;H.set(R,bo);let Ta=ne({state:"loading",data:ie.data},Y,{" _hasFetcherDoneAnything ":!0});b.fetchers.set(R,Ta);let[wo,br]=mh(e.history,b,$t,Y,Lt,w,F,C,oe,qe,e.basename,{[z.route.id]:ie.data},void 0);br.filter(Zt=>Zt.key!==R).forEach(Zt=>{let La=Zt.key,Jc=b.fetchers.get(La),jg={state:"loading",data:Jc&&Jc.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};b.fetchers.set(La,jg),k.set(La,W)}),j({fetchers:new Map(b.fetchers)});let{results:Ra,loaderResults:Na,fetcherResults:Ye}=await $l(b.matches,$t,wo,br,_e);if(W.signal.aborted)return;H.delete(R),k.delete(R),br.forEach(Zt=>k.delete(Zt.key));let Ot=wh(Ra);if(Ot)return qt(b,Ot);let{loaderData:Qn,errors:Fo}=vh(b,b.matches,wo,Na,void 0,br,Ye,ye),Ig={state:"idle",data:ie.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};b.fetchers.set(R,Ig);let _g=Qc(bo);b.navigation.state==="loading"&&bo>O?(X(g,"Expected pending action"),f&&f.abort(),U(b.navigation.location,{matches:$t,loaderData:Qn,errors:Fo,fetchers:new Map(b.fetchers)})):(j(ne({errors:Fo,loaderData:yh(b.loaderData,Qn,$t,Fo)},_g?{fetchers:new Map(b.fetchers)}:{})),w=!1)}async function vo(R,N,P,z,q,Y){let G=b.fetchers.get(R),Q=ne({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Y,{data:G&&G.data," _hasFetcherDoneAnything ":!0});b.fetchers.set(R,Q),j({fetchers:new Map(b.fetchers)});let W=new AbortController,ce=$o(e.history,P,W.signal);k.set(R,W);let ie=await Lo("loader",ce,z,q,n,t,E.basename);if(rr(ie)&&(ie=await Np(ie,ce.signal,!0)||ie),k.get(R)===W&&k.delete(R),ce.signal.aborted)return;if(Kr(ie)){await qt(b,ie);return}if(Ko(ie)){let _e=Mr(b.matches,N);b.fetchers.delete(R),j({fetchers:new Map(b.fetchers),errors:{[_e.route.id]:ie.error}});return}X(!rr(ie),"Unhandled fetcher deferred data");let Lt={state:"idle",data:ie.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};b.fetchers.set(R,Lt),j({fetchers:new Map(b.fetchers)})}async function qt(R,N,P){var z;let{submission:q,replace:Y,isFetchActionRedirect:G}=P===void 0?{}:P;N.revalidate&&(w=!0);let Q=ml(R.location,N.location,ne({_isRedirect:!0},G?{_isFetchActionRedirect:!0}:{}));if(X(Q,"Expected a location on the redirect navigation"),Ep.test(N.location)&&Cp&&typeof((z=window)==null?void 0:z.location)<"u"){let qe=e.history.createURL(N.location),$t=Sl(qe.pathname,e.basename||"/")==null;if(window.location.origin!==qe.origin||$t){Y?window.location.replace(N.location):window.location.assign(N.location);return}}f=null;let W=Y===!0?Ne.Replace:Ne.Push,{formMethod:ce,formAction:ie,formEncType:Lt,formData:_e}=R.navigation;!q&&ce&&ie&&_e&&Lt&&(q={formMethod:ce,formAction:ie,formEncType:Lt,formData:_e}),Ub.has(N.status)&&q&&en(q.formMethod)?await le(W,Q,{submission:ne({},q,{formAction:N.location}),preventScrollReset:h}):G?await le(W,Q,{overrideNavigation:{state:"loading",location:Q,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:q,preventScrollReset:h}):await le(W,Q,{overrideNavigation:{state:"loading",location:Q,formMethod:q?q.formMethod:void 0,formAction:q?q.formAction:void 0,formEncType:q?q.formEncType:void 0,formData:q?q.formData:void 0},preventScrollReset:h})}async function $l(R,N,P,z,q){let Y=await Promise.all([...P.map(W=>Lo("loader",q,W,N,n,t,E.basename)),...z.map(W=>W.matches&&W.match?Lo("loader",$o(e.history,W.path,q.signal),W.match,W.matches,n,t,E.basename):{type:Ae.error,error:Wt(404,{pathname:W.path})})]),G=Y.slice(0,P.length),Q=Y.slice(P.length);return await Promise.all([Fh(R,P,G,q.signal,!1,b.loaderData),Fh(R,z.map(W=>W.match),Q,q.signal,!0)]),{results:Y,loaderResults:G,fetcherResults:Q}}function Kn(){w=!0,F.push(...ka()),oe.forEach((R,N)=>{k.has(N)&&(C.push(N),Ol(N))})}function Ea(R,N,P){let z=Mr(b.matches,N);Ca(R),j({errors:{[z.route.id]:P},fetchers:new Map(b.fetchers)})}function Ca(R){k.has(R)&&Ol(R),oe.delete(R),H.delete(R),te.delete(R),b.fetchers.delete(R)}function Ol(R){let N=k.get(R);X(N,"Expected fetch controller: "+R),N.abort(),k.delete(R)}function Kc(R){for(let N of R){let z={state:"idle",data:Ie(N).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};b.fetchers.set(N,z)}}function $g(){let R=[];for(let N of te){let P=b.fetchers.get(N);X(P,"Expected fetcher: "+N),P.state==="loading"&&(te.delete(N),R.push(N))}Kc(R)}function Qc(R){let N=[];for(let[P,z]of H)if(z<R){let q=b.fetchers.get(P);X(q,"Expected fetcher: "+P),q.state==="loading"&&(Ol(P),H.delete(P),N.push(P))}return Kc(N),N.length>0}function Og(R,N){let P=b.blockers.get(R)||hh;return me.get(R)!==N&&me.set(R,N),P}function yo(R){b.blockers.delete(R),me.delete(R)}function Al(R,N){let P=b.blockers.get(R)||hh;X(P.state==="unblocked"&&N.state==="blocked"||P.state==="blocked"&&N.state==="blocked"||P.state==="blocked"&&N.state==="proceeding"||P.state==="blocked"&&N.state==="unblocked"||P.state==="proceeding"&&N.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+N.state),b.blockers.set(R,N),j({blockers:new Map(b.blockers)})}function Xc(R){let{currentLocation:N,nextLocation:P,historyAction:z}=R;if(me.size===0)return;me.size>1&&lo(!1,"A router only supports one blocker at a time");let q=Array.from(me.entries()),[Y,G]=q[q.length-1],Q=b.blockers.get(Y);if(!(Q&&Q.state==="proceeding")&&G({currentLocation:N,nextLocation:P,historyAction:z}))return Y}function ka(R){let N=[];return ye.forEach((P,z)=>{(!R||R(z))&&(P.cancel(),N.push(z),ye.delete(z))}),N}function Ag(R,N,P){if(u=R,m=N,d=P||(z=>z.key),!p&&b.navigation===os){p=!0;let z=Zc(b.location,b.matches);z!=null&&j({restoreScrollPosition:z})}return()=>{u=null,m=null,d=null}}function Pg(R,N){if(u&&d&&m){let P=N.map(q=>Sh(q,b.loaderData)),z=d(R,P)||R.key;u[z]=m()}}function Zc(R,N){if(u&&d&&m){let P=N.map(Y=>Sh(Y,b.loaderData)),z=d(R,P)||R.key,q=u[z];if(typeof q=="number")return q}return null}function Dg(R){l=R}return E={get basename(){return e.basename},get state(){return b},get routes(){return r},initialize:Ve,subscribe:B,enableScrollRestoration:Ag,navigate:K,fetch:Gn,revalidate:ht,createHref:R=>e.history.createHref(R),encodeLocation:R=>e.history.encodeLocation(R),getFetcher:Ie,deleteFetcher:Ca,dispose:A,getBlocker:Og,deleteBlocker:yo,_internalFetchControllers:k,_internalActiveDeferreds:ye,_internalSetRoutes:Dg},E}function Kb(e){return e!=null&&"formData"in e}function fh(e,t,n,r){r===void 0&&(r=!1);let l=typeof e=="string"?e:hn(e);if(!n||!Kb(n))return{path:l};if(n.formMethod&&!n1(n.formMethod))return{path:l,error:Wt(405,{method:n.formMethod})};let i;if(n.formData){let u=n.formMethod||"get";if(i={formMethod:t.v7_normalizeFormMethod?u.toUpperCase():u.toLowerCase(),formAction:Rp(l),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},en(i.formMethod))return{path:l,submission:i}}let a=pn(l),s=Tp(n.formData);return r&&a.search&&Lp(a.search)&&s.append("index",""),a.search="?"+s,{path:hn(a),submission:i}}function Qb(e,t){let n=e;if(t){let r=e.findIndex(l=>l.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function mh(e,t,n,r,l,i,a,s,u,d,m,p,v){let x=v?Object.values(v)[0]:p?Object.values(p)[0]:void 0,T=e.createURL(t.location),E=e.createURL(l),b=i||T.toString()===E.toString()||T.search!==E.search,g=v?Object.keys(v)[0]:void 0,f=Qb(n,g).filter((w,F)=>{if(w.route.lazy)return!0;if(w.route.loader==null)return!1;if(Xb(t.loaderData,t.matches[F],w)||a.some(L=>L===w.route.id))return!0;let C=t.matches[F],k=w;return ph(w,ne({currentUrl:T,currentParams:C.params,nextUrl:E,nextParams:k.params},r,{actionResult:x,defaultShouldRevalidate:b||kp(C,k)}))}),y=[];return u.forEach((w,F)=>{if(!n.some(O=>O.route.id===w.routeId))return;let C=jr(d,w.path,m);if(!C){y.push(ne({key:F},w,{matches:null,match:null}));return}let k=lu(C,w.path);if(s.includes(F)){y.push(ne({key:F,matches:C,match:k},w));return}ph(k,ne({currentUrl:T,currentParams:t.matches[t.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:x,defaultShouldRevalidate:b}))&&y.push(ne({key:F,matches:C,match:k},w))}),[f,y]}function Xb(e,t,n){let r=!t||n.route.id!==t.route.id,l=e[n.route.id]===void 0;return r||l}function kp(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function ph(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function gh(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let l=n[e.id];X(l,"No route found in manifest");let i={};for(let a in r){let u=l[a]!==void 0&&a!=="hasErrorBoundary";lo(!u,'Route "'+l.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!u&&!bb.has(a)&&(i[a]=r[a])}Object.assign(l,i),Object.assign(l,{hasErrorBoundary:t(ne({},l)),lazy:void 0})}async function Lo(e,t,n,r,l,i,a,s,u,d){a===void 0&&(a="/"),s===void 0&&(s=!1),u===void 0&&(u=!1);let m,p,v,x=b=>{let g,h=new Promise((f,y)=>g=y);return v=()=>g(),t.signal.addEventListener("abort",v),Promise.race([b({request:t,params:n.params,context:d}),h])};try{let b=n.route[e];if(n.route.lazy)if(b)p=(await Promise.all([x(b),gh(n.route,i,l)]))[0];else if(await gh(n.route,i,l),b=n.route[e],b)p=await x(b);else{if(e==="action")throw Wt(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:Ae.data,data:void 0}}else X(b,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),p=await x(b);X(p!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(b){m=Ae.error,p=b}finally{v&&t.signal.removeEventListener("abort",v)}if(t1(p)){let b=p.status;if(qb.has(b)){let f=p.headers.get("Location");if(X(f,"Redirects returned/thrown from loaders/actions must have a Location header"),Ep.test(f)){if(!s){let y=new URL(t.url),w=f.startsWith("//")?new URL(y.protocol+f):new URL(f),F=Sl(w.pathname,a)!=null;w.origin===y.origin&&F&&(f=w.pathname+w.search+w.hash)}}else{let y=r.slice(0,r.indexOf(n)+1),w=da(y).map(C=>C.pathnameBase),F=mc(f,w,new URL(t.url).pathname);if(X(hn(F),"Unable to resolve redirect location: "+f),a){let C=F.pathname;F.pathname=C==="/"?a:an([a,C])}f=hn(F)}if(s)throw p.headers.set("Location",f),p;return{type:Ae.redirect,status:b,location:f,revalidate:p.headers.get("X-Remix-Revalidate")!==null}}if(u)throw{type:m||Ae.data,response:p};let g,h=p.headers.get("Content-Type");return h&&/\bapplication\/json\b/.test(h)?g=await p.json():g=await p.text(),m===Ae.error?{type:m,error:new pc(b,p.statusText,g),headers:p.headers}:{type:Ae.data,data:g,statusCode:p.status,headers:p.headers}}if(m===Ae.error)return{type:m,error:p};if(e1(p)){var T,E;return{type:Ae.deferred,deferredData:p,statusCode:(T=p.init)==null?void 0:T.status,headers:((E=p.init)==null?void 0:E.headers)&&new Headers(p.init.headers)}}return{type:Ae.data,data:p}}function $o(e,t,n,r){let l=e.createURL(Rp(t)).toString(),i={signal:n};if(r&&en(r.formMethod)){let{formMethod:a,formEncType:s,formData:u}=r;i.method=a.toUpperCase(),i.body=s==="application/x-www-form-urlencoded"?Tp(u):u}return new Request(l,i)}function Tp(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function Zb(e,t,n,r,l){let i={},a=null,s,u=!1,d={};return n.forEach((m,p)=>{let v=t[p].route.id;if(X(!Kr(m),"Cannot handle redirect results in processLoaderData"),Ko(m)){let x=Mr(e,v),T=m.error;r&&(T=Object.values(r)[0],r=void 0),a=a||{},a[x.route.id]==null&&(a[x.route.id]=T),i[v]=void 0,u||(u=!0,s=Sp(m.error)?m.error.status:500),m.headers&&(d[v]=m.headers)}else rr(m)?(l.set(v,m.deferredData),i[v]=m.deferredData.data):i[v]=m.data,m.statusCode!=null&&m.statusCode!==200&&!u&&(s=m.statusCode),m.headers&&(d[v]=m.headers)}),r&&(a=r,i[Object.keys(r)[0]]=void 0),{loaderData:i,errors:a,statusCode:s||200,loaderHeaders:d}}function vh(e,t,n,r,l,i,a,s){let{loaderData:u,errors:d}=Zb(t,n,r,l,s);for(let m=0;m<i.length;m++){let{key:p,match:v}=i[m];X(a!==void 0&&a[m]!==void 0,"Did not find corresponding fetcher result");let x=a[m];if(Ko(x)){let T=Mr(e.matches,v==null?void 0:v.route.id);d&&d[T.route.id]||(d=ne({},d,{[T.route.id]:x.error})),e.fetchers.delete(p)}else if(Kr(x))X(!1,"Unhandled fetcher revalidation redirect");else if(rr(x))X(!1,"Unhandled fetcher deferred data");else{let T={state:"idle",data:x.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(p,T)}}return{loaderData:u,errors:d}}function yh(e,t,n,r){let l=ne({},t);for(let i of n){let a=i.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(l[a]=t[a]):e[a]!==void 0&&i.route.loader&&(l[a]=e[a]),r&&r.hasOwnProperty(a))break}return l}function Mr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function bh(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Wt(e,t){let{pathname:n,routeId:r,method:l,type:i}=t===void 0?{}:t,a="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(a="Bad Request",l&&n&&r?s="You made a "+l+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"&&(s="defer() is not supported in actions")):e===403?(a="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",s='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",l&&n&&r?s="You made a "+l.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":l&&(s='Invalid request method "'+l.toUpperCase()+'"')),new pc(e||500,a,new Error(s),!0)}function wh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Kr(n))return n}}function Rp(e){let t=typeof e=="string"?pn(e):e;return hn(ne({},t,{hash:""}))}function Jb(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function rr(e){return e.type===Ae.deferred}function Ko(e){return e.type===Ae.error}function Kr(e){return(e&&e.type)===Ae.redirect}function e1(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function t1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function n1(e){return zb.has(e.toLowerCase())}function en(e){return Bb.has(e.toLowerCase())}async function Fh(e,t,n,r,l,i){for(let a=0;a<n.length;a++){let s=n[a],u=t[a];if(!u)continue;let d=e.find(p=>p.route.id===u.route.id),m=d!=null&&!kp(d,u)&&(i&&i[u.route.id])!==void 0;rr(s)&&(l||m)&&await Np(s,r,l).then(p=>{p&&(n[a]=p||n[a])})}}async function Np(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ae.data,data:e.deferredData.unwrappedData}}catch(l){return{type:Ae.error,error:l}}return{type:Ae.data,data:e.deferredData.data}}}function Lp(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Sh(e,t){let{route:n,pathname:r,params:l}=e;return{id:n.id,pathname:r,params:l,data:t[n.id],handle:n.handle}}function lu(e,t){let n=typeof t=="string"?pn(t).search:t.search;if(e[e.length-1].route.index&&Lp(n||""))return e[e.length-1];let r=da(e);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function r1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const o1=typeof Object.is=="function"?Object.is:r1,{useState:l1,useEffect:i1,useLayoutEffect:a1,useDebugValue:s1}=us;function u1(e,t,n){const r=t(),[{inst:l},i]=l1({inst:{value:r,getSnapshot:t}});return a1(()=>{l.value=r,l.getSnapshot=t,ls(l)&&i({inst:l})},[e,r,t]),i1(()=>(ls(l)&&i({inst:l}),e(()=>{ls(l)&&i({inst:l})})),[e]),s1(r),r}function ls(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!o1(n,r)}catch{return!0}}function c1(e,t,n){return t()}const d1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",h1=!d1,f1=h1?c1:u1,m1="useSyncExternalStore"in us?(e=>e.useSyncExternalStore)(us):f1,gc=$.createContext(null),ha=$.createContext(null),co=$.createContext(null),fa=$.createContext(null),fr=$.createContext({outlet:null,matches:[]}),$p=$.createContext(null);function iu(){return iu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},iu.apply(this,arguments)}function p1(e,t){let{relative:n}=t===void 0?{}:t;xl()||X(!1);let{basename:r,navigator:l}=$.useContext(co),{hash:i,pathname:a,search:s}=El(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:an([r,a])),l.createHref({pathname:u,search:s,hash:i})}function xl(){return $.useContext(fa)!=null}function ho(){return xl()||X(!1),$.useContext(fa).location}function g1(){xl()||X(!1);let{basename:e,navigator:t}=$.useContext(co),{matches:n}=$.useContext(fr),{pathname:r}=ho(),l=JSON.stringify(da(n).map(s=>s.pathnameBase)),i=$.useRef(!1);return $.useEffect(()=>{i.current=!0}),$.useCallback(function(s,u){if(u===void 0&&(u={}),!i.current)return;if(typeof s=="number"){t.go(s);return}let d=mc(s,JSON.parse(l),r,u.relative==="path");e!=="/"&&(d.pathname=d.pathname==="/"?e:an([e,d.pathname])),(u.replace?t.replace:t.push)(d,u.state,u)},[e,t,l,r])}const v1=$.createContext(null);function y1(e){let t=$.useContext(fr).outlet;return t&&$.createElement(v1.Provider,{value:e},t)}function El(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=$.useContext(fr),{pathname:l}=ho(),i=JSON.stringify(da(r).map(a=>a.pathnameBase));return $.useMemo(()=>mc(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function b1(e,t){xl()||X(!1);let{navigator:n}=$.useContext(co),r=$.useContext(ha),{matches:l}=$.useContext(fr),i=l[l.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=ho(),d;if(t){var m;let E=typeof t=="string"?pn(t):t;s==="/"||(m=E.pathname)!=null&&m.startsWith(s)||X(!1),d=E}else d=u;let p=d.pathname||"/",v=s==="/"?p:p.slice(s.length)||"/",x=jr(e,{pathname:v}),T=x1(x&&x.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:an([s,n.encodeLocation?n.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?s:an([s,n.encodeLocation?n.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),l,r||void 0);return t&&T?$.createElement(fa.Provider,{value:{location:iu({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ne.Pop}},T):T}function w1(){let e=T1(),t=Sp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},t),n?$.createElement("pre",{style:l},n):null,i)}class F1 extends $.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?$.createElement(fr.Provider,{value:this.props.routeContext},$.createElement($p.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function S1(e){let{routeContext:t,match:n,children:r}=e,l=$.useContext(gc);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(fr.Provider,{value:t},r)}function x1(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,l=n==null?void 0:n.errors;if(l!=null){let i=r.findIndex(a=>a.route.id&&(l==null?void 0:l[a.route.id]));i>=0||X(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,a,s)=>{let u=a.route.id?l==null?void 0:l[a.route.id]:null,d=null;n&&(a.route.ErrorBoundary?d=$.createElement(a.route.ErrorBoundary,null):a.route.errorElement?d=a.route.errorElement:d=$.createElement(w1,null));let m=t.concat(r.slice(0,s+1)),p=()=>{let v=i;return u?v=d:a.route.Component?v=$.createElement(a.route.Component,null):a.route.element&&(v=a.route.element),$.createElement(S1,{match:a,routeContext:{outlet:i,matches:m},children:v})};return n&&(a.route.ErrorBoundary||a.route.errorElement||s===0)?$.createElement(F1,{location:n.location,component:d,error:u,children:p(),routeContext:{outlet:null,matches:m}}):p()},null)}var xh;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(xh||(xh={}));var Bi;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Bi||(Bi={}));function E1(e){let t=$.useContext(ha);return t||X(!1),t}function C1(e){let t=$.useContext(fr);return t||X(!1),t}function k1(e){let t=C1(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function T1(){var e;let t=$.useContext($p),n=E1(Bi.UseRouteError),r=k1(Bi.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function R1(e){let{fallbackElement:t,router:n}=e,r=$.useCallback(()=>n.state,[n]),l=m1(n.subscribe,r,r),i=$.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:u=>n.navigate(u),push:(u,d,m)=>n.navigate(u,{state:d,preventScrollReset:m==null?void 0:m.preventScrollReset}),replace:(u,d,m)=>n.navigate(u,{replace:!0,state:d,preventScrollReset:m==null?void 0:m.preventScrollReset})}),[n]),a=n.basename||"/",s=$.useMemo(()=>({router:n,navigator:i,static:!1,basename:a}),[n,i,a]);return $.createElement($.Fragment,null,$.createElement(gc.Provider,{value:s},$.createElement(ha.Provider,{value:l},$.createElement(L1,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?$.createElement(gn,null):t))),null)}function N1(e){return y1(e.context)}function M(e){X(!1)}function L1(e){let{basename:t="/",children:n=null,location:r,navigationType:l=Ne.Pop,navigator:i,static:a=!1}=e;xl()&&X(!1);let s=t.replace(/^\/*/,"/"),u=$.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof r=="string"&&(r=pn(r));let{pathname:d="/",search:m="",hash:p="",state:v=null,key:x="default"}=r,T=$.useMemo(()=>{let E=Sl(d,s);return E==null?null:{location:{pathname:E,search:m,hash:p,state:v,key:x},navigationType:l}},[s,d,m,p,v,x,l]);return T==null?null:$.createElement(co.Provider,{value:u},$.createElement(fa.Provider,{children:n,value:T}))}function gn(e){let{children:t,location:n}=e,r=$.useContext(gc),l=r&&!t?r.router.routes:au(t);return b1(l,n)}var Eh;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Eh||(Eh={}));new Promise(()=>{});function au(e,t){t===void 0&&(t=[]);let n=[];return $.Children.forEach(e,(r,l)=>{if(!$.isValidElement(r))return;let i=[...t,l];if(r.type===$.Fragment){n.push.apply(n,au(r.props.children,i));return}r.type!==M&&X(!1),!r.props.index||!r.props.children||X(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=au(r.props.children,i)),n.push(a)}),n}function $1(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pl.apply(this,arguments)}function Op(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function O1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function A1(e,t){return e.button===0&&(!t||t==="_self")&&!O1(e)}const P1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],D1=["aria-current","caseSensitive","className","end","style","to","children"];function I1(e,t){return Gb({basename:t==null?void 0:t.basename,future:t==null?void 0:t.future,history:gb({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||_1(),routes:e,detectErrorBoundary:$1}).initialize()}function _1(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=pl({},t,{errors:j1(t.errors)})),t}function j1(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,l]of t)if(l&&l.__type==="RouteErrorResponse")n[r]=new pc(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){let i=new Error(l.message);i.stack="",n[r]=i}else n[r]=l;return n}const M1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",B1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,V1=$.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:a,state:s,target:u,to:d,preventScrollReset:m}=t,p=Op(t,P1),{basename:v}=$.useContext(co),x,T=!1;if(typeof d=="string"&&B1.test(d)&&(x=d,M1)){let h=new URL(window.location.href),f=d.startsWith("//")?new URL(h.protocol+d):new URL(d),y=Sl(f.pathname,v);f.origin===h.origin&&y!=null?d=y+f.search+f.hash:T=!0}let E=p1(d,{relative:l}),b=q1(d,{replace:a,state:s,target:u,preventScrollReset:m,relative:l});function g(h){r&&r(h),h.defaultPrevented||b(h)}return $.createElement("a",pl({},p,{href:x||E,onClick:T||i?r:g,ref:n,target:u}))}),z1=$.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:l=!1,className:i="",end:a=!1,style:s,to:u,children:d}=t,m=Op(t,D1),p=El(u,{relative:m.relative}),v=ho(),x=$.useContext(ha),{navigator:T}=$.useContext(co),E=T.encodeLocation?T.encodeLocation(p).pathname:p.pathname,b=v.pathname,g=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;l||(b=b.toLowerCase(),g=g?g.toLowerCase():null,E=E.toLowerCase());let h=b===E||!a&&b.startsWith(E)&&b.charAt(E.length)==="/",f=g!=null&&(g===E||!a&&g.startsWith(E)&&g.charAt(E.length)==="/"),y=h?r:void 0,w;typeof i=="function"?w=i({isActive:h,isPending:f}):w=[i,h?"active":null,f?"pending":null].filter(Boolean).join(" ");let F=typeof s=="function"?s({isActive:h,isPending:f}):s;return $.createElement(V1,pl({},m,{"aria-current":y,className:w,ref:n,style:F,to:u}),typeof d=="function"?d({isActive:h,isPending:f}):d)});var Ch;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Ch||(Ch={}));var kh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(kh||(kh={}));function q1(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:a}=t===void 0?{}:t,s=g1(),u=ho(),d=El(e,{relative:a});return $.useCallback(m=>{if(A1(m,n)){m.preventDefault();let p=r!==void 0?r:hn(u)===hn(d);s(e,{replace:p,state:l,preventScrollReset:i,relative:a})}},[u,s,d,r,l,n,e,i,a])}const J=({to:e,end:t,text:n,children:r,className:l=""})=>o(z1,{to:e,end:t,className:l,children:n||r});function U1(e){return typeof e=="boolean"}function Un(e){return typeof e=="string"}function fo(e){return Array.isArray(e)}function vc(e){return typeof e=="function"}function H1(e){return e instanceof RegExp}function yc(e){return typeof e=="object"&&!fo(e)&&!Ap(e)}function W1(e){return e===void 0}function Ap(e){return e===null}function ma(e){return!(W1(e)||Ap(e))}function Y1(e){return!ma(e)}function io(...e){throw new Error(e.join(""))}function Qr(){}function G1(){return Intl.DateTimeFormat().resolvedOptions().locale}G1();function Pp(e){return Y1(e)?[]:Un(e)?e.length?e.split(/,\s*|\s+/):[]:fo(e)?e:[e]}function Dp(e,t=!0,n={}){return yc(e)?e:Pp(e).reduce((r,l)=>(r[l]=vc(t)?t(l):t,r),n)}function K1(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function Q1(e){if(vc(e))return e;if(H1(e))return t=>e.test(t);if(yc(e))return t=>!!e[t];if(fo(e)||Un(e)){const t=Dp(e);return n=>!!t[n]}io("Invalid selector() specification: "+e)}const X1=(e,t,n={})=>{let r={},l={delete:!1,...n};const i=Q1(t);return Object.keys(e).map(a=>{if(i(a)){let s=e[a];l.delete&&delete e[a],l.key&&(a=l.key(a)),l.value&&(s=l.value(s)),r[a]=s}}),r};function Z1(e){return new Promise(t=>setTimeout(t,e))}function J1({icon:e,transform:t,children:n}){const{width:r,height:l}=e,i=r/2,a=l/2,s=Un(t)?e0(t):t,u=s.x*r/16,d=s.y*l/16,m=s.size/16*(s.flipX?-1:1),p=s.size/16*(s.flipY?-1:1),v=s.rotate;return o("g",{transform:`translate(${i} ${a})`,children:o("g",{transform:`translate(${u}, ${d}) scale(${m}, ${p}) rotate(${v} 0 0)`,children:o("g",{transform:`translate(-${i} -${a})`,children:n})})})}function e0(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const l=r.toLowerCase().split("-"),i=l[0],a=l.slice(1).join("-");if(i&&a==="h")return n.flipX=!0,n;if(i&&a==="v")return n.flipY=!0,n;const s=parseFloat(a);if(isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)}const t0=16,wn=e=>`${t0*e}px`,n0={default:{fill:"none",stroke:"currentColor",strokeWidth:wn(4),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},line:{fill:"none",stroke:"currentColor"},fill:{fill:"currentColor"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinner:{strokeWidth:wn(.5)},thin:{strokeWidth:wn(1)},light:{strokeWidth:wn(2)},medium:{strokeWidth:wn(3)},heavy:{strokeWidth:wn(4)},thick:{strokeWidth:wn(5)},thicker:{strokeWidth:wn(6)}},r0=n0.default,o0={angle:"M448.075,320.014L256.031,127.969L63.925,320.075","angle-up":{base:"angle"},"angle-right":{base:"angle",transform:"rotate-90"},"angle-down":{base:"angle",transform:"rotate-180"},"angle-left":{base:"angle",transform:"rotate-270"},angles:"M448,256L256,64L64,256M448,448L256,256L64,448",arrow:"M256,448L256,64L112,208L256,64L400,208L256,64M112,208L120,200M400,208L392,200",arrows:"M144,176L256,64L256,448L144,336L256,448L368,336L256,448L256,64L368,176L256,64M144,176L152,168M368,176L360,168M144,336L152,344M368,336L360,344",caret:"M267 139a15 15 0 0 0-22 0L90 294a15 15 0 0 0 10 26h312a15 15 0 0 0 10-26L267 139Z",check:"M64,268L184,388L448,124",circle:"M256,64C309,64 357,86 392,121C427,155 448,203 448,256C448,362 362,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64Z",cross:"M424,88L88,424M88,88L424,424",point:"M112,208L256,64L400,208L304,208L304,448L208,448L208,208L112,208Z",points:"M112,208L256,64L400,208L304,208L304,304L400,304L255.989,448.011L110.877,302.898L208,304L208,208L112,208Z",square:"M64,64L448,64L448,448L64,448Z",square10:"M448 102c0-21-17-38-38-38H102c-21 0-38 17-38 38v308c0 21 17 38 38 38h308c21 0 38-17 38-38V102Z",square20:"M448,141C448,98 413,64 371,64L141,64C98,64 64,98 64,141L64,371C64,414 98,448 141,448L371,448C414,448 448,414 448,371L448,141Z",square30:"M448,179C448,116 396,64 333,64L179,64C116,64 64,116 64,179L64,333C64,396 116,448 179,448L333,448C396,448 448,396 448,333L448,179Z",square40:"M448,218C448,133 379,64 294,64L218,64C133,64 64,133 64,218L64,294C64,379 133,448 218,448L294,448C379,448 448,379 448,294L448,218Z"},Ip=e=>{const t=o0[e]||io(`Invalid icon name: ${e}`);if(Un(t))return{width:512,height:512,path:t};if(t.base)return{...Ip(t.base),...t}},l0=({name:e,className:t="",...n})=>{const r=Ip(e),{minx:l=0,miny:i=0,width:a,height:s,transform:u}=r,d=r0;return o("svg",{"aria-hidden":"true",focusable:"false",className:`icon ${t}`,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`${l} ${i} ${a} ${s}`,style:d,onClick:n.onClick,children:u?o(J1,{name:e,icon:r,transform:u,className:t,children:o(Th,{name:e,icon:r,style:d,className:t})}):o(Th,{name:e,icon:r,style:d,className:t})})},Th=({icon:e,style:t,className:n=""})=>{const{paths:r,path:l}=e;if(r)return r.map((i,a)=>o(Rh,{path:i,style:t,className:n},a));if(l)return o(Rh,{path:l,style:t,className:n});console.log("No path or paths for icon")},Rh=({path:e,style:t,className:n})=>Un(e)?o("path",{fill:"currentColor",d:e,style:t,className:n}):o(i0,{path:e,style:t,className:n}),i0=({path:e,style:t})=>{const{d:n,opacity:r=null}=e;return o("path",{d:n,fill:"currentColor",opacity:r,style:t})},Br={title:"Tutorial",url:"/tutorial",items:[["simple-form","Defining a Form"],["field-validation","Field Validation"],["form-validation","Form Validation"],["form-submission","Form Submission"],["submission-response","Submission Response"],["submission-errors","Submission Errors"],["complete-registration","Complete Registration Form"],["edit-form","Edit Form"],["headless-fields","Headless Fields"]]},_p={title:"Components",url:"/components",items:["component:Form","component:Field","component:Fields","component:Fieldset","component:Submit","component:Reset","component:Cancel","component:ResetSubmit","component:CancelSubmit","component:CancelResetSubmit","component:Changed","component:Label","component:Errors","component:Debug"]},a0={title:"Form",url:"/form",items:[{heading:"Properties"},["properties","Properties - TODO"],["validation","Validation"],["fields",o("code",{children:"fields - TODO"},"fields")],["values",o("code",{children:"values - TODO"},"values")],["hidden",o("code",{children:"hidden - TODO"},"hidden")],["validate",o("code",{children:"validate - TODO"},"validate")],["onSubmit",o("code",{children:"onSubmit - TODO"},"onsubmit")],["onSuccess",o("code",{children:"onSuccess - TODO"},"onsuccess")],["onError",o("code",{children:"onError - TODO"},"onsuccess")],["showErrors",o("code",{children:"showErrors - TODO"},"showerrors")],{heading:"Functions"},["setValues",o("code",{children:"setValues() - TODO"},"setValues")],["setFocus",o("code",{children:"setFocus()"},"setFocus")],{heading:"Styling"},["className",o("code",{children:"className - TODO"},"classname")],["validatingClass",o("code",{children:"validatingClass - TODO"},"validatingClass")],["validClass",o("code",{children:"validClass - TODO"},"validClass")],["invalidClass",o("code",{children:"invalidClass - TODO"},"invalidClass")],["errorsClass",o("code",{children:"errorsClass - TODO"},"errorsClass")],["fieldClass",o("code",{children:"fieldClass - TODO"},"fieldClass")]]},s0={title:"Field",url:"/field",items:[{heading:"Properties"},["prefix-suffix",c("span",{children:[o("code",{children:"prefix"})," and ",o("code",{children:"suffix"})]},"prefix-suffix")],{heading:"Validation"},"field:required","field:showRequired","field:requiredLabel","field:requiredMessage","field:showOptional","field:optionalLabel","field:prepareValue","field:validate","field:validateOnBlur","field:validateOnChange",{heading:"Events"},"field:onFocus","field:onBlur","field:onChange","field:onValid","field:onInvalid",{heading:"Functions"},"field:setFocus","field:setValue","field:reset"]},su={title:"Input Types",url:"/inputs",items:["input:Text","input:TextArea","input:Checkbox","input:Radio","input:Select","input:Hidden",["number","Number, Date, etc"]]},bc={"component:Form":{url:"/components/Form",text:"Form",about:"Main component for a form",menu:a0},"component:Field":{url:"/components/Field",text:"Field",about:"Render a form field",menu:s0},"component:Fields":{url:"/components/Fields",text:"Fields",about:"Render multiple form fields"},"component:Fieldset":{url:"/components/Fieldset",text:"Fieldset",about:"Render a set of fields"},"component:Changed":{url:"/components/Changed",text:"Changed",about:"Renders children only when a form state has changed"},"component:Submit":{url:"/components/Submit",text:"Submit",about:"Render a form submit button"},"component:Reset":{url:"/components/Reset",text:"Reset",about:"Render a form reset button"},"component:Cancel":{url:"/components/Cancel",text:"Cancel",about:"Render a cancel button"},"component:ResetSubmit":{url:"/components/ResetSubmit",text:"ResetSubmit",about:"Render reset and submit buttons"},"component:CancelSubmit":{url:"/components/CancelSubmit",text:"CancelSubmit",about:"Render cancel and submit buttons"},"component:CancelResetSubmit":{url:"/components/CancelResetSubmit",text:"CancelResetSubmit",about:"Render cancel, reset and submit buttons"},"component:Label":{url:"/components/Label",text:"Label",about:"Render a label for a form field"},"component:Errors":{url:"/components/Errors",text:"Errors",about:"Render form errors"},"component:Debug":{url:"/components/Debug",text:"Debug",about:"Render debugging information for a form"},"form:setFocus":{url:"/components/Form/setFocus",code:"setFocus",about:"Focus a form field"},"form:setValues":{url:"/components/Form/setValues",code:"setValues",about:"Set form values"},"field:onBlur":{url:"/components/Field/onBlur",code:"onBlur",about:" Define a handler to be called when a field loses focus"},"field:onChange":{url:"/components/Field/onChange",code:"onChange",about:"Define a handler to be called when a field value changes"},"field:onFocus":{url:"/components/Field/onFocus",code:"onFocus",about:"Define a handler to be called when a field gains focus"},"field:onInvalid":{url:"/components/Field/onInvalid",code:"onInvalid",about:"Define a handler to be called when a field fails validation"},"field:onValid":{url:"/components/Field/onValid",code:"onValid",about:"Define a handler to be called when a field passes validation"},"field:optionalLabel":{url:"/components/Field/optionalLabel",code:"optionalLabel",about:"Customise the label displayed for optional fields"},"field:prefix":{url:"/components/Field/prefix",code:"prefix",about:"Add a prefix to a field"},"field:prepareValue":{url:"/components/Field/prepareValue",code:"prepareValue",about:"Define a handler to prepare the value entered for a field"},"field:required":{url:"/components/Field/required",code:"required",about:"Mark a field as being required"},"field:requiredLabel":{url:"/components/Field/requiredLabel",code:"requiredLabel",about:"Customise the label displayed for required fields"},"field:requiredMessage":{url:"/components/Field/requiredMessage",code:"requiredMessage",about:"Customise the error message generated for required fields"},"field:reset":{url:"/components/Field/reset",code:"reset",about:"Reset a field to its original state"},"field:setFocus":{url:"/components/Field/setFocus",code:"setFocus",about:"Focus a field"},"field:setValue":{url:"/components/Field/setValue",code:"setValue",about:"Set a field value"},"field:showOptional":{url:"/components/Field/showOptional",code:"showOptional",about:"Enable the label shown for optional fields"},"field:showRequired":{url:"/components/Field/showRequired",code:"showRequired",about:"Enable the label shown for required fields"},"field:suffix":{url:"/components/Field/suffix",code:"suffix",about:"Add a suffix to a field"},"field:validate":{url:"/components/Field/validate",code:"validate",about:"Handler to validate field input"},"field:validateOnBlur":{url:"/components/Field/validateOnBlur",code:"validateOnBlur",about:"Run field validation when it loses focus"},"field:validateOnChange":{url:"/components/Field/validateOnChange",code:"validateOnChange",about:"Run field validation when the value changes"},"input:Text":{url:"/inputs/Text",text:"Text",about:"Text input"},"input:TextArea":{url:"/inputs/TextArea",text:"TextArea",about:"Text area input"},"input:Checkbox":{url:"/inputs/Checkbox",text:"Checkbox",about:"Checkbox input"},"input:Radio":{url:"/inputs/Radio",text:"Radio",about:"Radio buttons input"},"input:Select":{url:"/inputs/Select",text:"Select",about:"Select list input"},"input:Hidden":{url:"/inputs/Hidden",text:"Hidden",about:"Hidden input"}},Hn=({to:e})=>{const t=bc[e]||io(`Invalid CodeLink specified: ${e}`),{url:n,code:r,text:l}=t;return o(J,{to:n,children:r?o("code",{children:r}):l})},Vi=()=>o(J,{to:"/components/cancel",children:o("code",{children:"Cancel"})}),u0=()=>o(J,{to:"/components/debug",children:o("code",{children:"Debug"})}),jp=()=>o(J,{to:"/components/errors",children:o("code",{children:"Errors"})}),ae=()=>o(J,{to:"/components/form",children:o("code",{children:"Form"})}),Mp=()=>o(J,{to:"/components/form/setFocus",children:o("code",{children:"setFocus"})}),c0=()=>o(J,{to:"/components/form/setValues",children:o("code",{children:"setValues"})}),he=()=>o(J,{to:"/components/field",children:o("code",{children:"Field"})}),Bp=()=>o(J,{to:"/components/fields",children:o("code",{children:"Fields"})}),d0=()=>o(J,{to:"/components/fieldset",children:o("code",{children:"Fieldset"})}),h0=()=>o(J,{to:"/components/field/layout",children:o("code",{children:"FieldLayout"})}),f0=()=>o(J,{to:"/components/field/label",children:o("code",{children:"Label"})}),zi=()=>o(J,{to:"/components/reset",children:o("code",{children:"Reset"})}),jn=()=>o(J,{to:"/components/submit",children:o("code",{children:"Submit"})}),m0=()=>o(J,{to:"/inputs/checkbox",children:o("code",{children:"Checkbox"})}),p0=()=>o(J,{to:"/inputs/radio",children:o("code",{children:"Radio"})}),g0=()=>o(J,{to:"/inputs/select",children:o("code",{children:"Select"})}),v0=()=>o(Hn,{to:"field:optionalLabel"}),fn=()=>o(Hn,{to:"field:required"}),y0=()=>o(Hn,{to:"field:requiredMessage"}),b0=()=>o(Hn,{to:"field:showRequired"}),w0=()=>o(Hn,{to:"field:showOptional"}),F0=()=>o(Hn,{to:"field:validateOnBlur"}),wc=({item:e,open:t,showAbout:n=!1,url:r=""})=>{if(fo(e)){const[l,i,a]=e;return c("li",{children:[o(J,{to:`${r}/${l}`,text:i}),a&&t&&o(uu,{...a,url:`${r}/${l}`})]})}if(Un(e)){const l=bc[e]||io(`Invalid MenuItem specified: ${e}`),{about:i,menu:a}=l;return c("li",{children:[o(Hn,{to:e}),!!n&&!!i&&o("span",{className:"about",children:i}),a&&t&&o(uu,{...a,url:l.url})]})}if(yc(e)&&e.heading)return o("li",{children:o("h4",{children:e.heading})});io(`Invalid menu item: ${e}`)},uu=({url:e,items:t=[]})=>{const r=El().pathname.slice(0,e.length+1),l=r===e+"/"||r===e;return l&&o("ul",{className:"menu",children:t.map((i,a)=>o(wc,{item:i,url:e,open:l},a))})},Oo=({title:e,url:t,items:n=[]})=>{const i=El().pathname.slice(0,t.length)===t;return c("div",{className:"menu",children:[o("div",{className:`flex space menu-head ${i?"open":"closed"}`,children:c(J,{to:t,className:"flex center",children:[o(l0,{name:i?"angle-down":"angle-right"}),o("h4",{children:e})]})}),o(uu,{url:t,items:n})]})},qi=e=>`/react-formula//${e}`.replace(/\/+/,"/"),S0="0.0.1",x0="2023-05-05",E0=e=>$.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 772 256",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},$.createElement("path",{d:"M705.362,44.241C676.785,44.241 652.581,63.324 644.824,89.414C637.985,86.871 630.593,85.481 622.879,85.481C615.167,85.481 607.773,86.871 600.935,89.413C593.178,63.322 568.976,44.241 540.4,44.241C523.16,44.241 507.517,51.194 496.112,62.433C479.352,50.961 459.096,44.24 437.299,44.24L375.438,44.24C374.563,44.24 373.691,44.258 372.824,44.293C363.916,20.211 340.72,3 313.58,3C285.001,3 260.811,22.091 253.056,48.184C246.214,45.638 238.817,44.24 231.099,44.24L107.379,44.24C49.824,44.24 3,91.064 3,148.618C3,206.175 49.824,252.999 107.379,252.999L169.24,252.999C180.47,252.999 191.023,250.054 200.17,244.892C209.316,250.054 219.869,252.999 231.1,252.999C246.854,252.999 261.267,247.186 272.34,237.61C283.413,247.186 297.825,252.999 313.579,252.999L437.3,252.999C462.204,252.999 485.096,244.228 503.058,229.617C518.118,244.081 538.54,252.999 561.02,252.999L684.741,252.999C730.928,252.999 768.503,215.425 768.503,169.241L768.504,107.379C768.5,72.565 740.176,44.241 705.362,44.241ZM251.718,189.862C251.718,201.25 242.486,210.481 231.097,210.481C219.709,210.481 210.477,201.25 210.477,189.862L210.477,128.001L107.377,128.001C95.989,128.001 86.757,137.232 86.757,148.62C86.757,160.009 95.989,169.241 107.377,169.241L169.238,169.242C180.625,169.242 189.857,178.474 189.857,189.861C189.857,201.25 180.625,210.481 169.238,210.481L107.377,210.481C73.213,210.481 45.517,182.786 45.517,148.62C45.517,114.457 73.213,86.761 107.377,86.761L231.097,86.761C242.486,86.761 251.718,95.993 251.718,107.381L251.718,189.862ZM725.98,169.241C725.98,192.015 707.515,210.48 684.738,210.48L561.017,210.48C538.244,210.48 519.779,192.015 519.779,169.241L519.779,107.38C519.779,95.992 529.01,86.76 540.399,86.76C551.787,86.76 561.018,95.992 561.018,107.38L561.018,169.241L602.258,169.241L602.258,148.619C602.258,137.231 611.49,128 622.878,128C634.266,128 643.498,137.231 643.498,148.619L643.498,169.241L684.737,169.241L684.74,107.38C684.74,95.992 693.972,86.76 705.361,86.76C716.749,86.76 725.98,95.992 725.98,107.38C725.981,107.39 725.98,169.241 725.98,169.241ZM437.297,210.481L313.576,210.481C302.188,210.481 292.956,201.25 292.956,189.861L292.957,66.141C292.957,54.753 302.19,45.521 313.578,45.521C324.967,45.521 334.198,54.753 334.198,66.141L334.197,169.242L437.297,169.242C448.684,169.242 457.917,160.01 457.917,148.62C457.917,137.233 448.684,128.002 437.297,128.002L375.438,128.001C364.049,128.001 354.817,118.769 354.817,107.381C354.817,95.993 364.049,86.761 375.438,86.761L437.297,86.761C471.461,86.761 499.158,114.456 499.158,148.62C499.158,182.784 471.461,210.481 437.297,210.481Z",fill:"currentColor"}),$.createElement("path",{d:"M251.718,189.862C251.718,201.25 242.486,210.481 231.097,210.481C219.709,210.481 210.477,201.25 210.477,189.862L210.477,128.001L107.377,128.001C95.989,128.001 86.757,137.232 86.757,148.62C86.757,160.009 95.989,169.241 107.377,169.241L169.238,169.242C180.625,169.242 189.857,178.474 189.857,189.861C189.857,201.25 180.625,210.481 169.238,210.481L107.377,210.481C73.213,210.481 45.517,182.786 45.517,148.62C45.517,114.457 73.213,86.761 107.377,86.761L231.097,86.761C242.486,86.761 251.718,95.993 251.718,107.381L251.718,189.862Z",style:{fill:"white"}}),$.createElement("path",{d:"M725.98,169.241C725.98,192.015 707.515,210.48 684.738,210.48L561.017,210.48C538.244,210.48 519.779,192.015 519.779,169.241L519.779,107.38C519.779,95.992 529.01,86.76 540.399,86.76C551.787,86.76 561.018,95.992 561.018,107.38L561.018,169.241L602.258,169.241L602.258,148.619C602.258,137.231 611.49,128 622.878,128C634.266,128 643.498,137.231 643.498,148.619L643.498,169.241L684.737,169.241L684.74,107.38C684.74,95.992 693.972,86.76 705.361,86.76C716.749,86.76 725.98,95.992 725.98,107.38C725.981,107.39 725.98,169.241 725.98,169.241Z",style:{fill:"white"}}),$.createElement("path",{d:"M437.297,210.481L313.576,210.481C302.188,210.481 292.956,201.25 292.956,189.861L292.957,66.141C292.957,54.753 302.19,45.521 313.578,45.521C324.967,45.521 334.198,54.753 334.198,66.141L334.197,169.242L437.297,169.242C448.684,169.242 457.917,160.01 457.917,148.62C457.917,137.233 448.684,128.002 437.297,128.002L375.438,128.001C364.049,128.001 354.817,118.769 354.817,107.381C354.817,95.993 364.049,86.761 375.438,86.761L437.297,86.761C471.461,86.761 499.158,114.456 499.158,148.62C499.158,182.784 471.461,210.481 437.297,210.481Z",style:{fill:"white"}})),C0=()=>c(Ee,{children:[o("h4",{children:"Overview"}),o("div",{className:"menu",children:c("ul",{className:"menu mar-b-2",children:[o("li",{children:o(J,{to:"/",end:!0,text:"Home"})}),o("li",{children:o(J,{to:"/getting-started",text:"Getting Started"})}),o("li",{children:o(J,{to:"/why",text:"Why Does This Exist?"})})]})}),o(Oo,{...Br}),o(Oo,{..._p}),o(Oo,{...su}),o(Oo,{title:"Customising",url:"/customising",items:[["components","Custom Components"]]}),o(Oo,{title:"Styling",url:"/styling",items:[["forms","Form Styles"],["fields","Field Styles"],["variables","SASS Variables"]]}),o("h4",{children:"Tests"}),c("ul",{className:"menu",children:[o("li",{children:o(J,{to:"/test-form",text:"Test Form"})}),o("li",{children:o(J,{to:"/test-layout",text:"Layout Test"})})]}),o("footer",{children:c("div",{className:"notes",children:[c("div",{children:["Version ",S0]}),o("a",{href:"https://github.com/abw",children:o(E0,{})}),o("div",{children:x0})]})})]});function k0(){const{pathname:e}=ho();return $.useEffect(()=>T0(document.getElementById("content")),[e]),null}function T0(e){e==null||e.scrollTo({top:0,left:0,behavior:"smooth"})}const R0=()=>c("div",{id:"layout",children:[o(k0,{}),o("aside",{id:"sidebar",children:o(C0,{})}),o("main",{id:"content",children:o(N1,{})})]}),N0=e=>$.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},$.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:"currentColor"})),L0=()=>c("div",{className:"home",children:[o("h1",{children:"@abw/react-formula"}),o("a",{href:"https://github.com/abw/react-formula",className:"github",children:o(N0,{})}),c("div",{className:"pic-side",children:[o("img",{src:qi("react-formula.svg")}),c("div",{className:"blurb",children:[c("p",{className:"intro",children:[o("code",{className:"code",children:"react-formula"})," is yet another React form component library."]}),c("p",{className:"subintro",children:["Yes, I know, there are plenty of other form libraries out there. Some of them are good, some are excellent, and some are not so good. This one isn't necessarily any better or worse than any other one. At best it's just a bit ",o(J,{to:"/why",text:"different"}),"."]}),c("p",{className:"subintro",children:["Should you use it?  Probably not. If you haven't tried it then"," ",o("a",{href:"https://final-form.org/react",children:"React Final Form"})," is definitely one of the better existing form libraries.  I'd recommend you start there.  Seriously, I'm not looking to attract new users or change the world.  Been there, done that, burned out."]})]})]}),c("div",{className:"warning",children:[o("h3",{children:"WARNING - THIS IS A WORK IN PROGRESS"}),o("p",{children:"Do not use this library unless you like living dangerously."}),o("p",{children:"It's in the process of being re-written and it's special. Look... see... still got the uh... the ol' tagger on it... see... never even played it... Don't touch it!  Don't touch it! No one... no one... no!  Don't touch it. Don't point, even. No.  It can't be played... never... I mean..."}),o("p",{children:"Don't even look at it.  You've seen enough of that one."})]}),o("p",{className:"intro",children:"Still with me?  OK then, but proceed at your own risk."}),o("div",{children:c("ul",{className:"large menu",children:[o("li",{children:o(J,{to:"getting-started",children:"Getting Started"})}),o("li",{children:o(J,{to:"why",children:"Why Does This Exist?"})})]})}),c("div",{className:"badger",children:[o("img",{src:qi("badger.svg"),alt:"badger"}),o("div",{className:"caption",children:"Built by Badgers"})]})]});function $0(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function O0(e,t){if(e==null)return{};var n=$0(e,t),r,l;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)r=i[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function cu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A0(e){if(Array.isArray(e))return cu(e)}function P0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function D0(e,t){if(e){if(typeof e=="string")return cu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cu(e,t)}}function I0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _0(e){return A0(e)||P0(e)||D0(e)||I0()}function gl(e){return gl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gl(e)}function j0(e,t){if(gl(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(gl(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function M0(e){var t=j0(e,"string");return gl(t)==="symbol"?t:String(t)}function Vp(e,t,n){return t=M0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function du(){return du=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},du.apply(this,arguments)}function Nh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function Vr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nh(Object(n),!0).forEach(function(r){Vp(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function B0(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var is={};function V0(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return is[t]||(is[t]=B0(e)),is[t]}function z0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter(function(i){return i!=="token"}),l=V0(r);return l.reduce(function(i,a){return Vr(Vr({},i),n[a])},t)}function Lh(e){return e.join(" ")}function q0(e,t){var n=0;return function(r){return n+=1,r.map(function(l,i){return zp({node:l,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(i)})})}}function zp(e){var t=e.node,n=e.stylesheet,r=e.style,l=r===void 0?{}:r,i=e.useInlineStyles,a=e.key,s=t.properties,u=t.type,d=t.tagName,m=t.value;if(u==="text")return m;if(d){var p=q0(n,i),v;if(!i)v=Vr(Vr({},s),{},{className:Lh(s.className)});else{var x=Object.keys(n).reduce(function(g,h){return h.split(".").forEach(function(f){g.includes(f)||g.push(f)}),g},[]),T=s.className&&s.className.includes("token")?["token"]:[],E=s.className&&T.concat(s.className.filter(function(g){return!x.includes(g)}));v=Vr(Vr({},s),{},{className:Lh(E)||void 0,style:z0(s.className,Object.assign({},s.style,l),n)})}var b=p(t.children);return et.createElement(d,du({key:a},v),b)}}const U0=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var H0=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function $h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function Yt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$h(Object(n),!0).forEach(function(r){Vp(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$h(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var W0=/\n/g;function Y0(e){return e.match(W0)}function G0(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map(function(l,i){var a=i+n;return et.createElement("span",{key:"line-".concat(i),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(a):r},"".concat(a,`
`))})}function K0(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,l=r===void 0?{float:"left",paddingRight:"10px"}:r,i=e.numberStyle,a=i===void 0?{}:i,s=e.startingLineNumber;return et.createElement("code",{style:Object.assign({},n,l)},G0({lines:t.replace(/\n$/,"").split(`
`),style:a,startingLineNumber:s}))}function Q0(e){return"".concat(e.toString().length,".25em")}function qp(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function Up(e,t,n){var r={display:"inline-block",minWidth:Q0(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},l=typeof e=="function"?e(t):e,i=Yt(Yt({},r),l);return i}function fi(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,l=e.largestLineNumber,i=e.showInlineLineNumbers,a=e.lineProps,s=a===void 0?{}:a,u=e.className,d=u===void 0?[]:u,m=e.showLineNumbers,p=e.wrapLongLines,v=typeof s=="function"?s(n):s;if(v.className=d,n&&i){var x=Up(r,n,l);t.unshift(qp(n,x))}return p&m&&(v.style=Yt(Yt({},v.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:v,children:t}}function Hp(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var l=e[r];if(l.type==="text")n.push(fi({children:[l],className:_0(new Set(t))}));else if(l.children){var i=t.concat(l.properties.className);Hp(l.children,i).forEach(function(a){return n.push(a)})}}return n}function X0(e,t,n,r,l,i,a,s,u){var d,m=Hp(e.value),p=[],v=-1,x=0;function T(w,F){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return fi({children:w,lineNumber:F,lineNumberStyle:s,largestLineNumber:a,showInlineLineNumbers:l,lineProps:n,className:C,showLineNumbers:r,wrapLongLines:u})}function E(w,F){if(r&&F&&l){var C=Up(s,F,a);w.unshift(qp(F,C))}return w}function b(w,F){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||C.length>0?T(w,F,C):E(w,F)}for(var g=function(){var F=m[x],C=F.children[0].value,k=Y0(C);if(k){var L=C.split(`
`);L.forEach(function(O,H){var te=r&&p.length+i,oe={type:"text",value:"".concat(O,`
`)};if(H===0){var ye=m.slice(v+1,x).concat(fi({children:[oe],className:F.properties.className})),me=b(ye,te);p.push(me)}else if(H===L.length-1){var be=m[x+1]&&m[x+1].children&&m[x+1].children[0],Ve={type:"text",value:"".concat(O)};if(be){var A=fi({children:[Ve],className:F.properties.className});m.splice(x+1,0,A)}else{var B=[Ve],j=b(B,te,F.properties.className);p.push(j)}}else{var U=[oe],K=b(U,te,F.properties.className);p.push(K)}}),v=x}x++};x<m.length;)g();if(v!==m.length-1){var h=m.slice(v+1,m.length);if(h&&h.length){var f=r&&p.length+i,y=b(h,f);p.push(y)}}return t?p:(d=[]).concat.apply(d,p)}function Z0(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map(function(l,i){return zp({node:l,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(i)})})}function Wp(e){return e&&typeof e.highlightAuto<"u"}function J0(e){var t=e.astGenerator,n=e.language,r=e.code,l=e.defaultCodeValue;if(Wp(t)){var i=U0(t,n);return n==="text"?{value:l,language:"text"}:i?t.highlight(n,r):t.highlightAuto(r)}try{return n&&n!=="text"?{value:t.highlight(r,n)}:{value:l}}catch{return{value:l}}}function ew(e,t){return function(r){var l=r.language,i=r.children,a=r.style,s=a===void 0?t:a,u=r.customStyle,d=u===void 0?{}:u,m=r.codeTagProps,p=m===void 0?{className:l?"language-".concat(l):void 0,style:Yt(Yt({},s['code[class*="language-"]']),s['code[class*="language-'.concat(l,'"]')])}:m,v=r.useInlineStyles,x=v===void 0?!0:v,T=r.showLineNumbers,E=T===void 0?!1:T,b=r.showInlineLineNumbers,g=b===void 0?!0:b,h=r.startingLineNumber,f=h===void 0?1:h,y=r.lineNumberContainerStyle,w=r.lineNumberStyle,F=w===void 0?{}:w,C=r.wrapLines,k=r.wrapLongLines,L=k===void 0?!1:k,O=r.lineProps,H=O===void 0?{}:O,te=r.renderer,oe=r.PreTag,ye=oe===void 0?"pre":oe,me=r.CodeTag,be=me===void 0?"code":me,Ve=r.code,A=Ve===void 0?(Array.isArray(i)?i[0]:i)||"":Ve,B=r.astGenerator,j=O0(r,H0);B=B||e;var U=E?et.createElement(K0,{containerStyle:y,codeStyle:p.style||{},numberStyle:F,startingLineNumber:f,codeString:A}):null,K=s.hljs||s['pre[class*="language-"]']||{backgroundColor:"#fff"},ht=Wp(B)?"hljs":"prismjs",le=x?Object.assign({},j,{style:Object.assign({},K,d)}):Object.assign({},j,{className:j.className?"".concat(ht," ").concat(j.className):ht,style:Object.assign({},d)});if(L?p.style=Yt(Yt({},p.style),{},{whiteSpace:"pre-wrap"}):p.style=Yt(Yt({},p.style),{},{whiteSpace:"pre"}),!B)return et.createElement(ye,le,U,et.createElement(be,p,A));(C===void 0&&te||L)&&(C=!0),te=te||Z0;var ze=[{type:"text",value:A}],Ce=J0({astGenerator:B,language:l,code:A,defaultCodeValue:ze});Ce.language===null&&(Ce.value=ze);var Ie=Ce.value.length+f,Gn=X0(Ce,C,H,E,g,f,Ie,F,L);return et.createElement(ye,le,et.createElement(be,p,!g&&U,te({rows:Gn,stylesheet:s,useInlineStyles:x})))}}var hu={},tw={get exports(){return hu},set exports(e){hu=e}},nw=ow,rw=Object.prototype.hasOwnProperty;function ow(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)rw.call(n,r)&&(e[r]=n[r])}return e}var Yp=Gp,Fc=Gp.prototype;Fc.space=null;Fc.normal={};Fc.property={};function Gp(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var Oh=nw,lw=Yp,iw=aw;function aw(e){for(var t=e.length,n=[],r=[],l=-1,i,a;++l<t;)i=e[l],n.push(i.property),r.push(i.normal),a=i.space;return new lw(Oh.apply(null,n),Oh.apply(null,r),a)}var Sc=sw;function sw(e){return e.toLowerCase()}var Kp=Qp,Nt=Qp.prototype;Nt.space=null;Nt.attribute=null;Nt.property=null;Nt.boolean=!1;Nt.booleanish=!1;Nt.overloadedBoolean=!1;Nt.number=!1;Nt.commaSeparated=!1;Nt.spaceSeparated=!1;Nt.commaOrSpaceSeparated=!1;Nt.mustUseProperty=!1;Nt.defined=!1;function Qp(e,t){this.property=e,this.attribute=t}var Xt={},uw=0;Xt.boolean=mr();Xt.booleanish=mr();Xt.overloadedBoolean=mr();Xt.number=mr();Xt.spaceSeparated=mr();Xt.commaSeparated=mr();Xt.commaOrSpaceSeparated=mr();function mr(){return Math.pow(2,++uw)}var Xp=Kp,Ah=Xt,Zp=xc;xc.prototype=new Xp;xc.prototype.defined=!0;var Jp=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],cw=Jp.length;function xc(e,t,n,r){var l=-1,i;for(Ph(this,"space",r),Xp.call(this,e,t);++l<cw;)i=Jp[l],Ph(this,i,(n&Ah[i])===Ah[i])}function Ph(e,t,n){n&&(e[t]=n)}var Dh=Sc,dw=Yp,hw=Zp,Cl=fw;function fw(e){var t=e.space,n=e.mustUseProperty||[],r=e.attributes||{},l=e.properties,i=e.transform,a={},s={},u,d;for(u in l)d=new hw(u,i(r,u),l[u],t),n.indexOf(u)!==-1&&(d.mustUseProperty=!0),a[u]=d,s[Dh(u)]=u,s[Dh(d.attribute)]=u;return new dw(a,s,t)}var mw=Cl,pw=mw({space:"xlink",transform:gw,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function gw(e,t){return"xlink:"+t.slice(5).toLowerCase()}var vw=Cl,yw=vw({space:"xml",transform:bw,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function bw(e,t){return"xml:"+t.slice(3).toLowerCase()}var ww=Fw;function Fw(e,t){return t in e?e[t]:t}var Sw=ww,eg=xw;function xw(e,t){return Sw(e,t.toLowerCase())}var Ew=Cl,Cw=eg,kw=Ew({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Cw,properties:{xmlns:null,xmlnsXLink:null}}),Ec=Xt,Tw=Cl,lt=Ec.booleanish,Ft=Ec.number,Xn=Ec.spaceSeparated,Rw=Tw({transform:Nw,properties:{ariaActiveDescendant:null,ariaAtomic:lt,ariaAutoComplete:null,ariaBusy:lt,ariaChecked:lt,ariaColCount:Ft,ariaColIndex:Ft,ariaColSpan:Ft,ariaControls:Xn,ariaCurrent:null,ariaDescribedBy:Xn,ariaDetails:null,ariaDisabled:lt,ariaDropEffect:Xn,ariaErrorMessage:null,ariaExpanded:lt,ariaFlowTo:Xn,ariaGrabbed:lt,ariaHasPopup:null,ariaHidden:lt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Xn,ariaLevel:Ft,ariaLive:null,ariaModal:lt,ariaMultiLine:lt,ariaMultiSelectable:lt,ariaOrientation:null,ariaOwns:Xn,ariaPlaceholder:null,ariaPosInSet:Ft,ariaPressed:lt,ariaReadOnly:lt,ariaRelevant:null,ariaRequired:lt,ariaRoleDescription:Xn,ariaRowCount:Ft,ariaRowIndex:Ft,ariaRowSpan:Ft,ariaSelected:lt,ariaSetSize:Ft,ariaSort:null,ariaValueMax:Ft,ariaValueMin:Ft,ariaValueNow:Ft,ariaValueText:null,role:null}});function Nw(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var mo=Xt,Lw=Cl,$w=eg,Z=mo.boolean,Ow=mo.overloadedBoolean,Ao=mo.booleanish,pe=mo.number,Ze=mo.spaceSeparated,Xl=mo.commaSeparated,Aw=Lw({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:$w,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Xl,acceptCharset:Ze,accessKey:Ze,action:null,allow:null,allowFullScreen:Z,allowPaymentRequest:Z,allowUserMedia:Z,alt:null,as:null,async:Z,autoCapitalize:null,autoComplete:Ze,autoFocus:Z,autoPlay:Z,capture:Z,charSet:null,checked:Z,cite:null,className:Ze,cols:pe,colSpan:null,content:null,contentEditable:Ao,controls:Z,controlsList:Ze,coords:pe|Xl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Z,defer:Z,dir:null,dirName:null,disabled:Z,download:Ow,draggable:Ao,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Z,formTarget:null,headers:Ze,height:pe,hidden:Z,high:pe,href:null,hrefLang:null,htmlFor:Ze,httpEquiv:Ze,id:null,imageSizes:null,imageSrcSet:Xl,inputMode:null,integrity:null,is:null,isMap:Z,itemId:null,itemProp:Ze,itemRef:Ze,itemScope:Z,itemType:Ze,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Z,low:pe,manifest:null,max:null,maxLength:pe,media:null,method:null,min:null,minLength:pe,multiple:Z,muted:Z,name:null,nonce:null,noModule:Z,noValidate:Z,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Z,optimum:pe,pattern:null,ping:Ze,placeholder:null,playsInline:Z,poster:null,preload:null,readOnly:Z,referrerPolicy:null,rel:Ze,required:Z,reversed:Z,rows:pe,rowSpan:pe,sandbox:Ze,scope:null,scoped:Z,seamless:Z,selected:Z,shape:null,size:pe,sizes:null,slot:null,span:pe,spellCheck:Ao,src:null,srcDoc:null,srcLang:null,srcSet:Xl,start:pe,step:null,style:null,tabIndex:pe,target:null,title:null,translate:null,type:null,typeMustMatch:Z,useMap:null,value:Ao,width:pe,wrap:null,align:null,aLink:null,archive:Ze,axis:null,background:null,bgColor:null,border:pe,borderColor:null,bottomMargin:pe,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Z,declare:Z,event:null,face:null,frame:null,frameBorder:null,hSpace:pe,leftMargin:pe,link:null,longDesc:null,lowSrc:null,marginHeight:pe,marginWidth:pe,noResize:Z,noHref:Z,noShade:Z,noWrap:Z,object:null,profile:null,prompt:null,rev:null,rightMargin:pe,rules:null,scheme:null,scrolling:Ao,standby:null,summary:null,text:null,topMargin:pe,valueType:null,version:null,vAlign:null,vLink:null,vSpace:pe,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Z,disableRemotePlayback:Z,prefix:null,property:null,results:pe,security:null,unselectable:null}}),Pw=iw,Dw=pw,Iw=yw,_w=kw,jw=Rw,Mw=Aw,Bw=Pw([Iw,Dw,_w,jw,Mw]),Vw=Sc,zw=Zp,qw=Kp,Cc="data",Uw=Yw,Hw=/^data[-\w.:]+$/i,tg=/-[a-z]/g,Ww=/[A-Z]/g;function Yw(e,t){var n=Vw(t),r=t,l=qw;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===Cc&&Hw.test(t)&&(t.charAt(4)==="-"?r=Gw(t):t=Kw(t),l=zw),new l(r,t))}function Gw(e){var t=e.slice(5).replace(tg,Xw);return Cc+t.charAt(0).toUpperCase()+t.slice(1)}function Kw(e){var t=e.slice(4);return tg.test(t)?e:(t=t.replace(Ww,Qw),t.charAt(0)!=="-"&&(t="-"+t),Cc+t)}function Qw(e){return"-"+e.toLowerCase()}function Xw(e){return e.charAt(1).toUpperCase()}var Zw=Jw,Ih=/[#.]/g;function Jw(e,t){for(var n=e||"",r=t||"div",l={},i=0,a,s,u;i<n.length;)Ih.lastIndex=i,u=Ih.exec(n),a=n.slice(i,u?u.index:n.length),a&&(s?s==="#"?l.id=a:l.className?l.className.push(a):l.className=[a]:r=a,i+=a.length),u&&(s=u[0],i++);return{type:"element",tagName:r,properties:l,children:[]}}var kc={};kc.parse=nF;kc.stringify=rF;var _h="",eF=" ",tF=/[ \t\n\r\f]+/g;function nF(e){var t=String(e||_h).trim();return t===_h?[]:t.split(tF)}function rF(e){return e.join(eF).trim()}var Tc={};Tc.parse=oF;Tc.stringify=lF;var fu=",",jh=" ",jo="";function oF(e){for(var t=[],n=String(e||jo),r=n.indexOf(fu),l=0,i=!1,a;!i;)r===-1&&(r=n.length,i=!0),a=n.slice(l,r).trim(),(a||!i)&&t.push(a),l=r+1,r=n.indexOf(fu,l);return t}function lF(e,t){var n=t||{},r=n.padLeft===!1?jo:jh,l=n.padRight?jh:jo;return e[e.length-1]===jo&&(e=e.concat(jo)),e.join(l+fu+r).trim()}var iF=Uw,Mh=Sc,aF=Zw,Bh=kc.parse,Vh=Tc.parse,sF=cF,uF={}.hasOwnProperty;function cF(e,t,n){var r=n?pF(n):null;return l;function l(a,s){var u=aF(a,t),d=Array.prototype.slice.call(arguments,2),m=u.tagName.toLowerCase(),p;if(u.tagName=r&&uF.call(r,m)?r[m]:m,s&&dF(s,u)&&(d.unshift(s),s=null),s)for(p in s)i(u.properties,p,s[p]);return ng(u.children,d),u.tagName==="template"&&(u.content={type:"root",children:u.children},u.children=[]),u}function i(a,s,u){var d,m,p;u==null||u!==u||(d=iF(e,s),m=d.property,p=u,typeof p=="string"&&(d.spaceSeparated?p=Bh(p):d.commaSeparated?p=Vh(p):d.commaOrSpaceSeparated&&(p=Bh(Vh(p).join(" ")))),m==="style"&&typeof u!="string"&&(p=mF(p)),m==="className"&&a.className&&(p=a.className.concat(p)),a[m]=fF(d,m,p))}}function dF(e,t){return typeof e=="string"||"length"in e||hF(t.tagName,e)}function hF(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function ng(e,t){var n,r;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,r=t.length;++n<r;)ng(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function fF(e,t,n){var r,l,i;if(typeof n!="object"||!("length"in n))return zh(e,t,n);for(l=n.length,r=-1,i=[];++r<l;)i[r]=zh(e,t,n[r]);return i}function zh(e,t,n){var r=n;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||Mh(n)===Mh(t))&&(r=!0),r}function mF(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function pF(e){for(var t=e.length,n=-1,r={},l;++n<t;)l=e[n],r[l.toLowerCase()]=l;return r}var gF=Bw,vF=sF,rg=vF(gF,"div");rg.displayName="html";var yF=rg;(function(e){e.exports=yF})(tw);const bF="Æ",wF="&",FF="Á",SF="Â",xF="À",EF="Å",CF="Ã",kF="Ä",TF="©",RF="Ç",NF="Ð",LF="É",$F="Ê",OF="È",AF="Ë",PF=">",DF="Í",IF="Î",_F="Ì",jF="Ï",MF="<",BF="Ñ",VF="Ó",zF="Ô",qF="Ò",UF="Ø",HF="Õ",WF="Ö",YF='"',GF="®",KF="Þ",QF="Ú",XF="Û",ZF="Ù",JF="Ü",eS="Ý",tS="á",nS="â",rS="´",oS="æ",lS="à",iS="&",aS="å",sS="ã",uS="ä",cS="¦",dS="ç",hS="¸",fS="¢",mS="©",pS="¤",gS="°",vS="÷",yS="é",bS="ê",wS="è",FS="ð",SS="ë",xS="½",ES="¼",CS="¾",kS=">",TS="í",RS="î",NS="¡",LS="ì",$S="¿",OS="ï",AS="«",PS="<",DS="¯",IS="µ",_S="·",jS=" ",MS="¬",BS="ñ",VS="ó",zS="ô",qS="ò",US="ª",HS="º",WS="ø",YS="õ",GS="ö",KS="¶",QS="±",XS="£",ZS='"',JS="»",ex="®",tx="§",nx="­",rx="¹",ox="²",lx="³",ix="ß",ax="þ",sx="×",ux="ú",cx="û",dx="ù",hx="¨",fx="ü",mx="ý",px="¥",gx="ÿ",vx={AElig:bF,AMP:wF,Aacute:FF,Acirc:SF,Agrave:xF,Aring:EF,Atilde:CF,Auml:kF,COPY:TF,Ccedil:RF,ETH:NF,Eacute:LF,Ecirc:$F,Egrave:OF,Euml:AF,GT:PF,Iacute:DF,Icirc:IF,Igrave:_F,Iuml:jF,LT:MF,Ntilde:BF,Oacute:VF,Ocirc:zF,Ograve:qF,Oslash:UF,Otilde:HF,Ouml:WF,QUOT:YF,REG:GF,THORN:KF,Uacute:QF,Ucirc:XF,Ugrave:ZF,Uuml:JF,Yacute:eS,aacute:tS,acirc:nS,acute:rS,aelig:oS,agrave:lS,amp:iS,aring:aS,atilde:sS,auml:uS,brvbar:cS,ccedil:dS,cedil:hS,cent:fS,copy:mS,curren:pS,deg:gS,divide:vS,eacute:yS,ecirc:bS,egrave:wS,eth:FS,euml:SS,frac12:xS,frac14:ES,frac34:CS,gt:kS,iacute:TS,icirc:RS,iexcl:NS,igrave:LS,iquest:$S,iuml:OS,laquo:AS,lt:PS,macr:DS,micro:IS,middot:_S,nbsp:jS,not:MS,ntilde:BS,oacute:VS,ocirc:zS,ograve:qS,ordf:US,ordm:HS,oslash:WS,otilde:YS,ouml:GS,para:KS,plusmn:QS,pound:XS,quot:ZS,raquo:JS,reg:ex,sect:tx,shy:nx,sup1:rx,sup2:ox,sup3:lx,szlig:ix,thorn:ax,times:sx,uacute:ux,ucirc:cx,ugrave:dx,uml:hx,uuml:fx,yacute:mx,yen:px,yuml:gx},yx={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var og=bx;function bx(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var wx=Fx;function Fx(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var Sx=xx;function xx(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var Ex=Sx,Cx=og,kx=Tx;function Tx(e){return Ex(e)||Cx(e)}var Zl,Rx=59,Nx=Lx;function Lx(e){var t="&"+e+";",n;return Zl=Zl||document.createElement("i"),Zl.innerHTML=t,n=Zl.textContent,n.charCodeAt(n.length-1)===Rx&&e!=="semi"||n===t?!1:n}var qh=vx,Uh=yx,$x=og,Ox=wx,lg=kx,Ax=Nx,Px=Yx,Dx={}.hasOwnProperty,Fr=String.fromCharCode,Ix=Function.prototype,Hh={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},_x=9,Wh=10,jx=12,Mx=32,Yh=38,Bx=59,Vx=60,zx=61,qx=35,Ux=88,Hx=120,Wx=65533,xr="named",Rc="hexadecimal",Nc="decimal",Lc={};Lc[Rc]=16;Lc[Nc]=10;var pa={};pa[xr]=lg;pa[Nc]=$x;pa[Rc]=Ox;var ig=1,ag=2,sg=3,ug=4,cg=5,mu=6,dg=7,Wn={};Wn[ig]="Named character references must be terminated by a semicolon";Wn[ag]="Numeric character references must be terminated by a semicolon";Wn[sg]="Named character references cannot be empty";Wn[ug]="Numeric character references cannot be empty";Wn[cg]="Named character references must be known";Wn[mu]="Numeric character references cannot be disallowed";Wn[dg]="Numeric character references cannot be outside the permissible Unicode range";function Yx(e,t){var n={},r,l;t||(t={});for(l in Hh)r=t[l],n[l]=r??Hh[l];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),Gx(e,n)}function Gx(e,t){var n=t.additional,r=t.nonTerminated,l=t.text,i=t.reference,a=t.warning,s=t.textContext,u=t.referenceContext,d=t.warningContext,m=t.position,p=t.indent||[],v=e.length,x=0,T=-1,E=m.column||1,b=m.line||1,g="",h=[],f,y,w,F,C,k,L,O,H,te,oe,ye,me,be,Ve,A,B,j,U;for(typeof n=="string"&&(n=n.charCodeAt(0)),A=K(),O=a?ht:Ix,x--,v++;++x<v;)if(C===Wh&&(E=p[T]||1),C=e.charCodeAt(x),C===Yh){if(L=e.charCodeAt(x+1),L===_x||L===Wh||L===jx||L===Mx||L===Yh||L===Vx||L!==L||n&&L===n){g+=Fr(C),E++;continue}for(me=x+1,ye=me,U=me,L===qx?(U=++ye,L=e.charCodeAt(U),L===Ux||L===Hx?(be=Rc,U=++ye):be=Nc):be=xr,f="",oe="",F="",Ve=pa[be],U--;++U<v&&(L=e.charCodeAt(U),!!Ve(L));)F+=Fr(L),be===xr&&Dx.call(qh,F)&&(f=F,oe=qh[F]);w=e.charCodeAt(U)===Bx,w&&(U++,y=be===xr?Ax(F):!1,y&&(f=F,oe=y)),j=1+U-me,!w&&!r||(F?be===xr?(w&&!oe?O(cg,1):(f!==F&&(U=ye+f.length,j=1+U-ye,w=!1),w||(H=f?ig:sg,t.attribute?(L=e.charCodeAt(U),L===zx?(O(H,j),oe=null):lg(L)?oe=null:O(H,j)):O(H,j))),k=oe):(w||O(ag,j),k=parseInt(F,Lc[be]),Kx(k)?(O(dg,j),k=Fr(Wx)):k in Uh?(O(mu,j),k=Uh[k]):(te="",Qx(k)&&O(mu,j),k>65535&&(k-=65536,te+=Fr(k>>>10|55296),k=56320|k&1023),k=te+Fr(k))):be!==xr&&O(ug,j)),k?(le(),A=K(),x=U-1,E+=U-me+1,h.push(k),B=K(),B.offset++,i&&i.call(u,k,{start:A,end:B},e.slice(me-1,U)),A=B):(F=e.slice(me-1,U),g+=F,E+=F.length,x=U-1)}else C===10&&(b++,T++,E=0),C===C?(g+=Fr(C),E++):le();return h.join("");function K(){return{line:b,column:E,offset:x+(m.offset||0)}}function ht(ze,Ce){var Ie=K();Ie.column+=Ce,Ie.offset+=Ce,a.call(d,Wn[ze],Ie,ze)}function le(){g&&(h.push(g),l&&l.call(s,g,{start:A,end:K()}),g="")}}function Kx(e){return e>=55296&&e<=57343||e>1114111}function Qx(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var pu={},Xx={get exports(){return pu},set exports(e){pu=e}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,a={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function h(f){return f instanceof u?new u(f.type,h(f.content),f.alias):Array.isArray(f)?f.map(h):f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++i}),h.__id},clone:function h(f,y){y=y||{};var w,F;switch(s.util.type(f)){case"Object":if(F=s.util.objId(f),y[F])return y[F];w={},y[F]=w;for(var C in f)f.hasOwnProperty(C)&&(w[C]=h(f[C],y));return w;case"Array":return F=s.util.objId(f),y[F]?y[F]:(w=[],y[F]=w,f.forEach(function(k,L){w[L]=h(k,y)}),w);default:return f}},getLanguage:function(h){for(;h;){var f=l.exec(h.className);if(f)return f[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,f){h.className=h.className.replace(RegExp(l,"gi"),""),h.classList.add("language-"+f)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(w){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack)||[])[1];if(h){var f=document.getElementsByTagName("script");for(var y in f)if(f[y].src==h)return f[y]}return null}},isActive:function(h,f,y){for(var w="no-"+f;h;){var F=h.classList;if(F.contains(f))return!0;if(F.contains(w))return!1;h=h.parentElement}return!!y}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(h,f){var y=s.util.clone(s.languages[h]);for(var w in f)y[w]=f[w];return y},insertBefore:function(h,f,y,w){w=w||s.languages;var F=w[h],C={};for(var k in F)if(F.hasOwnProperty(k)){if(k==f)for(var L in y)y.hasOwnProperty(L)&&(C[L]=y[L]);y.hasOwnProperty(k)||(C[k]=F[k])}var O=w[h];return w[h]=C,s.languages.DFS(s.languages,function(H,te){te===O&&H!=h&&(this[H]=C)}),C},DFS:function h(f,y,w,F){F=F||{};var C=s.util.objId;for(var k in f)if(f.hasOwnProperty(k)){y.call(f,k,f[k],w||k);var L=f[k],O=s.util.type(L);O==="Object"&&!F[C(L)]?(F[C(L)]=!0,h(L,y,null,F)):O==="Array"&&!F[C(L)]&&(F[C(L)]=!0,h(L,y,k,F))}}},plugins:{},highlightAll:function(h,f){s.highlightAllUnder(document,h,f)},highlightAllUnder:function(h,f,y){var w={callback:y,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",w),w.elements=Array.prototype.slice.apply(w.container.querySelectorAll(w.selector)),s.hooks.run("before-all-elements-highlight",w);for(var F=0,C;C=w.elements[F++];)s.highlightElement(C,f===!0,w.callback)},highlightElement:function(h,f,y){var w=s.util.getLanguage(h),F=s.languages[w];s.util.setLanguage(h,w);var C=h.parentElement;C&&C.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(C,w);var k=h.textContent,L={element:h,language:w,grammar:F,code:k};function O(te){L.highlightedCode=te,s.hooks.run("before-insert",L),L.element.innerHTML=L.highlightedCode,s.hooks.run("after-highlight",L),s.hooks.run("complete",L),y&&y.call(L.element)}if(s.hooks.run("before-sanity-check",L),C=L.element.parentElement,C&&C.nodeName.toLowerCase()==="pre"&&!C.hasAttribute("tabindex")&&C.setAttribute("tabindex","0"),!L.code){s.hooks.run("complete",L),y&&y.call(L.element);return}if(s.hooks.run("before-highlight",L),!L.grammar){O(s.util.encode(L.code));return}if(f&&r.Worker){var H=new Worker(s.filename);H.onmessage=function(te){O(te.data)},H.postMessage(JSON.stringify({language:L.language,code:L.code,immediateClose:!0}))}else O(s.highlight(L.code,L.grammar,L.language))},highlight:function(h,f,y){var w={code:h,grammar:f,language:y};if(s.hooks.run("before-tokenize",w),!w.grammar)throw new Error('The language "'+w.language+'" has no grammar.');return w.tokens=s.tokenize(w.code,w.grammar),s.hooks.run("after-tokenize",w),u.stringify(s.util.encode(w.tokens),w.language)},tokenize:function(h,f){var y=f.rest;if(y){for(var w in y)f[w]=y[w];delete f.rest}var F=new p;return v(F,F.head,h),m(h,F,f,F.head,0),T(F)},hooks:{all:{},add:function(h,f){var y=s.hooks.all;y[h]=y[h]||[],y[h].push(f)},run:function(h,f){var y=s.hooks.all[h];if(!(!y||!y.length))for(var w=0,F;F=y[w++];)F(f)}},Token:u};r.Prism=s;function u(h,f,y,w){this.type=h,this.content=f,this.alias=y,this.length=(w||"").length|0}u.stringify=function h(f,y){if(typeof f=="string")return f;if(Array.isArray(f)){var w="";return f.forEach(function(O){w+=h(O,y)}),w}var F={type:f.type,content:h(f.content,y),tag:"span",classes:["token",f.type],attributes:{},language:y},C=f.alias;C&&(Array.isArray(C)?Array.prototype.push.apply(F.classes,C):F.classes.push(C)),s.hooks.run("wrap",F);var k="";for(var L in F.attributes)k+=" "+L+'="'+(F.attributes[L]||"").replace(/"/g,"&quot;")+'"';return"<"+F.tag+' class="'+F.classes.join(" ")+'"'+k+">"+F.content+"</"+F.tag+">"};function d(h,f,y,w){h.lastIndex=f;var F=h.exec(y);if(F&&w&&F[1]){var C=F[1].length;F.index+=C,F[0]=F[0].slice(C)}return F}function m(h,f,y,w,F,C){for(var k in y)if(!(!y.hasOwnProperty(k)||!y[k])){var L=y[k];L=Array.isArray(L)?L:[L];for(var O=0;O<L.length;++O){if(C&&C.cause==k+","+O)return;var H=L[O],te=H.inside,oe=!!H.lookbehind,ye=!!H.greedy,me=H.alias;if(ye&&!H.pattern.global){var be=H.pattern.toString().match(/[imsuy]*$/)[0];H.pattern=RegExp(H.pattern.source,be+"g")}for(var Ve=H.pattern||H,A=w.next,B=F;A!==f.tail&&!(C&&B>=C.reach);B+=A.value.length,A=A.next){var j=A.value;if(f.length>h.length)return;if(!(j instanceof u)){var U=1,K;if(ye){if(K=d(Ve,B,h,oe),!K||K.index>=h.length)break;var Ce=K.index,ht=K.index+K[0].length,le=B;for(le+=A.value.length;Ce>=le;)A=A.next,le+=A.value.length;if(le-=A.value.length,B=le,A.value instanceof u)continue;for(var ze=A;ze!==f.tail&&(le<ht||typeof ze.value=="string");ze=ze.next)U++,le+=ze.value.length;U--,j=h.slice(B,le),K.index-=B}else if(K=d(Ve,0,j,oe),!K)continue;var Ce=K.index,Ie=K[0],Gn=j.slice(0,Ce),Ll=j.slice(Ce+Ie.length),vo=B+j.length;C&&vo>C.reach&&(C.reach=vo);var qt=A.prev;Gn&&(qt=v(f,qt,Gn),B+=Gn.length),x(f,qt,U);var $l=new u(k,te?s.tokenize(Ie,te):Ie,me,Ie);if(A=v(f,qt,$l),Ll&&v(f,A,Ll),U>1){var Kn={cause:k+","+O,reach:vo};m(h,f,y,A.prev,B,Kn),C&&Kn.reach>C.reach&&(C.reach=Kn.reach)}}}}}}function p(){var h={value:null,prev:null,next:null},f={value:null,prev:h,next:null};h.next=f,this.head=h,this.tail=f,this.length=0}function v(h,f,y){var w=f.next,F={value:y,prev:f,next:w};return f.next=F,w.prev=F,h.length++,F}function x(h,f,y){for(var w=f.next,F=0;F<y&&w!==h.tail;F++)w=w.next;f.next=w,w.prev=f,h.length-=F}function T(h){for(var f=[],y=h.head.next;y!==h.tail;)f.push(y.value),y=y.next;return f}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(h){var f=JSON.parse(h.data),y=f.language,w=f.code,F=f.immediateClose;r.postMessage(s.highlight(w,s.languages[y],y)),F&&r.close()},!1)),s;var E=s.util.currentScript();E&&(s.filename=E.src,E.hasAttribute("data-manual")&&(s.manual=!0));function b(){s.manual||s.highlightAll()}if(!s.manual){var g=document.readyState;g==="loading"||g==="interactive"&&E&&E.defer?document.addEventListener("DOMContentLoaded",b):window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,16)}return s}(t);e.exports&&(e.exports=n),typeof pi<"u"&&(pi.Prism=n)})(Xx);var Zx=$c;$c.displayName="markup";$c.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function $c(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,r){var l={};l["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};i["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var a={};a[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:i},e.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var hg=Oc;Oc.displayName="css";Oc.aliases=[];function Oc(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const Jx=hg;var eE=Ac;Ac.displayName="clike";Ac.aliases=[];function Ac(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var tE=Pc;Pc.displayName="javascript";Pc.aliases=["js"];function Pc(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var Mo=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof pi=="object"?pi:{},nE=vE();Mo.Prism={manual:!0,disableWorkerMessageHandler:!0};var rE=hu,oE=Px,fg=pu,lE=Zx,iE=hg,aE=eE,sE=tE;nE();var Dc={}.hasOwnProperty;function mg(){}mg.prototype=fg;var $e=new mg,Ic=$e;$e.highlight=cE;$e.register=kl;$e.alias=uE;$e.registered=dE;$e.listLanguages=hE;kl(lE);kl(iE);kl(aE);kl(sE);$e.util.encode=pE;$e.Token.stringify=fE;function kl(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");$e.languages[e.displayName]===void 0&&e($e)}function uE(e,t){var n=$e.languages,r=e,l,i,a,s;t&&(r={},r[e]=t);for(l in r)for(i=r[l],i=typeof i=="string"?[i]:i,a=i.length,s=-1;++s<a;)n[i[s]]=n[l]}function cE(e,t){var n=fg.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if($e.util.type(t)==="Object")r=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(Dc.call($e.languages,t))r=$e.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,r,t)}function dE(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Dc.call($e.languages,e)}function hE(){var e=$e.languages,t=[],n;for(n in e)Dc.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function fE(e,t,n){var r;return typeof e=="string"?{type:"text",value:e}:$e.util.type(e)==="Array"?mE(e,t):(r={type:e.type,content:$e.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(r.classes=r.classes.concat(e.alias)),$e.hooks.run("wrap",r),rE(r.tag+"."+r.classes.join("."),gE(r.attributes),r.content))}function mE(e,t){for(var n=[],r=e.length,l=-1,i;++l<r;)i=e[l],i!==""&&i!==null&&i!==void 0&&n.push(i);for(l=-1,r=n.length;++l<r;)i=n[l],n[l]=$e.Token.stringify(i,t,n);return n}function pE(e){return e}function gE(e){var t;for(t in e)e[t]=oE(e[t]);return e}function vE(){var e="Prism"in Mo,t=e?Mo.Prism:void 0;return n;function n(){e?Mo.Prism=t:delete Mo.Prism,e=void 0,t=void 0}}var _c=ew(Ic,{});_c.registerLanguage=function(e,t){return Ic.register(t)};_c.alias=function(e,t){return Ic.alias(e,t)};const Tl=_c;var yE=jc;jc.displayName="bash";jc.aliases=["shell"];function jc(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},l={bash:r,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:l},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:l},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:l.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:l.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=t.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],a=l.variable[1].inside,s=0;s<i.length;s++)a[i[s]]=t.languages.bash[i[s]];t.languages.shell=t.languages.bash})(e)}const bE=yE;var wE=Mc;Mc.displayName="jsx";Mc.aliases=[];function Mc(e){(function(t){var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,l=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function a(d,m){return d=d.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return l}).replace(/<SPREAD>/g,function(){return i}),RegExp(d,m)}i=a(i).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=a(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:a(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:a(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var s=function(d){return d?typeof d=="string"?d:typeof d.content=="string"?d.content:d.content.map(s).join(""):""},u=function(d){for(var m=[],p=0;p<d.length;p++){var v=d[p],x=!1;if(typeof v!="string"&&(v.type==="tag"&&v.content[0]&&v.content[0].type==="tag"?v.content[0].content[0].content==="</"?m.length>0&&m[m.length-1].tagName===s(v.content[0].content[1])&&m.pop():v.content[v.content.length-1].content==="/>"||m.push({tagName:s(v.content[0].content[1]),openedBraces:0}):m.length>0&&v.type==="punctuation"&&v.content==="{"?m[m.length-1].openedBraces++:m.length>0&&m[m.length-1].openedBraces>0&&v.type==="punctuation"&&v.content==="}"?m[m.length-1].openedBraces--:x=!0),(x||typeof v=="string")&&m.length>0&&m[m.length-1].openedBraces===0){var T=s(v);p<d.length-1&&(typeof d[p+1]=="string"||d[p+1].type==="plain-text")&&(T+=s(d[p+1]),d.splice(p+1,1)),p>0&&(typeof d[p-1]=="string"||d[p-1].type==="plain-text")&&(T=s(d[p-1])+T,d.splice(p-1,1),p--),d[p]=new t.Token("plain-text",T,null,T)}v.content&&typeof v.content!="string"&&u(v.content)}};t.hooks.add("after-tokenize",function(d){d.language!=="jsx"&&d.language!=="tsx"||u(d.tokens)})})(e)}const FE=wE;var SE=Bc;Bc.displayName="scss";Bc.aliases=[];function Bc(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const xE=SE,EE={'code[class*="language-"]':{color:"#f8f8f2",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#2b2b2b",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#2b2b2b",padding:"0.1em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"#d4d0ab"},prolog:{color:"#d4d0ab"},doctype:{color:"#d4d0ab"},cdata:{color:"#d4d0ab"},punctuation:{color:"#fefefe"},property:{color:"#ffa07a"},tag:{color:"#ffa07a"},constant:{color:"#ffa07a"},symbol:{color:"#ffa07a"},deleted:{color:"#ffa07a"},boolean:{color:"#00e0e0"},number:{color:"#00e0e0"},selector:{color:"#abe338"},"attr-name":{color:"#abe338"},string:{color:"#abe338"},char:{color:"#abe338"},builtin:{color:"#abe338"},inserted:{color:"#abe338"},operator:{color:"#00e0e0"},entity:{color:"#00e0e0",cursor:"help"},url:{color:"#00e0e0"},".language-css .token.string":{color:"#00e0e0"},".style .token.string":{color:"#00e0e0"},variable:{color:"#00e0e0"},atrule:{color:"#ffd700"},"attr-value":{color:"#ffd700"},function:{color:"#ffd700"},keyword:{color:"#00e0e0"},regex:{color:"#ffd700"},important:{color:"#ffd700",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};Tl.registerLanguage("jsx",FE);Tl.registerLanguage("css",Jx);Tl.registerLanguage("scss",xE);Tl.registerLanguage("bash",bE);const Mt=({code:e,children:t,language:n="jsx",caption:r})=>{const[l,i]=$.useState(!1);return c("div",{className:"codeblock",children:[!!r&&o("h4",{className:"caption",children:r}),o("div",{className:`clipboard ${l?"copied":""}`,onClick:()=>{navigator.clipboard.writeText(e),i(!0),Z1(2e3).then(()=>i(!1))},children:l?"Copied":"Copy"}),o(Tl,{language:n,style:EE,showLineNumbers:!0,children:e||t})]})},CE=()=>c("div",{children:[o("h1",{children:"Getting Started"}),c("p",{children:["Add the ",o("code",{className:"code",children:"@abw/react-formula"})," module to your project using your favourite package manager."]}),o(Mt,{language:"bash",children:`## using npm
$ npm add @abw/react-formula

## using yarn
$ yarn add @abw/react-formula

## using pnpm
$ pnpm add @abw/react-formula
`}),o("p",{children:"You can then import the modules and start using them."}),o(Mt,{children:`import { Form, Field, Submit } from '@abw/react-formula'

const MyFormExample = () =>
  <Form onSubmit={submit => console.log('Form submit:', submit)}>
    <Field name="name" label="What is your name?"/>
    <Submit/>
  </Form>

export default MyFormExample
`}),o("p",{children:"If you want to use the provided styles (and you probably will to start with) then you'll need to import the default CSS stylesheet into your React app.  Something like this:"}),o(Mt,{children:"import '@abw/react-formula/css/formula.css'"}),o("p",{children:"Or if you're using SASS then you can import the SASS components into your main stylesheet."}),o(Mt,{language:"scss",children:"@import '@abw/react-formula/scss/formula.scss';"}),c("p",{children:["See the ",o("a",{href:"styling",children:"styling page"})," for further information about customising the styles."]})]}),kE=()=>c("div",{className:"home",children:[o("h1",{children:"Why Does This Exist?"}),c("div",{className:"pic-side",children:[c("div",{children:[o("img",{src:qi("fruit-loop.svg")}),c("div",{className:"caption",children:["Fruit by Artem Yurov from"," ",o("a",{href:"https://thenounproject.com/browse/icons/term/fruit/",target:"_blank",rel:"noreferrer",title:"Fruit Icons",children:"Noun Project"}),". Clipboard and loop by Andy Wardley."]})]}),c("div",{className:"blurb",children:[c("p",{className:"intro",children:[o("code",{className:"code",children:"react-formula"})," is yet another React form component library."]}),o("p",{className:"subintro",children:"I know what you're thinking.  Is this guy fruit loopy? What does the World need with another React form library? What makes this different, better, and/or worse than all the other form libraries?  Will this guy do my homework for me? Why do we exist?  What is the meaning of life? Where did I leave my car keys? And what is it with all the badgers?"}),o("p",{className:"subintro",children:"All these questions will be answered and more.  Well, OK, maybe not all of them.  But perhaps I might be able to explain why I wrote this library."})]})]}),o("h2",{children:"Buzzword Bingo"}),o("p",{className:"intro",children:"Here's the TL;DR about what this library aims to achieve."}),c("ul",{children:[o("li",{children:"Simplicity"}),o("li",{children:"Consistency"}),o("li",{children:"Maintainability"}),o("li",{children:"Flexibility"}),o("li",{children:"Extensibility"}),o("li",{children:"Reliability"}),o("li",{children:"Security"}),o("li",{children:"Modularity"}),o("li",{children:"Accessibility"}),o("li",{children:"Presentability"}),o("li",{children:"Efficiency"})]}),o("h2",{children:"Am I Fruit Loopy?"}),o("p",{children:"Yes, probably.  But I had my reasons."}),o("p",{children:"So why did I write it?  Well, it started out a few years back when the state of the art in form libraries wasn't quite where it is today. React 16.3 had just been released with its shiny new contexts and I thought it might be a better way to build a form library than what we had at the time.  So I did and it turned out pretty well.  It was designed by me, for me, and unsurprisingly it met my particular needs particularly well.  It may not meet yours."}),c("p",{children:["Over the years I've built a ",o("i",{children:"lot"})," of forms with it for various different customers.  I don't much fancy the idea of having to re-write hundreds of forms that already work Just Fine™ and I don't imagine my customers would want to pay me to do it either. So I still use it, and have occasional bursts of development/maintenance where I add new features, clean up ugly bits of code, fix minor bugs or limitations that have been annoying me for a while, or update the documentation and examples.  That's what I'm doing right now, as it happens."]}),c("p",{children:["For the last few years it's been an integral part of my ",o("a",{href:"https://github.com/abw/badger-ui",children:"badger-ui"})," library but I'm now trying to break things up a little bit and extract some of the reusable functionality into different modules.  So that's how we got here."]}),c("p",{children:["But the best reason of all is that I built it because I ",o("i",{children:"wanted"})," to. I like writing software.  I like solving problems.  Sometimes that means spending my weekends re-inventing wheels that happen to fit my car a bit better than all the other wheels out there.  That's all the justification I need."]}),o("h2",{children:"Why I Like This Library"}),c("ul",{children:[c("li",{children:["Above all else, ",o("b",{children:"simplicity"}),".  Building a form with"," ",o("code",{children:"react-formula"})," should be ",o("i",{children:"at least"})," as easy as defining a Vanilla HTML form, and ideally, easier. I don't want to have to build every field from a dozen different components to include a label, input, validation message, and so on."]}),c("li",{children:["Closely related to that is ",o("b",{children:"consistency"}),`. In the vast majority of cases I want all my forms and fields to look the same and conform to whatever branding and/or style guide I've got in place.  I don't mind spending a bit of time up front to get everything looking right, but after that I just want to "push a button" and get the same results every time with the minimum of fuss.`]}),c("li",{children:["And that brings us on to ",o("b",{children:"maintainability"}),".  The less markup I have to write, the less I have to maintain, and the easier it will be to do so.  If the client or a designer decides they want all the form fields to have the label in a different place, be aligned differently, have more padding, or something else, then I want to be able to change that in a single place.  It might mean changing some CSS, re-defining a style, or updating a single field layout component.  But I certainly don't want to have to go and edit every field in every form to make the change."]}),c("li",{children:["Of course there are times when you want to do something a bit different, so ",o("b",{children:"flexibility"})," is also important.  It's good to have a default layout for ",o("i",{children:"most"})," of your form fields, but you also need to be able to switch something else in for those special cases. This should be easy, not hard."]}),c("li",{children:[o("b",{children:"Extensibility"})," is also important for those times when there isn't something available off-the-shelf and you need to get your hands dirty and write a custom component.  Maybe you need a custom autocomplete component or search widget.  Maybe you need to include Recaptcha validation, or something else that requires aynchronous calls to an API.  I don't know what you might need.  I can't even predict what I might need this time next week.  So it's important that the library exposes enough of the internal workings to allow you to plug new things in.  It might not be easy, but it should be possible."]}),c("li",{children:["None of that would be possible without ",o("b",{children:"reliability"}),".  We need to be able to trust the library to 'Do The Right Thing' and that means it has to be well tested."]}),c("li",{children:["Another concern is ",o("b",{children:"security"}),". It supports client-side and server-side validation.  If for some reason an invalid input gets past the client-side validation and generates an angry response from the server then it can update the form to display the errors and highlight the invalid field(s)."]}),c("li",{children:["And talking of concerns, we like to separate them, so ",o("b",{children:"modularity"})," ",'is important.  You should be able to define the schema for a form and all of its fields (including validation) in a single place, possibly away from the markup used to render the form.  Being able to separate the "logic" of a form from the presentational aspects make it easier to update both in isolation.']}),c("li",{children:["TODO: ",o("b",{children:"Accessibility"})," - WAI-ARIA compliance (although there's still a bit of work to be done there)."]}),c("li",{children:["Functionality is paramount, but we also care about ",o("b",{children:"presentability"}),". It comes with a default stylesheet that provides reasonable defaults for styling different form components and all their states (focussed, valid, invalid, disabled, etc).  It's written using SASS and almost everything is styled using variables that you can easily change.  There's a single variable that you can set to change the basic theme colour to match your brand so you can get up and running really quickly.  As and when you need to change styles, add new components, or make other changes then you generally can with the minimum of fuss."]}),c("li",{children:["And last, but not least, ",o("b",{children:"efficiency"}),".  The library is comparatively small and simple (less than 10kB for the compressed bundle at the time of writing). It only works with modern (v18+) versions of React and there are no plans to port it to other web frameworks.  It doesn't set out to please all of the people all of the time.  Rather, it is designed to please me, most of the time, and as such it may not have (and may never have) all the features that other people might want.  You are, of course, free to go and write your own form library."]})]}),c("div",{className:"badger",children:[o("img",{src:qi("badger.svg"),alt:"badger"}),o("div",{className:"caption",children:"Why am I here?"})]})]}),TE=()=>c("div",{children:[o("h1",{children:"Tutorial"}),o("p",{children:"This section of the documentation provides a guided walk-through of the features to get you up and running as quickly as possible."}),o("ul",{className:"menu",children:Br.items.map(([e,t])=>o("li",{children:o(J,{to:`/tutorial/${e}`,text:t})},e))})]});var RE=Object.defineProperty,NE=(e,t,n)=>t in e?RE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,as=(e,t,n)=>(NE(e,typeof t!="symbol"?t+"":t,n),n);const pg=(e,t={})=>{const n=et.createContext(t);return{Context:n,Provider:r=>o(e,{...r,render:l=>o(n.Provider,{value:l,children:r.children})}),Consumer:r=>l=>o(n.Consumer,{children:i=>o(r,{...i,...l})}),Use:()=>et.useContext(n)}};function LE(e={},t={},n={}){return Object.entries(t).reduce((r,[l,i])=>{const a=n[i];return a!==null&&typeof a<"u"&&(r[l]=a),r},{...e})}function $E(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,r)=>{const l=e[r]||OE(`Cannot expose non-existent action method: ${r}`);return n[r]=l.bind(e),n},{})}function OE(...e){throw new Error(e.join(""))}class mi extends et.Component{constructor(t){super(t);const n=this.constructor;this.debug=n.debug||t.debug?n.debugPrefix?(r,...l)=>console.log("%c"+n.debugPrefix+"%c"+r,`color: ${n.debugColor}`,"color:black",...l):console.log.bind(console):()=>{},this.state=LE(n.initialState,n.initialProps,t),this.actions=$E(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}as(mi,"initialState",{}),as(mi,"initialProps",{}),as(mi,"actions",[]);const AE="",PE="blur",ga="changed",Vc="disabled",DE="errors",IE="field",po="focus",_E="formula",jE="fulfilled",pr="invalid",ME="Optional",BE="Required",VE="A value is required",Gh="reset",va="submitted",go="submitting",gr="valid",Yn="validating",zE=["id","name","value","checked","disabled","placeholder","autoComplete","onFocus","onBlur","size","min","max","minLength","maxLength","step","pattern","list"],qE=["id","name","action","method","encType"],UE={boolean:!0,string:!0,number:!0};let gg=class extends mi{constructor(t){super(t),this.newStatus=this.constructor.newStatus(t),this.state={status:this.newStatus(Gh)}}setStatus(t,n={},r=Qr){this.mounted&&this.setState(l=>({status:this.newStatus(t,l.status),...n}),r)}setResetState(t,n){this.setStatus(Gh,t,n)}setChangedState(t,n){this.setStatus(ga,t,n)}setValidatingState(t,n){this.setStatus(Yn,t,n)}setInvalidState(t,n){this.setStatus(pr,t,n)}setValidState(t,n){this.setStatus(gr,t,n)}};function vg(e,t){return t.reduce((n,r)=>(ma(e[r])&&(n[r]=e[r]),n),{})}const ya=e=>vg(e,zE),HE=e=>vg(e,qE),Rl=(e,t,...n)=>Object.entries(t).reduce((r,[l,i])=>(e[l]&&r.push(i),r),[...n]).filter(r=>r).join(" "),yg=e=>UE[typeof e]?{value:e,text:e}:e,Ui=(...e)=>function(...t){for(let n of e.filter(ma))n(...t)};function Kh(e){if(U1(e))return[1,!e];if(ma(e)){const t=(e==null?void 0:e.toString().length)??0;return[t,t===0]}return[0,!0]}const WE={className:_E,submittingClass:go,validatingClass:Yn,headerClass:"header",bodyClass:"body",footerClass:"footer",errorsClass:DE,errorsInHeader:!0,resetOnSuccess:!0,focusInvalidField:!0,enctype:"application/x-www-form-urlencoded",method:"post",errorsTitle:e=>`Form Submission Error${e>1?"s":""}`,errorsPrompt:e=>`Please correct ${e===1?"this problem":"these problems"} and re-submit:`},gu={validateOnChange:!1,validateOnBlur:!1,validateOnInvalid:!0,showRequired:!1,showOptional:!1,validMessage:null,minValidateLength:1,requiredMessage:VE,requiredLabel:BE,optionalLabel:ME,fieldClass:IE,validClass:gr,invalidClass:pr,disabledClass:Vc,focusClass:po},YE=Dp(["showRequired","requiredLabel","showOptional","optionalLabel","validateOnChange","validateOnBlur","validateOnInvalid","minValidateLength","validMessage","requiredMessage","fieldClass","focusClass","validClass","invalidClass","disabledClass"]),ba={[gr]:!1,[pr]:!1},GE={...ba,[ga]:!0},KE={...ba,[Yn]:!0},QE={[gr]:!1,[pr]:!0,[Yn]:!1},XE={[gr]:!0,[pr]:!1,[Yn]:!1},ZE={[po]:!1},JE={[po]:!0},e2={[go]:!0,[va]:!1},t2={[go]:!1,[va]:!0},bg={changed:GE,validating:KE,invalid:QE,valid:XE},wg=e=>(t,n={})=>({...n,...e[t]||{[t]:!0}}),n2=()=>{const e={...ba,[ga]:!1,[Yn]:!1,[va]:!1,[go]:!1};return wg({...bg,reset:e,submitting:e2,submitted:t2})},r2=(e={})=>{const t={...ba,[ga]:!1,[Yn]:!1,[po]:!1,[Vc]:e.disabled||!1};return wg({...bg,reset:t,focus:JE,blur:ZE})};class Er extends gg{constructor(t){super(t),this.fields={};const{hidden:n={}}=t,r={...n};this.state={...this.state,initialValues:r,values:{...r},errors:[],error:null},this.props.onLoad&&this.props.onLoad(this)}componentDidMount(){this.debug("mounted"),this.mounted=!0}componentWillUnmount(){this.debug("unmounted"),this.mounted=!1}fieldSpec(t,n){var i,a;const r=((i=this.props.fields)==null?void 0:i[t])??{},l=n.value??((a=this.props.values)==null?void 0:a[t]);return{name:t,...X1(this.props,YE),...r,...n,value:l}}attachField(t,n){this.debug("attaching [%s] field => %o",t,n),this.fields[t]=n,this.setState(r=>({values:{...r.values,[t]:n.state.value}}))}detachField(t){this.debug("detaching [%s] field",t),delete this.fields[t]}setSubmittingState(t,n){this.setStatus(go,t,n)}setSubmittedState(t,n){this.setStatus(va,t,n)}setFocus(t,n){var r;n==null||n.preventDefault(),(r=this.fields[t])==null||r.setFocus()}reset(t){this.mounted&&(this.debug("reset()"),t==null||t.preventDefault(),this.resetFields(),this.setResetState({errors:[],error:null},this.props.onReset))}resetFields(){this.debug("resetFields()"),Object.values(this.fields).forEach(t=>{console.log("resetting ",t.name),t.reset()})}setValue(t,n){this.setChangedState({values:{...this.state.values,[t]:n}})}setValues(t,n){n==null||n.preventDefault(),Object.entries(t).forEach(([r,l])=>{var i;return(i=this.fields[r])==null?void 0:i.setValue(l)})}setHidden(t){const n={...this.state.hidden,...t};this.setState({hidden:n})}submit(t){t==null||t.preventDefault(),this.debug("submit"),this.validate().then(n=>this.handleSubmit(n)).catch(n=>this.debug("Form is NOT valid:",n))}validate(){return this.debug("validate()"),this.setValidatingState(),new Promise(this.validator()).then(t=>(this.debug("validator passed: ",t),this.setValidState({submit:t,error:null,errors:[]},this.props.onValid),t)).catch(t=>{throw this.debug("validator failed: ",t),this.handleError({error:t.error,errors:t.errors}),t})}validator(){return(t,n)=>Promise.allSettled(Object.values(this.fields).map(r=>r.validate())).then(r=>r.reduce((l,{status:i,value:a,reason:s})=>(i===jE?Object.assign(l.values,a.data||{[a.name]:a.value}):l.errors.push(s),l),{values:{...this.state.values},errors:[]})).then(r=>(this.debug("field validation complete: ",r),r.errors.length&&n(r),r)).then(r=>{if(this.props.validate)return this.debug("validating form: ",r),this.props.validate(r.values).then(l=>t({...r,values:l})).catch(l=>n(l));t(r)})}handleSubmit(t){if(this.debug("Form is valid, handling submission:",t),!this.props.onSubmit){window.alert("You haven't defined an onSubmit handler: "+JSON.stringify(t.values));return}this.setSubmittingState({},async()=>{this.debug("calling onSubmit() handler: ",t);try{this.props.onSubmit(t.values,this.getContext()).then(n=>{console.log(".then response:",n),this.handleSuccess(n)}).catch(n=>{console.log(".catch error: ",n),this.handleError(n)}),console.log("after promise: ")}catch(n){this.handleError({error:n})}})}handleSuccess(t){this.debug("handleSuccess()",t);const n=this.props.onSuccess||Qr;this.setValidState({},Ui(()=>n(t),this.state.resetOnSuccess?()=>this.resetFields():null))}handleError(t){this.debug("handleError()",t);const n=fo(t==null?void 0:t.errors)&&this.fieldErrors(t.errors),r=this.props.onError||this.props.onFailure||Qr;console.log("onError: ",r),this.setInvalidState(t,Ui(()=>r(t),n?()=>n.setFocus():null))}fieldErrors(t){const n=t.reduce((r,l)=>{const{name:i,message:a}=l,s=i&&this.fields[i];return s&&(l.label||(l.label=s.props.label),s.setInvalidState({message:a}),r.push(s)),r},[]);return this.state.focusInvalidField&&n.length&&n[0]}getContext(){return{...WE,...this.props,...this.state,...this.actions}}}At(Er,"newStatus",n2),At(Er,"debug",!1),At(Er,"debugPrefix","Form > "),At(Er,"debugColor","rebeccapurple"),At(Er,"actions",["fieldSpec","attachField","detachField","setFocus","reset","validate","submit","setValue","setValues","setHidden","setStatus","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setSubmittingState","setSubmittedState"]);const o2=pg(Er),{Context:vL,Provider:l2,Consumer:wa,Use:dt}=o2,i2=({error:e})=>{const t=e.label||e.name;return c(Ee,{children:[!!t&&c("b",{children:[t,": "]}),e.message]})},a2=({error:e})=>Un(e)?e:o(i2,{error:e}),Jl=$.createContext();function Qh(e){return typeof e=="function"}function s2(e){return typeof e=="object"&&!u2(e)&&!c2(e)}function u2(e){return Array.isArray(e)}function c2(e){return e===null}function d2(e={},t=!1,n={}){if(!t)return n;let r={};const l=Qh(t)?t(e):e[t];return s2(l)?Object.assign(r,l,n):Qh(l)?Object.assign(r,n,l(n,e)):Object.assign(r,n),r}const h2=e=>({Context:Jl,Provider:({children:t,...n})=>o(Jl.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>o(Jl.Consumer,{children:r=>o(t,{...r,...n,context:r})}),Component:(t,n=t.displayName||t.name)=>et.forwardRef((r,l)=>o(Jl.Consumer,{children:i=>o(t,{...d2(i,n,r),ref:l})}))}),f2=h2(),fe=f2.Component,m2=()=>{const e=dt(),{error:t,errors:n,errorsClass:r,errorsTitle:l,errorsPrompt:i,Error:a=a2}=e,s=!!t,u=n.length+(s?1:0);return u===0?null:c("div",{className:r,children:[!!l&&o("h3",{children:l(u)}),s&&o("h4",{children:o(a,{error:t})}),n.length!==0&&c(Ee,{children:[!!i&&o("p",{children:i(n.length)}),o("ul",{children:n.map((d,m)=>o("li",{children:o(a,{error:d})},m))})]})]})},zc=fe(m2,"Form.Errors"),p2=()=>{const e=dt(),{title:t,headerClass:n,errorsInHeader:r,Errors:l=zc}=e;return c("header",{className:n,children:[!!t&&o("h3",{children:t}),!!r&&o(l,{})]})},g2=()=>{const e=dt(),{footerClass:t,errorsInFooter:n,Errors:r=zc}=e;return o("footer",{className:t,children:!!n&&o(r,{})})},v2=({children:e})=>{const t=dt(),{className:n,bodyClass:r,validClass:l,invalidClass:i,validatingClass:a,submittingClass:s,Header:u=p2,Footer:d=g2}=t,m=Rl(t.status,{[gr]:l,[pr]:i,[Yn]:a,[go]:s},n),p=HE(t);return c("form",{className:m,...p,children:[o(u,{}),o("div",{className:r,children:e}),o(d,{})]})},y2=({children:e,Layout:t=v2,...n})=>o(l2,{...n,children:o(t,{children:e})}),I=fe(y2,"Form");class Cr extends gg{constructor(t){super(t),this.name=t.name;const{value:n}=t,r=n;this.form=this.props.form,this.state={...this.state,initialValue:r,value:n,error:null},this.debug(`${this.name} field state: `,this.state),this.inputRef=$.createRef(),this.resetRef=$.createRef(),this.on={load:this.contextFunction(this.props.onLoad),focus:this.contextFunction(this.props.onFocus),blur:this.contextFunction(this.props.onBlur),change:this.contextFunction(this.props.onChange),valid:this.contextFunction(this.props.onValid),invalid:this.contextFunction(this.props.onInvalid)},this.on.load()}contextFunction(t){return t?()=>t(this.getContext()):Qr}componentDidMount(){this.debug("componentDidMount"),this.mounted=!0,this.form.attachField(this.props.name,this)}componentWillUnmount(){this.debug("componentWillUnmount"),this.mounted=!1,this.form.detachField(this.props.name)}setFocusState(t,n){return this.setStatus(po,t,n)}setBlurState(t,n){return this.setStatus(PE,t,n)}onFocus(){this.setFocusState({},this.on.focus)}onBlur(){this.setBlurState({},this.props.validateOnBlur?()=>this.validation(this.on.blur):this.on.blur)}setFocus(){var t,n;(n=(t=this.inputRef)==null?void 0:t.current)==null||n.focus()}onChange(t){this.debug(`onChange(${t})`);const n=this.props.prepareValue?this.props.prepareValue(t):t,{invalid:r}=this.state.status,{validateOnChange:l,validateOnInvalid:i=!0,minValidateLength:a=1}=this.props,[s]=Kh(n);let u=l||i&&r;s<a&&!r&&(u=!1),this.setChangedState({value:n},()=>{this.form.setValue(this.props.name,n),u?this.validation(this.on.change):this.on.change()})}setValue(t,n){n==null||n.preventDefault(),this.onChange(t)}reset(t){t==null||t.preventDefault();const n=this.props.prepareValue?this.props.prepareValue(this.state.initialValue):this.state.initialValue;return this.debug(`reset initialValue:${this.state.initialValue} => ${n}`),this.setResetState({value:n},()=>{var r,l;return(l=(r=this.resetRef)==null?void 0:r.current)==null?void 0:l.reset()}),n}validation(t){this.validate(t).then(Qr).catch(Qr)}validate(t){this.debug("validate()");const n={name:this.name,label:this.props.label};return new Promise(this.validator()).then(r=>(this.debug(`validate() passed for ${this.name} field: `,r),this.setValidState(r,Ui(this.on.valid,t)),{...n,...r})).catch(r=>{throw this.debug(`validate() failed for ${this.name} field:`,r),this.setInvalidState(r,Ui(this.on.invalid,t)),{...n,...r}})}validator(){return(t,n)=>{const{value:r=""}=this.state,{validate:l,required:i,requiredMessage:a,validMessage:s}={...gu,...this.props},[u,d]=Kh(r);if(this.debug(`${this.name} field value is [${r}] length is [${u}]`),this.setValidatingState(),l){this.debug(`calling validate function for ${this.name} field`);const m=this.getContext();l(m.value,m,t,n).then(p=>{this.debug(`validate passed for ${this.name} field:`,p),t({value:p,message:s})}).catch(p=>{this.debug(`validate failed for ${this.name} field:`,p);const v=Un(p)?p:p.message;n({message:v})})}else d?i?(this.debug(`failing validation for ${this.name} field - required field is empty`),n({message:a})):(this.debug(`passing validation for ${this.name} field - value is empty but not required`),t({value:r,message:s})):(this.debug(`no validation defined for ${this.name} field`),t({value:r,message:s}))}}setValid(){this.setValidState({message:null},this.on.valid)}setInvalid(t){this.setInvalidState({message:t},this.on.invalid)}getContext(){const t={...gu,...this.props,...this.state,...this.actions,name:this.name,inputRef:this.inputRef,resetRef:this.resetRef,setRef:this.resetRef};return delete t.form,delete t.children,delete t.render,t}}At(Cr,"newStatus",r2),At(Cr,"debug",!1),At(Cr,"debugPrefix","Field > "),At(Cr,"debugColor","teal"),At(Cr,"actions",["onFocus","onBlur","onChange","setFocus","setValue","reset","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setFocusState","setBlurState"]);const b2=pg(Cr),{Context:w2,Provider:F2,Consumer:yL,Use:ot}=b2,S2=({field:e=ot()})=>!e.required&&e.showOptional&&o("span",{className:"optional",children:e.optionalLabel}),x2=fe(S2,"Form.Field.Optional"),E2=({field:e=ot()})=>e.required&&e.showRequired&&o("span",{className:"required",children:e.requiredLabel}),C2=fe(E2,"Form.Field.Required"),k2=({field:e=ot()})=>{const{labelClass:t="",label:n,id:r,required:l}=e,i=e.showRequired&&l,a=e.showOptional&&!l;return(n||i||a)&&c("label",{htmlFor:r,className:t,children:[n||o("span",{children:" "}),i&&o(C2,{field:e}),a&&o(x2,{field:e})]})},Fa=fe(k2,"Form.Field.Label"),T2=({field:e=ot()})=>{const{help:t,message:n}=e,r=n||t;return r?o("div",{className:"help",children:r}):null},qc=fe(T2,"Form.Field.Message"),R2=e=>t=>e.onChange(t.target.value),N2=e=>t=>e.onChange(t.target.checked),Mn={default:R2,checkbox:N2},L2=({field:e=ot()})=>{const{id:t,text:n,type:r="checkbox",inputClass:l="input",inputsClass:i="checkbox inputs",optionClass:a="option",checkedClass:s="checked",handler:u=Mn[r]||Mn.default}=e,d=ya(e),m=e.value,p=Rl({checked:m},{checked:s},a);return o("div",{className:i,children:c("label",{htmlFor:t,className:p,children:[o("span",{className:"checkbox",children:o("input",{className:l,type:r,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:u(e),...d,checked:e.value})}),o("span",{className:"label",children:n})]})})},$2=fe(L2,"Form.Input.Checkbox"),O2=({field:e=ot()})=>o("input",{type:"hidden",name:e.name,value:e.value}),A2=fe(O2,"Form.Input.Hidden"),P2=({field:e=ot()})=>{const{prefix:t,prefixClass:n="prefix"}=e;return t&&o("div",{className:n,children:t})},D2=fe(P2,"Form.Input.Prefix"),I2=({field:e=ot()})=>{const{options:t=[],type:n="radio",inputClass:r="input",inputsClass:l="radio inputs",optionClass:i="option",checkedClass:a="checked",handler:s=Mn[n]||Mn.default}=e,u=ya(e);return o("div",{className:l,children:t.map(d=>{d=yg(d);const m=`${e.id}-${d.value}`,p=e.value==d.value,v=Rl({checked:p},{checked:a},i,d.className);return c("label",{htmlFor:m,className:v,children:[o("input",{className:r,type:n,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:s(e),...u,id:m,checked:p,value:d.value}),o("span",{className:"label",children:d.text})]},d.value)})})},_2=fe(I2,"Form.Input.Radio"),j2=({field:e=ot()})=>{const{options:t=[],placeholder:n,type:r="select",className:l="input",inputsClass:i="select inputs",optionClass:a="option",handler:s=Mn[r]||Mn.default}=e,u=ya(e);return o("div",{className:i,children:c("select",{className:l,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:s(e),...u,value:e.value,required:e.required||!!n,children:[console.log(`render select with value: ${e.value} (${typeof e.value})`),!!n&&o("option",{value:"",hidden:!0,disabled:!0,children:n}),t.map(d=>(d=yg(d),console.log(`render option with value: ${d.value} (${typeof d.value}) = ${e.value===d.value?"SELECTED":""}`),o("option",{className:a,value:d.value,disabled:d.disabled,children:d.text},d.value)))]})})},M2=fe(j2,"Form.Input.Select"),B2=({field:e=ot()})=>{const{suffix:t,suffixClass:n="suffix"}=e;return t&&o("div",{className:n,children:t})},V2=fe(B2,"Form.Input.Suffix"),z2=({field:e=ot()})=>{const{type:t="text",inputClass:n="input",inputsClass:r="inputs",prefixedClass:l="prefixed",suffixedClass:i="suffixed",Prefix:a=D2,Suffix:s=V2,handler:u=Mn[t]||Mn.default}=e;let d=Rl(e,{prefix:l,suffix:i},r);const m=ya(e);return c("div",{className:d,children:[o(a,{field:e}),o("input",{type:t,className:n,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:u(e),...m}),o(s,{field:e})]})},Hi=fe(z2,"Form.Input.Text"),q2=({field:e=ot()})=>{const{className:t="input",inputsClass:n="inputs",rows:r=5}=e;return o("div",{className:n,children:o("textarea",{id:e.id,ref:e.inputRef,className:t,name:e.name,value:e.value,disabled:e.disabled,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,placeholder:e.placeholder,autoComplete:e.autocomplete,onChange:l=>e.onChange(l.target.value),onFocus:e.onFocus,onBlur:e.onBlur,rows:r})})},U2=fe(q2,"Form.Input.TextArea"),Xh={default:Hi,checkbox:$2,hidden:A2,radio:_2,select:M2,text:Hi,textarea:U2},H2=e=>{const{status:t,className:n,fieldClass:r,validClass:l,invalidClass:i,disabledClass:a,focusClass:s}=e;return Rl(t,{[gr]:l,[pr]:i,[po]:s,[Vc]:a},r,n)},W2=({field:e=ot(),children:t})=>{const{type:n,Label:r=Fa,Message:l=qc,Input:i=Xh[n]||Xh.default}=e,a=H2(e);return o("div",{className:a,children:t||c(Ee,{children:[o(r,{field:e}),o(i,{field:e}),o(l,{field:e})]})})},ke=fe(W2,"Form.Field.Layout"),Y2=e=>{const{id:t,value:n}=e;return{...e,id:t||$.useId(),value:n??e.default??AE}},G2=({name:e,children:t,Layout:n=ke,...r})=>{const l=dt(),i=Y2(l.fieldSpec(e,r)),a=t?fo(t)?t:[t]:null;return o(F2,{form:l,...i,children:a?a.map((s,u)=>vc(s)?o(w2.Consumer,{children:s},u):s):o(n,{})})},S=fe(G2,"Form.Field"),K2=({names:e,...t})=>o(Ee,{children:Pp(e).map(n=>o(S,{name:n,...t},n))}),vt=fe(K2,"Form.Fieldset"),Q2=({className:e="",legend:t,children:n,fields:r})=>c("fieldset",{className:e,children:[!!t&&o("legend",{children:t}),!!r&&o(vt,{names:r}),n]}),Wi=fe(Q2,"Form.Fieldset"),X2=({onClick:e,children:t,text:n="Button",type:r="button",...l})=>o("button",{type:r,onClick:e,...l,children:t||n}),Uc=fe(X2,"Form.Button"),Z2=({text:e="Cancel",className:t="cancel",Button:n=Uc,...r})=>o(n,{text:e,className:t,...r}),Sa=fe(Z2,"Form.Cancel"),J2=({type:e="reset",text:t="Reset",className:n="reset",Button:r=Uc,...l})=>{const{reset:i}=dt();return o(r,{type:e,text:t,className:n,onClick:i,...l})},vr=fe(J2,"Form.Reset"),eC=({type:e="submit",text:t="Submit",className:n="submit",Button:r=Uc,...l})=>{const{submit:i}=dt();return o(r,{type:e,text:t,className:n,onClick:i,...l})},se=fe(eC,"Form.Submit"),tC=({className:e="flex space",cancel:t={},submit:n={}})=>c("div",{className:e,children:[o(Sa,{...t}),o(se,{...n})]}),Fg=fe(tC,"Form.CancelSubmit"),nC=({className:e="controls",reset:t={},submit:n={}})=>c("div",{className:e,children:[o(vr,{...t}),o(se,{...n})]}),xa=fe(nC,"Form.ResetSubmit"),rC=({className:e="flex space",cancel:t={},reset:n={},submit:r={}})=>c("div",{className:e,children:[c("div",{children:[o(Sa,{...t}),o(vr,{...n})]}),o(se,{...r})]}),Sg=fe(rC,"Form.CancelResetSubmit"),oC=({status:e,children:t})=>e.changed&&t,Hc=wa(oC),lC=["values","config","status","fields"],vn=({show:e={values:!0},showAll:t=!1})=>{const n=dt();return o("div",{className:"debug",children:lC.map(r=>(t||e[r])&&c(et.Fragment,{children:[o("h4",{children:K1(r)}),o("pre",{children:JSON.stringify(n[r],null,2)})]},r))})},iC=fe(vn,"Form.Debug"),aC=()=>c(I,{children:[o(S,{name:"email",label:"Email Address",required:!0}),o(S,{name:"password",type:"password",label:"Password",required:!0}),o(se,{text:"Login"})]}),sC=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const BasicLoginForm = () =>
  <Form>
    <Field name="email" label="Email Address" required/>
    <Field name="password" type="password" label="Password" required/>
    <Submit text="Login"/>
  </Form>

export default BasicLoginForm`,_=({Element:e,code:t,children:n="",className:r="",caption:l})=>c("div",{className:`example ${r}`,children:[o("div",{className:"mar-t-2",children:o(Mt,{caption:l,code:xg(t)})}),n,e?o("div",{className:"mar-t-2",children:o(e,{})}):null]}),xg=e=>e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,""),uC=({prevLink:e,prevText:t,nextLink:n,nextText:r})=>c("div",{className:"flex space",children:[o(Zh,{caption:"Previous",text:t,link:e}),o(Zh,{caption:"Next",text:r,link:n})]}),Zh=({caption:e,text:t,link:n})=>n?c(J,{to:n,className:"prev-next-link",children:[o("h4",{children:e}),o("p",{children:t})]}):o("div",{}),yn=({uri:e})=>{const t=Br.items.findIndex(a=>a[0]===e);if(t<0)throw`Invalid tutorial page URI: ${e}`;const[n,r]=t>0?Br.items[t-1]:[],[l,i]=t<Br.items.length-1?Br.items[t+1]:[];return o(uC,{prevLink:n&&`/tutorial/${n}`,prevText:r,nextLink:l&&`/tutorial/${l}`,nextText:i})},cC=()=>c("div",{children:[o("h1",{children:"Defining a Form"}),c("p",{className:"intro",children:["One of the underlying principles of this library is, to borrow a phrase from Larry Wall, to make simple things simple and hard things possible. It should be just as easy, if not easier, to create a form using"," ",o("code",{children:"react-formula"})," as it should be using vanilla HTML."]}),o("h2",{children:"A Simple Login Form"}),o("p",{children:"So without further ado, let's look at the one form that most websites will require: a user login form."}),o(_,{Element:aC,code:sC,caption:"Basic Login Form",children:o("p",{children:`Try entering some values in the form below and click on the "Login" button. Also see what happens if you don't enter a value for either field.`})}),c("h2",{children:[o("code",{children:"Form"}),", ",o("code",{children:"Field"})," and ",o("code",{children:"Submit"})]}),c("p",{children:["A form is defined using the ",o(ae,{})," component.  This example contains two ",o(he,{})," components and a ",o(jn,{})," button.  Each ",o(he,{})," ",o("b",{children:"MUST"})," define a ",o("code",{children:"name"})," and everything else is optional. In both cases we add a ",o("code",{children:"label"})," and the ",o("code",{children:"required"})," ","flag to indicate that the user must enter a value.  In the case of the"," ",o("code",{children:"password"})," field we also set the input ",o("code",{children:"type"})," to"," ",o("code",{children:"password"}),".  For the ",o(jn,{})," component we set the"," ",o("code",{children:"text"}),' property to customise the text displayed on the button. Otherwise it defaults to "Submit".']}),o("h2",{children:"Where Next?"}),c("p",{children:["The ",o("code",{children:"required"})," property is useful for simple cases, but at some point you'll want to add more thorough validation for fields.  Let's look at that next."]}),o(yn,{uri:"simple-form"})]});function yr(e){this._maxSize=e,this.clear()}yr.prototype.clear=function(){this._size=0,this._values=Object.create(null)};yr.prototype.get=function(e){return this._values[e]};yr.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var dC=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Eg=/^\d+$/,hC=/^\d/,fC=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,mC=/^\s*(['"]?)(.*?)(\1)\s*$/,Wc=512,Jh=new yr(Wc),ef=new yr(Wc),tf=new yr(Wc),Cg={Cache:yr,split:vu,normalizePath:ss,setter:function(e){var t=ss(e);return ef.get(e)||ef.set(e,function(r,l){for(var i=0,a=t.length,s=r;i<a-1;){var u=t[i];if(u==="__proto__"||u==="constructor"||u==="prototype")return r;s=s[t[i++]]}s[t[i]]=l})},getter:function(e,t){var n=ss(e);return tf.get(e)||tf.set(e,function(l){for(var i=0,a=n.length;i<a;)if(l!=null||!t)l=l[n[i++]];else return;return l})},join:function(e){return e.reduce(function(t,n){return t+(Yc(n)||Eg.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){pC(Array.isArray(e)?e:vu(e),t,n)}};function ss(e){return Jh.get(e)||Jh.set(e,vu(e).map(function(t){return t.replace(mC,"$2")}))}function vu(e){return e.match(dC)||[""]}function pC(e,t,n){var r=e.length,l,i,a,s;for(i=0;i<r;i++)l=e[i],l&&(yC(l)&&(l='"'+l+'"'),s=Yc(l),a=!s&&/^\d+$/.test(l),t.call(n,l,s,a,i,e))}function Yc(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function gC(e){return e.match(hC)&&!e.match(Eg)}function vC(e){return fC.test(e)}function yC(e){return!Yc(e)&&(gC(e)||vC(e))}var yu={},bC={get exports(){return yu},set exports(e){yu=e}};bC.exports=function(e){return kg(wC(e),e)};yu.array=kg;function kg(e,t){var n=e.length,r=new Array(n),l={},i=n,a=FC(t),s=SC(e);for(t.forEach(function(d){if(!s.has(d[0])||!s.has(d[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)l[i]||u(e[i],i,new Set);return r;function u(d,m,p){if(p.has(d)){var v;try{v=", node was:"+JSON.stringify(d)}catch{v=""}throw new Error("Cyclic dependency"+v)}if(!s.has(d))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(d));if(!l[m]){l[m]=!0;var x=a.get(d)||new Set;if(x=Array.from(x),m=x.length){p.add(d);do{var T=x[--m];u(T,s.get(T),p)}while(m);p.delete(d)}r[--n]=d}}}function wC(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var l=e[n];t.add(l[0]),t.add(l[1])}return Array.from(t)}function FC(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var l=e[n];t.has(l[0])||t.set(l[0],new Set),t.has(l[1])||t.set(l[1],new Set),t.get(l[0]).add(l[1])}return t}function SC(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}const xC=Object.prototype.toString,EC=Error.prototype.toString,CC=RegExp.prototype.toString,kC=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",TC=/^Symbol\((.*)\)(.*)$/;function RC(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function nf(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return RC(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return kC.call(e).replace(TC,"Symbol($1)");const r=xC.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+EC.call(e)+"]":r==="RegExp"?CC.call(e):null}function Xr(e,t){let n=nf(e,t);return n!==null?n:JSON.stringify(e,function(r,l){let i=nf(this[r],t);return i!==null?i:l},2)}function Tg(e){return e==null?[]:[].concat(e)}let NC=/\$\{\s*(\w+)\s*\}/g;class mt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(NC,(l,i)=>Xr(n[i])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,l){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=l,this.errors=[],this.inner=[],Tg(t).forEach(i=>{mt.isError(i)?(this.errors.push(...i.errors),this.inner=this.inner.concat(i.inner.length?i.inner:i)):this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,mt)}}let tn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const l=r!=null&&r!==n?` (cast from the value \`${Xr(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Xr(n,!0)}\``+l:`${e} must match the configured type. The validated value was: \`${Xr(n,!0)}\``+l}},Dt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},LC={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},bu={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},$C={isValue:"${path} field must be ${value}"},OC={noUnknown:"${path} field has unspecified keys: ${unknown}"},AC={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:tn,string:Dt,number:LC,date:bu,object:OC,array:AC,boolean:$C});const Rg=e=>e&&e.__isYupSchema__;class Yi{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:l,otherwise:i}=n,a=typeof r=="function"?r:(...s)=>s.every(u=>u===r);return new Yi(t,(s,u)=>{var d;let m=a(...s)?l:i;return(d=m==null?void 0:m(u))!=null?d:u})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),l=this.fn(r,t,n);if(l===void 0||l===t)return t;if(!Rg(l))throw new TypeError("conditions must return a schema object");return l.resolve(n)}}const ei={context:"$",value:"."};class Nl{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===ei.context,this.isValue=this.key[0]===ei.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?ei.context:this.isValue?ei.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Cg.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let l=this.isContext?r:this.isValue?t:n;return this.getter&&(l=this.getter(l||{})),this.map&&(l=this.map(l)),l}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Nl.prototype.__isYupRef=!0;const Tn=e=>e==null;function Sr(e){function t({value:n,path:r="",options:l,originalValue:i,schema:a},s,u){const{name:d,test:m,params:p,message:v,skipAbsent:x}=e;let{parent:T,context:E,abortEarly:b=a.spec.abortEarly}=l;function g(O){return Nl.isRef(O)?O.getValue(n,T,E):O}function h(O={}){const H=Object.assign({value:n,originalValue:i,label:a.spec.label,path:O.path||r,spec:a.spec},p,O.params);for(const oe of Object.keys(H))H[oe]=g(H[oe]);const te=new mt(mt.formatError(O.message||v,H),n,H.path,O.type||d);return te.params=H,te}const f=b?s:u;let y={path:r,parent:T,type:d,from:l.from,createError:h,resolve:g,options:l,originalValue:i,schema:a};const w=O=>{mt.isError(O)?f(O):O?u(null):f(h())},F=O=>{mt.isError(O)?f(O):s(O)},C=x&&Tn(n);if(!l.sync){try{Promise.resolve(C?!0:m.call(y,n,y)).then(w,F)}catch(O){F(O)}return}let k;try{var L;if(k=C?!0:m.call(y,n,y),typeof((L=k)==null?void 0:L.then)=="function")throw new Error(`Validation test of type: "${y.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(O){F(O);return}w(k)}return t.OPTIONS=e,t}function PC(e,t,n,r=n){let l,i,a;return t?(Cg.forEach(t,(s,u,d)=>{let m=u?s.slice(1,s.length-1):s;e=e.resolve({context:r,parent:l,value:n});let p=e.type==="tuple",v=d?parseInt(m,10):0;if(e.innerType||p){if(p&&!d)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&v>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);l=n,n=n&&n[v],e=p?e.spec.types[v]:e.innerType}if(!d){if(!e.fields||!e.fields[m])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);l=n,n=n&&n[m],e=e.fields[m]}i=m,a=u?"["+s+"]":"."+s}),{schema:e,parent:l,parentPath:i}):{parent:l,parentPath:t,schema:e}}class Gi extends Set{describe(){const t=[];for(const n of this.values())t.push(Nl.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Gi(this.values())}merge(t,n){const r=this.clone();return t.forEach(l=>r.add(l)),n.forEach(l=>r.delete(l)),r}}function zr(e,t=new Map){if(Rg(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=zr(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,l]of e.entries())n.set(r,zr(l,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(zr(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,l]of Object.entries(e))n[r]=zr(l,t)}else throw Error(`Unable to clone ${e}`);return n}let Bn=class{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Gi,this._blacklist=new Gi,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(tn.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=zr(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const l=Object.assign({},n.spec,r.spec);return r.spec=l,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{t.tests.forEach(a=>{i.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((l,i)=>i.resolve(l,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,l;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(l=t.recursive)!=null?l:this.spec.recursive})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),l=n.assert==="ignore-optionality",i=r._cast(t,n);if(n.assert!==!1&&!r.isType(i)){if(l&&Tn(i))return i;let a=Xr(t),s=Xr(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return i}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((l,i)=>i.call(this,l,t,this),t);return r===void 0&&(r=this.getDefault()),r}_validate(t,n={},r,l){let{path:i,originalValue:a=t,strict:s=this.spec.strict}=n,u=t;s||(u=this._cast(u,Object.assign({assert:!1},n)));let d=[];for(let m of Object.values(this.internalTests))m&&d.push(m);this.runTests({path:i,value:u,originalValue:a,options:n,tests:d},r,m=>{if(m.length)return l(m,u);this.runTests({path:i,value:u,originalValue:a,options:n,tests:this.tests},r,l)})}runTests(t,n,r){let l=!1,{tests:i,value:a,originalValue:s,path:u,options:d}=t,m=E=>{l||(l=!0,n(E,a))},p=E=>{l||(l=!0,r(E,a))},v=i.length,x=[];if(!v)return p([]);let T={value:a,originalValue:s,path:u,options:d,schema:this};for(let E=0;E<i.length;E++){const b=i[E];b(T,m,function(h){h&&(x=x.concat(h)),--v<=0&&p(x)})}}asNestedTest({key:t,index:n,parent:r,parentPath:l,originalParent:i,options:a}){const s=t??n;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof s=="number";let d=r[s];const m=Object.assign({},a,{strict:!0,parent:r,value:d,originalValue:i[s],key:void 0,[u?"index":"key"]:s,path:u||s.includes(".")?`${l||""}[${d?s:`"${s}"`}]`:(l?`${l}.`:"")+t});return(p,v,x)=>this.resolve(m)._validate(d,m,v,x)}validate(t,n){let r=this.resolve(Object.assign({},n,{value:t}));return new Promise((l,i)=>r._validate(t,n,(a,s)=>{mt.isError(a)&&(a.value=s),i(a)},(a,s)=>{a.length?i(new mt(a,s)):l(s)}))}validateSync(t,n){let r=this.resolve(Object.assign({},n,{value:t})),l;return r._validate(t,Object.assign({},n,{sync:!0}),(i,a)=>{throw mt.isError(i)&&(i.value=a),i},(i,a)=>{if(i.length)throw new mt(i,t);l=a}),l}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(mt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(mt.isError(r))return!1;throw r}}_getDefault(){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this):zr(t)}getDefault(t){return this.resolve(t||{})._getDefault()}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=Sr({message:n,name:"nullable",test(l){return l===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=Sr({message:n,name:"optionality",test(l){return l===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=tn.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=tn.notNull){return this.nullability(!1,t)}required(t=tn.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=tn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),l=Sr(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(i||a.OPTIONS.test===l.OPTIONS.test))),r.tests.push(l),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),l=Tg(t).map(i=>new Nl(i));return l.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new Yi(l,n):Yi.fromOptions(l,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=Sr({message:t,name:"typeError",test(r){return!Tn(r)&&!this.schema._typeCheck(r)?this.createError({params:{type:this.schema.type}}):!0}}),n}oneOf(t,n=tn.oneOf){let r=this.clone();return t.forEach(l=>{r._whitelist.add(l),r._blacklist.delete(l)}),r.internalTests.whiteList=Sr({message:n,name:"oneOf",skipAbsent:!0,test(l){let i=this.schema._whitelist,a=i.resolveAll(this.resolve);return a.includes(l)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:a}})}}),r}notOneOf(t,n=tn.notOneOf){let r=this.clone();return t.forEach(l=>{r._blacklist.add(l),r._whitelist.delete(l)}),r.internalTests.blacklist=Sr({message:n,name:"notOneOf",test(l){let i=this.schema._blacklist,a=i.resolveAll(this.resolve);return a.includes(l)?this.createError({params:{values:Array.from(i).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:l,optional:i,nullable:a}=n.spec;return{meta:l,label:r,optional:i,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,d,m)=>m.findIndex(p=>p.name===u.name)===d)}}};Bn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Bn.prototype[`${e}At`]=function(t,n,r={}){const{parent:l,parentPath:i,schema:a}=PC(this,t,n,r.context);return a[e](l&&l[i],Object.assign({},r,{parent:l,path:t}))};for(const e of["equals","is"])Bn.prototype[e]=Bn.prototype.oneOf;for(const e of["not","nope"])Bn.prototype[e]=Bn.prototype.notOneOf;let DC=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,IC=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,_C=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,jC=e=>Tn(e)||e===e.trim(),MC={}.toString();function Rt(){return new Ng}class Ng extends Bn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const l=t!=null&&t.toString?t.toString():t;return l===MC?t:l})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||tn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=Dt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=Dt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=Dt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,l,i;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:l,name:i}=n:l=n),this.test({name:i||"matches",message:l||Dt.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=Dt.email){return this.matches(DC,{name:"email",message:t,excludeEmptyString:!0})}url(t=Dt.url){return this.matches(IC,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Dt.uuid){return this.matches(_C,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Dt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:jC})}lowercase(t=Dt.lowercase){return this.transform(n=>Tn(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Tn(n)||n===n.toLowerCase()})}uppercase(t=Dt.uppercase){return this.transform(n=>Tn(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Tn(n)||n===n.toUpperCase()})}}Rt.prototype=Ng.prototype;var BC=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function VC(e){var t=[1,4,5,6,7,10,11],n=0,r,l;if(l=BC.exec(e)){for(var i=0,a;a=t[i];++i)l[a]=+l[a]||0;l[2]=(+l[2]||1)-1,l[3]=+l[3]||1,l[7]=l[7]?String(l[7]).substr(0,3):0,(l[8]===void 0||l[8]==="")&&(l[9]===void 0||l[9]==="")?r=+new Date(l[1],l[2],l[3],l[4],l[5],l[6],l[7]):(l[8]!=="Z"&&l[9]!==void 0&&(n=l[10]*60+l[11],l[9]==="+"&&(n=0-n)),r=Date.UTC(l[1],l[2],l[3],l[4],l[5]+n,l[6],l[7]))}else r=Date.parse?Date.parse(e):NaN;return r}let zC=new Date(""),qC=e=>Object.prototype.toString.call(e)==="[object Date]";class Gc extends Bn{constructor(){super({type:"date",check(t){return qC(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)?t:(t=VC(t),isNaN(t)?Gc.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Nl.isRef(t))r=t;else{let l=this.cast(t);if(!this._typeCheck(l))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=l}return r}min(t,n=bu.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(l){return l>=this.resolve(r)}})}max(t,n=bu.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(l){return l<=this.resolve(r)}})}}Gc.INVALID_DATE=zC;const UC={email:{label:"Email Address",validate:e=>Rt().trim().email().required("You must enter your email address!").validate(e)},password:{label:"Password",type:"password",validate:e=>Rt().trim().required("You must enter your password!").min(6,"Your password should be at least 6 characters").validate(e)}},HC=()=>c(I,{fields:UC,children:[o(S,{name:"email"}),o(S,{name:"password"}),o(se,{text:"Login"})]}),WC=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
import * as yup  from 'yup'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const fields = {
  email: {
    label: 'Email Address',
    validate: value => yup
      .string()
      .trim()
      .email()
      .required('You must enter your email address!')
      .validate(value)
  },
  password: {
    label: 'Password',
    type:  'password',
    validate: value => yup
      .string()
      .trim()
      .required('You must enter your password!')
      .min(6, 'Your password should be at least 6 characters')
      .validate(value)
  },
}

const LoginWithValidation = () =>
  <Form fields={fields}>
    <Field name="email"/>
    <Field name="password"/>
    <Submit text="Login"/>
  </Form>

export default LoginWithValidation`,YC=()=>c("div",{children:[o("h1",{children:"Field Validation"}),c("p",{className:"intro",children:["It's good practice to validate fields as thoroughly as possible.  On the client-side this is important to help draw the user's attention to any invalid fields ",o("i",{children:"before"})," the form is submitted.  Of course you'll also need some kind of server-side validation, but we'll look at that later."]}),o("h2",{children:"Login Form With Field Validation"}),c("p",{children:["You can add a ",o("code",{children:"validate"})," property to a field to provide a function to validate the input.  This will be passed the field value and should return a Promise that resolves with the (possibly modified) value if the input is valid, or rejects with an error if not. In these examples we'll be using"," ",o("a",{href:"https://github.com/jquense/yup",children:"Yup"})," but you should be able to use any validation library or even roll your own validation functions for special cases."]}),c("p",{children:["You can add the ",o("code",{children:"validate"})," function to the ",o(he,{})," ","component if you like, but you may find that things quickly get a bit messy.  So this is a good opportunity to demonstrate the other way of defining form fields, using a schema.  This allows you to define your field properties separately and then pass them to the ",o(ae,{})," ","component as the ",o("code",{children:"fields"})," property.  When you include a ",o(he,{})," the ",o("code",{children:"name"})," will be used to lookup the default properties for the field from the ",o("code",{children:"fields"})," you've provided."]}),c("p",{children:["There are a number of benefits to defining a separate schema for your form fields.  For one, it means that all your field definitions are in a single place where you can easily inspect and edit them without having to wade through lots of markup.  It also means that your form markup remains free of all the functional code, allowing you to concentrate on layout, styling and other presentational aspects. If you decide to split a long form into multiple parts, change the order of some fields, or perhaps display some fields side-by-side instead of stacked vertically, then it's easier to move a single"," ",o("code",{className:"code",children:"Field"})," element around, or just edit the "," ",o("code",{className:"code",children:"name"})," property than it is to cut and paste large blocks of code."]}),o(_,{Element:HC,code:WC,caption:"Field Validation",children:o("p",{children:`Try entering some values in the form below and click on the "Login" button. If you don't provide a value, or if you provide an invalid value then you should see the validation errors.`})}),o("h2",{children:o("code",{children:"validateOnBlur"})}),c("p",{children:["By default, field validation happens when the form is submitted. You can add the ",o("code",{children:"validateOnBlur"})," property to either the"," ",o(ae,{})," or individual ",o(he,{})," components if you want the validation to happen when a field is blurred."]}),c("h2",{children:[o("code",{children:"validateOnChange"})," and ",o("code",{children:"minValidationLength"})]}),c("p",{children:["You can add the ",o("code",{children:"validateOnChange"})," property to either the"," ",o(ae,{})," or individual ",o(he,{})," components if you want validation to happen any time the field value changes, i.e. as the user types. The ",o("code",{children:"minValidationLength"})," can be set if you only want it to start after the user has entered a particular number of characters. The default values is ",o("code",{children:"1"}),"."]}),o("h2",{children:"Where Next?"}),o("p",{children:"If you need to perform some kind of validation where you have access to all of the submitted values then you can do that at the form level We'll look at that next."}),o(yn,{uri:"field-validation"})]}),GC=e=>new Promise((t,n)=>e.password===e.passcheck?t(e):n({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),KC=e=>Rt().trim().email().required("You must enter your email address!").validate(e),rf=e=>Rt().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(e),QC={email:{label:"Email Address",validate:KC},password:{label:"Password",type:"password",validate:rf},passcheck:{label:"Confirm Password",type:"password",validate:rf}},XC=()=>c(I,{fields:QC,validate:GC,children:[o(vt,{names:"email password passcheck"}),o(se,{text:"Register"})]}),ZC=`import { Form, Fields, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields, Submit } from '@abw/react-formula'
import * as yup  from 'yup'

const validateForm = values => new Promise(
  (resolve, reject) => {
    if (values.password === values.passcheck) {
      return resolve(values)
    }
    else {
      return reject({
        error: "Your passwords don't match!",
        errors: [
          { name: 'password',  message: 'Please re-enter your password' },
          { name: 'passcheck', message: 'Please re-confirm your password' },
        ]
      })
    }
  }
)

const validateEmail = value => yup
  .string()
  .trim()
  .email()
  .required('You must enter your email address!')
  .validate(value)

const validatePassword = value => yup
  .string()
  .trim()
  .required('You must enter a password!')
  .min(6, 'Your password should be at least 6 characters')
  .validate(value)

const fields = {
  email: {
    label:    'Email Address',
    validate: validateEmail
  },
  password: {
    label:    'Password',
    type:     'password',
    validate: validatePassword
  },
  passcheck: {
    label:    'Confirm Password',
    type:     'password',
    validate: validatePassword
  },
}

const LoginWithValidation = () =>
  <Form fields={fields} validate={validateForm}>
    <Fields names="email password passcheck"/>
    <Submit text="Register"/>
  </Form>

export default LoginWithValidation`,JC=()=>c("div",{children:[o("h1",{children:"Form Validation"}),o("p",{className:"intro",children:"Sometimes you need access to all the submitted field values to validate the form.  The classic example is a registration form where you ask the user to enter their password twice to make sure that they're sure about what they've entered.  Although this isn't necessarily considered good practice these days, it illustrates the principle well."}),o("h2",{children:"Registration Form With Validation"}),c("p",{children:["You can add a ",o("code",{children:"validate"})," property to a form to provide a function to validate the inputs from all fields.  The function will be called after the field-level validation, and only if all fields have validated successfully."]}),c("p",{children:["The function will be passed a ",o("code",{children:"values"})," object containing the validated field values.  It should return a Promise that resolves with the (possibly modified) values if the input is valid, or rejects with an an ",o("code",{children:"error"})," and/or array of ",o("code",{children:"errors"})," if not. The ",o("code",{children:"error"})," can be used to define an error for the form that isn't specify to any particular field.  Each item in the errors array should relate to a field identified by ",o("code",{children:"name"}),", with an additional ",o("code",{children:"message"})," indicating why it is invalid."]}),c("p",{children:["We're also using this opportunity to introduce you to the"," ",o(Bp,{})," component which allows you to add multiple fields to a ",o(ae,{})," in one fell swoop."]}),o(_,{Element:XC,code:ZC,caption:"Form Validation",children:o("p",{children:`Try entering some values in the form below and click on the "Register" button. You should see the field level validation errors if you don't provide a valid value for any field. Or if you provide different values for the Password and Confirm Password fields then you should see the form validation errors.`})}),o("h2",{children:"Where Next?"}),o("p",{children:"Now that we've handled the validation of the form we can talk about how the form is submitted."}),o(yn,{uri:"form-validation"})]}),ek=()=>{const[e,t]=$.useState();return c(Ee,{children:[c(I,{onSubmit:r=>Promise.resolve(t(r)),debug:!0,children:[o(S,{name:"email",label:"Email Address",required:!0}),o(S,{name:"password",type:"password",label:"Password",required:!0}),o(se,{text:"Login"})]}),e?c("div",{className:"debug",children:[o("h4",{children:"Submitted Values"}),o("pre",{children:JSON.stringify(e)})]}):null]})},tk=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const DummySubmit = () => {
  const [values, setValues] = useState()

  const onSubmit = values => Promise.resolve(
    setValues(values)
  )

  return (
    <>
      <Form onSubmit={onSubmit} debug>
        <Field name="email" label="Email Address" required/>
        <Field name="password" type="password" label="Password" required/>
        <Submit text="Login"/>
      </Form>
      { values
        ? <div className="debug">
            <h4>Submitted Values</h4>
            <pre>{JSON.stringify(values)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default DummySubmit`,nk=()=>c("div",{children:[o("h1",{children:"Form Submission"}),c("p",{className:"intro",children:["To handle submission of a form we need to add an ",o("code",{children:"onSubmit"})," ","handler to the ",o(ae,{})," component. In most cases this will be making a call to a back-end API but to demonstrate the basic principle let's start with something simpler."]}),c("h2",{children:[o("code",{children:"onSubmit"})," Handler"]}),c("p",{children:["We'll create a function which stores the submitted"," ",o("code",{children:"values"})," in a state variable and displays them on the screen.  The ",o("code",{children:"onSubmit"})," handler is passed an object containing the validated form values.  It should return a Promise which resolves on success.  If an error occurs then the Promise should reject, returning an object containing either an ",o("code",{children:"error"})," and/or an array of ",o("code",{children:"errors"}),".  These are handled the same as for client-side form validation."]}),o(_,{Element:ek,code:tk,caption:"Dummy Submission",children:o("p",{children:'Try entering some values in the form below and click on the "Login" button.  You should see the submitted values appear in a debugging window beneath the form.'})}),o(yn,{uri:"form-submission"})]}),rk=()=>{const[e,t]=$.useState();return c(Ee,{children:[c(I,{onSubmit:l=>Promise.resolve({status:200,data:{message:"Welcome back!  You are now logged in.",user:{id:12345,email:l.email,name:"Bobby Badger"}}}),onSuccess:l=>t(l.data),debug:!0,children:[o(S,{name:"email",label:"Email Address",required:!0}),o(S,{name:"password",type:"password",label:"Password",required:!0}),o(se,{text:"Login"})]}),e?c("div",{className:"debug",children:[o("h4",{children:"Emulated Response"}),o("pre",{children:JSON.stringify(e,null,2)})]}):null]})},ok=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitResponse = () => {
  const [response, setResponse] = useState()

  // dummy submission in the style of fetch or axios
  const onSubmit = values => {
    return Promise.resolve({
      status: 200,
      data:   {
        message: 'Welcome back!  You are now logged in.',
        user:    {
          id:    12345,
          email: values.email,
          name:  'Bobby Badger',
        },
      }
    })
  }

  // handle successful response
  const onSuccess = response => setResponse(response.data)

  return (
    <>
      <Form onSubmit={onSubmit} onSuccess={onSuccess} debug>
        <Field name="email" label="Email Address" required/>
        <Field name="password" type="password" label="Password" required/>
        <Submit text="Login"/>
      </Form>
      { response
        ? <div className="debug">
            <h4>Emulated Response</h4>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default SubmitResponse`,lk=()=>c("div",{children:[o("h1",{children:"Submission Response"}),o("p",{className:"intro",children:"We now need to think about what happens in the real world where a form submission results in a call to a back-end API.  There are, broadly speaking, two possible outcomes: the call is successful, or it fails for some reason."}),o("h2",{children:o("code",{children:"onSuccess"})}),c("p",{children:["Let's start by looking at the case there the submission is successful.  In this example we define an ",o("code",{children:"onSubmit"})," function which returns a resolved promise.  This is emulating how both"," ",o("a",{href:"https://axios-http.com/",children:"Axios"})," and the native"," ",o("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:"Fetch API"})," ","API work."]}),c("p",{children:["The additional step is to defined an ",o("code",{children:"onSuccess"})," handler which can do something to handle the successful response.  In this case we're calling the ",o("code",{children:"setResponse"})," function to store the response data, much like in the previous example, except that this time we're emulating the full request and response cycle."]}),o(_,{Element:rk,code:ok,caption:"Submission Response",children:o("p",{children:'Try entering some values in the form below and click on the "Login" button.  You should see the values returned by an emulated server response appear in a debugging window beneath the form.  Also note that the form is reset on a successful submission.'})}),o(yn,{uri:"submission-response"})]}),ik=()=>o(Ee,{children:c(I,{onSubmit:()=>{throw"Oh noes! An error occurred"},children:[o(S,{name:"email",label:"Email Address",required:!0}),o(S,{name:"password",type:"password",label:"Password",required:!0}),o(se,{text:"Login"})]})}),ak=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitThrow = () => {
  const onSubmit = () => {
    throw('Oh noes! An error occurred')
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Field name="email" label="Email Address" required/>
        <Field name="password" type="password" label="Password" required/>
        <Submit text="Login"/>
      </Form>
    </>
  )
}

export default SubmitThrow`,sk=()=>o(Ee,{children:c(I,{onSubmit:()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]}),children:[o(S,{name:"email",label:"Email Address",required:!0,debug:!0}),o(S,{name:"password",type:"password",label:"Password",required:!0}),o(se,{text:"Login"})]})}),uk=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitReject = () => {
  const onSubmit = () => Promise.reject({
    errors: [
      {
        name:    'email',
        message: 'Your email address is not valid'
      },
      {
        name:    'password',
        message: 'Your password is too easy to guess'
      }
    ],
  })

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Field name="email" label="Email Address" required debug/>
        <Field name="password" type="password" label="Password" required/>
        <Submit text="Login"/>
      </Form>
    </>
  )
}

export default SubmitReject`,ck=()=>{const[e,t]=$.useState();return c(Ee,{children:[c(I,{onSubmit:()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]}),onError:t,children:[o(S,{name:"email",label:"Email Address",required:!0,debug:!0}),o(S,{name:"password",type:"password",label:"Password",required:!0}),o(se,{text:"Login"})]}),e?c("div",{className:"debug",children:[o("h4",{children:"Submission Error"}),o("pre",{children:JSON.stringify(e,null,2)})]}):null]})},dk=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitThrow = () => {
  const [error, setError] = useState()

  const onSubmit = () => Promise.reject({
    errors: [
      {
        name:    'email',
        message: 'Your email address is not valid'
      },
      {
        name:    'password',
        message: 'Your password is too easy to guess'
      }
    ],
  })

  return (
    <>
      <Form onSubmit={onSubmit} onError={setError}>
        <Field name="email" label="Email Address" required debug/>
        <Field name="password" type="password" label="Password" required/>
        <Submit text="Login"/>
      </Form>
      { error
        ? <div className="debug">
            <h4>Submission Error</h4>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default SubmitThrow`,hk=()=>c("div",{children:[o("h1",{children:"Submission Errors"}),c("p",{className:"intro",children:["For a good user experience we should use client-side validation to try and catch all data entry errors ",o("i",{children:"before"})," they get submitted. However, it's not always possible to do that.  It may be the case that validating a field requires access to the database and is best handled on the server.  Or perhaps a field should be validated server-side for security reasons (e.g. validating a Captcha).  Or an API request could fail or otherwise be rejected for any number of other reasons.  So we must know how to handle these cases."]}),o("h2",{children:"Simple Error"}),c("p",{children:["If a submission throws an error or returns an error via a rejected Promise then the form submission handler will set the internal"," ",o("code",{children:"error"})," state variable. By default this error will be displayed in the form header.  See the ",o(jp,{})," component for more information about changing how and if errors are displayed."]}),o(_,{Element:ik,code:ak,caption:"Error Thrown",children:o("p",{children:"Try submitting this form to see what happens when an error is thrown. You should see the error displayed in the form header and also in a debugging window beneath the form."})}),o("h2",{children:"Rejected Promise"}),c("p",{children:["In most cases a failed submission should return a rejected Promise. The data returned should be an objecting containing either a single",o("code",{children:"error"})," string (or object containing a ",o("code",{children:"message"}),"), or an array of ",o("code",{children:"errors"}),".  Each element in the array can be an error string, but the more usual (and useful) case is for each element to be an object containing the error ",o("code",{children:"message"}),"."]}),c("p",{children:["The benefit of this approach is that error objects can also contain the ",o("code",{children:"name"})," of the field that it relates to.  The corresponding field will be marked as invalid and have the error message set so that it can be displayed under the input.  Furthermore, the field label is copied into the error element so that it can be displayed in the error panel at the start of the form."]}),o("p",{children:"This would be the typical way to handle a request that failed due to server-side validation errors."}),o(_,{Element:sk,code:uk,caption:"Error Thrown",children:o("p",{children:"Try submitting the form to see the errors generated."})}),o("h2",{children:o("code",{children:"onError"})}),c("p",{children:["You can provide an ",o("code",{children:"onError"})," handler which will be called when an error response is received.  In this example we simply call a ",o("code",{children:"setError()"})," function to store the error in a React state variable and then display it beneath the form."]}),o(_,{Element:ck,code:dk,caption:"onError",children:c("p",{children:["Try submitting the form to see the errors generated.  The "," ",o("code",{children:"onError"})," handler will store them in the state variable and display them beneath the form."]})}),o(yn,{uri:"submission-errors"})]}),fk=e=>new Promise((t,n)=>e.password===e.passcheck?t(e):n({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),mk=e=>Rt().trim().email().required("You must enter your email address!").validate(e),of=e=>Rt().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(e),pk={name:{label:"Your name",required:!0},email:{label:"Email address",required:!0,validate:mk},password:{label:"Password",type:"password",required:!0,validate:of},passcheck:{label:"Confirm password",type:"password",required:!0,validate:of},experience:{label:"What is your level of experience?",type:"radio",options:["Beginner","Intermediate","Expert"],className:"wide",inputsClass:"radio inputs lg-grid-3"},dob:{type:"date",label:"Date of Birth"},price:{type:"number",label:"How much would you pay for this?",prefix:"£",suffix:".00",min:11,max:100},animal:{label:"What is your favourite animal?",type:"select",default:"Badger",options:["Badger","Ferret","Stoat"]},color:{label:"What is your favourite color?",type:"select",default:"Red",options:[{value:null,text:"Select a color"},{value:"red",text:"Red"},{value:"orange",text:"Orange"},{value:"yellow",text:"Yellow"},{value:"violet",text:"Violet"},{value:"white",text:"White"}]},terms:{label:"Terms and conditions",type:"checkbox",text:"I accept the Terms and Conditions",className:"wide",required:!0,requiredMessage:"You must accept the Terms and Conditions"}},gk=()=>{const[e,t]=$.useState();return c(I,{fields:pk,validate:fk,showRequired:!0,showOptional:!0,children:[c(Wi,{legend:"Your Details",children:[o("div",{className:"lg-grid-2",children:o(vt,{names:"name email"})}),o("div",{className:"lg-grid-2",children:o(vt,{names:"password passcheck"})})]}),c(Wi,{legend:"Other Information",children:[o("div",{className:"lg-grid-2",children:o(vt,{names:"dob price"})}),o(S,{name:"experience"}),c("div",{className:"lg-grid-2",children:[o(S,{name:"animal"}),o(S,{name:"color",onChange:t})]}),(e==null?void 0:e.value)&&c("div",{style:{color:e.value,backgroundColor:"#444",padding:"0.25rem 0.5rem",textAlign:"center"},children:[e.value," is a great color!"]})]}),o(S,{name:"terms"}),o(se,{text:"Register"}),o(vn,{})]})},vk=`import { Form, Field, Fields, Fieldset, Submit, Debug } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
import { useState } from 'react'
// PRETEND: import { Form, Field, Fields, Fieldset, Submit, Debug } from '@abw/react-formula'
import * as yup  from 'yup'

const validateForm = values => new Promise(
  (resolve, reject) => {
    if (values.password === values.passcheck) {
      return resolve(values)
    }
    else {
      return reject({
        error: "Your passwords don't match!",
        errors: [
          { name: 'password',  message: 'Please re-enter your password' },
          { name: 'passcheck', message: 'Please re-confirm your password' },
        ]
      })
    }
  }
)

const validateEmail = value => yup
  .string()
  .trim()
  .email()
  .required('You must enter your email address!')
  .validate(value)

const validatePassword = value => yup
  .string()
  .trim()
  .required('You must enter a password!')
  .min(6, 'Your password should be at least 6 characters')
  .validate(value)

const fields = {
  name: {
    label:    'Your name',
    required: true
  },
  email: {
    label:    'Email address',
    required: true,
    validate: validateEmail
  },
  password: {
    label:    'Password',
    type:     'password',
    required: true,
    validate: validatePassword
  },
  passcheck: {
    label:    'Confirm password',
    type:     'password',
    required: true,
    validate: validatePassword
  },
  experience: {
    label:    'What is your level of experience?',
    type:     'radio',
    options:  ['Beginner', 'Intermediate', 'Expert'],
    className: 'wide',
    inputsClass: 'radio inputs lg-grid-3',
  },
  dob: {
    type:  'date',
    label: 'Date of Birth',
  },
  price: {
    type:  'number',
    label: 'How much would you pay for this?',
    prefix: '£',
    suffix: '.00',
    min: 11,
    max: 100
  },
  animal: {
    label:    'What is your favourite animal?',
    type:     'select',
    default:  'Badger',
    options:  ['Badger', 'Ferret', 'Stoat']
  },
  color: {
    label:    'What is your favourite color?',
    type:     'select',
    default:  'Red',
    options:  [
      { value: null,     text: 'Select a color' },
      { value: 'red',    text: 'Red'    },
      { value: 'orange', text: 'Orange' },
      { value: 'yellow', text: 'Yellow' },
      { value: 'violet', text: 'Violet' },
      { value: 'white',  text: 'White'  },
    ]
  },
  terms: {
    label:    'Terms and conditions',
    type:     'checkbox',
    text:     'I accept the Terms and Conditions',
    className: 'wide',
    required:  true,
    requiredMessage: 'You must accept the Terms and Conditions'
  },
}

const RegistrationForm = () => {
  const [color, setColor] = useState()

  return (
    <Form
      fields={fields} validate={validateForm}
      showRequired showOptional
    >
      <Fieldset legend="Your Details">
        <div className="lg-grid-2">
          <Fields names="name email"/>
        </div>
        <div className="lg-grid-2">
          <Fields names="password passcheck"/>
        </div>
      </Fieldset>
      <Fieldset legend="Other Information">
        <div className="lg-grid-2">
          <Fields names="dob price"/>
        </div>
        <Field name="experience"/>
        <div className="lg-grid-2">
          <Field name="animal"/>
          <Field name="color" onChange={setColor}/>
        </div>
        { color?.value &&
          <div
            style={{
              color: color.value,
              backgroundColor: '#444',
              padding: '0.25rem 0.5rem',
              textAlign: 'center'
            }}
          >{color.value} is a great color!</div>
        }
      </Fieldset>
      <Field name="terms"/>
      <Submit text="Register"/>
      <Debug/>
    </Form>
  )
}

export default RegistrationForm`,yk=`@media (min-width: 1024px) {
  .lg-grid-2 {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .lg-grid-3 {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}`,bk=()=>c("div",{children:[o("h1",{children:"Complete Registration Form"}),o("p",{className:"intro",children:"Here's a more complete (albeit rather contrived) example of a user registration form."}),o("h2",{children:"Input Types"}),c("p",{children:["This example demonstrates some of the other fields input types. Set the ",o(he,{})," ",o("code",{children:"type"})," to ",o("code",{children:"radio"})," for a ",o(p0,{})," button input and provide some ",o("code",{children:"options"}),", as shown here for the ",o("code",{children:"experience"})," field.  Or set it to ",o("code",{children:"select"})," for a ",o(g0,{})," input as shown in the"," ",o("code",{children:"animal"})," field.  Set it to ",o("code",{children:"checkbox"})," for a"," ",o(m0,{})," and provide some ",o("code",{children:"text"})," to go alongside it."]}),c("p",{children:["You can also use the ",o("code",{children:"type"})," to set other text input types, like ",o("code",{children:"number"})," and ",o("code",{children:"date"}),"."]}),o(_,{Element:gk,code:vk,caption:"Registration Form"}),c("h2",{children:[o("code",{children:"Fieldset"})," Component"]}),c("p",{children:["The example includes the ",o(d0,{})," component which can be used to group fields together in a set, complete with a ",o("code",{children:"legend"}),"."]}),c("h2",{children:[o("code",{children:"Debug"})," Component"]}),c("p",{children:["This example also includes the ",o(u0,{})," component which, as the name suggests, can be useful for debugging."]}),c("h2",{children:[o("code",{children:"showRequired"})," and ",o("code",{children:"showOptional"})]}),c("p",{children:["The ",o("code",{children:"showOptional"})," and ",o("code",{children:"showRequired"})," properties can be set on the ",o(ae,{})," or individual ",o(he,{})," components to have an additional label displayed telling the user which fields they do and don't need to complete."]}),o("h2",{children:o("code",{children:"onChange"})}),c("p",{children:["The ",o("code",{children:"onChange"})," property can be added to a ",o(he,{})," to watch for changes in the field value.  You can see it in use above in the ",o("code",{children:"color"})," field."]}),o("h2",{children:"Custom CSS"}),c("p",{children:["The example above uses a couple of custom CSS classes, "," ",o("code",{children:"lg-grid-2"})," and ",o("code",{children:"lg-grid-3"})," to display fields in 2 and 3 columns, respectively, on larger screen sizes. You may already be using a CSS framework which includes something similar which you can use instead.  Here's the CSS for those classes for completeness."]}),o(Mt,{code:yk,language:"css",className:"mar-b-2"}),o(yn,{uri:"complete-registration"})]}),wk={name:{label:"Product Name",required:!0},description:{label:"Description",type:"textarea",required:!0},manufacturer:{label:"Manufacturer",type:"select",debug:!0,options:[{value:"100",text:"Alan's Accessories"},{value:"101",text:"Brian's Bits"},{value:"102",text:"Charlie's Components"}]},price:{type:"number",label:"Price?",prefix:"$"}},Fk={id:"9876",name:"Widget-2000",description:"This is an awesome widget",manufacturer:"102",price:12.99},Sk=()=>c(I,{fields:wk,values:Fk,children:[o(vt,{names:"name description manufacturer price"}),o(xa,{submit:{text:"Save Changes"}})]}),xk=`import { Form, Fields, ResetSubmit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields, ResetSubmit, Debug } from '@abw/react-formula'

const fields = {
  name: {
    label:    'Product Name',
    required: true
  },
  description: {
    label:    'Description',
    type:     'textarea',
    required: true,
  },
  manufacturer: {
    label:    'Manufacturer',
    type:     'select',
    debug:    true,
    options:  [
      { value: '100', text: "Alan's Accessories" },
      { value: '101', text: "Brian's Bits" },
      { value: '102', text: "Charlie's Components" },
    ],
  },
  price: {
    type:  'number',
    label: 'Price?',
    prefix: '$',
  },
}

const values = {
  id:           '9876',
  name:         'Widget-2000',
  description:  'This is an awesome widget',
  manufacturer: '102',
  price:        12.99
}

const EditForm = () =>
  <Form fields={fields} values={values}>
    <Fields names="name description manufacturer price"/>
    <ResetSubmit submit={{ text: 'Save Changes' }}/>
  </Form>

export default EditForm`,Ek=()=>c("div",{children:[o("h1",{children:"Edit Form"}),o("p",{className:"intro",children:"Another common use case for form is in editing existing data records."}),c("h2",{children:["Specifying ",o("code",{children:"values"})]}),c("p",{children:["You can pass the ",o("code",{children:"values"})," property to a ",o(ae,{})," to seed it with initial values for fields."]}),o(_,{Element:Sk,code:xk,caption:"Edit Form",children:o("p",{children:'Try changing some of the values in the form and then click on the "Reset" button.  The fields will reset to their original values.'})}),o(yn,{uri:"edit-form"})]}),Ck={email:{label:"Email Address",required:!0}},kk=()=>c(I,{fields:Ck,children:[o(S,{name:"email",children:e=>c("div",{className:"field",children:[o("label",{htmlFor:e.id,children:e.label}),o("div",{className:"inputs",children:o("input",{className:"input",ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:t=>e.onChange(t.target.value)})})]})}),o(se,{text:"Login"})]}),Tk=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const fields = {
  email: {
    label:    'Email Address',
    required: true
  },
}

const HeadlessFields = () =>
  <Form fields={fields}>
    <Field name="email">
      { field =>
        <div className="field">
          <label htmlFor={field.id}>{field.label}</label>
          <div className="inputs">
            <input
              className="input"
              ref={field.inputRef}
              aria-disabled={field.disabled}
              tabIndex={field.disabled ? -1 : field.tabIndex}
              onFocus={field.onFocus}
              onBlur={field.onBlur}
              onChange={e => field.onChange(e.target.value)}
            />
          </div>
        </div>
      }
    </Field>
    <Submit text="Login"/>
  </Form>

export default HeadlessFields`,Rk={email:{label:"Email Address"}},Nk=()=>o(I,{fields:Rk,children:o(S,{name:"email",children:e=>c("div",{className:"boxed",children:["This is where you render the ",e.name,' field with an "',e.label,'" label']})})}),Lk=`import { Form, Field } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const fields = {
  email: {
    label: 'Email Address',
  },
}

const HeadlessBlank = () =>
  <Form fields={fields}>
    <Field name="email">
      { field =>
        <div className="boxed">
          This is where you render the {field.name} field with
          an &quot;{field.label}&quot; label
        </div>
      }
    </Field>
  </Form>

export default HeadlessBlank`,$k={email:{label:"Email Address",required:!0}},Ok=()=>c(I,{fields:$k,children:[o(S,{name:"email",children:e=>c(ke,{children:[c("h3",{children:["Custom Layout for ",e.name]}),o(Fa,{}),o(Hi,{}),o(qc,{})]})}),o(se,{text:"Login"})]}),Ak=`import {
  Form, Field, FieldLayout, Label, Text, Message, Submit
} from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, FieldLayout, Label, Text, Message, Submit
// PRETEND: } from '@abw/react-formula'

const fields = {
  email: {
    label:    'Email Address',
    required: true,
  },
}

const HeadlessBuiltins = () =>
  <Form fields={fields}>
    <Field name="email">
      { field =>
        <FieldLayout>
          <h3>Custom Layout for {field.name}</h3>
          <Label/>
          <Text/>
          <Message/>
        </FieldLayout>
      }
    </Field>
    <Submit text="Login"/>
  </Form>

export default HeadlessBuiltins`,Pk={email:{label:"Email Address",required:!0}},Dk=()=>c(I,{fields:Pk,children:[o(S,{name:"email",children:c(ke,{children:[o("h3",{children:"Custom Layout for Email field"}),o(Fa,{}),o(Hi,{}),o(qc,{})]})}),o(se,{text:"Login"})]}),Ik=`import {
  Form, Field, FieldLayout, Label, Text, Message, Submit
} from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, FieldLayout, Label, Text, Message, Submit
// PRETEND: } from '@abw/react-formula'

const fields = {
  email: {
    label:    'Email Address',
    required: true,
  },
}

const HeadlessBuiltins = () =>
  <Form fields={fields}>
    <Field name="email">
      <FieldLayout>
        <h3>Custom Layout for Email field</h3>
        <Label/>
        <Text/>
        <Message/>
      </FieldLayout>
    </Field>
    <Submit text="Login"/>
  </Form>

export default HeadlessBuiltins`,_k=()=>c("div",{children:[o("h1",{children:"Headless Fields"}),o("p",{className:"intro",children:'One of the problems with any UI library is that it forces you into using the styles provided, or requires you to customise the CSS to match your in-house brand.  This is the problem that "Headless" UI components are designed to solve.'}),o("h2",{children:"Field Render Function"}),o("p",{children:"Instead of using the default rendering components for a field you can provide a function as a child element.  The function will be passed the field context and can render the field any way it likes."}),o(_,{Element:Nk,code:Lk,caption:"Headless Fields"}),o("h2",{children:"Typical Render Function"}),o("p",{children:"Here's a more complete example showing how a field would typically be rendered using the builtin components."}),o(_,{Element:kk,code:Tk,caption:"Headless Fields"}),o("h2",{children:"Builtin Components"}),o("p",{children:"You can mix and match your own layout with the builtin components. This example shows how you can use the"}),o(_,{Element:Ok,code:Ak,caption:"Builtin Components"}),o("h2",{children:"Child Layout"}),c("p",{children:["If you're using the default layout components and/or providing your own that can access the field context using ",o("code",{children:"useField"})," ","then you don't need to define a function for the ",o(he,{})," body."]}),o(_,{Element:Dk,code:Ik,caption:"Builtin Components"}),o("h2",{children:o("code",{children:"FieldLayout"})}),c("p",{children:["The ",o(h0,{})," component renders a ",o("code",{children:"div"})," with the"," ",o("code",{children:"className"})," including ",o("code",{children:"field"})," and any of"," ",o("code",{children:"focus"}),", ",o("code",{children:"valid"}),", ",o("code",{children:"invalid"})," or"," ",o("code",{children:"disabled"})," depending on the field state."]}),o("h2",{children:o("code",{children:"Label"})}),c("p",{children:["The ",o(f0,{})," component renders a ",o("code",{children:"div"})," with the"," ",o("code",{children:"className"})," including ",o("code",{children:"field"})," and any of"," ",o("code",{children:"focus"}),", ",o("code",{children:"valid"}),", ",o("code",{children:"invalid"})," or"," ",o("code",{children:"disabled"})," depending on the field state."]}),o(yn,{uri:"headless-fields"})]}),jk=()=>c(gn,{children:[o(M,{path:"",end:!0,element:o(TE,{})}),o(M,{path:"simple-form",element:o(cC,{})}),o(M,{path:"field-validation",element:o(YC,{})}),o(M,{path:"form-validation",element:o(JC,{})}),o(M,{path:"form-submission",element:o(nk,{})}),o(M,{path:"submission-response",element:o(lk,{})}),o(M,{path:"submission-errors",element:o(hk,{})}),o(M,{path:"complete-registration",element:o(bk,{})}),o(M,{path:"edit-form",element:o(Ek,{})}),o(M,{path:"headless-fields",element:o(_k,{})})]}),Mk=`import React from 'react'
import { Form, Field, Debug } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const SimpleExample = () =>
  <Form>
    <Field
      name="name" label="Enter your name"
      placeholder="Your Name"
    />
    <Field
      name="message" label="Enter a message"
      placeholder="A message"
    />
    <Field
      name="badger" label="Do you like Badgers?"
      type="checkbox" text="Yes, I like badgers!"
    />
    <Field
      name="animal" label="What is your favourite animal?"
      type="radio" options={[ 'Badger', 'Ferret', 'Stoat' ]}
    />
    <Field
      name="food" label="What is your favourite food?"
      type="select" options={[ 'Cheese', 'Bacon', 'Lettuce' ]}
    />
    <Debug/>
  </Form>

export default SimpleExample`,Bk=()=>c(I,{children:[o(S,{name:"name",label:"Enter your name",placeholder:"Your Name"}),o(S,{name:"message",label:"Enter a message",placeholder:"A message"}),o(S,{name:"badger",label:"Do you like Badgers?",type:"checkbox",text:"Yes, I like badgers!"}),o(S,{name:"animal",label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}),o(S,{name:"food",label:"What is your favourite food?",type:"select",options:["Cheese","Bacon","Lettuce"]}),o(vn,{})]}),Vk=()=>c("div",{children:[o("h1",{children:"Simple Form Example"}),c("p",{children:["This simple example demonstrates the core functionality.  At this level it's similar to defining a regular HTML form but using React components instead of native elements.  It's like they're friends, but with benefits.  For example, note how easy it is to define a simple list of options for the ",o("code",{className:"code",children:"radio"})," ","and ",o("code",{className:"code",children:"select"})," type inputs."]}),c("p",{children:["The ",o("code",{className:"code",children:"Debug"})," component can be used to inspect the current state of the form values."]}),o(_,{Element:Bk,code:Mk})]}),zk=`import React from 'react'
import { Form, Field, Debug } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const fields = {
  name: {
    label: 'Enter your name',
    placeholder: 'Your name'
  },
  message: {
    label: 'Enter a message',
    placeholder: 'Hello World'
  },
  badgers: {
    label: 'Do you like badgers?',
    type: 'checkbox',
    text: 'Yes, of course I do'
  },
  animal: {
    label: 'What is your favourite animal?',
    type: 'radio',
    options: ['Badger', 'Ferret', 'Stoat']
  },
  unused: {
    label: "This field isn't used in this example!",
    type: 'textarea',
  }
}

const SchemaExample = () =>
  <Form fields={fields}>
    <Field name="name"/>
    <Field name="message"/>
    <Field name="badgers"/>
    <Field name="animal" label="What is the coolest animal?"/>
    <Debug/>
  </Form>

export default SchemaExample`,qk={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]},unused:{label:"This field isn't used in this example!",type:"textarea"}},Uk=()=>c(I,{fields:qk,children:[o(S,{name:"name"}),o(S,{name:"message"}),o(S,{name:"badgers"}),o(S,{name:"animal",label:"What is the coolest animal?"}),o(vn,{})]}),Hk=()=>c("div",{children:[o("h1",{children:"External Form Schema"}),c("p",{children:["This example shows how you can define a separate schema for your form fields.  Pass the field definitions to the"," ",o("code",{className:"code",children:"Form"})," component as the"," ",o("code",{className:"code",children:"fields"})," property.  When you insert a"," ",o("code",{className:"code",children:"Field"})," the ",o("code",{className:"code",children:"name"})," is used to lookup the default properties for the field.  These are only the defaults - you can over-ride any property in the"," ",o("code",{className:"code",children:"Field"})," component, as shown below where we provide a different ",o("code",{className:"code",children:"label"})," for the"," ",o("code",{className:"code",children:"animal"})," field."]}),c("p",{children:["You don't have to use all the ",o("code",{className:"code",children:"fields"})," ","that you've defined.  If you like you can define a single set of fields for all the different kinds of fields you might want to use in your whole web site and pass that to every form.  Only those that are referenced through a ",o("code",{className:"code",children:"Field"})," component will be included."]}),o(_,{Element:Uk,code:zk})]}),Wk=`import React from 'react'
import { Form, Fields, Debug } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const fields = {
  name: {
    label: 'Enter your name',
    placeholder: 'Your name'
  },
  message: {
    label: 'Enter a message',
    placeholder: 'Hello World'
  },
  badgers: {
    label: 'Do you like badgers?',
    type: 'checkbox',
    text: 'Yes, of course I do'
  },
  animal: {
    label: 'What is your favourite animal?',
    type: 'radio',
    options: ['Badger', 'Ferret', 'Stoat']
  },
}

const FieldsExample = () =>
  <Form fields={fields}>
    <div className="grid-2 gap-2">
      {/* array of field name strings */}
      <Fields names={['name', 'message']}/>
      {/* shortcut - a single string of field names */}
      <Fields names='badgers animal'/>
    </div>
    <Debug/>
  </Form>

export default FieldsExample`,Yk={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},Gk=()=>c(I,{fields:Yk,children:[c("div",{className:"grid-2 gap-2",children:[o(vt,{names:["name","message"]}),o(vt,{names:"badgers animal"})]}),o(vn,{})]}),Kk=()=>c("div",{children:[o("h1",{children:"Inserting Multiple Fields"}),c("p",{children:["There are a number of benefits to defining a separate schema for your form fields.  For one, it means that all your field definitions are in a single place where you can easily inspect and edit them without having to wade through lots of markup.  It also means that your form markup remains free of all the functional code, allowing you to concentrate on layout, styling and other presentational aspects. If you decide to split a long form into multiple parts, change the order of some fields, or perhaps display some fields side-by-side instead of stacked vertically, then it's easier to move a single"," ",o("code",{className:"code",children:"Field"})," element around, or just edit the "," ",o("code",{className:"code",children:"name"})," property than it is to cut and paste large blocks of code."]}),c("p",{children:["When you are displaying a list of fields like this you can use the"," ",o("code",{className:"code",children:"Fields"})," component as a short-cut.  Instead of providing a single ",o("code",{className:"code",children:"name"}),", give it a list of ",o("code",{className:"code",children:"names"}),", either as an array of strings, or a single string containing a whitespace-delimited list of field names.  The ",o("code",{className:"code",children:"Fields"})," component renders each of the fields, collected together in a single"," ",o("code",{className:"code",children:"div"})," element"]}),o(_,{Element:Gk,code:Wk})]}),Qk=`import React from 'react'
import { Form, Field, Fields, Debug, Reset, Changed } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Fields, Changed, Reset, Debug } from '@abw/react-formula'

const fields = {
  foo: {
    type:  'text',
    label: 'The foo field',
    required: true
  },
  bar: {
    type:  'text',
    label: 'The bar field',
  },
  price: {
    type:  'number',
    label: 'Price',
    prefix: '£',
    suffix: '.00',
    size: 20,
    min: 11,
    max: 100
  },
  scale: {
    type:  'range',
    label: 'Scale',
    min: 0,
    max: 100,
    step: 10
  },
  animal: {
    type:  'radio',
    label: 'Animal',
    options: [
      { value: 'badger', text: 'Brilliant Badger' },
      { value: 'ferret', text: 'Funky Ferret' },
      { value: 'stoat',  text: 'Sexy Stoat'  },
    ],
  },
  animal2: {
    type:  'radio',
    label: 'Animal',
    options: [
      { value: 'badger', text: 'Brilliant Badger' },
      { value: 'ferret', text: 'Funky Ferret' },
      { value: 'stoat',  text: 'Sexy Stoat'  },
    ],
  },
  colour: {
    type:  'radio',
    label: 'Favourite Colour?',
    options: [
      { value: 'red',    text: 'Red',    className: 'red' },
      { value: 'orange', text: 'Orange', className: 'orange' },
      { value: 'yellow', text: 'Yellow', className: 'yellow' },
      { value: 'green',  text: 'Green',  className: 'green' },
      { value: 'blue',   text: 'Blue',   className: 'blue' },
      { value: 'indigo', text: 'Indigo', className: 'indigo' },
      { value: 'violet', text: 'Violet', className: 'violet' },
    ]
  },
  number: {
    type:  'radio',
    label: 'Favourite Number?',
    options: [ 11, 42, 69 ]
  },
  food: {
    type:  'select',
    label: 'Favourite Food',
    options: [
      { value: 'chicken', text: 'Chicken' },
      { value: 'bacon',   text: 'Bacon'   },
      { value: 'cheese',  text: 'Cheese'  },
    ],
  },
}

const values = {
  foo: 'The foo value',
  animal: 'badger',
  scale: 50
}

const CompleteExample = () =>
  <Form fields={fields} values={values} showRequired={true} showOptional={true}>
    <Field name="foo"/>
    <Field name="bar" label="The bar field with a custom label"/>
    <Field name="bar" label="Bar field, different label and disabled" disabled/>
    <Fields names="price scale number colour animal"/>
    <Field name="animal2"
      inputsClass="radio inputs block"
      label="Stacked Radio Option"
    />
    <Field name="food"/>
    <Field name="one"   type="number"   label="A number field"/>
    <Field name="two"   type="date"     label="A date field"/>
    <Field name="three" type="password" label="A password field"/>
    <Field name="four"  type="color"    label="A color field"/>
    <Changed>
      <Reset text="Reset Form"/>
    </Changed>
    <Debug showForm={true}/>
  </Form>

export default CompleteExample
`,Xk={foo:{type:"text",label:"The foo field",required:!0},bar:{type:"text",label:"The bar field"},price:{type:"number",label:"Price",prefix:"£",suffix:".00",size:20,min:11,max:100},scale:{type:"range",label:"Scale",min:0,max:100,step:10},animal:{type:"radio",label:"Animal",options:[{value:"badger",text:"Brilliant Badger"},{value:"ferret",text:"Funky Ferret"},{value:"stoat",text:"Sexy Stoat"}]},animal2:{type:"radio",label:"Animal",options:[{value:"badger",text:"Brilliant Badger"},{value:"ferret",text:"Funky Ferret"},{value:"stoat",text:"Sexy Stoat"}]},colour:{type:"radio",label:"Favourite Colour?",options:[{value:"red",text:"Red",className:"red"},{value:"orange",text:"Orange",className:"orange"},{value:"yellow",text:"Yellow",className:"yellow"},{value:"green",text:"Green",className:"green"},{value:"blue",text:"Blue",className:"blue"},{value:"indigo",text:"Indigo",className:"indigo"},{value:"violet",text:"Violet",className:"violet"}]},number:{type:"radio",label:"Favourite Number?",options:[11,42,69]},food:{type:"select",label:"Favourite Food",options:[{value:"chicken",text:"Chicken"},{value:"bacon",text:"Bacon"},{value:"cheese",text:"Cheese"}]}},Zk={foo:"The foo value",animal:"badger",scale:50},Jk=()=>c(I,{fields:Xk,values:Zk,showRequired:!0,showOptional:!0,children:[o(S,{name:"foo"}),o(S,{name:"bar",label:"The bar field with a custom label"}),o(S,{name:"bar",label:"Bar field, different label and disabled",disabled:!0}),o(vt,{names:"price scale number colour animal"}),o(S,{name:"animal2",inputsClass:"radio inputs block",label:"Stacked Radio Option"}),o(S,{name:"food"}),o(S,{name:"one",type:"number",label:"A number field"}),o(S,{name:"two",type:"date",label:"A date field"}),o(S,{name:"three",type:"password",label:"A password field"}),o(S,{name:"four",type:"color",label:"A color field"}),o(Hc,{children:o(vr,{text:"Reset Form"})}),o(vn,{showForm:!0})]}),eT=()=>c("div",{children:[o("h1",{children:"Complete Form Example"}),o("p",{children:"This is a more complete example."}),o(_,{Element:Jk,code:Qk})]}),tT=()=>c(gn,{children:[o(M,{path:"simple",element:o(Vk,{})}),o(M,{path:"schema",element:o(Hk,{})}),o(M,{path:"fields",element:o(Kk,{})}),o(M,{path:"complete",element:o(eT,{})})]}),nT=()=>c("div",{children:[o("h1",{children:"Components"}),o("p",{children:"This section of the documentation provides detailed information about each of the components."}),o("ul",{className:"menu",children:_p.items.map((e,t)=>o(wc,{item:e,showAbout:!0},t))})]}),rT=()=>c("div",{children:[o("h1",{children:"Form"}),c("p",{children:["The ",o("code",{children:"Form"})," component is used to render a form. Inside the form you will typically have one or more"," ",o(J,{to:"/field",children:o("code",{children:"Field"})})," components to render the fields and a ",o(J,{to:"/form/submit",children:o("code",{children:"Submit"})})," ","component to add a submit button."]}),c("ul",{className:"menu",children:[o("li",{children:o(J,{to:"./properties",text:"Form properties"})}),c("li",{children:[o(J,{to:"./reset",children:o("code",{children:"Reset"})})," component to reset the form"]}),c("li",{children:[o(J,{to:"./submit",children:o("code",{children:"Submit"})})," component to submit the form"]}),c("li",{children:[c(J,{to:"./controls",children:["Controls combining ",o("code",{children:"Submit"})]})," component to submit the form"]})]})]}),oT=()=>c("div",{children:[o("h1",{children:"Form Properties"}),o("h2",{children:"THIS IS TODO"}),c("pre",{children:["className:         FORMULA",o("br",{}),"errorsInHeader:    true",o("br",{}),"errorsInFooter:    false,",o("br",{}),"enctype:           application/x-www-form-urlencoded",o("br",{}),"method:            post",o("br",{}),"headerClass:       header",o("br",{}),"bodyClass:         body",o("br",{}),"footerClass:       footer",o("br",{}),"errorsClass:       errors",o("br",{}),"errorsTitle:       n => `Form Submission Error... errorPrompt:       Please correct this problem and re-submit:",o("br",{}),"errorsPrompt:      n => `Please correct these... submittingClass:   SUBMITTING,",o("br",{}),"validatingClass:   VALIDATING",o("br",{})]})]}),lT=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetFocusExample = () => {
  const [form, setForm] = useState(false)

  return (
    <>
      <Form onLoad={setForm}>
        <Field
          name="field1" label="Field One"
        />
        <Field
          name="field2" label="Field Two"
          type="textarea"
        />
        <Field
          name="field3" label="Field Three"
          type="checkbox" text="I agree to the Terms and Conditions"
        />
        <Field
          name="field4" label="Field Four"
          type="select" options={['Nigel', 'David', 'Derek']}
        />
        <Field
          name="field5" label="Field Five"
          type="radio" default='Keyboards'
          options={['Vocals', 'Guitar', 'Bass', 'Keyboards', 'Drums']}
        />
      </Form>
      <div>
        <button className="btn-blue" onClick={() => form?.setFocus('field1')}>
          Focus One
        </button>
        <button className="btn-blue" onClick={() => form?.setFocus('field2')}>
          Focus Two
        </button>
        <button className="btn-blue" onClick={() => form?.setFocus('field3')}>
          Focus Three
        </button>
        <button className="btn-blue" onClick={() => form?.setFocus('field4')}>
          Focus Four
        </button>
        <button className="btn-blue" onClick={() => form?.setFocus('field5')}>
          Focus Five
        </button>
      </div>
    </>
  )
}

export default SetFocusExample`,iT=()=>{const[e,t]=$.useState(!1);return c(Ee,{children:[c(I,{onLoad:t,children:[o(S,{name:"field1",label:"Field One"}),o(S,{name:"field2",label:"Field Two",type:"textarea"}),o(S,{name:"field3",label:"Field Three",type:"checkbox",text:"I agree to the Terms and Conditions"}),o(S,{name:"field4",label:"Field Four",type:"select",options:["Nigel","David","Derek"]}),o(S,{name:"field5",label:"Field Five",type:"radio",default:"Keyboards",options:["Vocals","Guitar","Bass","Keyboards","Drums"]})]}),c("div",{children:[o("button",{className:"btn-blue",onClick:()=>e==null?void 0:e.setFocus("field1"),children:"Focus One"}),o("button",{className:"btn-blue",onClick:()=>e==null?void 0:e.setFocus("field2"),children:"Focus Two"}),o("button",{className:"btn-blue",onClick:()=>e==null?void 0:e.setFocus("field3"),children:"Focus Three"}),o("button",{className:"btn-blue",onClick:()=>e==null?void 0:e.setFocus("field4"),children:"Focus Four"}),o("button",{className:"btn-blue",onClick:()=>e==null?void 0:e.setFocus("field5"),children:"Focus Five"})]})]})},aT=`import { Form, Field, useForm } from '../../../../../lib/index.js'

{/* START */}
import React  from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/react-formula'

const UseFormFocus = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Field name="field2" label="Field Two"/>
    <FieldFocusButton name="field1" caption="Focus Field One"/>
    <FieldFocusButton name="field2" caption="Focus Field Two"/>
  </Form>

const FieldFocusButton = ({name, caption}) => {
  const { setFocus } = useForm()
  return (
    <button
      className="btn-blue"
      onClick={ e => { e.preventDefault(); setFocus(name) } }
    >
      {caption}
    </button>
  )
}

export default UseFormFocus`,sT=()=>c(I,{children:[o(S,{name:"field1",label:"Field One"}),o(S,{name:"field2",label:"Field Two"}),o(lf,{name:"field1",caption:"Focus Field One"}),o(lf,{name:"field2",caption:"Focus Field Two"})]}),lf=({name:e,caption:t})=>{const{setFocus:n}=dt();return o("button",{className:"btn-blue",onClick:r=>{r.preventDefault(),n(e)},children:t})},uT=`import { useForm } from '../../../../../lib/index.js'

{/* START */}
import React  from 'react'
// PRETEND: import { useForm } from '@abw/react-formula'

const FieldFocusButton = ({name, caption}) => {
  const { setFocus } = useForm()
  return (
    <button className="btn-blue" onClick={ e => setFocus(name, e) }>
      {caption}
    </button>
  )
}

export default FieldFocusButton`,cT=()=>c("div",{children:[o("h1",{children:"Focus Fields"}),o("h2",{children:o("code",{children:"setFocus()"})}),c("p",{children:["You can programmatically set the focus on a ",o(he,{})," by calling the ",o("code",{children:"setFocus()"})," method on the ",o(ae,{}),", passing the name of the field that you want to focus as an argument."]}),c("p",{children:["You can capture a reference to the form using the ",o("code",{children:"onLoad"})," ","property to set a state variable, as shown in this example."]}),o(_,{Element:iT,code:lT,caption:"onLoad() and setFocus()",children:o("p",{children:"Click on one of the buttons to focus on a field."})}),c("p",{children:["If the buttons (or other controls) that you want to use to focus the fields are contained within the ",o(ae,{})," then you can call the ",o("code",{children:"useForm()"})," function to gain access to the form context."]}),o(_,{Element:sT,code:aT,caption:"useForm() and setFocus()"}),c("p",{children:["Be careful to make sure that your buttons call"," ",o("code",{children:"e.preventDefault()"})," on the event, as shown in the example above, otherwise the form may be submitted.  Alternately you can pass the event to the ",o("code",{children:"setFocus()"})," method as the second argument and it will do it for you, as shown below."]}),o(Mt,{code:xg(uT)})]}),dT=()=>c(I,{showRequired:!0,children:[o(S,{name:"one",label:"Field one",required:!0}),o(S,{name:"two",label:"Field two",required:!0}),o(S,{name:"three",label:"Field three"}),o(se,{})]}),hT=`import { Form, Field, Submit } from '../../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitExample = () =>
  <Form showRequired>
    <Field name="one"   label="Field one" required/>
    <Field name="two"   label="Field two" required/>
    <Field name="three" label="Field three"/>
    <Submit/>
  </Form>

export default SubmitExample`,fT=()=>c("div",{children:[o("h1",{children:"Validation"}),o("p",{children:"Validation can be applied on two levels: on individual fields and/or on the form."}),c("p",{children:["You can specify a field is ",o("code",{children:"required"}),", as shown here, or define your own custom ",o(J,{to:"/components/field/validation",text:"field validation"})," functions. When the form is submitted, each field will be validated.  If any validation errors occur then the form submission will be cancelled and the errors displayed."]}),o(_,{Element:dT,code:hT,caption:"Required Fields",children:o("p",{children:"Try entering some text in the fields below then click on the Submit button.  The first two fields are required so you can leave either of the them empty to see the validation errors."})}),c("p",{children:["You can also define a ",o("code",{children:"validate"})," function on the ",o(ae,{}),". This will be run after any field validation and will be passed"]})]}),mT=`import { Form, Field } from '../../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetValues = () => {
  const [form, setForm] = useState()
  const setValues = (color, animal) =>
    form?.setValues({ color, animal })

  return (
    <>
      <Form onLoad={setForm}>
        <Field name="color"  label="Color"/>
        <Field name="animal" label="Animal"/>
      </Form>

      <button onClick={() => setValues('Grey', 'Elephant')}>
        Grey Elephant
      </button>

      <button onClick={() => setValues('Red', 'Fox')}>
        Red Fox
      </button>
    </>
  )
}

export default SetValues`,pT=()=>{const[e,t]=$.useState(),n=(r,l)=>e==null?void 0:e.setValues({color:r,animal:l});return c(Ee,{children:[c(I,{onLoad:t,children:[o(S,{name:"color",label:"Color"}),o(S,{name:"animal",label:"Animal"})]}),o("button",{onClick:()=>n("Grey","Elephant"),children:"Grey Elephant"}),o("button",{onClick:()=>n("Red","Fox"),children:"Red Fox"})]})},gT=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/react-formula'

const UseSetValues = () =>
  <>
    <Form>
      <Field name="color"  label="Color"/>
      <Field name="animal" label="Animal"/>
      <Setter color="Grey" animal="Elephant"/>
      <Setter color="Red"  animal="Fox"/>
    </Form>
  </>

const Setter = ({ color, animal }) => {
  const { setValues } = useForm()
  return (
    <button onClick={
      e => {
        e.preventDefault()
        setValues({ color, animal }, e)
      }
    }>
      {color} {animal}
    </button>
  )
}

export default UseSetValues`,vT=()=>o(Ee,{children:c(I,{children:[o(S,{name:"color",label:"Color"}),o(S,{name:"animal",label:"Animal"}),o(af,{color:"Grey",animal:"Elephant"}),o(af,{color:"Red",animal:"Fox"})]})}),af=({color:e,animal:t})=>{const{setValues:n}=dt();return c("button",{onClick:r=>{r.preventDefault(),n({color:e,animal:t},r)},children:[e," ",t]})},yT=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/react-formula'

const UseSetValues = () =>
  <>
    <Form>
      <Field name="color"  label="Color"/>
      <Field name="animal" label="Animal"/>
      <Setter color="Grey" animal="Elephant"/>
      <Setter color="Red"  animal="Fox"/>
    </Form>
  </>

const Setter = ({ color, animal }) => {
  const { setValues } = useForm()
  return (
    <button onClick={e => setValues({ color, animal }, e)}>
      {color} {animal}
    </button>
  )
}

export default UseSetValues`,bT=()=>o(Ee,{children:c(I,{children:[o(S,{name:"color",label:"Color"}),o(S,{name:"animal",label:"Animal"}),o(sf,{color:"Grey",animal:"Elephant"}),o(sf,{color:"Red",animal:"Fox"})]})}),sf=({color:e,animal:t})=>{const{setValues:n}=dt();return c("button",{onClick:r=>n({color:e,animal:t},r),children:[e," ",t]})},wT=()=>c("div",{children:[o("h1",{children:"Setting Form Values"}),o("h2",{children:"setValues()"}),c("p",{children:["The ",o("code",{children:"setValues"})," function can be used to programmatically set form values.  You can use the ",o("code",{children:"onLoad"})," handler to save a reference to the form context as show in this example."]}),o(_,{Element:pT,code:mT,caption:"setValues",children:o("p",{children:"Click on one of the buttons to update the form values."})}),c("p",{children:["If you want to set the values from a component placed inside the"," ",o("code",{children:"Form"})," component then you can use ",o("code",{children:"useForm()"})," to get access to the form context."]}),o(_,{Element:vT,code:gT,caption:"setValues"}),c("p",{children:["If you're using a ",o("code",{children:"button"})," to trigger the call to"," ",o("code",{children:"setValues()"}),", as shown in the example above, then you need to make sure you call ",o("code",{children:"e.preventDefault()"})," event.  Otherwise the form may be submitted. Alternately you can pass the event as the second argument to the ",o("code",{children:"setValues()"})," method as shown below and it will do it for you."]}),o(_,{Element:bT,code:yT,caption:"setValues"})]}),FT=()=>c(gn,{children:[o(M,{path:"",end:!0,element:o(rT,{})}),o(M,{path:"properties",element:o(oT,{})}),o(M,{path:"setfocus",element:o(cT,{})}),o(M,{path:"validation",element:o(fT,{})}),o(M,{path:"set/*",element:o(wT,{})})]}),ST=()=>c(Ee,{children:[o("h1",{children:"Field"}),o("h2",{children:"TODO"}),o("ul",{children:o("li",{children:"Field reset"})})]}),xT=()=>c("div",{children:[o("h1",{children:"Field Properties"}),o("h2",{children:"THIS IS TODO"})]}),ET=`import { Form, Field } from '../../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const PrefixExample = () =>
  <Form>
    <Field
      name="prefix" type="text"
      label="Field with a prefix"
      prefix="😀"
    />
  </Form>

export default PrefixExample`,CT=()=>o(I,{children:o(S,{name:"prefix",type:"text",label:"Field with a prefix",prefix:"😀"})}),kT=`import { Form, Field } from '../../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SuffixExample = () =>
  <Form>
    <Field
      name="suffix" type="text"
      label="Field with a suffix"
      suffix="🔒"
    />
  </Form>

export default SuffixExample`,TT=()=>o(I,{children:o(S,{name:"suffix",type:"text",label:"Field with a suffix",suffix:"🔒"})}),RT=`import { Form, Field } from '../../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const PrefixSuffixExample = () =>
  <Form>
    <Field
      name="money" type="number"
      label="Field with both prefix and suffix"
      prefix="$" suffix=".00"
    />
  </Form>

export default PrefixSuffixExample`,NT=()=>o(I,{children:o(S,{name:"money",type:"number",label:"Field with both prefix and suffix",prefix:"$",suffix:".00"})}),LT=()=>c("div",{children:[o("h1",{children:"Prefix and Suffix"}),o("h2",{children:"prefix"}),c("p",{children:["You can add a ",o("code",{children:"prefix"})," to a ",o("code",{children:"text"})," field or any of the other types using the basic text input, e.g."," ",o("code",{children:"money"}),", ",o("code",{children:"date"}),", etc."]}),o(_,{Element:CT,code:ET,caption:"prefix"}),o("h2",{children:"suffix"}),c("p",{children:["You can add also add a ",o("code",{children:"suffix"}),"."]}),o(_,{Element:TT,code:kT,caption:"suffix"}),o("h2",{children:"prefix and suffix"}),o("p",{children:"Or you can add both."}),o(_,{Element:NT,code:RT,caption:"prefix and suffix"})]}),$T=()=>{const[e,t]=$.useState(),n=r=>t(`${r.label} was focussed`);return c(I,{children:[o(S,{name:"foo",label:"The Foo Field",onFocus:n}),o(S,{name:"bar",label:"The Bar Field",onFocus:n}),e]})},OT=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OnFocusExample = () => {
  const [msg, setMsg] = useState()
  const onFocus = field =>
    setMsg(\`\${field.label} was focussed\`)

  return (
    <Form>
      <Field
        name="foo" label="The Foo Field"
        onFocus={onFocus}
      />
      <Field
        name="bar" label="The Bar Field"
        onFocus={onFocus}
      />
      {msg}
    </Form>
  )
}

export default OnFocusExample`,Be=({links:e})=>c("div",{className:"see-also",children:[o("h2",{children:"See Also"}),o("ul",{className:"menu",children:e.map(t=>o(AT,{to:t},t))})]}),AT=({to:e})=>{const t=bc[e]||io(`Invalid SeeAlso link: ${e}`),{about:n}=t;return c("li",{children:[o(Hn,{to:e}),!!n&&o("span",{className:"about",children:n})]})},PT=()=>c("div",{children:[o("h1",{children:"Field Events"}),o("h2",{children:o("code",{children:"onFocus"})}),c("p",{children:["You can add an ",o("code",{children:"onFocus"})," handler to a ",o(he,{})," ","which will be called when the field is focussed (i.e. selected). The field context will be passed as an argument."]}),o(_,{Element:$T,code:OT,caption:"onFocus",children:o("p",{children:"Focus on each of the fields below.  A message should be displayed each time a field gains focus."})}),o(Be,{links:["field:onBlur","field:onChange","field:onValid","field:onInvalid"]})]}),DT=()=>{const[e,t]=$.useState(),n=r=>t(`${r.label} was blurred`);return c(I,{children:[o(S,{name:"foo",label:"The Foo Field",onBlur:n}),o(S,{name:"bar",label:"The Bar Field",onBlur:n}),e]})},IT=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OnBlurExample = () => {
  const [msg, setMsg] = useState()
  const onBlur = field =>
    setMsg(\`\${field.label} was blurred\`)

  return (
    <Form>
      <Field
        name="foo" label="The Foo Field"
        onBlur={onBlur}
      />
      <Field
        name="bar" label="The Bar Field"
        onBlur={onBlur}
      />
      {msg}
    </Form>
  )
}
export default OnBlurExample`,_T=()=>c("div",{children:[o("h1",{children:"Field Events"}),o("h2",{children:o("code",{children:"onBlur"})}),c("p",{children:["You can add an ",o("code",{children:"onBlur"})," handler to a ",o(he,{})," ","which will be called when the field is blurred (i.e. unselected). The field context will be passed as an argument."]}),o(_,{Element:DT,code:IT,caption:"onFocus",children:o("p",{children:"Focus on one of the fields below and then select the other field. A message should be displayed each time a field loses focus."})}),o(Be,{links:["field:validateOnBlur","field:onFocus","field:onChange","field:onValid","field:onInvalid"]})]}),jT=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetFocusExample = () => {
  const [field1, setField1] = useState(false)
  const [field2, setField2] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField1}
          name="field1" label="Field One"
        />
        <Field
          onLoad={setField2}
          name="field2" label="Field Two"
        />
      </Form>
      <div>
        <button onClick={() => field1?.setFocus()}>
          Focus Field One
        </button>
        <button onClick={() => field2?.setFocus()}>
          Focus Field Two
        </button>
      </div>
    </>
  )
}

export default SetFocusExample`,MT=()=>{const[e,t]=$.useState(!1),[n,r]=$.useState(!1);return c(Ee,{children:[c(I,{children:[o(S,{onLoad:t,name:"field1",label:"Field One"}),o(S,{onLoad:r,name:"field2",label:"Field Two"})]}),c("div",{children:[o("button",{onClick:()=>e==null?void 0:e.setFocus(),children:"Focus Field One"}),o("button",{onClick:()=>n==null?void 0:n.setFocus(),children:"Focus Field Two"})]})]})},BT=()=>c("div",{children:[o("h1",{children:"Field Functions"}),o("h2",{children:o("code",{children:"setFocus()"})}),c("p",{children:["If you want to programmatically set the focus on a ",o(he,{})," then you first need to capture a reference to it.  You can do that using an ",o("code",{children:"onLoad"})," property to set a state variable."]}),c("p",{children:["Then call the ",o("code",{children:"setFocus()"})," method on the field object to focus it."]}),o(_,{Element:MT,code:jT,caption:"setFocus()",children:o("p",{children:"Click on one of the buttons to focus on a field."})}),c("p",{children:["You can also focus on fields by name using the ",o(ae,{})," ",o(Mp,{})," method."]}),o(Be,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),VT=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetValueExample = () => {
  const [field, setField] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField}
          name="animal" label="Animal"
        />
      </Form>
      <div>
        <button onClick={() => field.setValue('Antelope')}>
          Antelope
        </button>
        <button onClick={() => field.setValue('Badger')}>
          Badger
        </button>
        <button onClick={() => field.setValue('Camel')}>
          Camel
        </button>
      </div>
    </>
  )
}

export default SetValueExample`,zT=()=>{const[e,t]=$.useState(!1);return c(Ee,{children:[o(I,{children:o(S,{onLoad:t,name:"animal",label:"Animal"})}),c("div",{children:[o("button",{onClick:()=>e.setValue("Antelope"),children:"Antelope"}),o("button",{onClick:()=>e.setValue("Badger"),children:"Badger"}),o("button",{onClick:()=>e.setValue("Camel"),children:"Camel"})]})]})},qT=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetValueExample = () => {
  const [field, setField] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField}
          name="animal" label="Animal"
        />
        <div>
          <button
            className="btn-green"
            onClick={e => { e.preventDefault(); field.setValue('Antelope') }}
          >
            Antelope
          </button>
          <button
            className="btn-green"
            onClick={e => field.setValue('Badger', e)}
          >
            Badger
          </button>
          <button
            type="button"
            className="btn-green"
            onClick={() => field.setValue('Camel')}
          >
            Camel
          </button>
          <button
            onClick={() => field.setValue('Danger!')}
            className="btn-red"
          >
            Danger!
          </button>
        </div>
      </Form>
    </>
  )
}

export default SetValueExample`,UT=()=>{const[e,t]=$.useState(!1);return o(Ee,{children:c(I,{children:[o(S,{onLoad:t,name:"animal",label:"Animal"}),c("div",{children:[o("button",{className:"btn-green",onClick:n=>{n.preventDefault(),e.setValue("Antelope")},children:"Antelope"}),o("button",{className:"btn-green",onClick:n=>e.setValue("Badger",n),children:"Badger"}),o("button",{type:"button",className:"btn-green",onClick:()=>e.setValue("Camel"),children:"Camel"}),o("button",{onClick:()=>e.setValue("Danger!"),className:"btn-red",children:"Danger!"})]})]})})},HT=()=>c("div",{children:[o("h1",{children:"Field Functions"}),o("h2",{children:o("code",{children:"setValue()"})}),c("p",{children:["If you want to programmatically set the value for a ",o(he,{})," then you first need to capture a reference to it.  You can do that using an ",o("code",{children:"onLoad"})," property to set a state variable."]}),c("p",{children:["Then call the ",o("code",{children:"setValue()"})," method on the field object to set the value."]}),o(_,{Element:zT,code:VT,caption:"setValue()",children:o("p",{children:"Click on one of the buttons to set the input value."})}),c("p",{children:["One thing to be aware of is that the default behaviour of a"," ",o("code",{children:"button"})," inside a ",o("code",{children:"form"})," is to submit the form. This is an innate property of HTML and not something that's specific to this library.  In the example above we put the buttons outside the"," ",o(ae,{})," to avoid this behaviour, but it's not always possible to do that. There are a number of ways to work around it, shown in the example below."]}),c("p",{children:['The first "Antelope" button calls the'," ",o("code",{children:"preventDefault()"})," "," method on the event.  Given that this is a bit clumsy, the ",o("code",{children:"setValue()"})," method allows you to pass the event as the second argument and it will call"," ",o("code",{children:"preventDefault()"}),' for you, as shown on the second "Badger" button.  The third approach, shown on the "Camel" button, is to explicitly set the'," ",o("code",{children:"type"})," to ",o("code",{children:"button"})," to override the default"," ",o("code",{children:"type"})," of ",o("code",{children:"submit"}),`.  The fourth "Danger!" button doesn't do anything and will cause the form to submit, just in case you don't believe me that it's really a problem.`]}),o(_,{Element:UT,code:qT,caption:"setValue()",children:o("p",{children:"Click on one of the buttons to set the input value.  Be warned that the fourth button will cause the form to submit."})}),c("p",{children:["You can also set values for one or more fields by name using the"," ",o(ae,{})," ",o(c0,{})," method."]}),o(Be,{links:["form:setValues","field:setFocus","field:reset"]})]}),WT=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ResetExample = () => {
  const [field1, setField1] = useState(false)
  const [field2, setField2] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField1}
          name="field1" label="Field One"
        />
        <Field
          onLoad={setField2} value="Initial value"
          name="field2" label="Field Two"
        />
      </Form>
      <div>
        <button className="btn-blue" onClick={field1.reset}>
          Reset Field One
        </button>
        <button className="btn-blue" onClick={field2.reset}>
          Reset Field Two
        </button>
      </div>
    </>
  )
}

export default ResetExample`,YT=()=>{const[e,t]=$.useState(!1),[n,r]=$.useState(!1);return c(Ee,{children:[c(I,{children:[o(S,{onLoad:t,name:"field1",label:"Field One"}),o(S,{onLoad:r,value:"Initial value",name:"field2",label:"Field Two"})]}),c("div",{children:[o("button",{className:"btn-blue",onClick:e.reset,children:"Reset Field One"}),o("button",{className:"btn-blue",onClick:n.reset,children:"Reset Field Two"})]})]})},GT=()=>c("div",{children:[o("h1",{children:"Field Functions"}),o("h2",{children:o("code",{children:"reset()"})}),c("p",{children:["If you want to programmatically reset a ",o(he,{})," then you first need to capture a reference to it.  You can do that using an ",o("code",{children:"onLoad"})," property to set a state variable."]}),c("p",{children:["Then call the ",o("code",{children:"reset()"})," method on the field object to reset it."]}),o(_,{Element:YT,code:WT,caption:"reset()",children:o("p",{children:"Enter some text in either of the inputs below and then click on the corresponding button to reset it to the original value."})}),c("p",{children:["You can also focus on fields by name using the ",o(ae,{})," ",o(Mp,{})," method."]}),o(Be,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),KT=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OnChangeExample = () => {
  const [value, setValue] = useState('')
  return (
    <Form>
      <Field
        name="example" label="Field with onChange"
        onChange={field => setValue(field.value)}
      />
      Current value: {value}
    </Form>
  )
}

export default OnChangeExample`,QT=()=>{const[e,t]=$.useState("");return c(I,{children:[o(S,{name:"example",label:"Field with onChange",onChange:n=>t(n.value)}),"Current value: ",e]})},XT=()=>c("div",{children:[o("h1",{children:"Field Events"}),o("h2",{children:o("code",{children:"onChange"})}),c("p",{children:["You can add an ",o("code",{children:"onChange"})," handler to a ",o(he,{})," ","which will be called when the field value is changed.  The field context will be passed as an argument."]}),o(_,{Element:QT,code:KT,caption:"onChange",children:o("p",{children:'Try entering some text in the field below.  You should see the "Current value" display update to reflect the field content.'})}),o(Be,{links:["field:validateOnChange","field:onBlur","field:onFocus","field:onValid","field:onInvalid"]})]}),ZT=()=>{const[e,t]=$.useState();return c(I,{validateOnBlur:!0,children:[o(S,{name:"foo",label:"Foo Field",required:!0,onValid:n=>t(`${n.name} is valid: ${n.value}`)}),o(S,{name:"bar",label:"Bar Field",required:!0,onValid:n=>t(`${n.name} is valid: ${n.value}`)}),e]})},JT=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OnValidExample = () => {
  const [msg, setMsg] = useState()

  return (
    <Form validateOnBlur>
      <Field
        name="foo" label="Foo Field" required
        onValid={field => setMsg(\`\${field.name} is valid: \${field.value}\`)}
      />
      <Field
        name="bar" label="Bar Field" required
        onValid={field => setMsg(\`\${field.name} is valid: \${field.value}\`)}
      />
      {msg}
    </Form>
  )
}

export default OnValidExample`,eR=()=>c("div",{children:[o("h1",{children:"Field Events"}),o("h2",{children:o("code",{children:"onValid"})}),c("p",{children:["You can add an ",o("code",{children:"onValid"})," handler to a ",o(he,{})," ","which will be called when the field is successfully validated. The field context will be passed as an argument."]}),o(_,{Element:ZT,code:JT,caption:"onValid",children:c("p",{children:["Enter some text in one of the fields below and then select the other field.  The ",o("code",{children:"validateOnBlur"})," option on the ",o(ae,{})," ","means that the first field will be validated when it loses focus and the ",o("code",{children:"onValid"})," handler will be called."]})}),o(Be,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onInvalid"]})]}),tR=()=>{const[e,t]=$.useState(),n=r=>t(`${r.label} is invalid: ${r.message}`);return c(I,{validateOnBlur:!0,children:[o(S,{name:"foo",label:"Foo Field",required:!0,onInvalid:n}),o(S,{name:"bar",label:"Bar Field",required:!0,onValid:n,requiredMessage:"You must enter a value"}),e]})},nR=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OnInvalidExample = () => {
  const [msg, setMsg] = useState()
  const onInvalid = field =>
    setMsg(\`\${field.label} is invalid: \${field.message}\`)

  return (
    <Form validateOnBlur>
      <Field
        name="foo" label="Foo Field" required
        onInvalid={onInvalid}
      />
      <Field
        name="bar" label="Bar Field" required
        onValid={onInvalid}
        requiredMessage="You must enter a value"
      />
      {msg}
    </Form>
  )
}

export default OnInvalidExample`,rR=()=>c("div",{children:[o("h1",{children:"Field Events"}),o("h2",{children:o("code",{children:"onInvalid"})}),c("p",{children:["You can add an ",o("code",{children:"onInvalid"})," handler to a ",o(he,{})," ","which will be called when the field fails validation. The field context will be passed as an argument."]}),c(_,{Element:tR,code:nR,caption:"onInvalid",children:[c("p",{children:["Click one of the fields below and then select the other field without entering any text. The ",o(F0,{})," option on the"," ",o(ae,{})," "," means that the fields will be validated when they lose focus. They're both marked as ",o(fn,{})," so they will fail validation (assuming you haven't entered anything) and the ",o("code",{children:"onInvalid"})," handler will be called."]}),c("p",{children:["Also note the use of ",o(y0,{})," to set a custom message for the second field."]})]}),o(Be,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onValid"]})]}),oR=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const fields = {
  upper: {
    label: 'Converted to UPPER CASE',
    prepareValue: value => value.toUpperCase()
  }
}

const PrepareValue = () =>
  <Form fields={fields}>
    <Field name="upper"/>
  </Form>

export default PrepareValue`,lR={upper:{label:"Converted to UPPER CASE",prepareValue:e=>e.toUpperCase()}},iR=()=>o(I,{fields:lR,children:o(S,{name:"upper"})}),aR=()=>c("div",{children:[o("h1",{children:"Field Validation"}),o("h2",{children:o("code",{children:"prepareValue"})}),c("p",{children:["You can add a ",o("code",{className:"code",children:"prepareValue"})," function to a ",o(he,{})," to prepare the value before it's set."]}),o(_,{Element:iR,code:oR,caption:"onChange",children:o("p",{children:"Try entering some letters in the field below.  You should see that they get converted to upper case."})}),o(Be,{links:["field:validate","field:validateOnBlur","field:validateOnChange"]})]}),sR=()=>c(I,{children:[o(S,{name:"field1",label:"Required Field",required:!0}),o(se,{})]}),uR=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const Required = () =>
  <Form>
    <Field name="field1" label="Required Field" required/>
    <Submit/>
  </Form>

export default Required`,cR=()=>c("div",{children:[o("h1",{children:"Field Validation"}),o("h2",{children:o("code",{children:"required"})}),c("p",{children:["You can add a ",o("code",{children:"required"})," property to a field to mark it as being required.  This automatically adds a validator to the field to ensure that a value is provided when the form is submitted."]}),o(_,{Element:sR,code:uR,caption:"required",children:o("p",{children:"Try submitting the form without entering anything in the field input."})}),o(Be,{links:["field:showRequired","field:requiredLabel","field:requiredMessage","field:validateOnBlur","field:validateOnChange"]})]}),dR=()=>c(I,{children:[o(S,{name:"field1",label:"Required Field",required:!0,showRequired:!0}),o(S,{name:"field2",label:"Optional Field"})]}),hR=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ShowRequired = () =>
  <Form>
    <Field
      name="field1" label="Required Field"
      required showRequired
    />
    <Field
      name="field2" label="Optional Field"
    />
  </Form>

export default ShowRequired`,fR=()=>c(I,{showRequired:!0,children:[o(S,{name:"field1",label:"Required Field",required:!0}),o(S,{name:"field2",label:"Another Required Field",required:!0})]}),mR=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ShowRequiredForm = () =>
  <Form showRequired>
    <Field
      name="field1" label="Required Field"
      required
    />
    <Field
      name="field2" label="Another Required Field"
      required
    />
  </Form>

export default ShowRequiredForm`,pR=()=>c("div",{children:[o("h1",{children:"Field Validation"}),o("h2",{children:o("code",{children:"showRequired"})}),c("p",{children:["If a ",o(he,{})," is marked as ",o(fn,{})," then the"," ",o("code",{children:"showRequired"})," property can be added to have an additional label displayed indicating that it is required."]}),o(_,{Element:dR,code:hR,caption:"showRequired on Field"}),c("p",{children:["The ",o("code",{children:"showRequired"})," property can also be added to the"," ",o(ae,{})," to have it apply to all ",o(fn,{})," fields."]}),o(_,{Element:fR,code:mR,caption:"showRequired on Form"}),o(Be,{links:["field:required","field:requiredLabel","field:showOptional","field:optionalLabel"]})]}),gR=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RequiredLabel = () =>
  <Form showRequired requiredLabel="Important!">
    <Field
      name="field1" label="Required Field"
      required
    />
    <Field
      name="field2" label="Another Required Field"
      required
      requiredLabel="Very Important!"
    />
  </Form>

export default RequiredLabel`,vR=()=>c(I,{showRequired:!0,requiredLabel:"Important!",children:[o(S,{name:"field1",label:"Required Field",required:!0}),o(S,{name:"field2",label:"Another Required Field",required:!0,requiredLabel:"Very Important!"})]}),yR=()=>c("div",{children:[o("h1",{children:"Field Validation"}),o("h2",{children:o("code",{children:"requiredLabel"})}),c("p",{children:["You can use the ",o("code",{className:"code",children:"requiredLabel"})," property to change the label that is displayed for ",o(fn,{})," fields that have the ",o(b0,{})," option enabled.  You can set it on individual ",o(he,{})," components or on the parent ",o(ae,{}),"."]}),o(_,{Element:vR,code:gR,caption:"requiredLabel"}),o(Be,{links:["field:required","field:showRequired","field:showOptional","field:optionalLabel"]})]}),bR=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const RequiredLabel = () =>
  <Form requiredMessage="Nothing will come of nothing">
    <Field
      name="foo" label="Foo" required
    />
    <Field
      name="bar" label="Bar" required
      requiredMessage="You really MUST enter a value"
    />
    <Submit/>
  </Form>

export default RequiredLabel`,wR=()=>c(I,{requiredMessage:"Nothing will come of nothing",children:[o(S,{name:"foo",label:"Foo",required:!0}),o(S,{name:"bar",label:"Bar",required:!0,requiredMessage:"You really MUST enter a value"}),o(se,{})]}),FR=()=>c("div",{children:[o("h1",{children:"Field Validation"}),o("h2",{children:o("code",{children:"requiredMessage"})}),c("p",{children:["You can use the ",o("code",{className:"code",children:"requiredMessage"})," property to change the error message that is generated for ",o(fn,{})," fields that aren't completed."]}),c("p",{children:["You can set it on individual ",o(he,{})," components or on the parent"," ",o(ae,{})," to act as the default for all fields."]}),o(_,{Element:wR,code:bR,caption:"requiredMessage",children:o("p",{children:"Try submitting the form without entering any values."})}),o(Be,{links:["field:required","field:showRequired","field:requiredLabel","field:validateOnChange","field:validateOnBlur"]})]}),SR=()=>c(I,{showOptional:!0,children:[o(S,{name:"field1",label:"Required Field",required:!0}),o(S,{name:"field2",label:"Optional Field"})]}),xR=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ShowOptional = () =>
  <Form showOptional>
    <Field
      name="field1" label="Required Field"
      required={true}
    />
    <Field
      name="field2" label="Optional Field"
    />
  </Form>

export default ShowOptional`,ER=()=>c("div",{children:[o("h1",{children:"Field Validation"}),o("h2",{children:o("code",{children:"showOptional"})}),c("p",{children:["If a field is ",o("b",{children:"NOT"})," marked as ",o(fn,{})," then it is optional. If you set the ",o("code",{children:"showOptional"})," property then it will add an additional label to a field to indicate that it's optional.  You can set the property on individual ",o(he,{})," components or on the parent ",o(ae,{})," to act as a default for all fields."]}),c("p",{children:["You can use the ",o(v0,{})," property to change the text of the label that is displayed."]}),o(_,{Element:SR,code:xR,caption:"showOptional"}),o(Be,{links:["field:required","field:optionalLabel","field:showRequired","field:requiredLabel"]})]}),CR=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OptionalLabel = () =>
  <Form showOptional optionalLabel="Not required">
    <Field
      name="field1" label="Optional Field"
    />
    <Field
      name="field2" label="Another Optional Field"
      optionalLabel="Nice to have"
    />
  </Form>

export default OptionalLabel`,kR=()=>c(I,{showOptional:!0,optionalLabel:"Not required",children:[o(S,{name:"field1",label:"Optional Field"}),o(S,{name:"field2",label:"Another Optional Field",optionalLabel:"Nice to have"})]}),TR=()=>c("div",{children:[o("h1",{children:"Field Validation"}),o("h2",{children:o("code",{children:"optionalLabel"})}),c("p",{children:["You can use the ",o("code",{className:"code",children:"optionalLabel"})," property to change the label that is display for optional fields (i.e. those that aren't marked as ",o(fn,{}),") that have the"," ",o(w0,{})," option set.  You can set it on individual"," ",o(he,{})," components or on the parent ",o(ae,{})," to act as a default for all fields."]}),o(_,{Element:kR,code:CR,caption:"optionalLabel"}),o(Be,{links:["field:required","field:showRequired","field:showOptional","field:requiredLabel"]})]}),RR={username:{label:"Username",help:"Enter your username",validate:e=>Rt().trim().required("You must enter your username you numpty!").validate(e)},password:{label:"Password",type:"password",help:"Enter your password",validate:e=>Rt().trim().required("You must enter your password you muppet!").validate(e)}},NR=()=>c(I,{fields:RR,children:[o(vt,{names:"username password"}),o(se,{})]}),LR=`import { Form, Fields, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
import * as yup  from 'yup'
// PRETEND: import { Form, Fields, Submit } from '@abw/react-formula'

const fields = {
  username: {
    label: 'Username',
    help:  'Enter your username',
    validate: value => yup
      .string()
      .trim()
      .required('You must enter your username you numpty!')
      .validate(value)
  },
  password: {
    label: 'Password',
    type:  'password',
    help:  'Enter your password',
    validate: value => yup
      .string()
      .trim()
      .required('You must enter your password you muppet!')
      .validate(value)
  }
}

const ValidateExample = () =>
  <Form fields={fields}>
    <Fields names="username password"/>
    <Submit/>
  </Form>

export default ValidateExample`,$R={username:{label:"Username",help:"Enter your username",validate:async(e,t,n,r)=>{e.match(/badger/i)?n({value:`${e} is a great name`}):r({value:"Mr Badger",message:'Your username must contain the word "badger"'})}}},OR=()=>c(I,{fields:$R,children:[o(S,{name:"username"}),o(se,{})]}),AR=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const fields = {
  username: {
    label: 'Username',
    help:  'Enter your username',
    validate: async (value, field, resolve, reject) => {
      if (value.match(/badger/i)) {
        resolve({
          value: \`\${value} is a great name\`
        })
      }
      else {
        reject({
          value:   'Mr Badger',
          message: 'Your username must contain the word "badger"'
        })
      }
    }
  }
}

const ValidateExample = () =>
  <Form fields={fields}>
    <Field name="username"/>
    <Submit/>
  </Form>

export default ValidateExample`,PR=()=>c("div",{children:[o("h1",{children:"Field Validation"}),c("p",{children:["There are a number of different ways to validate field input. For simple cases where a value must be provided you can use the"," ",o(fn,{})," property.  If you need to perform additional validation then you can do that using a ",o("code",{children:"validate"})," function."]}),o("h2",{children:o("code",{children:"validate"})}),c("p",{children:["You can use the ",o(fn,{})," property to mark a field as being required, but it's a blunt instrument.  All it will do is check that a field has some value entered. For more robust validation you can use the ",o("code",{children:"validate"})," property to define an ",o("code",{children:"async"})," ","validation function."]}),c("p",{children:["In this example we're using"," ",o("a",{href:"https://www.npmjs.com/package/yup",children:"Yup"})," but you can use anything you like.  It should return the validated value on success or throw an error if the valid is invalid."]}),o(_,{Element:NR,code:LR,caption:"validate",children:o("p",{children:"Try submitting the form without entering any values for either of the fields. You should see the custom validation errors."})}),c("p",{children:["The ",o("code",{children:"validate"})," function is passed four arguments.  The first is the field value for common cases where that's all you need to determine if the field is valid.  The second argument is the field context containing everything you need to know about the field state and callable actions to change it.  The third and fourth arguments are"," ",o("code",{children:"resolve"})," and ",o("code",{children:"reject"})," functions which can be called to validate or invalidate the field, respectively.  The"," ",o("code",{children:"resolve"})," function should be passed an object containing the ",o("code",{children:"value"}),", which may be modified by your function. The ",o("code",{children:"reject"})," function should be passed an object containing an error ",o("code",{children:"message"}),", and optionally a new ",o("code",{children:"value"})," ","for the field."]}),o(_,{Element:OR,code:AR,caption:"validate",children:o("p",{children:'In this somewhat contrived example we require the user to enter a username containing the word "badger".'})}),o(Be,{links:["field:required","field:validateOnChange","field:validateOnBlur"]})]}),DR=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
import * as yup  from 'yup'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const fields = {
  vowels: {
    label: 'Vowels',
    help:  'Enter between 3 and 5 vowels',
    validateOnChange: true,
    minValidateLength: 3,
    validate: value => yup
      .string()
      .trim()
      .matches(/^[^y]*$/i, 'Sorry, but y is not allowed')
      .matches(/^[aeiou]*$/i, 'You should only type vowels')
      .min(3, 'You must enter at least three vowels')
      .max(5, 'You should not enter more than 5 vowels')
      .validate(value)
  }
}

const ValidateOnChangeExample = () =>
  <Form fields={fields}>
    <Field name="vowels"/>
  </Form>

export default ValidateOnChangeExample`,IR={vowels:{label:"Vowels",help:"Enter between 3 and 5 vowels",validateOnChange:!0,minValidateLength:3,validate:e=>Rt().trim().matches(/^[^y]*$/i,"Sorry, but y is not allowed").matches(/^[aeiou]*$/i,"You should only type vowels").min(3,"You must enter at least three vowels").max(5,"You should not enter more than 5 vowels").validate(e)}},_R=()=>o(I,{fields:IR,children:o(S,{name:"vowels"})}),jR=()=>c("div",{children:[o("h1",{children:"Field Validation"}),o("h2",{children:o("code",{children:"validateOnChange"})}),c("p",{children:["You can set the ",o("code",{children:"validateOnChange"})," flag to enable validation any time the field value changes.  The ",o("code",{children:"minValidateLength"})," can be set to only trigger validation when the input length exceeds a threshold."]}),o(_,{Element:_R,code:DR,caption:"validateOnChange",children:o("p",{children:"Enter some text in the field below.  Once you've entered three letters the validation will kick in.  You should see an error if you enter any letters that aren't vowels."})}),o(Be,{links:["field:required","field:validate","field:validateOnBlur"]})]}),MR={username:{label:"Username",help:"Enter your username",validate:e=>Rt().trim().required("You must enter your username you numpty!").validate(e)},password:{label:"Password",type:"password",help:"Enter your password",validate:e=>Rt().trim().required("You must enter your password you muppet!").validate(e)}},BR=()=>c(I,{fields:MR,validateOnBlur:!0,children:[o(vt,{names:"username password"}),o(se,{})]}),VR=`import { Form, Fields, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
import * as yup  from 'yup'
// PRETEND: import { Form, Fields, Submit } from '@abw/react-formula'

const fields = {
  username: {
    label: 'Username',
    help:  'Enter your username',
    validate: value => yup
      .string()
      .trim()
      .required('You must enter your username you numpty!')
      .validate(value)
  },
  password: {
    label: 'Password',
    type:  'password',
    help:  'Enter your password',
    validate: value => yup
      .string()
      .trim()
      .required('You must enter your password you muppet!')
      .validate(value)
  }
}

const ValidateExample = () =>
  <Form fields={fields} validateOnBlur>
    <Fields names="username password"/>
    <Submit/>
  </Form>

export default ValidateExample`,zR=()=>c("div",{children:[o("h1",{children:"Field Validation"}),o("h2",{children:o("code",{children:"validateOnBlur"})}),c("p",{children:["The ",o("code",{children:"validateOnBlur"})," property can be set to trigger validation whenever a field is blurred.  You can set it on individual"," ",o(he,{})," components or on the parent ",o(ae,{})," to have it apply to all fields."]}),o(_,{Element:BR,code:VR,caption:"validate",children:o("p",{children:"Try switching focus from one field to another without entering anything.  You should see the custom validation errors when each field is blurred."})}),o(Be,{links:["field:required","field:validate","field:validateOnChange"]})]}),qR=()=>c(gn,{children:[o(M,{path:"",end:!0,element:o(ST,{})}),o(M,{path:"properties",element:o(xT,{})}),o(M,{path:"prefix-suffix",element:o(LT,{})}),o(M,{path:"onFocus",element:o(PT,{})}),o(M,{path:"onBlur",element:o(_T,{})}),o(M,{path:"onValid",element:o(eR,{})}),o(M,{path:"onInvalid",element:o(rR,{})}),o(M,{path:"setFocus",element:o(BT,{})}),o(M,{path:"setValue",element:o(HT,{})}),o(M,{path:"Reset",element:o(GT,{})}),o(M,{path:"onChange",element:o(XT,{})}),o(M,{path:"prepareValue",element:o(aR,{})}),o(M,{path:"required",element:o(cR,{})}),o(M,{path:"requiredMessage",element:o(FR,{})}),o(M,{path:"showRequired",element:o(pR,{})}),o(M,{path:"requiredLabel",element:o(yR,{})}),o(M,{path:"showOptional",element:o(ER,{})}),o(M,{path:"optionalLabel",element:o(TR,{})}),o(M,{path:"validate",element:o(PR,{})}),o(M,{path:"validateOnChange",element:o(jR,{})}),o(M,{path:"validateOnBlur",element:o(zR,{})})]}),UR={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},HR=()=>o(I,{fields:UR,children:c("div",{className:"grid-2 gap-2",children:[o(vt,{names:["name","message"]}),o(vt,{names:"badgers animal"})]})}),WR=`import { Form, Fields } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields } from '@abw/react-formula'

const fields = {
  name: {
    label: 'Enter your name',
    placeholder: 'Your name'
  },
  message: {
    label: 'Enter a message',
    placeholder: 'Hello World'
  },
  badgers: {
    label: 'Do you like badgers?',
    type: 'checkbox',
    text: 'Yes, of course I do'
  },
  animal: {
    label: 'What is your favourite animal?',
    type: 'radio',
    options: ['Badger', 'Ferret', 'Stoat']
  },
}

const FieldsExample = () =>
  <Form fields={fields}>
    <div className="grid-2 gap-2">
      {/* array of field name strings */}
      <Fields names={['name', 'message']}/>
      {/* shortcut - a single string of field names */}
      <Fields names='badgers animal'/>
    </div>
  </Form>

export default FieldsExample
`,YR=()=>c("div",{children:[o("h1",{children:"Fields"}),c("p",{children:["The ",o("code",{children:"Fields"})," component can be used to render multiple fields."]}),o("p",{children:"This is a shortcut for convenience, but it depends on you having all your form fields defined in a separate schema so you can reference them only by name."}),c("p",{children:["The ",o("code",{className:"code",children:"names"})," property should be used to specify the list of field names either as an array of strings, or a single string containing a whitespace-delimited list of field names. The ",o("code",{className:"code",children:"Fields"})," component renders each of the fields, collected together in a single"," ",o("code",{className:"code",children:"div"})," element"]}),o(_,{Element:HR,code:WR,caption:"Fields"})]}),GR=()=>o(I,{children:c(Wi,{legend:"Fieldset One",children:[o(S,{name:"one",label:"Field One"}),o(S,{name:"one",label:"Field Two"})]})}),KR=`import { Form, Field, Fieldset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Fieldset } from '@abw/react-formula'

const FieldsetExample = () =>
  <Form>
    <Fieldset legend="Fieldset One">
      <Field name="one" label="Field One"/>
      <Field name="one" label="Field Two"/>
    </Fieldset>
  </Form>

export default FieldsetExample
`,QR={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},XR=()=>o(I,{fields:QR,children:o(Wi,{legend:"Fieldset Two",fields:"name message"})}),ZR=`import { Form, Fieldset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fieldset } from '@abw/react-formula'

const fields = {
  name: {
    label: 'Enter your name',
    placeholder: 'Your name'
  },
  message: {
    label: 'Enter a message',
    placeholder: 'Hello World'
  },
}

const FieldsetFieldsExample = () =>
  <Form fields={fields}>
    <Fieldset legend="Fieldset Two" fields="name message"/>
  </Form>

export default FieldsetFieldsExample
`,JR=()=>c("div",{children:[o("h1",{children:"Fieldset"}),c("p",{children:["The ",o("code",{children:"Fieldset"})," component can be used to create a field set.  The ",o("code",{children:"legend"})," property should be used to set the legend."]}),o(_,{Element:GR,code:KR,caption:"Fieldset"}),c("p",{children:["The ",o("code",{className:"code",children:"fields"})," property can be used as a shortcut to render a set of named fields using the"," ",o(Bp,{})," component."]}),o(_,{Element:XR,code:ZR,caption:"Fieldset fields"})]}),e4=()=>c(I,{showRequired:!0,children:[o(S,{name:"one",label:"Field one"}),o(S,{name:"two",label:"Field two"}),o(se,{})]}),t4=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitExample = () =>
  <Form showRequired>
    <Field name="one"   label="Field one"/>
    <Field name="two"   label="Field two"/>
    <Submit/>
  </Form>

export default SubmitExample`,n4=()=>c(I,{children:[o(S,{name:"one",label:"Field one"}),o(S,{name:"two",label:"Field two"}),o(se,{className:"btn-blue",text:"Save Changes"})]}),r4=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const SubmitProps = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit className="btn-blue" text="Save Changes"/>
  </Form>

export default SubmitProps`,o4=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnSubmit = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <Submit/>
  </Form>

export default OnSubmit`,l4=()=>c(I,{onSubmit:()=>alert("You submitted the form"),children:[o(S,{name:"field1",label:"Field One"}),o(se,{})]}),i4=()=>c("div",{children:[o("h1",{children:"Submit"}),c("p",{children:["The ",o("code",{children:"Submit"})," component can be used to add a button which will submit the form.  See the"," ",o(J,{to:"/components/form/validation",text:"validation page"})," for information on how the form data is validated and the"," ",o(jp,{})," component for details on how validation errors are displayed and can be customised."]}),o(_,{Element:e4,code:t4,caption:"Submit",children:o("p",{children:"Try entering some text in the fields below then click on the Submit button."})}),o("h2",{children:"Properties"}),c("p",{children:["You can use the ",o("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",o("code",{children:"className"}),"."]}),o(_,{Element:n4,code:r4,caption:"Properties"}),o("h2",{children:"onSubmit"}),c("p",{children:["You can use the ",o("code",{children:"onSubmit"})," form property to handle the submission."]}),o(_,{Element:l4,code:o4,caption:"onSubmit"})]}),a4=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const ResetExample = () =>
  <Form values={{ three: 'The third field' }}>
    <Field
      name="one"
      label="Field one"
    />
    <Field
      name="two"
      label="Field two with default value"
      default="Badger"
    />
    <Field
      name="three"
      label="Field three with pre-defined form value"
    />
    <Reset/>
  </Form>

export default ResetExample`,s4=()=>c(I,{values:{three:"The third field"},children:[o(S,{name:"one",label:"Field one"}),o(S,{name:"two",label:"Field two with default value",default:"Badger"}),o(S,{name:"three",label:"Field three with pre-defined form value"}),o(vr,{})]}),u4=()=>c(I,{children:[o(S,{name:"one",label:"Field one"}),o(vr,{className:"btn-brown",text:"Reset the form"})]}),c4=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const Properties = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Reset className="btn-brown" text="Reset the form"/>
  </Form>

export default Properties`,d4=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const OnReset = () =>
  <Form onReset={() => alert('form has been reset')}>
    <Field name="field1" label="Field One"/>
    <Reset/>
  </Form>

export default OnReset`,h4=()=>c(I,{onReset:()=>alert("form has been reset"),children:[o(S,{name:"field1",label:"Field One"}),o(vr,{})]}),f4=()=>c("div",{children:[o("h1",{children:"Reset"}),c("p",{children:["The ",o("code",{children:"Reset"})," component can be used to add a reset button which will reset the form to its initial state.  Any"," ",o("code",{children:"values"})," defined on the ",o(ae,{})," will be restored. Any fields that have a ",o("code",{children:"default"})," value will be reset to that value."]}),o(_,{Element:s4,code:a4,caption:"Reset",children:o("p",{children:"Try entering some text in the fields below then click on the Reset button.  You should see the fields reset to their original state."})}),o("h2",{children:"Properties"}),c("p",{children:["You can use the ",o("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",o("code",{children:"className"}),"."]}),o(_,{Element:u4,code:c4,caption:"Properties"}),o("h2",{children:"onReset"}),c("p",{children:["You can use the ",o("code",{children:"onReset"})," property to register a function that should be called when the form is reset."]}),o(_,{Element:h4,code:d4,caption:"onReset"})]}),m4=()=>c(I,{children:[o(S,{name:"field1",label:"Field One"}),o(Sa,{})]}),p4=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Cancel } from '@abw/react-formula'

const CancelExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Cancel/>
  </Form>

export default CancelExample`,g4=()=>c(I,{children:[o(S,{name:"field1",label:"Field One"}),o(Sa,{text:"Go Back",className:"btn-brown",onClick:()=>alert("Cancel button was clicked")})]}),v4=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Cancel } from '@abw/react-formula'

const CancelExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Cancel
      text="Go Back"
      className="btn-brown"
      onClick={() => alert('Cancel button was clicked')}
    />
  </Form>

export default CancelExample`,y4=()=>c("div",{children:[o("h1",{children:"Cancel"}),c("p",{children:["The ",o("code",{children:"Cancel"})," component can be used to add a Cancel button. This doesn't do anything to the form but it's common to provide a button in a form to allow a user to cancel an edit or go back."]}),o(_,{Element:m4,code:p4,caption:"Cancel",children:c("p",{children:["Don't be surprised that the Cancel button doesn't do anything in this example.  We need to add an ",o("code",{children:"onClick"})," handler to make it useful. See the next example."]})}),c("p",{children:["The ",o("code",{children:"text"})," property will set the text for the button. The ",o("code",{children:"className"})," property can be used to add a CSS class.  The ",o("code",{children:"onClick"})," property should be used to define a handler to do something when the button is clicked."]}),o(_,{Element:g4,code:v4,caption:"Properties"})]}),b4=()=>c(I,{onSubmit:()=>alert("You submitted the form"),children:[o(S,{name:"field1",label:"Field One"}),o(Fg,{})]}),w4=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelSubmit/>
  </Form>

export default CancelSubmitExample`,F4=()=>c(I,{onSubmit:()=>alert("You submitted the form"),children:[o(S,{name:"field1",label:"Field One"}),o(Fg,{className:"flex evenly",submit:{text:"Submit the Form",className:"wide btn-green"},cancel:{text:"Go Back",className:"wide btn-lilac",onClick:()=>alert("You went back")}})]}),S4=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelSubmit
      className="flex evenly"
      submit={{
        text: 'Submit the Form',
        className: 'wide btn-green',
      }}
      cancel={{
        text: 'Go Back',
        className: 'wide btn-lilac',
        onClick: () => alert('You went back')
      }}
    />
  </Form>

export default CancelSubmitExample`,x4=()=>c("div",{children:[o("h1",{children:"CancelSubmit"}),c("p",{children:["The ",o("code",{children:"CancelSubmit"})," component can be used to add both"," ",o(Vi,{})," and ",o(jn,{})," controls."]}),o(_,{Element:b4,code:w4,caption:"CancelSubmit"}),c("p",{children:["You can define properties for the ",o(Vi,{})," component using the ",o("code",{children:"cancel"})," property, and for the ",o(jn,{})," ","component using the ",o("code",{children:"submit"})," property.  You can add a"," ",o("code",{children:"className"})," property to set the CSS class of the container."]}),o(_,{Element:F4,code:S4,caption:"Properties"})]}),E4=()=>c(I,{onSubmit:()=>alert("You submitted the form"),children:[o(S,{name:"field1",label:"Field One"}),o(Sg,{})]}),C4=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit/>
  </Form>

export default CancelResetSubmitExample`,k4=()=>c(I,{onSubmit:()=>alert("You submitted the form"),children:[o(S,{name:"field1",label:"Field One"}),o(Sg,{submit:{text:"Submit the Form",className:"btn-green"},reset:{text:"Reset the Form",className:"btn-brown"},cancel:{text:"Go Back",onClick:()=>alert("You went back")}})]}),T4=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit
      submit={{
        text: 'Submit the Form',
        className: 'btn-green',
      }}
      reset={{
        text: 'Reset the Form',
        className: 'btn-brown',
      }}
      cancel={{
        text: 'Go Back',
        onClick: () => alert('You went back')
      }}
    />
  </Form>

export default CancelResetSubmitExample`,R4=()=>c("div",{children:[o("h1",{children:"CancelResetSubmit"}),c("p",{children:["The ",o("code",{children:"CancelResetSubmit"})," component can be used to add all three ",o(Vi,{}),", ",o(zi,{})," and ",o(jn,{})," controls in one fell swoop."]}),o(_,{Element:E4,code:C4,caption:"CancelResetSubmit"}),c("p",{children:["You can define properties for the ",o(Vi,{})," component using the ",o("code",{children:"cancel"})," property, for the ",o(zi,{})," component using the ",o("code",{children:"reset"})," property, and for the ",o(jn,{})," ","component using the ",o("code",{children:"submit"})," property.  You can add a"," ",o("code",{children:"className"})," property to set the CSS class of the container."]}),o(_,{Element:k4,code:T4,caption:"Properties"})]}),N4=()=>c(I,{onSubmit:()=>alert("You submitted the form"),children:[o(S,{name:"field1",label:"Field One"}),o(xa,{})]}),L4=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <ResetSubmit/>
  </Form>

export default ResetSubmitExample`,$4=()=>c(I,{onSubmit:()=>alert("You submitted the form"),children:[o(S,{name:"field1",label:"Field One"}),o(xa,{reset:{text:"Reset the Form",className:"btn-brown"},submit:{text:"Submit the Form",className:"btn-blue"}})]}),O4=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <ResetSubmit
      reset={{
        text: 'Reset the Form',
        className: 'btn-brown'
      }}
      submit={{
        text: 'Submit the Form',
        className: 'btn-blue'
      }}
    />
  </Form>

export default ResetSubmitExample`,A4=()=>c("div",{children:[o("h1",{children:"ResetSubmit"}),c("p",{children:["The ",o("code",{children:"ResetSubmit"})," component can be used to add both"," ",o(zi,{})," and ",o(jn,{})," controls."]}),o(_,{Element:N4,code:L4,caption:"ResetSubmit"}),c("p",{children:["You can define properties for the ",o(zi,{})," component using the ",o("code",{children:"reset"})," property, and for the ",o(jn,{})," ","component using the ",o("code",{children:"submit"})," property.  You can add a"," ",o("code",{children:"className"})," property to set the CSS class of the container."]}),o(_,{Element:$4,code:O4,caption:"Properties"})]}),P4=()=>c(I,{children:[o(S,{name:"field1",label:"Field One"}),o(S,{name:"field2",label:"Field Two",value:"Hello World!"}),o(Hc,{children:o(xa,{})})]}),D4=`import { Form, Field, Changed, ResetSubmit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Changed, ResetSubmit } from '@abw/react-formula'

const ChangedExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Field name="field2" label="Field Two" value="Hello World!"/>
    <Changed>
      <ResetSubmit/>
    </Changed>
  </Form>

export default ChangedExample`,I4=()=>c("div",{children:[o("h1",{children:"Changed"}),c("p",{children:["The ",o("code",{children:"Changed"})," component will only render its child components when the form state has changed."]}),o("p",{children:'A typical example is shown below.  The "Reset" and "Submit" buttons are only displayed once the user has made changes to a form field.'}),o(_,{Element:P4,code:D4,caption:"Changed",children:c("p",{children:["Edit one of the fields in the form and you should see the"," ",'"Reset" and "Submit" buttons appear as if by magic.  Try clicking on the "Reset" button and they will be hidden again.']})})]}),_4=()=>o(I,{children:o(S,{name:"field1",label:"Field One",children:o(Fa,{})})}),j4=`import { Form, Field, Label } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Label } from '@abw/react-formula'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Field One">
      <Label/>
    </Field>
  </Form>

export default LabelExample`,M4=()=>c("div",{children:[o("h1",{children:"Label"}),c("p",{children:["The ",o("code",{children:"Label"})," component can be used to add a label to a field."]}),o(_,{Element:_4,code:j4,caption:"Label"})]}),B4=()=>c(I,{showRequired:!0,children:[o(S,{name:"one",label:"Field one",required:!0}),o(S,{name:"two",label:"Field two",required:!0}),o(S,{name:"three",label:"Field three"}),o(se,{})]}),V4=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const RequiredExample = () =>
  <Form showRequired>
    <Field name="one"   label="Field one" required/>
    <Field name="two"   label="Field two" required/>
    <Field name="three" label="Field three"/>
    <Submit/>
  </Form>

export default RequiredExample`,z4=()=>c(I,{showRequired:!0,errorsInHeader:!1,children:[o(S,{name:"one",label:"Field one",required:!0}),o(S,{name:"two",label:"Field two",required:!0}),o(S,{name:"three",label:"Field three"}),o(zc,{}),o(se,{})]}),q4=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const ErrorsExample = () =>
  <Form showRequired errorsInHeader={false}>
    <Field name="one"   label="Field one" required/>
    <Field name="two"   label="Field two" required/>
    <Field name="three" label="Field three"/>
    <Errors/>
    <Submit/>
  </Form>

export default ErrorsExample`,U4=()=>o(I,{children:o(H4,{})}),H4=()=>{const{setInvalidState:e}=dt(),t=(i,a)=>{i.preventDefault(),e({error:a})};return c(Ee,{children:[o("button",{onClick:i=>t(i,"An error string"),children:"Error String"}),o("button",{onClick:i=>t(i,{message:"An error object"}),children:"Error Object"}),o("button",{onClick:i=>t(i,{label:"Example",message:"An error object"}),children:"Labelled Error"})]})},W4=`import { Form, useForm } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, useForm } from '@abw/react-formula'

const Error = () =>
  <Form>
    <ErrorButtons/>
  </Form>

const ErrorButtons = () => {
  const { setInvalidState } = useForm()

  const setError = (event, error) => {
    event.preventDefault()
    setInvalidState({ error })
  }

  const errorString = event =>
    setError(event, 'An error string')

  const errorObject = event =>
    setError(event, { message: 'An error object' })

  const errorLabel  = event =>
    setError(event, { label: 'Example', message: 'An error object' })

  return (
    <>
      <button onClick={errorString}>
        Error String
      </button>
      <button onClick={errorObject}>
        Error Object
      </button>
      <button onClick={errorLabel}>
        Labelled Error
      </button>
    </>
  )
}

export default Error`,Y4=()=>o(I,{children:o(G4,{})}),G4=()=>{const{setInvalidState:e}=dt(),t=(a,s)=>{a.preventDefault(),e({errors:s})};return c(Ee,{children:[o("button",{onClick:a=>t(a,["A single error in errors"]),children:"Error String"}),o("button",{onClick:a=>t(a,["An error string","Another error string"]),children:"Error Strings"}),o("button",{onClick:a=>t(a,[{message:"An error object"},{message:"Another error object"}]),children:"Error Objects"}),o("button",{onClick:a=>t(a,[{label:"Example1",message:"An error object"},{label:"Example2",message:"Another error object"}]),children:"Labelled Errors"})]})},K4=`import { Form, useForm } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, useForm } from '@abw/react-formula'

const Errors = () =>
  <Form>
    <ErrorButtons/>
  </Form>

const ErrorButtons = () => {
  const { setInvalidState } = useForm()

  const setErrors = (event, errors) => {
    event.preventDefault()
    setInvalidState({ errors })
  }

  const errorString = event =>
    setErrors(event, [
      'A single error in errors',
    ])

  const errorStrings = event =>
    setErrors(event, [
      'An error string',
      'Another error string'
    ])

  const errorObjects = event =>
    setErrors(event, [
      { message: 'An error object' },
      { message: 'Another error object'}
    ])

  const errorLabels  = event =>
    setErrors(event, [
      { label: 'Example1', message: 'An error object' },
      { label: 'Example2', message: 'Another error object' }
    ])

  return (
    <>
      <button onClick={errorString}>
        Error String
      </button>
      <button onClick={errorStrings}>
        Error Strings
      </button>
      <button onClick={errorObjects}>
        Error Objects
      </button>
      <button onClick={errorLabels}>
        Labelled Errors
      </button>
    </>
  )
}

export default Errors`,Q4=()=>c("div",{children:[o("h1",{children:"Errors"}),o("p",{children:"By default, validation errors will be displayed in the form header."}),o(_,{Element:B4,code:V4,caption:"Required Fields",children:o("p",{children:"Try submitting the form below without entering anything for either of the first two fields."})}),o("h2",{children:"errorsInHeader"}),c("p",{children:["If you don't want errors displayed in the header you can set the"," ",o("code",{children:"errorsInHeader"})," form property to ",o("code",{children:"false"}),".  You can use the ",o("code",{children:"Errors"})," component to display them somewhere else inside the form."]}),o(_,{Element:z4,code:q4,caption:"Errors"}),o("h2",{children:"error"}),c("p",{children:["The ",o(ae,{})," context can include a single ",o("code",{children:"error"})," or an array of ",o("code",{children:"errors"}),`.  The first case is typically used when there's an error that doesn't relate to a specific field, e.g. "Invalid username or password".  The latter case is used when there are multiple errors, e.g. for different fields.`]}),c("p",{children:["Just to complicate matters, both ",o("code",{children:"error"})," and the elements in ",o("code",{children:"errors"})," can be either strings or objects containing a"," ",o("code",{children:"message"})," and other information about what field the error message relates to, including the field ",o("code",{children:"name"})," and"," ",o("code",{children:"label"}),"."]}),c("p",{children:["The ",o("code",{children:"Errors"})," component handles all these cases.  There are also some additional properties that you can set on the ",o(ae,{})," to configure what gets displayed.  The ",o("code",{children:"errorsTitle"}),' can be defined as a function which takes the number of errors and returns an appropriate title.  The default function returns "Form Submission Error" if there is one error or "Form Submission Errors" if there are more than one.  The ',o("code",{children:"errorsPrompt"})," can also be defined to prompt the user to fix any ",o("code",{children:"errors"}),".  This also takes the number of ",o("code",{children:"errors"}),'.  The default function returns "Please correct this problem and re-submit:" or "Please correct these problems and re-submit:", depending on the number of errors.']}),c("p",{children:["This example includes some buttons that set the ",o("code",{children:"error"})," ","in the ",o(ae,{})," to demonstrate the different combinations."]}),o(_,{Element:U4,code:W4,caption:"error"}),o("h2",{children:"errors"}),c("p",{children:["This example does a similar thing but sets multiple ",o("code",{children:"errors"}),"."]}),o(_,{Element:Y4,code:K4,caption:"error"}),c("p",{children:["You can always implement your own component for displaying errors if you don't like the way this works.  Just be warned that there are the various different possibilities that need to be accounted for. You can use the ",o("code",{children:"useForm"})," function to get access to the form context which contains the ",o("code",{children:"error"})," and/or ",o("code",{children:"errors"}),"."]}),c("p",{children:["See the implementations of the"," ",o("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Errors.jsx",children:"Errors"})," ","and"," ",o("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Error.jsx",children:"Error"})," ","modules for a starting point."]})]}),X4=`import { Form, Field, Debug } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const DebugForm = () =>
  <Form>
    <Field
      name="message" label="Message"
    />
    <Field
      name="animal" label="Animal" type="select"
      options={['Anteater', 'Badger', 'Camel']}
    />
    <Field
      name="terms" label="Terms and Conditions" type="checkbox"
      text="I agree to the Terms and Conditions"
    />
    <Debug/>
  </Form>

export default DebugForm`,Z4=()=>c(I,{children:[o(S,{name:"message",label:"Message"}),o(S,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"]}),o(S,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions"}),o(vn,{})]}),J4=`import { Form, Field, Debug } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const Show = () =>
  <Form>
    <Field
      name="message" label="Message"
    />
    <Field
      name="animal" label="Animal" type="select"
      options={['Anteater', 'Badger', 'Camel']}
    />
    <Field
      name="terms" label="Terms and Conditions" type="checkbox"
      text="I agree to the Terms and Conditions"
    />
    <Debug show={{ values: true, status: true, config: true }}/>
  </Form>

export default Show`,eN=()=>c(I,{children:[o(S,{name:"message",label:"Message"}),o(S,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"]}),o(S,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions"}),o(vn,{show:{values:!0,status:!0,config:!0}})]}),tN=`import { Form, Field, Debug } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const ShowAll = () =>
  <Form>
    <Field name="message" label="Message"/>
    <Debug showAll/>
  </Form>

export default ShowAll`,nN=()=>c(I,{children:[o(S,{name:"message",label:"Message"}),o(vn,{showAll:!0})]}),rN=()=>c("div",{children:[o("h1",{children:"Debug"}),c("p",{children:["The ",o("code",{children:"Debug"})," component can be used in development to debug your form.  By default it displays only the form values."]}),o(_,{Element:Z4,code:X4,caption:"Debug",children:o("p",{children:"Try updating the form values and see how the debugging data changes."})}),o("h2",{children:"show"}),c("p",{children:["The ",o("code",{children:"show"})," option can used to configure what data the debug panel displays.  It should be an object containing any of"," ",o("code",{children:"values"}),", ",o("code",{children:"config"}),", ",o("code",{children:"status"})," or"," ",o("code",{children:"fields"})," which should be set to ",o("code",{children:"true"})," to enable display."]}),o(_,{Element:eN,code:J4,caption:"show"}),o("h2",{children:"showAll"}),c("p",{children:["The ",o("code",{children:"showAll"})," option is a shortcut to showing all form data."]}),o(_,{Element:nN,code:tN,caption:"showAll"})]}),oN=()=>c(gn,{children:[o(M,{path:"",end:!0,element:o(nT,{})}),o(M,{path:"Form/*",element:o(FT,{})}),o(M,{path:"Field/*",element:o(qR,{})}),o(M,{path:"Fields",element:o(YR,{})}),o(M,{path:"Fieldset",element:o(JR,{})}),o(M,{path:"Submit",element:o(i4,{})}),o(M,{path:"Reset",element:o(f4,{})}),o(M,{path:"Cancel",element:o(y4,{})}),o(M,{path:"CancelSubmit",element:o(x4,{})}),o(M,{path:"ResetSubmit",element:o(A4,{})}),o(M,{path:"CancelResetSubmit",element:o(R4,{})}),o(M,{path:"Changed",element:o(I4,{})}),o(M,{path:"Label",element:o(M4,{})}),o(M,{path:"Errors",element:o(Q4,{})}),o(M,{path:"Debug",element:o(rN,{})})]}),lN=()=>c("div",{children:[o("h1",{children:"Inputs"}),o("p",{children:"This section of the documentation provides detailed information about different input types."}),c("ul",{className:"menu",children:[console.log("menu: ",su.items),su.items.map((e,t)=>o(wc,{item:e,showAbout:!0},t))]})]}),iN=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Text = () =>
  <Form>
    <Field name="one"/>
    <Field name="two"   label="A text input with a label"/>
    <Field name="three" label="Another text input"    type="text"/>
    <Field name="four"  label="Text with placeholder" placeholder="Hello World!"/>
    <Field name="money" label="Prefix/Suffix" prefix="$" suffix=".00" />
  </Form>

export default Text`,aN=()=>c(I,{children:[o(S,{name:"one"}),o(S,{name:"two",label:"A text input with a label"}),o(S,{name:"three",label:"Another text input",type:"text"}),o(S,{name:"four",label:"Text with placeholder",placeholder:"Hello World!"}),o(S,{name:"money",label:"Prefix/Suffix",prefix:"$",suffix:".00"})]}),sN=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const TextThin = () =>
  <Form>
    <Field
      name="one"
      label="A text field"
      className="thin"
      size="25"
    />
    <Field
      name="two"
      label="A text field with prefix and suffix"
      prefix="$" suffix=".00"
      size="6"
      className="thin"
    />
  </Form>

export default TextThin`,uN=()=>c(I,{children:[o(S,{name:"one",label:"A text field",className:"thin",size:"25"}),o(S,{name:"two",label:"A text field with prefix and suffix",prefix:"$",suffix:".00",size:"6",className:"thin"})]}),cN=()=>c("div",{children:[o("h1",{children:"Text Fields"}),c("p",{children:["The ",o("code",{className:"code",children:"Form"})," component is used to create a form wrapper.  Inside that the ",o("code",{className:"code",children:"Field"})," ","component is used to define a field.  The only property required is ",o("code",{className:"code",children:"name"}),"."]}),c("p",{children:["The default field ",o("code",{className:"code",children:"type"})," is"," ",o("code",{className:"code",children:"text"})," so it's optional in these examples.  You can provide a ",o("code",{className:"code",children:"label"})," ","and/or ",o("code",{className:"code",children:"placeholder"})," text.  Both are also optional."]}),o(_,{Element:aN,code:iN}),o("h2",{children:"Thin Text Fields"}),c("p",{children:["The default behaviour is to make the text fields extend to the full width of the container.  Bitter experience has taught me that it's generally easier to do this and constrain the width of the container than it is to try and get all inputs the same width, especially if you're using prefix and suffix elements. But if you really want to throw caution to the wind you can add the ",o("code",{className:"code",children:"thin"})," CSS class via the ",o("code",{className:"code",children:"className"})," property."]}),c("p",{children:["The ",o("code",{className:"code",children:"size"})," property can be set to tell the browser ",o("i",{children:"approximately"})," how wide the field should be in terms of characters, but don't rely on it being particularly accurate.  In terms of usability it is generally considered to be a good thing to give users a visual indication of how long the input is expected to be.  Unfortunately I can count on no hands the number of times a designer has agreed that this is more important than having all the fields fully justified."]}),o(_,{Element:uN,code:sN})]}),dN=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const TextAreaExample = () =>
  <Form>
    <Field
      type="textarea" name="one"
      label="A text area input"
    />
    <Field
      type="textarea" name="two"
      label="Text area with rows" rows="10"
    />
    <Field
      type="textarea" name="three"
      label="Thin text area with placeholder"
      placeholder="Type here"
      className="thin"
    />
  </Form>

export default TextAreaExample`,hN=()=>c(I,{children:[o(S,{type:"textarea",name:"one",label:"A text area input"}),o(S,{type:"textarea",name:"two",label:"Text area with rows",rows:"10"}),o(S,{type:"textarea",name:"three",label:"Thin text area with placeholder",placeholder:"Type here",className:"thin"})]}),fN=()=>c("div",{children:[o("h1",{children:"Text Area Fields"}),c("p",{children:["Set the ",o("code",{className:"code",children:"type"})," to"," ",o("code",{className:"code",children:"textarea"})," for a text area input.  The optional ",o("code",{className:"code",children:"rows"})," property can be used to specify the number of rows."]}),o(_,{Element:hN,code:dN})]}),mN=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const TextExample = () =>
  <Form>
    <Field name="one"   type="number"   label="A number field"/>
    <Field name="two"   type="date"     label="A date field"/>
    <Field name="three" type="password" label="A password field"/>
    <Field name="four"  type="color"    label="A color field"/>
  </Form>

export default TextExample`,pN=()=>c(I,{children:[o(S,{name:"one",type:"number",label:"A number field"}),o(S,{name:"two",type:"date",label:"A date field"}),o(S,{name:"three",type:"password",label:"A password field"}),o(S,{name:"four",type:"color",label:"A color field"})]}),gN=()=>c("div",{children:[o("h1",{children:"Number, Date and other Field Types"}),c("p",{children:["All the other variants of the basic input type are supported.  Set the ",o("code",{className:"code",children:"type"})," to ",o("code",{className:"code",children:"number"})," ",", for a numerical field, ",o("code",{className:"code",children:"date"})," for a date selector, ",o("code",{className:"code",children:"password"})," for a password field, and so on."]}),o(_,{Element:pN,code:mN})]}),vN=()=>o(I,{children:o(S,{name:"one",label:"A checkbox example",type:"checkbox",text:"I like badgers!"})}),yN=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Checkbox = () =>
  <Form>
    <Field
      name="one" label="A checkbox example"
      type="checkbox" text="I like badgers!"
    />
  </Form>

export default Checkbox`,bN=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const CheckboxWide = () =>
  <Form>
    <Field
      name="badger" label="A wide checkbox example"
      type="checkbox" text="I really like badgers!"
      className="wide"
    />
  </Form>

export default CheckboxWide`,wN=()=>o(I,{children:o(S,{name:"badger",label:"A wide checkbox example",type:"checkbox",text:"I really like badgers!",className:"wide"})}),FN=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const CheckboxBare = () =>
  <Form>
    <Field
      name="badger" label="A bare checkbox"
      type="checkbox" text="I really, really like badgers!"
      className="bare"
    />
  </Form>

export default CheckboxBare`,SN=()=>o(I,{children:o(S,{name:"badger",label:"A bare checkbox",type:"checkbox",text:"I really, really like badgers!",className:"bare"})}),xN=()=>c("div",{children:[o("h1",{children:"Checkbox Fields"}),c("p",{children:["Set the ",o("code",{className:"code",children:"type"})," to"," ",o("code",{className:"code",children:"checkbox"})," for a checkbox.  Use the",o("code",{className:"code",children:"text"})," property to define any text that you want to appear alongside the checkbox.  The"," ",o("code",{className:"code",children:"label"})," is optional on all fields, so depending on what your checkbox text says, you might want to leave it out."]}),o(_,{Element:vN,code:yN}),o("h2",{children:"Wide Checkbox"}),c("p",{children:["The default behaviour is for a checkbox to only take up as much room as is required for the text.  Add the ",o("code",{className:"code",children:"wide"})," ","CSS class using the ",o("code",{className:"code",children:"className"})," property to make it extend across the full width of the container."]}),o(_,{Element:wN,code:bN}),o("h2",{children:"Bare Checkbox"}),c("p",{children:["If boxes around checkboxes aren't your thing then the"," ",o("code",{className:"code",children:"bare"})," class will strip them naked."]}),o(_,{Element:SN,code:FN})]}),EN=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Radio = () =>
  <Form>
    <Field
      name="animal" label="What is your favourite animal?" type="radio"
      options={[ 'Badger', 'Ferret', 'Stoat' ]}
    />
  </Form>

export default Radio`,CN=()=>o(I,{children:o(S,{name:"animal",label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]})}),kN=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioWide = () =>
  <Form>
    <Field
      name="food" label="What is your favourite number?" type="radio"
      options={[
        { value: 10, text: 'Ten' },
        { value: 11, text: 'Eleven (one louder)', className: 'bold' },
        { value: 42, text: <>Forty-Two (the meaning of <i>life</i>)</> },
      ]}
      className="wide"
    />
  </Form>

export default RadioWide`,TN=()=>o(I,{children:o(S,{name:"food",label:"What is your favourite number?",type:"radio",options:[{value:10,text:"Ten"},{value:11,text:"Eleven (one louder)",className:"bold"},{value:42,text:c(Ee,{children:["Forty-Two (the meaning of ",o("i",{children:"life"}),")"]})}],className:"wide"})}),RN=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioBare = () =>
  <Form>
    <Field
      name="cheese" label="What is your favourite cheese?" type="radio"
      options={[ 'Cheddar', 'Brie', 'Emmental' ]}
      className="bare"
    />
  </Form>

export default RadioBare`,NN=()=>o(I,{children:o(S,{name:"cheese",label:"What is your favourite cheese?",type:"radio",options:["Cheddar","Brie","Emmental"],className:"bare"})}),LN=()=>c("div",{children:[o("h1",{children:"Radio Button Fields"}),c("p",{children:["Set the ",o("code",{className:"code",children:"type"})," to"," ",o("code",{className:"code",children:"radio"})," to create a radio button set. The ",o("code",{className:"code",children:"options"})," property should be used to define the options.  In simple cases where the value and text are the same then you only need to provide an array of values.  Otherwise, provide an array of objects containing"," ",o("code",{className:"code",children:"value"})," and ",o("code",{className:"code",children:"text"})," ","properties."]}),c("p",{children:["You can also add ",o("code",{className:"code",children:"className"})," if you want to add a particular class to an option.  Or for more complex markup, define the ",o("code",{className:"code",children:"text"})," as a JSX snippet.  All of these properties can be defined in a"," ",o("a",{href:"schema",children:"separate scheme"}),' or you can "inline" them as shown here.  Whatever floats your boat.']}),o(_,{Element:CN,code:EN}),o("h2",{children:"Wide Radio Button Options"}),c("p",{children:["The default behaviour is for radio button options to only take up as much room as is required for the text.  Add the"," ",o("code",{className:"code",children:"wide"})," CSS class using the"," ",o("code",{className:"code",children:"className"})," property to make them extend across the full width of the container."]}),c("p",{children:[`If you don't like the "boxy" look then add the`," ",o("code",{className:"code",children:"bare"})," class to remove the border and background."]}),o(_,{Element:TN,code:kN}),o("h2",{children:"Bare Radio Button Options"}),c("p",{children:[`If you don't like the "boxy" look then add the`," ",o("code",{className:"code",children:"bare"})," class to remove the border and background."]}),o(_,{Element:NN,code:RN})]}),$N=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SelectExample = () =>
  <Form>
    <Field
      name="animal" label="What is your favourite animal?" type="select"
      options={[ 'Badger', 'Ferret', 'Stoat' ]}
    />
    <Field
      name="food" label="What is your favourite number?" type="select"
      placeholder="Pick a number"
      options={[
        { value: 10, text: 'Ten' },
        { value: 11, text: 'Eleven (one louder)', className: 'bold' },
        { value: 42, text: 'Forty-Two (the meaning of life)' },
        { value: 69, text: 'Sixty nine, dude!', disabled: true }
      ]}
    />
  </Form>

export default SelectExample`,ON=()=>c(I,{children:[o(S,{name:"animal",label:"What is your favourite animal?",type:"select",options:["Badger","Ferret","Stoat"]}),o(S,{name:"food",label:"What is your favourite number?",type:"select",placeholder:"Pick a number",options:[{value:10,text:"Ten"},{value:11,text:"Eleven (one louder)",className:"bold"},{value:42,text:"Forty-Two (the meaning of life)"},{value:69,text:"Sixty nine, dude!",disabled:!0}]})]}),AN=()=>c("div",{children:[o("h1",{children:"Select Fields"}),c("p",{children:["Set the ",o("code",{className:"code",children:"type"})," to"," ",o("code",{className:"code",children:"select"})," to create a select input. Just like the ",o("a",{href:"radio",children:"radio"})," field, you can specify the ",o("code",{className:"code",children:"options"})," as an array of simple values or objects containing"," ",o("code",{className:"code",children:"value"})," and ",o("code",{className:"code",children:"text"})," ","properties."]}),o(_,{Element:ON,code:$N})]}),PN=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HiddenExample = () =>
  <Form debug>
    <Field name="user_id" type="hidden" value="123"/>
    <Field name="name"    label="Your Name"/>
    <Submit/>
  </Form>

export default HiddenExample`,DN=()=>c(I,{debug:!0,children:[o(S,{name:"user_id",type:"hidden",value:"123"}),o(S,{name:"name",label:"Your Name"}),o(se,{})]}),IN=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HiddenExample = () =>
  <Form values={{ user_id: 456, name: 'Alice' }}>
    <Field name="user_id" type="hidden"/>
    <Field name="name"    label="Your Name"/>
    <Submit/>
  </Form>

export default HiddenExample`,_N=()=>c(I,{values:{user_id:456,name:"Alice"},children:[o(S,{name:"user_id",type:"hidden"}),o(S,{name:"name",label:"Your Name"}),o(se,{})]}),jN=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const values = {
  name: 'Bob'
}
const hidden = {
  user_id: 789,
  version: 42,
}

const HiddenExample = () =>
  <Form values={values} hidden={hidden}>
    <Field name="name" label="Your Name"/>
    <Submit/>
  </Form>

export default HiddenExample`,MN={name:"Bob"},BN={user_id:789,version:42},VN=()=>c(I,{values:MN,hidden:BN,children:[o(S,{name:"name",label:"Your Name"}),o(se,{})]}),zN=()=>c("div",{children:[o("h1",{children:"Hidden Input"}),c("p",{children:["Set the ",o("code",{children:"type"})," to ",o("code",{children:"hidden"})," to embed a hidden value in the ",o(ae,{}),".  A hidden value will be included in the form ",o("code",{children:"values"})," that will be submitted.  But otherwise it is invisible to the naked eye."]}),o(_,{Element:DN,code:PN,children:c("p",{children:["The hidden value for ",o("code",{children:"user_id"}),' will be defined in the form values.  Try entering some text for "Your name" and then click on the "Submit" button.  You should see both the ',o("code",{children:"user_id"})," and ",o("code",{children:"name"})," included in the submitted values."]})}),c("p",{children:["You don't have to define the ",o("code",{children:"value"})," in the field as shown above.  It can also be defined in the ",o("code",{children:"values"})," that you pass to the ",o(ae,{})]}),o(_,{Element:_N,code:IN}),c("p",{children:["You can also pass ",o("code",{children:"hidden"})," values to the ",o(ae,{})," and they will automatically be included in the submitted values."]}),o(_,{Element:VN,code:jN})]}),qN=()=>c(gn,{children:[o(M,{path:"",end:!0,element:o(lN,{})}),o(M,{path:"text",element:o(cN,{})}),o(M,{path:"textarea",element:o(fN,{})}),o(M,{path:"number",element:o(gN,{})}),o(M,{path:"checkbox",element:o(xN,{})}),o(M,{path:"radio",element:o(LN,{})}),o(M,{path:"select",element:o(AN,{})}),o(M,{path:"hidden",element:o(zN,{})})]}),UN=()=>c("div",{children:[o("h1",{children:"Custom Components"}),o("p",{children:"This example is TODO."}),c("ul",{children:[o("li",{children:"Adding a custom Layout, Input or other component"}),o("li",{children:"Writing your own components"}),o("li",{children:"Registering components, input types, handlers, etc."})]})]}),HN=()=>c("div",{children:[o("h1",{children:"Customising"}),o("h2",{children:"TODO"})]}),WN=()=>c(gn,{children:[o(M,{path:"",end:!0,element:o(HN,{})}),o(M,{path:"components",element:o(UN,{})})]}),YN=()=>c("div",{children:[o("h1",{children:"Styling the Forms"}),o("p",{children:"There's good news and bad news.  The good news is that there's a default stylesheet which should give you reasonable results as a starting point.  You can import it into the top-level of your React app with something like this:"}),o(Mt,{children:"import '@abw/react-formula/css/formula.css'"}),o("p",{children:"The gooder news is that the stylesheet is built using SASS (specifically SCSS) and you can import the styles into your own SASS stylesheet like so:"}),o(Mt,{language:"scss",children:"@import '@abw/react-formula/scss/formula.scss';"}),c("p",{children:["The goodest news it that it's built from numerous "," ",o("a",{href:"sass-variables",children:"configuration variables"})," which you can tweak to change the styling.  They're all defined using the"," ",o("code",{className:"code",children:"!default"})," directive which means you can provide your own values before importing the main SCSS file and it'll use your values instead of the defaults."]}),o(Mt,{language:"scss",children:`$brand-hue:     123;
$valid-hue:     40;
$invalid-hue:   12;
@import '@abw/react-formula/scss/formula.scss';`}),c("p",{children:["Or you can rewrite large chunks of the styling if you prefer. Every element has its own CSS class and they're all scoped inside"," ",o("code",{className:"code",children:"form.formula"}),".  For example, you can import the main stylesheet and then selectively override the things you want to change."]}),o(Mt,{language:"scss",children:`@import '@abw/react-formula/scss/formula.scss';

form.formula {
  .field {
    .inputs {
      select {
        // your custom styling overrides
      }
    }
  }
}`}),o("p",{children:"The bad news is that CSS/SASS is currently all there is.  If you want to use styled components or any other CSS-in-JS solution then you're bang out of luck.  I'm personally not a huge fan of putting CSS in JS (although I totally respect that it may be what works for you), and given that I wrote this library to help me get my job done, it's understandably focussed on what works for me."})]}),GN=()=>c("div",{children:[o("h1",{children:"Form Styles"}),c("div",{className:"note",children:[o("b",{children:"NOTE:"})," these are mockup forms and don't have full interactivity. For example, clicking on an input will not automatically focus it."]}),o("p",{children:"This is TODO"})]}),Oe={...gu,label:"Example Label",type:"text",placeholder:"Placeholder text",form:{},status:{}},KN=()=>c("div",{children:[o("h1",{children:"Field Styles"}),c("div",{className:"note",children:[o("b",{children:"NOTE:"})," these are mockup fields and don't have full interactivity. For example, clicking on an input will not automatically focus it."]}),c("form",{className:"formula",children:[o("h3",{children:"Field With Placeholder Text"}),o(ke,{field:Oe}),o("h3",{children:"Field With Value"}),o(ke,{field:{...Oe,value:"Hello World"}}),o("h3",{children:"Field With Help"}),o(ke,{field:{...Oe,help:"Your password must be between 11 and 42 characters"}}),o("h3",{children:"Field With Required Label"}),o(ke,{field:{...Oe,value:"Hello World",required:!0,showRequired:!0}}),o("h3",{children:"Field With Optional Label"}),o(ke,{field:{...Oe,value:"Hello World",showOptional:!0}}),o("h3",{children:"Field With Prefix and Suffix"}),o(ke,{field:{...Oe,prefix:"$",suffix:".00"}}),o("h3",{children:"Focussed Field With Placeholder Text"}),o(ke,{field:{...Oe,status:{focus:!0}}}),o("h3",{children:"Focussed Field With Value"}),o(ke,{field:{...Oe,value:"Hello World",status:{focus:!0}}}),o("h3",{children:"Focussed Field With Help"}),o(ke,{field:{...Oe,help:"Your password must be between 11 and 42 characters",status:{focus:!0}}}),o("h3",{children:"Focussed Field With Prefix and Suffix"}),o(ke,{field:{...Oe,prefix:"$",suffix:".00",status:{focus:!0}}}),o("h3",{children:"Valid Field"}),o(ke,{field:{...Oe,value:"Hello World",status:{valid:!0}}}),o("h3",{children:"Valid Field With Message"}),o(ke,{field:{...Oe,message:"That username is available!",status:{valid:!0}}}),o("h3",{children:"Valid Field With Prefix and Suffix"}),o(ke,{field:{...Oe,value:"Hello World",prefix:"$",suffix:".00",status:{valid:!0}}}),o("h3",{children:"Focussed Valid Field With Prefix and Suffix"}),o(ke,{field:{...Oe,value:"Hello World",prefix:"$",suffix:".00",status:{valid:!0,focus:!0}}}),o("h3",{children:"Invalid Field"}),o(ke,{field:{...Oe,value:"Hello World",status:{invalid:!0}}}),o("h3",{children:"Invalid Field With Message"}),o(ke,{field:{...Oe,message:"Something went wrong!",status:{invalid:!0}}}),o("h3",{children:"Invalid Field With Prefix and Suffix"}),o(ke,{field:{...Oe,value:"Hello World",prefix:"$",suffix:".00",status:{invalid:!0}}}),o("h3",{children:"Focussed Invalid Field With Prefix and Suffix"}),o(ke,{field:{...Oe,value:"Hello World",prefix:"$",suffix:".00",status:{invalid:!0,focus:!0}}}),o("h3",{children:"Disabled Field"}),o(ke,{field:{...Oe,prefix:"£",message:"Denied!",status:{disabled:!0}}})]})]}),QN=`/* Base Hues */
// A hue for your brand used to style various components, including
// checkboxes, radio buttons, etc.
$brand-hue:                 193 !default;
// Hue for default state inputs, typically the \`$brand-hue\` but almost
// totally de-saturated.
$input-hue:                 $brand-hue !default;
// Hue for focussed inputs, defaulting to a sky blue.
$focus-hue:                 210 !default;
// Hue for invalid inputs, usually a red hue.
$invalid-hue:               0   !default;
// Hue for validated inputs, usually a green hue.
$valid-hue:                 90  !default;
// Hue for disabled inputs, usually a desaturated red.
$disabled-hue:              0   !default;
// Hue for the "required" label that can appear in the label when the
// \`showRequired\` option is set
$required-hue:              30  !default;
// Hue for the "optional" tag that can appear in the label when the
// \`showOptional\` option is set
$optional-hue:              210 !default;
// Hue for errors.
$error-hue:                 $invalid-hue !default;
// Hue for debugging panel, not usually seen by customers.
$debug-hue:                 230 !default;

/* Labels, Including Required and Optional Tags */
// Default saturation for labels
$label-saturation:          40% !default;
// De-saturated saturation for labels
$label-desaturation:        10% !default;
// Color for field labels in the default state.
$label-color:               hsl($brand-hue, $label-desaturation, 50%) !default;
// Color for the "required" tag that can appear in the label when the
// \`showRequired\` option is set
$required-label-color:      hsl($required-hue, 90%, 30%) !default;
// Background color for the "required" tag.
$required-back-color:       hsl($required-hue, 50%, 90%) !default;
// Border color for the "required" tag.
$required-border-color:     hsl($required-hue, 70%, 80%) !default;
// Color for the "optional" tag that can appear in the label when the
// \`showOptional\` option is set
$optional-label-color:      hsl($optional-hue, 10%, 30%) !default;
// Background color for the "optional" tag.
$optional-back-color:       hsl($optional-hue, 50%, 90%) !default;
// Border color for the "optional" tag.
$optional-border-color:     hsl($optional-hue, 70%, 80%) !default;

/* Default Input State */
// Background color for inputs in the default state.
$input-back-color:          hsl($input-hue, 10%, 97%) !default;
// Border color for inputs in the default state.
$input-border-color:        hsl($input-hue, 30%, 80%) !default;
// Text color for inputs in the default state.
$input-text-color:          hsl($input-hue, 20%, 40%) !default;
// Background color for input prefix/suffix elements in the default state.
$input-prefix-back-color:   hsl($input-hue, 20%, 90%) !default;
// Text color for input prefix/suffix elements in the default state.
$input-prefix-text-color:   hsl($input-hue, 70%, 20%) !default;
// Color for input placeholder text in the default state.
$input-placeholder-color:   hsl($input-hue, 20%, 75%) !default;

/* Focussed Input State */
// Color for labels in focussed fields.
$focus-label-color:         hsl($focus-hue, $label-saturation, 30%) !default;
// Background color for inputs in focussed fields.
$focus-back-color:          hsl($focus-hue, 60%, 99%) !default;
// Border color for inputs in focussed fields.
$focus-border-color:        hsl($focus-hue, 60%, 70%) !default;
// Border color for inputs in focussed fields.
$focus-ring-color:          hsl($focus-hue, 70%, 85%) !default;
// Color of gap between border and ring.
$focus-gap-color:           hsl($focus-hue, 10%, 95%) !default;
// Text color for inputs in focussed fields.
$focus-text-color:          hsl($focus-hue, 60%, 20%) !default;
// Background color for prefix/suffix elements in focussed fields.
$focus-prefix-back-color:   hsl($focus-hue, 30%, 90%) !default;
// Text color for prefix/suffix elements in focussed fields.
$focus-prefix-text-color:   hsl($focus-hue, 70%, 20%) !default;
// Color for input placeholder text in focussed fields.
$focus-placeholder-color:   hsl($focus-hue, 50%, 80%) !default;

/* Valid Field State */
// Color for labels in valid fields.
$valid-label-color:         hsl($valid-hue, $label-saturation, 30%) !default;
// Background color for inputs in valid fields.
$valid-back-color:          hsl($valid-hue, 30%, 97%) !default;
// Border color for inputs in valid fields.
$valid-border-color:        hsl($valid-hue, 40%, 50%) !default;
// Border color for valid inputs in focussed fields.
$valid-ring-color:          hsl($valid-hue, 60%, 75%) !default;
// Color of gap between border and ring.
$valid-gap-color:           hsl($valid-hue, 10%, 95%) !default;
// Text color for inputs in valid fields.
$valid-text-color:          hsl($valid-hue, 50%, 30%) !default;
// Background color for prefix/suffix elements in valid fields.
$valid-prefix-back-color:   hsl($valid-hue, 30%, 90%) !default;
// Text color for prefix/suffix elements in valid fields.
$valid-prefix-text-color:   hsl($valid-hue, 70%, 20%) !default;
// Color for input placeholder text in valid fields.
$valid-placeholder-color:   hsl($valid-hue, 40%, 70%) !default;
// Successful validation message displayed under field input
$valid-message-color:       hsl($valid-hue, 60%, 40%) !default;

/* Invalid Field State */
// Color for labels in invalid fields.
$invalid-label-color:       hsl($invalid-hue, $label-saturation, 30%) !default;
// Background color for inputs in invalid fields.
$invalid-back-color:        hsl($invalid-hue, 60%, 96%) !default;
// Border color for inputs in invalid fields.
$invalid-border-color:      hsl($invalid-hue, 60%, 70%) !default;
// Border color for invalid inputs in focussed fields.
$invalid-ring-color:        hsl($invalid-hue, 70%, 85%) !default;
// Color of gap between border and ring.
$invalid-gap-color:         hsl($invalid-hue, 10%, 95%) !default;
// Text color for inputs in valid fields.
// Text color for inputs in invalid fields.
$invalid-text-color:        hsl($invalid-hue, 50%, 30%) !default;
// Background color for prefix/suffix elements in invalid fields.
$invalid-prefix-back-color: hsl($invalid-hue, 30%, 90%) !default;
// Text color for prefix/suffix elements in invalid fields.
$invalid-prefix-text-color: hsl($invalid-hue, 70%, 20%) !default;
// Color for input placeholder text in invalid fields.
$invalid-placeholder-color: hsl($invalid-hue, 50%, 80%) !default;
// Error message displayed under field input
$invalid-message-color:     hsl($invalid-hue, 70%, 50%) !default;

/* Disabled Field State */
// Saturation for disabled elements
$disabled-saturation:        5% !default;
// Color for labels in invalid fields.
$disabled-label-color:       hsl($disabled-hue, $disabled-saturation, 70%) !default;
// Background color for inputs in disabled fields.
$disabled-back-color:        hsl($disabled-hue, $disabled-saturation, 90%) !default;
// Border color for inputs in disabled fields.
$disabled-border-color:      hsl($disabled-hue, $disabled-saturation, 70%) !default;
// Text color for inputs in disabled fields.
$disabled-text-color:        hsl($disabled-hue, $disabled-saturation, 50%) !default;
// Background color for prefix/suffix elements in disabled fields.
$disabled-prefix-back-color: hsl($disabled-hue, $disabled-saturation, 85%) !default;
// Text color for prefix/suffix elements in disabled fields.
$disabled-prefix-text-color: hsl($disabled-hue, $disabled-saturation, 50%) !default;
// Color for input placeholder text in disabled fields.
$disabled-placeholder-color: hsl($disabled-hue, $disabled-saturation, 65%) !default;
// Error message displayed under field input
$disabled-message-color:     hsl($disabled-hue, $disabled-saturation, 70%) !default;

// Background color for errors.
$error-back-color:           hsl($error-hue, 50%, 95%) !default;
// Text color for errors
$error-text-color:           hsl($error-hue, 50%, 50%) !default;
// Color for errors border
$error-border-color:         hsl($error-hue, 80%, 40%) !default;
// Color for errors title
$error-title-color:          hsl($error-hue, 20%, 90%) !default;
// Color for labels in errors
$error-label-color:          hsl($error-hue, 60%, 40%) !default;

// Background color for fieldset
$fieldset-back-color:       rgba(255, 255, 255, 0.5) !default;
// Color of fieldset border
$fieldset-border-color:      $input-border-color !default;
// Text color for fieldset legend
$legend-text-color:          hsl($brand-hue, $label-desaturation, 30%) !default;
// Background color for fieldset legend
$legend-back-color:          hsl($brand-hue, 5%, 95%) !default;
// Background color for fieldset legend
$legend-border-color:        $input-border-color !default;

/* Other Colors */
// Accent color for checkboxes, radio buttons, range sliders, etc., based on
// the brand hue.
$accent-color:              hsl($brand-hue, 60%, 30%) !default;
`,XN=`/* Input Variables */
// Width of border
$input-border-width:           $border-width !default;
// Border radius of field
$input-border-radius:          $border-radius !default;
// Width of focus ring
$input-ring-width:             $ring-width !default;
// Gap between border and focus ring
$input-ring-gap:               $ring-gap !default;
// Vertical padding
$input-padding-vertical:       $unit-padding-vertical !default;
// Horizontal padding
$input-padding-horizontal:     $unit-padding-horizontal !default;
// Tweak select to make same size
$select-padding-tweak:         1.25px !default;`;function Lg(e){const t=e.split(/[\r\n]+/);let n=[],r=[],l;for(let i of t){if(i.match(/^\s*$/)){r=[];continue}if(l=i.match(/^\/\*\s*(.*?)\s*\*\/$/)){r=[],n.push({section:l[1]});continue}if(l=i.match(/\/\/\s*(.*)/)){r.push(l[1]);continue}(l=i.match(/(\$[\w-]*):\s*(.*?)\s*(!default)?;/))&&(n.push({variable:l[1],defaultValue:l[2],description:r.join(" ")}),r=[])}return n}const ZN=Lg(QN),JN=Lg(XN),eL=()=>c("div",{children:[o("h1",{children:"SASS Variables"}),o(uf,{title:"Input",vars:JN}),o(uf,{title:"Colors",vars:ZN})]}),uf=({title:e,vars:t})=>c(Ee,{children:[o("h2",{children:e}),c("table",{className:"wide sass-vars table",children:[o("thead",{children:c("tr",{children:[o("th",{children:"Variable"}),o("th",{children:"Default"}),o("th",{children:"Description"})]})}),o("tbody",{children:t.map(({variable:n,defaultValue:r,description:l,section:i},a)=>i?o("tr",{children:o("th",{className:"section",colSpan:"3",children:i})},a):c("tr",{children:[o("td",{className:"name",children:n}),o("td",{className:"default",children:r}),o("td",{className:"description",children:l})]},n))})]})]}),tL=()=>c(gn,{children:[o(M,{path:"",exact:!0,element:o(YN,{})}),o(M,{path:"forms",element:o(GN,{})}),o(M,{path:"fields",element:o(KN,{})}),o(M,{path:"variables",element:o(eL,{})})]}),nL=()=>{const e=ot();return c("div",{className:"debug",children:[c("h4",{children:["Field: ",e.name]}),o("pre",{children:JSON.stringify(e,null,2)})]})},rL=()=>{const e=dt();return o("button",{type:"button",onClick:e.validate,children:"Validate Form"})},cf=({n:e=10})=>{const t=ot();return c("button",{onClick:n=>{n.preventDefault(),t.set(e)},children:["Set Field to ",e]})},oL=({setValidState:e})=>o("button",{type:"button",onClick:()=>e(),children:"Set Form Valid"}),lL=wa(oL),iL=({setInvalidState:e})=>o("button",{type:"button",onClick:()=>e(),children:"Set Form Invalid"}),aL=wa(iL),sL=({setChangedState:e})=>o("button",{type:"button",onClick:()=>e(),children:"Set Form Changed"}),uL=wa(sL),cL={foo:{label:"The Foo Field"},bar:{label:"The BarBar Field",default:101}},dL={foo:"barz",id:123},hL=()=>c("div",{children:[o("h1",{children:"Test Form"}),c(I,{fields:cL,values:dL,className:"formula debug",debug:!0,children:["FORM BODY",c("div",{children:[o(rL,{}),o(lL,{}),o(aL,{}),o(uL,{}),o(vr,{})]}),c(S,{name:"bar",children:[o(nL,{}),o(cf,{}),o(cf,{n:20})]}),o(Hc,{children:"Form has unsaved changes"}),o(iC,{showForm:!0})]})]}),fL=()=>c("div",{children:[o("h1",{children:"Layout Test"}),o(I,{children:c("div",{className:"grid-2 end gap-h-2",children:[o(S,{name:"one",label:"Text Field"}),o(S,{name:"two",className:"wide",label:"Checkbox Field",type:"checkbox",text:"This is a checkbox"}),o(S,{name:"three",label:"Text Field"}),o(S,{name:"four",label:"Select Field",type:"select",options:["One","Two","Three"]}),o(S,{name:"five",label:"Text Field"}),o(S,{name:"size",label:"Radio Field",type:"radio",options:["One","Two","Three"]}),o(S,{name:"seven",label:"Text Field"}),o(S,{name:"eight",label:"Date Field",type:"date"}),o(S,{name:"nine",label:"Text Field"}),o(S,{name:"ten",label:"Number Field",type:"number"}),o(S,{name:"eleven",label:"Text Field - it's one louder"}),o(se,{})]})})]}),mL=I1([{path:"/",element:o(R0,{}),children:[{path:"/",element:o(L0,{})},{path:"getting-started",element:o(CE,{})},{path:"why",element:o(kE,{})},{path:"tutorial/*",element:o(jk,{})},{path:"examples/*",element:o(tT,{})},{path:"components/*",element:o(oN,{})},{path:"inputs/*",element:o(qN,{})},{path:"customising/*",element:o(WN,{})},{path:"styling/*",element:o(tL,{})},{path:"test-form",element:o(hL,{})},{path:"test-layout",element:o(fL,{})}]}],{basename:"/react-formula/"});cs.createRoot(document.getElementById("root")).render(o(et.StrictMode,{children:o(R1,{router:mL})}));
