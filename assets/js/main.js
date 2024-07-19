$(document).ready(function(){

    // Menu
    var iconMenu = $('.icon-menu');
    var menu = $('.menu');
    var logoHeader = $('.logo');
    var logoBanner = $('.logo-center');

    iconMenu.click(function(event) {
        event.preventDefault();

        // Toggle menu visibility
        menu.slideToggle();

        // Show/hide logoHeader and logoBanner with fade effect
        if (logoHeader.is(':visible')) {
            logoHeader.fadeOut();
        } else {
            logoHeader.fadeIn();
        }

        if (logoBanner.is(':visible')) {
            logoBanner.fadeOut();
        } else {
            logoBanner.fadeIn();
        }

        // Toggle 'active' class on iconMenu, logoHeader, and logoBanner
        iconMenu.toggleClass('active');
        logoHeader.toggleClass('active');
        logoBanner.toggleClass('active');

        return false;
    });

});
