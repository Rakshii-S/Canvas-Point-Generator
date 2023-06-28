const CanvasElem = document.getElementById('canvas');
const ctx = CanvasElem.getContext('2d');
var XValues = []
var YValues = []
var lw = 3;
var SFcolor = "#f9e900";
var SFcolorP = [];
// code to accept line width
function lineWidth()
{
    lw =  Number(document.getElementById("linewidth").value);
    document.getElementById("linewidth").value = " ";
    console.log(lw);
}

//code to accept strokeStyle and fillStyle
function strokeFillColor()
{
    SFcolor = document.getElementById("SFColor").value;
    console.log(SFcolor);
}

/*code to draw points on canvas for marking*/
function DrawOnCanvas(canvas,event) 
{
    /*Code to x and y coordinates*/
    let CanvaRect = canvas.getBoundingClientRect();
    let x = event.offsetX;
    let y = event.offsetY;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.arc(x,y,2, 0, 2  * Math.PI);
    ctx.strokeStyle = SFcolor;
    ctx.fillStyle= SFcolor;
    ctx.fill();
    XValues.push(x);
    YValues.push(y);
    SFcolorP.push(SFcolor);
  }
CanvasElem.addEventListener("mousedown",function(e)
{
    DrawOnCanvas(CanvasElem,e)
});

/* Code to accept image file from intput file field and set it to image object and to display it on the canvas */
let ImageInput = document.getElementById("file");
let image = new Image();
function DisplayImage()
{
ImageInput.addEventListener('change',function(e)
{
    if(e.target.files)
    {
        let ImageFile = e.target.files[0]; //code to get the image file
        var reader = new FileReader(); // FileReader is used to read the image file
        reader.readAsDataURL(ImageFile); // Attribute readAsDataURL is used get the URL of image file
        reader.onloadend = function(e) //to covert DataURL to url(html and css readable)
        {
            image.src = e.target.result; // assigns converted image to image object
            image.onload = function(eve)
            {
                ctx.drawImage(image,0,0,700,565);
                console.log(image.src);
            }
        }
        e.target.value = null;
    }
});
}

// code to check if the image is drawn in the canvas or not
function ifImageDrawn()
{
    if(image.src != "")
    {
        ctx.drawImage(image,0,0,700,565);
    }
}

/*Code to undo a point */
function undoPoint()
{
    x = XValues[XValues.length-1]
    y = YValues[YValues.length-1]
    ctx.clearRect(x-3,y-3,5,5);
    //when the image is drawn on the screen
    if(image.src != "")
    {
        ctx.drawImage(image,0,0,700,565);
        for(i=0;i<XValues.length-1;i++)
        {
            x = XValues[i];
            y = YValues[i];
            sfc = SFcolorP[i];
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.arc(x,y, 2, 0, 2  * Math.PI);
            ctx.strokeStyle = sfc;
            ctx.fillStyle=sfc;
            ctx.fill();
        }
        // console.log(SFcolorP);
    }
    redraw();
    XValues.pop()
    YValues.pop()
    SFcolorP.pop();
}

//code to copy the text to clipboard
function copyCode()
{
    var copyCode = document.getElementById("code").value;
    navigator.clipboard.writeText(copyCode);
    document.getElementById("message1").value="Code is copied to the clipboard."
}

/*Code to clear the canvas and code section*/
function clearPoints()
{
    ctx.clearRect(0,0,CanvasElem.width,CanvasElem.height)
    Code = [ ];
    rdQueue=[ ];
    XValues = [ ];
    YValues = [ ];
    lw = 3;
    SFcolor = "#f9e900";
    SFcolorP = [ ];
    lineX = [ ];
    lineY = [ ];
    lwL=[ ];
    SFColorL = [ ];
    curve1X = [ ];
    curve1Y = [ ];
    lwc1=[ ];
    SFColorc1 = [ ];
    arcX = [ ];
    arcY = [ ];
    Cr = [ ];
    Ca = [ ];
    Ca2 = [ ];
    Cc = [ ];
    lwA=[ ];
    SFColorA = [ ];
    curve2X = [ ];
    curve2Y = [ ];
    lwc2=[ ];
    SFColorc2 = [ ];
    rectX = [ ];
    rectY = [ ];
    Rw = [ ];
    Rh = [ ];
    lwR=[ ];
    SFColorR = [ ];
    image.src = " ";
    document.getElementById("SFColor").value = "#f9e900";
    document.getElementById("code").innerHTML =" ";
    document.getElementById("message1").value =" ";
    document.getElementById("arcInp1").value =" ";
    document.getElementById("arcInp2").value =" ";
    document.getElementById("arcInp3").value =" ";
    document.getElementById("arcInp4").value =" ";
    document.getElementById("rectInp1").value =" ";
    document.getElementById("rectInp2").value =" ";
}
DisplayImage();