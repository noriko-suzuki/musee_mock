$(function(){
// loadingの記述

  setTimeout(function(){
    $('.l-loading').removeClass('is-loading');
    $('.maincopy-container').addClass('is-animated');
    $('#maincopy').removeClass('blur');
  },3000);

  setTimeout(function(){
    $('.maincopy-container').removeClass('is-animated');
    $('.maincopy-container').addClass('is-show');
  },5000);

  setTimeout(function(){
    $('.mv-item-detail').addClass('is-show');
  },5500);

});