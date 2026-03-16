import GameNode    from "../gamenode.js";
import RenderStyle from "../gamenode.js";

/**
 * Scene class
 * @extends GameNode
 * @global
 * @param {string} name - Node name
 * 
 * @property {RenderStyle} background - @+const Background style
 */
class Scene extends GameNode {
    #background;

    get background() { return this.#background; }

    constructor(name) {
        super(name);
        this.#background = new RenderStyle();
    }
}

export default Scene;
