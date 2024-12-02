let rectX = [-60, -45, -30, -15, 0, 15, 30, 45, 60, 75]; // save y coords
let rectY = [-60, -45, -30, -15, 0, 15, 30, 45, 60, 75]; // save y coords
let speeds = [2, 5, 3, 10, 5.5, 15, 10.5, 20, 15.5, 25]; // sets the acceleration of the individual shapes
let speed = 10; // sets the speed of the shapes falling down

function setup() {
createCanvas(800, 400); // creates the background
noStroke(); // gets rid of lines on shapes
rectMode(CENTER); // draws the rectangles in the center of the canvas
textSize(32);
textAlign(LEFT, TOP);
}

function draw() {
    noStroke(); // gets rid of outlines for shapes
    background(0); // changes the background to black
    
fill(255, 100, 20)
    for (let i = 0; i < rectY.length; i++) { // creates forloop - increments variable 'i' until 'i' is less than or equal to 100
        let x = (i+1)*75;
        let y = rectY[i]+speed; // sets the speed of the rectangles
        circle(x, y, 450); // changes rectangles to circles, and places them 
        // wrap movement
        if(y>=height){
            y = 0;
    }
    rectY[i] = y;
    // Or could use modulus '%' to wrap movement
    // rectY[i] = (y) % height;

}
fill(255, 150, 50, 255); // sets pumpkin colour
circle(400, 200, 350); // creates circle

fill(0, 0, 0, 255);
triangle(400, 255, 425, 255, 415, 215); // pumpkin nose

fill(0, 0, 0, 255);
triangle(330, 80, 350, 150, 280, 145); // left eye

fill (0, 0, 0, 255);
triangle(500, 80, 520, 150, 450, 145); // right eye

fill(0, 0, 0, 255);
triangle(400, 350, 250, 250, 525, 300); // mouth

fill(255, 150, 50, 255);
square(330, 270, 30) // tooth

fill(255, 150, 50, 255);
square(440, 330, 30) // tooth

fill(100, 255, 80);
triangle(390, 1, 350, 40, 420, 40) // pumpkin stalk

fill (255);
text("Happy Halloween", 10, 10); // 10 pixels padding from left
}

