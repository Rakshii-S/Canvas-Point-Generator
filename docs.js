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
    document.getElementById("imageText").src="images/img2.png";
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
    lb1.style.visibility = "hidden";
    lb2.style.visibility = "hidden";
    lb3.style.visibility = "hidden";
    lb4.style.visibility = "hidden";
    lb5.style.visibility = "hidden";
    rb1.style.visibility = "visible";
    rb2.style.visibility = "hidden";
    rb3.style.visibility = "hidden";
    rb4.style.visibility = "hidden";
    slide1.style.visibility = "visible";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "hidden";
    slide5.style.visibility = "hidden";
}
function rightb1()
{
    lb1.style.visibility = "hidden";
    lb2.style.visibility = "visible";
    lb3.style.visibility = "hidden";
    lb4.style.visibility = "hidden";
    lb5.style.visibility = "hidden";
    rb1.style.visibility = "hidden";
    rb2.style.visibility = "visible";
    rb3.style.visibility = "hidden";
    rb4.style.visibility = "hidden";
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "visible";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "hidden";
    slide5.style.visibility = "hidden";
}
function leftb2()
{
    lb1.style.visibility = "hidden";
    lb2.style.visibility = "hidden";
    lb3.style.visibility = "hidden";
    lb4.style.visibility = "hidden";
    lb5.style.visibility = "hidden";
    rb1.style.visibility = "visible";
    rb2.style.visibility = "hidden";
    rb3.style.visibility = "hidden";
    rb4.style.visibility = "hidden";
    slide1.style.visibility = "visible";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "hidden";
    slide5.style.visibility = "hidden";
}
function rightb2()
{
    lb1.style.visibility = "hidden";
    lb2.style.visibility = "hidden";
    lb3.style.visibility = "visible";
    lb4.style.visibility = "hidden";
    lb5.style.visibility = "hidden";
    rb1.style.visibility = "hidden";
    rb2.style.visibility = "hidden";
    rb3.style.visibility = "visible";
    rb4.style.visibility = "hidden";
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "visible";
    slide4.style.visibility = "hidden";
    slide5.style.visibility = "hidden";
}
function leftb3()
{
    lb1.style.visibility = "hidden";
    lb2.style.visibility = "visible";
    lb3.style.visibility = "hidden";
    lb4.style.visibility = "hidden";
    lb5.style.visibility = "hidden";
    rb1.style.visibility = "hidden";
    rb2.style.visibility = "visible";
    rb3.style.visibility = "hidden";
    rb4.style.visibility = "hidden";
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "visible";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "hidden";
    slide5.style.visibility = "hidden";
}
function rightb3()
{
    lb1.style.visibility = "hidden";
    lb2.style.visibility = "hidden";
    lb3.style.visibility = "hidden";
    lb4.style.visibility = "visible";
    lb5.style.visibility = "hidden";
    rb1.style.visibility = "hidden";
    rb2.style.visibility = "hidden";
    rb3.style.visibility = "hidden";
    rb4.style.visibility = "visible";
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "visible";
    slide5.style.visibility = "hidden";
}
function leftb4()
{
    lb1.style.visibility = "hidden";
    lb2.style.visibility = "hidden";
    lb3.style.visibility = "visible";
    lb4.style.visibility = "hidden";
    lb5.style.visibility = "hidden";
    rb1.style.visibility = "hidden";
    rb2.style.visibility = "hidden";
    rb3.style.visibility = "visible";
    rb4.style.visibility = "hidden";
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "visible";
    slide4.style.visibility = "hidden";
    slide5.style.visibility = "hidden";
}
function rightb4()
{
    lb1.style.visibility = "hidden";
    lb2.style.visibility = "hidden";
    lb3.style.visibility = "hidden";
    lb4.style.visibility = "hidden";
    lb5.style.visibility = "visible";
    rb1.style.visibility = "hidden";
    rb2.style.visibility = "hidden";
    rb3.style.visibility = "hidden";
    rb4.style.visibility = "hidden";
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "hidden";
    slide5.style.visibility = "visible";
}
function leftb5()
{
    lb1.style.visibility = "hidden";
    lb2.style.visibility = "hidden";
    lb3.style.visibility = "hidden";
    lb4.style.visibility = "visible";
    lb5.style.visibility = "hidden";
    rb1.style.visibility = "hidden";
    rb2.style.visibility = "hidden";
    rb3.style.visibility = "hidden";
    rb4.style.visibility = "visible";
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "visible";
    slide5.style.visibility = "hidden";
}
video = document.getElementsByClassName("video");
for(i=0;i<video.length;i++)
{
    video[i].playbackRate = 2.0;
}