import{r as registerInstance,c as createEvent,h,H as Host,g as getElement}from"./index-527d390a.js";import{g as getElementDir}from"./dom-d9ba1da4.js";import{g as guid}from"./guid-09142681.js";var calciteCheckboxCss="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=light]){--calcite-ui-border-input:$blk-100}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host([scale=s]){--calcite-checkbox-size:var(--calcite-font-size--2);--calcite-checkbox-grid-gap:0.5rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1);--calcite-checkbox-grid-gap:0.5rem}:host([scale=l]){--calcite-checkbox-size:var(--calcite-font-size-1);--calcite-checkbox-grid-gap:0.75rem}:host{display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg{width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size);overflow:hidden;display:inline-block;background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);fill:var(--calcite-ui-background);pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}:host .hasLabel{display:grid;grid-gap:var(--calcite-checkbox-grid-gap);-ms-flex-align:center;align-items:center;--calcite-label-margin-bottom:0}:host(:hover) .check-svg,:host([hovered]) .check-svg{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host(:focus) .check-svg,:host([focused]) .check-svg{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([disabled]){cursor:default;opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}:host([scale=s]) .hasLabel{grid-template-columns:12px 1fr 4px;grid-template-rows:16px 1fr}:host([scale=m]) .hasLabel{grid-template-columns:16px 1fr 4px;grid-template-rows:20px 1fr}:host([scale=l]) .hasLabel{grid-template-columns:20px 1fr 4px;grid-template-rows:24px 1fr}";var CalciteCheckbox=function(){function e(e){var t=this;registerInstance(this,e);this.calciteCheckboxChange=createEvent(this,"calciteCheckboxChange",7);this.calciteCheckboxFocusedChange=createEvent(this,"calciteCheckboxFocusedChange",7);this.checked=false;this.disabled=false;this.focused=false;this.hovered=false;this.indeterminate=false;this.name="";this.scale="m";this.checkedPath="M12.753 3l-7.319 7.497L3.252 8.31 2 9.373l3.434 3.434L14 4.24z";this.indeterminatePath="M4 7h8v2H4z";this.getPath=function(){return t.indeterminate?t.indeterminatePath:t.checked?t.checkedPath:""};this.toggle=function(){if(!t.disabled){t.checked=!t.checked;t.focused=true;t.indeterminate=false;t.calciteCheckboxChange.emit()}};this.formResetHandler=function(){t.checked=t.initialChecked};this.nativeLabelClickHandler=function(e){var i=e.target;if(!t.el.closest("calcite-label")&&i.nodeName==="LABEL"&&i.parentNode.nodeName!=="CALCITE-LABEL"&&t.el.id&&i.htmlFor===t.el.id){t.toggle()}}}e.prototype.checkedWatcher=function(e){this.input.checked=e};e.prototype.disabledChanged=function(e){this.input.disabled=e};e.prototype.focusedChanged=function(e){if(e&&!this.el.hasAttribute("hidden")){this.input.focus()}else{this.input.blur()}};e.prototype.nameChanged=function(e){this.input.name=e};e.prototype.onClick=function(e){if(e.target===this.el){e.preventDefault()}this.toggle()};e.prototype.mouseenter=function(){this.hovered=true};e.prototype.mouseleave=function(){this.hovered=false};e.prototype.onInputBlur=function(){this.focused=false;this.calciteCheckboxFocusedChange.emit()};e.prototype.onInputFocus=function(){this.focused=true;this.calciteCheckboxFocusedChange.emit()};e.prototype.connectedCallback=function(){this.guid=this.el.id||"calcite-checkbox-"+guid();this.initialChecked=this.checked;this.renderHiddenCheckboxInput();var e=this.el.closest("form");if(e){e.addEventListener("reset",this.formResetHandler)}document.addEventListener("click",this.nativeLabelClickHandler)};e.prototype.disconnectedCallback=function(){this.input.parentNode.removeChild(this.input);var e=this.el.closest("form");if(e){e.removeEventListener("reset",this.formResetHandler)}document.removeEventListener("click",this.nativeLabelClickHandler)};e.prototype.renderHiddenCheckboxInput=function(){this.input=document.createElement("input");this.checked&&this.input.setAttribute("checked","");this.input.disabled=this.disabled;this.input.id=this.guid+"-input";this.input.name=this.name;this.input.onblur=this.onInputBlur.bind(this);this.input.onfocus=this.onInputFocus.bind(this);this.input.style.setProperty("margin","0","important");this.input.style.setProperty("opacity","0","important");this.input.style.setProperty("padding","0","important");this.input.style.setProperty("position","absolute","important");this.input.style.setProperty("transform","none","important");this.input.style.setProperty("z-index","-1","important");this.input.type="checkbox";if(this.value){this.input.value=this.value}this.el.appendChild(this.input)};e.prototype.render=function(){if(this.el.textContent){return h(Host,{"aria-checked":this.checked.toString(),role:"checkbox"},h("div",{class:"hasLabel"},h("svg",{class:"check-svg",viewBox:"0 0 16 16"},h("path",{d:this.getPath()})),h("calcite-label",{dir:getElementDir(this.el),"disable-spacing":true,scale:this.scale},h("slot",null))))}return h(Host,{"aria-checked":this.checked.toString(),role:"checkbox"},h("svg",{class:"check-svg",viewBox:"0 0 16 16"},h("path",{d:this.getPath()})),h("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedWatcher"],disabled:["disabledChanged"],focused:["focusedChanged"],name:["nameChanged"]}},enumerable:false,configurable:true});return e}();CalciteCheckbox.style=calciteCheckboxCss;export{CalciteCheckbox as calcite_checkbox};