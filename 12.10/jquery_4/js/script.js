// $('.dropdown-menu>li').hover(function(){
// 	$(this).find('ul.dropdown-item').slideDown(300); // show, hide, toggle, slideDown, slideUp, slideToggle, fadeIn, fadeOut, fadeTo
// }, function(){
// 	$(this).find('ul.dropdown-item').slideUp(100);
// })


$('#input').change(function(){
	$('ul').append(`<li>${$(this).val()}<i class="fa-solid fa-exclamation"></i><i class="fa-solid fa-check"></i><i class="fa-solid fa-trash"></i></li>`);
	$(this).val('');
})
$('ul').on('click', '.fa-check', function(){
	$(this).parent('li').toggleClass('checked');
})
$('ul').on('click', '.fa-trash', function(){
	$(this).parent('li').fadeOut(200);
})
$('ul').on('click', '.fa-exclamation', function(){
	$(this).parent('li').toggleClass('important');
})