const {
    argv
} = require("./config/yargs");

const place = require('./app/place');
const weather = require('./app/weather')
const {
    city,
    unit
} = argv;

let getUnit = unit => {
    switch (unit) {
        case "standard":
            return "°K"
        case "metric":
            return "°C"
        case "imperial":
            return "°F"
        default:
            return "°K"
    }
}

let getInfo = async (city, unit) => {
    let uMess = getUnit(unit);
    try {
        let coords = await place.getLocation(city);
        let temp = await weather.getWeather(coords.latitude, coords.longitude, unit);
        return `The actual weather in ${coords.address} is: ${ temp }${uMess}`;
    } catch (e) {
        return `An error has occurred while trying to get the weather of ${ city }`;
    }
}

getInfo(city, unit).then(res => console.log(res)).catch(e => console.log(e))