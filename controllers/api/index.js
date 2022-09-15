const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const cloudinaryRoutes = require('./cloudinary-route');
const houseRoutes = require("./house-routes");

router.use("/users", userRoutes);
router.use("/cloudinary", cloudinaryRoutes);
router.use("/houses", houseRoutes);

module.exports = router;