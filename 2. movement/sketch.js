let r, g, b; // declares variables

function setup() { // you only need to do this once
  createCanvas(500, 500); // creates space
  rectMode(CENTER); // rectangle position is defined by its center
  }
  
  function draw(){ // draw function
  r = random(255); // set variable r to 255
  g = random(255); // set variable g to 255
  b = random(255); // set variable b to 255
    noStroke(); // gets rid of shape outlines
    fill(255); // sets the fill to white
    rect(mouseX, mouseY, random(15, 40)); // places rectangle at cursor position, also randomises rectangle size
  }
  
  function mousePressed() { // when the mouse is pressed..
   background (r, g, b); // change the background to a random colour
  
  } 