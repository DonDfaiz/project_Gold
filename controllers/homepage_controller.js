const path = require("path");

function homePage_controller(req, res) {
  res.sendFile(path.join(__dirname, "../views/homePage.html"));
}

module.exports = homePage_controller;
