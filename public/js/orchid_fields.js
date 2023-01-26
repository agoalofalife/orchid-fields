(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var n,s,r,o,a=[],l=!0,c=!1;try{if(r=(i=i.call(t)).next,0===e){if(Object(i)!==i)return;l=!1}else for(;!(l=(n=r.call(i)).done)&&(a.push(n.value),a.length!==e);l=!0);}catch(t){c=!0,s=t}finally{try{if(!l&&null!=i.return&&(o=i.return(),Object(o)!==o))return}finally{if(c)throw s}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(e,i){for(var n=0;n<i.length;n++){var s=i[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,(r=s.key,o=void 0,o=function(e,i){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,i||"default");if("object"!==t(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(r,"string"),"symbol"===t(o)?o:String(o)),s)}var r,o}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=l(t);if(e){var s=l(this).constructor;i=Reflect.construct(n,arguments,s)}else i=n.apply(this,arguments);return a(this,i)}}function a(e,i){if(i&&("object"===t(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}(h,window.Controller);var i,a,l,c=o(h);function h(){return n(this,h),c.apply(this,arguments)}return i=h,(a=[{key:"connect",value:function(){var t=this.data.get("value"),i=this.element.querySelector(".js-range-slider");$(i).ionRangeSlider({onFinish:function(t){i.dispatchEvent(new Event("change"))}});var n=$(i).data("ionRangeSlider");if(null!==t){var s=e(t.split(";"),2),r=s[0],o=s[1];n.update({from:r,to:o})}}}])&&s(i.prototype,a),l&&s(i,l),Object.defineProperty(i,"prototype",{writable:!1}),h}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(s=n.key,r=void 0,r=function(t,e){if("object"!==h(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(s,"string"),"symbol"===h(r)?r:String(r)),n)}var s,r}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=v(t);if(e){var s=v(this).constructor;i=Reflect.construct(n,arguments,s)}else i=n.apply(this,arguments);return d(this,i)}}function d(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(r,window.Controller);var e,i,n,s=p(r);function r(){return u(this,r),s.apply(this,arguments)}return e=r,(i=[{key:"connect",value:function(){var t=this,e={max_value:this.data.get("count"),step_size:this.data.get("step"),readonly:this.data.get("readonly")};$(this.element.querySelector("div")).rate(e),$(this.element).on("change",(function(e,i){t.element.querySelector("input").value=i.to}))}}])&&f(e.prototype,i),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),r}(),b="auto",g="zoom-in",_="zoom-out",w="grab",O="move";function S(t,e,i){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s={passive:!1};n?t.addEventListener(e,i,s):t.removeEventListener(e,i,s)}function x(t,e){if(t){var i=new Image;i.onload=function(){e&&e(i)},i.src=t}}function j(t){return t.dataset.original?t.dataset.original:"A"===t.parentNode.tagName?t.parentNode.getAttribute("href"):null}function k(t,e,i){!function(t){var e=P,i=z;if(t.transition){var n=t.transition;delete t.transition,t[e]=n}if(t.transform){var s=t.transform;delete t.transform,t[i]=s}}(e);var n=t.style,s={};for(var r in e)i&&(s[r]=n[r]||""),n[r]=e[r];return s}var P="transition",z="transform",T="transform",C="transitionend",E=function(){},R={enableGrab:!0,preloadImage:!1,closeOnWindowResize:!0,transitionDuration:.4,transitionTimingFunction:"cubic-bezier(0.4, 0, 0, 1)",bgColor:"rgb(255, 255, 255)",bgOpacity:1,scaleBase:1,scaleExtra:.5,scrollThreshold:40,zIndex:998,customSize:null,onOpen:E,onClose:E,onGrab:E,onMove:E,onRelease:E,onBeforeOpen:E,onBeforeClose:E,onBeforeGrab:E,onBeforeRelease:E,onImageLoading:E,onImageLoaded:E},A={init:function(t){var e,i;e=this,i=t,Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((function(t){e[t]=e[t].bind(i)}))},click:function(t){if(t.preventDefault(),I(t))return window.open(this.target.srcOriginal||t.currentTarget.src,"_blank");this.shown?this.released?this.close():this.release():this.open(t.currentTarget)},scroll:function(){var t=document.documentElement||document.body.parentNode||document.body,e=window.pageXOffset||t.scrollLeft,i=window.pageYOffset||t.scrollTop;null===this.lastScrollPosition&&(this.lastScrollPosition={x:e,y:i});var n=this.lastScrollPosition.x-e,s=this.lastScrollPosition.y-i,r=this.options.scrollThreshold;(Math.abs(s)>=r||Math.abs(n)>=r)&&(this.lastScrollPosition=null,this.close())},keydown:function(t){(function(t){var e=t.key||t.code;return"Escape"===e||27===t.keyCode})(t)&&(this.released?this.close():this.release(this.close))},mousedown:function(t){if(W(t)&&!I(t)){t.preventDefault();var e=t.clientX,i=t.clientY;this.pressTimer=setTimeout(function(){this.grab(e,i)}.bind(this),200)}},mousemove:function(t){this.released||this.move(t.clientX,t.clientY)},mouseup:function(t){W(t)&&!I(t)&&(clearTimeout(this.pressTimer),this.released?this.close():this.release())},touchstart:function(t){t.preventDefault();var e=t.touches[0],i=e.clientX,n=e.clientY;this.pressTimer=setTimeout(function(){this.grab(i,n)}.bind(this),200)},touchmove:function(t){if(!this.released){var e=t.touches[0],i=e.clientX,n=e.clientY;this.move(i,n)}},touchend:function(t){(function(t){t.targetTouches.length})(t)||(clearTimeout(this.pressTimer),this.released?this.close():this.release())},clickOverlay:function(){this.close()},resizeWindow:function(){this.close()}};function W(t){return 0===t.button}function I(t){return t.metaKey||t.ctrlKey}var B={init:function(t){this.el=document.createElement("div"),this.instance=t,this.parent=document.body,k(this.el,{position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0}),this.updateStyle(t.options),S(this.el,"click",t.handler.clickOverlay.bind(t))},updateStyle:function(t){k(this.el,{zIndex:t.zIndex,backgroundColor:t.bgColor,transition:"opacity\n        "+t.transitionDuration+"s\n        "+t.transitionTimingFunction})},insert:function(){this.parent.appendChild(this.el)},remove:function(){this.parent.removeChild(this.el)},fadeIn:function(){this.el.offsetWidth,this.el.style.opacity=this.instance.options.bgOpacity},fadeOut:function(){this.el.style.opacity=0}},q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},V={init:function(t,e){this.el=t,this.instance=e,this.srcThumbnail=this.el.getAttribute("src"),this.srcset=this.el.getAttribute("srcset"),this.srcOriginal=j(this.el),this.rect=this.el.getBoundingClientRect(),this.translate=null,this.scale=null,this.styleOpen=null,this.styleClose=null},zoomIn:function(){var t=this.instance.options,e=t.zIndex,i=t.enableGrab,n=t.transitionDuration,s=t.transitionTimingFunction;this.translate=this.calculateTranslate(),this.scale=this.calculateScale(),this.styleOpen={position:"relative",zIndex:e+1,cursor:i?w:_,transition:T+"\n        "+n+"s\n        "+s,transform:"translate3d("+this.translate.x+"px, "+this.translate.y+"px, 0px)\n        scale("+this.scale.x+","+this.scale.y+")",height:this.rect.height+"px",width:this.rect.width+"px"},this.el.offsetWidth,this.styleClose=k(this.el,this.styleOpen,!0)},zoomOut:function(){this.el.offsetWidth,k(this.el,{transform:"none"})},grab:function(t,e,i){var n=F(),s=n.x-t,r=n.y-e;k(this.el,{cursor:O,transform:"translate3d(\n        "+(this.translate.x+s)+"px, "+(this.translate.y+r)+"px, 0px)\n        scale("+(this.scale.x+i)+","+(this.scale.y+i)+")"})},move:function(t,e,i){var n=F(),s=n.x-t,r=n.y-e;k(this.el,{transition:T,transform:"translate3d(\n        "+(this.translate.x+s)+"px, "+(this.translate.y+r)+"px, 0px)\n        scale("+(this.scale.x+i)+","+(this.scale.y+i)+")"})},restoreCloseStyle:function(){k(this.el,this.styleClose)},restoreOpenStyle:function(){k(this.el,this.styleOpen)},upgradeSource:function(){if(this.srcOriginal){var t=this.el.parentNode;this.srcset&&this.el.removeAttribute("srcset");var e=this.el.cloneNode(!1);e.setAttribute("src",this.srcOriginal),e.style.position="fixed",e.style.visibility="hidden",t.appendChild(e),setTimeout(function(){this.el.setAttribute("src",this.srcOriginal),t.removeChild(e)}.bind(this),50)}},downgradeSource:function(){this.srcOriginal&&(this.srcset&&this.el.setAttribute("srcset",this.srcset),this.el.setAttribute("src",this.srcThumbnail))},calculateTranslate:function(){var t=F(),e=this.rect.left+this.rect.width/2,i=this.rect.top+this.rect.height/2;return{x:t.x-e,y:t.y-i}},calculateScale:function(){var t=this.el.dataset,e=t.zoomingHeight,i=t.zoomingWidth,n=this.instance.options,s=n.customSize,r=n.scaleBase;if(!s&&e&&i)return{x:i/this.rect.width,y:e/this.rect.height};if(s&&"object"===(void 0===s?"undefined":q(s)))return{x:s.width/this.rect.width,y:s.height/this.rect.height};var o=this.rect.width/2,a=this.rect.height/2,l=F(),c={x:l.x-o,y:l.y-a},h=c.x/o,u=c.y/a,f=r+Math.min(h,u);if(s&&"string"==typeof s){var y=i||this.el.naturalWidth,p=e||this.el.naturalHeight,d=parseFloat(s)*y/(100*this.rect.width),v=parseFloat(s)*p/(100*this.rect.height);if(f>d||f>v)return{x:d,y:v}}return{x:f,y:f}}};function F(){var t=document.documentElement;return{x:Math.min(t.clientWidth,window.innerWidth)/2,y:Math.min(t.clientHeight,window.innerHeight)/2}}function L(t,e,i){["mousedown","mousemove","mouseup","touchstart","touchmove","touchend"].forEach((function(n){S(t,n,e[n],i)}))}const N=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.target=Object.create(V),this.overlay=Object.create(B),this.handler=Object.create(A),this.body=document.body,this.shown=!1,this.lock=!1,this.released=!0,this.lastScrollPosition=null,this.pressTimer=null,this.options=M({},R,e),this.overlay.init(this),this.handler.init(this)}return D(t,[{key:"listen",value:function(t){if("string"==typeof t)for(var e=document.querySelectorAll(t),i=e.length;i--;)this.listen(e[i]);else"IMG"===t.tagName&&(t.style.cursor=g,S(t,"click",this.handler.click),this.options.preloadImage&&x(j(t)));return this}},{key:"config",value:function(t){return t?(M(this.options,t),this.overlay.updateStyle(this.options),this):this.options}},{key:"open",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.onOpen;if(!this.shown&&!this.lock){var n="string"==typeof t?document.querySelector(t):t;if("IMG"===n.tagName){if(this.options.onBeforeOpen(n),this.target.init(n,this),!this.options.preloadImage){var s=this.target.srcOriginal;null!=s&&(this.options.onImageLoading(n),x(s,this.options.onImageLoaded))}this.shown=!0,this.lock=!0,this.target.zoomIn(),this.overlay.insert(),this.overlay.fadeIn(),S(document,"scroll",this.handler.scroll),S(document,"keydown",this.handler.keydown),this.options.closeOnWindowResize&&S(window,"resize",this.handler.resizeWindow);var r=function t(){S(n,C,t,!1),e.lock=!1,e.target.upgradeSource(),e.options.enableGrab&&L(document,e.handler,!0),i(n)};return S(n,C,r),this}}}},{key:"close",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.onClose;if(this.shown&&!this.lock){var i=this.target.el;this.options.onBeforeClose(i),this.lock=!0,this.body.style.cursor=b,this.overlay.fadeOut(),this.target.zoomOut(),S(document,"scroll",this.handler.scroll,!1),S(document,"keydown",this.handler.keydown,!1),this.options.closeOnWindowResize&&S(window,"resize",this.handler.resizeWindow,!1);var n=function n(){S(i,C,n,!1),t.shown=!1,t.lock=!1,t.target.downgradeSource(),t.options.enableGrab&&L(document,t.handler,!1),t.target.restoreCloseStyle(),t.overlay.remove(),e(i)};return S(i,C,n),this}}},{key:"grab",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.options.scaleExtra,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.options.onGrab;if(this.shown&&!this.lock){var s=this.target.el;this.options.onBeforeGrab(s),this.released=!1,this.target.grab(t,e,i);var r=function t(){S(s,C,t,!1),n(s)};return S(s,C,r),this}}},{key:"move",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.options.scaleExtra,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.options.onMove;if(this.shown&&!this.lock){this.released=!1,this.body.style.cursor=O,this.target.move(t,e,i);var s=this.target.el,r=function t(){S(s,C,t,!1),n(s)};return S(s,C,r),this}}},{key:"release",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.onRelease;if(this.shown&&!this.lock){var i=this.target.el;this.options.onBeforeRelease(i),this.lock=!0,this.body.style.cursor=b,this.target.restoreOpenStyle();var n=function n(){S(i,C,n,!1),t.lock=!1,t.released=!0,e(i)};return S(i,C,n),this}}}]),t}();function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function X(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function H(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(s=n.key,r=void 0,r=function(t,e){if("object"!==G(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!==G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(s,"string"),"symbol"===G(r)?r:String(r)),n)}var s,r}function Y(t,e){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Y(t,e)}function K(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=U(t);if(e){var s=U(this).constructor;i=Reflect.construct(n,arguments,s)}else i=n.apply(this,arguments);return Q(this,i)}}function Q(t,e){if(e&&("object"===G(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Y(t,e)}(r,window.Controller);var e,i,n,s=K(r);function r(){return X(this,r),s.apply(this,arguments)}return e=r,(i=[{key:"connect",value:function(){new N({onBeforeOpen:function(){null!==document.querySelector(".table-responsive")&&(document.querySelector(".table-responsive").style.overflowX="visible")},onClose:function(){null!==document.querySelector(".table-responsive")&&(document.querySelector(".table-responsive").style.overflowX="auto")},customSize:this.data.get("zoompercent")||"100%"}).listen(this.element.querySelector(".image-zoom"))}}])&&H(e.prototype,i),n&&H(e,n),Object.defineProperty(e,"prototype",{writable:!1}),r}();application.register("range",c),application.register("rate",m),application.register("image-zoom",J)})(),(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}!function(e,i){function n(t,i){this.element=t,this.settings=e.extend({},e.fn.rate.settings,i),this.set_faces={},this.build()}e.fn.textWidth=function(){var t=e("<span>"+e(this).html()+"</span>");t.css("font-size",e(this).css("font-size")).hide(),t.prependTo("body");var i=t.width();if(t.remove(),0==i){var n=0;return e(this).eq(0).children().each((function(){n+=e(this).textWidth()})),n}return i},e.fn.textHeight=function(){var t=e("<span>"+e(this).html()+"</span>");t.css("font-size",e(this).css("font-size")).hide(),t.prependTo("body");var i=t.height();return t.remove(),i},Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},String.prototype.getCodePointLength=function(){return this.length-this.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length+1},String.fromCodePoint=function(){for(var t=Array.prototype.slice.call(arguments),e=t.length;e-- >0;){var i=t[e]-65536;i>=0&&t.splice(e,1,55296+(i>>10),56320+(1023&i))}return String.fromCharCode.apply(null,t)},e.fn.rate=function(i){if(void 0===i||"object"===t(i))return this.each((function(){e.data(this,"rate")||e.data(this,"rate",new n(this,i))}));if("string"==typeof i){var s,r=arguments;return this.each((function(){var t=e.data(this,"rate");t instanceof n&&"function"==typeof t[i]&&(s=t[i].apply(t,Array.prototype.slice.call(r,1))),"destroy"===i&&(e(t.element).off(),e.data(this,"rate",null))})),void 0!==s?s:this}},n.prototype.build=function(){this.layers={},this.value=0,this.raise_select_layer=!1,this.settings.initial_value&&(this.value=this.settings.initial_value),e(this.element).attr("data-rate-value")&&(this.value=e(this.element).attr("data-rate-value"));var t=this.value/this.settings.max_value*100;if("string"==typeof this.settings.symbols[this.settings.selected_symbol_type]){var i=this.settings.symbols[this.settings.selected_symbol_type];this.settings.symbols[this.settings.selected_symbol_type]={},this.settings.symbols[this.settings.selected_symbol_type].base=i,this.settings.symbols[this.settings.selected_symbol_type].selected=i,this.settings.symbols[this.settings.selected_symbol_type].hover=i}var n=this.addLayer("base-layer",100,this.settings.symbols[this.settings.selected_symbol_type].base,!0),s=this.addLayer("select-layer",t,this.settings.symbols[this.settings.selected_symbol_type].selected,!0),r=this.addLayer("hover-layer",0,this.settings.symbols[this.settings.selected_symbol_type].hover,!1);this.layers.base_layer=n,this.layers.select_layer=s,this.layers.hover_layer=r,e(this.element).on("mousemove",e.proxy(this.hover,this)),e(this.element).on("click",e.proxy(this.select,this)),e(this.element).on("mouseleave",e.proxy(this.mouseout,this)),e(this.element).css({"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),this.settings.hasOwnProperty("update_input_field_name")&&this.settings.update_input_field_name.val(this.value)},n.prototype.addLayer=function(t,i,n,s){for(var r="<div>",o=0;o<this.settings.max_value;o++)Array.isArray(n)?(this.settings.convert_to_utf8&&(n[o]=String.fromCodePoint(n[o])),r+="<span>"+n[o]+"</span>"):(this.settings.convert_to_utf8&&(n=String.fromCodePoint(n)),r+="<span>"+n+"</span>");var a=e(r+="</div>").addClass("rate-"+t).appendTo(this.element);return e(a).css({width:i+"%",height:e(a).children().eq(0).textHeight(),overflow:"hidden",position:"absolute",top:0,display:s?"block":"none","white-space":"nowrap"}),e(this.element).css({width:e(a).textWidth()+"px",height:e(a).height(),position:"relative",cursor:this.settings.cursor}),a},n.prototype.updateServer=function(){null!=this.settings.url&&e.ajax({url:this.settings.url,type:this.settings.ajax_method,data:e.extend({},{value:this.getValue()},this.settings.additional_data),success:e.proxy((function(t){e(this.element).trigger("updateSuccess",[t])}),this),error:e.proxy((function(t,i,n){e(this.element).trigger("updateError",[t,i,n])}),this)})},n.prototype.getValue=function(){return this.value},n.prototype.hover=function(t){var i=parseInt(e(this.element).css("padding-left").replace("px","")),n=t.pageX-e(this.element).offset().left-i,s=this.toValue(n,!0);if(s!=this.value&&(this.raise_select_layer=!1),!this.raise_select_layer&&!this.settings.readonly){var r=this.toWidth(s);if(this.layers.select_layer.css({display:"none"}),this.settings.only_select_one_symbol){var o=Math.floor(s);this.layers.hover_layer.css({width:"100%",display:"block"}),this.layers.hover_layer.children("span").css({visibility:"hidden"}),this.layers.hover_layer.children("span").eq(0!=o?o-1:0).css({visibility:"visible"})}else this.layers.hover_layer.css({width:r+"%",display:"block"})}},n.prototype.select=function(t){if(!this.settings.readonly){this.getValue();var i=parseInt(e(this.element).css("padding-left").replace("px","")),n=t.pageX-e(this.element).offset().left-i,s=this.toWidth(this.toValue(n,!0));this.setValue(this.toValue(s)),this.raise_select_layer=!0}},n.prototype.mouseout=function(){this.layers.hover_layer.css({display:"none"}),this.layers.select_layer.css({display:"block"})},n.prototype.toWidth=function(t){return t/this.settings.max_value*100},n.prototype.toValue=function(t,e){var i,n=(i=e?t/this.layers.base_layer.textWidth()*this.settings.max_value:t/100*this.settings.max_value)/this.settings.step_size;return n-Math.floor(n)<5e-5&&(i=Math.round(i/this.settings.step_size)*this.settings.step_size),i=(i=Math.ceil(i/this.settings.step_size)*this.settings.step_size)>this.settings.max_value?this.settings.max_value:i},n.prototype.getElement=function(t,i){return e(this.element).find(".rate-"+t+" span").eq(i-1)},n.prototype.getLayers=function(){return this.layers},n.prototype.setFace=function(t,e){this.set_faces[t]=e},n.prototype.setAdditionalData=function(t){this.settings.additional_data=t},n.prototype.getAdditionalData=function(){return this.settings.additional_data},n.prototype.removeFace=function(t){delete this.set_faces[t]},n.prototype.setValue=function(t){if(!this.settings.readonly){t<0?t=0:t>this.settings.max_value&&(t=this.settings.max_value);var i=this.getValue();this.value=t,e(this.element).trigger("change",{from:i,to:this.value}),e(this.element).find(".rate-face").remove(),e(this.element).find("span").css({visibility:"visible"});var n=Math.ceil(this.value);if(this.set_faces.hasOwnProperty(n)){var s="<div>"+this.set_faces[n]+"</div>",r=this.getElement("base-layer",n),o=this.getElement("select-layer",n),a=this.getElement("hover-layer",n),l=r.textWidth()*(n-1)+(r.textWidth()-e(s).textWidth())/2;e(s).appendTo(this.element).css({display:"inline-block",position:"absolute",left:l}).addClass("rate-face"),r.css({visibility:"hidden"}),o.css({visibility:"hidden"}),a.css({visibility:"hidden"})}if(this.settings.only_select_one_symbol)c=this.toWidth(this.settings.max_value),this.layers.select_layer.css({display:"block",width:c+"%",height:this.layers.base_layer.css("height")}),this.layers.hover_layer.css({display:"none",height:this.layers.base_layer.css("height")}),this.layers.select_layer.children("span").css({visibility:"hidden"}),this.layers.select_layer.children("span").eq(0!=n?n-1:0).css({visibility:"visible"});else{var c=this.toWidth(this.value);this.layers.select_layer.css({display:"block",width:c+"%",height:this.layers.base_layer.css("height")}),this.layers.hover_layer.css({display:"none",height:this.layers.base_layer.css("height")})}e(this.element).attr("data-rate-value",this.value),this.settings.change_once&&(this.settings.readonly=!0),this.updateServer(),e(this.element).trigger("afterChange",{from:i,to:this.value}),this.settings.hasOwnProperty("update_input_field_name")&&this.settings.update_input_field_name.val(this.value)}},n.prototype.increment=function(){this.setValue(this.getValue()+this.settings.step_size)},n.prototype.decrement=function(){this.setValue(this.getValue()-this.settings.step_size)},e.fn.rate.settings={max_value:5,step_size:.5,initial_value:0,symbols:{utf8_star:{base:"☆",hover:"★",selected:"★"},utf8_hexagon:{base:"⬡",hover:"⬢",selected:"⬢"},hearts:"&hearts;",fontawesome_beer:'<i class="fas fa-beer"></i>',fontawesome_star:{base:'<i class="far fa-star"></i>',hover:'<i class="fas fa-star"></i>',selected:'<i class="fas fa-star"></i>'},utf8_emoticons:{base:[128549,128531,128530,128516],hover:[128549,128531,128530,128516],selected:[128549,128531,128530,128516]}},selected_symbol_type:"utf8_star",convert_to_utf8:!1,cursor:"default",readonly:!1,change_once:!1,only_select_one_symbol:!1,ajax_method:"POST",additional_data:{}}}(jQuery,window)})();