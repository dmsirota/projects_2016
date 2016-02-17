$(document).ready(function(){
    introAnim();
});


// .logo-box move top to 50%;

function introAnim() {
    $('.welcome-text')
        .delay(500)
        .animate({opacity: "1"}, 500)
        .delay(500)
        .animate({top: "10%"}, 1000 );
    setTimeout(function() {
        $('.logo-box')
        .delay(1500)
        .animate({opacity: "1"}, 1000 );
    }, 1000);

    
}