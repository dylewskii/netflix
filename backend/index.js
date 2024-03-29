const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Express running");
});
