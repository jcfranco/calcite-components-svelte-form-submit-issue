import { EventEmitter, VNode } from "../../stencil-public-runtime";
import Color from "color";
import { ColorMode, ColorValue, InternalColor, ColorAppearance } from "./interfaces";
import { Scale, Theme } from "../interfaces";
import { Format } from "./utils";
export declare class CalciteColor {
  el: HTMLCalciteColorElement;
  /**
   * When false, empty color (null) will be allowed as a value. Otherwise, a color value is always enforced by the component.
   *
   * When true, clearing the input and blurring will restore the last valid color set. When false, it will set it to empty.
   */
  allowEmpty: boolean;
  /** specify the appearance - default (containing border), or minimal (no containing border) */
  appearance: ColorAppearance;
  /**
   * Internal prop for advanced use-cases.
   *
   * @internal
   */
  color: InternalColor | null;
  handleColorChange(color: Color | null, oldColor: Color | null): void;
  /**
   * The format of the value property.
   *
   * When "auto", the format will be inferred from `value` when set.
   */
  format: Format;
  handleFormatChange(format: CalciteColor["format"]): void;
  /** When true, hides the hex input */
  hideHex: boolean;
  /** When true, hides the RGB/HSV channel inputs */
  hideChannels: boolean;
  /** When true, hides the saved colors section */
  hideSaved: boolean;
  /** Label used for the blue channel */
  intlB: string;
  /** Label used for the blue channel description */
  intlBlue: string;
  /** Label used for the delete color button. */
  intlDeleteColor: string;
  /** Label used for the green channel */
  intlG: string;
  /** Label used for the green channel description */
  intlGreen: string;
  /** Label used for the hue channel */
  intlH: string;
  /** Label used for the HSV mode */
  intlHsv: string;
  /** Label used for the hex input */
  intlHex: string;
  /** Label used for the hue channel description */
  intlHue: string;
  /**
   * Label used for the hex input when there is no color selected.
   */
  intlNoColor: string;
  /** Label used for the red channel */
  intlR: string;
  /** Label used for the red channel description */
  intlRed: string;
  /** Label used for the RGB mode */
  intlRgb: string;
  /** Label used for the saturation channel */
  intlS: string;
  /** Label used for the saturation channel description */
  intlSaturation: string;
  /** Label used for the save color button. */
  intlSaveColor: string;
  /** Label used for the saved colors section */
  intlSaved: string;
  /** Label used for the value channel */
  intlV: string;
  /** Label used for the  */
  intlValue: string;
  /**
   * The scale of the color picker.
   */
  scale: Scale;
  handleScaleChange(scale?: Scale): void;
  /**
   * Storage ID for colors.
   */
  storageId: string;
  /**
   * The component's theme.
   */
  theme: Theme;
  /**
   * The color value.
   *
   * This value can be either a {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color|CSS string}
   * a RGB, HSL or HSV object.
   *
   * The type will be preserved as the color is updated.
   */
  value: ColorValue | null;
  handleValueChange(value: ColorValue | null, oldValue: ColorValue | null): void;
  private get baseColorFieldColor();
  private colorUpdateLocked;
  private fieldAndSliderRenderingContext;
  private hexInputNode;
  private hueThumbState;
  private previousColor;
  private mode;
  private shiftKeyChannelAdjustment;
  private sliderThumbState;
  colorFieldAndSliderInteractive: boolean;
  channelMode: ColorMode;
  channels: [number, number, number];
  dimensions: {
    slider: {
      height: number;
      width: number;
    };
    colorField: {
      height: number;
      width: number;
    };
    thumb: {
      radius: number;
    };
  };
  savedColors: string[];
  calciteColorChange: EventEmitter;
  private handleTabActivate;
  private handleHexInputChange;
  private handleSavedColorSelect;
  private handleChannelInput;
  private handleChannelKeyUpOrDown;
  private handleChannelChange;
  private handleSavedColorKeyDown;
  private handleColorFieldAndSliderMouseLeave;
  private handleColorFieldAndSliderMouseEnterOrMove;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  componentWillLoad(): void;
  render(): VNode;
  private storeHexInputRef;
  private renderChannelsTabTitle;
  private renderChannelsTab;
  private renderChannel;
  private internalColorSet;
  private toValue;
  private getSliderCapSpacing;
  private updateDimensions;
  private deleteColor;
  private saveColor;
  private drawColorFieldAndSlider;
  private drawColorField;
  private setCanvasContextSize;
  private initColorFieldAndSlider;
  private containsPoint;
  private drawActiveColorFieldColor;
  private drawThumb;
  private drawActiveHueSliderColor;
  private drawHueSlider;
  private updateColorFromChannels;
  private updateChannelsFromColor;
  private toChannels;
}
