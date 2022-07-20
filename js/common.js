// // ローディングアニメーション
// const loadAnime = $('.loader-text');
// $(window).on('load', function () {
//   loadAnime.delay(1200).fadeOut(1000);
// });
// // スライド
// $(window).on('load', function () {
//   $('.loader-slide1').addClass('open1');
// });
// $(window).on('load', function () {
//   $('.loader-slide2').addClass('open2');
// });


//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
  var headerH = $('#header').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH) {//headerの高さ以上になったら
    $('#header').addClass('fixed');//fixedというクラス名を付与
  } else {//それ以外は
    $('#header').removeClass('fixed');//fixedというクラス名を除去
  }
}

//ナビゲーションをクリックした際のスムーススクロール
$('nav a').click(function () {
  var elmHash = $(this).attr('href'); //hrefの内容を取得
  var pos = Math.round($(elmHash).offset().top - 120);  //headerの高さを引く
  $('body,html').animate({ scrollTop: pos }, 500);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
  return false;//リンクの無効化
});



// 回転
ScrollReveal().reveal('.rotate', {
  rotate: { x: 0, y: 300, z: 0 }, 
  duration: 1000,
  reset: true
});

// フェードアップ
ScrollReveal().reveal('.up', {
  origin: 'bottom',
  distance: '100px',
  duration: 1200,
  reset: true
});

// FAQ
$('.question').on('click', function () {
  $('.answer').slideUp(500);

  var findElm = $(this).next(".answer");

  if ($(this).hasClass('close')) {
    $(this).removeClass('close');
    } else {
    $('.close').removeClass('close');
    $(this).addClass('close');
    $(findElm).slideDown(500);
  }
});