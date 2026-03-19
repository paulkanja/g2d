import { $DEFINE } from "./_utils.js"

/**
 * Shadows inbuilt Math object and implements mathematical utilities
 * @property {number} TAU  - @+const Mathematical constant equal to 2π
 * @property {class}  Vec2 - @+const {@link Vec2}
 * @property {class}  Vec3 - @+const {@link Vec3}
 * @property {class}  Mat3 - @+const {@link Mat3}
 * @const
 * @global
 */
const math = {};

{
    const MATH_PROPERTIES = [
        "E",
        "LN2",
        "LN10",
        "LOG2E",
        "LOG10E",
        "PI",
        "SQRT1_2",
        "SQRT2",
        "abs",
        "acos",
        "acosh",
        "asin",
        "asinh",
        "atan",
        "atan2",
        "atanh",
        "cbrt",
        "ceil",
        "clz32",
        "cos",
        "cosh",
        "exp",
        "expm1",
        "f16round",
        "floor",
        "fround",
        "hypot",
        "imul",
        "log",
        "log1p",
        "log2",
        "log10",
        "max",
        "min",
        "pow",
        "random",
        // "round",
        "sign",
        "sin",
        "sinh",
        "sqrt",
        "tan",
        "tanh",
        "trunc",
    ];

    for (const property of MATH_PROPERTIES) {
        if (Math[property]) { math[property] = Math[property]; }
    }
}

/**
 * 2D vector
 * @param {number} x - X value
 * @param {number} y - Y value
 * 
 * @property {number} x   - X value
 * @property {number} y   - Y value
 * @property {number} abs - @+readonly Magnitude
 */
class Vec2 {
    #x;
    #y;
    #abs;

    get x() { return this.#x; }
    get y() { return this.#y; }

    get abs() {
        if (this.#abs === null) {
            this.#abs = math.hypot(this.#x, this.#y);
        }
        return this.#abs;
    }

    set x(value) {
        if (!isNaN(value)) {
            this.#x = value;
            this.#abs = null;
        }
    }

    set y(value) {
        if (!isNaN(value)) {
            this.#y = value;
            this.#abs = null;
        }
    }

    *[Symbol.iterator]() {
        yield this.#x;
        yield this.#y;
    }

    constructor(x, y) {
        this.#x = this.#y = 0;
        this.set(x, y);
    }

    /**
     * Calculate the sum of this vector and another vector
     * @param {Iterable<number>} v
     * @return {Vec2} Sum vector
     */
    add(v) {
        v = [...v];
        return new Vec2(
            this.x + v[0],
            this.y + v[1],
        );
    }

    /**
     * Calculate the componentwise product of this vector and another vector
     * @param {Iterable<number>} v
     * @return {Vec2} Product vector
     */
    cmul(v) {
        v = [...v, 0, 0];
        return new Vec2(
            this.x*v[0],
            this.y*v[1],
        );
    }

    /**
     * Calculate the dot product between this vector and another vector
     * @param {Iterable<number>} v
     * @return {number} The dot product between the two vectors
     */
    dot(v) {
        v = [...v, 0, 0];
        return (
            (this.x*v[0] || 0) +
            (this.y*v[1] || 0)
        );
    }

    /**
     * Calculate the normalized form of this vector
     * @return {Vec2} Unit normalized vector
     */
    norm() {
        const abs = this.abs;
        if (math.abs(abs) < 0.000000001) { return this.set(0, 0); }
        return this.scale(1/this.abs);
    }

    /**
     * Calculate the rotation of this vector by an angle
     * NOTE: The positive direction of rotation is counterclockwise
     * @param {number} angle
     * @return {Vec2} Rotated vector
     */
    rotate(angle) {
        const cos = math.cos(angle);
        const sin = math.sin(angle);
        return new Vec2(
            this.x*cos - this.y*sin,
            this.x*sin + this.y*cos,
        );
    }

    /**
     * Calculate the product of this vector and a scalar value
     * @param {number} f
     * @return {Vec2} Scaled vector
     */
    scale(f) {
        return new Vec2(
            this.x*f,
            this.y*f,
        );
    }

    /**
     * Set this vector's X and Y value
     * @param {number|Iterable<number>} x
     * @param {number} y
     * @return {this} Returns itself
     */
    set(x, y) {
        if (x && x[Symbol.iterator]) { [x, y] = x; }
        this.x = x;
        this.y = y;
        return this;
    }

    /**
     * Calculate the difference between this vector and another vector
     * @param {Iterable<number>} v
     * @return {Vec2} Difference vector
     */
    sub(v) {
        v = [...v];
        return new Vec2(
            this.x - v[0],
            this.y - v[1],
        );
    }
}

/**
 * Linearly interpolate between two vectors
 * @function Vec2.lerp
 * @param {Iterable<number>} a - Initial vector
 * @param {Iterable<number>} b - Final vector
 * @param {number}            t - Interpolation ratio
 * @return {Vec2} Interpolated vector between vectors a and b
 */
$DEFINE(Vec2, function lerp(a, b, t) {
    a = [...a];
    b = [...b];
    return new Vec2(
        math.lerp(a[0], b[0], t),
        math.lerp(a[1], b[1], t),
    );
});

/**
 * Get a random unit vector
 * @function Vec2.random
 * @return {Vec2} Random unit vector
 */
$DEFINE(Vec2, function random() {
    const angle = math.frand(0, math.TAU);
    return new Vec2(math.cos(angle), math.sin(angle));
});

/**
 * 3D vector
 * @param {number} x - X value
 * @param {number} y - Y value
 * @param {number} z - Z value
 * 
 * @property {number} x   - X value
 * @property {number} y   - Y value
 * @property {number} z   - Z value
 * @property {number} abs - @+readonly Magnitude
 */
class Vec3 {
    #x;
    #y;
    #z;
    #abs;

    get x() { return this.#x; }
    get y() { return this.#y; }
    get z() { return this.#z; }

    get abs() {
        if (this.#abs === null) {
            this.#abs = math.hypot(this.#x, this.#y, this.#z);
        }
        return this.#abs;
    }

    set x(value) {
        if (!isNaN(value)) {
            this.#x = value;
            this.#abs = null;
        }
    }

    set y(value) {
        if (!isNaN(value)) {
            this.#y = value;
            this.#abs = null;
        }
    }

    set z(value) {
        if (!isNaN(value)) {
            this.#z = value;
            this.#abs = null;
        }
    }

    *[Symbol.iterator]() {
        yield this.#x;
        yield this.#y;
        yield this.#z;
    }

    constructor(x, y, z) {
        this.#x = this.#y = this.#z = 0;
        this.set(x, y, z);
    }

    /**
     * Calculate the sum of this vector and another vector
     * @param {Iterable<number>} v
     * @return {Vec3} Sum vector
     */
    add(v) {
        v = [...v];
        return new Vec3(
            this.x + v[0],
            this.y + v[1],
            this.z + v[2],
        );
    }

    /**
     * Calculate the componentwise product of this vector and another vector
     * @param {Iterable<number>} v
     * @return {Vec3} Product vector
     */
    cmul(v) {
        v = [...v, 0, 0, 0];
        return new Vec3(
            this.x*v[0],
            this.y*v[1],
            this.z*v[2],
        );
    }

    // TODO: Implement Vec3.cross

    /**
     * Calculate the dot product between this vector and another vector
     * @param {Iterable<number>} v
     * @return {number} The dot product between the two vectors
     */
    dot(v) {
        v = [...v];
        return (
            (this.x*v[0] || 0) +
            (this.y*v[1] || 0) +
            (this.z*v[2] || 0)
        );
    }

    /**
     * Calculate the normalized form of this vector
     * @return {Vec3} Unit normalized vector
     */
    norm() {
        const abs = this.abs;
        if (math.abs(abs) < 0.000000001) { return this.set(0, 0); }
        return this.scale(1/this.abs);
    }

    // TODO: Implement Vec3.rotate

    /**
     * Calculate the product of this vector and a scalar value
     * @param {number} f
     * @return {Vec3} Scaled vector
     */
    scale(f) {
        return new Vec3(
            this.x*f,
            this.y*f,
            this.z*f,
        );
    }

    /**
     * Set this vector's X, Y and Z value
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {this} Returns itself
     */
    set(x, y, z) {
        if (x && x[Symbol.iterator]) { [x, y, z] = x; }
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }

    /**
     * Calculate the difference between this vector and another vector
     * @param {Iterable<number>} v
     * @return {Vec3} Product vector
     */
    sub(v) {
        v = [...v];
        return new Vec3(
            this.x - v[0],
            this.y - v[1],
            this.z - v[2],
        );
    }
}

/**
 * Linearly interpolate between two vectors
 * @function Vec3.lerp
 * @param {Iterable<number>} a - Initial vector
 * @param {Iterable<number>} b - Final vector
 * @param {number}            t - Interpolation ratio
 * @return {Vec3} Interpolated vector between vectors a and b
 */
$DEFINE(Vec3, function lerp(a, b, t) {
    a = [...a];
    b = [...b];
    return new Vec2(
        math.lerp(a[0], b[0], t),
        math.lerp(a[1], b[1], t),
        math.lerp(a[2], b[2], t),
    );
});

/**
 * Get a random unit vector
 * @function Vec3.random
 * @return {Vec3} Random unit vector
 */
$DEFINE(Vec3, function random() {
    const angle = math.frand(0,  math.TAU);
    const z     = math.frand(-1, 1);
    const r     = math.sqrt(1 - z*z);
    return new Vec3(r*math.cos(angle), r*math.sin(angle), z);
});

/**
 * 3x3 matrix
 * @param {...number} m - Matrix values
 * 
 * @property {Iterable<number>} 0 - First row
 * @property {Iterable<number>} 1 - Second row
 * @property {Iterable<number>} 2 - Third row
 */
class Mat3 {
    static get IDENTITY() {
        return new Mat3(
            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
        );
    }

    #matrix;

    get [0]() {
        const matrix = this.#matrix;
        return {
            get [0]() { return matrix[0]; },
            get [1]() { return matrix[1]; },
            get [2]() { return matrix[2]; },
            set [0](value) { if (!isNaN(value)) { matrix[0] = +value; } },
            set [1](value) { if (!isNaN(value)) { matrix[1] = +value; } },
            set [2](value) { if (!isNaN(value)) { matrix[2] = +value; } },
            length: 3,
            *[Symbol.iterator]() {
                yield matrix[0];
                yield matrix[1];
                yield matrix[2];
            },
        }
    }

    get [1]() {
        const matrix = this.#matrix;
        return {
            get [0]() { return matrix[3]; },
            get [1]() { return matrix[4]; },
            get [2]() { return matrix[5]; },
            set [0](value) { if (!isNaN(value)) { matrix[3] = +value; } },
            set [1](value) { if (!isNaN(value)) { matrix[4] = +value; } },
            set [2](value) { if (!isNaN(value)) { matrix[5] = +value; } },
            length: 3,
            *[Symbol.iterator]() {
                yield matrix[3];
                yield matrix[4];
                yield matrix[5];
            },
        }
    }

    get [2]() {
        const matrix = this.#matrix;
        return {
            get [0]() { return matrix[6]; },
            get [1]() { return matrix[7]; },
            get [2]() { return matrix[8]; },
            set [0](value) { if (!isNaN(value)) { matrix[6] = +value; } },
            set [1](value) { if (!isNaN(value)) { matrix[7] = +value; } },
            set [2](value) { if (!isNaN(value)) { matrix[8] = +value; } },
            length: 3,
            *[Symbol.iterator]() {
                yield matrix[6];
                yield matrix[7];
                yield matrix[8];
            },
        }
    }

    *[Symbol.iterator]() {
        yield* this.#matrix;
    }

    constructor(...m) {
        this.#matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.set(...m);
    }

    /**
     * Calculate the sum of this matrix and another matrix
     * @param {Iterable<number>} m
     * @return {Mat3} Sum matrix
     */
    add(m) {
        m = [...m];
        return new Mat3(
            this[0][0] + m[0],
            this[0][1] + m[1],
            this[0][2] + m[2],
            this[1][0] + m[3],
            this[1][1] + m[4],
            this[1][2] + m[5],
            this[2][0] + m[6],
            this[2][1] + m[7],
            this[2][2] + m[8],
        );
    }

    /**
     * Perform matrix multiplication
     * 
     * @param {Iterable<number>} m - Matrix or column vector
     * @return {Mat3|Vec3} Product of matrix multiplication
     */
    mul(m) {
        m = [...m];
        if (m.length <= 3) {
            return new Vec3(
                (
                    (this.#matrix[0]*m[0] || 0) +
                    (this.#matrix[1]*m[1] || 0) +
                    (this.#matrix[2]*m[2] || 0)
                ),
                (
                    (this.#matrix[3]*m[0] || 0) +
                    (this.#matrix[4]*m[1] || 0) +
                    (this.#matrix[4]*m[2] || 0)
                ),
                (
                    (this.#matrix[6]*m[0] || 0) +
                    (this.#matrix[7]*m[1] || 0) +
                    (this.#matrix[8]*m[2] || 0)
                )
            );
        }

        return new Mat3(
            (
                (this.#matrix[0]*m[0] || 0) +
                (this.#matrix[1]*m[3] || 0) +
                (this.#matrix[2]*m[6] || 0)
            ),
            (
                (this.#matrix[0]*m[1] || 0) +
                (this.#matrix[1]*m[4] || 0) +
                (this.#matrix[2]*m[7] || 0)
            ),
            (
                (this.#matrix[0]*m[2] || 0) +
                (this.#matrix[1]*m[5] || 0) +
                (this.#matrix[2]*m[8] || 0)
            ),

            (
                (this.#matrix[3]*m[0] || 0) +
                (this.#matrix[4]*m[3] || 0) +
                (this.#matrix[5]*m[6] || 0)
            ),
            (
                (this.#matrix[3]*m[1] || 0) +
                (this.#matrix[4]*m[4] || 0) +
                (this.#matrix[5]*m[7] || 0)
            ),
            (
                (this.#matrix[3]*m[2] || 0) +
                (this.#matrix[4]*m[5] || 0) +
                (this.#matrix[5]*m[8] || 0)
            ),

            (
                (this.#matrix[6]*m[0] || 0) +
                (this.#matrix[7]*m[3] || 0) +
                (this.#matrix[8]*m[6] || 0)
            ),
            (
                (this.#matrix[6]*m[1] || 0) +
                (this.#matrix[7]*m[4] || 0) +
                (this.#matrix[8]*m[7] || 0)
            ),
            (
                (this.#matrix[6]*m[2] || 0) +
                (this.#matrix[7]*m[5] || 0) +
                (this.#matrix[8]*m[8] || 0)
            ),
        );
    }

    /**
     * Set this vector's X and Y value
     * @param {Iterable<number>|...number} m
     * @return {this} Returns itself
     */
    set(...m) {
        if (m[0] && m[0][Symbol.iterator]) { m = [...m[0]]; }
        for (let i = 0; i < 9; ++i) {
            const value = +m[i];
            if (!(isNaN(value))) { this.#matrix[i] = value; }
        }
        return this;
    }

    /**
     * Calculate the difference between this matrix another matrix
     * @param {Iterable<number>} m
     * @return {Mat3} Difference matrix
     */
    sub(m) {
        m = [...m];
        return new Mat3(
            this[0][0] - m[0],
            this[0][1] - m[1],
            this[0][2] - m[2],
            this[1][0] - m[3],
            this[1][1] - m[4],
            this[1][2] - m[5],
            this[2][0] - m[6],
            this[2][1] - m[7],
            this[2][2] - m[8],
        );
    }
}

/**
 * Clamp a number between a minimum and a maximum
 * @function math.clamp
 * @param {number} n   - Number to clamp
 * @param {number} min
 * @param {number} max
 * @return {number} Clamped number between min and max
 * @global
 */
function clamp(n, min, max) {
    if (isNaN(min) || isNaN(max)) { return +n; }
    if (min > max) { [min, max] = [max, min]; }
    return math.min(max, math.max(min, n));
}

/**
 * Compute the circular distance between two angles
 * @function math.deltaAngle
 * @param {number} a - Angle in radians
 * @param {number} b - Angle in radians
 * @return {number} Circular distance between the two angles
 * @global
 */
function deltaAngle(a, b) {
    let d = math.abs(a - b);
    return math.min(d, math.TAU - d);
}

/**
 * Get a random number between a maximum and a minimum
 * NOTE: If no arguments are passed, the function behaves like math.random()
 * @function math.frand
 * @param {number} min - Inclusive
 * @param {number} max - Exclusive
 * @return {number} Random number between min and max
 * @global
 */
function frand(min, max) {
    min ||= 0;
    max ||= 0;
    if (!min && !max) { return math.random(); }
    if (min > max) { [min, max] = [max, min]; }
    return min + math.random()*(max - min);
}

/**
 * Get a random integer between a maximum and a minimum
 * NOTE: If no arguments are passed, the function randomly returns either 0 or 1
 * @function math.irand
 * @param {number} min - Inclusive
 * @param {number} max - Exclusive
 * @return {number} Random integer between min and max
 * @global
 */
function irand(min, max) {
    if (!min && !max) { return +(math.random() > 0.5); }
    return math.floor(math.frand(min, max));
}

/**
 * Linearly interpolate between two numbers
 * @function math.lerp
 * @param {number} a - Initial number
 * @param {number} b - Final number
 * @param {number} t - Interpolation ratio
 * @return {number} Interpolated number between a and b
 * @global
 */
function lerp(a, b, t) {
    return a*t + b*(1 - t);
};

/**
 * Round a number to a given place value
 * @function math.round
 * @param {number}  n    - Number to round
 * @param {number} [e=0] - Power of ten to round to
 * @return {number} Rounded number
 * @global
 */
function round(n, e) {
    if (!e || !Number.isInteger(e)) { return Math.round(n); }
    const exp = math.pow(10, e);
    return Math.round(n/e)*e;
};

math.Mat3       = Mat3;
math.Vec2       = Vec2;
math.Vec3       = Vec3;
math.TAU        = Math.PI*2;
math.clamp      = clamp;
math.deltaAngle = clamp;
math.frand      = frand;
math.irand      = irand;
math.lerp       = lerp;
math.round      = round;

export default math;
