const mongoose = require("mongoose");
const momentsSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "ID missing"],
    },
    title: {
      type: String,
      required: [true, "Title missing"],
    },
    season: {
      type: String,
      required: [true, "Season missing"],
    },
    episode: {
      type: String,
      required: [true, "Episode missing"],
    },
    paragraph: {
      type: String,
      required: [true, "Paragraph missing"],
    },
    slides: {
      type: Object,
      required: [true, "Slides missing"],
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

const Moment = mongoose.model("Moment", momentsSchema);
module.exports = Moment;
