$(document).ready(function(){
    $('#collares').click(function(){
        $('#productoBandanas').hide();
        $('#productoCorreas').hide();
        $('#productoCollares').slideDown();
    })
    
    $('#correas').click(function(){
        $('#productoCollares').hide();
        $('#productoBandanas').hide();
        $('#productoCorreas').slideDown();
    })
    
    $('#bandanas').click(function(){
        $('#productoCollares').hide();
        $('#productoCorreas').hide();
        $('#productoBandanas').slideDown();
    })
    
    $('.carruselPrincipal').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
})