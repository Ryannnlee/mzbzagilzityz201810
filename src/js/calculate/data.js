// 試算JS 手key
$(function(){
    // formatNumber() 是我這邊寫好的js，套上去會自動讓金額數字每3位數加上','
    var $terms_24 = $('#terms-24m');
    var $terms_36 = $('#terms-36m');

    var $percent_10 = $('#percent-10');
    var $percent_20 = $('#percent-20');
    var $percent_30 = $('#percent-30');

    var $dp_price = $('#dp-price');
    var $mp_price = $('#mp-price');

    var $gotoffers = $('#gotoffers');

    var $terms_val = $('#result .calculate-result .terms .dot-item');

    //連結 電腦版&手機版的網址
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
        var mbOfficeLink = 'https://m.mercedes-benz.com.tw/';
    } else {
        var mbOfficeLink = 'https://www.mercedes-benz.com.tw/';
    }

    // 預設近來的連結網址
    $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

    //A-1
    $('#A-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(1)').click(function(){

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 150000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 27271;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 22397;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 306000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 20462;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 17756;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 459000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 13784;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 13205;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
    });

    //A-2
    $('#A-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(2)').click(function(){
        
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 170000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 28166;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 23206;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 322000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 21532;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 18685;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 483000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 14504;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 13895;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
    });

    //A-3
    $('#A-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(3)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 210000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 35925;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 29565;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 408000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 27282;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 23675;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 612000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 18378;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 17606;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
    });

    //A-4
    $('#A-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(4)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 280000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 47899;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 39419;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 544000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 36376;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 31566;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 816000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 24504;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 23475;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
    });

    //B-1
    $('#B-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(1)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 160000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 30839;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 25400;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 316000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 24030;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 20760;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 474000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 17134;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 16060;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
    });

    //B-2
    $('#B-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(2)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 170000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 32557;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 26821;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 334000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 25399;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 21942;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 501000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 18110;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 16975;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
    });

    //B-3
    $('#B-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(3)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 190000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 36711;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 30234;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 376000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 28593;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 24701;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 564000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 20387;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 19109;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
    });

    //B-4
    $('#B-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(4)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 180000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 34515;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 28432;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 354000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 26920;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 23256;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 531000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 19194;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 17991;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
    });

    //CLA-轎跑車-1
    $('#CLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(1)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 190000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 34229;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 27580;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 372000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 26285;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 22166;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 558000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 18167;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 16633;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
    });

    //CLA-轎跑車-2
    $('#CLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(2)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 230000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 41856;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 33715;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 454000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 32079;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 27052;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 681000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 22171;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 20299;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
    });

    //CLA-轎跑車-3
    $('#CLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(3)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 310000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 57110;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 45986;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 618000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 43667;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 36824;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 927000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 30180;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 27632;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //CLA-五門獵跑-1
    $('#CLA .type-item:nth-of-type(2) .modelLst li:nth-of-type(1)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 200000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 34168;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 27456;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 384000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 26137;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 21983;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 576000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 17757;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 16271;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //CLA-五門獵跑-2
    $('#CLA .type-item:nth-of-type(2) .modelLst li:nth-of-type(2)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 240000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 41359;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 33225;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 464000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 31582;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 26562;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 696000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 21456;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 19661;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //CLA-五門獵跑-3
    $('#CLA .type-item:nth-of-type(2) .modelLst li:nth-of-type(3)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 320000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 56412;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 45286;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 630000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 42881;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 36065;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 945000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 29132;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 26695;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //GLA-1
    $('#GLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(1)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 180000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 29406;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 23319;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 344000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 22248;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 18441;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 516000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 14741;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 13324;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //GLA-2
    $('#GLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(2)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 190000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 31136;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 24689;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 364000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 23541;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 19513;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 546000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 15597;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 14099;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //GLA-3
    $('#GLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(3)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 200000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 34383;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 27225;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 398000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 25740;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 21335;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 597000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 17054;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 15416;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //GLA-4
    $('#GLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(4)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 190000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 32219;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 25522;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 374000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 24188;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 20049;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 561000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 16026;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 14486;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //GLA-5
    $('#GLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(5)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 310000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 53412;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 42291;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 618000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 39968;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 33129;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 927000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 26481;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 23937;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-1
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(1)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 200000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 35573;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 28622;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 398000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 26931;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 22732;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 597000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 18245;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 16813;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-2
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(2)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 210000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 35805;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 28846;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 404000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 27337;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 23075;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 606000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 18520;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 17066;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-3
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(3)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 220000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 39376;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 31675;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 440000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 29773;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 25131;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 660000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 20171;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 18587;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-4
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(4)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 240000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 40952;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 32991;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 462000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 31262;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 26388;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 693000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 21179;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 19516;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-5
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(5)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 270000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 47211;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 38006;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 530000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 35863;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 30271;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 795000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 24296;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 22389;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-6
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(6)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 360000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 63319;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 50964;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 710000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 48043;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 40552;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 1065000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 32548;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 29992;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-7
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(7)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 490000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 87700;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 70549;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 980000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 66312;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 55973;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 1470000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 44925;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 41397;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-8
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(8)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 550000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 97103;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 78145;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 1088000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 73620;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 62142;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 1632000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 49876;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 45959;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-旅行車-1
    $('#C-class .type-item:nth-of-type(2) .modelLst li:nth-of-type(1)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 230000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 43551;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 34969;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 460000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 33512;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 28127;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 690000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 23473;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 21285;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-旅行車-2
    $('#C-class .type-item:nth-of-type(2) .modelLst li:nth-of-type(2)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 280000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 51621;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 41480;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 548000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 39923;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 33508;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 822000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 27964;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 25357;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-旅行車-3
    $('#C-class .type-item:nth-of-type(2) .modelLst li:nth-of-type(3)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 280000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 51621;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 41480;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 548000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 39923;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 33508;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 1095000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 37251;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 33778;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎跑車-1
    $('#C-class .type-item:nth-of-type(3) .modelLst li:nth-of-type(1)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 210000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 37890;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 30550;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 406000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 29335;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 24720;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 609000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 20475;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 18681;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎跑車-2
    $('#C-class .type-item:nth-of-type(3) .modelLst li:nth-of-type(2)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 270000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 50107;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 40366;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 534000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 38584;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 32513;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 609000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 20475;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 18681;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎跑車-3
    $('#C-class .type-item:nth-of-type(3) .modelLst li:nth-of-type(3)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 360000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 67041;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 54002;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 714000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 51589;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 43472;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 1071000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 36007;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 32852;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎跑車-4
    $('#C-class .type-item:nth-of-type(3) .modelLst li:nth-of-type(4)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 500000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 92919;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 74852;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 990000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 71531;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 60276;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 1485000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 49926;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 45551;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎跑車-5
    $('#C-class .type-item:nth-of-type(3) .modelLst li:nth-of-type(5)').click(function(){
        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $downpayment = 550000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 103022;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 82972;
            }
        } else if ( $percent_20.hasClass('active')) {
            var $downpayment = 1096000;

            if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 79190;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 66730;
            }
        } else if ( $percent_30.hasClass('active')) {
             var $downpayment = 1644000;
             if ( $terms_24.hasClass('active') ){
                $monthlyPayment = 55271;
            } else if ( $terms_36.hasClass('active') ) {
                $monthlyPayment = 50429;
            }
        }

        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($monthlyPayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });





    // default dp10% & 24terms
    $('#A-class .modelLst li:nth-of-type(1)').trigger("click");
    

    // Click Terms
    $terms_24.click(function(){
        $('.modelLst li.active').trigger('click');
    });

    $terms_36.click(function(){
        $('.modelLst li.active').trigger('click');
    });

    // Click Down-Payment-Percent
    $percent_10.click(function(){
        $('.modelLst li.active').trigger('click');
    });
    $percent_20.click(function(){
        $('.modelLst li.active').trigger('click');
    });
    $percent_30.click(function(){
        $('.modelLst li.active').trigger('click');
    });



});

function PMT(rate, nperiod, pv, fv, type) {
    if (!fv) fv = 0;
    if (!type) type = 0;

    if (rate == 0) return -(pv + fv)/nperiod;

    var pvif = Math.pow(1 + rate, nperiod);
    var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

    if (type == 1) {
        pmt /= (1 + rate);
    };

    return pmt;
}

function ROUNDUP(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}