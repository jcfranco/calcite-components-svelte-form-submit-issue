import { r as registerInstance, h, H as Host, g as getElement } from './index-527d390a.js';
import { g as getElementDir } from './dom-d9ba1da4.js';

const calciteTileSelectCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host{background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:0 0 0 1px var(--calcite-ui-border-2);box-shadow:0 0 0 1px var(--calcite-ui-border-2);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:inline-block;max-width:300px;padding:0.75rem;position:relative;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;vertical-align:top;z-index:10}:host(:hover){z-index:20;-webkit-box-shadow:0 0 0 1px var(--calcite-ui-border-1);box-shadow:0 0 0 1px var(--calcite-ui-border-1)}:host([checked]){z-index:30;-webkit-box-shadow:0 0 0 1px var(--calcite-ui-brand);box-shadow:0 0 0 1px var(--calcite-ui-brand)}:host([focused]){z-index:30}:host(:not([input-enabled]):hover){-webkit-box-shadow:0 0 0 1px var(--calcite-ui-brand);box-shadow:0 0 0 1px var(--calcite-ui-brand)}:host(:not([input-enabled])[focused]){-webkit-box-shadow:0 0 0 1px var(--calcite-ui-brand), inset 0 0 0 2px var(--calcite-ui-foreground-1), inset 0 0 0 5px var(--calcite-ui-brand);box-shadow:0 0 0 1px var(--calcite-ui-brand), inset 0 0 0 2px var(--calcite-ui-foreground-1), inset 0 0 0 5px var(--calcite-ui-brand)}:host([width=full]){max-width:none;display:block}:host(:not([input-enabled])) ::slotted(calcite-checkbox),:host(:not([input-enabled])) ::slotted(calcite-radio-button){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([heading]:not([icon]):not([description])){-ms-flex-align:center;align-items:center}:host([input-enabled][input-alignment=start][icon][heading][description]),:host([input-enabled][input-alignment=start]:not([icon])[heading]:not([description])){display:inline-grid;grid-gap:0.75rem;grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr}:host([input-enabled][input-alignment=start][icon][heading][description]) ::slotted(calcite-checkbox),:host([input-enabled][input-alignment=start][icon][heading][description]) ::slotted(calcite-radio-button),:host([input-enabled][input-alignment=start]:not([icon])[heading]:not([description])) ::slotted(calcite-checkbox),:host([input-enabled][input-alignment=start]:not([icon])[heading]:not([description])) ::slotted(calcite-radio-button){-ms-flex-order:0;order:0}:host([input-enabled][input-alignment=start][icon][heading][description]) calcite-tile,:host([input-enabled][input-alignment=start]:not([icon])[heading]:not([description])) calcite-tile{-ms-flex-order:1;order:1}:host([input-enabled][input-alignment=start][icon][heading]:not([description])) ::slotted(calcite-checkbox),:host([input-enabled][input-alignment=start][icon][heading]:not([description])) ::slotted(calcite-radio-button){position:absolute;top:0.75rem;left:0.75rem}:host([dir=rtl][input-enabled][input-alignment=start][icon][heading]:not([description])) ::slotted(calcite-checkbox),:host([dir=rtl][input-enabled][input-alignment=start][icon][heading]:not([description])) ::slotted(calcite-radio-button){right:0.75rem;left:unset}:host([input-enabled][input-alignment=end][icon][heading]) ::slotted(calcite-checkbox),:host([input-enabled][input-alignment=end][icon][heading]) ::slotted(calcite-radio-button){position:absolute;top:0.75rem;right:0.75rem}:host([dir=rtl][input-enabled][input-alignment=end][icon][heading]) ::slotted(calcite-checkbox),:host([dir=rtl][input-enabled][input-alignment=end][icon][heading]) ::slotted(calcite-radio-button){right:unset;left:0.75rem}:host([input-enabled][input-alignment=end][heading]:not([icon]):not([description])){display:inline-grid;grid-gap:0.75rem;grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr}:host([input-enabled][input-alignment=end][heading]:not([icon]):not([description])) ::slotted(calcite-checkbox),:host([input-enabled][input-alignment=end][heading]:not([icon]):not([description])) ::slotted(calcite-radio-button){justify-self:flex-end}:host([hidden]){display:none}:host([disabled]){opacity:0.5;pointer-events:none}";

const CalciteTileSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** The checked state of the tile select. */
    this.checked = false;
    /** The disabled state of the tile select. */
    this.disabled = false;
    /** The focused state of the tile select. */
    this.focused = false;
    /** The hidden state of the tile select. */
    this.hidden = false;
    /** The name of the tile select.  This name will appear in form submissions as either a radio or checkbox identifier based on the `type` property. */
    this.name = "";
    /** Display an interactive radio or checkbox. */
    this.inputEnabled = false;
    /** The side of the tile that the radio or checkbox appears on when inputEnabled is true. */
    this.inputAlignment = "start";
    /** The theme of the tile select. */
    this.theme = "light";
    /** The selection mode of the tile select: radio (single) or checkbox (multiple). */
    this.type = "radio";
    /** specify the width of the tile, defaults to auto */
    this.width = "auto";
  }
  checkedChanged(newChecked) {
    this.input.checked = newChecked;
  }
  nameChanged(newName) {
    this.input.name = newName;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteCheckboxChangeEvent(event) {
    const checkbox = event.target;
    if (checkbox === this.input) {
      this.checked = checkbox.checked;
    }
  }
  calciteCheckboxFocusedChangeEvent(event) {
    const checkbox = event.target;
    if (checkbox === this.input) {
      this.focused = checkbox.focused;
    }
  }
  calciteRadioButtonCheckedChangeEvent(event) {
    const radioButton = event.target;
    if (radioButton === this.input) {
      this.checked = radioButton.checked;
    }
    event.stopPropagation();
  }
  calciteRadioButtonFocusedChangeEvent(event) {
    const radioButton = event.target;
    if (radioButton === this.input) {
      this.focused = radioButton.focused;
    }
  }
  click(event) {
    const target = event.target;
    const targets = ["calcite-tile", "calcite-tile-select"];
    if (targets.includes(target.localName)) {
      this.input.click();
    }
  }
  mouseenter() {
    if (this.input.localName === "calcite-radio-button") {
      this.input.hovered = true;
    }
    if (this.input.localName === "calcite-checkbox") {
      this.input.hovered = true;
    }
  }
  mouseleave() {
    if (this.input.localName === "calcite-radio-button") {
      this.input.hovered = false;
    }
    if (this.input.localName === "calcite-checkbox") {
      this.input.hovered = false;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.renderInput();
  }
  disconnectedCallback() {
    this.input.parentNode.removeChild(this.input);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderInput() {
    this.input = document.createElement(this.type === "radio" ? "calcite-radio-button" : "calcite-checkbox");
    this.input.checked = this.checked;
    this.input.disabled = this.disabled;
    this.input.hidden = this.hidden;
    this.input.id = this.el.id;
    if (this.name) {
      this.input.name = this.name;
    }
    this.input.theme = this.theme;
    if (this.value) {
      this.input.value = this.value;
    }
    this.el.insertAdjacentElement("beforeend", this.input);
  }
  render() {
    const dir = getElementDir(this.el);
    return (h(Host, { dir: dir }, h("calcite-tile", { active: this.checked, description: this.description, embed: true, heading: this.heading, icon: this.icon }), h("slot", null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "checked": ["checkedChanged"],
    "name": ["nameChanged"]
  }; }
};
CalciteTileSelect.style = calciteTileSelectCss;

export { CalciteTileSelect as calcite_tile_select };
