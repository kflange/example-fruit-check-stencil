System.register(["./p-716ccb21.system.js","./p-8555ea48.system.js","./p-6676c62c.system.js","./p-e9fe2532.system.js"],(function(e){"use strict";var n,i,r,s,t,c,l,o,u;return{setters:[function(e){n=e.r;i=e.h;r=e.H;s=e.c},function(e){t=e.g;c=e.c;l=e.a},function(e){o=e.s},function(e){u=e.S}],execute:function(){var h=e("ion_refresher_content",function(){function e(e){n(this,e)}e.prototype.componentWillLoad=function(){if(this.pullingIcon===undefined){var e=t(this);var n=this.el.style.webkitOverflowScrolling!==undefined?"lines":"arrow-down";this.pullingIcon=c.get("refreshingIcon",e==="ios"&&l("mobile")?c.get("spinner",n):"circular")}if(this.refreshingSpinner===undefined){var e=t(this);this.refreshingSpinner=c.get("refreshingSpinner",c.get("spinner",e==="ios"?"lines":"circular"))}};e.prototype.render=function(){var e=this.pullingIcon;var n=e!=null&&u[e]!==undefined;var s=t(this);return i(r,{class:s},i("div",{class:"refresher-pulling"},this.pullingIcon&&n&&i("div",{class:"refresher-pulling-icon"},i("div",{class:"spinner-arrow-container"},i("ion-spinner",{name:this.pullingIcon,paused:true}),s==="md"&&this.pullingIcon==="circular"&&i("div",{class:"arrow-container"},i("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!n&&i("div",{class:"refresher-pulling-icon"},i("ion-icon",{icon:this.pullingIcon,lazy:false})),this.pullingText&&i("div",{class:"refresher-pulling-text",innerHTML:o(this.pullingText)})),i("div",{class:"refresher-refreshing"},this.refreshingSpinner&&i("div",{class:"refresher-refreshing-icon"},i("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&i("div",{class:"refresher-refreshing-text",innerHTML:o(this.refreshingText)})))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});return e}())}}}));