"use strict";

// WARNING: Please don't put any UNPREDICTABLE VALUES
// AND Don't OMIT variables
// AND Don't RENAME any variable/property.
// BECAUSE all of these can cause the game to get CORRUPTED :))))
// (LOL)

var CONFIG = {
  table: {
    // Size in cells
    cols: 10,
    rows: 16
  },
  pixel: {
    // Size in pixels
    size: 30
  },
  block: {
    /*
     * If you want that each block has it's own specific
     * color, make "staticColor" equal to true.
     */
    staticColor: true,
    /*
     * If you want to earn more money, and also play faster
     * make "fragile" equal to true.
     * Otherwise, your game will be harder. because it will
     * be harder to resolve the rows.
     */
    fragile: false
  },
  start: {
    /* Initial game values */
    lives: 5,
    speed: 1000, // in milliseconds. (less = more speed)
    text: "( Press enter to start )"
  },
  pause: {
    text: "- Paused -"
  },
  resume: {
    text: "Play!"
  },
  tryAgain: {
    text: "( Press enter to try again )"
  },
  over: {
    text: "- Game over -"
  },
  resolve: {
    /* The speed of resolving animation */
    speed: 50, // in milliseconds
    /* The price of each rows */
    price: 10 // in dollars
  },
  gravity: {
    // Speed & delay in milliseconds
    /* The delay & speed of gravity animation */
    speed: 100,
    delay: 200
  }
}