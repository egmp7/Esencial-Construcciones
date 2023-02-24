import GUIComponent from "./GUIComponent.js";
import MainGUI from "./MainGUI.js";


/**Init */
$(document).ready(function(){

});

window.addEventListener("resize", function(){

    var height = $(window).height()/24;
    var width = $(".container").width();  

    navbar.resize(
        0,
        0,
        width,
        height * 2.5)

    main.resize(
        0,
        height * 2.5,
        width,
        height * 20)

    footer.resize(
        0,
        height * 22.5,
        width,
        height * 1.5
    )
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

// events
$( "#aboutButton" ).click(() => {main.showModal("about")});
$( "#projectsButton" ).click(() => {main.showModal("projects")});
$( "#servicesButton" ).click(()=> {main.showModal("services")});
$( "#contactButton" ).click(() => {main.showModal("contact")});
$( "#closeModal" ).click(function() {main.hideModal()});





