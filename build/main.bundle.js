!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.main_kuroMi=r():e.main_kuroMi=r()}(self,(()=>(()=>{var e,r,n={98:e=>{e.exports={main:function(){console.log("init?")}}}},t={};function o(e){var r=t[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var i=t[e]={exports:{}};try{var c={id:e,module:i,factory:n[e],require:o};o.i.forEach((function(e){e(c)})),i=c.module,c.factory.call(i.exports,i,i.exports,c.require)}catch(e){throw i.error=e,e}return i.exports}return o.m=n,o.c=t,o.i=[],o.hu=e=>e+"."+o.h()+".hot-update.js",o.hmrF=()=>"main."+o.h()+".hot-update.json",o.h=()=>"48a516561d358d7e0d2d",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="_kuroMi:",o.l=(n,t,i,c)=>{if(e[n])e[n].push(t);else{var d,a;if(void 0!==i)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var l=u[s];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==r+i){d=l;break}}d||(a=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",r+i),d.src=n),e[n]=[t];var f=(r,t)=>{d.onerror=d.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),a&&document.head.appendChild(d)}},(()=>{var e,r,n,t={},i=o.c,c=[],d=[],a="idle",u=0,s=[];function l(e){a=e;for(var r=[],n=0;n<d.length;n++)r[n]=d[n].call(null,e);return Promise.all(r).then((function(){}))}function f(){0==--u&&l("ready").then((function(){if(0===u){var e=s;s=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==a)throw new Error("check() is only allowed in idle status");return l("check").then(o.hmrM).then((function(n){return n?l("prepare").then((function(){var t=[];return r=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,i){return o.hmrC[i](n.c,n.r,n.m,e,r,t),e}),[])).then((function(){return r=function(){return e?m(e):l("ready").then((function(){return t}))},0===u?r():new Promise((function(e){s.push((function(){e(r())}))}));var r}))})):l(v()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==a?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+a+")")})):m(e)}function m(e){e=e||{},v();var t=r.map((function(r){return r(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort").then((function(){throw o[0]}));var i=l("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var c,d=l("apply"),a=function(e){c||(c=e)},u=[];return t.forEach((function(e){if(e.apply){var r=e.apply(a);if(r)for(var n=0;n<r.length;n++)u.push(r[n])}})),Promise.all([i,d]).then((function(){return c?l("fail").then((function(){throw c})):n?m(e).then((function(e){return u.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):l("idle").then((function(){return u}))}))}function v(){if(n)return r||(r=[]),Object.keys(o.hmrI).forEach((function(e){n.forEach((function(n){o.hmrI[e](n,r)}))})),n=void 0,!0}o.hmrD=t,o.i.push((function(s){var m,v,y,g,b=s.module,E=function(r,n){var t=i[n];if(!t)return r;var o=function(o){if(t.hot.active){if(i[o]){var d=i[o].parents;-1===d.indexOf(n)&&d.push(n)}else c=[n],e=o;-1===t.children.indexOf(o)&&t.children.push(o)}else console.warn("[HMR] unexpected require("+o+") from disposed module "+n),c=[];return r(o)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&"e"!==s&&Object.defineProperty(o,s,d(s));return o.e=function(e,n){return function(e){switch(a){case"ready":l("prepare");case"prepare":return u++,e.then(f,f),e;default:return e}}(r.e(e,n))},o}(s.require,s.id);b.hot=(m=s.id,v=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==m,_requireSelf:function(){c=v.parents.slice(),e=y?void 0:m,o(m)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,a){case"idle":r=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,r)})),l("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(m)}},check:p,apply:h,status:function(e){if(!e)return a;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var r=d.indexOf(e);r>=0&&d.splice(r,1)},data:t[m]},e=void 0,g),b.parents=c,b.children=[],c=[],s.require=E})),o.hmrC={},o.hmrI={}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var t=n.length-1;t>-1&&(!e||!/^http(s?):/.test(e));)e=n[t--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e,r,n,t,i,c=o.hmrS_jsonp=o.hmrS_jsonp||{792:0},d={};function a(r,n){return e=n,new Promise(((e,n)=>{d[r]=e;var t=o.p+o.hu(r),i=new Error;o.l(t,(e=>{if(d[r]){d[r]=void 0;var t=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;i.message="Loading hot update chunk "+r+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,n(i)}}))}))}function u(e){function d(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var i=t.pop(),c=i.id,d=i.chain,u=o.c[c];if(u&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:c};if(u.hot._main)return{type:"unaccepted",chain:d,moduleId:c};for(var s=0;s<u.parents.length;s++){var l=u.parents[s],f=o.c[l];if(f){if(f.hot._declinedDependencies[c])return{type:"declined",chain:d.concat([l]),moduleId:c,parentId:l};-1===r.indexOf(l)&&(f.hot._acceptedDependencies[c]?(n[l]||(n[l]=[]),a(n[l],[c])):(delete n[l],r.push(l),t.push({chain:d.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function a(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}o.f&&delete o.f.jsonpHmr,r=void 0;var u={},s=[],l={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(o.o(n,p)){var h=n[p],m=h?d(p):{type:"disposed",moduleId:p},v=!1,y=!1,g=!1,b="";switch(m.chain&&(b="\nUpdate propagation: "+m.chain.join(" -> ")),m.type){case"self-declined":e.onDeclined&&e.onDeclined(m),e.ignoreDeclined||(v=new Error("Aborted because of self decline: "+m.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(m),e.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+m.moduleId+" in "+m.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(m),e.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(m),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(m),g=!0;break;default:throw new Error("Unexception type "+m.type)}if(v)return{error:v};if(y)for(p in l[p]=h,a(s,m.outdatedModules),m.outdatedDependencies)o.o(m.outdatedDependencies,p)&&(u[p]||(u[p]=[]),a(u[p],m.outdatedDependencies[p]));g&&(a(s,[m.moduleId]),l[p]=f)}n=void 0;for(var E,_=[],w=0;w<s.length;w++){var I=s[w],D=o.c[I];D&&(D.hot._selfAccepted||D.hot._main)&&l[I]!==f&&!D.hot._selfInvalidated&&_.push({module:I,require:D.hot._requireSelf,errorHandler:D.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete c[e]})),t=void 0;for(var r,n=s.slice();n.length>0;){var i=n.pop(),d=o.c[i];if(d){var a={},l=d.hot._disposeHandlers;for(w=0;w<l.length;w++)l[w].call(null,a);for(o.hmrD[i]=a,d.hot.active=!1,delete o.c[i],delete u[i],w=0;w<d.children.length;w++){var f=o.c[d.children[w]];f&&(e=f.parents.indexOf(i))>=0&&f.parents.splice(e,1)}}}for(var p in u)if(o.o(u,p)&&(d=o.c[p]))for(E=u[p],w=0;w<E.length;w++)r=E[w],(e=d.children.indexOf(r))>=0&&d.children.splice(e,1)},apply:function(r){for(var n in l)o.o(l,n)&&(o.m[n]=l[n]);for(var t=0;t<i.length;t++)i[t](o);for(var c in u)if(o.o(u,c)){var d=o.c[c];if(d){E=u[c];for(var a=[],f=[],p=[],h=0;h<E.length;h++){var m=E[h],v=d.hot._acceptedDependencies[m],y=d.hot._acceptedErrorHandlers[m];if(v){if(-1!==a.indexOf(v))continue;a.push(v),f.push(y),p.push(m)}}for(var g=0;g<a.length;g++)try{a[g].call(null,E)}catch(n){if("function"==typeof f[g])try{f[g](n,{moduleId:c,dependencyId:p[g]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:c,dependencyId:p[g],error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:c,dependencyId:p[g],error:n}),e.ignoreErrored||r(n)}}}for(var b=0;b<_.length;b++){var w=_[b],I=w.module;try{w.require(I)}catch(n){if("function"==typeof w.errorHandler)try{w.errorHandler(n,{moduleId:I,module:o.c[I]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:I,error:n}),e.ignoreErrored||r(n)}}return s}}}self.webpackHotUpdate_kuroMi=(r,t,c)=>{for(var a in t)o.o(t,a)&&(n[a]=t[a],e&&e.push(a));c&&i.push(c),d[r]&&(d[r](),d[r]=void 0)},o.hmrI.jsonp=function(e,r){n||(n={},i=[],t=[],r.push(u)),o.o(n,e)||(n[e]=o.m[e])},o.hmrC.jsonp=function(e,d,s,l,f,p){f.push(u),r={},t=d,n=s.reduce((function(e,r){return e[r]=!1,e}),{}),i=[],e.forEach((function(e){o.o(c,e)&&void 0!==c[e]?(l.push(a(e,p)),r[e]=!0):r[e]=!1})),o.f&&(o.f.jsonpHmr=function(e,n){r&&o.o(r,e)&&!r[e]&&(n.push(a(e)),r[e]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),o(98)})()));