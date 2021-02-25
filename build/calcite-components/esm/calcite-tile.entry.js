import { r as registerInstance, h, H as Host } from './index-527d390a.js';

const calciteTileCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host{background-color:var(--calcite-ui-foreground-1);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-ui-text-3);display:inline-block;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}:host(:not([embed])){-webkit-box-shadow:0 0 0 1px var(--calcite-ui-border-2);box-shadow:0 0 0 1px var(--calcite-ui-border-2);max-width:300px;padding:0.75rem}:host(:not([embed])[href]:hover){-webkit-box-shadow:0 0 0 2px var(--calcite-ui-brand);box-shadow:0 0 0 2px var(--calcite-ui-brand);cursor:pointer}:host(:not([embed])[href]:active){-webkit-box-shadow:0 0 0 3px var(--calcite-ui-brand);box-shadow:0 0 0 3px var(--calcite-ui-brand)}:host([icon][heading]:not([description]):not([embed])){padding:unset}.tile{display:grid;grid-template-columns:1fr;grid-gap:0.75rem;pointer-events:none}.heading{font-size:1rem;line-height:1.5;color:var(--calcite-ui-text-2);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;font-weight:500;pointer-events:none}.large-visual{justify-items:center;min-height:200px}.large-visual .icon{-ms-flex-item-align:self-end;align-self:self-end}.large-visual .heading{-ms-flex-item-align:center;align-self:center}.description{font-size:0.9375rem;line-height:1.5;color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;pointer-events:none}:host(:hover) .heading,:host([active]) .heading{color:var(--calcite-ui-text-1)}:host(:hover) .description,:host([active]) .description{color:var(--calcite-ui-text-2)}";

const CalciteTile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** The embed mode of the tile.  When true, renders without a border and padding for use by other components. */
    this.embed = false;
    /** The focused state of the tile. */
    this.focused = false;
    /** The hidden state of the tile. */
    this.hidden = false;
    /** The theme of the tile. */
    this.theme = "light";
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderTile() {
    const isLargeVisual = this.heading && this.icon && !this.description;
    const iconStyle = isLargeVisual
      ? {
        height: "64px",
        width: "64px"
      }
      : undefined;
    return (h("div", { class: { "large-visual": isLargeVisual, tile: true } }, this.icon && (h("div", { class: "icon" }, h("calcite-icon", { icon: this.icon, scale: "l", style: iconStyle }))), this.heading && h("div", { class: "heading" }, this.heading), this.description && h("div", { class: "description" }, this.description)));
  }
  render() {
    return (h(Host, null, this.href ? (h("calcite-link", { href: this.href, theme: this.theme }, this.renderTile())) : (this.renderTile())));
  }
};
CalciteTile.style = calciteTileCss;

export { CalciteTile as calcite_tile };
