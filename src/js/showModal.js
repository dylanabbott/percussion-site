console.log('Modal code loaded');

const showModalButton = document.getElementById('modal__open');
const hideModalButton = document.getElementById('modal__close');
const modal = document.getElementById('modal');

showModalButton.addEventListener('click', () =>
	modal.classList.toggle('hidden')
);

hideModalButton.addEventListener('click', (e) => {
	e.preventDefault();
	modal.classList.toggle('hidden');
});

modal.addEventListener('click', (e) => {
	if (e.path[0] === modal) {
		modal.classList.toggle('hidden');
	}
});
