$( document ).ready(function() {

	$(".gridBoxContainer").hover(function(){

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


	},
	function(){

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
			opacity:0.9
		},
		"fast",
		"linear"
		);


	});
});
