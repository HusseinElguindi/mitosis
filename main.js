// HUSSEIN ELGUINDI
// MITOSIS SIMULATION 2020

// TODO: daughter cells disperse in different directions, not just left and right
// TODO: for settings page, add blocks for each setting. https://www.w3schools.com/css/tryit.asp?filename=trycss_mediaqueries_flex
var resets = 0;
var settingsWin;
var FPS;

function setup()
{
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
   
    document.getElementById("menuDiv").style.display = "none";
    settingsWin = false;

    c = new Cell();
    population = new Population(25);

    if (resets == 0) 
    {
        drawResetBtn();
        drawSettingBtn();
    } 

    // document.getElementById("menuDiv").style.display = "block";
    // settingsWin = true;
}


function draw()
{
    background(25);

    population.update_all();
    
    // if (settingsWin) settingTest();
    stats();
    credits();

    showFPS();
    // borders();
}

function drawMitosisDeleteBtn()
{
    var btn = createButton("Mitosis");
    btn.addClass("classicBtn");
    btn.size(70, 30);
    btn.position(width-10-70, 10);

    btn.mousePressed(resetAll);
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

    this.settingsBtn.mousePressed(settings);
}

function resetAll()
{
    resets++;
    setup();
}

function settings()
{
    if (settingsWin) 
    {
        document.getElementById("menuDiv").style.display = "none";
        settingsWin = false;
    }
    else 
    {
        if (population.members.length == 1) 
        {
            document.getElementById("settingCellCount").innerHTML = "1 cell";
        }
        else document.getElementById("settingCellCount").innerHTML = `${population.members.length} cells`;

        let rounded = Math.round(population.members.length/5) * 5;
        document.getElementById("cellCount").value = rounded;

        document.getElementById("menuDiv").style.display = "block";
        settingsWin = true;
    }
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

function showFPS()
{
    if (frameCount % 5 == 0)
    {
        // FPS = Math.trunc(frameRate());
        FPS = frameRate().toFixed(2);
    }

    noStroke();
    fill(255);
    textSize(15);
    textAlign(LEFT, BOTTOM);
    text(FPS + " FPS", width-71-10, height-10);
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

function touchStarted()
{
    if (settingsWin) return;
    this.population.clicked();
}

function touchMoved()
{
    if (settingsWin) return;
    this.population.dragged();
}

function cellSliderInput()
{
    let count = document.getElementById("cellCount").value;
    document.getElementById("settingCellCount").innerHTML = `${count} cells`;

    population.resize(count);
}

