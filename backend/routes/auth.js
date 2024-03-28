/* eslint-disable no-unused-vars */
import User from "../models/User.js";
import express from "express";
const router = express.Router;

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  const user = newUser.save();
});

export default router;
