$(function() {

	$("#my-menu").mmenu({
        extensions: ['effect-menu-slide', 'pagedim-black'],
        navbar: {
        	title: 'Центр Боевых Искусств <br> "Кацу Хаяби"'
        }
      });

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});



	$('a[href^="#"]').on('click', function(event) {

	    var target = $(this.getAttribute('href'));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }

	});

	$('.slider__content').slick({ 
		autoplay: true,
 		 autoplaySpeed: 2000,
	});

	$('.switch label').on('click', function(){
  		var indicator = $(this).parent('.switch').find('span');
  		if ( $(this).hasClass('right') ){
			$(indicator).addClass('right');
  		} else {
    		$(indicator).removeClass('right');
 	 	}
	});

	$("#my-menu").mmenu({
        extensions: ['effect-menu-slide', 'pagedim-black'],
        navbar: {
        	title: '<img src="img/logo.png" alt="logo">'
        }
      });

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});


});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

$(window).scroll(function() {
		$('.slider').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+600) {
				$(this).addClass('fadeIn')
			}
		});

		$('.main__top_row').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass('fadeInLeft')
			}
		});

		$('.main__bottom_row').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+900) {
				$(this).addClass('fadeInRight')
			}
		});

		$('.about').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+600) {
				$(this).addClass('fadeIn')
			}
		});

		$('.teachers').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+600) {
				$(this).addClass('fadeIn')
			}
		});

		$('.place').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+600) {
				$(this).addClass('fadeIn')
			}
		});
});


var rellax = new Rellax('.sacura');

// PRELOADER
document.body.onload = function() {

	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		var headerimg = document.getElementById('header__img');
		var headerimgsecond = document.getElementById('header__img-second');
		var circle = document.getElementById('circle');
		if( !preloader.classList.contains('done') )
			{
				preloader.classList.add('done');
			}
		if( !headerimg.classList.contains('fadeInLeft') )
			{
				headerimg.classList.add('fadeInLeft');
			}
		if( !headerimgsecond.classList.contains('rotateInDownLeft') )
			{
				headerimgsecond.classList.add('rotateInDownLeft');
			}
		if( !circle.classList.contains('fadeIn') )
			{
				circle.classList.add('fadeIn');
			}

		}, 500);
}
// PRELOADER END

// MMENU

// MMENU END