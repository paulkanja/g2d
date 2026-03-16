import GameNode  from "../gamenode.js";
import Transform from "../transform.js";

/**
 * Game node with an attached transform
 * @extends GameNode
 * @global
 * @param {string} name - Node name
 * 
 * @property {Transform} transform - @+const This object's transform
 */
class GameObject extends GameNode {
    #transform;

    get transform() { return this.#transform; }

    constructor(name) {
        super(name);
        this.#transform = new Transform();
    }
}

export default GameObject;
