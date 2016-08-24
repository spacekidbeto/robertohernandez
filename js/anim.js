/* Matrix */
var	$window = $(window);
var Matrix = (function() {
	var	idName = 'bg-matrix';

	return {
		init: function() {
			if ($('#'+idName).length > 0){
				$window.resize(
					(function (self) {
						return function() {
							self.winSize(self);
						};
					})(this)
				).trigger('resize');

				var
					c = document.getElementById(idName),
					ctx = c.getContext("2d"),
					chinese = "0123456789qwertyuiopasdfghjklzxcvbnm,./;'\[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?",
					font_size = 16,
					columns = c.width / font_size,
					drops = [];

				chinese = chinese.split("");

				for (var x = 0; x < columns; x++)
					drops[x] = 1;

				function draw()
				{
					ctx.fillStyle = $('#'+ idName).attr('data-bg');
					ctx.fillRect(0, 0, c.width, c.height);

					ctx.fillStyle = $('#'+ idName).attr('data-color'); //green text
					ctx.font = font_size + "px arial";
					for (var i = 0; i < drops.length; i++)
					{
						var text = chinese[Math.floor(Math.random() * chinese.length)];
						ctx.fillText(text, i * font_size, drops[i] * font_size);

						if (drops[i] * font_size > c.height && Math.random() > 0.975)
							drops[i] = 0;

						drops[i]++;
					}
				}

				setInterval(draw, 45);

			}
		},
		winSize: function (){
			var
				c = document.getElementById(idName);

			c.height = window.innerHeight;
			c.width = window.innerWidth;
		}
	};
})();

Matrix.init();