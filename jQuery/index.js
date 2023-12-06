$("h1").css("color", "cyan");
$("html").keydown(function(event){
    $("h1").text(event.key);
})