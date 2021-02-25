'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9644a701.js');
const dom = require('./dom-031e5053.js');
const interfaces = require('./interfaces-60fad2eb.js');

const TEXT = {
  close: "Close"
};

const calciteNoticeCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host([scale=s]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=s]) slot[name=notice-title]::slotted(*),:host([scale=s]) *::slotted([slot=notice-title]){font-size:0.875rem;line-height:1.5}:host([scale=s]) slot[name=notice-message]::slotted(*),:host([scale=s]) *::slotted([slot=notice-message]){font-size:0.8125rem;line-height:1.5}:host([scale=s]) ::slotted(calcite-link){font-size:0.8125rem;line-height:1.5}:host([scale=m]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.5rem}:host([scale=m]) slot[name=notice-title]::slotted(*),:host([scale=m]) *::slotted([slot=notice-title]){font-size:0.9375rem;line-height:1.5}:host([scale=m]) slot[name=notice-message]::slotted(*),:host([scale=m]) *::slotted([slot=notice-message]){font-size:0.875rem;line-height:1.5}:host([scale=m]) ::slotted(calcite-link){font-size:0.875rem;line-height:1.5}:host([scale=l]){--calcite-notice-spacing-token-small:1.2rem;--calcite-notice-spacing-token-large:1.875rem}:host([scale=l]) slot[name=notice-title]::slotted(*),:host([scale=l]) *::slotted([slot=notice-title]){font-size:1rem;line-height:1.5}:host([scale=l]) slot[name=notice-message]::slotted(*),:host([scale=l]) *::slotted([slot=notice-message]){font-size:0.9375rem;line-height:1.5}:host([scale=l]) ::slotted(calcite-link){font-size:0.9375rem;line-height:1.5}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{display:none;text-align:left;margin:0 auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--calcite-notice-width);max-width:100%;max-height:0;background-color:var(--calcite-ui-foreground-1);opacity:0;pointer-events:none;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;border-left:0px solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}.notice-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([dir=rtl]){text-align:right;border-left:none;border-right:0px solid}:host([active]){-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:1;max-height:100%;pointer-events:initial;border-width:3px}slot[name=notice-title]::slotted(*),*::slotted([slot=notice-title]){color:var(--calcite-ui-text-1);margin:0;font-weight:500}slot[name=notice-message]::slotted(*),*::slotted([slot=notice-message]){display:inline;margin:0;font-weight:400;margin-right:var(--calcite-notice-spacing-token-small);color:var(--calcite-ui-text-2)}:host([dir=rtl]) slot[name=notice-message]::slotted(*),:host([dir=rtl]) *::slotted([slot=notice-message]){margin-right:0;margin-left:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1 0px;flex:1 1 0;min-width:0;word-wrap:break-word;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) 0}.notice-content:first-of-type:not(:only-child){padding-left:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}:host([dir=rtl]) .notice-content{padding:var(--calcite-notice-spacing-token-small) 0 var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small)}:host([dir=rtl]) .notice-content:first-of-type:not(:only-child){padding-right:var(--calcite-notice-spacing-token-large)}:host([dir=rtl]) .notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}.notice-icon{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.notice-close{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;-ms-flex-item-align:stretch;align-self:stretch;background-color:transparent;-webkit-appearance:none;border:none;outline:none;cursor:pointer;color:var(--calcite-ui-text-3)}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}:host([color=blue]){border-color:var(--calcite-ui-brand)}:host([color=blue]) .notice-icon{color:var(--calcite-ui-brand)}:host([color=red]){border-color:var(--calcite-ui-danger)}:host([color=red]) .notice-icon{color:var(--calcite-ui-danger)}:host([color=yellow]){border-color:var(--calcite-ui-warning)}:host([color=yellow]) .notice-icon{color:var(--calcite-ui-warning)}:host([color=green]){border-color:var(--calcite-ui-success)}:host([color=green]) .notice-icon{color:var(--calcite-ui-success)}";

const CalciteNotice = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteNoticeClose = index.createEvent(this, "calciteNoticeClose", 7);
    this.calciteNoticeOpen = index.createEvent(this, "calciteNoticeOpen", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //---------------------------------------------------------------------------
    /** Is the notice currently active or not */
    this.active = false;
    /** Color for the notice (will apply to top border and icon) */
    this.color = "blue";
    /** Optionally show a button the user can click to dismiss the notice */
    this.dismissible = false;
    /** String for the close button. */
    this.intlClose = TEXT.close;
    /** specify the scale of the notice, defaults to m */
    this.scale = "m";
    /** specify the width of the notice, defaults to auto */
    this.width = "auto";
  }
  updateRequestedIcon() {
    this.requestedIcon = dom.setRequestedIcon(interfaces.StatusIcons, this.icon, this.color);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.requestedIcon = dom.setRequestedIcon(interfaces.StatusIcons, this.icon, this.color);
  }
  componentDidLoad() {
    this.noticeLinkEl = this.el.querySelectorAll("calcite-link")[0];
  }
  render() {
    const dir = dom.getElementDir(this.el);
    const closeButton = (index.h("button", { "aria-label": this.intlClose, class: "notice-close", onClick: () => this.close(), ref: () => this.closeButton }, index.h("calcite-icon", { icon: "x", scale: "m" })));
    return (index.h(index.Host, { active: this.active, dir: dir }, this.requestedIcon ? (index.h("div", { class: "notice-icon" }, index.h("calcite-icon", { icon: this.requestedIcon, scale: "m" }))) : null, index.h("div", { class: "notice-content" }, index.h("slot", { name: "notice-title" }), index.h("slot", { name: "notice-message" }), index.h("slot", { name: "notice-link" })), this.dismissible ? closeButton : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** close the notice emit the `calciteNoticeClose` event - <calcite-notice> listens for this */
  async close() {
    this.active = false;
    this.calciteNoticeClose.emit();
  }
  /** open the notice and emit the `calciteNoticeOpen` event - <calcite-notice> listens for this  */
  async open() {
    this.active = true;
    this.calciteNoticeOpen.emit();
  }
  /** focus the close button, if present and requested */
  async setFocus() {
    if (!this.closeButton && !this.noticeLinkEl) {
      return;
    }
    if (this.noticeLinkEl)
      this.noticeLinkEl.setFocus();
    else if (this.closeButton) {
      this.closeButton.focus();
    }
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "icon": ["updateRequestedIcon"],
    "color": ["updateRequestedIcon"]
  }; }
};
CalciteNotice.style = calciteNoticeCss;

exports.calcite_notice = CalciteNotice;
