import math from "./math.js"

/**
 * 2D vector
 * @global
 * @param {number} r - Red value
 * @param {number} g - Green value
 * @param {number} b - Blue value
 * @param {number} a - Alpha value
 * 
 * @property {number} r - Red value
 * @property {number} g - Green value
 * @property {number} b - Blue value
 * @property {number} a - Alpha value
 */
class Color {
    /**
     * Get a color of a random HSL hue
     * @return {Color} Randomly generated color
     */
    static randomHue() {
        const h = math.irand(360);
        const c = 0.5;
        const h_ = h/60;
        const x = c*(1 - math.abs(h_%2 - 1));
        let rgb;
        if (h_ < 1) { rgb = [c, x, 0]; } else
        if (h_ < 2) { rgb = [x, c, 0]; } else
        if (h_ < 3) { rgb = [0, c, x]; } else
        if (h_ < 4) { rgb = [0, x, c]; } else
        if (h_ < 5) { rgb = [x, 0, c]; } else
                    { rgb = [c, 0, x]; }
        const m = 0.25;
        return new Color(
            255*(rgb[0] + m),
            255*(rgb[1] + m),
            255*(rgb[2] + m)
        );
    }

    #r;
    #g;
    #b;
    #a;

    get g() { return this.#g; }
    get b() { return this.#b; }
    get a() { return this.#a; }


    set r(n) { if (!isNaN(n)) { this.#r = math.clamp(n, 0, 255); } }
    set g(n) { if (!isNaN(n)) { this.#g = math.clamp(n, 0, 255); } }
    set b(n) { if (!isNaN(n)) { this.#b = math.clamp(n, 0, 255); } }
    set a(n) { if (!isNaN(n)) { this.#a = math.clamp(n, 0, 255); } }

    *[Symbol.iterator]() {
        yield this.#r;
        yield this.#g;
        yield this.#b;
        yield this.#a;
    }

    constructor(r, g, b, a) {
        this.#r = this.#g = this.#b = 0;
        this.#a = 255;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    /**
     * Get the hex string representation of this color
     * @return {string} Hex string representation
     */
    hexString() {
        const r = math.round(this.#r).toString(16).padStart(2, "0");
        const g = math.round(this.#g).toString(16).padStart(2, "0");
        const b = math.round(this.#b).toString(16).padStart(2, "0");
        const a = math.round(this.#a).toString(16).padStart(2, "0");
        return `#${r}${g}${b}${a}`;
    }
}

export default Color;
