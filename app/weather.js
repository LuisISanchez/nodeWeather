const axios = require("axios");

const getWeather = async (lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=59f2ea36c33e62d53ba1aed624f50137`)
    return resp.data.main.temp;
}

module.exports = {
    getWeather
}