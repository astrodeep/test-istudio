$('.clients-list').slick({
    arrows:true,
    slidesToShow:3,
    centerMode: false,
    autoplay:false,
    prevArrow: $('.clients__slider-prev'),
    nextArrow: $('.clients__slider-next'),
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 2,

            }
        },

        {
            breakpoint: 600,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,

            }
        },

    ]
});
