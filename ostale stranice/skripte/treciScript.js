$(document).ready(function() {
    $('input[type="text"]').mouseenter(function() {
        $(this).focus().mouseleave(function () {
            $(this).blur()})
    })
    $('input[type="email"]').mouseenter(function () {
        $(this).focus().mouseleave(function () {
            $(this).blur()
        })
    })
    $('textarea').mouseenter(function () {
        $(this).focus().mouseleave(function () {
            $(this).blur()
        })
    })
    $(".prikazi-tekst").click(function(){
        $(".zamena-slika").hide(400, function() {
            $(".zamena-tekst").fadeIn(500)
        })
    })
    $(".vrati-sliku").click(function () {
        $(".zamena-tekst").hide(800)
        $(".zamena-slika").show(1200)
    })
})