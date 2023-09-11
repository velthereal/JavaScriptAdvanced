import { Grid } from "./grid.js";

export class Game{
    constructor(gridElement, mines = 10){
        this.board = new Grid(gridElement);
        this.boardValue = this.helperArray(0);
        this.flag = this.helperArray(false);
        this.mines = mines;
        this.placeMines();
        this.handlerClick();
    }

    handlerClick(){
        for(let i = 0; i < this.board.length; i++){
            for(let j = 0; j < this.board.length; j++){
                this.board[i][j].addEventListener('click', ()=> {
                    console.log(this.countMines(i,j));
                    this.reveload(i, j);
                })
            }
        }
    }
    helperArray(value){
        let tmp = [];
        for(let i = 0; i < this.board.length; i++){
            let row = [];
            for(let j = 0; j < this.board.length; j++){
                row.push(value);
            }
            tmp.push(row);
        }
        return tmp;
    }
    placeMines(){
        let counter = 0;
        while(counter < this.mines){
            let x = parseInt(Math.random() * this.board.length);
            let y = parseInt(Math.random() * this.board.length);
            if(this.boardValue[x][y] != -1){
                this.boardValue[x][y] = -1;
                counter++;
            }
        }
    }
    countMines(x, y){
        let counter = 0;
        if(x > 0 && this.boardValue[x-1][y] == -1){
            counter++;
        }
        if(x < this.board.length - 1 && this.boardValue[x+1][y] == -1){
            counter++;
        }
        if(y > 0 && this.boardValue[x][y-1] == -1){
            counter++;
        }
        if(y < this.board.length - 1 && this.boardValue[x][y+1] == -1){
            counter++;
        }
        if(x > 0 && y > 0 && this.boardValue[x-1][y-1] == -1){
            counter++;
        }
        if(x < this.board.length - 1 && y > 0 && this.boardValue[x+1][y-1] == -1){
            counter++;
        }
        if(x > 0 && y < this.board.length - 1 && this.boardValue[x-1][y+1] == -1){
            counter++;
        }
        if(x < this.board.length - 1 && y < this.board.length - 1 && this.boardValue[x+1][y+1] == -1){
            counter++;
        }
        return counter;
    }
    reveload(x, y){
        if(this.boardValue[x][y] == -1){
            this.board[x][y].textContent = '*';
            this.flag[x][y] = true;
        } 
        else if(!this.flag[x][y]){
        }
    }
}