import { $ABSTRACT } from "../_utils.js";
import GameObject   from "./gameobject.js";
import RenderStyle  from "../renderstyle.js";

/**
 * Base graphic class
 * NOTE: The Z index must be an Integer
 * @abstract
 * @extends GameNode
 * @global
 * @param {string} name - Node name
 * 
 * @property {RenderStyle} style  - @+const Graphical style
 * @property {number}      zIndex - Rendering Z index
 */
class Drawable extends GameObject {
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
        $ABSTRACT(this, Drawable);
        this.#style = new RenderStyle();
        this.#zIndex = 0;
    }
}

export default Drawable;
