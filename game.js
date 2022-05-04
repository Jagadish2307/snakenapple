import $ from 'jquery';
import './styles.css';
import _ from 'lodash';

import {Grid} from './grid';
import {Snake} from './snake';
import {Frog} from './frog';

const width = 8
const height = 8
const initialLength = 3

const snake = new Snake(initialLength, 2, 3,"N")

const regeneratedFrog = () => {
    
        let randomXPos =_.random(width - 1)
        let randomYPos =_.random(height - 1)
        return new Frog(randomXPos, randomYPos)
}

const frog = regeneratedFrog()  //frog
const grid = new Grid(width, height, snake, frog);

console.log(grid);

const directionKey = {
    'ArrowUp' : 'N',
    'ArrowDown' : 'S',
    'ArrowLeft' : 'W',
    'ArrowRight' : 'E'
} 

   

const keyFunction = (event) => {
    if(directionKey[event.key])
    snake.turn(directionKey[event.key])

}

document.addEventListener("keyup",keyFunction)

const doesTheNextCellKills = (nextMove) => {
    const isEscape = nextMove.x < 0 || nextMove.y < 0 || nextMove.x > width - 1 || nextMove.y > height - 1 
    const selfKill = _.some(snake.snakeBody, b=>nextMove.x == b.x && nextMove.y == b.y)  
    return isEscape || selfKill
}


const render = () => {
    
    
    grid.create();
    const nextMove = snake.snakeBody[0].nextCell(snake.direction, 1)
    // const isEscape = nextMove.x < 0 || nextMove.y < 0 || nextMove.x > width-1 || nextMove.y > height-1

    if(doesTheNextCellKills(nextMove)){
      snake.isAlive = false
    }

    else{
        let isFrogEaten = nextMove.x === grid.frog.xPos && nextMove.y === grid.frog.yPos 
        snake.move(isFrogEaten);

        if(isFrogEaten) {
            grid.frog = regeneratedFrog()
            clearInterval(interval)
            let speed = 1000 - (snake.length * 50)
            interval = setInterval(render, speed)
        }

    }

         $("#game").empty();
         grid.create();

}



const startGame = () => {
    return setInterval(render, 1000)
}

let interval = startGame()


// snake.createSnakebody();

