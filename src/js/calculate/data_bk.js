// 試算JS
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

    // var $pmt_no = PMT(0.037/12,36,(-$loanamount),0,0); //一般方案公式
    // var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms_val,-$loanamount,$RV,0),0); //ag方案公式

    //A-1
    $('#A-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(1)').click(function(){
        var $total = 1530000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.54,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.469,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //A-2
    $('#A-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(2)').click(function(){
        var $total = 1610000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.54,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.469,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //A-3
    $('#A-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(3)').click(function(){
        var $total = 2040000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.54,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.469,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //A-4
    $('#A-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(4)').click(function(){
        var $total = 2720000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.54,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.469,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //B-1
    $('#B-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(1)').click(function(){
        var $total = 1580000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/1.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.494,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.41,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //B-2
    $('#B-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(2)').click(function(){
        var $total = 1670000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/1.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.494,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.41,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //B-3
    $('#B-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(3)').click(function(){
        var $total = 1880000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/1.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.494,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.41,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //B-4
    $('#B-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(4)').click(function(){
        var $total = 1770000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/1.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.494,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.41,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //CLA-轎跑車-1
    $('#CLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(1)').click(function(){
        var $total = 1860000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/3.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.521,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.457,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //CLA-轎跑車-2
    $('#CLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(2)').click(function(){
        var $total = 2270000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/3.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.521,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.457,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //CLA-轎跑車-3
    $('#CLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(3)').click(function(){
        var $total = 3090000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/3.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.521,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.457,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //CLA-五門獵跑-1
    $('#CLA .type-item:nth-of-type(2) .modelLst li:nth-of-type(1)').click(function(){
        var $total = 1920000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/3.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.534,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.475,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //CLA-五門獵跑-2
    $('#CLA .type-item:nth-of-type(2) .modelLst li:nth-of-type(2)').click(function(){
        var $total = 2320000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/3.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.534,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.475,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //CLA-五門獵跑-3
    $('#CLA .type-item:nth-of-type(2) .modelLst li:nth-of-type(3)').click(function(){
        var $total = 3150000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/3.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.534,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.475,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //GLA-1
    $('#GLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(1)').click(function(){
        var $total = 1720000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/6.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.551,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.503,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //GLA-2
    $('#GLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(2)').click(function(){
        var $total = 1820000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/6.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.551,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.503,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //GLA-3
    $('#GLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(3)').click(function(){
        var $total = 1990000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/6.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.551,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.503,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //GLA-4
    $('#GLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(4)').click(function(){
        var $total = 1870000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/6.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.551,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.503,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //GLA-5
    $('#GLA .type-item:nth-of-type(1) .modelLst li:nth-of-type(5)').click(function(){
        var $total = 3090000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/6.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.551,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.503,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-1
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(1)').click(function(){
        var $total = 1990000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.536,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.476,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-2
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(2)').click(function(){
        var $total = 2020000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.536,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.476,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-3
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(3)').click(function(){
        var $total = 2200000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.536,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.476,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-4
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(4)').click(function(){
        var $total = 2310000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.536,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.476,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-5
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(5)').click(function(){
        var $total = 2650000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.536,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.476,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-6
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(6)').click(function(){
        var $total = 3550000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.536,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.476,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-7
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(7)').click(function(){
        var $total = 4900000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.536,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.476,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎車-8
    $('#C-class .type-item:nth-of-type(1) .modelLst li:nth-of-type(8)').click(function(){
        var $total = 5440000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.536,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.476,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-旅行車-1
    $('#C-class .type-item:nth-of-type(2) .modelLst li:nth-of-type(1)').click(function(){
        var $total = 2300000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.51,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.445,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-旅行車-2
    $('#C-class .type-item:nth-of-type(2) .modelLst li:nth-of-type(2)').click(function(){
        var $total = 2740000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.51,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.445,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-旅行車-3
    $('#C-class .type-item:nth-of-type(2) .modelLst li:nth-of-type(3)').click(function(){
        var $total = 3650000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.51,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.445,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎跑車-1
    $('#C-class .type-item:nth-of-type(3) .modelLst li:nth-of-type(1)').click(function(){
        var $total = 2030000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.513,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.447,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎跑車-2
    $('#C-class .type-item:nth-of-type(3) .modelLst li:nth-of-type(2)').click(function(){
        var $total = 2670000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.513,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.447,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎跑車-3
    $('#C-class .type-item:nth-of-type(3) .modelLst li:nth-of-type(3)').click(function(){
        var $total = 3570000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.513,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.447,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎跑車-4
    $('#C-class .type-item:nth-of-type(3) .modelLst li:nth-of-type(4)').click(function(){
        var $total = 4950000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.513,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.447,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
        $mp_price.text( formatNumber($roundup_ag) );
    });

    //c-轎跑車-5
    $('#C-class .type-item:nth-of-type(3) .modelLst li:nth-of-type(5)').click(function(){
        var $total = 5480000;

        var $product_name = $(this).children('div.product-name').html();
        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        $gotoffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');

        if ( $percent_10.hasClass('active')) {
            var $percent = 0.1;
        } else if ( $percent_20.hasClass('active')) {
            var $percent = 0.2;
        } else if ( $percent_30.hasClass('active')) {
            var $percent = 0.3;
        }

        //24 期
        if ( $terms_24.hasClass('active') ){
            var $RVP = 0.513,
                $terms = 24;
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            var $RVP = 0.447,
                $terms = 36;
        }
        var $downpayment = $total*$percent;  //頭款            
        var $loanamount = $total-$downpayment; //貸款金額
        var $RV = $total * $RVP; //尾款
        var $roundup_ag = ROUNDUP(PMT(0.045/12,$terms,-$loanamount,$RV,0),0); //ag方案公式
        $dp_price.text( formatNumber($downpayment) );
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