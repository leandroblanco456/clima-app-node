const axios = require('axios');


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&appid=99c24f9fc6e1a71d1466dc6dc408eed7&lon=${lon}&units=metric`);
    return resp.data.main.temp;
}







module.exports = {
    getClima
}