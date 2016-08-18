//Para efecto Parallax
window.addEventListener("scroll", efectoParallax);
function efectoParallax(){
	var depth=[], movimiento=[],traslada=[];
	var topDistancia = window.pageYOffset;
	var capas = document.querySelectorAll("[data-type='parallax']");
	for (var i = 0; i <=2; i++) {
		depth[i]=parseFloat(capas[i].getAttribute('data-depth'));
		movimiento[i]=-(topDistancia * depth[i]);
		traslada[i] = 'translate3d(0, ' + movimiento[i] + 'px, 0)';
		capas[i].style['-webkit-transform'] = traslada[i];
  		capas[i].style['-moz-transform'] = traslada[i];
		capas[i].style['-ms-transform'] = traslada[i];
		capas[i].style['-o-transform'] = traslada[i];
		capas[i].style.transform = traslada[i];
	}
}
//Para menu
var controller = new ScrollMagic.Controller();
	$(function () { 
		var scene = new ScrollMagic.Scene({triggerElement: "#menu"})
						.setPin("#menu")
		//				.addIndicators({name: "2 (duration: 0)"}) 
						.addTo(controller);
	});