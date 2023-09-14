var originalColor = $("#landing").css("background-color");

$(".lnd-btn").on("mouseenter", function() {
    let btnID = $(this).attr("id");
    switch(btnID) {
        case "softwaredev-btn":
            $("#landing").removeClass("light-purple");
            $("#landing").addClass("dark-blue");
            break;
        case "webdev-btn":
            $("#landing").removeClass("light-purple");
            $("#landing").addClass("dull-yellow");
            break;
        case "gamedev-btn":
            $("#landing").removeClass("light-purple");
            $("#landing").addClass("dark-purple");
            break;
        default:
            $("#landing").addClass("light-purple");
    }
})

$(".lnd-btn").on("mouseleave", function() {
    $("#landing").removeClass("dark-blue dull-yellow dark-purple");
    $("#landing").addClass("light-purple");
})