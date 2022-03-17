console.log('Hello!');

const observer = new IntersectionObserver((entries) => {
	console.log(entries);
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('reveal');
			return;
		}
		entry.target.classList.remove('reveal');
	});
}, {rootMargin: "-32px", threshold: 1.0});

const listItems = document.querySelectorAll('.services__list__item');
listItems.forEach((el) => observer.observe(el));
