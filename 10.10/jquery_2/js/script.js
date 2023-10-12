$('#slide1, #slide2, #slide3, #slide4').on('input', function(){
    let slide1 = $('#slide1').val();
    let slide2 = $('#slide2').val();
    let slide3 = $('#slide3').val();
    let slide4 = $('#slide4').val();
    $('#output').css('border-radius', slide1 + '% ' + slide2 + '% ' + slide3 + '% ' + slide4 + '%');
    $('#box').val('border-radius: ' + slide1 + '% ' + slide2 + '% ' + slide3 + '% ' + slide4 + '%');
})