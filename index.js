// TODO : Module
const express = require("express");
const path = require("path");
const homePage_controller = require("./controllers/homepage_controller");
const login_controller = require("./controllers/login_controller");
const dashboard_controller = require("./controllers/dashboard_controller");
const PORT = 4567;
const server = express();
const { Client } = require("pg");

// TODO : Middleware
server.use(express.urlencoded());
server.use(express.static(path.join(__dirname, "views")));

// config DB
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
client.connect((error) => {
  if (error != null) {
    console.log(error);
  } else {
    console.log("connect to database");
  }
});

// tesDB
server.get("/test", async (req, res) => {
  const data = await client.query(` SELECT * FROM admin`);
  res.status(200).json(data.rows);
});

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
