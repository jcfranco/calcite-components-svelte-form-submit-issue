import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { FocusRequest } from "./interfaces";
import { Alignment, Scale, Status, Theme } from "../interfaces";
export declare class CalciteLabel {
  el: HTMLCalciteLabelElement;
  /** specify the text alignment of the label */
  alignment: Alignment;
  /** specify the status of the label and any child input / input messages */
  status: Status;
  /** The id of the input associated with the label */
  for: string;
  /** specify the scale of the input, defaults to m */
  scale: Scale;
  /** specify theme of the label and its any child input / input messages */
  theme: Theme;
  /** is the wrapped element positioned inline with the label slotted text */
  layout: "inline" | "inline-space-between" | "default";
  /** eliminates any space around the label */
  disableSpacing?: boolean;
  /** is the label disabled  */
  disabled?: boolean;
  disabledWatcher(): void;
  calciteLabelFocus: EventEmitter<FocusRequest>;
  onClick(event: MouseEvent): void;
  private getAttributes;
  private handleCalciteHtmlForClicks;
  componentDidLoad(): void;
  render(): VNode;
  private labelEl;
  private setDisabledControls;
}
