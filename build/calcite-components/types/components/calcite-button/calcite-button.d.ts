import { VNode } from "../../stencil-public-runtime";
import { ButtonAlignment, ButtonAppearance, ButtonColor } from "./interfaces";
import { FlipContext, Scale, Theme, Width } from "../interfaces";
export declare class CalciteButton {
  el: HTMLCalciteButtonElement;
  /** specify the appearance style of the button, defaults to solid. */
  appearance: ButtonAppearance;
  /** specify the color of the button, defaults to blue */
  color: ButtonColor;
  /** is the button disabled  */
  disabled?: boolean;
  /** optionally pass a href - used to determine if the component should render as a button or an anchor */
  href?: string;
  /** optionally pass an icon to display at the end of a button - accepts calcite ui icon names  */
  iconEnd?: string;
  /** flip the icon(s) in rtl */
  iconFlipRtl?: FlipContext;
  /** optionally pass an icon to display at the start of a button - accepts calcite ui icon names  */
  iconStart?: string;
  /** string to override English loading text */
  intlLoading?: string;
  /** optionally specify alignment of button elements. */
  alignment?: ButtonAlignment;
  /** optionally add a calcite-loader component to the button, disabling interaction.  */
  loading?: boolean;
  /** optionally add a round style to the button  */
  round?: boolean;
  /** specify the scale of the button, defaults to m */
  scale: Scale;
  /** is the button a child of a calcite-split-button */
  splitChild?: "primary" | "secondary" | false;
  /** Select theme (light or dark) */
  theme: Theme;
  /** specify the width of the button, defaults to auto */
  width: Width;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  render(): VNode;
  setFocus(): Promise<void>;
  /** watches for changing text content **/
  private observer;
  /** if button type is present, assign as prop */
  private type?;
  /** the rendered child element */
  private childEl?;
  /** the node type of the rendered child element */
  private childElType?;
  /** determine if there is slotted content for styling purposes */
  private hasContent?;
  private updateHasContent;
  private setupTextContentObserver;
  private getAttributes;
  private handleClick;
}
