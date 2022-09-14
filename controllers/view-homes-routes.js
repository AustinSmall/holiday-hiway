const router = require("express").Router();
const sequelize = require("../config/connection");
const { House, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
	House.findAll({
		// where: {
		// 	// use the ID from the session
		// 	user_id: req.session.user_id,
		// },
		attributes: [
			"id",
			"owner_name",
			"address_1",
			"address_2",
			"city",
			"state",
			"zip",
			"created_at",
		],
		include: [
			{
				model: User,
				attributes: ["id"],
			},
		],
	})
		.then((housePostData) => {
			// serialize data before passing to template
			const houses = housePostData.map((house) => house.get({ plain: true }));
			res.render("view-houses", { houses, loggedIn: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
