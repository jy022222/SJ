$(document).ready(function () {
    //전체메뉴
    $('header .all_menu .cont .depth1').click(function () {
        $(this).children('.depth2').slideToggle();
        $(this).siblings().children('.depth2').slideUp();
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active')
    })

    //네비
    $('.dBody .tab_nav .btn_more').click(function () {
        $('.tab_nav ul').toggleClass('show');
        $(this).toggleClass('on')
    })

    $('.tab_ui li.on').click(function () {
        $('.tab_ui ul').toggleClass('show')
    })

    //푸터 패밀리 사이트
    $('.footer_layout .site_g .select_box .tit').click(function (e) {
        e.preventDefault()
        $(this).parent('.select_box').toggleClass('open')
    })

    //lnb
    var windowWidth = $(window).width();
    if (windowWidth < 900) {
        $('.dBody .tab_nav .current').prependTo('.tab_nav ul');
    }

    //탑버튼
    $(window).scroll(function () {
        var window1 = $(this).scrollTop();
        if (window1 >= 500) {
            $('.btn_top').addClass('show');
        } else {
            $('.btn_top').removeClass('show');
        }
    });

    $('.btn_top').click(function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    //FAQ
    function faqJs() {
        $('.customer_ui.faq .faq_list li').click(function () {
            $(this).toggleClass('show')
            $(this).children('dd').slideToggle();
            $(this).siblings('li').children('dd').slideUp()
        })
    }
    faqJs()

    //행 수 
    $(".customer_ui.faq .faq_list li dd p").each(function () {
        if ($(this).height() > 23 + 'px') {
            $(this).parent('dd').addClass("line1");
        }
    });

})
