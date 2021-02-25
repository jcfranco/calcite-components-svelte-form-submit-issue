import { Component, h, Host, Prop, State, Listen, Event, Element, Build, Method, Watch } from "@stencil/core";
import { filter } from "../../utils/filter";
import { getElementDir } from "../../utils/dom";
import { debounce } from "lodash-es";
import { getKey } from "../../utils/key";
import { createPopper, updatePopper, CSS as PopperCSS } from "../../utils/popper";
import { guid } from "../../utils/guid";
const COMBO_BOX_ITEM = "calcite-combobox-item";
const DEFAULT_PLACEMENT = "bottom-start";
export class CalciteCombobox {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** Open and close combobox */
    this.active = false;
    /** Disable combobox input */
    this.disabled = false;
    /** Specify the maximum number of combobox items (including nested children) to display before showing the scroller */
    this.maxItems = 0;
    /** specify the selection mode - multi (allow any number of selected items), single (only one selction), defaults to multi */
    this.selectionMode = "multi";
    /** Specify the scale of the combobox, defaults to m */
    this.scale = "m";
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    this.items = [];
    this.selectedItems = [];
    this.visibleItems = [];
    this.activeItemIndex = -1;
    this.activeChipIndex = -1;
    this.activeDescendant = "";
    this.text = "";
    this.textInput = null;
    this.observer = null;
    this.guid = guid();
    /** specifies the item wrapper height; it is updated when maxItems is > 0  **/
    this.maxScrollerHeight = 0;
    this.inputHeight = 0;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setInactiveIfNotContained = (event) => {
      if (!this.active || event.composedPath().includes(this.el)) {
        return;
      }
      if (this.selectionMode === "single") {
        this.textInput.value = "";
        this.text = "";
        this.filterItems("");
        this.updateActiveItemIndex(-1);
      }
      this.active = false;
    };
    this.setMenuEl = (el) => {
      this.menuEl = el;
    };
    this.setListContainerEl = (el) => {
      this.listContainerEl = el;
    };
    this.setReferenceEl = (el) => {
      this.referenceEl = el;
    };
    this.inputHandler = (event) => {
      const value = event.target.value;
      this.text = value;
      this.filterItems(value);
      if (value) {
        this.activeChipIndex = -1;
      }
    };
    this.filterItems = debounce((value) => {
      const filteredData = filter(this.data, value);
      const values = filteredData.map((item) => item.value);
      this.items.forEach((item) => {
        const hidden = values.indexOf(item.value) === -1;
        item.hidden = hidden;
        const [parent, grandparent] = item.anscestors;
        if ((parent || grandparent) &&
          (values.indexOf(parent === null || parent === void 0 ? void 0 : parent.value) > -1 || values.indexOf(grandparent === null || grandparent === void 0 ? void 0 : grandparent.value) > -1)) {
          item.hidden = false;
        }
        if (!hidden) {
          item.anscestors.forEach((anscestor) => (anscestor.hidden = false));
        }
      });
      this.visibleItems = this.getVisibleItems();
    }, 100);
    this.updateItems = () => {
      this.items = this.getItems();
      this.data = this.getData();
      this.selectedItems = this.getSelectedItems();
      this.visibleItems = this.getVisibleItems();
      this.needsIcon = this.getNeedsIcon();
      if (this.selectionMode === "single" && this.selectedItems.length) {
        this.selectedItem = this.selectedItems[0];
      }
    };
    this.comboboxFocusHandler = () => {
      this.active = true;
      this.textInput.focus();
    };
    this.comboboxBlurHandler = (event) => {
      this.setInactiveIfNotContained(event);
    };
  }
  activeHandler() {
    this.reposition();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  documentClickHandler(event) {
    this.setInactiveIfNotContained(event);
  }
  calciteComboboxItemChangeHandler(event) {
    this.toggleSelection(event.detail);
  }
  calciteChipDismissHandler(event) {
    var _a;
    this.active = false;
    const value = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.value;
    const comboboxItem = this.items.find((item) => item.value === value);
    if (comboboxItem) {
      this.toggleSelection(comboboxItem, false);
    }
    this.calciteComboboxChipDismiss.emit(event.detail);
  }
  keydownHandler(event) {
    const key = getKey(event.key, getElementDir(this.el));
    switch (key) {
      case "Tab":
        this.activeChipIndex = -1;
        this.activeItemIndex = -1;
        this.active = false;
        break;
      case "ArrowLeft":
        this.previousChip();
        break;
      case "ArrowRight":
        this.nextChip();
        break;
      case "ArrowUp":
        event.preventDefault();
        this.active = true;
        this.shiftActiveItemIndex(-1);
        break;
      case "ArrowDown":
        event.preventDefault();
        this.active = true;
        this.shiftActiveItemIndex(1);
        break;
      case "Home":
        this.active = true;
        this.updateActiveItemIndex(0);
        break;
      case "End":
        this.active = true;
        this.updateActiveItemIndex(this.visibleItems.length - 1);
        break;
      case "Escape":
        this.active = false;
        break;
      case "Enter":
        if (this.activeItemIndex > -1) {
          this.toggleSelection(this.visibleItems[this.activeItemIndex]);
        }
        else if (this.activeChipIndex > -1) {
          this.removeActiveChip();
        }
        else if (this.allowCustomValues && this.text) {
          this.addCustomChip(this.text);
        }
        break;
      case "Delete":
      case "Backspace":
        if (this.activeChipIndex > -1) {
          this.removeActiveChip();
        }
        else if (!this.text && this.selectionMode === "multi") {
          this.removeLastChip();
        }
        break;
      default:
        if (!this.active) {
          this.setFocus();
        }
        break;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  async reposition() {
    const { popper, menuEl } = this;
    const modifiers = this.getModifiers();
    popper
      ? updatePopper({
        el: menuEl,
        modifiers,
        placement: DEFAULT_PLACEMENT,
        popper
      })
      : this.createPopper();
  }
  async setFocus() {
    var _a;
    this.active = true;
    (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
    this.activeChipIndex = -1;
    this.activeItemIndex = -1;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    if (Build.isBrowser) {
      this.observer = new MutationObserver(this.updateItems);
    }
    this.createPopper();
  }
  componentWillLoad() {
    this.updateItems();
  }
  componentDidLoad() {
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
    this.maxScrollerHeight = this.getMaxScrollerHeight(this.items);
  }
  componentDidRender() {
    if (this.el.offsetHeight !== this.inputHeight) {
      this.reposition();
      this.inputHeight = this.el.offsetHeight;
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.destroyPopper();
  }
  /** when search text is cleared, reset active to  */
  textHandler() {
    this.updateActiveItemIndex(-1);
  }
  getModifiers() {
    const flipModifier = {
      name: "flip",
      enabled: true
    };
    flipModifier.options = {
      fallbackPlacements: ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]
    };
    return [flipModifier];
  }
  createPopper() {
    this.destroyPopper();
    const { menuEl, referenceEl } = this;
    const modifiers = this.getModifiers();
    this.popper = createPopper({
      el: menuEl,
      modifiers,
      placement: DEFAULT_PLACEMENT,
      referenceEl
    });
  }
  destroyPopper() {
    const { popper } = this;
    if (popper) {
      popper.destroy();
    }
    this.popper = null;
  }
  getMaxScrollerHeight(items) {
    const { maxItems } = this;
    let itemsToProcess = 0;
    let maxScrollerHeight = 0;
    items.forEach((item) => {
      if (itemsToProcess < maxItems && maxItems > 0) {
        maxScrollerHeight += this.calculateSingleItemHeight(item);
        itemsToProcess++;
      }
    });
    return maxScrollerHeight;
  }
  calculateSingleItemHeight(item) {
    let height = item.offsetHeight;
    // if item has children items, don't count their height twice
    const children = item.querySelectorAll("calcite-combobox-item");
    children.forEach((child) => {
      height -= child.offsetHeight;
    });
    return height;
  }
  toggleSelection(item, value = !item.selected) {
    if (this.selectionMode === "multi") {
      item.selected = value;
      this.selectedItems = this.getSelectedItems();
      this.calciteLookupChange.emit(this.selectedItems);
      this.resetText();
      this.textInput.focus();
      this.filterItems("");
    }
    else {
      this.items.forEach((el) => el.toggleSelected(false));
      item.toggleSelected(true);
      this.selectedItem = item;
      this.textInput.value = item.textLabel;
      this.active = false;
      this.updateActiveItemIndex(-1);
      this.resetText();
      this.filterItems("");
    }
  }
  getVisibleItems() {
    return this.items.filter((item) => !item.hidden);
  }
  getSelectedItems() {
    return (this.items
      .filter((item) => item.selected)
      /** Preserve order of entered tags */
      .sort((a, b) => {
      const aIdx = this.selectedItems.indexOf(a);
      const bIdx = this.selectedItems.indexOf(b);
      if (aIdx > -1 && bIdx > -1) {
        return aIdx - bIdx;
      }
      return bIdx - aIdx;
    }));
  }
  getData() {
    return this.items.map((item) => ({
      value: item.value,
      label: item.textLabel,
      guid: item.guid
    }));
  }
  getNeedsIcon() {
    return this.selectionMode === "single" && this.items.some((item) => item.icon);
  }
  resetText() {
    this.textInput.value = "";
    this.text = "";
  }
  getItems() {
    const items = Array.from(this.el.querySelectorAll(COMBO_BOX_ITEM));
    return items.filter((item) => !item.disabled);
  }
  addCustomChip(value) {
    const existingItem = this.items.find((el) => el.value === value || el.textLabel === value);
    if (existingItem) {
      this.toggleSelection(existingItem, true);
    }
    else {
      const item = document.createElement("calcite-combobox-item");
      item.value = value;
      item.textLabel = value;
      item.guid = guid();
      item.selected = true;
      this.el.appendChild(item);
      this.resetText();
      this.setFocus();
      this.updateItems();
      this.filterItems("");
    }
  }
  removeActiveChip() {
    this.toggleSelection(this.selectedItems[this.activeChipIndex], false);
    this.setFocus();
  }
  removeLastChip() {
    this.toggleSelection(this.selectedItems[this.selectedItems.length - 1], false);
    this.setFocus();
  }
  previousChip() {
    if (this.text) {
      return;
    }
    const length = this.selectedItems.length - 1;
    const active = this.activeChipIndex;
    this.activeChipIndex = active === -1 ? length : Math.max(active - 1, 0);
    this.updateActiveItemIndex(-1);
    this.focusChip();
  }
  nextChip() {
    if (this.text || this.activeChipIndex === -1) {
      return;
    }
    const last = this.selectedItems.length - 1;
    const newIndex = this.activeChipIndex + 1;
    if (newIndex > last) {
      this.activeChipIndex = -1;
      this.setFocus();
    }
    else {
      this.activeChipIndex = newIndex;
      this.focusChip();
    }
    this.updateActiveItemIndex(-1);
  }
  focusChip() {
    var _a;
    const guid = (_a = this.selectedItems[this.activeChipIndex]) === null || _a === void 0 ? void 0 : _a.guid;
    const chip = this.referenceEl.querySelector(`#chip-${guid}`);
    chip === null || chip === void 0 ? void 0 : chip.setFocus();
  }
  shiftActiveItemIndex(delta) {
    const length = this.visibleItems.length;
    const newIndex = (this.activeItemIndex + length + delta) % length;
    this.updateActiveItemIndex(newIndex);
    // ensure active item is in view if we have scrolling
    const activeItem = this.visibleItems[this.activeItemIndex];
    const height = this.calculateSingleItemHeight(activeItem);
    const { offsetHeight, scrollTop } = this.listContainerEl;
    if (offsetHeight + scrollTop < activeItem.offsetTop + height) {
      this.listContainerEl.scrollTop = activeItem.offsetTop - offsetHeight + height;
    }
    else if (activeItem.offsetTop < scrollTop) {
      this.listContainerEl.scrollTop = activeItem.offsetTop;
    }
  }
  updateActiveItemIndex(index) {
    this.activeItemIndex = index;
    let activeDescendant = null;
    this.visibleItems.forEach((el, i) => {
      if (i === index) {
        el.active = true;
        activeDescendant = el.guid;
      }
      else {
        el.active = false;
      }
    });
    this.activeDescendant = activeDescendant;
    if (this.activeItemIndex > -1) {
      this.activeChipIndex = -1;
      this.textInput.focus();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderChips() {
    const { activeChipIndex, scale } = this;
    return this.selectedItems.map((item, i) => {
      const chipClasses = { chip: true, "chip--active": activeChipIndex === i };
      return (h("calcite-chip", { class: chipClasses, dismissLabel: "remove tag", dismissible: true, icon: item.icon, id: `chip-${item.guid}`, key: item.value, scale: scale, value: item.value }, item.textLabel));
    });
  }
  renderInput() {
    const { active, disabled, placeholder, selectionMode, needsIcon, label } = this;
    const single = selectionMode === "single";
    const showLabel = !active && single && !!this.selectedItem;
    return (h("span", { class: {
        "input-wrap": true,
        "input-wrap--single": single
      } },
      showLabel && (h("span", { class: {
          label: true,
          "label--spaced": needsIcon
        }, key: "label", onFocus: this.comboboxFocusHandler, tabindex: "0" }, this.selectedItem.textLabel)),
      h("input", { "aria-activedescendant": this.activeDescendant, "aria-autocomplete": "list", "aria-controls": guid, "aria-label": label, class: {
          input: true,
          "input--transparent": this.activeChipIndex > -1,
          "input--single": single,
          "input--hidden": showLabel,
          "input--icon": single && needsIcon
        }, disabled: disabled, id: `${guid}-input`, key: "input", onBlur: this.comboboxBlurHandler, onFocus: this.comboboxFocusHandler, onInput: this.inputHandler, placeholder: placeholder, ref: (el) => (this.textInput = el), type: "text" })));
  }
  renderListBoxOptions() {
    return this.visibleItems.map((item) => (h("li", { "aria-selected": (!!item.selected).toString(), id: item.guid, role: "option", tabindex: "-1" }, item.textLabel || item.value)));
  }
  renderPopperContainer() {
    const { active, maxScrollerHeight, setMenuEl, setListContainerEl } = this;
    const classes = {
      "list-container": true,
      [PopperCSS.animation]: true,
      [PopperCSS.animationActive]: active
    };
    const style = {
      maxHeight: maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : ""
    };
    return (h("div", { "aria-hidden": "true", class: "popper-container", ref: setMenuEl },
      h("div", { class: classes, ref: setListContainerEl, style: style },
        h("ul", { class: "list" },
          h("slot", null)))));
  }
  renderIconStart() {
    const { selectionMode, needsIcon, selectedItem } = this;
    const scale = this.scale === "l" ? "m" : "s";
    return (selectionMode === "single" &&
      needsIcon && (h("span", { class: "icon-start" }, (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.icon) && (h("calcite-icon", { class: "selected-icon", icon: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.icon, scale: scale })))));
  }
  renderIconEnd() {
    const scale = this.scale === "l" ? "m" : "s";
    return (this.selectionMode === "single" && (h("span", { class: "icon-end" },
      h("calcite-icon", { icon: "chevron-down", scale: scale }))));
  }
  render() {
    const { guid, active, el, label } = this;
    const single = this.selectionMode === "single";
    const dir = getElementDir(el);
    const labelId = `${guid}-label`;
    return (h(Host, { active: active, dir: dir },
      h("div", { "aria-autocomplete": "list", "aria-expanded": active.toString(), "aria-haspopup": "listbox", "aria-labelledby": labelId, "aria-owns": guid, class: {
          wrapper: true,
          "wrapper--active": active,
          "wrapper--single": single
        }, onClick: () => this.setFocus(), ref: this.setReferenceEl, role: "combobox" },
        this.renderIconStart(),
        !single && this.renderChips(),
        h("label", { class: "screen-readers-only", htmlFor: `${guid}-input`, id: labelId }, label),
        this.renderInput(),
        this.renderIconEnd()),
      h("ul", { "aria-labelledby": labelId, "aria-multiselectable": "true", class: "screen-readers-only", id: guid, role: "listbox", tabIndex: -1 }, this.renderListBoxOptions()),
      this.renderPopperContainer()));
  }
  static get is() { return "calcite-combobox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-combobox.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-combobox.css"]
  }; }
  static get properties() { return {
    "active": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Open and close combobox"
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Disable combobox input"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Aria label for combobox (required)"
      },
      "attribute": "label",
      "reflect": false
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Placeholder text for input"
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "maxItems": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Specify the maximum number of combobox items (including nested children) to display before showing the scroller"
      },
      "attribute": "max-items",
      "reflect": false,
      "defaultValue": "0"
    },
    "allowCustomValues": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Allow entry of custom values which are not in the original set of items"
      },
      "attribute": "allow-custom-values",
      "reflect": false
    },
    "selectionMode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ComboboxSelectionMode",
        "resolved": "\"multi\" | \"single\"",
        "references": {
          "ComboboxSelectionMode": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the selection mode - multi (allow any number of selected items), single (only one selction), defaults to multi"
      },
      "attribute": "selection-mode",
      "reflect": true,
      "defaultValue": "\"multi\""
    },
    "scale": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Scale",
        "resolved": "\"l\" | \"m\" | \"s\"",
        "references": {
          "Scale": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Specify the scale of the combobox, defaults to m"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "theme": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Theme",
        "resolved": "\"dark\" | \"light\"",
        "references": {
          "Theme": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Select theme (light or dark)"
      },
      "attribute": "theme",
      "reflect": true
    }
  }; }
  static get states() { return {
    "items": {},
    "selectedItems": {},
    "selectedItem": {},
    "visibleItems": {},
    "needsIcon": {},
    "activeItemIndex": {},
    "activeChipIndex": {},
    "activeDescendant": {},
    "text": {}
  }; }
  static get events() { return [{
      "method": "calciteLookupChange",
      "name": "calciteLookupChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Called when the selected items set changes"
      },
      "complexType": {
        "original": "HTMLCalciteComboboxItemElement[]",
        "resolved": "HTMLCalciteComboboxItemElement[]",
        "references": {
          "HTMLCalciteComboboxItemElement": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "calciteComboboxChipDismiss",
      "name": "calciteComboboxChipDismiss",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "reposition": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "active",
      "methodName": "activeHandler"
    }, {
      "propName": "text",
      "methodName": "textHandler"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "documentClickHandler",
      "target": "document",
      "capture": false,
      "passive": false
    }, {
      "name": "calciteComboboxItemChange",
      "method": "calciteComboboxItemChangeHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteChipDismiss",
      "method": "calciteChipDismissHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "keydownHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
