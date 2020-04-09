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

    population.update_all();

    stats();
    credits();
    // borders();
}

function credits()
{
    noStroke();
    fill(255);
    textSize(15);
    textAlign(LEFT, BOTTOM);
    text("Mitosis\nHussein Elguindi", 10, -30, width, height);
}

function stats()
{
    noStroke();
    fill(255);
    textSize(15);
    textAlign(LEFT, TOP);
    text(`Cells: ${this.population.members.length}\nDivisions: ${this.population.divisions}`, 10, 10, width, height);
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

function mouseDragged()
{
    this.population.dragged();
}

function touchMoved()
{
    this.population.dragged();
}