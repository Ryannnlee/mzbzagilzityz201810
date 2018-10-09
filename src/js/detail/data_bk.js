$(function(){
    var hrefLink = window.location.search;

    // 期數
    var terms = $( "#terms-slider" ).slider( "option", "value" ); 
    // 頭款
    var ddpSlider = $( "#DPP-slider" ).slider( "option", "value" ); 
    var moreOffers = $('#moreOffers');
    var modeltype = $('#model-type');
    var CarModel = $('#CarModel');
    var Cartotal = $('#Cartotal');
    var CarIMG = $('.car-detail .images img');
    var titleName = ' - MB Agility 星智選 | 車款資訊';

    //連結 電腦版&手機版的網址
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
        var mbOfficeLink = 'https://m.mercedes-benz.com.tw/';
    } else {
        var mbOfficeLink = 'https://www.mercedes-benz.com.tw/';
    }

// Car List
if ( hrefLink == '?model=A180'){
    var total_p = 1530000;
    var $RVP24 = 0.54;
    var $RVP36 = 0.469;
    modeltype.text('A-Class 豪華掀背車');
    CarModel.text('A180');
    Cartotal.text('153');
    CarIMG.attr('src','images/calculate/car/a-class.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_A-class_A180'});
        lbReload('Click_detail_A-class_A180','','','');
    });
} else if( hrefLink == '?model=A180-sport' ){
    var total_p = 1610000;
    var $RVP24 = 0.54;
    var $RVP36 = 0.469;
    modeltype.text('A-Class 豪華掀背車');
    CarModel.text('A180 運動版');
    Cartotal.text('161');
    CarIMG.attr('src','images/calculate/car/a-class.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_A-class_A180_sport'});
        lbReload('Click_detail_A-class_A180_sport','','','');
    });
} else if( hrefLink == '?model=A250-Sport' ){
    var total_p = 2040000;
    var $RVP24 = 0.54;
    var $RVP36 = 0.469;
    modeltype.text('A-Class 豪華掀背車');
    CarModel.text('A250 Sport');
    Cartotal.text('204');
    CarIMG.attr('src','images/calculate/car/a-class.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_A-class_A250_sport'});
        lbReload('Click_detail_A-class_A250_sport','','','');
    });
} else if( hrefLink == '?model=AMG-A45-4MATIC' ){
    var total_p = 2720000;
    var $RVP24 = 0.54;
    var $RVP36 = 0.469;
    modeltype.text('A-Class 豪華掀背車');
    CarModel.text('Mercedes-AMG A45 4MATIC');
    Cartotal.text('272');
    CarIMG.attr('src','images/calculate/car/a-class.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/2.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_A-class_AMG-A45-4MATIC'});
        lbReload('Click_detail_A-class_AMG-A45-4MATIC','','','');
    });
} else if( hrefLink == '?model=B180' ){
    var total_p = 1580000;
    var $RVP24 = 0.494;
    var $RVP36 = 0.41;
    modeltype.text('B-Class 豪華運動跑旅');
    CarModel.text('B180');
    Cartotal.text('158');
    CarIMG.attr('src','images/calculate/car/b-class.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/1.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_B-class_B180'});
        lbReload('Click_detail_B-class_B180','','','');
    });
} else if( hrefLink == '?model=B180-sport' ){
    var total_p = 1670000;
    var $RVP24 = 0.494;
    var $RVP36 = 0.41;
    modeltype.text('B-Class 豪華運動跑旅');
    CarModel.text('B180 運動版');
    Cartotal.text('167');
    CarIMG.attr('src','images/calculate/car/b-class.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/1.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_B-class_B180-sport'});
        lbReload('Click_detail_B-class_B180-sport','','','');
    });
} else if( hrefLink == '?model=B200d' ){
    var total_p = 1880000;
    var $RVP24 = 0.494;
    var $RVP36 = 0.41;
    modeltype.text('B-Class 豪華運動跑旅');
    CarModel.text('B200d');
    Cartotal.text('188');
    CarIMG.attr('src','images/calculate/car/b-class.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/1.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_B-class_B200d'});
        lbReload('Click_detail_B-class_B200d','','','');
    });
} else if( hrefLink == '?model=B200' ){
    var total_p = 1770000;
    var $RVP24 = 0.494;
    var $RVP36 = 0.41;
    modeltype.text('B-Class 豪華運動跑旅');
    CarModel.text('B200');
    Cartotal.text('177');
    CarIMG.attr('src','images/calculate/car/b-class.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/1.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_B-class_B200'});
        lbReload('Click_detail_B-class_B200','','','');
    });
} else if( hrefLink == '?model=CLA-200' ){
    var total_p = 1860000;
    var $RVP24 = 0.521;
    var $RVP36 = 0.457;
    modeltype.text('CLA 四門轎跑');
    CarModel.text('CLA 200');
    Cartotal.text('186');
    CarIMG.attr('src','images/calculate/car/cla-1.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/3.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_CLA_CLA-200'});
        lbReload('Click_detail_CLA_CLA-200','','','');
    });
} else if( hrefLink == '?model=CLA-250' ){
    var total_p = 2270000;
    var $RVP24 = 0.521;
    var $RVP36 = 0.457;
    modeltype.text('CLA 四門轎跑');
    CarModel.text('CLA 250');
    Cartotal.text('227');
    CarIMG.attr('src','images/calculate/car/cla-1.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/3.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_CLA_CLA-250'});
        lbReload('Click_detail_CLA_CLA-250','','','');
    });
} else if( hrefLink == '?model=AMG-CLA-45-4MATIC' ){
    var total_p = 3090000;
    var $RVP24 = 0.521;
    var $RVP36 = 0.457;
    modeltype.text('CLA 四門轎跑');
    CarModel.text('Mercedes-AMG CLA 45 4MATIC');
    Cartotal.text('309');
    CarIMG.attr('src','images/calculate/car/cla-1.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/3.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_CLA_AMG-CLA-45-4MATIC'});
        lbReload('Click_detail_CLA_AMG-CLA-45-4MATIC','','','');
    });
} else if( hrefLink == '?model=CLA-200-Shooting-Brake' ){
    var total_p = 1920000;
    var $RVP24 = 0.534;
    var $RVP36 = 0.475;
    modeltype.text('CLA 都會五門獵跑');
    CarModel.text('CLA 200 Shooting Brake');
    Cartotal.text('192');
    CarIMG.attr('src','images/calculate/car/cla-2.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/3.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_CLA_CLA-200-Shooting-Brake'});
        lbReload('Click_detail_CLA_CLA-200-Shooting-Brake','','','');
    });
} else if( hrefLink == '?model=CLS-250-Shooting-Brake' ){
    var total_p = 2320000;
    var $RVP24 = 0.534;
    var $RVP36 = 0.475;
    modeltype.text('CLA 都會五門獵跑');
    CarModel.text('CLS 250 Shooting Brake');
    Cartotal.text('232');
    CarIMG.attr('src','images/calculate/car/cla-2.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/3.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_CLA_CLS-250-Shooting-Brake'});
        lbReload('Click_detail_CLA_CLS-250-Shooting-Brake','','','');
    });
} else if( hrefLink == '?model=AMG-CLA-45-4MATIC-Shooting-Brake' ){
    var total_p = 3150000;
    var $RVP24 = 0.534;
    var $RVP36 = 0.475;
    modeltype.text('CLA 都會五門獵跑');
    CarModel.text('Mercedes-AMG CLA 45 4MATIC Shooting Brake');
    Cartotal.text('315');
    CarIMG.attr('src','images/calculate/car/cla-2.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/3.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_CLA_AMG-CLA-45-4MATIC-Shooting-Brake'});
        lbReload('Click_detail_CLA_AMG-CLA-45-4MATIC-Shooting-Brake','','','');
    });
} else if( hrefLink == '?model=GLA-180' ){
    var total_p = 1720000;
    var $RVP24 = 0.551;
    var $RVP36 = 0.503;
    modeltype.text('GLA 新世代運動跑旅');
    CarModel.text('GLA 180');
    Cartotal.text('172');
    CarIMG.attr('src','images/calculate/car/gla.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/6.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_GLA_GLA-180'});
        lbReload('Click_detail_GLA_GLA-180','','','');
    });
} else if( hrefLink == '?model=GLA-180-sport' ){
    var total_p = 1820000;
    var $RVP24 = 0.551;
    var $RVP36 = 0.503;
    modeltype.text('GLA 新世代運動跑旅');
    CarModel.text('GLA 180 運動版');
    Cartotal.text('182');
    CarIMG.attr('src','images/calculate/car/gla.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/6.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_GLA_GLA-180-sport'});
        lbReload('Click_detail_GLA_GLA-180-sport','','','');
    });
} else if( hrefLink == '?model=GLA-200' ){
    var total_p = 1990000;
    var $RVP24 = 0.551;
    var $RVP36 = 0.503;
    modeltype.text('GLA 新世代運動跑旅');
    CarModel.text('GLA 200');
    Cartotal.text('199');
    CarIMG.attr('src','images/calculate/car/gla.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/6.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_GLA_GLA-200'});
        lbReload('Click_detail_GLA_GLA-200','','','');
    });
} else if( hrefLink == '?model=GLA-200d' ){
    var total_p = 1870000;
    var $RVP24 = 0.551;
    var $RVP36 = 0.503;
    modeltype.text('GLA 新世代運動跑旅');
    CarModel.text('GLA 200d');
    Cartotal.text('187');
    CarIMG.attr('src','images/calculate/car/gla.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/6.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_GLA_GLA-200d'});
        lbReload('Click_detail_GLA_GLA-200d','','','');
    });
} else if( hrefLink == '?model=AMG-GLA45-4MATIC' ){
    var total_p = 3090000;
    var $RVP24 = 0.551;
    var $RVP36 = 0.503;
    modeltype.text('GLA 新世代運動跑旅');
    CarModel.text('Mercedes-AMG GLA45 4MATICd');
    Cartotal.text('309');
    CarIMG.attr('src','images/calculate/car/gla.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/6.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_GLA_AMG-GLA45-4MATIC'});
        lbReload('Click_detail_GLA_AMG-GLA45-4MATIC','','','');
    });
} else if( hrefLink == '?model=C180' ){
    var total_p = 1990000;
    var $RVP24 = 0.536;
    var $RVP36 = 0.476;
    modeltype.text('C-Class 轎車');
    CarModel.text('C180');
    Cartotal.text('199');
    CarIMG.attr('src','images/calculate/car/c-class-1.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_C180'});
        lbReload('Click_detail_C-class_C180','','','');
    });
} else if( hrefLink == '?model=C200d' ){
    var total_p = 2020000;
    var $RVP24 = 0.536;
    var $RVP36 = 0.476;
    modeltype.text('C-Class 轎車');
    CarModel.text('C200d');
    Cartotal.text('202');
    CarIMG.attr('src','images/calculate/car/c-class-1.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_C200d'});
        lbReload('Click_detail_C-class_C200d','','','');
    });
} else if( hrefLink == '?model=C200-AVANTGARDE' ){
    var total_p = 2200000;
    var $RVP24 = 0.536;
    var $RVP36 = 0.476;
    modeltype.text('C-Class 轎車');
    CarModel.text('C200 AVANTGARDE');
    Cartotal.text('220');
    CarIMG.attr('src','images/calculate/car/c-class-1.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_C200-AVANTGARDE'});
        lbReload('Click_detail_C-class_C200-AVANTGARDE','','','');
    });
} else if( hrefLink == '?model=C200-EXCLUSIVE' ){
    var total_p = 2310000;
    var $RVP24 = 0.536;
    var $RVP36 = 0.476;
    modeltype.text('C-Class 轎車');
    CarModel.text('C200 EXCLUSIVE');
    Cartotal.text('231');
    CarIMG.attr('src','images/calculate/car/c-class-1.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_C200-EXCLUSIVE'});
        lbReload('Click_detail_C-class_C200-EXCLUSIVE','','','');
    });
} else if( hrefLink == '?model=C250-sport' ){
    var total_p = 2650000;
    var $RVP24 = 0.536;
    var $RVP36 = 0.476;
    modeltype.text('C-Class 轎車');
    CarModel.text('C250 運動版');
    Cartotal.text('265');
    CarIMG.attr('src','images/calculate/car/c-class-1.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_C250-sport'});
        lbReload('Click_detail_C-class_C250-sport','','','');
    });
} else if( hrefLink == '?model=AMG-C43-4MATIC' ){
    var total_p = 3550000;
    var $RVP24 = 0.536;
    var $RVP36 = 0.476;
    modeltype.text('C-Class 轎車');
    CarModel.text('Mercedes-AMG C43 4MATIC');
    Cartotal.text('355');
    CarIMG.attr('src','images/calculate/car/c-class-1.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_AMG-C43-4MATIC'});
        lbReload('Click_detail_C-class_AMG-C43-4MATIC','','','');
    });
} else if( hrefLink == '?model=AMG-C63' ){
    var total_p = 4900000;
    var $RVP24 = 0.536;
    var $RVP36 = 0.476;
    modeltype.text('C-Class 轎車');
    CarModel.text('Mercedes-AMG C63');
    Cartotal.text('490');
    CarIMG.attr('src','images/calculate/car/c-class-1.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_AMG-C63'});
        lbReload('Click_detail_C-class_AMG-C63','','','');
    });
} else if( hrefLink == '?model=AMG-C63-S' ){
    var total_p = 5440000;
    var $RVP24 = 0.536;
    var $RVP36 = 0.476;
    modeltype.text('C-Class 轎車');
    CarModel.text('Mercedes-AMG C63 S');
    Cartotal.text('544');
    CarIMG.attr('src','images/calculate/car/c-class-1.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_AMG-C63-S'});
        lbReload('Click_detail_C-class_AMG-C63-S','','','');
    });
} else if( hrefLink == '?model=C200-ESTATE-AVANTGARDE' ){
    var total_p = 2300000;
    var $RVP24 = 0.51;
    var $RVP36 = 0.445;
    modeltype.text('C-Class 旅行車');
    CarModel.text('C200 ESTATE AVANTGARDE');
    Cartotal.text('230');
    CarIMG.attr('src','images/calculate/car/c-class-2.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_C200-ESTATE-AVANTGARDE'});
        lbReload('Click_detail_C-class_C200-ESTATE-AVANTGARDE','','','');
    });
} else if( hrefLink == '?model=C250-ESTATE-sport' ){
    var total_p = 2740000;
    var $RVP24 = 0.51;
    var $RVP36 = 0.445;
    modeltype.text('C-Class 旅行車');
    CarModel.text('C250 ESTATE 運動版');
    Cartotal.text('275');
    CarIMG.attr('src','images/calculate/car/c-class-2.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_C250-ESTATE-sport'});
        lbReload('Click_detail_C-class_C250-ESTATE-sport','','','');
    });
} else if( hrefLink == '?model=AMG-C43-4MATIC-ESTATE' ){
    var total_p = 3650000;
    var $RVP24 = 0.51;
    var $RVP36 = 0.445;
    modeltype.text('C-Class 旅行車');
    CarModel.text('Mercedes-AMG C43 4MATIC ESTATE ');
    Cartotal.text('365');
    CarIMG.attr('src','images/calculate/car/c-class-2.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_AMG-C43-4MATIC-ESTATE'});
        lbReload('Click_detail_C-class_AMG-C43-4MATIC-ESTATE','','','');
    });
} else if( hrefLink == '?model=C180-Coupe' ){
    var total_p = 2030000;
    var $RVP24 = 0.513;
    var $RVP36 = 0.447;
    modeltype.text('C-Class 雙門轎跑車');
    CarModel.text('C180 Coupé');
    Cartotal.text('203');
    CarIMG.attr('src','images/calculate/car/c-class-3.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_C180-Coupe'});
        lbReload('Click_detail_C-class_C180-Coupe','','','');
    });
} else if( hrefLink == '?model=C-250-Coupe-sport' ){
    var total_p = 2670000;
    var $RVP24 = 0.513;
    var $RVP36 = 0.447;
    modeltype.text('C-Class 雙門轎跑車');
    CarModel.text('C 250 Coupé 運動版');
    Cartotal.text('267');
    CarIMG.attr('src','images/calculate/car/c-class-3.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_C-250-Coupe-sport'});
        lbReload('Click_detail_C-class_C-250-Coupe-sport','','','');
    });
} else if( hrefLink == '?model=AMG-C43-4MATIC-Coupe' ){
    var total_p = 3570000;
    var $RVP24 = 0.513;
    var $RVP36 = 0.447;
    modeltype.text('C-Class 雙門轎跑車');
    CarModel.text('Mercedes-AMG C43 4MATIC Coupé');
    Cartotal.text('357');
    CarIMG.attr('src','images/calculate/car/c-class-3.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_AMG-C43-4MATIC-Coupe'});
        lbReload('Click_detail_C-class_AMG-C43-4MATIC-Coupe','','','');
    });
} else if( hrefLink == '?model=AMG-C63-Coupe' ){
    var total_p = 4950000;
    var $RVP24 = 0.513;
    var $RVP36 = 0.447;
    modeltype.text('C-Class 雙門轎跑車');
    CarModel.text('Mercedes-AMG C63 Coupé');
    Cartotal.text('495');
    CarIMG.attr('src','images/calculate/car/c-class-3.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_AMG-C63-Coupe'});
        lbReload('Click_detail_C-class_AMG-C63-Coupe','','','');
    });
} else if( hrefLink == '?model=AMG-C63-S-Coupe' ){
    var total_p = 5480000;
    var $RVP24 = 0.513;
    var $RVP36 = 0.447;
    modeltype.text('C-Class 雙門轎跑車');
    CarModel.text('Mercedes-AMG C63 S Coupé');
    Cartotal.text('548');
    CarIMG.attr('src','images/calculate/car/c-class-3.png');
    moreOffers.attr('href', mbOfficeLink + 'content/taiwan/mpc/mpc_taiwan_website/twng/home_mpc/passengercars/mobile/mbp/financial_services/campaigns/15.html');
    moreOffers.click(function(){
        gtag('event', 'click', {'event_category': 'detail', 'event_label': 'detail_C-class_AMG-C63-S-Coupe'});
        lbReload('Click_detail_C-class_AMG-C63-S-Coupe','','','');
    });
} else {
    location.href = '/mb/calculate/';
}

    var title_Model = CarModel.text();
    $(document).attr("title",title_Model + titleName);




// Circle Set ------------
    if ( ddpSlider == 10 ) {
        var $percent = 0.1;
    } else if ( ddpSlider == 20 ){
        var $percent = 0.2;
    } else if ( ddpSlider == 30 ){
        var $percent = 0.3;
    }

    if ( terms == 24 ){
        var $RVP = $RVP24;
    } else if ( terms == 36 ){
        var $RVP = $RVP36;
    }
     
    var $downpayment = total_p * $percent;  //頭款金額
    var $loanamount = total_p - $downpayment; //貸款金額
    var $RV = total_p * $RVP;
    var ag_mp = ROUNDUP(PMT(0.045/12,terms,-$loanamount,$RV,0),0); //ag方案公式; 
    var bs_mp = Math.round(PMT(0.037/12,terms,(-$loanamount),0,0)) // 一般方案公式;   

    var ag_mp_circle = ag_mp * terms, //ag月付total
        bs_mp_circle = bs_mp * terms; //bs月付total
    
    

    // AG 頭款 Circles
    var DPC_myCircle = Circles.create({
        id:                  'down-payment-circle',
        radius:              100,
        value:               $downpayment ,
        maxValue:            total_p ,
        width:               4,
        colors:              ['#1f3139', '#28aae1'],
        duration:            500,
        wrpClass:            'circles-wrp',
        textClass:           'circles-text',
        valueStrokeClass:    'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper:        true,
        styleText:           false,
        text: function(value){
            return '<span class="amount">' + '$' + formatNumber(value) + '</span><span class="btm-txt">頭款</span>' ;
        }
    });  

    // AG 月付款 Circles
    var AGMC_myCircle = Circles.create({
        id:                  'ag-monthly-circle',
        radius:              100,
        value:               ag_mp_circle,
        maxValue:            total_p,
        width:               4,
        colors:              ['#1f3139', '#28aae1'],
        duration:            500,
        wrpClass:            'circles-wrp',
        textClass:           'circles-text',
        valueStrokeClass:    'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper:        true,
        styleText:           false,
        text: function(value){
            return '<span class="head-txt">Agility方案</span><span class="amount">' + '$' + formatNumber(ag_mp) + '</span><span class="btm-txt">月付款</span>' ;
        }
    });  

    // BS 月付款 Circles
    var BSMC_myCircle = Circles.create({
        id:                  'basic-monthly-circle',
        radius:              100,
        value:               bs_mp_circle,
        maxValue:            total_p,
        width:               4,
        colors:              ['#1f1f1f', '#ffffff'],
        duration:            500,
        wrpClass:            'circles-wrp',
        textClass:           'circles-text',
        valueStrokeClass:    'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper:        true,
        styleText:           false,
        text: function(value){
            return '<span class="head-txt">一般分期</span><span class="amount">' + '$' + formatNumber(bs_mp) + '</span><span class="btm-txt">月付款</span>' ;
        }
    });  


// 期數 控制桿 onChange 
    $("#terms-slider").on("slidechange", function(e,ui) { 
        var ddpSlider = $( "#DPP-slider" ).slider( "option", "value" );
        var terms = ui.value;
        if ( ddpSlider == 10 ) {
            var $percent = 0.1;
        } else if ( ddpSlider == 20 ){
            var $percent = 0.2;
        } else if ( ddpSlider == 30 ){
            var $percent = 0.3;
        }

        if ( ui.value == 24 ){
            var $RVP = $RVP24;
        } else if ( ui.value == 36 ){
            var $RVP = $RVP36;
        }

        var $downpayment = total_p * $percent;
        var $loanamount = total_p - $downpayment;
        var $RV = total_p * $RVP;
        var ag_mp = ROUNDUP(PMT(0.045/12,terms,-$loanamount,$RV,0),0);
        var bs_mp = Math.round(PMT(0.037/12,terms,(-$loanamount),0,0));

        var ag_mp_circle = ag_mp * terms,
            bs_mp_circle = bs_mp * terms;


            DPC_myCircle.update(DPC_myCircle.value = $downpayment, 200);
            AGMC_myCircle.update(AGMC_myCircle.value = ag_mp_circle, 200);
            BSMC_myCircle.update(BSMC_myCircle.value = bs_mp_circle, 200);
            AGMC_myCircle.getMaxValue($loanamount);
            BSMC_myCircle.getMaxValue($loanamount);
            setTimeout(function(){ 
                $('.ag-monthly-payment span.amount').text( '$' + formatNumber(ag_mp) );
                $('#basic-monthly-circle span.amount').text( '$' + formatNumber(bs_mp) );
            }, 250);
    });


// 頭款%數 控制桿 onChange 
    $("#DPP-slider").on("slidechange", function(e,ui) {

        var terms = $( "#terms-slider" ).slider( "option", "value" ); //期數

        if ( ui.value == 10 ) {
            var $percent = 0.1;
        } else if ( ui.value == 20 ){
            var $percent = 0.2;
        } else if ( ui.value == 30 ){
            var $percent = 0.3;
        }

        if ( terms == 24 ){
            var $RVP = $RVP24;
        } else if ( terms == 36 ){
            var $RVP = $RVP36;
        }

        var $downpayment = total_p * $percent;
        var $loanamount = total_p - $downpayment;
        var $RV = total_p * $RVP;
        var ag_mp = ROUNDUP(PMT(0.045/12,terms,-$loanamount,$RV,0),0);
        var bs_mp = Math.round(PMT(0.037/12,terms,(-$loanamount),0,0));

        var ag_mp_circle = ag_mp * terms,
            bs_mp_circle = bs_mp * terms;

            DPC_myCircle.update(DPC_myCircle.value = $downpayment, 200);
            AGMC_myCircle.update(AGMC_myCircle.value = ag_mp_circle, 200);
            BSMC_myCircle.update(BSMC_myCircle.value = bs_mp_circle, 200);
            AGMC_myCircle.getMaxValue($loanamount);
            BSMC_myCircle.getMaxValue($loanamount);
            setTimeout(function(){ 
                $('.ag-monthly-payment span.amount').text( '$' + formatNumber(ag_mp) );
                $('#basic-monthly-circle span.amount').text( '$' + formatNumber(bs_mp) );
            }, 250);

    });



// Circle RWD SET

var screen_w = $(window).width();

if ( 992 >= screen_w ){
    DPC_myCircle.updateRadius(80);
    AGMC_myCircle.updateRadius(80);
    BSMC_myCircle.updateRadius(80);
}
if ( 768 > screen_w ){
    DPC_myCircle.updateRadius(100);
    AGMC_myCircle.updateRadius(100);
    BSMC_myCircle.updateRadius(100);
}
if ( 374 > screen_w ){
    DPC_myCircle.updateRadius(80);
    AGMC_myCircle.updateRadius(80);
    BSMC_myCircle.updateRadius(80);
}

// resize width
    w = $( window ).width();
    $( window ).resize( function(){
        if ($(window).width()==w) return; 
        w = $(window).width();

        var screen_w = $(window).width();

        if ( 992 <= screen_w ){
            DPC_myCircle.updateRadius(100);
            AGMC_myCircle.updateRadius(100);
            BSMC_myCircle.updateRadius(100);
        }
        if ( 992 >= screen_w ){
            DPC_myCircle.updateRadius(80);
            AGMC_myCircle.updateRadius(80);
            BSMC_myCircle.updateRadius(80);
        }
        if ( 768 > screen_w ){
            DPC_myCircle.updateRadius(100);
            AGMC_myCircle.updateRadius(100);
            BSMC_myCircle.updateRadius(100);
        }
        if ( 374 > screen_w ){
            DPC_myCircle.updateRadius(80);
            AGMC_myCircle.updateRadius(80);
            BSMC_myCircle.updateRadius(80);
        }

    });
// resize width end

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





