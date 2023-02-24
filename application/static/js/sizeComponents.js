
$(document).ready(function(){
    setComponentsPosition();

});

window.addEventListener("resize", function(){

    setComponentsPosition();

});

/** Gets the width of the container */
getMainWidth = function ()
{
    return $(".container").width();
}
/** Gets the width of the main component */
getMainHeight = function ()
{
    let windowHeight = $(window).height();
    let navHeight = $("nav").outerHeight();
    let footerHeight = $("footer").outerHeight();
    
    return windowHeight - navHeight - footerHeight;
}

/** Sets positions of components */
setComponentsPosition = function ()
{
    var w = getMainWidth();
    var h = getMainHeight();

    console.log(h)
    $("main").height(h);
    
    // main components
    $(".block1").width(w / 2);
    $(".block1").height(h);
    $(".block2").width(w / 2);
    $(".block2").height(h);
    $(".stick").height(h * 0.8);
    // block 1 components
    $(".greeting").width(w / 2 * 0.85)
    $(".greeting").height(h * 0.7)
    
    // modal component
    $("modal").height(h);
    $("modal").width(w);
    
    // main buttons
    var x = w / 4;
    var y = h / 5;
    $("#aboutButton").css({top: y - $("#aboutButton").height()/2, 
                           left: x - $("#aboutButton").width()/2})
    $("#projectsButton").css({top: y*2 - $("#projectsButton").height()/2, 
                              left: x - $("#projectsButton").width()/2})
    $("#servicesButton").css({top: y*3 - $("#servicesButton").height()/2, 
                              left: x - $("#servicesButton").width()/2})
    $("#contactButton").css({top: y*4 - $("#contactButton").height()/2, 
                             left: x - $("#contactButton").width()/2})

    // projects component
    var w = getMainWidth() / 4;
    var h = (getMainHeight() - 42) / 4;

    $("#projectsList").css({left:0,             top:0, 
                            width: w,           height: h * 4,});
    $("#projectView").css({ left: w,            top: 0,
                            width: w * 3,       height: h * 3});
    $("#projectsPreview").css({ left: w,        top: h * 3, 
                                width: w * 3,   height: h});
}





