$(documen).ready(function() {
    $(".menu--navbar__item").slick(function(Event){
        $(".menu--navbar__item").toggleClass('active');
        $('body').toggleClass('lock')
    });
});
