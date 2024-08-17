const UserSchema = require("../models/user.model.js");

async function handleRegister(req, res) {
  try {
    const { username, email, password } = req.body;
    await UserSchema.create({ username, email, password });
    res.status(200).send("Registration Successful");
  } catch (err) {
    console.log("Error occured while registering user", err);
    res.status(500).send("Server error");
  }
}
module.exports = handleRegister;
