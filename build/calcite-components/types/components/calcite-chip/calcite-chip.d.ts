import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ChipColor } from "./interfaces";
import { Appearance, Scale, Theme } from "../interfaces";
export declare class CalciteChip {
  /** specify the appearance style of the button, defaults to solid. */
  appearance: Extract<"solid" | "clear", Appearance>;
  /** specify the color of the button, defaults to blue */
  color: ChipColor;
  /** Optionally show a button the user can click to dismiss the chip */
  dismissible?: boolean;
  /** Aria label for the "x" button */
  dismissLabel?: string;
  /** optionally pass an icon to display - accepts Calcite UI icon names  */
  icon?: string;
  /** flip the icon in rtl */
  iconFlipRtl?: boolean;
  /** specify the scale of the chip, defaults to m */
  scale: Scale;
  /** Select theme (light or dark) */
  theme: Theme;
  value: string;
  el: HTMLCalciteChipElement;
  setFocus(): Promise<void>;
  /** Emitted when the dismiss button is clicked */
  calciteChipDismiss: EventEmitter;
  closeClickHandler: (event: MouseEvent) => void;
  private closeButton;
  private guid;
  render(): VNode;
}
