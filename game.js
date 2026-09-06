var WM=Object.create;var o0=Object.defineProperty;var qM=Object.getOwnPropertyDescriptor;var YM=Object.getOwnPropertyNames;var ZM=Object.getPrototypeOf,JM=Object.prototype.hasOwnProperty;var Ai=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var KM=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of YM(t))!JM.call(e,s)&&s!==n&&o0(e,s,{get:()=>t[s],enumerable:!(i=qM(t,s))||i.enumerable});return e};var er=(e,t,n)=>(n=e!=null?WM(ZM(e)):{},KM(t||!e||!e.__esModule?o0(n,"default",{value:e,enumerable:!0}):n,e));var _0=Ai(we=>{"use strict";function Jf(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<mc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function wi(e){return e.length===0?null:e[0]}function _c(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>mc(o,n))l<s&&0>mc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>mc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function mc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}we.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(l0=performance,we.unstable_now=function(){return l0.now()}):(qf=Date,c0=qf.now(),we.unstable_now=function(){return qf.now()-c0});var l0,qf,c0,Wi=[],Es=[],QM=1,$n=null,dn=3,Kf=!1,Ao=!1,wo=!1,Qf=!1,f0=typeof setTimeout=="function"?setTimeout:null,d0=typeof clearTimeout=="function"?clearTimeout:null,u0=typeof setImmediate<"u"?setImmediate:null;function gc(e){for(var t=wi(Es);t!==null;){if(t.callback===null)_c(Es);else if(t.startTime<=e)_c(Es),t.sortIndex=t.expirationTime,Jf(Wi,t);else break;t=wi(Es)}}function jf(e){if(wo=!1,gc(e),!Ao)if(wi(Wi)!==null)Ao=!0,ir||(ir=!0,nr());else{var t=wi(Es);t!==null&&$f(jf,t.startTime-e)}}var ir=!1,Co=-1,p0=5,m0=-1;function g0(){return Qf?!0:!(we.unstable_now()-m0<p0)}function Yf(){if(Qf=!1,ir){var e=we.unstable_now();m0=e;var t=!0;try{t:{Ao=!1,wo&&(wo=!1,d0(Co),Co=-1),Kf=!0;var n=dn;try{e:{for(gc(e),$n=wi(Wi);$n!==null&&!($n.expirationTime>e&&g0());){var i=$n.callback;if(typeof i=="function"){$n.callback=null,dn=$n.priorityLevel;var s=i($n.expirationTime<=e);if(e=we.unstable_now(),typeof s=="function"){$n.callback=s,gc(e),t=!0;break e}$n===wi(Wi)&&_c(Wi),gc(e)}else _c(Wi);$n=wi(Wi)}if($n!==null)t=!0;else{var a=wi(Es);a!==null&&$f(jf,a.startTime-e),t=!1}}break t}finally{$n=null,dn=n,Kf=!1}t=void 0}}finally{t?nr():ir=!1}}}var nr;typeof u0=="function"?nr=function(){u0(Yf)}:typeof MessageChannel<"u"?(Zf=new MessageChannel,h0=Zf.port2,Zf.port1.onmessage=Yf,nr=function(){h0.postMessage(null)}):nr=function(){f0(Yf,0)};var Zf,h0;function $f(e,t){Co=f0(function(){e(we.unstable_now())},t)}we.unstable_IdlePriority=5;we.unstable_ImmediatePriority=1;we.unstable_LowPriority=4;we.unstable_NormalPriority=3;we.unstable_Profiling=null;we.unstable_UserBlockingPriority=2;we.unstable_cancelCallback=function(e){e.callback=null};we.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):p0=0<e?Math.floor(1e3/e):5};we.unstable_getCurrentPriorityLevel=function(){return dn};we.unstable_next=function(e){switch(dn){case 1:case 2:case 3:var t=3;break;default:t=dn}var n=dn;dn=t;try{return e()}finally{dn=n}};we.unstable_requestPaint=function(){Qf=!0};we.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=dn;dn=e;try{return t()}finally{dn=n}};we.unstable_scheduleCallback=function(e,t,n){var i=we.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:QM++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Jf(Es,e),wi(Wi)===null&&e===wi(Es)&&(wo?(d0(Co),Co=-1):wo=!0,$f(jf,n-i))):(e.sortIndex=s,Jf(Wi,e),Ao||Kf||(Ao=!0,ir||(ir=!0,nr()))),e};we.unstable_shouldYield=g0;we.unstable_wrapCallback=function(e){var t=dn;return function(){var n=dn;dn=t;try{return e.apply(this,arguments)}finally{dn=n}}}});var y0=Ai((R3,v0)=>{"use strict";v0.exports=_0()});var D0=Ai(zt=>{"use strict";var nd=Symbol.for("react.transitional.element"),jM=Symbol.for("react.portal"),$M=Symbol.for("react.fragment"),tb=Symbol.for("react.strict_mode"),eb=Symbol.for("react.profiler"),nb=Symbol.for("react.consumer"),ib=Symbol.for("react.context"),sb=Symbol.for("react.forward_ref"),ab=Symbol.for("react.suspense"),rb=Symbol.for("react.memo"),T0=Symbol.for("react.lazy"),ob=Symbol.for("react.activity"),x0=Symbol.iterator;function lb(e){return e===null||typeof e!="object"?null:(e=x0&&e[x0]||e["@@iterator"],typeof e=="function"?e:null)}var E0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A0=Object.assign,w0={};function ar(e,t,n){this.props=e,this.context=t,this.refs=w0,this.updater=n||E0}ar.prototype.isReactComponent={};ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function C0(){}C0.prototype=ar.prototype;function id(e,t,n){this.props=e,this.context=t,this.refs=w0,this.updater=n||E0}var sd=id.prototype=new C0;sd.constructor=id;A0(sd,ar.prototype);sd.isPureReactComponent=!0;var S0=Array.isArray;function ed(){}var Se={H:null,A:null,T:null,S:null},R0=Object.prototype.hasOwnProperty;function ad(e,t,n){var i=n.ref;return{$$typeof:nd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function cb(e,t){return ad(e.type,t,e.props)}function rd(e){return typeof e=="object"&&e!==null&&e.$$typeof===nd}function ub(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var M0=/\/+/g;function td(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ub(""+e.key):t.toString(36)}function hb(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ed,ed):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function sr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case nd:case jM:r=!0;break;case T0:return r=e._init,sr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+td(e,0):i,S0(s)?(n="",r!=null&&(n=r.replace(M0,"$&/")+"/"),sr(s,t,n,"",function(c){return c})):s!=null&&(rd(s)&&(s=cb(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(M0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(S0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+td(i,l),r+=sr(i,t,n,a,s);else if(l=lb(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+td(i,l++),r+=sr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return sr(hb(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function vc(e,t,n){if(e==null)return e;var i=[],s=0;return sr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function fb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var b0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},db={map:vc,forEach:function(e,t,n){vc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vc(e,function(){t++}),t},toArray:function(e){return vc(e,function(t){return t})||[]},only:function(e){if(!rd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};zt.Activity=ob;zt.Children=db;zt.Component=ar;zt.Fragment=$M;zt.Profiler=eb;zt.PureComponent=id;zt.StrictMode=tb;zt.Suspense=ab;zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Se;zt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Se.H.useMemoCache(e)}};zt.cache=function(e){return function(){return e.apply(null,arguments)}};zt.cacheSignal=function(){return null};zt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=A0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!R0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return ad(e.type,s,i)};zt.createContext=function(e){return e={$$typeof:ib,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:nb,_context:e},e};zt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)R0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return ad(e,a,s)};zt.createRef=function(){return{current:null}};zt.forwardRef=function(e){return{$$typeof:sb,render:e}};zt.isValidElement=rd;zt.lazy=function(e){return{$$typeof:T0,_payload:{_status:-1,_result:e},_init:fb}};zt.memo=function(e,t){return{$$typeof:rb,type:e,compare:t===void 0?null:t}};zt.startTransition=function(e){var t=Se.T,n={};Se.T=n;try{var i=e(),s=Se.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(ed,b0)}catch(a){b0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Se.T=t}};zt.unstable_useCacheRefresh=function(){return Se.H.useCacheRefresh()};zt.use=function(e){return Se.H.use(e)};zt.useActionState=function(e,t,n){return Se.H.useActionState(e,t,n)};zt.useCallback=function(e,t){return Se.H.useCallback(e,t)};zt.useContext=function(e){return Se.H.useContext(e)};zt.useDebugValue=function(){};zt.useDeferredValue=function(e,t){return Se.H.useDeferredValue(e,t)};zt.useEffect=function(e,t){return Se.H.useEffect(e,t)};zt.useEffectEvent=function(e){return Se.H.useEffectEvent(e)};zt.useId=function(){return Se.H.useId()};zt.useImperativeHandle=function(e,t,n){return Se.H.useImperativeHandle(e,t,n)};zt.useInsertionEffect=function(e,t){return Se.H.useInsertionEffect(e,t)};zt.useLayoutEffect=function(e,t){return Se.H.useLayoutEffect(e,t)};zt.useMemo=function(e,t){return Se.H.useMemo(e,t)};zt.useOptimistic=function(e,t){return Se.H.useOptimistic(e,t)};zt.useReducer=function(e,t,n){return Se.H.useReducer(e,t,n)};zt.useRef=function(e){return Se.H.useRef(e)};zt.useState=function(e){return Se.H.useState(e)};zt.useSyncExternalStore=function(e,t,n){return Se.H.useSyncExternalStore(e,t,n)};zt.useTransition=function(){return Se.H.useTransition()};zt.version="19.2.6"});var yc=Ai((U3,U0)=>{"use strict";U0.exports=D0()});var L0=Ai(Sn=>{"use strict";var pb=yc();function N0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function As(){}var xn={d:{f:As,r:function(){throw Error(N0(522))},D:As,C:As,L:As,m:As,X:As,S:As,M:As},p:0,findDOMNode:null},mb=Symbol.for("react.portal");function gb(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mb,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Ro=pb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function xc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xn;Sn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(N0(299));return gb(e,t,null,n)};Sn.flushSync=function(e){var t=Ro.T,n=xn.p;try{if(Ro.T=null,xn.p=2,e)return e()}finally{Ro.T=t,xn.p=n,xn.d.f()}};Sn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,xn.d.C(e,t))};Sn.prefetchDNS=function(e){typeof e=="string"&&xn.d.D(e)};Sn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=xc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?xn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&xn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Sn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=xc(t.as,t.crossOrigin);xn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&xn.d.M(e)};Sn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=xc(n,t.crossOrigin);xn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Sn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=xc(t.as,t.crossOrigin);xn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else xn.d.m(e)};Sn.requestFormReset=function(e){xn.d.r(e)};Sn.unstable_batchedUpdates=function(e,t){return e(t)};Sn.useFormState=function(e,t,n){return Ro.H.useFormState(e,t,n)};Sn.useFormStatus=function(){return Ro.H.useHostTransitionStatus()};Sn.version="19.2.6"});var P0=Ai((L3,O0)=>{"use strict";function I0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I0)}catch(e){console.error(e)}}I0(),O0.exports=L0()});var Zx=Ai(Wu=>{"use strict";var Qe=y0(),lv=yc(),_b=P0();function tt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function cv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function B0(e){if(ml(e)!==e)throw Error(tt(188))}function vb(e){var t=e.alternate;if(!t){if(t=ml(e),t===null)throw Error(tt(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return B0(s),e;if(a===i)return B0(s),t;a=a.sibling}throw Error(tt(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(tt(189))}}if(n.alternate!==i)throw Error(tt(190))}if(n.tag!==3)throw Error(tt(188));return n.stateNode.current===n?e:t}function fv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=fv(e),t!==null)return t;e=e.sibling}return null}var Te=Object.assign,yb=Symbol.for("react.element"),Sc=Symbol.for("react.transitional.element"),Bo=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),dv=Symbol.for("react.strict_mode"),Vd=Symbol.for("react.profiler"),pv=Symbol.for("react.consumer"),$i=Symbol.for("react.context"),Op=Symbol.for("react.forward_ref"),Gd=Symbol.for("react.suspense"),Hd=Symbol.for("react.suspense_list"),Pp=Symbol.for("react.memo"),ws=Symbol.for("react.lazy"),kd=Symbol.for("react.activity"),xb=Symbol.for("react.memo_cache_sentinel"),z0=Symbol.iterator;function Do(e){return e===null||typeof e!="object"?null:(e=z0&&e[z0]||e["@@iterator"],typeof e=="function"?e:null)}var Sb=Symbol.for("react.client.reference");function Xd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sb?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hr:return"Fragment";case Vd:return"Profiler";case dv:return"StrictMode";case Gd:return"Suspense";case Hd:return"SuspenseList";case kd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Bo:return"Portal";case $i:return e.displayName||"Context";case pv:return(e._context.displayName||"Context")+".Consumer";case Op:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pp:return t=e.displayName||null,t!==null?t:Xd(e.type)||"Memo";case ws:t=e._payload,e=e._init;try{return Xd(e(t))}catch{}}return null}var zo=Array.isArray,Pt=lv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=_b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Aa={pending:!1,data:null,method:null,action:null},Wd=[],fr=-1;function Ni(e){return{current:e}}function nn(e){0>fr||(e.current=Wd[fr],Wd[fr]=null,fr--)}function ve(e,t){fr++,Wd[fr]=e.current,e.current=t}var Ui=Ni(null),el=Ni(null),zs=Ni(null),tu=Ni(null);function eu(e,t){switch(ve(zs,t),ve(el,e),ve(Ui,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?W_(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=W_(t),e=Ix(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nn(Ui),ve(Ui,e)}function Dr(){nn(Ui),nn(el),nn(zs)}function qd(e){e.memoizedState!==null&&ve(tu,e);var t=Ui.current,n=Ix(t,e.type);t!==n&&(ve(el,e),ve(Ui,n))}function nu(e){el.current===e&&(nn(Ui),nn(el)),tu.current===e&&(nn(tu),fl._currentValue=Aa)}var od,F0;function Ma(e){if(od===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);od=t&&t[1]||"",F0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+od+e+F0}var ld=!1;function cd(e,t){if(!e||ld)return"";ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(f){var u=f}Reflect.construct(e,[],p)}else{try{p.call()}catch(f){u=f}e.call(p.prototype)}}else{try{throw Error()}catch(f){u=f}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(f){if(f&&u&&typeof f.stack=="string")return[f.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=s);break}}}finally{ld=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ma(n):""}function Mb(e,t){switch(e.tag){case 26:case 27:case 5:return Ma(e.type);case 16:return Ma("Lazy");case 13:return e.child!==t&&t!==null?Ma("Suspense Fallback"):Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 15:return cd(e.type,!1);case 11:return cd(e.type.render,!1);case 1:return cd(e.type,!0);case 31:return Ma("Activity");default:return""}}function V0(e){try{var t="",n=null;do t+=Mb(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Yd=Object.prototype.hasOwnProperty,Bp=Qe.unstable_scheduleCallback,ud=Qe.unstable_cancelCallback,bb=Qe.unstable_shouldYield,Tb=Qe.unstable_requestPaint,Fn=Qe.unstable_now,Eb=Qe.unstable_getCurrentPriorityLevel,mv=Qe.unstable_ImmediatePriority,gv=Qe.unstable_UserBlockingPriority,iu=Qe.unstable_NormalPriority,Ab=Qe.unstable_LowPriority,_v=Qe.unstable_IdlePriority,wb=Qe.log,Cb=Qe.unstable_setDisableYieldValue,gl=null,Vn=null;function Ls(e){if(typeof wb=="function"&&Cb(e),Vn&&typeof Vn.setStrictMode=="function")try{Vn.setStrictMode(gl,e)}catch{}}var Gn=Math.clz32?Math.clz32:Ub,Rb=Math.log,Db=Math.LN2;function Ub(e){return e>>>=0,e===0?32:31-(Rb(e)/Db|0)|0}var Mc=256,bc=262144,Tc=4194304;function ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ru(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=ba(i):(r&=o,r!==0?s=ba(r):n||(n=o&~e,n!==0&&(s=ba(n))))):(o=i&~a,o!==0?s=ba(o):r!==0?s=ba(r):n||(n=i&~e,n!==0&&(s=ba(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function _l(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Nb(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vv(){var e=Tc;return Tc<<=1,(Tc&62914560)===0&&(Tc=4194304),e}function hd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lb(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var d=31-Gn(n),p=1<<d;o[d]=0,l[d]=-1;var u=c[d];if(u!==null)for(c[d]=null,d=0;d<u.length;d++){var f=u[d];f!==null&&(f.lane&=-536870913)}n&=~p}i!==0&&yv(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function yv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Gn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function xv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Gn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Sv(e,t){var n=t&-t;return n=(n&42)!==0?1:zp(n),(n&(e.suspendedLanes|t))!==0?0:n}function zp(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fp(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mv(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:Wx(e.type))}function G0(e,t){var n=ae.p;try{return ae.p=e,t()}finally{ae.p=n}}var Qs=Math.random().toString(36).slice(2),on="__reactFiber$"+Qs,Un="__reactProps$"+Qs,Gr="__reactContainer$"+Qs,Zd="__reactEvents$"+Qs,Ib="__reactListeners$"+Qs,Ob="__reactHandles$"+Qs,H0="__reactResources$"+Qs,yl="__reactMarker$"+Qs;function Vp(e){delete e[on],delete e[Un],delete e[Zd],delete e[Ib],delete e[Ob]}function dr(e){var t=e[on];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gr]||n[on]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=K_(e);e!==null;){if(n=e[on])return n;e=K_(e)}return t}e=n,n=e.parentNode}return null}function Hr(e){if(e=e[on]||e[Gr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Fo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(tt(33))}function br(e){var t=e[H0];return t||(t=e[H0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function en(e){e[yl]=!0}var bv=new Set,Tv={};function Pa(e,t){Ur(e,t),Ur(e+"Capture",t)}function Ur(e,t){for(Tv[e]=t,e=0;e<t.length;e++)bv.add(t[e])}var Pb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),k0={},X0={};function Bb(e){return Yd.call(X0,e)?!0:Yd.call(k0,e)?!1:Pb.test(e)?X0[e]=!0:(k0[e]=!0,!1)}function Fc(e,t,n){if(Bb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ec(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function qi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function ei(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ev(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zb(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jd(e){if(!e._valueTracker){var t=Ev(e)?"checked":"value";e._valueTracker=zb(e,t,""+e[t])}}function Av(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ev(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function su(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fb=/[\n"\\]/g;function si(e){return e.replace(Fb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Kd(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ei(t)):e.value!==""+ei(t)&&(e.value=""+ei(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Qd(e,r,ei(t)):n!=null?Qd(e,r,ei(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ei(o):e.removeAttribute("name")}function wv(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Jd(e);return}n=n!=null?""+ei(n):"",t=t!=null?""+ei(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Jd(e)}function Qd(e,t,n){t==="number"&&su(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Tr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ei(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Cv(e,t,n){if(t!=null&&(t=""+ei(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ei(n):""}function Rv(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(tt(92));if(zo(i)){if(1<i.length)throw Error(tt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ei(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Jd(e)}function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function W0(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Vb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Dv(e,t,n){if(t!=null&&typeof t!="object")throw Error(tt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&W0(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&W0(e,a,t[a])}function Gp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vc(e){return Hb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ts(){}var jd=null;function Hp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pr=null,Er=null;function q0(e){var t=Hr(e);if(t&&(e=t.stateNode)){var n=e[Un]||null;t:switch(e=t.stateNode,t.type){case"input":if(Kd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+si(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Un]||null;if(!s)throw Error(tt(90));Kd(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Av(i)}break t;case"textarea":Cv(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Tr(e,!!n.multiple,t,!1)}}}var fd=!1;function Uv(e,t,n){if(fd)return e(t,n);fd=!0;try{var i=e(t);return i}finally{if(fd=!1,(pr!==null||Er!==null)&&(Gu(),pr&&(t=pr,e=Er,Er=pr=null,q0(t),e)))for(t=0;t<e.length;t++)q0(e[t])}}function nl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Un]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(tt(231,t,typeof n));return n}var as=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$d=!1;if(as)try{rr={},Object.defineProperty(rr,"passive",{get:function(){$d=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{$d=!1}var rr,Is=null,kp=null,Gc=null;function Nv(){if(Gc)return Gc;var e,t=kp,n=t.length,i,s="value"in Is?Is.value:Is.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Gc=s.slice(e,1<i?1-i:void 0)}function Hc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ac(){return!0}function Y0(){return!1}function Nn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ac:Y0,this.isPropagationStopped=Y0,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ac)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ac)},persist:function(){},isPersistent:Ac}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Du=Nn(Ba),xl=Te({},Ba,{view:0,detail:0}),kb=Nn(xl),dd,pd,Uo,Uu=Te({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Uo&&(Uo&&e.type==="mousemove"?(dd=e.screenX-Uo.screenX,pd=e.screenY-Uo.screenY):pd=dd=0,Uo=e),dd)},movementY:function(e){return"movementY"in e?e.movementY:pd}}),Z0=Nn(Uu),Xb=Te({},Uu,{dataTransfer:0}),Wb=Nn(Xb),qb=Te({},xl,{relatedTarget:0}),md=Nn(qb),Yb=Te({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),Zb=Nn(Yb),Jb=Te({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kb=Nn(Jb),Qb=Te({},Ba,{data:0}),J0=Nn(Qb),jb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$b={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=t1[e])?!!t[e]:!1}function Xp(){return e1}var n1=Te({},xl,{key:function(e){if(e.key){var t=jb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$b[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xp,charCode:function(e){return e.type==="keypress"?Hc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),i1=Nn(n1),s1=Te({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),K0=Nn(s1),a1=Te({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xp}),r1=Nn(a1),o1=Te({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),l1=Nn(o1),c1=Te({},Uu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),u1=Nn(c1),h1=Te({},Ba,{newState:0,oldState:0}),f1=Nn(h1),d1=[9,13,27,32],Wp=as&&"CompositionEvent"in window,Ho=null;as&&"documentMode"in document&&(Ho=document.documentMode);var p1=as&&"TextEvent"in window&&!Ho,Lv=as&&(!Wp||Ho&&8<Ho&&11>=Ho),Q0=" ",j0=!1;function Iv(e,t){switch(e){case"keyup":return d1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ov(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function m1(e,t){switch(e){case"compositionend":return Ov(t);case"keypress":return t.which!==32?null:(j0=!0,Q0);case"textInput":return e=t.data,e===Q0&&j0?null:e;default:return null}}function g1(e,t){if(mr)return e==="compositionend"||!Wp&&Iv(e,t)?(e=Nv(),Gc=kp=Is=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lv&&t.locale!=="ko"?null:t.data;default:return null}}var _1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_1[e.type]:t==="textarea"}function Pv(e,t,n,i){pr?Er?Er.push(i):Er=[i]:pr=i,t=Mu(t,"onChange"),0<t.length&&(n=new Du("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ko=null,il=null;function v1(e){Ux(e,0)}function Nu(e){var t=Fo(e);if(Av(t))return e}function t_(e,t){if(e==="change")return t}var Bv=!1;as&&(as?(Cc="oninput"in document,Cc||(gd=document.createElement("div"),gd.setAttribute("oninput","return;"),Cc=typeof gd.oninput=="function"),wc=Cc):wc=!1,Bv=wc&&(!document.documentMode||9<document.documentMode));var wc,Cc,gd;function e_(){ko&&(ko.detachEvent("onpropertychange",zv),il=ko=null)}function zv(e){if(e.propertyName==="value"&&Nu(il)){var t=[];Pv(t,il,e,Hp(e)),Uv(v1,t)}}function y1(e,t,n){e==="focusin"?(e_(),ko=t,il=n,ko.attachEvent("onpropertychange",zv)):e==="focusout"&&e_()}function x1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nu(il)}function S1(e,t){if(e==="click")return Nu(t)}function M1(e,t){if(e==="input"||e==="change")return Nu(t)}function b1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kn=typeof Object.is=="function"?Object.is:b1;function sl(e,t){if(kn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Yd.call(t,s)||!kn(e[s],t[s]))return!1}return!0}function n_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function i_(e,t){var n=n_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=n_(n)}}function Fv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vv(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=su(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=su(e.document)}return t}function qp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var T1=as&&"documentMode"in document&&11>=document.documentMode,gr=null,tp=null,Xo=null,ep=!1;function s_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ep||gr==null||gr!==su(i)||(i=gr,"selectionStart"in i&&qp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xo&&sl(Xo,i)||(Xo=i,i=Mu(tp,"onSelect"),0<i.length&&(t=new Du("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=gr)))}function Sa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionrun:Sa("Transition","TransitionRun"),transitionstart:Sa("Transition","TransitionStart"),transitioncancel:Sa("Transition","TransitionCancel"),transitionend:Sa("Transition","TransitionEnd")},_d={},Gv={};as&&(Gv=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function za(e){if(_d[e])return _d[e];if(!_r[e])return e;var t=_r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gv)return _d[e]=t[n];return e}var Hv=za("animationend"),kv=za("animationiteration"),Xv=za("animationstart"),E1=za("transitionrun"),A1=za("transitionstart"),w1=za("transitioncancel"),Wv=za("transitionend"),qv=new Map,np="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");np.push("scrollEnd");function mi(e,t){qv.set(e,t),Pa(t,[e])}var au=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ti=[],vr=0,Yp=0;function Lu(){for(var e=vr,t=Yp=vr=0;t<e;){var n=ti[t];ti[t++]=null;var i=ti[t];ti[t++]=null;var s=ti[t];ti[t++]=null;var a=ti[t];if(ti[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Yv(n,s,a)}}function Iu(e,t,n,i){ti[vr++]=e,ti[vr++]=t,ti[vr++]=n,ti[vr++]=i,Yp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Zp(e,t,n,i){return Iu(e,t,n,i),ru(e)}function Fa(e,t){return Iu(e,null,null,t),ru(e)}function Yv(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Gn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function ru(e){if(50<$o)throw $o=0,bp=null,Error(tt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var yr={};function C1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(e,t,n,i){return new C1(e,t,n,i)}function Jp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ns(e,t){var n=e.alternate;return n===null?(n=Bn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Zv(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function kc(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Jp(e)&&(r=1);else if(typeof e=="string")r=UT(e,n,Ui.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case kd:return e=Bn(31,n,t,s),e.elementType=kd,e.lanes=a,e;case hr:return wa(n.children,s,a,t);case dv:r=8,s|=24;break;case Vd:return e=Bn(12,n,t,s|2),e.elementType=Vd,e.lanes=a,e;case Gd:return e=Bn(13,n,t,s),e.elementType=Gd,e.lanes=a,e;case Hd:return e=Bn(19,n,t,s),e.elementType=Hd,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $i:r=10;break t;case pv:r=9;break t;case Op:r=11;break t;case Pp:r=14;break t;case ws:r=16,i=null;break t}r=29,n=Error(tt(130,e===null?"null":typeof e,"")),i=null}return t=Bn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function wa(e,t,n,i){return e=Bn(7,e,i,t),e.lanes=n,e}function vd(e,t,n){return e=Bn(6,e,null,t),e.lanes=n,e}function Jv(e){var t=Bn(18,null,null,0);return t.stateNode=e,t}function yd(e,t,n){return t=Bn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var a_=new WeakMap;function ai(e,t){if(typeof e=="object"&&e!==null){var n=a_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:V0(t)},a_.set(e,t),t)}return{value:e,source:t,stack:V0(t)}}var xr=[],Sr=0,ou=null,al=0,ni=[],ii=0,Ys=null,Ci=1,Ri="";function Qi(e,t){xr[Sr++]=al,xr[Sr++]=ou,ou=e,al=t}function Kv(e,t,n){ni[ii++]=Ci,ni[ii++]=Ri,ni[ii++]=Ys,Ys=e;var i=Ci;e=Ri;var s=32-Gn(i)-1;i&=~(1<<s),n+=1;var a=32-Gn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Ci=1<<32-Gn(t)+s|n<<s|i,Ri=a+e}else Ci=1<<a|n<<s|i,Ri=e}function Kp(e){e.return!==null&&(Qi(e,1),Kv(e,1,0))}function Qp(e){for(;e===ou;)ou=xr[--Sr],xr[Sr]=null,al=xr[--Sr],xr[Sr]=null;for(;e===Ys;)Ys=ni[--ii],ni[ii]=null,Ri=ni[--ii],ni[ii]=null,Ci=ni[--ii],ni[ii]=null}function Qv(e,t){ni[ii++]=Ci,ni[ii++]=Ri,ni[ii++]=Ys,Ci=t.id,Ri=t.overflow,Ys=e}var ln=null,be=null,ne=!1,Fs=null,ri=!1,ip=Error(tt(519));function Zs(e){var t=Error(tt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rl(ai(t,e)),ip}function r_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[on]=e,t[Un]=i,n){case"dialog":qt("cancel",t),qt("close",t);break;case"iframe":case"object":case"embed":qt("load",t);break;case"video":case"audio":for(n=0;n<ul.length;n++)qt(ul[n],t);break;case"source":qt("error",t);break;case"img":case"image":case"link":qt("error",t),qt("load",t);break;case"details":qt("toggle",t);break;case"input":qt("invalid",t),wv(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":qt("invalid",t);break;case"textarea":qt("invalid",t),Rv(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Lx(t.textContent,n)?(i.popover!=null&&(qt("beforetoggle",t),qt("toggle",t)),i.onScroll!=null&&qt("scroll",t),i.onScrollEnd!=null&&qt("scrollend",t),i.onClick!=null&&(t.onclick=ts),t=!0):t=!1,t||Zs(e,!0)}function o_(e){for(ln=e.return;ln;)switch(ln.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:ln=ln.return}}function or(e){if(e!==ln)return!1;if(!ne)return o_(e),ne=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Cp(e.type,e.memoizedProps)),n=!n),n&&be&&Zs(e),o_(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));be=J_(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));be=J_(e)}else t===27?(t=be,js(e.type)?(e=Np,Np=null,be=e):be=t):be=ln?li(e.stateNode.nextSibling):null;return!0}function Ua(){be=ln=null,ne=!1}function xd(){var e=Fs;return e!==null&&(Rn===null?Rn=e:Rn.push.apply(Rn,e),Fs=null),e}function rl(e){Fs===null?Fs=[e]:Fs.push(e)}var sp=Ni(null),Va=null,es=null;function Rs(e,t,n){ve(sp,t._currentValue),t._currentValue=n}function is(e){e._currentValue=sp.current,nn(sp)}function ap(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function rp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ap(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(tt(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),ap(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function kr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(tt(387));if(r=r.memoizedProps,r!==null){var o=s.type;kn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===tu.current){if(r=s.alternate,r===null)throw Error(tt(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(fl):e=[fl])}s=s.return}e!==null&&rp(t,e,n,i),t.flags|=262144}function lu(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Na(e){Va=e,es=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function cn(e){return jv(Va,e)}function Rc(e,t){return Va===null&&Na(e),jv(e,t)}function jv(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},es===null){if(e===null)throw Error(tt(308));es=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else es=es.next=t;return n}var R1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},D1=Qe.unstable_scheduleCallback,U1=Qe.unstable_NormalPriority,Ye={$$typeof:$i,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jp(){return{controller:new R1,data:new Map,refCount:0}}function Sl(e){e.refCount--,e.refCount===0&&D1(U1,function(){e.controller.abort()})}var Wo=null,op=0,Lr=0,Ar=null;function N1(e,t){if(Wo===null){var n=Wo=[];op=0,Lr=bm(),Ar={status:"pending",value:void 0,then:function(i){n.push(i)}}}return op++,t.then(l_,l_),t}function l_(){if(--op===0&&Wo!==null){Ar!==null&&(Ar.status="fulfilled");var e=Wo;Wo=null,Lr=0,Ar=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function L1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var c_=Pt.S;Pt.S=function(e,t){fx=Fn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&N1(e,t),c_!==null&&c_(e,t)};var Ca=Ni(null);function $p(){var e=Ca.current;return e!==null?e:me.pooledCache}function Xc(e,t){t===null?ve(Ca,Ca.current):ve(Ca,t.pool)}function $v(){var e=$p();return e===null?null:{parent:Ye._currentValue,pool:e}}var Xr=Error(tt(460)),tm=Error(tt(474)),Ou=Error(tt(542)),cu={then:function(){}};function u_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ty(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ts,ts),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,f_(e),e;default:if(typeof t.status=="string")t.then(ts,ts);else{if(e=me,e!==null&&100<e.shellSuspendCounter)throw Error(tt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,f_(e),e}throw Ra=t,Xr}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ra=n,Xr):n}}var Ra=null;function h_(){if(Ra===null)throw Error(tt(459));var e=Ra;return Ra=null,e}function f_(e){if(e===Xr||e===Ou)throw Error(tt(483))}var wr=null,ol=0;function Dc(e){var t=ol;return ol+=1,wr===null&&(wr=[]),ty(wr,e,t)}function No(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Uc(e,t){throw t.$$typeof===yb?Error(tt(525)):(e=Object.prototype.toString.call(t),Error(tt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ey(e){function t(h,v){if(e){var S=h.deletions;S===null?(h.deletions=[v],h.flags|=16):S.push(v)}}function n(h,v){if(!e)return null;for(;v!==null;)t(h,v),v=v.sibling;return null}function i(h){for(var v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function s(h,v){return h=ns(h,v),h.index=0,h.sibling=null,h}function a(h,v,S){return h.index=S,e?(S=h.alternate,S!==null?(S=S.index,S<v?(h.flags|=67108866,v):S):(h.flags|=67108866,v)):(h.flags|=1048576,v)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,v,S,x){return v===null||v.tag!==6?(v=vd(S,h.mode,x),v.return=h,v):(v=s(v,S),v.return=h,v)}function l(h,v,S,x){var E=S.type;return E===hr?d(h,v,S.props.children,x,S.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ws&&Ta(E)===v.type)?(v=s(v,S.props),No(v,S),v.return=h,v):(v=kc(S.type,S.key,S.props,null,h.mode,x),No(v,S),v.return=h,v)}function c(h,v,S,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=yd(S,h.mode,x),v.return=h,v):(v=s(v,S.children||[]),v.return=h,v)}function d(h,v,S,x,E){return v===null||v.tag!==7?(v=wa(S,h.mode,x,E),v.return=h,v):(v=s(v,S),v.return=h,v)}function p(h,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=vd(""+v,h.mode,S),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sc:return S=kc(v.type,v.key,v.props,null,h.mode,S),No(S,v),S.return=h,S;case Bo:return v=yd(v,h.mode,S),v.return=h,v;case ws:return v=Ta(v),p(h,v,S)}if(zo(v)||Do(v))return v=wa(v,h.mode,S,null),v.return=h,v;if(typeof v.then=="function")return p(h,Dc(v),S);if(v.$$typeof===$i)return p(h,Rc(h,v),S);Uc(h,v)}return null}function u(h,v,S,x){var E=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return E!==null?null:o(h,v,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Sc:return S.key===E?l(h,v,S,x):null;case Bo:return S.key===E?c(h,v,S,x):null;case ws:return S=Ta(S),u(h,v,S,x)}if(zo(S)||Do(S))return E!==null?null:d(h,v,S,x,null);if(typeof S.then=="function")return u(h,v,Dc(S),x);if(S.$$typeof===$i)return u(h,v,Rc(h,S),x);Uc(h,S)}return null}function f(h,v,S,x,E){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return h=h.get(S)||null,o(v,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sc:return h=h.get(x.key===null?S:x.key)||null,l(v,h,x,E);case Bo:return h=h.get(x.key===null?S:x.key)||null,c(v,h,x,E);case ws:return x=Ta(x),f(h,v,S,x,E)}if(zo(x)||Do(x))return h=h.get(S)||null,d(v,h,x,E,null);if(typeof x.then=="function")return f(h,v,S,Dc(x),E);if(x.$$typeof===$i)return f(h,v,S,Rc(v,x),E);Uc(v,x)}return null}function _(h,v,S,x){for(var E=null,w=null,C=v,y=v=0,A=null;C!==null&&y<S.length;y++){C.index>y?(A=C,C=null):A=C.sibling;var R=u(h,C,S[y],x);if(R===null){C===null&&(C=A);break}e&&C&&R.alternate===null&&t(h,C),v=a(R,v,y),w===null?E=R:w.sibling=R,w=R,C=A}if(y===S.length)return n(h,C),ne&&Qi(h,y),E;if(C===null){for(;y<S.length;y++)C=p(h,S[y],x),C!==null&&(v=a(C,v,y),w===null?E=C:w.sibling=C,w=C);return ne&&Qi(h,y),E}for(C=i(C);y<S.length;y++)A=f(C,h,y,S[y],x),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?y:A.key),v=a(A,v,y),w===null?E=A:w.sibling=A,w=A);return e&&C.forEach(function(D){return t(h,D)}),ne&&Qi(h,y),E}function T(h,v,S,x){if(S==null)throw Error(tt(151));for(var E=null,w=null,C=v,y=v=0,A=null,R=S.next();C!==null&&!R.done;y++,R=S.next()){C.index>y?(A=C,C=null):A=C.sibling;var D=u(h,C,R.value,x);if(D===null){C===null&&(C=A);break}e&&C&&D.alternate===null&&t(h,C),v=a(D,v,y),w===null?E=D:w.sibling=D,w=D,C=A}if(R.done)return n(h,C),ne&&Qi(h,y),E;if(C===null){for(;!R.done;y++,R=S.next())R=p(h,R.value,x),R!==null&&(v=a(R,v,y),w===null?E=R:w.sibling=R,w=R);return ne&&Qi(h,y),E}for(C=i(C);!R.done;y++,R=S.next())R=f(C,h,y,R.value,x),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?y:R.key),v=a(R,v,y),w===null?E=R:w.sibling=R,w=R);return e&&C.forEach(function(B){return t(h,B)}),ne&&Qi(h,y),E}function g(h,v,S,x){if(typeof S=="object"&&S!==null&&S.type===hr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Sc:t:{for(var E=S.key;v!==null;){if(v.key===E){if(E=S.type,E===hr){if(v.tag===7){n(h,v.sibling),x=s(v,S.props.children),x.return=h,h=x;break t}}else if(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ws&&Ta(E)===v.type){n(h,v.sibling),x=s(v,S.props),No(x,S),x.return=h,h=x;break t}n(h,v);break}else t(h,v);v=v.sibling}S.type===hr?(x=wa(S.props.children,h.mode,x,S.key),x.return=h,h=x):(x=kc(S.type,S.key,S.props,null,h.mode,x),No(x,S),x.return=h,h=x)}return r(h);case Bo:t:{for(E=S.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(h,v.sibling),x=s(v,S.children||[]),x.return=h,h=x;break t}else{n(h,v);break}else t(h,v);v=v.sibling}x=yd(S,h.mode,x),x.return=h,h=x}return r(h);case ws:return S=Ta(S),g(h,v,S,x)}if(zo(S))return _(h,v,S,x);if(Do(S)){if(E=Do(S),typeof E!="function")throw Error(tt(150));return S=E.call(S),T(h,v,S,x)}if(typeof S.then=="function")return g(h,v,Dc(S),x);if(S.$$typeof===$i)return g(h,v,Rc(h,S),x);Uc(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(n(h,v.sibling),x=s(v,S),x.return=h,h=x):(n(h,v),x=vd(S,h.mode,x),x.return=h,h=x),r(h)):n(h,v)}return function(h,v,S,x){try{ol=0;var E=g(h,v,S,x);return wr=null,E}catch(C){if(C===Xr||C===Ou)throw C;var w=Bn(29,C,null,h.mode);return w.lanes=x,w.return=h,w}}}var La=ey(!0),ny=ey(!1),Cs=!1;function em(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gs(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(se&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=ru(e),Yv(e,null,n),t}return Iu(e,i,t,n),ru(e)}function qo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,xv(e,n)}}function Sd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var cp=!1;function Yo(){if(cp){var e=Ar;if(e!==null)throw e}}function Zo(e,t,n,i){cp=!1;var s=e.updateQueue;Cs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,d=c=l=null,o=a;do{var u=o.lane&-536870913,f=u!==o.lane;if(f?(Zt&u)===u:(i&u)===u){u!==0&&u===Lr&&(cp=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,T=o;u=t;var g=n;switch(T.tag){case 1:if(_=T.payload,typeof _=="function"){p=_.call(g,p,u);break t}p=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=T.payload,u=typeof _=="function"?_.call(g,p,u):_,u==null)break t;p=Te({},p,u);break t;case 2:Cs=!0}}u=o.callback,u!==null&&(e.flags|=64,f&&(e.flags|=8192),f=s.callbacks,f===null?s.callbacks=[u]:f.push(u))}else f={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=f,l=p):d=d.next=f,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;f=o,o=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);d===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=d,a===null&&(s.shared.lanes=0),Ks|=r,e.lanes=r,e.memoizedState=p}}function iy(e,t){if(typeof e!="function")throw Error(tt(191,e));e.call(t)}function sy(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)iy(n[e],t)}var Ir=Ni(null),uu=Ni(0);function d_(e,t){e=cs,ve(uu,e),ve(Ir,t),cs=e|t.baseLanes}function up(){ve(uu,cs),ve(Ir,Ir.current)}function nm(){cs=uu.current,nn(Ir),nn(uu)}var Xn=Ni(null),oi=null;function Ds(e){var t=e.alternate;ve(Ge,Ge.current&1),ve(Xn,e),oi===null&&(t===null||Ir.current!==null||t.memoizedState!==null)&&(oi=e)}function hp(e){ve(Ge,Ge.current),ve(Xn,e),oi===null&&(oi=e)}function ay(e){e.tag===22?(ve(Ge,Ge.current),ve(Xn,e),oi===null&&(oi=e)):Us(e)}function Us(){ve(Ge,Ge.current),ve(Xn,Xn.current)}function Pn(e){nn(Xn),oi===e&&(oi=null),nn(Ge)}var Ge=Ni(0);function hu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Dp(n)||Up(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rs=0,Gt=null,fe=null,We=null,fu=!1,Cr=!1,Ia=!1,du=0,ll=0,Rr=null,I1=0;function Oe(){throw Error(tt(321))}function im(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kn(e[n],t[n]))return!1;return!0}function sm(e,t,n,i,s,a){return rs=a,Gt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pt.H=e===null||e.memoizedState===null?Py:mm,Ia=!1,a=n(i,s),Ia=!1,Cr&&(a=oy(t,n,i,s)),ry(e),a}function ry(e){Pt.H=cl;var t=fe!==null&&fe.next!==null;if(rs=0,We=fe=Gt=null,fu=!1,ll=0,Rr=null,t)throw Error(tt(300));e===null||Ze||(e=e.dependencies,e!==null&&lu(e)&&(Ze=!0))}function oy(e,t,n,i){Gt=e;var s=0;do{if(Cr&&(Rr=null),ll=0,Cr=!1,25<=s)throw Error(tt(301));if(s+=1,We=fe=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Pt.H=By,a=t(n,i)}while(Cr);return a}function O1(){var e=Pt.H,t=e.useState()[0];return t=typeof t.then=="function"?Ml(t):t,e=e.useState()[0],(fe!==null?fe.memoizedState:null)!==e&&(Gt.flags|=1024),t}function am(){var e=du!==0;return du=0,e}function rm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function om(e){if(fu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fu=!1}rs=0,We=fe=Gt=null,Cr=!1,ll=du=0,Rr=null}function Mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Gt.memoizedState=We=e:We=We.next=e,We}function He(){if(fe===null){var e=Gt.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=We===null?Gt.memoizedState:We.next;if(t!==null)We=t,fe=e;else{if(e===null)throw Gt.alternate===null?Error(tt(467)):Error(tt(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},We===null?Gt.memoizedState=We=e:We=We.next=e}return We}function Pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ml(e){var t=ll;return ll+=1,Rr===null&&(Rr=[]),e=ty(Rr,e,t),t=Gt,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,Pt.H=t===null||t.memoizedState===null?Py:mm),e}function Bu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ml(e);if(e.$$typeof===$i)return cn(e)}throw Error(tt(438,String(e)))}function lm(e){var t=null,n=Gt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Gt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Pu(),Gt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=xb;return t.index++,n}function os(e,t){return typeof t=="function"?t(e):t}function Wc(e){var t=He();return cm(t,fe,e)}function cm(e,t,n){var i=e.queue;if(i===null)throw Error(tt(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,d=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Zt&p)===p:(rs&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Lr&&(d=!0);else if((rs&u)===u){c=c.next,u===Lr&&(d=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Gt.lanes|=u,Ks|=u;p=c.action,Ia&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Gt.lanes|=p,Ks|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!kn(a,e.memoizedState)&&(Ze=!0,d&&(n=Ar,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Md(e){var t=He(),n=t.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);kn(a,t.memoizedState)||(Ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function ly(e,t,n){var i=Gt,s=He(),a=ne;if(a){if(n===void 0)throw Error(tt(407));n=n()}else n=t();var r=!kn((fe||s).memoizedState,n);if(r&&(s.memoizedState=n,Ze=!0),s=s.queue,um(hy.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||We!==null&&We.memoizedState.tag&1){if(i.flags|=2048,Or(9,{destroy:void 0},uy.bind(null,i,s,n,t),null),me===null)throw Error(tt(349));a||(rs&127)!==0||cy(i,t,n)}return n}function cy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Gt.updateQueue,t===null?(t=Pu(),Gt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uy(e,t,n,i){t.value=n,t.getSnapshot=i,fy(t)&&dy(e)}function hy(e,t,n){return n(function(){fy(t)&&dy(e)})}function fy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kn(e,n)}catch{return!0}}function dy(e){var t=Fa(e,2);t!==null&&Dn(t,e,2)}function fp(e){var t=Mn();if(typeof e=="function"){var n=e;if(e=n(),Ia){Ls(!0);try{n()}finally{Ls(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:e},t}function py(e,t,n,i){return e.baseState=n,cm(e,fe,typeof i=="function"?i:os)}function P1(e,t,n,i,s){if(Fu(e))throw Error(tt(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Pt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,my(t,a)):(a.next=n.next,t.pending=n.next=a)}}function my(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Pt.T,r={};Pt.T=r;try{var o=n(s,i),l=Pt.S;l!==null&&l(r,o),p_(e,t,o)}catch(c){dp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Pt.T=a}}else try{a=n(s,i),p_(e,t,a)}catch(c){dp(e,t,c)}}function p_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){m_(e,t,i)},function(i){return dp(e,t,i)}):m_(e,t,n)}function m_(e,t,n){t.status="fulfilled",t.value=n,gy(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,my(e,n)))}function dp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,gy(t),t=t.next;while(t!==i)}e.action=null}function gy(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _y(e,t){return t}function g_(e,t){if(ne){var n=me.formState;if(n!==null){t:{var i=Gt;if(ne){if(be){e:{for(var s=be,a=ri;s.nodeType!==8;){if(!a){s=null;break e}if(s=li(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){be=li(s.nextSibling),i=s.data==="F!";break t}}Zs(i)}i=!1}i&&(t=n[0])}}return n=Mn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_y,lastRenderedState:t},n.queue=i,n=Ly.bind(null,Gt,i),i.dispatch=n,i=fp(!1),a=pm.bind(null,Gt,!1,i.queue),i=Mn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=P1.bind(null,Gt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function __(e){var t=He();return vy(t,fe,e)}function vy(e,t,n){if(t=cm(e,t,_y)[0],e=Wc(os)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ml(t)}catch(r){throw r===Xr?Ou:r}else i=t;t=He();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Gt.flags|=2048,Or(9,{destroy:void 0},B1.bind(null,s,n),null)),[i,a,e]}function B1(e,t){e.action=t}function v_(e){var t=He(),n=fe;if(n!==null)return vy(t,n,e);He(),t=t.memoizedState,n=He();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Or(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Gt.updateQueue,t===null&&(t=Pu(),Gt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function yy(){return He().memoizedState}function qc(e,t,n,i){var s=Mn();Gt.flags|=e,s.memoizedState=Or(1|t,{destroy:void 0},n,i===void 0?null:i)}function zu(e,t,n,i){var s=He();i=i===void 0?null:i;var a=s.memoizedState.inst;fe!==null&&i!==null&&im(i,fe.memoizedState.deps)?s.memoizedState=Or(t,a,n,i):(Gt.flags|=e,s.memoizedState=Or(1|t,a,n,i))}function y_(e,t){qc(8390656,8,e,t)}function um(e,t){zu(2048,8,e,t)}function z1(e){Gt.flags|=4;var t=Gt.updateQueue;if(t===null)t=Pu(),Gt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function xy(e){var t=He().memoizedState;return z1({ref:t,nextImpl:e}),function(){if((se&2)!==0)throw Error(tt(440));return t.impl.apply(void 0,arguments)}}function Sy(e,t){return zu(4,2,e,t)}function My(e,t){return zu(4,4,e,t)}function by(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ty(e,t,n){n=n!=null?n.concat([e]):null,zu(4,4,by.bind(null,t,e),n)}function hm(){}function Ey(e,t){var n=He();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&im(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Ay(e,t){var n=He();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&im(t,i[1]))return i[0];if(i=e(),Ia){Ls(!0);try{e()}finally{Ls(!1)}}return n.memoizedState=[i,t],i}function fm(e,t,n){return n===void 0||(rs&1073741824)!==0&&(Zt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=px(),Gt.lanes|=e,Ks|=e,n)}function wy(e,t,n,i){return kn(n,t)?n:Ir.current!==null?(e=fm(e,n,i),kn(e,t)||(Ze=!0),e):(rs&42)===0||(rs&1073741824)!==0&&(Zt&261930)===0?(Ze=!0,e.memoizedState=n):(e=px(),Gt.lanes|=e,Ks|=e,t)}function Cy(e,t,n,i,s){var a=ae.p;ae.p=a!==0&&8>a?a:8;var r=Pt.T,o={};Pt.T=o,pm(e,!1,t,n);try{var l=s(),c=Pt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=L1(l,i);Jo(e,t,d,Hn(e))}else Jo(e,t,i,Hn(e))}catch(p){Jo(e,t,{then:function(){},status:"rejected",reason:p},Hn())}finally{ae.p=a,r!==null&&o.types!==null&&(r.types=o.types),Pt.T=r}}function F1(){}function pp(e,t,n,i){if(e.tag!==5)throw Error(tt(476));var s=Ry(e).queue;Cy(e,s,t,Aa,n===null?F1:function(){return Dy(e),n(i)})}function Ry(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Aa,baseState:Aa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:Aa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Dy(e){var t=Ry(e);t.next===null&&(t=e.alternate.memoizedState),Jo(e,t.next.queue,{},Hn())}function dm(){return cn(fl)}function Uy(){return He().memoizedState}function Ny(){return He().memoizedState}function V1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Hn();e=Vs(n);var i=Gs(t,e,n);i!==null&&(Dn(i,t,n),qo(i,t,n)),t={cache:jp()},e.payload=t;return}t=t.return}}function G1(e,t,n){var i=Hn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fu(e)?Iy(t,n):(n=Zp(e,t,n,i),n!==null&&(Dn(n,e,i),Oy(n,t,i)))}function Ly(e,t,n){var i=Hn();Jo(e,t,n,i)}function Jo(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fu(e))Iy(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,kn(o,r))return Iu(e,t,s,0),me===null&&Lu(),!1}catch{}if(n=Zp(e,t,s,i),n!==null)return Dn(n,e,i),Oy(n,t,i),!0}return!1}function pm(e,t,n,i){if(i={lane:2,revertLane:bm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Fu(e)){if(t)throw Error(tt(479))}else t=Zp(e,n,i,2),t!==null&&Dn(t,e,2)}function Fu(e){var t=e.alternate;return e===Gt||t!==null&&t===Gt}function Iy(e,t){Cr=fu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Oy(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,xv(e,n)}}var cl={readContext:cn,use:Bu,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};cl.useEffectEvent=Oe;var Py={readContext:cn,use:Bu,useCallback:function(e,t){return Mn().memoizedState=[e,t===void 0?null:t],e},useContext:cn,useEffect:y_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,qc(4194308,4,by.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qc(4194308,4,e,t)},useInsertionEffect:function(e,t){qc(4,2,e,t)},useMemo:function(e,t){var n=Mn();t=t===void 0?null:t;var i=e();if(Ia){Ls(!0);try{e()}finally{Ls(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Mn();if(n!==void 0){var s=n(t);if(Ia){Ls(!0);try{n(t)}finally{Ls(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=G1.bind(null,Gt,e),[i.memoizedState,e]},useRef:function(e){var t=Mn();return e={current:e},t.memoizedState=e},useState:function(e){e=fp(e);var t=e.queue,n=Ly.bind(null,Gt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hm,useDeferredValue:function(e,t){var n=Mn();return fm(n,e,t)},useTransition:function(){var e=fp(!1);return e=Cy.bind(null,Gt,e.queue,!0,!1),Mn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Gt,s=Mn();if(ne){if(n===void 0)throw Error(tt(407));n=n()}else{if(n=t(),me===null)throw Error(tt(349));(Zt&127)!==0||cy(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,y_(hy.bind(null,i,a,e),[e]),i.flags|=2048,Or(9,{destroy:void 0},uy.bind(null,i,a,n,t),null),n},useId:function(){var e=Mn(),t=me.identifierPrefix;if(ne){var n=Ri,i=Ci;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=du++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=I1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:dm,useFormState:g_,useActionState:g_,useOptimistic:function(e){var t=Mn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=pm.bind(null,Gt,!0,n),n.dispatch=t,[e,t]},useMemoCache:lm,useCacheRefresh:function(){return Mn().memoizedState=V1.bind(null,Gt)},useEffectEvent:function(e){var t=Mn(),n={impl:e};return t.memoizedState=n,function(){if((se&2)!==0)throw Error(tt(440));return n.impl.apply(void 0,arguments)}}},mm={readContext:cn,use:Bu,useCallback:Ey,useContext:cn,useEffect:um,useImperativeHandle:Ty,useInsertionEffect:Sy,useLayoutEffect:My,useMemo:Ay,useReducer:Wc,useRef:yy,useState:function(){return Wc(os)},useDebugValue:hm,useDeferredValue:function(e,t){var n=He();return wy(n,fe.memoizedState,e,t)},useTransition:function(){var e=Wc(os)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Ml(e),t]},useSyncExternalStore:ly,useId:Uy,useHostTransitionStatus:dm,useFormState:__,useActionState:__,useOptimistic:function(e,t){var n=He();return py(n,fe,e,t)},useMemoCache:lm,useCacheRefresh:Ny};mm.useEffectEvent=xy;var By={readContext:cn,use:Bu,useCallback:Ey,useContext:cn,useEffect:um,useImperativeHandle:Ty,useInsertionEffect:Sy,useLayoutEffect:My,useMemo:Ay,useReducer:Md,useRef:yy,useState:function(){return Md(os)},useDebugValue:hm,useDeferredValue:function(e,t){var n=He();return fe===null?fm(n,e,t):wy(n,fe.memoizedState,e,t)},useTransition:function(){var e=Md(os)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Ml(e),t]},useSyncExternalStore:ly,useId:Uy,useHostTransitionStatus:dm,useFormState:v_,useActionState:v_,useOptimistic:function(e,t){var n=He();return fe!==null?py(n,fe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:lm,useCacheRefresh:Ny};By.useEffectEvent=xy;function bd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Hn(),s=Vs(i);s.payload=t,n!=null&&(s.callback=n),t=Gs(e,s,i),t!==null&&(Dn(t,e,i),qo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Hn(),s=Vs(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Gs(e,s,i),t!==null&&(Dn(t,e,i),qo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Hn(),i=Vs(n);i.tag=2,t!=null&&(i.callback=t),t=Gs(e,i,n),t!==null&&(Dn(t,e,n),qo(t,e,n))}};function x_(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!sl(n,i)||!sl(s,a):!0}function S_(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&mp.enqueueReplaceState(t,t.state,null)}function Oa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Te({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function zy(e){au(e)}function Fy(e){console.error(e)}function Vy(e){au(e)}function pu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function M_(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function gp(e,t,n){return n=Vs(n),n.tag=3,n.payload={element:null},n.callback=function(){pu(e,t)},n}function Gy(e){return e=Vs(e),e.tag=3,e}function Hy(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){M_(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){M_(t,n,i),typeof s!="function"&&(Hs===null?Hs=new Set([this]):Hs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function H1(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&kr(t,n,s,!0),n=Xn.current,n!==null){switch(n.tag){case 31:case 13:return oi===null?yu():n.alternate===null&&Pe===0&&(Pe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===cu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Id(e,i,s)),!1;case 22:return n.flags|=65536,i===cu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Id(e,i,s)),!1}throw Error(tt(435,n.tag))}return Id(e,i,s),yu(),!1}if(ne)return t=Xn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==ip&&(e=Error(tt(422),{cause:i}),rl(ai(e,n)))):(i!==ip&&(t=Error(tt(423),{cause:i}),rl(ai(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=ai(i,n),s=gp(e.stateNode,i,s),Sd(e,s),Pe!==4&&(Pe=2)),!1;var a=Error(tt(520),{cause:i});if(a=ai(a,n),jo===null?jo=[a]:jo.push(a),Pe!==4&&(Pe=2),t===null)return!0;i=ai(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=gp(n.stateNode,i,e),Sd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Hs===null||!Hs.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Gy(s),Hy(s,e,n,i),Sd(n,s),!1}n=n.return}while(n!==null);return!1}var gm=Error(tt(461)),Ze=!1;function rn(e,t,n,i){t.child=e===null?ny(t,null,n,i):La(t,e.child,n,i)}function b_(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Na(t),i=sm(e,t,n,r,a,s),o=am(),e!==null&&!Ze?(rm(e,t,s),ls(e,t,s)):(ne&&o&&Kp(t),t.flags|=1,rn(e,t,i,s),t.child)}function T_(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Jp(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ky(e,t,a,i,s)):(e=kc(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!_m(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:sl,n(r,i)&&e.ref===t.ref)return ls(e,t,s)}return t.flags|=1,e=ns(a,i),e.ref=t.ref,e.return=t,t.child=e}function ky(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(sl(a,i)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=i=a,_m(e,s))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,ls(e,t,s)}return _p(e,t,n,i,s)}function Xy(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return E_(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xc(t,a!==null?a.cachePool:null),a!==null?d_(t,a):up(),ay(t);else return i=t.lanes=536870912,E_(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Xc(t,a.cachePool),d_(t,a),Us(t),t.memoizedState=null):(e!==null&&Xc(t,null),up(),Us(t));return rn(e,t,s,n),t.child}function Vo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function E_(e,t,n,i,s){var a=$p();return a=a===null?null:{parent:Ye._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Xc(t,null),up(),ay(t),e!==null&&kr(e,t,i,!0),t.childLanes=s,null}function Yc(e,t){return t=mu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function A_(e,t,n){return La(t,e.child,null,n),e=Yc(t,t.pendingProps),e.flags|=2,Pn(t),t.memoizedState=null,e}function k1(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ne){if(i.mode==="hidden")return e=Yc(t,i),t.lanes=536870912,Vo(null,e);if(hp(t),(e=be)?(e=Px(e,ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ys!==null?{id:Ci,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},n=Jv(e),n.return=t,t.child=n,ln=t,be=null)):e=null,e===null)throw Zs(t);return t.lanes=536870912,null}return Yc(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(hp(t),s)if(t.flags&256)t.flags&=-257,t=A_(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(tt(558));else if(Ze||kr(e,t,n,!1),s=(n&e.childLanes)!==0,Ze||s){if(i=me,i!==null&&(r=Sv(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Fa(e,r),Dn(i,e,r),gm;yu(),t=A_(e,t,n)}else e=a.treeContext,be=li(r.nextSibling),ln=t,ne=!0,Fs=null,ri=!1,e!==null&&Qv(t,e),t=Yc(t,i),t.flags|=4096;return t}return e=ns(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Zc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(tt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _p(e,t,n,i,s){return Na(t),n=sm(e,t,n,i,void 0,s),i=am(),e!==null&&!Ze?(rm(e,t,s),ls(e,t,s)):(ne&&i&&Kp(t),t.flags|=1,rn(e,t,n,s),t.child)}function w_(e,t,n,i,s,a){return Na(t),t.updateQueue=null,n=oy(t,i,n,s),ry(e),i=am(),e!==null&&!Ze?(rm(e,t,a),ls(e,t,a)):(ne&&i&&Kp(t),t.flags|=1,rn(e,t,n,a),t.child)}function C_(e,t,n,i,s){if(Na(t),t.stateNode===null){var a=yr,r=n.contextType;typeof r=="object"&&r!==null&&(a=cn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=mp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},em(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?cn(r):yr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(bd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&mp.enqueueReplaceState(a,a.state,null),Zo(t,i,a,s),Yo(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Oa(n,o);a.props=l;var c=a.context,d=n.contextType;r=yr,typeof d=="object"&&d!==null&&(r=cn(d));var p=n.getDerivedStateFromProps;d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&S_(t,a,i,r),Cs=!1;var u=t.memoizedState;a.state=u,Zo(t,i,a,s),Yo(),c=t.memoizedState,o||u!==c||Cs?(typeof p=="function"&&(bd(t,n,p,i),c=t.memoizedState),(l=Cs||x_(t,n,l,i,u,c,r))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,lp(e,t),r=t.memoizedProps,d=Oa(n,r),a.props=d,p=t.pendingProps,u=a.context,c=n.contextType,l=yr,typeof c=="object"&&c!==null&&(l=cn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&S_(t,a,i,l),Cs=!1,u=t.memoizedState,a.state=u,Zo(t,i,a,s),Yo();var f=t.memoizedState;r!==p||u!==f||Cs||e!==null&&e.dependencies!==null&&lu(e.dependencies)?(typeof o=="function"&&(bd(t,n,o,i),f=t.memoizedState),(d=Cs||x_(t,n,d,i,u,f,l)||e!==null&&e.dependencies!==null&&lu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,f,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,f,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=f),a.props=i,a.state=f,a.context=l,i=d):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Zc(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=La(t,e.child,null,s),t.child=La(t,null,n,s)):rn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ls(e,t,s),e}function R_(e,t,n,i){return Ua(),t.flags|=256,rn(e,t,n,i),t.child}var Td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ed(e){return{baseLanes:e,cachePool:$v()}}function Ad(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=zn),e}function Wy(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ne){if(s?Ds(t):Us(t),(e=be)?(e=Px(e,ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ys!==null?{id:Ci,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},n=Jv(e),n.return=t,t.child=n,ln=t,be=null)):e=null,e===null)throw Zs(t);return Up(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Us(t),s=t.mode,o=mu({mode:"hidden",children:o},s),i=wa(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Ed(n),i.childLanes=Ad(e,r,n),t.memoizedState=Td,Vo(null,i)):(Ds(t),vp(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Ds(t),t.flags&=-257,t=wd(e,t,n)):t.memoizedState!==null?(Us(t),t.child=e.child,t.flags|=128,t=null):(Us(t),o=i.fallback,s=t.mode,i=mu({mode:"visible",children:i.children},s),o=wa(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,La(t,e.child,null,n),i=t.child,i.memoizedState=Ed(n),i.childLanes=Ad(e,r,n),t.memoizedState=Td,t=Vo(null,i));else if(Ds(t),Up(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(tt(419)),i.stack="",i.digest=r,rl({value:i,source:null,stack:null}),t=wd(e,t,n)}else if(Ze||kr(e,t,n,!1),r=(n&e.childLanes)!==0,Ze||r){if(r=me,r!==null&&(i=Sv(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Fa(e,i),Dn(r,e,i),gm;Dp(o)||yu(),t=wd(e,t,n)}else Dp(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,be=li(o.nextSibling),ln=t,ne=!0,Fs=null,ri=!1,e!==null&&Qv(t,e),t=vp(t,i.children),t.flags|=4096);return t}return s?(Us(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=ns(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ns(c,o):(o=wa(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Vo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Ed(n):(s=o.cachePool,s!==null?(l=Ye._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=$v(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Ad(e,r,n),t.memoizedState=Td,Vo(e.child,i)):(Ds(t),n=e.child,e=n.sibling,n=ns(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function vp(e,t){return t=mu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mu(e,t){return e=Bn(22,e,null,t),e.lanes=0,e}function wd(e,t,n){return La(t,e.child,null,n),e=vp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function D_(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ap(e.return,t,n)}function Cd(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function qy(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Ge.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,ve(Ge,r),rn(e,t,i,n),i=ne?al:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&D_(e,n,t);else if(e.tag===19)D_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&hu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Cd(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&hu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Cd(t,!0,n,null,a,i);break;case"together":Cd(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ls(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ks|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(kr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(tt(153));if(t.child!==null){for(e=t.child,n=ns(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ns(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _m(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&lu(e)))}function X1(e,t,n){switch(t.tag){case 3:eu(t,t.stateNode.containerInfo),Rs(t,Ye,e.memoizedState.cache),Ua();break;case 27:case 5:qd(t);break;case 4:eu(t,t.stateNode.containerInfo);break;case 10:Rs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,hp(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ds(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Wy(e,t,n):(Ds(t),e=ls(e,t,n),e!==null?e.sibling:null);Ds(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(kr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return qy(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ve(Ge,Ge.current),i)break;return null;case 22:return t.lanes=0,Xy(e,t,n,t.pendingProps);case 24:Rs(t,Ye,e.memoizedState.cache)}return ls(e,t,n)}function Yy(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!_m(e,n)&&(t.flags&128)===0)return Ze=!1,X1(e,t,n);Ze=(e.flags&131072)!==0}else Ze=!1,ne&&(t.flags&1048576)!==0&&Kv(t,al,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e=="function")Jp(e)?(i=Oa(e,i),t.tag=1,t=C_(null,t,e,i,n)):(t.tag=0,t=_p(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Op){t.tag=11,t=b_(null,t,e,i,n);break t}else if(s===Pp){t.tag=14,t=T_(null,t,e,i,n);break t}}throw t=Xd(e)||e,Error(tt(306,t,""))}}return t;case 0:return _p(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Oa(i,t.pendingProps),C_(e,t,i,s,n);case 3:t:{if(eu(t,t.stateNode.containerInfo),e===null)throw Error(tt(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,lp(e,t),Zo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Rs(t,Ye,i),i!==a.cache&&rp(t,[Ye],n,!0),Yo(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=R_(e,t,i,n);break t}else if(i!==s){s=ai(Error(tt(424)),t),rl(s),t=R_(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,be=li(e.firstChild),ln=t,ne=!0,Fs=null,ri=!0,n=ny(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ua(),i===s){t=ls(e,t,n);break t}rn(e,t,i,n)}t=t.child}return t;case 26:return Zc(e,t),e===null?(n=j_(t.type,null,t.pendingProps,null))?t.memoizedState=n:ne||(n=t.type,e=t.pendingProps,i=bu(zs.current).createElement(n),i[on]=t,i[Un]=e,un(i,n,e),en(i),t.stateNode=i):t.memoizedState=j_(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return qd(t),e===null&&ne&&(i=t.stateNode=Bx(t.type,t.pendingProps,zs.current),ln=t,ri=!0,s=be,js(t.type)?(Np=s,be=li(i.firstChild)):be=s),rn(e,t,t.pendingProps.children,n),Zc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ne&&((s=i=be)&&(i=vT(i,t.type,t.pendingProps,ri),i!==null?(t.stateNode=i,ln=t,be=li(i.firstChild),ri=!1,s=!0):s=!1),s||Zs(t)),qd(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Cp(s,a)?i=null:r!==null&&Cp(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=sm(e,t,O1,null,null,n),fl._currentValue=s),Zc(e,t),rn(e,t,i,n),t.child;case 6:return e===null&&ne&&((e=n=be)&&(n=yT(n,t.pendingProps,ri),n!==null?(t.stateNode=n,ln=t,be=null,e=!0):e=!1),e||Zs(t)),null;case 13:return Wy(e,t,n);case 4:return eu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=La(t,null,i,n):rn(e,t,i,n),t.child;case 11:return b_(e,t,t.type,t.pendingProps,n);case 7:return rn(e,t,t.pendingProps,n),t.child;case 8:return rn(e,t,t.pendingProps.children,n),t.child;case 12:return rn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Rs(t,t.type,i.value),rn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Na(t),s=cn(s),i=i(s),t.flags|=1,rn(e,t,i,n),t.child;case 14:return T_(e,t,t.type,t.pendingProps,n);case 15:return ky(e,t,t.type,t.pendingProps,n);case 19:return qy(e,t,n);case 31:return k1(e,t,n);case 22:return Xy(e,t,n,t.pendingProps);case 24:return Na(t),i=cn(Ye),e===null?(s=$p(),s===null&&(s=me,a=jp(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},em(t),Rs(t,Ye,s)):((e.lanes&n)!==0&&(lp(e,t),Zo(t,null,null,n),Yo()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Rs(t,Ye,i)):(i=a.cache,Rs(t,Ye,i),i!==s.cache&&rp(t,[Ye],n,!0))),rn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(tt(156,t.tag))}function Yi(e){e.flags|=4}function Rd(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(_x())e.flags|=8192;else throw Ra=cu,tm}else e.flags&=-16777217}function U_(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vx(t))if(_x())e.flags|=8192;else throw Ra=cu,tm}function Nc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vv():536870912,e.lanes|=t,Pr|=t)}function Lo(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function W1(e,t,n){var i=t.pendingProps;switch(Qp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),is(Ye),Dr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(or(t)?Yi(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xd())),Me(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Yi(t),a!==null?(Me(t),U_(t,a)):(Me(t),Rd(t,s,null,i,n))):a?a!==e.memoizedState?(Yi(t),Me(t),U_(t,a)):(Me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Yi(t),Me(t),Rd(t,s,e,i,n)),null;case 27:if(nu(t),n=zs.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Yi(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return Me(t),null}e=Ui.current,or(t)?r_(t,e):(e=Bx(s,i,n),t.stateNode=e,Yi(t))}return Me(t),null;case 5:if(nu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Yi(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return Me(t),null}if(a=Ui.current,or(t))r_(t,a);else{var r=bu(zs.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[on]=t,a[Un]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(un(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Yi(t)}}return Me(t),Rd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Yi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(tt(166));if(e=zs.current,or(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=ln,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[on]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Lx(e.nodeValue,n)),e||Zs(t,!0)}else e=bu(e).createTextNode(i),e[on]=t,t.stateNode=e}return Me(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=or(t),n!==null){if(e===null){if(!i)throw Error(tt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(557));e[on]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),e=!1}else n=xd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Pn(t),t):(Pn(t),null);if((t.flags&128)!==0)throw Error(tt(558))}return Me(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=or(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(tt(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(tt(317));s[on]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),s=!1}else s=xd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Pn(t),t):(Pn(t),null)}return Pn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Nc(t,t.updateQueue),Me(t),null);case 4:return Dr(),e===null&&Tm(t.stateNode.containerInfo),Me(t),null;case 10:return is(t.type),Me(t),null;case 19:if(nn(Ge),i=t.memoizedState,i===null)return Me(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Lo(i,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=hu(e),a!==null){for(t.flags|=128,Lo(i,!1),e=a.updateQueue,t.updateQueue=e,Nc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Zv(n,e),n=n.sibling;return ve(Ge,Ge.current&1|2),ne&&Qi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Fn()>_u&&(t.flags|=128,s=!0,Lo(i,!1),t.lanes=4194304)}else{if(!s)if(e=hu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Nc(t,e),Lo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ne)return Me(t),null}else 2*Fn()-i.renderingStartTime>_u&&n!==536870912&&(t.flags|=128,s=!0,Lo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Fn(),e.sibling=null,n=Ge.current,ve(Ge,s?n&1|2:n&1),ne&&Qi(t,i.treeForkCount),e):(Me(t),null);case 22:case 23:return Pn(t),nm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),n=t.updateQueue,n!==null&&Nc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&nn(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),is(Ye),Me(t),null;case 25:return null;case 30:return null}throw Error(tt(156,t.tag))}function q1(e,t){switch(Qp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return is(Ye),Dr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return nu(t),null;case 31:if(t.memoizedState!==null){if(Pn(t),t.alternate===null)throw Error(tt(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Pn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(tt(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return nn(Ge),null;case 4:return Dr(),null;case 10:return is(t.type),null;case 22:case 23:return Pn(t),nm(),e!==null&&nn(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return is(Ye),null;case 25:return null;default:return null}}function Zy(e,t){switch(Qp(t),t.tag){case 3:is(Ye),Dr();break;case 26:case 27:case 5:nu(t);break;case 4:Dr();break;case 31:t.memoizedState!==null&&Pn(t);break;case 13:Pn(t);break;case 19:nn(Ge);break;case 10:is(t.type);break;case 22:case 23:Pn(t),nm(),e!==null&&nn(Ca);break;case 24:is(Ye)}}function bl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ce(t,t.return,o)}}function Js(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(d){ce(s,l,d)}}}i=i.next}while(i!==a)}}catch(d){ce(t,t.return,d)}}function Jy(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{sy(t,n)}catch(i){ce(e,e.return,i)}}}function Ky(e,t,n){n.props=Oa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ce(e,t,i)}}function Ko(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){ce(e,t,s)}}function Di(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ce(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ce(e,t,s)}else n.current=null}function Qy(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ce(e,e.return,s)}}function Dd(e,t,n){try{var i=e.stateNode;fT(i,e.type,n,t),i[Un]=t}catch(s){ce(e,e.return,s)}}function jy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&js(e.type)||e.tag===4}function Ud(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||jy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&js(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yp(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ts));else if(i!==4&&(i===27&&js(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(yp(e,t,n),e=e.sibling;e!==null;)yp(e,t,n),e=e.sibling}function gu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&js(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(gu(e,t,n),e=e.sibling;e!==null;)gu(e,t,n),e=e.sibling}function $y(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);un(t,i,n),t[on]=e,t[Un]=n}catch(a){ce(e,e.return,a)}}var ji=!1,qe=!1,Nd=!1,N_=typeof WeakSet=="function"?WeakSet:Set,tn=null;function Y1(e,t){if(e=e.containerInfo,Ap=wu,e=Vv(e),qp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,d=0,p=e,u=null;e:for(;;){for(var f;p!==n||s!==0&&p.nodeType!==3||(o=r+s),p!==a||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(f=p.firstChild)!==null;)u=p,p=f;for(;;){if(p===e)break e;if(u===n&&++c===s&&(o=r),u===a&&++d===i&&(l=r),(f=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=f}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wp={focusedElem:e,selectionRange:n},wu=!1,tn=t;tn!==null;)if(t=tn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tn=e;else for(;tn!==null;){switch(t=tn,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var _=Oa(n.type,s);e=i.getSnapshotBeforeUpdate(_,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(T){ce(n,n.return,T)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Rp(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rp(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(tt(163))}if(e=t.sibling,e!==null){e.return=t.return,tn=e;break}tn=t.return}}function tx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ji(e,n),i&4&&bl(5,n);break;case 1:if(Ji(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ce(n,n.return,r)}else{var s=Oa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ce(n,n.return,r)}}i&64&&Jy(n),i&512&&Ko(n,n.return);break;case 3:if(Ji(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{sy(e,t)}catch(r){ce(n,n.return,r)}}break;case 27:t===null&&i&4&&$y(n);case 26:case 5:Ji(e,n),t===null&&i&4&&Qy(n),i&512&&Ko(n,n.return);break;case 12:Ji(e,n);break;case 31:Ji(e,n),i&4&&ix(e,n);break;case 13:Ji(e,n),i&4&&sx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=nT.bind(null,n),xT(e,n))));break;case 22:if(i=n.memoizedState!==null||ji,!i){t=t!==null&&t.memoizedState!==null||qe,s=ji;var a=qe;ji=i,(qe=t)&&!a?Ki(e,n,(n.subtreeFlags&8772)!==0):Ji(e,n),ji=s,qe=a}break;case 30:break;default:Ji(e,n)}}function ex(e){var t=e.alternate;t!==null&&(e.alternate=null,ex(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Vp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,Cn=!1;function Zi(e,t,n){for(n=n.child;n!==null;)nx(e,t,n),n=n.sibling}function nx(e,t,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 26:qe||Di(n,t),Zi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||Di(n,t);var i=Ce,s=Cn;js(n.type)&&(Ce=n.stateNode,Cn=!1),Zi(e,t,n),tl(n.stateNode),Ce=i,Cn=s;break;case 5:qe||Di(n,t);case 6:if(i=Ce,s=Cn,Ce=null,Zi(e,t,n),Ce=i,Cn=s,Ce!==null)if(Cn)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(n.stateNode)}catch(a){ce(n,t,a)}else try{Ce.removeChild(n.stateNode)}catch(a){ce(n,t,a)}break;case 18:Ce!==null&&(Cn?(e=Ce,Y_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Vr(e)):Y_(Ce,n.stateNode));break;case 4:i=Ce,s=Cn,Ce=n.stateNode.containerInfo,Cn=!0,Zi(e,t,n),Ce=i,Cn=s;break;case 0:case 11:case 14:case 15:Js(2,n,t),qe||Js(4,n,t),Zi(e,t,n);break;case 1:qe||(Di(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Ky(n,t,i)),Zi(e,t,n);break;case 21:Zi(e,t,n);break;case 22:qe=(i=qe)||n.memoizedState!==null,Zi(e,t,n),qe=i;break;default:Zi(e,t,n)}}function ix(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Vr(e)}catch(n){ce(t,t.return,n)}}}function sx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vr(e)}catch(n){ce(t,t.return,n)}}function Z1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new N_),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new N_),t;default:throw Error(tt(435,e.tag))}}function Lc(e,t){var n=Z1(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=iT.bind(null,e,i);i.then(s,s)}})}function An(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(js(o.type)){Ce=o.stateNode,Cn=!1;break t}break;case 5:Ce=o.stateNode,Cn=!1;break t;case 3:case 4:Ce=o.stateNode.containerInfo,Cn=!0;break t}o=o.return}if(Ce===null)throw Error(tt(160));nx(a,r,s),Ce=null,Cn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ax(t,e),t=t.sibling}var pi=null;function ax(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:An(t,e),wn(e),i&4&&(Js(3,e,e.return),bl(3,e),Js(5,e,e.return));break;case 1:An(t,e),wn(e),i&512&&(qe||n===null||Di(n,n.return)),i&64&&ji&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=pi;if(An(t,e),wn(e),i&512&&(qe||n===null||Di(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[yl]||a[on]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),un(a,i,n),a[on]=e,en(a),i=a;break t;case"link":var r=tv("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),un(a,i,n),s.head.appendChild(a);break;case"meta":if(r=tv("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),un(a,i,n),s.head.appendChild(a);break;default:throw Error(tt(468,i))}a[on]=e,en(a),i=a}e.stateNode=i}else ev(s,e.type,e.stateNode);else e.stateNode=$_(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?ev(s,e.type,e.stateNode):$_(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Dd(e,e.memoizedProps,n.memoizedProps)}break;case 27:An(t,e),wn(e),i&512&&(qe||n===null||Di(n,n.return)),n!==null&&i&4&&Dd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(An(t,e),wn(e),i&512&&(qe||n===null||Di(n,n.return)),e.flags&32){s=e.stateNode;try{Nr(s,"")}catch(_){ce(e,e.return,_)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Dd(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Nd=!0);break;case 6:if(An(t,e),wn(e),i&4){if(e.stateNode===null)throw Error(tt(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){ce(e,e.return,_)}}break;case 3:if(Qc=null,s=pi,pi=Tu(t.containerInfo),An(t,e),pi=s,wn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Vr(t.containerInfo)}catch(_){ce(e,e.return,_)}Nd&&(Nd=!1,rx(e));break;case 4:i=pi,pi=Tu(e.stateNode.containerInfo),An(t,e),wn(e),pi=i;break;case 12:An(t,e),wn(e);break;case 31:An(t,e),wn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Lc(e,i)));break;case 13:An(t,e),wn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Vu=Fn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Lc(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ji,d=qe;if(ji=c||s,qe=d||l,An(t,e),qe=d,ji=c,wn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||ji||qe||Ea(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(_){ce(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){ce(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var f=l.stateNode;s?Z_(f,!0):Z_(l.stateNode,!1)}catch(_){ce(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Lc(e,n))));break;case 19:An(t,e),wn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Lc(e,i)));break;case 30:break;case 21:break;default:An(t,e),wn(e)}}function wn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(jy(i)){n=i;break}i=i.return}if(n==null)throw Error(tt(160));switch(n.tag){case 27:var s=n.stateNode,a=Ud(e);gu(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(Nr(r,""),n.flags&=-33);var o=Ud(e);gu(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Ud(e);yp(e,c,l);break;default:throw Error(tt(161))}}catch(d){ce(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;rx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ji(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tx(e,t.alternate,t),t=t.sibling}function Ea(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Js(4,t,t.return),Ea(t);break;case 1:Di(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ky(t,t.return,n),Ea(t);break;case 27:tl(t.stateNode);case 26:case 5:Di(t,t.return),Ea(t);break;case 22:t.memoizedState===null&&Ea(t);break;case 30:Ea(t);break;default:Ea(t)}e=e.sibling}}function Ki(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:Ki(s,a,n),bl(4,a);break;case 1:if(Ki(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){ce(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)iy(l[s],o)}catch(c){ce(i,i.return,c)}}n&&r&64&&Jy(a),Ko(a,a.return);break;case 27:$y(a);case 26:case 5:Ki(s,a,n),n&&i===null&&r&4&&Qy(a),Ko(a,a.return);break;case 12:Ki(s,a,n);break;case 31:Ki(s,a,n),n&&r&4&&ix(s,a);break;case 13:Ki(s,a,n),n&&r&4&&sx(s,a);break;case 22:a.memoizedState===null&&Ki(s,a,n),Ko(a,a.return);break;case 30:break;default:Ki(s,a,n)}t=t.sibling}}function vm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Sl(n))}function ym(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sl(e))}function di(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ox(e,t,n,i),t=t.sibling}function ox(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:di(e,t,n,i),s&2048&&bl(9,t);break;case 1:di(e,t,n,i);break;case 3:di(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sl(e)));break;case 12:if(s&2048){di(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ce(t,t.return,l)}}else di(e,t,n,i);break;case 31:di(e,t,n,i);break;case 13:di(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?di(e,t,n,i):Qo(e,t):a._visibility&2?di(e,t,n,i):(a._visibility|=2,cr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&vm(r,t);break;case 24:di(e,t,n,i),s&2048&&ym(t.alternate,t);break;default:di(e,t,n,i)}}function cr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:cr(a,r,o,l,s),bl(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?cr(a,r,o,l,s):Qo(a,r):(d._visibility|=2,cr(a,r,o,l,s)),s&&c&2048&&vm(r.alternate,r);break;case 24:cr(a,r,o,l,s),s&&c&2048&&ym(r.alternate,r);break;default:cr(a,r,o,l,s)}t=t.sibling}}function Qo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Qo(n,i),s&2048&&vm(i.alternate,i);break;case 24:Qo(n,i),s&2048&&ym(i.alternate,i);break;default:Qo(n,i)}t=t.sibling}}var Go=8192;function lr(e,t,n){if(e.subtreeFlags&Go)for(e=e.child;e!==null;)lx(e,t,n),e=e.sibling}function lx(e,t,n){switch(e.tag){case 26:lr(e,t,n),e.flags&Go&&e.memoizedState!==null&&NT(n,pi,e.memoizedState,e.memoizedProps);break;case 5:lr(e,t,n);break;case 3:case 4:var i=pi;pi=Tu(e.stateNode.containerInfo),lr(e,t,n),pi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Go,Go=16777216,lr(e,t,n),Go=i):lr(e,t,n));break;default:lr(e,t,n)}}function cx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Io(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tn=i,hx(i,e)}cx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ux(e),e=e.sibling}function ux(e){switch(e.tag){case 0:case 11:case 15:Io(e),e.flags&2048&&Js(9,e,e.return);break;case 3:Io(e);break;case 12:Io(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Jc(e)):Io(e);break;default:Io(e)}}function Jc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tn=i,hx(i,e)}cx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Js(8,t,t.return),Jc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Jc(t));break;default:Jc(t)}e=e.sibling}}function hx(e,t){for(;tn!==null;){var n=tn;switch(n.tag){case 0:case 11:case 15:Js(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Sl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,tn=i;else t:for(n=e;tn!==null;){i=tn;var s=i.sibling,a=i.return;if(ex(i),i===n){tn=null;break t}if(s!==null){s.return=a,tn=s;break t}tn=a}}}var J1={getCacheForType:function(e){var t=cn(Ye),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return cn(Ye).controller.signal}},K1=typeof WeakMap=="function"?WeakMap:Map,se=0,me=null,Yt=null,Zt=0,le=0,On=null,Os=!1,Wr=!1,xm=!1,cs=0,Pe=0,Ks=0,Da=0,Sm=0,zn=0,Pr=0,jo=null,Rn=null,xp=!1,Vu=0,fx=0,_u=1/0,vu=null,Hs=null,Ke=0,ks=null,Br=null,ss=0,Sp=0,Mp=null,dx=null,$o=0,bp=null;function Hn(){return(se&2)!==0&&Zt!==0?Zt&-Zt:Pt.T!==null?bm():Mv()}function px(){if(zn===0)if((Zt&536870912)===0||ne){var e=bc;bc<<=1,(bc&3932160)===0&&(bc=262144),zn=e}else zn=536870912;return e=Xn.current,e!==null&&(e.flags|=32),zn}function Dn(e,t,n){(e===me&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(zr(e,0),Ps(e,Zt,zn,!1)),vl(e,n),((se&2)===0||e!==me)&&(e===me&&((se&2)===0&&(Da|=n),Pe===4&&Ps(e,Zt,zn,!1)),Li(e))}function mx(e,t,n){if((se&6)!==0)throw Error(tt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||_l(e,t),s=i?$1(e,t):Ld(e,t,!0),a=i;do{if(s===0){Wr&&!i&&Ps(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!Q1(n)){s=Ld(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=jo;var l=o.current.memoizedState.isDehydrated;if(l&&(zr(o,r).flags|=256),r=Ld(o,r,!1),r!==2){if(xm&&!l){o.errorRecoveryDisabledLanes|=a,Da|=a,s=4;break t}a=Rn,Rn=s,a!==null&&(Rn===null?Rn=a:Rn.push.apply(Rn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){zr(e,0),Ps(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(tt(345));case 4:if((t&4194048)!==t)break;case 6:Ps(i,t,zn,!Os);break t;case 2:Rn=null;break;case 3:case 5:break;default:throw Error(tt(329))}if((t&62914560)===t&&(s=Vu+300-Fn(),10<s)){if(Ps(i,t,zn,!Os),Ru(i,0,!0)!==0)break t;ss=t,i.timeoutHandle=Ox(L_.bind(null,i,n,Rn,vu,xp,t,zn,Da,Pr,Os,a,"Throttled",-0,0),s);break t}L_(i,n,Rn,vu,xp,t,zn,Da,Pr,Os,a,null,-0,0)}}break}while(!0);Li(e)}function L_(e,t,n,i,s,a,r,o,l,c,d,p,u,f){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ts},lx(t,a,p);var _=(a&62914560)===a?Vu-Fn():(a&4194048)===a?fx-Fn():0;if(_=LT(p,_),_!==null){ss=a,e.cancelPendingCommit=_(O_.bind(null,e,t,a,n,i,s,r,o,l,d,p,null,u,f)),Ps(e,a,r,!c);return}}O_(e,t,a,n,i,s,r,o,l)}function Q1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!kn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ps(e,t,n,i){t&=~Sm,t&=~Da,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Gn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&yv(e,n,t)}function Gu(){return(se&6)===0?(Tl(0,!1),!1):!0}function Mm(){if(Yt!==null){if(le===0)var e=Yt.return;else e=Yt,es=Va=null,om(e),wr=null,ol=0,e=Yt;for(;e!==null;)Zy(e.alternate,e),e=e.return;Yt=null}}function zr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,mT(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ss=0,Mm(),me=e,Yt=n=ns(e.current,null),Zt=t,le=0,On=null,Os=!1,Wr=_l(e,t),xm=!1,Pr=zn=Sm=Da=Ks=Pe=0,Rn=jo=null,xp=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Gn(i),a=1<<s;t|=e[s],i&=~a}return cs=t,Lu(),n}function gx(e,t){Gt=null,Pt.H=cl,t===Xr||t===Ou?(t=h_(),le=3):t===tm?(t=h_(),le=4):le=t===gm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,On=t,Yt===null&&(Pe=1,pu(e,ai(t,e.current)))}function _x(){var e=Xn.current;return e===null?!0:(Zt&4194048)===Zt?oi===null:(Zt&62914560)===Zt||(Zt&536870912)!==0?e===oi:!1}function vx(){var e=Pt.H;return Pt.H=cl,e===null?cl:e}function yx(){var e=Pt.A;return Pt.A=J1,e}function yu(){Pe=4,Os||(Zt&4194048)!==Zt&&Xn.current!==null||(Wr=!0),(Ks&134217727)===0&&(Da&134217727)===0||me===null||Ps(me,Zt,zn,!1)}function Ld(e,t,n){var i=se;se|=2;var s=vx(),a=yx();(me!==e||Zt!==t)&&(vu=null,zr(e,t)),t=!1;var r=Pe;t:do try{if(le!==0&&Yt!==null){var o=Yt,l=On;switch(le){case 8:Mm(),r=6;break t;case 3:case 2:case 9:case 6:Xn.current===null&&(t=!0);var c=le;if(le=0,On=null,Mr(e,o,l,c),n&&Wr){r=0;break t}break;default:c=le,le=0,On=null,Mr(e,o,l,c)}}j1(),r=Pe;break}catch(d){gx(e,d)}while(!0);return t&&e.shellSuspendCounter++,es=Va=null,se=i,Pt.H=s,Pt.A=a,Yt===null&&(me=null,Zt=0,Lu()),r}function j1(){for(;Yt!==null;)xx(Yt)}function $1(e,t){var n=se;se|=2;var i=vx(),s=yx();me!==e||Zt!==t?(vu=null,_u=Fn()+500,zr(e,t)):Wr=_l(e,t);t:do try{if(le!==0&&Yt!==null){t=Yt;var a=On;e:switch(le){case 1:le=0,On=null,Mr(e,t,a,1);break;case 2:case 9:if(u_(a)){le=0,On=null,I_(t);break}t=function(){le!==2&&le!==9||me!==e||(le=7),Li(e)},a.then(t,t);break t;case 3:le=7;break t;case 4:le=5;break t;case 7:u_(a)?(le=0,On=null,I_(t)):(le=0,On=null,Mr(e,t,a,7));break;case 5:var r=null;switch(Yt.tag){case 26:r=Yt.memoizedState;case 5:case 27:var o=Yt;if(r?Vx(r):o.stateNode.complete){le=0,On=null;var l=o.sibling;if(l!==null)Yt=l;else{var c=o.return;c!==null?(Yt=c,Hu(c)):Yt=null}break e}}le=0,On=null,Mr(e,t,a,5);break;case 6:le=0,On=null,Mr(e,t,a,6);break;case 8:Mm(),Pe=6;break t;default:throw Error(tt(462))}}tT();break}catch(d){gx(e,d)}while(!0);return es=Va=null,Pt.H=i,Pt.A=s,se=n,Yt!==null?0:(me=null,Zt=0,Lu(),Pe)}function tT(){for(;Yt!==null&&!bb();)xx(Yt)}function xx(e){var t=Yy(e.alternate,e,cs);e.memoizedProps=e.pendingProps,t===null?Hu(e):Yt=t}function I_(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=w_(n,t,t.pendingProps,t.type,void 0,Zt);break;case 11:t=w_(n,t,t.pendingProps,t.type.render,t.ref,Zt);break;case 5:om(t);default:Zy(n,t),t=Yt=Zv(t,cs),t=Yy(n,t,cs)}e.memoizedProps=e.pendingProps,t===null?Hu(e):Yt=t}function Mr(e,t,n,i){es=Va=null,om(t),wr=null,ol=0;var s=t.return;try{if(H1(e,s,t,n,Zt)){Pe=1,pu(e,ai(n,e.current)),Yt=null;return}}catch(a){if(s!==null)throw Yt=s,a;Pe=1,pu(e,ai(n,e.current)),Yt=null;return}t.flags&32768?(ne||i===1?e=!0:Wr||(Zt&536870912)!==0?e=!1:(Os=e=!0,(i===2||i===9||i===3||i===6)&&(i=Xn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Sx(t,e)):Hu(t)}function Hu(e){var t=e;do{if((t.flags&32768)!==0){Sx(t,Os);return}e=t.return;var n=W1(t.alternate,t,cs);if(n!==null){Yt=n;return}if(t=t.sibling,t!==null){Yt=t;return}Yt=t=e}while(t!==null);Pe===0&&(Pe=5)}function Sx(e,t){do{var n=q1(e.alternate,e);if(n!==null){n.flags&=32767,Yt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Yt=e;return}Yt=e=n}while(e!==null);Pe=6,Yt=null}function O_(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do ku();while(Ke!==0);if((se&6)!==0)throw Error(tt(327));if(t!==null){if(t===e.current)throw Error(tt(177));if(a=t.lanes|t.childLanes,a|=Yp,Lb(e,n,a,r,o,l),e===me&&(Yt=me=null,Zt=0),Br=t,ks=e,ss=n,Sp=a,Mp=s,dx=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sT(iu,function(){return Ax(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Pt.T,Pt.T=null,s=ae.p,ae.p=2,r=se,se|=4;try{Y1(e,t,n)}finally{se=r,ae.p=s,Pt.T=i}}Ke=1,Mx(),bx(),Tx()}}function Mx(){if(Ke===1){Ke=0;var e=ks,t=Br,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Pt.T,Pt.T=null;var i=ae.p;ae.p=2;var s=se;se|=4;try{ax(t,e);var a=wp,r=Vv(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&Fv(o.ownerDocument.documentElement,o)){if(l!==null&&qp(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var f=u.getSelection(),_=o.textContent.length,T=Math.min(l.start,_),g=l.end===void 0?T:Math.min(l.end,_);!f.extend&&T>g&&(r=g,g=T,T=r);var h=i_(o,T),v=i_(o,g);if(h&&v&&(f.rangeCount!==1||f.anchorNode!==h.node||f.anchorOffset!==h.offset||f.focusNode!==v.node||f.focusOffset!==v.offset)){var S=p.createRange();S.setStart(h.node,h.offset),f.removeAllRanges(),T>g?(f.addRange(S),f.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),f.addRange(S))}}}}for(p=[],f=o;f=f.parentNode;)f.nodeType===1&&p.push({element:f,left:f.scrollLeft,top:f.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var x=p[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}wu=!!Ap,wp=Ap=null}finally{se=s,ae.p=i,Pt.T=n}}e.current=t,Ke=2}}function bx(){if(Ke===2){Ke=0;var e=ks,t=Br,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Pt.T,Pt.T=null;var i=ae.p;ae.p=2;var s=se;se|=4;try{tx(e,t.alternate,t)}finally{se=s,ae.p=i,Pt.T=n}}Ke=3}}function Tx(){if(Ke===4||Ke===3){Ke=0,Tb();var e=ks,t=Br,n=ss,i=dx;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,Br=ks=null,Ex(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Hs=null),Fp(n),t=t.stateNode,Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(gl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Pt.T,s=ae.p,ae.p=2,Pt.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Pt.T=t,ae.p=s}}(ss&3)!==0&&ku(),Li(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===bp?$o++:($o=0,bp=e):$o=0,Tl(0,!1)}}function Ex(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Sl(t)))}function ku(){return Mx(),bx(),Tx(),Ax()}function Ax(){if(Ke!==5)return!1;var e=ks,t=Sp;Sp=0;var n=Fp(ss),i=Pt.T,s=ae.p;try{ae.p=32>n?32:n,Pt.T=null,n=Mp,Mp=null;var a=ks,r=ss;if(Ke=0,Br=ks=null,ss=0,(se&6)!==0)throw Error(tt(331));var o=se;if(se|=4,ux(a.current),ox(a,a.current,r,n),se=o,Tl(0,!1),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(gl,a)}catch{}return!0}finally{ae.p=s,Pt.T=i,Ex(e,t)}}function P_(e,t,n){t=ai(n,t),t=gp(e.stateNode,t,2),e=Gs(e,t,2),e!==null&&(vl(e,2),Li(e))}function ce(e,t,n){if(e.tag===3)P_(e,e,n);else for(;t!==null;){if(t.tag===3){P_(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hs===null||!Hs.has(i))){e=ai(n,e),n=Gy(2),i=Gs(t,n,2),i!==null&&(Hy(n,i,t,e),vl(i,2),Li(i));break}}t=t.return}}function Id(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new K1;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(xm=!0,s.add(n),e=eT.bind(null,e,t,n),t.then(e,e))}function eT(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,me===e&&(Zt&n)===n&&(Pe===4||Pe===3&&(Zt&62914560)===Zt&&300>Fn()-Vu?(se&2)===0&&zr(e,0):Sm|=n,Pr===Zt&&(Pr=0)),Li(e)}function wx(e,t){t===0&&(t=vv()),e=Fa(e,t),e!==null&&(vl(e,t),Li(e))}function nT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wx(e,n)}function iT(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(tt(314))}i!==null&&i.delete(t),wx(e,n)}function sT(e,t){return Bp(e,t)}var xu=null,ur=null,Tp=!1,Su=!1,Od=!1,Bs=0;function Li(e){e!==ur&&e.next===null&&(ur===null?xu=ur=e:ur=ur.next=e),Su=!0,Tp||(Tp=!0,rT())}function Tl(e,t){if(!Od&&Su){Od=!0;do for(var n=!1,i=xu;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Gn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,B_(i,a))}else a=Zt,a=Ru(i,i===me?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||_l(i,a)||(n=!0,B_(i,a));i=i.next}while(n);Od=!1}}function aT(){Cx()}function Cx(){Su=Tp=!1;var e=0;Bs!==0&&pT()&&(e=Bs);for(var t=Fn(),n=null,i=xu;i!==null;){var s=i.next,a=Rx(i,t);a===0?(i.next=null,n===null?xu=s:n.next=s,s===null&&(ur=n)):(n=i,(e!==0||(a&3)!==0)&&(Su=!0)),i=s}Ke!==0&&Ke!==5||Tl(e,!1),Bs!==0&&(Bs=0)}function Rx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Gn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=Nb(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=me,n=Zt,n=Ru(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ud(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||_l(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ud(i),Fp(n)){case 2:case 8:n=gv;break;case 32:n=iu;break;case 268435456:n=_v;break;default:n=iu}return i=Dx.bind(null,e),n=Bp(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ud(i),e.callbackPriority=2,e.callbackNode=null,2}function Dx(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ku()&&e.callbackNode!==n)return null;var i=Zt;return i=Ru(e,e===me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(mx(e,i,t),Rx(e,Fn()),e.callbackNode!=null&&e.callbackNode===n?Dx.bind(null,e):null)}function B_(e,t){if(ku())return null;mx(e,t,!0)}function rT(){gT(function(){(se&6)!==0?Bp(mv,aT):Cx()})}function bm(){if(Bs===0){var e=Lr;e===0&&(e=Mc,Mc<<=1,(Mc&261888)===0&&(Mc=256)),Bs=e}return Bs}function z_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vc(""+e)}function F_(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function oT(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=z_((s[Un]||null).action),r=i.submitter;r&&(t=(t=r[Un]||null)?z_(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Du("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Bs!==0){var l=r?F_(s,r):new FormData(s);pp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?F_(s,r):new FormData(s),pp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Ic=0;Ic<np.length;Ic++)Oc=np[Ic],V_=Oc.toLowerCase(),G_=Oc[0].toUpperCase()+Oc.slice(1),mi(V_,"on"+G_);var Oc,V_,G_,Ic;mi(Hv,"onAnimationEnd");mi(kv,"onAnimationIteration");mi(Xv,"onAnimationStart");mi("dblclick","onDoubleClick");mi("focusin","onFocus");mi("focusout","onBlur");mi(E1,"onTransitionRun");mi(A1,"onTransitionStart");mi(w1,"onTransitionCancel");mi(Wv,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);Pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pa("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function Ux(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(d){au(d)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(d){au(d)}s.currentTarget=null,a=l}}}}function qt(e,t){var n=t[Zd];n===void 0&&(n=t[Zd]=new Set);var i=e+"__bubble";n.has(i)||(Nx(t,e,2,!1),n.add(i))}function Pd(e,t,n){var i=0;t&&(i|=4),Nx(n,e,i,t)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function Tm(e){if(!e[Pc]){e[Pc]=!0,bv.forEach(function(n){n!=="selectionchange"&&(lT.has(n)||Pd(n,!1,e),Pd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pc]||(t[Pc]=!0,Pd("selectionchange",!1,t))}}function Nx(e,t,n,i){switch(Wx(t)){case 2:var s=PT;break;case 8:s=BT;break;default:s=Cm}n=s.bind(null,t,n,e),s=void 0,!$d||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Bd(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=dr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Uv(function(){var c=a,d=Hp(n),p=[];t:{var u=qv.get(e);if(u!==void 0){var f=Du,_=e;switch(e){case"keypress":if(Hc(n)===0)break t;case"keydown":case"keyup":f=i1;break;case"focusin":_="focus",f=md;break;case"focusout":_="blur",f=md;break;case"beforeblur":case"afterblur":f=md;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Z0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Wb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=r1;break;case Hv:case kv:case Xv:f=Zb;break;case Wv:f=l1;break;case"scroll":case"scrollend":f=kb;break;case"wheel":f=u1;break;case"copy":case"cut":case"paste":f=Kb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=K0;break;case"toggle":case"beforetoggle":f=f1}var T=(t&4)!==0,g=!T&&(e==="scroll"||e==="scrollend"),h=T?u!==null?u+"Capture":null:u;T=[];for(var v=c,S;v!==null;){var x=v;if(S=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||S===null||h===null||(x=nl(v,h),x!=null&&T.push(hl(v,x,S))),g)break;v=v.return}0<T.length&&(u=new f(u,_,null,n,d),p.push({event:u,listeners:T}))}}if((t&7)===0){t:{if(u=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",u&&n!==jd&&(_=n.relatedTarget||n.fromElement)&&(dr(_)||_[Gr]))break t;if((f||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,f?(_=n.relatedTarget||n.toElement,f=c,_=_?dr(_):null,_!==null&&(g=ml(_),T=_.tag,_!==g||T!==5&&T!==27&&T!==6)&&(_=null)):(f=null,_=c),f!==_)){if(T=Z0,x="onMouseLeave",h="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(T=K0,x="onPointerLeave",h="onPointerEnter",v="pointer"),g=f==null?u:Fo(f),S=_==null?u:Fo(_),u=new T(x,v+"leave",f,n,d),u.target=g,u.relatedTarget=S,x=null,dr(d)===c&&(T=new T(h,v+"enter",_,n,d),T.target=S,T.relatedTarget=g,x=T),g=x,f&&_)e:{for(T=cT,h=f,v=_,S=0,x=h;x;x=T(x))S++;x=0;for(var E=v;E;E=T(E))x++;for(;0<S-x;)h=T(h),S--;for(;0<x-S;)v=T(v),x--;for(;S--;){if(h===v||v!==null&&h===v.alternate){T=h;break e}h=T(h),v=T(v)}T=null}else T=null;f!==null&&H_(p,u,f,T,!1),_!==null&&g!==null&&H_(p,g,_,T,!0)}}t:{if(u=c?Fo(c):window,f=u.nodeName&&u.nodeName.toLowerCase(),f==="select"||f==="input"&&u.type==="file")var w=t_;else if($0(u))if(Bv)w=M1;else{w=x1;var C=y1}else f=u.nodeName,!f||f.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Gp(c.elementType)&&(w=t_):w=S1;if(w&&(w=w(e,c))){Pv(p,w,n,d);break t}C&&C(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&Qd(u,"number",u.value)}switch(C=c?Fo(c):window,e){case"focusin":($0(C)||C.contentEditable==="true")&&(gr=C,tp=c,Xo=null);break;case"focusout":Xo=tp=gr=null;break;case"mousedown":ep=!0;break;case"contextmenu":case"mouseup":case"dragend":ep=!1,s_(p,n,d);break;case"selectionchange":if(T1)break;case"keydown":case"keyup":s_(p,n,d)}var y;if(Wp)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else mr?Iv(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Lv&&n.locale!=="ko"&&(mr||A!=="onCompositionStart"?A==="onCompositionEnd"&&mr&&(y=Nv()):(Is=d,kp="value"in Is?Is.value:Is.textContent,mr=!0)),C=Mu(c,A),0<C.length&&(A=new J0(A,e,null,n,d),p.push({event:A,listeners:C}),y?A.data=y:(y=Ov(n),y!==null&&(A.data=y)))),(y=p1?m1(e,n):g1(e,n))&&(A=Mu(c,"onBeforeInput"),0<A.length&&(C=new J0("onBeforeInput","beforeinput",null,n,d),p.push({event:C,listeners:A}),C.data=y)),oT(p,e,c,n,d)}Ux(p,t)})}function hl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=nl(e,n),s!=null&&i.unshift(hl(e,s,a)),s=nl(e,t),s!=null&&i.push(hl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function cT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function H_(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=nl(n,a),c!=null&&r.unshift(hl(n,c,l))):s||(c=nl(n,a),c!=null&&r.push(hl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var uT=/\r\n?/g,hT=/\u0000|\uFFFD/g;function k_(e){return(typeof e=="string"?e:""+e).replace(uT,`
`).replace(hT,"")}function Lx(e,t){return t=k_(t),k_(e)===t}function he(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Nr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Nr(e,""+i);break;case"className":Ec(e,"class",i);break;case"tabIndex":Ec(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ec(e,n,i);break;case"style":Dv(e,i,a);break;case"data":if(t!=="object"){Ec(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Vc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&he(e,t,"name",s.name,s,null),he(e,t,"formEncType",s.formEncType,s,null),he(e,t,"formMethod",s.formMethod,s,null),he(e,t,"formTarget",s.formTarget,s,null)):(he(e,t,"encType",s.encType,s,null),he(e,t,"method",s.method,s,null),he(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Vc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ts);break;case"onScroll":i!=null&&qt("scroll",e);break;case"onScrollEnd":i!=null&&qt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Vc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":qt("beforetoggle",e),qt("toggle",e),Fc(e,"popover",i);break;case"xlinkActuate":qi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":qi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":qi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":qi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":qi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":qi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":qi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":qi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":qi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Fc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Gb.get(n)||n,Fc(e,n,i))}}function Ep(e,t,n,i,s,a){switch(n){case"style":Dv(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Nr(e,i):(typeof i=="number"||typeof i=="bigint")&&Nr(e,""+i);break;case"onScroll":i!=null&&qt("scroll",e);break;case"onScrollEnd":i!=null&&qt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ts);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tv.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[Un]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Fc(e,n,i)}}}function un(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qt("error",e),qt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:he(e,t,a,r,n,null)}}s&&he(e,t,"srcSet",n.srcSet,n,null),i&&he(e,t,"src",n.src,n,null);return;case"input":qt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":s=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":a=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(tt(137,t));break;default:he(e,t,i,d,n,null)}}wv(e,a,o,l,c,r,s,!1);return;case"select":qt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:he(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Tr(e,!!i,t,!1):n!=null&&Tr(e,!!i,n,!0);return;case"textarea":qt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(tt(91));break;default:he(e,t,r,o,n,null)}Rv(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":he(e,t,l,i,n,null));return;case"dialog":qt("beforetoggle",e),qt("toggle",e),qt("cancel",e),qt("close",e);break;case"iframe":case"object":qt("load",e);break;case"video":case"audio":for(i=0;i<ul.length;i++)qt(ul[i],e);break;case"image":qt("error",e),qt("load",e);break;case"details":qt("toggle",e);break;case"embed":case"source":case"link":qt("error",e),qt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:he(e,t,c,i,n,null)}return;default:if(Gp(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Ep(e,t,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&he(e,t,o,i,n,null))}function fT(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,d=null;for(f in n){var p=n[f];if(n.hasOwnProperty(f)&&p!=null)switch(f){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(f)||he(e,t,f,null,i,p)}}for(var u in i){var f=i[u];if(p=n[u],i.hasOwnProperty(u)&&(f!=null||p!=null))switch(u){case"type":a=f;break;case"name":s=f;break;case"checked":c=f;break;case"defaultChecked":d=f;break;case"value":r=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(tt(137,t));break;default:f!==p&&he(e,t,u,f,i,p)}}Kd(e,r,o,l,c,d,a,s);return;case"select":f=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":f=l;default:i.hasOwnProperty(a)||he(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":u=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&he(e,t,s,a,i,l)}t=o,n=r,i=f,u!=null?Tr(e,!!n,u,!1):!!i!=!!n&&(t!=null?Tr(e,!!n,t,!0):Tr(e,!!n,n?[]:"",!1));return;case"textarea":f=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:he(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":u=s;break;case"defaultValue":f=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(tt(91));break;default:s!==a&&he(e,t,r,s,i,a)}Cv(e,u,f);return;case"option":for(var _ in n)u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:he(e,t,_,null,i,u));for(l in i)u=i[l],f=n[l],i.hasOwnProperty(l)&&u!==f&&(u!=null||f!=null)&&(l==="selected"?e.selected=u&&typeof u!="function"&&typeof u!="symbol":he(e,t,l,u,i,f));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var T in n)u=n[T],n.hasOwnProperty(T)&&u!=null&&!i.hasOwnProperty(T)&&he(e,t,T,null,i,u);for(c in i)if(u=i[c],f=n[c],i.hasOwnProperty(c)&&u!==f&&(u!=null||f!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(tt(137,t));break;default:he(e,t,c,u,i,f)}return;default:if(Gp(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&Ep(e,t,g,void 0,i,u);for(d in i)u=i[d],f=n[d],!i.hasOwnProperty(d)||u===f||u===void 0&&f===void 0||Ep(e,t,d,u,i,f);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&he(e,t,h,null,i,u);for(p in i)u=i[p],f=n[p],!i.hasOwnProperty(p)||u===f||u==null&&f==null||he(e,t,p,u,i,f)}function X_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&X_(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,p=l.initiatorType;d&&X_(p)&&(l=l.responseEnd,r+=d*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ap=null,wp=null;function bu(e){return e.nodeType===9?e:e.ownerDocument}function W_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ix(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Cp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zd=null;function pT(){var e=window.event;return e&&e.type==="popstate"?e===zd?!1:(zd=e,!0):(zd=null,!1)}var Ox=typeof setTimeout=="function"?setTimeout:void 0,mT=typeof clearTimeout=="function"?clearTimeout:void 0,q_=typeof Promise=="function"?Promise:void 0,gT=typeof queueMicrotask=="function"?queueMicrotask:typeof q_<"u"?function(e){return q_.resolve(null).then(e).catch(_T)}:Ox;function _T(e){setTimeout(function(){throw e})}function js(e){return e==="head"}function Y_(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Vr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")tl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,tl(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[yl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&tl(e.ownerDocument.body);n=s}while(n);Vr(t)}function Z_(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Rp(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Rp(n),Vp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function vT(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[yl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function yT(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=li(e.nextSibling),e===null))return null;return e}function Px(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=li(e.nextSibling),e===null))return null;return e}function Dp(e){return e.data==="$?"||e.data==="$~"}function Up(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xT(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function li(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Np=null;function J_(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return li(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function K_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Bx(e,t,n){switch(t=bu(n),e){case"html":if(e=t.documentElement,!e)throw Error(tt(452));return e;case"head":if(e=t.head,!e)throw Error(tt(453));return e;case"body":if(e=t.body,!e)throw Error(tt(454));return e;default:throw Error(tt(451))}}function tl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Vp(e)}var ci=new Map,Q_=new Set;function Tu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var us=ae.d;ae.d={f:ST,r:MT,D:bT,C:TT,L:ET,m:AT,X:CT,S:wT,M:RT};function ST(){var e=us.f(),t=Gu();return e||t}function MT(e){var t=Hr(e);t!==null&&t.tag===5&&t.type==="form"?Dy(t):us.r(e)}var qr=typeof document>"u"?null:document;function zx(e,t,n){var i=qr;if(i&&typeof t=="string"&&t){var s=si(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Q_.has(s)||(Q_.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),un(t,"link",e),en(t),i.head.appendChild(t)))}}function bT(e){us.D(e),zx("dns-prefetch",e,null)}function TT(e,t){us.C(e,t),zx("preconnect",e,t)}function ET(e,t,n){us.L(e,t,n);var i=qr;if(i&&e&&t){var s='link[rel="preload"][as="'+si(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+si(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+si(n.imageSizes)+'"]')):s+='[href="'+si(e)+'"]';var a=s;switch(t){case"style":a=Fr(e);break;case"script":a=Yr(e)}ci.has(a)||(e=Te({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ci.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(El(a))||t==="script"&&i.querySelector(Al(a))||(t=i.createElement("link"),un(t,"link",e),en(t),i.head.appendChild(t)))}}function AT(e,t){us.m(e,t);var n=qr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+si(i)+'"][href="'+si(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Yr(e)}if(!ci.has(a)&&(e=Te({rel:"modulepreload",href:e},t),ci.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Al(a)))return}i=n.createElement("link"),un(i,"link",e),en(i),n.head.appendChild(i)}}}function wT(e,t,n){us.S(e,t,n);var i=qr;if(i&&e){var s=br(i).hoistableStyles,a=Fr(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(El(a)))o.loading=5;else{e=Te({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ci.get(a))&&Em(e,n);var l=r=i.createElement("link");en(l),un(l,"link",e),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Kc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function CT(e,t){us.X(e,t);var n=qr;if(n&&e){var i=br(n).hoistableScripts,s=Yr(e),a=i.get(s);a||(a=n.querySelector(Al(s)),a||(e=Te({src:e,async:!0},t),(t=ci.get(s))&&Am(e,t),a=n.createElement("script"),en(a),un(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function RT(e,t){us.M(e,t);var n=qr;if(n&&e){var i=br(n).hoistableScripts,s=Yr(e),a=i.get(s);a||(a=n.querySelector(Al(s)),a||(e=Te({src:e,async:!0,type:"module"},t),(t=ci.get(s))&&Am(e,t),a=n.createElement("script"),en(a),un(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function j_(e,t,n,i){var s=(s=zs.current)?Tu(s):null;if(!s)throw Error(tt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Fr(n.href),n=br(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Fr(n.href);var a=br(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(El(e)))&&!a._p&&(r.instance=a,r.state.loading=5),ci.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ci.set(e,n),a||DT(s,e,n,r.state))),t&&i===null)throw Error(tt(528,""));return r}if(t&&i!==null)throw Error(tt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Yr(n),n=br(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(tt(444,e))}}function Fr(e){return'href="'+si(e)+'"'}function El(e){return'link[rel="stylesheet"]['+e+"]"}function Fx(e){return Te({},e,{"data-precedence":e.precedence,precedence:null})}function DT(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),un(t,"link",n),en(t),e.head.appendChild(t))}function Yr(e){return'[src="'+si(e)+'"]'}function Al(e){return"script[async]"+e}function $_(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+si(n.href)+'"]');if(i)return t.instance=i,en(i),i;var s=Te({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),en(i),un(i,"style",s),Kc(i,n.precedence,e),t.instance=i;case"stylesheet":s=Fr(n.href);var a=e.querySelector(El(s));if(a)return t.state.loading|=4,t.instance=a,en(a),a;i=Fx(n),(s=ci.get(s))&&Em(i,s),a=(e.ownerDocument||e).createElement("link"),en(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),un(a,"link",i),t.state.loading|=4,Kc(a,n.precedence,e),t.instance=a;case"script":return a=Yr(n.src),(s=e.querySelector(Al(a)))?(t.instance=s,en(s),s):(i=n,(s=ci.get(a))&&(i=Te({},n),Am(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),en(s),un(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(tt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Kc(i,n.precedence,e));return t.instance}function Kc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Em(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Am(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qc=null;function tv(e,t,n){if(Qc===null){var i=new Map,s=Qc=new Map;s.set(n,i)}else s=Qc,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[yl]||a[on]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function ev(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function UT(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Vx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function NT(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Fr(i.href),a=t.querySelector(El(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Eu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,en(a);return}a=t.ownerDocument||t,i=Fx(i),(s=ci.get(s))&&Em(i,s),a=a.createElement("link"),en(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),un(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Eu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Fd=0;function LT(e,t){return e.stylesheets&&e.count===0&&jc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&jc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Fd===0&&(Fd=62500*dT());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&jc(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Fd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Eu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Au=null;function jc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Au=new Map,t.forEach(IT,e),Au=null,Eu.call(e))}function IT(e,t){if(!(t.state.loading&4)){var n=Au.get(e);if(n)var i=n.get(null);else{n=new Map,Au.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Eu.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var fl={$$typeof:$i,Provider:null,Consumer:null,_currentValue:Aa,_currentValue2:Aa,_threadCount:0};function OT(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hd(0),this.hiddenUpdates=hd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Gx(e,t,n,i,s,a,r,o,l,c,d,p){return e=new OT(e,t,n,r,l,c,d,p,o),t=1,a===!0&&(t|=24),a=Bn(3,null,null,t),e.current=a,a.stateNode=e,t=jp(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},em(a),e}function Hx(e){return e?(e=yr,e):yr}function kx(e,t,n,i,s,a){s=Hx(s),i.context===null?i.context=s:i.pendingContext=s,i=Vs(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Gs(e,i,t),n!==null&&(Dn(n,e,t),qo(n,e,t))}function nv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wm(e,t){nv(e,t),(e=e.alternate)&&nv(e,t)}function Xx(e){if(e.tag===13||e.tag===31){var t=Fa(e,67108864);t!==null&&Dn(t,e,67108864),wm(e,67108864)}}function iv(e){if(e.tag===13||e.tag===31){var t=Hn();t=zp(t);var n=Fa(e,t);n!==null&&Dn(n,e,t),wm(e,t)}}var wu=!0;function PT(e,t,n,i){var s=Pt.T;Pt.T=null;var a=ae.p;try{ae.p=2,Cm(e,t,n,i)}finally{ae.p=a,Pt.T=s}}function BT(e,t,n,i){var s=Pt.T;Pt.T=null;var a=ae.p;try{ae.p=8,Cm(e,t,n,i)}finally{ae.p=a,Pt.T=s}}function Cm(e,t,n,i){if(wu){var s=Lp(i);if(s===null)Bd(e,t,i,Cu,n),sv(e,i);else if(FT(s,e,t,n,i))i.stopPropagation();else if(sv(e,i),t&4&&-1<zT.indexOf(e)){for(;s!==null;){var a=Hr(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=ba(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Gn(r);o.entanglements[1]|=l,r&=~l}Li(a),(se&6)===0&&(_u=Fn()+500,Tl(0,!1))}}break;case 31:case 13:o=Fa(a,2),o!==null&&Dn(o,a,2),Gu(),wm(a,2)}if(a=Lp(i),a===null&&Bd(e,t,i,Cu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Bd(e,t,i,null,n)}}function Lp(e){return e=Hp(e),Rm(e)}var Cu=null;function Rm(e){if(Cu=null,e=dr(e),e!==null){var t=ml(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=uv(t),e!==null)return e;e=null}else if(n===31){if(e=hv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Cu=e,null}function Wx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Eb()){case mv:return 2;case gv:return 8;case iu:case Ab:return 32;case _v:return 268435456;default:return 32}default:return 32}}var Ip=!1,Xs=null,Ws=null,qs=null,dl=new Map,pl=new Map,Ns=[],zT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sv(e,t){switch(e){case"focusin":case"focusout":Xs=null;break;case"dragenter":case"dragleave":Ws=null;break;case"mouseover":case"mouseout":qs=null;break;case"pointerover":case"pointerout":dl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(t.pointerId)}}function Oo(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Hr(t),t!==null&&Xx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function FT(e,t,n,i,s){switch(t){case"focusin":return Xs=Oo(Xs,e,t,n,i,s),!0;case"dragenter":return Ws=Oo(Ws,e,t,n,i,s),!0;case"mouseover":return qs=Oo(qs,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return dl.set(a,Oo(dl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,pl.set(a,Oo(pl.get(a)||null,e,t,n,i,s)),!0}return!1}function qx(e){var t=dr(e.target);if(t!==null){var n=ml(t);if(n!==null){if(t=n.tag,t===13){if(t=uv(n),t!==null){e.blockedOn=t,G0(e.priority,function(){iv(n)});return}}else if(t===31){if(t=hv(n),t!==null){e.blockedOn=t,G0(e.priority,function(){iv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $c(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Lp(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);jd=i,n.target.dispatchEvent(i),jd=null}else return t=Hr(n),t!==null&&Xx(t),e.blockedOn=n,!1;t.shift()}return!0}function av(e,t,n){$c(e)&&n.delete(t)}function VT(){Ip=!1,Xs!==null&&$c(Xs)&&(Xs=null),Ws!==null&&$c(Ws)&&(Ws=null),qs!==null&&$c(qs)&&(qs=null),dl.forEach(av),pl.forEach(av)}function Bc(e,t){e.blockedOn===t&&(e.blockedOn=null,Ip||(Ip=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,VT)))}var zc=null;function rv(e){zc!==e&&(zc=e,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,function(){zc===e&&(zc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Rm(i||n)===null)continue;break}var a=Hr(n);a!==null&&(e.splice(t,3),t-=3,pp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Vr(e){function t(l){return Bc(l,e)}Xs!==null&&Bc(Xs,e),Ws!==null&&Bc(Ws,e),qs!==null&&Bc(qs,e),dl.forEach(t),pl.forEach(t);for(var n=0;n<Ns.length;n++){var i=Ns[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ns.length&&(n=Ns[0],n.blockedOn===null);)qx(n),n.blockedOn===null&&Ns.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Un]||null;if(typeof a=="function")r||rv(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Un]||null)o=r.formAction;else if(Rm(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),rv(n)}}}function Yx(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Dm(e){this._internalRoot=e}Xu.prototype.render=Dm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(tt(409));var n=t.current,i=Hn();kx(n,i,e,t,null,null)};Xu.prototype.unmount=Dm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kx(e.current,2,null,e,null,null),Gu(),t[Gr]=null}};function Xu(e){this._internalRoot=e}Xu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ns.length&&t!==0&&t<Ns[n].priority;n++);Ns.splice(n,0,e),n===0&&qx(e)}};var ov=lv.version;if(ov!=="19.2.6")throw Error(tt(527,ov,"19.2.6"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(tt(188)):(e=Object.keys(e).join(","),Error(tt(268,e)));return e=vb(t),e=e!==null?fv(e):null,e=e===null?null:e.stateNode,e};var GT={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:Pt,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Po=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Po.isDisabled&&Po.supportsFiber))try{gl=Po.inject(GT),Vn=Po}catch{}var Po;Wu.createRoot=function(e,t){if(!cv(e))throw Error(tt(299));var n=!1,i="",s=zy,a=Fy,r=Vy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Gx(e,1,!1,null,null,n,i,null,s,a,r,Yx),e[Gr]=t.current,Tm(e),new Dm(t)};Wu.hydrateRoot=function(e,t,n){if(!cv(e))throw Error(tt(299));var i=!1,s="",a=zy,r=Fy,o=Vy,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Gx(e,1,!0,t,n??null,i,s,l,a,r,o,Yx),t.context=Hx(null),n=t.current,i=Hn(),i=zp(i),s=Vs(i),s.callback=null,Gs(n,s,i),n=i,t.current.lanes=n,vl(t,n),Li(t),e[Gr]=t.current,Tm(e),new Xu(t)};Wu.version="19.2.6"});var Qx=Ai((O3,Kx)=>{"use strict";function Jx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jx)}catch(e){console.error(e)}}Jx(),Kx.exports=Zx()});var IM=Ai(kf=>{"use strict";var E3=Symbol.for("react.transitional.element"),A3=Symbol.for("react.fragment");function LM(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:E3,type:e,key:i,ref:t!==void 0?t:null,props:n}}kf.Fragment=A3;kf.jsx=LM;kf.jsxs=LM});var fc=Ai((mN,OM)=>{"use strict";OM.exports=IM()});var PM=er(Qx(),1);var ya=er(yc(),1);var yS=0,cg=1,xS=2;var $l=1,qh=2,yo=3,_s=0,En=1,hi=2,Gi=0,Ya=1,ug=2,hg=3,fg=4,SS=5;var ra=100,MS=101,bS=102,TS=103,ES=104,AS=200,wS=201,CS=202,RS=203,dh=204,ph=205,DS=206,US=207,NS=208,LS=209,IS=210,OS=211,PS=212,BS=213,zS=214,mh=0,gh=1,_h=2,Za=3,vh=4,yh=5,xh=6,Sh=7,dg=0,FS=1,VS=2,xi=0,pg=1,mg=2,gg=3,tc=4,_g=5,vg=6,yg=7;var xg=300,pa=301,Ka=302,Yh=303,Zh=304,ec=306,Mh=1e3,Pi=1001,bh=1002,an=1003,GS=1004;var nc=1005;var hn=1006,Jh=1007;var ma=1008;var Ln=1009,Sg=1010,Mg=1011,xo=1012,Kh=1013,Si=1014,Mi=1015,Hi=1016,Qh=1017,jh=1018,So=1020,bg=35902,Tg=35899,Eg=1021,Ag=1022,fi=1023,zi=1026,ga=1027,wg=1028,$h=1029,_a=1030,tf=1031;var ef=1033,ic=33776,sc=33777,ac=33778,rc=33779,nf=35840,sf=35841,af=35842,rf=35843,of=36196,lf=37492,cf=37496,uf=37488,hf=37489,oc=37490,ff=37491,df=37808,pf=37809,mf=37810,gf=37811,_f=37812,vf=37813,yf=37814,xf=37815,Sf=37816,Mf=37817,bf=37818,Tf=37819,Ef=37820,Af=37821,wf=36492,Cf=36494,Rf=36495,Df=36283,Uf=36284,lc=36285,Nf=36286;var Ll=2300,Th=2301,fh=2302,$m=2303,tg=2400,eg=2401,ng=2402;var HS=3200;var Lf=0,kS=1,Ss="",gn="srgb",Il="srgb-linear",Ol="linear",oe="srgb";var Wa=7680;var ig=519,XS=512,WS=513,qS=514,If=515,YS=516,ZS=517,Of=518,JS=519,sg=35044;var Cg="300 es",yi=2e3,lo=2001;function HT(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function kT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Pl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function KS(){let e=Pl("canvas");return e.style.display="block",e}var jx={},co=null;function Rg(...e){let t="THREE."+e.shift();co?co("log",t,...e):console.log(t,...e)}function QS(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Dt(...e){e=QS(e);let t="THREE."+e.shift();if(co)co("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function It(...e){e=QS(e);let t="THREE."+e.shift();if(co)co("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function qa(...e){let t=e.join(" ");t in jx||(jx[t]=!0,Dt(...e))}function jS(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var $S={[mh]:gh,[_h]:xh,[vh]:Sh,[Za]:yh,[gh]:mh,[xh]:_h,[Sh]:vh,[yh]:Za},Fi=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$x=1234567,Ul=Math.PI/180,uo=180/Math.PI;function Mo(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[e&255]+pn[e>>8&255]+pn[e>>16&255]+pn[e>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function Kt(e,t,n){return Math.max(t,Math.min(n,e))}function Dg(e,t){return(e%t+t)%t}function XT(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function WT(e,t,n){return e!==t?(n-e)/(t-e):0}function Nl(e,t,n){return(1-n)*e+n*t}function qT(e,t,n,i){return Nl(e,t,1-Math.exp(-n*i))}function YT(e,t=1){return t-Math.abs(Dg(e,t*2)-t)}function ZT(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function JT(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function KT(e,t){return e+Math.floor(Math.random()*(t-e+1))}function QT(e,t){return e+Math.random()*(t-e)}function jT(e){return e*(.5-Math.random())}function $T(e){e!==void 0&&($x=e);let t=$x+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tE(e){return e*Ul}function eE(e){return e*uo}function nE(e){return(e&e-1)===0&&e!==0}function iE(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function sE(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function aE(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),d=r((t+i)/2),p=a((t-i)/2),u=r((t-i)/2),f=a((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":e.set(o*d,l*p,l*u,o*c);break;case"YZY":e.set(l*u,o*d,l*p,o*c);break;case"ZXZ":e.set(l*p,l*u,o*d,o*c);break;case"XZX":e.set(o*d,l*_,l*f,o*c);break;case"YXY":e.set(l*f,o*d,l*_,o*c);break;case"ZYZ":e.set(l*_,l*f,o*d,o*c);break;default:Dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ro(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ug={DEG2RAD:Ul,RAD2DEG:uo,generateUUID:Mo,clamp:Kt,euclideanModulo:Dg,mapLinear:XT,inverseLerp:WT,lerp:Nl,damp:qT,pingpong:YT,smoothstep:ZT,smootherstep:JT,randInt:KT,randFloat:QT,randFloatSpread:jT,seededRandom:$T,degToRad:tE,radToDeg:eE,isPowerOfTwo:nE,ceilPowerOfTwo:iE,floorPowerOfTwo:sE,setQuaternionFromProperEuler:aE,normalize:bn,denormalize:ro},Qt=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Kt(this.x,t.x,n.x),this.y=Kt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Kt(this.x,t,n),this.y=Kt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vi=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],d=i[s+2],p=i[s+3],u=a[r+0],f=a[r+1],_=a[r+2],T=a[r+3];if(p!==T||l!==u||c!==f||d!==_){let g=l*u+c*f+d*_+p*T;g<0&&(u=-u,f=-f,_=-_,T=-T,g=-g);let h=1-o;if(g<.9995){let v=Math.acos(g),S=Math.sin(v);h=Math.sin(h*v)/S,o=Math.sin(o*v)/S,l=l*h+u*o,c=c*h+f*o,d=d*h+_*o,p=p*h+T*o}else{l=l*h+u*o,c=c*h+f*o,d=d*h+_*o,p=p*h+T*o;let v=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=v,c*=v,d*=v,p*=v}}t[n]=l,t[n+1]=c,t[n+2]=d,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],p=a[r],u=a[r+1],f=a[r+2],_=a[r+3];return t[n]=o*_+d*p+l*f-c*u,t[n+1]=l*_+d*u+c*p-o*f,t[n+2]=c*_+d*f+o*u-l*p,t[n+3]=d*_-o*p-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),p=o(a/2),u=l(i/2),f=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=u*d*p+c*f*_,this._y=c*f*p-u*d*_,this._z=c*d*_+u*f*p,this._w=c*d*p-u*f*_;break;case"YXZ":this._x=u*d*p+c*f*_,this._y=c*f*p-u*d*_,this._z=c*d*_-u*f*p,this._w=c*d*p+u*f*_;break;case"ZXY":this._x=u*d*p-c*f*_,this._y=c*f*p+u*d*_,this._z=c*d*_+u*f*p,this._w=c*d*p-u*f*_;break;case"ZYX":this._x=u*d*p-c*f*_,this._y=c*f*p+u*d*_,this._z=c*d*_-u*f*p,this._w=c*d*p+u*f*_;break;case"YZX":this._x=u*d*p+c*f*_,this._y=c*f*p+u*d*_,this._z=c*d*_-u*f*p,this._w=c*d*p-u*f*_;break;case"XZY":this._x=u*d*p-c*f*_,this._y=c*f*p-u*d*_,this._z=c*d*_+u*f*p,this._w=c*d*p+u*f*_;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],d=n[6],p=n[10],u=i+o+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(i>o&&i>p){let f=2*Math.sqrt(1+i-o-p);this._w=(d-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-i-p);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+p-i-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+r*o+s*c-a*l,this._y=s*d+r*l+a*o-i*c,this._z=a*d+r*c+i*l-s*o,this._w=r*d-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(tS.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(tS.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),d=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*d,this.y=i+l*d+o*c-a*p,this.z=s+l*p+a*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Kt(this.x,t.x,n.x),this.y=Kt(this.y,t.y,n.y),this.z=Kt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Kt(this.x,t,n),this.y=Kt(this.y,t,n),this.z=Kt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Um.copy(this).projectOnVector(t),this.sub(Um)}reflect(t){return this.sub(Um.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Um=new z,tS=new Vi,Bt=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=n,d[4]=a,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],u=i[2],f=i[5],_=i[8],T=s[0],g=s[3],h=s[6],v=s[1],S=s[4],x=s[7],E=s[2],w=s[5],C=s[8];return a[0]=r*T+o*v+l*E,a[3]=r*g+o*S+l*w,a[6]=r*h+o*x+l*C,a[1]=c*T+d*v+p*E,a[4]=c*g+d*S+p*w,a[7]=c*h+d*x+p*C,a[2]=u*T+f*v+_*E,a[5]=u*g+f*S+_*w,a[8]=u*h+f*x+_*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return n*r*d-n*o*c-i*a*d+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=d*r-o*c,u=o*l-d*a,f=c*a-r*l,_=n*p+i*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/_;return t[0]=p*T,t[1]=(s*c-d*i)*T,t[2]=(o*i-s*r)*T,t[3]=u*T,t[4]=(d*n-s*l)*T,t[5]=(s*a-o*n)*T,t[6]=f*T,t[7]=(i*l-c*n)*T,t[8]=(r*n-i*a)*T,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return qa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nm.makeScale(t,n)),this}rotate(t){return qa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nm.makeRotation(-t)),this}translate(t,n){return qa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nm.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nm=new Bt,eS=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nS=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rE(){let e={enabled:!0,workingColorSpace:Il,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===oe&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===oe&&(s.r=oo(s.r),s.g=oo(s.g),s.b=oo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ss?Ol:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Il]:{primaries:t,whitePoint:i,transfer:Ol,toXYZ:eS,fromXYZ:nS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:eS,fromXYZ:nS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),e}var Jt=rE();function gs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function oo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Zr,Eh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Zr===void 0&&(Zr=Pl("canvas")),Zr.width=t.width,Zr.height=t.height;let s=Zr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Zr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Pl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=gs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(gs(n[i]/255)*255):n[i]=gs(n[i]);return{data:n,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},oE=0,ho=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=Mo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Lm(s[r].image)):a.push(Lm(s[r]))}else a=Lm(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Lm(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Eh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var lE=0,Im=new z,Tn=class e extends Fi{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Pi,s=Pi,a=hn,r=ma,o=fi,l=Ln,c=e.DEFAULT_ANISOTROPY,d=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Mo(),this.name="",this.source=new ho(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Im).x}get height(){return this.source.getSize(Im).y}get depth(){return this.source.getSize(Im).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Dt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Dt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mh:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case bh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mh:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case bh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=xg;Tn.DEFAULT_ANISOTROPY=1;var Re=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],d=l[4],p=l[8],u=l[1],f=l[5],_=l[9],T=l[2],g=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-T)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+T)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,x=(f+1)/2,E=(h+1)/2,w=(d+u)/4,C=(p+T)/4,y=(_+g)/4;return S>x&&S>E?S<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(S),s=w/i,a=C/i):x>E?x<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),i=w/s,a=y/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=C/a,s=y/a),this.set(i,s,a,n),this}let v=Math.sqrt((g-_)*(g-_)+(p-T)*(p-T)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(p-T)/v,this.z=(u-d)/v,this.w=Math.acos((c+f+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Kt(this.x,t.x,n.x),this.y=Kt(this.y,t.y,n.y),this.z=Kt(this.z,t.z,n.z),this.w=Kt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Kt(this.x,t,n),this.y=Kt(this.y,t,n),this.z=Kt(this.z,t,n),this.w=Kt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ah=class extends Fi{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Re(0,0,t,n),this.scissorTest=!1,this.viewport=new Re(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new Tn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new ho(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends Ah{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Bl=class extends Tn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wh=class extends Tn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ue=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,d,p,u,f,_,T,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,d,p,u,f,_,T,g)}set(t,n,i,s,a,r,o,l,c,d,p,u,f,_,T,g){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=p,h[14]=u,h[3]=f,h[7]=_,h[11]=T,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Jr.setFromMatrixColumn(t,0).length(),a=1/Jr.setFromMatrixColumn(t,1).length(),r=1/Jr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*d,f=r*p,_=o*d,T=o*p;n[0]=l*d,n[4]=-l*p,n[8]=c,n[1]=f+_*c,n[5]=u-T*c,n[9]=-o*l,n[2]=T-u*c,n[6]=_+f*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*d,f=l*p,_=c*d,T=c*p;n[0]=u+T*o,n[4]=_*o-f,n[8]=r*c,n[1]=r*p,n[5]=r*d,n[9]=-o,n[2]=f*o-_,n[6]=T+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*d,f=l*p,_=c*d,T=c*p;n[0]=u-T*o,n[4]=-r*p,n[8]=_+f*o,n[1]=f+_*o,n[5]=r*d,n[9]=T-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*d,f=r*p,_=o*d,T=o*p;n[0]=l*d,n[4]=_*c-f,n[8]=u*c+T,n[1]=l*p,n[5]=T*c+u,n[9]=f*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,f=r*c,_=o*l,T=o*c;n[0]=l*d,n[4]=T-u*p,n[8]=_*p+f,n[1]=p,n[5]=r*d,n[9]=-o*d,n[2]=-c*d,n[6]=f*p+_,n[10]=u-T*p}else if(t.order==="XZY"){let u=r*l,f=r*c,_=o*l,T=o*c;n[0]=l*d,n[4]=-p,n[8]=c*d,n[1]=u*p+T,n[5]=r*d,n[9]=f*p-_,n[2]=_*p-f,n[6]=o*d,n[10]=T*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cE,t,uE)}lookAt(t,n,i){let s=this.elements;return Wn.subVectors(t,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),$s.crossVectors(i,Wn),$s.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),$s.crossVectors(i,Wn)),$s.normalize(),qu.crossVectors(Wn,$s),s[0]=$s.x,s[4]=qu.x,s[8]=Wn.x,s[1]=$s.y,s[5]=qu.y,s[9]=Wn.y,s[2]=$s.z,s[6]=qu.z,s[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],u=i[9],f=i[13],_=i[2],T=i[6],g=i[10],h=i[14],v=i[3],S=i[7],x=i[11],E=i[15],w=s[0],C=s[4],y=s[8],A=s[12],R=s[1],D=s[5],B=s[9],K=s[13],J=s[2],V=s[6],Q=s[10],Z=s[14],et=s[3],rt=s[7],L=s[11],ut=s[15];return a[0]=r*w+o*R+l*J+c*et,a[4]=r*C+o*D+l*V+c*rt,a[8]=r*y+o*B+l*Q+c*L,a[12]=r*A+o*K+l*Z+c*ut,a[1]=d*w+p*R+u*J+f*et,a[5]=d*C+p*D+u*V+f*rt,a[9]=d*y+p*B+u*Q+f*L,a[13]=d*A+p*K+u*Z+f*ut,a[2]=_*w+T*R+g*J+h*et,a[6]=_*C+T*D+g*V+h*rt,a[10]=_*y+T*B+g*Q+h*L,a[14]=_*A+T*K+g*Z+h*ut,a[3]=v*w+S*R+x*J+E*et,a[7]=v*C+S*D+x*V+E*rt,a[11]=v*y+S*B+x*Q+E*L,a[15]=v*A+S*K+x*Z+E*ut,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],d=t[2],p=t[6],u=t[10],f=t[14],_=t[3],T=t[7],g=t[11],h=t[15],v=l*f-c*u,S=o*f-c*p,x=o*u-l*p,E=r*f-c*d,w=r*u-l*d,C=r*p-o*d;return n*(T*v-g*S+h*x)-i*(_*v-g*E+h*w)+s*(_*S-T*E+h*C)-a*(_*x-T*w+g*C)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],d=t[10];return n*(r*d-o*c)-i*(a*d-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=t[9],u=t[10],f=t[11],_=t[12],T=t[13],g=t[14],h=t[15],v=n*o-i*r,S=n*l-s*r,x=n*c-a*r,E=i*l-s*o,w=i*c-a*o,C=s*c-a*l,y=d*T-p*_,A=d*g-u*_,R=d*h-f*_,D=p*g-u*T,B=p*h-f*T,K=u*h-f*g,J=v*K-S*B+x*D+E*R-w*A+C*y;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/J;return t[0]=(o*K-l*B+c*D)*V,t[1]=(s*B-i*K-a*D)*V,t[2]=(T*C-g*w+h*E)*V,t[3]=(u*w-p*C-f*E)*V,t[4]=(l*R-r*K-c*A)*V,t[5]=(n*K-s*R+a*A)*V,t[6]=(g*x-_*C-h*S)*V,t[7]=(d*C-u*x+f*S)*V,t[8]=(r*B-o*R+c*y)*V,t[9]=(i*R-n*B-a*y)*V,t[10]=(_*w-T*x+h*v)*V,t[11]=(p*x-d*w-f*v)*V,t[12]=(o*A-r*D-l*y)*V,t[13]=(n*D-i*A+s*y)*V,t[14]=(T*S-_*E-g*v)*V,t[15]=(d*E-p*S+u*v)*V,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,d=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*r,0,c*l-s*o,d*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,d=r+r,p=o+o,u=a*c,f=a*d,_=a*p,T=r*d,g=r*p,h=o*p,v=l*c,S=l*d,x=l*p,E=i.x,w=i.y,C=i.z;return s[0]=(1-(T+h))*E,s[1]=(f+x)*E,s[2]=(_-S)*E,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(u+h))*w,s[6]=(g+v)*w,s[7]=0,s[8]=(_+S)*C,s[9]=(g-v)*C,s[10]=(1-(u+T))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Jr.set(s[0],s[1],s[2]).length(),o=Jr.set(s[4],s[5],s[6]).length(),l=Jr.set(s[8],s[9],s[10]).length();a<0&&(r=-r),gi.copy(this);let c=1/r,d=1/o,p=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=d,gi.elements[5]*=d,gi.elements[6]*=d,gi.elements[8]*=p,gi.elements[9]*=p,gi.elements[10]*=p,n.setFromRotationMatrix(gi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=yi,l=!1){let c=this.elements,d=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),f=(i+s)/(i-s),_,T;if(l)_=a/(r-a),T=r*a/(r-a);else if(o===yi)_=-(r+a)/(r-a),T=-2*r*a/(r-a);else if(o===lo)_=-r/(r-a),T=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=yi,l=!1){let c=this.elements,d=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),f=-(i+s)/(i-s),_,T;if(l)_=1/(r-a),T=r/(r-a);else if(o===yi)_=-2/(r-a),T=-(r+a)/(r-a);else if(o===lo)_=-1/(r-a),T=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Jr=new z,gi=new Ue,cE=new z(0,0,0),uE=new z(1,1,1),$s=new z,qu=new z,Wn=new z,iS=new Ue,sS=new Vi,vs=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],d=s[9],p=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return iS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(iS,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return sS.setFromEuler(this),this.setFromQuaternion(sS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vs.DEFAULT_ORDER="XYZ";var zl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hE=0,aS=new z,Kr=new Vi,hs=new Ue,Yu=new z,wl=new z,fE=new z,dE=new Vi,rS=new z(1,0,0),oS=new z(0,1,0),lS=new z(0,0,1),cS={type:"added"},pE={type:"removed"},Qr={type:"childadded",child:null},Om={type:"childremoved",child:null},vn=class e extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new z,n=new vs,i=new Vi,s=new z(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Bt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Kr.setFromAxisAngle(t,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(t,n){return Kr.setFromAxisAngle(t,n),this.quaternion.premultiply(Kr),this}rotateX(t){return this.rotateOnAxis(rS,t)}rotateY(t){return this.rotateOnAxis(oS,t)}rotateZ(t){return this.rotateOnAxis(lS,t)}translateOnAxis(t,n){return aS.copy(t).applyQuaternion(this.quaternion),this.position.add(aS.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(rS,t)}translateY(t){return this.translateOnAxis(oS,t)}translateZ(t){return this.translateOnAxis(lS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Yu.copy(t):Yu.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),wl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hs.lookAt(wl,Yu,this.up):hs.lookAt(Yu,wl,this.up),this.quaternion.setFromRotationMatrix(hs),s&&(hs.extractRotation(s.matrixWorld),Kr.setFromRotationMatrix(hs),this.quaternion.premultiply(Kr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cS),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(pE),Om.child=t,this.dispatchEvent(Om),Om.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hs.multiply(t.parent.matrixWorld)),t.applyMatrix4(hs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cS),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,t,fE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,dE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),p=r(t.shapes),u=r(t.skeletons),f=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};vn.DEFAULT_UP=new z(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bi=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},mE={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let T of t.hand.values()){let g=n.getJointPose(T,i),h=this._getHandJoint(c,T);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mE)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Bi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},tM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ta={h:0,s:0,l:0},Zu={h:0,s:0,l:0};function Pm(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Ht=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Jt.workingColorSpace){if(t=Dg(t,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Pm(r,a,t+1/3),this.g=Pm(r,a,t),this.b=Pm(r,a,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,n=gn){function i(a){a!==void 0&&parseFloat(a)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Dt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=gn){let i=tM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}copyLinearToSRGB(t){return this.r=oo(t.r),this.g=oo(t.g),this.b=oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return Jt.workingToColorSpace(mn.copy(this),t),Math.round(Kt(mn.r*255,0,255))*65536+Math.round(Kt(mn.g*255,0,255))*256+Math.round(Kt(mn.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Jt.workingColorSpace){Jt.workingToColorSpace(mn.copy(this),n);let i=mn.r,s=mn.g,a=mn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,d=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=d<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,n=Jt.workingColorSpace){return Jt.workingToColorSpace(mn.copy(this),n),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=gn){Jt.workingToColorSpace(mn.copy(this),t);let n=mn.r,i=mn.g,s=mn.b;return t!==gn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ta),this.setHSL(ta.h+t,ta.s+n,ta.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ta),t.getHSL(Zu);let i=Nl(ta.h,Zu.h,n),s=Nl(ta.s,Zu.s,n),a=Nl(ta.l,Zu.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Ht;Ht.NAMES=tM;var Fl=class e{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=n,this.far=i}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vl=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vs,this.environmentIntensity=1,this.environmentRotation=new vs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},_i=new z,fs=new z,Bm=new z,ds=new z,jr=new z,$r=new z,uS=new z,zm=new z,Fm=new z,Vm=new z,Gm=new Re,Hm=new Re,km=new Re,aa=class e{constructor(t=new z,n=new z,i=new z){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),_i.subVectors(t,n),s.cross(_i);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){_i.subVectors(s,n),fs.subVectors(i,n),Bm.subVectors(t,n);let r=_i.dot(_i),o=_i.dot(fs),l=_i.dot(Bm),c=fs.dot(fs),d=fs.dot(Bm),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,f=(c*l-o*d)*u,_=(r*d-o*l)*u;return a.set(1-f-_,_,f)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,ds)===null?!1:ds.x>=0&&ds.y>=0&&ds.x+ds.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,ds)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ds.x),l.addScaledVector(r,ds.y),l.addScaledVector(o,ds.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Gm.setScalar(0),Hm.setScalar(0),km.setScalar(0),Gm.fromBufferAttribute(t,n),Hm.fromBufferAttribute(t,i),km.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Gm,a.x),r.addScaledVector(Hm,a.y),r.addScaledVector(km,a.z),r}static isFrontFacing(t,n,i,s){return _i.subVectors(i,n),fs.subVectors(t,n),_i.cross(fs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),fs.subVectors(this.a,this.b),_i.cross(fs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;jr.subVectors(s,i),$r.subVectors(a,i),zm.subVectors(t,i);let l=jr.dot(zm),c=$r.dot(zm);if(l<=0&&c<=0)return n.copy(i);Fm.subVectors(t,s);let d=jr.dot(Fm),p=$r.dot(Fm);if(d>=0&&p<=d)return n.copy(s);let u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),n.copy(i).addScaledVector(jr,r);Vm.subVectors(t,a);let f=jr.dot(Vm),_=$r.dot(Vm);if(_>=0&&f<=_)return n.copy(a);let T=f*c-l*_;if(T<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector($r,o);let g=d*_-f*p;if(g<=0&&p-d>=0&&f-_>=0)return uS.subVectors(a,s),o=(p-d)/(p-d+(f-_)),n.copy(s).addScaledVector(uS,o);let h=1/(g+T+u);return r=T*h,o=u*h,n.copy(i).addScaledVector(jr,r).addScaledVector($r,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},oa=class{constructor(t=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(vi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(vi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=vi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,vi):vi.fromBufferAttribute(a,r),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ju.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ju.copy(i.boundingBox)),Ju.applyMatrix4(t.matrixWorld),this.union(Ju)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cl),Ku.subVectors(this.max,Cl),to.subVectors(t.a,Cl),eo.subVectors(t.b,Cl),no.subVectors(t.c,Cl),ea.subVectors(eo,to),na.subVectors(no,eo),Ga.subVectors(to,no);let n=[0,-ea.z,ea.y,0,-na.z,na.y,0,-Ga.z,Ga.y,ea.z,0,-ea.x,na.z,0,-na.x,Ga.z,0,-Ga.x,-ea.y,ea.x,0,-na.y,na.x,0,-Ga.y,Ga.x,0];return!Xm(n,to,eo,no,Ku)||(n=[1,0,0,0,1,0,0,0,1],!Xm(n,to,eo,no,Ku))?!1:(Qu.crossVectors(ea,na),n=[Qu.x,Qu.y,Qu.z],Xm(n,to,eo,no,Ku))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ps),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ps=[new z,new z,new z,new z,new z,new z,new z,new z],vi=new z,Ju=new oa,to=new z,eo=new z,no=new z,ea=new z,na=new z,Ga=new z,Cl=new z,Ku=new z,Qu=new z,Ha=new z;function Xm(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Ha.fromArray(e,a);let o=s.x*Math.abs(Ha.x)+s.y*Math.abs(Ha.y)+s.z*Math.abs(Ha.z),l=t.dot(Ha),c=n.dot(Ha),d=i.dot(Ha);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Je=new z,ju=new Qt,gE=0,Yn=class extends Fi{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=sg,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ju.fromBufferAttribute(this,n),ju.applyMatrix3(t),this.setXY(n,ju.x,ju.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Je.fromBufferAttribute(this,n),Je.applyMatrix3(t),this.setXYZ(n,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Je.fromBufferAttribute(this,n),Je.applyMatrix4(t),this.setXYZ(n,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Je.fromBufferAttribute(this,n),Je.applyNormalMatrix(t),this.setXYZ(n,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Je.fromBufferAttribute(this,n),Je.transformDirection(t),this.setXYZ(n,Je.x,Je.y,Je.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=ro(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=bn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ro(n,this.array)),n}setX(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ro(n,this.array)),n}setY(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ro(n,this.array)),n}setZ(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ro(n,this.array)),n}setW(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),s=bn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),s=bn(s,this.array),a=bn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sg&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Gl=class extends Yn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Hl=class extends Yn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var ke=class extends Yn{constructor(t,n,i){super(new Float32Array(t),n,i)}},_E=new oa,Rl=new z,Wm=new z,po=class{constructor(t=new z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):_E.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rl.subVectors(t,this.center);let n=Rl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Rl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rl.copy(t.center).add(Wm)),this.expandByPoint(Rl.copy(t.center).sub(Wm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vE=0,ui=new Ue,qm=new vn,io=new z,qn=new oa,Dl=new oa,sn=new z,Jn=class e extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=Mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(HT(t)?Hl:Gl)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Bt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,n,i){return ui.makeTranslation(t,n,i),this.applyMatrix4(ui),this}scale(t,n,i){return ui.makeScale(t,n,i),this.applyMatrix4(ui),this}lookAt(t){return qm.lookAt(t),qm.updateMatrix(),this.applyMatrix4(qm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ke(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];qn.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Dl.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(qn.min,Dl.min),qn.expandByPoint(sn),sn.addVectors(qn.max,Dl.max),qn.expandByPoint(sn)):(qn.expandByPoint(Dl.min),qn.expandByPoint(Dl.max))}qn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)sn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(sn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)sn.fromBufferAttribute(o,c),l&&(io.fromBufferAttribute(t,c),sn.add(io)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Yn(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new z,l[y]=new z;let c=new z,d=new z,p=new z,u=new Qt,f=new Qt,_=new Qt,T=new z,g=new z;function h(y,A,R){c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,A),p.fromBufferAttribute(i,R),u.fromBufferAttribute(a,y),f.fromBufferAttribute(a,A),_.fromBufferAttribute(a,R),d.sub(c),p.sub(c),f.sub(u),_.sub(u);let D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(T.copy(d).multiplyScalar(_.y).addScaledVector(p,-f.y).multiplyScalar(D),g.copy(p).multiplyScalar(f.x).addScaledVector(d,-_.x).multiplyScalar(D),o[y].add(T),o[A].add(T),o[R].add(T),l[y].add(g),l[A].add(g),l[R].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,A=v.length;y<A;++y){let R=v[y],D=R.start,B=R.count;for(let K=D,J=D+B;K<J;K+=3)h(t.getX(K+0),t.getX(K+1),t.getX(K+2))}let S=new z,x=new z,E=new z,w=new z;function C(y){E.fromBufferAttribute(s,y),w.copy(E);let A=o[y];S.copy(A),S.sub(E.multiplyScalar(E.dot(A))).normalize(),x.crossVectors(w,A);let D=x.dot(l[y])<0?-1:1;r.setXYZW(y,S.x,S.y,S.z,D)}for(let y=0,A=v.length;y<A;++y){let R=v[y],D=R.start,B=R.count;for(let K=D,J=D+B;K<J;K+=3)C(t.getX(K+0)),C(t.getX(K+1)),C(t.getX(K+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new z,a=new z,r=new z,o=new z,l=new z,c=new z,d=new z,p=new z;if(t)for(let u=0,f=t.count;u<f;u+=3){let _=t.getX(u+0),T=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,T),r.fromBufferAttribute(n,g),d.subVectors(r,a),p.subVectors(s,a),d.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(T,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),d.subVectors(r,a),p.subVectors(s,a),d.cross(p),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)sn.fromBufferAttribute(t,n),sn.normalize(),t.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function t(o,l){let c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d),f=0,_=0;for(let T=0,g=l.length;T<g;T++){o.isInterleavedBufferAttribute?f=l[T]*o.data.stride+o.offset:f=l[T]*d;for(let h=0;h<d;h++)u[_++]=c[f++]}return new Yn(u,d,p)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let d=0,p=c.length;d<p;d++){let u=c[d],f=t(u,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){let f=c[p];d.push(f.toJSON(t.data))}d.length>0&&(s[l]=d,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(n))}let a=t.morphAttributes;for(let c in a){let d=[],p=a[c];for(let u=0,f=p.length;u<f;u++)d.push(p[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,d=r.length;c<d;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yE=0,la=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Mo(),this.name="",this.type="Material",this.blending=Ya,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=ph,this.blendEquation=ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Dt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Dt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ya&&(i.blending=this.blending),this.side!==_s&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dh&&(i.blendSrc=this.blendSrc),this.blendDst!==ph&&(i.blendDst=this.blendDst),this.blendEquation!==ra&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ig&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Qt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ms=new z,Ym=new z,$u=new z,ia=new z,Zm=new z,th=new z,Jm=new z,Ch=class{constructor(t=new z,n=new z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ms)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=ms.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ms.copy(this.origin).addScaledVector(this.direction,n),ms.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Ym.copy(t).add(n).multiplyScalar(.5),$u.copy(n).sub(t).normalize(),ia.copy(this.origin).sub(Ym);let a=t.distanceTo(n)*.5,r=-this.direction.dot($u),o=ia.dot(this.direction),l=-ia.dot($u),c=ia.lengthSq(),d=Math.abs(1-r*r),p,u,f,_;if(d>0)if(p=r*l-o,u=r*o-l,_=a*d,p>=0)if(u>=-_)if(u<=_){let T=1/d;p*=T,u*=T,f=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),f=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),f=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Ym).addScaledVector($u,u),f}intersectSphere(t,n){ms.subVectors(t.center,this.origin);let i=ms.dot(this.direction),s=ms.dot(ms)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),d>=0?(a=(t.min.y-u.y)*d,r=(t.max.y-u.y)*d):(a=(t.max.y-u.y)*d,r=(t.min.y-u.y)*d),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,ms)!==null}intersectTriangle(t,n,i,s,a){Zm.subVectors(n,t),th.subVectors(i,t),Jm.crossVectors(Zm,th);let r=this.direction.dot(Jm),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ia.subVectors(this.origin,t);let l=o*this.direction.dot(th.crossVectors(ia,th));if(l<0)return null;let c=o*this.direction.dot(Zm.cross(ia));if(c<0||l+c>r)return null;let d=-o*ia.dot(Jm);return d<0?null:this.at(d/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ys=class extends la{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vs,this.combine=dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},hS=new Ue,ka=new Ch,eh=new po,fS=new z,nh=new z,ih=new z,sh=new z,Km=new z,ah=new z,dS=new z,rh=new z,Ne=class extends vn{constructor(t=new Jn,n=new ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){ah.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let d=o[l],p=a[l];d!==0&&(Km.fromBufferAttribute(p,t),r?ah.addScaledVector(Km,d):ah.addScaledVector(Km.sub(n),d))}n.add(ah)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eh.copy(i.boundingSphere),eh.applyMatrix4(a),ka.copy(t.ray).recast(t.near),!(eh.containsPoint(ka.origin)===!1&&(ka.intersectSphere(eh,fS)===null||ka.origin.distanceToSquared(fS)>(t.far-t.near)**2))&&(hS.copy(a).invert(),ka.copy(t.ray).applyMatrix4(hS),!(i.boundingBox!==null&&ka.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,ka)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,u=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,T=u.length;_<T;_++){let g=u[_],h=r[g.materialIndex],v=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,E=S;x<E;x+=3){let w=o.getX(x),C=o.getX(x+1),y=o.getX(x+2);s=oh(this,h,t,i,c,d,p,w,C,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,f.start),T=Math.min(o.count,f.start+f.count);for(let g=_,h=T;g<h;g+=3){let v=o.getX(g),S=o.getX(g+1),x=o.getX(g+2);s=oh(this,r,t,i,c,d,p,v,S,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,T=u.length;_<T;_++){let g=u[_],h=r[g.materialIndex],v=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,E=S;x<E;x+=3){let w=x,C=x+1,y=x+2;s=oh(this,h,t,i,c,d,p,w,C,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,f.start),T=Math.min(l.count,f.start+f.count);for(let g=_,h=T;g<h;g+=3){let v=g,S=g+1,x=g+2;s=oh(this,r,t,i,c,d,p,v,S,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function xE(e,t,n,i,s,a,r,o){let l;if(t.side===En?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===_s,o),l===null)return null;rh.copy(o),rh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(rh);return c<n.near||c>n.far?null:{distance:c,point:rh.clone(),object:e}}function oh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,nh),e.getVertexPosition(l,ih),e.getVertexPosition(c,sh);let d=xE(e,t,n,i,nh,ih,sh,dS);if(d){let p=new z;aa.getBarycoord(dS,nh,ih,sh,p),s&&(d.uv=aa.getInterpolatedAttribute(s,o,l,c,p,new Qt)),a&&(d.uv1=aa.getInterpolatedAttribute(a,o,l,c,p,new Qt)),r&&(d.normal=aa.getInterpolatedAttribute(r,o,l,c,p,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new z,materialIndex:0};aa.getNormal(nh,ih,sh,u.normal),d.face=u,d.barycoord=p}return d}var Rh=class extends Tn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=an,d=an,p,u){super(null,r,o,l,c,d,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qm=new z,SE=new z,ME=new Bt,Oi=class{constructor(t=new z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Qm.subVectors(i,n).cross(SE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(Qm),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||ME.getNormalMatrix(t),s=this.coplanarPoint(Qm).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xa=new po,bE=new Qt(.5,.5),lh=new z,mo=class{constructor(t=new Oi,n=new Oi,i=new Oi,s=new Oi,a=new Oi,r=new Oi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=yi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],d=a[4],p=a[5],u=a[6],f=a[7],_=a[8],T=a[9],g=a[10],h=a[11],v=a[12],S=a[13],x=a[14],E=a[15];if(s[0].setComponents(c-r,f-d,h-_,E-v).normalize(),s[1].setComponents(c+r,f+d,h+_,E+v).normalize(),s[2].setComponents(c+o,f+p,h+T,E+S).normalize(),s[3].setComponents(c-o,f-p,h-T,E-S).normalize(),i)s[4].setComponents(l,u,g,x).normalize(),s[5].setComponents(c-l,f-u,h-g,E-x).normalize();else if(s[4].setComponents(c-l,f-u,h-g,E-x).normalize(),n===yi)s[5].setComponents(c+l,f+u,h+g,E+x).normalize();else if(n===lo)s[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xa.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xa)}intersectsSprite(t){Xa.center.set(0,0,0);let n=bE.distanceTo(t.center);return Xa.radius=.7071067811865476+n,Xa.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xa)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(lh.x=s.normal.x>0?t.max.x:t.min.x,lh.y=s.normal.y>0?t.max.y:t.min.y,lh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var kl=class extends Tn{constructor(t=[],n=pa,i,s,a,r,o,l,c,d){super(t,n,i,s,a,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xl=class extends Tn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xs=class extends Tn{constructor(t,n,i=Si,s,a,r,o=an,l=an,c,d=zi,p=1){if(d!==zi&&d!==ga)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ho(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Dh=class extends xs{constructor(t,n=Si,i=pa,s,a,r=an,o=an,l,c=zi){let d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Wl=class extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ca=class e extends Jn{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],d=[],p=[],u=0,f=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(p,2));function _(T,g,h,v,S,x,E,w,C,y,A){let R=x/C,D=E/y,B=x/2,K=E/2,J=w/2,V=C+1,Q=y+1,Z=0,et=0,rt=new z;for(let L=0;L<Q;L++){let ut=L*D-K;for(let ht=0;ht<V;ht++){let jt=ht*R-B;rt[T]=jt*v,rt[g]=ut*S,rt[h]=J,c.push(rt.x,rt.y,rt.z),rt[T]=0,rt[g]=0,rt[h]=w>0?1:-1,d.push(rt.x,rt.y,rt.z),p.push(ht/C),p.push(1-L/y),Z+=1}}for(let L=0;L<y;L++)for(let ut=0;ut<C;ut++){let ht=u+ut+V*L,jt=u+ut+V*(L+1),ye=u+(ut+1)+V*(L+1),$t=u+(ut+1)+V*L;l.push(ht,jt,$t),l.push(jt,ye,$t),et+=6}o.addGroup(f,et,A),f+=et,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ua=class e extends Jn{constructor(t=1,n=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let d=[],p=[],u=[],f=[],_=0,T=[],g=i/2,h=0;v(),r===!1&&(t>0&&S(!0),n>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(f,2));function v(){let x=new z,E=new z,w=0,C=(n-t)/i;for(let y=0;y<=a;y++){let A=[],R=y/a,D=R*(n-t)+t;for(let B=0;B<=s;B++){let K=B/s,J=K*l+o,V=Math.sin(J),Q=Math.cos(J);E.x=D*V,E.y=-R*i+g,E.z=D*Q,p.push(E.x,E.y,E.z),x.set(V,C,Q).normalize(),u.push(x.x,x.y,x.z),f.push(K,1-R),A.push(_++)}T.push(A)}for(let y=0;y<s;y++)for(let A=0;A<a;A++){let R=T[A][y],D=T[A+1][y],B=T[A+1][y+1],K=T[A][y+1];(t>0||A!==0)&&(d.push(R,D,K),w+=3),(n>0||A!==a-1)&&(d.push(D,B,K),w+=3)}c.addGroup(h,w,0),h+=w}function S(x){let E=_,w=new Qt,C=new z,y=0,A=x===!0?t:n,R=x===!0?1:-1;for(let B=1;B<=s;B++)p.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),_++;let D=_;for(let B=0;B<=s;B++){let J=B/s*l+o,V=Math.cos(J),Q=Math.sin(J);C.x=A*Q,C.y=g*R,C.z=A*V,p.push(C.x,C.y,C.z),u.push(0,R,0),w.x=V*.5+.5,w.y=Q*.5*R+.5,f.push(w.x,w.y),_++}for(let B=0;B<s;B++){let K=E+B,J=D+B;x===!0?d.push(J,J+1,K):d.push(J+1,J,K),y+=3}c.addGroup(h,y,x===!0?1:2),h+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},go=class e extends ua{constructor(t=1,n=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,n,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ja=class e extends Jn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,p=t/o,u=n/l,f=[],_=[],T=[],g=[];for(let h=0;h<d;h++){let v=h*u-r;for(let S=0;S<c;S++){let x=S*p-a;_.push(x,-v,0),T.push(0,0,1),g.push(S/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){let S=v+c*h,x=v+c*(h+1),E=v+1+c*(h+1),w=v+1+c*h;f.push(S,x,w),f.push(x,E,w)}this.setIndex(f),this.setAttribute("position",new ke(_,3)),this.setAttribute("normal",new ke(T,3)),this.setAttribute("uv",new ke(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var _o=class e extends Jn{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,d=[],p=new z,u=new z,f=[],_=[],T=[],g=[];for(let h=0;h<=i;h++){let v=[],S=h/i,x=r+S*o,E=t*Math.cos(x),w=Math.sqrt(t*t-E*E),C=0;h===0&&r===0?C=.5/n:h===i&&l===Math.PI&&(C=-.5/n);for(let y=0;y<=n;y++){let A=y/n,R=s+A*a;p.x=-w*Math.cos(R),p.y=E,p.z=w*Math.sin(R),_.push(p.x,p.y,p.z),u.copy(p).normalize(),T.push(u.x,u.y,u.z),g.push(A+C,1-S),v.push(c++)}d.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){let S=d[h][v+1],x=d[h][v],E=d[h+1][v],w=d[h+1][v+1];(h!==0||r>0)&&f.push(S,x,w),(h!==i-1||l<Math.PI)&&f.push(x,E,w)}this.setIndex(f),this.setAttribute("position",new ke(_,3)),this.setAttribute("normal",new ke(T,3)),this.setAttribute("uv",new ke(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ql=class e extends Jn{constructor(t=1,n=.4,i=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],d=[],p=[],u=new z,f=new z,_=new z;for(let T=0;T<=i;T++){let g=r+T/i*o;for(let h=0;h<=s;h++){let v=h/s*a;f.x=(t+n*Math.cos(g))*Math.cos(v),f.y=(t+n*Math.cos(g))*Math.sin(v),f.z=n*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),_.subVectors(f,u).normalize(),d.push(_.x,_.y,_.z),p.push(h/s),p.push(T/i)}}for(let T=1;T<=i;T++)for(let g=1;g<=s;g++){let h=(s+1)*T+g-1,v=(s+1)*(T-1)+g-1,S=(s+1)*(T-1)+g,x=(s+1)*T+g;l.push(h,v,x),l.push(v,S,x)}this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function Qa(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(pS(s))s.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(pS(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function yn(e){let t={};for(let n=0;n<e.length;n++){let i=Qa(e[n]);for(let s in i)t[s]=i[s]}return t}function pS(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function TE(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ng(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var eM={clone:Qa,merge:yn},EE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends la{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EE,this.fragmentShader=AE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qa(t.uniforms),this.uniformsGroups=TE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[i].value=new Qt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ue().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Uh=class extends Kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yl=class extends la{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lf,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Nh=class extends la{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lh=class extends la{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ch(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}var ha=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ih=class extends ha{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tg,endingEnd:tg}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case eg:a=t,o=2*n-i;break;case ng:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case eg:r=t,l=2*i-n;break;case ng:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,d=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*d,this._offsetNext=r*d}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(i-n)/(s-n),T=_*_,g=T*_,h=-u*g+2*u*T-u*_,v=(1+u)*g+(-1.5-2*u)*T+(-.5+u)*_+1,S=(-1-f)*g+(1.5+f)*T+.5*_,x=f*g-f*T;for(let E=0;E!==o;++E)a[E]=h*r[d+E]+v*r[c+E]+S*r[l+E]+x*r[p+E];return a}},Oh=class extends ha{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=(i-n)/(s-n),p=1-d;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*d;return a}},Ph=class extends ha{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Bh=class extends ha{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let _=(i-n)/(s-n),T=1-_;for(let g=0;g!==o;++g)a[g]=r[c+g]*T+r[l+g]*_;return a}let u=o*2,f=t-1;for(let _=0;_!==o;++_){let T=r[c+_],g=r[l+_],h=f*u+_*2,v=p[h],S=p[h+1],x=t*u+_*2,E=d[x],w=d[x+1],C=(i-n)/(s-n),y,A,R,D,B;for(let K=0;K<8;K++){y=C*C,A=y*C,R=1-C,D=R*R,B=D*R;let V=B*n+3*D*C*v+3*R*y*E+A*s-i;if(Math.abs(V)<1e-10)break;let Q=3*D*(v-n)+6*R*C*(E-v)+3*y*(s-E);if(Math.abs(Q)<1e-10)break;C=C-V/Q,C=Math.max(0,Math.min(1,C))}a[_]=B*T+3*D*C*S+3*R*y*w+A*g}return a}},Qn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ch(n,this.TimeBufferType),this.values=ch(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:ch(t.times,Array),values:ch(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ph(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Oh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ih(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Bh(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Ll:n=this.InterpolantFactoryMethodDiscrete;break;case Th:n=this.InterpolantFactoryMethodLinear;break;case fh:n=this.InterpolantFactoryMethodSmooth;break;case $m:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Dt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ll;case this.InterpolantFactoryMethodLinear:return Th;case this.InterpolantFactoryMethodSmooth:return fh;case this.InterpolantFactoryMethodBezier:return $m}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(It("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){It("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){It("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&kT(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){It("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],d=t[o+1];if(c!==d&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,f=p+i;for(let _=0;_!==i;++_){let T=n[p+_];if(T!==n[u+_]||T!==n[f+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let f=0;f!==i;++f)n[u+f]=n[p+f]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Th;var fa=class extends Qn{constructor(t,n,i){super(t,n,i)}};fa.prototype.ValueTypeName="bool";fa.prototype.ValueBufferType=Array;fa.prototype.DefaultInterpolation=Ll;fa.prototype.InterpolantFactoryMethodLinear=void 0;fa.prototype.InterpolantFactoryMethodSmooth=void 0;var zh=class extends Qn{constructor(t,n,i,s){super(t,n,i,s)}};zh.prototype.ValueTypeName="color";var Fh=class extends Qn{constructor(t,n,i,s){super(t,n,i,s)}};Fh.prototype.ValueTypeName="number";var Vh=class extends ha{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let d=c+o;c!==d;c+=4)Vi.slerpFlat(a,0,r,c-o,r,c,l);return a}},Zl=class extends Qn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Vh(this.times,this.values,this.getValueSize(),t)}};Zl.prototype.ValueTypeName="quaternion";Zl.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends Qn{constructor(t,n,i){super(t,n,i)}};da.prototype.ValueTypeName="string";da.prototype.ValueBufferType=Array;da.prototype.DefaultInterpolation=Ll;da.prototype.InterpolantFactoryMethodLinear=void 0;da.prototype.InterpolantFactoryMethodSmooth=void 0;var Gh=class extends Qn{constructor(t,n,i,s){super(t,n,i,s)}};Gh.prototype.ValueTypeName="vector";var Hh=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,a===!1&&s.onStart!==void 0&&s.onStart(d,r,o),a=!0},this.itemEnd=function(d){r++,s.onProgress!==void 0&&s.onProgress(d,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return c.push(d,p),this},this.removeHandler=function(d){let p=c.indexOf(d);return p!==-1&&c.splice(p,2),this},this.getHandler=function(d){for(let p=0,u=c.length;p<u;p+=2){let f=c[p],_=c[p+1];if(f.global&&(f.lastIndex=0),f.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nM=new Hh,kh=class{constructor(t){this.manager=t!==void 0?t:nM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};kh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jl=class extends vn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Kl=class extends Jl{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}},jm=new Ue,mS=new z,gS=new z,ag=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;mS.setFromMatrixPosition(t.matrixWorld),n.position.copy(mS),gS.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(gS),n.updateMatrixWorld(),jm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jm,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===lo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jm)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},uh=new z,hh=new Vi,Ii=new z,Ql=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(uh,hh,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uh,hh,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(uh,hh,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uh,hh,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},sa=new z,_S=new Qt,vS=new Qt,_n=class extends Ql{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=uo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ul*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(Ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){sa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sa.x,sa.y).multiplyScalar(-t/sa.z),sa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sa.x,sa.y).multiplyScalar(-t/sa.z)}getViewSize(t,n){return this.getViewBounds(t,_S,vS),n.subVectors(vS,_S)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Ul*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var vo=class extends Ql{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},rg=class extends ag{constructor(){super(new vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jl=class extends Jl{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new rg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var so=-90,ao=1,Xh=class extends vn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(so,ao,t,n);s.layers=this.layers,this.add(s);let a=new _n(so,ao,t,n);a.layers=this.layers,this.add(a);let r=new _n(so,ao,t,n);r.layers=this.layers,this.add(r);let o=new _n(so,ao,t,n);o.layers=this.layers,this.add(o);let l=new _n(so,ao,t,n);l.layers=this.layers,this.add(l);let c=new _n(so,ao,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,d]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=T,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(p,u,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Wh=class extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Lg="\\[\\]\\.:\\/",wE=new RegExp("["+Lg+"]","g"),Ig="[^"+Lg+"]",CE="[^"+Lg.replace("\\.","")+"]",RE=/((?:WC+[\/:])*)/.source.replace("WC",Ig),DE=/(WCOD+)?/.source.replace("WCOD",CE),UE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ig),NE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ig),LE=new RegExp("^"+RE+DE+UE+NE+"$"),IE=["material","materials","bones","map"],og=class{constructor(t,n,i){let s=i||Ee.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ee=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wE,"")}static parseTrackName(t){let n=LE.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);IE.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;It("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=og;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P3=new Float32Array(1);var lg=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function Og(e,t,n,i){let s=OE(i);switch(n){case Eg:return e*t;case wg:return e*t/s.components*s.byteLength;case $h:return e*t/s.components*s.byteLength;case _a:return e*t*2/s.components*s.byteLength;case tf:return e*t*2/s.components*s.byteLength;case Ag:return e*t*3/s.components*s.byteLength;case fi:return e*t*4/s.components*s.byteLength;case ef:return e*t*4/s.components*s.byteLength;case ic:case sc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ac:case rc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case sf:case rf:return Math.max(e,16)*Math.max(t,8)/4;case nf:case af:return Math.max(e,8)*Math.max(t,8)/2;case of:case lf:case uf:case hf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case cf:case oc:case ff:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case df:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case mf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case gf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _f:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case vf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case yf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Sf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Mf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case bf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Tf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ef:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Af:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case wf:case Cf:case Rf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Df:case Uf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case lc:case Nf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function OE(e){switch(e){case Ln:case Sg:return{byteLength:1,components:1};case xo:case Mg:case Hi:return{byteLength:2,components:1};case Qh:case jh:return{byteLength:2,components:4};case Si:case Kh:case Mi:return{byteLength:4,components:1};case bg:case Tg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function EM(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function BE(e){let t=new WeakMap;function n(o,l){let c=o.array,d=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let d=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,d);else{p.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<p.length;f++){let _=p[u],T=p[f];T.start<=_.start+_.count+1?_.count=Math.max(_.count,T.start+T.count-_.start):(++u,p[u]=T)}p.length=u+1;for(let f=0,_=p.length;f<_;f++){let T=p[f];e.bufferSubData(c,T.start*d.BYTES_PER_ELEMENT,d,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var zE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,VE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,WE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,QE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,aA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,oA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,uA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pA="gl_FragColor = linearToOutputTexel( gl_FragColor );",mA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_A=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,DA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,UA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,GA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$A=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ew=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ow=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,pw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_w=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Sw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ew=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Aw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ww=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ww=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$w=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:zE,alphahash_pars_fragment:FE,alphamap_fragment:VE,alphamap_pars_fragment:GE,alphatest_fragment:HE,alphatest_pars_fragment:kE,aomap_fragment:XE,aomap_pars_fragment:WE,batching_pars_vertex:qE,batching_vertex:YE,begin_vertex:ZE,beginnormal_vertex:JE,bsdfs:KE,iridescence_fragment:QE,bumpmap_pars_fragment:jE,clipping_planes_fragment:$E,clipping_planes_pars_fragment:tA,clipping_planes_pars_vertex:eA,clipping_planes_vertex:nA,color_fragment:iA,color_pars_fragment:sA,color_pars_vertex:aA,color_vertex:rA,common:oA,cube_uv_reflection_fragment:lA,defaultnormal_vertex:cA,displacementmap_pars_vertex:uA,displacementmap_vertex:hA,emissivemap_fragment:fA,emissivemap_pars_fragment:dA,colorspace_fragment:pA,colorspace_pars_fragment:mA,envmap_fragment:gA,envmap_common_pars_fragment:_A,envmap_pars_fragment:vA,envmap_pars_vertex:yA,envmap_physical_pars_fragment:DA,envmap_vertex:xA,fog_vertex:SA,fog_pars_vertex:MA,fog_fragment:bA,fog_pars_fragment:TA,gradientmap_pars_fragment:EA,lightmap_pars_fragment:AA,lights_lambert_fragment:wA,lights_lambert_pars_fragment:CA,lights_pars_begin:RA,lights_toon_fragment:UA,lights_toon_pars_fragment:NA,lights_phong_fragment:LA,lights_phong_pars_fragment:IA,lights_physical_fragment:OA,lights_physical_pars_fragment:PA,lights_fragment_begin:BA,lights_fragment_maps:zA,lights_fragment_end:FA,lightprobes_pars_fragment:VA,logdepthbuf_fragment:GA,logdepthbuf_pars_fragment:HA,logdepthbuf_pars_vertex:kA,logdepthbuf_vertex:XA,map_fragment:WA,map_pars_fragment:qA,map_particle_fragment:YA,map_particle_pars_fragment:ZA,metalnessmap_fragment:JA,metalnessmap_pars_fragment:KA,morphinstance_vertex:QA,morphcolor_vertex:jA,morphnormal_vertex:$A,morphtarget_pars_vertex:tw,morphtarget_vertex:ew,normal_fragment_begin:nw,normal_fragment_maps:iw,normal_pars_fragment:sw,normal_pars_vertex:aw,normal_vertex:rw,normalmap_pars_fragment:ow,clearcoat_normal_fragment_begin:lw,clearcoat_normal_fragment_maps:cw,clearcoat_pars_fragment:uw,iridescence_pars_fragment:hw,opaque_fragment:fw,packing:dw,premultiplied_alpha_fragment:pw,project_vertex:mw,dithering_fragment:gw,dithering_pars_fragment:_w,roughnessmap_fragment:vw,roughnessmap_pars_fragment:yw,shadowmap_pars_fragment:xw,shadowmap_pars_vertex:Sw,shadowmap_vertex:Mw,shadowmask_pars_fragment:bw,skinbase_vertex:Tw,skinning_pars_vertex:Ew,skinning_vertex:Aw,skinnormal_vertex:ww,specularmap_fragment:Cw,specularmap_pars_fragment:Rw,tonemapping_fragment:Dw,tonemapping_pars_fragment:Uw,transmission_fragment:Nw,transmission_pars_fragment:Lw,uv_pars_fragment:Iw,uv_pars_vertex:Ow,uv_vertex:Pw,worldpos_vertex:Bw,background_vert:zw,background_frag:Fw,backgroundCube_vert:Vw,backgroundCube_frag:Gw,cube_vert:Hw,cube_frag:kw,depth_vert:Xw,depth_frag:Ww,distance_vert:qw,distance_frag:Yw,equirect_vert:Zw,equirect_frag:Jw,linedashed_vert:Kw,linedashed_frag:Qw,meshbasic_vert:jw,meshbasic_frag:$w,meshlambert_vert:t2,meshlambert_frag:e2,meshmatcap_vert:n2,meshmatcap_frag:i2,meshnormal_vert:s2,meshnormal_frag:a2,meshphong_vert:r2,meshphong_frag:o2,meshphysical_vert:l2,meshphysical_frag:c2,meshtoon_vert:u2,meshtoon_frag:h2,points_vert:f2,points_frag:d2,shadow_vert:p2,shadow_frag:m2,sprite_vert:g2,sprite_frag:_2},mt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Xi={basic:{uniforms:yn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:yn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:yn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:yn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:yn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:yn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:yn([mt.points,mt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:yn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:yn([mt.common,mt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:yn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:yn([mt.sprite,mt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:yn([mt.common,mt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:yn([mt.lights,mt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Xi.physical={uniforms:yn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Pf={r:0,b:0,g:0},v2=new Ue,AM=new Bt;AM.set(-1,0,0,0,1,0,0,0,1);function y2(e,t,n,i,s,a){let r=new Ht(0),o=s===!0?0:1,l,c,d=null,p=0,u=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let x=v.backgroundBlurriness>0;S=t.get(S,x)}return S}function _(v){let S=!1,x=f(v);x===null?g(r,o):x&&x.isColor&&(g(x,1),S=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function T(v,S){let x=f(S);x&&(x.isCubeTexture||x.mapping===ec)?(c===void 0&&(c=new Ne(new ca(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Qa(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(v2.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(AM),c.material.toneMapped=Jt.getTransfer(x.colorSpace)!==oe,(d!==x||p!==x.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,d=x,p=x.version,u=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ne(new Ja(2,2),new Kn({name:"BackgroundMaterial",uniforms:Qa(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==oe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||p!==x.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,d=x,p=x.version,u=e.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,S){v.getRGB(Pf,Ng(e)),n.buffers.color.setClear(Pf.r,Pf.g,Pf.b,S,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,S=1){r.set(v),o=S,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(r,o)},render:_,addToRenderList:T,dispose:h}}function x2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(D,B,K,J,V){let Q=!1,Z=p(D,J,K,B);a!==Z&&(a=Z,c(a.object)),Q=f(D,J,K,V),Q&&_(D,J,K,V),V!==null&&t.update(V,e.ELEMENT_ARRAY_BUFFER),(Q||r)&&(r=!1,x(D,B,K,J),V!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function d(D){return e.deleteVertexArray(D)}function p(D,B,K,J){let V=J.wireframe===!0,Q=i[B.id];Q===void 0&&(Q={},i[B.id]=Q);let Z=D.isInstancedMesh===!0?D.id:0,et=Q[Z];et===void 0&&(et={},Q[Z]=et);let rt=et[K.id];rt===void 0&&(rt={},et[K.id]=rt);let L=rt[V];return L===void 0&&(L=u(l()),rt[V]=L),L}function u(D){let B=[],K=[],J=[];for(let V=0;V<n;V++)B[V]=0,K[V]=0,J[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:K,attributeDivisors:J,object:D,attributes:{},index:null}}function f(D,B,K,J){let V=a.attributes,Q=B.attributes,Z=0,et=K.getAttributes();for(let rt in et)if(et[rt].location>=0){let ut=V[rt],ht=Q[rt];if(ht===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor)),ut===void 0||ut.attribute!==ht||ht&&ut.data!==ht.data)return!0;Z++}return a.attributesNum!==Z||a.index!==J}function _(D,B,K,J){let V={},Q=B.attributes,Z=0,et=K.getAttributes();for(let rt in et)if(et[rt].location>=0){let ut=Q[rt];ut===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(ut=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(ut=D.instanceColor));let ht={};ht.attribute=ut,ut&&ut.data&&(ht.data=ut.data),V[rt]=ht,Z++}a.attributes=V,a.attributesNum=Z,a.index=J}function T(){let D=a.newAttributes;for(let B=0,K=D.length;B<K;B++)D[B]=0}function g(D){h(D,0)}function h(D,B){let K=a.newAttributes,J=a.enabledAttributes,V=a.attributeDivisors;K[D]=1,J[D]===0&&(e.enableVertexAttribArray(D),J[D]=1),V[D]!==B&&(e.vertexAttribDivisor(D,B),V[D]=B)}function v(){let D=a.newAttributes,B=a.enabledAttributes;for(let K=0,J=B.length;K<J;K++)B[K]!==D[K]&&(e.disableVertexAttribArray(K),B[K]=0)}function S(D,B,K,J,V,Q,Z){Z===!0?e.vertexAttribIPointer(D,B,K,V,Q):e.vertexAttribPointer(D,B,K,J,V,Q)}function x(D,B,K,J){T();let V=J.attributes,Q=K.getAttributes(),Z=B.defaultAttributeValues;for(let et in Q){let rt=Q[et];if(rt.location>=0){let L=V[et];if(L===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(L=D.instanceColor)),L!==void 0){let ut=L.normalized,ht=L.itemSize,jt=t.get(L);if(jt===void 0)continue;let ye=jt.buffer,$t=jt.type,j=jt.bytesPerElement,lt=$t===e.INT||$t===e.UNSIGNED_INT||L.gpuType===Kh;if(L.isInterleavedBufferAttribute){let ot=L.data,Nt=ot.stride,Ot=L.offset;if(ot.isInstancedInterleavedBuffer){for(let Rt=0;Rt<rt.locationSize;Rt++)h(rt.location+Rt,ot.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Rt=0;Rt<rt.locationSize;Rt++)g(rt.location+Rt);e.bindBuffer(e.ARRAY_BUFFER,ye);for(let Rt=0;Rt<rt.locationSize;Rt++)S(rt.location+Rt,ht/rt.locationSize,$t,ut,Nt*j,(Ot+ht/rt.locationSize*Rt)*j,lt)}else{if(L.isInstancedBufferAttribute){for(let ot=0;ot<rt.locationSize;ot++)h(rt.location+ot,L.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let ot=0;ot<rt.locationSize;ot++)g(rt.location+ot);e.bindBuffer(e.ARRAY_BUFFER,ye);for(let ot=0;ot<rt.locationSize;ot++)S(rt.location+ot,ht/rt.locationSize,$t,ut,ht*j,ht/rt.locationSize*ot*j,lt)}}else if(Z!==void 0){let ut=Z[et];if(ut!==void 0)switch(ut.length){case 2:e.vertexAttrib2fv(rt.location,ut);break;case 3:e.vertexAttrib3fv(rt.location,ut);break;case 4:e.vertexAttrib4fv(rt.location,ut);break;default:e.vertexAttrib1fv(rt.location,ut)}}}}v()}function E(){A();for(let D in i){let B=i[D];for(let K in B){let J=B[K];for(let V in J){let Q=J[V];for(let Z in Q)d(Q[Z].object),delete Q[Z];delete J[V]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;let B=i[D.id];for(let K in B){let J=B[K];for(let V in J){let Q=J[V];for(let Z in Q)d(Q[Z].object),delete Q[Z];delete J[V]}}delete i[D.id]}function C(D){for(let B in i){let K=i[B];for(let J in K){let V=K[J];if(V[D.id]===void 0)continue;let Q=V[D.id];for(let Z in Q)d(Q[Z].object),delete Q[Z];delete V[D.id]}}}function y(D){for(let B in i){let K=i[B],J=D.isInstancedMesh===!0?D.id:0,V=K[J];if(V!==void 0){for(let Q in V){let Z=V[Q];for(let et in Z)d(Z[et].object),delete Z[et];delete V[Q]}delete K[J],Object.keys(K).length===0&&delete i[B]}}}function A(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:T,enableAttribute:g,disableUnusedAttributes:v}}function S2(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,d){d!==0&&(e.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function M2(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==fi&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let y=C===Hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ln&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mi&&!y)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",d=l(c);d!==c&&(Dt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:T,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,maxSamples:E,samples:w}}function b2(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Oi,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||i!==0||s;return s=u,i=p.length,f},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=d(p,u,0)},this.setState=function(p,u,f){let _=p.clippingPlanes,T=p.clipIntersection,g=p.clipShadows,h=e.get(p);if(!s||_===null||_.length===0||a&&!g)a?d(null):c();else{let v=a?0:i,S=v*4,x=h.clippingState||null;l.value=x,x=d(_,u,S,f);for(let E=0;E!==S;++E)x[E]=n[E];h.clippingState=x,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(p,u,f,_){let T=p!==null?p.length:0,g=null;if(T!==0){if(g=l.value,_!==!0||g===null){let h=f+T*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let S=0,x=f;S!==T;++S,x+=4)r.copy(p[S]).applyMatrix4(v,o),r.normal.toArray(g,x),g[x+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,g}}var va=4,iM=[.125,.215,.35,.446,.526,.582],ja=20,T2=256,cc=new vo,sM=new Ht,Pg=null,Bg=0,zg=0,Fg=!1,E2=new z,zf=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=E2}=a;Pg=this._renderer.getRenderTarget(),Bg=this._renderer.getActiveCubeFace(),zg=this._renderer.getActiveMipmapLevel(),Fg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Pg,Bg,zg),this._renderer.xr.enabled=Fg,t.scissorTest=!1,bo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===pa||t.mapping===Ka?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pg=this._renderer.getRenderTarget(),Bg=this._renderer.getActiveCubeFace(),zg=this._renderer.getActiveMipmapLevel(),Fg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Hi,format:fi,colorSpace:Il,depthBuffer:!1},s=aM(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=aM(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A2(a)),this._blurMaterial=C2(a,t,n),this._ggxMaterial=w2(a,t,n)}return s}_compileMaterial(t){let n=new Ne(new Jn,t);this._renderer.compile(n,cc)}_sceneToCubeUV(t,n,i,s,a){let l=new _n(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,f=p.toneMapping;p.getClearColor(sM),p.toneMapping=xi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new ca,new ys({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));let T=this._backgroundBox,g=T.material,h=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,h=!0):(g.color.copy(sM),h=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[S],a.y,a.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[S],a.z)):(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[S]));let E=this._cubeSize;bo(s,x*E,S>2?E:0,E,E),p.setRenderTarget(s),h&&p.render(T,l),p.render(t,l)}p.toneMapping=f,p.autoClear=u,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===pa||t.mapping===Ka;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rM());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;bo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,cc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),u=0+c*1.25,f=p*u,{_lodMax:_}=this,T=this._sizeLods[i],g=3*T*(i>_-va?i-_+va:0),h=4*(this._cubeSize-T);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-n,bo(a,g,h,3*T,2*T),s.setRenderTarget(a),s.render(o,cc),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=_-i,bo(t,g,h,3*T,2*T),s.setRenderTarget(t),s.render(o,cc)}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&It("blur direction must be either latitudinal or longitudinal!");let d=3,p=this._lodMeshes[s];p.material=c;let u=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*ja-1),T=a/_,g=isFinite(a)?1+Math.floor(d*T):ja;g>ja&&Dt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ja}`);let h=[],v=0;for(let C=0;C<ja;++C){let y=C/T,A=Math.exp(-y*y/2);h.push(A),C===0?v+=A:C<g&&(v+=2*A)}for(let C=0;C<h.length;C++)h[C]=h[C]/v;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=h,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:S}=this;u.dTheta.value=_,u.mipInt.value=S-i;let x=this._sizeLods[s],E=3*x*(s>S-va?s-S+va:0),w=4*(this._cubeSize-x);bo(n,E,w,3*x,2*x),l.setRenderTarget(n),l.render(p,cc)}};function A2(e){let t=[],n=[],i=[],s=e,a=e-va+1+iM.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);t.push(o);let l=1/o;r>e-va?l=iM[r-e+va-1]:r===0&&(l=0),n.push(l);let c=1/(o-2),d=-c,p=1+c,u=[d,d,p,d,p,p,d,d,p,p,d,p],f=6,_=6,T=3,g=2,h=1,v=new Float32Array(T*_*f),S=new Float32Array(g*_*f),x=new Float32Array(h*_*f);for(let w=0;w<f;w++){let C=w%3*2/3-1,y=w>2?0:-1,A=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];v.set(A,T*_*w),S.set(u,g*_*w);let R=[w,w,w,w,w,w];x.set(R,h*_*w)}let E=new Jn;E.setAttribute("position",new Yn(v,T)),E.setAttribute("uv",new Yn(S,g)),E.setAttribute("faceIndex",new Yn(x,h)),i.push(new Ne(E,null)),s>va&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function aM(e,t,n){let i=new Zn(e,t,n);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bo(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function w2(e,t,n){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function C2(e,t,n){let i=new Float32Array(ja),s=new z(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:ja,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function rM(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function oM(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Gf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ff=class extends Zn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new kl(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ca(5,5,5),a=new Kn({name:"CubemapFromEquirect",uniforms:Qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Gi});a.uniforms.tEquirect.value=n;let r=new Ne(s,a),o=n.minFilter;return n.minFilter===ma&&(n.minFilter=hn),new Xh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function R2(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?r(u):a(u)}function a(u){if(u&&u.isTexture){let f=u.mapping;if(f===Yh||f===Zh)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let T=new Ff(_.height);return T.fromEquirectangularTexture(e,u),t.set(u,T),u.addEventListener("dispose",c),o(T.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let f=u.mapping,_=f===Yh||f===Zh,T=f===pa||f===Ka;if(_||T){let g=n.get(u),h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new zf(e)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return _&&v&&v.height>0||T&&v&&l(v)?(i===null&&(i=new zf(e)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,f){return f===Yh?u.mapping=pa:f===Zh&&(u.mapping=Ka),u}function l(u){let f=0,_=6;for(let T=0;T<_;T++)u[T]!==void 0&&f++;return f===_}function c(u){let f=u.target;f.removeEventListener("dispose",c);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function d(u){let f=u.target;f.removeEventListener("dispose",d);let _=n.get(f);_!==void 0&&(n.delete(f),_.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function D2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&qa("WebGLRenderer: "+i+" extension not supported."),s}}}function U2(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",r),delete s[u.id];let f=a.get(u);f&&(t.remove(f),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let f in u)t.update(u[f],e.ARRAY_BUFFER)}function c(p){let u=[],f=p.index,_=p.attributes.position,T=0;if(_===void 0)return;if(f!==null){let v=f.array;T=f.version;for(let S=0,x=v.length;S<x;S+=3){let E=v[S+0],w=v[S+1],C=v[S+2];u.push(E,w,w,C,C,E)}}else{let v=_.array;T=_.version;for(let S=0,x=v.length/3-1;S<x;S+=3){let E=S+0,w=S+1,C=S+2;u.push(E,w,w,C,C,E)}}let g=new(_.count>=65535?Hl:Gl)(u,1);g.version=T;let h=a.get(p);h&&t.remove(h),a.set(p,g)}function d(p){let u=a.get(p);if(u){let f=p.index;f!==null&&u.version<f.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function N2(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,f){f!==0&&(e.drawElementsInstanced(i,u,a,p*r,f),n.update(u,i,f))}function d(p,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,f);let T=0;for(let g=0;g<f;g++)T+=u[g];n.update(T,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function L2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:It("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function I2(e,t,n){let i=new WeakMap,s=new Re;function a(r,o,l){let c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,u=i.get(o);if(u===void 0||u.count!==p){let A=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;f===!0&&(S=1),_===!0&&(S=2),T===!0&&(S=3);let x=o.attributes.position.count*S,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*E*4*p),C=new Bl(w,x,E,p);C.type=Mi,C.needsUpdate=!0;let y=S*4;for(let R=0;R<p;R++){let D=g[R],B=h[R],K=v[R],J=x*E*4*R;for(let V=0;V<D.count;V++){let Q=V*y;f===!0&&(s.fromBufferAttribute(D,V),w[J+Q+0]=s.x,w[J+Q+1]=s.y,w[J+Q+2]=s.z,w[J+Q+3]=0),_===!0&&(s.fromBufferAttribute(B,V),w[J+Q+4]=s.x,w[J+Q+5]=s.y,w[J+Q+6]=s.z,w[J+Q+7]=0),T===!0&&(s.fromBufferAttribute(K,V),w[J+Q+8]=s.x,w[J+Q+9]=s.y,w[J+Q+10]=s.z,w[J+Q+11]=K.itemSize===4?s.w:1)}}u={count:p,texture:C,size:new Qt(x,E)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let f=0;for(let T=0;T<c.length;T++)f+=c[T];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function O2(e,t,n,i,s){let a=new WeakMap;function r(c){let d=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==d&&(t.update(u),a.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==d&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;a.get(f)!==d&&(f.update(),a.set(f,d))}return u}function o(){a=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:r,dispose:o}}var P2={[pg]:"LINEAR_TONE_MAPPING",[mg]:"REINHARD_TONE_MAPPING",[gg]:"CINEON_TONE_MAPPING",[tc]:"ACES_FILMIC_TONE_MAPPING",[vg]:"AGX_TONE_MAPPING",[yg]:"NEUTRAL_TONE_MAPPING",[_g]:"CUSTOM_TONE_MAPPING"};function B2(e,t,n,i,s,a){let r=new Zn(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,depthTexture:s?new xs(t,n):void 0}),o=new Zn(t,n,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),l=new Jn;l.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ke([0,2,0,0,2,0],2));let c=new Uh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ne(l,c),p=new vo(-1,1,1,-1,0,1),u=null,f=null,_=!1,T,g=null,h=[],v=!1;this.setSize=function(S,x){r.setSize(S,x),o.setSize(S,x);for(let E=0;E<h.length;E++){let w=h[E];w.setSize&&w.setSize(S,x)}},this.setEffects=function(S){h=S,v=h.length>0&&h[0].isRenderPass===!0;let x=r.width,E=r.height;for(let w=0;w<h.length;w++){let C=h[w];C.setSize&&C.setSize(x,E)}},this.begin=function(S,x){if(_||S.toneMapping===xi&&h.length===0)return!1;if(g=x,x!==null){let E=x.width,w=x.height;(r.width!==E||r.height!==w)&&this.setSize(E,w)}return v===!1&&S.setRenderTarget(r),T=S.toneMapping,S.toneMapping=xi,!0},this.hasRenderPass=function(){return v},this.end=function(S,x){S.toneMapping=T,_=!0;let E=r,w=o;for(let C=0;C<h.length;C++){let y=h[C];if(y.enabled!==!1&&(y.render(S,w,E,x),y.needsSwap!==!1)){let A=E;E=w,w=A}}if(u!==S.outputColorSpace||f!==S.toneMapping){u=S.outputColorSpace,f=S.toneMapping,c.defines={},Jt.getTransfer(u)===oe&&(c.defines.SRGB_TRANSFER="");let C=P2[f];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(g),S.render(d,p),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}var wM=new Tn,Hg=new xs(1,1),CM=new Bl,RM=new wh,DM=new kl,lM=[],cM=[],uM=new Float32Array(16),hM=new Float32Array(9),fM=new Float32Array(4);function Eo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=lM[s];if(a===void 0&&(a=new Float32Array(s),lM[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function $e(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Hf(e,t){let n=cM[t];n===void 0&&(n=new Int32Array(t),cM[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function z2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function F2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2fv(this.addr,t),$e(n,t)}}function V2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(je(n,t))return;e.uniform3fv(this.addr,t),$e(n,t)}}function G2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4fv(this.addr,t),$e(n,t)}}function H2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;fM.set(i),e.uniformMatrix2fv(this.addr,!1,fM),$e(n,i)}}function k2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;hM.set(i),e.uniformMatrix3fv(this.addr,!1,hM),$e(n,i)}}function X2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;uM.set(i),e.uniformMatrix4fv(this.addr,!1,uM),$e(n,i)}}function W2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function q2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2iv(this.addr,t),$e(n,t)}}function Y2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3iv(this.addr,t),$e(n,t)}}function Z2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4iv(this.addr,t),$e(n,t)}}function J2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function K2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2uiv(this.addr,t),$e(n,t)}}function Q2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3uiv(this.addr,t),$e(n,t)}}function j2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4uiv(this.addr,t),$e(n,t)}}function $2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Hg.compareFunction=n.isReversedDepthBuffer()?Of:If,a=Hg):a=wM,n.setTexture2D(t||a,s)}function tC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||RM,s)}function eC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||DM,s)}function nC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||CM,s)}function iC(e){switch(e){case 5126:return z2;case 35664:return F2;case 35665:return V2;case 35666:return G2;case 35674:return H2;case 35675:return k2;case 35676:return X2;case 5124:case 35670:return W2;case 35667:case 35671:return q2;case 35668:case 35672:return Y2;case 35669:case 35673:return Z2;case 5125:return J2;case 36294:return K2;case 36295:return Q2;case 36296:return j2;case 35678:case 36198:case 36298:case 36306:case 35682:return $2;case 35679:case 36299:case 36307:return tC;case 35680:case 36300:case 36308:case 36293:return eC;case 36289:case 36303:case 36311:case 36292:return nC}}function sC(e,t){e.uniform1fv(this.addr,t)}function aC(e,t){let n=Eo(t,this.size,2);e.uniform2fv(this.addr,n)}function rC(e,t){let n=Eo(t,this.size,3);e.uniform3fv(this.addr,n)}function oC(e,t){let n=Eo(t,this.size,4);e.uniform4fv(this.addr,n)}function lC(e,t){let n=Eo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function cC(e,t){let n=Eo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function uC(e,t){let n=Eo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function hC(e,t){e.uniform1iv(this.addr,t)}function fC(e,t){e.uniform2iv(this.addr,t)}function dC(e,t){e.uniform3iv(this.addr,t)}function pC(e,t){e.uniform4iv(this.addr,t)}function mC(e,t){e.uniform1uiv(this.addr,t)}function gC(e,t){e.uniform2uiv(this.addr,t)}function _C(e,t){e.uniform3uiv(this.addr,t)}function vC(e,t){e.uniform4uiv(this.addr,t)}function yC(e,t,n){let i=this.cache,s=t.length,a=Hf(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=Hg:r=wM;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function xC(e,t,n){let i=this.cache,s=t.length,a=Hf(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||RM,a[r])}function SC(e,t,n){let i=this.cache,s=t.length,a=Hf(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||DM,a[r])}function MC(e,t,n){let i=this.cache,s=t.length,a=Hf(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||CM,a[r])}function bC(e){switch(e){case 5126:return sC;case 35664:return aC;case 35665:return rC;case 35666:return oC;case 35674:return lC;case 35675:return cC;case 35676:return uC;case 5124:case 35670:return hC;case 35667:case 35671:return fC;case 35668:case 35672:return dC;case 35669:case 35673:return pC;case 5125:return mC;case 36294:return gC;case 36295:return _C;case 36296:return vC;case 35678:case 36198:case 36298:case 36306:case 35682:return yC;case 35679:case 36299:case 36307:return xC;case 35680:case 36300:case 36308:case 36293:return SC;case 36289:case 36303:case 36311:case 36292:return MC}}var kg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=iC(n.type)}},Xg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bC(n.type)}},Wg=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Vg=/(\w+)(\])?(\[|\.)?/g;function dM(e,t){e.seq.push(t),e.map[t.id]=t}function TC(e,t,n){let i=e.name,s=i.length;for(Vg.lastIndex=0;;){let a=Vg.exec(i),r=Vg.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){dM(n,c===void 0?new kg(o,e,t):new Xg(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new Wg(o),dM(n,p)),n=p}}}var To=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);TC(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function pM(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var EC=37297,AC=0;function wC(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var mM=new Bt;function CC(e){Jt._getMatrix(mM,Jt.workingColorSpace,e);let t=`mat3( ${mM.elements.map(n=>n.toFixed(4))} )`;switch(Jt.getTransfer(e)){case Ol:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function gM(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+wC(e.getShaderSource(t),o)}else return a}function RC(e,t){let n=CC(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var DC={[pg]:"Linear",[mg]:"Reinhard",[gg]:"Cineon",[tc]:"ACESFilmic",[vg]:"AgX",[yg]:"Neutral",[_g]:"Custom"};function UC(e,t){let n=DC[t];return n===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Bf=new z;function NC(){Jt.getLuminanceCoefficients(Bf);let e=Bf.x.toFixed(4),t=Bf.y.toFixed(4),n=Bf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LC(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hc).join(`
`)}function IC(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function OC(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function hc(e){return e!==""}function _M(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vM(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var PC=/^[ \t]*#include +<([\w\d./]+)>/gm;function qg(e){return e.replace(PC,zC)}var BC=new Map;function zC(e,t){let n=kt[t];if(n===void 0){let i=BC.get(t);if(i!==void 0)n=kt[i],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return qg(n)}var FC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yM(e){return e.replace(FC,VC)}function VC(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function xM(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var GC={[$l]:"SHADOWMAP_TYPE_PCF",[yo]:"SHADOWMAP_TYPE_VSM"};function HC(e){return GC[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kC={[pa]:"ENVMAP_TYPE_CUBE",[Ka]:"ENVMAP_TYPE_CUBE",[ec]:"ENVMAP_TYPE_CUBE_UV"};function XC(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":kC[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var WC={[Ka]:"ENVMAP_MODE_REFRACTION"};function qC(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":WC[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var YC={[dg]:"ENVMAP_BLENDING_MULTIPLY",[FS]:"ENVMAP_BLENDING_MIX",[VS]:"ENVMAP_BLENDING_ADD"};function ZC(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":YC[e.combine]||"ENVMAP_BLENDING_NONE"}function JC(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function KC(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=HC(n),c=XC(n),d=qC(n),p=ZC(n),u=JC(n),f=LC(n),_=IC(a),T=s.createProgram(),g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(hc).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(hc).join(`
`),h.length>0&&(h+=`
`)):(g=[xM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hc).join(`
`),h=[xM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xi?"#define TONE_MAPPING":"",n.toneMapping!==xi?kt.tonemapping_pars_fragment:"",n.toneMapping!==xi?UC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,RC("linearToOutputTexel",n.outputColorSpace),NC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hc).join(`
`)),r=qg(r),r=_M(r,n),r=vM(r,n),o=qg(o),o=_M(o,n),o=vM(o,n),r=yM(r),o=yM(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let S=v+g+r,x=v+h+o,E=pM(s,s.VERTEX_SHADER,S),w=pM(s,s.FRAGMENT_SHADER,x);s.attachShader(T,E),s.attachShader(T,w),n.index0AttributeName!==void 0?s.bindAttribLocation(T,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function C(D){if(e.debug.checkShaderErrors){let B=s.getProgramInfoLog(T)||"",K=s.getShaderInfoLog(E)||"",J=s.getShaderInfoLog(w)||"",V=B.trim(),Q=K.trim(),Z=J.trim(),et=!0,rt=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(et=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,T,E,w);else{let L=gM(s,E,"vertex"),ut=gM(s,w,"fragment");It("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+L+`
`+ut)}else V!==""?Dt("WebGLProgram: Program Info Log:",V):(Q===""||Z==="")&&(rt=!1);rt&&(D.diagnostics={runnable:et,programLog:V,vertexShader:{log:Q,prefix:g},fragmentShader:{log:Z,prefix:h}})}s.deleteShader(E),s.deleteShader(w),y=new To(s,T),A=OC(s,T)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(T,EC)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AC++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=E,this.fragmentShader=w,this}var QC=0,Yg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Zg(t),n.set(t,i)),i}},Zg=class{constructor(t){this.id=QC++,this.code=t,this.usedTimes=0}};function jC(e){return e===_a||e===oc||e===lc}function $C(e,t,n,i,s,a){let r=new zl,o=new Yg,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function T(y,A,R,D,B,K){let J=D.fog,V=B.geometry,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,et=t.get(y.envMap||Q,Z),rt=et&&et.mapping===ec?et.image.height:null,L=f[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Dt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let ut=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ht=ut!==void 0?ut.length:0,jt=0;V.morphAttributes.position!==void 0&&(jt=1),V.morphAttributes.normal!==void 0&&(jt=2),V.morphAttributes.color!==void 0&&(jt=3);let ye,$t,j,lt;if(L){let Mt=Xi[L];ye=Mt.vertexShader,$t=Mt.fragmentShader}else{ye=y.vertexShader,$t=y.fragmentShader;let Mt=o.getVertexShaderStage(y),Le=o.getFragmentShaderStage(y);o.update(y,Mt,Le),j=Mt.id,lt=Le.id}let ot=e.getRenderTarget(),Nt=e.state.buffers.depth.getReversed(),Ot=B.isInstancedMesh===!0,Rt=B.isBatchedMesh===!0,Ae=!!y.map,Xt=!!y.matcap,re=!!et,te=!!y.aoMap,ee=!!y.lightMap,Lt=!!y.bumpMap&&y.wireframe===!1,Be=!!y.normalMap,ze=!!y.displacementMap,Xe=!!y.emissiveMap,xe=!!y.metalnessMap,De=!!y.roughnessMap,O=y.anisotropy>0,F=y.clearcoat>0,q=y.dispersion>0,M=y.iridescence>0,m=y.sheen>0,U=y.transmission>0,N=O&&!!y.anisotropyMap,G=F&&!!y.clearcoatMap,it=F&&!!y.clearcoatNormalMap,nt=F&&!!y.clearcoatRoughnessMap,k=M&&!!y.iridescenceMap,W=M&&!!y.iridescenceThicknessMap,at=m&&!!y.sheenColorMap,St=m&&!!y.sheenRoughnessMap,ct=!!y.specularMap,dt=!!y.specularColorMap,Tt=!!y.specularIntensityMap,Ut=U&&!!y.transmissionMap,Ft=U&&!!y.thicknessMap,I=!!y.gradientMap,ft=!!y.alphaMap,$=y.alphaTest>0,pt=!!y.alphaHash,vt=!!y.extensions,st=xi;y.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(st=e.toneMapping);let Et={shaderID:L,shaderType:y.type,shaderName:y.name,vertexShader:ye,fragmentShader:$t,defines:y.defines,customVertexShaderID:j,customFragmentShaderID:lt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&B._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&B.instanceColor!==null,instancingMorph:Ot&&B.morphTexture!==null,outputColorSpace:ot===null?e.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ae,matcap:Xt,envMap:re,envMapMode:re&&et.mapping,envMapCubeUVHeight:rt,aoMap:te,lightMap:ee,bumpMap:Lt,normalMap:Be,displacementMap:ze,emissiveMap:Xe,normalMapObjectSpace:Be&&y.normalMapType===kS,normalMapTangentSpace:Be&&y.normalMapType===Lf,packedNormalMap:Be&&y.normalMapType===Lf&&jC(y.normalMap.format),metalnessMap:xe,roughnessMap:De,anisotropy:O,anisotropyMap:N,clearcoat:F,clearcoatMap:G,clearcoatNormalMap:it,clearcoatRoughnessMap:nt,dispersion:q,iridescence:M,iridescenceMap:k,iridescenceThicknessMap:W,sheen:m,sheenColorMap:at,sheenRoughnessMap:St,specularMap:ct,specularColorMap:dt,specularIntensityMap:Tt,transmission:U,transmissionMap:Ut,thicknessMap:Ft,gradientMap:I,opaque:y.transparent===!1&&y.blending===Ya&&y.alphaToCoverage===!1,alphaMap:ft,alphaTest:$,alphaHash:pt,combine:y.combine,mapUv:Ae&&_(y.map.channel),aoMapUv:te&&_(y.aoMap.channel),lightMapUv:ee&&_(y.lightMap.channel),bumpMapUv:Lt&&_(y.bumpMap.channel),normalMapUv:Be&&_(y.normalMap.channel),displacementMapUv:ze&&_(y.displacementMap.channel),emissiveMapUv:Xe&&_(y.emissiveMap.channel),metalnessMapUv:xe&&_(y.metalnessMap.channel),roughnessMapUv:De&&_(y.roughnessMap.channel),anisotropyMapUv:N&&_(y.anisotropyMap.channel),clearcoatMapUv:G&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:k&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:W&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:at&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:St&&_(y.sheenRoughnessMap.channel),specularMapUv:ct&&_(y.specularMap.channel),specularColorMapUv:dt&&_(y.specularColorMap.channel),specularIntensityMapUv:Tt&&_(y.specularIntensityMap.channel),transmissionMapUv:Ut&&_(y.transmissionMap.channel),thicknessMapUv:Ft&&_(y.thicknessMap.channel),alphaMapUv:ft&&_(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Be||O),vertexNormals:!!V.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(Ae||ft),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||V.attributes.normal===void 0&&Be===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Nt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:jt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:st,decodeVideoTexture:Ae&&y.map.isVideoTexture===!0&&Jt.getTransfer(y.map.colorSpace)===oe,decodeVideoTextureEmissive:Xe&&y.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(y.emissiveMap.colorSpace)===oe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hi,flipSided:y.side===En,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&y.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function g(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)A.push(R),A.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(h(A,y),v(A,y),A.push(e.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function h(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function S(y){let A=f[y.type],R;if(A){let D=Xi[A];R=eM.clone(D.uniforms)}else R=y.uniforms;return R}function x(y,A){let R=d.get(A);return R!==void 0?++R.usedTimes:(R=new KC(e,A,y,s),c.push(R),d.set(A,R)),R}function E(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function C(){o.dispose()}return{getParameters:T,getProgramCacheKey:g,getUniforms:S,acquireProgram:x,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:C}}function t3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function e3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function SM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function MM(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,T,g,h){let v=e[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:_,materialVariant:r(u),groupOrder:T,renderOrder:u.renderOrder,z:g,group:h},e[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=_,v.materialVariant=r(u),v.groupOrder=T,v.renderOrder=u.renderOrder,v.z=g,v.group=h),t++,v}function l(u,f,_,T,g,h){let v=o(u,f,_,T,g,h);_.transmission>0?i.push(v):_.transparent===!0?s.push(v):n.push(v)}function c(u,f,_,T,g,h){let v=o(u,f,_,T,g,h);_.transmission>0?i.unshift(v):_.transparent===!0?s.unshift(v):n.unshift(v)}function d(u,f,_){n.length>1&&n.sort(u||e3),i.length>1&&i.sort(f||SM),s.length>1&&s.sort(f||SM),_&&(n.reverse(),i.reverse(),s.reverse())}function p(){for(let u=t,f=e.length;u<f;u++){let _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:d}}function n3(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new MM,e.set(i,[r])):s>=a.length?(r=new MM,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function i3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new z,color:new Ht};break;case"SpotLight":n={position:new z,direction:new z,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":n={color:new Ht,position:new z,halfWidth:new z,halfHeight:new z};break}return e[t.id]=n,n}}}function s3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var a3=0;function r3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function o3(e){let t=new i3,n=s3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);let s=new z,a=new Ue,r=new Ue;function o(c){let d=0,p=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,_=0,T=0,g=0,h=0,v=0,S=0,x=0,E=0,w=0,C=0;c.sort(r3);for(let A=0,R=c.length;A<R;A++){let D=c[A],B=D.color,K=D.intensity,J=D.distance,V=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===_a?V=D.shadow.map.texture:V=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=B.r*K,p+=B.g*K,u+=B.b*K;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(D.sh.coefficients[Q],K);C++}else if(D.isDirectionalLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,et=n.get(D);et.shadowIntensity=Z.intensity,et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize=Z.mapSize,i.directionalShadow[f]=et,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=D.shadow.matrix,v++}i.directional[f]=Q,f++}else if(D.isSpotLight){let Q=t.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(B).multiplyScalar(K),Q.distance=J,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,i.spot[T]=Q;let Z=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,Z.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[T]=Z.matrix,D.castShadow){let et=n.get(D);et.shadowIntensity=Z.intensity,et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize=Z.mapSize,i.spotShadow[T]=et,i.spotShadowMap[T]=V,x++}T++}else if(D.isRectAreaLight){let Q=t.get(D);Q.color.copy(B).multiplyScalar(K),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=Q,g++}else if(D.isPointLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){let Z=D.shadow,et=n.get(D);et.shadowIntensity=Z.intensity,et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize=Z.mapSize,et.shadowCameraNear=Z.camera.near,et.shadowCameraFar=Z.camera.far,i.pointShadow[_]=et,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=D.shadow.matrix,S++}i.point[_]=Q,_++}else if(D.isHemisphereLight){let Q=t.get(D);Q.skyColor.copy(D.color).multiplyScalar(K),Q.groundColor.copy(D.groundColor).multiplyScalar(K),i.hemi[h]=Q,h++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=u;let y=i.hash;(y.directionalLength!==f||y.pointLength!==_||y.spotLength!==T||y.rectAreaLength!==g||y.hemiLength!==h||y.numDirectionalShadows!==v||y.numPointShadows!==S||y.numSpotShadows!==x||y.numSpotMaps!==E||y.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=T,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,y.directionalLength=f,y.pointLength=_,y.spotLength=T,y.rectAreaLength=g,y.hemiLength=h,y.numDirectionalShadows=v,y.numPointShadows=S,y.numSpotShadows=x,y.numSpotMaps=E,y.numLightProbes=C,i.version=a3++)}function l(c,d){let p=0,u=0,f=0,_=0,T=0,g=d.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){let S=c[h];if(S.isDirectionalLight){let x=i.directional[p];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),p++}else if(S.isSpotLight){let x=i.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(S.isRectAreaLight){let x=i.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),r.identity(),a.copy(S.matrixWorld),a.premultiply(g),r.extractRotation(a),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),_++}else if(S.isPointLight){let x=i.point[u];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),u++}else if(S.isHemisphereLight){let x=i.hemi[T];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(g),T++}}}return{setup:o,setupView:l,state:i}}function bM(e){let t=new o3(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function d(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function l3(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new bM(e),t.set(s,[o])):a>=r.length?(o=new bM(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var c3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,h3=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],f3=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],TM=new Ue,uc=new z,Gg=new z;function d3(e,t,n){let i=new mo,s=new Qt,a=new Qt,r=new Re,o=new Nh,l=new Lh,c={},d=n.maxTextureSize,p={[_s]:En,[En]:_s,[hi]:hi},u=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:c3,fragmentShader:u3}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new Jn;_.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new Ne(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let h=this.type;this.render=function(w,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===qh&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$l);let A=e.getRenderTarget(),R=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),B=e.state;B.setBlending(Gi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let K=h!==this.type;K&&C.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(V=>V.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,V=w.length;J<V;J++){let Q=w[J],Z=Q.shadow;if(Z===void 0){Dt("WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let et=Z.getFrameExtents();s.multiply(et),a.copy(Z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/et.x),s.x=a.x*et.x,Z.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/et.y),s.y=a.y*et.y,Z.mapSize.y=a.y));let rt=e.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=rt,Z.map===null||K===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===yo){if(Q.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Zn(s.x,s.y,{format:_a,type:Hi,minFilter:hn,magFilter:hn,generateMipmaps:!1}),Z.map.texture.name=Q.name+".shadowMap",Z.map.depthTexture=new xs(s.x,s.y,Mi),Z.map.depthTexture.name=Q.name+".shadowMapDepth",Z.map.depthTexture.format=zi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=an,Z.map.depthTexture.magFilter=an}else Q.isPointLight?(Z.map=new Ff(s.x),Z.map.depthTexture=new Dh(s.x,Si)):(Z.map=new Zn(s.x,s.y),Z.map.depthTexture=new xs(s.x,s.y,Si)),Z.map.depthTexture.name=Q.name+".shadowMap",Z.map.depthTexture.format=zi,this.type===$l?(Z.map.depthTexture.compareFunction=rt?Of:If,Z.map.depthTexture.minFilter=hn,Z.map.depthTexture.magFilter=hn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=an,Z.map.depthTexture.magFilter=an);Z.camera.updateProjectionMatrix()}let L=Z.map.isWebGLCubeRenderTarget?6:1;for(let ut=0;ut<L;ut++){if(Z.map.isWebGLCubeRenderTarget)e.setRenderTarget(Z.map,ut),e.clear();else{ut===0&&(e.setRenderTarget(Z.map),e.clear());let ht=Z.getViewport(ut);r.set(a.x*ht.x,a.y*ht.y,a.x*ht.z,a.y*ht.w),B.viewport(r)}if(Q.isPointLight){let ht=Z.camera,jt=Z.matrix,ye=Q.distance||ht.far;ye!==ht.far&&(ht.far=ye,ht.updateProjectionMatrix()),uc.setFromMatrixPosition(Q.matrixWorld),ht.position.copy(uc),Gg.copy(ht.position),Gg.add(h3[ut]),ht.up.copy(f3[ut]),ht.lookAt(Gg),ht.updateMatrixWorld(),jt.makeTranslation(-uc.x,-uc.y,-uc.z),TM.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(TM,ht.coordinateSystem,ht.reversedDepth)}else Z.updateMatrices(Q);i=Z.getFrustum(),x(C,y,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===yo&&v(Z,y),Z.needsUpdate=!1}h=this.type,g.needsUpdate=!1,e.setRenderTarget(A,R,D)};function v(w,C){let y=t.update(T);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Zn(s.x,s.y,{format:_a,type:Hi})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(C,null,y,u,T,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(C,null,y,f,T,null)}function S(w,C,y,A){let R=null,D=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)R=D;else if(R=y.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=R.uuid,K=C.uuid,J=c[B];J===void 0&&(J={},c[B]=J);let V=J[K];V===void 0&&(V=R.clone(),J[K]=V,C.addEventListener("dispose",E)),R=V}if(R.visible=C.visible,R.wireframe=C.wireframe,A===yo?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:p[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let B=e.properties.get(R);B.light=y}return R}function x(w,C,y,A,R){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===yo)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let K=t.update(w),J=w.material;if(Array.isArray(J)){let V=K.groups;for(let Q=0,Z=V.length;Q<Z;Q++){let et=V[Q],rt=J[et.materialIndex];if(rt&&rt.visible){let L=S(w,rt,A,R);w.onBeforeShadow(e,w,C,y,K,L,et),e.renderBufferDirect(y,null,K,L,w,et),w.onAfterShadow(e,w,C,y,K,L,et)}}}else if(J.visible){let V=S(w,J,A,R);w.onBeforeShadow(e,w,C,y,K,V,null),e.renderBufferDirect(y,null,K,V,w,null),w.onAfterShadow(e,w,C,y,K,V,null)}}let B=w.children;for(let K=0,J=B.length;K<J;K++)x(B[K],C,y,A,R)}function E(w){w.target.removeEventListener("dispose",E);for(let y in c){let A=c[y],R=w.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function p3(e,t){function n(){let I=!1,ft=new Re,$=null,pt=new Re(0,0,0,0);return{setMask:function(vt){$!==vt&&!I&&(e.colorMask(vt,vt,vt,vt),$=vt)},setLocked:function(vt){I=vt},setClear:function(vt,st,Et,Mt,Le){Le===!0&&(vt*=Mt,st*=Mt,Et*=Mt),ft.set(vt,st,Et,Mt),pt.equals(ft)===!1&&(e.clearColor(vt,st,Et,Mt),pt.copy(ft))},reset:function(){I=!1,$=null,pt.set(-1,0,0,0)}}}function i(){let I=!1,ft=!1,$=null,pt=null,vt=null;return{setReversed:function(st){if(ft!==st){let Et=t.get("EXT_clip_control");st?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ft=st;let Mt=vt;vt=null,this.setClear(Mt)}},getReversed:function(){return ft},setTest:function(st){st?ot(e.DEPTH_TEST):Nt(e.DEPTH_TEST)},setMask:function(st){$!==st&&!I&&(e.depthMask(st),$=st)},setFunc:function(st){if(ft&&(st=$S[st]),pt!==st){switch(st){case mh:e.depthFunc(e.NEVER);break;case gh:e.depthFunc(e.ALWAYS);break;case _h:e.depthFunc(e.LESS);break;case Za:e.depthFunc(e.LEQUAL);break;case vh:e.depthFunc(e.EQUAL);break;case yh:e.depthFunc(e.GEQUAL);break;case xh:e.depthFunc(e.GREATER);break;case Sh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pt=st}},setLocked:function(st){I=st},setClear:function(st){vt!==st&&(vt=st,ft&&(st=1-st),e.clearDepth(st))},reset:function(){I=!1,$=null,pt=null,vt=null,ft=!1}}}function s(){let I=!1,ft=null,$=null,pt=null,vt=null,st=null,Et=null,Mt=null,Le=null;return{setTest:function(ge){I||(ge?ot(e.STENCIL_TEST):Nt(e.STENCIL_TEST))},setMask:function(ge){ft!==ge&&!I&&(e.stencilMask(ge),ft=ge)},setFunc:function(ge,bi,Ti){($!==ge||pt!==bi||vt!==Ti)&&(e.stencilFunc(ge,bi,Ti),$=ge,pt=bi,vt=Ti)},setOp:function(ge,bi,Ti){(st!==ge||Et!==bi||Mt!==Ti)&&(e.stencilOp(ge,bi,Ti),st=ge,Et=bi,Mt=Ti)},setLocked:function(ge){I=ge},setClear:function(ge){Le!==ge&&(e.clearStencil(ge),Le=ge)},reset:function(){I=!1,ft=null,$=null,pt=null,vt=null,st=null,Et=null,Mt=null,Le=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,d={},p={},u={},f=new WeakMap,_=[],T=null,g=!1,h=null,v=null,S=null,x=null,E=null,w=null,C=null,y=new Ht(0,0,0),A=0,R=!1,D=null,B=null,K=null,J=null,V=null,Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,et=0,rt=e.getParameter(e.VERSION);rt.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(rt)[1]),Z=et>=1):rt.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),Z=et>=2);let L=null,ut={},ht=e.getParameter(e.SCISSOR_BOX),jt=e.getParameter(e.VIEWPORT),ye=new Re().fromArray(ht),$t=new Re().fromArray(jt);function j(I,ft,$,pt){let vt=new Uint8Array(4),st=e.createTexture();e.bindTexture(I,st),e.texParameteri(I,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(I,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Et=0;Et<$;Et++)I===e.TEXTURE_3D||I===e.TEXTURE_2D_ARRAY?e.texImage3D(ft,0,e.RGBA,1,1,pt,0,e.RGBA,e.UNSIGNED_BYTE,vt):e.texImage2D(ft+Et,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,vt);return st}let lt={};lt[e.TEXTURE_2D]=j(e.TEXTURE_2D,e.TEXTURE_2D,1),lt[e.TEXTURE_CUBE_MAP]=j(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[e.TEXTURE_2D_ARRAY]=j(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),lt[e.TEXTURE_3D]=j(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ot(e.DEPTH_TEST),r.setFunc(Za),Lt(!1),Be(cg),ot(e.CULL_FACE),te(Gi);function ot(I){d[I]!==!0&&(e.enable(I),d[I]=!0)}function Nt(I){d[I]!==!1&&(e.disable(I),d[I]=!1)}function Ot(I,ft){return u[I]!==ft?(e.bindFramebuffer(I,ft),u[I]=ft,I===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ft),I===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ft),!0):!1}function Rt(I,ft){let $=_,pt=!1;if(I){$=f.get(ft),$===void 0&&($=[],f.set(ft,$));let vt=I.textures;if($.length!==vt.length||$[0]!==e.COLOR_ATTACHMENT0){for(let st=0,Et=vt.length;st<Et;st++)$[st]=e.COLOR_ATTACHMENT0+st;$.length=vt.length,pt=!0}}else $[0]!==e.BACK&&($[0]=e.BACK,pt=!0);pt&&e.drawBuffers($)}function Ae(I){return T!==I?(e.useProgram(I),T=I,!0):!1}let Xt={[ra]:e.FUNC_ADD,[MS]:e.FUNC_SUBTRACT,[bS]:e.FUNC_REVERSE_SUBTRACT};Xt[TS]=e.MIN,Xt[ES]=e.MAX;let re={[AS]:e.ZERO,[wS]:e.ONE,[CS]:e.SRC_COLOR,[dh]:e.SRC_ALPHA,[IS]:e.SRC_ALPHA_SATURATE,[NS]:e.DST_COLOR,[DS]:e.DST_ALPHA,[RS]:e.ONE_MINUS_SRC_COLOR,[ph]:e.ONE_MINUS_SRC_ALPHA,[LS]:e.ONE_MINUS_DST_COLOR,[US]:e.ONE_MINUS_DST_ALPHA,[OS]:e.CONSTANT_COLOR,[PS]:e.ONE_MINUS_CONSTANT_COLOR,[BS]:e.CONSTANT_ALPHA,[zS]:e.ONE_MINUS_CONSTANT_ALPHA};function te(I,ft,$,pt,vt,st,Et,Mt,Le,ge){if(I===Gi){g===!0&&(Nt(e.BLEND),g=!1);return}if(g===!1&&(ot(e.BLEND),g=!0),I!==SS){if(I!==h||ge!==R){if((v!==ra||E!==ra)&&(e.blendEquation(e.FUNC_ADD),v=ra,E=ra),ge)switch(I){case Ya:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ug:e.blendFunc(e.ONE,e.ONE);break;case hg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case fg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:It("WebGLState: Invalid blending: ",I);break}else switch(I){case Ya:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ug:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case hg:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fg:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",I);break}S=null,x=null,w=null,C=null,y.set(0,0,0),A=0,h=I,R=ge}return}vt=vt||ft,st=st||$,Et=Et||pt,(ft!==v||vt!==E)&&(e.blendEquationSeparate(Xt[ft],Xt[vt]),v=ft,E=vt),($!==S||pt!==x||st!==w||Et!==C)&&(e.blendFuncSeparate(re[$],re[pt],re[st],re[Et]),S=$,x=pt,w=st,C=Et),(Mt.equals(y)===!1||Le!==A)&&(e.blendColor(Mt.r,Mt.g,Mt.b,Le),y.copy(Mt),A=Le),h=I,R=!1}function ee(I,ft){I.side===hi?Nt(e.CULL_FACE):ot(e.CULL_FACE);let $=I.side===En;ft&&($=!$),Lt($),I.blending===Ya&&I.transparent===!1?te(Gi):te(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),a.setMask(I.colorWrite);let pt=I.stencilWrite;o.setTest(pt),pt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Xe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(e.SAMPLE_ALPHA_TO_COVERAGE):Nt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(I){D!==I&&(I?e.frontFace(e.CW):e.frontFace(e.CCW),D=I)}function Be(I){I!==yS?(ot(e.CULL_FACE),I!==B&&(I===cg?e.cullFace(e.BACK):I===xS?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Nt(e.CULL_FACE),B=I}function ze(I){I!==K&&(Z&&e.lineWidth(I),K=I)}function Xe(I,ft,$){I?(ot(e.POLYGON_OFFSET_FILL),(J!==ft||V!==$)&&(J=ft,V=$,r.getReversed()&&(ft=-ft),e.polygonOffset(ft,$))):Nt(e.POLYGON_OFFSET_FILL)}function xe(I){I?ot(e.SCISSOR_TEST):Nt(e.SCISSOR_TEST)}function De(I){I===void 0&&(I=e.TEXTURE0+Q-1),L!==I&&(e.activeTexture(I),L=I)}function O(I,ft,$){$===void 0&&(L===null?$=e.TEXTURE0+Q-1:$=L);let pt=ut[$];pt===void 0&&(pt={type:void 0,texture:void 0},ut[$]=pt),(pt.type!==I||pt.texture!==ft)&&(L!==$&&(e.activeTexture($),L=$),e.bindTexture(I,ft||lt[I]),pt.type=I,pt.texture=ft)}function F(){let I=ut[L];I!==void 0&&I.type!==void 0&&(e.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{e.compressedTexImage2D(...arguments)}catch(I){It("WebGLState:",I)}}function M(){try{e.compressedTexImage3D(...arguments)}catch(I){It("WebGLState:",I)}}function m(){try{e.texSubImage2D(...arguments)}catch(I){It("WebGLState:",I)}}function U(){try{e.texSubImage3D(...arguments)}catch(I){It("WebGLState:",I)}}function N(){try{e.compressedTexSubImage2D(...arguments)}catch(I){It("WebGLState:",I)}}function G(){try{e.compressedTexSubImage3D(...arguments)}catch(I){It("WebGLState:",I)}}function it(){try{e.texStorage2D(...arguments)}catch(I){It("WebGLState:",I)}}function nt(){try{e.texStorage3D(...arguments)}catch(I){It("WebGLState:",I)}}function k(){try{e.texImage2D(...arguments)}catch(I){It("WebGLState:",I)}}function W(){try{e.texImage3D(...arguments)}catch(I){It("WebGLState:",I)}}function at(I){return p[I]!==void 0?p[I]:e.getParameter(I)}function St(I,ft){p[I]!==ft&&(e.pixelStorei(I,ft),p[I]=ft)}function ct(I){ye.equals(I)===!1&&(e.scissor(I.x,I.y,I.z,I.w),ye.copy(I))}function dt(I){$t.equals(I)===!1&&(e.viewport(I.x,I.y,I.z,I.w),$t.copy(I))}function Tt(I,ft){let $=c.get(ft);$===void 0&&($=new WeakMap,c.set(ft,$));let pt=$.get(I);pt===void 0&&(pt=e.getUniformBlockIndex(ft,I.name),$.set(I,pt))}function Ut(I,ft){let pt=c.get(ft).get(I);l.get(ft)!==pt&&(e.uniformBlockBinding(ft,pt,I.__bindingPointIndex),l.set(ft,pt))}function Ft(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},p={},L=null,ut={},u={},f=new WeakMap,_=[],T=null,g=!1,h=null,v=null,S=null,x=null,E=null,w=null,C=null,y=new Ht(0,0,0),A=0,R=!1,D=null,B=null,K=null,J=null,V=null,ye.set(0,0,e.canvas.width,e.canvas.height),$t.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ot,disable:Nt,bindFramebuffer:Ot,drawBuffers:Rt,useProgram:Ae,setBlending:te,setMaterial:ee,setFlipSided:Lt,setCullFace:Be,setLineWidth:ze,setPolygonOffset:Xe,setScissorTest:xe,activeTexture:De,bindTexture:O,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:M,texImage2D:k,texImage3D:W,pixelStorei:St,getParameter:at,updateUBOMapping:Tt,uniformBlockBinding:Ut,texStorage2D:it,texStorage3D:nt,texSubImage2D:m,texSubImage3D:U,compressedTexSubImage2D:N,compressedTexSubImage3D:G,scissor:ct,viewport:dt,reset:Ft}}function m3(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qt,d=new WeakMap,p=new Set,u,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(M,m){return _?new OffscreenCanvas(M,m):Pl("canvas")}function g(M,m,U){let N=1,G=q(M);if((G.width>U||G.height>U)&&(N=U/Math.max(G.width,G.height)),N<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let it=Math.floor(N*G.width),nt=Math.floor(N*G.height);u===void 0&&(u=T(it,nt));let k=m?T(it,nt):u;return k.width=it,k.height=nt,k.getContext("2d").drawImage(M,0,0,it,nt),Dt("WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+it+"x"+nt+")."),k}else return"data"in M&&Dt("WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),M;return M}function h(M){return M.generateMipmaps}function v(M){e.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?e.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(M,m,U,N,G,it=!1){if(M!==null){if(e[M]!==void 0)return e[M];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let nt;N&&(nt=t.get("EXT_texture_norm16"),nt||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=m;if(m===e.RED&&(U===e.FLOAT&&(k=e.R32F),U===e.HALF_FLOAT&&(k=e.R16F),U===e.UNSIGNED_BYTE&&(k=e.R8),U===e.UNSIGNED_SHORT&&nt&&(k=nt.R16_EXT),U===e.SHORT&&nt&&(k=nt.R16_SNORM_EXT)),m===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(k=e.R8UI),U===e.UNSIGNED_SHORT&&(k=e.R16UI),U===e.UNSIGNED_INT&&(k=e.R32UI),U===e.BYTE&&(k=e.R8I),U===e.SHORT&&(k=e.R16I),U===e.INT&&(k=e.R32I)),m===e.RG&&(U===e.FLOAT&&(k=e.RG32F),U===e.HALF_FLOAT&&(k=e.RG16F),U===e.UNSIGNED_BYTE&&(k=e.RG8),U===e.UNSIGNED_SHORT&&nt&&(k=nt.RG16_EXT),U===e.SHORT&&nt&&(k=nt.RG16_SNORM_EXT)),m===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(k=e.RG8UI),U===e.UNSIGNED_SHORT&&(k=e.RG16UI),U===e.UNSIGNED_INT&&(k=e.RG32UI),U===e.BYTE&&(k=e.RG8I),U===e.SHORT&&(k=e.RG16I),U===e.INT&&(k=e.RG32I)),m===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(k=e.RGB8UI),U===e.UNSIGNED_SHORT&&(k=e.RGB16UI),U===e.UNSIGNED_INT&&(k=e.RGB32UI),U===e.BYTE&&(k=e.RGB8I),U===e.SHORT&&(k=e.RGB16I),U===e.INT&&(k=e.RGB32I)),m===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(k=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(k=e.RGBA16UI),U===e.UNSIGNED_INT&&(k=e.RGBA32UI),U===e.BYTE&&(k=e.RGBA8I),U===e.SHORT&&(k=e.RGBA16I),U===e.INT&&(k=e.RGBA32I)),m===e.RGB&&(U===e.UNSIGNED_SHORT&&nt&&(k=nt.RGB16_EXT),U===e.SHORT&&nt&&(k=nt.RGB16_SNORM_EXT),U===e.UNSIGNED_INT_5_9_9_9_REV&&(k=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(k=e.R11F_G11F_B10F)),m===e.RGBA){let W=it?Ol:Jt.getTransfer(G);U===e.FLOAT&&(k=e.RGBA32F),U===e.HALF_FLOAT&&(k=e.RGBA16F),U===e.UNSIGNED_BYTE&&(k=W===oe?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT&&nt&&(k=nt.RGBA16_EXT),U===e.SHORT&&nt&&(k=nt.RGBA16_SNORM_EXT),U===e.UNSIGNED_SHORT_4_4_4_4&&(k=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(k=e.RGB5_A1)}return(k===e.R16F||k===e.R32F||k===e.RG16F||k===e.RG32F||k===e.RGBA16F||k===e.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function E(M,m){let U;return M?m===null||m===Si||m===So?U=e.DEPTH24_STENCIL8:m===Mi?U=e.DEPTH32F_STENCIL8:m===xo&&(U=e.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Si||m===So?U=e.DEPTH_COMPONENT24:m===Mi?U=e.DEPTH_COMPONENT32F:m===xo&&(U=e.DEPTH_COMPONENT16),U}function w(M,m){return h(M)===!0||M.isFramebufferTexture&&M.minFilter!==an&&M.minFilter!==hn?Math.log2(Math.max(m.width,m.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?m.mipmaps.length:1}function C(M){let m=M.target;m.removeEventListener("dispose",C),A(m),m.isVideoTexture&&d.delete(m),m.isHTMLTexture&&p.delete(m)}function y(M){let m=M.target;m.removeEventListener("dispose",y),D(m)}function A(M){let m=i.get(M);if(m.__webglInit===void 0)return;let U=M.source,N=f.get(U);if(N){let G=N[m.__cacheKey];G.usedTimes--,G.usedTimes===0&&R(M),Object.keys(N).length===0&&f.delete(U)}i.remove(M)}function R(M){let m=i.get(M);e.deleteTexture(m.__webglTexture);let U=M.source,N=f.get(U);delete N[m.__cacheKey],r.memory.textures--}function D(M){let m=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(m.__webglFramebuffer[N]))for(let G=0;G<m.__webglFramebuffer[N].length;G++)e.deleteFramebuffer(m.__webglFramebuffer[N][G]);else e.deleteFramebuffer(m.__webglFramebuffer[N]);m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer[N])}else{if(Array.isArray(m.__webglFramebuffer))for(let N=0;N<m.__webglFramebuffer.length;N++)e.deleteFramebuffer(m.__webglFramebuffer[N]);else e.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&e.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let N=0;N<m.__webglColorRenderbuffer.length;N++)m.__webglColorRenderbuffer[N]&&e.deleteRenderbuffer(m.__webglColorRenderbuffer[N]);m.__webglDepthRenderbuffer&&e.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let U=M.textures;for(let N=0,G=U.length;N<G;N++){let it=i.get(U[N]);it.__webglTexture&&(e.deleteTexture(it.__webglTexture),r.memory.textures--),i.remove(U[N])}i.remove(M)}let B=0;function K(){B=0}function J(){return B}function V(M){B=M}function Q(){let M=B;return M>=s.maxTextures&&Dt("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),B+=1,M}function Z(M){let m=[];return m.push(M.wrapS),m.push(M.wrapT),m.push(M.wrapR||0),m.push(M.magFilter),m.push(M.minFilter),m.push(M.anisotropy),m.push(M.internalFormat),m.push(M.format),m.push(M.type),m.push(M.generateMipmaps),m.push(M.premultiplyAlpha),m.push(M.flipY),m.push(M.unpackAlignment),m.push(M.colorSpace),m.join()}function et(M,m){let U=i.get(M);if(M.isVideoTexture&&O(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&U.__version!==M.version){let N=M.image;if(N===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(U,M,m);return}}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+m)}function rt(M,m){let U=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){Nt(U,M,m);return}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+m)}function L(M,m){let U=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){Nt(U,M,m);return}n.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+m)}function ut(M,m){let U=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&U.__version!==M.version){Ot(U,M,m);return}n.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+m)}let ht={[Mh]:e.REPEAT,[Pi]:e.CLAMP_TO_EDGE,[bh]:e.MIRRORED_REPEAT},jt={[an]:e.NEAREST,[GS]:e.NEAREST_MIPMAP_NEAREST,[nc]:e.NEAREST_MIPMAP_LINEAR,[hn]:e.LINEAR,[Jh]:e.LINEAR_MIPMAP_NEAREST,[ma]:e.LINEAR_MIPMAP_LINEAR},ye={[XS]:e.NEVER,[JS]:e.ALWAYS,[WS]:e.LESS,[If]:e.LEQUAL,[qS]:e.EQUAL,[Of]:e.GEQUAL,[YS]:e.GREATER,[ZS]:e.NOTEQUAL};function $t(M,m){if(m.type===Mi&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===hn||m.magFilter===Jh||m.magFilter===nc||m.magFilter===ma||m.minFilter===hn||m.minFilter===Jh||m.minFilter===nc||m.minFilter===ma)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(M,e.TEXTURE_WRAP_S,ht[m.wrapS]),e.texParameteri(M,e.TEXTURE_WRAP_T,ht[m.wrapT]),(M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY)&&e.texParameteri(M,e.TEXTURE_WRAP_R,ht[m.wrapR]),e.texParameteri(M,e.TEXTURE_MAG_FILTER,jt[m.magFilter]),e.texParameteri(M,e.TEXTURE_MIN_FILTER,jt[m.minFilter]),m.compareFunction&&(e.texParameteri(M,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(M,e.TEXTURE_COMPARE_FUNC,ye[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===an||m.minFilter!==nc&&m.minFilter!==ma||m.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(M,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function j(M,m){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,m.addEventListener("dispose",C));let N=m.source,G=f.get(N);G===void 0&&(G={},f.set(N,G));let it=Z(m);if(it!==M.__cacheKey){G[it]===void 0&&(G[it]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,U=!0),G[it].usedTimes++;let nt=G[M.__cacheKey];nt!==void 0&&(G[M.__cacheKey].usedTimes--,nt.usedTimes===0&&R(m)),M.__cacheKey=it,M.__webglTexture=G[it].texture}return U}function lt(M,m,U){return Math.floor(Math.floor(M/U)/m)}function ot(M,m,U,N){let it=M.updateRanges;if(it.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,m.width,m.height,U,N,m.data);else{it.sort((St,ct)=>St.start-ct.start);let nt=0;for(let St=1;St<it.length;St++){let ct=it[nt],dt=it[St],Tt=ct.start+ct.count,Ut=lt(dt.start,m.width,4),Ft=lt(ct.start,m.width,4);dt.start<=Tt+1&&Ut===Ft&&lt(dt.start+dt.count-1,m.width,4)===Ut?ct.count=Math.max(ct.count,dt.start+dt.count-ct.start):(++nt,it[nt]=dt)}it.length=nt+1;let k=n.getParameter(e.UNPACK_ROW_LENGTH),W=n.getParameter(e.UNPACK_SKIP_PIXELS),at=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,m.width);for(let St=0,ct=it.length;St<ct;St++){let dt=it[St],Tt=Math.floor(dt.start/4),Ut=Math.ceil(dt.count/4),Ft=Tt%m.width,I=Math.floor(Tt/m.width),ft=Ut,$=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Ft),n.pixelStorei(e.UNPACK_SKIP_ROWS,I),n.texSubImage2D(e.TEXTURE_2D,0,Ft,I,ft,$,U,N,m.data)}M.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,k),n.pixelStorei(e.UNPACK_SKIP_PIXELS,W),n.pixelStorei(e.UNPACK_SKIP_ROWS,at)}}function Nt(M,m,U){let N=e.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(N=e.TEXTURE_2D_ARRAY),m.isData3DTexture&&(N=e.TEXTURE_3D);let G=j(M,m),it=m.source;n.bindTexture(N,M.__webglTexture,e.TEXTURE0+U);let nt=i.get(it);if(it.version!==nt.__version||G===!0){if(n.activeTexture(e.TEXTURE0+U),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){let $=Jt.getPrimaries(Jt.workingColorSpace),pt=m.colorSpace===Ss?null:Jt.getPrimaries(m.colorSpace),vt=m.colorSpace===Ss||$===pt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}n.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment);let W=g(m.image,!1,s.maxTextureSize);W=F(m,W);let at=a.convert(m.format,m.colorSpace),St=a.convert(m.type),ct=x(m.internalFormat,at,St,m.normalized,m.colorSpace,m.isVideoTexture);$t(N,m);let dt,Tt=m.mipmaps,Ut=m.isVideoTexture!==!0,Ft=nt.__version===void 0||G===!0,I=it.dataReady,ft=w(m,W);if(m.isDepthTexture)ct=E(m.format===ga,m.type),Ft&&(Ut?n.texStorage2D(e.TEXTURE_2D,1,ct,W.width,W.height):n.texImage2D(e.TEXTURE_2D,0,ct,W.width,W.height,0,at,St,null));else if(m.isDataTexture)if(Tt.length>0){Ut&&Ft&&n.texStorage2D(e.TEXTURE_2D,ft,ct,Tt[0].width,Tt[0].height);for(let $=0,pt=Tt.length;$<pt;$++)dt=Tt[$],Ut?I&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,dt.width,dt.height,at,St,dt.data):n.texImage2D(e.TEXTURE_2D,$,ct,dt.width,dt.height,0,at,St,dt.data);m.generateMipmaps=!1}else Ut?(Ft&&n.texStorage2D(e.TEXTURE_2D,ft,ct,W.width,W.height),I&&ot(m,W,at,St)):n.texImage2D(e.TEXTURE_2D,0,ct,W.width,W.height,0,at,St,W.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ut&&Ft&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ft,ct,Tt[0].width,Tt[0].height,W.depth);for(let $=0,pt=Tt.length;$<pt;$++)if(dt=Tt[$],m.format!==fi)if(at!==null)if(Ut){if(I)if(m.layerUpdates.size>0){let vt=Og(dt.width,dt.height,m.format,m.type);for(let st of m.layerUpdates){let Et=dt.data.subarray(st*vt/dt.data.BYTES_PER_ELEMENT,(st+1)*vt/dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,st,dt.width,dt.height,1,at,Et)}m.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,W.depth,at,dt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,ct,dt.width,dt.height,W.depth,0,dt.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?I&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,W.depth,at,St,dt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,$,ct,dt.width,dt.height,W.depth,0,at,St,dt.data)}else{Ut&&Ft&&n.texStorage2D(e.TEXTURE_2D,ft,ct,Tt[0].width,Tt[0].height);for(let $=0,pt=Tt.length;$<pt;$++)dt=Tt[$],m.format!==fi?at!==null?Ut?I&&n.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,dt.width,dt.height,at,dt.data):n.compressedTexImage2D(e.TEXTURE_2D,$,ct,dt.width,dt.height,0,dt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?I&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,dt.width,dt.height,at,St,dt.data):n.texImage2D(e.TEXTURE_2D,$,ct,dt.width,dt.height,0,at,St,dt.data)}else if(m.isDataArrayTexture)if(Ut){if(Ft&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ft,ct,W.width,W.height,W.depth),I)if(m.layerUpdates.size>0){let $=Og(W.width,W.height,m.format,m.type);for(let pt of m.layerUpdates){let vt=W.data.subarray(pt*$/W.data.BYTES_PER_ELEMENT,(pt+1)*$/W.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,pt,W.width,W.height,1,at,St,vt)}m.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,at,St,W.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ct,W.width,W.height,W.depth,0,at,St,W.data);else if(m.isData3DTexture)Ut?(Ft&&n.texStorage3D(e.TEXTURE_3D,ft,ct,W.width,W.height,W.depth),I&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,at,St,W.data)):n.texImage3D(e.TEXTURE_3D,0,ct,W.width,W.height,W.depth,0,at,St,W.data);else if(m.isFramebufferTexture){if(Ft)if(Ut)n.texStorage2D(e.TEXTURE_2D,ft,ct,W.width,W.height);else{let $=W.width,pt=W.height;for(let vt=0;vt<ft;vt++)n.texImage2D(e.TEXTURE_2D,vt,ct,$,pt,0,at,St,null),$>>=1,pt>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in e){let $=e.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),W.parentNode!==$){$.appendChild(W),p.add(m),$.onpaint=pt=>{let vt=pt.changedElements;for(let st of p)vt.includes(st.image)&&(st.needsUpdate=!0)},$.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,W);else{let vt=e.RGBA,st=e.RGBA,Et=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,vt,st,Et,W)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Ut&&Ft){let $=q(Tt[0]);n.texStorage2D(e.TEXTURE_2D,ft,ct,$.width,$.height)}for(let $=0,pt=Tt.length;$<pt;$++)dt=Tt[$],Ut?I&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,at,St,dt):n.texImage2D(e.TEXTURE_2D,$,ct,at,St,dt);m.generateMipmaps=!1}else if(Ut){if(Ft){let $=q(W);n.texStorage2D(e.TEXTURE_2D,ft,ct,$.width,$.height)}I&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,at,St,W)}else n.texImage2D(e.TEXTURE_2D,0,ct,at,St,W);h(m)&&v(N),nt.__version=it.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function Ot(M,m,U){if(m.image.length!==6)return;let N=j(M,m),G=m.source;n.bindTexture(e.TEXTURE_CUBE_MAP,M.__webglTexture,e.TEXTURE0+U);let it=i.get(G);if(G.version!==it.__version||N===!0){n.activeTexture(e.TEXTURE0+U);let nt=Jt.getPrimaries(Jt.workingColorSpace),k=m.colorSpace===Ss?null:Jt.getPrimaries(m.colorSpace),W=m.colorSpace===Ss||nt===k?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);let at=m.isCompressedTexture||m.image[0].isCompressedTexture,St=m.image[0]&&m.image[0].isDataTexture,ct=[];for(let st=0;st<6;st++)!at&&!St?ct[st]=g(m.image[st],!0,s.maxCubemapSize):ct[st]=St?m.image[st].image:m.image[st],ct[st]=F(m,ct[st]);let dt=ct[0],Tt=a.convert(m.format,m.colorSpace),Ut=a.convert(m.type),Ft=x(m.internalFormat,Tt,Ut,m.normalized,m.colorSpace),I=m.isVideoTexture!==!0,ft=it.__version===void 0||N===!0,$=G.dataReady,pt=w(m,dt);$t(e.TEXTURE_CUBE_MAP,m);let vt;if(at){I&&ft&&n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Ft,dt.width,dt.height);for(let st=0;st<6;st++){vt=ct[st].mipmaps;for(let Et=0;Et<vt.length;Et++){let Mt=vt[Et];m.format!==fi?Tt!==null?I?$&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,0,0,Mt.width,Mt.height,Tt,Mt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,Ft,Mt.width,Mt.height,0,Mt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,0,0,Mt.width,Mt.height,Tt,Ut,Mt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,Ft,Mt.width,Mt.height,0,Tt,Ut,Mt.data)}}}else{if(vt=m.mipmaps,I&&ft){vt.length>0&&pt++;let st=q(ct[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Ft,st.width,st.height)}for(let st=0;st<6;st++)if(St){I?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ct[st].width,ct[st].height,Tt,Ut,ct[st].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ft,ct[st].width,ct[st].height,0,Tt,Ut,ct[st].data);for(let Et=0;Et<vt.length;Et++){let Le=vt[Et].image[st].image;I?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,0,0,Le.width,Le.height,Tt,Ut,Le.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,Ft,Le.width,Le.height,0,Tt,Ut,Le.data)}}else{I?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Tt,Ut,ct[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ft,Tt,Ut,ct[st]);for(let Et=0;Et<vt.length;Et++){let Mt=vt[Et];I?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,0,0,Tt,Ut,Mt.image[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,Ft,Tt,Ut,Mt.image[st])}}}h(m)&&v(e.TEXTURE_CUBE_MAP),it.__version=G.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function Rt(M,m,U,N,G,it){let nt=a.convert(U.format,U.colorSpace),k=a.convert(U.type),W=x(U.internalFormat,nt,k,U.normalized,U.colorSpace),at=i.get(m),St=i.get(U);if(St.__renderTarget=m,!at.__hasExternalTextures){let ct=Math.max(1,m.width>>it),dt=Math.max(1,m.height>>it);G===e.TEXTURE_3D||G===e.TEXTURE_2D_ARRAY?n.texImage3D(G,it,W,ct,dt,m.depth,0,nt,k,null):n.texImage2D(G,it,W,ct,dt,0,nt,k,null)}n.bindFramebuffer(e.FRAMEBUFFER,M),De(m)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,N,G,St.__webglTexture,0,xe(m)):(G===e.TEXTURE_2D||G>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,N,G,St.__webglTexture,it),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(M,m,U){if(e.bindRenderbuffer(e.RENDERBUFFER,M),m.depthBuffer){let N=m.depthTexture,G=N&&N.isDepthTexture?N.type:null,it=E(m.stencilBuffer,G),nt=m.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;De(m)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe(m),it,m.width,m.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe(m),it,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,it,m.width,m.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,M)}else{let N=m.textures;for(let G=0;G<N.length;G++){let it=N[G],nt=a.convert(it.format,it.colorSpace),k=a.convert(it.type),W=x(it.internalFormat,nt,k,it.normalized,it.colorSpace);De(m)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe(m),W,m.width,m.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe(m),W,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,W,m.width,m.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Xt(M,m,U){let N=m.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,M),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let G=i.get(m.depthTexture);if(G.__renderTarget=m,(!G.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),N){if(G.__webglInit===void 0&&(G.__webglInit=!0,m.depthTexture.addEventListener("dispose",C)),G.__webglTexture===void 0){G.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),$t(e.TEXTURE_CUBE_MAP,m.depthTexture);let at=a.convert(m.depthTexture.format),St=a.convert(m.depthTexture.type),ct;m.depthTexture.format===zi?ct=e.DEPTH_COMPONENT24:m.depthTexture.format===ga&&(ct=e.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ct,m.width,m.height,0,at,St,null)}}else et(m.depthTexture,0);let it=G.__webglTexture,nt=xe(m),k=N?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,W=m.depthTexture.format===ga?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(m.depthTexture.format===zi)De(m)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,W,k,it,0,nt):e.framebufferTexture2D(e.FRAMEBUFFER,W,k,it,0);else if(m.depthTexture.format===ga)De(m)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,W,k,it,0,nt):e.framebufferTexture2D(e.FRAMEBUFFER,W,k,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(M){let m=i.get(M),U=M.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==M.depthTexture){let N=M.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),N){let G=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,N.removeEventListener("dispose",G)};N.addEventListener("dispose",G),m.__depthDisposeCallback=G}m.__boundDepthTexture=N}if(M.depthTexture&&!m.__autoAllocateDepthBuffer)if(U)for(let N=0;N<6;N++)Xt(m.__webglFramebuffer[N],M,N);else{let N=M.texture.mipmaps;N&&N.length>0?Xt(m.__webglFramebuffer[0],M,0):Xt(m.__webglFramebuffer,M,0)}else if(U){m.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(n.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[N]),m.__webglDepthbuffer[N]===void 0)m.__webglDepthbuffer[N]=e.createRenderbuffer(),Ae(m.__webglDepthbuffer[N],M,!1);else{let G=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,it=m.__webglDepthbuffer[N];e.bindRenderbuffer(e.RENDERBUFFER,it),e.framebufferRenderbuffer(e.FRAMEBUFFER,G,e.RENDERBUFFER,it)}}else{let N=M.texture.mipmaps;if(N&&N.length>0?n.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=e.createRenderbuffer(),Ae(m.__webglDepthbuffer,M,!1);else{let G=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,it=m.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,it),e.framebufferRenderbuffer(e.FRAMEBUFFER,G,e.RENDERBUFFER,it)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function te(M,m,U){let N=i.get(M);m!==void 0&&Rt(N.__webglFramebuffer,M,M.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&re(M)}function ee(M){let m=M.texture,U=i.get(M),N=i.get(m);M.addEventListener("dispose",y);let G=M.textures,it=M.isWebGLCubeRenderTarget===!0,nt=G.length>1;if(nt||(N.__webglTexture===void 0&&(N.__webglTexture=e.createTexture()),N.__version=m.version,r.memory.textures++),it){U.__webglFramebuffer=[];for(let k=0;k<6;k++)if(m.mipmaps&&m.mipmaps.length>0){U.__webglFramebuffer[k]=[];for(let W=0;W<m.mipmaps.length;W++)U.__webglFramebuffer[k][W]=e.createFramebuffer()}else U.__webglFramebuffer[k]=e.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){U.__webglFramebuffer=[];for(let k=0;k<m.mipmaps.length;k++)U.__webglFramebuffer[k]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(nt)for(let k=0,W=G.length;k<W;k++){let at=i.get(G[k]);at.__webglTexture===void 0&&(at.__webglTexture=e.createTexture(),r.memory.textures++)}if(M.samples>0&&De(M)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let k=0;k<G.length;k++){let W=G[k];U.__webglColorRenderbuffer[k]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[k]);let at=a.convert(W.format,W.colorSpace),St=a.convert(W.type),ct=x(W.internalFormat,at,St,W.normalized,W.colorSpace,M.isXRRenderTarget===!0),dt=xe(M);e.renderbufferStorageMultisample(e.RENDERBUFFER,dt,ct,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+k,e.RENDERBUFFER,U.__webglColorRenderbuffer[k])}e.bindRenderbuffer(e.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),Ae(U.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(it){n.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture),$t(e.TEXTURE_CUBE_MAP,m);for(let k=0;k<6;k++)if(m.mipmaps&&m.mipmaps.length>0)for(let W=0;W<m.mipmaps.length;W++)Rt(U.__webglFramebuffer[k][W],M,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+k,W);else Rt(U.__webglFramebuffer[k],M,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);h(m)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(nt){for(let k=0,W=G.length;k<W;k++){let at=G[k],St=i.get(at),ct=e.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ct=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ct,St.__webglTexture),$t(ct,at),Rt(U.__webglFramebuffer,M,at,e.COLOR_ATTACHMENT0+k,ct,0),h(at)&&v(ct)}n.unbindTexture()}else{let k=e.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(k=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(k,N.__webglTexture),$t(k,m),m.mipmaps&&m.mipmaps.length>0)for(let W=0;W<m.mipmaps.length;W++)Rt(U.__webglFramebuffer[W],M,m,e.COLOR_ATTACHMENT0,k,W);else Rt(U.__webglFramebuffer,M,m,e.COLOR_ATTACHMENT0,k,0);h(m)&&v(k),n.unbindTexture()}M.depthBuffer&&re(M)}function Lt(M){let m=M.textures;for(let U=0,N=m.length;U<N;U++){let G=m[U];if(h(G)){let it=S(M),nt=i.get(G).__webglTexture;n.bindTexture(it,nt),v(it),n.unbindTexture()}}}let Be=[],ze=[];function Xe(M){if(M.samples>0){if(De(M)===!1){let m=M.textures,U=M.width,N=M.height,G=e.COLOR_BUFFER_BIT,it=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,nt=i.get(M),k=m.length>1;if(k)for(let at=0;at<m.length;at++)n.bindFramebuffer(e.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+at,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,nt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+at,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer);let W=M.texture.mipmaps;W&&W.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,nt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let at=0;at<m.length;at++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(G|=e.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(G|=e.STENCIL_BUFFER_BIT)),k){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,nt.__webglColorRenderbuffer[at]);let St=i.get(m[at]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,St,0)}e.blitFramebuffer(0,0,U,N,0,0,U,N,G,e.NEAREST),l===!0&&(Be.length=0,ze.length=0,Be.push(e.COLOR_ATTACHMENT0+at),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Be.push(it),ze.push(it),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ze)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Be))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),k)for(let at=0;at<m.length;at++){n.bindFramebuffer(e.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+at,e.RENDERBUFFER,nt.__webglColorRenderbuffer[at]);let St=i.get(m[at]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,nt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+at,e.TEXTURE_2D,St,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let m=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[m])}}}function xe(M){return Math.min(s.maxSamples,M.samples)}function De(M){let m=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function O(M){let m=r.render.frame;d.get(M)!==m&&(d.set(M,m),M.update())}function F(M,m){let U=M.colorSpace,N=M.format,G=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||U!==Il&&U!==Ss&&(Jt.getTransfer(U)===oe?(N!==fi||G!==Ln)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",U)),m}function q(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=K,this.getTextureUnits=J,this.setTextureUnits=V,this.setTexture2D=et,this.setTexture2DArray=rt,this.setTexture3D=L,this.setTextureCube=ut,this.rebindTextures=te,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function g3(e,t){function n(i,s=Ss){let a,r=Jt.getTransfer(s);if(i===Ln)return e.UNSIGNED_BYTE;if(i===Qh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===jh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===bg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Tg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sg)return e.BYTE;if(i===Mg)return e.SHORT;if(i===xo)return e.UNSIGNED_SHORT;if(i===Kh)return e.INT;if(i===Si)return e.UNSIGNED_INT;if(i===Mi)return e.FLOAT;if(i===Hi)return e.HALF_FLOAT;if(i===Eg)return e.ALPHA;if(i===Ag)return e.RGB;if(i===fi)return e.RGBA;if(i===zi)return e.DEPTH_COMPONENT;if(i===ga)return e.DEPTH_STENCIL;if(i===wg)return e.RED;if(i===$h)return e.RED_INTEGER;if(i===_a)return e.RG;if(i===tf)return e.RG_INTEGER;if(i===ef)return e.RGBA_INTEGER;if(i===ic||i===sc||i===ac||i===rc)if(r===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ic)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ic)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ac)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nf||i===sf||i===af||i===rf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===nf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===af)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===of||i===lf||i===cf||i===uf||i===hf||i===oc||i===ff)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===of||i===lf)return r===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===cf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===uf)return a.COMPRESSED_R11_EAC;if(i===hf)return a.COMPRESSED_SIGNED_R11_EAC;if(i===oc)return a.COMPRESSED_RG11_EAC;if(i===ff)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===df||i===pf||i===mf||i===gf||i===_f||i===vf||i===yf||i===xf||i===Sf||i===Mf||i===bf||i===Tf||i===Ef||i===Af)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===df)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_f)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ef)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Af)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wf||i===Cf||i===Rf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===wf)return r===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Df||i===Uf||i===lc||i===Nf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Df)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Uf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var _3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Wl(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Kn({vertexShader:_3,fragmentShader:v3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ne(new Ja(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kg=class extends Fi{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,f=null,_=null,T=typeof XRWebGLBinding<"u",g=new Jg,h={},v=n.getContextAttributes(),S=null,x=null,E=[],w=[],C=new Qt,y=null,A=new _n;A.viewport=new Re;let R=new _n;R.viewport=new Re;let D=[A,R],B=new Wh,K=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let lt=E[j];return lt===void 0&&(lt=new fo,E[j]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(j){let lt=E[j];return lt===void 0&&(lt=new fo,E[j]=lt),lt.getGripSpace()},this.getHand=function(j){let lt=E[j];return lt===void 0&&(lt=new fo,E[j]=lt),lt.getHandSpace()};function V(j){let lt=w.indexOf(j.inputSource);if(lt===-1)return;let ot=E[lt];ot!==void 0&&(ot.update(j.inputSource,j.frame,c||r),ot.dispatchEvent({type:j.type,data:j.inputSource}))}function Q(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",Z);for(let j=0;j<E.length;j++){let lt=w[j];lt!==null&&(w[j]=null,E[j].disconnect(lt))}K=null,J=null,g.reset();for(let j in h)delete h[j];t.setRenderTarget(S),f=null,u=null,p=null,s=null,x=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await n.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Nt=null,Ot=null;v.depth&&(Ot=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ot=v.stencil?ga:zi,Nt=v.stencil?So:Si);let Rt={colorFormat:n.RGBA8,depthFormat:Ot,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Rt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Zn(u.textureWidth,u.textureHeight,{format:fi,type:Ln,depthTexture:new xs(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ot={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,n,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Zn(f.framebufferWidth,f.framebufferHeight,{format:fi,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(j){for(let lt=0;lt<j.removed.length;lt++){let ot=j.removed[lt],Nt=w.indexOf(ot);Nt>=0&&(w[Nt]=null,E[Nt].disconnect(ot))}for(let lt=0;lt<j.added.length;lt++){let ot=j.added[lt],Nt=w.indexOf(ot);if(Nt===-1){for(let Rt=0;Rt<E.length;Rt++)if(Rt>=w.length){w.push(ot),Nt=Rt;break}else if(w[Rt]===null){w[Rt]=ot,Nt=Rt;break}if(Nt===-1)break}let Ot=E[Nt];Ot&&Ot.connect(ot)}}let et=new z,rt=new z;function L(j,lt,ot){et.setFromMatrixPosition(lt.matrixWorld),rt.setFromMatrixPosition(ot.matrixWorld);let Nt=et.distanceTo(rt),Ot=lt.projectionMatrix.elements,Rt=ot.projectionMatrix.elements,Ae=Ot[14]/(Ot[10]-1),Xt=Ot[14]/(Ot[10]+1),re=(Ot[9]+1)/Ot[5],te=(Ot[9]-1)/Ot[5],ee=(Ot[8]-1)/Ot[0],Lt=(Rt[8]+1)/Rt[0],Be=Ae*ee,ze=Ae*Lt,Xe=Nt/(-ee+Lt),xe=Xe*-ee;if(lt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(xe),j.translateZ(Xe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ot[10]===-1)j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let De=Ae+Xe,O=Xt+Xe,F=Be-xe,q=ze+(Nt-xe),M=re*Xt/O*De,m=te*Xt/O*De;j.projectionMatrix.makePerspective(F,q,M,m,De,O),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ut(j,lt){lt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(lt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let lt=j.near,ot=j.far;g.texture!==null&&(g.depthNear>0&&(lt=g.depthNear),g.depthFar>0&&(ot=g.depthFar)),B.near=R.near=A.near=lt,B.far=R.far=A.far=ot,(K!==B.near||J!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),K=B.near,J=B.far),B.layers.mask=j.layers.mask|6,A.layers.mask=B.layers.mask&-5,R.layers.mask=B.layers.mask&-3;let Nt=j.parent,Ot=B.cameras;ut(B,Nt);for(let Rt=0;Rt<Ot.length;Rt++)ut(Ot[Rt],Nt);Ot.length===2?L(B,A,R):B.projectionMatrix.copy(A.projectionMatrix),ht(j,B,Nt)};function ht(j,lt,ot){ot===null?j.matrix.copy(lt.matrixWorld):(j.matrix.copy(ot.matrixWorld),j.matrix.invert(),j.matrix.multiply(lt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=uo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(j){return h[j]};let jt=null;function ye(j,lt){if(d=lt.getViewerPose(c||r),_=lt,d!==null){let ot=d.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Nt=!1;ot.length!==B.cameras.length&&(B.cameras.length=0,Nt=!0);for(let Xt=0;Xt<ot.length;Xt++){let re=ot[Xt],te=null;if(f!==null)te=f.getViewport(re);else{let Lt=p.getViewSubImage(u,re);te=Lt.viewport,Xt===0&&(t.setRenderTargetTextures(x,Lt.colorTexture,Lt.depthStencilTexture),t.setRenderTarget(x))}let ee=D[Xt];ee===void 0&&(ee=new _n,ee.layers.enable(Xt),ee.viewport=new Re,D[Xt]=ee),ee.matrix.fromArray(re.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(re.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(te.x,te.y,te.width,te.height),Xt===0&&(B.matrix.copy(ee.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Nt===!0&&B.cameras.push(ee)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){p=i.getBinding();let Xt=p.getDepthInformation(ot[0]);Xt&&Xt.isValid&&Xt.texture&&g.init(Xt,s.renderState)}if(Ot&&Ot.includes("camera-access")&&T){t.state.unbindTexture(),p=i.getBinding();for(let Xt=0;Xt<ot.length;Xt++){let re=ot[Xt].camera;if(re){let te=h[re];te||(te=new Wl,h[re]=te);let ee=p.getCameraImage(re);te.sourceTexture=ee}}}}for(let ot=0;ot<E.length;ot++){let Nt=w[ot],Ot=E[ot];Nt!==null&&Ot!==void 0&&Ot.update(Nt,lt,c||r)}jt&&jt(j,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),_=null}let $t=new EM;$t.setAnimationLoop(ye),this.setAnimationLoop=function(j){jt=j},this.dispose=function(){}}},y3=new Ue,UM=new Bt;UM.set(-1,0,0,0,1,0,0,0,1);function x3(e,t){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Ng(e)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,v,S,x){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(g,h):h.isMeshLambertMaterial?(a(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(g,h),p(g,h)):h.isMeshPhongMaterial?(a(g,h),d(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(g,h),u(g,h),h.isMeshPhysicalMaterial&&f(g,h,x)):h.isMeshMatcapMaterial?(a(g,h),_(g,h)):h.isMeshDepthMaterial?a(g,h):h.isMeshDistanceMaterial?(a(g,h),T(g,h)):h.isMeshNormalMaterial?a(g,h):h.isLineBasicMaterial?(r(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,v,S):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===En&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===En&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let v=t.get(h),S=v.envMap,x=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(y3.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(UM),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function r(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,S){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=S*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function d(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function f(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===En&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function T(g,h){let v=t.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function S3(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){let w=E.program;i.uniformBlockBinding(x,w)}function c(x,E){let w=s[x.id];w===void 0&&(g(x),w=d(x),s[x.id]=w,x.addEventListener("dispose",v));let C=E.program;i.updateUBOMapping(x,C);let y=t.render.frame;a[x.id]!==y&&(u(x),a[x.id]=y)}function d(x){let E=p();x.__bindingPointIndex=E;let w=e.createBuffer(),C=x.__size,y=x.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,C,y),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,w),w}function p(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let E=s[x.id],w=x.uniforms,C=x.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let y=0,A=w.length;y<A;y++){let R=w[y];if(Array.isArray(R))for(let D=0,B=R.length;D<B;D++)f(R[D],y,D,C);else f(R,y,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(x,E,w,C){if(T(x,E,w,C)===!0){let y=x.__offset,A=x.value;if(Array.isArray(A)){let R=0;for(let D=0;D<A.length;D++){let B=A[D],K=h(B);_(B,x.__data,R),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(R+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,x.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,y,x.__data)}}function _(x,E,w){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,w)}function T(x,E,w,C){let y=x.value,A=E+"_"+w;if(C[A]===void 0)return typeof y=="number"||typeof y=="boolean"?C[A]=y:ArrayBuffer.isView(y)?C[A]=y.slice():C[A]=y.clone(),!0;{let R=C[A];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return C[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function g(x){let E=x.uniforms,w=0,C=16;for(let A=0,R=E.length;A<R;A++){let D=Array.isArray(E[A])?E[A]:[E[A]];for(let B=0,K=D.length;B<K;B++){let J=D[B],V=Array.isArray(J.value)?J.value:[J.value];for(let Q=0,Z=V.length;Q<Z;Q++){let et=V[Q],rt=h(et),L=w%C,ut=L%rt.boundary,ht=L+ut;w+=ut,ht!==0&&C-ht<rt.storage&&(w+=C-ht),J.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=rt.storage}}}let y=w%C;return y>0&&(w+=C-y),x.__size=w,x.__cache={},this}function h(x){let E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",x),E}function v(x){let E=x.target;E.removeEventListener("dispose",v);let w=r.indexOf(E.__bindingPointIndex);r.splice(w,1),e.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function S(){for(let x in s)e.deleteBuffer(s[x]);r=[],s={},a={}}return{bind:l,update:c,dispose:S}}var M3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ki=null;function b3(){return ki===null&&(ki=new Rh(M3,16,16,_a,Hi),ki.name="DFG_LUT",ki.minFilter=hn,ki.magFilter=hn,ki.wrapS=Pi,ki.wrapT=Pi,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}var Vf=class{constructor(t={}){let{canvas:n=KS(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ln}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;let T=f,g=new Set([ef,tf,$h]),h=new Set([Ln,Si,xo,So,Qh,jh]),v=new Uint32Array(4),S=new Int32Array(4),x=new z,E=null,w=null,C=[],y=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,B=null,K=null,J=null,V=null;this._outputColorSpace=gn;let Q=0,Z=0,et=null,rt=-1,L=null,ut=new Re,ht=new Re,jt=null,ye=new Ht(0),$t=0,j=n.width,lt=n.height,ot=1,Nt=null,Ot=null,Rt=new Re(0,0,j,lt),Ae=new Re(0,0,j,lt),Xt=!1,re=new mo,te=!1,ee=!1,Lt=new Ue,Be=new z,ze=new Re,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function De(){return et===null?ot:1}let O=i;function F(b,P){return n.getContext(b,P)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"185"}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",bi,!1),O===null){let P="webgl2";if(O=F(P,b),O===null)throw F(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw It("WebGLRenderer: "+b.message),b}let q,M,m,U,N,G,it,nt,k,W,at,St,ct,dt,Tt,Ut,Ft,I,ft,$,pt,vt,st;function Et(){q=new D2(O),q.init(),pt=new g3(O,q),M=new M2(O,q,t,pt),m=new p3(O,q),M.reversedDepthBuffer&&u&&m.buffers.depth.setReversed(!0),K=O.createFramebuffer(),J=O.createFramebuffer(),V=O.createFramebuffer(),U=new L2(O),N=new t3,G=new m3(O,q,m,N,M,pt,U),it=new R2(R),nt=new BE(O),vt=new x2(O,nt),k=new U2(O,nt,U,vt),W=new O2(O,k,nt,vt,U),I=new I2(O,M,G),Tt=new b2(N),at=new $C(R,it,q,M,vt,Tt),St=new x3(R,N),ct=new n3,dt=new l3(q),Ft=new y2(R,it,m,W,_,l),Ut=new d3(R,W,M),st=new S3(O,U,M,m),ft=new S2(O,q,U),$=new N2(O,q,U),U.programs=at.programs,R.capabilities=M,R.extensions=q,R.properties=N,R.renderLists=ct,R.shadowMap=Ut,R.state=m,R.info=U}Et(),T!==Ln&&(A=new B2(T,n.width,n.height,o,s,a));let Mt=new Kg(R,O);this.xr=Mt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=q.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=q.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(b){b!==void 0&&(ot=b,this.setSize(j,lt,!1))},this.getSize=function(b){return b.set(j,lt)},this.setSize=function(b,P,Y=!0){if(Mt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,lt=P,n.width=Math.floor(b*ot),n.height=Math.floor(P*ot),Y===!0&&(n.style.width=b+"px",n.style.height=P+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,b,P)},this.getDrawingBufferSize=function(b){return b.set(j*ot,lt*ot).floor()},this.setDrawingBufferSize=function(b,P,Y){j=b,lt=P,ot=Y,n.width=Math.floor(b*Y),n.height=Math.floor(P*Y),this.setViewport(0,0,b,P)},this.setEffects=function(b){if(T===Ln){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let P=0;P<b.length;P++)if(b[P].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ut)},this.getViewport=function(b){return b.copy(Rt)},this.setViewport=function(b,P,Y,H){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,P,Y,H),m.viewport(ut.copy(Rt).multiplyScalar(ot).round())},this.getScissor=function(b){return b.copy(Ae)},this.setScissor=function(b,P,Y,H){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,P,Y,H),m.scissor(ht.copy(Ae).multiplyScalar(ot).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(b){m.setScissorTest(Xt=b)},this.setOpaqueSort=function(b){Nt=b},this.setTransparentSort=function(b){Ot=b},this.getClearColor=function(b){return b.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(b=!0,P=!0,Y=!0){let H=0;if(b){let X=!1;if(et!==null){let _t=et.texture.format;X=g.has(_t)}if(X){let _t=et.texture.type,xt=h.has(_t),gt=Ft.getClearColor(),bt=Ft.getClearAlpha(),At=gt.r,Vt=gt.g,Wt=gt.b;xt?(v[0]=At,v[1]=Vt,v[2]=Wt,v[3]=bt,O.clearBufferuiv(O.COLOR,0,v)):(S[0]=At,S[1]=Vt,S[2]=Wt,S[3]=bt,O.clearBufferiv(O.COLOR,0,S))}else H|=O.COLOR_BUFFER_BIT}P&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",bi,!1),Ft.dispose(),ct.dispose(),dt.dispose(),N.dispose(),it.dispose(),W.dispose(),vt.dispose(),st.dispose(),at.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",$g),Mt.removeEventListener("sessionend",t0),xa.stop()};function Le(b){b.preventDefault(),Rg("WebGLRenderer: Context Lost."),D=!0}function ge(){Rg("WebGLRenderer: Context Restored."),D=!1;let b=U.autoReset,P=Ut.enabled,Y=Ut.autoUpdate,H=Ut.needsUpdate,X=Ut.type;Et(),U.autoReset=b,Ut.enabled=P,Ut.autoUpdate=Y,Ut.needsUpdate=H,Ut.type=X}function bi(b){It("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ti(b){let P=b.target;P.removeEventListener("dispose",Ti),zM(P)}function zM(b){FM(b),N.remove(b)}function FM(b){let P=N.get(b).programs;P!==void 0&&(P.forEach(function(Y){at.releaseProgram(Y)}),b.isShaderMaterial&&at.releaseShaderCache(b))}this.renderBufferDirect=function(b,P,Y,H,X,_t){P===null&&(P=Xe);let xt=X.isMesh&&X.matrixWorld.determinantAffine()<0,gt=HM(b,P,Y,H,X);m.setMaterial(H,xt);let bt=Y.index,At=1;if(H.wireframe===!0){if(bt=k.getWireframeAttribute(Y),bt===void 0)return;At=2}let Vt=Y.drawRange,Wt=Y.attributes.position,Ct=Vt.start*At,ue=(Vt.start+Vt.count)*At;_t!==null&&(Ct=Math.max(Ct,_t.start*At),ue=Math.min(ue,(_t.start+_t.count)*At)),bt!==null?(Ct=Math.max(Ct,0),ue=Math.min(ue,bt.count)):Wt!=null&&(Ct=Math.max(Ct,0),ue=Math.min(ue,Wt.count));let Fe=ue-Ct;if(Fe<0||Fe===1/0)return;vt.setup(X,H,gt,Y,bt);let Ie,de=ft;if(bt!==null&&(Ie=nt.get(bt),de=$,de.setIndex(Ie)),X.isMesh)H.wireframe===!0?(m.setLineWidth(H.wireframeLinewidth*De()),de.setMode(O.LINES)):de.setMode(O.TRIANGLES);else if(X.isLine){let fn=H.linewidth;fn===void 0&&(fn=1),m.setLineWidth(fn*De()),X.isLineSegments?de.setMode(O.LINES):X.isLineLoop?de.setMode(O.LINE_LOOP):de.setMode(O.LINE_STRIP)}else X.isPoints?de.setMode(O.POINTS):X.isSprite&&de.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(q.get("WEBGL_multi_draw"))de.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let fn=X._multiDrawStarts,yt=X._multiDrawCounts,In=X._multiDrawCount,ie=bt?nt.get(bt).bytesPerElement:1,jn=N.get(H).currentProgram.getUniforms();for(let Ei=0;Ei<In;Ei++)jn.setValue(O,"_gl_DrawID",Ei),de.render(fn[Ei]/ie,yt[Ei])}else if(X.isInstancedMesh)de.renderInstances(Ct,Fe,X.count);else if(Y.isInstancedBufferGeometry){let fn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,yt=Math.min(Y.instanceCount,fn);de.renderInstances(Ct,Fe,yt)}else de.render(Ct,Fe)};function jg(b,P,Y){b.transparent===!0&&b.side===hi&&b.forceSinglePass===!1?(b.side=En,b.needsUpdate=!0,pc(b,P,Y),b.side=_s,b.needsUpdate=!0,pc(b,P,Y),b.side=hi):pc(b,P,Y)}this.compile=function(b,P,Y=null){Y===null&&(Y=b),w=dt.get(Y),w.init(P),y.push(w),Y.traverseVisible(function(X){X.isLight&&X.layers.test(P.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),b!==Y&&b.traverseVisible(function(X){X.isLight&&X.layers.test(P.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights();let H=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let _t=X.material;if(_t)if(Array.isArray(_t))for(let xt=0;xt<_t.length;xt++){let gt=_t[xt];jg(gt,Y,X),H.add(gt)}else jg(_t,Y,X),H.add(_t)}),w=y.pop(),H},this.compileAsync=function(b,P,Y=null){let H=this.compile(b,P,Y);return new Promise(X=>{function _t(){if(H.forEach(function(xt){N.get(xt).currentProgram.isReady()&&H.delete(xt)}),H.size===0){X(b);return}setTimeout(_t,10)}q.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Xf=null;function VM(b){Xf&&Xf(b)}function $g(){xa.stop()}function t0(){xa.start()}let xa=new EM;xa.setAnimationLoop(VM),typeof self<"u"&&xa.setContext(self),this.setAnimationLoop=function(b){Xf=b,Mt.setAnimationLoop(b),b===null?xa.stop():xa.start()},Mt.addEventListener("sessionstart",$g),Mt.addEventListener("sessionend",t0),this.render=function(b,P){if(P!==void 0&&P.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(b,P);let Y=Mt.enabled===!0&&Mt.isPresenting===!0,H=A!==null&&(et===null||Y)&&A.begin(R,et);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(P),P=Mt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,P,et),w=dt.get(b,y.length),w.init(P),w.state.textureUnits=G.getTextureUnits(),y.push(w),Lt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),re.setFromProjectionMatrix(Lt,yi,P.reversedDepth),ee=this.localClippingEnabled,te=Tt.init(this.clippingPlanes,ee),E=ct.get(b,C.length),E.init(),C.push(E),Mt.enabled===!0&&Mt.isPresenting===!0){let xt=R.xr.getDepthSensingMesh();xt!==null&&Wf(xt,P,-1/0,R.sortObjects)}Wf(b,P,0,R.sortObjects),E.finish(),R.sortObjects===!0&&E.sort(Nt,Ot,P.reversedDepth),xe=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,xe&&Ft.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),te===!0&&Tt.beginShadows();let X=w.state.shadowsArray;if(Ut.render(X,b,P),te===!0&&Tt.endShadows(),(H&&A.hasRenderPass())===!1){let xt=E.opaque,gt=E.transmissive;if(w.setupLights(),P.isArrayCamera){let bt=P.cameras;if(gt.length>0)for(let At=0,Vt=bt.length;At<Vt;At++){let Wt=bt[At];n0(xt,gt,b,Wt)}xe&&Ft.render(b);for(let At=0,Vt=bt.length;At<Vt;At++){let Wt=bt[At];e0(E,b,Wt,Wt.viewport)}}else gt.length>0&&n0(xt,gt,b,P),xe&&Ft.render(b),e0(E,b,P)}et!==null&&Z===0&&(G.updateMultisampleRenderTarget(et),G.updateRenderTargetMipmap(et)),H&&A.end(R),b.isScene===!0&&b.onAfterRender(R,b,P),vt.resetDefaultState(),rt=-1,L=null,y.pop(),y.length>0?(w=y[y.length-1],G.setTextureUnits(w.state.textureUnits),te===!0&&Tt.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,B!==null&&B.renderEnd()};function Wf(b,P,Y,H){if(b.visible===!1)return;if(b.layers.test(P.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(P);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||re.intersectsSprite(b)){H&&ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Lt);let xt=W.update(b),gt=b.material;gt.visible&&E.push(b,xt,gt,Y,ze.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||re.intersectsObject(b))){let xt=W.update(b),gt=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ze.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),ze.copy(xt.boundingSphere.center)),ze.applyMatrix4(b.matrixWorld).applyMatrix4(Lt)),Array.isArray(gt)){let bt=xt.groups;for(let At=0,Vt=bt.length;At<Vt;At++){let Wt=bt[At],Ct=gt[Wt.materialIndex];Ct&&Ct.visible&&E.push(b,xt,Ct,Y,ze.z,Wt)}}else gt.visible&&E.push(b,xt,gt,Y,ze.z,null)}}let _t=b.children;for(let xt=0,gt=_t.length;xt<gt;xt++)Wf(_t[xt],P,Y,H)}function e0(b,P,Y,H){let{opaque:X,transmissive:_t,transparent:xt}=b;w.setupLightsView(Y),te===!0&&Tt.setGlobalState(R.clippingPlanes,Y),H&&m.viewport(ut.copy(H)),X.length>0&&dc(X,P,Y),_t.length>0&&dc(_t,P,Y),xt.length>0&&dc(xt,P,Y),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function n0(b,P,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Ct=q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Zn(1,1,{generateMipmaps:!0,type:Ct?Hi:Ln,minFilter:ma,samples:Math.max(4,M.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let _t=w.state.transmissionRenderTarget[H.id],xt=H.viewport||ut;_t.setSize(xt.z*R.transmissionResolutionScale,xt.w*R.transmissionResolutionScale);let gt=R.getRenderTarget(),bt=R.getActiveCubeFace(),At=R.getActiveMipmapLevel();R.setRenderTarget(_t),R.getClearColor(ye),$t=R.getClearAlpha(),$t<1&&R.setClearColor(16777215,.5),R.clear(),xe&&Ft.render(Y);let Vt=R.toneMapping;R.toneMapping=xi;let Wt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),te===!0&&Tt.setGlobalState(R.clippingPlanes,H),dc(b,Y,H),G.updateMultisampleRenderTarget(_t),G.updateRenderTargetMipmap(_t),q.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let ue=0,Fe=P.length;ue<Fe;ue++){let Ie=P[ue],{object:de,geometry:fn,material:yt,group:In}=Ie;if(yt.side===hi&&de.layers.test(H.layers)){let ie=yt.side;yt.side=En,yt.needsUpdate=!0,i0(de,Y,H,fn,yt,In),yt.side=ie,yt.needsUpdate=!0,Ct=!0}}Ct===!0&&(G.updateMultisampleRenderTarget(_t),G.updateRenderTargetMipmap(_t))}R.setRenderTarget(gt,bt,At),R.setClearColor(ye,$t),Wt!==void 0&&(H.viewport=Wt),R.toneMapping=Vt}function dc(b,P,Y){let H=P.isScene===!0?P.overrideMaterial:null;for(let X=0,_t=b.length;X<_t;X++){let xt=b[X],{object:gt,geometry:bt,group:At}=xt,Vt=xt.material;Vt.allowOverride===!0&&H!==null&&(Vt=H),gt.layers.test(Y.layers)&&i0(gt,P,Y,bt,Vt,At)}}function i0(b,P,Y,H,X,_t){b.onBeforeRender(R,P,Y,H,X,_t),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(R,P,Y,H,b,_t),X.transparent===!0&&X.side===hi&&X.forceSinglePass===!1?(X.side=En,X.needsUpdate=!0,R.renderBufferDirect(Y,P,H,X,b,_t),X.side=_s,X.needsUpdate=!0,R.renderBufferDirect(Y,P,H,X,b,_t),X.side=hi):R.renderBufferDirect(Y,P,H,X,b,_t),b.onAfterRender(R,P,Y,H,X,_t)}function pc(b,P,Y){P.isScene!==!0&&(P=Xe);let H=N.get(b),X=w.state.lights,_t=w.state.shadowsArray,xt=X.state.version,gt=at.getParameters(b,X.state,_t,P,Y,w.state.lightProbeGridArray),bt=at.getProgramCacheKey(gt),At=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,H.fog=P.fog;let Vt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=it.get(b.envMap||H.environment,Vt),H.envMapRotation=H.environment!==null&&b.envMap===null?P.environmentRotation:b.envMapRotation,At===void 0&&(b.addEventListener("dispose",Ti),At=new Map,H.programs=At);let Wt=At.get(bt);if(Wt!==void 0){if(H.currentProgram===Wt&&H.lightsStateVersion===xt)return a0(b,gt),Wt}else gt.uniforms=at.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,Y,gt),b.onBeforeCompile(gt,R),Wt=at.acquireProgram(gt,bt),At.set(bt,Wt),H.uniforms=gt.uniforms;let Ct=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ct.clippingPlanes=Tt.uniform),a0(b,gt),H.needsLights=XM(b),H.lightsStateVersion=xt,H.needsLights&&(Ct.ambientLightColor.value=X.state.ambient,Ct.lightProbe.value=X.state.probe,Ct.directionalLights.value=X.state.directional,Ct.directionalLightShadows.value=X.state.directionalShadow,Ct.spotLights.value=X.state.spot,Ct.spotLightShadows.value=X.state.spotShadow,Ct.rectAreaLights.value=X.state.rectArea,Ct.ltc_1.value=X.state.rectAreaLTC1,Ct.ltc_2.value=X.state.rectAreaLTC2,Ct.pointLights.value=X.state.point,Ct.pointLightShadows.value=X.state.pointShadow,Ct.hemisphereLights.value=X.state.hemi,Ct.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ct.spotLightMatrix.value=X.state.spotLightMatrix,Ct.spotLightMap.value=X.state.spotLightMap,Ct.pointShadowMatrix.value=X.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=Wt,H.uniformsList=null,Wt}function s0(b){if(b.uniformsList===null){let P=b.currentProgram.getUniforms();b.uniformsList=To.seqWithValue(P.seq,b.uniforms)}return b.uniformsList}function a0(b,P){let Y=N.get(b);Y.outputColorSpace=P.outputColorSpace,Y.batching=P.batching,Y.batchingColor=P.batchingColor,Y.instancing=P.instancing,Y.instancingColor=P.instancingColor,Y.instancingMorph=P.instancingMorph,Y.skinning=P.skinning,Y.morphTargets=P.morphTargets,Y.morphNormals=P.morphNormals,Y.morphColors=P.morphColors,Y.morphTargetsCount=P.morphTargetsCount,Y.numClippingPlanes=P.numClippingPlanes,Y.numIntersection=P.numClipIntersection,Y.vertexAlphas=P.vertexAlphas,Y.vertexTangents=P.vertexTangents,Y.toneMapping=P.toneMapping}function GM(b,P){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(P.matrixWorld);for(let Y=0,H=b.length;Y<H;Y++){let X=b[Y];if(X.texture!==null&&X.boundingBox.containsPoint(x))return X}return null}function HM(b,P,Y,H,X){P.isScene!==!0&&(P=Xe),G.resetTextureUnits();let _t=P.fog,xt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?P.environment:null,gt=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Jt.workingColorSpace,bt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,At=it.get(H.envMap||xt,bt),Vt=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Wt=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ct=!!Y.morphAttributes.position,ue=!!Y.morphAttributes.normal,Fe=!!Y.morphAttributes.color,Ie=xi;H.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ie=R.toneMapping);let de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,fn=de!==void 0?de.length:0,yt=N.get(H),In=w.state.lights;if(te===!0&&(ee===!0||b!==L)){let _e=b===L&&H.id===rt;Tt.setState(H,b,_e)}let ie=!1;H.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==In.state.version||yt.outputColorSpace!==gt||X.isBatchedMesh&&yt.batching===!1||!X.isBatchedMesh&&yt.batching===!0||X.isBatchedMesh&&yt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&yt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&yt.instancing===!1||!X.isInstancedMesh&&yt.instancing===!0||X.isSkinnedMesh&&yt.skinning===!1||!X.isSkinnedMesh&&yt.skinning===!0||X.isInstancedMesh&&yt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&yt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&yt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&yt.instancingMorph===!1&&X.morphTexture!==null||yt.envMap!==At||H.fog===!0&&yt.fog!==_t||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Tt.numPlanes||yt.numIntersection!==Tt.numIntersection)||yt.vertexAlphas!==Vt||yt.vertexTangents!==Wt||yt.morphTargets!==Ct||yt.morphNormals!==ue||yt.morphColors!==Fe||yt.toneMapping!==Ie||yt.morphTargetsCount!==fn||!!yt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,yt.__version=H.version);let jn=yt.currentProgram;ie===!0&&(jn=pc(H,P,X),B&&H.isNodeMaterial&&B.onUpdateProgram(H,jn,yt));let Ei=!1,Ms=!1,$a=!1,pe=jn.getUniforms(),Ve=yt.uniforms;if(m.useProgram(jn.program)&&(Ei=!0,Ms=!0,$a=!0),H.id!==rt&&(rt=H.id,Ms=!0),yt.needsLights){let _e=GM(w.state.lightProbeGridArray,X);yt.lightProbeGrid!==_e&&(yt.lightProbeGrid=_e,Ms=!0)}if(Ei||L!==b){m.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),pe.setValue(O,"projectionMatrix",b.projectionMatrix),pe.setValue(O,"viewMatrix",b.matrixWorldInverse);let Ts=pe.map.cameraPosition;Ts!==void 0&&Ts.setValue(O,Be.setFromMatrixPosition(b.matrixWorld)),M.logarithmicDepthBuffer&&pe.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pe.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),L!==b&&(L=b,Ms=!0,$a=!0)}if(yt.needsLights&&(In.state.directionalShadowMap.length>0&&pe.setValue(O,"directionalShadowMap",In.state.directionalShadowMap,G),In.state.spotShadowMap.length>0&&pe.setValue(O,"spotShadowMap",In.state.spotShadowMap,G),In.state.pointShadowMap.length>0&&pe.setValue(O,"pointShadowMap",In.state.pointShadowMap,G)),X.isSkinnedMesh){pe.setOptional(O,X,"bindMatrix"),pe.setOptional(O,X,"bindMatrixInverse");let _e=X.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),pe.setValue(O,"boneTexture",_e.boneTexture,G))}X.isBatchedMesh&&(pe.setOptional(O,X,"batchingTexture"),pe.setValue(O,"batchingTexture",X._matricesTexture,G),pe.setOptional(O,X,"batchingIdTexture"),pe.setValue(O,"batchingIdTexture",X._indirectTexture,G),pe.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&pe.setValue(O,"batchingColorTexture",X._colorsTexture,G));let bs=Y.morphAttributes;if((bs.position!==void 0||bs.normal!==void 0||bs.color!==void 0)&&I.update(X,Y,jn),(Ms||yt.receiveShadow!==X.receiveShadow)&&(yt.receiveShadow=X.receiveShadow,pe.setValue(O,"receiveShadow",X.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&P.environment!==null&&(Ve.envMapIntensity.value=P.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=b3()),Ms){if(pe.setValue(O,"toneMappingExposure",R.toneMappingExposure),yt.needsLights&&kM(Ve,$a),_t&&H.fog===!0&&St.refreshFogUniforms(Ve,_t),St.refreshMaterialUniforms(Ve,H,ot,lt,w.state.transmissionRenderTarget[b.id]),yt.needsLights&&yt.lightProbeGrid){let _e=yt.lightProbeGrid;Ve.probesSH.value=_e.texture,Ve.probesMin.value.copy(_e.boundingBox.min),Ve.probesMax.value.copy(_e.boundingBox.max),Ve.probesResolution.value.copy(_e.resolution)}To.upload(O,s0(yt),Ve,G)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(To.upload(O,s0(yt),Ve,G),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pe.setValue(O,"center",X.center),pe.setValue(O,"modelViewMatrix",X.modelViewMatrix),pe.setValue(O,"normalMatrix",X.normalMatrix),pe.setValue(O,"modelMatrix",X.matrixWorld),H.uniformsGroups!==void 0){let _e=H.uniformsGroups;for(let Ts=0,tr=_e.length;Ts<tr;Ts++){let r0=_e[Ts];st.update(r0,jn),st.bind(r0,jn)}}return jn}function kM(b,P){b.ambientLightColor.needsUpdate=P,b.lightProbe.needsUpdate=P,b.directionalLights.needsUpdate=P,b.directionalLightShadows.needsUpdate=P,b.pointLights.needsUpdate=P,b.pointLightShadows.needsUpdate=P,b.spotLights.needsUpdate=P,b.spotLightShadows.needsUpdate=P,b.rectAreaLights.needsUpdate=P,b.hemisphereLights.needsUpdate=P}function XM(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(b,P,Y){let H=N.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),N.get(b.texture).__webglTexture=P,N.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,P){let Y=N.get(b);Y.__webglFramebuffer=P,Y.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(b,P=0,Y=0){et=b,Q=P,Z=Y;let H=null,X=!1,_t=!1;if(b){let gt=N.get(b);if(gt.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(O.FRAMEBUFFER,gt.__webglFramebuffer),ut.copy(b.viewport),ht.copy(b.scissor),jt=b.scissorTest,m.viewport(ut),m.scissor(ht),m.setScissorTest(jt),rt=-1;return}else if(gt.__webglFramebuffer===void 0)G.setupRenderTarget(b);else if(gt.__hasExternalTextures)G.rebindTextures(b,N.get(b.texture).__webglTexture,N.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Vt=b.depthTexture;if(gt.__boundDepthTexture!==Vt){if(Vt!==null&&N.has(Vt)&&(b.width!==Vt.image.width||b.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(b)}}let bt=b.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(_t=!0);let At=N.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(At[P])?H=At[P][Y]:H=At[P],X=!0):b.samples>0&&G.useMultisampledRTT(b)===!1?H=N.get(b).__webglMultisampledFramebuffer:Array.isArray(At)?H=At[Y]:H=At,ut.copy(b.viewport),ht.copy(b.scissor),jt=b.scissorTest}else ut.copy(Rt).multiplyScalar(ot).floor(),ht.copy(Ae).multiplyScalar(ot).floor(),jt=Xt;if(Y!==0&&(H=K),m.bindFramebuffer(O.FRAMEBUFFER,H)&&m.drawBuffers(b,H),m.viewport(ut),m.scissor(ht),m.setScissorTest(jt),X){let gt=N.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+P,gt.__webglTexture,Y)}else if(_t){let gt=P;for(let bt=0;bt<b.textures.length;bt++){let At=N.get(b.textures[bt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+bt,At.__webglTexture,Y,gt)}}else if(b!==null&&Y!==0){let gt=N.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,gt.__webglTexture,Y)}rt=-1},this.readRenderTargetPixels=function(b,P,Y,H,X,_t,xt,gt=0){if(!(b&&b.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=N.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt){m.bindFramebuffer(O.FRAMEBUFFER,bt);try{let At=b.textures[gt],Vt=At.format,Wt=At.type;if(b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+gt),!M.textureFormatReadable(Vt)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!M.textureTypeReadable(Wt)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=b.width-H&&Y>=0&&Y<=b.height-X&&O.readPixels(P,Y,H,X,pt.convert(Vt),pt.convert(Wt),_t)}finally{let At=et!==null?N.get(et).__webglFramebuffer:null;m.bindFramebuffer(O.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(b,P,Y,H,X,_t,xt,gt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=N.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt)if(P>=0&&P<=b.width-H&&Y>=0&&Y<=b.height-X){m.bindFramebuffer(O.FRAMEBUFFER,bt);let At=b.textures[gt],Vt=At.format,Wt=At.type;if(b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+gt),!M.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!M.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ct=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ct),O.bufferData(O.PIXEL_PACK_BUFFER,_t.byteLength,O.STREAM_READ),O.readPixels(P,Y,H,X,pt.convert(Vt),pt.convert(Wt),0);let ue=et!==null?N.get(et).__webglFramebuffer:null;m.bindFramebuffer(O.FRAMEBUFFER,ue);let Fe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await jS(O,Fe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ct),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_t),O.deleteBuffer(Ct),O.deleteSync(Fe),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,P=null,Y=0){let H=Math.pow(2,-Y),X=Math.floor(b.image.width*H),_t=Math.floor(b.image.height*H),xt=P!==null?P.x:0,gt=P!==null?P.y:0;G.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,xt,gt,X,_t),m.unbindTexture()},this.copyTextureToTexture=function(b,P,Y=null,H=null,X=0,_t=0){let xt,gt,bt,At,Vt,Wt,Ct,ue,Fe,Ie=b.isCompressedTexture?b.mipmaps[_t]:b.image;if(Y!==null)xt=Y.max.x-Y.min.x,gt=Y.max.y-Y.min.y,bt=Y.isBox3?Y.max.z-Y.min.z:1,At=Y.min.x,Vt=Y.min.y,Wt=Y.isBox3?Y.min.z:0;else{let Ve=Math.pow(2,-X);xt=Math.floor(Ie.width*Ve),gt=Math.floor(Ie.height*Ve),b.isDataArrayTexture?bt=Ie.depth:b.isData3DTexture?bt=Math.floor(Ie.depth*Ve):bt=1,At=0,Vt=0,Wt=0}H!==null?(Ct=H.x,ue=H.y,Fe=H.z):(Ct=0,ue=0,Fe=0);let de=pt.convert(P.format),fn=pt.convert(P.type),yt;P.isData3DTexture?(G.setTexture3D(P,0),yt=O.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(G.setTexture2DArray(P,0),yt=O.TEXTURE_2D_ARRAY):(G.setTexture2D(P,0),yt=O.TEXTURE_2D),m.activeTexture(O.TEXTURE0),m.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,P.flipY),m.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),m.pixelStorei(O.UNPACK_ALIGNMENT,P.unpackAlignment);let In=m.getParameter(O.UNPACK_ROW_LENGTH),ie=m.getParameter(O.UNPACK_IMAGE_HEIGHT),jn=m.getParameter(O.UNPACK_SKIP_PIXELS),Ei=m.getParameter(O.UNPACK_SKIP_ROWS),Ms=m.getParameter(O.UNPACK_SKIP_IMAGES);m.pixelStorei(O.UNPACK_ROW_LENGTH,Ie.width),m.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ie.height),m.pixelStorei(O.UNPACK_SKIP_PIXELS,At),m.pixelStorei(O.UNPACK_SKIP_ROWS,Vt),m.pixelStorei(O.UNPACK_SKIP_IMAGES,Wt);let $a=b.isDataArrayTexture||b.isData3DTexture,pe=P.isDataArrayTexture||P.isData3DTexture;if(b.isDepthTexture){let Ve=N.get(b),bs=N.get(P),_e=N.get(Ve.__renderTarget),Ts=N.get(bs.__renderTarget);m.bindFramebuffer(O.READ_FRAMEBUFFER,_e.__webglFramebuffer),m.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let tr=0;tr<bt;tr++)$a&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,N.get(b).__webglTexture,X,Wt+tr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,N.get(P).__webglTexture,_t,Fe+tr)),O.blitFramebuffer(At,Vt,xt,gt,Ct,ue,xt,gt,O.DEPTH_BUFFER_BIT,O.NEAREST);m.bindFramebuffer(O.READ_FRAMEBUFFER,null),m.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||N.has(b)){let Ve=N.get(b),bs=N.get(P);m.bindFramebuffer(O.READ_FRAMEBUFFER,J),m.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let _e=0;_e<bt;_e++)$a?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ve.__webglTexture,X,Wt+_e):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ve.__webglTexture,X),pe?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,bs.__webglTexture,_t,Fe+_e):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,bs.__webglTexture,_t),X!==0?O.blitFramebuffer(At,Vt,xt,gt,Ct,ue,xt,gt,O.COLOR_BUFFER_BIT,O.NEAREST):pe?O.copyTexSubImage3D(yt,_t,Ct,ue,Fe+_e,At,Vt,xt,gt):O.copyTexSubImage2D(yt,_t,Ct,ue,At,Vt,xt,gt);m.bindFramebuffer(O.READ_FRAMEBUFFER,null),m.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else pe?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(yt,_t,Ct,ue,Fe,xt,gt,bt,de,fn,Ie.data):P.isCompressedArrayTexture?O.compressedTexSubImage3D(yt,_t,Ct,ue,Fe,xt,gt,bt,de,Ie.data):O.texSubImage3D(yt,_t,Ct,ue,Fe,xt,gt,bt,de,fn,Ie):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_t,Ct,ue,xt,gt,de,fn,Ie.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_t,Ct,ue,Ie.width,Ie.height,de,Ie.data):O.texSubImage2D(O.TEXTURE_2D,_t,Ct,ue,xt,gt,de,fn,Ie);m.pixelStorei(O.UNPACK_ROW_LENGTH,In),m.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ie),m.pixelStorei(O.UNPACK_SKIP_PIXELS,jn),m.pixelStorei(O.UNPACK_SKIP_ROWS,Ei),m.pixelStorei(O.UNPACK_SKIP_IMAGES,Ms),_t===0&&P.generateMipmaps&&O.generateMipmap(yt),m.unbindTexture()},this.initRenderTarget=function(b){N.get(b).__webglFramebuffer===void 0&&G.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?G.setTextureCube(b,0):b.isData3DTexture?G.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?G.setTexture2DArray(b,0):G.setTexture2D(b,0),m.unbindTexture()},this.resetState=function(){Q=0,Z=0,et=null,m.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Jt._getUnpackColorSpace()}};function NM(e,t){let n=new Vl;n.background=new Ht("#c6dbe0"),n.fog=new Fl("#c6dbe0",170,600);let i=new Vf({antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(devicePixelRatio,1.6)),i.shadowMap.enabled=!0,i.shadowMap.type=qh,i.outputColorSpace=gn,i.toneMapping=tc,i.toneMappingExposure=1.2,e.appendChild(i.domElement);let s=new _n(58,1,.2,900),a=new Kl(14742527,8680272,2.3);n.add(a);let r=new jl(16766113,3.3);r.position.set(-90,140,65),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),Object.assign(r.shadow.camera,{left:-190,right:190,top:190,bottom:-190,near:1,far:400}),r.shadow.bias=-4e-4,n.add(r);let o=new Map,l=new ca(1,1,1),c=[],d=[],p=[],u=F=>(o.has(F)||o.set(F,new Yl({color:F,roughness:.83})),o.get(F));function f(F,q,M,m,U,N,G,it=n){let nt=new Ne(l,u(G));return nt.position.set(F,q,M),nt.scale.set(m,U,N),nt.castShadow=U>1,nt.receiveShadow=!0,it.add(nt),nt}function _(F,q,M,m,U,N){f(F,m/2,q,M,m,U,N),c.push({x:F,z:q,w:M/2,d:U/2}),d.push({x:F,z:q,w:M,d:U})}function T(F,q,M,m,U=12,N="#173c46",G=0){let it=document.createElement("canvas");it.width=512,it.height=96;let nt=it.getContext("2d");nt.fillStyle=N,nt.fillRect(0,0,512,96),nt.fillStyle="#fff2cd",nt.textAlign="center",nt.textBaseline="middle",nt.font="bold 33px Arial",nt.fillText(F,256,50,486);let k=new Xl(it);k.colorSpace=gn,p.push(k);let W=new Ne(new Ja(U,U*96/512),new ys({map:k,side:hi}));return W.position.set(q,M,m),W.rotation.y=G,n.add(W),W}f(0,-.4,0,760,.6,760,"#848866");let g=[{x:0,z:0,w:600,d:22},{x:30,z:0,w:28,d:590},{x:-252,z:0,w:17,d:560},{x:238,z:0,w:19,d:560},{x:0,z:-148,w:600,d:17},{x:0,z:154,w:600,d:20}];for(let F of g)if(f(F.x,.01,F.z,F.w,.12,F.d,"#50585a"),F.w>F.d){f(F.x,.1,F.z-F.d/2-1,F.w,.2,2,"#b9b4a0"),f(F.x,.1,F.z+F.d/2+1,F.w,.2,2,"#b9b4a0");for(let q=-290;q<295;q+=15)f(q,.09,F.z,.28,.03,.1,"#ece1b6").scale.set(6,.03,.3)}else for(let q=-285;q<285;q+=15)f(F.x,.1,q,.35,.03,6,"#ece1b6");for(let F=0;F<8;F++)f(12+F*2.5,.15,-22,1.3,.04,7,"#ddd9bb"),f(12+F*2.5,.15,24,1.3,.04,7,"#ddd9bb");_(-221,0,30,8,116,"#b39a72"),c.push({x:-201,z:0,w:10,d:16});for(let F=0;F<7;F++){let q=30-F*3.1,M=18-F*1.3,m=9+F*4.5;f(-201,m,0,M,4.1,q,"#d6b980"),f(-201,m+2.2,0,M+1.3,.7,q+1.2,"#e9cd98");for(let U=0;U<Math.floor(q/3);U++){let N=-q/2+1.5+U*3;f(-201+M/2+.25,m,N,.6,2,1.2,"#b89a63"),f(-201+M/2+.7,m+1.3,N,1,.4,1.6,"#f0d5a0")}}for(let F=-2;F<=2;F++){let q=new Ne(new _o(.8,8,6),u("#e7bf62"));q.position.set(-201,41,F*2.1),n.add(q)}f(-190,4,0,.3,8,7,"#392e26"),T("SREE PADMANABHASWAMY",-180,8,0,29,"#79613b",Math.PI/2),_(-143,-64,74,.4,66,"#468e89");for(let F=0;F<4;F++){let q=78+F*3,M=70+F*3;f(-143,.3+F*.19,-64-M/2,q,.4,1.8,"#aaa38a"),f(-143,.3+F*.19,-64+M/2,q,.4,1.8,"#aaa38a"),f(-143-q/2,.3+F*.19,-64,1.8,.4,M,"#aaa38a"),f(-143+q/2,.3+F*.19,-64,1.8,.4,M,"#aaa38a")}T("PADMATHEERTHAM",-142,3,-22,20);for(let F of[-18,18])_(-40,F,8,10,17,"#e7e2cc"),f(-40,10.6,F,10,1,19,"#f9f0d7"),f(-40,12,F,7,2,14,"#d6d1ba");f(-40,10.8,0,8,3.2,24,"#f3ead5"),f(-40,12.8,0,10,.8,27,"#fff2da"),T("EAST FORT",-35.8,10.8,0,17,"#7a745f",Math.PI/2);for(let F of[-83,83])_(-40,F,3,4,108,"#d7cfb6");function h(F,q,M,m,U){let N=new Ne(new go(1,1,4),u("#98563a"));N.position.set(F,U,q),N.rotation.y=Math.PI/4,N.scale.set(M*.72,4,m*.72),N.castShadow=!0,n.add(N)}_(-149,67,67,6,52,"#d4ba8f"),h(-149,67,73,58,8),T("KUTHIRAMALIKA",-147,5,39,25,"#684630");let v=["CHALAI STORES","KERALA SPICES","TEXTILES","BAKERY & TEA","FRESH FRUIT","SILKS","MALABAR TRADERS","FLOWER MARKET","BOOK HOUSE","COFFEE"],S=["#cdbb93","#dfc798","#83aaa6","#cfa388","#b6bfab","#dfd6b7"],x=417,E=()=>(x=x*1664525+1013904223>>>0,x/4294967296);function w(F,q,M,m,U,N,G=1){_(F,q,M,U,m,S[N%S.length]),f(F,U+.3,q,M+1,.6,m+1,"#c1b49d");let it=q+G*(m/2+.1);for(let k=-M/2+2;k<M/2-1;k+=4)f(F+k,1.7,it,2.9,3.2,.2,"#4c645f"),U>7&&f(F+k,6,it,1.8,2,.2,"#3b6065");T(v[N%v.length],F,4.2,it+G*.2,M*.93,N%2?"#9d4931":"#1e6066");let nt=f(F,3.25,it+G*1.3,M+.6,.25,3,N%2?"#d3984e":"#417e79");nt.rotation.x=G*.12;for(let k=-M/2+1;k<M/2;k+=3)f(F+k,.5,it+G*2,2,.8,1.1,N%2?"#b18043":"#a5a347");N%3===0&&(f(F,U+1,q,2,1.5,2,"#4e5450"),f(F+3,U+.7,q,3,.6,2,"#8d9992"))}let C=0;for(let F=67;F<282;F+=19)Math.abs(F-238)<20||(w(F,-25,17,24,7+E()*8,C++,1),w(F,29,17,26,6+E()*9,C++,-1));for(let F=-176;F<-67;F+=21)w(F,23,19,15,6+E()*4,C++,-1);for(let F of[-185,-110,105,194])for(let q=-280;q<295;q+=24)Math.abs(q-30)<29||Math.abs(q+252)<25||Math.abs(q-238)<24||Math.abs(q+40)<13||F===-110&&q>-225&&q<-85||w(q,F,20,22,7+E()*13,C++,F<0?1:-1);for(let F of[-285,267])for(let q=-250;q<270;q+=28)Math.abs(q)<48||Math.abs(q+148)<27||Math.abs(q-154)<28||_(F,q,20,6+E()*16,22,S[C++%6]);f(83,.2,80,59,.25,58,"#6c8b58"),f(152,.13,99,66,.2,55,"#b49a70"),T("GANDHI PARK",83,4,48,18),T("PUTHARIKANDAM MAIDAN",152,3.5,69,29);function y(F,q,M=13){let m=new Ne(new ua(.27,.5,M,6),u("#847358"));m.position.set(F,M/2,q),n.add(m);for(let U=0;U<7;U++){let N=U*Math.PI*2/7,G=new Ne(new go(1.1,7,4),u(U%2?"#3b754e":"#4d8957"));G.position.set(F+Math.sin(N)*2.1,M-.7,q+Math.cos(N)*2.1),G.rotation.set(Math.cos(N)*1.05,0,-Math.sin(N)*1.05),n.add(G)}}for(let F=0;F<42;F++){let q=-280+E()*560,M=-260+E()*520;g.some(m=>Math.abs(q-m.x)<m.w/2+4&&Math.abs(M-m.z)<m.d/2+4)||c.some(m=>Math.abs(q-m.x)<m.w+2&&Math.abs(M-m.z)<m.d+2)||y(q,M,10+E()*5)}for(let F of[59,105])for(let q of[59,98])y(F,q),f(F,1,q+4,5,.4,1,"#634c32"),f(F,1.7,q+4.5,5,1,.2,"#634c32");let A=[];for(let F=-240;F<265;F+=42)for(let q of[12,48]){f(q,5,F,.2,10,.2,"#4b5b56"),f(q+1.1,10,F,2.5,.17,.2,"#4b5b56");let M=f(q+2.2,9.9,F,1,.15,.65,"#fff2b7");A.push(M)}T("EAST FORT BUS STAND",48,5,-65,22,"#315e61",Math.PI/2);let R=[];function D(F,q,M="#e2ae52",m="car",U=0){let N=new Bi,G=m==="bus",it=m==="auto",nt=G?3:it?1.8:2.2,k=G?9:it?3:4.6;f(0,1,0,nt,1.25,k,M,N),f(0,G?2.35:1.85,G?0:.2,nt*.91,G?1.6:.85,k*.62,it?"#262f2c":M,N),f(0,G?2.6:1.94,k*.32+.02,nt*.84,.65,.07,"#345c67",N),f(0,G?2.6:1.94,-k*.32-.02,nt*.84,.6,.07,"#345c67",N);for(let at of[-1,1]){f(at*nt*.46,G?2.6:1.95,0,.05,.62,k*.49,"#365b62",N);for(let St of[-k*.31,k*.31]){let ct=new Ne(new ua(.5,.5,.3,10),u("#222b2d"));ct.rotation.z=Math.PI/2,ct.position.set(at*nt*.49,.55,St),N.add(ct)}f(at*nt*.32,1.15,k/2+.02,.42,.25,.08,"#fff1bb",N),f(at*nt*.32,1.15,-k/2-.02,.4,.2,.08,"#b34a36",N)}G&&(f(0,1.2,0,nt+.03,.23,k+.03,"#eedeb7",N),f(0,3.2,0,nt+.1,.2,k+.1,"#eee1c4",N)),N.position.set(F,0,q),N.rotation.y=U,n.add(N);let W={g:N,x:F,z:q,angle:U,speed:0,r:G?4.7:2.3};return R.push(W),W}let B=D(3,1,"#e9b65e","car",-Math.PI/2);D(51,-85,"#b84e3d","bus"),D(51,-103,"#426d79","bus"),D(62,47,"#d0a53c","auto",Math.PI/2),D(190,13,"#d9d8c7","car",Math.PI/2),D(-95,12,"#5a8b8b","car",Math.PI/2);let K=[D(23,-225,"#d2ab41","auto"),D(38,230,"#b84f3e","bus",Math.PI),D(23,110,"#c8d4c8"),D(38,-65,"#659494","car",Math.PI)],J=new Bi;f(0,1.35,0,.55,.75,.32,"#e7c878",J),f(-.16,.55,0,.2,.85,.24,"#283b46",J),f(.16,.55,0,.2,.85,.24,"#283b46",J);let V=new Ne(new _o(.24,10,8),u("#a97b57"));V.position.y=1.95,J.add(V),n.add(J),J.visible=!1;let Q=[];for(let F=0;F<22;F++){let q=J.clone();q.visible=!0,q.position.set(68+E()*200,0,F%2?-12:15),n.add(q),Q.push({g:q,home:q.position.x,phase:E()*6})}let Z=new Ne(new ql(5,.25,8,40),new ys({color:"#ffc56c"}));Z.rotation.x=Math.PI/2,Z.position.y=.45,n.add(Z),Z.visible=!1;let et=new Ne(new ua(.65,.65,24,12),new ys({color:"#ffcf7b",transparent:!0,opacity:.25,depthWrite:!1}));n.add(et),et.visible=!1;let rt=[{x:144,z:2,name:"Chalai market"},{x:-107,z:0,name:"Temple approach"},{x:30,z:-84,name:"East Fort bus stand"}],L={x:3,z:1,angle:-Math.PI/2,speed:0,mode:"Driving",place:"East Fort",mission:"Explore the neighborhood",step:0,active:!1,paused:!1,night:!1,cam:0},ut=B,ht={},jt=0,ye=performance.now(),$t=0,j=0,lt=0,ot=0;function Nt(F,q,M){return Math.abs(F)>298||Math.abs(q)>282||c.some(m=>Math.abs(F-m.x)<m.w+M&&Math.abs(q-m.z)<m.d+M)}function Ot(){t({speed:Math.round(Math.abs(L.speed)*3.6),mode:L.mode,place:L.place,mission:L.mission,step:L.step,active:L.active,paused:L.paused,night:L.night})}function Rt(F){if(document.activeElement?.tagName==="BUTTON"&&document.activeElement.blur(),F==="pause"&&(L.paused=!L.paused),F==="camera"&&(L.cam=(L.cam+1)%3),F==="night"&&(L.night=!L.night,n.background.set(L.night?"#152739":"#c6dbe0"),n.fog.color.copy(n.background),a.intensity=L.night?.85:2.3,r.intensity=L.night?.5:3.3,r.color.set(L.night?"#a1c5f2":"#ffd4a1")),F==="reset"&&(L.x=3,L.z=1,L.angle=-Math.PI/2,L.speed=0,L.mode==="Driving"&&(ut.x=3,ut.z=1)),F==="enter"&&!L.paused)if(L.mode==="Driving"){let M=[{x:L.x+Math.cos(L.angle)*3.7,z:L.z-Math.sin(L.angle)*3.7},{x:L.x-Math.cos(L.angle)*3.7,z:L.z+Math.sin(L.angle)*3.7}].find(m=>!Nt(m.x,m.z,.4));M&&(L.mode="Walking",L.x=M.x,L.z=M.z,L.speed=0,J.visible=!0)}else{let q=R.filter(M=>!K.includes(M)).find(M=>Math.hypot(M.x-L.x,M.z-L.z)<6);q&&(ut=q,L.mode="Driving",L.x=q.x,L.z=q.z,L.angle=q.angle,L.speed=0,J.visible=!1)}F==="mission"&&(L.active=!L.active,L.step=0,lt=0,L.mission="Deliver to Chalai market"),Ot()}function Ae(F){if(F.target instanceof HTMLElement&&/INPUT|TEXTAREA/.test(F.target.tagName))return;let q=F.key.toLowerCase();if(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"," ","f","c","r","escape"].includes(q)&&F.preventDefault(),ht[q]=!0,!F.repeat){let M={f:"enter",c:"camera",r:"reset",escape:"pause"};M[q]&&Rt(M[q])}}function Xt(F){ht[F.key.toLowerCase()]=!1}function re(){Object.keys(ht).forEach(F=>ht[F]=!1),L.paused=!0,Ot()}window.addEventListener("keydown",Ae),window.addEventListener("keyup",Xt),window.addEventListener("blur",re);let te=()=>{i.setSize(e.clientWidth,e.clientHeight),s.aspect=e.clientWidth/e.clientHeight,s.updateProjectionMatrix()};window.addEventListener("resize",te),te(),s.position.set(33,17,12);let ee=document.getElementById("minimap"),Lt=ee?.getContext("2d");function Be(){if(!Lt)return;Lt.fillStyle="#17353d",Lt.fillRect(0,0,240,200);let F=M=>120+M*.35,q=M=>100+M*.3;Lt.fillStyle="#3d5456";for(let M of d)Lt.fillRect(F(M.x-M.w/2),q(M.z-M.d/2),M.w*.35,M.d*.3);Lt.fillStyle="#819191";for(let M of g)Lt.fillRect(F(M.x-M.w/2),q(M.z-M.d/2),M.w*.35,M.d*.3);if(Lt.fillStyle="#3c9d9b",Lt.fillRect(F(-180),q(-97),74*.35,66*.3),Lt.font="10px Arial",Lt.fillStyle="#c5d4cd",Lt.fillText("TEMPLE",17,91),Lt.fillText("CHALAI",170,91),L.active){let M=rt[L.step];Lt.fillStyle="#ffc66f",Lt.beginPath(),Lt.arc(F(M.x),q(M.z),5,0,Math.PI*2),Lt.fill()}Lt.save(),Lt.translate(F(L.x),q(L.z)),Lt.rotate(-L.angle),Lt.fillStyle="#fff0c2",Lt.beginPath(),Lt.moveTo(0,6),Lt.lineTo(-4,-4),Lt.lineTo(4,-4),Lt.closePath(),Lt.fill(),Lt.restore()}let ze=new z,Xe=new z;function xe(F){jt=requestAnimationFrame(xe);let q=Math.min((F-ye)/1e3,.045);if(ye=F,!L.paused){j+=q;let U=(ht.w||ht.arrowup?1:0)-(ht.s||ht.arrowdown?1:0),N=(ht.a||ht.arrowleft?1:0)-(ht.d||ht.arrowright?1:0);L.mode==="Driving"?(L.speed+=U*13*q,L.speed*=Math.exp(-(ht[" "]?6:U?.22:1.4)*q),L.speed=Ug.clamp(L.speed,-10,27),L.angle+=N*1.45*q*Math.min(Math.abs(L.speed)/5,1)*Math.sign(L.speed)):(L.speed=U*(ht.shift?7:4),L.angle+=N*2.4*q);let G=L.x+Math.sin(L.angle)*L.speed*q,it=L.z+Math.cos(L.angle)*L.speed*q,nt=L.mode==="Driving"?1.7:.4,k=R.some(W=>(W!==ut||L.mode==="Walking")&&Math.hypot(G-W.x,it-W.z)<W.r+nt*.45);!Nt(G,it,nt)&&!k?(L.x=G,L.z=it):L.speed*=-.18,L.mode==="Driving"?(ut.x=L.x,ut.z=L.z,ut.angle=L.angle,ut.g.position.set(L.x,0,L.z),ut.g.rotation.y=L.angle):(J.position.set(L.x,0,L.z),J.rotation.y=L.angle);for(let W=0;W<K.length;W++){let at=K[W],St=W%2?-1:1,ct=at.z+St*7*q;!R.some(Tt=>Tt!==at&&Math.abs(Tt.x-at.x)<4&&St*(Tt.z-at.z)>0&&St*(Tt.z-at.z)<13)&&Math.hypot(at.x-L.x,ct-L.z)>9&&(at.z=ct),at.z>270&&(at.z=-270),at.z<-270&&(at.z=270),at.g.position.z=at.z}for(let W of Q)W.g.position.x=W.home+Math.sin(j*.2+W.phase)*4,W.g.rotation.y=Math.cos(j*.2+W.phase)>0?Math.PI/2:-Math.PI/2;if(L.active){let W=rt[L.step];L.mission="Deliver to "+W.name,Z.visible=et.visible=!0,Z.position.set(W.x,.5,W.z),et.position.set(W.x,12,W.z),Z.scale.setScalar(1+Math.sin(j*3)*.08),Math.hypot(L.x-W.x,L.z-W.z)<7&&Math.abs(L.speed)<2?lt+=q:lt=0,lt>1.2&&(lt=0,L.step<2?L.step++:(L.active=!1,ot=j+8,L.place="Delivery complete!"))}else Z.visible=et.visible=!1;j>ot&&(L.place=L.x>67?"Chalai Market":L.x<-85?"Temple Approach":L.z<-40?"East Fort Bus Stand":"East Fort")}let M=L.mode==="Driving"?15:7,m=L.cam===1?M*1.8:M;ze.set(L.x-Math.sin(L.angle)*m,L.cam===2?65:L.cam===1?22:L.mode==="Driving"?8:4.5,L.z-Math.cos(L.angle)*m),s.position.lerp(ze,1-Math.exp(-4*q)),Xe.set(L.x+Math.sin(L.angle)*5,1.7,L.z+Math.cos(L.angle)*5),s.lookAt(Xe),i.render(n,s),$t+=q,$t>.12&&($t=0,Ot(),Be())}jt=requestAnimationFrame(xe),Ot();let De=new AbortController,O=document.modelContext;if(O?.registerTool)try{Promise.resolve(O.registerTool({name:"set_game_paused",description:"Pause or resume the East Fort game.",inputSchema:{type:"object",properties:{paused:{type:"boolean"}},required:["paused"],additionalProperties:!1},annotations:{readOnlyHint:!1},execute(F){if(!F||typeof F.paused!="boolean")throw new Error("paused must be a boolean");return L.paused=F.paused,Ot(),{paused:L.paused}}},{signal:De.signal})).catch(()=>{})}catch{}return{action:Rt,key(F,q){ht[F]=q},dispose(){cancelAnimationFrame(jt),De.abort(),window.removeEventListener("keydown",Ae),window.removeEventListener("keyup",Xt),window.removeEventListener("blur",re),window.removeEventListener("resize",te);let F=new Set,q=new Set;n.traverse(M=>{M.geometry&&F.add(M.geometry),M.material&&q.add(M.material)}),F.forEach(M=>M.dispose()),q.forEach(M=>M.dispose()),p.forEach(M=>M.dispose()),i.dispose(),i.domElement.remove()}}}var wt=er(fc(),1);function Qg(){let e=(0,ya.useRef)(null),t=(0,ya.useRef)(null),[n,i]=(0,ya.useState)({speed:0,mode:"Driving",place:"East Fort",mission:"Explore the neighborhood",step:0,active:!1,paused:!1,night:!1}),[s,a]=(0,ya.useState)("");(0,ya.useEffect)(()=>{try{t.current=NM(e.current,i)}catch(o){a("Unable to start the 3D world. Please enable WebGL in your browser."),console.error(o)}return()=>t.current?.dispose()},[]);let r=o=>t.current?.action(o);return(0,wt.jsxs)("main",{className:"game",children:[(0,wt.jsx)("div",{ref:e,className:"viewport","aria-label":"3D East Fort game world"}),(0,wt.jsxs)("header",{className:"topbar",children:[(0,wt.jsxs)("div",{className:"brand",children:[(0,wt.jsx)("b",{className:"logo",children:"E/F"}),(0,wt.jsxs)("div",{children:[(0,wt.jsxs)("h1",{children:["EAST FORT ",(0,wt.jsx)("em",{children:"DRIVE"})]}),(0,wt.jsx)("p",{children:"THIRUVANANTHAPURAM \xB7 KERALA"})]})]}),(0,wt.jsxs)("div",{className:"top-actions",children:[(0,wt.jsx)("span",{children:"\u25CF OPEN WORLD"}),(0,wt.jsx)("button",{onClick:()=>r("night"),children:n.night?"\u263E Night":"\u2600 Golden hour"}),(0,wt.jsx)("button",{onClick:()=>r("pause"),children:n.paused?"Resume":"Pause"})]})]}),(0,wt.jsxs)("aside",{className:"mission",children:[(0,wt.jsx)("div",{className:"eyebrow",children:n.active?"DELIVERY RUN":"THE CITY IS YOURS"}),(0,wt.jsx)("h2",{children:n.active?n.mission:"Take the long way home."}),(0,wt.jsx)("p",{children:n.active?"Follow the amber marker. Stop inside it to deliver.":"Cruise the temple approach, turn into Chalai, or step out and explore."}),(0,wt.jsxs)("button",{className:"primary",onClick:()=>r("mission"),children:[n.active?"Cancel delivery":"Start a delivery"," ",(0,wt.jsx)("span",{children:"\u2197"})]}),n.active&&(0,wt.jsxs)("p",{className:"progress",children:["STOP ",n.step+1," OF 3"]})]}),(0,wt.jsxs)("div",{className:"location",children:[(0,wt.jsx)("span",{children:"08.48\xB0 N \xA0 76.95\xB0 E"}),(0,wt.jsx)("h2",{children:n.place}),(0,wt.jsxs)("p",{children:[n.mode," \xB7 Free roam"]})]}),(0,wt.jsxs)("div",{className:"map-panel",children:[(0,wt.jsx)("canvas",{id:"minimap",width:"240",height:"200","aria-label":"Neighborhood map, player and destination"}),(0,wt.jsxs)("div",{children:["NEIGHBORHOOD MAP ",(0,wt.jsx)("b",{children:"N \u2191"})]})]}),(0,wt.jsxs)("div",{className:"speed",children:[(0,wt.jsx)("strong",{children:String(n.speed).padStart(2,"0")}),(0,wt.jsx)("span",{children:n.mode==="Driving"?"KM/H":"ON FOOT"})]}),(0,wt.jsxs)("nav",{className:"controls","aria-label":"Game controls",children:[(0,wt.jsxs)("span",{children:[(0,wt.jsx)("kbd",{children:"W A S D"})," Move"]}),(0,wt.jsxs)("span",{children:[(0,wt.jsx)("kbd",{children:"SPACE"})," Brake"]}),(0,wt.jsxs)("button",{onClick:()=>r("enter"),children:[(0,wt.jsx)("kbd",{children:"F"}),n.mode==="Driving"?"Exit car":"Enter nearby car"]}),(0,wt.jsxs)("button",{onClick:()=>r("camera"),children:[(0,wt.jsx)("kbd",{children:"C"})," Camera"]}),(0,wt.jsxs)("button",{onClick:()=>r("reset"),children:[(0,wt.jsx)("kbd",{children:"R"})," Recover"]})]}),(0,wt.jsxs)("div",{className:"touch-controls",children:[(0,wt.jsx)("div",{children:[["\u2191","w"],["\u2190","a"],["\u2193","s"],["\u2192","d"]].map(([o,l])=>(0,wt.jsx)("button",{"aria-label":"Move "+l,onPointerDown:c=>{c.currentTarget.setPointerCapture(c.pointerId),t.current?.key(l,!0)},onPointerUp:()=>t.current?.key(l,!1),onPointerCancel:()=>t.current?.key(l,!1),children:o},l))}),(0,wt.jsx)("button",{onPointerDown:o=>{o.currentTarget.setPointerCapture(o.pointerId),t.current?.key(" ",!0)},onPointerUp:()=>t.current?.key(" ",!1),onPointerCancel:()=>t.current?.key(" ",!1),children:"BRAKE"})]}),n.paused&&(0,wt.jsxs)("div",{className:"pause-label",children:["PAUSED",(0,wt.jsx)("button",{onClick:()=>r("pause"),children:"Return to the streets"})]}),s&&(0,wt.jsx)("div",{className:"pause-label",role:"alert",children:s}),(0,wt.jsxs)("details",{className:"credits",children:[(0,wt.jsx)("summary",{children:"About this world"}),(0,wt.jsx)("p",{children:"Playable stylized prototype. Roads, buildings and distances are approximate, not a complete surveyed recreation. Original procedural 3D assets; no Google imagery embedded."}),(0,wt.jsxs)("p",{children:["Reference: ",(0,wt.jsx)("a",{href:"https://www.google.com/maps/search/?api=1&query=East+Fort+Thiruvananthapuram",target:"_blank",rel:"noreferrer",children:"Google Maps: East Fort"}),". Street View could not be verified in this build."]}),(0,wt.jsx)("p",{children:"Arrow keys also move. F enters/exits a nearby car. C changes camera. R recovers to the road. Esc pauses. Keyboard recommended; touch buttons supported."})]})]})}var BM=er(fc(),1);(0,PM.createRoot)(document.getElementById("root")).render((0,BM.jsx)(Qg,{}));
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
