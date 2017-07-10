$(function(){
  $('.bar').removeClass('is-stop');

  setTimeout(function(){
    $('#loading').addClass('blur');
  },2500);

  setTimeout(function(){
    $('.l-loading').removeClass('is-loading');
    $('.maincopy-container').addClass('is-animated');
    $('#maincopy').removeClass('blur');
  },3500);

  setTimeout(function(){
    $('.maincopy-container').removeClass('is-animated');
    $('.maincopy-container').addClass('is-show');
    $('#loading').hide;
  },6500);

  setTimeout(function(){
    $('.mv-item-detail').addClass('is-show');
  },7000);

  setTimeout(function(){
    $('.l-header').addClass('is-show');
    $('.l-sns').addClass('is-show');
  },8500);

});
