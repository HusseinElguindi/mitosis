class Cell
{
    constructor()
    {
        this.border = 20;

        this.pos = createVector(random(50, width-50), random(50, height-50));
        this.acc = createVector(0, 0);
        this.vel = createVector(0, 0);

        this.maxScale = random(0.6, 1.5);
        this.scale = random(0.6, this.maxScale);

        this.nucleusOffset = this.calcNucleusPos();

        this.dna = {
            color: [random(255), random(255), random(255)],
            maxSpeed: random(0.5, 1)
        };
    }

    calcNucleusPos()
    {
        let r = (50*this.scale)/2;
        let nucleusOffsetVal = r - (11*this.scale);
        let nucleusOffset = createVector(random(-nucleusOffsetVal, nucleusOffsetVal), random(-nucleusOffsetVal, nucleusOffsetVal));
        
        return nucleusOffset;
    }

    rand_move()
    {
        this.acc = createVector(random(-10, 10), random(-10, 10));
    }

    grow()
    {
        if (this.scale < this.maxScale && random() < 0.65)
        {
            // let r1 = 50*this.scale/2;

            this.scale += 0.001;

            // let r2 = 50*this.scale/2;
            // let change = (r2-r1)/random(2, 3);

            let change = 0.01;

            if (this.nucleusOffset.x < 0) this.nucleusOffset.x -= change;
            else this.nucleusOffset.x += change;

            if (this.nucleusOffset.y < 0) this.nucleusOffset.y -= change;
            else this.nucleusOffset.y += change;
        }
    }

    update() 
    {
        let e = this.border;

        this.vel.add(this.acc);
        this.vel.limit(this.dna.maxSpeed);

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
        fill(this.dna.color[0], this.dna.color[1], this.dna.color[2], 200);
        ellipseMode(CENTER);
        ellipse(this.pos.x, this.pos.y, 50*this.scale, 50*this.scale);
        
        noStroke();
        fill(0, 0, 0, 80);
        ellipse(this.pos.x+this.nucleusOffset.x, this.pos.y+this.nucleusOffset.y, 10*this.scale, 10*this.scale);
    }

    // clicked()
    // {
    //     this.dna.color = [0, 0, 255];
    // }

    // mitosis()
    // {
    //     for (let i = 0; i < 2; i++)
    //     {
    //         let c = new Cell();
    //         c.dna = this.dna;
    //         c.scale = this.scale/2;
    //     }
    // }
}
