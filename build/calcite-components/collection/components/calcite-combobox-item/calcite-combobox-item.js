import { Component, Element, Event, Host, Method, Prop, h, State, Watch } from "@stencil/core";
import { getElementDir, getElementProp } from "../../utils/dom";
import { CSS } from "./resources";
import { guid } from "../../utils/guid";
export class CalciteComboboxItem {
  constructor() {
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
    this.guid = guid();
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
    return showDot ? (h("span", { class: {
        [CSS.icon]: true,
        [CSS.dot]: true,
        [level]: true
      } })) : (h("calcite-icon", { class: {
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
    return (h("ul", null,
      h("slot", null)));
  }
  render() {
    const isSingleSelect = getElementProp(this.el, "selection-mode", "multi") === "single";
    const classes = {
      [CSS.label]: true,
      [CSS.selected]: this.isSelected,
      [CSS.active]: this.active,
      [CSS.single]: isSingleSelect
    };
    const scale = getElementProp(this.el, "scale", "m");
    const dir = getElementDir(this.el);
    return (h(Host, { "aria-hidden": true, dir: dir, disabled: this.disabled, scale: scale, tabIndex: -1 },
      h("li", { class: classes, id: this.guid, onClick: this.itemClickHandler, ref: (el) => (this.comboboxItemEl = el), tabIndex: -1 },
        this.renderIcon(scale, isSingleSelect),
        h("span", { class: CSS.title }, this.textLabel)),
      this.renderChildren()));
  }
  static get is() { return "calcite-combobox-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./calcite-combobox-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-combobox-item.css"]
  }; }
  static get properties() { return {
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
        "text": "When true, the item cannot be clicked and is visually muted."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "selected": {
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
        "text": "Set this to true to pre-select an item. Toggles when an item is checked/unchecked."
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    },
    "active": {
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
        "text": "True when item is highlighted either from keyboard or mouse hover"
      },
      "attribute": "active",
      "reflect": false,
      "defaultValue": "false"
    },
    "anscestors": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "HTMLCalciteComboboxItemElement[]",
        "resolved": "HTMLCalciteComboboxItemElement[]",
        "references": {
          "HTMLCalciteComboboxItemElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Parent and grandparent combobox items, this is set internally for use from combobox"
      }
    },
    "guid": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Unique identifier, used for accessibility"
      },
      "attribute": "guid",
      "reflect": false,
      "defaultValue": "guid()"
    },
    "icon": {
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
        "text": "Custom icon to display both in combobox chips and next to combobox item text"
      },
      "attribute": "icon",
      "reflect": false
    },
    "textLabel": {
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
        "text": "The main label for this item."
      },
      "attribute": "text-label",
      "reflect": true
    },
    "value": {
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
        "text": "A unique value used to identify this item - similar to the value attribute on an <input>."
      },
      "attribute": "value",
      "reflect": true
    }
  }; }
  static get states() { return {
    "isSelected": {}
  }; }
  static get events() { return [{
      "method": "calciteComboboxItemChange",
      "name": "calciteComboboxItemChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "text": "calciteComboboxItemChange",
            "name": "event"
          }],
        "text": "Emitted whenever the item is selected or unselected."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "toggleSelected": {
      "complexType": {
        "signature": "(coerce?: boolean) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Used to toggle the selection state. By default this won't trigger an event.\nThe first argument allows the value to be coerced, rather than swapping values.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "selected",
      "methodName": "selectedWatchHandler"
    }]; }
}
