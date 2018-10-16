$(function() {
    //kv slider
    $('.kvSlider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //section2 assign car
    $(function() {
        var _showTab = 0;
        var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
        $($defaultLi.find('a').attr('href')).siblings().hide();
        $('ul.tabs li').click(function() {
            var $this = $(this),
                _clickTab = $this.find('a').attr('href'),
                _clickTab2 = $this.find('a').attr('data-car');
            console.log(_clickTab2);
            $('.assignCarTitle').removeClass('selectionActive');
            switch ($this.index()) {
                case 0:
                    $('.firstThirty').addClass('selectionActive');
                    break;
                case 1:
                    $('.monthlyFifty').addClass('selectionActive');
                    break;
                default:
                    $('.ExpirationThirty').addClass('selectionActive');
            }
            $('#colorBlock').removeClass().addClass(_clickTab2);
            $this.addClass('active').siblings('.active').removeClass('active');
            $(_clickTab).stop(false, true).fadeIn().siblings().hide();
            console.log($this.index());
            return false;
        }).find('a').focus(function() {
            this.blur();
        });
    });

    //section3 three selection
    // $('.threeSelection li').on('mouseover', function() {
    //     var $this = $(this)
    //     $this.css({
    //         'width': '40%'
    //     }).siblings().css({
    //         'width': '30%'
    //     })
    // });
    // $('.threeSelection li').on('mouseleave', function() {
    //     var $this = $(this)
    //     $this.css({
    //         'width': '33.333%'
    //     }).siblings().css({
    //         'width': '33.333%'
    //     })
    // }); 


    //animation
    var tween1 = new TimelineMax()
        .add([
            TweenMax.fromTo("#txtHead", 2, {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                ease: Power3.easeInOut
            }),
            TweenMax.fromTo("#Paragraph", 3, {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                ease: Power3.easeInOut
            })
        ]);
    var tween2 = new TimelineMax()
        .add([
            TweenMax.fromTo("#txtHead2", 1, {
                y: 100,
                top: 0,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                ease: Power3.easeInOut
            }),

            TweenMax.fromTo("#f1", 2, {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                ease: Power3.easeInOut
            }),
            TweenMax.fromTo("#f2", 4, {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                ease: Power3.easeInOut
            }),
            TweenMax.fromTo("#f3", 5, {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                ease: Power3.easeInOut
            }),
        ]);

    var tween3 = new TimelineMax()
        .add([
            TweenMax.fromTo("#txtHead3", 1, {
                y: 100,
                top: 0,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                ease: Power3.easeInOut
            }),

            TweenMax.fromTo("#ts1", 2, {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                ease: Power3.easeInOut
            }),
            TweenMax.fromTo("#ts2", 4, {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                ease: Power3.easeInOut
            }),
            TweenMax.fromTo("#ts3", 5, {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                ease: Power3.easeInOut
            }),
        ]);


    // build tween
    function fadeout() {
        $("#scene1 div").animate({
            opacity: 0
        }, 500);
    }

    function fadein() {
        $("#scene1 div").animate({
            opacity: 1
        }, 500);
    }

    function fadeout2() {
        $("#scene2 div").animate({
            opacity: 0
        }, 500);
    }

    function fadein2() {
        $("#scene2 div").animate({
            opacity: 1
        }, 500);
    }

    function fadeout3() {
        $("#scene3").animate({
            opacity: 0
        }, 500);
    }

    function fadein3() {
        $("#scene3").animate({
            opacity: 1
        }, 500);
    }


    function number(a, b, c, d, start) {
        if (d) {
            var e = start;
            var f = parseInt(d / a);
            var g = setInterval(function() {
                if (e - 1 < a) c.html(numberWithCommas(e));
                else {
                    c.html(numberWithCommas(b));
                    clearInterval(g);
                }
                e++;
            }, f);
        } else c.html(b);
    }
    var is_enter = 0;

    function runNumberValue() {

        if (is_enter === 0) {
            $(".stats .num").each(function() {
                var b = $(this);
                var c = b.attr("data-num");
                var d = b.attr("data-content");
                var start = b.attr("data-start");
                number(c, d, b, 2600, start);
                is_enter = 1;
            });
        }
    }

    var screen11 = new ScrollMagic.Scene({
            triggerElement: "#scene1",
            duration: 300,
            offset: 0
        })
        .setTween(tween1)
        .setPin("#scene1")
        // .addIndicators()
        .addTo(controller);
    var screen12 = new ScrollMagic.Scene({
            triggerElement: "#scene1",
            duration: 500,
            offset: 300
        })
        .setPin("#scene1")
        .on("enter", function(event) {
            fadein();
            runNumberValue();
            $('.s1-bg-car').removeClass('active-pos-1');
        })
        .on("leave", function(event) {
            if (event.state === 'AFTER') {
                fadeout();
            }
        })
        // .addIndicators()
        .addTo(controller);



    var screencar = new ScrollMagic.Scene({
            triggerElement: "#scene-car1",
            duration: 200,
            offset: 0
        })
        .on("enter", function(event) {
            $('.s1-bg-car').addClass('active-pos-1');
        })
        .setPin("#scene-car1")
        // .addIndicators()
        .addTo(controller);

    var screen21 = new ScrollMagic.Scene({
            triggerElement: "#scene2",
            duration: 1000,
            offset: 100
        })
        .setTween(tween2)
        .setPin("#scene2")
        .on("enter", function(event) {
            fadein2();
        })
        .on("leave", function(event) {
            fadeout2();
        })
        // .addIndicators()
        .addTo(controller);

    var screen31 = new ScrollMagic.Scene({
            triggerElement: "#scene3",
            duration: 800,
            offset: 0
        })
        .setTween(tween3)
        .setPin("#scene3")
        .on("enter", function(event) {
            fadein3();
        })
        .on("leave", function(event) {
            fadeout3();
        })
        // .addIndicators()
        .addTo(controller);
});

// section2 & section3 scroll AN
$(function() {
    var superscroll = $.superscrollorama();
    var screenw = $(window).width();
    if (screenw < 992) {
        // mo s1
        // superscroll.addTween('#s1-mo-scene1', TweenMax.fromTo($('#section1 .scene1 .txtHead1'), .8, {
        //     y: '25%',
        //     opacity: 0,
        //     immediateRender: true
        // }, {
        //     y: '0%',
        //     opacity: 1
        // }));
        // superscroll.addTween('#s1-mo-scene1', TweenMax.fromTo($('#section1 .scene1 .Paragraph'), .8, {
        //     y: '25%',
        //     opacity: 0,
        //     immediateRender: true
        // }, {
        //     y: '0%',
        //     opacity: 1
        // }));
        // superscroll.addTween('#s1-mo-scene1', TweenMax.fromTo($('#s1-car-01'), .8, {
        //     x: '25%',
        //     opacity: 0,
        //     immediateRender: true
        // }, {
        //     x: '0%',
        //     opacity: 1
        // }));

        // mo s2
        // superscroll.addTween('#s1-mo-scene2', TweenMax.fromTo($('#s1-mo-scene2 .txtHead2'), .5, {
        //     y: '25%',
        //     opacity: 0,
        //     immediateRender: true
        // }, {
        //     y: '0%',
        //     opacity: 1
        // }));
        // superscroll.addTween('#s1-mo-scene2', TweenMax.fromTo($('#s1-mo-scene2 .features li'), .5, {
        //     y: '25%',
        //     opacity: 0,
        //     immediateRender: true
        // }, {
        //     y: '0%',
        //     opacity: 1
        // }));

        // superscroll.addTween('#s1-mo-scene3', TweenMax.fromTo($('#s1-mo-scene3'), .5, {
        //     y: '15%',
        //     opacity: 0,
        //     immediateRender: true
        // }, {
        //     y: '0%',
        //     opacity: 1
        // }));

        // superscroll.addTween('#final-choose-title-mo', TweenMax.fromTo($('.final-choose h2'), .5, {
        //     y: '50%',
        //     opacity: 0,
        //     immediateRender: true
        // }, {
        //     y: '0%',
        //     opacity: 1
        // }));
        // superscroll.addTween('#final-choose-title-mo', TweenMax.fromTo($('#final-choose1'), .5, {
        //     y: '25%',
        //     opacity: 0,
        //     immediateRender: true
        // }, {
        //     y: '0%',
        //     opacity: 1
        // }));
        // superscroll.addTween('#final-choose2', TweenMax.fromTo($('#final-choose2'), .5, {
        //     y: '25%',
        //     opacity: 0,
        //     immediateRender: true
        // }, {
        //     y: '0%',
        //     opacity: 1
        // }));
        // superscroll.addTween('#final-choose3', TweenMax.fromTo($('#final-choose3'), .5, {
        //     y: '25%',
        //     opacity: 0,
        //     immediateRender: true
        // }, {
        //     y: '0%',
        //     opacity: 1
        // }));

        // mo s3
        // superscroll.addTween('#section4', TweenMax.fromTo($('#advantage-title'), .5, {
        //     y: '15%',
        //     opacity: 0,
        //     immediateRender: true
        // }, {
        //     y: '0%',
        //     opacity: 1
        // }));
        // superscroll.addTween('#section4', TweenMax.fromTo($('#advantage1'), .5, {
        //     y: '15%',
        //     opacity: 0,
        //     immediateRender: true
        // }, {
        //     y: '0%',
        //     opacity: 1
        // }));
        // superscroll.addTween('#advantage1', TweenMax.fromTo($('#advantage2'), .5, {
        //     y: '15%',
        //     opacity: 0,
        //     immediateRender: true
        // }, {
        //     y: '0%',
        //     opacity: 1
        // }));
        // superscroll.addTween('#advantage2', TweenMax.fromTo($('#advantage3'), .5, {
        //     y: '15%',
        //     opacity: 0,
        //     immediateRender: true
        // }, {
        //     y: '0%',
        //     opacity: 1
        // }));
        // superscroll.addTween('#advantage3', TweenMax.fromTo($('#advantage4'), .5, {
        //     y: '15%',
        //     opacity: 0,
        //     immediateRender: true
        // }, {
        //     y: '0%',
        //     opacity: 1
        // }));

    } else {
        superscroll.addTween('#section4', (new TimelineLite())
            .append([TweenMax.fromTo($('#advantage-title'), .5, {
                y: '50%',
                opacity: 0,
                immediateRender: true
            }, {
                y: '0%',
                opacity: 1
            })])
            .append([TweenMax.fromTo($('#advantage1'), 1, {
                    y: '50%',
                    opacity: 0,
                    immediateRender: true
                }, {
                    y: '0%',
                    opacity: 1
                }),
                TweenMax.fromTo($('#advantage2'), 1, {
                    y: '50%',
                    opacity: 0,
                    immediateRender: true
                }, {
                    y: '0%',
                    opacity: 1
                })
            ])
            .append([TweenMax.fromTo($('#advantage3'), 1, {
                    y: '50%',
                    opacity: 0,
                    immediateRender: true
                }, {
                    y: '0%',
                    opacity: 1
                }),
                TweenMax.fromTo($('#advantage4'), 1, {
                    y: '50%',
                    opacity: 0,
                    immediateRender: true
                }, {
                    y: '0%',
                    opacity: 1
                })
            ]), 600);
    }
});


//youtube API
var player;

function onYouTubePlayerAPIReady() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        player = new YT.Player('youtube-video', {
            height: '1920',
            width: '1080',
            videoId: 'hTEHYOFfocg',
            playerVars: {
                autoplay: 1, // 在讀取時自動播放影片
                controls: 1, // 在播放器顯示暫停／播放按鈕
                showinfo: 0, // 隱藏影片標題
                modestbranding: 0, // 隱藏YouTube Logo
                loop: 1, // 讓影片循環播放
                autohide: 0, // 當播放影片時隱藏影片控制列
                rel: 0,
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            }
        });
    } else {
        $('#section5 .youtube-preview').click(function() {
            player = new YT.Player('youtube-video', {
                height: '1920',
                width: '1080',
                videoId: 'hTEHYOFfocg',
                playerVars: {
                    autoplay: 1, // 在讀取時自動播放影片
                    controls: 1, // 在播放器顯示暫停／播放按鈕
                    showinfo: 0, // 隱藏影片標題
                    modestbranding: 0, // 隱藏YouTube Logo
                    loop: 1, // 讓影片循環播放
                    autohide: 0, // 當播放影片時隱藏影片控制列
                    rel: 0,
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                }
            });
        });
    }
}

function onPlayerReady(event) {
    event.target.playVideo();
}
var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}