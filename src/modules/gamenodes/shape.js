import { $ABSTRACT } from "../_utils.js";
import Drawable      from "./drawable.js";

/**
 * Base shape class
 * @abstract
 * @extends Drawable
 * @global
 * @param {string} name - Node name
 */
class Shape extends Drawable {
    constructor(name) {
        super(name);
        $ABSTRACT(this, Shape);
    }
}

export default Shape;
