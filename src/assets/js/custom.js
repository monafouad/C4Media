$(document).ready(function() {
    function checkPosition() {
        if ($(this).scrollTop() > 200) {
            $('.btn_up').fadeIn(500);
        } else {
            $('.btn_up').fadeOut(300);
        }
    }
    // Show or hide the sticky footer button
    $(window).scroll(checkPosition);

    // Animate the scroll to top
    $('.btn_up').click(function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
    })

    checkPosition();
});

$(function() {
  $('.scroll[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});