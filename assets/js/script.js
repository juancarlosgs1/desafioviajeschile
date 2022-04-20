$("#carouselExampleControls").carousel({
    interval: 4000
  })


  $("a").click(function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        var scrolear = this.hash;

        $('html, body').animate({
            scrollTop: $(scrolear).offset().top
        }, 1500, function() {
            window.location.hash = scrolear;
        });
    }
});