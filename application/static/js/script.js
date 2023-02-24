import GUIComponent from "./GUIComponent.js";
import MainGUI from "./MainGUI.js";


/**Init */
$(document).ready(function(){

    

});

var height = $(window).height()/24;
var width = $(".container").width();       

const navbar = new GUIComponent(
    "nav",
    0,
    0,
    width,
    height * 2.5);
const main = new MainGUI(
    "main",
    0,
    height * 2.5,
    width,
    height * 20);
const footer = new GUIComponent(
    "footer",
    0,
    height * 22.5,
    width,
    height * 1.5);


window.addEventListener("resize", function(){


});


// events
$( "#aboutButton" ).click(() => {main.showModal("about")});
$( "#projectsButton" ).click(() => {main.showModal("projects")});
$( "#servicesButton" ).click(()=> {main.showModal("services")});
$( "#contactButton" ).click(() => {main.showModal("contact")});
$( "#closeModal" ).click(function() {main.hideModal()});


$("#p1Button").click(() =>
{
    // empty html

    $("#projectsPreview").empty();

    // add images
    for (var image in images.projects["p1"])
    {
        var imgTag = "<img src='" + images.projects["p1"][image] +"'></img>"
        var html = '<div class="thumbnail">' +imgTag+ '</div>'
        $("#projectsPreview").append(html); 
    }
    var thumbnailHeight = $("#projectsPreview").height() * 0.9
    var thumbnailBorderWidth = ( $("#projectsPreview").height()- thumbnailHeight) /2

    $(".thumbnail img").css({height:thumbnailHeight})

    $(".thumbnail").css({borderWidth: thumbnailBorderWidth })
})

$( "#m" ).on( "click", function() {
    console.log( $( this ).text() );
});

for(var project in images.projects)
{
    var key = `#${project}Button`;


}




