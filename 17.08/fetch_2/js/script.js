let category = 'food';
let q = 'flower';
let orientation = 'horizontal';
let per_page = '100';
let color = 'pink';
let url_images = `https://pixabay.com/api/?key=14304821-db198647e0592cf253911c94a&category=${category}&orientation=${orientation}&per_page=${per_page}`;
let url_videos = `https://pixabay.com/api/videos/?key=14304821-db198647e0592cf253911c94a&q=yellow+flowers`;
fetch(url_images)
.then((response)=> {
    return response.json();
})
.then((data)=>{
    showImg(data.hits)
})

function showImg(data){
    let list = `<ul>`
    list += data.map(img => {
        return `<li><img src="${img.largeImageURL}" alt="${img.tags}"/></li>`
    }).join('')
    list += `</ul>`;
    document.body.insertAdjacentHTML('afterbegin', list);
    activeImg();
}

function activeImg(){
    let list = document.querySelectorAll('ul img');
    let img = document.querySelector('.img');
    let content = document.querySelector('.img .content');
    let picture = document.querySelector('.img .content img');
    let exit = document.querySelector('.img i');
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click', function(){
            picture.src = this.src;
            img.classList.add('visible');
            content.classList.add('visible');
        })
    }
    exit.addEventListener('click', function(){
        img.classList.remove('visible');
        content.classList.remove('visible');
    })
}

// function showImg(data){
//     let list = `<ul>`
//     list += data.map(img => {
//         return `<li><video controls><source src="${img.videos.medium.url}"></video></li>`
//     }).join('')
//     list += `</ul>`;
//     document.body.insertAdjacentHTML('afterbegin', list);
// }