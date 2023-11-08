const express = require("express");
const router = express.Router();

const {
  getMomentsHTHStats,
  updateVotesHTHStats,
  updateAllVoteDataHTHStats,
} = require("../controllers/momentsHTHStatsController");

router.get("/", getMomentsHTHStats);
router.patch("/", updateVotesHTHStats);
router.patch("/resetVotes", updateAllVoteDataHTHStats);
module.exports = router;
