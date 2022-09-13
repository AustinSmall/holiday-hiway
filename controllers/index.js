const router = require("express").Router();

const apiRoutes = require("./api");
const homepageRoutes = require("./homepage-routes.js");
const viewHomes = require("./view-homes-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");

router.use("/", homepageRoutes);
router.use("/api", apiRoutes);
router.use("/view-homes", viewHomes);
router.use("/dashboard", dashboardRoutes);

router.use((req, res) => {
	res.status(404).end();
});

module.exports = router;
