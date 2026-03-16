if (!(
    document
        .createElement("canvas")
        .getContext("2d") 
    instanceof CanvasRenderingContext2D
)) {
    // TODO: Fallback on DOM rendering
    throw new Error("CanvasRenderingContext2D not supported");
}

import Canvas2DRenderer from "./modules/renderers/canvas2drenderer.js";
import Color            from "./modules/color.js";
import Game             from "./modules/game.js";
import GameNode         from "./modules/gamenode.js";
import GameObject       from "./modules/gamenodes/gameobject.js";
import InputManager     from "./modules/inputmanager.js";
import RenderStyle      from "./modules/renderstyle.js";
import Renderer         from "./modules/renderer.js";
import Scene            from "./modules/gamenodes/scene.js";
import Shape            from "./modules/gamenodes/shape.js";
import Transform        from "./modules/transform.js";
import colors           from "./modules/colors.js";
import debug            from "./modules/debug.js";
import math             from "./modules/math.js";
import shapes           from "./modules/gamenodes/shapes.js";
import signal           from "./modules/signal.js";

export default {
    Canvas2DRenderer,
    Color,
    Game,
    GameNode,
    GameObject,
    InputManager,
    RenderStyle,
    Renderer,
    Scene,
    Shape,
    Transform,
    colors,
    debug,
    math,
    shapes,
    signal
};
