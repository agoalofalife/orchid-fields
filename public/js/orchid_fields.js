(()=>{"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==e)return;var n,o,u=[],i=!0,c=!1;try{for(e=e.call(t);!(i=(n=e.next()).done)&&(u.push(n.value),!r||u.length!==r);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(c)throw o}}return u}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function n(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function o(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,r){return(u=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,r)}function i(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=a(t);if(r){var o=a(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return c(this,e)}}function c(r,e){return!e||"object"!==t(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&u(t,r)}(l,window.Controller);var e,c,a,f=i(l);function l(){return n(this,l),f.apply(this,arguments)}return e=l,(c=[{key:"connect",value:function(){var t=this.data.get("value");$(this.element.querySelector(".js-range-slider")).ionRangeSlider();var e=$(".js-range-slider").data("ionRangeSlider");if(null!==t){var n=r(t.split(";"),2),o=n[0],u=n[1];e.update({from:o,to:u})}}}])&&o(e.prototype,c),a&&o(e,a),l}();application.register("range",f)})();