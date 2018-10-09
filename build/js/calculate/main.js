$(function(){
// loading to page add header no-fixed
    $('header').addClass('nofixed');

    var datatag = document.createElement('script');
    datatag.src = "js/calculate/data.js";
    var datafirstScriptTag = document.getElementsByTagName('script')[0];
    datafirstScriptTag.parentNode.insertBefore(datatag, datafirstScriptTag);    



    var main_marginT = $("#calculate").offset().top;
    var footer_marginT = $("footer").offset().top;
    var result_marginT = $("#result").offset().top;
    var s1_marginT = $("#section1").offset().top;
    var main_marginTpx = main_marginT + 'px';
    var kv_h = $('#keyvision').height();
    var result_h = $('#result').height();

    var barOffset = main_marginT + kv_h + result_h;
    var KVOffset = main_marginT + kv_h;


    // scroll to section
    $(window).scrollTop(0);

    $('.modelNav li a').each(function() {
      $.each(this.attributes, function() {

        if(this.specified) {
          var hash22 = this.value;
          if(window.location.hash == hash22) {
                var body = $("html, body");
                body.stop().animate({scrollTop: result_marginT }, 1200);
            } else {
              $(window).scrollTop(0);
            }
        }

      });
    });
    

    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();

    // result bar scroll fixed
        if( scrollVal>barOffset ){
            $('#result').addClass('fixed');
            $('#section1').css('margin-top',main_marginTpx);
        } else{
            $('#result').removeClass('fixed');
            $('#section1').css('margin-top','0');
        }

    // 比較車種 按鈕 fixed
        if( scrollVal > s1_marginT ){
            $('#car-comparison').addClass('fixed');
        } else {
            $('#car-comparison').removeClass('fixed')
        } 
        
    });

// add List Comparison 
    $('.comparison').click(function(){
        $(this).toggleClass('active');

        if ( $(this).hasClass('active') ) {
            $(this).children('.txt').text('取消比較');
        } else {
            $(this).children('.txt').text('加入比較');
        }
    });

    $('.type-item .modelLst li').click(function(){
        $('.type-item .modelLst li').removeClass('active');
        $(this).toggleClass('active');
    });

// Rresult Bar Terms 
    $('#result .terms .dot-item').click(function(){
        $(this).addClass('active');
        $(this).siblings('.dot-item').removeClass('active');
    });

// Rresult Bar down-payment-percent 
    $('#result .down-payment-percent .dot-item').click(function(){
        $(this).addClass('active');
        $(this).siblings('.dot-item').removeClass('active');
    });

// modelList - Nav


    /* -- tabs -- */
    $( "#modelTab" ).tabs({
        hide: { duration: 300 },
        show: { duration: 300 },
    });

   
    // replace hash
    $('#modelNav li a').click(function(){
        var href = $(this).attr('href');
         location.replace(href);
    });


    /* -- slick -- */
    $('#modelNav').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            // infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },{
          breakpoint: 374,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });

// expandMobile
    expandMobile();
    function expandMobile() {

        var wWidth = $(window).width();
        var $terms = $('#result .terms');
        var $DPP = $('#result .down-payment-percent');

    // Result Bar on mobile expand
        // $('#result .calculate-result .expand').click(function(){
        //     if(!$terms.is(':visible') && $DPP.is(':visible')){
        //         $('#result .terms:visible').slideUp();
        //         $('#result .down-payment-percent:visible').slideUp();
        //     } 
        //     $terms.slideToggle();
        //     $DPP.slideToggle();
        //     $(this).toggleClass('active');
        // });

        // if( wWidth < 992 ){
            // $terms.show();
            // $DPP.show();
            // $('#result .calculate-result .expand').addClass('active');
        // }

    // Car Model Add & Leanon on mobile
        if( wWidth < 576 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
            $('.modelLst li').addClass('mo');
            $('.modelLst li.mo .cta-btn').hide();
            $('.modelLst li.mo.active .cta-btn').show();

            $('.modelLst li .product-name, .modelLst li .btline').click(function(){
                var $ctaBtn = $(this).siblings('div.cta-btn');

                if(!$ctaBtn.is(':visible')){
                    $('.modelLst div.cta-btn').slideUp();
                } 
                $ctaBtn.slideToggle();
            });
        }
    }

// resize width
    w = $( window ).width();
    $( window ).resize( function(){
        if ($(window).width()==w) return; 
        w = $(window).width();

        // var wWidth = $(window).width();
        // var $terms = $('#result .terms');
        // var $DPP = $('#result .down-payment-percent');

        // if( wWidth < 992 ){
        //     $terms.hide();
        //     $DPP.hide();
        //     $('#result .calculate-result .expand').removeClass('active');
            
        // } else {
        //     $terms.show();
        //     $DPP.show();
        //     $('#result .calculate-result .expand').removeClass('active');
        // }

    });
// resize width end

});




