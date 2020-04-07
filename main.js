function setup()
{
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
    c = new Cell();

    population = [];
    for (let i = 0; i < 25; i++)
    {
        population[i] = new Cell();
    }
}


function draw()
{
    background(25);
    credits();
    // borders();

    let len = this.population.length;
    for (let i = 0; i < len; i++)
    {
        let cell = this.population[i];

        cell.rand_move();
        cell.update();
        cell.show();
    }
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
    this.population.forEach(cell => {
        cell.pos = createVector(random(c.border, width-c.border), random(c.border, height-c.border));
    });
}

function mousePressed()
{
    let len = this.population.length;
    for (let i = len-1; i >= 0; i--)
    {
        let cell = this.population[i];
        let d = cell.pos.dist(createVector(mouseX, mouseY));

        if (d <= ((50*cell.scale)/2))
        {
            cell.clicked();
            break;
        }
    }
}