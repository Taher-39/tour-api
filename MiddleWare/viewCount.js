const TourModel = require("../models/TourModel");

exports.viewCount = TourModel.pre("save", function (next) {
  let count = this.viewCount;
  this.viewCount = count + 1;
  
  next();
});
