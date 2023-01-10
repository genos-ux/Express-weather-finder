
const axios = require('axios');

const API_KEY = "9c3cb98520f309bd159e77512e8e5e28";


const Weather = require('../model/Weather')
const homeHandler = (req,res) =>{
    res.render("index");
}

const aboutHandler = (req,res) =>{
    res.render("about");
}

const getWeather = (req,res)=>{
    const {city} = req.body;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    

    const weather = new Weather(`${city}`);
    weather.validateUserInput()

    if(weather.errors.length){
        res.render("index",{error: weather.errors.toString()})

    }else{

        axios.get(url)
        .then(result => 
            res.render("index", {
                weather: `It is currently ${result.data.main.temp} in ${result.data.name}`
            }))
        .catch(err => console.log('An error occured'));

    }

    

};

module.exports = {homeHandler, aboutHandler,getWeather};