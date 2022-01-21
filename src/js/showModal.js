console.log('Modal code loaded');

const showModalButton = document.getElementById('show-modal');
const hideModalButton = document.getElementById('hide-modal');
const modal = document.getElementById('modal');

showModalButton.addEventListener('click', () =>
	modal.classList.toggle('hidden')
);
hideModalButton.addEventListener('click', () =>
	modal.classList.toggle('hidden')
);