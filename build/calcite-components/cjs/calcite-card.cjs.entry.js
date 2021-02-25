'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9644a701.js');
const dom = require('./dom-031e5053.js');
const key = require('./key-ebc3863d.js');

const CSS = {
  container: "container",
  header: "header",
  footer: "footer",
  title: "title",
  subtitle: "subtitle",
  thumbnailWrapper: "thumbnail-wrapper",
  checkboxWrapper: "checkbox-wrapper"
};
const SLOTS = {
  thumbnail: "thumbnail",
  title: "title",
  subtitle: "subtitle",
  footerLeading: "footer-leading",
  footerTrailing: "footer-trailing"
};
const TEXT = {
  select: "Select",
  deselect: "Deselect",
  loading: "Loading"
};

const calciteCardCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host{max-width:100%}:host .calcite-card-container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;position:relative;border:1px solid var(--calcite-ui-border-2);color:var(--calcite-ui-text-3);-webkit-box-shadow:none;box-shadow:none}:host .calcite-card-container:hover{-webkit-box-shadow:0 4px 16px 0 rgba(0, 0, 0, 0.08), 0 2px 8px 0 rgba(0, 0, 0, 0.04);box-shadow:0 4px 16px 0 rgba(0, 0, 0, 0.08), 0 2px 8px 0 rgba(0, 0, 0, 0.04);z-index:1}:host .calcite-card-container:active{-webkit-box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);-webkit-transition-duration:75ms;transition-duration:75ms;z-index:1}.container{-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){opacity:0;pointer-events:none}:host([loading]) .calcite-card-loader-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:0;right:0;top:0;bottom:0}:host .header,:host .footer{padding:0.75rem;display:-ms-flexbox;display:flex}:host .header{-ms-flex-direction:column;flex-direction:column}:host .footer{padding:0.75rem;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:auto}:host .card-content{padding:0 0.75rem;color:var(--calcite-ui-text-3);font-size:0.875rem;line-height:1.5}:host([selectable]) .calcite-card-container:active{-webkit-box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-brand)}slot[name=title]::slotted(*),*::slotted([slot=title]){font-weight:500;color:var(--calcite-ui-text-1);margin:0;font-size:0.9375rem;line-height:1.5}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){font-weight:400;color:var(--calcite-ui-text-2);margin:0;margin-top:0.375rem;font-size:0.875rem;line-height:1.5}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){max-width:100%;min-width:100%}slot[name=footer-leading]::slotted(*),*::slotted([slot=footer-leading]){-webkit-margin-end:auto;margin-inline-end:auto;-ms-flex-item-align:center;align-self:center;font-size:0.875rem;line-height:1.5}slot[name=footer-trailing]::slotted(*),*::slotted([slot=footer-trailing]){-ms-flex-item-align:center;align-self:center;font-size:0.875rem;line-height:1.5}:host .thumbnail-wrapper{font-size:0}:host .checkbox-wrapper{position:absolute;top:0.375rem;right:0.375rem;margin:0;padding:0}:host([dir=rtl]) .checkbox-wrapper{left:0.375rem;right:auto}";

const CalciteCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteCardSelect = index.createEvent(this, "calciteCardSelect", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /**  When true, the cards content is waiting to be loaded. This state shows a busy indicator.*/
    this.loading = false;
    /** Indicates whether the card is selected. */
    this.selected = false;
    /** Indicates whether the card is selectable. */
    this.selectable = false;
    /** string to override English loading text */
    this.intlLoading = TEXT.loading;
    /** string to override English select text for checkbox when selectable is true */
    this.intlSelect = TEXT.select;
    /** string to override English deselect text for checkbox when selectable is true */
    this.intlDeselect = TEXT.deselect;
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.cardSelectClick = () => {
      this.selectCard();
    };
    this.cardSelectKeyDown = (e) => {
      switch (key.getKey(e.key)) {
        case " ":
        case "Enter":
          this.selectCard();
          e.preventDefault();
          break;
      }
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = dom.getElementDir(this.el);
    return (index.h(index.Host, { dir: dir }, index.h("div", { class: "calcite-card-container" }, this.loading ? (index.h("div", { class: "calcite-card-loader-container" }, index.h("calcite-loader", { active: true, label: this.intlLoading }))) : null, index.h("section", { "aria-busy": this.loading.toString(), class: { [CSS.container]: true } }, this.selectable ? this.renderCheckbox() : null, this.renderThumbnail(), this.renderHeader(), index.h("div", { class: "card-content" }, index.h("slot", null)), this.renderFooter()))));
  }
  selectCard() {
    this.selected = !this.selected;
    this.calciteCardSelect.emit();
  }
  renderThumbnail() {
    const hasThumbnail = this.el.querySelector(`[slot=${SLOTS.thumbnail}]`);
    return hasThumbnail ? (index.h("div", { class: CSS.thumbnailWrapper }, index.h("slot", { name: SLOTS.thumbnail }))) : null;
  }
  renderCheckbox() {
    const checkboxLabel = this.selected ? this.intlDeselect : this.intlSelect;
    return (index.h("label", { "aria-label": checkboxLabel, class: CSS.checkboxWrapper, onClick: this.cardSelectClick, onKeyDown: this.cardSelectKeyDown, title: checkboxLabel }, index.h("calcite-checkbox", { checked: this.selected, theme: this.theme })));
  }
  renderHeader() {
    const title = this.el.querySelector(`[slot=${SLOTS.title}]`);
    const subtitle = this.el.querySelector(`[slot=${SLOTS.subtitle}]`);
    const hasHeader = title || subtitle;
    return hasHeader ? (index.h("header", { class: CSS.header }, index.h("slot", { name: SLOTS.title }), index.h("slot", { name: SLOTS.subtitle }))) : null;
  }
  renderFooter() {
    const leadingFooter = this.el.querySelector(`[slot=${SLOTS.footerLeading}]`);
    const trailingFooter = this.el.querySelector(`[slot=${SLOTS.footerTrailing}]`);
    const hasFooter = leadingFooter || trailingFooter;
    return hasFooter ? (index.h("footer", { class: CSS.footer }, index.h("slot", { name: SLOTS.footerLeading }), index.h("slot", { name: SLOTS.footerTrailing }))) : null;
  }
  get el() { return index.getElement(this); }
};
CalciteCard.style = calciteCardCss;

exports.calcite_card = CalciteCard;
