$(document).ready(function(){

    // Menu
    var body = $('body');
    var header = $('header');
    var headerPage = $('header.page .top');
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

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
          body.addClass('hidden');
        } else {
          body.removeClass('hidden');
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    });

    headerPage.addClass("p-relative");

    $(window).on('scroll', function () {
        if ($(window).scrollTop() === 0) {
            headerPage.addClass("p-relative");
        } else {
            if ($(window).scrollTop() > 0) {
                if ($(document).scrollTop() > $(document).data('prevScrollTop')) {
                    headerPage.addClass("hide-nav-bar");
                    headerPage.removeClass("p-relative");
                } else {
                    headerPage.removeClass("hide-nav-bar");
                }
            }
        }
        $(document).data('prevScrollTop', $(document).scrollTop());
    });

});
