$(function(){
    $('header').addClass('nofixed');

// ag expand
    $('.compare-content .planHead').eq(0).addClass('active');
    $('.compare-content .planCont').hide();
    $('.compare-content .planCont').eq(0).show();
   
    $('.compare-content .planHead').click(function(){
        var $planCont = $(this).next('div.planCont');
        $planCont.slideToggle(300);
        $(this).toggleClass('active')
    });

// tab
    $( ".compare-content" ).tabs({
        hide: { duration: 300 },
        show: { duration: 300 }
    });


// scroll fixed
    scrollFixed();
    function scrollFixed(){
        var compHead_MT = $("#scrollPOS").offset().top;
        var compHead_H = $("#scrollPOS").height();
        var compHeadOffset = compHead_MT + compHead_H;

        $(window).scroll(function () {
            var scrollVal = $(this).scrollTop();

            if( scrollVal > compHeadOffset ){
                $('#compareFixedBar').addClass('display');
            } else{
                $('#compareFixedBar').removeClass('display');
            }
            
        });
    }

    // resize width
    w = $( window ).width();
    $( window ).resize( function(){
        if ($(window).width()==w) return; 
        w = $(window).width();

        scrollFixed();

    });
    // resize width end

});






