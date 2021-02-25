import { Component, Element, Event, Host, Prop, Watch, h, Method } from "@stencil/core";
import { CalciteExpandToggle, toggleChildActionText } from "../functional/CalciteExpandToggle";
import { getElementDir, focusElement } from "../../utils/dom";
import { CSS_UTILITY } from "../../utils/resources";
import { CSS, TEXT } from "./resources";
/**
 * @slot - A slot for adding `calcite-action`s to the action pad.
 */
export class CalciteActionPad {
  constructor() {
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
      await focusElement(this.expandToggleEl);
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
    const expandLabel = intlExpand || TEXT.expand;
    const collapseLabel = intlCollapse || TEXT.collapse;
    const expandToggleNode = !expandDisabled ? (h(CalciteExpandToggle, { el: el, expanded: expanded, intlCollapse: collapseLabel, intlExpand: expandLabel, position: position, ref: this.setExpandToggleRef, toggle: toggleExpand, tooltip: tooltipExpand })) : null;
    return expandToggleNode ? (h("calcite-action-group", { class: CSS.actionGroupBottom }, expandToggleNode)) : null;
  }
  render() {
    const rtl = getElementDir(this.el) === "rtl";
    const containerClasses = {
      [CSS.container]: true,
      [CSS_UTILITY.rtl]: rtl
    };
    return (h(Host, null,
      h("div", { class: containerClasses },
        h("slot", null),
        this.renderBottomActionGroup())));
  }
  static get is() { return "calcite-action-pad"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-action-pad.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-action-pad.css"]
  }; }
  static get properties() { return {
    "expandDisabled": {
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
        "text": "When set to true, the expand-toggling behavior will be disabled."
      },
      "attribute": "expand-disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "expanded": {
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
        "text": "Indicates whether widget is expanded."
      },
      "attribute": "expanded",
      "reflect": true,
      "defaultValue": "false"
    },
    "layout": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Layout",
        "resolved": "\"horizontal\" | \"vertical\"",
        "references": {
          "Layout": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Indicates the horizontal or vertical layout of the component."
      },
      "attribute": "layout",
      "reflect": true,
      "defaultValue": "\"vertical\""
    },
    "tooltipExpand": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "HTMLCalciteTooltipElement",
        "resolved": "HTMLCalciteTooltipElement",
        "references": {
          "HTMLCalciteTooltipElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Used to set the tooltip for the expand toggle."
      }
    },
    "intlExpand": {
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
        "text": "Updates the label of the expand icon when the component is not expanded."
      },
      "attribute": "intl-expand",
      "reflect": false
    },
    "intlCollapse": {
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
        "text": "Updates the label of the collapse icon when the component is expanded."
      },
      "attribute": "intl-collapse",
      "reflect": false
    },
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Position",
        "resolved": "\"end\" | \"start\"",
        "references": {
          "Position": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Arranges the component depending on the elements 'dir' property."
      },
      "attribute": "position",
      "reflect": true
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
        "text": "Used to set the component's color scheme."
      },
      "attribute": "theme",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "calciteActionPadToggle",
      "name": "calciteActionPadToggle",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when expanded has been toggled."
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
        "signature": "(focusId?: \"expand-toggle\") => Promise<void>",
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
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "expandDisabled",
      "methodName": "expandHandler"
    }, {
      "propName": "expanded",
      "methodName": "expandedHandler"
    }]; }
}
