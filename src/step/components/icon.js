export const Icon = ({ width = 32, height = 32, name, className = "", viewBox = "0 0 20 20" }) =>
    `<svg class="guided-tour-icon ${className}" viewBox="${viewBox}" width="${width}" height="${height}">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tour-icon-${name}"></use>
    </svg>`;