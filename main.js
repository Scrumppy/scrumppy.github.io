// Smooth Scroll 
$('#view-work').on('click', function () {
  const images = $('#images').position().top;

  $('html, body').animate({
    scrollTop: images
  }, 900);
});

$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('.scroll').fadeIn(); 
      } else { 
          $('.scroll').fadeOut(); 
      } 
  }); 
  $('.scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});

/*var t1 = 0;
window.onscroll = scroll1;

function scroll1() {
  var toTop = document.getElementById('toTop');
  window.scrollY > 0 ? toTop.style.display = 'Block' : toTop.style.display = 'none';
}


function topFunction() {
  var y1 = window.scrollY;
  y1 = y1 - 1000;
  window.scrollTo(0, y1);
  if (y1 > 0) {
    t1 = setTimeout("topFunction()", 100);
  } else {
    clearTimeout(t1);
  }
}*/