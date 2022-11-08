require("dotenv").config();
const express = require("express");
// Database Connection
require("./db_connection");

app = express();

// Test Route
app.get("/", (req, res) => {
  res.send("Health Check OK");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
