// const https = require("node:https");

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

// getCountdown();
