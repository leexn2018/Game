var du=Object.defineProperty;var pu=(n,e,t)=>e in n?du(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ye=(n,e,t)=>(pu(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function To(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const mu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gu=To(mu);function jl(n){return!!n||n===""}function Eo(n){if(Re(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ht(i)?vu(i):Eo(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ht(n))return n;if(tt(n))return n}}const _u=/;(?![^(]*\))/g,xu=/:(.+)/;function vu(n){const e={};return n.split(_u).forEach(t=>{if(t){const i=t.split(xu);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ao(n){let e="";if(ht(n))e=n;else if(Re(n))for(let t=0;t<n.length;t++){const i=Ao(n[t]);i&&(e+=i+" ")}else if(tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const qe={},Ci=[],kt=()=>{},Mu=()=>!1,bu=/^on[^a-z]/,Jr=n=>bu.test(n),Co=n=>n.startsWith("onUpdate:"),ft=Object.assign,Lo=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},yu=Object.prototype.hasOwnProperty,Ue=(n,e)=>yu.call(n,e),Re=Array.isArray,Qi=n=>Qr(n)==="[object Map]",Su=n=>Qr(n)==="[object Set]",Ie=n=>typeof n=="function",ht=n=>typeof n=="string",Ro=n=>typeof n=="symbol",tt=n=>n!==null&&typeof n=="object",Yl=n=>tt(n)&&Ie(n.then)&&Ie(n.catch),wu=Object.prototype.toString,Qr=n=>wu.call(n),Tu=n=>Qr(n).slice(8,-1),Eu=n=>Qr(n)==="[object Object]",Do=n=>ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vr=To(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),es=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Au=/-(\w)/g,Ii=es(n=>n.replace(Au,(e,t)=>t?t.toUpperCase():"")),Cu=/\B([A-Z])/g,Gi=es(n=>n.replace(Cu,"-$1").toLowerCase()),$l=es(n=>n.charAt(0).toUpperCase()+n.slice(1)),ps=es(n=>n?`on${$l(n)}`:""),Xr=(n,e)=>!Object.is(n,e),ms=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},jr=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Lu=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let na;const Ru=()=>na||(na=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Yt;class Du{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Yt&&(this.parent=Yt,this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Yt;try{return Yt=this,e()}finally{Yt=t}}}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Pu(n,e=Yt){e&&e.active&&e.effects.push(n)}const Po=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Zl=n=>(n.w&In)>0,Kl=n=>(n.n&In)>0,Iu=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=In},Fu=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Zl(r)&&!Kl(r)?r.delete(n):e[t++]=r,r.w&=~In,r.n&=~In}e.length=t}},to=new WeakMap;let Zi=0,In=1;const no=30;let Gt;const Jn=Symbol(""),io=Symbol("");class Io{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Pu(this,i)}run(){if(!this.active)return this.fn();let e=Gt,t=Rn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Gt,Gt=this,Rn=!0,In=1<<++Zi,Zi<=no?Iu(this):ia(this),this.fn()}finally{Zi<=no&&Fu(this),In=1<<--Zi,Gt=this.parent,Rn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Gt===this?this.deferStop=!0:this.active&&(ia(this),this.onStop&&this.onStop(),this.active=!1)}}function ia(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Rn=!0;const Jl=[];function Vi(){Jl.push(Rn),Rn=!1}function Hi(){const n=Jl.pop();Rn=n===void 0?!0:n}function Et(n,e,t){if(Rn&&Gt){let i=to.get(n);i||to.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Po()),Ql(r)}}function Ql(n,e){let t=!1;Zi<=no?Kl(n)||(n.n|=In,t=!Zl(n)):t=!n.has(Gt),t&&(n.add(Gt),Gt.deps.push(n))}function mn(n,e,t,i,r,s){const a=to.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Re(n))a.forEach((l,c)=>{(c==="length"||c>=i)&&o.push(l)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Re(n)?Do(t)&&o.push(a.get("length")):(o.push(a.get(Jn)),Qi(n)&&o.push(a.get(io)));break;case"delete":Re(n)||(o.push(a.get(Jn)),Qi(n)&&o.push(a.get(io)));break;case"set":Qi(n)&&o.push(a.get(Jn));break}if(o.length===1)o[0]&&ro(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);ro(Po(l))}}function ro(n,e){const t=Re(n)?n:[...n];for(const i of t)i.computed&&ra(i);for(const i of t)i.computed||ra(i)}function ra(n,e){(n!==Gt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Nu=To("__proto__,__v_isRef,__isVue"),ec=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ro)),Uu=Fo(),Ou=Fo(!1,!0),zu=Fo(!0),sa=Bu();function Bu(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=We(this);for(let s=0,a=this.length;s<a;s++)Et(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(We)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Vi();const i=We(this)[e].apply(this,t);return Hi(),i}}),n}function Fo(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?tf:sc:e?rc:ic).get(i))return i;const a=Re(i);if(!n&&a&&Ue(sa,r))return Reflect.get(sa,r,s);const o=Reflect.get(i,r,s);return(Ro(r)?ec.has(r):Nu(r))||(n||Et(i,"get",r),e)?o:mt(o)?a&&Do(r)?o:o.value:tt(o)?n?oc(o):Oo(o):o}}const Gu=tc(),Vu=tc(!0);function tc(n=!1){return function(t,i,r,s){let a=t[i];if(tr(a)&&mt(a)&&!mt(r))return!1;if(!n&&(!so(r)&&!tr(r)&&(a=We(a),r=We(r)),!Re(t)&&mt(a)&&!mt(r)))return a.value=r,!0;const o=Re(t)&&Do(i)?Number(i)<t.length:Ue(t,i),l=Reflect.set(t,i,r,s);return t===We(s)&&(o?Xr(r,a)&&mn(t,"set",i,r):mn(t,"add",i,r)),l}}function Hu(n,e){const t=Ue(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&mn(n,"delete",e,void 0),i}function ku(n,e){const t=Reflect.has(n,e);return(!Ro(e)||!ec.has(e))&&Et(n,"has",e),t}function Wu(n){return Et(n,"iterate",Re(n)?"length":Jn),Reflect.ownKeys(n)}const nc={get:Uu,set:Gu,deleteProperty:Hu,has:ku,ownKeys:Wu},qu={get:zu,set(n,e){return!0},deleteProperty(n,e){return!0}},Xu=ft({},nc,{get:Ou,set:Vu}),No=n=>n,ts=n=>Reflect.getPrototypeOf(n);function dr(n,e,t=!1,i=!1){n=n.__v_raw;const r=We(n),s=We(e);t||(e!==s&&Et(r,"get",e),Et(r,"get",s));const{has:a}=ts(r),o=i?No:t?Go:Bo;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function pr(n,e=!1){const t=this.__v_raw,i=We(t),r=We(n);return e||(n!==r&&Et(i,"has",n),Et(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function mr(n,e=!1){return n=n.__v_raw,!e&&Et(We(n),"iterate",Jn),Reflect.get(n,"size",n)}function oa(n){n=We(n);const e=We(this);return ts(e).has.call(e,n)||(e.add(n),mn(e,"add",n,n)),this}function aa(n,e){e=We(e);const t=We(this),{has:i,get:r}=ts(t);let s=i.call(t,n);s||(n=We(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?Xr(e,a)&&mn(t,"set",n,e):mn(t,"add",n,e),this}function la(n){const e=We(this),{has:t,get:i}=ts(e);let r=t.call(e,n);r||(n=We(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&mn(e,"delete",n,void 0),s}function ca(){const n=We(this),e=n.size!==0,t=n.clear();return e&&mn(n,"clear",void 0,void 0),t}function gr(n,e){return function(i,r){const s=this,a=s.__v_raw,o=We(a),l=e?No:n?Go:Bo;return!n&&Et(o,"iterate",Jn),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function _r(n,e,t){return function(...i){const r=this.__v_raw,s=We(r),a=Qi(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?No:e?Go:Bo;return!e&&Et(s,"iterate",l?io:Jn),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Mn(n){return function(...e){return n==="delete"?!1:this}}function ju(){const n={get(s){return dr(this,s)},get size(){return mr(this)},has:pr,add:oa,set:aa,delete:la,clear:ca,forEach:gr(!1,!1)},e={get(s){return dr(this,s,!1,!0)},get size(){return mr(this)},has:pr,add:oa,set:aa,delete:la,clear:ca,forEach:gr(!1,!0)},t={get(s){return dr(this,s,!0)},get size(){return mr(this,!0)},has(s){return pr.call(this,s,!0)},add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear"),forEach:gr(!0,!1)},i={get(s){return dr(this,s,!0,!0)},get size(){return mr(this,!0)},has(s){return pr.call(this,s,!0)},add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear"),forEach:gr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=_r(s,!1,!1),t[s]=_r(s,!0,!1),e[s]=_r(s,!1,!0),i[s]=_r(s,!0,!0)}),[n,t,e,i]}const[Yu,$u,Zu,Ku]=ju();function Uo(n,e){const t=e?n?Ku:Zu:n?$u:Yu;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ue(t,r)&&r in i?t:i,r,s)}const Ju={get:Uo(!1,!1)},Qu={get:Uo(!1,!0)},ef={get:Uo(!0,!1)},ic=new WeakMap,rc=new WeakMap,sc=new WeakMap,tf=new WeakMap;function nf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rf(n){return n.__v_skip||!Object.isExtensible(n)?0:nf(Tu(n))}function Oo(n){return tr(n)?n:zo(n,!1,nc,Ju,ic)}function sf(n){return zo(n,!1,Xu,Qu,rc)}function oc(n){return zo(n,!0,qu,ef,sc)}function zo(n,e,t,i,r){if(!tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=rf(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Li(n){return tr(n)?Li(n.__v_raw):!!(n&&n.__v_isReactive)}function tr(n){return!!(n&&n.__v_isReadonly)}function so(n){return!!(n&&n.__v_isShallow)}function ac(n){return Li(n)||tr(n)}function We(n){const e=n&&n.__v_raw;return e?We(e):n}function lc(n){return jr(n,"__v_skip",!0),n}const Bo=n=>tt(n)?Oo(n):n,Go=n=>tt(n)?oc(n):n;function of(n){Rn&&Gt&&(n=We(n),Ql(n.dep||(n.dep=Po())))}function af(n,e){n=We(n),n.dep&&ro(n.dep)}function mt(n){return!!(n&&n.__v_isRef===!0)}function lf(n){return mt(n)?n.value:n}const cf={get:(n,e,t)=>lf(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return mt(r)&&!mt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function cc(n){return Li(n)?n:new Proxy(n,cf)}var uc;class uf{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[uc]=!1,this._dirty=!0,this.effect=new Io(e,()=>{this._dirty||(this._dirty=!0,af(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=We(this);return of(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}uc="__v_isReadonly";function ff(n,e,t=!1){let i,r;const s=Ie(n);return s?(i=n,r=kt):(i=n.get,r=n.set),new uf(i,r,s||!r,t)}function Dn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){ns(s,e,t)}return r}function It(n,e,t,i){if(Ie(n)){const s=Dn(n,e,t,i);return s&&Yl(s)&&s.catch(a=>{ns(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(It(n[s],e,t,i));return r}function ns(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Dn(l,null,10,[n,a,o]);return}}hf(n,t,r,i)}function hf(n,e,t,i=!0){console.error(n)}let nr=!1,oo=!1;const ut=[];let Jt=0;const Ri=[];let cn=null,qn=0;const fc=Promise.resolve();let Vo=null;function df(n){const e=Vo||fc;return n?e.then(this?n.bind(this):n):e}function pf(n){let e=Jt+1,t=ut.length;for(;e<t;){const i=e+t>>>1;ir(ut[i])<n?e=i+1:t=i}return e}function Ho(n){(!ut.length||!ut.includes(n,nr&&n.allowRecurse?Jt+1:Jt))&&(n.id==null?ut.push(n):ut.splice(pf(n.id),0,n),hc())}function hc(){!nr&&!oo&&(oo=!0,Vo=fc.then(pc))}function mf(n){const e=ut.indexOf(n);e>Jt&&ut.splice(e,1)}function gf(n){Re(n)?Ri.push(...n):(!cn||!cn.includes(n,n.allowRecurse?qn+1:qn))&&Ri.push(n),hc()}function ua(n,e=nr?Jt+1:0){for(;e<ut.length;e++){const t=ut[e];t&&t.pre&&(ut.splice(e,1),e--,t())}}function dc(n){if(Ri.length){const e=[...new Set(Ri)];if(Ri.length=0,cn){cn.push(...e);return}for(cn=e,cn.sort((t,i)=>ir(t)-ir(i)),qn=0;qn<cn.length;qn++)cn[qn]();cn=null,qn=0}}const ir=n=>n.id==null?1/0:n.id,_f=(n,e)=>{const t=ir(n)-ir(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function pc(n){oo=!1,nr=!0,ut.sort(_f);const e=kt;try{for(Jt=0;Jt<ut.length;Jt++){const t=ut[Jt];t&&t.active!==!1&&Dn(t,null,14)}}finally{Jt=0,ut.length=0,dc(),nr=!1,Vo=null,(ut.length||Ri.length)&&pc()}}function xf(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||qe;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||qe;h&&(r=t.map(m=>m.trim())),f&&(r=t.map(Lu))}let o,l=i[o=ps(e)]||i[o=ps(Ii(e))];!l&&s&&(l=i[o=ps(Gi(e))]),l&&It(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,It(c,n,6,r)}}function mc(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ie(n)){const l=c=>{const u=mc(c,e,!0);u&&(o=!0,ft(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(tt(n)&&i.set(n,null),null):(Re(s)?s.forEach(l=>a[l]=null):ft(a,s),tt(n)&&i.set(n,a),a)}function is(n,e){return!n||!Jr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ue(n,e[0].toLowerCase()+e.slice(1))||Ue(n,Gi(e))||Ue(n,e))}let Qt=null,gc=null;function Yr(n){const e=Qt;return Qt=n,gc=n&&n.type.__scopeId||null,e}function vf(n,e=Qt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ma(-1);const s=Yr(e),a=n(...r);return Yr(s),i._d&&Ma(1),a};return i._n=!0,i._c=!0,i._d=!0,i}function gs(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:x,inheritAttrs:p}=n;let d,v;const S=Yr(n);try{if(t.shapeFlag&4){const w=r||i;d=Zt(u.call(w,w,f,s,m,h,x)),v=l}else{const w=e;d=Zt(w.length>1?w(s,{attrs:l,slots:o,emit:c}):w(s,null)),v=e.props?l:Mf(l)}}catch(w){er.length=0,ns(w,n,1),d=Qn(dn)}let E=d;if(v&&p!==!1){const w=Object.keys(v),{shapeFlag:T}=E;w.length&&T&7&&(a&&w.some(Co)&&(v=bf(v,a)),E=Fn(E,v))}return t.dirs&&(E=Fn(E),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&(E.transition=t.transition),d=E,Yr(S),d}const Mf=n=>{let e;for(const t in n)(t==="class"||t==="style"||Jr(t))&&((e||(e={}))[t]=n[t]);return e},bf=(n,e)=>{const t={};for(const i in n)(!Co(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function yf(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?fa(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!is(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?fa(i,a,c):!0:!!a;return!1}function fa(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!is(t,s))return!0}return!1}function Sf({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const wf=n=>n.__isSuspense;function Tf(n,e){e&&e.pendingBranch?Re(n)?e.effects.push(...n):e.effects.push(n):gf(n)}function Ef(n,e){if(ot){let t=ot.provides;const i=ot.parent&&ot.parent.provides;i===t&&(t=ot.provides=Object.create(i)),t[n]=e}}function _s(n,e,t=!1){const i=ot||Qt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ie(e)?e.call(i.proxy):e}}const ha={};function xs(n,e,t){return _c(n,e,t)}function _c(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=qe){const o=ot;let l,c=!1,u=!1;if(mt(n)?(l=()=>n.value,c=so(n)):Li(n)?(l=()=>n,i=!0):Re(n)?(u=!0,c=n.some(v=>Li(v)||so(v)),l=()=>n.map(v=>{if(mt(v))return v.value;if(Li(v))return Ti(v);if(Ie(v))return Dn(v,o,2)})):Ie(n)?e?l=()=>Dn(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),It(n,o,3,[h])}:l=kt,e&&i){const v=l;l=()=>Ti(v())}let f,h=v=>{f=d.onStop=()=>{Dn(v,o,4)}};if(sr)return h=kt,e?t&&It(e,o,3,[l(),u?[]:void 0,h]):l(),kt;let m=u?[]:ha;const x=()=>{if(!!d.active)if(e){const v=d.run();(i||c||(u?v.some((S,E)=>Xr(S,m[E])):Xr(v,m)))&&(f&&f(),It(e,o,3,[v,m===ha?void 0:m,h]),m=v)}else d.run()};x.allowRecurse=!!e;let p;r==="sync"?p=x:r==="post"?p=()=>xt(x,o&&o.suspense):(x.pre=!0,o&&(x.id=o.uid),p=()=>Ho(x));const d=new Io(l,p);return e?t?x():m=d.run():r==="post"?xt(d.run.bind(d),o&&o.suspense):d.run(),()=>{d.stop(),o&&o.scope&&Lo(o.scope.effects,d)}}function Af(n,e,t){const i=this.proxy,r=ht(n)?n.includes(".")?xc(i,n):()=>i[n]:n.bind(i,i);let s;Ie(e)?s=e:(s=e.handler,t=e);const a=ot;Fi(this);const o=_c(r,s.bind(i),t);return a?Fi(a):ei(),o}function xc(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ti(n,e){if(!tt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),mt(n))Ti(n.value,e);else if(Re(n))for(let t=0;t<n.length;t++)Ti(n[t],e);else if(Su(n)||Qi(n))n.forEach(t=>{Ti(t,e)});else if(Eu(n))for(const t in n)Ti(n[t],e);return n}function Cf(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ko(()=>{n.isMounted=!0}),yc(()=>{n.isUnmounting=!0}),n}const Lt=[Function,Array],Lf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt},setup(n,{slots:e}){const t=xh(),i=Cf();let r;return()=>{const s=e.default&&Mc(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const p of s)if(p.type!==dn){a=p;break}}const o=We(n),{mode:l}=o;if(i.isLeaving)return vs(a);const c=da(a);if(!c)return vs(a);const u=ao(c,o,i,t);lo(c,u);const f=t.subTree,h=f&&da(f);let m=!1;const{getTransitionKey:x}=c.type;if(x){const p=x();r===void 0?r=p:p!==r&&(r=p,m=!0)}if(h&&h.type!==dn&&(!Xn(c,h)||m)){const p=ao(h,o,i,t);if(lo(h,p),l==="out-in")return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,t.update()},vs(a);l==="in-out"&&c.type!==dn&&(p.delayLeave=(d,v,S)=>{const E=vc(i,h);E[String(h.key)]=h,d._leaveCb=()=>{v(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return a}}},Rf=Lf;function vc(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function ao(n,e,t,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:x,onBeforeAppear:p,onAppear:d,onAfterAppear:v,onAppearCancelled:S}=e,E=String(n.key),w=vc(t,n),T=(M,A)=>{M&&It(M,i,9,A)},L=(M,A)=>{const P=A[1];T(M,A),Re(M)?M.every(ee=>ee.length<=1)&&P():M.length<=1&&P()},B={mode:s,persisted:a,beforeEnter(M){let A=o;if(!t.isMounted)if(r)A=p||o;else return;M._leaveCb&&M._leaveCb(!0);const P=w[E];P&&Xn(n,P)&&P.el._leaveCb&&P.el._leaveCb(),T(A,[M])},enter(M){let A=l,P=c,ee=u;if(!t.isMounted)if(r)A=d||l,P=v||c,ee=S||u;else return;let he=!1;const W=M._enterCb=O=>{he||(he=!0,O?T(ee,[M]):T(P,[M]),B.delayedLeave&&B.delayedLeave(),M._enterCb=void 0)};A?L(A,[M,W]):W()},leave(M,A){const P=String(n.key);if(M._enterCb&&M._enterCb(!0),t.isUnmounting)return A();T(f,[M]);let ee=!1;const he=M._leaveCb=W=>{ee||(ee=!0,A(),W?T(x,[M]):T(m,[M]),M._leaveCb=void 0,w[P]===n&&delete w[P])};w[P]=n,h?L(h,[M,he]):he()},clone(M){return ao(M,e,t,i)}};return B}function vs(n){if(rs(n))return n=Fn(n),n.children=null,n}function da(n){return rs(n)?n.children?n.children[0]:void 0:n}function lo(n,e){n.shapeFlag&6&&n.component?lo(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Mc(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===$t?(a.patchFlag&128&&r++,i=i.concat(Mc(a.children,e,o))):(e||a.type!==dn)&&i.push(o!=null?Fn(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Df(n){return Ie(n)?{setup:n,name:n.name}:n}const Hr=n=>!!n.type.__asyncLoader,rs=n=>n.type.__isKeepAlive;function Pf(n,e){bc(n,"a",e)}function If(n,e){bc(n,"da",e)}function bc(n,e,t=ot){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ss(e,i,t),t){let r=t.parent;for(;r&&r.parent;)rs(r.parent.vnode)&&Ff(i,e,t,r),r=r.parent}}function Ff(n,e,t,i){const r=ss(e,n,i,!0);Sc(()=>{Lo(i[e],r)},t)}function ss(n,e,t=ot,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Vi(),Fi(t);const o=It(e,t,n,a);return ei(),Hi(),o});return i?r.unshift(s):r.push(s),s}}const gn=n=>(e,t=ot)=>(!sr||n==="sp")&&ss(n,e,t),Nf=gn("bm"),ko=gn("m"),Uf=gn("bu"),Of=gn("u"),yc=gn("bum"),Sc=gn("um"),zf=gn("sp"),Bf=gn("rtg"),Gf=gn("rtc");function Vf(n,e=ot){ss("ec",n,e)}function On(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Vi(),It(l,t,8,[n.el,o,n,e]),Hi())}}const Hf=Symbol(),co=n=>n?Ic(n)?$o(n)||n.proxy:co(n.parent):null,$r=ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>co(n.parent),$root:n=>co(n.root),$emit:n=>n.emit,$options:n=>Wo(n),$forceUpdate:n=>n.f||(n.f=()=>Ho(n.update)),$nextTick:n=>n.n||(n.n=df.bind(n.proxy)),$watch:n=>Af.bind(n)}),kf={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==qe&&Ue(i,e))return a[e]=1,i[e];if(r!==qe&&Ue(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&Ue(c,e))return a[e]=3,s[e];if(t!==qe&&Ue(t,e))return a[e]=4,t[e];uo&&(a[e]=0)}}const u=$r[e];let f,h;if(u)return e==="$attrs"&&Et(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==qe&&Ue(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,Ue(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==qe&&Ue(r,e)?(r[e]=t,!0):i!==qe&&Ue(i,e)?(i[e]=t,!0):Ue(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==qe&&Ue(n,a)||e!==qe&&Ue(e,a)||(o=s[0])&&Ue(o,a)||Ue(i,a)||Ue($r,a)||Ue(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ue(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let uo=!0;function Wf(n){const e=Wo(n),t=n.proxy,i=n.ctx;uo=!1,e.beforeCreate&&pa(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:x,activated:p,deactivated:d,beforeDestroy:v,beforeUnmount:S,destroyed:E,unmounted:w,render:T,renderTracked:L,renderTriggered:B,errorCaptured:M,serverPrefetch:A,expose:P,inheritAttrs:ee,components:he,directives:W,filters:O}=e;if(c&&qf(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const K in a){const V=a[K];Ie(V)&&(i[K]=V.bind(t))}if(r){const K=r.call(t,t);tt(K)&&(n.data=Oo(K))}if(uo=!0,s)for(const K in s){const V=s[K],F=Ie(V)?V.bind(t,t):Ie(V.get)?V.get.bind(t,t):kt,k=!Ie(V)&&Ie(V.set)?V.set.bind(t):kt,ce=wh({get:F,set:k});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>ce.value,set:ae=>ce.value=ae})}if(o)for(const K in o)wc(o[K],i,t,K);if(l){const K=Ie(l)?l.call(t):l;Reflect.ownKeys(K).forEach(V=>{Ef(V,K[V])})}u&&pa(u,n,"c");function te(K,V){Re(V)?V.forEach(F=>K(F.bind(t))):V&&K(V.bind(t))}if(te(Nf,f),te(ko,h),te(Uf,m),te(Of,x),te(Pf,p),te(If,d),te(Vf,M),te(Gf,L),te(Bf,B),te(yc,S),te(Sc,w),te(zf,A),Re(P))if(P.length){const K=n.exposed||(n.exposed={});P.forEach(V=>{Object.defineProperty(K,V,{get:()=>t[V],set:F=>t[V]=F})})}else n.exposed||(n.exposed={});T&&n.render===kt&&(n.render=T),ee!=null&&(n.inheritAttrs=ee),he&&(n.components=he),W&&(n.directives=W)}function qf(n,e,t=kt,i=!1){Re(n)&&(n=fo(n));for(const r in n){const s=n[r];let a;tt(s)?"default"in s?a=_s(s.from||r,s.default,!0):a=_s(s.from||r):a=_s(s),mt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function pa(n,e,t){It(Re(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function wc(n,e,t,i){const r=i.includes(".")?xc(t,i):()=>t[i];if(ht(n)){const s=e[n];Ie(s)&&xs(r,s)}else if(Ie(n))xs(r,n.bind(t));else if(tt(n))if(Re(n))n.forEach(s=>wc(s,e,t,i));else{const s=Ie(n.handler)?n.handler.bind(t):e[n.handler];Ie(s)&&xs(r,s,n)}}function Wo(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Zr(l,c,a,!0)),Zr(l,e,a)),tt(e)&&s.set(e,l),l}function Zr(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Zr(n,s,t,!0),r&&r.forEach(a=>Zr(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Xf[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Xf={data:ma,props:Hn,emits:Hn,methods:Hn,computed:Hn,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Hn,directives:Hn,watch:Yf,provide:ma,inject:jf};function ma(n,e){return e?n?function(){return ft(Ie(n)?n.call(this,this):n,Ie(e)?e.call(this,this):e)}:e:n}function jf(n,e){return Hn(fo(n),fo(e))}function fo(n){if(Re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function pt(n,e){return n?[...new Set([].concat(n,e))]:e}function Hn(n,e){return n?ft(ft(Object.create(null),n),e):e}function Yf(n,e){if(!n)return e;if(!e)return n;const t=ft(Object.create(null),n);for(const i in e)t[i]=pt(n[i],e[i]);return t}function $f(n,e,t,i=!1){const r={},s={};jr(s,os,1),n.propsDefaults=Object.create(null),Tc(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:sf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Zf(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=We(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(is(n.emitsOptions,h))continue;const m=e[h];if(l)if(Ue(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const x=Ii(h);r[x]=ho(l,o,x,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Tc(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Ue(e,f)&&((u=Gi(f))===f||!Ue(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ho(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ue(e,f)&&!0)&&(delete s[f],c=!0)}c&&mn(n,"set","$attrs")}function Tc(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Vr(l))continue;const c=e[l];let u;r&&Ue(r,u=Ii(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:is(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=We(t),c=o||qe;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ho(r,l,f,c[f],n,!Ue(c,f))}}return a}function ho(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Ue(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Ie(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Fi(r),i=c[t]=l.call(null,e),ei())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Gi(t))&&(i=!0))}return i}function Ec(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ie(n)){const u=f=>{l=!0;const[h,m]=Ec(f,e,!0);ft(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return tt(n)&&i.set(n,Ci),Ci;if(Re(s))for(let u=0;u<s.length;u++){const f=Ii(s[u]);ga(f)&&(a[f]=qe)}else if(s)for(const u in s){const f=Ii(u);if(ga(f)){const h=s[u],m=a[f]=Re(h)||Ie(h)?{type:h}:h;if(m){const x=va(Boolean,m.type),p=va(String,m.type);m[0]=x>-1,m[1]=p<0||x<p,(x>-1||Ue(m,"default"))&&o.push(f)}}}const c=[a,o];return tt(n)&&i.set(n,c),c}function ga(n){return n[0]!=="$"}function _a(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function xa(n,e){return _a(n)===_a(e)}function va(n,e){return Re(e)?e.findIndex(t=>xa(t,n)):Ie(e)&&xa(e,n)?0:-1}const Ac=n=>n[0]==="_"||n==="$stable",qo=n=>Re(n)?n.map(Zt):[Zt(n)],Kf=(n,e,t)=>{if(e._n)return e;const i=vf((...r)=>qo(e(...r)),t);return i._c=!1,i},Cc=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ac(r))continue;const s=n[r];if(Ie(s))e[r]=Kf(r,s,i);else if(s!=null){const a=qo(s);e[r]=()=>a}}},Lc=(n,e)=>{const t=qo(e);n.slots.default=()=>t},Jf=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=We(e),jr(e,"_",t)):Cc(e,n.slots={})}else n.slots={},e&&Lc(n,e);jr(n.slots,os,1)},Qf=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=qe;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(ft(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Cc(e,r)),a=e}else e&&(Lc(n,e),a={default:1});if(s)for(const o in r)!Ac(o)&&!(o in a)&&delete r[o]};function Rc(){return{app:null,config:{isNativeTag:Mu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eh=0;function th(n,e){return function(i,r=null){Ie(i)||(i=Object.assign({},i)),r!=null&&!tt(r)&&(r=null);const s=Rc(),a=new Set;let o=!1;const l=s.app={_uid:eh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Th,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ie(c.install)?(a.add(c),c.install(l,...u)):Ie(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=Qn(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,$o(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function po(n,e,t,i,r=!1){if(Re(n)){n.forEach((h,m)=>po(h,e&&(Re(e)?e[m]:e),t,i,r));return}if(Hr(i)&&!r)return;const s=i.shapeFlag&4?$o(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===qe?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(ht(c)?(u[c]=null,Ue(f,c)&&(f[c]=null)):mt(c)&&(c.value=null)),Ie(l))Dn(l,o,12,[a,u]);else{const h=ht(l),m=mt(l);if(h||m){const x=()=>{if(n.f){const p=h?u[l]:l.value;r?Re(p)&&Lo(p,s):Re(p)?p.includes(s)||p.push(s):h?(u[l]=[s],Ue(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,Ue(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(x.id=-1,xt(x,t)):x()}}}const xt=Tf;function nh(n){return ih(n)}function ih(n,e){const t=Ru();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=kt,cloneNode:x,insertStaticContent:p}=n,d=(y,C,H,Y=null,Z=null,ie=null,re=!1,oe=null,le=!!C.dynamicChildren)=>{if(y===C)return;y&&!Xn(y,C)&&(Y=Se(y),se(y,Z,ie,!0),y=null),C.patchFlag===-2&&(le=!1,C.dynamicChildren=null);const{type:_,ref:g,shapeFlag:D}=C;switch(_){case Xo:v(y,C,H,Y);break;case dn:S(y,C,H,Y);break;case Ms:y==null&&E(C,H,Y,re);break;case $t:W(y,C,H,Y,Z,ie,re,oe,le);break;default:D&1?L(y,C,H,Y,Z,ie,re,oe,le):D&6?O(y,C,H,Y,Z,ie,re,oe,le):(D&64||D&128)&&_.process(y,C,H,Y,Z,ie,re,oe,le,_e)}g!=null&&Z&&po(g,y&&y.ref,ie,C||y,!C)},v=(y,C,H,Y)=>{if(y==null)i(C.el=o(C.children),H,Y);else{const Z=C.el=y.el;C.children!==y.children&&c(Z,C.children)}},S=(y,C,H,Y)=>{y==null?i(C.el=l(C.children||""),H,Y):C.el=y.el},E=(y,C,H,Y)=>{[y.el,y.anchor]=p(y.children,C,H,Y,y.el,y.anchor)},w=({el:y,anchor:C},H,Y)=>{let Z;for(;y&&y!==C;)Z=h(y),i(y,H,Y),y=Z;i(C,H,Y)},T=({el:y,anchor:C})=>{let H;for(;y&&y!==C;)H=h(y),r(y),y=H;r(C)},L=(y,C,H,Y,Z,ie,re,oe,le)=>{re=re||C.type==="svg",y==null?B(C,H,Y,Z,ie,re,oe,le):P(y,C,Z,ie,re,oe,le)},B=(y,C,H,Y,Z,ie,re,oe)=>{let le,_;const{type:g,props:D,shapeFlag:G,transition:q,patchFlag:ne,dirs:pe}=y;if(y.el&&x!==void 0&&ne===-1)le=y.el=x(y.el);else{if(le=y.el=a(y.type,ie,D&&D.is,D),G&8?u(le,y.children):G&16&&A(y.children,le,null,Y,Z,ie&&g!=="foreignObject",re,oe),pe&&On(y,null,Y,"created"),D){for(const ue in D)ue!=="value"&&!Vr(ue)&&s(le,ue,null,D[ue],ie,y.children,Y,Z,De);"value"in D&&s(le,"value",null,D.value),(_=D.onVnodeBeforeMount)&&jt(_,Y,y)}M(le,y,y.scopeId,re,Y)}pe&&On(y,null,Y,"beforeMount");const N=(!Z||Z&&!Z.pendingBranch)&&q&&!q.persisted;N&&q.beforeEnter(le),i(le,C,H),((_=D&&D.onVnodeMounted)||N||pe)&&xt(()=>{_&&jt(_,Y,y),N&&q.enter(le),pe&&On(y,null,Y,"mounted")},Z)},M=(y,C,H,Y,Z)=>{if(H&&m(y,H),Y)for(let ie=0;ie<Y.length;ie++)m(y,Y[ie]);if(Z){let ie=Z.subTree;if(C===ie){const re=Z.vnode;M(y,re,re.scopeId,re.slotScopeIds,Z.parent)}}},A=(y,C,H,Y,Z,ie,re,oe,le=0)=>{for(let _=le;_<y.length;_++){const g=y[_]=oe?Cn(y[_]):Zt(y[_]);d(null,g,C,H,Y,Z,ie,re,oe)}},P=(y,C,H,Y,Z,ie,re)=>{const oe=C.el=y.el;let{patchFlag:le,dynamicChildren:_,dirs:g}=C;le|=y.patchFlag&16;const D=y.props||qe,G=C.props||qe;let q;H&&zn(H,!1),(q=G.onVnodeBeforeUpdate)&&jt(q,H,C,y),g&&On(C,y,H,"beforeUpdate"),H&&zn(H,!0);const ne=Z&&C.type!=="foreignObject";if(_?ee(y.dynamicChildren,_,oe,H,Y,ne,ie):re||F(y,C,oe,null,H,Y,ne,ie,!1),le>0){if(le&16)he(oe,C,D,G,H,Y,Z);else if(le&2&&D.class!==G.class&&s(oe,"class",null,G.class,Z),le&4&&s(oe,"style",D.style,G.style,Z),le&8){const pe=C.dynamicProps;for(let N=0;N<pe.length;N++){const ue=pe[N],de=D[ue],be=G[ue];(be!==de||ue==="value")&&s(oe,ue,de,be,Z,y.children,H,Y,De)}}le&1&&y.children!==C.children&&u(oe,C.children)}else!re&&_==null&&he(oe,C,D,G,H,Y,Z);((q=G.onVnodeUpdated)||g)&&xt(()=>{q&&jt(q,H,C,y),g&&On(C,y,H,"updated")},Y)},ee=(y,C,H,Y,Z,ie,re)=>{for(let oe=0;oe<C.length;oe++){const le=y[oe],_=C[oe],g=le.el&&(le.type===$t||!Xn(le,_)||le.shapeFlag&70)?f(le.el):H;d(le,_,g,null,Y,Z,ie,re,!0)}},he=(y,C,H,Y,Z,ie,re)=>{if(H!==Y){for(const oe in Y){if(Vr(oe))continue;const le=Y[oe],_=H[oe];le!==_&&oe!=="value"&&s(y,oe,_,le,re,C.children,Z,ie,De)}if(H!==qe)for(const oe in H)!Vr(oe)&&!(oe in Y)&&s(y,oe,H[oe],null,re,C.children,Z,ie,De);"value"in Y&&s(y,"value",H.value,Y.value)}},W=(y,C,H,Y,Z,ie,re,oe,le)=>{const _=C.el=y?y.el:o(""),g=C.anchor=y?y.anchor:o("");let{patchFlag:D,dynamicChildren:G,slotScopeIds:q}=C;q&&(oe=oe?oe.concat(q):q),y==null?(i(_,H,Y),i(g,H,Y),A(C.children,H,g,Z,ie,re,oe,le)):D>0&&D&64&&G&&y.dynamicChildren?(ee(y.dynamicChildren,G,H,Z,ie,re,oe),(C.key!=null||Z&&C===Z.subTree)&&Dc(y,C,!0)):F(y,C,H,g,Z,ie,re,oe,le)},O=(y,C,H,Y,Z,ie,re,oe,le)=>{C.slotScopeIds=oe,y==null?C.shapeFlag&512?Z.ctx.activate(C,H,Y,re,le):Q(C,H,Y,Z,ie,re,le):te(y,C,le)},Q=(y,C,H,Y,Z,ie,re)=>{const oe=y.component=_h(y,Y,Z);if(rs(y)&&(oe.ctx.renderer=_e),vh(oe),oe.asyncDep){if(Z&&Z.registerDep(oe,K),!y.el){const le=oe.subTree=Qn(dn);S(null,le,C,H)}return}K(oe,y,C,H,Z,ie,re)},te=(y,C,H)=>{const Y=C.component=y.component;if(yf(y,C,H))if(Y.asyncDep&&!Y.asyncResolved){V(Y,C,H);return}else Y.next=C,mf(Y.update),Y.update();else C.el=y.el,Y.vnode=C},K=(y,C,H,Y,Z,ie,re)=>{const oe=()=>{if(y.isMounted){let{next:g,bu:D,u:G,parent:q,vnode:ne}=y,pe=g,N;zn(y,!1),g?(g.el=ne.el,V(y,g,re)):g=ne,D&&ms(D),(N=g.props&&g.props.onVnodeBeforeUpdate)&&jt(N,q,g,ne),zn(y,!0);const ue=gs(y),de=y.subTree;y.subTree=ue,d(de,ue,f(de.el),Se(de),y,Z,ie),g.el=ue.el,pe===null&&Sf(y,ue.el),G&&xt(G,Z),(N=g.props&&g.props.onVnodeUpdated)&&xt(()=>jt(N,q,g,ne),Z)}else{let g;const{el:D,props:G}=C,{bm:q,m:ne,parent:pe}=y,N=Hr(C);if(zn(y,!1),q&&ms(q),!N&&(g=G&&G.onVnodeBeforeMount)&&jt(g,pe,C),zn(y,!0),D&&Le){const ue=()=>{y.subTree=gs(y),Le(D,y.subTree,y,Z,null)};N?C.type.__asyncLoader().then(()=>!y.isUnmounted&&ue()):ue()}else{const ue=y.subTree=gs(y);d(null,ue,H,Y,y,Z,ie),C.el=ue.el}if(ne&&xt(ne,Z),!N&&(g=G&&G.onVnodeMounted)){const ue=C;xt(()=>jt(g,pe,ue),Z)}(C.shapeFlag&256||pe&&Hr(pe.vnode)&&pe.vnode.shapeFlag&256)&&y.a&&xt(y.a,Z),y.isMounted=!0,C=H=Y=null}},le=y.effect=new Io(oe,()=>Ho(_),y.scope),_=y.update=()=>le.run();_.id=y.uid,zn(y,!0),_()},V=(y,C,H)=>{C.component=y;const Y=y.vnode.props;y.vnode=C,y.next=null,Zf(y,C.props,Y,H),Qf(y,C.children,H),Vi(),ua(),Hi()},F=(y,C,H,Y,Z,ie,re,oe,le=!1)=>{const _=y&&y.children,g=y?y.shapeFlag:0,D=C.children,{patchFlag:G,shapeFlag:q}=C;if(G>0){if(G&128){ce(_,D,H,Y,Z,ie,re,oe,le);return}else if(G&256){k(_,D,H,Y,Z,ie,re,oe,le);return}}q&8?(g&16&&De(_,Z,ie),D!==_&&u(H,D)):g&16?q&16?ce(_,D,H,Y,Z,ie,re,oe,le):De(_,Z,ie,!0):(g&8&&u(H,""),q&16&&A(D,H,Y,Z,ie,re,oe,le))},k=(y,C,H,Y,Z,ie,re,oe,le)=>{y=y||Ci,C=C||Ci;const _=y.length,g=C.length,D=Math.min(_,g);let G;for(G=0;G<D;G++){const q=C[G]=le?Cn(C[G]):Zt(C[G]);d(y[G],q,H,null,Z,ie,re,oe,le)}_>g?De(y,Z,ie,!0,!1,D):A(C,H,Y,Z,ie,re,oe,le,D)},ce=(y,C,H,Y,Z,ie,re,oe,le)=>{let _=0;const g=C.length;let D=y.length-1,G=g-1;for(;_<=D&&_<=G;){const q=y[_],ne=C[_]=le?Cn(C[_]):Zt(C[_]);if(Xn(q,ne))d(q,ne,H,null,Z,ie,re,oe,le);else break;_++}for(;_<=D&&_<=G;){const q=y[D],ne=C[G]=le?Cn(C[G]):Zt(C[G]);if(Xn(q,ne))d(q,ne,H,null,Z,ie,re,oe,le);else break;D--,G--}if(_>D){if(_<=G){const q=G+1,ne=q<g?C[q].el:Y;for(;_<=G;)d(null,C[_]=le?Cn(C[_]):Zt(C[_]),H,ne,Z,ie,re,oe,le),_++}}else if(_>G)for(;_<=D;)se(y[_],Z,ie,!0),_++;else{const q=_,ne=_,pe=new Map;for(_=ne;_<=G;_++){const Ne=C[_]=le?Cn(C[_]):Zt(C[_]);Ne.key!=null&&pe.set(Ne.key,_)}let N,ue=0;const de=G-ne+1;let be=!1,ve=0;const Te=new Array(de);for(_=0;_<de;_++)Te[_]=0;for(_=q;_<=D;_++){const Ne=y[_];if(ue>=de){se(Ne,Z,ie,!0);continue}let R;if(Ne.key!=null)R=pe.get(Ne.key);else for(N=ne;N<=G;N++)if(Te[N-ne]===0&&Xn(Ne,C[N])){R=N;break}R===void 0?se(Ne,Z,ie,!0):(Te[R-ne]=_+1,R>=ve?ve=R:be=!0,d(Ne,C[R],H,null,Z,ie,re,oe,le),ue++)}const Oe=be?rh(Te):Ci;for(N=Oe.length-1,_=de-1;_>=0;_--){const Ne=ne+_,R=C[Ne],me=Ne+1<g?C[Ne+1].el:Y;Te[_]===0?d(null,R,H,me,Z,ie,re,oe,le):be&&(N<0||_!==Oe[N]?ae(R,H,me,2):N--)}}},ae=(y,C,H,Y,Z=null)=>{const{el:ie,type:re,transition:oe,children:le,shapeFlag:_}=y;if(_&6){ae(y.component.subTree,C,H,Y);return}if(_&128){y.suspense.move(C,H,Y);return}if(_&64){re.move(y,C,H,_e);return}if(re===$t){i(ie,C,H);for(let D=0;D<le.length;D++)ae(le[D],C,H,Y);i(y.anchor,C,H);return}if(re===Ms){w(y,C,H);return}if(Y!==2&&_&1&&oe)if(Y===0)oe.beforeEnter(ie),i(ie,C,H),xt(()=>oe.enter(ie),Z);else{const{leave:D,delayLeave:G,afterLeave:q}=oe,ne=()=>i(ie,C,H),pe=()=>{D(ie,()=>{ne(),q&&q()})};G?G(ie,ne,pe):pe()}else i(ie,C,H)},se=(y,C,H,Y=!1,Z=!1)=>{const{type:ie,props:re,ref:oe,children:le,dynamicChildren:_,shapeFlag:g,patchFlag:D,dirs:G}=y;if(oe!=null&&po(oe,null,H,y,!0),g&256){C.ctx.deactivate(y);return}const q=g&1&&G,ne=!Hr(y);let pe;if(ne&&(pe=re&&re.onVnodeBeforeUnmount)&&jt(pe,C,y),g&6)J(y.component,H,Y);else{if(g&128){y.suspense.unmount(H,Y);return}q&&On(y,null,C,"beforeUnmount"),g&64?y.type.remove(y,C,H,Z,_e,Y):_&&(ie!==$t||D>0&&D&64)?De(_,C,H,!1,!0):(ie===$t&&D&384||!Z&&g&16)&&De(le,C,H),Y&&Me(y)}(ne&&(pe=re&&re.onVnodeUnmounted)||q)&&xt(()=>{pe&&jt(pe,C,y),q&&On(y,null,C,"unmounted")},H)},Me=y=>{const{type:C,el:H,anchor:Y,transition:Z}=y;if(C===$t){Ee(H,Y);return}if(C===Ms){T(y);return}const ie=()=>{r(H),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(y.shapeFlag&1&&Z&&!Z.persisted){const{leave:re,delayLeave:oe}=Z,le=()=>re(H,ie);oe?oe(y.el,ie,le):le()}else ie()},Ee=(y,C)=>{let H;for(;y!==C;)H=h(y),r(y),y=H;r(C)},J=(y,C,H)=>{const{bum:Y,scope:Z,update:ie,subTree:re,um:oe}=y;Y&&ms(Y),Z.stop(),ie&&(ie.active=!1,se(re,y,C,H)),oe&&xt(oe,C),xt(()=>{y.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},De=(y,C,H,Y=!1,Z=!1,ie=0)=>{for(let re=ie;re<y.length;re++)se(y[re],C,H,Y,Z)},Se=y=>y.shapeFlag&6?Se(y.component.subTree):y.shapeFlag&128?y.suspense.next():h(y.anchor||y.el),we=(y,C,H)=>{y==null?C._vnode&&se(C._vnode,null,null,!0):d(C._vnode||null,y,C,null,null,null,H),ua(),dc(),C._vnode=y},_e={p:d,um:se,m:ae,r:Me,mt:Q,mc:A,pc:F,pbc:ee,n:Se,o:n};let Ve,Le;return e&&([Ve,Le]=e(_e)),{render:we,hydrate:Ve,createApp:th(we,Ve)}}function zn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Dc(n,e,t=!1){const i=n.children,r=e.children;if(Re(i)&&Re(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Cn(r[s]),o.el=a.el),t||Dc(a,o))}}function rh(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const sh=n=>n.__isTeleport,$t=Symbol(void 0),Xo=Symbol(void 0),dn=Symbol(void 0),Ms=Symbol(void 0),er=[];let Ht=null;function oh(n=!1){er.push(Ht=n?null:[])}function ah(){er.pop(),Ht=er[er.length-1]||null}let rr=1;function Ma(n){rr+=n}function lh(n){return n.dynamicChildren=rr>0?Ht||Ci:null,ah(),rr>0&&Ht&&Ht.push(n),n}function ch(n,e,t,i,r,s){return lh(jo(n,e,t,i,r,s,!0))}function uh(n){return n?n.__v_isVNode===!0:!1}function Xn(n,e){return n.type===e.type&&n.key===e.key}const os="__vInternal",Pc=({key:n})=>n!=null?n:null,kr=({ref:n,ref_key:e,ref_for:t})=>n!=null?ht(n)||mt(n)||Ie(n)?{i:Qt,r:n,k:e,f:!!t}:n:null;function jo(n,e=null,t=null,i=0,r=null,s=n===$t?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Pc(e),ref:e&&kr(e),scopeId:gc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return o?(Yo(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),rr>0&&!a&&Ht&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ht.push(l),l}const Qn=fh;function fh(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Hf)&&(n=dn),uh(n)){const o=Fn(n,e,!0);return t&&Yo(o,t),rr>0&&!s&&Ht&&(o.shapeFlag&6?Ht[Ht.indexOf(n)]=o:Ht.push(o)),o.patchFlag|=-2,o}if(Sh(n)&&(n=n.__vccOpts),e){e=hh(e);let{class:o,style:l}=e;o&&!ht(o)&&(e.class=Ao(o)),tt(l)&&(ac(l)&&!Re(l)&&(l=ft({},l)),e.style=Eo(l))}const a=ht(n)?1:wf(n)?128:sh(n)?64:tt(n)?4:Ie(n)?2:0;return jo(n,e,t,i,r,a,s,!0)}function hh(n){return n?ac(n)||os in n?ft({},n):n:null}function Fn(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?ph(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Pc(o),ref:e&&e.ref?t&&r?Re(r)?r.concat(kr(e)):[r,kr(e)]:kr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==$t?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fn(n.ssContent),ssFallback:n.ssFallback&&Fn(n.ssFallback),el:n.el,anchor:n.anchor}}function dh(n=" ",e=0){return Qn(Xo,null,n,e)}function Zt(n){return n==null||typeof n=="boolean"?Qn(dn):Re(n)?Qn($t,null,n.slice()):typeof n=="object"?Cn(n):Qn(Xo,null,String(n))}function Cn(n){return n.el===null||n.memo?n:Fn(n)}function Yo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Re(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Yo(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(os in e)?e._ctx=Qt:r===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:Qt},t=32):(e=String(e),i&64?(t=16,e=[dh(e)]):t=8);n.children=e,n.shapeFlag|=t}function ph(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ao([e.class,i.class]));else if(r==="style")e.style=Eo([e.style,i.style]);else if(Jr(r)){const s=e[r],a=i[r];a&&s!==a&&!(Re(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function jt(n,e,t,i=null){It(n,e,7,[t,i])}const mh=Rc();let gh=0;function _h(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||mh,s={uid:gh++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Du(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ec(i,r),emitsOptions:mc(i,r),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:i.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=xf.bind(null,s),n.ce&&n.ce(s),s}let ot=null;const xh=()=>ot||Qt,Fi=n=>{ot=n,n.scope.on()},ei=()=>{ot&&ot.scope.off(),ot=null};function Ic(n){return n.vnode.shapeFlag&4}let sr=!1;function vh(n,e=!1){sr=e;const{props:t,children:i}=n.vnode,r=Ic(n);$f(n,t,r,e),Jf(n,i);const s=r?Mh(n,e):void 0;return sr=!1,s}function Mh(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=lc(new Proxy(n.ctx,kf));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?yh(n):null;Fi(n),Vi();const s=Dn(i,n,0,[n.props,r]);if(Hi(),ei(),Yl(s)){if(s.then(ei,ei),e)return s.then(a=>{ba(n,a,e)}).catch(a=>{ns(a,n,0)});n.asyncDep=s}else ba(n,s,e)}else Fc(n,e)}function ba(n,e,t){Ie(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:tt(e)&&(n.setupState=cc(e)),Fc(n,t)}let ya;function Fc(n,e,t){const i=n.type;if(!n.render){if(!e&&ya&&!i.render){const r=i.template||Wo(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=ft(ft({isCustomElement:s,delimiters:o},a),l);i.render=ya(r,c)}}n.render=i.render||kt}Fi(n),Vi(),Wf(n),Hi(),ei()}function bh(n){return new Proxy(n.attrs,{get(e,t){return Et(n,"get","$attrs"),e[t]}})}function yh(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=bh(n))},slots:n.slots,emit:n.emit,expose:e}}function $o(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(cc(lc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in $r)return $r[t](n)}}))}function Sh(n){return Ie(n)&&"__vccOpts"in n}const wh=(n,e)=>ff(n,e,sr),Th="3.2.39",Eh="http://www.w3.org/2000/svg",jn=typeof document<"u"?document:null,Sa=jn&&jn.createElement("template"),Ah={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?jn.createElementNS(Eh,n):jn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>jn.createTextNode(n),createComment:n=>jn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>jn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Sa.innerHTML=i?`<svg>${n}</svg>`:n;const o=Sa.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Ch(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Lh(n,e,t){const i=n.style,r=ht(t);if(t&&!r){for(const s in t)mo(i,s,t[s]);if(e&&!ht(e))for(const s in e)t[s]==null&&mo(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const wa=/\s*!important$/;function mo(n,e,t){if(Re(t))t.forEach(i=>mo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Rh(n,e);wa.test(t)?n.setProperty(Gi(i),t.replace(wa,""),"important"):n[i]=t}}const Ta=["Webkit","Moz","ms"],bs={};function Rh(n,e){const t=bs[e];if(t)return t;let i=Ii(e);if(i!=="filter"&&i in n)return bs[e]=i;i=$l(i);for(let r=0;r<Ta.length;r++){const s=Ta[r]+i;if(s in n)return bs[e]=s}return e}const Ea="http://www.w3.org/1999/xlink";function Dh(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Ea,e.slice(6,e.length)):n.setAttributeNS(Ea,e,t);else{const s=gu(e);t==null||s&&!jl(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Ph(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=jl(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}const[Nc,Ih]=(()=>{let n=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let go=0;const Fh=Promise.resolve(),Nh=()=>{go=0},Uh=()=>go||(Fh.then(Nh),go=Nc());function Oh(n,e,t,i){n.addEventListener(e,t,i)}function zh(n,e,t,i){n.removeEventListener(e,t,i)}function Bh(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Gh(e);if(i){const c=s[e]=Vh(i,r);Oh(n,o,c,l)}else a&&(zh(n,o,a,l),s[e]=void 0)}}const Aa=/(?:Once|Passive|Capture)$/;function Gh(n){let e;if(Aa.test(n)){e={};let i;for(;i=n.match(Aa);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Gi(n.slice(2)),e]}function Vh(n,e){const t=i=>{const r=i.timeStamp||Nc();(Ih||r>=t.attached-1)&&It(Hh(i,t.value),e,5,[i])};return t.value=n,t.attached=Uh(),t}function Hh(n,e){if(Re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ca=/^on[a-z]/,kh=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?Ch(n,i,r):e==="style"?Lh(n,t,i):Jr(e)?Co(e)||Bh(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wh(n,e,i,r))?Ph(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Dh(n,e,i,r))};function Wh(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Ca.test(e)&&Ie(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Ca.test(e)&&ht(t)?!1:e in n}const qh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Rf.props;const Xh=ft({patchProp:kh},Ah);let La;function jh(){return La||(La=nh(Xh))}const Yh=(...n)=>{const e=jh().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=$h(i);if(!r)return;const s=e._component;!Ie(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function $h(n){return ht(n)?document.querySelector(n):n}const Zh=(n,e,t)=>{let i=(e-n)/(t-1),r=new Array;for(let s=0;s<=t-1;s++)r.push(Number("0x"+Math.round(n+i*s).toString(16)));return r};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zo="144",Kh=0,Ra=1,Jh=2,Uc=1,Qh=2,Ki=3,Ni=0,Ft=1,Ln=2,Pn=0,Di=1,Da=2,Pa=3,Ia=4,ed=5,wi=100,td=101,nd=102,Fa=103,Na=104,id=200,rd=201,sd=202,od=203,Oc=204,zc=205,ad=206,ld=207,cd=208,ud=209,fd=210,hd=0,dd=1,pd=2,_o=3,md=4,gd=5,_d=6,xd=7,Bc=0,vd=1,Md=2,pn=0,bd=1,yd=2,Sd=3,wd=4,Td=5,Gc=300,Ui=301,Oi=302,xo=303,vo=304,as=306,Mo=1e3,Vt=1001,bo=1002,vt=1003,Ua=1004,Oa=1005,Dt=1006,Ed=1007,ls=1008,ii=1009,Ad=1010,Cd=1011,Vc=1012,Ld=1013,$n=1014,Zn=1015,or=1016,Rd=1017,Dd=1018,Pi=1020,Pd=1021,Id=1022,en=1023,Fd=1024,Nd=1025,ti=1026,zi=1027,Ud=1028,Od=1029,zd=1030,Bd=1031,Gd=1033,ys=33776,Ss=33777,ws=33778,Ts=33779,za=35840,Ba=35841,Ga=35842,Va=35843,Vd=36196,Ha=37492,ka=37496,Wa=37808,qa=37809,Xa=37810,ja=37811,Ya=37812,$a=37813,Za=37814,Ka=37815,Ja=37816,Qa=37817,el=37818,tl=37819,nl=37820,il=37821,rl=36492,ri=3e3,Ke=3001,Hd=3200,kd=3201,Wd=0,qd=1,un="srgb",Kn="srgb-linear",Es=7680,Xd=519,sl=35044,ol="300 es",yo=1035;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],As=Math.PI/180,al=180/Math.PI;function ar(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(lt[n&255]+lt[n>>8&255]+lt[n>>16&255]+lt[n>>24&255]+"-"+lt[e&255]+lt[e>>8&255]+"-"+lt[e>>16&15|64]+lt[e>>24&255]+"-"+lt[t&63|128]+lt[t>>8&255]+"-"+lt[t>>16&255]+lt[t>>24&255]+lt[i&255]+lt[i>>8&255]+lt[i>>16&255]+lt[i>>24&255]).toLowerCase()}function Tt(n,e,t){return Math.max(e,Math.min(t,n))}function jd(n,e){return(n%e+e)%e}function Cs(n,e,t){return(1-t)*n+t*e}function ll(n){return(n&n-1)===0&&n!==0}function So(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],x=i[8],p=r[0],d=r[3],v=r[6],S=r[1],E=r[4],w=r[7],T=r[2],L=r[5],B=r[8];return s[0]=a*p+o*S+l*T,s[3]=a*d+o*E+l*L,s[6]=a*v+o*w+l*B,s[1]=c*p+u*S+f*T,s[4]=c*d+u*E+f*L,s[7]=c*v+u*w+f*B,s[2]=h*p+m*S+x*T,s[5]=h*d+m*E+x*L,s[8]=h*v+m*w+x*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,x=t*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*a+i*c,r[6]=t*o+i*u,r[1]=-i*s+t*l,r[4]=-i*a+t*c,r[7]=-i*o+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Hc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ls={[un]:{[Kn]:ni},[Kn]:{[un]:Wr}},Nt={legacyMode:!0,get workingColorSpace(){return Kn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Ls[e]&&Ls[e][t]!==void 0){const i=Ls[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nt={r:0,g:0,b:0},Ut={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Rs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Mr(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Kn){return this.r=e,this.g=t,this.b=i,Nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Kn){if(e=jd(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Rs(a,s,e+1/3),this.g=Rs(a,s,e),this.b=Rs(a,s,e-1/3)}return Nt.toWorkingColorSpace(this,r),this}setStyle(e,t=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Nt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Nt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Nt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Nt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=un){const i=kc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Nt.fromWorkingColorSpace(Mr(this,nt),e),Tt(nt.r*255,0,255)<<16^Tt(nt.g*255,0,255)<<8^Tt(nt.b*255,0,255)<<0}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Kn){Nt.fromWorkingColorSpace(Mr(this,nt),t);const i=nt.r,r=nt.g,s=nt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Kn){return Nt.fromWorkingColorSpace(Mr(this,nt),t),e.r=nt.r,e.g=nt.g,e.b=nt.b,e}getStyle(e=un){return Nt.fromWorkingColorSpace(Mr(this,nt),e),e!==un?`color(${e} ${nt.r} ${nt.g} ${nt.b})`:`rgb(${nt.r*255|0},${nt.g*255|0},${nt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Ut),Ut.h+=e,Ut.s+=t,Ut.l+=i,this.setHSL(Ut.h,Ut.s,Ut.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ut),e.getHSL(vr);const i=Cs(Ut.h,vr.h,t),r=Cs(Ut.s,vr.s,t),s=Cs(Ut.l,vr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Xe.NAMES=kc;let ui;class Wc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=Kr("canvas")),ui.width=e.width,ui.height=e.height;const i=ui.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ni(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ni(t[i]/255)*255):t[i]=ni(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class qc{constructor(e=null){this.isSource=!0,this.uuid=ar(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ds(r[a].image)):s.push(Ds(r[a]))}else s=Ds(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ds(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yd=0;class qt extends ki{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=Vt,r=Vt,s=Dt,a=ls,o=en,l=ii,c=1,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=ar(),this.name="",this.source=new qc(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case Vt:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case Vt:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Gc;class at{constructor(e=0,t=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],p=l[2],d=l[6],v=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(x+d)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,w=(m+1)/2,T=(v+1)/2,L=(u+h)/4,B=(f+p)/4,M=(x+d)/4;return E>w&&E>T?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=L/i,s=B/i):w>T?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=L/r,s=M/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=B/s,r=M/s),this.set(i,r,s,t),this}let S=Math.sqrt((d-x)*(d-x)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(d-x)/S,this.y=(f-p)/S,this.z=(h-u)/S,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class si extends ki{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Dt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xc extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $d extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],x=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==x){let d=1-o;const v=l*h+c*m+u*x+f*p,S=v>=0?1:-1,E=1-v*v;if(E>Number.EPSILON){const T=Math.sqrt(E),L=Math.atan2(T,v*S);d=Math.sin(d*L)/T,o=Math.sin(o*L)/T}const w=o*S;if(l=l*d+h*w,c=c*d+m*w,u=u*d+x*w,f=f*d+p*w,d===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*m-c*h,e[t+1]=l*x+u*h+c*f-o*m,e[t+2]=c*x+u*m+o*h-l*f,e[t+3]=u*x-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"YZX":this._x=h*u*f+c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f-h*m*x;break;case"XZY":this._x=h*u*f-c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ps.copy(this).projectOnVector(e),this.sub(Ps)}reflect(e){return this.sub(Ps.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ps=new U,cl=new lr;class cr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Bn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Bn)}else i.boundingBox===null&&i.computeBoundingBox(),Is.copy(i.boundingBox),Is.applyMatrix4(e.matrixWorld),this.union(Is);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),br.subVectors(this.max,ji),fi.subVectors(e.a,ji),hi.subVectors(e.b,ji),di.subVectors(e.c,ji),bn.subVectors(hi,fi),yn.subVectors(di,hi),Gn.subVectors(fi,di);let t=[0,-bn.z,bn.y,0,-yn.z,yn.y,0,-Gn.z,Gn.y,bn.z,0,-bn.x,yn.z,0,-yn.x,Gn.z,0,-Gn.x,-bn.y,bn.x,0,-yn.y,yn.x,0,-Gn.y,Gn.x,0];return!Fs(t,fi,hi,di,br)||(t=[1,0,0,0,1,0,0,0,1],!Fs(t,fi,hi,di,br))?!1:(yr.crossVectors(bn,yn),t=[yr.x,yr.y,yr.z],Fs(t,fi,hi,di,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Bn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new U,new U,new U,new U,new U,new U,new U,new U],Bn=new U,Is=new cr,fi=new U,hi=new U,di=new U,bn=new U,yn=new U,Gn=new U,ji=new U,br=new U,yr=new U,Vn=new U;function Fs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vn.fromArray(n,s);const o=r.x*Math.abs(Vn.x)+r.y*Math.abs(Vn.y)+r.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),u=i.dot(Vn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Zd=new cr,ul=new U,Sr=new U,Ns=new U;class cs{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zd.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Ns.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Sr.set(0,0,1).multiplyScalar(e.radius):Sr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ul.copy(e.center).add(Sr)),this.expandByPoint(ul.copy(e.center).sub(Sr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new U,Us=new U,wr=new U,Sn=new U,Os=new U,Tr=new U,zs=new U;class jc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.direction).multiplyScalar(t).add(this.origin),sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Us.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(Us);const s=e.distanceTo(t)*.5,a=-this.direction.dot(wr),o=Sn.dot(this.direction),l=-Sn.dot(wr),c=Sn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,x;if(u>0)if(f=a*l-o,h=a*o-l,x=s*u,f>=0)if(h>=-x)if(h<=x){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(wr).multiplyScalar(h).add(Us),m}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const i=sn.dot(this.direction),r=sn.dot(sn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||i!==i)&&(i=s),(a<r||r!==r)&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,i,r,s){Os.subVectors(t,e),Tr.subVectors(i,e),zs.crossVectors(Os,Tr);let a=this.direction.dot(zs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,e);const l=o*this.direction.dot(Tr.crossVectors(Sn,Tr));if(l<0)return null;const c=o*this.direction.dot(Os.cross(Sn));if(c<0||l+c>a)return null;const u=-o*Sn.dot(zs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,h,m,x,p,d){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=h,v[3]=m,v[7]=x,v[11]=p,v[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/pi.setFromMatrixColumn(e,0).length(),s=1/pi.setFromMatrixColumn(e,1).length(),a=1/pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,x=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,x=c*u,p=c*f;t[0]=h+p*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,x=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,x=o*u,p=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,x=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,x=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kd,e,Jd)}lookAt(e,t,i){const r=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),wn.crossVectors(i,St),wn.lengthSq()===0&&(Math.abs(i.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),wn.crossVectors(i,St)),wn.normalize(),Er.crossVectors(St,wn),r[0]=wn.x,r[4]=Er.x,r[8]=St.x,r[1]=wn.y,r[5]=Er.y,r[9]=St.y,r[2]=wn.z,r[6]=Er.z,r[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],x=i[2],p=i[6],d=i[10],v=i[14],S=i[3],E=i[7],w=i[11],T=i[15],L=r[0],B=r[4],M=r[8],A=r[12],P=r[1],ee=r[5],he=r[9],W=r[13],O=r[2],Q=r[6],te=r[10],K=r[14],V=r[3],F=r[7],k=r[11],ce=r[15];return s[0]=a*L+o*P+l*O+c*V,s[4]=a*B+o*ee+l*Q+c*F,s[8]=a*M+o*he+l*te+c*k,s[12]=a*A+o*W+l*K+c*ce,s[1]=u*L+f*P+h*O+m*V,s[5]=u*B+f*ee+h*Q+m*F,s[9]=u*M+f*he+h*te+m*k,s[13]=u*A+f*W+h*K+m*ce,s[2]=x*L+p*P+d*O+v*V,s[6]=x*B+p*ee+d*Q+v*F,s[10]=x*M+p*he+d*te+v*k,s[14]=x*A+p*W+d*K+v*ce,s[3]=S*L+E*P+w*O+T*V,s[7]=S*B+E*ee+w*Q+T*F,s[11]=S*M+E*he+w*te+T*k,s[15]=S*A+E*W+w*K+T*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],p=e[7],d=e[11],v=e[15];return x*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+p*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+v*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],p=e[13],d=e[14],v=e[15],S=f*d*c-p*h*c+p*l*m-o*d*m-f*l*v+o*h*v,E=x*h*c-u*d*c-x*l*m+a*d*m+u*l*v-a*h*v,w=u*p*c-x*f*c+x*o*m-a*p*m-u*o*v+a*f*v,T=x*f*l-u*p*l-x*o*h+a*p*h+u*o*d-a*f*d,L=t*S+i*E+r*w+s*T;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/L;return e[0]=S*B,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*v-i*h*v)*B,e[2]=(o*d*s-p*l*s+p*r*c-i*d*c-o*r*v+i*l*v)*B,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*B,e[4]=E*B,e[5]=(u*d*s-x*h*s+x*r*m-t*d*m-u*r*v+t*h*v)*B,e[6]=(x*l*s-a*d*s-x*r*c+t*d*c+a*r*v-t*l*v)*B,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*B,e[8]=w*B,e[9]=(x*f*s-u*p*s-x*i*m+t*p*m+u*i*v-t*f*v)*B,e[10]=(a*p*s-x*o*s+x*i*c-t*p*c-a*i*v+t*o*v)*B,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*B,e[12]=T*B,e[13]=(u*p*r-x*f*r+x*i*h-t*p*h-u*i*d+t*f*d)*B,e[14]=(x*o*r-a*p*r-x*i*l+t*p*l+a*i*d-t*o*d)*B,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,x=s*f,p=a*u,d=a*f,v=o*f,S=l*c,E=l*u,w=l*f,T=i.x,L=i.y,B=i.z;return r[0]=(1-(p+v))*T,r[1]=(m+w)*T,r[2]=(x-E)*T,r[3]=0,r[4]=(m-w)*L,r[5]=(1-(h+v))*L,r[6]=(d+S)*L,r[7]=0,r[8]=(x+E)*B,r[9]=(d-S)*B,r[10]=(1-(h+p))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=pi.set(r[0],r[1],r[2]).length();const a=pi.set(r[4],r[5],r[6]).length(),o=pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ot.copy(this);const c=1/s,u=1/a,f=1/o;return Ot.elements[0]*=c,Ot.elements[1]*=c,Ot.elements[2]*=c,Ot.elements[4]*=u,Ot.elements[5]*=u,Ot.elements[6]*=u,Ot.elements[8]*=f,Ot.elements[9]*=f,Ot.elements[10]*=f,t.setFromRotationMatrix(Ot),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const pi=new U,Ot=new st,Kd=new U(0,0,0),Jd=new U(1,1,1),wn=new U,Er=new U,St=new U,fl=new st,hl=new lr;class ur{constructor(e=0,t=0,i=0,r=ur.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hl.setFromEuler(this),this.setFromQuaternion(hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ur.DefaultOrder="XYZ";ur.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qd=0;const dl=new U,mi=new lr,on=new st,Ar=new U,Yi=new U,ep=new U,tp=new lr,pl=new U(1,0,0),ml=new U(0,1,0),gl=new U(0,0,1),np={type:"added"},_l={type:"removed"};class Mt extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DefaultUp.clone();const e=new U,t=new ur,i=new lr,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new Pt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Mt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Mt.DefaultMatrixWorldAutoUpdate,this.layers=new Yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return dl.copy(e).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ar.copy(e):Ar.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Yi,Ar,this.up):on.lookAt(Ar,Yi,this.up),this.quaternion.setFromRotationMatrix(on),r&&(on.extractRotation(r.matrixWorld),mi.setFromRotationMatrix(on),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(np)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_l)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(_l)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,ep),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,tp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mt.DefaultUp=new U(0,1,0);Mt.DefaultMatrixAutoUpdate=!0;Mt.DefaultMatrixWorldAutoUpdate=!0;const zt=new U,an=new U,Bs=new U,ln=new U,gi=new U,_i=new U,xl=new U,Gs=new U,Vs=new U,Hs=new U;class fn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),zt.subVectors(e,t),r.cross(zt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){zt.subVectors(r,t),an.subVectors(i,t),Bs.subVectors(e,t);const a=zt.dot(zt),o=zt.dot(an),l=zt.dot(Bs),c=an.dot(an),u=an.dot(Bs),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,x=(a*u-o*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ln),ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ln),l.set(0,0),l.addScaledVector(s,ln.x),l.addScaledVector(a,ln.y),l.addScaledVector(o,ln.z),l}static isFrontFacing(e,t,i,r){return zt.subVectors(i,t),an.subVectors(e,t),zt.cross(an).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),zt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return fn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;gi.subVectors(r,i),_i.subVectors(s,i),Gs.subVectors(e,i);const l=gi.dot(Gs),c=_i.dot(Gs);if(l<=0&&c<=0)return t.copy(i);Vs.subVectors(e,r);const u=gi.dot(Vs),f=_i.dot(Vs);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(gi,a);Hs.subVectors(e,s);const m=gi.dot(Hs),x=_i.dot(Hs);if(x>=0&&m<=x)return t.copy(s);const p=m*c-l*x;if(p<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(_i,o);const d=u*x-m*f;if(d<=0&&f-u>=0&&m-x>=0)return xl.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(xl,o);const v=1/(d+p+h);return a=p*v,o=h*v,t.copy(i).addScaledVector(gi,a).addScaledVector(_i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ip=0;class fr extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=Di,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Oc,this.blendDst=zc,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ko extends fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const et=new U,Cr=new je;class tn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=sl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class $c extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zc extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wt extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let rp=0;const Rt=new st,ks=new Mt,xi=new U,wt=new cr,$i=new cr,rt=new U;class _n extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hc(e)?Zc:$c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Pt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,i){return Rt.makeTranslation(e,t,i),this.applyMatrix4(Rt),this}scale(e,t,i){return Rt.makeScale(e,t,i),this.applyMatrix4(Rt),this}lookAt(e){return ks.lookAt(e),ks.updateMatrix(),this.applyMatrix4(ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];wt.setFromBufferAttribute(s),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(rt.addVectors(wt.min,$i.min),wt.expandByPoint(rt),rt.addVectors(wt.max,$i.max),wt.expandByPoint(rt)):(wt.expandByPoint($i.min),wt.expandByPoint($i.max))}wt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)rt.fromBufferAttribute(o,c),l&&(xi.fromBufferAttribute(e,c),rt.add(xi)),r=Math.max(r,i.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<o;P++)c[P]=new U,u[P]=new U;const f=new U,h=new U,m=new U,x=new je,p=new je,d=new je,v=new U,S=new U;function E(P,ee,he){f.fromArray(r,P*3),h.fromArray(r,ee*3),m.fromArray(r,he*3),x.fromArray(a,P*2),p.fromArray(a,ee*2),d.fromArray(a,he*2),h.sub(f),m.sub(f),p.sub(x),d.sub(x);const W=1/(p.x*d.y-d.x*p.y);!isFinite(W)||(v.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(W),S.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(W),c[P].add(v),c[ee].add(v),c[he].add(v),u[P].add(S),u[ee].add(S),u[he].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let P=0,ee=w.length;P<ee;++P){const he=w[P],W=he.start,O=he.count;for(let Q=W,te=W+O;Q<te;Q+=3)E(i[Q+0],i[Q+1],i[Q+2])}const T=new U,L=new U,B=new U,M=new U;function A(P){B.fromArray(s,P*3),M.copy(B);const ee=c[P];T.copy(ee),T.sub(B.multiplyScalar(B.dot(ee))).normalize(),L.crossVectors(M,ee);const W=L.dot(u[P])<0?-1:1;l[P*4]=T.x,l[P*4+1]=T.y,l[P*4+2]=T.z,l[P*4+3]=W}for(let P=0,ee=w.length;P<ee;++P){const he=w[P],W=he.start,O=he.count;for(let Q=W,te=W+O;Q<te;Q+=3)A(i[Q+0]),A(i[Q+1]),A(i[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,x=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let v=0;v<u;v++)h[x++]=c[m++]}return new tn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const vl=new st,vi=new jc,Ws=new cs,Tn=new U,En=new U,An=new U,qs=new U,Xs=new U,js=new U,Lr=new U,Rr=new U,Dr=new U,Pr=new je,Ir=new je,Fr=new je,Ys=new U,Nr=new U;class hn extends Mt{constructor(e=new _n,t=new Ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(s),e.ray.intersectsSphere(Ws)===!1)||(vl.copy(s).invert(),vi.copy(e.ray).applyMatrix4(vl),i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,m=i.groups,x=i.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const v=m[p],S=r[v.materialIndex],E=Math.max(v.start,x.start),w=Math.min(o.count,Math.min(v.start+v.count,x.start+x.count));for(let T=E,L=w;T<L;T+=3){const B=o.getX(T),M=o.getX(T+1),A=o.getX(T+2);a=Ur(this,S,e,vi,l,c,u,f,h,B,M,A),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const p=Math.max(0,x.start),d=Math.min(o.count,x.start+x.count);for(let v=p,S=d;v<S;v+=3){const E=o.getX(v),w=o.getX(v+1),T=o.getX(v+2);a=Ur(this,r,e,vi,l,c,u,f,h,E,w,T),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const v=m[p],S=r[v.materialIndex],E=Math.max(v.start,x.start),w=Math.min(l.count,Math.min(v.start+v.count,x.start+x.count));for(let T=E,L=w;T<L;T+=3){const B=T,M=T+1,A=T+2;a=Ur(this,S,e,vi,l,c,u,f,h,B,M,A),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const p=Math.max(0,x.start),d=Math.min(l.count,x.start+x.count);for(let v=p,S=d;v<S;v+=3){const E=v,w=v+1,T=v+2;a=Ur(this,r,e,vi,l,c,u,f,h,E,w,T),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function sp(n,e,t,i,r,s,a,o){let l;if(e.side===Ft?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side!==Ln,o),l===null)return null;Nr.copy(o),Nr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Nr);return c<t.near||c>t.far?null:{distance:c,point:Nr.clone(),object:n}}function Ur(n,e,t,i,r,s,a,o,l,c,u,f){Tn.fromBufferAttribute(r,c),En.fromBufferAttribute(r,u),An.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){Lr.set(0,0,0),Rr.set(0,0,0),Dr.set(0,0,0);for(let x=0,p=s.length;x<p;x++){const d=h[x],v=s[x];d!==0&&(qs.fromBufferAttribute(v,c),Xs.fromBufferAttribute(v,u),js.fromBufferAttribute(v,f),a?(Lr.addScaledVector(qs,d),Rr.addScaledVector(Xs,d),Dr.addScaledVector(js,d)):(Lr.addScaledVector(qs.sub(Tn),d),Rr.addScaledVector(Xs.sub(En),d),Dr.addScaledVector(js.sub(An),d)))}Tn.add(Lr),En.add(Rr),An.add(Dr)}n.isSkinnedMesh&&(n.boneTransform(c,Tn),n.boneTransform(u,En),n.boneTransform(f,An));const m=sp(n,e,t,i,Tn,En,An,Ys);if(m){o&&(Pr.fromBufferAttribute(o,c),Ir.fromBufferAttribute(o,u),Fr.fromBufferAttribute(o,f),m.uv=fn.getUV(Ys,Tn,En,An,Pr,Ir,Fr,new je)),l&&(Pr.fromBufferAttribute(l,c),Ir.fromBufferAttribute(l,u),Fr.fromBufferAttribute(l,f),m.uv2=fn.getUV(Ys,Tn,En,An,Pr,Ir,Fr,new je));const x={a:c,b:u,c:f,normal:new U,materialIndex:0};fn.getNormal(Tn,En,An,x.normal),m.face=x}return m}class Wi extends _n{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(f,2));function x(p,d,v,S,E,w,T,L,B,M,A){const P=w/B,ee=T/M,he=w/2,W=T/2,O=L/2,Q=B+1,te=M+1;let K=0,V=0;const F=new U;for(let k=0;k<te;k++){const ce=k*ee-W;for(let ae=0;ae<Q;ae++){const se=ae*P-he;F[p]=se*S,F[d]=ce*E,F[v]=O,c.push(F.x,F.y,F.z),F[p]=0,F[d]=0,F[v]=L>0?1:-1,u.push(F.x,F.y,F.z),f.push(ae/B),f.push(1-k/M),K+=1}}for(let k=0;k<M;k++)for(let ce=0;ce<B;ce++){const ae=h+ce+Q*k,se=h+ce+Q*(k+1),Me=h+(ce+1)+Q*(k+1),Ee=h+(ce+1)+Q*k;l.push(ae,se,Ee),l.push(se,Me,Ee),V+=6}o.addGroup(m,V,A),m+=V,h+=K}}static fromJSON(e){return new Wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ct(n){const e={};for(let t=0;t<n.length;t++){const i=Bi(n[t]);for(const r in i)e[r]=i[r]}return e}function op(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const ap={clone:Bi,merge:ct};var lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lp,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=op(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Kc extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends Kc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=al*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return al*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(As*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mi=90,bi=1;class up extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Bt(Mi,bi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new U(1,0,0)),this.add(r);const s=new Bt(Mi,bi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new U(-1,0,0)),this.add(s);const a=new Bt(Mi,bi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new U(0,1,0)),this.add(a);const o=new Bt(Mi,bi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new U(0,-1,0)),this.add(o);const l=new Bt(Mi,bi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new U(0,0,1)),this.add(l);const c=new Bt(Mi,bi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new U(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=pn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Jc extends qt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fp extends si{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wi(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:Bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:Pn});s.uniforms.tEquirect.value=t;const a=new hn(r,s),o=t.minFilter;return t.minFilter===ls&&(t.minFilter=Dt),new up(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const $s=new U,hp=new U,dp=new Pt;class kn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=$s.subVectors(i,t).cross(hp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta($s),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||dp.getNormalMatrix(e),r=this.coplanarPoint($s).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new cs,Or=new U;class Qc{constructor(e=new kn,t=new kn,i=new kn,r=new kn,s=new kn,a=new kn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],x=i[10],p=i[11],d=i[12],v=i[13],S=i[14],E=i[15];return t[0].setComponents(o-r,f-l,p-h,E-d).normalize(),t[1].setComponents(o+r,f+l,p+h,E+d).normalize(),t[2].setComponents(o+s,f+c,p+m,E+v).normalize(),t[3].setComponents(o-s,f-c,p-m,E-v).normalize(),t[4].setComponents(o-a,f-u,p-x,E-S).normalize(),t[5].setComponents(o+a,f+u,p+x,E+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Or.x=r.normal.x>0?e.max.x:e.min.x,Or.y=r.normal.y>0?e.max.y:e.min.y,Or.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function pp(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Jo extends _n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],x=[],p=[],d=[];for(let v=0;v<u;v++){const S=v*h-a;for(let E=0;E<c;E++){const w=E*f-s;x.push(w,-S,0),p.push(0,0,1),d.push(E/o),d.push(1-v/l)}}for(let v=0;v<l;v++)for(let S=0;S<o;S++){const E=S+c*v,w=S+c*(v+1),T=S+1+c*(v+1),L=S+1+c*v;m.push(E,w,L),m.push(w,T,L)}this.setIndex(m),this.setAttribute("position",new Wt(x,3)),this.setAttribute("normal",new Wt(p,3)),this.setAttribute("uv",new Wt(d,2))}static fromJSON(e){return new Jo(e.width,e.height,e.widthSegments,e.heightSegments)}}var mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bp="vec3 transformed = vec3( position );",yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,wp=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Tp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fp=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Np=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Up=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
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
}`,Qp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,rm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,om=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,cm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,um=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,pm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_m=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Em=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Lm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Im=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ym=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,$m=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Km=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qm=`#ifdef USE_SKINNING
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
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ig=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,sg=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,og=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ag=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,lg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,cg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ug=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,fg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_g=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,xg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Mg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Cg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Rg=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ig=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ug=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,zg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,kg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:mp,alphamap_pars_fragment:gp,alphatest_fragment:_p,alphatest_pars_fragment:xp,aomap_fragment:vp,aomap_pars_fragment:Mp,begin_vertex:bp,beginnormal_vertex:yp,bsdfs:Sp,iridescence_fragment:wp,bumpmap_pars_fragment:Tp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:Ap,clipping_planes_pars_vertex:Cp,clipping_planes_vertex:Lp,color_fragment:Rp,color_pars_fragment:Dp,color_pars_vertex:Pp,color_vertex:Ip,common:Fp,cube_uv_reflection_fragment:Np,defaultnormal_vertex:Up,displacementmap_pars_vertex:Op,displacementmap_vertex:zp,emissivemap_fragment:Bp,emissivemap_pars_fragment:Gp,encodings_fragment:Vp,encodings_pars_fragment:Hp,envmap_fragment:kp,envmap_common_pars_fragment:Wp,envmap_pars_fragment:qp,envmap_pars_vertex:Xp,envmap_physical_pars_fragment:rm,envmap_vertex:jp,fog_vertex:Yp,fog_pars_vertex:$p,fog_fragment:Zp,fog_pars_fragment:Kp,gradientmap_pars_fragment:Jp,lightmap_fragment:Qp,lightmap_pars_fragment:em,lights_lambert_fragment:tm,lights_lambert_pars_fragment:nm,lights_pars_begin:im,lights_toon_fragment:sm,lights_toon_pars_fragment:om,lights_phong_fragment:am,lights_phong_pars_fragment:lm,lights_physical_fragment:cm,lights_physical_pars_fragment:um,lights_fragment_begin:fm,lights_fragment_maps:hm,lights_fragment_end:dm,logdepthbuf_fragment:pm,logdepthbuf_pars_fragment:mm,logdepthbuf_pars_vertex:gm,logdepthbuf_vertex:_m,map_fragment:xm,map_pars_fragment:vm,map_particle_fragment:Mm,map_particle_pars_fragment:bm,metalnessmap_fragment:ym,metalnessmap_pars_fragment:Sm,morphcolor_vertex:wm,morphnormal_vertex:Tm,morphtarget_pars_vertex:Em,morphtarget_vertex:Am,normal_fragment_begin:Cm,normal_fragment_maps:Lm,normal_pars_fragment:Rm,normal_pars_vertex:Dm,normal_vertex:Pm,normalmap_pars_fragment:Im,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:Nm,clearcoat_pars_fragment:Um,iridescence_pars_fragment:Om,output_fragment:zm,packing:Bm,premultiplied_alpha_fragment:Gm,project_vertex:Vm,dithering_fragment:Hm,dithering_pars_fragment:km,roughnessmap_fragment:Wm,roughnessmap_pars_fragment:qm,shadowmap_pars_fragment:Xm,shadowmap_pars_vertex:jm,shadowmap_vertex:Ym,shadowmask_pars_fragment:$m,skinbase_vertex:Zm,skinning_pars_vertex:Km,skinning_vertex:Jm,skinnormal_vertex:Qm,specularmap_fragment:eg,specularmap_pars_fragment:tg,tonemapping_fragment:ng,tonemapping_pars_fragment:ig,transmission_fragment:rg,transmission_pars_fragment:sg,uv_pars_fragment:og,uv_pars_vertex:ag,uv_vertex:lg,uv2_pars_fragment:cg,uv2_pars_vertex:ug,uv2_vertex:fg,worldpos_vertex:hg,background_vert:dg,background_frag:pg,cube_vert:mg,cube_frag:gg,depth_vert:_g,depth_frag:xg,distanceRGBA_vert:vg,distanceRGBA_frag:Mg,equirect_vert:bg,equirect_frag:yg,linedashed_vert:Sg,linedashed_frag:wg,meshbasic_vert:Tg,meshbasic_frag:Eg,meshlambert_vert:Ag,meshlambert_frag:Cg,meshmatcap_vert:Lg,meshmatcap_frag:Rg,meshnormal_vert:Dg,meshnormal_frag:Pg,meshphong_vert:Ig,meshphong_frag:Fg,meshphysical_vert:Ng,meshphysical_frag:Ug,meshtoon_vert:Og,meshtoon_frag:zg,points_vert:Bg,points_frag:Gg,shadow_vert:Vg,shadow_frag:Hg,sprite_vert:kg,sprite_frag:Wg},fe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pt},uv2Transform:{value:new Pt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pt}}},Kt={basic:{uniforms:ct([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:ct([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:ct([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:ct([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:ct([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:ct([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:ct([fe.points,fe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:ct([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:ct([fe.common,fe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:ct([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:ct([fe.sprite,fe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},cube:{uniforms:ct([fe.envmap,{opacity:{value:1}}]),vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:ct([fe.common,fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:ct([fe.lights,fe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Kt.physical={uniforms:ct([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new je(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};function qg(n,e,t,i,r,s){const a=new Xe(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function m(p,d){let v=!1,S=d.isScene===!0?d.background:null;S&&S.isTexture&&(S=e.get(S));const E=n.xr,w=E.getSession&&E.getSession();w&&w.environmentBlendMode==="additive"&&(S=null),S===null?x(a,o):S&&S.isColor&&(x(S,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===as)?(c===void 0&&(c=new hn(new Wi(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Bi(Kt.cube.uniforms),vertexShader:Kt.cube.vertexShader,fragmentShader:Kt.cube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(u!==S||f!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new hn(new Jo(2,2),new oi({name:"BackgroundMaterial",uniforms:Bi(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),o=d,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,x(a,o)},render:m}}function Xg(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(O,Q,te,K,V){let F=!1;if(a){const k=p(K,te,Q);c!==k&&(c=k,m(c.object)),F=v(O,K,te,V),F&&S(O,K,te,V)}else{const k=Q.wireframe===!0;(c.geometry!==K.id||c.program!==te.id||c.wireframe!==k)&&(c.geometry=K.id,c.program=te.id,c.wireframe=k,F=!0)}V!==null&&t.update(V,34963),(F||u)&&(u=!1,M(O,Q,te,K),V!==null&&n.bindBuffer(34963,t.get(V).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(O){return i.isWebGL2?n.bindVertexArray(O):s.bindVertexArrayOES(O)}function x(O){return i.isWebGL2?n.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function p(O,Q,te){const K=te.wireframe===!0;let V=o[O.id];V===void 0&&(V={},o[O.id]=V);let F=V[Q.id];F===void 0&&(F={},V[Q.id]=F);let k=F[K];return k===void 0&&(k=d(h()),F[K]=k),k}function d(O){const Q=[],te=[],K=[];for(let V=0;V<r;V++)Q[V]=0,te[V]=0,K[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:te,attributeDivisors:K,object:O,attributes:{},index:null}}function v(O,Q,te,K){const V=c.attributes,F=Q.attributes;let k=0;const ce=te.getAttributes();for(const ae in ce)if(ce[ae].location>=0){const Me=V[ae];let Ee=F[ae];if(Ee===void 0&&(ae==="instanceMatrix"&&O.instanceMatrix&&(Ee=O.instanceMatrix),ae==="instanceColor"&&O.instanceColor&&(Ee=O.instanceColor)),Me===void 0||Me.attribute!==Ee||Ee&&Me.data!==Ee.data)return!0;k++}return c.attributesNum!==k||c.index!==K}function S(O,Q,te,K){const V={},F=Q.attributes;let k=0;const ce=te.getAttributes();for(const ae in ce)if(ce[ae].location>=0){let Me=F[ae];Me===void 0&&(ae==="instanceMatrix"&&O.instanceMatrix&&(Me=O.instanceMatrix),ae==="instanceColor"&&O.instanceColor&&(Me=O.instanceColor));const Ee={};Ee.attribute=Me,Me&&Me.data&&(Ee.data=Me.data),V[ae]=Ee,k++}c.attributes=V,c.attributesNum=k,c.index=K}function E(){const O=c.newAttributes;for(let Q=0,te=O.length;Q<te;Q++)O[Q]=0}function w(O){T(O,0)}function T(O,Q){const te=c.newAttributes,K=c.enabledAttributes,V=c.attributeDivisors;te[O]=1,K[O]===0&&(n.enableVertexAttribArray(O),K[O]=1),V[O]!==Q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,Q),V[O]=Q)}function L(){const O=c.newAttributes,Q=c.enabledAttributes;for(let te=0,K=Q.length;te<K;te++)Q[te]!==O[te]&&(n.disableVertexAttribArray(te),Q[te]=0)}function B(O,Q,te,K,V,F){i.isWebGL2===!0&&(te===5124||te===5125)?n.vertexAttribIPointer(O,Q,te,V,F):n.vertexAttribPointer(O,Q,te,K,V,F)}function M(O,Q,te,K){if(i.isWebGL2===!1&&(O.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const V=K.attributes,F=te.getAttributes(),k=Q.defaultAttributeValues;for(const ce in F){const ae=F[ce];if(ae.location>=0){let se=V[ce];if(se===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),se!==void 0){const Me=se.normalized,Ee=se.itemSize,J=t.get(se);if(J===void 0)continue;const De=J.buffer,Se=J.type,we=J.bytesPerElement;if(se.isInterleavedBufferAttribute){const _e=se.data,Ve=_e.stride,Le=se.offset;if(_e.isInstancedInterleavedBuffer){for(let y=0;y<ae.locationSize;y++)T(ae.location+y,_e.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let y=0;y<ae.locationSize;y++)w(ae.location+y);n.bindBuffer(34962,De);for(let y=0;y<ae.locationSize;y++)B(ae.location+y,Ee/ae.locationSize,Se,Me,Ve*we,(Le+Ee/ae.locationSize*y)*we)}else{if(se.isInstancedBufferAttribute){for(let _e=0;_e<ae.locationSize;_e++)T(ae.location+_e,se.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let _e=0;_e<ae.locationSize;_e++)w(ae.location+_e);n.bindBuffer(34962,De);for(let _e=0;_e<ae.locationSize;_e++)B(ae.location+_e,Ee/ae.locationSize,Se,Me,Ee*we,Ee/ae.locationSize*_e*we)}}else if(k!==void 0){const Me=k[ce];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(ae.location,Me);break;case 3:n.vertexAttrib3fv(ae.location,Me);break;case 4:n.vertexAttrib4fv(ae.location,Me);break;default:n.vertexAttrib1fv(ae.location,Me)}}}}L()}function A(){he();for(const O in o){const Q=o[O];for(const te in Q){const K=Q[te];for(const V in K)x(K[V].object),delete K[V];delete Q[te]}delete o[O]}}function P(O){if(o[O.id]===void 0)return;const Q=o[O.id];for(const te in Q){const K=Q[te];for(const V in K)x(K[V].object),delete K[V];delete Q[te]}delete o[O.id]}function ee(O){for(const Q in o){const te=o[Q];if(te[O.id]===void 0)continue;const K=te[O.id];for(const V in K)x(K[V].object),delete K[V];delete te[O.id]}}function he(){W(),u=!0,c!==l&&(c=l,m(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:he,resetDefaultState:W,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:ee,initAttributes:E,enableAttribute:w,disableUnusedAttributes:L}}function jg(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Yg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(B){if(B==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),v=n.getParameter(36348),S=n.getParameter(36349),E=h>0,w=a||e.has("OES_texture_float"),T=E&&w,L=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:E,floatFragmentTextures:w,floatVertexTextures:T,maxSamples:L}}function $g(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new kn,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const x=f.length!==0||h||i!==0||r;return r=h,t=u(f,m,0),i=f.length,x},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const x=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,v=n.get(f);if(!r||x===null||x.length===0||s&&!d)s?u(null):c();else{const S=s?0:i,E=S*4;let w=v.clippingState||null;l.value=w,w=u(x,h,E,m);for(let T=0;T!==E;++T)w[T]=t[T];v.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,x){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,x!==!0||d===null){const v=m+p*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(d===null||d.length<v)&&(d=new Float32Array(v));for(let E=0,w=m;E!==p;++E,w+=4)a.copy(f[E]).applyMatrix4(S,o),a.normal.toArray(d,w),d[w+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Zg(n){let e=new WeakMap;function t(a,o){return o===xo?a.mapping=Ui:o===vo&&(a.mapping=Oi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===xo||o===vo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new fp(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class tu extends Kc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ei=4,Ml=[.125,.215,.35,.446,.526,.582],Yn=20,Zs=new tu,bl=new Xe;let Ks=null;const Wn=(1+Math.sqrt(5))/2,Si=1/Wn,yl=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Wn,Si),new U(0,Wn,-Si),new U(Si,0,Wn),new U(-Si,0,Wn),new U(Wn,Si,0),new U(-Wn,Si,0)];class Sl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ks=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ks),e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ks=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:or,format:en,encoding:ri,depthBuffer:!1},r=wl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kg(s)),this._blurMaterial=Jg(s,e,t)}return r}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,i,r){const o=new Bt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(bl),u.toneMapping=pn,u.autoClear=!1;const m=new Ko({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),x=new hn(new Wi,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(bl),p=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):S===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const E=this._cubeSize;zr(r,S*E,v>2?E:0,E,E),u.setRenderTarget(r),p&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ui||e.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new hn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;zr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Zs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yl[(r-1)%yl.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new hn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Yn-1),p=s/x,d=isFinite(s)?1+Math.floor(u*p):Yn;d>Yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Yn}`);const v=[];let S=0;for(let B=0;B<Yn;++B){const M=B/p,A=Math.exp(-M*M/2);v.push(A),B===0?S+=A:B<d&&(S+=2*A)}for(let B=0;B<v.length;B++)v[B]=v[B]/S;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=v,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=x,h.mipInt.value=E-i;const w=this._sizeLods[r],T=3*w*(r>E-Ei?r-E+Ei:0),L=4*(this._cubeSize-w);zr(t,T,L,3*w,2*w),l.setRenderTarget(t),l.render(f,Zs)}}function Kg(n){const e=[],t=[],i=[];let r=n;const s=n-Ei+1+Ml.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ei?l=Ml[a-n+Ei-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,p=3,d=2,v=1,S=new Float32Array(p*x*m),E=new Float32Array(d*x*m),w=new Float32Array(v*x*m);for(let L=0;L<m;L++){const B=L%3*2/3-1,M=L>2?0:-1,A=[B,M,0,B+2/3,M,0,B+2/3,M+1,0,B,M,0,B+2/3,M+1,0,B,M+1,0];S.set(A,p*x*L),E.set(h,d*x*L);const P=[L,L,L,L,L,L];w.set(P,v*x*L)}const T=new _n;T.setAttribute("position",new tn(S,p)),T.setAttribute("uv",new tn(E,d)),T.setAttribute("faceIndex",new tn(w,v)),e.push(T),r>Ei&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function wl(n,e,t){const i=new si(n,e,t);return i.texture.mapping=as,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Jg(n,e,t){const i=new Float32Array(Yn),r=new U(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Tl(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function El(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}function Qg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===xo||l===vo,u=l===Ui||l===Oi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Sl(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Sl(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function e_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function t_(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],34962);const m=f.morphAttributes;for(const x in m){const p=m[x];for(let d=0,v=p.length;d<v;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,x=f.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let E=0,w=S.length;E<w;E+=3){const T=S[E+0],L=S[E+1],B=S[E+2];h.push(T,L,L,B,B,T)}}else{const S=x.array;p=x.version;for(let E=0,w=S.length/3-1;E<w;E+=3){const T=E+0,L=E+1,B=E+2;h.push(T,L,L,B,B,T)}}const d=new(Hc(h)?Zc:$c)(h,1);d.version=p;const v=s.get(f);v&&e.remove(v),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function n_(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,x){if(x===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,x),t.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function i_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function r_(n,e){return n[0]-e[0]}function s_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function o_(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new at,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let v=s.get(u);if(v===void 0||v.count!==d){let te=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",te)};var x=te;v!==void 0&&v.texture.dispose();const w=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,B=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let P=0;w===!0&&(P=1),T===!0&&(P=2),L===!0&&(P=3);let ee=u.attributes.position.count*P,he=1;ee>e.maxTextureSize&&(he=Math.ceil(ee/e.maxTextureSize),ee=e.maxTextureSize);const W=new Float32Array(ee*he*4*d),O=new Xc(W,ee,he,d);O.type=Zn,O.needsUpdate=!0;const Q=P*4;for(let K=0;K<d;K++){const V=B[K],F=M[K],k=A[K],ce=ee*he*4*K;for(let ae=0;ae<V.count;ae++){const se=ae*Q;w===!0&&(a.fromBufferAttribute(V,ae),W[ce+se+0]=a.x,W[ce+se+1]=a.y,W[ce+se+2]=a.z,W[ce+se+3]=0),T===!0&&(a.fromBufferAttribute(F,ae),W[ce+se+4]=a.x,W[ce+se+5]=a.y,W[ce+se+6]=a.z,W[ce+se+7]=0),L===!0&&(a.fromBufferAttribute(k,ae),W[ce+se+8]=a.x,W[ce+se+9]=a.y,W[ce+se+10]=a.z,W[ce+se+11]=k.itemSize===4?a.w:1)}}v={count:d,texture:O,size:new je(ee,he)},s.set(u,v),u.addEventListener("dispose",te)}let S=0;for(let w=0;w<m.length;w++)S+=m[w];const E=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const p=m===void 0?0:m.length;let d=i[u.id];if(d===void 0||d.length!==p){d=[];for(let T=0;T<p;T++)d[T]=[T,0];i[u.id]=d}for(let T=0;T<p;T++){const L=d[T];L[0]=T,L[1]=m[T]}d.sort(s_);for(let T=0;T<8;T++)T<p&&d[T][1]?(o[T][0]=d[T][0],o[T][1]=d[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(r_);const v=u.morphAttributes.position,S=u.morphAttributes.normal;let E=0;for(let T=0;T<8;T++){const L=o[T],B=L[0],M=L[1];B!==Number.MAX_SAFE_INTEGER&&M?(v&&u.getAttribute("morphTarget"+T)!==v[B]&&u.setAttribute("morphTarget"+T,v[B]),S&&u.getAttribute("morphNormal"+T)!==S[B]&&u.setAttribute("morphNormal"+T,S[B]),r[T]=M,E+=M):(v&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),S&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const w=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function a_(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const nu=new qt,iu=new Xc,ru=new $d,su=new Jc,Al=[],Cl=[],Ll=new Float32Array(16),Rl=new Float32Array(9),Dl=new Float32Array(4);function qi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Al[r];if(s===void 0&&(s=new Float32Array(r),Al[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function us(n,e){let t=Cl[e];t===void 0&&(t=new Int32Array(e),Cl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function l_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function c_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function h_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Dl.set(i),n.uniformMatrix2fv(this.addr,!1,Dl),_t(t,i)}}function d_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Rl.set(i),n.uniformMatrix3fv(this.addr,!1,Rl),_t(t,i)}}function p_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Ll.set(i),n.uniformMatrix4fv(this.addr,!1,Ll),_t(t,i)}}function m_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function g_(n,e){const t=this.cache;gt(t,e)||(n.uniform2iv(this.addr,e),_t(t,e))}function __(n,e){const t=this.cache;gt(t,e)||(n.uniform3iv(this.addr,e),_t(t,e))}function x_(n,e){const t=this.cache;gt(t,e)||(n.uniform4iv(this.addr,e),_t(t,e))}function v_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function M_(n,e){const t=this.cache;gt(t,e)||(n.uniform2uiv(this.addr,e),_t(t,e))}function b_(n,e){const t=this.cache;gt(t,e)||(n.uniform3uiv(this.addr,e),_t(t,e))}function y_(n,e){const t=this.cache;gt(t,e)||(n.uniform4uiv(this.addr,e),_t(t,e))}function S_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||nu,r)}function w_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ru,r)}function T_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||su,r)}function E_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||iu,r)}function A_(n){switch(n){case 5126:return l_;case 35664:return c_;case 35665:return u_;case 35666:return f_;case 35674:return h_;case 35675:return d_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return x_;case 5125:return v_;case 36294:return M_;case 36295:return b_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return E_}}function C_(n,e){n.uniform1fv(this.addr,e)}function L_(n,e){const t=qi(e,this.size,2);n.uniform2fv(this.addr,t)}function R_(n,e){const t=qi(e,this.size,3);n.uniform3fv(this.addr,t)}function D_(n,e){const t=qi(e,this.size,4);n.uniform4fv(this.addr,t)}function P_(n,e){const t=qi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function I_(n,e){const t=qi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function F_(n,e){const t=qi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function N_(n,e){n.uniform1iv(this.addr,e)}function U_(n,e){n.uniform2iv(this.addr,e)}function O_(n,e){n.uniform3iv(this.addr,e)}function z_(n,e){n.uniform4iv(this.addr,e)}function B_(n,e){n.uniform1uiv(this.addr,e)}function G_(n,e){n.uniform2uiv(this.addr,e)}function V_(n,e){n.uniform3uiv(this.addr,e)}function H_(n,e){n.uniform4uiv(this.addr,e)}function k_(n,e,t){const i=e.length,r=us(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||nu,r[s])}function W_(n,e,t){const i=e.length,r=us(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||ru,r[s])}function q_(n,e,t){const i=e.length,r=us(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||su,r[s])}function X_(n,e,t){const i=e.length,r=us(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||iu,r[s])}function j_(n){switch(n){case 5126:return C_;case 35664:return L_;case 35665:return R_;case 35666:return D_;case 35674:return P_;case 35675:return I_;case 35676:return F_;case 5124:case 35670:return N_;case 35667:case 35671:return U_;case 35668:case 35672:return O_;case 35669:case 35673:return z_;case 5125:return B_;case 36294:return G_;case 36295:return V_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return X_}}class Y_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=A_(t.type)}}class $_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=j_(t.type)}}class Z_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Js=/(\w+)(\])?(\[|\.)?/g;function Pl(n,e){n.seq.push(e),n.map[e.id]=e}function K_(n,e,t){const i=n.name,r=i.length;for(Js.lastIndex=0;;){const s=Js.exec(i),a=Js.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Pl(t,c===void 0?new Y_(o,n,e):new $_(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Z_(o),Pl(t,f)),t=f}}}class qr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);K_(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Il(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let J_=0;function Q_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function ex(n){switch(n){case ri:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Fl(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Q_(n.getShaderSource(e),a)}else return r}function tx(n,e){const t=ex(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function nx(n,e){let t;switch(e){case bd:t="Linear";break;case yd:t="Reinhard";break;case Sd:t="OptimizedCineon";break;case wd:t="ACESFilmic";break;case Td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ix(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ji).join(`
`)}function rx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sx(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ji(n){return n!==""}function Nl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ul(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(n){return n.replace(ox,ax)}function ax(n,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return wo(t)}const lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(n){return n.replace(lx,cx)}function cx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zl(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ux(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function fx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ui:case Oi:e="ENVMAP_TYPE_CUBE";break;case as:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function dx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bc:e="ENVMAP_BLENDING_MULTIPLY";break;case vd:e="ENVMAP_BLENDING_MIX";break;case Md:e="ENVMAP_BLENDING_ADD";break}return e}function px(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function mx(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ux(t),c=fx(t),u=hx(t),f=dx(t),h=px(t),m=t.isWebGL2?"":ix(t),x=rx(s),p=r.createProgram();let d,v,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[x].filter(Ji).join(`
`),d.length>0&&(d+=`
`),v=[m,x].filter(Ji).join(`
`),v.length>0&&(v+=`
`)):(d=[zl(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),v=[m,zl(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==pn?nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,tx("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ji).join(`
`)),a=wo(a),a=Nl(a,t),a=Ul(a,t),o=wo(o),o=Nl(o,t),o=Ul(o,t),a=Ol(a),o=Ol(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const E=S+d+a,w=S+v+o,T=Il(r,35633,E),L=Il(r,35632,w);if(r.attachShader(p,T),r.attachShader(p,L),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const A=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(T).trim(),ee=r.getShaderInfoLog(L).trim();let he=!0,W=!0;if(r.getProgramParameter(p,35714)===!1){he=!1;const O=Fl(r,T,"vertex"),Q=Fl(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+O+`
`+Q)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(P===""||ee==="")&&(W=!1);W&&(this.diagnostics={runnable:he,programLog:A,vertexShader:{log:P,prefix:d},fragmentShader:{log:ee,prefix:v}})}r.deleteShader(T),r.deleteShader(L);let B;this.getUniforms=function(){return B===void 0&&(B=new qr(r,p)),B};let M;return this.getAttributes=function(){return M===void 0&&(M=sx(r,p)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=J_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=L,this}let gx=0;class _x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xx(e),t.set(e,i)),i}}class xx{constructor(e){this.id=gx++,this.code=e,this.usedTimes=0}}function vx(n,e,t,i,r,s,a){const o=new Yc,l=new _x,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,A,P,ee,he){const W=ee.fog,O=he.geometry,Q=M.isMeshStandardMaterial?ee.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),K=!!te&&te.mapping===as?te.image.height:null,V=x[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const F=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,k=F!==void 0?F.length:0;let ce=0;O.morphAttributes.position!==void 0&&(ce=1),O.morphAttributes.normal!==void 0&&(ce=2),O.morphAttributes.color!==void 0&&(ce=3);let ae,se,Me,Ee;if(V){const Ve=Kt[V];ae=Ve.vertexShader,se=Ve.fragmentShader}else ae=M.vertexShader,se=M.fragmentShader,l.update(M),Me=l.getVertexShaderID(M),Ee=l.getFragmentShaderID(M);const J=n.getRenderTarget(),De=M.alphaTest>0,Se=M.clearcoat>0,we=M.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:M.type,vertexShader:ae,fragmentShader:se,defines:M.defines,customVertexShaderID:Me,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:he.isInstancedMesh===!0,instancingColor:he.isInstancedMesh===!0&&he.instanceColor!==null,supportsVertexTextures:h,outputEncoding:J===null?n.outputEncoding:J.isXRRenderTarget===!0?J.texture.encoding:ri,map:!!M.map,matcap:!!M.matcap,envMap:!!te,envMapMode:te&&te.mapping,envMapCubeUVHeight:K,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===qd,tangentSpaceNormalMap:M.normalMapType===Wd,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Ke,clearcoat:Se,clearcoatMap:Se&&!!M.clearcoatMap,clearcoatRoughnessMap:Se&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!M.clearcoatNormalMap,iridescence:we,iridescenceMap:we&&!!M.iridescenceMap,iridescenceThicknessMap:we&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Di,alphaMap:!!M.alphaMap,alphaTest:De,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!O.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!W,useFog:M.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:f,skinning:he.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ce,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:pn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ln,flipSided:M.side===Ft,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)A.push(P),A.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(v(A,M),S(A,M),A.push(n.outputEncoding)),A.push(M.customProgramCacheKey),A.join()}function v(M,A){M.push(A.precision),M.push(A.outputEncoding),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.combine),M.push(A.vertexUvs),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function S(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.physicallyCorrectLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.specularIntensityMap&&o.enable(15),A.specularColorMap&&o.enable(16),A.transmission&&o.enable(17),A.transmissionMap&&o.enable(18),A.thicknessMap&&o.enable(19),A.sheen&&o.enable(20),A.sheenColorMap&&o.enable(21),A.sheenRoughnessMap&&o.enable(22),A.decodeVideoTexture&&o.enable(23),A.opaque&&o.enable(24),M.push(o.mask)}function E(M){const A=x[M.type];let P;if(A){const ee=Kt[A];P=ap.clone(ee.uniforms)}else P=M.uniforms;return P}function w(M,A){let P;for(let ee=0,he=c.length;ee<he;ee++){const W=c[ee];if(W.cacheKey===A){P=W,++P.usedTimes;break}}return P===void 0&&(P=new mx(n,A,M,s),c.push(P)),P}function T(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function L(M){l.remove(M)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:w,releaseProgram:T,releaseShaderCache:L,programs:c,dispose:B}}function Mx(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function bx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,x,p,d){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:p,group:d},n[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=m,v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=p,v.group=d),e++,v}function o(f,h,m,x,p,d){const v=a(f,h,m,x,p,d);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):t.push(v)}function l(f,h,m,x,p,d){const v=a(f,h,m,x,p,d);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function c(f,h){t.length>1&&t.sort(f||bx),i.length>1&&i.sort(h||Bl),r.length>1&&r.sort(h||Bl)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function yx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Gl,n.set(i,[a])):r>=s.length?(a=new Gl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Sx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Xe};break;case"SpotLight":t={position:new U,direction:new U,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function wx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Tx=0;function Ex(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ax(n,e){const t=new Sx,i=wx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,a=new st,o=new st;function l(u,f){let h=0,m=0,x=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let p=0,d=0,v=0,S=0,E=0,w=0,T=0,L=0,B=0,M=0;u.sort(Ex);const A=f!==!0?Math.PI:1;for(let ee=0,he=u.length;ee<he;ee++){const W=u[ee],O=W.color,Q=W.intensity,te=W.distance,K=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)h+=O.r*Q*A,m+=O.g*Q*A,x+=O.b*Q*A;else if(W.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(W.sh.coefficients[V],Q);else if(W.isDirectionalLight){const V=t.get(W);if(V.color.copy(W.color).multiplyScalar(W.intensity*A),W.castShadow){const F=W.shadow,k=i.get(W);k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,r.directionalShadow[p]=k,r.directionalShadowMap[p]=K,r.directionalShadowMatrix[p]=W.shadow.matrix,w++}r.directional[p]=V,p++}else if(W.isSpotLight){const V=t.get(W);V.position.setFromMatrixPosition(W.matrixWorld),V.color.copy(O).multiplyScalar(Q*A),V.distance=te,V.coneCos=Math.cos(W.angle),V.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),V.decay=W.decay,r.spot[v]=V;const F=W.shadow;if(W.map&&(r.spotLightMap[B]=W.map,B++,F.updateMatrices(W),W.castShadow&&M++),r.spotLightMatrix[v]=F.matrix,W.castShadow){const k=i.get(W);k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,r.spotShadow[v]=k,r.spotShadowMap[v]=K,L++}v++}else if(W.isRectAreaLight){const V=t.get(W);V.color.copy(O).multiplyScalar(Q),V.halfWidth.set(W.width*.5,0,0),V.halfHeight.set(0,W.height*.5,0),r.rectArea[S]=V,S++}else if(W.isPointLight){const V=t.get(W);if(V.color.copy(W.color).multiplyScalar(W.intensity*A),V.distance=W.distance,V.decay=W.decay,W.castShadow){const F=W.shadow,k=i.get(W);k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,k.shadowCameraNear=F.camera.near,k.shadowCameraFar=F.camera.far,r.pointShadow[d]=k,r.pointShadowMap[d]=K,r.pointShadowMatrix[d]=W.shadow.matrix,T++}r.point[d]=V,d++}else if(W.isHemisphereLight){const V=t.get(W);V.skyColor.copy(W.color).multiplyScalar(Q*A),V.groundColor.copy(W.groundColor).multiplyScalar(Q*A),r.hemi[E]=V,E++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const P=r.hash;(P.directionalLength!==p||P.pointLength!==d||P.spotLength!==v||P.rectAreaLength!==S||P.hemiLength!==E||P.numDirectionalShadows!==w||P.numPointShadows!==T||P.numSpotShadows!==L||P.numSpotMaps!==B)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=S,r.point.length=d,r.hemi.length=E,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=L+B-M,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=M,P.directionalLength=p,P.pointLength=d,P.spotLength=v,P.rectAreaLength=S,P.hemiLength=E,P.numDirectionalShadows=w,P.numPointShadows=T,P.numSpotShadows=L,P.numSpotMaps=B,r.version=Tx++)}function c(u,f){let h=0,m=0,x=0,p=0,d=0;const v=f.matrixWorldInverse;for(let S=0,E=u.length;S<E;S++){const w=u[S];if(w.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(v),h++}else if(w.isSpotLight){const T=r.spot[x];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(v),T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(v),x++}else if(w.isRectAreaLight){const T=r.rectArea[p];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(v),o.identity(),a.copy(w.matrixWorld),a.premultiply(v),o.extractRotation(a),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(v),m++}else if(w.isHemisphereLight){const T=r.hemi[d];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(v),d++}}}return{setup:l,setupView:c,state:r}}function Vl(n,e){const t=new Ax(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Cx(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Vl(n,e),t.set(s,[l])):a>=o.length?(l=new Vl(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Lx extends fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rx extends fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ix(n,e,t){let i=new Qc;const r=new je,s=new je,a=new at,o=new Lx({depthPacking:kd}),l=new Rx,c={},u=t.maxTextureSize,f={0:Ft,1:Ni,2:Ln},h=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Dx,fragmentShader:Px}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new _n;x.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new hn(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc,this.render=function(w,T,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const B=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Pn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let ee=0,he=w.length;ee<he;ee++){const W=w[ee],O=W.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const Q=O.getFrameExtents();if(r.multiply(Q),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,O.mapSize.y=s.y)),O.map===null){const K=this.type!==Ki?{minFilter:vt,magFilter:vt}:{};O.map=new si(r.x,r.y,K),O.map.texture.name=W.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const te=O.getViewportCount();for(let K=0;K<te;K++){const V=O.getViewport(K);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),P.viewport(a),O.updateMatrices(W,K),i=O.getFrustum(),E(T,L,O.camera,W,this.type)}O.isPointLightShadow!==!0&&this.type===Ki&&v(O,L),O.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(B,M,A)};function v(w,T){const L=e.update(p);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new si(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,L,h,p,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,L,m,p,null)}function S(w,T,L,B,M,A){let P=null;const ee=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(ee!==void 0?P=ee:P=L.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){const he=P.uuid,W=T.uuid;let O=c[he];O===void 0&&(O={},c[he]=O);let Q=O[W];Q===void 0&&(Q=P.clone(),O[W]=Q),P=Q}return P.visible=T.visible,P.wireframe=T.wireframe,A===Ki?P.side=T.shadowSide!==null?T.shadowSide:T.side:P.side=T.shadowSide!==null?T.shadowSide:f[T.side],P.alphaMap=T.alphaMap,P.alphaTest=T.alphaTest,P.clipShadows=T.clipShadows,P.clippingPlanes=T.clippingPlanes,P.clipIntersection=T.clipIntersection,P.displacementMap=T.displacementMap,P.displacementScale=T.displacementScale,P.displacementBias=T.displacementBias,P.wireframeLinewidth=T.wireframeLinewidth,P.linewidth=T.linewidth,L.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(L.matrixWorld),P.nearDistance=B,P.farDistance=M),P}function E(w,T,L,B,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Ki)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const ee=e.update(w),he=w.material;if(Array.isArray(he)){const W=ee.groups;for(let O=0,Q=W.length;O<Q;O++){const te=W[O],K=he[te.materialIndex];if(K&&K.visible){const V=S(w,K,B,L.near,L.far,M);n.renderBufferDirect(L,null,ee,V,w,te)}}}else if(he.visible){const W=S(w,he,B,L.near,L.far,M);n.renderBufferDirect(L,null,ee,W,w,null)}}const P=w.children;for(let ee=0,he=P.length;ee<he;ee++)E(P[ee],T,L,B,M)}}function Fx(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const me=new at;let X=null;const xe=new at(0,0,0,0);return{setMask:function(ge){X!==ge&&!R&&(n.colorMask(ge,ge,ge,ge),X=ge)},setLocked:function(ge){R=ge},setClear:function(ge,Ge,it,Je,xn){xn===!0&&(ge*=Je,Ge*=Je,it*=Je),me.set(ge,Ge,it,Je),xe.equals(me)===!1&&(n.clearColor(ge,Ge,it,Je),xe.copy(me))},reset:function(){R=!1,X=null,xe.set(-1,0,0,0)}}}function s(){let R=!1,me=null,X=null,xe=null;return{setTest:function(ge){ge?De(2929):Se(2929)},setMask:function(ge){me!==ge&&!R&&(n.depthMask(ge),me=ge)},setFunc:function(ge){if(X!==ge){if(ge)switch(ge){case hd:n.depthFunc(512);break;case dd:n.depthFunc(519);break;case pd:n.depthFunc(513);break;case _o:n.depthFunc(515);break;case md:n.depthFunc(514);break;case gd:n.depthFunc(518);break;case _d:n.depthFunc(516);break;case xd:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);X=ge}},setLocked:function(ge){R=ge},setClear:function(ge){xe!==ge&&(n.clearDepth(ge),xe=ge)},reset:function(){R=!1,me=null,X=null,xe=null}}}function a(){let R=!1,me=null,X=null,xe=null,ge=null,Ge=null,it=null,Je=null,xn=null;return{setTest:function($e){R||($e?De(2960):Se(2960))},setMask:function($e){me!==$e&&!R&&(n.stencilMask($e),me=$e)},setFunc:function($e,nn,At){(X!==$e||xe!==nn||ge!==At)&&(n.stencilFunc($e,nn,At),X=$e,xe=nn,ge=At)},setOp:function($e,nn,At){(Ge!==$e||it!==nn||Je!==At)&&(n.stencilOp($e,nn,At),Ge=$e,it=nn,Je=At)},setLocked:function($e){R=$e},setClear:function($e){xn!==$e&&(n.clearStencil($e),xn=$e)},reset:function(){R=!1,me=null,X=null,xe=null,ge=null,Ge=null,it=null,Je=null,xn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,p=[],d=null,v=!1,S=null,E=null,w=null,T=null,L=null,B=null,M=null,A=!1,P=null,ee=null,he=null,W=null,O=null;const Q=n.getParameter(35661);let te=!1,K=0;const V=n.getParameter(7938);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),te=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),te=K>=2);let F=null,k={};const ce=n.getParameter(3088),ae=n.getParameter(2978),se=new at().fromArray(ce),Me=new at().fromArray(ae);function Ee(R,me,X){const xe=new Uint8Array(4),ge=n.createTexture();n.bindTexture(R,ge),n.texParameteri(R,10241,9728),n.texParameteri(R,10240,9728);for(let Ge=0;Ge<X;Ge++)n.texImage2D(me+Ge,0,6408,1,1,0,6408,5121,xe);return ge}const J={};J[3553]=Ee(3553,3553,1),J[34067]=Ee(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(2929),l.setFunc(_o),Y(!1),Z(Ra),De(2884),C(Pn);function De(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function Se(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function we(R,me){return m[R]!==me?(n.bindFramebuffer(R,me),m[R]=me,i&&(R===36009&&(m[36160]=me),R===36160&&(m[36009]=me)),!0):!1}function _e(R,me){let X=p,xe=!1;if(R)if(X=x.get(me),X===void 0&&(X=[],x.set(me,X)),R.isWebGLMultipleRenderTargets){const ge=R.texture;if(X.length!==ge.length||X[0]!==36064){for(let Ge=0,it=ge.length;Ge<it;Ge++)X[Ge]=36064+Ge;X.length=ge.length,xe=!0}}else X[0]!==36064&&(X[0]=36064,xe=!0);else X[0]!==1029&&(X[0]=1029,xe=!0);xe&&(t.isWebGL2?n.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function Ve(R){return d!==R?(n.useProgram(R),d=R,!0):!1}const Le={[wi]:32774,[td]:32778,[nd]:32779};if(i)Le[Fa]=32775,Le[Na]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Le[Fa]=R.MIN_EXT,Le[Na]=R.MAX_EXT)}const y={[id]:0,[rd]:1,[sd]:768,[Oc]:770,[fd]:776,[cd]:774,[ad]:772,[od]:769,[zc]:771,[ud]:775,[ld]:773};function C(R,me,X,xe,ge,Ge,it,Je){if(R===Pn){v===!0&&(Se(3042),v=!1);return}if(v===!1&&(De(3042),v=!0),R!==ed){if(R!==S||Je!==A){if((E!==wi||L!==wi)&&(n.blendEquation(32774),E=wi,L=wi),Je)switch(R){case Di:n.blendFuncSeparate(1,771,1,771);break;case Da:n.blendFunc(1,1);break;case Pa:n.blendFuncSeparate(0,769,0,1);break;case Ia:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Di:n.blendFuncSeparate(770,771,1,771);break;case Da:n.blendFunc(770,1);break;case Pa:n.blendFuncSeparate(0,769,0,1);break;case Ia:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,T=null,B=null,M=null,S=R,A=Je}return}ge=ge||me,Ge=Ge||X,it=it||xe,(me!==E||ge!==L)&&(n.blendEquationSeparate(Le[me],Le[ge]),E=me,L=ge),(X!==w||xe!==T||Ge!==B||it!==M)&&(n.blendFuncSeparate(y[X],y[xe],y[Ge],y[it]),w=X,T=xe,B=Ge,M=it),S=R,A=null}function H(R,me){R.side===Ln?Se(2884):De(2884);let X=R.side===Ft;me&&(X=!X),Y(X),R.blending===Di&&R.transparent===!1?C(Pn):C(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const xe=R.stencilWrite;c.setTest(xe),xe&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),re(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?De(32926):Se(32926)}function Y(R){P!==R&&(R?n.frontFace(2304):n.frontFace(2305),P=R)}function Z(R){R!==Kh?(De(2884),R!==ee&&(R===Ra?n.cullFace(1029):R===Jh?n.cullFace(1028):n.cullFace(1032))):Se(2884),ee=R}function ie(R){R!==he&&(te&&n.lineWidth(R),he=R)}function re(R,me,X){R?(De(32823),(W!==me||O!==X)&&(n.polygonOffset(me,X),W=me,O=X)):Se(32823)}function oe(R){R?De(3089):Se(3089)}function le(R){R===void 0&&(R=33984+Q-1),F!==R&&(n.activeTexture(R),F=R)}function _(R,me){F===null&&le();let X=k[F];X===void 0&&(X={type:void 0,texture:void 0},k[F]=X),(X.type!==R||X.texture!==me)&&(n.bindTexture(R,me||J[R]),X.type=R,X.texture=me)}function g(){const R=k[F];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function D(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function q(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function N(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(R){se.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),se.copy(R))}function ve(R){Me.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Me.copy(R))}function Te(R,me){let X=f.get(me);X===void 0&&(X=new WeakMap,f.set(me,X));let xe=X.get(R);xe===void 0&&(xe=n.getUniformBlockIndex(me,R.name),X.set(R,xe))}function Oe(R,me){const xe=f.get(me).get(R);u.get(R)!==xe&&(n.uniformBlockBinding(me,xe,R.__bindingPointIndex),u.set(R,xe))}function Ne(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},F=null,k={},m={},x=new WeakMap,p=[],d=null,v=!1,S=null,E=null,w=null,T=null,L=null,B=null,M=null,A=!1,P=null,ee=null,he=null,W=null,O=null,se.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:De,disable:Se,bindFramebuffer:we,drawBuffers:_e,useProgram:Ve,setBlending:C,setMaterial:H,setFlipSided:Y,setCullFace:Z,setLineWidth:ie,setPolygonOffset:re,setScissorTest:oe,activeTexture:le,bindTexture:_,unbindTexture:g,compressedTexImage2D:D,texImage2D:ue,texImage3D:de,updateUBOMapping:Te,uniformBlockBinding:Oe,texStorage2D:pe,texStorage3D:N,texSubImage2D:G,texSubImage3D:q,compressedTexSubImage2D:ne,scissor:be,viewport:ve,reset:Ne}}function Nx(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(_,g){return v?new OffscreenCanvas(_,g):Kr("canvas")}function E(_,g,D,G){let q=1;if((_.width>G||_.height>G)&&(q=G/Math.max(_.width,_.height)),q<1||g===!0)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap){const ne=g?So:Math.floor,pe=ne(q*_.width),N=ne(q*_.height);p===void 0&&(p=S(pe,N));const ue=D?S(pe,N):p;return ue.width=pe,ue.height=N,ue.getContext("2d").drawImage(_,0,0,pe,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+pe+"x"+N+")."),ue}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),_;return _}function w(_){return ll(_.width)&&ll(_.height)}function T(_){return o?!1:_.wrapS!==Vt||_.wrapT!==Vt||_.minFilter!==vt&&_.minFilter!==Dt}function L(_,g){return _.generateMipmaps&&g&&_.minFilter!==vt&&_.minFilter!==Dt}function B(_){n.generateMipmap(_)}function M(_,g,D,G,q=!1){if(o===!1)return g;if(_!==null){if(n[_]!==void 0)return n[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let ne=g;return g===6403&&(D===5126&&(ne=33326),D===5131&&(ne=33325),D===5121&&(ne=33321)),g===33319&&(D===5126&&(ne=33328),D===5131&&(ne=33327),D===5121&&(ne=33323)),g===6408&&(D===5126&&(ne=34836),D===5131&&(ne=34842),D===5121&&(ne=G===Ke&&q===!1?35907:32856),D===32819&&(ne=32854),D===32820&&(ne=32855)),(ne===33325||ne===33326||ne===33327||ne===33328||ne===34842||ne===34836)&&e.get("EXT_color_buffer_float"),ne}function A(_,g,D){return L(_,D)===!0||_.isFramebufferTexture&&_.minFilter!==vt&&_.minFilter!==Dt?Math.log2(Math.max(g.width,g.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?g.mipmaps.length:1}function P(_){return _===vt||_===Ua||_===Oa?9728:9729}function ee(_){const g=_.target;g.removeEventListener("dispose",ee),W(g),g.isVideoTexture&&x.delete(g)}function he(_){const g=_.target;g.removeEventListener("dispose",he),Q(g)}function W(_){const g=i.get(_);if(g.__webglInit===void 0)return;const D=_.source,G=d.get(D);if(G){const q=G[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&O(_),Object.keys(G).length===0&&d.delete(D)}i.remove(_)}function O(_){const g=i.get(_);n.deleteTexture(g.__webglTexture);const D=_.source,G=d.get(D);delete G[g.__cacheKey],a.memory.textures--}function Q(_){const g=_.texture,D=i.get(_),G=i.get(g);if(G.__webglTexture!==void 0&&(n.deleteTexture(G.__webglTexture),a.memory.textures--),_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let q=0;q<6;q++)n.deleteFramebuffer(D.__webglFramebuffer[q]),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[q]);else{if(n.deleteFramebuffer(D.__webglFramebuffer),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let q=0;q<D.__webglColorRenderbuffer.length;q++)D.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[q]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(_.isWebGLMultipleRenderTargets)for(let q=0,ne=g.length;q<ne;q++){const pe=i.get(g[q]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(g[q])}i.remove(g),i.remove(_)}let te=0;function K(){te=0}function V(){const _=te;return _>=l&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+l),te+=1,_}function F(_){const g=[];return g.push(_.wrapS),g.push(_.wrapT),g.push(_.magFilter),g.push(_.minFilter),g.push(_.anisotropy),g.push(_.internalFormat),g.push(_.format),g.push(_.type),g.push(_.generateMipmaps),g.push(_.premultiplyAlpha),g.push(_.flipY),g.push(_.unpackAlignment),g.push(_.encoding),g.join()}function k(_,g){const D=i.get(_);if(_.isVideoTexture&&oe(_),_.isRenderTargetTexture===!1&&_.version>0&&D.__version!==_.version){const G=_.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(D,_,g);return}}t.activeTexture(33984+g),t.bindTexture(3553,D.__webglTexture)}function ce(_,g){const D=i.get(_);if(_.version>0&&D.__version!==_.version){Se(D,_,g);return}t.activeTexture(33984+g),t.bindTexture(35866,D.__webglTexture)}function ae(_,g){const D=i.get(_);if(_.version>0&&D.__version!==_.version){Se(D,_,g);return}t.activeTexture(33984+g),t.bindTexture(32879,D.__webglTexture)}function se(_,g){const D=i.get(_);if(_.version>0&&D.__version!==_.version){we(D,_,g);return}t.activeTexture(33984+g),t.bindTexture(34067,D.__webglTexture)}const Me={[Mo]:10497,[Vt]:33071,[bo]:33648},Ee={[vt]:9728,[Ua]:9984,[Oa]:9986,[Dt]:9729,[Ed]:9985,[ls]:9987};function J(_,g,D){if(D?(n.texParameteri(_,10242,Me[g.wrapS]),n.texParameteri(_,10243,Me[g.wrapT]),(_===32879||_===35866)&&n.texParameteri(_,32882,Me[g.wrapR]),n.texParameteri(_,10240,Ee[g.magFilter]),n.texParameteri(_,10241,Ee[g.minFilter])):(n.texParameteri(_,10242,33071),n.texParameteri(_,10243,33071),(_===32879||_===35866)&&n.texParameteri(_,32882,33071),(g.wrapS!==Vt||g.wrapT!==Vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(_,10240,P(g.magFilter)),n.texParameteri(_,10241,P(g.minFilter)),g.minFilter!==vt&&g.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");if(g.type===Zn&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===or&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(_,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function De(_,g){let D=!1;_.__webglInit===void 0&&(_.__webglInit=!0,g.addEventListener("dispose",ee));const G=g.source;let q=d.get(G);q===void 0&&(q={},d.set(G,q));const ne=F(g);if(ne!==_.__cacheKey){q[ne]===void 0&&(q[ne]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),q[ne].usedTimes++;const pe=q[_.__cacheKey];pe!==void 0&&(q[_.__cacheKey].usedTimes--,pe.usedTimes===0&&O(g)),_.__cacheKey=ne,_.__webglTexture=q[ne].texture}return D}function Se(_,g,D){let G=3553;g.isDataArrayTexture&&(G=35866),g.isData3DTexture&&(G=32879);const q=De(_,g),ne=g.source;if(t.activeTexture(33984+D),t.bindTexture(G,_.__webglTexture),ne.version!==ne.__currentVersion||q===!0){n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const pe=T(g)&&w(g.image)===!1;let N=E(g.image,pe,!1,u);N=le(g,N);const ue=w(N)||o,de=s.convert(g.format,g.encoding);let be=s.convert(g.type),ve=M(g.internalFormat,de,be,g.encoding,g.isVideoTexture);J(G,g,ue);let Te;const Oe=g.mipmaps,Ne=o&&g.isVideoTexture!==!0,R=ne.__currentVersion===void 0||q===!0,me=A(g,N,ue);if(g.isDepthTexture)ve=6402,o?g.type===Zn?ve=36012:g.type===$n?ve=33190:g.type===Pi?ve=35056:ve=33189:g.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===ti&&ve===6402&&g.type!==Vc&&g.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=$n,be=s.convert(g.type)),g.format===zi&&ve===6402&&(ve=34041,g.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Pi,be=s.convert(g.type))),R&&(Ne?t.texStorage2D(3553,1,ve,N.width,N.height):t.texImage2D(3553,0,ve,N.width,N.height,0,de,be,null));else if(g.isDataTexture)if(Oe.length>0&&ue){Ne&&R&&t.texStorage2D(3553,me,ve,Oe[0].width,Oe[0].height);for(let X=0,xe=Oe.length;X<xe;X++)Te=Oe[X],Ne?t.texSubImage2D(3553,X,0,0,Te.width,Te.height,de,be,Te.data):t.texImage2D(3553,X,ve,Te.width,Te.height,0,de,be,Te.data);g.generateMipmaps=!1}else Ne?(R&&t.texStorage2D(3553,me,ve,N.width,N.height),t.texSubImage2D(3553,0,0,0,N.width,N.height,de,be,N.data)):t.texImage2D(3553,0,ve,N.width,N.height,0,de,be,N.data);else if(g.isCompressedTexture){Ne&&R&&t.texStorage2D(3553,me,ve,Oe[0].width,Oe[0].height);for(let X=0,xe=Oe.length;X<xe;X++)Te=Oe[X],g.format!==en?de!==null?Ne?t.compressedTexSubImage2D(3553,X,0,0,Te.width,Te.height,de,Te.data):t.compressedTexImage2D(3553,X,ve,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,X,0,0,Te.width,Te.height,de,be,Te.data):t.texImage2D(3553,X,ve,Te.width,Te.height,0,de,be,Te.data)}else if(g.isDataArrayTexture)Ne?(R&&t.texStorage3D(35866,me,ve,N.width,N.height,N.depth),t.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,de,be,N.data)):t.texImage3D(35866,0,ve,N.width,N.height,N.depth,0,de,be,N.data);else if(g.isData3DTexture)Ne?(R&&t.texStorage3D(32879,me,ve,N.width,N.height,N.depth),t.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,de,be,N.data)):t.texImage3D(32879,0,ve,N.width,N.height,N.depth,0,de,be,N.data);else if(g.isFramebufferTexture){if(R)if(Ne)t.texStorage2D(3553,me,ve,N.width,N.height);else{let X=N.width,xe=N.height;for(let ge=0;ge<me;ge++)t.texImage2D(3553,ge,ve,X,xe,0,de,be,null),X>>=1,xe>>=1}}else if(Oe.length>0&&ue){Ne&&R&&t.texStorage2D(3553,me,ve,Oe[0].width,Oe[0].height);for(let X=0,xe=Oe.length;X<xe;X++)Te=Oe[X],Ne?t.texSubImage2D(3553,X,0,0,de,be,Te):t.texImage2D(3553,X,ve,de,be,Te);g.generateMipmaps=!1}else Ne?(R&&t.texStorage2D(3553,me,ve,N.width,N.height),t.texSubImage2D(3553,0,0,0,de,be,N)):t.texImage2D(3553,0,ve,de,be,N);L(g,ue)&&B(G),ne.__currentVersion=ne.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function we(_,g,D){if(g.image.length!==6)return;const G=De(_,g),q=g.source;if(t.activeTexture(33984+D),t.bindTexture(34067,_.__webglTexture),q.version!==q.__currentVersion||G===!0){n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const ne=g.isCompressedTexture||g.image[0].isCompressedTexture,pe=g.image[0]&&g.image[0].isDataTexture,N=[];for(let X=0;X<6;X++)!ne&&!pe?N[X]=E(g.image[X],!1,!0,c):N[X]=pe?g.image[X].image:g.image[X],N[X]=le(g,N[X]);const ue=N[0],de=w(ue)||o,be=s.convert(g.format,g.encoding),ve=s.convert(g.type),Te=M(g.internalFormat,be,ve,g.encoding),Oe=o&&g.isVideoTexture!==!0,Ne=q.__currentVersion===void 0||G===!0;let R=A(g,ue,de);J(34067,g,de);let me;if(ne){Oe&&Ne&&t.texStorage2D(34067,R,Te,ue.width,ue.height);for(let X=0;X<6;X++){me=N[X].mipmaps;for(let xe=0;xe<me.length;xe++){const ge=me[xe];g.format!==en?be!==null?Oe?t.compressedTexSubImage2D(34069+X,xe,0,0,ge.width,ge.height,be,ge.data):t.compressedTexImage2D(34069+X,xe,Te,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+X,xe,0,0,ge.width,ge.height,be,ve,ge.data):t.texImage2D(34069+X,xe,Te,ge.width,ge.height,0,be,ve,ge.data)}}}else{me=g.mipmaps,Oe&&Ne&&(me.length>0&&R++,t.texStorage2D(34067,R,Te,N[0].width,N[0].height));for(let X=0;X<6;X++)if(pe){Oe?t.texSubImage2D(34069+X,0,0,0,N[X].width,N[X].height,be,ve,N[X].data):t.texImage2D(34069+X,0,Te,N[X].width,N[X].height,0,be,ve,N[X].data);for(let xe=0;xe<me.length;xe++){const Ge=me[xe].image[X].image;Oe?t.texSubImage2D(34069+X,xe+1,0,0,Ge.width,Ge.height,be,ve,Ge.data):t.texImage2D(34069+X,xe+1,Te,Ge.width,Ge.height,0,be,ve,Ge.data)}}else{Oe?t.texSubImage2D(34069+X,0,0,0,be,ve,N[X]):t.texImage2D(34069+X,0,Te,be,ve,N[X]);for(let xe=0;xe<me.length;xe++){const ge=me[xe];Oe?t.texSubImage2D(34069+X,xe+1,0,0,be,ve,ge.image[X]):t.texImage2D(34069+X,xe+1,Te,be,ve,ge.image[X])}}}L(g,de)&&B(34067),q.__currentVersion=q.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function _e(_,g,D,G,q){const ne=s.convert(D.format,D.encoding),pe=s.convert(D.type),N=M(D.internalFormat,ne,pe,D.encoding);i.get(g).__hasExternalTextures||(q===32879||q===35866?t.texImage3D(q,0,N,g.width,g.height,g.depth,0,ne,pe,null):t.texImage2D(q,0,N,g.width,g.height,0,ne,pe,null)),t.bindFramebuffer(36160,_),re(g)?h.framebufferTexture2DMultisampleEXT(36160,G,q,i.get(D).__webglTexture,0,ie(g)):n.framebufferTexture2D(36160,G,q,i.get(D).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ve(_,g,D){if(n.bindRenderbuffer(36161,_),g.depthBuffer&&!g.stencilBuffer){let G=33189;if(D||re(g)){const q=g.depthTexture;q&&q.isDepthTexture&&(q.type===Zn?G=36012:q.type===$n&&(G=33190));const ne=ie(g);re(g)?h.renderbufferStorageMultisampleEXT(36161,ne,G,g.width,g.height):n.renderbufferStorageMultisample(36161,ne,G,g.width,g.height)}else n.renderbufferStorage(36161,G,g.width,g.height);n.framebufferRenderbuffer(36160,36096,36161,_)}else if(g.depthBuffer&&g.stencilBuffer){const G=ie(g);D&&re(g)===!1?n.renderbufferStorageMultisample(36161,G,35056,g.width,g.height):re(g)?h.renderbufferStorageMultisampleEXT(36161,G,35056,g.width,g.height):n.renderbufferStorage(36161,34041,g.width,g.height),n.framebufferRenderbuffer(36160,33306,36161,_)}else{const G=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let q=0;q<G.length;q++){const ne=G[q],pe=s.convert(ne.format,ne.encoding),N=s.convert(ne.type),ue=M(ne.internalFormat,pe,N,ne.encoding),de=ie(g);D&&re(g)===!1?n.renderbufferStorageMultisample(36161,de,ue,g.width,g.height):re(g)?h.renderbufferStorageMultisampleEXT(36161,de,ue,g.width,g.height):n.renderbufferStorage(36161,ue,g.width,g.height)}}n.bindRenderbuffer(36161,null)}function Le(_,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,_),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k(g.depthTexture,0);const G=i.get(g.depthTexture).__webglTexture,q=ie(g);if(g.depthTexture.format===ti)re(g)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,G,0,q):n.framebufferTexture2D(36160,36096,3553,G,0);else if(g.depthTexture.format===zi)re(g)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,G,0,q):n.framebufferTexture2D(36160,33306,3553,G,0);else throw new Error("Unknown depthTexture format")}function y(_){const g=i.get(_),D=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Le(g.__webglFramebuffer,_)}else if(D){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)t.bindFramebuffer(36160,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]=n.createRenderbuffer(),Ve(g.__webglDepthbuffer[G],_,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),Ve(g.__webglDepthbuffer,_,!1);t.bindFramebuffer(36160,null)}function C(_,g,D){const G=i.get(_);g!==void 0&&_e(G.__webglFramebuffer,_,_.texture,36064,3553),D!==void 0&&y(_)}function H(_){const g=_.texture,D=i.get(_),G=i.get(g);_.addEventListener("dispose",he),_.isWebGLMultipleRenderTargets!==!0&&(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=g.version,a.memory.textures++);const q=_.isWebGLCubeRenderTarget===!0,ne=_.isWebGLMultipleRenderTargets===!0,pe=w(_)||o;if(q){D.__webglFramebuffer=[];for(let N=0;N<6;N++)D.__webglFramebuffer[N]=n.createFramebuffer()}else{if(D.__webglFramebuffer=n.createFramebuffer(),ne)if(r.drawBuffers){const N=_.texture;for(let ue=0,de=N.length;ue<de;ue++){const be=i.get(N[ue]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&_.samples>0&&re(_)===!1){const N=ne?g:[g];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer);for(let ue=0;ue<N.length;ue++){const de=N[ue];D.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(36161,D.__webglColorRenderbuffer[ue]);const be=s.convert(de.format,de.encoding),ve=s.convert(de.type),Te=M(de.internalFormat,be,ve,de.encoding),Oe=ie(_);n.renderbufferStorageMultisample(36161,Oe,Te,_.width,_.height),n.framebufferRenderbuffer(36160,36064+ue,36161,D.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(36161,null),_.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(D.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(36160,null)}}if(q){t.bindTexture(34067,G.__webglTexture),J(34067,g,pe);for(let N=0;N<6;N++)_e(D.__webglFramebuffer[N],_,g,36064,34069+N);L(g,pe)&&B(34067),t.unbindTexture()}else if(ne){const N=_.texture;for(let ue=0,de=N.length;ue<de;ue++){const be=N[ue],ve=i.get(be);t.bindTexture(3553,ve.__webglTexture),J(3553,be,pe),_e(D.__webglFramebuffer,_,be,36064+ue,3553),L(be,pe)&&B(3553)}t.unbindTexture()}else{let N=3553;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(o?N=_.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(N,G.__webglTexture),J(N,g,pe),_e(D.__webglFramebuffer,_,g,36064,N),L(g,pe)&&B(N),t.unbindTexture()}_.depthBuffer&&y(_)}function Y(_){const g=w(_)||o,D=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let G=0,q=D.length;G<q;G++){const ne=D[G];if(L(ne,g)){const pe=_.isWebGLCubeRenderTarget?34067:3553,N=i.get(ne).__webglTexture;t.bindTexture(pe,N),B(pe),t.unbindTexture()}}}function Z(_){if(o&&_.samples>0&&re(_)===!1){const g=_.isWebGLMultipleRenderTargets?_.texture:[_.texture],D=_.width,G=_.height;let q=16384;const ne=[],pe=_.stencilBuffer?33306:36096,N=i.get(_),ue=_.isWebGLMultipleRenderTargets===!0;if(ue)for(let de=0;de<g.length;de++)t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,N.__webglFramebuffer),n.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,N.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,N.__webglFramebuffer);for(let de=0;de<g.length;de++){ne.push(36064+de),_.depthBuffer&&ne.push(pe);const be=N.__ignoreDepthValues!==void 0?N.__ignoreDepthValues:!1;if(be===!1&&(_.depthBuffer&&(q|=256),_.stencilBuffer&&(q|=1024)),ue&&n.framebufferRenderbuffer(36008,36064,36161,N.__webglColorRenderbuffer[de]),be===!0&&(n.invalidateFramebuffer(36008,[pe]),n.invalidateFramebuffer(36009,[pe])),ue){const ve=i.get(g[de]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ve,0)}n.blitFramebuffer(0,0,D,G,0,0,D,G,q,9728),m&&n.invalidateFramebuffer(36008,ne)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ue)for(let de=0;de<g.length;de++){t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+de,36161,N.__webglColorRenderbuffer[de]);const be=i.get(g[de]).__webglTexture;t.bindFramebuffer(36160,N.__webglFramebuffer),n.framebufferTexture2D(36009,36064+de,3553,be,0)}t.bindFramebuffer(36009,N.__webglMultisampledFramebuffer)}}function ie(_){return Math.min(f,_.samples)}function re(_){const g=i.get(_);return o&&_.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function oe(_){const g=a.render.frame;x.get(_)!==g&&(x.set(_,g),_.update())}function le(_,g){const D=_.encoding,G=_.format,q=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||_.format===yo||D!==ri&&(D===Ke?o===!1?e.has("EXT_sRGB")===!0&&G===en?(_.format=yo,_.minFilter=Dt,_.generateMipmaps=!1):g=Wc.sRGBToLinear(g):(G!==en||q!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",D)),g}this.allocateTextureUnit=V,this.resetTextureUnits=K,this.setTexture2D=k,this.setTexture2DArray=ce,this.setTexture3D=ae,this.setTextureCube=se,this.rebindTextures=C,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=re}function Ux(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===ii)return 5121;if(s===Rd)return 32819;if(s===Dd)return 32820;if(s===Ad)return 5120;if(s===Cd)return 5122;if(s===Vc)return 5123;if(s===Ld)return 5124;if(s===$n)return 5125;if(s===Zn)return 5126;if(s===or)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Pd)return 6406;if(s===en)return 6408;if(s===Fd)return 6409;if(s===Nd)return 6410;if(s===ti)return 6402;if(s===zi)return 34041;if(s===Ud)return 6403;if(s===Id)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===yo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Od)return 36244;if(s===zd)return 33319;if(s===Bd)return 33320;if(s===Gd)return 36249;if(s===ys||s===Ss||s===ws||s===Ts)if(a===Ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ys)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ss)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ws)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ts)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ys)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ss)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ws)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ts)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===za||s===Ba||s===Ga||s===Va)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===za)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ba)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ga)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Va)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ha||s===ka)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ha)return a===Ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ka)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wa||s===qa||s===Xa||s===ja||s===Ya||s===$a||s===Za||s===Ka||s===Ja||s===Qa||s===el||s===tl||s===nl||s===il)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Wa)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qa)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xa)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ja)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ya)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$a)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Za)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ka)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ja)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qa)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===el)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===il)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===rl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===rl)return a===Ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Pi?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Ox extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Br extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zx={type:"move"};class Qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const S=new Br;S.matrixAutoUpdate=!1,S.visible=!1,c.joints[p.jointName]=S,c.add(S)}const v=c.joints[p.jointName];d!==null&&(v.matrix.fromArray(d.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=d.radius),v.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class Bx extends qt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ti,u!==ti&&u!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ti&&(i=$n),i===void 0&&u===zi&&(i=Pi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1}}class Gx extends ki{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const x=t.getContextAttributes();let p=null,d=null;const v=[],S=[],E=new Bt;E.layers.enable(1),E.viewport=new at;const w=new Bt;w.layers.enable(2),w.viewport=new at;const T=[E,w],L=new Ox;L.layers.enable(1),L.layers.enable(2);let B=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let k=v[F];return k===void 0&&(k=new Qs,v[F]=k),k.getTargetRaySpace()},this.getControllerGrip=function(F){let k=v[F];return k===void 0&&(k=new Qs,v[F]=k),k.getGripSpace()},this.getHand=function(F){let k=v[F];return k===void 0&&(k=new Qs,v[F]=k),k.getHandSpace()};function A(F){const k=S.indexOf(F.inputSource);if(k===-1)return;const ce=v[k];ce!==void 0&&ce.dispatchEvent({type:F.type,data:F.inputSource})}function P(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",ee);for(let F=0;F<v.length;F++){const k=S[F];k!==null&&(S[F]=null,v[F].disconnect(k))}B=null,M=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,V.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",P),r.addEventListener("inputsourceschange",ee),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:h}),d=new si(h.framebufferWidth,h.framebufferHeight,{format:en,type:ii,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let k=null,ce=null,ae=null;x.depth&&(ae=x.stencil?35056:33190,k=x.stencil?zi:ti,ce=x.stencil?Pi:$n);const se={colorFormat:32856,depthFormat:ae,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(se),r.updateRenderState({layers:[f]}),d=new si(f.textureWidth,f.textureHeight,{format:en,type:ii,depthTexture:new Bx(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const Me=e.properties.get(d);Me.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function ee(F){for(let k=0;k<F.removed.length;k++){const ce=F.removed[k],ae=S.indexOf(ce);ae>=0&&(S[ae]=null,v[ae].dispatchEvent({type:"disconnected",data:ce}))}for(let k=0;k<F.added.length;k++){const ce=F.added[k];let ae=S.indexOf(ce);if(ae===-1){for(let Me=0;Me<v.length;Me++)if(Me>=S.length){S.push(ce),ae=Me;break}else if(S[Me]===null){S[Me]=ce,ae=Me;break}if(ae===-1)break}const se=v[ae];se&&se.dispatchEvent({type:"connected",data:ce})}}const he=new U,W=new U;function O(F,k,ce){he.setFromMatrixPosition(k.matrixWorld),W.setFromMatrixPosition(ce.matrixWorld);const ae=he.distanceTo(W),se=k.projectionMatrix.elements,Me=ce.projectionMatrix.elements,Ee=se[14]/(se[10]-1),J=se[14]/(se[10]+1),De=(se[9]+1)/se[5],Se=(se[9]-1)/se[5],we=(se[8]-1)/se[0],_e=(Me[8]+1)/Me[0],Ve=Ee*we,Le=Ee*_e,y=ae/(-we+_e),C=y*-we;k.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(C),F.translateZ(y),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const H=Ee+y,Y=J+y,Z=Ve-C,ie=Le+(ae-C),re=De*J/Y*H,oe=Se*J/Y*H;F.projectionMatrix.makePerspective(Z,ie,re,oe,H,Y)}function Q(F,k){k===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(k.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;L.near=w.near=E.near=F.near,L.far=w.far=E.far=F.far,(B!==L.near||M!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),B=L.near,M=L.far);const k=F.parent,ce=L.cameras;Q(L,k);for(let se=0;se<ce.length;se++)Q(ce[se],k);L.matrixWorld.decompose(L.position,L.quaternion,L.scale),F.matrix.copy(L.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const ae=F.children;for(let se=0,Me=ae.length;se<Me;se++)ae[se].updateMatrixWorld(!0);ce.length===2?O(L,E,w):L.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return L},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(F){f!==null&&(f.fixedFoveation=F),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=F)};let te=null;function K(F,k){if(c=k.getViewerPose(l||a),m=k,c!==null){const ce=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let ae=!1;ce.length!==L.cameras.length&&(L.cameras.length=0,ae=!0);for(let se=0;se<ce.length;se++){const Me=ce[se];let Ee=null;if(h!==null)Ee=h.getViewport(Me);else{const De=u.getViewSubImage(f,Me);Ee=De.viewport,se===0&&(e.setRenderTargetTextures(d,De.colorTexture,f.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(d))}let J=T[se];J===void 0&&(J=new Bt,J.layers.enable(se),J.viewport=new at,T[se]=J),J.matrix.fromArray(Me.transform.matrix),J.projectionMatrix.fromArray(Me.projectionMatrix),J.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),se===0&&L.matrix.copy(J.matrix),ae===!0&&L.cameras.push(J)}}for(let ce=0;ce<v.length;ce++){const ae=S[ce],se=v[ce];ae!==null&&se!==void 0&&se.update(ae,k,l||a)}te&&te(F,k),m=null}const V=new eu;V.setAnimationLoop(K),this.setAnimationLoop=function(F){te=F},this.dispose=function(){}}}function Vx(n,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,v,S,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,E)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,v,S):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Ft&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Ft&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const w=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*w}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let E;d.aoMap?E=d.aoMap:d.lightMap&&(E=d.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uv2Transform.value.copy(E.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,v,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=S*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let E;d.map?E=d.map:d.alphaMap&&(E=d.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Ft&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Hx(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(S,E){const w=E.program;i.uniformBlockBinding(S,w)}function c(S,E){let w=r[S.id];w===void 0&&(x(S),w=u(S),r[S.id]=w,S.addEventListener("dispose",d));const T=E.program;i.updateUBOMapping(S,T);const L=e.render.frame;s[S.id]!==L&&(h(S),s[S.id]=L)}function u(S){const E=f();S.__bindingPointIndex=E;const w=n.createBuffer(),T=S.__size,L=S.usage;return n.bindBuffer(35345,w),n.bufferData(35345,T,L),n.bindBuffer(35345,null),n.bindBufferBase(35345,E,w),w}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const E=r[S.id],w=S.uniforms,T=S.__cache;n.bindBuffer(35345,E);for(let L=0,B=w.length;L<B;L++){const M=w[L];if(m(M,L,T)===!0){const A=M.value,P=M.__offset;typeof A=="number"?(M.__data[0]=A,n.bufferSubData(35345,P,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):A.toArray(M.__data),n.bufferSubData(35345,P,M.__data))}}n.bindBuffer(35345,null)}function m(S,E,w){const T=S.value;if(w[E]===void 0)return typeof T=="number"?w[E]=T:w[E]=T.clone(),!0;if(typeof T=="number"){if(w[E]!==T)return w[E]=T,!0}else{const L=w[E];if(L.equals(T)===!1)return L.copy(T),!0}return!1}function x(S){const E=S.uniforms;let w=0;const T=16;let L=0;for(let B=0,M=E.length;B<M;B++){const A=E[B],P=p(A);if(A.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,B>0){L=w%T;const ee=T-L;L!==0&&ee-P.boundary<0&&(w+=T-L,A.__offset=w)}w+=P.storage}return L=w%T,L>0&&(w+=T-L),S.__size=w,S.__cache={},this}function p(S){const E=S.value,w={boundary:0,storage:0};return typeof E=="number"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function d(S){const E=S.target;E.removeEventListener("dispose",d);const w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function v(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:v}}function kx(){const n=Kr("canvas");return n.style.display="block",n}function ou(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:kx(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ri,this.physicallyCorrectLights=!1,this.toneMapping=pn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,v=0,S=0,E=null,w=-1,T=null;const L=new at,B=new at;let M=null,A=e.width,P=e.height,ee=1,he=null,W=null;const O=new at(0,0,A,P),Q=new at(0,0,A,P);let te=!1;const K=new Qc;let V=!1,F=!1,k=null;const ce=new st,ae=new je,se=new U,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return E===null?ee:1}let J=t;function De(b,z){for(let j=0;j<b.length;j++){const I=b[j],$=e.getContext(I,z);if($!==null)return $}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zo}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",Oe,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),J===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),J=De(z,b),J===null)throw De(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Se,we,_e,Ve,Le,y,C,H,Y,Z,ie,re,oe,le,_,g,D,G,q,ne,pe,N,ue,de;function be(){Se=new e_(J),we=new Yg(J,Se,n),Se.init(we),N=new Ux(J,Se,we),_e=new Fx(J,Se,we),Ve=new i_,Le=new Mx,y=new Nx(J,Se,_e,Le,we,N,Ve),C=new Zg(p),H=new Qg(p),Y=new pp(J,we),ue=new Xg(J,Se,Y,we),Z=new t_(J,Y,Ve,ue),ie=new a_(J,Z,Y,Ve),q=new o_(J,we,y),g=new $g(Le),re=new vx(p,C,H,Se,we,ue,g),oe=new Vx(p,Le),le=new yx,_=new Cx(Se,we),G=new qg(p,C,_e,ie,u,a),D=new Ix(p,ie,we),de=new Hx(J,Ve,we,_e),ne=new jg(J,Se,Ve,we),pe=new n_(J,Se,Ve,we),Ve.programs=re.programs,p.capabilities=we,p.extensions=Se,p.properties=Le,p.renderLists=le,p.shadowMap=D,p.state=_e,p.info=Ve}be();const ve=new Gx(p,J);this.xr=ve,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const b=Se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(A,P,!1))},this.getSize=function(b){return b.set(A,P)},this.setSize=function(b,z,j){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=b,P=z,e.width=Math.floor(b*ee),e.height=Math.floor(z*ee),j!==!1&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(A*ee,P*ee).floor()},this.setDrawingBufferSize=function(b,z,j){A=b,P=z,ee=j,e.width=Math.floor(b*j),e.height=Math.floor(z*j),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(O)},this.setViewport=function(b,z,j,I){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,z,j,I),_e.viewport(L.copy(O).multiplyScalar(ee).floor())},this.getScissor=function(b){return b.copy(Q)},this.setScissor=function(b,z,j,I){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,z,j,I),_e.scissor(B.copy(Q).multiplyScalar(ee).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(b){_e.setScissorTest(te=b)},this.setOpaqueSort=function(b){he=b},this.setTransparentSort=function(b){W=b},this.getClearColor=function(b){return b.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor.apply(G,arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha.apply(G,arguments)},this.clear=function(b=!0,z=!0,j=!0){let I=0;b&&(I|=16384),z&&(I|=256),j&&(I|=1024),J.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Oe,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),le.dispose(),_.dispose(),Le.dispose(),C.dispose(),H.dispose(),ie.dispose(),ue.dispose(),de.dispose(),re.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Ge),ve.removeEventListener("sessionend",it),k&&(k.dispose(),k=null),Je.stop()};function Te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const b=Ve.autoReset,z=D.enabled,j=D.autoUpdate,I=D.needsUpdate,$=D.type;be(),Ve.autoReset=b,D.enabled=z,D.autoUpdate=j,D.needsUpdate=I,D.type=$}function Ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function R(b){const z=b.target;z.removeEventListener("dispose",R),me(z)}function me(b){X(b),Le.remove(b)}function X(b){const z=Le.get(b).programs;z!==void 0&&(z.forEach(function(j){re.releaseProgram(j)}),b.isShaderMaterial&&re.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,j,I,$,ye){z===null&&(z=Me);const Ae=$.isMesh&&$.matrixWorld.determinant()<0,Pe=cu(b,z,j,I,$);_e.setMaterial(I,Ae);let Ce=j.index;const ke=j.attributes.position;if(Ce===null){if(ke===void 0||ke.count===0)return}else if(Ce.count===0)return;let ze=1;I.wireframe===!0&&(Ce=Z.getWireframeAttribute(j),ze=2),ue.setup($,I,Pe,j,Ce);let Be,Ze=ne;Ce!==null&&(Be=Y.get(Ce),Ze=pe,Ze.setIndex(Be));const Nn=Ce!==null?Ce.count:ke.count,ai=j.drawRange.start*ze,li=j.drawRange.count*ze,Xt=ye!==null?ye.start*ze:0,He=ye!==null?ye.count*ze:1/0,ci=Math.max(ai,Xt),Qe=Math.min(Nn,ai+li,Xt+He)-1,Ct=Math.max(0,Qe-ci+1);if(Ct!==0){if($.isMesh)I.wireframe===!0?(_e.setLineWidth(I.wireframeLinewidth*Ee()),Ze.setMode(1)):Ze.setMode(4);else if($.isLine){let vn=I.linewidth;vn===void 0&&(vn=1),_e.setLineWidth(vn*Ee()),$.isLineSegments?Ze.setMode(1):$.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else $.isPoints?Ze.setMode(0):$.isSprite&&Ze.setMode(4);if($.isInstancedMesh)Ze.renderInstances(ci,Ct,$.count);else if(j.isInstancedBufferGeometry){const vn=Math.min(j.instanceCount,j._maxInstanceCount);Ze.renderInstances(ci,Ct,vn)}else Ze.render(ci,Ct)}},this.compile=function(b,z){function j(I,$,ye){I.transparent===!0&&I.side===Ln?(I.side=Ft,I.needsUpdate=!0,hr(I,$,ye),I.side=Ni,I.needsUpdate=!0,hr(I,$,ye),I.side=Ln):hr(I,$,ye)}h=_.get(b),h.init(),x.push(h),b.traverseVisible(function(I){I.isLight&&I.layers.test(z.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights(p.physicallyCorrectLights),b.traverse(function(I){const $=I.material;if($)if(Array.isArray($))for(let ye=0;ye<$.length;ye++){const Ae=$[ye];j(Ae,b,I)}else j($,b,I)}),x.pop(),h=null};let xe=null;function ge(b){xe&&xe(b)}function Ge(){Je.stop()}function it(){Je.start()}const Je=new eu;Je.setAnimationLoop(ge),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(b){xe=b,ve.setAnimationLoop(b),b===null?Je.stop():Je.start()},ve.addEventListener("sessionstart",Ge),ve.addEventListener("sessionend",it),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(z),z=ve.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,z,E),h=_.get(b,x.length),h.init(),x.push(h),ce.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K.setFromProjectionMatrix(ce),F=this.localClippingEnabled,V=g.init(this.clippingPlanes,F,z),f=le.get(b,m.length),f.init(),m.push(f),xn(b,z,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(he,W),V===!0&&g.beginShadows();const j=h.state.shadowsArray;if(D.render(j,b,z),V===!0&&g.endShadows(),this.info.autoReset===!0&&this.info.reset(),G.render(f,b),h.setupLights(p.physicallyCorrectLights),z.isArrayCamera){const I=z.cameras;for(let $=0,ye=I.length;$<ye;$++){const Ae=I[$];$e(f,b,Ae,Ae.viewport)}}else $e(f,b,z);E!==null&&(y.updateMultisampleRenderTarget(E),y.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(p,b,z),ue.resetDefaultState(),w=-1,T=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function xn(b,z,j,I){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){I&&se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ce);const Ae=ie.update(b),Pe=b.material;Pe.visible&&f.push(b,Ae,Pe,j,se.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Ve.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ve.render.frame),!b.frustumCulled||K.intersectsObject(b))){I&&se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ce);const Ae=ie.update(b),Pe=b.material;if(Array.isArray(Pe)){const Ce=Ae.groups;for(let ke=0,ze=Ce.length;ke<ze;ke++){const Be=Ce[ke],Ze=Pe[Be.materialIndex];Ze&&Ze.visible&&f.push(b,Ae,Ze,j,se.z,Be)}}else Pe.visible&&f.push(b,Ae,Pe,j,se.z,null)}}const ye=b.children;for(let Ae=0,Pe=ye.length;Ae<Pe;Ae++)xn(ye[Ae],z,j,I)}function $e(b,z,j,I){const $=b.opaque,ye=b.transmissive,Ae=b.transparent;h.setupLightsView(j),ye.length>0&&nn($,z,j),I&&_e.viewport(L.copy(I)),$.length>0&&At($,z,j),ye.length>0&&At(ye,z,j),Ae.length>0&&At(Ae,z,j),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function nn(b,z,j){const I=we.isWebGL2;k===null&&(k=new si(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?or:ii,minFilter:ls,samples:I&&s===!0?4:0})),p.getDrawingBufferSize(ae),I?k.setSize(ae.x,ae.y):k.setSize(So(ae.x),So(ae.y));const $=p.getRenderTarget();p.setRenderTarget(k),p.clear();const ye=p.toneMapping;p.toneMapping=pn,At(b,z,j),p.toneMapping=ye,y.updateMultisampleRenderTarget(k),y.updateRenderTargetMipmap(k),p.setRenderTarget($)}function At(b,z,j){const I=z.isScene===!0?z.overrideMaterial:null;for(let $=0,ye=b.length;$<ye;$++){const Ae=b[$],Pe=Ae.object,Ce=Ae.geometry,ke=I===null?Ae.material:I,ze=Ae.group;Pe.layers.test(j.layers)&&lu(Pe,z,j,Ce,ke,ze)}}function lu(b,z,j,I,$,ye){b.onBeforeRender(p,z,j,I,$,ye),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(p,z,j,I,b,ye),$.transparent===!0&&$.side===Ln?($.side=Ft,$.needsUpdate=!0,p.renderBufferDirect(j,z,I,$,b,ye),$.side=Ni,$.needsUpdate=!0,p.renderBufferDirect(j,z,I,$,b,ye),$.side=Ln):p.renderBufferDirect(j,z,I,$,b,ye),b.onAfterRender(p,z,j,I,$,ye)}function hr(b,z,j){z.isScene!==!0&&(z=Me);const I=Le.get(b),$=h.state.lights,ye=h.state.shadowsArray,Ae=$.state.version,Pe=re.getParameters(b,$.state,ye,z,j),Ce=re.getProgramCacheKey(Pe);let ke=I.programs;I.environment=b.isMeshStandardMaterial?z.environment:null,I.fog=z.fog,I.envMap=(b.isMeshStandardMaterial?H:C).get(b.envMap||I.environment),ke===void 0&&(b.addEventListener("dispose",R),ke=new Map,I.programs=ke);let ze=ke.get(Ce);if(ze!==void 0){if(I.currentProgram===ze&&I.lightsStateVersion===Ae)return ea(b,Pe),ze}else Pe.uniforms=re.getUniforms(b),b.onBuild(j,Pe,p),b.onBeforeCompile(Pe,p),ze=re.acquireProgram(Pe,Ce),ke.set(Ce,ze),I.uniforms=Pe.uniforms;const Be=I.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=g.uniform),ea(b,Pe),I.needsLights=fu(b),I.lightsStateVersion=Ae,I.needsLights&&(Be.ambientLightColor.value=$.state.ambient,Be.lightProbe.value=$.state.probe,Be.directionalLights.value=$.state.directional,Be.directionalLightShadows.value=$.state.directionalShadow,Be.spotLights.value=$.state.spot,Be.spotLightShadows.value=$.state.spotShadow,Be.rectAreaLights.value=$.state.rectArea,Be.ltc_1.value=$.state.rectAreaLTC1,Be.ltc_2.value=$.state.rectAreaLTC2,Be.pointLights.value=$.state.point,Be.pointLightShadows.value=$.state.pointShadow,Be.hemisphereLights.value=$.state.hemi,Be.directionalShadowMap.value=$.state.directionalShadowMap,Be.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Be.spotShadowMap.value=$.state.spotShadowMap,Be.spotLightMatrix.value=$.state.spotLightMatrix,Be.spotLightMap.value=$.state.spotLightMap,Be.pointShadowMap.value=$.state.pointShadowMap,Be.pointShadowMatrix.value=$.state.pointShadowMatrix);const Ze=ze.getUniforms(),Nn=qr.seqWithValue(Ze.seq,Be);return I.currentProgram=ze,I.uniformsList=Nn,ze}function ea(b,z){const j=Le.get(b);j.outputEncoding=z.outputEncoding,j.instancing=z.instancing,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function cu(b,z,j,I,$){z.isScene!==!0&&(z=Me),y.resetTextureUnits();const ye=z.fog,Ae=I.isMeshStandardMaterial?z.environment:null,Pe=E===null?p.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:ri,Ce=(I.isMeshStandardMaterial?H:C).get(I.envMap||Ae),ke=I.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ze=!!I.normalMap&&!!j.attributes.tangent,Be=!!j.morphAttributes.position,Ze=!!j.morphAttributes.normal,Nn=!!j.morphAttributes.color,ai=I.toneMapped?p.toneMapping:pn,li=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Xt=li!==void 0?li.length:0,He=Le.get(I),ci=h.state.lights;if(V===!0&&(F===!0||b!==T)){const bt=b===T&&I.id===w;g.setState(I,b,bt)}let Qe=!1;I.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ci.state.version||He.outputEncoding!==Pe||$.isInstancedMesh&&He.instancing===!1||!$.isInstancedMesh&&He.instancing===!0||$.isSkinnedMesh&&He.skinning===!1||!$.isSkinnedMesh&&He.skinning===!0||He.envMap!==Ce||I.fog===!0&&He.fog!==ye||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==g.numPlanes||He.numIntersection!==g.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==ze||He.morphTargets!==Be||He.morphNormals!==Ze||He.morphColors!==Nn||He.toneMapping!==ai||we.isWebGL2===!0&&He.morphTargetsCount!==Xt)&&(Qe=!0):(Qe=!0,He.__version=I.version);let Ct=He.currentProgram;Qe===!0&&(Ct=hr(I,z,$));let vn=!1,Xi=!1,fs=!1;const dt=Ct.getUniforms(),Un=He.uniforms;if(_e.useProgram(Ct.program)&&(vn=!0,Xi=!0,fs=!0),I.id!==w&&(w=I.id,Xi=!0),vn||T!==b){if(dt.setValue(J,"projectionMatrix",b.projectionMatrix),we.logarithmicDepthBuffer&&dt.setValue(J,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),T!==b&&(T=b,Xi=!0,fs=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const bt=dt.map.cameraPosition;bt!==void 0&&bt.setValue(J,se.setFromMatrixPosition(b.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&dt.setValue(J,"isOrthographic",b.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||$.isSkinnedMesh)&&dt.setValue(J,"viewMatrix",b.matrixWorldInverse)}if($.isSkinnedMesh){dt.setOptional(J,$,"bindMatrix"),dt.setOptional(J,$,"bindMatrixInverse");const bt=$.skeleton;bt&&(we.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),dt.setValue(J,"boneTexture",bt.boneTexture,y),dt.setValue(J,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const hs=j.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0&&we.isWebGL2===!0)&&q.update($,j,I,Ct),(Xi||He.receiveShadow!==$.receiveShadow)&&(He.receiveShadow=$.receiveShadow,dt.setValue(J,"receiveShadow",$.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Un.envMap.value=Ce,Un.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Xi&&(dt.setValue(J,"toneMappingExposure",p.toneMappingExposure),He.needsLights&&uu(Un,fs),ye&&I.fog===!0&&oe.refreshFogUniforms(Un,ye),oe.refreshMaterialUniforms(Un,I,ee,P,k),qr.upload(J,He.uniformsList,Un,y)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(qr.upload(J,He.uniformsList,Un,y),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&dt.setValue(J,"center",$.center),dt.setValue(J,"modelViewMatrix",$.modelViewMatrix),dt.setValue(J,"normalMatrix",$.normalMatrix),dt.setValue(J,"modelMatrix",$.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const bt=I.uniformsGroups;for(let ds=0,hu=bt.length;ds<hu;ds++)if(we.isWebGL2){const ta=bt[ds];de.update(ta,Ct),de.bind(ta,Ct)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ct}function uu(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function fu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,z,j){Le.get(b.texture).__webglTexture=z,Le.get(b.depthTexture).__webglTexture=j;const I=Le.get(b);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=j===void 0,I.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const j=Le.get(b);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,j=0){E=b,v=z,S=j;let I=!0;if(b){const Ce=Le.get(b);Ce.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),I=!1):Ce.__webglFramebuffer===void 0?y.setupRenderTarget(b):Ce.__hasExternalTextures&&y.rebindTextures(b,Le.get(b.texture).__webglTexture,Le.get(b.depthTexture).__webglTexture)}let $=null,ye=!1,Ae=!1;if(b){const Ce=b.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture)&&(Ae=!0);const ke=Le.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?($=ke[z],ye=!0):we.isWebGL2&&b.samples>0&&y.useMultisampledRTT(b)===!1?$=Le.get(b).__webglMultisampledFramebuffer:$=ke,L.copy(b.viewport),B.copy(b.scissor),M=b.scissorTest}else L.copy(O).multiplyScalar(ee).floor(),B.copy(Q).multiplyScalar(ee).floor(),M=te;if(_e.bindFramebuffer(36160,$)&&we.drawBuffers&&I&&_e.drawBuffers(b,$),_e.viewport(L),_e.scissor(B),_e.setScissorTest(M),ye){const Ce=Le.get(b.texture);J.framebufferTexture2D(36160,36064,34069+z,Ce.__webglTexture,j)}else if(Ae){const Ce=Le.get(b.texture),ke=z||0;J.framebufferTextureLayer(36160,36064,Ce.__webglTexture,j||0,ke)}w=-1},this.readRenderTargetPixels=function(b,z,j,I,$,ye,Ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){_e.bindFramebuffer(36160,Pe);try{const Ce=b.texture,ke=Ce.format,ze=Ce.type;if(ke!==en&&N.convert(ke)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===or&&(Se.has("EXT_color_buffer_half_float")||we.isWebGL2&&Se.has("EXT_color_buffer_float"));if(ze!==ii&&N.convert(ze)!==J.getParameter(35738)&&!(ze===Zn&&(we.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-I&&j>=0&&j<=b.height-$&&J.readPixels(z,j,I,$,N.convert(ke),N.convert(ze),ye)}finally{const Ce=E!==null?Le.get(E).__webglFramebuffer:null;_e.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(b,z,j=0){const I=Math.pow(2,-j),$=Math.floor(z.image.width*I),ye=Math.floor(z.image.height*I);y.setTexture2D(z,0),J.copyTexSubImage2D(3553,j,0,0,b.x,b.y,$,ye),_e.unbindTexture()},this.copyTextureToTexture=function(b,z,j,I=0){const $=z.image.width,ye=z.image.height,Ae=N.convert(j.format),Pe=N.convert(j.type);y.setTexture2D(j,0),J.pixelStorei(37440,j.flipY),J.pixelStorei(37441,j.premultiplyAlpha),J.pixelStorei(3317,j.unpackAlignment),z.isDataTexture?J.texSubImage2D(3553,I,b.x,b.y,$,ye,Ae,Pe,z.image.data):z.isCompressedTexture?J.compressedTexSubImage2D(3553,I,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Ae,z.mipmaps[0].data):J.texSubImage2D(3553,I,b.x,b.y,Ae,Pe,z.image),I===0&&j.generateMipmaps&&J.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(b,z,j,I,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=b.max.x-b.min.x+1,Ae=b.max.y-b.min.y+1,Pe=b.max.z-b.min.z+1,Ce=N.convert(I.format),ke=N.convert(I.type);let ze;if(I.isData3DTexture)y.setTexture3D(I,0),ze=32879;else if(I.isDataArrayTexture)y.setTexture2DArray(I,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,I.flipY),J.pixelStorei(37441,I.premultiplyAlpha),J.pixelStorei(3317,I.unpackAlignment);const Be=J.getParameter(3314),Ze=J.getParameter(32878),Nn=J.getParameter(3316),ai=J.getParameter(3315),li=J.getParameter(32877),Xt=j.isCompressedTexture?j.mipmaps[0]:j.image;J.pixelStorei(3314,Xt.width),J.pixelStorei(32878,Xt.height),J.pixelStorei(3316,b.min.x),J.pixelStorei(3315,b.min.y),J.pixelStorei(32877,b.min.z),j.isDataTexture||j.isData3DTexture?J.texSubImage3D(ze,$,z.x,z.y,z.z,ye,Ae,Pe,Ce,ke,Xt.data):j.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(ze,$,z.x,z.y,z.z,ye,Ae,Pe,Ce,Xt.data)):J.texSubImage3D(ze,$,z.x,z.y,z.z,ye,Ae,Pe,Ce,ke,Xt),J.pixelStorei(3314,Be),J.pixelStorei(32878,Ze),J.pixelStorei(3316,Nn),J.pixelStorei(3315,ai),J.pixelStorei(32877,li),$===0&&I.generateMipmaps&&J.generateMipmap(ze),_e.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),_e.unbindTexture()},this.resetState=function(){v=0,S=0,E=null,_e.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Wx extends ou{}Wx.prototype.isWebGL1Renderer=!0;class qx extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class au extends fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hl=new U,kl=new U,Wl=new st,eo=new jc,Gr=new cs;class Xx extends Mt{constructor(e=new _n,t=new au){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Hl.fromBufferAttribute(t,r-1),kl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Hl.distanceTo(kl);e.setAttribute("lineDistance",new Wt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(r),Gr.radius+=s,e.ray.intersectsSphere(Gr)===!1)return;Wl.copy(r).invert(),eo.copy(e.ray).applyMatrix4(Wl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,u=new U,f=new U,h=new U,m=this.isLineSegments?2:1,x=i.index,d=i.attributes.position;if(x!==null){const v=Math.max(0,a.start),S=Math.min(x.count,a.start+a.count);for(let E=v,w=S-1;E<w;E+=m){const T=x.getX(E),L=x.getX(E+1);if(c.fromBufferAttribute(d,T),u.fromBufferAttribute(d,L),eo.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(h);M<e.near||M>e.far||t.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,a.start),S=Math.min(d.count,a.start+a.count);for(let E=v,w=S-1;E<w;E+=m){if(c.fromBufferAttribute(d,E),u.fromBufferAttribute(d,E+1),eo.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||t.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const ql=new U,Xl=new U;class jx extends Xx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ql.fromBufferAttribute(t,r),Xl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ql.distanceTo(Xl);e.setAttribute("lineDistance",new Wt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yx extends jx{constructor(e=10,t=10,i=4473924,r=8947848){i=new Xe(i),r=new Xe(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,m=0,x=-o;h<=t;h++,x+=a){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const p=h===s?i:r;p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3}const u=new _n;u.setAttribute("position",new Wt(l,3)),u.setAttribute("color",new Wt(c,3));const f=new au({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);class $x{constructor(){Ye(this,"abilityLib",[]);Ye(this,"familyLib",[]);Ye(this,"babeLib",[]);Ye(this,"config");Ye(this,"scene");Ye(this,"camera");Ye(this,"renderer");Ye(this,"coordinate");console.log("abilityLib created"),this.coordinate=new Kx}regAbility(e){this.abilityLib.push(e)}findFamilyByName(e){return this.familyLib.find(t=>t.name==e)}findAbilityByName(e){let t=this.abilityLib.find(i=>i.name==e);return t==null?(console.log("failed to find the given ability"),-1):t}init(){this.scene=new qx;let e=25;const t=window.innerWidth/window.innerHeight;this.camera=new tu(e*t/-2,e*t/2,e/2,e/-2,1,1e3),this.camera.position.set(0,10,0),this.camera.up.set(0,0,1),this.camera.lookAt(new U(0,0,0)),this.renderer=new ou({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement);const i=16,r=16,s=new Yx(i,r);this.scene.add(s)}animate(){requestAnimationFrame(this.animate.bind(this)),this.renderer.render(this.scene,this.camera)}keyEvent(){window.onkeydown=e=>{let t=.5;e.key=="w"&&(this.camera.position.z+=t),e.key=="s"&&(this.camera.position.z-=t),e.key=="a"&&(this.camera.position.x+=t),e.key=="d"&&(this.camera.position.x-=t),e.key==" "&&(this.nextRound(),e.preventDefault())},document.addEventListener("click",()=>{this.nextRound()})}nextRound(){for(let e in this.babeLib)this.babeLib[e].update(),this.babeLib[e].genChild();game.babeLib=game.babeLib.filter(e=>e.age<e.max_age+1)}start(e){this.init(),this.config=e||{birthRate:.4,maxMember:100},this.familyLib.push(new Zx(this.config)),game.familyLib[0].familyAbilities.push(this.findAbilityByName("lifeImprove")),game.familyLib[0].birth(),this.keyEvent(),this.animate()}}class Ai{constructor(e,t){Ye(this,"age");Ye(this,"max_age",3);Ye(this,"family");Ye(this,"location");Ye(this,"cube");Ye(this,"color");Ye(this,"abilities");Ye(this,"birthRate");var o;this.age=0,this.family=e,this.abilities=this.inheritAbilitiesFromFamily();for(let l in this.abilities)this.abilities[l].method(this);this.color=Zh(65280,16711680,this.max_age+1),this.birthRate=(o=game.findFamilyByName(e))==null?void 0:o.birthRate;let i=new Wi(1,1,1),r=new Ko({color:this.color[this.age]});this.cube=new hn(i,r);let s=t.x,a=t.y;this.location={x:s,y:a},game.coordinate.set({x:s,y:a},1),this.cube.position.set(s-.5,0,a+.5),game.scene.add(this.cube),this.cube.material.color.set(this.color[this.age])}genCube(){if(!this.age){let e=Math.floor(Math.random()*10),t=Math.floor(Math.random()*10);this.location={x:e,y:t},game.coordinate.set({x:e,y:t},1),this.cube.position.set(e-.5,0,t+.5),game.scene.add(this.cube),this.age=0}}mutate(){if(Math.random())for(let e in game.abilityLib)Math.random()<=game.abilityLib[e].probability&&(console.log("mutated"),this.abilities.filter(t=>t==game.abilityLib[e]).length==1&&console.log(game.abilityLib[e].name))}update(){this.age++,this.cube.material.color.set(this.color[this.age]),this.age>=this.max_age+1&&(this.cube.visible=!1,game.coordinate.set(this.location,0),game.scene.children=game.scene.children.filter(e=>e!=this.cube)),this.mutate()}genChild(){let e=this.location.x,t=this.location.y;this.age>this.max_age-1||this.age<1||(game.coordinate.isEmpty({x:e+1,y:t})&&Math.random()<=this.birthRate&&game.babeLib.length<=game.findFamilyByName(this.family).maxMember&&game.babeLib.push(new Ai(this.family,{x:e+1,y:t})),game.coordinate.isEmpty({x:e-1,y:t})&&Math.random()<=this.birthRate&&game.babeLib.length<=game.findFamilyByName(this.family).maxMember&&game.babeLib.push(new Ai(this.family,{x:e-1,y:t})),game.coordinate.isEmpty({x:e,y:t+1})&&Math.random()<=this.birthRate&&game.babeLib.length<=game.findFamilyByName(this.family).maxMember&&game.babeLib.push(new Ai(this.family,{x:e,y:t+1})),game.coordinate.isEmpty({x:e,y:t-1})&&Math.random()<=this.birthRate&&game.babeLib.length<=game.findFamilyByName(this.family).maxMember&&game.babeLib.push(new Ai(this.family,{x:e,y:t-1})))}inheritAbilitiesFromFamily(){var e;return this.abilities=(e=game.findFamilyByName(this.family))==null?void 0:e.familyAbilities}}class Zx{constructor(e){Ye(this,"name");Ye(this,"member");Ye(this,"maxMember");Ye(this,"familyAbilities",[]);Ye(this,"birthRate");this.name="f"+Math.floor(Math.random()*1e4),this.birthRate=e.birthRate,this.member=0,this.maxMember=e.maxMember,console.log(this.name)}birth(){console.log("birth called"),game.babeLib.push(new Ai(this.name,{x:0,y:0}))}}class Kx{constructor(){Ye(this,"block",[]);let e=new Array(16).fill(0);this.block=new Array(256).fill(e)}find(e){let t,i,r=128+e.x,s=Math.abs(e.y-128),a=0,o=0;Math.ceil(r/16)==0?a=1:a=Math.ceil(r/16)-1,Math.ceil(s/16)==0||Math.ceil(s/16)==1?o=0:o=Math.ceil(s/16)-1;let l=r%16,c=s%16;return t=o*16+a,i=(16-c)*16+l-1,{blockIndex:t,index:i}}isEmpty(e){let t=this.find(e);return!this.block[t.blockIndex][t.index]}set(e,t){let i=this.find(e);this.block[i.blockIndex][i.index]=t}}const Jx={id:"loading"},Qx=jo("h1",null," loading ",-1),e0=[Qx],t0=Df({__name:"App",setup(n){return ko(()=>{var s;console.log("loaded");let e=document.querySelector("#loading");(s=e==null?void 0:e.parentNode)==null||s.removeChild(e);const t={name:"lifeImprove",description:"will have a age increase",probability:1e-5,method:a=>{a.max_age+=1}},i={name:"tmp",description:"tmp",probability:.01},r={birthRate:.5,maxMember:23};window.game=new $x,game.regAbility(t),game.regAbility(i),game.start(r)}),(e,t)=>(oh(),ch("div",Jx,e0))}});Yh(t0).mount("#app");