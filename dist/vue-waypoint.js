!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueWaypoint=e():t.VueWaypoint=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=9)}([function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var l=e[i];"number"==typeof l[0]&&o[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),t.push(l))}},t}},function(t,e){t.exports=function(t,e,n,o){var i,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(i=t,r=t.default);var u="function"==typeof r?r.options:r;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),o){var c=u.computed||(u.computed={});Object.keys(o).forEach(function(t){var e=o[t];c[t]=function(){return e}})}return{esModule:i,exports:r,options:u}}},function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=s[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(r(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var l=[],i=0;i<n.parts.length;i++)l.push(r(n.parts[i]));s[n.id]={id:n.id,refs:1,parts:l}}}}function i(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function r(t){var e,n,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(y){var r=p++;o=d||(d=i()),e=l.bind(null,o,r,!1),n=l.bind(null,o,r,!0)}else o=i(),e=u.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function l(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var r=document.createTextNode(i),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(r,l[e]):t.appendChild(r)}}function u(t,e){var n=e.css,o=e.media,i=e.sourceMap;if(o&&t.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a=n(17),s={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,v=function(){},y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var i=a(t,e);return o(i),function(e){for(var n=[],r=0;r<i.length;r++){var l=i[r],u=s[l.id];u.refs--,n.push(u)}e?(i=a(t,e),o(i)):i=[];for(var r=0;r<n.length;r++){var u=n[r];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete s[u.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={scrollElement:window,lastScrollX:0,lastScrollY:0,direction:{x:"right",y:"down"},setScrollElement:function(t){o.scrollElement=t,o.initPosition()},initPosition:function(){o.lastScrollX=o.getPositionX(),o.lastScrollY=o.getPositionY()},getPositionX:function(){return o.scrollElement!==window?o.scrollElement.scrollLeft:o.scrollElement.scrollX},getPositionY:function(){return o.scrollElement!==window?o.scrollElement.scrollTop:o.scrollElement.scrollY},updateScrollDirection:function(){o.direction.x=o._mapperX(Math.sign(o.getPositionX()-o.lastScrollX)),o.direction.y=o._mapperY(Math.sign(o.getPositionY()-o.lastScrollY)),o.initPosition()},getScrollDirection:function(){return o.direction},_mapperX:function(t){return t>0?"right":t<0?"left":void 0},_mapperY:function(t){return t>0?"down":t<0?"up":void 0}};e.default=o},function(t,e,n){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e){try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default")}catch(t){var o=function(t,e){var n,o;return e=e||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o=n.preventDefault,n.preventDefault=function(){o.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},n};o.prototype=window.Event.prototype,window.CustomEvent=o}},function(t,e,n){var o,i,r;!function(n,l){i=[],o=l,void 0!==(r="function"==typeof o?o.apply(e,i):o)&&(t.exports=r)}(0,function(){"use strict";var t=function(t,e){for(var n=1;e--;)n*=t--;return n},e=function(e,n){return n>e?0:t(e,n)/t(n,n)},n=function(e){return t(e,e)},o=function(t,e){var o=1;if(e)o=n(e);else{for(e=1;o<t;o*=++e);o>t&&(o/=e--)}for(var i=[0];e;o/=e--)i[e]=Math.floor(t/o),t%=o;return i},i=function(t,e){Object.keys(e).forEach(function(n){Object.defineProperty(t,n,{value:e[n],configurable:"next"==n})})},r=function(t,e){Object.defineProperty(t,e,{writable:!0})},l=function(t){var e,n=[];for(this.init();e=this.next();)n.push(t?t(e):e);return this.init(),n},u={toArray:l,map:l,forEach:function(t){var e;for(this.init();e=this.next();)t(e);this.init()},filter:function(t){var e,n=[];for(this.init();e=this.next();)t(e)&&n.push(e);return this.init(),n},lazyMap:function(t){return this._lazyMap=t,this},lazyFilter:function(t){if(Object.defineProperty(this,"next",{writable:!0}),"function"!=typeof t)this.next=this._next;else{"function"!=typeof this._next&&(this._next=this.next);var e=this._next.bind(this);this.next=function(){for(var n;n=e();)if(t(n))return n;return n}.bind(this)}return Object.defineProperty(this,"next",{writable:!1}),this}},c=function(t,e){var n=1<<t.length,o=function(){return n},l=Object.create(t.slice(),{length:{get:o}});return r(l,"index"),i(l,{valueOf:o,init:function(){l.index=0},nth:function(t){if(!(t>=n)){for(var e=0,o=[];t;t>>>=1,e++)1&t&&o.push(this[e]);return"function"==typeof l._lazyMap?l._lazyMap(o):o}},next:function(){return this.nth(this.index++)}}),i(l,u),l.init(),"function"==typeof e?l.map(e):l},a=function(t){var e=t&-t,n=t+e;return n|((n&-n)/e>>1)-1},s=function(t,n,o){if(n||(n=t.length),n<1)throw new RangeError;if(n>t.length)throw new RangeError;var l=(1<<n)-1,c=e(t.length,n),s=1<<t.length,f=function(){return c},d=Object.create(t.slice(),{length:{get:f}});return r(d,"index"),i(d,{valueOf:f,init:function(){this.index=l},next:function(){if(!(this.index>=s)){for(var t=0,e=this.index,n=[];e;e>>>=1,t++)1&e&&(n[n.length]=this[t]);return this.index=a(this.index),"function"==typeof d._lazyMap?d._lazyMap(n):n}}}),i(d,u),d.init(),"function"==typeof o?d.map(o):d},f=function(t,e){var n=t,o=e,i=0;for(i=n.length-1;i>=0&&1==n[i];i--)o--;if(0==o){n[n.length]=1;for(var r=n.length-2;r>=0;r--)n[r]=r<e-1?1:0}else{for(var l=-1,u=-1,i=0;i<n.length;i++)if(0==n[i]&&-1!=l&&(u=i),1==n[i]&&(l=i),-1!=u&&-1!=l){n[u]=1,n[l]=0;break}o=e;for(var i=n.length-1;i>=l;i--)1==n[i]&&o--;for(var i=0;i<l;i++)n[i]=i<o?1:0}return n},d=function(t){for(var e=[],n=0;n<t;n++)e[n]=1;return e[0]=1,e},p=function(t,n,o){if(n||(n=t.length),n<1)throw new RangeError;if(n>t.length)throw new RangeError;var l=d(n),c=e(t.length,n),a=t.length,s=function(){return c},p=Object.create(t.slice(),{length:{get:s}});return r(p,"index"),i(p,{valueOf:s,init:function(){this.index=l.concat()},next:function(){if(!(this.index.length>a)){for(var t=0,e=this.index,o=[],i=0;i<e.length;i++,t++)e[i]&&(o[o.length]=this[t]);return f(this.index,n),"function"==typeof p._lazyMap?p._lazyMap(o):o}}}),i(p,u),p.init(),"function"==typeof o?p.map(o):p},h=function(t){var e=t.slice(),i=n(e.length);return e.index=0,e.next=function(){if(!(this.index>=i)){for(var t=this.slice(),n=o(this.index,this.length),r=[],l=this.length-1;l>=0;--l)r.push(t.splice(n[l],1)[0]);return this.index++,"function"==typeof e._lazyMap?e._lazyMap(r):r}},e},v=function(e,n,o){if(n||(n=e.length),n<1)throw new RangeError;if(n>e.length)throw new RangeError;var l=t(e.length,n),c=function(){return l},a=Object.create(e.slice(),{length:{get:c}});return r(a,"cmb"),r(a,"per"),i(a,{valueOf:function(){return l},init:function(){this.cmb=s(e,n),this.per=h(this.cmb.next())},next:function(){var t=this.per.next();if(!t){var e=this.cmb.next();if(!e)return;return this.per=h(e),this.next()}return"function"==typeof a._lazyMap?a._lazyMap(t):t}}),i(a,u),a.init(),"function"==typeof o?a.map(o):a},y=function(e){for(var n=0,o=1;o<=e;o++){n+=t(e,o)}return n},m=function(t,e){var n=y(t.length),o=function(){return n},l=Object.create(t.slice(),{length:{get:o}});return r(l,"cmb"),r(l,"per"),r(l,"nelem"),i(l,{valueOf:function(){return n},init:function(){this.nelem=1,this.cmb=s(t,this.nelem),this.per=h(this.cmb.next())},next:function(){var e=this.per.next();if(!e){var n=this.cmb.next();if(!n){if(++this.nelem>t.length)return;if(this.cmb=s(t,this.nelem),!(n=this.cmb.next()))return}return this.per=h(n),this.next()}return"function"==typeof l._lazyMap?l._lazyMap(e):e}}),i(l,u),l.init(),"function"==typeof e?l.map(e):l},w=Array.prototype.slice,_=function(){if(!arguments.length)throw new RangeError;var t=w.call(arguments),e=t.reduce(function(t,e){return t*e.length},1),n=function(){return e},o=t.length,l=Object.create(t,{length:{get:n}});if(!e)throw new RangeError;return r(l,"index"),i(l,{valueOf:n,dim:o,init:function(){this.index=0},get:function(){if(arguments.length===this.length){for(var t=[],e=0;e<o;e++){var n=arguments[e];if(n>=this[e].length)return;t.push(this[e][n])}return"function"==typeof l._lazyMap?l._lazyMap(t):t}},nth:function(t){for(var e=[],n=0;n<o;n++){var i=this[n].length,r=t%i;e.push(this[n][r]),t-=r,t/=i}return"function"==typeof l._lazyMap?l._lazyMap(e):e},next:function(){if(!(this.index>=e)){var t=this.nth(this.index);return this.index++,t}}}),i(l,u),l.init(),l},b=function(t,e,n){if(e||(e=t.length),e<1)throw new RangeError;var o=t.length,l=Math.pow(o,e),c=function(){return l},a=Object.create(t.slice(),{length:{get:c}});return r(a,"index"),i(a,{valueOf:c,init:function(){a.index=0},nth:function(n){if(!(n>=l)){for(var i=[],r=0;r<e;r++){var u=n%o;i.push(t[u]),n-=u,n/=o}return"function"==typeof a._lazyMap?a._lazyMap(i):i}},next:function(){return this.nth(this.index++)}}),i(a,u),a.init(),"function"==typeof n?a.map(n):a},g=Object.create(null);return i(g,{C:e,P:t,factorial:n,factoradic:o,cartesianProduct:_,combination:s,bigCombination:p,permutation:v,permutationCombination:m,power:c,baseN:b,VERSION:"0.5.2"}),g})},function(t,e,n){!function(e,n){t.exports=function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default")}catch(t){var o=function(t,e){var n,o;return e=e||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o=n.preventDefault,n.preventDefault=function(){o.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},n};o.prototype=window.Event.prototype,window.CustomEvent=o}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(0);var o={install:function(t){t.prototype.$throttle=o._throttle},_throttle:function(t,e,n){n=n||this.$el;var o=!1,i=function(t){o||(o=!0,window.requestAnimationFrame(function(){n.dispatchEvent(new window.CustomEvent(e,{detail:{origin:t}})),o=!1}))};return n.addEventListener(t,i),i}};e.default=o,"undefined"!=typeof window&&window.Vue&&window.Vue.use(o)}])}()}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n(0);var i=n(2),r=function(t){return t&&t.__esModule?t:{default:t}}(i),l=n(1).combination,u={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{globalTriggers:["resize","scroll"]};u._windowGroup=[],u._customGroups={},r.default._throttle("resize","vue-collision-window_rect_update",window),window.addEventListener("vue-collision-window_rect_update",u._updateWindowRect),window.dispatchEvent(new window.CustomEvent("vue-collision-window_rect_update"));var n=!0,i=!1,l=void 0;try{for(var c,a=e.globalTriggers[Symbol.iterator]();!(n=(c=a.next()).done);n=!0){var s=c.value;r.default._throttle(s,"vue-collision-"+s,window),window.addEventListener("vue-collision-"+s,u.checkAllGroups)}}catch(t){i=!0,l=t}finally{try{!n&&a.return&&a.return()}finally{if(i)throw l}}t.directive("collision",{bind:function(t,e,n){if(void 0===e.modifiers.prevent&&u._windowGroup.push(n.child),"object"===o(e.value)&&e.value.length){var i=!0,r=!1,l=void 0;try{for(var c,a=e.value[Symbol.iterator]();!(i=(c=a.next()).done);i=!0){var s=c.value;u._pushVnodeToGroup(n.child,s)}}catch(t){r=!0,l=t}finally{try{!i&&a.return&&a.return()}finally{if(r)throw l}}}n.child._collisionObject={windowGroup:void 0===e.modifiers.prevent,customGroupsList:"object"===o(e.value)?e.value:[],_lastRectangle:{width:void 0,height:void 0,top:void 0,left:void 0},_lastFrame:void 0},n.child._collisionObject._lastFrame=window.requestAnimationFrame(u._vnodeFrameCheck.bind(void 0,n))},updated:function(t,e,n,i){if(void 0===e.modifiers.prevent){var r=u._windowGroup.findIndex(function(t){return t===i.child});u._windowGroup[r]=n.child}if("object"===o(e.oldValue)&&e.oldValue.length){var l=e.oldValue.filter(function(t){return e.value.indexOf(t)<0}),c=!0,a=!1,s=void 0;try{for(var f,d=l[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var p=f.value;_removeVnodeFromGroup(i.child,p)}}catch(t){a=!0,s=t}finally{try{!c&&d.return&&d.return()}finally{if(a)throw s}}var h=e.value.filter(function(t){return e.oldValue.indexOf(t)<0}),v=!0,y=!1,m=void 0;try{for(var w,_=h[Symbol.iterator]();!(v=(w=_.next()).done);v=!0){var b=w.value;u._pushVnodeToGroup(n.child,b)}}catch(t){y=!0,m=t}finally{try{!v&&_.return&&_.return()}finally{if(y)throw m}}var g=e.value.filter(function(t){return e.oldValue.indexOf(t)>-1}),x=!0,E=!1,O=void 0;try{for(var j,G=g[Symbol.iterator]();!(x=(j=G.next()).done);x=!0){var C=j.value,S=u._customGroups[C].vnodes.findIndex(function(t){return t===i.child});u._customGroups[customGroup].vnodes[S]=n.child}}catch(t){E=!0,O=t}finally{try{!x&&G.return&&G.return()}finally{if(E)throw O}}(l.lenght>0||h.lenght>0||g.lenght>0)&&(u._customGroups[customGroup]._combinations=u._combine(u._customGroups[customGroup].vnodes))}n.child._collisionObject.customGroups="object"===o(e.value)?e.value:[],window.cancelAnimationFrame(n.child._collisionObject._lastFrame),n.child._collisionObject._lastFrame=window.requestAnimationFrame(u._vnodeFrameCheck.bind(void 0,n))},unbind:function(t,e,n){if("object"===o(e.value)&&e.oldValue.value){if(void 0===e.modifiers.prevent){var i=u._windowGroup.findIndex(function(t){return t===oldVNode.child});u._windowGroup.splice(i,1)}var r=!0,l=!1,c=void 0;try{for(var a,s=e.value[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var f=a.value;_removeVnodeFromGroup(n.child,f),u._customGroups[f]._combinations=u._combine(u._customGroups[f].vnodes)}}catch(t){l=!0,c=t}finally{try{!r&&s.return&&s.return()}finally{if(l)throw c}}}window.cancelAnimationFrame(n.child._collisionObject._lastFrame),delete n.child._collisionObject}}),t.mixin({mounted:function(){void 0!==this._collisionObject&&u.checkGroups(this._collisionObject.windowGroup?[this]:[],u._filterByGroups(this._collisionObject.customGroupsList))},updated:function(){void 0!==this._collisionObject&&u.checkGroups(this._collisionObject.windowGroup?[this]:[],u._filterByGroups(this._collisionObject.customGroupsList))}})},checkAllGroups:function(){u.checkGroups()},checkGroups:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u._windowGroup,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u._customGroups,n=!0,o=!1,i=void 0;try{for(var r,l=t[Symbol.iterator]();!(n=(r=l.next()).done);n=!0){var c=r.value;u._checkCollision(u._windowRect,c.$el.getBoundingClientRect())?c.$emit("collide",window):c.$emit("non-collide",window)}}catch(t){o=!0,i=t}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}var a=!0,s=!1,f=void 0;try{for(var d,p=Object.keys(e)[Symbol.iterator]();!(a=(d=p.next()).done);a=!0){var h=d.value,v=!0,y=!1,m=void 0;try{for(var w,_=e[h].combinations[Symbol.iterator]();!(v=(w=_.next()).done);v=!0){var b=w.value;u._checkCollision(b[0].$el.getBoundingClientRect(),b[1].$el.getBoundingClientRect())?(b[0].$emit("collide-"+h,b[1]),b[1].$emit("collide-"+h,b[0])):(b[0].$emit("non-collide-"+h,b[1]),b[1].$emit("non-collide-"+h,b[0]))}}catch(t){y=!0,m=t}finally{try{!v&&_.return&&_.return()}finally{if(y)throw m}}}}catch(t){s=!0,f=t}finally{try{!a&&p.return&&p.return()}finally{if(s)throw f}}},_updateWindowRect:function(){u._windowRect=u._getWindowRect()},_getWindowRect:function(){return{left:0,top:0,width:window.innerWidth,height:window.innerHeight}},_pushVnodeToGroup:function(t,e){u._customGroups.hasOwnProperty(e)||(u._customGroups[e]={vnodes:[],combinations:[]}),u._customGroups[e].vnodes.push(t),u._customGroups[e].combinations=u._combine(u._customGroups[e].vnodes)},_removeVnodeFromGroup:function(t,e){var n=u._customGroups[e].vnodes.findIndex(function(e){return e===t});u._customGroups[e].vnodes.splice(n,1),u._customGroups[e].combinations=u._combine(u._customGroups[e].vnodes)},_filterByGroups:function(t){var e=[],n=!0,o=!1,i=void 0;try{for(var r,l=t[Symbol.iterator]();!(n=(r=l.next()).done);n=!0){var c=r.value;e.push(u._customGroups[c])}}catch(t){o=!0,i=t}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}return e},_combine:function(t){var e=[];try{for(var n=l(t,2),o=void 0;o=n.next();)e.push(o)}catch(t){}return e},_checkCollision:function(t,e){return t.left<e.left+e.width&&t.left+t.width>e.left&&t.top<e.top+e.height&&t.height+t.top>e.top},_boxHasChanged:function(t,e){return t.top!==e.top||t.left!==e.left||t.width!==e.width||t.height!==e.height},_vnodeFrameCheck:function(t){var e=t.child._collisionObject._lastRectangle,n=t.child.$el.getBoundingClientRect();u._boxHasChanged(e,n)&&(u.checkGroups(t.child._collisionObject.windowGroup?[t.child]:[],u._filterByGroups(t.child._collisionObject.customGroupsList)),t.child._collisionObject._lastRectangle=n),t.child._collisionObject._lastFrame=window.requestAnimationFrame(u._vnodeFrameCheck.bind(void 0,t))}};e.default=u,"undefined"!=typeof window&&window.Vue&&window.Vue.use(u)}])})},function(t,e,n){n(15);var o=n(1)(n(7),n(13),null,null);t.exports=o.exports},function(t,e,n){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default")}catch(t){var o=function(t,e){var n,o;return e=e||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o=n.preventDefault,n.preventDefault=function(){o.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},n};o.prototype=window.Event.prototype,window.CustomEvent=o}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(0);var o={install:function(t){t.prototype.$throttle=o._throttle},_throttle:function(t,e,n){n=n||this.$el;var o=!1,i=function(t){o||(o=!0,window.requestAnimationFrame(function(){n.dispatchEvent(new window.CustomEvent(e,{detail:{origin:t}})),o=!1}))};return n.addEventListener(t,i),i}};e.default=o,"undefined"!=typeof window&&window.Vue&&window.Vue.use(o)}])})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(12),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={name:"waypoint",components:{WaypointCollider:i.default},data:function(){return{colliding:!1}},computed:{going:function(){return this.colliding?"in":"out"}},props:{active:{type:Boolean,default:!0},position:{type:String,default:void 0}},methods:{_vueWaypointHandle:function(t){this.colliding||(this.colliding=!0,this._emitWaypointEvent())},_vueWaypointHandleOff:function(t){this.colliding&&(this.colliding=!1,this._emitWaypointEvent())},_emitWaypointEvent:function(){this.active&&(this.$emit("waypoint-"+this.going,this.$el),this.$emit("waypoint",this.$scrollDirection(),this.going,this.$el))}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"waypoint-collider"}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),r=o(i),l=n(6),u=o(l),c=n(3),a=o(c),s=n(5),f=o(s),d={_scrollElement:window,_throttledHandler:void 0,install:function(t){t.use(u.default),t.use(r.default),t.prototype.$scrollDirection=function(){return a.default.updateScrollDirection(),a.default.getScrollDirection()},t.prototype.$unsetWaypointScrollElement=d._unsetWaypointScrollElement,t.prototype.$setWaypointScrollElement=d._setWaypointScrollElement,t.component("v-waypoint",f.default),d._setWaypointScrollElement(d._scrollElement)},_setWaypointScrollElement:function(t){d._unsetWaypointScrollElement(),d._scrollElement=t,a.default.setScrollElement(d._scrollElement),d._throttledHandler=u.default._throttle("scroll","v-waypoint-throttled-scroll",d._scrollElement),d._scrollElement.addEventListener("v-waypoint-throttled-scroll",d._scrollHandler)},_unsetWaypointScrollElement:function(){d._scrollElement.removeEventListener("scroll",d._throttledHandler),d._scrollElement.removeEventListener("v-waypoint-throttled-scroll",d._scrollHandler)},_scrollHandler:function(){a.default.updateScrollDirection()}};e.default=d,"undefined"!=typeof window&&window.Vue&&window.Vue.use(d)},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,".vue-waypoint__waypoint{width:100%;height:0;z-index:-1}.vue-waypoint__waypoint.fill{position:absolute;width:100%;height:100%}.vue-waypoint__waypoint.top{position:absolute;top:0}.vue-waypoint__waypoint.right{position:absolute;right:0}.vue-waypoint__waypoint.bottom{position:absolute;bottom:0}.vue-waypoint__waypoint.left{position:absolute;left:0}",""])},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,".vue-waypoint__waypoint__collider[data-v-b133cfae]{position:relative;width:100%;height:100%}",""])},function(t,e,n){n(16);var o=n(1)(n(8),n(14),"data-v-b133cfae",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-waypoint__waypoint",class:[t.position]},[t.active?n("waypoint-collider",{directives:[{name:"collision",rawName:"v-collision"}],on:{collide:t._vueWaypointHandle,"non-collide":t._vueWaypointHandleOff}}):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vue-waypoint__waypoint__collider"})},staticRenderFns:[]}},function(t,e,n){var o=n(10);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("1a21f992",o,!0)},function(t,e,n){var o=n(11);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("46f1732b",o,!0)},function(t,e){t.exports=function(t,e){for(var n=[],o={},i=0;i<e.length;i++){var r=e[i],l=r[0],u=r[1],c=r[2],a=r[3],s={id:t+":"+i,css:u,media:c,sourceMap:a};o[l]?o[l].parts.push(s):n.push(o[l]={id:l,parts:[s]})}return n}}])});