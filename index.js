const express = require("express");
const PORT = 4567;

const server = express();
// TODO : Middleware
server.use(express.urlencoded());

// TODO : Router
//homePage
server.get("/login-page", (req, res) => {
  res.status(200).send("sukses");
});

//Dashboard
server.get("/dashboard", (req, res) => {
  res.status(200).send("sukses");
});

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
