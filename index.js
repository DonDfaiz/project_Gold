// TODO : Module
const express = require("express");
const path = require("path");
const homePage_controller = require("./controllers/homepage_controller");
const login_controller = require("./controllers/login_controller");
const dashboard_controller = require("./controllers/dashboard_controller");
const PORT = 4567;
const server = express();

// TODO : Middleware
server.use(express.urlencoded());
server.use(express.static(path.join(__dirname, "views")));

// TODO : Router
//homePage
server.get("/", homePage_controller);

//login-page
server.get("/login-page", login_controller);

//Dashboard
server.get("/dashboard", dashboard_controller);

//Daftar Buku
server.get("/daftar-buku", (req, res) => {
  res.status(200).send("sukses");
});

// transaksi
server.get("/transaksi", (req, res) => {
  res.status(200).send("suskes");
});

//history
server.get("/history", (req, res) => {
  res.status(200).send("sukses");
});

//data pengguna
server.get("/data-pengguna", (req, res) => {
  res.status(200).send("sukses");
});

//profile setting
server.get("/profile", (req, res) => {
  res.status(200).send("sukses");
});

//feedback
server.get("/feedback", (req, res) => {
  res.status(200).send("sukses");
});

//feedback Container
server.get("/feedback-container", (req, res) => {
  res.status(200).send("sukses");
});
server.listen(PORT, () => {
  console.log("🚀 ~ server.listen ~ PORT:", PORT);
});
