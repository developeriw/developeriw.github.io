$(function(){
	
	var menu = $('#topnav'),
		pos = menu.offset();
		
		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('default')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('default').addClass('fixed').fadeIn('slow');
					$('.top-logo').removeClass('hidden').addClass('animated tada');
					
				});
			} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('fixed').addClass('default').fadeIn('slow');
					$('.top-logo').addClass('hidden').removeClass('animated tada');
				});
			}
		});

});