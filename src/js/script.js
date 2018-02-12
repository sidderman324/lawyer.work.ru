$(document).ready(function(){
	jQuery('.page-header__burger-wrapper').on('click', function() {
		jQuery(this).find('.page-header__burger').toggleClass('page-header__burger--active');
		jQuery('.main-menu').slideToggle(300);
		jQuery('.submenu').fadeOut(300);
		jQuery('.main-menu__marker').removeClass('main-menu__marker--active');
	});

	jQuery('.main-menu__marker').on('click', function() {
		jQuery(this).siblings('.submenu').slideToggle(300);
		jQuery(this).toggleClass('main-menu__marker--active');
	});

	function menuHideShow() {
		var windowsWidth = jQuery(window).width();
		if (windowsWidth > 768) {
			jQuery('.main-menu').fadeIn(300);
			jQuery('.page-header__burger').removeClass('page-header__burger--active');
		}
	};

	jQuery(document).ready(menuHideShow);
	jQuery(document).scroll(menuHideShow);
	jQuery(window).resize(menuHideShow);
});
