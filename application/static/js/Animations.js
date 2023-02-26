const ANIMATION_TIME= 400;

slideModal = function ()
{
    $( ".modal" ).animate({
        left: $(window).width()}, 
        ANIMATION_TIME, 
        () => {
    
            $( "#about" ).hide();
            $( "#projects" ).hide();
            $( "#services" ).hide();
            $( "#contact" ).hide();
            $(".modal").hide();
    
    })

    $( ".home" ).show();
    $( ".home" ).animate({left: - $(window).width()}, 0)
    $( ".home" ).animate({left: 0 }, ANIMATION_TIME)
}

slideHome = function ()
{
    $( ".home" ).animate({
        left: - $(window).width()},
        ANIMATION_TIME, 
        () => {
        $(".home").hide();
    })

    $( ".modal" ).show();
    $( ".modal" ).animate({left: $(window).width()}, 0)
    $( ".modal" ).animate({left:"0"}, ANIMATION_TIME)
}