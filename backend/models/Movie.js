const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    releaseYear: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSmall: { type: String },
    trailer: { type: String },
    video: { type: String },
    genre: { type: String },
    ageLimit: { type: Number },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
