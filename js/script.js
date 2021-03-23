function onButton(){
  // $('.hamburger-menu').addClass('active');
  console.log('sei sopra');

  $('.hamburger-menu.active').removeClass('active');
  $(this).next().addClass('active');


}

function init(){
  $('.menu').hover(onButton);
}

$(document).ready(init);
