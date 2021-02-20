$(document).ready(function() {

    $("a").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                window.location.hash = hash;
            });
        }
    });
});

function timer() {

    var countDownDate = new Date("Jun 16, 2021 09:00:00").getTime();

    var x = setInterval(function() {


        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));


        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
            minutes + "m ";


        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "00:00:00";
        }
    }, 1000);
}