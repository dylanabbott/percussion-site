console.log('Carousel Code loaded!');

const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const cslItems = document.getElementById('carousel-items');
const cslLength = document.querySelectorAll('.carousel__item').length;

//Define initial position of carousel items, and the current item for targetting
let cslIndex = 0;

let cslCurrentItem = document.querySelectorAll('.carousel__item');
//console.log(cslCurrentItem[cslIndex]);

//Disabled the left button initially
btnLeft.setAttribute('disabled', 'disabled');

function cslShift(e) {
	//this function checks which button was clicked, and which index position we're currently on
	if (e.srcElement.id === 'btn-left' && cslIndex !== 0) {
		//if we're already at the end of the carousel, enable the right button
		if (cslIndex === cslLength - 1) {
			btnRight.removeAttribute('disabled');
		}
		cslCurrentItem[cslIndex].classList.remove('carousel__item--current');
		// decrement the index
		cslIndex--;
		cslCurrentItem[cslIndex].classList.add('carousel__item--current');
		//and change position ( shift the left position, calc adds space for margins from preceding items)
		cslItems.style.left = `calc(${cslIndex * -500}px - ${cslIndex}em)`;
		if (cslIndex === 0) {
			//after decrementing the index to 0, disable the left button
			btnLeft.setAttribute('disabled', '');
		}
	} else if (e.srcElement.id === 'btn-right' && cslIndex < cslLength - 1) {
		//on right click, unless we're at the end of the carousel, increase the index
		cslCurrentItem[cslIndex].classList.remove('carousel__item--current');
		cslIndex++;
		cslCurrentItem[cslIndex].classList.add('carousel__item--current');
		//and change position
		cslItems.style.left = `calc(${cslIndex * -500}px - ${cslIndex}em)`;
		//Disable the right button when reaching the last item
		if (cslIndex === cslLength - 1) {
			btnRight.setAttribute('disabled', '');
		}
		//Re-enable the left button if moving out of the first index
		btnLeft.removeAttribute('disabled');
	}
}

btnLeft.addEventListener('click', cslShift);
btnRight.addEventListener('click', cslShift);
