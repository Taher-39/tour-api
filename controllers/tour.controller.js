const TourModel = require("../models/TourModel");
const {
  createTourService,
  getTourService,
  getSingleTourService,
  updateTourService,
  getCheapestTourService,
} = require("../services/tour.services");

exports.getTour = async (req, res, next) => {
  try {

    const querieObject = {};

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      querieObject.fields = fields;
    }

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      querieObject.sortBy = sortBy;
    }

    const tours = await getTourService(querieObject);

    res.status(200).json({
      status: "success",
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

exports.createTour = async (req, res, next) => {
  try {
    // save or create
    const result = await createTourService(req.body);

    res.status(200).json({
      status: "success",
      message: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: " Data is not inserted ",
      error: error.message,
    });
  }
};

//get single tour using id
exports.getSingleTour = async (req, res, next) => {
  try {
    const tour = await getSingleTourService(req.params.id);

    res.status(200).json({
      status: "success",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

//get 3 Cheapest Tour
exports.getCheapestTour = async (req, res, next) => {
  try {
    const result = await getCheapestTourService();

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

//update a single tour
exports.updateTour = async (req, res, next) => {
  try {
    const updateTour = await updateTourService(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      message: "tour update successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};
