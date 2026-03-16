import { $ABSTRACT } from "../_utils.js";
import GameObject   from "./gameobject.js";
import RenderStyle  from "../renderstyle.js";

/**
 * Base shape class
 * @abstract
 * @extends GameNode
 * @global
 * @param {string} name - Node name
 * 
 * @property {RenderStyle} style  - @+const Shape graphical style
 * @property {number}      zIndex - Rendering Z index
 * NOTE: The Z index must be an Integer
 */
class Shape extends GameObject {
    #style;
    #zIndex;

    get style()  { return this.#style; }
    get zIndex() { return this.#zIndex; }

    set zIndex(value) {
        value = +value;
        if (Number.isInteger(value)) { this.#zIndex = value; }
    }

    constructor(name) {
        super(name);
        $ABSTRACT(this, Shape);
        this.#style = new RenderStyle();
        this.#zIndex = 0;
    }
}

export default Shape;
