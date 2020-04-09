class Population
{
    constructor(num)
    {
        this.divisions = 0;
        this.members = [];
        for (let i = 0; i < num; i++)
        {
            this.members[i] = new Cell();
        }
    }

    update_all()
    {
        let len = this.members.length;
        for (let i = 0; i < this.members.length; i++)
        {
            let cell = this.members[i];

            cell.rand_move();
            cell.grow();
            cell.update();
            cell.show();
        }
    }

    clicked()
    {
        let len = this.members.length;
        for (let i = len-1; i >= 0; i--)
        {
            let cell = this.members[i];
            let d = cell.pos.dist(createVector(mouseX, mouseY));

            if (d <= ((50*cell.scale)/2))
            {
                // cell.clicked();
                this.mitosis(cell);

                this.members.splice(i, 1);
                break;
            }
        }
    }

    mitosis(cell)
    {
        for (let i = 0; i < 2; i++)
        {
            var c = new Cell();
            c.dna = cell.dna;
            c.scale = (cell.scale/2);

            if (i == 0) c.pos = p5.Vector.add(cell.pos, createVector((50*c.scale*1.5)/2, 0));
            else c.pos = cell.pos;
           
            // c.pos.x += (30 * i);
            this.members.push(c);
        }
        
        this.divisions++;
    }

    dragged()
    {
        let len = this.members.length;
        for (let i = len-1; i >= 0; i--)
        {
            let cell = this.members[i];
            let d = cell.pos.dist(createVector(mouseX, mouseY));

            if (d <= ((50*cell.scale)/2))
            {
                if (this.members.length > 1) this.members.splice(i, 1);
                break;
            }
        }
    }
}