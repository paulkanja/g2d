# g2d

[g2d](https://paulkanja.github.io/g2d/) is a simple JS 2D game engine I am working on as a hobby. Feel free to use the project as you wish, although it is far from being production ready.

## Example
```html
<body>
    <script type="module">
    import g2d from "g2d.js"

    const game = new g2d.Game(document.body);

    game.currentScene.background.fill = g2d.colors.GRAY;

    const rect = new g2d.shapes.Rect("Red Rect", 90, 60);
    rect.transform.setPosition(game.viewport.width/2, game.viewport.height/2);
    rect.style.fill = g2d.colors.RED;
    game.currentScene.addChild(rect);

    const c1 = new g2d.shapes.Circle("Green Circle", 20);
    c1.transform.setPosition(-15, 0);
    c1.style.fill = g2d.colors.GREEN;
    rect.addChild(c1);
    const c2 = new g2d.shapes.Circle("Blue Circle", 20);
    c2.transform.setPosition(15, 0);
    c2.style.fill = g2d.colors.BLUE;
    rect.addChild(c2);

    game.resize.connect(() => rect.transform.setPosition(
        game.viewport.width/2, game.viewport.height/2
    ));

    game.update.connect((dt) => rect.transform.rotate(dt/1000));

    g2d.debug.logNodeTree(game.currentScene);
    game.start();
    </script>
</body>
```

## Source Code

[GitHub](https://github.com/paulkanja/g2d)
