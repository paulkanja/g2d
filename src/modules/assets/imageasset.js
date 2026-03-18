import Asset  from "../asset.js"
import signal from "../signal.js"

/**
 * Image asset
 * @extends Asset
 * @global
 * @param {string} path - Path to image source file
 * @param {...any} args - Extra arguments to pass to the Image constructor
 * 
 * @property {HTMLImageElement|null} image - @+const Loaded image element
 */
class ImageAsset extends Asset {
    #image;
    #_image;
    #path;

    get image()  { return this.#image; }

    constructor(path, ...args) {
        const load = signal();
        super(load);

        this.#image  = null;
        this.#_image = new Image(...args);
        this.#_image.addEventListener("load",  e => {
            this.#image = this.#_image;
            load(true);
        });
        this.#_image.addEventListener("error", e => { load(false, e.error); });
        this.#path = String(path);
    }

    /**
     * Load the image
     * @return {void}
     */
    fetch() {
        if (this.status === "OK") { return; }
        this.#_image.src = this.#path;
        Object.freeze(this.#_image);
    }
}

export default ImageAsset;
