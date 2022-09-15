const router = require("express").Router();
// const https = require("https");

// const days = document.querySelector("#countdownDays");

router.get("/", (req, res) => {
	// getCountdown();
	res.render("homepage");
});

router.get("/login", (req, res) => {
	console.log(req.session);
	if (req.session.isLoggedIn) {
		console.log("The user is logged in");
		res.redirect("/");
		return;
	}
	res.render("login");
});

router.get("/signup", (req, res) => {
	res.render("sign-up");
});

// const getCountdown = function () {
// 	const apiUrl = "https://christmas-days.anvil.app/_/api/get_days";

// 	console.log("made it to fetch");

// 	const request = https.request(apiUrl, (response) => {
// 		let data = "";
// 		response.on("data", (chunk) => {
// 			data = data + chunk.toString();
// 		});

// 		response.on("end", () => {
// 			const body = JSON.parse(data);
// 			const daysToXmas = body["Days to Christmas"];
// 			days.setAttribute("src", daysToXmas);

// 			console.log(body);
// 			// console.log(daysToXmas);
// 		});
// 	});

// 	request.on("error", (error) => {
// 		console.log("An error", error);
// 	});

// 	request.end();
// };

module.exports = router;

// module.exports = getCountdown;
