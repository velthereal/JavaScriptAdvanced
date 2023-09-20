let canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let w, h, heart=[];
let counter = 0;

let heartImg = new Image();
heartImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEM0lEQVR4Xu2YXYgbVRTH/+dM4tbdLZs0q4gfLVsoKLRoHwShCMWikmQRktk++VLw460PCm0Foe0iqBUfVARR8EHwLZ1UcKfxo1IEoSBFxFXpm4pKa9tkk13YmiZzj0xqdSlpN3c+A5n7EkjOuf/z/91z79wMYcQHjbh/JACSDhhxAskWGPEGSA7BZAskW2DECSRbYMQbIHkKBLoFlkulnGrzHoAecqDuYhEW5ktEtOiAvppeqPw5SMfV8+V7mWmPANtJqTsUkTLAFwD5nhw+NfV5pTHIPIPEBALgcrH0AAsfEVJlBqf7CStASOELMXg+t1A50y+mkS/vAslhIX6c0b87FVTHUGR1UzQ//al1bhCTt4rxBUAAahbKLyuiIwykQAyenATGx0HpMYAJUAJpNaFWWr06XBAG5L0pdeVFqtXa7ne/7N63Yer2lbeJ8fyghlwQBJ7P2tarBMigeTfGeQYge/cazVXnI4CeJiZw7k5wbhowUn1qEXTO/Qw43f9+E+B0d5yfonabUl3DBvGj3kyojzPjqX1UqThe8j0DWCrOvQPIfkrfBmPLDGhsw//mOh2g2wGUu94CubIK5+KFfmC+AcitYZeX4q/nKEVv5WrHX/AyhycAjVmzQAIbqTRSW7eB0mngahtOvQ5ZaUJcABEPEvVE5uSJL3VltQHI0aPc+nbxJyHcb2ze2tvz6tJfcC5f7K12jGMxY1sP6p4H2gBaRfNJBXxGExuR2jID5/dfoVaWY/S9Vloey9rV0zrFaANo5M333dPa2DwDWW5BNQN7JOvUfbPYd7O2tV9nIm0AS0XzByLewffcB+eP33S0Qo9VcM7m7E8e1hHSB5A3l2lyYqN0u72Db5iGUqjnata0Tk3aAOrF0lUjPZaO46Rf15jCarZmTawbtybAC4A6gzfpiEQYez5rW3fr6GkDaM6aZ0TwiI5IZLEiX2dPVnfr6GkDaBTmjhHJQR2R6GLllaxdPayjpw1gKW/uBOM7HZGoYgVqxyb7xI86etoA3MnrxdIphvu/f3gGEWqZBaugW5EnAI1iabsCnzWAMV3BMOIF6m/FvNPL+wFPAFwTzVnzORF8EIYh3TkJ8mzGrn6om+fGewbQg1CcOySQ170IB5VDJIcyC9U3vM7nC4Ar2iiYLxHhNa8F+Mkj0IGMffxNf3P4yf43Nw4IQZj3vQXWsosSQlDmAwUQ1XYI0nzgAMI+GIM2HwqAsCCEYT40AEFDCMt8qACuXZbKB0XomJ8HTZjmQwfgF0LY5iMB4BVCFOYjA6ALISrzkQLoQSiYB4Rwy3t7lOYjB7AehKjNxwLgZhDiMB8bgBshxGU+VgDXLkvlZ9xPry8z/Nwvruf6fh8QRBFxzpEAiJP+MGgnHTAMqxBnDUkHxEl/GLSTDhiGVYizhqQD4qQ/DNpJBwzDKsRZw8h3wD+x9H5QGmopLQAAAABJRU5ErkJggg==';

let mouse = {
    x: undefined,
    y:undefined,
}

function init(){
    resizeRes();
    animationLoop();
}
function resizeRes(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}
function mousemove(e){
    mouse.x = e.x;
    mouse.y = e.y;
    counter++;
    if(counter % 2 == 0){      
        heart.push(
            new Heart()
        );
    }
}
function mouseout(){
    mouse.x = undefined;
    mouse.y = undefined;
}
function getRandom(min, max){
    return Math.round(Math.random() * (max - min) + min);
}
function animationLoop(){
    ctx.clearRect(0,0,w,h);
    ctx.globalCompositeOperation = 'lighter'
    drawHearts();

    let tmp = [];
    for (let i = 0; i < heart.length; i++) {
        if(heart[i].time < heart[i].tll){
            tmp.push(heart[i]);
        }
    }
    heart = tmp;

    requestAnimationFrame(animationLoop);
}
function drawHearts(){
    for (let i = 0; i < heart.length; i++) {
        heart[i].update();
        heart[i].draw();
    }
}
function easeOutQuart(x){
    return 1- Math.pow(1 - x, 4);
}
class Heart{
    constructor(){
        this.start = {
            x:mouse.x + getRandom(-20, 20),
            y:mouse.y + getRandom(-20, 20),
            size:heartImg.width,
        }
        this.x = this.start.x;
        this.y = this.start.y;
        this.size = this.start.size;

        this.time = 0;
        this.tll = 60;
        this.end = {
            x:mouse.x + getRandom(-200, 200),
            y:mouse.y + getRandom(-200, 200),
        }
    }
    draw(){
        ctx.drawImage(heartImg, this.x - heartImg.width / 2, this.y - heartImg.height / 2, this.size, this.size);
    }
    update(){
        if(this.time <= this.tll){
            let prog = 1 - (this.tll - this.time) / this.tll;
            this.size = this.start.size * (1 - easeOutQuart(prog));
            this.x = this.x + (this.end.x - this.x) * 0.01;
            this.y = this.y + (this.end.y - this.y) * 0.01;
        }
        this.time++;
    }
}

window.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', resizeRes);
window.addEventListener('mousemove', mousemove);
window.addEventListener('mouseout', mouseout);