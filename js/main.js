$('li a').click(function(){
        
    $('body,html').animate({
        scrollTop : $($(this).attr('href')).offset().top - 80
    });
    
});

$('.scrollTop').click(function(){
    $('body,html').animate({
        scrollTop : 0
    },500);
});

$(document).ready(function(){

    $(window).scroll(function() {
        var window = $(this).scrollTop()
        if ( window > 100) {
            $('.scrollTop').show()
        } else {
            $('.scrollTop').hide()
        }
    });

});