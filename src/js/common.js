if (location.protocol == "http:") {
    var x = location.host;
    top.location.href = "https://" + location.host + location.pathname + location.search;
}

$(window).on("load", function(e) {
    $('#loading').addClass('loaded');
    setTimeout(function() {
        $('#loading').css('display', 'none');
    }, 300);
})

function menuShowHide(boolean) {
    var wh = $(window).height();
    var offset = wh / 5;
    if (boolean === true) {
        $(window).mousewheel(function(event, delta) {
            var scrollVal = $(this).scrollTop();
            if (scrollVal > offset) {
                if (delta < 0) {
                    $('header').addClass('hidden');
                } else if (delta > 0) {
                    $('header').removeClass('hidden');
                }
            } else {
                $('header').removeClass('hidden');
            }
        });
    }
}
$(function() {
    var wh = $(window).height();
    var offset = wh / 5;
    $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();
        if (scrollVal > offset) {
            $('header').addClass('sm');
        } else {
            $('header').removeClass('sm');
            $('header').removeClass('hidden');
        }
    });
    $('.hd-hamburger').click(function() {
        $('body').toggleClass('noscroll');
        $('#overlay').toggleClass('open');
        $('#hd-hamburger').toggleClass('active');
    });
});
$(function() {
    var scrollTop = $("#scrollTop");
    var screenH = $(window).height();
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > screenH) {
            $(scrollTop).fadeIn(300);
        } else {
            $(scrollTop).fadeOut(300);
        }
    });
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
$(function() {
    if ((navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel") || navigator.userAgent.match("Firefox")) {} else {
        var jstag = document.createElement('script');
        jstag.src = $base_url + "content/js/pingin/plugins.js";
        var jsfirstScriptTag = document.getElementsByTagName('script')[0];
        jsfirstScriptTag.parentNode.insertBefore(jstag, jsfirstScriptTag);
    }
});

function formatNumber(str, glue) {
    if (isNaN(str)) {
        return NaN;
    }
    var glue = (typeof glue == 'string') ? glue : ',';
    var digits = str.toString().split('.');
    var integerDigits = digits[0].split("");
    var threeDigits = [];
    while (integerDigits.length > 3) {
        threeDigits.unshift(integerDigits.splice(integerDigits.length - 3, 3).join(""));
    }
    threeDigits.unshift(integerDigits.join(""));
    digits[0] = threeDigits.join(glue);
    return digits.join(".");
}

var fbhtml_url = window.location.toString();

function shareFb() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.open('http://www.facebook.com/sharer.php?u=' + fbhtml_url);
    } else {
        window.open('http://www.facebook.com/sharer.php?u=' + fbhtml_url, 'MB-Agility', 'width=550,height=600');
    }
}

function shareLine() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.open('https://social-plugins.line.me/lineit/share?url=' + fbhtml_url);
    } else {
        window.open('https://social-plugins.line.me/lineit/share?url=' + fbhtml_url, 'MB-Agility', 'width=550,height=600');
    }
}

function sharetwitter() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.open('https://twitter.com/intent/tweet?text=' + fbhtml_url);
    } else {
        window.open('http://twitter.com/home/?status=' + fbhtml_url, 'MB-Agility', 'width=550,height=600');
    }
}