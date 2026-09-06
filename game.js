var _T=Object.create;var sv=Object.defineProperty;var vT=Object.getOwnPropertyDescriptor;var yT=Object.getOwnPropertyNames;var xT=Object.getPrototypeOf,ST=Object.prototype.hasOwnProperty;var Zi=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var MT=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of yT(e))!ST.call(t,s)&&s!==n&&sv(t,s,{get:()=>e[s],enumerable:!(i=vT(e,s))||i.enumerable});return t};var Yr=(t,e,n)=>(n=t!=null?_T(xT(t)):{},MT(e||!t||!t.__esModule?sv(n,"default",{value:t,enumerable:!0}):n,t));var pv=Zi(It=>{"use strict";function up(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,s=t[i];if(0<bu(s,e))t[i]=e,t[n]=s,n=i;else break e}}function Ki(t){return t.length===0?null:t[0]}function Au(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,s=t.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=t[r],l=r+1,c=t[l];if(0>bu(o,n))l<s&&0>bu(c,o)?(t[i]=c,t[l]=n,i=l):(t[i]=o,t[r]=n,i=r);else if(l<s&&0>bu(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function bu(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}It.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(av=performance,It.unstable_now=function(){return av.now()}):(op=Date,rv=op.now(),It.unstable_now=function(){return op.now()-rv});var av,op,rv,gs=[],na=[],bT=1,gi=null,Cn=3,hp=!1,Al=!1,El=!1,fp=!1,cv=typeof setTimeout=="function"?setTimeout:null,uv=typeof clearTimeout=="function"?clearTimeout:null,ov=typeof setImmediate<"u"?setImmediate:null;function Tu(t){for(var e=Ki(na);e!==null;){if(e.callback===null)Au(na);else if(e.startTime<=t)Au(na),e.sortIndex=e.expirationTime,up(gs,e);else break;e=Ki(na)}}function dp(t){if(El=!1,Tu(t),!Al)if(Ki(gs)!==null)Al=!0,Kr||(Kr=!0,Zr());else{var e=Ki(na);e!==null&&pp(dp,e.startTime-t)}}var Kr=!1,wl=-1,hv=5,fv=-1;function dv(){return fp?!0:!(It.unstable_now()-fv<hv)}function lp(){if(fp=!1,Kr){var t=It.unstable_now();fv=t;var e=!0;try{e:{Al=!1,El&&(El=!1,uv(wl),wl=-1),hp=!0;var n=Cn;try{t:{for(Tu(t),gi=Ki(gs);gi!==null&&!(gi.expirationTime>t&&dv());){var i=gi.callback;if(typeof i=="function"){gi.callback=null,Cn=gi.priorityLevel;var s=i(gi.expirationTime<=t);if(t=It.unstable_now(),typeof s=="function"){gi.callback=s,Tu(t),e=!0;break t}gi===Ki(gs)&&Au(gs),Tu(t)}else Au(gs);gi=Ki(gs)}if(gi!==null)e=!0;else{var a=Ki(na);a!==null&&pp(dp,a.startTime-t),e=!1}}break e}finally{gi=null,Cn=n,hp=!1}e=void 0}}finally{e?Zr():Kr=!1}}}var Zr;typeof ov=="function"?Zr=function(){ov(lp)}:typeof MessageChannel<"u"?(cp=new MessageChannel,lv=cp.port2,cp.port1.onmessage=lp,Zr=function(){lv.postMessage(null)}):Zr=function(){cv(lp,0)};var cp,lv;function pp(t,e){wl=cv(function(){t(It.unstable_now())},e)}It.unstable_IdlePriority=5;It.unstable_ImmediatePriority=1;It.unstable_LowPriority=4;It.unstable_NormalPriority=3;It.unstable_Profiling=null;It.unstable_UserBlockingPriority=2;It.unstable_cancelCallback=function(t){t.callback=null};It.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):hv=0<t?Math.floor(1e3/t):5};It.unstable_getCurrentPriorityLevel=function(){return Cn};It.unstable_next=function(t){switch(Cn){case 1:case 2:case 3:var e=3;break;default:e=Cn}var n=Cn;Cn=e;try{return t()}finally{Cn=n}};It.unstable_requestPaint=function(){fp=!0};It.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=Cn;Cn=t;try{return e()}finally{Cn=n}};It.unstable_scheduleCallback=function(t,e,n){var i=It.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,t={id:bT++,callback:e,priorityLevel:t,startTime:n,expirationTime:s,sortIndex:-1},n>i?(t.sortIndex=n,up(na,t),Ki(gs)===null&&t===Ki(na)&&(El?(uv(wl),wl=-1):El=!0,pp(dp,n-i))):(t.sortIndex=s,up(gs,t),Al||hp||(Al=!0,Kr||(Kr=!0,Zr()))),t};It.unstable_shouldYield=dv;It.unstable_wrapCallback=function(t){var e=Cn;return function(){var n=Cn;Cn=e;try{return t.apply(this,arguments)}finally{Cn=n}}}});var gv=Zi((vN,mv)=>{"use strict";mv.exports=pv()});var wv=Zi(He=>{"use strict";var _p=Symbol.for("react.transitional.element"),TT=Symbol.for("react.portal"),AT=Symbol.for("react.fragment"),ET=Symbol.for("react.strict_mode"),wT=Symbol.for("react.profiler"),RT=Symbol.for("react.consumer"),CT=Symbol.for("react.context"),DT=Symbol.for("react.forward_ref"),NT=Symbol.for("react.suspense"),LT=Symbol.for("react.memo"),Sv=Symbol.for("react.lazy"),UT=Symbol.for("react.activity"),_v=Symbol.iterator;function IT(t){return t===null||typeof t!="object"?null:(t=_v&&t[_v]||t["@@iterator"],typeof t=="function"?t:null)}var Mv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bv=Object.assign,Tv={};function jr(t,e,n){this.props=t,this.context=e,this.refs=Tv,this.updater=n||Mv}jr.prototype.isReactComponent={};jr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Av(){}Av.prototype=jr.prototype;function vp(t,e,n){this.props=t,this.context=e,this.refs=Tv,this.updater=n||Mv}var yp=vp.prototype=new Av;yp.constructor=vp;bv(yp,jr.prototype);yp.isPureReactComponent=!0;var vv=Array.isArray;function gp(){}var Rt={H:null,A:null,T:null,S:null},Ev=Object.prototype.hasOwnProperty;function xp(t,e,n){var i=n.ref;return{$$typeof:_p,type:t,key:e,ref:i!==void 0?i:null,props:n}}function OT(t,e){return xp(t.type,e,t.props)}function Sp(t){return typeof t=="object"&&t!==null&&t.$$typeof===_p}function PT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yv=/\/+/g;function mp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PT(""+t.key):e.toString(36)}function BT(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(gp,gp):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Jr(t,e,n,i,s){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case _p:case TT:r=!0;break;case Sv:return r=t._init,Jr(r(t._payload),e,n,i,s)}}if(r)return s=s(t),r=i===""?"."+mp(t,0):i,vv(s)?(n="",r!=null&&(n=r.replace(yv,"$&/")+"/"),Jr(s,e,n,"",function(c){return c})):s!=null&&(Sp(s)&&(s=OT(s,n+(s.key==null||t&&t.key===s.key?"":(""+s.key).replace(yv,"$&/")+"/")+r)),e.push(s)),1;r=0;var o=i===""?".":i+":";if(vv(t))for(var l=0;l<t.length;l++)i=t[l],a=o+mp(i,l),r+=Jr(i,e,n,a,s);else if(l=IT(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,a=o+mp(i,l++),r+=Jr(i,e,n,a,s);else if(a==="object"){if(typeof t.then=="function")return Jr(BT(t),e,n,i,s);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function Eu(t,e,n){if(t==null)return t;var i=[],s=0;return Jr(t,i,"","",function(a){return e.call(n,a,s++)}),i}function zT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xv=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},FT={map:Eu,forEach:function(t,e,n){Eu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Eu(t,function(){e++}),e},toArray:function(t){return Eu(t,function(e){return e})||[]},only:function(t){if(!Sp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Activity=UT;He.Children=FT;He.Component=jr;He.Fragment=AT;He.Profiler=wT;He.PureComponent=vp;He.StrictMode=ET;He.Suspense=NT;He.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Rt;He.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Rt.H.useMemoCache(t)}};He.cache=function(t){return function(){return t.apply(null,arguments)}};He.cacheSignal=function(){return null};He.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=bv({},t.props),s=t.key;if(e!=null)for(a in e.key!==void 0&&(s=""+e.key),e)!Ev.call(e,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&e.ref===void 0||(i[a]=e[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return xp(t.type,s,i)};He.createContext=function(t){return t={$$typeof:CT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:RT,_context:t},t};He.createElement=function(t,e,n){var i,s={},a=null;if(e!=null)for(i in e.key!==void 0&&(a=""+e.key),e)Ev.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=e[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(t&&t.defaultProps)for(i in r=t.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return xp(t,a,s)};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:DT,render:t}};He.isValidElement=Sp;He.lazy=function(t){return{$$typeof:Sv,_payload:{_status:-1,_result:t},_init:zT}};He.memo=function(t,e){return{$$typeof:LT,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=Rt.T,n={};Rt.T=n;try{var i=t(),s=Rt.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(gp,xv)}catch(a){xv(a)}finally{e!==null&&n.types!==null&&(e.types=n.types),Rt.T=e}};He.unstable_useCacheRefresh=function(){return Rt.H.useCacheRefresh()};He.use=function(t){return Rt.H.use(t)};He.useActionState=function(t,e,n){return Rt.H.useActionState(t,e,n)};He.useCallback=function(t,e){return Rt.H.useCallback(t,e)};He.useContext=function(t){return Rt.H.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t,e){return Rt.H.useDeferredValue(t,e)};He.useEffect=function(t,e){return Rt.H.useEffect(t,e)};He.useEffectEvent=function(t){return Rt.H.useEffectEvent(t)};He.useId=function(){return Rt.H.useId()};He.useImperativeHandle=function(t,e,n){return Rt.H.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return Rt.H.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return Rt.H.useLayoutEffect(t,e)};He.useMemo=function(t,e){return Rt.H.useMemo(t,e)};He.useOptimistic=function(t,e){return Rt.H.useOptimistic(t,e)};He.useReducer=function(t,e,n){return Rt.H.useReducer(t,e,n)};He.useRef=function(t){return Rt.H.useRef(t)};He.useState=function(t){return Rt.H.useState(t)};He.useSyncExternalStore=function(t,e,n){return Rt.H.useSyncExternalStore(t,e,n)};He.useTransition=function(){return Rt.H.useTransition()};He.version="19.2.6"});var wu=Zi((xN,Rv)=>{"use strict";Rv.exports=wv()});var Dv=Zi(In=>{"use strict";var HT=wu();function Cv(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ia(){}var Un={d:{f:ia,r:function(){throw Error(Cv(522))},D:ia,C:ia,L:ia,m:ia,X:ia,S:ia,M:ia},p:0,findDOMNode:null},VT=Symbol.for("react.portal");function GT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:VT,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var Rl=HT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ru(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Un;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Cv(299));return GT(t,e,null,n)};In.flushSync=function(t){var e=Rl.T,n=Un.p;try{if(Rl.T=null,Un.p=2,t)return t()}finally{Rl.T=e,Un.p=n,Un.d.f()}};In.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Un.d.C(t,e))};In.prefetchDNS=function(t){typeof t=="string"&&Un.d.D(t)};In.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Ru(n,e.crossOrigin),s=typeof e.integrity=="string"?e.integrity:void 0,a=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?Un.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Un.d.X(t,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};In.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Ru(e.as,e.crossOrigin);Un.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Un.d.M(t)};In.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Ru(n,e.crossOrigin);Un.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};In.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Ru(e.as,e.crossOrigin);Un.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Un.d.m(t)};In.requestFormReset=function(t){Un.d.r(t)};In.unstable_batchedUpdates=function(t,e){return t(e)};In.useFormState=function(t,e,n){return Rl.H.useFormState(t,e,n)};In.useFormStatus=function(){return Rl.H.useHostTransitionStatus()};In.version="19.2.6"});var Uv=Zi((MN,Lv)=>{"use strict";function Nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nv)}catch(t){console.error(t)}}Nv(),Lv.exports=Dv()});var WM=Zi($h=>{"use strict";var un=gv(),ax=wu(),kT=Uv();function te(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function rx(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pc(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ox(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lx(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Iv(t){if(pc(t)!==t)throw Error(te(188))}function XT(t){var e=t.alternate;if(!e){if(e=pc(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return Iv(s),t;if(a===i)return Iv(s),e;a=a.sibling}throw Error(te(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function cx(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=cx(t),e!==null)return e;t=t.sibling}return null}var Nt=Object.assign,WT=Symbol.for("react.element"),Cu=Symbol.for("react.transitional.element"),Pl=Symbol.for("react.portal"),io=Symbol.for("react.fragment"),ux=Symbol.for("react.strict_mode"),tm=Symbol.for("react.profiler"),hx=Symbol.for("react.consumer"),Ts=Symbol.for("react.context"),Jm=Symbol.for("react.forward_ref"),nm=Symbol.for("react.suspense"),im=Symbol.for("react.suspense_list"),jm=Symbol.for("react.memo"),sa=Symbol.for("react.lazy"),sm=Symbol.for("react.activity"),qT=Symbol.for("react.memo_cache_sentinel"),Ov=Symbol.iterator;function Cl(t){return t===null||typeof t!="object"?null:(t=Ov&&t[Ov]||t["@@iterator"],typeof t=="function"?t:null)}var YT=Symbol.for("react.client.reference");function am(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===YT?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case io:return"Fragment";case tm:return"Profiler";case ux:return"StrictMode";case nm:return"Suspense";case im:return"SuspenseList";case sm:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Pl:return"Portal";case Ts:return t.displayName||"Context";case hx:return(t._context.displayName||"Context")+".Consumer";case Jm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jm:return e=t.displayName||null,e!==null?e:am(t.type)||"Memo";case sa:e=t._payload,t=t._init;try{return am(t(e))}catch{}}return null}var Bl=Array.isArray,Be=ax.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot=kT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,sr={pending:!1,data:null,method:null,action:null},rm=[],so=-1;function es(t){return{current:t}}function gn(t){0>so||(t.current=rm[so],rm[so]=null,so--)}function Tt(t,e){so++,rm[so]=t.current,t.current=e}var $i=es(null),ec=es(null),ma=es(null),lh=es(null);function ch(t,e){switch(Tt(ma,e),Tt(ec,t),Tt($i,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Gy(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Gy(e),t=NM(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}gn($i),Tt($i,t)}function bo(){gn($i),gn(ec),gn(ma)}function om(t){t.memoizedState!==null&&Tt(lh,t);var e=$i.current,n=NM(e,t.type);e!==n&&(Tt(ec,t),Tt($i,n))}function uh(t){ec.current===t&&(gn($i),gn(ec)),lh.current===t&&(gn(lh),hc._currentValue=sr)}var Mp,Pv;function er(t){if(Mp===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mp=e&&e[1]||"",Pv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mp+t+Pv}var bp=!1;function Tp(t,e){if(!t||bp)return"";bp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(d){var u=d}Reflect.construct(t,[],f)}else{try{f.call()}catch(d){u=d}t.call(f.prototype)}}else{try{throw Error()}catch(d){u=d}(f=t())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(d){if(d&&u&&typeof d.stack=="string")return[d.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=i&&0<=s);break}}}finally{bp=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?er(n):""}function ZT(t,e){switch(t.tag){case 26:case 27:case 5:return er(t.type);case 16:return er("Lazy");case 13:return t.child!==e&&e!==null?er("Suspense Fallback"):er("Suspense");case 19:return er("SuspenseList");case 0:case 15:return Tp(t.type,!1);case 11:return Tp(t.type.render,!1);case 1:return Tp(t.type,!0);case 31:return er("Activity");default:return""}}function Bv(t){try{var e="",n=null;do e+=ZT(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var lm=Object.prototype.hasOwnProperty,Qm=un.unstable_scheduleCallback,Ap=un.unstable_cancelCallback,KT=un.unstable_shouldYield,JT=un.unstable_requestPaint,ni=un.unstable_now,jT=un.unstable_getCurrentPriorityLevel,fx=un.unstable_ImmediatePriority,dx=un.unstable_UserBlockingPriority,hh=un.unstable_NormalPriority,QT=un.unstable_LowPriority,px=un.unstable_IdlePriority,$T=un.log,eA=un.unstable_setDisableYieldValue,mc=null,ii=null;function ua(t){if(typeof $T=="function"&&eA(t),ii&&typeof ii.setStrictMode=="function")try{ii.setStrictMode(mc,t)}catch{}}var si=Math.clz32?Math.clz32:iA,tA=Math.log,nA=Math.LN2;function iA(t){return t>>>=0,t===0?32:31-(tA(t)/nA|0)|0}var Du=256,Nu=262144,Lu=4194304;function tr(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Bh(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var s=0,a=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=tr(i):(r&=o,r!==0?s=tr(r):n||(n=o&~t,n!==0&&(s=tr(n))))):(o=i&~a,o!==0?s=tr(o):r!==0?s=tr(r):n||(n=i&~t,n!==0&&(s=tr(n)))),s===0?0:e!==0&&e!==s&&(e&a)===0&&(a=s&-s,n=e&-e,a>=n||a===32&&(n&4194048)!==0)?e:s}function gc(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function sA(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mx(){var t=Lu;return Lu<<=1,(Lu&62914560)===0&&(Lu=4194304),t}function Ep(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _c(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function aA(t,e,n,i,s,a){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=r&~n;0<n;){var h=31-si(n),f=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var d=u[h];d!==null&&(d.lane&=-536870913)}n&=~f}i!==0&&gx(t,i,0),a!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=a&~(r&~e))}function gx(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-si(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function _x(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-si(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}function vx(t,e){var n=e&-e;return n=(n&42)!==0?1:$m(n),(n&(t.suspendedLanes|e))!==0?0:n}function $m(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function eg(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function yx(){var t=ot.p;return t!==0?t:(t=window.event,t===void 0?32:GM(t.type))}function zv(t,e){var n=ot.p;try{return ot.p=t,e()}finally{ot.p=n}}var Ra=Math.random().toString(36).slice(2),yn="__reactFiber$"+Ra,Xn="__reactProps$"+Ra,Io="__reactContainer$"+Ra,cm="__reactEvents$"+Ra,rA="__reactListeners$"+Ra,oA="__reactHandles$"+Ra,Fv="__reactResources$"+Ra,vc="__reactMarker$"+Ra;function tg(t){delete t[yn],delete t[Xn],delete t[cm],delete t[rA],delete t[oA]}function ao(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Io]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yy(t);t!==null;){if(n=t[yn])return n;t=Yy(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){if(t=t[yn]||t[Io]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function zl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(te(33))}function go(t){var e=t[Fv];return e||(e=t[Fv]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function mn(t){t[vc]=!0}var xx=new Set,Sx={};function pr(t,e){To(t,e),To(t+"Capture",e)}function To(t,e){for(Sx[t]=e,t=0;t<e.length;t++)xx.add(e[t])}var lA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hv={},Vv={};function cA(t){return lm.call(Vv,t)?!0:lm.call(Hv,t)?!1:lA.test(t)?Vv[t]=!0:(Hv[t]=!0,!1)}function Yu(t,e,n){if(cA(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Uu(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function _s(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function vi(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uA(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function um(t){if(!t._valueTracker){var e=Mx(t)?"checked":"value";t._valueTracker=uA(t,e,""+t[e])}}function bx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var hA=/[\n"\\]/g;function Si(t){return t.replace(hA,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function hm(t,e,n,i,s,a,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+vi(e)):t.value!==""+vi(e)&&(t.value=""+vi(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?fm(t,r,vi(e)):n!=null?fm(t,r,vi(n)):i!=null&&t.removeAttribute("value"),s==null&&a!=null&&(t.defaultChecked=!!a),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+vi(o):t.removeAttribute("name")}function Tx(t,e,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.type=a),e!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||e!=null)){um(t);return}n=n!=null?""+vi(n):"",e=e!=null?""+vi(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),um(t)}function fm(t,e,n){e==="number"&&fh(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function _o(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+vi(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ax(t,e,n){if(e!=null&&(e=""+vi(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+vi(n):""}function Ex(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(te(92));if(Bl(i)){if(1<i.length)throw Error(te(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=vi(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),um(t)}function Ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gv(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||fA.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function wx(t,e,n){if(e!=null&&typeof e!="object")throw Error(te(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var s in e)i=e[s],e.hasOwnProperty(s)&&n[s]!==i&&Gv(t,s,i)}else for(var a in e)e.hasOwnProperty(a)&&Gv(t,a,e[a])}function ng(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zu(t){return pA.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function As(){}var dm=null;function ig(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ro=null,vo=null;function kv(t){var e=Oo(t);if(e&&(t=e.stateNode)){var n=t[Xn]||null;e:switch(t=e.stateNode,e.type){case"input":if(hm(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Si(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=i[Xn]||null;if(!s)throw Error(te(90));hm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&bx(i)}break e;case"textarea":Ax(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&_o(t,!!n.multiple,e,!1)}}}var wp=!1;function Rx(t,e,n){if(wp)return t(e,n);wp=!0;try{var i=t(e);return i}finally{if(wp=!1,(ro!==null||vo!==null)&&(Kh(),ro&&(e=ro,t=vo,vo=ro=null,kv(e),t)))for(e=0;e<t.length;e++)kv(t[e])}}function tc(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Xn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Ds=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pm=!1;if(Ds)try{Qr={},Object.defineProperty(Qr,"passive",{get:function(){pm=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{pm=!1}var Qr,ha=null,sg=null,Ku=null;function Cx(){if(Ku)return Ku;var t,e=sg,n=e.length,i,s="value"in ha?ha.value:ha.textContent,a=s.length;for(t=0;t<n&&e[t]===s[t];t++);var r=n-t;for(i=1;i<=r&&e[n-i]===s[a-i];i++);return Ku=s.slice(t,1<i?1-i:void 0)}function Ju(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Iu(){return!0}function Xv(){return!1}function Wn(t){function e(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Iu:Xv,this.isPropagationStopped=Xv,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Iu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Iu)},persist:function(){},isPersistent:Iu}),e}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zh=Wn(mr),yc=Nt({},mr,{view:0,detail:0}),mA=Wn(yc),Rp,Cp,Dl,Fh=Nt({},yc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ag,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Dl&&(Dl&&t.type==="mousemove"?(Rp=t.screenX-Dl.screenX,Cp=t.screenY-Dl.screenY):Cp=Rp=0,Dl=t),Rp)},movementY:function(t){return"movementY"in t?t.movementY:Cp}}),Wv=Wn(Fh),gA=Nt({},Fh,{dataTransfer:0}),_A=Wn(gA),vA=Nt({},yc,{relatedTarget:0}),Dp=Wn(vA),yA=Nt({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),xA=Wn(yA),SA=Nt({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MA=Wn(SA),bA=Nt({},mr,{data:0}),qv=Wn(bA),TA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},EA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=EA[t])?!!e[t]:!1}function ag(){return wA}var RA=Nt({},yc,{key:function(t){if(t.key){var e=TA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ju(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ag,charCode:function(t){return t.type==="keypress"?Ju(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ju(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CA=Wn(RA),DA=Nt({},Fh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yv=Wn(DA),NA=Nt({},yc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ag}),LA=Wn(NA),UA=Nt({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),IA=Wn(UA),OA=Nt({},Fh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PA=Wn(OA),BA=Nt({},mr,{newState:0,oldState:0}),zA=Wn(BA),FA=[9,13,27,32],rg=Ds&&"CompositionEvent"in window,Vl=null;Ds&&"documentMode"in document&&(Vl=document.documentMode);var HA=Ds&&"TextEvent"in window&&!Vl,Dx=Ds&&(!rg||Vl&&8<Vl&&11>=Vl),Zv=" ",Kv=!1;function Nx(t,e){switch(t){case"keyup":return FA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oo=!1;function VA(t,e){switch(t){case"compositionend":return Lx(e);case"keypress":return e.which!==32?null:(Kv=!0,Zv);case"textInput":return t=e.data,t===Zv&&Kv?null:t;default:return null}}function GA(t,e){if(oo)return t==="compositionend"||!rg&&Nx(t,e)?(t=Cx(),Ku=sg=ha=null,oo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dx&&e.locale!=="ko"?null:e.data;default:return null}}var kA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kA[t.type]:e==="textarea"}function Ux(t,e,n,i){ro?vo?vo.push(i):vo=[i]:ro=i,e=Dh(e,"onChange"),0<e.length&&(n=new zh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Gl=null,nc=null;function XA(t){RM(t,0)}function Hh(t){var e=zl(t);if(bx(e))return t}function jv(t,e){if(t==="change")return e}var Ix=!1;Ds&&(Ds?(Pu="oninput"in document,Pu||(Np=document.createElement("div"),Np.setAttribute("oninput","return;"),Pu=typeof Np.oninput=="function"),Ou=Pu):Ou=!1,Ix=Ou&&(!document.documentMode||9<document.documentMode));var Ou,Pu,Np;function Qv(){Gl&&(Gl.detachEvent("onpropertychange",Ox),nc=Gl=null)}function Ox(t){if(t.propertyName==="value"&&Hh(nc)){var e=[];Ux(e,nc,t,ig(t)),Rx(XA,e)}}function WA(t,e,n){t==="focusin"?(Qv(),Gl=e,nc=n,Gl.attachEvent("onpropertychange",Ox)):t==="focusout"&&Qv()}function qA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hh(nc)}function YA(t,e){if(t==="click")return Hh(e)}function ZA(t,e){if(t==="input"||t==="change")return Hh(e)}function KA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:KA;function ic(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!lm.call(e,s)||!ri(t[s],e[s]))return!1}return!0}function $v(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ey(t,e){var n=$v(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$v(n)}}function Px(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Px(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bx(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=fh(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fh(t.document)}return e}function og(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var JA=Ds&&"documentMode"in document&&11>=document.documentMode,lo=null,mm=null,kl=null,gm=!1;function ty(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gm||lo==null||lo!==fh(i)||(i=lo,"selectionStart"in i&&og(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),kl&&ic(kl,i)||(kl=i,i=Dh(mm,"onSelect"),0<i.length&&(e=new zh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=lo)))}function $a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var co={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Lp={},zx={};Ds&&(zx=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function gr(t){if(Lp[t])return Lp[t];if(!co[t])return t;var e=co[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zx)return Lp[t]=e[n];return t}var Fx=gr("animationend"),Hx=gr("animationiteration"),Vx=gr("animationstart"),jA=gr("transitionrun"),QA=gr("transitionstart"),$A=gr("transitioncancel"),Gx=gr("transitionend"),kx=new Map,_m="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_m.push("scrollEnd");function Ui(t,e){kx.set(t,e),pr(e,[t])}var dh=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],uo=0,lg=0;function Vh(){for(var t=uo,e=lg=uo=0;e<t;){var n=_i[e];_i[e++]=null;var i=_i[e];_i[e++]=null;var s=_i[e];_i[e++]=null;var a=_i[e];if(_i[e++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Xx(n,s,a)}}function Gh(t,e,n,i){_i[uo++]=t,_i[uo++]=e,_i[uo++]=n,_i[uo++]=i,lg|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function cg(t,e,n,i){return Gh(t,e,n,i),ph(t)}function _r(t,e){return Gh(t,null,null,e),ph(t)}function Xx(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=t.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(t=a.stateNode,t===null||t._visibility&1||(s=!0)),t=a,a=a.return;return t.tag===3?(a=t.stateNode,s&&e!==null&&(s=31-si(n),t=a.hiddenUpdates,i=t[s],i===null?t[s]=[e]:i.push(e),e.lane=n|536870912),a):null}function ph(t){if(50<Ql)throw Ql=0,zm=null,Error(te(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ho={};function eE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,e,n,i){return new eE(t,e,n,i)}function ug(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ws(t,e){var n=t.alternate;return n===null?(n=ei(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Wx(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ju(t,e,n,i,s,a){var r=0;if(i=t,typeof t=="function")ug(t)&&(r=1);else if(typeof t=="string")r=iw(t,n,$i.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case sm:return t=ei(31,n,e,s),t.elementType=sm,t.lanes=a,t;case io:return ar(n.children,s,a,e);case ux:r=8,s|=24;break;case tm:return t=ei(12,n,e,s|2),t.elementType=tm,t.lanes=a,t;case nm:return t=ei(13,n,e,s),t.elementType=nm,t.lanes=a,t;case im:return t=ei(19,n,e,s),t.elementType=im,t.lanes=a,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ts:r=10;break e;case hx:r=9;break e;case Jm:r=11;break e;case jm:r=14;break e;case sa:r=16,i=null;break e}r=29,n=Error(te(130,t===null?"null":typeof t,"")),i=null}return e=ei(r,n,e,s),e.elementType=t,e.type=i,e.lanes=a,e}function ar(t,e,n,i){return t=ei(7,t,i,e),t.lanes=n,t}function Up(t,e,n){return t=ei(6,t,null,e),t.lanes=n,t}function qx(t){var e=ei(18,null,null,0);return e.stateNode=t,e}function Ip(t,e,n){return e=ei(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ny=new WeakMap;function Mi(t,e){if(typeof t=="object"&&t!==null){var n=ny.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Bv(e)},ny.set(t,e),e)}return{value:t,source:e,stack:Bv(e)}}var fo=[],po=0,mh=null,sc=0,yi=[],xi=0,Ta=null,Ji=1,ji="";function Ms(t,e){fo[po++]=sc,fo[po++]=mh,mh=t,sc=e}function Yx(t,e,n){yi[xi++]=Ji,yi[xi++]=ji,yi[xi++]=Ta,Ta=t;var i=Ji;t=ji;var s=32-si(i)-1;i&=~(1<<s),n+=1;var a=32-si(e)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Ji=1<<32-si(e)+s|n<<s|i,ji=a+t}else Ji=1<<a|n<<s|i,ji=t}function hg(t){t.return!==null&&(Ms(t,1),Yx(t,1,0))}function fg(t){for(;t===mh;)mh=fo[--po],fo[po]=null,sc=fo[--po],fo[po]=null;for(;t===Ta;)Ta=yi[--xi],yi[xi]=null,ji=yi[--xi],yi[xi]=null,Ji=yi[--xi],yi[xi]=null}function Zx(t,e){yi[xi++]=Ji,yi[xi++]=ji,yi[xi++]=Ta,Ji=e.id,ji=e.overflow,Ta=t}var xn=null,Dt=null,it=!1,ga=null,bi=!1,vm=Error(te(519));function Aa(t){var e=Error(te(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ac(Mi(e,t)),vm}function iy(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[yn]=t,e[Xn]=i,n){case"dialog":$e("cancel",e),$e("close",e);break;case"iframe":case"object":case"embed":$e("load",e);break;case"video":case"audio":for(n=0;n<cc.length;n++)$e(cc[n],e);break;case"source":$e("error",e);break;case"img":case"image":case"link":$e("error",e),$e("load",e);break;case"details":$e("toggle",e);break;case"input":$e("invalid",e),Tx(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":$e("invalid",e);break;case"textarea":$e("invalid",e),Ex(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||DM(e.textContent,n)?(i.popover!=null&&($e("beforetoggle",e),$e("toggle",e)),i.onScroll!=null&&$e("scroll",e),i.onScrollEnd!=null&&$e("scrollend",e),i.onClick!=null&&(e.onclick=As),e=!0):e=!1,e||Aa(t,!0)}function sy(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:xn=xn.return}}function $r(t){if(t!==xn)return!1;if(!it)return sy(t),it=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||km(t.type,t.memoizedProps)),n=!n),n&&Dt&&Aa(t),sy(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));Dt=qy(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));Dt=qy(t)}else e===27?(e=Dt,Ca(t.type)?(t=Ym,Ym=null,Dt=t):Dt=e):Dt=xn?Ai(t.stateNode.nextSibling):null;return!0}function cr(){Dt=xn=null,it=!1}function Op(){var t=ga;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),ga=null),t}function ac(t){ga===null?ga=[t]:ga.push(t)}var ym=es(null),vr=null,Es=null;function ra(t,e,n){Tt(ym,e._currentValue),e._currentValue=n}function Rs(t){t._currentValue=ym.current,gn(ym)}function xm(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Sm(t,e,n,i){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;e:for(;a!==null;){var o=a;a=s;for(var l=0;l<e.length;l++)if(o.context===e[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),xm(a.return,n,t),i||(r=null);break e}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(te(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),xm(r,n,t),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===t){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Po(t,e,n,i){t=null;for(var s=e,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(te(387));if(r=r.memoizedProps,r!==null){var o=s.type;ri(s.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(s===lh.current){if(r=s.alternate,r===null)throw Error(te(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(hc):t=[hc])}s=s.return}t!==null&&Sm(e,t,n,i),e.flags|=262144}function gh(t){for(t=t.firstContext;t!==null;){if(!ri(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ur(t){vr=t,Es=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return Kx(vr,t)}function Bu(t,e){return vr===null&&ur(t),Kx(t,e)}function Kx(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Es===null){if(t===null)throw Error(te(308));Es=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Es=Es.next=e;return n}var tE=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},nE=un.unstable_scheduleCallback,iE=un.unstable_NormalPriority,an={$$typeof:Ts,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dg(){return{controller:new tE,data:new Map,refCount:0}}function xc(t){t.refCount--,t.refCount===0&&nE(iE,function(){t.controller.abort()})}var Xl=null,Mm=0,Eo=0,yo=null;function sE(t,e){if(Xl===null){var n=Xl=[];Mm=0,Eo=zg(),yo={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Mm++,e.then(ay,ay),e}function ay(){if(--Mm===0&&Xl!==null){yo!==null&&(yo.status="fulfilled");var t=Xl;Xl=null,Eo=0,yo=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function aE(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var s=0;s<n.length;s++)(0,n[s])(e)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var ry=Be.S;Be.S=function(t,e){cM=ni(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&sE(t,e),ry!==null&&ry(t,e)};var rr=es(null);function pg(){var t=rr.current;return t!==null?t:xt.pooledCache}function Qu(t,e){e===null?Tt(rr,rr.current):Tt(rr,e.pool)}function Jx(){var t=pg();return t===null?null:{parent:an._currentValue,pool:t}}var Bo=Error(te(460)),mg=Error(te(474)),kh=Error(te(542)),_h={then:function(){}};function oy(t){return t=t.status,t==="fulfilled"||t==="rejected"}function jx(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(As,As),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,cy(t),t;default:if(typeof e.status=="string")e.then(As,As);else{if(t=xt,t!==null&&100<t.shellSuspendCounter)throw Error(te(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=i}},function(i){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,cy(t),t}throw or=e,Bo}}function nr(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(or=n,Bo):n}}var or=null;function ly(){if(or===null)throw Error(te(459));var t=or;return or=null,t}function cy(t){if(t===Bo||t===kh)throw Error(te(483))}var xo=null,rc=0;function zu(t){var e=rc;return rc+=1,xo===null&&(xo=[]),jx(xo,t,e)}function Nl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Fu(t,e){throw e.$$typeof===WT?Error(te(525)):(t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Qx(t){function e(p,_){if(t){var M=p.deletions;M===null?(p.deletions=[_],p.flags|=16):M.push(_)}}function n(p,_){if(!t)return null;for(;_!==null;)e(p,_),_=_.sibling;return null}function i(p){for(var _=new Map;p!==null;)p.key!==null?_.set(p.key,p):_.set(p.index,p),p=p.sibling;return _}function s(p,_){return p=ws(p,_),p.index=0,p.sibling=null,p}function a(p,_,M){return p.index=M,t?(M=p.alternate,M!==null?(M=M.index,M<_?(p.flags|=67108866,_):M):(p.flags|=67108866,_)):(p.flags|=1048576,_)}function r(p){return t&&p.alternate===null&&(p.flags|=67108866),p}function o(p,_,M,v){return _===null||_.tag!==6?(_=Up(M,p.mode,v),_.return=p,_):(_=s(_,M),_.return=p,_)}function l(p,_,M,v){var A=M.type;return A===io?h(p,_,M.props.children,v,M.key):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===sa&&nr(A)===_.type)?(_=s(_,M.props),Nl(_,M),_.return=p,_):(_=ju(M.type,M.key,M.props,null,p.mode,v),Nl(_,M),_.return=p,_)}function c(p,_,M,v){return _===null||_.tag!==4||_.stateNode.containerInfo!==M.containerInfo||_.stateNode.implementation!==M.implementation?(_=Ip(M,p.mode,v),_.return=p,_):(_=s(_,M.children||[]),_.return=p,_)}function h(p,_,M,v,A){return _===null||_.tag!==7?(_=ar(M,p.mode,v,A),_.return=p,_):(_=s(_,M),_.return=p,_)}function f(p,_,M){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Up(""+_,p.mode,M),_.return=p,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Cu:return M=ju(_.type,_.key,_.props,null,p.mode,M),Nl(M,_),M.return=p,M;case Pl:return _=Ip(_,p.mode,M),_.return=p,_;case sa:return _=nr(_),f(p,_,M)}if(Bl(_)||Cl(_))return _=ar(_,p.mode,M,null),_.return=p,_;if(typeof _.then=="function")return f(p,zu(_),M);if(_.$$typeof===Ts)return f(p,Bu(p,_),M);Fu(p,_)}return null}function u(p,_,M,v){var A=_!==null?_.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return A!==null?null:o(p,_,""+M,v);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Cu:return M.key===A?l(p,_,M,v):null;case Pl:return M.key===A?c(p,_,M,v):null;case sa:return M=nr(M),u(p,_,M,v)}if(Bl(M)||Cl(M))return A!==null?null:h(p,_,M,v,null);if(typeof M.then=="function")return u(p,_,zu(M),v);if(M.$$typeof===Ts)return u(p,_,Bu(p,M),v);Fu(p,M)}return null}function d(p,_,M,v,A){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return p=p.get(M)||null,o(_,p,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Cu:return p=p.get(v.key===null?M:v.key)||null,l(_,p,v,A);case Pl:return p=p.get(v.key===null?M:v.key)||null,c(_,p,v,A);case sa:return v=nr(v),d(p,_,M,v,A)}if(Bl(v)||Cl(v))return p=p.get(M)||null,h(_,p,v,A,null);if(typeof v.then=="function")return d(p,_,M,zu(v),A);if(v.$$typeof===Ts)return d(p,_,M,Bu(_,v),A);Fu(_,v)}return null}function g(p,_,M,v){for(var A=null,T=null,w=_,y=_=0,E=null;w!==null&&y<M.length;y++){w.index>y?(E=w,w=null):E=w.sibling;var D=u(p,w,M[y],v);if(D===null){w===null&&(w=E);break}t&&w&&D.alternate===null&&e(p,w),_=a(D,_,y),T===null?A=D:T.sibling=D,T=D,w=E}if(y===M.length)return n(p,w),it&&Ms(p,y),A;if(w===null){for(;y<M.length;y++)w=f(p,M[y],v),w!==null&&(_=a(w,_,y),T===null?A=w:T.sibling=w,T=w);return it&&Ms(p,y),A}for(w=i(w);y<M.length;y++)E=d(w,p,y,M[y],v),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?y:E.key),_=a(E,_,y),T===null?A=E:T.sibling=E,T=E);return t&&w.forEach(function(I){return e(p,I)}),it&&Ms(p,y),A}function x(p,_,M,v){if(M==null)throw Error(te(151));for(var A=null,T=null,w=_,y=_=0,E=null,D=M.next();w!==null&&!D.done;y++,D=M.next()){w.index>y?(E=w,w=null):E=w.sibling;var I=u(p,w,D.value,v);if(I===null){w===null&&(w=E);break}t&&w&&I.alternate===null&&e(p,w),_=a(I,_,y),T===null?A=I:T.sibling=I,T=I,w=E}if(D.done)return n(p,w),it&&Ms(p,y),A;if(w===null){for(;!D.done;y++,D=M.next())D=f(p,D.value,v),D!==null&&(_=a(D,_,y),T===null?A=D:T.sibling=D,T=D);return it&&Ms(p,y),A}for(w=i(w);!D.done;y++,D=M.next())D=d(w,p,y,D.value,v),D!==null&&(t&&D.alternate!==null&&w.delete(D.key===null?y:D.key),_=a(D,_,y),T===null?A=D:T.sibling=D,T=D);return t&&w.forEach(function(z){return e(p,z)}),it&&Ms(p,y),A}function m(p,_,M,v){if(typeof M=="object"&&M!==null&&M.type===io&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Cu:e:{for(var A=M.key;_!==null;){if(_.key===A){if(A=M.type,A===io){if(_.tag===7){n(p,_.sibling),v=s(_,M.props.children),v.return=p,p=v;break e}}else if(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===sa&&nr(A)===_.type){n(p,_.sibling),v=s(_,M.props),Nl(v,M),v.return=p,p=v;break e}n(p,_);break}else e(p,_);_=_.sibling}M.type===io?(v=ar(M.props.children,p.mode,v,M.key),v.return=p,p=v):(v=ju(M.type,M.key,M.props,null,p.mode,v),Nl(v,M),v.return=p,p=v)}return r(p);case Pl:e:{for(A=M.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===M.containerInfo&&_.stateNode.implementation===M.implementation){n(p,_.sibling),v=s(_,M.children||[]),v.return=p,p=v;break e}else{n(p,_);break}else e(p,_);_=_.sibling}v=Ip(M,p.mode,v),v.return=p,p=v}return r(p);case sa:return M=nr(M),m(p,_,M,v)}if(Bl(M))return g(p,_,M,v);if(Cl(M)){if(A=Cl(M),typeof A!="function")throw Error(te(150));return M=A.call(M),x(p,_,M,v)}if(typeof M.then=="function")return m(p,_,zu(M),v);if(M.$$typeof===Ts)return m(p,_,Bu(p,M),v);Fu(p,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,_!==null&&_.tag===6?(n(p,_.sibling),v=s(_,M),v.return=p,p=v):(n(p,_),v=Up(M,p.mode,v),v.return=p,p=v),r(p)):n(p,_)}return function(p,_,M,v){try{rc=0;var A=m(p,_,M,v);return xo=null,A}catch(w){if(w===Bo||w===kh)throw w;var T=ei(29,w,null,p.mode);return T.lanes=v,T.return=p,T}}}var hr=Qx(!0),$x=Qx(!1),aa=!1;function gg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function va(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(rt&2)!==0){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,e=ph(t),Xx(t,null,n),e}return Gh(t,i,e,n),ph(t)}function Wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_x(t,n)}}function Pp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=e:a=a.next=e}else s=a=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Tm=!1;function ql(){if(Tm){var t=yo;if(t!==null)throw t}}function Yl(t,e,n,i){Tm=!1;var s=t.updateQueue;aa=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var f=s.baseState;r=0,h=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(nt&u)===u:(i&u)===u){u!==0&&u===Eo&&(Tm=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var g=t,x=o;u=e;var m=n;switch(x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(m,f,u);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,u=typeof g=="function"?g.call(m,f,u):g,u==null)break e;f=Nt({},f,u);break e;case 2:aa=!0}}u=o.callback,u!==null&&(t.flags|=64,d&&(t.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=f):h=h.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);h===null&&(l=f),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),wa|=r,t.lanes=r,t.memoizedState=f}}function eS(t,e){if(typeof t!="function")throw Error(te(191,t));t.call(e)}function tS(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)eS(n[t],e)}var wo=es(null),vh=es(0);function uy(t,e){t=Is,Tt(vh,t),Tt(wo,e),Is=t|e.baseLanes}function Am(){Tt(vh,Is),Tt(wo,wo.current)}function _g(){Is=vh.current,gn(wo),gn(vh)}var oi=es(null),Ti=null;function oa(t){var e=t.alternate;Tt(Kt,Kt.current&1),Tt(oi,t),Ti===null&&(e===null||wo.current!==null||e.memoizedState!==null)&&(Ti=t)}function Em(t){Tt(Kt,Kt.current),Tt(oi,t),Ti===null&&(Ti=t)}function nS(t){t.tag===22?(Tt(Kt,Kt.current),Tt(oi,t),Ti===null&&(Ti=t)):la(t)}function la(){Tt(Kt,Kt.current),Tt(oi,oi.current)}function $n(t){gn(oi),Ti===t&&(Ti=null),gn(Kt)}var Kt=es(0);function yh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Wm(n)||qm(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ns=0,Ge=null,gt=null,nn=null,xh=!1,So=!1,fr=!1,Sh=0,oc=0,Mo=null,rE=0;function kt(){throw Error(te(321))}function vg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function yg(t,e,n,i,s,a){return Ns=a,Ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Be.H=t===null||t.memoizedState===null?US:Dg,fr=!1,a=n(i,s),fr=!1,So&&(a=sS(e,n,i,s)),iS(t),a}function iS(t){Be.H=lc;var e=gt!==null&&gt.next!==null;if(Ns=0,nn=gt=Ge=null,xh=!1,oc=0,Mo=null,e)throw Error(te(300));t===null||rn||(t=t.dependencies,t!==null&&gh(t)&&(rn=!0))}function sS(t,e,n,i){Ge=t;var s=0;do{if(So&&(Mo=null),oc=0,So=!1,25<=s)throw Error(te(301));if(s+=1,nn=gt=null,t.updateQueue!=null){var a=t.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Be.H=IS,a=e(n,i)}while(So);return a}function oE(){var t=Be.H,e=t.useState()[0];return e=typeof e.then=="function"?Sc(e):e,t=t.useState()[0],(gt!==null?gt.memoizedState:null)!==t&&(Ge.flags|=1024),e}function xg(){var t=Sh!==0;return Sh=0,t}function Sg(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Mg(t){if(xh){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}xh=!1}Ns=0,nn=gt=Ge=null,So=!1,oc=Sh=0,Mo=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Ge.memoizedState=nn=t:nn=nn.next=t,nn}function Jt(){if(gt===null){var t=Ge.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=nn===null?Ge.memoizedState:nn.next;if(e!==null)nn=e,gt=t;else{if(t===null)throw Ge.alternate===null?Error(te(467)):Error(te(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},nn===null?Ge.memoizedState=nn=t:nn=nn.next=t}return nn}function Xh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sc(t){var e=oc;return oc+=1,Mo===null&&(Mo=[]),t=jx(Mo,t,e),e=Ge,(nn===null?e.memoizedState:nn.next)===null&&(e=e.alternate,Be.H=e===null||e.memoizedState===null?US:Dg),t}function Wh(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Sc(t);if(t.$$typeof===Ts)return Sn(t)}throw Error(te(438,String(t)))}function bg(t){var e=null,n=Ge.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Ge.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Xh(),Ge.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=qT;return e.index++,n}function Ls(t,e){return typeof e=="function"?e(t):e}function $u(t){var e=Jt();return Tg(e,gt,t)}function Tg(t,e,n){var i=t.queue;if(i===null)throw Error(te(311));i.lastRenderedReducer=n;var s=t.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}e.baseQueue=s=a,i.pending=null}if(a=t.baseState,s===null)t.memoizedState=a;else{e=s.next;var o=r=null,l=null,c=e,h=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(nt&f)===f:(Ns&f)===f){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Eo&&(h=!0);else if((Ns&u)===u){c=c.next,u===Eo&&(h=!0);continue}else f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Ge.lanes|=u,wa|=u;f=c.action,fr&&n(a,f),a=c.hasEagerState?c.eagerState:n(a,f)}else u={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Ge.lanes|=f,wa|=f;c=c.next}while(c!==null&&c!==e);if(l===null?r=a:l.next=o,!ri(a,t.memoizedState)&&(rn=!0,h&&(n=yo,n!==null)))throw n;t.memoizedState=a,t.baseState=r,t.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Bp(t){var e=Jt(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,a=e.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=t(a,r.action),r=r.next;while(r!==s);ri(a,e.memoizedState)||(rn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function aS(t,e,n){var i=Ge,s=Jt(),a=it;if(a){if(n===void 0)throw Error(te(407));n=n()}else n=e();var r=!ri((gt||s).memoizedState,n);if(r&&(s.memoizedState=n,rn=!0),s=s.queue,Ag(lS.bind(null,i,s,t),[t]),s.getSnapshot!==e||r||nn!==null&&nn.memoizedState.tag&1){if(i.flags|=2048,Ro(9,{destroy:void 0},oS.bind(null,i,s,n,e),null),xt===null)throw Error(te(349));a||(Ns&127)!==0||rS(i,e,n)}return n}function rS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ge.updateQueue,e===null?(e=Xh(),Ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function oS(t,e,n,i){e.value=n,e.getSnapshot=i,cS(e)&&uS(t)}function lS(t,e,n){return n(function(){cS(e)&&uS(t)})}function cS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function uS(t){var e=_r(t,2);e!==null&&kn(e,t,2)}function wm(t){var e=On();if(typeof t=="function"){var n=t;if(t=n(),fr){ua(!0);try{n()}finally{ua(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ls,lastRenderedState:t},e}function hS(t,e,n,i){return t.baseState=n,Tg(t,gt,typeof i=="function"?i:Ls)}function lE(t,e,n,i,s){if(Yh(t))throw Error(te(485));if(t=e.action,t!==null){var a={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Be.T!==null?n(!0):a.isTransition=!1,i(a),n=e.pending,n===null?(a.next=e.pending=a,fS(e,a)):(a.next=n.next,e.pending=n.next=a)}}function fS(t,e){var n=e.action,i=e.payload,s=t.state;if(e.isTransition){var a=Be.T,r={};Be.T=r;try{var o=n(s,i),l=Be.S;l!==null&&l(r,o),hy(t,e,o)}catch(c){Rm(t,e,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Be.T=a}}else try{a=n(s,i),hy(t,e,a)}catch(c){Rm(t,e,c)}}function hy(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){fy(t,e,i)},function(i){return Rm(t,e,i)}):fy(t,e,n)}function fy(t,e,n){e.status="fulfilled",e.value=n,dS(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,fS(t,n)))}function Rm(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,dS(e),e=e.next;while(e!==i)}t.action=null}function dS(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function pS(t,e){return e}function dy(t,e){if(it){var n=xt.formState;if(n!==null){e:{var i=Ge;if(it){if(Dt){t:{for(var s=Dt,a=bi;s.nodeType!==8;){if(!a){s=null;break t}if(s=Ai(s.nextSibling),s===null){s=null;break t}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Dt=Ai(s.nextSibling),i=s.data==="F!";break e}}Aa(i)}i=!1}i&&(e=n[0])}}return n=On(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pS,lastRenderedState:e},n.queue=i,n=DS.bind(null,Ge,i),i.dispatch=n,i=wm(!1),a=Cg.bind(null,Ge,!1,i.queue),i=On(),s={state:e,dispatch:null,action:t,pending:null},i.queue=s,n=lE.bind(null,Ge,s,a,n),s.dispatch=n,i.memoizedState=t,[e,n,!1]}function py(t){var e=Jt();return mS(e,gt,t)}function mS(t,e,n){if(e=Tg(t,e,pS)[0],t=$u(Ls)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Sc(e)}catch(r){throw r===Bo?kh:r}else i=e;e=Jt();var s=e.queue,a=s.dispatch;return n!==e.memoizedState&&(Ge.flags|=2048,Ro(9,{destroy:void 0},cE.bind(null,s,n),null)),[i,a,t]}function cE(t,e){t.action=e}function my(t){var e=Jt(),n=gt;if(n!==null)return mS(e,n,t);Jt(),e=e.memoizedState,n=Jt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Ro(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Ge.updateQueue,e===null&&(e=Xh(),Ge.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function gS(){return Jt().memoizedState}function eh(t,e,n,i){var s=On();Ge.flags|=t,s.memoizedState=Ro(1|e,{destroy:void 0},n,i===void 0?null:i)}function qh(t,e,n,i){var s=Jt();i=i===void 0?null:i;var a=s.memoizedState.inst;gt!==null&&i!==null&&vg(i,gt.memoizedState.deps)?s.memoizedState=Ro(e,a,n,i):(Ge.flags|=t,s.memoizedState=Ro(1|e,a,n,i))}function gy(t,e){eh(8390656,8,t,e)}function Ag(t,e){qh(2048,8,t,e)}function uE(t){Ge.flags|=4;var e=Ge.updateQueue;if(e===null)e=Xh(),Ge.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function _S(t){var e=Jt().memoizedState;return uE({ref:e,nextImpl:t}),function(){if((rt&2)!==0)throw Error(te(440));return e.impl.apply(void 0,arguments)}}function vS(t,e){return qh(4,2,t,e)}function yS(t,e){return qh(4,4,t,e)}function xS(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function SS(t,e,n){n=n!=null?n.concat([t]):null,qh(4,4,xS.bind(null,e,t),n)}function Eg(){}function MS(t,e){var n=Jt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&vg(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function bS(t,e){var n=Jt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&vg(e,i[1]))return i[0];if(i=t(),fr){ua(!0);try{t()}finally{ua(!1)}}return n.memoizedState=[i,e],i}function wg(t,e,n){return n===void 0||(Ns&1073741824)!==0&&(nt&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=hM(),Ge.lanes|=t,wa|=t,n)}function TS(t,e,n,i){return ri(n,e)?n:wo.current!==null?(t=wg(t,n,i),ri(t,e)||(rn=!0),t):(Ns&42)===0||(Ns&1073741824)!==0&&(nt&261930)===0?(rn=!0,t.memoizedState=n):(t=hM(),Ge.lanes|=t,wa|=t,e)}function AS(t,e,n,i,s){var a=ot.p;ot.p=a!==0&&8>a?a:8;var r=Be.T,o={};Be.T=o,Cg(t,!1,e,n);try{var l=s(),c=Be.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=aE(l,i);Zl(t,e,h,ai(t))}else Zl(t,e,i,ai(t))}catch(f){Zl(t,e,{then:function(){},status:"rejected",reason:f},ai())}finally{ot.p=a,r!==null&&o.types!==null&&(r.types=o.types),Be.T=r}}function hE(){}function Cm(t,e,n,i){if(t.tag!==5)throw Error(te(476));var s=ES(t).queue;AS(t,s,e,sr,n===null?hE:function(){return wS(t),n(i)})}function ES(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:sr,baseState:sr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ls,lastRenderedState:sr},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ls,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function wS(t){var e=ES(t);e.next===null&&(e=t.alternate.memoizedState),Zl(t,e.next.queue,{},ai())}function Rg(){return Sn(hc)}function RS(){return Jt().memoizedState}function CS(){return Jt().memoizedState}function fE(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ai();t=_a(n);var i=va(e,t,n);i!==null&&(kn(i,e,n),Wl(i,e,n)),e={cache:dg()},t.payload=e;return}e=e.return}}function dE(t,e,n){var i=ai();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Yh(t)?NS(e,n):(n=cg(t,e,n,i),n!==null&&(kn(n,t,i),LS(n,e,i)))}function DS(t,e,n){var i=ai();Zl(t,e,n,i)}function Zl(t,e,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yh(t))NS(e,s);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var r=e.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,ri(o,r))return Gh(t,e,s,0),xt===null&&Vh(),!1}catch{}if(n=cg(t,e,s,i),n!==null)return kn(n,t,i),LS(n,e,i),!0}return!1}function Cg(t,e,n,i){if(i={lane:2,revertLane:zg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Yh(t)){if(e)throw Error(te(479))}else e=cg(t,n,i,2),e!==null&&kn(e,t,2)}function Yh(t){var e=t.alternate;return t===Ge||e!==null&&e===Ge}function NS(t,e){So=xh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function LS(t,e,n){if((n&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_x(t,n)}}var lc={readContext:Sn,use:Wh,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt};lc.useEffectEvent=kt;var US={readContext:Sn,use:Wh,useCallback:function(t,e){return On().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:gy,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,eh(4194308,4,xS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return eh(4194308,4,t,e)},useInsertionEffect:function(t,e){eh(4,2,t,e)},useMemo:function(t,e){var n=On();e=e===void 0?null:e;var i=t();if(fr){ua(!0);try{t()}finally{ua(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=On();if(n!==void 0){var s=n(e);if(fr){ua(!0);try{n(e)}finally{ua(!1)}}}else s=e;return i.memoizedState=i.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},i.queue=t,t=t.dispatch=dE.bind(null,Ge,t),[i.memoizedState,t]},useRef:function(t){var e=On();return t={current:t},e.memoizedState=t},useState:function(t){t=wm(t);var e=t.queue,n=DS.bind(null,Ge,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Eg,useDeferredValue:function(t,e){var n=On();return wg(n,t,e)},useTransition:function(){var t=wm(!1);return t=AS.bind(null,Ge,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Ge,s=On();if(it){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),xt===null)throw Error(te(349));(nt&127)!==0||rS(i,e,n)}s.memoizedState=n;var a={value:n,getSnapshot:e};return s.queue=a,gy(lS.bind(null,i,a,t),[t]),i.flags|=2048,Ro(9,{destroy:void 0},oS.bind(null,i,a,n,e),null),n},useId:function(){var t=On(),e=xt.identifierPrefix;if(it){var n=ji,i=Ji;n=(i&~(1<<32-si(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Sh++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=rE++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Rg,useFormState:dy,useActionState:dy,useOptimistic:function(t){var e=On();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Cg.bind(null,Ge,!0,n),n.dispatch=e,[t,e]},useMemoCache:bg,useCacheRefresh:function(){return On().memoizedState=fE.bind(null,Ge)},useEffectEvent:function(t){var e=On(),n={impl:t};return e.memoizedState=n,function(){if((rt&2)!==0)throw Error(te(440));return n.impl.apply(void 0,arguments)}}},Dg={readContext:Sn,use:Wh,useCallback:MS,useContext:Sn,useEffect:Ag,useImperativeHandle:SS,useInsertionEffect:vS,useLayoutEffect:yS,useMemo:bS,useReducer:$u,useRef:gS,useState:function(){return $u(Ls)},useDebugValue:Eg,useDeferredValue:function(t,e){var n=Jt();return TS(n,gt.memoizedState,t,e)},useTransition:function(){var t=$u(Ls)[0],e=Jt().memoizedState;return[typeof t=="boolean"?t:Sc(t),e]},useSyncExternalStore:aS,useId:RS,useHostTransitionStatus:Rg,useFormState:py,useActionState:py,useOptimistic:function(t,e){var n=Jt();return hS(n,gt,t,e)},useMemoCache:bg,useCacheRefresh:CS};Dg.useEffectEvent=_S;var IS={readContext:Sn,use:Wh,useCallback:MS,useContext:Sn,useEffect:Ag,useImperativeHandle:SS,useInsertionEffect:vS,useLayoutEffect:yS,useMemo:bS,useReducer:Bp,useRef:gS,useState:function(){return Bp(Ls)},useDebugValue:Eg,useDeferredValue:function(t,e){var n=Jt();return gt===null?wg(n,t,e):TS(n,gt.memoizedState,t,e)},useTransition:function(){var t=Bp(Ls)[0],e=Jt().memoizedState;return[typeof t=="boolean"?t:Sc(t),e]},useSyncExternalStore:aS,useId:RS,useHostTransitionStatus:Rg,useFormState:my,useActionState:my,useOptimistic:function(t,e){var n=Jt();return gt!==null?hS(n,gt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:bg,useCacheRefresh:CS};IS.useEffectEvent=_S;function zp(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dm={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ai(),s=_a(i);s.payload=e,n!=null&&(s.callback=n),e=va(t,s,i),e!==null&&(kn(e,t,i),Wl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ai(),s=_a(i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=va(t,s,i),e!==null&&(kn(e,t,i),Wl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ai(),i=_a(n);i.tag=2,e!=null&&(i.callback=e),e=va(t,i,n),e!==null&&(kn(e,t,n),Wl(e,t,n))}};function _y(t,e,n,i,s,a,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,r):e.prototype&&e.prototype.isPureReactComponent?!ic(n,i)||!ic(s,a):!0}function vy(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Dm.enqueueReplaceState(e,e.state,null)}function dr(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=Nt({},n));for(var s in t)n[s]===void 0&&(n[s]=t[s])}return n}function OS(t){dh(t)}function PS(t){console.error(t)}function BS(t){dh(t)}function Mh(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function yy(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Nm(t,e,n){return n=_a(n),n.tag=3,n.payload={element:null},n.callback=function(){Mh(t,e)},n}function zS(t){return t=_a(t),t.tag=3,t}function FS(t,e,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;t.payload=function(){return s(a)},t.callback=function(){yy(e,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){yy(e,n,i),typeof s!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function pE(t,e,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Po(e,n,s,!0),n=oi.current,n!==null){switch(n.tag){case 31:case 13:return Ti===null?wh():n.alternate===null&&Xt===0&&(Xt=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===_h?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Kp(t,i,s)),!1;case 22:return n.flags|=65536,i===_h?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Kp(t,i,s)),!1}throw Error(te(435,n.tag))}return Kp(t,i,s),wh(),!1}if(it)return e=oi.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,i!==vm&&(t=Error(te(422),{cause:i}),ac(Mi(t,n)))):(i!==vm&&(e=Error(te(423),{cause:i}),ac(Mi(e,n))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,i=Mi(i,n),s=Nm(t.stateNode,i,s),Pp(t,s),Xt!==4&&(Xt=2)),!1;var a=Error(te(520),{cause:i});if(a=Mi(a,n),jl===null?jl=[a]:jl.push(a),Xt!==4&&(Xt=2),e===null)return!0;i=Mi(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=s&-s,n.lanes|=t,t=Nm(n.stateNode,i,t),Pp(n,t),!1;case 1:if(e=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ya===null||!ya.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=zS(s),FS(s,t,n,i),Pp(n,s),!1}n=n.return}while(n!==null);return!1}var Ng=Error(te(461)),rn=!1;function vn(t,e,n,i){e.child=t===null?$x(e,null,n,i):hr(e,t.child,n,i)}function xy(t,e,n,i,s){n=n.render;var a=e.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return ur(e),i=yg(t,e,n,r,a,s),o=xg(),t!==null&&!rn?(Sg(t,e,s),Us(t,e,s)):(it&&o&&hg(e),e.flags|=1,vn(t,e,i,s),e.child)}function Sy(t,e,n,i,s){if(t===null){var a=n.type;return typeof a=="function"&&!ug(a)&&a.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=a,HS(t,e,a,i,s)):(t=ju(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!Lg(t,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:ic,n(r,i)&&t.ref===e.ref)return Us(t,e,s)}return e.flags|=1,t=ws(a,i),t.ref=e.ref,t.return=e,e.child=t}function HS(t,e,n,i,s){if(t!==null){var a=t.memoizedProps;if(ic(a,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=a,Lg(t,s))(t.flags&131072)!==0&&(rn=!0);else return e.lanes=t.lanes,Us(t,e,s)}return Lm(t,e,n,i,s)}function VS(t,e,n,i){var s=i.children,a=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,t!==null){for(i=e.child=t.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,e.child=null;return My(t,e,a,n,i)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Qu(e,a!==null?a.cachePool:null),a!==null?uy(e,a):Am(),nS(e);else return i=e.lanes=536870912,My(t,e,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Qu(e,a.cachePool),uy(e,a),la(e),e.memoizedState=null):(t!==null&&Qu(e,null),Am(),la(e));return vn(t,e,s,n),e.child}function Fl(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function My(t,e,n,i,s){var a=pg();return a=a===null?null:{parent:an._currentValue,pool:a},e.memoizedState={baseLanes:n,cachePool:a},t!==null&&Qu(e,null),Am(),nS(e),t!==null&&Po(t,e,i,!0),e.childLanes=s,null}function th(t,e){return e=bh({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function by(t,e,n){return hr(e,t.child,null,n),t=th(e,e.pendingProps),t.flags|=2,$n(e),e.memoizedState=null,t}function mE(t,e,n){var i=e.pendingProps,s=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(it){if(i.mode==="hidden")return t=th(e,i),e.lanes=536870912,Fl(null,t);if(Em(e),(t=Dt)?(t=UM(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Ji,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},n=qx(t),n.return=e,e.child=n,xn=e,Dt=null)):t=null,t===null)throw Aa(e);return e.lanes=536870912,null}return th(e,i)}var a=t.memoizedState;if(a!==null){var r=a.dehydrated;if(Em(e),s)if(e.flags&256)e.flags&=-257,e=by(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(te(558));else if(rn||Po(t,e,n,!1),s=(n&t.childLanes)!==0,rn||s){if(i=xt,i!==null&&(r=vx(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,_r(t,r),kn(i,t,r),Ng;wh(),e=by(t,e,n)}else t=a.treeContext,Dt=Ai(r.nextSibling),xn=e,it=!0,ga=null,bi=!1,t!==null&&Zx(e,t),e=th(e,i),e.flags|=4096;return e}return t=ws(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function nh(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(te(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Lm(t,e,n,i,s){return ur(e),n=yg(t,e,n,i,void 0,s),i=xg(),t!==null&&!rn?(Sg(t,e,s),Us(t,e,s)):(it&&i&&hg(e),e.flags|=1,vn(t,e,n,s),e.child)}function Ty(t,e,n,i,s,a){return ur(e),e.updateQueue=null,n=sS(e,i,n,s),iS(t),i=xg(),t!==null&&!rn?(Sg(t,e,a),Us(t,e,a)):(it&&i&&hg(e),e.flags|=1,vn(t,e,n,a),e.child)}function Ay(t,e,n,i,s){if(ur(e),e.stateNode===null){var a=ho,r=n.contextType;typeof r=="object"&&r!==null&&(a=Sn(r)),a=new n(i,a),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Dm,e.stateNode=a,a._reactInternals=e,a=e.stateNode,a.props=i,a.state=e.memoizedState,a.refs={},gg(e),r=n.contextType,a.context=typeof r=="object"&&r!==null?Sn(r):ho,a.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(zp(e,n,r,i),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Dm.enqueueReplaceState(a,a.state,null),Yl(e,i,a,s),ql(),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){a=e.stateNode;var o=e.memoizedProps,l=dr(n,o);a.props=l;var c=a.context,h=n.contextType;r=ho,typeof h=="object"&&h!==null&&(r=Sn(h));var f=n.getDerivedStateFromProps;h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&vy(e,a,i,r),aa=!1;var u=e.memoizedState;a.state=u,Yl(e,i,a,s),ql(),c=e.memoizedState,o||u!==c||aa?(typeof f=="function"&&(zp(e,n,f,i),c=e.memoizedState),(l=aa||_y(e,n,l,i,u,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,bm(t,e),r=e.memoizedProps,h=dr(n,r),a.props=h,f=e.pendingProps,u=a.context,c=n.contextType,l=ho,typeof c=="object"&&c!==null&&(l=Sn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==f||u!==l)&&vy(e,a,i,l),aa=!1,u=e.memoizedState,a.state=u,Yl(e,i,a,s),ql();var d=e.memoizedState;r!==f||u!==d||aa||t!==null&&t.dependencies!==null&&gh(t.dependencies)?(typeof o=="function"&&(zp(e,n,o,i),d=e.memoizedState),(h=aa||_y(e,n,h,i,u,d,l)||t!==null&&t.dependencies!==null&&gh(t.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=d),a.props=i,a.state=d,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return a=i,nh(t,e),i=(e.flags&128)!==0,a||i?(a=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),e.flags|=1,t!==null&&i?(e.child=hr(e,t.child,null,s),e.child=hr(e,null,n,s)):vn(t,e,n,s),e.memoizedState=a.state,t=e.child):t=Us(t,e,s),t}function Ey(t,e,n,i){return cr(),e.flags|=256,vn(t,e,n,i),e.child}var Fp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hp(t){return{baseLanes:t,cachePool:Jx()}}function Vp(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=ti),t}function GS(t,e,n){var i=e.pendingProps,s=!1,a=(e.flags&128)!==0,r;if((r=a)||(r=t!==null&&t.memoizedState===null?!1:(Kt.current&2)!==0),r&&(s=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(it){if(s?oa(e):la(e),(t=Dt)?(t=UM(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Ji,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},n=qx(t),n.return=e,e.child=n,xn=e,Dt=null)):t=null,t===null)throw Aa(e);return qm(t)?e.lanes=32:e.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(la(e),s=e.mode,o=bh({mode:"hidden",children:o},s),i=ar(i,s,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,i=e.child,i.memoizedState=Hp(n),i.childLanes=Vp(t,r,n),e.memoizedState=Fp,Fl(null,i)):(oa(e),Um(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)e.flags&256?(oa(e),e.flags&=-257,e=Gp(t,e,n)):e.memoizedState!==null?(la(e),e.child=t.child,e.flags|=128,e=null):(la(e),o=i.fallback,s=e.mode,i=bh({mode:"visible",children:i.children},s),o=ar(o,s,n,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,hr(e,t.child,null,n),i=e.child,i.memoizedState=Hp(n),i.childLanes=Vp(t,r,n),e.memoizedState=Fp,e=Fl(null,i));else if(oa(e),qm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(te(419)),i.stack="",i.digest=r,ac({value:i,source:null,stack:null}),e=Gp(t,e,n)}else if(rn||Po(t,e,n,!1),r=(n&t.childLanes)!==0,rn||r){if(r=xt,r!==null&&(i=vx(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,_r(t,i),kn(r,t,i),Ng;Wm(o)||wh(),e=Gp(t,e,n)}else Wm(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Dt=Ai(o.nextSibling),xn=e,it=!0,ga=null,bi=!1,t!==null&&Zx(e,t),e=Um(e,i.children),e.flags|=4096);return e}return s?(la(e),o=i.fallback,s=e.mode,l=t.child,c=l.sibling,i=ws(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ws(c,o):(o=ar(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,Fl(null,i),i=e.child,o=t.child.memoizedState,o===null?o=Hp(n):(s=o.cachePool,s!==null?(l=an._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=Jx(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Vp(t,r,n),e.memoizedState=Fp,Fl(t.child,i)):(oa(e),n=t.child,t=n.sibling,n=ws(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function Um(t,e){return e=bh({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function bh(t,e){return t=ei(22,t,null,e),t.lanes=0,t}function Gp(t,e,n){return hr(e,t.child,null,n),t=Um(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wy(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xm(t.return,e,n)}function kp(t,e,n,i,s,a){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function kS(t,e,n){var i=e.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Kt.current,o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,Tt(Kt,r),vn(t,e,i,n),i=it?sc:0,!o&&t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wy(t,n,e);else if(t.tag===19)wy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&yh(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),kp(e,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&yh(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}kp(e,!0,n,null,a,i);break;case"together":kp(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function Us(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wa|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Po(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=ws(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ws(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Lg(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&gh(t)))}function gE(t,e,n){switch(e.tag){case 3:ch(e,e.stateNode.containerInfo),ra(e,an,t.memoizedState.cache),cr();break;case 27:case 5:om(e);break;case 4:ch(e,e.stateNode.containerInfo);break;case 10:ra(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Em(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(oa(e),e.flags|=128,null):(n&e.child.childLanes)!==0?GS(t,e,n):(oa(e),t=Us(t,e,n),t!==null?t.sibling:null);oa(e);break;case 19:var s=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Po(t,e,n,!1),i=(n&e.childLanes)!==0),s){if(i)return kS(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Tt(Kt,Kt.current),i)break;return null;case 22:return e.lanes=0,VS(t,e,n,e.pendingProps);case 24:ra(e,an,t.memoizedState.cache)}return Us(t,e,n)}function XS(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)rn=!0;else{if(!Lg(t,n)&&(e.flags&128)===0)return rn=!1,gE(t,e,n);rn=(t.flags&131072)!==0}else rn=!1,it&&(e.flags&1048576)!==0&&Yx(e,sc,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=nr(e.elementType),e.type=t,typeof t=="function")ug(t)?(i=dr(t,i),e.tag=1,e=Ay(null,e,t,i,n)):(e.tag=0,e=Lm(null,e,t,i,n));else{if(t!=null){var s=t.$$typeof;if(s===Jm){e.tag=11,e=xy(null,e,t,i,n);break e}else if(s===jm){e.tag=14,e=Sy(null,e,t,i,n);break e}}throw e=am(t)||t,Error(te(306,e,""))}}return e;case 0:return Lm(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,s=dr(i,e.pendingProps),Ay(t,e,i,s,n);case 3:e:{if(ch(e,e.stateNode.containerInfo),t===null)throw Error(te(387));i=e.pendingProps;var a=e.memoizedState;s=a.element,bm(t,e),Yl(e,i,null,n);var r=e.memoizedState;if(i=r.cache,ra(e,an,i),i!==a.cache&&Sm(e,[an],n,!0),ql(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){e=Ey(t,e,i,n);break e}else if(i!==s){s=Mi(Error(te(424)),e),ac(s),e=Ey(t,e,i,n);break e}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Dt=Ai(t.firstChild),xn=e,it=!0,ga=null,bi=!0,n=$x(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cr(),i===s){e=Us(t,e,n);break e}vn(t,e,i,n)}e=e.child}return e;case 26:return nh(t,e),t===null?(n=Ky(e.type,null,e.pendingProps,null))?e.memoizedState=n:it||(n=e.type,t=e.pendingProps,i=Nh(ma.current).createElement(n),i[yn]=e,i[Xn]=t,Mn(i,n,t),mn(i),e.stateNode=i):e.memoizedState=Ky(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return om(e),t===null&&it&&(i=e.stateNode=IM(e.type,e.pendingProps,ma.current),xn=e,bi=!0,s=Dt,Ca(e.type)?(Ym=s,Dt=Ai(i.firstChild)):Dt=s),vn(t,e,e.pendingProps.children,n),nh(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&it&&((s=i=Dt)&&(i=XE(i,e.type,e.pendingProps,bi),i!==null?(e.stateNode=i,xn=e,Dt=Ai(i.firstChild),bi=!1,s=!0):s=!1),s||Aa(e)),om(e),s=e.type,a=e.pendingProps,r=t!==null?t.memoizedProps:null,i=a.children,km(s,a)?i=null:r!==null&&km(s,r)&&(e.flags|=32),e.memoizedState!==null&&(s=yg(t,e,oE,null,null,n),hc._currentValue=s),nh(t,e),vn(t,e,i,n),e.child;case 6:return t===null&&it&&((t=n=Dt)&&(n=WE(n,e.pendingProps,bi),n!==null?(e.stateNode=n,xn=e,Dt=null,t=!0):t=!1),t||Aa(e)),null;case 13:return GS(t,e,n);case 4:return ch(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=hr(e,null,i,n):vn(t,e,i,n),e.child;case 11:return xy(t,e,e.type,e.pendingProps,n);case 7:return vn(t,e,e.pendingProps,n),e.child;case 8:return vn(t,e,e.pendingProps.children,n),e.child;case 12:return vn(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,ra(e,e.type,i.value),vn(t,e,i.children,n),e.child;case 9:return s=e.type._context,i=e.pendingProps.children,ur(e),s=Sn(s),i=i(s),e.flags|=1,vn(t,e,i,n),e.child;case 14:return Sy(t,e,e.type,e.pendingProps,n);case 15:return HS(t,e,e.type,e.pendingProps,n);case 19:return kS(t,e,n);case 31:return mE(t,e,n);case 22:return VS(t,e,n,e.pendingProps);case 24:return ur(e),i=Sn(an),t===null?(s=pg(),s===null&&(s=xt,a=dg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),e.memoizedState={parent:i,cache:s},gg(e),ra(e,an,s)):((t.lanes&n)!==0&&(bm(t,e),Yl(e,null,null,n),ql()),s=t.memoizedState,a=e.memoizedState,s.parent!==i?(s={parent:i,cache:i},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),ra(e,an,i)):(i=a.cache,ra(e,an,i),i!==s.cache&&Sm(e,[an],n,!0))),vn(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(te(156,e.tag))}function vs(t){t.flags|=4}function Xp(t,e,n,i,s){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(s&335544128)===s)if(t.stateNode.complete)t.flags|=8192;else if(pM())t.flags|=8192;else throw or=_h,mg}else t.flags&=-16777217}function Ry(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!BM(e))if(pM())t.flags|=8192;else throw or=_h,mg}function Hu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?mx():536870912,t.lanes|=e,Co|=e)}function Ll(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function _E(t,e,n){var i=e.pendingProps;switch(fg(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return Ct(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Rs(an),bo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&($r(e)?vs(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Op())),Ct(e),null;case 26:var s=e.type,a=e.memoizedState;return t===null?(vs(e),a!==null?(Ct(e),Ry(e,a)):(Ct(e),Xp(e,s,null,i,n))):a?a!==t.memoizedState?(vs(e),Ct(e),Ry(e,a)):(Ct(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&vs(e),Ct(e),Xp(e,s,t,i,n)),null;case 27:if(uh(e),n=ma.current,s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&vs(e);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ct(e),null}t=$i.current,$r(e)?iy(e,t):(t=IM(s,i,n),e.stateNode=t,vs(e))}return Ct(e),null;case 5:if(uh(e),s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&vs(e);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ct(e),null}if(a=$i.current,$r(e))iy(e,a);else{var r=Nh(ma.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[yn]=e,a[Xn]=i;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=a;e:switch(Mn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&vs(e)}}return Ct(e),Xp(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&vs(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=ma.current,$r(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,s=xn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}t[yn]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||DM(t.nodeValue,n)),t||Aa(e,!0)}else t=Nh(t).createTextNode(i),t[yn]=e,e.stateNode=t}return Ct(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=$r(e),n!==null){if(t===null){if(!i)throw Error(te(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(557));t[yn]=e}else cr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ct(e),t=!1}else n=Op(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?($n(e),e):($n(e),null);if((e.flags&128)!==0)throw Error(te(558))}return Ct(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=$r(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[yn]=e}else cr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ct(e),s=!1}else s=Op(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?($n(e),e):($n(e),null)}return $n(e),(e.flags&128)!==0?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Hu(e,e.updateQueue),Ct(e),null);case 4:return bo(),t===null&&Fg(e.stateNode.containerInfo),Ct(e),null;case 10:return Rs(e.type),Ct(e),null;case 19:if(gn(Kt),i=e.memoizedState,i===null)return Ct(e),null;if(s=(e.flags&128)!==0,a=i.rendering,a===null)if(s)Ll(i,!1);else{if(Xt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(a=yh(t),a!==null){for(e.flags|=128,Ll(i,!1),t=a.updateQueue,e.updateQueue=t,Hu(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Wx(n,t),n=n.sibling;return Tt(Kt,Kt.current&1|2),it&&Ms(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&ni()>Ah&&(e.flags|=128,s=!0,Ll(i,!1),e.lanes=4194304)}else{if(!s)if(t=yh(a),t!==null){if(e.flags|=128,s=!0,t=t.updateQueue,e.updateQueue=t,Hu(e,t),Ll(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!it)return Ct(e),null}else 2*ni()-i.renderingStartTime>Ah&&n!==536870912&&(e.flags|=128,s=!0,Ll(i,!1),e.lanes=4194304);i.isBackwards?(a.sibling=e.child,e.child=a):(t=i.last,t!==null?t.sibling=a:e.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ni(),t.sibling=null,n=Kt.current,Tt(Kt,s?n&1|2:n&1),it&&Ms(e,i.treeForkCount),t):(Ct(e),null);case 22:case 23:return $n(e),_g(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(n&536870912)!==0&&(e.flags&128)===0&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),n=e.updateQueue,n!==null&&Hu(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&gn(rr),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Rs(an),Ct(e),null;case 25:return null;case 30:return null}throw Error(te(156,e.tag))}function vE(t,e){switch(fg(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rs(an),bo(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return uh(e),null;case 31:if(e.memoizedState!==null){if($n(e),e.alternate===null)throw Error(te(340));cr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if($n(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));cr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gn(Kt),null;case 4:return bo(),null;case 10:return Rs(e.type),null;case 22:case 23:return $n(e),_g(),t!==null&&gn(rr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Rs(an),null;case 25:return null;default:return null}}function WS(t,e){switch(fg(e),e.tag){case 3:Rs(an),bo();break;case 26:case 27:case 5:uh(e);break;case 4:bo();break;case 31:e.memoizedState!==null&&$n(e);break;case 13:$n(e);break;case 19:gn(Kt);break;case 10:Rs(e.type);break;case 22:case 23:$n(e),_g(),t!==null&&gn(rr);break;case 24:Rs(an)}}function Mc(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&t)===t){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ht(e,e.return,o)}}function Ea(t,e,n){try{var i=e.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&t)===t){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=e;var l=n,c=o;try{c()}catch(h){ht(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){ht(e,e.return,h)}}function qS(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{tS(e,n)}catch(i){ht(t,t.return,i)}}}function YS(t,e,n){n.props=dr(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){ht(t,e,i)}}function Kl(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(s){ht(t,e,s)}}function Qi(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ht(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ht(t,e,s)}else n.current=null}function ZS(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ht(t,t.return,s)}}function Wp(t,e,n){try{var i=t.stateNode;zE(i,t.type,n,e),i[Xn]=e}catch(s){ht(t,t.return,s)}}function KS(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ca(t.type)||t.tag===4}function qp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||KS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ca(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Im(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=As));else if(i!==4&&(i===27&&Ca(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Im(t,e,n),t=t.sibling;t!==null;)Im(t,e,n),t=t.sibling}function Th(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Ca(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}function JS(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);Mn(e,i,n),e[yn]=t,e[Xn]=n}catch(a){ht(t,t.return,a)}}var bs=!1,sn=!1,Yp=!1,Cy=typeof WeakSet=="function"?WeakSet:Set,pn=null;function yE(t,e){if(t=t.containerInfo,Vm=Oh,t=Bx(t),og(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var r=0,o=-1,l=-1,c=0,h=0,f=t,u=null;t:for(;;){for(var d;f!==n||s!==0&&f.nodeType!==3||(o=r+s),f!==a||i!==0&&f.nodeType!==3||(l=r+i),f.nodeType===3&&(r+=f.nodeValue.length),(d=f.firstChild)!==null;)u=f,f=d;for(;;){if(f===t)break t;if(u===n&&++c===s&&(o=r),u===a&&++h===i&&(l=r),(d=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gm={focusedElem:t,selectionRange:n},Oh=!1,pn=e;pn!==null;)if(e=pn,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pn=t;else for(;pn!==null;){switch(e=pn,a=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)s=t[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&a!==null){t=void 0,n=e,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var g=dr(n.type,s);t=i.getSnapshotBeforeUpdate(g,a),i.__reactInternalSnapshotBeforeUpdate=t}catch(x){ht(n,n.return,x)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Xm(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Xm(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(te(163))}if(t=e.sibling,t!==null){t.return=e.return,pn=t;break}pn=e.return}}function jS(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:xs(t,n),i&4&&Mc(5,n);break;case 1:if(xs(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(r){ht(n,n.return,r)}else{var s=dr(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){ht(n,n.return,r)}}i&64&&qS(n),i&512&&Kl(n,n.return);break;case 3:if(xs(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{tS(t,e)}catch(r){ht(n,n.return,r)}}break;case 27:e===null&&i&4&&JS(n);case 26:case 5:xs(t,n),e===null&&i&4&&ZS(n),i&512&&Kl(n,n.return);break;case 12:xs(t,n);break;case 31:xs(t,n),i&4&&eM(t,n);break;case 13:xs(t,n),i&4&&tM(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=RE.bind(null,n),qE(t,n))));break;case 22:if(i=n.memoizedState!==null||bs,!i){e=e!==null&&e.memoizedState!==null||sn,s=bs;var a=sn;bs=i,(sn=e)&&!a?Ss(t,n,(n.subtreeFlags&8772)!==0):xs(t,n),bs=s,sn=a}break;case 30:break;default:xs(t,n)}}function QS(t){var e=t.alternate;e!==null&&(t.alternate=null,QS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&tg(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ot=null,Vn=!1;function ys(t,e,n){for(n=n.child;n!==null;)$S(t,e,n),n=n.sibling}function $S(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(mc,n)}catch{}switch(n.tag){case 26:sn||Qi(n,e),ys(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:sn||Qi(n,e);var i=Ot,s=Vn;Ca(n.type)&&(Ot=n.stateNode,Vn=!1),ys(t,e,n),$l(n.stateNode),Ot=i,Vn=s;break;case 5:sn||Qi(n,e);case 6:if(i=Ot,s=Vn,Ot=null,ys(t,e,n),Ot=i,Vn=s,Ot!==null)if(Vn)try{(Ot.nodeType===9?Ot.body:Ot.nodeName==="HTML"?Ot.ownerDocument.body:Ot).removeChild(n.stateNode)}catch(a){ht(n,e,a)}else try{Ot.removeChild(n.stateNode)}catch(a){ht(n,e,a)}break;case 18:Ot!==null&&(Vn?(t=Ot,Xy(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Uo(t)):Xy(Ot,n.stateNode));break;case 4:i=Ot,s=Vn,Ot=n.stateNode.containerInfo,Vn=!0,ys(t,e,n),Ot=i,Vn=s;break;case 0:case 11:case 14:case 15:Ea(2,n,e),sn||Ea(4,n,e),ys(t,e,n);break;case 1:sn||(Qi(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&YS(n,e,i)),ys(t,e,n);break;case 21:ys(t,e,n);break;case 22:sn=(i=sn)||n.memoizedState!==null,ys(t,e,n),sn=i;break;default:ys(t,e,n)}}function eM(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Uo(t)}catch(n){ht(e,e.return,n)}}}function tM(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Uo(t)}catch(n){ht(e,e.return,n)}}function xE(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Cy),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Cy),e;default:throw Error(te(435,t.tag))}}function Vu(t,e){var n=xE(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var s=CE.bind(null,t,i);i.then(s,s)}})}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=t,r=e,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(Ca(o.type)){Ot=o.stateNode,Vn=!1;break e}break;case 5:Ot=o.stateNode,Vn=!1;break e;case 3:case 4:Ot=o.stateNode.containerInfo,Vn=!0;break e}o=o.return}if(Ot===null)throw Error(te(160));$S(a,r,s),Ot=null,Vn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)nM(e,t),e=e.sibling}var Li=null;function nM(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Fn(e,t),Hn(t),i&4&&(Ea(3,t,t.return),Mc(3,t),Ea(5,t,t.return));break;case 1:Fn(e,t),Hn(t),i&512&&(sn||n===null||Qi(n,n.return)),i&64&&bs&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Li;if(Fn(e,t),Hn(t),i&512&&(sn||n===null||Qi(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[vc]||a[yn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),Mn(a,i,n),a[yn]=t,mn(a),i=a;break e;case"link":var r=jy("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break t}}a=s.createElement(i),Mn(a,i,n),s.head.appendChild(a);break;case"meta":if(r=jy("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break t}}a=s.createElement(i),Mn(a,i,n),s.head.appendChild(a);break;default:throw Error(te(468,i))}a[yn]=t,mn(a),i=a}t.stateNode=i}else Qy(s,t.type,t.stateNode);else t.stateNode=Jy(s,i,t.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?Qy(s,t.type,t.stateNode):Jy(s,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Wp(t,t.memoizedProps,n.memoizedProps)}break;case 27:Fn(e,t),Hn(t),i&512&&(sn||n===null||Qi(n,n.return)),n!==null&&i&4&&Wp(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Fn(e,t),Hn(t),i&512&&(sn||n===null||Qi(n,n.return)),t.flags&32){s=t.stateNode;try{Ao(s,"")}catch(g){ht(t,t.return,g)}}i&4&&t.stateNode!=null&&(s=t.memoizedProps,Wp(t,s,n!==null?n.memoizedProps:s)),i&1024&&(Yp=!0);break;case 6:if(Fn(e,t),Hn(t),i&4){if(t.stateNode===null)throw Error(te(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(g){ht(t,t.return,g)}}break;case 3:if(ah=null,s=Li,Li=Lh(e.containerInfo),Fn(e,t),Li=s,Hn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(g){ht(t,t.return,g)}Yp&&(Yp=!1,iM(t));break;case 4:i=Li,Li=Lh(t.stateNode.containerInfo),Fn(e,t),Hn(t),Li=i;break;case 12:Fn(e,t),Hn(t);break;case 31:Fn(e,t),Hn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Vu(t,i)));break;case 13:Fn(e,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zh=ni()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Vu(t,i)));break;case 22:s=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=bs,h=sn;if(bs=c||s,sn=h||l,Fn(e,t),sn=h,bs=c,Hn(t),i&8192)e:for(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(n===null||l||bs||sn||ir(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var f=l.memoizedProps.style,u=f!=null&&f.hasOwnProperty("display")?f.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(g){ht(l,l.return,g)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(g){ht(l,l.return,g)}}}else if(e.tag===18){if(n===null){l=e;try{var d=l.stateNode;s?Wy(d,!0):Wy(l.stateNode,!1)}catch(g){ht(l,l.return,g)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Vu(t,n))));break;case 19:Fn(e,t),Hn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Vu(t,i)));break;case 30:break;case 21:break;default:Fn(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(KS(i)){n=i;break}i=i.return}if(n==null)throw Error(te(160));switch(n.tag){case 27:var s=n.stateNode,a=qp(t);Th(t,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(Ao(r,""),n.flags&=-33);var o=qp(t);Th(t,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=qp(t);Im(t,c,l);break;default:throw Error(te(161))}}catch(h){ht(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iM(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;iM(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function xs(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)jS(t,e.alternate,e),e=e.sibling}function ir(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ea(4,e,e.return),ir(e);break;case 1:Qi(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&YS(e,e.return,n),ir(e);break;case 27:$l(e.stateNode);case 26:case 5:Qi(e,e.return),ir(e);break;case 22:e.memoizedState===null&&ir(e);break;case 30:ir(e);break;default:ir(e)}t=t.sibling}}function Ss(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,s=t,a=e,r=a.flags;switch(a.tag){case 0:case 11:case 15:Ss(s,a,n),Mc(4,a);break;case 1:if(Ss(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){ht(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)eS(l[s],o)}catch(c){ht(i,i.return,c)}}n&&r&64&&qS(a),Kl(a,a.return);break;case 27:JS(a);case 26:case 5:Ss(s,a,n),n&&i===null&&r&4&&ZS(a),Kl(a,a.return);break;case 12:Ss(s,a,n);break;case 31:Ss(s,a,n),n&&r&4&&eM(s,a);break;case 13:Ss(s,a,n),n&&r&4&&tM(s,a);break;case 22:a.memoizedState===null&&Ss(s,a,n),Kl(a,a.return);break;case 30:break;default:Ss(s,a,n)}e=e.sibling}}function Ug(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&xc(n))}function Ig(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&xc(t))}function Ni(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sM(t,e,n,i),e=e.sibling}function sM(t,e,n,i){var s=e.flags;switch(e.tag){case 0:case 11:case 15:Ni(t,e,n,i),s&2048&&Mc(9,e);break;case 1:Ni(t,e,n,i);break;case 3:Ni(t,e,n,i),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&xc(t)));break;case 12:if(s&2048){Ni(t,e,n,i),t=e.stateNode;try{var a=e.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){ht(e,e.return,l)}}else Ni(t,e,n,i);break;case 31:Ni(t,e,n,i);break;case 13:Ni(t,e,n,i);break;case 23:break;case 22:a=e.stateNode,r=e.alternate,e.memoizedState!==null?a._visibility&2?Ni(t,e,n,i):Jl(t,e):a._visibility&2?Ni(t,e,n,i):(a._visibility|=2,to(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),s&2048&&Ug(r,e);break;case 24:Ni(t,e,n,i),s&2048&&Ig(e.alternate,e);break;default:Ni(t,e,n,i)}}function to(t,e,n,i,s){for(s=s&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var a=t,r=e,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:to(a,r,o,l,s),Mc(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?to(a,r,o,l,s):Jl(a,r):(h._visibility|=2,to(a,r,o,l,s)),s&&c&2048&&Ug(r.alternate,r);break;case 24:to(a,r,o,l,s),s&&c&2048&&Ig(r.alternate,r);break;default:to(a,r,o,l,s)}e=e.sibling}}function Jl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,s=i.flags;switch(i.tag){case 22:Jl(n,i),s&2048&&Ug(i.alternate,i);break;case 24:Jl(n,i),s&2048&&Ig(i.alternate,i);break;default:Jl(n,i)}e=e.sibling}}var Hl=8192;function eo(t,e,n){if(t.subtreeFlags&Hl)for(t=t.child;t!==null;)aM(t,e,n),t=t.sibling}function aM(t,e,n){switch(t.tag){case 26:eo(t,e,n),t.flags&Hl&&t.memoizedState!==null&&sw(n,Li,t.memoizedState,t.memoizedProps);break;case 5:eo(t,e,n);break;case 3:case 4:var i=Li;Li=Lh(t.stateNode.containerInfo),eo(t,e,n),Li=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Hl,Hl=16777216,eo(t,e,n),Hl=i):eo(t,e,n));break;default:eo(t,e,n)}}function rM(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ul(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];pn=i,lM(i,t)}rM(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)oM(t),t=t.sibling}function oM(t){switch(t.tag){case 0:case 11:case 15:Ul(t),t.flags&2048&&Ea(9,t,t.return);break;case 3:Ul(t);break;case 12:Ul(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ih(t)):Ul(t);break;default:Ul(t)}}function ih(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];pn=i,lM(i,t)}rM(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ea(8,e,e.return),ih(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,ih(e));break;default:ih(e)}t=t.sibling}}function lM(t,e){for(;pn!==null;){var n=pn;switch(n.tag){case 0:case 11:case 15:Ea(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:xc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,pn=i;else e:for(n=t;pn!==null;){i=pn;var s=i.sibling,a=i.return;if(QS(i),i===n){pn=null;break e}if(s!==null){s.return=a,pn=s;break e}pn=a}}}var SE={getCacheForType:function(t){var e=Sn(an),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Sn(an).controller.signal}},ME=typeof WeakMap=="function"?WeakMap:Map,rt=0,xt=null,et=null,nt=0,ut=0,Qn=null,fa=!1,zo=!1,Og=!1,Is=0,Xt=0,wa=0,lr=0,Pg=0,ti=0,Co=0,jl=null,Gn=null,Om=!1,Zh=0,cM=0,Ah=1/0,Eh=null,ya=null,cn=0,xa=null,Do=null,Cs=0,Pm=0,Bm=null,uM=null,Ql=0,zm=null;function ai(){return(rt&2)!==0&&nt!==0?nt&-nt:Be.T!==null?zg():yx()}function hM(){if(ti===0)if((nt&536870912)===0||it){var t=Nu;Nu<<=1,(Nu&3932160)===0&&(Nu=262144),ti=t}else ti=536870912;return t=oi.current,t!==null&&(t.flags|=32),ti}function kn(t,e,n){(t===xt&&(ut===2||ut===9)||t.cancelPendingCommit!==null)&&(No(t,0),da(t,nt,ti,!1)),_c(t,n),((rt&2)===0||t!==xt)&&(t===xt&&((rt&2)===0&&(lr|=n),Xt===4&&da(t,nt,ti,!1)),ts(t))}function fM(t,e,n){if((rt&6)!==0)throw Error(te(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||gc(t,e),s=i?AE(t,e):Zp(t,e,!0),a=i;do{if(s===0){zo&&!i&&da(t,e,0,!1);break}else{if(n=t.current.alternate,a&&!bE(n)){s=Zp(t,e,!1),a=!1;continue}if(s===2){if(a=e,t.errorRecoveryDisabledLanes&a)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;s=jl;var l=o.current.memoizedState.isDehydrated;if(l&&(No(o,r).flags|=256),r=Zp(o,r,!1),r!==2){if(Og&&!l){o.errorRecoveryDisabledLanes|=a,lr|=a,s=4;break e}a=Gn,Gn=s,a!==null&&(Gn===null?Gn=a:Gn.push.apply(Gn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){No(t,0),da(t,e,0,!0);break}e:{switch(i=t,a=s,a){case 0:case 1:throw Error(te(345));case 4:if((e&4194048)!==e)break;case 6:da(i,e,ti,!fa);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(te(329))}if((e&62914560)===e&&(s=Zh+300-ni(),10<s)){if(da(i,e,ti,!fa),Bh(i,0,!0)!==0)break e;Cs=e,i.timeoutHandle=LM(Dy.bind(null,i,n,Gn,Eh,Om,e,ti,lr,Co,fa,a,"Throttled",-0,0),s);break e}Dy(i,n,Gn,Eh,Om,e,ti,lr,Co,fa,a,null,-0,0)}}break}while(!0);ts(t)}function Dy(t,e,n,i,s,a,r,o,l,c,h,f,u,d){if(t.timeoutHandle=-1,f=e.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:As},aM(e,a,f);var g=(a&62914560)===a?Zh-ni():(a&4194048)===a?cM-ni():0;if(g=aw(f,g),g!==null){Cs=a,t.cancelPendingCommit=g(Ly.bind(null,t,e,a,n,i,s,r,o,l,h,f,null,u,d)),da(t,a,r,!c);return}}Ly(t,e,a,n,i,s,r,o,l)}function bE(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!ri(a(),s))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function da(t,e,n,i){e&=~Pg,e&=~lr,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var s=e;0<s;){var a=31-si(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&gx(t,n,e)}function Kh(){return(rt&6)===0?(bc(0,!1),!1):!0}function Bg(){if(et!==null){if(ut===0)var t=et.return;else t=et,Es=vr=null,Mg(t),xo=null,rc=0,t=et;for(;t!==null;)WS(t.alternate,t),t=t.return;et=null}}function No(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,VE(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Cs=0,Bg(),xt=t,et=n=ws(t.current,null),nt=e,ut=0,Qn=null,fa=!1,zo=gc(t,e),Og=!1,Co=ti=Pg=lr=wa=Xt=0,Gn=jl=null,Om=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var s=31-si(i),a=1<<s;e|=t[s],i&=~a}return Is=e,Vh(),n}function dM(t,e){Ge=null,Be.H=lc,e===Bo||e===kh?(e=ly(),ut=3):e===mg?(e=ly(),ut=4):ut=e===Ng?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Qn=e,et===null&&(Xt=1,Mh(t,Mi(e,t.current)))}function pM(){var t=oi.current;return t===null?!0:(nt&4194048)===nt?Ti===null:(nt&62914560)===nt||(nt&536870912)!==0?t===Ti:!1}function mM(){var t=Be.H;return Be.H=lc,t===null?lc:t}function gM(){var t=Be.A;return Be.A=SE,t}function wh(){Xt=4,fa||(nt&4194048)!==nt&&oi.current!==null||(zo=!0),(wa&134217727)===0&&(lr&134217727)===0||xt===null||da(xt,nt,ti,!1)}function Zp(t,e,n){var i=rt;rt|=2;var s=mM(),a=gM();(xt!==t||nt!==e)&&(Eh=null,No(t,e)),e=!1;var r=Xt;e:do try{if(ut!==0&&et!==null){var o=et,l=Qn;switch(ut){case 8:Bg(),r=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(e=!0);var c=ut;if(ut=0,Qn=null,mo(t,o,l,c),n&&zo){r=0;break e}break;default:c=ut,ut=0,Qn=null,mo(t,o,l,c)}}TE(),r=Xt;break}catch(h){dM(t,h)}while(!0);return e&&t.shellSuspendCounter++,Es=vr=null,rt=i,Be.H=s,Be.A=a,et===null&&(xt=null,nt=0,Vh()),r}function TE(){for(;et!==null;)_M(et)}function AE(t,e){var n=rt;rt|=2;var i=mM(),s=gM();xt!==t||nt!==e?(Eh=null,Ah=ni()+500,No(t,e)):zo=gc(t,e);e:do try{if(ut!==0&&et!==null){e=et;var a=Qn;t:switch(ut){case 1:ut=0,Qn=null,mo(t,e,a,1);break;case 2:case 9:if(oy(a)){ut=0,Qn=null,Ny(e);break}e=function(){ut!==2&&ut!==9||xt!==t||(ut=7),ts(t)},a.then(e,e);break e;case 3:ut=7;break e;case 4:ut=5;break e;case 7:oy(a)?(ut=0,Qn=null,Ny(e)):(ut=0,Qn=null,mo(t,e,a,7));break;case 5:var r=null;switch(et.tag){case 26:r=et.memoizedState;case 5:case 27:var o=et;if(r?BM(r):o.stateNode.complete){ut=0,Qn=null;var l=o.sibling;if(l!==null)et=l;else{var c=o.return;c!==null?(et=c,Jh(c)):et=null}break t}}ut=0,Qn=null,mo(t,e,a,5);break;case 6:ut=0,Qn=null,mo(t,e,a,6);break;case 8:Bg(),Xt=6;break e;default:throw Error(te(462))}}EE();break}catch(h){dM(t,h)}while(!0);return Es=vr=null,Be.H=i,Be.A=s,rt=n,et!==null?0:(xt=null,nt=0,Vh(),Xt)}function EE(){for(;et!==null&&!KT();)_M(et)}function _M(t){var e=XS(t.alternate,t,Is);t.memoizedProps=t.pendingProps,e===null?Jh(t):et=e}function Ny(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Ty(n,e,e.pendingProps,e.type,void 0,nt);break;case 11:e=Ty(n,e,e.pendingProps,e.type.render,e.ref,nt);break;case 5:Mg(e);default:WS(n,e),e=et=Wx(e,Is),e=XS(n,e,Is)}t.memoizedProps=t.pendingProps,e===null?Jh(t):et=e}function mo(t,e,n,i){Es=vr=null,Mg(e),xo=null,rc=0;var s=e.return;try{if(pE(t,s,e,n,nt)){Xt=1,Mh(t,Mi(n,t.current)),et=null;return}}catch(a){if(s!==null)throw et=s,a;Xt=1,Mh(t,Mi(n,t.current)),et=null;return}e.flags&32768?(it||i===1?t=!0:zo||(nt&536870912)!==0?t=!1:(fa=t=!0,(i===2||i===9||i===3||i===6)&&(i=oi.current,i!==null&&i.tag===13&&(i.flags|=16384))),vM(e,t)):Jh(e)}function Jh(t){var e=t;do{if((e.flags&32768)!==0){vM(e,fa);return}t=e.return;var n=_E(e.alternate,e,Is);if(n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);Xt===0&&(Xt=5)}function vM(t,e){do{var n=vE(t.alternate,t);if(n!==null){n.flags&=32767,et=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){et=t;return}et=t=n}while(t!==null);Xt=6,et=null}function Ly(t,e,n,i,s,a,r,o,l){t.cancelPendingCommit=null;do jh();while(cn!==0);if((rt&6)!==0)throw Error(te(327));if(e!==null){if(e===t.current)throw Error(te(177));if(a=e.lanes|e.childLanes,a|=lg,aA(t,n,a,r,o,l),t===xt&&(et=xt=null,nt=0),Do=e,xa=t,Cs=n,Pm=a,Bm=s,uM=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,DE(hh,function(){return bM(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=Be.T,Be.T=null,s=ot.p,ot.p=2,r=rt,rt|=4;try{yE(t,e,n)}finally{rt=r,ot.p=s,Be.T=i}}cn=1,yM(),xM(),SM()}}function yM(){if(cn===1){cn=0;var t=xa,e=Do,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=Be.T,Be.T=null;var i=ot.p;ot.p=2;var s=rt;rt|=4;try{nM(e,t);var a=Gm,r=Bx(t.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&Px(o.ownerDocument.documentElement,o)){if(l!==null&&og(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var f=o.ownerDocument||document,u=f&&f.defaultView||window;if(u.getSelection){var d=u.getSelection(),g=o.textContent.length,x=Math.min(l.start,g),m=l.end===void 0?x:Math.min(l.end,g);!d.extend&&x>m&&(r=m,m=x,x=r);var p=ey(o,x),_=ey(o,m);if(p&&_&&(d.rangeCount!==1||d.anchorNode!==p.node||d.anchorOffset!==p.offset||d.focusNode!==_.node||d.focusOffset!==_.offset)){var M=f.createRange();M.setStart(p.node,p.offset),d.removeAllRanges(),x>m?(d.addRange(M),d.extend(_.node,_.offset)):(M.setEnd(_.node,_.offset),d.addRange(M))}}}}for(f=[],d=o;d=d.parentNode;)d.nodeType===1&&f.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<f.length;o++){var v=f[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Oh=!!Vm,Gm=Vm=null}finally{rt=s,ot.p=i,Be.T=n}}t.current=e,cn=2}}function xM(){if(cn===2){cn=0;var t=xa,e=Do,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=Be.T,Be.T=null;var i=ot.p;ot.p=2;var s=rt;rt|=4;try{jS(t,e.alternate,e)}finally{rt=s,ot.p=i,Be.T=n}}cn=3}}function SM(){if(cn===4||cn===3){cn=0,JT();var t=xa,e=Do,n=Cs,i=uM;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?cn=5:(cn=0,Do=xa=null,MM(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&(ya=null),eg(n),e=e.stateNode,ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(mc,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=Be.T,s=ot.p,ot.p=2,Be.T=null;try{for(var a=t.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Be.T=e,ot.p=s}}(Cs&3)!==0&&jh(),ts(t),s=t.pendingLanes,(n&261930)!==0&&(s&42)!==0?t===zm?Ql++:(Ql=0,zm=t):Ql=0,bc(0,!1)}}function MM(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,xc(e)))}function jh(){return yM(),xM(),SM(),bM()}function bM(){if(cn!==5)return!1;var t=xa,e=Pm;Pm=0;var n=eg(Cs),i=Be.T,s=ot.p;try{ot.p=32>n?32:n,Be.T=null,n=Bm,Bm=null;var a=xa,r=Cs;if(cn=0,Do=xa=null,Cs=0,(rt&6)!==0)throw Error(te(331));var o=rt;if(rt|=4,oM(a.current),sM(a,a.current,r,n),rt=o,bc(0,!1),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(mc,a)}catch{}return!0}finally{ot.p=s,Be.T=i,MM(t,e)}}function Uy(t,e,n){e=Mi(n,e),e=Nm(t.stateNode,e,2),t=va(t,e,2),t!==null&&(_c(t,2),ts(t))}function ht(t,e,n){if(t.tag===3)Uy(t,t,n);else for(;e!==null;){if(e.tag===3){Uy(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ya===null||!ya.has(i))){t=Mi(n,t),n=zS(2),i=va(e,n,2),i!==null&&(FS(n,i,e,t),_c(i,2),ts(i));break}}e=e.return}}function Kp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ME;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(Og=!0,s.add(n),t=wE.bind(null,t,e,n),e.then(t,t))}function wE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,xt===t&&(nt&n)===n&&(Xt===4||Xt===3&&(nt&62914560)===nt&&300>ni()-Zh?(rt&2)===0&&No(t,0):Pg|=n,Co===nt&&(Co=0)),ts(t)}function TM(t,e){e===0&&(e=mx()),t=_r(t,e),t!==null&&(_c(t,e),ts(t))}function RE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),TM(t,n)}function CE(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(te(314))}i!==null&&i.delete(e),TM(t,n)}function DE(t,e){return Qm(t,e)}var Rh=null,no=null,Fm=!1,Ch=!1,Jp=!1,pa=0;function ts(t){t!==no&&t.next===null&&(no===null?Rh=no=t:no=no.next=t),Ch=!0,Fm||(Fm=!0,LE())}function bc(t,e){if(!Jp&&Ch){Jp=!0;do for(var n=!1,i=Rh;i!==null;){if(!e)if(t!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-si(42|t)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Iy(i,a))}else a=nt,a=Bh(i,i===xt?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||gc(i,a)||(n=!0,Iy(i,a));i=i.next}while(n);Jp=!1}}function NE(){AM()}function AM(){Ch=Fm=!1;var t=0;pa!==0&&HE()&&(t=pa);for(var e=ni(),n=null,i=Rh;i!==null;){var s=i.next,a=EM(i,e);a===0?(i.next=null,n===null?Rh=s:n.next=s,s===null&&(no=n)):(n=i,(t!==0||(a&3)!==0)&&(Ch=!0)),i=s}cn!==0&&cn!==5||bc(t,!1),pa!==0&&(pa=0)}function EM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,a=t.pendingLanes&-62914561;0<a;){var r=31-si(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=sA(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}if(e=xt,n=nt,n=Bh(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(ut===2||ut===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Ap(i),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||gc(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Ap(i),eg(n)){case 2:case 8:n=dx;break;case 32:n=hh;break;case 268435456:n=px;break;default:n=hh}return i=wM.bind(null,t),n=Qm(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Ap(i),t.callbackPriority=2,t.callbackNode=null,2}function wM(t,e){if(cn!==0&&cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(jh()&&t.callbackNode!==n)return null;var i=nt;return i=Bh(t,t===xt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(fM(t,i,e),EM(t,ni()),t.callbackNode!=null&&t.callbackNode===n?wM.bind(null,t):null)}function Iy(t,e){if(jh())return null;fM(t,e,!0)}function LE(){GE(function(){(rt&6)!==0?Qm(fx,NE):AM()})}function zg(){if(pa===0){var t=Eo;t===0&&(t=Du,Du<<=1,(Du&261888)===0&&(Du=256)),pa=t}return pa}function Oy(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Zu(""+t)}function Py(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function UE(t,e,n,i,s){if(e==="submit"&&n&&n.stateNode===s){var a=Oy((s[Xn]||null).action),r=i.submitter;r&&(e=(e=r[Xn]||null)?Oy(e.formAction):r.getAttribute("formAction"),e!==null&&(a=e,r=null));var o=new zh("action","action",null,i,s);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(pa!==0){var l=r?Py(s,r):new FormData(s);Cm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?Py(s,r):new FormData(s),Cm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Gu=0;Gu<_m.length;Gu++)ku=_m[Gu],By=ku.toLowerCase(),zy=ku[0].toUpperCase()+ku.slice(1),Ui(By,"on"+zy);var ku,By,zy,Gu;Ui(Fx,"onAnimationEnd");Ui(Hx,"onAnimationIteration");Ui(Vx,"onAnimationStart");Ui("dblclick","onDoubleClick");Ui("focusin","onFocus");Ui("focusout","onBlur");Ui(jA,"onTransitionRun");Ui(QA,"onTransitionStart");Ui($A,"onTransitionCancel");Ui(Gx,"onTransitionEnd");To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cc));function RM(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break e;a=o,s.currentTarget=c;try{a(s)}catch(h){dh(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break e;a=o,s.currentTarget=c;try{a(s)}catch(h){dh(h)}s.currentTarget=null,a=l}}}}function $e(t,e){var n=e[cm];n===void 0&&(n=e[cm]=new Set);var i=t+"__bubble";n.has(i)||(CM(e,t,2,!1),n.add(i))}function jp(t,e,n){var i=0;e&&(i|=4),CM(n,t,i,e)}var Xu="_reactListening"+Math.random().toString(36).slice(2);function Fg(t){if(!t[Xu]){t[Xu]=!0,xx.forEach(function(n){n!=="selectionchange"&&(IE.has(n)||jp(n,!1,t),jp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xu]||(e[Xu]=!0,jp("selectionchange",!1,e))}}function CM(t,e,n,i){switch(GM(e)){case 2:var s=lw;break;case 8:s=cw;break;default:s=kg}n=s.bind(null,e,n,t),s=void 0,!pm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Qp(t,e,n,i,s){var a=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=ao(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue e}o=o.parentNode}}i=i.return}Rx(function(){var c=a,h=ig(n),f=[];e:{var u=kx.get(t);if(u!==void 0){var d=zh,g=t;switch(t){case"keypress":if(Ju(n)===0)break e;case"keydown":case"keyup":d=CA;break;case"focusin":g="focus",d=Dp;break;case"focusout":g="blur",d=Dp;break;case"beforeblur":case"afterblur":d=Dp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Wv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=_A;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=LA;break;case Fx:case Hx:case Vx:d=xA;break;case Gx:d=IA;break;case"scroll":case"scrollend":d=mA;break;case"wheel":d=PA;break;case"copy":case"cut":case"paste":d=MA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Yv;break;case"toggle":case"beforetoggle":d=zA}var x=(e&4)!==0,m=!x&&(t==="scroll"||t==="scrollend"),p=x?u!==null?u+"Capture":null:u;x=[];for(var _=c,M;_!==null;){var v=_;if(M=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||M===null||p===null||(v=tc(_,p),v!=null&&x.push(uc(_,v,M))),m)break;_=_.return}0<x.length&&(u=new d(u,g,null,n,h),f.push({event:u,listeners:x}))}}if((e&7)===0){e:{if(u=t==="mouseover"||t==="pointerover",d=t==="mouseout"||t==="pointerout",u&&n!==dm&&(g=n.relatedTarget||n.fromElement)&&(ao(g)||g[Io]))break e;if((d||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,d?(g=n.relatedTarget||n.toElement,d=c,g=g?ao(g):null,g!==null&&(m=pc(g),x=g.tag,g!==m||x!==5&&x!==27&&x!==6)&&(g=null)):(d=null,g=c),d!==g)){if(x=Wv,v="onMouseLeave",p="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Yv,v="onPointerLeave",p="onPointerEnter",_="pointer"),m=d==null?u:zl(d),M=g==null?u:zl(g),u=new x(v,_+"leave",d,n,h),u.target=m,u.relatedTarget=M,v=null,ao(h)===c&&(x=new x(p,_+"enter",g,n,h),x.target=M,x.relatedTarget=m,v=x),m=v,d&&g)t:{for(x=OE,p=d,_=g,M=0,v=p;v;v=x(v))M++;v=0;for(var A=_;A;A=x(A))v++;for(;0<M-v;)p=x(p),M--;for(;0<v-M;)_=x(_),v--;for(;M--;){if(p===_||_!==null&&p===_.alternate){x=p;break t}p=x(p),_=x(_)}x=null}else x=null;d!==null&&Fy(f,u,d,x,!1),g!==null&&m!==null&&Fy(f,m,g,x,!0)}}e:{if(u=c?zl(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var T=jv;else if(Jv(u))if(Ix)T=ZA;else{T=qA;var w=WA}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&ng(c.elementType)&&(T=jv):T=YA;if(T&&(T=T(t,c))){Ux(f,T,n,h);break e}w&&w(t,u,c),t==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&fm(u,"number",u.value)}switch(w=c?zl(c):window,t){case"focusin":(Jv(w)||w.contentEditable==="true")&&(lo=w,mm=c,kl=null);break;case"focusout":kl=mm=lo=null;break;case"mousedown":gm=!0;break;case"contextmenu":case"mouseup":case"dragend":gm=!1,ty(f,n,h);break;case"selectionchange":if(JA)break;case"keydown":case"keyup":ty(f,n,h)}var y;if(rg)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else oo?Nx(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Dx&&n.locale!=="ko"&&(oo||E!=="onCompositionStart"?E==="onCompositionEnd"&&oo&&(y=Cx()):(ha=h,sg="value"in ha?ha.value:ha.textContent,oo=!0)),w=Dh(c,E),0<w.length&&(E=new qv(E,t,null,n,h),f.push({event:E,listeners:w}),y?E.data=y:(y=Lx(n),y!==null&&(E.data=y)))),(y=HA?VA(t,n):GA(t,n))&&(E=Dh(c,"onBeforeInput"),0<E.length&&(w=new qv("onBeforeInput","beforeinput",null,n,h),f.push({event:w,listeners:E}),w.data=y)),UE(f,t,c,n,h)}RM(f,e)})}function uc(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Dh(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=tc(t,n),s!=null&&i.unshift(uc(t,s,a)),s=tc(t,e),s!=null&&i.push(uc(t,s,a))),t.tag===3)return i;t=t.return}return[]}function OE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Fy(t,e,n,i,s){for(var a=e._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=tc(n,a),c!=null&&r.unshift(uc(n,c,l))):s||(c=tc(n,a),c!=null&&r.push(uc(n,c,l)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var PE=/\r\n?/g,BE=/\u0000|\uFFFD/g;function Hy(t){return(typeof t=="string"?t:""+t).replace(PE,`
`).replace(BE,"")}function DM(t,e){return e=Hy(e),Hy(t)===e}function mt(t,e,n,i,s,a){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Ao(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Ao(t,""+i);break;case"className":Uu(t,"class",i);break;case"tabIndex":Uu(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Uu(t,n,i);break;case"style":wx(t,i,a);break;case"data":if(e!=="object"){Uu(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Zu(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(e!=="input"&&mt(t,e,"name",s.name,s,null),mt(t,e,"formEncType",s.formEncType,s,null),mt(t,e,"formMethod",s.formMethod,s,null),mt(t,e,"formTarget",s.formTarget,s,null)):(mt(t,e,"encType",s.encType,s,null),mt(t,e,"method",s.method,s,null),mt(t,e,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Zu(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=As);break;case"onScroll":i!=null&&$e("scroll",t);break;case"onScrollEnd":i!=null&&$e("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(te(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(te(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Zu(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":$e("beforetoggle",t),$e("toggle",t),Yu(t,"popover",i);break;case"xlinkActuate":_s(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":_s(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":_s(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":_s(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":_s(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":_s(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":_s(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":_s(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":_s(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Yu(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=dA.get(n)||n,Yu(t,n,i))}}function Hm(t,e,n,i,s,a){switch(n){case"style":wx(t,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(te(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(te(60));t.innerHTML=n}}break;case"children":typeof i=="string"?Ao(t,i):(typeof i=="number"||typeof i=="bigint")&&Ao(t,""+i);break;case"onScroll":i!=null&&$e("scroll",t);break;case"onScrollEnd":i!=null&&$e("scrollend",t);break;case"onClick":i!=null&&(t.onclick=As);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sx.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),e=n.slice(2,s?n.length-7:void 0),a=t[Xn]||null,a=a!=null?a[n]:null,typeof a=="function"&&t.removeEventListener(e,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,s);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):Yu(t,n,i)}}}function Mn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$e("error",t),$e("load",t);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(te(137,e));default:mt(t,e,a,r,n,null)}}s&&mt(t,e,"srcSet",n.srcSet,n,null),i&&mt(t,e,"src",n.src,n,null);return;case"input":$e("invalid",t);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(te(137,e));break;default:mt(t,e,i,h,n,null)}}Tx(t,a,o,l,c,r,s,!1);return;case"select":$e("invalid",t),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:mt(t,e,s,o,n,null)}e=a,n=r,t.multiple=!!i,e!=null?_o(t,!!i,e,!1):n!=null&&_o(t,!!i,n,!0);return;case"textarea":$e("invalid",t),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(te(91));break;default:mt(t,e,r,o,n,null)}Ex(t,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?t.selected=i&&typeof i!="function"&&typeof i!="symbol":mt(t,e,l,i,n,null));return;case"dialog":$e("beforetoggle",t),$e("toggle",t),$e("cancel",t),$e("close",t);break;case"iframe":case"object":$e("load",t);break;case"video":case"audio":for(i=0;i<cc.length;i++)$e(cc[i],t);break;case"image":$e("error",t),$e("load",t);break;case"details":$e("toggle",t);break;case"embed":case"source":case"link":$e("error",t),$e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(te(137,e));default:mt(t,e,c,i,n,null)}return;default:if(ng(e)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Hm(t,e,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&mt(t,e,o,i,n,null))}function zE(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(d in n){var f=n[d];if(n.hasOwnProperty(d)&&f!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=f;default:i.hasOwnProperty(d)||mt(t,e,d,null,i,f)}}for(var u in i){var d=i[u];if(f=n[u],i.hasOwnProperty(u)&&(d!=null||f!=null))switch(u){case"type":a=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":h=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(te(137,e));break;default:d!==f&&mt(t,e,u,d,i,f)}}hm(t,r,o,l,c,h,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||mt(t,e,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":u=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&mt(t,e,s,a,i,l)}e=o,n=r,i=d,u!=null?_o(t,!!n,u,!1):!!i!=!!n&&(e!=null?_o(t,!!n,e,!0):_o(t,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:mt(t,e,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":u=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(te(91));break;default:s!==a&&mt(t,e,r,s,i,a)}Ax(t,u,d);return;case"option":for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!=null&&!i.hasOwnProperty(g)&&(g==="selected"?t.selected=!1:mt(t,e,g,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?t.selected=u&&typeof u!="function"&&typeof u!="symbol":mt(t,e,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)u=n[x],n.hasOwnProperty(x)&&u!=null&&!i.hasOwnProperty(x)&&mt(t,e,x,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(te(137,e));break;default:mt(t,e,c,u,i,d)}return;default:if(ng(e)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&Hm(t,e,m,void 0,i,u);for(h in i)u=i[h],d=n[h],!i.hasOwnProperty(h)||u===d||u===void 0&&d===void 0||Hm(t,e,h,u,i,d);return}}for(var p in n)u=n[p],n.hasOwnProperty(p)&&u!=null&&!i.hasOwnProperty(p)&&mt(t,e,p,null,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u==null&&d==null||mt(t,e,f,u,i,d)}function Vy(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function FE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Vy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,f=l.initiatorType;h&&Vy(f)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,e+=8*(a+r)/(s.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vm=null,Gm=null;function Nh(t){return t.nodeType===9?t:t.ownerDocument}function Gy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function NM(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function km(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $p=null;function HE(){var t=window.event;return t&&t.type==="popstate"?t===$p?!1:($p=t,!0):($p=null,!1)}var LM=typeof setTimeout=="function"?setTimeout:void 0,VE=typeof clearTimeout=="function"?clearTimeout:void 0,ky=typeof Promise=="function"?Promise:void 0,GE=typeof queueMicrotask=="function"?queueMicrotask:typeof ky<"u"?function(t){return ky.resolve(null).then(t).catch(kE)}:LM;function kE(t){setTimeout(function(){throw t})}function Ca(t){return t==="head"}function Xy(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(s),Uo(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")$l(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,$l(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[vc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&$l(t.ownerDocument.body);n=s}while(n);Uo(e)}function Wy(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Xm(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Xm(n),tg(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function XE(t,e,n,i){for(;t.nodeType===1;){var s=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[vc])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(a=t.getAttribute("rel"),a==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(a!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(a=t.getAttribute("src"),(a!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===a)return t}else return t;if(t=Ai(t.nextSibling),t===null)break}return null}function WE(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ai(t.nextSibling),t===null))return null;return t}function UM(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ai(t.nextSibling),t===null))return null;return t}function Wm(t){return t.data==="$?"||t.data==="$~"}function qm(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function qE(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Ai(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Ym=null;function qy(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Ai(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Yy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function IM(t,e,n){switch(e=Nh(n),t){case"html":if(t=e.documentElement,!t)throw Error(te(452));return t;case"head":if(t=e.head,!t)throw Error(te(453));return t;case"body":if(t=e.body,!t)throw Error(te(454));return t;default:throw Error(te(451))}}function $l(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);tg(t)}var Ei=new Map,Zy=new Set;function Lh(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Os=ot.d;ot.d={f:YE,r:ZE,D:KE,C:JE,L:jE,m:QE,X:ew,S:$E,M:tw};function YE(){var t=Os.f(),e=Kh();return t||e}function ZE(t){var e=Oo(t);e!==null&&e.tag===5&&e.type==="form"?wS(e):Os.r(t)}var Fo=typeof document>"u"?null:document;function OM(t,e,n){var i=Fo;if(i&&typeof e=="string"&&e){var s=Si(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Zy.has(s)||(Zy.add(s),t={rel:t,crossOrigin:n,href:e},i.querySelector(s)===null&&(e=i.createElement("link"),Mn(e,"link",t),mn(e),i.head.appendChild(e)))}}function KE(t){Os.D(t),OM("dns-prefetch",t,null)}function JE(t,e){Os.C(t,e),OM("preconnect",t,e)}function jE(t,e,n){Os.L(t,e,n);var i=Fo;if(i&&t&&e){var s='link[rel="preload"][as="'+Si(e)+'"]';e==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Si(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Si(n.imageSizes)+'"]')):s+='[href="'+Si(t)+'"]';var a=s;switch(e){case"style":a=Lo(t);break;case"script":a=Ho(t)}Ei.has(a)||(t=Nt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ei.set(a,t),i.querySelector(s)!==null||e==="style"&&i.querySelector(Tc(a))||e==="script"&&i.querySelector(Ac(a))||(e=i.createElement("link"),Mn(e,"link",t),mn(e),i.head.appendChild(e)))}}function QE(t,e){Os.m(t,e);var n=Fo;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+Si(i)+'"][href="'+Si(t)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Ho(t)}if(!Ei.has(a)&&(t=Nt({rel:"modulepreload",href:t},e),Ei.set(a,t),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ac(a)))return}i=n.createElement("link"),Mn(i,"link",t),mn(i),n.head.appendChild(i)}}}function $E(t,e,n){Os.S(t,e,n);var i=Fo;if(i&&t){var s=go(i).hoistableStyles,a=Lo(t);e=e||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Tc(a)))o.loading=5;else{t=Nt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ei.get(a))&&Hg(t,n);var l=r=i.createElement("link");mn(l),Mn(l,"link",t),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,sh(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function ew(t,e){Os.X(t,e);var n=Fo;if(n&&t){var i=go(n).hoistableScripts,s=Ho(t),a=i.get(s);a||(a=n.querySelector(Ac(s)),a||(t=Nt({src:t,async:!0},e),(e=Ei.get(s))&&Vg(t,e),a=n.createElement("script"),mn(a),Mn(a,"link",t),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function tw(t,e){Os.M(t,e);var n=Fo;if(n&&t){var i=go(n).hoistableScripts,s=Ho(t),a=i.get(s);a||(a=n.querySelector(Ac(s)),a||(t=Nt({src:t,async:!0,type:"module"},e),(e=Ei.get(s))&&Vg(t,e),a=n.createElement("script"),mn(a),Mn(a,"link",t),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Ky(t,e,n,i){var s=(s=ma.current)?Lh(s):null;if(!s)throw Error(te(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Lo(n.href),n=go(s).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Lo(n.href);var a=go(s).hoistableStyles,r=a.get(t);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(t,r),(a=s.querySelector(Tc(t)))&&!a._p&&(r.instance=a,r.state.loading=5),Ei.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ei.set(t,n),a||nw(s,t,n,r.state))),e&&i===null)throw Error(te(528,""));return r}if(e&&i!==null)throw Error(te(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ho(n),n=go(s).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(te(444,t))}}function Lo(t){return'href="'+Si(t)+'"'}function Tc(t){return'link[rel="stylesheet"]['+t+"]"}function PM(t){return Nt({},t,{"data-precedence":t.precedence,precedence:null})}function nw(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),Mn(e,"link",n),mn(e),t.head.appendChild(e))}function Ho(t){return'[src="'+Si(t)+'"]'}function Ac(t){return"script[async]"+t}function Jy(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Si(n.href)+'"]');if(i)return e.instance=i,mn(i),i;var s=Nt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),mn(i),Mn(i,"style",s),sh(i,n.precedence,t),e.instance=i;case"stylesheet":s=Lo(n.href);var a=t.querySelector(Tc(s));if(a)return e.state.loading|=4,e.instance=a,mn(a),a;i=PM(n),(s=Ei.get(s))&&Hg(i,s),a=(t.ownerDocument||t).createElement("link"),mn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Mn(a,"link",i),e.state.loading|=4,sh(a,n.precedence,t),e.instance=a;case"script":return a=Ho(n.src),(s=t.querySelector(Ac(a)))?(e.instance=s,mn(s),s):(i=n,(s=Ei.get(a))&&(i=Nt({},n),Vg(i,s)),t=t.ownerDocument||t,s=t.createElement("script"),mn(s),Mn(s,"link",i),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(te(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,sh(i,n.precedence,t));return e.instance}function sh(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===e)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(t,a.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Hg(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Vg(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ah=null;function jy(t,e,n){if(ah===null){var i=new Map,s=ah=new Map;s.set(n,i)}else s=ah,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),s=0;s<n.length;s++){var a=n[s];if(!(a[vc]||a[yn]||t==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(e)||"";r=t+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Qy(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function iw(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function BM(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function sw(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Lo(i.href),a=e.querySelector(Tc(s));if(a){e=a._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Uh.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=a,mn(a);return}a=e.ownerDocument||e,i=PM(i),(s=Ei.get(s))&&Hg(i,s),a=a.createElement("link"),mn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Mn(a,"link",i),n.instance=a}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Uh.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var em=0;function aw(t,e){return t.stylesheets&&t.count===0&&rh(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&rh(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4+e);0<t.imgBytes&&em===0&&(em=62500*FE());var s=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&rh(t,t.stylesheets),t.unsuspend)){var a=t.unsuspend;t.unsuspend=null,a()}},(t.imgBytes>em?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Uh(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ih=null;function rh(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ih=new Map,e.forEach(rw,t),Ih=null,Uh.call(t))}function rw(t,e){if(!(e.state.loading&4)){var n=Ih.get(t);if(n)var i=n.get(null);else{n=new Map,Ih.set(t,n);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=e.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Uh.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var hc={$$typeof:Ts,Provider:null,Consumer:null,_currentValue:sr,_currentValue2:sr,_threadCount:0};function ow(t,e,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ep(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ep(0),this.hiddenUpdates=Ep(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function zM(t,e,n,i,s,a,r,o,l,c,h,f){return t=new ow(t,e,n,r,l,c,h,f,o),e=1,a===!0&&(e|=24),a=ei(3,null,null,e),t.current=a,a.stateNode=t,e=dg(),e.refCount++,t.pooledCache=e,e.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:e},gg(a),t}function FM(t){return t?(t=ho,t):ho}function HM(t,e,n,i,s,a){s=FM(s),i.context===null?i.context=s:i.pendingContext=s,i=_a(e),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=va(t,i,e),n!==null&&(kn(n,t,e),Wl(n,t,e))}function $y(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gg(t,e){$y(t,e),(t=t.alternate)&&$y(t,e)}function VM(t){if(t.tag===13||t.tag===31){var e=_r(t,67108864);e!==null&&kn(e,t,67108864),Gg(t,67108864)}}function ex(t){if(t.tag===13||t.tag===31){var e=ai();e=$m(e);var n=_r(t,e);n!==null&&kn(n,t,e),Gg(t,e)}}var Oh=!0;function lw(t,e,n,i){var s=Be.T;Be.T=null;var a=ot.p;try{ot.p=2,kg(t,e,n,i)}finally{ot.p=a,Be.T=s}}function cw(t,e,n,i){var s=Be.T;Be.T=null;var a=ot.p;try{ot.p=8,kg(t,e,n,i)}finally{ot.p=a,Be.T=s}}function kg(t,e,n,i){if(Oh){var s=Zm(i);if(s===null)Qp(t,e,i,Ph,n),tx(t,i);else if(hw(s,t,e,n,i))i.stopPropagation();else if(tx(t,i),e&4&&-1<uw.indexOf(t)){for(;s!==null;){var a=Oo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=tr(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-si(r);o.entanglements[1]|=l,r&=~l}ts(a),(rt&6)===0&&(Ah=ni()+500,bc(0,!1))}}break;case 31:case 13:o=_r(a,2),o!==null&&kn(o,a,2),Kh(),Gg(a,2)}if(a=Zm(i),a===null&&Qp(t,e,i,Ph,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Qp(t,e,i,null,n)}}function Zm(t){return t=ig(t),Xg(t)}var Ph=null;function Xg(t){if(Ph=null,t=ao(t),t!==null){var e=pc(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=ox(e),t!==null)return t;t=null}else if(n===31){if(t=lx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ph=t,null}function GM(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jT()){case fx:return 2;case dx:return 8;case hh:case QT:return 32;case px:return 268435456;default:return 32}default:return 32}}var Km=!1,Sa=null,Ma=null,ba=null,fc=new Map,dc=new Map,ca=[],uw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tx(t,e){switch(t){case"focusin":case"focusout":Sa=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":fc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":dc.delete(e.pointerId)}}function Il(t,e,n,i,s,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},e!==null&&(e=Oo(e),e!==null&&VM(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function hw(t,e,n,i,s){switch(e){case"focusin":return Sa=Il(Sa,t,e,n,i,s),!0;case"dragenter":return Ma=Il(Ma,t,e,n,i,s),!0;case"mouseover":return ba=Il(ba,t,e,n,i,s),!0;case"pointerover":var a=s.pointerId;return fc.set(a,Il(fc.get(a)||null,t,e,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,dc.set(a,Il(dc.get(a)||null,t,e,n,i,s)),!0}return!1}function kM(t){var e=ao(t.target);if(e!==null){var n=pc(e);if(n!==null){if(e=n.tag,e===13){if(e=ox(n),e!==null){t.blockedOn=e,zv(t.priority,function(){ex(n)});return}}else if(e===31){if(e=lx(n),e!==null){t.blockedOn=e,zv(t.priority,function(){ex(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oh(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zm(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);dm=i,n.target.dispatchEvent(i),dm=null}else return e=Oo(n),e!==null&&VM(e),t.blockedOn=n,!1;e.shift()}return!0}function nx(t,e,n){oh(t)&&n.delete(e)}function fw(){Km=!1,Sa!==null&&oh(Sa)&&(Sa=null),Ma!==null&&oh(Ma)&&(Ma=null),ba!==null&&oh(ba)&&(ba=null),fc.forEach(nx),dc.forEach(nx)}function Wu(t,e){t.blockedOn===e&&(t.blockedOn=null,Km||(Km=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,fw)))}var qu=null;function ix(t){qu!==t&&(qu=t,un.unstable_scheduleCallback(un.unstable_NormalPriority,function(){qu===t&&(qu=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],s=t[e+2];if(typeof i!="function"){if(Xg(i||n)===null)continue;break}var a=Oo(n);a!==null&&(t.splice(e,3),e-=3,Cm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Uo(t){function e(l){return Wu(l,t)}Sa!==null&&Wu(Sa,t),Ma!==null&&Wu(Ma,t),ba!==null&&Wu(ba,t),fc.forEach(e),dc.forEach(e);for(var n=0;n<ca.length;n++){var i=ca[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<ca.length&&(n=ca[0],n.blockedOn===null);)kM(n),n.blockedOn===null&&ca.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Xn]||null;if(typeof a=="function")r||ix(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Xn]||null)o=r.formAction;else if(Xg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ix(n)}}}function XM(){function t(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function e(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),s!==null&&(s(),s=null)}}}function Wg(t){this._internalRoot=t}Qh.prototype.render=Wg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));var n=e.current,i=ai();HM(n,i,t,e,null,null)};Qh.prototype.unmount=Wg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;HM(t.current,2,null,t,null,null),Kh(),e[Io]=null}};function Qh(t){this._internalRoot=t}Qh.prototype.unstable_scheduleHydration=function(t){if(t){var e=yx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ca.length&&e!==0&&e<ca[n].priority;n++);ca.splice(n,0,t),n===0&&kM(t)}};var sx=ax.version;if(sx!=="19.2.6")throw Error(te(527,sx,"19.2.6"));ot.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=XT(e),t=t!==null?cx(t):null,t=t===null?null:t.stateNode,t};var dw={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:Be,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ol.isDisabled&&Ol.supportsFiber))try{mc=Ol.inject(dw),ii=Ol}catch{}var Ol;$h.createRoot=function(t,e){if(!rx(t))throw Error(te(299));var n=!1,i="",s=OS,a=PS,r=BS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(a=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=zM(t,1,!1,null,null,n,i,null,s,a,r,XM),t[Io]=e.current,Fg(t),new Wg(e)};$h.hydrateRoot=function(t,e,n){if(!rx(t))throw Error(te(299));var i=!1,s="",a=OS,r=PS,o=BS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=zM(t,1,!0,e,n??null,i,s,l,a,r,o,XM),e.context=FM(null),n=e.current,i=ai(),i=$m(i),s=_a(i),s.callback=null,va(n,s,i),n=i,e.current.lanes=n,_c(e,n),ts(e),t[Io]=e.current,Fg(t),new Qh(e)};$h.version="19.2.6"});var ZM=Zi((TN,YM)=>{"use strict";function qM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qM)}catch(t){console.error(t)}}qM(),YM.exports=WM()});var rT=Zi(sp=>{"use strict";var pN=Symbol.for("react.transitional.element"),mN=Symbol.for("react.fragment");function aT(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var s in e)s!=="key"&&(n[s]=e[s])}else n=e;return e=n.ref,{$$typeof:pN,type:t,key:i,ref:e!==void 0?e:null,props:n}}sp.Fragment=mN;sp.jsx=aT;sp.jsxs=aT});var xu=Zi((FI,oT)=>{"use strict";oT.exports=rT()});var lT=Yr(ZM(),1);var ja=Yr(wu(),1);var Nb=0,N0=1,Lb=2;var au=1,nd=2,ml=3,Hi=0,An=1,En=2,us=0,Ar=1,L0=2,U0=3,I0=4,Ub=5;var Ba=100,Ib=101,Ob=102,Pb=103,Bb=104,zb=200,Fb=201,Hb=202,Vb=203,Rf=204,Cf=205,Gb=206,kb=207,Xb=208,Wb=209,qb=210,Yb=211,Zb=212,Kb=213,Jb=214,Df=0,Nf=1,Lf=2,Er=3,Uf=4,If=5,Of=6,Pf=7,O0=0,jb=1,Qb=2,Gi=0,P0=1,B0=2,z0=3,ru=4,F0=5,H0=6,V0=7,v0="attached",$b="detached",G0=300,Wa=301,Hr=302,id=303,sd=304,ou=306,za=1e3,Ri=1001,nl=1002,jt=1003,ad=1004;var Vr=1005;var Qt=1006,gl=1007;var ki=1008;var Kn=1009,k0=1010,X0=1011,_l=1012,rd=1013,Xi=1014,di=1015,hs=1016,od=1017,ld=1018,vl=1020,W0=35902,q0=35899,Y0=1021,Z0=1022,pi=1023,as=1026,qa=1027,cd=1028,ud=1029,Ya=1030,hd=1031;var fd=1033,lu=33776,cu=33777,uu=33778,hu=33779,dd=35840,pd=35841,md=35842,gd=35843,_d=36196,vd=37492,yd=37496,xd=37488,Sd=37489,fu=37490,Md=37491,bd=37808,Td=37809,Ad=37810,Ed=37811,wd=37812,Rd=37813,Cd=37814,Dd=37815,Nd=37816,Ld=37817,Ud=37818,Id=37819,Od=37820,Pd=37821,Bd=36492,zd=36494,Fd=36495,Hd=36283,Vd=36284,du=36285,Gd=36286;var wr=2300,Rr=2301,wf=2302,y0=2303,x0=2400,S0=2401,M0=2402,e1=2500;var K0=0,pu=1,yl=2,t1=3200;var kd=0,n1=1,Qs="",At="srgb",Bn="srgb-linear",Pc="linear",ct="srgb";var br=7680;var b0=519,i1=512,s1=513,a1=514,Xd=515,r1=516,o1=517,Wd=518,l1=519,Bf=35044;var J0="300 es",zi=2e3,il=2001;function pw(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function mw(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function sl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function c1(){let t=sl("canvas");return t.style.display="block",t}var KM={},al=null;function Bc(...t){let e="THREE."+t.shift();al?al("log",e,...t):console.log(e,...t)}function u1(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Re(...t){t=u1(t);let e="THREE."+t.shift();if(al)al("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Pe(...t){t=u1(t);let e="THREE."+t.shift();if(al)al("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Tr(...t){let e=t.join(" ");e in KM||(KM[e]=!0,Re(...t))}function h1(t,e,n){return new Promise(function(i,s){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var f1={[Df]:Nf,[Lf]:Of,[Uf]:Pf,[Er]:If,[Nf]:Df,[Of]:Lf,[Pf]:Uf,[If]:Er},rs=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}},Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],JM=1234567,Ic=Math.PI/180,Cr=180/Math.PI;function Fi(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dn[t&255]+Dn[t>>8&255]+Dn[t>>16&255]+Dn[t>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[n&63|128]+Dn[n>>8&255]+"-"+Dn[n>>16&255]+Dn[n>>24&255]+Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function j0(t,e){return(t%e+e)%e}function gw(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function _w(t,e,n){return t!==e?(n-t)/(e-t):0}function Oc(t,e,n){return(1-n)*t+n*e}function vw(t,e,n,i){return Oc(t,e,1-Math.exp(-n*i))}function yw(t,e=1){return e-Math.abs(j0(t,e*2)-e)}function xw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Sw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Mw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function bw(t,e){return t+Math.random()*(e-t)}function Tw(t){return t*(.5-Math.random())}function Aw(t){t!==void 0&&(JM=t);let e=JM+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ew(t){return t*Ic}function ww(t){return t*Cr}function Rw(t){return(t&t-1)===0&&t!==0}function Cw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Dw(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Nw(t,e,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((e+i)/2),h=r((e+i)/2),f=a((e-i)/2),u=r((e-i)/2),d=a((i-e)/2),g=r((i-e)/2);switch(s){case"XYX":t.set(o*h,l*f,l*u,o*c);break;case"YZY":t.set(l*u,o*h,l*f,o*c);break;case"ZXZ":t.set(l*f,l*u,o*h,o*c);break;case"XZX":t.set(o*h,l*g,l*d,o*c);break;case"YXY":t.set(l*d,o*h,l*g,o*c);break;case"ZYZ":t.set(l*g,l*d,o*h,o*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ft(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Za={DEG2RAD:Ic,RAD2DEG:Cr,generateUUID:Fi,clamp:Ke,euclideanModulo:j0,mapLinear:gw,inverseLerp:_w,lerp:Oc,damp:vw,pingpong:yw,smoothstep:xw,smootherstep:Sw,randInt:Mw,randFloat:bw,randFloatSpread:Tw,seededRandom:Aw,degToRad:Ew,radToDeg:ww,isPowerOfTwo:Rw,ceilPowerOfTwo:Cw,floorPowerOfTwo:Dw,setQuaternionFromProperEuler:Nw,normalize:ft,denormalize:Bi},Oe=class t{static{t.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*s+e.x,this.y=a*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ui=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=a[r+0],d=a[r+1],g=a[r+2],x=a[r+3];if(f!==x||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*x;m<0&&(u=-u,d=-d,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);p=Math.sin(p*_)/M,o=Math.sin(o*_)/M,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+x*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+x*o;let _=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=_,c*=_,h*=_,f*=_}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=a[r],u=a[r+1],d=a[r+2],g=a[r+3];return e[n]=o*g+h*f+l*d-c*u,e[n+1]=l*g+h*u+c*f-o*d,e[n+2]=c*g+h*d+o*u-l*f,e[n+3]=h*g-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(a/2),u=l(i/2),d=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,a=e._z,r=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class t{static{t.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jM.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jM.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,a=e.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*i),h=2*(o*n-a*s),f=2*(a*i-r*n);return this.x=n+l*c+r*f-o*h,this.y=i+l*h+o*c-a*f,this.z=s+l*f+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,a=e.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qg.copy(this).projectOnVector(e),this.sub(qg)}reflect(e){return this.sub(qg.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qg=new P,jM=new ui,Fe=class t{static{t.prototype.isMatrix3=!0}constructor(e,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,a,r,o,l,c)}set(e,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],_=s[1],M=s[4],v=s[7],A=s[2],T=s[5],w=s[8];return a[0]=r*x+o*_+l*A,a[3]=r*m+o*M+l*T,a[6]=r*p+o*v+l*w,a[1]=c*x+h*_+f*A,a[4]=c*m+h*M+f*T,a[7]=c*p+h*v+f*w,a[2]=u*x+d*_+g*A,a[5]=u*m+d*M+g*T,a[8]=u*p+d*v+g*w,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*r-o*c,u=o*l-h*a,d=c*a-r*l,g=n*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*r)*x,e[3]=u*x,e[4]=(h*n-s*l)*x,e[5]=(s*a-o*n)*x,e[6]=d*x,e[7]=(i*l-c*n)*x,e[8]=(r*n-i*a)*x,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(e,n){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yg.makeScale(e,n)),this}rotate(e){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yg.makeRotation(-e)),this}translate(e,n){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yg.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yg=new Fe,QM=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$M=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lw(){let t={enabled:!0,workingColorSpace:Bn,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ct&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ct&&(s.r=tl(s.r),s.g=tl(s.g),s.b=tl(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qs?Pc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Bn]:{primaries:e,whitePoint:i,transfer:Pc,toXYZ:QM,fromXYZ:$M,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:QM,fromXYZ:$M,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),t}var Ze=Lw();function Gs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function tl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Vo,zf=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vo===void 0&&(Vo=sl("canvas")),Vo.width=e.width,Vo.height=e.height;let s=Vo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Vo}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=sl("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Gs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gs(n[i]/255)*255):n[i]=Gs(n[i]);return{data:n,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Uw=0,rl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uw++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Zg(s[r].image)):a.push(Zg(s[r]))}else a=Zg(s);i.url=a}return n||(e.images[this.uuid]=i),i}};function Zg(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zf.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var Iw=0,Kg=new P,hn=class t extends rs{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Ri,s=Ri,a=Qt,r=ki,o=pi,l=Kn,c=t.DEFAULT_ANISOTROPY,h=Qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=Fi(),this.name="",this.source=new rl(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kg).x}get height(){return this.source.getSize(Kg).y}get depth(){return this.source.getSize(Kg).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Re(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Re(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==G0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case za:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case za:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=G0;hn.DEFAULT_ANISOTROPY=1;var dt=class t{static{t.prototype.isVector4=!0}constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,a,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let M=(c+1)/2,v=(d+1)/2,A=(p+1)/2,T=(h+u)/4,w=(f+x)/4,y=(g+m)/4;return M>v&&M>A?M<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(M),s=T/i,a=w/i):v>A?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=T/s,a=y/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=w/a,s=y/a),this.set(i,s,a,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ff=class extends rs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n),this.textures=[];let s={width:e,height:n,depth:i.depth},a=new hn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new rl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Ff{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},zc=class extends hn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hf=class extends hn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ke=class t{static{t.prototype.isMatrix4=!0}constructor(e,n,i,s,a,r,o,l,c,h,f,u,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,a,r,o,l,c,h,f,u,d,g,x,m)}set(e,n,i,s,a,r,o,l,c,h,f,u,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,s=1/Go.setFromMatrixColumn(e,0).length(),a=1/Go.setFromMatrixColumn(e,1).length(),r=1/Go.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,a=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){let u=r*h,d=r*f,g=o*h,x=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=d+g*c,n[5]=u-x*c,n[9]=-o*l,n[2]=x-u*c,n[6]=g+d*c,n[10]=r*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,g=c*h,x=c*f;n[0]=u+x*o,n[4]=g*o-d,n[8]=r*c,n[1]=r*f,n[5]=r*h,n[9]=-o,n[2]=d*o-g,n[6]=x+u*o,n[10]=r*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,g=c*h,x=c*f;n[0]=u-x*o,n[4]=-r*f,n[8]=g+d*o,n[1]=d+g*o,n[5]=r*h,n[9]=x-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(e.order==="ZYX"){let u=r*h,d=r*f,g=o*h,x=o*f;n[0]=l*h,n[4]=g*c-d,n[8]=u*c+x,n[1]=l*f,n[5]=x*c+u,n[9]=d*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(e.order==="YZX"){let u=r*l,d=r*c,g=o*l,x=o*c;n[0]=l*h,n[4]=x-u*f,n[8]=g*f+d,n[1]=f,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*f+g,n[10]=u-x*f}else if(e.order==="XZY"){let u=r*l,d=r*c,g=o*l,x=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=u*f+x,n[5]=r*h,n[9]=d*f-g,n[2]=g*f-d,n[6]=o*h,n[10]=x*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ow,e,Pw)}lookAt(e,n,i){let s=this.elements;return li.subVectors(e,n),li.lengthSq()===0&&(li.z=1),li.normalize(),Da.crossVectors(i,li),Da.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Da.crossVectors(i,li)),Da.normalize(),ef.crossVectors(li,Da),s[0]=Da.x,s[4]=ef.x,s[8]=li.x,s[1]=Da.y,s[5]=ef.y,s[9]=li.y,s[2]=Da.z,s[6]=ef.z,s[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],M=i[7],v=i[11],A=i[15],T=s[0],w=s[4],y=s[8],E=s[12],D=s[1],I=s[5],z=s[9],q=s[13],Y=s[2],V=s[6],K=s[10],Z=s[14],ie=s[3],re=s[7],de=s[11],ge=s[15];return a[0]=r*T+o*D+l*Y+c*ie,a[4]=r*w+o*I+l*V+c*re,a[8]=r*y+o*z+l*K+c*de,a[12]=r*E+o*q+l*Z+c*ge,a[1]=h*T+f*D+u*Y+d*ie,a[5]=h*w+f*I+u*V+d*re,a[9]=h*y+f*z+u*K+d*de,a[13]=h*E+f*q+u*Z+d*ge,a[2]=g*T+x*D+m*Y+p*ie,a[6]=g*w+x*I+m*V+p*re,a[10]=g*y+x*z+m*K+p*de,a[14]=g*E+x*q+m*Z+p*ge,a[3]=_*T+M*D+v*Y+A*ie,a[7]=_*w+M*I+v*V+A*re,a[11]=_*y+M*z+v*K+A*de,a[15]=_*E+M*q+v*Z+A*ge,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15],_=l*d-c*u,M=o*d-c*f,v=o*u-l*f,A=r*d-c*h,T=r*u-l*h,w=r*f-o*h;return n*(x*_-m*M+p*v)-i*(g*_-m*A+p*T)+s*(g*M-x*A+p*w)-a*(g*v-x*T+m*w)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],s=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return n*(r*h-o*c)-i*(a*h-o*l)+s*(a*c-r*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=n*o-i*r,M=n*l-s*r,v=n*c-a*r,A=i*l-s*o,T=i*c-a*o,w=s*c-a*l,y=h*x-f*g,E=h*m-u*g,D=h*p-d*g,I=f*m-u*x,z=f*p-d*x,q=u*p-d*m,Y=_*q-M*z+v*I+A*D-T*E+w*y;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/Y;return e[0]=(o*q-l*z+c*I)*V,e[1]=(s*z-i*q-a*I)*V,e[2]=(x*w-m*T+p*A)*V,e[3]=(u*T-f*w-d*A)*V,e[4]=(l*D-r*q-c*E)*V,e[5]=(n*q-s*D+a*E)*V,e[6]=(m*v-g*w-p*M)*V,e[7]=(h*w-u*v+d*M)*V,e[8]=(r*z-o*D+c*y)*V,e[9]=(i*D-n*z-a*y)*V,e[10]=(g*T-x*v+p*_)*V,e[11]=(f*v-h*T-d*_)*V,e[12]=(o*E-r*I-l*y)*V,e[13]=(n*I-i*E+s*y)*V,e[14]=(x*M-g*A-m*_)*V,e[15]=(h*A-f*M+u*_)*V,this}scale(e){let n=this.elements,i=e.x,s=e.y,a=e.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,a,r){return this.set(1,i,a,0,e,1,r,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,f=o+o,u=a*c,d=a*h,g=a*f,x=r*h,m=r*f,p=o*f,_=l*c,M=l*h,v=l*f,A=i.x,T=i.y,w=i.z;return s[0]=(1-(x+p))*A,s[1]=(d+v)*A,s[2]=(g-M)*A,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(u+p))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(g+M)*w,s[9]=(m-_)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Go.set(s[0],s[1],s[2]).length(),o=Go.set(s[4],s[5],s[6]).length(),l=Go.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Ii.copy(this);let c=1/r,h=1/o,f=1/l;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=f,Ii.elements[9]*=f,Ii.elements[10]*=f,n.setFromRotationMatrix(Ii),i.x=r,i.y=o,i.z=l,this}makePerspective(e,n,i,s,a,r,o=zi,l=!1){let c=this.elements,h=2*a/(n-e),f=2*a/(i-s),u=(n+e)/(n-e),d=(i+s)/(i-s),g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===zi)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===il)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,a,r,o=zi,l=!1){let c=this.elements,h=2/(n-e),f=2/(i-s),u=-(n+e)/(n-e),d=-(i+s)/(i-s),g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===zi)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===il)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Go=new P,Ii=new ke,Ow=new P(0,0,0),Pw=new P(1,1,1),Da=new P,ef=new P,li=new P,eb=new ke,tb=new ui,ks=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return eb.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eb,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tb.setFromEuler(this),this.setFromQuaternion(tb,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ks.DEFAULT_ORDER="XYZ";var Fc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bw=0,nb=new P,ko=new ui,Ps=new ke,tf=new P,Ec=new P,zw=new P,Fw=new ui,ib=new P(1,0,0),sb=new P(0,1,0),ab=new P(0,0,1),rb={type:"added"},Hw={type:"removed"},Xo={type:"childadded",child:null},Jg={type:"childremoved",child:null},Pt=class t extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bw++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new P,n=new ks,i=new ui,s=new P(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Fe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ko.setFromAxisAngle(e,n),this.quaternion.multiply(ko),this}rotateOnWorldAxis(e,n){return ko.setFromAxisAngle(e,n),this.quaternion.premultiply(ko),this}rotateX(e){return this.rotateOnAxis(ib,e)}rotateY(e){return this.rotateOnAxis(sb,e)}rotateZ(e){return this.rotateOnAxis(ab,e)}translateOnAxis(e,n){return nb.copy(e).applyQuaternion(this.quaternion),this.position.add(nb.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ib,e)}translateY(e){return this.translateOnAxis(sb,e)}translateZ(e){return this.translateOnAxis(ab,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ps.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?tf.copy(e):tf.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ec.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ps.lookAt(Ec,tf,this.up):Ps.lookAt(tf,Ec,this.up),this.quaternion.setFromRotationMatrix(Ps),s&&(Ps.extractRotation(s.matrixWorld),ko.setFromRotationMatrix(Ps),this.quaternion.premultiply(ko.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rb),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Hw),Jg.child=e,this.dispatchEvent(Jg),Jg.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ps.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ps.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ps),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rb),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ec,e,zw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ec,Fw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(e.animations,l))}}if(n){let o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),f=r(e.shapes),u=r(e.skeletons),d=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new P(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Lt=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vw={type:"move"},ol=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let x of e.hand.values()){let m=n.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vw)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},d1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},nf={h:0,s:0,l:0};function jg(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Ie=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=Ze.workingColorSpace){if(e=j0(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=jg(r,a,e+1/3),this.g=jg(r,a,e),this.b=jg(r,a,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,n=At){function i(a){a!==void 0&&parseFloat(a)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Re("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=At){let i=d1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=tl(e.r),this.g=tl(e.g),this.b=tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ze.workingToColorSpace(Nn.copy(this),e),Math.round(Ke(Nn.r*255,0,255))*65536+Math.round(Ke(Nn.g*255,0,255))*256+Math.round(Ke(Nn.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(Nn.copy(this),n);let i=Nn.r,s=Nn.g,a=Nn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let f=r-o;switch(c=h<=.5?f/(r+o):f/(2-r-o),r){case i:l=(s-a)/f+(s<a?6:0);break;case s:l=(a-i)/f+2;break;case a:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(Nn.copy(this),n),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=At){Ze.workingToColorSpace(Nn.copy(this),e);let n=Nn.r,i=Nn.g,s=Nn.b;return e!==At?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Na),this.setHSL(Na.h+e,Na.s+n,Na.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Na),e.getHSL(nf);let i=Oc(Na.h,nf.h,n),s=Oc(Na.s,nf.s,n),a=Oc(Na.l,nf.l,n);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new Ie;Ie.NAMES=d1;var Hc=class t{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=n,this.far=i}clone(){return new t(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vc=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ks,this.environmentIntensity=1,this.environmentRotation=new ks,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Oi=new P,Bs=new P,Qg=new P,zs=new P,Wo=new P,qo=new P,ob=new P,$g=new P,e0=new P,t0=new P,n0=new dt,i0=new dt,s0=new dt,Pa=class t{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Oi.subVectors(e,n),s.cross(Oi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,n,i,s,a){Oi.subVectors(s,n),Bs.subVectors(i,n),Qg.subVectors(e,n);let r=Oi.dot(Oi),o=Oi.dot(Bs),l=Oi.dot(Qg),c=Bs.dot(Bs),h=Bs.dot(Qg),f=r*c-o*o;if(f===0)return a.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(r*h-o*l)*u;return a.set(1-d-g,g,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,zs)===null?!1:zs.x>=0&&zs.y>=0&&zs.x+zs.y<=1}static getInterpolation(e,n,i,s,a,r,o,l){return this.getBarycoord(e,n,i,s,zs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,zs.x),l.addScaledVector(r,zs.y),l.addScaledVector(o,zs.z),l)}static getInterpolatedAttribute(e,n,i,s,a,r){return n0.setScalar(0),i0.setScalar(0),s0.setScalar(0),n0.fromBufferAttribute(e,n),i0.fromBufferAttribute(e,i),s0.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(n0,a.x),r.addScaledVector(i0,a.y),r.addScaledVector(s0,a.z),r}static isFrontFacing(e,n,i,s){return Oi.subVectors(i,n),Bs.subVectors(e,n),Oi.cross(Bs).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),Bs.subVectors(this.a,this.b),Oi.cross(Bs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,a){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,a)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,a=this.c,r,o;Wo.subVectors(s,i),qo.subVectors(a,i),$g.subVectors(e,i);let l=Wo.dot($g),c=qo.dot($g);if(l<=0&&c<=0)return n.copy(i);e0.subVectors(e,s);let h=Wo.dot(e0),f=qo.dot(e0);if(h>=0&&f<=h)return n.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(Wo,r);t0.subVectors(e,a);let d=Wo.dot(t0),g=qo.dot(t0);if(g>=0&&d<=g)return n.copy(a);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(qo,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return ob.subVectors(a,s),o=(f-h)/(f-h+(d-g)),n.copy(s).addScaledVector(ob,o);let p=1/(m+x+u);return r=x*p,o=u*p,n.copy(i).addScaledVector(Wo,r).addScaledVector(qo,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fi=class{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Pi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Pi):Pi.fromBufferAttribute(a,r),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sf.copy(i.boundingBox)),sf.applyMatrix4(e.matrixWorld),this.union(sf)}let s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wc),af.subVectors(this.max,wc),Yo.subVectors(e.a,wc),Zo.subVectors(e.b,wc),Ko.subVectors(e.c,wc),La.subVectors(Zo,Yo),Ua.subVectors(Ko,Zo),yr.subVectors(Yo,Ko);let n=[0,-La.z,La.y,0,-Ua.z,Ua.y,0,-yr.z,yr.y,La.z,0,-La.x,Ua.z,0,-Ua.x,yr.z,0,-yr.x,-La.y,La.x,0,-Ua.y,Ua.x,0,-yr.y,yr.x,0];return!a0(n,Yo,Zo,Ko,af)||(n=[1,0,0,0,1,0,0,0,1],!a0(n,Yo,Zo,Ko,af))?!1:(rf.crossVectors(La,Ua),n=[rf.x,rf.y,rf.z],a0(n,Yo,Zo,Ko,af))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fs=[new P,new P,new P,new P,new P,new P,new P,new P],Pi=new P,sf=new fi,Yo=new P,Zo=new P,Ko=new P,La=new P,Ua=new P,yr=new P,wc=new P,af=new P,rf=new P,xr=new P;function a0(t,e,n,i,s){for(let a=0,r=t.length-3;a<=r;a+=3){xr.fromArray(t,a);let o=s.x*Math.abs(xr.x)+s.y*Math.abs(xr.y)+s.z*Math.abs(xr.z),l=e.dot(xr),c=n.dot(xr),h=i.dot(xr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var on=new P,of=new Oe,Gw=0,Wt=class extends rs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Bf,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)of.fromBufferAttribute(this,n),of.applyMatrix3(e),this.setXY(n,of.x,of.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyMatrix3(e),this.setXYZ(n,on.x,on.y,on.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyMatrix4(e),this.setXYZ(n,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyNormalMatrix(e),this.setXYZ(n,on.x,on.y,on.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.transformDirection(e),this.setXYZ(n,on.x,on.y,on.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bi(n,this.array)),n}setX(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bi(n,this.array)),n}setY(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bi(n,this.array)),n}setW(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,a){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),s=ft(s,this.array),a=ft(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Gc=class extends Wt{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var kc=class extends Wt{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var st=class extends Wt{constructor(e,n,i){super(new Float32Array(e),n,i)}},kw=new fi,Rc=new P,r0=new P,qn=class{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):kw.setFromPoints(e).getCenter(i);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rc.subVectors(e,this.center);let n=Rc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Rc,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(r0.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rc.copy(e.center).add(r0)),this.expandByPoint(Rc.copy(e.center).sub(r0))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xw=0,wi=new ke,o0=new Pt,Jo=new P,ci=new fi,Cc=new fi,_n=new P,Bt=class t extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xw++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pw(e)?kc:Gc)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Fe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,n,i){return wi.makeTranslation(e,n,i),this.applyMatrix4(wi),this}scale(e,n,i){return wi.makeScale(e,n,i),this.applyMatrix4(wi),this}lookAt(e){return o0.lookAt(e),o0.updateMatrix(),this.applyMatrix4(o0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jo).negate(),this.translate(Jo.x,Jo.y,Jo.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=e.length;s<a;s++){let r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new st(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let a=e[s];n.setXYZ(s,a.x,a.y,a.z||0)}e.length>n.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];ci.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Cc.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(ci.min,Cc.min),ci.expandByPoint(_n),_n.addVectors(ci.max,Cc.max),ci.expandByPoint(_n)):(ci.expandByPoint(Cc.min),ci.expandByPoint(Cc.max))}ci.getCenter(i);let s=0;for(let a=0,r=e.count;a<r;a++)_n.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(_n));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_n.fromBufferAttribute(o,c),l&&(Jo.fromBufferAttribute(e,c),_n.add(Jo)),s=Math.max(s,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Wt(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new P,l[y]=new P;let c=new P,h=new P,f=new P,u=new Oe,d=new Oe,g=new Oe,x=new P,m=new P;function p(y,E,D){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,D),u.fromBufferAttribute(a,y),d.fromBufferAttribute(a,E),g.fromBufferAttribute(a,D),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),o[y].add(x),o[E].add(x),o[D].add(x),l[y].add(m),l[E].add(m),l[D].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let y=0,E=_.length;y<E;++y){let D=_[y],I=D.start,z=D.count;for(let q=I,Y=I+z;q<Y;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let M=new P,v=new P,A=new P,T=new P;function w(y){A.fromBufferAttribute(s,y),T.copy(A);let E=o[y];M.copy(E),M.sub(A.multiplyScalar(A.dot(E))).normalize(),v.crossVectors(T,E);let I=v.dot(l[y])<0?-1:1;r.setXYZW(y,M.x,M.y,M.z,I)}for(let y=0,E=_.length;y<E;++y){let D=_[y],I=D.start,z=D.count;for(let q=I,Y=I+z;q<Y;q+=3)w(e.getX(q+0)),w(e.getX(q+1)),w(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Wt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new P,a=new P,r=new P,o=new P,l=new P,c=new P,h=new P,f=new P;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),h.subVectors(r,a),f.subVectors(s,a),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,a),f.subVectors(s,a),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)_n.fromBufferAttribute(e,n),_n.normalize(),e.setXYZ(n,_n.x,_n.y,_n.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new Wt(u,h,f)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=e.morphAttributes;for(let c in a){let h=[],f=a[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,h=r.length;c<h;c++){let f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ll=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Bf,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pn=new P,cl=class t{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Pn.fromBufferAttribute(this,n),Pn.applyMatrix4(e),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pn.fromBufferAttribute(this,n),Pn.applyNormalMatrix(e),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pn.fromBufferAttribute(this,n),Pn.transformDirection(e),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Bi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Bi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Bi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Bi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),s=ft(s,this.array),a=ft(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Bc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return new Wt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Bc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ww=0,Yn=class extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ww++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Ar,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rf,this.blendDst=Cf,this.blendEquation=Ba,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Re(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Re(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rf&&(i.blendSrc=this.blendSrc),this.blendDst!==Cf&&(i.blendDst=this.blendDst),this.blendEquation!==Ba&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(e.textures),r=s(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Hs=new P,l0=new P,lf=new P,Ia=new P,c0=new P,cf=new P,u0=new P,Dr=class{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hs)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Hs.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Hs.copy(this.origin).addScaledVector(this.direction,n),Hs.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){l0.copy(e).add(n).multiplyScalar(.5),lf.copy(n).sub(e).normalize(),Ia.copy(this.origin).sub(l0);let a=e.distanceTo(n)*.5,r=-this.direction.dot(lf),o=Ia.dot(this.direction),l=-Ia.dot(lf),c=Ia.lengthSq(),h=Math.abs(1-r*r),f,u,d,g;if(h>0)if(f=r*l-o,u=r*o-l,g=a*h,f>=0)if(u>=-g)if(u<=g){let x=1/h;f*=x,u*=x,d=f*(f+r*u+2*o)+u*(r*f+u+2*l)+c}else u=a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;else u=-a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-r*a+o)),u=f>0?-a:Math.min(Math.max(-a,-l),a),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(f=Math.max(0,-(r*a+o)),u=f>0?a:Math.min(Math.max(-a,-l),a),d=-f*f+u*(u+2*l)+c);else u=r>0?-a:a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(l0).addScaledVector(lf,u),d}intersectSphere(e,n){Hs.subVectors(e.center,this.origin);let i=Hs.dot(this.direction),s=Hs.dot(Hs)-i*i,a=e.radius*e.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Hs)!==null}intersectTriangle(e,n,i,s,a){c0.subVectors(n,e),cf.subVectors(i,e),u0.crossVectors(c0,cf);let r=this.direction.dot(u0),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Ia.subVectors(this.origin,e);let l=o*this.direction.dot(cf.crossVectors(Ia,cf));if(l<0)return null;let c=o*this.direction.dot(c0.cross(Ia));if(c<0||l+c>r)return null;let h=-o*Ia.dot(u0);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bn=class extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.combine=O0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lb=new ke,Sr=new Dr,uf=new qn,cb=new P,hf=new P,ff=new P,df=new P,h0=new P,pf=new P,ub=new P,mf=new P,lt=class extends Pt{constructor(e=new Bt,n=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(a&&o){pf.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],f=a[l];h!==0&&(h0.fromBufferAttribute(f,e),r?pf.addScaledVector(h0,h):pf.addScaledVector(h0.sub(n),h))}n.add(pf)}return n}raycast(e,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uf.copy(i.boundingSphere),uf.applyMatrix4(a),Sr.copy(e.ray).recast(e.near),!(uf.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(uf,cb)===null||Sr.origin.distanceToSquared(cb)>(e.far-e.near)**2))&&(lb.copy(a).invert(),Sr.copy(e.ray).applyMatrix4(lb),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=r[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,A=M;v<A;v+=3){let T=o.getX(v),w=o.getX(v+1),y=o.getX(v+2);s=gf(this,p,e,i,c,h,f,T,w,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=gf(this,r,e,i,c,h,f,_,M,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=r[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,A=M;v<A;v+=3){let T=v,w=v+1,y=v+2;s=gf(this,p,e,i,c,h,f,T,w,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=m,M=m+1,v=m+2;s=gf(this,r,e,i,c,h,f,_,M,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function qw(t,e,n,i,s,a,r,o){let l;if(e.side===An?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,e.side===Hi,o),l===null)return null;mf.copy(o),mf.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(mf);return c<n.near||c>n.far?null:{distance:c,point:mf.clone(),object:t}}function gf(t,e,n,i,s,a,r,o,l,c){t.getVertexPosition(o,hf),t.getVertexPosition(l,ff),t.getVertexPosition(c,df);let h=qw(t,e,n,i,hf,ff,df,ub);if(h){let f=new P;Pa.getBarycoord(ub,hf,ff,df,f),s&&(h.uv=Pa.getInterpolatedAttribute(s,o,l,c,f,new Oe)),a&&(h.uv1=Pa.getInterpolatedAttribute(a,o,l,c,f,new Oe)),r&&(h.normal=Pa.getInterpolatedAttribute(r,o,l,c,f,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};Pa.getNormal(hf,ff,df,u.normal),h.face=u,h.barycoord=f}return h}var Dc=new dt,hb=new dt,fb=new dt,Yw=new dt,db=new ke,_f=new P,f0=new qn,pb=new ke,d0=new Dr,Xc=class extends lt{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=v0,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();let n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,_f),this.boundingBox.expandByPoint(_f)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();let n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,_f),this.boundingSphere.expandByPoint(_f)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),f0.copy(this.boundingSphere),f0.applyMatrix4(s),e.ray.intersectsSphere(f0)!==!1&&(pb.copy(s).invert(),d0.copy(e.ray).applyMatrix4(pb),!(this.boundingBox!==null&&d0.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,d0)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new dt,n=this.geometry.attributes.skinWeight;for(let i=0,s=n.count;i<s;i++){e.fromBufferAttribute(n,i);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),n.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===v0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$b?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){let i=this.skeleton,s=this.geometry;hb.fromBufferAttribute(s.attributes.skinIndex,e),fb.fromBufferAttribute(s.attributes.skinWeight,e),n.isVector4?(Dc.copy(n),n.set(0,0,0,0)):(Dc.set(...n,1),n.set(0,0,0)),Dc.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){let r=fb.getComponent(a);if(r!==0){let o=hb.getComponent(a);db.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),n.addScaledVector(Yw.copy(Dc).applyMatrix4(db),r)}}return n.isVector4&&(n.w=Dc.w),n.applyMatrix4(this.bindMatrixInverse)}},ul=class extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},hl=class extends hn{constructor(e=null,n=1,i=1,s,a,r,o,l,c=jt,h=jt,f,u){super(null,r,o,l,c,h,s,a,f,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mb=new ke,Zw=new ke,Wc=class t{constructor(e=[],n=[]){this.uuid=Fi(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){let i=new ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,n=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,r=e.length;a<r;a++){let o=e[a]?e[a].matrixWorld:Zw;mb.multiplyMatrices(o,n[a]),mb.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new t(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let n=new Float32Array(e*e*4);n.set(this.boneMatrices);let i=new hl(n,e,e,pi,di);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(e){for(let n=0,i=this.bones.length;n<i;n++){let s=this.bones[n];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let a=e.bones[i],r=n[a];r===void 0&&(Re("Skeleton: No bone found with UUID:",a),r=new ul),this.bones.push(r),this.boneInverses.push(new ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let n=this.bones,i=this.boneInverses;for(let s=0,a=n.length;s<a;s++){let r=n[s];e.bones.push(r.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},Fa=class extends Wt{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},jo=new ke,gb=new ke,vf=[],_b=new fi,Kw=new ke,Nc=new lt,Lc=new qn,qc=class extends lt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Fa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Kw)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,jo),_b.copy(e.boundingBox).applyMatrix4(jo),this.boundingBox.union(_b)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,jo),Lc.copy(e.boundingSphere).applyMatrix4(jo),this.boundingSphere.union(Lc)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=e*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(e,n){let i=this.matrixWorld,s=this.count;if(Nc.geometry=this.geometry,Nc.material=this.material,Nc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lc.copy(this.boundingSphere),Lc.applyMatrix4(i),e.ray.intersectsSphere(Lc)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,jo),gb.multiplyMatrices(i,jo),Nc.matrixWorld=gb,Nc.raycast(e,vf);for(let r=0,o=vf.length;r<o;r++){let l=vf[r];l.instanceId=a,l.object=this,n.push(l)}vf.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Fa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new hl(new Float32Array(s*this.count),s,this.count,cd,di));let a=this.morphTexture.source.data.data,r=0;for(let c=0;c<i.length;c++)r+=i[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=s*e;return a[l]=o,a.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},p0=new P,Jw=new P,jw=new Fe,is=class{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=p0.subVectors(i,n).cross(Jw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(p0),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(e.start).addScaledVector(s,r)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||jw.getNormalMatrix(e),s=this.coplanarPoint(p0).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mr=new qn,Qw=new Oe(.5,.5),yf=new P,fl=class{constructor(e=new is,n=new is,i=new is,s=new is,a=new is,r=new is){this.planes=[e,n,i,s,a,r]}set(e,n,i,s,a,r){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zi,i=!1){let s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],f=a[5],u=a[6],d=a[7],g=a[8],x=a[9],m=a[10],p=a[11],_=a[12],M=a[13],v=a[14],A=a[15];if(s[0].setComponents(c-r,d-h,p-g,A-_).normalize(),s[1].setComponents(c+r,d+h,p+g,A+_).normalize(),s[2].setComponents(c+o,d+f,p+x,A+M).normalize(),s[3].setComponents(c-o,d-f,p-x,A-M).normalize(),i)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,d-u,p-m,A-v).normalize();else if(s[4].setComponents(c-l,d-u,p-m,A-v).normalize(),n===zi)s[5].setComponents(c+l,d+u,p+m,A+v).normalize();else if(n===il)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);let n=Qw.distanceTo(e.center);return Mr.radius=.7071067811865476+n,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(yf.x=s.normal.x>0?e.max.x:e.min.x,yf.y=s.normal.y>0?e.max.y:e.min.y,yf.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yf)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ha=class extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vf=new P,Gf=new P,vb=new ke,Uc=new Dr,xf=new qn,m0=new P,yb=new P,Nr=class extends Pt{constructor(e=new Bt,n=new Ha){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,a=n.count;s<a;s++)Vf.fromBufferAttribute(n,s-1),Gf.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Vf.distanceTo(Gf);e.setAttribute("lineDistance",new st(i,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){let i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xf.copy(i.boundingSphere),xf.applyMatrix4(s),xf.radius+=a,e.ray.intersectsSphere(xf)===!1)return;vb.copy(s).invert(),Uc.copy(e.ray).applyMatrix4(vb);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=d,m=g-1;x<m;x+=c){let p=h.getX(x),_=h.getX(x+1),M=Sf(this,e,Uc,l,p,_,x);M&&n.push(M)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=Sf(this,e,Uc,l,x,m,g-1);p&&n.push(p)}}else{let d=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let x=d,m=g-1;x<m;x+=c){let p=Sf(this,e,Uc,l,x,x+1,x);p&&n.push(p)}if(this.isLineLoop){let x=Sf(this,e,Uc,l,g-1,d,g-1);x&&n.push(x)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Sf(t,e,n,i,s,a,r){let o=t.geometry.attributes.position;if(Vf.fromBufferAttribute(o,s),Gf.fromBufferAttribute(o,a),n.distanceSqToSegment(Vf,Gf,m0,yb)>i)return;m0.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(m0);if(!(c<e.near||c>e.far))return{distance:c,point:yb.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}var xb=new P,Sb=new P,Lr=class extends Nr{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[];for(let s=0,a=n.count;s<a;s+=2)xb.fromBufferAttribute(n,s),Sb.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+xb.distanceTo(Sb);e.setAttribute("lineDistance",new st(i,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Yc=class extends Nr{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}},dl=class extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mb=new ke,T0=new Dr,Mf=new qn,bf=new P,Zc=class extends Pt{constructor(e=new Bt,n=new dl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){let i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mf.copy(i.boundingSphere),Mf.applyMatrix4(s),Mf.radius+=a,e.ray.intersectsSphere(Mf)===!1)return;Mb.copy(s).invert(),T0.copy(e.ray).applyMatrix4(Mb);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){let u=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let g=u,x=d;g<x;g++){let m=c.getX(g);bf.fromBufferAttribute(f,m),bb(bf,m,l,s,e,n,this)}}else{let u=Math.max(0,r.start),d=Math.min(f.count,r.start+r.count);for(let g=u,x=d;g<x;g++)bf.fromBufferAttribute(f,g),bb(bf,g,l,s,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function bb(t,e,n,i,s,a,r){let o=T0.distanceSqToPoint(t);if(o<n){let l=new P;T0.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var Ur=class extends hn{constructor(e=[],n=Wa,i,s,a,r,o,l,c,h){super(e,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ir=class extends hn{constructor(e,n,i,s,a,r,o,l,c){super(e,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xs=class extends hn{constructor(e,n,i=Xi,s,a,r,o=jt,l=jt,c,h=as,f=1){if(h!==as&&h!==qa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:n,depth:f};super(u,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},kf=class extends Xs{constructor(e,n=Xi,i=Wa,s,a,r=jt,o=jt,l,c=as){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,n,i,s,a,r,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Kc=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},os=class t extends Bt{constructor(e=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,n,e,r,a,0),g("z","y","x",1,-1,i,n,-e,r,a,1),g("x","z","y",1,1,e,i,n,s,r,2),g("x","z","y",1,-1,e,i,-n,s,r,3),g("x","y","z",1,-1,e,n,i,s,a,4),g("x","y","z",-1,-1,e,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(f,2));function g(x,m,p,_,M,v,A,T,w,y,E){let D=v/w,I=A/y,z=v/2,q=A/2,Y=T/2,V=w+1,K=y+1,Z=0,ie=0,re=new P;for(let de=0;de<K;de++){let ge=de*I-q;for(let xe=0;xe<V;xe++){let ze=xe*D-z;re[x]=ze*_,re[m]=ge*M,re[p]=Y,c.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[p]=T>0?1:-1,h.push(re.x,re.y,re.z),f.push(xe/w),f.push(1-de/y),Z+=1}}for(let de=0;de<y;de++)for(let ge=0;ge<w;ge++){let xe=u+ge+V*de,ze=u+ge+V*(de+1),_t=u+(ge+1)+V*(de+1),Xe=u+(ge+1)+V*de;l.push(xe,ze,Xe),l.push(ze,_t,Xe),ie+=6}o.addGroup(d,ie,E),d+=ie,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ws=class t extends Bt{constructor(e=1,n=1,i=4,s=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:s,heightSegments:a},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),a=Math.max(1,Math.floor(a));let r=[],o=[],l=[],c=[],h=n/2,f=Math.PI/2*e,u=n,d=2*f+u,g=i*2+a,x=s+1,m=new P,p=new P;for(let _=0;_<=g;_++){let M=0,v=0,A=0,T=0;if(_<=i){let E=_/i,D=E*Math.PI/2;v=-h-e*Math.cos(D),A=e*Math.sin(D),T=-e*Math.cos(D),M=E*f}else if(_<=i+a){let E=(_-i)/a;v=-h+E*n,A=e,T=0,M=f+E*u}else{let E=(_-i-a)/i,D=E*Math.PI/2;v=h+e*Math.sin(D),A=e*Math.cos(D),T=e*Math.sin(D),M=f+u+E*f}let w=Math.max(0,Math.min(1,M/d)),y=0;_===0?y=.5/s:_===g&&(y=-.5/s);for(let E=0;E<=s;E++){let D=E/s,I=D*Math.PI*2,z=Math.sin(I),q=Math.cos(I);p.x=-A*q,p.y=v,p.z=A*z,o.push(p.x,p.y,p.z),m.set(-A*q,T,A*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(D+y,w)}if(_>0){let E=(_-1)*x;for(let D=0;D<s;D++){let I=E+D,z=E+D+1,q=_*x+D,Y=_*x+D+1;r.push(I,z,q),r.push(z,Y,q)}}}this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Jc=class t extends Bt{constructor(e=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let a=[],r=[],o=[],l=[],c=new P,h=new Oe;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=n;f++,u+=3){let d=i+f/n*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[u]/e+1)/2,h.y=(r[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=n;f++)a.push(f,f+1,0);this.setIndex(a),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Vi=class t extends Bt{constructor(e=1,n=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let h=[],f=[],u=[],d=[],g=0,x=[],m=i/2,p=0;_(),r===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new st(f,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(d,2));function _(){let v=new P,A=new P,T=0,w=(n-e)/i;for(let y=0;y<=a;y++){let E=[],D=y/a,I=D*(n-e)+e;for(let z=0;z<=s;z++){let q=z/s,Y=q*l+o,V=Math.sin(Y),K=Math.cos(Y);A.x=I*V,A.y=-D*i+m,A.z=I*K,f.push(A.x,A.y,A.z),v.set(V,w,K).normalize(),u.push(v.x,v.y,v.z),d.push(q,1-D),E.push(g++)}x.push(E)}for(let y=0;y<s;y++)for(let E=0;E<a;E++){let D=x[E][y],I=x[E+1][y],z=x[E+1][y+1],q=x[E][y+1];(e>0||E!==0)&&(h.push(D,I,q),T+=3),(n>0||E!==a-1)&&(h.push(I,z,q),T+=3)}c.addGroup(p,T,0),p+=T}function M(v){let A=g,T=new Oe,w=new P,y=0,E=v===!0?e:n,D=v===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*D,0),u.push(0,D,0),d.push(.5,.5),g++;let I=g;for(let z=0;z<=s;z++){let Y=z/s*l+o,V=Math.cos(Y),K=Math.sin(Y);w.x=E*K,w.y=m*D,w.z=E*V,f.push(w.x,w.y,w.z),u.push(0,D,0),T.x=V*.5+.5,T.y=K*.5*D+.5,d.push(T.x,T.y),g++}for(let z=0;z<s;z++){let q=A+z,Y=I+z;v===!0?h.push(Y,Y+1,q):h.push(Y+1,Y,q),y+=3}c.addGroup(p,y,v===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jc=class t extends Vi{constructor(e=1,n=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,n,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Qc=class t extends Bt{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],n=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:s},n=Math.floor(n),s=Ke(s,0,Math.PI*2);let a=[],r=[],o=[],l=[],c=[],h=1/n,f=new P,u=new Oe,d=new P,g=new P,x=new P,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=n;_++){let M=i+_*h*s,v=Math.sin(M),A=Math.cos(M);for(let T=0;T<=e.length-1;T++){f.x=e[T].x*v,f.y=e[T].y,f.z=e[T].x*A,r.push(f.x,f.y,f.z),u.x=_/n,u.y=T/(e.length-1),o.push(u.x,u.y);let w=l[3*T+0]*v,y=l[3*T+1],E=l[3*T+0]*A;c.push(w,y,E)}}for(let _=0;_<n;_++)for(let M=0;M<e.length-1;M++){let v=M+_*e.length,A=v,T=v+e.length,w=v+e.length+1,y=v+1;a.push(A,T,y),a.push(w,y,T)}this.setIndex(a),this.setAttribute("position",new st(r,3)),this.setAttribute("uv",new st(o,2)),this.setAttribute("normal",new st(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.points,e.segments,e.phiStart,e.phiLength)}};var qs=class t extends Bt{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let a=e/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=n/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*u-r;for(let M=0;M<c;M++){let v=M*f-a;g.push(v,-_,0),x.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let M=_+c*p,v=_+c*(p+1),A=_+1+c*(p+1),T=_+1+c*p;d.push(M,v,T),d.push(v,A,T)}this.setIndex(d),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var Va=class t extends Bt{constructor(e=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,h=[],f=new P,u=new P,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let _=[],M=p/i,v=r+M*o,A=e*Math.cos(v),T=Math.sqrt(e*e-A*A),w=0;p===0&&r===0?w=.5/n:p===i&&l===Math.PI&&(w=-.5/n);for(let y=0;y<=n;y++){let E=y/n,D=s+E*a;f.x=-T*Math.cos(D),f.y=A,f.z=T*Math.sin(D),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(E+w,1-M),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<n;_++){let M=h[p][_+1],v=h[p][_],A=h[p+1][_],T=h[p+1][_+1];(p!==0||r>0)&&d.push(M,v,T),(p!==i-1||l<Math.PI)&&d.push(v,A,T)}this.setIndex(d),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ga=class t extends Bt{constructor(e=1,n=.4,i=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new P,d=new P,g=new P;for(let x=0;x<=i;x++){let m=r+x/i*o;for(let p=0;p<=s;p++){let _=p/s*a;d.x=(e+n*Math.cos(m))*Math.cos(_),d.y=(e+n*Math.cos(m))*Math.sin(_),d.z=n*Math.sin(m),c.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(p/s),f.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,_=(s+1)*(x-1)+m-1,M=(s+1)*(x-1)+m,v=(s+1)*x+m;l.push(p,_,v),l.push(_,M,v)}this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function Gr(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(Tb(s))s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(Tb(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[n][i]=a}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Ln(t){let e={};for(let n=0;n<t.length;n++){let i=Gr(t[n]);for(let s in i)e[s]=i[s]}return e}function Tb(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function $w(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Q0(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var p1={clone:Gr,merge:Ln},e2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e2,this.fragmentShader=t2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=$w(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Ie().setHex(s.value);break;case"v2":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ke().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xf=class extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zt=class extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kd,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Tn=class extends zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Wf=class extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qf=class extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tf(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function n2(t){function e(s,a){return t[s]-t[a]}let n=t.length,i=new Array(n);for(let s=0;s!==n;++s)i[s]=s;return i.sort(e),i}function Ab(t,e,n){let i=t.length,s=new t.constructor(i);for(let a=0,r=0;r!==i;++a){let o=n[a]*e;for(let l=0;l!==e;++l)s[r++]=t[o+l]}return s}function i2(t,e,n,i){let s=1,a=t[0];for(;a!==void 0&&a[i]===void 0;)a=t[s++];if(a===void 0)return;let r=a[i];if(r!==void 0)if(Array.isArray(r))do r=a[i],r!==void 0&&(e.push(a.time),n.push(...r)),a=t[s++];while(a!==void 0);else if(r.toArray!==void 0)do r=a[i],r!==void 0&&(e.push(a.time),r.toArray(n,n.length)),a=t[s++];while(a!==void 0);else do r=a[i],r!==void 0&&(e.push(a.time),n.push(r)),a=t[s++];while(a!==void 0)}var ls=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];e:{t:{let r;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],e<s)break t}r=n.length;break n}if(!(e>=a)){let o=n[1];e<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],e>=a)break t}r=i,i=0;break n}break e}for(;i<r;){let o=i+r>>>1;e<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yf=class extends ls{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:x0,endingEnd:x0}}intervalChanged_(e,n,i){let s=this.parameterPositions,a=e-2,r=e+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case S0:a=e,o=2*n-i;break;case M0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case S0:r=e,l=2*i-n;break;case M0:r=1,l=i+s[1]-s[0];break;default:r=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(e,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-n)/(s-n),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,_=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,M=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let A=0;A!==o;++A)a[A]=p*r[h+A]+_*r[c+A]+M*r[l+A]+v*r[f+A];return a}},Zf=class extends ls{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-n)/(s-n),f=1-h;for(let u=0;u!==o;++u)a[u]=r[c+u]*f+r[l+u]*h;return a}},Kf=class extends ls{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Jf=class extends ls{interpolate_(e,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(i-n)/(s-n),x=1-g;for(let m=0;m!==o;++m)a[m]=r[c+m]*x+r[l+m]*g;return a}let u=o*2,d=e-1;for(let g=0;g!==o;++g){let x=r[c+g],m=r[l+g],p=d*u+g*2,_=f[p],M=f[p+1],v=e*u+g*2,A=h[v],T=h[v+1],w=(i-n)/(s-n),y,E,D,I,z;for(let q=0;q<8;q++){y=w*w,E=y*w,D=1-w,I=D*D,z=I*D;let V=z*n+3*I*w*_+3*D*y*A+E*s-i;if(Math.abs(V)<1e-10)break;let K=3*I*(_-n)+6*D*w*(A-_)+3*y*(s-A);if(Math.abs(K)<1e-10)break;w=w-V/K,w=Math.max(0,Math.min(1,w))}a[g]=z*x+3*I*w*M+3*D*y*T+E*m}return a}},Zn=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tf(n,this.TimeBufferType),this.values=Tf(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Tf(e.times,Array),values:Tf(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Kf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new Jf(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case wr:n=this.InterpolantFactoryMethodDiscrete;break;case Rr:n=this.InterpolantFactoryMethodLinear;break;case wf:n=this.InterpolantFactoryMethodSmooth;break;case y0:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Re("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return wf;case this.InterpolantFactoryMethodBezier:return y0}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e}return this}trim(e,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<e;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Pe("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(s!==void 0&&mw(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===wf,a=e.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let x=n[f+g];if(x!==n[u+g]||x!==n[d+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let f=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[f+d]}++r}}if(a>0){e[r]=e[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=n.slice(0,r*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,s}};Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Rr;var Ys=class extends Zn{constructor(e,n,i){super(e,n,i)}};Ys.prototype.ValueTypeName="bool";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=wr;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var $c=class extends Zn{constructor(e,n,i,s){super(e,n,i,s)}};$c.prototype.ValueTypeName="color";var Zs=class extends Zn{constructor(e,n,i,s){super(e,n,i,s)}};Zs.prototype.ValueTypeName="number";var jf=class extends ls{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=e*o;for(let h=c+o;c!==h;c+=4)ui.slerpFlat(a,0,r,c-o,r,c,l);return a}},Ks=class extends Zn{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new jf(this.times,this.values,this.getValueSize(),e)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Js=class extends Zn{constructor(e,n,i){super(e,n,i)}};Js.prototype.ValueTypeName="string";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=wr;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends Zn{constructor(e,n,i,s){super(e,n,i,s)}};ka.prototype.ValueTypeName="vector";var eu=class{constructor(e="",n=-1,i=[],s=e1){this.name=e,this.tracks=i,this.duration=n,this.blendMode=s,this.uuid=Fi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let n=[],i=e.tracks,s=1/(e.fps||1);for(let r=0,o=i.length;r!==o;++r)n.push(a2(i[r]).scale(s));let a=new this(e.name,e.duration,n,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){let n=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,r=i.length;a!==r;++a)n.push(Zn.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,n,i,s){let a=n.length,r=[];for(let o=0;o<a;o++){let l=[],c=[];l.push((o+a-1)%a,o,(o+1)%a),c.push(0,1,0);let h=n2(l);l=Ab(l,1,h),c=Ab(c,1,h),!s&&l[0]===0&&(l.push(a),c.push(c[0])),r.push(new Zs(".morphTargetInfluences["+n[o].name+"]",l,c).scale(1/i))}return new this(e,-1,r)}static findByName(e,n){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===n)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,n,i){let s={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(a);if(h&&h.length>1){let f=h[1],u=s[f];u||(s[f]=u=[]),u.push(c)}}let r=[];for(let o in s)r.push(this.CreateFromMorphTargetSequence(o,s[o],n,i));return r}resetDuration(){let e=this.tracks,n=0;for(let i=0,s=e.length;i!==s;++i){let a=this.tracks[i];n=Math.max(n,a.times[a.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}};function s2(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zs;case"vector":case"vector2":case"vector3":case"vector4":return ka;case"color":return $c;case"quaternion":return Ks;case"bool":case"boolean":return Ys;case"string":return Js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function a2(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=s2(t.type);if(t.times===void 0){let n=[],i=[];i2(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}var ss={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(Eb(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!Eb(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Eb(t){try{let e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Qf=class{constructor(e,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},m1=new Qf,cs=class{constructor(e){this.manager=e!==void 0?e:m1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,a){i.load(e,s,n,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};cs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vs={},A0=class extends Error{constructor(e,n){super(e),this.response=n}},pl=class extends cs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=ss.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(a),this.manager.itemEnd(e)},0);return}if(Vs[e]!==void 0){Vs[e].push({onLoad:n,onProgress:i,onError:s});return}Vs[e]=[],Vs[e].push({onLoad:n,onProgress:i,onError:s});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Vs[e],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,g=d!==0,x=0,m=new ReadableStream({start(p){_();function _(){f.read().then(({done:M,value:v})=>{if(M)p.close();else{x+=v.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let T=0,w=h.length;T<w;T++){let y=h[T];y.onProgress&&y.onProgress(A)}p.enqueue(v),_()}},M=>{p.error(M)})}}});return new Response(m)}else throw new A0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ss.add(`file:${e}`,c);let h=Vs[e];delete Vs[e];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Vs[e];if(h===void 0)throw this.manager.itemError(e),c;delete Vs[e];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Qo=new WeakMap,$f=class extends cs{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,r=ss.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(e),setTimeout(function(){n&&n(r),a.manager.itemEnd(e)},0);else{let f=Qo.get(r);f===void 0&&(f=[],Qo.set(r,f)),f.push({onLoad:n,onError:s})}return r}let o=sl("img");function l(){h(),n&&n(this);let f=Qo.get(this)||[];for(let u=0;u<f.length;u++){let d=f[u];d.onLoad&&d.onLoad(this)}Qo.delete(this),a.manager.itemEnd(e)}function c(f){h(),s&&s(f),ss.remove(`image:${e}`);let u=Qo.get(this)||[];for(let d=0;d<u.length;d++){let g=u[d];g.onError&&g.onError(f)}Qo.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ss.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}};var Or=class extends cs{constructor(e){super(e)}load(e,n,i,s){let a=new hn,r=new $f(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,s),a}},Pr=class extends Pt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},tu=class extends Pr{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){let n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}},g0=new ke,wb=new P,Rb=new P,nu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fl,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;wb.setFromMatrixPosition(e.matrixWorld),n.position.copy(wb),Rb.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Rb),n.updateMatrixWorld(),g0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(g0,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===il||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(g0)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Af=new P,Ef=new ui,ns=new P,iu=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Af,Ef,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Af,Ef,ns.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Af,Ef,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Af,Ef,ns.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oa=new P,Cb=new Oe,Db=new Oe,ln=class extends iu{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ic*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(Ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z)}getViewSize(e,n){return this.getViewBounds(e,Cb,Db),n.subVectors(Db,Cb)}setViewOffset(e,n,i,s,a,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Ic*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},E0=class extends nu{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let n=this.camera,i=Cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||n.far;(i!==n.fov||s!==n.aspect||a!==n.far)&&(n.fov=i,n.aspect=s,n.far=a,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Br=class extends Pr{constructor(e,n,i=0,s=Math.PI/3,a=0,r=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new E0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}},w0=class extends nu{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},zr=class extends Pr{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new w0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},Xa=class extends iu{constructor(e=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-e,r=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},R0=class extends nu{constructor(){super(new Xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fr=class extends Pr{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new R0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var js=class{static extractUrlBase(e){let n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}};var _0=new WeakMap,su=class extends cs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,r=ss.get(`image-bitmap:${e}`);if(r!==void 0){if(a.manager.itemStart(e),r.then){r.then(c=>{_0.has(r)===!0?(s&&s(_0.get(r)),a.manager.itemError(e),a.manager.itemEnd(e)):(n&&n(c),a.manager.itemEnd(e))});return}setTimeout(function(){n&&n(r),a.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(c){ss.add(`image-bitmap:${e}`,c),n&&n(c),a.manager.itemEnd(e)}).catch(function(c){s&&s(c),_0.set(l,c),ss.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});ss.add(`image-bitmap:${e}`,l),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var $o=-90,el=1,ed=class extends Pt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln($o,el,e,n);s.layers=this.layers,this.add(s);let a=new ln($o,el,e,n);a.layers=this.layers,this.add(a);let r=new ln($o,el,e,n);r.layers=this.layers,this.add(r);let o=new ln($o,el,e,n);o.layers=this.layers,this.add(o);let l=new ln($o,el,e,n);l.layers=this.layers,this.add(l);let c=new ln($o,el,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===il)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},td=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var $0="\\[\\]\\.:\\/",r2=new RegExp("["+$0+"]","g"),e_="[^"+$0+"]",o2="[^"+$0.replace("\\.","")+"]",l2=/((?:WC+[\/:])*)/.source.replace("WC",e_),c2=/(WCOD+)?/.source.replace("WCOD",o2),u2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",e_),h2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",e_),f2=new RegExp("^"+l2+c2+u2+h2+"$"),d2=["material","materials","bones","map"],C0=class{constructor(e,n,i){let s=i||St.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},St=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(r2,"")}static parseTrackName(e){let n=f2.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);d2.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[s];if(r===void 0){let c=n.nodeName;Pe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=C0;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var AN=new Float32Array(1);var D0=class t{static{t.prototype.isMatrix2=!0}constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let a=this.elements;return a[0]=e,a[2]=n,a[1]=i,a[3]=s,this}};function t_(t,e,n,i){let s=p2(i);switch(n){case Y0:return t*e;case cd:return t*e/s.components*s.byteLength;case ud:return t*e/s.components*s.byteLength;case Ya:return t*e*2/s.components*s.byteLength;case hd:return t*e*2/s.components*s.byteLength;case Z0:return t*e*3/s.components*s.byteLength;case pi:return t*e*4/s.components*s.byteLength;case fd:return t*e*4/s.components*s.byteLength;case lu:case cu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case uu:case hu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pd:case gd:return Math.max(t,16)*Math.max(e,8)/4;case dd:case md:return Math.max(t,8)*Math.max(e,8)/2;case _d:case vd:case xd:case Sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yd:case fu:case Md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Bd:case zd:case Fd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Hd:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case du:case Gd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function p2(t){switch(t){case Kn:case k0:return{byteLength:1,components:1};case _l:case X0:case hs:return{byteLength:2,components:1};case od:case ld:return{byteLength:2,components:4};case Xi:case rd:case di:return{byteLength:4,components:1};case W0:case q0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function z1(){let t=null,e=!1,n=null,i=null;function s(a,r){n(a,r),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function g2(t){let e=new WeakMap;function n(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];t.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var _2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v2=`#ifdef USE_ALPHAHASH
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
#endif`,y2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b2=`#ifdef USE_AOMAP
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
#endif`,T2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A2=`#ifdef USE_BATCHING
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
#endif`,E2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,D2=`#ifdef USE_IRIDESCENCE
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
#endif`,N2=`#ifdef USE_BUMPMAP
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
#endif`,L2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,B2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,z2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,H2=`#define PI 3.141592653589793
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
} // validated`,V2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G2=`vec3 transformedNormal = objectNormal;
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
#endif`,k2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y2="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K2=`#ifdef USE_ENVMAP
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
#endif`,J2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,j2=`#ifdef USE_ENVMAP
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
#endif`,Q2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$2=`#ifdef USE_ENVMAP
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
#endif`,eR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sR=`#ifdef USE_GRADIENTMAP
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
}`,aR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lR=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cR=`#ifdef USE_ENVMAP
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
#endif`,uR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pR=`PhysicalMaterial material;
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
#endif`,mR=`uniform sampler2D dfgLUT;
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
}`,gR=`
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
#endif`,_R=`#if defined( RE_IndirectDiffuse )
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
#endif`,vR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yR=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ER=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wR=`#if defined( USE_POINTS_UV )
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
#endif`,RR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UR=`#ifdef USE_MORPHTARGETS
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
#endif`,IR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,HR=`#ifdef USE_NORMALMAP
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
#endif`,VR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$R=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nC=`float getShadowMask() {
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
}`,iC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sC=`#ifdef USE_SKINNING
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
#endif`,aC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rC=`#ifdef USE_SKINNING
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
#endif`,oC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hC=`#ifdef USE_TRANSMISSION
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
#endif`,fC=`#ifdef USE_TRANSMISSION
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
#endif`,dC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_C=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vC=`uniform sampler2D t2D;
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
}`,yC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,SC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bC=`#include <common>
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
}`,TC=`#if DEPTH_PACKING == 3200
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
}`,AC=`#define DISTANCE
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
}`,EC=`#define DISTANCE
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
}`,wC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CC=`uniform float scale;
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
}`,DC=`uniform vec3 diffuse;
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
}`,NC=`#include <common>
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
}`,LC=`uniform vec3 diffuse;
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
}`,UC=`#define LAMBERT
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
}`,IC=`#define LAMBERT
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
}`,OC=`#define MATCAP
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
}`,PC=`#define MATCAP
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
}`,BC=`#define NORMAL
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
}`,zC=`#define NORMAL
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
}`,FC=`#define PHONG
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
}`,HC=`#define PHONG
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
}`,VC=`#define STANDARD
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
}`,GC=`#define STANDARD
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
}`,kC=`#define TOON
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
}`,XC=`#define TOON
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
}`,WC=`uniform float size;
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
}`,qC=`uniform vec3 diffuse;
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
}`,YC=`#include <common>
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
}`,ZC=`uniform vec3 color;
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
}`,KC=`uniform float rotation;
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
}`,JC=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:_2,alphahash_pars_fragment:v2,alphamap_fragment:y2,alphamap_pars_fragment:x2,alphatest_fragment:S2,alphatest_pars_fragment:M2,aomap_fragment:b2,aomap_pars_fragment:T2,batching_pars_vertex:A2,batching_vertex:E2,begin_vertex:w2,beginnormal_vertex:R2,bsdfs:C2,iridescence_fragment:D2,bumpmap_pars_fragment:N2,clipping_planes_fragment:L2,clipping_planes_pars_fragment:U2,clipping_planes_pars_vertex:I2,clipping_planes_vertex:O2,color_fragment:P2,color_pars_fragment:B2,color_pars_vertex:z2,color_vertex:F2,common:H2,cube_uv_reflection_fragment:V2,defaultnormal_vertex:G2,displacementmap_pars_vertex:k2,displacementmap_vertex:X2,emissivemap_fragment:W2,emissivemap_pars_fragment:q2,colorspace_fragment:Y2,colorspace_pars_fragment:Z2,envmap_fragment:K2,envmap_common_pars_fragment:J2,envmap_pars_fragment:j2,envmap_pars_vertex:Q2,envmap_physical_pars_fragment:cR,envmap_vertex:$2,fog_vertex:eR,fog_pars_vertex:tR,fog_fragment:nR,fog_pars_fragment:iR,gradientmap_pars_fragment:sR,lightmap_pars_fragment:aR,lights_lambert_fragment:rR,lights_lambert_pars_fragment:oR,lights_pars_begin:lR,lights_toon_fragment:uR,lights_toon_pars_fragment:hR,lights_phong_fragment:fR,lights_phong_pars_fragment:dR,lights_physical_fragment:pR,lights_physical_pars_fragment:mR,lights_fragment_begin:gR,lights_fragment_maps:_R,lights_fragment_end:vR,lightprobes_pars_fragment:yR,logdepthbuf_fragment:xR,logdepthbuf_pars_fragment:SR,logdepthbuf_pars_vertex:MR,logdepthbuf_vertex:bR,map_fragment:TR,map_pars_fragment:AR,map_particle_fragment:ER,map_particle_pars_fragment:wR,metalnessmap_fragment:RR,metalnessmap_pars_fragment:CR,morphinstance_vertex:DR,morphcolor_vertex:NR,morphnormal_vertex:LR,morphtarget_pars_vertex:UR,morphtarget_vertex:IR,normal_fragment_begin:OR,normal_fragment_maps:PR,normal_pars_fragment:BR,normal_pars_vertex:zR,normal_vertex:FR,normalmap_pars_fragment:HR,clearcoat_normal_fragment_begin:VR,clearcoat_normal_fragment_maps:GR,clearcoat_pars_fragment:kR,iridescence_pars_fragment:XR,opaque_fragment:WR,packing:qR,premultiplied_alpha_fragment:YR,project_vertex:ZR,dithering_fragment:KR,dithering_pars_fragment:JR,roughnessmap_fragment:jR,roughnessmap_pars_fragment:QR,shadowmap_pars_fragment:$R,shadowmap_pars_vertex:eC,shadowmap_vertex:tC,shadowmask_pars_fragment:nC,skinbase_vertex:iC,skinning_pars_vertex:sC,skinning_vertex:aC,skinnormal_vertex:rC,specularmap_fragment:oC,specularmap_pars_fragment:lC,tonemapping_fragment:cC,tonemapping_pars_fragment:uC,transmission_fragment:hC,transmission_pars_fragment:fC,uv_pars_fragment:dC,uv_pars_vertex:pC,uv_vertex:mC,worldpos_vertex:gC,background_vert:_C,background_frag:vC,backgroundCube_vert:yC,backgroundCube_frag:xC,cube_vert:SC,cube_frag:MC,depth_vert:bC,depth_frag:TC,distance_vert:AC,distance_frag:EC,equirect_vert:wC,equirect_frag:RC,linedashed_vert:CC,linedashed_frag:DC,meshbasic_vert:NC,meshbasic_frag:LC,meshlambert_vert:UC,meshlambert_frag:IC,meshmatcap_vert:OC,meshmatcap_frag:PC,meshnormal_vert:BC,meshnormal_frag:zC,meshphong_vert:FC,meshphong_frag:HC,meshphysical_vert:VC,meshphysical_frag:GC,meshtoon_vert:kC,meshtoon_frag:XC,points_vert:WC,points_frag:qC,shadow_vert:YC,shadow_frag:ZC,sprite_vert:KC,sprite_frag:JC},me={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ds={basic:{uniforms:Ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ln([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ln([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ie(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ln([me.points,me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ln([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ln([me.common,me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ln([me.sprite,me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Ln([me.common,me.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Ln([me.lights,me.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ds.physical={uniforms:Ln([ds.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var qd={r:0,b:0,g:0},jC=new ke,F1=new Fe;F1.set(-1,0,0,0,1,0,0,0,1);function QC(t,e,n,i,s,a){let r=new Ie(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=e.get(M,v)}return M}function g(_){let M=!1,v=d(_);v===null?m(r,o):v&&v.isColor&&(m(v,1),M=!0);let A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(_,M){let v=d(M);v&&(v.isCubeTexture||v.mapping===ou)?(c===void 0&&(c=new lt(new os(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Gr(ds.backgroundCube.uniforms),vertexShader:ds.backgroundCube.vertexShader,fragmentShader:ds.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jC.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(F1),c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==ct,(h!==v||f!==v.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new lt(new qs(2,2),new zn({name:"BackgroundMaterial",uniforms:Gr(ds.background.uniforms),vertexShader:ds.background.vertexShader,fragmentShader:ds.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(qd,Q0(t)),n.buffers.color.setClear(qd.r,qd.g,qd.b,M,a)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,M=1){r.set(_),o=M,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(r,o)},render:g,addToRenderList:x,dispose:p}}function $C(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(I,z,q,Y,V){let K=!1,Z=f(I,Y,q,z);a!==Z&&(a=Z,c(a.object)),K=d(I,Y,q,V),K&&g(I,Y,q,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,v(I,z,q,Y),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function f(I,z,q,Y){let V=Y.wireframe===!0,K=i[z.id];K===void 0&&(K={},i[z.id]=K);let Z=I.isInstancedMesh===!0?I.id:0,ie=K[Z];ie===void 0&&(ie={},K[Z]=ie);let re=ie[q.id];re===void 0&&(re={},ie[q.id]=re);let de=re[V];return de===void 0&&(de=u(l()),re[V]=de),de}function u(I){let z=[],q=[],Y=[];for(let V=0;V<n;V++)z[V]=0,q[V]=0,Y[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:Y,object:I,attributes:{},index:null}}function d(I,z,q,Y){let V=a.attributes,K=z.attributes,Z=0,ie=q.getAttributes();for(let re in ie)if(ie[re].location>=0){let ge=V[re],xe=K[re];if(xe===void 0&&(re==="instanceMatrix"&&I.instanceMatrix&&(xe=I.instanceMatrix),re==="instanceColor"&&I.instanceColor&&(xe=I.instanceColor)),ge===void 0||ge.attribute!==xe||xe&&ge.data!==xe.data)return!0;Z++}return a.attributesNum!==Z||a.index!==Y}function g(I,z,q,Y){let V={},K=z.attributes,Z=0,ie=q.getAttributes();for(let re in ie)if(ie[re].location>=0){let ge=K[re];ge===void 0&&(re==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),re==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor));let xe={};xe.attribute=ge,ge&&ge.data&&(xe.data=ge.data),V[re]=xe,Z++}a.attributes=V,a.attributesNum=Z,a.index=Y}function x(){let I=a.newAttributes;for(let z=0,q=I.length;z<q;z++)I[z]=0}function m(I){p(I,0)}function p(I,z){let q=a.newAttributes,Y=a.enabledAttributes,V=a.attributeDivisors;q[I]=1,Y[I]===0&&(t.enableVertexAttribArray(I),Y[I]=1),V[I]!==z&&(t.vertexAttribDivisor(I,z),V[I]=z)}function _(){let I=a.newAttributes,z=a.enabledAttributes;for(let q=0,Y=z.length;q<Y;q++)z[q]!==I[q]&&(t.disableVertexAttribArray(q),z[q]=0)}function M(I,z,q,Y,V,K,Z){Z===!0?t.vertexAttribIPointer(I,z,q,V,K):t.vertexAttribPointer(I,z,q,Y,V,K)}function v(I,z,q,Y){x();let V=Y.attributes,K=q.getAttributes(),Z=z.defaultAttributeValues;for(let ie in K){let re=K[ie];if(re.location>=0){let de=V[ie];if(de===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(de=I.instanceColor)),de!==void 0){let ge=de.normalized,xe=de.itemSize,ze=e.get(de);if(ze===void 0)continue;let _t=ze.buffer,Xe=ze.type,$=ze.bytesPerElement,he=Xe===t.INT||Xe===t.UNSIGNED_INT||de.gpuType===rd;if(de.isInterleavedBufferAttribute){let L=de.data,De=L.stride,we=de.offset;if(L.isInstancedInterleavedBuffer){for(let Ue=0;Ue<re.locationSize;Ue++)p(re.location+Ue,L.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let Ue=0;Ue<re.locationSize;Ue++)m(re.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,_t);for(let Ue=0;Ue<re.locationSize;Ue++)M(re.location+Ue,xe/re.locationSize,Xe,ge,De*$,(we+xe/re.locationSize*Ue)*$,he)}else{if(de.isInstancedBufferAttribute){for(let L=0;L<re.locationSize;L++)p(re.location+L,de.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let L=0;L<re.locationSize;L++)m(re.location+L);t.bindBuffer(t.ARRAY_BUFFER,_t);for(let L=0;L<re.locationSize;L++)M(re.location+L,xe/re.locationSize,Xe,ge,xe*$,xe/re.locationSize*L*$,he)}}else if(Z!==void 0){let ge=Z[ie];if(ge!==void 0)switch(ge.length){case 2:t.vertexAttrib2fv(re.location,ge);break;case 3:t.vertexAttrib3fv(re.location,ge);break;case 4:t.vertexAttrib4fv(re.location,ge);break;default:t.vertexAttrib1fv(re.location,ge)}}}}_()}function A(){E();for(let I in i){let z=i[I];for(let q in z){let Y=z[q];for(let V in Y){let K=Y[V];for(let Z in K)h(K[Z].object),delete K[Z];delete Y[V]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;let z=i[I.id];for(let q in z){let Y=z[q];for(let V in Y){let K=Y[V];for(let Z in K)h(K[Z].object),delete K[Z];delete Y[V]}}delete i[I.id]}function w(I){for(let z in i){let q=i[z];for(let Y in q){let V=q[Y];if(V[I.id]===void 0)continue;let K=V[I.id];for(let Z in K)h(K[Z].object),delete K[Z];delete V[I.id]}}}function y(I){for(let z in i){let q=i[z],Y=I.isInstancedMesh===!0?I.id:0,V=q[Y];if(V!==void 0){for(let K in V){let Z=V[K];for(let ie in Z)h(Z[ie].object),delete Z[ie];delete V[K]}delete q[Y],Object.keys(q).length===0&&delete i[z]}}}function E(){D(),r=!0,a!==s&&(a=s,c(a.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function e3(t,e,n){let i;function s(l){i=l}function a(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function t3(t,e,n,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==pi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let y=w===hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Kn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==di&&!y)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:A,samples:T}}function n3(t){let e=this,n=null,i=0,s=!1,a=!1,r=new is,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,u){n=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{let _=a?0:i,M=_*4,v=p.clippingState||null;l.value=v,v=h(g,u,M,d);for(let A=0;A!==M;++A)v[A]=n[A];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=d;M!==x;++M,v+=4)r.copy(f[M]).applyMatrix4(_,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Ka=4,g1=[.125,.215,.35,.446,.526,.582],kr=20,i3=256,mu=new Xa,_1=new Ie,n_=null,i_=0,s_=0,a_=!1,s3=new P,Zd=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=s3}=a;n_=this._renderer.getRenderTarget(),i_=this._renderer.getActiveCubeFace(),s_=this._renderer.getActiveMipmapLevel(),a_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(n_,i_,s_),this._renderer.xr.enabled=a_,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wa||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),n_=this._renderer.getRenderTarget(),i_=this._renderer.getActiveCubeFace(),s_=this._renderer.getActiveMipmapLevel(),a_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:hs,format:pi,colorSpace:Bn,depthBuffer:!1},s=v1(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v1(e,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=a3(a)),this._blurMaterial=o3(a,e,n),this._ggxMaterial=r3(a,e,n)}return s}_compileMaterial(e){let n=new lt(new Bt,e);this._renderer.compile(n,mu)}_sceneToCubeUV(e,n,i,s,a){let l=new ln(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(_1),f.toneMapping=Gi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new os,new bn({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,_=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,p=!0):(m.color.copy(_1),p=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[M],a.y,a.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[M],a.z)):(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[M]));let A=this._cubeSize;xl(s,v*A,M>2?A:0,A,A),f.setRenderTarget(s),p&&f.render(x,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=_}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===Wa||e.mapping===Hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=x1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y1());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=e;let l=this._cubeSize;xl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,mu)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);n.autoClear=i}_applyGGXFilter(e,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,d=f*u,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-Ka?i-g+Ka:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-n,xl(a,m,p,3*x,2*x),s.setRenderTarget(a),s.render(o,mu),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-i,xl(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,mu)}_blur(e,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(e,r,n,i,s,"latitudinal",a),this._halfBlur(r,e,i,i,s,"longitudinal",a)}_halfBlur(e,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[s];f.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*kr-1),x=a/g,m=isFinite(a)?1+Math.floor(h*x):kr;m>kr&&Re(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kr}`);let p=[],_=0;for(let w=0;w<kr;++w){let y=w/x,E=Math.exp(-y*y/2);p.push(E),w===0?_+=E:w<m&&(_+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-i;let v=this._sizeLods[s],A=3*v*(s>M-Ka?s-M+Ka:0),T=4*(this._cubeSize-v);xl(n,A,T,3*v,2*v),l.setRenderTarget(n),l.render(f,mu)}};function a3(t){let e=[],n=[],i=[],s=t,a=t-Ka+1+g1.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);e.push(o);let l=1/o;r>t-Ka?l=g1[r-t+Ka-1]:r===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*d),M=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let T=0;T<d;T++){let w=T%3*2/3-1,y=T>2?0:-1,E=[w,y,0,w+2/3,y,0,w+2/3,y+1,0,w,y,0,w+2/3,y+1,0,w,y+1,0];_.set(E,x*g*T),M.set(u,m*g*T);let D=[T,T,T,T,T,T];v.set(D,p*g*T)}let A=new Bt;A.setAttribute("position",new Wt(_,x)),A.setAttribute("uv",new Wt(M,m)),A.setAttribute("faceIndex",new Wt(v,p)),i.push(new lt(A,null)),s>Ka&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function v1(t,e,n){let i=new hi(t,e,n);return i.texture.mapping=ou,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xl(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function r3(t,e,n){return new zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:i3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jd(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function o3(t,e,n){let i=new Float32Array(kr),s=new P(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jd(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function y1(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function x1(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function jd(){return`

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
	`}var Kd=class extends hi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ur(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new os(5,5,5),a=new zn({name:"CubemapFromEquirect",uniforms:Gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:us});a.uniforms.tEquirect.value=n;let r=new lt(s,a),o=n.minFilter;return n.minFilter===ki&&(n.minFilter=Qt),new ed(1,10,this).update(e,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,i,s);e.setRenderTarget(a)}};function l3(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===id||d===sd)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new Kd(g.height);return x.fromEquirectangularTexture(t,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,g=d===id||d===sd,x=d===Wa||d===Hr;if(g||x){let m=n.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Zd(t)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return g&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new Zd(t)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===id?u.mapping=Wa:d===sd&&(u.mapping=Hr),u}function l(u){let d=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=n.get(d);g!==void 0&&(n.delete(d),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function c3(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Tr("WebGLRenderer: "+i+" extension not supported."),s}}}function u3(t,e,n,i){let s={},a=new WeakMap;function r(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(e.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)e.update(u[d],t.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let M=0,v=_.length;M<v;M+=3){let A=_[M+0],T=_[M+1],w=_[M+2];u.push(A,T,T,w,w,A)}}else{let _=g.array;x=g.version;for(let M=0,v=_.length/3-1;M<v;M+=3){let A=M+0,T=M+1,w=M+2;u.push(A,T,T,w,w,A)}}let m=new(g.count>=65535?kc:Gc)(u,1);m.version=x;let p=a.get(f);p&&e.remove(p),a.set(f,m)}function h(f){let u=a.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function h3(t,e,n){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,u){t.drawElements(i,u,a,f*r),n.update(u,i,1)}function c(f,u,d){d!==0&&(t.drawElementsInstanced(i,u,a,f*r,d),n.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,f,0,d);let x=0;for(let m=0;m<d;m++)x+=u[m];n.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function f3(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=o*(a/3);break;case t.LINES:n.lines+=o*(a/2);break;case t.LINE_STRIP:n.lines+=o*(a-1);break;case t.LINE_LOOP:n.lines+=o*a;break;case t.POINTS:n.points+=o*a;break;default:Pe("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function d3(t,e,n){let i=new WeakMap,s=new dt;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let E=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let v=o.attributes.position.count*M,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*A*4*f),w=new zc(T,v,A,f);w.type=di,w.needsUpdate=!0;let y=M*4;for(let D=0;D<f;D++){let I=m[D],z=p[D],q=_[D],Y=v*A*4*D;for(let V=0;V<I.count;V++){let K=V*y;d===!0&&(s.fromBufferAttribute(I,V),T[Y+K+0]=s.x,T[Y+K+1]=s.y,T[Y+K+2]=s.z,T[Y+K+3]=0),g===!0&&(s.fromBufferAttribute(z,V),T[Y+K+4]=s.x,T[Y+K+5]=s.y,T[Y+K+6]=s.z,T[Y+K+7]=0),x===!0&&(s.fromBufferAttribute(q,V),T[Y+K+8]=s.x,T[Y+K+9]=s.y,T[Y+K+10]=s.z,T[Y+K+11]=q.itemSize===4?s.w:1)}}u={count:f,texture:w,size:new Oe(v,A)},i.set(o,u),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:a}}function p3(t,e,n,i,s){let a=new WeakMap;function r(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(a.get(u)!==h&&(e.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function o(){a=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}var m3={[P0]:"LINEAR_TONE_MAPPING",[B0]:"REINHARD_TONE_MAPPING",[z0]:"CINEON_TONE_MAPPING",[ru]:"ACES_FILMIC_TONE_MAPPING",[H0]:"AGX_TONE_MAPPING",[V0]:"NEUTRAL_TONE_MAPPING",[F0]:"CUSTOM_TONE_MAPPING"};function g3(t,e,n,i,s,a){let r=new hi(e,n,{type:t,depthBuffer:s,stencilBuffer:a,samples:i?4:0,depthTexture:s?new Xs(e,n):void 0}),o=new hi(e,n,{type:hs,depthBuffer:!1,stencilBuffer:!1}),l=new Bt;l.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new st([0,2,0,0,2,0],2));let c=new Xf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new lt(l,c),f=new Xa(-1,1,1,-1,0,1),u=null,d=null,g=!1,x,m=null,p=[],_=!1;this.setSize=function(M,v){r.setSize(M,v),o.setSize(M,v);for(let A=0;A<p.length;A++){let T=p[A];T.setSize&&T.setSize(M,v)}},this.setEffects=function(M){p=M,_=p.length>0&&p[0].isRenderPass===!0;let v=r.width,A=r.height;for(let T=0;T<p.length;T++){let w=p[T];w.setSize&&w.setSize(v,A)}},this.begin=function(M,v){if(g||M.toneMapping===Gi&&p.length===0)return!1;if(m=v,v!==null){let A=v.width,T=v.height;(r.width!==A||r.height!==T)&&this.setSize(A,T)}return _===!1&&M.setRenderTarget(r),x=M.toneMapping,M.toneMapping=Gi,!0},this.hasRenderPass=function(){return _},this.end=function(M,v){M.toneMapping=x,g=!0;let A=r,T=o;for(let w=0;w<p.length;w++){let y=p[w];if(y.enabled!==!1&&(y.render(M,T,A,v),y.needsSwap!==!1)){let E=A;A=T,T=E}}if(u!==M.outputColorSpace||d!==M.toneMapping){u=M.outputColorSpace,d=M.toneMapping,c.defines={},Ze.getTransfer(u)===ct&&(c.defines.SRGB_TRANSFER="");let w=m3[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,M.setRenderTarget(m),M.render(h,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}var H1=new hn,l_=new Xs(1,1),V1=new zc,G1=new Hf,k1=new Ur,S1=[],M1=[],b1=new Float32Array(16),T1=new Float32Array(9),A1=new Float32Array(4);function Ml(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,a=S1[s];if(a===void 0&&(a=new Float32Array(s),S1[s]=a),e!==0){i.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=n,t[r].toArray(a,o)}return a}function fn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function dn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Qd(t,e){let n=M1[e];n===void 0&&(n=new Int32Array(e),M1[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _3(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function v3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;t.uniform2fv(this.addr,e),dn(n,e)}}function y3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(fn(n,e))return;t.uniform3fv(this.addr,e),dn(n,e)}}function x3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;t.uniform4fv(this.addr,e),dn(n,e)}}function S3(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(fn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),dn(n,e)}else{if(fn(n,i))return;A1.set(i),t.uniformMatrix2fv(this.addr,!1,A1),dn(n,i)}}function M3(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(fn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),dn(n,e)}else{if(fn(n,i))return;T1.set(i),t.uniformMatrix3fv(this.addr,!1,T1),dn(n,i)}}function b3(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(fn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),dn(n,e)}else{if(fn(n,i))return;b1.set(i),t.uniformMatrix4fv(this.addr,!1,b1),dn(n,i)}}function T3(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function A3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;t.uniform2iv(this.addr,e),dn(n,e)}}function E3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fn(n,e))return;t.uniform3iv(this.addr,e),dn(n,e)}}function w3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;t.uniform4iv(this.addr,e),dn(n,e)}}function R3(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function C3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;t.uniform2uiv(this.addr,e),dn(n,e)}}function D3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fn(n,e))return;t.uniform3uiv(this.addr,e),dn(n,e)}}function N3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;t.uniform4uiv(this.addr,e),dn(n,e)}}function L3(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let a;this.type===t.SAMPLER_2D_SHADOW?(l_.compareFunction=n.isReversedDepthBuffer()?Wd:Xd,a=l_):a=H1,n.setTexture2D(e||a,s)}function U3(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||G1,s)}function I3(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||k1,s)}function O3(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||V1,s)}function P3(t){switch(t){case 5126:return _3;case 35664:return v3;case 35665:return y3;case 35666:return x3;case 35674:return S3;case 35675:return M3;case 35676:return b3;case 5124:case 35670:return T3;case 35667:case 35671:return A3;case 35668:case 35672:return E3;case 35669:case 35673:return w3;case 5125:return R3;case 36294:return C3;case 36295:return D3;case 36296:return N3;case 35678:case 36198:case 36298:case 36306:case 35682:return L3;case 35679:case 36299:case 36307:return U3;case 35680:case 36300:case 36308:case 36293:return I3;case 36289:case 36303:case 36311:case 36292:return O3}}function B3(t,e){t.uniform1fv(this.addr,e)}function z3(t,e){let n=Ml(e,this.size,2);t.uniform2fv(this.addr,n)}function F3(t,e){let n=Ml(e,this.size,3);t.uniform3fv(this.addr,n)}function H3(t,e){let n=Ml(e,this.size,4);t.uniform4fv(this.addr,n)}function V3(t,e){let n=Ml(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function G3(t,e){let n=Ml(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function k3(t,e){let n=Ml(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function X3(t,e){t.uniform1iv(this.addr,e)}function W3(t,e){t.uniform2iv(this.addr,e)}function q3(t,e){t.uniform3iv(this.addr,e)}function Y3(t,e){t.uniform4iv(this.addr,e)}function Z3(t,e){t.uniform1uiv(this.addr,e)}function K3(t,e){t.uniform2uiv(this.addr,e)}function J3(t,e){t.uniform3uiv(this.addr,e)}function j3(t,e){t.uniform4uiv(this.addr,e)}function Q3(t,e,n){let i=this.cache,s=e.length,a=Qd(n,s);fn(i,a)||(t.uniform1iv(this.addr,a),dn(i,a));let r;this.type===t.SAMPLER_2D_SHADOW?r=l_:r=H1;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||r,a[o])}function $3(t,e,n){let i=this.cache,s=e.length,a=Qd(n,s);fn(i,a)||(t.uniform1iv(this.addr,a),dn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(e[r]||G1,a[r])}function eD(t,e,n){let i=this.cache,s=e.length,a=Qd(n,s);fn(i,a)||(t.uniform1iv(this.addr,a),dn(i,a));for(let r=0;r!==s;++r)n.setTextureCube(e[r]||k1,a[r])}function tD(t,e,n){let i=this.cache,s=e.length,a=Qd(n,s);fn(i,a)||(t.uniform1iv(this.addr,a),dn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(e[r]||V1,a[r])}function nD(t){switch(t){case 5126:return B3;case 35664:return z3;case 35665:return F3;case 35666:return H3;case 35674:return V3;case 35675:return G3;case 35676:return k3;case 5124:case 35670:return X3;case 35667:case 35671:return W3;case 35668:case 35672:return q3;case 35669:case 35673:return Y3;case 5125:return Z3;case 36294:return K3;case 36295:return J3;case 36296:return j3;case 35678:case 36198:case 36298:case 36306:case 35682:return Q3;case 35679:case 36299:case 36307:return $3;case 35680:case 36300:case 36308:case 36293:return eD;case 36289:case 36303:case 36311:case 36292:return tD}}var c_=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=P3(n.type)}},u_=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nD(n.type)}},h_=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(e,n[o.id],i)}}},r_=/(\w+)(\])?(\[|\.)?/g;function E1(t,e){t.seq.push(e),t.map[e.id]=e}function iD(t,e,n){let i=t.name,s=i.length;for(r_.lastIndex=0;;){let a=r_.exec(i),r=r_.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){E1(n,c===void 0?new c_(o,t,e):new u_(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new h_(o),E1(n,f)),n=f}}}var Sl=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(n,r),l=e.getUniformLocation(n,o.name);iD(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,a=e.length;s!==a;++s){let r=e[s];r.id in n&&i.push(r)}return i}};function w1(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var sD=37297,aD=0;function rD(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===e?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var R1=new Fe;function oD(t){Ze._getMatrix(R1,Ze.workingColorSpace,t);let e=`mat3( ${R1.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Pc:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function C1(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),a=(t.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+rD(t.getShaderSource(e),o)}else return a}function lD(t,e){let n=oD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var cD={[P0]:"Linear",[B0]:"Reinhard",[z0]:"Cineon",[ru]:"ACESFilmic",[H0]:"AgX",[V0]:"Neutral",[F0]:"Custom"};function uD(t,e){let n=cD[e];return n===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Yd=new P;function hD(){Ze.getLuminanceCoefficients(Yd);let t=Yd.x.toFixed(4),e=Yd.y.toFixed(4),n=Yd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_u).join(`
`)}function dD(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function pD(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=t.getActiveAttrib(e,s),r=a.name,o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:t.getAttribLocation(e,r),locationSize:o}}return n}function _u(t){return t!==""}function D1(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function N1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var mD=/^[ \t]*#include +<([\w\d./]+)>/gm;function f_(t){return t.replace(mD,_D)}var gD=new Map;function _D(t,e){let n=qe[e];if(n===void 0){let i=gD.get(e);if(i!==void 0)n=qe[i],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return f_(n)}var vD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L1(t){return t.replace(vD,yD)}function yD(t,e,n,i){let s="";for(let a=parseInt(e);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function U1(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var xD={[au]:"SHADOWMAP_TYPE_PCF",[ml]:"SHADOWMAP_TYPE_VSM"};function SD(t){return xD[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var MD={[Wa]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[ou]:"ENVMAP_TYPE_CUBE_UV"};function bD(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":MD[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var TD={[Hr]:"ENVMAP_MODE_REFRACTION"};function AD(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":TD[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ED={[O0]:"ENVMAP_BLENDING_MULTIPLY",[jb]:"ENVMAP_BLENDING_MIX",[Qb]:"ENVMAP_BLENDING_ADD"};function wD(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":ED[t.combine]||"ENVMAP_BLENDING_NONE"}function RD(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function CD(t,e,n,i){let s=t.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=SD(n),c=bD(n),h=AD(n),f=wD(n),u=RD(n),d=fD(n),g=dD(a),x=s.createProgram(),m,p,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(_u).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(_u).join(`
`),p.length>0&&(p+=`
`)):(m=[U1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_u).join(`
`),p=[U1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?qe.tonemapping_pars_fragment:"",n.toneMapping!==Gi?uD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,lD("linearToOutputTexel",n.outputColorSpace),hD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_u).join(`
`)),r=f_(r),r=D1(r,n),r=N1(r,n),o=f_(o),o=D1(o,n),o=N1(o,n),r=L1(r),o=L1(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===J0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===J0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=_+m+r,v=_+p+o,A=w1(s,s.VERTEX_SHADER,M),T=w1(s,s.FRAGMENT_SHADER,v);s.attachShader(x,A),s.attachShader(x,T),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(I){if(t.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",q=s.getShaderInfoLog(A)||"",Y=s.getShaderInfoLog(T)||"",V=z.trim(),K=q.trim(),Z=Y.trim(),ie=!0,re=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ie=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,x,A,T);else{let de=C1(s,A,"vertex"),ge=C1(s,T,"fragment");Pe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+de+`
`+ge)}else V!==""?Re("WebGLProgram: Program Info Log:",V):(K===""||Z==="")&&(re=!1);re&&(I.diagnostics={runnable:ie,programLog:V,vertexShader:{log:K,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(A),s.deleteShader(T),y=new Sl(s,x),E=pD(s,x)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(x,sD)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aD++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=T,this}var DD=0,d_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new p_(e),n.set(e,i)),i}},p_=class{constructor(e){this.id=DD++,this.code=e,this.usedTimes=0}};function ND(t){return t===Ya||t===fu||t===du}function LD(t,e,n,i,s,a){let r=new Fc,o=new d_,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,E,D,I,z,q){let Y=I.fog,V=z.geometry,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ie=e.get(y.envMap||K,Z),re=ie&&ie.mapping===ou?ie.image.height:null,de=d[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Re("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let ge=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xe=ge!==void 0?ge.length:0,ze=0;V.morphAttributes.position!==void 0&&(ze=1),V.morphAttributes.normal!==void 0&&(ze=2),V.morphAttributes.color!==void 0&&(ze=3);let _t,Xe,$,he;if(de){let be=ds[de];_t=be.vertexShader,Xe=be.fragmentShader}else{_t=y.vertexShader,Xe=y.fragmentShader;let be=o.getVertexShaderStage(y),Vt=o.getFragmentShaderStage(y);o.update(y,be,Vt),$=be.id,he=Vt.id}let L=t.getRenderTarget(),De=t.state.buffers.depth.getReversed(),we=z.isInstancedMesh===!0,Ue=z.isBatchedMesh===!0,Ut=!!y.map,We=!!y.matcap,je=!!ie,Qe=!!y.aoMap,tt=!!y.lightMap,Ft=!!y.bumpMap&&y.wireframe===!1,Et=!!y.normalMap,qt=!!y.displacementMap,tn=!!y.emissiveMap,wt=!!y.metalnessMap,Ht=!!y.roughnessMap,B=y.anisotropy>0,wn=y.clearcoat>0,Ce=y.dispersion>0,R=y.iridescence>0,S=y.sheen>0,H=y.transmission>0,X=B&&!!y.anisotropyMap,J=wn&&!!y.clearcoatMap,le=wn&&!!y.clearcoatNormalMap,N=wn&&!!y.clearcoatRoughnessMap,C=R&&!!y.iridescenceMap,O=R&&!!y.iridescenceThicknessMap,Q=S&&!!y.sheenColorMap,oe=S&&!!y.sheenRoughnessMap,ee=!!y.specularMap,ae=!!y.specularColorMap,fe=!!y.specularIntensityMap,ce=H&&!!y.transmissionMap,_e=H&&!!y.thicknessMap,U=!!y.gradientMap,se=!!y.alphaMap,j=y.alphaTest>0,ue=!!y.alphaHash,pe=!!y.extensions,ne=Gi;y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ne=t.toneMapping);let Te={shaderID:de,shaderType:y.type,shaderName:y.name,vertexShader:_t,fragmentShader:Xe,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Ue,batchingColor:Ue&&z._colorsTexture!==null,instancing:we,instancingColor:we&&z.instanceColor!==null,instancingMorph:we&&z.morphTexture!==null,outputColorSpace:L===null?t.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ut,matcap:We,envMap:je,envMapMode:je&&ie.mapping,envMapCubeUVHeight:re,aoMap:Qe,lightMap:tt,bumpMap:Ft,normalMap:Et,displacementMap:qt,emissiveMap:tn,normalMapObjectSpace:Et&&y.normalMapType===n1,normalMapTangentSpace:Et&&y.normalMapType===kd,packedNormalMap:Et&&y.normalMapType===kd&&ND(y.normalMap.format),metalnessMap:wt,roughnessMap:Ht,anisotropy:B,anisotropyMap:X,clearcoat:wn,clearcoatMap:J,clearcoatNormalMap:le,clearcoatRoughnessMap:N,dispersion:Ce,iridescence:R,iridescenceMap:C,iridescenceThicknessMap:O,sheen:S,sheenColorMap:Q,sheenRoughnessMap:oe,specularMap:ee,specularColorMap:ae,specularIntensityMap:fe,transmission:H,transmissionMap:ce,thicknessMap:_e,gradientMap:U,opaque:y.transparent===!1&&y.blending===Ar&&y.alphaToCoverage===!1,alphaMap:se,alphaTest:j,alphaHash:ue,combine:y.combine,mapUv:Ut&&g(y.map.channel),aoMapUv:Qe&&g(y.aoMap.channel),lightMapUv:tt&&g(y.lightMap.channel),bumpMapUv:Ft&&g(y.bumpMap.channel),normalMapUv:Et&&g(y.normalMap.channel),displacementMapUv:qt&&g(y.displacementMap.channel),emissiveMapUv:tn&&g(y.emissiveMap.channel),metalnessMapUv:wt&&g(y.metalnessMap.channel),roughnessMapUv:Ht&&g(y.roughnessMap.channel),anisotropyMapUv:X&&g(y.anisotropyMap.channel),clearcoatMapUv:J&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:C&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:O&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:oe&&g(y.sheenRoughnessMap.channel),specularMapUv:ee&&g(y.specularMap.channel),specularColorMapUv:ae&&g(y.specularColorMap.channel),specularIntensityMapUv:fe&&g(y.specularIntensityMap.channel),transmissionMapUv:ce&&g(y.transmissionMap.channel),thicknessMapUv:_e&&g(y.thicknessMap.channel),alphaMapUv:se&&g(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Et||B),vertexNormals:!!V.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(Ut||se),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||V.attributes.normal===void 0&&Et===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:De,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ut&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===ct,decodeVideoTextureEmissive:tn&&y.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(y.emissiveMap.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===En,flipSided:y.side===An,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:pe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&y.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)E.push(D),E.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(p(E,y),_(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function _(y,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function M(y){let E=d[y.type],D;if(E){let I=ds[E];D=p1.clone(I.uniforms)}else D=y.uniforms;return D}function v(y,E){let D=h.get(E);return D!==void 0?++D.usedTimes:(D=new CD(t,E,y,s),c.push(D),h.set(E,D)),D}function A(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:w}}function UD(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function i(r){t.delete(r)}function s(r,o,l){t.get(r)[o]=l}function a(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:a}}function ID(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function I1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function O1(){let t=[],e=0,n=[],i=[],s=[];function a(){e=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,x,m,p){let _=t[e];return _===void 0?(_={id:u.id,object:u,geometry:d,material:g,materialVariant:r(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},t[e]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=g,_.materialVariant=r(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=m,_.group=p),e++,_}function l(u,d,g,x,m,p){let _=o(u,d,g,x,m,p);g.transmission>0?i.push(_):g.transparent===!0?s.push(_):n.push(_)}function c(u,d,g,x,m,p){let _=o(u,d,g,x,m,p);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):n.unshift(_)}function h(u,d,g){n.length>1&&n.sort(u||ID),i.length>1&&i.sort(d||I1),s.length>1&&s.sort(d||I1),g&&(n.reverse(),i.reverse(),s.reverse())}function f(){for(let u=e,d=t.length;u<d;u++){let g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:f,sort:h}}function OD(){let t=new WeakMap;function e(i,s){let a=t.get(i),r;return a===void 0?(r=new O1,t.set(i,[r])):s>=a.length?(r=new O1,a.push(r)):r=a[s],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function PD(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new Ie};break;case"SpotLight":n={position:new P,direction:new P,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":n={color:new Ie,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function BD(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var zD=0;function FD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function HD(t){let e=new PD,n=BD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,a=new ke,r=new ke;function o(c){let h=0,f=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,_=0,M=0,v=0,A=0,T=0,w=0;c.sort(FD);for(let E=0,D=c.length;E<D;E++){let I=c[E],z=I.color,q=I.intensity,Y=I.distance,V=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ya?V=I.shadow.map.texture:V=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*q,f+=z.g*q,u+=z.b*q;else if(I.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(I.sh.coefficients[K],q);w++}else if(I.isDirectionalLight){let K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,ie=n.get(I);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,i.directionalShadow[d]=ie,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=I.shadow.matrix,_++}i.directional[d]=K,d++}else if(I.isSpotLight){let K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(z).multiplyScalar(q),K.distance=Y,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,i.spot[x]=K;let Z=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,Z.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[x]=Z.matrix,I.castShadow){let ie=n.get(I);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,i.spotShadow[x]=ie,i.spotShadowMap[x]=V,v++}x++}else if(I.isRectAreaLight){let K=e.get(I);K.color.copy(z).multiplyScalar(q),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=K,m++}else if(I.isPointLight){let K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){let Z=I.shadow,ie=n.get(I);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,ie.shadowCameraNear=Z.camera.near,ie.shadowCameraFar=Z.camera.far,i.pointShadow[g]=ie,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=I.shadow.matrix,M++}i.point[g]=K,g++}else if(I.isHemisphereLight){let K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(q),K.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[p]=K,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let y=i.hash;(y.directionalLength!==d||y.pointLength!==g||y.spotLength!==x||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==_||y.numPointShadows!==M||y.numSpotShadows!==v||y.numSpotMaps!==A||y.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,y.directionalLength=d,y.pointLength=g,y.spotLength=x,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=_,y.numPointShadows=M,y.numSpotShadows=v,y.numSpotMaps=A,y.numLightProbes=w,i.version=zD++)}function l(c,h){let f=0,u=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let M=c[p];if(M.isDirectionalLight){let v=i.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),r.identity(),a.copy(M.matrixWorld),a.premultiply(m),r.extractRotation(a),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){let v=i.point[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function P1(t){let e=new HD(t),n=[],i=[],s=[];function a(u){f.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(n)}function h(u){e.setupView(n,u)}let f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function VD(t){let e=new WeakMap;function n(s,a=0){let r=e.get(s),o;return r===void 0?(o=new P1(t),e.set(s,[o])):a>=r.length?(o=new P1(t),r.push(o)):o=r[a],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var GD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kD=`uniform sampler2D shadow_pass;
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
}`,XD=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],WD=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],B1=new ke,gu=new P,o_=new P;function qD(t,e,n){let i=new fl,s=new Oe,a=new Oe,r=new dt,o=new Wf,l=new qf,c={},h=n.maxTextureSize,f={[Hi]:An,[An]:Hi,[En]:En},u=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:GD,fragmentShader:kD}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Bt;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new lt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let p=this.type;this.render=function(T,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===nd&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=au);let E=t.getRenderTarget(),D=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),z=t.state;z.setBlending(us),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=p!==this.type;q&&w.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(V=>V.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,V=T.length;Y<V;Y++){let K=T[Y],Z=K.shadow;if(Z===void 0){Re("WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ie=Z.getFrameExtents();s.multiply(ie),a.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/ie.x),s.x=a.x*ie.x,Z.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/ie.y),s.y=a.y*ie.y,Z.mapSize.y=a.y));let re=t.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=re,Z.map===null||q===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ml){if(K.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new hi(s.x,s.y,{format:Ya,type:hs,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),Z.map.texture.name=K.name+".shadowMap",Z.map.depthTexture=new Xs(s.x,s.y,di),Z.map.depthTexture.name=K.name+".shadowMapDepth",Z.map.depthTexture.format=as,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=jt,Z.map.depthTexture.magFilter=jt}else K.isPointLight?(Z.map=new Kd(s.x),Z.map.depthTexture=new kf(s.x,Xi)):(Z.map=new hi(s.x,s.y),Z.map.depthTexture=new Xs(s.x,s.y,Xi)),Z.map.depthTexture.name=K.name+".shadowMap",Z.map.depthTexture.format=as,this.type===au?(Z.map.depthTexture.compareFunction=re?Wd:Xd,Z.map.depthTexture.minFilter=Qt,Z.map.depthTexture.magFilter=Qt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=jt,Z.map.depthTexture.magFilter=jt);Z.camera.updateProjectionMatrix()}let de=Z.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<de;ge++){if(Z.map.isWebGLCubeRenderTarget)t.setRenderTarget(Z.map,ge),t.clear();else{ge===0&&(t.setRenderTarget(Z.map),t.clear());let xe=Z.getViewport(ge);r.set(a.x*xe.x,a.y*xe.y,a.x*xe.z,a.y*xe.w),z.viewport(r)}if(K.isPointLight){let xe=Z.camera,ze=Z.matrix,_t=K.distance||xe.far;_t!==xe.far&&(xe.far=_t,xe.updateProjectionMatrix()),gu.setFromMatrixPosition(K.matrixWorld),xe.position.copy(gu),o_.copy(xe.position),o_.add(XD[ge]),xe.up.copy(WD[ge]),xe.lookAt(o_),xe.updateMatrixWorld(),ze.makeTranslation(-gu.x,-gu.y,-gu.z),B1.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(B1,xe.coordinateSystem,xe.reversedDepth)}else Z.updateMatrices(K);i=Z.getFrustum(),v(w,y,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===ml&&_(Z,y),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(E,D,I)};function _(T,w){let y=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new hi(s.x,s.y,{format:Ya,type:hs})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,y,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,y,d,x,null)}function M(T,w,y,E){let D=null,I=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)D=I;else if(D=y.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let z=D.uuid,q=w.uuid,Y=c[z];Y===void 0&&(Y={},c[z]=Y);let V=Y[q];V===void 0&&(V=D.clone(),Y[q]=V,w.addEventListener("dispose",A)),D=V}if(D.visible=w.visible,D.wireframe=w.wireframe,E===ml?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:f[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let z=t.properties.get(D);z.light=y}return D}function v(T,w,y,E,D){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===ml)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let q=e.update(T),Y=T.material;if(Array.isArray(Y)){let V=q.groups;for(let K=0,Z=V.length;K<Z;K++){let ie=V[K],re=Y[ie.materialIndex];if(re&&re.visible){let de=M(T,re,E,D);T.onBeforeShadow(t,T,w,y,q,de,ie),t.renderBufferDirect(y,null,q,de,T,ie),T.onAfterShadow(t,T,w,y,q,de,ie)}}}else if(Y.visible){let V=M(T,Y,E,D);T.onBeforeShadow(t,T,w,y,q,V,null),t.renderBufferDirect(y,null,q,V,T,null),T.onAfterShadow(t,T,w,y,q,V,null)}}let z=T.children;for(let q=0,Y=z.length;q<Y;q++)v(z[q],w,y,E,D)}function A(T){T.target.removeEventListener("dispose",A);for(let y in c){let E=c[y],D=T.target.uuid;D in E&&(E[D].dispose(),delete E[D])}}}function YD(t,e){function n(){let U=!1,se=new dt,j=null,ue=new dt(0,0,0,0);return{setMask:function(pe){j!==pe&&!U&&(t.colorMask(pe,pe,pe,pe),j=pe)},setLocked:function(pe){U=pe},setClear:function(pe,ne,Te,be,Vt){Vt===!0&&(pe*=be,ne*=be,Te*=be),se.set(pe,ne,Te,be),ue.equals(se)===!1&&(t.clearColor(pe,ne,Te,be),ue.copy(se))},reset:function(){U=!1,j=null,ue.set(-1,0,0,0)}}}function i(){let U=!1,se=!1,j=null,ue=null,pe=null;return{setReversed:function(ne){if(se!==ne){let Te=e.get("EXT_clip_control");ne?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),se=ne;let be=pe;pe=null,this.setClear(be)}},getReversed:function(){return se},setTest:function(ne){ne?L(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(ne){j!==ne&&!U&&(t.depthMask(ne),j=ne)},setFunc:function(ne){if(se&&(ne=f1[ne]),ue!==ne){switch(ne){case Df:t.depthFunc(t.NEVER);break;case Nf:t.depthFunc(t.ALWAYS);break;case Lf:t.depthFunc(t.LESS);break;case Er:t.depthFunc(t.LEQUAL);break;case Uf:t.depthFunc(t.EQUAL);break;case If:t.depthFunc(t.GEQUAL);break;case Of:t.depthFunc(t.GREATER);break;case Pf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=ne}},setLocked:function(ne){U=ne},setClear:function(ne){pe!==ne&&(pe=ne,se&&(ne=1-ne),t.clearDepth(ne))},reset:function(){U=!1,j=null,ue=null,pe=null,se=!1}}}function s(){let U=!1,se=null,j=null,ue=null,pe=null,ne=null,Te=null,be=null,Vt=null;return{setTest:function(Mt){U||(Mt?L(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(Mt){se!==Mt&&!U&&(t.stencilMask(Mt),se=Mt)},setFunc:function(Mt,Wi,qi){(j!==Mt||ue!==Wi||pe!==qi)&&(t.stencilFunc(Mt,Wi,qi),j=Mt,ue=Wi,pe=qi)},setOp:function(Mt,Wi,qi){(ne!==Mt||Te!==Wi||be!==qi)&&(t.stencilOp(Mt,Wi,qi),ne=Mt,Te=Wi,be=qi)},setLocked:function(Mt){U=Mt},setClear:function(Mt){Vt!==Mt&&(t.clearStencil(Mt),Vt=Mt)},reset:function(){U=!1,se=null,j=null,ue=null,pe=null,ne=null,Te=null,be=null,Vt=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],x=null,m=!1,p=null,_=null,M=null,v=null,A=null,T=null,w=null,y=new Ie(0,0,0),E=0,D=!1,I=null,z=null,q=null,Y=null,V=null,K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ie=0,re=t.getParameter(t.VERSION);re.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(re)[1]),Z=ie>=1):re.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),Z=ie>=2);let de=null,ge={},xe=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),_t=new dt().fromArray(xe),Xe=new dt().fromArray(ze);function $(U,se,j,ue){let pe=new Uint8Array(4),ne=t.createTexture();t.bindTexture(U,ne),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<j;Te++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(se+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return ne}let he={};he[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),L(t.DEPTH_TEST),r.setFunc(Er),Ft(!1),Et(N0),L(t.CULL_FACE),Qe(us);function L(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function De(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function we(U,se){return u[U]!==se?(t.bindFramebuffer(U,se),u[U]=se,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=se),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Ue(U,se){let j=g,ue=!1;if(U){j=d.get(se),j===void 0&&(j=[],d.set(se,j));let pe=U.textures;if(j.length!==pe.length||j[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,Te=pe.length;ne<Te;ne++)j[ne]=t.COLOR_ATTACHMENT0+ne;j.length=pe.length,ue=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,ue=!0);ue&&t.drawBuffers(j)}function Ut(U){return x!==U?(t.useProgram(U),x=U,!0):!1}let We={[Ba]:t.FUNC_ADD,[Ib]:t.FUNC_SUBTRACT,[Ob]:t.FUNC_REVERSE_SUBTRACT};We[Pb]=t.MIN,We[Bb]=t.MAX;let je={[zb]:t.ZERO,[Fb]:t.ONE,[Hb]:t.SRC_COLOR,[Rf]:t.SRC_ALPHA,[qb]:t.SRC_ALPHA_SATURATE,[Xb]:t.DST_COLOR,[Gb]:t.DST_ALPHA,[Vb]:t.ONE_MINUS_SRC_COLOR,[Cf]:t.ONE_MINUS_SRC_ALPHA,[Wb]:t.ONE_MINUS_DST_COLOR,[kb]:t.ONE_MINUS_DST_ALPHA,[Yb]:t.CONSTANT_COLOR,[Zb]:t.ONE_MINUS_CONSTANT_COLOR,[Kb]:t.CONSTANT_ALPHA,[Jb]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(U,se,j,ue,pe,ne,Te,be,Vt,Mt){if(U===us){m===!0&&(De(t.BLEND),m=!1);return}if(m===!1&&(L(t.BLEND),m=!0),U!==Ub){if(U!==p||Mt!==D){if((_!==Ba||A!==Ba)&&(t.blendEquation(t.FUNC_ADD),_=Ba,A=Ba),Mt)switch(U){case Ar:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case L0:t.blendFunc(t.ONE,t.ONE);break;case U0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case I0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Pe("WebGLState: Invalid blending: ",U);break}else switch(U){case Ar:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case L0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case U0:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case I0:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",U);break}M=null,v=null,T=null,w=null,y.set(0,0,0),E=0,p=U,D=Mt}return}pe=pe||se,ne=ne||j,Te=Te||ue,(se!==_||pe!==A)&&(t.blendEquationSeparate(We[se],We[pe]),_=se,A=pe),(j!==M||ue!==v||ne!==T||Te!==w)&&(t.blendFuncSeparate(je[j],je[ue],je[ne],je[Te]),M=j,v=ue,T=ne,w=Te),(be.equals(y)===!1||Vt!==E)&&(t.blendColor(be.r,be.g,be.b,Vt),y.copy(be),E=Vt),p=U,D=!1}function tt(U,se){U.side===En?De(t.CULL_FACE):L(t.CULL_FACE);let j=U.side===An;se&&(j=!j),Ft(j),U.blending===Ar&&U.transparent===!1?Qe(us):Qe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);let ue=U.stencilWrite;o.setTest(ue),ue&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),tn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?L(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(U){I!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),I=U)}function Et(U){U!==Nb?(L(t.CULL_FACE),U!==z&&(U===N0?t.cullFace(t.BACK):U===Lb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),z=U}function qt(U){U!==q&&(Z&&t.lineWidth(U),q=U)}function tn(U,se,j){U?(L(t.POLYGON_OFFSET_FILL),(Y!==se||V!==j)&&(Y=se,V=j,r.getReversed()&&(se=-se),t.polygonOffset(se,j))):De(t.POLYGON_OFFSET_FILL)}function wt(U){U?L(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function Ht(U){U===void 0&&(U=t.TEXTURE0+K-1),de!==U&&(t.activeTexture(U),de=U)}function B(U,se,j){j===void 0&&(de===null?j=t.TEXTURE0+K-1:j=de);let ue=ge[j];ue===void 0&&(ue={type:void 0,texture:void 0},ge[j]=ue),(ue.type!==U||ue.texture!==se)&&(de!==j&&(t.activeTexture(j),de=j),t.bindTexture(U,se||he[U]),ue.type=U,ue.texture=se)}function wn(){let U=ge[de];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ce(){try{t.compressedTexImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function S(){try{t.texSubImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function H(){try{t.texSubImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function le(){try{t.texStorage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function N(){try{t.texStorage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function C(){try{t.texImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function O(){try{t.texImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function Q(U){return f[U]!==void 0?f[U]:t.getParameter(U)}function oe(U,se){f[U]!==se&&(t.pixelStorei(U,se),f[U]=se)}function ee(U){_t.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),_t.copy(U))}function ae(U){Xe.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Xe.copy(U))}function fe(U,se){let j=c.get(se);j===void 0&&(j=new WeakMap,c.set(se,j));let ue=j.get(U);ue===void 0&&(ue=t.getUniformBlockIndex(se,U.name),j.set(U,ue))}function ce(U,se){let ue=c.get(se).get(U);l.get(se)!==ue&&(t.uniformBlockBinding(se,ue,U.__bindingPointIndex),l.set(se,ue))}function _e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},f={},de=null,ge={},u={},d=new WeakMap,g=[],x=null,m=!1,p=null,_=null,M=null,v=null,A=null,T=null,w=null,y=new Ie(0,0,0),E=0,D=!1,I=null,z=null,q=null,Y=null,V=null,_t.set(0,0,t.canvas.width,t.canvas.height),Xe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:L,disable:De,bindFramebuffer:we,drawBuffers:Ue,useProgram:Ut,setBlending:Qe,setMaterial:tt,setFlipSided:Ft,setCullFace:Et,setLineWidth:qt,setPolygonOffset:tn,setScissorTest:wt,activeTexture:Ht,bindTexture:B,unbindTexture:wn,compressedTexImage2D:Ce,compressedTexImage3D:R,texImage2D:C,texImage3D:O,pixelStorei:oe,getParameter:Q,updateUBOMapping:fe,uniformBlockBinding:ce,texStorage2D:le,texStorage3D:N,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:J,scissor:ee,viewport:ae,reset:_e}}function ZD(t,e,n,i,s,a,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,S){return g?new OffscreenCanvas(R,S):sl("canvas")}function m(R,S,H){let X=1,J=Ce(R);if((J.width>H||J.height>H)&&(X=H/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let le=Math.floor(X*J.width),N=Math.floor(X*J.height);u===void 0&&(u=x(le,N));let C=S?x(le,N):u;return C.width=le,C.height=N,C.getContext("2d").drawImage(R,0,0,le,N),Re("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+le+"x"+N+")."),C}else return"data"in R&&Re("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function p(R){return R.generateMipmaps}function _(R){t.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(R,S,H,X,J,le=!1){if(R!==null){if(t[R]!==void 0)return t[R];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let N;X&&(N=e.get("EXT_texture_norm16"),N||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let C=S;if(S===t.RED&&(H===t.FLOAT&&(C=t.R32F),H===t.HALF_FLOAT&&(C=t.R16F),H===t.UNSIGNED_BYTE&&(C=t.R8),H===t.UNSIGNED_SHORT&&N&&(C=N.R16_EXT),H===t.SHORT&&N&&(C=N.R16_SNORM_EXT)),S===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(C=t.R8UI),H===t.UNSIGNED_SHORT&&(C=t.R16UI),H===t.UNSIGNED_INT&&(C=t.R32UI),H===t.BYTE&&(C=t.R8I),H===t.SHORT&&(C=t.R16I),H===t.INT&&(C=t.R32I)),S===t.RG&&(H===t.FLOAT&&(C=t.RG32F),H===t.HALF_FLOAT&&(C=t.RG16F),H===t.UNSIGNED_BYTE&&(C=t.RG8),H===t.UNSIGNED_SHORT&&N&&(C=N.RG16_EXT),H===t.SHORT&&N&&(C=N.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(C=t.RG8UI),H===t.UNSIGNED_SHORT&&(C=t.RG16UI),H===t.UNSIGNED_INT&&(C=t.RG32UI),H===t.BYTE&&(C=t.RG8I),H===t.SHORT&&(C=t.RG16I),H===t.INT&&(C=t.RG32I)),S===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(C=t.RGB8UI),H===t.UNSIGNED_SHORT&&(C=t.RGB16UI),H===t.UNSIGNED_INT&&(C=t.RGB32UI),H===t.BYTE&&(C=t.RGB8I),H===t.SHORT&&(C=t.RGB16I),H===t.INT&&(C=t.RGB32I)),S===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(C=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(C=t.RGBA16UI),H===t.UNSIGNED_INT&&(C=t.RGBA32UI),H===t.BYTE&&(C=t.RGBA8I),H===t.SHORT&&(C=t.RGBA16I),H===t.INT&&(C=t.RGBA32I)),S===t.RGB&&(H===t.UNSIGNED_SHORT&&N&&(C=N.RGB16_EXT),H===t.SHORT&&N&&(C=N.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(C=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(C=t.R11F_G11F_B10F)),S===t.RGBA){let O=le?Pc:Ze.getTransfer(J);H===t.FLOAT&&(C=t.RGBA32F),H===t.HALF_FLOAT&&(C=t.RGBA16F),H===t.UNSIGNED_BYTE&&(C=O===ct?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&N&&(C=N.RGBA16_EXT),H===t.SHORT&&N&&(C=N.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(C=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(C=t.RGB5_A1)}return(C===t.R16F||C===t.R32F||C===t.RG16F||C===t.RG32F||C===t.RGBA16F||C===t.RGBA32F)&&e.get("EXT_color_buffer_float"),C}function A(R,S){let H;return R?S===null||S===Xi||S===vl?H=t.DEPTH24_STENCIL8:S===di?H=t.DEPTH32F_STENCIL8:S===_l&&(H=t.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Xi||S===vl?H=t.DEPTH_COMPONENT24:S===di?H=t.DEPTH_COMPONENT32F:S===_l&&(H=t.DEPTH_COMPONENT16),H}function T(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==Qt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){let S=R.target;S.removeEventListener("dispose",w),E(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&f.delete(S)}function y(R){let S=R.target;S.removeEventListener("dispose",y),I(S)}function E(R){let S=i.get(R);if(S.__webglInit===void 0)return;let H=R.source,X=d.get(H);if(X){let J=X[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&D(R),Object.keys(X).length===0&&d.delete(H)}i.remove(R)}function D(R){let S=i.get(R);t.deleteTexture(S.__webglTexture);let H=R.source,X=d.get(H);delete X[S.__cacheKey],r.memory.textures--}function I(R){let S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let J=0;J<S.__webglFramebuffer[X].length;J++)t.deleteFramebuffer(S.__webglFramebuffer[X][J]);else t.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)t.deleteFramebuffer(S.__webglFramebuffer[X]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=R.textures;for(let X=0,J=H.length;X<J;X++){let le=i.get(H[X]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),r.memory.textures--),i.remove(H[X])}i.remove(R)}let z=0;function q(){z=0}function Y(){return z}function V(R){z=R}function K(){let R=z;return R>=s.maxTextures&&Re("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),z+=1,R}function Z(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function ie(R,S){let H=i.get(R);if(R.isVideoTexture&&B(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let X=R.image;if(X===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{De(H,R,S);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+S)}function re(R,S){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){De(H,R,S);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+S)}function de(R,S){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){De(H,R,S);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+S)}function ge(R,S){let H=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){we(H,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+S)}let xe={[za]:t.REPEAT,[Ri]:t.CLAMP_TO_EDGE,[nl]:t.MIRRORED_REPEAT},ze={[jt]:t.NEAREST,[ad]:t.NEAREST_MIPMAP_NEAREST,[Vr]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[gl]:t.LINEAR_MIPMAP_NEAREST,[ki]:t.LINEAR_MIPMAP_LINEAR},_t={[i1]:t.NEVER,[l1]:t.ALWAYS,[s1]:t.LESS,[Xd]:t.LEQUAL,[a1]:t.EQUAL,[Wd]:t.GEQUAL,[r1]:t.GREATER,[o1]:t.NOTEQUAL};function Xe(R,S){if(S.type===di&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Qt||S.magFilter===gl||S.magFilter===Vr||S.magFilter===ki||S.minFilter===Qt||S.minFilter===gl||S.minFilter===Vr||S.minFilter===ki)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,xe[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,xe[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,xe[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ze[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ze[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jt||S.minFilter!==Vr&&S.minFilter!==ki||S.type===di&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function $(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));let X=S.source,J=d.get(X);J===void 0&&(J={},d.set(X,J));let le=Z(S);if(le!==R.__cacheKey){J[le]===void 0&&(J[le]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,H=!0),J[le].usedTimes++;let N=J[R.__cacheKey];N!==void 0&&(J[R.__cacheKey].usedTimes--,N.usedTimes===0&&D(S)),R.__cacheKey=le,R.__webglTexture=J[le].texture}return H}function he(R,S,H){return Math.floor(Math.floor(R/H)/S)}function L(R,S,H,X){let le=R.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,H,X,S.data);else{le.sort((oe,ee)=>oe.start-ee.start);let N=0;for(let oe=1;oe<le.length;oe++){let ee=le[N],ae=le[oe],fe=ee.start+ee.count,ce=he(ae.start,S.width,4),_e=he(ee.start,S.width,4);ae.start<=fe+1&&ce===_e&&he(ae.start+ae.count-1,S.width,4)===ce?ee.count=Math.max(ee.count,ae.start+ae.count-ee.start):(++N,le[N]=ae)}le.length=N+1;let C=n.getParameter(t.UNPACK_ROW_LENGTH),O=n.getParameter(t.UNPACK_SKIP_PIXELS),Q=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let oe=0,ee=le.length;oe<ee;oe++){let ae=le[oe],fe=Math.floor(ae.start/4),ce=Math.ceil(ae.count/4),_e=fe%S.width,U=Math.floor(fe/S.width),se=ce,j=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,_e,U,se,j,H,X,S.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,C),n.pixelStorei(t.UNPACK_SKIP_PIXELS,O),n.pixelStorei(t.UNPACK_SKIP_ROWS,Q)}}function De(R,S,H){let X=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=t.TEXTURE_3D);let J=$(R,S),le=S.source;n.bindTexture(X,R.__webglTexture,t.TEXTURE0+H);let N=i.get(le);if(le.version!==N.__version||J===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let j=Ze.getPrimaries(Ze.workingColorSpace),ue=S.colorSpace===Qs?null:Ze.getPrimaries(S.colorSpace),pe=S.colorSpace===Qs||j===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let O=m(S.image,!1,s.maxTextureSize);O=wn(S,O);let Q=a.convert(S.format,S.colorSpace),oe=a.convert(S.type),ee=v(S.internalFormat,Q,oe,S.normalized,S.colorSpace,S.isVideoTexture);Xe(X,S);let ae,fe=S.mipmaps,ce=S.isVideoTexture!==!0,_e=N.__version===void 0||J===!0,U=le.dataReady,se=T(S,O);if(S.isDepthTexture)ee=A(S.format===qa,S.type),_e&&(ce?n.texStorage2D(t.TEXTURE_2D,1,ee,O.width,O.height):n.texImage2D(t.TEXTURE_2D,0,ee,O.width,O.height,0,Q,oe,null));else if(S.isDataTexture)if(fe.length>0){ce&&_e&&n.texStorage2D(t.TEXTURE_2D,se,ee,fe[0].width,fe[0].height);for(let j=0,ue=fe.length;j<ue;j++)ae=fe[j],ce?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ae.width,ae.height,Q,oe,ae.data):n.texImage2D(t.TEXTURE_2D,j,ee,ae.width,ae.height,0,Q,oe,ae.data);S.generateMipmaps=!1}else ce?(_e&&n.texStorage2D(t.TEXTURE_2D,se,ee,O.width,O.height),U&&L(S,O,Q,oe)):n.texImage2D(t.TEXTURE_2D,0,ee,O.width,O.height,0,Q,oe,O.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ce&&_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,ee,fe[0].width,fe[0].height,O.depth);for(let j=0,ue=fe.length;j<ue;j++)if(ae=fe[j],S.format!==pi)if(Q!==null)if(ce){if(U)if(S.layerUpdates.size>0){let pe=t_(ae.width,ae.height,S.format,S.type);for(let ne of S.layerUpdates){let Te=ae.data.subarray(ne*pe/ae.data.BYTES_PER_ELEMENT,(ne+1)*pe/ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,ne,ae.width,ae.height,1,Q,Te)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ae.width,ae.height,O.depth,Q,ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,ee,ae.width,ae.height,O.depth,0,ae.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ae.width,ae.height,O.depth,Q,oe,ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,ee,ae.width,ae.height,O.depth,0,Q,oe,ae.data)}else{ce&&_e&&n.texStorage2D(t.TEXTURE_2D,se,ee,fe[0].width,fe[0].height);for(let j=0,ue=fe.length;j<ue;j++)ae=fe[j],S.format!==pi?Q!==null?ce?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,ae.width,ae.height,Q,ae.data):n.compressedTexImage2D(t.TEXTURE_2D,j,ee,ae.width,ae.height,0,ae.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ae.width,ae.height,Q,oe,ae.data):n.texImage2D(t.TEXTURE_2D,j,ee,ae.width,ae.height,0,Q,oe,ae.data)}else if(S.isDataArrayTexture)if(ce){if(_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,ee,O.width,O.height,O.depth),U)if(S.layerUpdates.size>0){let j=t_(O.width,O.height,S.format,S.type);for(let ue of S.layerUpdates){let pe=O.data.subarray(ue*j/O.data.BYTES_PER_ELEMENT,(ue+1)*j/O.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,O.width,O.height,1,Q,oe,pe)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,Q,oe,O.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ee,O.width,O.height,O.depth,0,Q,oe,O.data);else if(S.isData3DTexture)ce?(_e&&n.texStorage3D(t.TEXTURE_3D,se,ee,O.width,O.height,O.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,Q,oe,O.data)):n.texImage3D(t.TEXTURE_3D,0,ee,O.width,O.height,O.depth,0,Q,oe,O.data);else if(S.isFramebufferTexture){if(_e)if(ce)n.texStorage2D(t.TEXTURE_2D,se,ee,O.width,O.height);else{let j=O.width,ue=O.height;for(let pe=0;pe<se;pe++)n.texImage2D(t.TEXTURE_2D,pe,ee,j,ue,0,Q,oe,null),j>>=1,ue>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){let j=t.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),O.parentNode!==j){j.appendChild(O),f.add(S),j.onpaint=ue=>{let pe=ue.changedElements;for(let ne of f)pe.includes(ne.image)&&(ne.needsUpdate=!0)},j.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,O);else{let pe=t.RGBA,ne=t.RGBA,Te=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,pe,ne,Te,O)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(fe.length>0){if(ce&&_e){let j=Ce(fe[0]);n.texStorage2D(t.TEXTURE_2D,se,ee,j.width,j.height)}for(let j=0,ue=fe.length;j<ue;j++)ae=fe[j],ce?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,Q,oe,ae):n.texImage2D(t.TEXTURE_2D,j,ee,Q,oe,ae);S.generateMipmaps=!1}else if(ce){if(_e){let j=Ce(O);n.texStorage2D(t.TEXTURE_2D,se,ee,j.width,j.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q,oe,O)}else n.texImage2D(t.TEXTURE_2D,0,ee,Q,oe,O);p(S)&&_(X),N.__version=le.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function we(R,S,H){if(S.image.length!==6)return;let X=$(R,S),J=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);let le=i.get(J);if(J.version!==le.__version||X===!0){n.activeTexture(t.TEXTURE0+H);let N=Ze.getPrimaries(Ze.workingColorSpace),C=S.colorSpace===Qs?null:Ze.getPrimaries(S.colorSpace),O=S.colorSpace===Qs||N===C?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);let Q=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let ne=0;ne<6;ne++)!Q&&!oe?ee[ne]=m(S.image[ne],!0,s.maxCubemapSize):ee[ne]=oe?S.image[ne].image:S.image[ne],ee[ne]=wn(S,ee[ne]);let ae=ee[0],fe=a.convert(S.format,S.colorSpace),ce=a.convert(S.type),_e=v(S.internalFormat,fe,ce,S.normalized,S.colorSpace),U=S.isVideoTexture!==!0,se=le.__version===void 0||X===!0,j=J.dataReady,ue=T(S,ae);Xe(t.TEXTURE_CUBE_MAP,S);let pe;if(Q){U&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,_e,ae.width,ae.height);for(let ne=0;ne<6;ne++){pe=ee[ne].mipmaps;for(let Te=0;Te<pe.length;Te++){let be=pe[Te];S.format!==pi?fe!==null?U?j&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,0,0,be.width,be.height,fe,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,_e,be.width,be.height,0,be.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,0,0,be.width,be.height,fe,ce,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,_e,be.width,be.height,0,fe,ce,be.data)}}}else{if(pe=S.mipmaps,U&&se){pe.length>0&&ue++;let ne=Ce(ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,_e,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){U?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ee[ne].width,ee[ne].height,fe,ce,ee[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,_e,ee[ne].width,ee[ne].height,0,fe,ce,ee[ne].data);for(let Te=0;Te<pe.length;Te++){let Vt=pe[Te].image[ne].image;U?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,0,0,Vt.width,Vt.height,fe,ce,Vt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,_e,Vt.width,Vt.height,0,fe,ce,Vt.data)}}else{U?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,fe,ce,ee[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,_e,fe,ce,ee[ne]);for(let Te=0;Te<pe.length;Te++){let be=pe[Te];U?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,0,0,fe,ce,be.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,_e,fe,ce,be.image[ne])}}}p(S)&&_(t.TEXTURE_CUBE_MAP),le.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ue(R,S,H,X,J,le){let N=a.convert(H.format,H.colorSpace),C=a.convert(H.type),O=v(H.internalFormat,N,C,H.normalized,H.colorSpace),Q=i.get(S),oe=i.get(H);if(oe.__renderTarget=S,!Q.__hasExternalTextures){let ee=Math.max(1,S.width>>le),ae=Math.max(1,S.height>>le);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,le,O,ee,ae,S.depth,0,N,C,null):n.texImage2D(J,le,O,ee,ae,0,N,C,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ht(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,J,oe.__webglTexture,0,wt(S)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,J,oe.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ut(R,S,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){let X=S.depthTexture,J=X&&X.isDepthTexture?X.type:null,le=A(S.stencilBuffer,J),N=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ht(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,wt(S),le,S.width,S.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,wt(S),le,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,le,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,N,t.RENDERBUFFER,R)}else{let X=S.textures;for(let J=0;J<X.length;J++){let le=X[J],N=a.convert(le.format,le.colorSpace),C=a.convert(le.type),O=v(le.internalFormat,N,C,le.normalized,le.colorSpace);Ht(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,wt(S),O,S.width,S.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,wt(S),O,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,O,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(R,S,H){let X=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(S.depthTexture);if(J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X){if(J.__webglInit===void 0&&(J.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,S.depthTexture);let Q=a.convert(S.depthTexture.format),oe=a.convert(S.depthTexture.type),ee;S.depthTexture.format===as?ee=t.DEPTH_COMPONENT24:S.depthTexture.format===qa&&(ee=t.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ee,S.width,S.height,0,Q,oe,null)}}else ie(S.depthTexture,0);let le=J.__webglTexture,N=wt(S),C=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,O=S.depthTexture.format===qa?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===as)Ht(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,O,C,le,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,O,C,le,0);else if(S.depthTexture.format===qa)Ht(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,O,C,le,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,O,C,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(R){let S=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let X=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){let J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=X}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)We(S.__webglFramebuffer[X],R,X);else{let X=R.texture.mipmaps;X&&X.length>0?We(S.__webglFramebuffer[0],R,0):We(S.__webglFramebuffer,R,0)}else if(H){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=t.createRenderbuffer(),Ut(S.__webglDepthbuffer[X],R,!1);else{let J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,le)}}else{let X=R.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Ut(S.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(R,S,H){let X=i.get(R);S!==void 0&&Ue(X.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&je(R)}function tt(R){let S=R.texture,H=i.get(R),X=i.get(S);R.addEventListener("dispose",y);let J=R.textures,le=R.isWebGLCubeRenderTarget===!0,N=J.length>1;if(N||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=S.version,r.memory.textures++),le){H.__webglFramebuffer=[];for(let C=0;C<6;C++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[C]=[];for(let O=0;O<S.mipmaps.length;O++)H.__webglFramebuffer[C][O]=t.createFramebuffer()}else H.__webglFramebuffer[C]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let C=0;C<S.mipmaps.length;C++)H.__webglFramebuffer[C]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(N)for(let C=0,O=J.length;C<O;C++){let Q=i.get(J[C]);Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture(),r.memory.textures++)}if(R.samples>0&&Ht(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let C=0;C<J.length;C++){let O=J[C];H.__webglColorRenderbuffer[C]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[C]);let Q=a.convert(O.format,O.colorSpace),oe=a.convert(O.type),ee=v(O.internalFormat,Q,oe,O.normalized,O.colorSpace,R.isXRRenderTarget===!0),ae=wt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,ee,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+C,t.RENDERBUFFER,H.__webglColorRenderbuffer[C])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Ut(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,S);for(let C=0;C<6;C++)if(S.mipmaps&&S.mipmaps.length>0)for(let O=0;O<S.mipmaps.length;O++)Ue(H.__webglFramebuffer[C][O],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+C,O);else Ue(H.__webglFramebuffer[C],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);p(S)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(N){for(let C=0,O=J.length;C<O;C++){let Q=J[C],oe=i.get(Q),ee=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,oe.__webglTexture),Xe(ee,Q),Ue(H.__webglFramebuffer,R,Q,t.COLOR_ATTACHMENT0+C,ee,0),p(Q)&&_(ee)}n.unbindTexture()}else{let C=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(C=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(C,X.__webglTexture),Xe(C,S),S.mipmaps&&S.mipmaps.length>0)for(let O=0;O<S.mipmaps.length;O++)Ue(H.__webglFramebuffer[O],R,S,t.COLOR_ATTACHMENT0,C,O);else Ue(H.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,C,0);p(S)&&_(C),n.unbindTexture()}R.depthBuffer&&je(R)}function Ft(R){let S=R.textures;for(let H=0,X=S.length;H<X;H++){let J=S[H];if(p(J)){let le=M(R),N=i.get(J).__webglTexture;n.bindTexture(le,N),_(le),n.unbindTexture()}}}let Et=[],qt=[];function tn(R){if(R.samples>0){if(Ht(R)===!1){let S=R.textures,H=R.width,X=R.height,J=t.COLOR_BUFFER_BIT,le=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,N=i.get(R),C=S.length>1;if(C)for(let Q=0;Q<S.length;Q++)n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,N.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,N.__webglMultisampledFramebuffer);let O=R.texture.mipmaps;O&&O.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,N.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,N.__webglFramebuffer);for(let Q=0;Q<S.length;Q++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),C){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,N.__webglColorRenderbuffer[Q]);let oe=i.get(S[Q]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,H,X,0,0,H,X,J,t.NEAREST),l===!0&&(Et.length=0,qt.length=0,Et.push(t.COLOR_ATTACHMENT0+Q),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Et.push(le),qt.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,qt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Et))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),C)for(let Q=0;Q<S.length;Q++){n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,N.__webglColorRenderbuffer[Q]);let oe=i.get(S[Q]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,N.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.TEXTURE_2D,oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,N.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function wt(R){return Math.min(s.maxSamples,R.samples)}function Ht(R){let S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function B(R){let S=r.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function wn(R,S){let H=R.colorSpace,X=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Bn&&H!==Qs&&(Ze.getTransfer(H)===ct?(X!==pi||J!==Kn)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",H)),S}function Ce(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.getTextureUnits=Y,this.setTextureUnits=V,this.setTexture2D=ie,this.setTexture2DArray=re,this.setTexture3D=de,this.setTextureCube=ge,this.rebindTextures=Qe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ht,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function KD(t,e){function n(i,s=Qs){let a,r=Ze.getTransfer(s);if(i===Kn)return t.UNSIGNED_BYTE;if(i===od)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ld)return t.UNSIGNED_SHORT_5_5_5_1;if(i===W0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===q0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===k0)return t.BYTE;if(i===X0)return t.SHORT;if(i===_l)return t.UNSIGNED_SHORT;if(i===rd)return t.INT;if(i===Xi)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===hs)return t.HALF_FLOAT;if(i===Y0)return t.ALPHA;if(i===Z0)return t.RGB;if(i===pi)return t.RGBA;if(i===as)return t.DEPTH_COMPONENT;if(i===qa)return t.DEPTH_STENCIL;if(i===cd)return t.RED;if(i===ud)return t.RED_INTEGER;if(i===Ya)return t.RG;if(i===hd)return t.RG_INTEGER;if(i===fd)return t.RGBA_INTEGER;if(i===lu||i===cu||i===uu||i===hu)if(r===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===lu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===lu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dd||i===pd||i===md||i===gd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===dd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===md)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_d||i===vd||i===yd||i===xd||i===Sd||i===fu||i===Md)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===_d||i===vd)return r===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===yd)return r===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===xd)return a.COMPRESSED_R11_EAC;if(i===Sd)return a.COMPRESSED_SIGNED_R11_EAC;if(i===fu)return a.COMPRESSED_RG11_EAC;if(i===Md)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bd||i===Td||i===Ad||i===Ed||i===wd||i===Rd||i===Cd||i===Dd||i===Nd||i===Ld||i===Ud||i===Id||i===Od||i===Pd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===bd)return r===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Td)return r===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ad)return r===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ed)return r===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wd)return r===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rd)return r===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cd)return r===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dd)return r===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nd)return r===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ld)return r===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ud)return r===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Id)return r===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Od)return r===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pd)return r===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bd||i===zd||i===Fd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Bd)return r===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hd||i===Vd||i===du||i===Gd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Hd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Vd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===du)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var JD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jD=`
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

}`,m_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Kc(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new zn({vertexShader:JD,fragmentShader:jD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new lt(new qs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},g_=class extends rs{constructor(e,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new m_,p={},_=n.getContextAttributes(),M=null,v=null,A=[],T=[],w=new Oe,y=null,E=new ln;E.viewport=new dt;let D=new ln;D.viewport=new dt;let I=[E,D],z=new td,q=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let he=A[$];return he===void 0&&(he=new ol,A[$]=he),he.getTargetRaySpace()},this.getControllerGrip=function($){let he=A[$];return he===void 0&&(he=new ol,A[$]=he),he.getGripSpace()},this.getHand=function($){let he=A[$];return he===void 0&&(he=new ol,A[$]=he),he.getHandSpace()};function V($){let he=T.indexOf($.inputSource);if(he===-1)return;let L=A[he];L!==void 0&&(L.update($.inputSource,$.frame,c||r),L.dispatchEvent({type:$.type,data:$.inputSource}))}function K(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",Z);for(let $=0;$<A.length;$++){let he=T[$];he!==null&&(T[$]=null,A[$].disconnect(he))}q=null,Y=null,m.reset();for(let $ in p)delete p[$];e.setRenderTarget(M),d=null,u=null,f=null,s=null,v=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",K),s.addEventListener("inputsourceschange",Z),_.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let L=null,De=null,we=null;_.depth&&(we=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,L=_.stencil?qa:as,De=_.stencil?vl:Xi);let Ue={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:a};f=this.getBinding(),u=f.createProjectionLayer(Ue),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new hi(u.textureWidth,u.textureHeight,{format:pi,type:Kn,depthTexture:new Xs(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let L={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,L),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new hi(d.framebufferWidth,d.framebufferHeight,{format:pi,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z($){for(let he=0;he<$.removed.length;he++){let L=$.removed[he],De=T.indexOf(L);De>=0&&(T[De]=null,A[De].disconnect(L))}for(let he=0;he<$.added.length;he++){let L=$.added[he],De=T.indexOf(L);if(De===-1){for(let Ue=0;Ue<A.length;Ue++)if(Ue>=T.length){T.push(L),De=Ue;break}else if(T[Ue]===null){T[Ue]=L,De=Ue;break}if(De===-1)break}let we=A[De];we&&we.connect(L)}}let ie=new P,re=new P;function de($,he,L){ie.setFromMatrixPosition(he.matrixWorld),re.setFromMatrixPosition(L.matrixWorld);let De=ie.distanceTo(re),we=he.projectionMatrix.elements,Ue=L.projectionMatrix.elements,Ut=we[14]/(we[10]-1),We=we[14]/(we[10]+1),je=(we[9]+1)/we[5],Qe=(we[9]-1)/we[5],tt=(we[8]-1)/we[0],Ft=(Ue[8]+1)/Ue[0],Et=Ut*tt,qt=Ut*Ft,tn=De/(-tt+Ft),wt=tn*-tt;if(he.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(wt),$.translateZ(tn),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),we[10]===-1)$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let Ht=Ut+tn,B=We+tn,wn=Et-wt,Ce=qt+(De-wt),R=je*We/B*Ht,S=Qe*We/B*Ht;$.projectionMatrix.makePerspective(wn,Ce,R,S,Ht,B),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ge($,he){he===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(he.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let he=$.near,L=$.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(L=m.depthFar)),z.near=D.near=E.near=he,z.far=D.far=E.far=L,(q!==z.near||Y!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),q=z.near,Y=z.far),z.layers.mask=$.layers.mask|6,E.layers.mask=z.layers.mask&-5,D.layers.mask=z.layers.mask&-3;let De=$.parent,we=z.cameras;ge(z,De);for(let Ue=0;Ue<we.length;Ue++)ge(we[Ue],De);we.length===2?de(z,E,D):z.projectionMatrix.copy(E.projectionMatrix),xe($,z,De)};function xe($,he,L){L===null?$.matrix.copy(he.matrixWorld):($.matrix.copy(L.matrixWorld),$.matrix.invert(),$.matrix.multiply(he.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Cr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function($){return p[$]};let ze=null;function _t($,he){if(h=he.getViewerPose(c||r),g=he,h!==null){let L=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let De=!1;L.length!==z.cameras.length&&(z.cameras.length=0,De=!0);for(let We=0;We<L.length;We++){let je=L[We],Qe=null;if(d!==null)Qe=d.getViewport(je);else{let Ft=f.getViewSubImage(u,je);Qe=Ft.viewport,We===0&&(e.setRenderTargetTextures(v,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(v))}let tt=I[We];tt===void 0&&(tt=new ln,tt.layers.enable(We),tt.viewport=new dt,I[We]=tt),tt.matrix.fromArray(je.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(je.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),We===0&&(z.matrix.copy(tt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),De===!0&&z.cameras.push(tt)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let We=f.getDepthInformation(L[0]);We&&We.isValid&&We.texture&&m.init(We,s.renderState)}if(we&&we.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let We=0;We<L.length;We++){let je=L[We].camera;if(je){let Qe=p[je];Qe||(Qe=new Kc,p[je]=Qe);let tt=f.getCameraImage(je);Qe.sourceTexture=tt}}}}for(let L=0;L<A.length;L++){let De=T[L],we=A[L];De!==null&&we!==void 0&&we.update(De,he,c||r)}ze&&ze($,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}let Xe=new z1;Xe.setAnimationLoop(_t),this.setAnimationLoop=function($){ze=$},this.dispose=function(){}}},QD=new ke,X1=new Fe;X1.set(-1,0,0,0,1,0,0,0,1);function $D(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Q0(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,M,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(m,p):p.isMeshLambertMaterial?(a(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(m,p),f(m,p)):p.isMeshPhongMaterial?(a(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),x(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),M=_.envMap,v=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(QD.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(X1),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eN(t,e,n,i){let s={},a={},r=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,A){let T=A.program;i.uniformBlockBinding(v,T)}function c(v,A){let T=s[v.id];T===void 0&&(m(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",_));let w=A.program;i.updateUBOMapping(v,w);let y=e.render.frame;a[v.id]!==y&&(u(v),a[v.id]=y)}function h(v){let A=f();v.__bindingPointIndex=A;let T=t.createBuffer(),w=v.__size,y=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,w,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,T),T}function f(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let A=s[v.id],T=v.uniforms,w=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let y=0,E=T.length;y<E;y++){let D=T[y];if(Array.isArray(D))for(let I=0,z=D.length;I<z;I++)d(D[I],y,I,w);else d(D,y,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(v,A,T,w){if(x(v,A,T,w)===!0){let y=v.__offset,E=v.value;if(Array.isArray(E)){let D=0;for(let I=0;I<E.length;I++){let z=E[I],q=p(z);g(z,v.__data,D),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,v.__data)}}function g(v,A,T){typeof v=="number"||typeof v=="boolean"?A[0]=v:v.isMatrix3?(A[0]=v.elements[0],A[1]=v.elements[1],A[2]=v.elements[2],A[3]=0,A[4]=v.elements[3],A[5]=v.elements[4],A[6]=v.elements[5],A[7]=0,A[8]=v.elements[6],A[9]=v.elements[7],A[10]=v.elements[8],A[11]=0):ArrayBuffer.isView(v)?A.set(new v.constructor(v.buffer,v.byteOffset,A.length)):v.toArray(A,T)}function x(v,A,T,w){let y=v.value,E=A+"_"+T;if(w[E]===void 0)return typeof y=="number"||typeof y=="boolean"?w[E]=y:ArrayBuffer.isView(y)?w[E]=y.slice():w[E]=y.clone(),!0;{let D=w[E];if(typeof y=="number"||typeof y=="boolean"){if(D!==y)return w[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(D.equals(y)===!1)return D.copy(y),!0}}return!1}function m(v){let A=v.uniforms,T=0,w=16;for(let E=0,D=A.length;E<D;E++){let I=Array.isArray(A[E])?A[E]:[A[E]];for(let z=0,q=I.length;z<q;z++){let Y=I[z],V=Array.isArray(Y.value)?Y.value:[Y.value];for(let K=0,Z=V.length;K<Z;K++){let ie=V[K],re=p(ie),de=T%w,ge=de%re.boundary,xe=de+ge;T+=ge,xe!==0&&w-xe<re.storage&&(T+=w-xe),Y.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=T,T+=re.storage}}}let y=T%w;return y>0&&(T+=w-y),v.__size=T,v.__cache={},this}function p(v){let A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(A.boundary=16,A.storage=v.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",v),A}function _(v){let A=v.target;A.removeEventListener("dispose",_);let T=r.indexOf(A.__bindingPointIndex);r.splice(T,1),t.deleteBuffer(s[A.id]),delete s[A.id],delete a[A.id]}function M(){for(let v in s)t.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:l,update:c,dispose:M}}var tN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fs=null;function nN(){return fs===null&&(fs=new hl(tN,16,16,Ya,hs),fs.name="DFG_LUT",fs.minFilter=Qt,fs.magFilter=Qt,fs.wrapS=Ri,fs.wrapT=Ri,fs.generateMipmaps=!1,fs.needsUpdate=!0),fs}var Jd=class{constructor(e={}){let{canvas:n=c1(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Kn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;let x=d,m=new Set([fd,hd,ud]),p=new Set([Kn,Xi,_l,vl,od,ld]),_=new Uint32Array(4),M=new Int32Array(4),v=new P,A=null,T=null,w=[],y=[],E=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,I=!1,z=null,q=null,Y=null,V=null;this._outputColorSpace=At;let K=0,Z=0,ie=null,re=-1,de=null,ge=new dt,xe=new dt,ze=null,_t=new Ie(0),Xe=0,$=n.width,he=n.height,L=1,De=null,we=null,Ue=new dt(0,0,$,he),Ut=new dt(0,0,$,he),We=!1,je=new fl,Qe=!1,tt=!1,Ft=new ke,Et=new P,qt=new dt,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Ht(){return ie===null?L:1}let B=i;function wn(b,F){return n.getContext(b,F)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"185"}`),n.addEventListener("webglcontextlost",Vt,!1),n.addEventListener("webglcontextrestored",Mt,!1),n.addEventListener("webglcontextcreationerror",Wi,!1),B===null){let F="webgl2";if(B=wn(F,b),B===null)throw wn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Pe("WebGLRenderer: "+b.message),b}let Ce,R,S,H,X,J,le,N,C,O,Q,oe,ee,ae,fe,ce,_e,U,se,j,ue,pe,ne;function Te(){Ce=new c3(B),Ce.init(),ue=new KD(B,Ce),R=new t3(B,Ce,e,ue),S=new YD(B,Ce),R.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),q=B.createFramebuffer(),Y=B.createFramebuffer(),V=B.createFramebuffer(),H=new f3(B),X=new UD,J=new ZD(B,Ce,S,X,R,ue,H),le=new l3(D),N=new g2(B),pe=new $C(B,N),C=new u3(B,N,H,pe),O=new p3(B,C,N,pe,H),U=new d3(B,R,J),fe=new n3(X),Q=new LD(D,le,Ce,R,pe,fe),oe=new $D(D,X),ee=new OD,ae=new VD(Ce),_e=new QC(D,le,S,O,g,l),ce=new qD(D,O,R),ne=new eN(B,H,R,S),se=new e3(B,Ce,H),j=new h3(B,Ce,H),H.programs=Q.programs,D.capabilities=R,D.extensions=Ce,D.properties=X,D.renderLists=ee,D.shadowMap=ce,D.state=S,D.info=H}Te(),x!==Kn&&(E=new g3(x,n.width,n.height,o,s,a));let be=new g_(D,B);this.xr=be,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=Ce.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ce.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(b){b!==void 0&&(L=b,this.setSize($,he,!1))},this.getSize=function(b){return b.set($,he)},this.setSize=function(b,F,W=!0){if(be.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,he=F,n.width=Math.floor(b*L),n.height=Math.floor(F*L),W===!0&&(n.style.width=b+"px",n.style.height=F+"px"),E!==null&&E.setSize(n.width,n.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set($*L,he*L).floor()},this.setDrawingBufferSize=function(b,F,W){$=b,he=F,L=W,n.width=Math.floor(b*W),n.height=Math.floor(F*W),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(x===Kn){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ge)},this.getViewport=function(b){return b.copy(Ue)},this.setViewport=function(b,F,W,G){b.isVector4?Ue.set(b.x,b.y,b.z,b.w):Ue.set(b,F,W,G),S.viewport(ge.copy(Ue).multiplyScalar(L).round())},this.getScissor=function(b){return b.copy(Ut)},this.setScissor=function(b,F,W,G){b.isVector4?Ut.set(b.x,b.y,b.z,b.w):Ut.set(b,F,W,G),S.scissor(xe.copy(Ut).multiplyScalar(L).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(b){S.setScissorTest(We=b)},this.setOpaqueSort=function(b){De=b},this.setTransparentSort=function(b){we=b},this.getClearColor=function(b){return b.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,W=!0){let G=0;if(b){let k=!1;if(ie!==null){let ye=ie.texture.format;k=m.has(ye)}if(k){let ye=ie.texture.type,Me=p.has(ye),ve=_e.getClearColor(),Ee=_e.getClearAlpha(),Ne=ve.r,Ve=ve.g,Ye=ve.b;Me?(_[0]=Ne,_[1]=Ve,_[2]=Ye,_[3]=Ee,B.clearBufferuiv(B.COLOR,0,_)):(M[0]=Ne,M[1]=Ve,M[2]=Ye,M[3]=Ee,B.clearBufferiv(B.COLOR,0,M))}else G|=B.COLOR_BUFFER_BIT}F&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),z=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Vt,!1),n.removeEventListener("webglcontextrestored",Mt,!1),n.removeEventListener("webglcontextcreationerror",Wi,!1),_e.dispose(),ee.dispose(),ae.dispose(),X.dispose(),le.dispose(),O.dispose(),pe.dispose(),ne.dispose(),Q.dispose(),be.dispose(),be.removeEventListener("sessionstart",J_),be.removeEventListener("sessionend",j_),Qa.stop()};function Vt(b){b.preventDefault(),Bc("WebGLRenderer: Context Lost."),I=!0}function Mt(){Bc("WebGLRenderer: Context Restored."),I=!1;let b=H.autoReset,F=ce.enabled,W=ce.autoUpdate,G=ce.needsUpdate,k=ce.type;Te(),H.autoReset=b,ce.enabled=F,ce.autoUpdate=W,ce.needsUpdate=G,ce.type=k}function Wi(b){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qi(b){let F=b.target;F.removeEventListener("dispose",qi),uT(F)}function uT(b){hT(b),X.remove(b)}function hT(b){let F=X.get(b).programs;F!==void 0&&(F.forEach(function(W){Q.releaseProgram(W)}),b.isShaderMaterial&&Q.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,W,G,k,ye){F===null&&(F=tn);let Me=k.isMesh&&k.matrixWorld.determinantAffine()<0,ve=pT(b,F,W,G,k);S.setMaterial(G,Me);let Ee=W.index,Ne=1;if(G.wireframe===!0){if(Ee=C.getWireframeAttribute(W),Ee===void 0)return;Ne=2}let Ve=W.drawRange,Ye=W.attributes.position,Le=Ve.start*Ne,pt=(Ve.start+Ve.count)*Ne;ye!==null&&(Le=Math.max(Le,ye.start*Ne),pt=Math.min(pt,(ye.start+ye.count)*Ne)),Ee!==null?(Le=Math.max(Le,0),pt=Math.min(pt,Ee.count)):Ye!=null&&(Le=Math.max(Le,0),pt=Math.min(pt,Ye.count));let Yt=pt-Le;if(Yt<0||Yt===1/0)return;pe.setup(k,G,ve,W,Ee);let Gt,vt=se;if(Ee!==null&&(Gt=N.get(Ee),vt=j,vt.setIndex(Gt)),k.isMesh)G.wireframe===!0?(S.setLineWidth(G.wireframeLinewidth*Ht()),vt.setMode(B.LINES)):vt.setMode(B.TRIANGLES);else if(k.isLine){let Rn=G.linewidth;Rn===void 0&&(Rn=1),S.setLineWidth(Rn*Ht()),k.isLineSegments?vt.setMode(B.LINES):k.isLineLoop?vt.setMode(B.LINE_LOOP):vt.setMode(B.LINE_STRIP)}else k.isPoints?vt.setMode(B.POINTS):k.isSprite&&vt.setMode(B.TRIANGLES);if(k.isBatchedMesh)if(Ce.get("WEBGL_multi_draw"))vt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Rn=k._multiDrawStarts,Se=k._multiDrawCounts,jn=k._multiDrawCount,at=Ee?N.get(Ee).bytesPerElement:1,mi=X.get(G).currentProgram.getUniforms();for(let Yi=0;Yi<jn;Yi++)mi.setValue(B,"_gl_DrawID",Yi),vt.render(Rn[Yi]/at,Se[Yi])}else if(k.isInstancedMesh)vt.renderInstances(Le,Yt,k.count);else if(W.isInstancedBufferGeometry){let Rn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Se=Math.min(W.instanceCount,Rn);vt.renderInstances(Le,Yt,Se)}else vt.render(Le,Yt)};function K_(b,F,W){b.transparent===!0&&b.side===En&&b.forceSinglePass===!1?(b.side=An,b.needsUpdate=!0,Mu(b,F,W),b.side=Hi,b.needsUpdate=!0,Mu(b,F,W),b.side=En):Mu(b,F,W)}this.compile=function(b,F,W=null){W===null&&(W=b),T=ae.get(W),T.init(F),y.push(T),W.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),b!==W&&b.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights();let G=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ye=k.material;if(ye)if(Array.isArray(ye))for(let Me=0;Me<ye.length;Me++){let ve=ye[Me];K_(ve,W,k),G.add(ve)}else K_(ye,W,k),G.add(ye)}),T=y.pop(),G},this.compileAsync=function(b,F,W=null){let G=this.compile(b,F,W);return new Promise(k=>{function ye(){if(G.forEach(function(Me){X.get(Me).currentProgram.isReady()&&G.delete(Me)}),G.size===0){k(b);return}setTimeout(ye,10)}Ce.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let ap=null;function fT(b){ap&&ap(b)}function J_(){Qa.stop()}function j_(){Qa.start()}let Qa=new z1;Qa.setAnimationLoop(fT),typeof self<"u"&&Qa.setContext(self),this.setAnimationLoop=function(b){ap=b,be.setAnimationLoop(b),b===null?Qa.stop():Qa.start()},be.addEventListener("sessionstart",J_),be.addEventListener("sessionend",j_),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;z!==null&&z.renderStart(b,F);let W=be.enabled===!0&&be.isPresenting===!0,G=E!==null&&(ie===null||W)&&E.begin(D,ie);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(F),F=be.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,F,ie),T=ae.get(b,y.length),T.init(F),T.state.textureUnits=J.getTextureUnits(),y.push(T),Ft.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),je.setFromProjectionMatrix(Ft,zi,F.reversedDepth),tt=this.localClippingEnabled,Qe=fe.init(this.clippingPlanes,tt),A=ee.get(b,w.length),A.init(),w.push(A),be.enabled===!0&&be.isPresenting===!0){let Me=D.xr.getDepthSensingMesh();Me!==null&&rp(Me,F,-1/0,D.sortObjects)}rp(b,F,0,D.sortObjects),A.finish(),D.sortObjects===!0&&A.sort(De,we,F.reversedDepth),wt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,wt&&_e.addToRenderList(A,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&fe.beginShadows();let k=T.state.shadowsArray;if(ce.render(k,b,F),Qe===!0&&fe.endShadows(),(G&&E.hasRenderPass())===!1){let Me=A.opaque,ve=A.transmissive;if(T.setupLights(),F.isArrayCamera){let Ee=F.cameras;if(ve.length>0)for(let Ne=0,Ve=Ee.length;Ne<Ve;Ne++){let Ye=Ee[Ne];$_(Me,ve,b,Ye)}wt&&_e.render(b);for(let Ne=0,Ve=Ee.length;Ne<Ve;Ne++){let Ye=Ee[Ne];Q_(A,b,Ye,Ye.viewport)}}else ve.length>0&&$_(Me,ve,b,F),wt&&_e.render(b),Q_(A,b,F)}ie!==null&&Z===0&&(J.updateMultisampleRenderTarget(ie),J.updateRenderTargetMipmap(ie)),G&&E.end(D),b.isScene===!0&&b.onAfterRender(D,b,F),pe.resetDefaultState(),re=-1,de=null,y.pop(),y.length>0?(T=y[y.length-1],J.setTextureUnits(T.state.textureUnits),Qe===!0&&fe.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,z!==null&&z.renderEnd()};function rp(b,F,W,G){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||je.intersectsSprite(b)){G&&qt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ft);let Me=O.update(b),ve=b.material;ve.visible&&A.push(b,Me,ve,W,qt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||je.intersectsObject(b))){let Me=O.update(b),ve=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),qt.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),qt.copy(Me.boundingSphere.center)),qt.applyMatrix4(b.matrixWorld).applyMatrix4(Ft)),Array.isArray(ve)){let Ee=Me.groups;for(let Ne=0,Ve=Ee.length;Ne<Ve;Ne++){let Ye=Ee[Ne],Le=ve[Ye.materialIndex];Le&&Le.visible&&A.push(b,Me,Le,W,qt.z,Ye)}}else ve.visible&&A.push(b,Me,ve,W,qt.z,null)}}let ye=b.children;for(let Me=0,ve=ye.length;Me<ve;Me++)rp(ye[Me],F,W,G)}function Q_(b,F,W,G){let{opaque:k,transmissive:ye,transparent:Me}=b;T.setupLightsView(W),Qe===!0&&fe.setGlobalState(D.clippingPlanes,W),G&&S.viewport(ge.copy(G)),k.length>0&&Su(k,F,W),ye.length>0&&Su(ye,F,W),Me.length>0&&Su(Me,F,W),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function $_(b,F,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let Le=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new hi(1,1,{generateMipmaps:!0,type:Le?hs:Kn,minFilter:ki,samples:Math.max(4,R.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let ye=T.state.transmissionRenderTarget[G.id],Me=G.viewport||ge;ye.setSize(Me.z*D.transmissionResolutionScale,Me.w*D.transmissionResolutionScale);let ve=D.getRenderTarget(),Ee=D.getActiveCubeFace(),Ne=D.getActiveMipmapLevel();D.setRenderTarget(ye),D.getClearColor(_t),Xe=D.getClearAlpha(),Xe<1&&D.setClearColor(16777215,.5),D.clear(),wt&&_e.render(W);let Ve=D.toneMapping;D.toneMapping=Gi;let Ye=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),Qe===!0&&fe.setGlobalState(D.clippingPlanes,G),Su(b,W,G),J.updateMultisampleRenderTarget(ye),J.updateRenderTargetMipmap(ye),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let pt=0,Yt=F.length;pt<Yt;pt++){let Gt=F[pt],{object:vt,geometry:Rn,material:Se,group:jn}=Gt;if(Se.side===En&&vt.layers.test(G.layers)){let at=Se.side;Se.side=An,Se.needsUpdate=!0,ev(vt,W,G,Rn,Se,jn),Se.side=at,Se.needsUpdate=!0,Le=!0}}Le===!0&&(J.updateMultisampleRenderTarget(ye),J.updateRenderTargetMipmap(ye))}D.setRenderTarget(ve,Ee,Ne),D.setClearColor(_t,Xe),Ye!==void 0&&(G.viewport=Ye),D.toneMapping=Ve}function Su(b,F,W){let G=F.isScene===!0?F.overrideMaterial:null;for(let k=0,ye=b.length;k<ye;k++){let Me=b[k],{object:ve,geometry:Ee,group:Ne}=Me,Ve=Me.material;Ve.allowOverride===!0&&G!==null&&(Ve=G),ve.layers.test(W.layers)&&ev(ve,F,W,Ee,Ve,Ne)}}function ev(b,F,W,G,k,ye){b.onBeforeRender(D,F,W,G,k,ye),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(D,F,W,G,b,ye),k.transparent===!0&&k.side===En&&k.forceSinglePass===!1?(k.side=An,k.needsUpdate=!0,D.renderBufferDirect(W,F,G,k,b,ye),k.side=Hi,k.needsUpdate=!0,D.renderBufferDirect(W,F,G,k,b,ye),k.side=En):D.renderBufferDirect(W,F,G,k,b,ye),b.onAfterRender(D,F,W,G,k,ye)}function Mu(b,F,W){F.isScene!==!0&&(F=tn);let G=X.get(b),k=T.state.lights,ye=T.state.shadowsArray,Me=k.state.version,ve=Q.getParameters(b,k.state,ye,F,W,T.state.lightProbeGridArray),Ee=Q.getProgramCacheKey(ve),Ne=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let Ve=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=le.get(b.envMap||G.environment,Ve),G.envMapRotation=G.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ne===void 0&&(b.addEventListener("dispose",qi),Ne=new Map,G.programs=Ne);let Ye=Ne.get(Ee);if(Ye!==void 0){if(G.currentProgram===Ye&&G.lightsStateVersion===Me)return nv(b,ve),Ye}else ve.uniforms=Q.getUniforms(b),z!==null&&b.isNodeMaterial&&z.build(b,W,ve),b.onBeforeCompile(ve,D),Ye=Q.acquireProgram(ve,Ee),Ne.set(Ee,Ye),G.uniforms=ve.uniforms;let Le=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=fe.uniform),nv(b,ve),G.needsLights=gT(b),G.lightsStateVersion=Me,G.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=Ye,G.uniformsList=null,Ye}function tv(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=Sl.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function nv(b,F){let W=X.get(b);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function dT(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let W=0,G=b.length;W<G;W++){let k=b[W];if(k.texture!==null&&k.boundingBox.containsPoint(v))return k}return null}function pT(b,F,W,G,k){F.isScene!==!0&&(F=tn),J.resetTextureUnits();let ye=F.fog,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,ve=ie===null?D.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ze.workingColorSpace,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ne=le.get(G.envMap||Me,Ee),Ve=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ye=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!W.morphAttributes.position,pt=!!W.morphAttributes.normal,Yt=!!W.morphAttributes.color,Gt=Gi;G.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Gt=D.toneMapping);let vt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Rn=vt!==void 0?vt.length:0,Se=X.get(G),jn=T.state.lights;if(Qe===!0&&(tt===!0||b!==de)){let bt=b===de&&G.id===re;fe.setState(G,b,bt)}let at=!1;G.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==jn.state.version||Se.outputColorSpace!==ve||k.isBatchedMesh&&Se.batching===!1||!k.isBatchedMesh&&Se.batching===!0||k.isBatchedMesh&&Se.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Se.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Se.instancing===!1||!k.isInstancedMesh&&Se.instancing===!0||k.isSkinnedMesh&&Se.skinning===!1||!k.isSkinnedMesh&&Se.skinning===!0||k.isInstancedMesh&&Se.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Se.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Se.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Se.instancingMorph===!1&&k.morphTexture!==null||Se.envMap!==Ne||G.fog===!0&&Se.fog!==ye||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==fe.numPlanes||Se.numIntersection!==fe.numIntersection)||Se.vertexAlphas!==Ve||Se.vertexTangents!==Ye||Se.morphTargets!==Le||Se.morphNormals!==pt||Se.morphColors!==Yt||Se.toneMapping!==Gt||Se.morphTargetsCount!==Rn||!!Se.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Se.__version=G.version);let mi=Se.currentProgram;at===!0&&(mi=Mu(G,F,k),z&&G.isNodeMaterial&&z.onUpdateProgram(G,mi,Se));let Yi=!1,$s=!1,Wr=!1,yt=mi.getUniforms(),Zt=Se.uniforms;if(S.useProgram(mi.program)&&(Yi=!0,$s=!0,Wr=!0),G.id!==re&&(re=G.id,$s=!0),Se.needsLights){let bt=dT(T.state.lightProbeGridArray,k);Se.lightProbeGrid!==bt&&(Se.lightProbeGrid=bt,$s=!0)}if(Yi||de!==b){S.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),yt.setValue(B,"projectionMatrix",b.projectionMatrix),yt.setValue(B,"viewMatrix",b.matrixWorldInverse);let ta=yt.map.cameraPosition;ta!==void 0&&ta.setValue(B,Et.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&yt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&yt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),de!==b&&(de=b,$s=!0,Wr=!0)}if(Se.needsLights&&(jn.state.directionalShadowMap.length>0&&yt.setValue(B,"directionalShadowMap",jn.state.directionalShadowMap,J),jn.state.spotShadowMap.length>0&&yt.setValue(B,"spotShadowMap",jn.state.spotShadowMap,J),jn.state.pointShadowMap.length>0&&yt.setValue(B,"pointShadowMap",jn.state.pointShadowMap,J)),k.isSkinnedMesh){yt.setOptional(B,k,"bindMatrix"),yt.setOptional(B,k,"bindMatrixInverse");let bt=k.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),yt.setValue(B,"boneTexture",bt.boneTexture,J))}k.isBatchedMesh&&(yt.setOptional(B,k,"batchingTexture"),yt.setValue(B,"batchingTexture",k._matricesTexture,J),yt.setOptional(B,k,"batchingIdTexture"),yt.setValue(B,"batchingIdTexture",k._indirectTexture,J),yt.setOptional(B,k,"batchingColorTexture"),k._colorsTexture!==null&&yt.setValue(B,"batchingColorTexture",k._colorsTexture,J));let ea=W.morphAttributes;if((ea.position!==void 0||ea.normal!==void 0||ea.color!==void 0)&&U.update(k,W,mi),($s||Se.receiveShadow!==k.receiveShadow)&&(Se.receiveShadow=k.receiveShadow,yt.setValue(B,"receiveShadow",k.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(Zt.envMapIntensity.value=F.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=nN()),$s){if(yt.setValue(B,"toneMappingExposure",D.toneMappingExposure),Se.needsLights&&mT(Zt,Wr),ye&&G.fog===!0&&oe.refreshFogUniforms(Zt,ye),oe.refreshMaterialUniforms(Zt,G,L,he,T.state.transmissionRenderTarget[b.id]),Se.needsLights&&Se.lightProbeGrid){let bt=Se.lightProbeGrid;Zt.probesSH.value=bt.texture,Zt.probesMin.value.copy(bt.boundingBox.min),Zt.probesMax.value.copy(bt.boundingBox.max),Zt.probesResolution.value.copy(bt.resolution)}Sl.upload(B,tv(Se),Zt,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Sl.upload(B,tv(Se),Zt,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&yt.setValue(B,"center",k.center),yt.setValue(B,"modelViewMatrix",k.modelViewMatrix),yt.setValue(B,"normalMatrix",k.normalMatrix),yt.setValue(B,"modelMatrix",k.matrixWorld),G.uniformsGroups!==void 0){let bt=G.uniformsGroups;for(let ta=0,qr=bt.length;ta<qr;ta++){let iv=bt[ta];ne.update(iv,mi),ne.bind(iv,mi)}}return mi}function mT(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function gT(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(b,F,W){let G=X.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(b.texture).__webglTexture=F,X.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let W=X.get(b);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,W=0){ie=b,K=F,Z=W;let G=null,k=!1,ye=!1;if(b){let ve=X.get(b);if(ve.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(B.FRAMEBUFFER,ve.__webglFramebuffer),ge.copy(b.viewport),xe.copy(b.scissor),ze=b.scissorTest,S.viewport(ge),S.scissor(xe),S.setScissorTest(ze),re=-1;return}else if(ve.__webglFramebuffer===void 0)J.setupRenderTarget(b);else if(ve.__hasExternalTextures)J.rebindTextures(b,X.get(b.texture).__webglTexture,X.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ve=b.depthTexture;if(ve.__boundDepthTexture!==Ve){if(Ve!==null&&X.has(Ve)&&(b.width!==Ve.image.width||b.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(b)}}let Ee=b.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ye=!0);let Ne=X.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?G=Ne[F][W]:G=Ne[F],k=!0):b.samples>0&&J.useMultisampledRTT(b)===!1?G=X.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[W]:G=Ne,ge.copy(b.viewport),xe.copy(b.scissor),ze=b.scissorTest}else ge.copy(Ue).multiplyScalar(L).floor(),xe.copy(Ut).multiplyScalar(L).floor(),ze=We;if(W!==0&&(G=q),S.bindFramebuffer(B.FRAMEBUFFER,G)&&S.drawBuffers(b,G),S.viewport(ge),S.scissor(xe),S.setScissorTest(ze),k){let ve=X.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,W)}else if(ye){let ve=F;for(let Ee=0;Ee<b.textures.length;Ee++){let Ne=X.get(b.textures[Ee]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ee,Ne.__webglTexture,W,ve)}}else if(b!==null&&W!==0){let ve=X.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ve.__webglTexture,W)}re=-1},this.readRenderTargetPixels=function(b,F,W,G,k,ye,Me,ve=0){if(!(b&&b.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=X.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){S.bindFramebuffer(B.FRAMEBUFFER,Ee);try{let Ne=b.textures[ve],Ve=Ne.format,Ye=Ne.type;if(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ve),!R.textureFormatReadable(Ve)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Ye)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-G&&W>=0&&W<=b.height-k&&B.readPixels(F,W,G,k,ue.convert(Ve),ue.convert(Ye),ye)}finally{let Ne=ie!==null?X.get(ie).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(b,F,W,G,k,ye,Me,ve=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=X.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee)if(F>=0&&F<=b.width-G&&W>=0&&W<=b.height-k){S.bindFramebuffer(B.FRAMEBUFFER,Ee);let Ne=b.textures[ve],Ve=Ne.format,Ye=Ne.type;if(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ve),!R.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Le=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Le),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),B.readPixels(F,W,G,k,ue.convert(Ve),ue.convert(Ye),0);let pt=ie!==null?X.get(ie).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,pt);let Yt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await h1(B,Yt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Le),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.deleteBuffer(Le),B.deleteSync(Yt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,W=0){let G=Math.pow(2,-W),k=Math.floor(b.image.width*G),ye=Math.floor(b.image.height*G),Me=F!==null?F.x:0,ve=F!==null?F.y:0;J.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,Me,ve,k,ye),S.unbindTexture()},this.copyTextureToTexture=function(b,F,W=null,G=null,k=0,ye=0){let Me,ve,Ee,Ne,Ve,Ye,Le,pt,Yt,Gt=b.isCompressedTexture?b.mipmaps[ye]:b.image;if(W!==null)Me=W.max.x-W.min.x,ve=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,Ne=W.min.x,Ve=W.min.y,Ye=W.isBox3?W.min.z:0;else{let Zt=Math.pow(2,-k);Me=Math.floor(Gt.width*Zt),ve=Math.floor(Gt.height*Zt),b.isDataArrayTexture?Ee=Gt.depth:b.isData3DTexture?Ee=Math.floor(Gt.depth*Zt):Ee=1,Ne=0,Ve=0,Ye=0}G!==null?(Le=G.x,pt=G.y,Yt=G.z):(Le=0,pt=0,Yt=0);let vt=ue.convert(F.format),Rn=ue.convert(F.type),Se;F.isData3DTexture?(J.setTexture3D(F,0),Se=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(J.setTexture2DArray(F,0),Se=B.TEXTURE_2D_ARRAY):(J.setTexture2D(F,0),Se=B.TEXTURE_2D),S.activeTexture(B.TEXTURE0),S.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let jn=S.getParameter(B.UNPACK_ROW_LENGTH),at=S.getParameter(B.UNPACK_IMAGE_HEIGHT),mi=S.getParameter(B.UNPACK_SKIP_PIXELS),Yi=S.getParameter(B.UNPACK_SKIP_ROWS),$s=S.getParameter(B.UNPACK_SKIP_IMAGES);S.pixelStorei(B.UNPACK_ROW_LENGTH,Gt.width),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Gt.height),S.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),S.pixelStorei(B.UNPACK_SKIP_ROWS,Ve),S.pixelStorei(B.UNPACK_SKIP_IMAGES,Ye);let Wr=b.isDataArrayTexture||b.isData3DTexture,yt=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let Zt=X.get(b),ea=X.get(F),bt=X.get(Zt.__renderTarget),ta=X.get(ea.__renderTarget);S.bindFramebuffer(B.READ_FRAMEBUFFER,bt.__webglFramebuffer),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,ta.__webglFramebuffer);for(let qr=0;qr<Ee;qr++)Wr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(b).__webglTexture,k,Ye+qr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(F).__webglTexture,ye,Yt+qr)),B.blitFramebuffer(Ne,Ve,Me,ve,Le,pt,Me,ve,B.DEPTH_BUFFER_BIT,B.NEAREST);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||X.has(b)){let Zt=X.get(b),ea=X.get(F);S.bindFramebuffer(B.READ_FRAMEBUFFER,Y),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,V);for(let bt=0;bt<Ee;bt++)Wr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Zt.__webglTexture,k,Ye+bt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Zt.__webglTexture,k),yt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ea.__webglTexture,ye,Yt+bt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ea.__webglTexture,ye),k!==0?B.blitFramebuffer(Ne,Ve,Me,ve,Le,pt,Me,ve,B.COLOR_BUFFER_BIT,B.NEAREST):yt?B.copyTexSubImage3D(Se,ye,Le,pt,Yt+bt,Ne,Ve,Me,ve):B.copyTexSubImage2D(Se,ye,Le,pt,Ne,Ve,Me,ve);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else yt?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Se,ye,Le,pt,Yt,Me,ve,Ee,vt,Rn,Gt.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Se,ye,Le,pt,Yt,Me,ve,Ee,vt,Gt.data):B.texSubImage3D(Se,ye,Le,pt,Yt,Me,ve,Ee,vt,Rn,Gt):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ye,Le,pt,Me,ve,vt,Rn,Gt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ye,Le,pt,Gt.width,Gt.height,vt,Gt.data):B.texSubImage2D(B.TEXTURE_2D,ye,Le,pt,Me,ve,vt,Rn,Gt);S.pixelStorei(B.UNPACK_ROW_LENGTH,jn),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,at),S.pixelStorei(B.UNPACK_SKIP_PIXELS,mi),S.pixelStorei(B.UNPACK_SKIP_ROWS,Yi),S.pixelStorei(B.UNPACK_SKIP_IMAGES,$s),ye===0&&F.generateMipmaps&&B.generateMipmap(Se),S.unbindTexture()},this.initRenderTarget=function(b){X.get(b).__webglFramebuffer===void 0&&J.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?J.setTextureCube(b,0):b.isData3DTexture?J.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?J.setTexture2DArray(b,0):J.setTexture2D(b,0),S.unbindTexture()},this.resetState=function(){K=0,Z=0,ie=null,S.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}};var vu=new P;function Ci(t,e,n,i,s,a){let r=2*Math.PI*s/4,o=Math.max(a-2*s,0),l=Math.PI/4;vu.copy(e),vu[i]=0,vu.normalize();let c=.5*r/(r+o),h=1-vu.angleTo(t)/l;return Math.sign(vu[n])===1?h*c:o/(r+o)+c+c*(1-h)}var $d=class t extends os{constructor(e=1,n=1,i=1,s=2,a=.1){let r=s*2+1;if(a=Math.min(e/2,n/2,i/2,a),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:s,radius:a},r===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new P,c=new P,h=new P(e,n,i).divideScalar(2).subScalar(a),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,x=new P,m=.5/r;for(let p=0,_=0;p<f.length;p+=3,_+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*a,f[p+1]=h.y*Math.sign(l.y)+c.y*a,f[p+2]=h.z*Math.sign(l.z)+c.z*a,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),d[_+0]=Ci(x,c,"z","y",a,i),d[_+1]=1-Ci(x,c,"y","z",a,n);break;case 1:x.set(-1,0,0),d[_+0]=1-Ci(x,c,"z","y",a,i),d[_+1]=1-Ci(x,c,"y","z",a,n);break;case 2:x.set(0,1,0),d[_+0]=1-Ci(x,c,"x","z",a,e),d[_+1]=Ci(x,c,"z","x",a,i);break;case 3:x.set(0,-1,0),d[_+0]=1-Ci(x,c,"x","z",a,e),d[_+1]=1-Ci(x,c,"z","x",a,i);break;case 4:x.set(0,0,1),d[_+0]=1-Ci(x,c,"x","y",a,e),d[_+1]=1-Ci(x,c,"y","x",a,n);break;case 5:x.set(0,0,-1),d[_+0]=Ci(x,c,"x","y",a,e),d[_+1]=1-Ci(x,c,"y","x",a,n);break}}static fromJSON(e){return new t(e.width,e.height,e.depth,e.segments,e.radius)}};function __(t,e){if(e===K0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===yl||e===pu){let n=t.getIndex();if(n===null){let r=[],o=t.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);t.setIndex(r),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}let i=n.count-2,s=[];if(e===yl)for(let r=1;r<=i;r++)s.push(n.getX(0)),s.push(n.getX(r)),s.push(n.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(n.getX(r)),s.push(n.getX(r+1)),s.push(n.getX(r+2))):(s.push(n.getX(r+2)),s.push(n.getX(r+1)),s.push(n.getX(r)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let a=t.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}function q1(t){let e=new Map,n=new Map,i=t.clone();return Y1(t,i,function(s,a){e.set(a,s),n.set(s,a)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let a=s,r=e.get(s),o=r.skeleton.bones;a.skeleton=r.skeleton.clone(),a.bindMatrix.copy(r.bindMatrix),a.skeleton.bones=o.map(function(l){return n.get(l)}),a.bind(a.skeleton,a.bindMatrix)}),i}function Y1(t,e,n){n(t,e);for(let i=0;i<t.children.length;i++)Y1(t.children[i],e.children[i],n)}var ep=class extends cs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new T_(n)}),this.register(function(n){return new A_(n)}),this.register(function(n){return new I_(n)}),this.register(function(n){return new O_(n)}),this.register(function(n){return new P_(n)}),this.register(function(n){return new w_(n)}),this.register(function(n){return new R_(n)}),this.register(function(n){return new C_(n)}),this.register(function(n){return new D_(n)}),this.register(function(n){return new b_(n)}),this.register(function(n){return new N_(n)}),this.register(function(n){return new E_(n)}),this.register(function(n){return new U_(n)}),this.register(function(n){return new L_(n)}),this.register(function(n){return new S_(n)}),this.register(function(n){return new tp(n,Je.EXT_MESHOPT_COMPRESSION)}),this.register(function(n){return new tp(n,Je.KHR_MESHOPT_COMPRESSION)}),this.register(function(n){return new B_(n)})}load(e,n,i,s){let a=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let c=js.extractUrlBase(e);r=js.resolveURL(c,this.path)}else r=js.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),a.manager.itemError(e),a.manager.itemEnd(e)},l=new pl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{a.parse(c,r,function(h){n(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,i,s){let a,r={},o={},l=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Q1){try{r[Je.KHR_BINARY_GLTF]=new z_(e)}catch(f){s&&s(f);return}a=JSON.parse(r[Je.KHR_BINARY_GLTF].content)}else a=JSON.parse(l.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new W_(a,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,r[f.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){let f=a.extensionsUsed[h],u=a.extensionsRequired||[];switch(f){case Je.KHR_MATERIALS_UNLIT:r[f]=new M_;break;case Je.KHR_DRACO_MESH_COMPRESSION:r[f]=new F_(a,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:r[f]=new H_;break;case Je.KHR_MESH_QUANTIZATION:r[f]=new V_;break;default:u.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(i,s)}parseAsync(e,n){let i=this;return new Promise(function(s,a){i.parse(e,n,s,a)})}};function iN(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}function $t(t,e,n){let i=t.json.materials[e];return i.extensions&&i.extensions[n]?i.extensions[n]:null}var Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},S_=class{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,n=this.parser.json.nodes||[];for(let i=0,s=n.length;i<s;i++){let a=n[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){let n=this.parser,i="light:"+e,s=n.cache.get(i);if(s)return s;let a=n.json,l=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],c,h=new Ie(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Bn);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Fr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zr(h),c.distance=f;break;case"spot":c=new Br(h),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ps(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=n.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),n.cache.add(i,s),s}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){let n=this,i=this.parser,a=i.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(n.cache,o,l)})}},M_=class{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return bn}extendParams(e,n,i){let s=[];e.color=new Ie(1,1,1),e.opacity=1;let a=n.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Bn),e.opacity=r[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,At))}return Promise.all(s)}},b_=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){let i=$t(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(n.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},T_=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,n){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(n.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(n,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(n,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(n,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let a=i.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Oe(a,a)}return Promise.all(s)}},A_=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,n){let i=$t(this.parser,e,this.name);return i===null||(n.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},E_=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,n){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(n.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(n,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(n.iridescenceIOR=i.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(n,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},w_=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,n){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(n.sheenColor=new Ie(0,0,0),n.sheenRoughness=0,n.sheen=1,i.sheenColorFactor!==void 0){let a=i.sheenColorFactor;n.sheenColor.setRGB(a[0],a[1],a[2],Bn)}return i.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(n,"sheenColorMap",i.sheenColorTexture,At)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(n,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},R_=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,n){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(n.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(n,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},C_=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,n){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];n.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(n,"thicknessMap",i.thicknessTexture)),n.attenuationDistance=i.attenuationDistance||1/0;let a=i.attenuationColor||[1,1,1];return n.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],Bn),Promise.all(s)}},D_=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,n){let i=$t(this.parser,e,this.name);return i===null||(n.ior=i.ior!==void 0?i.ior:1.5,n.ior===0&&(n.ior=1e3)),Promise.resolve()}},N_=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,n){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];n.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(n,"specularIntensityMap",i.specularTexture));let a=i.specularColorFactor||[1,1,1];return n.specularColor=new Ie().setRGB(a[0],a[1],a[2],Bn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(n,"specularColorMap",i.specularColorTexture,At)),Promise.all(s)}},L_=class{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,n){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return n.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(n,"bumpMap",i.bumpTexture)),Promise.all(s)}},U_=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,n){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(n.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(n.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(n,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},I_=class{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){let n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let a=s.extensions[this.name],r=n.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,a.source,r)}},O_=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){let n=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[n])return null;let r=a.extensions[n],o=s.images[r.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,r.source,l)}},P_=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){let n=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[n])return null;let r=a.extensions[n],o=s.images[r.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,r.source,l)}},tp=class{constructor(e,n){this.name=n,this.parser=e}loadBufferView(e){let n=this.parser.json,i=n.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,f=s.byteStride,u=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,f,u,s.mode,s.filter).then(function(d){return d.buffer}):r.ready.then(function(){let d=new ArrayBuffer(h*f);return r.decodeGltfBuffer(new Uint8Array(d),h,f,u,s.mode,s.filter),d})})}else return null}},B_=class{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let n=this.parser.json,i=n.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=n.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==Di.TRIANGLES&&c.mode!==Di.TRIANGLE_STRIP&&c.mode!==Di.TRIANGLE_FAN&&c.mode!==void 0)return null;let r=i.extensions[this.name].attributes,o=[],l={};for(let c in r)o.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),f=h.isGroup?h.children:[h],u=c[0].count,d=[];for(let g of f){let x=new ke,m=new P,p=new ui,_=new P(1,1,1),M=new qc(g.geometry,g.material,u);for(let v=0;v<u;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&_.fromBufferAttribute(l.SCALE,v),M.setMatrixAt(v,x.compose(m,p,_));for(let v in l)if(v==="_COLOR_0"){let A=l[v];M.instanceColor=new Fa(A.array,A.itemSize,A.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);Pt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Q1="glTF",yu=12,Z1={JSON:1313821514,BIN:5130562},z_=class{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;let n=new DataView(e,0,yu),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Q1)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-yu,a=new DataView(e,yu),r=0;for(;r<s;){let o=a.getUint32(r,!0);r+=4;let l=a.getUint32(r,!0);if(r+=4,l===Z1.JSON){let c=new Uint8Array(e,yu+r,o);this.content=i.decode(c)}else if(l===Z1.BIN){let c=yu+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},F_=class{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){let i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(let h in r){let f=k_[h]||h.toLowerCase();o[f]=r[h]}for(let h in e.attributes){let f=k_[h]||h.toLowerCase();if(r[h]!==void 0){let u=i.accessors[e.attributes[h]],d=bl[u.componentType];c[f]=d.name,l[f]=u.normalized===!0}}return n.getDependency("bufferView",a).then(function(h){return new Promise(function(f,u){s.decodeDracoFile(h,function(d){for(let g in d.attributes){let x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}f(d)},o,c,Bn,u)})})}},H_=class{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}},V_=class{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}},np=class extends ls{constructor(e,n,i,s){super(e,n,i,s)}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let r=0;r!==s;r++)n[r]=i[a+r];return n}interpolate_(e,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-n,f=(i-n)/h,u=f*f,d=u*f,g=e*c,x=g-c,m=-2*d+3*u,p=d-u,_=1-m,M=p-u+f;for(let v=0;v!==o;v++){let A=r[x+v+o],T=r[x+v+l]*h,w=r[g+v+o],y=r[g+v]*h;a[v]=_*A+M*T+m*w+p*y}return a}},sN=new ui,G_=class extends np{interpolate_(e,n,i,s){let a=super.interpolate_(e,n,i,s);return sN.fromArray(a).normalize().toArray(a),a}},Di={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},bl={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},K1={9728:jt,9729:Qt,9984:ad,9985:gl,9986:Vr,9987:ki},J1={33071:Ri,33648:nl,10497:za},v_={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},k_={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ja={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},aN={CUBICSPLINE:void 0,LINEAR:Rr,STEP:wr},y_={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rN(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new zt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hi})),t.DefaultMaterial}function Xr(t,e,n){for(let i in n.extensions)t[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i])}function ps(t,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(t.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function oN(t,e,n){let i=!1,s=!1,a=!1;for(let c=0,h=e.length;c<h;c++){let f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(t);let r=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let f=e[c];if(i){let u=f.POSITION!==void 0?n.getDependency("accessor",f.POSITION):t.attributes.position;r.push(u)}if(s){let u=f.NORMAL!==void 0?n.getDependency("accessor",f.NORMAL):t.attributes.normal;o.push(u)}if(a){let u=f.COLOR_0!==void 0?n.getDependency("accessor",f.COLOR_0):t.attributes.color;l.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],f=c[1],u=c[2];return i&&(t.morphAttributes.position=h),s&&(t.morphAttributes.normal=f),a&&(t.morphAttributes.color=u),t.morphTargetsRelative=!0,t})}function lN(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){let n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++)t.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cN(t){let e,n=t.extensions&&t.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+x_(n.attributes):e=t.indices+":"+x_(t.attributes)+":"+t.mode,t.targets!==void 0)for(let i=0,s=t.targets.length;i<s;i++)e+=":"+x_(t.targets[i]);return e}function x_(t){let e="",n=Object.keys(t).sort();for(let i=0,s=n.length;i<s;i++)e+=n[i]+":"+t[n[i]]+";";return e}function X_(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uN(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?"image/jpeg":t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?"image/webp":t.search(/\.ktx2($|\?)/i)>0||t.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var hN=new ke,W_=class{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new iN,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,a=o.indexOf("Firefox")>-1,r=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&r<98?this.textureLoader=new Or(this.options.manager):this.textureLoader=new su(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){let i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){let o={scene:r[0][s.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:s.asset,parser:i,userData:{}};return Xr(a,o,s),ps(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(n)}_markDefs(){let e=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=n.length;s<a;s++){let r=n[s].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let s=0,a=e.length;s<a;s++){let r=e[s];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,i){if(e.refs[n]<=1)return i;let s=i.clone(),a=(r,o)=>{let l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(let[c,h]of r.children.entries())a(h,o.children[c])};return a(i,s),s.name+="_instance_"+e.uses[n]++,s}_invokeOne(e){let n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){let s=e(n[i]);if(s)return s}return null}_invokeAll(e){let n=Object.values(this.plugins);n.unshift(this);let i=[];for(let s=0;s<n.length;s++){let a=e(n[s]);a&&i.push(a)}return i}getDependency(e,n){let i=e+":"+n,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(n);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(n)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(n)});break;case"accessor":s=this.loadAccessor(n);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(n)});break;case"buffer":s=this.loadBuffer(n);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(n)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(n)});break;case"skin":s=this.loadSkin(n);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(n)});break;case"camera":s=this.loadCamera(n);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,n)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let n=this.cache.get(e);if(!n){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(s.map(function(a,r){return i.getDependency(e,r)})),this.cache.add(e,n)}return n}loadBuffer(e){let n=this.json.buffers[e],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(a,r){i.load(js.resolveURL(n.uri,s.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){let n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(i){let s=n.byteLength||0,a=n.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){let n=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let r=v_[s.type],o=bl[s.componentType],l=s.normalized===!0,c=new o(s.count*r);return Promise.resolve(new Wt(c,r,l))}let a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(r){let o=r[0],l=v_[s.type],c=bl[s.componentType],h=c.BYTES_PER_ELEMENT,f=h*l,u=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(d&&d!==f){let p=Math.floor(u/d),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=n.cache.get(_);M||(x=new c(o,p*d,s.count*d/h),M=new ll(x,d/h),n.cache.add(_,M)),m=new cl(M,l,u%d/h,g)}else o===null?x=new c(s.count*l):x=new c(o,u,s.count*l),m=new Wt(x,l,g);if(s.sparse!==void 0){let p=v_.SCALAR,_=bl[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,A=new _(r[1],M,s.sparse.count*p),T=new c(r[2],v,s.sparse.count*l);o!==null&&(m=new Wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,y=A.length;w<y;w++){let E=A[w];if(m.setX(E,T[w*l]),l>=2&&m.setY(E,T[w*l+1]),l>=3&&m.setZ(E,T[w*l+2]),l>=4&&m.setW(E,T[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let n=this.json,i=this.options,a=n.textures[e].source,r=n.images[a],o=this.textureLoader;if(r.uri){let l=i.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,n,i){let s=this,a=this.json,r=a.textures[e],o=a.images[n],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(n,i).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(a.samplers||{})[r.sampler]||{};return h.magFilter=K1[u.magFilter]||Qt,h.minFilter=K1[u.minFilter]||ki,h.wrapS=J1[u.wrapS]||za,h.wrapT=J1[u.wrapT]||za,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==jt&&h.minFilter!==Qt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,n){let i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let r=s.images[e],o=self.URL||self.webkitURL,l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=i.getDependency("bufferView",r.bufferView).then(function(f){c=!0;let u=new Blob([f],{type:r.mimeType});return l=o.createObjectURL(u),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(f){return new Promise(function(u,d){let g=u;n.isImageBitmapLoader===!0&&(g=function(x){let m=new hn(x);m.needsUpdate=!0,u(m)}),n.load(js.resolveURL(f,a.path),g,void 0,d)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),ps(f,r),f.userData.mimeType=r.mimeType||uN(r.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,n,i,s){let a=this;return this.getDependency("texture",i.index).then(function(r){if(!r)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(r=r.clone(),r.channel=i.texCoord),a.extensions[Je.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=a.associations.get(r);r=a.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,l)}}return s!==void 0&&(r.colorSpace=s),e[n]=r,r})}assignFinalMaterial(e){let n=e.geometry,i=e.material,s=n.attributes.tangent===void 0,a=n.attributes.color!==void 0,r=n.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new dl,Yn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Ha,Yn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||a||r){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),a&&(l.vertexColors=!0),r&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return zt}loadMaterial(e){let n=this,i=this.json,s=this.extensions,a=i.materials[e],r,o={},l=a.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){let f=s[Je.KHR_MATERIALS_UNLIT];r=f.getMaterialType(),c.push(f.extendParams(o,a,n))}else{let f=a.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){let u=f.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Bn),o.opacity=u[3]}f.baseColorTexture!==void 0&&c.push(n.assignTexture(o,"map",f.baseColorTexture,At)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(n.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(n.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=En);let h=a.alphaMode||y_.OPAQUE;if(h===y_.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===y_.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==bn&&(c.push(n.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Oe(1,1),a.normalTexture.scale!==void 0)){let f=a.normalTexture.scale;o.normalScale.set(f,f)}if(a.occlusionTexture!==void 0&&r!==bn&&(c.push(n.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==bn){let f=a.emissiveFactor;o.emissive=new Ie().setRGB(f[0],f[1],f[2],Bn)}return a.emissiveTexture!==void 0&&r!==bn&&c.push(n.assignTexture(o,"emissiveMap",a.emissiveTexture,At)),Promise.all(c).then(function(){let f=new r(o);return a.name&&(f.name=a.name),ps(f,a),n.associations.set(f,{materials:e}),a.extensions&&Xr(s,f,a),f})}createUniqueName(e){let n=St.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){let n=this,i=this.extensions,s=this.primitiveCache;function a(o){return i[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,n).then(function(l){return j1(l,o,n)})}let r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=cN(c),f=s[h];if(f)r.push(f.promise);else{let u;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?u=a(c):u=j1(new Bt,c,n),s[h]={primitive:c,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){let n=this,i=this.json,s=this.extensions,a=i.meshes[e],r=a.primitives,o=[];for(let l=0,c=r.length;l<c;l++){let h=r[l].material===void 0?rN(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(n.loadGeometries(r)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],f=[];for(let d=0,g=h.length;d<g;d++){let x=h[d],m=r[d],p,_=c[d];if(m.mode===Di.TRIANGLES||m.mode===Di.TRIANGLE_STRIP||m.mode===Di.TRIANGLE_FAN||m.mode===void 0)p=a.isSkinnedMesh===!0?new Xc(x,_):new lt(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Di.TRIANGLE_STRIP?p.geometry=__(p.geometry,pu):m.mode===Di.TRIANGLE_FAN&&(p.geometry=__(p.geometry,yl));else if(m.mode===Di.LINES)p=new Lr(x,_);else if(m.mode===Di.LINE_STRIP)p=new Nr(x,_);else if(m.mode===Di.LINE_LOOP)p=new Yc(x,_);else if(m.mode===Di.POINTS)p=new Zc(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&lN(p,a),p.name=n.createUniqueName(a.name||"mesh_"+e),ps(p,a),m.extensions&&Xr(s,p,m),n.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)n.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return a.extensions&&Xr(s,f[0],a),f[0];let u=new Lt;a.extensions&&Xr(s,u,a),n.associations.set(u,{meshes:e});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}loadCamera(e){let n,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new ln(Za.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(n=new Xa(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),ps(n,i),Promise.resolve(n)}loadSkin(e){let n=this.json.skins[e],i=[];for(let s=0,a=n.joints.length;s<a;s++)i.push(this._loadNodeShallow(n.joints[s]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let a=s.pop(),r=s,o=[],l=[];for(let c=0,h=r.length;c<h;c++){let f=r[c];if(f){o.push(f);let u=new ke;a!==null&&u.fromArray(a.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[c])}return new Wc(o,l)})}loadAnimation(e){let n=this.json,i=this,s=n.animations[e],a=s.name?s.name:"animation_"+e,r=[],o=[],l=[],c=[],h=[];for(let f=0,u=s.channels.length;f<u;f++){let d=s.channels[f],g=s.samplers[d.sampler],x=d.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(r.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(x))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(f){let u=f[0],d=f[1],g=f[2],x=f[3],m=f[4],p=[];for(let M=0,v=u.length;M<v;M++){let A=u[M],T=d[M],w=g[M],y=x[M],E=m[M];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let D=i._createAnimationTracks(A,T,w,y,E);if(D)for(let I=0;I<D.length;I++)p.push(D[I])}let _=new eu(a,void 0,p);return ps(_,s),_})}createNodeMesh(e){let n=this.json,i=this,s=n.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){let r=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),r})}loadNode(e){let n=this.json,i=this,s=n.nodes[e],a=i._loadNodeShallow(e),r=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)r.push(i.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(r),l]).then(function(c){let h=c[0],f=c[1],u=c[2];u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,hN)});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);if(h.userData.pivot!==void 0&&f.length>0){let d=h.userData.pivot,g=f[0];h.pivot=new P().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let n=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let a=n.nodes[e],r=a.name?s.createUniqueName(a.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),a.camera!==void 0&&o.push(s.getDependency("camera",a.camera).then(function(c){return s._getNodeRef(s.cameraCache,a.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(a.isBone===!0?h=new ul:c.length>1?h=new Lt:c.length===1?h=c[0]:h=new Pt,h!==c[0])for(let f=0,u=c.length;f<u;f++)h.add(c[f]);if(a.name&&(h.userData.name=a.name,h.name=r),ps(h,a),a.extensions&&Xr(i,h,a),a.matrix!==void 0){let f=new ke;f.fromArray(a.matrix),h.applyMatrix4(f)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(a.mesh!==void 0&&s.meshCache.refs[a.mesh]>1){let f=s.associations.get(h);s.associations.set(h,{...f})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let n=this.extensions,i=this.json.scenes[e],s=this,a=new Lt;i.name&&(a.name=s.createUniqueName(i.name)),ps(a,i),i.extensions&&Xr(n,a,i);let r=i.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(s.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,f=l.length;h<f;h++){let u=l[h];u.parent!==null?a.add(q1(u)):a.add(u)}let c=h=>{let f=new Map;for(let[u,d]of s.associations)(u instanceof Yn||u instanceof hn)&&f.set(u,d);return h.traverse(u=>{let d=s.associations.get(u);d!=null&&f.set(u,d)}),f};return s.associations=c(a),a})}_createAnimationTracks(e,n,i,s,a){let r=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Ja[a.path]===Ja.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Ja[a.path]){case Ja.weights:h=Zs;break;case Ja.rotation:h=Ks;break;case Ja.translation:case Ja.scale:h=ka;break;default:i.itemSize===1?h=Zs:h=ka;break}let f=s.interpolation!==void 0?aN[s.interpolation]:Rr,u=this._getArrayFromAccessor(i);for(let d=0,g=l.length;d<g;d++){let x=new h(l[d]+"."+Ja[a.path],n.array,u,f);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),r.push(x)}return r}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){let i=X_(n.constructor),s=new Float32Array(n.length);for(let a=0,r=n.length;a<r;a++)s[a]=n[a]*i;n=s}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Ks?G_:np;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function fN(t,e,n){let i=e.attributes,s=new fi;if(i.POSITION!==void 0){let o=n.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){let h=X_(bl[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let a=e.targets;if(a!==void 0){let o=new P,l=new P;for(let c=0,h=a.length;c<h;c++){let f=a[c];if(f.POSITION!==void 0){let u=n.json.accessors[f.POSITION],d=u.min,g=u.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),u.normalized){let x=X_(bl[u.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}t.boundingBox=s;let r=new qn;s.getCenter(r.center),r.radius=s.min.distanceTo(s.max)/2,t.boundingSphere=r}function j1(t,e,n){let i=e.attributes,s=[];function a(r,o){return n.getDependency("accessor",r).then(function(l){t.setAttribute(o,l)})}for(let r in i){let o=k_[r]||r.toLowerCase();o in t.attributes||s.push(a(i[r],o))}if(e.indices!==void 0&&!t.index){let r=n.getDependency("accessor",e.indices).then(function(o){t.setIndex(o)});s.push(r)}return Ze.workingColorSpace!==Bn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),ps(t,e),fN(t,e,n),Promise.all(s).then(function(){return e.targets!==void 0?oN(t,e.targets,n):t})}var $1=new zt({color:"#181d1e",roughness:.94}),ms=new zt({color:"#242d2d",roughness:.5}),q_=new zt({color:"#a3adb0",metalness:.85,roughness:.25}),ip=new Tn({color:"#7896a1",metalness:.2,roughness:.1,transparent:!0,opacity:.67,clearcoat:1,side:En}),dN=new Va(1,20,14);function Jn(t,e,n,i,s,a){let r=new lt(e,n);return r.position.set(i,s,a),r.castShadow=!0,r.receiveShadow=!0,t.add(r),r}function en(t,e,n,i,s,a,r,o,l=.04){return Jn(t,new $d(s,a,r,2,l),o,e,n,i)}function Tl(t,e,n,i,s,a,r,o){let l=Jn(t,dN,o,e,n,i);return l.scale.set(s,a,r),l}function eT(){let t=new Lt;t.name="Defender 110 inspired SUV";let e=new Lt;t.add(e);let n=new Tn({color:"#596d66",metalness:.55,roughness:.29,clearcoat:1,clearcoatRoughness:.18}),i=new zt({color:"#d4d3c8",metalness:.25,roughness:.32});en(e,0,.72,0,2.03,.26,4.65,ms,.07),en(e,0,1.2,0,2.02,.81,4.7,n,.09),en(e,0,1.87,-.43,1.98,1.05,3.38,n,.08),en(e,0,2.43,-.43,2.05,.12,3.52,i,.05),en(e,0,1.62,1.77,1.97,.14,1.18,n);let s=en(e,0,2.01,1.272,1.76,.65,.028,ip,.025);s.rotation.x=-.1,en(e,0,2.03,-2.137,1.62,.64,.028,ip,.025);for(let d of[-1,1]){for(let[g,x]of[[.7,.94],[-.38,.94],[-1.48,.8]])en(e,d*1.004,2.01,g,.026,.65,x,ip,.02);for(let g of[.22,-.86])en(e,d*1.025,1.5,g,.035,.06,.27,ms,.01);for(let g of[.16,-.9])en(e,d*1.02,1.21,g,.024,.78,.018,ms,.006);en(e,d*1.11,1.88,1.07,.25,.22,.3,ms,.04),en(e,d*.8,2.56,-.47,.045,.15,3.15,ms,.018),en(e,d*1.04,.63,-.12,.19,.1,2.2,q_,.025);for(let g of[-1.5,1.5]){let x=Jn(e,new Ga(.61,.095,8,24,Math.PI),ms,d*1.02,.62,g);x.rotation.y=Math.PI/2}}en(e,0,1.18,2.37,1.3,.4,.055,ms);for(let d=0;d<5;d++)en(e,0,1.02+d*.075,2.41,1.23,.018,.024,q_,.006);en(e,0,.78,2.4,2.1,.25,.21,ms,.04),en(e,0,.76,-2.42,2.1,.28,.22,ms,.04),en(e,0,.81,2.52,.5,.13,.018,new zt({color:"#dedcc6"}),.012);let a=new zt({color:"#fff6d7",emissive:"#fff1cc",emissiveIntensity:2.2});for(let d of[-.77,.77]){let g=Jn(e,new Ga(.17,.028,8,24),a,d,1.36,2.4);Jn(e,new Jc(.138,24),ip,d,1.36,2.403)}let r=new zt({color:"#ac1716",emissive:"#ed2420",emissiveIntensity:.4});for(let d of[-.85,.85])for(let g of[1.11,1.55])en(e,d,g,-2.377,.16,.23,.05,r,.04);let o=document.createElement("canvas");o.width=512,o.height=64;let l=o.getContext("2d");l.fillStyle="#596d66",l.fillRect(0,0,512,64),l.fillStyle="#e2e5de",l.font="bold 36px Arial",l.textAlign="center",l.fillText("D E F E N D E R",256,46);let c=new Ir(o);c.colorSpace=At,Jn(e,new qs(1.12,.14),new bn({map:c}),0,1.625,2.365);let h=[];function f(d,g,x,m,p=!1){let _=new Lt;_.position.set(g,x,m),d.add(_);let M=new Lt;_.add(M);let v=Jn(M,new Vi(.55,.55,.29,32),$1,0,0,0);v.rotation.z=Math.PI/2;let A=Jn(M,new Vi(.34,.34,.305,24),q_,0,0,0);A.rotation.z=Math.PI/2;for(let T of[-1,1])for(let w=0;w<5;w++){let y=w*Math.PI*2/5,E=en(M,T*.163,Math.sin(y)*.2,Math.cos(y)*.2,.027,.08,.35,ms,.014);E.rotation.x=-y}for(let T=0;T<28;T++){let w=T*Math.PI*2/28,y=en(M,0,Math.cos(w)*.546,Math.sin(w)*.546,.3,.042,.1,$1,.008);y.rotation.x=w}return p?_.rotation.y=Math.PI/2:h.push({pivot:_,spin:M,front:m>0}),_}for(let d of[-1,1])for(let g of[-1.5,1.5])f(t,d*1.02,.59,g);f(e,0,1.53,-2.57,!0);let u=[];for(let d of[-.76,.76]){let g=new Br("#fff1d2",0,65,.4,.45,1.4);g.position.set(d,1.33,2.2),g.target.position.set(d,.1,42),t.add(g,g.target),u.push(g)}return{g:t,wheels:h,body:e,brakeMat:r,headlights:u,animate(d,g,x,m,p,_){for(let M of h)M.spin.rotation.x+=d*p/.55,M.pivot.rotation.y=M.front?g*.4:0;e.rotation.z=Za.lerp(e.rotation.z,-g*Math.min(Math.abs(d)/25,1)*.035,p*5),e.rotation.x=Za.lerp(e.rotation.x,x&&Math.abs(d)>2?.024:0,p*5),e.position.y=Math.sin(_*10)*Math.min(Math.abs(d),20)*8e-4,r.emissiveIntensity=x?4:m?1.2:.25,u.forEach(M=>M.intensity=m?65:0)}}}function Y_(t="#ccc7b6",e="#35434c"){let n=new Lt;n.name="Human character";let i=new zt({color:"#c99d87",roughness:.68}),s=new zt({color:t,roughness:.95}),a=new zt({color:e,roughness:.94}),r=new zt({color:"#292d2c",roughness:.76}),o=Jn(n,new Qc([new Oe(.17,.91),new Oe(.2,1.04),new Oe(.22,1.28),new Oe(.255,1.42),new Oe(.1,1.49)],24),s,0,0,0);o.scale.z=.65,Tl(n,0,.94,0,.205,.16,.13,a);let l=new Lt;l.position.y=1.33,n.add(l);let c=new Lt;l.add(c),Tl(c,0,.36,0,.112,.15,.115,i),Tl(c,0,.2,0,.065,.1,.065,i),Tl(c,0,.405,-.013,.113,.102,.114,new zt({color:"#302821",roughness:1}));let h=[];for(let f of[-1,1]){let u=new Lt;u.position.set(f*.108,.94,0),n.add(u),Jn(u,new Ws(.094,.26,5,12),a,0,-.22,0);let d=new Lt;d.position.y=-.43,u.add(d),Jn(d,new Ws(.073,.27,5,12),a,0,-.2,0),Tl(d,0,-.445,.067,.09,.06,.155,r);let g=new Lt;g.position.set(f*.251,1.405,0),g.rotation.z=f*.075,n.add(g),Jn(g,new Ws(.078,.15,4,12),s,0,-.12,0);let x=new Lt;x.position.y=-.26,g.add(x),Jn(x,new Ws(.048,.18,4,12),i,0,-.13,0),Tl(x,0,-.292,.007,.042,.072,.028,i);for(let m=0;m<4;m++)Jn(x,new Ws(.007,.041,3,6),i,(m-1.5)*.016,-.36,.009);h.push({side:f,leg:u,knee:d,arm:g,elbow:x})}return{g:n,headMount:l,fallback:c,animate(f,u){let d=Math.min(Math.abs(u)/3,1),g=f*(Math.abs(u)>5?11:7.5);for(let x of h){let m=Math.sin(g+(x.side>0?Math.PI:0))*d;x.leg.rotation.x=m*.46,x.knee.rotation.x=Math.max(0,-m)*.63,x.arm.rotation.x=-m*.36,x.elbow.rotation.x=-.11-Math.max(0,m)*.16}o.rotation.z=Math.sin(g)*d*.017,l.rotation.y=Math.sin(f*.65)*.055,n.position.y=Math.abs(Math.sin(g))*d*.025}}}async function tT(t,e){let n=new ep,i=new Or,[s,a,r]=await Promise.all([n.loadAsync("./human-head.glb"),i.loadAsync("./human-color.jpg"),i.loadAsync("./human-normal.jpg")]);a.colorSpace=At;let o;if(s.scene.traverse(f=>{f.isMesh&&!o&&(o=f.geometry)}),!o)throw new Error("Human scan contains no mesh");let l=new zt({map:a,normalMap:r,normalScale:new Oe(.6,.6),roughness:.65});o.computeBoundingBox();let c=o.boundingBox,h=.55/(c.max.y-c.min.y);if(e()){o.dispose(),l.dispose(),a.dispose(),r.dispose();return}for(let f of t){let u=new lt(o,l);u.scale.setScalar(h),u.position.y=-c.min.y*h,u.castShadow=!0,f.headMount.add(u),f.fallback.visible=!1}return[a,r]}function nT(t){for(let[e,n]of t)["#50585a","#b9b4a0","#848866","#cdbb93","#dfc798","#83aaa6","#cfa388","#b6bfab","#dfd6b7","#e7e2cc","#d7cfb6"].includes(e)&&(n.roughness=e==="#50585a"?.84:.95,n.onBeforeCompile=i=>{i.vertexShader=`varying vec3 efWorld;
`+i.vertexShader,i.vertexShader=i.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
efWorld=(modelMatrix*vec4(transformed,1.0)).xyz;`),i.fragmentShader=`varying vec3 efWorld;
float efNoise(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}
`+i.fragmentShader,i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float grain=efNoise(floor(efWorld*48.0)); float stain=efNoise(floor(efWorld*1.3)); diffuseColor.rgb*=mix(0.84,1.08,grain)*mix(0.91,1.04,stain);`)})}function iT(t){let e={day:{value:1}},n=new lt(new Va(650,32,16),new zn({side:An,depthWrite:!1,uniforms:e,vertexShader:"varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`varying vec3 vDir;uniform float day;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
 void main(){vec3 d=normalize(vDir);float h=max(d.y,0.);vec3 c=mix(vec3(.83,.81,.73),vec3(.27,.49,.65),pow(h,.45));float n=noise(d.xz/(h+.12)*2.)*.65+noise(d.xz/(h+.12)*5.)*.35;float cloud=smoothstep(.55,.75,n)*smoothstep(.03,.25,h);c=mix(c,vec3(.92,.91,.86),cloud*.8);float sun=pow(max(dot(d,normalize(vec3(-90.,140.,65.))),0.),850.);c+=vec3(1.,.78,.45)*sun*2.;c=mix(vec3(.025,.047,.078)+vec3(.04,.07,.10)*h,c,day);gl_FragColor=vec4(c,1.);}`}));t.add(n);let i=[];for(let a=0;a<6;a++){let r=document.createElement("canvas");r.width=r.height=64;let o=r.getContext("2d"),l=o.createLinearGradient(0,0,0,64);l.addColorStop(0,a===3?"#68715e":"#8da6b8"),l.addColorStop(.65,"#d3d3c4"),l.addColorStop(1,"#6a705e"),o.fillStyle=l,o.fillRect(0,0,64,64),i.push(r)}let s=new Ur(i);return s.colorSpace=At,s.needsUpdate=!0,t.environment=s,t.environmentIntensity=.8,{setNight(a){e.day.value=a?0:1,t.environmentIntensity=a?.09:.8},dispose(){s.dispose()}}}function sT(t,e){let n=new Vc;n.background=new Ie("#c6dbe0"),n.fog=new Hc("#c6dbe0",170,600);let i=!1,s="loading",a=iT(n),r=new Jd({antialias:!0,powerPreference:"high-performance"});r.setPixelRatio(Math.min(devicePixelRatio,1.6)),r.shadowMap.enabled=!0,r.shadowMap.type=nd,r.outputColorSpace=At,r.toneMapping=ru,r.toneMappingExposure=1.2,t.appendChild(r.domElement);let o=new ln(54,1,.15,1e3),l=new tu(14742527,8680272,1.35);n.add(l);let c=new Fr(16766113,3.3);c.position.set(-90,140,65),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-190,right:190,top:190,bottom:-190,near:1,far:400}),c.shadow.bias=-4e-4,n.add(c);let h=new Map,f=new os(1,1,1),u=[],d=[],g=[],x=N=>(h.has(N)||h.set(N,new zt({color:N,roughness:.83})),h.get(N));function m(N,C,O,Q,oe,ee,ae,fe=n){let ce=new lt(f,x(ae));return ce.position.set(N,C,O),ce.scale.set(Q,oe,ee),ce.castShadow=oe>1,ce.receiveShadow=!0,fe.add(ce),ce}function p(N,C,O,Q,oe,ee){m(N,Q/2,C,O,Q,oe,ee),u.push({x:N,z:C,w:O/2,d:oe/2}),d.push({x:N,z:C,w:O,d:oe})}function _(N,C,O,Q,oe=12,ee="#173c46",ae=0){let fe=document.createElement("canvas");fe.width=512,fe.height=96;let ce=fe.getContext("2d");ce.fillStyle=ee,ce.fillRect(0,0,512,96),ce.fillStyle="#fff2cd",ce.textAlign="center",ce.textBaseline="middle",ce.font="bold 33px Arial",ce.fillText(N,256,50,486);let _e=new Ir(fe);_e.colorSpace=At,g.push(_e);let U=new lt(new qs(oe,oe*96/512),new bn({map:_e,side:En}));return U.position.set(C,O,Q),U.rotation.y=ae,n.add(U),U}m(0,-.4,0,760,.6,760,"#848866");let M=[{x:0,z:0,w:600,d:22},{x:30,z:0,w:28,d:590},{x:-252,z:0,w:17,d:560},{x:238,z:0,w:19,d:560},{x:0,z:-148,w:600,d:17},{x:0,z:154,w:600,d:20}];for(let N of M)if(m(N.x,.01,N.z,N.w,.12,N.d,"#50585a"),N.w>N.d){m(N.x,.1,N.z-N.d/2-1,N.w,.2,2,"#b9b4a0"),m(N.x,.1,N.z+N.d/2+1,N.w,.2,2,"#b9b4a0");for(let C=-290;C<295;C+=15)m(C,.09,N.z,.28,.03,.1,"#ece1b6").scale.set(6,.03,.3)}else for(let C=-285;C<285;C+=15)m(N.x,.1,C,.35,.03,6,"#ece1b6");for(let N=0;N<8;N++)m(12+N*2.5,.15,-22,1.3,.04,7,"#ddd9bb"),m(12+N*2.5,.15,24,1.3,.04,7,"#ddd9bb");p(-221,0,30,8,116,"#b39a72"),u.push({x:-201,z:0,w:10,d:16});for(let N=0;N<7;N++){let C=30-N*3.1,O=18-N*1.3,Q=9+N*4.5;m(-201,Q,0,O,4.1,C,"#d6b980"),m(-201,Q+2.2,0,O+1.3,.7,C+1.2,"#e9cd98");for(let oe=0;oe<Math.floor(C/3);oe++){let ee=-C/2+1.5+oe*3;m(-201+O/2+.25,Q,ee,.6,2,1.2,"#b89a63"),m(-201+O/2+.7,Q+1.3,ee,1,.4,1.6,"#f0d5a0")}}for(let N=-2;N<=2;N++){let C=new lt(new Va(.8,8,6),x("#e7bf62"));C.position.set(-201,41,N*2.1),n.add(C)}m(-190,4,0,.3,8,7,"#392e26"),_("SREE PADMANABHASWAMY",-180,8,0,29,"#79613b",Math.PI/2),p(-143,-64,74,.4,66,"#468e89");for(let N=0;N<4;N++){let C=78+N*3,O=70+N*3;m(-143,.3+N*.19,-64-O/2,C,.4,1.8,"#aaa38a"),m(-143,.3+N*.19,-64+O/2,C,.4,1.8,"#aaa38a"),m(-143-C/2,.3+N*.19,-64,1.8,.4,O,"#aaa38a"),m(-143+C/2,.3+N*.19,-64,1.8,.4,O,"#aaa38a")}_("PADMATHEERTHAM",-142,3,-22,20);for(let N of[-18,18])p(-40,N,8,10,17,"#e7e2cc"),m(-40,10.6,N,10,1,19,"#f9f0d7"),m(-40,12,N,7,2,14,"#d6d1ba");m(-40,10.8,0,8,3.2,24,"#f3ead5"),m(-40,12.8,0,10,.8,27,"#fff2da"),_("EAST FORT",-35.8,10.8,0,17,"#7a745f",Math.PI/2);for(let N of[-83,83])p(-40,N,3,4,108,"#d7cfb6");function v(N,C,O,Q,oe){let ee=new lt(new jc(1,1,4),x("#98563a"));ee.position.set(N,oe,C),ee.rotation.y=Math.PI/4,ee.scale.set(O*.72,4,Q*.72),ee.castShadow=!0,n.add(ee)}p(-149,67,67,6,52,"#d4ba8f"),v(-149,67,73,58,8),_("KUTHIRAMALIKA",-147,5,39,25,"#684630");let A=["CHALAI STORES","KERALA SPICES","TEXTILES","BAKERY & TEA","FRESH FRUIT","SILKS","MALABAR TRADERS","FLOWER MARKET","BOOK HOUSE","COFFEE"],T=["#cdbb93","#dfc798","#83aaa6","#cfa388","#b6bfab","#dfd6b7"],w=417,y=()=>(w=w*1664525+1013904223>>>0,w/4294967296);function E(N,C,O,Q,oe,ee,ae=1){p(N,C,O,oe,Q,T[ee%T.length]),m(N,oe+.3,C,O+1,.6,Q+1,"#c1b49d");let fe=C+ae*(Q/2+.1);for(let _e=-O/2+2;_e<O/2-1;_e+=4)m(N+_e,1.7,fe,2.9,3.2,.2,"#4c645f"),oe>7&&m(N+_e,6,fe,1.8,2,.2,"#3b6065");_(A[ee%A.length],N,4.2,fe+ae*.2,O*.93,ee%2?"#9d4931":"#1e6066");let ce=m(N,3.25,fe+ae*1.3,O+.6,.25,3,ee%2?"#d3984e":"#417e79");ce.rotation.x=ae*.12;for(let _e=-O/2+1;_e<O/2;_e+=3)m(N+_e,.5,fe+ae*2,2,.8,1.1,ee%2?"#b18043":"#a5a347");ee%3===0&&(m(N,oe+1,C,2,1.5,2,"#4e5450"),m(N+3,oe+.7,C,3,.6,2,"#8d9992"))}let D=0;for(let N=67;N<282;N+=19)Math.abs(N-238)<20||(E(N,-25,17,24,7+y()*8,D++,1),E(N,29,17,26,6+y()*9,D++,-1));for(let N=-176;N<-67;N+=21)E(N,23,19,15,6+y()*4,D++,-1);for(let N of[-185,-110,105,194])for(let C=-280;C<295;C+=24)Math.abs(C-30)<29||Math.abs(C+252)<25||Math.abs(C-238)<24||Math.abs(C+40)<13||N===-110&&C>-225&&C<-85||E(C,N,20,22,7+y()*13,D++,N<0?1:-1);for(let N of[-285,267])for(let C=-250;C<270;C+=28)Math.abs(C)<48||Math.abs(C+148)<27||Math.abs(C-154)<28||p(N,C,20,6+y()*16,22,T[D++%6]);m(83,.2,80,59,.25,58,"#6c8b58"),m(152,.13,99,66,.2,55,"#b49a70"),_("GANDHI PARK",83,4,48,18),_("PUTHARIKANDAM MAIDAN",152,3.5,69,29);function I(N,C,O=13){let Q=new lt(new Vi(.19,.37,O,12),x("#847358"));Q.position.set(N,O/2,C),n.add(Q);let oe=[];for(let fe=0;fe<9;fe++){let ce=fe*Math.PI*2/9;for(let _e=0;_e<18;_e++){let U=_e/18,se=(_e+1)/18,j=5.3,ue=new P(Math.sin(ce)*U*j,O+Math.sin(U*Math.PI)*1-U*U*2,Math.cos(ce)*U*j),pe=new P(Math.sin(ce)*se*j,O+Math.sin(se*Math.PI)*1-se*se*2,Math.cos(ce)*se*j);for(let ne of[-1,1]){let Te=Math.sin(U*Math.PI)*.8+.08,be=ue.clone().add(new P(Math.cos(ce)*ne*Te,-.28,-Math.sin(ce)*ne*Te));oe.push(...ue.toArray(),...pe.toArray(),...be.toArray())}}}let ee=new Bt;ee.setAttribute("position",new st(oe,3)),ee.computeVertexNormals();let ae=new lt(ee,new zt({color:"#3f7045",roughness:1,side:En}));ae.position.set(N,0,C),ae.castShadow=!0,n.add(ae)}for(let N=0;N<42;N++){let C=-280+y()*560,O=-260+y()*520;M.some(Q=>Math.abs(C-Q.x)<Q.w/2+4&&Math.abs(O-Q.z)<Q.d/2+4)||u.some(Q=>Math.abs(C-Q.x)<Q.w+2&&Math.abs(O-Q.z)<Q.d+2)||I(C,O,10+y()*5)}for(let N of[59,105])for(let C of[59,98])I(N,C),m(N,1,C+4,5,.4,1,"#634c32"),m(N,1.7,C+4.5,5,1,.2,"#634c32");let z=[];for(let N=-240;N<265;N+=42)for(let C of[12,48]){m(C,5,N,.2,10,.2,"#4b5b56"),m(C+1.1,10,N,2.5,.17,.2,"#4b5b56");let O=m(C+2.2,9.9,N,1,.15,.65,"#fff2b7");z.push(O)}_("EAST FORT BUS STAND",48,5,-65,22,"#315e61",Math.PI/2);let q=[];function Y(N,C,O="#e2ae52",Q="car",oe=0){let ee=new Lt,ae=Q==="bus",fe=Q==="auto",ce=ae?3:fe?1.8:2.2,_e=ae?9:fe?3:4.6;m(0,1,0,ce,1.25,_e,O,ee),m(0,ae?2.35:1.85,ae?0:.2,ce*.91,ae?1.6:.85,_e*.62,fe?"#262f2c":O,ee),m(0,ae?2.6:1.94,_e*.32+.02,ce*.84,.65,.07,"#345c67",ee),m(0,ae?2.6:1.94,-_e*.32-.02,ce*.84,.6,.07,"#345c67",ee);for(let se of[-1,1]){m(se*ce*.46,ae?2.6:1.95,0,.05,.62,_e*.49,"#365b62",ee);for(let j of[-_e*.31,_e*.31]){let ue=new lt(new Vi(.5,.5,.3,10),x("#222b2d"));ue.rotation.z=Math.PI/2,ue.position.set(se*ce*.49,.55,j),ee.add(ue)}m(se*ce*.32,1.15,_e/2+.02,.42,.25,.08,"#fff1bb",ee),m(se*ce*.32,1.15,-_e/2-.02,.4,.2,.08,"#b34a36",ee)}ae&&(m(0,1.2,0,ce+.03,.23,_e+.03,"#eedeb7",ee),m(0,3.2,0,ce+.1,.2,_e+.1,"#eee1c4",ee)),ee.position.set(N,0,C),ee.rotation.y=oe,n.add(ee);let U={g:ee,x:N,z:C,angle:oe,speed:0,r:ae?4.7:2.3};return q.push(U),U}let V=eT();V.g.position.set(3,0,1),V.g.rotation.y=-Math.PI/2,n.add(V.g);let K={g:V.g,x:3,z:1,angle:-Math.PI/2,speed:0,r:2.65};q.push(K),Y(51,-85,"#b84e3d","bus"),Y(51,-103,"#426d79","bus"),Y(62,47,"#d0a53c","auto",Math.PI/2),Y(190,13,"#d9d8c7","car",Math.PI/2),Y(-95,12,"#5a8b8b","car",Math.PI/2);let Z=[Y(23,-225,"#d2ab41","auto"),Y(38,230,"#b84f3e","bus",Math.PI),Y(23,110,"#c8d4c8"),Y(38,-65,"#659494","car",Math.PI)],ie=Y_(),re=ie.g;n.add(re),re.visible=!1;let de=[];for(let N=0;N<12;N++){let C=Y_(["#b6b1a1","#587f82","#c6b496","#9aada5"][N%4],N%3?"#35434c":"#b7b3a9"),O=C.g;O.position.set(68+y()*200,0,N%2?-12:15),n.add(O),de.push({...C,home:O.position.x,phase:y()*6})}typeof window.Image<"u"&&tT([ie,...de],()=>i).then(N=>{N&&(g.push(...N),s="scanned")}).catch(N=>{s="fallback",console.warn("Scanned face unavailable; using the built-in character.",N)}),nT(h);let ge=[];for(let N=-210;N<220;N+=84){let C=new zr("#ffdba3",0,25,2);C.position.set(14,9,N),n.add(C),ge.push(C)}let xe=new Bt,ze=new Float32Array(1200*6);for(let N=0;N<1200;N++){let C=N*6;ze[C]=(y()-.5)*85,ze[C+1]=y()*35,ze[C+2]=(y()-.5)*85,ze[C+3]=ze[C]-.05,ze[C+4]=ze[C+1]-.7,ze[C+5]=ze[C+2]}xe.setAttribute("position",new Wt(ze,3));let _t=new Lr(xe,new Ha({color:"#c2d7df",transparent:!0,opacity:.38,depthWrite:!1}));n.add(_t),_t.visible=!1;let Xe=new lt(new Ga(5,.25,8,40),new bn({color:"#ffc56c"}));Xe.rotation.x=Math.PI/2,Xe.position.y=.45,n.add(Xe),Xe.visible=!1;let $=new lt(new Vi(.65,.65,24,12),new bn({color:"#ffcf7b",transparent:!0,opacity:.25,depthWrite:!1}));n.add($),$.visible=!1;let he=[{x:144,z:2,name:"Chalai market"},{x:-107,z:0,name:"Temple approach"},{x:30,z:-84,name:"East Fort bus stand"}],L={x:3,z:1,angle:-Math.PI/2,speed:0,mode:"Driving",place:"East Fort",mission:"Explore the neighborhood",step:0,active:!1,paused:!1,night:!1,rain:!1,cam:0},De=K,we={},Ue=0,Ut=performance.now(),We=0,je=0,Qe=0,tt=0;function Ft(N,C,O){return Math.abs(N)>298||Math.abs(C)>282||u.some(Q=>Math.abs(N-Q.x)<Q.w+O&&Math.abs(C-Q.z)<Q.d+O)}function Et(){e({speed:Math.round(Math.abs(L.speed)*3.6),mode:L.mode,place:L.place,mission:L.mission,step:L.step,active:L.active,paused:L.paused,night:L.night,rain:L.rain})}function qt(N){if(document.activeElement?.tagName==="BUTTON"&&document.activeElement.blur(),N==="pause"&&(L.paused=!L.paused),N==="camera"&&(L.cam=(L.cam+1)%3),N==="night"&&(L.night=!L.night,a.setNight(L.night),n.background.set(L.night?"#152739":"#c6dbe0"),n.fog.color.copy(n.background),l.intensity=L.night?.3:1.35,c.intensity=L.night?.25:3.3,c.color.set(L.night?"#a1c5f2":"#ffd4a1"),ge.forEach(C=>C.intensity=L.night?55:0),z.forEach(C=>{C.material.emissive.set(L.night?"#ffd791":"#000000"),C.material.emissiveIntensity=L.night?2:0})),N==="rain"&&(L.rain=!L.rain,_t.visible=L.rain,x("#50585a").roughness=L.rain?.22:.84,n.fog.far=L.rain?330:600,c.intensity=L.night?.25:L.rain?1.3:3.3),N==="reset"&&(L.x=3,L.z=1,L.angle=-Math.PI/2,L.speed=0,L.mode==="Driving"&&(De.x=3,De.z=1)),N==="enter"&&!L.paused)if(L.mode==="Driving"){let O=[{x:L.x+Math.cos(L.angle)*3.7,z:L.z-Math.sin(L.angle)*3.7},{x:L.x-Math.cos(L.angle)*3.7,z:L.z+Math.sin(L.angle)*3.7}].find(Q=>!Ft(Q.x,Q.z,.4));O&&(L.mode="Walking",L.x=O.x,L.z=O.z,L.speed=0,re.visible=!0)}else{let C=q.filter(O=>!Z.includes(O)).find(O=>Math.hypot(O.x-L.x,O.z-L.z)<6);C&&(De=C,L.mode="Driving",L.x=C.x,L.z=C.z,L.angle=C.angle,L.speed=0,re.visible=!1)}N==="mission"&&(L.active=!L.active,L.step=0,Qe=0,L.mission="Deliver to Chalai market"),Et()}function tn(N){if(N.target instanceof HTMLElement&&/INPUT|TEXTAREA/.test(N.target.tagName))return;let C=N.key.toLowerCase();if(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"," ","f","c","r","escape"].includes(C)&&N.preventDefault(),we[C]=!0,!N.repeat){let O={f:"enter",c:"camera",r:"reset",escape:"pause"};O[C]&&qt(O[C])}}function wt(N){we[N.key.toLowerCase()]=!1}function Ht(){Object.keys(we).forEach(N=>we[N]=!1),L.paused=!0,Et()}window.addEventListener("keydown",tn),window.addEventListener("keyup",wt),window.addEventListener("blur",Ht);let B=()=>{r.setSize(t.clientWidth,t.clientHeight),o.aspect=t.clientWidth/t.clientHeight,o.updateProjectionMatrix()};window.addEventListener("resize",B),B(),o.position.set(33,17,12);let wn=document.getElementById("minimap"),Ce=wn?.getContext("2d");function R(){if(!Ce)return;Ce.fillStyle="#17353d",Ce.fillRect(0,0,240,200);let N=O=>120+O*.35,C=O=>100+O*.3;Ce.fillStyle="#3d5456";for(let O of d)Ce.fillRect(N(O.x-O.w/2),C(O.z-O.d/2),O.w*.35,O.d*.3);Ce.fillStyle="#819191";for(let O of M)Ce.fillRect(N(O.x-O.w/2),C(O.z-O.d/2),O.w*.35,O.d*.3);if(Ce.fillStyle="#3c9d9b",Ce.fillRect(N(-180),C(-97),74*.35,66*.3),Ce.font="10px Arial",Ce.fillStyle="#c5d4cd",Ce.fillText("TEMPLE",17,91),Ce.fillText("CHALAI",170,91),L.active){let O=he[L.step];Ce.fillStyle="#ffc66f",Ce.beginPath(),Ce.arc(N(O.x),C(O.z),5,0,Math.PI*2),Ce.fill()}Ce.save(),Ce.translate(N(L.x),C(L.z)),Ce.rotate(-L.angle),Ce.fillStyle="#fff0c2",Ce.beginPath(),Ce.moveTo(0,6),Ce.lineTo(-4,-4),Ce.lineTo(4,-4),Ce.closePath(),Ce.fill(),Ce.restore()}let S=new P,H=new P;function X(N){Ue=requestAnimationFrame(X);let C=Math.min((N-Ut)/1e3,.045);if(Ut=N,!L.paused){je+=C;let oe=(we.w||we.arrowup?1:0)-(we.s||we.arrowdown?1:0),ee=(we.a||we.arrowleft?1:0)-(we.d||we.arrowright?1:0);L.mode==="Driving"?(L.speed+=oe*13*C,L.speed*=Math.exp(-(we[" "]?6:oe?.22:1.4)*C),L.speed=Za.clamp(L.speed,-10,27),L.angle+=ee*1.45*C*Math.min(Math.abs(L.speed)/5,1)*Math.sign(L.speed)):(L.speed=oe*(we.shift?7:4),L.angle+=ee*2.4*C);let ae=L.x+Math.sin(L.angle)*L.speed*C,fe=L.z+Math.cos(L.angle)*L.speed*C,ce=L.mode==="Driving"?1.7:.4,_e=q.some(U=>(U!==De||L.mode==="Walking")&&Math.hypot(ae-U.x,fe-U.z)<U.r+ce*.45);!Ft(ae,fe,ce)&&!_e?(L.x=ae,L.z=fe):L.speed*=-.18,L.mode==="Driving"?(De.x=L.x,De.z=L.z,De.angle=L.angle,De.g.position.set(L.x,0,L.z),De.g.rotation.y=L.angle):(re.position.set(L.x,0,L.z),re.rotation.y=L.angle);for(let U=0;U<Z.length;U++){let se=Z[U],j=U%2?-1:1,ue=se.z+j*7*C;!q.some(ne=>ne!==se&&Math.abs(ne.x-se.x)<4&&j*(ne.z-se.z)>0&&j*(ne.z-se.z)<13)&&Math.hypot(se.x-L.x,ue-L.z)>9&&(se.z=ue),se.z>270&&(se.z=-270),se.z<-270&&(se.z=270),se.g.position.z=se.z}ie.animate(je,L.mode==="Walking"?L.speed:0),V.animate(L.mode==="Driving"&&De===K?L.speed:0,ee,!!we[" "],L.night,C,je);for(let U of de)U.g.position.x=U.home+Math.sin(je*.2+U.phase)*4,U.g.rotation.y=Math.cos(je*.2+U.phase)>0?Math.PI/2:-Math.PI/2,U.animate(je+U.phase,1.8);if(L.rain){_t.position.set(L.x,0,L.z);for(let U=0;U<1200;U++){let se=U*6;ze[se+1]-=C*19,ze[se+1]<0&&(ze[se+1]=35),ze[se+4]=ze[se+1]-.7}xe.attributes.position.needsUpdate=!0}if(L.active){let U=he[L.step];L.mission="Deliver to "+U.name,Xe.visible=$.visible=!0,Xe.position.set(U.x,.5,U.z),$.position.set(U.x,12,U.z),Xe.scale.setScalar(1+Math.sin(je*3)*.08),Math.hypot(L.x-U.x,L.z-U.z)<7&&Math.abs(L.speed)<2?Qe+=C:Qe=0,Qe>1.2&&(Qe=0,L.step<2?L.step++:(L.active=!1,tt=je+8,L.place="Delivery complete!"))}else Xe.visible=$.visible=!1;je>tt&&(L.place=L.x>67?"Chalai Market":L.x<-85?"Temple Approach":L.z<-40?"East Fort Bus Stand":"East Fort")}let O=L.mode==="Driving"?10:3.8,Q=L.cam===1?O*1.8:O;S.set(L.x-Math.sin(L.angle)*Q,L.cam===2?L.mode==="Walking"?1.65:65:L.cam===1?15:L.mode==="Driving"?4.8:2.15,L.z-Math.cos(L.angle)*Q),L.cam===2&&L.mode==="Walking"&&S.set(L.x+Math.sin(L.angle)*3,1.68,L.z+Math.cos(L.angle)*3),o.position.lerp(S,1-Math.exp(-4*C)),H.set(L.x+Math.sin(L.angle)*(L.cam===2&&L.mode==="Walking"?0:3),L.mode==="Driving"?1.5:1.25,L.z+Math.cos(L.angle)*(L.cam===2&&L.mode==="Walking"?0:3)),o.lookAt(H),r.render(n,o),We+=C,We>.12&&(We=0,Et(),R())}Ue=requestAnimationFrame(X),Et();let J=new AbortController,le=document.modelContext;if(le?.registerTool)try{Promise.resolve(le.registerTool({name:"set_game_paused",description:"Pause or resume the East Fort game and return the active edition and human face loading status.",inputSchema:{type:"object",properties:{paused:{type:"boolean"}},required:["paused"],additionalProperties:!1},annotations:{readOnlyHint:!1},execute(N){if(!N||typeof N.paused!="boolean")throw new Error("paused must be a boolean");return L.paused=N.paused,Et(),{paused:L.paused,edition:"Defender",humanFace:s}}},{signal:J.signal})).catch(()=>{})}catch{}return{action:qt,key(N,C){we[N]=C},dispose(){i=!0,cancelAnimationFrame(Ue),J.abort(),window.removeEventListener("keydown",tn),window.removeEventListener("keyup",wt),window.removeEventListener("blur",Ht),window.removeEventListener("resize",B);let N=new Set,C=new Set;n.traverse(O=>{O.geometry&&N.add(O.geometry),O.material&&C.add(O.material)}),N.forEach(O=>O.dispose()),C.forEach(O=>{O.map&&!g.includes(O.map)&&O.map.dispose(),O.dispose()}),g.forEach(O=>O.dispose()),a.dispose(),r.dispose(),r.domElement.remove()}}}var Ae=Yr(xu(),1);function Z_(){let t=(0,ja.useRef)(null),e=(0,ja.useRef)(null),[n,i]=(0,ja.useState)({speed:0,mode:"Driving",place:"East Fort",mission:"Explore the neighborhood",step:0,active:!1,paused:!1,night:!1,rain:!1}),[s,a]=(0,ja.useState)("");(0,ja.useEffect)(()=>{try{e.current=sT(t.current,i)}catch(o){a("Unable to start the 3D world. Please enable WebGL in your browser."),console.error(o)}return()=>e.current?.dispose()},[]);let r=o=>e.current?.action(o);return(0,Ae.jsxs)("main",{className:"game",children:[(0,Ae.jsx)("div",{ref:t,className:"viewport","aria-label":"3D East Fort game world"}),(0,Ae.jsxs)("header",{className:"topbar",children:[(0,Ae.jsxs)("div",{className:"brand",children:[(0,Ae.jsx)("b",{className:"logo",children:"E/F"}),(0,Ae.jsxs)("div",{children:[(0,Ae.jsxs)("h1",{children:["EAST FORT ",(0,Ae.jsx)("em",{children:"DRIVE"})]}),(0,Ae.jsx)("p",{children:"THIRUVANANTHAPURAM \xB7 KERALA"})]})]}),(0,Ae.jsxs)("div",{className:"top-actions",children:[(0,Ae.jsx)("span",{children:"DEFENDER EDITION"}),(0,Ae.jsx)("button",{onClick:()=>r("rain"),"aria-pressed":n.rain,children:n.rain?"\u2602 Monsoon":"Clear weather"}),(0,Ae.jsx)("button",{onClick:()=>r("night"),"aria-pressed":n.night,children:n.night?"\u263E Night":"\u2600 Golden hour"}),(0,Ae.jsx)("button",{onClick:()=>r("pause"),children:n.paused?"Resume":"Pause"})]})]}),(0,Ae.jsxs)("aside",{className:"mission",children:[(0,Ae.jsx)("div",{className:"eyebrow",children:n.active?"DELIVERY RUN":"THE CITY IS YOURS"}),(0,Ae.jsx)("h2",{children:n.active?n.mission:"Take the long way home."}),(0,Ae.jsx)("p",{children:n.active?"Follow the amber marker. Stop inside it to deliver.":"Cruise the temple approach, turn into Chalai, or step out and explore."}),(0,Ae.jsxs)("button",{className:"primary",onClick:()=>r("mission"),children:[n.active?"Cancel delivery":"Start a delivery"," ",(0,Ae.jsx)("span",{children:"\u2197"})]}),n.active&&(0,Ae.jsxs)("p",{className:"progress",children:["STOP ",n.step+1," OF 3"]})]}),(0,Ae.jsxs)("div",{className:"location",children:[(0,Ae.jsx)("span",{children:"08.48\xB0 N \xA0 76.95\xB0 E"}),(0,Ae.jsx)("h2",{children:n.place}),(0,Ae.jsxs)("p",{children:[n.mode," \xB7 Free roam"]})]}),(0,Ae.jsxs)("div",{className:"map-panel",children:[(0,Ae.jsx)("canvas",{id:"minimap",width:"240",height:"200","aria-label":"Neighborhood map, player and destination"}),(0,Ae.jsxs)("div",{children:["NEIGHBORHOOD MAP ",(0,Ae.jsx)("b",{children:"N \u2191"})]})]}),(0,Ae.jsxs)("div",{className:"speed",children:[(0,Ae.jsx)("strong",{children:String(n.speed).padStart(2,"0")}),(0,Ae.jsx)("span",{children:n.mode==="Driving"?"KM/H":"ON FOOT"})]}),(0,Ae.jsxs)("nav",{className:"controls","aria-label":"Game controls",children:[(0,Ae.jsxs)("span",{children:[(0,Ae.jsx)("kbd",{children:"W A S D"})," Move"]}),(0,Ae.jsxs)("span",{children:[(0,Ae.jsx)("kbd",{children:"SPACE"})," Brake"]}),(0,Ae.jsxs)("button",{onClick:()=>r("enter"),children:[(0,Ae.jsx)("kbd",{children:"F"}),n.mode==="Driving"?"Exit car":"Enter nearby car"]}),(0,Ae.jsxs)("button",{onClick:()=>r("camera"),children:[(0,Ae.jsx)("kbd",{children:"C"})," Camera"]}),(0,Ae.jsxs)("button",{onClick:()=>r("reset"),children:[(0,Ae.jsx)("kbd",{children:"R"})," Recover"]})]}),(0,Ae.jsxs)("div",{className:"touch-controls",children:[(0,Ae.jsx)("div",{children:[["\u2191","w"],["\u2190","a"],["\u2193","s"],["\u2192","d"]].map(([o,l])=>(0,Ae.jsx)("button",{"aria-label":"Move "+l,onPointerDown:c=>{c.currentTarget.setPointerCapture(c.pointerId),e.current?.key(l,!0)},onPointerUp:()=>e.current?.key(l,!1),onPointerCancel:()=>e.current?.key(l,!1),children:o},l))}),(0,Ae.jsx)("button",{onPointerDown:o=>{o.currentTarget.setPointerCapture(o.pointerId),e.current?.key(" ",!0)},onPointerUp:()=>e.current?.key(" ",!1),onPointerCancel:()=>e.current?.key(" ",!1),children:"BRAKE"})]}),n.paused&&(0,Ae.jsxs)("div",{className:"pause-label",children:["PAUSED",(0,Ae.jsx)("button",{onClick:()=>r("pause"),children:"Return to the streets"})]}),s&&(0,Ae.jsx)("div",{className:"pause-label",role:"alert",children:s}),(0,Ae.jsxs)("details",{className:"credits",children:[(0,Ae.jsx)("summary",{children:"About this world"}),(0,Ae.jsx)("p",{children:"Defender-inspired SUV, scanned human face, articulated walking characters, weathered surfaces and monsoon rain. This remains an approximate game world, not a photorealistic or surveyed recreation. No Google imagery embedded."}),(0,Ae.jsxs)("p",{children:["Human head scan: Lee Perry-Smith / Infinite-Realities, ",(0,Ae.jsx)("a",{href:"https://creativecommons.org/licenses/by/3.0/",target:"_blank",rel:"noreferrer",children:"CC BY 3.0"}),". Scaled onto an original animated body. ",(0,Ae.jsx)("a",{href:"./HUMAN-ASSET-CREDITS.txt",target:"_blank",children:"Full asset credits"}),". Defender-inspired model is unofficial."]}),(0,Ae.jsxs)("p",{children:["Reference: ",(0,Ae.jsx)("a",{href:"https://www.google.com/maps/search/?api=1&query=East+Fort+Thiruvananthapuram",target:"_blank",rel:"noreferrer",children:"Google Maps: East Fort"}),". Street View remains unverified."]}),(0,Ae.jsx)("p",{children:"F enters/exits a nearby car. C changes camera; on foot, the third camera faces your character. Shift runs. R recovers. Esc pauses. Keyboard recommended; touch supported."})]})]})}var cT=Yr(xu(),1);(0,lT.createRoot)(document.getElementById("root")).render((0,cT.jsx)(Z_,{}));
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
