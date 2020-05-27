var __awaiter=this&&this.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function a(e){try{u(n.next(e))}catch(t){o(t)}}function s(e){try{u(n["throw"](e))}catch(t){o(t)}}function u(e){e.done?r(e.value):i(e.value).then(a,s)}u((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return u([e,t])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1];o=a;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(a);break}if(o[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(s){a=[6,s];i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),i=0,t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n};System.register(["./p-716ccb21.system.js","./p-8555ea48.system.js","./p-00b3eaa0.system.js","./p-dd63fbc0.system.js","./p-bc99e3eb.system.js","./p-c50dc49a.system.js"],(function(e,t){"use strict";var r,n,i,o,a,s,u,f,c,h,l,v,p,d,g,m,w,y;return{setters:[function(e){r=e.r;n=e.h;i=e.H;o=e.c;a=e.d},function(e){s=e.g;u=e.c;f=e.a},function(e){c=e.g},function(e){h=e.a;l=e.d},function(e){v=e.l;p=e.t;d=e.s;g=e.L;m=e.a;w=e.b},function(e){y=e.a}],execute:function(){var b=this;var _="";var S=e("app_root",function(){function e(e){r(this,e)}e.prototype.render=function(){return n("ion-app",null,n("ion-router",{useHash:false},n("ion-route",{url:"/",component:"app-home"}),n("ion-route",{url:"/profile/:name",component:"app-profile"})),n("ion-nav",null))};return e}());S.style=_;var C="html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";var R=e("ion_app",function(){function e(e){r(this,e)}e.prototype.componentDidLoad=function(){{T((function(){var e=f(window,"hybrid");if(!u.getBoolean("_testing")){t.import("./p-11e9249d.system.js").then((function(e){return e.startTapClick(u)}))}if(u.getBoolean("statusTap",e)){t.import("./p-5fddc6c0.system.js").then((function(e){return e.startStatusTap()}))}if(u.getBoolean("inputShims",P())){t.import("./p-9249a780.system.js").then((function(e){return e.startInputShims(u)}))}if(u.getBoolean("hardwareBackButton",e)){t.import("./p-506cc8db.system.js").then((function(e){return e.startHardwareBackButton()}))}t.import("./p-f08ac06a.system.js").then((function(e){return e.startFocusVisible()}))}))}};e.prototype.render=function(){var e;var t=s(this);return n(i,{class:(e={},e[t]=true,e["ion-page"]=true,e["force-statusbar-padding"]=u.getBoolean("_forceStatusbarPadding"),e)})};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});return e}());var P=function(){return f(window,"ios")&&f(window,"mobile")};var T=function(e){if("requestIdleCallback"in window){window.requestIdleCallback(e)}else{setTimeout(e,32)}};R.style=C;var k=1;var E=2;var V=3;var j=function(){function e(e,t){this.component=e;this.params=t;this.state=k}e.prototype.init=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r;return __generator(this,(function(n){switch(n.label){case 0:this.state=E;if(!!this.element)return[3,2];t=this.component;r=this;return[4,y(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)];case 1:r.element=n.sent();n.label=2;case 2:return[2]}}))}))};e.prototype._destroy=function(){h(this.state!==V,"view state must be ATTACHED");var e=this.element;if(e){if(this.delegate){this.delegate.removeViewFromDom(e.parentElement,e)}else{e.remove()}}this.nav=undefined;this.state=V};return e}();var A=function(e,t,r){if(!e){return false}if(e.component!==t){return false}var n=e.params;if(n===r){return true}if(!n&&!r){return true}if(!n||!r){return false}var i=Object.keys(n);var o=Object.keys(r);if(i.length!==o.length){return false}for(var a=0,s=i;a<s.length;a++){var u=s[a];if(n[u]!==r[u]){return false}}return true};var O=function(e,t){if(!e){return null}if(e instanceof j){return e}return new j(e,t)};var B=function(e){return e.map((function(e){if(e instanceof j){return e}if("page"in e){return O(e.page,e.params)}return O(e,undefined)})).filter((function(e){return e!==null}))};var I=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";var N=e("ion_nav",function(){function e(e){r(this,e);this.transInstr=[];this.animationEnabled=true;this.useRouter=false;this.isTransitioning=false;this.destroyed=false;this.views=[];this.animated=true;this.ionNavWillLoad=a(this,"ionNavWillLoad",7);this.ionNavWillChange=a(this,"ionNavWillChange",3);this.ionNavDidChange=a(this,"ionNavDidChange",3)}e.prototype.swipeGestureChanged=function(){if(this.gesture){this.gesture.enable(this.swipeGesture===true)}};e.prototype.rootChanged=function(){if(this.root!==undefined){if(!this.useRouter){this.setRoot(this.root,this.rootParams)}}};e.prototype.componentWillLoad=function(){this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]");if(this.swipeGesture===undefined){var e=s(this);this.swipeGesture=u.getBoolean("swipeBackEnabled",e==="ios")}this.ionNavWillLoad.emit()};e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:this.rootChanged();e=this;return[4,t.import("./p-bf19d3e4.system.js")];case 1:e.gesture=r.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this));this.swipeGestureChanged();return[2]}}))}))};e.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var r=t[e];v(r.element,g);r._destroy()}if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.transInstr.length=this.views.length=0;this.destroyed=true};e.prototype.push=function(e,t,r,n){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:r},n)};e.prototype.insert=function(e,t,r,n,i){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:r}],opts:n},i)};e.prototype.insertPages=function(e,t,r,n){return this.queueTrns({insertStart:e,insertViews:t,opts:r},n)};e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)};e.prototype.popTo=function(e,t,r){var n={removeStart:-1,removeCount:-1,opts:t};if(typeof e==="object"&&e.component){n.removeView=e;n.removeStart=1}else if(typeof e==="number"){n.removeStart=e+1}return this.queueTrns(n,r)};e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)};e.prototype.removeIndex=function(e,t,r,n){if(t===void 0){t=1}return this.queueTrns({removeStart:e,removeCount:t,opts:r},n)};e.prototype.setRoot=function(e,t,r,n){return this.setPages([{page:e,params:t}],r,n)};e.prototype.setPages=function(e,t,r){if(t==null){t={}}if(t.animated!==true){t.animated=false}return this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},r)};e.prototype.setRouteId=function(e,t,r){var n=this;var i=this.getActiveSync();if(A(i,e,t)){return Promise.resolve({changed:false,element:i.element})}var o;var a=new Promise((function(e){return o=e}));var s;var u={updateURL:false,viewIsReady:function(e){var t;var r=new Promise((function(e){return t=e}));o({changed:true,element:e,markVisible:function(){return __awaiter(n,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:t();return[4,s];case 1:e.sent();return[2]}}))}))}});return r}};if(r==="root"){s=this.setRoot(e,t,u)}else{var f=this.views.find((function(r){return A(r,e,t)}));if(f){s=this.popTo(f,Object.assign(Object.assign({},u),{direction:"back"}))}else if(r==="forward"){s=this.push(e,t,u)}else if(r==="back"){s=this.setRoot(e,t,Object.assign(Object.assign({},u),{direction:"back",animated:true}))}}return a};e.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e=this.getActiveSync();return[2,e?{id:e.element.tagName,params:e.params,element:e.element}:undefined]}))}))};e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())};e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])};e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))};e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))};e.prototype.getLength=function(){return this.views.length};e.prototype.getActiveSync=function(){return this.views[this.views.length-1]};e.prototype.canGoBackSync=function(e){if(e===void 0){e=this.getActiveSync()}return!!(e&&this.getPreviousSync(e))};e.prototype.getPreviousSync=function(e){if(e===void 0){e=this.getActiveSync()}if(!e){return undefined}var t=this.views;var r=t.indexOf(e);return r>0?t[r-1]:undefined};e.prototype.queueTrns=function(e,t){if(this.isTransitioning&&e.opts!=null&&e.opts.skipIfBusy){return Promise.resolve(false)}var r=new Promise((function(t,r){e.resolve=t;e.reject=r}));e.done=t;if(e.insertViews&&e.insertViews.length===0){e.insertViews=undefined}this.transInstr.push(e);this.nextTrns();return r};e.prototype.success=function(e,t){if(this.destroyed){this.fireError("nav controller was destroyed",t);return}if(t.done){t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction)}t.resolve(e.hasCompleted);if(t.opts.updateURL!==false&&this.useRouter){var r=document.querySelector("ion-router");if(r){var n=e.direction==="back"?"back":"forward";r.navChanged(n)}}};e.prototype.failed=function(e,t){if(this.destroyed){this.fireError("nav controller was destroyed",t);return}this.transInstr.length=0;this.fireError(e,t)};e.prototype.fireError=function(e,t){if(t.done){t.done(false,false,e)}if(t.reject&&!this.destroyed){t.reject(e)}else{t.resolve(false)}};e.prototype.nextTrns=function(){if(this.isTransitioning){return false}var e=this.transInstr.shift();if(!e){return false}this.runTransition(e);return true};e.prototype.runTransition=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r,n,i,o,a;return __generator(this,(function(s){switch(s.label){case 0:s.trys.push([0,6,,7]);this.ionNavWillChange.emit();this.isTransitioning=true;this.prepareTI(e);t=this.getActiveSync();r=this.getEnteringView(e,t);if(!t&&!r){throw new Error("no views in the stack to be removed")}if(!(r&&r.state===k))return[3,2];return[4,r.init(this.el)];case 1:s.sent();s.label=2;case 2:this.postViewInit(r,t,e);n=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&r!==t;if(!n)return[3,4];return[4,this.transition(r,t,e)];case 3:o=s.sent();return[3,5];case 4:o={hasCompleted:true,requiresTransition:false};s.label=5;case 5:i=o;this.success(i,e);this.ionNavDidChange.emit();return[3,7];case 6:a=s.sent();this.failed(a,e);return[3,7];case 7:this.isTransitioning=false;this.nextTrns();return[2]}}))}))};e.prototype.prepareTI=function(e){var t=this.views.length;e.opts=e.opts||{};if(e.opts.delegate===undefined){e.opts.delegate=this.delegate}if(e.removeView!==undefined){h(e.removeStart!==undefined,"removeView needs removeStart");h(e.removeCount!==undefined,"removeView needs removeCount");var r=this.views.indexOf(e.removeView);if(r<0){throw new Error("removeView was not found")}e.removeStart+=r}if(e.removeStart!==undefined){if(e.removeStart<0){e.removeStart=t-1}if(e.removeCount<0){e.removeCount=t-e.removeStart}e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t}if(e.insertViews){if(e.insertStart<0||e.insertStart>t){e.insertStart=t}e.enteringRequiresTransition=e.insertStart===t}var n=e.insertViews;if(!n){return}h(n.length>0,"length can not be zero");var i=B(n);if(i.length===0){throw new Error("invalid views to insert")}for(var o=0,a=i;o<a.length;o++){var s=a[o];s.delegate=e.opts.delegate;var u=s.nav;if(u&&u!==this){throw new Error("inserted view was already inserted")}if(s.state===V){throw new Error("inserted view was already destroyed")}}e.insertViews=i};e.prototype.getEnteringView=function(e,t){var r=e.insertViews;if(r!==undefined){return r[r.length-1]}var n=e.removeStart;if(n!==undefined){var i=this.views;var o=n+e.removeCount;for(var a=i.length-1;a>=0;a--){var s=i[a];if((a<n||a>=o)&&s!==t){return s}}}return undefined};e.prototype.postViewInit=function(e,t,r){h(t||e,"Both leavingView and enteringView are null");h(r.resolve,"resolve must be valid");h(r.reject,"reject must be valid");var n=r.opts;var i=r.insertViews;var o=r.removeStart;var a=r.removeCount;var s;if(o!==undefined&&a!==undefined){h(o>=0,"removeStart can not be negative");h(a>=0,"removeCount can not be negative");s=[];for(var u=0;u<a;u++){var f=this.views[u+o];if(f&&f!==e&&f!==t){s.push(f)}}n.direction=n.direction||"back"}var c=this.views.length+(i!==undefined?i.length:0)-(a!==undefined?a:0);h(c>=0,"final balance can not be negative");if(c===0){console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el);throw new Error("navigation stack needs at least one root page")}if(i){var l=r.insertStart;for(var p=0,d=i;p<d.length;p++){var f=d[p];this.insertViewAt(f,l);l++}if(r.enteringRequiresTransition){n.direction=n.direction||"forward"}}if(s&&s.length>0){for(var y=0,b=s;y<b.length;y++){var f=b[y];v(f.element,m);v(f.element,w);v(f.element,g)}for(var _=0,S=s;_<S.length;_++){var f=S[_];this.destroyView(f)}}};e.prototype.transition=function(e,t,r){return __awaiter(this,void 0,void 0,(function(){var n,i,o,a,f,c,h;var l=this;return __generator(this,(function(v){switch(v.label){case 0:n=r.opts;i=n.progressAnimation?function(e){return l.sbAni=e}:undefined;o=s(this);a=e.element;f=t&&t.element;c=Object.assign({mode:o,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||n.animationBuilder||u.get("navAnimation"),progressCallback:i,animated:this.animated&&u.getBoolean("animated",true),enteringEl:a,leavingEl:f},n);return[4,p(c)];case 1:h=v.sent().hasCompleted;return[2,this.transitionFinish(h,e,t,n)]}}))}))};e.prototype.transitionFinish=function(e,t,r,n){var i=e?t:r;if(i){this.cleanup(i)}return{hasCompleted:e,requiresTransition:true,enteringView:t,leavingView:r,direction:n.direction}};e.prototype.insertViewAt=function(e,t){var r=this.views;var n=r.indexOf(e);if(n>-1){h(e.nav===this,"view is not part of the nav");r.splice(t,0,r.splice(n,1)[0])}else{h(!e.nav,"nav is used");e.nav=this;r.splice(t,0,e)}};e.prototype.removeView=function(e){h(e.state===E||e.state===V,"view state should be loaded or destroyed");var t=this.views;var r=t.indexOf(e);h(r>-1,"view must be part of the stack");if(r>=0){t.splice(r,1)}};e.prototype.destroyView=function(e){e._destroy();this.removeView(e)};e.prototype.cleanup=function(e){if(this.destroyed){return}var t=this.views;var r=t.indexOf(e);for(var n=t.length-1;n>=0;n--){var i=t[n];var o=i.element;if(n>r){v(o,g);this.destroyView(i)}else if(n<r){d(o,true)}}};e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&this.transInstr.length===0&&this.animationEnabled&&this.canGoBackSync()};e.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:true}},undefined)};e.prototype.onMove=function(e){if(this.sbAni){this.sbAni.progressStep(e)}};e.prototype.onEnd=function(e,t,r){var n=this;if(this.sbAni){this.animationEnabled=false;this.sbAni.onFinish((function(){n.animationEnabled=true}),{oneTimeCallback:true});var i=e?-.001:.001;if(!e){this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)");i+=c([0,0],[1,0],[.68,.28],[1,1],t)[0]}else{i+=c([0,0],[.32,.72],[0,1],[1,1],t)[0]}this.sbAni.progressEnd(e?1:0,i,r)}};e.prototype.render=function(){return n("slot",null)};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:true,configurable:true});return e}());N.style=I;var q=e("ion_route",function(){function e(e){r(this,e);this.url="";this.ionRouteDataChanged=a(this,"ionRouteDataChanged",7)}e.prototype.onUpdate=function(e){this.ionRouteDataChanged.emit(e)};e.prototype.onComponentProps=function(e,t){if(e===t){return}var r=e?Object.keys(e):[];var n=t?Object.keys(t):[];if(r.length!==n.length){this.onUpdate(e);return}for(var i=0,o=r;i<o.length;i++){var a=o[i];if(e[a]!==t[a]){this.onUpdate(e);return}}};e.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()};Object.defineProperty(e,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:true,configurable:true});return e}());var L="root";var x="forward";var D="back";var U=function(e){var t=e.filter((function(e){return e.length>0})).join("/");return"/"+t};var G=function(e){var t=[];for(var r=0,n=e;r<n.length;r++){var i=n[r];for(var o=0,a=i.path;o<a.length;o++){var s=a[o];if(s[0]===":"){var u=i.params&&i.params[s.slice(1)];if(!u){return null}t.push(u)}else if(s!==""){t.push(s)}}}return t};var W=function(e,t,r,n,i,o){var a=U(__spreadArrays(M(t),n));if(r){a="#"+a}if(i===x){e.pushState(o,"",a)}else{e.replaceState(o,"",a)}};var H=function(e,t){if(e.length>t.length){return null}if(e.length<=1&&e[0]===""){return t}for(var r=0;r<e.length;r++){if(e[r].length>0&&e[r]!==t[r]){return null}}if(t.length===e.length){return[""]}return t.slice(e.length)};var F=function(e,t,r){var n=e.pathname;if(r){var i=e.hash;n=i[0]==="#"?i.slice(1):""}var o=M(t);var a=M(n);return H(o,a)};var M=function(e){if(e==null){return[""]}var t=e.split("/").map((function(e){return e.trim()})).filter((function(e){return e.length>0}));if(t.length===0){return[""]}else{return t}};var z=function(e){console.group("[ion-core] ROUTES["+e.length+"]");var t=function(e){var t=[];e.forEach((function(e){return t.push.apply(t,e.path)}));var r=e.map((function(e){return e.id}));console.debug("%c "+U(t),"font-weight: bold; padding-left: 20px","=>\t","("+r.join(", ")+")")};for(var r=0,n=e;r<n.length;r++){var i=n[r];t(i)}console.groupEnd()};var $=function(e){console.group("[ion-core] REDIRECTS["+e.length+"]");for(var t=0,r=e;t<r.length;t++){var n=r[t];if(n.to){console.debug("FROM: ","$c "+U(n.from),"font-weight: bold"," TO: ","$c "+U(n.to),"font-weight: bold")}}console.groupEnd()};var Y=function(e,t,r,n,i){if(i===void 0){i=false}return __awaiter(b,void 0,void 0,(function(){var o,a,s,u;return __generator(this,(function(f){switch(f.label){case 0:f.trys.push([0,6,,7]);o=X(e);if(n>=t.length||!o){return[2,i]}return[4,o.componentOnReady()];case 1:f.sent();a=t[n];return[4,o.setRouteId(a.id,a.params,r)];case 2:s=f.sent();if(s.changed){r=L;i=true}return[4,Y(s.element,t,r,n+1,i)];case 3:i=f.sent();if(!s.markVisible)return[3,5];return[4,s.markVisible()];case 4:f.sent();f.label=5;case 5:return[2,i];case 6:u=f.sent();console.error(u);return[2,false];case 7:return[2]}}))}))};var J=function(e){return __awaiter(b,void 0,void 0,(function(){var t,r,n,i;return __generator(this,(function(o){switch(o.label){case 0:t=[];n=e;o.label=1;case 1:if(!true)return[3,5];r=X(n);if(!r)return[3,3];return[4,r.getRouteId()];case 2:i=o.sent();if(i){n=i.element;i.element=undefined;t.push(i)}else{return[3,5]}return[3,4];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:t,outlet:r}]}}))}))};var K=function(){if(X(document.body)){return Promise.resolve()}return new Promise((function(e){window.addEventListener("ionNavWillLoad",e,{once:true})}))};var Q=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";var X=function(e){if(!e){return undefined}if(e.matches(Q)){return e}var t=e.querySelector(Q);return t?t:undefined};var Z=function(e,t){var r=t.from,n=t.to;if(n===undefined){return false}if(r.length>e.length){return false}for(var i=0;i<r.length;i++){var o=r[i];if(o==="*"){return true}if(o!==e[i]){return false}}return r.length===e.length};var ee=function(e,t){return t.find((function(t){return Z(e,t)}))};var te=function(e,t){var r=Math.min(e.length,t.length);var n=0;for(;n<r;n++){if(e[n].toLowerCase()!==t[n].id){break}}return n};var re=function(e,t){var r=new se(e);var n=false;var i;for(var o=0;o<t.length;o++){var a=t[o].path;if(a[0]===""){n=true}else{for(var s=0,u=a;s<u.length;s++){var f=u[s];var c=r.next();if(f[0]===":"){if(c===""){return null}i=i||[];var h=i[o]||(i[o]={});h[f.slice(1)]=c}else if(c!==f){return null}}n=false}}var l=n?n===(r.next()===""):true;if(!l){return null}if(i){return t.map((function(e,t){return{id:e.id,path:e.path,params:ne(e.params,i[t])}}))}return t};var ne=function(e,t){if(!e&&t){return t}else if(e&&!t){return e}else if(e&&t){return Object.assign(Object.assign({},e),t)}return undefined};var ie=function(e,t){var r=null;var n=0;var i=e.map((function(e){return e.id}));for(var o=0,a=t;o<a.length;o++){var s=a[o];var u=te(i,s);if(u>n){r=s;n=u}}if(r){return r.map((function(t,r){return{id:t.id,path:t.path,params:ne(t.params,e[r]&&e[r].params)}}))}return null};var oe=function(e,t){var r=null;var n=0;for(var i=0,o=t;i<o.length;i++){var a=o[i];var s=re(e,a);if(s!==null){var u=ae(s);if(u>n){n=u;r=s}}}return r};var ae=function(e){var t=1;var r=1;for(var n=0,i=e;n<i.length;n++){var o=i[n];for(var a=0,s=o.path;a<s.length;a++){var u=s[a];if(u[0]===":"){t+=Math.pow(1,r)}else if(u!==""){t+=Math.pow(2,r)}r++}}return t};var se=function(){function e(e){this.path=e.slice()}e.prototype.next=function(){if(this.path.length>0){return this.path.shift()}return""};return e}();var ue=function(e){return Array.from(e.children).filter((function(e){return e.tagName==="ION-ROUTE-REDIRECT"})).map((function(e){var t=he(e,"to");return{from:M(he(e,"from")),to:t==null?undefined:M(t)}}))};var fe=function(e){return le(ce(e))};var ce=function(e,t){if(t===void 0){t=e}return Array.from(t.children).filter((function(e){return e.tagName==="ION-ROUTE"&&e.component})).map((function(t){var r=he(t,"component");if(r==null){throw new Error("component missing in ion-route")}return{path:M(he(t,"url")),id:r.toLowerCase(),params:t.componentProps,children:ce(e,t)}}))};var he=function(e,t){if(t in e){return e[t]}if(e.hasAttribute(t)){return e.getAttribute(t)}return null};var le=function(e){var t=[];for(var r=0,n=e;r<n.length;r++){var i=n[r];ve([],t,i)}return t};var ve=function(e,t,r){var n=e.slice();n.push({id:r.id,path:r.path,params:r.params});if(r.children.length===0){t.push(n);return}for(var i=0,o=r.children;i<o.length;i++){var a=o[i];ve(n,t,a)}};var pe=e("ion_router",function(){function e(e){r(this,e);this.previousPath=null;this.busy=false;this.state=0;this.lastState=0;this.root="/";this.useHash=true;this.ionRouteWillChange=a(this,"ionRouteWillChange",7);this.ionRouteDidChange=a(this,"ionRouteDidChange",7)}e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:console.debug("[ion-router] router will load");return[4,K()];case 1:e.sent();console.debug("[ion-router] found nav");return[4,this.onRoutesChanged()];case 2:e.sent();return[2]}}))}))};e.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",l(this.onRedirectChanged.bind(this),10));window.addEventListener("ionRouteDataChanged",l(this.onRoutesChanged.bind(this),100))};e.prototype.onPopState=function(){var e=this.historyDirection();var t=this.getPath();console.debug("[ion-router] URL changed -> update nav",t,e);return this.writeNavStateRoot(t,e)};e.prototype.onBackButton=function(e){var t=this;e.detail.register(0,(function(){return t.back()}))};e.prototype.push=function(e,t){if(t===void 0){t="forward"}if(e.startsWith(".")){e=new URL(e,window.location.href).pathname}console.debug("[ion-router] URL pushed -> updating nav",e,t);var r=M(e);this.setPath(r,t);return this.writeNavStateRoot(r,t)};e.prototype.back=function(){window.history.back();return Promise.resolve(this.waitPromise)};e.prototype.printDebug=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){console.debug("CURRENT PATH",this.getPath());console.debug("PREVIOUS PATH",this.previousPath);z(fe(this.el));$(ue(this.el));return[2]}))}))};e.prototype.navChanged=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r,n,i,o,a;return __generator(this,(function(s){switch(s.label){case 0:if(this.busy){console.warn("[ion-router] router is busy, navChanged was cancelled");return[2,false]}return[4,J(window.document.body)];case 1:t=s.sent(),r=t.ids,n=t.outlet;i=fe(this.el);o=ie(r,i);if(!o){console.warn("[ion-router] no matching URL for ",r.map((function(e){return e.id})));return[2,false]}a=G(o);if(!a){console.warn("[ion-router] router could not match path because some required param is missing");return[2,false]}console.debug("[ion-router] nav changed -> update URL",r,a);this.setPath(a,e);return[4,this.safeWriteNavState(n,o,L,a,null,r.length)];case 2:s.sent();return[2,true]}}))}))};e.prototype.onRedirectChanged=function(){var e=this.getPath();if(e&&ee(e,ue(this.el))){this.writeNavStateRoot(e,L)}};e.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),L)};e.prototype.historyDirection=function(){var e=window;if(e.history.state===null){this.state++;e.history.replaceState(this.state,e.document.title,e.document.location&&e.document.location.href)}var t=e.history.state;var r=this.lastState;this.lastState=t;if(t>r){return x}else if(t<r){return D}else{return L}};e.prototype.writeNavStateRoot=function(e,t){return __awaiter(this,void 0,void 0,(function(){var r,n,i,o,a;return __generator(this,(function(s){if(!e){console.error("[ion-router] URL is not part of the routing set");return[2,false]}r=ue(this.el);n=ee(e,r);i=null;if(n){this.setPath(n.to,t);i=n.from;e=n.to}o=fe(this.el);a=oe(e,o);if(!a){console.error("[ion-router] the path does not match any route");return[2,false]}return[2,this.safeWriteNavState(document.body,a,t,e,i)]}))}))};e.prototype.safeWriteNavState=function(e,t,r,n,i,o){if(o===void 0){o=0}return __awaiter(this,void 0,void 0,(function(){var a,s,u;return __generator(this,(function(f){switch(f.label){case 0:return[4,this.lock()];case 1:a=f.sent();s=false;f.label=2;case 2:f.trys.push([2,4,,5]);return[4,this.writeNavState(e,t,r,n,i,o)];case 3:s=f.sent();return[3,5];case 4:u=f.sent();console.error(u);return[3,5];case 5:a();return[2,s]}}))}))};e.prototype.lock=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(r){switch(r.label){case 0:e=this.waitPromise;this.waitPromise=new Promise((function(e){return t=e}));if(!(e!==undefined))return[3,2];return[4,e];case 1:r.sent();r.label=2;case 2:return[2,t]}}))}))};e.prototype.writeNavState=function(e,t,r,n,i,o){if(o===void 0){o=0}return __awaiter(this,void 0,void 0,(function(){var a,s;return __generator(this,(function(u){switch(u.label){case 0:if(this.busy){console.warn("[ion-router] router is busy, transition was cancelled");return[2,false]}this.busy=true;a=this.routeChangeEvent(n,i);if(a){this.ionRouteWillChange.emit(a)}return[4,Y(e,t,r,o)];case 1:s=u.sent();this.busy=false;if(s){console.debug("[ion-router] route changed",n)}if(a){this.ionRouteDidChange.emit(a)}return[2,s]}}))}))};e.prototype.setPath=function(e,t){this.state++;W(window.history,this.root,this.useHash,e,t,this.state)};e.prototype.getPath=function(){return F(window.location,this.root,this.useHash)};e.prototype.routeChangeEvent=function(e,t){var r=this.previousPath;var n=U(e);this.previousPath=n;if(n===r){return null}var i=t?U(t):null;return{from:r,redirectedFrom:i,to:n}};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});return e}())}}}));