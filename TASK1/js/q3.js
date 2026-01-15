/**
 * Task1
 * Nancy He
 * Question #3
 */

"use strict";

let rect1 = {
    x: 20,
    y: 20,
    w: 70,
    h: 70,
    speed: 5,
    r: 218,
    g: 112,
    b: 214
}

let rect2 = {
    x: 30,
    y: 30,
    w: 70,
    h: 70,
    speed: 3,
    r: 0,
    g: 255,
    b: 255
}

let rect3 = {
    x: 20,
    y: 20,
    w: 70,
    h: 70,
    speed: 5,
    r: 121,
    g: 230,
    b: 121
}

function setup() {
    createCanvas(600, 600);
    noStroke();
}

function draw() {
    background(0);  // Clear the canvas

    // Draw all rectangles every frame
    drawRectangle(rect1.x, rect1.y, rect1.w, rect1.h, rect1.r, rect1.g, rect1.b);
    drawRectangle(rect2.x, rect2.y, rect2.w, rect2.h, rect2.r, rect2.g, rect2.b);
    drawRectangle(rect3.x, rect3.y, rect3.w, rect3.h, rect3.r, rect3.g, rect3.b);

    // Update rect3's position
    rect3.y += rect3.speed;
    if (rect3.y > height) {
        rect3.y = 0;  // Reset to top when reaching bottom
    }
    rect3.x = rect1.x;
}

function mousePressed() {
    // Increment rect1's position when mouse is pressed
    rect1.x += rect2.speed;
    rect1.y += rect2.speed;
}

function keyPressed() {
    // Increment rect2's position when spacebar is pressed
    if (key === ' ') {
        rect2.x += 1;
        rect2.y += 1;
    }
}

function drawRectangle(x, y, w, h, r, g, b) {
    fill(r, g, b);
    rect(x, y, w, h);
}
