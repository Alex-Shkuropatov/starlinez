$( document ).ready( function(){

	/* show more button on brand slider on main page*/
	$( '.brand-show-more' ).click( function(){
		$( this ).prev().height( 'auto' );
		$( this ).hide();
	});

	/* brand sliders on main page*/
	$( '.brand-description-slider' ).slick({
		arrows: false,
		fade: true,
		draggable: false
	});
	$( '.brand-preview-slider' ).slick({
		slidesToShow: 5,
		asNavFor: '.brand-description-slider',
		swipeToSlide: true,
		nextArrow: '<div class="slider-arrow slider-arrow-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.035 512.035" fill="#eb7d93"><path d="M506.817,248.355L11.883,0.888C8.47-0.819,5.057,0.035,2.497,2.595c-2.56,3.413-3.413,7.68-0.853,10.24l158.72,243.2l-158.72,243.2c-1.707,3.413-1.707,7.68,0.853,10.24c0.853,1.707,3.413,2.56,5.973,2.56c1.707,0,2.56,0,3.413-0.853l494.933-247.467c3.413-1.707,5.12-4.267,5.12-7.68S509.377,250.061,506.817,248.355z M33.217,482.168l145.067-221.013c1.707-2.56,1.707-6.827,0-9.387L33.217,30.755l451.413,225.28L33.217,482.168z"/></svg></div>',
		prevArrow: '<div class="slider-arrow slider-arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.035 512.035" fill="#eb7d93"><path d="M506.817,248.355L11.883,0.888C8.47-0.819,5.057,0.035,2.497,2.595c-2.56,3.413-3.413,7.68-0.853,10.24l158.72,243.2l-158.72,243.2c-1.707,3.413-1.707,7.68,0.853,10.24c0.853,1.707,3.413,2.56,5.973,2.56c1.707,0,2.56,0,3.413-0.853l494.933-247.467c3.413-1.707,5.12-4.267,5.12-7.68S509.377,250.061,506.817,248.355z M33.217,482.168l145.067-221.013c1.707-2.56,1.707-6.827,0-9.387L33.217,30.755l451.413,225.28L33.217,482.168z"/></svg></div>'
	});

	//set equal height for each slide in row-product-sliders
	//that allows you to align price spans regardless of description height
	$('.product-list-row').on('setPosition', function(event, slick){
		$(this).find('.slick-slide').height('auto');
		var slickTrackHeight = $(this).find('.slick-track').height();
		$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
	});


	$( '.product-list-row' ).slick({
		slidesToShow: 5,
		swipeToSlide: true,
		nextArrow: '<div class="slider-arrow slider-arrow-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.035 512.035" fill="#eb7d93"><path d="M506.817,248.355L11.883,0.888C8.47-0.819,5.057,0.035,2.497,2.595c-2.56,3.413-3.413,7.68-0.853,10.24l158.72,243.2l-158.72,243.2c-1.707,3.413-1.707,7.68,0.853,10.24c0.853,1.707,3.413,2.56,5.973,2.56c1.707,0,2.56,0,3.413-0.853l494.933-247.467c3.413-1.707,5.12-4.267,5.12-7.68S509.377,250.061,506.817,248.355z M33.217,482.168l145.067-221.013c1.707-2.56,1.707-6.827,0-9.387L33.217,30.755l451.413,225.28L33.217,482.168z"/></svg></div>',
		prevArrow: '<div class="slider-arrow slider-arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.035 512.035" fill="#eb7d93"><path d="M506.817,248.355L11.883,0.888C8.47-0.819,5.057,0.035,2.497,2.595c-2.56,3.413-3.413,7.68-0.853,10.24l158.72,243.2l-158.72,243.2c-1.707,3.413-1.707,7.68,0.853,10.24c0.853,1.707,3.413,2.56,5.973,2.56c1.707,0,2.56,0,3.413-0.853l494.933-247.467c3.413-1.707,5.12-4.267,5.12-7.68S509.377,250.061,506.817,248.355z M33.217,482.168l145.067-221.013c1.707-2.56,1.707-6.827,0-9.387L33.217,30.755l451.413,225.28L33.217,482.168z"/></svg></div>'
	});
});