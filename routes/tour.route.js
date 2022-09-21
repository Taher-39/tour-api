const express = require("express");
const TourController = require("../controllers/tour.controller");
const router = express.Router();

router.route("/").get(TourController.getTour).post(TourController.createTour);

router.route("/cheapest").get(TourController.getCheapestTour);

router
  .route("/:id")
  .get(TourController.getSingleTour)
  .patch(TourController.updateTour);

module.exports = router;
