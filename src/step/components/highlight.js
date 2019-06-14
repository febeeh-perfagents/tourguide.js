import u from "umbrellajs";
import { Icon } from "./icon";
export const Highlight = ({ actiontarget }) =>
    u(`<div class="guided-tour-step-highlight ${actiontarget ? "guided-tour-step-highlight-active" : ""}">
        ${actiontarget ? Icon({ name: "hand", className: "guided-tour-step-button-action" }) : ""}
    </div>`);