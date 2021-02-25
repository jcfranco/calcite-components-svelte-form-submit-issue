import { Component, Element, Event, h, Method, Prop, State, Watch } from "@stencil/core";
import { hexChar, hexToRGB, isLonghandHex, isValidHex, normalizeHex, rgbToHex } from "../calcite-color/utils";
import Color from "color";
import { CSS } from "./resources";
import { focusElement, getElementDir } from "../../utils/dom";
import { TEXT } from "../calcite-color/resources";
import { getKey } from "../../utils/key";
const DEFAULT_COLOR = Color();
export class CalciteColorHexInput {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /**
     * When false, empty color (null) will be allowed as a value. Otherwise, a color value is always enforced by the component.
     *
     * When true, clearing the input and blurring will restore the last valid color set. When false, it will set it to empty.
     */
    this.allowEmpty = false;
    /**
     * Label used for the hex input.
     */
    this.intlHex = TEXT.hex;
    /**
     * Label used for the hex input when there is no color selected.
     */
    this.intlNoColor = TEXT.noColor;
    /**
     * The component's scale.
     */
    this.scale = "m";
    /**
     * The component's theme.
     */
    this.theme = "light";
    /**
     * The hex value.
     */
    this.value = normalizeHex(DEFAULT_COLOR.hex());
    this.onCalciteInputBlur = (event) => {
      const node = event.currentTarget;
      const inputValue = node.value;
      const hex = `#${inputValue}`;
      const willClearValue = this.allowEmpty && !inputValue;
      if (willClearValue || (isValidHex(hex) && isLonghandHex(hex))) {
        return;
      }
      // manipulating DOM directly since rerender doesn't update input value
      node.value =
        this.allowEmpty && !this.internalColor
          ? ""
          : this.formatForInternalInput(rgbToHex(this.internalColor.object()));
    };
    this.onInputChange = (event) => {
      const node = event.currentTarget;
      const inputValue = node.value;
      let value;
      if (inputValue) {
        const hex = inputValue;
        const color = hexToRGB(`#${hex}`);
        if (!color) {
          return;
        }
        value = normalizeHex(hex);
      }
      else if (this.allowEmpty) {
        value = null;
      }
      this.value = value;
      this.calciteColorHexInputChange.emit();
    };
    this.onInputKeyDown = (event) => {
      const { altKey, ctrlKey, metaKey, shiftKey } = event;
      const { inputNode, internalColor, value } = this;
      const key = getKey(event.key);
      const nudgeable = value && (key === "ArrowDown" || key === "ArrowUp");
      if (nudgeable) {
        const direction = key === "ArrowUp" ? 1 : -1;
        const bump = shiftKey ? 10 : 1;
        this.value = normalizeHex(this.nudgeRGBChannels(internalColor, bump * direction).hex());
        event.preventDefault();
        return;
      }
      const withModifiers = altKey || ctrlKey || metaKey;
      const exceededHexLength = inputNode.value.length >= 6;
      const hasTextSelection = getSelection().type === "Range";
      if (key.length === 1 &&
        !withModifiers &&
        !hasTextSelection &&
        (!hexChar.test(key) || exceededHexLength)) {
        event.preventDefault();
      }
    };
    /**
     * The last valid/selected color. Used as a fallback if an invalid hex code is entered.
     */
    this.internalColor = DEFAULT_COLOR;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.storeInputRef = (node) => {
      this.inputNode = node;
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    const { allowEmpty, value } = this;
    if (value) {
      const normalized = normalizeHex(value);
      if (isValidHex(normalized)) {
        this.internalColor = Color(normalized);
        this.value = normalized;
      }
      return;
    }
    if (allowEmpty) {
      this.internalColor = null;
      this.value = null;
    }
  }
  handleValueChange(value, oldValue) {
    if (value) {
      const normalized = normalizeHex(value);
      if (isValidHex(normalized)) {
        const { internalColor } = this;
        const changed = !internalColor || normalized !== normalizeHex(internalColor.hex());
        this.internalColor = Color(normalized);
        this.value = normalized;
        if (changed) {
          this.calciteColorHexInputChange.emit();
        }
        return;
      }
    }
    else if (this.allowEmpty) {
      this.internalColor = null;
      this.value = null;
      this.calciteColorHexInputChange.emit();
      return;
    }
    this.value = oldValue;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const { el, intlHex, value } = this;
    const hexInputValue = this.formatForInternalInput(value);
    const elementDir = getElementDir(el);
    return (h("div", { class: CSS.container },
      h("calcite-input", { "aria-label": intlHex, class: CSS.input, dir: elementDir, onCalciteInputBlur: this.onCalciteInputBlur, onChange: this.onInputChange, onKeyDown: this.onInputKeyDown, prefixText: "#", ref: this.storeInputRef, scale: "s", value: hexInputValue }),
      hexInputValue ? (h("calcite-color-swatch", { active: true, class: CSS.preview, color: `#${hexInputValue}`, scale: "s" })) : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    focusElement(this.inputNode);
  }
  formatForInternalInput(hex) {
    return hex ? hex.replace("#", "") : "";
  }
  nudgeRGBChannels(color, amount) {
    return Color.rgb(color.array().map((channel) => channel + amount));
  }
  static get is() { return "calcite-color-hex-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-color-hex-input.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-color-hex-input.css"]
  }; }
  static get properties() { return {
    "allowEmpty": {
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
        "text": "When false, empty color (null) will be allowed as a value. Otherwise, a color value is always enforced by the component.\n\nWhen true, clearing the input and blurring will restore the last valid color set. When false, it will set it to empty."
      },
      "attribute": "allow-empty",
      "reflect": false,
      "defaultValue": "false"
    },
    "intlHex": {
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
        "text": "Label used for the hex input."
      },
      "attribute": "intl-hex",
      "reflect": false,
      "defaultValue": "TEXT.hex"
    },
    "intlNoColor": {
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
        "text": "Label used for the hex input when there is no color selected."
      },
      "attribute": "intl-no-color",
      "reflect": false,
      "defaultValue": "TEXT.noColor"
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
        "text": "The component's scale."
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
        "text": "The component's theme."
      },
      "attribute": "theme",
      "reflect": true,
      "defaultValue": "\"light\""
    },
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The hex value."
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "normalizeHex(DEFAULT_COLOR.hex())"
    }
  }; }
  static get states() { return {
    "internalColor": {}
  }; }
  static get events() { return [{
      "method": "calciteColorHexInputChange",
      "name": "calciteColorHexInputChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the hex value changes."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
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
        "text": "Sets focus on the component.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "handleValueChange"
    }]; }
}
