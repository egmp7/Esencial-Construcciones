class GUIComponent
{
    constructor(element,x,y,width,height)
    {
        this.element = element
        this.x =x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.createElement();  
    }

    createElement = function()
    {
        $(this.element).css({
            left:   this.x,
            top:    this.y,
            width:  this.width,
            height: this.height,
            position: "absolute"
        })
        
    }

    visible = function(bool)
    {
        if (bool)
            $(this.element).css({display: "block"})
            
        else
        {
            $(this.element).css({display: "none"})
        }
        
    }
}

export default GUIComponent