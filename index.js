$(document).ready(function() {
    $(document).scroll(function(){
        if($(window).scrollTop() > 50){
            $(".bg-light").attr("id", "scrollNav");
        }
        else{
            $(".bg-light").attr("id", "");
        }
    });
    if($(window).scrollTop() > 50){
        $(".bg-light").attr("id", "scrollNav");
    }
    else{
        $(".bg-light").attr("id", "");
    }
})