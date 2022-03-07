const express = require("express");
const { getWeathers } = require("../controllers/weather");

const weatherRouter = express.Router();
weatherRouter.get("/weather", getWeathers);

module.exports = weatherRouter;