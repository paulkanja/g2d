import { $ABSTRACT } from "./_utils.js"
import signal        from "./signal.js"

/**
 * Base asset class
 * NOTE: Connecting to the load signal after the asset has loaded will immediately trigger the passed callback
 * @abstract
 * @global
 * @param {signal} load - Signal called by this class's instantiater when the relevant asset loads
 * 
 * @property {"ERROR"|"OK"|"PENDING"} status - @+readonly Current loading status
 * @property {signal}                 load   - @+const    SHADOW signal called when the asset is loaded
 */
class Asset {
    #load;
    #status;
    #loadData;

    get status() { return this.#status; }
    get load() { return this.#load; }

    constructor(load) {
        $ABSTRACT(this, Asset);

        this.#status = "PENDING";
        this.#load = signal.shadow(load);
        this.#load.connect(f => {
            if (this.#status !== "PENDING") {
                f(this.#status == "OK", ...this.#loadData);
            }
            return load.connect(f);
        });
        load.connect((status, ...data) => {
            this.#status = status ? "OK" : "ERROR";
            this.#loadData = data;
        });
    }
}

export default Asset;
