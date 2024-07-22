$(document).ready(function(){

    // Menu
    var header = $('header');
    var iconMenu = $('.icon-menu');
    var menu = $('.menu');
    var logoHeader = $('header.home .logo');
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

        if (header.hasClass('page') & iconMenu.hasClass('active')) {
            header.css({
                position: 'fixed',
                top: '0',
                width: '100%',
                height: '100%'
            });
        } else {
            header.css({
                position: '',
                top: '',
                width: '',
                height: ''
            });
        }

        return false;
    });

});
