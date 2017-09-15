window.onload = function() {
var activeTitle,
	openContent = function(e) {
		var targetTitle = e.target;
		while(targetTitle.id != 'accordion') {
			if(targetTitle.classList.contains('accordion__title')) {
				addClass(targetTitle);
			}
			targetTitle = targetTitle.parentNode;
		}
	};

var addClass = function(item) {
	if(activeTitle && activeTitle != item) {
		activeTitle.classList.remove('accordion__title_active')
	};
	activeTitle = item;
	activeTitle.classList.toggle('accordion__title_active')
};
  
accordion.addEventListener('click', openContent, false);
};