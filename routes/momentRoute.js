const express = require("express");
const router = express.Router();

const { getMoments } = require("../controllers/momentsController");

router.get("/", getMoments);

module.exports = router;
