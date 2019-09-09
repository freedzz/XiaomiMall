$(function() {
	$(".productList-1 .productMore li a").mouseover(function() {
		for (var i = 0; i < 2; i++) {
			$(".productList-1 .productMore li").children('a').eq(i).removeClass('current');
		}
		$(this).addClass('current');
		var index = $(".productList-1 .productMore li a").index(this);
		$(".productList-1 .box-bd").find('.productRight').eq(1 - index).addClass('hide');
		$(".productList-1 .box-bd").find('.productRight').eq(index).removeClass('hide');
	});

	$(".productList-1 .box-bd li").mouseover(function() {
		$(this).addClass('selected');
	}).mouseout(function() {
		$(this).removeClass('selected');
	});

	$(".productList-2 .productMore li a").mouseover(function() {
		for (var i = 0; i < 2; i++) {
			$(".productList-2 .productMore li").children('a').eq(i).removeClass('current');
		}
		$(this).addClass('current');
		var index = $(".productList-2 .productMore li a").index(this);
		$(".productList-2 .box-bd").find('.productRight').eq(1 - index).addClass('hide');
		$(".productList-2 .box-bd").find('.productRight').eq(index).removeClass('hide');
	});

	$(".productList-2 .box-bd li").mouseover(function() {
		$(this).addClass('selected');
	}).mouseout(function() {
		$(this).removeClass('selected');
	});

	$(".productList-3 .productMore li a").mouseover(function() {
		for (var i = 0; i < 2; i++) {
			$(".productList-3 .productMore li").children('a').eq(i).removeClass('current');
		}
		$(this).addClass('current');
		var index = $(".productList-3 .productMore li a").index(this);
		$(".productList-3 .box-bd").find('.productRight').eq(1 - index).addClass('hide');
		$(".productList-3 .box-bd").find('.productRight').eq(index).removeClass('hide');
	});

	$(".productList-3 .box-bd li").mouseover(function() {
		$(this).addClass('selected');
	}).mouseout(function() {
		$(this).removeClass('selected');
	});

	$(".productList-4 .productMore li a").mouseover(function() {
		for (var i = 0; i < 2; i++) {
			$(".productList-4 .productMore li").children('a').eq(i).removeClass('current');
		}
		$(this).addClass('current');
		var index = $(".productList-4 .productMore li a").index(this);
		$(".productList-4 .box-bd").find('.productRight').eq(1 - index).addClass('hide');
		$(".productList-4 .box-bd").find('.productRight').eq(index).removeClass('hide');
	});

	$(".productList-4 .box-bd li").mouseover(function() {
		$(this).addClass('selected');
	}).mouseout(function() {
		$(this).removeClass('selected');
	});

	$(".productList-5 .productMore li a").mouseover(function() {
		for (var i = 0; i < 2; i++) {
			$(".productList-5 .productMore li").children('a').eq(i).removeClass('current');
		}
		$(this).addClass('current');
		var index = $(".productList-5 .productMore li a").index(this);
		$(".productList-5 .box-bd").find('.productRight').eq(1 - index).addClass('hide');
		$(".productList-5 .box-bd").find('.productRight').eq(index).removeClass('hide');
	});

	$(".productList-5 .box-bd li").mouseover(function() {
		$(this).addClass('selected');
	}).mouseout(function() {
		$(this).removeClass('selected');
	});

	$(".box-bd li").mouseover(function() {
		$(this).addClass('selected');
	}).mouseout(function() {
		$(this).removeClass('selected');
	});

});
$(function() {

	//console.log($(".phoneContentMainRight ul li"))
	$(".phoneContentMainRight ul li,.phoneContentMainLeft").mouseover(function() {
		$(this).addClass('selected');
	}).mouseout(function() {
		$(this).removeClass('selected');
	});


})
