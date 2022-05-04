
import _ from 'lodash'
import { Block } from "./block"


class Snake{
     constructor(initialLength, initialXPos, initialYPos, direction){  //Length
         this.initiallength= initialLength
         this.initialXPos= initialXPos
         this.initialYPos= initialYPos
         this.direction= direction
         this.isAlive=true;    //Default : true 
         this.snakeBody= this.createSnakeBody()
     }

     getOppositeDirection = (direction) => {
         const oppositeDirection =  {
            'N' : 'S',
            'S' : 'N',
            'E' : 'W',
            'W' : 'E'
         }
         return oppositeDirection[direction]
     }


    createSnakeBody = () => {

        const head = new Block(this.initialXPos, this.initialYPos)
        const bodyCells= _.range(1, this.initiallength)    //Length
        const oppositeDirection = this.getOppositeDirection(this.direction)
        const body = _.map(bodyCells,
             step=>head.nextCell(this.getOppositeDirection(this.direction),step));
        return [head, ...body]

    }

    move = (isFrogEaten) => {
        if(!this.isAlive) return
        let currentHead = this.snakeBody[0];
        let newHead = currentHead.nextCell(this.direction, 1);
        if(!isFrogEaten) this.snakeBody.pop()
        this.snakeBody = [newHead, ...this.snakeBody];
    }

    turn = (directionToTurn) => {
        if(this.getOppositeDirection(this.direction) === directionToTurn || !this.isAlive)  return 
        this.direction=directionToTurn
    }

} 

export {Snake}

