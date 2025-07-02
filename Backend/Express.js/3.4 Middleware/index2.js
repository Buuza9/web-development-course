//Using morgan

import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
	res.send("Hello Morgan");
});

app.post("/submit", (req, res) => {
	res.send("<h1>Hello Morgan</h1>");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
