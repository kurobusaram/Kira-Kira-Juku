//ハンバーガーメニュー
var hamburger = $('.header__nav--hamburger');

//open/closeボタンクリック
$('.header__btn--hamburger').on('click', function () {
  //console.log('click');
  //.hamburger表示繰り返し
  hamburger.toggleClass('header__nav--hamburger-active');
});

$('.header__nav--hamburger').on('click', function () {
  hamburger.removeClass('header__nav--hamburger-active');
});

$(window).on('resize', function () {
  //console.log('resize');
  //ハンバーガーメニュー閉じる
  hamburger.removeClass('header__nav--hamburger-active');
});

//tab
$('.course__tab--btn').on('click', function () {
  //console.log('click');
  var index = $('.course__tab--btn').index(this);
  $('.course__tab--btn').removeClass('tab-active');
  $(this).addClass('tab-active');
  $('.course__tab--contents--group').removeClass('tab-active');
  $('.course__tab--contents--group').eq(index).addClass('tab-active');
})