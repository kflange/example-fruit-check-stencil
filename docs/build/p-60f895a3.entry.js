import{r as t,d as o,h as s,H as a}from"./p-5f108aff.js";import{g as i}from"./p-6c421054.js";import{n as r}from"./p-56dbf9e6.js";import{GESTURE_CONTROLLER as n}from"./p-78321f41.js";const c=class{constructor(s){t(this,s),this.lastClick=-1e4,this.blocker=n.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0,this.ionBackdropTap=o(this,"ionBackdropTap",7)}connectedCallback(){this.stopPropagation&&this.blocker.block()}disconnectedCallback(){this.blocker.unblock()}onTouchStart(t){this.lastClick=r(t),this.emitTap(t)}onMouseDown(t){this.lastClick<r(t)-2500&&this.emitTap(t)}emitTap(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){const t=i(this);return s(a,{tabindex:"-1",class:{[t]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};c.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"};export{c as ion_backdrop}