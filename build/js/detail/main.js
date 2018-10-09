$(function(){

// Control Set ------------
    // down-payment-percent 頭款% 拉桿
    $("#DPP-slider").slider({ 
        range: "max",
        min: 10, 
        max: 30, 
        step: 10,
        value: 20 /* 設定 初始值 */

    }).slider("pips", {
        rest: "label",
        suffix: "%"
    });


    // terms 分期 拉桿
    $("#terms-slider").slider({ 
        range: "max",
        min: 24, 
        max: 36, 
        step: 12,
        value: 36 /* 設定 初始值 */

    }).slider("pips", {
        rest: "label",
        suffix: "期"
    });

// Circle Set ------------
var datatag = document.createElement('script');
    datatag.src = "js/detail/data.js";
    var datafirstScriptTag = document.getElementsByTagName('script')[0];
    datafirstScriptTag.parentNode.insertBefore(datatag, datafirstScriptTag); 
});






