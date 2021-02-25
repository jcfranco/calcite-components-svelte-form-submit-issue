import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { DateRangeChange } from "./interfaces";
export declare class CalciteDatePicker {
  el: HTMLCalciteDatePickerElement;
  /** Active range */
  activeRange?: "start" | "end";
  /** Selected date */
  value?: string;
  /** Selected date as full date object*/
  valueAsDate?: Date;
  handleValueAsDate(date: Date): void;
  /** Selected start date as full date object*/
  startAsDate?: Date;
  /** Selected end date as full date object*/
  endAsDate?: Date;
  handleRangeChange(): void;
  /** Earliest allowed date ("yyyy-mm-dd") */
  min?: string;
  /** Latest allowed date ("yyyy-mm-dd") */
  max?: string;
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
  /**
   * Blur doesn't fire properly when there is no shadow dom (ege/IE11)
   * Check if the focused element is inside the date picker, if not close
   */
  focusInHandler(e: FocusEvent): void;
  /**
   * Trigger calcite date change when a user changes the date.
   */
  calciteDatePickerChange: EventEmitter<Date>;
  /**
   * Trigger calcite date change when a user changes the date range.
   */
  calciteDatePickerRangeChange: EventEmitter<DateRangeChange>;
  /**
   * Active date.
   */
  activeDate: Date;
  /**
   * Active start date.
   */
  activeStartDate: Date;
  /**
   * Active end date.
   */
  activeEndDate: Date;
  connectedCallback(): void;
  render(): VNode;
  private localeData;
  private hoverRange;
  private hasShadow;
  private mostRecentRangeValue?;
  keyUpHandler: (e: KeyboardEvent) => void;
  valueWatcher(value: string): void;
  startWatcher(start: string): void;
  endWatcher(end: string): void;
  private loadLocaleData;
  monthHeaderSelectChange: (e: CustomEvent<Date>) => void;
  monthActiveDateChange: (e: CustomEvent<Date>) => void;
  monthHoverChange: (e: CustomEvent<Date>) => void;
  monthMouseOutChange: () => void;
  /**
   * Render calcite-date-picker-month-header and calcite-date-picker-month
   */
  private renderCalendar;
  /**
   * Update date instance of start if valid
   */
  private setStartAsDate;
  /**
   * Update date instance of end if valid
   */
  private setEndAsDate;
  /**
   * Reset active date and close
   */
  reset: () => void;
  /**
   * Event handler for when the selected date changes
   */
  private monthDateChange;
  /**
   * Get an active date using the value, or current date as default
   */
  private getActiveDate;
  private getActiveStartDate;
  private getActiveEndDate;
}
