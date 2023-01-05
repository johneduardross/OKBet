$("#nav-drawer-trigger").click(function(){

    if ($("#nav-drawer").hasClass("nav-drawer-active")) {
        $("#nav-drawer").removeClass("nav-drawer-active");
        $("#nav-bar").removeClass("nav-bar-active");
        $("#nav-logo").removeClass("nav-logo-active");
        $("#nav-logo").removeClass("nav-logo-active");
        $("#nav-drawer-trigger").removeClass("nav-bar-trigger-active");
    }
    else {
        $("#nav-drawer").addClass("nav-drawer-active");
        $("#nav-bar").addClass("nav-bar-active");
        $("#nav-logo").addClass("nav-logo-active");
        $("#nav-logo").addClass("nav-logo-active");
        $("#nav-drawer-trigger").addClass("nav-bar-trigger-active");
    }
});