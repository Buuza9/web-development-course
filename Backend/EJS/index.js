import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	const today = new Date();
	const dayOfWeek = today.getDay();

	let dayType = "a weekday";
	let advice = "It's time to work hard.";

	if (dayOfWeek === 1 || dayOfWeek === 6) {
		dayType = "a Weekend";
		advice = "It's time to chill and enjoy your holiday.";
	}
	res.render("index.ejs", {
		dayType: dayType,
		advice: advice,
	});
});

app.listen(port, () => {
	console.log(`Your srver is running on port ${port}`);
});
