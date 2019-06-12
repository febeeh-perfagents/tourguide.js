import u from "umbrellajs";
export const Title = ({ title }) =>
    title ? u(`<div role="heading" class="guided-tour-step-title">
        ${title}
    </div>`) : "";
