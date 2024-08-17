const jwt = require("jsonwebtoken");

async function validateRequest(req, res) {
  try {
    const token = req.cookies._uid;
    if (token == null) return res.status(401).send("Login first");
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return res.status(403).send("Fake token");
      // req.user = user;   //idk wtf is use of this
      return res.status(200).send(user);
    });
  } catch (err) {
    console.log("Internal Error", err);
  }
}
module.exports = validateRequest;
