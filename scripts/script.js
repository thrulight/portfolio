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

// Scroll down to product projects
function goToProduct() {
  var digitalProjects = document.getElementById("productProjects");
  digitalProjects.scrollIntoView({behavior: "smooth"});
  console.log("goToTop");
}

//Navigation bar mobile version
function openNav() {
   document.getElementById("nav-bar-mobile").style.display= "flex";
   document.getElementById("icon").style.display= "none";
   document.getElementById("overlay").style.width= "100%";
   document.getElementById("X").style.display= "flex";
}
function closeNav() {
   document.getElementById("nav-bar-mobile").style.display= "none";
   document.getElementById("icon").style.display= "flex";
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
  //$(this).find('.studioImg').fadeIn(300);
  $(this).find('.studioImg').addClass('visible');

  $(this).find('.studioImg').css({
      left:e.pageX, top:e.pageY
    });
}).mouseleave(function(){
  //$(this).find('.studioImg').fadeOut(300);
  $(this).find('.studioImg').removeClass('visible');

  $(this).find('.studioImg').css({
      left:e.pageX, top:e.pageY
      });
});

//play video when enters the viewport
function playPauseVideo() {
    let videos = document.querySelectorAll("video");
    videos.forEach((video) => {
        // We can only control playback without insteraction if video is mute
        video.muted = true;
        // Play is a promise so we need to check we have it
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then((_) => {
                let observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (
                                entry.intersectionRatio !== 1 &&
                                !video.paused
                            ) {
                                video.pause();
                            } else if (video.paused) {
                                video.play();
                            }
                        });
                    },
                    { threshold: 0.2 }
                );
                observer.observe(video);
            });
        }
    });
}

//Header sentence animation
const carouselText = [
  {text: "designer de service", color: "#547246"},
  {text: "designer UX/UI", color: "#09358B"},
  {text: "designer produit", color: "#972B2B"}
]

$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}