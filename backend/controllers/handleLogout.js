function handleLogout(req, res) {
  try {
    res.clearCookie("_uid");
    return res.status(200).send("Cookie cleared successfully");
  } catch (err) {
    console.log("Error ", err);
    return res.status(400).send("Cannot clear cookie");
  }
}
module.exports = handleLogout;
