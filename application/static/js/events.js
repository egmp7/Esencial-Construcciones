


/********************************************* 
 * Main Buttons Events 
 * ********************************************/
$( "#aboutButton" ).click(() => 
{
    showModal()
    $( "#about" ).css("display", "block");
    $(".stick").css({display: "block", width: 4});

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
    $(".stick").css({display: "block", width: 4});

});
$( "#closeModal" ).click(function() {
    $( "#about" ).css("display", "none");
    $( "#projects" ).css("display", "none");
    $( "#services" ).css("display", "none");
    $( "#contact" ).css("display", "none");
    $(".modal").css("display", "none");
    $(".greeting").css("display", "block");
    $(".mainButtons").css("display", "grid");
    $(".stick").css({display: "block", width: 8});
    draw();
});

/** Hides the main componets and shows the modal component */
showModal = function()
{
    $(".modal").css("display", "block");
    $(".greeting").css("display", "none");
    $(".mainButtons").css("display", "none");
    $(".stick").css("display", "none");   
}


/********************************************* 
 * Projects Events 
 * ********************************************/

let projectSelected;

projectsClick = function(project)
{
    // store project selected
    projectSelected = project.id
    
    // clear html
    $("#projectsPreview").empty();

    // load images
    for (var image in projectImages[project.id])
    {
        var html = `<button onclick="thumbnailClick(${image.slice(0,-4)})"> 
                        <div id="thumbnail${image.slice(0,-4)}" class="thumbnail">
                            <img src="${projectImages[project.id][image]}"></img>
                        </div> 
                    </button>`

        $("#projectsPreview").append(html); 
    }

    thumbnailClick(1)

    
}
thumbnailClick = function(image)
{
    // clear html
    $("#projectView").empty();

    image += ".jpg";

    // load img
    var html = `<img src='${projectImages[projectSelected][image]}'></img>`
    $("#projectView").append(html); 

    //focus thumbnail

    for (var img in projectImages[projectSelected])
    {
        if(img == image)
            $(`#thumbnail${image.slice(0,-4)}`).addClass("active")
        else
            $(`#thumbnail${img.slice(0,-4)}`).removeClass("active")
    }
    draw()
}


/********************************************* 
 * Services Events 
 * ********************************************/

serviceClick = function (serviceID)
{
    // show
    if($(`#${serviceID} p`).css('display') == "none")
    {
        hideServicesCards()
        $(`#${serviceID} p`).css({display:"block"})
    }
    // hide if clicked again
    else 
        hideServicesCards()
}

hideServicesCards = function()
{
    for (var service in servicesImages)
        $(`#${service} p`).css({display:"none"})
}