const request = require('request')

const forecast = (latitude, longitude, callback) => {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&
    exclude=current&appid=67d341db96aa3c16ae1372e69eae93f7`

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location service', undefined)
        } else if (body.current.weather.length === 0){
            callback('Unable to find location', undefined)
        } else {
            let temp = Math.ceil(body.current.temp - 273)
            callback(undefined, `Temperature is ${temp}`)
        }
    })
}

module.exports = forecast