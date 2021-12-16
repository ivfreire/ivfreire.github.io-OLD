/*
	Created by Ícaro Freire on October 5th, 2021.
	São Paulo, Brazil
	https://github.com/ivfreire/
*/

window.onload = function() {
	$.get('https://icarofreire.com/?s=reddit', function(data) {
		console.log(data);
	});
}