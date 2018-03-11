export default class Header {
	constructor(el) {
		

		$('.open-search').on('click',function(){
			$(".bg-popup").addClass('show');
			// $("#searchHeader .tt-input").tagsinput('focus');
			$("#searchHeader .tt-input").focus();
			$(".nav__menu").addClass('off');

		});
		$('#searchHeader .close-form').on('click',function(){
			$(".bg-popup").removeClass('show');
			$(".nav__menu").removeClass('off');
		});
		$('.bg-popup').on('click',function(){
			$("#searchHeader .close-form").trigger('click');
		});




	}
}