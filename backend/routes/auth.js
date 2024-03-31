/* eslint-disable no-unused-vars */
const User = require("../models/User");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    // User not found
    if (!user) {
      res.status(401).json({ msg: "Wrong password or username", code: 401 });
    }

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    // Password mismatch
    if (originalPassword !== req.body.password) {
      res.status(401).json({ msg: "Wrong password or username", code: 401 });
    }

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_KEY,
      { expiresIn: "5d" }
    );

    // Omit the password from the user object before sending it back
    const { password, ...userData } = user._doc;

    res.status(200).json({ user: userData, token: accessToken });
  } catch (error) {
    console.error(error);
    // res.status(500).json(error);
    if (!res.headersSent) {
      res
        .status(500)
        .json({ message: "An error occurred during the login process." });
    }
  }
});

module.exports = router;
