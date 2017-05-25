$( document ).ready(function() {
	
// if($(window).width() << 500){
	$(".gridBoxContainer").hover(function(){
		// console.log($(window).width());
		$(this).children(".gridBox").css("background-color","green");
		$(this).children(".gridImg").stop().animate({
			width:"430px",
			height:"330px",
		},
		"fast",
		"linear"
		);
		$(this).stop().animate({
			width:"430px",
			height:"330px",
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
	},
	function(){
		$(this).children(".gridBox").css("background-color","tomato");
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
			opacity:.7
		},
		"fast",
		"linear"
		);
	});
//};	
});



