const {
    argv
} = require("./config/yargs");

const place = require('./app/place');
const weather = require('./app/weather')
const {
    city
} = argv;

let getInfo = async (city) => {
    try {
        let coords = await place.getLocation(city);
        let temp = await weather.getWeather(coords.latitude, coords.longitude);
        return `The actual weather in ${coords.address} is: ${ temp }°C`;
    } catch (e) {
        return `An error has occurred while trying to get the weather of ${ city }`;
    }
}

getInfo(city).then(res => console.log(res)).catch(e => console.log(e))