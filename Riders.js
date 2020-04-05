function Riders() {
    this.w = 40;
    this.h = 100;

   // this.x = floor(random(0, width-this.w));
    this.x=floor(width/2);
    this.y = height;
    this.speed = playerSpeed-4;
    this.isCrossed = false;

    this.show = function() {
        image(im_car_green, this.x, this.y);
    }

    this.move = function() {
        this.y -= this.speed;
    }

    this.slowfast=function (){   
        if(keyIsDown(keyCode=32 )){
           this.y= this.y+3;
            }
        if(keyIsDown(keyCode=UP_ARROW)){
                this.y=this.y-4;       
        } 
    }

    this.offscreen = function() {
        if(this.y>height){
            return;
        }
    }

    this.crossOver = function(target) {
        if (this.y < target.y) {
            return true;
        }
    }

    this.hits = function(target) {
        if (target.y +target.h> this.y && target.y< this.y+this.h) {
            if (target.x <this.x+this.w && target.x+target.w> this.x) {
                return true;
            }
        }    
    }
    
    this.boom = function() {
        image(im_boom, this.x-50, this.y);
    }

    this.turnLeft = function() {
        this.x -= 1;
        this.x = constrain(this.x, 0, width-this.w);
    }
    
    this.turnRight = function() {
        this.x += 1;
        this.x = constrain(this.x, 0, width-this.w);
    }
}
