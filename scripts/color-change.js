$( window ).ready(function() {

    //var wHeight = $(window).height();
    var clientHeight = document.getElementsByClassName('slide').clientHeight;

    $('.slide')
      .height(clientHeight)
      .scrollie({
        scrollOffset : -500, //Offset for color change. Higher requires more offset
        scrollingInView : function(elem) {

          var bgColor = elem.data('background');

          $('body').css('background-color', bgColor);

        }
      });

  });
