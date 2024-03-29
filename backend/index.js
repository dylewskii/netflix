const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// routes
const authRouter = require("./routes/auth");

const port = process.env.PORT || 3000;
const app = express();
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth/", authRouter);

app.listen(port, () => {
  console.log("Express running");
});
