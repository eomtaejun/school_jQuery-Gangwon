// modal
$(".modal_open").click(function(){
    $(".modal").show();
    // $(".modal").slideDown();
    // $(".modal").fadeIn();
});

$(".modal input[type='button'][value='X닫기']").click(function(){
    $(".modal").hide();
    // $(".modal").slideUp();
    // $(".modal").fadeOut();
});

// tab menu
$(".tab_n").click(function(){
    $(".notice").show();
    $(".gal").hide();

    $(".tab_n").css("backgroundColor", "#5f1c25");
    $(".tab_g").css("backgroundColor", "#ccc");
});

$(".tab_g").click(function(){
    $(".gal").show();
    $(".notice").hide();

    $(".tab_g").css("backgroundColor", "#5f1c25");
    $(".tab_n").css("backgroundColor", "#ccc");
});

// tab menu
$(".dep1").mouseenter(function(){
    $(this).children(".sub").stop().slideDown();
});

$(".dep1").mouseleave(function(){
    $(this).children(".sub").stop().slideUp();
});