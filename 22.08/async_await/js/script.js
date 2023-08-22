// Async await

async function getCurrency(url){
	let data = await fetch(url)
	let response = await data.json();
	showCurrency(response)
}

let url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5';
getCurrency(url);
// let getCurrency2 = async ()=>{
// }

function showCurrency(data){
	let box = document.querySelector('.content');
	for(let i = 0; i < data.length; i++){
		if(i === 1){
			box.innerHTML += `<hr>`
		}
		for (const key in data[i]) {
			box.innerHTML += `<p><strong>${key}</strong>: ${data[i][key]}</p>`
		}
	}
}