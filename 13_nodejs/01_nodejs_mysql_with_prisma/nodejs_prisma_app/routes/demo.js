const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json({ data: "ciao", message: "hello" });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ message: error });
  }
});

module.exports = router;