class Block{
    constructor(x,y){
        this.x= x
        this.y =y
    }

    nextCell = (direction, step) => {
       const directionMapper = {
           'N': () => new Block(this.x, this.y-step),
           'S': () => new Block(this.x, this.y+step),
           'W': () => new Block(this.x-step, this.y) ,
           'E': () => new Block(this.x+step, this.y)
       }
       return directionMapper[direction]();   
    } 
}

export {Block};