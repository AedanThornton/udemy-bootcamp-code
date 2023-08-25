var element = $("#landing");
var originalColor = element.css("background-color");

function changeBackgroundColor(shouldChange, color) {
    if (!shouldChange) {
        $("#landing").css("background-color", originalColor);
    }
    $("#landing").css("background-color", color);
}