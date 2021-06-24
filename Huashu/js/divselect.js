jQuery.divselect = function (divselectid) {
    $(divselectid + " cite").click(function () {
        var ul = $(divselectid + " ul");
        if (ul.css("display") == "none") {
            ul.slideDown("fast");
        } else {
            ul.slideUp("fast");
        }
    });
    $(divselectid + " ul li a").click(function () {
        var txt = $(this).text();
        $(divselectid + " cite").html(txt);
        var value = $(this).attr("selectid");
        $(divselectid + " ul").hide();
        changeValue(value, divselectid);
    });
    $(document).click(function (evt) {

        var evt = window.event ? window.event : evt,
    target = evt.srcElement || evt.target;
        if (target.id == "divcite" || target.id == "dropOrder-cite" || target.id == "dropUser-cite") {
            //$(divselectid+" ul").hide();
        } else {
            $(divselectid + " ul").hide();
        }
    });
};