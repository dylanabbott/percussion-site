console.log('Form Submission Loaded!');

const contactForm = document.getElementById('form-body');
const modalFrame = document.getElementById('contact-form');
// console.log(contactForm);

const submitBtn = document.getElementById('submit-btn');
// console.log(submitBtn);

function submitForm(e) {
	e.preventDefault();
	if (!contactForm.checkValidity()) {
		contactForm.reportValidity();
		// console.log('Invalid!');
	} else {
		let formData = new FormData(contactForm);
		formData.append('_replyto', formData.get('email'));
		let formSubmission = Object.fromEntries(formData.entries());
		//console.log(formSubmission);

		// fetch('https://formsubmit.co/ajax/72a94a8f26281b097d6ba54ad8887041', {
		// 	method: 'POST',
		// 	body: JSON.stringify(formSubmission),
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => console.log(data))
		// 	.catch((error) => console.log(error));

		confirmSubmission();
	}
}

submitBtn.addEventListener('click', submitForm);

function confirmSubmission() {
	const submitMsg = document.createElement('div');
	submitMsg.innerHTML =
		'<h3>Thanks for contacting us!</h3><p>We will review your project and respond shortly.</p>';
	contactForm.classList.add('invisible');
	modalFrame.append(submitMsg);
	submitMsg.classList.add('submitted');
}
