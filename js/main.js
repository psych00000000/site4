$ (document).ready(function() {
    $('nav a[href^="#"]').click(function() {
        let target  = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },500);
        $('nav a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('.menu').toggle(500);
        return false;
    })
    $('.menu_burger').click(function(){
        $('.menu').toggle(500);
       
    })
});