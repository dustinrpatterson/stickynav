$(document).ready(function () {

    //Code for accordian 
    $('.c-product-level-blade_button').click(function () {
        $("i", this).toggleClass("fa-plus fa-minus");
    });

    //Code for sticky-nav
    var midNav = $('.c-product-sticky-nav');

    if (midNav.length > 0) {

        var mainNav = $('#component-navigation');
        var midNavOffsetY = midNav.offset().top;

        window.onscroll = function () {
            var scrollTop = $(window).scrollTop();

            if (midNavOffsetY - 170 < scrollTop) {
                //console.log("170");
                midNav.addClass('sticky');
                $('#section1').css("margin-top", "45px");
                mainNav.hide();
            } else {
                midNav.removeClass('sticky');
                $('#section1').css("margin-top", "0px");
                mainNav.show();
            }
        }
    };

    //Code to add "active" class on sticky nav as user scrolls through it
    var sections = $('section');
    var nav = $('#sticky-nav');
    var nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop() +5;

        sections.each(function () {
            var top = $(this).offset().top - nav_height;
            var bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active-sticky-link');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active-sticky-link');
            }
        });
    });

    //This moves the section to the top of the page
    nav.find('a').on('click', function (e) {
        var $el = $(this);
        var id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
        });
        return false;
    });

});