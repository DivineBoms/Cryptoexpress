function preloader() {
  $("#preloader").delay(1000).fadeOut();
}

$(window).on("load", function () {
  preloader();
  wowAnimation();
});

	// Sidebar Menu JS
	$('#sidebar-menu').metisMenu();
	
	// Header Sticky, Go To Top JS
	$(window).on('scroll', function() {
		// Header Sticky JS
		if ($(this).scrollTop() >150){  
			$('.header-area').addClass("is-sticky");
		}

		else{
			$('.header-area').removeClass("is-sticky");
		};

		// Go To Top JS
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});
	
		// Webpage FullScreen JS
		$("#fullscreen-button").on("click", function toggleFullScreen() {
			if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
				if (document.documentElement.requestFullScreen) {
					document.documentElement.requestFullScreen();
				} else if (document.documentElement.mozRequestFullScreen) {
					document.documentElement.mozRequestFullScreen();
				} else if (document.documentElement.webkitRequestFullScreen) {
					document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
				} else if (document.documentElement.msRequestFullscreen) {
					document.documentElement.msRequestFullscreen();
				}
			} else {
				if (document.cancelFullScreen) {
					document.cancelFullScreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			}
		});
		$('.fullscreen-btn').on('click', function() {
			$(this).toggleClass('active');
		});
		// Burger Menu JS
	$('.burger-menu').on('click', function() {
		$(this).toggleClass('active');
		$('.main-content').toggleClass('hide-sidemenu-area');
		$('.sidebar-menu, .side-menu-area').toggleClass('toggle-sidemenu-area');
		$('.navbar').toggleClass('toggle-navbar-area');
	});
	$('.responsive-burger-menu').on('click', function() {
		$('.responsive-burger-menu').toggleClass('active');
		$('.sidebar-menu, .side-menu-area').toggleClass('active-sidemenu-area');
	});

	// Search Popup JS
	$('.close-btn').on('click', function() {
		$('.search-overlay').fadeOut();
		$('.search-btn').show();
		$('.close-btn').removeClass('active');
	});
	$('.search-btn').on('click', function() {
		$(this).hide();
		$('.search-overlay').fadeIn();
		$('.close-btn').addClass('active');
	});

	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();   
	});
	function toggleTheme(){
		if( localStorage.getItem("shala-theme") !== null){
		  if( localStorage.getItem("shala-theme") === "dark"){
				 $("body").addClass("dark");
		  }
		  else{
			$("body").removeClass("dark");
		  }
		}
		updateIcon();
	  }
	  toggleTheme();
	  $(".toggle-theme ").on("click",function(){
		$("body").toggleClass("dark");
		if($("body").hasClass("dark")){
			localStorage.setItem("shala-theme","dark");
		}
		else{
			localStorage.setItem("shala-theme","light");
		}
		updateIcon();
	  });
	  function updateIcon(){
	   if($("body").hasClass("dark")){
		$(".toggle-theme i").removeClass("fa-moon");
		$(".toggle-theme i").addClass("fa-sun");
	   }
	   else{
			 $(".toggle-theme i").removeClass("fa-sun");
		$(".toggle-theme i").addClass("fa-moon");
	   }
	  };
	
	  // Copy
function myFunction() {
	/* Get the text field */
	var copyText = document.getElementById("myInput");
  
	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
	/* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText.value);
  
	/* Alert the copied text */
	alert("Copied the text: " + copyText.value);
  }



$('.owl-bank-wallet').owlCarousel({
    loop:true,
    center:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
	navText: [''],
    nav: false,
    responsive:{
      0: {
        items: 1
      },
      680: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  
  $(document).on('click', '.owl-item>div', function(){
    var $speed = 1000;
    $owl.trigger('to.owl.carousel',[$(this).data('position'), $speed]);
  });
  
  $('[data-toggle="tooltip"]').tooltip();