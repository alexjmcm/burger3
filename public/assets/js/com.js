$("input[type=submit]").on("click", function (event) {
    event.preventDefault();
    function validateBurger() {
        if (!($("input[name='newBurger']").val())) {
            $("input[name='newBurger']").effect("shake");
        } else return true;
    }
    if (validateBurger()) {
        $.post("/api/burgers/add", { burger: $("input[name='newBurger']").val() });
        location.reload();
    };
});

$(".devour").on("click", function (event) {
    $.post("/api/burgers/remove", { id: $(this).attr("id") });
    location.reload();
});