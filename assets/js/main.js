

$(document).ready(function(){

//menu items show/hide animation
	var block = false;

	$(document).on( 'click', '#sitcky_menu', function(event){
		event.preventDefault();
		var header_pos;

		if($(this).hasClass('hero_nav')){
			header_pos = 'hero_header';
		}

		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			show_nav_menu(header_pos);
			block = false;
		}else{
			$(this).removeClass('active');
			block = true;
			hide_nav_menu(header_pos);
		}
		
	});

	//function to show/animate the nav menu elements
	var timer;
	function show_nav_menu(selector){
		var count_li = $('header.' + selector + ' nav ul li').length - 5;	
		
		$('header.' + selector + ' nav ul li').each(function(i) {

			timer = setTimeout(function(){

				if(!block){		
					i = i - count_li;
					$('header.' + selector + ' nav ul li').eq(i).fadeIn(300).animate({marginTop : '0'}, {duration: 300,queue: false});
				}else{
					clearTimeout(timer);
					$('header.' + selector + ' nav ul li').hide();
					block = true;
				}

			}, 300*i);		
			
		});			
			
	}

	//function to hide the nav menu
	function hide_nav_menu(selector){	
		$('header.' + selector + ' nav ul li').stop().fadeOut(300,function(){
			$(this).css({marginTop : '-10px;'});
		});
	}

	//initialization wow.js
    new WOW().init();

});
