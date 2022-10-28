//Cursor animation start
jQuery(document).ready(function() {
  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;

//position of the circle
  $(document).mousemove(function(e){
    mouseX = e.pageX - 20;
    mouseY = e.pageY - 20;
  });

//3 is the speed, the lower the faster
  setInterval(function(){
    xp += ((mouseX - xp)/3);
    yp += ((mouseY - yp)/3);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);

});

//Cursor animation end

//Circle change size and color on link hover start
function circleSmall() {
  console.log("circleSmall");

  document.getElementById("circle").style.transform = "scale(2)";
  document.getElementById("circle").style['background-color'] = "#60827d";
}

function circleBig() {
  console.log("circleBig");

  document.getElementById("circle").style.transform = "scale(1)";
  document.getElementById("circle").style['background-color'] = "#f2ede4";
}

//Circle change size and color on link hover end

//Circle change size on link hover start
function circleSmallOnly() {
  console.log("circleSmallOnly");

  document.getElementById("circle").style.transform = "scale(2)";
}

function circleBigOnly() {
  console.log("circleBigOnly");

  document.getElementById("circle").style.transform = "scale(1)";
}
//Circle change size on link hover end

//Fade in projects page
//Fade in flex-item animation
$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll(function() {

    /* Check the location of each desired element */
    $('.flex-item').each(function(i) {

      /* If the object is a third in the window, fade it it */
      var bottom_of_object = $(this).position().top + $(this).outerHeight()/4;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 0.2);
      }
    });
  });
});

//Fade in about page
//Fade in paragraph animation
$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll(function() {

    /* Check the location of each desired element */
    $('.paragraph').each(function(i) {

      /* If the object is half in the window, fade it it */
      var bottom_of_object = $(this).position().top + $(this).outerHeight()/3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 300);
      }
    });
  });
});

// Scroll to the top of the page
function topFunction() {
  var topPage = document.getElementById("topPage");
  topPage.scrollIntoView({behavior: "smooth"});
  console.log("goToTop");
}

// Scroll to the UX/UI projects
function goToDigital() {
  var digitalProjects = document.getElementById("digitalProjects");
  digitalProjects.scrollIntoView({behavior: "smooth"});
  console.log("goToTop");
}

//Navigation bar mobile version
function openNav() {
   document.getElementById("nav-bar-mobile").style.display= "block";
   document.getElementById("icon").style.display= "none";
   document.getElementById("overlay").style.width= "100%";
   document.getElementById("X").style.display= "block";
}
function closeNav() {
   document.getElementById("nav-bar-mobile").style.display= "none";
   document.getElementById("icon").style.display= "block";
   document.getElementById("overlay").style.width= "0%";
   document.getElementById("X").style.display= "none";
}

// burger
function onClick(e) {
    e.target.classList.toggle("open")
  }

// nav bar disapears

if ( $(window).width() <= 900 ) {
  // Your mobile code goes here
}else{
  // Your desktop code goes here
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("myTopnav").style.top = "0";
    } else {
      document.getElementById("myTopnav").style.top = "-12vh";
    }
    prevScrollpos = currentScrollPos;
  }
}

// slide in animation
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag2");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

//studio image on hover
$('.imagehover').mousemove(function(e){
  //$(this).find('.studioImg').fadeIn();
  $(this).find('.studioImg').addClass('visible');

  $(this).find('.studioImg').css({
      left:e.pageX, top:e.pageY
    });
}).mouseleave(function(){
  $(this).find('.studioImg').removeClass('visible');
  //$(this).find('.studioImg').fadeOut();
  $(this).find('.studioImg').css({
      left:e.pageX, top:e.pageY
      });
});
