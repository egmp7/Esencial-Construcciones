
/**Projects View algorithm*/

let projectSelected;

selectProject = function(project)
{
    // store project selected
    projectSelected = project.id
    
    // clear html
    $("#projectsPreview").empty();

    // load images
    for (var image in projectImages[project.id])
    {
        console.log(project.id)
        var html = `<button onclick="selectImage(${image.slice(0,-4)})"> 
                        <div id="thumbnail${image.slice(0,-4)}" class="thumbnail">
                            <img src="${projectImages[project.id][image]}"></img>
                        </div> 
                    </button>`

        $("#projectsPreview").append(html); 
    }

    selectImage(1)

    fixCSS()
    
}
selectImage = function(image)
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
    

    fixCSS()
}

fixCSS = function()
{
    var thumbnailHeight = $("#projectsPreview").height() * 0.9
    //var thumbnailBorderWidth = ( $("#projectsPreview").height()- thumbnailHeight) /2
    $(".thumbnail img").css({height:thumbnailHeight})
    //$(".thumbnail").css({borderWidth: thumbnailBorderWidth })
    $("#projectView img").height($("#projectView").height())
    // $("#projectsPreview").css({
    //     borderLeft: "solid",
    //     borderLeftWidth: thumbnailBorderWidth,
    //     borderLeftColor: "orange"
    // })
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