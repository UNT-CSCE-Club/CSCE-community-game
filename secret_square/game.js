kaboom({
    width: 700,
    height: 500, 
    background: [0, 0, 0],
});

scene("main", () => { 

    const colors = {
        red: rgb(255, 0, 0),
        green: rgb(0, 255, 0),
        blue: rgb(0, 111, 255),
        yellow: rgb(255, 255, 0),
        purple: rgb(127, 0, 255),
        orange: rgb(255, 158, 54),
    };

    function compareColors(color1, color2) {
        return color1.r == color2.r && color1.g == color2.g && color1.b == color2.b;
    }

    const squareSize = 30;
    const apothem = squareSize / 2;
    let lockMovement = false;

    const firstColor = choose(Object.values(colors));
    const secretSquare = add([
        rect(squareSize, squareSize),
        color(firstColor),
        outline(2, rgb(0, 0, 0)),
        pos(squareSize, height() / 2),
        anchor("center"),
        z(1), // layered on top
        area(),
        {
            speed: 200,
        },
        "secretSquare",
    ]);

    secretSquare.onCollideUpdate("obstacle", (obs) => {
        if (compareColors(secretSquare.color, obs.color)) {
            lockMovement = false;
            secretSquare.outline.color = rgb(0, 0, 0);
        } else {
            secretSquare.outline.color = secretSquare.color;
            lockMovement = true;
        }
    });

    onCollideEnd("secretSquare", "obstacle", (square) => {
        secretSquare.outline.color = square.color;
    });

    onKeyDown("w", () => {
        secretSquare.color = colors.red;
        secretSquare.outline.color = secretSquare.color;
    });
    onKeyDown("s", () => {
        secretSquare.color = colors.green;
        secretSquare.outline.color = secretSquare.color;
    });
    onKeyDown("d", () => {
        secretSquare.color = colors.blue;
        secretSquare.outline.color = secretSquare.color;
    });
    onKeyDown("e", () => {
        secretSquare.color = colors.orange;
        secretSquare.outline.color = secretSquare.color;
    });
    onKeyDown("r", () => {
        secretSquare.color = colors.yellow;
        secretSquare.outline.color = secretSquare.color;
    });
    onKeyDown("f", () => {
        secretSquare.color = colors.purple;
        secretSquare.outline.color = secretSquare.color;
    });

    onKeyDown("up", () => {
        if (secretSquare.pos.y > 0 + apothem) {
            secretSquare.move(0, -secretSquare.speed);
        }
    });
    onKeyDown("left", () => {
        if (secretSquare.pos.x > 0 + apothem && !lockMovement) {
            secretSquare.move(-secretSquare.speed, 0);
        }
    });
    onKeyDown("down", () => {
        if (secretSquare.pos.y < height() - apothem) {
            secretSquare.move(0, secretSquare.speed);
        }
    });
    onKeyDown("right", () => {
        if (secretSquare.pos.x < width() - apothem && !lockMovement) {
            secretSquare.move(secretSquare.speed, 0);
        }
    });

    let obstaclePos = squareSize * 3;
    let lastColor = secretSquare.color; 
    function createObstacle() {
        const obstWidth = rand(apothem, squareSize * 2.5);
        let obstColor = choose(Object.values(colors));
        while (obstColor == lastColor) {
            obstColor = choose(Object.values(colors));
        }

        add([
            rect(obstWidth, height()),
            pos(obstaclePos, 0),
            color(obstColor),
            z(0),
            area(),
            "obstacle",
        ]);

        obstaclePos += obstWidth + squareSize + 10;
        lastColor = obstColor;
        if (obstaclePos <= width() - squareSize * 3) {
            createObstacle();
        }
    }
    createObstacle();

    add([
        rect(1, height()),
        pos(width() - 1, 0),
        color(0, 0, 0),
        area(),
        "endzone",
    ]);

    secretSquare.onCollide("endzone", () => {
        go("main");
    });
});

go("main");