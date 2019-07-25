$(function () {

    //top Menu
    // $('.menu a').each(function (index, element) {
    //     $(element).click(function () {
    //         let id = $(this).attr('href');
    //         let top = $(id).offset().top;
    //         $('html').animate({
    //             scrollTop: top
    //         }, 1500)
    //     })
    // })

    //Menu Right Radio Button
    $('.wrapper').each(function (index, element) {
        $(element).click(function () {
            let id = $(this).children().attr('href');
            let top = $(id).offset().top;
            // $('.menu-radio').removeClass('active');
            // $('.menu-radio').eq(index).addClass('active');
            $('html').animate({
                scrollTop: top
            }, 1500)
        })
    })

    //scroll
    $(window).scroll(function () {
        $('.menu-radio').each(function (index, element) {
            let id = $(this).attr('href');
            let top = $(id).offset().top;
            if (window.scrollY + 200 > top) {
                $('.menu-radio').removeClass('active');
                $('.menu-radio').eq(index).addClass('active');
            };
        })
    })
    //time
    setInterval(function () {
        let newDate = new Date();
        let hh = newDate.getHours();
        let mm = newDate.getMinutes();
        let ss = newDate.getSeconds();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        if (date < 10) date = '0' + date;
        if (month < 10) month = '0' + month;
        if (hh < 10) hh = '0' + hh;
        if (mm < 10) mm = '0' + mm;
        if (ss < 10) ss = '0' + ss;
        $('.date').textContent = `${date}.${month}.${newDate.getFullYear()}`;
        $('.thh').text(hh);
        $('.tmm').text(mm);
        $('.tss').text(ss);
    }, 1000);

    //Home
    $('.titleHome').each(function (index, elem) {
        $(elem).mouseover(function () {
            let bColor = $(this).css("background-color");
            let color = $(this).css("color");
            $(elem).animate({
                backgroundColor: color,
                color: bColor,
            })

        })
    })
    $('.title').animate({
        top: '0px'
    }, 2000, 'easeInOutBack');
    $('.subtitle').animate({
        left: '0'
    }, 2000, 'easeInOutBack');

    //about
    let r, g, b;
    $('li').each(function (index, element) {
        $(element).mouseover(function () {
            r = Math.round(Math.random() * 255);
            g = Math.round(Math.random() * 255);
            b = Math.round(Math.random() * 255);
            $(this).animate({
                width: '97%'
            }, 700)
            $(this).css({
                background: `rgb(${r},${g},${b})`
            });
            $('.liDescription').eq(index).fadeIn();
        })
        $(element).mouseout(function () {
            $(this).animate({
                width: '250px'
            }, 700);
            $('.liDescription').eq(index).fadeOut();

        })
    })

    //skills
    //slider2
    let btn = true;
    let indexSlider = 0;
    let sliderLenght = $('.slider2Button').length - 1;
    $('.slider2').eq(indexSlider).show();
    $('.slider2Button').each(function (index, elem) {
        $(elem).mouseover(function () {
            $(this).animate({
                backgroundColor: 'black'
            }, 300);
        });
        $(elem).mouseout(function () {
            let btnClass = document.querySelectorAll('.slider2Button')[index].className;
            if (btnClass.indexOf('btnActive') == -1) {
                $(this).animate({
                    backgroundColor: 'white'
                }, 300);
            }
        })
       
        $(elem).click(function () {
            if (btn) {
                btn=false;
                $('.slider2Button').removeClass('btnActive');
                $('.slider2Button').css({ backgroundColor: 'white' });
                $(this).addClass('btnActive');
                $(this).css({ backgroundColor: 'black' });
                //---
                if (index > indexSlider) {
                    $('.slider2').eq(indexSlider).animate({
                        left: '100%'
                    }, 1000, function () {
                        $(this).hide();
                    });
                    indexSlider++;
                    $('.slider2').eq(indexSlider).css({
                        left: '-100%'
                    })
                    $('.slider2').eq(indexSlider).show().animate({
                        left: '0'
                    }, 1000);
                    let start = setInterval(function () {
                        if (indexSlider == index) { clearInterval(start);
                        btn=true; }
                        else {
                            $('.slider2').eq(indexSlider).animate({
                                left: '100%'
                            }, 1000, function () {
                                $(this).hide();
                            });
                            indexSlider++;
                            $('.slider2').eq(indexSlider).css({
                                left: '-100%'
                            })
                            $('.slider2').eq(indexSlider).show().animate({
                                left: '0'
                            }, 1000);
                        }
                    }, 1000)
                } else if (index < indexSlider) {
                    $('.slider2').eq(indexSlider).animate({
                        left: '-100%'
                    }, 1000, function () {
                        $(this).hide();
                    });
                    indexSlider--;
                    $('.slider2').eq(indexSlider).css({
                        left: '100%'
                    })
                    $('.slider2').eq(indexSlider).show().animate({
                        left: '0'
                    }, 1000);
                    let start = setInterval(function () {
                        if (indexSlider == index) { clearInterval(start); 
                        btn=true;}
                        else {
                            $('.slider2').eq(indexSlider).animate({
                                left: '-100%'
                            }, 1000, function () {
                                $(this).hide();
                            });
                            indexSlider--;
                            $('.slider2').eq(indexSlider).css({
                                left: '100%'
                            })
                            $('.slider2').eq(indexSlider).show().animate({
                                left: '0'
                            }, 1000);
                        }
                    }, 1000)

                };
            };
            })

    })
    $('.left2').mouseover(function () {
        $(this).animate({
            backgroundColor: 'black'
        })
    })
    $('.left2').mouseout(function () {
        $(this).animate({
            backgroundColor: 'rgb(255, 246, 246)'
        })
    })
    $('.right2').mouseover(function () {
        $(this).animate({
            backgroundColor: 'black'
        })
    })
    $('.right2').mouseout(function () {
        $(this).animate({
            backgroundColor: 'rgb(255, 246, 246)'
        })
    })

    let left = true;
    $('.left2').click(function () {
        if (left && btn) {
            left = false;
            $('.slider2').eq(indexSlider).animate({
                left: '-100%'
            }, 1000, function () {
                $(this).hide();
            });
            if (indexSlider == 0) {
                indexSlider = sliderLenght;
            } else indexSlider--;

            $('.slider2').eq(indexSlider).css({
                left: '100%'
            })
            $('.slider2').eq(indexSlider).show().animate({
                left: '0'
            }, 1000, function () { left = true; });
            $('.slider2Button').removeClass('btnActive');
            $('.slider2Button').css({ backgroundColor: 'white' });
            $('.slider2Button').eq(indexSlider).addClass('btnActive');
            $('.slider2Button').eq(indexSlider).css({ backgroundColor: 'black' });
        }
    })


    let right = true;
    $('.right2').click(function () {
        if (right & btn) {
            right = false;
            $('.slider2').eq(indexSlider).animate({
                left: '100%'
            }, 1000, function () {
                $(this).hide();
            });
            if (indexSlider == sliderLenght) {
                indexSlider = 0;
            } else indexSlider++;
            $('.slider2').eq(indexSlider).css({
                left: '-100%'
            })
            $('.slider2').eq(indexSlider).show().animate({
                left: '0'
            }, 1000, function () { right = true; });

            $('.slider2Button').removeClass('btnActive');
            $('.slider2Button').css({ backgroundColor: 'white' });
            $('.slider2Button').eq(indexSlider).addClass('btnActive');
            $('.slider2Button').eq(indexSlider).css({ backgroundColor: 'black' });
        };
    }) //end slider2

    //works
    let randomizer = (min, max) => Math.round(min + Math.random() * (max - min));
    $('.circle').each(function (index, elem) {
        setInterval(function () {
            let hWidth = randomizer(50, 150);
            let rgb = `rgb(${randomizer(0, 255)},${randomizer(0, 255)},${randomizer(0, 255)})`;
            $('.circle').eq(index).animate({
                top: randomizer(0, 600),
                left: randomizer(0, 1200),
                backgroundColor: rgb,
                borderColor: `rgb(${randomizer(0, 255)},${randomizer(0, 255)},${randomizer(0, 255)})`,
                boxShadow: `3px 3px 20px 2px  ${rgb}`,
                width: hWidth,
                height: hWidth,
            }, randomizer(400, 1500), 'easeInOutQuad')
        });
    })

    // contact task list
    //add checkbox
let count=0;
    $('#add').click(function () {
        if ($('#newtext').val() != '') {
            let val = $('#newtext').val();
            $('#newtext').val('');
            $('.noteLeft').append(`<div class="check"><input num="${count}" onclick="removeList(${count})" type="checkbox" name="note" id="" value="${val}">${val}</div>`);
        count++;
        } else {
            $('.modal').fadeIn();
        }
    })

    $('.close').click(function () {
        $('.modal').fadeOut();
    })
    //delete checkbox
    $('input[type=checkbox]').each(function (index, elem) {
        $(elem).click(function () {
            if ($('input[type=checkbox]').length > 1) {
                $(this).parent().remove();
            } else {
                $('.modal2').fadeIn();
            }
        })
    });
    $('.close2').click(function () {
        $('.modal2').fadeOut();
    })
   
})

function removeList(num){
    if ($('input[type=checkbox]').length > 1) {
        $(`input[num=${num}]`).parent().remove();
    } else {
        $('.modal2').fadeIn();
    }
}


//slider 1
let getSel = (sel) => document.querySelector(sel);
let pos = 0;
let timerId;
let radioLength = document.getElementsByClassName('slider').length;
getSel('.container').style.backgroundImage = `url('${document.getElementsByClassName('slider')[0].src}')`;

//кліки на радіо кнопки
for (let i = 0; i < radioLength; i++) {
    document.getElementsByClassName('slider')[i].onclick = function () {
        getSel('.container').style.backgroundImage = `url('${document.getElementsByClassName('slider')[i].src}')`;
        pos = i;
    }
}
//превю onmouseover на радіо кнопки
for (let i = 0; i < radioLength; i++) {
    document.getElementsByClassName('slider')[i].onmouseover = function (e) {
        getSel('.preview').style.left = e.clientX - 275 + 'px';
        getSel('.preview').style.display = 'block';
        getSel('.preview').style.backgroundImage = `url('${document.getElementsByClassName('slider')[i].src}')`;
        getSel('.preview').style.backgroundSize = '100% 100%';
    }
}
//превю onmouseout на радіо кнопки
for (let i = 0; i < radioLength; i++) {
    document.getElementsByClassName('slider')[i].onmouseout = function (e) {
        getSel('.preview').style.display = 'none';
    }
}
//клік на стрілку вліво
getSel('.left').onclick = function () {
    if (pos == 0) {
        pos = radioLength - 1;
    } else {
        pos--;
    }
    document.getElementsByClassName('slider')[pos].checked = true;
    getSel('.container').style.backgroundImage = `url('${document.getElementsByClassName('slider')[pos].src}')`;
}
getSel('.right').onclick = function () {
    if (pos == radioLength - 1) {
        pos = 0;
    } else {
        pos++;
    }
    document.getElementsByClassName('slider')[pos].checked = true;
    getSel('.container').style.backgroundImage = `url('${document.getElementsByClassName('slider')[pos].src}')`;
}
//клік PLAY
getSel('#play').onclick = function () {
    getSel('#play').style.display = 'none';
    getSel('#pause').style.display = 'block';
    timerId = setInterval(function () {
        if (pos == radioLength - 1) {
            pos = 0;
        } else pos++;
        document.getElementsByClassName('slider')[pos].checked = true;
        getSel('.container').style.backgroundImage = `url('${document.getElementsByClassName('slider')[pos].src}')`;
    }, 3000);

}
//клік Pause
getSel('#pause').onclick = function () {
    getSel('#play').style.display = 'block';
    getSel('#pause').style.display = 'none';
    clearInterval(timerId);
}