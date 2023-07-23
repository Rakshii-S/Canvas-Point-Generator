function lightmode()
{
    document.body.style.backgroundColor = "white";
    document.getElementById("mode1").style.backgroundColor = "#d0c200";
    document.getElementById("mode2").style.backgroundColor = "#f9e900";
    document.getElementById("part1").style.backgroundColor = "#8c92ac";
    document.getElementById("slides").style.backgroundColor = "#8c92ac";
    document.getElementById("part1").style.color = "black";
    document.getElementById("slides").style.color = "black";
    var link = document.getElementsByClassName("link");
    for(i=0;i<link.length;i++)
    {
        link[i].style.color = "white";
        link[i].style.textDecoration = "underline";
    }
    document.getElementById("imageText").src="images/imgl1.png";
    document.getElementById("v1").src="videos/line.mp4";
    document.getElementById("v2").src="videos/curve1.mp4"
    document.getElementById("v3").src="videos/curve2.mp4"
    document.getElementById("v4").src="videos/arc.mp4"
    document.getElementById("v5").src="videos/rect.mp4"
}

function darkmode()
{
    document.body.style.backgroundColor = "#121212";
    document.getElementById("mode1").style.backgroundColor = "#f9e900";
    document.getElementById("mode2").style.backgroundColor = "#d0c200";
    document.getElementById("part1").style.backgroundColor = "#333b5f";
    document.getElementById("slides").style.backgroundColor = "#333b5f";
    document.getElementById("slides").style.color = "white";
    document.getElementById("part1").style.color = "white";
    var link = document.getElementsByClassName("link");
    for(i=0;i<link.length;i++)
    {
        link[i].style.color = "white";
        link[i].style.textDecoration = "underline";
    }
    document.getElementById("imageText").src="images/img2.png";
    document.getElementById("v1").src="videos/line1.mp4";
    document.getElementById("v2").src="videos/curve11.mp4"
    document.getElementById("v3").src="videos/curve21.mp4"
    document.getElementById("v4").src="videos/arc2.mp4"
    document.getElementById("v5").src="videos/rect2.mp4"
}

var lb1 = document.getElementById("lb1");
var lb2 = document.getElementById("lb2");
var lb3 = document.getElementById("lb3");
var lb4 = document.getElementById("lb4");
var lb5 = document.getElementById("lb5");

var rb1 = document.getElementById("rb1");
var rb2 = document.getElementById("rb2");
var rb3 = document.getElementById("rb3");
var rb4 = document.getElementById("rb4");

var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
var slide4 = document.getElementById("slide4");
var slide5 = document.getElementById("slide5");
function leftb1()
{
    h = [lb1,lb2,lb3,lb4,lb5,rb2,rb3,rb4,slide2,slide3,slide4,slide5]
    v = [rb1,slide1]
    for (i=0;i<h.length;i++)
    {
        h[i].style.visibility = "hidden";
    }
    for(i=0;i<v.length;i++)
    {
        v[i].style.visibility = "visible";
    }
}
function rightb1()
{
    h = [lb1,lb3,lb4,lb5,rb1,rb3,rb4,slide1,slide3,slide4,slide5]
    v = [lb2,rb2,slide2]
    for (i=0;i<h.length;i++)
    {
        h[i].style.visibility = "hidden";
    }
    for(i=0;i<v.length;i++)
    {
        v[i].style.visibility = "visible";
    }
}
function leftb2()
{
    h = [lb1,lb2,lb3,lb4,lb5,rb2,rb3,rb4,slide2,slide3,slide4,slide5]
    v = [rb1,slide1]
    for (i=0;i<h.length;i++)
    {
        h[i].style.visibility = "hidden";
    }
    for(i=0;i<v.length;i++)
    {
        v[i].style.visibility = "visible";
    }
}
function rightb2()
{
    h = [lb1,lb2,lb4,lb5,rb1,rb2,rb4,slide1,slide2,slide4,slide5]
    v = [lb3,rb3,slide3]
    for (i=0;i<h.length;i++)
    {
        h[i].style.visibility = "hidden";
    }
    for(i=0;i<v.length;i++)
    {
        v[i].style.visibility = "visible";
    }
}
function leftb3()
{
    h = [lb1,lb3,lb4,lb5,rb2,rb1,rb4,slide1,slide3,slide4,slide5]
    v = [lb2,rb3,slide2]
    for (i=0;i<h.length;i++)
    {
        h[i].style.visibility = "hidden";
    }
    for(i=0;i<v.length;i++)
    {
        v[i].style.visibility = "visible";
    }
}
function rightb3()
{
    h = [lb1,lb2,lb3,lb5,rb2,rb3,rb1,slide2,slide3,slide1,slide5]
    v = [lb4,rb4,slide4]
    for (i=0;i<h.length;i++)
    {
        h[i].style.visibility = "hidden";
    }
    for(i=0;i<v.length;i++)
    {
        v[i].style.visibility = "visible";
    }
}
function leftb4()
{
    h = [lb1,lb2,lb4,lb5,rb2,rb1,rb4,slide2,slide1,slide4,slide5]
    v = [lb3,rb3,slide3]
    for (i=0;i<h.length;i++)
    {
        h[i].style.visibility = "hidden";
    }
    for(i=0;i<v.length;i++)
    {
        v[i].style.visibility = "visible";
    }
}
function rightb4()
{
    h = [lb1,lb2,lb3,lb4,rb1,rb2,rb3,rb4,slide2,slide3,slide4,slide1]
    v = [lb5,slide5]
    for (i=0;i<h.length;i++)
    {
        h[i].style.visibility = "hidden";
    }
    for(i=0;i<v.length;i++)
    {
        v[i].style.visibility = "visible";
    }
}
function leftb5()
{
    h = [lb1,lb2,lb3,lb5,rb1,rb2,rb3,slide1,slide2,slide3,slide5]
    v = [lb4,rb4,slide4]
    for (i=0;i<h.length;i++)
    {
        h[i].style.visibility = "hidden";
    }
    for(i=0;i<v.length;i++)
    {
        v[i].style.visibility = "visible";
    }
}
video = document.getElementsByClassName("video");
for(i=0;i<video.length;i++)
{
    video[i].playbackRate = 2.0;
}