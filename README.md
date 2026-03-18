# g2d

[g2d](https://paulkanja.github.io/g2d/) is a simple JS 2D game engine I am working on as a hobby. Feel free to use the project as you wish, although it is far from being production ready.

## Example
```html
<body>
    <style>
    body {
        border:  0;
        margin:  0;
        padding: 0;
        overflow: hidden;
    }
    </style>
    <script type="module">
    import g2d from "g2d.js";

    const game = new g2d.Game(document.body);
    game.autofocus = false;

    const BALL_COUNT    = 40;
    const BALL_RADIUS   = 20;
    const BALL_SPEED    = 300;
    const SPAWN_PADDING = 40;

    const mainScene = new g2d.Scene("Main Scene");
    mainScene.background.fill = new g2d.Color(34, 34, 34); // #222

    class Ball extends g2d.shapes.Circle {
        direction;

        constructor(parent, name) {
            super(name, BALL_RADIUS);
            parent.addChild(this);
            this.direction = new g2d.math.Vec2(
                g2d.math.frand(-0.125, 0.125) + 0.5*(g2d.math.irand()*2 - 1),
                g2d.math.frand(-0.125, 0.125) + 0.5*(g2d.math.irand()*2 - 1),
            ).norm();
            this.transform.setPosition(
                g2d.math.irand(BALL_RADIUS + SPAWN_PADDING, game.viewport.width  - BALL_RADIUS - SPAWN_PADDING),
                g2d.math.irand(BALL_RADIUS + SPAWN_PADDING, game.viewport.height - BALL_RADIUS - SPAWN_PADDING),
            );
            this.style.fill = g2d.Color.randomHue();
        }
    }

    const balls = [];
    for (let i = 0; i < BALL_COUNT; ++i) {
        balls.push(new Ball(mainScene, `Ball ${i + 1}`));
    }

    game.update.connect((dt) => {
        for (let i = 0; i < balls.length; ++i) {
            const ball = balls[i]
            if (!i) {
                ball.velocity = ball.direction.clone().scale(BALL_SPEED*dt/1000);
            }
            ball.transform.translate(ball.velocity);
            let position = ball.transform.getPosition();

            if (position.x - BALL_RADIUS <= 0) {
                ball.transform.setPosition(BALL_RADIUS, NaN);
                ball.direction.x *= -1;
                ball.style.fill = g2d.Color.randomHue();
            } else if (position.x + BALL_RADIUS >= game.viewport.width) {
                ball.transform.setPosition(game.viewport.width - BALL_RADIUS, NaN);
                ball.direction.x *= -1;
                ball.style.fill = g2d.Color.randomHue();
            }
            if (position.y - BALL_RADIUS <= 0) {
                ball.transform.setPosition(NaN, BALL_RADIUS);
                ball.direction.y *= -1;
                ball.style.fill = g2d.Color.randomHue();
            } else if (position.y + BALL_RADIUS >= game.viewport.height) {
                ball.transform.setPosition(NaN, game.viewport.height - BALL_RADIUS);
                ball.direction.y *= -1;
                ball.style.fill = g2d.Color.randomHue();
            }

            for (let j = i + 1; j < balls.length; ++j) {
                const other = balls[j];
                if (!i) {
                    other.velocity = other.direction.clone().scale(BALL_SPEED*dt/1000);
                }
                const diff = position.clone().sub(other.transform.getPosition());
                const distance = diff.abs;

                if (distance > 0 && distance < 2*BALL_RADIUS) {
                    const normal = diff.clone().scale(1/distance);
                    const rvelocity = ball.velocity.clone().sub(other.velocity);
                    const normalCoeff = normal.dot(rvelocity);

                    if (normalCoeff > 0) { continue; }

                    const impulse = normal.clone().scale(2*normalCoeff);

                    ball.direction  = ball.velocity.sub(impulse).norm();
                    other.direction = other.velocity.add(impulse).norm();

                    const overlap = 2*BALL_RADIUS - distance;
                    diff.scale(overlap/distance/2);
                    ball.transform.translate(diff);
                    other.transform.translate(diff.scale(-1));

                    ball.style.fill = g2d.Color.randomHue();
                    other.style.fill = g2d.Color.randomHue();
                }
            }
        }
    });

    game.error.connect((error) => { throw error; });
    game.start.connect((scene) => { g2d.debug.logNodeTree(scene) });

    game.start(mainScene);
    </script>
</body>
```

## Source Code

[GitHub](https://github.com/paulkanja/g2d)
