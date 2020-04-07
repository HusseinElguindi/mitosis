class Cell
{
    constructor()
    {
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
        let e = 50;
        let s = (50*this.scale)/2;

        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);

        // prevent from going out of bounds
        let i = p5.Vector.add(this.pos, this.vel);
        // if (!(i.x <= e || i.x >= width-e || i.y <= e || i.y >= height-e))
        // {
        //     // this.pos.add(this.vel);
        //     this.pos = i;
        // }

        // console.log(!(i.y < e || i.y > width-e));

        if (i.x < e || i.x > (width-e))
        {
            // this.dna.color = [255, 0, 0];
            
            this.vel.x *= -5;
            this.pos.x += this.vel.x;
        }
        else
        {
            // this.dna.color = [0, 255, 0]; 
            this.pos.x = i.x;
        }
        

        if (i.y < e || i.y > (height-e))
        {
            // this.dna.color = [255, 0, 0];

            this.vel.y *= -5;
            this.pos.y += this.vel.y;
        }
        else 
        {
            // this.dna.color = [0, 255, 0]; 
            this.pos.y = i.y;
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