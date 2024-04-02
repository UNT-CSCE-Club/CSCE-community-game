kaboom({
    width: 700,
    height: 500, 
});

loadSprite("logo", "./sprites/CS_Logo.png");
loadSprite("background", "./sprites/computer_chip_background.jpg");

// Load multiple sprites from an array
//
// If you get photos from the internet, it can be difficult to scale them if they are a wide variety of sizes. 
// Reid scaled all of these images down to be the same size in Google Drawings, which is a great tool. 
// If you make your own sprites, make sure to pay attention to their sizes.
//
const obstacles = [
    "python",
    "rust",
    "javaScript",
    "c++",
    "html",
    "css",
    "java",
];
obstacles.forEach((spr) => {
    loadSprite(spr, `./sprites/${spr}Sprite.png`);
});

// Main game scene
scene("main", () => { 
    const gravity = 1600;
    const jumpForce = 800;
    const obstacleSpeed = 500;
    let gameOver = false;

    const background = add([
        sprite("background"),
        pos(center()),
        anchor("center"),
        scale(1),
        fixed(), // Holds the background in place, even if the camera moves
    ]);

    // This scales the image so it fills the entire screen. 
    //
    // 553 and 311 are height and width values of the image. 
    // You can find the height and width of an image here: https://www.posterburner.com/Image-Size-Finder.aspx
    //
    // There is an annoying way to dynamically scale any image with some code using new Image(); 
    // however, for this simple example, we will just stick with this.
    // Also, if you don't plan to change your background, this works fine!
    //
    background.scaleTo(Math.max(
        width() / 311,
        height() / 553,
    ));

    setGravity(gravity); // Sets gravity at 1600 px/sec

    // Add floor rectangle
    const floorHeight = 48;
    add([
        rect(width(), floorHeight),
        color(0, 155, 255), 
        area(),
        pos(0, height() - floorHeight),
        body({isStatic: true}), // Ensures the rect cannot be pushed or passed through by other objects
    ]);

    // Add boundary rectangle off left of screen
    add([
        rect(1, height()),
        area(),
        pos(-2, 0),
        body({isStatic: true}),
        "bounds",
    ]);

    // Increase obstacle spawnrate as time increases
    let upperTimeBoundary = 3.5;
    let lowerTimeBoundary = 2.5;
    loop(5, () => { // loop every 5 seconds
        upperTimeBoundary -= 0.15;
        lowerTimeBoundary -= 0.15; 
    });

    // Spawn an obstacle, wait a bit, then do it again
    function spawnObstacle() {
        add([
            pos(width() + 120, height() - floorHeight - 38),
            sprite(choose(obstacles)),
            anchor("center"),
            scale(rand(0.15, 0.30)),
            area(),
            body({isStatic: true}), 
            move(LEFT, obstacleSpeed), // move constantly to the left
            lifespan(2), // how long the obstacle exists for
            "obstacle", // tags the obstacle so it can be located
        ]);

        if (!gameOver) {
            wait(rand(lowerTimeBoundary, upperTimeBoundary), spawnObstacle);
        }
    }
    spawnObstacle();

    // Track score based on how many frames have passed
    let score = 0;
    const scoreText = add([
        text(`Score: ${score}`),
        pos(20, 20),
    ]);

    // onUpdate is called every frame
    onUpdate(() => {
        if (!gameOver) {
            score++;
            scoreText.text = score;
        }
    });

    // Add CS logo
    const CSlogo = add([
        sprite("logo"),
        pos(width() / 5, height() - floorHeight),
        scale(0.5),
        anchor("center"), 
        area(), // Necessary for collisions
        body(), // Necessary to respond to gravity
    ]);

    let jumpCount = 0;
    onKeyPress("space", () => {
        if (gameOver) {
            go("main");
        } else if (CSlogo.isGrounded()) {
            CSlogo.jump(jumpForce);
            jumpCount = 1;
        } else if (jumpCount < 2) {
            CSlogo.jump(jumpForce * 0.75);
            jumpCount++;
        }
    });

    // End game if CS logo goes off screen
    CSlogo.onCollide("bounds", () => {
        shake(); // Builtin function that shakes the screen
        add([
            text("Game Over\n\nPress space to play again"),
            pos(center()),
            anchor("center"),
            "loseText",
        ]);
        gameOver = true;
    });
});

// Start "main" scene
go("main");