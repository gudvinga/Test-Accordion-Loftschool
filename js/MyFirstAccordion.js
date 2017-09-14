window.onload = function() {

	var accordionButtons = document.getElementsByClassName('accordion__title'),
		contentOfItem = document.getElementsByClassName('accordion__content');

	for(var i = 0; i < accordionButtons.length; i++ ) {
		accordionButtons[i].onclick = function(){
			if (!(this.classList.contains('accordion__title_active'))) {
				for (var i = 0; i < accordionButtons.length; i++) {
					accordionButtons[i].classList.remove('accordion__title_active');
				};
				this.classList.add('accordion__title_active');	
			} else this.classList.remove('accordion__title_active');	
		};
	};

};