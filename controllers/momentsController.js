const { request } = require("express");
const Moment = require("../models/momentsModel");

const getMoments = (req, res, next) => {
  Moment.find()
    .sort({ order: 1 }) // Sorting in ascending order based on the "order" field
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

module.exports = {
  getMoments,
};
