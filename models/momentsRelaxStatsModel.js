const mongoose = require("mongoose");
const momentsRelaxStatsSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "ID missing"],
    },

    voteData: {
      type: Object,
      required: [true, "Vote data missing"],
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

const MomentsRelaxStats = mongoose.model(
  "MomentsRelaxStats",
  momentsRelaxStatsSchema
);
module.exports = MomentsRelaxStats;
