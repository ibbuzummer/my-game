function Police() { 
    this.w = 80;
    this.h = 100;
    this.x = floor(width);
    this.y = floor(1 * height/4-70);
   
    this.show = function() {
        image(policeVan, this.x, this.y);
    }

    this.move = function() {
        this.x -= 3;
        if(this.x+this.w<0){
            this.x=width;
        }
    }



}
