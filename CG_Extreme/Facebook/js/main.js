//-------------------------------------------------------------- MENU HOME---------------------------------------------------------------- 

$(document).ready(function(e) {
$("#menu").append('<div class="tooltip"></div>');



	$("#menu").animate({
		marginTop:"0px",
		width: "54px"
	},4000);
	$("#menu").animate({
		marginTop:"0px",
		width: "250px"
	},1000);
	
	$("#realizacao").delay(7000).animate({
		opacity:"0.9",
	},2000);
	
	$("#logo").delay(4000).animate({
		marginTop: "100px"
	},4000);
	
	$("#data").delay(4000).animate({
		marginTop: "390px",
		width: "380px",
		marginLeft: "20px"
	
	},4000);
	
	$("#aviao").delay(3000).animate({
		marginLeft: "340px"
	
		},5000,function(){
		$(this).fadeOut();
	});
	
	$("#text").delay(4000).animate({
		width: "386px"
	
	},2000);
	
// -------------------------------------------------------------- NAVEGACAO ----------------------------------------------------------------
                $('ul a').bind('click',function(event){
                    var $anchor = $(this);
                    
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1500,'');
                    /*
                    if you don't want to use the easing effects:
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000);
                    */
                    event.preventDefault();
                });
 
// ------------------------------------------------------------- MENU ----------------------------------------------------------------


	$("*[rel=tooltip]").mouseover(function(e) 
	{
		$('.tooltip').html($(this).attr('te'));
		var el = $(this);
	
		$('.tooltip').fadeIn(0).animate({left: el.position().left}, 'fast');
	});
		
	$('#menu').mouseout(function (){$('.tooltip').fadeOut(0)});
});