import GUIComponent from "./GUIComponent.js";

class MainGUI extends GUIComponent
{
    constructor (element,x,y,width,height)
    {
        super(element,x,y,width,height);

        this.greeting = new GUIComponent(
            ".greeting",
            x,
            0,
            width/2,
            height)

        this.mainButtons = new MainButtons(
            ".mainButtons",
            width/2,
            0,
            width/2,
            height)

        this.modal = new Modal(
            "modal",
            NaN,
            NaN,
            width,
            height
        )
        
        this.stick = new GUIComponent(
            ".stick",
            width/2 -4,
            10,
            8,
            height-20
        )
    }

    greeting

    showModal = function(id)
    {
        this.modal.visible(true)
        this.greeting.visible(false)
        this.mainButtons.visible(false)
        this.stick.visible(false)

        if (id == "about")
            $("#about").css({display:"block"})
        if (id == "projects")
            $("#projects").css({display:"block"})
        if (id == "services")
            $("#services").css({display:"block"})
        if (id == "contact")
            $("#contact").css({display:"block"})
        

    }
    hideModal = function()
    {
        this.modal.visible(false)
        this.greeting.visible(true)
        this.mainButtons.visible(true)
        this.stick.visible(true)

        $( "#about" ).css("display", "none");
        $( "#projects" ).css("display", "none");
        $( "#services" ).css("display", "none");
        $( "#contact" ).css("display", "none");

    }
}


export default MainGUI


class MainButtons extends GUIComponent
{
    constructor (element,x,y,width,height)
    {
        super(element,x,y,width,height);

        var buttonWidth = width /4 *3;
        var buttonHeight = 80;

        const aboutButton = new GUIComponent(
            "#aboutButton",
            width/2 - buttonWidth/2 ,
            height/5 - buttonHeight/2,
            buttonWidth,
            buttonHeight)

        const projectsButton = new GUIComponent(
            "#projectsButton",
            width/2 - buttonWidth/2 ,
            height/5 * 2 - buttonHeight/2,
            buttonWidth,
            buttonHeight)
        
        const servicesButton = new GUIComponent(
            "#servicesButton",
            width/2 - buttonWidth/2,
            height/5 * 3 - buttonHeight/2,
            buttonWidth,
            buttonHeight)

        const contactButton = new GUIComponent(
            "#contactButton",
            width/2 - buttonWidth/2,
            height/5 * 4 - buttonHeight/2,
            buttonWidth,
            buttonHeight)
    }
}

class Modal extends GUIComponent
{
    constructor (element,x,y,width,height)
    {
        super(element,x,y,width,height);
        // projects component
        var titleHeight = 50;
        var w = this.width / 4;
        var h = (this.height - titleHeight) / 4

        const title = new GUIComponent(
            "#projects .title",
            0,
            0,
            this.width,
            titleHeight
        )

        const projectList = new GUIComponent(
            "#projectsList",
            0,
            titleHeight,
            w,
            h * 4
        )

        const projectView = new GUIComponent(
            "#projectView",
            w,
            titleHeight,
            w * 3,
            h * 3
        )
        const projectsPreview = new GUIComponent(
            "#projectsPreview",
            w,
            h * 3 + titleHeight,
            w * 3,
            h
        )
    
    }
}