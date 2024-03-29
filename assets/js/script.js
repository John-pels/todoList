//check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");

});
//click on X to delete Todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type ='text']").keypress(function() {
    if (event.which === 13) {
        //grabbing new todo text from input box
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});
//to hide the input box
$(".fa-plus").click(function() {
    $("input[type ='text']").fadeToggle();
});