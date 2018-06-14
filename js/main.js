$(function() {
    initialSlider();

    sameHeight();

    lightbox.option({
        albumLabel: "Изображение %1 из %2"
    });

    tabs();

    playVideo();

    carousel();

    inputMasks();

    animateAnchor();

    mobileMenu();
})

window.onscroll = function() {
    header()
};

$(window).resize(function() {
    sameHeight();
})

function initialSlider() {

    var swiperPlan = new Swiper('.js-plan', {
        navigation: {
            nextEl: '.js-plan-next',
            prevEl: '.js-plan-prev',
        },
    });

    $('.plan-pagination li').on("click", function() {
        $('.plan-pagination li').removeClass('active');
        $(this).addClass('active');
        var id = $(this).data('id');
        swiperPlan.slideTo(id);
    })

    $('.js-plan-next').on("click", function() {
        $('.plan-pagination li').removeClass('active');
        $('[data-id="' + swiperPlan.realIndex + '"]').addClass('active');
    });

    $('.js-plan-prev').on("click", function() {
        $('.plan-pagination li').removeClass('active');
        $('[data-id="' + swiperPlan.realIndex + '"]').addClass('active');
    });

    var swiperBanner = new Swiper('.js-banner-slider', {
        autoplay: true,
        loop: true
    });


    var swiperAdv = new Swiper('.js-adv-mobile', {
        pagination: {
            el: '.swiper-pagination',
        },
    });


    var swiperGallery = new Swiper('.js-gallery', {
        slidesPerView: 6,
        navigation: {
            nextEl: '.js-gallery-next',
            prevEl: '.js-gallery-prev',
        },
        breakpoints: {

            640: {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                }
            }
        }
    });

    var js_gallery_video = new Swiper('.js-gallery-video', {
        slidesPerView: 3,
        navigation: {
            nextEl: '.js-gallery-next',
            prevEl: '.js-gallery-prev',
        },
        breakpoints: {

            640: {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                }
            }
        }
    });
}

function sameHeight() {
    var bannerRightHeight = $('.banner-right').height();
    $('.banner-social').height(bannerRightHeight);
}


function tabs() {
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    })
}

function header() {
    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    if (window.pageYOffset != 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function playVideo() {
    var video = document.getElementById('video-cottej');
    var video_1 = document.getElementById('video-cottej-1');
    var video_2 = document.getElementById('video-cottej-2');
    var video_3 = document.getElementById('video-cottej-3');
    $('.js-holder').click(function() {
        video.play();
        $(this).addClass('hidden');
    })
    $('#video-1').click(function() {
        video_1.play();
        $(this).addClass('active');
    })

    $('#video-2').click(function() {
        video_2.play();
        $(this).addClass('active');
    })
    $('#video-3').click(function() {
        video_3.play();
        $(this).addClass('active');
    })
}

function carousel() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });
}

function mobileMenu() {
    $('.js-gamburger').click(function() {
        $(this).toggleClass('open');
        $('.js-mobile-menu').toggleClass('active');
    })
}

function inputMasks() {
    $('.js-phone').mask('+38-000-000-00-00');
}


function animateAnchor() {
    // Select all links with hashes
    $('a[href^="#"]')

        .not('[href="#"]')
        .not('[href="#0"]')
        .not('[href^="#tab"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        // $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            // $target.focus(); // Set focus again
                        };
                    });
                }
            }
            $('.js-gamburger').removeClass('open');
            $('.js-mobile-menu').removeClass('active');
        });



}