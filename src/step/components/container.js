import u from "umbrellajs";
export const Container = ({ first, last }) =>
    u(`<div role="dialog" class="guided-tour-step${first ? " guided-tour-step-first" : ""}${last ? " guided-tour-step-last" : ""}"></div>`);