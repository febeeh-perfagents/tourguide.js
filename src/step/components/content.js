import u from "umbrellajs";
export const Content = ({ content }) =>
    content ? u(`<div class="guided-tour-step-content">
        ${content}
    </div>`) : "";
