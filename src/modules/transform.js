import math from "./math.js";

/**
 * 2D transform
 * @global
 * @param {...number} m - Initial transform matrix
 * 
 * @property {Mat3} matrix - @+const Transform matrix
 */
class Transform {
    #matrix;

    get matrix() { return this.#matrix; }

    constructor(m) {
        if (m && m[Symbol.iterator]) {
            this.#matrix = new math.Mat3(...m);
        } else {
            this.#matrix = math.Mat3.IDENTITY;
        }
    }

    /**
     * Apply another transform or matrix to this transform
     * 
     * @param {Iterable<number>|Transform} m - Transform or matrix to apply
     * @return {this} Returns itself
     */
    applyTransform(m) {
        if (m instanceof Transform) { m = m.matrix; }
        if (m && m[Symbol.iterator]) {
            this.#matrix.set(this.#matrix.mul(m));
        }
        return this;
    }

    /**
     * Clone this transform
     * @return {Transform} Returns a copy of this transform
     */
    clone() {
        return new Transform(this.#matrix);
    }

    /**
     * Get the current position of the transform
     * @return {Vec2} Position vector
     */
    getPosition() {
        return new math.Vec2(this.#matrix[0][2], this.#matrix[1][2]);
    }

    /**
     * Get the current rotation of the transform
     * @return {number} Angle of rotation
     */
    getRotation() {
        return math.atan2(this.#matrix[1][0], this.#matrix[0][0]);
    }

    /**
     * Get the current scale of the transform
     * @return {Vec2} Scale vector
     */
    getScale() {
        return new math.Vec2(
            math.hypot(this.#matrix[0][0], this.#matrix[1][0]),
            math.hypot(this.#matrix[0][1], this.#matrix[1][1]),
        )
    }

    /**
     * Rotate the transform by the given angle (counterclockwise)
     * @param {number} angle
     * @return {this} Returns itself
     */
    rotate(angle) {
        const cos = math.cos(angle), sin = math.sin(angle);
        this.#matrix.set(this.#matrix.mul([
            cos, -sin,   0,
            sin,  cos,   0,
              0,    0,   1
        ]));
        return this;
    }

    /**
     * Scale the transform
     * 
     * @param {number|Iterable<number>} f - Scale vector
     * @return {this} Returns itself
     */
    scale(f) {
        if (typeof f === "number") {
            f = [f, f];
        } else {
            f = [...f];
        }
        this.#matrix.set(this.#matrix.mul([
            f[0],    0,   0,
               0, f[1],   0,
               0,    0,   1
        ]));
        return this;
    }

    /**
     * Set the position of the transform
     * @param {number} x
     * @param {number} y
     * @return {this} Returns itself
     */
    setPosition(x, y) {
        this.#matrix[0][2] = x;
        this.#matrix[1][2] = y;
        return this;
    }

    /**
     * Set the rotation of the transform
     * @param {number} angle
     * @return {this} Returns itself
     */
    setRotation(angle) {
        const f = this.getScale();
        const cos = math.cos(angle),
            sin = math.sin(angle);
        this.#matrix[0][0] =  f[0]*cos;
        this.#matrix[1][0] =  f[0]*sin;
        this.#matrix[0][1] = -f[1]*sin;
        this.#matrix[1][1] =  f[1]*cos;
        return this;
    }

    /**
     * Set the scale of the transform
     * 
     * @param {number} x
     * @param {number} [y=x]
     * @return {this} Returns itself
     */
    setScale(x, y) {
        if (arguments.length === 1) { y = x }
        const angle = this.getRotation();
        const cos = math.cos(angle),
            sin = math.sin(angle);
        this.#matrix[0][0] =  x*cos;
        this.#matrix[1][0] =  x*sin;
        this.#matrix[0][1] = -y*sin;
        this.#matrix[1][1] =  y*cos;
        return this;
    }

    /**
     * Translate the transform by the given vector
     * @param {Iterable<number>} v
     * @return {this} Returns itself
     */
    translate(v) {
        v = [...v];
        this.#matrix[0][2] += v[0];
        this.#matrix[1][2] += v[1];
        return this;
    }
}

export default Transform;
