console.log("Thanks for coming!");

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
    x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
});

$('#click_advance').click(function() {
    $('#display_advance').toggle('1000');
    $("i", this).toggleClass("fas fa-bars fas fa-x");
});