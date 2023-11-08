const { request } = require("express");
const MomentsHTHStats = require("../models/momentsHTHStatsModel");

const getMomentsHTHStats = (req, res, next) => {
  MomentsHTHStats.find()
    .sort({ order: 1 }) // Sorting in ascending order based on the "order" field
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

const updateVotesHTHStats = async (req, res, next) => {
  try {
    const { id1, id2, label } = req.body;

    if (!id1 || !id2 || !label) {
      return res.status(400).json({ error: "Invalid request data" });
    }

    // Find the moments based on id1 and id2
    const moment1 = await MomentsHTHStats.findOne({ id: id1 });
    const moment2 = await MomentsHTHStats.findOne({ id: id2 });

    if (!moment1 || !moment2) {
      return res.status(404).json({ error: "Moment not found" });
    }

    // Update the win, tie, and lose values based on the label
    if (label === "first") {
      moment1.win += 1;
      moment2.lose += 1;
    } else if (label === "second") {
      moment2.win += 1;
      moment1.lose += 1;
    } else if (label === "tie") {
      moment1.tie += 1;
      moment2.tie += 1;
    } else {
      return res.status(400).json({ error: "Invalid label" });
    }

    // Increment the totalVotes for both moments
    moment1.totalVotes += 1;
    moment2.totalVotes += 1;

    // Save the updated moments
    await moment1.save();
    await moment2.save();

    return res.json({ success: true });
  } catch (error) {
    console.error("Error updating moments:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateAllVoteDataHTHStats = (req, res, next) => {
  // Use the updateMany() method to update the field in all documents
  MomentsHTHStats.updateMany(
    {},
    { $set: { win: 0, tie: 0, lose: 0, totalVotes: 0 } }
  )
    .then((result) => {
      res.json(`${result.nModified} All relax stats reseted.`);
    })
    .catch((error) => {
      res.json(error);
    });
};

module.exports = {
  getMomentsHTHStats,
  updateVotesHTHStats,
  updateAllVoteDataHTHStats,
};
