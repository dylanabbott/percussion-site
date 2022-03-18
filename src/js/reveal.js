console.log("Reveal script loaded.");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry, index) => {
            setTimeout(function () {
							if (entry.isIntersecting) {
								entry.target.classList.add('reveal');
							}
						}, 300*index);
		});
	},
	{ rootMargin: '0px', threshold: 1.0 }
);

const listItems = document.querySelectorAll('.services__list__item');
listItems.forEach((el) => observer.observe(el));
