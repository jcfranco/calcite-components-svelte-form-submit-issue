import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Position, Theme } from "../interfaces";
/**
 * @slot bottom-actions - A slot for adding `calcite-action`s that will appear at the bottom of the action bar, above the collapse/expand button.
 * @slot - A slot for adding `calcite-action`s that will appear at the top of the action bar.
 */
export declare class CalciteActionBar {
  /**
   * When set to true, the expand-toggling behavior will be disabled.
   */
  expandDisabled: boolean;
  expandHandler(expandDisabled: boolean): void;
  /**
   * Indicates whether widget is expanded.
   */
  expanded: boolean;
  expandedHandler(expanded: boolean): void;
  /**
   * Used to set the tooltip for the expand toggle.
   */
  tooltipExpand?: HTMLCalciteTooltipElement;
  /**
   * Updates the label of the expand icon when the component is not expanded.
   */
  intlExpand?: string;
  /**
   * Updates the label of the collapse icon when the component is expanded.
   */
  intlCollapse?: string;
  /**
   * Arranges the component depending on the elements 'dir' property.
   */
  position: Position;
  /**
   * Used to set the component's color scheme.
   */
  theme: Theme;
  /**
   * Emitted when expanded has been toggled.
   */
  calciteActionBarToggle: EventEmitter;
  el: HTMLCalciteActionBarElement;
  observer: MutationObserver;
  expandToggleEl: HTMLCalciteActionElement;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  setFocus(focusId?: "expand-toggle"): Promise<void>;
  toggleExpand: () => void;
  setExpandToggleRef: (el: HTMLCalciteActionElement) => void;
  renderBottomActionGroup(): VNode;
  render(): VNode;
}
