import { Scale, Status, Theme } from "../interfaces";
import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { InputPlacement } from "./interfaces";
import { Position } from "../interfaces";
export declare class CalciteInput {
  el: HTMLCalciteInputElement;
  /** specify the alignment of the value of the input */
  alignment: Position;
  /** should the input autofocus */
  autofocus: boolean;
  /** optionally display a clear button that displays when field has a value
   * shows by default for search, time, date
   * will not display for type="textarea" */
  clearable?: boolean;
  /** is the input disabled  */
  disabled?: boolean;
  disabledWatcher(): void;
  /** when used as a boolean set to true, show a default recommended icon for certain
   * input types (tel, password, email, date, time, search). You can also pass a
   * calcite-ui-icon name to this prop to display a requested icon for any input type */
  icon: string | boolean;
  /** flip the icon in rtl */
  iconFlipRtl?: boolean;
  /** specify if the input is in loading state */
  loading: boolean;
  /** input max */
  max?: number;
  /** watcher to update number-to-string for max */
  maxWatcher(): void;
  /** input min */
  min?: number;
  /** watcher to update number-to-string for min */
  minWatcher(): void;
  /** specify the placement of the number buttons */
  numberButtonType?: InputPlacement;
  /** explicitly whitelist placeholder attribute */
  placeholder: string;
  /** optionally add prefix  */
  prefixText?: string;
  /** is the input required */
  required: boolean;
  /** specify the scale of the input, defaults to m */
  scale: Scale;
  /** specify the status of the input field, determines message and icons */
  status: Status;
  /** input step */
  step?: number | "any";
  stepWatcher(): void;
  /** optionally add suffix  **/
  suffixText?: string;
  /** specify the alignment of dropdown, defaults to left */
  theme: Theme;
  /** specify the input type */
  type: "color" | "date" | "datetime-local" | "email" | "file" | "image" | "month" | "number" | "password" | "search" | "tel" | "text" | "textarea" | "time" | "url" | "week";
  /** input value */
  value?: string;
  valueWatcher(): void;
  updateRequestedIcon(): void;
  connectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  get isTextarea(): boolean;
  get isClearable(): boolean;
  render(): VNode;
  keyDownHandler(e: KeyboardEvent): void;
  calciteInputFocus: EventEmitter;
  calciteInputBlur: EventEmitter;
  calciteInputInput: EventEmitter;
  /** focus the rendered child element */
  setFocus(): Promise<void>;
  /** keep track of the rendered child type */
  private childElType?;
  /** keep track of the rendered child type */
  private childEl?;
  /** determine if there is a slotted action for styling purposes */
  private slottedActionEl?;
  private minString?;
  private maxString?;
  private stepString?;
  /** the computed icon to render */
  private requestedIcon?;
  private inputInputHandler;
  private inputBlurHandler;
  private inputFocusHandler;
  private setDisabledAction;
  private getAttributes;
  private clearInputValue;
  private updateNumberValue;
}
