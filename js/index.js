'use strict';

window.sr = ScrollReveal({ reset: true });
sr.reveal('.first', { duration: 2000, viewFactor: 0.3, origin: 'top'});
sr.reveal('.last', { duration: 2000, viewFactor: 0.3, origin: 'bottom'});
sr.reveal('.arrow-image', { duration: 2000, viewFactor: 0.3, delay: 700, origin: 'top'});

function scrollNav() {
  $('.anchor').click(function(){  
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 50
    }, 700);
    return false;
  });
  $('.scrollTop a').scrollTop();
}

function scrollGrid(grid, expand) {
  $(grid).click(function(){
    if (document.querySelector('.expand') == null) {
      document.querySelector(expand).classList.toggle('expand');
    } else {
      document.querySelector('.expand').classList.remove('expand');
      document.querySelector(expand).classList.toggle('expand');
    }
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 50
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}

function closeGrid() {
  var closeButtons = document.querySelectorAll('.fa-times');
  closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      document.querySelector('.expand').classList.remove('expand');
    });
  });
}

scrollNav();
scrollGrid('.work-expand', '.grid-work');
scrollGrid('.school-expand', '.grid-school');
scrollGrid('.personal-expand', '.grid-personal');
closeGrid();