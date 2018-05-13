var images = ['url(assets/images/image01.jpg)','url(assets/images/image02.jpg)','url(assets/images/image03.jpg)','url(assets/images/image04.jpg)','url(assets/images/image05.jpg)'];
var current = 0;
function newBackground(){
  $('body').css('background-image',images[++current % images.length]);
  setTimeout(newBackground, 10000);
}
$(document).ready(function(){
  $('body').css('background-image',images[0]);
  $('body').css('background-repeat', 'no-repeat');
  $('body').css('background-size', '120em 60em');
  $('body').css('background-position', 'center');
  $('body').css('transition', 'background-image 1s ease-in-out')
  $('.content').hide().delay(200).fadeIn('slow');
  setTimeout(newBackground, 10000);
});
