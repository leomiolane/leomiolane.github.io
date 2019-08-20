document.addEventListener('DOMContentLoaded', () => {

	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
	const $navbarClickers = Array.prototype.slice.call(document.querySelectorAll('.navbar-clicker'), 0);


	// Add a click event on each of them
	$navbarBurgers.forEach( el => {
		// Get the target from the "data-target" attribute
		const target = el.dataset.target;
		const $target = document.getElementById(target);
		el.addEventListener('click', () => {
			// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
			el.classList.toggle('is-active');
			$target.classList.toggle('is-active');

		});
		$navbarClickers.forEach( cli => {
			cli.addEventListener('click', () => {
				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.remove('is-active');
				$target.classList.remove('is-active');

			});
		});
	});

});
