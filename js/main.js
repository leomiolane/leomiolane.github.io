$(document).ready(function() {
	var $navbar=$('#navbar a');

	var $currentTab=$('#home');
	var $currentContent=$('#home-content');

	$currentContent.show();

	$navbar.on('click', function(e) {
		e.preventDefault();
		var targetId = $(e.currentTarget).attr('href');
		if (['#home','#research','#teaching','#links'].includes(targetId)){
			var $target = $(targetId);
			var $targetContent = $(targetId + '-content');

			$currentContent.hide();

			$currentTab=$target;
			$currentContent=$targetContent;

			$currentContent.show();
		}
	});

	var partJson = {
		"particles": {
			"number": {
				"value": 70,
				"density": {
					"enable": true,
					"value_area": 200
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
					//},
					//"image": {
					//"src": "img/github.svg",
					//"width": 100,
					//"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 30,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 200,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 2
			},
			"move": {
				"enable": true,
				"speed": 1.0,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "bounce",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 5000,
					"rotateY": 5000
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "repulse"
				},
				"onclick": {
					"enable": false,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 800,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 800,
					"size": 80,
					"duration": 2,
					"opacity": 0.8,
					"speed": 3
				},
				"repulse": {
					"distance": 400,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	};
	var jsonUri = "data:text/plain;base64,"+window.btoa(JSON.stringify(partJson));
	particlesJS.load('particles-js', jsonUri, function() {
		console.log('callback - particles.js config loaded');
	});
	console.log("js-loaded");
});

// NAVBAR MENU
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
			console.log('clickii')

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
