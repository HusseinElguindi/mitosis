var resets = 0;
var settingsWin;

function setup()
{
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
   
    settingsWin = false;

    c = new Cell();
    population = new Population(25);

    if (resets == 0) 
    {
        drawResetBtn();
        drawSettingBtn();
    } 
}


function draw()
{
    background(25);

    population.update_all();
    
    stats();

    if (settingsWin)
    {
        settings();
    }

    credits();
    // borders();
    // buttons();

    // drawSettingBtn();
}

function drawResetBtn()
{
    this.resetBtn = createButton("Reset");
    this.resetBtn.addClass("classicBtn");
    this.resetBtn.size(70, 30);
    this.resetBtn.position(width-10-70, 10);
    this.resetBtn.mousePressed(resetAll);
}

function drawSettingBtn()
{
    this.settingsBtn = createButton("Settings");
    this.settingsBtn.addClass("classicBtn");
    this.settingsBtn.size(70, 30);
    this.settingsBtn.position(width-10-70, 45);
    this.settingsBtn.mousePressed(function () {
        if (settingsWin) settingsWin = false;
        else settingsWin = true;
    });
}

function resetAll()
{
    resets++;
    setup();
}

function settings()
{
    rectMode(CENTER);
    let w = width * 0.8
    let h = height * 0.5

    fill(255);
    rect(width/2, height/2, w, h);

    rectMode(CORNER);
}

function buttons()
{
    stroke(150);
    strokeWeight(1);
    fill(255);
    let bw = 60;
    let bh = 25;
    rect(10, 70, bw, bh, 15);

    text("Click Delete", x, y, x2, y2)
    
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

    this.resetBtn.position(width-10-70, 10);
    this.settingsBtn.position(width-10-70, 45);

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