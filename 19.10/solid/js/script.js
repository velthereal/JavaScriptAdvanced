class Rate{
	constructor(selector){
		this.element = document.querySelector(selector);
	}
	render(){
		fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5')
		.then(res => res.json())
		.then(currencyU => {
			let usd = currencyU[0].sale;
			let eur = currencyU[1].sale;
			let div = document.createElement('div');
			div.style.border = '2px solid gray';
			div.style.display = 'inlone-block';
			div.style.width = '100px';
			div.style.padding = '5px';
			div.style.textAlign = 'center';
			div.innerHTML = `<img style="width:90%" src="images/usd.png" alt="usd"/> <b>${usd}</b>`;
			this.element.insertAdjacentElement('beforeend', div);
		})
	}
}