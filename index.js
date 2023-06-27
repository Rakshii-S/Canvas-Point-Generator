function slideright()
{
    var sr = document.getElementById("slider2");
    sr.style.visibility = "visible";
    sr.style.marginLeft = "0px";
    var sl = document.getElementById("slider1")
    sl.style.visibility = "hidden";
    sl.style.marginLeft = "400px";
}

function slideleft()
{
    var sl = document.getElementById("slider1")
    sl.style.visibility = "visible";
    sl.style.marginLeft = "0px";
    var sr = document.getElementById("slider2");
    sr.style.visibility = "hidden";
    sr.style.marginLeft = "400px";
}
$(document).ready(function(){
    $(".change1").hover(function(){
    $(this).css("background-color", "#333b5f");
    $(this).css("color", "white");
    }, function(){
    $(this).css("background-color", "#8c92ac");
    $(this).css("color", "black");
    });
});
function lightmode()
{
    document.body.style.backgroundColor = "white";
    document.getElementById("mode1").style.backgroundColor = "#d0c200";
    document.getElementById("mode2").style.backgroundColor = "#f9e900";
    document.getElementById("canvas").style.border = "3px solid black";
    document.getElementById("canvas").style.backgroundColor = "#8c92ac";
    var change1 = document.getElementsByClassName("change1");
    for(i=0;i<change1.length;i++)
    {
        change1[i].style.backgroundColor = "#8c92ac";
        change1[i].style.color = "black";
    }
    var change2 = document.getElementsByClassName("change2");
    for(i=0;i<change2.length;i++)
    {
        change2[i].style.backgroundColor = "#8c92ac";
        change2[i].style.color = "black";
    }
    $(document).ready(function(){
        $(".change1").hover(function(){
        $(this).css("background-color", "#333b5f");
        $(this).css("color", "white");
        }, function(){
        $(this).css("background-color", "#8c92ac");
        $(this).css("color", "black");
        });
    });
}

function darkmode()
{
    document.body.style.backgroundColor = "#121212";
    document.getElementById("mode1").style.backgroundColor = "#f9e900";
    document.getElementById("mode2").style.backgroundColor = "#d0c200";
    document.getElementById("canvas").style.border = "3px solid white";
    document.getElementById("canvas").style.backgroundColor = "#333b5f";
    var change1 = document.getElementsByClassName("change1");
    for(i=0;i<change1.length;i++)
    {
        change1[i].style.backgroundColor = "#333b5f";
        change1[i].style.color = "white";
    }
    var change2 = document.getElementsByClassName("change2");
    for(i=0;i<change2.length;i++)
    {
        change2[i].style.backgroundColor = "#333b5f";
        change2[i].style.color = "white";
    }
    $(document).ready(function(){
        $(".change1").hover(function(){
        $(this).css("background-color", "#8c92ac");
        $(this).css("color", "black");
        }, function(){
        $(this).css("background-color", "#333b5f");
        $(this).css("color", "white");
        });
    });
}