// var width = $("#moviePoster").clientWidth;
// var height = $("#moviePoster").clientHeight;

// console.log($("#moviePoster"));

// //$(".jumbotron").style.padding-bottom;

$(document).ready(function () {
    var height = $("#moviePoster").height();
    height = height + 64;
    $("#topJumbotron").css("height", height);
});

