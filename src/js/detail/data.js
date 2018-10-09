// 手key
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
    var total_p = 1530000, /* 售價 */

        $dp_10 = 150000, /* 頭款 10% */
        $dp_20 = 306000, /* 頭款 20% */
        $dp_30 = 459000, /* 頭款 30% */

        $ag_mp10_t24 = 27271, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 22397, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 59742, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 40560, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 20462, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 17756, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 52989, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 35974, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 13784, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 13205, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 46365, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 31477; /* BS月付款 (dp30%,36期) */

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
    var total_p = 1610000, /* 售價 */

        $dp_10 = 170000, /* 頭款 10% */
        $dp_20 = 322000, /* 頭款 20% */
        $dp_30 = 483000, /* 頭款 30% */

        $ag_mp10_t24 = 28166, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 23206, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 62340, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 42323, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 21532, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 18685, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 55759, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 37855, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 14504, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 13895, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 48770, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 33123; /* BS月付款 (dp30%,36期) */

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
    var total_p = 2040000, /* 售價 */

        $dp_10 = 210000, /* 頭款 10% */
        $dp_20 = 408000, /* 頭款 20% */
        $dp_30 = 612000, /* 頭款 30% */

        $ag_mp10_t24 = 35925, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 29565, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 79224, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 53786, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 27282, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 23675, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 70652, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 47966, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 18378, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 17606, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 61820, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 41970; /* BS月付款 (dp30%,36期) */

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
    var total_p = 2720000, /* 售價 */

        $dp_10 = 280000, /* 頭款 10% */
        $dp_20 = 544000, /* 頭款 20% */
        $dp_30 = 816000, /* 頭款 30% */

        $ag_mp10_t24 = 47899, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 39419, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 105632, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 71714, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 36376, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 31566, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 94202, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 63954, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 24504, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 23475, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 82427, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 55960; /* BS月付款 (dp30%,36期) */

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
    var total_p = 1580000, /* 售價 */

        $dp_10 = 160000, /* 頭款 10% */
        $dp_20 = 316000, /* 頭款 20% */
        $dp_30 = 474000, /* 頭款 30% */

        $ag_mp10_t24 = 30839, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 25400, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 61474, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 41735, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 24030, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 20760, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 54720, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 37150, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 17134, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 16060, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 47880, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 32506; /* BS月付款 (dp30%,36期) */

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
    var total_p = 1670000, /* 售價 */

        $dp_10 = 170000, /* 頭款 10% */
        $dp_20 = 334000, /* 頭款 20% */
        $dp_30 = 501000, /* 頭款 30% */

        $ag_mp10_t24 = 32557, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 26821, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 64938, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 44087, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 25399, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 21942, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 57837, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 39266, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 18110, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 16975, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 50608, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 34358; /* BS月付款 (dp30%,36期) */
        
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
    var total_p = 1880000, /* 售價 */

        $dp_10 = 190000, /* 頭款 10% */
        $dp_20 = 376000, /* 頭款 20% */
        $dp_30 = 564000, /* 頭款 30% */

        $ag_mp10_t24 = 36711, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 30234, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 73163, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 49671, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 28593, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 24701, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 65110, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 44204, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 20387, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 19109, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 56972, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 38678; /* BS月付款 (dp30%,36期) */

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
    var total_p = 1770000, /* 售價 */

        $dp_10 = 180000, /* 頭款 10% */
        $dp_20 = 354000, /* 頭款 20% */
        $dp_30 = 531000, /* 頭款 30% */

        $ag_mp10_t24 = 34515, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 28432, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 68834, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 46732, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 26920, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 23256, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 61301, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 41617, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 19194, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 17991, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 53638, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 36415; /* BS月付款 (dp30%,36期) */

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
    var total_p = 1860000, /* 售價 */

        $dp_10 = 190000, /* 頭款 10% */
        $dp_20 = 372000, /* 頭款 20% */
        $dp_30 = 558000, /* 頭款 30% */

        $ag_mp10_t24 = 34229, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 27580, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 72297, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 49083, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 26285, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 22166, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 64418, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 43733, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 18167, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 16633, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 56366, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 38267; /* BS月付款 (dp30%,36期) */

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
    var total_p = 2270000, /* 售價 */

        $dp_10 = 230000, /* 頭款 10% */
        $dp_20 = 454000, /* 頭款 20% */
        $dp_30 = 681000, /* 頭款 30% */

        $ag_mp10_t24 = 41856, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 33715, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 88315, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 59958, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 32079, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 27052, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 78617, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 53374, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 22171, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 20299, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 68790, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 46702; /* BS月付款 (dp30%,36期) */

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
    var total_p = 3090000, /* 售價 */

        $dp_10 = 310000, /* 頭款 10% */
        $dp_20 = 618000, /* 頭款 20% */
        $dp_30 = 927000, /* 頭款 30% */

        $ag_mp10_t24 = 57110, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 45986, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 120351, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 81707, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 43667, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 36824, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 107017, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 72654, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 30180, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 27632, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 93640, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 63572; /* BS月付款 (dp30%,36期) */

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
    var total_p = 1920000, /* 售價 */

        $dp_10 = 200000, /* 頭款 10% */
        $dp_20 = 384000, /* 頭款 20% */
        $dp_30 = 576000, /* 頭款 30% */

        $ag_mp10_t24 = 57110, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 34168, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 74462, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 50553, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 26137, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 21983, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 66496, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 45144, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 17757, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 16271, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 58184, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 39501; /* BS月付款 (dp30%,36期) */

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
    var total_p = 2320000, /* 售價 */

        $dp_10 = 240000, /* 頭款 10% */
        $dp_20 = 464000, /* 頭款 20% */
        $dp_30 = 696000, /* 頭款 30% */

        $ag_mp10_t24 = 41359, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 33225, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 90047, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 61133, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 31582, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 26562, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 80349, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 54549, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 21456, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 19661, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 70305, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 47731; /* BS月付款 (dp30%,36期) */

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
    var total_p = 3150000, /* 售價 */

        $dp_10 = 320000, /* 頭款 10% */
        $dp_20 = 630000, /* 頭款 20% */
        $dp_30 = 945000, /* 頭款 30% */

        $ag_mp10_t24 = 56412, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 45286, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 122515, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 83176, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 42881, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 36065, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 109095, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 74065, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 29132, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 26695, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 95458, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 64807; /* BS月付款 (dp30%,36期) */

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
    var total_p = 1720000, /* 售價 */

        $dp_10 = 180000, /* 頭款 10% */
        $dp_20 = 344000, /* 頭款 20% */
        $dp_30 = 516000, /* 頭款 30% */

        $ag_mp10_t24 = 29406, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 23319, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 66669, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 45262, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 22248, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 18441, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 59569, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 40442, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 14741, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 13324, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 52123, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 35386; /* BS月付款 (dp30%,36期) */

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
    var total_p = 1820000, /* 售價 */

        $dp_10 = 190000, /* 頭款 10% */
        $dp_20 = 364000, /* 頭款 20% */
        $dp_30 = 546000, /* 頭款 30% */

        $ag_mp10_t24 = 31136, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 24689, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 70566, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 47907, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 23541, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 19513, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 63032, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 42793, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 15597, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 14099, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 55153, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 37444; /* BS月付款 (dp30%,36期) */

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
    var total_p = 1990000, /* 售價 */

        $dp_10 = 200000, /* 頭款 10% */
        $dp_20 = 398000, /* 頭款 20% */
        $dp_30 = 597000, /* 頭款 30% */

        $ag_mp10_t24 = 34383, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 27225, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 77492, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 52610, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 25740, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 21335, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 68920, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 46790, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 17054, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 15416, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 60305, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 40941; /* BS月付款 (dp30%,36期) */

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
    var total_p = 1870000, /* 售價 */

        $dp_10 = 190000, /* 頭款 10% */
        $dp_20 = 374000, /* 頭款 20% */
        $dp_30 = 561000, /* 頭款 30% */

        $ag_mp10_t24 = 32219, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 25522, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 72730, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 49377, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 24188, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 20049, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 64764, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 43969, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 16026, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 14486, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 56669, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 38472; /* BS月付款 (dp30%,36期) */

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
    var total_p = 3090000, /* 售價 */

        $dp_10 = 310000, /* 頭款 10% */
        $dp_20 = 618000, /* 頭款 20% */
        $dp_30 = 927000, /* 頭款 30% */

        $ag_mp10_t24 = 53412, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 42291, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 120351, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 81707, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 39968, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 33129, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 107017, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 72654, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 26481, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 23937, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 93640, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 63572; /* BS月付款 (dp30%,36期) */

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
    var total_p = 1990000, /* 售價 */

        $dp_10 = 200000, /* 頭款 10% */
        $dp_20 = 398000, /* 頭款 20% */
        $dp_30 = 597000, /* 頭款 30% */

        $ag_mp10_t24 = 35573, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 28622, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 77492, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 52610, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 26931, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 22732, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 68920, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 46790, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 18245, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 16813, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 60305, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 40941; /* BS月付款 (dp30%,36期) */

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
    var total_p = 2020000, /* 售價 */

        $dp_10 = 210000, /* 頭款 10% */
        $dp_20 = 404000, /* 頭款 20% */
        $dp_30 = 606000, /* 頭款 30% */

        $ag_mp10_t24 = 35805, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 28846, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 78358, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 53198, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 27337, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 23075, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 69959, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 47495, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 18520, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 17066, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 61214, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 41558; /* BS月付款 (dp30%,36期) */

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
    var total_p = 2200000, /* 售價 */

        $dp_10 = 220000, /* 頭款 10% */
        $dp_20 = 440000, /* 頭款 20% */
        $dp_30 = 660000, /* 頭款 30% */

        $ag_mp10_t24 = 39376, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 31675, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 85718, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 58194, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 29773, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 25131, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 76193, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 51728, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 20171, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 18587, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 66669, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 45262; /* BS月付款 (dp30%,36期) */

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
    var total_p = 2310000, /* 售價 */

        $dp_10 = 240000, /* 頭款 10% */
        $dp_20 = 462000, /* 頭款 20% */
        $dp_30 = 693000, /* 頭款 30% */

        $ag_mp10_t24 = 40952, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 32991, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 89614, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 60839, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 31262, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 26388, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 80003, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 54314, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 21179, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 19516, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 70002, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 47525; /* BS月付款 (dp30%,36期) */

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
    var total_p = 2650000, /* 售價 */

        $dp_10 = 270000, /* 頭款 10% */
        $dp_20 = 530000, /* 頭款 20% */
        $dp_30 = 795000, /* 頭款 30% */

        $ag_mp10_t24 = 47211, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 38006, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 103034, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 69950, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 35863, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 30271, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 91778, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 62308, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 24296, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 22389, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 80306, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 54520; /* BS月付款 (dp30%,36期) */

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
    var total_p = 3550000, /* 售價 */

        $dp_10 = 360000, /* 頭款 10% */
        $dp_20 = 710000, /* 頭款 20% */
        $dp_30 = 1065000, /* 頭款 30% */

        $ag_mp10_t24 = 63319, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 50964, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 138100, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 93757, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 48043, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 40552, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 122948, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 83470, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 32548, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 29992, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 107579, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 73036; /* BS月付款 (dp30%,36期) */

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
    var total_p = 4900000, /* 售價 */

        $dp_10 = 490000, /* 頭款 10% */
        $dp_20 = 980000, /* 頭款 20% */
        $dp_30 = 1470000, /* 頭款 30% */

        $ag_mp10_t24 = 87700, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 70549, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 190916, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 129614, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 66312, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 55973, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 169703, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 115212, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 44925, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 41397, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 148490, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 100810; /* BS月付款 (dp30%,36期) */

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
    var total_p = 5440000, /* 售價 */

        $dp_10 = 550000, /* 頭款 10% */
        $dp_20 = 1088000, /* 頭款 20% */
        $dp_30 = 1632000, /* 頭款 30% */

        $ag_mp10_t24 = 97103, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 78145, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 211696, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 143721, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 73620, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 62142, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 188405, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 127908, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 49876, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 45959, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 164854, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 111920; /* BS月付款 (dp30%,36期) */

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
    var total_p = 2300000, /* 售價 */

        $dp_10 = 230000, /* 頭款 10% */
        $dp_20 = 460000 , /* 頭款 20% */
        $dp_30 = 690000, /* 頭款 30% */

        $ag_mp10_t24 = 43551, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 34969, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 89614, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 60839, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 33512, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 28127, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 79656, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 54079, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 23473, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 21285, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 69699, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 47319; /* BS月付款 (dp30%,36期) */

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
    var total_p = 2740000, /* 售價 */

        $dp_10 = 280000, /* 頭款 10% */
        $dp_20 = 548000 , /* 頭款 20% */
        $dp_30 = 822000, /* 頭款 30% */

        $ag_mp10_t24 = 51621, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 41480, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 106498, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 72302, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 39923, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 33508, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 94895, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 64424, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 27964, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 25357, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 8303, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 56371; /* BS月付款 (dp30%,36期) */

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
    var total_p = 3650000, /* 售價 */

        $dp_10 = 370000, /* 頭款 10% */
        $dp_20 = 730000 , /* 頭款 20% */
        $dp_30 = 1095000, /* 頭款 30% */

        $ag_mp10_t24 = 68896, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 55345, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 141997, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 96402, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 53182, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 44636, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 126411, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 85821, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 37251, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 33778, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 110610, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 75093; /* BS月付款 (dp30%,36期) */

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
    var total_p = 2030000, /* 售價 */

        $dp_10 = 210000, /* 頭款 10% */
        $dp_20 = 406000, /* 頭款 20% */
        $dp_30 = 609000, /* 頭款 30% */

        $ag_mp10_t24 = 37890, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 30550, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 78791, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 53492, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 29335, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 24720, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 70305, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 47731, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 20475, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 18681, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 61517, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 41764; /* BS月付款 (dp30%,36期) */

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
    var total_p = 2670000, /* 售價 */

        $dp_10 = 270000, /* 頭款 10% */
        $dp_20 = 534000, /* 頭款 20% */
        $dp_30 = 801000, /* 頭款 30% */

        $ag_mp10_t24 = 50107, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 40366, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 103900, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 70538, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 38584, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 32513, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 92471, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 62779, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 26930, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 24570, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 80912, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 54931; /* BS月付款 (dp30%,36期) */

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
    var total_p = 3570000, /* 售價 */

        $dp_10 = 360000, /* 頭款 10% */
        $dp_20 = 714000, /* 頭款 20% */
        $dp_30 = 1071000, /* 頭款 30% */

        $ag_mp10_t24 = 67041, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 54002, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 138966, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 94345, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 51589, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 43472, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 123641, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 83940, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 36007, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 32852, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 108186, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 73447; /* BS月付款 (dp30%,36期) */

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
    var total_p = 4950000, /* 售價 */

        $dp_10 = 500000, /* 頭款 10% */
        $dp_20 = 990000, /* 頭款 20% */
        $dp_30 = 1485000, /* 頭款 30% */

        $ag_mp10_t24 = 92919, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 74852, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 192648, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 130789, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 71531, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 60276, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 171434, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 116387, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 49926, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 45551, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 150005, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 101839; /* BS月付款 (dp30%,36期) */

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
    var total_p = 5480000, /* 售價 */

        $dp_10 = 550000, /* 頭款 10% */
        $dp_20 = 1096000, /* 頭款 20% */
        $dp_30 = 1644000, /* 頭款 30% */

        $ag_mp10_t24 = 103022, /* AG月付款 (dp10%,24期) */
        $ag_mp10_t36 = 82972, /* AG月付款 (dp10%,36期) */
        $bs_mp10_t24 = 213428, /* BS月付款 (dp10%,24期) */
        $bs_mp10_t36 = 144897, /* BS月付款 (dp10%,36期) */

        $ag_mp20_t24 = 79190, /* AG月付款 (dp20%,24期) */
        $ag_mp20_t36 = 66730, /* BS月付款 (dp20%,36期) */
        $bs_mp20_t24 = 189790, /* BS月付款 (dp20%,24期) */
        $bs_mp20_t36 = 128849, /* BS月付款 (dp20%,36期) */

        $ag_mp30_t24 = 55271, /* AG月付款 (dp30%,24期) */
        $ag_mp30_t36 = 50429, /* AG月付款 (dp30%,36期) */
        $bs_mp30_t24 = 166066, /* BS月付款 (dp30%,24期) */
        $bs_mp30_t36 = 112743; /* BS月付款 (dp30%,36期) */

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

    // 預設 頭款&期數 --- Star
    if ( ddpSlider == 10 ){
        var $downpayment = $dp_10;
        if ( terms == 36 ){
            var ag_mp = $ag_mp10_t36,
                bs_mp = $bs_mp10_t36;
        } else if ( terms == 24 ){
            var ag_mp = $ag_mp10_t24,
                bs_mp = $bs_mp10_t24;
        }
    }

    if ( ddpSlider == 20 ){
        var $downpayment = $dp_20;
        if ( terms == 36 ){
            var ag_mp = $ag_mp20_t36,
                bs_mp = $bs_mp20_t36;
        } else if ( terms == 24 ){
            var ag_mp = $ag_mp20_t24,
                bs_mp = $bs_mp20_t24;
        }
    }

    if ( ddpSlider == 30 ){
        var $downpayment = $dp_30;
        if ( terms == 36 ){
            var ag_mp = $ag_mp30_t36,
                bs_mp = $bs_mp30_t36;
        } else if ( terms == 24 ){
            var ag_mp = $ag_mp30_t24,
                bs_mp = $bs_mp30_t24;
        }
    }
    // 預設 頭款&期數 --- End

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
        if( ui.value == 24 ){
            if ( ddpSlider == 10 ) {
                var $downpayment = $dp_10;
                var ag_mp = $ag_mp10_t24;
                var bs_mp = $bs_mp10_t24;
            } else if ( ddpSlider == 20 ){
                var $downpayment = $dp_20;
                var ag_mp = $ag_mp20_t24;
                var bs_mp = $bs_mp20_t24;
            } else if ( ddpSlider == 30 ){
                var $downpayment = $dp_30;
                var ag_mp = $ag_mp30_t24;
                var bs_mp = $bs_mp30_t24;
            }
        } else if( ui.value == 36 ){
            if ( ddpSlider == 10 ) {
                var $downpayment = $dp_10;
                var ag_mp = $ag_mp10_t36;
                var bs_mp = $bs_mp10_t36;
            } else if ( ddpSlider == 20 ){
                var $downpayment = $dp_20;
                var ag_mp = $ag_mp20_t36;
                var bs_mp = $bs_mp20_t36;
            } else if ( ddpSlider == 30 ){
                var $downpayment = $dp_30;
                var ag_mp = $ag_mp30_t36;
                var bs_mp = $bs_mp30_t36;
            }
        }

        var ag_mp_circle = ag_mp * terms, //ag月付total
            bs_mp_circle = bs_mp * terms, //bs月付total
            $loanamount = total_p - $downpayment;

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
            var $downpayment = $dp_10;
            if ( terms == 24 ){
                var ag_mp = $ag_mp10_t24;
                var bs_mp = $bs_mp10_t24;
            } else if ( terms == 36 ){
                var ag_mp = $ag_mp10_t36;
                var bs_mp = $bs_mp10_t36;
            }
        } else if ( ui.value == 20 ){
            var $downpayment = $dp_20;
            if ( terms == 24 ){
                var ag_mp = $ag_mp20_t24;
                var bs_mp = $bs_mp20_t24;
            } else if ( terms == 36 ){
                var ag_mp = $ag_mp20_t36;
                var bs_mp = $bs_mp20_t36;
            }
        } else if ( ui.value == 30 ){
            var $downpayment = $dp_30;
            if ( terms == 24 ){
                var ag_mp = $ag_mp30_t24;
                var bs_mp = $bs_mp30_t24;
            } else if ( terms == 36 ){
                var ag_mp = $ag_mp30_t36;
                var bs_mp = $bs_mp30_t36;
            }
        }

        var ag_mp_circle = ag_mp * terms, //ag月付total
            bs_mp_circle = bs_mp * terms, //bs月付total
            $loanamount = total_p - $downpayment;

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





