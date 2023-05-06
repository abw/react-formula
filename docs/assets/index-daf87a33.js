var zg=Object.defineProperty;var qg=(e,t,n)=>t in e?zg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Dt=(e,t,n)=>(qg(e,typeof t!="symbol"?t+"":t,n),n);function Ug(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ql={},Wg={get exports(){return Ql},set exports(e){Ql=e}},Qi={},$={},Yg={get exports(){return $},set exports(e){$=e}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),Gg=Symbol.for("react.portal"),Kg=Symbol.for("react.fragment"),Qg=Symbol.for("react.strict_mode"),Xg=Symbol.for("react.profiler"),Zg=Symbol.for("react.provider"),Jg=Symbol.for("react.context"),ev=Symbol.for("react.forward_ref"),tv=Symbol.for("react.suspense"),nv=Symbol.for("react.memo"),rv=Symbol.for("react.lazy"),nd=Symbol.iterator;function lv(e){return e===null||typeof e!="object"?null:(e=nd&&e[nd]||e["@@iterator"],typeof e=="function"?e:null)}var mf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pf=Object.assign,gf={};function al(e,t,n){this.props=e,this.context=t,this.refs=gf,this.updater=n||mf}al.prototype.isReactComponent={};al.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};al.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vf(){}vf.prototype=al.prototype;function Fu(e,t,n){this.props=e,this.context=t,this.refs=gf,this.updater=n||mf}var xu=Fu.prototype=new vf;xu.constructor=Fu;pf(xu,al.prototype);xu.isPureReactComponent=!0;var rd=Array.isArray,yf=Object.prototype.hasOwnProperty,Su={current:null},bf={key:!0,ref:!0,__self:!0,__source:!0};function wf(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)yf.call(t,r)&&!bf.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:yo,type:e,key:i,ref:a,props:o,_owner:Su.current}}function ov(e,t){return{$$typeof:yo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Eu(e){return typeof e=="object"&&e!==null&&e.$$typeof===yo}function iv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ld=/\/+/g;function Oa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?iv(""+e.key):t.toString(36)}function ni(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case yo:case Gg:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Oa(a,0):r,rd(o)?(n="",e!=null&&(n=e.replace(ld,"$&/")+"/"),ni(o,t,n,"",function(d){return d})):o!=null&&(Eu(o)&&(o=ov(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ld,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",rd(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Oa(i,s);a+=ni(i,t,n,u,o)}else if(u=lv(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Oa(i,s++),a+=ni(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Do(e,t,n){if(e==null)return e;var r=[],o=0;return ni(e,r,"","",function(i){return t.call(n,i,o++)}),r}function av(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},ri={transition:null},sv={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:ri,ReactCurrentOwner:Su};ee.Children={map:Do,forEach:function(e,t,n){Do(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Do(e,function(){t++}),t},toArray:function(e){return Do(e,function(t){return t})||[]},only:function(e){if(!Eu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=al;ee.Fragment=Kg;ee.Profiler=Xg;ee.PureComponent=Fu;ee.StrictMode=Qg;ee.Suspense=tv;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sv;ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pf({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Su.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)yf.call(t,u)&&!bf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:yo,type:e.type,key:o,ref:i,props:r,_owner:a}};ee.createContext=function(e){return e={$$typeof:Jg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zg,_context:e},e.Consumer=e};ee.createElement=wf;ee.createFactory=function(e){var t=wf.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:ev,render:e}};ee.isValidElement=Eu;ee.lazy=function(e){return{$$typeof:rv,_payload:{_status:-1,_result:e},_init:av}};ee.memo=function(e,t){return{$$typeof:nv,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=ri.transition;ri.transition={};try{e()}finally{ri.transition=t}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(e,t){return rt.current.useCallback(e,t)};ee.useContext=function(e){return rt.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};ee.useEffect=function(e,t){return rt.current.useEffect(e,t)};ee.useId=function(){return rt.current.useId()};ee.useImperativeHandle=function(e,t,n){return rt.current.useImperativeHandle(e,t,n)};ee.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return rt.current.useMemo(e,t)};ee.useReducer=function(e,t,n){return rt.current.useReducer(e,t,n)};ee.useRef=function(e){return rt.current.useRef(e)};ee.useState=function(e){return rt.current.useState(e)};ee.useSyncExternalStore=function(e,t,n){return rt.current.useSyncExternalStore(e,t,n)};ee.useTransition=function(){return rt.current.useTransition()};ee.version="18.2.0";(function(e){e.exports=ee})(Yg);const tt=Hg($),cs=Ug({__proto__:null,default:tt},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv=$,cv=Symbol.for("react.element"),dv=Symbol.for("react.fragment"),hv=Object.prototype.hasOwnProperty,fv=uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mv={key:!0,ref:!0,__self:!0,__source:!0};function Ff(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)hv.call(t,r)&&!mv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:cv,type:e,key:i,ref:a,props:o,_owner:fv.current}}Qi.Fragment=dv;Qi.jsx=Ff;Qi.jsxs=Ff;(function(e){e.exports=Qi})(Wg);const Ee=Ql.Fragment,l=Ql.jsx,c=Ql.jsxs;var ds={},hs={},pv={get exports(){return hs},set exports(e){hs=e}},wt={},fs={},gv={get exports(){return fs},set exports(e){fs=e}},xf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,B){var j=P.length;P.push(B);e:for(;0<j;){var U=j-1>>>1,K=P[U];if(0<o(K,B))P[U]=B,P[j]=K,j=U;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var B=P[0],j=P.pop();if(j!==B){P[0]=j;e:for(var U=0,K=P.length,ft=K>>>1;U<ft;){var ae=2*(U+1)-1,ze=P[ae],Ce=ae+1,_e=P[Ce];if(0>o(ze,j))Ce<K&&0>o(_e,ze)?(P[U]=_e,P[Ce]=j,U=Ce):(P[U]=ze,P[ae]=j,U=ae);else if(Ce<K&&0>o(_e,j))P[U]=_e,P[Ce]=j,U=Ce;else break e}}return B}function o(P,B){var j=P.sortIndex-B.sortIndex;return j!==0?j:P.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],m=1,p=null,v=3,S=!1,T=!1,E=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(P){for(var B=n(d);B!==null;){if(B.callback===null)r(d);else if(B.startTime<=P)r(d),B.sortIndex=B.expirationTime,t(u,B);else break;B=n(d)}}function y(P){if(E=!1,f(P),!T)if(n(u)!==null)T=!0,be(w);else{var B=n(d);B!==null&&Ve(y,B.startTime-P)}}function w(P,B){T=!1,E&&(E=!1,g(k),k=-1),S=!0;var j=v;try{for(f(B),p=n(u);p!==null&&(!(p.expirationTime>B)||P&&!H());){var U=p.callback;if(typeof U=="function"){p.callback=null,v=p.priorityLevel;var K=U(p.expirationTime<=B);B=e.unstable_now(),typeof K=="function"?p.callback=K:p===n(u)&&r(u),f(B)}else r(u);p=n(u)}if(p!==null)var ft=!0;else{var ae=n(d);ae!==null&&Ve(y,ae.startTime-B),ft=!1}return ft}finally{p=null,v=j,S=!1}}var F=!1,C=null,k=-1,L=5,A=-1;function H(){return!(e.unstable_now()-A<L)}function te(){if(C!==null){var P=e.unstable_now();A=P;var B=!0;try{B=C(!0,P)}finally{B?ie():(F=!1,C=null)}}else F=!1}var ie;if(typeof h=="function")ie=function(){h(te)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,me=ye.port2;ye.port1.onmessage=te,ie=function(){me.postMessage(null)}}else ie=function(){b(te,0)};function be(P){C=P,F||(F=!0,ie())}function Ve(P,B){k=b(function(){P(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){T||S||(T=!0,be(w))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(v){case 1:case 2:case 3:var B=3;break;default:B=v}var j=v;v=B;try{return P()}finally{v=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=v;v=P;try{return B()}finally{v=j}},e.unstable_scheduleCallback=function(P,B,j){var U=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?U+j:U):j=U,P){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=j+K,P={id:m++,callback:B,priorityLevel:P,startTime:j,expirationTime:K,sortIndex:-1},j>U?(P.sortIndex=j,t(d,P),n(u)===null&&P===n(d)&&(E?(g(k),k=-1):E=!0,Ve(y,j-U))):(P.sortIndex=K,t(u,P),T||S||(T=!0,be(w))),P},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(P){var B=v;return function(){var j=v;v=B;try{return P.apply(this,arguments)}finally{v=j}}}})(xf);(function(e){e.exports=xf})(gv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=$,bt=fs;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ef=new Set,Xl={};function dr(e,t){Zr(e,t),Zr(e+"Capture",t)}function Zr(e,t){for(Xl[e]=t,e=0;e<t.length;e++)Ef.add(t[e])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ms=Object.prototype.hasOwnProperty,vv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,od={},id={};function yv(e){return ms.call(id,e)?!0:ms.call(od,e)?!1:vv.test(e)?id[e]=!0:(od[e]=!0,!1)}function bv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wv(e,t,n,r){if(t===null||typeof t>"u"||bv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function lt(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];We[t]=new lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cu=/[\-:]([a-z])/g;function ku(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cu,ku);We[t]=new lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cu,ku);We[t]=new lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cu,ku);We[t]=new lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new lt(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Tu(e,t,n,r){var o=We.hasOwnProperty(t)?We[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wv(t,n,o,r)&&(n=null),r||o===null?yv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gn=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),kr=Symbol.for("react.portal"),Tr=Symbol.for("react.fragment"),Ru=Symbol.for("react.strict_mode"),ps=Symbol.for("react.profiler"),Cf=Symbol.for("react.provider"),kf=Symbol.for("react.context"),Nu=Symbol.for("react.forward_ref"),gs=Symbol.for("react.suspense"),vs=Symbol.for("react.suspense_list"),Lu=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),Tf=Symbol.for("react.offscreen"),ad=Symbol.iterator;function Fl(e){return e===null||typeof e!="object"?null:(e=ad&&e[ad]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,Aa;function Al(e){if(Aa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Aa=t&&t[1]||""}return`
`+Aa+e}var Pa=!1;function Da(e,t){if(!e||Pa)return"";Pa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Pa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Al(e):""}function Fv(e){switch(e.tag){case 5:return Al(e.type);case 16:return Al("Lazy");case 13:return Al("Suspense");case 19:return Al("SuspenseList");case 0:case 2:case 15:return e=Da(e.type,!1),e;case 11:return e=Da(e.type.render,!1),e;case 1:return e=Da(e.type,!0),e;default:return""}}function ys(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tr:return"Fragment";case kr:return"Portal";case ps:return"Profiler";case Ru:return"StrictMode";case gs:return"Suspense";case vs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kf:return(e.displayName||"Context")+".Consumer";case Cf:return(e._context.displayName||"Context")+".Provider";case Nu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lu:return t=e.displayName||null,t!==null?t:ys(e.type)||"Memo";case xn:t=e._payload,e=e._init;try{return ys(e(t))}catch{}}return null}function xv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ys(t);case 8:return t===Ru?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sv(e){var t=Rf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _o(e){e._valueTracker||(e._valueTracker=Sv(e))}function Nf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bs(e,t){var n=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_n(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lf(e,t){t=t.checked,t!=null&&Tu(e,"checked",t,!1)}function ws(e,t){Lf(e,t);var n=_n(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fs(e,t.type,_n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ud(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fs(e,t,n){(t!=="number"||vi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pl=Array.isArray;function qr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_n(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function xs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Pl(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_n(n)}}function $f(e,t){var n=_n(t.value),r=_n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Of(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ss(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Of(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jo,Af=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ml={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ev=["Webkit","ms","Moz","O"];Object.keys(Ml).forEach(function(e){Ev.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ml[t]=Ml[e]})});function Pf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ml.hasOwnProperty(e)&&Ml[e]?(""+t).trim():t+"px"}function Df(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Pf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Cv=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Es(e,t){if(t){if(Cv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Cs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ks=null;function $u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ts=null,Ur=null,Hr=null;function hd(e){if(e=Fo(e)){if(typeof Ts!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ta(t),Ts(e.stateNode,e.type,t))}}function If(e){Ur?Hr?Hr.push(e):Hr=[e]:Ur=e}function _f(){if(Ur){var e=Ur,t=Hr;if(Hr=Ur=null,hd(e),t)for(e=0;e<t.length;e++)hd(t[e])}}function jf(e,t){return e(t)}function Mf(){}var Ia=!1;function Bf(e,t,n){if(Ia)return e(t,n);Ia=!0;try{return jf(e,t,n)}finally{Ia=!1,(Ur!==null||Hr!==null)&&(Mf(),_f())}}function Jl(e,t){var n=e.stateNode;if(n===null)return null;var r=ta(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Rs=!1;if(dn)try{var xl={};Object.defineProperty(xl,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",xl,xl),window.removeEventListener("test",xl,xl)}catch{Rs=!1}function kv(e,t,n,r,o,i,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var Bl=!1,yi=null,bi=!1,Ns=null,Tv={onError:function(e){Bl=!0,yi=e}};function Rv(e,t,n,r,o,i,a,s,u){Bl=!1,yi=null,kv.apply(Tv,arguments)}function Nv(e,t,n,r,o,i,a,s,u){if(Rv.apply(this,arguments),Bl){if(Bl){var d=yi;Bl=!1,yi=null}else throw Error(_(198));bi||(bi=!0,Ns=d)}}function hr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fd(e){if(hr(e)!==e)throw Error(_(188))}function Lv(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return fd(o),e;if(i===r)return fd(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function zf(e){return e=Lv(e),e!==null?qf(e):null}function qf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qf(e);if(t!==null)return t;e=e.sibling}return null}var Uf=bt.unstable_scheduleCallback,md=bt.unstable_cancelCallback,$v=bt.unstable_shouldYield,Ov=bt.unstable_requestPaint,Ne=bt.unstable_now,Av=bt.unstable_getCurrentPriorityLevel,Ou=bt.unstable_ImmediatePriority,Hf=bt.unstable_UserBlockingPriority,wi=bt.unstable_NormalPriority,Pv=bt.unstable_LowPriority,Wf=bt.unstable_IdlePriority,Xi=null,Xt=null;function Dv(e){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Xi,e,void 0,(e.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:jv,Iv=Math.log,_v=Math.LN2;function jv(e){return e>>>=0,e===0?32:31-(Iv(e)/_v|0)|0}var Mo=64,Bo=4194304;function Dl(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Dl(s):(i&=a,i!==0&&(r=Dl(i)))}else a=n&~o,a!==0?r=Dl(a):i!==0&&(r=Dl(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-zt(t),o=1<<n,r|=e[n],t&=~o;return r}function Mv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-zt(i),s=1<<a,u=o[a];u===-1?(!(s&n)||s&r)&&(o[a]=Mv(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Ls(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yf(){var e=Mo;return Mo<<=1,!(Mo&4194240)&&(Mo=64),e}function _a(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zt(t),e[t]=n}function Vv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-zt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Au(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-zt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ce=0;function Gf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kf,Pu,Qf,Xf,Zf,$s=!1,Vo=[],Nn=null,Ln=null,$n=null,eo=new Map,to=new Map,En=[],zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pd(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(t.pointerId)}}function Sl(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Fo(t),t!==null&&Pu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function qv(e,t,n,r,o){switch(t){case"focusin":return Nn=Sl(Nn,e,t,n,r,o),!0;case"dragenter":return Ln=Sl(Ln,e,t,n,r,o),!0;case"mouseover":return $n=Sl($n,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return eo.set(i,Sl(eo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,to.set(i,Sl(to.get(i)||null,e,t,n,r,o)),!0}return!1}function Jf(e){var t=er(e.target);if(t!==null){var n=hr(t);if(n!==null){if(t=n.tag,t===13){if(t=Vf(n),t!==null){e.blockedOn=t,Zf(e.priority,function(){Qf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Os(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ks=r,n.target.dispatchEvent(r),ks=null}else return t=Fo(n),t!==null&&Pu(t),e.blockedOn=n,!1;t.shift()}return!0}function gd(e,t,n){li(e)&&n.delete(t)}function Uv(){$s=!1,Nn!==null&&li(Nn)&&(Nn=null),Ln!==null&&li(Ln)&&(Ln=null),$n!==null&&li($n)&&($n=null),eo.forEach(gd),to.forEach(gd)}function El(e,t){e.blockedOn===t&&(e.blockedOn=null,$s||($s=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,Uv)))}function no(e){function t(o){return El(o,e)}if(0<Vo.length){El(Vo[0],e);for(var n=1;n<Vo.length;n++){var r=Vo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nn!==null&&El(Nn,e),Ln!==null&&El(Ln,e),$n!==null&&El($n,e),eo.forEach(t),to.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)Jf(n),n.blockedOn===null&&En.shift()}var Wr=gn.ReactCurrentBatchConfig,xi=!0;function Hv(e,t,n,r){var o=ce,i=Wr.transition;Wr.transition=null;try{ce=1,Du(e,t,n,r)}finally{ce=o,Wr.transition=i}}function Wv(e,t,n,r){var o=ce,i=Wr.transition;Wr.transition=null;try{ce=4,Du(e,t,n,r)}finally{ce=o,Wr.transition=i}}function Du(e,t,n,r){if(xi){var o=Os(e,t,n,r);if(o===null)Ya(e,t,r,Si,n),pd(e,r);else if(qv(o,e,t,n,r))r.stopPropagation();else if(pd(e,r),t&4&&-1<zv.indexOf(e)){for(;o!==null;){var i=Fo(o);if(i!==null&&Kf(i),i=Os(e,t,n,r),i===null&&Ya(e,t,r,Si,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ya(e,t,r,null,n)}}var Si=null;function Os(e,t,n,r){if(Si=null,e=$u(r),e=er(e),e!==null)if(t=hr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Si=e,null}function em(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Av()){case Ou:return 1;case Hf:return 4;case wi:case Pv:return 16;case Wf:return 536870912;default:return 16}default:return 16}}var kn=null,Iu=null,oi=null;function tm(){if(oi)return oi;var e,t=Iu,n=t.length,r,o="value"in kn?kn.value:kn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return oi=o.slice(e,1<r?1-r:void 0)}function ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zo(){return!0}function vd(){return!1}function Ft(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zo:vd,this.isPropagationStopped=vd,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),t}var sl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_u=Ft(sl),wo=Se({},sl,{view:0,detail:0}),Yv=Ft(wo),ja,Ma,Cl,Zi=Se({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cl&&(Cl&&e.type==="mousemove"?(ja=e.screenX-Cl.screenX,Ma=e.screenY-Cl.screenY):Ma=ja=0,Cl=e),ja)},movementY:function(e){return"movementY"in e?e.movementY:Ma}}),yd=Ft(Zi),Gv=Se({},Zi,{dataTransfer:0}),Kv=Ft(Gv),Qv=Se({},wo,{relatedTarget:0}),Ba=Ft(Qv),Xv=Se({},sl,{animationName:0,elapsedTime:0,pseudoElement:0}),Zv=Ft(Xv),Jv=Se({},sl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ey=Ft(Jv),ty=Se({},sl,{data:0}),bd=Ft(ty),ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ly[e])?!!t[e]:!1}function ju(){return oy}var iy=Se({},wo,{key:function(e){if(e.key){var t=ny[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ry[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(e){return e.type==="keypress"?ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ay=Ft(iy),sy=Se({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=Ft(sy),uy=Se({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),cy=Ft(uy),dy=Se({},sl,{propertyName:0,elapsedTime:0,pseudoElement:0}),hy=Ft(dy),fy=Se({},Zi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),my=Ft(fy),py=[9,13,27,32],Mu=dn&&"CompositionEvent"in window,Vl=null;dn&&"documentMode"in document&&(Vl=document.documentMode);var gy=dn&&"TextEvent"in window&&!Vl,nm=dn&&(!Mu||Vl&&8<Vl&&11>=Vl),Fd=String.fromCharCode(32),xd=!1;function rm(e,t){switch(e){case"keyup":return py.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rr=!1;function vy(e,t){switch(e){case"compositionend":return lm(t);case"keypress":return t.which!==32?null:(xd=!0,Fd);case"textInput":return e=t.data,e===Fd&&xd?null:e;default:return null}}function yy(e,t){if(Rr)return e==="compositionend"||!Mu&&rm(e,t)?(e=tm(),oi=Iu=kn=null,Rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nm&&t.locale!=="ko"?null:t.data;default:return null}}var by={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!by[e.type]:t==="textarea"}function om(e,t,n,r){If(r),t=Ei(t,"onChange"),0<t.length&&(n=new _u("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zl=null,ro=null;function wy(e){gm(e,0)}function Ji(e){var t=$r(e);if(Nf(t))return e}function Fy(e,t){if(e==="change")return t}var im=!1;if(dn){var Va;if(dn){var za="oninput"in document;if(!za){var Ed=document.createElement("div");Ed.setAttribute("oninput","return;"),za=typeof Ed.oninput=="function"}Va=za}else Va=!1;im=Va&&(!document.documentMode||9<document.documentMode)}function Cd(){zl&&(zl.detachEvent("onpropertychange",am),ro=zl=null)}function am(e){if(e.propertyName==="value"&&Ji(ro)){var t=[];om(t,ro,e,$u(e)),Bf(wy,t)}}function xy(e,t,n){e==="focusin"?(Cd(),zl=t,ro=n,zl.attachEvent("onpropertychange",am)):e==="focusout"&&Cd()}function Sy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ji(ro)}function Ey(e,t){if(e==="click")return Ji(t)}function Cy(e,t){if(e==="input"||e==="change")return Ji(t)}function ky(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:ky;function lo(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ms.call(t,o)||!Ut(e[o],t[o]))return!1}return!0}function kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Td(e,t){var n=kd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kd(n)}}function sm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function um(){for(var e=window,t=vi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vi(e.document)}return t}function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ty(e){var t=um(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sm(n.ownerDocument.documentElement,n)){if(r!==null&&Bu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Td(n,i);var a=Td(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ry=dn&&"documentMode"in document&&11>=document.documentMode,Nr=null,As=null,ql=null,Ps=!1;function Rd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ps||Nr==null||Nr!==vi(r)||(r=Nr,"selectionStart"in r&&Bu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ql&&lo(ql,r)||(ql=r,r=Ei(As,"onSelect"),0<r.length&&(t=new _u("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function qo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lr={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},qa={},cm={};dn&&(cm=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function ea(e){if(qa[e])return qa[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cm)return qa[e]=t[n];return e}var dm=ea("animationend"),hm=ea("animationiteration"),fm=ea("animationstart"),mm=ea("transitionend"),pm=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){pm.set(e,t),dr(t,[e])}for(var Ua=0;Ua<Nd.length;Ua++){var Ha=Nd[Ua],Ny=Ha.toLowerCase(),Ly=Ha[0].toUpperCase()+Ha.slice(1);zn(Ny,"on"+Ly)}zn(dm,"onAnimationEnd");zn(hm,"onAnimationIteration");zn(fm,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(mm,"onTransitionEnd");Zr("onMouseEnter",["mouseout","mouseover"]);Zr("onMouseLeave",["mouseout","mouseover"]);Zr("onPointerEnter",["pointerout","pointerover"]);Zr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$y=new Set("cancel close invalid load scroll toggle".split(" ").concat(Il));function Ld(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Nv(r,t,void 0,e),e.currentTarget=null}function gm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Ld(o,s,d),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Ld(o,s,d),i=u}}}if(bi)throw e=Ns,bi=!1,Ns=null,e}function ge(e,t){var n=t[Ms];n===void 0&&(n=t[Ms]=new Set);var r=e+"__bubble";n.has(r)||(vm(t,e,2,!1),n.add(r))}function Wa(e,t,n){var r=0;t&&(r|=4),vm(n,e,r,t)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function oo(e){if(!e[Uo]){e[Uo]=!0,Ef.forEach(function(n){n!=="selectionchange"&&($y.has(n)||Wa(n,!1,e),Wa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uo]||(t[Uo]=!0,Wa("selectionchange",!1,t))}}function vm(e,t,n,r){switch(em(t)){case 1:var o=Hv;break;case 4:o=Wv;break;default:o=Du}n=o.bind(null,t,n,e),o=void 0,!Rs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ya(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=er(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Bf(function(){var d=i,m=$u(n),p=[];e:{var v=pm.get(e);if(v!==void 0){var S=_u,T=e;switch(e){case"keypress":if(ii(n)===0)break e;case"keydown":case"keyup":S=ay;break;case"focusin":T="focus",S=Ba;break;case"focusout":T="blur",S=Ba;break;case"beforeblur":case"afterblur":S=Ba;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=cy;break;case dm:case hm:case fm:S=Zv;break;case mm:S=hy;break;case"scroll":S=Yv;break;case"wheel":S=my;break;case"copy":case"cut":case"paste":S=ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=wd}var E=(t&4)!==0,b=!E&&e==="scroll",g=E?v!==null?v+"Capture":null:v;E=[];for(var h=d,f;h!==null;){f=h;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,g!==null&&(y=Jl(h,g),y!=null&&E.push(io(h,y,f)))),b)break;h=h.return}0<E.length&&(v=new S(v,T,null,n,m),p.push({event:v,listeners:E}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",v&&n!==ks&&(T=n.relatedTarget||n.fromElement)&&(er(T)||T[hn]))break e;if((S||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,S?(T=n.relatedTarget||n.toElement,S=d,T=T?er(T):null,T!==null&&(b=hr(T),T!==b||T.tag!==5&&T.tag!==6)&&(T=null)):(S=null,T=d),S!==T)){if(E=yd,y="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(E=wd,y="onPointerLeave",g="onPointerEnter",h="pointer"),b=S==null?v:$r(S),f=T==null?v:$r(T),v=new E(y,h+"leave",S,n,m),v.target=b,v.relatedTarget=f,y=null,er(m)===d&&(E=new E(g,h+"enter",T,n,m),E.target=f,E.relatedTarget=b,y=E),b=y,S&&T)t:{for(E=S,g=T,h=0,f=E;f;f=wr(f))h++;for(f=0,y=g;y;y=wr(y))f++;for(;0<h-f;)E=wr(E),h--;for(;0<f-h;)g=wr(g),f--;for(;h--;){if(E===g||g!==null&&E===g.alternate)break t;E=wr(E),g=wr(g)}E=null}else E=null;S!==null&&$d(p,v,S,E,!1),T!==null&&b!==null&&$d(p,b,T,E,!0)}}e:{if(v=d?$r(d):window,S=v.nodeName&&v.nodeName.toLowerCase(),S==="select"||S==="input"&&v.type==="file")var w=Fy;else if(Sd(v))if(im)w=Cy;else{w=Sy;var F=xy}else(S=v.nodeName)&&S.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(w=Ey);if(w&&(w=w(e,d))){om(p,w,n,m);break e}F&&F(e,v,d),e==="focusout"&&(F=v._wrapperState)&&F.controlled&&v.type==="number"&&Fs(v,"number",v.value)}switch(F=d?$r(d):window,e){case"focusin":(Sd(F)||F.contentEditable==="true")&&(Nr=F,As=d,ql=null);break;case"focusout":ql=As=Nr=null;break;case"mousedown":Ps=!0;break;case"contextmenu":case"mouseup":case"dragend":Ps=!1,Rd(p,n,m);break;case"selectionchange":if(Ry)break;case"keydown":case"keyup":Rd(p,n,m)}var C;if(Mu)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Rr?rm(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(nm&&n.locale!=="ko"&&(Rr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Rr&&(C=tm()):(kn=m,Iu="value"in kn?kn.value:kn.textContent,Rr=!0)),F=Ei(d,k),0<F.length&&(k=new bd(k,e,null,n,m),p.push({event:k,listeners:F}),C?k.data=C:(C=lm(n),C!==null&&(k.data=C)))),(C=gy?vy(e,n):yy(e,n))&&(d=Ei(d,"onBeforeInput"),0<d.length&&(m=new bd("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:d}),m.data=C))}gm(p,t)})}function io(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ei(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Jl(e,n),i!=null&&r.unshift(io(e,i,o)),i=Jl(e,t),i!=null&&r.push(io(e,i,o))),e=e.return}return r}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $d(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Jl(n,i),u!=null&&a.unshift(io(n,u,s))):o||(u=Jl(n,i),u!=null&&a.push(io(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Oy=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function Od(e){return(typeof e=="string"?e:""+e).replace(Oy,`
`).replace(Ay,"")}function Ho(e,t,n){if(t=Od(t),Od(e)!==t&&n)throw Error(_(425))}function Ci(){}var Ds=null,Is=null;function _s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var js=typeof setTimeout=="function"?setTimeout:void 0,Py=typeof clearTimeout=="function"?clearTimeout:void 0,Ad=typeof Promise=="function"?Promise:void 0,Dy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ad<"u"?function(e){return Ad.resolve(null).then(e).catch(Iy)}:js;function Iy(e){setTimeout(function(){throw e})}function Ga(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),no(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);no(t)}function On(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ul=Math.random().toString(36).slice(2),Qt="__reactFiber$"+ul,ao="__reactProps$"+ul,hn="__reactContainer$"+ul,Ms="__reactEvents$"+ul,_y="__reactListeners$"+ul,jy="__reactHandles$"+ul;function er(e){var t=e[Qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hn]||n[Qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pd(e);e!==null;){if(n=e[Qt])return n;e=Pd(e)}return t}e=n,n=e.parentNode}return null}function Fo(e){return e=e[Qt]||e[hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ta(e){return e[ao]||null}var Bs=[],Or=-1;function qn(e){return{current:e}}function ve(e){0>Or||(e.current=Bs[Or],Bs[Or]=null,Or--)}function he(e,t){Or++,Bs[Or]=e.current,e.current=t}var jn={},Xe=qn(jn),ut=qn(!1),ir=jn;function Jr(e,t){var n=e.type.contextTypes;if(!n)return jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ct(e){return e=e.childContextTypes,e!=null}function ki(){ve(ut),ve(Xe)}function Dd(e,t,n){if(Xe.current!==jn)throw Error(_(168));he(Xe,t),he(ut,n)}function ym(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,xv(e)||"Unknown",o));return Se({},n,r)}function Ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,ir=Xe.current,he(Xe,e),he(ut,ut.current),!0}function Id(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=ym(e,t,ir),r.__reactInternalMemoizedMergedChildContext=e,ve(ut),ve(Xe),he(Xe,e)):ve(ut),he(ut,n)}var on=null,na=!1,Ka=!1;function bm(e){on===null?on=[e]:on.push(e)}function My(e){na=!0,bm(e)}function Un(){if(!Ka&&on!==null){Ka=!0;var e=0,t=ce;try{var n=on;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}on=null,na=!1}catch(o){throw on!==null&&(on=on.slice(e+1)),Uf(Ou,Un),o}finally{ce=t,Ka=!1}}return null}var Ar=[],Pr=0,Ri=null,Ni=0,St=[],Et=0,ar=null,an=1,sn="";function Zn(e,t){Ar[Pr++]=Ni,Ar[Pr++]=Ri,Ri=e,Ni=t}function wm(e,t,n){St[Et++]=an,St[Et++]=sn,St[Et++]=ar,ar=e;var r=an;e=sn;var o=32-zt(r)-1;r&=~(1<<o),n+=1;var i=32-zt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,an=1<<32-zt(t)+o|n<<o|r,sn=i+e}else an=1<<i|n<<o|r,sn=e}function Vu(e){e.return!==null&&(Zn(e,1),wm(e,1,0))}function zu(e){for(;e===Ri;)Ri=Ar[--Pr],Ar[Pr]=null,Ni=Ar[--Pr],Ar[Pr]=null;for(;e===ar;)ar=St[--Et],St[Et]=null,sn=St[--Et],St[Et]=null,an=St[--Et],St[Et]=null}var vt=null,gt=null,we=!1,Bt=null;function Fm(e,t){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _d(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,gt=On(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ar!==null?{id:an,overflow:sn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,gt=null,!0):!1;default:return!1}}function Vs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zs(e){if(we){var t=gt;if(t){var n=t;if(!_d(e,t)){if(Vs(e))throw Error(_(418));t=On(n.nextSibling);var r=vt;t&&_d(e,t)?Fm(r,n):(e.flags=e.flags&-4097|2,we=!1,vt=e)}}else{if(Vs(e))throw Error(_(418));e.flags=e.flags&-4097|2,we=!1,vt=e}}}function jd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function Wo(e){if(e!==vt)return!1;if(!we)return jd(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_s(e.type,e.memoizedProps)),t&&(t=gt)){if(Vs(e))throw xm(),Error(_(418));for(;t;)Fm(e,t),t=On(t.nextSibling)}if(jd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){gt=On(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=vt?On(e.stateNode.nextSibling):null;return!0}function xm(){for(var e=gt;e;)e=On(e.nextSibling)}function el(){gt=vt=null,we=!1}function qu(e){Bt===null?Bt=[e]:Bt.push(e)}var By=gn.ReactCurrentBatchConfig;function jt(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Li=qn(null),$i=null,Dr=null,Uu=null;function Hu(){Uu=Dr=$i=null}function Wu(e){var t=Li.current;ve(Li),e._currentValue=t}function qs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yr(e,t){$i=e,Uu=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(st=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(Uu!==e)if(e={context:e,memoizedValue:t,next:null},Dr===null){if($i===null)throw Error(_(308));Dr=e,$i.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return t}var tr=null;function Yu(e){tr===null?tr=[e]:tr.push(e)}function Sm(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Yu(t)):(n.next=o.next,o.next=n),t.interleaved=n,fn(e,r)}function fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Sn=!1;function Gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Em(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function un(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,fn(e,n)}return o=r.interleaved,o===null?(t.next=t,Yu(r)):(t.next=o.next,o.next=t),r.interleaved=t,fn(e,n)}function ai(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Au(e,n)}}function Md(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Oi(e,t,n,r){var o=e.updateQueue;Sn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?i=d:a.next=d,a=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==a&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=u))}if(i!==null){var p=o.baseState;a=0,m=d=u=null,s=i;do{var v=s.lane,S=s.eventTime;if((r&v)===v){m!==null&&(m=m.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var T=e,E=s;switch(v=t,S=n,E.tag){case 1:if(T=E.payload,typeof T=="function"){p=T.call(S,p,v);break e}p=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=E.payload,v=typeof T=="function"?T.call(S,p,v):T,v==null)break e;p=Se({},p,v);break e;case 2:Sn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[s]:v.push(s))}else S={eventTime:S,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=S,u=p):m=m.next=S,a|=v;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;v=s,s=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(1);if(m===null&&(u=p),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ur|=a,e.lanes=a,e.memoizedState=p}}function Bd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var Cm=new Sf.Component().refs;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ra={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),o=Dn(e),i=un(r,o);i.payload=t,n!=null&&(i.callback=n),t=An(e,i,o),t!==null&&(qt(t,e,o,r),ai(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),o=Dn(e),i=un(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=An(e,i,o),t!==null&&(qt(t,e,o,r),ai(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=Dn(e),o=un(n,r);o.tag=2,t!=null&&(o.callback=t),t=An(e,o,r),t!==null&&(qt(t,e,r,n),ai(t,e,r))}};function Vd(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!lo(n,r)||!lo(o,i):!0}function km(e,t,n){var r=!1,o=jn,i=t.contextType;return typeof i=="object"&&i!==null?i=Tt(i):(o=ct(t)?ir:Xe.current,r=t.contextTypes,i=(r=r!=null)?Jr(e,o):jn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ra,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function zd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ra.enqueueReplaceState(t,t.state,null)}function Hs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Cm,Gu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Tt(i):(i=ct(t)?ir:Xe.current,o.context=Jr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Us(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ra.enqueueReplaceState(o,o.state,null),Oi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function kl(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;s===Cm&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Yo(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qd(e){var t=e._init;return t(e._payload)}function Tm(e){function t(g,h){if(e){var f=g.deletions;f===null?(g.deletions=[h],g.flags|=16):f.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function o(g,h){return g=In(g,h),g.index=0,g.sibling=null,g}function i(g,h,f){return g.index=f,e?(f=g.alternate,f!==null?(f=f.index,f<h?(g.flags|=2,h):f):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,f,y){return h===null||h.tag!==6?(h=ns(f,g.mode,y),h.return=g,h):(h=o(h,f),h.return=g,h)}function u(g,h,f,y){var w=f.type;return w===Tr?m(g,h,f.props.children,y,f.key):h!==null&&(h.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===xn&&qd(w)===h.type)?(y=o(h,f.props),y.ref=kl(g,h,f),y.return=g,y):(y=fi(f.type,f.key,f.props,null,g.mode,y),y.ref=kl(g,h,f),y.return=g,y)}function d(g,h,f,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==f.containerInfo||h.stateNode.implementation!==f.implementation?(h=rs(f,g.mode,y),h.return=g,h):(h=o(h,f.children||[]),h.return=g,h)}function m(g,h,f,y,w){return h===null||h.tag!==7?(h=or(f,g.mode,y,w),h.return=g,h):(h=o(h,f),h.return=g,h)}function p(g,h,f){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ns(""+h,g.mode,f),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Io:return f=fi(h.type,h.key,h.props,null,g.mode,f),f.ref=kl(g,null,h),f.return=g,f;case kr:return h=rs(h,g.mode,f),h.return=g,h;case xn:var y=h._init;return p(g,y(h._payload),f)}if(Pl(h)||Fl(h))return h=or(h,g.mode,f,null),h.return=g,h;Yo(g,h)}return null}function v(g,h,f,y){var w=h!==null?h.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return w!==null?null:s(g,h,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Io:return f.key===w?u(g,h,f,y):null;case kr:return f.key===w?d(g,h,f,y):null;case xn:return w=f._init,v(g,h,w(f._payload),y)}if(Pl(f)||Fl(f))return w!==null?null:m(g,h,f,y,null);Yo(g,f)}return null}function S(g,h,f,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(f)||null,s(h,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Io:return g=g.get(y.key===null?f:y.key)||null,u(h,g,y,w);case kr:return g=g.get(y.key===null?f:y.key)||null,d(h,g,y,w);case xn:var F=y._init;return S(g,h,f,F(y._payload),w)}if(Pl(y)||Fl(y))return g=g.get(f)||null,m(h,g,y,w,null);Yo(h,y)}return null}function T(g,h,f,y){for(var w=null,F=null,C=h,k=h=0,L=null;C!==null&&k<f.length;k++){C.index>k?(L=C,C=null):L=C.sibling;var A=v(g,C,f[k],y);if(A===null){C===null&&(C=L);break}e&&C&&A.alternate===null&&t(g,C),h=i(A,h,k),F===null?w=A:F.sibling=A,F=A,C=L}if(k===f.length)return n(g,C),we&&Zn(g,k),w;if(C===null){for(;k<f.length;k++)C=p(g,f[k],y),C!==null&&(h=i(C,h,k),F===null?w=C:F.sibling=C,F=C);return we&&Zn(g,k),w}for(C=r(g,C);k<f.length;k++)L=S(C,g,k,f[k],y),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?k:L.key),h=i(L,h,k),F===null?w=L:F.sibling=L,F=L);return e&&C.forEach(function(H){return t(g,H)}),we&&Zn(g,k),w}function E(g,h,f,y){var w=Fl(f);if(typeof w!="function")throw Error(_(150));if(f=w.call(f),f==null)throw Error(_(151));for(var F=w=null,C=h,k=h=0,L=null,A=f.next();C!==null&&!A.done;k++,A=f.next()){C.index>k?(L=C,C=null):L=C.sibling;var H=v(g,C,A.value,y);if(H===null){C===null&&(C=L);break}e&&C&&H.alternate===null&&t(g,C),h=i(H,h,k),F===null?w=H:F.sibling=H,F=H,C=L}if(A.done)return n(g,C),we&&Zn(g,k),w;if(C===null){for(;!A.done;k++,A=f.next())A=p(g,A.value,y),A!==null&&(h=i(A,h,k),F===null?w=A:F.sibling=A,F=A);return we&&Zn(g,k),w}for(C=r(g,C);!A.done;k++,A=f.next())A=S(C,g,k,A.value,y),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?k:A.key),h=i(A,h,k),F===null?w=A:F.sibling=A,F=A);return e&&C.forEach(function(te){return t(g,te)}),we&&Zn(g,k),w}function b(g,h,f,y){if(typeof f=="object"&&f!==null&&f.type===Tr&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Io:e:{for(var w=f.key,F=h;F!==null;){if(F.key===w){if(w=f.type,w===Tr){if(F.tag===7){n(g,F.sibling),h=o(F,f.props.children),h.return=g,g=h;break e}}else if(F.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===xn&&qd(w)===F.type){n(g,F.sibling),h=o(F,f.props),h.ref=kl(g,F,f),h.return=g,g=h;break e}n(g,F);break}else t(g,F);F=F.sibling}f.type===Tr?(h=or(f.props.children,g.mode,y,f.key),h.return=g,g=h):(y=fi(f.type,f.key,f.props,null,g.mode,y),y.ref=kl(g,h,f),y.return=g,g=y)}return a(g);case kr:e:{for(F=f.key;h!==null;){if(h.key===F)if(h.tag===4&&h.stateNode.containerInfo===f.containerInfo&&h.stateNode.implementation===f.implementation){n(g,h.sibling),h=o(h,f.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=rs(f,g.mode,y),h.return=g,g=h}return a(g);case xn:return F=f._init,b(g,h,F(f._payload),y)}if(Pl(f))return T(g,h,f,y);if(Fl(f))return E(g,h,f,y);Yo(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,h!==null&&h.tag===6?(n(g,h.sibling),h=o(h,f),h.return=g,g=h):(n(g,h),h=ns(f,g.mode,y),h.return=g,g=h),a(g)):n(g,h)}return b}var tl=Tm(!0),Rm=Tm(!1),xo={},Zt=qn(xo),so=qn(xo),uo=qn(xo);function nr(e){if(e===xo)throw Error(_(174));return e}function Ku(e,t){switch(he(uo,t),he(so,e),he(Zt,xo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ss(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ss(t,e)}ve(Zt),he(Zt,t)}function nl(){ve(Zt),ve(so),ve(uo)}function Nm(e){nr(uo.current);var t=nr(Zt.current),n=Ss(t,e.type);t!==n&&(he(so,e),he(Zt,n))}function Qu(e){so.current===e&&(ve(Zt),ve(so))}var Fe=qn(0);function Ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qa=[];function Xu(){for(var e=0;e<Qa.length;e++)Qa[e]._workInProgressVersionPrimary=null;Qa.length=0}var si=gn.ReactCurrentDispatcher,Xa=gn.ReactCurrentBatchConfig,sr=0,xe=null,De=null,Me=null,Pi=!1,Ul=!1,co=0,Vy=0;function Ge(){throw Error(_(321))}function Zu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function Ju(e,t,n,r,o,i){if(sr=i,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,si.current=e===null||e.memoizedState===null?Hy:Wy,e=n(r,o),Ul){i=0;do{if(Ul=!1,co=0,25<=i)throw Error(_(301));i+=1,Me=De=null,t.updateQueue=null,si.current=Yy,e=n(r,o)}while(Ul)}if(si.current=Di,t=De!==null&&De.next!==null,sr=0,Me=De=xe=null,Pi=!1,t)throw Error(_(300));return e}function ec(){var e=co!==0;return co=0,e}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?xe.memoizedState=Me=e:Me=Me.next=e,Me}function Rt(){if(De===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Me===null?xe.memoizedState:Me.next;if(t!==null)Me=t,De=e;else{if(e===null)throw Error(_(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Me===null?xe.memoizedState=Me=e:Me=Me.next=e}return Me}function ho(e,t){return typeof t=="function"?t(e):t}function Za(e){var t=Rt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=De,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,u=null,d=i;do{var m=d.lane;if((sr&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=p,a=r):u=u.next=p,xe.lanes|=m,ur|=m}d=d.next}while(d!==null&&d!==i);u===null?a=r:u.next=s,Ut(r,t.memoizedState)||(st=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,xe.lanes|=i,ur|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ja(e){var t=Rt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ut(i,t.memoizedState)||(st=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Lm(){}function $m(e,t){var n=xe,r=Rt(),o=t(),i=!Ut(r.memoizedState,o);if(i&&(r.memoizedState=o,st=!0),r=r.queue,tc(Pm.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,fo(9,Am.bind(null,n,r,o,t),void 0,null),Be===null)throw Error(_(349));sr&30||Om(n,t,o)}return o}function Om(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Am(e,t,n,r){t.value=n,t.getSnapshot=r,Dm(t)&&Im(e)}function Pm(e,t,n){return n(function(){Dm(t)&&Im(e)})}function Dm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function Im(e){var t=fn(e,1);t!==null&&qt(t,e,1,-1)}function Ud(e){var t=Yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:e},t.queue=e,e=e.dispatch=Uy.bind(null,xe,e),[t.memoizedState,e]}function fo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _m(){return Rt().memoizedState}function ui(e,t,n,r){var o=Yt();xe.flags|=e,o.memoizedState=fo(1|t,n,void 0,r===void 0?null:r)}function la(e,t,n,r){var o=Rt();r=r===void 0?null:r;var i=void 0;if(De!==null){var a=De.memoizedState;if(i=a.destroy,r!==null&&Zu(r,a.deps)){o.memoizedState=fo(t,n,i,r);return}}xe.flags|=e,o.memoizedState=fo(1|t,n,i,r)}function Hd(e,t){return ui(8390656,8,e,t)}function tc(e,t){return la(2048,8,e,t)}function jm(e,t){return la(4,2,e,t)}function Mm(e,t){return la(4,4,e,t)}function Bm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vm(e,t,n){return n=n!=null?n.concat([e]):null,la(4,4,Bm.bind(null,t,e),n)}function nc(){}function zm(e,t){var n=Rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qm(e,t){var n=Rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Um(e,t,n){return sr&21?(Ut(n,t)||(n=Yf(),xe.lanes|=n,ur|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n)}function zy(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=Xa.transition;Xa.transition={};try{e(!1),t()}finally{ce=n,Xa.transition=r}}function Hm(){return Rt().memoizedState}function qy(e,t,n){var r=Dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wm(e))Ym(t,n);else if(n=Sm(e,t,n,r),n!==null){var o=nt();qt(n,e,r,o),Gm(n,t,r)}}function Uy(e,t,n){var r=Dn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wm(e))Ym(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Ut(s,a)){var u=t.interleaved;u===null?(o.next=o,Yu(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Sm(e,t,o,r),n!==null&&(o=nt(),qt(n,e,r,o),Gm(n,t,r))}}function Wm(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function Ym(e,t){Ul=Pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Au(e,n)}}var Di={readContext:Tt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Hy={readContext:Tt,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:Hd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ui(4194308,4,Bm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ui(4194308,4,e,t)},useInsertionEffect:function(e,t){return ui(4,2,e,t)},useMemo:function(e,t){var n=Yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qy.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:Ud,useDebugValue:nc,useDeferredValue:function(e){return Yt().memoizedState=e},useTransition:function(){var e=Ud(!1),t=e[0];return e=zy.bind(null,e[1]),Yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=xe,o=Yt();if(we){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Be===null)throw Error(_(349));sr&30||Om(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Hd(Pm.bind(null,r,i,e),[e]),r.flags|=2048,fo(9,Am.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Yt(),t=Be.identifierPrefix;if(we){var n=sn,r=an;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=co++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wy={readContext:Tt,useCallback:zm,useContext:Tt,useEffect:tc,useImperativeHandle:Vm,useInsertionEffect:jm,useLayoutEffect:Mm,useMemo:qm,useReducer:Za,useRef:_m,useState:function(){return Za(ho)},useDebugValue:nc,useDeferredValue:function(e){var t=Rt();return Um(t,De.memoizedState,e)},useTransition:function(){var e=Za(ho)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:Lm,useSyncExternalStore:$m,useId:Hm,unstable_isNewReconciler:!1},Yy={readContext:Tt,useCallback:zm,useContext:Tt,useEffect:tc,useImperativeHandle:Vm,useInsertionEffect:jm,useLayoutEffect:Mm,useMemo:qm,useReducer:Ja,useRef:_m,useState:function(){return Ja(ho)},useDebugValue:nc,useDeferredValue:function(e){var t=Rt();return De===null?t.memoizedState=e:Um(t,De.memoizedState,e)},useTransition:function(){var e=Ja(ho)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:Lm,useSyncExternalStore:$m,useId:Hm,unstable_isNewReconciler:!1};function rl(e,t){try{var n="",r=t;do n+=Fv(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function es(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ws(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gy=typeof WeakMap=="function"?WeakMap:Map;function Km(e,t,n){n=un(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_i||(_i=!0,nu=r),Ws(e,t)},n}function Qm(e,t,n){n=un(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ws(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ws(e,t),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Wd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gy;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=sb.bind(null,e,t,n),t.then(e,e))}function Yd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=un(-1,1),t.tag=2,An(n,t,1))),n.lanes|=1),e)}var Ky=gn.ReactCurrentOwner,st=!1;function et(e,t,n,r){t.child=e===null?Rm(t,null,n,r):tl(t,e.child,n,r)}function Kd(e,t,n,r,o){n=n.render;var i=t.ref;return Yr(t,o),r=Ju(e,t,n,r,i,o),n=ec(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,mn(e,t,o)):(we&&n&&Vu(t),t.flags|=1,et(e,t,r,o),t.child)}function Qd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!cc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Xm(e,t,i,r,o)):(e=fi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(a,r)&&e.ref===t.ref)return mn(e,t,o)}return t.flags|=1,e=In(i,r),e.ref=t.ref,e.return=t,t.child=e}function Xm(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(lo(i,r)&&e.ref===t.ref)if(st=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(st=!0);else return t.lanes=e.lanes,mn(e,t,o)}return Ys(e,t,n,r,o)}function Zm(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(_r,mt),mt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(_r,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,he(_r,mt),mt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,he(_r,mt),mt|=r;return et(e,t,o,n),t.child}function Jm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ys(e,t,n,r,o){var i=ct(n)?ir:Xe.current;return i=Jr(t,i),Yr(t,o),n=Ju(e,t,n,r,i,o),r=ec(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,mn(e,t,o)):(we&&r&&Vu(t),t.flags|=1,et(e,t,n,o),t.child)}function Xd(e,t,n,r,o){if(ct(n)){var i=!0;Ti(t)}else i=!1;if(Yr(t,o),t.stateNode===null)ci(e,t),km(t,n,r),Hs(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Tt(d):(d=ct(n)?ir:Xe.current,d=Jr(t,d));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&zd(t,a,r,d),Sn=!1;var v=t.memoizedState;a.state=v,Oi(t,r,a,o),u=t.memoizedState,s!==r||v!==u||ut.current||Sn?(typeof m=="function"&&(Us(t,n,m,r),u=t.memoizedState),(s=Sn||Vd(t,n,s,r,v,u,d))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Em(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:jt(t.type,s),a.props=d,p=t.pendingProps,v=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Tt(u):(u=ct(n)?ir:Xe.current,u=Jr(t,u));var S=n.getDerivedStateFromProps;(m=typeof S=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||v!==u)&&zd(t,a,r,u),Sn=!1,v=t.memoizedState,a.state=v,Oi(t,r,a,o);var T=t.memoizedState;s!==p||v!==T||ut.current||Sn?(typeof S=="function"&&(Us(t,n,S,r),T=t.memoizedState),(d=Sn||Vd(t,n,d,r,v,T,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,T,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,T,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=T),a.props=r,a.state=T,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Gs(e,t,n,r,i,o)}function Gs(e,t,n,r,o,i){Jm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Id(t,n,!1),mn(e,t,i);r=t.stateNode,Ky.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=tl(t,e.child,null,i),t.child=tl(t,null,s,i)):et(e,t,s,i),t.memoizedState=r.state,o&&Id(t,n,!0),t.child}function ep(e){var t=e.stateNode;t.pendingContext?Dd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Dd(e,t.context,!1),Ku(e,t.containerInfo)}function Zd(e,t,n,r,o){return el(),qu(o),t.flags|=256,et(e,t,n,r),t.child}var Ks={dehydrated:null,treeContext:null,retryLane:0};function Qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function tp(e,t,n){var r=t.pendingProps,o=Fe.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),he(Fe,o&1),e===null)return zs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=aa(a,r,0,null),e=or(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Qs(n),t.memoizedState=Ks,e):rc(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Qy(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=In(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=In(s,i):(i=or(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Qs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ks,r}return i=e.child,e=i.sibling,r=In(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rc(e,t){return t=aa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Go(e,t,n,r){return r!==null&&qu(r),tl(t,e.child,null,n),e=rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qy(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=es(Error(_(422))),Go(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=aa({mode:"visible",children:r.children},o,0,null),i=or(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tl(t,e.child,null,a),t.child.memoizedState=Qs(a),t.memoizedState=Ks,i);if(!(t.mode&1))return Go(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=es(i,r,void 0),Go(e,t,a,r)}if(s=(a&e.childLanes)!==0,st||s){if(r=Be,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,fn(e,o),qt(r,e,o,-1))}return uc(),r=es(Error(_(421))),Go(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ub.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,gt=On(o.nextSibling),vt=t,we=!0,Bt=null,e!==null&&(St[Et++]=an,St[Et++]=sn,St[Et++]=ar,an=e.id,sn=e.overflow,ar=t),t=rc(t,r.children),t.flags|=4096,t)}function Jd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qs(e.return,t,n)}function ts(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function np(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(et(e,t,r.children,n),r=Fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jd(e,n,t);else if(e.tag===19)Jd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(Fe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ai(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ts(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ai(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ts(t,!0,n,null,i);break;case"together":ts(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ci(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ur|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=In(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=In(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xy(e,t,n){switch(t.tag){case 3:ep(t),el();break;case 5:Nm(t);break;case 1:ct(t.type)&&Ti(t);break;case 4:Ku(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;he(Li,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(Fe,Fe.current&1),t.flags|=128,null):n&t.child.childLanes?tp(e,t,n):(he(Fe,Fe.current&1),e=mn(e,t,n),e!==null?e.sibling:null);he(Fe,Fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return np(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),he(Fe,Fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Zm(e,t,n)}return mn(e,t,n)}var rp,Xs,lp,op;rp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xs=function(){};lp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,nr(Zt.current);var i=null;switch(n){case"input":o=bs(e,o),r=bs(e,r),i=[];break;case"select":o=Se({},o,{value:void 0}),r=Se({},r,{value:void 0}),i=[];break;case"textarea":o=xs(e,o),r=xs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ci)}Es(n,r);var a;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Xl.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Xl.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&ge("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};op=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tl(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zy(e,t,n){var r=t.pendingProps;switch(zu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return ct(t.type)&&ki(),Ke(t),null;case 3:return r=t.stateNode,nl(),ve(ut),ve(Xe),Xu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Bt!==null&&(ou(Bt),Bt=null))),Xs(e,t),Ke(t),null;case 5:Qu(t);var o=nr(uo.current);if(n=t.type,e!==null&&t.stateNode!=null)lp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ke(t),null}if(e=nr(Zt.current),Wo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Qt]=t,r[ao]=i,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(o=0;o<Il.length;o++)ge(Il[o],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":sd(r,i),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ge("invalid",r);break;case"textarea":cd(r,i),ge("invalid",r)}Es(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ho(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ho(r.textContent,s,e),o=["children",""+s]):Xl.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":_o(r),ud(r,i,!0);break;case"textarea":_o(r),dd(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ci)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Of(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Qt]=t,e[ao]=r,rp(e,t,!1,!1),t.stateNode=e;e:{switch(a=Cs(n,r),n){case"dialog":ge("cancel",e),ge("close",e),o=r;break;case"iframe":case"object":case"embed":ge("load",e),o=r;break;case"video":case"audio":for(o=0;o<Il.length;o++)ge(Il[o],e);o=r;break;case"source":ge("error",e),o=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),o=r;break;case"details":ge("toggle",e),o=r;break;case"input":sd(e,r),o=bs(e,r),ge("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Se({},r,{value:void 0}),ge("invalid",e);break;case"textarea":cd(e,r),o=xs(e,r),ge("invalid",e);break;default:o=r}Es(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Df(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Af(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zl(e,u):typeof u=="number"&&Zl(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xl.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ge("scroll",e):u!=null&&Tu(e,i,u,a))}switch(n){case"input":_o(e),ud(e,r,!1);break;case"textarea":_o(e),dd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_n(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qr(e,!!r.multiple,i,!1):r.defaultValue!=null&&qr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ci)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)op(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=nr(uo.current),nr(Zt.current),Wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qt]=t,(i=r.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:Ho(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ho(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=t,t.stateNode=r}return Ke(t),null;case 13:if(ve(Fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&gt!==null&&t.mode&1&&!(t.flags&128))xm(),el(),t.flags|=98560,i=!1;else if(i=Wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[Qt]=t}else el(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),i=!1}else Bt!==null&&(ou(Bt),Bt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Fe.current&1?Ie===0&&(Ie=3):uc())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return nl(),Xs(e,t),e===null&&oo(t.stateNode.containerInfo),Ke(t),null;case 10:return Wu(t.type._context),Ke(t),null;case 17:return ct(t.type)&&ki(),Ke(t),null;case 19:if(ve(Fe),i=t.memoizedState,i===null)return Ke(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Tl(i,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ai(e),a!==null){for(t.flags|=128,Tl(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(Fe,Fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ne()>ll&&(t.flags|=128,r=!0,Tl(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ai(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!we)return Ke(t),null}else 2*Ne()-i.renderingStartTime>ll&&n!==1073741824&&(t.flags|=128,r=!0,Tl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ne(),t.sibling=null,n=Fe.current,he(Fe,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return sc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?mt&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Jy(e,t){switch(zu(t),t.tag){case 1:return ct(t.type)&&ki(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nl(),ve(ut),ve(Xe),Xu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qu(t),null;case 13:if(ve(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));el()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Fe),null;case 4:return nl(),null;case 10:return Wu(t.type._context),null;case 22:case 23:return sc(),null;case 24:return null;default:return null}}var Ko=!1,Qe=!1,eb=typeof WeakSet=="function"?WeakSet:Set,V=null;function Ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Zs(e,t,n){try{n()}catch(r){Te(e,t,r)}}var eh=!1;function tb(e,t){if(Ds=xi,e=um(),Bu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,m=0,p=e,v=null;t:for(;;){for(var S;p!==n||o!==0&&p.nodeType!==3||(s=a+o),p!==i||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(S=p.firstChild)!==null;)v=p,p=S;for(;;){if(p===e)break t;if(v===n&&++d===o&&(s=a),v===i&&++m===r&&(u=a),(S=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Is={focusedElem:e,selectionRange:n},xi=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var T=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var E=T.memoizedProps,b=T.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?E:jt(t.type,E),b);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(y){Te(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return T=eh,eh=!1,T}function Hl(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Zs(t,n,i)}o=o.next}while(o!==r)}}function oa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Js(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ip(e){var t=e.alternate;t!==null&&(e.alternate=null,ip(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qt],delete t[ao],delete t[Ms],delete t[_y],delete t[jy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ap(e){return e.tag===5||e.tag===3||e.tag===4}function th(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ap(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ci));else if(r!==4&&(e=e.child,e!==null))for(eu(e,t,n),e=e.sibling;e!==null;)eu(e,t,n),e=e.sibling}function tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(tu(e,t,n),e=e.sibling;e!==null;)tu(e,t,n),e=e.sibling}var Ue=null,Mt=!1;function wn(e,t,n){for(n=n.child;n!==null;)sp(e,t,n),n=n.sibling}function sp(e,t,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Xi,n)}catch{}switch(n.tag){case 5:Qe||Ir(n,t);case 6:var r=Ue,o=Mt;Ue=null,wn(e,t,n),Ue=r,Mt=o,Ue!==null&&(Mt?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Mt?(e=Ue,n=n.stateNode,e.nodeType===8?Ga(e.parentNode,n):e.nodeType===1&&Ga(e,n),no(e)):Ga(Ue,n.stateNode));break;case 4:r=Ue,o=Mt,Ue=n.stateNode.containerInfo,Mt=!0,wn(e,t,n),Ue=r,Mt=o;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Zs(n,t,a),o=o.next}while(o!==r)}wn(e,t,n);break;case 1:if(!Qe&&(Ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Te(n,t,s)}wn(e,t,n);break;case 21:wn(e,t,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,wn(e,t,n),Qe=r):wn(e,t,n);break;default:wn(e,t,n)}}function nh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new eb),t.forEach(function(r){var o=cb.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ue=s.stateNode,Mt=!1;break e;case 3:Ue=s.stateNode.containerInfo,Mt=!0;break e;case 4:Ue=s.stateNode.containerInfo,Mt=!0;break e}s=s.return}if(Ue===null)throw Error(_(160));sp(i,a,o),Ue=null,Mt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){Te(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)up(t,e),t=t.sibling}function up(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Wt(e),r&4){try{Hl(3,e,e.return),oa(3,e)}catch(E){Te(e,e.return,E)}try{Hl(5,e,e.return)}catch(E){Te(e,e.return,E)}}break;case 1:It(t,e),Wt(e),r&512&&n!==null&&Ir(n,n.return);break;case 5:if(It(t,e),Wt(e),r&512&&n!==null&&Ir(n,n.return),e.flags&32){var o=e.stateNode;try{Zl(o,"")}catch(E){Te(e,e.return,E)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Lf(o,i),Cs(s,a);var d=Cs(s,i);for(a=0;a<u.length;a+=2){var m=u[a],p=u[a+1];m==="style"?Df(o,p):m==="dangerouslySetInnerHTML"?Af(o,p):m==="children"?Zl(o,p):Tu(o,m,p,d)}switch(s){case"input":ws(o,i);break;case"textarea":$f(o,i);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?qr(o,!!i.multiple,S,!1):v!==!!i.multiple&&(i.defaultValue!=null?qr(o,!!i.multiple,i.defaultValue,!0):qr(o,!!i.multiple,i.multiple?[]:"",!1))}o[ao]=i}catch(E){Te(e,e.return,E)}}break;case 6:if(It(t,e),Wt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(E){Te(e,e.return,E)}}break;case 3:if(It(t,e),Wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{no(t.containerInfo)}catch(E){Te(e,e.return,E)}break;case 4:It(t,e),Wt(e);break;case 13:It(t,e),Wt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ic=Ne())),r&4&&nh(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(d=Qe)||m,It(t,e),Qe=d):It(t,e),Wt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(V=e,m=e.child;m!==null;){for(p=V=m;V!==null;){switch(v=V,S=v.child,v.tag){case 0:case 11:case 14:case 15:Hl(4,v,v.return);break;case 1:Ir(v,v.return);var T=v.stateNode;if(typeof T.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,T.props=t.memoizedProps,T.state=t.memoizedState,T.componentWillUnmount()}catch(E){Te(r,n,E)}}break;case 5:Ir(v,v.return);break;case 22:if(v.memoizedState!==null){lh(p);continue}}S!==null?(S.return=v,V=S):lh(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,u=p.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Pf("display",a))}catch(E){Te(e,e.return,E)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(E){Te(e,e.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:It(t,e),Wt(e),r&4&&nh(e);break;case 21:break;default:It(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ap(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Zl(o,""),r.flags&=-33);var i=th(e);tu(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=th(e);eu(e,s,a);break;default:throw Error(_(161))}}catch(u){Te(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nb(e,t,n){V=e,cp(e)}function cp(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var o=V,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ko;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Qe;s=Ko;var d=Qe;if(Ko=a,(Qe=u)&&!d)for(V=o;V!==null;)a=V,u=a.child,a.tag===22&&a.memoizedState!==null?oh(o):u!==null?(u.return=a,V=u):oh(o);for(;i!==null;)V=i,cp(i),i=i.sibling;V=o,Ko=s,Qe=d}rh(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,V=i):rh(e)}}function rh(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Qe||oa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:jt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Bd(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bd(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&no(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Qe||t.flags&512&&Js(t)}catch(v){Te(t,t.return,v)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function lh(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function oh(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oa(4,t)}catch(u){Te(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){Te(t,o,u)}}var i=t.return;try{Js(t)}catch(u){Te(t,i,u)}break;case 5:var a=t.return;try{Js(t)}catch(u){Te(t,a,u)}}}catch(u){Te(t,t.return,u)}if(t===e){V=null;break}var s=t.sibling;if(s!==null){s.return=t.return,V=s;break}V=t.return}}var rb=Math.ceil,Ii=gn.ReactCurrentDispatcher,lc=gn.ReactCurrentOwner,kt=gn.ReactCurrentBatchConfig,le=0,Be=null,$e=null,He=0,mt=0,_r=qn(0),Ie=0,mo=null,ur=0,ia=0,oc=0,Wl=null,at=null,ic=0,ll=1/0,nn=null,_i=!1,nu=null,Pn=null,Qo=!1,Tn=null,ji=0,Yl=0,ru=null,di=-1,hi=0;function nt(){return le&6?Ne():di!==-1?di:di=Ne()}function Dn(e){return e.mode&1?le&2&&He!==0?He&-He:By.transition!==null?(hi===0&&(hi=Yf()),hi):(e=ce,e!==0||(e=window.event,e=e===void 0?16:em(e.type)),e):1}function qt(e,t,n,r){if(50<Yl)throw Yl=0,ru=null,Error(_(185));bo(e,n,r),(!(le&2)||e!==Be)&&(e===Be&&(!(le&2)&&(ia|=n),Ie===4&&Cn(e,He)),dt(e,r),n===1&&le===0&&!(t.mode&1)&&(ll=Ne()+500,na&&Un()))}function dt(e,t){var n=e.callbackNode;Bv(e,t);var r=Fi(e,e===Be?He:0);if(r===0)n!==null&&md(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&md(n),t===1)e.tag===0?My(ih.bind(null,e)):bm(ih.bind(null,e)),Dy(function(){!(le&6)&&Un()}),n=null;else{switch(Gf(r)){case 1:n=Ou;break;case 4:n=Hf;break;case 16:n=wi;break;case 536870912:n=Wf;break;default:n=wi}n=yp(n,dp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function dp(e,t){if(di=-1,hi=0,le&6)throw Error(_(327));var n=e.callbackNode;if(Gr()&&e.callbackNode!==n)return null;var r=Fi(e,e===Be?He:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Mi(e,r);else{t=r;var o=le;le|=2;var i=fp();(Be!==e||He!==t)&&(nn=null,ll=Ne()+500,lr(e,t));do try{ib();break}catch(s){hp(e,s)}while(1);Hu(),Ii.current=i,le=o,$e!==null?t=0:(Be=null,He=0,t=Ie)}if(t!==0){if(t===2&&(o=Ls(e),o!==0&&(r=o,t=lu(e,o))),t===1)throw n=mo,lr(e,0),Cn(e,r),dt(e,Ne()),n;if(t===6)Cn(e,r);else{if(o=e.current.alternate,!(r&30)&&!lb(o)&&(t=Mi(e,r),t===2&&(i=Ls(e),i!==0&&(r=i,t=lu(e,i))),t===1))throw n=mo,lr(e,0),Cn(e,r),dt(e,Ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Jn(e,at,nn);break;case 3:if(Cn(e,r),(r&130023424)===r&&(t=ic+500-Ne(),10<t)){if(Fi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=js(Jn.bind(null,e,at,nn),t);break}Jn(e,at,nn);break;case 4:if(Cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-zt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rb(r/1960))-r,10<r){e.timeoutHandle=js(Jn.bind(null,e,at,nn),r);break}Jn(e,at,nn);break;case 5:Jn(e,at,nn);break;default:throw Error(_(329))}}}return dt(e,Ne()),e.callbackNode===n?dp.bind(null,e):null}function lu(e,t){var n=Wl;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=Mi(e,t),e!==2&&(t=at,at=n,t!==null&&ou(t)),e}function ou(e){at===null?at=e:at.push.apply(at,e)}function lb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ut(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t){for(t&=~oc,t&=~ia,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-zt(t),r=1<<n;e[n]=-1,t&=~r}}function ih(e){if(le&6)throw Error(_(327));Gr();var t=Fi(e,0);if(!(t&1))return dt(e,Ne()),null;var n=Mi(e,t);if(e.tag!==0&&n===2){var r=Ls(e);r!==0&&(t=r,n=lu(e,r))}if(n===1)throw n=mo,lr(e,0),Cn(e,t),dt(e,Ne()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jn(e,at,nn),dt(e,Ne()),null}function ac(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(ll=Ne()+500,na&&Un())}}function cr(e){Tn!==null&&Tn.tag===0&&!(le&6)&&Gr();var t=le;le|=1;var n=kt.transition,r=ce;try{if(kt.transition=null,ce=1,e)return e()}finally{ce=r,kt.transition=n,le=t,!(le&6)&&Un()}}function sc(){mt=_r.current,ve(_r)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Py(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(zu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ki();break;case 3:nl(),ve(ut),ve(Xe),Xu();break;case 5:Qu(r);break;case 4:nl();break;case 13:ve(Fe);break;case 19:ve(Fe);break;case 10:Wu(r.type._context);break;case 22:case 23:sc()}n=n.return}if(Be=e,$e=e=In(e.current,null),He=mt=t,Ie=0,mo=null,oc=ia=ur=0,at=Wl=null,tr!==null){for(t=0;t<tr.length;t++)if(n=tr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}tr=null}return e}function hp(e,t){do{var n=$e;try{if(Hu(),si.current=Di,Pi){for(var r=xe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Pi=!1}if(sr=0,Me=De=xe=null,Ul=!1,co=0,lc.current=null,n===null||n.return===null){Ie=1,mo=t,$e=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=He,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=s,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var S=Yd(a);if(S!==null){S.flags&=-257,Gd(S,a,s,i,t),S.mode&1&&Wd(i,d,t),t=S,u=d;var T=t.updateQueue;if(T===null){var E=new Set;E.add(u),t.updateQueue=E}else T.add(u);break e}else{if(!(t&1)){Wd(i,d,t),uc();break e}u=Error(_(426))}}else if(we&&s.mode&1){var b=Yd(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Gd(b,a,s,i,t),qu(rl(u,s));break e}}i=u=rl(u,s),Ie!==4&&(Ie=2),Wl===null?Wl=[i]:Wl.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Km(i,u,t);Md(i,g);break e;case 1:s=u;var h=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pn===null||!Pn.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Qm(i,s,t);Md(i,y);break e}}i=i.return}while(i!==null)}pp(n)}catch(w){t=w,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function fp(){var e=Ii.current;return Ii.current=Di,e===null?Di:e}function uc(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Be===null||!(ur&268435455)&&!(ia&268435455)||Cn(Be,He)}function Mi(e,t){var n=le;le|=2;var r=fp();(Be!==e||He!==t)&&(nn=null,lr(e,t));do try{ob();break}catch(o){hp(e,o)}while(1);if(Hu(),le=n,Ii.current=r,$e!==null)throw Error(_(261));return Be=null,He=0,Ie}function ob(){for(;$e!==null;)mp($e)}function ib(){for(;$e!==null&&!$v();)mp($e)}function mp(e){var t=vp(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?pp(e):$e=t,lc.current=null}function pp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jy(n,t),n!==null){n.flags&=32767,$e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,$e=null;return}}else if(n=Zy(n,t,mt),n!==null){$e=n;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Ie===0&&(Ie=5)}function Jn(e,t,n){var r=ce,o=kt.transition;try{kt.transition=null,ce=1,ab(e,t,n,r)}finally{kt.transition=o,ce=r}return null}function ab(e,t,n,r){do Gr();while(Tn!==null);if(le&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Vv(e,i),e===Be&&($e=Be=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qo||(Qo=!0,yp(wi,function(){return Gr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=kt.transition,kt.transition=null;var a=ce;ce=1;var s=le;le|=4,lc.current=null,tb(e,n),up(n,e),Ty(Is),xi=!!Ds,Is=Ds=null,e.current=n,nb(n),Ov(),le=s,ce=a,kt.transition=i}else e.current=n;if(Qo&&(Qo=!1,Tn=e,ji=o),i=e.pendingLanes,i===0&&(Pn=null),Dv(n.stateNode),dt(e,Ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(_i)throw _i=!1,e=nu,nu=null,e;return ji&1&&e.tag!==0&&Gr(),i=e.pendingLanes,i&1?e===ru?Yl++:(Yl=0,ru=e):Yl=0,Un(),null}function Gr(){if(Tn!==null){var e=Gf(ji),t=kt.transition,n=ce;try{if(kt.transition=null,ce=16>e?16:e,Tn===null)var r=!1;else{if(e=Tn,Tn=null,ji=0,le&6)throw Error(_(331));var o=le;for(le|=4,V=e.current;V!==null;){var i=V,a=i.child;if(V.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(V=d;V!==null;){var m=V;switch(m.tag){case 0:case 11:case 15:Hl(8,m,i)}var p=m.child;if(p!==null)p.return=m,V=p;else for(;V!==null;){m=V;var v=m.sibling,S=m.return;if(ip(m),m===d){V=null;break}if(v!==null){v.return=S,V=v;break}V=S}}}var T=i.alternate;if(T!==null){var E=T.child;if(E!==null){T.child=null;do{var b=E.sibling;E.sibling=null,E=b}while(E!==null)}}V=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,V=a;else e:for(;V!==null;){if(i=V,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Hl(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,V=g;break e}V=i.return}}var h=e.current;for(V=h;V!==null;){a=V;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,V=f;else e:for(a=h;V!==null;){if(s=V,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:oa(9,s)}}catch(w){Te(s,s.return,w)}if(s===a){V=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,V=y;break e}V=s.return}}if(le=o,Un(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Xi,e)}catch{}r=!0}return r}finally{ce=n,kt.transition=t}}return!1}function ah(e,t,n){t=rl(n,t),t=Km(e,t,1),e=An(e,t,1),t=nt(),e!==null&&(bo(e,1,t),dt(e,t))}function Te(e,t,n){if(e.tag===3)ah(e,e,n);else for(;t!==null;){if(t.tag===3){ah(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){e=rl(n,e),e=Qm(t,e,1),t=An(t,e,1),e=nt(),t!==null&&(bo(t,1,e),dt(t,e));break}}t=t.return}}function sb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(He&n)===n&&(Ie===4||Ie===3&&(He&130023424)===He&&500>Ne()-ic?lr(e,0):oc|=n),dt(e,t)}function gp(e,t){t===0&&(e.mode&1?(t=Bo,Bo<<=1,!(Bo&130023424)&&(Bo=4194304)):t=1);var n=nt();e=fn(e,t),e!==null&&(bo(e,t,n),dt(e,n))}function ub(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gp(e,n)}function cb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),gp(e,n)}var vp;vp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ut.current)st=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return st=!1,Xy(e,t,n);st=!!(e.flags&131072)}else st=!1,we&&t.flags&1048576&&wm(t,Ni,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ci(e,t),e=t.pendingProps;var o=Jr(t,Xe.current);Yr(t,n),o=Ju(null,t,r,e,o,n);var i=ec();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(i=!0,Ti(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Gu(t),o.updater=ra,t.stateNode=o,o._reactInternals=t,Hs(t,r,e,n),t=Gs(null,t,r,!0,i,n)):(t.tag=0,we&&i&&Vu(t),et(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ci(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=hb(r),e=jt(r,e),o){case 0:t=Ys(null,t,r,e,n);break e;case 1:t=Xd(null,t,r,e,n);break e;case 11:t=Kd(null,t,r,e,n);break e;case 14:t=Qd(null,t,r,jt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:jt(r,o),Ys(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:jt(r,o),Xd(e,t,r,o,n);case 3:e:{if(ep(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Em(e,t),Oi(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=rl(Error(_(423)),t),t=Zd(e,t,r,n,o);break e}else if(r!==o){o=rl(Error(_(424)),t),t=Zd(e,t,r,n,o);break e}else for(gt=On(t.stateNode.containerInfo.firstChild),vt=t,we=!0,Bt=null,n=Rm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(el(),r===o){t=mn(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return Nm(t),e===null&&zs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,_s(r,o)?a=null:i!==null&&_s(r,i)&&(t.flags|=32),Jm(e,t),et(e,t,a,n),t.child;case 6:return e===null&&zs(t),null;case 13:return tp(e,t,n);case 4:return Ku(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tl(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:jt(r,o),Kd(e,t,r,o,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,he(Li,r._currentValue),r._currentValue=a,i!==null)if(Ut(i.value,a)){if(i.children===o.children&&!ut.current){t=mn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=un(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),qs(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(_(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),qs(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}et(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Yr(t,n),o=Tt(o),r=r(o),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,o=jt(r,t.pendingProps),o=jt(r.type,o),Qd(e,t,r,o,n);case 15:return Xm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:jt(r,o),ci(e,t),t.tag=1,ct(r)?(e=!0,Ti(t)):e=!1,Yr(t,n),km(t,r,o),Hs(t,r,o,n),Gs(null,t,r,!0,e,n);case 19:return np(e,t,n);case 22:return Zm(e,t,n)}throw Error(_(156,t.tag))};function yp(e,t){return Uf(e,t)}function db(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,r){return new db(e,t,n,r)}function cc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hb(e){if(typeof e=="function")return cc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Nu)return 11;if(e===Lu)return 14}return 2}function In(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fi(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")cc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Tr:return or(n.children,o,i,t);case Ru:a=8,o|=8;break;case ps:return e=Ct(12,n,t,o|2),e.elementType=ps,e.lanes=i,e;case gs:return e=Ct(13,n,t,o),e.elementType=gs,e.lanes=i,e;case vs:return e=Ct(19,n,t,o),e.elementType=vs,e.lanes=i,e;case Tf:return aa(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cf:a=10;break e;case kf:a=9;break e;case Nu:a=11;break e;case Lu:a=14;break e;case xn:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ct(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function or(e,t,n,r){return e=Ct(7,e,r,t),e.lanes=n,e}function aa(e,t,n,r){return e=Ct(22,e,r,t),e.elementType=Tf,e.lanes=n,e.stateNode={isHidden:!1},e}function ns(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function rs(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fb(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function dc(e,t,n,r,o,i,a,s,u){return e=new fb(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ct(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(i),e}function mb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bp(e){if(!e)return jn;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(ct(n))return ym(e,n,t)}return t}function wp(e,t,n,r,o,i,a,s,u){return e=dc(n,r,!0,e,o,i,a,s,u),e.context=bp(null),n=e.current,r=nt(),o=Dn(n),i=un(r,o),i.callback=t??null,An(n,i,o),e.current.lanes=o,bo(e,o,r),dt(e,r),e}function sa(e,t,n,r){var o=t.current,i=nt(),a=Dn(o);return n=bp(n),t.context===null?t.context=n:t.pendingContext=n,t=un(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=An(o,t,a),e!==null&&(qt(e,o,a,i),ai(e,o,a)),a}function Bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hc(e,t){sh(e,t),(e=e.alternate)&&sh(e,t)}function pb(){return null}var Fp=typeof reportError=="function"?reportError:function(e){console.error(e)};function fc(e){this._internalRoot=e}ua.prototype.render=fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));sa(e,t,null,null)};ua.prototype.unmount=fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){sa(null,e,null,null)}),t[hn]=null}};function ua(e){this._internalRoot=e}ua.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&Jf(e)}};function mc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uh(){}function gb(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Bi(a);i.call(d)}}var a=wp(t,r,e,0,null,!1,!1,"",uh);return e._reactRootContainer=a,e[hn]=a.current,oo(e.nodeType===8?e.parentNode:e),cr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=Bi(u);s.call(d)}}var u=dc(e,0,!1,null,null,!1,!1,"",uh);return e._reactRootContainer=u,e[hn]=u.current,oo(e.nodeType===8?e.parentNode:e),cr(function(){sa(t,u,n,r)}),u}function da(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var u=Bi(a);s.call(u)}}sa(t,a,e,o)}else a=gb(n,t,e,o,r);return Bi(a)}Kf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dl(t.pendingLanes);n!==0&&(Au(t,n|1),dt(t,Ne()),!(le&6)&&(ll=Ne()+500,Un()))}break;case 13:cr(function(){var r=fn(e,1);if(r!==null){var o=nt();qt(r,e,1,o)}}),hc(e,1)}};Pu=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var n=nt();qt(t,e,134217728,n)}hc(e,134217728)}};Qf=function(e){if(e.tag===13){var t=Dn(e),n=fn(e,t);if(n!==null){var r=nt();qt(n,e,t,r)}hc(e,t)}};Xf=function(){return ce};Zf=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};Ts=function(e,t,n){switch(t){case"input":if(ws(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ta(r);if(!o)throw Error(_(90));Nf(r),ws(r,o)}}}break;case"textarea":$f(e,n);break;case"select":t=n.value,t!=null&&qr(e,!!n.multiple,t,!1)}};jf=ac;Mf=cr;var vb={usingClientEntryPoint:!1,Events:[Fo,$r,ta,If,_f,ac]},Rl={findFiberByHostInstance:er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},yb={bundleType:Rl.bundleType,version:Rl.version,rendererPackageName:Rl.rendererPackageName,rendererConfig:Rl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zf(e),e===null?null:e.stateNode},findFiberByHostInstance:Rl.findFiberByHostInstance||pb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{Xi=Xo.inject(yb),Xt=Xo}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vb;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(t))throw Error(_(200));return mb(e,t,null,n)};wt.createRoot=function(e,t){if(!mc(e))throw Error(_(299));var n=!1,r="",o=Fp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=dc(e,1,!1,null,null,n,!1,r,o),e[hn]=t.current,oo(e.nodeType===8?e.parentNode:e),new fc(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=zf(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return cr(e)};wt.hydrate=function(e,t,n){if(!ca(t))throw Error(_(200));return da(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!mc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Fp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=wp(t,null,e,1,n??null,o,!1,i,a),e[hn]=t.current,oo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ua(t)};wt.render=function(e,t,n){if(!ca(t))throw Error(_(200));return da(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!ca(e))throw Error(_(40));return e._reactRootContainer?(cr(function(){da(null,null,e,!1,function(){e._reactRootContainer=null,e[hn]=null})}),!0):!1};wt.unstable_batchedUpdates=ac;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ca(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return da(e,t,n,!1,r)};wt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=wt})(pv);var ch=hs;ds.createRoot=ch.createRoot,ds.hydrateRoot=ch.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function re(){return re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},re.apply(this,arguments)}var Le;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Le||(Le={}));const dh="popstate";function bb(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return po("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:pn(o)}return Fb(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ol(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wb(){return Math.random().toString(36).substr(2,8)}function hh(e,t){return{usr:e.state,key:e.key,idx:t}}function po(e,t,n,r){return n===void 0&&(n=null),re({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vn(t):t,{state:n,key:t&&t.key||r||wb()})}function pn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Fb(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=Le.Pop,u=null,d=m();d==null&&(d=0,a.replaceState(re({},a.state,{idx:d}),""));function m(){return(a.state||{idx:null}).idx}function p(){s=Le.Pop;let b=m(),g=b==null?null:b-d;d=b,u&&u({action:s,location:E.location,delta:g})}function v(b,g){s=Le.Push;let h=po(E.location,b,g);n&&n(h,b),d=m()+1;let f=hh(h,d),y=E.createHref(h);try{a.pushState(f,"",y)}catch{o.location.assign(y)}i&&u&&u({action:s,location:E.location,delta:1})}function S(b,g){s=Le.Replace;let h=po(E.location,b,g);n&&n(h,b),d=m();let f=hh(h,d),y=E.createHref(h);a.replaceState(f,"",y),i&&u&&u({action:s,location:E.location,delta:0})}function T(b){let g=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof b=="string"?b:pn(b);return X(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let E={get action(){return s},get location(){return e(o,a)},listen(b){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(dh,p),u=b,()=>{o.removeEventListener(dh,p),u=null}},createHref(b){return t(o,b)},createURL:T,encodeLocation(b){let g=T(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:v,replace:S,go(b){return a.go(b)}};return E}var Pe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Pe||(Pe={}));const xb=new Set(["lazy","caseSensitive","path","id","index","children"]);function Sb(e){return e.index===!0}function xp(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let a=[...n,i],s=typeof o.id=="string"?o.id:a.join("-");if(X(o.index!==!0||!o.children,"Cannot specify children on an index route"),X(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),Sb(o)){let u=re({},o,{hasErrorBoundary:t(o),id:s});return r[s]=u,u}else{let u=re({},o,{id:s,hasErrorBoundary:t(o),children:void 0});return r[s]=u,o.children&&(u.children=xp(o.children,t,a,r)),u}})}function jr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?vn(t):t,o=So(r.pathname||"/",n);if(o==null)return null;let i=Sp(e);Eb(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=Ab(i[s],Ib(o));return a}function Sp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(X(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=cn([r,u.relativePath]),m=n.concat(u);i.children&&i.children.length>0&&(X(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Sp(i.children,t,m,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:$b(d,i.index),routesMeta:m})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let u of Ep(i.path))o(i,a,u)}),t}function Ep(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Ep(r.join("/")),s=[];return s.push(...a.map(u=>u===""?i:[i,u].join("/"))),o&&s.push(...a),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function Eb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ob(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Cb=/^:\w+$/,kb=3,Tb=2,Rb=1,Nb=10,Lb=-2,fh=e=>e==="*";function $b(e,t){let n=e.split("/"),r=n.length;return n.some(fh)&&(r+=Lb),t&&(r+=Tb),n.filter(o=>!fh(o)).reduce((o,i)=>o+(Cb.test(i)?kb:i===""?Rb:Nb),r)}function Ob(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Ab(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let s=n[a],u=a===n.length-1,d=o==="/"?t:t.slice(o.length)||"/",m=Pb({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},d);if(!m)return null;Object.assign(r,m.params);let p=s.route;i.push({params:r,pathname:cn([o,m.pathname]),pathnameBase:Bb(cn([o,m.pathnameBase])),route:p}),m.pathnameBase!=="/"&&(o=cn([o,m.pathnameBase]))}return i}function Pb(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Db(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((d,m,p)=>{if(m==="*"){let v=s[p]||"";a=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}return d[m]=_b(s[p]||"",m),d},{}),pathname:i,pathnameBase:a,pattern:e}}function Db(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ol(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Ib(e){try{return decodeURI(e)}catch(t){return ol(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function _b(e,t){try{return decodeURIComponent(e)}catch(n){return ol(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function So(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function jb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?vn(e):e;return{pathname:n?n.startsWith("/")?n:Mb(n,t):t,search:Vb(r),hash:zb(o)}}function Mb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ls(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ha(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function pc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=vn(e):(o=re({},e),X(!o.pathname||!o.pathname.includes("?"),ls("?","pathname","search",o)),X(!o.pathname||!o.pathname.includes("#"),ls("#","pathname","hash",o)),X(!o.search||!o.search.includes("#"),ls("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(r||a==null)s=n;else{let p=t.length-1;if(a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),p-=1;o.pathname=v.join("/")}s=p>=0?t[p]:"/"}let u=jb(o,s),d=a&&a!=="/"&&a.endsWith("/"),m=(i||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||m)&&(u.pathname+="/"),u}const cn=e=>e.join("/").replace(/\/\/+/g,"/"),Bb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Vb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,zb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class gc{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Cp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const kp=["post","put","patch","delete"],qb=new Set(kp),Ub=["get",...kp],Hb=new Set(Ub),Wb=new Set([301,302,303,307,308]),Yb=new Set([307,308]),os={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Gb={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},mh={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Tp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kb=!Rp,Qb=e=>!!e.hasErrorBoundary;function Xb(e){X(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||Qb,n={},r=xp(e.routes,t,void 0,n),o,i=re({v7_normalizeFormMethod:!1},e.future),a=null,s=new Set,u=null,d=null,m=null,p=e.hydrationData!=null,v=jr(r,e.history.location,e.basename),S=null;if(v==null){let R=Gt(404,{pathname:e.history.location.pathname}),{matches:N,route:D}=Fh(r);v=N,S={[D.id]:R}}let T=!v.some(R=>R.route.lazy)&&(!v.some(R=>R.route.loader)||e.hydrationData!=null),E,b={historyAction:e.history.action,location:e.history.location,matches:v,initialized:T,navigation:os,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||S,fetchers:new Map,blockers:new Map},g=Le.Pop,h=!1,f,y=!1,w=!1,F=[],C=[],k=new Map,L=0,A=-1,H=new Map,te=new Set,ie=new Map,ye=new Map,me=new Map,be=!1;function Ve(){return a=e.history.listen(R=>{let{action:N,location:D,delta:z}=R;if(be){be=!1;return}ol(me.size===0||z!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let q=Jc({currentLocation:b.location,nextLocation:D,historyAction:N});if(q&&z!=null){be=!0,e.history.go(z*-1),Po(q,{state:"blocked",location:D,proceed(){Po(q,{state:"proceeding",proceed:void 0,reset:void 0,location:D}),e.history.go(z)},reset(){vl(q),j({blockers:new Map(E.state.blockers)})}});return}return ae(N,D)}),b.initialized||ae(Le.Pop,b.location),E}function P(){a&&a(),s.clear(),f&&f.abort(),b.fetchers.forEach((R,N)=>ka(N)),b.blockers.forEach((R,N)=>vl(N))}function B(R){return s.add(R),()=>s.delete(R)}function j(R){b=re({},b,R),s.forEach(N=>N(b))}function U(R,N){var D,z;let q=b.actionData!=null&&b.navigation.formMethod!=null&&rn(b.navigation.formMethod)&&b.navigation.state==="loading"&&((D=R.state)==null?void 0:D._isRedirect)!==!0,Y;N.actionData?Object.keys(N.actionData).length>0?Y=N.actionData:Y=null:q?Y=b.actionData:Y=null;let G=N.loaderData?wh(b.loaderData,N.loaderData,N.matches||[],N.errors):b.loaderData;for(let[W]of me)vl(W);let Q=h===!0||b.navigation.formMethod!=null&&rn(b.navigation.formMethod)&&((z=R.state)==null?void 0:z._isRedirect)!==!0;o&&(r=o,o=void 0),j(re({},N,{actionData:Y,loaderData:G,historyAction:g,location:R,initialized:!0,navigation:os,revalidation:"idle",restoreScrollPosition:ed(R,N.matches||b.matches),preventScrollReset:Q,blockers:new Map(b.blockers)})),y||g===Le.Pop||(g===Le.Push?e.history.push(R,R.state):g===Le.Replace&&e.history.replace(R,R.state)),g=Le.Pop,h=!1,y=!1,w=!1,F=[],C=[]}async function K(R,N){if(typeof R=="number"){e.history.go(R);return}let{path:D,submission:z,error:q}=ph(R,i,N),Y=b.location,G=po(b.location,D,N&&N.state);G=re({},G,e.history.encodeLocation(G));let Q=N&&N.replace!=null?N.replace:void 0,W=Le.Push;Q===!0?W=Le.Replace:Q===!1||z!=null&&rn(z.formMethod)&&z.formAction===b.location.pathname+b.location.search&&(W=Le.Replace);let de=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0,se=Jc({currentLocation:Y,nextLocation:G,historyAction:W});if(se){Po(se,{state:"blocked",location:G,proceed(){Po(se,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),K(R,N)},reset(){vl(se),j({blockers:new Map(b.blockers)})}});return}return await ae(W,G,{submission:z,pendingError:q,preventScrollReset:de,replace:N&&N.replace})}function ft(){if(Kn(),j({revalidation:"loading"}),b.navigation.state!=="submitting"){if(b.navigation.state==="idle"){ae(b.historyAction,b.location,{startUninterruptedRevalidation:!0});return}ae(g||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation})}}async function ae(R,N,D){f&&f.abort(),f=null,g=R,y=(D&&D.startUninterruptedRevalidation)===!0,_g(b.location,b.matches),h=(D&&D.preventScrollReset)===!0;let z=o||r,q=D&&D.overrideNavigation,Y=jr(z,N,e.basename);if(!Y){let je=Gt(404,{pathname:N.pathname}),{matches:qe,route:At}=Fh(z);Ta(),U(N,{matches:qe,loaderData:{},errors:{[At.id]:je}});return}if(n1(b.location,N)&&!(D&&D.submission&&rn(D.submission.formMethod))){U(N,{matches:Y});return}f=new AbortController;let G=Ll(e.history,N,f.signal,D&&D.submission),Q,W;if(D&&D.pendingError)W={[Mr(Y).route.id]:D.pendingError};else if(D&&D.submission&&rn(D.submission.formMethod)){let je=await ze(G,N,D.submission,Y,{replace:D.replace});if(je.shortCircuited)return;Q=je.pendingActionData,W=je.pendingActionError,q=re({state:"loading",location:N},D.submission),G=new Request(G.url,{signal:G.signal})}let{shortCircuited:de,loaderData:se,errors:Ot}=await Ce(G,N,Y,q,D&&D.submission,D&&D.fetcherSubmission,D&&D.replace,Q,W);de||(f=null,U(N,re({matches:Y},Q?{actionData:Q}:{},{loaderData:se,errors:Ot})))}async function ze(R,N,D,z,q){Kn();let Y=re({state:"submitting",location:N},D);j({navigation:Y});let G,Q=iu(z,N);if(!Q.route.action&&!Q.route.lazy)G={type:Pe.error,error:Gt(405,{method:R.method,pathname:N.pathname,routeId:Q.route.id})};else if(G=await Nl("action",R,Q,z,n,t,E.basename),R.signal.aborted)return{shortCircuited:!0};if(Kr(G)){let W;return q&&q.replace!=null?W=q.replace:W=G.location===b.location.pathname+b.location.search,await Ht(b,G,{submission:D,replace:W}),{shortCircuited:!0}}if(Gl(G)){let W=Mr(z,Q.route.id);return(q&&q.replace)!==!0&&(g=Le.Push),{pendingActionData:{},pendingActionError:{[W.route.id]:G.error}}}if(rr(G))throw Gt(400,{type:"defer-action"});return{pendingActionData:{[Q.route.id]:G.data}}}async function Ce(R,N,D,z,q,Y,G,Q,W){let de=z;de||(de=re({state:"loading",location:N,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},q));let se=q||Y?q||Y:de.formMethod&&de.formAction&&de.formData&&de.formEncType?{formMethod:de.formMethod,formAction:de.formAction,formData:de.formData,formEncType:de.formEncType}:void 0,Ot=o||r,[je,qe]=gh(e.history,b,D,se,N,w,F,C,ie,Ot,e.basename,Q,W);if(Ta(Ye=>!(D&&D.some(Pt=>Pt.route.id===Ye))||je&&je.some(Pt=>Pt.route.id===Ye)),je.length===0&&qe.length===0)return U(N,re({matches:D,loaderData:{},errors:W||null},Q?{actionData:Q}:{})),{shortCircuited:!0};if(!y){qe.forEach(Pt=>{let Qn=b.fetchers.get(Pt.key),wl={state:"loading",data:Qn&&Qn.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};b.fetchers.set(Pt.key,wl)});let Ye=Q||b.actionData;j(re({navigation:de},Ye?Object.keys(Ye).length===0?{actionData:null}:{actionData:Ye}:{},qe.length>0?{fetchers:new Map(b.fetchers)}:{}))}A=++L,qe.forEach(Ye=>k.set(Ye.key,f));let{results:At,loaderResults:yl,fetcherResults:Ra}=await Oo(b.matches,D,je,qe,R);if(R.signal.aborted)return{shortCircuited:!0};qe.forEach(Ye=>k.delete(Ye.key));let bl=xh(At);if(bl)return await Ht(b,bl,{replace:G}),{shortCircuited:!0};let{loaderData:br,errors:Na}=bh(b,D,je,yl,W,qe,Ra,ye);ye.forEach((Ye,Pt)=>{Ye.subscribe(Qn=>{(Qn||Ye.done)&&ye.delete(Pt)})}),Pg();let La=Zc(A);return re({loaderData:br,errors:Na},La||qe.length>0?{fetchers:new Map(b.fetchers)}:{})}function _e(R){return b.fetchers.get(R)||Gb}function Gn(R,N,D,z){if(Kb)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");k.has(R)&&Ao(R);let Y=jr(o||r,D,e.basename);if(!Y){Ca(R,N,Gt(404,{pathname:D}));return}let{path:G,submission:Q}=ph(D,i,z,!0),W=iu(Y,G);if(h=(z&&z.preventScrollReset)===!0,Q&&rn(Q.formMethod)){$o(R,N,G,W,Y,Q);return}ie.set(R,{routeId:N,path:G}),gl(R,N,G,W,Y,Q)}async function $o(R,N,D,z,q,Y){if(Kn(),ie.delete(R),!z.route.action&&!z.route.lazy){let tn=Gt(405,{method:Y.formMethod,pathname:D,routeId:N});Ca(R,N,tn);return}let G=b.fetchers.get(R),Q=re({state:"submitting"},Y,{data:G&&G.data," _hasFetcherDoneAnything ":!0});b.fetchers.set(R,Q),j({fetchers:new Map(b.fetchers)});let W=new AbortController,de=Ll(e.history,D,W.signal,Y);k.set(R,W);let se=await Nl("action",de,z,q,n,t,E.basename);if(de.signal.aborted){k.get(R)===W&&k.delete(R);return}if(Kr(se)){k.delete(R),te.add(R);let tn=re({state:"loading"},Y,{data:void 0," _hasFetcherDoneAnything ":!0});return b.fetchers.set(R,tn),j({fetchers:new Map(b.fetchers)}),Ht(b,se,{submission:Y,isFetchActionRedirect:!0})}if(Gl(se)){Ca(R,N,se.error);return}if(rr(se))throw Gt(400,{type:"defer-action"});let Ot=b.navigation.location||b.location,je=Ll(e.history,Ot,W.signal),qe=o||r,At=b.navigation.state!=="idle"?jr(qe,b.navigation.location,e.basename):b.matches;X(At,"Didn't find any matches after fetcher action");let yl=++L;H.set(R,yl);let Ra=re({state:"loading",data:se.data},Y,{" _hasFetcherDoneAnything ":!0});b.fetchers.set(R,Ra);let[bl,br]=gh(e.history,b,At,Y,Ot,w,F,C,ie,qe,e.basename,{[z.route.id]:se.data},void 0);br.filter(tn=>tn.key!==R).forEach(tn=>{let $a=tn.key,td=b.fetchers.get($a),Vg={state:"loading",data:td&&td.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};b.fetchers.set($a,Vg),k.set($a,W)}),j({fetchers:new Map(b.fetchers)});let{results:Na,loaderResults:La,fetcherResults:Ye}=await Oo(b.matches,At,bl,br,je);if(W.signal.aborted)return;H.delete(R),k.delete(R),br.forEach(tn=>k.delete(tn.key));let Pt=xh(Na);if(Pt)return Ht(b,Pt);let{loaderData:Qn,errors:wl}=bh(b,b.matches,bl,La,void 0,br,Ye,ye),Mg={state:"idle",data:se.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};b.fetchers.set(R,Mg);let Bg=Zc(yl);b.navigation.state==="loading"&&yl>A?(X(g,"Expected pending action"),f&&f.abort(),U(b.navigation.location,{matches:At,loaderData:Qn,errors:wl,fetchers:new Map(b.fetchers)})):(j(re({errors:wl,loaderData:wh(b.loaderData,Qn,At,wl)},Bg?{fetchers:new Map(b.fetchers)}:{})),w=!1)}async function gl(R,N,D,z,q,Y){let G=b.fetchers.get(R),Q=re({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Y,{data:G&&G.data," _hasFetcherDoneAnything ":!0});b.fetchers.set(R,Q),j({fetchers:new Map(b.fetchers)});let W=new AbortController,de=Ll(e.history,D,W.signal);k.set(R,W);let se=await Nl("loader",de,z,q,n,t,E.basename);if(rr(se)&&(se=await Op(se,de.signal,!0)||se),k.get(R)===W&&k.delete(R),de.signal.aborted)return;if(Kr(se)){await Ht(b,se);return}if(Gl(se)){let je=Mr(b.matches,N);b.fetchers.delete(R),j({fetchers:new Map(b.fetchers),errors:{[je.route.id]:se.error}});return}X(!rr(se),"Unhandled fetcher deferred data");let Ot={state:"idle",data:se.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};b.fetchers.set(R,Ot),j({fetchers:new Map(b.fetchers)})}async function Ht(R,N,D){var z;let{submission:q,replace:Y,isFetchActionRedirect:G}=D===void 0?{}:D;N.revalidate&&(w=!0);let Q=po(R.location,N.location,re({_isRedirect:!0},G?{_isFetchActionRedirect:!0}:{}));if(X(Q,"Expected a location on the redirect navigation"),Tp.test(N.location)&&Rp&&typeof((z=window)==null?void 0:z.location)<"u"){let qe=e.history.createURL(N.location),At=So(qe.pathname,e.basename||"/")==null;if(window.location.origin!==qe.origin||At){Y?window.location.replace(N.location):window.location.assign(N.location);return}}f=null;let W=Y===!0?Le.Replace:Le.Push,{formMethod:de,formAction:se,formEncType:Ot,formData:je}=R.navigation;!q&&de&&se&&je&&Ot&&(q={formMethod:de,formAction:se,formEncType:Ot,formData:je}),Yb.has(N.status)&&q&&rn(q.formMethod)?await ae(W,Q,{submission:re({},q,{formAction:N.location}),preventScrollReset:h}):G?await ae(W,Q,{overrideNavigation:{state:"loading",location:Q,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:q,preventScrollReset:h}):await ae(W,Q,{overrideNavigation:{state:"loading",location:Q,formMethod:q?q.formMethod:void 0,formAction:q?q.formAction:void 0,formEncType:q?q.formEncType:void 0,formData:q?q.formData:void 0},preventScrollReset:h})}async function Oo(R,N,D,z,q){let Y=await Promise.all([...D.map(W=>Nl("loader",q,W,N,n,t,E.basename)),...z.map(W=>W.matches&&W.match?Nl("loader",Ll(e.history,W.path,q.signal),W.match,W.matches,n,t,E.basename):{type:Pe.error,error:Gt(404,{pathname:W.path})})]),G=Y.slice(0,D.length),Q=Y.slice(D.length);return await Promise.all([Sh(R,D,G,q.signal,!1,b.loaderData),Sh(R,z.map(W=>W.match),Q,q.signal,!0)]),{results:Y,loaderResults:G,fetcherResults:Q}}function Kn(){w=!0,F.push(...Ta()),ie.forEach((R,N)=>{k.has(N)&&(C.push(N),Ao(N))})}function Ca(R,N,D){let z=Mr(b.matches,N);ka(R),j({errors:{[z.route.id]:D},fetchers:new Map(b.fetchers)})}function ka(R){k.has(R)&&Ao(R),ie.delete(R),H.delete(R),te.delete(R),b.fetchers.delete(R)}function Ao(R){let N=k.get(R);X(N,"Expected fetch controller: "+R),N.abort(),k.delete(R)}function Xc(R){for(let N of R){let z={state:"idle",data:_e(N).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};b.fetchers.set(N,z)}}function Pg(){let R=[];for(let N of te){let D=b.fetchers.get(N);X(D,"Expected fetcher: "+N),D.state==="loading"&&(te.delete(N),R.push(N))}Xc(R)}function Zc(R){let N=[];for(let[D,z]of H)if(z<R){let q=b.fetchers.get(D);X(q,"Expected fetcher: "+D),q.state==="loading"&&(Ao(D),H.delete(D),N.push(D))}return Xc(N),N.length>0}function Dg(R,N){let D=b.blockers.get(R)||mh;return me.get(R)!==N&&me.set(R,N),D}function vl(R){b.blockers.delete(R),me.delete(R)}function Po(R,N){let D=b.blockers.get(R)||mh;X(D.state==="unblocked"&&N.state==="blocked"||D.state==="blocked"&&N.state==="blocked"||D.state==="blocked"&&N.state==="proceeding"||D.state==="blocked"&&N.state==="unblocked"||D.state==="proceeding"&&N.state==="unblocked","Invalid blocker state transition: "+D.state+" -> "+N.state),b.blockers.set(R,N),j({blockers:new Map(b.blockers)})}function Jc(R){let{currentLocation:N,nextLocation:D,historyAction:z}=R;if(me.size===0)return;me.size>1&&ol(!1,"A router only supports one blocker at a time");let q=Array.from(me.entries()),[Y,G]=q[q.length-1],Q=b.blockers.get(Y);if(!(Q&&Q.state==="proceeding")&&G({currentLocation:N,nextLocation:D,historyAction:z}))return Y}function Ta(R){let N=[];return ye.forEach((D,z)=>{(!R||R(z))&&(D.cancel(),N.push(z),ye.delete(z))}),N}function Ig(R,N,D){if(u=R,m=N,d=D||(z=>z.key),!p&&b.navigation===os){p=!0;let z=ed(b.location,b.matches);z!=null&&j({restoreScrollPosition:z})}return()=>{u=null,m=null,d=null}}function _g(R,N){if(u&&d&&m){let D=N.map(q=>Eh(q,b.loaderData)),z=d(R,D)||R.key;u[z]=m()}}function ed(R,N){if(u&&d&&m){let D=N.map(Y=>Eh(Y,b.loaderData)),z=d(R,D)||R.key,q=u[z];if(typeof q=="number")return q}return null}function jg(R){o=R}return E={get basename(){return e.basename},get state(){return b},get routes(){return r},initialize:Ve,subscribe:B,enableScrollRestoration:Ig,navigate:K,fetch:Gn,revalidate:ft,createHref:R=>e.history.createHref(R),encodeLocation:R=>e.history.encodeLocation(R),getFetcher:_e,deleteFetcher:ka,dispose:P,getBlocker:Dg,deleteBlocker:vl,_internalFetchControllers:k,_internalActiveDeferreds:ye,_internalSetRoutes:jg},E}function Zb(e){return e!=null&&"formData"in e}function ph(e,t,n,r){r===void 0&&(r=!1);let o=typeof e=="string"?e:pn(e);if(!n||!Zb(n))return{path:o};if(n.formMethod&&!o1(n.formMethod))return{path:o,error:Gt(405,{method:n.formMethod})};let i;if(n.formData){let u=n.formMethod||"get";if(i={formMethod:t.v7_normalizeFormMethod?u.toUpperCase():u.toLowerCase(),formAction:$p(o),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},rn(i.formMethod))return{path:o,submission:i}}let a=vn(o),s=Lp(n.formData);return r&&a.search&&Ap(a.search)&&s.append("index",""),a.search="?"+s,{path:pn(a),submission:i}}function Jb(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function gh(e,t,n,r,o,i,a,s,u,d,m,p,v){let S=v?Object.values(v)[0]:p?Object.values(p)[0]:void 0,T=e.createURL(t.location),E=e.createURL(o),b=i||T.toString()===E.toString()||T.search!==E.search,g=v?Object.keys(v)[0]:void 0,f=Jb(n,g).filter((w,F)=>{if(w.route.lazy)return!0;if(w.route.loader==null)return!1;if(e1(t.loaderData,t.matches[F],w)||a.some(L=>L===w.route.id))return!0;let C=t.matches[F],k=w;return vh(w,re({currentUrl:T,currentParams:C.params,nextUrl:E,nextParams:k.params},r,{actionResult:S,defaultShouldRevalidate:b||Np(C,k)}))}),y=[];return u.forEach((w,F)=>{if(!n.some(A=>A.route.id===w.routeId))return;let C=jr(d,w.path,m);if(!C){y.push(re({key:F},w,{matches:null,match:null}));return}let k=iu(C,w.path);if(s.includes(F)){y.push(re({key:F,matches:C,match:k},w));return}vh(k,re({currentUrl:T,currentParams:t.matches[t.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:S,defaultShouldRevalidate:b}))&&y.push(re({key:F,matches:C,match:k},w))}),[f,y]}function e1(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function Np(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function vh(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function yh(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];X(o,"No route found in manifest");let i={};for(let a in r){let u=o[a]!==void 0&&a!=="hasErrorBoundary";ol(!u,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!u&&!xb.has(a)&&(i[a]=r[a])}Object.assign(o,i),Object.assign(o,{hasErrorBoundary:t(re({},o)),lazy:void 0})}async function Nl(e,t,n,r,o,i,a,s,u,d){a===void 0&&(a="/"),s===void 0&&(s=!1),u===void 0&&(u=!1);let m,p,v,S=b=>{let g,h=new Promise((f,y)=>g=y);return v=()=>g(),t.signal.addEventListener("abort",v),Promise.race([b({request:t,params:n.params,context:d}),h])};try{let b=n.route[e];if(n.route.lazy)if(b)p=(await Promise.all([S(b),yh(n.route,i,o)]))[0];else if(await yh(n.route,i,o),b=n.route[e],b)p=await S(b);else{if(e==="action")throw Gt(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:Pe.data,data:void 0}}else X(b,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),p=await S(b);X(p!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(b){m=Pe.error,p=b}finally{v&&t.signal.removeEventListener("abort",v)}if(l1(p)){let b=p.status;if(Wb.has(b)){let f=p.headers.get("Location");if(X(f,"Redirects returned/thrown from loaders/actions must have a Location header"),Tp.test(f)){if(!s){let y=new URL(t.url),w=f.startsWith("//")?new URL(y.protocol+f):new URL(f),F=So(w.pathname,a)!=null;w.origin===y.origin&&F&&(f=w.pathname+w.search+w.hash)}}else{let y=r.slice(0,r.indexOf(n)+1),w=ha(y).map(C=>C.pathnameBase),F=pc(f,w,new URL(t.url).pathname);if(X(pn(F),"Unable to resolve redirect location: "+f),a){let C=F.pathname;F.pathname=C==="/"?a:cn([a,C])}f=pn(F)}if(s)throw p.headers.set("Location",f),p;return{type:Pe.redirect,status:b,location:f,revalidate:p.headers.get("X-Remix-Revalidate")!==null}}if(u)throw{type:m||Pe.data,response:p};let g,h=p.headers.get("Content-Type");return h&&/\bapplication\/json\b/.test(h)?g=await p.json():g=await p.text(),m===Pe.error?{type:m,error:new gc(b,p.statusText,g),headers:p.headers}:{type:Pe.data,data:g,statusCode:p.status,headers:p.headers}}if(m===Pe.error)return{type:m,error:p};if(r1(p)){var T,E;return{type:Pe.deferred,deferredData:p,statusCode:(T=p.init)==null?void 0:T.status,headers:((E=p.init)==null?void 0:E.headers)&&new Headers(p.init.headers)}}return{type:Pe.data,data:p}}function Ll(e,t,n,r){let o=e.createURL($p(t)).toString(),i={signal:n};if(r&&rn(r.formMethod)){let{formMethod:a,formEncType:s,formData:u}=r;i.method=a.toUpperCase(),i.body=s==="application/x-www-form-urlencoded"?Lp(u):u}return new Request(o,i)}function Lp(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function t1(e,t,n,r,o){let i={},a=null,s,u=!1,d={};return n.forEach((m,p)=>{let v=t[p].route.id;if(X(!Kr(m),"Cannot handle redirect results in processLoaderData"),Gl(m)){let S=Mr(e,v),T=m.error;r&&(T=Object.values(r)[0],r=void 0),a=a||{},a[S.route.id]==null&&(a[S.route.id]=T),i[v]=void 0,u||(u=!0,s=Cp(m.error)?m.error.status:500),m.headers&&(d[v]=m.headers)}else rr(m)?(o.set(v,m.deferredData),i[v]=m.deferredData.data):i[v]=m.data,m.statusCode!=null&&m.statusCode!==200&&!u&&(s=m.statusCode),m.headers&&(d[v]=m.headers)}),r&&(a=r,i[Object.keys(r)[0]]=void 0),{loaderData:i,errors:a,statusCode:s||200,loaderHeaders:d}}function bh(e,t,n,r,o,i,a,s){let{loaderData:u,errors:d}=t1(t,n,r,o,s);for(let m=0;m<i.length;m++){let{key:p,match:v}=i[m];X(a!==void 0&&a[m]!==void 0,"Did not find corresponding fetcher result");let S=a[m];if(Gl(S)){let T=Mr(e.matches,v==null?void 0:v.route.id);d&&d[T.route.id]||(d=re({},d,{[T.route.id]:S.error})),e.fetchers.delete(p)}else if(Kr(S))X(!1,"Unhandled fetcher revalidation redirect");else if(rr(S))X(!1,"Unhandled fetcher deferred data");else{let T={state:"idle",data:S.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(p,T)}}return{loaderData:u,errors:d}}function wh(e,t,n,r){let o=re({},t);for(let i of n){let a=i.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(o[a]=t[a]):e[a]!==void 0&&i.route.loader&&(o[a]=e[a]),r&&r.hasOwnProperty(a))break}return o}function Mr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Fh(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Gt(e,t){let{pathname:n,routeId:r,method:o,type:i}=t===void 0?{}:t,a="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(a="Bad Request",o&&n&&r?s="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"&&(s="defer() is not supported in actions")):e===403?(a="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",s='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",o&&n&&r?s="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new gc(e||500,a,new Error(s),!0)}function xh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Kr(n))return n}}function $p(e){let t=typeof e=="string"?vn(e):e;return pn(re({},t,{hash:""}))}function n1(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function rr(e){return e.type===Pe.deferred}function Gl(e){return e.type===Pe.error}function Kr(e){return(e&&e.type)===Pe.redirect}function r1(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function l1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function o1(e){return Hb.has(e.toLowerCase())}function rn(e){return qb.has(e.toLowerCase())}async function Sh(e,t,n,r,o,i){for(let a=0;a<n.length;a++){let s=n[a],u=t[a];if(!u)continue;let d=e.find(p=>p.route.id===u.route.id),m=d!=null&&!Np(d,u)&&(i&&i[u.route.id])!==void 0;rr(s)&&(o||m)&&await Op(s,r,o).then(p=>{p&&(n[a]=p||n[a])})}}async function Op(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Pe.data,data:e.deferredData.unwrappedData}}catch(o){return{type:Pe.error,error:o}}return{type:Pe.data,data:e.deferredData.data}}}function Ap(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Eh(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function iu(e,t){let n=typeof t=="string"?vn(t).search:t.search;if(e[e.length-1].route.index&&Ap(n||""))return e[e.length-1];let r=ha(e);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function i1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const a1=typeof Object.is=="function"?Object.is:i1,{useState:s1,useEffect:u1,useLayoutEffect:c1,useDebugValue:d1}=cs;function h1(e,t,n){const r=t(),[{inst:o},i]=s1({inst:{value:r,getSnapshot:t}});return c1(()=>{o.value=r,o.getSnapshot=t,is(o)&&i({inst:o})},[e,r,t]),u1(()=>(is(o)&&i({inst:o}),e(()=>{is(o)&&i({inst:o})})),[e]),d1(r),r}function is(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!a1(n,r)}catch{return!0}}function f1(e,t,n){return t()}const m1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",p1=!m1,g1=p1?f1:h1,v1="useSyncExternalStore"in cs?(e=>e.useSyncExternalStore)(cs):g1,vc=$.createContext(null),fa=$.createContext(null),cl=$.createContext(null),ma=$.createContext(null),fr=$.createContext({outlet:null,matches:[]}),Pp=$.createContext(null);function au(){return au=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},au.apply(this,arguments)}function y1(e,t){let{relative:n}=t===void 0?{}:t;Eo()||X(!1);let{basename:r,navigator:o}=$.useContext(cl),{hash:i,pathname:a,search:s}=Co(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:cn([r,a])),o.createHref({pathname:u,search:s,hash:i})}function Eo(){return $.useContext(ma)!=null}function dl(){return Eo()||X(!1),$.useContext(ma).location}function b1(){Eo()||X(!1);let{basename:e,navigator:t}=$.useContext(cl),{matches:n}=$.useContext(fr),{pathname:r}=dl(),o=JSON.stringify(ha(n).map(s=>s.pathnameBase)),i=$.useRef(!1);return $.useEffect(()=>{i.current=!0}),$.useCallback(function(s,u){if(u===void 0&&(u={}),!i.current)return;if(typeof s=="number"){t.go(s);return}let d=pc(s,JSON.parse(o),r,u.relative==="path");e!=="/"&&(d.pathname=d.pathname==="/"?e:cn([e,d.pathname])),(u.replace?t.replace:t.push)(d,u.state,u)},[e,t,o,r])}const w1=$.createContext(null);function F1(e){let t=$.useContext(fr).outlet;return t&&$.createElement(w1.Provider,{value:e},t)}function Co(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=$.useContext(fr),{pathname:o}=dl(),i=JSON.stringify(ha(r).map(a=>a.pathnameBase));return $.useMemo(()=>pc(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function x1(e,t){Eo()||X(!1);let{navigator:n}=$.useContext(cl),r=$.useContext(fa),{matches:o}=$.useContext(fr),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=dl(),d;if(t){var m;let E=typeof t=="string"?vn(t):t;s==="/"||(m=E.pathname)!=null&&m.startsWith(s)||X(!1),d=E}else d=u;let p=d.pathname||"/",v=s==="/"?p:p.slice(s.length)||"/",S=jr(e,{pathname:v}),T=k1(S&&S.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:cn([s,n.encodeLocation?n.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?s:cn([s,n.encodeLocation?n.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),o,r||void 0);return t&&T?$.createElement(ma.Provider,{value:{location:au({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Le.Pop}},T):T}function S1(){let e=L1(),t=Cp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},t),n?$.createElement("pre",{style:o},n):null,i)}class E1 extends $.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?$.createElement(fr.Provider,{value:this.props.routeContext},$.createElement(Pp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function C1(e){let{routeContext:t,match:n,children:r}=e,o=$.useContext(vc);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(fr.Provider,{value:t},r)}function k1(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));i>=0||X(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,a,s)=>{let u=a.route.id?o==null?void 0:o[a.route.id]:null,d=null;n&&(a.route.ErrorBoundary?d=$.createElement(a.route.ErrorBoundary,null):a.route.errorElement?d=a.route.errorElement:d=$.createElement(S1,null));let m=t.concat(r.slice(0,s+1)),p=()=>{let v=i;return u?v=d:a.route.Component?v=$.createElement(a.route.Component,null):a.route.element&&(v=a.route.element),$.createElement(C1,{match:a,routeContext:{outlet:i,matches:m},children:v})};return n&&(a.route.ErrorBoundary||a.route.errorElement||s===0)?$.createElement(E1,{location:n.location,component:d,error:u,children:p(),routeContext:{outlet:null,matches:m}}):p()},null)}var Ch;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Ch||(Ch={}));var Vi;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Vi||(Vi={}));function T1(e){let t=$.useContext(fa);return t||X(!1),t}function R1(e){let t=$.useContext(fr);return t||X(!1),t}function N1(e){let t=R1(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function L1(){var e;let t=$.useContext(Pp),n=T1(Vi.UseRouteError),r=N1(Vi.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function $1(e){let{fallbackElement:t,router:n}=e,r=$.useCallback(()=>n.state,[n]),o=v1(n.subscribe,r,r),i=$.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:u=>n.navigate(u),push:(u,d,m)=>n.navigate(u,{state:d,preventScrollReset:m==null?void 0:m.preventScrollReset}),replace:(u,d,m)=>n.navigate(u,{replace:!0,state:d,preventScrollReset:m==null?void 0:m.preventScrollReset})}),[n]),a=n.basename||"/",s=$.useMemo(()=>({router:n,navigator:i,static:!1,basename:a}),[n,i,a]);return $.createElement($.Fragment,null,$.createElement(vc.Provider,{value:s},$.createElement(fa.Provider,{value:o},$.createElement(A1,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?$.createElement(yn,null):t))),null)}function O1(e){return F1(e.context)}function M(e){X(!1)}function A1(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Le.Pop,navigator:i,static:a=!1}=e;Eo()&&X(!1);let s=t.replace(/^\/*/,"/"),u=$.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof r=="string"&&(r=vn(r));let{pathname:d="/",search:m="",hash:p="",state:v=null,key:S="default"}=r,T=$.useMemo(()=>{let E=So(d,s);return E==null?null:{location:{pathname:E,search:m,hash:p,state:v,key:S},navigationType:o}},[s,d,m,p,v,S,o]);return T==null?null:$.createElement(cl.Provider,{value:u},$.createElement(ma.Provider,{children:n,value:T}))}function yn(e){let{children:t,location:n}=e,r=$.useContext(vc),o=r&&!t?r.router.routes:su(t);return x1(o,n)}var kh;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(kh||(kh={}));new Promise(()=>{});function su(e,t){t===void 0&&(t=[]);let n=[];return $.Children.forEach(e,(r,o)=>{if(!$.isValidElement(r))return;let i=[...t,o];if(r.type===$.Fragment){n.push.apply(n,su(r.props.children,i));return}r.type!==M&&X(!1),!r.props.index||!r.props.children||X(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=su(r.props.children,i)),n.push(a)}),n}function P1(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},go.apply(this,arguments)}function Dp(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function D1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function I1(e,t){return e.button===0&&(!t||t==="_self")&&!D1(e)}const _1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],j1=["aria-current","caseSensitive","className","end","style","to","children"];function M1(e,t){return Xb({basename:t==null?void 0:t.basename,future:t==null?void 0:t.future,history:bb({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||B1(),routes:e,detectErrorBoundary:P1}).initialize()}function B1(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=go({},t,{errors:V1(t.errors)})),t}function V1(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new gc(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){let i=new Error(o.message);i.stack="",n[r]=i}else n[r]=o;return n}const z1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",q1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,U1=$.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:u,to:d,preventScrollReset:m}=t,p=Dp(t,_1),{basename:v}=$.useContext(cl),S,T=!1;if(typeof d=="string"&&q1.test(d)&&(S=d,z1)){let h=new URL(window.location.href),f=d.startsWith("//")?new URL(h.protocol+d):new URL(d),y=So(f.pathname,v);f.origin===h.origin&&y!=null?d=y+f.search+f.hash:T=!0}let E=y1(d,{relative:o}),b=W1(d,{replace:a,state:s,target:u,preventScrollReset:m,relative:o});function g(h){r&&r(h),h.defaultPrevented||b(h)}return $.createElement("a",go({},p,{href:S||E,onClick:T||i?r:g,ref:n,target:u}))}),H1=$.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:s,to:u,children:d}=t,m=Dp(t,j1),p=Co(u,{relative:m.relative}),v=dl(),S=$.useContext(fa),{navigator:T}=$.useContext(cl),E=T.encodeLocation?T.encodeLocation(p).pathname:p.pathname,b=v.pathname,g=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;o||(b=b.toLowerCase(),g=g?g.toLowerCase():null,E=E.toLowerCase());let h=b===E||!a&&b.startsWith(E)&&b.charAt(E.length)==="/",f=g!=null&&(g===E||!a&&g.startsWith(E)&&g.charAt(E.length)==="/"),y=h?r:void 0,w;typeof i=="function"?w=i({isActive:h,isPending:f}):w=[i,h?"active":null,f?"pending":null].filter(Boolean).join(" ");let F=typeof s=="function"?s({isActive:h,isPending:f}):s;return $.createElement(U1,go({},m,{"aria-current":y,className:w,ref:n,style:F,to:u}),typeof d=="function"?d({isActive:h,isPending:f}):d)});var Th;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Th||(Th={}));var Rh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rh||(Rh={}));function W1(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,s=b1(),u=dl(),d=Co(e,{relative:a});return $.useCallback(m=>{if(I1(m,n)){m.preventDefault();let p=r!==void 0?r:pn(u)===pn(d);s(e,{replace:p,state:o,preventScrollReset:i,relative:a})}},[u,s,d,r,o,n,e,i,a])}const J=({to:e,end:t,text:n,children:r,className:o=""})=>l(H1,{to:e,end:t,className:o,children:n||r});function Y1(e){return typeof e=="boolean"}function Hn(e){return typeof e=="string"}function hl(e){return Array.isArray(e)}function yc(e){return typeof e=="function"}function G1(e){return e instanceof RegExp}function bc(e){return typeof e=="object"&&!hl(e)&&!Ip(e)}function K1(e){return e===void 0}function Ip(e){return e===null}function pa(e){return!(K1(e)||Ip(e))}function Q1(e){return!pa(e)}function il(...e){throw new Error(e.join(""))}function Qr(){}function X1(){return Intl.DateTimeFormat().resolvedOptions().locale}X1();function _p(e){return Q1(e)?[]:Hn(e)?e.length?e.split(/,\s*|\s+/):[]:hl(e)?e:[e]}function jp(e,t=!0,n={}){return bc(e)?e:_p(e).reduce((r,o)=>(r[o]=yc(t)?t(o):t,r),n)}function Z1(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function J1(e){if(yc(e))return e;if(G1(e))return t=>e.test(t);if(bc(e))return t=>!!e[t];if(hl(e)||Hn(e)){const t=jp(e);return n=>!!t[n]}il("Invalid selector() specification: "+e)}const e0=(e,t,n={})=>{let r={},o={delete:!1,...n};const i=J1(t);return Object.keys(e).map(a=>{if(i(a)){let s=e[a];o.delete&&delete e[a],o.key&&(a=o.key(a)),o.value&&(s=o.value(s)),r[a]=s}}),r};function t0(e){return new Promise(t=>setTimeout(t,e))}function n0({icon:e,transform:t,children:n}){const{width:r,height:o}=e,i=r/2,a=o/2,s=Hn(t)?r0(t):t,u=s.x*r/16,d=s.y*o/16,m=s.size/16*(s.flipX?-1:1),p=s.size/16*(s.flipY?-1:1),v=s.rotate;return l("g",{transform:`translate(${i} ${a})`,children:l("g",{transform:`translate(${u}, ${d}) scale(${m}, ${p}) rotate(${v} 0 0)`,children:l("g",{transform:`translate(-${i} -${a})`,children:n})})})}function r0(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const o=r.toLowerCase().split("-"),i=o[0],a=o.slice(1).join("-");if(i&&a==="h")return n.flipX=!0,n;if(i&&a==="v")return n.flipY=!0,n;const s=parseFloat(a);if(isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)}const l0=16,Fn=e=>`${l0*e}px`,o0={default:{fill:"none",stroke:"currentColor",strokeWidth:Fn(4),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},line:{fill:"none",stroke:"currentColor"},fill:{fill:"currentColor"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinner:{strokeWidth:Fn(.5)},thin:{strokeWidth:Fn(1)},light:{strokeWidth:Fn(2)},medium:{strokeWidth:Fn(3)},heavy:{strokeWidth:Fn(4)},thick:{strokeWidth:Fn(5)},thicker:{strokeWidth:Fn(6)}},i0=o0.default,a0={angle:"M448.075,320.014L256.031,127.969L63.925,320.075","angle-up":{base:"angle"},"angle-right":{base:"angle",transform:"rotate-90"},"angle-down":{base:"angle",transform:"rotate-180"},"angle-left":{base:"angle",transform:"rotate-270"},angles:"M448,256L256,64L64,256M448,448L256,256L64,448",arrow:"M256,448L256,64L112,208L256,64L400,208L256,64M112,208L120,200M400,208L392,200",arrows:"M144,176L256,64L256,448L144,336L256,448L368,336L256,448L256,64L368,176L256,64M144,176L152,168M368,176L360,168M144,336L152,344M368,336L360,344",caret:"M267 139a15 15 0 0 0-22 0L90 294a15 15 0 0 0 10 26h312a15 15 0 0 0 10-26L267 139Z",check:"M64,268L184,388L448,124",circle:"M256,64C309,64 357,86 392,121C427,155 448,203 448,256C448,362 362,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64Z",cross:"M424,88L88,424M88,88L424,424",point:"M112,208L256,64L400,208L304,208L304,448L208,448L208,208L112,208Z",points:"M112,208L256,64L400,208L304,208L304,304L400,304L255.989,448.011L110.877,302.898L208,304L208,208L112,208Z",square:"M64,64L448,64L448,448L64,448Z",square10:"M448 102c0-21-17-38-38-38H102c-21 0-38 17-38 38v308c0 21 17 38 38 38h308c21 0 38-17 38-38V102Z",square20:"M448,141C448,98 413,64 371,64L141,64C98,64 64,98 64,141L64,371C64,414 98,448 141,448L371,448C414,448 448,414 448,371L448,141Z",square30:"M448,179C448,116 396,64 333,64L179,64C116,64 64,116 64,179L64,333C64,396 116,448 179,448L333,448C396,448 448,396 448,333L448,179Z",square40:"M448,218C448,133 379,64 294,64L218,64C133,64 64,133 64,218L64,294C64,379 133,448 218,448L294,448C379,448 448,379 448,294L448,218Z"},Mp=e=>{const t=a0[e]||il(`Invalid icon name: ${e}`);if(Hn(t))return{width:512,height:512,path:t};if(t.base)return{...Mp(t.base),...t}},s0=({name:e,className:t="",...n})=>{const r=Mp(e),{minx:o=0,miny:i=0,width:a,height:s,transform:u}=r,d=i0;return l("svg",{"aria-hidden":"true",focusable:"false",className:`icon ${t}`,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`${o} ${i} ${a} ${s}`,style:d,onClick:n.onClick,children:u?l(n0,{name:e,icon:r,transform:u,className:t,children:l(Nh,{name:e,icon:r,style:d,className:t})}):l(Nh,{name:e,icon:r,style:d,className:t})})},Nh=({icon:e,style:t,className:n=""})=>{const{paths:r,path:o}=e;if(r)return r.map((i,a)=>l(Lh,{path:i,style:t,className:n},a));if(o)return l(Lh,{path:o,style:t,className:n});console.log("No path or paths for icon")},Lh=({path:e,style:t,className:n})=>Hn(e)?l("path",{fill:"currentColor",d:e,style:t,className:n}):l(u0,{path:e,style:t,className:n}),u0=({path:e,style:t})=>{const{d:n,opacity:r=null}=e;return l("path",{d:n,fill:"currentColor",opacity:r,style:t})},Br={title:"Tutorial",url:"/tutorial",items:[["simple-form","Defining a Form"],["field-validation","Field Validation"],["form-validation","Form Validation"],["form-submission","Form Submission"],["submission-response","Submission Response"],["submission-errors","Submission Errors"],["complete-registration","Complete Registration Form"],["edit-form","Edit Form"],["headless-fields","Headless Fields"]]},Bp={title:"Components",url:"/components",items:["component:Form","component:Field","component:Fields","component:Fieldset","component:Submit","component:Reset","component:Cancel","component:ResetSubmit","component:CancelSubmit","component:CancelResetSubmit","component:Changed","component:Label","component:Errors","component:Debug"]},c0={title:"Form",url:"/form",items:[{heading:"Properties"},"form:fields","form:values","form:hidden",["properties","Properties - TODO"],["validation","Validation"],["validate",l("code",{children:"validate - TODO"},"validate")],["onSubmit",l("code",{children:"onSubmit - TODO"},"onsubmit")],["onSuccess",l("code",{children:"onSuccess - TODO"},"onsuccess")],["onError",l("code",{children:"onError - TODO"},"onsuccess")],["showErrors",l("code",{children:"showErrors - TODO"},"showerrors")],{heading:"Functions"},["setValues",l("code",{children:"setValues() - TODO"},"setValues")],["setFocus",l("code",{children:"setFocus()"},"setFocus")],{heading:"Styling"},["className",l("code",{children:"className - TODO"},"classname")],["validatingClass",l("code",{children:"validatingClass - TODO"},"validatingClass")],["validClass",l("code",{children:"validClass - TODO"},"validClass")],["invalidClass",l("code",{children:"invalidClass - TODO"},"invalidClass")],["errorsClass",l("code",{children:"errorsClass - TODO"},"errorsClass")],["fieldClass",l("code",{children:"fieldClass - TODO"},"fieldClass")]]},d0={title:"Field",url:"/field",items:[{heading:"Properties"},"field:name","field:label","field:type","field:help",["prefix-suffix",c("span",{children:[l("code",{children:"prefix"})," and ",l("code",{children:"suffix"})]},"prefix-suffix")],{heading:"Validation"},"field:required","field:showRequired","field:requiredLabel","field:requiredMessage","field:showOptional","field:optionalLabel","field:prepareValue","field:validate","field:validateOnBlur","field:validateOnChange",{heading:"Events"},"field:onFocus","field:onBlur","field:onChange","field:onValid","field:onInvalid",{heading:"Functions"},"field:setFocus","field:setValue","field:reset"]},uu={title:"Input Types",url:"/inputs",items:["input:Text","input:TextArea","input:Checkbox","input:Radio","input:Select","input:Hidden",["number","Number, Date, etc"]]},wc={"component:Form":{url:"/components/Form",text:"Form",about:"Main component for a form",menu:c0},"component:Field":{url:"/components/Field",text:"Field",about:"Render a form field",menu:d0},"component:Fields":{url:"/components/Fields",text:"Fields",about:"Render multiple form fields"},"component:Fieldset":{url:"/components/Fieldset",text:"Fieldset",about:"Render a set of fields"},"component:Changed":{url:"/components/Changed",text:"Changed",about:"Renders children only when a form state has changed"},"component:Submit":{url:"/components/Submit",text:"Submit",about:"Render a form submit button"},"component:Reset":{url:"/components/Reset",text:"Reset",about:"Render a form reset button"},"component:Cancel":{url:"/components/Cancel",text:"Cancel",about:"Render a cancel button"},"component:ResetSubmit":{url:"/components/ResetSubmit",text:"ResetSubmit",about:"Render reset and submit buttons"},"component:CancelSubmit":{url:"/components/CancelSubmit",text:"CancelSubmit",about:"Render cancel and submit buttons"},"component:CancelResetSubmit":{url:"/components/CancelResetSubmit",text:"CancelResetSubmit",about:"Render cancel, reset and submit buttons"},"component:Label":{url:"/components/Label",text:"Label",about:"Render a label for a form field"},"component:Errors":{url:"/components/Errors",text:"Errors",about:"Render form errors"},"component:Debug":{url:"/components/Debug",text:"Debug",about:"Render debugging information for a form"},"form:fields":{url:"/components/Form/fields",code:"fields",about:"Properties for form fields"},"form:values":{url:"/components/Form/values",code:"values",about:"Values for form fields"},"form:hidden":{url:"/components/Form/hidden",code:"hidden",about:"Hidden values for a form"},"form:setFocus":{url:"/components/Form/setFocus",code:"setFocus",about:"Focus a form field"},"form:setValues":{url:"/components/Form/setValues",code:"setValues",about:"Set form values"},"field:help":{url:"/components/Field/help",code:"help",about:"Additional help for a field"},"field:label":{url:"/components/Field/label",code:"label",about:"A label for the field"},"field:name":{url:"/components/Field/name",code:"name",about:"The field name"},"field:onBlur":{url:"/components/Field/onBlur",code:"onBlur",about:"Define a handler to be called when a field loses focus"},"field:onChange":{url:"/components/Field/onChange",code:"onChange",about:"Define a handler to be called when a field value changes"},"field:onFocus":{url:"/components/Field/onFocus",code:"onFocus",about:"Define a handler to be called when a field gains focus"},"field:onInvalid":{url:"/components/Field/onInvalid",code:"onInvalid",about:"Define a handler to be called when a field fails validation"},"field:onValid":{url:"/components/Field/onValid",code:"onValid",about:"Define a handler to be called when a field passes validation"},"field:optionalLabel":{url:"/components/Field/optionalLabel",code:"optionalLabel",about:"Customise the label displayed for optional fields"},"field:prefix":{url:"/components/Field/prefix",code:"prefix",about:"Add a prefix to a field"},"field:prepareValue":{url:"/components/Field/prepareValue",code:"prepareValue",about:"Define a handler to prepare the value entered for a field"},"field:required":{url:"/components/Field/required",code:"required",about:"Mark a field as being required"},"field:requiredLabel":{url:"/components/Field/requiredLabel",code:"requiredLabel",about:"Customise the label displayed for required fields"},"field:requiredMessage":{url:"/components/Field/requiredMessage",code:"requiredMessage",about:"Customise the error message generated for required fields"},"field:reset":{url:"/components/Field/reset",code:"reset",about:"Reset a field to its original state"},"field:setFocus":{url:"/components/Field/setFocus",code:"setFocus",about:"Focus a field"},"field:setValue":{url:"/components/Field/setValue",code:"setValue",about:"Set a field value"},"field:showOptional":{url:"/components/Field/showOptional",code:"showOptional",about:"Enable the label shown for optional fields"},"field:showRequired":{url:"/components/Field/showRequired",code:"showRequired",about:"Enable the label shown for required fields"},"field:suffix":{url:"/components/Field/suffix",code:"suffix",about:"Add a suffix to a field"},"field:type":{url:"/components/Field/type",code:"type",about:"The input type for a field"},"field:validate":{url:"/components/Field/validate",code:"validate",about:"Handler to validate field input"},"field:validateOnBlur":{url:"/components/Field/validateOnBlur",code:"validateOnBlur",about:"Run field validation when it loses focus"},"field:validateOnChange":{url:"/components/Field/validateOnChange",code:"validateOnChange",about:"Run field validation when the value changes"},"input:types":{url:"/inputs",text:"Input Types",about:"Input components"},"input:Text":{url:"/inputs/Text",text:"Text",about:"Text input"},"input:TextArea":{url:"/inputs/TextArea",text:"TextArea",about:"Text area input"},"input:Checkbox":{url:"/inputs/Checkbox",text:"Checkbox",about:"Checkbox input"},"input:Radio":{url:"/inputs/Radio",text:"Radio",about:"Radio buttons input"},"input:Select":{url:"/inputs/Select",text:"Select",about:"Select list input"},"input:Hidden":{url:"/inputs/Hidden",text:"Hidden",about:"Hidden input"}},Ze=({to:e})=>{const t=wc[e]||il(`Invalid CodeLink specified: ${e}`),{url:n,code:r,text:o}=t;return l(J,{to:n,children:r?l("code",{children:r}):o})},zi=()=>l(J,{to:"/components/cancel",children:l("code",{children:"Cancel"})}),Fc=()=>l(J,{to:"/components/debug",children:l("code",{children:"Debug"})}),Vp=()=>l(J,{to:"/components/errors",children:l("code",{children:"Errors"})}),ne=()=>l(J,{to:"/components/form",children:l("code",{children:"Form"})}),ue=()=>l(J,{to:"/components/field",children:l("code",{children:"Field"})}),zp=()=>l(J,{to:"/components/fields",children:l("code",{children:"Fields"})}),h0=()=>l(J,{to:"/components/fieldset",children:l("code",{children:"Fieldset"})}),f0=()=>l(J,{to:"/components/field/layout",children:l("code",{children:"FieldLayout"})}),qi=()=>l(J,{to:"/components/reset",children:l("code",{children:"Reset"})}),Mn=()=>l(J,{to:"/components/submit",children:l("code",{children:"Submit"})}),m0=()=>l(J,{to:"/inputs/checkbox",children:l("code",{children:"Checkbox"})}),p0=()=>l(J,{to:"/inputs/radio",children:l("code",{children:"Radio"})}),g0=()=>l(J,{to:"/inputs/select",children:l("code",{children:"Select"})}),Kl=()=>l(Ze,{to:"form:fields"}),qp=()=>l(J,{to:"/components/form/setFocus",children:l("code",{children:"setFocus"})}),v0=()=>l(J,{to:"/components/form/setValues",children:l("code",{children:"setValues"})}),y0=()=>l(Ze,{to:"field:label"}),b0=()=>l(Ze,{to:"field:optionalLabel"}),Jt=()=>l(Ze,{to:"field:required"}),w0=()=>l(Ze,{to:"field:requiredMessage"}),F0=()=>l(Ze,{to:"field:showRequired"}),x0=()=>l(Ze,{to:"field:showOptional"}),S0=()=>l(Ze,{to:"field:validateOnBlur"}),$h=()=>l(Ze,{to:"input:Text"}),E0=()=>l(Ze,{to:"input:TextArea"}),C0=()=>l(Ze,{to:"input:Checkbox"}),k0=()=>l(Ze,{to:"input:Radio"}),T0=()=>l(Ze,{to:"input:Select"}),R0=()=>l(Ze,{to:"input:Hidden"}),xc=({item:e,open:t,showAbout:n=!1,url:r=""})=>{if(hl(e)){const[o,i,a]=e;return c("li",{children:[l(J,{to:`${r}/${o}`,text:i}),a&&t&&l(cu,{...a,url:`${r}/${o}`})]})}if(Hn(e)){const o=wc[e]||il(`Invalid MenuItem specified: ${e}`),{about:i,menu:a}=o;return c("li",{children:[l(Ze,{to:e}),!!n&&!!i&&l("span",{className:"about",children:i}),a&&t&&l(cu,{...a,url:o.url})]})}if(bc(e)&&e.heading)return l("li",{children:l("h4",{children:e.heading})});il(`Invalid menu item: ${e}`)},cu=({url:e,items:t=[]})=>{const r=Co().pathname.slice(0,e.length+1),o=r===e+"/"||r===e;return o&&l("ul",{className:"menu",children:t.map((i,a)=>l(xc,{item:i,url:e,open:o},a))})},$l=({title:e,url:t,items:n=[]})=>{const i=Co().pathname.slice(0,t.length)===t;return c("div",{className:"menu",children:[l("div",{className:`flex space menu-head ${i?"open":"closed"}`,children:c(J,{to:t,className:"flex center",children:[l(s0,{name:i?"angle-down":"angle-right"}),l("h4",{children:e})]})}),l(cu,{url:t,items:n})]})},Ui=e=>`/react-formula//${e}`.replace(/\/+/,"/"),N0="0.0.1",L0="2023-05-06",$0=e=>$.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 772 256",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},$.createElement("path",{d:"M705.362,44.241C676.785,44.241 652.581,63.324 644.824,89.414C637.985,86.871 630.593,85.481 622.879,85.481C615.167,85.481 607.773,86.871 600.935,89.413C593.178,63.322 568.976,44.241 540.4,44.241C523.16,44.241 507.517,51.194 496.112,62.433C479.352,50.961 459.096,44.24 437.299,44.24L375.438,44.24C374.563,44.24 373.691,44.258 372.824,44.293C363.916,20.211 340.72,3 313.58,3C285.001,3 260.811,22.091 253.056,48.184C246.214,45.638 238.817,44.24 231.099,44.24L107.379,44.24C49.824,44.24 3,91.064 3,148.618C3,206.175 49.824,252.999 107.379,252.999L169.24,252.999C180.47,252.999 191.023,250.054 200.17,244.892C209.316,250.054 219.869,252.999 231.1,252.999C246.854,252.999 261.267,247.186 272.34,237.61C283.413,247.186 297.825,252.999 313.579,252.999L437.3,252.999C462.204,252.999 485.096,244.228 503.058,229.617C518.118,244.081 538.54,252.999 561.02,252.999L684.741,252.999C730.928,252.999 768.503,215.425 768.503,169.241L768.504,107.379C768.5,72.565 740.176,44.241 705.362,44.241ZM251.718,189.862C251.718,201.25 242.486,210.481 231.097,210.481C219.709,210.481 210.477,201.25 210.477,189.862L210.477,128.001L107.377,128.001C95.989,128.001 86.757,137.232 86.757,148.62C86.757,160.009 95.989,169.241 107.377,169.241L169.238,169.242C180.625,169.242 189.857,178.474 189.857,189.861C189.857,201.25 180.625,210.481 169.238,210.481L107.377,210.481C73.213,210.481 45.517,182.786 45.517,148.62C45.517,114.457 73.213,86.761 107.377,86.761L231.097,86.761C242.486,86.761 251.718,95.993 251.718,107.381L251.718,189.862ZM725.98,169.241C725.98,192.015 707.515,210.48 684.738,210.48L561.017,210.48C538.244,210.48 519.779,192.015 519.779,169.241L519.779,107.38C519.779,95.992 529.01,86.76 540.399,86.76C551.787,86.76 561.018,95.992 561.018,107.38L561.018,169.241L602.258,169.241L602.258,148.619C602.258,137.231 611.49,128 622.878,128C634.266,128 643.498,137.231 643.498,148.619L643.498,169.241L684.737,169.241L684.74,107.38C684.74,95.992 693.972,86.76 705.361,86.76C716.749,86.76 725.98,95.992 725.98,107.38C725.981,107.39 725.98,169.241 725.98,169.241ZM437.297,210.481L313.576,210.481C302.188,210.481 292.956,201.25 292.956,189.861L292.957,66.141C292.957,54.753 302.19,45.521 313.578,45.521C324.967,45.521 334.198,54.753 334.198,66.141L334.197,169.242L437.297,169.242C448.684,169.242 457.917,160.01 457.917,148.62C457.917,137.233 448.684,128.002 437.297,128.002L375.438,128.001C364.049,128.001 354.817,118.769 354.817,107.381C354.817,95.993 364.049,86.761 375.438,86.761L437.297,86.761C471.461,86.761 499.158,114.456 499.158,148.62C499.158,182.784 471.461,210.481 437.297,210.481Z",fill:"currentColor"}),$.createElement("path",{d:"M251.718,189.862C251.718,201.25 242.486,210.481 231.097,210.481C219.709,210.481 210.477,201.25 210.477,189.862L210.477,128.001L107.377,128.001C95.989,128.001 86.757,137.232 86.757,148.62C86.757,160.009 95.989,169.241 107.377,169.241L169.238,169.242C180.625,169.242 189.857,178.474 189.857,189.861C189.857,201.25 180.625,210.481 169.238,210.481L107.377,210.481C73.213,210.481 45.517,182.786 45.517,148.62C45.517,114.457 73.213,86.761 107.377,86.761L231.097,86.761C242.486,86.761 251.718,95.993 251.718,107.381L251.718,189.862Z",style:{fill:"white"}}),$.createElement("path",{d:"M725.98,169.241C725.98,192.015 707.515,210.48 684.738,210.48L561.017,210.48C538.244,210.48 519.779,192.015 519.779,169.241L519.779,107.38C519.779,95.992 529.01,86.76 540.399,86.76C551.787,86.76 561.018,95.992 561.018,107.38L561.018,169.241L602.258,169.241L602.258,148.619C602.258,137.231 611.49,128 622.878,128C634.266,128 643.498,137.231 643.498,148.619L643.498,169.241L684.737,169.241L684.74,107.38C684.74,95.992 693.972,86.76 705.361,86.76C716.749,86.76 725.98,95.992 725.98,107.38C725.981,107.39 725.98,169.241 725.98,169.241Z",style:{fill:"white"}}),$.createElement("path",{d:"M437.297,210.481L313.576,210.481C302.188,210.481 292.956,201.25 292.956,189.861L292.957,66.141C292.957,54.753 302.19,45.521 313.578,45.521C324.967,45.521 334.198,54.753 334.198,66.141L334.197,169.242L437.297,169.242C448.684,169.242 457.917,160.01 457.917,148.62C457.917,137.233 448.684,128.002 437.297,128.002L375.438,128.001C364.049,128.001 354.817,118.769 354.817,107.381C354.817,95.993 364.049,86.761 375.438,86.761L437.297,86.761C471.461,86.761 499.158,114.456 499.158,148.62C499.158,182.784 471.461,210.481 437.297,210.481Z",style:{fill:"white"}})),O0=()=>c(Ee,{children:[l("h4",{children:"Overview"}),l("div",{className:"menu",children:c("ul",{className:"menu mar-b-2",children:[l("li",{children:l(J,{to:"/",end:!0,text:"Home"})}),l("li",{children:l(J,{to:"/getting-started",text:"Getting Started"})}),l("li",{children:l(J,{to:"/why",text:"Why Does This Exist?"})})]})}),l($l,{...Br}),l($l,{...Bp}),l($l,{...uu}),l($l,{title:"Customising",url:"/customising",items:[["components","Custom Components"]]}),l($l,{title:"Styling",url:"/styling",items:[["forms","Form Styles"],["fields","Field Styles"],["variables","SASS Variables"]]}),l("h4",{children:"Tests"}),c("ul",{className:"menu",children:[l("li",{children:l(J,{to:"/test-form",text:"Test Form"})}),l("li",{children:l(J,{to:"/test-layout",text:"Layout Test"})})]}),l("footer",{children:c("div",{className:"notes",children:[c("div",{children:["Version ",N0]}),l("a",{href:"https://github.com/abw",children:l($0,{})}),l("div",{children:L0})]})})]});function A0(){const{pathname:e}=dl();return $.useEffect(()=>P0(document.getElementById("content")),[e]),null}function P0(e){e==null||e.scrollTo({top:0,left:0,behavior:"smooth"})}const D0=()=>c("div",{id:"layout",children:[l(A0,{}),l("aside",{id:"sidebar",children:l(O0,{})}),l("main",{id:"content",children:l(O1,{})})]}),I0=e=>$.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},$.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:"currentColor"})),_0=()=>c("div",{className:"home",children:[l("h1",{children:"@abw/react-formula"}),l("a",{href:"https://github.com/abw/react-formula",className:"github",children:l(I0,{})}),c("div",{className:"pic-side",children:[l("img",{src:Ui("react-formula.svg")}),c("div",{className:"blurb",children:[c("p",{className:"intro",children:[l("code",{className:"code",children:"react-formula"})," is yet another React form component library."]}),c("p",{className:"subintro",children:["Yes, I know, there are plenty of other form libraries out there. Some of them are good, some are excellent, and some are not so good. This one isn't necessarily any better or worse than any other one. At best it's just a bit ",l(J,{to:"/why",text:"different"}),"."]}),c("p",{className:"subintro",children:["Should you use it?  Probably not. If you haven't tried it then"," ",l("a",{href:"https://final-form.org/react",children:"React Final Form"})," is definitely one of the better existing form libraries.  I'd recommend you start there.  Seriously, I'm not looking to attract new users or change the world.  Been there, done that, burned out."]})]})]}),c("div",{className:"warning",children:[l("h3",{children:"WARNING - THIS IS A WORK IN PROGRESS"}),l("p",{children:"Do not use this library unless you like living dangerously."}),l("p",{children:"It's in the process of being re-written and it's special. Look... see... still got the uh... the ol' tagger on it... see... never even played it... Don't touch it!  Don't touch it! No one... no one... no!  Don't touch it. Don't point, even. No.  It can't be played... never... I mean..."}),l("p",{children:"Don't even look at it.  You've seen enough of that one."})]}),l("p",{className:"intro",children:"Still with me?  OK then, but proceed at your own risk."}),l("div",{children:c("ul",{className:"large menu",children:[l("li",{children:l(J,{to:"getting-started",children:"Getting Started"})}),l("li",{children:l(J,{to:"why",children:"Why Does This Exist?"})})]})}),c("div",{className:"badger",children:[l("img",{src:Ui("badger.svg"),alt:"badger"}),l("div",{className:"caption",children:"Built by Badgers"})]})]});function j0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function M0(e,t){if(e==null)return{};var n=j0(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function du(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function B0(e){if(Array.isArray(e))return du(e)}function V0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function z0(e,t){if(e){if(typeof e=="string")return du(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return du(e,t)}}function q0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U0(e){return B0(e)||V0(e)||z0(e)||q0()}function vo(e){return vo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vo(e)}function H0(e,t){if(vo(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(vo(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function W0(e){var t=H0(e,"string");return vo(t)==="symbol"?t:String(t)}function Up(e,t,n){return t=W0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hu(){return hu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hu.apply(this,arguments)}function Oh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Vr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oh(Object(n),!0).forEach(function(r){Up(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Y0(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var as={};function G0(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return as[t]||(as[t]=Y0(e)),as[t]}function K0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter(function(i){return i!=="token"}),o=G0(r);return o.reduce(function(i,a){return Vr(Vr({},i),n[a])},t)}function Ah(e){return e.join(" ")}function Q0(e,t){var n=0;return function(r){return n+=1,r.map(function(o,i){return Hp({node:o,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(i)})})}}function Hp(e){var t=e.node,n=e.stylesheet,r=e.style,o=r===void 0?{}:r,i=e.useInlineStyles,a=e.key,s=t.properties,u=t.type,d=t.tagName,m=t.value;if(u==="text")return m;if(d){var p=Q0(n,i),v;if(!i)v=Vr(Vr({},s),{},{className:Ah(s.className)});else{var S=Object.keys(n).reduce(function(g,h){return h.split(".").forEach(function(f){g.includes(f)||g.push(f)}),g},[]),T=s.className&&s.className.includes("token")?["token"]:[],E=s.className&&T.concat(s.className.filter(function(g){return!S.includes(g)}));v=Vr(Vr({},s),{},{className:Ah(E)||void 0,style:K0(s.className,Object.assign({},s.style,o),n)})}var b=p(t.children);return tt.createElement(d,hu({key:a},v),b)}}const X0=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var Z0=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Ph(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Kt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ph(Object(n),!0).forEach(function(r){Up(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ph(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var J0=/\n/g;function ew(e){return e.match(J0)}function tw(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map(function(o,i){var a=i+n;return tt.createElement("span",{key:"line-".concat(i),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(a):r},"".concat(a,`
`))})}function nw(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,o=r===void 0?{float:"left",paddingRight:"10px"}:r,i=e.numberStyle,a=i===void 0?{}:i,s=e.startingLineNumber;return tt.createElement("code",{style:Object.assign({},n,o)},tw({lines:t.replace(/\n$/,"").split(`
`),style:a,startingLineNumber:s}))}function rw(e){return"".concat(e.toString().length,".25em")}function Wp(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function Yp(e,t,n){var r={display:"inline-block",minWidth:rw(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},o=typeof e=="function"?e(t):e,i=Kt(Kt({},r),o);return i}function mi(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,o=e.largestLineNumber,i=e.showInlineLineNumbers,a=e.lineProps,s=a===void 0?{}:a,u=e.className,d=u===void 0?[]:u,m=e.showLineNumbers,p=e.wrapLongLines,v=typeof s=="function"?s(n):s;if(v.className=d,n&&i){var S=Yp(r,n,o);t.unshift(Wp(n,S))}return p&m&&(v.style=Kt(Kt({},v.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:v,children:t}}function Gp(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var o=e[r];if(o.type==="text")n.push(mi({children:[o],className:U0(new Set(t))}));else if(o.children){var i=t.concat(o.properties.className);Gp(o.children,i).forEach(function(a){return n.push(a)})}}return n}function lw(e,t,n,r,o,i,a,s,u){var d,m=Gp(e.value),p=[],v=-1,S=0;function T(w,F){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return mi({children:w,lineNumber:F,lineNumberStyle:s,largestLineNumber:a,showInlineLineNumbers:o,lineProps:n,className:C,showLineNumbers:r,wrapLongLines:u})}function E(w,F){if(r&&F&&o){var C=Yp(s,F,a);w.unshift(Wp(F,C))}return w}function b(w,F){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||C.length>0?T(w,F,C):E(w,F)}for(var g=function(){var F=m[S],C=F.children[0].value,k=ew(C);if(k){var L=C.split(`
`);L.forEach(function(A,H){var te=r&&p.length+i,ie={type:"text",value:"".concat(A,`
`)};if(H===0){var ye=m.slice(v+1,S).concat(mi({children:[ie],className:F.properties.className})),me=b(ye,te);p.push(me)}else if(H===L.length-1){var be=m[S+1]&&m[S+1].children&&m[S+1].children[0],Ve={type:"text",value:"".concat(A)};if(be){var P=mi({children:[Ve],className:F.properties.className});m.splice(S+1,0,P)}else{var B=[Ve],j=b(B,te,F.properties.className);p.push(j)}}else{var U=[ie],K=b(U,te,F.properties.className);p.push(K)}}),v=S}S++};S<m.length;)g();if(v!==m.length-1){var h=m.slice(v+1,m.length);if(h&&h.length){var f=r&&p.length+i,y=b(h,f);p.push(y)}}return t?p:(d=[]).concat.apply(d,p)}function ow(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map(function(o,i){return Hp({node:o,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(i)})})}function Kp(e){return e&&typeof e.highlightAuto<"u"}function iw(e){var t=e.astGenerator,n=e.language,r=e.code,o=e.defaultCodeValue;if(Kp(t)){var i=X0(t,n);return n==="text"?{value:o,language:"text"}:i?t.highlight(n,r):t.highlightAuto(r)}try{return n&&n!=="text"?{value:t.highlight(r,n)}:{value:o}}catch{return{value:o}}}function aw(e,t){return function(r){var o=r.language,i=r.children,a=r.style,s=a===void 0?t:a,u=r.customStyle,d=u===void 0?{}:u,m=r.codeTagProps,p=m===void 0?{className:o?"language-".concat(o):void 0,style:Kt(Kt({},s['code[class*="language-"]']),s['code[class*="language-'.concat(o,'"]')])}:m,v=r.useInlineStyles,S=v===void 0?!0:v,T=r.showLineNumbers,E=T===void 0?!1:T,b=r.showInlineLineNumbers,g=b===void 0?!0:b,h=r.startingLineNumber,f=h===void 0?1:h,y=r.lineNumberContainerStyle,w=r.lineNumberStyle,F=w===void 0?{}:w,C=r.wrapLines,k=r.wrapLongLines,L=k===void 0?!1:k,A=r.lineProps,H=A===void 0?{}:A,te=r.renderer,ie=r.PreTag,ye=ie===void 0?"pre":ie,me=r.CodeTag,be=me===void 0?"code":me,Ve=r.code,P=Ve===void 0?(Array.isArray(i)?i[0]:i)||"":Ve,B=r.astGenerator,j=M0(r,Z0);B=B||e;var U=E?tt.createElement(nw,{containerStyle:y,codeStyle:p.style||{},numberStyle:F,startingLineNumber:f,codeString:P}):null,K=s.hljs||s['pre[class*="language-"]']||{backgroundColor:"#fff"},ft=Kp(B)?"hljs":"prismjs",ae=S?Object.assign({},j,{style:Object.assign({},K,d)}):Object.assign({},j,{className:j.className?"".concat(ft," ").concat(j.className):ft,style:Object.assign({},d)});if(L?p.style=Kt(Kt({},p.style),{},{whiteSpace:"pre-wrap"}):p.style=Kt(Kt({},p.style),{},{whiteSpace:"pre"}),!B)return tt.createElement(ye,ae,U,tt.createElement(be,p,P));(C===void 0&&te||L)&&(C=!0),te=te||ow;var ze=[{type:"text",value:P}],Ce=iw({astGenerator:B,language:o,code:P,defaultCodeValue:ze});Ce.language===null&&(Ce.value=ze);var _e=Ce.value.length+f,Gn=lw(Ce,C,H,E,g,f,_e,F,L);return tt.createElement(ye,ae,tt.createElement(be,p,!g&&U,te({rows:Gn,stylesheet:s,useInlineStyles:S})))}}var fu={},sw={get exports(){return fu},set exports(e){fu=e}},uw=dw,cw=Object.prototype.hasOwnProperty;function dw(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)cw.call(n,r)&&(e[r]=n[r])}return e}var Qp=Xp,Sc=Xp.prototype;Sc.space=null;Sc.normal={};Sc.property={};function Xp(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var Dh=uw,hw=Qp,fw=mw;function mw(e){for(var t=e.length,n=[],r=[],o=-1,i,a;++o<t;)i=e[o],n.push(i.property),r.push(i.normal),a=i.space;return new hw(Dh.apply(null,n),Dh.apply(null,r),a)}var Ec=pw;function pw(e){return e.toLowerCase()}var Zp=Jp,Lt=Jp.prototype;Lt.space=null;Lt.attribute=null;Lt.property=null;Lt.boolean=!1;Lt.booleanish=!1;Lt.overloadedBoolean=!1;Lt.number=!1;Lt.commaSeparated=!1;Lt.spaceSeparated=!1;Lt.commaOrSpaceSeparated=!1;Lt.mustUseProperty=!1;Lt.defined=!1;function Jp(e,t){this.property=e,this.attribute=t}var en={},gw=0;en.boolean=mr();en.booleanish=mr();en.overloadedBoolean=mr();en.number=mr();en.spaceSeparated=mr();en.commaSeparated=mr();en.commaOrSpaceSeparated=mr();function mr(){return Math.pow(2,++gw)}var eg=Zp,Ih=en,tg=Cc;Cc.prototype=new eg;Cc.prototype.defined=!0;var ng=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],vw=ng.length;function Cc(e,t,n,r){var o=-1,i;for(_h(this,"space",r),eg.call(this,e,t);++o<vw;)i=ng[o],_h(this,i,(n&Ih[i])===Ih[i])}function _h(e,t,n){n&&(e[t]=n)}var jh=Ec,yw=Qp,bw=tg,ko=ww;function ww(e){var t=e.space,n=e.mustUseProperty||[],r=e.attributes||{},o=e.properties,i=e.transform,a={},s={},u,d;for(u in o)d=new bw(u,i(r,u),o[u],t),n.indexOf(u)!==-1&&(d.mustUseProperty=!0),a[u]=d,s[jh(u)]=u,s[jh(d.attribute)]=u;return new yw(a,s,t)}var Fw=ko,xw=Fw({space:"xlink",transform:Sw,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function Sw(e,t){return"xlink:"+t.slice(5).toLowerCase()}var Ew=ko,Cw=Ew({space:"xml",transform:kw,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function kw(e,t){return"xml:"+t.slice(3).toLowerCase()}var Tw=Rw;function Rw(e,t){return t in e?e[t]:t}var Nw=Tw,rg=Lw;function Lw(e,t){return Nw(e,t.toLowerCase())}var $w=ko,Ow=rg,Aw=$w({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Ow,properties:{xmlns:null,xmlnsXLink:null}}),kc=en,Pw=ko,it=kc.booleanish,xt=kc.number,Xn=kc.spaceSeparated,Dw=Pw({transform:Iw,properties:{ariaActiveDescendant:null,ariaAtomic:it,ariaAutoComplete:null,ariaBusy:it,ariaChecked:it,ariaColCount:xt,ariaColIndex:xt,ariaColSpan:xt,ariaControls:Xn,ariaCurrent:null,ariaDescribedBy:Xn,ariaDetails:null,ariaDisabled:it,ariaDropEffect:Xn,ariaErrorMessage:null,ariaExpanded:it,ariaFlowTo:Xn,ariaGrabbed:it,ariaHasPopup:null,ariaHidden:it,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Xn,ariaLevel:xt,ariaLive:null,ariaModal:it,ariaMultiLine:it,ariaMultiSelectable:it,ariaOrientation:null,ariaOwns:Xn,ariaPlaceholder:null,ariaPosInSet:xt,ariaPressed:it,ariaReadOnly:it,ariaRelevant:null,ariaRequired:it,ariaRoleDescription:Xn,ariaRowCount:xt,ariaRowIndex:xt,ariaRowSpan:xt,ariaSelected:it,ariaSetSize:xt,ariaSort:null,ariaValueMax:xt,ariaValueMin:xt,ariaValueNow:xt,ariaValueText:null,role:null}});function Iw(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var fl=en,_w=ko,jw=rg,Z=fl.boolean,Mw=fl.overloadedBoolean,Ol=fl.booleanish,pe=fl.number,Je=fl.spaceSeparated,Zo=fl.commaSeparated,Bw=_w({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:jw,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Zo,acceptCharset:Je,accessKey:Je,action:null,allow:null,allowFullScreen:Z,allowPaymentRequest:Z,allowUserMedia:Z,alt:null,as:null,async:Z,autoCapitalize:null,autoComplete:Je,autoFocus:Z,autoPlay:Z,capture:Z,charSet:null,checked:Z,cite:null,className:Je,cols:pe,colSpan:null,content:null,contentEditable:Ol,controls:Z,controlsList:Je,coords:pe|Zo,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Z,defer:Z,dir:null,dirName:null,disabled:Z,download:Mw,draggable:Ol,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Z,formTarget:null,headers:Je,height:pe,hidden:Z,high:pe,href:null,hrefLang:null,htmlFor:Je,httpEquiv:Je,id:null,imageSizes:null,imageSrcSet:Zo,inputMode:null,integrity:null,is:null,isMap:Z,itemId:null,itemProp:Je,itemRef:Je,itemScope:Z,itemType:Je,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Z,low:pe,manifest:null,max:null,maxLength:pe,media:null,method:null,min:null,minLength:pe,multiple:Z,muted:Z,name:null,nonce:null,noModule:Z,noValidate:Z,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Z,optimum:pe,pattern:null,ping:Je,placeholder:null,playsInline:Z,poster:null,preload:null,readOnly:Z,referrerPolicy:null,rel:Je,required:Z,reversed:Z,rows:pe,rowSpan:pe,sandbox:Je,scope:null,scoped:Z,seamless:Z,selected:Z,shape:null,size:pe,sizes:null,slot:null,span:pe,spellCheck:Ol,src:null,srcDoc:null,srcLang:null,srcSet:Zo,start:pe,step:null,style:null,tabIndex:pe,target:null,title:null,translate:null,type:null,typeMustMatch:Z,useMap:null,value:Ol,width:pe,wrap:null,align:null,aLink:null,archive:Je,axis:null,background:null,bgColor:null,border:pe,borderColor:null,bottomMargin:pe,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Z,declare:Z,event:null,face:null,frame:null,frameBorder:null,hSpace:pe,leftMargin:pe,link:null,longDesc:null,lowSrc:null,marginHeight:pe,marginWidth:pe,noResize:Z,noHref:Z,noShade:Z,noWrap:Z,object:null,profile:null,prompt:null,rev:null,rightMargin:pe,rules:null,scheme:null,scrolling:Ol,standby:null,summary:null,text:null,topMargin:pe,valueType:null,version:null,vAlign:null,vLink:null,vSpace:pe,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Z,disableRemotePlayback:Z,prefix:null,property:null,results:pe,security:null,unselectable:null}}),Vw=fw,zw=xw,qw=Cw,Uw=Aw,Hw=Dw,Ww=Bw,Yw=Vw([qw,zw,Uw,Hw,Ww]),Gw=Ec,Kw=tg,Qw=Zp,Tc="data",Xw=eF,Zw=/^data[-\w.:]+$/i,lg=/-[a-z]/g,Jw=/[A-Z]/g;function eF(e,t){var n=Gw(t),r=t,o=Qw;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===Tc&&Zw.test(t)&&(t.charAt(4)==="-"?r=tF(t):t=nF(t),o=Kw),new o(r,t))}function tF(e){var t=e.slice(5).replace(lg,lF);return Tc+t.charAt(0).toUpperCase()+t.slice(1)}function nF(e){var t=e.slice(4);return lg.test(t)?e:(t=t.replace(Jw,rF),t.charAt(0)!=="-"&&(t="-"+t),Tc+t)}function rF(e){return"-"+e.toLowerCase()}function lF(e){return e.charAt(1).toUpperCase()}var oF=iF,Mh=/[#.]/g;function iF(e,t){for(var n=e||"",r=t||"div",o={},i=0,a,s,u;i<n.length;)Mh.lastIndex=i,u=Mh.exec(n),a=n.slice(i,u?u.index:n.length),a&&(s?s==="#"?o.id=a:o.className?o.className.push(a):o.className=[a]:r=a,i+=a.length),u&&(s=u[0],i++);return{type:"element",tagName:r,properties:o,children:[]}}var Rc={};Rc.parse=uF;Rc.stringify=cF;var Bh="",aF=" ",sF=/[ \t\n\r\f]+/g;function uF(e){var t=String(e||Bh).trim();return t===Bh?[]:t.split(sF)}function cF(e){return e.join(aF).trim()}var Nc={};Nc.parse=dF;Nc.stringify=hF;var mu=",",Vh=" ",_l="";function dF(e){for(var t=[],n=String(e||_l),r=n.indexOf(mu),o=0,i=!1,a;!i;)r===-1&&(r=n.length,i=!0),a=n.slice(o,r).trim(),(a||!i)&&t.push(a),o=r+1,r=n.indexOf(mu,o);return t}function hF(e,t){var n=t||{},r=n.padLeft===!1?_l:Vh,o=n.padRight?Vh:_l;return e[e.length-1]===_l&&(e=e.concat(_l)),e.join(o+mu+r).trim()}var fF=Xw,zh=Ec,mF=oF,qh=Rc.parse,Uh=Nc.parse,pF=vF,gF={}.hasOwnProperty;function vF(e,t,n){var r=n?xF(n):null;return o;function o(a,s){var u=mF(a,t),d=Array.prototype.slice.call(arguments,2),m=u.tagName.toLowerCase(),p;if(u.tagName=r&&gF.call(r,m)?r[m]:m,s&&yF(s,u)&&(d.unshift(s),s=null),s)for(p in s)i(u.properties,p,s[p]);return og(u.children,d),u.tagName==="template"&&(u.content={type:"root",children:u.children},u.children=[]),u}function i(a,s,u){var d,m,p;u==null||u!==u||(d=fF(e,s),m=d.property,p=u,typeof p=="string"&&(d.spaceSeparated?p=qh(p):d.commaSeparated?p=Uh(p):d.commaOrSpaceSeparated&&(p=qh(Uh(p).join(" ")))),m==="style"&&typeof u!="string"&&(p=FF(p)),m==="className"&&a.className&&(p=a.className.concat(p)),a[m]=wF(d,m,p))}}function yF(e,t){return typeof e=="string"||"length"in e||bF(t.tagName,e)}function bF(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function og(e,t){var n,r;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,r=t.length;++n<r;)og(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function wF(e,t,n){var r,o,i;if(typeof n!="object"||!("length"in n))return Hh(e,t,n);for(o=n.length,r=-1,i=[];++r<o;)i[r]=Hh(e,t,n[r]);return i}function Hh(e,t,n){var r=n;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||zh(n)===zh(t))&&(r=!0),r}function FF(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function xF(e){for(var t=e.length,n=-1,r={},o;++n<t;)o=e[n],r[o.toLowerCase()]=o;return r}var SF=Yw,EF=pF,ig=EF(SF,"div");ig.displayName="html";var CF=ig;(function(e){e.exports=CF})(sw);const kF="Æ",TF="&",RF="Á",NF="Â",LF="À",$F="Å",OF="Ã",AF="Ä",PF="©",DF="Ç",IF="Ð",_F="É",jF="Ê",MF="È",BF="Ë",VF=">",zF="Í",qF="Î",UF="Ì",HF="Ï",WF="<",YF="Ñ",GF="Ó",KF="Ô",QF="Ò",XF="Ø",ZF="Õ",JF="Ö",ex='"',tx="®",nx="Þ",rx="Ú",lx="Û",ox="Ù",ix="Ü",ax="Ý",sx="á",ux="â",cx="´",dx="æ",hx="à",fx="&",mx="å",px="ã",gx="ä",vx="¦",yx="ç",bx="¸",wx="¢",Fx="©",xx="¤",Sx="°",Ex="÷",Cx="é",kx="ê",Tx="è",Rx="ð",Nx="ë",Lx="½",$x="¼",Ox="¾",Ax=">",Px="í",Dx="î",Ix="¡",_x="ì",jx="¿",Mx="ï",Bx="«",Vx="<",zx="¯",qx="µ",Ux="·",Hx=" ",Wx="¬",Yx="ñ",Gx="ó",Kx="ô",Qx="ò",Xx="ª",Zx="º",Jx="ø",eS="õ",tS="ö",nS="¶",rS="±",lS="£",oS='"',iS="»",aS="®",sS="§",uS="­",cS="¹",dS="²",hS="³",fS="ß",mS="þ",pS="×",gS="ú",vS="û",yS="ù",bS="¨",wS="ü",FS="ý",xS="¥",SS="ÿ",ES={AElig:kF,AMP:TF,Aacute:RF,Acirc:NF,Agrave:LF,Aring:$F,Atilde:OF,Auml:AF,COPY:PF,Ccedil:DF,ETH:IF,Eacute:_F,Ecirc:jF,Egrave:MF,Euml:BF,GT:VF,Iacute:zF,Icirc:qF,Igrave:UF,Iuml:HF,LT:WF,Ntilde:YF,Oacute:GF,Ocirc:KF,Ograve:QF,Oslash:XF,Otilde:ZF,Ouml:JF,QUOT:ex,REG:tx,THORN:nx,Uacute:rx,Ucirc:lx,Ugrave:ox,Uuml:ix,Yacute:ax,aacute:sx,acirc:ux,acute:cx,aelig:dx,agrave:hx,amp:fx,aring:mx,atilde:px,auml:gx,brvbar:vx,ccedil:yx,cedil:bx,cent:wx,copy:Fx,curren:xx,deg:Sx,divide:Ex,eacute:Cx,ecirc:kx,egrave:Tx,eth:Rx,euml:Nx,frac12:Lx,frac14:$x,frac34:Ox,gt:Ax,iacute:Px,icirc:Dx,iexcl:Ix,igrave:_x,iquest:jx,iuml:Mx,laquo:Bx,lt:Vx,macr:zx,micro:qx,middot:Ux,nbsp:Hx,not:Wx,ntilde:Yx,oacute:Gx,ocirc:Kx,ograve:Qx,ordf:Xx,ordm:Zx,oslash:Jx,otilde:eS,ouml:tS,para:nS,plusmn:rS,pound:lS,quot:oS,raquo:iS,reg:aS,sect:sS,shy:uS,sup1:cS,sup2:dS,sup3:hS,szlig:fS,thorn:mS,times:pS,uacute:gS,ucirc:vS,ugrave:yS,uml:bS,uuml:wS,yacute:FS,yen:xS,yuml:SS},CS={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var ag=kS;function kS(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var TS=RS;function RS(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var NS=LS;function LS(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var $S=NS,OS=ag,AS=PS;function PS(e){return $S(e)||OS(e)}var Jo,DS=59,IS=_S;function _S(e){var t="&"+e+";",n;return Jo=Jo||document.createElement("i"),Jo.innerHTML=t,n=Jo.textContent,n.charCodeAt(n.length-1)===DS&&e!=="semi"||n===t?!1:n}var Wh=ES,Yh=CS,jS=ag,MS=TS,sg=AS,BS=IS,VS=eE,zS={}.hasOwnProperty,Fr=String.fromCharCode,qS=Function.prototype,Gh={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},US=9,Kh=10,HS=12,WS=32,Qh=38,YS=59,GS=60,KS=61,QS=35,XS=88,ZS=120,JS=65533,Sr="named",Lc="hexadecimal",$c="decimal",Oc={};Oc[Lc]=16;Oc[$c]=10;var ga={};ga[Sr]=sg;ga[$c]=jS;ga[Lc]=MS;var ug=1,cg=2,dg=3,hg=4,fg=5,pu=6,mg=7,Wn={};Wn[ug]="Named character references must be terminated by a semicolon";Wn[cg]="Numeric character references must be terminated by a semicolon";Wn[dg]="Named character references cannot be empty";Wn[hg]="Numeric character references cannot be empty";Wn[fg]="Named character references must be known";Wn[pu]="Numeric character references cannot be disallowed";Wn[mg]="Numeric character references cannot be outside the permissible Unicode range";function eE(e,t){var n={},r,o;t||(t={});for(o in Gh)r=t[o],n[o]=r??Gh[o];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),tE(e,n)}function tE(e,t){var n=t.additional,r=t.nonTerminated,o=t.text,i=t.reference,a=t.warning,s=t.textContext,u=t.referenceContext,d=t.warningContext,m=t.position,p=t.indent||[],v=e.length,S=0,T=-1,E=m.column||1,b=m.line||1,g="",h=[],f,y,w,F,C,k,L,A,H,te,ie,ye,me,be,Ve,P,B,j,U;for(typeof n=="string"&&(n=n.charCodeAt(0)),P=K(),A=a?ft:qS,S--,v++;++S<v;)if(C===Kh&&(E=p[T]||1),C=e.charCodeAt(S),C===Qh){if(L=e.charCodeAt(S+1),L===US||L===Kh||L===HS||L===WS||L===Qh||L===GS||L!==L||n&&L===n){g+=Fr(C),E++;continue}for(me=S+1,ye=me,U=me,L===QS?(U=++ye,L=e.charCodeAt(U),L===XS||L===ZS?(be=Lc,U=++ye):be=$c):be=Sr,f="",ie="",F="",Ve=ga[be],U--;++U<v&&(L=e.charCodeAt(U),!!Ve(L));)F+=Fr(L),be===Sr&&zS.call(Wh,F)&&(f=F,ie=Wh[F]);w=e.charCodeAt(U)===YS,w&&(U++,y=be===Sr?BS(F):!1,y&&(f=F,ie=y)),j=1+U-me,!w&&!r||(F?be===Sr?(w&&!ie?A(fg,1):(f!==F&&(U=ye+f.length,j=1+U-ye,w=!1),w||(H=f?ug:dg,t.attribute?(L=e.charCodeAt(U),L===KS?(A(H,j),ie=null):sg(L)?ie=null:A(H,j)):A(H,j))),k=ie):(w||A(cg,j),k=parseInt(F,Oc[be]),nE(k)?(A(mg,j),k=Fr(JS)):k in Yh?(A(pu,j),k=Yh[k]):(te="",rE(k)&&A(pu,j),k>65535&&(k-=65536,te+=Fr(k>>>10|55296),k=56320|k&1023),k=te+Fr(k))):be!==Sr&&A(hg,j)),k?(ae(),P=K(),S=U-1,E+=U-me+1,h.push(k),B=K(),B.offset++,i&&i.call(u,k,{start:P,end:B},e.slice(me-1,U)),P=B):(F=e.slice(me-1,U),g+=F,E+=F.length,S=U-1)}else C===10&&(b++,T++,E=0),C===C?(g+=Fr(C),E++):ae();return h.join("");function K(){return{line:b,column:E,offset:S+(m.offset||0)}}function ft(ze,Ce){var _e=K();_e.column+=Ce,_e.offset+=Ce,a.call(d,Wn[ze],_e,ze)}function ae(){g&&(h.push(g),o&&o.call(s,g,{start:P,end:K()}),g="")}}function nE(e){return e>=55296&&e<=57343||e>1114111}function rE(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var gu={},lE={get exports(){return gu},set exports(e){gu=e}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,a={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function h(f){return f instanceof u?new u(f.type,h(f.content),f.alias):Array.isArray(f)?f.map(h):f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++i}),h.__id},clone:function h(f,y){y=y||{};var w,F;switch(s.util.type(f)){case"Object":if(F=s.util.objId(f),y[F])return y[F];w={},y[F]=w;for(var C in f)f.hasOwnProperty(C)&&(w[C]=h(f[C],y));return w;case"Array":return F=s.util.objId(f),y[F]?y[F]:(w=[],y[F]=w,f.forEach(function(k,L){w[L]=h(k,y)}),w);default:return f}},getLanguage:function(h){for(;h;){var f=o.exec(h.className);if(f)return f[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,f){h.className=h.className.replace(RegExp(o,"gi"),""),h.classList.add("language-"+f)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(w){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack)||[])[1];if(h){var f=document.getElementsByTagName("script");for(var y in f)if(f[y].src==h)return f[y]}return null}},isActive:function(h,f,y){for(var w="no-"+f;h;){var F=h.classList;if(F.contains(f))return!0;if(F.contains(w))return!1;h=h.parentElement}return!!y}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(h,f){var y=s.util.clone(s.languages[h]);for(var w in f)y[w]=f[w];return y},insertBefore:function(h,f,y,w){w=w||s.languages;var F=w[h],C={};for(var k in F)if(F.hasOwnProperty(k)){if(k==f)for(var L in y)y.hasOwnProperty(L)&&(C[L]=y[L]);y.hasOwnProperty(k)||(C[k]=F[k])}var A=w[h];return w[h]=C,s.languages.DFS(s.languages,function(H,te){te===A&&H!=h&&(this[H]=C)}),C},DFS:function h(f,y,w,F){F=F||{};var C=s.util.objId;for(var k in f)if(f.hasOwnProperty(k)){y.call(f,k,f[k],w||k);var L=f[k],A=s.util.type(L);A==="Object"&&!F[C(L)]?(F[C(L)]=!0,h(L,y,null,F)):A==="Array"&&!F[C(L)]&&(F[C(L)]=!0,h(L,y,k,F))}}},plugins:{},highlightAll:function(h,f){s.highlightAllUnder(document,h,f)},highlightAllUnder:function(h,f,y){var w={callback:y,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",w),w.elements=Array.prototype.slice.apply(w.container.querySelectorAll(w.selector)),s.hooks.run("before-all-elements-highlight",w);for(var F=0,C;C=w.elements[F++];)s.highlightElement(C,f===!0,w.callback)},highlightElement:function(h,f,y){var w=s.util.getLanguage(h),F=s.languages[w];s.util.setLanguage(h,w);var C=h.parentElement;C&&C.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(C,w);var k=h.textContent,L={element:h,language:w,grammar:F,code:k};function A(te){L.highlightedCode=te,s.hooks.run("before-insert",L),L.element.innerHTML=L.highlightedCode,s.hooks.run("after-highlight",L),s.hooks.run("complete",L),y&&y.call(L.element)}if(s.hooks.run("before-sanity-check",L),C=L.element.parentElement,C&&C.nodeName.toLowerCase()==="pre"&&!C.hasAttribute("tabindex")&&C.setAttribute("tabindex","0"),!L.code){s.hooks.run("complete",L),y&&y.call(L.element);return}if(s.hooks.run("before-highlight",L),!L.grammar){A(s.util.encode(L.code));return}if(f&&r.Worker){var H=new Worker(s.filename);H.onmessage=function(te){A(te.data)},H.postMessage(JSON.stringify({language:L.language,code:L.code,immediateClose:!0}))}else A(s.highlight(L.code,L.grammar,L.language))},highlight:function(h,f,y){var w={code:h,grammar:f,language:y};if(s.hooks.run("before-tokenize",w),!w.grammar)throw new Error('The language "'+w.language+'" has no grammar.');return w.tokens=s.tokenize(w.code,w.grammar),s.hooks.run("after-tokenize",w),u.stringify(s.util.encode(w.tokens),w.language)},tokenize:function(h,f){var y=f.rest;if(y){for(var w in y)f[w]=y[w];delete f.rest}var F=new p;return v(F,F.head,h),m(h,F,f,F.head,0),T(F)},hooks:{all:{},add:function(h,f){var y=s.hooks.all;y[h]=y[h]||[],y[h].push(f)},run:function(h,f){var y=s.hooks.all[h];if(!(!y||!y.length))for(var w=0,F;F=y[w++];)F(f)}},Token:u};r.Prism=s;function u(h,f,y,w){this.type=h,this.content=f,this.alias=y,this.length=(w||"").length|0}u.stringify=function h(f,y){if(typeof f=="string")return f;if(Array.isArray(f)){var w="";return f.forEach(function(A){w+=h(A,y)}),w}var F={type:f.type,content:h(f.content,y),tag:"span",classes:["token",f.type],attributes:{},language:y},C=f.alias;C&&(Array.isArray(C)?Array.prototype.push.apply(F.classes,C):F.classes.push(C)),s.hooks.run("wrap",F);var k="";for(var L in F.attributes)k+=" "+L+'="'+(F.attributes[L]||"").replace(/"/g,"&quot;")+'"';return"<"+F.tag+' class="'+F.classes.join(" ")+'"'+k+">"+F.content+"</"+F.tag+">"};function d(h,f,y,w){h.lastIndex=f;var F=h.exec(y);if(F&&w&&F[1]){var C=F[1].length;F.index+=C,F[0]=F[0].slice(C)}return F}function m(h,f,y,w,F,C){for(var k in y)if(!(!y.hasOwnProperty(k)||!y[k])){var L=y[k];L=Array.isArray(L)?L:[L];for(var A=0;A<L.length;++A){if(C&&C.cause==k+","+A)return;var H=L[A],te=H.inside,ie=!!H.lookbehind,ye=!!H.greedy,me=H.alias;if(ye&&!H.pattern.global){var be=H.pattern.toString().match(/[imsuy]*$/)[0];H.pattern=RegExp(H.pattern.source,be+"g")}for(var Ve=H.pattern||H,P=w.next,B=F;P!==f.tail&&!(C&&B>=C.reach);B+=P.value.length,P=P.next){var j=P.value;if(f.length>h.length)return;if(!(j instanceof u)){var U=1,K;if(ye){if(K=d(Ve,B,h,ie),!K||K.index>=h.length)break;var Ce=K.index,ft=K.index+K[0].length,ae=B;for(ae+=P.value.length;Ce>=ae;)P=P.next,ae+=P.value.length;if(ae-=P.value.length,B=ae,P.value instanceof u)continue;for(var ze=P;ze!==f.tail&&(ae<ft||typeof ze.value=="string");ze=ze.next)U++,ae+=ze.value.length;U--,j=h.slice(B,ae),K.index-=B}else if(K=d(Ve,0,j,ie),!K)continue;var Ce=K.index,_e=K[0],Gn=j.slice(0,Ce),$o=j.slice(Ce+_e.length),gl=B+j.length;C&&gl>C.reach&&(C.reach=gl);var Ht=P.prev;Gn&&(Ht=v(f,Ht,Gn),B+=Gn.length),S(f,Ht,U);var Oo=new u(k,te?s.tokenize(_e,te):_e,me,_e);if(P=v(f,Ht,Oo),$o&&v(f,P,$o),U>1){var Kn={cause:k+","+A,reach:gl};m(h,f,y,P.prev,B,Kn),C&&Kn.reach>C.reach&&(C.reach=Kn.reach)}}}}}}function p(){var h={value:null,prev:null,next:null},f={value:null,prev:h,next:null};h.next=f,this.head=h,this.tail=f,this.length=0}function v(h,f,y){var w=f.next,F={value:y,prev:f,next:w};return f.next=F,w.prev=F,h.length++,F}function S(h,f,y){for(var w=f.next,F=0;F<y&&w!==h.tail;F++)w=w.next;f.next=w,w.prev=f,h.length-=F}function T(h){for(var f=[],y=h.head.next;y!==h.tail;)f.push(y.value),y=y.next;return f}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(h){var f=JSON.parse(h.data),y=f.language,w=f.code,F=f.immediateClose;r.postMessage(s.highlight(w,s.languages[y],y)),F&&r.close()},!1)),s;var E=s.util.currentScript();E&&(s.filename=E.src,E.hasAttribute("data-manual")&&(s.manual=!0));function b(){s.manual||s.highlightAll()}if(!s.manual){var g=document.readyState;g==="loading"||g==="interactive"&&E&&E.defer?document.addEventListener("DOMContentLoaded",b):window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,16)}return s}(t);e.exports&&(e.exports=n),typeof gi<"u"&&(gi.Prism=n)})(lE);var oE=Ac;Ac.displayName="markup";Ac.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Ac(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,r){var o={};o["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};i["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var a={};a[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:i},e.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var pg=Pc;Pc.displayName="css";Pc.aliases=[];function Pc(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const iE=pg;var aE=Dc;Dc.displayName="clike";Dc.aliases=[];function Dc(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var sE=Ic;Ic.displayName="javascript";Ic.aliases=["js"];function Ic(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var jl=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof gi=="object"?gi:{},uE=EE();jl.Prism={manual:!0,disableWorkerMessageHandler:!0};var cE=fu,dE=VS,gg=gu,hE=oE,fE=pg,mE=aE,pE=sE;uE();var _c={}.hasOwnProperty;function vg(){}vg.prototype=gg;var Oe=new vg,jc=Oe;Oe.highlight=vE;Oe.register=To;Oe.alias=gE;Oe.registered=yE;Oe.listLanguages=bE;To(hE);To(fE);To(mE);To(pE);Oe.util.encode=xE;Oe.Token.stringify=wE;function To(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Oe.languages[e.displayName]===void 0&&e(Oe)}function gE(e,t){var n=Oe.languages,r=e,o,i,a,s;t&&(r={},r[e]=t);for(o in r)for(i=r[o],i=typeof i=="string"?[i]:i,a=i.length,s=-1;++s<a;)n[i[s]]=n[o]}function vE(e,t){var n=gg.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Oe.util.type(t)==="Object")r=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(_c.call(Oe.languages,t))r=Oe.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,r,t)}function yE(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return _c.call(Oe.languages,e)}function bE(){var e=Oe.languages,t=[],n;for(n in e)_c.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function wE(e,t,n){var r;return typeof e=="string"?{type:"text",value:e}:Oe.util.type(e)==="Array"?FE(e,t):(r={type:e.type,content:Oe.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(r.classes=r.classes.concat(e.alias)),Oe.hooks.run("wrap",r),cE(r.tag+"."+r.classes.join("."),SE(r.attributes),r.content))}function FE(e,t){for(var n=[],r=e.length,o=-1,i;++o<r;)i=e[o],i!==""&&i!==null&&i!==void 0&&n.push(i);for(o=-1,r=n.length;++o<r;)i=n[o],n[o]=Oe.Token.stringify(i,t,n);return n}function xE(e){return e}function SE(e){var t;for(t in e)e[t]=dE(e[t]);return e}function EE(){var e="Prism"in jl,t=e?jl.Prism:void 0;return n;function n(){e?jl.Prism=t:delete jl.Prism,e=void 0,t=void 0}}var Mc=aw(jc,{});Mc.registerLanguage=function(e,t){return jc.register(t)};Mc.alias=function(e,t){return jc.alias(e,t)};const Ro=Mc;var CE=Bc;Bc.displayName="bash";Bc.aliases=["shell"];function Bc(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:r,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=t.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],a=o.variable[1].inside,s=0;s<i.length;s++)a[i[s]]=t.languages.bash[i[s]];t.languages.shell=t.languages.bash})(e)}const kE=CE;var TE=Vc;Vc.displayName="jsx";Vc.aliases=[];function Vc(e){(function(t){var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,o=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function a(d,m){return d=d.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return o}).replace(/<SPREAD>/g,function(){return i}),RegExp(d,m)}i=a(i).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=a(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:a(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:a(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var s=function(d){return d?typeof d=="string"?d:typeof d.content=="string"?d.content:d.content.map(s).join(""):""},u=function(d){for(var m=[],p=0;p<d.length;p++){var v=d[p],S=!1;if(typeof v!="string"&&(v.type==="tag"&&v.content[0]&&v.content[0].type==="tag"?v.content[0].content[0].content==="</"?m.length>0&&m[m.length-1].tagName===s(v.content[0].content[1])&&m.pop():v.content[v.content.length-1].content==="/>"||m.push({tagName:s(v.content[0].content[1]),openedBraces:0}):m.length>0&&v.type==="punctuation"&&v.content==="{"?m[m.length-1].openedBraces++:m.length>0&&m[m.length-1].openedBraces>0&&v.type==="punctuation"&&v.content==="}"?m[m.length-1].openedBraces--:S=!0),(S||typeof v=="string")&&m.length>0&&m[m.length-1].openedBraces===0){var T=s(v);p<d.length-1&&(typeof d[p+1]=="string"||d[p+1].type==="plain-text")&&(T+=s(d[p+1]),d.splice(p+1,1)),p>0&&(typeof d[p-1]=="string"||d[p-1].type==="plain-text")&&(T=s(d[p-1])+T,d.splice(p-1,1),p--),d[p]=new t.Token("plain-text",T,null,T)}v.content&&typeof v.content!="string"&&u(v.content)}};t.hooks.add("after-tokenize",function(d){d.language!=="jsx"&&d.language!=="tsx"||u(d.tokens)})})(e)}const RE=TE;var NE=zc;zc.displayName="scss";zc.aliases=[];function zc(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const LE=NE,$E={'code[class*="language-"]':{color:"#f8f8f2",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#2b2b2b",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#2b2b2b",padding:"0.1em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"#d4d0ab"},prolog:{color:"#d4d0ab"},doctype:{color:"#d4d0ab"},cdata:{color:"#d4d0ab"},punctuation:{color:"#fefefe"},property:{color:"#ffa07a"},tag:{color:"#ffa07a"},constant:{color:"#ffa07a"},symbol:{color:"#ffa07a"},deleted:{color:"#ffa07a"},boolean:{color:"#00e0e0"},number:{color:"#00e0e0"},selector:{color:"#abe338"},"attr-name":{color:"#abe338"},string:{color:"#abe338"},char:{color:"#abe338"},builtin:{color:"#abe338"},inserted:{color:"#abe338"},operator:{color:"#00e0e0"},entity:{color:"#00e0e0",cursor:"help"},url:{color:"#00e0e0"},".language-css .token.string":{color:"#00e0e0"},".style .token.string":{color:"#00e0e0"},variable:{color:"#00e0e0"},atrule:{color:"#ffd700"},"attr-value":{color:"#ffd700"},function:{color:"#ffd700"},keyword:{color:"#00e0e0"},regex:{color:"#ffd700"},important:{color:"#ffd700",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};Ro.registerLanguage("jsx",RE);Ro.registerLanguage("css",iE);Ro.registerLanguage("scss",LE);Ro.registerLanguage("bash",kE);const Vt=({code:e,children:t,language:n="jsx",caption:r})=>{const[o,i]=$.useState(!1);return c("div",{className:"codeblock",children:[!!r&&l("h4",{className:"caption",children:r}),l("div",{className:`clipboard ${o?"copied":""}`,onClick:()=>{navigator.clipboard.writeText(e),i(!0),t0(2e3).then(()=>i(!1))},children:o?"Copied":"Copy"}),l(Ro,{language:n,style:$E,showLineNumbers:!0,children:e||t})]})},OE=()=>c("div",{children:[l("h1",{children:"Getting Started"}),c("p",{children:["Add the ",l("code",{className:"code",children:"@abw/react-formula"})," module to your project using your favourite package manager."]}),l(Vt,{language:"bash",children:`## using npm
$ npm add @abw/react-formula

## using yarn
$ yarn add @abw/react-formula

## using pnpm
$ pnpm add @abw/react-formula
`}),l("p",{children:"You can then import the modules and start using them."}),l(Vt,{children:`import { Form, Field, Submit } from '@abw/react-formula'

const MyFormExample = () =>
  <Form onSubmit={submit => console.log('Form submit:', submit)}>
    <Field name="name" label="What is your name?"/>
    <Submit/>
  </Form>

export default MyFormExample
`}),l("p",{children:"If you want to use the provided styles (and you probably will to start with) then you'll need to import the default CSS stylesheet into your React app.  Something like this:"}),l(Vt,{children:"import '@abw/react-formula/css/formula.css'"}),l("p",{children:"Or if you're using SASS then you can import the SASS components into your main stylesheet."}),l(Vt,{language:"scss",children:"@import '@abw/react-formula/scss/formula.scss';"}),c("p",{children:["See the ",l("a",{href:"styling",children:"styling page"})," for further information about customising the styles."]})]}),AE=()=>c("div",{className:"home",children:[l("h1",{children:"Why Does This Exist?"}),c("div",{className:"pic-side",children:[c("div",{children:[l("img",{src:Ui("fruit-loop.svg")}),c("div",{className:"caption",children:["Fruit by Artem Yurov from"," ",l("a",{href:"https://thenounproject.com/browse/icons/term/fruit/",target:"_blank",rel:"noreferrer",title:"Fruit Icons",children:"Noun Project"}),". Clipboard and loop by Andy Wardley."]})]}),c("div",{className:"blurb",children:[c("p",{className:"intro",children:[l("code",{className:"code",children:"react-formula"})," is yet another React form component library."]}),l("p",{className:"subintro",children:"I know what you're thinking.  Is this guy fruit loopy? What does the World need with another React form library? What makes this different, better, and/or worse than all the other form libraries?  Will this guy do my homework for me? Why do we exist?  What is the meaning of life? Where did I leave my car keys? And what is it with all the badgers?"}),l("p",{className:"subintro",children:"All these questions will be answered and more.  Well, OK, maybe not all of them.  But perhaps I might be able to explain why I wrote this library."})]})]}),l("h2",{children:"Buzzword Bingo"}),l("p",{className:"intro",children:"Here's the TL;DR about what this library aims to achieve."}),c("ul",{children:[l("li",{children:"Simplicity"}),l("li",{children:"Consistency"}),l("li",{children:"Maintainability"}),l("li",{children:"Flexibility"}),l("li",{children:"Extensibility"}),l("li",{children:"Reliability"}),l("li",{children:"Security"}),l("li",{children:"Modularity"}),l("li",{children:"Accessibility"}),l("li",{children:"Presentability"}),l("li",{children:"Efficiency"})]}),l("h2",{children:"Am I Fruit Loopy?"}),l("p",{children:"Yes, probably.  But I had my reasons."}),l("p",{children:"So why did I write it?  Well, it started out a few years back when the state of the art in form libraries wasn't quite where it is today. React 16.3 had just been released with its shiny new contexts and I thought it might be a better way to build a form library than what we had at the time.  So I did and it turned out pretty well.  It was designed by me, for me, and unsurprisingly it met my particular needs particularly well.  It may not meet yours."}),c("p",{children:["Over the years I've built a ",l("i",{children:"lot"})," of forms with it for various different customers.  I don't much fancy the idea of having to re-write hundreds of forms that already work Just Fine™ and I don't imagine my customers would want to pay me to do it either. So I still use it, and have occasional bursts of development/maintenance where I add new features, clean up ugly bits of code, fix minor bugs or limitations that have been annoying me for a while, or update the documentation and examples.  That's what I'm doing right now, as it happens."]}),c("p",{children:["For the last few years it's been an integral part of my ",l("a",{href:"https://github.com/abw/badger-ui",children:"badger-ui"})," library but I'm now trying to break things up a little bit and extract some of the reusable functionality into different modules.  So that's how we got here."]}),c("p",{children:["But the best reason of all is that I built it because I ",l("i",{children:"wanted"})," to. I like writing software.  I like solving problems.  Sometimes that means spending my weekends re-inventing wheels that happen to fit my car a bit better than all the other wheels out there.  That's all the justification I need."]}),l("h2",{children:"Why I Like This Library"}),c("ul",{children:[c("li",{children:["Above all else, ",l("b",{children:"simplicity"}),".  Building a form with"," ",l("code",{children:"react-formula"})," should be ",l("i",{children:"at least"})," as easy as defining a Vanilla HTML form, and ideally, easier. I don't want to have to build every field from a dozen different components to include a label, input, validation message, and so on."]}),c("li",{children:["Closely related to that is ",l("b",{children:"consistency"}),`. In the vast majority of cases I want all my forms and fields to look the same and conform to whatever branding and/or style guide I've got in place.  I don't mind spending a bit of time up front to get everything looking right, but after that I just want to "push a button" and get the same results every time with the minimum of fuss.`]}),c("li",{children:["And that brings us on to ",l("b",{children:"maintainability"}),".  The less markup I have to write, the less I have to maintain, and the easier it will be to do so.  If the client or a designer decides they want all the form fields to have the label in a different place, be aligned differently, have more padding, or something else, then I want to be able to change that in a single place.  It might mean changing some CSS, re-defining a style, or updating a single field layout component.  But I certainly don't want to have to go and edit every field in every form to make the change."]}),c("li",{children:["Of course there are times when you want to do something a bit different, so ",l("b",{children:"flexibility"})," is also important.  It's good to have a default layout for ",l("i",{children:"most"})," of your form fields, but you also need to be able to switch something else in for those special cases. This should be easy, not hard."]}),c("li",{children:[l("b",{children:"Extensibility"})," is also important for those times when there isn't something available off-the-shelf and you need to get your hands dirty and write a custom component.  Maybe you need a custom autocomplete component or search widget.  Maybe you need to include Recaptcha validation, or something else that requires aynchronous calls to an API.  I don't know what you might need.  I can't even predict what I might need this time next week.  So it's important that the library exposes enough of the internal workings to allow you to plug new things in.  It might not be easy, but it should be possible."]}),c("li",{children:["None of that would be possible without ",l("b",{children:"reliability"}),".  We need to be able to trust the library to 'Do The Right Thing' and that means it has to be well tested."]}),c("li",{children:["Another concern is ",l("b",{children:"security"}),". It supports client-side and server-side validation.  If for some reason an invalid input gets past the client-side validation and generates an angry response from the server then it can update the form to display the errors and highlight the invalid field(s)."]}),c("li",{children:["And talking of concerns, we like to separate them, so ",l("b",{children:"modularity"})," ",'is important.  You should be able to define the schema for a form and all of its fields (including validation) in a single place, possibly away from the markup used to render the form.  Being able to separate the "logic" of a form from the presentational aspects make it easier to update both in isolation.']}),c("li",{children:["TODO: ",l("b",{children:"Accessibility"})," - WAI-ARIA compliance (although there's still a bit of work to be done there)."]}),c("li",{children:["Functionality is paramount, but we also care about ",l("b",{children:"presentability"}),". It comes with a default stylesheet that provides reasonable defaults for styling different form components and all their states (focussed, valid, invalid, disabled, etc).  It's written using SASS and almost everything is styled using variables that you can easily change.  There's a single variable that you can set to change the basic theme colour to match your brand so you can get up and running really quickly.  As and when you need to change styles, add new components, or make other changes then you generally can with the minimum of fuss."]}),c("li",{children:["And last, but not least, ",l("b",{children:"efficiency"}),".  The library is comparatively small and simple (less than 10kB for the compressed bundle at the time of writing). It only works with modern (v18+) versions of React and there are no plans to port it to other web frameworks.  It doesn't set out to please all of the people all of the time.  Rather, it is designed to please me, most of the time, and as such it may not have (and may never have) all the features that other people might want.  You are, of course, free to go and write your own form library."]})]}),c("div",{className:"badger",children:[l("img",{src:Ui("badger.svg"),alt:"badger"}),l("div",{className:"caption",children:"Why am I here?"})]})]}),PE=()=>c("div",{children:[l("h1",{children:"Tutorial"}),l("p",{children:"This section of the documentation provides a guided walk-through of the features to get you up and running as quickly as possible."}),l("ul",{className:"menu",children:Br.items.map(([e,t])=>l("li",{children:l(J,{to:`/tutorial/${e}`,text:t})},e))})]});var DE=Object.defineProperty,IE=(e,t,n)=>t in e?DE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ss=(e,t,n)=>(IE(e,typeof t!="symbol"?t+"":t,n),n);const yg=(e,t={})=>{const n=tt.createContext(t);return{Context:n,Provider:r=>l(e,{...r,render:o=>l(n.Provider,{value:o,children:r.children})}),Consumer:r=>o=>l(n.Consumer,{children:i=>l(r,{...i,...o})}),Use:()=>tt.useContext(n)}};function _E(e={},t={},n={}){return Object.entries(t).reduce((r,[o,i])=>{const a=n[i];return a!==null&&typeof a<"u"&&(r[o]=a),r},{...e})}function jE(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,r)=>{const o=e[r]||ME(`Cannot expose non-existent action method: ${r}`);return n[r]=o.bind(e),n},{})}function ME(...e){throw new Error(e.join(""))}class pi extends tt.Component{constructor(t){super(t);const n=this.constructor;this.debug=n.debug||t.debug?n.debugPrefix?(r,...o)=>console.log("%c"+n.debugPrefix+"%c"+r,`color: ${n.debugColor}`,"color:black",...o):console.log.bind(console):()=>{},this.state=_E(n.initialState,n.initialProps,t),this.actions=jE(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}ss(pi,"initialState",{}),ss(pi,"initialProps",{}),ss(pi,"actions",[]);const BE="",VE="blur",va="changed",qc="disabled",zE="errors",qE="field",ml="focus",UE="formula",HE="fulfilled",pr="invalid",WE="Optional",YE="Required",GE="A value is required",Xh="reset",ya="submitted",pl="submitting",gr="valid",Yn="validating",KE=["id","name","value","checked","disabled","placeholder","autoComplete","onFocus","onBlur","size","min","max","minLength","maxLength","step","pattern","list"],QE=["id","name","action","method","encType"],XE={boolean:!0,string:!0,number:!0};let bg=class extends pi{constructor(t){super(t),this.newStatus=this.constructor.newStatus(t),this.state={status:this.newStatus(Xh)}}setStatus(t,n={},r=Qr){this.mounted&&this.setState(o=>({status:this.newStatus(t,o.status),...n}),r)}setResetState(t,n){this.setStatus(Xh,t,n)}setChangedState(t,n){this.setStatus(va,t,n)}setValidatingState(t,n){this.setStatus(Yn,t,n)}setInvalidState(t,n){this.setStatus(pr,t,n)}setValidState(t,n){this.setStatus(gr,t,n)}};function wg(e,t){return t.reduce((n,r)=>(pa(e[r])&&(n[r]=e[r]),n),{})}const ba=e=>wg(e,KE),ZE=e=>wg(e,QE),No=(e,t,...n)=>Object.entries(t).reduce((r,[o,i])=>(e[o]&&r.push(i),r),[...n]).filter(r=>r).join(" "),Fg=e=>XE[typeof e]?{value:e,text:e}:e,Hi=(...e)=>function(...t){for(let n of e.filter(pa))n(...t)};function Zh(e){if(Y1(e))return[1,!e];if(pa(e)){const t=(e==null?void 0:e.toString().length)??0;return[t,t===0]}return[0,!0]}const JE={className:UE,submittingClass:pl,validatingClass:Yn,headerClass:"header",bodyClass:"body",footerClass:"footer",errorsClass:zE,errorsInHeader:!0,resetOnSuccess:!0,focusInvalidField:!0,enctype:"application/x-www-form-urlencoded",method:"post",errorsTitle:e=>`Form Submission Error${e>1?"s":""}`,errorsPrompt:e=>`Please correct ${e===1?"this problem":"these problems"} and re-submit:`},vu={validateOnChange:!1,validateOnBlur:!1,validateOnInvalid:!0,showRequired:!1,showOptional:!1,validMessage:null,minValidateLength:1,requiredMessage:GE,requiredLabel:YE,optionalLabel:WE,fieldClass:qE,validClass:gr,invalidClass:pr,disabledClass:qc,focusClass:ml},e2=jp(["showRequired","requiredLabel","showOptional","optionalLabel","validateOnChange","validateOnBlur","validateOnInvalid","minValidateLength","validMessage","requiredMessage","fieldClass","focusClass","validClass","invalidClass","disabledClass"]),wa={[gr]:!1,[pr]:!1},t2={...wa,[va]:!0},n2={...wa,[Yn]:!0},r2={[gr]:!1,[pr]:!0,[Yn]:!1},l2={[gr]:!0,[pr]:!1,[Yn]:!1},o2={[ml]:!1},i2={[ml]:!0},a2={[pl]:!0,[ya]:!1},s2={[pl]:!1,[ya]:!0},xg={changed:t2,validating:n2,invalid:r2,valid:l2},Sg=e=>(t,n={})=>({...n,...e[t]||{[t]:!0}}),u2=()=>{const e={...wa,[va]:!1,[Yn]:!1,[ya]:!1,[pl]:!1};return Sg({...xg,reset:e,submitting:a2,submitted:s2})},c2=(e={})=>{const t={...wa,[va]:!1,[Yn]:!1,[ml]:!1,[qc]:e.disabled||!1};return Sg({...xg,reset:t,focus:i2,blur:o2})};class Er extends bg{constructor(t){super(t),this.fields={};const{hidden:n={}}=t,r={...n};this.state={...this.state,initialValues:r,values:{...r},errors:[],error:null},this.props.onLoad&&this.props.onLoad(this)}componentDidMount(){this.debug("mounted"),this.mounted=!0}componentWillUnmount(){this.debug("unmounted"),this.mounted=!1}fieldSpec(t,n){var i,a;const r=((i=this.props.fields)==null?void 0:i[t])??{},o=n.value??((a=this.props.values)==null?void 0:a[t]);return{name:t,...e0(this.props,e2),...r,...n,value:o}}attachField(t,n){this.debug("attaching [%s] field => %o",t,n),this.fields[t]=n,this.setState(r=>({values:{...r.values,[t]:n.state.value}}))}detachField(t){this.debug("detaching [%s] field",t),delete this.fields[t]}setSubmittingState(t,n){this.setStatus(pl,t,n)}setSubmittedState(t,n){this.setStatus(ya,t,n)}setFocus(t,n){var r;n==null||n.preventDefault(),(r=this.fields[t])==null||r.setFocus()}reset(t){this.mounted&&(this.debug("reset()"),t==null||t.preventDefault(),this.resetFields(),this.setResetState({errors:[],error:null},this.props.onReset))}resetFields(){this.debug("resetFields()"),Object.values(this.fields).forEach(t=>{console.log("resetting ",t.name),t.reset()})}setValue(t,n){this.setChangedState({values:{...this.state.values,[t]:n}})}setValues(t,n){n==null||n.preventDefault(),Object.entries(t).forEach(([r,o])=>{var i;return(i=this.fields[r])==null?void 0:i.setValue(o)})}setHidden(t){const n={...this.state.hidden,...t};this.setState({hidden:n})}submit(t){t==null||t.preventDefault(),this.debug("submit"),this.validate().then(n=>this.handleSubmit(n)).catch(n=>this.debug("Form is NOT valid:",n))}validate(){return this.debug("validate()"),this.setValidatingState(),new Promise(this.validator()).then(t=>(this.debug("validator passed: ",t),this.setValidState({submit:t,error:null,errors:[]},this.props.onValid),t)).catch(t=>{throw this.debug("validator failed: ",t),this.handleError({error:t.error,errors:t.errors}),t})}validator(){return(t,n)=>Promise.allSettled(Object.values(this.fields).map(r=>r.validate())).then(r=>r.reduce((o,{status:i,value:a,reason:s})=>(i===HE?Object.assign(o.values,a.data||{[a.name]:a.value}):o.errors.push(s),o),{values:{...this.state.values},errors:[]})).then(r=>(this.debug("field validation complete: ",r),r.errors.length&&n(r),r)).then(r=>{if(this.props.validate)return this.debug("validating form: ",r),this.props.validate(r.values).then(o=>t({...r,values:o})).catch(o=>n(o));t(r)})}handleSubmit(t){if(this.debug("Form is valid, handling submission:",t),!this.props.onSubmit){window.alert("You haven't defined an onSubmit handler: "+JSON.stringify(t.values));return}this.setSubmittingState({},async()=>{this.debug("calling onSubmit() handler: ",t);try{this.props.onSubmit(t.values,this.getContext()).then(n=>{console.log(".then response:",n),this.handleSuccess(n)}).catch(n=>{console.log(".catch error: ",n),this.handleError(n)}),console.log("after promise: ")}catch(n){this.handleError({error:n})}})}handleSuccess(t){this.debug("handleSuccess()",t);const n=this.props.onSuccess||Qr;this.setValidState({},Hi(()=>n(t),this.state.resetOnSuccess?()=>this.resetFields():null))}handleError(t){this.debug("handleError()",t);const n=hl(t==null?void 0:t.errors)&&this.fieldErrors(t.errors),r=this.props.onError||this.props.onFailure||Qr;console.log("onError: ",r),this.setInvalidState(t,Hi(()=>r(t),n?()=>n.setFocus():null))}fieldErrors(t){const n=t.reduce((r,o)=>{const{name:i,message:a}=o,s=i&&this.fields[i];return s&&(o.label||(o.label=s.props.label),s.setInvalidState({message:a}),r.push(s)),r},[]);return this.state.focusInvalidField&&n.length&&n[0]}getContext(){return{...JE,...this.props,...this.state,...this.actions}}}Dt(Er,"newStatus",u2),Dt(Er,"debug",!1),Dt(Er,"debugPrefix","Form > "),Dt(Er,"debugColor","rebeccapurple"),Dt(Er,"actions",["fieldSpec","attachField","detachField","setFocus","reset","validate","submit","setValue","setValues","setHidden","setStatus","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setSubmittingState","setSubmittedState"]);const d2=yg(Er),{Context:HL,Provider:h2,Consumer:Fa,Use:ht}=d2,f2=({error:e})=>{const t=e.label||e.name;return c(Ee,{children:[!!t&&c("b",{children:[t,": "]}),e.message]})},m2=({error:e})=>Hn(e)?e:l(f2,{error:e}),ei=$.createContext();function Jh(e){return typeof e=="function"}function p2(e){return typeof e=="object"&&!g2(e)&&!v2(e)}function g2(e){return Array.isArray(e)}function v2(e){return e===null}function y2(e={},t=!1,n={}){if(!t)return n;let r={};const o=Jh(t)?t(e):e[t];return p2(o)?Object.assign(r,o,n):Jh(o)?Object.assign(r,n,o(n,e)):Object.assign(r,n),r}const b2=e=>({Context:ei,Provider:({children:t,...n})=>l(ei.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>l(ei.Consumer,{children:r=>l(t,{...r,...n,context:r})}),Component:(t,n=t.displayName||t.name)=>tt.forwardRef((r,o)=>l(ei.Consumer,{children:i=>l(t,{...y2(i,n,r),ref:o})}))}),w2=b2(),fe=w2.Component,F2=()=>{const e=ht(),{error:t,errors:n,errorsClass:r,errorsTitle:o,errorsPrompt:i,Error:a=m2}=e,s=!!t,u=n.length+(s?1:0);return u===0?null:c("div",{className:r,children:[!!o&&l("h3",{children:o(u)}),s&&l("h4",{children:l(a,{error:t})}),n.length!==0&&c(Ee,{children:[!!i&&l("p",{children:i(n.length)}),l("ul",{children:n.map((d,m)=>l("li",{children:l(a,{error:d})},m))})]})]})},Uc=fe(F2,"Form.Errors"),x2=()=>{const e=ht(),{title:t,headerClass:n,errorsInHeader:r,Errors:o=Uc}=e;return c("header",{className:n,children:[!!t&&l("h3",{children:t}),!!r&&l(o,{})]})},S2=()=>{const e=ht(),{footerClass:t,errorsInFooter:n,Errors:r=Uc}=e;return l("footer",{className:t,children:!!n&&l(r,{})})},E2=({children:e})=>{const t=ht(),{className:n,bodyClass:r,validClass:o,invalidClass:i,validatingClass:a,submittingClass:s,Header:u=x2,Footer:d=S2}=t,m=No(t.status,{[gr]:o,[pr]:i,[Yn]:a,[pl]:s},n),p=ZE(t);return c("form",{className:m,...p,children:[l(u,{}),l("div",{className:r,children:e}),l(d,{})]})},C2=({children:e,Layout:t=E2,...n})=>l(h2,{...n,children:l(t,{children:e})}),O=fe(C2,"Form");class Cr extends bg{constructor(t){super(t),this.name=t.name;const{value:n}=t,r=n;this.form=this.props.form,this.state={...this.state,initialValue:r,value:n,error:null},this.debug(`${this.name} field state: `,this.state),this.inputRef=$.createRef(),this.resetRef=$.createRef(),this.on={load:this.contextFunction(this.props.onLoad),focus:this.contextFunction(this.props.onFocus),blur:this.contextFunction(this.props.onBlur),change:this.contextFunction(this.props.onChange),valid:this.contextFunction(this.props.onValid),invalid:this.contextFunction(this.props.onInvalid)},this.on.load()}contextFunction(t){return t?()=>t(this.getContext()):Qr}componentDidMount(){this.debug("componentDidMount"),this.mounted=!0,this.form.attachField(this.props.name,this)}componentWillUnmount(){this.debug("componentWillUnmount"),this.mounted=!1,this.form.detachField(this.props.name)}setFocusState(t,n){return this.setStatus(ml,t,n)}setBlurState(t,n){return this.setStatus(VE,t,n)}onFocus(){this.setFocusState({},this.on.focus)}onBlur(){this.setBlurState({},this.props.validateOnBlur?()=>this.validation(this.on.blur):this.on.blur)}setFocus(){var t,n;(n=(t=this.inputRef)==null?void 0:t.current)==null||n.focus()}onChange(t){this.debug(`onChange(${t})`);const n=this.props.prepareValue?this.props.prepareValue(t):t,{invalid:r}=this.state.status,{validateOnChange:o,validateOnInvalid:i=!0,minValidateLength:a=1}=this.props,[s]=Zh(n);let u=o||i&&r;s<a&&!r&&(u=!1),this.setChangedState({value:n},()=>{this.form.setValue(this.props.name,n),u?this.validation(this.on.change):this.on.change()})}setValue(t,n){n==null||n.preventDefault(),this.onChange(t)}reset(t){t==null||t.preventDefault();const n=this.props.prepareValue?this.props.prepareValue(this.state.initialValue):this.state.initialValue;return this.debug(`reset initialValue:${this.state.initialValue} => ${n}`),this.setResetState({value:n},()=>{var r,o;return(o=(r=this.resetRef)==null?void 0:r.current)==null?void 0:o.reset()}),n}validation(t){this.validate(t).then(Qr).catch(Qr)}validate(t){this.debug("validate()");const n={name:this.name,label:this.props.label};return new Promise(this.validator()).then(r=>(this.debug(`validate() passed for ${this.name} field: `,r),this.setValidState(r,Hi(this.on.valid,t)),{...n,...r})).catch(r=>{throw this.debug(`validate() failed for ${this.name} field:`,r),this.setInvalidState(r,Hi(this.on.invalid,t)),{...n,...r}})}validator(){return(t,n)=>{const{value:r=""}=this.state,{validate:o,required:i,requiredMessage:a,validMessage:s}={...vu,...this.props},[u,d]=Zh(r);if(this.debug(`${this.name} field value is [${r}] length is [${u}]`),this.setValidatingState(),o){this.debug(`calling validate function for ${this.name} field`);const m=this.getContext();o(m.value,m,t,n).then(p=>{this.debug(`validate passed for ${this.name} field:`,p),t({value:p,message:s})}).catch(p=>{this.debug(`validate failed for ${this.name} field:`,p);const v=Hn(p)?p:p.message;n({message:v})})}else d?i?(this.debug(`failing validation for ${this.name} field - required field is empty`),n({message:a})):(this.debug(`passing validation for ${this.name} field - value is empty but not required`),t({value:r,message:s})):(this.debug(`no validation defined for ${this.name} field`),t({value:r,message:s}))}}setValid(){this.setValidState({message:null},this.on.valid)}setInvalid(t){this.setInvalidState({message:t},this.on.invalid)}getContext(){const t={...vu,...this.props,...this.state,...this.actions,name:this.name,inputRef:this.inputRef,resetRef:this.resetRef,setRef:this.resetRef};return delete t.form,delete t.children,delete t.render,t}}Dt(Cr,"newStatus",c2),Dt(Cr,"debug",!1),Dt(Cr,"debugPrefix","Field > "),Dt(Cr,"debugColor","teal"),Dt(Cr,"actions",["onFocus","onBlur","onChange","setFocus","setValue","reset","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setFocusState","setBlurState"]);const k2=yg(Cr),{Context:T2,Provider:R2,Consumer:WL,Use:ot}=k2,N2=({field:e=ot()})=>!e.required&&e.showOptional&&l("span",{className:"optional",children:e.optionalLabel}),L2=fe(N2,"Form.Field.Optional"),$2=({field:e=ot()})=>e.required&&e.showRequired&&l("span",{className:"required",children:e.requiredLabel}),O2=fe($2,"Form.Field.Required"),A2=({field:e=ot()})=>{const{labelClass:t="",label:n,id:r,required:o}=e,i=e.showRequired&&o,a=e.showOptional&&!o;return(n||i||a)&&c("label",{htmlFor:r,className:t,children:[n||l("span",{children:" "}),i&&l(O2,{field:e}),a&&l(L2,{field:e})]})},xa=fe(A2,"Form.Field.Label"),P2=({field:e=ot()})=>{const{help:t,message:n}=e,r=n||t;return r?l("div",{className:"help",children:r}):null},Hc=fe(P2,"Form.Field.Message"),D2=e=>t=>e.onChange(t.target.value),I2=e=>t=>e.onChange(t.target.checked),Bn={default:D2,checkbox:I2},_2=({field:e=ot()})=>{const{id:t,text:n,type:r="checkbox",inputClass:o="input",inputsClass:i="checkbox inputs",optionClass:a="option",checkedClass:s="checked",handler:u=Bn[r]||Bn.default}=e,d=ba(e),m=e.value,p=No({checked:m},{checked:s},a);return l("div",{className:i,children:c("label",{htmlFor:t,className:p,children:[l("span",{className:"checkbox",children:l("input",{className:o,type:r,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:u(e),...d,checked:e.value})}),l("span",{className:"label",children:n})]})})},j2=fe(_2,"Form.Input.Checkbox"),M2=({field:e=ot()})=>l("input",{type:"hidden",name:e.name,value:e.value}),B2=fe(M2,"Form.Input.Hidden"),V2=({field:e=ot()})=>{const{prefix:t,prefixClass:n="prefix"}=e;return t&&l("div",{className:n,children:t})},z2=fe(V2,"Form.Input.Prefix"),q2=({field:e=ot()})=>{const{options:t=[],type:n="radio",inputClass:r="input",inputsClass:o="radio inputs",optionClass:i="option",checkedClass:a="checked",handler:s=Bn[n]||Bn.default}=e,u=ba(e);return l("div",{className:o,children:t.map(d=>{d=Fg(d);const m=`${e.id}-${d.value}`,p=e.value==d.value,v=No({checked:p},{checked:a},i,d.className);return c("label",{htmlFor:m,className:v,children:[l("input",{className:r,type:n,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:s(e),...u,id:m,checked:p,value:d.value}),l("span",{className:"label",children:d.text})]},d.value)})})},U2=fe(q2,"Form.Input.Radio"),H2=({field:e=ot()})=>{const{options:t=[],placeholder:n,type:r="select",className:o="input",inputsClass:i="select inputs",optionClass:a="option",handler:s=Bn[r]||Bn.default}=e,u=ba(e);return l("div",{className:i,children:c("select",{className:o,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:s(e),...u,value:e.value,required:e.required||!!n,children:[console.log(`render select with value: ${e.value} (${typeof e.value})`),!!n&&l("option",{value:"",hidden:!0,disabled:!0,children:n}),t.map(d=>(d=Fg(d),console.log(`render option with value: ${d.value} (${typeof d.value}) = ${e.value===d.value?"SELECTED":""}`),l("option",{className:a,value:d.value,disabled:d.disabled,children:d.text},d.value)))]})})},W2=fe(H2,"Form.Input.Select"),Y2=({field:e=ot()})=>{const{suffix:t,suffixClass:n="suffix"}=e;return t&&l("div",{className:n,children:t})},G2=fe(Y2,"Form.Input.Suffix"),K2=({field:e=ot()})=>{const{type:t="text",inputClass:n="input",inputsClass:r="inputs",prefixedClass:o="prefixed",suffixedClass:i="suffixed",Prefix:a=z2,Suffix:s=G2,handler:u=Bn[t]||Bn.default}=e;let d=No(e,{prefix:o,suffix:i},r);const m=ba(e);return c("div",{className:d,children:[l(a,{field:e}),l("input",{type:t,className:n,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:u(e),...m}),l(s,{field:e})]})},Wi=fe(K2,"Form.Input.Text"),Q2=({field:e=ot()})=>{const{className:t="input",inputsClass:n="inputs",rows:r=5}=e;return l("div",{className:n,children:l("textarea",{id:e.id,ref:e.inputRef,className:t,name:e.name,value:e.value,disabled:e.disabled,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,placeholder:e.placeholder,autoComplete:e.autocomplete,onChange:o=>e.onChange(o.target.value),onFocus:e.onFocus,onBlur:e.onBlur,rows:r})})},X2=fe(Q2,"Form.Input.TextArea"),ef={default:Wi,checkbox:j2,hidden:B2,radio:U2,select:W2,text:Wi,textarea:X2},Z2=e=>{const{status:t,className:n,fieldClass:r,validClass:o,invalidClass:i,disabledClass:a,focusClass:s}=e;return No(t,{[gr]:o,[pr]:i,[ml]:s,[qc]:a},r,n)},J2=({field:e=ot(),children:t})=>{const{type:n,Label:r=xa,Message:o=Hc,Input:i=ef[n]||ef.default}=e,a=Z2(e);return l("div",{className:a,children:t||c(Ee,{children:[l(r,{field:e}),l(i,{field:e}),l(o,{field:e})]})})},ke=fe(J2,"Form.Field.Layout"),eC=e=>{const{id:t,value:n}=e;return{...e,id:t||$.useId(),value:n??e.default??BE}},tC=({name:e,children:t,Layout:n=ke,...r})=>{const o=ht(),i=eC(o.fieldSpec(e,r)),a=t?hl(t)?t:[t]:null;return l(R2,{form:o,...i,children:a?a.map((s,u)=>yc(s)?l(T2.Consumer,{children:s},u):s):l(n,{})})},x=fe(tC,"Form.Field"),nC=({names:e,...t})=>l(Ee,{children:_p(e).map(n=>l(x,{name:n,...t},n))}),yt=fe(nC,"Form.Fieldset"),rC=({className:e="",legend:t,children:n,fields:r})=>c("fieldset",{className:e,children:[!!t&&l("legend",{children:t}),!!r&&l(yt,{names:r}),n]}),Yi=fe(rC,"Form.Fieldset"),lC=({onClick:e,children:t,text:n="Button",type:r="button",...o})=>l("button",{type:r,onClick:e,...o,children:t||n}),Wc=fe(lC,"Form.Button"),oC=({text:e="Cancel",className:t="cancel",Button:n=Wc,...r})=>l(n,{text:e,className:t,...r}),Sa=fe(oC,"Form.Cancel"),iC=({type:e="reset",text:t="Reset",className:n="reset",Button:r=Wc,...o})=>{const{reset:i}=ht();return l(r,{type:e,text:t,className:n,onClick:i,...o})},vr=fe(iC,"Form.Reset"),aC=({type:e="submit",text:t="Submit",className:n="submit",Button:r=Wc,...o})=>{const{submit:i}=ht();return l(r,{type:e,text:t,className:n,onClick:i,...o})},oe=fe(aC,"Form.Submit"),sC=({className:e="flex space",cancel:t={},submit:n={}})=>c("div",{className:e,children:[l(Sa,{...t}),l(oe,{...n})]}),Eg=fe(sC,"Form.CancelSubmit"),uC=({className:e="controls",reset:t={},submit:n={}})=>c("div",{className:e,children:[l(vr,{...t}),l(oe,{...n})]}),Ea=fe(uC,"Form.ResetSubmit"),cC=({className:e="flex space",cancel:t={},reset:n={},submit:r={}})=>c("div",{className:e,children:[c("div",{children:[l(Sa,{...t}),l(vr,{...n})]}),l(oe,{...r})]}),Cg=fe(cC,"Form.CancelResetSubmit"),dC=({status:e,children:t})=>e.changed&&t,Yc=Fa(dC),hC=["values","config","status","fields"],$t=({show:e={values:!0},showAll:t=!1})=>{const n=ht();return l("div",{className:"debug",children:hC.map(r=>(t||e[r])&&c(tt.Fragment,{children:[l("h4",{children:Z1(r)}),l("pre",{children:JSON.stringify(n[r],null,2)})]},r))})},fC=fe($t,"Form.Debug"),mC=()=>c(O,{children:[l(x,{name:"email",label:"Email Address",required:!0}),l(x,{name:"password",type:"password",label:"Password",required:!0}),l(oe,{text:"Login"})]}),pC=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const BasicLoginForm = () =>
  <Form>
    <Field name="email" label="Email Address" required/>
    <Field name="password" type="password" label="Password" required/>
    <Submit text="Login"/>
  </Form>

export default BasicLoginForm`,I=({Element:e,code:t,children:n="",className:r="",caption:o})=>c("div",{className:`example ${r}`,children:[l("div",{className:"mar-t-2",children:l(Vt,{caption:o,code:kg(t)})}),n,e?l("div",{className:"mar-t-2",children:l(e,{})}):null]}),kg=e=>e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,""),gC=({prevLink:e,prevText:t,nextLink:n,nextText:r})=>c("div",{className:"flex space",children:[l(tf,{caption:"Previous",text:t,link:e}),l(tf,{caption:"Next",text:r,link:n})]}),tf=({caption:e,text:t,link:n})=>n?c(J,{to:n,className:"prev-next-link",children:[l("h4",{children:e}),l("p",{children:t})]}):l("div",{}),bn=({uri:e})=>{const t=Br.items.findIndex(a=>a[0]===e);if(t<0)throw`Invalid tutorial page URI: ${e}`;const[n,r]=t>0?Br.items[t-1]:[],[o,i]=t<Br.items.length-1?Br.items[t+1]:[];return l(gC,{prevLink:n&&`/tutorial/${n}`,prevText:r,nextLink:o&&`/tutorial/${o}`,nextText:i})},vC=()=>c("div",{children:[l("h1",{children:"Defining a Form"}),c("p",{className:"intro",children:["One of the underlying principles of this library is, to borrow a phrase from Larry Wall, to make simple things simple and hard things possible. It should be just as easy, if not easier, to create a form using"," ",l("code",{children:"react-formula"})," as it should be using vanilla HTML."]}),l("h2",{children:"A Simple Login Form"}),l("p",{children:"So without further ado, let's look at the one form that most websites will require: a user login form."}),l(I,{Element:mC,code:pC,caption:"Basic Login Form",children:l("p",{children:`Try entering some values in the form below and click on the "Login" button. Also see what happens if you don't enter a value for either field.`})}),c("h2",{children:[l("code",{children:"Form"}),", ",l("code",{children:"Field"})," and ",l("code",{children:"Submit"})]}),c("p",{children:["A form is defined using the ",l(ne,{})," component.  This example contains two ",l(ue,{})," components and a ",l(Mn,{})," button.  Each ",l(ue,{})," ",l("b",{children:"MUST"})," define a ",l("code",{children:"name"})," and everything else is optional. In both cases we add a ",l("code",{children:"label"})," and the ",l("code",{children:"required"})," ","flag to indicate that the user must enter a value.  In the case of the"," ",l("code",{children:"password"})," field we also set the input ",l("code",{children:"type"})," to"," ",l("code",{children:"password"}),".  For the ",l(Mn,{})," component we set the"," ",l("code",{children:"text"}),' property to customise the text displayed on the button. Otherwise it defaults to "Submit".']}),l("h2",{children:"Where Next?"}),c("p",{children:["The ",l("code",{children:"required"})," property is useful for simple cases, but at some point you'll want to add more thorough validation for fields.  Let's look at that next."]}),l(bn,{uri:"simple-form"})]});function yr(e){this._maxSize=e,this.clear()}yr.prototype.clear=function(){this._size=0,this._values=Object.create(null)};yr.prototype.get=function(e){return this._values[e]};yr.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var yC=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Tg=/^\d+$/,bC=/^\d/,wC=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,FC=/^\s*(['"]?)(.*?)(\1)\s*$/,Gc=512,nf=new yr(Gc),rf=new yr(Gc),lf=new yr(Gc),Rg={Cache:yr,split:yu,normalizePath:us,setter:function(e){var t=us(e);return rf.get(e)||rf.set(e,function(r,o){for(var i=0,a=t.length,s=r;i<a-1;){var u=t[i];if(u==="__proto__"||u==="constructor"||u==="prototype")return r;s=s[t[i++]]}s[t[i]]=o})},getter:function(e,t){var n=us(e);return lf.get(e)||lf.set(e,function(o){for(var i=0,a=n.length;i<a;)if(o!=null||!t)o=o[n[i++]];else return;return o})},join:function(e){return e.reduce(function(t,n){return t+(Kc(n)||Tg.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){xC(Array.isArray(e)?e:yu(e),t,n)}};function us(e){return nf.get(e)||nf.set(e,yu(e).map(function(t){return t.replace(FC,"$2")}))}function yu(e){return e.match(yC)||[""]}function xC(e,t,n){var r=e.length,o,i,a,s;for(i=0;i<r;i++)o=e[i],o&&(CC(o)&&(o='"'+o+'"'),s=Kc(o),a=!s&&/^\d+$/.test(o),t.call(n,o,s,a,i,e))}function Kc(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function SC(e){return e.match(bC)&&!e.match(Tg)}function EC(e){return wC.test(e)}function CC(e){return!Kc(e)&&(SC(e)||EC(e))}var bu={},kC={get exports(){return bu},set exports(e){bu=e}};kC.exports=function(e){return Ng(TC(e),e)};bu.array=Ng;function Ng(e,t){var n=e.length,r=new Array(n),o={},i=n,a=RC(t),s=NC(e);for(t.forEach(function(d){if(!s.has(d[0])||!s.has(d[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)o[i]||u(e[i],i,new Set);return r;function u(d,m,p){if(p.has(d)){var v;try{v=", node was:"+JSON.stringify(d)}catch{v=""}throw new Error("Cyclic dependency"+v)}if(!s.has(d))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(d));if(!o[m]){o[m]=!0;var S=a.get(d)||new Set;if(S=Array.from(S),m=S.length){p.add(d);do{var T=S[--m];u(T,s.get(T),p)}while(m);p.delete(d)}r[--n]=d}}}function TC(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var o=e[n];t.add(o[0]),t.add(o[1])}return Array.from(t)}function RC(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var o=e[n];t.has(o[0])||t.set(o[0],new Set),t.has(o[1])||t.set(o[1],new Set),t.get(o[0]).add(o[1])}return t}function NC(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}const LC=Object.prototype.toString,$C=Error.prototype.toString,OC=RegExp.prototype.toString,AC=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",PC=/^Symbol\((.*)\)(.*)$/;function DC(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function of(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return DC(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return AC.call(e).replace(PC,"Symbol($1)");const r=LC.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+$C.call(e)+"]":r==="RegExp"?OC.call(e):null}function Xr(e,t){let n=of(e,t);return n!==null?n:JSON.stringify(e,function(r,o){let i=of(this[r],t);return i!==null?i:o},2)}function Lg(e){return e==null?[]:[].concat(e)}let IC=/\$\{\s*(\w+)\s*\}/g;class pt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(IC,(o,i)=>Xr(n[i])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,o){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=o,this.errors=[],this.inner=[],Lg(t).forEach(i=>{pt.isError(i)?(this.errors.push(...i.errors),this.inner=this.inner.concat(i.inner.length?i.inner:i)):this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,pt)}}let ln={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const o=r!=null&&r!==n?` (cast from the value \`${Xr(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Xr(n,!0)}\``+o:`${e} must match the configured type. The validated value was: \`${Xr(n,!0)}\``+o}},_t={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},_C={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},wu={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},jC={isValue:"${path} field must be ${value}"},MC={noUnknown:"${path} field has unspecified keys: ${unknown}"},BC={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:ln,string:_t,number:_C,date:wu,object:MC,array:BC,boolean:jC});const $g=e=>e&&e.__isYupSchema__;class Gi{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:o,otherwise:i}=n,a=typeof r=="function"?r:(...s)=>s.every(u=>u===r);return new Gi(t,(s,u)=>{var d;let m=a(...s)?o:i;return(d=m==null?void 0:m(u))!=null?d:u})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),o=this.fn(r,t,n);if(o===void 0||o===t)return t;if(!$g(o))throw new TypeError("conditions must return a schema object");return o.resolve(n)}}const ti={context:"$",value:"."};class Lo{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===ti.context,this.isValue=this.key[0]===ti.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?ti.context:this.isValue?ti.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Rg.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let o=this.isContext?r:this.isValue?t:n;return this.getter&&(o=this.getter(o||{})),this.map&&(o=this.map(o)),o}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Lo.prototype.__isYupRef=!0;const Rn=e=>e==null;function xr(e){function t({value:n,path:r="",options:o,originalValue:i,schema:a},s,u){const{name:d,test:m,params:p,message:v,skipAbsent:S}=e;let{parent:T,context:E,abortEarly:b=a.spec.abortEarly}=o;function g(A){return Lo.isRef(A)?A.getValue(n,T,E):A}function h(A={}){const H=Object.assign({value:n,originalValue:i,label:a.spec.label,path:A.path||r,spec:a.spec},p,A.params);for(const ie of Object.keys(H))H[ie]=g(H[ie]);const te=new pt(pt.formatError(A.message||v,H),n,H.path,A.type||d);return te.params=H,te}const f=b?s:u;let y={path:r,parent:T,type:d,from:o.from,createError:h,resolve:g,options:o,originalValue:i,schema:a};const w=A=>{pt.isError(A)?f(A):A?u(null):f(h())},F=A=>{pt.isError(A)?f(A):s(A)},C=S&&Rn(n);if(!o.sync){try{Promise.resolve(C?!0:m.call(y,n,y)).then(w,F)}catch(A){F(A)}return}let k;try{var L;if(k=C?!0:m.call(y,n,y),typeof((L=k)==null?void 0:L.then)=="function")throw new Error(`Validation test of type: "${y.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(A){F(A);return}w(k)}return t.OPTIONS=e,t}function VC(e,t,n,r=n){let o,i,a;return t?(Rg.forEach(t,(s,u,d)=>{let m=u?s.slice(1,s.length-1):s;e=e.resolve({context:r,parent:o,value:n});let p=e.type==="tuple",v=d?parseInt(m,10):0;if(e.innerType||p){if(p&&!d)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&v>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);o=n,n=n&&n[v],e=p?e.spec.types[v]:e.innerType}if(!d){if(!e.fields||!e.fields[m])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);o=n,n=n&&n[m],e=e.fields[m]}i=m,a=u?"["+s+"]":"."+s}),{schema:e,parent:o,parentPath:i}):{parent:o,parentPath:t,schema:e}}class Ki extends Set{describe(){const t=[];for(const n of this.values())t.push(Lo.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Ki(this.values())}merge(t,n){const r=this.clone();return t.forEach(o=>r.add(o)),n.forEach(o=>r.delete(o)),r}}function zr(e,t=new Map){if($g(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=zr(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,o]of e.entries())n.set(r,zr(o,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(zr(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,o]of Object.entries(e))n[r]=zr(o,t)}else throw Error(`Unable to clone ${e}`);return n}let Vn=class{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Ki,this._blacklist=new Ki,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(ln.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=zr(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const o=Object.assign({},n.spec,r.spec);return r.spec=o,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{t.tests.forEach(a=>{i.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((o,i)=>i.resolve(o,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,o;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(o=t.recursive)!=null?o:this.spec.recursive})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),o=n.assert==="ignore-optionality",i=r._cast(t,n);if(n.assert!==!1&&!r.isType(i)){if(o&&Rn(i))return i;let a=Xr(t),s=Xr(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return i}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((o,i)=>i.call(this,o,t,this),t);return r===void 0&&(r=this.getDefault()),r}_validate(t,n={},r,o){let{path:i,originalValue:a=t,strict:s=this.spec.strict}=n,u=t;s||(u=this._cast(u,Object.assign({assert:!1},n)));let d=[];for(let m of Object.values(this.internalTests))m&&d.push(m);this.runTests({path:i,value:u,originalValue:a,options:n,tests:d},r,m=>{if(m.length)return o(m,u);this.runTests({path:i,value:u,originalValue:a,options:n,tests:this.tests},r,o)})}runTests(t,n,r){let o=!1,{tests:i,value:a,originalValue:s,path:u,options:d}=t,m=E=>{o||(o=!0,n(E,a))},p=E=>{o||(o=!0,r(E,a))},v=i.length,S=[];if(!v)return p([]);let T={value:a,originalValue:s,path:u,options:d,schema:this};for(let E=0;E<i.length;E++){const b=i[E];b(T,m,function(h){h&&(S=S.concat(h)),--v<=0&&p(S)})}}asNestedTest({key:t,index:n,parent:r,parentPath:o,originalParent:i,options:a}){const s=t??n;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof s=="number";let d=r[s];const m=Object.assign({},a,{strict:!0,parent:r,value:d,originalValue:i[s],key:void 0,[u?"index":"key"]:s,path:u||s.includes(".")?`${o||""}[${d?s:`"${s}"`}]`:(o?`${o}.`:"")+t});return(p,v,S)=>this.resolve(m)._validate(d,m,v,S)}validate(t,n){let r=this.resolve(Object.assign({},n,{value:t}));return new Promise((o,i)=>r._validate(t,n,(a,s)=>{pt.isError(a)&&(a.value=s),i(a)},(a,s)=>{a.length?i(new pt(a,s)):o(s)}))}validateSync(t,n){let r=this.resolve(Object.assign({},n,{value:t})),o;return r._validate(t,Object.assign({},n,{sync:!0}),(i,a)=>{throw pt.isError(i)&&(i.value=a),i},(i,a)=>{if(i.length)throw new pt(i,t);o=a}),o}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(pt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(pt.isError(r))return!1;throw r}}_getDefault(){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this):zr(t)}getDefault(t){return this.resolve(t||{})._getDefault()}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=xr({message:n,name:"nullable",test(o){return o===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=xr({message:n,name:"optionality",test(o){return o===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=ln.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=ln.notNull){return this.nullability(!1,t)}required(t=ln.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=ln.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),o=xr(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(i||a.OPTIONS.test===o.OPTIONS.test))),r.tests.push(o),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),o=Lg(t).map(i=>new Lo(i));return o.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new Gi(o,n):Gi.fromOptions(o,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=xr({message:t,name:"typeError",test(r){return!Rn(r)&&!this.schema._typeCheck(r)?this.createError({params:{type:this.schema.type}}):!0}}),n}oneOf(t,n=ln.oneOf){let r=this.clone();return t.forEach(o=>{r._whitelist.add(o),r._blacklist.delete(o)}),r.internalTests.whiteList=xr({message:n,name:"oneOf",skipAbsent:!0,test(o){let i=this.schema._whitelist,a=i.resolveAll(this.resolve);return a.includes(o)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:a}})}}),r}notOneOf(t,n=ln.notOneOf){let r=this.clone();return t.forEach(o=>{r._blacklist.add(o),r._whitelist.delete(o)}),r.internalTests.blacklist=xr({message:n,name:"notOneOf",test(o){let i=this.schema._blacklist,a=i.resolveAll(this.resolve);return a.includes(o)?this.createError({params:{values:Array.from(i).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:o,optional:i,nullable:a}=n.spec;return{meta:o,label:r,optional:i,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,d,m)=>m.findIndex(p=>p.name===u.name)===d)}}};Vn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Vn.prototype[`${e}At`]=function(t,n,r={}){const{parent:o,parentPath:i,schema:a}=VC(this,t,n,r.context);return a[e](o&&o[i],Object.assign({},r,{parent:o,path:t}))};for(const e of["equals","is"])Vn.prototype[e]=Vn.prototype.oneOf;for(const e of["not","nope"])Vn.prototype[e]=Vn.prototype.notOneOf;let zC=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,qC=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,UC=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,HC=e=>Rn(e)||e===e.trim(),WC={}.toString();function Nt(){return new Og}class Og extends Vn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const o=t!=null&&t.toString?t.toString():t;return o===WC?t:o})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||ln.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=_t.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=_t.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=_t.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,o,i;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:o,name:i}=n:o=n),this.test({name:i||"matches",message:o||_t.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=_t.email){return this.matches(zC,{name:"email",message:t,excludeEmptyString:!0})}url(t=_t.url){return this.matches(qC,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=_t.uuid){return this.matches(UC,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=_t.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:HC})}lowercase(t=_t.lowercase){return this.transform(n=>Rn(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Rn(n)||n===n.toLowerCase()})}uppercase(t=_t.uppercase){return this.transform(n=>Rn(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Rn(n)||n===n.toUpperCase()})}}Nt.prototype=Og.prototype;var YC=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function GC(e){var t=[1,4,5,6,7,10,11],n=0,r,o;if(o=YC.exec(e)){for(var i=0,a;a=t[i];++i)o[a]=+o[a]||0;o[2]=(+o[2]||1)-1,o[3]=+o[3]||1,o[7]=o[7]?String(o[7]).substr(0,3):0,(o[8]===void 0||o[8]==="")&&(o[9]===void 0||o[9]==="")?r=+new Date(o[1],o[2],o[3],o[4],o[5],o[6],o[7]):(o[8]!=="Z"&&o[9]!==void 0&&(n=o[10]*60+o[11],o[9]==="+"&&(n=0-n)),r=Date.UTC(o[1],o[2],o[3],o[4],o[5]+n,o[6],o[7]))}else r=Date.parse?Date.parse(e):NaN;return r}let KC=new Date(""),QC=e=>Object.prototype.toString.call(e)==="[object Date]";class Qc extends Vn{constructor(){super({type:"date",check(t){return QC(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)?t:(t=GC(t),isNaN(t)?Qc.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Lo.isRef(t))r=t;else{let o=this.cast(t);if(!this._typeCheck(o))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=o}return r}min(t,n=wu.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(o){return o>=this.resolve(r)}})}max(t,n=wu.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(o){return o<=this.resolve(r)}})}}Qc.INVALID_DATE=KC;const XC={email:{label:"Email Address",validate:e=>Nt().trim().email().required("You must enter your email address!").validate(e)},password:{label:"Password",type:"password",validate:e=>Nt().trim().required("You must enter your password!").min(6,"Your password should be at least 6 characters").validate(e)}},ZC=()=>c(O,{fields:XC,children:[l(x,{name:"email"}),l(x,{name:"password"}),l(oe,{text:"Login"})]}),JC=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default LoginWithValidation`,ek=()=>c("div",{children:[l("h1",{children:"Field Validation"}),c("p",{className:"intro",children:["It's good practice to validate fields as thoroughly as possible.  On the client-side this is important to help draw the user's attention to any invalid fields ",l("i",{children:"before"})," the form is submitted.  Of course you'll also need some kind of server-side validation, but we'll look at that later."]}),l("h2",{children:"Login Form With Field Validation"}),c("p",{children:["You can add a ",l("code",{children:"validate"})," property to a field to provide a function to validate the input.  This will be passed the field value and should return a Promise that resolves with the (possibly modified) value if the input is valid, or rejects with an error if not. In these examples we'll be using"," ",l("a",{href:"https://github.com/jquense/yup",children:"Yup"})," but you should be able to use any validation library or even roll your own validation functions for special cases."]}),c("p",{children:["You can add the ",l("code",{children:"validate"})," function to the ",l(ue,{})," ","component if you like, but you may find that things quickly get a bit messy.  So this is a good opportunity to demonstrate the other way of defining form fields, using a schema.  This allows you to define your field properties separately and then pass them to the ",l(ne,{})," ","component as the ",l("code",{children:"fields"})," property.  When you include a ",l(ue,{})," the ",l("code",{children:"name"})," will be used to lookup the default properties for the field from the ",l("code",{children:"fields"})," you've provided."]}),c("p",{children:["There are a number of benefits to defining a separate schema for your form fields.  For one, it means that all your field definitions are in a single place where you can easily inspect and edit them without having to wade through lots of markup.  It also means that your form markup remains free of all the functional code, allowing you to concentrate on layout, styling and other presentational aspects. If you decide to split a long form into multiple parts, change the order of some fields, or perhaps display some fields side-by-side instead of stacked vertically, then it's easier to move a single"," ",l("code",{className:"code",children:"Field"})," element around, or just edit the "," ",l("code",{className:"code",children:"name"})," property than it is to cut and paste large blocks of code."]}),l(I,{Element:ZC,code:JC,caption:"Field Validation",children:l("p",{children:`Try entering some values in the form below and click on the "Login" button. If you don't provide a value, or if you provide an invalid value then you should see the validation errors.`})}),l("h2",{children:l("code",{children:"validateOnBlur"})}),c("p",{children:["By default, field validation happens when the form is submitted. You can add the ",l("code",{children:"validateOnBlur"})," property to either the"," ",l(ne,{})," or individual ",l(ue,{})," components if you want the validation to happen when a field is blurred."]}),c("h2",{children:[l("code",{children:"validateOnChange"})," and ",l("code",{children:"minValidationLength"})]}),c("p",{children:["You can add the ",l("code",{children:"validateOnChange"})," property to either the"," ",l(ne,{})," or individual ",l(ue,{})," components if you want validation to happen any time the field value changes, i.e. as the user types. The ",l("code",{children:"minValidationLength"})," can be set if you only want it to start after the user has entered a particular number of characters. The default values is ",l("code",{children:"1"}),"."]}),l("h2",{children:"Where Next?"}),l("p",{children:"If you need to perform some kind of validation where you have access to all of the submitted values then you can do that at the form level We'll look at that next."}),l(bn,{uri:"field-validation"})]}),tk=e=>new Promise((t,n)=>e.password===e.passcheck?t(e):n({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),nk=e=>Nt().trim().email().required("You must enter your email address!").validate(e),af=e=>Nt().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(e),rk={email:{label:"Email Address",validate:nk},password:{label:"Password",type:"password",validate:af},passcheck:{label:"Confirm Password",type:"password",validate:af}},lk=()=>c(O,{fields:rk,validate:tk,children:[l(yt,{names:"email password passcheck"}),l(oe,{text:"Register"})]}),ok=`import { Form, Fields, Submit } from '../../../../lib/index.js'

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

export default LoginWithValidation`,ik=()=>c("div",{children:[l("h1",{children:"Form Validation"}),l("p",{className:"intro",children:"Sometimes you need access to all the submitted field values to validate the form.  The classic example is a registration form where you ask the user to enter their password twice to make sure that they're sure about what they've entered.  Although this isn't necessarily considered good practice these days, it illustrates the principle well."}),l("h2",{children:"Registration Form With Validation"}),c("p",{children:["You can add a ",l("code",{children:"validate"})," property to a form to provide a function to validate the inputs from all fields.  The function will be called after the field-level validation, and only if all fields have validated successfully."]}),c("p",{children:["The function will be passed a ",l("code",{children:"values"})," object containing the validated field values.  It should return a Promise that resolves with the (possibly modified) values if the input is valid, or rejects with an an ",l("code",{children:"error"})," and/or array of ",l("code",{children:"errors"})," if not. The ",l("code",{children:"error"})," can be used to define an error for the form that isn't specify to any particular field.  Each item in the errors array should relate to a field identified by ",l("code",{children:"name"}),", with an additional ",l("code",{children:"message"})," indicating why it is invalid."]}),c("p",{children:["We're also using this opportunity to introduce you to the"," ",l(zp,{})," component which allows you to add multiple fields to a ",l(ne,{})," in one fell swoop."]}),l(I,{Element:lk,code:ok,caption:"Form Validation",children:l("p",{children:`Try entering some values in the form below and click on the "Register" button. You should see the field level validation errors if you don't provide a valid value for any field. Or if you provide different values for the Password and Confirm Password fields then you should see the form validation errors.`})}),l("h2",{children:"Where Next?"}),l("p",{children:"Now that we've handled the validation of the form we can talk about how the form is submitted."}),l(bn,{uri:"form-validation"})]}),ak=()=>{const[e,t]=$.useState();return c(Ee,{children:[c(O,{onSubmit:r=>Promise.resolve(t(r)),debug:!0,children:[l(x,{name:"email",label:"Email Address",required:!0}),l(x,{name:"password",type:"password",label:"Password",required:!0}),l(oe,{text:"Login"})]}),e?c("div",{className:"debug",children:[l("h4",{children:"Submitted Values"}),l("pre",{children:JSON.stringify(e)})]}):null]})},sk=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default DummySubmit`,uk=()=>c("div",{children:[l("h1",{children:"Form Submission"}),c("p",{className:"intro",children:["To handle submission of a form we need to add an ",l("code",{children:"onSubmit"})," ","handler to the ",l(ne,{})," component. In most cases this will be making a call to a back-end API but to demonstrate the basic principle let's start with something simpler."]}),c("h2",{children:[l("code",{children:"onSubmit"})," Handler"]}),c("p",{children:["We'll create a function which stores the submitted"," ",l("code",{children:"values"})," in a state variable and displays them on the screen.  The ",l("code",{children:"onSubmit"})," handler is passed an object containing the validated form values.  It should return a Promise which resolves on success.  If an error occurs then the Promise should reject, returning an object containing either an ",l("code",{children:"error"})," and/or an array of ",l("code",{children:"errors"}),".  These are handled the same as for client-side form validation."]}),l(I,{Element:ak,code:sk,caption:"Dummy Submission",children:l("p",{children:'Try entering some values in the form below and click on the "Login" button.  You should see the submitted values appear in a debugging window beneath the form.'})}),l(bn,{uri:"form-submission"})]}),ck=()=>{const[e,t]=$.useState();return c(Ee,{children:[c(O,{onSubmit:o=>Promise.resolve({status:200,data:{message:"Welcome back!  You are now logged in.",user:{id:12345,email:o.email,name:"Bobby Badger"}}}),onSuccess:o=>t(o.data),debug:!0,children:[l(x,{name:"email",label:"Email Address",required:!0}),l(x,{name:"password",type:"password",label:"Password",required:!0}),l(oe,{text:"Login"})]}),e?c("div",{className:"debug",children:[l("h4",{children:"Emulated Response"}),l("pre",{children:JSON.stringify(e,null,2)})]}):null]})},dk=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default SubmitResponse`,hk=()=>c("div",{children:[l("h1",{children:"Submission Response"}),l("p",{className:"intro",children:"We now need to think about what happens in the real world where a form submission results in a call to a back-end API.  There are, broadly speaking, two possible outcomes: the call is successful, or it fails for some reason."}),l("h2",{children:l("code",{children:"onSuccess"})}),c("p",{children:["Let's start by looking at the case there the submission is successful.  In this example we define an ",l("code",{children:"onSubmit"})," function which returns a resolved promise.  This is emulating how both"," ",l("a",{href:"https://axios-http.com/",children:"Axios"})," and the native"," ",l("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:"Fetch API"})," ","API work."]}),c("p",{children:["The additional step is to defined an ",l("code",{children:"onSuccess"})," handler which can do something to handle the successful response.  In this case we're calling the ",l("code",{children:"setResponse"})," function to store the response data, much like in the previous example, except that this time we're emulating the full request and response cycle."]}),l(I,{Element:ck,code:dk,caption:"Submission Response",children:l("p",{children:'Try entering some values in the form below and click on the "Login" button.  You should see the values returned by an emulated server response appear in a debugging window beneath the form.  Also note that the form is reset on a successful submission.'})}),l(bn,{uri:"submission-response"})]}),fk=()=>l(Ee,{children:c(O,{onSubmit:()=>{throw"Oh noes! An error occurred"},children:[l(x,{name:"email",label:"Email Address",required:!0}),l(x,{name:"password",type:"password",label:"Password",required:!0}),l(oe,{text:"Login"})]})}),mk=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default SubmitThrow`,pk=()=>l(Ee,{children:c(O,{onSubmit:()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]}),children:[l(x,{name:"email",label:"Email Address",required:!0,debug:!0}),l(x,{name:"password",type:"password",label:"Password",required:!0}),l(oe,{text:"Login"})]})}),gk=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default SubmitReject`,vk=()=>{const[e,t]=$.useState();return c(Ee,{children:[c(O,{onSubmit:()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]}),onError:t,children:[l(x,{name:"email",label:"Email Address",required:!0,debug:!0}),l(x,{name:"password",type:"password",label:"Password",required:!0}),l(oe,{text:"Login"})]}),e?c("div",{className:"debug",children:[l("h4",{children:"Submission Error"}),l("pre",{children:JSON.stringify(e,null,2)})]}):null]})},yk=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default SubmitThrow`,bk=()=>c("div",{children:[l("h1",{children:"Submission Errors"}),c("p",{className:"intro",children:["For a good user experience we should use client-side validation to try and catch all data entry errors ",l("i",{children:"before"})," they get submitted. However, it's not always possible to do that.  It may be the case that validating a field requires access to the database and is best handled on the server.  Or perhaps a field should be validated server-side for security reasons (e.g. validating a Captcha).  Or an API request could fail or otherwise be rejected for any number of other reasons.  So we must know how to handle these cases."]}),l("h2",{children:"Simple Error"}),c("p",{children:["If a submission throws an error or returns an error via a rejected Promise then the form submission handler will set the internal"," ",l("code",{children:"error"})," state variable. By default this error will be displayed in the form header.  See the ",l(Vp,{})," component for more information about changing how and if errors are displayed."]}),l(I,{Element:fk,code:mk,caption:"Error Thrown",children:l("p",{children:"Try submitting this form to see what happens when an error is thrown. You should see the error displayed in the form header and also in a debugging window beneath the form."})}),l("h2",{children:"Rejected Promise"}),c("p",{children:["In most cases a failed submission should return a rejected Promise. The data returned should be an objecting containing either a single",l("code",{children:"error"})," string (or object containing a ",l("code",{children:"message"}),"), or an array of ",l("code",{children:"errors"}),".  Each element in the array can be an error string, but the more usual (and useful) case is for each element to be an object containing the error ",l("code",{children:"message"}),"."]}),c("p",{children:["The benefit of this approach is that error objects can also contain the ",l("code",{children:"name"})," of the field that it relates to.  The corresponding field will be marked as invalid and have the error message set so that it can be displayed under the input.  Furthermore, the field label is copied into the error element so that it can be displayed in the error panel at the start of the form."]}),l("p",{children:"This would be the typical way to handle a request that failed due to server-side validation errors."}),l(I,{Element:pk,code:gk,caption:"Error Thrown",children:l("p",{children:"Try submitting the form to see the errors generated."})}),l("h2",{children:l("code",{children:"onError"})}),c("p",{children:["You can provide an ",l("code",{children:"onError"})," handler which will be called when an error response is received.  In this example we simply call a ",l("code",{children:"setError()"})," function to store the error in a React state variable and then display it beneath the form."]}),l(I,{Element:vk,code:yk,caption:"onError",children:c("p",{children:["Try submitting the form to see the errors generated.  The "," ",l("code",{children:"onError"})," handler will store them in the state variable and display them beneath the form."]})}),l(bn,{uri:"submission-errors"})]}),wk=e=>new Promise((t,n)=>e.password===e.passcheck?t(e):n({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),Fk=e=>Nt().trim().email().required("You must enter your email address!").validate(e),sf=e=>Nt().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(e),xk={name:{label:"Your name",required:!0},email:{label:"Email address",required:!0,validate:Fk},password:{label:"Password",type:"password",required:!0,validate:sf},passcheck:{label:"Confirm password",type:"password",required:!0,validate:sf},experience:{label:"What is your level of experience?",type:"radio",options:["Beginner","Intermediate","Expert"],className:"wide",inputsClass:"radio inputs lg-grid-3"},dob:{type:"date",label:"Date of Birth"},price:{type:"number",label:"How much would you pay for this?",prefix:"£",suffix:".00",min:11,max:100},animal:{label:"What is your favourite animal?",type:"select",default:"Badger",options:["Badger","Ferret","Stoat"]},color:{label:"What is your favourite color?",type:"select",default:"Red",options:[{value:null,text:"Select a color"},{value:"red",text:"Red"},{value:"orange",text:"Orange"},{value:"yellow",text:"Yellow"},{value:"violet",text:"Violet"},{value:"white",text:"White"}]},terms:{label:"Terms and conditions",type:"checkbox",text:"I accept the Terms and Conditions",className:"wide",required:!0,requiredMessage:"You must accept the Terms and Conditions"}},Sk=()=>{const[e,t]=$.useState();return c(O,{fields:xk,validate:wk,showRequired:!0,showOptional:!0,children:[c(Yi,{legend:"Your Details",children:[l("div",{className:"lg-grid-2",children:l(yt,{names:"name email"})}),l("div",{className:"lg-grid-2",children:l(yt,{names:"password passcheck"})})]}),c(Yi,{legend:"Other Information",children:[l("div",{className:"lg-grid-2",children:l(yt,{names:"dob price"})}),l(x,{name:"experience"}),c("div",{className:"lg-grid-2",children:[l(x,{name:"animal"}),l(x,{name:"color",onChange:t})]}),(e==null?void 0:e.value)&&c("div",{style:{color:e.value,backgroundColor:"#444",padding:"0.25rem 0.5rem",textAlign:"center"},children:[e.value," is a great color!"]})]}),l(x,{name:"terms"}),l(oe,{text:"Register"}),l($t,{})]})},Ek=`import { Form, Field, Fields, Fieldset, Submit, Debug } from '../../../../lib/index.js'

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

export default RegistrationForm`,Ck=`@media (min-width: 1024px) {
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
}`,kk=()=>c("div",{children:[l("h1",{children:"Complete Registration Form"}),l("p",{className:"intro",children:"Here's a more complete (albeit rather contrived) example of a user registration form."}),l("h2",{children:"Input Types"}),c("p",{children:["This example demonstrates some of the other fields input types. Set the ",l(ue,{})," ",l("code",{children:"type"})," to ",l("code",{children:"radio"})," for a ",l(p0,{})," button input and provide some ",l("code",{children:"options"}),", as shown here for the ",l("code",{children:"experience"})," field.  Or set it to ",l("code",{children:"select"})," for a ",l(g0,{})," input as shown in the"," ",l("code",{children:"animal"})," field.  Set it to ",l("code",{children:"checkbox"})," for a"," ",l(m0,{})," and provide some ",l("code",{children:"text"})," to go alongside it."]}),c("p",{children:["You can also use the ",l("code",{children:"type"})," to set other text input types, like ",l("code",{children:"number"})," and ",l("code",{children:"date"}),"."]}),l(I,{Element:Sk,code:Ek,caption:"Registration Form"}),c("h2",{children:[l("code",{children:"Fieldset"})," Component"]}),c("p",{children:["The example includes the ",l(h0,{})," component which can be used to group fields together in a set, complete with a ",l("code",{children:"legend"}),"."]}),c("h2",{children:[l("code",{children:"Debug"})," Component"]}),c("p",{children:["This example also includes the ",l(Fc,{})," component which, as the name suggests, can be useful for debugging."]}),c("h2",{children:[l("code",{children:"showRequired"})," and ",l("code",{children:"showOptional"})]}),c("p",{children:["The ",l("code",{children:"showOptional"})," and ",l("code",{children:"showRequired"})," properties can be set on the ",l(ne,{})," or individual ",l(ue,{})," components to have an additional label displayed telling the user which fields they do and don't need to complete."]}),l("h2",{children:l("code",{children:"onChange"})}),c("p",{children:["The ",l("code",{children:"onChange"})," property can be added to a ",l(ue,{})," to watch for changes in the field value.  You can see it in use above in the ",l("code",{children:"color"})," field."]}),l("h2",{children:"Custom CSS"}),c("p",{children:["The example above uses a couple of custom CSS classes, "," ",l("code",{children:"lg-grid-2"})," and ",l("code",{children:"lg-grid-3"})," to display fields in 2 and 3 columns, respectively, on larger screen sizes. You may already be using a CSS framework which includes something similar which you can use instead.  Here's the CSS for those classes for completeness."]}),l(Vt,{code:Ck,language:"css",className:"mar-b-2"}),l(bn,{uri:"complete-registration"})]}),Tk={name:{label:"Product Name",required:!0},description:{label:"Description",type:"textarea",required:!0},manufacturer:{label:"Manufacturer",type:"select",debug:!0,options:[{value:"100",text:"Alan's Accessories"},{value:"101",text:"Brian's Bits"},{value:"102",text:"Charlie's Components"}]},price:{type:"number",label:"Price?",prefix:"$"}},Rk={id:"9876",name:"Widget-2000",description:"This is an awesome widget",manufacturer:"102",price:12.99},Nk=()=>c(O,{fields:Tk,values:Rk,children:[l(yt,{names:"name description manufacturer price"}),l(Ea,{submit:{text:"Save Changes"}})]}),Lk=`import { Form, Fields, ResetSubmit } from '../../../../lib/index.js'

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

export default EditForm`,$k=()=>c("div",{children:[l("h1",{children:"Edit Form"}),l("p",{className:"intro",children:"Another common use case for form is in editing existing data records."}),c("h2",{children:["Specifying ",l("code",{children:"values"})]}),c("p",{children:["You can pass the ",l("code",{children:"values"})," property to a ",l(ne,{})," to seed it with initial values for fields."]}),l(I,{Element:Nk,code:Lk,caption:"Edit Form",children:l("p",{children:'Try changing some of the values in the form and then click on the "Reset" button.  The fields will reset to their original values.'})}),l(bn,{uri:"edit-form"})]}),Ok={email:{label:"Email Address",required:!0}},Ak=()=>c(O,{fields:Ok,children:[l(x,{name:"email",children:e=>c("div",{className:"field",children:[l("label",{htmlFor:e.id,children:e.label}),l("div",{className:"inputs",children:l("input",{className:"input",ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:t=>e.onChange(t.target.value)})})]})}),l(oe,{text:"Login"})]}),Pk=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default HeadlessFields`,Dk={email:{label:"Email Address"}},Ik=()=>l(O,{fields:Dk,children:l(x,{name:"email",children:e=>c("div",{className:"boxed",children:["This is where you render the ",e.name,' field with an "',e.label,'" label']})})}),_k=`import { Form, Field } from '../../../../lib/index.js'

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

export default HeadlessBlank`,jk={email:{label:"Email Address",required:!0}},Mk=()=>c(O,{fields:jk,children:[l(x,{name:"email",children:e=>c(ke,{children:[c("h3",{children:["Custom Layout for ",e.name]}),l(xa,{}),l(Wi,{}),l(Hc,{})]})}),l(oe,{text:"Login"})]}),Bk=`import {
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

export default HeadlessBuiltins`,Vk={email:{label:"Email Address",required:!0}},zk=()=>c(O,{fields:Vk,children:[l(x,{name:"email",children:c(ke,{children:[l("h3",{children:"Custom Layout for Email field"}),l(xa,{}),l(Wi,{}),l(Hc,{})]})}),l(oe,{text:"Login"})]}),qk=`import {
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

export default HeadlessBuiltins`,Uk=()=>c("div",{children:[l("h1",{children:"Headless Fields"}),l("p",{className:"intro",children:'One of the problems with any UI library is that it forces you into using the styles provided, or requires you to customise the CSS to match your in-house brand.  This is the problem that "Headless" UI components are designed to solve.'}),l("h2",{children:"Field Render Function"}),l("p",{children:"Instead of using the default rendering components for a field you can provide a function as a child element.  The function will be passed the field context and can render the field any way it likes."}),l(I,{Element:Ik,code:_k,caption:"Headless Fields"}),l("h2",{children:"Typical Render Function"}),l("p",{children:"Here's a more complete example showing how a field would typically be rendered using the builtin components."}),l(I,{Element:Ak,code:Pk,caption:"Headless Fields"}),l("h2",{children:"Builtin Components"}),l("p",{children:"You can mix and match your own layout with the builtin components. This example shows how you can use the"}),l(I,{Element:Mk,code:Bk,caption:"Builtin Components"}),l("h2",{children:"Child Layout"}),c("p",{children:["If you're using the default layout components and/or providing your own that can access the field context using ",l("code",{children:"useField"})," ","then you don't need to define a function for the ",l(ue,{})," body."]}),l(I,{Element:zk,code:qk,caption:"Builtin Components"}),l("h2",{children:l("code",{children:"FieldLayout"})}),c("p",{children:["The ",l(f0,{})," component renders a ",l("code",{children:"div"})," with the"," ",l("code",{children:"className"})," including ",l("code",{children:"field"})," and any of"," ",l("code",{children:"focus"}),", ",l("code",{children:"valid"}),", ",l("code",{children:"invalid"})," or"," ",l("code",{children:"disabled"})," depending on the field state."]}),l("h2",{children:l("code",{children:"Label"})}),c("p",{children:["The ",l(y0,{})," component renders a ",l("code",{children:"div"})," with the"," ",l("code",{children:"className"})," including ",l("code",{children:"field"})," and any of"," ",l("code",{children:"focus"}),", ",l("code",{children:"valid"}),", ",l("code",{children:"invalid"})," or"," ",l("code",{children:"disabled"})," depending on the field state."]}),l(bn,{uri:"headless-fields"})]}),Hk=()=>c(yn,{children:[l(M,{path:"",end:!0,element:l(PE,{})}),l(M,{path:"simple-form",element:l(vC,{})}),l(M,{path:"field-validation",element:l(ek,{})}),l(M,{path:"form-validation",element:l(ik,{})}),l(M,{path:"form-submission",element:l(uk,{})}),l(M,{path:"submission-response",element:l(hk,{})}),l(M,{path:"submission-errors",element:l(bk,{})}),l(M,{path:"complete-registration",element:l(kk,{})}),l(M,{path:"edit-form",element:l($k,{})}),l(M,{path:"headless-fields",element:l(Uk,{})})]}),Wk=`import React from 'react'
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

export default SimpleExample`,Yk=()=>c(O,{children:[l(x,{name:"name",label:"Enter your name",placeholder:"Your Name"}),l(x,{name:"message",label:"Enter a message",placeholder:"A message"}),l(x,{name:"badger",label:"Do you like Badgers?",type:"checkbox",text:"Yes, I like badgers!"}),l(x,{name:"animal",label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}),l(x,{name:"food",label:"What is your favourite food?",type:"select",options:["Cheese","Bacon","Lettuce"]}),l($t,{})]}),Gk=()=>c("div",{children:[l("h1",{children:"Simple Form Example"}),c("p",{children:["This simple example demonstrates the core functionality.  At this level it's similar to defining a regular HTML form but using React components instead of native elements.  It's like they're friends, but with benefits.  For example, note how easy it is to define a simple list of options for the ",l("code",{className:"code",children:"radio"})," ","and ",l("code",{className:"code",children:"select"})," type inputs."]}),c("p",{children:["The ",l("code",{className:"code",children:"Debug"})," component can be used to inspect the current state of the form values."]}),l(I,{Element:Yk,code:Wk})]}),Kk=`import React from 'react'
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

export default SchemaExample`,Qk={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]},unused:{label:"This field isn't used in this example!",type:"textarea"}},Xk=()=>c(O,{fields:Qk,children:[l(x,{name:"name"}),l(x,{name:"message"}),l(x,{name:"badgers"}),l(x,{name:"animal",label:"What is the coolest animal?"}),l($t,{})]}),Zk=()=>c("div",{children:[l("h1",{children:"External Form Schema"}),c("p",{children:["This example shows how you can define a separate schema for your form fields.  Pass the field definitions to the"," ",l("code",{className:"code",children:"Form"})," component as the"," ",l("code",{className:"code",children:"fields"})," property.  When you insert a"," ",l("code",{className:"code",children:"Field"})," the ",l("code",{className:"code",children:"name"})," is used to lookup the default properties for the field.  These are only the defaults - you can over-ride any property in the"," ",l("code",{className:"code",children:"Field"})," component, as shown below where we provide a different ",l("code",{className:"code",children:"label"})," for the"," ",l("code",{className:"code",children:"animal"})," field."]}),c("p",{children:["You don't have to use all the ",l("code",{className:"code",children:"fields"})," ","that you've defined.  If you like you can define a single set of fields for all the different kinds of fields you might want to use in your whole web site and pass that to every form.  Only those that are referenced through a ",l("code",{className:"code",children:"Field"})," component will be included."]}),l(I,{Element:Xk,code:Kk})]}),Jk=`import React from 'react'
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

export default FieldsExample`,eT={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},tT=()=>c(O,{fields:eT,children:[c("div",{className:"grid-2 gap-2",children:[l(yt,{names:["name","message"]}),l(yt,{names:"badgers animal"})]}),l($t,{})]}),nT=()=>c("div",{children:[l("h1",{children:"Inserting Multiple Fields"}),c("p",{children:["There are a number of benefits to defining a separate schema for your form fields.  For one, it means that all your field definitions are in a single place where you can easily inspect and edit them without having to wade through lots of markup.  It also means that your form markup remains free of all the functional code, allowing you to concentrate on layout, styling and other presentational aspects. If you decide to split a long form into multiple parts, change the order of some fields, or perhaps display some fields side-by-side instead of stacked vertically, then it's easier to move a single"," ",l("code",{className:"code",children:"Field"})," element around, or just edit the "," ",l("code",{className:"code",children:"name"})," property than it is to cut and paste large blocks of code."]}),c("p",{children:["When you are displaying a list of fields like this you can use the"," ",l("code",{className:"code",children:"Fields"})," component as a short-cut.  Instead of providing a single ",l("code",{className:"code",children:"name"}),", give it a list of ",l("code",{className:"code",children:"names"}),", either as an array of strings, or a single string containing a whitespace-delimited list of field names.  The ",l("code",{className:"code",children:"Fields"})," component renders each of the fields, collected together in a single"," ",l("code",{className:"code",children:"div"})," element"]}),l(I,{Element:tT,code:Jk})]}),rT=`import React from 'react'
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
`,lT={foo:{type:"text",label:"The foo field",required:!0},bar:{type:"text",label:"The bar field"},price:{type:"number",label:"Price",prefix:"£",suffix:".00",size:20,min:11,max:100},scale:{type:"range",label:"Scale",min:0,max:100,step:10},animal:{type:"radio",label:"Animal",options:[{value:"badger",text:"Brilliant Badger"},{value:"ferret",text:"Funky Ferret"},{value:"stoat",text:"Sexy Stoat"}]},animal2:{type:"radio",label:"Animal",options:[{value:"badger",text:"Brilliant Badger"},{value:"ferret",text:"Funky Ferret"},{value:"stoat",text:"Sexy Stoat"}]},colour:{type:"radio",label:"Favourite Colour?",options:[{value:"red",text:"Red",className:"red"},{value:"orange",text:"Orange",className:"orange"},{value:"yellow",text:"Yellow",className:"yellow"},{value:"green",text:"Green",className:"green"},{value:"blue",text:"Blue",className:"blue"},{value:"indigo",text:"Indigo",className:"indigo"},{value:"violet",text:"Violet",className:"violet"}]},number:{type:"radio",label:"Favourite Number?",options:[11,42,69]},food:{type:"select",label:"Favourite Food",options:[{value:"chicken",text:"Chicken"},{value:"bacon",text:"Bacon"},{value:"cheese",text:"Cheese"}]}},oT={foo:"The foo value",animal:"badger",scale:50},iT=()=>c(O,{fields:lT,values:oT,showRequired:!0,showOptional:!0,children:[l(x,{name:"foo"}),l(x,{name:"bar",label:"The bar field with a custom label"}),l(x,{name:"bar",label:"Bar field, different label and disabled",disabled:!0}),l(yt,{names:"price scale number colour animal"}),l(x,{name:"animal2",inputsClass:"radio inputs block",label:"Stacked Radio Option"}),l(x,{name:"food"}),l(x,{name:"one",type:"number",label:"A number field"}),l(x,{name:"two",type:"date",label:"A date field"}),l(x,{name:"three",type:"password",label:"A password field"}),l(x,{name:"four",type:"color",label:"A color field"}),l(Yc,{children:l(vr,{text:"Reset Form"})}),l($t,{showForm:!0})]}),aT=()=>c("div",{children:[l("h1",{children:"Complete Form Example"}),l("p",{children:"This is a more complete example."}),l(I,{Element:iT,code:rT})]}),sT=()=>c(yn,{children:[l(M,{path:"simple",element:l(Gk,{})}),l(M,{path:"schema",element:l(Zk,{})}),l(M,{path:"fields",element:l(nT,{})}),l(M,{path:"complete",element:l(aT,{})})]}),uT=()=>c("div",{children:[l("h1",{children:"Components"}),l("p",{children:"This section of the documentation provides detailed information about each of the components."}),l("ul",{className:"menu",children:Bp.items.map((e,t)=>l(xc,{item:e,showAbout:!0},t))})]}),cT=()=>c("div",{children:[l("h1",{children:"Form"}),c("p",{children:["The ",l("code",{children:"Form"})," component is used to render a form. Inside the form you will typically have one or more"," ",l(J,{to:"/field",children:l("code",{children:"Field"})})," components to render the fields and a ",l(J,{to:"/form/submit",children:l("code",{children:"Submit"})})," ","component to add a submit button."]}),c("ul",{className:"menu",children:[l("li",{children:l(J,{to:"./properties",text:"Form properties"})}),c("li",{children:[l(J,{to:"./reset",children:l("code",{children:"Reset"})})," component to reset the form"]}),c("li",{children:[l(J,{to:"./submit",children:l("code",{children:"Submit"})})," component to submit the form"]}),c("li",{children:[c(J,{to:"./controls",children:["Controls combining ",l("code",{children:"Submit"})]})," component to submit the form"]})]})]}),dT=()=>c("div",{children:[l("h1",{children:"Form Properties"}),l("h2",{children:"THIS IS TODO"}),c("pre",{children:["className:         FORMULA",l("br",{}),"errorsInHeader:    true",l("br",{}),"errorsInFooter:    false,",l("br",{}),"enctype:           application/x-www-form-urlencoded",l("br",{}),"method:            post",l("br",{}),"headerClass:       header",l("br",{}),"bodyClass:         body",l("br",{}),"footerClass:       footer",l("br",{}),"errorsClass:       errors",l("br",{}),"errorsTitle:       n => `Form Submission Error... errorPrompt:       Please correct this problem and re-submit:",l("br",{}),"errorsPrompt:      n => `Please correct these... submittingClass:   SUBMITTING,",l("br",{}),"validatingClass:   VALIDATING",l("br",{})]})]}),hT=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetFocusExample`,fT=()=>{const[e,t]=$.useState(!1);return c(Ee,{children:[c(O,{onLoad:t,children:[l(x,{name:"field1",label:"Field One"}),l(x,{name:"field2",label:"Field Two",type:"textarea"}),l(x,{name:"field3",label:"Field Three",type:"checkbox",text:"I agree to the Terms and Conditions"}),l(x,{name:"field4",label:"Field Four",type:"select",options:["Nigel","David","Derek"]}),l(x,{name:"field5",label:"Field Five",type:"radio",default:"Keyboards",options:["Vocals","Guitar","Bass","Keyboards","Drums"]})]}),c("div",{children:[l("button",{className:"btn-blue",onClick:()=>e==null?void 0:e.setFocus("field1"),children:"Focus One"}),l("button",{className:"btn-blue",onClick:()=>e==null?void 0:e.setFocus("field2"),children:"Focus Two"}),l("button",{className:"btn-blue",onClick:()=>e==null?void 0:e.setFocus("field3"),children:"Focus Three"}),l("button",{className:"btn-blue",onClick:()=>e==null?void 0:e.setFocus("field4"),children:"Focus Four"}),l("button",{className:"btn-blue",onClick:()=>e==null?void 0:e.setFocus("field5"),children:"Focus Five"})]})]})},mT=`import { Form, Field, useForm } from '../../../../../lib/index.js'

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

export default UseFormFocus`,pT=()=>c(O,{children:[l(x,{name:"field1",label:"Field One"}),l(x,{name:"field2",label:"Field Two"}),l(uf,{name:"field1",caption:"Focus Field One"}),l(uf,{name:"field2",caption:"Focus Field Two"})]}),uf=({name:e,caption:t})=>{const{setFocus:n}=ht();return l("button",{className:"btn-blue",onClick:r=>{r.preventDefault(),n(e)},children:t})},gT=`import { useForm } from '../../../../../lib/index.js'

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

export default FieldFocusButton`,vT=()=>c("div",{children:[l("h1",{children:"Focus Fields"}),l("h2",{children:l("code",{children:"setFocus()"})}),c("p",{children:["You can programmatically set the focus on a ",l(ue,{})," by calling the ",l("code",{children:"setFocus()"})," method on the ",l(ne,{}),", passing the name of the field that you want to focus as an argument."]}),c("p",{children:["You can capture a reference to the form using the ",l("code",{children:"onLoad"})," ","property to set a state variable, as shown in this example."]}),l(I,{Element:fT,code:hT,caption:"onLoad() and setFocus()",children:l("p",{children:"Click on one of the buttons to focus on a field."})}),c("p",{children:["If the buttons (or other controls) that you want to use to focus the fields are contained within the ",l(ne,{})," then you can call the ",l("code",{children:"useForm()"})," function to gain access to the form context."]}),l(I,{Element:pT,code:mT,caption:"useForm() and setFocus()"}),c("p",{children:["Be careful to make sure that your buttons call"," ",l("code",{children:"e.preventDefault()"})," on the event, as shown in the example above, otherwise the form may be submitted.  Alternately you can pass the event to the ",l("code",{children:"setFocus()"})," method as the second argument and it will do it for you, as shown below."]}),l(Vt,{code:kg(gT)})]}),yT=()=>c(O,{showRequired:!0,children:[l(x,{name:"one",label:"Field one",required:!0}),l(x,{name:"two",label:"Field two",required:!0}),l(x,{name:"three",label:"Field three"}),l(oe,{})]}),bT=`import { Form, Field, Submit } from '../../../../../../lib/index.js'

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

export default SubmitExample`,wT=()=>c("div",{children:[l("h1",{children:"Validation"}),l("p",{children:"Validation can be applied on two levels: on individual fields and/or on the form."}),c("p",{children:["You can specify a field is ",l("code",{children:"required"}),", as shown here, or define your own custom ",l(J,{to:"/components/field/validation",text:"field validation"})," functions. When the form is submitted, each field will be validated.  If any validation errors occur then the form submission will be cancelled and the errors displayed."]}),l(I,{Element:yT,code:bT,caption:"Required Fields",children:l("p",{children:"Try entering some text in the fields below then click on the Submit button.  The first two fields are required so you can leave either of the them empty to see the validation errors."})}),c("p",{children:["You can also define a ",l("code",{children:"validate"})," function on the ",l(ne,{}),". This will be run after any field validation and will be passed"]})]}),FT=`import { Form, Field } from '../../../../../../lib/index.js'

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

export default SetValues`,xT=()=>{const[e,t]=$.useState(),n=(r,o)=>e==null?void 0:e.setValues({color:r,animal:o});return c(Ee,{children:[c(O,{onLoad:t,children:[l(x,{name:"color",label:"Color"}),l(x,{name:"animal",label:"Animal"})]}),l("button",{onClick:()=>n("Grey","Elephant"),children:"Grey Elephant"}),l("button",{onClick:()=>n("Red","Fox"),children:"Red Fox"})]})},ST=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

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

export default UseSetValues`,ET=()=>l(Ee,{children:c(O,{children:[l(x,{name:"color",label:"Color"}),l(x,{name:"animal",label:"Animal"}),l(cf,{color:"Grey",animal:"Elephant"}),l(cf,{color:"Red",animal:"Fox"})]})}),cf=({color:e,animal:t})=>{const{setValues:n}=ht();return c("button",{onClick:r=>{r.preventDefault(),n({color:e,animal:t},r)},children:[e," ",t]})},CT=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

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

export default UseSetValues`,kT=()=>l(Ee,{children:c(O,{children:[l(x,{name:"color",label:"Color"}),l(x,{name:"animal",label:"Animal"}),l(df,{color:"Grey",animal:"Elephant"}),l(df,{color:"Red",animal:"Fox"})]})}),df=({color:e,animal:t})=>{const{setValues:n}=ht();return c("button",{onClick:r=>n({color:e,animal:t},r),children:[e," ",t]})},TT=()=>c("div",{children:[l("h1",{children:"Setting Form Values"}),l("h2",{children:"setValues()"}),c("p",{children:["The ",l("code",{children:"setValues"})," function can be used to programmatically set form values.  You can use the ",l("code",{children:"onLoad"})," handler to save a reference to the form context as show in this example."]}),l(I,{Element:xT,code:FT,caption:"setValues",children:l("p",{children:"Click on one of the buttons to update the form values."})}),c("p",{children:["If you want to set the values from a component placed inside the"," ",l("code",{children:"Form"})," component then you can use ",l("code",{children:"useForm()"})," to get access to the form context."]}),l(I,{Element:ET,code:ST,caption:"setValues"}),c("p",{children:["If you're using a ",l("code",{children:"button"})," to trigger the call to"," ",l("code",{children:"setValues()"}),", as shown in the example above, then you need to make sure you call ",l("code",{children:"e.preventDefault()"})," event.  Otherwise the form may be submitted. Alternately you can pass the event as the second argument to the ",l("code",{children:"setValues()"})," method as shown below and it will do it for you."]}),l(I,{Element:kT,code:CT,caption:"setValues"})]}),RT=()=>c(yn,{children:[l(M,{path:"",end:!0,element:l(cT,{})}),l(M,{path:"properties",element:l(dT,{})}),l(M,{path:"setfocus",element:l(vT,{})}),l(M,{path:"validation",element:l(wT,{})}),l(M,{path:"set/*",element:l(TT,{})})]}),NT=()=>c(Ee,{children:[l("h1",{children:"Field"}),l("h2",{children:"TODO"}),l("ul",{children:l("li",{children:"Field reset"})})]}),LT=()=>c("div",{children:[l("h1",{children:"Field Properties"}),l("h2",{children:"THIS IS TODO"})]}),$T=`import { Form, Field, Debug, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit, Debug } from '@abw/react-formula'

const NameExample = () =>
  <Form>
    <Field name="field1"/>
    <Submit/>
    <Debug/>
  </Form>

export default NameExample`,OT=()=>c(O,{children:[l(x,{name:"field1"}),l(oe,{}),l($t,{})]}),AT=`import { Form, Field, Debug, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit, Debug } from '@abw/react-formula'

const fields = {
  field1: {
    label: 'This is field one',
    required: true
  }
}

const FormFieldsExample = () =>
  <Form fields={fields}>
    <Field name="field1"/>
    <Submit/>
    <Debug/>
  </Form>

export default FormFieldsExample`,PT={field1:{label:"This is field one",required:!0}},DT=()=>c(O,{fields:PT,children:[l(x,{name:"field1"}),l(oe,{}),l($t,{})]}),Re=({links:e})=>c("div",{className:"see-also",children:[l("h2",{children:"See Also"}),l("ul",{className:"menu",children:e.map(t=>l(IT,{to:t},t))})]}),IT=({to:e})=>{const t=wc[e]||il(`Invalid SeeAlso link: ${e}`),{about:n}=t;return c("li",{children:[l(Ze,{to:e}),!!n&&l("span",{className:"about",children:n})]})},_T=()=>c("div",{children:[l("h1",{children:"Field Properties"}),l("h2",{children:l("code",{children:"name"})}),c("p",{children:["The ",l("code",{children:"name"})," is the only required property for a ",l(ue,{}),". It is used as the key to set the ",l(ne,{})," value."]}),l(I,{Element:OT,code:$T,caption:"name",children:c("p",{children:["Enter some text in the input field.  The ",l(Fc,{}),` component is included in this example to show the form data as it's being set.  Click on the "Submit" button and you'll see an alert showing the data that would be submitted.`]})}),c("p",{children:["You can set the ",l(Kl,{})," property on the ",l(ne,{})," as an object containing additional properties for each field.  The"," ",l("code",{children:"name"})," is used as the key to fetch those properties. Any properties explicitly set on the ",l(ue,{})," will override them."]}),l(I,{Element:DT,code:AT,caption:"Form fields",children:c("p",{children:["Note how the ",l(ue,{})," has now got a ",l("code",{children:"label"})," and the"," ",l(Jt,{})," property is set."]})}),l(Re,{links:["field:label","form:fields"]})]}),jT=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Hello World!"/>
  </Form>

export default LabelExample`,MT=()=>l(O,{children:l(x,{name:"field1",label:"Hello World!"})}),BT=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const fields = {
  field1: {
    label: 'This is field one',
  },
  field2: {
    label: 'This is field two',
  }
}

const FormFieldsExample = () =>
  <Form fields={fields}>
    <Field name="field1"/>
    <Field name="field2" label="A different label"/>
  </Form>

export default FormFieldsExample`,VT={field1:{label:"This is field one"},field2:{label:"This is field two"}},zT=()=>c(O,{fields:VT,children:[l(x,{name:"field1"}),l(x,{name:"field2",label:"A different label"})]}),qT=()=>c("div",{children:[l("h1",{children:"Field Properties"}),l("h2",{children:l("code",{children:"label"})}),c("p",{children:["Add a label to the field with the ",l("code",{children:"label"})," property."]}),l(I,{Element:MT,code:jT,caption:"name"}),c("p",{children:["Like all other field properties, they can be defined via ",l(Kl,{})," ","on the ",l(ne,{}),".  If you explicitly set a ",l("code",{children:"label"})," on the"," ",l(ue,{})," then it will take precedence."]}),l(I,{Element:zT,code:BT,caption:"Form fields",children:c("p",{children:["Note how the first field has the ",l("code",{children:"label"})," defined in the"," ",l(Kl,{})," but the second defines its own ",l("code",{children:"label"})," ","which is used instead of the one defined in the ",l(Kl,{}),"."]})}),l(Re,{links:["field:name","form:fields"]})]}),UT=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const TypeExample = () =>
  <Form>
    <Field name="field1" label="Text Field"/>
    <Field name="field2" type="textarea" label="TextArea Field"/>
    <Field name="field3" type="number"   label="Number Field"/>
    <Field name="field4" type="checkbox" label="Checkbox Field" text="Yes"/>
  </Form>

export default TypeExample`,HT=()=>c(O,{children:[l(x,{name:"field1",label:"Text Field"}),l(x,{name:"field2",type:"textarea",label:"TextArea Field"}),l(x,{name:"field3",type:"number",label:"Number Field"}),l(x,{name:"field4",type:"checkbox",label:"Checkbox Field",text:"Yes"})]}),WT=`import { Form, Field, Debug } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const fields = {
  field1: {
    label: 'Text Field',
  },
  field2: {
    label: 'TextArea Field',
    type:  'textarea',
  },
  field3: {
    label: 'Number Field',
    type:  'number',
  },
  field4: {
    label: 'Checkbox Field',
    type:  'checkbox',
    text:  'Yes'
  },
  field5: {
    label: 'Another Field',
  },
}

const FormFieldsExample = () =>
  <Form fields={fields}>
    <Field name="field1"/>
    <Field name="field2"/>
    <Field name="field3"/>
    <Field name="field4"/>
    <Debug/>
  </Form>

export default FormFieldsExample`,YT={field1:{label:"Text Field"},field2:{label:"TextArea Field",type:"textarea"},field3:{label:"Number Field",type:"number"},field4:{label:"Checkbox Field",type:"checkbox",text:"Yes"},field5:{label:"Another Field"}},GT=()=>c(O,{fields:YT,children:[l(x,{name:"field1"}),l(x,{name:"field2"}),l(x,{name:"field3"}),l(x,{name:"field4"}),l($t,{})]}),KT=()=>c("div",{children:[l("h1",{children:"Field Properties"}),l("h2",{children:l("code",{children:"type"})}),c("p",{children:["The ",l("code",{children:"type"})," property specifies what kind of input should be displayed.  The default value is ",l("code",{children:"text"})," corresponding to the ",l($h,{})," input component.  Other values can be"," ",l("code",{children:"textarea"})," (see ",l(E0,{}),"),"," ",l("code",{children:"checkbox"})," (see ",l(C0,{}),"),"," ",l("code",{children:"radio"})," (see ",l(k0,{}),"),"," ",l("code",{children:"select"})," (see ",l(T0,{}),") and"," ",l("code",{children:"hidden"})," (see ",l(R0,{}),") corresponding to the basic HTML input types."]}),c("p",{children:["You can also set ",l("code",{children:"type"})," to be one of the other valid HTML input types, e.g. ",l("code",{children:"password"}),", ",l("code",{children:"email"}),","," ",l("code",{children:"number"}),", ",l("code",{children:"date"}),", ",l("code",{children:"color"}),", and so on.  These use the same basic ",l($h,{})," input component as for ",l("code",{children:"text"})," types, but with the ",l("code",{children:"type"})," attribute set appropriately to use the browser-specific functionality."]}),l(I,{Element:HT,code:UT,caption:"type",children:l("p",{children:`Enter some text in the input fields below. Note how the "Number Field" input uses the browser's built-in functionality to accept only numbers.`})}),c("p",{children:["As with all other ",l(ue,{})," properties, they can be defined using"," ",l(Kl,{})," set on the ",l(ne,{}),". The benefit of this approach is that it keeps the field definitions and markup separate.  As well as making them easier to read and maintain, it also has the benefit that field definitions can be reused across multiple forms."]}),c(I,{Element:GT,code:WT,caption:"Form fields",children:[c("p",{children:["The example below generates exactly the same form as the one above (with the exception of the additional ",l(Fc,{})," component). Note that the form data will only include fields that are present in the ",l(ne,{}),".  The ",l("code",{children:"field5"})," field definition is effectively ignored."]}),l("p",{})]}),l(Re,{links:["field:name","field:label","form:fields","input:types"]})]}),QT=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HelpExample = () =>
  <Form>
    <Field
      name="email"
      label="Email Address"
      help="Enter the email address that you registered with"
      required
    />
    <Submit/>
  </Form>

export default HelpExample`,XT=()=>c(O,{children:[l(x,{name:"email",label:"Email Address",help:"Enter the email address that you registered with",required:!0}),l(oe,{})]}),ZT=()=>c("div",{children:[l("h1",{children:"Field Properties"}),l("h2",{children:l("code",{children:"help"})}),c("p",{children:["The ",l("code",{children:"help"})," property can be used to define some additional help for the user.  By default it is displayed underneath the field input."]}),l("p",{children:"If the field input fails to validate then the validation error message will be displayed in its place."}),l(I,{Element:XT,code:QT,caption:"help",children:l("p",{children:"Try submitting the form without entering any value.  You should see the help message replaced by the validation error."})}),l(Re,{links:["field:name","field:label","field:required","field:validate","form:fields"]})]}),JT=`import { Form, Field } from '../../../../../../lib/index.js'

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

export default PrefixExample`,eR=()=>l(O,{children:l(x,{name:"prefix",type:"text",label:"Field with a prefix",prefix:"😀"})}),tR=`import { Form, Field } from '../../../../../../lib/index.js'

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

export default SuffixExample`,nR=()=>l(O,{children:l(x,{name:"suffix",type:"text",label:"Field with a suffix",suffix:"🔒"})}),rR=`import { Form, Field } from '../../../../../../lib/index.js'

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

export default PrefixSuffixExample`,lR=()=>l(O,{children:l(x,{name:"money",type:"number",label:"Field with both prefix and suffix",prefix:"$",suffix:".00"})}),oR=()=>c("div",{children:[l("h1",{children:"Prefix and Suffix"}),l("h2",{children:"prefix"}),c("p",{children:["You can add a ",l("code",{children:"prefix"})," to a ",l("code",{children:"text"})," field or any of the other types using the basic text input, e.g."," ",l("code",{children:"money"}),", ",l("code",{children:"date"}),", etc."]}),l(I,{Element:eR,code:JT,caption:"prefix"}),l("h2",{children:"suffix"}),c("p",{children:["You can add also add a ",l("code",{children:"suffix"}),"."]}),l(I,{Element:nR,code:tR,caption:"suffix"}),l("h2",{children:"prefix and suffix"}),l("p",{children:"Or you can add both."}),l(I,{Element:lR,code:rR,caption:"prefix and suffix"})]}),iR=()=>{const[e,t]=$.useState(),n=r=>t(`${r.label} was focussed`);return c(O,{children:[l(x,{name:"foo",label:"The Foo Field",onFocus:n}),l(x,{name:"bar",label:"The Bar Field",onFocus:n}),e]})},aR=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnFocusExample`,sR=()=>c("div",{children:[l("h1",{children:"Field Events"}),l("h2",{children:l("code",{children:"onFocus"})}),c("p",{children:["You can add an ",l("code",{children:"onFocus"})," handler to a ",l(ue,{})," ","which will be called when the field is focussed (i.e. selected). The field context will be passed as an argument."]}),l(I,{Element:iR,code:aR,caption:"onFocus",children:l("p",{children:"Focus on each of the fields below.  A message should be displayed each time a field gains focus."})}),l(Re,{links:["field:onBlur","field:onChange","field:onValid","field:onInvalid"]})]}),uR=()=>{const[e,t]=$.useState(),n=r=>t(`${r.label} was blurred`);return c(O,{children:[l(x,{name:"foo",label:"The Foo Field",onBlur:n}),l(x,{name:"bar",label:"The Bar Field",onBlur:n}),e]})},cR=`import { Form, Field } from '../../../../../lib/index.js'

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
export default OnBlurExample`,dR=()=>c("div",{children:[l("h1",{children:"Field Events"}),l("h2",{children:l("code",{children:"onBlur"})}),c("p",{children:["You can add an ",l("code",{children:"onBlur"})," handler to a ",l(ue,{})," ","which will be called when the field is blurred (i.e. unselected). The field context will be passed as an argument."]}),l(I,{Element:uR,code:cR,caption:"onFocus",children:l("p",{children:"Focus on one of the fields below and then select the other field. A message should be displayed each time a field loses focus."})}),l(Re,{links:["field:validateOnBlur","field:onFocus","field:onChange","field:onValid","field:onInvalid"]})]}),hR=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetFocusExample`,fR=()=>{const[e,t]=$.useState(!1),[n,r]=$.useState(!1);return c(Ee,{children:[c(O,{children:[l(x,{onLoad:t,name:"field1",label:"Field One"}),l(x,{onLoad:r,name:"field2",label:"Field Two"})]}),c("div",{children:[l("button",{onClick:()=>e==null?void 0:e.setFocus(),children:"Focus Field One"}),l("button",{onClick:()=>n==null?void 0:n.setFocus(),children:"Focus Field Two"})]})]})},mR=()=>c("div",{children:[l("h1",{children:"Field Functions"}),l("h2",{children:l("code",{children:"setFocus()"})}),c("p",{children:["If you want to programmatically set the focus on a ",l(ue,{})," then you first need to capture a reference to it.  You can do that using an ",l("code",{children:"onLoad"})," property to set a state variable."]}),c("p",{children:["Then call the ",l("code",{children:"setFocus()"})," method on the field object to focus it."]}),l(I,{Element:fR,code:hR,caption:"setFocus()",children:l("p",{children:"Click on one of the buttons to focus on a field."})}),c("p",{children:["You can also focus on fields by name using the ",l(ne,{})," ",l(qp,{})," method."]}),l(Re,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),pR=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetValueExample`,gR=()=>{const[e,t]=$.useState(!1);return c(Ee,{children:[l(O,{children:l(x,{onLoad:t,name:"animal",label:"Animal"})}),c("div",{children:[l("button",{onClick:()=>e.setValue("Antelope"),children:"Antelope"}),l("button",{onClick:()=>e.setValue("Badger"),children:"Badger"}),l("button",{onClick:()=>e.setValue("Camel"),children:"Camel"})]})]})},vR=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetValueExample`,yR=()=>{const[e,t]=$.useState(!1);return l(Ee,{children:c(O,{children:[l(x,{onLoad:t,name:"animal",label:"Animal"}),c("div",{children:[l("button",{className:"btn-green",onClick:n=>{n.preventDefault(),e.setValue("Antelope")},children:"Antelope"}),l("button",{className:"btn-green",onClick:n=>e.setValue("Badger",n),children:"Badger"}),l("button",{type:"button",className:"btn-green",onClick:()=>e.setValue("Camel"),children:"Camel"}),l("button",{onClick:()=>e.setValue("Danger!"),className:"btn-red",children:"Danger!"})]})]})})},bR=()=>c("div",{children:[l("h1",{children:"Field Functions"}),l("h2",{children:l("code",{children:"setValue()"})}),c("p",{children:["If you want to programmatically set the value for a ",l(ue,{})," then you first need to capture a reference to it.  You can do that using an ",l("code",{children:"onLoad"})," property to set a state variable."]}),c("p",{children:["Then call the ",l("code",{children:"setValue()"})," method on the field object to set the value."]}),l(I,{Element:gR,code:pR,caption:"setValue()",children:l("p",{children:"Click on one of the buttons to set the input value."})}),c("p",{children:["One thing to be aware of is that the default behaviour of a"," ",l("code",{children:"button"})," inside a ",l("code",{children:"form"})," is to submit the form. This is an innate property of HTML and not something that's specific to this library.  In the example above we put the buttons outside the"," ",l(ne,{})," to avoid this behaviour, but it's not always possible to do that. There are a number of ways to work around it, shown in the example below."]}),c("p",{children:['The first "Antelope" button calls the'," ",l("code",{children:"preventDefault()"})," "," method on the event.  Given that this is a bit clumsy, the ",l("code",{children:"setValue()"})," method allows you to pass the event as the second argument and it will call"," ",l("code",{children:"preventDefault()"}),' for you, as shown on the second "Badger" button.  The third approach, shown on the "Camel" button, is to explicitly set the'," ",l("code",{children:"type"})," to ",l("code",{children:"button"})," to override the default"," ",l("code",{children:"type"})," of ",l("code",{children:"submit"}),`.  The fourth "Danger!" button doesn't do anything and will cause the form to submit, just in case you don't believe me that it's really a problem.`]}),l(I,{Element:yR,code:vR,caption:"setValue()",children:l("p",{children:"Click on one of the buttons to set the input value.  Be warned that the fourth button will cause the form to submit."})}),c("p",{children:["You can also set values for one or more fields by name using the"," ",l(ne,{})," ",l(v0,{})," method."]}),l(Re,{links:["form:setValues","field:setFocus","field:reset"]})]}),wR=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ResetExample`,FR=()=>{const[e,t]=$.useState(!1),[n,r]=$.useState(!1);return c(Ee,{children:[c(O,{children:[l(x,{onLoad:t,name:"field1",label:"Field One"}),l(x,{onLoad:r,value:"Initial value",name:"field2",label:"Field Two"})]}),c("div",{children:[l("button",{className:"btn-blue",onClick:e.reset,children:"Reset Field One"}),l("button",{className:"btn-blue",onClick:n.reset,children:"Reset Field Two"})]})]})},xR=()=>c("div",{children:[l("h1",{children:"Field Functions"}),l("h2",{children:l("code",{children:"reset()"})}),c("p",{children:["If you want to programmatically reset a ",l(ue,{})," then you first need to capture a reference to it.  You can do that using an ",l("code",{children:"onLoad"})," property to set a state variable."]}),c("p",{children:["Then call the ",l("code",{children:"reset()"})," method on the field object to reset it."]}),l(I,{Element:FR,code:wR,caption:"reset()",children:l("p",{children:"Enter some text in either of the inputs below and then click on the corresponding button to reset it to the original value."})}),c("p",{children:["You can also focus on fields by name using the ",l(ne,{})," ",l(qp,{})," method."]}),l(Re,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),SR=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnChangeExample`,ER=()=>{const[e,t]=$.useState("");return c(O,{children:[l(x,{name:"example",label:"Field with onChange",onChange:n=>t(n.value)}),"Current value: ",e]})},CR=()=>c("div",{children:[l("h1",{children:"Field Events"}),l("h2",{children:l("code",{children:"onChange"})}),c("p",{children:["You can add an ",l("code",{children:"onChange"})," handler to a ",l(ue,{})," ","which will be called when the field value is changed.  The field context will be passed as an argument."]}),l(I,{Element:ER,code:SR,caption:"onChange",children:l("p",{children:'Try entering some text in the field below.  You should see the "Current value" display update to reflect the field content.'})}),l(Re,{links:["field:validateOnChange","field:onBlur","field:onFocus","field:onValid","field:onInvalid"]})]}),kR=()=>{const[e,t]=$.useState();return c(O,{validateOnBlur:!0,children:[l(x,{name:"foo",label:"Foo Field",required:!0,onValid:n=>t(`${n.name} is valid: ${n.value}`)}),l(x,{name:"bar",label:"Bar Field",required:!0,onValid:n=>t(`${n.name} is valid: ${n.value}`)}),e]})},TR=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnValidExample`,RR=()=>c("div",{children:[l("h1",{children:"Field Events"}),l("h2",{children:l("code",{children:"onValid"})}),c("p",{children:["You can add an ",l("code",{children:"onValid"})," handler to a ",l(ue,{})," ","which will be called when the field is successfully validated. The field context will be passed as an argument."]}),l(I,{Element:kR,code:TR,caption:"onValid",children:c("p",{children:["Enter some text in one of the fields below and then select the other field.  The ",l("code",{children:"validateOnBlur"})," option on the ",l(ne,{})," ","means that the first field will be validated when it loses focus and the ",l("code",{children:"onValid"})," handler will be called."]})}),l(Re,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onInvalid"]})]}),NR=()=>{const[e,t]=$.useState(),n=r=>t(`${r.label} is invalid: ${r.message}`);return c(O,{validateOnBlur:!0,children:[l(x,{name:"foo",label:"Foo Field",required:!0,onInvalid:n}),l(x,{name:"bar",label:"Bar Field",required:!0,onValid:n,requiredMessage:"You must enter a value"}),e]})},LR=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnInvalidExample`,$R=()=>c("div",{children:[l("h1",{children:"Field Events"}),l("h2",{children:l("code",{children:"onInvalid"})}),c("p",{children:["You can add an ",l("code",{children:"onInvalid"})," handler to a ",l(ue,{})," ","which will be called when the field fails validation. The field context will be passed as an argument."]}),c(I,{Element:NR,code:LR,caption:"onInvalid",children:[c("p",{children:["Click one of the fields below and then select the other field without entering any text. The ",l(S0,{})," option on the"," ",l(ne,{})," "," means that the fields will be validated when they lose focus. They're both marked as ",l(Jt,{})," so they will fail validation (assuming you haven't entered anything) and the ",l("code",{children:"onInvalid"})," handler will be called."]}),c("p",{children:["Also note the use of ",l(w0,{})," to set a custom message for the second field."]})]}),l(Re,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onValid"]})]}),OR=`import { Form, Field } from '../../../../../lib/index.js'

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

export default PrepareValue`,AR={upper:{label:"Converted to UPPER CASE",prepareValue:e=>e.toUpperCase()}},PR=()=>l(O,{fields:AR,children:l(x,{name:"upper"})}),DR=()=>c("div",{children:[l("h1",{children:"Field Validation"}),l("h2",{children:l("code",{children:"prepareValue"})}),c("p",{children:["You can add a ",l("code",{className:"code",children:"prepareValue"})," function to a ",l(ue,{})," to prepare the value before it's set."]}),l(I,{Element:PR,code:OR,caption:"onChange",children:l("p",{children:"Try entering some letters in the field below.  You should see that they get converted to upper case."})}),l(Re,{links:["field:validate","field:validateOnBlur","field:validateOnChange"]})]}),IR=()=>c(O,{children:[l(x,{name:"field1",label:"Required Field",required:!0}),l(oe,{})]}),_R=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const Required = () =>
  <Form>
    <Field name="field1" label="Required Field" required/>
    <Submit/>
  </Form>

export default Required`,jR=()=>c("div",{children:[l("h1",{children:"Field Validation"}),l("h2",{children:l("code",{children:"required"})}),c("p",{children:["You can add a ",l("code",{children:"required"})," property to a field to mark it as being required.  This automatically adds a validator to the field to ensure that a value is provided when the form is submitted."]}),l(I,{Element:IR,code:_R,caption:"required",children:l("p",{children:"Try submitting the form without entering anything in the field input."})}),l(Re,{links:["field:showRequired","field:requiredLabel","field:requiredMessage","field:validateOnBlur","field:validateOnChange"]})]}),MR=()=>c(O,{children:[l(x,{name:"field1",label:"Required Field",required:!0,showRequired:!0}),l(x,{name:"field2",label:"Optional Field"})]}),BR=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ShowRequired`,VR=()=>c(O,{showRequired:!0,children:[l(x,{name:"field1",label:"Required Field",required:!0}),l(x,{name:"field2",label:"Another Required Field",required:!0})]}),zR=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ShowRequiredForm`,qR=()=>c("div",{children:[l("h1",{children:"Field Validation"}),l("h2",{children:l("code",{children:"showRequired"})}),c("p",{children:["If a ",l(ue,{})," is marked as ",l(Jt,{})," then the"," ",l("code",{children:"showRequired"})," property can be added to have an additional label displayed indicating that it is required."]}),l(I,{Element:MR,code:BR,caption:"showRequired on Field"}),c("p",{children:["The ",l("code",{children:"showRequired"})," property can also be added to the"," ",l(ne,{})," to have it apply to all ",l(Jt,{})," fields."]}),l(I,{Element:VR,code:zR,caption:"showRequired on Form"}),l(Re,{links:["field:required","field:requiredLabel","field:showOptional","field:optionalLabel"]})]}),UR=`import { Form, Field } from '../../../../../lib/index.js'

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

export default RequiredLabel`,HR=()=>c(O,{showRequired:!0,requiredLabel:"Important!",children:[l(x,{name:"field1",label:"Required Field",required:!0}),l(x,{name:"field2",label:"Another Required Field",required:!0,requiredLabel:"Very Important!"})]}),WR=()=>c("div",{children:[l("h1",{children:"Field Validation"}),l("h2",{children:l("code",{children:"requiredLabel"})}),c("p",{children:["You can use the ",l("code",{className:"code",children:"requiredLabel"})," property to change the label that is displayed for ",l(Jt,{})," fields that have the ",l(F0,{})," option enabled.  You can set it on individual ",l(ue,{})," components or on the parent ",l(ne,{}),"."]}),l(I,{Element:HR,code:UR,caption:"requiredLabel"}),l(Re,{links:["field:required","field:showRequired","field:showOptional","field:optionalLabel"]})]}),YR=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default RequiredLabel`,GR=()=>c(O,{requiredMessage:"Nothing will come of nothing",children:[l(x,{name:"foo",label:"Foo",required:!0}),l(x,{name:"bar",label:"Bar",required:!0,requiredMessage:"You really MUST enter a value"}),l(oe,{})]}),KR=()=>c("div",{children:[l("h1",{children:"Field Validation"}),l("h2",{children:l("code",{children:"requiredMessage"})}),c("p",{children:["You can use the ",l("code",{className:"code",children:"requiredMessage"})," property to change the error message that is generated for ",l(Jt,{})," fields that aren't completed."]}),c("p",{children:["You can set it on individual ",l(ue,{})," components or on the parent"," ",l(ne,{})," to act as the default for all fields."]}),l(I,{Element:GR,code:YR,caption:"requiredMessage",children:l("p",{children:"Try submitting the form without entering any values."})}),l(Re,{links:["field:required","field:showRequired","field:requiredLabel","field:validateOnChange","field:validateOnBlur"]})]}),QR=()=>c(O,{showOptional:!0,children:[l(x,{name:"field1",label:"Required Field",required:!0}),l(x,{name:"field2",label:"Optional Field"})]}),XR=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ShowOptional`,ZR=()=>c("div",{children:[l("h1",{children:"Field Validation"}),l("h2",{children:l("code",{children:"showOptional"})}),c("p",{children:["If a field is ",l("b",{children:"NOT"})," marked as ",l(Jt,{})," then it is optional. If you set the ",l("code",{children:"showOptional"})," property then it will add an additional label to a field to indicate that it's optional.  You can set the property on individual ",l(ue,{})," components or on the parent ",l(ne,{})," to act as a default for all fields."]}),c("p",{children:["You can use the ",l(b0,{})," property to change the text of the label that is displayed."]}),l(I,{Element:QR,code:XR,caption:"showOptional"}),l(Re,{links:["field:required","field:optionalLabel","field:showRequired","field:requiredLabel"]})]}),JR=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OptionalLabel`,e4=()=>c(O,{showOptional:!0,optionalLabel:"Not required",children:[l(x,{name:"field1",label:"Optional Field"}),l(x,{name:"field2",label:"Another Optional Field",optionalLabel:"Nice to have"})]}),t4=()=>c("div",{children:[l("h1",{children:"Field Validation"}),l("h2",{children:l("code",{children:"optionalLabel"})}),c("p",{children:["You can use the ",l("code",{className:"code",children:"optionalLabel"})," property to change the label that is display for optional fields (i.e. those that aren't marked as ",l(Jt,{}),") that have the"," ",l(x0,{})," option set.  You can set it on individual"," ",l(ue,{})," components or on the parent ",l(ne,{})," to act as a default for all fields."]}),l(I,{Element:e4,code:JR,caption:"optionalLabel"}),l(Re,{links:["field:required","field:showRequired","field:showOptional","field:requiredLabel"]})]}),n4={username:{label:"Username",help:"Enter your username",validate:e=>Nt().trim().required("You must enter your username you numpty!").validate(e)},password:{label:"Password",type:"password",help:"Enter your password",validate:e=>Nt().trim().required("You must enter your password you muppet!").validate(e)}},r4=()=>c(O,{fields:n4,children:[l(yt,{names:"username password"}),l(oe,{})]}),l4=`import { Form, Fields, Submit } from '../../../../../lib/index.js'

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

export default ValidateExample`,o4={username:{label:"Username",help:"Enter your username",validate:async(e,t,n,r)=>{e.match(/badger/i)?n({value:`${e} is a great name`}):r({value:"Mr Badger",message:'Your username must contain the word "badger"'})}}},i4=()=>c(O,{fields:o4,children:[l(x,{name:"username"}),l(oe,{})]}),a4=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default ValidateExample`,s4=()=>c("div",{children:[l("h1",{children:"Field Validation"}),c("p",{children:["There are a number of different ways to validate field input. For simple cases where a value must be provided you can use the"," ",l(Jt,{})," property.  If you need to perform additional validation then you can do that using a ",l("code",{children:"validate"})," function."]}),l("h2",{children:l("code",{children:"validate"})}),c("p",{children:["You can use the ",l(Jt,{})," property to mark a field as being required, but it's a blunt instrument.  All it will do is check that a field has some value entered. For more robust validation you can use the ",l("code",{children:"validate"})," property to define an ",l("code",{children:"async"})," ","validation function."]}),c("p",{children:["In this example we're using"," ",l("a",{href:"https://www.npmjs.com/package/yup",children:"Yup"})," but you can use anything you like.  It should return the validated value on success or throw an error if the valid is invalid."]}),l(I,{Element:r4,code:l4,caption:"validate",children:l("p",{children:"Try submitting the form without entering any values for either of the fields. You should see the custom validation errors."})}),c("p",{children:["The ",l("code",{children:"validate"})," function is passed four arguments.  The first is the field value for common cases where that's all you need to determine if the field is valid.  The second argument is the field context containing everything you need to know about the field state and callable actions to change it.  The third and fourth arguments are"," ",l("code",{children:"resolve"})," and ",l("code",{children:"reject"})," functions which can be called to validate or invalidate the field, respectively.  The"," ",l("code",{children:"resolve"})," function should be passed an object containing the ",l("code",{children:"value"}),", which may be modified by your function. The ",l("code",{children:"reject"})," function should be passed an object containing an error ",l("code",{children:"message"}),", and optionally a new ",l("code",{children:"value"})," ","for the field."]}),l(I,{Element:i4,code:a4,caption:"validate",children:l("p",{children:'In this somewhat contrived example we require the user to enter a username containing the word "badger".'})}),l(Re,{links:["field:required","field:validateOnChange","field:validateOnBlur"]})]}),u4=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ValidateOnChangeExample`,c4={vowels:{label:"Vowels",help:"Enter between 3 and 5 vowels",validateOnChange:!0,minValidateLength:3,validate:e=>Nt().trim().matches(/^[^y]*$/i,"Sorry, but y is not allowed").matches(/^[aeiou]*$/i,"You should only type vowels").min(3,"You must enter at least three vowels").max(5,"You should not enter more than 5 vowels").validate(e)}},d4=()=>l(O,{fields:c4,children:l(x,{name:"vowels"})}),h4=()=>c("div",{children:[l("h1",{children:"Field Validation"}),l("h2",{children:l("code",{children:"validateOnChange"})}),c("p",{children:["You can set the ",l("code",{children:"validateOnChange"})," flag to enable validation any time the field value changes.  The ",l("code",{children:"minValidateLength"})," can be set to only trigger validation when the input length exceeds a threshold."]}),l(I,{Element:d4,code:u4,caption:"validateOnChange",children:l("p",{children:"Enter some text in the field below.  Once you've entered three letters the validation will kick in.  You should see an error if you enter any letters that aren't vowels."})}),l(Re,{links:["field:required","field:validate","field:validateOnBlur"]})]}),f4={username:{label:"Username",help:"Enter your username",validate:e=>Nt().trim().required("You must enter your username you numpty!").validate(e)},password:{label:"Password",type:"password",help:"Enter your password",validate:e=>Nt().trim().required("You must enter your password you muppet!").validate(e)}},m4=()=>c(O,{fields:f4,validateOnBlur:!0,children:[l(yt,{names:"username password"}),l(oe,{})]}),p4=`import { Form, Fields, Submit } from '../../../../../lib/index.js'

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

export default ValidateExample`,g4=()=>c("div",{children:[l("h1",{children:"Field Validation"}),l("h2",{children:l("code",{children:"validateOnBlur"})}),c("p",{children:["The ",l("code",{children:"validateOnBlur"})," property can be set to trigger validation whenever a field is blurred.  You can set it on individual"," ",l(ue,{})," components or on the parent ",l(ne,{})," to have it apply to all fields."]}),l(I,{Element:m4,code:p4,caption:"validate",children:l("p",{children:"Try switching focus from one field to another without entering anything.  You should see the custom validation errors when each field is blurred."})}),l(Re,{links:["field:required","field:validate","field:validateOnChange"]})]}),v4=()=>c(yn,{children:[l(M,{path:"",end:!0,element:l(NT,{})}),l(M,{path:"properties",element:l(LT,{})}),l(M,{path:"name",element:l(_T,{})}),l(M,{path:"label",element:l(qT,{})}),l(M,{path:"type",element:l(KT,{})}),l(M,{path:"help",element:l(ZT,{})}),l(M,{path:"prefix-suffix",element:l(oR,{})}),l(M,{path:"onFocus",element:l(sR,{})}),l(M,{path:"onBlur",element:l(dR,{})}),l(M,{path:"onValid",element:l(RR,{})}),l(M,{path:"onInvalid",element:l($R,{})}),l(M,{path:"setFocus",element:l(mR,{})}),l(M,{path:"setValue",element:l(bR,{})}),l(M,{path:"Reset",element:l(xR,{})}),l(M,{path:"onChange",element:l(CR,{})}),l(M,{path:"prepareValue",element:l(DR,{})}),l(M,{path:"required",element:l(jR,{})}),l(M,{path:"requiredMessage",element:l(KR,{})}),l(M,{path:"showRequired",element:l(qR,{})}),l(M,{path:"requiredLabel",element:l(WR,{})}),l(M,{path:"showOptional",element:l(ZR,{})}),l(M,{path:"optionalLabel",element:l(t4,{})}),l(M,{path:"validate",element:l(s4,{})}),l(M,{path:"validateOnChange",element:l(h4,{})}),l(M,{path:"validateOnBlur",element:l(g4,{})})]}),y4={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},b4=()=>l(O,{fields:y4,children:c("div",{className:"grid-2 gap-2",children:[l(yt,{names:["name","message"]}),l(yt,{names:"badgers animal"})]})}),w4=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,F4=()=>c("div",{children:[l("h1",{children:"Fields"}),c("p",{children:["The ",l("code",{children:"Fields"})," component can be used to render multiple fields."]}),l("p",{children:"This is a shortcut for convenience, but it depends on you having all your form fields defined in a separate schema so you can reference them only by name."}),c("p",{children:["The ",l("code",{className:"code",children:"names"})," property should be used to specify the list of field names either as an array of strings, or a single string containing a whitespace-delimited list of field names. The ",l("code",{className:"code",children:"Fields"})," component renders each of the fields, collected together in a single"," ",l("code",{className:"code",children:"div"})," element"]}),l(I,{Element:b4,code:w4,caption:"Fields"})]}),x4=()=>l(O,{children:c(Yi,{legend:"Fieldset One",children:[l(x,{name:"one",label:"Field One"}),l(x,{name:"one",label:"Field Two"})]})}),S4=`import { Form, Field, Fieldset } from '../../../../../lib/index.js'

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
`,E4={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},C4=()=>l(O,{fields:E4,children:l(Yi,{legend:"Fieldset Two",fields:"name message"})}),k4=`import { Form, Fieldset } from '../../../../../lib/index.js'

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
`,T4=()=>c("div",{children:[l("h1",{children:"Fieldset"}),c("p",{children:["The ",l("code",{children:"Fieldset"})," component can be used to create a field set.  The ",l("code",{children:"legend"})," property should be used to set the legend."]}),l(I,{Element:x4,code:S4,caption:"Fieldset"}),c("p",{children:["The ",l("code",{className:"code",children:"fields"})," property can be used as a shortcut to render a set of named fields using the"," ",l(zp,{})," component."]}),l(I,{Element:C4,code:k4,caption:"Fieldset fields"})]}),R4=()=>c(O,{showRequired:!0,children:[l(x,{name:"one",label:"Field one"}),l(x,{name:"two",label:"Field two"}),l(oe,{})]}),N4=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitExample = () =>
  <Form showRequired>
    <Field name="one"   label="Field one"/>
    <Field name="two"   label="Field two"/>
    <Submit/>
  </Form>

export default SubmitExample`,L4=()=>c(O,{children:[l(x,{name:"one",label:"Field one"}),l(x,{name:"two",label:"Field two"}),l(oe,{className:"btn-blue",text:"Save Changes"})]}),$4=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const SubmitProps = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit className="btn-blue" text="Save Changes"/>
  </Form>

export default SubmitProps`,O4=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnSubmit = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <Submit/>
  </Form>

export default OnSubmit`,A4=()=>c(O,{onSubmit:()=>alert("You submitted the form"),children:[l(x,{name:"field1",label:"Field One"}),l(oe,{})]}),P4=()=>c("div",{children:[l("h1",{children:"Submit"}),c("p",{children:["The ",l("code",{children:"Submit"})," component can be used to add a button which will submit the form.  See the"," ",l(J,{to:"/components/form/validation",text:"validation page"})," for information on how the form data is validated and the"," ",l(Vp,{})," component for details on how validation errors are displayed and can be customised."]}),l(I,{Element:R4,code:N4,caption:"Submit",children:l("p",{children:"Try entering some text in the fields below then click on the Submit button."})}),l("h2",{children:"Properties"}),c("p",{children:["You can use the ",l("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",l("code",{children:"className"}),"."]}),l(I,{Element:L4,code:$4,caption:"Properties"}),l("h2",{children:"onSubmit"}),c("p",{children:["You can use the ",l("code",{children:"onSubmit"})," form property to handle the submission."]}),l(I,{Element:A4,code:O4,caption:"onSubmit"})]}),D4=`import { Form, Field, Reset } from '../../../../../lib/index.js'

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

export default ResetExample`,I4=()=>c(O,{values:{three:"The third field"},children:[l(x,{name:"one",label:"Field one"}),l(x,{name:"two",label:"Field two with default value",default:"Badger"}),l(x,{name:"three",label:"Field three with pre-defined form value"}),l(vr,{})]}),_4=()=>c(O,{children:[l(x,{name:"one",label:"Field one"}),l(vr,{className:"btn-brown",text:"Reset the form"})]}),j4=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const Properties = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Reset className="btn-brown" text="Reset the form"/>
  </Form>

export default Properties`,M4=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const OnReset = () =>
  <Form onReset={() => alert('form has been reset')}>
    <Field name="field1" label="Field One"/>
    <Reset/>
  </Form>

export default OnReset`,B4=()=>c(O,{onReset:()=>alert("form has been reset"),children:[l(x,{name:"field1",label:"Field One"}),l(vr,{})]}),V4=()=>c("div",{children:[l("h1",{children:"Reset"}),c("p",{children:["The ",l("code",{children:"Reset"})," component can be used to add a reset button which will reset the form to its initial state.  Any"," ",l("code",{children:"values"})," defined on the ",l(ne,{})," will be restored. Any fields that have a ",l("code",{children:"default"})," value will be reset to that value."]}),l(I,{Element:I4,code:D4,caption:"Reset",children:l("p",{children:"Try entering some text in the fields below then click on the Reset button.  You should see the fields reset to their original state."})}),l("h2",{children:"Properties"}),c("p",{children:["You can use the ",l("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",l("code",{children:"className"}),"."]}),l(I,{Element:_4,code:j4,caption:"Properties"}),l("h2",{children:"onReset"}),c("p",{children:["You can use the ",l("code",{children:"onReset"})," property to register a function that should be called when the form is reset."]}),l(I,{Element:B4,code:M4,caption:"onReset"})]}),z4=()=>c(O,{children:[l(x,{name:"field1",label:"Field One"}),l(Sa,{})]}),q4=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Cancel } from '@abw/react-formula'

const CancelExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Cancel/>
  </Form>

export default CancelExample`,U4=()=>c(O,{children:[l(x,{name:"field1",label:"Field One"}),l(Sa,{text:"Go Back",className:"btn-brown",onClick:()=>alert("Cancel button was clicked")})]}),H4=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

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

export default CancelExample`,W4=()=>c("div",{children:[l("h1",{children:"Cancel"}),c("p",{children:["The ",l("code",{children:"Cancel"})," component can be used to add a Cancel button. This doesn't do anything to the form but it's common to provide a button in a form to allow a user to cancel an edit or go back."]}),l(I,{Element:z4,code:q4,caption:"Cancel",children:c("p",{children:["Don't be surprised that the Cancel button doesn't do anything in this example.  We need to add an ",l("code",{children:"onClick"})," handler to make it useful. See the next example."]})}),c("p",{children:["The ",l("code",{children:"text"})," property will set the text for the button. The ",l("code",{children:"className"})," property can be used to add a CSS class.  The ",l("code",{children:"onClick"})," property should be used to define a handler to do something when the button is clicked."]}),l(I,{Element:U4,code:H4,caption:"Properties"})]}),Y4=()=>c(O,{onSubmit:()=>alert("You submitted the form"),children:[l(x,{name:"field1",label:"Field One"}),l(Eg,{})]}),G4=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelSubmit/>
  </Form>

export default CancelSubmitExample`,K4=()=>c(O,{onSubmit:()=>alert("You submitted the form"),children:[l(x,{name:"field1",label:"Field One"}),l(Eg,{className:"flex evenly",submit:{text:"Submit the Form",className:"wide btn-green"},cancel:{text:"Go Back",className:"wide btn-lilac",onClick:()=>alert("You went back")}})]}),Q4=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

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

export default CancelSubmitExample`,X4=()=>c("div",{children:[l("h1",{children:"CancelSubmit"}),c("p",{children:["The ",l("code",{children:"CancelSubmit"})," component can be used to add both"," ",l(zi,{})," and ",l(Mn,{})," controls."]}),l(I,{Element:Y4,code:G4,caption:"CancelSubmit"}),c("p",{children:["You can define properties for the ",l(zi,{})," component using the ",l("code",{children:"cancel"})," property, and for the ",l(Mn,{})," ","component using the ",l("code",{children:"submit"})," property.  You can add a"," ",l("code",{children:"className"})," property to set the CSS class of the container."]}),l(I,{Element:K4,code:Q4,caption:"Properties"})]}),Z4=()=>c(O,{onSubmit:()=>alert("You submitted the form"),children:[l(x,{name:"field1",label:"Field One"}),l(Cg,{})]}),J4=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit/>
  </Form>

export default CancelResetSubmitExample`,eN=()=>c(O,{onSubmit:()=>alert("You submitted the form"),children:[l(x,{name:"field1",label:"Field One"}),l(Cg,{submit:{text:"Submit the Form",className:"btn-green"},reset:{text:"Reset the Form",className:"btn-brown"},cancel:{text:"Go Back",onClick:()=>alert("You went back")}})]}),tN=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

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

export default CancelResetSubmitExample`,nN=()=>c("div",{children:[l("h1",{children:"CancelResetSubmit"}),c("p",{children:["The ",l("code",{children:"CancelResetSubmit"})," component can be used to add all three ",l(zi,{}),", ",l(qi,{})," and ",l(Mn,{})," controls in one fell swoop."]}),l(I,{Element:Z4,code:J4,caption:"CancelResetSubmit"}),c("p",{children:["You can define properties for the ",l(zi,{})," component using the ",l("code",{children:"cancel"})," property, for the ",l(qi,{})," component using the ",l("code",{children:"reset"})," property, and for the ",l(Mn,{})," ","component using the ",l("code",{children:"submit"})," property.  You can add a"," ",l("code",{children:"className"})," property to set the CSS class of the container."]}),l(I,{Element:eN,code:tN,caption:"Properties"})]}),rN=()=>c(O,{onSubmit:()=>alert("You submitted the form"),children:[l(x,{name:"field1",label:"Field One"}),l(Ea,{})]}),lN=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <ResetSubmit/>
  </Form>

export default ResetSubmitExample`,oN=()=>c(O,{onSubmit:()=>alert("You submitted the form"),children:[l(x,{name:"field1",label:"Field One"}),l(Ea,{reset:{text:"Reset the Form",className:"btn-brown"},submit:{text:"Submit the Form",className:"btn-blue"}})]}),iN=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

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

export default ResetSubmitExample`,aN=()=>c("div",{children:[l("h1",{children:"ResetSubmit"}),c("p",{children:["The ",l("code",{children:"ResetSubmit"})," component can be used to add both"," ",l(qi,{})," and ",l(Mn,{})," controls."]}),l(I,{Element:rN,code:lN,caption:"ResetSubmit"}),c("p",{children:["You can define properties for the ",l(qi,{})," component using the ",l("code",{children:"reset"})," property, and for the ",l(Mn,{})," ","component using the ",l("code",{children:"submit"})," property.  You can add a"," ",l("code",{children:"className"})," property to set the CSS class of the container."]}),l(I,{Element:oN,code:iN,caption:"Properties"})]}),sN=()=>c(O,{children:[l(x,{name:"field1",label:"Field One"}),l(x,{name:"field2",label:"Field Two",value:"Hello World!"}),l(Yc,{children:l(Ea,{})})]}),uN=`import { Form, Field, Changed, ResetSubmit } from '../../../../lib/index.js'

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

export default ChangedExample`,cN=()=>c("div",{children:[l("h1",{children:"Changed"}),c("p",{children:["The ",l("code",{children:"Changed"})," component will only render its child components when the form state has changed."]}),l("p",{children:'A typical example is shown below.  The "Reset" and "Submit" buttons are only displayed once the user has made changes to a form field.'}),l(I,{Element:sN,code:uN,caption:"Changed",children:c("p",{children:["Edit one of the fields in the form and you should see the"," ",'"Reset" and "Submit" buttons appear as if by magic.  Try clicking on the "Reset" button and they will be hidden again.']})})]}),dN=()=>l(O,{children:l(x,{name:"field1",label:"Field One",children:l(xa,{})})}),hN=`import { Form, Field, Label } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Label } from '@abw/react-formula'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Field One">
      <Label/>
    </Field>
  </Form>

export default LabelExample`,fN=()=>c("div",{children:[l("h1",{children:"Label"}),c("p",{children:["The ",l("code",{children:"Label"})," component can be used to add a label to a field."]}),l(I,{Element:dN,code:hN,caption:"Label"})]}),mN=()=>c(O,{showRequired:!0,children:[l(x,{name:"one",label:"Field one",required:!0}),l(x,{name:"two",label:"Field two",required:!0}),l(x,{name:"three",label:"Field three"}),l(oe,{})]}),pN=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default RequiredExample`,gN=()=>c(O,{showRequired:!0,errorsInHeader:!1,children:[l(x,{name:"one",label:"Field one",required:!0}),l(x,{name:"two",label:"Field two",required:!0}),l(x,{name:"three",label:"Field three"}),l(Uc,{}),l(oe,{})]}),vN=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

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

export default ErrorsExample`,yN=()=>l(O,{children:l(bN,{})}),bN=()=>{const{setInvalidState:e}=ht(),t=(i,a)=>{i.preventDefault(),e({error:a})};return c(Ee,{children:[l("button",{onClick:i=>t(i,"An error string"),children:"Error String"}),l("button",{onClick:i=>t(i,{message:"An error object"}),children:"Error Object"}),l("button",{onClick:i=>t(i,{label:"Example",message:"An error object"}),children:"Labelled Error"})]})},wN=`import { Form, useForm } from '../../../../../lib/index.js'

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

export default Error`,FN=()=>l(O,{children:l(xN,{})}),xN=()=>{const{setInvalidState:e}=ht(),t=(a,s)=>{a.preventDefault(),e({errors:s})};return c(Ee,{children:[l("button",{onClick:a=>t(a,["A single error in errors"]),children:"Error String"}),l("button",{onClick:a=>t(a,["An error string","Another error string"]),children:"Error Strings"}),l("button",{onClick:a=>t(a,[{message:"An error object"},{message:"Another error object"}]),children:"Error Objects"}),l("button",{onClick:a=>t(a,[{label:"Example1",message:"An error object"},{label:"Example2",message:"Another error object"}]),children:"Labelled Errors"})]})},SN=`import { Form, useForm } from '../../../../../lib/index.js'

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

export default Errors`,EN=()=>c("div",{children:[l("h1",{children:"Errors"}),l("p",{children:"By default, validation errors will be displayed in the form header."}),l(I,{Element:mN,code:pN,caption:"Required Fields",children:l("p",{children:"Try submitting the form below without entering anything for either of the first two fields."})}),l("h2",{children:"errorsInHeader"}),c("p",{children:["If you don't want errors displayed in the header you can set the"," ",l("code",{children:"errorsInHeader"})," form property to ",l("code",{children:"false"}),".  You can use the ",l("code",{children:"Errors"})," component to display them somewhere else inside the form."]}),l(I,{Element:gN,code:vN,caption:"Errors"}),l("h2",{children:"error"}),c("p",{children:["The ",l(ne,{})," context can include a single ",l("code",{children:"error"})," or an array of ",l("code",{children:"errors"}),`.  The first case is typically used when there's an error that doesn't relate to a specific field, e.g. "Invalid username or password".  The latter case is used when there are multiple errors, e.g. for different fields.`]}),c("p",{children:["Just to complicate matters, both ",l("code",{children:"error"})," and the elements in ",l("code",{children:"errors"})," can be either strings or objects containing a"," ",l("code",{children:"message"})," and other information about what field the error message relates to, including the field ",l("code",{children:"name"})," and"," ",l("code",{children:"label"}),"."]}),c("p",{children:["The ",l("code",{children:"Errors"})," component handles all these cases.  There are also some additional properties that you can set on the ",l(ne,{})," to configure what gets displayed.  The ",l("code",{children:"errorsTitle"}),' can be defined as a function which takes the number of errors and returns an appropriate title.  The default function returns "Form Submission Error" if there is one error or "Form Submission Errors" if there are more than one.  The ',l("code",{children:"errorsPrompt"})," can also be defined to prompt the user to fix any ",l("code",{children:"errors"}),".  This also takes the number of ",l("code",{children:"errors"}),'.  The default function returns "Please correct this problem and re-submit:" or "Please correct these problems and re-submit:", depending on the number of errors.']}),c("p",{children:["This example includes some buttons that set the ",l("code",{children:"error"})," ","in the ",l(ne,{})," to demonstrate the different combinations."]}),l(I,{Element:yN,code:wN,caption:"error"}),l("h2",{children:"errors"}),c("p",{children:["This example does a similar thing but sets multiple ",l("code",{children:"errors"}),"."]}),l(I,{Element:FN,code:SN,caption:"error"}),c("p",{children:["You can always implement your own component for displaying errors if you don't like the way this works.  Just be warned that there are the various different possibilities that need to be accounted for. You can use the ",l("code",{children:"useForm"})," function to get access to the form context which contains the ",l("code",{children:"error"})," and/or ",l("code",{children:"errors"}),"."]}),c("p",{children:["See the implementations of the"," ",l("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Errors.jsx",children:"Errors"})," ","and"," ",l("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Error.jsx",children:"Error"})," ","modules for a starting point."]})]}),CN=`import { Form, Field, Debug } from '../../../../../lib/index.js'

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

export default DebugForm`,kN=()=>c(O,{children:[l(x,{name:"message",label:"Message"}),l(x,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"]}),l(x,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions"}),l($t,{})]}),TN=`import { Form, Field, Debug } from '../../../../../lib/index.js'

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

export default Show`,RN=()=>c(O,{children:[l(x,{name:"message",label:"Message"}),l(x,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"]}),l(x,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions"}),l($t,{show:{values:!0,status:!0,config:!0}})]}),NN=`import { Form, Field, Debug } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const ShowAll = () =>
  <Form>
    <Field name="message" label="Message"/>
    <Debug showAll/>
  </Form>

export default ShowAll`,LN=()=>c(O,{children:[l(x,{name:"message",label:"Message"}),l($t,{showAll:!0})]}),$N=()=>c("div",{children:[l("h1",{children:"Debug"}),c("p",{children:["The ",l("code",{children:"Debug"})," component can be used in development to debug your form.  By default it displays only the form values."]}),l(I,{Element:kN,code:CN,caption:"Debug",children:l("p",{children:"Try updating the form values and see how the debugging data changes."})}),l("h2",{children:"show"}),c("p",{children:["The ",l("code",{children:"show"})," option can used to configure what data the debug panel displays.  It should be an object containing any of"," ",l("code",{children:"values"}),", ",l("code",{children:"config"}),", ",l("code",{children:"status"})," or"," ",l("code",{children:"fields"})," which should be set to ",l("code",{children:"true"})," to enable display."]}),l(I,{Element:RN,code:TN,caption:"show"}),l("h2",{children:"showAll"}),c("p",{children:["The ",l("code",{children:"showAll"})," option is a shortcut to showing all form data."]}),l(I,{Element:LN,code:NN,caption:"showAll"})]}),ON=()=>c(yn,{children:[l(M,{path:"",end:!0,element:l(uT,{})}),l(M,{path:"Form/*",element:l(RT,{})}),l(M,{path:"Field/*",element:l(v4,{})}),l(M,{path:"Fields",element:l(F4,{})}),l(M,{path:"Fieldset",element:l(T4,{})}),l(M,{path:"Submit",element:l(P4,{})}),l(M,{path:"Reset",element:l(V4,{})}),l(M,{path:"Cancel",element:l(W4,{})}),l(M,{path:"CancelSubmit",element:l(X4,{})}),l(M,{path:"ResetSubmit",element:l(aN,{})}),l(M,{path:"CancelResetSubmit",element:l(nN,{})}),l(M,{path:"Changed",element:l(cN,{})}),l(M,{path:"Label",element:l(fN,{})}),l(M,{path:"Errors",element:l(EN,{})}),l(M,{path:"Debug",element:l($N,{})})]}),AN=()=>c("div",{children:[l("h1",{children:"Inputs"}),l("p",{children:"This section of the documentation provides detailed information about different input types."}),c("ul",{className:"menu",children:[console.log("menu: ",uu.items),uu.items.map((e,t)=>l(xc,{item:e,showAbout:!0},t))]})]}),PN=`import { Form, Field } from '../../../../../lib/index.js'

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

export default Text`,DN=()=>c(O,{children:[l(x,{name:"one"}),l(x,{name:"two",label:"A text input with a label"}),l(x,{name:"three",label:"Another text input",type:"text"}),l(x,{name:"four",label:"Text with placeholder",placeholder:"Hello World!"}),l(x,{name:"money",label:"Prefix/Suffix",prefix:"$",suffix:".00"})]}),IN=`import { Form, Field } from '../../../../../lib/index.js'

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

export default TextThin`,_N=()=>c(O,{children:[l(x,{name:"one",label:"A text field",className:"thin",size:"25"}),l(x,{name:"two",label:"A text field with prefix and suffix",prefix:"$",suffix:".00",size:"6",className:"thin"})]}),jN=()=>c("div",{children:[l("h1",{children:"Text Fields"}),c("p",{children:["The ",l("code",{className:"code",children:"Form"})," component is used to create a form wrapper.  Inside that the ",l("code",{className:"code",children:"Field"})," ","component is used to define a field.  The only property required is ",l("code",{className:"code",children:"name"}),"."]}),c("p",{children:["The default field ",l("code",{className:"code",children:"type"})," is"," ",l("code",{className:"code",children:"text"})," so it's optional in these examples.  You can provide a ",l("code",{className:"code",children:"label"})," ","and/or ",l("code",{className:"code",children:"placeholder"})," text.  Both are also optional."]}),l(I,{Element:DN,code:PN}),l("h2",{children:"Thin Text Fields"}),c("p",{children:["The default behaviour is to make the text fields extend to the full width of the container.  Bitter experience has taught me that it's generally easier to do this and constrain the width of the container than it is to try and get all inputs the same width, especially if you're using prefix and suffix elements. But if you really want to throw caution to the wind you can add the ",l("code",{className:"code",children:"thin"})," CSS class via the ",l("code",{className:"code",children:"className"})," property."]}),c("p",{children:["The ",l("code",{className:"code",children:"size"})," property can be set to tell the browser ",l("i",{children:"approximately"})," how wide the field should be in terms of characters, but don't rely on it being particularly accurate.  In terms of usability it is generally considered to be a good thing to give users a visual indication of how long the input is expected to be.  Unfortunately I can count on no hands the number of times a designer has agreed that this is more important than having all the fields fully justified."]}),l(I,{Element:_N,code:IN})]}),MN=`import { Form, Field } from '../../../../../lib/index.js'

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

export default TextAreaExample`,BN=()=>c(O,{children:[l(x,{type:"textarea",name:"one",label:"A text area input"}),l(x,{type:"textarea",name:"two",label:"Text area with rows",rows:"10"}),l(x,{type:"textarea",name:"three",label:"Thin text area with placeholder",placeholder:"Type here",className:"thin"})]}),VN=()=>c("div",{children:[l("h1",{children:"Text Area Fields"}),c("p",{children:["Set the ",l("code",{className:"code",children:"type"})," to"," ",l("code",{className:"code",children:"textarea"})," for a text area input.  The optional ",l("code",{className:"code",children:"rows"})," property can be used to specify the number of rows."]}),l(I,{Element:BN,code:MN})]}),zN=`import { Form, Field } from '../../../../../lib/index.js'

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

export default TextExample`,qN=()=>c(O,{children:[l(x,{name:"one",type:"number",label:"A number field"}),l(x,{name:"two",type:"date",label:"A date field"}),l(x,{name:"three",type:"password",label:"A password field"}),l(x,{name:"four",type:"color",label:"A color field"})]}),UN=()=>c("div",{children:[l("h1",{children:"Number, Date and other Field Types"}),c("p",{children:["All the other variants of the basic input type are supported.  Set the ",l("code",{className:"code",children:"type"})," to ",l("code",{className:"code",children:"number"})," ",", for a numerical field, ",l("code",{className:"code",children:"date"})," for a date selector, ",l("code",{className:"code",children:"password"})," for a password field, and so on."]}),l(I,{Element:qN,code:zN})]}),HN=()=>l(O,{children:l(x,{name:"one",label:"A checkbox example",type:"checkbox",text:"I like badgers!"})}),WN=`import { Form, Field } from '../../../../../lib/index.js'

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

export default Checkbox`,YN=`import { Form, Field } from '../../../../../lib/index.js'

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

export default CheckboxWide`,GN=()=>l(O,{children:l(x,{name:"badger",label:"A wide checkbox example",type:"checkbox",text:"I really like badgers!",className:"wide"})}),KN=`import { Form, Field } from '../../../../../lib/index.js'

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

export default CheckboxBare`,QN=()=>l(O,{children:l(x,{name:"badger",label:"A bare checkbox",type:"checkbox",text:"I really, really like badgers!",className:"bare"})}),XN=()=>c("div",{children:[l("h1",{children:"Checkbox Fields"}),c("p",{children:["Set the ",l("code",{className:"code",children:"type"})," to"," ",l("code",{className:"code",children:"checkbox"})," for a checkbox.  Use the",l("code",{className:"code",children:"text"})," property to define any text that you want to appear alongside the checkbox.  The"," ",l("code",{className:"code",children:"label"})," is optional on all fields, so depending on what your checkbox text says, you might want to leave it out."]}),l(I,{Element:HN,code:WN}),l("h2",{children:"Wide Checkbox"}),c("p",{children:["The default behaviour is for a checkbox to only take up as much room as is required for the text.  Add the ",l("code",{className:"code",children:"wide"})," ","CSS class using the ",l("code",{className:"code",children:"className"})," property to make it extend across the full width of the container."]}),l(I,{Element:GN,code:YN}),l("h2",{children:"Bare Checkbox"}),c("p",{children:["If boxes around checkboxes aren't your thing then the"," ",l("code",{className:"code",children:"bare"})," class will strip them naked."]}),l(I,{Element:QN,code:KN})]}),ZN=`import { Form, Field } from '../../../../../lib/index.js'

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

export default Radio`,JN=()=>l(O,{children:l(x,{name:"animal",label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]})}),eL=`import { Form, Field } from '../../../../../lib/index.js'

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

export default RadioWide`,tL=()=>l(O,{children:l(x,{name:"food",label:"What is your favourite number?",type:"radio",options:[{value:10,text:"Ten"},{value:11,text:"Eleven (one louder)",className:"bold"},{value:42,text:c(Ee,{children:["Forty-Two (the meaning of ",l("i",{children:"life"}),")"]})}],className:"wide"})}),nL=`import { Form, Field } from '../../../../../lib/index.js'

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

export default RadioBare`,rL=()=>l(O,{children:l(x,{name:"cheese",label:"What is your favourite cheese?",type:"radio",options:["Cheddar","Brie","Emmental"],className:"bare"})}),lL=()=>c("div",{children:[l("h1",{children:"Radio Button Fields"}),c("p",{children:["Set the ",l("code",{className:"code",children:"type"})," to"," ",l("code",{className:"code",children:"radio"})," to create a radio button set. The ",l("code",{className:"code",children:"options"})," property should be used to define the options.  In simple cases where the value and text are the same then you only need to provide an array of values.  Otherwise, provide an array of objects containing"," ",l("code",{className:"code",children:"value"})," and ",l("code",{className:"code",children:"text"})," ","properties."]}),c("p",{children:["You can also add ",l("code",{className:"code",children:"className"})," if you want to add a particular class to an option.  Or for more complex markup, define the ",l("code",{className:"code",children:"text"})," as a JSX snippet.  All of these properties can be defined in a"," ",l("a",{href:"schema",children:"separate scheme"}),' or you can "inline" them as shown here.  Whatever floats your boat.']}),l(I,{Element:JN,code:ZN}),l("h2",{children:"Wide Radio Button Options"}),c("p",{children:["The default behaviour is for radio button options to only take up as much room as is required for the text.  Add the"," ",l("code",{className:"code",children:"wide"})," CSS class using the"," ",l("code",{className:"code",children:"className"})," property to make them extend across the full width of the container."]}),c("p",{children:[`If you don't like the "boxy" look then add the`," ",l("code",{className:"code",children:"bare"})," class to remove the border and background."]}),l(I,{Element:tL,code:eL}),l("h2",{children:"Bare Radio Button Options"}),c("p",{children:[`If you don't like the "boxy" look then add the`," ",l("code",{className:"code",children:"bare"})," class to remove the border and background."]}),l(I,{Element:rL,code:nL})]}),oL=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SelectExample`,iL=()=>c(O,{children:[l(x,{name:"animal",label:"What is your favourite animal?",type:"select",options:["Badger","Ferret","Stoat"]}),l(x,{name:"food",label:"What is your favourite number?",type:"select",placeholder:"Pick a number",options:[{value:10,text:"Ten"},{value:11,text:"Eleven (one louder)",className:"bold"},{value:42,text:"Forty-Two (the meaning of life)"},{value:69,text:"Sixty nine, dude!",disabled:!0}]})]}),aL=()=>c("div",{children:[l("h1",{children:"Select Fields"}),c("p",{children:["Set the ",l("code",{className:"code",children:"type"})," to"," ",l("code",{className:"code",children:"select"})," to create a select input. Just like the ",l("a",{href:"radio",children:"radio"})," field, you can specify the ",l("code",{className:"code",children:"options"})," as an array of simple values or objects containing"," ",l("code",{className:"code",children:"value"})," and ",l("code",{className:"code",children:"text"})," ","properties."]}),l(I,{Element:iL,code:oL})]}),sL=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HiddenExample = () =>
  <Form debug>
    <Field name="user_id" type="hidden" value="123"/>
    <Field name="name"    label="Your Name"/>
    <Submit/>
  </Form>

export default HiddenExample`,uL=()=>c(O,{debug:!0,children:[l(x,{name:"user_id",type:"hidden",value:"123"}),l(x,{name:"name",label:"Your Name"}),l(oe,{})]}),cL=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HiddenExample = () =>
  <Form values={{ user_id: 456, name: 'Alice' }}>
    <Field name="user_id" type="hidden"/>
    <Field name="name"    label="Your Name"/>
    <Submit/>
  </Form>

export default HiddenExample`,dL=()=>c(O,{values:{user_id:456,name:"Alice"},children:[l(x,{name:"user_id",type:"hidden"}),l(x,{name:"name",label:"Your Name"}),l(oe,{})]}),hL=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default HiddenExample`,fL={name:"Bob"},mL={user_id:789,version:42},pL=()=>c(O,{values:fL,hidden:mL,children:[l(x,{name:"name",label:"Your Name"}),l(oe,{})]}),gL=()=>c("div",{children:[l("h1",{children:"Hidden Input"}),c("p",{children:["Set the ",l("code",{children:"type"})," to ",l("code",{children:"hidden"})," to embed a hidden value in the ",l(ne,{}),".  A hidden value will be included in the form ",l("code",{children:"values"})," that will be submitted.  But otherwise it is invisible to the naked eye."]}),l(I,{Element:uL,code:sL,children:c("p",{children:["The hidden value for ",l("code",{children:"user_id"}),' will be defined in the form values.  Try entering some text for "Your name" and then click on the "Submit" button.  You should see both the ',l("code",{children:"user_id"})," and ",l("code",{children:"name"})," included in the submitted values."]})}),c("p",{children:["You don't have to define the ",l("code",{children:"value"})," in the field as shown above.  It can also be defined in the ",l("code",{children:"values"})," that you pass to the ",l(ne,{})]}),l(I,{Element:dL,code:cL}),c("p",{children:["You can also pass ",l("code",{children:"hidden"})," values to the ",l(ne,{})," and they will automatically be included in the submitted values."]}),l(I,{Element:pL,code:hL})]}),vL=()=>c(yn,{children:[l(M,{path:"",end:!0,element:l(AN,{})}),l(M,{path:"text",element:l(jN,{})}),l(M,{path:"textarea",element:l(VN,{})}),l(M,{path:"number",element:l(UN,{})}),l(M,{path:"checkbox",element:l(XN,{})}),l(M,{path:"radio",element:l(lL,{})}),l(M,{path:"select",element:l(aL,{})}),l(M,{path:"hidden",element:l(gL,{})})]}),yL=()=>c("div",{children:[l("h1",{children:"Custom Components"}),l("p",{children:"This example is TODO."}),c("ul",{children:[l("li",{children:"Adding a custom Layout, Input or other component"}),l("li",{children:"Writing your own components"}),l("li",{children:"Registering components, input types, handlers, etc."})]})]}),bL=()=>c("div",{children:[l("h1",{children:"Customising"}),l("h2",{children:"TODO"})]}),wL=()=>c(yn,{children:[l(M,{path:"",end:!0,element:l(bL,{})}),l(M,{path:"components",element:l(yL,{})})]}),FL=()=>c("div",{children:[l("h1",{children:"Styling the Forms"}),l("p",{children:"There's good news and bad news.  The good news is that there's a default stylesheet which should give you reasonable results as a starting point.  You can import it into the top-level of your React app with something like this:"}),l(Vt,{children:"import '@abw/react-formula/css/formula.css'"}),l("p",{children:"The gooder news is that the stylesheet is built using SASS (specifically SCSS) and you can import the styles into your own SASS stylesheet like so:"}),l(Vt,{language:"scss",children:"@import '@abw/react-formula/scss/formula.scss';"}),c("p",{children:["The goodest news it that it's built from numerous "," ",l("a",{href:"sass-variables",children:"configuration variables"})," which you can tweak to change the styling.  They're all defined using the"," ",l("code",{className:"code",children:"!default"})," directive which means you can provide your own values before importing the main SCSS file and it'll use your values instead of the defaults."]}),l(Vt,{language:"scss",children:`$brand-hue:     123;
$valid-hue:     40;
$invalid-hue:   12;
@import '@abw/react-formula/scss/formula.scss';`}),c("p",{children:["Or you can rewrite large chunks of the styling if you prefer. Every element has its own CSS class and they're all scoped inside"," ",l("code",{className:"code",children:"form.formula"}),".  For example, you can import the main stylesheet and then selectively override the things you want to change."]}),l(Vt,{language:"scss",children:`@import '@abw/react-formula/scss/formula.scss';

form.formula {
  .field {
    .inputs {
      select {
        // your custom styling overrides
      }
    }
  }
}`}),l("p",{children:"The bad news is that CSS/SASS is currently all there is.  If you want to use styled components or any other CSS-in-JS solution then you're bang out of luck.  I'm personally not a huge fan of putting CSS in JS (although I totally respect that it may be what works for you), and given that I wrote this library to help me get my job done, it's understandably focussed on what works for me."})]}),xL=()=>c("div",{children:[l("h1",{children:"Form Styles"}),c("div",{className:"note",children:[l("b",{children:"NOTE:"})," these are mockup forms and don't have full interactivity. For example, clicking on an input will not automatically focus it."]}),l("p",{children:"This is TODO"})]}),Ae={...vu,label:"Example Label",type:"text",placeholder:"Placeholder text",form:{},status:{}},SL=()=>c("div",{children:[l("h1",{children:"Field Styles"}),c("div",{className:"note",children:[l("b",{children:"NOTE:"})," these are mockup fields and don't have full interactivity. For example, clicking on an input will not automatically focus it."]}),c("form",{className:"formula",children:[l("h3",{children:"Field With Placeholder Text"}),l(ke,{field:Ae}),l("h3",{children:"Field With Value"}),l(ke,{field:{...Ae,value:"Hello World"}}),l("h3",{children:"Field With Help"}),l(ke,{field:{...Ae,help:"Your password must be between 11 and 42 characters"}}),l("h3",{children:"Field With Required Label"}),l(ke,{field:{...Ae,value:"Hello World",required:!0,showRequired:!0}}),l("h3",{children:"Field With Optional Label"}),l(ke,{field:{...Ae,value:"Hello World",showOptional:!0}}),l("h3",{children:"Field With Prefix and Suffix"}),l(ke,{field:{...Ae,prefix:"$",suffix:".00"}}),l("h3",{children:"Focussed Field With Placeholder Text"}),l(ke,{field:{...Ae,status:{focus:!0}}}),l("h3",{children:"Focussed Field With Value"}),l(ke,{field:{...Ae,value:"Hello World",status:{focus:!0}}}),l("h3",{children:"Focussed Field With Help"}),l(ke,{field:{...Ae,help:"Your password must be between 11 and 42 characters",status:{focus:!0}}}),l("h3",{children:"Focussed Field With Prefix and Suffix"}),l(ke,{field:{...Ae,prefix:"$",suffix:".00",status:{focus:!0}}}),l("h3",{children:"Valid Field"}),l(ke,{field:{...Ae,value:"Hello World",status:{valid:!0}}}),l("h3",{children:"Valid Field With Message"}),l(ke,{field:{...Ae,message:"That username is available!",status:{valid:!0}}}),l("h3",{children:"Valid Field With Prefix and Suffix"}),l(ke,{field:{...Ae,value:"Hello World",prefix:"$",suffix:".00",status:{valid:!0}}}),l("h3",{children:"Focussed Valid Field With Prefix and Suffix"}),l(ke,{field:{...Ae,value:"Hello World",prefix:"$",suffix:".00",status:{valid:!0,focus:!0}}}),l("h3",{children:"Invalid Field"}),l(ke,{field:{...Ae,value:"Hello World",status:{invalid:!0}}}),l("h3",{children:"Invalid Field With Message"}),l(ke,{field:{...Ae,message:"Something went wrong!",status:{invalid:!0}}}),l("h3",{children:"Invalid Field With Prefix and Suffix"}),l(ke,{field:{...Ae,value:"Hello World",prefix:"$",suffix:".00",status:{invalid:!0}}}),l("h3",{children:"Focussed Invalid Field With Prefix and Suffix"}),l(ke,{field:{...Ae,value:"Hello World",prefix:"$",suffix:".00",status:{invalid:!0,focus:!0}}}),l("h3",{children:"Disabled Field"}),l(ke,{field:{...Ae,prefix:"£",message:"Denied!",status:{disabled:!0}}})]})]}),EL=`/* Base Hues */
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
`,CL=`/* Input Variables */
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
$select-padding-tweak:         1.25px !default;`;function Ag(e){const t=e.split(/[\r\n]+/);let n=[],r=[],o;for(let i of t){if(i.match(/^\s*$/)){r=[];continue}if(o=i.match(/^\/\*\s*(.*?)\s*\*\/$/)){r=[],n.push({section:o[1]});continue}if(o=i.match(/\/\/\s*(.*)/)){r.push(o[1]);continue}(o=i.match(/(\$[\w-]*):\s*(.*?)\s*(!default)?;/))&&(n.push({variable:o[1],defaultValue:o[2],description:r.join(" ")}),r=[])}return n}const kL=Ag(EL),TL=Ag(CL),RL=()=>c("div",{children:[l("h1",{children:"SASS Variables"}),l(hf,{title:"Input",vars:TL}),l(hf,{title:"Colors",vars:kL})]}),hf=({title:e,vars:t})=>c(Ee,{children:[l("h2",{children:e}),c("table",{className:"wide sass-vars table",children:[l("thead",{children:c("tr",{children:[l("th",{children:"Variable"}),l("th",{children:"Default"}),l("th",{children:"Description"})]})}),l("tbody",{children:t.map(({variable:n,defaultValue:r,description:o,section:i},a)=>i?l("tr",{children:l("th",{className:"section",colSpan:"3",children:i})},a):c("tr",{children:[l("td",{className:"name",children:n}),l("td",{className:"default",children:r}),l("td",{className:"description",children:o})]},n))})]})]}),NL=()=>c(yn,{children:[l(M,{path:"",exact:!0,element:l(FL,{})}),l(M,{path:"forms",element:l(xL,{})}),l(M,{path:"fields",element:l(SL,{})}),l(M,{path:"variables",element:l(RL,{})})]}),LL=()=>{const e=ot();return c("div",{className:"debug",children:[c("h4",{children:["Field: ",e.name]}),l("pre",{children:JSON.stringify(e,null,2)})]})},$L=()=>{const e=ht();return l("button",{type:"button",onClick:e.validate,children:"Validate Form"})},ff=({n:e=10})=>{const t=ot();return c("button",{onClick:n=>{n.preventDefault(),t.set(e)},children:["Set Field to ",e]})},OL=({setValidState:e})=>l("button",{type:"button",onClick:()=>e(),children:"Set Form Valid"}),AL=Fa(OL),PL=({setInvalidState:e})=>l("button",{type:"button",onClick:()=>e(),children:"Set Form Invalid"}),DL=Fa(PL),IL=({setChangedState:e})=>l("button",{type:"button",onClick:()=>e(),children:"Set Form Changed"}),_L=Fa(IL),jL={foo:{label:"The Foo Field"},bar:{label:"The BarBar Field",default:101}},ML={foo:"barz",id:123},BL=()=>c("div",{children:[l("h1",{children:"Test Form"}),c(O,{fields:jL,values:ML,className:"formula debug",debug:!0,children:["FORM BODY",c("div",{children:[l($L,{}),l(AL,{}),l(DL,{}),l(_L,{}),l(vr,{})]}),c(x,{name:"bar",children:[l(LL,{}),l(ff,{}),l(ff,{n:20})]}),l(Yc,{children:"Form has unsaved changes"}),l(fC,{showForm:!0})]})]}),VL=()=>c("div",{children:[l("h1",{children:"Layout Test"}),l(O,{children:c("div",{className:"grid-2 end gap-h-2",children:[l(x,{name:"one",label:"Text Field"}),l(x,{name:"two",className:"wide",label:"Checkbox Field",type:"checkbox",text:"This is a checkbox"}),l(x,{name:"three",label:"Text Field"}),l(x,{name:"four",label:"Select Field",type:"select",options:["One","Two","Three"]}),l(x,{name:"five",label:"Text Field"}),l(x,{name:"size",label:"Radio Field",type:"radio",options:["One","Two","Three"]}),l(x,{name:"seven",label:"Text Field"}),l(x,{name:"eight",label:"Date Field",type:"date"}),l(x,{name:"nine",label:"Text Field"}),l(x,{name:"ten",label:"Number Field",type:"number"}),l(x,{name:"eleven",label:"Text Field - it's one louder"}),l(oe,{})]})})]}),zL=M1([{path:"/",element:l(D0,{}),children:[{path:"/",element:l(_0,{})},{path:"getting-started",element:l(OE,{})},{path:"why",element:l(AE,{})},{path:"tutorial/*",element:l(Hk,{})},{path:"examples/*",element:l(sT,{})},{path:"components/*",element:l(ON,{})},{path:"inputs/*",element:l(vL,{})},{path:"customising/*",element:l(wL,{})},{path:"styling/*",element:l(NL,{})},{path:"test-form",element:l(BL,{})},{path:"test-layout",element:l(VL,{})}]}],{basename:"/react-formula/"});ds.createRoot(document.getElementById("root")).render(l(tt.StrictMode,{children:l($1,{router:zL})}));
