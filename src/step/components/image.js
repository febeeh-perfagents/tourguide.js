import u from "umbrellajs";
export const Image = ({image}) =>
    u(`<div role="figure" class="guided-tour-step-image">
        ${image ? `<img src="${image}" />` : ""}
    </div>`);