/**
 * Create a signal
 * @function signal
 * @return {signal} signal
 * @global
 * @property {Symbol} END - If a listener returns this, the signal stops propagating
 * @example
 * const sgn = signal();
 * sgn.connect((message) => console.log(message));
 * sgn("Hello, World");
 */
function signal() {
    const _fs = new Set();
    const s = (...data) => {
        for (const f of _fs) {
            if (f(...data) === signal.END) { break; }
        }
    };

    Object.defineProperty(s, "connect", {
        value: f => {
            if (typeof f !== "function") { return false; }
            _fs.add(f);
            return true;
        }
    });

    Object.defineProperty(s, "disconnect", {
        value: f => {
            if (typeof f !== "function") { return false; }
            _fs.delete(f);
            return true;
        }
    });

    return s;
}

/**
 * Create a composite signal that triggers whenever any of its component
 * signals triggers
 * @function signal.any
 * @param {...signal} signals
 * @return {signal} Composite signal
 * @global
 * @example
 * const sgn1 = signal(),
 *       sgn2 = signal(),
 *       sgn3 = signal();
 * const anysgn = signal.any(sgn1, sgn2, sgn3);
 * anysgn.connect((message) => console.log(`ANYSGN: ${message}`));
 * sgn1("Hello from SGN1"); // Prints "ANYSGN: Hello from SGN1"
 * sgn2("Hello from SGN2"); // Prints "ANYSGN: Hello from SGN2"
 * sgn3("Hello from SGN3"); // Prints "ANYSGN: Hello from SGN3"
 */
signal.any = function any(...signals) {
    const signal = this();
    const f = (...data) => { signal(...data); }
    for (const s of signals.filter(signal => this.isSignal(signal))) {
        s.connect(f);
    }
    return signal;
};

signal.END = Symbol("END");

/**
 * Check if a value is a signal
 * @function signal.isSignal
 * @param {any} value
 * @return {boolean} True if the value is a signal
 * @global
 */
signal.isSignal = function isSignal(value) {
    return (
        typeof value             === "function" &&
        typeof value?.connect    === "function" &&
        typeof value?.disconnect === "function"
    );
};

/**
 * Shadow a signal, returning an version of the signal that does not trigger
 * listeners when called
 * @function signal.shadow
 * @param {signal} signal
 * @return {signal} Shadow of the original signal
 * @global
 * @example
 * const shadow = signal.shadow(sgn);
 * shadow.connect((message) => console.log(message));
 * shadow("Hello from the shadows!"); // Does not print
 * sgn("Hello from the shadows!");    // Prints
 */
signal.shadow = function shadow(signal) {
    const shadow = () => {};
    Object.defineProperty(shadow, "connect", {
        value: f => signal.connect(f)
    });
    Object.defineProperty(shadow, "disconnect", {
        value: f => signal.disconnect(f)
    });
    return shadow;
};

export default signal;
