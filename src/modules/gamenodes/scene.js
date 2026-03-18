import GameNode     from "../gamenode.js";
import RenderStyle  from "../renderstyle.js";
import Sprite       from "./sprite.js";

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

    #fetchNodeAssets(node) {
        if (node instanceof Sprite) {
            node.image.fetch();
        }
        for (const child of node.children) {
            this.#fetchNodeAssets(child);
        }
    }

    /**
     * Load assets that are connected to the scene
     * @return {void}
     */
    fetchAssets() {
        this.#fetchNodeAssets(this);
    }

}

export default Scene;
