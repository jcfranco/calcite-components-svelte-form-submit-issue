'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9644a701.js');
const dom = require('./dom-031e5053.js');

const calciteLabelCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-label:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-label-h{display:none}[theme=dark].sc-calcite-label-h,[theme=dark] .sc-calcite-label-h{--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}[alignment=start].sc-calcite-label-h,[alignment=end][dir=rtl].sc-calcite-label-h{text-align:left}[alignment=end].sc-calcite-label-h,[alignment=start][dir=rtl].sc-calcite-label-h{text-align:right}[alignment=center].sc-calcite-label-h{text-align:center}[scale=s].sc-calcite-label-h{--calcite-label-margin-bottom:12px}[scale=s].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size--2)}[scale=m].sc-calcite-label-h{--calcite-label-margin-bottom:14px}[scale=m].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size--1)}[scale=l].sc-calcite-label-h{--calcite-label-margin-bottom:18px}[scale=l].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size-1)}.sc-calcite-label-h label.sc-calcite-label{cursor:pointer;width:100%;margin:0 0 var(--calcite-label-margin-bottom, 1.5rem) 0;line-height:1.3}[layout=default].sc-calcite-label-h label.sc-calcite-label{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:4px}[layout=inline].sc-calcite-label-h label.sc-calcite-label,[layout=inline-space-between].sc-calcite-label-h label.sc-calcite-label{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:0.75rem}[layout=inline-space-between].sc-calcite-label-h label.sc-calcite-label{-ms-flex-pack:justify;justify-content:space-between}[disabled].sc-calcite-label-h>label.sc-calcite-label{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*{pointer-events:none}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled],.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled] *{opacity:1}.sc-calcite-label-h[disabled] .sc-calcite-label-s>calcite-input-message:not([active]){opacity:0}[status=invalid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-danger)}[status=valid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[status=idle].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[disable-spacing].sc-calcite-label-h label.sc-calcite-label{gap:0;margin:0}";

const CalciteLabel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteLabelFocus = index.createEvent(this, "calciteLabelFocus", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** specify the text alignment of the label */
    this.alignment = "start";
    /** specify the status of the label and any child input / input messages */
    this.status = "idle";
    /** specify the scale of the input, defaults to m */
    this.scale = "m";
    /** is the wrapped element positioned inline with the label slotted text */
    this.layout = "default";
    this.handleCalciteHtmlForClicks = (target) => {
      // 1. has htmlFor
      if (!this.for)
        return;
      // 2. htmlFor matches a calcite component
      const inputForThisLabel = document.getElementById(this.for);
      if (!inputForThisLabel)
        return;
      if (!inputForThisLabel.localName.startsWith("calcite"))
        return;
      // 5. target is NOT the calcite component that this label matches
      if (target === inputForThisLabel)
        return;
      // 3. target is not a labelable native form element
      const labelableNativeElements = [
        "button",
        "input",
        "meter",
        "output",
        "progress",
        "select",
        "textarea"
      ];
      if (labelableNativeElements.includes(target.localName))
        return;
      // 4. target is not a labelable calcite form element
      const labelableCalciteElements = [
        "calcite-button",
        "calcite-checkbox",
        "calcite-date",
        "calcite-inline-editable",
        "calcite-input",
        "calcite-radio",
        "calcite-radio-button",
        "calcite-radio-button-group",
        "calcite-radio-group",
        "calcite-rating",
        "calcite-select",
        "calcite-slider",
        "calcite-switch"
      ];
      if (labelableCalciteElements.includes(target.localName))
        return;
      // 5. target is not a child of a labelable calcite form element
      for (let i = 0; i < labelableCalciteElements.length; i++) {
        if (target.closest(labelableCalciteElements[i])) {
          return;
        }
      }
      inputForThisLabel.click();
    };
  }
  disabledWatcher() {
    if (this.disabled)
      this.setDisabledControls();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick(event) {
    const target = event.target;
    this.calciteLabelFocus.emit({
      labelEl: this.el,
      interactedEl: target,
      requestedInput: this.for
    });
    this.handleCalciteHtmlForClicks(target);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  getAttributes() {
    // spread attributes from the component to rendered child, filtering out props
    const props = ["disabled", "id", "layout", "scale", "status", "theme"];
    return Array.from(this.el.attributes)
      .filter((a) => a && !props.includes(a.name))
      .reduce((acc, { name, value }) => (Object.assign(Object.assign({}, acc), { [name]: value })), {});
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidLoad() {
    if (this.disabled)
      this.setDisabledControls();
  }
  render() {
    const attributes = this.getAttributes();
    const dir = dom.getElementDir(this.el);
    return (index.h(index.Host, { dir: dir }, index.h("label", Object.assign({}, attributes, { ref: (el) => (this.labelEl = el) }), index.h("slot", null))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  setDisabledControls() {
    var _a;
    (_a = this.labelEl) === null || _a === void 0 ? void 0 : _a.childNodes.forEach((item) => {
      if (item.nodeName.includes("CALCITE")) {
        item.setAttribute("disabled", "");
      }
    });
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledWatcher"]
  }; }
};
CalciteLabel.style = calciteLabelCss;

exports.calcite_label = CalciteLabel;
