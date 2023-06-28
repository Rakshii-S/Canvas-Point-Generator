function lineLC()
{
    j=0;
    for(i=0;i<lineX.length;i=i+2)
    {
        x1 = lineX[i];
        y1 = lineY[i];
        x2 = lineX[i+1];
        y2 = lineY[i+1];
        ctx.lineWidth = lwL[j];
        ctx.strokeStyle= SFColorL[j];
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
        ctx.closePath();
        j++;
    }
}
function curve1LC()
{
    j=0;
    for(i=0;i<curve1X.length;i=i+3)
    {
        x1 = curve1X[i];
        y1 = curve1Y[i];
        x2 = curve1X[i+1];
        y2 = curve1Y[i+1];
        x3 = curve1X[i+2];
        y3 = curve1Y[i+2];
        ctx.lineWidth = lwc1[j];
        ctx.strokeStyle= SFColorc1[j];
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.quadraticCurveTo(x2,y2,x3,y3);
        ctx.stroke();
        ctx.closePath();
        j = j+1;
    }
}
function arcLC()
{
    j=0;
    for(i=0;i<arcX.length;i++)
    {
        x = arcX[i];
        y= arcY[i];
        radius = Cr[i];
        SAngle = Ca[i];
        EAngle = Ca2[i];
        counterclockwise = Cc[i];
        l = lwA[j];
        sfc = SFColorA[j];
        ctx.beginPath();
        ctx.lineWidth = l;
        ctx.arc(x,y,radius,SAngle,EAngle,counterclockwise);
        ctx.strokeStyle=sfc;
        ctx.stroke();
        ctx.closePath();
        j++;
    }
}
function curve2LC()
{
    j=0;
    for(i=0;i<curve2X.length;i=i+4)
    {
        x1 = curve2X[i];
        y1 = curve2Y[i];
        x2 = curve2X[i+1];
        y2 = curve2Y[i+1];
        x3 = curve2X[i+2];
        y3 = curve2Y[i+2];
        x4 = curve2X[i+3];
        y4 = curve2Y[i+3];
        l = lwc2[j];
        sfc = SFColorc2[j];
        ctx.beginPath();
        ctx.lineWidth = l;
        ctx.moveTo(x1,y1);
        ctx.bezierCurveTo(x2,y2,x3,y3,x4,y4);
        ctx.strokeStyle=sfc;
        ctx.stroke();
        ctx.closePath();
        j++;
    }
}
function rectLC()
{
    j=0;
    for(i=0;i<rectX.length;i++)
    {
        x = rectX[i];
        y= rectY[i];
        w = Rw[i];
        h = Rh[i];
        l = lwR[j];
        sfc = SFColorR[j];
        ctx.beginPath();
        ctx.lineWidth = l;
        ctx.rect(x,y,w,h);
        ctx.strokeStyle=sfc;
        ctx.stroke();
        ctx.closePath();
        j++;
    }
} 
function redraw()
{
    lineLC();
    curve1LC();
    arcLC();
    curve2LC();
    rectLC();
}


function undoDrawing()
{
    ctx.clearRect(0,0,CanvasElem.width,CanvasElem.height);
    if(rdQueue[rdQueue.length-1] == "line")
    {
        lineX.pop();
        lineY.pop();
        lineX.pop();
        lineY.pop();
        rdQueue.pop();
        Code.pop();
        lwL.pop();
        SFColorL.pop();
        document.getElementById("code").innerHTML = Code;
    }
    else if(rdQueue[rdQueue.length-1] == "curve1")
    {
        curve1X.pop();
        curve1Y.pop();
        curve1X.pop();
        curve1Y.pop();
        curve1X.pop();
        curve1Y.pop();
        rdQueue.pop();
        lwc1.pop();
        SFColorc1.pop();
        Code.pop();
        document.getElementById("code").innerHTML = Code;
    }
    else if(rdQueue[rdQueue.length-1] == "circle")
    {
        arcX.pop();
        arcY.pop();
        rdQueue.pop();
        Code.pop();
        Cr.pop();
        Ca.pop();
        Ca2.pop();
        Cc.pop();
        lwA.pop();
        SFColorA.pop();
        document.getElementById("code").innerHTML = Code;
    }
    else if(rdQueue[rdQueue.length-1] == "curve2")
    {
        curve2X.pop();
        curve2Y.pop();
        curve2X.pop();
        curve2Y.pop();
        curve2X.pop();
        curve2Y.pop();
        curve2X.pop();
        curve2Y.pop();
        rdQueue.pop();
        lwc2.pop();
        SFColorc2.pop();
        Code.pop();
        document.getElementById("code").innerHTML = Code;
    }
    else if(rdQueue[rdQueue.length-1] == "rectangle")
    {
        rectX.pop();
        rectY.pop();
        rdQueue.pop();
        Code.pop();
        Rw.pop();
        Rh.pop();
        lwR.pop();
        SFColorR.pop();
        document.getElementById("code").innerHTML = Code;
    }
    else
    {
        console.log("successfull")
    }

    if(image.src != "")
    {
        ctx.drawImage(image,0,0,700,565);
    }
    redraw();
    for(i=0;i<XValues.length;i++)
        {
            x = XValues[i];
            y = YValues[i];
            sfc = SFcolorP[i];
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.arc(x,y,2, 0, 2  * Math.PI);
            ctx.strokeStyle = sfc;
            ctx.fillStyle=sfc;
            ctx.fill();
        }
}
