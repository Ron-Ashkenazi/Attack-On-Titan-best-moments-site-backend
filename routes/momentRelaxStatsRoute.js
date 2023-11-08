const express = require("express");
const router = express.Router();

const {
  getMomentsRelaxStats,
  updateVotesRelaxStats,
  resetAllVoteDataRelaxStats,
  updateAllVoteDataRelaxStats,
} = require("../controllers/momentsRelaxStatsController");

router.get("/", getMomentsRelaxStats);
router.patch("/", updateVotesRelaxStats);
router.patch("/resetVotes", resetAllVoteDataRelaxStats);
router.patch("/updateAllVotes", updateAllVoteDataRelaxStats);
module.exports = router;
