var serialport = require("serialport");
var axios = require("axios");
var SerialPort = serialport.SerialPort;
var port = new SerialPort("/dev/cu.usbmodem1421", {
  baudrate: 9600,
  parser: serialport.parsers.readline('\n')
});

port.on('open', function() {
  console.log("Port opened!");
});

port.on('data', function(data) {
  console.log("data:", data);
  if (isNaN(parseInt(data))) {
    console.warn("Bogus data retrieved, not sending", data);
    return;
  }
  axios.get("http://IP.AD.DR.ESS:4000/data?value=" + data)
    .then(function() {
      console.log("\tPosted heartrate!");
    })
    .catch(function(err) {
      console.error(err);
    });
});
