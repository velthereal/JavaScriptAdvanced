let canvas = document.getElementById('pacmanCanvas');
let ctx = canvas.getContext('2d');

let centerX = canvas.width / 2;
let centerY = canvas.width / 2;
let radius = 80;
let start = 0.5;
let end = Math.PI * 1.8;
let eyeRadius = 13;

ctx.clearRect(0,0,canvas.width, canvas.height);

ctx.beginPath();
ctx.arc(centerX, centerY, radius, start, end);
ctx.lineTo(centerX, centerY);
ctx.closePath();

ctx.fillStyle = '#f4b300';
ctx.fill();

ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.stroke();

let eyeX = centerX + radius / 2 - 30;
let eyeY = centerY - radius / 2;

ctx.beginPath();
ctx.arc(eyeX, eyeY, eyeRadius, 0, Math.PI * 2);
ctx.closePath();

ctx.fillStyle = 'black';
ctx.fill();