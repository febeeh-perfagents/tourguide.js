import u from "umbrellajs";
import { Icon } from "./icon";

export const Footer = ({ first, last, context, index }) => {
    const {buttons} = context.options;
    return u(`<div class="guided-tour-step-footer">
        ${ buttons.close ? `<span role="button" class="guided-tour-step-button guided-tour-step-button-close" title="End tour">
            ${Icon({ width: 16, height: 16, name: "close" })}
        </span>` : ""}
        ${buttons.previous && !first ?
            `<span role="button" class="guided-tour-step-button guided-tour-step-button-previous" title="Previous step">
            ${Icon({ name: "next", width: "20", height: "20" })}
        </span>`: ""}
        ${buttons.next && (
            last ?
            `<span role="button" class="guided-tour-step-button guided-tour-step-button-complete" title="Complete tour">
            ${Icon({ name: "complete" })}
        </span>`:
            `<span role="button" class="guided-tour-step-button guided-tour-step-button-next" title="Next step">
            ${Icon({ name: "next" })}
        </span>`)}
        ${buttons.bullets &&
            context._steps.length > 1 ?
            `<div class="guided-tour-step-footer-bullets">
                <ul>${
            context._steps.map((step, i) =>
                `<li  title="Go to step ${i + 1}" data-index="${i}" class="${step.index < index ? "complete" : step.index == index ? "current" : ""}"></li>`).join("")}
                </ul>
        </div>` : ""}
    </div>`);
}