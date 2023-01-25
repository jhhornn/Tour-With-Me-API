const express = require("express")

const router = express.Router()

router
    .route("/")
    .get(getAllTours)
    .post(createTours)


router
    .route("/:id")
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour)

module.exports = router

