'use strict';

var closePreview = function(bg, pic) {
	bg.style.cursor = 'default';
	bg.addEventListener('transitionend', function(e) {
		this.parentNode.removeChild(this);
	});
	bg.style.opacity = '0';
	pic.style = '';	
	document.body.style.overflow = '';
};

for(var item of document.getElementsByClassName('picture')) {
	item.addEventListener('click', function() {
		if (document.getElementsByClassName('bg').length == 0) {
			var pic = this;
			pic.style.zIndex = 4;
			pic.style.position = 'fixed';
			pic.style.top = '5%';
			pic.style.left = '50%';
			pic.style.transform = 'translateX(-50%)';
			pic.style.height = '90%';
			var bg = document.createElement('div');
			bg.className = 'bg';
			document.body.appendChild(bg);
			document.body.style.overflow = 'hidden';
			window.getComputedStyle(bg).opacity;
			bg.style.opacity = 1;
			bg.addEventListener('click', function(e) {
				e.preventDefault();
				closePreview(this, pic);
			});
		} else {	
			bg = document.getElementsByClassName('bg')[0];
			closePreview(bg, this);
		};
	});
};
