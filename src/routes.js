const router = require('express').Router();

const {homeHandler,aboutHandler,getWeather} = require('./controller/controller');

router.route("/home").get(homeHandler)

router.route("/home").post(getWeather)



router.route("/about").get(aboutHandler);

module.exports = router;