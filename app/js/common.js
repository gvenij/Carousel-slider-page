$(function() {
	// Show number of carousel items and counter position in every carousel instance on page load
	$('.carousel').each(function() {
		var countAll = $(this).find('.carousel-counter-all');
		countAll.text($(this).find('.carousel-nav-item').length);
		setCounterPosition($(this));
	});

	// Carousel
	$('.carousel').on('click', '.carousel-nav-item', function() {
		var currentNavItem = $(this),
			carousel = currentNavItem.closest('.carousel'),
			length = carousel.find('.carousel-nav-item').length,
			index = currentNavItem.index(),
			currentCarItem = carousel
				.find('.carousel-items-wrap .carousel-item')
				.eq(index);

		// Nav items
		currentNavItem.siblings('.carousel-nav-item').removeClass('active');
		currentNavItem.addClass('active');
		// Counter
		carousel.find('.carousel-counter-all').text(length);
		carousel.find('.carousel-counter-current').text(index + 1);
		setCounterPosition(carousel);
		// Carousel items
		currentCarItem.siblings('.carousel-item').removeClass('active');
		currentCarItem.addClass('active');
	});

	// Helper for counter position in carousel
	function setCounterPosition(carousel) {
		var activeEl = carousel.find('.carousel-nav-item.active'),
			counter = carousel.find('.carousel-counter'),
			activeElHeight = activeEl.outerHeight(),
			activeElWidth = activeEl.outerWidth(),
			posTop = activeEl.position().top + activeElHeight + 20,
			width = counter.outerWidth(),
			posLeft = activeEl.position().left + activeElWidth / 2 - width / 2;
		var styles = {
			left: posLeft,
			top: posTop
		};
		counter.css(styles);
	}

	// Slider range
	var rangeSlider = function() {
		var slider = $('.range-slider'),
			range = $('.range-slider-range'),
			value = $('.range-slider-value');

		slider.each(function() {
			value.each(function() {
				var value = $(this)
					.next()
					.attr('value');
				$(this).html(value);
			});

			range.on('input', function() {
				$(this)
					.prev(value)
					.html(this.value);
			});
		});
	};

	rangeSlider();
});
