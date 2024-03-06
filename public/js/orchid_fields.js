(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,r,o,s,a=[],l=!0,c=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=o.call(n)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(t){c=!0,r=t}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,r(i.key),i)}}function r(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,n||"default");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:String(n)}function o(e,n,i){return n=a(n),function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(e,s()?Reflect.construct(n,i||[],a(e).constructor):n.apply(e,i))}function s(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(s=function(){return!!t})()}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}var c=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),o(this,n,arguments)}var r,s,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(n,window.Controller),r=n,(s=[{key:"connect",value:function(){var t=this.data.get("value"),n=this.element.querySelector(".js-range-slider");$(n).ionRangeSlider({onFinish:function(t){n.dispatchEvent(new Event("change"))}});var i=$(n).data("ionRangeSlider");if(null!==t){var r=e(t.split(";"),2),o=r[0],s=r[1];i.update({from:o,to:s})}}}])&&i(r.prototype,s),a&&i(r,a),Object.defineProperty(r,"prototype",{writable:!1}),n}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,f(i.key),i)}}function f(t){var e=function(t,e){if("object"!=u(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==u(e)?e:String(e)}function y(t,e,n){return e=d(e),function(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,p()?Reflect.construct(e,n||[],d(t).constructor):e.apply(t,n))}function p(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(p=function(){return!!t})()}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}var v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,e,arguments)}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(e,window.Controller),n=e,(i=[{key:"connect",value:function(){var t=this,e={max_value:this.data.get("count"),step_size:this.data.get("step"),readonly:this.data.get("readonly")};$(this.element.querySelector("div")).rate(e),$(this.element).on("change",(function(e,n){t.element.querySelector("input").value=n.to}))}}])&&h(n.prototype,i),r&&h(n,r),Object.defineProperty(n,"prototype",{writable:!1}),e}(),b="auto",g="zoom-in",w="zoom-out",_="grab",O="move";function S(t,e,n){var i={passive:!1};arguments.length>3&&void 0!==arguments[3]&&!arguments[3]?t.removeEventListener(e,n,i):t.addEventListener(e,n,i)}function j(t,e){if(t){var n=new Image;n.onload=function(){e&&e(n)},n.src=t}}function x(t){return t.dataset.original?t.dataset.original:"A"===t.parentNode.tagName?t.parentNode.getAttribute("href"):null}function P(t,e,n){!function(t){var e=C.transitionProp,n=C.transformProp;if(t.transition){var i=t.transition;delete t.transition,t[e]=i}if(t.transform){var r=t.transform;delete t.transform,t[n]=r}}(e);var i=t.style,r={};for(var o in e)n&&(r[o]=i[o]||""),i[o]=e[o];return r}var C={transitionProp:"transition",transEndEvent:"transitionend",transformProp:"transform",transformCssProp:"transform"},k=C.transformCssProp,E=C.transEndEvent,T=function(){},z={enableGrab:!0,preloadImage:!1,closeOnWindowResize:!0,transitionDuration:.4,transitionTimingFunction:"cubic-bezier(0.4, 0, 0, 1)",bgColor:"rgb(255, 255, 255)",bgOpacity:1,scaleBase:1,scaleExtra:.5,scrollThreshold:40,zIndex:998,customSize:null,onOpen:T,onClose:T,onGrab:T,onMove:T,onRelease:T,onBeforeOpen:T,onBeforeClose:T,onBeforeGrab:T,onBeforeRelease:T,onImageLoading:T,onImageLoaded:T},q={init:function(t){var e,n;e=this,n=t,Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((function(t){e[t]=e[t].bind(n)}))},click:function(t){if(t.preventDefault(),I(t))return window.open(this.target.srcOriginal||t.currentTarget.src,"_blank");this.shown?this.released?this.close():this.release():this.open(t.currentTarget)},scroll:function(){var t=document.documentElement||document.body.parentNode||document.body,e=window.pageXOffset||t.scrollLeft,n=window.pageYOffset||t.scrollTop;null===this.lastScrollPosition&&(this.lastScrollPosition={x:e,y:n});var i=this.lastScrollPosition.x-e,r=this.lastScrollPosition.y-n,o=this.options.scrollThreshold;(Math.abs(r)>=o||Math.abs(i)>=o)&&(this.lastScrollPosition=null,this.close())},keydown:function(t){(function(t){var e=t.key||t.code;return"Escape"===e||27===t.keyCode})(t)&&(this.released?this.close():this.release(this.close))},mousedown:function(t){if(A(t)&&!I(t)){t.preventDefault();var e=t.clientX,n=t.clientY;this.pressTimer=setTimeout(function(){this.grab(e,n)}.bind(this),200)}},mousemove:function(t){this.released||this.move(t.clientX,t.clientY)},mouseup:function(t){A(t)&&!I(t)&&(clearTimeout(this.pressTimer),this.released?this.close():this.release())},touchstart:function(t){t.preventDefault();var e=t.touches[0],n=e.clientX,i=e.clientY;this.pressTimer=setTimeout(function(){this.grab(n,i)}.bind(this),200)},touchmove:function(t){if(!this.released){var e=t.touches[0],n=e.clientX,i=e.clientY;this.move(n,i)}},touchend:function(t){(function(t){t.targetTouches.length})(t)||(clearTimeout(this.pressTimer),this.released?this.close():this.release())},clickOverlay:function(){this.close()},resizeWindow:function(){this.close()}};function A(t){return 0===t.button}function I(t){return t.metaKey||t.ctrlKey}var R={init:function(t){this.el=document.createElement("div"),this.instance=t,this.parent=document.body,P(this.el,{position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0}),this.updateStyle(t.options),S(this.el,"click",t.handler.clickOverlay.bind(t))},updateStyle:function(t){P(this.el,{zIndex:t.zIndex,backgroundColor:t.bgColor,transition:"opacity\n        "+t.transitionDuration+"s\n        "+t.transitionTimingFunction})},insert:function(){this.parent.appendChild(this.el)},remove:function(){this.parent.removeChild(this.el)},fadeIn:function(){this.el.offsetWidth,this.el.style.opacity=this.instance.options.bgOpacity},fadeOut:function(){this.el.style.opacity=0}},W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),D=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},L={init:function(t,e){this.el=t,this.instance=e,this.srcThumbnail=this.el.getAttribute("src"),this.srcset=this.el.getAttribute("srcset"),this.srcOriginal=x(this.el),this.rect=this.el.getBoundingClientRect(),this.translate=null,this.scale=null,this.styleOpen=null,this.styleClose=null},zoomIn:function(){var t=this.instance.options,e=t.zIndex,n=t.enableGrab,i=t.transitionDuration,r=t.transitionTimingFunction;this.translate=this.calculateTranslate(),this.scale=this.calculateScale(),this.styleOpen={position:"relative",zIndex:e+1,cursor:n?_:w,transition:k+"\n        "+i+"s\n        "+r,transform:"translate3d("+this.translate.x+"px, "+this.translate.y+"px, 0px)\n        scale("+this.scale.x+","+this.scale.y+")",height:this.rect.height+"px",width:this.rect.width+"px"},this.el.offsetWidth,this.styleClose=P(this.el,this.styleOpen,!0)},zoomOut:function(){this.el.offsetWidth,P(this.el,{transform:"none"})},grab:function(t,e,n){var i=N(),r=i.x-t,o=i.y-e;P(this.el,{cursor:O,transform:"translate3d(\n        "+(this.translate.x+r)+"px, "+(this.translate.y+o)+"px, 0px)\n        scale("+(this.scale.x+n)+","+(this.scale.y+n)+")"})},move:function(t,e,n){var i=N(),r=i.x-t,o=i.y-e;P(this.el,{transition:k,transform:"translate3d(\n        "+(this.translate.x+r)+"px, "+(this.translate.y+o)+"px, 0px)\n        scale("+(this.scale.x+n)+","+(this.scale.y+n)+")"})},restoreCloseStyle:function(){P(this.el,this.styleClose)},restoreOpenStyle:function(){P(this.el,this.styleOpen)},upgradeSource:function(){if(this.srcOriginal){var t=this.el.parentNode;this.srcset&&this.el.removeAttribute("srcset");var e=this.el.cloneNode(!1);e.setAttribute("src",this.srcOriginal),e.style.position="fixed",e.style.visibility="hidden",t.appendChild(e),setTimeout(function(){this.el.setAttribute("src",this.srcOriginal),t.removeChild(e)}.bind(this),50)}},downgradeSource:function(){this.srcOriginal&&(this.srcset&&this.el.setAttribute("srcset",this.srcset),this.el.setAttribute("src",this.srcThumbnail))},calculateTranslate:function(){var t=N(),e=this.rect.left+this.rect.width/2,n=this.rect.top+this.rect.height/2;return{x:t.x-e,y:t.y-n}},calculateScale:function(){var t=this.el.dataset,e=t.zoomingHeight,n=t.zoomingWidth,i=this.instance.options,r=i.customSize,o=i.scaleBase;if(!r&&e&&n)return{x:n/this.rect.width,y:e/this.rect.height};if(r&&"object"===(void 0===r?"undefined":W(r)))return{x:r.width/this.rect.width,y:r.height/this.rect.height};var s=this.rect.width/2,a=this.rect.height/2,l=N(),c={x:l.x-s,y:l.y-a},u=c.x/s,h=c.y/a,f=o+Math.min(u,h);if(r&&"string"==typeof r){var y=n||this.el.naturalWidth,p=e||this.el.naturalHeight,d=parseFloat(r)*y/(100*this.rect.width),m=parseFloat(r)*p/(100*this.rect.height);if(f>d||f>m)return{x:d,y:m}}return{x:f,y:f}}};function N(){var t=document.documentElement;return{x:Math.min(t.clientWidth,window.innerWidth)/2,y:Math.min(t.clientHeight,window.innerHeight)/2}}function M(t,e,n){["mousedown","mousemove","mouseup","touchstart","touchmove","touchend"].forEach((function(i){S(t,i,e[i],n)}))}const V=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.target=Object.create(L),this.overlay=Object.create(R),this.handler=Object.create(q),this.body=document.body,this.shown=!1,this.lock=!1,this.released=!0,this.lastScrollPosition=null,this.pressTimer=null,this.options=D({},z,e),this.overlay.init(this),this.handler.init(this)}return B(t,[{key:"listen",value:function(t){if("string"==typeof t)for(var e=document.querySelectorAll(t),n=e.length;n--;)this.listen(e[n]);else"IMG"===t.tagName&&(t.style.cursor=g,S(t,"click",this.handler.click),this.options.preloadImage&&j(x(t)));return this}},{key:"config",value:function(t){return t?(D(this.options,t),this.overlay.updateStyle(this.options),this):this.options}},{key:"open",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.onOpen;if(!this.shown&&!this.lock){var i="string"==typeof t?document.querySelector(t):t;if("IMG"===i.tagName){if(this.options.onBeforeOpen(i),this.target.init(i,this),!this.options.preloadImage){var r=this.target.srcOriginal;null!=r&&(this.options.onImageLoading(i),j(r,this.options.onImageLoaded))}return this.shown=!0,this.lock=!0,this.target.zoomIn(),this.overlay.insert(),this.overlay.fadeIn(),S(document,"scroll",this.handler.scroll),S(document,"keydown",this.handler.keydown),this.options.closeOnWindowResize&&S(window,"resize",this.handler.resizeWindow),S(i,E,(function t(){S(i,E,t,!1),e.lock=!1,e.target.upgradeSource(),e.options.enableGrab&&M(document,e.handler,!0),n(i)})),this}}}},{key:"close",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.onClose;if(this.shown&&!this.lock){var n=this.target.el;return this.options.onBeforeClose(n),this.lock=!0,this.body.style.cursor=b,this.overlay.fadeOut(),this.target.zoomOut(),S(document,"scroll",this.handler.scroll,!1),S(document,"keydown",this.handler.keydown,!1),this.options.closeOnWindowResize&&S(window,"resize",this.handler.resizeWindow,!1),S(n,E,(function i(){S(n,E,i,!1),t.shown=!1,t.lock=!1,t.target.downgradeSource(),t.options.enableGrab&&M(document,t.handler,!1),t.target.restoreCloseStyle(),t.overlay.remove(),e(n)})),this}}},{key:"grab",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.options.scaleExtra,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.options.onGrab;if(this.shown&&!this.lock){var r=this.target.el;return this.options.onBeforeGrab(r),this.released=!1,this.target.grab(t,e,n),S(r,E,(function t(){S(r,E,t,!1),i(r)})),this}}},{key:"move",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.options.scaleExtra,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.options.onMove;if(this.shown&&!this.lock){this.released=!1,this.body.style.cursor=O,this.target.move(t,e,n);var r=this.target.el;return S(r,E,(function t(){S(r,E,t,!1),i(r)})),this}}},{key:"release",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.onRelease;if(this.shown&&!this.lock){var n=this.target.el;return this.options.onBeforeRelease(n),this.lock=!0,this.body.style.cursor=b,this.target.restoreOpenStyle(),S(n,E,(function i(){S(n,E,i,!1),t.lock=!1,t.released=!0,e(n)})),this}}}]),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function G(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,X(i.key),i)}}function X(t){var e=function(t,e){if("object"!=F(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=F(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==F(e)?e:String(e)}function H(t,e,n){return e=J(e),function(t,e){if(e&&("object"===F(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Y()?Reflect.construct(e,n||[],J(t).constructor):e.apply(t,n))}function Y(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Y=function(){return!!t})()}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}function K(t,e){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},K(t,e)}var Q=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),H(this,e,arguments)}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&K(t,e)}(e,window.Controller),n=e,(i=[{key:"connect",value:function(){new V({onBeforeOpen:function(){var t=document.querySelector(".table-responsive"),e=document.querySelector(".table"),n=document.querySelector("#post-form"),i=null!==e,r=null!==n;null!==t&&(document.querySelector(".table-responsive").style.overflowX="visible"),i&&(e.style.overflow="visible"),r&&n.classList.remove("overflow-hidden")},onClose:function(){var t=document.querySelector(".table-responsive"),e=document.querySelector(".table"),n=document.querySelector("#post-form"),i=null!==e,r=null!==n;null!==t&&(document.querySelector(".table-responsive").style.overflowX="auto"),i&&(e.style.overflow="hidden"),r&&n.classList.add("overflow-hidden")},customSize:this.data.get("zoompercent")||"100%"}).listen(this.element.querySelector(".image-zoom"))}}])&&G(n.prototype,i),r&&G(n,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function Z(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,tt(i.key),i)}}function tt(t){var e=function(t,e){if("object"!=U(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=U(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==U(e)?e:String(e)}function et(t,e,n){return e=it(e),function(t,e){if(e&&("object"===U(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,nt()?Reflect.construct(e,n||[],it(t).constructor):e.apply(t,n))}function nt(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(nt=function(){return!!t})()}function it(t){return it=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},it(t)}function rt(t,e){return rt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},rt(t,e)}var ot=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),et(this,e,arguments)}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&rt(t,e)}(e,window.Controller),n=e,(i=[{key:"connect",value:function(){var t=this,e=this.element.querySelector("audio");$(e).on("ended",(function(e){var n=$(t.element.querySelector(".control-play")),i=$(t.element.querySelector(".control-pause"));n.removeClass("d-none"),i.addClass("d-none")}))}},{key:"audio_play_pause",value:function(){var t=this.element.querySelector("audio"),e=$(this.element.querySelector("button")),n=e.find(".control-play"),i=e.find(".control-pause");t.paused?(n.addClass("d-none"),i.removeClass("d-none"),t.play()):t.played&&(n.removeClass("d-none"),i.addClass("d-none"),t.pause())}}])&&Z(n.prototype,i),r&&Z(n,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function st(t){return st="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},st(t)}function at(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,lt(i.key),i)}}function lt(t){var e=function(t,e){if("object"!=st(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=st(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==st(e)?e:String(e)}function ct(t,e,n){return e=ht(e),function(t,e){if(e&&("object"===st(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,ut()?Reflect.construct(e,n||[],ht(t).constructor):e.apply(t,n))}function ut(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(ut=function(){return!!t})()}function ht(t){return ht=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ht(t)}function ft(t,e){return ft=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},ft(t,e)}var yt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),ct(this,e,arguments)}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ft(t,e)}(e,window.Controller),n=e,(i=[{key:"initialize",value:function(){var t=JSON.parse(localStorage.getItem(this.slug));this.hiddenColumns=t||[]}},{key:"connect",value:function(){this.allowDefaultHidden(),this.renderColumn();var t=function t(e,n){var i=$(n),r=i.data("id"),o=e.find('tr[data-parent="'+r+'"]');o.length&&(o.each((function(n,i){t(e,i)})),i.find(".bi-caret-down-fill").removeClass("bi-caret-down-fill").addClass("bi-caret-right-fill"),o.hide())};null!==this.element.querySelector(".dropdown-column-menu")&&this.element.querySelector(".dropdown-column-menu").addEventListener("click",(function(t){t.stopPropagation()}));var e=$(".tree-table");e.find("tr").each((function(n,i){var r=$(i),o=r.data("level"),s=r.data("id"),a=r.find('td[data-column="tree-level"]'),l=e.find('tr[data-parent="'+s+'"]');if(l.length){var c=a.children(":first").addClass("bi-caret-right-fill");l.hide(),c.on("click",(function(n){var i=$(n.target);if(i.hasClass("bi-caret-right-fill")){i.removeClass("bi-caret-right-fill").addClass("bi-caret-down-fill");var o=parseInt(l.prev().children().eq(0).css("padding-left"))+10;l.children(":first").attr("style","padding-left:"+o+"px!important"),l.show()}else i.removeClass("bi-caret-down-fill").addClass("bi-caret-right-fill"),t(e,r)}))}a.prepend('<span class="treegrid-indent" style="width:'+15*o+'px"></span>')}))}},{key:"allowDefaultHidden",value:function(){var t=this;null===localStorage.getItem(this.slug)&&this.element.querySelectorAll('input[data-default-hidden="true"]').forEach((function(e){t.hideColumn(e.dataset.column)}))}},{key:"toggleColumn",value:function(t){var e=t.target.dataset.column;this.hiddenColumns.includes(e)?this.showColumn(e):this.hideColumn(e);var n=JSON.stringify(this.hiddenColumns);this.renderColumn(),localStorage.setItem(this.slug,n)}},{key:"showColumn",value:function(t){this.hiddenColumns=this.hiddenColumns.filter((function(e){return e!==t}))}},{key:"hideColumn",value:function(t){this.hiddenColumns.push(t)}},{key:"renderColumn",value:function(){this.element.querySelectorAll("td[data-column], th[data-column]").forEach((function(t){t.style.display=""}));var t=this.hiddenColumns.map((function(t){return'td[data - column = "'.concat(t,'"],\n            th[data - column = "').concat(t,'"]')})).join();if(!(t.length<1)){this.element.querySelectorAll(t).forEach((function(t){t.style.display="none"}));var e=this.hiddenColumns.map((function(t){return'input[data - column = "'.concat(t,'"]')})).join();this.element.querySelectorAll(e).forEach((function(t){t.checked=!1}))}}},{key:"slug",get:function(){return this.data.get("slug")}}])&&at(n.prototype,i),r&&at(n,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();application.register("range",c),application.register("rate",v),application.register("image-zoom",Q),application.register("audio",ot),application.register("table-tree",yt)})(),(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}!function(e,n){function i(t,n){this.element=t,this.settings=e.extend({},e.fn.rate.settings,n),this.set_faces={},this.build()}e.fn.textWidth=function(){var t=e("<span>"+e(this).html()+"</span>");t.css("font-size",e(this).css("font-size")).hide(),t.prependTo("body");var n=t.width();if(t.remove(),0==n){var i=0;return e(this).eq(0).children().each((function(){i+=e(this).textWidth()})),i}return n},e.fn.textHeight=function(){var t=e("<span>"+e(this).html()+"</span>");t.css("font-size",e(this).css("font-size")).hide(),t.prependTo("body");var n=t.height();return t.remove(),n},Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},String.prototype.getCodePointLength=function(){return this.length-this.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length+1},String.fromCodePoint=function(){for(var t=Array.prototype.slice.call(arguments),e=t.length;e-- >0;){var n=t[e]-65536;n>=0&&t.splice(e,1,55296+(n>>10),56320+(1023&n))}return String.fromCharCode.apply(null,t)},e.fn.rate=function(n){if(void 0===n||"object"===t(n))return this.each((function(){e.data(this,"rate")||e.data(this,"rate",new i(this,n))}));if("string"==typeof n){var r,o=arguments;return this.each((function(){var t=e.data(this,"rate");t instanceof i&&"function"==typeof t[n]&&(r=t[n].apply(t,Array.prototype.slice.call(o,1))),"destroy"===n&&(e(t.element).off(),e.data(this,"rate",null))})),void 0!==r?r:this}},i.prototype.build=function(){this.layers={},this.value=0,this.raise_select_layer=!1,this.settings.initial_value&&(this.value=this.settings.initial_value),e(this.element).attr("data-rate-value")&&(this.value=e(this.element).attr("data-rate-value"));var t=this.value/this.settings.max_value*100;if("string"==typeof this.settings.symbols[this.settings.selected_symbol_type]){var n=this.settings.symbols[this.settings.selected_symbol_type];this.settings.symbols[this.settings.selected_symbol_type]={},this.settings.symbols[this.settings.selected_symbol_type].base=n,this.settings.symbols[this.settings.selected_symbol_type].selected=n,this.settings.symbols[this.settings.selected_symbol_type].hover=n}var i=this.addLayer("base-layer",100,this.settings.symbols[this.settings.selected_symbol_type].base,!0),r=this.addLayer("select-layer",t,this.settings.symbols[this.settings.selected_symbol_type].selected,!0),o=this.addLayer("hover-layer",0,this.settings.symbols[this.settings.selected_symbol_type].hover,!1);this.layers.base_layer=i,this.layers.select_layer=r,this.layers.hover_layer=o,e(this.element).on("mousemove",e.proxy(this.hover,this)),e(this.element).on("click",e.proxy(this.select,this)),e(this.element).on("mouseleave",e.proxy(this.mouseout,this)),e(this.element).css({"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),this.settings.hasOwnProperty("update_input_field_name")&&this.settings.update_input_field_name.val(this.value)},i.prototype.addLayer=function(t,n,i,r){for(var o="<div>",s=0;s<this.settings.max_value;s++)Array.isArray(i)?(this.settings.convert_to_utf8&&(i[s]=String.fromCodePoint(i[s])),o+="<span>"+i[s]+"</span>"):(this.settings.convert_to_utf8&&(i=String.fromCodePoint(i)),o+="<span>"+i+"</span>");var a=e(o+="</div>").addClass("rate-"+t).appendTo(this.element);return e(a).css({width:n+"%",height:e(a).children().eq(0).textHeight(),overflow:"hidden",position:"absolute",top:0,display:r?"block":"none","white-space":"nowrap"}),e(this.element).css({width:e(a).textWidth()+"px",height:e(a).height(),position:"relative",cursor:this.settings.cursor}),a},i.prototype.updateServer=function(){null!=this.settings.url&&e.ajax({url:this.settings.url,type:this.settings.ajax_method,data:e.extend({},{value:this.getValue()},this.settings.additional_data),success:e.proxy((function(t){e(this.element).trigger("updateSuccess",[t])}),this),error:e.proxy((function(t,n,i){e(this.element).trigger("updateError",[t,n,i])}),this)})},i.prototype.getValue=function(){return this.value},i.prototype.hover=function(t){var n=parseInt(e(this.element).css("padding-left").replace("px","")),i=t.pageX-e(this.element).offset().left-n,r=this.toValue(i,!0);if(r!=this.value&&(this.raise_select_layer=!1),!this.raise_select_layer&&!this.settings.readonly){var o=this.toWidth(r);if(this.layers.select_layer.css({display:"none"}),this.settings.only_select_one_symbol){var s=Math.floor(r);this.layers.hover_layer.css({width:"100%",display:"block"}),this.layers.hover_layer.children("span").css({visibility:"hidden"}),this.layers.hover_layer.children("span").eq(0!=s?s-1:0).css({visibility:"visible"})}else this.layers.hover_layer.css({width:o+"%",display:"block"})}},i.prototype.select=function(t){if(!this.settings.readonly){this.getValue();var n=parseInt(e(this.element).css("padding-left").replace("px","")),i=t.pageX-e(this.element).offset().left-n,r=this.toWidth(this.toValue(i,!0));this.setValue(this.toValue(r)),this.raise_select_layer=!0}},i.prototype.mouseout=function(){this.layers.hover_layer.css({display:"none"}),this.layers.select_layer.css({display:"block"})},i.prototype.toWidth=function(t){return t/this.settings.max_value*100},i.prototype.toValue=function(t,e){var n,i=(n=e?t/this.layers.base_layer.textWidth()*this.settings.max_value:t/100*this.settings.max_value)/this.settings.step_size;return i-Math.floor(i)<5e-5&&(n=Math.round(n/this.settings.step_size)*this.settings.step_size),n=(n=Math.ceil(n/this.settings.step_size)*this.settings.step_size)>this.settings.max_value?this.settings.max_value:n},i.prototype.getElement=function(t,n){return e(this.element).find(".rate-"+t+" span").eq(n-1)},i.prototype.getLayers=function(){return this.layers},i.prototype.setFace=function(t,e){this.set_faces[t]=e},i.prototype.setAdditionalData=function(t){this.settings.additional_data=t},i.prototype.getAdditionalData=function(){return this.settings.additional_data},i.prototype.removeFace=function(t){delete this.set_faces[t]},i.prototype.setValue=function(t){if(!this.settings.readonly){t<0?t=0:t>this.settings.max_value&&(t=this.settings.max_value);var n=this.getValue();this.value=t,e(this.element).trigger("change",{from:n,to:this.value}),e(this.element).find(".rate-face").remove(),e(this.element).find("span").css({visibility:"visible"});var i=Math.ceil(this.value);if(this.set_faces.hasOwnProperty(i)){var r="<div>"+this.set_faces[i]+"</div>",o=this.getElement("base-layer",i),s=this.getElement("select-layer",i),a=this.getElement("hover-layer",i),l=o.textWidth()*(i-1)+(o.textWidth()-e(r).textWidth())/2;e(r).appendTo(this.element).css({display:"inline-block",position:"absolute",left:l}).addClass("rate-face"),o.css({visibility:"hidden"}),s.css({visibility:"hidden"}),a.css({visibility:"hidden"})}if(this.settings.only_select_one_symbol)c=this.toWidth(this.settings.max_value),this.layers.select_layer.css({display:"block",width:c+"%",height:this.layers.base_layer.css("height")}),this.layers.hover_layer.css({display:"none",height:this.layers.base_layer.css("height")}),this.layers.select_layer.children("span").css({visibility:"hidden"}),this.layers.select_layer.children("span").eq(0!=i?i-1:0).css({visibility:"visible"});else{var c=this.toWidth(this.value);this.layers.select_layer.css({display:"block",width:c+"%",height:this.layers.base_layer.css("height")}),this.layers.hover_layer.css({display:"none",height:this.layers.base_layer.css("height")})}e(this.element).attr("data-rate-value",this.value),this.settings.change_once&&(this.settings.readonly=!0),this.updateServer(),e(this.element).trigger("afterChange",{from:n,to:this.value}),this.settings.hasOwnProperty("update_input_field_name")&&this.settings.update_input_field_name.val(this.value)}},i.prototype.increment=function(){this.setValue(this.getValue()+this.settings.step_size)},i.prototype.decrement=function(){this.setValue(this.getValue()-this.settings.step_size)},e.fn.rate.settings={max_value:5,step_size:.5,initial_value:0,symbols:{utf8_star:{base:"☆",hover:"★",selected:"★"},utf8_hexagon:{base:"⬡",hover:"⬢",selected:"⬢"},hearts:"&hearts;",fontawesome_beer:'<i class="fas fa-beer"></i>',fontawesome_star:{base:'<i class="far fa-star"></i>',hover:'<i class="fas fa-star"></i>',selected:'<i class="fas fa-star"></i>'},utf8_emoticons:{base:[128549,128531,128530,128516],hover:[128549,128531,128530,128516],selected:[128549,128531,128530,128516]}},selected_symbol_type:"utf8_star",convert_to_utf8:!1,cursor:"default",readonly:!1,change_once:!1,only_select_one_symbol:!1,ajax_method:"POST",additional_data:{}}}(jQuery,window)})();