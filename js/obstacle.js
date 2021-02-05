class Obstacle{
    constructor(ctx){
         this.ctx = ctx

         this.x = Math.random() * canvas.width/2 
         this.y = 0
         this.w = Math.random() * ((canvas.width - 130) - 100) + 100
         this.h = 30

         this.vy = 10
    }

    draw(){

        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(
            this.x, 
            this.y,
            this.w,
            this.h
        )
    }


    move(){
        this.y += this.vy 
    }
}