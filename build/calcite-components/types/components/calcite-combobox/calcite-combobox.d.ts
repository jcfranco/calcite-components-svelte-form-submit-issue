/// <reference types="lodash" />
import { Event, EventEmitter, VNode } from "../../stencil-public-runtime";
import { StrictModifiers } from "@popperjs/core";
import { Scale, Theme } from "../interfaces";
import { ComboboxSelectionMode } from "./interfaces";
interface ItemData {
  label: string;
  value: string;
}
export declare class CalciteCombobox {
  el: HTMLCalciteComboboxElement;
  /** Open and close combobox */
  active: boolean;
  activeHandler(): void;
  /** Disable combobox input */
  disabled: boolean;
  /** Aria label for combobox (required) */
  label: string;
  /** Placeholder text for input */
  placeholder?: string;
  /** Specify the maximum number of combobox items (including nested children) to display before showing the scroller */
  maxItems: number;
  /** Allow entry of custom values which are not in the original set of items */
  allowCustomValues: boolean;
  /** specify the selection mode - multi (allow any number of selected items), single (only one selction), defaults to multi */
  selectionMode: ComboboxSelectionMode;
  /** Specify the scale of the combobox, defaults to m */
  scale: Scale;
  /** Select theme (light or dark) */
  theme: Theme;
  documentClickHandler(event: Event): void;
  calciteComboboxItemChangeHandler(event: CustomEvent<HTMLCalciteComboboxItemElement>): void;
  calciteChipDismissHandler(event: CustomEvent<HTMLCalciteChipElement>): void;
  keydownHandler(event: KeyboardEvent): void;
  reposition(): Promise<void>;
  setFocus(): Promise<void>;
  /** Called when the selected items set changes */
  calciteLookupChange: EventEmitter<HTMLCalciteComboboxItemElement[]>;
  calciteComboboxChipDismiss: EventEmitter;
  connectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  disconnectedCallback(): void;
  items: HTMLCalciteComboboxItemElement[];
  selectedItems: HTMLCalciteComboboxItemElement[];
  selectedItem: HTMLCalciteComboboxItemElement;
  visibleItems: HTMLCalciteComboboxItemElement[];
  needsIcon: boolean;
  activeItemIndex: number;
  activeChipIndex: number;
  activeDescendant: string;
  text: string;
  /** when search text is cleared, reset active to  */
  textHandler(): void;
  textInput: HTMLInputElement;
  data: ItemData[];
  observer: MutationObserver;
  private guid;
  /** specifies the item wrapper height; it is updated when maxItems is > 0  **/
  private maxScrollerHeight;
  private inputHeight;
  private popper;
  private menuEl;
  private referenceEl;
  private listContainerEl;
  setInactiveIfNotContained: (event: Event) => void;
  setMenuEl: (el: HTMLDivElement) => void;
  setListContainerEl: (el: HTMLDivElement) => void;
  setReferenceEl: (el: HTMLDivElement) => void;
  getModifiers(): Partial<StrictModifiers>[];
  createPopper(): void;
  destroyPopper(): void;
  private getMaxScrollerHeight;
  private calculateSingleItemHeight;
  inputHandler: (event: Event) => void;
  filterItems: import("lodash").DebouncedFunc<(value: string) => void>;
  toggleSelection(item: HTMLCalciteComboboxItemElement, value?: boolean): void;
  getVisibleItems(): HTMLCalciteComboboxItemElement[];
  getSelectedItems(): HTMLCalciteComboboxItemElement[];
  updateItems: () => void;
  getData(): ItemData[];
  getNeedsIcon(): boolean;
  resetText(): void;
  getItems(): HTMLCalciteComboboxItemElement[];
  addCustomChip(value: string): void;
  removeActiveChip(): void;
  removeLastChip(): void;
  previousChip(): void;
  nextChip(): void;
  focusChip(): void;
  shiftActiveItemIndex(delta: number): void;
  updateActiveItemIndex(index: number): void;
  comboboxFocusHandler: () => void;
  comboboxBlurHandler: (event: FocusEvent) => void;
  renderChips(): VNode[];
  renderInput(): VNode;
  renderListBoxOptions(): VNode[];
  renderPopperContainer(): VNode;
  renderIconStart(): VNode;
  renderIconEnd(): VNode;
  render(): VNode;
}
export {};
