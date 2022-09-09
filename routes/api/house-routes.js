const router = require("express").Router();
const { House } = require("../../models");

// localhost:3000/api/housers
router.post("/", async (req, res) => {
    try {
        const houseData = await House.create(req.body);

        return res.json(houseData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// router.get("/", async (req, res) => {
// 	// Access our User model and run .findAll() method)
// 	User.findAll({
// 		attributes: { exclude: ["password"] },
// 	})
// 		.then((dbUserData) => res.json(dbUserData))
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(500).json(err);
// 		});
// });

// router.delete("/:id", (req, res) => {
// 	User.destroy({
// 		where: {
// 			id: req.params.id,
// 		},
// 	})
// 		.then((dbUserData) => {
// 			if (!dbUserData) {
// 				res.status(404).json({ message: "No user found with this id" });
// 				return;
// 			}
// 			res.json(dbUserData);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(500).json(err);
// 		});
// });

module.exports = router;