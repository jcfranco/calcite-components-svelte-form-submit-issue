'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9644a701.js');
const dom = require('./dom-031e5053.js');
const resources = require('./resources-656cf3a8.js');

const CSS = {
  button: "button",
  buttonTextVisible: "button--text-visible",
  buttonCompact: "button--compact",
  iconContainer: "icon-container",
  slotContainer: "slot-container",
  slotContainerHidden: "slot-container--hidden",
  textContainer: "text-container",
  textContainerVisible: "text-container--visible"
};
const TEXT = {
  loading: "Loading"
};

const calciteActionCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;background-color:transparent}:host([disabled]){pointer-events:none}.button{font-family:inherit;display:-ms-flexbox;display:flex;color:var(--calcite-ui-text-3);fill:var(--calcite-ui-text-3);background-color:var(--calcite-ui-foreground-1);margin:0;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;border:none;width:auto;cursor:pointer;text-align:unset;position:relative;font-size:var(--calcite-font-size--2);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.button:hover,.button:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1)}.button:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.button:active{background-color:var(--calcite-ui-foreground-3)}.button .icon-container{min-width:1rem;min-height:1rem;margin:0;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;pointer-events:none}.button .text-container{color:inherit;line-height:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;opacity:0;width:0;-webkit-transition:opacity 150ms ease-in-out, margin 150ms ease-in-out, width 150ms ease-in-out;transition:opacity 150ms ease-in-out, margin 150ms ease-in-out, width 150ms ease-in-out}.button .text-container--visible{-ms-flex:1 1 auto;flex:1 1 auto;opacity:1;width:auto}:host([scale=s]) .button{padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}:host([scale=m]) .button{padding:var(--calcite-spacing) var(--calcite-spacing)}:host([scale=l]) .button{padding:var(--calcite-spacing-plus-quarter) var(--calcite-spacing-plus-quarter);font-size:0.9375rem;line-height:1.5}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-left:0;padding-right:0}.slot-container{display:-ms-flexbox;display:flex}.slot-container--hidden{display:none}.button--text-visible{width:100%}.button--text-visible .icon-container{margin:0 var(--calcite-spacing-half) 0 0}.button--text-visible .text-container--visible{margin:0 var(--calcite-spacing-half) 0 0}.button--text-visible.calcite--rtl .icon-container{margin:0 0 0 var(--calcite-spacing-half)}.button--text-visible.calcite--rtl .text-container--visible{margin:0 0 0 var(--calcite-spacing-half)}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}:host([appearance=clear]) .button{background-color:transparent;-webkit-transition:-webkit-box-shadow 150ms ease-in-out;transition:-webkit-box-shadow 150ms ease-in-out;transition:box-shadow 150ms ease-in-out;transition:box-shadow 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out}:host([appearance=clear]) .button:hover,:host([appearance=clear]) .button:focus{background-color:transparent;-webkit-box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset;box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset}:host([active][appearance=clear]) .button,:host([active][appearance=clear]) .button:hover,:host([active][appearance=clear]) .button:focus{color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}:host([appearance=clear][loading]) .button,:host([appearance=clear][disabled]) .button{background-color:transparent}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-ui-foreground-1)}:host([loading]) .button .text-container,:host([loading]) .button:hover .text-container,:host([loading]) .button:focus .text-container{opacity:0.5}:host([loading]) calcite-loader[inline]{color:var(--calcite-ui-text-3);margin-right:0}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;opacity:0.5;background-color:var(--calcite-ui-foreground-1)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{opacity:0.5;background-color:var(--calcite-ui-foreground-3)}:host([indicator]) .button--text-visible,:host([indicator][scale=s]) .button--text-visible,:host([indicator][scale=l]) .button--text-visible{padding-right:var(--calcite-spacing)}:host([indicator]) .button::after{content:\"\";border-radius:50%;width:var(--calcite-spacing-half);height:var(--calcite-spacing-half);border:var(--calcite-spacing-eighth) solid var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-brand);position:absolute;bottom:var(--calcite-spacing-half);right:var(--calcite-spacing-half);z-index:1}:host([indicator][scale=s]) .button::after{bottom:var(--calcite-spacing-quarter);right:var(--calcite-spacing-quarter)}:host([indicator][scale=l]) .button::after{bottom:var(--calcite-spacing-half);right:var(--calcite-spacing-half)}:host([indicator]) .calcite--rtl::after{right:unset;left:var(--calcite-spacing-quarter)}:host([indicator]) .button--text-visible.calcite--rtl{padding-right:var(--calcite-spacing-three-quarters);padding-left:var(--calcite-spacing)}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-ui-foreground-1)}:host([indicator][active]) .button::after{border-color:var(--calcite-ui-foreground-3)}:host([indicator]) .button--text-visible::after,:host([indicator][scale=s]) .button--text-visible::after,:host([indicator][scale=l]) .button--text-visible::after{bottom:unset;right:var(--calcite-spacing-half)}:host([indicator]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=s]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=l]) .button--text-visible.calcite--rtl::after{right:unset;left:var(--calcite-spacing-half)}";

const CalciteAction = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /** Specify the appearance style of the action, defaults to solid. */
    this.appearance = "solid";
    /**
     * Indicates whether the action is highlighted.
     */
    this.active = false;
    /**
     * Compact mode is used internally by components to reduce side padding, e.g. calcite-block-section.
     */
    this.compact = false;
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * Indicates unread changes.
     */
    this.indicator = false;
    /** string to override English loading text */
    this.intlLoading = TEXT.loading;
    /**
     * When true, content is waiting to be loaded. This state shows a busy indicator.
     */
    this.loading = false;
    /**
     * Specifies the size of the action.
     */
    this.scale = "m";
    /**
     * Indicates whether the text is displayed.
     */
    this.textEnabled = false;
    this.observer = new MutationObserver(() => index.forceUpdate(this));
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.observer.observe(this.el, { childList: true, subtree: true });
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  async setFocus() {
    this.buttonEl.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderTextContainer() {
    const { text, textEnabled } = this;
    const textContainerClasses = {
      [CSS.textContainer]: true,
      [CSS.textContainerVisible]: textEnabled
    };
    return text ? (index.h("div", { class: textContainerClasses, key: "text-container" }, text)) : null;
  }
  renderIconContainer() {
    var _a;
    const { loading, icon, scale, el, intlLoading } = this;
    const iconScale = scale === "l" ? "m" : "s";
    const calciteLoaderNode = loading ? (index.h("calcite-loader", { active: true, inline: true, label: intlLoading, scale: iconScale })) : null;
    const calciteIconNode = icon ? index.h("calcite-icon", { icon: icon, scale: iconScale }) : null;
    const iconNode = calciteLoaderNode || calciteIconNode;
    const hasIconToDisplay = iconNode || ((_a = el.children) === null || _a === void 0 ? void 0 : _a.length);
    const slotContainerNode = (index.h("div", { class: {
        [CSS.slotContainer]: true,
        [CSS.slotContainerHidden]: loading
      } }, index.h("slot", null)));
    return hasIconToDisplay ? (index.h("div", { "aria-hidden": "true", class: CSS.iconContainer, key: "icon-container" }, iconNode, slotContainerNode)) : null;
  }
  render() {
    const { compact, disabled, loading, el, textEnabled, label, text } = this;
    const ariaLabel = label || text;
    const rtl = dom.getElementDir(el) === "rtl";
    const buttonClasses = {
      [CSS.button]: true,
      [CSS.buttonTextVisible]: textEnabled,
      [CSS.buttonCompact]: compact,
      [resources.CSS_UTILITY.rtl]: rtl
    };
    return (index.h(index.Host, null, index.h("button", { "aria-busy": loading.toString(), "aria-disabled": disabled.toString(), "aria-label": ariaLabel, class: buttonClasses, disabled: disabled, ref: (buttonEl) => (this.buttonEl = buttonEl) }, this.renderIconContainer(), this.renderTextContainer())));
  }
  get el() { return index.getElement(this); }
};
CalciteAction.style = calciteActionCss;

const ICONS = {
  chevronsLeft: "chevrons-left",
  chevronsRight: "chevrons-right"
};
function getCalcitePosition(position, el) {
  var _a;
  return position || ((_a = el.closest("calcite-shell-panel")) === null || _a === void 0 ? void 0 : _a.position) || "start";
}
function toggleChildActionText({ parent, expanded }) {
  parent.querySelectorAll("calcite-action").forEach((action) => (action.textEnabled = expanded));
}
const setTooltipReference = ({ tooltip, referenceElement, expanded, ref }) => {
  if (tooltip) {
    tooltip.referenceElement = !expanded && referenceElement;
  }
  if (ref) {
    ref(referenceElement);
  }
  return referenceElement;
};
const CalciteExpandToggle = ({ expanded, intlExpand, intlCollapse, toggle, el, position, tooltip, ref }) => {
  const rtl = dom.getElementDir(el) === "rtl";
  const expandText = expanded ? intlCollapse : intlExpand;
  const icons = [ICONS.chevronsLeft, ICONS.chevronsRight];
  if (rtl) {
    icons.reverse();
  }
  const end = getCalcitePosition(position, el) === "end";
  const expandIcon = end ? icons[1] : icons[0];
  const collapseIcon = end ? icons[0] : icons[1];
  const actionNode = (index.h("calcite-action", { dir: rtl ? "rtl" : "ltr", icon: expanded ? expandIcon : collapseIcon, onClick: toggle, ref: (referenceElement) => setTooltipReference({ tooltip, referenceElement, expanded, ref }), text: expandText, textEnabled: expanded }));
  return tooltip ? index.h("calcite-tooltip-manager", null, actionNode) : actionNode;
};

const CSS$1 = {
  actionGroupBottom: "action-group--bottom"
};
const SLOTS = {
  bottomActions: "bottom-actions"
};
const TEXT$1 = {
  expand: "Expand",
  collapse: "Collapse"
};

const calciteActionBarCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-item-align:stretch;align-self:stretch;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;max-width:15vw;overflow-y:auto;pointer-events:auto}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-bottom:1px solid var(--calcite-ui-border-2)}::slotted(calcite-action-group:last-child){border-bottom:none}.action-group--bottom{padding-bottom:0;-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end}";

const CalciteActionBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteActionBarToggle = index.createEvent(this, "calciteActionBarToggle", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * When set to true, the expand-toggling behavior will be disabled.
     */
    this.expandDisabled = false;
    /**
     * Indicates whether widget is expanded.
     */
    this.expanded = false;
    this.observer = new MutationObserver(() => {
      const { el, expanded } = this;
      toggleChildActionText({ parent: el, expanded });
    });
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.toggleExpand = () => {
      this.expanded = !this.expanded;
    };
    this.setExpandToggleRef = (el) => {
      this.expandToggleEl = el;
    };
  }
  expandHandler(expandDisabled) {
    if (!expandDisabled) {
      toggleChildActionText({ parent: this.el, expanded: this.expanded });
    }
  }
  expandedHandler(expanded) {
    if (!this.expandDisabled) {
      toggleChildActionText({ parent: this.el, expanded });
    }
    this.calciteActionBarToggle.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentWillLoad() {
    const { el, expandDisabled, expanded } = this;
    if (!expandDisabled) {
      toggleChildActionText({ parent: el, expanded });
    }
    this.observer.observe(el, { childList: true });
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  async setFocus(focusId) {
    if (focusId === "expand-toggle") {
      await dom.focusElement(this.expandToggleEl);
      return;
    }
    this.el.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderBottomActionGroup() {
    const { expanded, expandDisabled, intlExpand, intlCollapse, el, position, toggleExpand, tooltipExpand } = this;
    const expandLabel = intlExpand || TEXT$1.expand;
    const collapseLabel = intlCollapse || TEXT$1.collapse;
    const expandToggleNode = !expandDisabled ? (index.h(CalciteExpandToggle, { el: el, expanded: expanded, intlCollapse: collapseLabel, intlExpand: expandLabel, position: position, ref: this.setExpandToggleRef, toggle: toggleExpand, tooltip: tooltipExpand })) : null;
    return dom.getSlotted(el, SLOTS.bottomActions) || expandToggleNode ? (index.h("calcite-action-group", { class: CSS$1.actionGroupBottom }, index.h("slot", { name: SLOTS.bottomActions }), expandToggleNode)) : null;
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null), this.renderBottomActionGroup()));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "expandDisabled": ["expandHandler"],
    "expanded": ["expandedHandler"]
  }; }
};
CalciteActionBar.style = calciteActionBarCss;

const calciteActionGroupCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:var(--calcite-spacing-half) 0}:host(:first-child){padding-top:0}::slotted(calcite-action){display:-ms-flexbox;display:flex;width:100%}";

const CalciteActionGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
CalciteActionGroup.style = calciteActionGroupCss;

const CSS$2 = {
  actionGroupBottom: "action-group--bottom",
  container: "container"
};
const TEXT$2 = {
  expand: "Expand",
  collapse: "Collapse"
};

const calciteActionPadCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-webkit-animation:in 300ms ease-in-out;animation:in 300ms ease-in-out;border-radius:0.125rem}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-width:0;border-bottom-width:1px;border-color:var(--calcite-ui-border-3);border-style:solid;padding-bottom:0;padding-top:0}.container{-ms-flex-direction:column;flex-direction:column;display:-ms-inline-flexbox;display:inline-flex;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-ui-background);-webkit-box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);max-width:15vw}.action-group--bottom{-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:0}:host([layout=horizontal]) .container{-ms-flex-direction:row;flex-direction:row;max-width:unset}:host([layout=horizontal]) .container .action-group--bottom{padding:0}:host([layout=horizontal]) .container ::slotted(calcite-action-group){border-width:0;border-right-width:1px;-ms-flex-direction:row;flex-direction:row;padding:0}:host([layout=horizontal]) .container.calcite--rtl ::slotted(calcite-action-group){border-width:0;border-left-width:1px}::slotted(calcite-action-group:last-child){border-bottom-width:0}";

const CalciteActionPad = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteActionPadToggle = index.createEvent(this, "calciteActionPadToggle", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * When set to true, the expand-toggling behavior will be disabled.
     */
    this.expandDisabled = false;
    /**
     * Indicates whether widget is expanded.
     */
    this.expanded = false;
    /**
     * Indicates the horizontal or vertical layout of the component.
     */
    this.layout = "vertical";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.toggleExpand = () => {
      this.expanded = !this.expanded;
    };
    this.setExpandToggleRef = (el) => {
      this.expandToggleEl = el;
    };
  }
  expandHandler(expandDisabled) {
    if (!expandDisabled) {
      toggleChildActionText({ parent: this.el, expanded: this.expanded });
    }
  }
  expandedHandler(expanded) {
    if (!this.expandDisabled) {
      toggleChildActionText({ parent: this.el, expanded });
    }
    this.calciteActionPadToggle.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentWillLoad() {
    const { el, expandDisabled, expanded } = this;
    if (!expandDisabled) {
      toggleChildActionText({ parent: el, expanded });
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  async setFocus(focusId) {
    if (focusId === "expand-toggle") {
      await dom.focusElement(this.expandToggleEl);
      return;
    }
    this.el.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------
  renderBottomActionGroup() {
    const { expanded, expandDisabled, intlExpand, intlCollapse, el, position, toggleExpand, tooltipExpand } = this;
    const expandLabel = intlExpand || TEXT$2.expand;
    const collapseLabel = intlCollapse || TEXT$2.collapse;
    const expandToggleNode = !expandDisabled ? (index.h(CalciteExpandToggle, { el: el, expanded: expanded, intlCollapse: collapseLabel, intlExpand: expandLabel, position: position, ref: this.setExpandToggleRef, toggle: toggleExpand, tooltip: tooltipExpand })) : null;
    return expandToggleNode ? (index.h("calcite-action-group", { class: CSS$2.actionGroupBottom }, expandToggleNode)) : null;
  }
  render() {
    const rtl = dom.getElementDir(this.el) === "rtl";
    const containerClasses = {
      [CSS$2.container]: true,
      [resources.CSS_UTILITY.rtl]: rtl
    };
    return (index.h(index.Host, null, index.h("div", { class: containerClasses }, index.h("slot", null), this.renderBottomActionGroup())));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "expandDisabled": ["expandHandler"],
    "expanded": ["expandedHandler"]
  }; }
};
CalciteActionPad.style = calciteActionPadCss;

exports.calcite_action = CalciteAction;
exports.calcite_action_bar = CalciteActionBar;
exports.calcite_action_group = CalciteActionGroup;
exports.calcite_action_pad = CalciteActionPad;
