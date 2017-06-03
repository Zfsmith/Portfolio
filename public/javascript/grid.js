$( document ).ready(function() {
	
// if($(window).width() << 500){
	$(".gridBoxContainer").hover(function(){
		// console.log($(window).width());
		// $(".gridBox").stop().animate({
		// 	width:"385px",
		// 	height:"285px"
		// },
		// "fast",
		// "linear"
		// );
		// $(".gridImg").stop().animate({
		// 	width:"385px",
		// 	height:"285px"
		// },
		// "fast",
		// "linear"
		// );
		$(this).children(".gridBox").css("background-color","#6499ab");
		$(this).children(".gridImg").stop().animate({
			width:"430px",
			height:"330px"
		},
		"fast",
		"linear"
		);
		$(this).stop().animate({
			width:"430px",
			height:"330px"
		},
		"fast",
		"linear"
		);
		$(this).children(".gridBox").stop().animate({
			width:"430px",
			height:"330px",
			opacity:0
		},
		"fast",
		"linear"
		);
		// $(".gridBoxContainer").not(this).stop().animate({
		// 	width:"385px",
		// 	height:"285px"
		// },
		// "fast",
		// "linear"
		// );
		
	},
	function(){
		// $(".gridBox").stop().animate({
		// 	width:"400px",
		// 	height:"300px"
		// },
		// "fast",
		// "linear"
		// );
		// $(".gridImg").stop().animate({
		// 	width:"400px",
		// 	height:"300px"
		// },
		// "fast",
		// "linear"
		// );
		$(this).children(".gridBox").css("background-color","#6499ab");
		$(this).children(".gridImg").stop().animate({
			width:"400px",
			height:"300px",
		},
		"fast",
		"linear"
		);
		$(this).stop().animate({
			width:"400px",
			height:"300px"
		},
		"fast",
		"linear"
		);
		$(this).children(".gridBox").stop().animate({
			width:"400px",
			height:"300px",
			opacity:.9
		},
		"fast",
		"linear"
		);
		// $(".gridBoxContainer").not(this).stop().animate({
		// 	width:"400px",
		// 	height:"300px"
		// },
		// "fast",
		// "linear"
		// );
		
	});
//};	
});



