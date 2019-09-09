
//参数定义
let second = 0;
let minute = 0;
let hour = 0;
let index = 0;
let $box = $('div.home-flashsale .home-flashsale-box .home-flashsale-Carousel .container [class^="box"]');
let time =null;
//加载事件
$(function () {
    //头部时间变换
    setInterval(Timer, 1000);
    //轮播图按钮
    $('#control-btn2').on('click', Goright);
    $('#control-btn1').on('click', Goleft)
    //定时器
       time = setInterval(Carousel,8000);
    //侧边栏事件
    $('.small-nav .item1').hover(function () {
        $(this).children('img').attr('src','imgs/74c4fcb4475af8308e9a670db9c01fdf.png');
        $(this).children('p').css('color','#FF6700');
    },function () {
        $(this).children('img').attr('src','imgs/98a23aae70f25798192693f21c4d4039.png');
        $(this).children('p').css('color','darkgray');
    });
    $('.small-nav .item2').hover(function () {
        $(this).children('img').attr('src','imgs/41f858550f42eb1770b97faf219ae215.png');
        $(this).children('p').css('color','#FF6700');
    },function () {
        $(this).children('img').attr('src','imgs/55cad219421bee03a801775e7309b920.png');
        $(this).children('p').css('color','darkgray');
    });
    $('.small-nav .item3').hover(function () {
        $(this).children('img').attr('src','imgs/95fbf0081a06eec7be4d35e277faeca0.png');
        $(this).children('p').css('color','#FF6700');
    },function () {
        $(this).children('img').attr('src','imgs/12eb0965ab33dc8e05870911b90f3f13.png');
        $(this).children('p').css('color','darkgray');
    });
    $('.small-nav .item4').hover(function () {
        $(this).children('img').attr('src','imgs/5e9f2b1b0da09ac3b3961378284ef2d4.png');
        $(this).children('p').css('color','#FF6700');
    },function () {
        $(this).children('img').attr('src','imgs/4f036ae4d45002b2a6fb6756cedebf02.png');
        $(this).children('p').css('color','darkgray');
    });
    $('.small-nav .item5').hover(function () {
        $(this).children('img').attr('src','imgs/692a6c3b0a93a24f74a29c0f9d68ec71.png');
        $(this).children('p').css('color','#FF6700');
    },function () {
        $(this).children('img').attr('src','imgs/d7db56d1d850113f016c95e289e36efa.png');
        $(this).children('p').css('color','darkgray');
    });
    $('.small-nav .item6').hover(function () {
        $(this).children('img').attr('src','imgs/totop_hover.png');
        $(this).children('p').css('color','#FF6700');
    },function () {
        $(this).children('img').attr('src','imgs/totop.png');
        $(this).children('p').css('color','darkgray');
    });
});
//方法函数封装
//计时器
function Timer() {
    let $secouds = $('div.home-flashsale-box .home-flashsale-box-time .time span:last-child');
    let $minutes = $('div.home-flashsale-box .home-flashsale-box-time .time span:nth-child(3)');
    let $hours = $('div.home-flashsale-box .home-flashsale-box-time .time span:first-child');
    second = parseInt($secouds.text());
    minute = parseInt($minutes.text());
    hour = parseInt($hours.text());
    if (second == 0 && minute != 0) {
        second = 59;
        minute--;
        $secouds.text('' + second.toString().padStart(2, '0'));
        $minutes.text('' + minute.toString().padStart(2, '0'));
    } else if (second != 0 && minute != 0) {
        second--;
        $secouds.text('' + second.toString().padStart(2, '0'));
        $minutes.text('' + minute.toString().padStart(2, '0'));
    } else if (second == 0 && minute == 0) {
        minute = 59;
        second = 59;
        hour--;
        $secouds.text('' + second.toString().padStart(2, '0'));
        $minutes.text('' + minute.toString().padStart(2, '0'));
        $hours.text('' + hour.toString().padStart(2, '0'));
    } else if (second != 0 && minute == 0) {
        second--;
        $secouds.text('' + second.toString().padStart(2, '0'));
        $minutes.text('' + minute.toString().padStart(2, '0'));
    }
}
//轮播图左移
function Goleft() {
    if (!$($box[index]).is(':animated')){
        clearInterval(time);
        if (index<7) {
            $($box[index]).animate({left: '-978px'}, 700, function () {
                $(this).css('left', '978px');
            });
            $($box[index + 1]).css('left', '978px').animate({left: '0px'}, 700,function () {
                time = setInterval(Carousel,8000);
            });
            index++;
        }
    }
}
//轮播图右移
function Goright() {
    clearInterval(time);
    if (!$($box[index]).is(':animated')){
        if (index > 0) {
            $($box[index]).animate({left: '978px'}, 700)
            $($box[index - 1]).css('left', '-978px').animate({left: '0px'}, 700,function () {
                time = setInterval(Carousel,8000);
            });
            index--;
        }else{
            time = setInterval(Carousel,8000);
        }
    }
}
//自动轮播
function Carousel() {
	
    let $left = parseInt($($box[index]).css('left'));
    let $left1 = parseInt($($box[index + 1]).css('left'));
    $($box[index]).animate({left: $left - 978 + 'px'}, 700,function () {
        $(this).css('left','978px');
    } );
    $($box[index + 1]).animate({left: $left1 - 978 + 'px'}, 700);
    index++;
    if (index>7){
        index=0;
        $($box[index]).animate({left: 0 + 'px'}, 700);
    }
}
