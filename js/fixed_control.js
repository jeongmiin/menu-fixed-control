
$(document).ready(function(){   
    $(".fixed_menu li").click(function(e) {
        e.preventDefault();
        var dataTab = $(this).attr('data-tab');
        var position = $('#' + dataTab).offset().top - 50;
        
        $("body, html").animate({
            scrollTop: position
        },400);
        
        $(this).parents('.fixed_menu').find('li').removeClass('active');
        $(this).addClass('active');
    });

    menuFixed();
});

$(window).scroll(function(){
    menuFixed();
});

function menuFixed(){
    var scrollTop = $(window).scrollTop();
    var conOffset = $('.cont_list').offset().top - 50;
    var fixedTop = scrollTop - conOffset

    var contHeight = $('.cont_list').outerHeight();
    var menuHeight = $('.fixed_menu').outerHeight();
    var menuMaxTop = contHeight - menuHeight;

    
    if(scrollTop >= conOffset){
        if(fixedTop < menuMaxTop){
            $('.fixed_menu').css('top',fixedTop);
        }    
    }else{
        $('.fixed_menu').css('top', 0);
    }
}