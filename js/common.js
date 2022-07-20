// // ローディングアニメーション
$(window).on('load', function () {
  $("#loading-logo").delay(1500).fadeOut('slow');
  $("#loading").delay(1500).fadeOut('slow', function () {
    $('body').addClass('appear');
  });
  $('.loading_bg').on('animationend', function () {
  });
});

//ナビゲーションスクロール
$('nav a').click(function () {
  var elmHash = $(this).attr('href');
  var pos = Math.round($(elmHash).offset().top - 120);
  $('body,html').animate({ scrollTop: pos }, 500);
  return false;
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
$(window).scroll(function () {
  up();
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

// ハンバーガーメニュー
window.onunload = function () { };
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();
$(function () {
  if (w > 769) {
  } else {
    $("header .drawer").click(function () {
      $('body').toggleClass('nav-open');
      $('header .header_nav').fadeToggle(200);
    });
    $("header li a").click(function () {
      $('body').toggleClass('nav-open');
      $('header .header_nav').fadeToggle(200);
    });
  }
});