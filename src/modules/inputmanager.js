import math from "./math.js";

/**
 * Poll-based input manager
 * @param {HTMLElement} element - HTML element to observe
 */
class InputManager {
    #element;
    #inputs;
    #unpolled;

    constructor(element) {
        if (!(element instanceof HTMLElement)) {
            throw new TypeError(
                `Failed to construct '${this.constructor.name}': ` +
                `Value is not of type 'HTMLElement'.`
            );
        }
        this.#element = element;
        this.#inputs = {};
        this.#unpolled = {};
        element.addEventListener("keydown", e => {
            e.preventDefault();
            if (e.repeat) { return; }
            const key = this.#keyof(e.key.toUpperCase());
            if (!key) { return; }
            this.#unpolled[`KEY:${key}`] = {
                event: "keydown",
                time: Date.now(),
            };
        });
        element.addEventListener("keyup", e => {
            e.preventDefault();
            if (e.repeat) { return; }
            const key = this.#keyof(e.key.toUpperCase());
            if (!key) { return; }
            this.#unpolled[`KEY:${key}`] = {
                event: "keyup",
                time: Date.now(),
            };
        });
    }

    /**
     * Calculate a normalized 2D vector of a set of axis inputs
     * @param {string} up    - Directional up input
     * @param {string} down  - Directional down input
     * @param {string} left  - Directional left input
     * @param {string} right - Directional right input
     * @return {Vec2} Normalized 2D input vector
     */
    axial(up, down, left, right) {
        const v = new math.Vec2(0, 0);
        if (this.keydown(up)) { v.y = -1; }
        if (this.keydown(down)) { v.y += 1; }
        if (this.keydown(left)) { v.x = -1; }
        if (this.keydown(right)) { v.x += 1; }
        return v.norm();
    }

    /**
     * Remove all polled and unpolled inputs
     * @return {void}
     */
    clear() {
        this.#inputs   = {};
        this.#unpolled = {};
    }

    /**
     * Check if a key is currently pressed down
     * @param {string} key
     * @return {boolean} True if the key is pressed down
     */
    keydown(key) {
        return this.#inputs[`KEY:${key}`]?.event === "keydown";
    }

    /**
     * Check if a key was released
     * @param {string} key
     * @return {boolean} True if the key has been released
     */
    keyup(key) {
        return this.#inputs[`KEY:${key}`]?.event === "keyup";
    }

    #keyof(key) {
        switch (key) {
        default:
            return key;
        case "UNIDENTIFIED":
            return null;
        case "DEL":
            return "DELETE";
        case "ESC":
            return "ESCAPE";
        case "SPACE":
        case "SPACEBAR":
            return " ";
        case "ARROWDOWN":
            return "DOWN";
        case "ARROWLEFT":
            return "LEFT";
        case "ARROWRIGHT":
            return "RIGHT";
        case "ARROWUP":
            return "UP";
        case "OS":
            return "META";
        case "APPS":
            return "CONTEXTMENU";
        case "HALFWIDTH":
            return "HANKAKU";
        case "FULLWIDTH":
            return "ZENKAKU";
        case "ROMANCHARACTER":
            return "ROMAJI";
        }
    }

    /**
     * Clear polled inputs and poll new inputs
     * @return {void}
     */
    poll(maxAge = Infinity) {
        const now = Date.now();
        this.#inputs = {};
        for (const key in this.#unpolled) {
            if (now - this.#unpolled[key].time < maxAge) {
                this.#inputs[key] = this.#unpolled[key];
            }
        }
        this.#unpolled = {};
    }
}

export default InputManager;
