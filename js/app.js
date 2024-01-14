/*=============================================
	=    		 Preloader			      =
=============================================*/
function preloader() {
  $("#preloader").delay(2000).fadeOut();
}

$(window).on("load", function () {
  preloader();
  wowAnimation();
});

/*=============================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($(".menu-area li.menu-item-has-children ul").length) {
  $(".menu-area .navigation li.menu-item-has-children").append(
    '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
  );
}

//Mobile Nav Hide Show
if ($(".mobile-menu").length) {
  var mobileMenuContent = $(".menu-area .main-menu").html();
  $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

  //Dropdown Button
  $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
    "click",
    function () {
      $(this).toggleClass("open");
      $(this).prev("ul").slideToggle(300);
    }
  );
  //Menu Toggle Btn
  $(".mobile-nav-toggler").on("click", function () {
    $("body").addClass("mobile-menu-visible");
  });

  //Menu Toggle Btn
  $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
    $("body").removeClass("mobile-menu-visible");
  });
}

/*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();
  if (scroll < 245) {
    $("#sticky-header").removeClass("sticky-menu");
    $(".scroll-to-target").removeClass("open");
    $("#header-top-fixed").removeClass("header-fixed-position");
    $("#header-fixed-height").removeClass("active-height");
  } else {
    $("#sticky-header").addClass("sticky-menu");
    $(".scroll-to-target").addClass("open");
    $("#header-top-fixed").addClass("header-fixed-position");
    $("#header-fixed-height").addClass("active-height");
  }
});

/*=============================================
=     Offcanvas Menu      =
=============================================*/
$(".menu-tigger").on("click", function () {
  $(".extra-info,.offcanvas-overly").addClass("active");
  return false;
});
$(".menu-close,.offcanvas-overly").on("click", function () {
  $(".extra-info,.offcanvas-overly").removeClass("active");
});

/*=============================================
	=    		 Wow Active  	         =
=============================================*/
function wowAnimation() {
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: false,
    live: true,
  });
  wow.init();
}

/*=============================================
	=    		 data background 	         =
=============================================*/
$("[data-background]").each(function () {
  $(this).css(
    "background-image",
    "url(" + $(this).attr("data-background") + ") "
  );
});

/*=============================================
	=    		Counter Js			      =
=============================================*/
$(".counter").counterUp({
  delay: 10,
  time: 3000,
});
/*=============================================
	=    		tab Js		      =
=============================================*/

$(".hover-tab ul.tab-menu li").on("mouseover", function (g) {
  var tabT = $(this).closest(".hover-tab"),
    indexT = $(this).closest("li").index();
  tabT.find("li").siblings("li").removeClass("active");
  $(this).closest("li").addClass("active");
  tabT
    .find(".tab-area")
    .find("div.tab-item")
    .not("div.tab-item:eq(" + indexT + ")")
    .hide();
  tabT
    .find(".tab-area")
    .find("div.tab-item:eq(" + indexT + ")")
    .show();
  g.preventDefault();
});
/*=============================================
	=    		pricing table		      =
=============================================*/
$(document).ready(function () {
  $("#monthly").click(function () {
    $(this).addClass("active");
    $("#yearly").removeClass("active");

    $(".monthlyPriceList").removeClass("d-none");
    $(".monthlyPriceList").addClass("fadeIn");
    $(".yearlyPriceList").addClass("d-none");

    $(".indicator").css("left", "2px");
  });

  $("#yearly").click(function () {
    $(this).addClass("active");
    $("#monthly").removeClass("active");

    $(".yearlyPriceList").removeClass("d-none");
    $(".yearlyPriceList").addClass("fadeIn");
    $(".monthlyPriceList").addClass("d-none");

    $(".indicator").css("left", "163px");
  });
});
/*=============================================
	=    		feedback	      =
=============================================*/
var feedbackTwo = new Swiper(".feedback__active-2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  roundLengths: true,
  fadeEffect: { crossFade: true },
  effect: "cards",
  grabCursor: true,
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".feedback__button-next-2",
    prevEl: ".feedback__button-prev-2",
  },
});
/*=============================================
	=    		brands	      =
=============================================*/
var brandCarousel = $('.brandCarousel');
brandCarousel.owlCarousel({
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  slideTransition: 'linear',
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  autoplaySpeed: 4500,
  responsive: {
    0: {
      items: 2
    },
    500: {
      items: 3
    },
    600: {
      items: 4
    },
    800: {
      items: 4
    },
    1200: {
      items: 4
    }

  }
});

/*=============================================
	=    		Accordion	      =
=============================================*/
if ($(".accordion_box").length) {
  $(".accordion_box").on("click", ".acc-btn", function () {
    var outerBox = $(this).parents(".accordion_box");
    var target = $(this).parents(".accordion");

    if ($(this).next(".acc_body").is(":visible")) {
      $(this).removeClass("active");
      $(this).next(".acc_body").slideUp(300);
      $(outerBox).children(".accordion").removeClass("active-block");
    } else {
      $(outerBox).find(".accordion .acc-btn").removeClass("active");
      $(this).addClass("active");
      $(outerBox).children(".accordion").removeClass("active-block");
      $(outerBox).find(".accordion").children(".acc_body").slideUp(300);
      target.addClass("active-block");
      $(this).next(".acc_body").slideDown(300);
    }
  });
}
/*=============================================
	=    		Newsletter	      =
=============================================*/
const { to, fromTo, set } = gsap

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

document.querySelectorAll('.newsletter-form').forEach(form => {

  let input = form.querySelector('input'),
    button = form.querySelector('button'),
    getVar = variable => getComputedStyle(button).getPropertyValue(variable)

  input.addEventListener('input', e => {
    form.classList.toggle('valid', validateEmail(input.value))
  })

  form.addEventListener('submit', e => {

    e.preventDefault()

    if (!validateEmail(input.value)) {
      input.focus()
      return
    }

    if (!button.classList.contains('active')) {

      button.classList.add('active')

      to(button, {
        keyframes: [{
          '--left-wing-first-x': '50%',
          '--left-wing-first-y': '100%',
          '--right-wing-second-x': '50%',
          '--right-wing-second-y': '100%',
          duration: .2,
          onComplete() {
            set(button, {
              '--left-wing-first-y': '0%',
              '--left-wing-second-x': '40%',
              '--left-wing-second-y': '100%',
              '--left-wing-third-x': '0%',
              '--left-wing-third-y': '100%',
              '--left-body-third-x': '40%',
              '--right-wing-first-x': '50%',
              '--right-wing-first-y': '0%',
              '--right-wing-second-x': '60%',
              '--right-wing-second-y': '100%',
              '--right-wing-third-x': '100%',
              '--right-wing-third-y': '100%',
              '--right-body-third-x': '60%'
            })
          }
        }, {
          '--left-wing-third-x': '20%',
          '--left-wing-third-y': '90%',
          '--left-wing-second-y': '90%',
          '--left-body-third-y': '90%',
          '--right-wing-third-x': '80%',
          '--right-wing-third-y': '90%',
          '--right-body-third-y': '90%',
          '--right-wing-second-y': '90%',
          duration: .2
        }, {
          '--rotate': '50deg',
          '--left-wing-third-y': '95%',
          '--left-wing-third-x': '27%',
          '--right-body-third-x': '45%',
          '--right-wing-second-x': '45%',
          '--right-wing-third-x': '60%',
          '--right-wing-third-y': '83%',
          duration: .25
        }, {
          '--rotate': '60deg',
          '--plane-x': '-8px',
          '--plane-y': '40px',
          duration: .2
        }, {
          '--rotate': '40deg',
          '--plane-x': '45px',
          '--plane-y': '-300px',
          '--plane-opacity': 0,
          duration: .375,
          onComplete() {
            setTimeout(() => {
              button.removeAttribute('style')
              fromTo(button, {
                opacity: 0,
                y: -8
              }, {
                opacity: 1,
                y: 0,
                clearProps: true,
                duration: .3,
                onComplete() {
                  button.classList.remove('active')
                }
              })
            }, 2500)
          }
        }]
      })

      to(button, {
        keyframes: [{
          '--text-opacity': 0,
          '--border-radius': '0px',
          '--left-wing-background': getVar('--primary-dark'),
          '--right-wing-background': getVar('--primary-dark'),
          duration: .1
        }, {
          '--left-wing-background': getVar('--primary'),
          '--right-wing-background': getVar('--primary'),
          duration: .15
        }, {
          '--left-body-background': getVar('--primary-dark'),
          '--right-body-background': getVar('--primary-darkest'),
          duration: .25,
          delay: .1
        }, {
          '--trails-stroke': '171px',
          duration: .22,
          delay: .22
        }, {
          '--success-opacity': 1,
          '--success-x': '0px',
          duration: .2,
          delay: .15
        }, {
          '--success-stroke': '0px',
          duration: .15
        }]
      })

    }

  })

})

$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

