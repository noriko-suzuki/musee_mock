'use strict';

var $mainvisual,
    $about,
    $banner;

function isSP() {
  if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    return true;
  } else {
    return false;
  }  
}

function initialize() {
  $mainvisual.addClass('is-animated');
}

function loadImages() {
  return $('.l-mainvisual').imagesLoaded();
}


$(function() {
  if(isSP()) {
    $('html').addClass('is-sp');
  }

  $mainvisual = $('.l-mainvisual'),
  $about = $('.l-about'),
  $banner = $('.l-banner');


  $.scrollify({
    section : isSP() ? '' : ".js-scrollify",
    // sectionName : "section-name",
    // interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 600,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: false,
    touchScroll:false,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });
  

  loadImages().done(function() {
    var timer = setTimeout(function() {
      initialize();
      clearTimeout(timer);
      timer = null;
    }, 500);
  }).fail(function() {
    initialize();
  });

  
  $('.js-scroll').on('click', function(e) {
    e.preventDefault();

    var target;
    var scrollTop = 0;

    if(isSP()) {
      target = $(e.currentTarget).data('target');

      switch(target) {
        case 'about':
          scrollTop = $about.offset().top;
          break;

        case 'banner':
          scrollTop = $banner.offset().top;
          break;
      }

      $('html, body').animate({
        scrollTop: scrollTop
      }, 500);
    } else {
      $.scrollify.next();  
    }
  });

  // header 表示
  $about.waypoint({
    handler: function(direction) {
      if(direction === 'down') {
        $('html').addClass('is-header-shown is-section-about');
      } else {
        $('html').removeClass('is-header-shown is-section-about');
        
      }
    }
  });

  // header 表示
  $about.waypoint({
    handler: function(direction) {
      if(direction === 'down') {
        $('html').removeClass('is-section-about');
      } else {
        $('html').addClass('is-section-about');
      }
    },
    offset: function() {
      return -$about.height();
    }
  });

  // 全体的なアニメーション
  $('.js-waypoint').waypoint({
    handler: function(direction) {
      if(direction === 'down') {
        $(this.element).addClass('is-animated');
        this.destroy();  
      }
    },
    offset: function() {
      return $(window).height() - 100
    }
  });
});