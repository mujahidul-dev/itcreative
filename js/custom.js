$(function(){

    new VenoBox({
        selector: '.my-video-links',
    });
    $('.counter').counterUp({
        delay: 30,
        time: 2000
    });
    
    $("#colorful").colorfulTab();

    $('.brand-main').slick({
    slidesToShow:5,
    slidesToScroll:1,
    speed:1000,
    autoplay:true,
    nextArrow: '.next',
    prevArrow: '.prev',
});

})