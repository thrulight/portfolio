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

//Fade in projects page
//Fade in flex-item animation
$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll(function() {

    /* Check the location of each desired element */
    $('.flex-item').each(function(i) {

      /* If the object is half in the window, fade it it */
      var bottom_of_object = $(this).position().top + $(this).outerHeight()/2;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 500);
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
      var bottom_of_object = $(this).position().top + $(this).outerHeight()/1;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 500);
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
