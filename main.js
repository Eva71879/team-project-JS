!function(){var t={86:function(){window.onload=function(){document.getElementById("preload").style.display="none"}},325:function(){function t(t,e,n,r,o,c,a){try{var i=t[c](a),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,c){var a=e.apply(n,r);function i(e){t(a,o,c,i,u,"next",e)}function u(e){t(a,o,c,i,u,"throw",e)}i(void 0)}))}}var n=document.querySelector(".category"),r=document.querySelector(".logo");function o(){return c.apply(this,arguments)}function c(){return(c=e(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://dummyjson.com/products/categories");case 3:if((e=t.sent).ok){t.next=6;break}throw new Error("Ошибка при загрузке данных");case 6:return t.next=8,e.json();case 8:return n=t.sent,console.log(n),t.abrupt("return",n);case 13:t.prev=13,t.t0=t.catch(0),console.error("Ошибка:",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function a(t,e){var n=function(t){return'\n  <button class="button">'.concat(t,"</button>\n  ")}(e);t.innerHTML+=n}function i(){return(i=e(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o();case 3:t.sent.forEach((function(t){a(n,t)})),(r=document.querySelectorAll(".button")).forEach((function(t){t.addEventListener("click",e(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.classList.contains("active")?(t.classList.remove("active"),location.reload()):(r.forEach((function(t){return t.classList.remove("active")})),t.classList.add("active")),n=t.textContent,e.next=5,s(n);case 5:console.log(n);case 6:case"end":return e.stop()}}),e)}))))})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("Ошибка при отображении категорий:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function u(t,e){var n,r="\n    <div class='item'>\n            <div class='item-product'>\n            <p class='discount'><span class='discount-percentage'>".concat((n=e).discountPercentage,"</span> off sale</p>\n            <div class='image-block'><img src=\"").concat(n.thumbnail,"\" alt=\"thumbnail\" class='image'></div>\n            <p class='rating'><span class='rating-star'>&#10033;</span> ").concat(n.rating,"</p>\n            <p class='title'>").concat(n.title,"</p>\n            <p class='description'>").concat(n.description,"</p>\n            <button class='price putToCartButton' data-product='").concat(JSON.stringify(n),"'><span class='price-bin'></span>$").concat(n.price,"</button>\n        </div>\n    </div>\n  ");t.innerHTML+=r}function s(t){return l.apply(this,arguments)}function l(){return(l=e(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.querySelector(".container"),t.prev=1,t.next=4,fetch("https://dummyjson.com/products/category/".concat(e));case 4:if((r=t.sent).ok){t.next=7;break}throw new Error("Ошибка при загрузке данных");case 7:return t.next=9,r.json();case 9:o=t.sent,c=o.products,console.log(c),n.innerHTML="",c.forEach((function(t){u(n,t)})),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),console.error("Ошибка при отображении карточек:",t.t0);case 19:case"end":return t.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}n.addEventListener("wheel",(function(t){this.scrollLeft+=t.deltaY,t.preventDefault()})),function(){i.apply(this,arguments)}(),r.addEventListener("click",(function(){location.reload()}))},37:function(t,e,n){"use strict";n(325);var r=document.querySelectorAll(".popup-link"),o=document.querySelector("body"),c=document.querySelectorAll(".lock-padding"),a=!0;if(r.length>0)for(var i=function(t){var e=r[t];e.addEventListener("click",(function(t){var n=e.getAttribute("href").replace("#","");!function(t){if(t&&a){var e=document.querySelector(".popup.open");e?d(e,!1):function(){var t=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";if(c.length>0)for(var e=0;e<c.length;e++)c[e].style.paddingRight=t;o.style.paddingRight=t,o.classList.add("lock"),a=!1,setTimeout((function(){a=!0}),800)}(),t.classList.add("open"),t.addEventListener("click",(function(t){t.target.closest(".popup__content")||d(t.target.closest(".popup"))}))}}(document.getElementById(n)),t.preventDefault()}))},u=0;u<r.length;u++)i(u);var s=document.querySelectorAll(".close-popup");if(s.length>0)for(var l=function(t){var e=s[t];e.addEventListener("click",(function(t){d(e.closest(".popup")),t.preventDefault()}))},p=0;p<s.length;p++)l(p);function d(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];a&&(t.classList.remove("open"),e&&f())}function f(){setTimeout((function(){if(c.length>0)for(var t=0;t<c.length;t++)c[t].style.paddingRight="0px";o.style.paddingRight="0px",o.classList.remove("lock")}),800),a=!1,setTimeout((function(){a=!0}),800)}function v(t,e,n,r,o,c,a){try{var i=t[c](a),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function a(t){v(c,r,o,a,i,"next",t)}function i(t){v(c,r,o,a,i,"throw",t)}a(void 0)}))}}document.addEventListener("keydown",(function(t){27===t.which&&d(document.querySelector(".popup.open"))}));var m=document.querySelector(".container");function g(){return y.apply(this,arguments)}function y(){return(y=h(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://dummyjson.com/products");case 3:if((e=t.sent).ok){t.next=6;break}throw new Error("Ошибка при загрузке данных");case 6:return t.next=8,e.json();case 8:return n=t.sent,t.abrupt("return",n);case 12:t.prev=12,t.t0=t.catch(0),console.error("Ошибка:",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function b(t,e){var n,r="\n    <div class='item'>\n            <div class='item-product'>\n            <p class='discount'><span class='discount-percentage'>".concat((n=e).discountPercentage,"</span> off sale</p>\n            <div class='image-block'><img src=\"").concat(n.thumbnail,"\" alt=\"thumbnail\" class='image'></div>\n            <p class='rating'><span class='rating-star'>&#10033;</span> ").concat(n.rating,"</p>\n            <p class='title'>").concat(n.title,"</p>\n            <p class='description'>").concat(n.description,"</p>\n            <button class='price putToCartButton' data-product='").concat(JSON.stringify(n),"'><span class='price-bin'></span>$").concat(n.price,"</button><span class='soldOut'></span>\n        </div>\n    </div>\n    ");t.innerHTML+=r}function w(){return(w=h(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g();case 3:t.sent.products.forEach((function(t){b(m,t)})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Ошибка при отображении карточек:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){w.apply(this,arguments)}();var L={};document.addEventListener("click",(function(t){try{if(t.target.classList.contains("putToCartButton")){console.log('Кнопка "Добавить в корзину" была нажата');var e={id:(d=JSON.parse(t.target.getAttribute("data-product"))).id,title:d.title,description:d.description,price:d.price,discountPercentage:d.discountPercentage,rating:d.rating,stock:d.stock,brand:d.brand,category:d.category,thumbnail:d.thumbnail,images:d.images,count:1},n="product_"+e.id;if(L[n]){L[n].count++;var r=document.querySelector('[data-product-id="'.concat(n,'"] .productAmount'));r&&(r.textContent=L[n].count),q()}else{L[n]={product:e,count:1},q();var o=document.querySelector(".popup__container"),c='\n                    <li class="cart-list__item" data-product-id="'.concat(n,'">\n                        <div class="cart-list__item-container">\n                            <div class="thumbnailWrapper">\n                                <img src="').concat(e.thumbnail,'" alt="thumbnail" class="productThumbnail">\n                            </div>\n                            <div class="productTitleWrapper">\n                                <p class="productTitle">').concat(e.title,'</p>\n                            </div>\n                            <div class="productAmounWrapper">\n                                <button class="minus" data-product-id="').concat(n,'">-</button>\n                                <span class="productAmount">').concat(e.count,'</span>\n                                <button class="plus" data-product-id="').concat(n,'">+</button>\n                            </div>\n                            <div class="productPriceWrapper">\n                                <p class="productPrice">$').concat(e.price,'</p>\n                            </div>\n                            <div class="deleteFromCartWrapper">\n                                <button class="deleteFromCart" id="deleteFromCart"></button>\n                            </div>\n                        </div>\n                    </li>\n                ');o.insertAdjacentHTML("beforeend",c),_(),q()}var a=t.target;a&&(a.style.backgroundColor="#0C0099",a.dataset.productId=n),S()}if(t.target.classList.contains("plus")){var i=t.target.getAttribute("data-product-id");x(i)}if(t.target.classList.contains("minus")){var u=t.target.getAttribute("data-product-id");k(u)}if(t.target.classList.contains("deleteFromCart")){var s=t.target.closest(".cart-list__item").getAttribute("data-product-id");E(s)}}catch(e){console.error("Ошибка при обработке события click:",e);var l=t.target.closest(".item-product");if(l){var p=l.querySelector(".soldOut");p&&(p.textContent="Товар закончился!")}}var d}));var x=function(t){L[t].count++;var e=document.querySelector('[data-product-id="'.concat(t,'"] .productAmount'));if(e){e.textContent=L[t].count;var n=document.querySelector('[data-product-id="'.concat(t,'"] .productPrice'));n&&(n.textContent="$".concat(L[t].product.price*L[t].count))}S(),_(),q()},k=function(t){if(L[t].count>1){L[t].count--;var e=document.querySelector('[data-product-id="'.concat(t,'"] .productAmount'));if(e){e.textContent=L[t].count;var n=document.querySelector('[data-product-id="'.concat(t,'"] .productPrice'));n&&(n.textContent="$".concat(L[t].product.price*L[t].count))}}S(),_(),q()},E=function(t){var e=document.querySelector('[data-product-id="'.concat(t,'"]'));e&&(e.classList.add("removing"),setTimeout((function(){delete L[t],e.remove(),S(),_(),q()}),500));var n=document.querySelector('.putToCartButton[data-product-id="'.concat(t,'"]'));n&&(n.style.backgroundColor="")};function S(){var t=document.querySelector(".cart-list__TotalPrice p"),e=0;for(var n in L){var r=L[n].product,o=L[n].count;e+=r.price*o}t.textContent="$".concat(e)}function T(){var t=document.querySelector(".popup__container");t.innerHTML="";var e="",n=document.querySelector(".popup__footer");if(Object.keys(L).length>0)for(var r in L){var o=L[r].product,c=L[r].count;n.innerHTML='<button class="button__backToProducts">place an order</button>',e+='\n                <li class="cart-list__item" data-product-id="'.concat(r,'">\n                    <div class="cart-list__item-container">\n                        <div class="thumbnailWrapper">\n                            <img src="').concat(o.thumbnail,'" alt="thumbnail" class="productThumbnail">\n                        </div>\n                        <div class="productTitleWrapper">\n                            <p class="productTitle">').concat(o.title,'</p>\n                        </div>\n                        <div class="productAmounWrapper">\n                            <button class="minus" data-product-id="').concat(r,'">-</button>\n                            <p class="productAmount">').concat(c,'</p>\n                            <button class="plus" data-product-id="').concat(r,'">+</button>\n                        </div>\n                        <div class="productPriceWrapper">\n                            <p class="productPrice">$').concat(o.price*c,'</p>\n                        </div>\n                        <div class="deleteFromCartWrapper">\n                            <button class="deleteFromCart" id="deleteFromCart"></button>\n                        </div>\n                    </div>\n                </li>\n            ')}else n.innerHTML='<button class="button__backToProducts">back to products</button>',e='\n            <div class="cart-empty">\n                <p class="cart__text">cart is empty :-(</p>\n            </div>\n        ';t.innerHTML=e,S(),document.querySelector(".button__backToProducts").addEventListener("click",(function(){d(document.querySelector(".popup.open"))}))}function _(){T()}function q(){var t=0;for(var e in L)t+=L[e].count;var n=document.querySelector(".cartAmount");if(0===t&&n)n.remove();else if(n)n.textContent=t;else{var r=document.createElement("span");r.classList.add("cartAmount"),r.textContent=t,document.querySelector(".cart").appendChild(r)}}S(),T(),n(492),n(86)},492:function(){function t(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,c=function(){};return{s:c,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e,n,r,o,c,a){try{var i=t[c](a),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,c){var a=t.apply(e,r);function i(t){n(a,o,c,i,u,"next",t)}function u(t){n(a,o,c,i,u,"throw",t)}i(void 0)}))}}var o=document.querySelector(".container"),c=document.querySelector(".category"),a=document.querySelector(".inputSearch"),i=document.getElementById("btnSearch"),u=document.querySelector(".attention"),s=document.querySelector(".pagination");i.addEventListener("click",(function(){c.classList.toggle("hide"),a.classList.toggle("hide"),l.classList.toggle("hide"),a.focus()})),a.addEventListener("keyup",(function(e){function n(){return c.apply(this,arguments)}function c(){return(c=r(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=a.value,t.next=4,fetch("https://dummyjson.com/products/search?q=".concat(e));case 4:if((n=t.sent).ok){t.next=7;break}throw new Error("Ошибка при загрузке данных");case 7:return t.next=9,n.json();case 9:return 0===(r=t.sent).total?(u.innerHTML="Ничего не найдено, попробуйте изменить запрос.",u.classList.remove("makeInvsbl")):(o.innerHTML="",u.innerHTML="найдено ".concat(r.total," шт."),u.classList.remove("makeInvsbl")),t.abrupt("return",r);case 14:t.prev=14,t.t0=t.catch(0),console.log("Ошибка:",t.t0);case 17:return t.prev=17,setTimeout((function(){u.classList.add("makeInvsbl")}),3e3),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,14,17,20]])})))).apply(this,arguments)}function i(){return(i=r(regeneratorRuntime.mark((function e(){var r,c,a,i,u,l,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p=function(e){var n=document.createElement("div");function r(){i==e&&n.classList.add("pageBtn-active")}return n.classList.add("pageBtn"),n.innerHTML=e,s.appendChild(n),r(),n.addEventListener("click",(function(){var n,o=t(document.querySelectorAll(".pageBtn"));try{for(o.s();!(n=o.n()).done;)n.value.classList.remove("pageBtn-active")}catch(t){o.e(t)}finally{o.f()}i=e,r(),u(c,a,i)})),n},l=function(t,e){var n=Math.ceil(t.length/e);s.innerHTML="";for(var r=1;r<=n;r++){var o=p(r);s.appendChild(o)}},u=function(t,e,n){o.innerHTML="";var r=--n*e,c=r+e;t.slice(r,c).forEach((function(t){var e=document.createElement("div");e.innerHTML="\n                <div class='item'>\n                    <div class='item-product'>\n                        <p class='discount'>\n                            <span class='discount-percentage'>".concat(t.discountPercentage,"</span> off sale\n                        </p>\n                        <div class='image-block'>\n                            <img src=\"").concat(t.thumbnail,"\" alt=\"thumbnail\" class='image'>\n                        </div>\n                        <p class='rating'><span class='rating-star'>&#10033;</span> ").concat(t.rating,"</p>\n                        <p class='title'>").concat(t.title,"</p> <p class='description'>").concat(t.description,"</p>\n                        <button class='price putToCartButton' data-product='").concat(JSON.stringify(t),"'>\n                            <span class='price-bin'></span>$").concat(t.price,"\n                        </button>\n                    </div>\n                </div>\n                "),o.appendChild(e)}))},e.next=5,n();case 5:r=e.sent,c=r.products,u(c,a=8,i=1),l(c,a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}"Enter"===e.code&&a.value.length>2&&(n(),function(){i.apply(this,arguments)}())}));var l=document.querySelector(".button-close");l.addEventListener("click",(function(){location.reload()}))},666:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",i=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var c=e&&e.prototype instanceof m?e:m,a=Object.create(c.prototype),i=new C(r||[]);return o(a,"_invoke",{value:S(t,n,i)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",f="executing",v="completed",h={};function m(){}function g(){}function y(){}var b={};s(b,a,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(A([])));L&&L!==n&&r.call(L,a)&&(b=L);var x=y.prototype=m.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,c,a,i){var u=p(t[o],t,c);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,i)}),(function(t){n("throw",t,a,i)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,i)}))}i(u.arg)}var c;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return c=c?c.then(o,o):o()}})}function S(t,n,r){var o=d;return function(c,a){if(o===f)throw new Error("Generator is already running");if(o===v){if("throw"===c)throw a;return{value:e,done:!0}}for(r.method=c,r.arg=a;;){var i=r.delegate;if(i){var u=T(i,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=f;var s=p(t,n,r);if("normal"===s.type){if(o=r.done?v:"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=v,r.method="throw",r.arg=s.arg)}}}function T(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var c=p(o,t.iterator,n.arg);if("throw"===c.type)return n.method="throw",n.arg=c.arg,n.delegate=null,h;var a=c.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function A(t){if(null!=t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}throw new TypeError(typeof t+" is not iterable")}return g.prototype=y,o(x,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:g,configurable:!0}),g.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(E.prototype),s(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,c){void 0===c&&(c=Promise);var a=new E(l(e,n,r,o),c);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),s(x,u,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=A,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return i.type="throw",i.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var c=this.tryEntries.length-1;c>=0;--c){var a=this.tryEntries[c],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var a=c?c.completion:{};return a.type=t,a.arg=e,c?(this.method="next",this.next=c.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),q(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;q(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:A(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var c=e[r]={exports:{}};return t[r](c,c.exports,n),c.exports}n(666),n(37)}();