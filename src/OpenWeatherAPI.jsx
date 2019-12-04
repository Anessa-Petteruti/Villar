var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&APPID=cf71005f6bba53fa87c47a2f8cd10566';
module.exports = {
  getTemp: function (Lat,Long) {
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&lat=${Lat}&lon=${Long}`;
return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}