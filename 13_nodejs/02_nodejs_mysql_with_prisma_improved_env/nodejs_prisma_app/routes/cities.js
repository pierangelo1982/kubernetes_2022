const express = require("express");
const router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  try {
    const cities = await prisma.city.findMany({});
    res.status(201).json({ message: "success", data: cities });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ message: error });
  }
});

module.exports = router;
