let url = 'https://jsonplaceholder.typicode.com/users';

let promise = new Promise(function (resolve, reject) {
	let xml = new XMLHttpRequest()
	xml.open('GET', url);
	xml.responseType = 'json';
	xml.send();

	xml.onload = function () {
		if (xml.status === 200) {
			resolve(xml.response)
			console.log(xml.response);
		}
		reject('Error')
	}
})
promise.then(function (data) {
	showAllUsers(data)
})
.catch(function (error) {
	console.log(error);
})


function showAllUsers(data) {
	let users = document.querySelector('.users');
	data.forEach(element => {
		let str = `<li class="user">${element.name}</li>`;
		users.insertAdjacentHTML('beforeend', str);
	});
	showUser(data);
}

function showUser(data){
	let user = document.querySelectorAll('.users .user');
	let user_info = document.querySelector('.user_info');
	let users_posts = document.querySelector('.users_posts');
	for(let i = 0; i < user.length; i++){
		user[i].addEventListener('click', function(){
			showInfo(data[i]);
			user_info.classList.remove('none');
			users_posts.classList.add('none');
		})
	}
}

function showInfo(data){
	let $name = document.querySelector('table tr:first-of-type td:nth-of-type(2)');
	let $username = document.querySelector('table tr:nth-of-type(2) td:nth-of-type(2)');	
	let $address = document.querySelector('table tr:nth-of-type(3) td:nth-of-type(2)');	
	let $email = document.querySelector('table tr:nth-of-type(4)  td:nth-of-type(2)');	
	let $phone = document.querySelector('table tr:nth-of-type(5)  td:nth-of-type(2)');	
	let $website = document.querySelector('table tr:nth-of-type(6) td:nth-of-type(2)');


	const {name, username, address, email, phone, website} = data;
	$name.textContent = name;
	$username.textContent = username;
	$address.textContent = address.city;
	$email.textContent = email;
	$phone.textContent = phone;
	$website.textContent = website;

	showPosts(data);
}

function showPosts(data){
	let users_posts = document.querySelector('.users_posts')
	let btn = document.querySelector('.user_info button');
	btn.addEventListener('click', function(){
		let url_posts = `https://jsonplaceholder.typicode.com/posts?userId=${data.id}`;
		users_posts.classList.remove('none');
		let promise = new Promise(function (resolve, reject) {
			let xml = new XMLHttpRequest()
			xml.open('GET', url_posts);
			xml.responseType = 'json';
			xml.send();
		
			xml.onload = function () {
				if (xml.status === 200) {
					resolve(xml.response)
				}
				reject('Error')
			}
		})
		promise.then(function(data) {
			showPostsText(data)
		})
		.catch(function (error) {
			console.log(error);
		})
	})
}

function showPostsText(data){
	let posts = document.querySelector('.posts');
	data.forEach(element =>{
		let post = `<div class="post"><h4>${element.title}</h4><p>${element.body}</p></div>`;
		posts.insertAdjacentHTML('beforeend', post);
	})
}
