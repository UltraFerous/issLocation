// iss_promised.js
const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
};

const fetchISSFlyOverTimes = function(body) {
  const location = JSON.parse(body);
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${location.latitude}&lon=${location.longitude}`);
};

const nextISSTimesForMyLocation = function() {
  // index2.js
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      const data = JSON.parse(body);
      return data;
    });
};

module.exports = { nextISSTimesForMyLocation };


