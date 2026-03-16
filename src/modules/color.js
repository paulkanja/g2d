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
        const r = this.#r.toString(16).padStart(2, "0");
        const g = this.#g.toString(16).padStart(2, "0");
        const b = this.#b.toString(16).padStart(2, "0");
        const a = this.#a.toString(16).padStart(2, "0");
        return `#${r}${g}${b}${a}`;
    }
}

export default Color;
