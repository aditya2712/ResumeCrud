require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");

// Database Connection
require("./db_connection");

app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use("/api", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
