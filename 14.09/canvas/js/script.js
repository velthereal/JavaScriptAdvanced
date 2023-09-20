// let canvas = document.getElementById('figure');
// let ctx = canvas.getContext('2d');
// let x1, x2, x3, x4, y1, y2, y3, y4;
// x1 = document.getElementById('x1');
// x2 = document.getElementById('x2');
// x3 = document.getElementById('x3');
// x4 = document.getElementById('x4');
// y1 = document.getElementById('y1');
// y2 = document.getElementById('y2');
// y3 = document.getElementById('y3');
// y4 = document.getElementById('y4');

// let numbers = document.querySelectorAll('input');
// for (let i = 0; i < numbers.length; i++) {
// 	numbers[i].addEventListener('input', () => {
// 		showPoints();
// 		drawCurve();
// 	})
// }

// function showPoints(){
// 	ctx.clearRect(0,0,canvas.width, canvas.height);
// 	ctx.fillStyle = 'red';

// 	ctx.beginPath();
// 	ctx.arc(x1.value,y1.value,5,0,Math.PI * 2);
// 	ctx.fill();

// 	ctx.fillStyle = 'blue';
// 	ctx.beginPath();
// 	ctx.arc(x2.value,y2.value,5,0,Math.PI * 2);
// 	ctx.fill();

// 	ctx.fillStyle = 'blue';
// 	ctx.beginPath();
// 	ctx.arc(x3.value,y3.value,5,0,Math.PI * 2);
// 	ctx.fill();

// 	ctx.fillStyle = 'red';
// 	ctx.beginPath();
// 	ctx.arc(x4.value,y4.value,5,0,Math.PI * 2);
// 	ctx.fill();

// 	ctx.moveTo(x1.value, y1.value);
// 	ctx.setLineDash([5,15]);
// 	ctx.lineTo(x2.value,y2.value);

// 	ctx.lineTo(x4.value,y4.value);
// 	ctx.lineTo(x3.value,y3.value);
// 	ctx.lineTo(x1.value,y1.value);
// 	ctx.strokeStyle = 'brown';
// 	ctx.stroke();
// 	ctx.setLineDash([]);

// }
// function drawCurve(){
// 	ctx.beginPath();
// 	ctx.moveTo(x1.value,y1.value);
// 	ctx.bezierCurveTo(x2.value, y2.value, x3.value, y3.value, x4.value, y4.value);
// 	ctx.strokeStyle = 'lightblue';
// 	ctx.stroke();

// }



// ======================================================
// let src = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
// let canvas = document.getElementById('figure');
// let ctx = canvas.getContext('2d');
// let btn = document.querySelectorAll('button');
// btn[0].addEventListener('click', showImage1);
// btn[1].addEventListener('click', showImage2);

// function showImage1(){
// 	const img = document.createElement('img');
// 	img.src = src;
// 	ctx.drawImage(img, 0,0,150,150);
// }

// function showImage2(){
// 	const img = new Image();
// 	img.src = src;
// 	img.addEventListener('load', e => {
// 		ctx.drawImage(img, 0,0,150,150);
// 	})
// }

// ========================================
// let canvas = document.getElementById('figure');
// let ctx = canvas.getContext('2d');
// ctx.fillStyle = 'orange';

// // box-shadow(x,y,blur,color)

// ctx.shadowColor = '#ccc';
// ctx.shadowBlur = 10;
// ctx.shadowOffsetX = 40;
// ctx.shadowOffsetY = 40;
// ctx.fillRect(400,100,200,300);

// ctx.shadowBlur = 0;
// ctx.shadowOffsetX = -30;
// ctx.shadowOffsetY = -30;
// ctx.fillRect(400,100,200,300);

// =====================================================
// let canvas = document.getElementById('figure');
// let ctx = canvas.getContext('2d');

// let linear = ctx.createLinearGradient(0,100,200,100);

// linear.addColorStop(0, '#d2ff52');
// linear.addColorStop(0.5, '#d24b5a');
// linear.addColorStop(1, '#91e842');

// ctx.fillStyle = linear;
// ctx.fillRect(0,80,190,40);

// let radial = ctx.createRadialGradient(300,100,10,300,100,100);
// radial.addColorStop(0, '#d2ff52');
// radial.addColorStop(0.5, '#d24b5a');
// radial.addColorStop(1, '#91e842');

// ctx.fillStyle = radial;
// ctx.arc(300,100,100,0,2*Math.PI);
// ctx.fill();
// =====================================================
let canvas = document.getElementById('figure');
let ctx = canvas.getContext('2d');
let days = document.querySelectorAll('input');

function showDiagram(){
	ctx.clearRect(0,0,canvas.width, canvas.height);
	let colors = [
		['#ff5db1','#ef017c'],
		['#ffb05c','#ef7c01'],
		['#beff5c','#90ef01'],
		['#5cf4ff','#01dfef'],
		['#d35cff','#af01ef'],
	];
	for (let i = 0; i < days.length; i++) {
		let sold = days[i].value;
		let gradient = ctx.createLinearGradient(0,0,0,150);
		gradient.addColorStop(0,colors[i][0]);
		gradient.addColorStop(1,colors[i][1]);
		ctx.fillStyle = gradient;
		ctx.fillRect(40*i,150-sold*5,35,sold*5);
	}
}
for (let i = 0; i < days.length; i++) {
	days[i].addEventListener('input', ()=> {
		showDiagram();
	});
}
