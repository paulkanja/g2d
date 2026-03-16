/**
 * Ensure a function is not called directly from an abstract class
 * @param {Object} instance
 * @param {function} abstractClass
 * @return {void}
 * @private
 * @throws {TypeError} Instance cannot be directly created from abstract class
 */
export function $ABSTRACT(instance, abstractClass) {
    if (typeof abstractClass !== "function") { return; }
    if (instance.constructor === abstractClass) {
        throw new TypeError(
            `Failed to construct '${abstractClass.name}': ` +
            "Cannot construct an abstract class."
        );
    }
}

/**
 * Define a constant property or method of an object
 * @private
 *
 * @param {Object} object
 * @param {string|function} name   - The name of the property or a named function
 * @param {any}            [value] - The value of the property
 * @return {void}
 */
export function $DEFINE(object, name, value) {
    if (!object) { return; }
    if (typeof name === "function") {
        [name, value] = [name.name, name];
    } else {
        name = String(name);
    }
    Object.defineProperty(object, name, { value });
}

/**
 * Priority queue implementation for rendering purposes
 * @extends @Iterable
 * @private
 * @property {number} size - @+readonly Number of items in the queue
 */
export class RenderQueue {
    #items;

    get size() { return this.#items.length; }

    *[Symbol.iterator]() {
        for (const { item } of this.#items) {
            yield item;
        }
    }

    constructor() {
        this.#items = [];
    }

    /**
     * Add an item to the queue
     * @param {number} index
     * @param {any}    item
     * @return {boolean} Success indicator
     */
    enqueue(index, item) {
        index = -index;
        if (isNaN(index)) { return false; }
        let max = this.#items.length, min = 0;
        while (min < max) {
            const mid = min + ((max - min)>>>1);
            if (this.#items[mid].index < index) {
                max = mid;
            } else {
                min = mid + 1;
            }
        }
        this.#items.splice(min, 0, {index, item});
        return true;
    }

    /**
     * Return the item at the start of the queue without removing it
     * @return {any} First item
     */
    peek() {
        return this.#items[0].item;
    }

    /**
     * Remove an item from the start of the queue and return it
     * @return {any} Removed item
     */
    next() {
        return this.#items.shift().item;
    }
}
