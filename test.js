var tessel = require('tessel');
var ambientlib = require('ambient-attx4');

var ambient = ambientlib.use(tessel.port['A']);

ambient.on('ready', function () {
 // Get points of light and sound data.
  setInterval( function () {
    console.log("interval!");
    ambient.getSoundBuffer(function(err, data) {
      console.log(data);
    });
  }, 2000);
});

ambient.on('error', function (err) {
  console.log(err)
});
