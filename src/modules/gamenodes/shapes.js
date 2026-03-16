import Shape from "./shape.js"

/**
 * Circle shape class
 * @extends Shape
 * @global
 * @param {string} name   - Node name
 * @param {string} radius - Circle radius
 * 
 * @property {number} radius - Circle radius
 */
class Circle extends Shape {
    #radius;

    get radius()  { return this.#radius; }
    set radius(value)  { if (!isNaN(value)) {this.#radius  = +value;} }

    constructor(name, radius) {
        super(name);
        this.#radius = 0;
        this.radius = radius;
    }
}

/**
 * Ellipse shape class
 * @extends Shape
 * @global
 * @param {string} name   - Node name
 * @param {string} width  - Ellipse width
 * @param {string} height - Ellipse height
 * 
 * @property {string} width  - Ellipse width (X diameter)
 * @property {string} height - Ellipse height (Y diameter)
 */
class Ellipse extends Shape {
    #width;
    #height;

    get width()  { return this.#width; }
    get height() { return this.#height; }

    set width(value)  { if (!isNaN(value)) {this.#width  = +value;} }
    set height(value) { if (!isNaN(value)) {this.#height = +value;} }

    constructor(name, width, height) {
        super(name);
        this.#width  = this.#height = 0;
        this.width  = width;
        this.height = height;
    }
}

/**
 * Rectangle shape class
 * @extends Shape
 * @global
 * @param {string} name   - Node name
 * @param {string} width  - Rectangle width
 * @param {string} height - Rectangle height
 * 
 * @property {string} width  - Rectangle width
 * @property {string} height - Rectangle height
 */
class Rect extends Shape {
    #width;
    #height;

    get width()  { return this.#width; }
    get height() { return this.#height; }

    set width(value)  { if (!isNaN(value)) {this.#width  = +value;} }
    set height(value) { if (!isNaN(value)) {this.#height = +value;} }

    constructor(name, width, height) {
        super(name);
        this.#width  = this.#height = 0;
        this.width  = width;
        this.height = height;
    }
}

export default {
    Circle,
    Ellipse,
    Rect
};
