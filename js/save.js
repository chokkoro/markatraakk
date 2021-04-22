$(document).ready(function(){

$(window).scroll(function(event){

 var y = $(this).scrollTop();

 if(y >=4000){
   $('.save').addClass('animate');
$('.save2').addClass('animate');



 }


});

});
