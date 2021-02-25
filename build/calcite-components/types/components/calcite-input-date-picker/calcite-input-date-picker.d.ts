import { VNode, EventEmitter } from "../../stencil-public-runtime";
import { StrictModifiers } from "@popperjs/core";
import { DateRangeChange } from "../calcite-date-picker/interfaces";
export declare class CalciteInputDatePicker {
  el: HTMLCalciteInputDatePickerElement;
  /** Selected date */
  value?: string;
  /** Selected date as full date object*/
  valueAsDate?: Date;
  /** Selected start date as full date object*/
  startAsDate?: Date;
  /** Selected end date as full date object*/
  endAsDate?: Date;
  /** Earliest allowed date ("yyyy-mm-dd") */
  min?: string;
  /** Latest allowed date ("yyyy-mm-dd") */
  max?: string;
  /** Expand or collapse when calendar does not have input */
  active: boolean;
  activeHandler(): void;
  /** Localized string for "previous month" (used for aria label) */
  intlPrevMonth?: string;
  /** Localized string for "next month" (used for aria label) */
  intlNextMonth?: string;
  /** BCP 47 language tag for desired language and country format */
  locale?: string;
  /** specify the scale of the date picker */
  scale: "s" | "m" | "l";
  /** Range mode activation */
  range?: boolean;
  /** Selected start date */
  start?: string;
  /** Selected end date */
  end?: string;
  /** Disables the default behaviour on the third click of narrowing or extending the range and instead starts a new range. */
  proximitySelectionDisabled?: boolean;
  /** Layout */
  layout: "horizontal" | "vertical";
  /**
   * Blur doesn't fire properly when there is no shadow dom (Edge/IE11)
   * Check if the focused element is inside the date picker, if not close
   */
  focusInHandler(e: FocusEvent): void;
  calciteDaySelectHandler(): void;
  /**
   * Trigger calcite date change when a user changes the date.
   */
  calciteDatePickerChange: EventEmitter<Date>;
  /**
   * Trigger calcite date change when a user changes the date range.
   */
  calciteDatePickerRangeChange: EventEmitter<DateRangeChange>;
  reposition(): Promise<void>;
  connectedCallback(): void;
  disconnectedCallback(): void;
  render(): VNode;
  focusedInput: "start" | "end";
  private localeData;
  private endInput;
  private hasShadow;
  private popper;
  private menuEl;
  private referenceEl;
  private startWrapper;
  private endWrapper;
  setReferenceEl(): void;
  setEndInput: (el: HTMLCalciteInputElement) => void;
  deactivate: () => void;
  keyUpHandler: (e: KeyboardEvent) => void;
  inputBlur: (e: CustomEvent<any>) => void;
  startInputFocus: () => void;
  endInputFocus: () => void;
  inputInput: (e: CustomEvent<any>) => void;
  setMenuEl: (el: HTMLDivElement) => void;
  setStartWrapper: (el: HTMLDivElement) => void;
  setEndWrapper: (el: HTMLDivElement) => void;
  getModifiers(): Partial<StrictModifiers>[];
  createPopper(): void;
  destroyPopper(): void;
  valueWatcher(value: string): void;
  startWatcher(start: string): void;
  endWatcher(end: string): void;
  private loadLocaleData;
  /**
   * Update date instance of start if valid
   */
  private setStartAsDate;
  /**
   * Update date instance of end if valid
   */
  private setEndAsDate;
  /**
   * If inputted string is a valid date, update value/active
   */
  private input;
  /**
   * Clean up invalid date from input on blur
   */
  private blur;
  /**
   * Event handler for when the selected date changes
   */
  handleDateChange: (event: CustomEvent<Date>) => void;
  private handleDateRangeChange;
  /**
   * Find a date from input string
   * return false if date is invalid, or out of range
   */
  private getDateFromInput;
}
