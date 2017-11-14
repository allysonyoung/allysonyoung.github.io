window.sr = ScrollReveal({ reset: true });
sr.reveal('.hi', { duration: 2000, viewFactor: 0.3, origin: 'top'});
sr.reveal('.intro', { duration: 2000, viewFactor: 0.3, origin: 'bottom'});
sr.reveal('.arrow-image', { duration: 2000, viewFactor: 0.3, delay: 700, origin: 'top'});

function scrollNav() {
  $('.anchor').click(function(){  
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 50
    }, 1000);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();