import { ColorValue, RGB } from "./interfaces";
import Color from "color";
export declare function rgbToHex(color: RGB): string;
export declare const hexChar: RegExp;
export declare function isValidHex(hex: string): boolean;
export declare function isShorthandHex(hex: string): boolean;
export declare function isLonghandHex(hex: string): boolean;
export declare function normalizeHex(hex: string): string;
export declare function hexToRGB(hex: string): RGB;
declare type Enumify<T> = T[keyof T];
export declare const CSSColorMode: {
  HEX: "hex";
  HEXA: "hexa";
  RGB_CSS: "rgb-css";
  RGBA_CSS: "rgba-css";
  HSL_CSS: "hsl-css";
  HSLA_CSS: "hsla-css";
};
declare type CSSColorMode = Enumify<typeof CSSColorMode>;
export declare const ObjectColorMode: {
  RGB: "rgb";
  RGBA: "rgba";
  HSL: "hsl";
  HSLA: "hsla";
  HSV: "hsv";
  HSVA: "hsva";
};
declare type ObjectColorMode = Enumify<typeof ObjectColorMode>;
export declare type SupportedMode = CSSColorMode | ObjectColorMode;
export declare type Format = "auto" | SupportedMode;
export declare function parseMode(colorValue: ColorValue): SupportedMode | null;
export declare function colorEqual(value1: Color | null, value2: Color | null): boolean;
export {};
