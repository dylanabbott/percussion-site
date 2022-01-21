console.log('Modal code loaded');

const showModalButton = document.getElementById('modal__open');
const hideModalButton = document.getElementById('modal__close');
const modal = document.getElementById('modal');

showModalButton.addEventListener('click', () =>
	modal.classList.toggle('hidden')
);
hideModalButton.addEventListener('click', () =>
	modal.classList.toggle('hidden')
);
