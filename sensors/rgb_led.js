var five = require("johnny-five"),
    keypress = require("keypress");

five.Board().on("ready", function() {
  var led = new five.Led.RGB({
    pins: {
      red: 2,
      green: 4,
      blue: 6
    }
  });

  // Turn it on and set the initial color
  led.on();
  led.color("#FF0000");

  // Listen for user input to change the RGB color
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);

  var keymap = {
    r: "#FF0000", // red
    g: "#00FF00", // green
    b: "#0000FF", // blue
    w: "#FFFFFF" // white
  };

  process.stdin.on("keypress", function(ch, key) {

    if (!key) return;

    if (keymap[key.name]) {
      led.color(keymap[key.name]);
    } else {
      led.off();
    }

  });
});