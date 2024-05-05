// TODO : Module
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
// const homePage_controller = require("./controllers/homepage_controller");
// const login_controller = require("./controllers/login_controller");
// const dashboard_controller = require("./controllers/dashboard_controller");
const PORT = 4567;
const server = express();
const { Client } = require("pg");
const client = require("./db/db");
const fileUpload = require("express-fileupload");
const bookRoutes = require("./routes/bookRoutes");
const homeRoutes = require("./routes/homeRoutes");

// TODO : Middleware
server.use(express.json());
server.use(express.urlencoded());
server.use(methodOverride("_method"));
server.set("view engine", "ejs");
server.use("/buku", bookRoutes);
server.use("/", homeRoutes);
server.use(express.static(path.join(__dirname, "views")));
server.use(express.static("public"));
server.use(fileUpload());
// config DB
// const client = new Client({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
// });

// tesDB
// server.get("/test", async (req, res) => {
//   const data = await client.query(` SELECT * FROM admin`);
//   res.status(200).json(data.rows);
// });

// TODO : Router
//homePage
// server.get("/", homePage_controller);

// //login-page
// server.get("/login-page", login_controller);

// //Dashboard
// server.get("/dashboard", dashboard_controller);

// // transaksi
// server.get("/transaksi", (req, res) => {
//   res.status(200).send("suskes");
// });

// //history
// server.get("/history", (req, res) => {
//   res.status(200).send("sukses");
// });

// //data pengguna
// server.get("/data-pengguna", (req, res) => {
//   res.status(200).send("sukses");
// });

// //profile setting
// server.get("/profile", (req, res) => {
//   res.status(200).send("sukses");
// });

// //feedback
// server.get("/feedback", (req, res) => {
//   res.status(200).send("sukses");
// });

// //feedback Container
// server.get("/feedback-container", (req, res) => {
//   res.status(200).send("sukses");
// });
server.listen(PORT, () => {
  console.log("🚀 ~ server.listen ~ PORT:", PORT);
});
