var five = require('johnny-five');

new five.Board().on('ready', function() {
  
  var analog = new five.Sensor({
      pin: 'A0',
      freq: 100
  });


  console.log(">>> Ready.");

  analog.on( 'data', function() {
    console.log( this.value );
  });

});