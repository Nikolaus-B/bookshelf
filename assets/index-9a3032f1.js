(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Ge={headerLabel:document.querySelector(".switch"),headerInput:document.querySelector("#slider"),headerButton:document.querySelector(".header-button"),headerHamburgerIcon:document.querySelector(".header-hamburger-icon"),headerCloseIcon:document.querySelector(".header-close-icon"),headerUserIcon:document.querySelector(".header-user-icon"),openMenuBtn:document.querySelector(".js-open-menu"),mobileMenu:document.querySelector(".js-menu-container"),fixedHeader:document.querySelector(".js-header")},{headerHamburgerIcon:ue,headerCloseIcon:de,fixedHeader:D,mobileMenu:J,openMenuBtn:Xe}=Ge;Xe.addEventListener("click",Qe);function Qe(){J.classList.toggle("is-open"),J.classList.contains("is-open")?(ue.style.display="none",de.style.display="block",D.classList.remove("header"),D.classList.add("fixed-header"),document.body.classList.add("not-scrollable")):(J.classList.remove("is-open"),ue.style.display="block",de.style.display="none",D.classList.add("header"),D.classList.remove("fixed-header"),document.body.classList.remove("not-scrollable"))}const Ze={onDOMContentLoaded:function(){const e=document.getElementById("logoList"),t=document.getElementById("toggleLogo"),n=e.querySelectorAll(".support-item");let r=!1;t.addEventListener("click",s);function s(){r=!r,document.querySelector(".btn-icon").classList.toggle("rotate-180",r);for(let i=0;i<6;i++)n[i]&&n[i+6]&&(r?(n[i].classList.add("hidden"),n[i+6].classList.remove("hidden")):(n[i].classList.remove("hidden"),n[i+6].classList.add("hidden")))}for(let o=6;o<n.length;o++)n[o].classList.add("hidden")}};function Te(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ye}=Object.prototype,{getPrototypeOf:ne}=Object,M=(e=>t=>{const n=Ye.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>M(t)===e),H=e=>t=>typeof t===e,{isArray:x}=Array,P=H("undefined");function et(e){return e!==null&&!P(e)&&e.constructor!==null&&!P(e.constructor)&&w(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Le=R("ArrayBuffer");function tt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Le(e.buffer),t}const nt=H("string"),w=H("function"),Ce=H("number"),$=e=>e!==null&&typeof e=="object",rt=e=>e===!0||e===!1,U=e=>{if(M(e)!=="object")return!1;const t=ne(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},st=R("Date"),ot=R("File"),it=R("Blob"),at=R("FileList"),ct=e=>$(e)&&w(e.pipe),lt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||w(e.append)&&((t=M(e))==="formdata"||t==="object"&&w(e.toString)&&e.toString()==="[object FormData]"))},ut=R("URLSearchParams"),dt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function B(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),x(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function xe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ne=e=>!P(e)&&e!=={};function Q(){const{caseless:e}=Ne(this)&&this||{},t={},n=(r,s)=>{const o=e&&xe(t,s)||s;U(t[o])&&U(r)?t[o]=Q(t[o],r):U(r)?t[o]=Q({},r):x(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&B(arguments[r],n);return t}const ft=(e,t,n,{allOwnKeys:r}={})=>(B(t,(s,o)=>{n&&w(s)?e[o]=Te(s,n):e[o]=s},{allOwnKeys:r}),e),pt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ht=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},mt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ne(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},yt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},bt=e=>{if(!e)return null;if(x(e))return e;let t=e.length;if(!Ce(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Et=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ne(Uint8Array)),gt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},wt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},St=R("HTMLFormElement"),Ot=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),fe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Rt=R("RegExp"),ke=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};B(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},At=e=>{ke(e,(t,n)=>{if(w(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(w(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Tt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return x(e)?r(e):r(String(e).split(t)),n},Lt=()=>{},Ct=(e,t)=>(e=+e,Number.isFinite(e)?e:t),V="abcdefghijklmnopqrstuvwxyz",pe="0123456789",Pe={DIGIT:pe,ALPHA:V,ALPHA_DIGIT:V+V.toUpperCase()+pe},xt=(e=16,t=Pe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Nt(e){return!!(e&&w(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const kt=e=>{const t=new Array(10),n=(r,s)=>{if($(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=x(r)?[]:{};return B(r,(i,l)=>{const d=n(i,s+1);!P(d)&&(o[l]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Pt=R("AsyncFunction"),Bt=e=>e&&($(e)||w(e))&&w(e.then)&&w(e.catch),a={isArray:x,isArrayBuffer:Le,isBuffer:et,isFormData:lt,isArrayBufferView:tt,isString:nt,isNumber:Ce,isBoolean:rt,isObject:$,isPlainObject:U,isUndefined:P,isDate:st,isFile:ot,isBlob:it,isRegExp:Rt,isFunction:w,isStream:ct,isURLSearchParams:ut,isTypedArray:Et,isFileList:at,forEach:B,merge:Q,extend:ft,trim:dt,stripBOM:pt,inherits:ht,toFlatObject:mt,kindOf:M,kindOfTest:R,endsWith:yt,toArray:bt,forEachEntry:gt,matchAll:wt,isHTMLForm:St,hasOwnProperty:fe,hasOwnProp:fe,reduceDescriptors:ke,freezeMethods:At,toObjectSet:Tt,toCamelCase:Ot,noop:Lt,toFiniteNumber:Ct,findKey:xe,global:{},isContextDefined:Ne,ALPHABET:Pe,generateString:xt,isSpecCompliantForm:Nt,toJSONObject:kt,isAsyncFn:Pt,isThenable:Bt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Be=m.prototype,Fe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Fe[e]={value:e}});Object.defineProperties(m,Fe);Object.defineProperty(Be,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Be);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Ft=null;function Z(e){return a.isPlainObject(e)||a.isArray(e)}function _e(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function he(e,t,n){return e?e.concat(t).map(function(s,o){return s=_e(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function _t(e){return a.isArray(e)&&!e.some(Z)}const Dt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function v(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,g){return!a.isUndefined(g[h])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function f(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!d&&a.isBlob(u))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?d&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function c(u,h,g){let A=u;if(u&&!g&&typeof u=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&_t(u)||(a.isFileList(u)||a.endsWith(h,"[]"))&&(A=a.toArray(u)))return h=_e(h),A.forEach(function(_,Ke){!(a.isUndefined(_)||_===null)&&t.append(i===!0?he([h],Ke,o):i===null?h:h+"[]",f(_))}),!1}return Z(u)?!0:(t.append(he(g,h,o),f(u)),!1)}const p=[],b=Object.assign(Dt,{defaultVisitor:c,convertValue:f,isVisitable:Z});function E(u,h){if(!a.isUndefined(u)){if(p.indexOf(u)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(u),a.forEach(u,function(A,S){(!(a.isUndefined(A)||A===null)&&s.call(t,A,a.isString(S)?S.trim():S,h,b))===!0&&E(A,h?h.concat(S):[S])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function me(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function re(e,t){this._pairs=[],e&&v(e,this,t)}const De=re.prototype;De.append=function(t,n){this._pairs.push([t,n])};De.toString=function(t){const n=t?function(r){return t.call(this,r,me)}:me;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ut(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ue(e,t,n){if(!t)return e;const r=n&&n.encode||Ut,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class jt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ye=jt,je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qt=typeof URLSearchParams<"u"?URLSearchParams:re,It=typeof FormData<"u"?FormData:null,Mt=typeof Blob<"u"?Blob:null,Ht=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),$t=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:qt,FormData:It,Blob:Mt},isStandardBrowserEnv:Ht,isStandardBrowserWebWorkerEnv:$t,protocols:["http","https","file","blob","url","data"]};function vt(e,t){return v(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function zt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Jt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function qe(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Jt(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(zt(r),s,n,0)}),n}return null}function Vt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const se={transitional:je,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(qe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return vt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return v(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Vt(t)):t}],transformResponse:[function(t){const n=this.transitional||se.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{se.headers[e]={}});const oe=se,Wt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Kt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Wt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},be=Symbol("internals");function N(e){return e&&String(e).trim().toLowerCase()}function j(e){return e===!1||e==null?e:a.isArray(e)?e.map(j):String(e)}function Gt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Xt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function W(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Qt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Zt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class z{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,d,f){const c=N(d);if(!c)throw new Error("header name must be a non-empty string");const p=a.findKey(s,c);(!p||s[p]===void 0||f===!0||f===void 0&&s[p]!==!1)&&(s[p||d]=j(l))}const i=(l,d)=>a.forEach(l,(f,c)=>o(f,c,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Xt(t)?i(Kt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=N(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Gt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=N(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||W(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=N(i),i){const l=a.findKey(r,i);l&&(!n||W(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||W(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=j(s),delete n[o];return}const l=t?Qt(o):String(o).trim();l!==o&&delete n[o],n[l]=j(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[be]=this[be]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=N(i);r[l]||(Zt(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(z.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(z);const T=z;function K(e,t){const n=this||oe,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ie(e){return!!(e&&e.__CANCEL__)}function F(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(F,m,{__CANCEL__:!0});function Yt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const en=O.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function tn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function nn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Me(e,t){return e&&!tn(t)?nn(e,t):t}const rn=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function sn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function on(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),c=r[o];i||(i=f),n[s]=d,r[s]=f;let p=o,b=0;for(;p!==s;)b+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),f-i<t)return;const E=c&&f-c;return E?Math.round(b*1e3/E):void 0}}function Ee(e,t){let n=0;const r=on(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,d=r(l),f=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&f?(i-o)/d:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const an=typeof XMLHttpRequest<"u",cn=an&&function(e){return new Promise(function(n,r){let s=e.data;const o=T.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;a.isFormData(s)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(f=o.getContentType())&&o.setContentType(f.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(u+":"+h))}const p=Me(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ue(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function b(){if(!c)return;const u=T.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),g={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:u,config:e,request:c};Yt(function(S){n(S),d()},function(S){r(S),d()},g),c=null}if("onloadend"in c?c.onloadend=b:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(b)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const g=e.transitional||je;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new m(h,g.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},O.isStandardBrowserEnv){const u=(e.withCredentials||rn(p))&&e.xsrfCookieName&&en.read(e.xsrfCookieName);u&&o.set(e.xsrfHeaderName,u)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(h,g){c.setRequestHeader(g,h)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Ee(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ee(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=u=>{c&&(r(!u||u.type?new F(null,e,c):u),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const E=sn(p);if(E&&O.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},Y={http:Ft,xhr:cn};a.forEach(Y,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ge=e=>`- ${e}`,ln=e=>a.isFunction(e)||e===null||e===!1,He={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!ln(n)&&(r=Y[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(ge).join(`
`):" "+ge(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Y};function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new F(null,e)}function we(e){return G(e),e.headers=T.from(e.headers),e.data=K.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),He.getAdapter(e.adapter||oe.adapter)(e).then(function(r){return G(e),r.data=K.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return Ie(r)||(G(e),r&&r.response&&(r.response.data=K.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const Se=e=>e instanceof T?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(f,c,p){return a.isPlainObject(f)&&a.isPlainObject(c)?a.merge.call({caseless:p},f,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(f,c,p){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f,p)}else return r(f,c,p)}function o(f,c){if(!a.isUndefined(c))return r(void 0,c)}function i(f,c){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,c)}function l(f,c,p){if(p in t)return r(f,c);if(p in e)return r(void 0,f)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(f,c)=>s(Se(f),Se(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=d[c]||s,b=p(e[c],t[c],c);a.isUndefined(b)&&p!==l||(n[c]=b)}),n}const $e="1.5.1",ie={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ie[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Oe={};ie.transitional=function(t,n,r){function s(o,i){return"[Axios v"+$e+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Oe[i]&&(Oe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function un(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ee={assertOptions:un,validators:ie},L=ee.validators;class I{constructor(t){this.defaults=t,this.interceptors={request:new ye,response:new ye}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ee.assertOptions(r,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ee.assertOptions(s,{encode:L.function,serialize:L.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),n.headers=T.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const f=[];this.interceptors.response.forEach(function(h){f.push(h.fulfilled,h.rejected)});let c,p=0,b;if(!d){const u=[we.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,f),b=u.length,c=Promise.resolve(n);p<b;)c=c.then(u[p++],u[p++]);return c}b=l.length;let E=n;for(p=0;p<b;){const u=l[p++],h=l[p++];try{E=u(E)}catch(g){h.call(this,g);break}}try{c=we.call(this,E)}catch(u){return Promise.reject(u)}for(p=0,b=f.length;p<b;)c=c.then(f[p++],f[p++]);return c}getUri(t){t=C(this.defaults,t);const n=Me(t.baseURL,t.url);return Ue(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){I.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(C(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}I.prototype[t]=n(),I.prototype[t+"Form"]=n(!0)});const q=I;class ae{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new F(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ae(function(s){t=s}),cancel:t}}}const dn=ae;function fn(e){return function(n){return e.apply(null,n)}}function pn(e){return a.isObject(e)&&e.isAxiosError===!0}const te={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(te).forEach(([e,t])=>{te[t]=e});const hn=te;function ve(e){const t=new q(e),n=Te(q.prototype.request,t);return a.extend(n,q.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ve(C(e,s))},n}const y=ve(oe);y.Axios=q;y.CanceledError=F;y.CancelToken=dn;y.isCancel=Ie;y.VERSION=$e;y.toFormData=v;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=fn;y.isAxiosError=pn;y.mergeConfig=C;y.AxiosHeaders=T;y.formToJSON=e=>qe(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=He.getAdapter;y.HttpStatusCode=hn;y.default=y;const mn=y,ce="https://books-backend.p.goit.global";async function le(e,t,n={}){try{return await(await mn.get(e,{params:n})).data}catch{return new Error(t)}}async function yn(){return le(`${ce}/books/category-list`,"This page is empty, add some books and proceed to order.")}async function bn(){return le(`${ce}/books/top-books`,"This page is empty, add some books and proceed to order.")}async function ze(e){return le(`${ce}/books/category`,"This page is empty, add some books and proceed to order.",{category:e})}function En(){return`<div class="error-container">
    <p class="error-text">This page is empty, add some books and proceed to order.</p>
    <img src="../img/error.png" alt="error" class="error-img">
  </div>`}function Je(e){return`
     <div class="image-container">
       <img class="book-image" src="${e.book_image}" alt="${e.title}">
       <div class="info-book">
         <h1 class="title">${e.title}</h1>
         <p class="author">${e.author}</p>
       </div>`}const Re=document.querySelector(".best-sellers");Ve();async function Ve(){const e=await bn();gn(e)}function gn(e){const t=`
    <div class="top-books-container">
    <h1 class="title-book">Best Sellers
    <span class="title-book-span">Books</span>
    </h1>
    <ul class="books-container"> ${e.map(n=>`
      <li class="books-list">
      <h3 class="books-list-title">${n.list_name}</h3>
        <div class="books-card-container" data-list-id="${n.list_name}">
          ${n.books.map(r=>wn(r)).join("")}
        </div>
        <button class="books-btn" type="button" data-id="${n.list_name}">see more</button>
      </li>
      `).join("")}</ul>
      </div>`;Re.innerHTML=t,document.querySelectorAll(".books-btn").forEach(n=>{n.addEventListener("click",function(r){let s=r.target.dataset.id;ze(s).then(o=>{let i="";for(let l=0;l<o.length;l++)i+=Je(o[l]);Re.innerHTML=i})})})}function wn(e){return`<a href="#" class="books-intem-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${e._id}'>

    <div class="books-card">
      <img
        src="${e.book_image}"
        alt="${e.title}"
        class="books-card-title-img"
        width="180"
        height="256"
        loading="lazy"
      />
      <div class="books-overlay">
        <p class="books-overlay-text">quick view</p>
      </div>
     </div>
      <div class="books-descr">
        <h3 class="books-card-title">${e.title}</h3>
        <p class="books-card-author">${e.author}</p>
      </div>
   </a>`}const We=document.querySelector(".categories-list"),Sn=document.querySelector(".categories-container"),Ae=document.querySelector(".best-sellers");Rn();We.addEventListener("click",On);let k=null,X=document.querySelector(".all-categories-btn");function On(e){if(e.preventDefault(),e.target.className.includes("all-categories-btn")){X=e.target,X.classList.add("active-category"),k.classList.remove("active-category"),Ve();return}if(e.target.nodeName!="A")return;X.classList.remove("active-category"),Ae.innerHTML="",k!=null&&k.classList.remove("active-category"),k=e.target,k.classList.add("active-category");const t=e.target.textContent;ze(t).then(n=>{let r="";for(let s=0;s<n.length;s++)r+=Je(n[s]);Ae.innerHTML=r})}async function Rn(){try{const e=await yn();if(e.length===0)throw new Error(response.statusText);return await e.map(({list_name:n})=>We.insertAdjacentHTML("beforeend",An(n))).join("")}catch(e){console.log(e),Sn.innerHTML=En()}}function An(e){return`<li class="categories-item"><a href="">${e}</a></li>`}document.addEventListener("DOMContentLoaded",Ze.onDOMContentLoaded);