$(document).ready(function(){

$(window).scroll(function(event){

 var y = $(this).scrollTop();

 if(y >=3000){

$('.tracking_screen').addClass('animate');

$('.tracking_screen2').addClass('animate');



 }


});

});
