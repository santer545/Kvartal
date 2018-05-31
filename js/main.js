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
        slidesPerView: 4,
        slidesPerGroup: 4,
        navigation: {
            nextEl: '.js-adv-next',
            prevEl: '.js-adv-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                slidesPerGroup: 4
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