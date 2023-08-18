document.querySelector('button').addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(result){
        return result.json()
    })
    .then(function(data){
        showTable(data);
    })
    .catch(function(error){
        console.error(error);
    })
})
function showTable(users){
    let table = `<table><tr><th>Name</th><th>Address</th><th>Company</th><th>Email</th><th>Phone</th><th>Username</th><th>Website</th></tr>`
    let data = users.map(element => {
        const {name, address, company, email, phone, username, website} = element;
        return `
            <tr>
                <td>${name}</td>
                <td>${address.city}</td>
                <td>${company.name}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${username}</td>
                <td>${website}</td>
            </tr>
        `
    })
    table += data.join('');
    table += `</table>`
    document.querySelector('.table').insertAdjacentHTML('afterbegin', table);
}