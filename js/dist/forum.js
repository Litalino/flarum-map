/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={648:(t,e,r)=>{var o=r(288).default;function n(){"use strict";t.exports=n=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(t){p=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var n=e&&e.prototype instanceof d?e:d,a=Object.create(n.prototype),i=new k(o||[]);return a._invoke=function(t,e,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return{value:void 0,done:!0}}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var s=S(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var u=f(t,e,r);if("normal"===u.type){if(o=r.done?"completed":"suspendedYield",u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var m={};function d(){}function h(){}function y(){}var v={};p(v,s,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(O([])));b&&b!==r&&a.call(b,s)&&(v=b);var w=y.prototype=d.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(n,i,s,u){var c=f(t[n],t,i);if("throw"!==c.type){var p=c.arg,l=p.value;return l&&"object"==o(l)&&a.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,s,u)}),(function(t){r("throw",t,s,u)})):e.resolve(l).then((function(t){p.value=t,s(p)}),(function(t){return r("throw",t,s,u)}))}u(c.arg)}var n;this._invoke=function(t,o){function a(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(a,a):a()}}function S(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var n=o.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:z}}function z(){return{value:void 0,done:!0}}return h.prototype=y,p(w,"constructor",y),p(y,"constructor",h),h.displayName=p(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,p(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},x(L.prototype),p(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,o,n,a){void 0===a&&(a=Promise);var i=new L(l(t,r,o,n),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),p(w,c,"Generator"),p(w,s,(function(){return this})),p(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},e.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return i.type="throw",i.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],i=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var s=a.call(n,"catchLoc"),u=a.call(n,"finallyLoc");if(s&&u){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(s){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=t,i.arg=e,n?(this.method="next",this.next=n.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;_(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,e,r)=>{var o=r(648)();t.exports=o;try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};(()=>{"use strict";r.r(o);const t=flarum.core.compat["common/app"];r.n(t)().initializers.add("jeromegillard/osm",(function(){console.log("[jeromegillard/osm] Hello, forum and admin!")}));const e=flarum.core.compat["forum/app"];var n=r.n(e);const a=flarum.core.compat["components/Post"];var i=r.n(a);const s=flarum.core.compat["components/Page"];var u=r.n(s);const c=flarum.core.compat["common/extend"],p=flarum.core.compat["common/components/TextEditor"];var l=r.n(p);const f=flarum.core.compat["common/components/TextEditorButton"];var d=r.n(f);function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}const y=flarum.core.compat["common/Model"];var v=r.n(y);const g=flarum.core.compat["common/utils/mixin"];var b=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,h(e,r);var n=o.prototype;return n.apiEndpoint=function(){return"/fof/uploads"+(this.exists?"/"+this.data.id:"")},n.bbcode=function(){switch(this.tag()){case"jeromegillard-map":return"[upl-file uuid="+this.uuid()+" size="+this.humanSize()+" url="+this.url()+"]"+this.baseName()+"[/upl-file]";case"file":return"[upl-file uuid="+this.uuid()+" size="+this.humanSize()+"]"+this.baseName()+"[/upl-this]";case"image":return"[upl-image uuid="+this.uuid()+" size="+this.humanSize()+" url="+this.url()+"]"+this.baseName()+"[/upl-image]";case"image-preview":return"[upl-image-preview url="+this.url()+"]";default:return this.url()}},o}(r.n(g)()(v(),{baseName:v().attribute("baseName"),path:v().attribute("path"),url:v().attribute("url"),type:v().attribute("type"),size:v().attribute("size"),humanSize:v().attribute("humanSize"),createdAt:v().attribute("createdAt"),uuid:v().attribute("uuid"),tag:v().attribute("tag"),hidden:v().attribute("hidden")}));function w(t,e,r,o,n,a,i){try{var s=t[a](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(o,n)}var x=r(357),S=r.n(x);function j(t,e,r){var o,a,i,s,u=n().forum.attribute("tilesProvider")||"osm",c=n().forum.attribute("zoom")||13,p="raster";if((t&&"mapbox"===t||"thunderforest"===t||"osm"===t)&&(u=t),e)switch(u){case"maptiler":"basic-v2"==e||"basic-4326"==e||"bright-v2"==e||"openstreetmap"==e||"outdoor"==e||"pastel"==e||"hybrid"==e||"streets-v2"==e||"toner"==e||"topo"==e||"topographique"==e||"voyager"==e||"winter"==e?o=e:console.log("Unknown style",e);break;case"mapbox":"mapbox/streets-v11"===e||"mapbox/outdoors-v11"===e||"mapbox/light-v10"===e||"mapbox/dark-v10"===e||"mapbox/satellite-v9"===e||"mapbox/satellite-streets-v11"===e||"mapbox/navigation-day-v1"===e||"mapbox/streets-v11"===e||"mapbox/navigation-night-v1"===e?o=e:console.log("Unknown style",e);break;case"thunderforest":"cycle"===e||"transport"===e||"landscape"===e||"outdoors"===e||"transport-dark9"===e||"spinal-map"===e||"pioneer"===e||"mobile-atlas"===e||"neighbourhood"===e||"atlas"===e?o=e:console.log("Unknown style",e)}switch(u){case"mapbox":p="gl",a=n().forum.attribute("mapbox.key")||"",i="mapbox://styles/"+(o=o||n().forum.attribute("mapbox.style")||"mapbox/light-v9"),s='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, © <a href="https://www.mapbox.com/">Mapbox</a>';break;case"thunderforest":a=n().forum.attribute("thunderforest.key")||"",o=o||n().forum.attribute("thunderforest.style")||"atlas",i="https://tile.thunderforest.com/{id}/{z}/{x}/{y}.png?apikey={key}",s='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, © <a href="https://www.thunderforest.com/">Thunderforest</a>';break;case"maptiler":p="gl",a=n().forum.attribute("maptiler.key")||"",i="https://api.maptiler.com/maps/"+(o=o||n().forum.attribute("maptiler.style")||"basic-v2")+"/style.json?key="+a,s='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';break;default:i="https://tile.openstreetmap.org/{z}/{x}/{y}.png",s='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}return r&&(c=r),(c<0||c>18)&&(c=13),{tilesProvider:u,attribution:s,currentStyle:o,currentKey:a,tileLayerURL:i,zoom:c,maxZoom:18,tileSize:512,zoomOffset:-1,detectRetina:!0,defaultLocation:[51.505,-.09],type:p}}function _(t){if(t&&t.tilesProvider)return"gl"===t.type?new L.mapboxGL({attribution:t.attribution,accessToken:t.currentKey,style:t.tileLayerURL}):new L.tileLayer(t.tileLayerURL,{key:t.currentKey,maxZoom:t.maxZoom,attribution:t.attribution,id:t.currentStyle,tileSize:t.tileSize,zoomOffset:t.zoomOffset,detectRetina:t.detectRetina})}function k(t){var e={};e.postId=t,e.mapConf=j(),$('div.PostStream-item[data-id="'+t+'"] .mapFile-container').each((function(t){var r=$(this).children(".mapFile").data("fofUploadDownloadUuid"),o="map-"+e.postId+t+"-"+r,a=n().forum.attribute("apiUrl")+"/fof/download";a+="/"+r,a+="/"+e.postId,a+="/"+n().session.csrfToken;var i=$(this).children(".mapFile").data("mapUrl").split(".").pop().toLowerCase();$(this).children(".mapFile-placeholder").prop("id",o);var s=L.map(o);s.addControl(new L.Control.Fullscreen),_(e.mapConf).addTo(s),"gpx"==i?new L.GPX(a,{async:!0,marker_options:{startIconUrl:"/assets/extensions/jeromegillard-map/pin-icon-start.png",endIconUrl:"/assets/extensions/jeromegillard-map/pin-icon-end.png",shadowUrl:"/assets/extensions/jeromegillard-map/pin-shadow.png",wptIconUrls:{"":"/assets/extensions/jeromegillard-map/default-waypoint.png","Geocache Found":"/assets/extensions/jeromegillard-map/geocache.png",Park:"/assets/extensions/jeromegillard-map/tree.png"}}}).on("loaded",(function(t){s.fitBounds(t.target.getBounds())})).addTo(s):"json"===i||"geojson"===i?fetch(a).then((function(t){return t.json()})).then((function(t){var e=L.geoJSON([t],{style:function(t){if(t.properties&&t.properties.colour)return{color:t.properties.colour,weight:3,opacity:1}},onEachFeature:function(t,e){if(t&&t.properties){var r="";if(t.properties.name&&(r+=t.properties.name),t.properties.description&&(r+=t.properties.description),"parking"===t.properties.amenity&&"Polygon"===t.geometry.type){var o=L.icon({iconUrl:"/assets/extensions/jeromegillard-map/pin-icon-parking.png",iconSize:[20,20],iconAnchor:[10,20],popupAnchor:[0,-10]}),n=e.getBounds().getCenter();L.marker(n,{icon:o}).addTo(s)}""!==r&&e.bindPopup(r)}}}).addTo(s);s.fitBounds(e.getBounds())})):s.setView(e.mapConf.defaultLocation,e.mapConf.zoom)})),$('div.PostStream-item[data-id="'+t+'"] .bbcode-map').each((function(t){var e=$(this).data("mapLocation"),r=j($(this).data("mapProvider"),$(this).data("mapStyle"),$(this).data("mapZoom")),o="map-"+Math.floor(1e3*Math.random());$(this).prop("id",o),e&&fetch("https://nominatim.openstreetmap.org/search?q="+e+"&format=json").then((function(t){return t.json()})).then((function(t){var e=L.map(o);e.addControl(new L.Control.Fullscreen),_(r).addTo(e),e.setView([t[0].lat,t[0].lon],r.zoom)}))}))}n().initializers.add("jeromegillard/osm",(function(){n().store.models.files=b,(0,c.extend)(l().prototype,"toolbarItems",(function(t){var e=j();t.add("bbcode",m(d(),{onclick:function(){return t=e.tilesProvider,r=e.currentStyle,o=e.zoom,void(n=S().mark((function e(){var n,a,i,s,u;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.querySelector("textarea.FormControl"),a=n.selectionStart,i=n.value.substring(0,a),s=n.value.substring(a,n.value.length),u="[map provider="+(null!=t?t:"osm")+" style="+(null!=r?r:"street")+" zoom="+(null!=o?o:13)+"]"+app.translator.trans("jeromegillard-map.forum.text_editor.location_placeholder")+"[/map]",n.value=i+u+s,a+=1,n.selectionStart=a,n.selectionEnd=a,n.focus();case 10:case"end":return e.stop()}}),e)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function i(t){w(a,r,o,i,s,"next",t)}function s(t){w(a,r,o,i,s,"throw",t)}i(void 0)}))})();var t,r,o,n},icon:"fas fa-map"},n().translator.trans("jeromegillard-map.forum.text_editor.bbcode_tooltip")))}))})),(0,c.extend)(i().prototype,"oncreate",(function(){k(this.attrs.post.id())})),(0,c.extend)(u().prototype,"oncreate",(function(){var t=this.attrs.id;"page"===this.attrs.routeName&&setTimeout(k,500,t)}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map
