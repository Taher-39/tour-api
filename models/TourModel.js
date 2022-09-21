const mongoose = require("mongoose");
// schema design
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Insert valid tour spot name."],
      unique: [true, "This spot already added."],
      minLength: [3, "Name must minimum 3 characters"],
      maxLength: [100, "Name must maximum 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Insert tour description."],
    },
    cost: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["tk", "uro", "riyal", "usd"],
        message: "{VALUE} as a unit is not supported. must be tk/uro/riyal/usd",
      },
    },
    viewCount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//create model

const TourModel = new mongoose.model("TourModel", tourSchema);

module.exports = TourModel;
