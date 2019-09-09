function CartHoverEffort() {
	$('.header-cart .cart-mini').hover(function() {
		$('.header-cart .cart-box').slideDown('fast');

	}, function() {
		$('.header-cart .cart-box').slideUp('fast');
	})

	$('.header-cart .cart-box').hover(function() {
		$('.header-cart .cart-box').stop().show();
		$('.header-cart .cart-mini').css('color', '#FF6700')
		$('.header-cart .cart-mini').css('background-color', '#FFFFFF')
	}, function() {
		$('.header-cart .cart-box').slideUp("fast");
		$('.header-cart .cart-mini').css('color', '')
		$('.header-cart .cart-mini').css('background-color', '')
	})
}



function NavHoverEffort() {

	var index = 0,
		sub = false;
	$('.header-nav ul li').hover(
		function() {
			index = $(this).prevAll().length;
			console.log(index);
			if (sub) {
				$('.header-nav-hide:eq(' + index + ')').show();
			} else {
				$('.header-nav-hide:eq(' + index + ')').stop().slideDown("fast");
				sub = true;
			}

		},
		function() {
			$('.header-nav ul').mouseleave(function() {
				sub = false;
				// 	// console.log(false);
				// 	// $('.header-nav-hide').stop().slideUp("fast");
				// 	
				// 	
			})
			// if (sub && index >= 0){
			// 	$('.header-nav-hide:eq(' + index + ')').hide();
			// }else{
			// 	$('.header-nav-hide').stop().slideUp("fast");
			// }

				if (sub == false) {
					$('.header-nav-hide').stop().slideUp("fast");

				} else {

					$('.header-nav-hide:eq(' + index + ')').hide();
					
				}
		})

	$('.header-nav-hide').hover(function() {
		$('.header-nav-hide:eq(' + index + ')').stop().show();
		$('.header-nav ul li:eq(' + index + ')').find('.list').css('color', '#FF6700')
	}, function() {
		$('.header-nav-hide').slideUp("fast");
		$('.header-nav ul li:eq(' + index + ')').find('.list').css('color', '')
	})
}


// $('.header-nav ul li a').mouseleave(function(){
// 	
// 	$('.header-nav-hide').slideUp("slow");
// 	
// })


// $('.header-nav-hide').mouseleave(function() {
// 	$('.header-nav-hide').slideUp("slow");
// })



// 轮播图部分
function CarouselEffect() {
	var pic = $('.product-content .carousel .img-box a');
	var obr = 0;
	var myTimer = null;
	//初始化页面
	function initUI() {
		$(".small-circle li:first").css({
			"backgroundColor": "#ffffff"
		});
	}
	//轮播图自动播放
	function autoPlay() {
		myTimer = setInterval(function() {
			var nextobr = obr;
			obr++;
			if (obr > pic.length - 1) {
				obr = 0;
			}
			let $img = $('.product-content .carousel .img-box a');

			$img.eq(nextobr).animate({
				"opacity": 0
			}, 500);
			$img.eq(obr).animate({
				"opacity": 1
			}, 500);
			$('.carousel .small-circle li').eq(obr).css({
				"backgroundColor": "#ffffff"
			}).siblings().css({
				"backgroundColor": "#B0B0B0"
			})
		}, 5000);
	};
	//停止播放
	function stopPlay() {
		window.clearInterval(myTimer);
	}
	//跳转到指定图片
	function gotoimg(transobr) {
		var nextbor = obr;

		obr = transobr;
		console.log(obr);
		if (obr > pic.length - 1) {
			obr = 0;
		}
		let $img = $('.product-content .carousel .img-box a');
		$img.eq(nextbor).animate({
			"opacity": 0
		}, 500);
		$img.eq(obr).animate({
			"opacity": 1
		}, 500);
		$('.carousel .small-circle li').eq(obr).css({
			"backgroundColor": "#ffffff"
		}).siblings().css({
			"backgroundColor": "#B0B0B0"
		});
	}

	function Play() {
		$('.img-box').mouseenter(function() {
			stopPlay();
		});
		$('.img-box').mouseleave(function() {
			autoPlay();
		});
		$('.small-circle li').click(function() {
			gotoimg($('.small-circle li').index(this));
		});
		$('.leftArrow a').click(function() {
			let transobr = obr - 1;
			console.log(transobr);
			transobr = transobr < 0 ? pic.length - 1 : transobr;
			gotoimg(transobr);
		});
		$('.rightArrow a').click(function() {
			let transobr = obr + 1;
			transobr = transobr > pic.length - 1 ? 0 : transobr;
			gotoimg(transobr);
		});
	}

	$(function() {
		//1、初始化界面
		initUI();
		//2、绑定事件
		Play();
		//3、自动播放
		autoPlay();
	});
}
//left-nav-hide
function LeftNavHoverShow() {
	var index = 0;
	$('.left-nav .left-nav-content li').hover(
		function() {
			index = $(this).prevAll().length;
			// $('.left-nav-hide').css("display", "none");
			$('.left-nav-hide:eq(' + index + ')').show();
		},
		function() {
			// var index = $(this).prevAll().length;
			// $('.left-nav-hide').css("display", "none");
			$('.left-nav-hide:eq(' + index + ')').hide()
		}
	)
	$('.left-nav-hide').hover(
		function() {
			$('.left-nav-hide:eq(' + index + ')').show();
			$('.left-nav .left-nav-content li:eq(' + index + ')').css("background-color", "orangered")
		},
		function() {
			$('.left-nav-hide').hide();
			$('.left-nav .left-nav-content li').css("background-color", "")
		}
	)
}
$(function() {
	CartHoverEffort();

	NavHoverEffort();

	CarouselEffect();

	LeftNavHoverShow();
})
