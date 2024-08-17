const UserSchema = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function handleLogin(req, res) {
  const { username, password } = req.body;
  try {
    const user = await UserSchema.findOne({ username: username });
    if(!user)return res.status(401).send("Unauthorized");
    
    const token = jwt.sign(
      { username: username, email: user.email },
      process.env.JWT_SECRET_KEY
    );
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).send("Unauthorized");
    res.cookie("_uid", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).send("Cookie has been set and response sent");
  } catch (err) {
    console.log("Error in handleLogin", err);
    return res.status(401).send("Unauthorized");
  }
}
module.exports = handleLogin;
