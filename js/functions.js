$(function(){

	var cont = $(".cont"),
		Window = $(window);
	//cont.css('opacity', '0');
	Window.scroll(function() {
		//cont.each(function() {
		//	if (Window.scrollTop() > $(this).offset().top - Window.height()) {
		//		$(this).animate({opacity: "1"}, 500);
		//	}
		//});
	});

// スムーススクロール
	var replaceWidth = 640;
	var windowWidth = parseInt( $(window).width() );
	var headerHight = $("header").innerHeight(); //ヘッダの高さ

	$('a[href^=#]:not(.noscroll)').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
		$("html, body").animate({scrollTop:position}, speed, "swing");
		// return false;
	});

// ページトップボタン
	var showFlag = false;
	var topBtn = $('#page-top');
	topBtn.css('bottom', '-100px');
	var showFlag = false;
	//スクロールが100に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			if (showFlag == false) {
				showFlag = true;
				topBtn.stop().animate({'bottom' : '40px'}, 200);
			}
		} else {
			if (showFlag) {
				showFlag = false;
				topBtn.stop().animate({'bottom' : '-40px'}, 200);
			}
		}
	});
	//スクロールしてトップ
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

});