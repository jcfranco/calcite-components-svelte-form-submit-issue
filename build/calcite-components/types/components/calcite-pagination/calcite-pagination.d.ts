import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale, Theme } from "../interfaces";
export interface CalcitePaginationDetail {
  start: number;
  total: number;
  num: number;
}
export declare class CalcitePagination {
  /** number of items per page */
  num: number;
  /** index of item that should begin the page */
  start: number;
  /** total number of items */
  total: number;
  /** title of the next button */
  textLabelNext: string;
  /** title of the previous button */
  textLabelPrevious: string;
  /** specify the theme of accordion, defaults to light */
  theme: Theme;
  /** The scale of the pagination */
  scale: Scale;
  el: HTMLCalcitePaginationElement;
  /**
   * Emitted whenever the selected page changes.
   * @deprecated use calcitePaginationChange instead
   */
  calcitePaginationUpdate: EventEmitter<CalcitePaginationDetail>;
  /**
   * Emitted whenever the selected page changes.
   */
  calcitePaginationChange: EventEmitter<CalcitePaginationDetail>;
  /** Go to the next page of results */
  nextPage(): Promise<void>;
  /** Go to the previous page of results */
  previousPage(): Promise<void>;
  private getLastStart;
  private previousClicked;
  private nextClicked;
  private showLeftEllipsis;
  private showRightEllipsis;
  private emitUpdate;
  renderPages(): VNode[];
  renderPage(start: number): VNode;
  renderLeftEllipsis(iconScale: this["scale"]): VNode;
  renderRightEllipsis(iconScale: this["scale"]): VNode;
  render(): VNode;
}
