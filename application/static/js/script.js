

$(document).ready(function(){

    containerWidth = $(".container").width();

    //$("#rect").width(containerWidth*0.9);


    // height
    windowHeight = $(document).height();
    navHeight = $("nav").outerHeight();
    footerHeight = $("footer").outerHeight();
    mainHeight = windowHeight - navHeight - footerHeight;

    $("main").height(mainHeight);

    $("modal").height(mainHeight * 0.9);
    $("modal").width(containerWidth *0.9);



});