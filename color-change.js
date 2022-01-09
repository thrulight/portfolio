$( window ).ready(function() {

    //var wHeight = $(window).height();
    var clientHeight = document.getElementsByClassName('slide').clientHeight;

    $('.slide')
      .height(clientHeight)
      .scrollie({
        scrollOffset : -50,
        scrollingInView : function(elem) {

          var bgColor = elem.data('background');

          $('body').css('background-color', bgColor);

        }
      });

  });
