var im_car_green;
var im_car_red;
var im_boom;
var im_heart;
var font;
var policeVan,police;

var playerSpeed = 6;
var ridersA = [];
var runBlocksA = [];//
var score = 0;
var lives = 5;

function preload() {
    im_car_green = loadImage('assets/Car_Green.png');
    im_car_red = loadImage('assets/Car_Red.png');
    im_boom = loadImage('assets/boom.png');
    im_heart = loadImage('assets/heart.png');
    font = loadFont('assets/8-bit.ttf');
    policeVan=loadImage('assets/policecar.png');
  
}

function setup() {
    createCanvas(1000, 600);

    runBlocksA.push(new RunBlocks());//
    ridersA.push(new Riders());
    police = new Police();
}

function draw() {
    background(44, 44, 44);

    if (frameCount % 60 === 0) {
        runBlocksA.push(new RunBlocks());
    }
    // Show road markings
    for (var i = runBlocksA.length - 1; i >= 0; i--) {
        runBlocksA[i].show();
        runBlocksA[i].move();
        // Remove road markings once the are off the screen
        if (runBlocksA[i].offscreen()) {
            runBlocksA.splice(i, 1);
        }
    }

    // Show the police
    police.show();
    police.move();

    // New riders appear after certain number of frames
    if (frameCount % 180 === 0) {
        ridersA.push(new Riders());
    }

    // Show riders
    for (var i = ridersA.length - 1; i >= 0; i--) {
        ridersA[i].show();
        ridersA[i].move();
        ridersA[i].slowfast();//slowdown or go fast

        if (ridersA[i].crossOver(runBlocksA[i]) && ridersA[i].isCrossed === false) {
            score += 10;
            ridersA[i].isCrossed = true;
        }

        for (let j=0;j<runBlocksA.length;j++){
        // If riders collide with the roadblocks, they get destroyed
            if (ridersA[i].hits(runBlocksA[j])) {
            // Penalty for collision is -10, and you loose one life
                score = (score >= 10) ? (score - 10) : 0;
                lives--;
        
                ridersA[i].boom();
                ridersA.splice(i, 1);
            } else if (ridersA[i].offscreen()) {// Remove opponents once the are off the screen
                ridersA.splice(i, 1);
            }
        }
    }

    // Game controls
    for (i=0;i<ridersA.length;i++){
        if (keyIsDown(LEFT_ARROW)) {
            ridersA[i].turnLeft();
        }
        if (keyIsDown(RIGHT_ARROW)) {
            ridersA[i].turnRight();
        }
    }
    // Show player stats
    textSize(40);
    textFont(font);
    textAlign(LEFT);
    fill(255);
    text('Score: ' + score, 30, 60);

    for (var i = 0; i < lives; i++) {
        image(im_heart, 30 + (i * 70), height - 60);
    }

    if (score == 50) {
        noLoop();
        textSize(60);
        // textFont(font);
        textStyle(BOLD);
        textAlign(CENTER);
        fill(255);
        text('You Won', width / 2, height / 2);
    }

    // Check if game is over
    if (lives === 0) {
        noLoop();

        textSize(60);
        // textFont(font);
        textStyle(BOLD);
        textAlign(CENTER);
        fill(255);
        text('GAME OVER', width / 2, height / 2);
    }

    textSize(20);
    // textFont(font);
    textStyle(BOLD);
    textAlign(CENTER);
    fill("yellow");
    text('Press SPACE or UP to SLOW DOWN or GO FAST', width /4-20, height -50);
    text('Press LEFT  and RIGHT to TURN', width /2+300, height -50);



}