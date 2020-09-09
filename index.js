$(document).ready(function() {
    //click on menu button will show ul list
    $(".menu-button").click(function() {
        var val = $(this).attr('id');
        if (val == 1) {
            $(".index").hide();
            $(this).attr('id', '0');
        } else {
            $(".index").show();
            $(this).attr('id', '1');
        }
    });

    //when mouse clicks on menu button and ul link
    $(".index, .menu-button").mouseup(function() {
        return false;
    });

    //click outside of menu button or ul the list will hide
    $(document).mouseup(function() {
        $(".index").hide();
        $(".menu-button").attr('id', '0');
    });
});