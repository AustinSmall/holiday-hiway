const router = require("express").Router();

const userRoutes = require("./user-routes.js");

const houseRoutes = require("./house-routes");

router.use("/users", userRoutes);

router.use("/houses", houseRoutes);

module.exports = router;