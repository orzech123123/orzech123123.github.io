class Road{
    constructor(x, width, laneCount=3)
    {
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x - width/2;
        this.right = x + width/2;

        const infinity = 10000000;
        this.top = -infinity;
        this.bottom = infinity;
    }

    draw(context)
    {
        context.lineWidth = 5;
        context.strokeStyle= "white";

        for(let i=0; i<=this.laneCount; i++)
        {
            const x = lerp(
                this.left,
                this.right,
                i/this.laneCount
            );

            if(i > 0 && i < this.laneCount)
            {
                //context.strokeStyle = 'blue';
                //context.setColor("red");
                context.setLineDash([20, 20]);
            }
            else{
                context.setLineDash([]);
            }

            context.beginPath();
            context.moveTo(x, this.top);
            context.lineTo(x, this.bottom);
            context.stroke();
        }
    }
}