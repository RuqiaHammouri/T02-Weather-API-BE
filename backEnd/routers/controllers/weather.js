const weathersModel = require("../../db/models/weather");

const getWeathers = (req, res) => {
    articlesModel
      .find({})
     .then((weathers) => {
        res.status(200).json({
          success: true,
          message: `All contry weathers`,
          weathers,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
         
        });
      });
  };

  module.exports = {
    getWeathers
  };
  