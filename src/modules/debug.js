/**
 * Log the descendant tree of a node
 * @function debug.logNodeTree
 * @param {GameNode} root
 * @return {string} The logged string
 * @global
 */
function logNodeTree(root, log = [], indent = []) {
    if (!root?.children) { return null; }
    let nextIndent = 1;
    for (const i of indent) {
        log.push(" ".repeat(i));
        log.push("| ");
    }
    if (indent.length) {
        log.push("- ");
        nextIndent += 2;
    }
    log.push("<");
    log.push(root.constructor.name);
    log.push(">");
    // nextIndent += root.constructor.name.length + 2;
    if (root.nodeName) {
        log.push(" ");
        log.push(root.nodeName);
        // nextIndent += root.nodeName.length + 1;
    }
    if (root.children.length) {
        // log.push(" +\n");
        log.push("\n");
        for (const child of root.children) {
            logNodeTree(child, log, [...indent, nextIndent]);
        }
    } else {
        log.push("\n");
    }
    if (!indent.length) {{
        const out = log.join("");
        console.log(out);
        return out;
    }}
}

const debug = {
    logNodeTree
};

export default debug;
