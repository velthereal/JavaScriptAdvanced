// підключення DOM елементів

// jQuery(document).ready(function(){
//     console.log('Test jQuery');
// })

// $(document).ready(function(){
//     console.log('Test jQuery');
//     $('.text').css('color', 'green');
// })

// $(document).ready(()=>{
//     console.log('Test jQuery');
//     $('.text').css('color', 'green');
// });

// $(function(){
//     $('.text').css('color', 'red');
// })

// $(() => {
//     $('.text').css('color', 'red');
// })

// $('#date-now').text(new Date().toDateString());

// $(':header').css({
//     color:'orange',
//     'background-color':'black',
//     fontStyle:'italic',
//     margin: '10px',
//     padding:'10px'
// })
// $('p:even').css('background', 'yellow');

// // let heading = $(':header');
// // console.log(heading);

// $('.block').addClass('active');
// setTimeout(() => {
//     $('.block').removeClass('active');
// }, 1000);

// $('button').closest('.block').fadeOut(2000)

// let par = $('button').parents('.block').find('p').css('font-size', '35px');
// let par = $('button').parents('.block').find('p').slideUp(1000);
// let par = $('button').parents('.block').find('p').next();
// console.log(par);

// $('button').on('click', function(){
//     $(this).parent().fadeOut(1000);
// })
// $('input').on('keydown input paste', function(){
//     console.log($(this).val());
// })

// $('.item').click(function(){
//     let activeItem = $(this).parents('section').find('h2.active');
//     if(!$(this).hasClass('active')){
//         activeItem.next().slideUp(200);
//         activeItem.removeClass('active');
//         $(this).addClass('active').next().slideToggle(400);
//     }
// })