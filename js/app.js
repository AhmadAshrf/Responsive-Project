//window screen loading
$(window).on('load', function(){
    $(".overlay").fadeOut(2000);
    $(".overlay .spinner").fadeOut(2000,function(){$("body").css("overflow","auto");})
});


//scroll top button apperance
var btn = $("#scroll-top");
$(window).scroll(function(){
    console.log($(this).scrollTop())
    if($(this).scrollTop() >= 350){
        btn.fadeIn(1000);
    }else{
        btn.fadeOut(1000)
    }
})


//scroll top button clicking action
btn.on('click',function(){
    window.scrollTo(0,0);
})
