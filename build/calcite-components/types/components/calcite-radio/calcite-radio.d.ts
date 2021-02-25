import { Scale, Theme } from "../interfaces";
export declare class CalciteRadio {
  /** The checked state of the radio. */
  checked: boolean;
  /** The disabled state of the radio. */
  disabled?: boolean;
  /** The focused state of the radio. */
  focused: boolean;
  /** The radio's hidden status. */
  hidden: boolean;
  /** The hovered state of the radio. */
  hovered: boolean;
  /** The scale (size) of the radio. */
  scale: Scale;
  /** The color theme of the radio, */
  theme: Theme;
  render(): any;
}
