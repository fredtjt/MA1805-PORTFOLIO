let bubbles = []; // creates an array to store bubble objects

function setup() { // setup function
    createCanvas(400, 400); // creates a space 400 pixels high and 400 wide
    noStroke(); // deletes outlines in shapes

    // create a couple bubbles first
    for (let i = 0; i < 5; i++) { // makes loop that runs 5 times, starting at 0 and increasing by 1 each time until it reaches 5
        createBubble(); // creates bubbles
    }
}

function draw() { // draw function
    background(220); // sets background colour 
    for (let i = 0; i < bubbles.length; i++) { // this loop goes through each bubble in the array 
        bubbles[i].display(); // and displays them
    }
}

function mousePressed() {
    // check for collision with bubbles on mouse click
    for (let i = bubbles.length - 1; i >= 0; i--){
        let d = dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y);
        if (d < bubbles[i].r) {
            // pop the bubble by removing it from the array
            bubbles.splice(i, 1);
            // creates a new bubble
            createBubble();
            break; // exit the loop once a bubble is popped
        }
    }
}

// custom function to create a new bubble at a random position
function createBubble() {
    let bubble = {
        x: random(width), // random width
        y: random(height), // random height
        r: random (15, 45), // random radius
        display: function() {
            fill(100, 100, 255, 150); // sets colour to blue
            ellipse(this.x, this.y, this.r * 2, this.r * 2); // draw the bubble
        }
    };
    bubbles.push(bubble); // adds the bubble to the array
}