$(document).ready(function(){

    // Menu
    var iconMenu = $('.icon-menu');
    var menu = $('.menu');
    var logoHeader = $('header .logo');
    var logoBanner = $('.logo-center');

    logoHeader.hide();
    logoBanner.show();

    iconMenu.click(function(event) {
        event.preventDefault();

        menu.slideToggle();

        if (logoHeader.is(':visible')) {
            logoHeader.fadeOut(function() {
                logoBanner.fadeIn();
            });
        } else {
            logoBanner.fadeOut(function() {
                logoHeader.fadeIn();
            });
        }

        iconMenu.toggleClass('active');

        return false;
    });

});
