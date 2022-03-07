const mongoose = require("mongoose");

const weathers = new mongoose.Schema({
  degree: { type: String, required: true },
  contry: { type: String, required: true },
});

module.exports = mongoose.model("Weathers", weathers);
