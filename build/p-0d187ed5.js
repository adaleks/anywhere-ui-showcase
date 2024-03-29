import{c as n,g as t}from"./p-3e8ff66b.js";const r=t(n((function(n,t){
/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt or license.gpl.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 3.0.0
*/
var r=function(n){var t=Object.freeze({left:0,top:0,width:16,height:16}),r=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),e=Object.freeze(Object.assign({},t,r)),i=Object.freeze(Object.assign({},e,{body:"",hidden:!1}));function o(n,t){var e=function(n,t){var r={};!n.hFlip!=!t.hFlip&&(r.hFlip=!0),!n.vFlip!=!t.vFlip&&(r.vFlip=!0);var e=((n.rotate||0)+(t.rotate||0))%4;return e&&(r.rotate=e),r}(n,t);for(var o in i)o in r?o in n&&!(o in e)&&(e[o]=r[o]):o in t?e[o]=t[o]:o in n&&(e[o]=n[o]);return e}function u(n,t,r){var e=n.icons,i=n.aliases||{},u={};function a(n){u=o(e[n]||i[n],u)}return a(t),r.forEach(a),o(n,u)}var a=/^[a-z0-9]+(-[a-z0-9]+)*$/,f=function(n,t,r,e){void 0===e&&(e="");var i=n.split(":");if("@"===n.slice(0,1)){if(i.length<2||i.length>3)return null;e=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){var o=i.pop(),u=i.pop(),a={provider:i.length>0?i[0]:e,prefix:u,name:o};return t&&!c(a)?null:a}var f=i[0],v=f.split("-");if(v.length>1){var s={provider:e,prefix:v.shift(),name:v.join("-")};return t&&!c(s)?null:s}if(r&&""===e){var l={provider:e,prefix:"",name:f};return t&&!c(l,r)?null:l}return null},c=function(n,t){return!!n&&!(""!==n.provider&&!n.provider.match(a)||!(t&&""===n.prefix||n.prefix.match(a))||!n.name.match(a))},v=Object.assign({},{provider:"",aliases:{},not_found:{}},t);function s(n,t){for(var r in t)if(r in n&&typeof n[r]!=typeof t[r])return!1;return!0}var l=Object.create(null);function d(n,t){var r=l[n]||(l[n]=Object.create(null));return r[t]||(r[t]=function(n,t){return{provider:n,prefix:t,icons:Object.create(null),missing:new Set}}(n,t))}function p(n,t){return function(n){if("object"!=typeof n||null===n)return null;var t=n;if("string"!=typeof t.prefix||!n.icons||"object"!=typeof n.icons)return null;if(!s(n,v))return null;var r=t.icons;for(var e in r){var o=r[e];if(!e.match(a)||"string"!=typeof o.body||!s(o,i))return null}var u=t.aliases||{};for(var f in u){var c=u[f],l=c.parent;if(!f.match(a)||"string"!=typeof l||!r[l]&&!u[l]||!s(c,i))return null}return t}(t)?function(n,t){var r=[];if("object"!=typeof n||"object"!=typeof n.icons)return r;n.not_found instanceof Array&&n.not_found.forEach((function(n){t(n,null),r.push(n)}));var e=function(n){var t=n.icons,r=n.aliases||{},e=Object.create(null);return Object.keys(t).concat(Object.keys(r)).forEach((function n(i){if(t[i])return e[i]=[];if(!(i in e)){e[i]=null;var o=r[i]&&r[i].parent,u=o&&n(o);u&&(e[i]=[o].concat(u))}return e[i]})),e}(n);for(var i in e){var o=e[i];o&&(t(i,u(n,i,o)),r.push(i))}return r}(t,(function(t,r){r?n.icons[t]=r:n.missing.add(t)})):[]}function b(n,t){var r=[];return("string"==typeof n?[n]:Object.keys(l)).forEach((function(n){("string"==typeof n&&"string"==typeof t?[t]:Object.keys(l[n]||{})).forEach((function(t){var e=d(n,t);r=r.concat(Object.keys(e.icons).map((function(r){return(""!==n?"@"+n+":":"")+t+":"+r})))}))})),r}var y=!1;function g(n){var t="string"==typeof n?f(n,!0,y):n;if(t){var r=d(t.provider,t.prefix),e=t.name;return r.icons[e]||(r.missing.has(e)?null:void 0)}}function m(n,t){var r=f(n,!0,y);return!!r&&function(n,t,r){try{if("string"==typeof r.body)return n.icons[t]=Object.assign({},r),!0}catch(n){}return!1}(d(r.provider,r.prefix),r.name,t)}function h(n,t){if("object"!=typeof n)return!1;"string"!=typeof t&&(t=n.provider||"");var r=n.prefix;return!!c({provider:t,prefix:r,name:"a"})&&!!p(d(t,r),n)}function j(n){return!!g(n)}function O(n){var t=g(n);return t?Object.assign({},e,t):null}var w=Object.freeze({width:null,height:null}),x=Object.freeze(Object.assign({},w,r)),I=/(-?[0-9.]*[0-9]+[0-9.]*)/g,k=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function S(n,t,r){if(1===t)return n;if(r=r||100,"number"==typeof n)return Math.ceil(n*t*r)/r;if("string"!=typeof n)return n;var e=n.split(I);if(null===e||!e.length)return n;for(var i=[],o=e.shift(),u=k.test(o);;){if(u){var a=parseFloat(o);isNaN(a)?i.push(o):i.push(Math.ceil(a*t*r)/r)}else i.push(o);if(void 0===(o=e.shift()))return i.join("");u=!u}}function T(n,t){var r=Object.assign({},e,n),i=Object.assign({},x,t),o={left:r.left,top:r.top,width:r.width,height:r.height},u=r.body;[r,i].forEach((function(n){var t,r=[],e=n.vFlip,i=n.rotate;switch(n.hFlip?e?i+=2:(r.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),r.push("scale(-1 1)"),o.top=o.left=0):e&&(r.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),r.push("scale(1 -1)"),o.top=o.left=0),i<0&&(i-=4*Math.floor(i/4)),i%=4){case 1:r.unshift("rotate(90 "+(t=o.height/2+o.top).toString()+" "+t.toString()+")");break;case 2:r.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:r.unshift("rotate(-90 "+(t=o.width/2+o.left).toString()+" "+t.toString()+")")}i%2==1&&(o.left!==o.top&&(t=o.left,o.left=o.top,o.top=t),o.width!==o.height&&(t=o.width,o.width=o.height,o.height=t)),r.length&&(u='<g transform="'+r.join(" ")+'">'+u+"</g>")}));var a,f,c=i.width,v=i.height,s=o.width,l=o.height;return null===c?a=S(f=null===v?"1em":"auto"===v?l:v,s/l):(a="auto"===c?s:c,f=null===v?S(a,l/s):"auto"===v?l:v),{attributes:{width:a.toString(),height:f.toString(),viewBox:o.left.toString()+" "+o.top.toString()+" "+s.toString()+" "+l.toString()},body:u}}var M=/\sid="(\S+)"/g,A="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16),P=0;function C(n,t){void 0===t&&(t=A);for(var r,e=[];r=M.exec(n);)e.push(r[1]);return e.length?(e.forEach((function(r){var e="function"==typeof t?t(r):t+(P++).toString(),i=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+e+"$3")})),n):n}var D={local:!0,session:!0},F={local:new Set,session:new Set},N=!1,$="iconify2",z="iconify",L="iconify-count",_="iconify-version",q=36e5;function E(n,t){try{return n.getItem(t)}catch(n){}}function R(n,t,r){try{return n.setItem(t,r),!0}catch(n){}}function V(n,t){try{n.removeItem(t)}catch(n){}}function G(n,t){return R(n,L,t.toString())}function J(n){return parseInt(E(n,L))||0}var U="undefined"==typeof window?{}:window;function B(n){var t=n+"Storage";try{if(U&&U[t]&&"number"==typeof U[t].length)return U[t]}catch(n){}D[n]=!1}function H(n,t){var r=B(n);if(r){var e=E(r,_);if(e!==$){if(e)for(var i=J(r),o=0;o<i;o++)V(r,z+o.toString());return R(r,_,$),void G(r,0)}for(var u=Math.floor(Date.now()/q)-168,a=function(n){var e=z+n.toString(),i=E(r,e);if("string"==typeof i){try{var o=JSON.parse(i);if("object"==typeof o&&"number"==typeof o.cached&&o.cached>u&&"string"==typeof o.provider&&"object"==typeof o.data&&"string"==typeof o.data.prefix&&t(o,n))return!0}catch(n){}V(r,e)}},f=J(r),c=f-1;c>=0;c--)a(c)||(c===f-1?(f--,G(r,f)):F[n].add(c))}}function Q(){if(!N)for(var n in N=!0,D)H(n,(function(n){var t=n.data,r=d(n.provider,t.prefix);if(!p(r,t).length)return!1;var e=t.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,e):e,!0}))}function K(n,t){switch(n){case"local":case"session":D[n]=t;break;case"all":for(var r in D)D[r]=t}}var W=Object.create(null);function X(n,t){W[n]=t}function Y(n){return W[n]||W[""]}function Z(n){var t;if("string"==typeof n.resources)t=[n.resources];else if(!((t=n.resources)instanceof Array&&t.length))return null;return{resources:t,path:n.path||"/",maxURL:n.maxURL||500,rotate:n.rotate||750,timeout:n.timeout||5e3,random:!0===n.random,index:n.index||0,dataAfterTimeout:!1!==n.dataAfterTimeout}}for(var nn=Object.create(null),tn=["https://api.simplesvg.com","https://api.unisvg.com"],rn=[];tn.length>0;)1===tn.length||Math.random()>.5?rn.push(tn.shift()):rn.push(tn.pop());function en(n,t){var r=Z(t);return null!==r&&(nn[n]=r,!0)}function on(n){return nn[n]}nn[""]=Z({resources:["https://api.iconify.design"].concat(rn)});var un=function(){var n;try{if("function"==typeof(n=fetch))return n}catch(n){}}(),an={prepare:function(n,t,r){var e=[],i=function(n,t){var r,e=on(n);if(!e)return 0;if(e.maxURL){var i=0;e.resources.forEach((function(n){i=Math.max(i,n.length)})),r=e.maxURL-i-e.path.length-(t+".json?icons=").length}else r=0;return r}(n,t),o="icons",u={type:o,provider:n,prefix:t,icons:[]},a=0;return r.forEach((function(r,f){(a+=r.length+1)>=i&&f>0&&(e.push(u),u={type:o,provider:n,prefix:t,icons:[]},a=r.length),u.icons.push(r)})),e.push(u),e},send:function(n,t,r){if(un){var e=function(n){if("string"==typeof n){var t=on(n);if(t)return t.path}return"/"}(t.provider);switch(t.type){case"icons":var i=t.prefix,o=t.icons.join(",");e+=i+".json?"+new URLSearchParams({icons:o}).toString();break;case"custom":var u=t.uri;e+="/"===u.slice(0,1)?u.slice(1):u;break;default:return void r("abort",400)}var a=503;un(n+e).then((function(n){var t=n.status;if(200===t)return a=501,n.json();setTimeout((function(){r(function(n){return 404===n}(t)?"abort":"next",t)}))})).then((function(n){"object"==typeof n&&null!==n?setTimeout((function(){r("success",n)})):setTimeout((function(){r("next",a)}))})).catch((function(){r("next",a)}))}else r("abort",424)}};function fn(n,t){n.forEach((function(n){var r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter((function(n){return n.id!==t})))}))}var cn=0,vn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function sn(n){var t=Object.assign({},vn,n),r=[];function e(){r=r.filter((function(n){return"pending"===n().status}))}return{query:function(n,i,o){var u=function(n,t,r,e){var i,o=n.resources.length,u=n.random?Math.floor(Math.random()*o):n.index;if(n.random){var a=n.resources.slice(0);for(i=[];a.length>1;){var f=Math.floor(Math.random()*a.length);i.push(a[f]),a=a.slice(0,f).concat(a.slice(f+1))}i=i.concat(a)}else i=n.resources.slice(u).concat(n.resources.slice(0,u));var c,v=Date.now(),s="pending",l=0,d=null,p=[],b=[];function y(){d&&(clearTimeout(d),d=null)}function g(){"pending"===s&&(s="aborted"),y(),p.forEach((function(n){"pending"===n.status&&(n.status="aborted")})),p=[]}function m(n,t){t&&(b=[]),"function"==typeof n&&b.push(n)}function h(){s="failed",b.forEach((function(n){n(void 0,c)}))}function j(){p.forEach((function(n){"pending"===n.status&&(n.status="aborted")})),p=[]}return b.push(e),setTimeout((function e(){if("pending"===s){y();var o=i.shift();if(void 0===o)return p.length?void(d=setTimeout((function(){y(),"pending"===s&&(j(),h())}),n.timeout)):void h();var u={status:"pending",resource:o,callback:function(t,r){!function(t,r,o){var u="success"!==r;switch(p=p.filter((function(n){return n!==t})),s){case"pending":break;case"failed":if(u||!n.dataAfterTimeout)return;break;default:return}if("abort"===r)return c=o,void h();if(u)return c=o,void(p.length||(i.length?e():h()));if(y(),j(),!n.random){var a=n.resources.indexOf(t.resource);-1!==a&&a!==n.index&&(n.index=a)}s="completed",b.forEach((function(n){n(o)}))}(u,t,r)}};p.push(u),l++,d=setTimeout(e,n.rotate),r(o,t,u.callback)}})),function(){return{startTime:v,payload:t,status:s,queriesSent:l,queriesPending:p.length,subscribe:m,abort:g}}}(t,n,i,(function(n,t){e(),o&&o(n,t)}));return r.push(u),u},find:function(n){return r.find((function(t){return n(t)}))||null},setIndex:function(n){t.index=n},getIndex:function(){return t.index},cleanup:e}}function ln(){}var dn=Object.create(null);function pn(n,t,r){var e,i;if("string"==typeof n){var o=Y(n);if(!o)return r(void 0,424),ln;i=o.send;var u=function(n){if(!dn[n]){var t=on(n);if(!t)return;var r={config:t,redundancy:sn(t)};dn[n]=r}return dn[n]}(n);u&&(e=u.redundancy)}else{var a=Z(n);if(a){e=sn(a);var f=Y(n.resources?n.resources[0]:"");f&&(i=f.send)}}return e&&i?e.query(t,i,r)().abort:(r(void 0,424),ln)}function bn(){}var yn=function(n,t){var r=function(n){var t={loaded:[],missing:[],pending:[]},r=Object.create(null);n.sort((function(n,t){return n.provider!==t.provider?n.provider.localeCompare(t.provider):n.prefix!==t.prefix?n.prefix.localeCompare(t.prefix):n.name.localeCompare(t.name)}));var e={provider:"",prefix:"",name:""};return n.forEach((function(n){if(e.name!==n.name||e.prefix!==n.prefix||e.provider!==n.provider){e=n;var i=n.provider,o=n.prefix,u=n.name,a=r[i]||(r[i]=Object.create(null)),f=a[o]||(a[o]=d(i,o)),c={provider:i,prefix:o,name:u};(u in f.icons?t.loaded:""===o||f.missing.has(u)?t.missing:t.pending).push(c)}})),t}(function(n,t,r){void 0===t&&(t=!0),void 0===r&&(r=!1);var e=[];return n.forEach((function(n){var i="string"==typeof n?f(n,t,r):n;i&&e.push(i)})),e}(n,!0,y));if(!r.pending.length){var e=!0;return t&&setTimeout((function(){e&&t(r.loaded,r.missing,r.pending,bn)})),function(){e=!1}}var i,o,u=Object.create(null),a=[];return r.pending.forEach((function(n){var t=n.provider,r=n.prefix;if(r!==o||t!==i){i=t,o=r,a.push(d(t,r));var e=u[t]||(u[t]=Object.create(null));e[r]||(e[r]=[])}})),r.pending.forEach((function(n){var t=n.provider,r=n.prefix,e=n.name,i=d(t,r),o=i.pendingIcons||(i.pendingIcons=new Set);o.has(e)||(o.add(e),u[t][r].push(e))})),a.forEach((function(n){var t=n.provider,r=n.prefix;u[t][r].length&&function(n,t){n.iconsToLoad=n.iconsToLoad?n.iconsToLoad.concat(t).sort():t,n.iconsQueueFlag||(n.iconsQueueFlag=!0,setTimeout((function(){n.iconsQueueFlag=!1;var t,r=n.provider,e=n.prefix,i=n.iconsToLoad;delete n.iconsToLoad,i&&(t=Y(r))&&t.prepare(r,e,i).forEach((function(t){pn(r,t,(function(r,e){if("object"!=typeof r){if(404!==e)return;t.icons.forEach((function(t){n.missing.add(t)}))}else try{var i=p(n,r);if(!i.length)return;var o=n.pendingIcons;o&&i.forEach((function(n){o.delete(n)})),function(n,t){function r(r){var e;if(D[r]&&(e=B(r))){var i,o=F[r];if(o.size)o.delete(i=Array.from(o).shift());else if(!G(e,(i=J(e))+1))return;var u={cached:Math.floor(Date.now()/q),provider:n.provider,data:t};return R(e,z+i.toString(),JSON.stringify(u))}}N||Q(),t.lastModified&&!function(n,t){var r=n.lastModifiedCached;if(r&&r>=t)return r===t;if(n.lastModifiedCached=t,r)for(var e in D)H(e,(function(r){var e=r.data;return r.provider!==n.provider||e.prefix!==n.prefix||e.lastModified===t}));return!0}(n,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&delete(t=Object.assign({},t)).not_found,r("local")||r("session"))}(n,r)}catch(n){console.error(n)}!function(n){n.iconsLoaderFlag||(n.iconsLoaderFlag=!0,setTimeout((function(){n.iconsLoaderFlag=!1,function(n){n.pendingCallbacksFlag||(n.pendingCallbacksFlag=!0,setTimeout((function(){n.pendingCallbacksFlag=!1;var t=n.loaderCallbacks?n.loaderCallbacks.slice(0):[];if(t.length){var r=!1,e=n.provider,i=n.prefix;t.forEach((function(t){var o=t.icons,u=o.pending.length;o.pending=o.pending.filter((function(t){if(t.prefix!==i)return!0;var u=t.name;if(n.icons[u])o.loaded.push({provider:e,prefix:i,name:u});else{if(!n.missing.has(u))return r=!0,!0;o.missing.push({provider:e,prefix:i,name:u})}return!1})),o.pending.length!==u&&(r||fn([n],t.id),t.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),t.abort))}))}})))}(n)})))}(n)}))}))})))}(n,u[t][r])})),t?function(n,t,r){var e=cn++,i=fn.bind(null,r,e);if(!t.pending.length)return i;var o={id:e,icons:t,callback:n,abort:i};return r.forEach((function(n){(n.loaderCallbacks||(n.loaderCallbacks=[])).push(o)})),i}(t,r,a):bn},gn=function(n){return new Promise((function(t,r){var i="string"==typeof n?f(n):n;yn([i||n],(function(o){if(o.length&&i){var u=g(i);if(u)return void t(Object.assign({},e,u))}r(n)}))}))};function mn(n,t){var r=Object.assign({},n);for(var e in t){var i=t[e],o=typeof i;e in w?(null===i||i&&("string"===o||"number"===o))&&(r[e]=i):o===typeof r[e]&&(r[e]="rotate"===e?i%4:i)}return r}var hn=Object.assign({},x,{inline:!1}),jn="iconifyData"+Date.now(),On=[];function wn(n){for(var t=0;t<On.length;t++){var r=On[t];if(("function"==typeof r.node?r.node():r.node)===n)return r}}function xn(n,t){void 0===t&&(t=!1);var r=wn(n);return r?(r.temporary&&(r.temporary=t),r):(On.push(r={node:n,temporary:t}),r)}function In(){return On}var kn=null,Sn={childList:!0,subtree:!0,attributes:!0};function Tn(n){if(n.observer){var t=n.observer;t.pendingScan||(t.pendingScan=setTimeout((function(){delete t.pendingScan,kn&&kn(n)})))}}function Mn(n,t){if(n.observer){var r=n.observer;if(!r.pendingScan)for(var e=0;e<t.length;e++){var i=t[e];if(i.addedNodes&&i.addedNodes.length>0||"attributes"===i.type&&void 0!==i.target[jn])return void(r.paused||Tn(n))}}}function An(n,t){n.observer.instance.observe(t,Sn)}function Pn(n){var t=n.observer;if(!t||!t.instance){var r="function"==typeof n.node?n.node():n.node;r&&window&&(t||(n.observer=t={paused:0}),t.instance=new window.MutationObserver(Mn.bind(null,n)),An(n,r),t.paused||Tn(n))}}function Cn(){In().forEach(Pn)}function Dn(n){if(n.observer){var t=n.observer;t.pendingScan&&(clearTimeout(t.pendingScan),delete t.pendingScan),t.instance&&(t.instance.disconnect(),delete t.instance)}}function Fn(n){(n?[n]:In()).forEach((function(n){if(n.observer){var t=n.observer;t.paused++,t.paused>1||!t.instance||t.instance.disconnect()}else n.observer={paused:1}}))}function Nn(n){if(n){var t=wn(n);t&&Fn(t)}else Fn()}function $n(n){(n?[n]:In()).forEach((function(n){if(n.observer){var t=n.observer;if(t.paused&&(t.paused--,!t.paused)){var r="function"==typeof n.node?n.node():n.node;if(!r)return;t.instance?An(n,r):Pn(n)}}else Pn(n)}))}function zn(n){if(n){var t=wn(n);t&&$n(t)}else $n()}function Ln(n,t){void 0===t&&(t=!1);var r=xn(n,t);return Pn(r),r}function _n(n){var t=wn(n);t&&(Dn(t),function(n){On=On.filter((function(t){return n!==t&&n!==("function"==typeof t.node?t.node():t.node)}))}(n))}var qn=/[\s,]+/,En=["width","height"],Rn=["inline","hFlip","vFlip"];function Vn(n,t){var r=-1===n.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(var e in t)r+=" "+e+'="'+t[e]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+r+">"+n+"</svg>"}function Gn(n){var t=new Set(["iconify"]);return["provider","prefix"].forEach((function(r){n[r]&&t.add("iconify--"+n[r])})),t}function Jn(n,t,r,e){var i=n.classList;e&&Array.from(e.classList).forEach((function(n){i.add(n)}));var o=[];return t.forEach((function(n){i.contains(n)?r.has(n)&&o.push(n):(i.add(n),o.push(n))})),r.forEach((function(n){t.has(n)||i.remove(n)})),o}function Un(n,t,r){var e=n.style;(r||[]).forEach((function(n){e.removeProperty(n)}));var i=[];for(var o in t)e.getPropertyValue(o)||(i.push(o),e.setProperty(o,t[o]));return i}function Bn(n,t,r){var e;try{e=document.createElement("span")}catch(t){return n}var i=t.customisations,o=T(r,i),u=n[jn],a=Vn(C(o.body),Object.assign({},{"aria-hidden":"true",role:"img"},o.attributes));e.innerHTML=a;for(var f=e.childNodes[0],c=n.attributes,v=0;v<c.length;v++){var s=c.item(v),l=s.name;"class"===l||f.hasAttribute(l)||f.setAttribute(l,s.value)}var d=Jn(f,Gn(t.icon),new Set(u&&u.addedClasses),n),p=Un(f,i.inline?{"vertical-align":"-0.125em"}:{},u&&u.addedStyles),b=Object.assign({},t,{status:"loaded",addedClasses:d,addedStyles:p});return f[jn]=b,n.parentNode&&n.parentNode.replaceChild(f,n),f}var Hn={display:"inline-block"},Qn={"background-color":"currentColor"},Kn={"background-color":"transparent"},Wn={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Xn={"-webkit-mask":Qn,mask:Qn,background:Kn};for(var Yn in Xn){var Zn=Xn[Yn];for(var nt in Wn)Zn[Yn+"-"+nt]=Wn[nt]}function tt(n){return n+(n.match(/^[-0-9.]+$/)?"px":"")}var rt=!1;function et(){rt||(rt=!0,setTimeout((function(){rt&&(rt=!1,it())})))}function it(n,t){void 0===t&&(t=!1);var r=Object.create(null);function i(n,t){var e=n.provider,i=n.prefix,o=n.name,u=d(e,i),a=u.icons[o];if(a)return{status:"loaded",icon:a};if(u.missing.has(o))return{status:"missing"};if(t&&!function(n){var t=d(n.provider,n.prefix).pendingIcons;return!(!t||!t.has(n.name))}(n)){var f=r[e]||(r[e]=Object.create(null));(f[i]||(f[i]=new Set)).add(o)}return{status:"loading"}}(n?[n]:In()).forEach((function(n){var r="function"==typeof n.node?n.node():n.node;if(r&&r.querySelectorAll){var o=!1,u=!1;(function(n){var t=[];return n.querySelectorAll("svg.iconify, i.iconify, span.iconify, i.iconify-inline, span.iconify-inline").forEach((function(n){var r=n[jn]||"svg"!==n.tagName.toLowerCase()?function(n){var t=n.getAttribute("data-icon"),r="string"==typeof t&&f(t,!0);if(!r)return null;var e=Object.assign({},hn,{inline:n.classList&&n.classList.contains("iconify-inline")});En.forEach((function(t){var r=n.getAttribute("data-"+t);r&&(e[t]=r)}));var i=n.getAttribute("data-rotate");"string"==typeof i&&(e.rotate=function(n,t){void 0===t&&(t=0);var r=n.replace(/^-?[0-9.]*/,"");function e(n){for(;n<0;)n+=4;return n%4}if(""===r){var i=parseInt(n);return isNaN(i)?0:e(i)}if(r!==n){var o=0;switch(r){case"%":o=25;break;case"deg":o=90}if(o){var u=parseFloat(n.slice(0,n.length-r.length));return isNaN(u)?0:(u/=o)%1==0?e(u):0}}return t}(i));var o=n.getAttribute("data-flip");"string"==typeof o&&function(n,t){t.split(qn).forEach((function(t){switch(t.trim()){case"horizontal":n.hFlip=!0;break;case"vertical":n.vFlip=!0}}))}(e,o),Rn.forEach((function(t){var r="data-"+t,i=function(n,t){return n===t||"true"===n||""!==n&&"false"!==n&&null}(n.getAttribute(r),r);"boolean"==typeof i&&(e[t]=i)}));var u=n.getAttribute("data-mode");return{name:t,icon:r,customisations:e,mode:u}}(n):null;r&&t.push({node:n,props:r})})),t})(r).forEach((function(n){var t,r=n.node,e=n.props,u=r[jn];if(!u){var f=i(e.icon,!0),c=f.status,v=f.icon;return v?void a(r,e,v):(o=o||"loading"===c,void(r[jn]=Object.assign({},e,{status:c})))}if(function(n,t){if(n.name!==t.name||n.mode!==t.mode)return!0;var r=n.customisations,e=t.customisations;for(var i in hn)if(r[i]!==e[i])return!0;return!1}(u,e)){if(!(t=i(e.icon,u.name!==e.name)).icon)return o=o||"loading"===t.status,void Object.assign(u,Object.assign({},e,{status:t.status}))}else{if("loading"!==u.status)return;if(!(t=i(e.icon,!1)).icon)return void(u.status=t.status)}a(r,e,t.icon)})),n.temporary&&!o?_n(r):t&&o?Ln(r,!0):u&&n.observer&&$n(n)}function a(t,r,i){if(u||(u=!0,Fn(n)),"SVG"!==t.tagName.toUpperCase()){var o=r.mode,a="mask"===o||"bg"!==o&&("style"===o?-1!==i.body.indexOf("currentColor"):null);if("boolean"==typeof a)return void function(n,t,r,e){var i=t.customisations,o=T(r,i),u=o.attributes,a=n[jn],f=Vn(o.body,Object.assign({},u,{width:r.width+"",height:r.height+""})),c=Jn(n,Gn(t.icon),new Set(a&&a.addedClasses)),v='url("data:image/svg+xml,'+f.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")+'")',s=Object.assign({},{"--svg":v,width:tt(u.width),height:tt(u.height)},Hn,e?Qn:Kn);i.inline&&(s["vertical-align"]="-0.125em");var l=Un(n,s,a&&a.addedStyles),d=Object.assign({},t,{status:"loaded",addedClasses:c,addedStyles:l});n[jn]=d}(t,r,Object.assign({},e,i),a)}Bn(t,r,i)}}));var o=function(n){var t=r[n],e=function(r){yn(Array.from(t[r]).map((function(t){return{provider:n,prefix:r,name:t}})),et)};for(var i in t)e(i)};for(var u in r)o(u)}function ot(n,t,r){void 0===r&&(r=!1);var e=g(n);if(!e)return null;var i=f(n),o=mn(hn,t||{}),u=Bn(document.createElement("span"),{name:n,icon:i,customisations:o},e);return r?u.outerHTML:u}function ut(){return"3.0.0"}function at(n,t){return ot(n,t,!1)}function ft(n,t){return ot(n,t,!0)}function ct(n,t){var r=g(n);return r?T(r,mn(hn,t||{})):null}function vt(n){n?function(n){var t=wn(n);t?it(t):it({node:n,temporary:!0},!0)}(n):it()}if("undefined"!=typeof document&&"undefined"!=typeof window){!function(){if(document.documentElement)return xn(document.documentElement);On.push({node:function(){return document.documentElement}})}();var st=window;if(void 0!==st.IconifyPreload){var lt=st.IconifyPreload,dt="Invalid IconifyPreload syntax.";"object"==typeof lt&&null!==lt&&(lt instanceof Array?lt:[lt]).forEach((function(n){try{("object"!=typeof n||null===n||n instanceof Array||"object"!=typeof n.icons||"string"!=typeof n.prefix||!h(n))&&console.error(dt)}catch(n){console.error(dt)}}))}setTimeout((function(){(function(n){var t=null!==kn;kn!==n&&(kn=n,t&&In().forEach(Dn)),t?Cn():function(n){var t=document;t.readyState&&"loading"!==t.readyState?n():t.addEventListener("DOMContentLoaded",n)}(Cn)})(it),it()}))}function pt(n,t){K(n,!1!==t)}function bt(n){K(n,!0)}if(X("",an),"undefined"!=typeof document&&"undefined"!=typeof window){Q();var yt=window;if(void 0!==yt.IconifyProviders){var gt=yt.IconifyProviders;if("object"==typeof gt&&null!==gt)for(var mt in gt){var ht="IconifyProviders["+mt+"] is invalid.";try{var jt=gt[mt];if("object"!=typeof jt||!jt||void 0===jt.resources)continue;en(mt,jt)||console.error(ht)}catch(n){console.error(ht)}}}}var Ot={getAPIConfig:on,setAPIModule:X,sendAPIQuery:pn,setFetch:function(n){un=n},getFetch:function(){return un},listAPIProviders:function(){return Object.keys(nn)}},wt={_api:Ot,addAPIProvider:en,loadIcons:yn,loadIcon:gn,iconExists:j,getIcon:O,listIcons:b,addIcon:m,addCollection:h,replaceIDs:C,calculateSize:S,buildIcon:T,getVersion:ut,renderSVG:at,renderHTML:ft,renderIcon:ct,scan:vt,observe:Ln,stopObserving:_n,pauseObserver:Nn,resumeObserver:zn,enableCache:pt,disableCache:bt};return n._api=Ot,n.addAPIProvider=en,n.addCollection=h,n.addIcon=m,n.buildIcon=T,n.calculateSize=S,n.default=wt,n.disableCache=bt,n.enableCache=pt,n.getIcon=O,n.getVersion=ut,n.iconExists=j,n.listIcons=b,n.loadIcon=gn,n.loadIcons=yn,n.observe=Ln,n.pauseObserver=Nn,n.renderHTML=ft,n.renderIcon=ct,n.renderSVG=at,n.replaceIDs=C,n.resumeObserver=zn,n.scan=vt,n.stopObserving=_n,Object.defineProperty(n,"__esModule",{value:!0}),n}({});try{for(var e in t.__esModule=!0,t.default=r,r)t[e]=r[e]}catch(i){}try{void 0===self.Iconify&&(self.Iconify=r)}catch(i){}}))),e=n=>new Promise(((t,e)=>{r.loadIcons(n,((n,r,i)=>{i.length||(r.length?e({loaded:n,missing:r}):t({loaded:n}))}))}));export{r as I,e as l}