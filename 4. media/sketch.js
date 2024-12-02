let img1, img2, img3, bg; // declares variable for images
let currentImg = 0; // variable to track which image is displayed
let voice;

function preload() {
    // load images
    img1 = loadImage('heavy_drool.png');
    img2 = loadImage('heavy_angry.png');
    img3 = loadImage('heavy_grin.png');
    bg = loadImage('map.png');

    voice = loadSound("voice.wav")
}

function setup() {
    createCanvas(800, 600); // set canvas size
}

function draw() {
    // sets background image
    image(bg, 0, 0, width, height); // draw background to whole canvas

    // draw center heavy
    let x = width / 2 - 150; // centering the image horizontally
    let y = height / 2 - 150; // centering the image vertically

    if (currentImg === 0) {
        image(img1, x, y, 200, 200); // draw heavy1
    } else if (currentImg === 1) {
        image(img2, x, y, 200, 200); // draw heavy2
    } else if (currentImg === 2) {
        image(img3, x, y, 200, 200); // draw heavy3
    }

    fill(255);
    text('click me ↓↓↓↓↓↓↓', 325, 135, 50, 50) // displays "click me"
}

function mousePressed() {
    // update the current image index and sound when the mouse is clicked
    currentImg = (currentImg + 1) % 3; // cycle through the heavies.

    // play the voice sound
    if (voice.isPlaying()) {
        voice.stop(); // stop any previous voice that might still be playing
    }
    voice.play(); // play the new sound
}