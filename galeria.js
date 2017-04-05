'use strict';

for(var item of document.getElementsByClassName('picture')) {
	item.addEventListener('click', function() {
		alert(this.getElementsByTagName("img")[0].src);
	});
};
