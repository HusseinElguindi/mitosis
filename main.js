function setup()
{
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
    c = new Cell();

    pop = [];
    for (let i = 0; i < 25; i++)
    {
        pop[i] = new Cell()
    }
}


function draw()
{
    background(25);
    credits();


    this.c.rand_move();
    this.c.update();
    this.c.show();

    pop.forEach(cell => {
        cell.rand_move();
        cell.update();
        cell.show();
    });
}

function credits()
{
    noStroke();
    fill(200);
    textSize(15);
    textAlign(LEFT, BOTTOM);
    text("Mitosis\nHussein Elguindi", 10, -30, width, height);
}