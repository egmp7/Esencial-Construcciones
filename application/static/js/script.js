

$(document).ready(function(){
    
    setResponsiveComponents(getMainWidth(),getMainHeight());

});

/**Gets the width of the container */
getMainWidth = function ()
{
    return $(".container").width();
}

/** Gets the width of the main component */
getMainHeight = function ()
{
    let windowHeight = $(document).height();
    let navHeight = $("nav").outerHeight();
    let footerHeight = $("footer").outerHeight();
    
    return windowHeight - navHeight - footerHeight;
}

/**Sets width and height of components */
setResponsiveComponents = function (w,h)
{
    $("main").height(h);
    
    // main components
    $(".block1").width(w/2);
    $(".block1").height(h);
    $(".block2").width(w/2);
    $(".block2").height(h);
    $(".stick").height(h * 0.8);
    
    // modal component
    $("modal").height(h * 0.95);
    $("modal").width(w);

}