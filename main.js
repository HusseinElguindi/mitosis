function setup()
{
    frameRate(60);
    createCanvas(displayWidth, displayHeight);
}

function draw()
{
    background(25);

    credits();
}

function credits()
{
    noStroke();
    fill(200);
    textSize(15);
    textAlign(LEFT, BOTTOM);
    text("Mitosis\nHussein Elguindi", 10, -30, width, height);
}