require('dotenv').config();
const express = require("express");
const { Sequelize } = require("sequelize");

// mysql DB connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

try {
  sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
  }).catch((err) => {
    console.error("Unable to connect to the database:", err);
    });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
