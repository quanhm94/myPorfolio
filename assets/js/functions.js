$(window).scroll(function(){
  photoStripScroll();
  tesScroll();
});


function photoStripScroll(){
  var wScroll = $(window).scrollTop();
  $('.illu-strip').css('background-position', 'center -'+ wScroll +'px');
}

function tesScroll(){
  var wScroll = $(window).scrollTop();
  var tesTop = $('.tes').offset().top;

  if ((tesTop - (0.4 * tesTop)) <= wScroll) {
    $('.faces').addClass('launch');
    if(!$('.face').hasClass('bubble-open')){

      setTimeout(function(){
        if ($(window).width() > 640) {
          $('.face:nth-child(3)').addClass('bubble-open');
        }
        else {
          $('.face:first-child').addClass('bubble-open');
        }
      }, 400);
    }
  }
}

$(function(){
  tesBubbleClick();
});

function tesBubbleClick() {
  $('.face').on('click', function(){
    var $this = $(this),
        distanceTop = $this.position().top,
        moveRight = -(distanceTop - 240),
        distanceLeft = $this.position().left,
        moveLeft = -distanceLeft;
    if(!$this.hasClass('back-button')){
      if ($(window).width() > 640) {
        $this.parent().css('top', moveRight+ 'px');
      }
      else {
        $this.parent().css('left', moveLeft + 'px');
      }
        $(this).addClass('bubble-open')
          .siblings().removeClass('bubble-open');
    }
    else {
      smallScreenMentorReset();
    }
  });

}

function smallScreenMentorReset() {
  $('.faces').css({
    'top' : '240px',
    'left': '0px'
  });
  $('.face').first().addClass('bubble-open')
      .siblings().removeClass('bubble-open');
}

function largeScreenMentorReset() {
  $('.faces').css({
    'top' : '0px',
    'left': '0px'
  });
  $('.face:nth-child(3)').addClass('bubble-open')
    .siblings().removeClass('bubble-open');
}
$(window).resize(function() {
  if($(window).width() < 640) {
    smallScreenMentorReset();
  }
  else {
    largeScreenMentorReset();
  }
});

$(function() {

  if($('.pic-thump').on('mouseover', function() {
    var $this = $(this);
    console.log("haha");
    $this.addClass('is-hovered')
          .siblings().removeClass('is-hovered');
    if((($this.index()+1) % 3) === 0) {
      $this.addClass('is-3rd-child');
    }
    if(((($this.index()+1) % 3) === 1) & ($(window).width() < 640)) {
      $this.addClass('is-1st-child');
    }
  }));

});
