export default class SliderComment {
	constructor(el) {
		var $el = $(el).find('.slider-wrapper');
		$el.slick({
			fade: false,
			dots:true,
			infinite: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst:true
		});
	}
}