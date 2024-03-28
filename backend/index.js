import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";

const app = express();
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Backend active");
});
