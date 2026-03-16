import Canvas2DRenderer from "./renderers/canvas2drenderer.js"
import InputManager     from "./inputmanager.js"
import Scene            from "./gamenodes/scene.js"
import signal           from "./signal.js"

/**
 * Game class
 * @global
 * @param {HTMLCanvasElement|HTMLElement} element
 * 
 * @property {InputManager} input    - @+const Game input manager
 * @property {Scene}        scene    - @+readonly Currently active scene
 * @property {GameScreen}   screen   - @+readonly Game screen
 * @property {GameViewport} viewport - @+readonly Game renderer viewport
 * @property {signal}       init     - @+const Init SHADOW signal, triggered when the game first starts
 * @property {signal}       resize   - @+const Resize signal, triggered when the game resizes
 * @property {signal}       start    - @+const Start signal, triggered to start the game
 * @property {signal}       update   - @+const Update SHADOW signal, triggered whenever the game updates
 */
class Game {
    #canvas;
    #context;
    #scenes;
    #currentScene;
    #renderer;
    #input;
    #MAX_DT;

    get input() { return this.#input; }

    get currentScene() { return this.#scenes[this.#currentScene]; }

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
    #autoresize;
    #initialized;
    #running;

    // SIGNALS
    #_update;
    #init;
    #start;
    #resize;
    #stop;
    #update;

    get init()   { return this.#init; }
    get start()  { return this.#start; }
    get resize() { return this.#resize; }
    get stop()   { return this.#stop; }
    get update() { return this.#update; }

    constructor(element) {
        let canvas;

        this.#autoresize = false;
        const AUTORESIZE_SYMBOL = Symbol("autoresize");
        let AUTORESIZE_TIMEOUT = 150;
        let autoresizeTimeout = null;

        if (!(element instanceof HTMLElement)) {
            throw new TypeError(
                `Failed to construct '${this.constructor.name}': ` +
                `Value is not of type 'HTMLElement'.`
            );
        }
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
                    this.#resize(rect.width, rect.height, AUTORESIZE_SYMBOL);
                }, AUTORESIZE_TIMEOUT);
            });
            resizeObserver.observe(element);
            this.#autoresize = true;
            element.appendChild(canvas);
        }}
        canvas.tabIndex = 0;
        this.#context = canvas.getContext("2d");
        this.#context.imageSmoothingEnabled = false;

        this.#scenes = [new Scene()];
        this.#currentScene = 0;
        this.#input = new InputManager(canvas);
        this.#renderer = new Canvas2DRenderer(canvas.width, canvas.height);
        this.#MAX_DT = 1000;

        this.#initialized = false;
        this.#running     = false;

        const _init   = signal();
        // const _resize = this.#_resize = signal();
        const _update = this.#_update = signal();
        this.#init   = signal.shadow(_init);
        this.#resize = signal();
        this.#start  = signal();
        this.#stop   = signal();
        this.#update = signal.shadow(_update);
        this.#resize.connect((width, height, key) => {
            if (this.#autoresize && key === AUTORESIZE_SYMBOL) {
                canvas.width  = width;
                canvas.height = height;
                this.#renderer.resizeCanvas(canvas.width, canvas.height);
                return;
            }
            if (!this.#autoresize && !key) {
                const rect = element.getBoundingClientRect();
                canvas.width  = rect.width;
                canvas.height = rect.height;
                this.#renderer.resizeCanvas(canvas.width, canvas.height);
                return;
            }
        })
        this.#start.connect(() => {
            this.#running = true;
            if (!this.#initialized) {
                this.#initialized = true;
                _init(this);
                this.#canvas.focus();
            }
            window.requestAnimationFrame(t => this.#main(t, 16.6667));
        });
        this.#stop.connect(() => {
            this.#running = false;
        });
    }

    #main(t, dt) {
        if (dt > this.#MAX_DT) { dt = this.#MAX_DT; }
        this.#_update(dt);
        this.#render();
        if (this.#running) {
            window.requestAnimationFrame(_t => this.#main(_t, _t - t));
        }
    }


    #render() {
        this.#canvas.width = this.#canvas.width; // cheeky screen clear
        const image = this.#renderer.render(this.currentScene);
        this.#context.drawImage(
            image, 0, 0, this.#canvas.width, this.#canvas.height
        );
    }
}

export default Game;
