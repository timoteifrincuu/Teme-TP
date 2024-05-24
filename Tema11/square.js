let Squares = [];
 
class Square{

    constructor() {
        this.size = 400;
        this.rotation = 0;
    }

    update(){
        this.size--;
        this.rotation--;
    }

    show(){
        push()
        translate(innerWidth/2, innerHeight/2)
        rotate(this.rotation);
        noFill();
        strokeWeight(2);
        rect(0,0,this.size,this.size)
        pop()
    }

    stop(){
        return this.size < 1;
    }

}