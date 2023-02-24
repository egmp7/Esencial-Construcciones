
/** This document draws tthe component of the app */

$(document).ready(function(){
    drawMainLayout();
});

window.addEventListener("resize", function(){
    drawMainLayout();
});

/** Draws components in main container */
drawMainLayout = function ()
{
    const MAIN_WINDOW_WIDTH = getMainWidth();
    const MAIN_WINDOW_HEIGHT = getMainHeight();

    var x;  // grid variable
    var y;  // grid variable
    var scale;

    $("main").height(MAIN_WINDOW_HEIGHT);

        x = MAIN_WINDOW_WIDTH/2;

        $(".block1").css({
            width: x, 
            height: MAIN_WINDOW_HEIGHT})

            scale = 0.85
            $(".greeting").css({
                width: x * scale,
                height: MAIN_WINDOW_HEIGHT * scale})

        $(".block2").css({
            width: x,
            height: MAIN_WINDOW_HEIGHT
        })

            x = MAIN_WINDOW_WIDTH / 4;
            y = MAIN_WINDOW_HEIGHT / 5;

            $("#aboutButton").css({
                top: y - $("#aboutButton").height()/2, 
                left: x - $("#aboutButton").width()/2})
            $("#projectsButton").css({
                top: y*2 - $("#projectsButton").height()/2, 
                left: x - $("#projectsButton").width()/2})
            $("#servicesButton").css({
                top: y*3 - $("#servicesButton").height()/2, 
                left: x - $("#servicesButton").width()/2})
            $("#contactButton").css({
                top: y*4 - $("#contactButton").height()/2, 
                left: x - $("#contactButton").width()/2})
        
        scale = 0.8
        $(".stick").height(MAIN_WINDOW_HEIGHT * scale);

        $(".modal").css({
            width: MAIN_WINDOW_WIDTH,
            height:MAIN_WINDOW_HEIGHT
        })

            const titleHeight = 42;
            x = MAIN_WINDOW_WIDTH / 4;
            y = (MAIN_WINDOW_HEIGHT - titleHeight) / 4;
        
            $("#projectsList").css({left:0,             top:0, 
                                    width: x,           height: y * 4,});
            $("#projectView").css({ left: x,            top: 0,
                                    width: x * 3,       height: y * 3});
            $("#projectsPreview").css({ left: x,        top: y * 3, 
                                        width: x * 3,   height: y});

            var paddingLeft = 30;
            var minCardWidth =300
            var divisions = Math.floor(MAIN_WINDOW_WIDTH/minCardWidth)
            x = (MAIN_WINDOW_WIDTH - paddingLeft) /divisions
            //y = MAIN_WINDOW_HEIGHT / 2.5

            $(".grid").css({width: x})

}

/** gets the width of the main component */
getMainWidth = function ()
{
    return $(".container").width();
}
/** gets the height of the main component */
getMainHeight = function ()
{
    let windowHeight = $(window).height();
    let navHeight = $("nav").outerHeight();
    let footerHeight = $("footer").outerHeight();
    
    return windowHeight - navHeight - footerHeight;
}





