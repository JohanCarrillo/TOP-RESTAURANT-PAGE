(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(81),a=n.n(o),i=n(645),r=n.n(i),c=n(667),s=n.n(c),d=new URL(n(967),n.b),l=r()(a()),p=s()(d);l.push([e.id,"body {\n  background-image: url("+p+");\n  background-repeat: repeat;\n}\n\n#content {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding-top: 3%;\n\tpadding-bottom: 3%;\n}\n\n#choose {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n/* ------------------------------ HOME -------------------------- */\n#home {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 3% 10%;\n\tbackground-color: blanchedalmond;\n}\n\nh2 {\n\tfont-size: 40px;\n}\n\n.big-text {\n\tfont-size: 20px;\n\tmargin-bottom: 35px;\n}\n\n.pizza-size-image {\n\twidth: 90%;\n}\n\n/* ------------------------------ MENU -------------------------- */\n\n#menu {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 15px;\n\tpadding: 3% 25%;\n\tbackground-color: blanchedalmond;\n\twidth: 20%;\n}\n\n.menu-item {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\ttext-align: center;\n\tpadding-left: 25px;\n\tpadding-right: 25px;\n}\n\nimg {\n\tpadding: 15px;\n\twidth: 30vw;\n\theight: auto;\n}\n\n/* .menu-item-image {\n\t\n} */\n\n/* -------------------------- CONTACT INFORMATION --------------------------- */\n#contact-info {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 3% 10%;\n\tbackground-color: blanchedalmond;\n}\n\n.contact-text {\n\tfont-size: 25px;\n}\n",""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},r=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=a(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=o(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var c=n(i[r]);t[c].references--}for(var s=o(e,a),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},967:(e,t,n)=>{e.exports=n.p+"861f5de8251ed90a748e.jpg"},339:(e,t,n)=>{e.exports=n.p+"bb19a968750500fe2a91.jpg"},307:(e,t,n)=>{e.exports=n.p+"42b8c36241e20585c3c2.jpg"},656:(e,t,n)=>{e.exports=n.p+"6608c5d8e8a7ac5d7e7a.jpg"},70:(e,t,n)=>{e.exports=n.p+"c152e7c4e86ae2d0e072.jpg"},527:(e,t,n)=>{e.exports=n.p+"5815bdede2d5eac481d2.png"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),i=n(569),r=n.n(i),c=n(565),s=n.n(c),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=r().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=n(527);const g=[{text:"Classic pizza made with the most delicious cheese, tomato sauce and\na few (or a ton) slices of pepperoni on top of the cheese.",img:n(70)},{text:"Classic pizza but with double layer of cheese! It's a pizza with a base of\ntomato sauce and some delicious specias to give the cheese a stronger\nflavor. ",img:n(307)},{text:"Delicious pizza made with San Marzano tomatoes and Mozzarella Cheese, \non a wheat flour pizza dough with high protein content. \nThe mozzarella cheese is Mozzarella di Bufala Campana, which is made from \nthe water buffalo that live in the marshlands of Campania and Lazio, Italy.",img:n(656)},{text:"Also called Gourmet pizza. The ingredients depends of the season!\nSome popular toppings might be fresh hand-picked tomatoes, red peppers, \nlettuce and other greens, capers, and gourmet cheeses such as goat cheese. \nMore adventurous types might like the heat of jalapenos and other hot peppers. ",img:n(339)}];!function(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="choose",e.appendChild(t);const n=document.createElement("div");n.id="home",function(e){const t=document.createElement("h2");t.textContent="Pizza Shop Bigotex",e.appendChild(t);const n=document.createElement("div");n.classList.add("big-text"),n.textContent="We offer four different sizes of pizza:",e.appendChild(n);const o=new Image;o.classList.add("pizza-size-image"),o.src=h,e.appendChild(o)}(n),e.appendChild(n);const o=document.createElement("div");o.id="contact-info",function(e){function t(e,t){const n=document.createElement("div");n.textContent=e,n.classList.add("contact-text"),t.appendChild(n)}const n=document.createElement("h2");n.textContent="Conact Information",e.appendChild(n);const o=document.createElement("div");t("Phone Number: 555-XXX-000 / 123-ABC-987",o),t("e-mail addres: not-fake-addres@not-fake-provider.com",o),t("Physical addres: Not Fake State - street: ABC-REAL",o),e.appendChild(o)}(o),e.appendChild(o);const a=document.createElement("div");function i(e){const t=document.createElement("button");return t.id=e+"-button",t.textContent=e.toUpperCase(),t}a.id="menu",function(e){for(let t of g){const n=document.createElement("div");n.classList.add("menu-item");const o=new Image;o.classList.add("menu-item-image"),o.src=t.img;const a=document.createElement("div");a.classList.add("menu-text"),a.textContent=t.text,n.appendChild(o),n.appendChild(a),e.appendChild(n)}}(a),e.appendChild(a);const r=i("home");t.appendChild(r);const c=i("menu");t.appendChild(c);const s=i("contact");t.appendChild(s),r.addEventListener("click",(()=>{n.style.display="flex",a.style.display="none",o.style.display="none"})),c.addEventListener("click",(()=>{a.style.display="flex",n.style.display="none",o.style.display="none"})),s.addEventListener("click",(()=>{o.style.display="flex",n.style.display="none",a.style.display="none"})),n.style.display="flex",a.style.display="none",o.style.display="none"}()})()})();