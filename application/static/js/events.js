/********************************************* 
 * Main Buttons Events 
 * ********************************************/
$( "#aboutButton" ).click(() => 
{
    $( "#about" ).show();
    slideHome();
    draw();
});
$( "#projectsButton" ).click(() => 
{
    $( "#projects" ).show();
    slideHome();
    draw();
});
$( "#servicesButton" ).click(function() {
    
    $( "#services" ).show();
    slideHome();
    draw();
});
$( "#contactButton" ).click(function() {
    
    $( "#contact" ).show();
    slideHome();
    draw();

});
$( "#closeModal" ).click(function() {

    slideModal();
    draw();
});

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
        $(`#${serviceID} p`).slideDown("fast")
    }
    // hide if clicked again
    else 
        hideServicesCards()
}

hideServicesCards = function()
{
    for (var service in servicesImages)
        $(`#${service} p`).slideUp("fast")
}