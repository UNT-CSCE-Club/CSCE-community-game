// Initializes kaboom canvas
kaboom({
    width: 500, // desired screen height
    height: 500, // desired screen height
    // If you don't define size, the game will be full screen or 
    // take up the max size of its canvas element defined in css.

    font: "sans-serif", // Default font of game

    // Tells Kaboom where to put your game in the html document. You don't need this, but it helps with formatting your web page.
    canvas: document.getElementById("game-canvas"), 

    background: [0, 0, 0], // rgb background color
});

// Add a piece of text at position (10, 10)
// Coordinates start from top left at (0, 0). 
// Bottom right is (maxWidth, maxHeight).
add([
    text("Greetings, traveler!", {
        size: 24, // text is 24px tall
        width: 120, // max width of text before wrapping to next line
        font: "Helvetica", // specific text font (any loaded or browser builtin)
    }),
    pos(10, 10), // position of element
    color(0, 200, 255), // color of element
]);