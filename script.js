
/*Sticky navigation*/
$(document).ready(function() {
  $('.js--om-mig').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky-nav');

    } else {
      $('nav').removeClass('sticky-nav');

    }
  },  {
    offset:'60px;'
  });

/*Scroll animations*/

$('.js--wp-1').waypoint(function(direction) {
  $('.js--wp-1').addClass('animate__animated animate__fadeIn');
}
, {
  offset: '50%'
});

$('.js--wp-2').waypoint(function(direction) {
  $('.js--wp-2').addClass('animate__animated animate__fadeInRight');
}
, {
  offset: '50%'
});

$('.js--wp-3').waypoint(function(direction) {
  $('.js--wp-3').addClass('animate__animated animate__fadeInRight');
}
, {
  offset: '50%'
});

$('.js--wp-4').waypoint(function(direction) {
  $('.js--wp-4').addClass('animate__animated animate__fadeInRight');
}
, {
  offset: '50%'
});

$('.js--wp-5').waypoint(function(direction) {
  $('.js--wp-5').addClass('animate__animated animate__fadeInRight');
}
, {
  offset: '50%'
});

$('.js--wp-6').waypoint(function(direction) {
  $('.js--wp-6').addClass('animate__animated animate__fadeInRight');
}
, {
  offset: '50%'
});

$('.js--wp-7').waypoint(function(direction) {
  $('.js--wp-7').addClass('animate__animated animate__fadeInRight');
}
, {
  offset: '50%'
});

$('.js--wp-8').waypoint(function(direction) {
  $('.js--wp-8').addClass('animate__animated animate__fadeInRight');
}
, {
  offset: '50%'
});

$('.js--wp-9').waypoint(function(direction) {
  $('.js--wp-9').addClass('animate__animated animate__fadeInRight');
}
, {
  offset: '50%'
});

$('.js--wp-10').waypoint(function(direction) {
  $('.js--wp-10').addClass('animate__animated animate__fadeInRight');
}
, {
  offset: '50%'
});

$('.js--wp-11').waypoint(function(direction) {
  $('.js--wp-11').addClass('animate__animated animate__fadeInRight');
}
, {
  offset: '50%'
});

$('.js--wp-12').waypoint(function(direction) {
  $('.js--wp-12').addClass('animate__animated animate__fadeInRight');
}
, {
  offset: '50%'
});


$('.js--header').waypoint(
    (direction) => {
      if (direction === 'up') {
        $('.js--wp-1').removeClass('animate__animated animate__fadeIn');
        $('.js--wp-2').removeClass('animate__animated animate__fadeInRight');
        $('.js--wp-3').removeClass('animate__animated animate__fadeInRight');
        $('.js--wp-4').removeClass('animate__animated animate__fadeInRight');
        $('.js--wp-5').removeClass('animate__animated animate__fadeInRight');
        $('.js--wp-6').removeClass('animate__animated animate__fadeInRight');
        $('.js--wp-7').removeClass('animate__animated animate__fadeInRight');
        $('.js--wp-8').removeClass('animate__animated animate__fadeInRight');
        $('.js--wp-9').removeClass('animate__animated animate__fadeInRight');
        $('.js--wp-10').removeClass('animate__animated animate__fadeInRight');
        $('.js--wp-11').removeClass('animate__animated animate__fadeInRight');
        $('.js--wp-12').removeClass('animate__animated animate__fadeInRight');

      }
    },
    {
      offset: '-25%',
    }
  );

/*mobile nav*/
$('.js--nav-icon').click(function() {
  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon i');

  nav.slideToggle(200);
  if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
  } else {
    icon.addClass('ion-navicon-round');
    icon.removeClass('ion-close-round');
  }
});




  /*var waypoint = new Waypoint({
  element: document.getElementById('px-offset-waypoint'),
  handler: function(direction) {
    notify('I am 20px from the top of the window')
  },
  offset: 20
})*/

});
