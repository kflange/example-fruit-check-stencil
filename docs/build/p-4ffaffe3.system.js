System.register(["./p-8fbc4b9b.system.js"],(function(e){"use strict";var r;return{setters:[function(t){r=t.G;e("GESTURE_CONTROLLER",t.G)}],execute:function(){var t=function(e,r,t,a){var i=n(e)?{capture:!!a.capture,passive:!!a.passive}:!!a.capture;var u;var f;if(e["__zone_symbol__addEventListener"]){u="__zone_symbol__addEventListener";f="__zone_symbol__removeEventListener"}else{u="addEventListener";f="removeEventListener"}e[u](r,t,i);return function(){e[f](r,t,i)}};var n=function(e){if(a===undefined){try{var r=Object.defineProperty({},"passive",{get:function(){a=true}});e.addEventListener("optsTest",(function(){return}),r)}catch(t){a=false}}return!!a};var a;var i=2e3;var u=function(e,r,n,a,u){var v;var s;var c;var o;var l;var d;var m;var p=0;var y=function(a){p=Date.now()+i;if(!r(a)){return}if(!s&&n){s=t(e,"touchmove",n,u)}if(!c){c=t(e,"touchend",Y,u)}if(!o){o=t(e,"touchcancel",Y,u)}};var X=function(a){if(p>Date.now()){return}if(!r(a)){return}if(!d&&n){d=t(f(e),"mousemove",n,u)}if(!m){m=t(f(e),"mouseup",h,u)}};var Y=function(e){_();if(a){a(e)}};var h=function(e){b();if(a){a(e)}};var _=function(){if(s){s()}if(c){c()}if(o){o()}s=c=o=undefined};var b=function(){if(d){d()}if(m){m()}d=m=undefined};var g=function(){_();b()};var T=function(r){if(r===void 0){r=true}if(!r){if(v){v()}if(l){l()}v=l=undefined;g()}else{if(!v){v=t(e,"touchstart",y,u)}if(!l){l=t(e,"mousedown",X,u)}}};var E=function(){T(false);a=n=r=undefined};return{enable:T,stop:g,destroy:E}};var f=function(e){return e instanceof Document?e:e.ownerDocument};var v=function(e,r,t){var n=t*(Math.PI/180);var a=e==="x";var i=Math.cos(n);var u=r*r;var f=0;var v=0;var s=false;var c=0;return{start:function(e,r){f=e;v=r;c=0;s=true},detect:function(e,r){if(!s){return false}var t=e-f;var n=r-v;var o=t*t+n*n;if(o<u){return false}var l=Math.sqrt(o);var d=(a?t:n)/l;if(d>i){c=1}else if(d<-i){c=-1}else{c=0}s=false;return true},isGesture:function(){return c!==0},getDirection:function(){return c}}};var s=e("createGesture",(function(e){var t=false;var n=false;var a=true;var i=false;var f=Object.assign({disableScroll:false,direction:"x",gesturePriority:0,passive:true,maxAngle:40,threshold:10},e);var s=f.canStart;var d=f.onWillStart;var m=f.onStart;var p=f.onEnd;var y=f.notCaptured;var X=f.onMove;var Y=f.threshold;var h={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:undefined,data:undefined};var _=v(f.direction,f.threshold,f.maxAngle);var b=r.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll});var g=function(e){var r=l(e);if(n||!a){return false}o(e,h);h.startX=h.currentX;h.startY=h.currentY;h.startTime=h.currentTime=r;h.velocityX=h.velocityY=h.deltaX=h.deltaY=0;h.event=e;if(s&&s(h)===false){return false}b.release();if(!b.start()){return false}n=true;if(Y===0){return S()}_.start(h.startX,h.startY);return true};var T=function(e){if(t){if(!i&&a){i=true;c(h,e);requestAnimationFrame(E)}return}c(h,e);if(_.detect(h.currentX,h.currentY)){if(!_.isGesture()||!S()){x()}}};var E=function(){if(!t){return}i=false;if(X){X(h)}};var S=function(){if(b&&!b.capture()){return false}t=true;a=false;h.startX=h.currentX;h.startY=h.currentY;h.startTime=h.currentTime;if(d){d(h).then(L)}else{L()}return true};var L=function(){if(m){m(h)}a=true};var G=function(){t=false;n=false;i=false;a=true;b.release()};var D=function(e){var r=t;var n=a;G();if(!n){return}c(h,e);if(r){if(p){p(h)}return}if(y){y(h)}};var w=u(f.el,g,T,D,{capture:false});var x=function(){G();w.stop();if(y){y(h)}};return{enable:function(e){if(e===void 0){e=true}if(!e){if(t){D(undefined)}G()}w.enable(e)},destroy:function(){b.destroy();w.destroy()}}}));var c=function(e,r){if(!r){return}var t=e.currentX;var n=e.currentY;var a=e.currentTime;o(r,e);var i=e.currentX;var u=e.currentY;var f=e.currentTime=l(r);var v=f-a;if(v>0&&v<100){var s=(i-t)/v;var c=(u-n)/v;e.velocityX=s*.7+e.velocityX*.3;e.velocityY=c*.7+e.velocityY*.3}e.deltaX=i-e.startX;e.deltaY=u-e.startY;e.event=r};var o=function(e,r){var t=0;var n=0;if(e){var a=e.changedTouches;if(a&&a.length>0){var i=a[0];t=i.clientX;n=i.clientY}else if(e.pageX!==undefined){t=e.pageX;n=e.pageY}}r.currentX=t;r.currentY=n};var l=function(e){return e.timeStamp||Date.now()}}}}));