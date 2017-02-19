$(function(){

	console.log("init");


	$('.minicart a').on("click", function(e){
		e.preventDefault();
		$('body').addClass("minicart-open");
		$('#minicart-detail').addClass("open");
		$('body').append('<div class="minicart-overlay"></div>');
	});
	$('#minicart-detail .close-minicart').on("click", function(e){
		e.preventDefault();
		$('body').removeClass("minicart-open");
		$('#minicart-detail').removeClass("open");
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

});