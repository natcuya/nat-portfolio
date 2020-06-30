$(document).ready(function() {
    //click on menu button will show ul list
    $(".menu-button").click(function() {
        var val = $(this).attr('id');
        if (val == 1) {
            $("ul").hide();
            $(this).attr('id', '0');
        } else {
            $("ul").show();
            $(this).attr('id', '1');
        }
    });

    //when mouse clicks on menu button and ul link
    $("ul, .menu-button").mouseup(function() {
        return false;
    });

    //click outside of menu button or ul the list will hide
    $(document).mouseup(function() {
        $("ul").hide();
        $(".menu-button").attr('id', '0');
    });
});