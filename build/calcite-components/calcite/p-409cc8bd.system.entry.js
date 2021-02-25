var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,a){function o(t){try{c(n.next(t))}catch(e){a(e)}}function s(t){try{c(n["throw"](t))}catch(e){a(e)}}function c(t){t.done?r(t.value):i(t.value).then(o,s)}c((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return c([t,e])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(s){o=[6,s];i=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-4105a996.system.js","./p-466a0799.system.js"],(function(t){"use strict";var e,r,n,i,a,o;return{setters:[function(t){e=t.e;r=t.r;n=t.h;i=t.H;a=t.g},function(t){o=t.g}],execute:function(){var s={icon:"icon",flipRtl:"flip-rtl"};var c={};var l={};var f={s:16,m:24,l:32};function u(t){var r=t.icon,n=t.scale;return __awaiter(this,void 0,void 0,(function(){var t,i,a,o,s,u;return __generator(this,(function(p){switch(p.label){case 0:t=f[n];i=h(r);a=i.charAt(i.length-1)==="F";o=a?i.substring(0,i.length-1):i;s=""+o+t+(a?"F":"");if(c[s]){return[2,c[s]]}if(!l[s]){l[s]=fetch(e("./assets/calcite-icon/"+s+".json")).then((function(t){return t.json()})).catch((function(){console.error('"'+s+'" is not a valid calcite-ui-icon name');return""}))}return[4,l[s]];case 1:u=p.sent();c[s]=u;return[2,u]}}))}))}function h(t){var e=!isNaN(Number(t.charAt(0)));var r=t.split("-");if(r.length===1){return e?"i"+t:t}return r.map((function(t,r){if(r===0){return e?"i"+t.toUpperCase():t}return t.charAt(0).toUpperCase()+t.slice(1)})).join("")}var p="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}:host([scale=s]){width:1rem;height:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){width:1.5rem;height:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){width:2rem;height:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";var m=t("calcite_icon",function(){function t(t){r(this,t);this.icon=null;this.flipRtl=false;this.scale="m";this.visible=false}t.prototype.connectedCallback=function(){var t=this;this.waitUntilVisible((function(){t.visible=true;t.loadIconPathData()}))};t.prototype.disconnectedCallback=function(){if(this.intersectionObserver){this.intersectionObserver.disconnect();this.intersectionObserver=null}};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.loadIconPathData();return[2]}))}))};t.prototype.render=function(){var t;var e=this,r=e.el,a=e.flipRtl,c=e.pathData,l=e.scale,u=e.textLabel;var h=o(r);var p=f[l];var m=!!u;var b=[].concat(c||"");return n(i,{"aria-hidden":(!m).toString(),"aria-label":m?u:null,role:m?"img":null},n("svg",{class:(t={},t[s.flipRtl]=h==="rtl"&&a,t.svg=true,t),fill:"currentColor",height:"100%",viewBox:"0 0 "+p+" "+p,width:"100%",xmlns:"http://www.w3.org/2000/svg"},b.map((function(t){return typeof t==="string"?n("path",{d:t}):n("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})}))))};t.prototype.loadIconPathData=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r,n,i;return __generator(this,(function(a){switch(a.label){case 0:t=this,e=t.icon,r=t.scale,n=t.visible;if(!e||!n){return[2]}i=this;return[4,u({icon:e,scale:r})];case 1:i.pathData=a.sent();return[2]}}))}))};t.prototype.waitUntilVisible=function(t){var e=this;if(typeof window==="undefined"||!window.IntersectionObserver){t();return}this.intersectionObserver=new IntersectionObserver((function(r){r.forEach((function(r){if(r.isIntersecting){e.intersectionObserver.disconnect();e.intersectionObserver=null;t()}}))}),{rootMargin:"50px"});this.intersectionObserver.observe(this.el)};Object.defineProperty(t,"assetsDirs",{get:function(){return["assets"]},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}},enumerable:false,configurable:true});return t}());m.style=p}}}));