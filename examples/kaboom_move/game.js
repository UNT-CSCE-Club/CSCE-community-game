kaboom({
    width: 500,
    height: 500,
    background: [0, 0, 0],
});

// Load sprite image from files
loadSprite("logo", "./sprites/CS_Logo.png");

// Create a default scene
// scenes are useful if you ever need to change a lot of things 
// at once, i.e. a menu/settings/new area/etc.
scene("main", () => {
    // Add custom loaded sprite
    const CSlogo = add([
        sprite("logo"),
        pos(center()), // center() gets center of game canvas
        scale(0.5),
        anchor("center"), // sprite position will now be based off center of sprite image instead of top left corner of sprite image
        {
            speed: 90000, // can store custom variables in objects
        }
    ]);

    // width() height() return width and height of game canvas
    // dt() returns delta time. You'll have to define a high speed val, but it 
    // ensures movement always corresponds to elapsed time and not frame rate
    onKeyDown("w", () => {
        if (CSlogo.pos.y > 0) {
            CSlogo.move(0, -CSlogo.speed * dt());
        } else {
            CSlogo.moveTo(center());
        }
    });
    onKeyDown("a", () => {
        if (CSlogo.pos.x > 0) {
            CSlogo.move(-CSlogo.speed * dt(), 0);
        } else {
            CSlogo.moveTo(center());
        }
    });
    onKeyDown("s", () => {
        if (CSlogo.pos.y < height()) {
            CSlogo.move(0, CSlogo.speed * dt());
        } else {
            CSlogo.moveTo(center());
        }
    });
    onKeyDown("d", () => {
        if (CSlogo.pos.x < width()) {
            CSlogo.move(CSlogo.speed * dt(), 0);
        } else {
            CSlogo.moveTo(center());
        }
    });
    onClick(() => {
        console.log("Clicked");
        CSlogo.moveTo(mousePos());
    });
});

// Start "main" scene
go("main");