function onButton(){
  // $('.hamburger-menu').addClass('active');
  console.log('sei sopra');


      $('.hamburger-menu').each(function() {

          $(this).addClass('active');
      });

}

function init(){
  $('.menu').hover(onButton);
}

$(document).ready(init);
