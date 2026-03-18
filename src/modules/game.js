import Canvas2DRenderer from "./renderers/canvas2drenderer.js"
import InputManager     from "./inputmanager.js"
import Scene            from "./gamenodes/scene.js"
import signal           from "./signal.js"

/**
 * Game class
 * @global
 * @param {HTMLCanvasElement|HTMLElement} element
 * 
 * @property {InputManager} input         - @+const    Game input manager
 * @property {Scene|null}   scene         - @+readonly Currently active scene
 * @property {GameScreen}   screen        - @+readonly Game screen
 * @property {GameViewport} viewport      - @+readonly Game renderer viewport
 * @property {boolean}      autofocus     - Flag that determines whether the game automatically focuses when it starts
 * @property {boolean}      autoresizable - Flag that determines whether the game screen can automatically resize when its parent element resizes
 * @property {boolean}      initialized   - @+readonly Readonly flag that is true if the game has been initialized
 * @property {boolean}      noclear       - Flag that determines whether the game clears the screen before redrawing
 * @property {boolean}      resizable     - Flag that determines whether the game screen can resize (with a higher precedence than autoresizable)
 * @property {boolean}      running       - @+readonly Readonly flag that is true when the game is running
 * @property {signal}       error         - @+const SHADOW signal triggered when an error occurs
 * @property {signal}       init          - @+const SHADOW signal triggered when the game first starts
 * @property {signal}       resize        - @+const Signal triggered when the game resizes
 * @property {signal}       start         - @+const Signal triggered by the user to start the game
 * @property {signal}       update        - @+const SHADOW signal triggered whenever the game updates
 */
class Game {
    #canvas;
    #context;
    #currentScene;
    #renderer;
    #input;
    #MAX_DT;

    get input() { return this.#input; }

    get currentScene() { return this.#currentScene; }

    get screen() {
        const canvas = this.#canvas;
        return new class GameScreen {
            get width()  { return canvas.width; }
            get height() { return canvas.height; }
        }();
    }

    get viewport() {
        const renderer = this.#renderer;
        return new class GameViewport{
            get width()  { return renderer.width; }
            get height() { return renderer.height; }
        }();
    }

    // FLAGS
    #autofocus;
    #autoresizable;
    #initialized;
    #noclear;
    #resizable;
    #running;

    get autofocus()     { return this.#autofocus; }
    get autoresizable() { return this.#autoresizable; }
    get initialized()   { return this.#initialized; }
    get noclear()       { return this.#noclear; }
    get resizable()     { return this.#resizable; }
    get running()       { return this.#running; }

    set autofocus(value)     { this.#autofocus     = !!value; }
    set autoresizable(value) { this.#autoresizable = !!value; }
    set noclear(value)       { this.#noclear       = !!value; }
    set resizable(value)     { this.#resizable     = !!value; }

    // SIGNALS
    #_error;
    #_update;
    #error;
    #init;
    #start;
    #resize;
    #stop;
    #update;

    get error()  { return this.#error; }
    get init()   { return this.#init; }
    get start()  { return this.#start; }
    get resize() { return this.#resize; }
    get stop()   { return this.#stop; }
    get update() { return this.#update; }

    constructor(element) {
        let canvas;

        if (!(element instanceof HTMLElement)) {
            throw new TypeError(
                `Failed to construct '${this.constructor.name}': ` +
                `Value is not of type 'HTMLElement'.`
            );
        }

        this.#autofocus     = true;
        this.#autoresizable = false;
        this.#initialized   = false;
        this.#noclear       = false;
        this.#running       = false;
        this.#resizable     = true;

        const AUTORESIZE_SYMBOL = Symbol("autoresize");
        let AUTORESIZE_TIMEOUT = 150;
        let autoresizeTimeout = null;

        if (element instanceof HTMLCanvasElement) {
            canvas = this.#canvas = element;
        } else {{
            canvas = this.#canvas = document.createElement("canvas");
            const rect = element.getBoundingClientRect();
            canvas.width  = rect.width;
            canvas.height = rect.height;
            const resizeObserver = new ResizeObserver(() => {
                if (autoresizeTimeout) { clearTimeout(autoresizeTimeout); }
                autoresizeTimeout = setTimeout(() => {
                    const rect = element.getBoundingClientRect();
                    if (this.#autoresizable) {
                        this.#resize(rect.width, rect.height, AUTORESIZE_SYMBOL);
                    }
                }, AUTORESIZE_TIMEOUT);
            });
            resizeObserver.observe(element);
            this.#autoresizable = true;
            element.appendChild(canvas);
        }}
        canvas.tabIndex = 0;
        this.#context = canvas.getContext("2d");
        this.#context.imageSmoothingEnabled = false;

        this.#currentScene = null;
        this.#input = new InputManager(canvas);
        this.#renderer = new Canvas2DRenderer(canvas.width, canvas.height);
        this.#MAX_DT = 1000;

        this.#_error  = signal();
        const _init   = signal();
        this.#_update = signal();
        this.#error  = signal.shadow(this.#_error);
        this.#init   = signal.shadow(_init);
        this.#resize = signal();
        this.#start  = signal();
        this.#stop   = signal();
        this.#update = signal.shadow(this.#_update);
        this.#resize.connect((width, height, key) => {
            if (!this.#resizable) { return; }
            if (key === AUTORESIZE_SYMBOL) {
                canvas.width  = width;
                canvas.height = height;
                this.#renderer.resizeCanvas(canvas.width, canvas.height);
                return;
            }
            if (!this.#autoresizable && !key) {
                const rect = element.getBoundingClientRect();
                canvas.width  = rect.width;
                canvas.height = rect.height;
                this.#renderer.resizeCanvas(canvas.width, canvas.height);
                return;
            }
        });
        this.#start.connect((scene) => {
            if (!(scene instanceof Scene)) {
                this.#_error(new TypeError(
                    `Failed to start '${this.constructor.name}': ` +
                    "Value is not of type Scene"
                ));
                return signal.END;
            }
            if (scene !== this.#currentScene) {
                this.#stop(); // for propagation
                this.#currentScene = scene;
                scene.fetchAssets();
            }
            this.#running = true;
            if (!this.#initialized) {
                this.#initialized = true;
                _init(this);
                if (this.#autofocus) { this.#canvas.focus(); }
            }
            window.requestAnimationFrame(
                t => window.requestAnimationFrame(_t => this.#main(_t, _t - t))
            );
        });
        this.#stop.connect(() => {
            this.#running = false;
        });
    }

    #main(t, dt) {
        try {
            if (dt > this.#MAX_DT) { dt = this.#MAX_DT; }
            this.#_update(dt);
            this.#render();
            if (this.#running) {
                window.requestAnimationFrame(_t => this.#main(_t, _t - t));
            }
        } catch (e) {
            this.#_error(e);
        }
    }


    #render() {
        if (!this.#noclear) {
            this.#canvas.width = this.#canvas.width; // cheeky screen clear
        }
        const image = this.#renderer.render(this.currentScene, this.#noclear);
        this.#context.drawImage(
            image, 0, 0, this.#canvas.width, this.#canvas.height
        );
    }
}

export default Game;
