const { Client } = require("pg");

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

module.exports = client;
