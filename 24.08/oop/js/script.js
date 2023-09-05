class RootFigure{
	#name;
	constructor(name, color, tagName = 'div'){
		this.#name = name;
		this.color = color;
		this.el = document.createElement(tagName);
	}
	get(){
		return this.#name
	}
	set(newName){
		// if(newName.length < 1){
		// 	console.error('Error');
		// }
		// else {
		// 	this.#name = newName;
		// }
		this.#name = newName.length < 1 ? 'NoName' : newName;
	}
	create(){
		this.el.style.background = this.color;
		this.el.textContent = this.#name;
		this.el.style.justifyContent = 'center';
		this.el.style.alignItems = 'center';
		this.el.style.fontSize = '28px';
	}
}

class Circle extends RootFigure(){
	constructor(name, color, size){
		super(name, color)
		this.size = size
	}
	append(){
		document.querySelector('.root').insertAdjacentElement('beforeend', this.el);
	}
	createCircle(){
		this.el.style.borderRadius = '50%';
		this.el.style.width = this.el.style.height = `${this.size}px`;
		this.append()
	}
}
// let figure = new RootFigure();
// // figure.#name = 'Circle'
// // console.log(figure.#name);
// figure.set('Circle');
// console.log(figure.get());
let circle = new Circle('Circle', 'red', 400)