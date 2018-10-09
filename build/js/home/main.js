$(function() {
    $(window).scrollTop(0);

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
        $("#scene3 div").animate({
            opacity: 0
        }, 500);
    }

    function fadein3() {
        $("#scene3 div").animate({
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
            TweenMax.fromTo("#frame1", 6, {
                marginTop: '20%',
                opacity: 0
            }, {
                marginTop: '0%',
                opacity: 1,
                ease: Power3.easeInOut,
                delay: 5
            }),
            TweenMax.fromTo("#frame2", 6, {
                marginTop: '20%',
                opacity: 0
            }, {
                marginTop: '0%',
                opacity: 1,
                ease: Power3.easeInOut,
                delay: 5
            }),
            TweenMax.fromTo("#frame3", 6, {
                marginTop: '20%',
                opacity: 0
            }, {
                marginTop: '0%',
                opacity: 1,
                ease: Power3.easeInOut,
                delay: 5
            }),
            TweenMax.fromTo("#frame1_subhead", 8, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power3.easeInOut,
                delay: 5
            }),
            TweenMax.fromTo("#frame2_subhead", 8, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power3.easeInOut,
                delay: 5
            }),
            TweenMax.fromTo("#frame3_subhead", 8, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power3.easeInOut,
                delay: 5
            }),
            TweenMax.fromTo("#frame1_head", 9, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power3.easeInOut,
                delay: 5
            }),
            TweenMax.fromTo("#frame2_head", 9, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power3.easeInOut,
                delay: 5
            }),
            TweenMax.fromTo("#frame3_head", 9, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power3.easeInOut,
                delay: 5
            }),
            TweenMax.fromTo("#frame1_txt", 10, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power3.easeInOut,
                delay: 5
            }),
            TweenMax.fromTo("#frame2_txt", 10, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power3.easeInOut,
                delay: 5
            }),
            TweenMax.fromTo("#frame3_txt", 10, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power3.easeInOut,
                delay: 5
            })

        ]);





    // build scene
    new ScrollMagic.Scene({
            triggerElement: "#scene-car1",
            duration: 500,
            offset: 0
        })
        // .setTween(car1)
        // .setClassToggle('.s1-bg-car','active-1')
        .on("enter", function(event) {
            $('.s1-bg-car').addClass('active-pos-1');
        })
        .on("leave", function(event) {
            $('.s1-bg-car').removeClass('active-pos-1');
        })
        .setPin("#scene-car1")
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#scene-car2",
            duration: 500,
            offset: 0
        })
        // .setTween(car2)
        // .setClassToggle('.s1-bg-car','active-1')
        .on("enter", function(event) {
            $('.s1-bg-car').addClass('active-pos-2');
        })
        .on("leave", function(event) {
            $('.s1-bg-car').removeClass('active-pos-2');
        })
        .setPin("#scene-car2")

    .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#scene3",
            duration: 600,
            offset: 0
        })
        .setTween(tween3)
        .setPin("#scene3")
        .on("enter", function(event) {
            $('.s1-bg-car').addClass('active-pos-2');
        })
        .addTo(controller);
    new ScrollMagic.Scene({
            triggerElement: "#scene3",
            duration: 1000,
            offset: 600
        })
        .setPin("#scene3")
        // .on("enter", fadein3)
        .on("enter", function(event) {
            fadein3();
            $('.s1-bg-car').addClass('active-pos-2');
        })
        .on("leave", function(event) {
            if (event.state === 'AFTER') {
                $('.s1-bg-car').addClass('active-pos-2');
                fadeout3();
            }
        })
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#scene2",
            duration: 600,
            offset: 0
        })
        .setTween(tween2)
        .setPin("#scene2")
        .on("enter", function(event) {
            $('.s1-bg-car').addClass('active-pos-1');
        })
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#scene2",
            duration: 1000,
            offset: 600
        })
        .setPin("#scene2")
        // .on("enter", fadein2)
        .on("enter", function(event) {
            fadein2();
            $('.s1-bg-car').addClass('active-pos-1');
        })
        .on("leave", function(event) {
            if (event.state === 'AFTER') {
                fadeout2();
            }
        })
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#scene1",
            duration: 600,
            offset: 0
        })
        .setTween(tween1)
        .setPin("#scene1")
        .on("enter", function(event) {
            $('.s1-bg-car').addClass('active-pos-1');
        })
        // .addIndicators({name:"scene1"})

    .addTo(controller);
    new ScrollMagic.Scene({
            triggerElement: "#scene1",
            duration: 1000,
            offset: 600
        })
        .setPin("#scene1")

    .on("enter", function(event) {
            fadein();
            runNumberValue();
            $('.s1-bg-car').addClass('active-pos-1');
        })
        .on("leave", function(event) {
            if (event.state === 'AFTER') {
                fadeout();
            }
        })
        .addTo(controller);



});

// section2 & section3 scroll AN
$(function() {
    $(document).ready(function() {
        var superscroll = $.superscrollorama();
        var screenw = $(window).width();

        if (screenw < 992) {

            // mo s1
            superscroll.addTween('#s1-mo-scene1', TweenMax.fromTo($('#section1 .scene1 .txtHead1'), .8, {
                y: '25%',
                opacity: 0,
                immediateRender: true
            }, {
                y: '0%',
                opacity: 1
            }));
            superscroll.addTween('#s1-mo-scene1', TweenMax.fromTo($('#section1 .scene1 .Paragraph'), .8, {
                y: '25%',
                opacity: 0,
                immediateRender: true
            }, {
                y: '0%',
                opacity: 1
            }));
            superscroll.addTween('#s1-mo-scene1', TweenMax.fromTo($('#s1-car-01'), .8, {
                x: '25%',
                opacity: 0,
                immediateRender: true
            }, {
                x: '0%',
                opacity: 1
            }));

            // mo s2
            superscroll.addTween('#s1-mo-scene2', TweenMax.fromTo($('#s1-mo-scene2 .txtHead2'), .5, {
                y: '25%',
                opacity: 0,
                immediateRender: true
            }, {
                y: '0%',
                opacity: 1
            }));
            superscroll.addTween('#s1-mo-scene2', TweenMax.fromTo($('#s1-mo-scene2 .features li'), .5, {
                y: '25%',
                opacity: 0,
                immediateRender: true
            }, {
                y: '0%',
                opacity: 1
            }));

            superscroll.addTween('#s1-mo-scene3', TweenMax.fromTo($('#s1-mo-scene3'), .5, {
                y: '15%',
                opacity: 0,
                immediateRender: true
            }, {
                y: '0%',
                opacity: 1
            }));

            superscroll.addTween('#final-choose-title-mo', TweenMax.fromTo($('.final-choose h2'), .5, {
                y: '50%',
                opacity: 0,
                immediateRender: true
            }, {
                y: '0%',
                opacity: 1
            }));
            superscroll.addTween('#final-choose-title-mo', TweenMax.fromTo($('#final-choose1'), .5, {
                y: '25%',
                opacity: 0,
                immediateRender: true
            }, {
                y: '0%',
                opacity: 1
            }));
            superscroll.addTween('#final-choose2', TweenMax.fromTo($('#final-choose2'), .5, {
                y: '25%',
                opacity: 0,
                immediateRender: true
            }, {
                y: '0%',
                opacity: 1
            }));
            superscroll.addTween('#final-choose3', TweenMax.fromTo($('#final-choose3'), .5, {
                y: '25%',
                opacity: 0,
                immediateRender: true
            }, {
                y: '0%',
                opacity: 1
            }));

            // mo s3
            superscroll.addTween('#section3', TweenMax.fromTo($('#advantage-title'), .5, {
                y: '15%',
                opacity: 0,
                immediateRender: true
            }, {
                y: '0%',
                opacity: 1
            }));
            superscroll.addTween('#section3', TweenMax.fromTo($('#advantage1'), .5, {
                y: '15%',
                opacity: 0,
                immediateRender: true
            }, {
                y: '0%',
                opacity: 1
            }));
            superscroll.addTween('#advantage1', TweenMax.fromTo($('#advantage2'), .5, {
                y: '15%',
                opacity: 0,
                immediateRender: true
            }, {
                y: '0%',
                opacity: 1
            }));
            superscroll.addTween('#advantage2', TweenMax.fromTo($('#advantage3'), .5, {
                y: '15%',
                opacity: 0,
                immediateRender: true
            }, {
                y: '0%',
                opacity: 1
            }));
            superscroll.addTween('#advantage3', TweenMax.fromTo($('#advantage4'), .5, {
                y: '15%',
                opacity: 0,
                immediateRender: true
            }, {
                y: '0%',
                opacity: 1
            }));

        } else {
            superscroll.addTween('#section2', (new TimelineLite())
                .append([TweenMax.fromTo($('.final-choose h2'), 1, {
                    y: '50%',
                    opacity: 0,
                    immediateRender: true
                }, {
                    y: '0%',
                    opacity: 1
                })])
                .append([TweenMax.fromTo($('.choose-box'), 1, {
                    y: '25%',
                    opacity: 0,
                    immediateRender: true
                }, {
                    y: '0%',
                    opacity: 1
                })]), 600);

            superscroll.addTween('#section3', (new TimelineLite())
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


});

// Section2 Tab change

$(function() {
    $('#section2 ul.chooseTab li').find('.headTxt').click(function() {
        var $qa_content = $(this).next('div.conTxt');
        var $index = $(this).parent().index();
        if (!$qa_content.is(':visible')) {
            $('#section2 ul.chooseTab li div.conTxt:visible').slideUp();
        }
        $qa_content.slideDown();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        $('#section2 .slide .slide-img').removeClass('active');
        $('#section2 .slide .slide-img').eq($index).addClass('active');

    }).siblings().addClass('conTxt').hide();

    $('#section2 ul.chooseTab li:nth-of-type(1) .conTxt').show();

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
        $('#section4 .youtube-preview').click(function() {
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