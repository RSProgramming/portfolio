const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	//Toggle Links
	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');
	
	//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards  ${index / 5 + 0.25}s`;
			}

		});
		//burger animation
		burger.classList.toggle('toggle');
	});
}

navSlide();

const mainBox = () => {
	const angleBox = document.querySelector('.angleBox-main');
		angleBox.classList.add('angleBox-load');
}

mainBox();