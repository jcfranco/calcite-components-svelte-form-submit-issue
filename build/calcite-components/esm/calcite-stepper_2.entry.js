import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-527d390a.js';
import { g as getElementDir, b as getElementProp } from './dom-d9ba1da4.js';
import { g as getKey } from './key-477fdfc4.js';

const STYLES = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  width: "100%",
  minWidth: "100%"
};
const IESTYLES = JSON.stringify(STYLES)
  .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
  .replace(/[,]/g, ";")
  .replace(/["{}]/g, "")
  .toLowerCase();

const calciteStepperCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:stretch;align-items:stretch;width:100%;min-width:100%}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex:1 auto auto;flex:1 auto auto}:host ::slotted(.calcite-stepper-content){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;min-width:100%}";

const CalciteStepper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteStepperItemChange = createEvent(this, "calciteStepperItemChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** optionally display a status icon next to the step title */
    this.icon = false;
    /** specify the layout of stepper, defaults to horizontal */
    this.layout = "horizontal";
    /** optionally display the number next to the step title */
    this.numbered = false;
    /** specify the scale of stepper, defaults to m */
    this.scale = "m";
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    /** created list of Stepper items */
    this.items = [];
    /** sorted list of Stepper items */
    this.sortedItems = [];
  }
  // watch for removal of disabled to register step
  contentWatcher() {
    if (this.layout === "horizontal") {
      if (!this.stepperContentContainer && this.requestedContent)
        this.addHorizontalContentContainer();
      this.updateContent(this.requestedContent);
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidLoad() {
    // if no stepper items are set as active, default to the first one
    if (!this.currentPosition) {
      this.calciteStepperItemChange.emit({
        position: 0
      });
    }
  }
  componentWillLoad() {
    if (this.layout === "horizontal" && !this.stepperContentContainer)
      this.addHorizontalContentContainer();
  }
  render() {
    const dir = getElementDir(this.el);
    return (h(Host, { dir: dir }, h("slot", null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteStepperItemKeyEvent(e) {
    const item = e.detail.item;
    const itemToFocus = e.target;
    const isFirstItem = this.itemIndex(itemToFocus) === 0;
    const isLastItem = this.itemIndex(itemToFocus) === this.sortedItems.length - 1;
    switch (getKey(item.key)) {
      case "ArrowDown":
      case "ArrowRight":
        if (isLastItem)
          this.focusFirstItem();
        else
          this.focusNextItem(itemToFocus);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        if (isFirstItem)
          this.focusLastItem();
        else
          this.focusPrevItem(itemToFocus);
        break;
      case "Home":
        this.focusFirstItem();
        break;
      case "End":
        this.focusLastItem();
        break;
    }
  }
  registerItem(event) {
    const item = {
      item: event.target,
      position: event.detail.position,
      content: event.detail.content
    };
    if (item.content && item.item.active)
      this.requestedContent = item.content;
    if (!this.items.includes(item))
      this.items.push(item);
    this.sortedItems = this.sortItems();
  }
  updateItem(event) {
    if (event.detail.content)
      this.requestedContent = event.detail.content;
    this.currentPosition = event.detail.position;
    this.calciteStepperItemChange.emit({
      position: this.currentPosition
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** set the next step as active */
  async nextStep() {
    this.currentPosition =
      this.currentPosition + 1 < this.items.length
        ? this.currentPosition + 1
        : this.currentPosition;
    this.emitChangedItem();
  }
  /** set the previous step as active */
  async prevStep() {
    this.currentPosition =
      this.currentPosition - 1 >= 0 ? this.currentPosition - 1 : this.currentPosition;
    this.emitChangedItem();
  }
  /** set the requested step as active */
  async goToStep(num) {
    this.currentPosition = num - 1;
    this.emitChangedItem();
  }
  /** set the first step as active */
  async startStep() {
    this.currentPosition = 0;
    this.emitChangedItem();
  }
  /** set the last step as active */
  async endStep() {
    this.currentPosition = this.items.length - 1;
    this.emitChangedItem();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  addHorizontalContentContainer() {
    this.stepperContentContainer = document.createElement("div");
    this.stepperContentContainer.classList.add("calcite-stepper-content");
    // handle ie styles
    const isIE = !!(navigator.userAgent.match(/Trident/) && !navigator.userAgent.match(/MSIE/));
    if (isIE)
      this.stepperContentContainer.style.cssText = IESTYLES;
    this.el.insertAdjacentElement("beforeend", this.stepperContentContainer);
  }
  emitChangedItem() {
    this.calciteStepperItemChange.emit({
      position: this.currentPosition
    });
  }
  focusFirstItem() {
    const firstItem = this.sortedItems[0];
    this.focusElement(firstItem);
  }
  focusLastItem() {
    const lastItem = this.sortedItems[this.sortedItems.length - 1];
    this.focusElement(lastItem);
  }
  focusNextItem(e) {
    const index = this.itemIndex(e);
    const nextItem = this.sortedItems[index + 1] || this.sortedItems[0];
    this.focusElement(nextItem);
  }
  focusPrevItem(e) {
    const index = this.itemIndex(e);
    const prevItem = this.sortedItems[index - 1] || this.sortedItems[this.sortedItems.length - 1];
    this.focusElement(prevItem);
  }
  itemIndex(e) {
    return this.sortedItems.indexOf(e);
  }
  focusElement(item) {
    const target = item;
    target.focus();
  }
  sortItems() {
    const items = Array.from(this.items)
      .filter((a) => !a.item.disabled)
      .sort((a, b) => a.position - b.position)
      .map((a) => a.item);
    return [...Array.from(new Set(items))];
  }
  updateContent(content) {
    this.stepperContentContainer.innerHTML = "";
    // handle ie
    const isIE = !!(navigator.userAgent.match(/Trident/) && !navigator.userAgent.match(/MSIE/));
    if (!isIE) {
      this.stepperContentContainer.append(...content);
    }
    else {
      // handle ie content
      content.forEach((contentItem) => {
        if (contentItem.nodeName === "#text") {
          const text = document.createTextNode(contentItem.textContent.trim());
          if (text.length > 0)
            this.stepperContentContainer.appendChild(text);
        }
        else if (contentItem.nodeName) {
          this.stepperContentContainer.insertAdjacentHTML("beforeend", contentItem.outerHTML);
        }
        else
          return;
      });
    }
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "requestedContent": ["contentWatcher"]
  }; }
};
CalciteStepper.style = calciteStepperCss;

const calciteStepperItemCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-stepper-item-spacing-unit-s:0.1875rem;--calcite-stepper-item-spacing-unit-m:0.375rem;--calcite-stepper-item-spacing-unit-l:0.75rem;font-size:0.875rem;line-height:1.5}:host([scale=m]){--calcite-stepper-item-spacing-unit-s:0.25rem;--calcite-stepper-item-spacing-unit-m:0.5rem;--calcite-stepper-item-spacing-unit-l:1rem;font-size:0.9375rem;line-height:1.5}:host([scale=l]){--calcite-stepper-item-spacing-unit-s:0.375rem;--calcite-stepper-item-spacing-unit-m:0.75rem;--calcite-stepper-item-spacing-unit-l:1.5rem;font-size:1rem;line-height:1.5}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;text-decoration:none;outline:none;position:relative;border-top:3px solid var(--calcite-ui-border-3);cursor:pointer;margin-right:var(--calcite-stepper-item-spacing-unit-l)}:host([dir=rtl]){margin-left:var(--calcite-stepper-item-spacing-unit-l);margin-right:0}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host .stepper-item-header{display:-ms-flexbox;display:flex;-ms-flex-direction:var(--calcite-stepper-item-flex-direction);flex-direction:var(--calcite-stepper-item-flex-direction);-ms-flex-align:start;align-items:flex-start;cursor:pointer}:host .stepper-item-content,:host .stepper-item-header{padding:var(--calcite-stepper-item-spacing-unit-l) var(--calcite-stepper-item-spacing-unit-m);padding-left:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;text-align:left}:host([dir=rtl]) .stepper-item-content,:host([dir=rtl]) .stepper-item-header{padding-left:initial;padding-right:0;text-align:right}:host .stepper-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host .stepper-item-content{-ms-flex-direction:column;flex-direction:column;width:100%;display:none}:host .stepper-item-icon{margin-right:var(--calcite-stepper-item-spacing-unit-l);margin-top:var(--calcite-stepper-item-spacing-unit-s);color:var(--calcite-ui-text-3);opacity:var(--calcite-ui-opacity-disabled);height:12px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:start;align-self:flex-start;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([dir=rtl]) .stepper-item-icon{margin-left:var(--calcite-stepper-item-spacing-unit-l);margin-right:0}:host .stepper-item-header-text{margin-right:auto;-ms-flex-direction:column;flex-direction:column;text-align:initial}:host([dir=rtl]) .stepper-item-header-text{margin-left:auto;margin-right:0}:host .stepper-item-title,:host .stepper-item-subtitle{display:-ms-flexbox;display:flex;width:100%}:host .stepper-item-title{color:var(--calcite-ui-text-2);font-weight:500}:host .stepper-item-subtitle{color:var(--calcite-ui-text-3)}:host([dir=rtl]) .stepper-item-title{margin-right:0;margin-left:auto}:host .stepper-item-number{font-weight:bold;color:var(--calcite-ui-text-3);margin-right:var(--calcite-stepper-item-spacing-unit-l);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([dir=rtl]) .stepper-item-number{margin-left:var(--calcite-stepper-item-spacing-unit-l);margin-right:initial}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]),:host([disabled]) *{cursor:not-allowed;pointer-events:none}:host([complete]){border-top-color:rgba(0, 122, 194, 0.5)}:host([complete]) .stepper-item-icon{color:var(--calcite-ui-brand)}:host([error]){border-top-color:var(--calcite-ui-danger)}:host([error]) .stepper-item-number{color:var(--calcite-ui-danger)}:host([error]) .stepper-item-icon{color:var(--calcite-ui-danger);opacity:1}:host(:hover:not([disabled]):not([active])),:host(:focus:not([disabled]):not([active])){border-top-color:rgba(0, 122, 194, 0.75)}:host(:hover:not([disabled]):not([active])) .stepper-item-title,:host(:focus:not([disabled]):not([active])) .stepper-item-title{color:var(--calcite-ui-text-1)}:host(:hover:not([disabled]):not([active])) .stepper-item-subtitle,:host(:focus:not([disabled]):not([active])) .stepper-item-subtitle{color:var(--calcite-ui-text-2)}:host([error]:hover:not([disabled]):not([active])),:host([error]:focus:not([disabled]):not([active])){border-top-color:rgba(216, 48, 32, 0.75)}:host([active]){border-top-color:var(--calcite-ui-brand)}:host([active]) .stepper-item-title{color:var(--calcite-ui-text-1)}:host([active]) .stepper-item-subtitle{color:var(--calcite-ui-text-2)}:host([active]) .stepper-item-number{color:var(--calcite-ui-brand)}:host([active]) .stepper-item-icon{color:var(--calcite-ui-brand);opacity:1}:host([layout=vertical]){-ms-flex:1 1 auto;flex:1 1 auto;border-top:0;border-left:3px solid var(--calcite-ui-border-3);padding:0 0 0 var(--calcite-stepper-item-spacing-unit-l);margin:0 0 var(--calcite-stepper-item-spacing-unit-m) 0}:host([layout=vertical]) .stepper-item-icon{margin:var(--calcite-stepper-item-spacing-unit-m) 0 0 auto;padding-left:var(--calcite-stepper-item-spacing-unit-l);-ms-flex-order:3;order:3}:host([layout=vertical]) .stepper-item-header{padding-right:0}:host([layout=vertical]) .stepper-item-content{padding:0}:host([layout=vertical][active]) .stepper-item-content{display:-ms-flexbox;display:flex}:host([layout=vertical][active]) .stepper-item-content ::slotted(:last-child){margin-bottom:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical][dir=rtl]){border-left:0;border-right:3px solid var(--calcite-ui-border-3);padding:0 var(--calcite-stepper-item-spacing-unit-l) 0 0}:host([layout=vertical][dir=rtl]) .stepper-item-icon{margin:var(--calcite-stepper-item-spacing-unit-m) auto 0 0;padding-left:0;padding-right:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical][dir=rtl]) .stepper-item-header{padding-left:0;padding-right:intial}:host([layout=vertical][complete]){border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][error]){border-color:var(--calcite-ui-danger)}:host([layout=vertical][active]){border-color:var(--calcite-ui-brand)}:host([layout=vertical]:hover:not([disabled]):not([active])),:host([layout=vertical]:focus:not([disabled]):not([active])){border-color:rgba(0, 122, 194, 0.75)}:host([layout=vertical][error]:hover:not([disabled]):not([active])),:host([layout=vertical][error]:focus:not([disabled]):not([active])){border-color:rgba(216, 48, 32, 0.75)}";

const CalciteStepperItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteStepperItemKeyEvent = createEvent(this, "calciteStepperItemKeyEvent", 7);
    this.calciteStepperItemSelect = createEvent(this, "calciteStepperItemSelect", 7);
    this.calciteStepperItemRegister = createEvent(this, "calciteStepperItemRegister", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** is the step active */
    this.active = false;
    /** has the step been completed */
    this.complete = false;
    /** does the step contain an error that needs to be resolved by the user */
    this.error = false;
    /** is the step disabled and not navigable to by a user */
    this.disabled = false;
    /** should the items display an icon based on status */
    /** @internal */
    this.icon = false;
    /** optionally display the step number next to the title and subtitle */
    /** @internal */
    this.numbered = false;
    /** the scale of the item */
    /** @internal */
    this.scale = "m";
  }
  // watch for removal of disabled to register step
  disabledWatcher() {
    this.registerStepperItem();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.icon = getElementProp(this.el, "icon", false);
    this.numbered = getElementProp(this.el, "numbered", false);
    this.layout = getElementProp(this.el, "layout", false);
    this.scale = getElementProp(this.el, "scale", "m");
    this.parentStepperEl = this.el.parentElement;
  }
  componentDidLoad() {
    this.itemPosition = this.getItemPosition();
    this.itemContent = this.getItemContent();
    this.registerStepperItem();
    if (this.active)
      this.emitRequestedItem();
  }
  componentDidUpdate() {
    if (this.active)
      this.emitRequestedItem();
  }
  render() {
    const dir = getElementDir(this.el);
    return (h(Host, { "aria-expanded": this.active.toString(), dir: dir, onClick: () => this.emitRequestedItem(), tabindex: this.disabled ? null : 0 }, h("div", { class: "stepper-item-header" }, this.icon ? this.renderIcon() : null, this.numbered ? (h("div", { class: "stepper-item-number" }, this.getItemPosition() + 1, ".")) : null, h("div", { class: "stepper-item-header-text" }, h("span", { class: "stepper-item-title" }, this.itemTitle), h("span", { class: "stepper-item-subtitle" }, this.itemSubtitle))), h("div", { class: "stepper-item-content" }, h("slot", null))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(e) {
    if (!this.disabled && e.target === this.el) {
      switch (getKey(e.key)) {
        case " ":
        case "Enter":
          this.emitRequestedItem();
          e.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
        case "Home":
        case "End":
          this.calciteStepperItemKeyEvent.emit({ item: e });
          e.preventDefault();
          break;
      }
    }
  }
  updateActiveItemOnChange(event) {
    if (event.target === this.parentStepperEl) {
      this.activePosition = event.detail.position;
      this.determineActiveItem();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  renderIcon() {
    const path = this.active
      ? "circleF"
      : this.error
        ? "exclamationMarkCircleF"
        : this.complete
          ? "checkCircleF"
          : "circle";
    return h("calcite-icon", { class: "stepper-item-icon", icon: path, scale: "s" });
  }
  determineActiveItem() {
    this.active = !this.disabled && this.itemPosition === this.activePosition;
  }
  registerStepperItem() {
    this.calciteStepperItemRegister.emit({
      position: this.itemPosition,
      content: this.itemContent
    });
  }
  emitRequestedItem() {
    if (!this.disabled) {
      this.calciteStepperItemSelect.emit({
        position: this.itemPosition,
        content: this.itemContent
      });
    }
  }
  getItemContent() {
    var _a;
    // handle ie and edge
    return ((_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot")) ? this.el.shadowRoot.querySelector("slot").assignedNodes({ flatten: true })
      : this.el.querySelector(".stepper-item-content")
        ? this.el.querySelector(".stepper-item-content").childNodes
        : null;
  }
  getItemPosition() {
    return Array.prototype.indexOf.call(this.parentStepperEl.querySelectorAll("calcite-stepper-item"), this.el);
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledWatcher"]
  }; }
};
CalciteStepperItem.style = calciteStepperItemCss;

export { CalciteStepper as calcite_stepper, CalciteStepperItem as calcite_stepper_item };
