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
})

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


    swiperBanner.on('slideChange', function() {
        $('.js-current').text('0' + swiperBanner.activeIndex);
    });

    swiperBanner.on('slideChangeTransitionStart', function() {
        if (swiperBanner.activeIndex == ((swiperBanner.slides.length - 2) + 1)) {
            $('.js-current').text('01');
        }
    });

    $('.js-all').text('0' + (swiperBanner.slides.length - 2));

    var swiperAdv = new Swiper('.js-advantages', {
        navigation: {
            nextEl: '.js-adv-next',
            prevEl: '.js-adv-prev',
        },
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1
            },
            // when window width is <= 480px
            480: {
                slidesPerView: 1
            },
            // when window width is <= 640px
            640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            1024: {
                slidesPerView: 2,
                slidesPerGroup: 2
            }
        }
    });

    $('.advantages-number').each(function(item, number) {
        $(this).text('0' + (item + 1));
    })


    var swiperGallery = new Swiper('.js-gallery', {
        slidesPerView: 6,
        navigation: {
            nextEl: '.js-gallery-next',
            prevEl: '.js-gallery-prev',
        },
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

function playVideo() {
    var video = document.getElementById('video-cottej');
    $('.js-holder').click(function() {
        video.play();
        $(this).addClass('hidden');
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

function inputMasks() {
    $('.js-phone').mask('+38-000-000-00-00');
}


function animateAnchor() {
    // Select all links with hashes
    $('a[href*="#"]')

        .not('[href="#"]')
        .not('[href="#0"]')
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
        });
}