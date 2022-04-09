const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();

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

app.listen(3000, () => {
  console.log("listening on port 3000");
});
