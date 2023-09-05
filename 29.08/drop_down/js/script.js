class DropDown{
	constructor(selector, options){
		this.el = document.querySelector(selector);
		this.items = options.items;
		this.el.querySelector('.dropdown_label').textContent = this.items[0].name;
		this.el.addEventListener('click', e=>{
			if(e.target.classList.contains('dropdown_label')){
				if(this.el.classList.contains('open')){
					this.close();
				}
				else {
					this.open();
				}
			}
			else if(e.target.tagName == 'LI'){
				this.select(e.target.dataset.id);
				this.close()
				this.showDelails(e.target.dataset.id);
			}
		})
		let itemsHTML = this.items.map(i => {
			return `<li data-id="${i.id}">${i.name}</li>`
		}).join('')
		this.el.querySelector('.dropdown_menu').insertAdjacentHTML('afterbegin', itemsHTML)
	}
	select(id){
		let item = this.items.find(i => i.id == id)
		this.el.querySelector('.dropdown_label').textContent = item.name;
	}
	open(){
		this.el.classList.add('open');
		this.el.querySelector('.details_info').classList.remove('open');

	}
	close(){
		this.el.classList.remove('open');
	}
	showDelails(id){
		this.el.querySelector('.details_info').classList.add('open');
		this.el.querySelector('.details_info').innerHTML = '';
		let itemsHTML = `
			<span>User name :: </span><span>${this.items[id-1].username}</span>
			<span>Email :: </span><span>${this.items[id-1].email}</span>
			<span>Phone :: </span><span>${this.items[id-1].phone}</span>
			<span>Website :: </span><span>${this.items[id-1].website}</span>
		`;
		this.el.querySelector('.details_info').innerHTML = itemsHTML;
	}
}

document.addEventListener('DOMContentLoaded', async function(){
	let data = await fetch('https://jsonplaceholder.typicode.com/users');
	let result = await data.json();
	
	let options = {
		items: result
	}
	let dropdown = new DropDown('#dropdown', options)
})

// let info = {
// 	items: [
// 		{label:'Рівне', id:'rv'},
// 		{label:'Київ', id:'kv'},
// 		{label:'Одеса', id:'od'},
// 		{label:'Харків', id:'kh'},
// 	]
// }

// let dropmenu = new DropDown('#dropdown', info);