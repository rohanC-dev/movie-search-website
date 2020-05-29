$(document).ready(function () {
    if ($(window).width() < 768) {
        $("#mainContainer").addClass("container");
    }
    else if ($(window).width() >= 768 && $(window).width() <= 992) {
        $("#mainContainer").removeClass("container");
    }
    else if ($(window).width() > 992 && $(window).width() <= 1200) {
        $("#mainContainer").removeClass("container");
    }
    Response.resize(function () {
        if (Response.band(1200)) {
            $("#mainContainer").addClass("container");
        }
        else if (Response.band(992)) {
            $("#mainContainer").removeClass("container");
        }
        else if (Response.band(768)) {
            $("#mainContainer").removeClass("container");
        }
        else {
            $("#mainContainer").removeClass("container");
        }
    });
});
