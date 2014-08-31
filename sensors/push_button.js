var five = require("johnny-five"),
    button, led, status = false;

five.Board().on("ready", function() {

  button = new five.Button({
    pin: 8
  });

  led = new five.Led(2);

  button.on("down", function(value) {
    console.log("down");
    status = ( status ) ? false : true;
    if( status ){
      led.on();
    } else {
      led.off();
    }
  });

  button.on("up", function() {
    console.log("up");
    
  });

});
