import Color from "./color.js";

/**
 * Graphical style for rendering
 * @global
 * 
 * @property {Color|null} fill - Fill style
 * @property {Color|null} stroke - Stroke style
 * @property {number} strokeWidth - Stroke width
 */
class RenderStyle {
    #fill;
    #stroke;
    #strokeWidth;

    get fill()        { return this.#fill; }
    get stroke()      { return this.#stroke; }
    get strokeWidth() { return this.#strokeWidth; }

    set fill(value) {
        if (!value) {
            this.#fill = null;
        } else if (value[Symbol.iterator]) {
            this.#fill = new Color(...value);
        }
    }

    set stroke(value) {
        if (!value) {
            this.#stroke = null;
        } else if (value[Symbol.iterator]) {
            this.#stroke = new Color(...value);
        }
    }

    set strokeWidth(value) {
        if (!isNaN(value) && value >= 0) {
            this.#strokeWidth = +value;
        }
    }

    constructor() {
        this.#fill   = null;
        this.#stroke = null;
        this.#strokeWidth = 1;
    }
}

export default RenderStyle;
