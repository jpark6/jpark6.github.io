(self.webpackChunkgatsby_blog_typescript=self.webpackChunkgatsby_blog_typescript||[]).push([[133],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,n){var r=n(9489),o=n(7067);function a(t,n,u){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),u=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||u()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},9047:function(e,t,n){var r={"./deckgo-highlight-code.entry.js":[829,829]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=9047,e.exports=o},4307:function(e,t,n){"use strict";n.d(t,{H:function(){return H},b:function(){return xe},c:function(){return oe},g:function(){return re},h:function(){return D},p:function(){return Z},r:function(){return Re}});var r=n(5671),o=n(3144),a=n(7326),u=n(136),i=n(2963),l=n(1120),s=n(9611);var c=n(8814);function f(e,t,n){return(f=(0,c.Z)()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&(0,s.Z)(o,n.prototype),o}).apply(null,arguments)}function $(e){var t="function"==typeof Map?new Map:void 0;return($=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return f(e,arguments,(0,l.Z)(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,s.Z)(r,e)})(e)}var p=n(5861),d=n(2982),m=n(885),h=n(7757),v=n.n(h);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,i.Z)(this,n)}}var g,b,x=!1,w="undefined"!=typeof window?window:{},k=w.document||{head:{}},R={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},Z=function(e){return Promise.resolve(e)},M=function(){try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1}(),O=function(e,t,n,r){n&&n.map((function(n){var r=(0,m.Z)(n,3),o=r[0],a=r[1],u=r[2],i=j(e,o),l=S(t,u),s=E(o);R.ael(i,a,l,s),(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return R.rel(i,a,l,s)}))}))},S=function(e,t){return function(n){try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(r){Oe(r)}}},j=function(e,t){return 4&t?k:e},E=function(e){return 0!=(2&e)},L="{visibility:hidden}.hydrated{visibility:inherit}",P="http://www.w3.org/1999/xlink",_=new WeakMap,N=function(e,t,n){var r=Ee.get(e);M&&n?(r=r||new CSSStyleSheet).replace(t):r=t,Ee.set(e,r)},C=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=(t.$tagName$,function(){}),a=function(e,t,n,r){var o=A(t),a=Ee.get(o);if(e=11===e.nodeType?e:k,a)if("string"==typeof a){e=e.head||e;var u,i=_.get(e);i||_.set(e,i=new Set),i.has(o)||((u=k.createElement("style")).innerHTML=a,e.insertBefore(u,e.querySelector("link")),i&&i.add(o))}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=[].concat((0,d.Z)(e.adoptedStyleSheets),[a]));return o}(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=a,n.classList.add(a+"-h")),o()},A=function(e,t){return"sc-"+e.$tagName$},T={},I=function(e){return"object"===(e=typeof e)||"function"===e},D=function(e,t){for(var n=null,r=null,o=!1,a=!1,u=[],i=function t(r){for(var i=0;i<r.length;i++)n=r[i],Array.isArray(n)?t(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof e&&!I(n))&&(n=String(n)),o&&a?u[u.length-1].$text$+=n:u.push(o?B(null,n):n),a=o)},l=arguments.length,s=new Array(l>2?l-2:0),c=2;c<l;c++)s[c-2]=arguments[c];if(i(s),t){t.key&&(r=t.key);var f=t.className||t.class;f&&(t.class="object"!=typeof f?f:Object.keys(f).filter((function(e){return f[e]})).join(" "))}if("function"==typeof e)return e(null===t?{}:t,u,q);var $=B(e,null);return $.$attrs$=t,u.length>0&&($.$children$=u),$.$key$=r,$},B=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},H={},q={forEach:function(e,t){return e.map(U).forEach(t)},map:function(e,t){return e.map(U).map(t).map(z)}},U=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},z=function(e){if("function"==typeof e.vtag){var t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),D.apply(void 0,[e.vtag,t].concat((0,d.Z)(e.vchildren||[])))}var n=B(e.vtag,e.vtext);return n.$attrs$=e.vattrs,n.$children$=e.vchildren,n.$key$=e.vkey,n.$name$=e.vname,n},F=function(e,t,n,r,o,a){if(n!==r){var u=Me(e,t),i=t.toLowerCase();if("class"===t){var l=e.classList,s=W(n),c=W(r);l.remove.apply(l,(0,d.Z)(s.filter((function(e){return e&&!c.includes(e)})))),l.add.apply(l,(0,d.Z)(c.filter((function(e){return e&&!s.includes(e)}))))}else if("style"===t){for(var f in n)r&&null!=r[f]||(f.includes("-")?e.style.removeProperty(f):e.style[f]="");for(var $ in r)n&&r[$]===n[$]||($.includes("-")?e.style.setProperty($,r[$]):e.style[$]=r[$])}else if("key"===t);else if("ref"===t)r&&r(e);else if(u||"o"!==t[0]||"n"!==t[1]){var p=I(r);if((u||p&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{var m=null==r?"":r;"list"===t?u=!1:null!=n&&e[t]==m||(e[t]=m)}}catch(v){}var h=!1;i!==(i=i.replace(/^xlink\:?/,""))&&(t=i,h=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(h?e.removeAttributeNS(P,t):e.removeAttribute(t)):(!u||4&a||o)&&!p&&(r=!0===r?"":r,h?e.setAttributeNS(P,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):Me(w,i)?i.slice(2):i[2]+t.slice(3),n&&R.rel(e,t,n,!1),r&&R.ael(e,t,r,!1)}},V=/\s/,W=function(e){return e?e.split(V):[]},X=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,a=e&&e.$attrs$||T,u=t.$attrs$||T;for(r in a)r in u||F(o,r,a[r],void 0,n,t.$flags$);for(r in u)F(o,r,a[r],u[r],n,t.$flags$)},G=function e(t,n,r,o){var a,u,i=n.$children$[r],l=0;if(null!==i.$text$)a=i.$elm$=k.createTextNode(i.$text$);else if(a=i.$elm$=k.createElement(i.$tag$),X(null,i,false),null!=g&&a["s-si"]!==g&&a.classList.add(a["s-si"]=g),i.$children$)for(l=0;l<i.$children$.length;++l)(u=e(t,i,l))&&a.appendChild(u);return a},J=function(e,t,n,r,o,a){var u,i=e;for(i.shadowRoot&&i.tagName===b&&(i=i.shadowRoot);o<=a;++o)r[o]&&(u=G(null,n,o))&&(r[o].$elm$=u,i.insertBefore(u,t))},K=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&(o=r.$elm$,te(r),o.remove())},Q=function(e,t,n,r){for(var o,a,u=0,i=0,l=0,s=0,c=t.length-1,f=t[0],$=t[c],p=r.length-1,d=r[0],m=r[p];u<=c&&i<=p;)if(null==f)f=t[++u];else if(null==$)$=t[--c];else if(null==d)d=r[++i];else if(null==m)m=r[--p];else if(Y(f,d))ee(f,d),f=t[++u],d=r[++i];else if(Y($,m))ee($,m),$=t[--c],m=r[--p];else if(Y(f,m))ee(f,m),e.insertBefore(f.$elm$,$.$elm$.nextSibling),f=t[++u],m=r[--p];else if(Y($,d))ee($,d),e.insertBefore($.$elm$,f.$elm$),$=t[--c],d=r[++i];else{for(l=-1,s=u;s<=c;++s)if(t[s]&&null!==t[s].$key$&&t[s].$key$===d.$key$){l=s;break}l>=0?((a=t[l]).$tag$!==d.$tag$?o=G(t&&t[i],n,l):(ee(a,d),t[l]=void 0,o=a.$elm$),d=r[++i]):(o=G(t&&t[i],n,i),d=r[++i]),o&&f.$elm$.parentNode.insertBefore(o,f.$elm$)}u>c?J(e,null==r[p+1]?null:r[p+1].$elm$,n,r,i,p):i>p&&K(t,u,c)},Y=function(e,t){return e.$tag$===t.$tag$&&e.$key$===t.$key$},ee=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,o=t.$children$,a=t.$tag$,u=t.$text$;null===u?("slot"===a||X(e,t,false),null!==r&&null!==o?Q(n,r,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),J(n,null,t,o,0,o.length-1)):null!==r&&K(r,0,r.length-1)):e.$text$!==u&&(n.data=u)},te=function e(t){t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(e)},ne=function(e,t){var n,r=e.$hostElement$,o=e.$cmpMeta$,a=e.$vnode$||B(null,null),u=(n=t)&&n.$tag$===H?t:D(null,null,t);b=r.tagName,o.$attrsToReflect$&&(u.$attrs$=u.$attrs$||{},o.$attrsToReflect$.map((function(e){var t=(0,m.Z)(e,2),n=t[0],o=t[1];return u.$attrs$[o]=r[n]}))),u.$tag$=null,u.$flags$|=4,e.$vnode$=u,u.$elm$=a.$elm$=r.shadowRoot||r,g=r["s-sc"],ee(a,u)},re=function(e){return ke(e).$hostElement$},oe=function(e,t,n){var r=re(e);return{emit:function(e){return ae(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},ae=function(e,t,n){var r=R.ce(t,n);return e.dispatchEvent(r),r},ue=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},ie=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){ue(e,e.$ancestorComponent$);return Te((function(){return le(e,t)}))}e.$flags$|=512},le=function(e,t){var n,r=(e.$cmpMeta$.$tagName$,function(){}),o=e.$lazyInstance$;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var t=(0,m.Z)(e,2),n=t[0],r=t[1];return pe(o,n,r)})),e.$queuedListeners$=null),n=pe(o,"componentWillLoad")),r(),de(n,(function(){return se(e,o,t)}))},se=function(){var e=(0,p.Z)(v().mark((function e(t,n,r){var o,a,u,i,l,s;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.$hostElement$,t.$cmpMeta$.$tagName$,a=function(){},u=o["s-rc"],r&&C(t),t.$cmpMeta$.$tagName$,i=function(){},ce(t,n),u&&(u.map((function(e){return e()})),o["s-rc"]=void 0),i(),a(),l=o["s-p"],s=function(){return fe(t)},0===l.length?s():(Promise.all(l).then(s),t.$flags$|=4,l.length=0);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),ce=function(e,t,n){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,ne(e,t)}catch(r){Oe(r,e.$hostElement$)}return null},fe=function(e){e.$cmpMeta$.$tagName$;var t=e.$hostElement$,n=function(){},r=e.$lazyInstance$,o=e.$ancestorComponent$;64&e.$flags$?(pe(r,"componentDidUpdate"),n()):(e.$flags$|=64,me(t),pe(r,"componentDidLoad"),n(),e.$onReadyResolve$(t),o||$e()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Ae((function(){return ie(e,!1)})),e.$flags$&=-517},$e=function(e){me(k.documentElement),Ae((function(){return ae(w,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})}))},pe=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(r){Oe(r)}},de=function(e,t){return e&&e.then?e.then(t):t()},me=function(e){return e.classList.add("hydrated")},he=function(e,t,n,r){var o,a,u=ke(e),i=u.$hostElement$,l=u.$instanceValues$.get(t),s=u.$flags$,c=u.$lazyInstance$;if(o=n,a=r.$members$[t][0],n=null==o||I(o)?o:4&a?"false"!==o&&(""===o||!!o):1&a?String(o):o,!(8&s&&void 0!==l||n===l)&&(u.$instanceValues$.set(t,n),c)){if(r.$watchers$&&128&s){var f=r.$watchers$[t];f&&f.map((function(e){try{c[e](n,l,t)}catch(r){Oe(r,i)}}))}2==(18&s)&&ie(u,!1)}},ve=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),o=e.prototype;if(r.map((function(e){var r=(0,m.Z)(e,2),a=r[0],u=(0,m.Z)(r[1],1)[0];31&u||2&n&&32&u?Object.defineProperty(o,a,{get:function(){return e=a,ke(this).$instanceValues$.get(e);var e},set:function(e){he(this,a,e,t)},configurable:!0,enumerable:!0}):1&n&&64&u&&Object.defineProperty(o,a,{value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=ke(this);return r.$onInstancePromise$.then((function(){var e;return(e=r.$lazyInstance$)[a].apply(e,t)}))}})})),1&n){var a=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;R.jmp((function(){var t=a.get(e);r[t]=(null!==n||"boolean"!=typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){var t=(0,m.Z)(e,2);t[0];return 15&t[1][0]})).map((function(e){var n=(0,m.Z)(e,2),r=n[0],o=n[1],u=o[1]||r;return a.set(u,r),512&o[0]&&t.$attrsToReflect$.push([r,u]),u}))}}return e},ye=function(){var e=(0,p.Z)(v().mark((function e(t,n,r,o,a){var u,i,l,s,c,f,$;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(32&n.$flags$)){e.next=17;break}if(n.$flags$|=32,!(a=je(r)).then){e.next=9;break}return u=function(){},e.next=7,a;case 7:a=e.sent,u();case 9:a.isProxied||(r.$watchers$=a.watchers,ve(a,r,2),a.isProxied=!0),r.$tagName$,i=function(){},n.$flags$|=8;try{new a(n)}catch(t){Oe(t)}n.$flags$&=-9,n.$flags$|=128,i(),a.style&&(l=a.style,s=A(r),Ee.has(s)||(r.$tagName$,c=function(){},N(s,l,!!(1&r.$flags$)),c()));case 17:f=n.$ancestorComponent$,$=function(){return ie(n,!0)},f&&f["s-rc"]?f["s-rc"].push($):$();case 20:case"end":return e.stop()}}),e)})));return function(t,n,r,o,a){return e.apply(this,arguments)}}(),ge=function(e){if(0==(1&R.$flags$)){var t=ke(e),n=t.$cmpMeta$,r=(n.$tagName$,function(){});if(1&t.$flags$)O(e,t,n.$listeners$);else{t.$flags$|=1;for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){ue(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=(0,m.Z)(t,2),r=n[0];if(31&(0,m.Z)(n[1],1)[0]&&e.hasOwnProperty(r)){var o=e[r];delete e[r],e[r]=o}})),ye(e,t,n)}r()}},be=function(e){if(0==(1&R.$flags$)){var t=ke(e);t.$rmListeners$&&(t.$rmListeners$.map((function(e){return e()})),t.$rmListeners$=void 0)}},xe=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=function(){},l=[],s=n.exclude||[],c=w.customElements,f=k.head,p=f.querySelector("meta[charset]"),d=k.createElement("style"),m=[],h=!0;Object.assign(R,n),R.$resourcesUrl$=new URL(n.resourcesUrl||"./",k.baseURI).href,e.map((function(e){return e[1].map((function(n){var i={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};i.$members$=n[2],i.$listeners$=n[3],i.$attrsToReflect$=[],i.$watchers$={};var f=i.$tagName$,p=function(e){(0,u.Z)(l,e);var n=y(l);function l(e){var t;return(0,r.Z)(this,l),t=n.call(this,e),e=(0,a.Z)(t),Ze(e,i),1&i.$flags$&&e.attachShadow({mode:"open"}),t}return(0,o.Z)(l,[{key:"connectedCallback",value:function(){var e=this;t&&(clearTimeout(t),t=null),h?m.push(this):R.jmp((function(){return ge(e)}))}},{key:"disconnectedCallback",value:function(){var e=this;R.jmp((function(){return be(e)}))}},{key:"componentOnReady",value:function(){return ke(this).$onReadyPromise$}}]),l}($(HTMLElement));i.$lazyBundleId$=e[0],s.includes(f)||c.get(f)||(l.push(f),c.define(f,ve(p,i,1)))}))})),d.innerHTML=l+L,d.setAttribute("data-styles",""),f.insertBefore(d,p?p.nextSibling:f.firstChild),h=!1,m.length?m.map((function(e){return e.connectedCallback()})):R.jmp((function(){return t=setTimeout($e,30)})),i()},we=new WeakMap,ke=function(e){return we.get(e)},Re=function(e,t){return we.set(t.$lazyInstance$=e,t)},Ze=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e})),n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],O(e,n,t.$listeners$),we.set(e,n)},Me=function(e,t){return t in e},Oe=function(e,t){return(0,console.error)(e,t)},Se=new Map,je=function(e,t,r){var o=e.$tagName$.replace(/-/g,"_"),a=e.$lazyBundleId$,u=Se.get(a);return u?u[o]:n(9047)("./".concat(a,".entry.js")).then((function(e){return Se.set(a,e),e[o]}),Oe)},Ee=new Map,Le=[],Pe=[],_e=function(e,t){return function(n){e.push(n),x||(x=!0,t&&4&R.$flags$?Ae(Ce):R.raf(Ce))}},Ne=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){Oe(n)}e.length=0},Ce=function e(){Ne(Le),Ne(Pe),(x=Le.length>0)&&R.raf(e)},Ae=function(e){return Z().then(e)},Te=_e(Pe,!0)},4951:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7294),o=n(6779),a=n(7447),u=n(6725),i=n(4307),l=function(e,t){return"undefined"==typeof window?Promise.resolve():(0,i.p)().then((function(){return(0,i.b)([["deckgo-highlight-code",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],languagesToLoad:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[4,"prismLanguageLoaded","languageLoaded"]]]]]],t)}))};!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}();var s=n(7918);function c(e){var t=e.toc;return(0,s.tZ)("aside",null,(0,s.tZ)(f,{toc:t}))}var f=function e(t){var n=t.toc;return(0,s.tZ)("ul",null,n.items&&n.items.map((function(t){return(0,s.tZ)("li",{key:t.title},(0,s.tZ)("a",{href:t.url},t.title),t.items&&(0,s.tZ)(e,{toc:t}))})))},$=n(3132);function p(){return(0,r.useEffect)((function(){if(null!=document){var e=document,t=e.createElement("script");t.src="https://jpark6-github-io.disqus.com/embed.js",t.setAttribute("data-timestamp",(new Date).toISOString()),(e.head||e.body).appendChild(t)}})),(0,s.tZ)("div",{id:"disqus_thread",className:"contentReply"})}function d(e){e.path;var t=e.data;return l().then((function(e){})),(0,s.tZ)(o.Z,{slug:t.mdx.frontmatter.slug},(0,s.tZ)(a.Z,{title:t.mdx.frontmatter.title,lang:"ko"}),(0,s.tZ)("div",{className:"contentMain"},(0,s.tZ)("article",null,(0,s.tZ)("h1",null,t.mdx.frontmatter.title),(0,s.tZ)("time",null,"Date: ",(0,$.p)(t.mdx.frontmatter.date)),(0,s.tZ)("br",null),(0,s.tZ)("br",null),(0,s.tZ)(u.MDXRenderer,null,t.mdx.body)),(0,s.tZ)(p,null)),(0,s.tZ)(c,{toc:t.mdx.tableOfContents}))}},6725:function(e,t,n){var r=n(3395);e.exports={MDXRenderer:r}},3395:function(e,t,n){var r=n(9100),o=n(319),a=n(9713),u=n(7316),i=["scope","children"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=n(7294),f=n(4983).mdx,$=n(9480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=u(e,i),l=$(t),p=c.useMemo((function(){if(!n)return null;var e=s({React:c,mdx:f},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return c.createElement(p,s({},a))}}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-143c996fdeb3ecac6508.js.map