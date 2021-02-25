import { EventEmitter, VNode } from "../../stencil-public-runtime";
import Color from "color";
import { Scale, Theme } from "../interfaces";
export declare class CalciteColorHexInput {
  el: HTMLCalciteColorHexInputElement;
  connectedCallback(): void;
  /**
   * When false, empty color (null) will be allowed as a value. Otherwise, a color value is always enforced by the component.
   *
   * When true, clearing the input and blurring will restore the last valid color set. When false, it will set it to empty.
   */
  allowEmpty: boolean;
  /**
   * Label used for the hex input.
   */
  intlHex: string;
  /**
   * Label used for the hex input when there is no color selected.
   */
  intlNoColor: string;
  /**
   * The component's scale.
   */
  scale: Scale;
  /**
   * The component's theme.
   */
  theme: Theme;
  /**
   * The hex value.
   */
  value: string;
  handleValueChange(value: string, oldValue: string): void;
  /**
   * Emitted when the hex value changes.
   */
  calciteColorHexInputChange: EventEmitter;
  private onCalciteInputBlur;
  private onInputChange;
  private onInputKeyDown;
  private inputNode;
  /**
   * The last valid/selected color. Used as a fallback if an invalid hex code is entered.
   */
  internalColor: Color | null;
  render(): VNode;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  private storeInputRef;
  private formatForInternalInput;
  private nudgeRGBChannels;
}
