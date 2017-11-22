$(document).ready(function() {
	var $navbar=$('#navbar a');

	var $currentTab=$('#home');
	var $currentContent=$('#home-content');

	$currentTab.addClass('is-active');
	$currentContent.show();

	$navbar.on('click', function(e) {
		e.preventDefault();
		var targetId = $(e.currentTarget).attr('href');
		var $target = $(targetId);
		var $targetContent = $(targetId + '-content');

		$currentTab.removeClass('is-active');
		$currentContent.hide();

		$currentTab=$target;
		$currentContent=$targetContent;

		$currentTab.addClass('is-active');
		$currentContent.show();
	});
	//var windowHeight = window.innerHeight;
	//var clientHeight = document.getElementById('particles-js').clientHeight;
	//var sectionHeight = (windowHeight - clientHeight).toString().concat("px")
	//document.getElementById("research-content").style.height = sectionHeight;
	//document.getElementById("links-content").style.height = sectionHeight;
	//document.getElementById("teaching-content").style.height = sectionHeight;
	//document.getElementById("home-content").style.height = sectionHeight;
	//console.log(sectionHeight)

	var partJson = {
		"particles": {
			"number": {
				"value": 100,
				"density": {
					"enable": true,
					"value_area": 800
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
				"value": 0.4,
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
				"distance": 300,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 2
			},
			"move": {
				"enable": true,
				"speed": 5,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "bounce",
				"bounce": true,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
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
				"resize": false
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
