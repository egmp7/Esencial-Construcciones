
/** This document draws tthe component of the app */

$(document).ready(function(){
    drawMainLayout();
});

window.addEventListener("resize", function(){
    drawMainLayout();
});

/** Draws components in main container */
drawMainLayout = function ()
{
    const MAIN_WINDOW_WIDTH = getMainWidth();
    const MAIN_WINDOW_HEIGHT = getMainHeight();

    $("main").height(MAIN_WINDOW_HEIGHT);

        const BLOCK_WIDTH = MAIN_WINDOW_WIDTH/2;

        $(".block1").css({
            width: BLOCK_WIDTH, 
            height: MAIN_WINDOW_HEIGHT})

        $(".block2").css({
            width: BLOCK_WIDTH,
            height: MAIN_WINDOW_HEIGHT
        })

            const MAIN_BUTTONS_HEIGHT = MAIN_WINDOW_HEIGHT*0.7
            $(".mainButtons").height(MAIN_BUTTONS_HEIGHT);

            // const MAIN_BUTTON_WIDTH =  MAIN_WINDOW_WIDTH / 2 * 0.6;
            // const MAIN_BUTTON_HEIGHT = 80;
            // const MAIN_BUTTON_LEFT = (MAIN_WINDOW_WIDTH / 4 ) - MAIN_BUTTON_WIDTH /2 ;
            // const MAIN_BUTTON_TOP = MAIN_WINDOW_HEIGHT / 5;

            // $("#aboutButton").css({
            //     left: MAIN_BUTTON_LEFT,     top: MAIN_BUTTON_TOP * 1 - MAIN_BUTTON_HEIGHT / 2,
            //     width: MAIN_BUTTON_WIDTH,   height: MAIN_BUTTON_HEIGHT,
            //     position: "absolute"}) 
            // $("#projectsButton").css({
            //     left: MAIN_BUTTON_LEFT,     top: MAIN_BUTTON_TOP * 2 - MAIN_BUTTON_HEIGHT / 2,
            //     width: MAIN_BUTTON_WIDTH,   height: MAIN_BUTTON_HEIGHT,
            //     position: "absolute"})
            // $("#servicesButton").css({
            //     left: MAIN_BUTTON_LEFT,     top:  MAIN_BUTTON_TOP * 3 - MAIN_BUTTON_HEIGHT / 2,
            //     width: MAIN_BUTTON_WIDTH,   height: MAIN_BUTTON_HEIGHT,
            //     position: "absolute"})
            // $("#contactButton").css({
            //     left: MAIN_BUTTON_LEFT,     top: MAIN_BUTTON_TOP * 4 - MAIN_BUTTON_HEIGHT / 2,
            //     width: MAIN_BUTTON_WIDTH,   height: MAIN_BUTTON_HEIGHT,
            //     position: "absolute"})
        
        
        const STICK_HEIGHT = MAIN_WINDOW_HEIGHT * 0.7;
        $(".stick").height(STICK_HEIGHT);

        /***********************************************
         * MODAL
         ***********************************************/
        const MODAL_TITLE_HEIGHT = 42;
        const MODAL_BODY_HEIGHT = MAIN_WINDOW_HEIGHT - MODAL_TITLE_HEIGHT;

        $(".modal").css({
            width: MAIN_WINDOW_WIDTH,
            height:MAIN_WINDOW_HEIGHT
        })

        $(".modal .title").height(MODAL_TITLE_HEIGHT)

        $(".modal .block1").css({
            left: 0,            top:MODAL_TITLE_HEIGHT,
            width: BLOCK_WIDTH, height: MODAL_BODY_HEIGHT,
            position: "absolute"
        })

        $(".modal .block2").css({
            left: BLOCK_WIDTH,  top:MODAL_TITLE_HEIGHT,
            width: BLOCK_WIDTH, height: MODAL_BODY_HEIGHT,
            position: "absolute"
        })
       
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

            


            

}

/** gets the width of the main component */
getMainWidth = function ()
{
    return $(".container").width();
}
/** gets the height of the main component */
getMainHeight = function ()
{   
    return $(window).height() - $("nav").outerHeight() - $("footer").outerHeight();
}