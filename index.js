// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
const inspect = require('util').inspect;

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  fetchCoordsByIP(ip, (error, address) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }
    // console.log('It worked! Location:', { latitude: address.latitude, longitude: address.longitude });

    fetchISSFlyOverTimes({ latitude: address.latitude, longitude: address.longitude }, (error, times) => {
      if (error) {
        console.log("It didn't work!", error);
        return;
      }
      console.log(inspect(times));
    });
  });
});


