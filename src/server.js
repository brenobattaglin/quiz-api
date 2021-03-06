const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes"); // includes the routes.js file
const cors = require("cors"); // includes cors module

require("dotenv").config();

app.use(cors()); // it tells express to use CORS
app.use(express.json()); //it tells the server to use json as well
app.use(routes); // it tells the server to use the routes in routes.js

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.DB_NAME,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("database connected"));

app.listen(process.env.PORT, () => {
  console.log("The API is running...");
});
