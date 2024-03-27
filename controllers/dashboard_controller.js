const path = require("path");

function dashboard_controller(req, res) {
  res.sendFile(path.join(__dirname, "../views/dashboard.html"));
}

module.exports = dashboard_controller;
