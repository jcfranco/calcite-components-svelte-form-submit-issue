import { VNode } from "../../stencil-public-runtime";
import { Appearance, Scale, Theme } from "../interfaces";
import { FabColor } from "./interfaces";
export declare class CalciteFab {
  /**
   * Used to set the button's appearance. Default is outline.
   */
  appearance: Appearance;
  /**
   * Used to set the button's color. Default is light.
   */
  color: FabColor;
  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  disabled: boolean;
  /**
   * The name of the icon to display. The value of this property must match the icon name from https://esri.github.io/calcite-ui-icons/.
   */
  icon?: string;
  /**
   * Label of the FAB, exposed on hover. If no label is provided, the label inherits what's provided for the `text` prop.
   */
  label?: string;
  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  loading: boolean;
  /**
   * Specifies the size of the fab.
   */
  scale: Scale;
  /**
   * Text that accompanies the FAB icon.
   */
  text?: string;
  /**
   * Indicates whether the text is displayed.
   */
  textEnabled: boolean;
  /**
   * Used to set the component's color scheme.
   */
  theme: Theme;
  el: HTMLCalciteFabElement;
  private buttonEl;
  setFocus(): Promise<void>;
  render(): VNode;
}
