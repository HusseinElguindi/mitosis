class Cell
{
    constructor()
    {   
        this.border = 20;

        this.pos = createVector(random(50, width-50), random(50, height-50));
        this.acc = createVector(0, 0);
        this.vel = createVector(0, 0);

        this.scale = random(0.8, 1.7);
        this.maxSpeed = random(0.5, 1);

        this.dna = {
            color: [random(255), random(255), random(255)]
        };
    }

    rand_move()
    {
        this.acc = createVector(random(-1, 1), random(-1, 1));
    }

    update() 
    {
        let e = this.border;

        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);

        // prevent from going out of bounds
        let i = p5.Vector.add(this.pos, this.vel);

        if (i.x < e || i.x > (width-e))
        {            
            this.vel.x *= -5;
            this.pos.x += this.vel.x;
        }
        else this.pos.x = i.x;
        
        if (i.y < e || i.y > (height-e))
        {
            this.vel.y *= -5;
            this.pos.y += this.vel.y;
        }
        else this.pos.y = i.y;
        
    }

    show()
    {
        stroke(255);
        strokeWeight(1);
        fill(this.dna.color[0], this.dna.color[1], this.dna.color[2], 255);
        ellipseMode(CENTER);
        ellipse(this.pos.x, this.pos.y, 50*this.scale, 50*this.scale);
    }

    clicked()
    {
        this.dna.color = [0, 0, 255];
    }
}