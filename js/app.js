

function headerStuff(){
    
    let pixel = $(window).scrollTop();

    $(window).scroll(function(){

        if(pixel >= 40){
            $('header__up').fadeOut();
            $('header').css('top','-40px');
        }
    })

    $(window).on('load', function(){
        if(pixel >= 40){
            $('header').css('top','-40px');
        }        
    });
    
}

$(document).ready(function(){

    headerStuff();    
   
    $(window).scroll(function(){
        headerStuff(); 
    });

    $('.season__featured-wrapper--small').mouseover(function(){
        $(this).find('.season__image:first').addClass('active');
        // alert();
    });

    $('.season__featured-wrapper--small').mouseout(function(){
        $(this).find('.season__image').removeClass('active');
    });



    $('.cart').click(function(){
        $('.modal').addClass('lightbox');
        $('.modal__cart').addClass('visible')
    })

    // .children().click(function(e) {
    //     return false;
    //   });

    $('.modal__button, .modal').click(function(){
        $('.modal').removeClass('lightbox');
        $('.modal__cart').removeClass('visible')
        $('.modal__nav').removeClass('active')
    })

    $('.header__burger').click(function(){
        $('.modal').addClass('lightbox');
        $('.modal__nav').addClass('active');
    })

});