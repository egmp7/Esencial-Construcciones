

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

/**Sets width and height of components
 * @param w width of the main component
 * @param h height of the main component
 */
setResponsiveComponents = function (w,h)
{
    $("main").height(h);
    
    // main components
    $(".block1").width(w / 2);
    $(".block1").height(h);
    $(".block2").width(w / 2);
    $(".block2").height(h);
    $(".stick").height(h * 0.8);

    // block 1 components
    $(".greeting").width(w / 2 * 0.85)
    $(".greeting").height(h * 0.9)
    
    // modal component
    $("modal").height(h * 0.95);
    $("modal").width(w);

}

// events
$( "#aboutButton" ).click(() => 
{
    showModal()
    $( "#about" ).css("display", "block");
});

$( "#projectsButton" ).click(() => 
{
    showModal()
    $( "#projects" ).css("display", "block");
});

$( "#servicesButton" ).click(function() {
    showModal()
    $( "#services" ).css("display", "block");
});

$( "#contactButton" ).click(function() {
    showModal()
    $( "#contact" ).css("display", "block");
});
$( "#closeModal" ).click(function() {
    showMain()
    $( "#about" ).css("display", "none");
    $( "#projects" ).css("display", "none");
    $( "#services" ).css("display", "none");
    $( "#contact" ).css("display", "none");
});

/** Hides the main componets and shows the modal component */
showModal = function()
{
    $("modal").css("display", "block");
    $(".block1").css("display", "none");
    $(".block2").css("display", "none");
    $(".stick").css("display", "none");   
}

/** Hides the modal componet and shows the main components */
showMain = function()
{
    $("modal").css("display", "none");
    $(".block1").css("display", "block");
    $(".block2").css("display", "block");
    $(".stick").css("display", "block");
}