import { $ABSTRACT } from "./_utils.js";

/**
 * Base Renderer class
 * @abstract
 */
class Renderer {
    constructor() { $ABSTRACT(this, Renderer); }

    /**
     * Render a node and its descendants
     * @virtual
     * @param {GameNode} node
     */
    render(node) { $ABSTRACT(this, Renderer); }
}

export default Renderer;
