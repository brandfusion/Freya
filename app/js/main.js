$(function(){

	console.log("init");


	$('.minicart a').on("click", function(e){
		e.preventDefault();
		$('body').addClass("minicart-open");
		$('#minicart-detail').addClass("open");
		$('body').append('<div class="minicart-overlay"></div>');
		
		setTimeout(function(){
			$('.minicart-overlay').addClass("open");
		},100);
		setTimeout(function(){
			$('#minicart-header').addClass("open");
		},350);
	});
	$('.close-minicart').on("click", function(e){
		e.preventDefault();
		$('body').removeClass("minicart-open");
		$('#minicart-detail, #minicart-header').removeClass("open");
		$('.minicart-overlay').remove();
	});
	$('body').on("click", ".minicart-overlay", function(){
		$('body').removeClass("minicart-open");
		$('#minicart-detail, #minicart-header').removeClass("open");
		$('.minicart-overlay').remove();
	});
	$('.minicart-delete-item').on("click", function(e){
		e.preventDefault();
		$(this).parents(".item").fadeOut();
		$(this).parents(".item").remove
	});
	// $('.dropdown').on("mouseenter", function(){
	// 	$(this).find(".M2").addClass("open");
	// });
	// $('.dropdown').on("mouseleave", function(){
	// 	$(this).find(".M2").removeClass("open");
	// });


	//Homepage
	$('#slider').slick({
		dots: true,
	  infinite: false,
	  speed: 300,
	});


	var scrollingUp = false;
	var prevScrollValue = 0;
	//Scrolling
	$(window).on("scroll", function(){
		var scrollTop = $(window).scrollTop();		
		var headerUpperHeight = $('#header').height();
		scrollingUp = scrollTop > prevScrollValue ? false : true;
		prevScrollValue = scrollTop;

		$('.parallax img').css("transform",'translateY('+ -scrollTop/4 +'px)');

		if (scrollTop > 36) {
			$('#header').addClass("fixed");
			// $('body').css("paddingTop", headerUpperHeight);
		} 
		if (scrollTop < 36) {
			$('#header').removeClass("fixed");
			// $('body').css("paddingTop", 0);
		}
		if (scrollTop > 350) {
			$('#header').addClass("scrolling");			
		} 
		if (scrollTop < 350) {
			$('#header').removeClass("scrolling");			
		} 
		if (scrollTop > 500 && !scrollingUp) {
			$('#header').addClass("scrolled");			
		} 
		if (scrollTop > 500 && scrollingUp || scrollTop < 500) {
			$('#header').removeClass("scrolled");			
		} 	
			
	});
});