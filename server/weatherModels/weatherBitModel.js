


const fetch = require('node-fetch');

//This is WeatherBit
apiController.getWeather = (req, res, next) => {
    const {lat, long} = req.query;
    const url = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${long}&lat=${lat}`;
    
    //What is this doing?
    const options = {
        method: 'GET',
        headers: {
            //In order to connect an API to a project or application you need
            //an API key to authenticate your request
            'X-RapidAPI-Key': '221f8b9e91mshb9937d210b147b7p1161eajsn34c80789ddd4',
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    };
    
    fetch(url, options)
	.then(res => res.json())
	.then(data => {
        //This is 
        console.log(data);
        res.locals.coordinates = data;
        return next();
    })
	.catch(err => {
        return next(err)});
    };
   
    
module.exports = weatherBitModel;
