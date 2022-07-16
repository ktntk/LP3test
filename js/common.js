$(function () {
  $(".accordion_outer").click(function () {
    $(this).next().slideToggle();
  });
});