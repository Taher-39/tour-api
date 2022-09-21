const TourModel = require("../models/TourModel");

//create tour
exports.createTourService = async (data) => {
  const CreatedTour = await TourModel.create(data);
  return CreatedTour;
};

//get tour
exports.getTourService = async (querieObject) => {
  const getTours = await TourModel.find({})
    .select(querieObject.fields)
    .sort(querieObject.sortBy);
  return getTours;
};

//cheapest top 3
exports.getCheapestTourService = async () => {
  const getCheapestTours = await TourModel.find({}).sort({ cost: 1 }).limit(3);
  return getCheapestTours;
};

//get single tour using id
exports.getSingleTourService = async (id) => {
  const getSingleTour = await TourModel.findById(id);
  return getSingleTour;
};

//update tour usning id
exports.updateTourService = async (tourId, data) => {
  const result = await TourModel.updateOne(
    { _id: tourId },
    { $set: data },
    {
      runValidators: true,
    }
  );

  //old type
  // const tour = await TourModel.findById(tourId);
  // const result = await tour.set(data).save();
  return result;
};
