if (!(
    document
        .createElement("canvas")
        .getContext("2d") 
    instanceof CanvasRenderingContext2D
)) {
    // TODO: Fallback on DOM rendering
    throw new Error("CanvasRenderingContext2D not supported");
}

import Asset            from "./modules/asset.js";
import Canvas2DRenderer from "./modules/renderers/canvas2drenderer.js";
import Color            from "./modules/color.js";
import Drawable         from "./modules/gamenodes/drawable.js";
import Game             from "./modules/game.js";
import GameNode         from "./modules/gamenode.js";
import GameObject       from "./modules/gamenodes/gameobject.js";
import ImageAsset       from "./modules/assets/imageasset.js";
import InputManager     from "./modules/inputmanager.js";
import RenderStyle      from "./modules/renderstyle.js";
import Renderer         from "./modules/renderer.js";
import Scene            from "./modules/gamenodes/scene.js";
import Shape            from "./modules/gamenodes/shape.js";
import Sprite           from "./modules/gamenodes/sprite.js";
import Transform        from "./modules/transform.js";
import colors           from "./modules/colors.js";
import debug            from "./modules/debug.js";
import math             from "./modules/math.js";
import shapes           from "./modules/gamenodes/shapes.js";
import signal           from "./modules/signal.js";

export default {
    Asset,
    Canvas2DRenderer,
    Color,
    Drawable,
    Game,
    GameNode,
    GameObject,
    ImageAsset,
    InputManager,
    RenderStyle,
    Renderer,
    Scene,
    Shape,
    Sprite,
    Transform,
    colors,
    debug,
    math,
    shapes,
    signal
};
