'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9644a701.js');
const dom = require('./dom-031e5053.js');
const key = require('./key-ebc3863d.js');
const guid = require('./guid-4637ad8f.js');

const calciteTabCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([active]) section{display:block}:host{display:none;z-index:1}:host([active]){display:block}section{height:100%;width:100%;display:none}";

const CalciteTab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteTabRegister = index.createEvent(this, "calciteTabRegister", 7);
    /**
     * Show this tab
     */
    this.active = false;
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    this.guid = `calcite-tab-title-${guid.guid()}`;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const id = this.el.id || this.guid;
    return (index.h(index.Host, { "aria-expanded": this.active.toString(), "aria-labelledby": this.labeledBy, id: id, role: "tabpanel" }, index.h("section", null, index.h("slot", null))));
  }
  componentDidLoad() {
    this.calciteTabRegister.emit();
  }
  disconnectedCallback() {
    var _a;
    // Dispatching to body in order to be listened by other elements that are still connected to the DOM.
    (_a = document.body) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new CustomEvent("calciteTabUnregister", {
      detail: this.el
    }));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  tabChangeHandler(event) {
    // to allow `<calcite-tabs>` to be nested we need to make sure this
    // `calciteTabChange` event was actually fired from a title that is a
    // child of the `<calcite-tabs>` that is the a parent of this tab.
    if (event.target.closest("calcite-tabs") !== this.el.closest("calcite-tabs")) {
      return;
    }
    if (this.tab) {
      this.active = this.tab === event.detail.tab;
    }
    else {
      this.getTabIndex().then((index) => {
        this.active = index === event.detail.tab;
      });
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Return the index of this tab within the tab array
   */
  async getTabIndex() {
    return Array.prototype.indexOf.call(dom.nodeListToArray(this.el.parentElement.children).filter((e) => e.matches("calcite-tab")), this.el);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * @internal
   */
  async updateAriaInfo(tabIds = [], titleIds = []) {
    this.labeledBy = titleIds[tabIds.indexOf(this.el.id)] || null;
  }
  get el() { return index.getElement(this); }
};
CalciteTab.style = calciteTabCss;

const calciteTabNavCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{z-index:2;position:relative;display:-ms-flexbox;display:flex}.tab-nav{display:-ms-flexbox;display:flex;width:100%;overflow:auto;-ms-flex-pack:start;justify-content:flex-start;-webkit-overflow-scrolling:touch;padding:4px;margin:-4px}:host([layout=center]) .tab-nav{-ms-flex-pack:center;justify-content:center}.tab-nav-active-indicator-container{width:100%;left:0;right:0;bottom:0;height:3px;position:absolute;overflow:hidden}.tab-nav-active-indicator{position:absolute;bottom:0;background:var(--calcite-ui-brand);display:block;height:3px;-webkit-transition:all ease-out;transition:all ease-out}:host([position=below]) .tab-nav-active-indicator{bottom:unset;top:0}:host([position=below]) .tab-nav-active-indicator-container{bottom:unset;top:0}";

const CalciteTabNav = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteTabChange = index.createEvent(this, "calciteTabChange", 7);
    /** @internal Parent tabs component layout value */
    this.layout = "inline";
    /** @internal Parent tabs component position value */
    this.position = "below";
    this.animationActiveDuration = 0.3;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.handleContainerScroll = () => {
      // remove active indicator transition duration while container is scrolling to prevent wobble
      this.activeIndicatorEl.style.transitionDuration = "0s";
      this.updateOffsetPosition();
    };
  }
  async selectedTabChanged() {
    if (localStorage &&
      this.storageId &&
      this.selectedTab !== undefined &&
      this.selectedTab !== null) {
      localStorage.setItem(`calcite-tab-nav-${this.storageId}`, JSON.stringify(this.selectedTab));
    }
    this.calciteTabChange.emit({
      tab: this.selectedTab
    });
    this.selectedTabEl = await this.getTabTitleById(this.selectedTab);
  }
  selectedTabElChanged() {
    this.updateOffsetPosition();
    this.updateActiveWidth();
    // reset the animation time on tab selection
    this.activeIndicatorEl.style.transitionDuration = `${this.animationActiveDuration}s`;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    const storageKey = `calcite-tab-nav-${this.storageId}`;
    if (localStorage && this.storageId && localStorage.getItem(storageKey)) {
      const storedTab = JSON.parse(localStorage.getItem(storageKey));
      this.selectedTab = storedTab;
      this.calciteTabChange.emit({
        tab: this.selectedTab
      });
    }
  }
  componentWillRender() {
    var _a, _b;
    this.layout = (_a = this.el.closest("calcite-tabs")) === null || _a === void 0 ? void 0 : _a.layout;
    this.position = (_b = this.el.closest("calcite-tabs")) === null || _b === void 0 ? void 0 : _b.position;
  }
  componentDidRender() {
    // if every tab title is active select the first tab.
    if (this.tabTitles.length &&
      this.tabTitles.every((title) => !title.active) &&
      !this.selectedTab) {
      this.tabTitles[0].getTabIdentifier().then((tab) => {
        this.calciteTabChange.emit({
          tab
        });
      });
    }
  }
  render() {
    const dir = dom.getElementDir(this.el);
    const width = `${this.indicatorWidth}px`;
    const offset = `${this.indicatorOffset}px`;
    const indicatorStyle = dir !== "rtl" ? { width, left: offset } : { width, right: offset };
    return (index.h(index.Host, { role: "tablist" }, index.h("div", { class: "tab-nav", onScroll: this.handleContainerScroll, ref: (el) => (this.tabNavEl = el) }, index.h("div", { class: "tab-nav-active-indicator-container", ref: (el) => (this.activeIndicatorContainerEl = el) }, index.h("div", { class: "tab-nav-active-indicator", ref: (el) => (this.activeIndicatorEl = el), style: indicatorStyle })), index.h("slot", null))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  resizeHandler() {
    // remove active indicator transition duration during resize to prevent wobble
    this.activeIndicatorEl.style.transitionDuration = "0s";
    this.updateActiveWidth();
    this.updateOffsetPosition();
  }
  focusPreviousTabHandler(e) {
    const currentIndex = this.getIndexOfTabTitle(e.target, this.enabledTabTitles);
    const previousTab = this.enabledTabTitles[currentIndex - 1] ||
      this.enabledTabTitles[this.enabledTabTitles.length - 1];
    previousTab.focus();
    e.stopPropagation();
    e.preventDefault();
  }
  focusNextTabHandler(e) {
    const currentIndex = this.getIndexOfTabTitle(e.target, this.enabledTabTitles);
    const nextTab = this.enabledTabTitles[currentIndex + 1] || this.enabledTabTitles[0];
    nextTab.focus();
    e.stopPropagation();
    e.preventDefault();
  }
  activateTabHandler(e) {
    if (e.detail.tab) {
      this.selectedTab = e.detail.tab;
    }
    else {
      this.selectedTab = this.getIndexOfTabTitle(e.target);
    }
    e.stopPropagation();
    e.preventDefault();
  }
  /**
   * Check for active tabs on register and update selected
   */
  updateTabTitles(e) {
    if (e.target.active) {
      this.selectedTab = e.detail;
    }
  }
  globalTabChangeHandler(e) {
    if (this.syncId &&
      e.target !== this.el &&
      e.target.syncId === this.syncId &&
      this.selectedTab !== e.detail.tab) {
      this.selectedTab = e.detail.tab;
    }
  }
  updateOffsetPosition() {
    var _a, _b, _c, _d, _e;
    const dir = dom.getElementDir(this.el);
    const navWidth = (_a = this.activeIndicatorContainerEl) === null || _a === void 0 ? void 0 : _a.offsetWidth;
    const tabLeft = (_b = this.selectedTabEl) === null || _b === void 0 ? void 0 : _b.offsetLeft;
    const tabWidth = (_c = this.selectedTabEl) === null || _c === void 0 ? void 0 : _c.offsetWidth;
    const offsetRight = navWidth - (tabLeft + tabWidth);
    this.indicatorOffset =
      dir !== "rtl" ? tabLeft - ((_d = this.tabNavEl) === null || _d === void 0 ? void 0 : _d.scrollLeft) : offsetRight + ((_e = this.tabNavEl) === null || _e === void 0 ? void 0 : _e.scrollLeft);
  }
  updateActiveWidth() {
    var _a;
    this.indicatorWidth = (_a = this.selectedTabEl) === null || _a === void 0 ? void 0 : _a.offsetWidth;
  }
  getIndexOfTabTitle(el, tabTitles = this.tabTitles) {
    // In most cases, since these indexes correlate with tab contents, we want to consider all tab titles.
    // However, when doing relative index operations, it makes sense to pass in this.enabledTabTitles as the 2nd arg.
    return tabTitles.indexOf(el);
  }
  async getTabTitleById(id) {
    return Promise.all(this.tabTitles.map((el) => el.getTabIdentifier())).then((ids) => {
      return this.tabTitles[ids.indexOf(id)];
    });
  }
  get tabTitles() {
    return dom.filterDirectChildren(this.el, "calcite-tab-title");
  }
  get enabledTabTitles() {
    return dom.filterDirectChildren(this.el, "calcite-tab-title:not([disabled])");
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "selectedTab": ["selectedTabChanged"],
    "selectedTabEl": ["selectedTabElChanged"]
  }; }
};
CalciteTabNav.style = calciteTabNavCss;

const calciteTabTitleCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex:0 1 auto;flex:0 1 auto;outline:none;margin-right:1.25rem;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:1.25rem;margin-inline-end:1.25rem}:host-context([dir=rtl]){margin-right:0;margin-left:1.25rem}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host([layout=center]){-ms-flex-preferred-size:200px;flex-basis:200px;text-align:center;margin:0 1.25rem}:host([position=below]) a{border-bottom:0;border-top:3px solid transparent}:host a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) a{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host(:active) a,:host(:focus) a,:host(:hover) a{text-decoration:none;color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-border-2)}:host([active]) a{color:var(--calcite-ui-text-1);border-color:transparent}:host([disabled]){pointer-events:none}:host([disabled]) span,:host([disabled]) a{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}a,span{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:0.875rem;line-height:1.5;padding:0.75rem 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom:3px solid transparent;-webkit-appearance:none;cursor:pointer;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;color:var(--calcite-ui-text-3);width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}span{cursor:default}.calcite-tab-title--icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;line-height:inherit;-ms-flex-item-align:center;align-self:center}.calcite-tab-title--icon svg{-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([hastext]) .calcite-tab-title--icon.icon-start{margin-right:0.5rem}:host([hastext][dir=rtl]) .calcite-tab-title--icon.icon-start{margin-right:0;margin-left:0.5rem}:host([hastext]) .calcite-tab-title--icon.icon-end{margin-left:0.5rem}:host([hastext][dir=rtl]) .calcite-tab-title--icon.icon-end{margin-left:0;margin-right:0.5rem}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-right:0.5rem}:host([icon-start][icon-end][dir=rtl]) .calcite-tab-title--icon:first-child{margin-right:0;margin-left:0.5rem}";

const CalciteTabTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteTabsActivate = index.createEvent(this, "calciteTabsActivate", 7);
    this.calciteTabsFocusNext = index.createEvent(this, "calciteTabsFocusNext", 7);
    this.calciteTabsFocusPrevious = index.createEvent(this, "calciteTabsFocusPrevious", 7);
    this.calciteTabTitleRegister = index.createEvent(this, "calciteTabTitleRegister", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Show this tab title as selected */
    this.active = false;
    /** Disable this tab title  */
    this.disabled = false;
    /** determine if there is slotted text for styling purposes */
    this.hasText = false;
    /**
     * @internal
     */
    this.guid = `calcite-tab-title-${guid.guid()}`;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.setupTextContentObserver();
    this.parentTabNavEl = this.el.closest("calcite-tab-nav");
  }
  disconnectedCallback() {
    var _a;
    this.observer.disconnect();
    // Dispatching to body in order to be listened by other elements that are still connected to the DOM.
    (_a = document.body) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new CustomEvent("calciteTabTitleUnregister", {
      detail: this.el
    }));
  }
  componentWillLoad() {
    {
      this.updateHasText();
    }
    if (this.tab && this.active) {
      this.emitActiveTab();
    }
  }
  componentWillRender() {
    var _a, _b;
    this.layout = (_a = this.el.closest("calcite-tabs")) === null || _a === void 0 ? void 0 : _a.layout;
    this.position = (_b = this.el.closest("calcite-tabs")) === null || _b === void 0 ? void 0 : _b.position;
  }
  render() {
    const dir = dom.getElementDir(this.el);
    const id = this.el.id || this.guid;
    const Tag = this.disabled ? "span" : "a";
    const iconStartEl = (index.h("calcite-icon", { class: "calcite-tab-title--icon icon-start", dir: dir, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: "s" }));
    const iconEndEl = (index.h("calcite-icon", { class: "calcite-tab-title--icon icon-end", dir: dir, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: "s" }));
    return (index.h(index.Host, { "aria-controls": this.controls, "aria-expanded": this.active.toString(), dir: dir, hasText: this.hasText, id: id, role: "tab", tabindex: this.disabled ? "-1" : "0" }, index.h(Tag, null, this.iconStart ? iconStartEl : null, index.h("slot", null), this.iconEnd ? iconEndEl : null)));
  }
  async componentDidLoad() {
    this.calciteTabTitleRegister.emit(await this.getTabIdentifier());
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  tabChangeHandler(event) {
    if (this.parentTabNavEl === event.target) {
      if (this.tab) {
        this.active = this.tab === event.detail.tab;
      }
      else {
        this.getTabIndex().then((index) => {
          this.active = index === event.detail.tab;
        });
      }
    }
  }
  onClick() {
    this.emitActiveTab();
  }
  keyDownHandler(e) {
    switch (key.getKey(e.key)) {
      case " ":
      case "Enter":
        this.emitActiveTab();
        e.preventDefault();
        break;
      case "ArrowRight":
        if (dom.getElementDir(this.el) === "ltr") {
          this.calciteTabsFocusNext.emit();
        }
        else {
          this.calciteTabsFocusPrevious.emit();
        }
        break;
      case "ArrowLeft":
        if (dom.getElementDir(this.el) === "ltr") {
          this.calciteTabsFocusPrevious.emit();
        }
        else {
          this.calciteTabsFocusNext.emit();
        }
        break;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Return the index of this title within the nav
   */
  async getTabIndex() {
    return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"), this.el);
  }
  /**
   * @internal
   */
  async getTabIdentifier() {
    return this.tab ? this.tab : this.getTabIndex();
  }
  /**
   * @internal
   */
  async updateAriaInfo(tabIds = [], titleIds = []) {
    this.controls = tabIds[titleIds.indexOf(this.el.id)] || null;
  }
  updateHasText() {
    this.hasText = this.el.textContent.trim().length > 0;
  }
  setupTextContentObserver() {
    {
      this.observer = new MutationObserver(() => {
        this.updateHasText();
      });
      this.observer.observe(this.el, { childList: true, subtree: true });
    }
  }
  emitActiveTab() {
    if (!this.disabled) {
      this.calciteTabsActivate.emit({
        tab: this.tab
      });
    }
  }
  get el() { return index.getElement(this); }
};
CalciteTabTitle.style = calciteTabTitleCss;

const calciteTabsCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host([position=below]){-ms-flex-direction:column-reverse;flex-direction:column-reverse}section{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;overflow:hidden;border-top:1px solid var(--calcite-ui-border-1)}:host([position=below]) section{-ms-flex-direction:column-reverse;flex-direction:column-reverse;border-top:0;border-bottom:1px solid var(--calcite-ui-border-1)}";

const CalciteTabs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Align tab titles to the edge or fully justify them across the tab nav ("center")
     */
    this.layout = "inline";
    /**
     * Display the tabs above (default) or below the tab content
     */
    this.position = "above";
    //--------------------------------------------------------------------------
    //
    //  Events
    //
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     *
     * Stores an array of ids of `<calcite-tab-titles>`s to match up ARIA
     * attributes.
     */
    this.titles = [];
    /**
     * @internal
     *
     * Stores an array of ids of `<calcite-tab>`s to match up ARIA attributes.
     */
    this.tabs = [];
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    return (index.h(index.Host, null, index.h("slot", { name: "tab-nav" }), index.h("section", null, index.h("slot", null))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  /**
   * @internal
   */
  calciteTabTitleRegister(e) {
    this.titles = [...this.titles, e.target];
    this.registryHandler();
    e.stopPropagation();
  }
  /**
   * @internal
   */
  calciteTabTitleUnregister(e) {
    this.titles = this.titles.filter((el) => el !== e.detail);
    this.registryHandler();
    e.stopPropagation();
  }
  /**
   * @internal
   */
  calciteTabRegister(e) {
    this.tabs = [...this.tabs, e.target];
    this.registryHandler();
    e.stopPropagation();
  }
  /**
   * @internal
   */
  calciteTabUnregister(e) {
    this.tabs = this.tabs.filter((el) => el !== e.detail);
    this.registryHandler();
    e.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * @internal
   *
   * Matches up elements from the internal `tabs` and `titles` to automatically
   * update the ARIA attributes and link `<calcite-tab>` and
   * `<calcite-tab-title>` components.
   */
  async registryHandler() {
    let tabIds;
    let titleIds;
    // determine if we are using `tab` based or `index` based tab identifiers.
    if (this.tabs.some((e) => e.tab) || this.titles.some((e) => e.tab)) {
      // if we are using `tab` based identifiers sort by `tab` to account for
      // possible out of order tabs and get the id of each tab
      tabIds = this.tabs.sort((a, b) => a.tab.localeCompare(b.tab)).map((e) => e.id);
      titleIds = this.titles.sort((a, b) => a.tab.localeCompare(b.tab)).map((e) => e.id);
    }
    else {
      // if we are using index based tabs then the `<calcite-tab>` and
      // `<calcite-tab-title>` might have been rendered out of order so the
      // order of `this.tabs` and `this.titles` might not reflect the DOM state,
      // and might not match each other so we need to get the index of all the
      // tabs and titles in the DOM order to match them up as a source of truth
      const tabDomIndexes = await Promise.all(this.tabs.map((el) => el.getTabIndex()));
      const titleDomIndexes = await Promise.all(this.titles.map((el) => el.getTabIndex()));
      // once we have the DOM order as a source of truth we can build the
      // matching tabIds and titleIds arrays
      tabIds = tabDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
        ids[indexInDOM] = this.tabs[registryIndex].id;
        return ids;
      }, []);
      titleIds = titleDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
        ids[indexInDOM] = this.titles[registryIndex].id;
        return ids;
      }, []);
    }
    // pass all our new aria information to each `<calcite-tab>` and
    // `<calcite-tab-title>` which will check if they can update their internal
    // `controlled` or `labeledBy` states and re-render if necessary
    this.tabs.forEach((el) => el.updateAriaInfo(tabIds, titleIds));
    this.titles.forEach((el) => el.updateAriaInfo(tabIds, titleIds));
  }
  get el() { return index.getElement(this); }
};
CalciteTabs.style = calciteTabsCss;

exports.calcite_tab = CalciteTab;
exports.calcite_tab_nav = CalciteTabNav;
exports.calcite_tab_title = CalciteTabTitle;
exports.calcite_tabs = CalciteTabs;
