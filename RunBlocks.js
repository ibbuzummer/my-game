function RunBlocks() {
    this.x = floor(width-200);
    this.y = height-450;
    this.w = 100;
    this.h = 20;

    this.show = function() {
        strokeWeight(3);
        fill(255, 182, 58);
        rect(this.x, this.y, this.w, this.h);
    }

   this.move = function() {
   //    this.x -= playerSpeed;
        this.x-=7;
   }

    this.offscreen = function() {
        if(this.x+this.w<0){
            return;
      } 
    }
}
