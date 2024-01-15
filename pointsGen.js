var Code = [];
Control = false;

/*redraw function*/
/*line code x and y */
var lineX = [];
var lineY = [];
var lwL = [];
var SFColorL = [];
/*curve1 code x and y */
var curve1X = [];
var curve1Y = [];
var lwc1 = [];
var SFColorc1 = [];
/*arc code x, y, radius and start angle*/
var arcX = [];
var arcY = [];
var Cr = [];
var Ca = [];
var Ca2 = [];
var Cc = [];
var lwA = [];
var SFColorA = [];
/*curve2 code x and y*/
var curve2X = [];
var curve2Y = [];
var lwc2 = [];
var SFColorc2 = [];
/*rect code x, y, width and height*/
var rectX = [];
var rectY = [];
var Rw = [];
var Rh = [];
var lwR = [];
var SFColorR = [];

/*keeps the order of the function called from start to end */
var rdQueue = [];

/*lineTo code*/
function drawLine()
{
    c = XValues[XValues.length-3]
    x1 = XValues[XValues.length-2]
    y1 = YValues[YValues.length-2]
    x2 = XValues[XValues.length-1]
    y2 = YValues[YValues.length-1]
    if(x1!=undefined && x2!=undefined && c == undefined)
    {
        Code.push("ctx.beginPath();\nctx.lineWidth="+lw+";\nctx.strokeStyle="+SFcolor+";\nctx.moveTo("+x1+","+y1+");\nctx.lineTo("+x2+","+y2+");\nctx.stroke();\nctx.closePath();\n");
        ctx.clearRect(x1-3,y1-3,5,5);
        ctx.clearRect(x2-3,y2-3,5,5);
        ifImageDrawn();
        ctx.beginPath();
        ctx.lineWidth = lw;
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.strokeStyle = SFcolor;
        ctx.stroke();
        ctx.closePath();
        lineX.push(x1,x2);
        lineY.push(y1,y2);
        for(i=0;i<=1;i++)
        {
            XValues.pop();
            YValues.pop();
            SFcolorP.pop();
        }
        lwL.push(lw);
        SFColorL.push(SFcolor);
        redraw();
        document.getElementById("code").innerHTML = Code.join(" ");
        rdQueue.push("line");
        document.getElementById("message1").value="By default line width is 3."
    }
    else
    {
        document.getElementById("message1").value="Invalid Input."
    }
}

/*quadraticCurveTo code*/
function drawCurve1()
{
    c = XValues[XValues.length-4]
    x1 = XValues[XValues.length-3]
    y1 = YValues[YValues.length-3]
    x2 = XValues[XValues.length-2]
    y2 = YValues[YValues.length-2]
    x3 = XValues[XValues.length-1]
    y3 = YValues[YValues.length-1]
    if(x1!=undefined && x2!=undefined && x3 != undefined &&c == undefined)
    {
        Code.push("ctx.beginPath();\nctx.lineWidth="+lw+";\nctx.strokeStyle="+SFcolor+";\nctx.moveTo("+x1+","+y1+");\nctx.quadraticCurveTo("+x2+","+y2+","+x3+","+y3+");\nctx.stroke();\nctx.closePath();\n");
        ctx.clearRect(x1-3,y1-3,5,5);
        ctx.clearRect(x2-3,y2-3,5,5);
        ctx.clearRect(x3-3,y3-3,5,5);
        ifImageDrawn();
        ctx.beginPath();
        ctx.lineWidth = lw;
        ctx.strokeStyle = SFcolor;
        ctx.moveTo(x1,y1);
        ctx.quadraticCurveTo(x2,y2,x3,y3);
        ctx.stroke();
        ctx.closePath();
        curve1X.push(x1,x2,x3);
        curve1Y.push(y1,y2,y3);
        for(i=0;i<=2;i++)
        {
            XValues.pop();
            YValues.pop();
            SFcolorP.pop();
        }
        lwc1.push(lw);
        SFColorc1.push(SFcolor);
        redraw();
        document.getElementById("code").innerHTML = Code.join(" ");
        rdQueue.push("curve1")
        document.getElementById("message1").value="By default line width is 3."
    }
    else
    {
        document.getElementById("message1").value="Invalid Input."
    }
}

/*arc code*/
function drawCircle()
{
    document.getElementById("message1").value="Circle ==> Start angle: 0,\tEnd angle: 6.2832.\nHalf circle ==> Start angle: 0,\tEnd angle: 3.1416.\nCounterClockwise ==> true/false\tor\t1/0."
    c = XValues[XValues.length-2]
    x = XValues[XValues.length-1]
    y = YValues[YValues.length-1]
    if(x!=undefined && c == undefined)
    {

        if(Control == false)
        {
            document.getElementById("arc").innerHTML="Enter radius:<br><br>Enter start angle:<br><br>Enter end angle:<br><br>Counterclockwise:";
            document.getElementById("arc").style.textAlign="left";
        }
        radius = Number(document.getElementById("arcInp1").value);
        SAngle = Number(document.getElementById("arcInp2").value);
        EAngle = Number(document.getElementById("arcInp3").value);
        counterclockwise = document.getElementById("arcInp4").value;
        if(Control == true)
        {
            document.getElementById("arc").innerHTML="Arc(Circle, Half-circle etc)<br>(1-point)";
            document.getElementById("arc").style.textAlign="center";
            emptyVal = ["arcInp1","arcInp2","arcInp3","arcInp4"]
            // for(i=0;i<=emptyVal.length;i++)
            // {
            //     document.getElementById(emptyVal[i]).value= "";
            // }
            Code.push("ctx.beginPath();\nctx.lineWidth="+lw+";\nctx.strokeStyle="+SFcolor+";\nctx.arc("+x+","+y+","+radius+","+SAngle+","+EAngle+","+counterclockwise+");\nctx.stroke();\nctx.closePath();\n");
            ctx.clearRect(x-3,y-3,5,5);
            ifImageDrawn();
            ctx.beginPath();
            ctx.lineWidth = lw;
            ctx.strokeStyle = SFcolor;
            ctx.arc(x,y,radius,SAngle,EAngle,counterclockwise);
            ctx.stroke();
            ctx.closePath();
            arcX.push(x);
            arcY.push(y);
            Cr.push(radius);
            Ca.push(SAngle);
            Ca2.push(EAngle);
            Cc.push(counterclockwise);
            XValues.pop();
            YValues.pop();
            SFcolorP.pop();
            lwA.push(lw);
            SFColorA.push(SFcolor);
            redraw();
            document.getElementById("code").innerHTML = Code.join(" ");
            Control=false
            rdQueue.push("circle");
            document.getElementById("message1").value="By default line width is 3."
        }
    }
    else
    {
        document.getElementById("message1").value="Invalid Input!!"
    }
}

/*bezierCurveTo code*/
function drawCurve2()
{
    c = XValues[XValues.length-5]
    x1 = XValues[XValues.length-4]
    y1 = YValues[YValues.length-4]
    x2 = XValues[XValues.length-3]
    y2 = YValues[YValues.length-3]
    x3 = XValues[XValues.length-2]
    y3 = YValues[YValues.length-2]
    x4 = XValues[XValues.length-1]
    y4 = YValues[YValues.length-1]
    if(x1!=undefined && x2!=undefined && x3 != undefined &&x4 != undefined && c == undefined)
    {
        Code.push("ctx.beginPath();\nctx.lineWidth="+lw+";\nctx.strokeStyle="+SFcolor+";\nctx.moveTo("+x1+","+y1+");\nctx.bezierCurveTo("+x2+","+y2+","+x3+","+y3+","+x4+","+y4+");\nctx.stroke();\nctx.closePath();\n");
        ctx.clearRect(x1-3,y1-3,5,5);
        ctx.clearRect(x2-3,y2-3,5,5);
        ctx.clearRect(x3-3,y3-3,5,5);
        ctx.clearRect(x4-3,y4-3,5,5);
        ifImageDrawn();
        ctx.beginPath();
        ctx.lineWidth = lw;
        ctx.strokeStyle = SFcolor;
        ctx.moveTo(x1,y1);
        ctx.bezierCurveTo(x2,y2,x3,y3,x4,y4);
        ctx.stroke();
        ctx.closePath();
        curve2X.push(x1,x2,x3,x4);
        curve2Y.push(y1,y2,y3,y4);
        for(i=0;i<=3;i++)
        {
            XValues.pop();
            YValues.pop();
            SFcolorP.pop();
        }
        lwc2.push(lw);
        SFColorc2.push(SFcolor);
        redraw();
        document.getElementById("code").innerHTML = Code.join(" ");
        rdQueue.push("curve2");
        document.getElementById("message1").value="By default line width is 3."
    }
    else
    {
        document.getElementById("message1").value="Invalid Input."
    }
}

/*rect code*/
function drawRectangle()
{
    c = XValues[XValues.length-2]
    x = XValues[XValues.length-1]
    y = YValues[YValues.length-1]
    if(x!=undefined && c == undefined)
    {
        document.getElementById("message1").value="rect() method."
        if(Control == false)
        {
            document.getElementById("rect").innerHTML="Enter width:<br><br>Enter height:";
        }
        w = Number(document.getElementById("rectInp1").value);
        h = Number(document.getElementById("rectInp2").value);
        if(Control == true)
        {
            document.getElementById("rect").innerHTML="Rectangle<br>(1-point)";
            document.getElementById("rectInp1").value = " " ;
            document.getElementById("rectInp2").value = " " ;
            Code.push("ctx.beginPath();\nctx.lineWidth="+lw+";\nctx.strokeStyle="+SFcolor+";\nctx.rect("+x+","+y+","+w+","+h+");\nctx.stroke();\nctx.closePath();\n");
            ctx.clearRect(x-3,y-3,5,5);
            ifImageDrawn();
            ctx.beginPath();
            ctx.lineWidth = lw;
            ctx.strokeStyle = SFcolor;
            ctx.rect(x,y,w,h);
            ctx.stroke();
            ctx.closePath();
            rectX.push(x);
            rectY.push(y);
            Rw.push(w);
            Rh.push(h);
            XValues.pop();
            YValues.pop();
            SFcolorP.pop();
            lwR.push(lw);
            SFColorR.push(SFcolor);
            redraw();
            document.getElementById("code").innerHTML = Code.join(" ");
            Control=false
            rdQueue.push("rectangle")
            document.getElementById("message1").value="By default line width is 3."
        }
    }
    else
    {
        document.getElementById("message1").value="Invalid Input!!"
    }
}

/*code to clear input and textbox*/
function erase1()
{
    c = XValues[XValues.length-2]
    x = XValues[XValues.length-1]
    radius = document.getElementById("arcInp1").value;
    SAngle = document.getElementById("arcInp2").value;
    EAngle = document.getElementById("arcInp3").value;
    counterclockwise = document.getElementById("arcInp4").value;
    if(radius == "" || SAngle == "" || EAngle == "" || counterclockwise == "" )
    {
        document.getElementById("message1").value="Fill all the input boxes for further processing."
        document.getElementById("arc").innerHTML="Arc(Circle, Half-circle etc)<br>(1-point)";
        document.getElementById("arc").style.textAlign="center";
    }
    else if(x!=undefined && c == undefined)
    {
        document.getElementById("arc").innerHTML="Click on the method again.";
        Control = true
    }
    else
    {
        document.getElementById("message1").value="Point is being deleted."
        document.getElementById("arc").innerHTML="Arc(Circle, Half-circle etc)<br>(1-point)";
        document.getElementById("arc").style.textAlign="center";
    }
}

function erase2()
{
    w = document.getElementById("rectInp1").value;
    h = document.getElementById("rectInp2").value;
    c = XValues[XValues.length-2]
    x = XValues[XValues.length-1]
    if(w == "" || h == "")
    {
        document.getElementById("message1").value="Fill all the input boxes for further processing."
        document.getElementById("rect").innerHTML="Rectangle<br>(1-point)";
        document.getElementById("rect").style.textAlign="center";
    }
    else if(x!= undefined && c== undefined)
    {
        document.getElementById("rect").innerHTML="Click on the method again.";
        Control = true;
    }
    else
    {
        document.getElementById("message1").value="Point is being deleted."
        document.getElementById("rect").innerHTML="Rectangle<br>(1-point)";
        document.getElementById("rect").style.textAlign="center";
    }
}