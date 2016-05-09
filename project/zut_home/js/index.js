/**
 * Created by boss on 16/5/9.
 */
$(function () {
	setNav();
});
var nowIndex = 0;
var auto;
function change() {
	if (nowIndex < 2) {
		nowIndex++;
	} else {
		nowIndex = 0;
	}
	$('.banner-images').animate({'marginLeft': -286 * nowIndex});
	$('.banner-bar span').eq(nowIndex).addClass('on').siblings().removeClass('on');
}
function setNav() {
	var imagesLength = $('.banner-images img').length;
	$('.banner-images').css('width', 286 * imagesLength);
	auto = setInterval("change();", 2000);
}
