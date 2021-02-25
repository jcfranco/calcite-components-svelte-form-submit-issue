import { Placement, Instance as Popper, StrictModifiers } from "@popperjs/core";
declare type PlacementRtl = "leading-start" | "leading" | "leading-end" | "trailing-end" | "trailing" | "trailing-start";
export declare type PopperPlacement = Placement | PlacementRtl;
export declare const CSS: {
  animation: string;
  animationActive: string;
};
export declare function getPlacement(el: HTMLElement, placement: PopperPlacement): Placement;
export declare function createPopper({ referenceEl, el, placement, modifiers }: {
  el: HTMLElement;
  modifiers: Partial<StrictModifiers>[];
  placement: PopperPlacement;
  referenceEl: HTMLElement;
}): Popper | null;
export declare function updatePopper({ el, modifiers, placement: PopperPlacement, popper }: {
  el: HTMLElement;
  modifiers: Partial<StrictModifiers>[];
  popper: Popper;
  placement: PopperPlacement;
}): void;
export declare function hypotenuse(sideA: number, sideB: number): number;
export declare const defaultOffsetDistance: number;
export {};
