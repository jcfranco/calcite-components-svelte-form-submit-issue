import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Layout, Position, Theme } from "../interfaces";
/**
 * @slot - A slot for adding `calcite-action`s to the action pad.
 */
export declare class CalciteActionPad {
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
   * Indicates the horizontal or vertical layout of the component.
   */
  layout: Layout;
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
  calciteActionPadToggle: EventEmitter;
  el: HTMLCalciteActionPadElement;
  expandToggleEl: HTMLCalciteActionElement;
  componentWillLoad(): void;
  setFocus(focusId?: "expand-toggle"): Promise<void>;
  toggleExpand: () => void;
  setExpandToggleRef: (el: HTMLCalciteActionElement) => void;
  renderBottomActionGroup(): VNode;
  render(): VNode;
}
