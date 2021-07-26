(()=>{"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var s=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=s){var i,n,r=[],o=!0,a=!1;try{for(s=s.call(t);!(o=(i=s.next()).done)&&(r.push(i.value),!e||r.length!==e);o=!0);}catch(t){a=!0,n=t}finally{try{o||null==s.return||s.return()}finally{if(a)throw n}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=new Array(e);s<e;s++)i[s]=t[s];return i}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,i=l(t);if(e){var n=l(this).constructor;s=Reflect.construct(i,arguments,n)}else s=i.apply(this,arguments);return a(this,s)}}function a(e,s){return!s||"object"!==t(s)&&"function"!=typeof s?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):s}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(h,window.Controller);var s,a,l,c=o(h);function h(){return i(this,h),c.apply(this,arguments)}return s=h,(a=[{key:"connect",value:function(){var t=this.data.get("value");$(this.element.querySelector(".js-range-slider")).ionRangeSlider();var s=$(".js-range-slider").data("ionRangeSlider");if(null!==t){var i=e(t.split(";"),2),n=i[0],r=i[1];s.update({from:n,to:r})}}}])&&n(s.prototype,a),l&&n(s,l),h}();function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,i=g(t);if(e){var n=g(this).constructor;s=Reflect.construct(i,arguments,n)}else s=i.apply(this,arguments);return d(this,s)}}function d(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(r,window.Controller);var e,s,i,n=p(r);function r(){return u(this,r),n.apply(this,arguments)}return e=r,(s=[{key:"connect",value:function(){var t=this,e={max_value:this.data.get("count"),step_size:this.data.get("step"),readonly:this.data.get("readonly")};$(this.element.querySelector("div")).rate(e),$(this.element).on("change",(function(e,s){t.element.querySelector("input").value=s.to}))}}])&&y(e.prototype,s),i&&y(e,i),r}();application.register("range",c),application.register("rate",v)})(),(()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}!function(e,s){function i(t,s){this.element=t,this.settings=e.extend({},e.fn.rate.settings,s),this.set_faces={},this.build()}e.fn.textWidth=function(){var t=e("<span>"+e(this).html()+"</span>");t.css("font-size",e(this).css("font-size")).hide(),t.prependTo("body");var s=t.width();if(t.remove(),0==s){var i=0;return e(this).eq(0).children().each((function(){i+=e(this).textWidth()})),i}return s},e.fn.textHeight=function(){var t=e("<span>"+e(this).html()+"</span>");t.css("font-size",e(this).css("font-size")).hide(),t.prependTo("body");var s=t.height();return t.remove(),s},Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},String.prototype.getCodePointLength=function(){return this.length-this.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length+1},String.fromCodePoint=function(){for(var t=Array.prototype.slice.call(arguments),e=t.length;e-- >0;){var s=t[e]-65536;s>=0&&t.splice(e,1,55296+(s>>10),56320+(1023&s))}return String.fromCharCode.apply(null,t)},e.fn.rate=function(s){if(void 0===s||"object"===t(s))return this.each((function(){e.data(this,"rate")||e.data(this,"rate",new i(this,s))}));if("string"==typeof s){var n,r=arguments;return this.each((function(){var t=e.data(this,"rate");t instanceof i&&"function"==typeof t[s]&&(n=t[s].apply(t,Array.prototype.slice.call(r,1))),"destroy"===s&&(e(t.element).off(),e.data(this,"rate",null))})),void 0!==n?n:this}},i.prototype.build=function(){this.layers={},this.value=0,this.raise_select_layer=!1,this.settings.initial_value&&(this.value=this.settings.initial_value),e(this.element).attr("data-rate-value")&&(this.value=e(this.element).attr("data-rate-value"));var t=this.value/this.settings.max_value*100;if("string"==typeof this.settings.symbols[this.settings.selected_symbol_type]){var s=this.settings.symbols[this.settings.selected_symbol_type];this.settings.symbols[this.settings.selected_symbol_type]={},this.settings.symbols[this.settings.selected_symbol_type].base=s,this.settings.symbols[this.settings.selected_symbol_type].selected=s,this.settings.symbols[this.settings.selected_symbol_type].hover=s}var i=this.addLayer("base-layer",100,this.settings.symbols[this.settings.selected_symbol_type].base,!0),n=this.addLayer("select-layer",t,this.settings.symbols[this.settings.selected_symbol_type].selected,!0),r=this.addLayer("hover-layer",0,this.settings.symbols[this.settings.selected_symbol_type].hover,!1);this.layers.base_layer=i,this.layers.select_layer=n,this.layers.hover_layer=r,e(this.element).on("mousemove",e.proxy(this.hover,this)),e(this.element).on("click",e.proxy(this.select,this)),e(this.element).on("mouseleave",e.proxy(this.mouseout,this)),e(this.element).css({"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),this.settings.hasOwnProperty("update_input_field_name")&&this.settings.update_input_field_name.val(this.value)},i.prototype.addLayer=function(t,s,i,n){for(var r="<div>",o=0;o<this.settings.max_value;o++)Array.isArray(i)?(this.settings.convert_to_utf8&&(i[o]=String.fromCodePoint(i[o])),r+="<span>"+i[o]+"</span>"):(this.settings.convert_to_utf8&&(i=String.fromCodePoint(i)),r+="<span>"+i+"</span>");var a=e(r+="</div>").addClass("rate-"+t).appendTo(this.element);return e(a).css({width:s+"%",height:e(a).children().eq(0).textHeight(),overflow:"hidden",position:"absolute",top:0,display:n?"block":"none","white-space":"nowrap"}),e(this.element).css({width:e(a).textWidth()+"px",height:e(a).height(),position:"relative",cursor:this.settings.cursor}),a},i.prototype.updateServer=function(){null!=this.settings.url&&e.ajax({url:this.settings.url,type:this.settings.ajax_method,data:e.extend({},{value:this.getValue()},this.settings.additional_data),success:e.proxy((function(t){e(this.element).trigger("updateSuccess",[t])}),this),error:e.proxy((function(t,s,i){e(this.element).trigger("updateError",[t,s,i])}),this)})},i.prototype.getValue=function(){return this.value},i.prototype.hover=function(t){var s=parseInt(e(this.element).css("padding-left").replace("px","")),i=t.pageX-e(this.element).offset().left-s,n=this.toValue(i,!0);if(n!=this.value&&(this.raise_select_layer=!1),!this.raise_select_layer&&!this.settings.readonly){var r=this.toWidth(n);if(this.layers.select_layer.css({display:"none"}),this.settings.only_select_one_symbol){var o=Math.floor(n);this.layers.hover_layer.css({width:"100%",display:"block"}),this.layers.hover_layer.children("span").css({visibility:"hidden"}),this.layers.hover_layer.children("span").eq(0!=o?o-1:0).css({visibility:"visible"})}else this.layers.hover_layer.css({width:r+"%",display:"block"})}},i.prototype.select=function(t){if(!this.settings.readonly){this.getValue();var s=parseInt(e(this.element).css("padding-left").replace("px","")),i=t.pageX-e(this.element).offset().left-s,n=this.toWidth(this.toValue(i,!0));this.setValue(this.toValue(n)),this.raise_select_layer=!0}},i.prototype.mouseout=function(){this.layers.hover_layer.css({display:"none"}),this.layers.select_layer.css({display:"block"})},i.prototype.toWidth=function(t){return t/this.settings.max_value*100},i.prototype.toValue=function(t,e){var s,i=(s=e?t/this.layers.base_layer.textWidth()*this.settings.max_value:t/100*this.settings.max_value)/this.settings.step_size;return i-Math.floor(i)<5e-5&&(s=Math.round(s/this.settings.step_size)*this.settings.step_size),s=(s=Math.ceil(s/this.settings.step_size)*this.settings.step_size)>this.settings.max_value?this.settings.max_value:s},i.prototype.getElement=function(t,s){return e(this.element).find(".rate-"+t+" span").eq(s-1)},i.prototype.getLayers=function(){return this.layers},i.prototype.setFace=function(t,e){this.set_faces[t]=e},i.prototype.setAdditionalData=function(t){this.settings.additional_data=t},i.prototype.getAdditionalData=function(){return this.settings.additional_data},i.prototype.removeFace=function(t){delete this.set_faces[t]},i.prototype.setValue=function(t){if(!this.settings.readonly){t<0?t=0:t>this.settings.max_value&&(t=this.settings.max_value);var s=this.getValue();this.value=t,e(this.element).trigger("change",{from:s,to:this.value}),e(this.element).find(".rate-face").remove(),e(this.element).find("span").css({visibility:"visible"});var i=Math.ceil(this.value);if(this.set_faces.hasOwnProperty(i)){var n="<div>"+this.set_faces[i]+"</div>",r=this.getElement("base-layer",i),o=this.getElement("select-layer",i),a=this.getElement("hover-layer",i),l=r.textWidth()*(i-1)+(r.textWidth()-e(n).textWidth())/2;e(n).appendTo(this.element).css({display:"inline-block",position:"absolute",left:l}).addClass("rate-face"),r.css({visibility:"hidden"}),o.css({visibility:"hidden"}),a.css({visibility:"hidden"})}if(this.settings.only_select_one_symbol)c=this.toWidth(this.settings.max_value),this.layers.select_layer.css({display:"block",width:c+"%",height:this.layers.base_layer.css("height")}),this.layers.hover_layer.css({display:"none",height:this.layers.base_layer.css("height")}),this.layers.select_layer.children("span").css({visibility:"hidden"}),this.layers.select_layer.children("span").eq(0!=i?i-1:0).css({visibility:"visible"});else{var c=this.toWidth(this.value);this.layers.select_layer.css({display:"block",width:c+"%",height:this.layers.base_layer.css("height")}),this.layers.hover_layer.css({display:"none",height:this.layers.base_layer.css("height")})}e(this.element).attr("data-rate-value",this.value),this.settings.change_once&&(this.settings.readonly=!0),this.updateServer(),e(this.element).trigger("afterChange",{from:s,to:this.value}),this.settings.hasOwnProperty("update_input_field_name")&&this.settings.update_input_field_name.val(this.value)}},i.prototype.increment=function(){this.setValue(this.getValue()+this.settings.step_size)},i.prototype.decrement=function(){this.setValue(this.getValue()-this.settings.step_size)},e.fn.rate.settings={max_value:5,step_size:.5,initial_value:0,symbols:{utf8_star:{base:"☆",hover:"★",selected:"★"},utf8_hexagon:{base:"⬡",hover:"⬢",selected:"⬢"},hearts:"&hearts;",fontawesome_beer:'<i class="fas fa-beer"></i>',fontawesome_star:{base:'<i class="far fa-star"></i>',hover:'<i class="fas fa-star"></i>',selected:'<i class="fas fa-star"></i>'},utf8_emoticons:{base:[128549,128531,128530,128516],hover:[128549,128531,128530,128516],selected:[128549,128531,128530,128516]}},selected_symbol_type:"utf8_star",convert_to_utf8:!1,cursor:"default",readonly:!1,change_once:!1,only_select_one_symbol:!1,ajax_method:"POST",additional_data:{}}}(jQuery,window)})();