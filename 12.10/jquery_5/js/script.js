$('.slider').slick({
	dots:true,
	infinite: true,
	speed:500,
	slidesToShow:1,
	slidesToScroll:1,
	// variableWidth:true,
	arrows:false,
	autoplay:true,
	autoplaySpeed:1000,
	fade:true,
	slide:'div',
	cssEase:'linear',
	// responsive:[
	// 	{
	// 		breakpoint:480,
	// 		settings:{
	// 			slidesToShow:1,
	// 		}
	// 	},
	// 	{
	// 		breakpoint:600,
	// 		settings:{
	// 			slidesToShow:2,
	// 		}
	// 	},
	// 	{
	// 		breakpoint:1024,
	// 		settings:{
	// 			slidesToShow:3,
	// 		}
	// 	},
	// ]
});