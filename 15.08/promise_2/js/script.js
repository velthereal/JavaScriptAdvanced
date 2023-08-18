let url = 'https://jsonplaceholder.typicode.com/users';

let promise = new Promise(function(resolve,reject){
    let xml = new XMLHttpRequest()
    xml.open('GET', url);
    xml.responseType = 'json';
    xml.send();

    xml.onload = function(){
        if(xml.status === 200){
            resolve(xml.response)
        }
        reject('Error')
    }
})
promise.then(function(data){
    showUser(data)
})
.catch(function(error){
    console.log(error);
})
function showUser(data){
    let user = document.querySelectorAll('.users .user');
    console.log(data);
}