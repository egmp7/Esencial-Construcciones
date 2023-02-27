const ANIMATION_TIME= 400;

slideAnimationOut = function ( element )
{
    $( element ).animate({
        left: $( window ).width()}, 
        ANIMATION_TIME, 
        () => {$( element ).hide()})

    $( "#home" ).show();
    $( "#home" ).animate({left: - $( window ).width()}, 0)
    $( "#home" ).animate({left: 0 }, ANIMATION_TIME)
    draw()
}

slideAnimationIn = function ( element )
{
    $( "#home" ).animate({
        left: - $(window).width()},
        ANIMATION_TIME, 
        () => { $("#home").hide()})

    $( element ).show();
    $( element ).animate({left: $( window ).width()}, 0)
    $( element ).animate({left: "0" }, ANIMATION_TIME)
    draw()
}