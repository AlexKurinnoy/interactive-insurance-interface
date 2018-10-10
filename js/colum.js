/*$(document).ready(function () {
function setEqualHeight(columns)
{
var tallestcolumn=0;
columns.each(
 function()
 {
 	currentHeight = $(this).height();
 	if(currentHeight>tallestcolumn)
{
	tallestcolumn = currentHeight;
}
}
);
columns.height(tallestcolumn);
}
setEqualHeight($(".nav, .content"));
});*/

 
/* Открытие меню*/


  $("#menuha").click(function(){
      
      if ($(".menu").width() <=0) {
      	$(".menu").animate({ width: '250px', opacity: '1'  }, 500);
      	$(".container-fluid").animate({ "padding-left": '260px' }, 500);
        //$(".menu").width(250);
      //  $('.container-fluid').css('padding-left', 260);
        }

      else{

      $(".menu").animate({ width: '0px', opacity: '0' }, 500);
      $(".container-fluid").animate({ "padding-left": '10px' }, 500);
      //$('.container-fluid').css('padding-left', parseInt($('.container-fluid').css('padding-left')) - 250);
   }});

