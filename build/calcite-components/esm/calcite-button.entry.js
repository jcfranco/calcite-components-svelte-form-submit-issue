import { r as registerInstance, h, H as Host, g as getElement } from './index-527d390a.js';
import { g as getElementDir } from './dom-d9ba1da4.js';

const CSS = {
  buttonLoader: "calcite-button--loader",
  content: "content",
  contentSlotted: "content--slotted",
  icon: "icon",
  iconStart: "icon--start",
  iconEnd: "icon--end"
};
const TEXT = {
  loading: "Loading"
};

const calciteButtonCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host{display:inline-block;width:auto;vertical-align:middle;--calcite-button-dark:#404040;--calcite-button-dark-hover:#4a4a4a;--calcite-button-dark-press:#353535;--calcite-button-transparent-hover:rgba(0, 0, 0, 0.05);--calcite-button-transparent-press:rgba(0, 0, 0, 0.08)}:host([theme=dark]){--calcite-button-dark:#404040;--calcite-button-dark-hover:#353535;--calcite-button-dark-press:#4a4a4a;--calcite-button-transparent-hover:rgba(255, 255, 255, 0.05);--calcite-button-transparent-press:rgba(255, 255, 255, 0.08)}:host([round]){border-radius:50px}:host([round]) a,:host([round]) button{border-radius:50px}:host button,:host a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus,:host a:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host button,:host a{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0.375rem 1rem;text-decoration:none;width:100%;height:100%;border-radius:0;border:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;font-family:inherit;-webkit-appearance:none;cursor:pointer;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out, -webkit-box-shadow 0.15s ease-in-out}:host button:hover,:host a:hover{text-decoration:none}.content{display:-ms-flexbox;display:flex;-ms-flex-preferred-size:auto;flex-basis:auto;margin-left:0.5rem;margin-right:0.5rem}:host(:not([icon-start])) .content{margin-left:unset}:host(:not([icon-end])) .content{margin-right:unset}:host([icon-start][dir=rtl]:not([icon-end])) .content{margin-left:unset;margin-right:0.5rem}:host([icon-end][dir=rtl]:not([icon-start])) .content{margin-right:unset;margin-left:0.5rem}:host([width=auto]){width:auto}:host([width=half]){width:50%}:host([width=full]){width:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{-ms-flex-pack:center;justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{-ms-flex-pack:start;justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{-ms-flex-pack:end;justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{-ms-flex-pack:justify;justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-right:auto}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-left:auto}:host([dir=rtl][alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-right:unset;margin-left:auto}:host([dir=rtl][alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-left:unset;margin-right:auto}:host([alignment=center]) a:not(.content--slotted) .icon--start+.icon--end,:host([alignment=center]) button:not(.content--slotted) .icon--start+.icon--end{margin-left:0.5rem}:host([dir=rtl][alignment=center]) a:not(.content--slotted) .icon--start+.icon--end,:host([dir=rtl][alignment=center]) button:not(.content--slotted) .icon--start+.icon--end{margin-left:unset;margin-right:0.5rem}.icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;line-height:inherit;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([disabled]){pointer-events:none}:host([disabled]) button,:host([disabled]) a{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}.calcite-button--loader{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.calcite-button--loader calcite-loader{margin:0}:host([loading]) button,:host([loading]) a{color:transparent !important;pointer-events:none}:host([loading]) button .calcite-button--icon,:host([loading]) a .calcite-button--icon{opacity:0}:host([appearance=solid][color=blue]) button,:host([appearance=solid][color=blue]) a{color:var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-brand);border:1px solid transparent}:host([appearance=solid][color=blue]) button:hover,:host([appearance=solid][color=blue]) button:focus,:host([appearance=solid][color=blue]) a:hover,:host([appearance=solid][color=blue]) a:focus{background-color:var(--calcite-ui-brand-hover)}:host([appearance=solid][color=blue]) button:active,:host([appearance=solid][color=blue]) a:active{background-color:var(--calcite-ui-brand)}:host([appearance=solid][color=blue]) button .calcite-button--icon,:host([appearance=solid][color=blue]) a .calcite-button--icon{fill:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=blue]) button calcite-loader,:host([appearance=solid][color=blue]) a calcite-loader{color:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=red]) button,:host([appearance=solid][color=red]) a{color:var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-danger);border:1px solid transparent}:host([appearance=solid][color=red]) button:hover,:host([appearance=solid][color=red]) button:focus,:host([appearance=solid][color=red]) a:hover,:host([appearance=solid][color=red]) a:focus{background-color:var(--calcite-ui-danger-hover)}:host([appearance=solid][color=red]) button:active,:host([appearance=solid][color=red]) a:active{background-color:var(--calcite-ui-danger)}:host([appearance=solid][color=red]) button .calcite-button--icon,:host([appearance=solid][color=red]) a .calcite-button--icon{fill:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=red]) button calcite-loader,:host([appearance=solid][color=red]) a calcite-loader{color:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=light]) button,:host([appearance=solid][color=light]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3);border:1px solid transparent}:host([appearance=solid][color=light]) button:hover,:host([appearance=solid][color=light]) button:focus,:host([appearance=solid][color=light]) a:hover,:host([appearance=solid][color=light]) a:focus{background-color:var(--calcite-ui-foreground-2)}:host([appearance=solid][color=light]) button:active,:host([appearance=solid][color=light]) a:active{background-color:var(--calcite-ui-foreground-3)}:host([appearance=solid][color=light]) button .calcite-button--icon,:host([appearance=solid][color=light]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=solid][color=light]) button calcite-loader,:host([appearance=solid][color=light]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=solid][color=dark]) button,:host([appearance=solid][color=dark]) a{color:#ffffff;background-color:var(--calcite-button-dark);border:1px solid transparent}:host([appearance=solid][color=dark]) button:hover,:host([appearance=solid][color=dark]) button:focus,:host([appearance=solid][color=dark]) a:hover,:host([appearance=solid][color=dark]) a:focus{background-color:var(--calcite-button-dark-hover)}:host([appearance=solid][color=dark]) button:active,:host([appearance=solid][color=dark]) a:active{background-color:var(--calcite-button-dark)}:host([appearance=solid][color=dark]) button .calcite-button--icon,:host([appearance=solid][color=dark]) a .calcite-button--icon{fill:#ffffff}:host([appearance=solid][color=dark]) button calcite-loader,:host([appearance=solid][color=dark]) a calcite-loader{color:#ffffff}:host([appearance=outline][color=blue]) button,:host([appearance=outline][color=blue]) a{color:var(--calcite-ui-brand);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=blue]) button:hover,:host([appearance=outline][color=blue]) a:hover{border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([appearance=outline][color=blue]) button:active,:host([appearance=outline][color=blue]) button:focus,:host([appearance=outline][color=blue]) a:active,:host([appearance=outline][color=blue]) a:focus{color:var(--calcite-ui-brand-press);border-color:var(--calcite-ui-brand-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=outline][color=blue]) button:active .calcite-button--icon,:host([appearance=outline][color=blue]) button:focus .calcite-button--icon,:host([appearance=outline][color=blue]) a:active .calcite-button--icon,:host([appearance=outline][color=blue]) a:focus .calcite-button--icon{fill:var(--calcite-ui-brand-press)}:host([appearance=outline][color=blue]) button .calcite-button--icon,:host([appearance=outline][color=blue]) a .calcite-button--icon{fill:var(--calcite-ui-brand)}:host([appearance=outline][color=blue]) button calcite-loader,:host([appearance=outline][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=outline][color=red]) button,:host([appearance=outline][color=red]) a{color:var(--calcite-ui-danger);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-danger);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=red]) button:hover,:host([appearance=outline][color=red]) a:hover{border-color:var(--calcite-ui-danger);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-danger);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger)}:host([appearance=outline][color=red]) button:active,:host([appearance=outline][color=red]) button:focus,:host([appearance=outline][color=red]) a:active,:host([appearance=outline][color=red]) a:focus{color:var(--calcite-ui-danger-press);border-color:var(--calcite-ui-danger-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=outline][color=red]) button:active .calcite-button--icon,:host([appearance=outline][color=red]) button:focus .calcite-button--icon,:host([appearance=outline][color=red]) a:active .calcite-button--icon,:host([appearance=outline][color=red]) a:focus .calcite-button--icon{fill:var(--calcite-ui-danger-press)}:host([appearance=outline][color=red]) button .calcite-button--icon,:host([appearance=outline][color=red]) a .calcite-button--icon{fill:var(--calcite-ui-danger)}:host([appearance=outline][color=red]) button calcite-loader,:host([appearance=outline][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=outline][color=light]) button,:host([appearance=outline][color=light]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=light]) button:hover,:host([appearance=outline][color=light]) a:hover{border-color:var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=light]) button:active,:host([appearance=outline][color=light]) button:focus,:host([appearance=outline][color=light]) a:active,:host([appearance=outline][color=light]) a:focus{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-border-2);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2);box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2)}:host([appearance=outline][color=light]) button:active .calcite-button--icon,:host([appearance=outline][color=light]) button:focus .calcite-button--icon,:host([appearance=outline][color=light]) a:active .calcite-button--icon,:host([appearance=outline][color=light]) a:focus .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=light]) button .calcite-button--icon,:host([appearance=outline][color=light]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=light]) button calcite-loader,:host([appearance=outline][color=light]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline][color=dark]) button,:host([appearance=outline][color=dark]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-1);border:1px solid #404040;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=dark]) button:hover,:host([appearance=outline][color=dark]) a:hover{border-color:#404040;-webkit-box-shadow:inset 0 0 0 1px #404040;box-shadow:inset 0 0 0 1px #404040}:host([appearance=outline][color=dark]) button:active,:host([appearance=outline][color=dark]) button:focus,:host([appearance=outline][color=dark]) a:active,:host([appearance=outline][color=dark]) a:focus{color:var(--calcite-ui-text-1);border-color:#4a4a4a;-webkit-box-shadow:inset 0 0 0 2px #4a4a4a;box-shadow:inset 0 0 0 2px #4a4a4a}:host([appearance=outline][color=dark]) button:active .calcite-button--icon,:host([appearance=outline][color=dark]) button:focus .calcite-button--icon,:host([appearance=outline][color=dark]) a:active .calcite-button--icon,:host([appearance=outline][color=dark]) a:focus .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=dark]) button .calcite-button--icon,:host([appearance=outline][color=dark]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=dark]) button calcite-loader,:host([appearance=outline][color=dark]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=clear][color=blue]) button,:host([appearance=clear][color=blue]) a{color:var(--calcite-ui-brand);background-color:transparent;border:1px solid var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=blue]) button:hover,:host([appearance=clear][color=blue]) a:hover{border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([appearance=clear][color=blue]) button:active,:host([appearance=clear][color=blue]) button:focus,:host([appearance=clear][color=blue]) a:active,:host([appearance=clear][color=blue]) a:focus{color:var(--calcite-ui-brand-press);border-color:var(--calcite-ui-brand-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=clear][color=blue]) button:active .calcite-button--icon,:host([appearance=clear][color=blue]) button:focus .calcite-button--icon,:host([appearance=clear][color=blue]) a:active .calcite-button--icon,:host([appearance=clear][color=blue]) a:focus .calcite-button--icon{fill:var(--calcite-ui-brand-press)}:host([appearance=clear][color=blue]) button .calcite-button--icon,:host([appearance=clear][color=blue]) a .calcite-button--icon{fill:var(--calcite-ui-brand)}:host([appearance=clear][color=blue]) button calcite-loader,:host([appearance=clear][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=clear][color=red]) button,:host([appearance=clear][color=red]) a{color:var(--calcite-ui-danger);background-color:transparent;border:1px solid var(--calcite-ui-danger);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=red]) button:hover,:host([appearance=clear][color=red]) a:hover{border-color:var(--calcite-ui-danger);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-danger);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger)}:host([appearance=clear][color=red]) button:active,:host([appearance=clear][color=red]) button:focus,:host([appearance=clear][color=red]) a:active,:host([appearance=clear][color=red]) a:focus{color:var(--calcite-ui-danger-press);border-color:var(--calcite-ui-danger-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=clear][color=red]) button:active .calcite-button--icon,:host([appearance=clear][color=red]) button:focus .calcite-button--icon,:host([appearance=clear][color=red]) a:active .calcite-button--icon,:host([appearance=clear][color=red]) a:focus .calcite-button--icon{fill:var(--calcite-ui-danger-press)}:host([appearance=clear][color=red]) button .calcite-button--icon,:host([appearance=clear][color=red]) a .calcite-button--icon{fill:var(--calcite-ui-danger)}:host([appearance=clear][color=red]) button calcite-loader,:host([appearance=clear][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=clear][color=light]) button,:host([appearance=clear][color=light]) a{color:var(--calcite-ui-text-1);background-color:transparent;border:1px solid var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=light]) button:hover,:host([appearance=clear][color=light]) a:hover{border-color:var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=light]) button:active,:host([appearance=clear][color=light]) button:focus,:host([appearance=clear][color=light]) a:active,:host([appearance=clear][color=light]) a:focus{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-border-2);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2);box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2)}:host([appearance=clear][color=light]) button:active .calcite-button--icon,:host([appearance=clear][color=light]) button:focus .calcite-button--icon,:host([appearance=clear][color=light]) a:active .calcite-button--icon,:host([appearance=clear][color=light]) a:focus .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=clear][color=light]) button .calcite-button--icon,:host([appearance=clear][color=light]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=clear][color=light]) button calcite-loader,:host([appearance=clear][color=light]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=clear][color=dark]) button,:host([appearance=clear][color=dark]) a{color:var(--calcite-ui-text-1);background-color:transparent;border:1px solid #404040;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=dark]) button:hover,:host([appearance=clear][color=dark]) a:hover{border-color:#404040;-webkit-box-shadow:inset 0 0 0 1px #404040;box-shadow:inset 0 0 0 1px #404040}:host([appearance=clear][color=dark]) button:active,:host([appearance=clear][color=dark]) button:focus,:host([appearance=clear][color=dark]) a:active,:host([appearance=clear][color=dark]) a:focus{color:var(--calcite-ui-text-1);border-color:#4a4a4a;-webkit-box-shadow:inset 0 0 0 2px #4a4a4a;box-shadow:inset 0 0 0 2px #4a4a4a}:host([appearance=clear][color=dark]) button:active .calcite-button--icon,:host([appearance=clear][color=dark]) button:focus .calcite-button--icon,:host([appearance=clear][color=dark]) a:active .calcite-button--icon,:host([appearance=clear][color=dark]) a:focus .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=clear][color=dark]) button .calcite-button--icon,:host([appearance=clear][color=dark]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=clear][color=dark]) button calcite-loader,:host([appearance=clear][color=dark]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([dir=ltr][appearance=outline][split-child=primary]) button,:host([dir=rtl][appearance=outline][split-child=secondary]) button,:host([dir=ltr][appearance=clear][split-child=primary]) button,:host([dir=rtl][appearance=clear][split-child=secondary]) button{border-right:0}:host([dir=ltr][appearance=outline][split-child=secondary]) button,:host([dir=rtl][appearance=outline][split-child=primary]) button,:host([dir=ltr][appearance=clear][split-child=secondary]) button,:host([dir=rtl][appearance=clear][split-child=primary]) button{border-left:0}:host([appearance=transparent][color=blue]) button,:host([appearance=transparent][color=blue]) a{color:var(--calcite-ui-text-link);background-color:transparent}:host([appearance=transparent][color=blue]) button:hover,:host([appearance=transparent][color=blue]) button:focus,:host([appearance=transparent][color=blue]) a:hover,:host([appearance=transparent][color=blue]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=blue]) button:active,:host([appearance=transparent][color=blue]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=blue]) button calcite-loader,:host([appearance=transparent][color=blue]) a calcite-loader{color:var(--calcite-ui-text-link)}:host([appearance=transparent][color=red]) button,:host([appearance=transparent][color=red]) a{color:var(--calcite-ui-danger-press);background-color:transparent}:host([appearance=transparent][color=red]) button:hover,:host([appearance=transparent][color=red]) button:focus,:host([appearance=transparent][color=red]) a:hover,:host([appearance=transparent][color=red]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=red]) button:active,:host([appearance=transparent][color=red]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=red]) button calcite-loader,:host([appearance=transparent][color=red]) a calcite-loader{color:var(--calcite-ui-danger-press)}:host([appearance=transparent][color=light]) button,:host([appearance=transparent][color=light]) a{color:var(--calcite-ui-foreground-1);background-color:transparent}:host([appearance=transparent][color=light]) button:hover,:host([appearance=transparent][color=light]) button:focus,:host([appearance=transparent][color=light]) a:hover,:host([appearance=transparent][color=light]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=light]) button:active,:host([appearance=transparent][color=light]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=light]) button calcite-loader,:host([appearance=transparent][color=light]) a calcite-loader{color:var(--calcite-ui-foreground-1)}:host([appearance=transparent][color=dark]) button,:host([appearance=transparent][color=dark]) a{color:var(--calcite-ui-text-1);background-color:transparent}:host([appearance=transparent][color=dark]) button:hover,:host([appearance=transparent][color=dark]) button:focus,:host([appearance=transparent][color=dark]) a:hover,:host([appearance=transparent][color=dark]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=dark]) button:active,:host([appearance=transparent][color=dark]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=dark]) button calcite-loader,:host([appearance=transparent][color=dark]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([scale=s]:not([appearance=transparent])) button.content--slotted,:host([scale=s]:not([appearance=transparent])) a.content--slotted{padding:7px 12px;font-size:12px;line-height:1.33}:host([scale=s][appearance=transparent]) button.content--slotted,:host([scale=s][appearance=transparent]) a.content--slotted{padding:8px 12px;font-size:12px;line-height:1.33}:host([scale=m]:not([appearance=transparent])) button.content--slotted,:host([scale=m]:not([appearance=transparent])) a.content--slotted{padding:13px 20px;font-size:14px;line-height:1.15}:host([scale=m][appearance=transparent]) button.content--slotted,:host([scale=m][appearance=transparent]) a.content--slotted{padding:14px 20px;font-size:14px;line-height:1.15}:host([scale=l]:not([appearance=transparent])) button.content--slotted,:host([scale=l]:not([appearance=transparent])) a.content--slotted{padding:15px 24px;font-size:18px;line-height:1.2}:host([scale=l][appearance=transparent]) button.content--slotted,:host([scale=l][appearance=transparent]) a.content--slotted{padding:16px 24px;font-size:18px;line-height:1.2}:host([scale=s]) button:not(.content--slotted),:host([scale=s]) a:not(.content--slotted){height:32px;width:32px;font-size:12px}:host([scale=m]) button:not(.content--slotted),:host([scale=m]) a:not(.content--slotted){height:44px;width:44px;font-size:14px}:host([scale=l]) button:not(.content--slotted),:host([scale=l]) a:not(.content--slotted){height:56px;width:56px;font-size:18px}:host([scale=s][icon-start][icon-end]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end]) a:not(.content--slotted){height:32px;width:48px;font-size:12px}:host([scale=m][icon-start][icon-end]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end]) a:not(.content--slotted){height:44px;width:66px;font-size:14px}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end]) a:not(.content--slotted){height:56px;width:84px;font-size:18px}";

const CalciteButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** specify the appearance style of the button, defaults to solid. */
    this.appearance = "solid";
    /** specify the color of the button, defaults to blue */
    this.color = "blue";
    /** string to override English loading text */
    this.intlLoading = TEXT.loading;
    /** optionally specify alignment of button elements. */
    this.alignment = "center";
    /** optionally add a calcite-loader component to the button, disabling interaction.  */
    this.loading = false;
    /** optionally add a round style to the button  */
    this.round = false;
    /** specify the scale of the button, defaults to m */
    this.scale = "m";
    /** is the button a child of a calcite-split-button */
    this.splitChild = false;
    /** specify the width of the button, defaults to auto */
    this.width = "auto";
    /** the node type of the rendered child element */
    this.childElType = "button";
    /** determine if there is slotted content for styling purposes */
    this.hasContent = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    // act on a requested or nearby form based on type
    this.handleClick = (e) => {
      // this.type refers to type attribute, not child element type
      if (this.childElType === "button" && this.type !== "button") {
        const requestedForm = this.el.getAttribute("form");
        const targetForm = requestedForm
          ? document.getElementsByName(`${requestedForm}`)[0]
          : this.el.closest("form");
        if (targetForm) {
          const targetFormSubmitFunction = targetForm.onsubmit;
          switch (this.type) {
            case "submit":
              if (targetFormSubmitFunction)
                targetFormSubmitFunction();
              else if (targetForm.checkValidity())
                targetForm.submit();
              else
                targetForm.reportValidity();
              break;
            case "reset":
              targetForm.reset();
              break;
          }
        }
        e.preventDefault();
      }
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.childElType = this.href ? "a" : "button";
    this.setupTextContentObserver();
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  componentWillLoad() {
    {
      this.updateHasContent();
      const elType = this.el.getAttribute("type");
      this.type = this.childElType === "button" && elType ? elType : "submit";
    }
  }
  render() {
    const dir = getElementDir(this.el);
    const attributes = this.getAttributes();
    const Tag = this.childElType;
    const loader = (h("div", { class: CSS.buttonLoader }, h("calcite-loader", { active: true, inline: true, label: this.intlLoading })));
    const iconScale = this.scale === "l" ? "m" : "s";
    const iconStartEl = (h("calcite-icon", { class: { [CSS.icon]: true, [CSS.iconStart]: true }, dir: dir, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: iconScale }));
    const iconEndEl = (h("calcite-icon", { class: { [CSS.icon]: true, [CSS.iconEnd]: true }, dir: dir, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: iconScale }));
    const contentEl = (h("span", { class: CSS.content }, h("slot", null)));
    const className = this.hasContent ? { ["class"]: CSS.contentSlotted } : null;
    return (h(Host, { dir: dir }, h(Tag, Object.assign({}, attributes, className, { disabled: this.disabled, onClick: this.handleClick, ref: (el) => (this.childEl = el), tabIndex: this.disabled ? -1 : null }), this.loading ? loader : null, this.iconStart ? iconStartEl : null, this.hasContent ? contentEl : null, this.iconEnd ? iconEndEl : null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  async setFocus() {
    this.childEl.focus();
  }
  updateHasContent() {
    var _a, _b;
    const slottedContent = this.el.textContent.trim().length > 0 || this.el.childNodes.length > 0;
    this.hasContent =
      this.el.childNodes.length === 1 && ((_a = this.el.childNodes[0]) === null || _a === void 0 ? void 0 : _a.nodeName) === "#text"
        ? ((_b = this.el.textContent) === null || _b === void 0 ? void 0 : _b.trim().length) > 0
        : slottedContent;
  }
  setupTextContentObserver() {
    {
      this.observer = new MutationObserver(() => {
        this.updateHasContent();
      });
      this.observer.observe(this.el, { childList: true, subtree: true });
    }
  }
  getAttributes() {
    // spread attributes from the component to rendered child, filtering out props
    const props = [
      "appearance",
      "alignment",
      "calcite-hydrated",
      "class",
      "color",
      "dir",
      "icon-start",
      "icon-end",
      "id",
      "splitChild",
      "loading",
      "scale",
      "slot",
      "width",
      "theme"
    ];
    return Array.from(this.el.attributes)
      .filter((a) => a && !props.includes(a.name))
      .reduce((acc, { name, value }) => (Object.assign(Object.assign({}, acc), { [name]: value })), {});
  }
  get el() { return getElement(this); }
};
CalciteButton.style = calciteButtonCss;

export { CalciteButton as calcite_button };
