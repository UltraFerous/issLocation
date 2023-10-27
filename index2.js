const { nextISSTimesForMyLocation } = require('./iss_promised');

// Call 
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

const printPassTimes = function(times) {
  for (const pass of times.response) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    let minutes = Math.round(duration / 60);
    let seconds = duration % 60;
    console.log(`The next ISS flyover is at ${datetime} for about ${minutes} minute(s) and ${seconds} seconds!`);
  }
};