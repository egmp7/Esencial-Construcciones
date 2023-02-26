
/** This document draws tthe component of the app */

$(document).ready(function(){
    draw();
});

window.addEventListener("resize", function(){
    draw();
});

draw = function()
{
    if($(".container").width() > $(window).height())
    {
        drawComputerView();
    }
    else
    {
        drawPhoneView();
    }    
}

/** Draws components in main container */
drawComputerView = function ()
{
    /***********************************************
    * NAV
    ***********************************************/
    $(".social-media").css({display: "block"});
    $("nav .language").css({textAlign: "center"});

    const MAIN_WINDOW_WIDTH = $(".container").width();
    const MAIN_WINDOW_HEIGHT = $(window).height() - $("nav").outerHeight() - $("footer").outerHeight();

    $("main").height(MAIN_WINDOW_HEIGHT);

        const BLOCK_WIDTH = MAIN_WINDOW_WIDTH/2;

        $(".block1").css({width: BLOCK_WIDTH, height: MAIN_WINDOW_HEIGHT, display: "flex"})
        $(".block2").css({ width: BLOCK_WIDTH, height: MAIN_WINDOW_HEIGHT})

            const MAIN_BUTTONS_HEIGHT = MAIN_WINDOW_HEIGHT*0.7
            $(".mainButtons").css({height: MAIN_BUTTONS_HEIGHT, marginRight:0});
            $(".mainButtons button").css({width: "75%"});
        
        const STICK_HEIGHT = MAIN_WINDOW_HEIGHT * 0.7;
        $(".stick").css({height: STICK_HEIGHT, display:"block"});

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
             * ABOUT
             ***********************************************/

            $("#about .carousel").css({paddingRight: 30, width: "80%"})
            $("#about .text").css({paddingLeft: 30, width: "80%"})
       
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
    $(".social-media").css({display: "none"});
    $("nav .language").css({textAlign: "end"});

    const MAIN_WINDOW_WIDTH = $(".container").width();
    const MAIN_WINDOW_HEIGHT = $(window).height() - $("nav").outerHeight() - $("footer").outerHeight();

    $("main").height(MAIN_WINDOW_HEIGHT);

        $(".block1").css({display: "none"})
        $(".block2").css({ width: MAIN_WINDOW_WIDTH, height: MAIN_WINDOW_HEIGHT})

            const MAIN_BUTTONS_HEIGHT = MAIN_WINDOW_HEIGHT*0.7
            $(".mainButtons").css({height: MAIN_BUTTONS_HEIGHT, marginRight: "5%"});
            $(".mainButtons button").css({width: "100%"});
        
        $(".stick").css({display:"none"});

        const MODAL_TITLE_HEIGHT = 42;
        const MODAL_BODY_HEIGHT = MAIN_WINDOW_HEIGHT - MODAL_TITLE_HEIGHT;

        $(".modal").css({
            width: MAIN_WINDOW_WIDTH,
            height:MAIN_WINDOW_HEIGHT
        })

        $(".modal .title").height(MODAL_TITLE_HEIGHT)

        $(".modal .block1").css({
            left: "",                   top:"",
            width: MAIN_WINDOW_WIDTH,   height: "",
            position: "relative",       display:"block"
        })

        $(".modal .block2").css({
            left: "",                   top:"",
            width: MAIN_WINDOW_WIDTH,   height: "",
            position: "relative"
        })

        /***********************************************
        * ABOUT
        ***********************************************/

        $("#about .carousel").css({padding: 5, width: "100%"})
        $("#about .text").css({padding: 5, width: "100%"})

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