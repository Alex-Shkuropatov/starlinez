$( document ).ready( function(){

	/* calculate scrollbar width */
	function getScrollBarWidth () {
	    var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
	        widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
	    $outer.remove();
	    return 100 - widthWithScroll;
	};

	/* header mobile menu */
	$( '.header-menu-mobile-btn' ).click(function(){
		$( this ).toggleClass( 'menu-open' );
	});
	/* header-search */
	$( '.search-trigger' ).click(function(){
		var form = $( '.header-search-form' );
		if( form.hasClass('header-search-hidden') ){
			$('.header-search').focus();
		}
		else{
			$('.header-search').blur();
		}
		form.toggleClass( 'header-search-hidden' );
	});

	/* show more button on brand slider on main page*/
	$( '.brand-show-more' ).click( function(){
		$( this ).prev().height( 'auto' );
		$( this ).hide();
	});

	/* brand sliders on main page*/
	$( '.brand-description-slider' ).slick({
		arrows: false,
		fade: true,
		draggable: false,
		accessibility: false
	});
	$( '.brand-preview-slider' ).slick({
		slidesToShow: 5,
		asNavFor: '.brand-description-slider',
		swipeToSlide: true,
		focusOnSelect: true,
		nextArrow: '<div class="slider-arrow slider-arrow-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.035 512.035" fill="#eb7d93"><path d="M506.817,248.355L11.883,0.888C8.47-0.819,5.057,0.035,2.497,2.595c-2.56,3.413-3.413,7.68-0.853,10.24l158.72,243.2l-158.72,243.2c-1.707,3.413-1.707,7.68,0.853,10.24c0.853,1.707,3.413,2.56,5.973,2.56c1.707,0,2.56,0,3.413-0.853l494.933-247.467c3.413-1.707,5.12-4.267,5.12-7.68S509.377,250.061,506.817,248.355z M33.217,482.168l145.067-221.013c1.707-2.56,1.707-6.827,0-9.387L33.217,30.755l451.413,225.28L33.217,482.168z"/></svg></div>',
		prevArrow: '<div class="slider-arrow slider-arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.035 512.035" fill="#eb7d93"><path d="M506.817,248.355L11.883,0.888C8.47-0.819,5.057,0.035,2.497,2.595c-2.56,3.413-3.413,7.68-0.853,10.24l158.72,243.2l-158.72,243.2c-1.707,3.413-1.707,7.68,0.853,10.24c0.853,1.707,3.413,2.56,5.973,2.56c1.707,0,2.56,0,3.413-0.853l494.933-247.467c3.413-1.707,5.12-4.267,5.12-7.68S509.377,250.061,506.817,248.355z M33.217,482.168l145.067-221.013c1.707-2.56,1.707-6.827,0-9.387L33.217,30.755l451.413,225.28L33.217,482.168z"/></svg></div>',
		responsive: [
			{
				breakpoint: 992,
	      settings: {
	        slidesToShow: 4,
	      }
			},
			{
				breakpoint: 850,
	      settings: {
	        slidesToShow: 3,
	      }
			},
			{
				breakpoint: 650,
	      settings: {
	        slidesToShow: 2,
	      }
			},
			{
				breakpoint: 650,
	      settings: {
	        slidesToShow: 1,
	      }
			}
		]
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
		prevArrow: '<div class="slider-arrow slider-arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.035 512.035" fill="#eb7d93"><path d="M506.817,248.355L11.883,0.888C8.47-0.819,5.057,0.035,2.497,2.595c-2.56,3.413-3.413,7.68-0.853,10.24l158.72,243.2l-158.72,243.2c-1.707,3.413-1.707,7.68,0.853,10.24c0.853,1.707,3.413,2.56,5.973,2.56c1.707,0,2.56,0,3.413-0.853l494.933-247.467c3.413-1.707,5.12-4.267,5.12-7.68S509.377,250.061,506.817,248.355z M33.217,482.168l145.067-221.013c1.707-2.56,1.707-6.827,0-9.387L33.217,30.755l451.413,225.28L33.217,482.168z"/></svg></div>',
		responsive: [
			{
				breakpoint: 1150,
	      settings: {
	        slidesToShow: 4,
	      }
			},
			{
				breakpoint: 850,
	      settings: {
	        slidesToShow: 3,
	      }
			},
			{
				breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
			},
			{
				breakpoint: 512,
	      settings: {
	        slidesToShow: 1,
	      }
			}
		]
	});

	$('.open-call-popup').magnificPopup({
		items: {
		    src: '#call-popup',
		    type: 'inline'
		},
		mainClass: 'mfp-fade',
		removalDelay: 250
	});
	//console.log(getScrollBarWidth());

	/* desktop dropdown in header */
	$( '.header-drop-down' ).parent().click(function( e ){
		var $target = $(e.target), res = true;
		if( !$target.closest(".header-drop-down").length ){
			$(this).children('.header-drop-down-trigger').toggleClass('header-drop-triggered');
			$(this).children('.header-drop-down').toggleClass('header-drop-down-closed');
			res = false;
		}
		return res;
		//return false;
	});

	/* custom scrollbar in filters in catalog */
	$(".scroll").mCustomScrollbar({
		theme:"dark"
	});

	/* DROPDOWN FILTERS */
	$( '.filter-name-wrap' ).click(function(){
		$( this ).toggleClass( 'filter-open' );
		//close othe dropdowns on mobiles
		if( window.innerWidth <= 768 ){
			$('.filter-name-wrap').not(this).each(function(){
	      $(this).removeClass('filter-open');;
	  	});
		}
	});

	//opening MobileSortFilter filter
	$( '#mobileSortBtn' ).click(function(){
		$( '.sorting-form-mobile .select-styled' ).click();
		return false;
	});
	//opening Mobile Dropdown filters
	$( '#mobileFiltersBtn' ).click(function(){
		$( '.catalog-filters-holder' ).toggleClass( 'catalog-filters-open' );
		return false;
	});

	/* OWN CUSTOM SELECT */
	$('.select-hidden').each(function(){
	    var $this = $(this); 
	    numberOfOptions = $(this).children('option').length;

	    //set width of true select?
	    var setWidth = false;
	    if( $this.hasClass('setWidth') ){
	    	setWidth = true;
	    }


	    $this.wrap('<div class="select-styled-wrap"></div>');
	    $this.after('<div class="select-styled"></div>');

	    var $styledSelect = $this.next('div.select-styled');
	    if( setWidth ){
	    	$styledSelect.outerWidth( $this.outerWidth() );
	    }
	    $styledSelect.text($this.children('option').eq(0).text());
	  
	    var $list = $('<ul />', {
	        'class': 'select-options'
	    }).insertAfter($styledSelect);
	  
	    for (var i = 0; i < numberOfOptions; i++) {
	        $('<li />', {
	            text: $this.children('option').eq(i).text(),
	            rel: $this.children('option').eq(i).val(),
	            class: function(){
	            	//highlight current selected value using class
	            	var classStr = 'styled-option';
	            	if($this.children('option').eq(i).text() == $this.find(":selected").text() ){
	            		classStr += ' active';
	            	}
	            	return classStr;
	            }
	        }).appendTo($list);
	    }
	  
	    var $listItems = $list.children('li');
	  
	    $styledSelect.click(function(e) {
	        e.stopPropagation();
	        $('div.select-styled.select-open').not(this).each(function(){
	            $(this).removeClass('select-open').next('ul.select-options').hide();
	        });
	        $(this).toggleClass('select-open').next('ul.select-options').slideToggle();
	    });
	  
	    $listItems.click(function(e) {
	        e.stopPropagation();
	        $styledSelect.text($(this).text()).removeClass('select-open');
	        $this.val($(this).attr('rel'));
	        $list.hide();
	        $this.trigger('change');
	    });
	  
	    $(document).click(function() {
	        $styledSelect.removeClass('select-open');
	        $list.hide();
	    });

	});

	/* cart magnific popup */
	$('.cart-open-trigger').magnificPopup({
		items: {
		    src: '#cart-popup',
		    type: 'inline'
		},
		mainClass: 'mfp-fade',
		removalDelay: 250,
		callbacks: {
			
		}
	});

});