import Drawable   from "./drawable.js";
import ImageAsset from "../assets/imageasset.js";

/**
 * Graphical sprite
 * @abstract
 * @extends Drawable
 * @global
 * @param {string} [name]    - Node name
 * @param {ImageAsset} image - Image asset
 * @param {number} [width]   - Image height
 * @param {number} [height]  - Image width
 * 
 * @property {ImageAsset} image  - @+const Image asset of the sprite
 * @property {number}     width  - Shadows the image's width
 * @property {number}     height - Shadows the image's height
 */
class Sprite extends Drawable {
    #image;
    #width;
    #height;

    get image()  { return this.#image; }
    get width()  { return this.#width  ?? this.#image.image?.width; }
    get height() { return this.#height ?? this.#image.image?.height; }

    set width(value)  { if (!isNaN(value)) { this.#width  = +value; } }
    set height(value) { if (!isNaN(value)) { this.#height = +value; } }

    constructor(name, image, width, height) {
        if (arguments.length == 1) { [name, image] = ["", name]; }
        if (arguments.length == 3) {
            [name, image, width, height] = ["", ...arguments];
        }
        super(name);
        if (!(image instanceof ImageAsset)) {
            throw new TypeError(
                `Failed to construct ''${this.constructor.name}: ` +
                "Value is not of type 'ImageAsset'"
            );
        }

        this.#image = image;
        this.#width = this.#height = null;
        this.width = width;
        this.height = height;
    }
}

export default Sprite;
