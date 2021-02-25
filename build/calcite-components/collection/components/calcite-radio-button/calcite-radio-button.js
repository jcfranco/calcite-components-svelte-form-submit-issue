import { Component, Host, h, Listen, Prop, Element, Watch, Event, Method } from "@stencil/core";
import { guid } from "../../utils/guid";
import { getElementDir } from "../../utils/dom";
export class CalciteRadioButton {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** The checked state of the radio button. */
    this.checked = false;
    /** The disabled state of the radio button. */
    this.disabled = false;
    /** The focused state of the radio button. */
    this.focused = false;
    /** The radio button's hidden status.  When a radio button is hidden it is not focusable or checkable. */
    this.hidden = false;
    /** The hovered state of the radio button. */
    this.hovered = false;
    /** Requires that a value is selected for the radio button group before the parent form will submit. */
    this.required = false;
    /** The scale (size) of the radio button.  <code>scale</code> is passed as a property automatically from <code>calcite-radio-button-group</code>. */
    this.scale = "m";
    /** The color theme of the radio button, <code>theme</code> is passed as a property automatically from <code>calcite-radio-button-group</code>. */
    this.theme = "light";
    this.setInputEl = (el) => {
      this.inputEl = el;
    };
    this.formResetHandler = () => {
      var _a;
      this.checked = this.initialChecked;
      this.initialChecked && ((_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.setAttribute("checked", ""));
    };
    this.hideInputEl = () => {
      this.inputEl.style.setProperty("margin", "0", "important");
      this.inputEl.style.setProperty("opacity", "0", "important");
      this.inputEl.style.setProperty("padding", "0", "important");
      this.inputEl.style.setProperty("position", "absolute", "important");
      this.inputEl.style.setProperty("transform", "none", "important");
      this.inputEl.style.setProperty("z-index", "-1", "important");
    };
    this.onInputBlur = () => {
      this.focused = false;
      this.calciteRadioButtonFocusedChange.emit();
    };
    this.onInputFocus = () => {
      this.focused = true;
      this.calciteRadioButtonFocusedChange.emit();
    };
  }
  checkedChanged(newChecked) {
    if (newChecked) {
      this.uncheckOtherRadioButtonsInGroup();
    }
    if (this.inputEl) {
      this.inputEl.checked = newChecked;
    }
    this.calciteRadioButtonCheckedChange.emit(newChecked);
  }
  disabledChanged(disabled) {
    this.inputEl.disabled = disabled;
  }
  focusedChanged(focused) {
    if (!this.inputEl)
      return;
    if (focused && !this.el.hasAttribute("hidden")) {
      this.inputEl.focus();
    }
    else {
      this.inputEl.blur();
    }
  }
  hiddenChanged(newHidden) {
    this.inputEl.hidden = newHidden;
  }
  nameChanged(newName) {
    if (this.name === newName) {
      return;
    }
    if (this.inputEl) {
      this.inputEl.name = newName;
    }
    this.checkLastRadioButton();
    const currentValue = this.rootNode.querySelector(`input[name="${this.name}"]:checked`);
    if (!(currentValue === null || currentValue === void 0 ? void 0 : currentValue.value)) {
      this.uncheckAllRadioButtonsInGroup();
    }
  }
  requiredChanged(required) {
    this.inputEl.required = required;
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  checkLastRadioButton() {
    const radioButtons = Array.from(this.rootNode.querySelectorAll("calcite-radio-button")).filter((radioButton) => radioButton.name === this.name);
    const checkedRadioButtons = radioButtons.filter((radioButton) => radioButton.checked);
    if ((checkedRadioButtons === null || checkedRadioButtons === void 0 ? void 0 : checkedRadioButtons.length) > 1) {
      const lastCheckedRadioButton = checkedRadioButtons[checkedRadioButtons.length - 1];
      checkedRadioButtons
        .filter((checkedRadioButton) => checkedRadioButton !== lastCheckedRadioButton)
        .forEach((checkedRadioButton) => {
        checkedRadioButton.checked = false;
        checkedRadioButton.emitCheckedChange();
      });
    }
  }
  /** @internal */
  async emitCheckedChange() {
    this.calciteRadioButtonCheckedChange.emit();
  }
  uncheckAllRadioButtonsInGroup() {
    const otherRadioButtons = Array.from(this.rootNode.querySelectorAll("calcite-radio-button")).filter((radioButton) => radioButton.name === this.name);
    otherRadioButtons.forEach((otherRadioButton) => {
      if (otherRadioButton.checked) {
        otherRadioButton.checked = false;
        otherRadioButton.focused = false;
      }
    });
  }
  uncheckOtherRadioButtonsInGroup() {
    const otherRadioButtons = Array.from(this.rootNode.querySelectorAll("calcite-radio-button")).filter((radioButton) => radioButton.name === this.name && radioButton.guid !== this.guid);
    otherRadioButtons.forEach((otherRadioButton) => {
      if (otherRadioButton.checked) {
        otherRadioButton.checked = false;
        otherRadioButton.focused = false;
      }
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  check(event) {
    // Prevent parent label from clicking the first radio when calcite-radio-button is clicked
    if (this.el.closest("label") && (event.target === this.el || event.target === this.radio)) {
      event.preventDefault();
    }
    if (!this.disabled && !this.hidden) {
      this.uncheckOtherRadioButtonsInGroup();
      this.checked = true;
      this.focused = true;
      this.calciteRadioButtonChange.emit();
    }
  }
  mouseenter() {
    this.hovered = true;
  }
  mouseleave() {
    this.hovered = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.rootNode = this.el.getRootNode();
    this.guid = this.el.id || `calcite-radio-button-${guid()}`;
    this.initialChecked = this.checked;
    if (this.name) {
      this.checkLastRadioButton();
    }
    const form = this.el.closest("form");
    if (form) {
      form.addEventListener("reset", this.formResetHandler);
    }
  }
  componentDidLoad() {
    this.hideInputEl();
    if (this.focused) {
      this.inputEl.focus();
    }
  }
  disconnectedCallback() {
    const form = this.el.closest("form");
    if (form) {
      form.removeEventListener("reset", this.formResetHandler);
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderLabel() {
    if (this.el.textContent) {
      return (h("calcite-label", { dir: getElementDir(this.el), "disable-spacing": true, disabled: this.disabled, for: `${this.guid}-input`, layout: "inline", scale: this.scale },
        h("slot", null)));
    }
    return h("slot", null);
  }
  render() {
    return (h(Host, { labeled: !!this.el.textContent },
      h("input", { "aria-label": this.value || this.guid, checked: this.checked, disabled: this.disabled, hidden: this.hidden, id: `${this.guid}-input`, name: this.name, onBlur: this.onInputBlur, onFocus: this.onInputFocus, ref: this.setInputEl, required: this.required, type: "radio", value: this.value }),
      h("calcite-radio", { checked: this.checked, disabled: this.disabled, focused: this.focused, hidden: this.hidden, hovered: this.hovered, ref: (el) => (this.radio = el), scale: this.scale, theme: this.theme }),
      this.renderLabel()));
  }
  static get is() { return "calcite-radio-button"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-radio-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-radio-button.css"]
  }; }
  static get properties() { return {
    "checked": {
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
        "text": "The checked state of the radio button."
      },
      "attribute": "checked",
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
        "text": "The disabled state of the radio button."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "focused": {
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
        "text": "The focused state of the radio button."
      },
      "attribute": "focused",
      "reflect": true,
      "defaultValue": "false"
    },
    "guid": {
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
        "text": "The id attribute of the radio button.  When omitted, a globally unique identifier is used."
      },
      "attribute": "guid",
      "reflect": true
    },
    "hidden": {
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
        "text": "The radio button's hidden status.  When a radio button is hidden it is not focusable or checkable."
      },
      "attribute": "hidden",
      "reflect": true,
      "defaultValue": "false"
    },
    "hovered": {
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
        "text": "The hovered state of the radio button."
      },
      "attribute": "hovered",
      "reflect": true,
      "defaultValue": "false"
    },
    "name": {
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
        "text": "The name of the radio button.  <code>name</code> is passed as a property automatically from <code>calcite-radio-button-group</code>."
      },
      "attribute": "name",
      "reflect": true
    },
    "required": {
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
        "text": "Requires that a value is selected for the radio button group before the parent form will submit."
      },
      "attribute": "required",
      "reflect": true,
      "defaultValue": "false"
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
        "text": "The scale (size) of the radio button.  <code>scale</code> is passed as a property automatically from <code>calcite-radio-button-group</code>."
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
        "text": "The color theme of the radio button, <code>theme</code> is passed as a property automatically from <code>calcite-radio-button-group</code>."
      },
      "attribute": "theme",
      "reflect": true,
      "defaultValue": "\"light\""
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
        "text": "The value of the radio button."
      },
      "attribute": "value",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "calciteRadioButtonChange",
      "name": "calciteRadioButtonChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fires only when the radio button is checked.  This behavior is identical to the native HTML input element.\nSince this event does not fire when the radio button is unchecked, it's not recommended to attach a listener for this event\ndirectly on the element, but instead either attach it to a node that contains all of the radio buttons in the group\nor use the calciteRadioButtonGroupChange event if using this with calcite-radio-button-group."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteRadioButtonCheckedChange",
      "name": "calciteRadioButtonCheckedChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "text": undefined,
            "name": "internal"
          }],
        "text": "Fires when the checked property changes.  This is an internal event used for styling purposes only.\nUse calciteRadioButtonChange or calciteRadioButtonGroupChange for responding to changes in the checked value for forms."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteRadioButtonFocusedChange",
      "name": "calciteRadioButtonFocusedChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fires when the radio button is either focused or blurred."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "emitCheckedChange": {
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
        "tags": [{
            "name": "internal",
            "text": undefined
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "checked",
      "methodName": "checkedChanged"
    }, {
      "propName": "disabled",
      "methodName": "disabledChanged"
    }, {
      "propName": "focused",
      "methodName": "focusedChanged"
    }, {
      "propName": "hidden",
      "methodName": "hiddenChanged"
    }, {
      "propName": "name",
      "methodName": "nameChanged"
    }, {
      "propName": "required",
      "methodName": "requiredChanged"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "check",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "mouseenter",
      "method": "mouseenter",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "mouseleave",
      "method": "mouseleave",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
