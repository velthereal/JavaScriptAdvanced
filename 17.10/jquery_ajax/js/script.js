let url_library = `https://openlibrary.org/subjects/mystery_and_detective_stories.json`;

let books = '';

$.ajax({
	url:url_library,
	dataType:'json',
	beforeSend:function(){
		$('.spiner').show().css('display', 'flex');
	}
	// mathod:'POST'
}).done(function(data){
	getBooks(data);
	$('.spiner').hide();
	$('.book').click(function(){
		let title = $(this).find('.book-title h3').prop('title');
		window.open(`https://openlibrary.org${getBook(title,data)}`);
	})
}).fail(function(){
	console.error('Error');
})

function getBooks(data){
	$.each(data.works, function(index,bookInfo){
		console.log(bookInfo);
		books += `<div class="book">
						<div class="book-title">
							<h3 title="${bookInfo.title}">${bookInfo.title.length > 15 ? bookInfo.title.slice(0, 15) + '...' : bookInfo.title}</h3>
						</div>
						<div class="img">
							<img src="https://covers.openlibrary.org/b/id/${bookInfo.cover_id}-M.jpg" alt=""/>
						</div>`;
		if(bookInfo.authors.length == 1){
			books += `<a href="https://openlibrary.org${bookInfo.authors[0].key}">${bookInfo.authors[0].name}</a>`;
		}
		else {
			books += '<div class="link">'
			$.each(bookInfo.authors, function(i,author){
				books += `<a href="https://openlibrary.org${author.key}">${author.name}</a>`;
			})
			books += '</div>'
		}
		books += '</div>';
	})
	$('.container_books').html(books)
}

function getBook(title, data){
	let res;
	$.each(data.works, function(index,book){
		if(book.title === title){
			res = book.key;
			return;
		}
	})
	return res;
}