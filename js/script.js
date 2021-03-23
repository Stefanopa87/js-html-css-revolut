function onButton(){

  $('.hamburger-menu.active').removeClass('active');

  $(this).next().addClass('active');
}

function bodyClick(event){

  $('.hamburger-menu.active').removeClass('active');  

  event.stopPropagation();
}



function init(){
  $('.menu').hover(onButton);

  $('body').click(bodyClick);
}

$(document).ready(init);
