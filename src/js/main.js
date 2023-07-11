console.log('Loaded bundled scripts');

// Ensure modal is hidden on page load

function modalUpdate() {
	modal.classList.remove('hidden-preload');
};

window.addEventListener("load", (event) => {
	setTimeout(modalUpdate, 250);
});

// Show/Hide Mobile Menu

const btnMenu = document.getElementById('menu-button');
const mobileMenu = document.getElementById('nav');

function toggleMenu() {
	btnMenu.classList.toggle('rotated');
	mobileMenu.classList.toggle('nav--hidden-on-mobile');
}

btnMenu.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('click', toggleMenu);

// Show/Hide Modal Contact Form

const showModalButton = document.getElementById('modal__open');
const showModalLink = document.getElementById('modal__link');
const hideModalButton = document.getElementById('modal__close');
const modal = document.getElementById('modal');

showModalButton.addEventListener('click', () =>
	modal.classList.toggle('hidden')
);

if (showModalLink) {showModalLink.addEventListener('click', (e) => {
	e.preventDefault();
	modal.classList.toggle('hidden');
})};

hideModalButton.addEventListener('click', (e) => {
	e.preventDefault();
	modal.classList.toggle('hidden');
});

modal.addEventListener('click', (e) => {
	if (e.target.id === "modal") {
		modal.classList.toggle('hidden');
	}
});

// // Cases Carousel

// const btnLeft = document.getElementById('btn-left');
// const btnRight = document.getElementById('btn-right');
// const csl = document.getElementById('csl');
// const cslItems = document.getElementById('carousel-items');
// const cslLength = document.querySelectorAll('.carousel__item').length;

// // Define initial position of carousel items, and the current item for targetting
// let cslIndex = 0;

// let cslCurrentItem = document.querySelectorAll('.carousel__item');
// // console.log(cslCurrentItem[cslIndex]);
// cslCurrentItem[cslIndex].classList.toggle('carousel__item--current');

// // Disabled the left button initially
// btnLeft.setAttribute('disabled', 'disabled');

// function cslShift(e) {
// 	// this function checks which button was clicked, and which index position we're currently on
// 	//console.log(e.includes('btn-left'));
// 	if (e.srcElement.id === 'btn-left' && cslIndex !== 0) {
// 		// if we're already at the end of the carousel, enable the right button
// 		if (cslIndex === cslLength - 1) {
// 			btnRight.removeAttribute('disabled');
// 		}
// 		cslCurrentItem[cslIndex].classList.toggle('carousel__item--current');
// 		// decrement the index
// 		cslIndex--;
// 		cslCurrentItem[cslIndex].classList.toggle('carousel__item--current');
// 		// and change position ( shift the left position, calc adds space for margins from preceding items)
// 		cslItems.style.left = `calc(${cslIndex * -100}% - ${cslIndex}em)`;
// 		csl.scroll({ top: 0, behavior: 'smooth' });
// 		if (cslIndex === 0) {
// 			//after decrementing the index to 0, disable the left button
// 			btnLeft.setAttribute('disabled', '');
// 		}
// 	} else if (e.srcElement.id === 'btn-right' && cslIndex < cslLength - 1) {
// 		// on right click, unless we're at the end of the carousel, increase the index
// 		cslCurrentItem[cslIndex].classList.remove('carousel__item--current');
// 		cslIndex++;
// 		cslCurrentItem[cslIndex].classList.add('carousel__item--current');
// 		// and change position
// 		cslItems.style.left = `calc(${cslIndex * -100}% - ${cslIndex}em)`;
// 		csl.scroll({ top: 0, behavior: 'smooth' });
// 		//Disable the right button when reaching the last item
// 		if (cslIndex === cslLength - 1) {
// 			btnRight.setAttribute('disabled', '');
// 		}
// 		//Re-enable the left button if moving out of the first index
// 		btnLeft.removeAttribute('disabled');
// 	}
// }

// btnLeft.addEventListener('click', cslShift);
// btnRight.addEventListener('click', cslShift);

// Subimt form to Formsubmit.co via fetch
// Uncomment fetch for prod
// console.log('Did you remember to uncomment the form submission?');

const contactForm = document.getElementById('form-body');
const modalFrame = document.getElementById('contact-form');
// console.log(contactForm);

const submitBtn = document.getElementById('submit-btn');
// console.log(submitBtn);

const handleSubmit = (e) => {
	e.preventDefault();
	let myForm = document.getElementById('form-body');
	let formData = new FormData(myForm);
	fetch('/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams(formData).toString(),
	})
		.then(() => console.log('Form successfully submitted'))
		.catch((error) => alert(error));

	const submitMsg = document.createElement('div');
	submitMsg.innerHTML =
		'<h3>Thanks for contacting us!</h3><p>We will review your project and respond shortly.</p>';
	contactForm.classList.add('invisible');
	modalFrame.append(submitMsg);
	submitMsg.classList.add('submitted');
	setTimeout(() => modal.classList.toggle('hidden'), 5000);
};

document.querySelector('form').addEventListener('submit', handleSubmit);



//  Services Reveal
// console.log('Reveal script loaded.');

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry, index) => {
			setTimeout(function () {
				if (entry.isIntersecting) {
					entry.target.classList.add('reveal');
				}
			}, 300 * index);
		});
	},
	{ rootMargin: '0px', threshold: 1.0 }
);

const listItems = document.querySelectorAll('.services__list__item');
listItems.forEach((el) => observer.observe(el));
