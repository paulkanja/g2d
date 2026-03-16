import math from "./math.js";

/**
 * Input manager class
 * @param {HTMLElement} element - HTML element to observe
 */
class InputManager {
    #element;
    #keys;
    #inputframe = 0.04;

    constructor(element) {
        if (!(element instanceof HTMLElement)) {
            throw new TypeError(
                `Failed to construct '${this.constructor.name}': ` +
                `Value is not of type 'HTMLElement'.`
            );
        }
        this.#element = element;
        this.#keys = {};
        element.addEventListener("keydown", e => {
            e.preventDefault();
            if (e.repeat) { return; }
            const key = this.#keyof(e.key.toUpperCase());
            if (!key) { return; }
            const now = Date.now();
            this.#keys[key] = {event: "keydown", time: now};
        });
        element.addEventListener("keyup", e => {
            e.preventDefault();
            if (e.repeat) { return; }
            const key = this.#keyof(e.key.toUpperCase());
            if (!key) { return; }
            const now = Date.now();
            const d = (this.#keys[key]?.event === "keydown") ?
                now - this.#keys[key].time :
                null;
            this.#keys[key] = {
                event: "keyup",
                time: now,
                durationHeld: d
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
        if (this.keyheld(up)) { v.y = -1; }
        if (this.keyheld(down)) { v.y += 1; }
        if (this.keyheld(left)) { v.x = -1; }
        if (this.keyheld(right)) { v.x += 1; }
        return v.norm();
    }

    /**
     * Check if a key has just been pressed down
     * @param {string} key
     * @return {boolean} True if the key has been pressed down
     */
    keydown(key) {
        if (this.#keys[key]?.event === "keydown" && !this.#keys[key].read) {
            this.#keys[key].read = true;
            return Date.now() - this.#keys[key].time <= this.#inputframe;
        }
    }

    /**
     * Check if a key has just been released
     * @param {string} key
     * @return {boolean} True if the key has been released
     */
    keyup(key) {
        if (this.#keys[key]?.event === "keyup" && !this.#keys[key].read) {
            this.#keys[key].read = true;
            return Date.now() - this.#keys[key].time <= this.#inputframe;
        }
    }

    // FIXME: Make keypressed more consistent
    /**
     * Check if a key has just released after being pressed for at most a
     * duration of time
     * @param {string} key
     * @param {number} [duration=0.2]
     * @return {boolean} True if the key has been released after being pressed
     *                   for at most the given duration
     */
    keypressed(key, duration = 0.2) {
        if (isNaN(duration) || duration <= 0) { return false; }
        if (this.#keys[key]?.event === "keyup" && !this.#keys[key].read) {
            if (
                !this.#keys[key].durationHeld ||
                this.#keys[key].durationHeld > duration
            ) { return false; }
            this.#keys[key].read = true;
            return Date.now() - this.#keys[key].time <= this.#inputframe;
        }
    }

    /**
     * Check if a key is currently pressed and has been pressed for at least a
     * duration of time
     * @param {string} key
     * @param {number} [duration=0]
     * @return {boolean} True if the key is currently pressed and has been
     *                   pressed for at least the given duration
     */
    keyheld(key, duration = 0) {
        if (isNaN(duration) || duration < 0) { return false; }
        if (this.#keys[key]?.event === "keydown") {
            return Date.now() - this.#keys[key].time >= duration;
        }
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
}

export default InputManager;
