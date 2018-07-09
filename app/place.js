const axios = require("axios");

const getLocation = async city => {
    let encodedURL = encodeURI(city);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedURL }&key=AIzaSyCWY7xqWIram5PPPWVbXyN_I22rC02OQY0`);
    if (resp.data.status == "ZERO_RESULTS") {
        throw new Error("City not found");
    }
    let location = resp.data.results[0];
    let address = location.formatted_address;
    let latitude = location.geometry.location.lat;
    let longitude = location.geometry.location.lng;
    return {
        address,
        latitude,
        longitude
    }
}

module.exports={
    getLocation
}