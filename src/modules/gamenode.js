/**
 * Game node implementing tree node behaviour
 * @param {string} name - Node name
 * 
 * @property {GameNodeList}  children - @+const Node list containing this node's children
 * @property {string}        nodeName - Name of this node
 * @property {GameNode|null} parent   - @+readonly Parent of this node
 */
class GameNode {
    #children;
    #nodeName;
    #parent;

    get parent() { return this.#parent; }
    get nodeName() { return this.#nodeName; }

    get children() {
        const children = this.#children;
        return new class GameNodeList {
            *[Symbol.iterator]() { yield* children; }
            get(index) { return children[index]; }
            get length() { return children.size; }
        }();
    }

    set nodeName(value) {
        if (
            value !== null &&
            value !== undefined &&
            !(typeof value === "number" && isNaN(value))
        ) {
            this.#nodeName = String(value);
        }
    }

    constructor(name) {
        this.#children = new Set();
        this.#parent = null;
        this.#nodeName = String(name || "");
    }

    /**
     * @private
     */
    __updateParent__(parent) {
        if (!(parent instanceof GameNode)) { return false; }
        if (!parent) {
            this.#parent = null;
            return true;
        }
        if (!parent.hasChild(this)) { return; }
        if (this.#parent && this.#parent !== parent) {
            this.#parent.removeChild(this);
        }
        this.#parent = parent;
        return true;
    }

    /**
     * Add a child to this node
     * @param {GameNode} child
     * @return {boolean} Success indicator
     */
    addChild(child) {
        if (!(child instanceof GameNode)) { return false; }
        if (child === this || child.hasAncestor(this)) { return false; }
        this.#children.add(child);
        child.__updateParent__(this);
        return true;
    }

    /**
     * Check if this node has a given node as its ancestor
     * @param {GameNode} node
     * @return {boolean} True if this node has the node as its ancestor
     */
    hasAncestor(node) {
        let n = this.#parent;
        while (n) {
            if (n === node) { return true; }
        }
        return false;
    }

    /**
     * Check if this node has a given node as its direct child
     * @param {GameNode} node
     * @return {boolean} True if this node has the node as its child
     */
    hasChild(node) {
        return this.#children.has(node);
    }

    /**
     * Remove a child of this node
     * @param {GameNode} child
     * @return {boolean} Success indicator
     */
    removeChild(child) {
        if (!(child instanceof GameNode)) { return false; }
        this.#children.delete(child);
        child.__updateParent__(null);
        return true;
    }
}

export default GameNode;
