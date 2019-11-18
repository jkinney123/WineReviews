const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wineSchema = new Schema({
  grape: { type: String },
  wineType: { type: String },
  price: { type: String },
  name: { type: String },
  year: { type: String },
  origin: { type: String },
  tastingNotes: { type: String },
  grade: { type: String },
  feel: { type: String },
  _id: { type: Schema.Types.ObjectId }
});

const wine = mongoose.model("wine", wineSchema);

module.exports = wine;
