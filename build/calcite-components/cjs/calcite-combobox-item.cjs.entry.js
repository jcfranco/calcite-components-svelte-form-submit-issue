'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9644a701.js');
const dom = require('./dom-031e5053.js');
const guid = require('./guid-4637ad8f.js');

const CSS = {
  icon: "icon",
  iconActive: "icon--active",
  custom: "icon--custom",
  dot: "icon--dot",
  single: "label--single",
  label: "label",
  active: "label--active",
  selected: "label--selected",
  title: "title",
  textContainer: "text-container"
};

const calciteComboboxItemCss = "@charset \"UTF-8\";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent-1:0.5rem;--calcite-combobox-item-spacing-indent-2:1rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent-1:0.75rem;--calcite-combobox-item-spacing-indent-2:1.5rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1.25rem;--calcite-combobox-item-spacing-unit-s:1rem;--calcite-combobox-item-spacing-indent-1:1rem;--calcite-combobox-item-spacing-indent-2:2rem}:host{--calcite-combobox-item-indent-start-1:var(--calcite-combobox-item-spacing-indent-1);--calcite-combobox-item-indent-end-1:unset;--calcite-combobox-item-indent-start-2:var(--calcite-combobox-item-spacing-indent-2);--calcite-combobox-item-indent-end-2:unset}:host([dir=rtl]){--calcite-combobox-item-indent-start-1:unset;--calcite-combobox-item-indent-end-1:var(--calcite-combobox-item-spacing-indent-1);--calcite-combobox-item-indent-start-2:unset;--calcite-combobox-item-indent-end-2:var(--calcite-combobox-item-spacing-indent-2)}:host(:focus){-webkit-box-shadow:none;box-shadow:none}:host,ul{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0;padding:0;outline:2px solid transparent;outline-offset:2px}.label{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;min-width:100%;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);cursor:pointer;position:relative;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;padding:var(--calcite-combobox-item-spacing-unit-s);text-decoration:none}:host([disabled]) .label{cursor:default}.label--selected{color:var(--calcite-ui-text-1);font-weight:var(--calcite-font-weight-medium)}.label--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.label:hover,.label:active{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-2);-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.title{padding:0 var(--calcite-combobox-item-spacing-unit-s)}.icon{display:-ms-inline-flexbox;display:inline-flex;opacity:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;}.icon--indent-1{padding-left:var(--calcite-combobox-item-indent-start-1);padding-right:var(--calcite-combobox-item-indent-end-1)}.icon--indent-2{padding-left:var(--calcite-combobox-item-indent-start-2);padding-right:var(--calcite-combobox-item-indent-end-2)}.icon--custom{margin-top:-1px;color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;width:var(--calcite-combobox-item-spacing-unit-l)}.icon--dot:before{content:\"•\"}:host([dir=rtl]) .icon--dot:before{text-align:right}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}";

const CalciteComboboxItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteComboboxItemChange = index.createEvent(this, "calciteComboboxItemChange", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /** When true, the item cannot be clicked and is visually muted. */
    this.disabled = false;
    /** Set this to true to pre-select an item. Toggles when an item is checked/unchecked. */
    this.selected = false;
    /** True when item is highlighted either from keyboard or mouse hover */
    this.active = false;
    /** Unique identifier, used for accessibility */
    this.guid = guid.guid();
    this.isSelected = this.selected;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.itemClickHandler = (event) => {
      event.preventDefault();
      if (this.disabled) {
        return;
      }
      this.isSelected = !this.isSelected;
      this.calciteComboboxItemChange.emit(this.el);
    };
  }
  selectedWatchHandler(newValue) {
    this.isSelected = newValue;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentWillLoad() {
    var _a, _b;
    const parent = (_a = this.el.parentElement) === null || _a === void 0 ? void 0 : _a.closest("calcite-combobox-item");
    const grandparent = (_b = parent === null || parent === void 0 ? void 0 : parent.parentElement) === null || _b === void 0 ? void 0 : _b.closest("calcite-combobox-item");
    this.anscestors = [parent, grandparent].filter((el) => el);
    this.hasDefaultSlot = this.el.querySelector(":not([slot])") !== null;
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Used to toggle the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   */
  async toggleSelected(coerce) {
    if (this.disabled) {
      return;
    }
    this.isSelected = typeof coerce === "boolean" ? coerce : !this.isSelected;
  }
  getDepth() {
    var _a, _b;
    const parent = (_a = this.el.parentElement) === null || _a === void 0 ? void 0 : _a.closest("calcite-combobox-item");
    if (!parent) {
      return 0;
    }
    const grandparent = (_b = parent.parentElement) === null || _b === void 0 ? void 0 : _b.closest("calcite-combobox-item");
    if (!grandparent) {
      return 1;
    }
    return 2;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderIcon(scale, isSingle) {
    const { icon, disabled, isSelected } = this;
    const level = `${CSS.icon}--indent-${this.getDepth()}`;
    const iconScale = scale !== "l" ? "s" : "m";
    const defaultIcon = isSingle ? "dot" : "check";
    const iconPath = disabled ? "circle-disallowed" : defaultIcon;
    const showDot = isSingle && !icon && !disabled;
    return showDot ? (index.h("span", { class: {
        [CSS.icon]: true,
        [CSS.dot]: true,
        [level]: true
      } })) : (index.h("calcite-icon", { class: {
        [CSS.icon]: !icon,
        [CSS.custom]: !!icon,
        [CSS.iconActive]: icon && isSelected,
        [level]: true
      }, icon: icon || iconPath, scale: iconScale }));
  }
  renderChildren() {
    if (!this.hasDefaultSlot) {
      return null;
    }
    return (index.h("ul", null, index.h("slot", null)));
  }
  render() {
    const isSingleSelect = dom.getElementProp(this.el, "selection-mode", "multi") === "single";
    const classes = {
      [CSS.label]: true,
      [CSS.selected]: this.isSelected,
      [CSS.active]: this.active,
      [CSS.single]: isSingleSelect
    };
    const scale = dom.getElementProp(this.el, "scale", "m");
    const dir = dom.getElementDir(this.el);
    return (index.h(index.Host, { "aria-hidden": true, dir: dir, disabled: this.disabled, scale: scale, tabIndex: -1 }, index.h("li", { class: classes, id: this.guid, onClick: this.itemClickHandler, ref: (el) => (this.comboboxItemEl = el), tabIndex: -1 }, this.renderIcon(scale, isSingleSelect), index.h("span", { class: CSS.title }, this.textLabel)), this.renderChildren()));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "selected": ["selectedWatchHandler"]
  }; }
};
CalciteComboboxItem.style = calciteComboboxItemCss;

exports.calcite_combobox_item = CalciteComboboxItem;
