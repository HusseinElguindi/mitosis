class Cell
{
    pos = createVector(random(50, width-50), random(50, height-50));
    acc = createVector(0, 0);
    vel = createVector(0, 0);

    scale = random(0.5, 1.5);
    maxSpeed = 1;

    dna = {
        color: [random(255), random(255), random(255)]
    };

    constructor()
    {
        
    }

    seek(targetPos)
    {
        var desired = p5.Vector.sub(targetPos, this.pos);
        // desired.setMag(this.maxSpeed)

        var steer = desired.sub(this.vel);
        // steer.limit(this.maxSpeed);

        this.acc.add(steer);
    }

    rand_move()
    {
        this.acc = createVector(random(-1, 1), random(-1, 1));
    }

    update() 
    {
        let e = 50*this.scale;

        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);

        // prevent from going out of bounds
        let i = p5.Vector.add(this.pos, this.vel);
        if (!(i.x <= e || i.x >= width-e || i.y <= e || i.y >= height-e))
        {
            // this.pos.add(this.vel);
            this.pos = i;
        }
    }

    show()
    {
        stroke(255);
        strokeWeight(1);
        fill(this.dna.color[0], this.dna.color[1], this.dna.color[2], 255);
        ellipseMode(CENTER);
        ellipse(this.pos.x, this.pos.y, 50*this.scale, 50*this.scale);
    }
}