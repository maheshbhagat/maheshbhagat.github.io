var windowHeight = $(window).height() - 320;

function setHeight() {
    windowHeight = $(window).height();
    $('.header').css('height', windowHeight);
}

setHeight();