var five = require('johnny-five');

new five.Board().on('ready', function() {
  var bocina = new five.Led(2);
  var analog = new five.Sensor({
      pin: 'A0',
      freq: 100
  });


  console.log(">>> Ready.");

  analog.on( 'data', function() {
    console.log( this.value );
    if( this.value < 15 )
      bocina.on();
    else
      bocina.off();
  });
});