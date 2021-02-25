import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale, Theme } from "../interfaces";
import { ModalBackgroundColor } from "./interfaces";
export declare class CalciteModal {
  el: HTMLCalciteModalElement;
  /** Add the active attribute to open the modal */
  active?: boolean;
  /** Optionally pass a function to run before close */
  beforeClose: (el: HTMLElement) => Promise<void>;
  /** Disables the display a close button within the Modal */
  disableCloseButton?: boolean;
  /** Aria label for the close button */
  intlClose: string;
  /** Prevent the modal from taking up the entire screen on mobile */
  docked: boolean;
  /** Specify an element to focus when the modal is first opened */
  firstFocus?: HTMLElement;
  /** Flag to disable the default close on escape behavior */
  disableEscape?: boolean;
  /** specify the scale of modal, defaults to m */
  scale: Scale;
  /** Set the width of the modal. Can use stock sizes or pass a number (in pixels) */
  width: Scale | number;
  /** Set the modal to always be fullscreen (overrides width) */
  fullscreen: boolean;
  /** Adds a color bar at the top for visual impact,
   * Use color to add importance to destructive/workflow dialogs. */
  color?: "red" | "blue";
  /** Select theme (light or dark) */
  theme: Theme;
  /** Background color of modal content */
  backgroundColor: ModalBackgroundColor;
  /** Turn off spacing around the content area slot */
  noPadding?: boolean;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  render(): VNode;
  renderFooter(): VNode;
  renderCloseButton(): VNode;
  renderStyle(): VNode;
  isActive: boolean;
  previousActiveElement: HTMLElement;
  closeButtonEl: HTMLButtonElement;
  modalContent: HTMLDivElement;
  handleEscape(e: KeyboardEvent): void;
  /** Fired when the modal begins the open animation */
  calciteModalOpen: EventEmitter;
  /** Fired when the modal begins the close animation */
  calciteModalClose: EventEmitter;
  /**
   * Focus first interactive element
   * @deprecated use `setFocus` instead.
   */
  focusElement(el?: HTMLElement): Promise<void>;
  /**
   * Sets focus on the component.
   *
   * By default, will try to focus on any focusable content. If there is none, it will focus on the close button.
   * If you want to focus on the close button, you can use the `close-button` focus ID.
   */
  setFocus(focusId?: "close-button"): Promise<void>;
  /** Set the scroll top of the modal content */
  scrollContent(top?: number, left?: number): Promise<void>;
  toggleModal(value: boolean, oldValue: boolean): Promise<void>;
  /** Open the modal */
  private open;
  /** Close the modal, first running the `beforeClose` method */
  close: () => Promise<void>;
  focusFirstElement: () => void;
  focusLastElement: () => void;
  private removeOverflowHiddenClass;
}
