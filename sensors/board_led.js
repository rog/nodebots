var five = require("johnny-five"),
	board = new five.Board();

board.on("ready", function() {(
	led_red = new five.Pin('2');
});