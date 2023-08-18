// Client --> Server --> DataBase --> Server --> Client

// console.log('Клієнт виконує запитб отримати список студентів');
// setTimeout(function(){
//     console.log('Сервер отриму є запит і виконує запит до бази даних, отримати список студентів');

//     setTimeout(function(){
//        console.log('База даних отримала запитб формує список студентів'); 

//        setTimeout(function(){
//             console.log('Сервер отримав списокб трансформує дані для клієнта');

//             setTimeout(function(){
//                 console.log('Клієнт отримав список і відображає його');
//             }, 2000)
//        },500)
//     }, 500)

// }, 1000)

// let promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Клієнт: запитує список студентів в бази даних');
//         console.log('...');
//         resolve();
//     }, 1000)
// });
// promise.then(function(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log('Сервер: Запитує список студентів у бази даних');
//             console.log('...');
//             resolve();
//         }, 500)
//     })
// })
// .then(function(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             let users = [
//                 {id:1, name:'Max'},
//                 {id:2, name:'Dima'},
//             ]
//             console.log('База даниx формує список студентів', users);
//             console.log('...');
//             resolve(users);
//         }, 1000)
//     })
// })
// .then(function(dbData){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log('Сервер трансформує список студентів');
//             console.log('...');
//             let users = dbData.map(function(user){
//                 return {
//                     id:user.id,
//                     name:user.name,
//                     timeStamp:Date.now()
//                 }
//             })
//             resolve(users)
//         }, 500)
//     })
// })
// .then(function(resServer){
//     setTimeout(function(){
//         console.log('Клієнт отримав список студентів');
//         console.log('Клієнт відображає їх', resServer);
//         console.log('...');
//     }, 1000)
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log('Finally');
// })


let url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

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
    console.log(data);
}