const router = require("express").Router();
const { House } = require("../../models");
const withAuth = require('../../utils/auth');

// localhost:3000/api/housers
router.post("/", withAuth, async (req, res) => {
    try {
        const houseData = await House.create(req.body);

        return res.json(houseData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    try {

        const { user_id } = req.query;

        const houseData = await House.findAll({
            where: {
                created_by_user_id: user_id
            }
        });

        return res.json(houseData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete("/:id", withAuth, (req, res) => {
	House.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbHouseData) => {
			if (!dbHouseData) {
				res.status(404).json({ message: "No house found with this id" });
				return;
			}
			res.json(dbHouseData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;