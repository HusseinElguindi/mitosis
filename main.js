function setup()
{
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
    c = new Cell();

    area = width * height;
    num = int(area * 0.00002);

    population = [];
    for (let i = 0; i < num; i++)
    {
        population[i] = new Cell();
    }
}


function draw()
{
    background(25);
    credits();
    // borders();


    this.c.rand_move();
    this.c.update();
    this.c.show();

    // this.population.forEach(cell => {
    //     cell.rand_move();
    //     cell.update();
    //     cell.show();
    // });

    for (let i = 0; i < this.population.length; i++)
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
    rect(50, 50, width-100, height-100);
}