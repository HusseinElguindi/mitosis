function setup()
{
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
    c = new Cell();

    population = new Population(25);
}


function draw()
{
    background(25);
    credits();
    // borders();

    population.update_all();
}

function credits()
{
    noStroke();
    fill(200);
    textSize(15);
    textAlign(LEFT, BOTTOM);
    text("Mitosis\nHussein Elguindi", 10, -30, width, height);
}

function borders()
{
    noFill();
    stroke(255, 0, 0);
    strokeWeight(5)
    rect(c.border, c.border, width-(c.border*2), height-(c.border*2));
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    this.population.members.forEach(cell => {
        cell.pos = createVector(random(c.border, width-c.border), random(c.border, height-c.border));
    });
}

function mousePressed()
{
    this.population.clicked();
}

function touchStarted()
{
    this.population.clicked();
}