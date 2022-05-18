// 自行加入的JS請寫在這裡
$(function() {
    //sticky sidebar

    if ($('.stickySidebar').length > 0) {
        var stickySidebar = new StickySidebar('.stickySidebar', {
            containerSelector: '.has_2-col',
            topSpacing: 150,
            bottomSpacing: 50,
            minWidth: 992,
            resizeSensor: true,
        });
    }

    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        pauseOnHover: false,
        pauseOnFocus: false,
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).find('img').attr('alt').trim();
            return $('<button type="button" aria-label="' + title + '"/>').text(title);
        }
    });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    $('.cardSlider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
    // 
    $('.cppic_slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        // pauseOnHover: true,
        // pauseOnFocus: true,
        // focusOnSelect: true,
        // accessibility: true,
        // lazyLoad: 'ondemand',
        // ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });

    // password_toggle
    var passShow = false;
    $('.password_toggle').each(function(index, el) {
        $(this).find('.btn-icon').off().click(function(e) {
            if (!passShow) {
                $(this).children('i').removeClass().addClass('i_show');
                $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
                passShow = true;
                // console.log(passShow);
            } else {
                $(this).children('i').removeClass().addClass('i_hide');
                $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
                passShow = false;
                // console.log(passShow);
            }
            e.preventDefault();
        });
    });

    $('.btn-filter').click(function() {
        $(this).stop().toggleClass('active');
    });
    $('.btn-collect').click(function() {
        $(this).stop().toggleClass('collected');
    });

    var containerW = $('.innerpage>.container').outerWidth(),
        RightBlockW = $('.right_block').outerWidth();
    if ($('.innerpage').find('.right_block')) {
        $('.center_block').css('max-width', containerW - RightBlockW + 40);
    }

    //會員管理
    // $('.memberBlock .memberContent').hide();
    // $('.memberBlock .memberBtn').click(function() {
    //     $('.memberBlock .memberContent').stop().slideToggle();
    // })

    //彈性區塊收合
    $('.show_area').click(function() {
        $('.drag_area').toggleClass('show');
    });

    //點擊按鈕下拉選單
    var _dropdownItem = $('.dropdownItem');
    _dropdownItem.each(function() {
        let _this = $(this);
        let _button = _this.find('button');
        let _optionList = _this.find('ul');
        let _options = _optionList.find('li');
        const speed = 250;

        _button.click(function() {
            if (_optionList.is(':visible')) {
                optionSlideup();

            } else {
                _optionList.slideDown(speed);
                $(this).addClass('up');
            }
        })

        //_options.filter('.add_NewTag').click(optionSlideup);
        _optionList.mouseleave(optionSlideup);
        //_options.filter(':last-child').focusout(optionSlideup);

        function optionSlideup() {
            _optionList.slideUp(speed);
            _button.removeClass('up');
            _optionList.find('.add_NewTag').parent("li").show();
            _optionList.find('.newTagForm').hide();
        }
    });

    //開關
    var _switchOnOff = $(".switchOnOff");
    _switchOnOff.click(function() {
        $(this).toggleClass("on");
    });

    //編輯表單項目
    $('.edit-on-click').click(function() {
        var $text = $(this),
            $input = $('<input type="text"/>')

        $text.hide()
            .after($input);

        $input.val($text.html()).show().focus()
            .keypress(function(e) {
                var key = e.which
                if (key == 13) // enter key
                {
                    $input.hide();
                    $text.html($input.val())
                        .show();
                    return false;
                }
            })
            .focusout(function() {
                $input.hide();
                $text.show();
            })
    });

    //右側主內容區塊高於左側區塊
    var statusFilterH = Math.floor($('.statusFilter').outerHeight());
    $('.eventList').css('min-height', statusFilterH);
    $('.eventList_2').css('min-height', statusFilterH);
    $('.listTable').css('min-height', statusFilterH);


    // $(".drop-down .options ul li a").not('.add_NewTag').click(function() {
    //     var text = $(this).html();
    //     $(".drop-down .selected").html(text);
    //     //$(".drop-down .options ul").hide();
    // });

    // $(document).bind('click', function(e) {
    //     var $clicked = $(e.target);
    //     if (!$clicked.parents().hasClass("drop-down"))
    //         $(".drop-down .options ul").hide();
    // });

    $(".add_NewTag").click(function() {
        $(this).parent("li").siblings(".newTagForm").show();
        $(this).parent("li").hide();
    });


});

//svg 變色
jQuery('img.svg').each(function() {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function(data) {
        var $svg = jQuery(data).find('svg');
        if (typeof imgID !== 'undefined') { $svg = $svg.attr('id', imgID); }
        if (typeof imgClass !== 'undefined') { $svg = $svg.attr('class', imgClass + ' replaced-svg'); }
        $svg = $svg.removeAttr('xmlns:a');
        $img.replaceWith($svg);
    }, 'xml');
});