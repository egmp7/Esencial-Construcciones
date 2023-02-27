
/** This document draws tthe component of the app */

$(document).ready(function(){
    draw();
});

window.addEventListener("resize", function(){
    draw();
});

draw = function()
{
    if(window.matchMedia("(max-width: 920px)").matches) drawPhoneView();
    else drawComputerView();
}

/** Draws components in main container */
drawComputerView = function ()
{
    $(" body ").addClass(" container ");
    const MAIN_WINDOW_WIDTH = $( ".container" ).width();
    const MAIN_WINDOW_HEIGHT = $(window).height() - $("nav").outerHeight() - $("footer").outerHeight();
    $( "main" ).css({ width: MAIN_WINDOW_WIDTH, height: MAIN_WINDOW_HEIGHT })

    console.log(`drawComputerView :: w: ${MAIN_WINDOW_WIDTH}  h: ${MAIN_WINDOW_HEIGHT}`)

    


         const MODAL_TITLE_HEIGHT = 42;
         const MODAL_BODY_HEIGHT = MAIN_WINDOW_HEIGHT - MODAL_TITLE_HEIGHT;

            
       
            /***********************************************
             * PROJECTS
             ***********************************************/

            const PROJECTS_GRID_WIDTH = MAIN_WINDOW_WIDTH / 4;
            const PROJECTS_GRID_HEIGHT = (MODAL_BODY_HEIGHT) / 4;
        
            $("#projectsList").css({left:0,                               top:0, 
                                    width: PROJECTS_GRID_WIDTH,           height: PROJECTS_GRID_HEIGHT * 4,});
            $("#projectView").css({ left: PROJECTS_GRID_WIDTH,            top: 0,
                                    width: PROJECTS_GRID_WIDTH * 3,       height: PROJECTS_GRID_HEIGHT * 3});

            $("#projectsPreview").css({ left: PROJECTS_GRID_WIDTH,        top: PROJECTS_GRID_HEIGHT * 3, 
                                        width: PROJECTS_GRID_WIDTH * 3,   height: PROJECTS_GRID_HEIGHT});

            const THUMBNAIL_HEIGHT = PROJECTS_GRID_HEIGHT * 0.9
            $(".thumbnail img").css({height:THUMBNAIL_HEIGHT})
            

            /***********************************************
             * SERVICES
             ***********************************************/

            const PADDING_LEFT_GRID = 30;
            const RESPONSIVE_GRID_WIDTH_RATIO =300
            const GRID_WIDTH = (MAIN_WINDOW_WIDTH - PADDING_LEFT_GRID) / 
                Math.floor(MAIN_WINDOW_WIDTH / RESPONSIVE_GRID_WIDTH_RATIO)

            $(".grid").css({width: GRID_WIDTH,
                            paddingLeft: PADDING_LEFT_GRID})

            /***********************************************
             * CONTACT
             ***********************************************/

            $("#contact .map").css({width: "85%", paddingRight: 25})
            $("#contact form").css({    
                paddingTop: 20,     paddingBottom: 20,
                paddingLeft: 25,    width: "85%"})

                

}

drawPhoneView = function()
{
    $(" body ").removeClass(" container ")
    const MAIN_WINDOW_WIDTH = $( window ).width();
    const MAIN_WINDOW_HEIGHT = $( window ).height() - $(" nav ").outerHeight() - $(" footer ").outerHeight();
    $(" main ").css({ width: MAIN_WINDOW_WIDTH, height: MAIN_WINDOW_HEIGHT });

    console.log(`drawPhoneView :: w: ${MAIN_WINDOW_WIDTH} h: ${MAIN_WINDOW_HEIGHT}`)

     



        /***********************************************
         * SERVICES
         ***********************************************/

        const PADDING_LEFT_GRID = 30;
        const RESPONSIVE_GRID_WIDTH_RATIO =300
        const GRID_WIDTH = (MAIN_WINDOW_WIDTH - PADDING_LEFT_GRID) / 
            Math.floor(MAIN_WINDOW_WIDTH / RESPONSIVE_GRID_WIDTH_RATIO)

        $(".grid").css({width: GRID_WIDTH,
                        paddingLeft: PADDING_LEFT_GRID})

        /***********************************************
         * CONTACT
         ***********************************************/

        $("#contact .map").css({width: "100%", padding: 8})
        $("#contact form").css({width: "100%", padding: 8})

        

}