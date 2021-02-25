import { Component, Element, Event, h, Host, Listen, Method, Prop, State, Watch } from "@stencil/core";
import { focusElement, getElementDir } from "../../utils/dom";
import { getKey } from "../../utils/key";
import { queryShadowRoot } from "@a11y/focus-trap/shadow";
import { isFocusable, isHidden } from "@a11y/focus-trap/focusable";
function isCalciteFocusable(el) {
  return typeof el.setFocus === "function" || isFocusable(el);
}
function getFocusableElements(el) {
  return queryShadowRoot(el, isHidden, isCalciteFocusable);
}
export class CalciteModal {
  constructor() {
    /** Optionally pass a function to run before close */
    this.beforeClose = () => Promise.resolve();
    /** Aria label for the close button */
    this.intlClose = "Close";
    /** specify the scale of modal, defaults to m */
    this.scale = "m";
    /** Set the width of the modal. Can use stock sizes or pass a number (in pixels) */
    this.width = "m";
    /** Background color of modal content */
    this.backgroundColor = "white";
    /** Close the modal, first running the `beforeClose` method */
    this.close = () => {
      return this.beforeClose(this.el).then(() => {
        this.active = false;
        this.isActive = false;
        focusElement(this.previousActiveElement);
        this.removeOverflowHiddenClass();
        setTimeout(() => this.calciteModalClose.emit(), 300);
      });
    };
    this.focusFirstElement = () => {
      focusElement(this.closeButtonEl);
    };
    this.focusLastElement = () => {
      const focusableElements = getFocusableElements(this.el).filter((el) => !el.getAttribute("data-focus-fence"));
      if (focusableElements.length > 0) {
        focusElement(focusableElements[focusableElements.length - 1]);
      }
      else {
        focusElement(this.closeButtonEl);
      }
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    // when modal initially renders, if active was set we need to open as watcher doesn't fire
    if (this.active) {
      this.open();
    }
  }
  disconnectedCallback() {
    this.removeOverflowHiddenClass();
  }
  render() {
    const dir = getElementDir(this.el);
    return (h(Host, { "aria-modal": "true", dir: dir, "is-active": this.isActive, role: "dialog" },
      h("calcite-scrim", { class: "scrim", theme: "dark" }),
      this.renderStyle(),
      h("div", { class: "modal" },
        h("div", { "data-focus-fence": true, onFocus: this.focusLastElement, tabindex: "0" }),
        h("div", { class: "header" },
          this.renderCloseButton(),
          h("header", { class: "title" },
            h("slot", { name: "header" }))),
        h("div", { class: {
            content: true,
            "content--spaced": !this.noPadding
          }, ref: (el) => (this.modalContent = el) },
          h("slot", { name: "content" })),
        this.renderFooter(),
        h("div", { "data-focus-fence": true, onFocus: this.focusFirstElement, tabindex: "0" }))));
  }
  renderFooter() {
    return this.el.querySelector("[slot=back], [slot=secondary], [slot=primary]") ? (h("div", { class: "footer" },
      h("span", { class: "back" },
        h("slot", { name: "back" })),
      h("span", { class: "secondary" },
        h("slot", { name: "secondary" })),
      h("span", { class: "primary" },
        h("slot", { name: "primary" })))) : null;
  }
  renderCloseButton() {
    return !this.disableCloseButton ? (h("button", { "aria-label": this.intlClose, class: "close", onClick: this.close, ref: (el) => (this.closeButtonEl = el), title: this.intlClose },
      h("calcite-icon", { icon: "x", scale: "l" }))) : null;
  }
  renderStyle() {
    const hasCustomWidth = !isNaN(parseInt(`${this.width}`));
    return hasCustomWidth ? (h("style", null, `
        .modal {
          max-width: ${this.width}px;
        }
        @media screen and (max-width: ${this.width}px) {
          .modal {
            height: 100%;
            max-height: 100%;
            width: 100%;
            max-width: 100%;
            margin: 0;
            border-radius: 0;
          }
          .content {
            flex: 1 1 auto;
            max-height: unset;
          }
        }
      `)) : null;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleEscape(e) {
    if (this.active && !this.disableEscape && getKey(e.key) === "Escape") {
      this.close();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Focus first interactive element
   * @deprecated use `setFocus` instead.
   */
  async focusElement(el) {
    if (el) {
      el.focus();
    }
    return this.setFocus();
  }
  /**
   * Sets focus on the component.
   *
   * By default, will try to focus on any focusable content. If there is none, it will focus on the close button.
   * If you want to focus on the close button, you can use the `close-button` focus ID.
   */
  async setFocus(focusId) {
    const closeButton = this.closeButtonEl;
    return focusElement(focusId === "close-button" ? closeButton : getFocusableElements(this.el)[0] || closeButton);
  }
  /** Set the scroll top of the modal content */
  async scrollContent(top = 0, left = 0) {
    if (this.modalContent) {
      if (this.modalContent.scrollTo) {
        this.modalContent.scrollTo({ top, left, behavior: "smooth" });
      }
      else {
        this.modalContent.scrollTop = top;
        this.modalContent.scrollLeft = left;
      }
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  async toggleModal(value, oldValue) {
    if (value !== oldValue) {
      if (value) {
        this.open();
      }
      else if (!value) {
        this.close();
      }
    }
  }
  /** Open the modal */
  open() {
    this.previousActiveElement = document.activeElement;
    this.isActive = true;
    // wait for the modal to open, then handle focus.
    setTimeout(() => {
      this.focusElement(this.firstFocus);
      this.calciteModalOpen.emit();
    }, 300);
    document.documentElement.classList.add("overflow-hidden");
  }
  removeOverflowHiddenClass() {
    document.documentElement.classList.remove("overflow-hidden");
  }
  static get is() { return "calcite-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-modal.css"]
  }; }
  static get properties() { return {
    "active": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Add the active attribute to open the modal"
      },
      "attribute": "active",
      "reflect": false
    },
    "beforeClose": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(el: HTMLElement) => Promise<void>",
        "resolved": "(el: HTMLElement) => Promise<void>",
        "references": {
          "HTMLElement": {
            "location": "global"
          },
          "Promise": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Optionally pass a function to run before close"
      },
      "defaultValue": "() => Promise.resolve()"
    },
    "disableCloseButton": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Disables the display a close button within the Modal"
      },
      "attribute": "disable-close-button",
      "reflect": false
    },
    "intlClose": {
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
        "text": "Aria label for the close button"
      },
      "attribute": "intl-close",
      "reflect": false,
      "defaultValue": "\"Close\""
    },
    "docked": {
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
        "text": "Prevent the modal from taking up the entire screen on mobile"
      },
      "attribute": "docked",
      "reflect": true
    },
    "firstFocus": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "HTMLElement",
        "resolved": "HTMLElement",
        "references": {
          "HTMLElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Specify an element to focus when the modal is first opened"
      }
    },
    "disableEscape": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Flag to disable the default close on escape behavior"
      },
      "attribute": "disable-escape",
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
        "text": "specify the scale of modal, defaults to m"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "width": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "Scale | number",
        "resolved": "\"l\" | \"m\" | \"s\" | number",
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
        "text": "Set the width of the modal. Can use stock sizes or pass a number (in pixels)"
      },
      "attribute": "width",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "fullscreen": {
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
        "text": "Set the modal to always be fullscreen (overrides width)"
      },
      "attribute": "fullscreen",
      "reflect": true
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"red\" | \"blue\"",
        "resolved": "\"blue\" | \"red\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Adds a color bar at the top for visual impact,\nUse color to add importance to destructive/workflow dialogs."
      },
      "attribute": "color",
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
        "text": "Select theme (light or dark)"
      },
      "attribute": "theme",
      "reflect": true
    },
    "backgroundColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ModalBackgroundColor",
        "resolved": "\"grey\" | \"white\"",
        "references": {
          "ModalBackgroundColor": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Background color of modal content"
      },
      "attribute": "background-color",
      "reflect": true,
      "defaultValue": "\"white\""
    },
    "noPadding": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Turn off spacing around the content area slot"
      },
      "attribute": "no-padding",
      "reflect": false
    }
  }; }
  static get states() { return {
    "isActive": {}
  }; }
  static get events() { return [{
      "method": "calciteModalOpen",
      "name": "calciteModalOpen",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fired when the modal begins the open animation"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteModalClose",
      "name": "calciteModalClose",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fired when the modal begins the close animation"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "focusElement": {
      "complexType": {
        "signature": "(el?: HTMLElement) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLElement": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Focus first interactive element",
        "tags": [{
            "name": "deprecated",
            "text": "use `setFocus` instead."
          }]
      }
    },
    "setFocus": {
      "complexType": {
        "signature": "(focusId?: \"close-button\") => Promise<void>",
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
        "text": "Sets focus on the component.\n\nBy default, will try to focus on any focusable content. If there is none, it will focus on the close button.\nIf you want to focus on the close button, you can use the `close-button` focus ID.",
        "tags": []
      }
    },
    "scrollContent": {
      "complexType": {
        "signature": "(top?: number, left?: number) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
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
        "text": "Set the scroll top of the modal content",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "active",
      "methodName": "toggleModal"
    }]; }
  static get listeners() { return [{
      "name": "keyup",
      "method": "handleEscape",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
