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
    
    if (settingsWin) settingTest();
    stats();
    credits();
    // borders();
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
    let h = height * 0.7

    if (w > (h * 0.9))
    {
        w = h * 0.9;
    }
    else if (h > (1.5 * w))
    {
        h = 1.5 * w;
    }

    strokeWeight(2);
    stroke(255, 255, 255);
    fill(25, 25, 25);
    rect(width/2, height/2, w, h, 20);

    // rectMode(CORNER);
    noStroke();
    fill(255);
    textSize(25);
    // textStyle(BOLD);
    textAlign(LEFT, TOP);
    let tWidth = textWidth("Settings");
    let a = (height-h)/2;
    text("Settings", (width/2), 300, tWidth, height/2);

    // reset rectmode
    rectMode(CORNER);
}

function settingTest()
{
    let menu = createDiv();

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

// function mousePressed()
// {
//     this.population.clicked();
// }

function touchStarted()
{
    if (settingsWin) return;
    this.population.clicked();
}

// function mouseDragged()
// {
//     this.population.dragged();
// }

function touchMoved()
{
    if (settingsWin) return;
    this.population.dragged();
}