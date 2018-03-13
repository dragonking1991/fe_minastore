export default class SliderBook {
	constructor(el) {
		var $el = $(el).find('.slider-wrapper');
		$el.slick({
			fade: false,
			dots:false,
			infinite: true,
			arrows: true,
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst:true,
			variableWidth: true,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}]
		});
	}
}