const mongoose = require("mongoose");
const momentsHTHStatsSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "ID missing"],
    },

    win: {
      type: Number,
      required: [true, "Win missing"],
    },
    tie: {
      type: Number,
      required: [true, "Tie missing"],
    },
    lose: {
      type: Number,
      required: [true, "Lose missing"],
    },
    totalVotes: {
      type: Number,
      required: [true, "Total votes missing"],
    },
    order: {
      type: Number,
      required: [true, "Order missing"],
    },
  },

  {
    timestamps: true,
  }
);

const MomentsHTHStats = mongoose.model(
  "MomentsHTHStats",
  momentsHTHStatsSchema
);
module.exports = MomentsHTHStats;
