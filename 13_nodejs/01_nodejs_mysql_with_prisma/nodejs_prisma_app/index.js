require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const demoRoutes = require("./routes/demo");
const citiesRoute = require("./routes/cities");

const header = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Accept-Language", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
};

app.use(cors());
app.use(express.json());
app.use(header);

app.get("/", function(req, res) {
  res.send("It's working!");
});

app.use("/api/v1/demo", demoRoutes);
app.use("/api/v1/cities", citiesRoute);

app.listen(process.env.NODE_PORT, () => {
  console.log(`listening on http://0.0.0.0:${process.env.NODE_PORT}`);
});
