function whichTransitionEvent() {
  var t,
    el = document.createElement("fakeelement");

  var transitions = {
    "transition": "transitionend",
    "OTransition": "oTransitionEnd",
    "MozTransition": "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
}

var transitionEvent = whichTransitionEvent();
// var bottone = $('.menu-btn');
// var menu = $('.menu');
// var close = $('.close');
// var hamburger = $('.hamburger');
var show = 0;
var s = 0.1;

$(document).on('click', '.menu-btn', function (a) {
  a.preventDefault();
  if ($('#page-title').hasClass('hidden')) {
    show = 0;
  } else {
    $('#page-title').addClass('hidden');
    show = 1;
  }
  $('.hamburger').addClass('hidden');
  $(".menu ul li a").each(function (index) {
    $(this).css({
      'transition-delay': s * (1 + index) + 's'
    });
  });
  $(".menu .links li a").each(function (index) {
    $(this).css({
      'transition-delay': 0.4 + s * (0.5 + index) + 's'
    });
  });
  $('.close').addClass('animate');
  $('.hamburger').one(transitionEvent,
    function () {
      $('.menu').toggleClass('open');
      $('.menu ul li a').addClass("animate");
      $('.menu').one(transitionEvent,
        function () {
          $('.menu ul li a').css("transition-delay", "0");
        });
      $('body').css('overflow', 'hidden');
    });
});

$(document).on('click', '.close', function (a) {
  a.preventDefault();
  $('.menu ul li a').removeClass("animate");
  $('.close').removeClass('animate');
  $('.menu').toggleClass('open');
  $('body').css('overflow', 'auto');

  $('.menu').one(transitionEvent,
    function (e) {
      $('.hamburger').removeClass('hidden');
      if (show == 1) {
        $('#page-title').removeClass('hidden');
        show = 0;
      }
    });
});

$(function () {
  'use strict';
  var options = {
      prefetch: true,
      cacheLength: 2,
      // blacklist: '.no-smoothState',
      onStart: {
        duration: 1000, // Duration of our animation
        render: function ($container) {
          if ($('.menu').hasClass('open')) {
            $('.menu ul li a').removeClass("animate");
            $('.close').removeClass('animate');
            $('.menu').toggleClass('open');
            $('.menu').one(transitionEvent,
              function () {
                $('body').css('overflow', 'visible');
                $container.addClass('is-exiting');
                // Restart your animation
                smoothState.restartCSSAnimations();
              });
          } else {
            // Add your CSS animation reversing class
            $('#page-title').addClass('hidden');
            $('.hamburger').addClass('hidden');
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();
          }

        }
      },

      onReady: {
        duration: 0,
        render: function ($container, $newContent) {
          // Remove your CSS animation reversing class
          $container.removeClass('is-exiting');
          // sr.init()
          // Inject the new content
          $container.html($newContent);
          $('img').each(function () {
            new RetinaImage(this);
          });
          $('.hamburger').removeClass('hidden');

          if (document.getElementsByClassName(".galleria") !== null) {
            $('.galleria').slick({
              centerMode: true,
              slidesToShow: 2,
              speed: 500,
              infinite: false,
              cssEase: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
              variableWidth: true,
              prevArrow: '<a href="#" class="slick-prev"><svg id="left" width="18px" height="10px" viewBox="0 0 18 10"><g transform="translate(-231.000000, -3893.000000)" fill="#999999"><path d="M245.408078,3896.95068 L243.026069,3894.71118 C242.631125,3894.33987 242.608474,3893.71493 242.975476,3893.31534 C243.342479,3892.91576 243.960159,3892.89284 244.355103,3893.26416 L248.328502,3896.99984 C248.48048,3897.05019 248.622338,3897.13911 248.738906,3897.26603 C248.928573,3897.47253 249.014171,3897.73923 248.998095,3898 C249.014171,3898.26076 248.928573,3898.52746 248.738906,3898.73396 C248.622338,3898.86088 248.48048,3898.9498 248.328502,3899.00015 L244.355103,3902.73583 C243.960159,3903.10715 243.342479,3903.08423 242.975476,3902.68465 C242.608474,3902.28506 242.631125,3901.66012 243.026069,3901.28881 L245.539205,3898.92603 L231.976199,3898.92603 C231.437059,3898.92603 231,3898.48383 231,3897.93835 C231,3897.39288 231.437059,3896.95068 231.976199,3896.95068 L245.408078,3896.95068 Z" id="Combined-Shape" transform="translate(240.000000, 3897.999996) scale(-1, 1) translate(-240.000000, -3897.999996) "></path></g></svg></a>',
              nextArrow: '<a href="#" class="slick-next"><svg id="right" width="18px" height="10px" viewBox="0 0 18 10"><g transform="translate(-231.000000, -3893.000000)" fill="#999999"><path d="M245.408078,3896.95068 L243.026069,3894.71118 C242.631125,3894.33987 242.608474,3893.71493 242.975476,3893.31534 C243.342479,3892.91576 243.960159,3892.89284 244.355103,3893.26416 L248.328502,3896.99984 C248.48048,3897.05019 248.622338,3897.13911 248.738906,3897.26603 C248.928573,3897.47253 249.014171,3897.73923 248.998095,3898 C249.014171,3898.26076 248.928573,3898.52746 248.738906,3898.73396 C248.622338,3898.86088 248.48048,3898.9498 248.328502,3899.00015 L244.355103,3902.73583 C243.960159,3903.10715 243.342479,3903.08423 242.975476,3902.68465 C242.608474,3902.28506 242.631125,3901.66012 243.026069,3901.28881 L245.539205,3898.92603 L231.976199,3898.92603 C231.437059,3898.92603 231,3898.48383 231,3897.93835 C231,3897.39288 231.437059,3896.95068 231.976199,3896.95068 L245.408078,3896.95068 Z" id="Combined-Shape"></path></g></svg></a>',
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    centerPadding: '0px',
                    slidesToShow: 1,
                  }
              },
                {
                  breakpoint: 480,
                  settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                  }
              }
            ]
            });
          }
        }
      }
    },
    smoothState = $('#main').smoothState(options).data('smoothState');
});