const Animation = {
	init: function() {
		this.canvas = document.getElementsByTagName('canvas')[0];
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;

		this.ctx = this.canvas.getContext('2d');
	}
};

window.onload = function() {
	Animation.init();
}