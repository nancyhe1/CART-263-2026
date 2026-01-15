/**
 * Task1
 * Nancy He
 * 
 */

"use strict";

function preload() {

}

function drawEllipse(x,y,w,h,r,g,b) {
    fill(r, g, b);
    ellipse(x, y, w, h);
}

/**
 * Draw circles
*/
function setup() {
createCanvas(600, 600);
background(0);

//Draw circles
drawEllipse(50, 50, 50, 50, 147, 112, 219);
drawEllipse(110, 110, 90, 90, 157, 0, 255);
drawEllipse(200, 200, 110, 110, 128, 0, 128);
}
