import { Component, Element, Event, h, Host, Listen, Method, Prop } from "@stencil/core";
import { focusElement, getElementDir, getElementProp } from "../../utils/dom";
import { CSS } from "./resources";
function isOption(optionOrGroup) {
  return optionOrGroup.tagName === "CALCITE-OPTION";
}
function isOptionGroup(optionOrGroup) {
  return optionOrGroup.tagName === "CALCITE-OPTION-GROUP";
}
export class CalciteSelect {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * When true, it prevents the option from being selected.
     */
    this.disabled = false;
    /**
     * The component scale.
     */
    this.scale = "m";
    /**
     * The component width.
     */
    this.width = "auto";
    this.componentToNativeEl = new Map();
    this.mutationObserver = new MutationObserver(() => this.populateInternalSelect());
    this.handleInternalSelectChange = () => {
      const selected = this.selectEl.selectedOptions[0];
      this.selectFromNativeOption(selected);
      requestAnimationFrame(() => this.emitChangeEvent());
    };
    this.populateInternalSelect = () => {
      const optionsAndGroups = Array.from(this.el.children);
      this.clearInternalSelect();
      optionsAndGroups.forEach((optionOrGroup) => { var _a; return (_a = this.selectEl) === null || _a === void 0 ? void 0 : _a.append(this.toNativeElement(optionOrGroup)); });
    };
    this.storeSelectRef = (node) => {
      this.selectEl = node;
      this.populateInternalSelect();
      const selected = this.selectEl.selectedOptions[0];
      this.selectFromNativeOption(selected);
    };
    this.emitChangeEvent = () => {
      this.calciteSelectChange.emit();
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    const { el } = this;
    this.mutationObserver.observe(el, {
      subtree: true,
      childList: true
    });
    if (!this.theme)
      this.theme = getElementProp(this.el, "theme", "light");
  }
  disconnectedCallback() {
    this.mutationObserver.disconnect();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  async setFocus() {
    focusElement(this.selectEl);
  }
  handleOptionOrGroupChange(event) {
    event.stopPropagation();
    const optionOrGroup = event.target;
    const nativeEl = this.componentToNativeEl.get(optionOrGroup);
    if (!nativeEl) {
      return;
    }
    this.updateNativeElements(optionOrGroup, nativeEl);
    if (isOption(optionOrGroup) && optionOrGroup.selected) {
      this.deselectAllExcept(optionOrGroup);
    }
  }
  handleLabelFocus(event) {
    const { requestedInput, labelEl } = event.detail;
    const { el } = this;
    if (labelEl.contains(el) || (requestedInput && requestedInput === el.getAttribute("id"))) {
      this.setFocus();
      event.stopImmediatePropagation();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  updateNativeElements(optionOrGroup, nativeOptionOrGroup) {
    nativeOptionOrGroup.disabled = optionOrGroup.disabled;
    nativeOptionOrGroup.label = optionOrGroup.label;
    if (isOption(optionOrGroup)) {
      const option = nativeOptionOrGroup;
      option.selected = optionOrGroup.selected;
      option.value = optionOrGroup.value;
    }
  }
  clearInternalSelect() {
    this.componentToNativeEl.forEach((value) => value.remove());
    this.componentToNativeEl.clear();
  }
  selectFromNativeOption(nativeOption) {
    if (!nativeOption) {
      return;
    }
    let futureSelected;
    this.componentToNativeEl.forEach((nativeOptionOrGroup, optionOrGroup) => {
      if (isOption(optionOrGroup) && nativeOptionOrGroup === nativeOption) {
        optionOrGroup.selected = true;
        futureSelected = optionOrGroup;
        this.deselectAllExcept(optionOrGroup);
      }
    });
    if (futureSelected) {
      requestAnimationFrame(() => (this.selectedOption = futureSelected));
    }
  }
  toNativeElement(optionOrGroup) {
    if (isOption(optionOrGroup)) {
      const option = document.createElement("option");
      option.disabled = optionOrGroup.disabled;
      option.label = optionOrGroup.label;
      option.selected = optionOrGroup.selected;
      option.value = optionOrGroup.value;
      this.componentToNativeEl.set(optionOrGroup, option);
      return option;
    }
    if (isOptionGroup(optionOrGroup)) {
      const group = document.createElement("optgroup");
      group.disabled = optionOrGroup.disabled;
      group.label = optionOrGroup.label;
      Array.from(optionOrGroup.children).forEach((option) => {
        const nativeOption = this.toNativeElement(option);
        group.append(nativeOption);
        this.componentToNativeEl.set(optionOrGroup, nativeOption);
      });
      this.componentToNativeEl.set(optionOrGroup, group);
      return group;
    }
    throw new Error("unsupported element child provided");
  }
  deselectAllExcept(except) {
    this.el.querySelectorAll("calcite-option").forEach((option) => {
      if (option === except) {
        return;
      }
      option.selected = false;
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderChevron() {
    return (h("div", { class: { [CSS.iconContainer]: true } },
      h("calcite-icon", { class: CSS.icon, icon: "chevron-down", scale: "s" })));
  }
  render() {
    const dir = getElementDir(this.el);
    return (h(Host, { dir: dir },
      h("select", { "aria-label": this.label, class: { [CSS.select]: true }, disabled: this.disabled, onChange: this.handleInternalSelectChange, ref: this.storeSelectRef },
        h("slot", null)),
      this.renderChevron()));
  }
  static get is() { return "calcite-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-select.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-select.css"]
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
        "text": "When true, it prevents the option from being selected."
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
        "text": "The component's label. This is required for accessibility purposes."
      },
      "attribute": "label",
      "reflect": false
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
        "text": "The component scale."
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "selectedOption": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "HTMLCalciteOptionElement",
        "resolved": "HTMLCalciteOptionElement",
        "references": {
          "HTMLCalciteOptionElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": undefined,
            "name": "readonly"
          }],
        "text": "The currently selected option."
      }
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
        "text": "The component theme."
      },
      "attribute": "theme",
      "reflect": true
    },
    "width": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Width",
        "resolved": "\"auto\" | \"full\" | \"half\"",
        "references": {
          "Width": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The component width."
      },
      "attribute": "width",
      "reflect": true,
      "defaultValue": "\"auto\""
    }
  }; }
  static get events() { return [{
      "method": "calciteSelectChange",
      "name": "calciteSelectChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "This event will fire whenever the selected option changes."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
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
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "calciteOptionChange",
      "method": "handleOptionOrGroupChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteOptionGroupChange",
      "method": "handleOptionOrGroupChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteLabelFocus",
      "method": "handleLabelFocus",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
