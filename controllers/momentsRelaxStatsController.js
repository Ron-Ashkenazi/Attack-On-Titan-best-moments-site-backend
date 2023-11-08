const { request } = require("express");
const MomentsRelaxStats = require("../models/momentsRelaxStatsModel");

const getMomentsRelaxStats = (req, res, next) => {
  MomentsRelaxStats.find()
    .sort({ order: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

const updateVotesRelaxStats = async (req, res, next) => {
  const { id, label } = req.body;

  MomentsRelaxStats.findOne({ id })
    .then(async (moment) => {
      if (!moment) {
        return res.status(404).json({ error: "Moment not found" });
      }

      const voteData = moment.voteData;
      const labelToUpdate = voteData.find((item) => item.label === label);

      if (!labelToUpdate) {
        return res.status(404).json({ error: "Label not found" });
      }

      labelToUpdate.votes += 1;

      await MomentsRelaxStats.updateOne(
        { id: moment.id, "voteData.label": label },
        { $inc: { "voteData.$.votes": 1 } }
      );

      res.json(moment);
    })
    .catch((error) => res.status(500).json({ error: "Error finding moment" }));
};

const resetAllVoteDataRelaxStats = (req, res, next) => {
  const updatedVoteData = [
    {
      label: "1",
      votes: 0,
    },
    {
      label: "2",
      votes: 0,
    },
    {
      label: "3",
      votes: 0,
    },
    {
      label: "4",
      votes: 0,
    },
    {
      label: "5",
      votes: 0,
    },
    {
      label: "6",
      votes: 0,
    },
    {
      label: "7",
      votes: 0,
    },
    {
      label: "8",
      votes: 0,
    },
    {
      label: "9",
      votes: 0,
    },
    {
      label: "10",
      votes: 0,
    },
  ];
  // Use the updateMany() method to update the field in all documents
  MomentsRelaxStats.updateMany({}, { $set: { voteData: updatedVoteData } })
    .then((result) => {
      res.json(`${result.nModified} All relax stats reseted.`);
    })
    .catch((error) => {
      res.json(error);
    });
};

const updateAllVoteDataRelaxStats = async (req, res, next) => {
  try {
    const updateArray = req.body; // The array from the frontend

    // Loop through the updateArray and update each moment
    for (let i = 0; i < updateArray.length; i++) {
      const moment = await MomentsRelaxStats.findOne({ order: i + 1 }); // Find the moment by order
      if (!moment) {
        console.log("error");
        return res
          .status(404)
          .json({ message: `Moment with order ${i + 1} not found` });
      }
      const labelToUpdate = updateArray[i].toString();

      await MomentsRelaxStats.updateOne(
        {
          id: moment.id,
          "voteData.label": labelToUpdate,
        },
        { $inc: { "voteData.$.votes": 1 } }
      );
    }

    res.json({ message: "Moments updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getMomentsRelaxStats,
  updateVotesRelaxStats,
  resetAllVoteDataRelaxStats,
  updateAllVoteDataRelaxStats,
};
