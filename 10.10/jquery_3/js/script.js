$('#slide1, #slide2, #slide3, #slide4, #slide5, #slide6, #slide7, #slide8').on('input', function(){
	let slide1 = $('#slide1').val();
	let slide2 = $('#slide2').val();
	let slide3 = $('#slide3').val();
	let slide4 = $('#slide4').val();
	let slide5 = $('#slide5').val();
	let slide6 = $('#slide6').val();
	let slide7 = $('#slide7').val();
	let slide8 = $('#slide8').val();
	$('#img').css('filter', 'grayscale(' + slide1 + '%) sepia(' + slide2 + '%) blur(' + slide3 +'px) invert(' + slide4 +'%) opacity(' + slide5 + '%) brightness(' + slide6 + '%) contrast(' + slide7 + '%) saturate(' + slide8 + '%)');
	$('#box').text('Filter:Grayscale(' + slide1 + '%) Sepia(' + slide2 + '%) Blur(' + slide3 +'px) Invert(' + slide4 +'%) Opacity(' + slide5 + '%) Brightness(' + slide6 + '%) Contrast(' + slide7 + '%) Saturate(' + slide8 + '%)');
})