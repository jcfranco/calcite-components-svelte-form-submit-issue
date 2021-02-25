import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { TreeItemSelectDetail } from "../calcite-tree-item/interfaces";
import { TreeSelectDetail, TreeSelectionMode } from "./interfaces";
import { Scale, Theme } from "../interfaces";
export declare class CalciteTree {
  el: HTMLCalciteTreeElement;
  /** Display indentation guide lines */
  lines: boolean;
  /** Select theme (light or dark) */
  theme: Theme;
  /** Specify the scale of the tree, defaults to m */
  scale: Extract<"s" | "m", Scale>;
  /** Customize how tree selection works (single, multi, children, multi-children) */
  selectionMode: TreeSelectionMode;
  componentWillRender(): void;
  render(): VNode;
  onFocus(): void;
  onClick(e: CustomEvent<TreeItemSelectDetail>): void;
  calciteTreeSelect: EventEmitter<TreeSelectDetail>;
  /** @internal If this tree is nested within another tree, set to false */
  root: boolean;
}
