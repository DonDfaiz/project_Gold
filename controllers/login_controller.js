const path = require("path");

function login_controller(req, res) {
  res.sendFile(path.join(__dirname, "../views/loginPage.html"));
}

module.exports = login_controller;
