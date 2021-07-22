window.onscroll = function showHeader() {
	var header = document.querySelector('.header_new');
	var header_f = document.querySelector('.header_fixed');
	var up_p = document.querySelector('.up_site');
	if(window.pageYOffset > 200) {
		if (header != null) {
				header.classList.add('header_fixed');
		}
		if (header_f != null) {
				header_f.classList.remove('header_new');
		}
		if (up_p != null) {
				up_p.classList.remove('up_hide');
		}
	}
	else {
		if (header_f != null) {
			header_f.classList.add('header_new'); 
		}
		if (header != null) {
			header.classList.remove('header_fixed');
		}
		if (up_p != null) {
				up_p.classList.add('up_hide');
		}
	}
}

function toggleImage(from, id_c){
	var div = document.getElementsByClassName(from)[0];
	var rem = document.getElementsByClassName('map_active')[0];
	if ((rem != null) && (id_c < 5))
		rem.classList.remove('map_active');
	
	rem = document.getElementsByClassName('map_active_w')[0];
	if ((rem != null) && (id_c > 4))
		rem.classList.remove('map_active_w');
	
	
	if (id_c == 1)
	{
		div = document.getElementsByClassName('map_change_vladivostok_map')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_nakhodka_map')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_hongkong_map')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		rem = document.getElementsByClassName('mos_con')[0];
		rem.classList.add('map_active');
	}
	if (id_c == 2)
	{
		div = document.getElementsByClassName('map_change_moscow_map')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_nakhodka_map')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_hongkong_map')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		rem = document.getElementsByClassName('vdk_con')[0];
		rem.classList.add('map_active');
	}
	if (id_c == 3)
	{
		div = document.getElementsByClassName('map_change_vladivostok_map')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_moscow_map')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_hongkong_map')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		rem = document.getElementsByClassName('nhk_con')[0];
		rem.classList.add('map_active');
	}
	if (id_c == 4)
	{
		div = document.getElementsByClassName('map_change_vladivostok_map')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_nakhodka_map')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_moscow_map')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		rem = document.getElementsByClassName('hkg_con')[0];
		rem.classList.add('map_active');
	}
	/* */
	var div = document.getElementsByClassName(from)[0];
	if (id_c == 5)
	{
		div = document.getElementsByClassName('map_change_vladivostok_map_w')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_nakhodka_map_w')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_hongkong_map_w')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		rem = document.getElementsByClassName('mos_war')[0];
		rem.classList.add('map_active_w');
	}
	if (id_c == 6)
	{
		div = document.getElementsByClassName('map_change_moscow_map_w')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_nakhodka_map_w')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_hongkong_map_w')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		rem = document.getElementsByClassName('vdk_war')[0];
		rem.classList.add('map_active_w');
	}
	if (id_c == 7)
	{
		div = document.getElementsByClassName('map_change_vladivostok_map_w')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_moscow_map_w')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_hongkong_map_w')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		rem = document.getElementsByClassName('nhk_war')[0];
		rem.classList.add('map_active_w');
	}
	if (id_c == 8)
	{
		div = document.getElementsByClassName('map_change_vladivostok_map_w')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_nakhodka_map_w')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		div = document.getElementsByClassName('map_change_moscow_map_w')[0];
			if (!div.style.display || div.style.display === 'flex') {
				div.style.display = 'none';
			}
		rem = document.getElementsByClassName('hkg_war')[0];
		rem.classList.add('map_active_w');
	}
	
	/* */
	
	var class_change = document.getElementsByClassName('map_change_' + from)[0];
	
	if (!class_change.style.display || class_change.style.display === 'flex') {
		class_change.style.display = 'flex';
	}
	else {
		class_change.style.display = 'flex';
	}
}

function toggleContacts(){
	var div = document.getElementsByClassName('cont_select')[0];
	var map = document.getElementsByClassName('container_maps')[0];
	var div_w = document.getElementsByClassName('ware_select')[0];
	var map_w = document.getElementsByClassName('container_maps2')[0];
	var active_window = document.getElementsByClassName('active_cont')[0];
	var active_window1 = document.getElementsByClassName('active_ware')[0];
	
	if (!div.style.display || div.style.display === 'flex') {
		div.style.display = 'flex';
		map.style.display = 'flex';
		div_w.style.display = 'none';
		map_w.style.display = 'none'; 

	}
	else {
		div.style.display = 'flex';
		map.style.display = 'flex';
		div_w.style.display = 'none';
		map_w.style.display = 'none';
		active_window.classList.add('active_cont_ware');
		active_window1.classList.remove('active_cont_ware');
	}
}
	
function toggleContacts1(){
	var div = document.getElementsByClassName('cont_select')[0];
	var map = document.getElementsByClassName('container_maps')[0];
	var div_w = document.getElementsByClassName('ware_select')[0];
	var map_w = document.getElementsByClassName('container_maps2')[0];
	
	var active_window = document.getElementsByClassName('active_cont')[0];
	var active_window1 = document.getElementsByClassName('active_ware')[0];
	
	
	if (!div.style.display || div.style.display === 'flex') {
		div.style.display = 'none';
		map.style.display = 'none';
		div_w.style.display = 'flex';
		map_w.style.display = 'flex'; 
		active_window1.classList.add('active_cont_ware');
		active_window.classList.remove('active_cont_ware');
	}
	else {
		div.style.display = 'none';
		map.style.display = 'none';
		div_w.style.display = 'flex';
		map_w.style.display = 'flex';
	}
}



document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});


$(document).ready(function() {
   $('.header_burger_mobile').click(function(event) {
       $('.header_burger_mobile').toggleClass('active_mobile_b');
       $('.header_menu_mobile').toggleClass('active_mobile');
       $('.header_mobile').toggleClass('active_fixed_mobile');
       $('body').toggleClass('lock');
   });
   
   $('.header_link_mobile').click(function(event) {
       $('.header_burger_mobile').toggleClass('active_mobile_b');
       $('.header_menu_mobile').toggleClass('active_mobile');
       $('.header_mobile').toggleClass('active_fixed_mobile');
       $('body').toggleClass('lock');
   });
});
