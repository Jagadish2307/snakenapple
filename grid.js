import $ from 'jquery';
import _ from 'lodash';

class Grid{

     constructor(width, height, snake, frog){

         this.width= width
         this.height= height
         this.snake= snake
         this.frog= frog

     }

create = () => {

    for(let y=0;y<this.height;y=y+1){
       
        $("#game").append(`<div class="row" id='row-${y}'></div>`)

          for(let x=0;x<this.width;x=x+1){

            const isHead = this.snake.snakeBody[0].x === x && this.snake.snakeBody[0].y === y
            const tail = _.tail(this.snake.snakeBody)
            const isBody = _.filter(tail,cell => cell.x === x && cell.y === y ).length > 0
            const isFrog = this.frog.xPos === x && this.frog.yPos === y
            const frogClass = isFrog ? 'frog' : ''
            const headClass = isHead ? 'head' : ''
            const bodyClass = isBody ? 'body' : ''
            const deadClass = !this.snake.isAlive && !isHead && !isBody? 'dead': ''
            const extraClass = `${headClass} ${deadClass} ${bodyClass} ${frogClass}` 
            $(`#row-${y}`).append(`<div  id='cell-${x}' class='cell ${extraClass}'></div>`)
         
           }

    } 

}

}

export {Grid}

// import $ from 'jquery';

// import _ from 'lodash'

// class Grid {
//   constructor(width, height, snake, frog) {
//     this.width = width
//     this.height = height
//     this.snake = snake
//     this.frog = frog
//   }

//   create = () => {
//     for (let y = 0; y < this.height; y = y + 1) {
//       $("#game").append(`<div id='row-${y}' class='row'></div>`)
//       for (let x = 0; x < this.width; x = x + 1) {
//         const isHead = this.snake.snakeBody[0].x === x && this.snake.snakeBody[0].y === y
//         const tail = _.tail(this.snake.snakeBody)
//         const isBody = _.filter(tail, cell => cell.x === x && cell.y === y).length > 0
//         const isFrog = this.frog.xPos === x && this.frog.yPos === y
//         const headClass = isHead ? 'head' : ''
//         const frogClass = isFrog ? 'frog' : ''
//         const deadClass = !this.snake.isAlive && !isHead && !isBody ? 'dead' : ''
//         const bodyClass = isBody ? 'body' : ''
//         const extraClass = `${headClass} ${deadClass} ${bodyClass} ${frogClass}`
//         $(`#row-${y}`).append(`<div id='cell-${x}' class='cell ${extraClass}'>${x}, ${y}</div>`)
//       }
//     }
//   }

// }

// export { Grid }

