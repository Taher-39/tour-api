const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("colors");
const dbConnect = require("./config/db");
const tourRoute = require("./routes/tour.route");

// database connection
dbConnect();

//middlewares
app.use(express.json());
app.use(cors());

//route
app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// posting to database
app.use("/api/v1/tour", tourRoute);

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
