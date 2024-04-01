// Initializes kaboom canvas
kaboom({
    width: 500, //set desired screen width
    height: 500, //set desired screen height
});

// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);