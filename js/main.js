$(document).ready(function () {

    for (let sounding = 0; sounding < 10; sounding++) {
        $('.sounding').append('<span></span>');
    }

    setInterval((timer) => {
        $('.time').html(getTime());
        setTimeout(0,0);
    }, 500);
    
    $('.outil-bar').click(function (e) { 
        e.preventDefault();
        $('.outils').slideToggle();
    });

    $('.outils').click(function (e) { 
        e.preventDefault();
        $('.outils').slideToggle();
    });

    $('.outils span').click(function (e) { 
        e.preventDefault();
        let className = $(e.target).attr('class');
        let classActive = className.replace('active','');
        let RemovedClass = classActive.replace(' ', '');
        if(RemovedClass != 'bxbx-sun' && RemovedClass != 'bxbx-cog') {
            $(e.target).toggleClass('active');
            if($(e.target).hasClass('active')) {
                    if(document.querySelector('.active-icon .'+RemovedClass)) {
                        $('.'+RemovedClass).show();
                    } else {
                        $('.active-icon').append('<span class="'+ classActive +' '+ RemovedClass +'"></span>');
                    }
            }else {
                $('.'+RemovedClass).hide();
            }
        }
        if($('.outils span').hasClass('bxs-plane active')) {
            if(document.querySelector('.active-icon .bxbx-transfer-alt')) {
                $('.active-icon .bxbx-transfer-alt').hide();
            }
            if($('.outils .bx-transfer-alt').hasClass('active')) {
                $('.outils .bx-transfer-alt').removeClass('active');
            }
            $('.outils .bx-transfer-alt').css('pointer-events', 'none');
        } else if($('.outils .bx-wifi').hasClass('active')) {
            if(document.querySelector('.active-icon .bxbx-transfer-alt')) {
                $('.active-icon .bxbx-transfer-alt').hide();
            }
        }else {
            $('.outils .bx-transfer-alt').css('pointer-events', 'all');
        }
    });

    $('#open-apps-layout').click(function (e) { 
        e.preventDefault();

        $('.main-page').hide();
        $('.apps-layout').fadeIn();
        
    });

    $('#close-apps-layout').click(function (e) { 
        e.preventDefault();
        $('.main-page').fadeIn();
        $('.apps-layout').hide();
        $('.outils').slideUp();
    });

    $('#close-all-layout').click(function (e) { 
        e.preventDefault();
        $('.main-page').fadeIn();
        $('.apps-layout').hide();
        $('.outils').slideUp();
    });





    function getTime() {
        let date = new Date;
        let h = date.getHours();
        let m = date.getMinutes();
        let hours = addzero(h);
        let minutes = addzero(m);
        let now = hours +':'+ minutes;
        return now;
    }

    function addzero(n) {
        return (n < 10)?('0'+n):n;
    }

});