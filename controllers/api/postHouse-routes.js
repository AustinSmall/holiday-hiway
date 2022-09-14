const router = require("express").Router();
const sequelize = require("../config/connection");
const { House, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/postHouse", (req, res) => {
	res.render("posthouse");
  console.log("Your house has been submitted!");
});

module.exports = router;
